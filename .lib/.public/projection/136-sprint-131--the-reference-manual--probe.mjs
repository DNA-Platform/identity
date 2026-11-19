// The sprint's proof on the bound site: the listing's numbers, the two modes, the tree, the appendix and the run.
//   node probe-manual.mjs [site]      site defaults to the bound site on 4343
import { createRequire } from 'node:module';

const puppeteer = createRequire('c:/Source/dna-platform/inexplicable-phenomena/library/.public/.binding/package.json')('puppeteer');
const site = process.argv[2] ?? 'http://localhost:4343/inexplicable-phenomena/';
const out = `${process.env.TEMP ?? '/tmp'}/sprint-131-proof`;
const { mkdirSync } = await import('node:fs');
mkdirSync(out, { recursive: true });

const browser = await puppeteer.launch({ headless: true, defaultViewport: { width: 1434, height: 780 } });
const page = await browser.newPage();
const failures = [];
const check = (name, ok, saw) => { console.log(`${ok ? 'ok  ' : 'FAIL'} ${name}${saw === undefined ? '' : ` — saw ${JSON.stringify(saw)}`}`); if (!ok) failures.push(name); };
const settle = (ms = 700) => new Promise(resolve => setTimeout(resolve, ms));
const open = async (route, width = 1434, height = 780) => {
    await page.setViewport({ width, height });
    await page.goto(`${site}${route}`, { waitUntil: 'load', timeout: 60000 });
    await page.waitForSelector('.pd-book', { timeout: 20000 });
    const wanted = route.split('#')[1] ?? '';
    await page.waitForFunction(id => {
        const open = document.querySelector('.pa-page.pa-open');
        if (open === null) return false;
        if (id === '') return true;
        if (id === 'table-of-contents') return open.classList.contains('pa-table-of-contents');
        return open.querySelector('.pd-title')?.id === id;
    }, { timeout: 20000 }, wanted).catch(() => undefined);
    await settle(900);
};
const press = async (selector) => {
    await page.evaluate(sel => [...document.querySelectorAll(sel)].find(one => one.getClientRects().length > 0)?.click(), selector);
    await settle();
};
const shoot = name => page.screenshot({ path: `${out}/${name}.png` });

// The manual opens in the editor.
await open('our-reference/#the-book');
const editing = await page.evaluate(() => ({
    classes: document.querySelector('.pd-book')?.className,
    display: getComputedStyle(document.querySelector('.pd-book')).display,
    rows: document.querySelectorAll('.pa-table-of-contents .pd-paragraph:has(> .pa-reference, > .pd-container)').length,
    leaves: document.querySelectorAll('.pa-table-of-contents .pd-leaf').length,
    openRow: document.querySelector('.pa-table-of-contents .pd-paragraph.pa-open')?.textContent.trim(),
    head: [...document.querySelectorAll('.pd-file-head span')].map(span => span.textContent.trim()).join(' '),
    bar: [...document.querySelectorAll('.pd-file-page .pd-listing-bar button')].map(b => `${b.textContent.trim()}${b.getAttribute('aria-pressed') === 'true' ? '*' : ''}`),
    table: document.querySelector('.pd-container:has(> .pa-table-of-contents)')?.getBoundingClientRect().width,
    file: document.querySelector('.pd-file-page')?.getBoundingClientRect().width,
    scroll: [document.documentElement.scrollWidth, document.documentElement.clientWidth],
}));
check('the manual opens editing', /pa-editing/.test(editing.classes ?? '') && editing.display === 'contents', editing.classes);
check('the table is the tree with a leaf under each chapter that has a file', editing.leaves >= 8 && editing.openRow === 'The Book', { leaves: editing.leaves, openRow: editing.openRow });
check('the file\'s page names the file', editing.head === 'The file beside the chapter code.tsx', editing.head);
check('the bar reads as drawn, the editor pressed', editing.bar.join(' ') === '‹›code.tsx* light wrap lines* words* the page the editor*', editing.bar);
check('the columns stand, the window not overflowed', editing.table > 200 && editing.file > 400 && editing.scroll[0] === editing.scroll[1], { table: editing.table, file: editing.file, scroll: editing.scroll });
await shoot('editor-desk');

