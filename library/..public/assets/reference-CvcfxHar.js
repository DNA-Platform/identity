var Q=Object.defineProperty;var d=(f,s)=>Q(f,"name",{value:s,configurable:!0});import{$ as t,a as X,b as F,i as Y,c as T,A as U,d as q,e as Z,f as ee,g as se,s as G,h as ie,j as e,W as c,R as b,k as te,l as re,m as ne,S as oe,T as ae,C as u,n as v,o as de,p as he,q as ce,P as o,r as le,t as w,u as N,M as h,v as pe,w as g,H as x,x as l,y as m}from"./index-CRie5WHf.js";import{O as fe,$ as ue,M as H,S as J,L as ve,J as ge,a as xe,b as V,B as be,T as me,c as je,d as ye,e as ke,W as $e,I as we,f as Se,A as Ne,V as O}from"./20-the-bookshelf~theme-B5ue5U8h.js";import{C as Ce,S as Re}from"./.synopsis-Bomkk6RA.js";import{C as Me,S as Te}from"./.synopsis-5AEVLVQY.js";import{C as Oe,S as We}from"./.synopsis-BqlmVudg.js";var Ae=Object.defineProperty,De=d((f,s,i,a)=>{for(var r=void 0,n=f.length-1,p;n>=0;n--)(p=f[n])&&(r=p(s,i,r)||r);return r&&Ae(s,i,r),r},"__decorateClass$1");const D=class D extends X{get identifier(){return this._book??super.identifier}$Bound(){super.$Bound(),this._book=this.chapter?.annotations.expressed(F)?.means?.identifier}};d(D,"$BookLink");let j=D;De([Y()],j.prototype,"_book");const Pe=t(j);var Be=Object.defineProperty,ze=Object.getOwnPropertyDescriptor,K=d((f,s,i,a)=>{for(var r=ze(s,i),n=f.length-1,p;n>=0;n--)(p=f[n])&&(r=p(s,i,r)||r);return r&&Be(s,i,r),r},"__decorateClass");const P=class P extends T{constructor(){super(...arguments),this.specification=new y}defines(s){s.classes.add(this,"pa-caption")}erase(s){s.classes.revert(this)}};d(P,"$Caption");let C=P;const B=class B extends T{constructor(){super(...arguments),this.specification=new k}defines(s){s.classes.add(this,"pa-arrow")}erase(s){s.classes.revert(this)}};d(B,"$Arrow");let R=B;const z=class z extends T{constructor(){super(...arguments),this.specification=new fe}defines(s){s.classes.add(this,"pa-unfolded")}erase(s){s.classes.revert(this)}};d(z,"$Unfolded");let M=z;const I=class I extends U{$saidOfAParagraph(s){q(s instanceof se,"a caption is said of a paragraph, and this is not one")}};d(I,"CaptionSpecification");let y=I;K([G("a caption is said of a paragraph")],y.prototype,"$saidOfAParagraph");const L=class L extends U{$saidOfAWord(s){q(s instanceof Z&&s.chapter?.is(ee)===!0,"an arrow is said of a word of a table of contents, and this is not one")}};d(L,"ArrowSpecification");let k=L;K([G("an arrow is said of a word of a table of contents")],k.prototype,"$saidOfAWord");const W=t(C),S=t(R),E=t(M),_=class _ extends ue{get books(){return this.text.find(ie).filter(s=>s.is(F)&&s!==this.synopsis)}get placed(){return[...super.placed,...this.books]}get pages(){return[...this.books,...super.pages]}write(){return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"pd-library",children:this.library()}),e.jsx("div",{className:"pd-me",children:this.byline()}),e.jsx("div",{className:"pd-holds",children:this.holds()}),e.jsx("div",{className:"pd-head",children:this.head()}),e.jsxs("div",{className:"pd-leaves",children:[this.front(),this.leaves(),e.jsx("div",{className:"pd-shelf",children:this.volumes()})]})]})}library(){const s=t(H);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"pd-filed",children:[e.jsx(s,{cover:this.coverOf(this.subject?.means?.identifier)}),this.filed()]}),e.jsxs("div",{className:"pd-logo",children:[e.jsx(s,{cover:this.cover}),this.logo()]})]})}logo(){const s=t(c),i=t(b);return e.jsx("div",{className:"pd-paragraph",children:e.jsxs(s,{children:[e.jsx(i,{children:this.means.identifier}),this.title.name]})})}byline(){const s=t(H),i=this.coverOf(this.author?.means?.identifier);return e.jsxs(e.Fragment,{children:[super.byline(),i===void 0?void 0:e.jsx(s,{cover:i})]})}head(){return e.jsx("div",{className:"pd-switches",children:this.switches()})}front(){const s=t(J);return this.painted(this.cover,e.jsxs("div",{className:this.open===void 0?"pd-leaf pd-front pd-open":"pd-leaf pd-front",children:[this.jacket(this.cover),this.opening(),this.reading(this.cover),e.jsx(s,{chapter:this.cover,of:E,children:"read on"})]}))}opening(){const s=t(this.title),i=t(this.synopsis);return e.jsxs("div",{className:"pd-words",children:[this.shelved(this.cover),e.jsx(s,{}),this.line(this.cover),e.jsx(i,{})]})}line(s){if(s===void 0)return;const i=t(c),a=t(ve),r=t(b),n=s.annotations.expressed(te),p=s.annotations.expressed(re);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"pd-paragraph pd-byline",children:[e.jsxs(i,{children:[e.jsx(a,{}),"by"]}),e.jsxs(i,{children:[e.jsx(r,{children:n.means.identifier}),n.name]})]}),e.jsxs("div",{className:"pd-paragraph pd-filed-under",children:[e.jsxs(i,{children:[e.jsx(a,{}),"filed under"]}),e.jsxs(i,{children:[e.jsx(r,{children:p.means.identifier}),p.name]})]})]})}leaves(){const s=t(J);return[...this.books,...this.chapters].map((i,a)=>{const r=t(i),n=this.jacketOf(i);return this.painted(n,e.jsxs("div",{className:i===this.open?"pd-leaf pd-open":"pd-leaf",children:[this.jacket(n),e.jsxs("div",{className:"pd-words",children:[this.shelved(n),e.jsx(r,{}),this.line(n)]}),this.reading(n),n===void 0?void 0:e.jsx(s,{chapter:i,of:E,children:"read on"}),e.jsx("div",{className:"pd-files",children:this.listings(i)})]},a),a)})}volumes(){const s=t(c),i=t(b);return[this.cover,...this.books].map((a,r)=>{const n=this.jacketOf(a);return e.jsxs("div",{className:"pd-volume",children:[this.jacket(n),e.jsx("div",{className:"pd-paragraph pd-name",children:e.jsxs(s,{children:[e.jsx(i,{children:a===this.cover?this.means.identifier:this.placeOf(a)}),n.title.name]})})]},r)})}jacket(s){if(s===void 0)return;const i=t(ge);return e.jsx(i,{cover:s})}shelved(s){if(s!==void 0)return e.jsx("div",{className:"pd-paragraph pd-shelved",children:s===this.cover?"filed under itself":"filed here"})}reading(s){if(s===void 0)return;const i=t(c),a=t(b),r=s.mention.identifier;return e.jsx("div",{className:"pd-paragraph pd-read",children:e.jsxs(i,{children:[e.jsx(a,{children:r}),s===this.cover?"This is the catalogue":`Read ${s.title.name}`," →"]})})}painted(s,i,a){const r=s?.annotations.expressed(xe)?.painted;return r===void 0?i:e.jsx(r,{children:i},a)}jacketOf(s){return s.annotations.expressed(V)?.cover??(this.appendix.includes(s)?void 0:this.cover)}coverOf(s){return super.coverOf(s)??this.books.map(i=>i.annotations.expressed(V)?.cover).find(i=>i!==void 0&&i.mention?.identifier===s)}named(s){return super.named(s)??this.books.find(i=>this.placeOf(i)===s)}placeOf(s){const i=s.title?.annotations.expressed(ne)?.identifier,a=this.means?.identifier;if(!(i===void 0||a===void 0))return`${a.replace(/\/+$/u,"")}/#${i}`}};d(_,"$Catalogue");let $=_;const A=t($);t(A,oe)(Pe);t(A,ae)(be);t(A,me)(je);const Ie=d(()=>e.jsxs(u,{children:[e.jsx(ye,{}),e.jsx(ke,{ground:"#eef5f6",band:"#c3e3e6",bandInk:"#1c565c",foot:"#8db9bd",footInk:"#153e43",ink:"#1f5a60"}),e.jsx($e,{x:"-46",y:"-13"}),e.jsx(v,{children:"[Dougs Library](/dougs-library/)"}),e.jsx(de,{children:"[Doug](/dougs-story/)"}),e.jsx(he,{children:"[Library](/dougs-library/)"}),e.jsx(ce,{children:"[The Library](/dougs-library/)"}),e.jsxs(o,{children:[e.jsx(we,{}),e.jsx(le,{children:`<svg viewBox="0 0 64 64" class="pd-illustration"><path class="light" d="M9 7h46v50H9z"/><path d="M9 7h46v50H9zM9 24h46M9 41h46"/><path class="fill" d="M13 11h5v13h-5zM20 9h4v15h-4zM26 13h6v11h-6zM34 10h4v14h-4zM40 14h6v10h-6z"/><path d="M48 24l4-12 3 1-4 11z"/><path class="fill" d="M13 28h4v13h-4zM19 30h7v11h-7zM28 27h4v14h-4zM34 31h5v10h-5zM41 28h6v13h-6zM49 29h3v12h-3z"/><path class="fill" d="M13 46h6v11h-6zM21 44h4v13h-4zM27 47h8v10h-8zM37 45h4v12h-4zM43 48h6v9h-6z"/><path d="M50 57l3-11 3 1-3 10z"/></svg>
`})]})]}),"Cover"),Le=d(()=>e.jsxs(u,{children:[e.jsx(w,{}),e.jsxs(v,{children:[e.jsx(N,{}),"[Synopsis](/dougs-library/)"]}),e.jsx(o,{children:"The catalogue of my library, filed under what it is about, which is itself. Everything I keep is filed under it, directly or through another book."}),e.jsxs(o,{children:["Three books are filed under this one. ",e.jsx(h,{children:"[Dougs Story](/dougs-story/)"})," is mine, and the one book here that is by its own subject. It is the place to begin from, and it begins with ",e.jsx(h,{children:"[starting over](/dougs-story/#starting-over)"}),". The design of this library is kept in ",e.jsx(h,{children:"[Dougs Design](/dougs-design/)"}),". The parts I build this library with are in ",e.jsx(h,{children:"[Dougs Reference Manual](/dougs-reference-manual/)"}),", each beside the chapter that says what it is."]}),e.jsx(o,{children:"Each of the three has a chapter here that stands for it and holds its cover and its synopsis: its entry, drawn on the shelf as its jacket with its name under it. In the contents the name opens the entry on the desk above the shelf, and the triangle after it leads to the book itself. And this catalogue is on its own shelf, first, because it is filed under what it is about, which is itself."})]}),"Synopsis"),_e=d(()=>e.jsxs(u,{children:[e.jsx(pe,{}),e.jsx(Se,{}),e.jsxs(v,{children:[e.jsx(N,{}),"[Table of Contents](/dougs-library/#table-of-contents)"]}),e.jsxs(g,{children:[e.jsx(x,{children:"Contents"}),e.jsx(o,{children:e.jsx(l,{children:"[Dougs Library](/dougs-library/)"})}),e.jsxs(o,{children:[e.jsx(c,{children:e.jsx(l,{children:"[Dougs Story](/dougs-library/#dougs-story)"})}),e.jsxs(c,{children:[e.jsx(S,{}),e.jsx(l,{children:"[▷](/dougs-story/)"})]})]}),e.jsxs(o,{children:[e.jsx(c,{children:e.jsx(l,{children:"[Dougs Design](/dougs-library/#dougs-design)"})}),e.jsxs(c,{children:[e.jsx(S,{}),e.jsx(l,{children:"[▷](/dougs-design/)"})]})]}),e.jsxs(o,{children:[e.jsx(c,{children:e.jsx(l,{children:"[Dougs Reference Manual](/dougs-library/#dougs-reference-manual)"})}),e.jsxs(c,{children:[e.jsx(S,{}),e.jsx(l,{children:"[▷](/dougs-reference-manual/)"})]})]}),e.jsxs(o,{children:[e.jsx(N,{}),e.jsx(c,{children:e.jsx(l,{children:"[Synopsis](/dougs-library/#synopsis)"})}),e.jsx(c,{children:e.jsx(l,{children:"[Table of Contents](/dougs-library/#table-of-contents)"})})]})]}),e.jsxs(g,{children:[e.jsx(Ne,{}),e.jsx(x,{children:"How this book is built"}),e.jsx(o,{children:e.jsx(l,{children:"[The Catalogue](/dougs-library/#the-catalogue)"})})]})]}),"Table"),He=d(()=>e.jsxs(u,{children:[e.jsx(O,{children:Ce()}),e.jsx(v,{children:"[Dougs Story](/dougs-library/#dougs-story)"}),e.jsxs(o,{children:[e.jsx(W,{}),"My own book, ",e.jsx(h,{children:"[Dougs Story](/dougs-story/)"}),", is the place to begin from."]}),e.jsx(w,{children:Re()})]}),"DougsStory2"),Je=d(()=>e.jsxs(u,{children:[e.jsx(O,{children:Me()}),e.jsx(v,{children:"[Dougs Design](/dougs-library/#dougs-design)"}),e.jsxs(o,{children:[e.jsx(W,{}),"The book ",e.jsx(h,{children:"[Dougs Design](/dougs-design/)"})," keeps the design of this library."]}),e.jsx(w,{children:Te()})]}),"DougsDesign3"),Ve=d(()=>e.jsxs(u,{children:[e.jsx(O,{children:Oe()}),e.jsx(v,{children:"[Dougs Reference Manual](/dougs-library/#dougs-reference-manual)"}),e.jsxs(o,{children:[e.jsx(W,{}),"The book ",e.jsx(h,{children:"[Dougs Reference Manual](/dougs-reference-manual/)"})," holds the parts this library is built with."]}),e.jsx(w,{children:We()})]}),"DougsReferenceManual4"),Ee=d(()=>e.jsxs(u,{children:[e.jsx(v,{children:"[The Catalogue](/dougs-library/#the-catalogue)"}),e.jsxs(g,{children:[e.jsx(x,{children:"How this book is laid out"}),e.jsxs(o,{children:["This book is the way into every other, so it is laid out as a place to choose from. It stands in the frame every book of mine stands in, drawn by ",e.jsx(h,{children:"[the base book](/dougs-reference-manual/#the-book)"}),": the library's bar black across the top, with my three books as its subjects, each beside a dot in its colour and the open one lit by a line in that colour; this book's contents down the opal side bar; and the page beside. It has no head of its own, because its cover stands on its shelf. The page is always the synopsis and the shelf, and under the shelf the entry that is open, if one is. It wears the dark tone, the library's own, which is ",e.jsx(h,{children:"[the black top bar over the opal side bar](/dougs-design/#a-black-top-bar-and-an-opal-side-bar)"}),"."]}),e.jsxs(o,{children:["The design it follows is ",e.jsx(h,{children:"[the shelf](/dougs-design/#the-shelf)"})," inside that frame, explored again as ",e.jsx(h,{children:"[the library's page](/dougs-design/#the-librarys-page-in-the-frame-of-15)"}),": the covers at two by three in each book's colour, with the spine's lines and the rule across, six to a row at a desk and three on a phone, and one line under each. Beside this chapter the library's subjects are written once, as three references to the books, each saying its book's colour, and every book draws them in its bar."]})]}),e.jsxs(g,{children:[e.jsx(x,{children:"What is on the shelf"}),e.jsx(o,{children:"The first book on the shelf is this one. The catalogue is filed under what it is about, which is itself, so its own cover stands first, in the site's blue-black, and pressing it brings this page back: I was just reading about the thing I am on. That is the closure this library has, shown rather than avoided."}),e.jsxs(o,{children:["After it stand the chapters that each represent a book. The class of this book finds them by what they are: a chapter that carries the synopsis of a book other than this one. Its specification says every chapter I add has a place. On the shelf such a chapter is drawn as its book: the title as a cover, and under it one line, the sentence the entry says is ",e.jsx(h,{children:"[its caption](/dougs-library/#the-catalogue)"}),". The rest of the entry — the book's own synopsis — is read when the entry is open."]}),e.jsx(o,{children:"An entry opens from its row in the contents, which is marked with the book's colour, or from its cover. It opens in place: the volume spans the row under the shelf, the cover large, the caption over the synopsis, as a concept opens in the design book. The title leads to the book. Anywhere else a title refers to its own chapter; in this book, where the chapter carries another book's synopsis, it refers to that book, by a class of the framework's reference from a title to itself, registered on this book's class, so no chapter has to ask for it. The row's second word, an arrow, leads to the book too, and is the reference the library requires a catalogue's table to carry for every book filed under it."}),e.jsx(o,{children:"The shelf is one view of those chapters, and the views I chose for this book are three: the shelf, the sources and the wall. A view is a thing said of the book, and only one is said at a time, because a view that is said takes the one said before it away. That is how the framework keeps a book to one theme, done here for views. The class says the shelf; the other two are not drawn yet."})]}),e.jsxs(g,{children:[e.jsx(x,{children:"How it is dressed"}),e.jsxs(o,{children:["The theme is the base's with this book's scheme, which is the site's own — the sea as its colour, the deep blue as its accent, the opal as its side bar — and two parts of its own: the front, which sets the synopsis plain in the serif at the file's size, and the covers. Each entry says ",e.jsx(h,{children:"[its book's colour](/dougs-reference-manual/#the-colour)"}),", and the cover on the shelf, the dot in the contents and the dot in the library's bar are painted from that one saying. The cover and the table of contents are the framework's own, undressed; what they look like here is the base's."]})]}),e.jsx(m,{identifier:"code",type:".tsx",children:`import { ReactNode } from 'react';
import { $ } from '@dna-platform/chemistry';
import { $Author, $Chapter, $Referent, $Subject, $Synopsis, Reference as reference, Self, Theme, Word as word } from '@dna-platform/public';
import { $LibraryBook, $Scheme, $Volume, Bookshelf, Jacket as jacket, Label as label, Light as light, Mark as mark, Switch as switchOf, Tone as tone } from '../.manual/.book';
import { BookLink } from './o1-the-catalogue~booklink.tsx';
import { Unfolded as unfolded } from './o1-the-catalogue~said.tsx';

export class $Catalogue extends $LibraryBook {
    get books(): $Chapter[] {
        return this.text.find($Chapter).filter(chapter => chapter.is($Synopsis) && chapter !== this.synopsis);
    }
    override get placed(): ($Chapter | undefined)[] {
        return [...super.placed, ...this.books];
    }
    override get pages(): $Chapter[] {
        return [...this.books, ...super.pages];
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
                    <div className="pd-shelf">
                        {this.volumes()}
                    </div>
                </div>
            </>
        );
    }

    override library(): ReactNode {
        const Mark = $(mark);
        return (
            <>
                <div className="pd-filed">
                    <Mark cover={this.coverOf(this.subject?.means?.identifier)} />
                    {this.filed()}
                </div>
                <div className="pd-logo">
                    <Mark cover={this.cover} />
                    {this.logo()}
                </div>
            </>
        );
    }

    override logo(): ReactNode {
        const Word = $(word);
        const Reference = $(reference);
        return (
            <div className="pd-paragraph">
                <Word>
                    <Reference>{this.means!.identifier}</Reference>
                    {this.title!.name}
                </Word>
            </div>
        );
    }

    override byline(): ReactNode {
        const Mark = $(mark);
        const cover = this.coverOf(this.author?.means?.identifier);
        return (
            <>
                {super.byline()}
                {cover === undefined ? undefined : <Mark cover={cover} />}
            </>
        );
    }

    override head(): ReactNode {
        return (
            <div className="pd-switches">
                {this.switches()}
            </div>
        );
    }

    override front(): ReactNode {
        const Switch = $(switchOf);
        return this.painted(this.cover, (
            <div className={this.open === undefined ? 'pd-leaf pd-front pd-open' : 'pd-leaf pd-front'}>
                {this.jacket(this.cover)}
                {this.opening()}
                {this.reading(this.cover)}
                <Switch
                    chapter={this.cover}
                    of={unfolded}
                >
                    read on
                </Switch>
            </div>
        ));
    }

    override opening(): ReactNode {
        const Title = $(this.title!);
        const Synopsis = $(this.synopsis!);
        return (
            <div className="pd-words">
                {this.shelved(this.cover)}
                <Title />
                {this.line(this.cover)}
                <Synopsis />
            </div>
        );
    }

    line(cover: $Chapter | undefined): ReactNode {
        if (cover === undefined) return undefined;
        const Word = $(word);
        const Said = $(label);
        const Reference = $(reference);
        const author = cover.annotations.expressed($Author);
        const subject = cover.annotations.expressed($Subject);
        return (
            <>
                <div className="pd-paragraph pd-byline">
                    <Word>
                        <Said />
                        by
                    </Word>
                    <Word>
                        <Reference>{author!.means!.identifier}</Reference>
                        {author!.name}
                    </Word>
                </div>
                <div className="pd-paragraph pd-filed-under">
                    <Word>
                        <Said />
                        filed under
                    </Word>
                    <Word>
                        <Reference>{subject!.means!.identifier}</Reference>
                        {subject!.name}
                    </Word>
                </div>
            </>
        );
    }

    override leaves(): ReactNode {
        const Switch = $(switchOf);
        return [...this.books, ...this.chapters].map((chapter, index) => {
            const Chapter = $(chapter);
            const cover = this.jacketOf(chapter);
            return this.painted(cover, (
                <div
                    key={index}
                    className={chapter === this.open ? 'pd-leaf pd-open' : 'pd-leaf'}
                >
                    {this.jacket(cover)}
                    <div className="pd-words">
                        {this.shelved(cover)}
                        <Chapter />
                        {this.line(cover)}
                    </div>
                    {this.reading(cover)}
                    {cover === undefined ? undefined : (
                        <Switch
                            chapter={chapter}
                            of={unfolded}
                        >
                            read on
                        </Switch>
                    )}
                    <div className="pd-files">
                        {this.listings(chapter)}
                    </div>
                </div>
            ), index);
        });
    }

    volumes(): ReactNode {
        const Word = $(word);
        const Reference = $(reference);
        return [this.cover!, ...this.books].map((chapter, index) => {
            const cover = this.jacketOf(chapter)!;
            return (
                <div
                    key={index}
                    className="pd-volume"
                >
                    {this.jacket(cover)}
                    <div className="pd-paragraph pd-name">
                        <Word>
                            <Reference>{chapter === this.cover ? this.means!.identifier : this.placeOf(chapter)}</Reference>
                            {cover.title!.name}
                        </Word>
                    </div>
                </div>
            );
        });
    }

    jacket(cover: $Chapter | undefined): ReactNode {
        if (cover === undefined) return undefined;
        const Jacket = $(jacket);
        return (
            <Jacket cover={cover} />
        );
    }

    shelved(cover: $Chapter | undefined): ReactNode {
        if (cover === undefined) return undefined;
        return (
            <div className="pd-paragraph pd-shelved">
                {cover === this.cover ? 'filed under itself' : 'filed here'}
            </div>
        );
    }

    reading(cover: $Chapter | undefined): ReactNode {
        if (cover === undefined) return undefined;
        const Word = $(word);
        const Reference = $(reference);
        const address = cover.mention!.identifier;
        return (
            <div className="pd-paragraph pd-read">
                <Word>
                    <Reference>{address}</Reference>
                    {cover === this.cover ? 'This is the catalogue' : \`Read \${cover.title!.name}\`} →
                </Word>
            </div>
        );
    }

    painted(cover: $Chapter | undefined, drawing: ReactNode, key?: number): ReactNode {
        const Painted = cover?.annotations.expressed($Scheme)?.painted;
        if (Painted === undefined) return drawing;
        return (
            <Painted key={key}>
                {drawing}
            </Painted>
        );
    }

    jacketOf(chapter: $Chapter): $Chapter | undefined {
        return chapter.annotations.expressed($Volume)?.cover ?? (this.appendix.includes(chapter) ? undefined : this.cover);
    }

    override coverOf(identifier: string | undefined): $Chapter | undefined {
        return super.coverOf(identifier) ?? this.books
            .map(book => book.annotations.expressed($Volume)?.cover)
            .find(cover => cover !== undefined && cover.mention?.identifier === identifier);
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
}

export const Catalogue = $($Catalogue);
$(Catalogue, Self)(BookLink);
$(Catalogue, Theme)(Bookshelf);
$(Catalogue, tone)(light);
`}),e.jsx(m,{identifier:"booklink",type:".tsx",children:`import { $, inert } from '@dna-platform/chemistry';
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
`}),e.jsx(m,{identifier:"said",type:".tsx",children:`import { $, $check } from '@dna-platform/chemistry';
import { $Annotation, $Paragraph, $TableOfContents, $Word, $Writing, AnnotationSpecification, specify } from '@dna-platform/public';
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

export class $Arrow extends $Annotation {
    specification = new ArrowSpecification();

    override defines(writing: $Writing): void {
        writing.classes.add(this, 'pa-arrow');
    }

    override erase(writing: $Writing): void {
        writing.classes.revert(this);
    }
}

export class $Unfolded extends $Annotation {
    specification = new OfABookSpecification();

    override defines(writing: $Writing): void {
        writing.classes.add(this, 'pa-unfolded');
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

export class ArrowSpecification extends AnnotationSpecification {
    @specify('an arrow is said of a word of a table of contents')
    $saidOfAWord(writing: $Writing): void {
        $check(writing instanceof $Word && writing.chapter?.is($TableOfContents) === true,
            'an arrow is said of a word of a table of contents, and this is not one');
    }
}

export const Caption = $($Caption);
export const Arrow = $($Arrow);
export const Unfolded = $($Unfolded);
`}),e.jsx(m,{identifier:"subjects",type:".tsx",children:`import { Means, Paragraph, Section } from '@dna-platform/public';
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
`})]}),"TheCatalogueo1"),Fe=t($),Ye=d(()=>e.jsxs(Fe,{children:[Ie(),Le(),_e(),He(),Je(),Ve(),Ee()]}),"book");export{Ye as book};
