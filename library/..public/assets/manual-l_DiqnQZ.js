var x=Object.defineProperty;var s=(b,y)=>x(b,"name",{value:y,configurable:!0});import{j as e,C as o,b as k,c as h,A as $,S as v,P as u,h as n,H as a,g as t,i,W as m,M as r,k as d,L as w,r as p,$ as j}from"./index-hQSJOtq-.js";import{b as T,T as S,L as l,A as c}from"./10-the-table~code-HIvctq9u.js";import{S as A}from"./.synopsis-MwbryuhZ.js";const g=class g extends T{};s(g,"$TheManual");let f=g;const W=s(()=>e.jsxs(o,{children:[e.jsx(k,{}),e.jsx(h,{children:"[Dougs Reference Manual](/dougs-reference-manual/)"}),e.jsx($,{children:"[The Librarian](/dougs-story/)"}),e.jsx(v,{children:"[The Library](/dougs-library/)"})]}),"Cover"),C=s(()=>e.jsxs(o,{children:[e.jsx(S,{}),e.jsxs(h,{children:[e.jsx(u,{}),"[Table of Contents](/dougs-reference-manual/#table-of-contents)"]}),e.jsxs(n,{children:[e.jsx(a,{children:"The book and its frame"}),e.jsx(t,{children:e.jsx(i,{children:"[The Book](/dougs-reference-manual/#the-book)"})}),e.jsx(t,{children:e.jsx(i,{children:"[The Theme](/dougs-reference-manual/#the-theme)"})}),e.jsx(t,{children:e.jsx(i,{children:"[The Pages](/dougs-reference-manual/#the-pages)"})}),e.jsx(t,{children:e.jsx(i,{children:"[The Frames](/dougs-reference-manual/#the-frames)"})}),e.jsxs(t,{children:[e.jsx(u,{}),e.jsx(m,{children:e.jsx(i,{children:"[Dougs Reference Manual](/dougs-reference-manual/)"})}),e.jsx(m,{children:e.jsx(i,{children:"[Synopsis](/dougs-reference-manual/#synopsis)"})}),e.jsx(m,{children:e.jsx(i,{children:"[Table of Contents](/dougs-reference-manual/#table-of-contents)"})})]})]}),e.jsxs(n,{children:[e.jsx(a,{children:"What every book has"}),e.jsx(t,{children:e.jsx(i,{children:"[The Cover](/dougs-reference-manual/#the-cover)"})}),e.jsx(t,{children:e.jsx(i,{children:"[The Table](/dougs-reference-manual/#the-table)"})})]}),e.jsxs(n,{children:[e.jsx(a,{children:"What a chapter may carry"}),e.jsx(t,{children:e.jsx(i,{children:"[The Listing](/dougs-reference-manual/#the-listing)"})}),e.jsx(t,{children:e.jsx(i,{children:"[The Date](/dougs-reference-manual/#the-date)"})}),e.jsx(t,{children:e.jsx(i,{children:"[The Shelfmark](/dougs-reference-manual/#the-shelfmark)"})})]}),e.jsxs(n,{children:[e.jsx(a,{children:"Making the library"}),e.jsx(t,{children:e.jsx(i,{children:"[Initializing a Library](/dougs-reference-manual/#initializing-a-library)"})}),e.jsx(t,{children:e.jsx(i,{children:"[Developing a Library](/dougs-reference-manual/#developing-a-library)"})})]})]}),"Table"),L=s(()=>e.jsxs(o,{children:[e.jsx(h,{children:"[The Book](/dougs-reference-manual/#the-book)"}),e.jsxs(n,{children:[e.jsx(a,{children:"What a book is here"}),e.jsxs(t,{children:["Every book in this library extends the library's own book class, so what a book is here is decided once. The class knows the parts every book has. The cover, the table of contents and ",e.jsx(r,{children:"[the pages](/dougs-reference-manual/#the-pages)"})," are chapters, and it finds each by what it is. The library's name, which is a way home from every book, ",e.jsx(r,{children:"[the lines that go with a cover](/dougs-reference-manual/#the-cover)"})," and the switch it draws itself. By itself it writes them down the page in that order. A class under it places them on the screen, and that is ",e.jsx(r,{children:"[a frame](/dougs-reference-manual/#the-frames)"}),"."]}),e.jsxs(t,{children:["Its file is also where the theme is registered for the framework's on the library's book class: every book of the library is a subclass and inherits the registration, so the Theme the framework gives every book is ",e.jsx(r,{children:"[The Theme](/dougs-reference-manual/#the-theme)"}),"."]}),e.jsx(t,{children:"The file also holds the switch. A book says which views it offers, a spread, a paper, a way of showing its table, and the switch draws them as words to press. A press gives the book that view from outside, in front of its own. The view in front turns off the others of its kind, so pressing another is all it takes to change back. No chapter is rewritten for a view."})]}),e.jsxs(n,{children:[e.jsx(l,{}),e.jsx(a,{children:"The book's file"}),e.jsx(t,{children:"The file stands beside this chapter and is printed as it is on disk. The manual's book file is the door: it takes the class from here, and every other book of the library imports it from there."}),e.jsx(t,{children:e.jsx(d,{identifier:"code"})})]}),e.jsx(c,{identifier:"code",type:".tsx",children:`import { ReactNode } from 'react';
import { $ } from '@dna-platform/chemistry';
import { $Annotation, $Append, $Book, $Chapter, $Paragraph, Means as means, Theme, reflection } from '@dna-platform/public';
import type { Given } from '@dna-platform/public';
import { DougsTheme } from './2-the-theme~code.tsx';
import { $Paged, Paged as paged } from './7-the-pages~code.tsx';
import { Byline as byline, Filed as filed } from './9-the-cover~code.tsx';
import { CodeForward as codeForward, WordsForward as wordsForward } from './11-the-listing~code.tsx';

export class $DougsLibrary extends $Book {
    get pages(): $Chapter[] { return this.annotations.expressed($Paged)?.pages ?? []; }

    get views(): Given<$Annotation>[][] {
        const WordsForward = $(wordsForward);
        const CodeForward = $(codeForward);
        return this.annotations.expressed($Paged)?.open?.is($Append) === true ? [[WordsForward, CodeForward]] : [];
    }

    override write(): ReactNode {
        return (
            <>
                {this.library()}
                {this.place(this.cover)}
                {this.filed()}
                {this.byline()}
                {this.place(this.table)}
                {this.place(...this.pages)}
                {this.controls()}
            </>
        );
    }

    place(...chapters: ($Chapter | undefined)[]): ReactNode {
        return chapters.map((chapter, index) => {
            if (chapter === undefined) return null;
            const Chapter = $(chapter);
            return (
                <Chapter key={index} />
            );
        });
    }

    library(): ReactNode {
        const LibraryTitle = $(libraryTitle);
        return (
            <LibraryTitle chapter={this.cover} />
        );
    }

    filed(): ReactNode {
        const Filed = $(filed);
        return (
            <Filed chapter={this.cover} />
        );
    }

    byline(): ReactNode {
        const Byline = $(byline);
        return (
            <Byline chapter={this.cover} />
        );
    }

    controls(): ReactNode {
        const Switch = $(switching);
        return (
            <Switch chapter={this.cover} />
        );
    }

    protected override $Define(): void {
        super.$Define();
        const WordsForward = $(wordsForward);
        const Paged = $(paged);
        this.annotations.add(this,
            <WordsForward />,
            <Paged />
        );
    }
}

export class $LibraryTitle extends $Paragraph {
    override write(): ReactNode {
        const Means = $(means);
        return (
            <Means>$[[ Dougs Library ]]</Means>
        );
    }

    protected override $Define(): void {
        super.$Define();
        this.classes.add(this, 'pd-library-title');
    }
}

export class $Switch extends $Paragraph {
    get library(): $DougsLibrary | undefined {
        const book = this.book;
        return book instanceof $DougsLibrary ? book : undefined;
    }

    override write(): ReactNode {
        const library = this.library;
        if (library === undefined) return null;
        return (
            <>
                {library.views.map((views, index) => (
                    <span
                        key={index}
                        className="pd-views"
                    >
                        {views.map(view => (
                            <button
                                key={this.says(view)}
                                type="button"
                                className={view === this.shown(views) ? 'pd-view pa-shown' : 'pd-view'}
                                onClick={() => this.shows(view)}
                            >
                                {this.says(view)}
                            </button>
                        ))}
                    </span>
                ))}
            </>
        );
    }

    shown(views: Given<$Annotation>[]): Given<$Annotation> | undefined {
        const given = [this.library?.$is ?? []].flat();
        return given.find(annotation => views.includes(annotation)) ?? views[0];
    }

    shows(view: Given<$Annotation>): void {
        const library = this.library;
        if (library === undefined) return;
        library.$is = [view, ...[library.$is].flat().filter(given => given !== view)];
    }

    says(view: Given<$Annotation>): string {
        return reflection.name(view).replace(/([a-z])([A-Z])/gu, '$1 $2').toLowerCase();
    }

    protected override $Define(): void {
        super.$Define();
        this.classes.add(this, 'pd-switch');
    }
}

export const DougsLibrary = $($DougsLibrary);
export const LibraryTitle = $($LibraryTitle);
const libraryTitle = LibraryTitle;
export const Switch = $($Switch);
const switching = Switch;
$(DougsLibrary, Theme)(DougsTheme);
`})]}),"TheBook1"),D=s(()=>e.jsxs(o,{children:[e.jsx(h,{children:"[The Theme](/dougs-reference-manual/#the-theme)"}),e.jsxs(n,{children:[e.jsx(a,{children:"What the theme is"}),e.jsx(t,{children:"A place for the library's properties, and the one styled component that styles the framework's classes with them. The framework's Theme is bare, so the properties are this library's own: the font, the size, the leading, the measure, the space, the ink, the paper and the link, and three for a bar: its dark, the bright that is written on it, and a tint. They are declared as fields and read by every rule beneath through the theme's own provision. The values stand in for a design not yet made: a light paper and a dark ink, in the light serif of the page that has stood at the library's address while it was built. That page's own dark is a cover, and is kept for an accent."}),e.jsxs(t,{children:["The component is composed of parts, each a method returning a fragment of rules, so that a book changes one part and keeps the rest: the page, the levels, the links, the figures, and the apparatus, which is the lines of a cover, the switch, the shelfmark and the dateline. One more part sets the spread of ",e.jsx(r,{children:"[The Listing](/dougs-reference-manual/#the-listing)"}),". Where things go on the screen is not the theme's to say: ",e.jsx(r,{children:"[a frame](/dougs-reference-manual/#the-frames)"})," carries its own rules and reads the theme's values. Every rule names a class the framework or this library puts on the writing."]})]}),e.jsxs(n,{children:[e.jsx(l,{}),e.jsx(a,{children:"The theme's file"}),e.jsx(t,{children:e.jsx(d,{identifier:"code"})})]}),e.jsx(c,{identifier:"code",type:".tsx",children:`import { ElementType } from 'react';
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
    bar = '#0c1b1f';
    bright = '#e8e4df';
    tint = '#d4eef8';
    style: ElementType = selection.div\`\${this.parts()}\`;

    protected parts(): RuleSet[] {
        return [this.page(), this.levels(), this.links(), this.figures(), this.apparatus(), this.spread()];
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
        \`;
    }

    protected levels(): RuleSet {
        return css\`
            .pd-chapter { margin-block: calc(2 * \${({ theme }) => theme.space}); }
            .pd-section { margin-block: \${({ theme }) => theme.space}; }
            .pd-paragraph { margin-block: \${({ theme }) => theme.space}; max-width: \${({ theme }) => theme.measure}; }
            .pd-title { font-size: calc(2 * \${({ theme }) => theme.size}); font-weight: 300; letter-spacing: 0.08em; margin-block-end: \${({ theme }) => theme.space}; }
            .pd-heading { font-weight: 600; margin-block: \${({ theme }) => theme.space} 0; }
            .pd-line { white-space: pre-wrap; }
            .pd-word { overflow-wrap: break-word; }
        \`;
    }

    protected links(): RuleSet {
        return css\`
            .pa-reference { color: \${({ theme }) => theme.link}; text-decoration-color: \${({ theme }) => theme.link}; text-underline-offset: 0.15em; }
            .pa-self-reference { color: inherit; text-decoration: none; }
            .pa-content { color: \${({ theme }) => theme.link}; }
        \`;
    }

    protected figures(): RuleSet {
        return css\`
            .pd-image img { display: block; max-width: 100%; height: auto; }
            .pd-code {
                font-family: ui-monospace, monospace;
                font-size: calc(0.6 * \${({ theme }) => theme.size});
                font-weight: 400;
                line-height: 1.5;
                white-space: pre;
                overflow-x: auto;
                padding: \${({ theme }) => theme.space};
                background: color-mix(in srgb, \${({ theme }) => theme.ink} 6%, \${({ theme }) => theme.paper});
            }
            .hljs-keyword, .hljs-built_in, .hljs-type, .hljs-literal, .hljs-tag, .hljs-name, .hljs-title { color: \${({ theme }) => theme.link}; }
            .hljs-comment, .hljs-meta { color: color-mix(in srgb, \${({ theme }) => theme.ink} 55%, \${({ theme }) => theme.paper}); font-style: italic; }
        \`;
    }

    protected apparatus(): RuleSet {
        return css\`
            .pd-library-title .pa-reference, .pd-byline .pa-reference, .pd-filed .pa-reference { text-decoration: none; }
            .pd-byline, .pd-filed { font-size: calc(0.8 * \${({ theme }) => theme.size}); letter-spacing: 0.04em; }
            .pd-appended { margin-inline-start: 0.6em; font-family: ui-monospace, monospace; font-size: calc(0.5 * \${({ theme }) => theme.size}); opacity: 0.5; }
            .pd-switch { max-width: none; }
            .pd-views { display: inline-flex; gap: calc(\${({ theme }) => theme.space} / 2); margin-inline-start: \${({ theme }) => theme.space}; }
            .pd-view { font: inherit; font-size: calc(0.7 * \${({ theme }) => theme.size}); letter-spacing: 0.04em; color: inherit; background: none; border: 0; border-block-end: 1px solid transparent; padding: 0; cursor: pointer; opacity: 0.6; }
            .pd-view.pa-shown { opacity: 1; border-block-end-color: \${({ theme }) => theme.link}; }
            .pd-word.pa-shelfmark .pa-content { position: absolute; width: 1px; height: 1px; overflow: hidden; clip-path: inset(50%); white-space: nowrap; }
            .pd-word.pa-shelfmark::after {
                content: '';
                display: inline-block;
                width: calc(0.45 * \${({ theme }) => theme.size});
                height: calc(0.45 * \${({ theme }) => theme.size});
                margin-inline-start: calc(0.5 * \${({ theme }) => theme.space});
                border: 1px solid currentColor;
            }
            .pd-dateline {
                display: block;
                margin-block-start: \${({ theme }) => theme.space};
                font-size: calc(0.8 * \${({ theme }) => theme.size});
                font-style: italic;
                color: color-mix(in srgb, \${({ theme }) => theme.ink} 64%, \${({ theme }) => theme.paper});
            }
        \`;
    }

    protected spread(): RuleSet {
        return css\`
            .pa-listing .pd-paragraph { max-width: none; margin-block: 0; }
            .pa-listing .pd-code { background: \${({ theme }) => theme.bar}; color: \${({ theme }) => theme.bright}; }
            .pa-listing .hljs-keyword, .pa-listing .hljs-built_in, .pa-listing .hljs-type, .pa-listing .hljs-literal,
            .pa-listing .hljs-tag, .pa-listing .hljs-name, .pa-listing .hljs-title { color: \${({ theme }) => theme.tint}; }
            .pa-listing .hljs-comment, .pa-listing .hljs-meta { color: color-mix(in srgb, \${({ theme }) => theme.bright} 55%, \${({ theme }) => theme.bar}); }

            @media (min-width: 64rem) {
                .pd-chapter.pa-append.pa-open { display: grid; column-gap: calc(2 * \${({ theme }) => theme.space}); align-content: start; }
                .pa-append .pd-section.pa-listing { grid-row: 1 / span 99; position: sticky; top: 0; align-self: start; margin-block: 0; }
                .pa-append .pa-listing .pd-code { max-height: calc(100vh - 8 * \${({ theme }) => theme.space}); }
                .pa-words-forward .pd-chapter.pa-append.pa-open { grid-template-columns: minmax(0, 1fr) minmax(0, 14rem); }
                .pa-words-forward .pa-append .pd-section.pa-listing { grid-column: 2; }
                .pa-words-forward .pa-append .pa-listing .pd-code { overflow: hidden; }
                .pa-code-forward .pd-chapter.pa-append.pa-open { grid-template-columns: minmax(0, 1.6fr) minmax(0, 1fr); }
                .pa-code-forward .pa-append .pd-section.pa-listing { grid-column: 1; }
                .pa-code-forward .pa-append .pa-listing .pd-code { overflow: auto; }
            }
        \`;
    }
}

export const DougsTheme = $($DougsTheme);
`})]}),"TheTheme2"),R=s(()=>e.jsxs(o,{children:[e.jsx(h,{children:"[The Date](/dougs-reference-manual/#the-date)"}),e.jsxs(n,{children:[e.jsx(a,{children:"What a dated chapter is"}),e.jsxs(t,{children:["A chapter of mine may say when it is from. It says so once, at its top: the words I want read, and the day a machine can read, with the time where I know it. The chapter gets a class for it and draws the words at its foot, as a dateline. A book can read each chapter's day and put its chapters in order of recency. The chapters of ",e.jsx(r,{children:"[Dougs Story](/dougs-story/)"})," are dated, and no book of mine sorts by the date yet."]})]}),e.jsxs(n,{children:[e.jsx(l,{}),e.jsx(a,{children:"The date's file"}),e.jsx(t,{children:e.jsx(d,{identifier:"code"})})]}),e.jsx(c,{identifier:"code",type:".tsx",children:`import { ReactNode } from 'react';
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
`})]}),"TheDate3"),I=s(()=>e.jsxs(o,{children:[e.jsx(h,{children:"[The Shelfmark](/dougs-reference-manual/#the-shelfmark)"}),e.jsxs(n,{children:[e.jsx(a,{children:"What a shelfmark is"}),e.jsxs(t,{children:["A catalogue of mine holds a chapter for each book filed under it, and that chapter stands in for the book: it carries the book's synopsis. In the catalogue's table of contents the row for such a chapter ends in a small square. The name leads to the chapter here, and the square leads to the book itself. ",e.jsx(r,{children:"[Dougs Library](/dougs-library/)"})," is written this way, in ",e.jsx(r,{children:"[its table of contents](/dougs-library/#table-of-contents)"}),"."]}),e.jsx(t,{children:"The square is the catalogue's answer for the book, so it is also what tells the compiler that this catalogue holds it. I write the answer with the book's name, and the theme draws the square in its place, at the right of the row and a thoughtful distance from the names, with the squares of a table in one line. The name stays in the link for anyone who cannot see the square."})]}),e.jsxs(n,{children:[e.jsx(l,{}),e.jsx(a,{children:"The shelfmark's file"}),e.jsx(t,{children:e.jsx(d,{identifier:"code"})})]}),e.jsx(c,{identifier:"code",type:".tsx",children:`import { ComponentType, ElementType } from 'react';
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
`})]}),"TheShelfmark4"),P=s(()=>e.jsxs(o,{children:[e.jsx(h,{children:"[Initializing a Library](/dougs-reference-manual/#initializing-a-library)"}),e.jsxs(n,{children:[e.jsx(a,{children:"What a library needs to begin"}),e.jsxs(t,{children:["A library is books and nothing else, and it begins with three. The library's own catalogue, which is the top: every other book is filed under it, and it is filed under what it is about, which is itself. The librarian's autobiography, the one book that is by its own subject, which grounds who may author anything here. And a reference manual, this book, where the reusable parts of the library stand beside the chapters that say what they are. Each is a folder, and the folders here are ",e.jsx(r,{children:"[Dougs Library](/dougs-library/)"})," in a folder named as a library catalogue, ",e.jsx(r,{children:"[Dougs Story](/dougs-story/)"})," in one named as a subject, and this manual in one named as a subject too. A fourth stands beside them, ",e.jsx(r,{children:"[Dougs Design](/dougs-design/)"}),", where the design of the library is kept. The compiler reads no folder name; the dots are a convention kept for the person reading the tree."]})]}),e.jsxs(n,{children:[e.jsx(a,{children:"What a book is made of"}),e.jsx(t,{children:"A folder is a book when it holds a book file, and a book holds four files before any chapter:"}),e.jsxs(t,{children:[e.jsx(w,{}),e.jsx(p,{children:"a book file, which exports the class the book is, taken from this manual's door;"}),e.jsx(p,{children:"a cover, which says the book's title, who wrote it, where it is filed and what it is about;"}),e.jsx(p,{children:"a synopsis, which says what the book is in a paragraph, and is what a catalogue's row refers to;"}),e.jsx(p,{children:"a table of contents, which answers for the chapters the book holds and for the books it catalogues."})]}),e.jsx(t,{children:"The compiler holds the table to its word: it must link to every chapter of its book, itself among them, and to every book filed under it, or the bind refuses."}),e.jsx(t,{children:"Then numbered chapters, each a file whose first words are its title. A file beside a chapter, named for it with an identifier and a type, is the chapter's to print or to import, and the compiler refuses one the chapter does not use."})]}),e.jsxs(n,{children:[e.jsx(a,{children:"What a cover says"}),e.jsx(t,{children:"Everything a cover says is said in the notation, whatever element holds it. Two brackets around a name is a title. A second title form on a cover is what the book is about, the name of the subject it represents, which need not be the book's name: this library is called Dougs Library and is about The Library, and the autobiography is about The Librarian, so an author is written as The Librarian and a book is filed under The Library. One star before the brackets says who wrote the book; two say which catalogue it is filed under. The top says it is filed under itself, and the compiler requires that one book here does so, or there is no library."})]}),e.jsxs(n,{children:[e.jsx(a,{children:"The face, and the bind"}),e.jsx(t,{children:"The library publishes to a face, a folder beside the books that holds the binding and the site it builds. The face is made once, by running the master binding's copy script pointed at the library's folder; it names the face with as many dots as put it above every book, and writes a configuration naming where the copy came from, so that syncing brings the master in before every build. The configuration also names the root book, the title of the site, and the stylesheets and fonts a page loads. Then the bind: it reads every book, checks the library is well-formed, and writes one page per book. Every fault it raises is a sentence a librarian could say about the library without knowing the compiler exists, no title, not listed, may not author, and the library is initialized when it raises none."}),e.jsx(t,{children:"The bind is run in the face's binding folder, as npm run bind, and the site it builds is served from that folder with npx vite preview. The face keeps the pictures that stood beside a chapter after they are taken out of the book, until that book's folder in the face is cleared by hand."}),e.jsxs(t,{children:["The bind publishes the library. It is not how I look at the library while I am writing it, and that is said in ",e.jsx(r,{children:"[Developing a Library](/dougs-reference-manual/#developing-a-library)"}),"."]})]})]}),"InitializingALibrary5"),F=s(()=>e.jsxs(o,{children:[e.jsx(h,{children:"[Developing a Library](/dougs-reference-manual/#developing-a-library)"}),e.jsxs(n,{children:[e.jsx(a,{children:"The page stays open"}),e.jsx(t,{children:"I develop this library with its pages open. The binder serves the library live, straight from the files I am writing, and when I save one the open page changes in place: a sentence in a chapter in a quarter of a second, a rule in a theme in about half of one. Nothing is bound and the page is not loaded again. If what I saved breaks the library, the page says so in the compiler's own sentence, and the sentence goes when I mend the file."}),e.jsx(t,{children:"This is the only way I look at the library while I am working on it. Work on how a page looks needs its answer at once, and a way of working that cannot give one has failed at what it is for."})]}),e.jsxs(n,{children:[e.jsx(a,{children:"The workbench"}),e.jsx(t,{children:"The workbench is the tool I do this with. Opened once, it starts the live site and keeps a browser open on it. After that I ask it for a look at any book. It waits for my last save to reach the page, photographs the page at a desk's width or a phone's, and tells me:"}),e.jsxs(t,{children:[e.jsx(w,{}),e.jsx(p,{children:"what the page says, or any part of it;"}),e.jsx(p,{children:"what a rule computes to on an element, and where the element stands;"}),e.jsx(p,{children:"how many things run past the right edge of the screen;"}),e.jsx(p,{children:"anything that went wrong on the page, and the compiler's refusal if there is one."})]}),e.jsxs(t,{children:["A look takes under a second, because the browser is already open and the page is already drawn. It can press something first, load the page again as a reader arriving would, and say which of the rules that name a thing wins. What the workbench does for a book is what ",e.jsx(r,{children:"[the camera](/dougs-design/#the-camera)"})," does for a concept, and it stands here for the same reason the camera stands there, which is told in ",e.jsx(r,{children:"[Closure](/dougs-story/#closure)"}),"."]})]}),e.jsxs(n,{children:[e.jsx(a,{children:"When I bind"}),e.jsxs(t,{children:["The bind is how the library is published, and it is not how I look at it. What it does is said in ",e.jsx(r,{children:"[Initializing a Library](/dougs-reference-manual/#initializing-a-library)"}),". It takes seconds where a save takes none, so I bind when a piece of work is done."]}),e.jsx(t,{children:"The bind checks three things the live site does not: each book against its own rules, each page as it is printed for a reader who arrives before the code does, and every link against the page it leads to. So my last look at finished work is at the site the bind built, loaded afresh, and the workbench takes that look too."})]}),e.jsxs(n,{children:[e.jsx(l,{}),e.jsx(a,{children:"The workbench's file"}),e.jsx(t,{children:e.jsx(d,{identifier:"workbench"})})]}),e.jsx(c,{identifier:"workbench",type:".mjs",children:`// The workbench: the library served live from its sources, a browser kept open on it, and a way to ask that
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
//     tree=<selector>|<depth>        print the elements under the first match, each with its marks and its size
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
            says.push(...(boxes.length === 0 ? [\`nothing matches \${selector}\`] : boxes.map(text => \`\${selector} stands at \${text}\`)));
        }

        for (const pair of wanted.getAll('tree')) {
            const [selector, deep = '3'] = pair.split('|');
            const drawn = await page.$eval(selector, (one, depth) => {
                const lines = [];
                const walk = (element, level) => {
                    const box = element.getBoundingClientRect();
                    const marks = [...element.classList].map(name => \`.\${name}\`).join('');
                    lines.push(\`\${'  '.repeat(level)}\${element.tagName.toLowerCase()}\${element.id === '' ? '' : \`#\${element.id}\`}\${marks} \${Math.round(box.width)}×\${Math.round(box.height)}\`);
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
`})]}),"DevelopingALibrary6"),z=s(()=>e.jsxs(o,{children:[e.jsx(h,{children:"[The Pages](/dougs-reference-manual/#the-pages)"}),e.jsxs(n,{children:[e.jsx(a,{children:"What a page is"}),e.jsx(t,{children:"A book of mine shows one chapter at a time. Its cover and its table of contents stay in view, since they are how I know where I am and where I can go. Every other chapter is a page, and one page is open."}),e.jsx(t,{children:"The open page is the chapter the address names. At the book's own address no chapter is named, and the page that opens is the synopsis, which says what the book is. The pages put a class on the book when it is at its front like that, so a frame can show more there. An address may also name a place inside a chapter, a heading, and then the page that holds that place opens."}),e.jsxs(t,{children:["The pages are a class under the framework's own, and they change two of its answers: which chapters are pages, and which page is open. Where the open page stands on the screen is not theirs to say. That belongs to ",e.jsx(r,{children:"[The Frames](/dougs-reference-manual/#the-frames)"}),"."]})]}),e.jsxs(n,{children:[e.jsx(l,{}),e.jsx(a,{children:"The pages' file"}),e.jsx(t,{children:e.jsx(d,{identifier:"code"})})]}),e.jsx(c,{identifier:"code",type:".tsx",children:`import { $ } from '@dna-platform/chemistry';
import { $Chapter, $Paginated, $Section, $Writing } from '@dna-platform/public';

export class $Paged extends $Paginated {
    override get pages(): $Chapter[] { return super.pages.filter(page => page !== this.book?.cover && page !== this.book?.table); }

    override get open(): $Chapter | undefined {
        const book = this.book;
        if (book === undefined) return undefined;
        const place = book.$bookmark;
        const chapter = book.bookmark ?? (place === undefined ? undefined
            : this.pages.find(page => page.text.find($Section).some(section => section.mention?.identifier === place)));
        return chapter !== undefined && this.pages.includes(chapter) ? chapter : book.synopsis;
    }

    override defines(writing: $Writing): void {
        super.defines(writing);
        if (this.open === this.book?.synopsis)
            writing.classes.add(this, 'pa-front');
    }
}

export const Paged = $($Paged);
`})]}),"ThePages7"),N=s(()=>e.jsxs(o,{children:[e.jsx(h,{children:"[The Frames](/dougs-reference-manual/#the-frames)"}),e.jsxs(n,{children:[e.jsx(a,{children:"What a frame is"}),e.jsxs(t,{children:["A frame is where a book puts its parts on the screen: the library's name, the cover and its lines, the table of contents, the open page and the switch. A book is layout, so a frame is written in the book. Each frame is a class under ",e.jsx(r,{children:"[the library's book](/dougs-reference-manual/#the-book)"}),", and what it writes is the layout: every part drawn in an element of the frame's own."]}),e.jsx(t,{children:"A chapter does not know where it is put. The book finds each one by what it is, the cover, the table of contents, a page, and draws it where the frame wants it. What a chapter wraps itself in makes no difference to the frame, since the frame only places its own elements."}),e.jsxs(t,{children:["A frame's rules are written with it, in one styled component that reads the values of ",e.jsx(r,{children:"[the theme](/dougs-reference-manual/#the-theme)"}),". It is drawn inside the book, so it reads whichever theme the book has at that moment, its own or one given to it from outside."]}),e.jsx(t,{children:"With no frame, a book reads down the page: the library's name, the cover and its lines, the table of contents, the pages, the switch. That is what the library's book writes by itself."})]}),e.jsxs(n,{children:[e.jsx(a,{children:"The side bar"}),e.jsxs(t,{children:["This frame sets the library's name and the cover at the top of a dark bar at the left, and the table of contents under them. The open page is beside the bar, with the switch above it. It is the frame of two of ",e.jsx(r,{children:"[the designs I am going with](/dougs-design/#the-designs-i-am-going-with)"}),", the reference manual's and a conversation's. On a narrow screen there is no bar, and the book reads down the page: the cover, the open page, then the table of contents."]})]}),e.jsxs(n,{children:[e.jsx(l,{}),e.jsx(a,{children:"The frames' file"}),e.jsx(t,{children:e.jsx(d,{identifier:"code"})})]}),e.jsx(c,{identifier:"code",type:".tsx",children:`import { ElementType, ReactNode } from 'react';
import { $, selection } from '@dna-platform/chemistry';
import { $DougsLibrary } from './1-the-book~code.tsx';

export class $SideBar extends $DougsLibrary {
    layout: ElementType = selection.div\`
        padding: \${({ theme }) => theme.space};

        & > aside .pd-library-title { font-size: calc(0.55 * \${({ theme }) => theme.size}); font-weight: 500; letter-spacing: 0.24em; text-transform: uppercase; }
        & > aside .pd-chapter.pa-cover { margin-block-end: 0; }
        & > aside .pd-chapter.pa-cover .pd-title { font-size: calc(1.2 * \${({ theme }) => theme.size}); line-height: 1.3; margin-block: 0; }
        & > aside .pd-filed, & > aside .pd-byline { margin-block: calc(\${({ theme }) => theme.space} / 4) 0; }
        & > nav .pd-heading {
            font-size: calc(0.55 * \${({ theme }) => theme.size});
            font-weight: 500;
            letter-spacing: 0.24em;
            text-transform: uppercase;
            opacity: 0.6;
        }
        & > nav .pd-paragraph { margin-block: calc(\${({ theme }) => theme.space} / 3); font-size: calc(0.85 * \${({ theme }) => theme.size}); line-height: 1.3; }
        & > nav .pa-reference { color: inherit; text-decoration: none; }
        & > nav .pa-content { color: inherit; opacity: 0.76; }
        & > nav .pd-appended { float: inline-end; line-height: 2.2; }
        & > nav .pa-entry.pa-open .pa-content { opacity: 1; font-weight: 700; }

        @media (min-width: 48rem) {
            position: fixed;
            inset: 0;
            padding: 0;
            display: grid;
            grid-template-columns: 17.5rem minmax(0, 1fr);
            grid-template-rows: auto minmax(0, 1fr);

            & > aside { grid-column: 1; grid-row: 1; padding: \${({ theme }) => theme.space} \${({ theme }) => theme.space} 0; color: \${({ theme }) => theme.bright}; background: \${({ theme }) => theme.bar}; }
            & > aside .pd-library-title { margin: 0; }
            & > aside .pd-chapter.pa-cover { margin: calc(\${({ theme }) => theme.space} / 4) 0 0; }
            & > aside .pd-library-title .pa-reference, & > aside .pd-filed .pa-reference, & > aside .pd-byline .pa-reference { color: inherit; }

            & > nav { grid-column: 1; grid-row: 2; overflow: auto; padding: 0 \${({ theme }) => theme.space} \${({ theme }) => theme.space}; color: \${({ theme }) => theme.bright}; background: \${({ theme }) => theme.bar}; }
            & > nav .pd-chapter.pa-table-of-contents { margin: calc(2 * \${({ theme }) => theme.space}) 0 0; }
            & > nav .pa-entry.pa-open .pa-content { color: \${({ theme }) => theme.tint}; font-weight: inherit; }

            & > main { grid-column: 2; grid-row: 1 / span 2; display: grid; grid-template-rows: auto minmax(0, 1fr); }
            & > main .pd-switch { justify-self: end; margin: 0; padding: calc(\${({ theme }) => theme.space} / 2) calc(3 * \${({ theme }) => theme.space}) 0; }
            & > main > article { overflow: auto; padding: calc(2 * \${({ theme }) => theme.space}) calc(3 * \${({ theme }) => theme.space}); }
            & > main .pd-chapter { margin: 0; }
        }
    \`;

    override write(): ReactNode {
        const Layout = this.layout;
        return (
            <Layout>
                <aside>
                    {this.library()}
                    {this.place(this.cover)}
                    {this.filed()}
                    {this.byline()}
                </aside>
                <main>
                    {this.controls()}
                    <article>
                        {this.place(...this.pages)}
                    </article>
                </main>
                <nav>
                    {this.place(this.table)}
                </nav>
            </Layout>
        );
    }
}

export const SideBar = $($SideBar);
`})]}),"TheFrames8"),E=s(()=>e.jsxs(o,{children:[e.jsx(h,{children:"[The Cover](/dougs-reference-manual/#the-cover)"}),e.jsxs(n,{children:[e.jsx(a,{children:"The lines of a cover"}),e.jsxs(t,{children:["A cover says a book's title, who wrote it and what it is filed under. The framework's cover draws the title. The other two are lines the book draws from what its cover says, each a link: the subject the book is filed under, and the author, which leads to ",e.jsx(r,{children:"[Dougs Story](/dougs-story/)"})," from every book. The library is filed under itself, so it has no second line."]}),e.jsxs(t,{children:["The lines are the book's and not the cover's, so ",e.jsx(r,{children:"[a frame](/dougs-reference-manual/#the-frames)"})," puts each one where it wants. The side bar sets both under the title. ",e.jsx(r,{children:"[The catalogue's bars](/dougs-library/#the-bars)"})," set the author at the far end of the library's bar. ",e.jsx(r,{children:"[The story's sheet](/dougs-story/#the-sheet)"})," runs the author on after the title and leaves the other out."]})]}),e.jsxs(n,{children:[e.jsx(l,{}),e.jsx(a,{children:"The lines' file"}),e.jsx(t,{children:e.jsx(d,{identifier:"code"})})]}),e.jsx(c,{identifier:"code",type:".tsx",children:`import { ReactNode } from 'react';
import { $ } from '@dna-platform/chemistry';
import { $Paragraph, Reference as reference, Word as word } from '@dna-platform/public';

export class $Filed extends $Paragraph {
    override write(): ReactNode {
        const book = this.book;
        const subject = book?.subject;
        if (subject === undefined || subject.means?.identifier === book?.means?.identifier) return null;
        const Word = $(word);
        const Reference = $(reference);
        return (
            <>
                filed under
                {' '}
                <Word>
                    <Reference>{subject.means?.identifier}</Reference>
                    {subject.name}
                </Word>
            </>
        );
    }

    protected override $Define(): void {
        super.$Define();
        this.classes.add(this, 'pd-filed');
    }
}

export class $Byline extends $Paragraph {
    override write(): ReactNode {
        const author = this.book?.author;
        if (author === undefined) return null;
        const Word = $(word);
        const Reference = $(reference);
        return (
            <>
                by
                {' '}
                <Word>
                    <Reference>{author.means?.identifier}</Reference>
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

export const Filed = $($Filed);
export const Byline = $($Byline);
`})]}),"TheCover9"),B=s(()=>e.jsxs(o,{children:[e.jsx(h,{children:"[The Table](/dougs-reference-manual/#the-table)"}),e.jsxs(n,{children:[e.jsx(a,{children:"What an entry knows"}),e.jsxs(t,{children:["The table of contents is how a book is moved through. So each of its entries knows which chapter it means, and whether that chapter is the open page of ",e.jsx(r,{children:"[the pages](/dougs-reference-manual/#the-pages)"}),"."]}),e.jsxs(t,{children:["I write a table as I always did, a line for each chapter. The library's own table of contents puts the entry on every line when the book is bound, and the entry puts a class on its line when its chapter is open. ",e.jsx(r,{children:"[A frame](/dougs-reference-manual/#the-frames)"})," lights the line that has it."]}),e.jsx(t,{children:"An entry says two more things about its line. It notes the kind of file its chapter carries, if it carries one. And it puts a class on the line that answers for a book filed under this one, which is what lets a catalogue show its table as a shelf."})]}),e.jsxs(n,{children:[e.jsx(l,{}),e.jsx(a,{children:"The table's file"}),e.jsx(t,{children:e.jsx(d,{identifier:"code"})})]}),e.jsx(c,{identifier:"code",type:".tsx",children:`import { ReactNode } from 'react';
import { $ } from '@dna-platform/chemistry';
import { $Annotation, $Append, $Chapter, $Content, $Paginated, $Paragraph, $Section, $TableOfContents, $Word, $Writing } from '@dna-platform/public';
import { $Shelfmark } from './4-the-shelfmark~code.tsx';

export class $Entry extends $Annotation {
    get paragraph(): $Paragraph | undefined { return this.parent instanceof $Paragraph ? this.parent : undefined; }
    get content(): $Content | undefined {
        const paragraph = this.paragraph;
        return paragraph?.annotations.expressed($Content) ?? paragraph?.text.find($Word)[0]?.annotations.expressed($Content);
    }

    get meant(): $Chapter | undefined {
        const identifier = this.content?.identifier;
        if (identifier === undefined || identifier === '') return undefined;
        return this.book?.text.find($Chapter).find(chapter => chapter.mention?.identifier === identifier);
    }

    override defines(writing: $Writing): void {
        writing.classes.add(this, 'pa-entry');
        const chapter = this.meant;
        if (chapter !== undefined && this.book?.annotations.expressed($Paginated)?.open === chapter)
            writing.classes.add(this, 'pa-open');
        if (this.paragraph?.text.find($Word).some(word => word.is($Shelfmark)) === true)
            writing.classes.add(this, 'pa-answer');
    }

    override erase(writing: $Writing): void {
        writing.classes.revert(this);
    }

    override note(): ReactNode {
        const appends = this.meant?.annotations.find($Append) ?? [];
        if (appends.length === 0) return null;
        return (
            <span className="pd-appended">
                {appends.map(append => append.$type).join(' ')}
            </span>
        );
    }
}

export class $DougsTableOfContents extends $TableOfContents {
    protected override $Bound(): void {
        const Entry = $(entry);
        for (const section of this.chapter?.text.find($Section) ?? [])
            for (const paragraph of section.text.find($Paragraph))
                if (!paragraph.is($Entry))
                    paragraph.annotations.add(this, <Entry />);
        super.$Bound();
    }
}

export const Entry = $($Entry);
const entry = Entry;
export const TableOfContents = $($DougsTableOfContents);
`})]}),"TheTable10"),q=s(()=>e.jsxs(o,{children:[e.jsx(h,{children:"[The Listing](/dougs-reference-manual/#the-listing)"}),e.jsxs(n,{children:[e.jsx(a,{children:"A chapter and its file"}),e.jsx(t,{children:"A chapter that says what a part is carries the part's file, and the file is printed in one of its sections, the listing. A book sets such a chapter as a spread, the words and the file side by side, so that neither is read without the other."}),e.jsx(t,{children:"This manual's chapters are of that kind. So is the appendix of any other book, where the code that builds the book is kept, which is why an appendix here reads like a page of this manual. Nothing says a chapter is of this kind but the file it carries."})]}),e.jsxs(n,{children:[e.jsx(a,{children:"Which is forward"}),e.jsx(t,{children:"There are two spreads, and a reader changes between them. With the words forward, the file stands narrow at the right, there to show that it can be opened out. With the code forward, the file takes the wide side and the words stand beside it, because code does not look right unless it is in full view."}),e.jsxs(t,{children:["The change is one press, and no chapter is rewritten for it. The book is given the other spread from outside, in front of its own, by the switch of ",e.jsx(r,{children:"[The Book](/dougs-reference-manual/#the-book)"}),"."]})]}),e.jsxs(n,{children:[e.jsx(l,{}),e.jsx(a,{children:"The listing's file"}),e.jsx(t,{children:e.jsx(d,{identifier:"code"})})]}),e.jsx(c,{identifier:"code",type:".tsx",children:`import { $, $check } from '@dna-platform/chemistry';
import { $Annotation, $Append, $Section, $Writing, AnnotationSpecification, specify } from '@dna-platform/public';

export class $DougsAppend extends $Append {
    override defines(writing: $Writing): void {
        writing.classes.add(this, 'pa-append');
    }

    override erase(writing: $Writing): void {
        writing.classes.revert(this);
    }
}

export class $Listing extends $Annotation {
    specification = new ListingSpecification();

    override defines(writing: $Writing): void {
        writing.classes.add(this, 'pa-listing');
    }

    override erase(writing: $Writing): void {
        writing.classes.revert(this);
    }
}

export class $Spread extends $Annotation {
    override defines(writing: $Writing): void {
        for (const annotation of writing.annotations.after(this))
            if (annotation instanceof $Spread)
                writing.annotations.express(annotation, false);
    }

    override erase(writing: $Writing): void {
        writing.classes.revert(this);
    }
}

export class $WordsForward extends $Spread {
    override defines(writing: $Writing): void {
        super.defines(writing);
        writing.classes.add(this, 'pa-words-forward');
    }
}

export class $CodeForward extends $Spread {
    override defines(writing: $Writing): void {
        super.defines(writing);
        writing.classes.add(this, 'pa-code-forward');
    }
}

export class ListingSpecification extends AnnotationSpecification {
    @specify('a listing is said of a section')
    $saidOfASection(writing: $Writing): void {
        $check(writing instanceof $Section, 'a listing is said of a section, and this is not one');
    }
}

export const Append = $($DougsAppend);
export const Listing = $($Listing);
export const Spread = $($Spread);
export const WordsForward = $($WordsForward);
export const CodeForward = $($CodeForward);
`})]}),"TheListing11"),M=j(f),V=s(()=>e.jsxs(M,{children:[W(),A(),C(),L(),D(),R(),I(),P(),F(),z(),N(),E(),B(),q()]}),"book");export{V as book};
