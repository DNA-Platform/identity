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
// ONE ROW A CHAPTER, since Sprint 126: a held publication shows a plate and one file; one cited by address shows no
// plate and no file, and only its citation's words are required.
const chaptered = [
    { book: 'mathematical-library', chapter: '#beltrami-1868', words: ['Giornale di Matematiche 6 (1868), 284–312'], plate: true, documents: 1 },
    { book: 'mathematical-library', chapter: '#chen-1973', words: ['Scientia Sinica 16 (1973), 157–176'], plate: false, documents: 0 },
    { book: 'mathematical-library', chapter: '#dedekind-1872', words: ['Braunschweig: Vieweg, 1872', 'Beman'], plate: true, documents: 1 },
    { book: 'mathematical-library', chapter: '#feferman-1960', words: ['Fundamenta Mathematicae 49 (1960), 35–92'], plate: true, documents: 1 },
    { book: 'mathematical-library', chapter: '#gauss-1799', words: ['Helmstedt: Fleckeisen, 1799'], plate: true, documents: 1 },
    { book: 'mathematical-library', chapter: '#gödel-1931', words: ['Monatshefte für Mathematik und Physik 38 (1931), 173–198', 'Meltzer'], plate: true, documents: 1 },
    { book: 'mathematical-library', chapter: '#hardy-and-littlewood-1923', words: ['Acta Mathematica 44 (1923), 1–70'], plate: true, documents: 1 },
    { book: 'mathematical-library', chapter: '#hilbert-1899', words: ['Leipzig: Teubner, 1899', 'Townsend'], plate: true, documents: 1 },
    { book: 'mathematical-library', chapter: '#hilbert-1901', words: ['Transactions of the American Mathematical Society 2 (1901), 87–99'], plate: true, documents: 1 },
    { book: 'mathematical-library', chapter: '#kripke-1975', words: ['The Journal of Philosophy 72 (1975), 690–716'], plate: false, documents: 0 },
    { book: 'mathematical-library', chapter: '#löb-1955', words: ['The Journal of Symbolic Logic 20 (1955), 115–118'], plate: false, documents: 0 },
    { book: 'mathematical-library', chapter: '#lobachevsky-1840', words: ['Berlin: Fincke, 1840', 'Halsted'], plate: true, documents: 1 },
    { book: 'mathematical-library', chapter: '#rosser-1936', words: ['The Journal of Symbolic Logic 1 (1936), 87–91'], plate: false, documents: 0 },
    { book: 'mathematical-library', chapter: '#turing-1936', words: ['42 (1937), 230–265'], plate: false, documents: 0 },
    { book: 'mathematical-library', chapter: '#turing-1939', words: ['45 (1939), 161–228'], plate: false, documents: 0 },
];
for (const { book, chapter, words, plate, documents } of chaptered) {
    console.log(`--- ${book}: the front's title -> table -> ${chapter} -> its documents`);
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
        // AN OPENING OUT OF THE SITE IS COUNTED AND NOT ASKED: a copy a reader can read stands at another keeper's address,
        // and a fetch from the page to another origin answers nothing a script may read. Only the site's own files are asked.
        const hrefs = [...new Set([...document.querySelectorAll('.pa-open a.pa-opening')].map(a => a.getAttribute('href')))];
        const addresses = hrefs.filter(href => !/^https?:/.test(href));
        const out = hrefs.length - addresses.length;
        const answers = [];
        for (const address of addresses) {
            const response = await fetch(address);
            answers.push({ address: address.split('/').pop(), status: response.status, type: response.headers.get('content-type') });
        }
        const plate = document.querySelector('.pa-open .pd-plate img');
        const picture = plate === null ? null : await fetch(plate.getAttribute('src')).then(response => ({ status: response.status, type: response.headers.get('content-type') }));
        const opens = plate === null ? false : plate.closest('a')?.getAttribute('target') === '_blank';
        return { answers, picture, opens, out };
    });
    const plated = plate ? shown.picture?.status === 200 && shown.picture.type === 'image/png' && shown.opens : shown.picture === null;
    const ok = row !== null && said && shown.answers.length === documents && shown.answers.every(one => one.status === 200 && one.type === 'application/pdf') && plated;
    if (!ok) failures++;
    console.log(`${ok ? 'ok ' : 'BAD'} ${chapter}${shown.out ? ` (${shown.out} opening out)` : ''} row "${row?.words ?? 'MISSING'}" opened in ${Date.now() - started} ms; the citation ${said ? 'on the page' : 'MISSING'}; ${plate ? `the plate ${shown.picture?.status ?? 'MISSING'} ${shown.picture?.type ?? ''}${shown.opens ? ', opening in a new tab' : ', NOT opening in a new tab'}` : `no plate${shown.picture === null ? '' : ', yet a plate stands'}`}; ${shown.answers.map(one => `${one.address} ${one.status} ${one.type}`).join(', ') || 'by address'}`);
}

await browser.close();
console.log(`--- failures: ${failures}`);
process.exit(failures === 0 ? 0 : 1);
