import { readdirSync, readFileSync } from 'node:fs';
import { basename, join } from 'node:path';
import { sorts } from './12-how-we-read-a-conversation~sorts.mjs';

const [book, named] = process.argv.slice(2);
const wanted = named === undefined ? null : sorts.find(sort => sort.toLowerCase() === named.toLowerCase());
if (named !== undefined && wanted === null) throw new Error(`no sort is named ${named}; the sorts are ${sorts.join(', ')}`);

const read = text => text.replace(/\s+/gu, ' ').replace(/&lt;/gu, '<').replace(/&gt;/gu, '>').replace(/&#123;/gu, '{').replace(/&#125;/gu, '}').replace(/&amp;/gu, '&').trim();
const chapters = readdirSync(book).filter(file => /^\d+-.+\.tsx$/u.test(file)).sort((a, b) => Number(a.split('-')[0]) - Number(b.split('-')[0])).map(file => {
    const text = readFileSync(join(book, file), 'utf8');
    const marks = [...text.matchAll(new RegExp(`<(${sorts.join('|')})>([\\s\\S]*?)</\\1>`, 'gu'))].map(match => ({ sort: match[1], words: read(match[2]) }));
    return { file, title: /<Title>\[\[ (.+?) \]\]<\/Title>/u.exec(text)?.[1] ?? file, part: /<Part>(.+?)<\/Part>/u.exec(text)?.[1] ?? null, marks };
});

const count = marks => sorts.map(sort => [sort, marks.filter(mark => mark.sort === sort).length]).filter(([, n]) => n > 0).map(([sort, n]) => `${sort} ${n}`).join(', ');
const all = chapters.flatMap(chapter => chapter.marks);
if (wanted === null) {
    console.log(`${basename(book)}: ${all.length} marks in ${chapters.length} chapter${chapters.length === 1 ? '' : 's'}; ${count(all)}`);
    let part = null;
    for (const chapter of chapters) {
        if (chapter.part !== part) { part = chapter.part; console.log(`${part}`); }
        console.log(`  ${chapter.title}: ${count(chapter.marks) || 'no marks'}`);
    }
} else {
    const held = all.filter(mark => mark.sort === wanted);
    console.log(`${basename(book)}: ${held.length} ${wanted}${held.length === 1 ? '' : 's'}`);
    for (const chapter of chapters) {
        const own = chapter.marks.filter(mark => mark.sort === wanted);
        if (own.length === 0) continue;
        console.log(`${chapter.part === null ? '' : `${chapter.part} · `}${chapter.title}`);
        for (const mark of own) console.log(`  ${mark.words}`);
    }
}
