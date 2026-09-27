// THE REGRESSION SUITE. Every check here is a defect Doug found by hand and reported, some of them
// twice. It exists so he never has to report one of them again: run it after every build, read the
// bottom line, and only look at the page when it says something is wrong.
//
//   node design/qa.mjs http://localhost:PORT
//
// Each check names the thing that broke and, where it matters, what it measured when it broke. A
// check that cannot be made from the page is not written down as passing.
import puppeteer from 'puppeteer';
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { untilThePlateIsDrawn } from './waiting.mjs';

const [, , BASE = 'http://localhost:4242'] = process.argv;

// THE SIX BOOKS AT THEIR OWN ADDRESSES, AND THE FRONT DOOR, WHICH IS NOT A BOOK.
//
// `/` DRAWS THE ROOT BOOK BUT IS NOT WHERE IT STANDS. Every page in the library links to that book
// at `/dougs-library/`, because that is the address the catalogue gives it — so a reachability set
// that counts `/` among the books asks every page for a link no page draws, and reports five pages
// broken for a link that would be wrong to have. Measured 2026-09-19: exactly that, four times.
//
// AND TWO BOOKS WERE NEVER LOOKED AT. `/dougs-library/` and `/claudes-library-importer/` were not in
// this list at all, so the root book was only ever checked through the door and the importer was
// never opened — the suite reported a healthy library while two of its seven pages went unread.
const books = ['/dougs-library/', '/my-library-log/', '/claude-and-our-projects/', '/claudes-library-importer/', '/semantic-reference-theory/', '/semantics-of-types-and-more/'];
const routes = ['/', ...books];

// AND IT LEAVES PICTURES, BECAUSE A NUMBER IS NOT A LOOK. Doug, 2026-09-15: "Are you driving this
// with a browser and even asking yourselves if it looks good?" Half a dozen one-off scripts existed
// only to take a shot of a page; each of them has a named check here now, so they are gone — but the
// shots were the part that let anyone SEE what a check was talking about. Every page is photographed
// as it is opened, into the machine's temp folder rather than beside this file, so looking costs
// nothing and the library never fills up with pictures of itself.
const shots = join(tmpdir(), 'dougs-library-shots');
mkdirSync(shots, { recursive: true });
const shot = async (page, route) => {
    const at = join(shots, `${route.replace(/\//g, '') || 'index'}.png`);
    writeFileSync(at, await page.screenshot({ fullPage: true }));
};

const results = [];
const check = (name, held, said = '') => { results.push({ name, held, said }); };

const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });
const opened = async route => {
    const page = await browser.newPage();
    await page.setViewport({ width: 1400, height: 1000 });
    const broke = [];
    page.on('pageerror', error => broke.push(String(error).slice(0, 120)));
    await page.goto(BASE + route, { waitUntil: 'domcontentloaded', timeout: 30000 });
    await new Promise(done => setTimeout(done, 1400));

    return { page, broke };
};

