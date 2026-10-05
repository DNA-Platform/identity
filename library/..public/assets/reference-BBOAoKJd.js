var I=Object.defineProperty;var t=(C,s)=>I(C,"name",{value:s,configurable:!0});import{s as W,j as e,$ as r,a as E,f as R,T as M,C as o,b as H,c as l,A as N,S as P,d as q,e as u,P as y,g as n,h as c,H as d,i,W as h,M as a,k}from"./index-hQSJOtq-.js";import{$ as O,a as F,T as G,S as b,L as v,A as T}from"./10-the-table~code-HIvctq9u.js";import{S as J}from"./.synopsis-v_UiMvrS.js";import{S as K}from"./.synopsis-C2FuI9lm.js";import{S as Q}from"./.synopsis-MwbryuhZ.js";const S=class S extends O{constructor(){super(...arguments),this.layout=W.div`
        min-height: 100vh;

        & > nav { display: flex; justify-content: space-between; align-items: center; padding-inline: ${({theme:s})=>s.space}; color: ${({theme:s})=>s.bright}; background: ${({theme:s})=>s.bar}; }
        & > nav .pd-library-title {
            margin: 0;
            padding-block: calc(${({theme:s})=>s.space} / 2);
            font-size: calc(0.6 * ${({theme:s})=>s.size});
            letter-spacing: 0.24em;
            text-transform: uppercase;
        }
        & > nav .pd-byline { margin: 0; }
        & > nav .pa-reference { color: inherit; }

        & > div { display: flex; flex-wrap: wrap; align-items: center; column-gap: ${({theme:s})=>s.space}; padding-inline: ${({theme:s})=>s.space}; background: ${({theme:s})=>s.tint}; }
        & > div .pd-chapter.pa-cover { margin: 0; }
        & > div .pd-title { margin: 0; padding-block: calc(${({theme:s})=>s.space} / 2); font-size: calc(1.4 * ${({theme:s})=>s.size}); letter-spacing: 0.04em; }
        & > div .pd-filed { margin: 0; }
        & > div .pd-switch { margin: 0 0 0 auto; }

        & > main { padding-inline: calc(2 * ${({theme:s})=>s.space}); }
        & > main .pd-chapter { margin: 0; padding-block-start: ${({theme:s})=>s.space}; }
    `}write(){const s=this.layout;return e.jsxs(s,{children:[e.jsxs("nav",{children:[this.library(),this.byline()]}),e.jsxs("div",{children:[this.place(this.cover),this.filed(),this.controls()]}),e.jsxs("main",{children:[this.place(...this.pages),this.place(this.table)]})]})}};t(S,"$TopBars");let f=S;r(f);const x=class x extends E{defines(s){for(const g of s.annotations.after(this))g instanceof x&&s.annotations.express(g,!1)}erase(s){s.classes.revert(this)}};t(x,"$Arrangement");let p=x;const D=class D extends p{defines(s){super.defines(s),s.classes.add(this,"pa-shelf")}};t(D,"$Shelf");let j=D;const L=class L extends p{defines(s){super.defines(s),s.classes.add(this,"pa-list")}};t(L,"$List");let $=L;r(p);const B=r(j),U=r($),A=class A extends F{constructor(){super(...arguments),this.paper="#ffffff",this.tint="#a9d3e6"}parts(){return[...super.parts(),this.shelf(),this.list()]}shelf(){return R`
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
        `}list(){return R`
            .pa-list .pd-chapter.pa-table-of-contents .pa-entry:not(.pa-parenthetical) {
                display: flex;
                justify-content: space-between;
                align-items: baseline;
                margin: 0;
                padding-block: calc(${({theme:s})=>s.space} / 3);
                border-block-end: 1px solid color-mix(in srgb, ${({theme:s})=>s.ink} 12%, ${({theme:s})=>s.paper});
            }
            .pa-list .pd-chapter.pa-table-of-contents .pa-reference { text-decoration: none; }
        `}};t(A,"$BlackAndSky");let w=A;const V=r(w),z=class z extends f{get views(){const s=r(B),g=r(U);return[...super.views,[s,g]]}$Define(){super.$Define();const s=r(B);this.annotations.add(this,e.jsx(s,{}))}};t(z,"$TheCatalogue");let m=z;const X=r(m);r(X,M)(V);const Y=t(()=>e.jsxs(o,{children:[e.jsx(H,{}),e.jsx(l,{children:"[Dougs Library](/dougs-library/)"}),e.jsx(N,{children:"[The Librarian](/dougs-story/)"}),e.jsx(P,{children:"[The Library](/dougs-library/)"}),e.jsx(q,{children:"[The Library](/dougs-library/)"})]}),"Cover"),Z=t(()=>e.jsxs(o,{children:[e.jsx(u,{}),e.jsxs(l,{children:[e.jsx(y,{}),"[Synopsis](/dougs-library/)"]}),e.jsx(n,{children:"The catalogue of my library, filed under what it is about, which is itself. Everything I keep stands under it, directly or through another book."})]}),"Synopsis"),_=t(()=>e.jsxs(o,{children:[e.jsx(G,{}),e.jsxs(l,{children:[e.jsx(y,{}),"[Table of Contents](/dougs-library/#table-of-contents)"]}),e.jsxs(c,{children:[e.jsx(d,{children:"Contents"}),e.jsx(n,{children:e.jsx(i,{children:"[The Shelves](/dougs-library/#the-shelves)"})}),e.jsxs(n,{children:[e.jsx(h,{children:e.jsx(i,{children:"[Dougs Story](/dougs-library/#dougs-story)"})}),e.jsx(h,{children:e.jsx(b,{children:"[Dougs Story](/dougs-story/)"})})]}),e.jsxs(n,{children:[e.jsx(h,{children:e.jsx(i,{children:"[Dougs Design](/dougs-library/#dougs-design)"})}),e.jsx(h,{children:e.jsx(b,{children:"[Dougs Design](/dougs-design/)"})})]}),e.jsxs(n,{children:[e.jsx(h,{children:e.jsx(i,{children:"[Dougs Reference Manual](/dougs-library/#dougs-reference-manual)"})}),e.jsx(h,{children:e.jsx(b,{children:"[Dougs Reference Manual](/dougs-reference-manual/)"})})]}),e.jsxs(n,{children:[e.jsx(y,{}),e.jsx(h,{children:e.jsx(i,{children:"[Dougs Library](/dougs-library/)"})}),e.jsx(h,{children:e.jsx(i,{children:"[Synopsis](/dougs-library/#synopsis)"})}),e.jsx(h,{children:e.jsx(i,{children:"[Table of Contents](/dougs-library/#table-of-contents)"})})]})]}),e.jsxs(c,{children:[e.jsx(d,{children:"How this book is built"}),e.jsx(n,{children:e.jsx(i,{children:"[The Bars](/dougs-library/#the-bars)"})}),e.jsx(n,{children:e.jsx(i,{children:"[The Shelf](/dougs-library/#the-shelf)"})}),e.jsx(n,{children:e.jsx(i,{children:"[The Black and Sky](/dougs-library/#the-black-and-sky)"})})]})]}),"Table"),ee=t(()=>e.jsxs(o,{children:[e.jsx(l,{children:"[The Shelves](/dougs-library/#the-shelves)"}),e.jsxs(c,{children:[e.jsx(d,{children:"What stands here"}),e.jsxs(n,{children:["Three books stand under this one. ",e.jsx(a,{children:"[Dougs Story](/dougs-story/)"})," is mine, and the one book here that is by its own subject. It is the place to begin from, and it begins with ",e.jsx(a,{children:"[starting over](/dougs-story/#starting-over)"}),". ",e.jsx(a,{children:"[Dougs Design](/dougs-design/)"})," is where the design of this library is kept. ",e.jsx(a,{children:"[Dougs Reference Manual](/dougs-reference-manual/)"})," holds the parts I build this library with, each beside the chapter that says what it is."]}),e.jsxs(n,{children:["Each of the three has a chapter here that stands in for it and carries its synopsis. In the table of contents the name leads to that chapter, and the small square at the right of the row, its ",e.jsx(a,{children:"[shelfmark](/dougs-reference-manual/#the-shelfmark)"}),", leads to the book itself."]})]})]}),"TheShelves1"),se=t(()=>e.jsxs(o,{children:[e.jsx(l,{children:"[Dougs Story](/dougs-library/#dougs-story)"}),e.jsx(u,{children:J()})]}),"DougsStory2"),ne=t(()=>e.jsxs(o,{children:[e.jsx(l,{children:"[Dougs Design](/dougs-library/#dougs-design)"}),e.jsx(u,{children:K()})]}),"DougsDesign3"),te=t(()=>e.jsxs(o,{children:[e.jsx(l,{children:"[Dougs Reference Manual](/dougs-library/#dougs-reference-manual)"}),e.jsx(u,{children:Q()})]}),"DougsReferenceManual4"),ae=t(()=>e.jsxs(o,{children:[e.jsx(l,{children:"[The Bars](/dougs-library/#the-bars)"}),e.jsxs(c,{children:[e.jsx(d,{children:"Two bars"}),e.jsx(n,{children:"Two bars stand across the top of this book. The upper one is the library's, and is to be the same on every catalogue: the library's name at one end and mine at the other. The one under it is this book's own cover, its title, with the ways of showing what it holds at its right."}),e.jsxs(n,{children:["It is the frame of ",e.jsx(a,{children:"[the design I chose for the library's catalogue](/dougs-design/#the-librarys-catalogue)"}),", and it is ",e.jsx(a,{children:"[a frame](/dougs-reference-manual/#the-frames)"})," like any other, a class under the library's book that places the parts. It is kept here until a second catalogue uses it."]})]}),e.jsxs(c,{children:[e.jsx(v,{}),e.jsx(d,{children:"The bars' file"}),e.jsx(n,{children:e.jsx(k,{identifier:"code"})})]}),e.jsx(T,{identifier:"code",type:".tsx",children:`import { ElementType, ReactNode } from 'react';
import { $, selection } from '@dna-platform/chemistry';
import { $DougsLibrary } from '../.manual/.book';

export class $TopBars extends $DougsLibrary {
    layout: ElementType = selection.div\`
        min-height: 100vh;

        & > nav { display: flex; justify-content: space-between; align-items: center; padding-inline: \${({ theme }) => theme.space}; color: \${({ theme }) => theme.bright}; background: \${({ theme }) => theme.bar}; }
        & > nav .pd-library-title {
            margin: 0;
            padding-block: calc(\${({ theme }) => theme.space} / 2);
            font-size: calc(0.6 * \${({ theme }) => theme.size});
            letter-spacing: 0.24em;
            text-transform: uppercase;
        }
        & > nav .pd-byline { margin: 0; }
        & > nav .pa-reference { color: inherit; }

        & > div { display: flex; flex-wrap: wrap; align-items: center; column-gap: \${({ theme }) => theme.space}; padding-inline: \${({ theme }) => theme.space}; background: \${({ theme }) => theme.tint}; }
        & > div .pd-chapter.pa-cover { margin: 0; }
        & > div .pd-title { margin: 0; padding-block: calc(\${({ theme }) => theme.space} / 2); font-size: calc(1.4 * \${({ theme }) => theme.size}); letter-spacing: 0.04em; }
        & > div .pd-filed { margin: 0; }
        & > div .pd-switch { margin: 0 0 0 auto; }

        & > main { padding-inline: calc(2 * \${({ theme }) => theme.space}); }
        & > main .pd-chapter { margin: 0; padding-block-start: \${({ theme }) => theme.space}; }
    \`;

    override write(): ReactNode {
        const Layout = this.layout;
        return (
            <Layout>
                <nav>
                    {this.library()}
                    {this.byline()}
                </nav>
                <div>
                    {this.place(this.cover)}
                    {this.filed()}
                    {this.controls()}
                </div>
                <main>
                    {this.place(...this.pages)}
                    {this.place(this.table)}
                </main>
            </Layout>
        );
    }
}

export const TopBars = $($TopBars);
`})]}),"TheBars90"),re=t(()=>e.jsxs(o,{children:[e.jsx(l,{children:"[The Shelf](/dougs-library/#the-shelf)"}),e.jsxs(c,{children:[e.jsx(d,{children:"The table, shown as a shelf"}),e.jsxs(n,{children:["A catalogue holds books, and its table of contents lists them. The shelf is that table shown another way. Each row that answers for a book stands as a cover, with the book's name on it and its ",e.jsx(a,{children:"[shelfmark](/dougs-reference-manual/#the-shelfmark)"})," at the foot. The list is the same table as rows."]}),e.jsxs(n,{children:["I change between the two at the right of the bar. Nothing in the table is rewritten for it. The rows are the same rows, and which of them answers for a book is something each row already knows, as ",e.jsx(a,{children:"[an entry](/dougs-reference-manual/#the-table)"}),"."]})]}),e.jsxs(c,{children:[e.jsx(v,{}),e.jsx(d,{children:"The shelf's file"}),e.jsx(n,{children:e.jsx(k,{identifier:"code"})})]}),e.jsx(T,{identifier:"code",type:".tsx",children:`import { $ } from '@dna-platform/chemistry';
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
`})]}),"TheShelf91"),ie=t(()=>e.jsxs(o,{children:[e.jsx(l,{children:"[The Black and Sky](/dougs-library/#the-black-and-sky)"}),e.jsxs(c,{children:[e.jsx(d,{children:"The library's own colours"}),e.jsx(n,{children:"The library itself is black and sky: a black bar, a sky under it, and white beneath. Each catalogue is to have colours of its own, so these stand here, in this book's theme, and not in the theme every book shares. They are stand-ins until I choose mine."}),e.jsxs(n,{children:["The theme is ",e.jsx(a,{children:"[the library's](/dougs-reference-manual/#the-theme)"})," with two values changed and two parts added: the rules that set the table as ",e.jsx(a,{children:"[a shelf](/dougs-library/#the-shelf)"})," and as a list. ",e.jsx(a,{children:"[The bars](/dougs-library/#the-bars)"})," carry their own rules and read these values."]})]}),e.jsxs(c,{children:[e.jsx(v,{}),e.jsx(d,{children:"The theme's own file"}),e.jsx(n,{children:e.jsx(k,{identifier:"code"})})]}),e.jsx(T,{identifier:"code",type:".tsx",children:`import { css, RuleSet } from 'styled-components';
import { $ } from '@dna-platform/chemistry';
import { $DougsTheme } from '../.manual/.book';

export class $BlackAndSky extends $DougsTheme {
    paper = '#ffffff';
    tint = '#a9d3e6';

    protected override parts(): RuleSet[] {
        return [...super.parts(), this.shelf(), this.list()];
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
`})]}),"TheBlackAndSky92"),oe=r(m),fe=t(()=>e.jsxs(oe,{children:[Y(),Z(),_(),ee(),se(),ne(),te(),ae(),re(),ie()]}),"book");export{fe as book};
