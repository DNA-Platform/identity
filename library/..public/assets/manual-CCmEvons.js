var m=Object.defineProperty;var a=(f,g)=>m(f,"name",{value:g,configurable:!0});import{j as e,C as r,d as w,T as h,A as b,S as y,i as k,P as p,k as s,H as o,h as n,l as i,W as l,M as t,m as d,L as u,v as c,b as x}from"./index-BbAnYces.js";import{d as $}from"./.book-DuTpRAU_.js";import{S as v}from"./.synopsis-BBkb46EO.js";const j=a(()=>e.jsxs(r,{children:[e.jsx(w,{}),e.jsx(h,{children:"[Dougs Reference Manual](/dougs-reference-manual/)"}),e.jsx(b,{children:"[The Librarian](/dougs-story/)"}),e.jsx(y,{children:"[The Library](/dougs-library/)"})]}),"Cover"),T=a(()=>e.jsxs(r,{children:[e.jsx(k,{}),e.jsxs(h,{children:[e.jsx(p,{}),"[Table of Contents](/dougs-reference-manual/#table-of-contents)"]}),e.jsxs(s,{children:[e.jsx(o,{children:"What every book is"}),e.jsx(n,{children:e.jsx(i,{children:"[The Book](/dougs-reference-manual/#the-book)"})}),e.jsx(n,{children:e.jsx(i,{children:"[The Listing](/dougs-reference-manual/#the-listing)"})}),e.jsx(n,{children:e.jsx(i,{children:"[The Theme](/dougs-reference-manual/#the-theme)"})}),e.jsx(n,{children:e.jsx(i,{children:"[The Author and the Subject](/dougs-reference-manual/#the-author-and-the-subject)"})}),e.jsxs(n,{children:[e.jsx(p,{}),e.jsx(l,{children:e.jsx(i,{children:"[Dougs Reference Manual](/dougs-reference-manual/)"})}),e.jsx(l,{children:e.jsx(i,{children:"[Synopsis](/dougs-reference-manual/#synopsis)"})}),e.jsx(l,{children:e.jsx(i,{children:"[Table of Contents](/dougs-reference-manual/#table-of-contents)"})})]})]}),e.jsxs(s,{children:[e.jsx(o,{children:"What a chapter may carry"}),e.jsx(n,{children:e.jsx(i,{children:"[The Date](/dougs-reference-manual/#the-date)"})})]}),e.jsxs(s,{children:[e.jsx(o,{children:"How a book is arranged"}),e.jsx(n,{children:e.jsx(i,{children:"[The Switch](/dougs-reference-manual/#the-switch)"})}),e.jsx(n,{children:e.jsx(i,{children:"[The Outline](/dougs-reference-manual/#the-outline)"})}),e.jsx(n,{children:e.jsx(i,{children:"[The Pages](/dougs-reference-manual/#the-pages)"})}),e.jsx(n,{children:e.jsx(i,{children:"[The Sidebar](/dougs-reference-manual/#the-sidebar)"})}),e.jsx(n,{children:e.jsx(i,{children:"[The Spread](/dougs-reference-manual/#the-spread)"})})]}),e.jsxs(s,{children:[e.jsx(o,{children:"Making the library"}),e.jsx(n,{children:e.jsx(i,{children:"[Initializing a Library](/dougs-reference-manual/#initializing-a-library)"})}),e.jsx(n,{children:e.jsx(i,{children:"[Developing a Library](/dougs-reference-manual/#developing-a-library)"})})]})]}),"Table"),S=a(()=>e.jsxs(r,{children:[e.jsx(h,{children:"[The Book](/dougs-reference-manual/#the-book)"}),e.jsxs(s,{children:[e.jsx(o,{children:"What a book is here"}),e.jsx(n,{children:"Every book in this library extends one class, so what a book is here is said once. A book of mine holds chapters and nothing else, and only an ordinary chapter appends a file. The class says both in its specification, and the bind holds every book to it."}),e.jsxs(n,{children:["Left to itself, the class writes the chapters down the page in the order of their files. Under the cover it draws ",e.jsx(t,{children:"[who the book is by and what it is filed under](/dougs-reference-manual/#the-author-and-the-subject)"}),", and ",e.jsx(t,{children:"[the switch](/dougs-reference-manual/#the-switch)"}),". A chapter may append a file kept beside it, and under each chapter the class prints the files it appends, each as ",e.jsx(t,{children:"[a listing](/dougs-reference-manual/#the-listing)"}),"."]}),e.jsxs(n,{children:["A book that wants its parts somewhere else on the screen is a class under this one, and writes them there. The class gives it what it needs for that. It can ask for its chapters. Those are the ordinary ones: the framework puts a class on every chapter and takes it off a cover, a synopsis and a table of contents, and my book reads that class. It can ask which chapter is open: the one the address names, or the one that holds the place it names. And it can draw ",e.jsx(t,{children:"[a page](/dougs-reference-manual/#the-pages)"})," for each: the chapter, the files it appends, and whether it is the open one. ",e.jsx(t,{children:"[The sidebar](/dougs-reference-manual/#the-sidebar)"})," is one such book, and the others are documented in the books they lay out."]}),e.jsxs(n,{children:["This manual's book file is where every other book takes the class from. And ",e.jsx(t,{children:"[the theme](/dougs-reference-manual/#the-theme)"})," is registered on the class, once, so every book gets it."]})]}),e.jsx(d,{identifier:"code",type:".tsx",children:`import { Fragment, ReactNode } from 'react';
import { $, $check } from '@dna-platform/chemistry';
import { $Append, $Book, $Chapter, $Composition, $Section, BookSpecification, Theme, specify } from '@dna-platform/public';
import { Listing as listing } from './2-the-listing~code.tsx';
import { DougsTheme } from './3-the-theme~code.tsx';
import { Outlined as outlined } from './7-the-outline~code.tsx';
import { Byline as byline, FiledUnder as filedUnder } from './8-the-author-and-the-subject~code.tsx';
import { Choice as choice } from './9-the-switch~code.tsx';
import { Paged as paged } from './12-the-pages~code.tsx';

export class $DougsBook extends $Book {
    specification = new DougsBookSpecification();
    get chapters(): $Chapter[] {
        return this.text.find($Chapter).filter(chapter => [...chapter.classes].includes('pd-canonical'));
    }
    get open(): $Chapter | undefined {
        const place = this.$bookmark;
        if (place === undefined) return undefined;
        return this.chapters.find(chapter => chapter.mention?.identifier === place
            || this.sections(chapter).some(section => section.mention?.identifier === place));
    }

    override write(): ReactNode {
        return this.text.find($Chapter).map((chapter, index) => {
            const Chapter = $(chapter);
            return (
                <Fragment key={index}>
                    <Chapter />
                    {chapter === this.cover && this.byline()}
                    {chapter === this.cover && this.filed()}
                    {chapter === this.cover && this.choices()}
                    {this.listings(chapter)}
                </Fragment>
            );
        });
    }

    byline(): ReactNode {
        const Byline = $(byline);
        return (
            <Byline chapter={this.cover} />
        );
    }

    filed(): ReactNode {
        const FiledUnder = $(filedUnder);
        return (
            <FiledUnder chapter={this.cover} />
        );
    }

    choices(): ReactNode {
        const Choice = $(choice);
        return (
            <Choice
                chapter={this.cover}
                of={outlined}
            >
                outline
            </Choice>
        );
    }

    pages(): ReactNode {
        return this.chapters.map((chapter, index) => {
            const Chapter = $(chapter);
            return (
                <div
                    key={index}
                    className={chapter === this.open ? 'pd-page pd-open' : 'pd-page'}
                >
                    <div className="pd-words">
                        <Chapter />
                    </div>
                    <div className="pd-files">
                        {this.listings(chapter)}
                    </div>
                </div>
            );
        });
    }

    listings(chapter: $Chapter): ReactNode {
        const Listing = $(listing);
        return chapter.annotations.find($Append).map((append, index) => (
            <Listing
                key={index}
                chapter={chapter}
                identifier={append.$identifier}
                type={append.$type}
            />
        ));
    }

    sections(composition: $Composition): $Section[] {
        return composition.text.find($Section).flatMap(section => [section, ...this.sections(section)]);
    }

    protected override $Define(): void {
        super.$Define();
        const Paged = $(paged);
        this.annotations.add(this,
            <Paged />
        );
    }
}

export class DougsBookSpecification extends BookSpecification {
    @specify('a book of this library holds only chapters')
    $holdsOnlyChapters(book: $DougsBook): void {
        $check([...book.text].every(chemical => chemical instanceof $Chapter),
            'a book of this library holds only chapters, and this one holds something else');
    }

    @specify('only an ordinary chapter appends a file')
    $onlyAChapterAppends(book: $DougsBook): void {
        $check(book.text.find($Chapter).every(chapter => book.chapters.includes(chapter) || !chapter.is($Append)),
            'only an ordinary chapter appends a file, and here a cover, a synopsis or a table of contents appends one');
    }
}

export const DougsBook = $($DougsBook);
$(DougsBook, Theme)(DougsTheme);
`})]}),"TheBook1"),A=a(()=>e.jsxs(r,{children:[e.jsx(h,{children:"[The Listing](/dougs-reference-manual/#the-listing)"}),e.jsxs(s,{children:[e.jsx(o,{children:"A chapter and its file"}),e.jsx(n,{children:"A chapter that is about a part of this library keeps the part's file beside it, and appends it. The words say what the part is and how I use it. The file is the part."}),e.jsxs(n,{children:["A listing is how a book shows one such file: the name it was appended under, and under that the file as it is on disk. ",e.jsx(t,{children:"[The book](/dougs-reference-manual/#the-book)"})," decides where a listing goes. Left to itself it prints each one under its chapter."]}),e.jsx(n,{children:"This manual's chapters are of that kind. So are the chapters at the back of any other book, where the code that builds that book is kept, which is why the back of a book reads like a page of this manual."})]}),e.jsx(d,{identifier:"code",type:".tsx",children:`import { ReactNode } from 'react';
import { $ } from '@dna-platform/chemistry';
import { $Paragraph, Code as code, Word as word } from '@dna-platform/public';

export class $Listing extends $Paragraph {
    $identifier = '';
    $type = '';
    get name(): string { return \`\${this.$identifier}\${this.$type}\`; }

    override write(): ReactNode {
        const Word = $(word);
        const Code = $(code);
        return (
            <>
                <Word>
                    {this.name}
                </Word>
                <Code
                    identifier={this.$identifier}
                    type={this.$type}
                />
            </>
        );
    }

    protected override $Define(): void {
        super.$Define();
        this.classes.add(this, 'pd-listing');
    }
}

export const Listing = $($Listing);
`})]}),"TheListing2"),D=a(()=>e.jsxs(r,{children:[e.jsx(h,{children:"[The Theme](/dougs-reference-manual/#the-theme)"}),e.jsxs(s,{children:[e.jsx(o,{children:"What the theme is"}),e.jsx(n,{children:"The theme is where this library keeps its values, and the one styled component every book is drawn inside. The framework's own theme has no values and no rules, so everything here is mine."}),e.jsx(n,{children:"It is small on purpose. No design is built yet, so it holds four values: a measure, a space, how wide a side is, which is also the least width of a book on a shelf, and how narrow a screen is before a book stops setting things side by side. And it holds only the rules a plain page needs: the page keeps the space around it, a chapter keeps to the measure, a chapter, a section and a paragraph each keep the space above and below, a picture is never wider than its place, and a listing scrolls sideways when its lines are long. It grows as each design is built, and every value added to it is one I chose."}),e.jsx(n,{children:"The component is made of parts, each a method that returns some rules, so a book can change one part and keep the rest."})]}),e.jsx(d,{identifier:"code",type:".tsx",children:`import { ElementType } from 'react';
import { css, RuleSet } from 'styled-components';
import { $, selection } from '@dna-platform/chemistry';
import { $Theme } from '@dna-platform/public';

declare module 'styled-components' {
    export interface DefaultTheme extends $DougsTheme {}
}

export class $DougsTheme extends $Theme {
    measure = '44rem';
    space = '1.5rem';
    side = '16rem';
    narrow = '56rem';
    style: ElementType = selection.div\`\${this.parts()}\`;

    protected parts(): RuleSet[] {
        return [this.page(), this.writing(), this.figures()];
    }

    protected page(): RuleSet {
        return css\`
            padding: \${({ theme }) => theme.space};
        \`;
    }

    protected writing(): RuleSet {
        return css\`
            .pd-chapter, .pd-section, .pd-paragraph { margin-block: \${({ theme }) => theme.space}; }
            .pd-chapter { max-width: \${({ theme }) => theme.measure}; }
        \`;
    }

    protected figures(): RuleSet {
        return css\`
            .pd-image img { display: block; max-width: 100%; height: auto; }
            .pd-code { overflow-x: auto; }
        \`;
    }
}

export const DougsTheme = $($DougsTheme);
`})]}),"TheTheme3"),C=a(()=>e.jsxs(r,{children:[e.jsx(h,{children:"[The Date](/dougs-reference-manual/#the-date)"}),e.jsxs(s,{children:[e.jsx(o,{children:"What a dated chapter is"}),e.jsx(n,{children:"A chapter of mine may say when it is from. It says so once: the words I want read, and the day a machine can read, with the time where I know it. The date itself is the framework's own. What this adds is a way for a chapter to carry one, so that a book can ask a chapter for its date, and every dated chapter can be found."}),e.jsxs(n,{children:["The chapter draws its date at its foot. The chapters of ",e.jsx(t,{children:"[Dougs Story](/dougs-story/)"})," are dated, and no book of mine sorts by date yet."]})]}),e.jsx(d,{identifier:"code",type:".tsx",children:`import { ReactNode } from 'react';
import { $, $check } from '@dna-platform/chemistry';
import { $Annotation, $Chapter, $Date, $Writing, AnnotationSpecification, specify } from '@dna-platform/public';

export class $Dated extends $Annotation {
    specification = new DatedSpecification();
    get date(): $Date | undefined { return this.text.find($Date)[0]; }

    override defines(writing: $Writing): void {
        writing.classes.add(this, 'pa-dated');
    }

    override erase(writing: $Writing): void {
        writing.classes.revert(this);
    }

    override note(): ReactNode {
        const Date = $(this.date!);
        return (
            <Date />
        );
    }
}

export class DatedSpecification extends AnnotationSpecification {
    @specify('dated is said of a chapter')
    $saidOfAChapter(writing: $Writing): void {
        $check(writing instanceof $Chapter, 'dated is said of a chapter, and this is not one');
    }

    @specify('a chapter is dated once')
    $datedOnce(writing: $Writing): void {
        $check(writing.annotations.containsOne($Dated), 'a chapter is dated once, and this one is dated more than once');
    }

    @specify('a dated chapter is given one date')
    $givenOneDate(writing: $Writing): void {
        $check(writing.annotations.expressed($Dated)?.text.find($Date).length === 1,
            'a dated chapter is given one date, and this one is given none or more than one');
    }
}

export const Dated = $($Dated);
`})]}),"TheDate4"),I=a(()=>e.jsxs(r,{children:[e.jsx(h,{children:"[Initializing a Library](/dougs-reference-manual/#initializing-a-library)"}),e.jsxs(s,{children:[e.jsx(o,{children:"What a library needs to begin"}),e.jsxs(n,{children:["A library is books and nothing else, and it begins with three. The library's own catalogue, which is the top: every other book is filed under it, and it is filed under what it is about, which is itself. The librarian's autobiography, the one book that is by its own subject, which grounds who may author anything here. And a reference manual, this book, where the reusable parts of the library are kept beside the chapters that say what they are. Each is a folder, and the folders here are ",e.jsx(t,{children:"[Dougs Library](/dougs-library/)"})," in a folder named as a library catalogue, ",e.jsx(t,{children:"[Dougs Story](/dougs-story/)"})," in one named as a subject, and this manual in one named as a subject too. A fourth is beside them, ",e.jsx(t,{children:"[Dougs Design](/dougs-design/)"}),", where the design of the library is kept. The compiler reads no folder name; the dots are a convention kept for the person reading the tree."]})]}),e.jsxs(s,{children:[e.jsx(o,{children:"What a book is made of"}),e.jsx(n,{children:"A folder is a book when it holds a book file, and a book holds four files before any chapter:"}),e.jsxs(n,{children:[e.jsx(u,{}),e.jsx(c,{children:"a book file, which exports the class the book is, taken from this manual's book file;"}),e.jsx(c,{children:"a cover, which says the book's title, who wrote it, where it is filed and what it is about;"}),e.jsx(c,{children:"a synopsis, which says what the book is in a paragraph, and is what a catalogue's row refers to;"}),e.jsx(c,{children:"a table of contents, which answers for the chapters the book holds and for the books it catalogues."})]}),e.jsx(n,{children:"The compiler holds the table to its word: it must link to every chapter of its book, itself among them, and to every book filed under it, or the bind refuses."}),e.jsx(n,{children:"Then numbered chapters, each a file whose first words are its title. A file beside a chapter, named for it with an identifier and a type, is the chapter's to print or to import, and the compiler refuses one the chapter does not use."})]}),e.jsxs(s,{children:[e.jsx(o,{children:"What a cover says"}),e.jsx(n,{children:"Everything a cover says is said in the notation, whatever element holds it. Two brackets around a name is a title. A second title form on a cover is what the book is about, the name of the subject it represents, which need not be the book's name: this library is called Dougs Library and is about The Library, and the autobiography is about The Librarian, so an author is written as The Librarian and a book is filed under The Library. One star before the brackets says who wrote the book; two say which catalogue it is filed under. The top says it is filed under itself, and the compiler requires that one book here does so, or there is no library."})]}),e.jsxs(s,{children:[e.jsx(o,{children:"The face, and the bind"}),e.jsx(n,{children:"The library publishes to a face, a folder beside the books that holds the binding and the site it builds. The face is made once, by running the master binding's copy script pointed at the library's folder; it names the face with as many dots as put it above every book, and writes a configuration naming where the copy came from, so that syncing brings the master in before every build. The configuration also names the root book, the title of the site, and the stylesheets and fonts a page loads. Then the bind: it reads every book, checks the library is well-formed, and writes one page per book. Every fault it raises is a sentence a librarian could say about the library without knowing the compiler exists, no title, not listed, may not author, and the library is initialized when it raises none."}),e.jsx(n,{children:"The bind is run in the face's binding folder, as npm run bind, and the site it builds is served from that folder with npx vite preview. The face keeps the pictures that stood beside a chapter after they are taken out of the book, until that book's folder in the face is cleared by hand."}),e.jsxs(n,{children:["The bind publishes the library. It is not how I look at the library while I am writing it, and that is said in ",e.jsx(t,{children:"[Developing a Library](/dougs-reference-manual/#developing-a-library)"}),"."]})]})]}),"InitializingALibrary5"),R=a(()=>e.jsxs(r,{children:[e.jsx(h,{children:"[Developing a Library](/dougs-reference-manual/#developing-a-library)"}),e.jsxs(s,{children:[e.jsx(o,{children:"The page stays open"}),e.jsx(n,{children:"I develop this library with its pages open. The binder serves the library live, straight from the files I am writing, and when I save one the open page changes in place: a sentence in a chapter in a quarter of a second, a rule in a theme in about half of one. Nothing is bound and the page is not loaded again. If what I saved breaks the library, the page says so in the compiler's own sentence, and the sentence goes when I mend the file."}),e.jsx(n,{children:"This is the only way I look at the library while I am working on it. Work on how a page looks needs its answer at once, and a way of working that cannot give one has failed at what it is for."})]}),e.jsxs(s,{children:[e.jsx(o,{children:"The workbench"}),e.jsx(n,{children:"The workbench is the tool I do this with. Opened once, it starts the live site and keeps a browser open on it. After that I ask it for a look at any book. It waits for my last save to reach the page, photographs the page at a desk's width or a phone's, and tells me:"}),e.jsxs(n,{children:[e.jsx(u,{}),e.jsx(c,{children:"what the page says, or any part of it;"}),e.jsx(c,{children:"what a rule computes to on an element, and where the element is;"}),e.jsx(c,{children:"how many things run past the right edge of the screen;"}),e.jsx(c,{children:"anything that went wrong on the page, and the compiler's refusal if there is one."})]}),e.jsxs(n,{children:["A look takes under a second, because the browser is already open and the page is already drawn. It can press something first, load the page again as a reader arriving would, and say which of the rules that name a thing wins. What the workbench does for a book is what ",e.jsx(t,{children:"[the camera](/dougs-design/#the-camera)"})," does for a concept, and it is kept here for the same reason the camera is kept there, which is told in ",e.jsx(t,{children:"[Closure](/dougs-story/#closure)"}),"."]})]}),e.jsxs(s,{children:[e.jsx(o,{children:"When I bind"}),e.jsxs(n,{children:["The bind is how the library is published, and it is not how I look at it. What it does is said in ",e.jsx(t,{children:"[Initializing a Library](/dougs-reference-manual/#initializing-a-library)"}),". It takes seconds where a save takes none, so I bind when a piece of work is done."]}),e.jsx(n,{children:"The bind checks three things the live site does not: each book against its own rules, each page as it is printed for a reader who arrives before the code does, and every link against the page it leads to. So my last look at finished work is at the site the bind built, loaded afresh, and the workbench takes that look too."})]}),e.jsx(d,{identifier:"workbench",type:".mjs",children:`// The workbench: the library served live from its sources, a browser kept open on it, and a way to ask that
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
//     box=<selector>                 print where each match is
//     tree=<selector>|<depth>        print the elements under the first match, each with its classes and its size
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
    if (binding === undefined) throw new Error(\`no folder with a binding is in \${library}\`);
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

    // The live site sends a page with nothing printed on it and draws the book once its code arrives, and the
    // built site prints the page and takes it up a moment later. So a page just loaded is waited on until the
    // book's code has taken hold of it and it says something, or until the compiler speaks.
    const drawn = page => page.waitForFunction(() => {
        if (document.querySelector('vite-error-overlay') !== null) return true;
        const root = document.getElementById('root');
        const taken = root !== null && Object.keys(root).some(key => key.startsWith('__reactContainer'));
        return taken && document.body.innerText.trim() !== '';
    }, { timeout: 20000, polling: 50 }).catch(() => undefined);

    // A page behind another draws nothing and cannot be photographed, so the one looked at is brought forward.
    const tab = async (address, device, fresh) => {
        const key = \`\${device} \${address}\`;
        const held = tabs.get(key);
        if (held !== undefined && !held.page.isClosed()) {
            await held.page.bringToFront();
            if (fresh) {
                await held.page.goto('about:blank');
                await held.page.goto(address, { waitUntil: 'load' });
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
        // A book turns to the place its address names a moment after it is drawn, so that place is waited for.
        if (mark !== undefined) {
            doing.what = \`waiting for the book to turn to \${mark}\`;
            await page.waitForFunction(to => (document.getElementById(to)?.getBoundingClientRect().height ?? 0) > 0, { timeout: 5000, polling: 50 }, mark).catch(() => undefined);
        }
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
            says.push(...(boxes.length === 0 ? [\`nothing matches \${selector}\`] : boxes.map(text => \`\${selector} is at \${text}\`)));
        }

        for (const pair of wanted.getAll('tree')) {
            const [selector, deep = '3'] = pair.split('|');
            const drawn = await page.$eval(selector, (one, depth) => {
                const lines = [];
                const walk = (element, level) => {
                    const box = element.getBoundingClientRect();
                    const classes = [...element.classList].map(name => \`.\${name}\`).join('');
                    lines.push(\`\${'  '.repeat(level)}\${element.tagName.toLowerCase()}\${element.id === '' ? '' : \`#\${element.id}\`}\${classes} \${Math.round(box.width)}×\${Math.round(box.height)}\`);
                    if (level < depth)
                        for (const child of element.children)
                            walk(child, level + 1);
                };
                walk(one, 0);
                return lines;
            }, Number(deep)).catch(() => [\`nothing matches \${selector}\`]);
            says.push(...drawn);
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
        // An element is photographed by clipping the page to where it is. Asking the element to photograph
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
`})]}),"DevelopingALibrary6"),W=a(()=>e.jsxs(r,{children:[e.jsx(h,{children:"[The Outline](/dougs-reference-manual/#the-outline)"}),e.jsxs(s,{children:[e.jsx(o,{children:"What the outline shows"}),e.jsx(n,{children:"The outline draws a dashed line around every chapter, every section, every listing, and every paragraph that something has been said of. Over each it writes the classes that part carries. A class is put on a part by what the part is, or by something said of it. A rule finds the part by its class. The code mostly finds it by asking what was said of it. So the outline shows what a design has to work with."}),e.jsx(n,{children:"It is there to check the structure of a book before any design is built on it. A cover says it is a cover. A chapter that represents another book says it is a synopsis. A dated chapter says it is dated. If a chapter does not say what I expect, the structure is wrong, and no design will fix that."}),e.jsxs(n,{children:["It is off until I press it. It is the first choice of ",e.jsx(t,{children:"[the switch](/dougs-reference-manual/#the-switch)"}),", and every book carries it."]})]}),e.jsx(d,{identifier:"code",type:".tsx",children:`import { $, $check, selection } from '@dna-platform/chemistry';
import { $Book, $Format, $Writing, AnnotationSpecification, specify } from '@dna-platform/public';

export class $Outlined extends $Format {
    specification = new OutlinedSpecification();
    themeProvider = true;
    style = selection.div\`
        .pd-chapter, .pd-section, .pd-listing, .pd-paragraph[class*='pa-'] {
            outline: thin dashed currentColor;
            outline-offset: calc(\${({ theme }) => theme.space} / 4);
        }
        .pd-chapter::before, .pd-section::before, .pd-listing::before, .pd-paragraph[class*='pa-']::before {
            content: attr(class);
            display: block;
            font-family: monospace;
            font-size: smaller;
        }
    \`;

    override defines(writing: $Writing): void {
        super.defines(writing);
        writing.classes.add(this, 'pa-outlined');
    }

    override erase(writing: $Writing): void {
        super.erase(writing);
        writing.classes.revert(this);
    }
}

export class OutlinedSpecification extends AnnotationSpecification {
    @specify('outlined is said of a book')
    $saidOfABook(writing: $Writing): void {
        $check(writing instanceof $Book, 'outlined is said of a book, and this is not one');
    }
}

export const Outlined = $($Outlined);
`})]}),"TheOutline7"),B=a(()=>e.jsxs(r,{children:[e.jsx(h,{children:"[The Author and the Subject](/dougs-reference-manual/#the-author-and-the-subject)"}),e.jsxs(s,{children:[e.jsx(o,{children:"Two links on every book"}),e.jsx(n,{children:"Every cover in this library names who wrote the book and what it is filed under. The compiler refuses a book that leaves out either. But naming them draws nothing: the framework keeps both on the cover as facts and leaves it to a library to show them."}),e.jsxs(n,{children:["So ",e.jsx(t,{children:"[the book](/dougs-reference-manual/#the-book)"})," draws them, on every book, as two short lines. One says who the book is by and leads to that author's own book. The other says what the book is filed under and leads to the book that catalogues it. They are the way out of any book and into the rest of the library, and a book of mine is never drawn without them."]}),e.jsx(n,{children:"Each is a paragraph of its own, so a book that arranges its parts can put the two in different places."})]}),e.jsx(d,{identifier:"code",type:".tsx",children:`import { ReactNode } from 'react';
import { $ } from '@dna-platform/chemistry';
import { $Paragraph, Reference as reference, Word as word } from '@dna-platform/public';

export class $Byline extends $Paragraph {
    override write(): ReactNode {
        const author = this.book!.author!;
        const Word = $(word);
        const Reference = $(reference);
        return (
            <>
                by <Word>
                    <Reference>{author.means!.identifier}</Reference>
                    {author.name}
                </Word>
            </>
        );
    }

    protected override $Define(): void {
        super.$Define();
        this.classes.add(this, 'pd-byline');
    }
}

export class $FiledUnder extends $Paragraph {
    override write(): ReactNode {
        const subject = this.book!.subject!;
        const Word = $(word);
        const Reference = $(reference);
        return (
            <>
                filed under <Word>
                    <Reference>{subject.means!.identifier}</Reference>
                    {subject.name}
                </Word>
            </>
        );
    }

    protected override $Define(): void {
        super.$Define();
        this.classes.add(this, 'pd-filed-under');
    }
}

export const Byline = $($Byline);
export const FiledUnder = $($FiledUnder);
`})]}),"TheAuthorAndTheSubject8"),P=a(()=>e.jsxs(r,{children:[e.jsx(h,{children:"[The Switch](/dougs-reference-manual/#the-switch)"}),e.jsxs(s,{children:[e.jsx(o,{children:"Something a reader presses"}),e.jsx(n,{children:"A choice is a word drawn as a button. It is given one thing that can be said of a book. Pressed, it says that thing of the book I am reading. Pressed again, it takes it back. The button itself reports whether the thing is said, by asking the book."}),e.jsx(n,{children:"Nothing is rebuilt when I press one. The book I am reading is given the thing in front of what its class already says, and draws again. So a view I can switch to is written the same way as a view a book always has, and what a book shows before I press anything is said once, by its class. A choice only adds to what the class says. It cannot take away something the class says itself."}),e.jsxs(n,{children:["The first choice every book carries is ",e.jsx(t,{children:"[the outline](/dougs-reference-manual/#the-outline)"}),". ",e.jsx(t,{children:"[The book](/dougs-reference-manual/#the-book)"})," draws it, and a book that has more to choose from draws more."]})]}),e.jsx(d,{identifier:"code",type:".tsx",children:`import { ElementType, ReactNode } from 'react';
import { $, $Chemical } from '@dna-platform/chemistry';
import { $Annotation, $Word, Given } from '@dna-platform/public';

export class $Choice extends $Word {
    $of!: Given<$Annotation>;
    protected _button!: ElementType;
    get on(): boolean { return this.book!.is(this.$of); }

    $Choice(...chemicals: $Chemical[]) {
        this.$Writing(...chemicals);
        this._button = (props: { children?: ReactNode }) => (
            <button
                type="button"
                aria-pressed={this.on}
                onClick={() => this.press()}
                {...props}
            />
        );
        this.containers.replace(this, 'span', this._button);
    }

    press(): void {
        const book = this.book!;
        const given = [book.$is].flat();
        book.$is = this.on ? given.filter(each => each !== this.$of) : [this.$of, ...given];
    }

    protected override $Define(): void {
        super.$Define();
        this.classes.add(this, 'pd-choice');
    }
}

export const Choice = $($Choice);
`})]}),"TheSwitch9"),L=a(()=>e.jsxs(r,{children:[e.jsx(h,{children:"[The Sidebar](/dougs-reference-manual/#the-sidebar)"}),e.jsxs(s,{children:[e.jsx(o,{children:"A book read one chapter at a time"}),e.jsxs(n,{children:["Some of my books are for looking things up. Such a book keeps its cover and its table of contents at the side, and shows one chapter beside them. This manual is one, and ",e.jsx(t,{children:"[Dougs Design](/dougs-design/)"})," is another."]}),e.jsxs(n,{children:["It is two things. The first is a class of book. It writes the side, which holds ",e.jsx(t,{children:"[what the book is filed under, its cover and who it is by](/dougs-reference-manual/#the-author-and-the-subject)"}),", then ",e.jsx(t,{children:"[the switch](/dougs-reference-manual/#the-switch)"})," and the table of contents. Beside the side it writes a page for the synopsis and ",e.jsx(t,{children:"[a page](/dougs-reference-manual/#the-pages)"})," for each chapter. The page that is open is the chapter the address names, or the one that holds the place it names, and the synopsis when it names neither. Its specification says every chapter the book holds has one of those places, so nothing is ever left undrawn."]}),e.jsx(n,{children:"The second is the arrangement, which is said of the book: the side and the pages in two columns. On a narrow screen the side comes first and the page under it. Because the arrangement is said of the book and not written into it, another one can be said in its place."})]}),e.jsx(d,{identifier:"code",type:".tsx",children:`import { ReactNode } from 'react';
import { css, RuleSet } from 'styled-components';
import { $, $check } from '@dna-platform/chemistry';
import { $Chapter, $Writing, specify } from '@dna-platform/public';
import { $DougsBook, DougsBookSpecification } from './1-the-book~code.tsx';
import { $Paged, Paged } from './12-the-pages~code.tsx';

export class $SidebarBook extends $DougsBook {
    specification = new SidebarBookSpecification();

    override write(): ReactNode {
        const Cover = $(this.cover!);
        const Synopsis = $(this.synopsis!);
        const Table = $(this.table!);
        return (
            <>
                <div className="pd-side">
                    {this.filed()}
                    <Cover />
                    {this.byline()}
                    {this.choices()}
                    <Table />
                </div>
                <div className="pd-pages">
                    <div className={this.open === undefined ? 'pd-page pd-front pd-open' : 'pd-page pd-front'}>
                        <Synopsis />
                    </div>
                    {this.pages()}
                </div>
            </>
        );
    }
}

export class $Sidebar extends $Paged {
    override defines(writing: $Writing): void {
        super.defines(writing);
        writing.classes.add(this, 'pa-sidebar');
    }

    protected override parts(): RuleSet[] {
        return [...super.parts(), this.columns()];
    }

    protected columns(): RuleSet {
        return css\`
            .pd-book.pa-sidebar {
                display: grid;
                grid-template-columns: \${({ theme }) => theme.side} minmax(0, 1fr);
                column-gap: \${({ theme }) => theme.space};
                align-items: start;
            }
            @media (max-width: \${({ theme }) => theme.narrow}) {
                .pd-book.pa-sidebar { display: block; }
            }
        \`;
    }
}

export class SidebarBookSpecification extends DougsBookSpecification {
    @specify('a sidebar book has a place for every chapter it holds')
    $placesEveryChapter(book: $SidebarBook): void {
        const placed = [book.cover, book.synopsis, book.table, ...book.chapters];
        $check(book.text.find($Chapter).every(chapter => placed.includes(chapter)),
            'a sidebar book places its cover, its synopsis, its table of contents and its chapters, and this one holds a chapter that is none of them');
    }
}

export const SidebarBook = $($SidebarBook);
export const Sidebar = $($Sidebar);
$(SidebarBook, Paged)(Sidebar);
`})]}),"TheSidebar10"),N=a(()=>e.jsxs(r,{children:[e.jsx(h,{children:"[The Spread](/dougs-reference-manual/#the-spread)"}),e.jsxs(s,{children:[e.jsx(o,{children:"The words beside the file"}),e.jsxs(n,{children:["In this manual a chapter and its file are read together. The spread is ",e.jsx(t,{children:"[the sidebar](/dougs-reference-manual/#the-sidebar)"})," with one rule added: the open page is two columns, the words in one and the file in the other. On a narrow screen the file goes under the words."]}),e.jsx(n,{children:"This manual's book file says the spread is its sidebar. No other book has it yet."})]}),e.jsx(d,{identifier:"code",type:".tsx",children:`import { css, RuleSet } from 'styled-components';
import { $ } from '@dna-platform/chemistry';
import { $Writing } from '@dna-platform/public';
import { $Sidebar } from './10-the-sidebar~code.tsx';

export class $Spread extends $Sidebar {
    override defines(writing: $Writing): void {
        super.defines(writing);
        writing.classes.add(this, 'pa-spread');
    }

    protected override parts(): RuleSet[] {
        return [...super.parts(), this.spread()];
    }

    protected spread(): RuleSet {
        return css\`
            .pd-page.pd-open {
                display: grid;
                grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
                column-gap: \${({ theme }) => theme.space};
                align-items: start;
            }
            @media (max-width: \${({ theme }) => theme.narrow}) {
                .pd-page.pd-open { display: block; }
            }
        \`;
    }
}

export const Spread = $($Spread);
`})]}),"TheSpread11"),O=a(()=>e.jsxs(r,{children:[e.jsx(h,{children:"[The Pages](/dougs-reference-manual/#the-pages)"}),e.jsxs(s,{children:[e.jsx(o,{children:"One page open at a time"}),e.jsxs(n,{children:["A page is a chapter together with the files it appends. ",e.jsx(t,{children:"[The book](/dougs-reference-manual/#the-book)"})," draws one for each of its chapters, and says which one is open. Every page is in the document, so a link to any place in the book has somewhere to land."]}),e.jsxs(n,{children:["This is the rule that goes with them: a page that is not open is not shown. It is said of every book once, here. An arrangement of a book, such as ",e.jsx(t,{children:"[the sidebar](/dougs-reference-manual/#the-sidebar)"}),", is this with rules of its own added, and a book says which arrangement it has in one line."]})]}),e.jsx(d,{identifier:"code",type:".tsx",children:`import { ElementType } from 'react';
import { css, RuleSet } from 'styled-components';
import { $, $check, selection } from '@dna-platform/chemistry';
import { $Book, $Format, $Writing, AnnotationSpecification, specify } from '@dna-platform/public';

export class $Paged extends $Format {
    specification = new PagedSpecification();
    themeProvider = true;
    style: ElementType = selection.div\`\${this.parts()}\`;

    override defines(writing: $Writing): void {
        super.defines(writing);
        writing.classes.add(this, 'pa-paged');
    }

    override erase(writing: $Writing): void {
        super.erase(writing);
        writing.classes.revert(this);
    }

    protected parts(): RuleSet[] {
        return [this.paging()];
    }

    protected paging(): RuleSet {
        return css\`
            .pd-page:not(.pd-open) { display: none; }
        \`;
    }
}

export class PagedSpecification extends AnnotationSpecification {
    @specify('paged is said of a book')
    $saidOfABook(writing: $Writing): void {
        $check(writing instanceof $Book, 'paged is said of a book, and this is not one');
    }
}

export const Paged = $($Paged);
`})]}),"ThePages12"),E=x($),z=a(()=>e.jsxs(E,{children:[j(),v(),T(),S(),A(),D(),C(),I(),R(),W(),B(),P(),L(),N(),O()]}),"book");export{z as book};
