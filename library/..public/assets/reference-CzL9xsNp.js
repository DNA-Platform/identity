var H=Object.defineProperty;var s=(g,e)=>H(g,"name",{value:e,configurable:!0});import{$ as r,a as E,b as F,i as q,s as C,c as U,d as V,j as t,S as _,f as o,T as G,e as J,g as K,C as h,h as l,A as Q,k as X,l as Y,m as k,P as v,n as a,o as m,H as b,p as n,W as d,M as i,q as f}from"./index-ozZrr8bI.js";import{O as Z,$ as ee,L as te,a as se,b as ae,I as re}from"./15-the-bars~code-VisU6xaq.js";import{S as ne}from"./.synopsis-DSYqwzfG.js";import{S as oe}from"./.synopsis-D2_Kbyqf.js";import{S as ie}from"./.synopsis-xcHuZ2x8.js";var ce=Object.defineProperty,de=s((g,e,c,u)=>{for(var p=void 0,w=g.length-1,P;w>=0;w--)(P=g[w])&&(p=P(e,c,p)||p);return p&&ce(e,c,p),p},"__decorateClass");const R=class R extends E{get identifier(){return this._book??super.identifier}$Bound(){super.$Bound(),this._book=this.chapter?.annotations.expressed(F)?.means?.identifier}};s(R,"$BookLink");let $=R;de([q()],$.prototype,"_book");const he=r($),x=class x extends U{constructor(){super(...arguments),this.specification=new Z,this.themeProvider=!0}defines(e){for(const c of e.annotations.after(this))c instanceof x&&e.annotations.express(c,!1);super.defines(e)}erase(e){super.erase(e),e.classes.revert(this)}};s(x,"$View");let j=x;const N=class N extends j{constructor(){super(...arguments),this.style=C.div`
        .pd-book.pa-shelf .pd-shelf {
            display: grid;
            grid-template-columns: repeat(auto-fill, ${({theme:e})=>e.volume});
            gap: ${({theme:e})=>e.space};
            align-items: start;
        }
        @media (max-width: ${({theme:e})=>e.narrow}) {
            .pd-book.pa-shelf .pd-shelf { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }
    `}defines(e){super.defines(e),e.classes.add(this,"pa-shelf")}};s(N,"$Shelf");let S=N;const le=r(S),O=class O extends ee{get books(){return this.text.find(V).filter(e=>e.is(F)&&e!==this.synopsis)}get placed(){return[...super.placed,...this.books]}write(){const e=r(this.cover),c=r(this.synopsis),u=r(this.table);return t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"pd-library-bar",children:[this.filed(),this.byline()]}),t.jsxs("div",{className:"pd-book-bar",children:[t.jsx(e,{}),t.jsx("div",{className:"pd-switches",children:this.switches()})]}),t.jsx("div",{className:"pd-holds",children:t.jsx(u,{})}),t.jsxs("div",{className:"pd-leaves",children:[this.front(t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"pd-words",children:t.jsx(c,{})}),t.jsx("div",{className:"pd-shelf",children:this.volumes()})]})),this.leaves()]})]})}volumes(){return this.books.map((e,c)=>{const u=r(e);return t.jsx("div",{className:"pd-volume",children:t.jsx(u,{})},c)})}$Define(){super.$Define();const e=r(le);this.annotations.add(this,t.jsx(e,{}))}};s(O,"$Library");let y=O;const A=class A extends se{defines(e){super.defines(e),e.classes.add(this,"pa-bars")}parts(){return[...super.parts(),this.areas(),this.bars(),this.narrow()]}areas(){return o`
            .pd-book.pa-bars {
                display: grid;
                grid-template-columns: ${({theme:e})=>e.side} minmax(0, 1fr);
                grid-template-rows: auto auto minmax(0, 1fr);
                grid-template-areas: 'library library' 'book book' 'holds pages';
                height: 100vh;
            }
            .pa-bars .pd-library-bar { grid-area: library; }
            .pa-bars .pd-book-bar { grid-area: book; }
            .pa-bars .pd-holds { grid-area: holds; overflow-y: auto; }
            .pa-bars .pd-leaves { grid-area: pages; overflow-y: auto; }
            .pa-bars .pd-words .pd-chapter { scroll-margin-block-start: ${({theme:e})=>e.space}; }
        `}bars(){return o`
            .pa-bars .pd-library-bar, .pa-bars .pd-book-bar {
                display: flex;
                align-items: center;
                justify-content: space-between;
                column-gap: ${({theme:e})=>e.space};
            }
            .pa-bars .pd-switches {
                display: flex;
                gap: calc(${({theme:e})=>e.space} / 3);
            }
        `}narrow(){return o`
            @media (max-width: ${({theme:e})=>e.narrow}) {
                .pd-book.pa-bars { display: block; height: auto; }
                .pa-bars .pd-library-bar, .pa-bars .pd-holds {
                    overflow-x: auto;
                    white-space: nowrap;
                    scrollbar-width: none;
                }
            }
        `}};s(A,"$Bars");let T=A;const D=r(y),pe=r(T);r(D,te)(pe);r(D,_)(he);const I=class I extends ae{constructor(){super(...arguments),this.ink="#10252c",this.soft="#516770",this.line="#dbe7ec",this.accent="#166178",this.tint="#e3f5fa",this.night="#0c1b1f"}parts(){return[...super.parts(),this.libraryBar(),this.bookBar(),this.holds(),this.front(),this.covers(),this.words(),this.small()]}libraryBar(){return o`
            .pd-library-bar {
                background: ${({theme:e})=>e.night};
                color: ${({theme:e})=>e.haze};
                padding: calc(${({theme:e})=>e.space} * 0.375) calc(${({theme:e})=>e.space} * 0.75);
            }
            .pd-library-bar .pd-filed-under, .pd-library-bar .pd-byline {
                display: flex;
                align-items: center;
                gap: calc(${({theme:e})=>e.space} * 0.4);
                margin-block: 0;
                font-size: calc(0.83 * ${({theme:e})=>e.size});
            }
            .pd-library-bar .pd-word {
                color: ${({theme:e})=>e.paper};
                font-size: ${({theme:e})=>e.size};
                font-weight: 500;
            }
            .pd-library-bar .pd-filed-under .pd-word {
                font-family: ${({theme:e})=>e.serif};
                font-size: calc(1.45 * ${({theme:e})=>e.size});
                font-weight: 600;
                line-height: 1;
            }
            .pd-library-bar .pa-reference { color: inherit; text-decoration: none; }
            .pd-library-bar .pd-filed-under::before, .pd-library-bar .pd-byline::before {
                content: ${({theme:e})=>e.initial};
                display: grid;
                place-items: center;
                width: calc(${({theme:e})=>e.space} * 1.3);
                height: calc(${({theme:e})=>e.space} * 1.3);
                font-size: ${({theme:e})=>e.size};
                font-weight: 600;
            }
            .pd-library-bar .pd-filed-under::before {
                border-radius: calc(${({theme:e})=>e.space} / 3);
                background: ${({theme:e})=>e.opal};
                color: ${({theme:e})=>e.night};
            }
            .pd-library-bar .pd-byline::before {
                border-radius: 50%;
                background: ${({theme:e})=>e.me};
                color: ${({theme:e})=>e.paper};
            }
        `}bookBar(){return o`
            .pd-book-bar {
                background: ${({theme:e})=>e.sky};
                padding: calc(${({theme:e})=>e.space} * 0.375) ${({theme:e})=>e.space};
            }
            .pd-book-bar .pd-switch {
                border: none;
                border-radius: calc(${({theme:e})=>e.space} * 0.375);
                padding: calc(${({theme:e})=>e.space} / 4) calc(${({theme:e})=>e.space} / 2);
                background: ${({theme:e})=>e.glass};
                color: ${({theme:e})=>e.ink};
            }
            .pd-book-bar .pd-switch[aria-pressed='true'] {
                background: ${({theme:e})=>e.night};
                color: ${({theme:e})=>e.paper};
                font-weight: 500;
            }
        `}holds(){return o`
            .pd-holds {
                padding: calc(${({theme:e})=>e.space} * 0.75) calc(${({theme:e})=>e.space} / 2);
                border-inline-end: thin solid ${({theme:e})=>e.line};
            }
        `}front(){return o`
            .pd-leaves { padding: calc(${({theme:e})=>e.space} * 0.83) calc(${({theme:e})=>e.space} * 1.17) calc(${({theme:e})=>e.space} * 1.67); }
            .pd-front .pd-words {
                margin-block-end: ${({theme:e})=>e.space};
                padding: calc(${({theme:e})=>e.space} * 0.67) calc(${({theme:e})=>e.space} * 0.83);
                border-radius: calc(${({theme:e})=>e.space} * 0.67);
                background: ${({theme:e})=>e.wash};
            }
            .pd-front .pd-words .pd-chapter { margin-block: 0; }
            .pd-front .pd-words .pd-paragraph {
                margin-block: 0;
                font-family: ${({theme:e})=>e.serif};
                font-size: calc(1.5 * ${({theme:e})=>e.size});
                font-weight: 500;
                line-height: 1.25;
            }
        `}covers(){return o`
            .pd-volume .pd-chapter { margin-block: 0; }
            .pd-book.pa-shelf .pd-volume .pd-title {
                display: flex;
                aspect-ratio: 3 / 4;
                padding: calc(${({theme:e})=>e.space} * 0.6) calc(${({theme:e})=>e.space} / 2) calc(${({theme:e})=>e.space} / 2) calc(${({theme:e})=>e.space} * 0.75);
                border-radius: calc(${({theme:e})=>e.space} / 8) calc(${({theme:e})=>e.space} * 0.3) calc(${({theme:e})=>e.space} * 0.3) calc(${({theme:e})=>e.space} / 8);
                border-inline-start: calc(${({theme:e})=>e.space} * 0.3) solid ${({theme:e})=>e.night};
                background: ${({theme:e})=>e.binding};
                box-shadow: ${({theme:e})=>e.shadow};
                color: ${({theme:e})=>e.opal};
                font-family: ${({theme:e})=>e.serif};
                font-size: calc(1.5 * ${({theme:e})=>e.size});
                font-weight: 600;
                line-height: 1.08;
            }
            .pd-volume .pd-paragraph {
                margin-block: calc(${({theme:e})=>e.space} / 3) 0;
                font-size: calc(0.86 * ${({theme:e})=>e.size});
                color: ${({theme:e})=>e.soft};
            }
        `}words(){return o`
            .pd-leaf .pd-words .pd-title {
                font-family: ${({theme:e})=>e.serif};
                font-size: calc(2.5 * ${({theme:e})=>e.size});
                font-weight: 600;
                line-height: 1.04;
            }
            .pd-leaf .pd-words .pd-heading {
                font-size: calc(0.76 * ${({theme:e})=>e.size});
                font-weight: 600;
                letter-spacing: 0.12em;
                text-transform: uppercase;
                color: ${({theme:e})=>e.soft};
            }
        `}small(){return o`
            @media (max-width: ${({theme:e})=>e.narrow}) {
                .pd-holds {
                    border-inline-end: none;
                    border-block-end: thin solid ${({theme:e})=>e.line};
                }
                .pd-leaves { padding: calc(${({theme:e})=>e.space} * 0.67); }
            }
        `}};s(I,"$LibraryTheme");let z=I;const me=r(z);r(D,G)(me);const W=class W extends J{constructor(){super(...arguments),this.style=C.header`
        .pd-chapter.pa-cover { margin-block: 0; }
        .pa-cover .pd-title {
            font-family: ${({theme:e})=>e.serif};
            font-size: calc(1.8 * ${({theme:e})=>e.size});
            font-weight: 600;
            line-height: 1.04;
        }
    `}};s(W,"$LibraryCover");let B=W;const M=class M extends K{constructor(){super(...arguments),this.style=C.nav`
        .pd-chapter.pa-table-of-contents { margin-block: 0; }
        .pa-table-of-contents .pd-section { margin-block: 0 ${({theme:e})=>e.space}; }
        .pa-table-of-contents .pd-heading {
            font-size: calc(0.76 * ${({theme:e})=>e.size});
            font-weight: 600;
            letter-spacing: 0.12em;
            text-transform: uppercase;
            color: ${({theme:e})=>e.soft};
            padding-inline: calc(${({theme:e})=>e.space} * 0.375);
            margin-block-end: calc(${({theme:e})=>e.space} * 0.4);
        }
        .pa-table-of-contents .pd-paragraph:not(.pa-parenthetical) {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: calc(${({theme:e})=>e.space} * 0.375);
            margin-block: 0;
            padding: calc(${({theme:e})=>e.space} / 4) calc(${({theme:e})=>e.space} * 0.375) calc(${({theme:e})=>e.space} / 4) calc(${({theme:e})=>e.space} * 1.1);
            border-radius: calc(${({theme:e})=>e.space} / 3);
            font-weight: 500;
        }
        .pa-table-of-contents .pd-paragraph:not(.pa-parenthetical)::before {
            content: '';
            position: absolute;
            inset-inline-start: calc(${({theme:e})=>e.space} * 0.375);
            width: calc(${({theme:e})=>e.space} * 0.375);
            height: calc(${({theme:e})=>e.space} * 0.375);
            border-radius: 50%;
            background: ${({theme:e})=>e.sea};
        }
        .pa-table-of-contents .pd-paragraph.pa-entry.pa-open { background: ${({theme:e})=>e.tint}; }
        .pa-table-of-contents .pa-reference { color: inherit; text-decoration: none; }
        @media (max-width: ${({theme:e})=>e.narrow}) {
            .pa-table-of-contents .pd-section {
                display: flex;
                align-items: center;
                gap: calc(${({theme:e})=>e.space} / 4);
                margin-block: 0 calc(${({theme:e})=>e.space} / 3);
            }
            .pa-table-of-contents .pd-heading { margin-block-end: 0; }
            .pa-table-of-contents .pd-paragraph:not(.pa-parenthetical) {
                border: thin solid ${({theme:e})=>e.line};
                border-radius: ${({theme:e})=>e.space};
                white-space: nowrap;
            }
        }
    `}};s(M,"$LibraryTableOfContents");let L=M;const be=r(B),fe=r(L),ge=s(()=>t.jsxs(h,{children:[t.jsx(be,{}),t.jsx(l,{children:"[Dougs Library](/dougs-library/)"}),t.jsx(Q,{children:"[The Librarian](/dougs-story/)"}),t.jsx(X,{children:"[The Library](/dougs-library/)"}),t.jsx(Y,{children:"[The Library](/dougs-library/)"})]}),"Cover"),ue=s(()=>t.jsxs(h,{children:[t.jsx(k,{}),t.jsxs(l,{children:[t.jsx(v,{}),"[Synopsis](/dougs-library/)"]}),t.jsx(a,{children:"The catalogue of my library, filed under what it is about, which is itself. Everything I keep is filed under it, directly or through another book."})]}),"Synopsis"),$e=s(()=>t.jsxs(h,{children:[t.jsx(fe,{}),t.jsx(re,{}),t.jsxs(l,{children:[t.jsx(v,{}),"[Table of Contents](/dougs-library/#table-of-contents)"]}),t.jsxs(m,{children:[t.jsx(b,{children:"Contents"}),t.jsx(a,{children:t.jsx(n,{children:"[The Shelves](/dougs-library/#the-shelves)"})}),t.jsxs(a,{children:[t.jsx(d,{children:t.jsx(n,{children:"[Dougs Story](/dougs-library/#dougs-story)"})}),t.jsx(d,{children:t.jsx(n,{children:"[□](/dougs-story/)"})})]}),t.jsxs(a,{children:[t.jsx(d,{children:t.jsx(n,{children:"[Dougs Design](/dougs-library/#dougs-design)"})}),t.jsx(d,{children:t.jsx(n,{children:"[□](/dougs-design/)"})})]}),t.jsxs(a,{children:[t.jsx(d,{children:t.jsx(n,{children:"[Dougs Reference Manual](/dougs-library/#dougs-reference-manual)"})}),t.jsx(d,{children:t.jsx(n,{children:"[□](/dougs-reference-manual/)"})})]}),t.jsxs(a,{children:[t.jsx(v,{}),t.jsx(d,{children:t.jsx(n,{children:"[Dougs Library](/dougs-library/)"})}),t.jsx(d,{children:t.jsx(n,{children:"[Synopsis](/dougs-library/#synopsis)"})}),t.jsx(d,{children:t.jsx(n,{children:"[Table of Contents](/dougs-library/#table-of-contents)"})})]})]}),t.jsxs(m,{children:[t.jsx(b,{children:"How this book is built"}),t.jsx(a,{children:t.jsx(n,{children:"[The Bars](/dougs-library/#the-bars)"})})]})]}),"Table"),ye=s(()=>t.jsxs(h,{children:[t.jsx(l,{children:"[The Shelves](/dougs-library/#the-shelves)"}),t.jsxs(m,{children:[t.jsx(b,{children:"What is here"}),t.jsxs(a,{children:["Three books are filed under this one. ",t.jsx(i,{children:"[Dougs Story](/dougs-story/)"})," is mine, and the one book here that is by its own subject. It is the place to begin from, and it begins with ",t.jsx(i,{children:"[starting over](/dougs-story/#starting-over)"}),". The design of this library is kept in ",t.jsx(i,{children:"[Dougs Design](/dougs-design/)"}),". The parts I build this library with are in ",t.jsx(i,{children:"[Dougs Reference Manual](/dougs-reference-manual/)"}),", each beside the chapter that says what it is."]}),t.jsx(a,{children:"Each of the three has a chapter here that represents it and carries its synopsis. In the table of contents the name leads to that chapter, and the small square after it leads to the book itself."})]})]}),"TheShelves1"),xe=s(()=>t.jsxs(h,{children:[t.jsx(l,{children:"[Dougs Story](/dougs-library/#dougs-story)"}),t.jsxs(a,{children:["My own book, ",t.jsx(i,{children:"[Dougs Story](/dougs-story/)"}),", is the place to begin from."]}),t.jsx(k,{children:ne()})]}),"DougsStory2"),ke=s(()=>t.jsxs(h,{children:[t.jsx(l,{children:"[Dougs Design](/dougs-library/#dougs-design)"}),t.jsxs(a,{children:["The book ",t.jsx(i,{children:"[Dougs Design](/dougs-design/)"})," keeps the design of this library."]}),t.jsx(k,{children:oe()})]}),"DougsDesign3"),we=s(()=>t.jsxs(h,{children:[t.jsx(l,{children:"[Dougs Reference Manual](/dougs-library/#dougs-reference-manual)"}),t.jsxs(a,{children:["The book ",t.jsx(i,{children:"[Dougs Reference Manual](/dougs-reference-manual/)"})," holds the parts this library is built with."]}),t.jsx(k,{children:ie()})]}),"DougsReferenceManual4"),ve=s(()=>t.jsxs(h,{children:[t.jsx(l,{children:"[The Bars](/dougs-library/#the-bars)"}),t.jsxs(m,{children:[t.jsx(b,{children:"How this book is laid out"}),t.jsxs(a,{children:["This book is the way into every other, so it is laid out as a place to choose from. Across the top are two bars. The first is the library's: what this book is filed under, and me. The second is this book's: its cover, and ",t.jsx(i,{children:"[the switch](/dougs-reference-manual/#the-switch)"}),". Under the bars the table of contents is kept at the left. Beside it is one page: the synopsis and a shelf when no chapter is open, and otherwise the open chapter."]}),t.jsxs(a,{children:["The two bars are the arrangement said of the book. The design it follows is ",t.jsx(i,{children:"[the shelf](/dougs-design/#the-shelf)"})," under ",t.jsx(i,{children:"[the black and the sky](/dougs-design/#two-top-bars-black-then-sky)"}),"."]})]}),t.jsxs(m,{children:[t.jsx(b,{children:"What is on the shelf"}),t.jsx(a,{children:"The shelf holds the chapters that each represent a book. The class of this book finds them by what they are: a chapter that carries the synopsis of a book other than this one. Its specification says every chapter I add has a place."}),t.jsx(a,{children:"On the shelf such a chapter is drawn as its book: the title as a cover, and its words under it. The title leads to the book. Anywhere else a title refers to its own chapter. In this book, where the chapter carries another book's synopsis, it refers to that book. That link is a class of the framework's reference from a title to itself, registered on this book's class, so no chapter has to ask for it."}),t.jsx(a,{children:"The shelf is one view of those chapters, and the views I chose for this book are three: the shelf, the sources and the wall. A view is a thing said of the book, and only one is said at a time, because a view that is said takes the one said before it away. That is how the framework keeps a book to one theme, done here for views. The class says the shelf; the other two are not drawn yet."})]}),t.jsxs(m,{children:[t.jsx(b,{children:"How it is dressed"}),t.jsx(a,{children:"The theme is the library's, with this book's colors and its own parts: the two bars, the contents at the left, the front page and the covers. The cover and the table of contents are this book's own. Each is the framework's with a look, and the cover file and the table file take them from here."})]}),t.jsx(f,{identifier:"code",type:".tsx",children:`import { ReactNode } from 'react';
import { css, RuleSet } from 'styled-components';
import { $ } from '@dna-platform/chemistry';
import { $Chapter, $Synopsis, $Writing, Self } from '@dna-platform/public';
import { $LibraryBook, $Layout, Layout } from '../.manual/.book';
import { BookLink } from './o1-the-bars~booklink.tsx';
import { Shelf as shelf } from './o1-the-bars~views.tsx';

export class $Library extends $LibraryBook {
    get books(): $Chapter[] {
        return this.text.find($Chapter).filter(chapter => chapter.is($Synopsis) && chapter !== this.synopsis);
    }
    override get placed(): ($Chapter | undefined)[] {
        return [...super.placed, ...this.books];
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
                    <div className="pd-switches">
                        {this.switches()}
                    </div>
                </div>
                <div className="pd-holds">
                    <Table />
                </div>
                <div className="pd-leaves">
                    {this.front(
                        <>
                            <div className="pd-words">
                                <Synopsis />
                            </div>
                            <div className="pd-shelf">
                                {this.volumes()}
                            </div>
                        </>
                    )}
                    {this.leaves()}
                </div>
            </>
        );
    }

    volumes(): ReactNode {
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

    protected override $Define(): void {
        super.$Define();
        const Shelf = $(shelf);
        this.annotations.add(this,
            <Shelf />
        );
    }
}

export class $Bars extends $Layout {
    override defines(writing: $Writing): void {
        super.defines(writing);
        writing.classes.add(this, 'pa-bars');
    }

    protected override parts(): RuleSet[] {
        return [...super.parts(), this.areas(), this.bars(), this.narrow()];
    }

    protected areas(): RuleSet {
        return css\`
            .pd-book.pa-bars {
                display: grid;
                grid-template-columns: \${({ theme }) => theme.side} minmax(0, 1fr);
                grid-template-rows: auto auto minmax(0, 1fr);
                grid-template-areas: 'library library' 'book book' 'holds pages';
                height: 100vh;
            }
            .pa-bars .pd-library-bar { grid-area: library; }
            .pa-bars .pd-book-bar { grid-area: book; }
            .pa-bars .pd-holds { grid-area: holds; overflow-y: auto; }
            .pa-bars .pd-leaves { grid-area: pages; overflow-y: auto; }
            .pa-bars .pd-words .pd-chapter { scroll-margin-block-start: \${({ theme }) => theme.space}; }
        \`;
    }

    protected bars(): RuleSet {
        return css\`
            .pa-bars .pd-library-bar, .pa-bars .pd-book-bar {
                display: flex;
                align-items: center;
                justify-content: space-between;
                column-gap: \${({ theme }) => theme.space};
            }
            .pa-bars .pd-switches {
                display: flex;
                gap: calc(\${({ theme }) => theme.space} / 3);
            }
        \`;
    }

    protected narrow(): RuleSet {
        return css\`
            @media (max-width: \${({ theme }) => theme.narrow}) {
                .pd-book.pa-bars { display: block; height: auto; }
                .pa-bars .pd-library-bar, .pa-bars .pd-holds {
                    overflow-x: auto;
                    white-space: nowrap;
                    scrollbar-width: none;
                }
            }
        \`;
    }
}

export const Library = $($Library);
export const Bars = $($Bars);
$(Library, Layout)(Bars);
$(Library, Self)(BookLink);
`}),t.jsx(f,{identifier:"booklink",type:".tsx",children:`import { $, inert } from '@dna-platform/chemistry';
import { $SelfReference, $Synopsis } from '@dna-platform/public';

export class $BookLink extends $SelfReference {
    @inert() protected _book?: string;
    override get identifier(): string { return this._book ?? super.identifier; }

    protected override $Bound(): void {
        super.$Bound();
        this._book = this.chapter?.annotations.expressed($Synopsis)?.means?.identifier;
    }
}

export const BookLink = $($BookLink);
`}),t.jsx(f,{identifier:"views",type:".tsx",children:`import { $, selection } from '@dna-platform/chemistry';
import { $Format, $Writing } from '@dna-platform/public';
import { OfABookSpecification } from '../.manual/.book';

export class $View extends $Format {
    specification = new OfABookSpecification();
    themeProvider = true;

    override defines(writing: $Writing): void {
        for (const annotation of writing.annotations.after(this))
            if (annotation instanceof $View)
                writing.annotations.express(annotation, false);
        super.defines(writing);
    }

    override erase(writing: $Writing): void {
        super.erase(writing);
        writing.classes.revert(this);
    }
}

export class $Shelf extends $View {
    style = selection.div\`
        .pd-book.pa-shelf .pd-shelf {
            display: grid;
            grid-template-columns: repeat(auto-fill, \${({ theme }) => theme.volume});
            gap: \${({ theme }) => theme.space};
            align-items: start;
        }
        @media (max-width: \${({ theme }) => theme.narrow}) {
            .pd-book.pa-shelf .pd-shelf { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }
    \`;

    override defines(writing: $Writing): void {
        super.defines(writing);
        writing.classes.add(this, 'pa-shelf');
    }
}

export const Shelf = $($Shelf);
`}),t.jsx(f,{identifier:"faces",type:".tsx",children:`import { $, selection } from '@dna-platform/chemistry';
import { $Cover, $TableOfContents } from '@dna-platform/public';

export class $LibraryCover extends $Cover {
    override style = selection.header\`
        .pd-chapter.pa-cover { margin-block: 0; }
        .pa-cover .pd-title {
            font-family: \${({ theme }) => theme.serif};
            font-size: calc(1.8 * \${({ theme }) => theme.size});
            font-weight: 600;
            line-height: 1.04;
        }
    \`;
}

export class $LibraryTableOfContents extends $TableOfContents {
    override style = selection.nav\`
        .pd-chapter.pa-table-of-contents { margin-block: 0; }
        .pa-table-of-contents .pd-section { margin-block: 0 \${({ theme }) => theme.space}; }
        .pa-table-of-contents .pd-heading {
            font-size: calc(0.76 * \${({ theme }) => theme.size});
            font-weight: 600;
            letter-spacing: 0.12em;
            text-transform: uppercase;
            color: \${({ theme }) => theme.soft};
            padding-inline: calc(\${({ theme }) => theme.space} * 0.375);
            margin-block-end: calc(\${({ theme }) => theme.space} * 0.4);
        }
        .pa-table-of-contents .pd-paragraph:not(.pa-parenthetical) {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: calc(\${({ theme }) => theme.space} * 0.375);
            margin-block: 0;
            padding: calc(\${({ theme }) => theme.space} / 4) calc(\${({ theme }) => theme.space} * 0.375) calc(\${({ theme }) => theme.space} / 4) calc(\${({ theme }) => theme.space} * 1.1);
            border-radius: calc(\${({ theme }) => theme.space} / 3);
            font-weight: 500;
        }
        .pa-table-of-contents .pd-paragraph:not(.pa-parenthetical)::before {
            content: '';
            position: absolute;
            inset-inline-start: calc(\${({ theme }) => theme.space} * 0.375);
            width: calc(\${({ theme }) => theme.space} * 0.375);
            height: calc(\${({ theme }) => theme.space} * 0.375);
            border-radius: 50%;
            background: \${({ theme }) => theme.sea};
        }
        .pa-table-of-contents .pd-paragraph.pa-entry.pa-open { background: \${({ theme }) => theme.tint}; }
        .pa-table-of-contents .pa-reference { color: inherit; text-decoration: none; }
        @media (max-width: \${({ theme }) => theme.narrow}) {
            .pa-table-of-contents .pd-section {
                display: flex;
                align-items: center;
                gap: calc(\${({ theme }) => theme.space} / 4);
                margin-block: 0 calc(\${({ theme }) => theme.space} / 3);
            }
            .pa-table-of-contents .pd-heading { margin-block-end: 0; }
            .pa-table-of-contents .pd-paragraph:not(.pa-parenthetical) {
                border: thin solid \${({ theme }) => theme.line};
                border-radius: \${({ theme }) => theme.space};
                white-space: nowrap;
            }
        }
    \`;
}

export const Cover = $($LibraryCover);
export const TableOfContents = $($LibraryTableOfContents);
`}),t.jsx(f,{identifier:"theme",type:".tsx",children:`import { css, RuleSet } from 'styled-components';
import { $ } from '@dna-platform/chemistry';
import { Theme } from '@dna-platform/public';
import { $LibraryBookTheme } from '../.manual/.book';
import { Library } from './o1-the-bars~code.tsx';

export class $LibraryTheme extends $LibraryBookTheme {
    ink = '#10252c';
    soft = '#516770';
    line = '#dbe7ec';
    accent = '#166178';
    tint = '#e3f5fa';
    night = '#0c1b1f';

    protected override parts(): RuleSet[] {
        return [...super.parts(), this.libraryBar(), this.bookBar(), this.holds(), this.front(), this.covers(), this.words(), this.small()];
    }

    protected libraryBar(): RuleSet {
        return css\`
            .pd-library-bar {
                background: \${({ theme }) => theme.night};
                color: \${({ theme }) => theme.haze};
                padding: calc(\${({ theme }) => theme.space} * 0.375) calc(\${({ theme }) => theme.space} * 0.75);
            }
            .pd-library-bar .pd-filed-under, .pd-library-bar .pd-byline {
                display: flex;
                align-items: center;
                gap: calc(\${({ theme }) => theme.space} * 0.4);
                margin-block: 0;
                font-size: calc(0.83 * \${({ theme }) => theme.size});
            }
            .pd-library-bar .pd-word {
                color: \${({ theme }) => theme.paper};
                font-size: \${({ theme }) => theme.size};
                font-weight: 500;
            }
            .pd-library-bar .pd-filed-under .pd-word {
                font-family: \${({ theme }) => theme.serif};
                font-size: calc(1.45 * \${({ theme }) => theme.size});
                font-weight: 600;
                line-height: 1;
            }
            .pd-library-bar .pa-reference { color: inherit; text-decoration: none; }
            .pd-library-bar .pd-filed-under::before, .pd-library-bar .pd-byline::before {
                content: \${({ theme }) => theme.initial};
                display: grid;
                place-items: center;
                width: calc(\${({ theme }) => theme.space} * 1.3);
                height: calc(\${({ theme }) => theme.space} * 1.3);
                font-size: \${({ theme }) => theme.size};
                font-weight: 600;
            }
            .pd-library-bar .pd-filed-under::before {
                border-radius: calc(\${({ theme }) => theme.space} / 3);
                background: \${({ theme }) => theme.opal};
                color: \${({ theme }) => theme.night};
            }
            .pd-library-bar .pd-byline::before {
                border-radius: 50%;
                background: \${({ theme }) => theme.me};
                color: \${({ theme }) => theme.paper};
            }
        \`;
    }

    protected bookBar(): RuleSet {
        return css\`
            .pd-book-bar {
                background: \${({ theme }) => theme.sky};
                padding: calc(\${({ theme }) => theme.space} * 0.375) \${({ theme }) => theme.space};
            }
            .pd-book-bar .pd-switch {
                border: none;
                border-radius: calc(\${({ theme }) => theme.space} * 0.375);
                padding: calc(\${({ theme }) => theme.space} / 4) calc(\${({ theme }) => theme.space} / 2);
                background: \${({ theme }) => theme.glass};
                color: \${({ theme }) => theme.ink};
            }
            .pd-book-bar .pd-switch[aria-pressed='true'] {
                background: \${({ theme }) => theme.night};
                color: \${({ theme }) => theme.paper};
                font-weight: 500;
            }
        \`;
    }

    protected holds(): RuleSet {
        return css\`
            .pd-holds {
                padding: calc(\${({ theme }) => theme.space} * 0.75) calc(\${({ theme }) => theme.space} / 2);
                border-inline-end: thin solid \${({ theme }) => theme.line};
            }
        \`;
    }

    protected front(): RuleSet {
        return css\`
            .pd-leaves { padding: calc(\${({ theme }) => theme.space} * 0.83) calc(\${({ theme }) => theme.space} * 1.17) calc(\${({ theme }) => theme.space} * 1.67); }
            .pd-front .pd-words {
                margin-block-end: \${({ theme }) => theme.space};
                padding: calc(\${({ theme }) => theme.space} * 0.67) calc(\${({ theme }) => theme.space} * 0.83);
                border-radius: calc(\${({ theme }) => theme.space} * 0.67);
                background: \${({ theme }) => theme.wash};
            }
            .pd-front .pd-words .pd-chapter { margin-block: 0; }
            .pd-front .pd-words .pd-paragraph {
                margin-block: 0;
                font-family: \${({ theme }) => theme.serif};
                font-size: calc(1.5 * \${({ theme }) => theme.size});
                font-weight: 500;
                line-height: 1.25;
            }
        \`;
    }

    protected covers(): RuleSet {
        return css\`
            .pd-volume .pd-chapter { margin-block: 0; }
            .pd-book.pa-shelf .pd-volume .pd-title {
                display: flex;
                aspect-ratio: 3 / 4;
                padding: calc(\${({ theme }) => theme.space} * 0.6) calc(\${({ theme }) => theme.space} / 2) calc(\${({ theme }) => theme.space} / 2) calc(\${({ theme }) => theme.space} * 0.75);
                border-radius: calc(\${({ theme }) => theme.space} / 8) calc(\${({ theme }) => theme.space} * 0.3) calc(\${({ theme }) => theme.space} * 0.3) calc(\${({ theme }) => theme.space} / 8);
                border-inline-start: calc(\${({ theme }) => theme.space} * 0.3) solid \${({ theme }) => theme.night};
                background: \${({ theme }) => theme.binding};
                box-shadow: \${({ theme }) => theme.shadow};
                color: \${({ theme }) => theme.opal};
                font-family: \${({ theme }) => theme.serif};
                font-size: calc(1.5 * \${({ theme }) => theme.size});
                font-weight: 600;
                line-height: 1.08;
            }
            .pd-volume .pd-paragraph {
                margin-block: calc(\${({ theme }) => theme.space} / 3) 0;
                font-size: calc(0.86 * \${({ theme }) => theme.size});
                color: \${({ theme }) => theme.soft};
            }
        \`;
    }

    protected words(): RuleSet {
        return css\`
            .pd-leaf .pd-words .pd-title {
                font-family: \${({ theme }) => theme.serif};
                font-size: calc(2.5 * \${({ theme }) => theme.size});
                font-weight: 600;
                line-height: 1.04;
            }
            .pd-leaf .pd-words .pd-heading {
                font-size: calc(0.76 * \${({ theme }) => theme.size});
                font-weight: 600;
                letter-spacing: 0.12em;
                text-transform: uppercase;
                color: \${({ theme }) => theme.soft};
            }
        \`;
    }

    protected small(): RuleSet {
        return css\`
            @media (max-width: \${({ theme }) => theme.narrow}) {
                .pd-holds {
                    border-inline-end: none;
                    border-block-end: thin solid \${({ theme }) => theme.line};
                }
                .pd-leaves { padding: calc(\${({ theme }) => theme.space} * 0.67); }
            }
        \`;
    }
}

export const LibraryTheme = $($LibraryTheme);
$(Library, Theme)(LibraryTheme);
`})]}),"TheBarso1"),je=r(y),De=s(()=>t.jsxs(je,{children:[ge(),ue(),$e(),ye(),xe(),ke(),we(),ve()]}),"book");export{De as book};
