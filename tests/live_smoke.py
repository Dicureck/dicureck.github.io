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
    # Bilingual production check: language change must preserve synthetic KPIs
    # and navigate to the public roadmap without losing Spanish preference.
    page = browser.new_page(viewport={"width": 1280, "height": 850})
    errors = []
    page.on("pageerror", lambda error: errors.append(str(error)))
    page.goto(BASE + "?demo=finance&lang=es#lab", wait_until="domcontentloaded", timeout=45000)
    page.locator("#lab-panel-title").get_by_text(
        "Resumen de inteligencia financiera", exact=True
    ).wait_for(timeout=20000)
    assert page.locator("html").get_attribute("lang") == "es"
    assert page.locator("#chart-svg rect").count() == 12
    assert "lang=es" in page.locator("a.nav-roadmap").get_attribute("href")
    assert page.locator(".intebi-website-link").get_attribute("href") == "https://intebi.online/"
    page.locator('[data-set-language="en"]').click()
    page.locator("#lab-panel-title").get_by_text(
        "Financial Intelligence Overview", exact=True
    ).wait_for(timeout=10000)
    page.locator('[data-set-language="es"]').click()
    page.locator("#lab-panel-title").get_by_text(
        "Resumen de inteligencia financiera", exact=True
    ).wait_for(timeout=10000)
    with page.expect_navigation(wait_until="domcontentloaded"):
        page.locator("a.nav-roadmap").click()
    page.locator("h1").get_by_text("Hoja de ruta y", exact=False).wait_for(timeout=20000)
    assert page.locator("html").get_attribute("lang") == "es"
    assert not errors, errors
    page.screenshot(path=str(OUT / "roadmap-spanish.png"), full_page=False)
    print("LIVE PASS language EN/ES: finance dashboard, INTEBI link, Spanish roadmap")
    page.close()
    # Independently verify the additional fictional BI page in the public browser.
    import time
    page = browser.new_page(viewport={"width": 1280, "height": 850}, accept_downloads=True)
    errors = []
    page.on("pageerror", lambda error: errors.append(str(error)))
    for attempt in range(30):
        page.goto(BASE + "enterprise-bi.html?lang=es", wait_until="domcontentloaded", timeout=45000)
        if page.locator("#orders").count() > 0:
            break
        time.sleep(7)
    else:
        raise AssertionError("Enterprise BI was not published by GitHub Pages")
    page.wait_for_function("""() => document.querySelector('#orders')?.textContent === '72'""", timeout=20000)
    assert page.locator("#revenue").inner_text() == "124,344.00"
    assert page.locator("#margin").inner_text() == "43.27%"
    assert page.locator("#variance").inner_text() == "900.00"
    assert page.locator("#bars .bar").count() == 4
    page.locator("#region").select_option("Central")
    assert page.locator("#orders").inner_text() == "24"
    page.locator("#channel").select_option("Partner")
    assert page.locator("#orders").inner_text() == "12"
    with page.expect_download(timeout=10000) as download_event:
        page.locator("#csv").click()
    assert download_event.value.suggested_filename == "enterprise-bi-synthetic-sales.csv"
    page.locator('[data-lang="en"]').click()
    assert page.locator("html").get_attribute("lang") == "en"
    assert page.locator("h1").inner_text() == "Enterprise business intelligence."
    assert not errors, errors
    page.screenshot(path=str(OUT / "enterprise-bi.png"), full_page=False)
    print("LIVE PASS Enterprise BI: 72 orders, KPIs, filters, CSV, languages, no JS errors")
    page.close()
    browser.close()
