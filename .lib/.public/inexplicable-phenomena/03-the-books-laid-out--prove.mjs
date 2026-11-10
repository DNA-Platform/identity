// Proves every book in the register of The Books Laid Out at its address, in a real browser, against the
// preview on 4343. Lands on each; then walks each catalogue as a reader would. Exits 0 only when nothing failed.
//
//     node library/.public/.lib/inexplicable-phenomena/03-the-books-laid-out--prove.mjs

import { createRequire } from 'module';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const repository = dirname(dirname(dirname(dirname(dirname(fileURLToPath(import.meta.url))))));
const puppeteer = createRequire(join(repository, 'package.json'))('puppeteer');
const base = 'http://localhost:4343/inexplicable-phenomena/';
const books = [
    'our-library', 'our-reference', 'our-team', 'dictionary', 'the-design', 'chemistry', 'our-math',
    'mathematical-reference', 'mathematical-design', 'mathematical-principles', 'mathematical-identity',
    'mathematical-library', 'arithmetic', 'arithmetic-project', 'arithmetic-textbook', 'arithmetic-notebook',
    'neuroscience', 'philosophy', 'physics',
];
const about = {
    'our-library': 'Inexplicable Phenomena', 'our-team': 'Our Team', 'chemistry': 'Chemistry', 'our-math': 'Mathematics',
    'mathematical-identity': 'Mathematical Identity', 'arithmetic': 'Arithmetic',
    'neuroscience': 'Neuroscience', 'philosophy': 'Philosophy', 'physics': 'Physics',
};
const subjects = ['Inexplicable Phenomena', 'Mathematics', 'Arithmetic'];
const catalogues = [
    { book: 'our-library', home: '/inexplicable-phenomena/our-library/' },
    { book: 'our-math', home: '/inexplicable-phenomena/our-math/' },
    { book: 'arithmetic', home: '/inexplicable-phenomena/arithmetic/' },
];

const browser = await puppeteer.launch({ headless: true });
const page = await browser.newPage();
await page.setViewport({ width: 1280, height: 800 });
let failures = 0;

const visible = () => page.evaluate(() => document.body.innerText.replace(/\s+/g, ' ').trim());
// THE LINKS BY THEIR TEXT CONTENT AND NOT WHAT IS SEEN, since Sprint 125: while the cover is open the running head
// and the byline stand in the page unseen behind the front, and a hidden element's innerText is empty.
const links = () => page.evaluate(() => [...document.querySelectorAll('a[href]')].map(a => ({ text: a.textContent.replace(/\s+/g, ' ').trim(), href: a.getAttribute('href') })));
const goto = async url => {
    const response = await page.goto(url, { waitUntil: 'networkidle0', timeout: 60000 });
    await page.waitForSelector('.pd-book', { timeout: 20000 });
    return response?.status();
};
const turnTo = async hash => {
    await page.waitForFunction(h => location.hash === h, { timeout: 10000 }, hash);
    await new Promise(resolve => setTimeout(resolve, 300));
};

console.log('--- every book, landing');
for (const book of books) {
    try {
        const status = await goto(`${base}${book}/`);
        const open = await page.evaluate(() => document.querySelector('.pa-open .pd-title')?.textContent.replace(/\s+/g, ' ').trim() ?? null);
        const found = await links();
        const byline = await page.evaluate(() => document.querySelector('.pd-byline')?.textContent.replace(/\s+/g, ' ').trim() ?? '');
        const author = found.find(l => l.href.endsWith('/our-team/') && l.text === 'Doug');
        const filed = found.find(l => subjects.includes(l.text));
        const subject = about[book];
        // THE LABEL AS WRITTEN, 'About', since the byline is read by its text content and the capitals are the sheet's.
        const aboutOk = subject === undefined
            ? !byline.includes('About ')
            : byline.includes(`About ${subject}`) && found.some(l => l.text === subject && l.href.endsWith(`/${book}/`));
        const ok = (status === 200 || status === 304) && open !== null && author !== undefined && filed !== undefined && aboutOk;
        if (!ok) failures++;
        console.log(`${ok ? 'ok ' : 'BAD'} ${status} ${book.padEnd(24)} opens "${open}" ${subject === undefined ? 'no about' : `about ${subject}->itself`} filed->${filed?.href ?? '-'}`);
    } catch (error) {
        failures++;
        console.log(`BAD ${book}: ${error.message.split('\n')[0]}`);
    }
}

