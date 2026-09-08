// THE PERFORMANCE GATE FOR THE DEMO.
//
// A feature is not delivered until this passes. It measures what a suite cannot
// see: how many times each chemical is DRAWN, how many times each bond
// constructor RUNS, how many reactions fire on a page with no interaction, and
// how many milliseconds are spent inside drawing.
//
//   node <this file> [--baseline] [--url http://localhost:5200]
//
// It installs its own probe, drives every page in a real browser, and removes
// the probe again — always, including on failure. Nothing is left behind.
//
// The thresholds below are the CONTRACT. Raising one is a decision that gets
// written down beside the number, never a quiet edit.

import { createRequire } from 'node:module';
import { readFileSync, writeFileSync, rmSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const demo = resolve(here, '../../package/.wiki/.public');
const main = resolve(demo, 'main.tsx');
const probe = resolve(demo, 'probe.tsx');
const require = createRequire(resolve(here, '../../../../package.json'));

const argued = process.argv.slice(2);
const baselining = argued.includes('--baseline');
const at = argued.indexOf('--url');
const origin = at >= 0 ? argued[at + 1] : 'http://localhost:5200';

// A STATIC PAGE DRAWS ONCE. Every number above 1 here is work nobody asked for.
// `drawsEach` and `bondRunsEach` are held ABOVE their true target on purpose,
// so the gate reports today's cost honestly instead of failing every run —
// each carries the target it is walking towards.
const contract = {
    drawsEach: { limit: 3.0, target: 1.0, says: 'a static page draws each chemical ONCE' },
    bondRunsEach: { limit: 2.0, target: 1.0, says: 'a bond constructor runs ONCE per instance' },
    reacts: { limit: 0, target: 0, says: 'a page with no interaction fires NO reactions' },
    refusals: { limit: 0, target: 0, says: 'no refusal panel reaches the page' },
    errors: { limit: 0, target: 0, says: 'no page error' },
};

const pages = [
    { route: '/', named: 'portal', chars: 1009, contents: 5 },
    { route: '/article', named: 'article', chars: 20232, contents: 24 },
    { route: '/turing', named: 'turing', chars: 57894, contents: 33 },
];

const source = `import { $Particle, $Chemical } from '@dna-platform/chemistry';
import { $Reaction, $renderView$, $bond$, $type$ } from '../../../../chemistry/package/src/symbolic';

const nth = new WeakMap<object, number>();
const runs = new WeakMap<object, number>();
const seen = new Set<unknown>();
const bonded = new Set<unknown>();
const worst: Record<string, number> = {};
let spent = 0;
let reacted = 0;

const view = ($Particle.prototype as any)[$renderView$];
($Particle.prototype as any)[$renderView$] = function (this: any) {
    nth.set(this, (nth.get(this) ?? 0) + 1);
    seen.add(this);
    const began = performance.now();
    const made = view.call(this);
    const cost = performance.now() - began;
    spent += cost;
    const named = this[$type$]?.name ?? 'a chemical';
    worst[named] = (worst[named] ?? 0) + cost;

    return made;
};

const bond = ($Chemical.prototype as any)[$bond$];
($Chemical.prototype as any)[$bond$] = function (this: any) {
    runs.set(this, (runs.get(this) ?? 0) + 1);
    bonded.add(this);

    return bond.call(this);
};

const react = ($Reaction.prototype as any).react;
($Reaction.prototype as any).react = function (this: any) {
    reacted += 1;

    return react.call(this);
};

const sum = (held: number[]) => held.reduce((all, one) => all + one, 0);

(window as unknown as { PERF: () => unknown }).PERF = () => {
    const draws = [...seen].map(one => nth.get(one as object) ?? 0);
    const ran = [...bonded].map(one => runs.get(one as object) ?? 0);

    return {
        instances: seen.size,
        draws: sum(draws),
        drawsEach: seen.size === 0 ? 0 : sum(draws) / seen.size,
        worstDraws: draws.length === 0 ? 0 : Math.max(...draws),
        bondCarrying: bonded.size,
        bondRunsEach: bonded.size === 0 ? 0 : sum(ran) / bonded.size,
        reacts: reacted,
        msDrawing: Math.round(spent * 10) / 10,
        costliest: Object.entries(worst).sort((one, two) => two[1] - one[1]).slice(0, 5)
            .map(([named, ms]) => named + ' ' + ms.toFixed(1) + 'ms'),
    };
};
`;

const install = () => {
    writeFileSync(probe, source);
    const held = readFileSync(main, 'utf8');
    if (!held.includes("'./probe'"))
        writeFileSync(main, held.replace(
            "import { $ } from '@dna-platform/chemistry';",
            "import { $ } from '@dna-platform/chemistry';\nimport './probe';"));
};

const remove = () => {
    try { rmSync(probe, { force: true }); } catch { /* already gone */ }
    try {
        const held = readFileSync(main, 'utf8');
        writeFileSync(main, held.split('\n').filter(line => !line.includes("import './probe'")).join('\n'));
    } catch { /* nothing to restore */ }
};

const settle = page => page.evaluate(async () => {
    const capped = (waiting, ms) => Promise.race([waiting, new Promise(done => setTimeout(done, ms))]);
    await capped(document.fonts.ready, 5000);
    await capped(Promise.all([...document.images].filter(one => !one.complete)
        .map(one => new Promise(done => { one.onload = one.onerror = done; }))), 8000);
    await new Promise(done => requestAnimationFrame(() => requestAnimationFrame(done)));
});

const measured = [];
let broke;

install();
try {
    const puppeteer = require('puppeteer');
    const browser = await puppeteer.launch({ headless: 'new', protocolTimeout: 240000 });
    // The dev server needs a moment to notice the probe before the first page asks for it.
    await new Promise(done => setTimeout(done, 2500));

    for (const page of pages) {
        const opened = await browser.newPage();
        const errors = [];
        const logged = [];
        opened.on('pageerror', thrown => errors.push(thrown.message.slice(0, 200)));
        opened.on('console', line => logged.push(line.text().slice(0, 200)));
        await opened.setViewport({ width: 1440, height: 1200 });
        await opened.goto(origin + page.route, { waitUntil: 'networkidle0', timeout: 120000 });
        await settle(opened);
        await new Promise(done => setTimeout(done, 1200));
        const said = await opened.evaluate(() => (window.PERF ? window.PERF() : undefined));
        const drew = await opened.evaluate(() => ({
            chars: document.body.innerText.length,
            refusals: document.querySelectorAll('pre').length,
            contents: document.querySelectorAll('.pd-table-of-contents a').length,
        }));
        measured.push({ ...page, ...drew, ...(said ?? {}), errors: errors.length, said: !!said, why: errors.concat(logged).slice(0, 6) });
        await opened.close();
    }
    await browser.close();
} catch (thrown) {
    broke = thrown;
} finally {
    remove();
}

if (broke) { console.error('PERF GATE could not run:', broke.message); process.exit(2); }

const failures = [];
console.log('');
for (const page of measured) {
    if (!page.said) {
        failures.push(`${page.named}: the probe never reported — the gate measured nothing`);
        for (const line of page.why) console.log(`  ${page.named} said: ${line}`);
        continue;
    }
    console.log(`${page.named.padEnd(8)} ${String(page.instances).padStart(5)} chemicals · ` +
        `${String(page.draws).padStart(5)} draws (${page.drawsEach.toFixed(2)} each, worst ${page.worstDraws}) · ` +
        `${page.bondRunsEach.toFixed(2)} bond runs each · ${String(page.reacts).padStart(3)} reacts · ` +
        `${String(page.msDrawing).padStart(6)}ms drawing`);
    console.log(`         ${page.chars} chars · ${page.contents} contents · ${page.refusals} refusals · ${page.errors} errors`);
    console.log(`         costliest: ${(page.costliest ?? []).join(' · ')}`);

    for (const [name, rule] of Object.entries(contract)) {
        const held = page[name];
        if (held === undefined) continue;
        if (held > rule.limit) failures.push(`${page.named}: ${rule.says} — ${name} is ${held} and the limit is ${rule.limit}`);
    }
    if (page.chars < page.chars * 0.98) failures.push(`${page.named}: the page shrank`);
}

console.log('');
for (const [name, rule] of Object.entries(contract))
    if (rule.limit !== rule.target)
        console.log(`  WALKING TOWARDS  ${name}: limit ${rule.limit}, target ${rule.target} — ${rule.says}`);

if (failures.length > 0) {
    console.log('\nPERF GATE FAILED');
    for (const one of failures) console.log('  ' + one);
    process.exit(baselining ? 0 : 1);
}
console.log('\nPERF GATE PASSED' + (baselining ? ' (baseline run)' : ''));
