"""Automated browser checks and synthetic screenshot evidence."""
from pathlib import Path
from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "screenshots"
OUTPUT.mkdir(exist_ok=True)

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True, args=["--no-sandbox"])
    for name, width, height in [("desktop", 1440, 900), ("tablet", 800, 900), ("mobile", 390, 844)]:
        page = browser.new_page(viewport={"width": width, "height": height})
        errors = []
        page.on("pageerror", lambda e: errors.append(str(e)))
        page.route("https://fonts.googleapis.com/**", lambda route: route.abort())
        page.route("https://fonts.gstatic.com/**", lambda route: route.abort())
        page.route("https://api.github.com/**", lambda route: route.abort())
        page.goto((ROOT / "index.html").as_uri(), wait_until="domcontentloaded")
        assert page.locator("#metric-1-value").inner_text() == "1,056"
        assert page.locator(".project-card:visible").count() == 6
        page.locator('.filter-chip[data-filter="analytics"]').click()
        assert page.locator(".project-card:visible").count() == 3
        page.locator('.filter-chip[data-filter="all"]').click()
        page.locator('[data-lab="finance"]').click()
        assert "Financial" in page.locator("#lab-panel-title").inner_text()
        before = page.locator("#metric-1-value").inner_text()
        page.locator("#lab-filter").select_option("Retail")
        assert page.locator("#metric-1-value").inner_text() != before
        page.locator('[data-lab="incidents"]').click()
        assert page.locator("#metric-1-value").inner_text() == "384"
        if name != "desktop":
            page.locator("#menu-toggle").click()
            assert page.locator("#menu-toggle").get_attribute("aria-expanded") == "true"
            page.locator('#nav-links a[href="#contact"]').click()
            assert page.locator("#menu-toggle").get_attribute("aria-expanded") == "false"
        page.locator('a[data-scroll-top]').last.click()
        page.wait_for_timeout(1000)
        assert page.evaluate("window.scrollY") < 80
        assert page.evaluate("document.documentElement.scrollWidth") <= width
        assert not errors, (name, errors)
        page.screenshot(path=str(OUTPUT / (name + ".png")), full_page=True)
        print(name, "PASS: filters, KPIs, scroll, responsive and no JS crashes")
        page.close()
    page = browser.new_page(viewport={"width": 1360, "height": 850})
    page.route("https://api.github.com/**", lambda route: route.abort())
    page.goto((ROOT / "index.html").as_uri() + "?demo=finance#lab", wait_until="domcontentloaded")
    assert "Financial" in page.locator("#lab-panel-title").inner_text()
    assert "SU" in page.locator("#metric-1-value").inner_text()
    page.close()
    browser.close()
