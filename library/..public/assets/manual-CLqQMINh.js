var b=Object.defineProperty;var s=(f,w)=>b(f,"name",{value:w,configurable:!0});import{j as e,C as h,a as y,T as l,A as k,S as x,e as v,P as m,f as t,H as a,d as n,g as r,W as c,M as o,v as d,L as g,x as i,$ as j}from"./index-B5s4JsO8.js";import{$}from"./4-the-shelfmark~code-CcDdLZjO.js";import{S as T}from"./.synopsis-CNcBO6j4.js";const u=class u extends ${};s(u,"$TheManual");let p=u;const S=s(()=>e.jsxs(h,{children:[e.jsx(y,{}),e.jsx(l,{children:"[Dougs Reference Manual](/dougs-reference-manual/)"}),e.jsx(k,{children:"[The Librarian](/dougs-story/)"}),e.jsx(x,{children:"[The Library](/dougs-library/)"})]}),"Cover"),D=s(()=>e.jsxs(h,{children:[e.jsx(v,{}),e.jsxs(l,{children:[e.jsx(m,{}),"[Table of Contents](/dougs-reference-manual/#table-of-contents)"]}),e.jsxs(t,{children:[e.jsx(a,{children:"Contents"}),e.jsx(n,{children:e.jsx(r,{children:"[The Book](/dougs-reference-manual/#the-book)"})}),e.jsx(n,{children:e.jsx(r,{children:"[The Theme](/dougs-reference-manual/#the-theme)"})}),e.jsx(n,{children:e.jsx(r,{children:"[The Date](/dougs-reference-manual/#the-date)"})}),e.jsx(n,{children:e.jsx(r,{children:"[The Shelfmark](/dougs-reference-manual/#the-shelfmark)"})}),e.jsx(n,{children:e.jsx(r,{children:"[Initializing a Library](/dougs-reference-manual/#initializing-a-library)"})}),e.jsx(n,{children:e.jsx(r,{children:"[Developing a Library](/dougs-reference-manual/#developing-a-library)"})}),e.jsxs(n,{children:[e.jsx(m,{}),e.jsx(c,{children:e.jsx(r,{children:"[Dougs Reference Manual](/dougs-reference-manual/)"})}),e.jsx(c,{children:e.jsx(r,{children:"[Synopsis](/dougs-reference-manual/#synopsis)"})}),e.jsx(c,{children:e.jsx(r,{children:"[Table of Contents](/dougs-reference-manual/#table-of-contents)"})})]})]})]}),"Table"),A=s(()=>e.jsxs(h,{children:[e.jsx(l,{children:"[The Book](/dougs-reference-manual/#the-book)"}),e.jsxs(t,{children:[e.jsx(a,{children:"What a book is here"}),e.jsxs(n,{children:["Every book in this library extends the library's own book class, so what a book is here is decided once. The class draws one thing before a book's chapters: a byline, the author the book's cover names, which leads to ",e.jsx(o,{children:"[Dougs Story](/dougs-story/)"})," from every book. A book opened at its cover stays at the top of its page, so the byline is the first thing in view. Its file is also where the theme is registered for the framework's on the library's book class: every book of the library is a subclass and inherits the registration, so the Theme the framework stands on every book is ",e.jsx(o,{children:"[The Theme](/dougs-reference-manual/#the-theme)"}),"."]})]}),e.jsxs(t,{children:[e.jsx(a,{children:"The book's file"}),e.jsx(n,{children:"The file stands beside this chapter and is printed as it is on disk. The manual's book file is the door: it takes the class from here, and every other book of the library imports it from there."}),e.jsx(n,{children:e.jsx(d,{children:`import { ReactNode } from 'react';
import { $ } from '@dna-platform/chemistry';
import { $Book, $Paragraph, Reference as reference, Theme, Word as word } from '@dna-platform/public';
import { DougsTheme } from './2-the-theme~code.tsx';

export class $Byline extends $Paragraph {
    protected override $Define(): void {
        super.$Define();
        this.classes.add(this, 'pd-byline');
    }

    override write(): ReactNode {
        const book = this.book;
        if (book === undefined) return null;
        const Word = $(word);
        const Reference = $(reference);
        return (
            <>
                by
                {' '}
                <Word>
                    <Reference>{book.author?.means?.identifier}</Reference>
                    {book.author?.name}
                </Word>
            </>
        );
    }
}

export const Byline = $($Byline);
const byline = Byline;

export class $DougsLibrary extends $Book {
    override write(): ReactNode {
        const Byline = $(byline);
        return (
            <>
                <Byline chapter={this.cover} />
                {super.write()}
            </>
        );
    }

    protected override turn(): void {
        if (this.bookmark !== undefined && this.bookmark === this.cover) window.scrollTo(0, 0);
        else super.turn();
    }
}

export const DougsLibrary = $($DougsLibrary);
$(DougsLibrary, Theme)(DougsTheme);
`})})]})]}),"TheBook1"),I=s(()=>e.jsxs(h,{children:[e.jsx(l,{children:"[The Theme](/dougs-reference-manual/#the-theme)"}),e.jsxs(t,{children:[e.jsx(a,{children:"What the theme is"}),e.jsx(n,{children:"A place for the library's properties, and the one styled component that dresses the framework's marks with them. The framework's Theme is bare, so the properties are this library's own: the font, the size, the leading, the measure, the space, the ink, the paper and the link, declared as fields and read by every rule beneath through the theme's own provision. The values stand in for a design not yet made: a light paper and a dark ink, in the light serif of the page that has stood at the library's address while it was built. That page's own dark is a cover, and is kept for an accent."}),e.jsx(n,{children:"The component is composed of parts, each a method returning a fragment of rules, so that a book changes one part and keeps the rest: the page, the levels, the links, and the apparatus, which is the byline, the dateline, and the rows of a table of contents with the shelfmark at their right. Every rule names a mark the framework or this library puts on the writing."})]}),e.jsxs(t,{children:[e.jsx(a,{children:"The theme's file"}),e.jsx(n,{children:e.jsx(d,{children:`import { ElementType } from 'react';
import { css, RuleSet } from 'styled-components';
import { $, selection } from '@dna-platform/chemistry';
import { $Theme } from '@dna-platform/public';

declare module 'styled-components' {
    export interface DefaultTheme extends $DougsTheme {}
}

export class $DougsTheme extends $Theme {
    font = "'Cormorant Garamond', Georgia, serif";
    size = '1.25rem';
    leading = '1.6';
    measure = '40rem';
    space = '1.5rem';
    ink = '#14262b';
    paper = '#f5f1e8';
    link = '#1c6a71';
    style: ElementType = selection.div\`\${this.parts()}\`;

    protected parts(): RuleSet[] {
        return [this.page(), this.levels(), this.links(), this.apparatus()];
    }

    protected page(): RuleSet {
        return css\`
            font-family: \${({ theme }) => theme.font};
            font-size: \${({ theme }) => theme.size};
            font-weight: 500;
            line-height: \${({ theme }) => theme.leading};
            color: \${({ theme }) => theme.ink};
            background: \${({ theme }) => theme.paper};
            min-height: 100vh;
            box-sizing: border-box;
            padding: \${({ theme }) => theme.space};
            .pd-book { max-width: \${({ theme }) => theme.measure}; margin-inline: auto; }
        \`;
    }

    protected levels(): RuleSet {
        return css\`
            .pd-chapter { margin-block: calc(2 * \${({ theme }) => theme.space}); }
            .pd-section { margin-block: \${({ theme }) => theme.space}; }
            .pd-paragraph { margin-block: \${({ theme }) => theme.space}; }
            .pd-title { font-size: calc(2 * \${({ theme }) => theme.size}); font-weight: 300; letter-spacing: 0.08em; margin-block-end: \${({ theme }) => theme.space}; }
            .pd-heading { font-weight: 600; margin-block: \${({ theme }) => theme.space} 0; }
            .pd-line { white-space: pre-wrap; }
            .pd-word { overflow-wrap: break-word; }
            .pd-image img { display: block; max-width: 100%; height: auto; }
            .pd-code { font-family: ui-monospace, monospace; font-size: calc(0.75 * \${({ theme }) => theme.size}); line-height: 1.5; white-space: pre; overflow-x: auto; padding: \${({ theme }) => theme.space}; background: color-mix(in srgb, \${({ theme }) => theme.ink} 6%, \${({ theme }) => theme.paper}); }
        \`;
    }

    protected links(): RuleSet {
        return css\`
            .pa-reference { color: \${({ theme }) => theme.link}; text-decoration-color: \${({ theme }) => theme.link}; text-underline-offset: 0.15em; }
            .pa-self-reference { color: inherit; text-decoration: none; }
            .pa-content { color: \${({ theme }) => theme.link}; }
        \`;
    }

    protected apparatus(): RuleSet {
        return css\`
            .pd-paragraph.pd-byline { margin-block: 0; text-align: end; font-size: calc(0.8 * \${({ theme }) => theme.size}); letter-spacing: 0.08em; }
            .pd-byline .pa-reference { text-decoration: none; }
            .pa-table-of-contents .pd-section { width: max-content; max-width: 100%; }
            .pa-table-of-contents .pd-paragraph { display: flex; align-items: baseline; }
            .pd-container.pa-shelfmark { margin-inline-start: auto; padding-inline-start: calc(2 * \${({ theme }) => theme.space}); }
            .pd-word.pa-shelfmark .pa-content { position: absolute; width: 1px; height: 1px; overflow: hidden; clip-path: inset(50%); white-space: nowrap; }
            .pd-word.pa-shelfmark::after { content: ''; display: inline-block; width: calc(0.45 * \${({ theme }) => theme.size}); height: calc(0.45 * \${({ theme }) => theme.size}); border: 1px solid \${({ theme }) => theme.link}; }
            .pd-dateline { display: block; margin-block-start: \${({ theme }) => theme.space}; text-align: end; font-size: calc(0.8 * \${({ theme }) => theme.size}); font-style: italic; color: color-mix(in srgb, \${({ theme }) => theme.ink} 64%, \${({ theme }) => theme.paper}); }
        \`;
    }
}

export const DougsTheme = $($DougsTheme);
`})})]})]}),"TheTheme2"),L=s(()=>e.jsxs(h,{children:[e.jsx(l,{children:"[The Date](/dougs-reference-manual/#the-date)"}),e.jsxs(t,{children:[e.jsx(a,{children:"What a dated chapter is"}),e.jsxs(n,{children:["A chapter of mine may say when it is from. It says so once, at its top: the words I want read, and the day a machine can read, with the time where I know it. The chapter wears a mark for it and draws the words at its foot, as a dateline. A book can read each chapter's day and put its chapters in order of recency. The chapters of ",e.jsx(o,{children:"[Dougs Story](/dougs-story/)"})," are dated, and no book of mine sorts by the date yet."]})]}),e.jsxs(t,{children:[e.jsx(a,{children:"The date's file"}),e.jsx(n,{children:e.jsx(d,{children:`import { ReactNode } from 'react';
import { $ } from '@dna-platform/chemistry';
import { $Annotation, $Writing, binder, html } from '@dna-platform/public';

export class $Dated extends $Annotation {
    get name(): string { return binder.reference(html.copy(this.text))?.name ?? ''; }
    get date(): string | undefined { return binder.reference(html.copy(this.text))?.identifier; }

    override note(): ReactNode {
        return (
            <time
                className="pd-dateline"
                dateTime={this.date}
            >
                {this.name}
            </time>
        );
    }

    override defines(writing: $Writing): void {
        writing.classes.add(this, 'pa-dated');
    }

    override erase(writing: $Writing): void {
        writing.classes.revert(this);
    }
}

export const Dated = $($Dated);
`})})]})]}),"TheDate3"),R=s(()=>e.jsxs(h,{children:[e.jsx(l,{children:"[The Shelfmark](/dougs-reference-manual/#the-shelfmark)"}),e.jsxs(t,{children:[e.jsx(a,{children:"What a shelfmark is"}),e.jsxs(n,{children:["A catalogue of mine holds a chapter for each book filed under it, and that chapter stands in for the book: it carries the book's synopsis. In the catalogue's table of contents the row for such a chapter ends in a small square. The name leads to the chapter here, and the square leads to the book itself. ",e.jsx(o,{children:"[Dougs Library](/dougs-library/)"})," is written this way, in ",e.jsx(o,{children:"[its table of contents](/dougs-library/#table-of-contents)"}),"."]}),e.jsx(n,{children:"The square is the catalogue's answer for the book, so it is also what tells the compiler that this catalogue holds it. I write the answer with the book's name, and the theme draws the square in its place, at the right of the row and a thoughtful distance from the names, with the squares of a table in one line. The name stays in the link for anyone who cannot see the square."})]}),e.jsxs(t,{children:[e.jsx(a,{children:"The shelfmark's file"}),e.jsx(n,{children:e.jsx(d,{children:`import { ComponentType, ElementType } from 'react';
import { $, selection } from '@dna-platform/chemistry';
import { $Content, $Writing } from '@dna-platform/public';

export class $Shelfmark extends $Content {
    override anchor: ElementType = selection(this.anchor as ComponentType<{ className?: string }>).attrs({ className: 'pa-shelfmark' })\`\`;

    override defines(writing: $Writing): void {
        super.defines(writing);
        writing.classes.add(this, 'pa-shelfmark');
    }
}

export const Shelfmark = $($Shelfmark);
`})})]})]}),"TheShelfmark4"),C=s(()=>e.jsxs(h,{children:[e.jsx(l,{children:"[Initializing a Library](/dougs-reference-manual/#initializing-a-library)"}),e.jsxs(t,{children:[e.jsx(a,{children:"What a library needs to begin"}),e.jsxs(n,{children:["A library is books and nothing else, and it begins with three. The library's own catalogue, which is the top: every other book is filed under it, and it is filed under what it is about, which is itself. The librarian's autobiography, the one book that is by its own subject, which grounds who may author anything here. And a reference manual, this book, where the reusable parts of the library stand beside the chapters that say what they are. Each is a folder, and the folders here are ",e.jsx(o,{children:"[Dougs Library](/dougs-library/)"})," in a folder named as a library catalogue, ",e.jsx(o,{children:"[Dougs Story](/dougs-story/)"})," in one named as a subject, and this manual in one named as a subject too. A fourth stands beside them, ",e.jsx(o,{children:"[Dougs Design](/dougs-design/)"}),", where the design of the library is kept. The compiler reads no folder name; the dots are a convention kept for the person reading the tree."]})]}),e.jsxs(t,{children:[e.jsx(a,{children:"What a book is made of"}),e.jsx(n,{children:"A folder is a book when it holds a book file, and a book holds four files before any chapter:"}),e.jsxs(n,{children:[e.jsx(g,{}),e.jsx(i,{children:"a book file, which exports the class the book is, taken from this manual's door;"}),e.jsx(i,{children:"a cover, which says the book's title, who wrote it, where it is filed and what it is about;"}),e.jsx(i,{children:"a synopsis, which says what the book is in a paragraph, and is what a catalogue's row refers to;"}),e.jsx(i,{children:"a table of contents, which answers for the chapters the book holds and for the books it catalogues."})]}),e.jsx(n,{children:"The compiler holds the table to its word: it must link to every chapter of its book, itself among them, and to every book filed under it, or the bind refuses."}),e.jsx(n,{children:"Then numbered chapters, each a file whose first words are its title. A file beside a chapter, named for it with an identifier and a type, is the chapter's to print or to import, and the compiler refuses one the chapter does not use."})]}),e.jsxs(t,{children:[e.jsx(a,{children:"What a cover says"}),e.jsx(n,{children:"Everything a cover says is said in the notation, whatever element holds it. Two brackets around a name is a title. A second title form on a cover is what the book is about, the name of the subject it represents, which need not be the book's name: this library is called Dougs Library and is about The Library, and the autobiography is about The Librarian, so an author is written as The Librarian and a book is filed under The Library. One star before the brackets says who wrote the book; two say which catalogue it is filed under. The top says it is filed under itself, and the compiler requires that one book here does so, or there is no library."})]}),e.jsxs(t,{children:[e.jsx(a,{children:"The face, and the bind"}),e.jsx(n,{children:"The library publishes to a face, a folder beside the books that holds the binding and the site it builds. The face is made once, by running the master binding's copy script pointed at the library's folder; it names the face with as many dots as put it above every book, and writes a configuration naming where the copy came from, so that syncing brings the master in before every build. The configuration also names the root book, the title of the site, and the stylesheets and fonts a page loads. Then the bind: it reads every book, checks the library is well-formed, and writes one page per book. Every fault it raises is a sentence a librarian could say about the library without knowing the compiler exists, no title, not listed, may not author, and the library is initialized when it raises none."}),e.jsx(n,{children:"The bind is run in the face's binding folder, as npm run bind, and the site it builds is served from that folder with npx vite preview. The face keeps the pictures that stood beside a chapter after they are taken out of the book, until that book's folder in the face is cleared by hand."}),e.jsxs(n,{children:["The bind publishes the library. It is not how I look at the library while I am writing it, and that is said in ",e.jsx(o,{children:"[Developing a Library](/dougs-reference-manual/#developing-a-library)"}),"."]})]})]}),"InitializingALibrary5"),W=s(()=>e.jsxs(h,{children:[e.jsx(l,{children:"[Developing a Library](/dougs-reference-manual/#developing-a-library)"}),e.jsxs(t,{children:[e.jsx(a,{children:"The page stays open"}),e.jsx(n,{children:"I develop this library with its pages open. The binder serves the library live, straight from the files I am writing, and when I save one the open page changes in place: a sentence in a chapter in a quarter of a second, a rule in a theme in about half of one. Nothing is bound and the page is not loaded again. If what I saved breaks the library, the page says so in the compiler's own sentence, and the sentence goes when I mend the file."}),e.jsx(n,{children:"This is the only way I look at the library while I am working on it. Work on how a page looks needs its answer at once, and a way of working that cannot give one has failed at what it is for."})]}),e.jsxs(t,{children:[e.jsx(a,{children:"The workbench"}),e.jsx(n,{children:"The workbench is the tool I do this with. Opened once, it starts the live site and keeps a browser open on it. After that I ask it for a look at any book. It waits for my last save to reach the page, photographs the page at a desk's width or a phone's, and tells me:"}),e.jsxs(n,{children:[e.jsx(g,{}),e.jsx(i,{children:"what the page says, or any part of it;"}),e.jsx(i,{children:"what a rule computes to on an element, and where the element stands;"}),e.jsx(i,{children:"how many things run past the right edge of the screen;"}),e.jsx(i,{children:"anything that went wrong on the page, and the compiler's refusal if there is one."})]}),e.jsxs(n,{children:["A look takes under a second, because the browser is already open and the page is already drawn. It can press something first, load the page again as a reader arriving would, and say which of the rules that name a thing wins. What the workbench does for a book is what ",e.jsx(o,{children:"[the camera](/dougs-design/#the-camera)"})," does for a concept, and it stands here for the same reason the camera stands there, which is told in ",e.jsx(o,{children:"[Closure](/dougs-story/#closure)"}),"."]})]}),e.jsxs(t,{children:[e.jsx(a,{children:"When I bind"}),e.jsxs(n,{children:["The bind is how the library is published, and it is not how I look at it. What it does is said in ",e.jsx(o,{children:"[Initializing a Library](/dougs-reference-manual/#initializing-a-library)"}),". It takes seconds where a save takes none, so I bind when a piece of work is done."]}),e.jsx(n,{children:"The bind checks three things the live site does not: each book against its own rules, each page as it is printed for a reader who arrives before the code does, and every link against the page it leads to. So my last look at finished work is at the site the bind built, loaded afresh, and the workbench takes that look too."})]}),e.jsxs(t,{children:[e.jsx(a,{children:"The workbench's file"}),e.jsx(n,{children:e.jsx(d,{language:"javascript",children:`// The workbench: the library served live from its sources, a browser kept open on it, and a way to ask that
// browser what a page looks like. Open it once and leave it open:
//
//     node .me/.manual/6-developing-a-library~workbench.mjs
//
// Then look at a book from another terminal, as often as needed:
//
//     node .me/.manual/6-developing-a-library~workbench.mjs look dougs-story
//     node .me/.manual/6-developing-a-library~workbench.mjs look dougs-story/#closure phone at=.pd-title
//
// A look waits for the last save to reach the page, prints what it found and says where it put the photograph.
// After the book's address it takes, in any order:
//
//     phone                          a phone's width, where a desk's is the default
//     built                          the site the last bind built, served on 4242, where the live one is the default
//     fresh                          load the page again first, as a reader arriving would
//     whole                          photograph the whole page, where the screen is the default
//     at=<selector>                  photograph that element alone
//     click=<selector>               press it first
//     read=<selector>                print what each match says
//     style=<selector>|<property>    print what each match computes to, the properties separated by commas
//     box=<selector>                 print where each match stands
//     after=<selector>               print what is drawn before and after the first match
//     rules=<word>|<property>        print every rule whose selector holds the word, in the order they apply
//     out=<file>                     where the photograph goes
//
// And when the work is done:
//
//     node .me/.manual/6-developing-a-library~workbench.mjs close
import { execSync, spawn } from 'node:child_process';
import { createHash } from 'node:crypto';
import { existsSync, mkdirSync, readFileSync, readdirSync, rmSync, watch, writeFileSync } from 'node:fs';
import { createServer } from 'node:http';
import { createRequire } from 'node:module';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const library = dirname(dirname(fileURLToPath(import.meta.url)));
const binding = readdirSync(library).map(name => join(library, name, '.binding')).find(one => existsSync(join(one, 'serving.ts')));
const kept = join(tmpdir(), \`workbench-\${createHash('sha1').update(library).digest('hex').slice(0, 8)}\`);
const note = join(kept, 'open.json');
const devices = { desk: { width: 1280, height: 800 }, phone: { width: 390, height: 844 } };
const built = 'http://localhost:4242/';
const [verb, ...words] = process.argv.slice(2);

const asked = async what => {
    if (!existsSync(note)) return null;
    try {
        return await (await fetch(\`http://127.0.0.1:\${JSON.parse(readFileSync(note, 'utf8')).port}/\${what}\`)).text();
    } catch {
        rmSync(note, { force: true });
        return null;
    }
};

const open = async () => {
    if (binding === undefined) throw new Error(\`no face with a binding stands in \${library}\`);
    if (await asked('open') !== null) return console.log('the workbench is already open');
    mkdirSync(kept, { recursive: true });

    const live = spawn('npm run dev', { cwd: binding, shell: true });
    const site = await new Promise((resolve, reject) => {
        let said = '';
        const read = chunk => {
            said += chunk;
            const found = /http:\\/\\/localhost:\\d+\\//u.exec(said.replace(/\\u001b\\[[0-9;]*m/gu, ''));
            if (found === null) return;
            live.stdout.off('data', read);
            live.stderr.off('data', read);
            live.stdout.resume();
            live.stderr.resume();
            resolve(found[0]);
        };
        live.stdout.on('data', read);
        live.stderr.on('data', read);
        live.on('exit', code => reject(new Error(\`the live site stopped with \${code}\\n\${said}\`)));
    });

    const puppeteer = createRequire(join(binding, 'package.json'))('puppeteer');
    const browser = await puppeteer.launch({ headless: true, ignoreDefaultArgs: ['--hide-scrollbars'] });
    const tabs = new Map();
    let saved = 0;
    watch(library, { recursive: true }, () => { saved = Date.now(); });

    // The live site sends a page with nothing printed on it and draws the book once its code arrives, so a page
    // just loaded is waited on until it says something, or the compiler does.
    const drawn = page => page.waitForFunction(() => document.body.innerText.trim() !== '' || document.querySelector('vite-error-overlay') !== null, { timeout: 20000, polling: 50 }).catch(() => undefined);

    // A page behind another draws nothing and cannot be photographed, so the one looked at is brought forward.
    const tab = async (address, device, fresh) => {
        const key = \`\${device} \${address}\`;
        const held = tabs.get(key);
        if (held !== undefined && !held.page.isClosed()) {
            await held.page.bringToFront();
            if (fresh) {
                await held.page.reload({ waitUntil: 'load' });
                await drawn(held.page);
            }
            return held;
        }
        const page = await browser.newPage();
        const opened = { page, wrong: [] };
        page.on('pageerror', error => opened.wrong.push(String(error.message ?? error)));
        page.on('console', message => { if (message.type() === 'error') opened.wrong.push(message.text()); });
        await page.setViewport({ ...devices[device], deviceScaleFactor: 1 });
        await page.goto(address, { waitUntil: 'load' });
        await drawn(page);
        tabs.set(key, opened);
        return opened;
    };

    // A save reaches the open page in under a second, so a look waits out that second and then for the page to
    // go quiet.
    const settled = async page => {
        const since = Date.now() - saved;
        if (since < 900) await new Promise(done => setTimeout(done, 900 - since));
        await page.waitForNetworkIdle({ idleTime: 100, timeout: 10000 }).catch(() => undefined);
        for (let tries = 0; tries < 3; tries++) {
            try {
                await page.evaluate(() => new Promise(done => {
                    let finished = false;
                    const finish = () => {
                        if (finished) return;
                        finished = true;
                        watching.disconnect();
                        document.fonts.ready.then(() => done());
                    };
                    let quiet = setTimeout(finish, 120);
                    const watching = new MutationObserver(() => {
                        clearTimeout(quiet);
                        quiet = setTimeout(finish, 120);
                    });
                    watching.observe(document.documentElement, { subtree: true, childList: true, attributes: true, characterData: true });
                    setTimeout(finish, 3000);
                }));
                return;
            } catch {
                await new Promise(done => setTimeout(done, 300));
            }
        }
    };

    const look = async (wanted, doing) => {
        const began = Date.now();
        const device = wanted.has('phone') ? 'phone' : 'desk';
        const [book, mark] = (wanted.get('book') ?? '').split('#');
        const path = book.replace(/^\\/+|\\/+$/gu, '');
        const route = \`\${path === '' ? '' : \`\${path}/\`}\${mark === undefined ? '' : \`#\${mark}\`}\`;
        const address = \`\${wanted.has('built') ? built : site}\${route}\`;
        doing.key = \`\${device} \${address}\`;
        doing.what = 'opening the page';
        const { page, wrong } = await tab(address, device, wanted.has('fresh'));
        doing.what = 'waiting for the page to go quiet';
        await settled(page);
        for (const selector of wanted.getAll('click')) {
            doing.what = \`pressing \${selector}\`;
            await page.click(selector);
            await settled(page);
        }

        doing.what = 'reading the page';
        const says = [];
        const refused = await page.evaluate(() => {
            const overlay = document.querySelector('vite-error-overlay')?.shadowRoot;
            return overlay === undefined || overlay === null ? null : (overlay.querySelector('.message-body') ?? overlay).textContent.trim().slice(0, 700);
        });
        if (refused !== null) says.push(\`refused: \${refused}\`);
        // What runs past the edge inside something that scrolls sideways, as a long line of code does, is not counted.
        says.push(\`\${await page.evaluate(() => {
            const wide = document.documentElement.clientWidth;
            const scrolled = one => {
                for (let above = one.parentElement; above !== null && above !== document.body; above = above.parentElement)
                    if (getComputedStyle(above).overflowX !== 'visible') return true;
                return false;
            };
            return Array.from(document.querySelectorAll('body *')).filter(one => {
                const box = one.getBoundingClientRect();
                return box.width > 0 && box.right > wide + 1 && getComputedStyle(one).position !== 'fixed' && !scrolled(one);
            }).length;
        })} past the right edge\`);
        for (const one of new Set(wrong.splice(0))) says.push(\`wrong: \${one.slice(0, 300)}\`);

        for (const selector of wanted.getAll('read')) {
            const read = await page.$$eval(selector, all => all.slice(0, 12).map(one => one.innerText.replace(/\\s+/gu, ' ').trim().slice(0, 300)));
            says.push(...(read.length === 0 ? [\`nothing matches \${selector}\`] : read.map(text => \`\${selector} says: \${text}\`)));
        }
        for (const pair of wanted.getAll('style')) {
            const [selector, names = ''] = pair.split('|');
            const computed = await page.$$eval(selector, (all, properties) => all.slice(0, 12).map(one => {
                const style = getComputedStyle(one);
                return properties.map(name => \`\${name}: \${style.getPropertyValue(name) || style[name]}\`).join(' · ');
            }), names.split(','));
            says.push(...(computed.length === 0 ? [\`nothing matches \${selector}\`] : computed.map(text => \`\${selector} \${text}\`)));
        }
        for (const selector of wanted.getAll('box')) {
            const boxes = await page.$$eval(selector, all => all.slice(0, 12).map(one => {
                const box = one.getBoundingClientRect();
                return \`\${Math.round(box.x)},\${Math.round(box.y)} \${Math.round(box.width)}×\${Math.round(box.height)}\`;
            }));
            says.push(...(boxes.length === 0 ? [\`nothing matches \${selector}\`] : boxes.map(text => \`\${selector} stands at \${text}\`)));
        }

        for (const selector of wanted.getAll('after')) {
            const drawn = await page.$eval(selector, one => ['::before', '::after'].map(which => {
                const style = getComputedStyle(one, which);
                return \`\${which} content \${style.content} · \${style.width} by \${style.height} · display \${style.display} · background \${style.backgroundColor} · border \${style.border}\`;
            })).catch(() => [\`nothing matches \${selector}\`]);
            says.push(...drawn.map(text => \`\${selector} \${text}\`));
        }
        // Which rule wins is read off the page's own sheets, in their order, and never guessed.
        for (const pair of wanted.getAll('rules')) {
            const [named, names = ''] = pair.split('|');
            const rules = await page.evaluate((substring, properties) => {
                const found = [];
                for (const sheet of document.styleSheets) {
                    let rules;
                    try {
                        rules = sheet.cssRules;
                    } catch {
                        continue;
                    }
                    for (const rule of rules) {
                        if (rule.selectorText === undefined || !rule.selectorText.includes(substring)) continue;
                        const declared = properties.filter(name => name !== '').map(name => \`\${name}: \${rule.style.getPropertyValue(name) || 'unsaid'}\`).join(' · ');
                        found.push(\`\${rule.selectorText.slice(0, 120)} { \${declared || rule.style.cssText.slice(0, 200)} }\`);
                    }
                }
                return found;
            }, named, names.split(','));
            says.push(...(rules.length === 0 ? [\`no rule names \${named}\`] : rules.map(text => \`rule: \${text}\`)));
        }

        doing.what = 'photographing the page';
        const photograph = wanted.get('out') ?? join(kept, \`\${(path || 'library').replace(/\\W+/gu, '-')}-\${device}.png\`);
        // An element is photographed by clipping the page to where it stands. Asking the element to photograph
        // itself can hang.
        const clip = wanted.has('at') ? await page.$eval(wanted.get('at'), one => {
            const box = one.getBoundingClientRect();
            return { x: Math.max(0, box.left + window.scrollX), y: Math.max(0, box.top + window.scrollY), width: Math.ceil(box.width), height: Math.ceil(box.height) };
        }).catch(() => null) : null;
        if (wanted.has('at') && (clip === null || clip.width === 0 || clip.height === 0)) says.push(\`nothing to photograph at \${wanted.get('at')}\`);
        else if (clip !== null) {
            await page.screenshot({ path: photograph, clip, captureBeyondViewport: true });
            says.push(\`photograph: \${photograph}\`);
        } else {
            // A press leaves the page where the press took it; otherwise the look is at the address asked for.
            if (!wanted.has('click')) await page.evaluate(to => (to === null ? window.scrollTo(0, 0) : document.getElementById(to)?.scrollIntoView()), mark ?? null);
            await page.screenshot({ path: photograph, fullPage: wanted.has('whole') });
            says.push(\`photograph: \${photograph}\`);
        }

        return [\`\${route || 'the library'} at a \${device}, \${wanted.has('built') ? 'built' : 'live'}, in \${Date.now() - began}ms\`, ...says].join('\\n');
    };

    const shut = async () => {
        rmSync(note, { force: true });
        await browser.close().catch(() => undefined);
        if (process.platform === 'win32') {
            try {
                execSync(\`taskkill /pid \${live.pid} /T /F\`, { stdio: 'ignore' });
            } catch { /* it had already stopped */ }
        } else live.kill();
        process.exit(0);
    };

    let turn = Promise.resolve();
    const answering = createServer((request, response) => {
        const wanted = new URL(request.url, 'http://workbench');
        const answer = text => {
            response.writeHead(200, { 'content-type': 'text/plain; charset=utf-8' });
            response.end(text);
        };
        if (wanted.pathname === '/open') return answer('open');
        if (wanted.pathname === '/close') {
            answer('the workbench is closed');
            return void shut();
        }
        // A page that never answers is closed after thirty seconds, so one stuck look does not hold up the next.
        turn = turn.then(async () => {
            const doing = { what: 'starting', key: undefined };
            let late;
            const slow = new Promise(done => { late = setTimeout(done, 30000, null); });
            const found = await Promise.race([look(wanted.searchParams, doing).catch(error => \`the look failed while \${doing.what}: \${error.message}\`), slow]);
            clearTimeout(late);
            if (found !== null) return found;
            const stuck = tabs.get(doing.key);
            tabs.delete(doing.key);
            stuck?.page.close().catch(() => undefined);
            return \`no answer in thirty seconds while \${doing.what}; that page is closed, and the next look opens it again\`;
        }).then(answer);
    });
    answering.listen(0, '127.0.0.1', () => {
        writeFileSync(note, JSON.stringify({ port: answering.address().port, site }));
        console.log(\`the library is live at \${site}\`);
        console.log('look at a book with: look <its address>');
    });
    process.on('SIGINT', shut);
    process.on('SIGTERM', shut);
};

if (verb === undefined) await open();
else if (verb === 'look' || verb === 'close') {
    const wanted = new URLSearchParams();
    if (verb === 'look') wanted.set('book', words[0] ?? '');
    for (const word of words.slice(1)) {
        const cut = word.indexOf('=');
        if (cut === -1) wanted.append(word, '1');
        else wanted.append(word.slice(0, cut), word.slice(cut + 1));
    }
    console.log(await asked(verb === 'look' ? \`look?\${wanted}\` : 'close') ?? 'no workbench is open; open one by running this file with nothing after it');
} else console.log('open the workbench with nothing after the file; then look <a book\\'s address>, or close');
`})})]})]}),"DevelopingALibrary6"),z=j(p),M=s(()=>e.jsxs(z,{children:[S(),T(),D(),A(),I(),L(),R(),C(),W()]}),"book");export{M as book};