// The listing's numbers are his.
const listing = await page.evaluate(() => {
    const code = document.querySelector('.pd-file-page .pd-listing .pd-code');
    const line = document.querySelector('.pd-file-page .pd-code-line');
    const keyword = document.querySelector('.pd-file-page .pd-listing .hljs-keyword');
    const string = document.querySelector('.pd-file-page .pd-listing .hljs-string');
    const comment = document.querySelector('.pd-file-page .pd-listing .hljs-comment');
    const number = getComputedStyle(line, '::before');
    const style = getComputedStyle(code);
    return {
        font: style.fontFamily, size: style.fontSize, leading: style.lineHeight, ink: style.color,
        ground: getComputedStyle(document.querySelector('.pd-file-page .pd-listing')).backgroundColor,
        keyword: keyword && getComputedStyle(keyword).color, string: string && getComputedStyle(string).color, comment: comment && getComputedStyle(comment).color,
        numberWidth: number.width, numberContent: number.content, first: line?.textContent.trim().slice(0, 40),
        pageFont: document.fonts.check('12px "JetBrains Mono"'),
    };
});
check('JetBrains Mono at 12 on 20.4, the ink pale', /JetBrains Mono/.test(listing.font) && listing.size === '12px' && listing.leading === '20.4px' && listing.ink === 'rgb(214, 225, 227)', listing);
check('the night and the four colours', listing.ground === 'oklch(0.294 0.028 222.6)' && listing.keyword === 'rgb(138, 215, 255)' && listing.string === 'rgb(255, 212, 138)' && listing.comment === 'rgb(95, 138, 134)', { ground: listing.ground, keyword: listing.keyword, string: listing.string, comment: listing.comment });
check('the numbers in a 44px column, the first line numbered 1', listing.numberWidth === '44px' && listing.numberContent === '"1"', { width: listing.numberWidth, content: listing.numberContent });
check('the face is loaded from Google Fonts', listing.pageFont === true, listing.pageFont);

// The options.
await press('.pd-file-page .pd-options button:nth-child(1)');
const light = await page.evaluate(() => ({ ground: getComputedStyle(document.querySelector('.pd-file-page .pd-listing')).backgroundColor, ink: getComputedStyle(document.querySelector('.pd-file-page .pd-listing .pd-code')).color }));
check('light turns the ground paper and the ink dark', light.ground === 'rgb(246, 247, 244)' && light.ink === 'rgb(43, 54, 60)', light);
await shoot('editor-light-desk');
await press('.pd-file-page .pd-options button:nth-child(1)');
await press('.pd-file-page .pd-options button:nth-child(2)');
const wrap = await page.evaluate(() => getComputedStyle(document.querySelector('.pd-file-page .pd-code-line')).whiteSpace);
check('wrap sets the lines to pre-wrap', wrap === 'pre-wrap', wrap);
await press('.pd-file-page .pd-options button:nth-child(2)');
await press('.pd-file-page .pd-options button:nth-child(3)');
const lines = await page.evaluate(() => getComputedStyle(document.querySelector('.pd-file-page .pd-code-line'), '::before').width);
check('lines empties the number column', lines === '14px', lines);
await press('.pd-file-page .pd-options button:nth-child(3)');

// The words put away.
await press('.pd-file-page .pd-modes button:nth-child(1)');
const away = await page.evaluate(() => ({ classes: document.querySelector('.pd-book')?.className, chapter: document.querySelector('.pa-page.pa-open')?.getClientRects().length ?? 0, file: document.querySelector('.pd-file-page')?.getBoundingClientRect().width }));
check('words puts the words away and widens the file\'s page', /pa-words-away/.test(away.classes ?? '') && away.chapter === 0 && away.file > 900, { chapter: away.chapter, file: away.file });
await shoot('editor-words-away-desk');
await press('.pd-file-page .pd-modes button:nth-child(1)');

