// WHAT EVERY PAGE LOOKS LIKE, AT EVERY WIDTH, KEPT SO IT CAN BE COMPARED.
//
// Doug, 2026-09-17: "until we have a cross breakpoint regression system - you can only do things
// that are at the very safe refactoring level." This is that system, and it exists because a library
// whose layout nobody can check is a library nobody can refactor.
//
// IT IS NOT A PICTURE COMPARISON. A pixel diff answers "three per cent of the pixels changed", which
// names nothing and fails on a font hint. This records what every element on the page IS — its box
// and the few computed properties that actually break — so a failure reads
//
//     / at 900   .pd-body            width 656 -> 24
//     / at 1400  .pd-table-of-contents > .pd-heading   border-bottom none -> 1px solid #eaecf0
//
// which is a sentence somebody can act on. It also catches STRUCTURE: elements are counted by their
// class list, so a row appearing or vanishing is reported as a count rather than as silence.
//
//   node design/looks.mjs            compare every page at every width against what is kept
//   node design/looks.mjs --keep     write what is there now as the thing to compare against
//   node design/looks.mjs --shoot    also photograph every page at every width, into the temp folder
//
// THE WIDTHS ARE THE ONES THAT MEAN SOMETHING. 1120 is the breakpoint this library and wikipedia
// both turn at, so 1119 and 1200 stand either side of it; the rest are a wide desktop, a laptop, a
// tablet and a phone. A width nothing turns at is a width nothing is learned from.
import puppeteer from 'puppeteer';
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { tmpdir } from 'node:os';
import { untilThePlateIsDrawn } from './waiting.mjs';

const BASE = process.argv.find(one => one.startsWith('http')) ?? 'http://localhost:4242';
const keeping = process.argv.includes('--keep');
const shooting = process.argv.includes('--shoot');

// THREE PAGES, NOT SIX, AND EACH ONE STANDS FOR A SHAPE. Doug, 2026-09-17: "You don't need to test
// all the pages… most of them are the same. And if you don't feel like you can choose canonicals,
// then we are in trouble because each page is then very different!" He is right, and the library has
// exactly three shapes in it:
//
//   /                          the summit, and the only page that is also a reference manual —
//                              both rail sections, a live plate, code resources, the widest page
//                              this library has. Claude & Our Projects, the Importer and Semantic
//                              Reference Theory are all this shape with less on them.
//   /my-library-log/           an autobiography — a dated body, an index in place of a lead, and a
//                              cover art that reads the book it stands on.
//   /semantics-of-types-and-more/   a conversation — an <About> box rather than an infobox, and no
//                              cover art at all, which is the one page that proves the layout does
//                              not depend on a plate being there.
//
// A fourth page here would cost a minute a run and answer a question one of these three already does.
// AND ONE OF THEM IS READ WHOLE WHILE THE OTHERS ARE ONLY GLANCED AT. Doug: "Use the library page as
// the main and then check each of the individual pages more simply." The summit carries every part
// this library has, so it is where a fault will show; the other two are asked only whether their
// landmarks still stand where they should, which is what would catch a book losing a column or a box.
const routes = [
    { at: '/', whole: true },
    { at: '/my-library-log/', whole: false },
    { at: '/semantics-of-types-and-more/', whole: false },
];

const landmarks = '.pd-header, .pd-cover, .pd-cover > .pd-title, .pd-toolbar, .pd-table-of-contents, .pd-table-of-contents > .pd-section, .pd-body, .pd-appearance, .pd-infobox, .pd-body > .pd-chapter';

// AND ONE WIDTH PER BAND, TAKEN FROM THE SHEET RATHER THAN FROM TASTE. The served stylesheet turns at
// 1601, 1120, 1000, 640 and 480; a width inside a band behaves like every other width in it, so one
// each is the whole of what can be learned. Seven widths chosen by eye tested two bands twice and one
// not at all.
const widths = [1700, 1400, 1119, 900, 600, 400];

const kept = join(dirname(fileURLToPath(import.meta.url)), '.looks.json');
const shots = join(tmpdir(), 'dougs-library-looks');

