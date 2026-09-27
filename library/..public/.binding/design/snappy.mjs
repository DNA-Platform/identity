// WHAT THE BRUSH COSTS. Every claim here is timed in the page rather than reasoned about: how long a
// pointer move takes to reach the screen, how much of the plate is rebuilt to show it, and where the
// time actually goes.
import puppeteer from 'puppeteer';
import { untilThePlateIsDrawn } from './waiting.mjs';

const BASE = process.argv[2] || 'http://localhost:4242';
const b = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });
const g = await b.newPage();
await g.setViewport({ width: 1400, height: 1000 });
await g.goto(BASE + '/', { waitUntil: 'domcontentloaded' });
await untilThePlateIsDrawn(g);
await new Promise(r => setTimeout(r, 500));

const box = await g.evaluate(() => {
    const one = document.querySelector('.pd-infobox [role="img"]');
    one.scrollIntoView({ block: 'center' });
    const r = one.getBoundingClientRect();
    return { x: r.x, y: r.y, w: r.width, h: r.height, cells: one.children.length };
});
console.log(`the plate is ${Math.round(box.w)}px across and holds ${box.cells} cells`);

// HOW MUCH OF THE DOM MOVES FOR ONE STEP OF THE BRUSH. A mutation observer counts the attribute
// writes React actually commits, which is the honest measure of what a redraw costs.
await g.evaluate(() => {
    window.__seen = [];
    window.__watch = new MutationObserver(records => {
        window.__seen.push({ at: performance.now(), n: records.length });
    });
    window.__watch.observe(document.querySelector('.pd-infobox [role="img"]'), {
        attributes: true, subtree: true, attributeFilter: ['style'],
    });
    window.__mark = () => { window.__seen = []; return performance.now(); };
});

const step = async (fx, fy) => {
    const started = await g.evaluate(() => window.__mark());
    await g.mouse.move(box.x + box.w * fx, box.y + box.h * fy);
    await new Promise(r => setTimeout(r, 260));
    return g.evaluate(begun => {
        const first = window.__seen[0];
        const last = window.__seen[window.__seen.length - 1];
        const cells = window.__seen.reduce((sum, one) => sum + one.n, 0);
        return {
            latency: first === undefined ? null : Math.round(first.at - begun),
            settled: last === undefined ? null : Math.round(last.at - begun),
            cells,
            batches: window.__seen.length,
        };
    }, started);
};

console.log('\nMOVING THE BRUSH — one step per row, nothing kept yet');
const moves = [];
for (const [fx, fy] of [[0.2, 0.2], [0.3, 0.2], [0.4, 0.25], [0.5, 0.3], [0.6, 0.35], [0.7, 0.4], [0.6, 0.5], [0.5, 0.6]]) {
    const one = await step(fx, fy);
    moves.push(one);
    console.log(`  first paint ${String(one.latency).padStart(4)}ms · settled ${String(one.settled).padStart(4)}ms · ${String(one.cells).padStart(4)} style writes in ${one.batches} batches`);
}
const mid = ns => { const s = ns.filter(n => n !== null).sort((a, c) => a - c); return s[Math.floor(s.length / 2)]; };
console.log(`  median first paint ${mid(moves.map(o => o.latency))}ms · median style writes ${mid(moves.map(o => o.cells))} of ${box.cells}`);

console.log('\nKEEPING A STROKE — a click, which writes the painting and deals a new brush');
const before = await g.evaluate(() => window.__mark());
await g.mouse.click(box.x + box.w * 0.5, box.y + box.h * 0.6);
await new Promise(r => setTimeout(r, 900));
const kept = await g.evaluate(begun => ({
    latency: window.__seen[0] === undefined ? null : Math.round(window.__seen[0].at - begun),
    cells: window.__seen.reduce((sum, one) => sum + one.n, 0),
}), before);
console.log(`  first paint ${kept.latency}ms · ${kept.cells} style writes`);

// WHERE THE TIME GOES. The plate is rebuilt whole on every move, so the question is what one cell
// costs. A cell AT REST is worked out once and kept, so the arithmetic is no longer the answer it
// was when this was written: measured 2026-09-16, memoising every resting colour moved the driven
// cost by a quarter and the per-move latency not at all. What remains is the cost of BUILDING a
// render the dom mostly discards, which is a framework cost rather than a plate one — every drawable
// on a page draws three times, and chemistry's own library carries the measurement and the handoff.
console.log('\nWHAT A REDRAW IS MADE OF');
const profile = await g.evaluate(async () => {
    const plate = document.querySelector('.pd-infobox [role="img"]');
    const before = performance.now();
    for (let n = 0; n < 40; n++) {
        plate.dispatchEvent(new PointerEvent('pointermove', {
            bubbles: true, clientX: plate.getBoundingClientRect().x + 20 + (n % 8) * 20,
            clientY: plate.getBoundingClientRect().y + 20 + Math.floor(n / 8) * 20,
        }));
        await new Promise(r => requestAnimationFrame(r));
    }
    return Math.round((performance.now() - before) / 40);
});
console.log(`  ${profile}ms per move when driven as fast as frames allow`);

await b.close();
