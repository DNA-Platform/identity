// Makes a design page from a book's print, so a design is drawn on the book's own words. Run from the repository:
//
//     node .me/.design/o6-the-print~print.mjs dougs-library .me/.design/6-the-story~035.html
//
// The first argument is the book's folder in the last bind, .me/..public/<book>/; the second is the page to write,
// beside the chapter that designs it. The page holds what the print holds — the five regions the base book draws, the
// library's bar, me, the table of contents, the head and the pages, each page the chapter itself, the open one shown
// and the rest hidden — with the framework's class names kept and the styled components' hashes dropped, so every
// rule the page needs can be written against the names the live book wears; a picture's address is made relative to
// the page, so the page shows it from the file. A page that already exists keeps its <style> and its <script>: only
// the print between them is refreshed. Bind first; the print is read, never the source.
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { basename, dirname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const [book, page] = process.argv.slice(2);
if (!book || !page) { console.log('usage: node o6-the-print~print.mjs <book folder> <page to write>'); process.exit(1); }
const library = dirname(dirname(fileURLToPath(import.meta.url)));
const print = join(library, '..public', book, 'index.html');
if (!existsSync(print)) { console.log(`no print at ${print} — bind first`); process.exit(1); }
const html = readFileSync(print, 'utf8');

const start = html.indexOf('<div id="root">');
const root = html.slice(start, html.indexOf('<script', start));
// the framework's names stay; a styled component's hash goes; a picture's address is made relative to the page
const clean = (markup) => markup
    .replace(/ class="([^"]*)"/gu, (m, c) => { const kept = c.split(' ').filter(x => /^p[ad]-/u.test(x)); return kept.length ? ` class="${kept.join(' ')}"` : ''; })
    .replace(/ src="\/([^/"]+)\/([^"]*)"/gu, (m, folder, file) => ` src="${relative(dirname(page), join(library, folder)).replace(/\\/gu, '/') || '.'}/${file}"`)
    .replace(/<!--\$-->|<!--\/\$-->/gu, '');
// one element, balanced, from its opening tag
const balanced = (markup, at) => {
    let depth = 0;
    const tag = /<\/?div\b[^>]*>/gu; tag.lastIndex = at;
    for (let m; (m = tag.exec(markup));) { depth += m[0].startsWith('</') ? -1 : 1; if (depth === 0) return markup.slice(at, m.index + m[0].length); }
    return '';
};
const region = (cls) => { const at = root.indexOf(`<div class="${cls}">`); return at < 0 ? '' : balanced(root, at); };
// each page in the pages region is the chapter itself, or a Format's layer around it: what stands at the top keeps its
// classes, names its chapter, and hides unless the chapter is open
let pages = 0;
const paged = (markup) => {
    const inner = markup.slice(markup.indexOf('>') + 1, markup.lastIndexOf('</div>'));
    let out = '';
    for (let from = 0; ;) {
        const at = inner.indexOf('<div', from);
        if (at < 0) { out += clean(inner.slice(from)); break; }
        out += clean(inner.slice(from, at));
        const top = balanced(inner, at);
        const chapterAt = top.search(/<div class="[^"]*\bpd-chapter\b/u);
        if (chapterAt < 0) { out += `\n${clean(top)}`; from = at + top.length; continue; }
        const id = top.match(/<(?:div|span) id="([^"]+)" class="pd-sentence pd-title/u)?.[1] ?? `page-${pages + 1}`;
        const open = /^<div class="[^"]*\bpa-open\b/u.test(top.slice(chapterAt));
        out += `\n${clean(top).replace(/^<div class="([^"]*)"/u, `<div class="$1" data-chapter="${id}"${open ? '' : ' hidden'}`)}`;
        pages += 1;
        from = at + top.length;
    }
    return `<div class="pd-pages">${out}\n</div>`;
};
const regions = {
    library: clean(region('pd-library')),
    me: clean(region('pd-me')),
    holds: clean(region('pd-holds')),
    head: clean(region('pd-head')),
    pages: paged(region('pd-pages')),
};
const printed = Object.values(regions).filter(Boolean).join('\n');

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
console.log(`${page}: the print of ${book} — ${Object.values(regions).filter(Boolean).length} regions, ${pages} pages, the open one shown${script ? ', the page\'s style and script kept' : ''}`);