// ─── EVERY PAGE, THE THINGS THAT HAVE BROKEN BEFORE ───────────────────────────────────────────────
const reaches = new Map();
for (const route of routes) {
    const { page, broke } = await opened(route);
    await shot(page, route);
    const seen = await page.evaluate(() => {
        const link = [51, 102, 204];
        const near = (tone, want) => { const [r, g, b] = (tone.match(/\d+/g) ?? []).map(Number); return Math.hypot(r - want[0], g - want[1], b - want[2]) < 70; };
        const own = element => [...element.childNodes].some(node => node.nodeType === 3 && node.textContent.trim() !== '');
        const tone = element => getComputedStyle(element).color;
        const before = [...document.querySelectorAll('.pd-body *, .pd-cover *')].slice(0, 400).map(tone);
        // THE AUTHOR IS THE MENTION, NOT ITS ANCHOR. On the autobiography itself the author names the
        // book you are reading, and a self-link is drawn as plain text — Wikipedia's own rule — so
        // looking for the anchor found nothing and reported the author missing on the one page whose
        // author matters most. The mention is what must always stand; the anchor is what must stand
        // only when it leads somewhere else.
        const said = document.querySelector('.pd-cover > .pd-author');
        const author = said === null ? null : (said.querySelector('.pd-meaning') ?? said);
        const title = document.querySelector('.pd-cover > .pd-title');
        const rect = author === null ? null : author.getBoundingClientRect();

        return {
            drew: document.querySelectorAll('.pd-book').length > 0,
            refused: document.body.innerText.includes('Bond Constructor Failed'),
            // BLUE IN THE PROSE, WHICH IS WHAT THE COMPLAINT WAS ABOUT. Doug reported text that looked
            // like a link and was not, and this has caught that twice. Code is not prose: a resource is
            // drawn with syntax colouring and a keyword is blue because it is a keyword, which nobody
            // has ever tried to press. Measured 2026-09-17, the day the manual began drawing its own
            // resources: 633, of which 633 were hljs tokens inside a pre. Narrowed to what was meant.
            blueNotLinks: [...document.querySelectorAll('body *')].filter(one => own(one) && one.closest('a') === null && one.closest('pre, code') === null && near(tone(one), link)).length,
            // AN ANCHOR SWALLOWS A BLOCK when it holds another anchor — the contents drawn as one
            // <a> on 2026-09-15 — or holds blocks without being a writing given a reference. A
            // section given one draws as the anchor that holds its heading and its mark; that is
            // the framework's promise, and the brand is one.
            swallowing: [...document.querySelectorAll('a')].filter(one => one.querySelector('a') !== null
                || (!one.classList.contains('pd-meaning') && one.querySelector('p, h1, h2, h3, h4, section, nav, ul, li, figure'))).length,
            dangling: [...document.querySelectorAll('a[href^="#"]')].filter(one => { const id = one.getAttribute('href').slice(1); return id !== '' && document.getElementById(id) === null; }).length,
            relative: [...document.querySelectorAll('a[href]')].filter(one => { const h = one.getAttribute('href'); return h !== '' && !h.startsWith('#') && !h.startsWith('/') && !h.startsWith('http'); }).length,
            inside: [...new Set([...document.querySelectorAll('a[href]')].map(one => one.getAttribute('href')).filter(h => h !== null && h.startsWith('/')))],
            author: author === null ? null : { says: author.textContent.trim(), goes: author.getAttribute('href'), // NOTHING COVERS IT. Asked as `closest('a')`, which answered false the moment the author
                // stopped being an anchor on its own book's page — the question is whether the author
                // is what the pointer would land on, not whether the pointer lands on a link.
                onTop: (held => held !== null && (held === author || author.contains(held)))(document.elementFromPoint(rect.x + rect.width / 2, rect.y + rect.height / 2)) },
            title: title === null ? null : title.textContent.trim(),
            before,
        };
    });
    reaches.set(route, seen.inside);

    check(`${route} draws its own book`, seen.drew && !seen.refused);
    check(`${route} nothing blue that is not a link`, seen.blueNotLinks === 0, `${seen.blueNotLinks} blue non-links`);
    check(`${route} no anchor swallows a block`, seen.swallowing === 0, `${seen.swallowing} swallowing anchors`);
    check(`${route} no link to a fragment that is not there`, seen.dangling === 0, `${seen.dangling} dangling`);
    check(`${route} no anchor with a relative address`, seen.relative === 0, `${seen.relative} relative`);
    check(`${route} nothing thrown`, broke.length === 0, broke[0] ?? '');
    check(`${route} has an author link, labelled, on top`, seen.author !== null && /^Author:/.test(seen.author.says) && seen.author.onTop,
        seen.author === null ? 'no author' : `${seen.author.says} · on top: ${seen.author.onTop}`);
    // AND IT LEADS TO THE AUTOBIOGRAPHY, OR IT IS THE AUTOBIOGRAPHY. Every book here is Doug's, so
    // the author names MY Library Log from every page — and on MY Library Log that is the page you
    // are standing on, where an anchor would take the reader nowhere.
    check(`${route} the author leads to the autobiography, or is it`,
        route === '/my-library-log/' ? seen.author?.goes === null : seen.author?.goes === '/my-library-log/',
        seen.author?.goes ?? 'not drawn as a link');

    // HOVERING PROSE RECOLOURS NOTHING. `.pd-reference:hover` once matched the whole book.
    //
    // A PAGE WITH NO PROSE IS A FINDING, NOT A CRASH. This read the paragraph's box straight off the
    // query and a page that had none threw inside the browser, which took the whole suite down and
    // reported none of the sixty checks standing behind it — so one book being mid-write hid the
    // state of every other. It is asked as a question now, like everything else here.
    const body = await page.evaluate(() => {
        const one = document.querySelector('.pd-body .pd-paragraph');
        if (one === null) return null;
        const r = one.getBoundingClientRect();
        return { x: r.x + 30, y: r.y + 8 };
    });
    check(`${route} has prose in its body`, body !== null, 'no paragraph under .pd-body');
    if (body !== null) {
        await page.mouse.move(body.x, body.y, { steps: 4 });
        await new Promise(done => setTimeout(done, 500));
        const after = await page.evaluate(() => [...document.querySelectorAll('.pd-body *, .pd-cover *')].slice(0, 400).map(one => getComputedStyle(one).color));
        const moved = seen.before.filter((one, at) => one !== after[at]).length;
        check(`${route} hovering prose recolours nothing`, moved === 0, `${moved} elements changed colour`);
    }

    await page.close();
}

