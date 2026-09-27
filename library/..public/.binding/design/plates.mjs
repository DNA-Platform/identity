// THE FOUR COVERS, PHOTOGRAPHED AT REST AND UNDER A HAND. A mechanism cannot be shown in a still,
// so each is shot twice: untouched, and with a pointer held where the mechanism answers.
import puppeteer from 'puppeteer';
import { mkdirSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { untilThePlateIsDrawn } from './waiting.mjs';

const BASE = process.argv[2] || 'http://localhost:4242';
const out = join(tmpdir(), 'dougs-library-plates');
mkdirSync(out, { recursive: true });

// where to hold the pointer, and how long the mechanism needs before it has finished answering.
//
// THE TRANSCRIPT IS NOT HERE, because it has no cover art and that is a ruling rather than a gap —
// Doug, reviewing the five proposals: "The semantics of types isn't necessary." It sat in this list
// printing "conversation: no plate" every run against a decision already made.
const covers = [
    ['/', 'catalogue', 0.38, 0.42, 900],
    ['/my-library-log/', 'log', 0.5, 0.62, 1300],
    ['/claude-and-our-projects/', 'biography', 0.46, 0.4, 1600],
    ['/semantic-reference-theory/', 'theory', 0.12, 0.88, 2100],
];

const b = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });
for (const [route, name, fx, fy, wait, presses = 1] of covers) {
    const g = await b.newPage();
    await g.setViewport({ width: 1400, height: 1000, deviceScaleFactor: 2 });
    await g.goto(BASE + route, { waitUntil: 'domcontentloaded' });
    // A PLATE SHIPS BLANK AND THE BROWSER FILLS IT IN, so this counted to 1700ms and photographed a
    // white square as the catalogue "at rest" — a probe whose whole job is to be looked at, quietly
    // producing nothing to look at.
    await untilThePlateIsDrawn(g).catch(() => { });
    await new Promise(r => setTimeout(r, 600));
    const plate = await g.$('.pd-infobox [role="img"]');
    if (plate === null) { console.log(`${name}: no plate`); await g.close(); continue; }
    await plate.screenshot({ path: join(out, `${name}-rest.png`) });
    const box = await g.evaluate(() => {
        const one = document.querySelector('.pd-infobox [role="img"]');
        const r = one.getBoundingClientRect();
        return { x: r.x, y: r.y, w: r.width, h: r.height };
    });
    for (let n = 0; n < presses; n++) { await g.mouse.click(box.x + box.w * fx, box.y + box.h * fy); await new Promise(r => setTimeout(r, n === presses - 1 ? wait : 320)); }
    await plate.screenshot({ path: join(out, `${name}-touched.png`) });
    console.log(`${name.padEnd(13)} rest + pressed`);
    await g.close();
}
console.log('into ' + out);
await b.close();
