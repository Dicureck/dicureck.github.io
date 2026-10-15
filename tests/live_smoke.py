"""Production smoke checks: verify real GitHub Pages, not only local files.

Runs in GitHub Actions after the Pages workflow, on schedule, or manually.
This tests a public, fully synthetic browser demo; no credentials are used.
"""
import os
from pathlib import Path
from playwright.sync_api import sync_playwright

BASE = os.environ.get("PORTFOLIO_URL", "https://dicureck.github.io/").rstrip("/") + "/"
OUT = Path("screenshots_live")
OUT.mkdir(exist_ok=True)
EXPECTED = {
    "logistics": ("Route Operations Overview", "1,056"),
    "finance": ("Financial Intelligence Overview", None),
    "incidents": ("Incident Intelligence Overview", "384"),
}

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True, args=["--no-sandbox"])
    for mode, (title, first_metric) in EXPECTED.items():
        page = browser.new_page(viewport={"width": 1366, "height": 850}, accept_downloads=True)
        errors = []
        page.on("pageerror", lambda error: errors.append(str(error)))
        page.goto(BASE + f"?demo={mode}#lab", wait_until="domcontentloaded", timeout=45000)
        page.locator("#lab-panel-title").get_by_text(title, exact=True).wait_for(timeout=25000)
        page.wait_for_function("""() => {
            const n = document.querySelector('#metric-1-value');
            const chart = document.querySelector('#chart-svg');
            return window.__portfolioLab && n && n.textContent.trim() !== '—'
                && chart && chart.querySelectorAll('rect').length === 12;
        }""", timeout=20000)
        assert not errors, (mode, errors)
        if first_metric is not None:
            assert page.locator("#metric-1-value").inner_text() == first_metric, mode
        assert page.locator("#lab-filter option").count() >= 4, mode
        assert page.locator("#chart-svg rect").count() == 12, mode
        with page.expect_download(timeout=10000) as download_event:
            page.locator("#download-data").click()
        download = download_event.value
        assert download.suggested_filename.startswith(f"synthetic-{mode}-"), mode
        page.locator(".lab-console").screenshot(path=str(OUT / f"{mode}-dashboard.png"), animations="disabled")
        print(f"LIVE PASS {mode}: data, 12 bars, filtering controls, CSV, zero JS errors")
        page.close()
    browser.close()
