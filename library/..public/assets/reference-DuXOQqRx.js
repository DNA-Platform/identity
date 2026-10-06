var H=Object.defineProperty;var t=(g,e)=>H(g,"name",{value:e,configurable:!0});import{$ as r,a as E,b as W,i as F,s as B,c as q,d as _,j as n,S as U,T as V,f as d,e as G,g as J,C as c,h,A as K,k as Q,l as X,m as y,P as w,n as s,o as f,H as b,p as a,W as o,M as i,q as m}from"./index-CwXNp_Lv.js";import{O as Y,$ as Z,a as ee,I as ne,C as D}from"./18-the-colour~code-CzB0-SMD.js";import{S as te}from"./.synopsis-Brj7Tbrw.js";import{S as se}from"./.synopsis-E8Wm7VOi.js";import{S as ae}from"./.synopsis-BMiqrGHw.js";var re=Object.defineProperty,ie=t((g,e,l,A)=>{for(var p=void 0,k=g.length-1,I;k>=0;k--)(I=g[k])&&(p=I(e,l,p)||p);return p&&re(e,l,p),p},"__decorateClass");const C=class C extends E{get identifier(){return this._book??super.identifier}$Bound(){super.$Bound(),this._book=this.chapter?.annotations.expressed(W)?.means?.identifier}};t(C,"$BookLink");let u=C;ie([F()],u.prototype,"_book");const oe=r(u),x=class x extends q{constructor(){super(...arguments),this.specification=new Y,this.themeProvider=!0}defines(e){for(const l of e.annotations.after(this))l instanceof x&&e.annotations.express(l,!1);super.defines(e)}erase(e){super.erase(e),e.classes.revert(this)}};t(x,"$View");let j=x;const L=class L extends j{constructor(){super(...arguments),this.style=B.div`
        .pd-book.pa-shelf .pd-shelf {
            display: grid;
            grid-template-columns: repeat(6, minmax(0, 1fr));
            gap: calc(${({theme:e})=>e.space} * 0.83);
            align-items: start;
        }
        @media (max-width: ${({theme:e})=>e.narrow}) {
            .pd-book.pa-shelf .pd-shelf { grid-template-columns: repeat(3, minmax(0, 1fr)); gap: calc(${({theme:e})=>e.space} * 0.58) calc(${({theme:e})=>e.space} / 2); }
        }
    `}defines(e){super.defines(e),e.classes.add(this,"pa-shelf")}};t(L,"$Shelf");let v=L;const ce=r(v),R=class R extends Z{get books(){return this.text.find(_).filter(e=>e.is(W)&&e!==this.synopsis)}get placed(){return[...super.placed,...this.books]}opening(){return n.jsxs(n.Fragment,{children:[super.opening(),n.jsx("div",{className:"pd-shelf",children:this.volumes()})]})}volumes(){return this.books.map((e,l)=>{const A=r(e);return n.jsx("div",{className:"pd-volume",children:n.jsx(A,{})},l)})}$Define(){super.$Define();const e=r(ce);this.annotations.add(this,n.jsx(e,{}))}};t(R,"$Library");let $=R;const N=r($);r(N,U)(oe);const M=class M extends ee{constructor(){super(...arguments),this.ink="#10252c",this.soft="#516770",this.line="#dbe7ec",this.accent="#166178",this.tint="#e3f5fa",this.night="#0c1b1f",this.spine="inset 5px 0 0 rgba(0, 0, 0, 0.14), inset 6px 0 0 rgba(255, 255, 255, 0.12), 0 10px 20px -10px rgba(0, 0, 0, 0.45)"}parts(){return[...super.parts(),this.libraryBar(),this.bookBar(),this.holds(),this.front(),this.covers(),this.words(),this.small()]}libraryBar(){return d`
            .pd-library {
                padding: calc(${({theme:e})=>e.space} * 0.375) calc(${({theme:e})=>e.space} * 0.75);
            }
            .pd-library .pd-filed-under, .pd-library .pd-byline {
                display: flex;
                align-items: center;
                gap: calc(${({theme:e})=>e.space} * 0.4);
                margin-block: 0;
                font-size: calc(0.83 * ${({theme:e})=>e.size});
            }
            .pd-library .pd-word {
                font-size: ${({theme:e})=>e.size};
                font-weight: 500;
            }
            .pd-library .pd-filed-under .pd-word {
                font-family: ${({theme:e})=>e.serif};
                font-size: calc(1.45 * ${({theme:e})=>e.size});
                font-weight: 600;
                line-height: 1;
            }
            .pd-library .pa-reference { color: inherit; text-decoration: none; }
            .pd-library .pd-filed-under::before, .pd-library .pd-byline::before {
                content: ${({theme:e})=>e.initial};
                display: grid;
                place-items: center;
                width: calc(${({theme:e})=>e.space} * 1.3);
                height: calc(${({theme:e})=>e.space} * 1.3);
                font-size: ${({theme:e})=>e.size};
                font-weight: 600;
            }
            .pd-library .pd-filed-under::before {
                border-radius: calc(${({theme:e})=>e.space} / 3);
                background: ${({theme:e})=>e.opal};
                color: ${({theme:e})=>e.night};
            }
            .pd-library .pd-byline::before {
                border-radius: 50%;
                background: ${({theme:e})=>e.me};
                color: ${({theme:e})=>e.paper};
            }
        `}bookBar(){return d`
            .pd-head {
                padding: calc(${({theme:e})=>e.space} * 0.375) ${({theme:e})=>e.space};
            }
            .pd-head .pd-switch {
                border: none;
                border-radius: calc(${({theme:e})=>e.space} * 0.375);
                padding: calc(${({theme:e})=>e.space} / 4) calc(${({theme:e})=>e.space} / 2);
                background: ${({theme:e})=>e.glass};
                color: ${({theme:e})=>e.ink};
            }
            .pd-head .pd-switch[aria-pressed='true'] {
                background: ${({theme:e})=>e.night};
                color: ${({theme:e})=>e.paper};
                font-weight: 500;
            }
        `}holds(){return d`
            .pd-holds {
                padding: calc(${({theme:e})=>e.space} * 0.75) calc(${({theme:e})=>e.space} / 2);
                border-inline-end: thin solid ${({theme:e})=>e.line};
            }
        `}front(){return d`
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
        `}covers(){return d`
            .pd-volume .pd-chapter { margin-block: 0; }
            .pd-book.pa-shelf .pd-volume .pd-title {
                position: relative;
                display: flex;
                flex-direction: column;
                aspect-ratio: 2 / 3;
                box-sizing: border-box;
                padding: calc(${({theme:e})=>e.space} * 0.54) calc(${({theme:e})=>e.space} / 2) calc(${({theme:e})=>e.space} * 0.46) calc(${({theme:e})=>e.space} * 0.67);
                border-radius: calc(${({theme:e})=>e.space} / 6) calc(${({theme:e})=>e.space} * 0.29) calc(${({theme:e})=>e.space} * 0.29) calc(${({theme:e})=>e.space} / 6);
                box-shadow: ${({theme:e})=>e.spine};
                color: ${({theme:e})=>e.white};
                font-family: ${({theme:e})=>e.serif};
                font-size: calc(1.03 * ${({theme:e})=>e.size});
                font-weight: 600;
                line-height: 1.12;
                letter-spacing: -0.005em;
            }
            .pd-book.pa-shelf .pd-volume .pd-title::after {
                content: '';
                position: absolute;
                inset-inline: calc(${({theme:e})=>e.space} * 0.67) calc(${({theme:e})=>e.space} / 2);
                top: 56%;
                height: 1px;
                background: ${({theme:e})=>e.glass};
            }
            .pd-volume .pd-paragraph {
                margin-block: calc(${({theme:e})=>e.space} / 3) 0;
                font-size: calc(0.9 * ${({theme:e})=>e.size});
                font-weight: 500;
                color: ${({theme:e})=>e.ink};
            }
            .pd-volume .pa-synopsis .pd-paragraph {
                margin-block: calc(${({theme:e})=>e.space} / 8) 0;
                font-size: calc(0.83 * ${({theme:e})=>e.size});
                font-weight: 400;
                color: ${({theme:e})=>e.faint};
            }
        `}words(){return d`
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
        `}small(){return d`
            @media (max-width: ${({theme:e})=>e.narrow}) {
                .pd-holds {
                    border-inline-end: none;
                    border-block-end: thin solid ${({theme:e})=>e.line};
                }
                .pd-leaves { padding: calc(${({theme:e})=>e.space} * 0.67); }
            }
        `}};t(M,"$LibraryTheme");let S=M;const he=r(S);r(N,V)(he);const P=class P extends G{constructor(){super(...arguments),this.style=B.header`
        .pd-chapter.pa-cover { margin-block: 0; }
        .pa-cover .pd-title {
            font-family: ${({theme:e})=>e.serif};
            font-size: calc(1.8 * ${({theme:e})=>e.size});
            font-weight: 600;
            line-height: 1.04;
        }
    `}};t(P,"$LibraryCover");let z=P;const O=class O extends J{constructor(){super(...arguments),this.style=B.nav`
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
    `}};t(O,"$LibraryTableOfContents");let T=O;const le=r(z),de=r(T),pe=t(()=>n.jsxs(c,{children:[n.jsx(le,{}),n.jsx(h,{children:"[Dougs Library](/dougs-library/)"}),n.jsx(K,{children:"[The Librarian](/dougs-story/)"}),n.jsx(Q,{children:"[The Library](/dougs-library/)"}),n.jsx(X,{children:"[The Library](/dougs-library/)"})]}),"Cover"),me=t(()=>n.jsxs(c,{children:[n.jsx(y,{}),n.jsxs(h,{children:[n.jsx(w,{}),"[Synopsis](/dougs-library/)"]}),n.jsx(s,{children:"The catalogue of my library, filed under what it is about, which is itself. Everything I keep is filed under it, directly or through another book."})]}),"Synopsis"),fe=t(()=>n.jsxs(c,{children:[n.jsx(de,{}),n.jsx(ne,{}),n.jsxs(h,{children:[n.jsx(w,{}),"[Table of Contents](/dougs-library/#table-of-contents)"]}),n.jsxs(f,{children:[n.jsx(b,{children:"Contents"}),n.jsx(s,{children:n.jsx(a,{children:"[The Shelves](/dougs-library/#the-shelves)"})}),n.jsxs(s,{children:[n.jsx(o,{children:n.jsx(a,{children:"[Dougs Story](/dougs-library/#dougs-story)"})}),n.jsx(o,{children:n.jsx(a,{children:"[□](/dougs-story/)"})})]}),n.jsxs(s,{children:[n.jsx(o,{children:n.jsx(a,{children:"[Dougs Design](/dougs-library/#dougs-design)"})}),n.jsx(o,{children:n.jsx(a,{children:"[□](/dougs-design/)"})})]}),n.jsxs(s,{children:[n.jsx(o,{children:n.jsx(a,{children:"[Dougs Reference Manual](/dougs-library/#dougs-reference-manual)"})}),n.jsx(o,{children:n.jsx(a,{children:"[□](/dougs-reference-manual/)"})})]}),n.jsxs(s,{children:[n.jsx(w,{}),n.jsx(o,{children:n.jsx(a,{children:"[Dougs Library](/dougs-library/)"})}),n.jsx(o,{children:n.jsx(a,{children:"[Synopsis](/dougs-library/#synopsis)"})}),n.jsx(o,{children:n.jsx(a,{children:"[Table of Contents](/dougs-library/#table-of-contents)"})})]})]}),n.jsxs(f,{children:[n.jsx(b,{children:"How this book is built"}),n.jsx(s,{children:n.jsx(a,{children:"[The Bars](/dougs-library/#the-bars)"})})]})]}),"Table"),be=t(()=>n.jsxs(c,{children:[n.jsx(h,{children:"[The Shelves](/dougs-library/#the-shelves)"}),n.jsxs(f,{children:[n.jsx(b,{children:"What is here"}),n.jsxs(s,{children:["Three books are filed under this one. ",n.jsx(i,{children:"[Dougs Story](/dougs-story/)"})," is mine, and the one book here that is by its own subject. It is the place to begin from, and it begins with ",n.jsx(i,{children:"[starting over](/dougs-story/#starting-over)"}),". The design of this library is kept in ",n.jsx(i,{children:"[Dougs Design](/dougs-design/)"}),". The parts I build this library with are in ",n.jsx(i,{children:"[Dougs Reference Manual](/dougs-reference-manual/)"}),", each beside the chapter that says what it is."]}),n.jsx(s,{children:"Each of the three has a chapter here that represents it and carries its synopsis. In the table of contents the name leads to that chapter, and the small square after it leads to the book itself."})]})]}),"TheShelves1"),ge=t(()=>n.jsxs(c,{children:[n.jsx(D,{children:"#e8590c"}),n.jsx(h,{children:"[Dougs Story](/dougs-library/#dougs-story)"}),n.jsxs(s,{children:["My own book, ",n.jsx(i,{children:"[Dougs Story](/dougs-story/)"}),", is the place to begin from."]}),n.jsx(y,{children:te()})]}),"DougsStory2"),ue=t(()=>n.jsxs(c,{children:[n.jsx(D,{children:"#c24a78"}),n.jsx(h,{children:"[Dougs Design](/dougs-library/#dougs-design)"}),n.jsxs(s,{children:["The book ",n.jsx(i,{children:"[Dougs Design](/dougs-design/)"})," keeps the design of this library."]}),n.jsx(y,{children:se()})]}),"DougsDesign3"),$e=t(()=>n.jsxs(c,{children:[n.jsx(D,{children:"#7a4a8c"}),n.jsx(h,{children:"[Dougs Reference Manual](/dougs-library/#dougs-reference-manual)"}),n.jsxs(s,{children:["The book ",n.jsx(i,{children:"[Dougs Reference Manual](/dougs-reference-manual/)"})," holds the parts this library is built with."]}),n.jsx(y,{children:ae()})]}),"DougsReferenceManual4"),xe=t(()=>n.jsxs(c,{children:[n.jsx(h,{children:"[The Bars](/dougs-library/#the-bars)"}),n.jsxs(f,{children:[n.jsx(b,{children:"How this book is laid out"}),n.jsxs(s,{children:["This book is the way into every other, so it is laid out as a place to choose from. Across the top are two bars. The first is the library's: what this book is filed under, and me. The second is this book's: its cover, and ",n.jsx(i,{children:"[the switch](/dougs-reference-manual/#the-switch)"}),". Under the bars the table of contents is kept at the left. Beside it is one page: the synopsis and a shelf when no chapter is open, and otherwise the open chapter."]}),n.jsxs(s,{children:["The two bars are the arrangement said of the book. The design it follows is ",n.jsx(i,{children:"[the shelf](/dougs-design/#the-shelf)"})," under ",n.jsx(i,{children:"[the black and the sky](/dougs-design/#two-top-bars-black-then-sky)"}),"."]})]}),n.jsxs(f,{children:[n.jsx(b,{children:"What is on the shelf"}),n.jsx(s,{children:"The shelf holds the chapters that each represent a book. The class of this book finds them by what they are: a chapter that carries the synopsis of a book other than this one. Its specification says every chapter I add has a place."}),n.jsx(s,{children:"On the shelf such a chapter is drawn as its book: the title as a cover, and its words under it. The title leads to the book. Anywhere else a title refers to its own chapter. In this book, where the chapter carries another book's synopsis, it refers to that book. That link is a class of the framework's reference from a title to itself, registered on this book's class, so no chapter has to ask for it."}),n.jsx(s,{children:"The shelf is one view of those chapters, and the views I chose for this book are three: the shelf, the sources and the wall. A view is a thing said of the book, and only one is said at a time, because a view that is said takes the one said before it away. That is how the framework keeps a book to one theme, done here for views. The class says the shelf; the other two are not drawn yet."})]}),n.jsxs(f,{children:[n.jsx(b,{children:"How it is dressed"}),n.jsx(s,{children:"The theme is the library's, with this book's colors and its own parts: the two bars, the contents at the left, the front page and the covers. The cover and the table of contents are this book's own. Each is the framework's with a look, and the cover file and the table file take them from here."})]}),n.jsx(m,{identifier:"code",type:".tsx",children:`import { ReactNode } from 'react';
import { $ } from '@dna-platform/chemistry';
import { $Chapter, $Synopsis, Self } from '@dna-platform/public';
import { $LibraryBook } from '../.manual/.book';
import { BookLink } from './o1-the-bars~booklink.tsx';
import { Shelf as shelf } from './o1-the-bars~views.tsx';

export class $Library extends $LibraryBook {
    get books(): $Chapter[] {
        return this.text.find($Chapter).filter(chapter => chapter.is($Synopsis) && chapter !== this.synopsis);
    }
    override get placed(): ($Chapter | undefined)[] {
        return [...super.placed, ...this.books];
    }

    override opening(): ReactNode {
        return (
            <>
                {super.opening()}
                <div className="pd-shelf">
                    {this.volumes()}
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

export const Library = $($Library);
$(Library, Self)(BookLink);
`}),n.jsx(m,{identifier:"booklink",type:".tsx",children:`import { $, inert } from '@dna-platform/chemistry';
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
`}),n.jsx(m,{identifier:"views",type:".tsx",children:`import { $, selection } from '@dna-platform/chemistry';
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
            grid-template-columns: repeat(6, minmax(0, 1fr));
            gap: calc(\${({ theme }) => theme.space} * 0.83);
            align-items: start;
        }
        @media (max-width: \${({ theme }) => theme.narrow}) {
            .pd-book.pa-shelf .pd-shelf { grid-template-columns: repeat(3, minmax(0, 1fr)); gap: calc(\${({ theme }) => theme.space} * 0.58) calc(\${({ theme }) => theme.space} / 2); }
        }
    \`;

    override defines(writing: $Writing): void {
        super.defines(writing);
        writing.classes.add(this, 'pa-shelf');
    }
}

export const Shelf = $($Shelf);
`}),n.jsx(m,{identifier:"faces",type:".tsx",children:`import { $, selection } from '@dna-platform/chemistry';
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
`}),n.jsx(m,{identifier:"theme",type:".tsx",children:`import { css, RuleSet } from 'styled-components';
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
    spine = 'inset 5px 0 0 rgba(0, 0, 0, 0.14), inset 6px 0 0 rgba(255, 255, 255, 0.12), 0 10px 20px -10px rgba(0, 0, 0, 0.45)';

    protected override parts(): RuleSet[] {
        return [...super.parts(), this.libraryBar(), this.bookBar(), this.holds(), this.front(), this.covers(), this.words(), this.small()];
    }

    protected libraryBar(): RuleSet {
        return css\`
            .pd-library {
                padding: calc(\${({ theme }) => theme.space} * 0.375) calc(\${({ theme }) => theme.space} * 0.75);
            }
            .pd-library .pd-filed-under, .pd-library .pd-byline {
                display: flex;
                align-items: center;
                gap: calc(\${({ theme }) => theme.space} * 0.4);
                margin-block: 0;
                font-size: calc(0.83 * \${({ theme }) => theme.size});
            }
            .pd-library .pd-word {
                font-size: \${({ theme }) => theme.size};
                font-weight: 500;
            }
            .pd-library .pd-filed-under .pd-word {
                font-family: \${({ theme }) => theme.serif};
                font-size: calc(1.45 * \${({ theme }) => theme.size});
                font-weight: 600;
                line-height: 1;
            }
            .pd-library .pa-reference { color: inherit; text-decoration: none; }
            .pd-library .pd-filed-under::before, .pd-library .pd-byline::before {
                content: \${({ theme }) => theme.initial};
                display: grid;
                place-items: center;
                width: calc(\${({ theme }) => theme.space} * 1.3);
                height: calc(\${({ theme }) => theme.space} * 1.3);
                font-size: \${({ theme }) => theme.size};
                font-weight: 600;
            }
            .pd-library .pd-filed-under::before {
                border-radius: calc(\${({ theme }) => theme.space} / 3);
                background: \${({ theme }) => theme.opal};
                color: \${({ theme }) => theme.night};
            }
            .pd-library .pd-byline::before {
                border-radius: 50%;
                background: \${({ theme }) => theme.me};
                color: \${({ theme }) => theme.paper};
            }
        \`;
    }

    protected bookBar(): RuleSet {
        return css\`
            .pd-head {
                padding: calc(\${({ theme }) => theme.space} * 0.375) \${({ theme }) => theme.space};
            }
            .pd-head .pd-switch {
                border: none;
                border-radius: calc(\${({ theme }) => theme.space} * 0.375);
                padding: calc(\${({ theme }) => theme.space} / 4) calc(\${({ theme }) => theme.space} / 2);
                background: \${({ theme }) => theme.glass};
                color: \${({ theme }) => theme.ink};
            }
            .pd-head .pd-switch[aria-pressed='true'] {
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
                position: relative;
                display: flex;
                flex-direction: column;
                aspect-ratio: 2 / 3;
                box-sizing: border-box;
                padding: calc(\${({ theme }) => theme.space} * 0.54) calc(\${({ theme }) => theme.space} / 2) calc(\${({ theme }) => theme.space} * 0.46) calc(\${({ theme }) => theme.space} * 0.67);
                border-radius: calc(\${({ theme }) => theme.space} / 6) calc(\${({ theme }) => theme.space} * 0.29) calc(\${({ theme }) => theme.space} * 0.29) calc(\${({ theme }) => theme.space} / 6);
                box-shadow: \${({ theme }) => theme.spine};
                color: \${({ theme }) => theme.white};
                font-family: \${({ theme }) => theme.serif};
                font-size: calc(1.03 * \${({ theme }) => theme.size});
                font-weight: 600;
                line-height: 1.12;
                letter-spacing: -0.005em;
            }
            .pd-book.pa-shelf .pd-volume .pd-title::after {
                content: '';
                position: absolute;
                inset-inline: calc(\${({ theme }) => theme.space} * 0.67) calc(\${({ theme }) => theme.space} / 2);
                top: 56%;
                height: 1px;
                background: \${({ theme }) => theme.glass};
            }
            .pd-volume .pd-paragraph {
                margin-block: calc(\${({ theme }) => theme.space} / 3) 0;
                font-size: calc(0.9 * \${({ theme }) => theme.size});
                font-weight: 500;
                color: \${({ theme }) => theme.ink};
            }
            .pd-volume .pa-synopsis .pd-paragraph {
                margin-block: calc(\${({ theme }) => theme.space} / 8) 0;
                font-size: calc(0.83 * \${({ theme }) => theme.size});
                font-weight: 400;
                color: \${({ theme }) => theme.faint};
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
`}),n.jsx(m,{identifier:"subjects",type:".tsx",children:`import { Means, Paragraph, Section } from '@dna-platform/public';

export const Subjects = () => (
    <Section>
        <Paragraph>
            <Means>$[[ Dougs Story ]]</Means>
        </Paragraph>
        <Paragraph>
            <Means>$[[ Dougs Design ]]</Means>
        </Paragraph>
        <Paragraph>
            <Means>$[[ Dougs Reference Manual ]]</Means>
        </Paragraph>
    </Section>
);
`})]}),"TheBarso1"),ye=r($),Te=t(()=>n.jsxs(ye,{children:[pe(),me(),fe(),be(),ge(),ue(),$e(),xe()]}),"book");export{Te as book};
