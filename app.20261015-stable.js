/**
 * Melissa Castro — Engineering Portfolio
 * All interactive lab data is FICTIONAL and generated deterministically in-browser.
 * No external datasets, authenticated APIs or production integrations.
 */
(() => {
  'use strict';

  const $ = (selector) => document.querySelector(selector);
  const $$ = (selector) => [...document.querySelectorAll(selector)];
  const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
  const svgNS = 'http://www.w3.org/2000/svg';

  function randomGenerator(seed) {
    let state = seed >>> 0;
    return function random() {
      state += 0x6D2B79F5;
      let value = state;
      value = Math.imul(value ^ (value >>> 15), value | 1);
      value ^= value + Math.imul(value ^ (value >>> 7), value | 61);
      return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
    };
  }

  function generateLogistics() {
    const rng = randomGenerator(2026);
    const zones = ['Metro', 'North', 'South', 'West'];
    const rows = [];
    zones.forEach((zone, zi) => {
      for (let month = 0; month < 12; month += 1) {
        for (let delivery = 0; delivery < 22; delivery += 1) {
          const successful = rng() > 0.08 + zi * 0.015;
          const onTime = successful && rng() < (0.87 - zi * 0.035 + month * 0.002);
          const plannedKm = 4 + rng() * 26;
          const actualKm = plannedKm * (0.91 + rng() * 0.28);
          rows.push({ id: `SYN-L-${String(rows.length + 1).padStart(4, '0')}`, month: month + 1, zone, successful, onTime, plannedKm: Number(plannedKm.toFixed(2)), actualKm: Number(actualKm.toFixed(2)) });
        }
      }
    });
    return rows;
  }

  function generateFinance() {
    const rng = randomGenerator(7261);
    const channels = ['Digital', 'Retail', 'Wholesale'];
    const rows = [];
    channels.forEach((channel, ci) => {
      for (let month = 0; month < 12; month += 1) {
        const seasonality = 1 + Math.sin((month / 12) * Math.PI * 2) * 0.14;
        const revenue = Math.round((39000 + ci * 17500 + month * 1400) * seasonality * (0.88 + rng() * 0.22));
        const costs = Math.round(revenue * (0.43 + rng() * 0.13));
        const expenses = Math.round(revenue * (0.18 + rng() * 0.08));
        const budgetRevenue = Math.round(revenue * (0.9 + rng() * 0.2));
        rows.push({ month: month + 1, channel, revenue, costs, expenses, budgetRevenue, operatingProfit: revenue - costs - expenses });
      }
    });
    return rows;
  }

  function generateIncidents() {
    const rng = randomGenerator(3107);
    const categories = ['Application', 'Database', 'Infrastructure', 'Support'];
    const severities = ['Critical', 'High', 'Medium', 'Low'];
    const limits = { Critical: 8, High: 24, Medium: 48, Low: 96 };
    const rows = [];
    for (let month = 0; month < 12; month += 1) {
      for (let i = 0; i < 32; i += 1) {
        const category = categories[Math.floor(rng() * categories.length)];
        const severity = severities[Math.floor(rng() * severities.length)];
        const resolved = rng() > 0.17;
        const durationHours = Math.round(2 + rng() * limits[severity] * 1.9);
        const ageHours = Math.round(2 + rng() * limits[severity] * 2.2);
        rows.push({ id: `SYN-I-${String(rows.length + 1).padStart(4, '0')}`, month: month + 1, category, severity, resolved, durationHours, ageHours, withinSla: resolved && durationHours <= limits[severity], overdueOpen: !resolved && ageHours > limits[severity] });
      }
    }
    return rows;
  }

  const synthetic = Object.freeze({
    logistics: generateLogistics(),
    finance: generateFinance(),
    incidents: generateIncidents()
  });

  const configs = {
    logistics: {
      title: 'Route Operations Overview',
      description: 'Explore delivery SLA and distance variance across fictional regions.',
      filterLabel: 'REGION', filterKey: 'zone', values: ['All regions', 'Metro', 'North', 'South', 'West'],
      chartTitle: 'Monthly on-time delivery rate', chartUnit: 'PERCENT / 12 MONTHS', unit: '%',
      noteTitle: 'Define the denominator.', noteText: 'On-time rate includes every delivery attempt—even unsuccessful ones. Great-circle distances are not real road-network routes.',
      source: 'https://github.com/Dicureck/logistics-route-intelligence',
      metricLabels: ['Delivery attempts', 'On-time rate', 'Successful', 'Distance variance'],
      metricNotes: ['All sample attempts', 'All attempts denominator', 'Successfully completed', 'Actual vs planned'],
      summary(rows) {
        const total = rows.length;
        const completed = rows.filter(x => x.successful).length;
        const onTime = rows.filter(x => x.onTime).length;
        const planned = rows.reduce((a, x) => a + x.plannedKm, 0);
        const actual = rows.reduce((a, x) => a + x.actualKm, 0);
        return [total.toLocaleString('en-US'), `${percent(onTime, total)}%`, completed.toLocaleString('en-US'), `${signed((actual - planned) / planned * 100)}%`];
      },
      series(rows) {
        return months.map((_, index) => {
          const subset = rows.filter(x => x.month === index + 1);
          return 100 * subset.filter(x => x.onTime).length / Math.max(1, subset.length);
        });
      },
      chartFormat: x => `${x.toFixed(0)}%`
    },
    finance: {
      title: 'Financial Intelligence Overview',
      description: 'Compare synthetic revenue, operating profit and plan variance.',
      filterLabel: 'CHANNEL', filterKey: 'channel', values: ['All channels', 'Digital', 'Retail', 'Wholesale'],
      chartTitle: 'Monthly synthetic revenue', chartUnit: 'THOUSANDS OF FICTIONAL UNITS', unit: 'SU',
      noteTitle: 'Separate actuals from targets.', noteText: 'This fictional P&L reconciles revenue, costs and expenses. Units are illustrative—not real currency or company financials.',
      source: 'https://github.com/Dicureck/financial-intelligence-lab',
      metricLabels: ['Revenue', 'Operating profit', 'Operating margin', 'Budget variance'],
      metricNotes: ['Synthetic units', 'Revenue − costs − expenses', 'Profit ÷ revenue', 'Revenue vs budget'],
      summary(rows) {
        const revenue = sum(rows, 'revenue'), profit = sum(rows, 'operatingProfit'), budget = sum(rows, 'budgetRevenue');
        return [compact(revenue) + ' SU', compact(profit) + ' SU', `${percent(profit, revenue)}%`, `${signed((revenue - budget) / budget * 100)}%`];
      },
      series(rows) {return months.map((_, index) => sum(rows.filter(x => x.month === index + 1), 'revenue') / 1000)},
      chartFormat: x => `${x.toFixed(0)}k`
    },
    incidents: {
      title: 'Incident Intelligence Overview',
      description: 'Explore fictional incident resolution rates and SLA trends.',
      filterLabel: 'CATEGORY', filterKey: 'category', values: ['All categories', 'Application', 'Database', 'Infrastructure', 'Support'],
      chartTitle: 'Monthly resolved-within-SLA rate', chartUnit: 'PERCENT / RESOLVED ONLY', unit: '%',
      noteTitle: 'Read SLA measures carefully.', noteText: 'SLA rate uses resolved incidents as its denominator. Open incidents and overdue backlog are shown separately to avoid hiding them.',
      source: 'https://github.com/Dicureck/Dashboard-an-lisis-de-incidencias-operacionales',
      metricLabels: ['Total incidents', 'Resolved within SLA', 'Open backlog', 'Overdue open'],
      metricNotes: ['Fictional service tickets', 'Of resolved incidents', 'Still unresolved', 'Open beyond severity limit'],
      summary(rows) {
        const resolved = rows.filter(x => x.resolved);
        return [rows.length.toLocaleString('en-US'), `${percent(resolved.filter(x => x.withinSla).length, resolved.length)}%`, (rows.length - resolved.length).toLocaleString('en-US'), rows.filter(x => x.overdueOpen).length.toLocaleString('en-US')];
      },
      series(rows) {
        return months.map((_, index) => {
          const resolved = rows.filter(x => x.month === index + 1 && x.resolved);
          return 100 * resolved.filter(x => x.withinSla).length / Math.max(1, resolved.length);
        });
      },
      chartFormat: x => `${x.toFixed(0)}%`
    }
  };

  function sum(rows, key) {return rows.reduce((total, row) => total + row[key], 0)}
  function percent(numerator, denominator) {return denominator ? (numerator / denominator * 100).toFixed(1) : '0.0'}
  function signed(num) {return `${num >= 0 ? '+' : '−'}${Math.abs(num).toFixed(1)}`}
  function compact(num) {return num >= 1e6 ? `${(num / 1e6).toFixed(2)}m` : num >= 1e3 ? `${(num / 1e3).toFixed(1)}k` : num.toFixed(0)}

  function makeSvgElement(tag, attributes, textContent) {
    const el = document.createElementNS(svgNS, tag);
    Object.entries(attributes).forEach(([key, value]) => el.setAttribute(key, String(value)));
    if (textContent !== undefined) el.textContent = textContent;
    return el;
  }

  function renderChart(values, formatter, percentChart) {
    const svg = $('#chart-svg');
    svg.replaceChildren();
    const W = 760, H = 290, left = 58, right = 17, top = 22, bottom = 42;
    const chartW = W - left - right, chartH = H - top - bottom;
    const rawMax = Math.max(...values, 1);
    const maximum = percentChart ? 100 : Math.ceil(rawMax / 25) * 25;
    for (let i = 0; i <= 4; i++) {
      const y = top + (chartH / 4 * i);
      svg.appendChild(makeSvgElement('line', { x1:left, y1:y, x2:W - right, y2:y, stroke:'#29405b', 'stroke-width':1, opacity:.76 }));
      svg.appendChild(makeSvgElement('text', { x:left - 14, y:y + 4, 'text-anchor':'end', fill:'#8ea4c1', 'font-size':12, 'font-family':'monospace' }, formatter(maximum * (1 - i / 4))));
    }
    const step = chartW / values.length, bw = step * .58;
    values.forEach((value, i) => {
      const barH = Math.max(2, value / maximum * chartH);
      const x = left + step * i + (step - bw) / 2, y = top + chartH - barH;
      svg.appendChild(makeSvgElement('rect', { x, y, width:bw, height:barH, rx:3, fill:i === 11 ? '#b39afe' : '#57dce8', opacity:i === 11 ? 1 : .78 }));
      svg.appendChild(makeSvgElement('text', { x:left + step * (i + .5), y:H - 15, 'text-anchor':'middle', fill:'#8096b2', 'font-size':11, 'font-family':'monospace' }, months[i]));
      svg.lastChild.previousSibling.appendChild(makeSvgElement('title', {}, `${months[i]}: ${formatter(value)}`));
    });
  }

  let currentLab = 'logistics';

  function updateLab(key, resetFilter = true) {
    currentLab = key;
    const conf = configs[key];
    $$('.lab-tabs [role=tab]').forEach(button => {
      const selected = button.dataset.lab === key;
      button.setAttribute('aria-selected', String(selected));
      button.tabIndex = selected ? 0 : -1;
    });
    $('#lab-panel').setAttribute('aria-labelledby', `tab-${key}`);
    $('#lab-panel-title').textContent = conf.title;
    $('#lab-panel-description').textContent = conf.description;
    $('#lab-filter-label').textContent = conf.filterLabel;
    const filter = $('#lab-filter');
    if (resetFilter) {
      filter.replaceChildren();
      conf.values.forEach((value, index) => {
        const option = document.createElement('option'); option.value = index === 0 ? '' : value; option.textContent = value;
        filter.appendChild(option);
      });
    }
    conf.metricLabels.forEach((label, i) => {
      $(`#metric-${i + 1}-label`).textContent = label;
      $(`#metric-${i + 1}-note`).textContent = conf.metricNotes[i];
    });
    $('#chart-title').textContent = conf.chartTitle;
    $('#chart-unit').textContent = conf.chartUnit;
    $('#lab-note-title').textContent = conf.noteTitle;
    $('#lab-note-text').textContent = conf.noteText;
    $('#lab-source-link').href = conf.source;
    renderMetrics();
  }

  function filteredRows() {
    const conf = configs[currentLab];
    const selected = $('#lab-filter').value;
    return selected ? synthetic[currentLab].filter(row => row[conf.filterKey] === selected) : synthetic[currentLab];
  }

  function renderMetrics() {
    const conf = configs[currentLab];
    const rows = filteredRows();
    conf.summary(rows).forEach((value, i) => { $(`#metric-${i + 1}-value`).textContent = value; });
    const series = conf.series(rows);
    renderChart(series, conf.chartFormat, conf.unit === '%');
    $('#chart-svg').setAttribute('aria-label', `${conf.chartTitle}; ${months.map((m,i)=>m+' '+conf.chartFormat(series[i])).join(', ')}`);
    $('#chart-foot').textContent = `Illustrative ${currentLab} data · deterministic synthetic sample · seed documented in source.`;
  }

  function csvEscape(value) {
    // Only self-generated values are exported; escape punctuation safely regardless.
    const string = String(value);
    return /[",\n\r]/.test(string) ? `"${string.replace(/"/g, '""')}"` : string;
  }

  function downloadCSV() {
    const rows = filteredRows();
    if (!rows.length) return;
    const keys = Object.keys(rows[0]);
    const csv = [keys.join(','), ...rows.map(row => keys.map(key => csvEscape(row[key])).join(','))].join('\r\n');
    const blob = new Blob([csv], {type:'text/csv;charset=utf-8'});
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url; link.download = `synthetic-${currentLab}-2026.csv`;
    document.body.appendChild(link);link.click();link.remove();
    URL.revokeObjectURL(url);
  }

  // Explicitly scroll the document. Sticky headers make fragment anchors
  // unreliable as a top-of-page target in some browsers.
  $$('[data-scroll-top]').forEach(link => link.addEventListener('click', event => {
    event.preventDefault();
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({top:0, left:0, behavior:reducedMotion ? 'instant' : 'smooth'});
  }));

  // Navigation and project filters.
  $('#menu-toggle').addEventListener('click', () => {
    const button = $('#menu-toggle');
    const open = button.getAttribute('aria-expanded') !== 'true';
    button.setAttribute('aria-expanded', String(open));
    button.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    $('#nav-links').classList.toggle('is-open', open);
  });
  $$('#nav-links a').forEach(link => link.addEventListener('click', () => {
    $('#menu-toggle').setAttribute('aria-expanded', 'false');
    $('#menu-toggle').setAttribute('aria-label', 'Open navigation');
    $('#nav-links').classList.remove('is-open');
  }));
  $$('.filter-chip').forEach(button => button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    $$('.filter-chip').forEach(chip => {
      const active = chip === button;
      chip.classList.toggle('is-active', active);chip.setAttribute('aria-pressed', String(active));
    });
    $$('.project-card').forEach(card => {card.hidden = filter !== 'all' && card.dataset.category !== filter;});
  }));
  $$('.lab-tabs [role=tab]').forEach((button, index, items) => {
    button.addEventListener('click', () => { updateLab(button.dataset.lab); setDemoLink(button.dataset.lab); });
    button.addEventListener('keydown', event => {
      if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
      event.preventDefault();
      const next = event.key === 'Home' ? 0 : event.key === 'End' ? items.length - 1 : (index + (event.key === 'ArrowRight' ? 1 : -1) + items.length) % items.length;
      items[next].focus();updateLab(items[next].dataset.lab);setDemoLink(items[next].dataset.lab);
    });
  });
  $$('.demo-link').forEach(button => button.addEventListener('click', () => {
    updateLab(button.dataset.openDemo);
    setDemoLink(button.dataset.openDemo);
    $('#lab').scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block:'start'});
  }));
  $('#lab-filter').addEventListener('change', renderMetrics);
  $('#download-data').addEventListener('click', downloadCSV);
  // Deep links from GitHub READMEs and case studies: ?demo=finance#lab.
  // Unknown values are ignored. No server, secrets or analytics tracking.
  const initialDemo = new URLSearchParams(window.location.search).get('demo');
  updateLab(Object.prototype.hasOwnProperty.call(configs, initialDemo) ? initialDemo : 'logistics');
  function setDemoLink(key) {
    try {
      const url = new URL(window.location.href);
      url.searchParams.set('demo', key);
      url.hash = 'lab';
      window.history.replaceState(null, '', url.href);
    } catch (_) { /* Embedded test pages may have an opaque origin. */ }
  }


  // Public activity: fetched from GitHub's public API. No authentication or secrets.
  // On network/rate-limit failure, show an em dash instead of guessed numbers.
  function showCountersUnavailable() {
    // GitHub may be rate limited or inaccessible from a visitor's browser.
    $('#repo-count').textContent = 'N/A';
    $('#star-count').textContent = 'N/A';
  }
  async function refreshPublicCounters() {
    try {
      const response = await fetch('https://api.github.com/users/Dicureck/repos?type=owner&per_page=100&sort=full_name', {
        headers: {Accept: 'application/vnd.github+json'}
      });
      if (!response.ok) { showCountersUnavailable(); return; }
      const repos = await response.json();
      if (!Array.isArray(repos) || repos.length === 100) { showCountersUnavailable(); return; } // Incomplete paging is not a valid total.
      const ownedPublic = repos.filter(repo => !repo.private && repo.owner && repo.owner.login.toLowerCase() === 'dicureck');
      $('#repo-count').textContent = String(ownedPublic.length).padStart(2, '0');
      $('#star-count').textContent = String(ownedPublic.reduce((total, repo) => total + Number(repo.stargazers_count || 0), 0)).padStart(2, '0');
    } catch (_) { showCountersUnavailable(); /* No guessed metrics. */ }
  }
  refreshPublicCounters();

  // Export only deterministic demo state for local test tooling (not a public API).
  if (typeof window !== 'undefined') window.__portfolioLab = {getData: () => synthetic, getMode: () => currentLab};
})();
