// Measure the running head, the table's headings and rows, and the tree's tiers on a bound page.
//   node measure-toc.mjs <route> [pressEditor]
import { createRequire } from 'node:module';

const puppeteer = createRequire('c:/Source/dna-platform/inexplicable-phenomena/library/.public/.binding/package.json')('puppeteer');
const [route, pressEditor] = process.argv.slice(2);
const browser = await puppeteer.launch({ headless: true, defaultViewport: { width: 1280, height: 800 } });
const page = await browser.newPage();
await page.goto(`http://localhost:4343/inexplicable-phenomena/${route}`, { waitUntil: 'load', timeout: 60000 });
await page.waitForSelector('.pa-page.pa-open', { timeout: 20000 }).catch(() => undefined);
await new Promise(resolve => setTimeout(resolve, 1000));
await page.waitForFunction(() => [...document.querySelectorAll('.pa-table-of-contents .pd-paragraph.pa-reference, .pa-page.pa-open .pd-title')].some(el => el.getClientRects().length > 0), { timeout: 20000 }).catch(() => undefined);
if (pressEditor) {
    await page.evaluate(() => [...document.querySelectorAll('.pd-modes button')].find(b => b.textContent.trim() === 'the editor' && b.getClientRects().length > 0)?.click());
    await new Promise(resolve => setTimeout(resolve, 800));
}
const read = (label, selector) => page.evaluate((label, selector) => {
    const one = [...document.querySelectorAll(selector)].find(el => el.getClientRects().length > 0);
    if (one === undefined) return `${label}: nothing visible for ${selector}`;
    const s = getComputedStyle(one);
    return `${label}: "${one.textContent.trim().slice(0, 28)}" font=${s.fontFamily.split(',')[0]} size=${s.fontSize} weight=${s.fontWeight} color=${s.color} transform=${s.textTransform} spacing=${s.letterSpacing} underline=${s.textDecorationLine} opacity=${s.opacity}`;
}, label, selector);
console.log(await read('running head anchor', '.pd-running-head a'));
console.log(await read('running head word', '.pd-running-head .pd-word'));
console.log(await read('table heading', '.pa-table-of-contents .pd-heading'));
console.log(await read('table row anchor', '.pa-table-of-contents .pd-paragraph.pa-reference'));
console.log(await read('table row container', '.pa-table-of-contents .pd-container.pa-reference'));
console.log(await read('table row word', '.pa-table-of-contents .pd-paragraph .pa-content'));
console.log(await read('leaf', '.pd-leaf'));
console.log(await read('chapter title', '.pa-page.pa-open .pd-title'));
console.log(await read('chapter heading', '.pa-page.pa-open .pd-heading'));
console.log(await read('body link', '.pa-page.pa-open .pd-paragraph a.pa-reference'));
console.log(await read('tree open row', '.pa-table-of-contents .pd-paragraph.pa-open'));
await browser.close();
