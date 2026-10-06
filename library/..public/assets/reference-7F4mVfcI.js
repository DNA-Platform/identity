var q=Object.defineProperty;var t=(d,e)=>q(d,"name",{value:e,configurable:!0});import{$ as r,a as G,b as F,i as J,c as K,A as Q,d as U,e as X,s as B,f as Y,g as Z,h as ee,j as n,k as ne,S as te,T as se,l as x,m as ae,n as oe,C as l,o as p,p as re,q as ie,r as ce,t as j,P as T,u as s,v as u,H as b,w as i,W as h,M as c,x as g}from"./index-CYYNd2f5.js";import{O as he,$ as le,a as pe,C as S,I as de,A as me}from"./17-the-first~code-DTsussFK.js";import{S as fe}from"./.synopsis-CJrXQdbY.js";import{S as ge}from"./.synopsis-CtVnk3rE.js";import{S as ue}from"./.synopsis-CTjo7UU9.js";var be=Object.defineProperty,$e=t((d,e,a,f)=>{for(var o=void 0,m=d.length-1,$;m>=0;m--)($=d[m])&&(o=$(e,a,o)||o);return o&&be(e,a,o),o},"__decorateClass$1");const A=class A extends G{get identifier(){return this._book??super.identifier}$Bound(){super.$Bound(),this._book=this.chapter?.annotations.expressed(F)?.means?.identifier}};t(A,"$BookLink");let k=A;$e([J()],k.prototype,"_book");const xe=r(k);var ke=Object.defineProperty,ye=Object.getOwnPropertyDescriptor,ve=t((d,e,a,f)=>{for(var o=ye(e,a),m=d.length-1,$;m>=0;m--)($=d[m])&&(o=$(e,a,o)||o);return o&&ke(e,a,o),o},"__decorateClass");const M=class M extends K{constructor(){super(...arguments),this.specification=new y}defines(e){e.classes.add(this,"pa-caption")}erase(e){e.classes.revert(this)}};t(M,"$Caption");let z=M;const I=class I extends Q{$saidOfAParagraph(e){U(e instanceof X,"a caption is said of a paragraph, and this is not one")}};t(I,"CaptionSpecification");let y=I;ve([Z("a caption is said of a paragraph")],y.prototype,"$saidOfAParagraph");const w=class w extends Y{constructor(){super(...arguments),this.specification=new he,this.themeProvider=!0}defines(e){for(const a of e.annotations.after(this))a instanceof w&&e.annotations.express(a,!1);super.defines(e)}erase(e){super.erase(e),e.classes.revert(this)}};t(w,"$View");let C=w;const W=class W extends C{constructor(){super(...arguments),this.style=B.div`
        .pd-book.pa-shelf .pd-shelf {
            display: grid;
            grid-template-columns: repeat(6, minmax(0, 1fr));
            gap: calc(${({theme:e})=>e.space} * 0.83);
            align-items: start;
        }
        @media (max-width: ${({theme:e})=>e.narrow}) {
            .pd-book.pa-shelf .pd-shelf { grid-template-columns: repeat(3, minmax(0, 1fr)); gap: calc(${({theme:e})=>e.space} * 0.58) calc(${({theme:e})=>e.space} / 2); }
        }
    `}defines(e){super.defines(e),e.classes.add(this,"pa-shelf")}};t(W,"$Shelf");let D=W;const we=r(D),O=r(z),N=class N extends le{get books(){return this.text.find(ee).filter(e=>e.is(F)&&e!==this.synopsis)}get placed(){return[...super.placed,...this.books]}get pages(){return[...this.chapters,...this.books]}front(){return n.jsx("div",{className:"pd-leaf pd-front pd-open",children:this.opening()})}opening(){return n.jsxs(n.Fragment,{children:[super.opening(),n.jsx("div",{className:"pd-shelf",children:this.volumes()})]})}volumes(){return[this.cover,...this.books].map((e,a)=>{const f=r(e);return n.jsx("div",{className:e===this.open?"pd-volume pa-open":"pd-volume",children:n.jsx(f,{})},a)})}named(e){return super.named(e)??this.books.find(a=>this.placeOf(a)===e)}placeOf(e){const a=e.title?.annotations.expressed(ne)?.identifier,f=this.means?.identifier;if(!(a===void 0||f===void 0))return`${f.replace(/\/+$/u,"")}/#${a}`}$Define(){super.$Define();const e=r(we);this.annotations.add(this,n.jsx(e,{}))}};t(N,"$Library");let v=N;const V=r(v);r(V,te)(xe);const _=class _ extends pe{constructor(){super(...arguments),this.ink="#10252c",this.soft="#516770",this.line="#dbe7ec",this.accent="#166178",this.tint="#e3f5fa",this.night="#0c1b1f",this.spine="inset 5px 0 0 rgba(0, 0, 0, 0.14), inset 6px 0 0 rgba(255, 255, 255, 0.12), 0 10px 20px -10px rgba(0, 0, 0, 0.45)"}parts(){return[...super.parts(),this.front(),this.covers(),this.words(),this.small()]}front(){return x`
            .pd-leaves { padding: calc(${({theme:e})=>e.space} * 0.83) calc(${({theme:e})=>e.space} * 1.17) calc(${({theme:e})=>e.space} * 1.67); }
            .pd-front .pd-words { margin-block-end: calc(${({theme:e})=>e.space} * 1.17); }
            .pd-front .pd-words .pd-chapter { margin-block: 0; }
            .pd-front .pd-words .pd-paragraph {
                margin-block: 0;
                max-width: 56ch;
                font-family: ${({theme:e})=>e.serif};
                font-size: calc(1.38 * ${({theme:e})=>e.size});
                font-weight: 400;
                line-height: 1.5;
            }
        `}covers(){return x`
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
                background: linear-gradient(160deg, color-mix(in srgb, var(--colour, ${({theme:e})=>e.colour}) 90%, white), color-mix(in srgb, var(--colour, ${({theme:e})=>e.colour}) 86%, black));
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
                overflow: hidden;
                font-size: calc(0.9 * ${({theme:e})=>e.size});
                font-weight: 500;
                white-space: nowrap;
                text-overflow: ellipsis;
                color: ${({theme:e})=>e.ink};
            }
            .pd-volume .pd-paragraph:not(.pa-caption) { display: none; }
            .pd-book.pa-shelf .pd-volume.pa-open {
                grid-column: 1 / -1;
                order: 1;
                padding: calc(${({theme:e})=>e.space} * 0.92) ${({theme:e})=>e.space};
                border: thin solid ${({theme:e})=>e.line};
                border-radius: calc(${({theme:e})=>e.space} * 0.67);
            }
            .pd-volume.pa-open .pd-chapter {
                display: grid;
                grid-template-columns: ${({theme:e})=>e.volume} minmax(0, 1fr);
                grid-auto-rows: max-content;
                column-gap: calc(${({theme:e})=>e.space} * 1.08);
            }
            .pd-volume.pa-open .pd-chapter > a { grid-row: 1 / span 3; }
            .pd-book.pa-shelf .pd-volume.pa-open .pd-title {
                padding: calc(${({theme:e})=>e.space} * 0.75) calc(${({theme:e})=>e.space} * 0.58) calc(${({theme:e})=>e.space} / 2) ${({theme:e})=>e.space};
                font-size: calc(1.5 * ${({theme:e})=>e.size});
            }
            .pd-volume.pa-open .pd-paragraph {
                margin-block: 0 calc(${({theme:e})=>e.space} / 3);
                overflow: visible;
                font-size: calc(0.76 * ${({theme:e})=>e.size});
                font-weight: 600;
                letter-spacing: 0.1em;
                text-transform: uppercase;
                white-space: normal;
                color: ${({theme:e})=>e.soft};
            }
            .pd-volume.pa-open .pd-paragraph:not(.pa-caption) {
                display: block;
                margin-block: 0 calc(${({theme:e})=>e.space} / 2);
                max-width: 56ch;
                font-family: ${({theme:e})=>e.serif};
                font-size: calc(1.25 * ${({theme:e})=>e.size});
                font-weight: 400;
                letter-spacing: 0;
                line-height: 1.5;
                text-transform: none;
                color: ${({theme:e})=>e.ink};
            }
        `}words(){return x`
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
        `}small(){return x`
            @media (max-width: ${({theme:e})=>e.narrow}) {
                .pd-holds {
                    border-inline-end: none;
                    border-block-end: thin solid ${({theme:e})=>e.line};
                }
                .pd-leaves { padding: calc(${({theme:e})=>e.space} * 0.67); }
            }
        `}};t(_,"$LibraryTheme");let P=_;const je=r(P);r(V,se)(je);const H=class H extends ae{constructor(){super(...arguments),this.style=B.header`
        .pd-chapter.pa-cover { margin-block: 0; }
        .pa-cover .pd-title {
            font-family: ${({theme:e})=>e.serif};
            font-size: calc(1.8 * ${({theme:e})=>e.size});
            font-weight: 600;
            line-height: 1.04;
        }
    `}};t(H,"$LibraryCover");let L=H;const E=class E extends oe{constructor(){super(...arguments),this.style=B.nav`
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
    `}};t(E,"$LibraryTableOfContents");let R=E;const Se=r(L),Te=r(R),ze=t(()=>n.jsxs(l,{children:[n.jsx(Se,{}),n.jsx(S,{children:"#0c1b1f"}),n.jsx(p,{children:"[Dougs Library](/dougs-library/)"}),n.jsx(re,{children:"[The Librarian](/dougs-story/)"}),n.jsx(ie,{children:"[The Library](/dougs-library/)"}),n.jsx(ce,{children:"[The Library](/dougs-library/)"})]}),"Cover"),Ce=t(()=>n.jsxs(l,{children:[n.jsx(j,{}),n.jsxs(p,{children:[n.jsx(T,{}),"[Synopsis](/dougs-library/)"]}),n.jsx(s,{children:"The catalogue of my library, filed under what it is about, which is itself. Everything I keep is filed under it, directly or through another book."})]}),"Synopsis"),De=t(()=>n.jsxs(l,{children:[n.jsx(Te,{}),n.jsx(de,{}),n.jsxs(p,{children:[n.jsx(T,{}),"[Table of Contents](/dougs-library/#table-of-contents)"]}),n.jsxs(u,{children:[n.jsx(b,{children:"Contents"}),n.jsx(s,{children:n.jsx(i,{children:"[The Shelves](/dougs-library/#the-shelves)"})}),n.jsxs(s,{children:[n.jsx(h,{children:n.jsx(i,{children:"[Dougs Story](/dougs-library/#dougs-story)"})}),n.jsx(h,{children:n.jsx(i,{children:"[□](/dougs-story/)"})})]}),n.jsxs(s,{children:[n.jsx(h,{children:n.jsx(i,{children:"[Dougs Design](/dougs-library/#dougs-design)"})}),n.jsx(h,{children:n.jsx(i,{children:"[□](/dougs-design/)"})})]}),n.jsxs(s,{children:[n.jsx(h,{children:n.jsx(i,{children:"[Dougs Reference Manual](/dougs-library/#dougs-reference-manual)"})}),n.jsx(h,{children:n.jsx(i,{children:"[□](/dougs-reference-manual/)"})})]}),n.jsxs(s,{children:[n.jsx(T,{}),n.jsx(h,{children:n.jsx(i,{children:"[Dougs Library](/dougs-library/)"})}),n.jsx(h,{children:n.jsx(i,{children:"[Synopsis](/dougs-library/#synopsis)"})}),n.jsx(h,{children:n.jsx(i,{children:"[Table of Contents](/dougs-library/#table-of-contents)"})})]})]}),n.jsxs(u,{children:[n.jsx(me,{}),n.jsx(b,{children:"How this book is built"}),n.jsx(s,{children:n.jsx(i,{children:"[The Bars](/dougs-library/#the-bars)"})})]})]}),"Table"),Pe=t(()=>n.jsxs(l,{children:[n.jsx(p,{children:"[The Shelves](/dougs-library/#the-shelves)"}),n.jsxs(u,{children:[n.jsx(b,{children:"What is here"}),n.jsxs(s,{children:["Three books are filed under this one. ",n.jsx(c,{children:"[Dougs Story](/dougs-story/)"})," is mine, and the one book here that is by its own subject. It is the place to begin from, and it begins with ",n.jsx(c,{children:"[starting over](/dougs-story/#starting-over)"}),". The design of this library is kept in ",n.jsx(c,{children:"[Dougs Design](/dougs-design/)"}),". The parts I build this library with are in ",n.jsx(c,{children:"[Dougs Reference Manual](/dougs-reference-manual/)"}),", each beside the chapter that says what it is."]}),n.jsx(s,{children:"Each of the three has a chapter here that represents it and carries its synopsis. In the table of contents the name leads to that chapter, and the small square after it leads to the book itself."})]})]}),"TheShelves1"),Le=t(()=>n.jsxs(l,{children:[n.jsx(S,{children:"#d9a05b"}),n.jsx(p,{children:"[Dougs Story](/dougs-library/#dougs-story)"}),n.jsxs(s,{children:[n.jsx(O,{}),"My own book, ",n.jsx(c,{children:"[Dougs Story](/dougs-story/)"}),", is the place to begin from."]}),n.jsx(j,{children:fe()})]}),"DougsStory2"),Re=t(()=>n.jsxs(l,{children:[n.jsx(S,{children:"#d487a8"}),n.jsx(p,{children:"[Dougs Design](/dougs-library/#dougs-design)"}),n.jsxs(s,{children:[n.jsx(O,{}),"The book ",n.jsx(c,{children:"[Dougs Design](/dougs-design/)"})," keeps the design of this library."]}),n.jsx(j,{children:ge()})]}),"DougsDesign3"),Be=t(()=>n.jsxs(l,{children:[n.jsx(S,{children:"#4fb3a8"}),n.jsx(p,{children:"[Dougs Reference Manual](/dougs-library/#dougs-reference-manual)"}),n.jsxs(s,{children:[n.jsx(O,{}),"The book ",n.jsx(c,{children:"[Dougs Reference Manual](/dougs-reference-manual/)"})," holds the parts this library is built with."]}),n.jsx(j,{children:ue()})]}),"DougsReferenceManual4"),Oe=t(()=>n.jsxs(l,{children:[n.jsx(p,{children:"[The Bars](/dougs-library/#the-bars)"}),n.jsxs(u,{children:[n.jsx(b,{children:"How this book is laid out"}),n.jsxs(s,{children:["This book is the way into every other, so it is laid out as a place to choose from. It stands in the frame every book of mine stands in, drawn by ",n.jsx(c,{children:"[the base book](/dougs-reference-manual/#the-book)"}),": the library's bar across the top, with my three books as its subjects, this book's contents at the left, its name and ",n.jsx(c,{children:"[the switch](/dougs-reference-manual/#the-switch)"})," at the head, and beside them one page: the synopsis and a shelf when no chapter is open, and otherwise the open chapter. It wears the dark tone, the library's own."]}),n.jsxs(s,{children:["The design it follows is ",n.jsx(c,{children:"[the shelf](/dougs-design/#the-shelf)"})," inside the frame: the covers at two by three in each book's colour, with the spine's lines and the rule across, six to a row at a desk and three on a phone. Beside this chapter the library's subjects are written once, as three references to the books, and every book draws them in its bar."]})]}),n.jsxs(u,{children:[n.jsx(b,{children:"What is on the shelf"}),n.jsx(s,{children:"The shelf holds the chapters that each represent a book. The class of this book finds them by what they are: a chapter that carries the synopsis of a book other than this one. Its specification says every chapter I add has a place."}),n.jsx(s,{children:"On the shelf such a chapter is drawn as its book: the title as a cover, and its words under it. The title leads to the book. Anywhere else a title refers to its own chapter. In this book, where the chapter carries another book's synopsis, it refers to that book. That link is a class of the framework's reference from a title to itself, registered on this book's class, so no chapter has to ask for it."}),n.jsx(s,{children:"The shelf is one view of those chapters, and the views I chose for this book are three: the shelf, the sources and the wall. A view is a thing said of the book, and only one is said at a time, because a view that is said takes the one said before it away. That is how the framework keeps a book to one theme, done here for views. The class says the shelf; the other two are not drawn yet."})]}),n.jsxs(u,{children:[n.jsx(b,{children:"How it is dressed"}),n.jsxs(s,{children:["The theme is the library's, with this book's colours and its own parts: the front page and the covers. Each chapter that stands for a book says ",n.jsx(c,{children:"[the book's colour](/dougs-reference-manual/#the-colour)"}),", and the cover on the shelf is painted in it. The cover and the table of contents are this book's own, each the framework's with a look, and the cover file and the table file take them from here."]})]}),n.jsx(g,{identifier:"code",type:".tsx",children:`import { ReactNode } from 'react';
import { $ } from '@dna-platform/chemistry';
import { $Chapter, $Referent, $Synopsis, Self } from '@dna-platform/public';
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
    override get pages(): $Chapter[] {
        return [...this.chapters, ...this.books];
    }

    override front(): ReactNode {
        return (
            <div className="pd-leaf pd-front pd-open">
                {this.opening()}
            </div>
        );
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
        return [this.cover!, ...this.books].map((volume, index) => {
            const Volume = $(volume);
            return (
                <div
                    key={index}
                    className={volume === this.open ? 'pd-volume pa-open' : 'pd-volume'}
                >
                    <Volume />
                </div>
            );
        });
    }

    override named(place: string): $Chapter | undefined {
        return super.named(place) ?? this.books.find(book => this.placeOf(book) === place);
    }

    placeOf(entry: $Chapter): string | undefined {
        const slug = entry.title?.annotations.expressed($Referent)?.identifier;
        const address = this.means?.identifier;
        if (slug === undefined || address === undefined) return undefined;
        return \`\${address.replace(/\\/+$/u, '')}/#\${slug}\`;
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
`}),n.jsx(g,{identifier:"booklink",type:".tsx",children:`import { $, inert } from '@dna-platform/chemistry';
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
`}),n.jsx(g,{identifier:"views",type:".tsx",children:`import { $, $check, selection } from '@dna-platform/chemistry';
import { $Annotation, $Format, $Paragraph, $Writing, AnnotationSpecification, specify } from '@dna-platform/public';
import { OfABookSpecification } from '../.manual/.book';

export class $Caption extends $Annotation {
    specification = new CaptionSpecification();

    override defines(writing: $Writing): void {
        writing.classes.add(this, 'pa-caption');
    }

    override erase(writing: $Writing): void {
        writing.classes.revert(this);
    }
}

export class CaptionSpecification extends AnnotationSpecification {
    @specify('a caption is said of a paragraph')
    $saidOfAParagraph(writing: $Writing): void {
        $check(writing instanceof $Paragraph, 'a caption is said of a paragraph, and this is not one');
    }
}

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
export const Caption = $($Caption);
`}),n.jsx(g,{identifier:"faces",type:".tsx",children:`import { $, selection } from '@dna-platform/chemistry';
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
`}),n.jsx(g,{identifier:"theme",type:".tsx",children:`import { css, RuleSet } from 'styled-components';
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
            .pd-front .pd-words { margin-block-end: calc(\${({ theme }) => theme.space} * 1.17); }
            .pd-front .pd-words .pd-chapter { margin-block: 0; }
            .pd-front .pd-words .pd-paragraph {
                margin-block: 0;
                max-width: 56ch;
                font-family: \${({ theme }) => theme.serif};
                font-size: calc(1.38 * \${({ theme }) => theme.size});
                font-weight: 400;
                line-height: 1.5;
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
                background: linear-gradient(160deg, color-mix(in srgb, var(--colour, \${({ theme }) => theme.colour}) 90%, white), color-mix(in srgb, var(--colour, \${({ theme }) => theme.colour}) 86%, black));
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
                overflow: hidden;
                font-size: calc(0.9 * \${({ theme }) => theme.size});
                font-weight: 500;
                white-space: nowrap;
                text-overflow: ellipsis;
                color: \${({ theme }) => theme.ink};
            }
            .pd-volume .pd-paragraph:not(.pa-caption) { display: none; }
            .pd-book.pa-shelf .pd-volume.pa-open {
                grid-column: 1 / -1;
                order: 1;
                padding: calc(\${({ theme }) => theme.space} * 0.92) \${({ theme }) => theme.space};
                border: thin solid \${({ theme }) => theme.line};
                border-radius: calc(\${({ theme }) => theme.space} * 0.67);
            }
            .pd-volume.pa-open .pd-chapter {
                display: grid;
                grid-template-columns: \${({ theme }) => theme.volume} minmax(0, 1fr);
                grid-auto-rows: max-content;
                column-gap: calc(\${({ theme }) => theme.space} * 1.08);
            }
            .pd-volume.pa-open .pd-chapter > a { grid-row: 1 / span 3; }
            .pd-book.pa-shelf .pd-volume.pa-open .pd-title {
                padding: calc(\${({ theme }) => theme.space} * 0.75) calc(\${({ theme }) => theme.space} * 0.58) calc(\${({ theme }) => theme.space} / 2) \${({ theme }) => theme.space};
                font-size: calc(1.5 * \${({ theme }) => theme.size});
            }
            .pd-volume.pa-open .pd-paragraph {
                margin-block: 0 calc(\${({ theme }) => theme.space} / 3);
                overflow: visible;
                font-size: calc(0.76 * \${({ theme }) => theme.size});
                font-weight: 600;
                letter-spacing: 0.1em;
                text-transform: uppercase;
                white-space: normal;
                color: \${({ theme }) => theme.soft};
            }
            .pd-volume.pa-open .pd-paragraph:not(.pa-caption) {
                display: block;
                margin-block: 0 calc(\${({ theme }) => theme.space} / 2);
                max-width: 56ch;
                font-family: \${({ theme }) => theme.serif};
                font-size: calc(1.25 * \${({ theme }) => theme.size});
                font-weight: 400;
                letter-spacing: 0;
                line-height: 1.5;
                text-transform: none;
                color: \${({ theme }) => theme.ink};
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
`}),n.jsx(g,{identifier:"subjects",type:".tsx",children:`import { Means, Paragraph, Section } from '@dna-platform/public';
import { Coloured } from '../.manual/18-the-colour~code.tsx';

export const Subjects = () => (
    <Section>
        <Paragraph>
            <Coloured>#d9a05b</Coloured>
            <Means>$[[ Dougs Story ]]</Means>
        </Paragraph>
        <Paragraph>
            <Coloured>#d487a8</Coloured>
            <Means>$[[ Dougs Design ]]</Means>
        </Paragraph>
        <Paragraph>
            <Coloured>#4fb3a8</Coloured>
            <Means>$[[ Dougs Reference Manual ]]</Means>
        </Paragraph>
    </Section>
);
`})]}),"TheBarso1"),Ae=r(v),Ee=t(()=>n.jsxs(Ae,{children:[ze(),Ce(),De(),Pe(),Le(),Re(),Be(),Oe()]}),"book");export{Ee as book};
