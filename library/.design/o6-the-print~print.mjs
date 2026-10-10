// Makes a design page from a book's print, so a design is drawn on the book's own words. Run from the repository:
//
//     node .me/.design/o6-the-print~print.mjs dougs-library .me/.design/6-the-story~035.html
//
// The first argument is the book's folder in the last bind, .me/..public/<book>/; the second is the page to write,
// beside the chapter that designs it. The page holds what the print holds — the bar, me, the table of contents, the front
// and every page, hidden — with the framework's class names kept and the styled components' hashes dropped, so every
// rule the page needs can be written against the names the live book wears. A page that already exists keeps its
// <style> and its <script>: only the print between them is refreshed. Bind first; the print is read, never the source.
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { basename, dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const [book, page] = process.argv.slice(2);
if (!book || !page) { console.log('usage: node o6-the-print~print.mjs <book folder> <page to write>'); process.exit(1); }
const library = dirname(dirname(fileURLToPath(import.meta.url)));
const print = join(library, '..public', book, 'index.html');
if (!existsSync(print)) { console.log(`no print at ${print} — bind first`); process.exit(1); }
const html = readFileSync(print, 'utf8');

const start = html.indexOf('<div id="root">');
const root = html.slice(start, html.indexOf('<script', start));
// the framework's names stay; a styled component's hash goes
const clean = (markup) => markup
    .replace(/ class="([^"]*)"/gu, (m, c) => { const kept = c.split(' ').filter(x => /^p[ad]-/u.test(x)); return kept.length ? ` class="${kept.join(' ')}"` : ''; })
    .replace(/<!--\$-->|<!--\/\$-->/gu, '');
// one element, balanced, from its opening tag
const balanced = (at) => {
    let depth = 0;
    const tag = /<\/?div\b[^>]*>/gu; tag.lastIndex = at;
    for (let m; (m = tag.exec(root));) { depth += m[0].startsWith('</') ? -1 : 1; if (depth === 0) return root.slice(at, m.index + m[0].length); }
    return '';
};
const region = (cls) => { const at = root.indexOf(`<div class="${cls}">`); return at < 0 ? '' : clean(balanced(at)); };
const pages = [];
for (let at = root.indexOf('<div class="pd-page'); at >= 0; at = root.indexOf('<div class="pd-page', at + 1)) {
    const page = balanced(at);
    if (page.startsWith('<div class="pd-page pd-front')) continue;
    const id = page.match(/<div id="([^"]+)" class="pd-sentence pd-title/u)?.[1] ?? `page-${pages.length + 1}`;
    pages.push(clean(page).replace(/^<div class="pd-page[^"]*"/u, `<div class="pd-page" data-chapter="${id}" hidden`));
}
const regions = {
    library: region('pd-library'),
    me: region('pd-me'),
    holds: region('pd-holds'),
    front: region('pd-page pd-front pd-open'),
};
const printed = `${regions.library}\n${regions.me}\n${regions.holds}\n<div class="pd-pages">\n<section class="pd-catalogue-desk"></section>\n${regions.front}\n${pages.join('\n')}\n</div>`;

const name = basename(page).replace(/~\d+\.html$/u, '').replace(/^\d+-/u, '').split('-').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
const number = basename(page).match(/~(\d+)\.html$/u)?.[1] ?? '';
let style = `<style>\n    /* the page's own style, written against the print's names */\n</style>`;
let script = '';
let head = `<title>${name}</title>\n<meta name="number" content="${number}">\n<meta name="state" content="design">\n<meta name="after" content="">\n<meta name="idea" content="">\n<meta name="said" content="">`;
if (existsSync(page)) {
    const existing = readFileSync(page, 'utf8');
    style = existing.match(/<style>[\s\S]*?<\/style>/u)?.[0] ?? style;
    script = existing.match(/<script>[\s\S]*?<\/script>/u)?.[0] ?? '';
    head = existing.match(/<title>[\s\S]*?<meta name="said"[^>]*>/u)?.[0] ?? head;
}
const fonts = `<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,600;0,8..60,700;1,8..60,400&display=swap" rel="stylesheet">`;
const written = `<!doctype html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1">\n${head}\n${fonts}\n${style}\n</head>\n<body>\n<!-- the print of ${book}, as bound; refreshed by o6-the-print~print.mjs -->\n${printed}\n${script}\n</body>\n</html>\n`;
writeFileSync(page, written);
console.log(`${page}: the print of ${book} — ${Object.values(regions).filter(Boolean).length} regions, ${pages.length} pages hidden${script ? ', the page\'s style and script kept' : ''}`);
