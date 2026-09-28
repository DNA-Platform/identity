// THE CORRESPONDENCE BETWEEN THE CODE AND ITS CHAPTERS, CHECKED. Folder is book, class is chapter,
// member is row: every `$`-class exported from `src` is documented by a chapter of the book named for
// its folder — one whose title names the class, or whose header cites the class's file — and every file
// a chapter cites exists. Failures print in the binder's form, one per line. Sprint 91, on Doug's word:
// "Make sure how to have a clear back and forth between the code and docs so you have an easy time
// documenting… be prepared to maintain it. And it should be designed for you to navigate."
//
//   npx tsx library/.public/.lib/the-coding-style/08-how-a-class-is-documented--check.ts
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { basename, dirname, join, relative, resolve } from 'node:path';

const here = dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]:)/u, '$1'));
const library = resolve(here, '..');
const src = resolve(library, '..', 'package', 'src');

// THE BOOK A FOLDER'S CLASSES ARE DOCUMENTED IN: the folder's own name, but for the one rename the
// library has not followed — the book of `libraries` is still called `library`.
const bookOf = (folder: string): string => (folder === 'libraries' ? 'library' : folder);

const files = (dir: string): string[] => readdirSync(dir).flatMap(name => {
    const path = join(dir, name);
    return statSync(path).isDirectory() ? files(path) : [path];
});

type Failure = { file: string; tag: string; says: string };
const failures: Failure[] = [];
const fail = (file: string, tag: string, says: string): void => { failures.push({ file, tag, says }); };

// EVERY EXPORTED CLASS, AND THE FILE IT STANDS IN — the `$`-classes, the utilities, and the
// specifications, which the chapter citing their file documents with the class they specify.
const classes = files(src).filter(f => /\.tsx?$/u.test(f) && !f.endsWith('index.ts')).flatMap(file => {
    const code = readFileSync(file, 'utf8');
    return [...code.matchAll(/^export class (\$?\w+)/gmu)].map(match => ({ name: match[1], file }));
});

// EVERY CHAPTER OF THE BOOKS THAT DOCUMENT `src`: its title, and the files its header cites.
const books = [...new Set(classes.map(one => bookOf(basename(dirname(one.file)))))];
const chapters = books.flatMap(book => {
    const dir = join(library, book);
    if (!existsSync(dir)) { fail(dir, 'NO-BOOK', `the folder ${book} has no book in the branch library`); return []; }
    return readdirSync(dir).filter(name => /^\d+-.*\.md$/u.test(name)).map(name => {
        const path = join(dir, name);
        const text = readFileSync(path, 'utf8');
        const title = text.match(/^# (.+)$/mu)?.[1] ?? '';
        const cited = [...text.matchAll(/\]\((\.\.\/\.\.\/package\/src\/[^)#]+)\)/gu)].map(match => resolve(dir, match[1]));
        return { book, path, title, cited };
    });
});

// A CLASS IS DOCUMENTED WHEN A CHAPTER OF ITS FOLDER'S BOOK NAMES IT IN ITS TITLE OR CITES ITS FILE.
for (const one of classes) {
    const book = bookOf(basename(dirname(one.file)));
    const names = new RegExp(`\\b${one.name.replace(/^\$/u, '')}\\b`, 'u');
    const documented = chapters.some(chapter => chapter.book === book && (names.test(chapter.title) || chapter.cited.some(path => resolve(path) === resolve(one.file))));
    if (!documented) fail(one.file, 'UNDOCUMENTED-CLASS', `${one.name} — no chapter of .lib/${book} names it in its title or cites ${relative(src, one.file).replace(/\\/gu, '/')}`);
}

// AND EVERY FILE A CHAPTER CITES IS THERE.
for (const chapter of chapters)
    for (const path of chapter.cited)
        if (!existsSync(path)) fail(chapter.path, 'MISSING-FILE', `cites ${relative(resolve(library, '..'), path).replace(/\\/gu, '/')}, which is not there`);

for (const one of failures) console.log(`${relative(resolve(library, '..', '..', '..'), one.file).replace(/\\/gu, '/')}(1,1): error ${one.tag}: ${one.says}`);
console.log(`${classes.length} classes in ${new Set(classes.map(one => one.file)).size} files, ${chapters.length} chapters in ${books.length} books, ${failures.length} failures`);
process.exitCode = failures.length ? 1 : 0;
