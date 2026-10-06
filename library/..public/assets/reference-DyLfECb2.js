var _=Object.defineProperty;var t=(p,e)=>_(p,"name",{value:e,configurable:!0});import{$ as h,a as H,b as N,i as E,c as F,A as V,d as q,e as G,s as J,f as K,g as Q,h as U,j as s,k as X,S as Y,T as Z,l as $,C as l,m as ee,n as d,o as se,p as te,q as ne,r as j,P as T,t as n,u as oe,v as u,H as g,w as r,W as c,M as i,x}from"./index-B6eU_VfC.js";import{O as ae,$ as ie,a as re,C as S,I as he,A as ce}from"./17-the-first~code-DY6OZakh.js";import{S as le}from"./.synopsis-BJDv0B3i.js";import{S as de}from"./.synopsis-CiuS4nwn.js";import{S as pe}from"./.synopsis-BiQ2TCfH.js";var fe=Object.defineProperty,me=t((p,e,o,m)=>{for(var a=void 0,f=p.length-1,b;f>=0;f--)(b=p[f])&&(a=b(e,o,a)||a);return a&&fe(e,o,a),a},"__decorateClass$1");const A=class A extends H{get identifier(){return this._book??super.identifier}$Bound(){super.$Bound(),this._book=this.chapter?.annotations.expressed(N)?.means?.identifier}};t(A,"$BookLink");let w=A;me([E()],w.prototype,"_book");const ue=h(w);var ge=Object.defineProperty,be=Object.getOwnPropertyDescriptor,xe=t((p,e,o,m)=>{for(var a=be(e,o),f=p.length-1,b;f>=0;f--)(b=p[f])&&(a=b(e,o,a)||a);return a&&ge(e,o,a),a},"__decorateClass");const B=class B extends F{constructor(){super(...arguments),this.specification=new y}defines(e){e.classes.add(this,"pa-caption")}erase(e){e.classes.revert(this)}};t(B,"$Caption");let C=B;const M=class M extends V{$saidOfAParagraph(e){q(e instanceof G,"a caption is said of a paragraph, and this is not one")}};t(M,"CaptionSpecification");let y=M;xe([Q("a caption is said of a paragraph")],y.prototype,"$saidOfAParagraph");const k=class k extends K{constructor(){super(...arguments),this.specification=new ae,this.themeProvider=!0}defines(e){for(const o of e.annotations.after(this))o instanceof k&&e.annotations.express(o,!1);super.defines(e)}erase(e){super.erase(e),e.classes.revert(this)}};t(k,"$View");let z=k;const O=class O extends z{constructor(){super(...arguments),this.style=J.div`
        .pd-book.pa-shelf .pd-shelf {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(124px, 148px));
            gap: calc(${({theme:e})=>e.space} * 0.83);
            align-items: start;
        }
        @media (max-width: ${({theme:e})=>e.narrow}) {
            .pd-book.pa-shelf .pd-shelf { grid-template-columns: repeat(3, minmax(0, 1fr)); gap: calc(${({theme:e})=>e.space} * 0.58) calc(${({theme:e})=>e.space} / 2); }
        }
    `}defines(e){super.defines(e),e.classes.add(this,"pa-shelf")}};t(O,"$Shelf");let D=O;const $e=h(D),R=h(C),L=class L extends ie{get books(){return this.text.find(U).filter(e=>e.is(N)&&e!==this.synopsis)}get placed(){return[...super.placed,...this.books]}get pages(){return[...this.chapters,...this.books]}head(){return s.jsx("div",{className:"pd-switches",children:this.switches()})}front(){return s.jsx("div",{className:"pd-leaf pd-front pd-open",children:this.opening()})}opening(){return s.jsxs(s.Fragment,{children:[super.opening(),s.jsx("div",{className:"pd-shelf",children:this.volumes()})]})}volumes(){return[this.cover,...this.books].map((e,o)=>{const m=h(e);return s.jsx("div",{className:e===this.open?"pd-volume pa-open":"pd-volume",children:s.jsx(m,{})},o)})}named(e){return super.named(e)??this.books.find(o=>this.placeOf(o)===e)}placeOf(e){const o=e.title?.annotations.expressed(X)?.identifier,m=this.means?.identifier;if(!(o===void 0||m===void 0))return`${m.replace(/\/+$/u,"")}/#${o}`}$Define(){super.$Define();const e=h($e);this.annotations.add(this,s.jsx(e,{}))}};t(L,"$Catalogue");let v=L;const W=h(v);h(W,Y)(ue);const I=class I extends re{constructor(){super(...arguments),this.ink="#10252c",this.soft="#516770",this.line="#dbe7ec",this.accent="#166178",this.tint="#e3f5fa",this.night="#0c1b1f",this.spine="inset 5px 0 0 rgba(0, 0, 0, 0.14), inset 6px 0 0 rgba(255, 255, 255, 0.12), 0 10px 20px -10px rgba(0, 0, 0, 0.45)"}parts(){return[...super.parts(),this.front(),this.covers(),this.words(),this.small()]}front(){return $`
            .pd-leaves { padding: calc(${({theme:e})=>e.space} * 0.83) calc(${({theme:e})=>e.space} * 1.17) calc(${({theme:e})=>e.space} * 1.67); }
            .pd-front .pd-words { margin-block-end: calc(${({theme:e})=>e.space} * 1.17); }
            .pd-front .pd-words .pd-chapter { margin-block: 0; }
            .pd-front .pd-words .pd-paragraph {
                margin-block: 0;
                max-width: 56ch;
                font-family: ${({theme:e})=>e.serif};
                font-size: calc(1.43 * ${({theme:e})=>e.size});
                font-weight: 400;
                line-height: 1.5;
            }
        `}covers(){return $`
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
                font-size: calc(1.07 * ${({theme:e})=>e.size});
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
                font-size: calc(0.93 * ${({theme:e})=>e.size});
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
                font-size: calc(1.29 * ${({theme:e})=>e.size});
                font-weight: 400;
                letter-spacing: 0;
                line-height: 1.5;
                text-transform: none;
                color: ${({theme:e})=>e.ink};
            }
        `}words(){return $`
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
        `}small(){return $`
            @media (max-width: ${({theme:e})=>e.narrow}) {
                .pd-holds {
                    border-inline-end: none;
                    border-block-end: thin solid ${({theme:e})=>e.line};
                }
                .pd-leaves { padding: calc(${({theme:e})=>e.space} * 0.67); }
            }
        `}};t(I,"$CatalogueTheme");let P=I;const we=h(P);h(W,Z)(we);const ye=t(()=>s.jsxs(l,{children:[s.jsx(ee,{}),s.jsx(S,{children:"#0c1b1f"}),s.jsx(d,{children:"[Dougs Library](/dougs-library/)"}),s.jsx(se,{children:"[Doug](/dougs-story/)"}),s.jsx(te,{children:"[Library](/dougs-library/)"}),s.jsx(ne,{children:"[The Library](/dougs-library/)"})]}),"Cover"),ve=t(()=>s.jsxs(l,{children:[s.jsx(j,{}),s.jsxs(d,{children:[s.jsx(T,{}),"[Synopsis](/dougs-library/)"]}),s.jsx(n,{children:"The catalogue of my library, filed under what it is about, which is itself. Everything I keep is filed under it, directly or through another book."})]}),"Synopsis"),ke=t(()=>s.jsxs(l,{children:[s.jsx(oe,{}),s.jsx(he,{}),s.jsxs(d,{children:[s.jsx(T,{}),"[Table of Contents](/dougs-library/#table-of-contents)"]}),s.jsxs(u,{children:[s.jsx(g,{children:"Contents"}),s.jsx(n,{children:s.jsx(r,{children:"[The Shelves](/dougs-library/#the-shelves)"})}),s.jsxs(n,{children:[s.jsx(c,{children:s.jsx(r,{children:"[Dougs Story](/dougs-library/#dougs-story)"})}),s.jsx(c,{children:s.jsx(r,{children:"[→](/dougs-story/)"})})]}),s.jsxs(n,{children:[s.jsx(c,{children:s.jsx(r,{children:"[Dougs Design](/dougs-library/#dougs-design)"})}),s.jsx(c,{children:s.jsx(r,{children:"[→](/dougs-design/)"})})]}),s.jsxs(n,{children:[s.jsx(c,{children:s.jsx(r,{children:"[Dougs Reference Manual](/dougs-library/#dougs-reference-manual)"})}),s.jsx(c,{children:s.jsx(r,{children:"[→](/dougs-reference-manual/)"})})]}),s.jsxs(n,{children:[s.jsx(T,{}),s.jsx(c,{children:s.jsx(r,{children:"[Dougs Library](/dougs-library/)"})}),s.jsx(c,{children:s.jsx(r,{children:"[Synopsis](/dougs-library/#synopsis)"})}),s.jsx(c,{children:s.jsx(r,{children:"[Table of Contents](/dougs-library/#table-of-contents)"})})]})]}),s.jsxs(u,{children:[s.jsx(ce,{}),s.jsx(g,{children:"How this book is built"}),s.jsx(n,{children:s.jsx(r,{children:"[The Catalogue](/dougs-library/#the-catalogue)"})})]})]}),"Table"),je=t(()=>s.jsxs(l,{children:[s.jsx(d,{children:"[The Shelves](/dougs-library/#the-shelves)"}),s.jsxs(u,{children:[s.jsx(g,{children:"What is here"}),s.jsxs(n,{children:["Three books are filed under this one. ",s.jsx(i,{children:"[Dougs Story](/dougs-story/)"})," is mine, and the one book here that is by its own subject. It is the place to begin from, and it begins with ",s.jsx(i,{children:"[starting over](/dougs-story/#starting-over)"}),". The design of this library is kept in ",s.jsx(i,{children:"[Dougs Design](/dougs-design/)"}),". The parts I build this library with are in ",s.jsx(i,{children:"[Dougs Reference Manual](/dougs-reference-manual/)"}),", each beside the chapter that says what it is."]}),s.jsx(n,{children:"Each of the three has a chapter here that represents it and carries its synopsis: its entry, drawn on the shelf as a cover with one line under it. In the contents the name opens the entry on this page, and the arrow after it leads to the book itself. And this catalogue is on its own shelf, first, because it is filed under what it is about, which is itself."})]})]}),"TheShelves1"),Se=t(()=>s.jsxs(l,{children:[s.jsx(S,{children:"#d9a05b"}),s.jsx(d,{children:"[Dougs Story](/dougs-library/#dougs-story)"}),s.jsxs(n,{children:[s.jsx(R,{}),"My own book, ",s.jsx(i,{children:"[Dougs Story](/dougs-story/)"}),", is the place to begin from."]}),s.jsx(j,{children:le()})]}),"DougsStory2"),Te=t(()=>s.jsxs(l,{children:[s.jsx(S,{children:"#3b6cf0"}),s.jsx(d,{children:"[Dougs Design](/dougs-library/#dougs-design)"}),s.jsxs(n,{children:[s.jsx(R,{}),"The book ",s.jsx(i,{children:"[Dougs Design](/dougs-design/)"})," keeps the design of this library."]}),s.jsx(j,{children:de()})]}),"DougsDesign3"),Ce=t(()=>s.jsxs(l,{children:[s.jsx(S,{children:"#4fb3a8"}),s.jsx(d,{children:"[Dougs Reference Manual](/dougs-library/#dougs-reference-manual)"}),s.jsxs(n,{children:[s.jsx(R,{}),"The book ",s.jsx(i,{children:"[Dougs Reference Manual](/dougs-reference-manual/)"})," holds the parts this library is built with."]}),s.jsx(j,{children:pe()})]}),"DougsReferenceManual4"),ze=t(()=>s.jsxs(l,{children:[s.jsx(d,{children:"[The Catalogue](/dougs-library/#the-catalogue)"}),s.jsxs(u,{children:[s.jsx(g,{children:"How this book is laid out"}),s.jsxs(n,{children:["This book is the way into every other, so it is laid out as a place to choose from. It stands in the frame every book of mine stands in, drawn by ",s.jsx(i,{children:"[the base book](/dougs-reference-manual/#the-book)"}),": the library's bar black across the top, with my three books as its subjects, each beside a dot in its colour and the open one lit by a line in that colour; this book's contents down the opal side bar; and the page beside. It has no head of its own, because its cover stands on its shelf. The page is always the synopsis and the shelf, and under the shelf the entry that is open, if one is. It wears the dark tone, the library's own, which is ",s.jsx(i,{children:"[the black top bar over the opal side bar](/dougs-design/#a-black-top-bar-and-an-opal-side-bar)"}),"."]}),s.jsxs(n,{children:["The design it follows is ",s.jsx(i,{children:"[the shelf](/dougs-design/#the-shelf)"})," inside that frame, explored again as ",s.jsx(i,{children:"[the library's page](/dougs-design/#the-librarys-page-in-the-frame-of-15)"}),": the covers at two by three in each book's colour, with the spine's lines and the rule across, six to a row at a desk and three on a phone, and one line under each. Beside this chapter the library's subjects are written once, as three references to the books, each saying its book's colour, and every book draws them in its bar."]})]}),s.jsxs(u,{children:[s.jsx(g,{children:"What is on the shelf"}),s.jsx(n,{children:"The first book on the shelf is this one. The catalogue is filed under what it is about, which is itself, so its own cover stands first, in the site's blue-black, and pressing it brings this page back: I was just reading about the thing I am on. That is the closure this library has, shown rather than avoided."}),s.jsxs(n,{children:["After it stand the chapters that each represent a book. The class of this book finds them by what they are: a chapter that carries the synopsis of a book other than this one. Its specification says every chapter I add has a place. On the shelf such a chapter is drawn as its book: the title as a cover, and under it one line, the sentence the entry says is ",s.jsx(i,{children:"[its caption](/dougs-library/#the-catalogue)"}),". The rest of the entry — the book's own synopsis — is read when the entry is open."]}),s.jsx(n,{children:"An entry opens from its row in the contents, which is marked with the book's colour, or from its cover. It opens in place: the volume spans the row under the shelf, the cover large, the caption over the synopsis, as a concept opens in the design book. The title leads to the book. Anywhere else a title refers to its own chapter; in this book, where the chapter carries another book's synopsis, it refers to that book, by a class of the framework's reference from a title to itself, registered on this book's class, so no chapter has to ask for it. The row's second word, an arrow, leads to the book too, and is the reference the library requires a catalogue's table to carry for every book filed under it."}),s.jsx(n,{children:"The shelf is one view of those chapters, and the views I chose for this book are three: the shelf, the sources and the wall. A view is a thing said of the book, and only one is said at a time, because a view that is said takes the one said before it away. That is how the framework keeps a book to one theme, done here for views. The class says the shelf; the other two are not drawn yet."})]}),s.jsxs(u,{children:[s.jsx(g,{children:"How it is dressed"}),s.jsxs(n,{children:["The theme is the base's with this book's scheme, which is the site's own — the sea as its colour, the deep blue as its accent, the opal as its side bar — and two parts of its own: the front, which sets the synopsis plain in the serif at the file's size, and the covers. Each entry says ",s.jsx(i,{children:"[its book's colour](/dougs-reference-manual/#the-colour)"}),", and the cover on the shelf, the dot in the contents and the dot in the library's bar are painted from that one saying. The cover and the table of contents are the framework's own, undressed; what they look like here is the base's."]})]}),s.jsx(x,{identifier:"code",type:".tsx",children:`import { ReactNode } from 'react';
import { $ } from '@dna-platform/chemistry';
import { $Chapter, $Referent, $Synopsis, Self } from '@dna-platform/public';
import { $LibraryBook } from '../.manual/.book';
import { BookLink } from './o1-the-catalogue~booklink.tsx';
import { Shelf as shelf } from './o1-the-catalogue~views.tsx';

export class $Catalogue extends $LibraryBook {
    get books(): $Chapter[] {
        return this.text.find($Chapter).filter(chapter => chapter.is($Synopsis) && chapter !== this.synopsis);
    }
    override get placed(): ($Chapter | undefined)[] {
        return [...super.placed, ...this.books];
    }
    override get pages(): $Chapter[] {
        return [...this.chapters, ...this.books];
    }

    override head(): ReactNode {
        return (
            <div className="pd-switches">
                {this.switches()}
            </div>
        );
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

export const Catalogue = $($Catalogue);
$(Catalogue, Self)(BookLink);
`}),s.jsx(x,{identifier:"booklink",type:".tsx",children:`import { $, inert } from '@dna-platform/chemistry';
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
`}),s.jsx(x,{identifier:"views",type:".tsx",children:`import { $, $check, selection } from '@dna-platform/chemistry';
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
            grid-template-columns: repeat(auto-fill, minmax(124px, 148px));
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
`}),s.jsx(x,{identifier:"theme",type:".tsx",children:`import { css, RuleSet } from 'styled-components';
import { $ } from '@dna-platform/chemistry';
import { Theme } from '@dna-platform/public';
import { $LibraryBookTheme } from '../.manual/.book';
import { Catalogue } from './o1-the-catalogue~code.tsx';

export class $CatalogueTheme extends $LibraryBookTheme {
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
                font-size: calc(1.43 * \${({ theme }) => theme.size});
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
                font-size: calc(1.07 * \${({ theme }) => theme.size});
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
                font-size: calc(0.93 * \${({ theme }) => theme.size});
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
                font-size: calc(1.29 * \${({ theme }) => theme.size});
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

export const CatalogueTheme = $($CatalogueTheme);
$(Catalogue, Theme)(CatalogueTheme);
`}),s.jsx(x,{identifier:"subjects",type:".tsx",children:`import { Means, Paragraph, Section } from '@dna-platform/public';
import { Coloured } from '../.manual/18-the-colour~code.tsx';

export const Logo = () => (
    <Paragraph>
        <Means>$[[ Dougs Library ]]</Means>
    </Paragraph>
);

export const Subjects = () => (
    <Section>
        <Paragraph>
            <Coloured>#d9a05b</Coloured>
            <Means>$[[ Dougs Story ]]</Means>
        </Paragraph>
        <Paragraph>
            <Coloured>#3b6cf0</Coloured>
            <Means>$[[ Dougs Design ]]</Means>
        </Paragraph>
        <Paragraph>
            <Coloured>#4fb3a8</Coloured>
            <Means>$[[ Dougs Reference Manual ]]</Means>
        </Paragraph>
    </Section>
);
`})]}),"TheCatalogueo1"),De=h(v),Le=t(()=>s.jsxs(De,{children:[ye(),ve(),ke(),je(),Se(),Te(),Ce(),ze()]}),"book");export{Le as book};
