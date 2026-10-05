var C=Object.defineProperty;var n=(u,e)=>C(u,"name",{value:e,configurable:!0});import{$ as D,a as B,b as a,j as s,c as N,f as j,s as P,C as d,d as R,T as h,A as I,S as E,e as L,g as m,P as v,h as r,i as M,k as b,H as g,l as t,W as o,M as l,m as A}from"./index-BbAnYces.js";import{$ as O,D as W,P as H,a as _}from"./.book-DuTpRAU_.js";import{S as q}from"./.synopsis-CRubaH0S.js";import{S as F}from"./.synopsis-BfZnceHe.js";import{S as U}from"./.synopsis-BBkb46EO.js";var z=Object.defineProperty,G=Object.getOwnPropertyDescriptor,J=n((u,e,i,c)=>{for(var p=G(e,i),f=u.length-1,S;f>=0;f--)(S=u[f])&&(p=S(e,i,p)||p);return p&&z(e,i,p),p},"__decorateClass");const w=class w extends O{constructor(){super(...arguments),this.specification=new y}get books(){return this.text.find(D).filter(e=>e.is(B)&&e!==this.synopsis)}write(){const e=a(this.cover),i=a(this.synopsis),c=a(this.table);return s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"pd-library-bar",children:[this.filed(),this.byline()]}),s.jsxs("div",{className:"pd-book-bar",children:[s.jsx(e,{}),this.choices()]}),s.jsx("div",{className:"pd-holds",children:s.jsx(c,{})}),s.jsxs("div",{className:"pd-main",children:[s.jsxs("div",{className:this.open===void 0?"pd-page pd-front pd-open":"pd-page pd-front",children:[s.jsx(i,{}),s.jsx("div",{className:"pd-shelf",children:this.shelved()})]}),this.pages()]})]})}shelved(){return this.books.map((e,i)=>{const c=a(e);return s.jsx("div",{className:"pd-volume",children:s.jsx(c,{})},i)})}};n(w,"$DougsLibrary");let x=w;const $=class $ extends _{defines(e){super.defines(e),e.classes.add(this,"pa-two-bars")}parts(){return[...super.parts(),this.columns(),this.bars(),this.shelf()]}columns(){return j`
            .pd-book.pa-two-bars {
                display: grid;
                grid-template-columns: ${({theme:e})=>e.side} minmax(0, 1fr);
                column-gap: ${({theme:e})=>e.space};
                align-items: start;
            }
            @media (max-width: ${({theme:e})=>e.narrow}) {
                .pd-book.pa-two-bars { display: block; }
            }
        `}bars(){return j`
            .pd-library-bar, .pd-book-bar {
                grid-column: 1 / -1;
                display: flex;
                flex-wrap: wrap;
                align-items: baseline;
                justify-content: space-between;
                column-gap: ${({theme:e})=>e.space};
            }
        `}shelf(){return j`
            .pd-shelf {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(${({theme:e})=>e.side}, 1fr));
                gap: ${({theme:e})=>e.space};
            }
        `}};n($,"$TwoBars");let k=$;const T=class T extends W{$placesEveryChapter(e){const i=[e.cover,e.synopsis,e.table,...e.chapters,...e.books];N(e.text.find(D).every(c=>i.includes(c)),"my library places its cover, its synopsis, its table of contents, its chapters and the chapters that represent its books, and it holds a chapter that is none of them")}};n(T,"DougsLibrarySpecification");let y=T;J([P("my library has a place for every chapter it holds")],y.prototype,"$placesEveryChapter");const K=a(k);a(a(x),H)(K);const Q=n(()=>s.jsxs(d,{children:[s.jsx(R,{}),s.jsx(h,{children:"[Dougs Library](/dougs-library/)"}),s.jsx(I,{children:"[The Librarian](/dougs-story/)"}),s.jsx(E,{children:"[The Library](/dougs-library/)"}),s.jsx(L,{children:"[The Library](/dougs-library/)"})]}),"Cover"),V=n(()=>s.jsxs(d,{children:[s.jsx(m,{}),s.jsxs(h,{children:[s.jsx(v,{}),"[Synopsis](/dougs-library/)"]}),s.jsx(r,{children:"The catalogue of my library, filed under what it is about, which is itself. Everything I keep is filed under it, directly or through another book."})]}),"Synopsis"),X=n(()=>s.jsxs(d,{children:[s.jsx(M,{}),s.jsxs(h,{children:[s.jsx(v,{}),"[Table of Contents](/dougs-library/#table-of-contents)"]}),s.jsxs(b,{children:[s.jsx(g,{children:"Contents"}),s.jsx(r,{children:s.jsx(t,{children:"[The Shelves](/dougs-library/#the-shelves)"})}),s.jsxs(r,{children:[s.jsx(o,{children:s.jsx(t,{children:"[Dougs Story](/dougs-library/#dougs-story)"})}),s.jsx(o,{children:s.jsx(t,{children:"[□](/dougs-story/)"})})]}),s.jsxs(r,{children:[s.jsx(o,{children:s.jsx(t,{children:"[Dougs Design](/dougs-library/#dougs-design)"})}),s.jsx(o,{children:s.jsx(t,{children:"[□](/dougs-design/)"})})]}),s.jsxs(r,{children:[s.jsx(o,{children:s.jsx(t,{children:"[Dougs Reference Manual](/dougs-library/#dougs-reference-manual)"})}),s.jsx(o,{children:s.jsx(t,{children:"[□](/dougs-reference-manual/)"})})]}),s.jsxs(r,{children:[s.jsx(v,{}),s.jsx(o,{children:s.jsx(t,{children:"[Dougs Library](/dougs-library/)"})}),s.jsx(o,{children:s.jsx(t,{children:"[Synopsis](/dougs-library/#synopsis)"})}),s.jsx(o,{children:s.jsx(t,{children:"[Table of Contents](/dougs-library/#table-of-contents)"})})]})]}),s.jsxs(b,{children:[s.jsx(g,{children:"How this book is built"}),s.jsx(r,{children:s.jsx(t,{children:"[The Two Bars](/dougs-library/#the-two-bars)"})})]})]}),"Table"),Y=n(()=>s.jsxs(d,{children:[s.jsx(h,{children:"[The Shelves](/dougs-library/#the-shelves)"}),s.jsxs(b,{children:[s.jsx(g,{children:"What is here"}),s.jsxs(r,{children:["Three books are filed under this one. ",s.jsx(l,{children:"[Dougs Story](/dougs-story/)"})," is mine, and the one book here that is by its own subject. It is the place to begin from, and it begins with ",s.jsx(l,{children:"[starting over](/dougs-story/#starting-over)"}),". The design of this library is kept in ",s.jsx(l,{children:"[Dougs Design](/dougs-design/)"}),". The parts I build this library with are in ",s.jsx(l,{children:"[Dougs Reference Manual](/dougs-reference-manual/)"}),", each beside the chapter that says what it is."]}),s.jsx(r,{children:"Each of the three has a chapter here that represents it and carries its synopsis. In the table of contents the name leads to that chapter, and the small square after it leads to the book itself."})]})]}),"TheShelves1"),Z=n(()=>s.jsxs(d,{children:[s.jsx(h,{children:"[Dougs Story](/dougs-library/#dougs-story)"}),s.jsx(m,{children:q()})]}),"DougsStory2"),ss=n(()=>s.jsxs(d,{children:[s.jsx(h,{children:"[Dougs Design](/dougs-library/#dougs-design)"}),s.jsx(m,{children:F()})]}),"DougsDesign3"),es=n(()=>s.jsxs(d,{children:[s.jsx(h,{children:"[Dougs Reference Manual](/dougs-library/#dougs-reference-manual)"}),s.jsx(m,{children:U()})]}),"DougsReferenceManual4"),ns=n(()=>s.jsxs(d,{children:[s.jsx(h,{children:"[The Two Bars](/dougs-library/#the-two-bars)"}),s.jsxs(b,{children:[s.jsx(g,{children:"How this book is laid out"}),s.jsxs(r,{children:["This book is the way into every other, so it is laid out as a place to choose from. Across the top are two bars. The first is the library's: what this book is filed under, and me. The second is this book's: its cover, and ",s.jsx(l,{children:"[the switch](/dougs-reference-manual/#the-switch)"}),". Under the bars the table of contents is kept at the left. Beside it is one page: the synopsis and a shelf when no chapter is open, and otherwise the open chapter."]}),s.jsx(r,{children:"The shelf holds the chapters that each represent a book. The class of this book finds them by what they are: a chapter that carries the synopsis of a book other than this one. Its specification says every chapter I add has a place."}),s.jsxs(r,{children:["The two bars are the arrangement said of the book. The design it is growing toward is ",s.jsx(l,{children:"[the shelf](/dougs-design/#the-shelf)"})," under ",s.jsx(l,{children:"[the black and the sky](/dougs-design/#two-top-bars-black-then-sky)"}),". It has no covers and no color yet, and the shelf is its only view."]})]}),s.jsx(A,{identifier:"code",type:".tsx",children:`import { ReactNode } from 'react';
import { css, RuleSet } from 'styled-components';
import { $, $check } from '@dna-platform/chemistry';
import { $Chapter, $Synopsis, $Writing, specify } from '@dna-platform/public';
import { $DougsBook, $Paged, DougsBookSpecification, Paged } from '../.manual/.book';

export class $DougsLibrary extends $DougsBook {
    specification = new DougsLibrarySpecification();
    get books(): $Chapter[] {
        return this.text.find($Chapter).filter(chapter => chapter.is($Synopsis) && chapter !== this.synopsis);
    }

    override write(): ReactNode {
        const Cover = $(this.cover!);
        const Synopsis = $(this.synopsis!);
        const Table = $(this.table!);
        return (
            <>
                <div className="pd-library-bar">
                    {this.filed()}
                    {this.byline()}
                </div>
                <div className="pd-book-bar">
                    <Cover />
                    {this.choices()}
                </div>
                <div className="pd-holds">
                    <Table />
                </div>
                <div className="pd-main">
                    <div className={this.open === undefined ? 'pd-page pd-front pd-open' : 'pd-page pd-front'}>
                        <Synopsis />
                        <div className="pd-shelf">
                            {this.shelved()}
                        </div>
                    </div>
                    {this.pages()}
                </div>
            </>
        );
    }

    shelved(): ReactNode {
        return this.books.map((book, index) => {
            const Book = $(book);
            return (
                <div
                    key={index}
                    className="pd-volume"
                >
                    <Book />
                </div>
            );
        });
    }
}

export class $TwoBars extends $Paged {
    override defines(writing: $Writing): void {
        super.defines(writing);
        writing.classes.add(this, 'pa-two-bars');
    }

    protected override parts(): RuleSet[] {
        return [...super.parts(), this.columns(), this.bars(), this.shelf()];
    }

    protected columns(): RuleSet {
        return css\`
            .pd-book.pa-two-bars {
                display: grid;
                grid-template-columns: \${({ theme }) => theme.side} minmax(0, 1fr);
                column-gap: \${({ theme }) => theme.space};
                align-items: start;
            }
            @media (max-width: \${({ theme }) => theme.narrow}) {
                .pd-book.pa-two-bars { display: block; }
            }
        \`;
    }

    protected bars(): RuleSet {
        return css\`
            .pd-library-bar, .pd-book-bar {
                grid-column: 1 / -1;
                display: flex;
                flex-wrap: wrap;
                align-items: baseline;
                justify-content: space-between;
                column-gap: \${({ theme }) => theme.space};
            }
        \`;
    }

    protected shelf(): RuleSet {
        return css\`
            .pd-shelf {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(\${({ theme }) => theme.side}, 1fr));
                gap: \${({ theme }) => theme.space};
            }
        \`;
    }
}

export class DougsLibrarySpecification extends DougsBookSpecification {
    @specify('my library has a place for every chapter it holds')
    $placesEveryChapter(book: $DougsLibrary): void {
        const placed = [book.cover, book.synopsis, book.table, ...book.chapters, ...book.books];
        $check(book.text.find($Chapter).every(chapter => placed.includes(chapter)),
            'my library places its cover, its synopsis, its table of contents, its chapters and the chapters that represent its books, and it holds a chapter that is none of them');
    }
}

export const TwoBars = $($TwoBars);
$($($DougsLibrary), Paged)(TwoBars);
`})]}),"TheTwoBars90"),rs=a(x),ls=n(()=>s.jsxs(rs,{children:[Q(),V(),X(),Y(),Z(),ss(),es(),ns()]}),"book");export{ls as book};
