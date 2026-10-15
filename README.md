# Melissa Castro · Engineering Intelligence

[![CI](https://github.com/Dicureck/dicureck.github.io/actions/workflows/ci.yml/badge.svg)](https://github.com/Dicureck/dicureck.github.io/actions/workflows/ci.yml)

**Personal engineering portfolio** for Melissa Castro. A responsive static website featuring six public labs, an interactive synthetic-data dashboard console, professional specialties and links to engineering documentation.

**Website:** <https://dicureck.github.io/> (requires GitHub Pages enabled in repository settings).

## What makes the site different

- Entirely static: **HTML, CSS and vanilla JavaScript**; no backend, build service, analytics tracking scripts or production credentials.
- **Accessible**, keyboard-navigable tabs, semantic headings, responsive layout, and reduced-motion support.
- Work cards link to source and clear statements of verification limits.
- Three interactive demonstrations: fictional route operations, fictional financial reporting and fictional incident management.
- Demos use deterministic seeded random generators **in the browser**; filters, summary KPIs, SVG charts and CSV downloads are functional.
- **No customer data, measurements, identities, secrets, proprietary business logic, employment endorsements or production SQL**.

The site demonstrations are separate educational visualizations inspired by the concepts covered in the independent labs. They are **not** the exact datasets produced by those repositories and they do not represent live enterprise dashboards.

## Preview locally

```bash
python -m http.server 8000
# Open http://localhost:8000
```

No `npm install` is required. Google Fonts are progressive enhancement; system-font fallbacks work offline. Any third-party link (e.g. GitHub) requires an internet connection.

## Publish with GitHub Pages

1. Repository: `Dicureck/dicureck.github.io` — public.
2. Navigate to **Settings → Pages → Build and deployment**.
3. Select **Deploy from a branch**, branch **`main`**, folder **`/(root)`**, and **Save**.
4. Wait for Pages deployment and open **https://dicureck.github.io/**.

The repository includes `.nojekyll` so GitHub serves the static files unchanged. GitHub Pages availability and successful deployment depend on account/repository settings, which are managed in the GitHub UI.

## Run quality checks

```bash
python -m unittest discover -s tests -v
node --check app.js
```

CI checks local links, accessibility attributes, valid project destinations, site privacy guardrails and JavaScript syntax. Visual and interactive verification can be performed using a headless browser.

## Site structure

```
index.html           — all semantic page sections
styles.css           — responsive CyberPro design system
app.js               — deterministic synthetic data and interactive console
assets/              — original SVG favicon and social preview
tests/               — dependency-free repository checks
.github/workflows/   — automatic static CI checks
.nojekyll            — static GitHub Pages support
```

## License and disclosure

Code and visual design are provided as an original portfolio site under the MIT License. The projects linked from the site have their own licensing and documentation. Public demonstration data is 100% fictional.
