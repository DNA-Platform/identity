// Resource for The Public Skillset chapter 02: public-audit-performance.
// Drives a BUILT wiki directory in headless Chrome and prints the win AND the gate.
// A number without its gate is not a result — see the chapter.
//
// Usage: node 02-public-audit-performance--drive.mjs <built-dir> <label> [runs]
//
// It serves <built-dir> itself with an SPA fallback, so nothing else has to be
// running. Never point it at the dev server: that React build carries
// logComponentRender/logComponentEffect and will send you after the wrong function.

import { createRequire } from 'module';
import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const here = path.dirname(fileURLToPath(import.meta.url));
// puppeteer lives in the repo root's node_modules; this file lives four levels down.
const repo = path.resolve(here, '..', '..', '..', '..');
const require = createRequire(path.join(repo, 'package.json'));
const puppeteer = require('puppeteer');

const [dir, label = 'RUN', runCount = '5'] = process.argv.slice(2);
if (!dir) {
    console.error('Usage: node 02-public-audit-performance--drive.mjs <built-dir> <label> [runs]');
    process.exit(1);
}

const routes = ['/turing', '/article', '/'];
const types = { '.js': 'text/javascript', '.html': 'text/html', '.css': 'text/css', '.json': 'application/json',
                '.svg': 'image/svg+xml', '.png': 'image/png', '.woff2': 'font/woff2' };

// Port 0 lets the OS pick a free one — two audits can run side by side.
const server = http.createServer((req, res) => {
    let file = path.join(dir, decodeURIComponent(req.url.split('?')[0]));
    if (!fs.existsSync(file) || fs.statSync(file).isDirectory()) file = path.join(dir, 'index.html');
    res.writeHead(200, { 'Content-Type': types[path.extname(file)] ?? 'application/octet-stream' });
    fs.createReadStream(file).pipe(res);
});
await new Promise(resolve => server.listen(0, resolve));
const port = server.address().port;

const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });
console.log(label + '  serving ' + dir + ' on ' + port + ', median of ' + runCount);

for (const route of routes) {
    const runs = [];
    let text = '', nodes = 0, errors = 0, commits = 0;
    for (let i = 0; i < Number(runCount); i++) {
        const page = await browser.newPage();
        let seen = 0;
        page.on('console', m => { if (m.type() === 'error') seen++; });
        await page.evaluateOnNewDocument(() => {
            globalThis.__long = [];
            new PerformanceObserver(list => { for (const e of list.getEntries()) globalThis.__long.push(Math.round(e.duration)); })
                .observe({ entryTypes: ['longtask'] });
            globalThis.__commits = 0;
            const observer = new MutationObserver(() => { globalThis.__commits++; });
            const arm = () => {
                const root = document.getElementById('root');
                if (!root) return setTimeout(arm, 0);
                observer.observe(root, { childList: true, subtree: true, characterData: true });
            };
            if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', arm); else arm();
        });
        await page.goto('http://localhost:' + port + route, { waitUntil: 'load', timeout: 60000 });
        await new Promise(r => setTimeout(r, 2200));
        const m = await page.evaluate(() => {
            const paints = performance.getEntriesByType('paint');
            return {
                fcp: paints.length ? Math.round(paints[paints.length - 1].startTime) : -1,
                blocking: globalThis.__long.reduce((a, b) => a + Math.max(0, b - 50), 0),
                commits: globalThis.__commits,
                nodes: document.querySelectorAll('*').length,
                text: document.body.innerText,
            };
        });
        runs.push(m);
        text = m.text; nodes = m.nodes; errors = seen; commits = m.commits;
        await page.close();
    }
    const median = key => runs.map(r => r[key]).sort((a, b) => a - b)[Math.floor(runs.length / 2)];
    // A cheap rolling hash — enough to notice the words changing, which is the point.
    let hash = 0;
    for (let i = 0; i < text.length; i++) hash = (hash * 31 + text.charCodeAt(i)) | 0;
    console.log(
        label.padEnd(10) + route.padEnd(10) +
        'FCP ' + String(median('fcp')).padStart(5) + 'ms   blocking ' + String(median('blocking')).padStart(5) + 'ms' +
        '   ||GATE||  commits ' + commits + '  nodes ' + nodes + '  textLen ' + text.length + '  textHash ' + hash + '  consoleErrors ' + errors
    );
}


// If 03-public-audit-parse--probe.cjs is installed, its counters are on the last
// page we drove. Dump them here so ONE driver serves both skills.
const last = await browser.newPage();
await last.goto('http://localhost:' + port + '/article', { waitUntil: 'load', timeout: 60000 });
await new Promise(r => setTimeout(r, 2500));
const parse = await last.evaluate(() => {
    const S = globalThis.__parse;
    if (!S) return null;
    const sorted = o => Object.entries(o).sort((a, b) => b[1] - a[1]);
    return { total: S.total, before: S.before, made: sorted(S.made), parts: sorted(S.parts),
             specs: sorted(S.specs), rules: sorted(S.rules), threw: sorted(S.threw) };
});
await last.close();

if (parse) {
    const below = ['$Paragraph', '$Sentence', '$Word', '$Letter'];
    console.log('');
    console.log('PARSE  /article  constructions ' + parse.total + ', of which ' + parse.before + ' before any render');
    console.log('  -- parts() calls by class (THE HARD ASSERTION) --');
    for (const [k, v] of parse.parts) console.log('   ' + String(v).padStart(6) + '  ' + k);
    const violations = parse.parts.filter(([k]) => below.includes(k));
    console.log(violations.length
        ? '  FAIL  parts() was called below a section: ' + violations.map(([k, v]) => k + ' x' + v).join(', ')
        : '  PASS  parts() was never called on ' + below.join(', '));
    console.log('  -- constructions by class (soft: almost none below a section) --');
    for (const [k, v] of parse.made) if (v > 1) console.log('   ' + String(v).padStart(6) + '  ' + k);
    console.log('  -- specifications that ran --');
    for (const [k, v] of parse.specs) console.log('   ' + String(v).padStart(6) + '  ' + k);
    console.log('  -- rules that THREW --');
    for (const [k, v] of parse.threw) console.log('   ' + String(v).padStart(6) + '  ' + k);
}
await browser.close();
server.close();
