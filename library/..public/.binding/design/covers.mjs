// THE FIVE COVERS, DRIVEN — AND THE TEST IS NOT WHAT IT WAS. It used to move a pointer across a
// plate and assert that something changed, which is precisely what Doug rejected: "Something that
// moves with you isn't interacting it is REACTING." So every check here asks the questions that
// separate interacting from flinching, and then the one that separates a state from a ratchet:
//
//   MOVE OVER IT.  Nothing may happen.
//   PRESS IT.      The picture must change.
//   HAND AWAY.     It must STILL be changed.
//   UNDO IT.       The mark that inverts it must put it back — Doug: "interesting and invertible."
//   PRESS ANOTHER. The state must move on.
//
// Three of the four invert with the same gesture on the same spot: a switch is its own inverse, an
// axiom is retracted where it was asserted, and a chapter is unmarked where it was marked. The
// register is the exception — it writes at the end of the record and takes back where the last
// chapter began, and both marks move as the record re-divides, so its inverse is named rather than
// assumed. Reloading the page is not an inversion and does not count as one.
import puppeteer from 'puppeteer';

const BASE = process.argv[2] || 'http://localhost:4242';
const results = [];
const check = (name, held, said = '') => results.push({ name, held, said });
const settle = ms => new Promise(r => setTimeout(r, ms));

const b = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });

const opened = async (route, what) => {
    const page = await b.newPage();
    await page.setViewport({ width: 1400, height: 1000 });
    await page.goto(BASE + route, { waitUntil: 'domcontentloaded' });
    await settle(1700);
    const box = await page.evaluate(() => {
        const one = document.querySelector('.pd-infobox [role="img"]');
        one.scrollIntoView({ block: 'center' });
        const r = one.getBoundingClientRect();
        return { x: r.x, y: r.y, w: r.width, h: r.height };
    });
    check(what + ': the plate is drawn at a readable size', box.w > 180 && box.h > 180,
        Math.round(box.w) + ' by ' + Math.round(box.h));
    return { page, box };
};

// EVERYTHING VISIBLE, because a probe that only watches background is blind to a plate that draws
// with borders and box-shadow — measured 2026-09-15, the domain reported zero changes while it was
// visibly cutting basins. A check that cannot see the mechanism is worse than no check.
const look = page => page.evaluate(() =>
    [...document.querySelectorAll('.pd-infobox [role="img"] *')].map(one => {
        const s = getComputedStyle(one);
        return [s.backgroundColor, s.backgroundImage, s.boxShadow, s.opacity, s.flexGrow,
            s.borderTopWidth, s.borderRightWidth, s.borderBottomWidth, s.borderLeftWidth,
            s.borderTopColor, s.borderRightColor, s.borderBottomColor, s.borderLeftColor,
            s.left, s.top, s.width, s.height].join('|');
    }));

// PRESS WHAT LOOKS PRESSABLE, which is what a person does — the chart has rings on it, the
// switchboard has a diagonal, and the others answer on the field.
const pressable = (page, nth) => page.evaluate(n => {
    const plate = document.querySelector('.pd-infobox [role="img"]');
    const able = [...plate.querySelectorAll('*')].filter(one => getComputedStyle(one).cursor === 'pointer');
    const one = able[Math.min(n, able.length - 1)];
    if (one === undefined) return null;
    const r = one.getBoundingClientRect();
    return { x: r.x + r.width / 2, y: r.y + r.height / 2, of: able.length };
}, nth);

const differ = (a, c) => a.reduce((n, one, at) => n + (one === c[at] ? 0 : 1), 0);

// AN INVERSE IS NOT ALWAYS THE SAME SPOT. Three of the four are toggles, so pressing where you
// pressed undoes it. The register is not: its two marks are the END OF THE RECORD, which writes a
// chapter, and WHERE THE LAST CHAPTER BEGAN, which takes it back — and both move when the record
// re-divides. So a check names the mark that inverts rather than assuming it is the one it pressed.
const drive = async (route, what, press, again, wait, undo = 'same') => {
    const { page, box } = await opened(route, what);
    const rest = await look(page);

    await page.mouse.move(box.x + box.w * 0.2, box.y + box.h * 0.25);
    await settle(280);
    await page.mouse.move(box.x + box.w * 0.72, box.y + box.h * 0.66);
    await settle(800);
    const moved = await look(page);
    check(what + ': moving a pointer over it changes nothing', differ(rest, moved) === 0,
        differ(rest, moved) + ' things changed without a press');

    const first = await pressable(page, press);
    check(what + ': something on it looks pressable', first !== null,
        first === null ? 'nothing has a pointer cursor' : first.of + ' pressable parts');
    await page.mouse.click(first.x, first.y);
    await settle(wait);
    const pressed = await look(page);
    check(what + ': a press changes it', differ(rest, pressed) > 0, differ(rest, pressed) + ' things changed');

    await page.mouse.move(box.x - 140, box.y - 140);
    await settle(1300);
    const kept = await look(page);
    check(what + ': it stays changed when the hand is gone',
        differ(rest, kept) > 0 && differ(pressed, kept) === 0,
        differ(rest, kept) + ' still changed, ' + differ(pressed, kept) + ' drifted after the hand left');

    const inverse = undo === 'same' ? first : await pressable(page, undo);
    await page.mouse.click(inverse.x, inverse.y);
    await settle(wait);
    const back = await look(page);
    check(what + (undo === 'same' ? ': pressing the same place again puts it back' : ': the mark that undoes it puts it back'),
        differ(rest, back) === 0, differ(rest, back) + ' things still differ from where it started');

    const second = await pressable(page, again);
    await page.mouse.click(second.x, second.y);
    await settle(wait);
    const twice = await look(page);
    check(what + ': another press moves the state on', differ(back, twice) > 0, differ(back, twice) + ' changed');

    await page.close();
};

await drive('/my-library-log/', 'the register', 1, 1, 900, 0);
await drive('/claude-and-our-projects/', 'the switchboard', 1, 2, 800);
await drive('/semantic-reference-theory/', 'the domain', 40, 99, 900);
await drive('/semantics-of-types-and-more/', 'the transcript', 12, 40, 800);

// AND THE CATALOGUE STILL REMEMBERS, because it is the only one that may.
{
    const { page, box } = await opened('/', 'the catalogue');
    await page.mouse.move(box.x + box.w * 0.32, box.y + box.h * 0.34);
    await settle(300);
    await page.mouse.click(box.x + box.w * 0.32, box.y + box.h * 0.34);
    await settle(800);
    const laid = await look(page);
    await page.reload({ waitUntil: 'domcontentloaded' });
    await settle(1900);
    const after = await look(page);
    check('the catalogue keeps what you make across a reload',
        differ(laid, after) < Math.max(4, laid.length * 0.2),
        differ(laid, after) + ' of ' + laid.length + ' cells differ after reloading');
    await page.close();
}

await b.close();
const failed = results.filter(one => !one.held);
results.forEach(one => console.log('  ' + (one.held ? 'ok  ' : 'FAIL') + '  ' + one.name +
    (one.held || one.said === '' ? '' : '  — ' + one.said)));
console.log('\n' + (results.length - failed.length) + ' of ' + results.length + ' pass');
process.exit(failed.length === 0 ? 0 : 1);