for (const { book: catalogue, home } of catalogues) {
    console.log(`--- ${catalogue}: cover -> table -> each entry -> the book -> back`);
    const started = Date.now();
    await goto(`${base}${catalogue}/`);
    await page.evaluate(() => [...document.querySelectorAll('.pd-running-head a')].find(a => a.getAttribute('href').includes('#table-of-contents')).click());
    await turnTo('#table-of-contents');
    const rows = await page.evaluate(() => {
        const found = [...document.querySelectorAll('.pa-open a')];
        const out = [];
        for (let i = 0; i < found.length; i++) {
            if (found[i].innerText.trim() === '▷') out.push({ entry: found[i - 1].innerText.trim(), hash: new URL(found[i - 1].href).hash, book: found[i].getAttribute('href') });
        }
        return out;
    });
    console.log(`table turned in ${Date.now() - started} ms; ${rows.length} rows, each an entry and a way in`);
    for (const row of rows) {
        await goto(`${base}${catalogue}/#table-of-contents`);
        await page.evaluate(hash => [...document.querySelectorAll('.pa-open a')].find(a => new URL(a.href).hash === hash).click(), row.hash);
        await turnTo(row.hash);
        const entry = await visible();
        const wayIn = await page.evaluate(book => [...document.querySelectorAll('.pa-open a')].some(a => a.getAttribute('href') === book), row.book);
        const status = await goto(new URL(row.book, base).href);
        const back = await page.evaluate(home => [...document.querySelectorAll('.pd-byline a')].some(a => a.getAttribute('href') === home), home);
        const ok = wayIn && (status === 200 || status === 304) && back;
        if (!ok) failures++;
        console.log(`${ok ? 'ok ' : 'BAD'} ${row.entry.padEnd(36)} entry "${entry.replace(/^.*?Phenomena /, '').slice(0, 48)}…" way in ${row.book} ${status}, back ${back}`);
    }
}

// THE LIBRARY OF MATHEMATICS IS A BOOK OF CHAPTERS, NOT A CATALOGUE, since Sprint 125: a paper is a chapter carrying
// its citation with the paper itself beside it, a plate at the top left that opens it in another tab and an opening
// for each translation. Walked as a reader would: the cover, the table, the paper's row, the chapter open on its
// citation, the plate's picture fetched as a picture, and each opening's document fetched at its address as a PDF.
const chaptered = [
    { book: 'mathematical-library', chapter: '#gödel-1931', words: ['Monatshefte für Mathematik und Physik 38 (1931), 173–198', 'B. Meltzer', 'M. Hirzel'], documents: 2 },
];
for (const { book, chapter, words, documents } of chaptered) {
    console.log(`--- ${book}: the front's title -> table -> the chapter -> its documents`);
    const started = Date.now();
    await goto(`${base}${book}/`);
    // THE FRONT OPENS THE BOOK, since Sprint 125: the cover drawn as a book with its words as links, the title to the
    // table, the author and the subject to their books; the title is pressed, and the three are required.
    const front = await page.evaluate(() => {
        const links = [...document.querySelectorAll('.pd-front a')].map(a => ({ href: a.getAttribute('href') ?? '', words: a.textContent.trim() }));
        const title = links.find(l => l.href.endsWith('#table-of-contents'));
        if (title) [...document.querySelectorAll('.pd-front a')].find(a => a.getAttribute('href') === title.href).click();
        return { title: title?.words ?? null, author: links.find(l => l.href.endsWith('/our-team/'))?.words ?? null, subject: links.find(l => /\/our-math\/$|\/our-library\/$/.test(l.href))?.words ?? null };
    });
    if (front.title === null || front.author === null || front.subject === null) { failures++; console.log(`BAD ${book} front: title ${front.title}, author ${front.author}, subject ${front.subject}`); continue; }
    await turnTo('#table-of-contents');
    // THE HASH IS SPELLED AS THE PAGE SPELLS IT, percent-encoded where the slug keeps an umlaut, so the row's own
    // link says what to wait for and the chapter's name is compared decoded.
    const row = await page.evaluate(hash => { const a = [...document.querySelectorAll('.pa-open a')].find(a => decodeURIComponent(new URL(a.href).hash) === hash); if (a) a.click(); return a ? { words: a.innerText.trim(), hash: new URL(a.href).hash } : null; }, chapter);
    if (row !== null) await turnTo(row.hash);
    const text = await visible();
    const said = words.every(word => text.includes(word));
    const shown = await page.evaluate(async () => {
        const addresses = [...new Set([...document.querySelectorAll('.pa-open a.pa-opening')].map(a => a.getAttribute('href')))];
        const answers = [];
        for (const address of addresses) {
            const response = await fetch(address);
            answers.push({ address: address.split('/').pop(), status: response.status, type: response.headers.get('content-type') });
        }
        const plate = document.querySelector('.pa-open .pd-plate img');
        const picture = plate === null ? null : await fetch(plate.getAttribute('src')).then(response => ({ status: response.status, type: response.headers.get('content-type') }));
        const opens = plate === null ? false : plate.closest('a')?.getAttribute('target') === '_blank';
        return { answers, picture, opens };
    });
    const ok = row !== null && said && shown.answers.length === documents && shown.answers.every(one => one.status === 200 && one.type === 'application/pdf')
        && shown.picture?.status === 200 && shown.picture.type === 'image/png' && shown.opens;
    if (!ok) failures++;
    console.log(`${ok ? 'ok ' : 'BAD'} ${book} row "${row?.words ?? 'MISSING'}" opened in ${Date.now() - started} ms; the citation ${said ? 'on the page' : 'MISSING'}; the plate ${shown.picture?.status ?? 'MISSING'} ${shown.picture?.type ?? ''}${shown.opens ? ', opening in a new tab' : ', NOT opening in a new tab'}; ${shown.answers.map(one => `${one.address} ${one.status} ${one.type}`).join(', ')}`);
}

await browser.close();
console.log(`--- failures: ${failures}`);
process.exit(failures === 0 ? 0 : 1);