// The page.
await press('.pd-file-page .pd-modes button:nth-child(2)');
const paged = await page.evaluate(() => ({
    classes: document.querySelector('.pd-book')?.className,
    display: getComputedStyle(document.querySelector('.pd-book')).display,
    file: document.querySelector('.pd-file-page')?.getClientRects().length ?? 0,
    plate: document.querySelector('.pa-page.pa-open > .pd-listing')?.getBoundingClientRect().width,
    pressed: [...document.querySelectorAll('.pa-page.pa-open .pd-modes button[aria-pressed="true"]')].map(b => b.textContent.trim()),
}));
check('"the page" returns the bound chapter with the listing as its plate', /pa-page-mode/.test(paged.classes ?? '') && !/pa-editing/.test(paged.classes ?? '') && paged.display !== 'contents' && paged.file === 0 && paged.plate > 500 && paged.pressed.includes('the page'), { file: paged.file, plate: paged.plate, pressed: paged.pressed });
await shoot('page-desk');
await press('.pa-page.pa-open .pd-modes button:nth-child(3)');
const back = await page.evaluate(() => document.querySelector('.pd-book')?.className);
check('"the editor" returns to the editor', /pa-editing/.test(back ?? ''), back);

// A leaf pressed in the tree.
await press('.pa-table-of-contents .pd-leaf[href$="the-paper"]');
await settle(900);
const leafed = await page.evaluate(() => ({
    title: document.querySelector('.pa-page.pa-open .pd-title')?.textContent.trim(),
    head: document.querySelector('.pd-file-head .pd-file-name')?.textContent.trim(),
    tabs: [...document.querySelectorAll('.pd-file-page .pd-file-tab')].map(b => `${b.textContent.trim()}${b.getAttribute('aria-pressed') === 'true' ? '*' : ''}`),
    openLeaf: document.querySelector('.pa-table-of-contents .pd-leaf.pa-open')?.textContent.trim(),
}));
check('a leaf opens its chapter in the editor turned to its file, two tabs for The Paper', leafed.title === 'The Paper' && leafed.head === 'code.tsx' && leafed.tabs.join(' ') === '‹›code.tsx* ‹›preview.mjs' && leafed.openLeaf === 'code.tsx', leafed);
await press('.pa-table-of-contents .pd-leaf[href$="the-paper"]:not(.pa-open)');
const second = await page.evaluate(() => ({ head: document.querySelector('.pd-file-head .pd-file-name')?.textContent.trim(), tabs: [...document.querySelectorAll('.pd-file-page .pd-file-tab')].map(b => `${b.textContent.trim()}${b.getAttribute('aria-pressed') === 'true' ? '*' : ''}`) }));
check('the second leaf turns the page to the second file', second.head === 'preview.mjs' && second.tabs.join(' ') === '‹›code.tsx ‹›preview.mjs*', second);
await shoot('two-files-desk');

// The voice, 19 November: headings in slate, the running head grey, the rows in ink, the files a parenthesis.
const voice = await page.evaluate(() => ({
    heading: getComputedStyle(document.querySelector('.pa-page.pa-open .pd-heading')).color,
    tableHeading: getComputedStyle(document.querySelector('.pa-table-of-contents .pd-heading')).color,
    tableHeadingSize: getComputedStyle(document.querySelector('.pa-table-of-contents .pd-heading')).fontSize,
    runningHead: getComputedStyle(document.querySelector('.pd-running-head .pa-reference')).color,
    row: getComputedStyle(document.querySelector('.pa-table-of-contents .pd-paragraph .pa-content')).color,
    parenthesis: document.querySelector('.pa-table-of-contents .pd-files')?.textContent.replace(/\s+/g, ' ').trim(),
    square: getComputedStyle(document.querySelector('.pd-files .pd-square')).fontFamily.split(',')[0],
}));
check('the headings wear the slate, the table\'s at the text\'s size', voice.heading === 'rgb(59, 74, 85)' && voice.tableHeading === 'rgb(59, 74, 85)' && voice.tableHeadingSize === '14.62px', voice);
check('the running head is grey and the rows are ink', voice.runningHead === 'color(srgb 0.374118 0.374118 0.374118)' && voice.row === 'rgb(27, 27, 27)', { runningHead: voice.runningHead, row: voice.row });
check('the files are a parenthesis with the square before each', voice.parenthesis === '(☐code.tsx)' && voice.square === 'Georgia', { parenthesis: voice.parenthesis, square: voice.square });