// WHAT IS WORTH RECORDING ABOUT AN ELEMENT. Every property here has broken something on this library
// at least once: a column collapsing, a rule that was reserved and never drawn, a weight nobody
// asked for, a row falling onto a second line, a mark landing in front of a name instead of after it.
const watched = ['display', 'fontWeight', 'fontSize', 'color', 'borderBottomWidth', 'borderBottomColor',
    'paddingLeft', 'marginLeft', 'gridColumn', 'flexDirection', 'listStyleType', 'textAlign'];

const read = (page, whole) => page.evaluate(([properties, only]) => {
    const held = {};
    const count = new Map();
    for (const one of document.querySelectorAll(only ?? '[class*="pd-"]')) {
        const classes = [...one.classList].filter(c => c.startsWith('pd-')).sort().join('.');
        if (classes === '') continue;
        const at = (count.get(classes) ?? 0);
        count.set(classes, at + 1);
        const box = one.getBoundingClientRect();
        const style = getComputedStyle(one);
        const said = { w: Math.round(box.width), h: Math.round(box.height) };
        for (const property of properties) said[property] = style[property];
        held[`${classes}#${at}`] = said;
    }

    return held;
}, [watched, whole ? null : landmarks]);

const survey = async (browser) => {
    const all = {};
    for (const width of widths) {
        const page = await browser.newPage();
        await page.setViewport({ width, height: 1000 });
        for (const route of routes) {
            await page.goto(BASE + route.at, { waitUntil: 'load', timeout: 40000 });
            await untilThePlateIsDrawn(page).catch(() => { });
            await new Promise(done => setTimeout(done, 700));
            all[`${route.at} at ${width}`] = await read(page, route.whole);
            if (shooting) {
                mkdirSync(shots, { recursive: true });
                writeFileSync(join(shots, `${(route.at.replace(/\//g, '') || 'index')}-${width}.png`), await page.screenshot({ fullPage: false }));
            }
        }
        await page.close();
    }

    return all;
};

// WHAT CHANGED, SAID AS A SENTENCE. A box that moved by a pixel is noise — a sub-pixel rounding under
// a different width — so a box is only reported when it moves by more than two.
const differences = (before, now) => {
    const said = [];
    for (const where of Object.keys(before)) {
        const was = before[where];
        const is = now[where];
        if (is === undefined) { said.push(`${where}  GONE`); continue; }
        for (const property of ['w', 'h']) {
            if (Math.abs(was[property] - is[property]) > 2) said.push(`${where}  ${property} ${was[property]} -> ${is[property]}`);
        }
        for (const property of watched) {
            if (was[property] !== is[property]) said.push(`${where}  ${property} ${was[property]} -> ${is[property]}`);
        }
    }
    for (const where of Object.keys(now)) if (before[where] === undefined) said.push(`${where}  NEW`);

    return said;
};

const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });
const now = await survey(browser);
await browser.close();

const elements = Object.values(now).reduce((sum, one) => sum + Object.keys(one).length, 0);
console.log(`${routes.length} pages at ${widths.length} widths · ${elements} elements recorded${shooting ? ` · photographed into ${shots}` : ''}`);

if (keeping || !existsSync(kept)) {
    writeFileSync(kept, JSON.stringify(now, null, 1));
    console.log(existsSync(kept) && !keeping ? 'nothing was kept before, so this is now the reference' : 'kept as the reference');
    process.exit(0);
}

const before = JSON.parse(readFileSync(kept, 'utf8'));
let faults = 0;
for (const view of Object.keys(now)) {
    const changed = differences(before[view] ?? {}, now[view]);
    if (changed.length === 0) continue;
    faults += changed.length;
    console.log(`\n── ${view} ── ${changed.length}`);
    for (const one of changed.slice(0, 12)) console.log('  ' + one);
    if (changed.length > 12) console.log(`  … and ${changed.length - 12} more`);
}
console.log(faults === 0 ? '\nnothing about the library looks different' : `\n${faults} differences — run with --keep once they are the intended look`);
process.exit(faults === 0 ? 0 : 1);