// ─── EVERY INTERNAL LINK ACTUALLY ARRIVES, PRESSED WITH A MOUSE ───────────────────────────────────
// PRESSED AT A COORDINATE, AND THAT IS THE WHOLE POINT. What stood here called `.click()` on the
// element, and a note beside it said a synthetic press "does not reach this page in a headless
// browser." That note was wrong and it cost days: the press reached the page perfectly, and the page
// tore itself down between pointerdown and mousedown, so the anchor was gone before the browser
// could synthesise a click. Every link measured correct, every check here passed, and NOTHING ON THE
// PAGE COULD BE CLICKED BY A HUMAN — Doug found it, not this suite. `.click()` skips hit-testing,
// skips the pointer sequence, and skips the only failure this check exists to catch. Never again.
{
    const { page } = await opened('/');
    const links = await page.evaluate(() => [...new Set([...document.querySelectorAll('a[href^="/"]')].map(one => one.getAttribute('href')))]);
    for (const href of links) {
        await page.goto(BASE + '/', { waitUntil: 'domcontentloaded' });
        await new Promise(done => setTimeout(done, 1100));
        // PRESSED WHERE A PERSON WOULD PRESS. Two things make a coordinate wrong: a link inside a
        // closed menu measures 0×0, and a link that wraps to a second line has the middle of its
        // BOUNDING BOX in the white gap between its lines — both land on something that is not the
        // link. So: the first link with a box at all, pressed in the middle of its first LINE box.
        const at = await page.evaluate(one => {
            const seen = each => each.getClientRects().length > 0 && each.getBoundingClientRect().width > 0;
            const links = [...document.querySelectorAll(`a[href="${one}"]`)];
            // A MENU IS OPENED, NOT SKIPPED. A link in a closed menu measures nothing, and a reader
            // reaches it by opening the menu — so the driver opens it too, rather than calling a book
            // unreachable because its only way in is one click further than the others.
            if (!links.some(seen)) links.forEach(each => each.closest('details')?.setAttribute('open', ''));
            const link = links.find(seen);
            if (link === undefined) return undefined;
            link.scrollIntoView({ block: 'center' });
            const line = link.getClientRects()[0];
            return { x: line.x + line.width / 2, y: line.y + line.height / 2 };
        }, href);
        if (at === undefined) { check(`pressing ${href} arrives at a page that draws`, false, 'no link to it can be seen'); continue; }
        await page.mouse.click(at.x, at.y);
        await new Promise(done => setTimeout(done, 1600));
        // A CHAPTER'S ADDRESS IS ITS BOOK'S PAGE AND A FRAGMENT, so what must match is the page —
        // the fragment is where on it, and the browser keeps that out of the pathname.
        const landed = await page.evaluate(() => ({ at: location.pathname, drew: document.querySelectorAll('.pd-book').length > 0 }));
        check(`pressing ${href} arrives at a page that draws`, landed.at === href.split('#')[0] && landed.drew, `landed on ${landed.at}, drew ${landed.drew}`);
    }
    await page.close();
}

// ─── THE LIBRARY IS WALKABLE ──────────────────────────────────────────────────────────────────────
for (const route of routes) {
    const found = new Set([route]);
    for (let pass = 0; pass < routes.length; pass++) [...found].forEach(at => (reaches.get(at) ?? []).forEach(to => found.add(to)));
    const missing = books.filter(one => !found.has(one));
    check(`from ${route} every book is reachable`, missing.length === 0, missing.join(', '));
}

