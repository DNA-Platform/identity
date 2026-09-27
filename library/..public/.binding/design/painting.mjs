// WHAT THE PLATE PROMISES A HAND. Nine questions, each the shape of a thing a reader does, and each
// one asks the SCREEN rather than the storage — except where the promise is about storage, and then
// it asks both. Storage is cleared once from inside a loaded page and never again: an
// on-new-document wipe fires on the reload too and destroys the very thing being asked about.
import puppeteer from 'puppeteer';
import { untilThePlateIsDrawn } from './waiting.mjs';

const BASE = process.argv[2] || 'http://localhost:4242';
const b = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });
const g = await b.newPage();
await g.setViewport({ width: 1400, height: 1000 });

let passed = 0;
let failed = 0;
const asked = async (said, ask) => {
    try {
        const held = await ask();
        if (held === true) { passed++; console.log(`  ok    ${said}`); return; }
        failed++; console.log(`  FAIL  ${said}${typeof held === 'string' ? ' — ' + held : ''}`);
    } catch (e) { failed++; console.log(`  FAIL  ${said} — ${e.message}`); }
};

const cells = () => g.evaluate(() =>
    [...document.querySelectorAll('.pd-infobox [role="img"] > div')].map(o => getComputedStyle(o).backgroundColor).join('|'));
const differ = (a, c) => a.split('|').filter((one, at) => one !== c.split('|')[at]).length;
const kept = () => g.evaluate(() => {
    try { const said = localStorage.getItem('dougs-library/plate/7'); return said === null ? -1 : JSON.parse(said).length; } catch { return -1; }
});
const settle = (ms = 2200) => new Promise(r => setTimeout(r, ms));

await g.goto(BASE + '/', { waitUntil: 'load' });
await g.evaluate(() => { try { localStorage.clear(); } catch { } });

// THE FIRST PAINT. Watched from the compositor's side, because a frame callback cannot run while the
// page is busy becoming itself.
await g.reload({ waitUntil: 'domcontentloaded' });
const early = [];
for (let n = 0; n < 6; n++) {
    early.push(await g.evaluate(() => {
        const one = document.querySelector('.pd-infobox [role="img"]');
        if (one === null) return 'no plate yet';
        const shown = [...one.children].map(c => getComputedStyle(c).backgroundColor);
        return shown.length === 0 ? 'no cells' : shown.every(c => c === 'rgb(255, 255, 255)') ? 'blank' : 'drawn';
    }).catch(() => 'gone'));
}
await settle();

console.log('THE FIRST PAINT');
console.log(`  the first six looks at the page: ${early.join(', ')}`);
await asked('nothing but white is ever the first thing drawn', async () =>
    early.indexOf('drawn') === -1 || early.indexOf('drawn') > early.indexOf('blank') || early[0] === 'drawn' && 'a picture was up before any blank');

const pristine = await cells();
await asked('and the plate is drawn once the browser has it', async () =>
    pristine.split('|').length === 144 && !pristine.split('|').every(c => c === 'rgb(255, 255, 255)'));

const at = await g.evaluate(() => {
    const one = document.querySelector('.pd-infobox [role="img"]');
    one.scrollIntoView({ block: 'center' });
    const r = one.getBoundingClientRect();
    const cell = r.width / 12;
    const seat = (cx, cy) => ({ x: r.x + cell * cx, y: r.y + cell * cy });
    return { a: seat(2.5, 2.5), c: seat(8.5, 7.5), d: seat(1.5, 10.5), away: { x: r.x - 40, y: r.y - 40 } };
});

console.log('\nA HAND OVER IT, WITHOUT PRESSING');
await g.mouse.move(at.a.x, at.a.y); await settle(400);
const hovered = await cells();
await asked('hovering shows the stroke it would lay', async () => differ(pristine, hovered) > 0);
await asked('and writes nothing down', async () => (await kept()) === -1 || 'a painting was saved by a hover');

await g.mouse.move(at.away.x, at.away.y); await settle(500);
await asked('taking the hand away puts the plate back exactly as it was', async () => {
    const back = await cells();
    return differ(pristine, back) === 0 || `${differ(pristine, back)} cells stayed changed`;
});
await asked('and still nothing is written down', async () => (await kept()) === -1 || 'a painting was saved without a press');

console.log('\nPRESSING');
await g.mouse.move(at.a.x, at.a.y); await settle(300);
await g.mouse.click(at.a.x, at.a.y); await settle(600);
await g.mouse.move(at.away.x, at.away.y); await settle(500);
const once = await cells();
await asked('a press keeps the mark', async () => differ(pristine, once) > 0);
await asked('and writes exactly one stroke down', async () => (await kept()) === 1 || `the drawer holds ${await kept()}`);

await g.mouse.move(at.c.x, at.c.y); await settle(300);
await g.mouse.click(at.c.x, at.c.y); await settle(600);
await g.mouse.move(at.away.x, at.away.y); await settle(500);
const twice = await cells();
await asked('a second press runs a line on from the first', async () => differ(once, twice) > 0);
await asked('and the drawer holds two', async () => (await kept()) === 2 || `the drawer holds ${await kept()}`);

console.log('\nCOMING BACK TO IT');
await g.reload({ waitUntil: 'load' });
await untilThePlateIsDrawn(g);
await settle(400);
const back = await cells();
await asked('the painting is there after a reload', async () => differ(twice, back) === 0 || `${differ(twice, back)} cells differ from the painting`);
await asked('and it is not the plate as it ships', async () => differ(pristine, back) > 0);

console.log('\nCLEARING IT');
await g.mouse.move(at.d.x, at.d.y); await settle(300);
await g.mouse.click(at.d.x, at.d.y, { clickCount: 2 }); await settle(800);
await g.mouse.move(at.away.x, at.away.y); await settle(500);
await asked('a double press wipes the whole thing', async () => {
    const wiped = await cells();
    return differ(pristine, wiped) === 0 || `${differ(pristine, wiped)} cells survived the wipe`;
});
await asked('and the drawer is emptied too', async () => (await kept()) === 0 || `the drawer holds ${await kept()}`);

console.log(`\n${failed === 0 ? 'ALL' : passed + ' of ' + (passed + failed)} ${passed + failed} promises kept${failed === 0 ? '' : ` — ${failed} broken`}`);
await b.close();
process.exit(failed === 0 ? 0 : 1);
