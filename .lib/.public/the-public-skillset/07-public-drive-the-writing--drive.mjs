// Resource for The Public Skillset chapter 07: public-drive-the-writing.
// Bundles a page against the BUILT dist, draws it in real Chrome, and reports
// what a reader saw — computed style, not the sheet's text. A number without
// the page it came from is not a result; see the chapter.
//
// Usage: node 07-public-drive-the-writing--drive.mjs <page.jsx> [out-dir]
//
// The page is an ordinary .jsx module. It renders into #root and declares what
// a reader should see, as data:
//
//   window.__page = [
//       { step: 'themed', check: () => [['the rule is blue', border(), 'rgb(0,0,255) 8px']] },
//       { step: 'inked',  act: () => built.$is = Inked,
//                         check: () => [['the ink is green', ink(), 'rgb(0,128,0)']] },
//   ];
//
// Each step acts, settles, measures and is photographed. Every check is a triple
// of a sentence, what was measured, and what it should be — so a failure reads
// as a sentence about the page rather than a diff of two objects.
//
// It imports the package by its dist path, so ROLLUP RUNS FIRST or the page is
// drawn against yesterday's build: `npm run build:quick` in the package.

import { createRequire } from 'module';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import os from 'os';

const here = path.dirname(fileURLToPath(import.meta.url));
const repo = path.resolve(here, '..', '..', '..', '..');
const pkg = path.resolve(here, '..', '..', 'package');
const require = createRequire(path.join(repo, 'package.json'));
const esbuild = require('esbuild');
const puppeteer = require('puppeteer');

const [page, out = path.join(os.tmpdir(), 'public-drive')] = process.argv.slice(2);
if (!page) {
    console.error('Usage: node 07-public-drive-the-writing--drive.mjs <page.jsx> [out-dir]');
    process.exit(1);
}
fs.mkdirSync(out, { recursive: true });

const bundle = await esbuild.build({
    entryPoints: [path.resolve(page)],
    absWorkingDir: pkg,
    bundle: true, format: 'iife', jsx: 'automatic', write: false,
    define: { 'process.env.NODE_ENV': '"production"' },
    logLevel: 'warning',
});
fs.writeFileSync(path.join(out, 'bundle.js'), bundle.outputFiles[0].text);
fs.writeFileSync(path.join(out, 'index.html'),
    '<!doctype html><html><head><meta charset="utf-8"><title>drawn</title></head>'
    + '<body style="margin:0"><div id="root"></div><script src="bundle.js"></script></body></html>');

const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });
const drawn = await browser.newPage();
await drawn.setViewport({ width: 1000, height: 600 });
const errors = [];
drawn.on('pageerror', error => errors.push(String(error)));
drawn.on('console', message => { if (message.type() === 'error') errors.push(message.text()); });
await drawn.goto('file:///' + path.join(out, 'index.html').replace(/\\/g, '/'));
await drawn.waitForFunction('Array.isArray(window.__page)', { timeout: 20000 });

const settle = () => new Promise(resolve => setTimeout(resolve, 400));
await settle();

const steps = await drawn.evaluate(() => window.__page.map(step => step.step));
const seen = [];
for (const [index, step] of steps.entries()) {
    await drawn.evaluate(index => { const act = window.__page[index].act; if (act) act(); }, index);
    await settle();
    const checks = await drawn.evaluate(index => window.__page[index].check().map(
        ([name, got, want]) => [name, String(got), String(want)]), index);
    for (const [name, got, want] of checks)
        seen.push([got === want ? 'PASS' : 'FAIL', step + ' — ' + name, 'got ' + got + ' / want ' + want]);
    await drawn.screenshot({ path: path.join(out, index + '-' + step.replace(/[^a-z0-9]+/gi, '-') + '.png') });
}
await browser.close();

for (const [verdict, name, detail] of seen)
    console.log(verdict + ' — ' + name + ' (' + detail + ')');
if (errors.length) console.log('PAGE ERRORS:\n' + errors.join('\n'));
console.log('photographs in ' + out);
console.log(seen.filter(each => each[0] === 'PASS').length + ' of ' + seen.length + ' seen');
process.exit(seen.some(each => each[0] === 'FAIL') || errors.length ? 1 : 0);
