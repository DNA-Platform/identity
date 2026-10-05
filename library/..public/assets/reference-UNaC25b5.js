var W=Object.defineProperty;var n=(C,s)=>W(C,"name",{value:s,configurable:!0});import{$ as r,a as I,f as x,j as e,T as M,C as o,b as l,A as E,S as F,c as H,d as m,P as y,e as t,g as h,H as c,h as i,W as d,M as a,i as T}from"./index-BkJGTWoQ.js";import{$ as P,a as q,b as N,C as O,T as G,S as u,L as v,A as S}from"./10-the-table~code-CKqsRUYh.js";import{S as J}from"./.synopsis-m3eWsG3N.js";import{S as K}from"./.synopsis-ycGXKaek.js";import{S as Q}from"./.synopsis-DMqdf_rf.js";const D=class D extends P{defines(s){super.defines(s),s.classes.add(this,"pa-top-bars")}};n(D,"$TopBars");let j=D;const U=r(j),f=class f extends I{defines(s){for(const p of s.annotations.after(this))p instanceof f&&s.annotations.express(p,!1)}erase(s){s.classes.revert(this)}};n(f,"$Arrangement");let b=f;const z=class z extends b{defines(s){super.defines(s),s.classes.add(this,"pa-shelf")}};n(z,"$Shelf");let $=z;const A=class A extends b{defines(s){super.defines(s),s.classes.add(this,"pa-list")}};n(A,"$List");let w=A;r(b);const R=r($),V=r(w),B=class B extends q{constructor(){super(...arguments),this.paper="#ffffff",this.tint="#a9d3e6"}parts(){return[...super.parts(),this.topBars(),this.shelf(),this.list()]}topBars(){return x`
            .pd-book.pa-top-bars {
                display: grid;
                grid-template-columns: auto minmax(0, 1fr) auto;
                grid-template-areas: 'library . author' 'title filed tools';
                align-content: start;
                align-items: center;
                min-height: 100vh;
                padding: 0;
            }
            .pd-book.pa-top-bars::before { content: ''; grid-row: 1; grid-column: 1 / -1; align-self: stretch; background: ${({theme:s})=>s.bar}; }
            .pd-book.pa-top-bars::after { content: ''; grid-row: 2; grid-column: 1 / -1; align-self: stretch; background: ${({theme:s})=>s.tint}; }
            .pa-top-bars > .pd-container, .pa-top-bars .pd-chapter.pa-cover, .pa-top-bars .pa-cover .pd-container { display: contents; }
            .pa-top-bars .pd-library-title, .pa-top-bars .pd-byline, .pa-top-bars .pa-cover .pd-title, .pa-top-bars .pd-filed, .pa-top-bars .pd-switch { z-index: 1; margin: 0; }
            .pa-top-bars .pd-library-title {
                grid-area: library;
                padding: calc(${({theme:s})=>s.space} / 2) ${({theme:s})=>s.space};
                font-size: calc(0.6 * ${({theme:s})=>s.size});
                letter-spacing: 0.24em;
                text-transform: uppercase;
                color: ${({theme:s})=>s.bright};
            }
            .pa-top-bars .pd-byline { grid-area: author; padding-inline: ${({theme:s})=>s.space}; color: ${({theme:s})=>s.bright}; }
            .pa-top-bars .pd-library-title .pa-reference, .pa-top-bars .pd-byline .pa-reference { color: inherit; }
            .pa-top-bars .pa-cover .pd-title { grid-area: title; padding: calc(${({theme:s})=>s.space} / 2) ${({theme:s})=>s.space}; font-size: calc(1.4 * ${({theme:s})=>s.size}); letter-spacing: 0.04em; }
            .pa-top-bars .pd-filed { grid-area: filed; }
            .pa-top-bars .pd-switch { grid-area: tools; padding-inline: ${({theme:s})=>s.space}; }
            .pa-top-bars .pd-chapter.pa-page, .pa-top-bars .pd-chapter.pa-table-of-contents {
                grid-column: 1 / -1;
                margin: 0;
                padding: ${({theme:s})=>s.space} calc(2 * ${({theme:s})=>s.space}) 0;
            }
        `}shelf(){return x`
            .pa-shelf .pd-chapter.pa-table-of-contents .pd-section {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(9.5rem, 11rem));
                gap: ${({theme:s})=>s.space};
                align-items: start;
            }
            .pa-shelf .pa-table-of-contents .pd-section > .pd-container { display: contents; }
            .pa-shelf .pa-table-of-contents .pd-heading, .pa-shelf .pa-table-of-contents .pa-entry { grid-column: 1 / -1; margin: 0; }
            .pa-shelf .pa-table-of-contents .pa-entry.pa-answer {
                grid-column: auto;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                box-sizing: border-box;
                aspect-ratio: 2 / 3;
                padding: calc(${({theme:s})=>s.space} / 1.5);
                font-size: calc(0.95 * ${({theme:s})=>s.size});
                line-height: 1.25;
                color: ${({theme:s})=>s.bright};
                background: ${({theme:s})=>s.bar};
                border-inline-start: 3px solid color-mix(in srgb, ${({theme:s})=>s.bright} 30%, ${({theme:s})=>s.bar});
                border-radius: 3px;
                box-shadow: 0 12px 22px -14px ${({theme:s})=>s.bar};
            }
            .pa-shelf .pa-entry.pa-answer .pa-reference, .pa-shelf .pa-entry.pa-answer .pa-content { color: inherit; text-decoration: none; }
            .pa-shelf .pa-entry.pa-answer .pd-word.pa-shelfmark { align-self: flex-end; }
        `}list(){return x`
            .pa-list .pd-chapter.pa-table-of-contents .pa-entry:not(.pa-parenthetical) {
                display: flex;
                justify-content: space-between;
                align-items: baseline;
                margin: 0;
                padding-block: calc(${({theme:s})=>s.space} / 3);
                border-block-end: 1px solid color-mix(in srgb, ${({theme:s})=>s.ink} 12%, ${({theme:s})=>s.paper});
            }
            .pa-list .pd-chapter.pa-table-of-contents .pa-reference { text-decoration: none; }
        `}};n(B,"$BlackAndSky");let k=B;const X=r(k),L=class L extends N{get views(){const s=r(R),p=r(V);return[...super.views,[s,p]]}$Define(){super.$Define();const s=r(U),p=r(R);this.annotations.add(this,e.jsx(s,{}),e.jsx(p,{}))}};n(L,"$TheCatalogue");let g=L;const Y=r(g);r(Y,M)(X);const Z=n(()=>e.jsxs(o,{children:[e.jsx(O,{}),e.jsx(l,{children:"[Dougs Library](/dougs-library/)"}),e.jsx(E,{children:"[The Librarian](/dougs-story/)"}),e.jsx(F,{children:"[The Library](/dougs-library/)"}),e.jsx(H,{children:"[The Library](/dougs-library/)"})]}),"Cover"),_=n(()=>e.jsxs(o,{children:[e.jsx(m,{}),e.jsxs(l,{children:[e.jsx(y,{}),"[Synopsis](/dougs-library/)"]}),e.jsx(t,{children:"The catalogue of my library, filed under what it is about, which is itself. Everything I keep stands under it, directly or through another book."})]}),"Synopsis"),ee=n(()=>e.jsxs(o,{children:[e.jsx(G,{}),e.jsxs(l,{children:[e.jsx(y,{}),"[Table of Contents](/dougs-library/#table-of-contents)"]}),e.jsxs(h,{children:[e.jsx(c,{children:"Contents"}),e.jsx(t,{children:e.jsx(i,{children:"[The Shelves](/dougs-library/#the-shelves)"})}),e.jsxs(t,{children:[e.jsx(d,{children:e.jsx(i,{children:"[Dougs Story](/dougs-library/#dougs-story)"})}),e.jsx(d,{children:e.jsx(u,{children:"[Dougs Story](/dougs-story/)"})})]}),e.jsxs(t,{children:[e.jsx(d,{children:e.jsx(i,{children:"[Dougs Design](/dougs-library/#dougs-design)"})}),e.jsx(d,{children:e.jsx(u,{children:"[Dougs Design](/dougs-design/)"})})]}),e.jsxs(t,{children:[e.jsx(d,{children:e.jsx(i,{children:"[Dougs Reference Manual](/dougs-library/#dougs-reference-manual)"})}),e.jsx(d,{children:e.jsx(u,{children:"[Dougs Reference Manual](/dougs-reference-manual/)"})})]}),e.jsxs(t,{children:[e.jsx(y,{}),e.jsx(d,{children:e.jsx(i,{children:"[Dougs Library](/dougs-library/)"})}),e.jsx(d,{children:e.jsx(i,{children:"[Synopsis](/dougs-library/#synopsis)"})}),e.jsx(d,{children:e.jsx(i,{children:"[Table of Contents](/dougs-library/#table-of-contents)"})})]})]}),e.jsxs(h,{children:[e.jsx(c,{children:"How this book is built"}),e.jsx(t,{children:e.jsx(i,{children:"[The Bars](/dougs-library/#the-bars)"})}),e.jsx(t,{children:e.jsx(i,{children:"[The Shelf](/dougs-library/#the-shelf)"})}),e.jsx(t,{children:e.jsx(i,{children:"[The Black and Sky](/dougs-library/#the-black-and-sky)"})})]})]}),"Table"),se=n(()=>e.jsxs(o,{children:[e.jsx(l,{children:"[The Shelves](/dougs-library/#the-shelves)"}),e.jsxs(h,{children:[e.jsx(c,{children:"What stands here"}),e.jsxs(t,{children:["Three books stand under this one. ",e.jsx(a,{children:"[Dougs Story](/dougs-story/)"})," is mine, and the one book here that is by its own subject. It is the place to begin from, and it begins with ",e.jsx(a,{children:"[starting over](/dougs-story/#starting-over)"}),". ",e.jsx(a,{children:"[Dougs Design](/dougs-design/)"})," is where the design of this library is kept. ",e.jsx(a,{children:"[Dougs Reference Manual](/dougs-reference-manual/)"})," holds the parts I build this library with, each beside the chapter that says what it is."]}),e.jsxs(t,{children:["Each of the three has a chapter here that stands in for it and carries its synopsis. In the table of contents the name leads to that chapter, and the small square at the right of the row, its ",e.jsx(a,{children:"[shelfmark](/dougs-reference-manual/#the-shelfmark)"}),", leads to the book itself."]})]})]}),"TheShelves1"),te=n(()=>e.jsxs(o,{children:[e.jsx(l,{children:"[Dougs Story](/dougs-library/#dougs-story)"}),e.jsx(m,{children:J()})]}),"DougsStory2"),ne=n(()=>e.jsxs(o,{children:[e.jsx(l,{children:"[Dougs Design](/dougs-library/#dougs-design)"}),e.jsx(m,{children:K()})]}),"DougsDesign3"),ae=n(()=>e.jsxs(o,{children:[e.jsx(l,{children:"[Dougs Reference Manual](/dougs-library/#dougs-reference-manual)"}),e.jsx(m,{children:Q()})]}),"DougsReferenceManual4"),re=n(()=>e.jsxs(o,{children:[e.jsx(l,{children:"[The Bars](/dougs-library/#the-bars)"}),e.jsxs(h,{children:[e.jsx(c,{children:"Two bars"}),e.jsx(t,{children:"Two bars stand across the top of this book. The upper one is the library's, and is to be the same on every catalogue: the library's name at one end and mine at the other. The one under it is this book's own cover, its title, with the ways of showing what it holds at its right."}),e.jsxs(t,{children:["It is the frame of ",e.jsx(a,{children:"[the design I chose for the library's catalogue](/dougs-design/#the-librarys-catalogue)"}),", and it is ",e.jsx(a,{children:"[a frame](/dougs-reference-manual/#the-frames)"})," like any other. It is kept here until a second catalogue wears it."]})]}),e.jsxs(h,{children:[e.jsx(v,{}),e.jsx(c,{children:"The bars' file"}),e.jsx(t,{children:e.jsx(T,{identifier:"code"})})]}),e.jsx(S,{identifier:"code",type:".tsx",children:`import { $ } from '@dna-platform/chemistry';
import { $Writing } from '@dna-platform/public';
import { $Frame } from '../.manual/.book';

export class $TopBars extends $Frame {
    override defines(writing: $Writing): void {
        super.defines(writing);
        writing.classes.add(this, 'pa-top-bars');
    }
}

export const TopBars = $($TopBars);
`})]}),"TheBars90"),ie=n(()=>e.jsxs(o,{children:[e.jsx(l,{children:"[The Shelf](/dougs-library/#the-shelf)"}),e.jsxs(h,{children:[e.jsx(c,{children:"The table, shown as a shelf"}),e.jsxs(t,{children:["A catalogue holds books, and its table of contents lists them. The shelf is that table shown another way. Each row that answers for a book stands as a cover, with the book's name on it and its ",e.jsx(a,{children:"[shelfmark](/dougs-reference-manual/#the-shelfmark)"})," at the foot. The list is the same table as rows."]}),e.jsxs(t,{children:["I change between the two at the right of the bar. Nothing in the table is rewritten for it. The rows are the same rows, and which of them answers for a book is something each row already knows, as ",e.jsx(a,{children:"[an entry](/dougs-reference-manual/#the-table)"}),"."]})]}),e.jsxs(h,{children:[e.jsx(v,{}),e.jsx(c,{children:"The shelf's file"}),e.jsx(t,{children:e.jsx(T,{identifier:"code"})})]}),e.jsx(S,{identifier:"code",type:".tsx",children:`import { $ } from '@dna-platform/chemistry';
import { $Annotation, $Writing } from '@dna-platform/public';

export class $Arrangement extends $Annotation {
    override defines(writing: $Writing): void {
        for (const annotation of writing.annotations.after(this))
            if (annotation instanceof $Arrangement)
                writing.annotations.express(annotation, false);
    }

    override erase(writing: $Writing): void {
        writing.classes.revert(this);
    }
}

export class $Shelf extends $Arrangement {
    override defines(writing: $Writing): void {
        super.defines(writing);
        writing.classes.add(this, 'pa-shelf');
    }
}

export class $List extends $Arrangement {
    override defines(writing: $Writing): void {
        super.defines(writing);
        writing.classes.add(this, 'pa-list');
    }
}

export const Arrangement = $($Arrangement);
export const Shelf = $($Shelf);
export const List = $($List);
`})]}),"TheShelf91"),oe=n(()=>e.jsxs(o,{children:[e.jsx(l,{children:"[The Black and Sky](/dougs-library/#the-black-and-sky)"}),e.jsxs(h,{children:[e.jsx(c,{children:"The library's own colours"}),e.jsx(t,{children:"The library itself is black and sky: a black bar, a sky under it, and white beneath. Each catalogue is to have colours of its own, so these stand here, in this book's theme, and not in the theme every book shares. They are stand-ins until I choose mine."}),e.jsxs(t,{children:["The theme is ",e.jsx(a,{children:"[the library's](/dougs-reference-manual/#the-theme)"})," with two values changed and three parts added: the rules that set ",e.jsx(a,{children:"[the bars](/dougs-library/#the-bars)"}),", and the rules that set the table as ",e.jsx(a,{children:"[a shelf](/dougs-library/#the-shelf)"})," and as a list."]})]}),e.jsxs(h,{children:[e.jsx(v,{}),e.jsx(c,{children:"The theme's own file"}),e.jsx(t,{children:e.jsx(T,{identifier:"code"})})]}),e.jsx(S,{identifier:"code",type:".tsx",children:`import { css, RuleSet } from 'styled-components';
import { $ } from '@dna-platform/chemistry';
import { $DougsTheme } from '../.manual/.book';

export class $BlackAndSky extends $DougsTheme {
    paper = '#ffffff';
    tint = '#a9d3e6';

    protected override parts(): RuleSet[] {
        return [...super.parts(), this.topBars(), this.shelf(), this.list()];
    }

    protected topBars(): RuleSet {
        return css\`
            .pd-book.pa-top-bars {
                display: grid;
                grid-template-columns: auto minmax(0, 1fr) auto;
                grid-template-areas: 'library . author' 'title filed tools';
                align-content: start;
                align-items: center;
                min-height: 100vh;
                padding: 0;
            }
            .pd-book.pa-top-bars::before { content: ''; grid-row: 1; grid-column: 1 / -1; align-self: stretch; background: \${({ theme }) => theme.bar}; }
            .pd-book.pa-top-bars::after { content: ''; grid-row: 2; grid-column: 1 / -1; align-self: stretch; background: \${({ theme }) => theme.tint}; }
            .pa-top-bars > .pd-container, .pa-top-bars .pd-chapter.pa-cover, .pa-top-bars .pa-cover .pd-container { display: contents; }
            .pa-top-bars .pd-library-title, .pa-top-bars .pd-byline, .pa-top-bars .pa-cover .pd-title, .pa-top-bars .pd-filed, .pa-top-bars .pd-switch { z-index: 1; margin: 0; }
            .pa-top-bars .pd-library-title {
                grid-area: library;
                padding: calc(\${({ theme }) => theme.space} / 2) \${({ theme }) => theme.space};
                font-size: calc(0.6 * \${({ theme }) => theme.size});
                letter-spacing: 0.24em;
                text-transform: uppercase;
                color: \${({ theme }) => theme.bright};
            }
            .pa-top-bars .pd-byline { grid-area: author; padding-inline: \${({ theme }) => theme.space}; color: \${({ theme }) => theme.bright}; }
            .pa-top-bars .pd-library-title .pa-reference, .pa-top-bars .pd-byline .pa-reference { color: inherit; }
            .pa-top-bars .pa-cover .pd-title { grid-area: title; padding: calc(\${({ theme }) => theme.space} / 2) \${({ theme }) => theme.space}; font-size: calc(1.4 * \${({ theme }) => theme.size}); letter-spacing: 0.04em; }
            .pa-top-bars .pd-filed { grid-area: filed; }
            .pa-top-bars .pd-switch { grid-area: tools; padding-inline: \${({ theme }) => theme.space}; }
            .pa-top-bars .pd-chapter.pa-page, .pa-top-bars .pd-chapter.pa-table-of-contents {
                grid-column: 1 / -1;
                margin: 0;
                padding: \${({ theme }) => theme.space} calc(2 * \${({ theme }) => theme.space}) 0;
            }
        \`;
    }

    protected shelf(): RuleSet {
        return css\`
            .pa-shelf .pd-chapter.pa-table-of-contents .pd-section {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(9.5rem, 11rem));
                gap: \${({ theme }) => theme.space};
                align-items: start;
            }
            .pa-shelf .pa-table-of-contents .pd-section > .pd-container { display: contents; }
            .pa-shelf .pa-table-of-contents .pd-heading, .pa-shelf .pa-table-of-contents .pa-entry { grid-column: 1 / -1; margin: 0; }
            .pa-shelf .pa-table-of-contents .pa-entry.pa-answer {
                grid-column: auto;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                box-sizing: border-box;
                aspect-ratio: 2 / 3;
                padding: calc(\${({ theme }) => theme.space} / 1.5);
                font-size: calc(0.95 * \${({ theme }) => theme.size});
                line-height: 1.25;
                color: \${({ theme }) => theme.bright};
                background: \${({ theme }) => theme.bar};
                border-inline-start: 3px solid color-mix(in srgb, \${({ theme }) => theme.bright} 30%, \${({ theme }) => theme.bar});
                border-radius: 3px;
                box-shadow: 0 12px 22px -14px \${({ theme }) => theme.bar};
            }
            .pa-shelf .pa-entry.pa-answer .pa-reference, .pa-shelf .pa-entry.pa-answer .pa-content { color: inherit; text-decoration: none; }
            .pa-shelf .pa-entry.pa-answer .pd-word.pa-shelfmark { align-self: flex-end; }
        \`;
    }

    protected list(): RuleSet {
        return css\`
            .pa-list .pd-chapter.pa-table-of-contents .pa-entry:not(.pa-parenthetical) {
                display: flex;
                justify-content: space-between;
                align-items: baseline;
                margin: 0;
                padding-block: calc(\${({ theme }) => theme.space} / 3);
                border-block-end: 1px solid color-mix(in srgb, \${({ theme }) => theme.ink} 12%, \${({ theme }) => theme.paper});
            }
            .pa-list .pd-chapter.pa-table-of-contents .pa-reference { text-decoration: none; }
        \`;
    }
}

export const BlackAndSky = $($BlackAndSky);
`})]}),"TheBlackAndSky92"),le=r(g),fe=n(()=>e.jsxs(le,{children:[Z(),_(),ee(),se(),te(),ne(),ae(),re(),ie(),oe()]}),"book");export{fe as book};