// ─── THE CONTENTS TABLE ───────────────────────────────────────────────────────────────────────────
{
    const { page } = await opened('/');
    // ASKED, NOT ASSUMED. Every part of a contents table this reaches for is a question of its own,
    // because a book that stops drawing one of them should say so rather than throw inside the browser
    // and take the sixty checks behind it down with it. Measured 2026-09-16: the reference manual's
    // restructure changed what the table draws, and `getComputedStyle(null)` reported nothing at all.
    const toc = await page.evaluate(() => {
        const rows = [...document.querySelectorAll('.pd-table-of-contents .pd-paragraph.pd-option')];
        const squares = [...document.querySelectorAll('.pd-table-of-contents .pd-book.pd-catalogue > .pd-meaning')];
        const heading = document.querySelector('.pd-table-of-contents .pd-heading');
        // THE FIRST ROW'S OWN WORDS, WHATEVER KIND OF MENTION IT IS AND WHETHER OR NOT IT LEADS
        // ANYWHERE. This asked for `.pd-ref`, which was true while the table listed headings by hand;
        // it lists mentions now, and the very first one names the book you are standing on — which
        // this library draws as plain text with no anchor at all, so asking for a link found nothing
        // and the check reported "not drawn" about a row that was plainly on the page.
        const first = rows[0]?.querySelector('.pd-ref, .pd-meaning, a') ?? rows[0];

        return {
            rows: rows.length,
            tall: rows.filter(one => one.getBoundingClientRect().height > 58).length,
            heading: heading === null ? null : getComputedStyle(heading).fontWeight,
            firstWeight: first == null ? null : getComputedStyle(first).fontWeight,
            // A BOOK IS MARKED, NAMED AND LEADS SOMEWHERE. The mark used to BE the row — a small
            // bordered square standing in for a book whose words were written beside it as a ref —
            // and this measured that square's own box. The row is the book's name now and the mark
            // is a ::before in front of it, which no selector can reach, so it is read off the
            // pseudo-element. Doug, 2026-09-16: "There are no images for the book names."
            // A CATALOGUED BOOK'S ROW IS A BOX AND A NAME: the box is the book's own link, written with
            // an empty display and drawn as a bordered square, and the name is the chapter beside it
            // that is the book's synopsis — Doug, 2026-09-19. A book listed but not catalogued here is
            // a plain link that says its name.
            books: [...document.querySelectorAll('.pd-table-of-contents .pd-book.pd-catalogue')].map(one => {
                const link = one.querySelector('a');
                const box = link !== null && link.textContent === '' ? getComputedStyle(link) : null;
                return {
                    says: one.textContent.trim() || (one.parentElement?.querySelector(':scope > .pd-chapter-mention .pd-meaning')?.textContent.trim() ?? ''),
                    marked: box !== null && parseFloat(box.width) >= 6 && Math.abs(parseFloat(box.width) - parseFloat(box.height)) < 1 && box.borderTopWidth !== '0px',
                    goes: link?.getAttribute('href') ?? null,
                };
            }),
        };
    });
    check('the contents table has rows', toc.rows > 0, 'no .pd-option rows in the table of contents');
    // A ROW MAY RUN TO A SECOND LINE AND NO FURTHER. It was one line, which was right while a row was
    // a short ref beside a mark; a row is a book's whole name now and three of them do not fit the
    // rail. What must not happen is the thing Doug called critical — a row's mark falling onto a line
    // of its own — and that is the `marked` question below, not this one.
    check('no contents row runs past two lines', toc.tall === 0, `${toc.tall} rows taller than two lines`);
    // A LABEL IN A SIDEBAR IS NOT A HEADLINE. Doug, 2026-09-16: "can you not make those titles bold on
    // the side? Is that what wikipedia even does? It seems like something in text styled more to fit
    // in would work better." It is not what wikipedia does — its sidebar labels are small and quiet.
    // This asserted the opposite, which was pinning a decision rather than a requirement.
    check('nothing in the contents is set bold', toc.heading !== null && toc.heading !== '700' && toc.firstWeight !== null && toc.firstWeight !== '700',
        `heading ${toc.heading ?? 'not drawn'}, first entry ${toc.firstWeight ?? 'not drawn'}`);
    check('every book in the catalogue is named and goes to a book, and a catalogued one is a box beside its synopsis chapter', toc.books.length > 0
        && toc.books.some(one => one.marked)
        && toc.books.every(one => one.says !== '' && (one.goes === null || one.goes.startsWith('/'))),
        JSON.stringify(toc.books));
    await page.close();
}