// The square opens the page at the file.
await press('.pa-table-of-contents .pd-square[href$="the-theme"]');
await settle(900);
const squared = await page.evaluate(() => ({
    title: document.querySelector('.pa-page.pa-open .pd-title')?.textContent.trim(),
    classes: document.querySelector('.pd-book')?.className,
    plate: document.querySelector('.pa-page.pa-open > .pd-listing')?.getClientRects().length ?? 0,
}));
check('the square opens the chapter on the page with the listing as its plate', squared.title === 'The Theme' && /pa-page-mode/.test(squared.classes ?? '') && !/pa-editing/.test(squared.classes ?? '') && squared.plate > 0, squared);
await shoot('square-page-desk');
await press('.pa-page.pa-open .pd-modes button:nth-child(3)');

// The run.
await open('our-reference/#the-specification');
const offered = await page.evaluate(() => [...document.querySelectorAll('.pd-file-page .pd-run-switch')].map(b => b.textContent.trim()));
check('an HTML append offers run', offered.join(' ') === 'run', offered);
await press('.pd-file-page .pd-run-switch');
await page.waitForSelector('.pd-file-page .pd-run', { timeout: 4000 }).catch(async () => { await press('.pd-file-page .pd-run-switch'); await page.waitForSelector('.pd-file-page .pd-run', { timeout: 4000 }).catch(() => undefined); });
await settle(1200);
const frame = page.frames().find(one => one.parentFrame() !== null);
const ran = frame === undefined ? undefined : await frame.evaluate(() => ({ title: document.title, bar: document.querySelector('.bar, .tree-bar, header')?.textContent.replace(/\s+/g, ' ').trim().slice(0, 60), headings: document.querySelectorAll('h2').length }));
const box = await page.evaluate(() => document.querySelector('.pd-file-page .pd-run')?.getBoundingClientRect().height);
check('run stands the page itself in the file\'s page, the window\'s height', ran?.title === 'The Specification' && box > 500, { ran, box });
await shoot('run-desk');
await press('.pd-file-page .pd-run-switch');
await page.waitForSelector('.pd-file-page .pd-run', { hidden: true, timeout: 4000 }).catch(() => undefined);
const unrun = await page.evaluate(() => document.querySelectorAll('.pd-file-page .pd-run').length);
check('run again returns the listing', unrun === 0, unrun);

// Every chapter of the manual is numbered and shows a listing.
const numbered = [];
for (const route of ['the-book', 'the-theme', 'the-running-head-and-the-byline', 'the-faces', 'developing-the-library', 'the-paper', 'the-reference-manual', 'the-specification', 'the-content']) {
    await open(`our-reference/#${route}`);
    numbered.push(await page.evaluate(() => ({
        headings: [...document.querySelectorAll('.pa-page.pa-open .pd-heading')].map(h => h.textContent.trim()),
        listing: document.querySelectorAll('.pa-page.pa-open > .pd-listing').length,
    })));
}
check('nine chapters, every heading numbered, a listing in each', numbered.every(one => one.headings.length > 0 && one.headings.every(h => /^\d+\. /.test(h)) && one.listing === 1), numbered.map(one => `${one.headings.length}h/${one.listing}l`));
const headings = numbered.flatMap(one => one.headings);
check('no heading repeats across the manual', new Set(headings).size === headings.length, headings.length);

