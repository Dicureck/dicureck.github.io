
/* A deliberately isolated localization layer: never alters lab calculations,
   synthetic data, counters, chart generation, or network permissions. */
(() => {
  "use strict";
  const dictionary = {
  "Skip to main content": "Saltar al contenido principal",
  "Main navigation": "Navegación principal",
  "Melissa Castro — Back to top": "Melissa Castro — Volver al inicio",
  "ENGINEERING PORTFOLIO": "PORTAFOLIO DE INGENIERÍA",
  "WORK": "PROYECTOS",
  "LIVE LAB": "LABORATORIO",
  "CASE STUDIES": "CASOS DE ESTUDIO",
  "ROADMAP": "HOJA DE RUTA",
  "APPROACH": "METODOLOGÍA",
  "CONTACT": "CONTACTO",
  "DATA ENGINEERING": "INGENIERÍA DE DATOS",
  "BUSINESS INTELLIGENCE": "INTELIGENCIA DE NEGOCIOS",
  "01 / HELLO, WORLD.": "01 / HOLA, MUNDO.",
  "Engineering": "Ingeniería con",
  "clarity": "claridad",
  "from": "ante la",
  "complexity": "complejidad",
  "I'm": "Soy",
  ". I build reliable data solutions that turn complex information into clearer decisions — through SQL, Python, analytics and thoughtful automation.": ". Desarrollo soluciones de datos confiables que convierten información compleja en decisiones más claras mediante SQL, Python, análisis y automatización bien diseñada.",
  "EXPLORE MY WORK": "EXPLORAR PROYECTOS",
  "TRY A LIVE DEMO": "PROBAR UNA DEMO",
  "VIEW ROADMAP": "VER HOJA DE RUTA",
  "BASED IN GUATEMALA": "UBICADA EN GUATEMALA",
  "PUBLIC ENGINEERING LABS": "LABORATORIOS PÚBLICOS DE INGENIERÍA",
  "Engineering workflow visualization": "Visualización del flujo de trabajo de ingeniería",
  "Conceptual workflow: raw data is validated, engineered and delivered as insight": "Flujo conceptual: los datos se validan, transforman y convierten en información útil",
  "● DESIGN MODEL": "● MODELO DE DISEÑO",
  "VALIDATED": "VALIDADO",
  "DISCOVER": "DESCUBRIR",
  "MODEL": "MODELAR",
  "DELIVER": "ENTREGAR",
  "VERIFY": "VERIFICAR",
  "DATA INTEGRITY": "INTEGRIDAD DE DATOS",
  "DESIGN PRINCIPLE / 001": "PRINCIPIO DE DISEÑO / 001",
  "VALIDATE → ENGINEER → EXPLAIN": "VALIDAR → DESARROLLAR → EXPLICAR",
  "SCROLL TO EXPLORE": "DESLIZA PARA EXPLORAR",
  "Technical specialties": "Especialidades técnicas",
  "DATA QUALITY": "CALIDAD DE DATOS",
  "AUTOMATION": "AUTOMATIZACIÓN",
  "02 / SELECTED WORK": "02 / PROYECTOS DESTACADOS",
  "Built to be": "Diseñados para",
  "tested.": "probarse.",
  "Designed to be useful.": "Creados para ser útiles.",
  "Six independent engineering labs. Real, inspectable code. Fictional datasets. Transparent limitations.": "Seis laboratorios independientes. Código real y verificable, datos ficticios y limitaciones transparentes.",
  "ALL REPOSITORIES": "TODOS LOS REPOSITORIOS",
  "FEATURED ENGINEERING LABS": "LABORATORIOS DESTACADOS",
  "PUBLIC GITHUB REPOS": "REPOSITORIOS PÚBLICOS",
  "LIVE API": "API EN VIVO",
  "PUBLIC REPO STARS": "ESTRELLAS PÚBLICAS",
  "VERIFY ON GITHUB ↗": "VERIFICAR EN GITHUB ↗",
  "ALL PROJECTS": "TODOS",
  "DATABASE": "BASES DE DATOS",
  "ANALYTICS": "ANÁLISIS",
  "QUALITY": "CALIDAD",
  "Engineering portfolio at a glance": "Resumen del portafolio de ingeniería",
  "View official GitHub profile and verify public activity": "Visitar GitHub y verificar la actividad pública",
  "Filter projects": "Filtrar proyectos",
  "LAB_001 / DATABASE": "LAB_001 / BASES DE DATOS",
  "QUERY PERFORMANCE // EXPERIMENTAL": "RENDIMIENTO SQL // EXPERIMENTAL",
  "DATABASE ENGINEERING": "INGENIERÍA DE BASES DE DATOS",
  "Explore query optimization patterns, repeatable benchmarking techniques and result-set integrity checks.": "Explora optimización de consultas, mediciones reproducibles y controles de integridad de resultados.",
  "VIEW PROJECT ↗": "VER PROYECTO ↗",
  "SQL SERVER CI VERIFIED": "SQL SERVER VERIFICADO EN CI",
  "LAB_002 / MIGRATION": "LAB_002 / MIGRACIÓN",
  "COMPATIBILITY // DEPENDENCY // REVIEW": "COMPATIBILIDAD // DEPENDENCIAS // REVISIÓN",
  "DATABASE MODERNIZATION": "MODERNIZACIÓN DE BASES DE DATOS",
  "Assess T-SQL compatibility, plan object dependencies and reconcile synthetic output across migration scenarios.": "Evalúa la compatibilidad T-SQL, organiza dependencias y compara resultados ficticios durante una migración.",
  "ORACLE FREE VERIFIED": "ORACLE FREE VERIFICADO",
  "VALIDATE": "VALIDAR",
  "LAB_003 / OPERATIONS": "LAB_003 / OPERACIONES",
  "ROUTE INTELLIGENCE // SYNTHETIC": "INTELIGENCIA DE RUTAS // FICTICIA",
  "OPERATIONAL ANALYTICS": "ANÁLISIS OPERATIVO",
  "Delivery KPIs, SLA definitions, geofence logic and offline dashboard reporting.": "Indicadores de entregas, definiciones de SLA, geocercas y reportes de operaciones.",
  "SOURCE ↗": "CÓDIGO ↗",
  "TRY DEMO ↓": "PROBAR DEMO ↓",
  "LAB_004 / FINANCE": "LAB_004 / FINANZAS",
  "BUDGET / ACTUAL // SYNTHETIC": "PRESUPUESTO / REAL // FICTICIO",
  "FINANCIAL INTELLIGENCE": "INTELIGENCIA FINANCIERA",
  "Transparent synthetic P&L, margins, budget variance and executive reporting.": "Estados de resultados ficticios, márgenes, desviaciones presupuestarias y reportes ejecutivos.",
  "Modeling": "Modelado",
  "LAB_005 / RELIABILITY": "LAB_005 / FIABILIDAD",
  "SCHEMA VALIDATION": "VALIDACIÓN DE ESQUEMAS",
  "ROW RECONCILIATION": "CONCILIACIÓN DE REGISTROS",
  "QUALITY GATES": "CONTROLES DE CALIDAD",
  "DATA CONTRACTS // RECONCILIATION": "CONTRATOS DE DATOS // CONCILIACIÓN",
  "Schema contracts, invalid-row reporting and duplicate-aware dataset reconciliation.": "Contratos de esquemas, detección de registros inválidos y conciliación que respeta duplicados.",
  "Testing": "Pruebas",
  "REPRODUCIBLE": "REPRODUCIBLE",
  "LAB_006 / SERVICE": "LAB_006 / SERVICIO",
  "CRITICAL": "CRÍTICO",
  "HIGH": "ALTO",
  "MEDIUM": "MEDIO",
  "LOW": "BAJO",
  "INCIDENT SLA // SYNTHETIC": "SLA DE INCIDENTES // FICTICIO",
  "SERVICE OPERATIONS": "OPERACIONES DE SERVICIO",
  "Explore SLA rules, backlog analysis, incident severity and time-based reporting.": "Explora reglas de SLA, pendientes, gravedad de incidentes y reportes por período.",
  "Operations": "Operaciones",
  "03 / ENGINEERING CASE STUDIES": "03 / CASOS DE ESTUDIO",
  "The reasoning behind": "El análisis detrás de",
  "the results.": "los resultados.",
  "Each public case study explains its synthetic problem, architecture, validation approach and what has not yet been proven.": "Cada caso público presenta el problema ficticio, la arquitectura, la validación y las limitaciones pendientes.",
  "BROWSE CASE STUDIES ↗": "VER CASOS DE ESTUDIO ↗",
  "01 / OPERATIONS": "01 / OPERACIONES",
  "Route Intelligence": "Inteligencia de rutas",
  "Investigate attempted deliveries, on-time rate denominators and actual-versus-planned distance under regional filters.": "Analiza intentos de entrega, tasas de puntualidad y distancias reales frente a las planificadas, con filtros regionales.",
  "OPEN LIVE DASHBOARD ↗": "ABRIR DASHBOARD ↗",
  "READ STUDY ↗": "LEER CASO ↗",
  "02 / FINANCIAL MODELING": "02 / MODELADO FINANCIERO",
  "Financial Intelligence": "Inteligencia financiera",
  "Reconcile synthetic revenue, direct costs, operating margin and budget differences across channels.": "Concilia ingresos, costos, márgenes y variaciones presupuestarias ficticias por canal.",
  "03 / SERVICE RELIABILITY": "03 / FIABILIDAD DE SERVICIO",
  "Incident Intelligence": "Inteligencia de incidentes",
  "Separate resolved-within-SLA performance from open and overdue ticket backlogs using fictional service incidents.": "Separa los incidentes resueltos dentro del SLA de los pendientes y vencidos usando datos ficticios.",
  "IN DEVELOPMENT / SOURCE-AVAILABLE REFERENCE LABS": "EN DESARROLLO / CÓDIGO DISPONIBLE",
  "Automation & enterprise reporting": "Automatización y reportes empresariales",
  "Explore a mock-first Python automation pipeline and an original C#/.NET reporting CLI. Live provider integrations and native BI project files are not claimed.": "Explora un flujo de automatización en Python con simulaciones y una herramienta de reportes C#/.NET. No se afirma que existan integraciones reales con proveedores ni archivos nativos de BI.",
  "PYTHON & AI ↗": "PYTHON E IA ↗",
  "04 / INTERACTIVE PLAYGROUND": "04 / LABORATORIO INTERACTIVO",
  "Don't just read it.": "No te quedes leyendo.",
  "Explore the data.": "Explora los datos.",
  "Interactive KPI explorations built for this site. Every record is generated locally from a fixed fictional seed—no customer data, API keys or hidden backend.": "Explora indicadores interactivos creados para este sitio. Todos los registros se generan localmente con datos ficticios reproducibles, sin información de clientes, claves de API ni servidores ocultos.",
  "LAB ENVIRONMENT": "ENTORNO DE PRUEBAS",
  "SYNTHETIC / SEED 2026": "FICTICIO / SEMILLA 2026",
  "ROUTE OPS": "RUTAS",
  "FINANCIALS": "FINANZAS",
  "INCIDENTS": "INCIDENTES",
  "SYNTHETIC DATA ANALYTICS": "ANÁLISIS DE DATOS FICTICIOS",
  "Route Operations Overview": "Resumen de operaciones de rutas",
  "Explore delivery SLA and distance variance across fictional regions.": "Explora los SLA de entregas y las variaciones de distancia en regiones ficticias.",
  "REGION": "REGIÓN",
  "↓ CSV": "↓ CSV",
  "Attempts": "Intentos",
  "Fictional sample": "Muestra ficticia",
  "On-time rate": "Tasa de puntualidad",
  "All attempts": "Todos los intentos",
  "Successful deliveries": "Entregas exitosas",
  "Sample data": "Datos de muestra",
  "Distance variance": "Variación de distancia",
  "Actual vs planned": "Real frente a planificado",
  "Monthly on-time rate": "Puntualidad mensual",
  "PERCENT / 12 MONTHS": "PORCENTAJE / 12 MESES",
  "The chart shows synthetic illustration data, not operational results.": "La gráfica muestra datos ilustrativos, no resultados operativos.",
  "METRIC CONTRACT": "DEFINICIÓN DEL INDICADOR",
  "Define the denominator.": "Define el denominador.",
  "On-time rate includes every attempted delivery, not just successful ones.": "La tasa de puntualidad incluye todos los intentos de entrega, no solo los exitosos.",
  "INSPECT SOURCE ↗": "REVISAR CÓDIGO ↗",
  "All demo values are fictional and generated in the browser.": "Todos los valores de la demo son ficticios y se generan en el navegador.",
  "Select interactive dashboard": "Seleccionar dashboard interactivo",
  "Filter dashboard": "Filtrar dashboard",
  "Download synthetic CSV data": "Descargar CSV con datos ficticios",
  "Monthly chart of synthetic KPI data": "Gráfica mensual de indicadores ficticios",
  "05 / HOW I WORK": "05 / MI METODOLOGÍA",
  "Evidence first.": "Primero la evidencia.",
  "Decisions second.": "Después las decisiones.",
  "Good engineering isn't just a working query. It's a clear problem, a reliable process and results you can explain.": "La buena ingeniería no es solo una consulta que funciona; implica comprender el problema, seguir un proceso confiable y explicar los resultados.",
  "01 / UNDERSTAND": "01 / COMPRENDER",
  "Start with context.": "Comienza con el contexto.",
  "Clarify what the business needs, define the questions and understand the limits of the data.": "Aclara lo que necesita el negocio, define las preguntas y reconoce las limitaciones de los datos.",
  "02 / VALIDATE": "02 / VALIDAR",
  "Trust, then verify.": "Confía, pero verifica.",
  "Check assumptions, document rules and test for missing, duplicated or inconsistent records.": "Revisa las suposiciones, documenta las reglas y detecta registros ausentes, duplicados o inconsistentes.",
  "03 / ENGINEER": "03 / DESARROLLAR",
  "Build for reliability.": "Construye con confiabilidad.",
  "Use maintainable SQL, Python and analytical models, then test each change against expected behavior.": "Desarrolla SQL, Python y modelos fáciles de mantener; comprueba cada cambio frente al comportamiento esperado.",
  "04 / COMMUNICATE": "04 / COMUNICAR",
  "Make it useful.": "Hazlo útil.",
  "Turn technical results into understandable insights, accessible reports and decisions people can act on.": "Convierte los resultados técnicos en información comprensible, informes accesibles y decisiones aplicables.",
  "06 / TECHNICAL STACK": "06 / HERRAMIENTAS TÉCNICAS",
  "Tools are the means.": "Las herramientas son el medio.",
  "Results are the point.": "Los resultados son el objetivo.",
  "My work spans databases, analytics and automation. Public repositories show examples of some tools; badges aren't a substitute for demonstrated work.": "Trabajo con bases de datos, análisis y automatización. Los repositorios muestran ejemplos públicos; las insignias no sustituyen el trabajo verificable.",
  "READ ENGINEERING NOTES ↗": "LEER DOCUMENTACIÓN ↗",
  "01 / DATA & DATABASES": "01 / DATOS Y BASES DE DATOS",
  "02 / ANALYTICS & REPORTING": "02 / ANÁLISIS Y REPORTES",
  "Data Modeling": "Modelado de datos",
  "KPI Design": "Diseño de indicadores",
  "03 / DEVELOPMENT & PROCESS": "03 / DESARROLLO Y PROCESOS",
  "07 / LET'S CONNECT": "07 / HABLEMOS",
  "Let's build something": "Construyamos algo",
  "worth understanding.": "que valga la pena.",
  "I enjoy working on difficult data problems and making the answers clear. Explore my code, read my engineering notes or get in touch.": "Me gusta resolver problemas complejos con datos y hacer comprensibles las soluciones. Explora mi código, lee mis notas de ingeniería o contáctame.",
  "START A CONVERSATION ↗": "INICIAR CONVERSACIÓN ↗",
  "GITHUB PROFILE ↗": "PERFIL DE GITHUB ↗",
  "VISIT INTEBI.ONLINE ↗": "VISITAR INTEBI.ONLINE ↗",
  "/ ENGINEERING INTELLIGENCE": "/ INTELIGENCIA DE NEGOCIOS",
  "ORIGINAL CODE · SYNTHETIC DATA ·": "CÓDIGO ORIGINAL · DATOS FICTICIOS ·",
  "PUBLIC ROADMAP & EVIDENCE ↗": "HOJA DE RUTA Y EVIDENCIAS ↗",
  "BACK TO TOP ↑": "VOLVER AL INICIO ↑",
  "Delivery attempts": "Intentos de entrega",
  "Successful": "Exitosas",
  "All sample attempts": "Todos los intentos ficticios",
  "All attempts denominator": "Denominador: todos los intentos",
  "Successfully completed": "Completadas correctamente",
  "Monthly on-time delivery rate": "Tasa mensual de entregas puntuales",
  "On-time rate includes every delivery attempt—even unsuccessful ones. Great-circle distances are not real road-network routes.": "La puntualidad incluye cada intento, incluso los fallidos. Las distancias geográficas no representan rutas reales de carretera.",
  "Financial Intelligence Overview": "Resumen de inteligencia financiera",
  "Compare synthetic revenue, operating profit and plan variance.": "Compara ingresos, utilidad operativa y desviaciones presupuestarias ficticias.",
  "CHANNEL": "CANAL",
  "All regions": "Todas las regiones",
  "All channels": "Todos los canales",
  "Digital": "Digital",
  "Retail": "Venta minorista",
  "Wholesale": "Mayorista",
  "Monthly synthetic revenue": "Ingresos ficticios mensuales",
  "THOUSANDS OF FICTIONAL UNITS": "MILES DE UNIDADES FICTICIAS",
  "Separate actuals from targets.": "Distingue resultados reales de objetivos.",
  "This fictional P&L reconciles revenue, costs and expenses. Units are illustrative—not real currency or company financials.": "Este estado de resultados ficticio concilia ingresos, costos y gastos. Las unidades son ilustrativas, no moneda ni cifras empresariales reales.",
  "Revenue": "Ingresos",
  "Operating profit": "Utilidad operativa",
  "Operating margin": "Margen operativo",
  "Budget variance": "Variación presupuestaria",
  "Synthetic units": "Unidades ficticias",
  "Revenue − costs − expenses": "Ingresos − costos − gastos",
  "Profit ÷ revenue": "Utilidad ÷ ingresos",
  "Revenue vs budget": "Ingresos frente a presupuesto",
  "Incident Intelligence Overview": "Resumen de incidentes",
  "Explore fictional incident resolution rates and SLA trends.": "Explora tasas de resolución y tendencias de SLA ficticias.",
  "CATEGORY": "CATEGORÍA",
  "All categories": "Todas las categorías",
  "Application": "Aplicación",
  "Infrastructure": "Infraestructura",
  "Support": "Soporte",
  "Monthly resolved-within-SLA rate": "Resolución mensual dentro del SLA",
  "PERCENT / RESOLVED ONLY": "PORCENTAJE / SOLO RESUELTOS",
  "Read SLA measures carefully.": "Interpreta correctamente los indicadores SLA.",
  "SLA rate uses resolved incidents as its denominator. Open incidents and overdue backlog are shown separately to avoid hiding them.": "La tasa SLA usa como denominador los incidentes resueltos. Los pendientes y vencidos se presentan por separado.",
  "Total incidents": "Total de incidentes",
  "Resolved within SLA": "Resueltos dentro del SLA",
  "Open backlog": "Pendientes abiertos",
  "Overdue open": "Pendientes vencidos",
  "Fictional service tickets": "Tickets de servicio ficticios",
  "Of resolved incidents": "De los incidentes resueltos",
  "Still unresolved": "Todavía sin resolver",
  "Open beyond severity limit": "Abiertos más allá del límite de gravedad",
  "North": "Norte",
  "South": "Sur",
  "West": "Oeste",
  "Metro": "Metropolitana",
  "Illustrative logistics data · deterministic synthetic sample · seed documented in source.": "Datos ilustrativos de logística · muestra ficticia reproducible · semilla documentada en el código.",
  "Illustrative finance data · deterministic synthetic sample · seed documented in source.": "Datos ilustrativos financieros · muestra ficticia reproducible · semilla documentada en el código.",
  "Illustrative incidents data · deterministic synthetic sample · seed documented in source.": "Datos ilustrativos de incidentes · muestra ficticia reproducible · semilla documentada en el código.",
  "JAN": "ENE",
  "APR": "ABR",
  "AUG": "AGO",
  "DEC": "DIC",
  "Engineering Roadmap & Evidence | Melissa Castro": "Hoja de ruta y evidencias | Melissa Castro",
  "MC / ENGINEERING INTELLIGENCE": "MC / INTELIGENCIA DE NEGOCIOS",
  "PORTFOLIO ↗": "PORTAFOLIO ↗",
  "LIVE LAB ↗": "LABORATORIO ↗",
  "KNOWLEDGE BASE ↗": "BASE DE CONOCIMIENTO ↗",
  "PUBLIC DEVELOPMENT TRACKER / OCT 2026": "SEGUIMIENTO PÚBLICO / OCT 2026",
  "Roadmap &": "Hoja de ruta y",
  "verified evidence.": "evidencias verificadas.",
  "Working implementations, measured experiments and future research — clearly separated. All public demo datasets are independently generated and fictional.": "Implementaciones funcionales, experimentos medidos e investigaciones futuras, claramente diferenciadas. Todos los datos de las demostraciones públicas son originales y ficticios.",
  "Verified work ↓": "Trabajo verificado ↓",
  "Next engineering milestones ↓": "Próximos hitos ↓",
  "Browser evidence ↓": "Evidencia del navegador ↓",
  "01 / Verified and publicly inspectable": "01 / Verificado y públicamente comprobable",
  "VERIFIED · LIVE SITE": "VERIFICADO · SITIO WEB",
  "Interactive data dashboards": "Dashboards interactivos",
  "Logistics, finance and incident KPI filters, generated SVG charts and CSV downloads. The published site is tested in Chromium.": "Filtros de indicadores de logística, finanzas e incidentes, gráficas SVG y descargas CSV. Sitio publicado y probado en Chromium.",
  "Live-site browser verification ↗": "Pruebas del sitio público ↗",
  "VERIFIED · SQL SERVER CI": "VERIFICADO · SQL SERVER",
  "Real SQL Server Developer container, synthetic database, complete-row equality checks and one observed CI benchmark. Not a production benchmark.": "Contenedor real de SQL Server Developer, base ficticia, equivalencia de resultados y benchmark medido en CI. No es un benchmark de producción.",
  "Measured CI evidence ↗": "Evidencia de medición ↗",
  "VERIFIED · ORACLE FREE RUNTIME": "VERIFICADO · ORACLE FREE",
  "Oracle Migration Toolkit · target-engine smoke": "Oracle Migration Toolkit · prueba en motor real",
  "Original illustrative Oracle SQL compiled and executed on a temporary Oracle AI Database Free 26ai engine. February revenue, customer ranking and transactional rollback were verified.": "Se compilaron y ejecutaron ejemplos originales de SQL Oracle en una instancia temporal Oracle AI Database Free 26ai. Se verificaron ingresos, clasificación de clientes y reversión transaccional.",
  "Oracle 12.1 compatibility and SQL Server-to-Oracle parity remain untested.": "La compatibilidad con Oracle 12.1 y la equivalencia SQL Server–Oracle siguen sin comprobarse.",
  "Actual Oracle runtime results ↗": "Resultados de Oracle real ↗",
  "VERIFIED · OFFLINE CI": "VERIFICADO · PRUEBAS LOCALES",
  "Python Automation + C#": "Automatización Python + C#",
  "Original reporting applications, dry-run mail previews, synthetic JSON, .NET validation and automated tests. Live email/model integrations remain unverified.": "Aplicaciones de reportes originales, correos simulados, JSON ficticio, validación .NET y pruebas automatizadas. Las integraciones reales siguen sin verificarse.",
  "Engineering Labs CI ↗": "Pruebas de laboratorios ↗",
  "02 / Implementation and verification backlog": "02 / Desarrollo y verificaciones pendientes",
  "Next milestone": "Próximo hito",
  "Current boundary": "Alcance actual",
  "Track work": "Seguimiento",
  "SQL Server benchmark expansion": "Ampliar benchmark SQL Server",
  "One real CI benchmark exists; publish execution plans, reads and more independent trials.": "Existe un benchmark real en CI; faltan planes de ejecución, lecturas y más pruebas independientes.",
  "Oracle cross-engine validation": "Validación cruzada Oracle y SQL Server",
  "Offline toolkit plus Oracle Free target-engine smoke verified; SQL Server ↔ Oracle parity and Oracle 12.1 compatibility still pending.": "Toolkit sin conexión y prueba en Oracle Free verificados; faltan equivalencia entre motores y compatibilidad con Oracle 12.1.",
  "Native Tableau / reporting examples": "Ejemplos nativos de Tableau y reportes",
  "Methodology exists; licensed workbook, SSRS and Crystal Reports runtimes not verified.": "Hay metodología; faltan archivos nativos y pruebas en Tableau, SSRS y Crystal Reports.",
  "Wiki and GitHub Projects": "Wiki y GitHub Projects",
  "Canonical Markdown documentation exists; native Wiki/Projects synchronization needs authorized access.": "Existe documentación Markdown; la sincronización con Wiki y Projects necesita acceso autorizado.",
  "Official GitHub Releases": "Versiones oficiales de GitHub",
  "Versioned release drafts and changelogs are prepared; native releases/tags are not yet created.": "Se prepararon notas y registros de cambios; todavía no se han creado los Releases y tags oficiales.",
  "03 / Real browser screenshots & reproducible examples": "03 / Capturas reales y ejemplos reproducibles",
  "These screenshots were captured automatically from the live website during a successful GitHub Actions Chromium run. They are not artist concepts or customer dashboards.": "Las capturas se generaron automáticamente desde el sitio público durante una prueba exitosa con Chromium. No son imágenes conceptuales ni dashboards de clientes.",
  "SYNTHETIC · LOGISTICS": "FICTICIO · LOGÍSTICA",
  "Delivery operations": "Operaciones de entrega",
  "1,056 synthetic attempts in the original browser fixture, with region filters and on-time metrics.": "1,056 intentos ficticios en la muestra del navegador, con filtros regionales y puntualidad.",
  "Explore live ↗": "Explorar en vivo ↗",
  "SYNTHETIC · FINANCE": "FICTICIO · FINANZAS",
  "Financial intelligence": "Inteligencia financiera",
  "Deterministic illustrative totals and category-level filtering, separate from repository fixture values.": "Totales ilustrativos reproducibles y filtros por categorías, independientes de los datos del repositorio.",
  "SYNTHETIC · INCIDENTS": "FICTICIO · INCIDENTES",
  "Operational incidents": "Incidentes operativos",
  "384 fictional incidents, SLA measures and an explicit open-backlog denominator.": "384 incidentes ficticios, métricas SLA y denominador explícito para los pendientes.",
  "Download genuine screenshot evidence:": "Descargar capturas auténticas:",
  "GitHub Actions browser screenshots artifact ↗": "Archivo de capturas de GitHub Actions ↗",
  ". Choose a successful recent run to download its dashboard screenshots artifact. Artifacts are retained for 30 days and GitHub may require sign-in. Source and timestamp remain traceable to each CI run.": ". Selecciona una ejecución reciente exitosa para descargar las capturas. Se conservan durante 30 días y GitHub podría solicitar iniciar sesión. Cada captura tiene procedencia verificable.",
  "04 / Read the architecture": "04 / Explora la arquitectura",
  "The portfolio also contains technical write-ups with methodology and Mermaid architecture diagrams.": "El portafolio también incluye documentación técnica de metodologías y diagramas de arquitectura.",
  "Python + AI Automation": "Python y automatización con IA",
  "Validation gates, email previews, safe provider opt-in and test limitations.": "Controles de validación, correos simulados, autorización de proveedores y limitaciones.",
  "Architecture ↗": "Arquitectura ↗",
  "C# + .NET Reporting": "Reportes C# y .NET",
  "Typed CSV pipeline, decimal computations and native BI roadmap.": "Pipeline CSV tipado, cálculos decimales y hoja de ruta para BI.",
  "SQL Server Optimization": "Optimización SQL Server",
  "Measured result-equivalent query rewrites and evidence limitations.": "Reescrituras de consultas con resultados equivalentes, mediciones y límites de evidencia.",
  "Case studies ↗": "Casos de estudio ↗",
  "Melissa Castro · Public engineering evidence & project roadmap ·": "Melissa Castro · Evidencias de ingeniería y hoja de ruta ·",
  "ENTERPRISE BI LIVE ↗": "DEMO BI EMPRESARIAL ↗",
  "04 / Enterprise BI reporting — one verified fictional dataset": "04 / Reporting empresarial — un único conjunto de datos ficticios",
  "Enterprise sales dashboard": "Dashboard de ventas empresariales",
  "72 source-consistent invented orders, financial KPIs, region/channel filters and CSV export. No private backend.": "72 órdenes ficticias verificadas, indicadores financieros, filtros por región/canal y descarga CSV. Sin servidores privados.",
  "Open enterprise BI demo ↗": "Abrir demo BI empresarial ↗",
  "ORIGINAL REPORT DEFINITION": "DEFINICIÓN ORIGINAL DE REPORTE",
  "Original parameterized Report Builder RDL and matching source definitions. Native SSRS, Power BI and Tableau runtime validation remains pending.": "RDL original con parámetros y definiciones coherentes. Las pruebas nativas en SSRS, Power BI y Tableau siguen pendientes.",
  "Inspect source and verification ↗": "Ver código y verificación ↗",
  "Return to portfolio": "Volver al portafolio",
  "· No client records or production credentials.": "· Sin datos de clientes ni credenciales de producción."
};
  const originalText = new WeakMap();
  const originalAttrs = new WeakMap();
  const originalLinks = new WeakMap();
  const titleEnglish = document.title;
  const defaultLang = "en";
  function storageGet() { try { return localStorage.getItem("mc-portfolio-lang"); } catch (_) { return null; } }
  function storageSet(value) { try { localStorage.setItem("mc-portfolio-lang", value); } catch (_) { /* Private mode */ } }
  const requested = new URLSearchParams(window.location.search).get("lang");
  let language = ["en","es"].includes(requested) ? requested : (storageGet() === "es" ? "es" : defaultLang);
  function localizedValue(raw, lang) {
    if (lang !== "es") return raw;
    const trimmed = raw.trim();
    if (!Object.prototype.hasOwnProperty.call(dictionary, trimmed)) return raw;
    return raw.replace(trimmed, dictionary[trimmed]);
  }
  function translateTextNode(node) {
    if (!node.parentElement || node.parentElement.closest("script,style,pre,code,textarea")) return;
    let origin = originalText.get(node);
    const actual = node.nodeValue;
    if (origin === undefined || (actual !== origin && actual !== localizedValue(origin, "es"))) {
      origin = actual;
      originalText.set(node, origin);
    }
    const translated = localizedValue(origin, language);
    if (actual !== translated) node.nodeValue = translated;
  }
  function translateAttributes(el) {
    let map = originalAttrs.get(el);
    if (!map) {map = {}; originalAttrs.set(el, map);}
    for (const key of ["aria-label", "placeholder"]) {
      if (!el.hasAttribute(key)) continue;
      const actual = el.getAttribute(key);
      let origin = map[key];
      if (origin === undefined || (actual !== origin && actual !== localizedValue(origin, "es"))) map[key] = origin = actual;
      const value = localizedValue(origin, language);
      if (actual !== value) el.setAttribute(key, value);
    }
  }
  function keepLocalNavigation() {
    for (const anchor of document.querySelectorAll("a[href]")) {
      let initial = originalLinks.get(anchor);
      if (initial === undefined) originalLinks.set(anchor, initial = anchor.getAttribute("href"));
      if (!/^(roadmap\.html|\/(?:\?|#|$))/.test(initial)) continue;
      let target;
      try {target = new URL(initial, window.location.href);} catch (_) {continue;}
      if (target.origin !== window.location.origin) continue;
      if (language === "es") target.searchParams.set("lang", "es");
      else target.searchParams.delete("lang");
      const next = target.pathname + target.search + target.hash;
      if (anchor.getAttribute("href") !== next) anchor.setAttribute("href", next);
    }
  }
  function paint() {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    let text;
    while ((text = walker.nextNode())) translateTextNode(text);
    for (const el of document.querySelectorAll("[aria-label],[placeholder]")) translateAttributes(el);
    document.documentElement.lang = language;
    document.title = localizedValue(titleEnglish, language);
    for (const button of document.querySelectorAll("[data-set-language]")) {
      const selected = button.dataset.setLanguage === language;
      if (button.getAttribute("aria-pressed") !== String(selected)) button.setAttribute("aria-pressed", String(selected));
    }
    keepLocalNavigation();
  }
  for (const button of document.querySelectorAll("[data-set-language]")) {
    button.addEventListener("click", () => {
      const next = button.dataset.setLanguage;
      if (!["en","es"].includes(next) || next === language) return;
      language = next;
      storageSet(next);
      try {
        const url = new URL(window.location.href);
        if (next === "es") url.searchParams.set("lang", "es"); else url.searchParams.delete("lang");
        history.replaceState(null, "", url);
      } catch (_) { /* Local file previews may restrict URL updates. */ }
      paint();
    });
  }
  let scheduled = false;
  const observer = new MutationObserver(() => {
    if (scheduled) return;
    scheduled = true;
    queueMicrotask(() => {scheduled = false; paint();});
  });
  observer.observe(document.body, {childList:true, characterData:true, subtree:true});
  paint();
})();
