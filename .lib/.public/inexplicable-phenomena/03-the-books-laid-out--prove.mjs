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
const links = () => page.evaluate(() => [...document.querySelectorAll('a[href]')].map(a => ({ text: a.innerText.replace(/\s+/g, ' ').trim(), href: a.getAttribute('href') })));
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
        const open = await page.evaluate(() => document.querySelector('.pa-open .pd-title')?.innerText.replace(/\s+/g, ' ').trim() ?? null);
        const found = await links();
        const byline = await page.evaluate(() => document.querySelector('.pd-byline')?.innerText.replace(/\s+/g, ' ').trim() ?? '');
        const author = found.find(l => l.href.endsWith('/our-team/') && l.text === 'Doug');
        const filed = found.find(l => subjects.includes(l.text));
        const subject = about[book];
        const aboutOk = subject === undefined
            ? !byline.includes('ABOUT')
            : byline.includes(`ABOUT ${subject}`) && found.some(l => l.text === subject && l.href.endsWith(`/${book}/`));
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

await browser.close();
console.log(`--- failures: ${failures}`);
process.exit(failures === 0 ? 0 : 1);
