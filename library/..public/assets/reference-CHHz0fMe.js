var H=Object.defineProperty;var n=(g,e)=>H(g,"name",{value:e,configurable:!0});import{$ as r,a as E,b as W,i as F,s as D,c as q,d as _,j as t,S as U,T as V,f as b,e as G,g as J,C as c,h,A as K,k as Q,l as X,m as k,P as w,n as s,o as m,H as f,p as a,W as i,M as o,q as p}from"./index-xg9LJFXI.js";import{O as Y,$ as Z,a as ee,I as te,C as B}from"./18-the-colour~code-BRWY_Grh.js";import{S as ne}from"./.synopsis-Dh7iI0vx.js";import{S as se}from"./.synopsis-Dw-6duQt.js";import{S as ae}from"./.synopsis-COsEWb0y.js";var re=Object.defineProperty,oe=n((g,e,l,A)=>{for(var d=void 0,y=g.length-1,I;y>=0;y--)(I=g[y])&&(d=I(e,l,d)||d);return d&&re(e,l,d),d},"__decorateClass");const C=class C extends E{get identifier(){return this._book??super.identifier}$Bound(){super.$Bound(),this._book=this.chapter?.annotations.expressed(W)?.means?.identifier}};n(C,"$BookLink");let u=C;oe([F()],u.prototype,"_book");const ie=r(u),x=class x extends q{constructor(){super(...arguments),this.specification=new Y,this.themeProvider=!0}defines(e){for(const l of e.annotations.after(this))l instanceof x&&e.annotations.express(l,!1);super.defines(e)}erase(e){super.erase(e),e.classes.revert(this)}};n(x,"$View");let j=x;const L=class L extends j{constructor(){super(...arguments),this.style=D.div`
        .pd-book.pa-shelf .pd-shelf {
            display: grid;
            grid-template-columns: repeat(6, minmax(0, 1fr));
            gap: calc(${({theme:e})=>e.space} * 0.83);
            align-items: start;
        }
        @media (max-width: ${({theme:e})=>e.narrow}) {
            .pd-book.pa-shelf .pd-shelf { grid-template-columns: repeat(3, minmax(0, 1fr)); gap: calc(${({theme:e})=>e.space} * 0.58) calc(${({theme:e})=>e.space} / 2); }
        }
    `}defines(e){super.defines(e),e.classes.add(this,"pa-shelf")}};n(L,"$Shelf");let v=L;const ce=r(v),R=class R extends Z{get books(){return this.text.find(_).filter(e=>e.is(W)&&e!==this.synopsis)}get placed(){return[...super.placed,...this.books]}opening(){return t.jsxs(t.Fragment,{children:[super.opening(),t.jsx("div",{className:"pd-shelf",children:this.volumes()})]})}volumes(){return this.books.map((e,l)=>{const A=r(e);return t.jsx("div",{className:"pd-volume",children:t.jsx(A,{})},l)})}$Define(){super.$Define();const e=r(ce);this.annotations.add(this,t.jsx(e,{}))}};n(R,"$Library");let $=R;const N=r($);r(N,U)(ie);const M=class M extends ee{constructor(){super(...arguments),this.ink="#10252c",this.soft="#516770",this.line="#dbe7ec",this.accent="#166178",this.tint="#e3f5fa",this.night="#0c1b1f",this.spine="inset 5px 0 0 rgba(0, 0, 0, 0.14), inset 6px 0 0 rgba(255, 255, 255, 0.12), 0 10px 20px -10px rgba(0, 0, 0, 0.45)"}parts(){return[...super.parts(),this.front(),this.covers(),this.words(),this.small()]}front(){return b`
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
        `}covers(){return b`
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
        `}words(){return b`
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
        `}small(){return b`
            @media (max-width: ${({theme:e})=>e.narrow}) {
                .pd-holds {
                    border-inline-end: none;
                    border-block-end: thin solid ${({theme:e})=>e.line};
                }
                .pd-leaves { padding: calc(${({theme:e})=>e.space} * 0.67); }
            }
        `}};n(M,"$LibraryTheme");let S=M;const he=r(S);r(N,V)(he);const P=class P extends G{constructor(){super(...arguments),this.style=D.header`
        .pd-chapter.pa-cover { margin-block: 0; }
        .pa-cover .pd-title {
            font-family: ${({theme:e})=>e.serif};
            font-size: calc(1.8 * ${({theme:e})=>e.size});
            font-weight: 600;
            line-height: 1.04;
        }
    `}};n(P,"$LibraryCover");let T=P;const O=class O extends J{constructor(){super(...arguments),this.style=D.nav`
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
    `}};n(O,"$LibraryTableOfContents");let z=O;const le=r(T),de=r(z),pe=n(()=>t.jsxs(c,{children:[t.jsx(le,{}),t.jsx(h,{children:"[Dougs Library](/dougs-library/)"}),t.jsx(K,{children:"[The Librarian](/dougs-story/)"}),t.jsx(Q,{children:"[The Library](/dougs-library/)"}),t.jsx(X,{children:"[The Library](/dougs-library/)"})]}),"Cover"),me=n(()=>t.jsxs(c,{children:[t.jsx(k,{}),t.jsxs(h,{children:[t.jsx(w,{}),"[Synopsis](/dougs-library/)"]}),t.jsx(s,{children:"The catalogue of my library, filed under what it is about, which is itself. Everything I keep is filed under it, directly or through another book."})]}),"Synopsis"),fe=n(()=>t.jsxs(c,{children:[t.jsx(de,{}),t.jsx(te,{}),t.jsxs(h,{children:[t.jsx(w,{}),"[Table of Contents](/dougs-library/#table-of-contents)"]}),t.jsxs(m,{children:[t.jsx(f,{children:"Contents"}),t.jsx(s,{children:t.jsx(a,{children:"[The Shelves](/dougs-library/#the-shelves)"})}),t.jsxs(s,{children:[t.jsx(i,{children:t.jsx(a,{children:"[Dougs Story](/dougs-library/#dougs-story)"})}),t.jsx(i,{children:t.jsx(a,{children:"[□](/dougs-story/)"})})]}),t.jsxs(s,{children:[t.jsx(i,{children:t.jsx(a,{children:"[Dougs Design](/dougs-library/#dougs-design)"})}),t.jsx(i,{children:t.jsx(a,{children:"[□](/dougs-design/)"})})]}),t.jsxs(s,{children:[t.jsx(i,{children:t.jsx(a,{children:"[Dougs Reference Manual](/dougs-library/#dougs-reference-manual)"})}),t.jsx(i,{children:t.jsx(a,{children:"[□](/dougs-reference-manual/)"})})]}),t.jsxs(s,{children:[t.jsx(w,{}),t.jsx(i,{children:t.jsx(a,{children:"[Dougs Library](/dougs-library/)"})}),t.jsx(i,{children:t.jsx(a,{children:"[Synopsis](/dougs-library/#synopsis)"})}),t.jsx(i,{children:t.jsx(a,{children:"[Table of Contents](/dougs-library/#table-of-contents)"})})]})]}),t.jsxs(m,{children:[t.jsx(f,{children:"How this book is built"}),t.jsx(s,{children:t.jsx(a,{children:"[The Bars](/dougs-library/#the-bars)"})})]})]}),"Table"),ge=n(()=>t.jsxs(c,{children:[t.jsx(h,{children:"[The Shelves](/dougs-library/#the-shelves)"}),t.jsxs(m,{children:[t.jsx(f,{children:"What is here"}),t.jsxs(s,{children:["Three books are filed under this one. ",t.jsx(o,{children:"[Dougs Story](/dougs-story/)"})," is mine, and the one book here that is by its own subject. It is the place to begin from, and it begins with ",t.jsx(o,{children:"[starting over](/dougs-story/#starting-over)"}),". The design of this library is kept in ",t.jsx(o,{children:"[Dougs Design](/dougs-design/)"}),". The parts I build this library with are in ",t.jsx(o,{children:"[Dougs Reference Manual](/dougs-reference-manual/)"}),", each beside the chapter that says what it is."]}),t.jsx(s,{children:"Each of the three has a chapter here that represents it and carries its synopsis. In the table of contents the name leads to that chapter, and the small square after it leads to the book itself."})]})]}),"TheShelves1"),be=n(()=>t.jsxs(c,{children:[t.jsx(B,{children:"#e8590c"}),t.jsx(h,{children:"[Dougs Story](/dougs-library/#dougs-story)"}),t.jsxs(s,{children:["My own book, ",t.jsx(o,{children:"[Dougs Story](/dougs-story/)"}),", is the place to begin from."]}),t.jsx(k,{children:ne()})]}),"DougsStory2"),ue=n(()=>t.jsxs(c,{children:[t.jsx(B,{children:"#c24a78"}),t.jsx(h,{children:"[Dougs Design](/dougs-library/#dougs-design)"}),t.jsxs(s,{children:["The book ",t.jsx(o,{children:"[Dougs Design](/dougs-design/)"})," keeps the design of this library."]}),t.jsx(k,{children:se()})]}),"DougsDesign3"),$e=n(()=>t.jsxs(c,{children:[t.jsx(B,{children:"#7a4a8c"}),t.jsx(h,{children:"[Dougs Reference Manual](/dougs-library/#dougs-reference-manual)"}),t.jsxs(s,{children:["The book ",t.jsx(o,{children:"[Dougs Reference Manual](/dougs-reference-manual/)"})," holds the parts this library is built with."]}),t.jsx(k,{children:ae()})]}),"DougsReferenceManual4"),xe=n(()=>t.jsxs(c,{children:[t.jsx(h,{children:"[The Bars](/dougs-library/#the-bars)"}),t.jsxs(m,{children:[t.jsx(f,{children:"How this book is laid out"}),t.jsxs(s,{children:["This book is the way into every other, so it is laid out as a place to choose from. Across the top are two bars. The first is the library's: what this book is filed under, and me. The second is this book's: its cover, and ",t.jsx(o,{children:"[the switch](/dougs-reference-manual/#the-switch)"}),". Under the bars the table of contents is kept at the left. Beside it is one page: the synopsis and a shelf when no chapter is open, and otherwise the open chapter."]}),t.jsxs(s,{children:["The two bars are the arrangement said of the book. The design it follows is ",t.jsx(o,{children:"[the shelf](/dougs-design/#the-shelf)"})," under ",t.jsx(o,{children:"[the black and the sky](/dougs-design/#two-top-bars-black-then-sky)"}),"."]})]}),t.jsxs(m,{children:[t.jsx(f,{children:"What is on the shelf"}),t.jsx(s,{children:"The shelf holds the chapters that each represent a book. The class of this book finds them by what they are: a chapter that carries the synopsis of a book other than this one. Its specification says every chapter I add has a place."}),t.jsx(s,{children:"On the shelf such a chapter is drawn as its book: the title as a cover, and its words under it. The title leads to the book. Anywhere else a title refers to its own chapter. In this book, where the chapter carries another book's synopsis, it refers to that book. That link is a class of the framework's reference from a title to itself, registered on this book's class, so no chapter has to ask for it."}),t.jsx(s,{children:"The shelf is one view of those chapters, and the views I chose for this book are three: the shelf, the sources and the wall. A view is a thing said of the book, and only one is said at a time, because a view that is said takes the one said before it away. That is how the framework keeps a book to one theme, done here for views. The class says the shelf; the other two are not drawn yet."})]}),t.jsxs(m,{children:[t.jsx(f,{children:"How it is dressed"}),t.jsx(s,{children:"The theme is the library's, with this book's colors and its own parts: the two bars, the contents at the left, the front page and the covers. The cover and the table of contents are this book's own. Each is the framework's with a look, and the cover file and the table file take them from here."})]}),t.jsx(p,{identifier:"code",type:".tsx",children:`import { ReactNode } from 'react';
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
`}),t.jsx(p,{identifier:"booklink",type:".tsx",children:`import { $, inert } from '@dna-platform/chemistry';
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
`}),t.jsx(p,{identifier:"views",type:".tsx",children:`import { $, selection } from '@dna-platform/chemistry';
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
`}),t.jsx(p,{identifier:"faces",type:".tsx",children:`import { $, selection } from '@dna-platform/chemistry';
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
`}),t.jsx(p,{identifier:"theme",type:".tsx",children:`import { css, RuleSet } from 'styled-components';
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
        return [...super.parts(), this.front(), this.covers(), this.words(), this.small()];
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
`}),t.jsx(p,{identifier:"subjects",type:".tsx",children:`import { Means, Paragraph, Section } from '@dna-platform/public';

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
`})]}),"TheBarso1"),ke=r($),ze=n(()=>t.jsxs(ke,{children:[pe(),me(),fe(),ge(),be(),ue(),$e(),xe()]}),"book");export{ze as book};