// The appendix of The Design.
await open('the-design/#table-of-contents');
const foot = await page.evaluate(() => {
    const appendix = document.querySelector('.pa-table-of-contents .pa-appendix');
    const contents = document.querySelector('.pa-table-of-contents .pd-section:not(.pa-appendix)');
    return {
        heading: appendix?.querySelector('.pd-heading')?.textContent.trim(),
        rows: appendix?.querySelectorAll('.pd-paragraph').length,
        leaves: [...appendix?.querySelectorAll('.pd-leaf') ?? []].map(a => a.textContent.trim()),
        size: appendix && getComputedStyle(appendix).fontSize,
        below: appendix && contents && appendix.getBoundingClientRect().top > contents.getBoundingClientRect().bottom,
        mode: document.querySelector('.pd-book')?.className,
    };
});
check('The Design opens on the page, its table ending in the appendix in the table\'s own voice', /pa-page-mode/.test(foot.mode ?? '') && foot.heading === 'Appendix' && foot.rows === 1 && foot.leaves.join(' ') === 'snapshot.mjs assemble.mjs shoot.mjs' && foot.size === '17px' && foot.below === true, foot);
await shoot('appendix-foot-desk');
await press('.pa-appendix .pd-leaf[href$="the-sketchs-tools"]');
await settle(900);
const appendixed = await page.evaluate(() => ({
    title: document.querySelector('.pa-page.pa-open .pd-title')?.textContent.trim(),
    classes: document.querySelector('.pd-book')?.className,
    tabs: [...document.querySelectorAll('.pd-file-page .pd-file-tab')].map(b => b.textContent.trim()),
    tree: [...document.querySelectorAll('.pa-table-of-contents .pd-heading')].map(h => h.textContent.trim()),
    openRow: document.querySelector('.pa-table-of-contents .pd-paragraph.pa-open')?.textContent.trim(),
}));
check('a press on an appendix file opens its chapter in the editor with the three tools as tabs', appendixed.title === "The Sketch's Tools" && /pa-editing/.test(appendixed.classes ?? '') && appendixed.tabs.join(' ') === '‹›snapshot.mjs ‹›assemble.mjs ‹›shoot.mjs' && appendixed.tree.join(' | ') === 'Contents | Appendix' && appendixed.openRow === "The Sketch's Tools", appendixed);
await shoot('appendix-editor-desk');

// A design sketch runs under its chapter.
await open('the-design/#the-manuals-page');
await press('.pa-page.pa-open .pd-modes button:nth-child(3)');
const sketches = await page.evaluate(() => [...document.querySelectorAll('.pd-file-page .pd-file-tab')].map(b => b.textContent.trim()));
check('The Manual\'s Page lists its three sketches as tabs', sketches.join(' ') === '‹›listing.html ‹›opening.html ‹›editor.html', sketches);
await press('.pd-file-page .pd-run-switch');
await page.waitForSelector('.pd-file-page .pd-run', { timeout: 4000 }).catch(async () => { await press('.pd-file-page .pd-run-switch'); await page.waitForSelector('.pd-file-page .pd-run', { timeout: 4000 }).catch(() => undefined); });
await settle(1500);
const sketchFrame = page.frames().find(one => one.parentFrame() !== null);
const sketchRan = sketchFrame === undefined ? undefined : await sketchFrame.evaluate(() => ({ form: document.body.dataset.form, editors: document.querySelectorAll('.sk-editor').length }));
check('the sketch runs in the file\'s page', sketchRan !== undefined && sketchRan.editors > 0, sketchRan);
await shoot('sketch-run-desk');

// The phone.
await open('our-reference/#the-book', 390, 844);
const phone = await page.evaluate(() => ({
    scroll: [document.documentElement.scrollWidth, document.documentElement.clientWidth],
    tree: document.querySelector('.pd-container:has(> .pa-table-of-contents)')?.getClientRects().length ?? 0,
    chapterTop: document.querySelector('.pa-page.pa-open')?.getBoundingClientRect().top,
    fileTop: document.querySelector('.pd-file-page')?.getBoundingClientRect().top,
}));
check('the phone stacks the chapter then the file\'s page, the tree away, nothing past the edge', phone.scroll[0] === phone.scroll[1] && phone.tree === 0 && phone.fileTop > phone.chapterTop, phone);
await shoot('editor-phone');

await browser.close();
console.log(`${failures.length} failures`);
process.exit(failures.length === 0 ? 0 : 1);