// ─── THE PLATE ────────────────────────────────────────────────────────────────────────────────────
{
    const { page } = await opened('/');
    await page.evaluate(() => window.localStorage.clear());
    await page.reload({ waitUntil: 'domcontentloaded' });
    await untilThePlateIsDrawn(page);
    const read = () => page.evaluate(() => {
        const stop = document.createElement('style');
        stop.textContent = '*{transition:none !important}';
        document.head.append(stop);
        void document.body.offsetHeight;
        const held = document.querySelector('.pd-infobox .pd-tiles .pd-image');
        const { x, y, width } = held.getBoundingClientRect();
        const said = { x, y, width, cells: [...held.children].map(one => getComputedStyle(one).backgroundColor) };
        stop.remove();

        return said;
    });
    const bare = await read();
    const step = bare.width / 12;
    const spot = (cx, cy) => ({ x: bare.x + (cx + 0.5) * step, y: bare.y + (cy + 0.5) * step });
    const away = async () => { await page.mouse.move(bare.x - 90, bare.y - 90, { steps: 5 }); await new Promise(done => setTimeout(done, 600)); return read(); };
    const lit = one => { const [r, g, b] = (one.match(/\d+/g) ?? []).map(Number); return 0.2126 * r + 0.7152 * g + 0.0722 * b; };

    await page.mouse.move(spot(2, 2).x, spot(2, 2).y, { steps: 5 });
    await new Promise(done => setTimeout(done, 400));
    await page.mouse.click(spot(2, 2).x, spot(2, 2).y);
    await new Promise(done => setTimeout(done, 500));
    const first = await away();
    const anchored = bare.cells.map((one, at) => (one === first.cells[at] ? -1 : at)).filter(at => at >= 0);
    check('the first mark is one cell and darker than the field', anchored.length === 1 && lit(first.cells[anchored[0]]) < lit(bare.cells[anchored[0]]), `${anchored.length} cells`);

    await page.mouse.move(spot(9, 6).x, spot(9, 6).y, { steps: 6 });
    await new Promise(done => setTimeout(done, 700));
    const aiming = await read();
    await page.mouse.click(spot(9, 6).x, spot(9, 6).y);
    await new Promise(done => setTimeout(done, 800));
    const kept = await read();
    check('what you see is what you get', aiming.cells.filter((one, at) => one !== kept.cells[at]).length === 0,
        `${aiming.cells.filter((one, at) => one !== kept.cells[at]).length} cells changed on the click`);

    const drawn = await away();
    const run = first.cells.map((one, at) => (one === drawn.cells[at] ? -1 : at)).filter(at => at >= 0);
    const walk = new Set([...run, 2 * 12 + 2]);
    const reached = new Set([2 * 12 + 2]);
    for (let pass = 0; pass < walk.size; pass++) [...reached].forEach(cell => [[1, 0], [-1, 0], [0, 1], [0, -1]].forEach(([dx, dy]) => {
        const x = (cell % 12) + dx;
        const y = Math.floor(cell / 12) + dy;
        if (x >= 0 && x < 12 && y >= 0 && y < 12 && walk.has(y * 12 + x)) reached.add(y * 12 + x);
    }));
    check('the stroke is a continuous staircase with no diagonals', reached.size === walk.size && run.includes(6 * 12 + 9), `${walk.size - reached.size} cells unreachable`);

    await page.mouse.move(spot(4, 9).x, spot(4, 9).y, { steps: 5 });
    await new Promise(done => setTimeout(done, 400));
    await page.mouse.click(spot(4, 9).x, spot(4, 9).y, { clickCount: 2 });
    await new Promise(done => setTimeout(done, 700));
    const wiped = await away();
    check('a double click clears the plate', bare.cells.filter((one, at) => one === wiped.cells[at]).length === bare.cells.length,
        `${bare.cells.filter((one, at) => one !== wiped.cells[at]).length} cells still painted`);
    await page.close();
}

await browser.close();

const failed = results.filter(one => !one.held);
results.forEach(one => console.log(`  ${one.held ? 'ok  ' : 'FAIL'}  ${one.name}${one.held || one.said === '' ? '' : `  — ${one.said}`}`));
console.log(`\n${results.length - failed.length} of ${results.length} checks pass`);
console.log(`every page photographed into ${shots}`);
console.log(failed.length === 0 ? 'the library is good' : `${failed.length} BROKEN`);
process.exit(failed.length === 0 ? 0 : 1);
