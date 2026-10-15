"""Fast, dependency-free static portfolio checks. CI verifies source integrity only."""
import re
import unittest
from html.parser import HTMLParser
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
HTML = (ROOT / 'index.html').read_text(encoding='utf-8')
JS = (ROOT / 'app.js').read_text(encoding='utf-8')
CSS = (ROOT / 'styles.css').read_text(encoding='utf-8')

class ParsePage(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.ids = set()
        self.local_links = []
        self.externals = []
        self.images = []
        self.projects = []
        self.duplicates = set()

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if 'id' in attrs:
            if attrs['id'] in self.ids:
                self.duplicates.add(attrs['id'])
            self.ids.add(attrs['id'])
        if tag in ('a', 'link', 'script', 'img'):
            target = attrs.get('href', attrs.get('src', ''))
            if target.startswith('http'):
                self.externals.append(target)
            elif target:
                self.local_links.append(target)
        if tag == 'img':
            self.images.append(attrs)
        if tag == 'article' and 'project-card' in attrs.get('class', ''):
            self.projects.append(attrs)

class SiteTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.page = ParsePage()
        cls.page.feed(HTML)

    def test_no_duplicate_ids(self):
        self.assertEqual(set(), self.page.duplicates)

    def test_six_unique_featured_labs(self):
        self.assertEqual(6, len(self.page.projects))
        self.assertEqual(6, len({p.get('data-project') for p in self.page.projects}))

    def test_local_paths_exist_or_match_fragments(self):
        for link in self.page.local_links:
            if link.startswith('mailto:') or link.startswith('data:'):
                continue
            path, *fragment = link.split('#', 1)
            if path:
                self.assertTrue((ROOT / path.split('?')[0]).exists(), f'missing asset: {link}')
            elif fragment and fragment[0]:
                self.assertIn(fragment[0], self.page.ids, f'missing fragment: {link}')

    def test_navigation_and_accessibility(self):
        for needed in ['main', 'work', 'lab', 'approach', 'contact', 'chart-svg', 'download-data', 'lab-filter']:
            self.assertIn(needed, self.page.ids)
        self.assertIn('aria-expanded="false"', HTML)
        self.assertIn('role="tablist"', HTML)
        self.assertIn('prefers-reduced-motion', CSS)
        for img in self.page.images:
            self.assertTrue(img.get('alt'), 'image without meaningful alt')

    def test_no_fake_benchmarks_or_client_data(self):
        combined = HTML + JS
        for prohibited in ('Banco Industrial', 'Menarini', 'Bocadeli', 'customer password', 'secret_key=', 'preinfarto'):
            self.assertNotIn(prohibited.lower(), combined.lower())
        self.assertIn('SYNTHETIC', HTML)
        self.assertIn('deterministic', JS)
        self.assertNotIn('Math.random', JS)

    def test_every_lab_has_a_real_link(self):
        for name in ['sql-performance-lab', 'oracle-migration-toolkit', 'logistics-route-intelligence', 'financial-intelligence-lab', 'data-quality-toolkit', 'Dashboard-an-lisis-de-incidencias-operacionales']:
            self.assertIn('https://github.com/Dicureck/' + name, HTML)

    def test_demo_can_export_all_three(self):
        for mode in ('logistics', 'finance', 'incidents'):
            self.assertIn(mode + ': {', JS)
            self.assertIn('data-open-demo="' + mode + '"', HTML)
        self.assertIn('URL.createObjectURL(blob)', JS)
        self.assertIn('renderChart(series', JS)

    def test_direct_demo_links_and_case_studies(self):
        self.assertIn('id="case-studies"', HTML)
        self.assertIn('?demo=logistics#lab', HTML)
        self.assertIn('?demo=finance#lab', HTML)
        self.assertIn('?demo=incidents#lab', HTML)
        self.assertIn('new URLSearchParams(window.location.search)', JS)
        self.assertIn('history.replaceState', JS)
        self.assertIn('showCountersUnavailable()', JS)
        self.assertIn('.evidence-grid', CSS)

    def test_demo_handlers_bind_to_all_matching_elements(self):
        self.assertIn("$('.demo-link').forEach(", JS)
        self.assertNotIn("$" + "('.demo-link').forEach(", JS.replace("$('.demo-link').forEach(", ""))

    def test_immutable_browser_script_matches_reviewed_source(self):
        pinned = ROOT / 'app.20261015-stable.js'
        self.assertTrue(pinned.exists(), 'missing version-pinned JavaScript')
        self.assertEqual(JS, pinned.read_text(encoding='utf-8'))
        self.assertIn('src="app.20261015-stable.js"', HTML)
        self.assertIn("$('.demo-link').forEach(", JS)
        self.assertIn("updateLab(Object.prototype.hasOwnProperty.call(configs, initialDemo)", JS)

    def test_public_api_has_no_token(self):
        self.assertIn('https://api.github.com/users/Dicureck/repos?', JS)
        self.assertNotIn('Authorization:', JS)
        self.assertIn('if (!response.ok) { showCountersUnavailable(); return; }', JS)

    def test_public_assets_and_license(self):
        for f in ['assets/favicon.svg', 'assets/preview.svg', '.nojekyll', 'robots.txt', 'sitemap.xml', 'LICENSE', 'README.md', '.github/workflows/ci.yml']:
            self.assertTrue((ROOT / f).exists(), f)
        self.assertIn('MIT License', (ROOT / 'LICENSE').read_text())

    def test_header_monogram_is_not_split_into_css_grid_items(self):
        self.assertIn('class="brand-mark" aria-hidden="true">MC</span>', HTML)
        self.assertNotIn('class="brand-mark">M<span>.</span>C', HTML)
        self.assertIn('.brand-mark::after', CSS)

    def test_back_to_top_has_static_fallback_and_scripted_scroll(self):
        self.assertIn('id="top" class="page-top-anchor"', HTML)
        self.assertNotIn('class="site-header" id="top"', HTML)
        self.assertEqual(2, HTML.count('data-scroll-top'))
        self.assertIn("$('[data-scroll-top]').forEach", JS)
        self.assertNotIn("  $('[data-scroll-top]').forEach", JS)
        self.assertIn('window.scrollTo({top:0, left:0', JS)

    def test_desktop_nav_type_is_legible_and_tablet_menu_works(self):
        self.assertIn('.nav-links a,.nav-action{font-size:12px;', CSS)
        self.assertIn('@media(max-width:980px)', CSS)
        self.assertIn('.nav-links.is-open{display:flex}', CSS)

if __name__ == '__main__':
    unittest.main()
