var T=Object.defineProperty;var o=(j,r)=>T(j,"name",{value:r,configurable:!0});import{$ as b,F as A,s as k,G as S,j as e,C as d,n as c,o as W,p as C,P as x,v as n,H as a,t,w as h,W as m,M as s,x as i,L as v,N as p}from"./index-DGVF6UTJ.js";import{g as L,I as B,B as l}from"./17-the-first~code-CdkQni5j.js";import{S as R}from"./.synopsis-Dt8WY-HI.js";const w=class w extends L{};o(w,"$ReferenceManual");let f=w;const y=class y extends A{constructor(){super(...arguments),this.style=k.header`
        .pd-chapter.pa-cover { margin-block: 0; }
        .pa-cover .pd-title {
            font-size: calc(1.04 * ${({theme:r})=>r.size});
            font-weight: 600;
        }
    `}};o(y,"$ManualCover");let u=y;const $=class $ extends S{constructor(){super(...arguments),this.style=k.nav`
        .pd-chapter.pa-table-of-contents { margin-block: ${({theme:r})=>r.space}; }
        .pa-table-of-contents .pd-section { margin-block: calc(${({theme:r})=>r.space} * 0.83) 0; }
        .pa-table-of-contents .pd-heading {
            font-size: calc(0.76 * ${({theme:r})=>r.size});
            font-weight: 600;
            line-height: 1;
            letter-spacing: 0.06em;
            text-transform: uppercase;
            color: ${({theme:r})=>r.faint};
            padding-inline: calc(${({theme:r})=>r.space} / 4);
            margin-block-end: calc(${({theme:r})=>r.space} / 3);
        }
        .pa-table-of-contents .pd-paragraph.pa-entry {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-block: 0;
            padding: calc(${({theme:r})=>r.space} / 4) calc(${({theme:r})=>r.space} / 3);
            border-radius: calc(${({theme:r})=>r.space} / 4);
            color: ${({theme:r})=>r.soft};
        }
        .pa-table-of-contents .pd-paragraph.pa-entry.pa-open {
            background: ${({theme:r})=>r.tint};
            color: ${({theme:r})=>r.accent};
            font-weight: 500;
        }
        .pa-table-of-contents .pa-reference { color: inherit; text-decoration: none; }
        .pa-table-of-contents .pa-file-type {
            font-family: ${({theme:r})=>r.mono};
            font-size: calc(0.76 * ${({theme:r})=>r.size});
            color: ${({theme:r})=>r.faint};
        }
    `}};o($,"$ManualTableOfContents");let g=$;const I=b(u),z=b(g),D=o(()=>e.jsxs(d,{children:[e.jsx(I,{}),e.jsx(c,{children:"[Dougs Reference Manual](/dougs-reference-manual/)"}),e.jsx(W,{children:"[The Librarian](/dougs-story/)"}),e.jsx(C,{children:"[The Library](/dougs-library/)"})]}),"Cover"),F=o(()=>e.jsxs(d,{children:[e.jsx(z,{}),e.jsx(B,{}),e.jsxs(c,{children:[e.jsx(x,{}),"[Table of Contents](/dougs-reference-manual/#table-of-contents)"]}),e.jsxs(n,{children:[e.jsx(a,{children:"What every book is"}),e.jsx(t,{children:e.jsx(h,{children:"[The Book](/dougs-reference-manual/#the-book)"})}),e.jsx(t,{children:e.jsx(h,{children:"[The Theme](/dougs-reference-manual/#the-theme)"})}),e.jsx(t,{children:e.jsx(h,{children:"[The Author and the Subject](/dougs-reference-manual/#the-author-and-the-subject)"})}),e.jsx(t,{children:e.jsx(h,{children:"[The Layout](/dougs-reference-manual/#the-layout)"})}),e.jsx(t,{children:e.jsx(h,{children:"[The Turn](/dougs-reference-manual/#the-turn)"})}),e.jsx(t,{children:e.jsx(h,{children:"[The Entry](/dougs-reference-manual/#the-entry)"})}),e.jsx(t,{children:e.jsx(h,{children:"[The Listing](/dougs-reference-manual/#the-listing)"})}),e.jsxs(t,{children:[e.jsx(x,{}),e.jsx(m,{children:e.jsx(h,{children:"[Dougs Reference Manual](/dougs-reference-manual/)"})}),e.jsx(m,{children:e.jsx(h,{children:"[Synopsis](/dougs-reference-manual/#synopsis)"})}),e.jsx(m,{children:e.jsx(h,{children:"[Table of Contents](/dougs-reference-manual/#table-of-contents)"})})]})]}),e.jsxs(n,{children:[e.jsx(a,{children:"What a reader may switch"}),e.jsx(t,{children:e.jsx(h,{children:"[The Switch](/dougs-reference-manual/#the-switch)"})}),e.jsx(t,{children:e.jsx(h,{children:"[The Tone](/dougs-reference-manual/#the-tone)"})})]}),e.jsxs(n,{children:[e.jsx(a,{children:"What a chapter may carry"}),e.jsx(t,{children:e.jsx(h,{children:"[The Date](/dougs-reference-manual/#the-date)"})}),e.jsx(t,{children:e.jsx(h,{children:"[The First](/dougs-reference-manual/#the-first)"})}),e.jsx(t,{children:e.jsx(h,{children:"[The Colour](/dougs-reference-manual/#the-colour)"})})]}),e.jsxs(n,{children:[e.jsx(a,{children:"The types of book"}),e.jsx(t,{children:e.jsx(h,{children:"[The Manual](/dougs-reference-manual/#the-manual)"})})]}),e.jsxs(n,{children:[e.jsx(a,{children:"Making the library"}),e.jsx(t,{children:e.jsx(h,{children:"[Initializing a Library](/dougs-reference-manual/#initializing-a-library)"})}),e.jsx(t,{children:e.jsx(h,{children:"[Developing a Library](/dougs-reference-manual/#developing-a-library)"})})]})]}),"Table"),N=o(()=>e.jsxs(d,{children:[e.jsx(c,{children:"[The Book](/dougs-reference-manual/#the-book)"}),e.jsxs(t,{children:[e.jsx(l,{}),"The class every book of this library stands on: it draws the frame once and collects its chapters."]}),e.jsxs(n,{children:[e.jsx(a,{children:"What the book is"}),e.jsx(t,{children:"Every book in this library extends one class, so what a book is here is said once. A book of mine holds chapters and nothing else, it has a place for every chapter it holds, and only an ordinary chapter appends a file. The class says all three in its specification, and the bind holds every book to it."}),e.jsx(t,{children:"The class draws the frame that is on every screen, in five regions named as the frame's sketch names them: the library's bar, with what the book is filed under and the library's own subjects; me, who the book is by; what the book holds, its table of contents; the head, its cover and its switches; and the leaves, the front it opens on and then one leaf for each chapter, the chapter with the files it appends. A region is a method, and a type of book overrides the method whose region it fills differently, and nothing else."})]}),e.jsxs(n,{children:[e.jsx(a,{children:"How the book fits the library's patterns"}),e.jsxs(t,{children:["The purpose of a book is layout: the book's own class places its parts, each in an element of its own with a class, and it finds its chapters by what they carry, never by position. Where the regions go is not the book's to say; that is ",e.jsx(s,{children:"[the layout](/dougs-reference-manual/#the-layout)"}),", said of the book once, whose one grid is the frame: the library's bar across the top, what the book holds down the side. What colours the regions is ",e.jsx(s,{children:"[a tone](/dougs-reference-manual/#the-tone)"}),", said of the book too. The class gives every book its layout and its tone when it is defined, and a type of book that wants another tone registers it on its class in one line, the way the framework's own theme is registered."]})]}),e.jsxs(n,{children:[e.jsx(a,{children:"How the book is used"}),e.jsxs(t,{children:["A type of book is a class under this one. ",e.jsx(s,{children:"[The catalogue](/dougs-library/#the-catalogue)"})," overrides what the book opens on, to put its shelf under its synopsis with its own cover first, its head, which it leaves to its switches, and its front, which is always open, and names its entries as pages; ",e.jsx(s,{children:"[the manual](/dougs-reference-manual/#the-manual)"})," overrides its switches and gives itself the spread that sets a chapter beside its file; ",e.jsx(s,{children:"[my story](/dougs-story/#the-sheet)"})," overrides its head and its front, and ",e.jsx(s,{children:"[the design book](/dougs-design/#the-frame)"})," says which chapter opens when none is named. Each is a few lines, because the frame is this class's."]})]}),e.jsxs(n,{children:[e.jsx(a,{children:"What the book gives a type"}),e.jsx(t,{children:"What a type reads: its chapters, the ordinary ones; what it places, which its specification counts; which chapter is open, the one the address names, whether the address names the chapter or a heading inside it; the three tones it may offer as switches. What a type overrides: the library's bar, the subjects, what the book holds, the head, the front, what the book opens on, the leaves, the switches, the listings a chapter's files are printed as."})]}),e.jsxs(n,{children:[e.jsx(a,{children:"Where the book bites"}),e.jsx(t,{children:"A type overrides a region and never redraws the frame; a type that wrote its own bars was the wrong turn this class ended. A thing said of a book of this library takes the one rule in the second file below, so it is said of a book of this library and of nothing else. And the class imports the library's subjects from the catalogue through a file beside that book's chapter which imports only the framework, because the catalogue's table imports this manual's door, and a cycle through the door loads half a module."})]}),e.jsx(i,{identifier:"code",type:".tsx",children:`import { ReactNode } from 'react';
import { $, $check } from '@dna-platform/chemistry';
import { $Annotation, $Append, $Book, $Chapter, $Composition, $Reference, $Section, BookSpecification, Given, Theme, specify } from '@dna-platform/public';
import { Listing as listing } from './2-the-listing~code.tsx';
import { LibraryBookTheme } from './3-the-theme~code.tsx';
import { Byline as byline, FiledUnder as filedUnder } from './8-the-author-and-the-subject~code.tsx';
import { Layout as layout } from './12-the-layout~code.tsx';
import { $Appendix } from './14-the-entry~code.tsx';
import { Dark as dark, Light as light, Tone as tone, WhiteOverBlack as whiteOverBlack } from './16-the-tone~code.tsx';
import { Subjects } from '../..reference/o1-the-catalogue~subjects.tsx';
import { Turn as turn } from './13-the-turn~code.tsx';

export class $LibraryBook extends $Book {
    specification = new LibraryBookSpecification();
    get chapters(): $Chapter[] {
        return this.text.find($Chapter).filter(chapter => [...chapter.classes].includes('pd-canonical'));
    }
    get placed(): ($Chapter | undefined)[] {
        return [this.cover, this.synopsis, this.table, ...this.chapters];
    }
    get pages(): $Chapter[] {
        const appendix = this.appendix;
        return this.chapters.filter(chapter => !appendix.includes(chapter));
    }
    get appendix(): $Chapter[] {
        const table = this.table;
        if (table === undefined) return [];
        const places = table.text.find($Section).filter(section => section.is($Appendix))
            .flatMap(section => section.text.find($Reference).map(reference => reference.identifier));
        return this.chapters.filter(chapter => places.includes(chapter.mention?.identifier ?? ''));
    }
    get open(): $Chapter | undefined {
        return this.$bookmark === undefined ? undefined : this.named(this.$bookmark);
    }
    get tones(): Given<$Annotation>[] {
        return [dark, light, whiteOverBlack];
    }

    override write(): ReactNode {
        return (
            <>
                <div className="pd-library">
                    {this.library()}
                </div>
                <div className="pd-me">
                    {this.byline()}
                </div>
                <div className="pd-holds">
                    {this.holds()}
                </div>
                <div className="pd-head">
                    {this.head()}
                </div>
                <div className="pd-leaves">
                    {this.front()}
                    {this.leaves()}
                </div>
            </>
        );
    }

    library(): ReactNode {
        return (
            <>
                {this.filed()}
                {this.subjects()}
            </>
        );
    }

    subjects(): ReactNode {
        return (
            <div className="pd-subjects">
                <Subjects />
            </div>
        );
    }

    holds(): ReactNode {
        const Table = $(this.table!);
        return (
            <Table />
        );
    }

    head(): ReactNode {
        const Cover = $(this.cover!);
        return (
            <>
                <Cover />
                <div className="pd-switches">
                    {this.switches()}
                </div>
            </>
        );
    }

    front(): ReactNode {
        return (
            <div className={this.open === undefined ? 'pd-leaf pd-front pd-open' : 'pd-leaf pd-front'}>
                {this.opening()}
            </div>
        );
    }

    opening(): ReactNode {
        const Synopsis = $(this.synopsis!);
        return (
            <div className="pd-words">
                <Synopsis />
            </div>
        );
    }

    leaves(): ReactNode {
        return this.chapters.map((chapter, index) => {
            const Chapter = $(chapter);
            return (
                <div
                    key={index}
                    className={chapter === this.open ? 'pd-leaf pd-open' : 'pd-leaf'}
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

    named(place: string): $Chapter | undefined {
        return this.chapters.find(chapter => chapter.mention?.identifier === place
            || this.sections(chapter).some(section => section.mention?.identifier === place));
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

    switches(): ReactNode {
        return undefined;
    }

    listings(chapter: $Chapter): ReactNode {
        const Listing = $(listing);
        return chapter.annotations.find($Append).reverse().map((append, index) => (
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

    protected override turn(): void {
        if (this.bookmark === this.cover) return;
        super.turn();
    }

    protected override $Define(): void {
        super.$Define();
        const Layout = $(layout);
        const Tone = $(tone);
        this.annotations.add(this,
            <Layout />,
            <Tone />
        );
    }

    protected override $Bound(): void {
        const Turn = $(turn);
        for (const chapter of this.pages)
            chapter.text.add(this,
                <Turn />
            );
        super.$Bound();
    }
}

export class LibraryBookSpecification extends BookSpecification {
    @specify('a book of this library holds only chapters')
    $holdsOnlyChapters(book: $LibraryBook): void {
        $check([...book.text].every(chemical => chemical instanceof $Chapter),
            'a book of this library holds only chapters, and this one holds something else');
    }

    @specify('a book of this library has a place for every chapter it holds')
    $placesEveryChapter(book: $LibraryBook): void {
        $check(book.text.find($Chapter).every(chapter => book.placed.includes(chapter)),
            'a book of this library has a place for every chapter it holds, and this one holds a chapter it places nowhere');
    }

    @specify('only an ordinary chapter appends a file')
    $onlyAChapterAppends(book: $LibraryBook): void {
        $check(book.text.find($Chapter).every(chapter => book.chapters.includes(chapter) || !chapter.is($Append)),
            'only an ordinary chapter appends a file, and here a cover, a synopsis or a table of contents appends one');
    }
}

export const LibraryBook = $($LibraryBook);
$(LibraryBook, Theme)(LibraryBookTheme);
$(LibraryBook, tone)(dark);
`}),e.jsx(i,{identifier:"said",type:".tsx",children:`import { $check } from '@dna-platform/chemistry';
import { $Writing, AnnotationSpecification, specify } from '@dna-platform/public';
import { $LibraryBook } from './1-the-book~code.tsx';

export class OfABookSpecification extends AnnotationSpecification {
    @specify('this is said of a book of this library')
    $saidOfABook(writing: $Writing): void {
        $check(writing instanceof $LibraryBook, 'this is said of a book of this library, and here it is said of something else');
    }
}
`})]}),"TheBook1"),O=o(()=>e.jsxs(d,{children:[e.jsx(c,{children:"[The Listing](/dougs-reference-manual/#the-listing)"}),e.jsxs(t,{children:[e.jsx(l,{}),"A paragraph that prints a file beside its chapter under the file's own name."]}),e.jsxs(n,{children:[e.jsx(a,{children:"A chapter and its file"}),e.jsx(t,{children:"A chapter that is about a part of this library keeps the part's file beside it, and appends it. The words say what the part is and how I use it. The file is the part."}),e.jsxs(t,{children:["A listing is how a book shows one such file: the name it was appended under, and under that the file as it is on disk. ",e.jsx(s,{children:"[The book](/dougs-reference-manual/#the-book)"})," decides where a listing goes. Left to itself it prints each one under its chapter."]}),e.jsx(t,{children:"This manual's chapters are of that kind. So are the chapters at the back of any other book, where the code that builds that book is kept, which is why the back of a book reads like a page of this manual."})]}),e.jsxs(n,{children:[e.jsx(a,{children:"How a listing fits the library's patterns"}),e.jsxs(t,{children:["A listing is a paragraph with content of its own: the file's name as a word, and the file as the framework's own code figure, numbered and coloured. The book draws one for each file a chapter appends, in the leaf beside the chapter, and ",e.jsx(s,{children:"[the manual](/dougs-reference-manual/#the-manual)"})," sets the two side by side or folds the listing to a strip, its name turned on its side."]})]}),e.jsx(i,{identifier:"code",type:".tsx",children:`import { ReactNode } from 'react';
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
                    numbered
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
`})]}),"TheListing2"),E=o(()=>e.jsxs(d,{children:[e.jsx(c,{children:"[The Theme](/dougs-reference-manual/#the-theme)"}),e.jsxs(t,{children:[e.jsx(l,{}),"Every value the library's rules read, declared once, and the parts that dress the frame."]}),e.jsxs(n,{children:[e.jsx(a,{children:"What the theme is"}),e.jsx(t,{children:"The theme is where this library keeps its values, and the one styled component every book is drawn inside. The framework's own theme has no values and no rules, so everything here is mine. Its values are the frame's sketch's own, named as that file names them, by role: the bar and what is read on it — the bar, its ink, its dim ink, what is on, its line, the mark; the side bar and what is read on it; the paper and the ink, the soft and the line; the orange that is me, one serif and one sans; the width of the side bar; the faces, sizes and spaces. Five of them are the ones a book sets to have a colour scheme of its own — its colour, its accent, its side bar, its paper and its ink — and the frame reads those and nothing else, so every book not yet written has a scheme the moment it sets five values."})]}),e.jsxs(n,{children:[e.jsx(a,{children:"How the theme fits the library's patterns"}),e.jsxs(t,{children:["Every value the library reads is declared here, so a rule anywhere reads it and a template anywhere is typed against one theme; a book's own theme sets values and adds parts, and declares nothing. The rules are parts, each a method that returns some rules for one thing on the page — the page, the writing, the links, the figures, the listings, the switches, the turns, the library's bar, the head, the holds, the tones — composed once in the field that holds the component, so a book's theme changes one part and keeps the rest. What a reader switches is never a part: ",e.jsx(s,{children:"[a tone](/dougs-reference-manual/#the-tone)"}),", a reading, a paper each add a class, and the parts that read those classes are here, always."]})]}),e.jsxs(n,{children:[e.jsx(a,{children:"How the theme is used"}),e.jsxs(t,{children:["A book's theme is a class under this one, registered on the book's class in one line. ",e.jsx(s,{children:"[The manual's](/dougs-reference-manual/#the-manual)"})," sets its measure, its spread's column and the teal of its sketch as its colour, accent and side bar, and adds the parts for its index and its words; the catalogue's keeps the base's values, which are the site's own, and adds the parts for its front and its covers; my story's sets its prose face, its amber on book paper and its three papers' values; the design book's its rose on white."]})]}),e.jsxs(n,{children:[e.jsx(a,{children:"Where the theme bites"}),e.jsx(t,{children:"A part of a theme must not take the name of a value the theme declares, nor of a member the class has, nor of a part the base already has unless it says it overrides and spreads the base's into its own: each of these happened once — a part named side, a part named frame, a part named cards, a part named head — and each broke the page somewhere else without a word. The typecheck in the binder's folder names the first two kinds; the third it does not, so the base's part names are listed in each book's chapter. A value that would be computed from another is computed in the template, never in a field, or a book that changes the first never reaches the second."})]}),e.jsx(i,{identifier:"code",type:".tsx",children:`import { ElementType } from 'react';
import { css, RuleSet } from 'styled-components';
import { $, selection } from '@dna-platform/chemistry';
import { $Theme } from '@dna-platform/public';

declare module 'styled-components' {
    export interface DefaultTheme extends $LibraryBookTheme {}
}

export class $LibraryBookTheme extends $Theme {
    font = "'Inter', system-ui, sans-serif";
    prose = "'Inter', system-ui, sans-serif";
    mono = "'JetBrains Mono', ui-monospace, monospace";
    size = '0.875rem';
    leading = '1.6';
    measure = '44rem';
    spreadColumn = '15.5rem';
    space = '1.5rem';
    holdsColumn = '240px';
    barHeight = '50px';
    beat = '320ms';
    narrow = '48rem';
    colour = '#4e9eb9';
    accent = '#166178';
    bar = '#0c1b1f';
    barInk = '#ffffff';
    barDim = '#a9bcc1';
    barOn = 'rgba(255, 255, 255, 0.11)';
    barLine = '#1d3339';
    mark = '#c8f4fb';
    side = '#e3f5fa';
    sideInk = '#10252c';
    sideDim = '#516770';
    sideOn = '#ffffff';
    sideLine = '#cbe6ee';
    night = '#0c1b1f';
    deep = '#14323c';
    blue = '#166178';
    sea = '#4e9eb9';
    sky = '#8fc8dc';
    opal = '#c8f4fb';
    pale = '#e3f5fa';
    mist = '#f1f7f9';
    white = '#ffffff';
    ink = '#10252c';
    soft = '#516770';
    line = '#dbe7ec';
    me = '#e8590c';
    wash = 'linear-gradient(105deg, #e2f6fb 0%, #ecf0fd 52%, #fae9f4 100%)';
    serif = "'Cormorant Garamond', Georgia, serif";
    bookPaper = '#fbf9f3';
    bookInk = '#29251d';
    heading = '#10252c';
    capital = '#166178';
    lit = '#166178';
    faint = '#8792a2';
    paper = '#ffffff';
    panel = '#f1f7f9';
    rule = '#dbe7ec';
    edge = 'transparent';
    tint = '#e3f5fa';
    dusk = '#14323c';
    glow = '#cfe6e3';
    dim = '#4f7672';
    keyword = '#8ad7ff';
    string = '#ffd48a';
    type = '#9be3d6';
    comment = '#5f8a86';
    haze = '#a9bcc1';
    glass = 'rgba(255, 255, 255, 0.62)';
    binding = 'linear-gradient(160deg, #16303a, #0c1b1f)';
    spine = 'inset 5px 0 0 rgba(0, 0, 0, 0.14), inset 6px 0 0 rgba(255, 255, 255, 0.12), 0 10px 20px -10px rgba(0, 0, 0, 0.45)';
    shadow = '0 0.75rem 1.4rem -0.9rem rgba(12, 27, 31, 0.55)';
    initial = "'D'";
    volume = '11.5rem';
    card = '18rem';
    photo = '7rem';
    style: ElementType = selection.div\`\${this.parts()}\`;

    protected parts(): RuleSet[] {
        return [this.page(), this.writing(), this.links(), this.figures(), this.listings(), this.switches(), this.turns(), this.library(), this.head(), this.holds(), this.tones()];
    }

    protected page(): RuleSet {
        return css\`
            font-family: \${({ theme }) => theme.font};
            font-size: \${({ theme }) => theme.size};
            line-height: \${({ theme }) => theme.leading};
            color: \${({ theme }) => theme.ink};
            background: \${({ theme }) => theme.paper};
            min-height: 100vh;
        \`;
    }

    protected writing(): RuleSet {
        return css\`
            .pd-leaves { font-family: \${({ theme }) => theme.prose}; }
            .pd-chapter, .pd-section, .pd-paragraph { margin-block: \${({ theme }) => theme.space}; }
            .pd-chapter { max-width: \${({ theme }) => theme.measure}; }
        \`;
    }

    protected links(): RuleSet {
        return css\`
            .pa-reference { color: \${({ theme }) => theme.accent}; }
            .pa-reference.pa-self-reference { color: inherit; text-decoration: none; }
        \`;
    }

    protected figures(): RuleSet {
        return css\`
            .pd-image img { display: block; max-width: 100%; height: auto; }
            .pd-code { font-family: \${({ theme }) => theme.mono}; overflow-x: auto; }
        \`;
    }

    protected listings(): RuleSet {
        return css\`
            .pd-files {
                background: \${({ theme }) => theme.night};
                color: \${({ theme }) => theme.glow};
                scrollbar-width: thin;
                scrollbar-color: \${({ theme }) => theme.dim} transparent;
            }
            .pd-paragraph.pd-listing {
                margin-block: 0;
                padding: calc(\${({ theme }) => theme.space} / 2) calc(\${({ theme }) => theme.space} * 0.6);
            }
            .pd-listing .pd-word {
                display: inline-block;
                padding: calc(\${({ theme }) => theme.space} * 0.3) calc(\${({ theme }) => theme.space} / 2);
                border-start-start-radius: calc(\${({ theme }) => theme.space} * 0.3);
                border-start-end-radius: calc(\${({ theme }) => theme.space} * 0.3);
                background: \${({ theme }) => theme.dusk};
                color: \${({ theme }) => theme.paper};
                font-size: calc(0.86 * \${({ theme }) => theme.size});
            }
            .pd-listing .pd-code {
                margin: 0;
                padding-block: calc(\${({ theme }) => theme.space} * 0.66);
                border-radius: calc(\${({ theme }) => theme.space} * 0.4);
                border-start-start-radius: 0;
                background: \${({ theme }) => theme.dusk};
                font-size: calc(0.84 * \${({ theme }) => theme.size});
                line-height: 1.75;
                scrollbar-width: thin;
                scrollbar-color: \${({ theme }) => theme.dim} transparent;
            }
            .pd-code-line { padding-inline-end: calc(\${({ theme }) => theme.space} * 0.75); }
            .pd-code-line::before {
                content: attr(data-line);
                display: inline-block;
                width: calc(\${({ theme }) => theme.space} * 1.17);
                padding-inline-end: calc(\${({ theme }) => theme.space} * 0.58);
                text-align: end;
                color: \${({ theme }) => theme.dim};
                user-select: none;
            }
            .hljs-keyword, .hljs-built_in, .hljs-literal { color: \${({ theme }) => theme.keyword}; }
            .hljs-string, .hljs-regexp, .hljs-number { color: \${({ theme }) => theme.string}; }
            .hljs-title, .hljs-type, .hljs-tag, .hljs-name, .hljs-attr { color: \${({ theme }) => theme.type}; }
            .hljs-comment, .hljs-meta { color: \${({ theme }) => theme.comment}; }
        \`;
    }

    protected switches(): RuleSet {
        return css\`
            .pd-switch {
                font: inherit;
                color: \${({ theme }) => theme.soft};
                background: \${({ theme }) => theme.paper};
                border: thin solid \${({ theme }) => theme.line};
                border-radius: calc(\${({ theme }) => theme.space} / 4);
                padding: calc(\${({ theme }) => theme.space} / 8) calc(\${({ theme }) => theme.space} / 2);
                cursor: pointer;
            }
            .pd-word.pd-switch[aria-pressed='true'] {
                color: \${({ theme }) => theme.white};
                background: \${({ theme }) => theme.accent};
                border-color: \${({ theme }) => theme.accent};
            }
        \`;
    }

    protected library(): RuleSet {
        return css\`
            .pd-library { padding: calc(\${({ theme }) => theme.space} * 0.375) calc(\${({ theme }) => theme.space} * 0.75); }
            .pd-library .pd-paragraph, .pd-me .pd-paragraph { margin-block: 0; }
            .pd-me { padding: 0 calc(\${({ theme }) => theme.space} * 0.75); }
            .pd-library .pd-filed-under, .pd-me .pd-byline {
                display: flex;
                align-items: center;
                gap: calc(\${({ theme }) => theme.space} * 0.4);
                font-size: calc(0.83 * \${({ theme }) => theme.size});
            }
            .pd-library .pd-word, .pd-me .pd-word { font-weight: 500; }
            .pd-library .pd-word.pa-label, .pd-me .pd-word.pa-label { font-weight: 400; }
            .pd-library .pd-filed-under .pd-word {
                font-family: \${({ theme }) => theme.serif};
                font-size: calc(1.45 * \${({ theme }) => theme.size});
                font-weight: 600;
                line-height: 1;
            }
            .pd-library .pa-reference, .pd-me .pa-reference { color: inherit; text-decoration: none; }
            .pd-library .pd-filed-under::before, .pd-me .pd-byline::before {
                content: \${({ theme }) => theme.initial};
                display: grid;
                place-items: center;
                width: calc(\${({ theme }) => theme.space} * 1.3);
                height: calc(\${({ theme }) => theme.space} * 1.3);
                font-size: \${({ theme }) => theme.size};
                font-weight: 600;
            }
            .pd-library .pd-filed-under::before { border-radius: calc(\${({ theme }) => theme.space} / 3); }
            .pd-me .pd-byline::before {
                border-radius: 50%;
                background: \${({ theme }) => theme.me};
                color: \${({ theme }) => theme.white};
            }
            .pd-subjects { min-width: 0; }
            .pd-subjects .pd-section {
                display: flex;
                gap: calc(\${({ theme }) => theme.space} / 12);
                margin-block: 0;
            }
            .pd-subjects .pd-paragraph {
                display: flex;
                align-items: center;
                gap: calc(\${({ theme }) => theme.space} / 3);
                padding: calc(\${({ theme }) => theme.space} * 0.29) calc(\${({ theme }) => theme.space} * 0.42);
                border-radius: calc(\${({ theme }) => theme.space} / 3);
                font-size: calc(0.964 * \${({ theme }) => theme.size});
                white-space: nowrap;
            }
            .pd-subjects .pd-paragraph::before {
                content: '';
                width: calc(\${({ theme }) => theme.space} * 0.375);
                height: calc(\${({ theme }) => theme.space} * 0.375);
                border-radius: 50%;
                background: var(--colour, \${({ theme }) => theme.barDim});
            }
            .pd-subjects .pa-reference { color: inherit; text-decoration: none; }
        \`;
    }

    protected head(): RuleSet {
        return css\`
            .pd-head { padding: calc(\${({ theme }) => theme.space} * 0.83) calc(\${({ theme }) => theme.space} * 1.17) calc(\${({ theme }) => theme.space} * 0.58); }
            .pd-head .pd-chapter { margin-block: 0; }
            .pd-head .pd-title {
                font-family: \${({ theme }) => theme.serif};
                font-size: calc(2.57 * \${({ theme }) => theme.size});
                font-weight: 600;
                line-height: 1.04;
                color: \${({ theme }) => theme.heading};
            }
        \`;
    }

    protected holds(): RuleSet {
        return css\`
            .pd-holds { padding: calc(\${({ theme }) => theme.space} * 0.83) calc(\${({ theme }) => theme.space} / 2); }
            .pd-holds .pd-chapter { margin-block: 0; color: \${({ theme }) => theme.soft}; }
            .pd-holds .pd-section { margin-block: \${({ theme }) => theme.space} 0; }
            .pd-holds .pd-heading {
                display: flex;
                justify-content: space-between;
                margin-block: 0 calc(\${({ theme }) => theme.space} / 3);
                padding-inline: calc(\${({ theme }) => theme.space} * 0.375);
                font-size: calc(0.76 * \${({ theme }) => theme.size});
                font-weight: 600;
                letter-spacing: 0.12em;
                text-transform: uppercase;
                color: \${({ theme }) => theme.soft};
            }
            .pd-holds .pd-paragraph.pa-entry {
                position: relative;
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: calc(\${({ theme }) => theme.space} * 0.375);
                margin-block: 0;
                padding: calc(\${({ theme }) => theme.space} / 4) calc(\${({ theme }) => theme.space} * 0.375) calc(\${({ theme }) => theme.space} / 4) calc(\${({ theme }) => theme.space} * 1.1);
                border-radius: calc(\${({ theme }) => theme.space} / 3);
                font-weight: 500;
                color: \${({ theme }) => theme.ink};
            }
            .pd-holds .pd-paragraph.pa-entry::before {
                content: '';
                position: absolute;
                inset-inline-start: calc(\${({ theme }) => theme.space} * 0.375);
                width: calc(\${({ theme }) => theme.space} * 0.375);
                height: calc(\${({ theme }) => theme.space} * 0.375);
                border-radius: 50%;
                background: var(--colour, \${({ theme }) => theme.colour});
            }
            .pd-holds .pd-paragraph.pa-entry.pa-open { background: \${({ theme }) => theme.sideOn}; color: \${({ theme }) => theme.accent}; }
            .pd-holds .pd-paragraph.pa-entry .pd-word + .pd-word {
                margin-inline-start: auto;
                font-size: calc(0.83 * \${({ theme }) => theme.size});
                opacity: 0.55;
            }
            .pd-holds .pa-reference.pa-reference { color: inherit; text-decoration: none; }
            .pd-holds .pd-section.pa-appendix { opacity: 0.72; }
            .pd-holds .pd-section.pa-appendix .pd-heading { font-size: calc(0.66 * \${({ theme }) => theme.size}); }
            .pd-holds .pd-section.pa-appendix .pd-paragraph.pa-entry { font-size: calc(0.86 * \${({ theme }) => theme.size}); }
            @media not all and (max-width: \${({ theme }) => theme.narrow}) {
                .pd-holds > * { display: flex; flex-direction: column; min-height: 100%; }
                .pd-holds .pd-chapter.pa-table-of-contents { flex: 1; display: flex; flex-direction: column; }
                .pd-holds .pd-section.pa-appendix { margin-block-start: auto; }
            }
            @media (max-width: \${({ theme }) => theme.narrow}) {
                .pd-holds { padding: calc(\${({ theme }) => theme.space} * 0.42) calc(\${({ theme }) => theme.space} * 0.67) calc(\${({ theme }) => theme.space} / 2); }
                .pd-holds .pd-chapter, .pd-holds .pd-section {
                    display: flex;
                    align-items: center;
                    gap: calc(\${({ theme }) => theme.space} / 4);
                    margin-block: 0;
                }
                .pd-holds .pd-title { display: none; }
                .pd-holds .pd-heading { flex: none; margin: 0 calc(\${({ theme }) => theme.space} / 4) 0 calc(\${({ theme }) => theme.space} / 2); padding: 0; }
                .pd-holds .pd-paragraph.pa-entry {
                    flex: none;
                    padding: calc(\${({ theme }) => theme.space} * 0.21) calc(\${({ theme }) => theme.space} * 0.46) calc(\${({ theme }) => theme.space} * 0.21) calc(\${({ theme }) => theme.space} * 0.375);
                    border: thin solid currentColor;
                    border-radius: calc(\${({ theme }) => theme.space} * 4);
                    white-space: nowrap;
                }
                .pd-holds .pd-paragraph.pa-entry::before { display: none; }
            }
        \`;
    }

    protected tones(): RuleSet {
        return css\`
            .pa-dark .pd-library, .pa-dark .pd-me {
                background: \${({ theme }) => theme.bar};
                color: \${({ theme }) => theme.barInk};
            }
            .pa-dark .pd-library .pd-word, .pa-dark .pd-me .pd-word { color: \${({ theme }) => theme.barInk}; }
            .pa-dark .pd-library .pa-label, .pa-dark .pd-me .pa-label, .pa-dark .pd-subjects .pd-paragraph { color: \${({ theme }) => theme.barDim}; }
            .pa-dark .pd-library .pd-filed-under::before {
                background: \${({ theme }) => theme.mark};
                color: \${({ theme }) => theme.bar};
            }
            .pa-dark .pd-holds, .pa-light .pd-holds {
                background: \${({ theme }) => theme.side};
                color: \${({ theme }) => theme.sideInk};
                border-inline-end: thin solid \${({ theme }) => theme.sideLine};
            }
            .pa-dark .pd-holds .pd-chapter, .pa-dark .pd-holds .pd-heading, .pa-light .pd-holds .pd-chapter, .pa-light .pd-holds .pd-heading { color: \${({ theme }) => theme.sideDim}; }
            .pa-light .pd-library, .pa-light .pd-me, .pa-white-over-black .pd-library, .pa-white-over-black .pd-me {
                background: \${({ theme }) => theme.paper};
                color: \${({ theme }) => theme.ink};
            }
            .pa-light .pd-library, .pa-white-over-black .pd-library { border-block-end: thin solid \${({ theme }) => theme.line}; }
            .pa-light .pd-library .pd-word, .pa-light .pd-me .pd-word, .pa-white-over-black .pd-library .pd-word, .pa-white-over-black .pd-me .pd-word { color: \${({ theme }) => theme.ink}; }
            .pa-light .pd-library .pa-label, .pa-light .pd-me .pa-label, .pa-light .pd-subjects .pd-paragraph, .pa-white-over-black .pd-library .pa-label, .pa-white-over-black .pd-me .pa-label, .pa-white-over-black .pd-subjects .pd-paragraph { color: \${({ theme }) => theme.soft}; }
            .pa-light .pd-library .pd-filed-under::before, .pa-white-over-black .pd-library .pd-filed-under::before {
                background: \${({ theme }) => theme.bar};
                color: \${({ theme }) => theme.barInk};
            }
            .pa-white-over-black .pd-holds {
                background: \${({ theme }) => theme.bar};
                color: \${({ theme }) => theme.barInk};
                border-inline-end: thin solid \${({ theme }) => theme.barLine};
            }
            .pa-white-over-black .pd-holds .pd-chapter, .pa-white-over-black .pd-holds .pd-heading { color: \${({ theme }) => theme.barDim}; }
            .pa-white-over-black .pd-holds .pd-paragraph.pa-entry { color: \${({ theme }) => theme.barInk}; }
            .pa-white-over-black .pd-holds .pd-paragraph.pa-entry.pa-open { background: \${({ theme }) => theme.barOn}; color: \${({ theme }) => theme.barInk}; }
        \`;
    }

    protected turns(): RuleSet {
        return css\`
            .pd-paragraph.pd-turn {
                display: flex;
                justify-content: space-between;
                gap: \${({ theme }) => theme.space};
                font-size: calc(0.786 * \${({ theme }) => theme.size});
            }
            .pd-turn .pa-reference { font-weight: 500; text-decoration: none; }
            .pd-turn .pd-count { color: \${({ theme }) => theme.faint}; }
        \`;
    }
}

export const LibraryBookTheme = $($LibraryBookTheme);
`})]}),"TheTheme3"),P=o(()=>e.jsxs(d,{children:[e.jsx(c,{children:"[The Date](/dougs-reference-manual/#the-date)"}),e.jsxs(t,{children:[e.jsx(l,{}),"Said of a chapter that carries the day it was written."]}),e.jsxs(n,{children:[e.jsx(a,{children:"What a dated chapter is"}),e.jsx(t,{children:"A chapter of mine may say when it is from. It says so once: the words I want read, and the day a machine can read, with the time where I know it. The date itself is the framework's own. What this adds is a way for a chapter to carry one, so that a book can ask a chapter for its date, and every dated chapter can be found."}),e.jsxs(t,{children:["The chapter draws its date at its foot. The chapters of ",e.jsx(s,{children:"[Dougs Story](/dougs-story/)"})," are dated, and no book of mine sorts by date yet."]})]}),e.jsxs(n,{children:[e.jsx(a,{children:"How a date fits the library's patterns"}),e.jsx(t,{children:"Dated is said of a chapter, and the date it holds is the framework's own word for a day, read the way a title or a mention reads its words. Nothing is found by where it stands: a chapter is dated because it says so, and a book that will sort by recency asks each chapter for its date."})]}),e.jsx(i,{identifier:"code",type:".tsx",children:`import { ReactNode } from 'react';
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
`})]}),"TheDate4"),M=o(()=>e.jsxs(d,{children:[e.jsx(c,{children:"[Initializing a Library](/dougs-reference-manual/#initializing-a-library)"}),e.jsxs(t,{children:[e.jsx(l,{}),"How this library was first set up, step by step."]}),e.jsxs(n,{children:[e.jsx(a,{children:"What a library needs to begin"}),e.jsxs(t,{children:["A library is books and nothing else, and it begins with three. The library's own catalogue, which is the top: every other book is filed under it, and it is filed under what it is about, which is itself. The librarian's autobiography, the one book that is by its own subject, which grounds who may author anything here. And a reference manual, this book, where the reusable parts of the library are kept beside the chapters that say what they are. Each is a folder, and the folders here are ",e.jsx(s,{children:"[Dougs Library](/dougs-library/)"})," in a folder named as a library catalogue, ",e.jsx(s,{children:"[Dougs Story](/dougs-story/)"})," in one named as a subject, and this manual in one named as a subject too. A fourth is beside them, ",e.jsx(s,{children:"[Dougs Design](/dougs-design/)"}),", where the design of the library is kept. The compiler reads no folder name; the dots are a convention kept for the person reading the tree."]})]}),e.jsxs(n,{children:[e.jsx(a,{children:"What a book is made of"}),e.jsx(t,{children:"A folder is a book when it holds a book file, and a book holds four files before any chapter:"}),e.jsxs(t,{children:[e.jsx(v,{}),e.jsx(p,{children:"a book file, which exports the class the book is, taken from this manual's book file;"}),e.jsx(p,{children:"a cover, which says the book's title, who wrote it, where it is filed and what it is about;"}),e.jsx(p,{children:"a synopsis, which says what the book is in a paragraph, and is what a catalogue's row refers to;"}),e.jsx(p,{children:"a table of contents, which answers for the chapters the book holds and for the books it catalogues."})]}),e.jsx(t,{children:"The compiler holds the table to its word: it must link to every chapter of its book, itself among them, and to every book filed under it, or the bind refuses."}),e.jsx(t,{children:"Then numbered chapters, each a file whose first words are its title. A file beside a chapter, named for it with an identifier and a type, is the chapter's to print or to import, and the compiler refuses one the chapter does not use."})]}),e.jsxs(n,{children:[e.jsx(a,{children:"What a cover says"}),e.jsx(t,{children:"Everything a cover says is said in the notation, whatever element holds it. Two brackets around a name is a title. A second title form on a cover is what the book is about, the name of the subject it represents, which need not be the book's name: this library is called Dougs Library and is about The Library, and the autobiography is about The Librarian, so an author is written as The Librarian and a book is filed under The Library. One star before the brackets says who wrote the book; two say which catalogue it is filed under. The top says it is filed under itself, and the compiler requires that one book here does so, or there is no library."})]}),e.jsxs(n,{children:[e.jsx(a,{children:"The face, and the bind"}),e.jsx(t,{children:"The library publishes to a face, a folder beside the books that holds the binding and the site it builds. The face is made once, by running the master binding's copy script pointed at the library's folder; it names the face with as many dots as put it above every book, and writes a configuration naming where the copy came from, so that syncing brings the master in before every build. The configuration also names the root book, the title of the site, and the stylesheets and fonts a page loads. Then the bind: it reads every book, checks the library is well-formed, and writes one page per book. Every fault it raises is a sentence a librarian could say about the library without knowing the compiler exists, no title, not listed, may not author, and the library is initialized when it raises none."}),e.jsx(t,{children:"The bind is run in the face's binding folder, as npm run bind, and the site it builds is served from that folder with npx vite preview. The face keeps the pictures that stood beside a chapter after they are taken out of the book, until that book's folder in the face is cleared by hand."}),e.jsxs(t,{children:["The bind publishes the library. It is not how I look at the library while I am writing it, and that is said in ",e.jsx(s,{children:"[Developing a Library](/dougs-reference-manual/#developing-a-library)"}),"."]})]})]}),"InitializingALibrary5"),H=o(()=>e.jsxs(d,{children:[e.jsx(c,{children:"[Developing a Library](/dougs-reference-manual/#developing-a-library)"}),e.jsxs(t,{children:[e.jsx(l,{}),"How a page of this library is worked on with the page open, and bound once."]}),e.jsxs(n,{children:[e.jsx(a,{children:"The page stays open"}),e.jsx(t,{children:"I develop this library with its pages open. The binder serves the library live, straight from the files I am writing, and when I save one the open page changes in place: a sentence in a chapter in a quarter of a second, a rule in a theme in about half of one. Nothing is bound and the page is not loaded again. If what I saved breaks the library, the page says so in the compiler's own sentence, and the sentence goes when I mend the file."}),e.jsx(t,{children:"This is the only way I look at the library while I am working on it. Work on how a page looks needs its answer at once, and a way of working that cannot give one has failed at what it is for."})]}),e.jsxs(n,{children:[e.jsx(a,{children:"The workbench"}),e.jsx(t,{children:"The workbench is the tool I do this with. Opened once, it starts the live site and keeps a browser open on it. After that I ask it for a look at any book. It waits for my last save to reach the page, photographs the page at a desk's width or a phone's, and tells me:"}),e.jsxs(t,{children:[e.jsx(v,{}),e.jsx(p,{children:"what the page says, or any part of it;"}),e.jsx(p,{children:"what a rule computes to on an element, and where the element is;"}),e.jsx(p,{children:"how many things run past the right edge of the screen;"}),e.jsx(p,{children:"anything that went wrong on the page, and what the compiler says is wrong if it stopped."})]}),e.jsxs(t,{children:["A look takes under a second, because the browser is already open and the page is already drawn. It can press something first, load the page again as a reader arriving would, and say which of the rules that name a thing wins. What the workbench does for a book is what ",e.jsx(s,{children:"[the camera](/dougs-design/#the-camera)"})," does for a concept, and it is kept here for the same reason the camera is kept there, which is told in ",e.jsx(s,{children:"[Closure](/dougs-story/#closure)"}),"."]})]}),e.jsxs(n,{children:[e.jsx(a,{children:"When I bind"}),e.jsxs(t,{children:["The bind is how the library is published, and it is not how I look at it. What it does is said in ",e.jsx(s,{children:"[Initializing a Library](/dougs-reference-manual/#initializing-a-library)"}),". It takes seconds where a save takes none, so I bind when a piece of work is done."]}),e.jsx(t,{children:"The bind checks three things the live site does not: each book against its own rules, each page as it is printed for a reader who arrives before the code does, and every link against the page it leads to. So my last look at finished work is at the site the bind built, loaded afresh, and the workbench takes that look too."})]}),e.jsx(i,{identifier:"workbench",type:".mjs",children:`// The workbench: the library served live from its sources, a browser kept open on it, and a way to ask that
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
`})]}),"DevelopingALibrary6"),q=o(()=>e.jsxs(d,{children:[e.jsx(c,{children:"[The Author and the Subject](/dougs-reference-manual/#the-author-and-the-subject)"}),e.jsxs(t,{children:[e.jsx(l,{}),"Two paragraphs every book draws from its cover: by whom, and filed under what."]}),e.jsxs(n,{children:[e.jsx(a,{children:"What the two lines is"}),e.jsxs(t,{children:["Every cover in this library names who wrote the book and what it is filed under, and the compiler refuses a book that leaves out either. Naming them draws nothing: the framework keeps both on the cover as facts and leaves it to a library to show them. So ",e.jsx(s,{children:"[the book](/dougs-reference-manual/#the-book)"})," draws them on every book as two paragraphs: by, which leads to the author's own book, and filed under, which leads to the book that catalogues this one. They are the way out of any book and into the rest of the library, and a book of mine is never drawn without them."]})]}),e.jsxs(n,{children:[e.jsx(a,{children:"How the two lines fits the library's patterns"}),e.jsx(t,{children:"Each is a paragraph with content of its own, written by the book, never by a chapter, so the frame places them: filed under stands at the head of the library's bar as its mark and its name, and by stands as me, at the bar's end or the column's foot. Each opens with a word said to be a label — by, filed under — so a theme sets the label apart from the name and a phone can keep the face and drop the words, as the frame's sketch does."})]}),e.jsxs(n,{children:[e.jsx(a,{children:"How the two lines is used"}),e.jsxs(t,{children:["A book writes nothing for them; it writes its cover with an author and a subject, and the base draws both. The mark before filed under and the face before by are the theme's, in the colours of ",e.jsx(s,{children:"[the tone](/dougs-reference-manual/#the-tone)"}),"."]})]}),e.jsxs(n,{children:[e.jsx(a,{children:"Where the two lines bite"}),e.jsx(t,{children:"The two were once lines inside the cover, put there so a rule could reach them, and the catalogue's bars then tore the cover apart to place them; a paragraph the book draws goes where the book puts it."})]}),e.jsx(i,{identifier:"code",type:".tsx",children:`import { ReactNode } from 'react';
import { $, $check } from '@dna-platform/chemistry';
import { $Annotation, $Paragraph, $Word, $Writing, AnnotationSpecification, Reference as reference, Word as word, specify } from '@dna-platform/public';

export class $Label extends $Annotation {
    specification = new LabelSpecification();

    override defines(writing: $Writing): void {
        writing.classes.add(this, 'pa-label');
    }

    override erase(writing: $Writing): void {
        writing.classes.revert(this);
    }
}

export class LabelSpecification extends AnnotationSpecification {
    @specify('label is said of a word')
    $saidOfAWord(writing: $Writing): void {
        $check(writing instanceof $Word, 'label is said of a word, and this is not one');
    }
}

export const Label = $($Label);

export class $Byline extends $Paragraph {
    override write(): ReactNode {
        const author = this.book!.author!;
        const Word = $(word);
        const Said = $(Label);
        const Reference = $(reference);
        return (
            <>
                <Word>
                    <Said />
                    by
                </Word>
                <Word>
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
        const Said = $(Label);
        const Reference = $(reference);
        return (
            <>
                <Word>
                    <Said />
                    filed under
                </Word>
                <Word>
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
`})]}),"TheAuthorAndTheSubject8"),G=o(()=>e.jsxs(d,{children:[e.jsx(c,{children:"[The Switch](/dougs-reference-manual/#the-switch)"}),e.jsxs(t,{children:[e.jsx(l,{}),"A word a reader presses to say one thing of the book, and one of a set."]}),e.jsxs(n,{children:[e.jsx(a,{children:"What a switch is"}),e.jsx(t,{children:"A switch is a word drawn as a button. It is given one thing that can be said of a book. Pressed, it says that thing of the book I am reading; pressed again, it takes it back; and the button reports whether the thing is said by asking the book. Some switches come as a set where only one can hold — the paper a book is printed on, the tone of the frame, where the bars go. A tab is a switch for that: given its own thing and the set it belongs to, it says its own and takes back the others, and pressing the one that already holds changes nothing."})]}),e.jsxs(n,{children:[e.jsx(a,{children:"How a switch fits the library's patterns"}),e.jsxs(t,{children:["The book I am reading is given the thing in front of what its class already says, and draws again; so a view I can switch to is written the same way as a view a book always has, and what a book shows before I press anything is said once, by its class, in one line of registration. A switch only adds; it cannot take away something the class says itself. And the thing a switch says is always an annotation that adds a class — ",e.jsx(s,{children:"[a tone](/dougs-reference-manual/#the-tone)"}),", a reading, a paper — with the rules that read the class in a theme or a format that is always there, so a press changes a class on the book and redraws nothing."]})]}),e.jsxs(n,{children:[e.jsx(a,{children:"How a switch is used"}),e.jsxs(t,{children:[e.jsx(s,{children:"[The book](/dougs-reference-manual/#the-book)"})," draws no switch of its own, because the catalogue has nothing to switch; a type that has something to choose from draws it in its switches: the manual its two readings, my story its three papers, the design book its two tones, so I can look at them. Every switch is one a reader of that book wants; the outline every book once carried was a developer's tool on a reader's page, and it went."]})]}),e.jsxs(n,{children:[e.jsx(a,{children:"Where a switch bites"}),e.jsx(t,{children:"A Format given through a switch is a container, and a container put in front of the book remounts everything inside it — measured on the first tone, and then found on every paper, none of which anyone had counted. The rule that follows is the one above: what a reader presses adds a class, and the rules were always there."})]}),e.jsx(i,{identifier:"code",type:".tsx",children:`import { ElementType, ReactNode } from 'react';
import { $, $Chemical } from '@dna-platform/chemistry';
import { $Annotation, $Word, Given } from '@dna-platform/public';

export class $Switch extends $Word {
    $of!: Given<$Annotation>;
    protected _button!: ElementType;
    get on(): boolean { return this.book!.is(this.$of); }

    $Switch(...chemicals: $Chemical[]) {
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
        this.classes.add(this, 'pd-switch');
    }
}

export class $Tab extends $Switch {
    $among!: Given<$Annotation>[];

    override press(): void {
        const book = this.book!;
        const kept = [book.$is].flat().filter(each => !this.$among.includes(each));
        book.$is = [this.$of, ...kept];
    }
}

export const Switch = $($Switch);
export const Tab = $($Tab);
`})]}),"TheSwitch9"),U=o(()=>e.jsxs(d,{children:[e.jsx(c,{children:"[The Manual](/dougs-reference-manual/#the-manual)"}),e.jsxs(t,{children:[e.jsx(l,{}),"The type of book that shows a chapter beside its file, read code first or words first."]}),e.jsxs(n,{children:[e.jsx(a,{children:"What a manual is"}),e.jsxs(t,{children:["A manual is one of the types of book in my library. It is read to learn how to use the code, so every chapter of it is about one tool and ends in the file that tool is: the chapter beside the file, as ",e.jsx(s,{children:"[Side by Side](/dougs-design/#side-by-side)"})," has it, read two ways — ",e.jsx(s,{children:"[the code in front](/dougs-design/#the-code-in-front)"})," and ",e.jsx(s,{children:"[the words in front](/dougs-design/#the-words-in-front)"}),". This book is one."]})]}),e.jsxs(n,{children:[e.jsx(a,{children:"How a manual fits the library's patterns"}),e.jsxs(t,{children:["The frame is ",e.jsx(s,{children:"[the book's](/dougs-reference-manual/#the-book)"}),"; the manual overrides only its switches. What it adds is inside the page: the spread, a Format the manual gives itself when it is defined, which sets a chapter's words and its file in two columns on the open leaf and carries the geometry of both readings keyed by the reading's class. A reading is an annotation of one kind, as ",e.jsx(s,{children:"[a tone](/dougs-reference-manual/#the-tone)"})," is: words in front, where the file folds to a strip at the right with its name turned on its side, and code in front, where the file takes the room and the chapter keeps its title and its brief in a column beside it, its sections put away. The move between them is a transition of the grid's columns, a beat long."]}),e.jsxs(t,{children:["The brief is a paragraph said to be so, written after every chapter's title: a much smaller synopsis of the tool for the code reading, where the words that teach are put away. The manual's own specification refuses a chapter that has none. Its cover and its table of contents are the framework's with a look, the table being ",e.jsx(s,{children:"[the index](/dougs-reference-manual/#the-entry)"})," with its own kind of entry registered, which shows the type of the file a chapter appends."]})]}),e.jsxs(n,{children:[e.jsx(a,{children:"How a manual is used"}),e.jsx(t,{children:"A chapter about a tool writes its title, a paragraph that says it is brief, its sections, and an append for each file beside it; the manual draws the rest. A new tool is a new chapter beside its file, listed in the table under its group. The two readings are tabs at the head; words in front is the manual's default, registered on its class, and the light tone with it, since its sketch is a light one."})]}),e.jsxs(n,{children:[e.jsx(a,{children:"Where a manual bites"}),e.jsx(t,{children:"The readings were once a Format given through the switch, and a press replaced the whole book beneath it; they are classes now and the rules were always in the spread. A paragraph that is brief must stand directly under the chapter, before its sections, or the rule that asks for it does not find it. The press on the folded strip itself does not open the code; the tab does."})]}),e.jsx(i,{identifier:"code",type:".tsx",children:`import { ReactNode } from 'react';
import { $, $check, selection } from '@dna-platform/chemistry';
import { $Annotation, $Format, $Paragraph, $Writing, Given, specify } from '@dna-platform/public';
import { $LibraryBook, LibraryBookSpecification } from './1-the-book~code.tsx';
import { OfABookSpecification } from './1-the-book~said.tsx';
import { Tab as tab } from './9-the-switch~code.tsx';
import { Light as light, Tone as tone } from './16-the-tone~code.tsx';
import { $Brief, CodeForward as codeForward, Reading as reading, WordsForward as wordsForward } from './10-the-manual~forward.tsx';

export class $Spread extends $Format {
    specification = new OfABookSpecification();
    themeProvider = true;
    style = selection.div\`
        .pa-spread .pd-leaf.pd-open {
            display: grid;
            grid-template-columns: minmax(0, 1fr) calc(2.2 * \${({ theme }) => theme.spreadColumn});
            grid-template-areas: 'words files';
            height: 100%;
            transition: grid-template-columns \${({ theme }) => theme.beat};
        }
        .pa-spread .pd-words { grid-area: words; overflow-y: auto; }
        .pa-spread .pd-files { grid-area: files; overflow-y: auto; min-width: 0; }
        .pa-spread .pd-files:empty { display: none; }
        .pa-spread.pa-words-forward .pd-leaf.pd-open { grid-template-columns: minmax(0, 1fr) calc(2.33 * \${({ theme }) => theme.space}); }
        .pa-spread.pa-words-forward .pd-files { overflow: hidden; }
        .pa-spread.pa-words-forward .pd-listing .pd-word {
            writing-mode: vertical-rl;
            border-start-start-radius: 0;
            border-start-end-radius: calc(\${({ theme }) => theme.space} * 0.3);
            border-end-end-radius: calc(\${({ theme }) => theme.space} * 0.3);
        }
        .pa-spread.pa-words-forward .pd-listing .pd-code { display: none; }
        .pa-spread.pa-words-forward .pd-words .pd-paragraph.pa-brief { display: none; }
        .pa-spread.pa-code-forward .pd-leaf.pd-open { grid-template-columns: calc(1.4 * \${({ theme }) => theme.spreadColumn}) minmax(0, 1fr); }
        .pa-spread.pa-code-forward .pd-words .pd-section { display: none; }
        @media (max-width: \${({ theme }) => theme.narrow}) {
            .pa-spread .pd-leaf.pd-open { display: block; height: auto; }
            .pa-spread.pa-words-forward .pd-listing .pd-word { writing-mode: horizontal-tb; }
        }
    \`;

    override defines(writing: $Writing): void {
        super.defines(writing);
        writing.classes.add(this, 'pa-spread');
    }

    override erase(writing: $Writing): void {
        super.erase(writing);
        writing.classes.revert(this);
    }
}

export const Spread = $($Spread);

export class $Manual extends $LibraryBook {
    override specification = new ManualSpecification();
    get readings(): Given<$Annotation>[] {
        return [codeForward, wordsForward];
    }

    override switches(): ReactNode {
        const Tab = $(tab);
        return (
            <>
                <Tab
                    chapter={this.cover}
                    of={codeForward}
                    among={this.readings}
                >
                    code
                </Tab>
                <Tab
                    chapter={this.cover}
                    of={wordsForward}
                    among={this.readings}
                >
                    words
                </Tab>
                {super.switches()}
            </>
        );
    }

    protected override $Define(): void {
        super.$Define();
        const Given = $(Spread);
        const Reading = $(reading);
        this.annotations.add(this,
            <Given />,
            <Reading />
        );
    }
}

export class ManualSpecification extends LibraryBookSpecification {
    @specify('every chapter of a manual opens with a brief')
    $everyChapterHasABrief(book: $Manual): void {
        $check(book.chapters.every(chapter => chapter.text.find($Paragraph).some(paragraph => paragraph.is($Brief))),
            'every chapter of a manual opens with a brief, and one here has none');
    }
}

export const Manual = $($Manual);
$(Manual, reading)(wordsForward);
$(Manual, tone)(light);
`}),e.jsx(i,{identifier:"faces",type:".tsx",children:`import { $, selection } from '@dna-platform/chemistry';
import { $Cover, $TableOfContents } from '@dna-platform/public';

export class $ManualCover extends $Cover {
    override style = selection.header\`
        .pd-chapter.pa-cover { margin-block: 0; }
        .pa-cover .pd-title {
            font-size: calc(1.04 * \${({ theme }) => theme.size});
            font-weight: 600;
        }
    \`;
}

export class $ManualTableOfContents extends $TableOfContents {
    override style = selection.nav\`
        .pd-chapter.pa-table-of-contents { margin-block: \${({ theme }) => theme.space}; }
        .pa-table-of-contents .pd-section { margin-block: calc(\${({ theme }) => theme.space} * 0.83) 0; }
        .pa-table-of-contents .pd-heading {
            font-size: calc(0.76 * \${({ theme }) => theme.size});
            font-weight: 600;
            line-height: 1;
            letter-spacing: 0.06em;
            text-transform: uppercase;
            color: \${({ theme }) => theme.faint};
            padding-inline: calc(\${({ theme }) => theme.space} / 4);
            margin-block-end: calc(\${({ theme }) => theme.space} / 3);
        }
        .pa-table-of-contents .pd-paragraph.pa-entry {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-block: 0;
            padding: calc(\${({ theme }) => theme.space} / 4) calc(\${({ theme }) => theme.space} / 3);
            border-radius: calc(\${({ theme }) => theme.space} / 4);
            color: \${({ theme }) => theme.soft};
        }
        .pa-table-of-contents .pd-paragraph.pa-entry.pa-open {
            background: \${({ theme }) => theme.tint};
            color: \${({ theme }) => theme.accent};
            font-weight: 500;
        }
        .pa-table-of-contents .pa-reference { color: inherit; text-decoration: none; }
        .pa-table-of-contents .pa-file-type {
            font-family: \${({ theme }) => theme.mono};
            font-size: calc(0.76 * \${({ theme }) => theme.size});
            color: \${({ theme }) => theme.faint};
        }
    \`;
}

export const Cover = $($ManualCover);
export const TableOfContents = $($ManualTableOfContents);
`}),e.jsx(i,{identifier:"entry",type:".tsx",children:`import { ReactNode } from 'react';
import { $, selection } from '@dna-platform/chemistry';
import { $Append } from '@dna-platform/public';
import { Manual } from './10-the-manual~code.tsx';
import { $Entry, Entry } from './14-the-entry~code.tsx';

export class $FileEntry extends $Entry {
    label = selection.span.attrs({ className: 'pa-file-type' })\`\`;
    get type(): string {
        return this.leads?.annotations.find($Append)[0]?.$type ?? '';
    }

    override note(): ReactNode {
        const Label = this.label;
        return (
            <Label>{this.type}</Label>
        );
    }
}

export const FileEntry = $($FileEntry);
$(Manual, Entry)(FileEntry);
`}),e.jsx(i,{identifier:"theme",type:".tsx",children:`import { css, RuleSet } from 'styled-components';
import { $ } from '@dna-platform/chemistry';
import { Theme } from '@dna-platform/public';
import { $LibraryBookTheme } from './3-the-theme~code.tsx';
import { Manual } from './10-the-manual~code.tsx';

export class $ManualTheme extends $LibraryBookTheme {
    measure = '58ch';
    spreadColumn = '15.5rem';
    colour = '#4fb3a8';
    side = '#e3f4f1';
    sideLine = '#c6e5df';
    ink = '#1a1f36';
    heading = '#1a1f36';
    soft = '#4f566b';
    faint = '#8792a2';
    line = '#e6e8ee';
    rule = '#e6e8ee';
    panel = '#f7f8fa';
    accent = '#0a7a70';
    capital = '#0a7a70';
    lit = '#0a7a70';
    tint = '#e3f4f1';
    night = '#0f2a33';
    dusk = '#17363f';

    protected override parts(): RuleSet[] {
        return [...super.parts(), this.index(), this.words(), this.small()];
    }

    protected override holds(): RuleSet {
        return css\`
            \${super.holds()}
            .pd-holds .pd-paragraph.pa-entry { padding: calc(\${({ theme }) => theme.space} / 4) calc(\${({ theme }) => theme.space} / 3); }
            .pd-holds .pd-paragraph.pa-entry::before { content: none; }
        \`;
    }

    protected index(): RuleSet {
        return css\`
            .pd-holds {
                background: \${({ theme }) => theme.panel};
                border-inline-end: thin solid \${({ theme }) => theme.line};
                padding: calc(\${({ theme }) => theme.space} * 0.75) calc(\${({ theme }) => theme.space} * 0.6);
                scrollbar-width: thin;
                scrollbar-color: \${({ theme }) => theme.line} transparent;
            }
            .pd-library {
                background: \${({ theme }) => theme.panel};
                border-block-end: thin solid \${({ theme }) => theme.line};
            }
            .pd-library .pd-filed-under, .pd-library .pd-byline {
                margin-block: 0;
                font-size: calc(0.83 * \${({ theme }) => theme.size});
                color: \${({ theme }) => theme.faint};
            }
            .pd-library .pd-filed-under .pa-reference, .pd-library .pd-byline .pa-reference {
                color: \${({ theme }) => theme.soft};
                text-decoration: none;
            }
            .pd-head .pd-switches { margin-block-start: calc(\${({ theme }) => theme.space} / 2); }
            .pd-head .pd-switch { font-size: calc(0.9 * \${({ theme }) => theme.size}); }
        \`;
    }

    protected words(): RuleSet {
        return css\`
            .pd-words { padding: calc(\${({ theme }) => theme.space} * 1.4) calc(\${({ theme }) => theme.space} * 1.8); }
            .pd-words .pd-chapter { margin-block: 0; }
            .pd-words .pd-title {
                font-size: calc(2.07 * \${({ theme }) => theme.size});
                font-weight: 600;
                line-height: 1.15;
                letter-spacing: -0.02em;
                margin-block-end: calc(\${({ theme }) => theme.space} * 0.4);
            }
            .pd-words .pd-section { margin-block-start: calc(\${({ theme }) => theme.space} * 1.25); }
            .pd-words .pd-heading {
                font-size: calc(0.9 * \${({ theme }) => theme.size});
                font-weight: 600;
                letter-spacing: 0.06em;
                text-transform: uppercase;
                color: \${({ theme }) => theme.faint};
                padding-block-start: calc(\${({ theme }) => theme.space} * 0.9);
                margin-block-end: calc(\${({ theme }) => theme.space} / 6);
                border-block-start: thin solid \${({ theme }) => theme.line};
            }
            .pd-words .pd-paragraph { margin-block: calc(\${({ theme }) => theme.space} * 0.4); }
            .pd-words .pd-paragraph.pd-turn { margin-block-start: calc(\${({ theme }) => theme.space} * 1.1); }
            .pd-words .pa-synopsis .pd-paragraph {
                font-size: calc(1.1 * \${({ theme }) => theme.size});
                color: \${({ theme }) => theme.soft};
            }
            .pd-book.pa-code-forward .pd-words { font-size: calc(0.9 * \${({ theme }) => theme.size}); }
        \`;
    }

    protected small(): RuleSet {
        return css\`
            @media (max-width: \${({ theme }) => theme.narrow}) {
                .pd-holds, .pd-library {
                    border-inline-end: none;
                    border-block-end: thin solid \${({ theme }) => theme.line};
                }
                .pd-words { padding: calc(\${({ theme }) => theme.space} * 0.83) calc(\${({ theme }) => theme.space} * 0.67) calc(\${({ theme }) => theme.space} / 3); }
                .pd-words .pd-title { font-size: calc(1.72 * \${({ theme }) => theme.size}); }
            }
        \`;
    }
}

export const ManualTheme = $($ManualTheme);
$(Manual, Theme)(ManualTheme);
`}),e.jsx(i,{identifier:"forward",type:".tsx",children:`import { $, $check } from '@dna-platform/chemistry';
import { $Annotation, $Paragraph, $Writing, AnnotationSpecification, specify } from '@dna-platform/public';
import { OfABookSpecification } from './1-the-book~said.tsx';

export class $Reading extends $Annotation {
    specification = new OfABookSpecification();

    override defines(writing: $Writing): void {
        for (const annotation of writing.annotations.after(this))
            if (annotation instanceof $Reading)
                writing.annotations.express(annotation, false);
        writing.classes.add(this, 'pa-reading');
    }

    override erase(writing: $Writing): void {
        writing.classes.revert(this);
    }
}

export class $CodeForward extends $Reading {
    override defines(writing: $Writing): void {
        super.defines(writing);
        writing.classes.add(this, 'pa-code-forward');
    }
}

export class $WordsForward extends $Reading {
    override defines(writing: $Writing): void {
        super.defines(writing);
        writing.classes.add(this, 'pa-words-forward');
    }
}

export class $Brief extends $Annotation {
    specification = new BriefSpecification();

    override defines(writing: $Writing): void {
        writing.classes.add(this, 'pa-brief');
    }

    override erase(writing: $Writing): void {
        writing.classes.revert(this);
    }
}

export class BriefSpecification extends AnnotationSpecification {
    @specify('brief is said of a paragraph')
    $saidOfAParagraph(writing: $Writing): void {
        $check(writing instanceof $Paragraph, 'brief is said of a paragraph, and this is not one');
    }
}

export const Reading = $($Reading);
export const CodeForward = $($CodeForward);
export const WordsForward = $($WordsForward);
export const Brief = $($Brief);
`})]}),"TheManual10"),_=o(()=>e.jsxs(d,{children:[e.jsx(c,{children:"[The Layout](/dougs-reference-manual/#the-layout)"}),e.jsxs(t,{children:[e.jsx(l,{}),"Said of every book: each chapter on a leaf of its own, one open at a time, in the frame's grid."]}),e.jsxs(n,{children:[e.jsx(a,{children:"What the layout is"}),e.jsxs(t,{children:["In printing, the layout is the arrangement of a book's parts on the sheet. Here it is said of a book, once, and it does two things. It shows one chapter at a time: ",e.jsx(s,{children:"[the book](/dougs-reference-manual/#the-book)"})," draws each chapter on a leaf of its own and says which leaf is open, and the layout hides the rest — every leaf stays in the document, so a link to any place in the book has somewhere to land. And it carries the one grid of the frame — the library's bar across the top with me at its end, what the book holds down the side, the head and the leaves beside — which every book of mine wears, because I want a top bar on every screen and a side bar on most."]})]}),e.jsxs(n,{children:[e.jsx(a,{children:"How the layout fits the library's patterns"}),e.jsx(t,{children:"The layout is the framework's own Paginated extended: it answers the framework's two questions, which chapters are pages and which is open, with the book's own pages — its chapters without the appendix — and the book's own open, and keeps the framework's way of marking them. It is a Format with a look, a styled component composed of parts — the paging, the regions, the grid, the phone — and it is given to every book when the book is defined, so it is always there. It is also the one thing on the page that knows the book's address, so it is the layout that lights the library's subject that is this book, by a rule that names that address. That is why a tone, a reading and a paper can be annotations that add a class and nothing else: the rules that read the class live in a container that never leaves."})]}),e.jsxs(n,{children:[e.jsx(a,{children:"How the layout is used"}),e.jsxs(t,{children:["A book never writes it; the book class gives it. What a type of book wants inside the page it says with a Format of its own, given the same way: the spread of ",e.jsx(s,{children:"[the manual](/dougs-reference-manual/#the-manual)"})," sets a chapter beside its file, the sheet of ",e.jsx(s,{children:"[my story](/dougs-story/#the-sheet)"})," sets the page's width. Neither is a layout; each is said of the book beside it."]})]}),e.jsxs(n,{children:[e.jsx(a,{children:"The parts of the layout"}),e.jsx(t,{children:"The paging, which hides every leaf but the open one. The regions: what each of the five does inside its area — the library's bar a row, the head a row that wraps, the holds and the leaves scrolling on their own. The areas: the frame's one grid, the side bar's width from the theme. The phone: one column, the library's bar stuck at the top at the bar's height, me fixed at the right, the table of contents a row of pills under the head."})]}),e.jsxs(n,{children:[e.jsx(a,{children:"Where the layout bites"}),e.jsx(t,{children:"A Format given through a switch is a container, and a container added to the book remounts everything inside it. The six arrangements this layout once carried were Formats, and a press replaced the whole book; measured, then made annotations, and then cut, because every book of mine wears the same frame and an arrangement is never a reader's press. Anything a reader switches follows the rule: the class changes, the rules were always there."})]}),e.jsx(i,{identifier:"code",type:".tsx",children:`import { ElementType, ReactNode } from 'react';
import { css, RuleSet } from 'styled-components';
import { $, selection } from '@dna-platform/chemistry';
import { $Chapter, $Paginated, $Writing } from '@dna-platform/public';
import type { $LibraryBook } from './1-the-book~code.tsx';
import { OfABookSpecification } from './1-the-book~said.tsx';

export class $Layout extends $Paginated {
    override specification = new OfABookSpecification();
    themeProvider = true;
    style: ElementType = selection.div<{ $at?: string }>\`
        \${this.parts()}
        .pa-dark .pd-subjects .pd-paragraph:has(> .pa-reference[href='\${props => props.$at}']) {
            background: \${({ theme }) => theme.barOn};
            color: \${({ theme }) => theme.barInk};
            box-shadow: inset 0 -2px 0 var(--colour, \${({ theme }) => theme.barDim});
        }
        .pa-light .pd-subjects .pd-paragraph:has(> .pa-reference[href='\${props => props.$at}']), .pa-white-over-black .pd-subjects .pd-paragraph:has(> .pa-reference[href='\${props => props.$at}']) {
            background: \${({ theme }) => theme.side};
            color: \${({ theme }) => theme.ink};
            box-shadow: inset 0 -2px 0 var(--colour, \${({ theme }) => theme.soft});
        }
    \`;
    override get pages(): $Chapter[] { return (this.book as $LibraryBook).pages; }
    override get open(): $Chapter | undefined { return (this.book as $LibraryBook).open; }

    protected override $Bound(): void {
        const Here = this.style;
        this.style = (props: { children?: ReactNode }) => <Here $at={(this.book as $LibraryBook).means?.identifier} {...props} />;
        super.$Bound();
    }

    override defines(writing: $Writing): void {
        for (const annotation of writing.annotations.after(this))
            if (annotation instanceof $Layout)
                writing.annotations.express(annotation, false);
        super.defines(writing);
        writing.classes.add(this, 'pa-layout');
        if (this.open !== undefined) writing.classes.add(this, 'pa-turned');
    }

    override erase(writing: $Writing): void {
        super.erase(writing);
        writing.classes.revert(this);
    }

    protected parts(): RuleSet[] {
        return [this.paging(), this.regions(), this.areas(), this.phone()];
    }

    protected paging(): RuleSet {
        return css\`
            .pd-leaf:not(.pd-open) { display: none; }
        \`;
    }

    protected regions(): RuleSet {
        return css\`
            .pd-book.pa-layout { display: grid; height: 100vh; }
            .pa-layout .pd-library {
                grid-area: library;
                display: flex;
                align-items: center;
                column-gap: calc(\${({ theme }) => theme.space} / 4);
                min-width: 0;
            }
            .pa-layout .pd-me {
                grid-area: me;
                display: flex;
                align-items: center;
                column-gap: calc(\${({ theme }) => theme.space} * 0.375);
            }
            .pa-layout .pd-holds { grid-area: holds; min-width: 0; overflow-y: auto; }
            .pa-layout .pd-head {
                grid-area: head;
                display: flex;
                flex-wrap: wrap;
                align-items: flex-end;
                justify-content: space-between;
                gap: calc(\${({ theme }) => theme.space} * 0.42) calc(\${({ theme }) => theme.space} * 0.83);
                min-width: 0;
            }
            .pa-layout .pd-switches {
                display: flex;
                flex-wrap: wrap;
                justify-content: flex-end;
                align-items: center;
                gap: calc(\${({ theme }) => theme.space} / 3);
            }
            .pa-layout .pd-leaves { grid-area: leaves; min-width: 0; overflow-y: auto; }
            .pa-layout .pd-words .pd-chapter { scroll-margin-block-start: \${({ theme }) => theme.space}; }
        \`;
    }

    protected areas(): RuleSet {
        return css\`
            .pd-book.pa-layout {
                grid-template-columns: \${({ theme }) => theme.holdsColumn} minmax(0, 1fr);
                grid-template-rows: auto auto minmax(0, 1fr);
                grid-template-areas: 'library library' 'holds head' 'holds leaves';
            }
            .pa-layout .pd-me {
                grid-area: library;
                justify-self: end;
                background: none;
            }
        \`;
    }

    protected phone(): RuleSet {
        return css\`
            @media (max-width: \${({ theme }) => theme.narrow}) {
                .pd-book.pa-layout { display: flex; flex-direction: column; height: auto; }
                .pa-layout .pd-library {
                    position: sticky;
                    top: 0;
                    z-index: 4;
                    box-sizing: border-box;
                    height: \${({ theme }) => theme.barHeight};
                    margin-inline-end: \${({ theme }) => theme.barHeight};
                    overflow: auto hidden;
                    white-space: nowrap;
                    scrollbar-width: none;
                }
                .pa-layout .pd-me {
                    position: fixed;
                    z-index: 5;
                    top: 0;
                    right: 0;
                    justify-content: center;
                    box-sizing: border-box;
                    width: \${({ theme }) => theme.barHeight};
                    height: \${({ theme }) => theme.barHeight};
                    padding: 0;
                }
                .pa-layout .pd-me .pd-word { display: none; }
                .pa-layout .pd-head { order: 1; flex-direction: column; align-items: stretch; }
                .pa-layout .pd-switches { justify-content: flex-start; }
                .pa-layout .pd-holds { order: 2; overflow: auto hidden; white-space: nowrap; scrollbar-width: none; }
                .pa-layout .pd-leaves { order: 3; overflow: visible; }
                .pa-layout .pd-words .pd-chapter { scroll-margin-block-start: calc(\${({ theme }) => theme.barHeight} + \${({ theme }) => theme.space} / 2); }
            }
        \`;
    }
}

export const Layout = $($Layout);
`})]}),"TheLayout12"),V=o(()=>e.jsxs(d,{children:[e.jsx(c,{children:"[The Turn](/dougs-reference-manual/#the-turn)"}),e.jsxs(t,{children:[e.jsx(l,{}),"The line at the foot of a chapter: the one before, which of how many, the one after."]}),e.jsxs(n,{children:[e.jsx(a,{children:"What the turn is"}),e.jsx(t,{children:"The turn is the line at the foot of every chapter that takes me to the next one or the one before: a word that leads to the chapter before, the count, which says which chapter this is and of how many, and a word that leads to the chapter after. The word before is said to be the one before and the word after the one after, so a book's theme can place the two by name — my story sets them as a grid with the count centred and an end absent at the first and last chapter."})]}),e.jsxs(n,{children:[e.jsx(a,{children:"How the turn fits the library's patterns"}),e.jsxs(t,{children:["The turn is a paragraph the book draws, with content of its own, as ",e.jsx(s,{children:"[the byline](/dougs-reference-manual/#the-author-and-the-subject)"})," is; the count is a word with content of its own; before and after are things said of a word, as the framework says Self of a title. The line asks ",e.jsx(s,{children:"[the book](/dougs-reference-manual/#the-book)"})," for its chapters, so it counts and leads through the chapters I can open, and not the cover or the table of contents. At the first chapter the one before is the chapter itself, and at the last the one after is, each a reference to itself, which is how a theme knows the end is absent."]})]}),e.jsxs(n,{children:[e.jsx(a,{children:"How the turn is used"}),e.jsx(t,{children:"No chapter writes its own: the book gives every chapter a turn when the book is whole. A book's theme styles the line — the manual's as a row with the count faint, my story's as its sketch's grid in the mono face."})]}),e.jsxs(n,{children:[e.jsx(a,{children:"Where the turn bites"}),e.jsx(t,{children:"The framework's own next and previous walk every chapter, the cover and the table among them; the turn walks the book's. A chapter the book does not place has no turn, which is what the book's rule that every chapter has a place is for."})]}),e.jsx(i,{identifier:"code",type:".tsx",children:`import { ReactNode } from 'react';
import { $, $check } from '@dna-platform/chemistry';
import { $Annotation, $Chapter, $Paragraph, $Word, $Writing, AnnotationSpecification, Reference as reference, Self as self, Word as word, specify } from '@dna-platform/public';
import type { $LibraryBook } from './1-the-book~code.tsx';

export class $Count extends $Word {
    override write(): ReactNode {
        const chapters = (this.book as $LibraryBook).pages;
        return \`\${chapters.indexOf(this.chapter!) + 1} of \${chapters.length}\`;
    }

    protected override $Define(): void {
        super.$Define();
        this.classes.add(this, 'pd-count');
    }
}

export class $Before extends $Annotation {
    specification = new OfATurnSpecification();

    override defines(writing: $Writing): void {
        writing.classes.add(this, 'pa-before');
    }

    override erase(writing: $Writing): void {
        writing.classes.revert(this);
    }
}

export class $After extends $Annotation {
    specification = new OfATurnSpecification();

    override defines(writing: $Writing): void {
        writing.classes.add(this, 'pa-after');
    }

    override erase(writing: $Writing): void {
        writing.classes.revert(this);
    }
}

export class OfATurnSpecification extends AnnotationSpecification {
    @specify('this is said of a word of a turn')
    $saidOfAWordOfATurn(writing: $Writing): void {
        $check(writing instanceof $Word && writing.parent instanceof $Turn,
            'this is said of a word of a turn, and here it is said of something else');
    }
}

export const Count = $($Count);
export const Before = $($Before);
export const After = $($After);

export class $Turn extends $Paragraph {
    get before(): $Chapter {
        const chapters = (this.book as $LibraryBook).pages;
        return chapters[chapters.indexOf(this.chapter!) - 1] ?? this.chapter!;
    }
    get after(): $Chapter {
        const chapters = (this.book as $LibraryBook).pages;
        return chapters[chapters.indexOf(this.chapter!) + 1] ?? this.chapter!;
    }

    override write(): ReactNode {
        const Word = $(word);
        const Place = $(Count);
        const Earlier = $(Before);
        const Later = $(After);
        const Leads = $(this.before === this.chapter ? self : reference);
        const Follows = $(this.after === this.chapter ? self : reference);
        return (
            <>
                <Word>
                    <Earlier />
                    <Leads>{this.before.mention!.identifier}</Leads>
                    ← {this.before.title!.name}
                </Word>
                <Place />
                <Word>
                    <Later />
                    <Follows>{this.after.mention!.identifier}</Follows>
                    {this.after.title!.name} →
                </Word>
            </>
        );
    }

    protected override $Define(): void {
        super.$Define();
        this.classes.add(this, 'pd-turn');
    }
}

export const Turn = $($Turn);
`})]}),"TheTurn13"),J=o(()=>e.jsxs(d,{children:[e.jsx(c,{children:"[The Entry](/dougs-reference-manual/#the-entry)"}),e.jsxs(t,{children:[e.jsx(l,{}),"A row of the table of contents that leads somewhere, lit when its chapter is open."]}),e.jsxs(n,{children:[e.jsx(a,{children:"What an entry is"}),e.jsxs(t,{children:["A table of contents is a list of rows, and most of them lead to a chapter. I call such a row an entry. An entry knows the chapter it leads to, whether the row names the chapter or a heading inside it, and it says so when that chapter is the open one. So a table of contents can show where I am in the book, in the frame's holds, where ",e.jsx(s,{children:"[the book](/dougs-reference-manual/#the-book)"})," draws it."]})]}),e.jsxs(n,{children:[e.jsx(a,{children:"How an entry fits the library's patterns"}),e.jsxs(t,{children:["The index is the framework's table of contents with one thing added: when the book is bound it says of each row that leads somewhere that it is an entry. The table file says it is the table of contents and that it is an index, two things said of one chapter, and the chapter stays a table of contents; no table file says entry on every row. A row leads somewhere when the row, or its first word, is a content of the table; a parenthetical row never does. An entry reads the chapter it leads to, and its dot wears that chapter's colour where the chapter says one; the row's look is the theme's holds part, in the colours of ",e.jsx(s,{children:"[the tone](/dougs-reference-manual/#the-tone)"}),". And a section of the table said to be the appendix — how this book is built — stands at the foot of the contents in a smaller voice, and the chapters it leads to are left out of the book's pages, so the folio and the turns never count the machinery."]})]}),e.jsxs(n,{children:[e.jsx(a,{children:"How an entry is used"}),e.jsxs(t,{children:["A type of book may have its own kind of entry, registered on its class, and the index uses it: the one in ",e.jsx(s,{children:"[the manual](/dougs-reference-manual/#the-manual)"})," also shows the type of the file its chapter appends. The catalogue's rows that stand for books open the book's entry on the catalogue's page, and end in an arrow that leads to the book itself."]})]}),e.jsxs(n,{children:[e.jsx(a,{children:"Where an entry bites"}),e.jsxs(t,{children:["An entry lights for the place the address names or for the open chapter's own name, and for nothing else; a row naming a heading of another chapter is never lit. The library's subjects in the bar are not entries — they are references to other books; the one that is this book is lit by ",e.jsx(s,{children:"[the layout](/dougs-reference-manual/#the-layout)"}),", which knows the book's address."]})]}),e.jsx(i,{identifier:"code",type:".tsx",children:`import { ElementType, ReactNode } from 'react';
import { $, $check, $Chemical, selection } from '@dna-platform/chemistry';
import { $Annotation, $Chapter, $Content, $Format, $Paragraph, $Parenthetical, $Section, $TableOfContents, $Word, $Writing, AnnotationSpecification, specify } from '@dna-platform/public';
import type { $LibraryBook } from './1-the-book~code.tsx';
import { $Coloured } from './18-the-colour~code.tsx';

export class $Entry extends $Format {
    specification = new EntrySpecification();
    style: ElementType = selection.div<{ $colour?: string }>\`
        \${props => props.$colour === undefined ? '' : \`.pa-entry { --colour: \${props.$colour}; }\`}
    \`;
    protected _coloured!: ElementType;
    get place(): string { return leads(this.parent as $Writing)!.identifier; }
    get leads(): $Chapter | undefined { return (this.book as $LibraryBook).named(this.place); }
    get colour(): string | undefined { return this.leads?.annotations.expressed($Coloured)?.colour; }

    $Entry(...chemicals: $Chemical[]) {
        this.$Format(...chemicals);
        const Coloured = this.style;
        this._coloured = (props: { children?: ReactNode }) => <Coloured $colour={this.colour} {...props} />;
    }

    override defines(writing: $Writing): void {
        writing.classes.add(this, 'pa-entry');
        writing.containers.add(this, this._coloured);
        if (this.place === this.book?.$bookmark || this.place === (this.book as $LibraryBook).open?.mention?.identifier) writing.classes.add(this, 'pa-open');
    }

    override erase(writing: $Writing): void {
        writing.classes.revert(this);
        writing.containers.revert(this);
    }
}

export class $Appendix extends $Annotation {
    specification = new AppendixSpecification();

    override defines(writing: $Writing): void {
        writing.classes.add(this, 'pa-appendix');
    }

    override erase(writing: $Writing): void {
        writing.classes.revert(this);
    }
}

export class $Index extends $Annotation {
    specification = new IndexSpecification();
    get entries(): $Paragraph[] {
        const sections = this.chapter!.text.find($Section);
        return sections.flatMap(section => section.text.find($Paragraph)).filter(paragraph => !paragraph.is($Parenthetical) && leads(paragraph) !== undefined);
    }

    protected override $Bound(): void {
        const Kind = $(Entry);
        for (const paragraph of this.entries)
            paragraph.annotations.add(this,
                <Kind />
            );
        super.$Bound();
    }
}

export class IndexSpecification extends AnnotationSpecification {
    @specify('an index is said of a table of contents')
    $saidOfATableOfContents(writing: $Writing): void {
        $check(writing.is($TableOfContents), 'an index is said of a table of contents, and this chapter is not one');
    }
}

export class AppendixSpecification extends AnnotationSpecification {
    @specify('an appendix is said of a section of a table of contents')
    $saidOfASection(writing: $Writing): void {
        $check(writing instanceof $Section && writing.chapter?.is($TableOfContents) === true,
            'an appendix is said of a section of a table of contents, and this is not one');
    }
}

export class EntrySpecification extends AnnotationSpecification {
    @specify('an entry is said of a paragraph that leads somewhere')
    $saidOfAnEntry(writing: $Writing): void {
        $check(writing instanceof $Paragraph && leads(writing) !== undefined,
            'an entry is said of a paragraph that leads somewhere, and this is not one');
    }
}

const leads = (paragraph: $Writing): $Content | undefined =>
    paragraph.annotations.expressed($Content) ?? paragraph.text.find($Word).map(word => word.annotations.expressed($Content)).find(content => content !== undefined);

export const Entry = $($Entry);
export const Index = $($Index);
export const Appendix = $($Appendix);
`})]}),"TheEntry14"),K=o(()=>e.jsxs(d,{children:[e.jsx(c,{children:"[The Tone](/dougs-reference-manual/#the-tone)"}),e.jsxs(t,{children:[e.jsx(l,{}),"Dark, light, or white over black: what colours the frame's five regions."]}),e.jsxs(n,{children:[e.jsx(a,{children:"What a tone is"}),e.jsxs(t,{children:["The frame has a tone, and a book wears one. Dark is ",e.jsx(s,{children:"[the frame of 15](/dougs-design/#a-black-top-bar-and-an-opal-side-bar)"}),": the soft black of my coming-soon page across the top, and down the side the book's own pale colour, opal for the library. Light is the frame of 16, the same side bar under a white top bar. White over black is the white bar over the dark side, which is ",e.jsx(s,{children:"[the frame of 26](/dougs-design/#a-white-top-bar-and-a-black-side-bar)"})," and the frame my story wears. Black is on one bar, relative to the pale side bar beside it and the white page under it; it is never everywhere. A tone is one of a kind — saying a second one stands the first down — and every book wears the dark tone unless it says otherwise, because the dark side bar is the thing that makes the library memorable."]})]}),e.jsxs(n,{children:[e.jsx(a,{children:"How a tone fits the library's patterns"}),e.jsxs(t,{children:["A tone adds a class to the book and nothing else; the rules that read the class are a part of ",e.jsx(s,{children:"[the theme](/dougs-reference-manual/#the-theme)"}),", which declares the sketch's values once, by role — the bar and what is read on it, the side bar and what is read on it, the paper and the ink. A tone says which of those each region takes. A book sets five of them — its colour, its accent, its side bar, its paper and its ink — and every tone reads them; that is how the library is colour fluid, each book with a colour scheme of its own and the frame still one frame."]})]}),e.jsxs(n,{children:[e.jsx(a,{children:"How a tone is used"}),e.jsxs(t,{children:["A book registers its tone on its class in one line, as the base registers dark for every book: ",e.jsx(s,{children:"[the manual](/dougs-reference-manual/#the-manual)"})," and ",e.jsx(s,{children:"[the design book](/dougs-design/#the-frame)"})," take light, ",e.jsx(s,{children:"[my story](/dougs-story/#the-sheet)"})," white over black. The design book offers white and the black top bar as tabs at its head."]})]}),e.jsxs(n,{children:[e.jsx(a,{children:"Where a tone bites"}),e.jsxs(t,{children:["A tone was a theme in the plan and a Format in the first build, and a press on it replaced the whole book, measured; a tone is now a class, and the rules were always there. A book's own colour is another thing: ",e.jsx(s,{children:"[the colour](/dougs-reference-manual/#the-colour)"}),", which the tone leaves alone."]})]}),e.jsx(i,{identifier:"code",type:".tsx",children:`import { $ } from '@dna-platform/chemistry';
import { $Annotation, $Writing } from '@dna-platform/public';
import { OfABookSpecification } from './1-the-book~said.tsx';

export class $Tone extends $Annotation {
    specification = new OfABookSpecification();

    override defines(writing: $Writing): void {
        for (const annotation of writing.annotations.after(this))
            if (annotation instanceof $Tone)
                writing.annotations.express(annotation, false);
        writing.classes.add(this, 'pa-tone');
    }

    override erase(writing: $Writing): void {
        writing.classes.revert(this);
    }
}

export class $Dark extends $Tone {
    override defines(writing: $Writing): void {
        super.defines(writing);
        writing.classes.add(this, 'pa-dark');
    }
}

export class $Light extends $Tone {
    override defines(writing: $Writing): void {
        super.defines(writing);
        writing.classes.add(this, 'pa-light');
    }
}

export class $WhiteOverBlack extends $Tone {
    override defines(writing: $Writing): void {
        super.defines(writing);
        writing.classes.add(this, 'pa-white-over-black');
    }
}

export const Tone = $($Tone);
export const Dark = $($Dark);
export const Light = $($Light);
export const WhiteOverBlack = $($WhiteOverBlack);
`})]}),"TheTone16"),X=o(()=>e.jsxs(d,{children:[e.jsx(c,{children:"[The First](/dougs-reference-manual/#the-first)"}),e.jsxs(t,{children:[e.jsx(l,{}),"Said of the paragraph a chapter opens with, so a book may set its first letter large."]}),e.jsxs(n,{children:[e.jsx(a,{children:"The paragraph a chapter opens with"}),e.jsxs(t,{children:["A chapter that opens with a large letter says which paragraph it opens with: the paragraph says it is first, and a theme sets that paragraph's first letter however the book's design has it. Nothing finds the paragraph by where it stands. In ",e.jsx(s,{children:"[my story](/dougs-story/)"}),"every chapter says it of one paragraph, and the sheet draws the drop initial there."]})]}),e.jsx(i,{identifier:"code",type:".tsx",children:`import { $, $check } from '@dna-platform/chemistry';
import { $Annotation, $Paragraph, $Writing, AnnotationSpecification, specify } from '@dna-platform/public';

export class $First extends $Annotation {
    specification = new FirstSpecification();

    override defines(writing: $Writing): void {
        writing.classes.add(this, 'pa-first');
    }

    override erase(writing: $Writing): void {
        writing.classes.revert(this);
    }
}

export class FirstSpecification extends AnnotationSpecification {
    @specify('first is said of a paragraph')
    $saidOfAParagraph(writing: $Writing): void {
        $check(writing instanceof $Paragraph, 'first is said of a paragraph, and this is not one');
    }
}

export const First = $($First);
`})]}),"TheFirst17"),Y=o(()=>e.jsxs(d,{children:[e.jsx(c,{children:"[The Colour](/dougs-reference-manual/#the-colour)"}),e.jsxs(t,{children:[e.jsx(l,{}),"Said of a chapter or a paragraph that stands for a book, holding the book's colour for the rules beside it to read."]}),e.jsxs(n,{children:[e.jsx(a,{children:"Each book has a colour of its own"}),e.jsx(t,{children:"A chapter that stands for a book on a shelf says the book's colour, as a librarian's label does, and so does the paragraph that names the book in the library's bar. The colour is set where it is said, as a property the rules beside it read: the cover on the shelf is a gradient of it, the dot beside the name is it, the line under the open subject is it, and a row of the contents reads it from the chapter it leads to. The book itself says the same colour in its own theme, so its pressed switches wear it. That is one colour said in two places for now, because what a cover says does not yet reach its catalogue's page, and the two are brought to one when it does."}),e.jsxs(t,{children:["The colours are each book's scheme's, drawn from the comparables and softened to the frame: the catalogue the site's blue-black, my story an amber, the design book a rose, the manual the teal of its sketch. ",e.jsx(s,{children:"[The catalogue](/dougs-library/)"})," says each."]})]}),e.jsx(i,{identifier:"code",type:".tsx",children:`import { ElementType, ReactNode } from 'react';
import { $, $check, $Chemical, selection } from '@dna-platform/chemistry';
import { $Chapter, $Format, $Paragraph, $Writing, AnnotationSpecification, html, specify } from '@dna-platform/public';

export class $Coloured extends $Format {
    specification = new ColouredSpecification();
    style: ElementType = selection.div<{ $colour: string }>\`
        .pa-coloured { --colour: \${props => props.$colour}; }
    \`;
    protected _painted!: ElementType;
    get colour(): string { return html.copy(this.text).trim(); }

    $Coloured(...chemicals: $Chemical[]) {
        this.$Format(...chemicals);
        const Painted = this.style;
        this._painted = (props: { children?: ReactNode }) => <Painted $colour={this.colour} {...props} />;
    }

    override defines(writing: $Writing): void {
        writing.classes.add(this, 'pa-coloured');
        writing.containers.add(this, this._painted);
    }

    override erase(writing: $Writing): void {
        writing.classes.revert(this);
        writing.containers.revert(this);
    }
}

export class ColouredSpecification extends AnnotationSpecification {
    @specify('coloured is said of a chapter or a paragraph')
    $saidOfAChapterOrAParagraph(writing: $Writing): void {
        $check(writing instanceof $Chapter || writing instanceof $Paragraph, 'coloured is said of a chapter or a paragraph, and this is neither');
    }

    @specify('coloured is given its colour')
    $givenItsColour(writing: $Writing): void {
        $check(/^#[0-9a-f]{6}$/iu.test(writing.annotations.expressed($Coloured)?.colour ?? ''),
            'coloured is given its colour as six hex digits, and this one was given something else');
    }
}

export const Coloured = $($Coloured);
`})]}),"TheColour18"),Q=b(f),ae=o(()=>e.jsxs(Q,{children:[D(),R(),F(),N(),O(),E(),P(),M(),H(),q(),G(),U(),_(),V(),J(),K(),X(),Y()]}),"book");export{ae as book};
