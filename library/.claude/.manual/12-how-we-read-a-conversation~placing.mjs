import { readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { basename, join } from 'node:path';

const [target, marksPath] = process.argv.slice(2);
const marks = JSON.parse(readFileSync(marksPath, 'utf8'));
const chapters = statSync(target).isDirectory()
    ? readdirSync(target).filter(file => /^\d+-.+\.tsx$/u.test(file)).sort((a, b) => Number(a.split('-')[0]) - Number(b.split('-')[0])).map(file => join(target, file))
    : [target];

const holding = new Map();
for (const chapter of chapters) for (const match of readFileSync(chapter, 'utf8').matchAll(/at="([^"]+)"/gu)) holding.set(match[1], chapter);

const say = mark => mark.message !== undefined ? `message ${mark.message}` : `the ${mark.sort} at ${mark.at}`;
const escape = words => words.replace(/&/gu, '&amp;').replace(/</gu, '&lt;').replace(/>/gu, '&gt;').replace(/\{/gu, '&#123;').replace(/\}/gu, '&#125;');
const tokens = words => {
    const out = [];
    let held = null;
    for (const part of words.split(/\s+/u).filter(part => part !== '')) {
        if (held !== null) {
            held = `${held} ${part}`;
            if (part.includes(']]')) { out.push(held); held = null; }
        } else if (part.includes('[[') && !part.includes(']]')) held = part;
        else out.push(part);
    }
    if (held !== null) out.push(held);
    return out;
};
const wrap = (words, width) => {
    const out = [];
    let line = '';
    for (const token of tokens(words)) {
        if (line.length > 0 && line.length + 1 + token.length > width) { out.push(line); line = token; }
        else line = line.length === 0 ? token : `${line} ${token}`;
    }
    if (line.length > 0) out.push(line);
    return out;
};
const indentOf = line => /^ */u.exec(line)[0].length;
const block = (sort, words, indent) => [`${' '.repeat(indent)}<${sort}>`, ...wrap(escape(words), 114 - indent - 4).map(line => `${' '.repeat(indent + 4)}${line}`), `${' '.repeat(indent)}</${sort}>`];

const place = (text, own) => {
    const ending = text.includes('\r\n') ? '\r\n' : '\n';
    const lines = text.split(ending);
    const refused = [];
    const placed = {};
    const afterLine = new Map();
    const oneLiners = new Map();
    for (const mark of own) {
        const open = lines.findIndex((line, index) => line.trim() === '<Message' && lines[index + 1]?.trim() === `at="${mark.at}"`);
        const depth = indentOf(lines[open]);
        let close = open + 1;
        while (close < lines.length && !(indentOf(lines[close]) === depth && lines[close].trim() === '</Message>')) close++;
        const speaker = lines.findIndex((line, index) => index > open && index < close && line.trim().startsWith('<Speaker>'));
        if (speaker === -1) { refused.push(`${say(mark)}: no Speaker`); continue; }
        const childDepth = indentOf(lines[speaker]);
        if (mark.paragraph === null || mark.paragraph === undefined) {
            afterLine.set(speaker, [...(afterLine.get(speaker) ?? []), ...block(mark.sort, mark.words, childDepth)]);
        } else {
            const paragraphs = [];
            for (let index = speaker + 1; index < close; index++)
                if (indentOf(lines[index]) === childDepth && lines[index].trim().startsWith('<Paragraph>')) paragraphs.push(index);
            const which = paragraphs[mark.paragraph - 1];
            if (which === undefined) { refused.push(`${say(mark)} paragraph ${mark.paragraph}: the message has ${paragraphs.length} paragraphs of its own`); continue; }
            const line = lines[which].trim();
            if (line === '<Paragraph>') afterLine.set(which, [...(afterLine.get(which) ?? []), ...block(mark.sort, mark.words, childDepth + 4)]);
            else {
                const match = /^<Paragraph>(.*)<\/Paragraph>$/u.exec(line);
                if (match === null) { refused.push(`${say(mark)} paragraph ${mark.paragraph}: neither a one-line paragraph nor an open one`); continue; }
                const held = oneLiners.get(which) ?? { indent: childDepth, text: match[1], blocks: [] };
                held.blocks.push(...block(mark.sort, mark.words, childDepth + 4));
                oneLiners.set(which, held);
            }
        }
        placed[mark.sort] = (placed[mark.sort] ?? 0) + 1;
    }
    const edits = [];
    for (const [at, blocks] of afterLine) edits.push({ at: at + 1, remove: 0, blocks });
    for (const [at, held] of oneLiners) edits.push({ at, remove: 1, blocks: [`${' '.repeat(held.indent)}<Paragraph>`, ...held.blocks, `${' '.repeat(held.indent + 4)}${held.text}`, `${' '.repeat(held.indent)}</Paragraph>`] });
    edits.sort((a, b) => b.at - a.at || b.remove - a.remove);
    for (const edit of edits) lines.splice(edit.at, edit.remove, ...edit.blocks);
    const importAt = lines.findIndex(line => line.startsWith('import {') && line.includes("from '@dna-platform/public'"));
    const names = new Set(/^import \{([^}]*)\} from '@dna-platform\/public';$/u.exec(lines[importAt].trim())[1].split(',').map(name => name.trim()).filter(name => name !== ''));
    for (const sort of Object.keys(placed)) names.add(sort);
    lines[importAt] = `import { ${[...names].sort((a, b) => a.localeCompare(b)).join(', ')} } from '@dna-platform/public';`;
    return { text: lines.join(ending), placed, expanded: oneLiners.size, refused };
};

const own = (text, sorts) => text.slice(text.indexOf('export default'))
    .replace(new RegExp(`<(${sorts.join('|')})>[\\s\\S]*?</\\1>`, 'gu'), ' ').replace(/<[^>]+>/gu, ' ').replace(/\s+/gu, ' ').trim();

const refused = [];
const byChapter = new Map();
for (const mark of marks) {
    const chapter = holding.get(mark.at);
    if (chapter === undefined) { refused.push(`${say(mark)}: no message carries the instant ${mark.at}`); continue; }
    byChapter.set(chapter, [...(byChapter.get(chapter) ?? []), mark]);
}
const results = [];
for (const [chapter, list] of byChapter) {
    const before = readFileSync(chapter, 'utf8');
    const result = place(before, list);
    refused.push(...result.refused.map(one => `${basename(chapter)}: ${one}`));
    const sorts = [...new Set(list.map(mark => mark.sort))];
    if (own(before, sorts) !== own(result.text, sorts)) refused.push(`${basename(chapter)}: the messages' own text would change under the placing`);
    results.push({ chapter, ...result });
}
if (refused.length > 0) {
    console.log(`nothing written; refused ${refused.length}:`);
    for (const one of refused) console.log(`  ${one}`);
    process.exit(1);
}
let total = 0;
for (const result of results) {
    writeFileSync(result.chapter, result.text);
    const count = Object.values(result.placed).reduce((n, c) => n + c, 0);
    total += count;
    const sorts = Object.entries(result.placed).sort((a, b) => b[1] - a[1]).map(([sort, n]) => `${sort} ${n}`).join(', ');
    console.log(`${basename(result.chapter)}: ${count} marks placed, ${sorts}; ${result.expanded} one-line paragraph${result.expanded === 1 ? '' : 's'} expanded; the messages' own text identical`);
}
console.log(`${total} marks placed into ${results.length} chapter${results.length === 1 ? '' : 's'}`);
