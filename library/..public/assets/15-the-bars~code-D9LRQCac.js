var Me=Object.defineProperty;var i=(d,e)=>Me(d,"name",{value:e,configurable:!0});import{$ as t,w as m,W,E as Qe,j as a,K as Ue,s as f,f as p,c as w,r as u,t as l,N as Ne,u as h,R as k,O as _e,S as Ae,d as $,Q as Ve,U as B,y as We,V as Xe,T as Fe,v as H,X as Re,Y as Z,g as Te,e as Ye}from"./index-DCiLkAdB.js";const se=class se extends m{constructor(){super(...arguments),this.$identifier="",this.$type=""}get name(){return`${this.$identifier}${this.$type}`}write(){const e=t(W),s=t(Qe);return a.jsxs(a.Fragment,{children:[a.jsx(e,{children:this.name}),a.jsx(s,{identifier:this.$identifier,type:this.$type,numbered:!0})]})}$Define(){super.$Define(),this.classes.add(this,"pd-listing")}};i(se,"$Listing");let F=se;const qe=t(F),te=class te extends Ue{constructor(){super(...arguments),this.font="'Inter', system-ui, sans-serif",this.mono="'JetBrains Mono', ui-monospace, monospace",this.size="0.90625rem",this.leading="1.6",this.measure="44rem",this.space="1.5rem",this.side="15.5rem",this.narrow="48rem",this.ink="#1a1f36",this.heading="#1a1f36",this.capital="#0a7a70",this.lit="#0a7a70",this.soft="#4f566b",this.faint="#8792a2",this.paper="#ffffff",this.panel="#f7f8fa",this.line="#e6e8ee",this.rule="#e6e8ee",this.edge="transparent",this.barFill="#f7f8fa",this.barInk="#1a1f36",this.barDim="#8792a2",this.barOn="#e3f4f1",this.barLine="#e6e8ee",this.accent="#0a7a70",this.tint="#e3f4f1",this.night="#0f2a33",this.dusk="#17363f",this.glow="#cfe6e3",this.dim="#4f7672",this.keyword="#8ad7ff",this.string="#ffd48a",this.type="#9be3d6",this.comment="#5f8a86",this.serif="'Cormorant Garamond', Georgia, serif",this.haze="#a9bcc1",this.sky="#8fc8dc",this.sea="#4e9eb9",this.opal="#c8f4fb",this.me="#e8590c",this.glass="rgba(255, 255, 255, 0.62)",this.wash="linear-gradient(105deg, #e2f6fb 0%, #ecf0fd 52%, #fae9f4 100%)",this.binding="linear-gradient(160deg, #16303a, #0c1b1f)",this.shadow="0 0.75rem 1.4rem -0.9rem rgba(12, 27, 31, 0.55)",this.initial="'D'",this.volume="11.5rem",this.card="18rem",this.photo="7rem",this.style=f.div`${this.parts()}`}parts(){return[this.page(),this.writing(),this.links(),this.figures(),this.listings(),this.switches(),this.turns()]}page(){return p`
            font-family: ${({theme:e})=>e.font};
            font-size: ${({theme:e})=>e.size};
            line-height: ${({theme:e})=>e.leading};
            color: ${({theme:e})=>e.ink};
            background: ${({theme:e})=>e.paper};
            min-height: 100vh;
        `}writing(){return p`
            .pd-chapter, .pd-section, .pd-paragraph { margin-block: ${({theme:e})=>e.space}; }
            .pd-chapter { max-width: ${({theme:e})=>e.measure}; }
        `}links(){return p`
            .pa-reference { color: ${({theme:e})=>e.accent}; }
            .pa-reference.pa-self-reference { color: inherit; text-decoration: none; }
        `}figures(){return p`
            .pd-image img { display: block; max-width: 100%; height: auto; }
            .pd-code { font-family: ${({theme:e})=>e.mono}; overflow-x: auto; }
        `}listings(){return p`
            .pd-files {
                background: ${({theme:e})=>e.night};
                color: ${({theme:e})=>e.glow};
                scrollbar-width: thin;
                scrollbar-color: ${({theme:e})=>e.dim} transparent;
            }
            .pd-paragraph.pd-listing {
                margin-block: 0;
                padding: calc(${({theme:e})=>e.space} / 2) calc(${({theme:e})=>e.space} * 0.6);
            }
            .pd-listing .pd-word {
                display: inline-block;
                padding: calc(${({theme:e})=>e.space} * 0.3) calc(${({theme:e})=>e.space} / 2);
                border-start-start-radius: calc(${({theme:e})=>e.space} * 0.3);
                border-start-end-radius: calc(${({theme:e})=>e.space} * 0.3);
                background: ${({theme:e})=>e.dusk};
                color: ${({theme:e})=>e.paper};
                font-size: calc(0.86 * ${({theme:e})=>e.size});
            }
            .pd-listing .pd-code {
                margin: 0;
                padding-block: calc(${({theme:e})=>e.space} * 0.66);
                border-radius: calc(${({theme:e})=>e.space} * 0.4);
                border-start-start-radius: 0;
                background: ${({theme:e})=>e.dusk};
                font-size: calc(0.84 * ${({theme:e})=>e.size});
                line-height: 1.75;
                scrollbar-width: thin;
                scrollbar-color: ${({theme:e})=>e.dim} transparent;
            }
            .pd-code-line { padding-inline-end: calc(${({theme:e})=>e.space} * 0.75); }
            .pd-code-line::before {
                content: attr(data-line);
                display: inline-block;
                width: calc(${({theme:e})=>e.space} * 1.17);
                padding-inline-end: calc(${({theme:e})=>e.space} * 0.58);
                text-align: end;
                color: ${({theme:e})=>e.dim};
                user-select: none;
            }
            .hljs-keyword, .hljs-built_in, .hljs-literal { color: ${({theme:e})=>e.keyword}; }
            .hljs-string, .hljs-regexp, .hljs-number { color: ${({theme:e})=>e.string}; }
            .hljs-title, .hljs-type, .hljs-tag, .hljs-name, .hljs-attr { color: ${({theme:e})=>e.type}; }
            .hljs-comment, .hljs-meta { color: ${({theme:e})=>e.comment}; }
        `}switches(){return p`
            .pd-switch {
                font: inherit;
                color: ${({theme:e})=>e.soft};
                background: ${({theme:e})=>e.paper};
                border: thin solid ${({theme:e})=>e.line};
                border-radius: calc(${({theme:e})=>e.space} / 4);
                padding: calc(${({theme:e})=>e.space} / 8) calc(${({theme:e})=>e.space} / 2);
                cursor: pointer;
            }
            .pd-switch[aria-pressed='true'] {
                color: ${({theme:e})=>e.accent};
                background: ${({theme:e})=>e.tint};
                border-color: ${({theme:e})=>e.tint};
            }
        `}turns(){return p`
            .pd-paragraph.pd-turn {
                display: flex;
                justify-content: space-between;
                gap: ${({theme:e})=>e.space};
                font-size: calc(0.93 * ${({theme:e})=>e.size});
            }
            .pd-turn .pa-reference { font-weight: 500; text-decoration: none; }
            .pd-turn .pd-count { color: ${({theme:e})=>e.faint}; }
        `}};i(te,"$LibraryBookTheme");let j=te;const Be=t(j);var He=Object.defineProperty,Ze=Object.getOwnPropertyDescriptor,Le=i((d,e,s,n)=>{for(var r=Ze(e,s),o=d.length-1,c;o>=0;o--)(c=d[o])&&(r=c(e,s,r)||r);return r&&He(e,s,r),r},"__decorateClass$5");const ae=class ae extends w{constructor(){super(...arguments),this.specification=new O,this.themeProvider=!0,this.style=f.div`
        .pd-chapter, .pd-section, .pd-listing, .pd-paragraph[class*='pa-'] {
            outline: thin dashed currentColor;
            outline-offset: calc(${({theme:e})=>e.space} / 4);
        }
        .pd-chapter::before, .pd-section::before, .pd-listing::before, .pd-paragraph[class*='pa-']::before {
            content: attr(class);
            display: block;
            font-family: ${({theme:e})=>e.mono};
            font-size: smaller;
        }
    `}defines(e){super.defines(e),e.classes.add(this,"pa-outlined")}erase(e){super.erase(e),e.classes.revert(this)}};i(ae,"$Outlined");let R=ae;const re=class re extends u{$saidOfABook(e){l(e instanceof Ne,"outline is said of a book, and this is not one")}};i(re,"OutlineSpecification");let O=re;Le([h("outline is said of a book")],O.prototype,"$saidOfABook");const Se=t(R),ie=class ie extends m{write(){const e=this.book.author,s=t(W),n=t(k);return a.jsxs(a.Fragment,{children:["by ",a.jsxs(s,{children:[a.jsx(n,{children:e.means.identifier}),e.name]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-byline")}};i(ie,"$Byline");let T=ie;const ne=class ne extends m{write(){const e=this.book.subject,s=t(W),n=t(k);return a.jsxs(a.Fragment,{children:["filed under ",a.jsxs(s,{children:[a.jsx(n,{children:e.means.identifier}),e.name]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-filed-under")}};i(ne,"$FiledUnder");let E=ne;const es=t(T),ss=t(E),oe=class oe extends _e{get on(){return this.book.is(this.$of)}$Switch(...e){this.$Writing(...e),this._button=s=>a.jsx("button",{type:"button","aria-pressed":this.on,onClick:i(()=>this.press(),"onClick"),...s}),this.containers.replace(this,"span",this._button)}press(){const e=this.book,s=[e.$is].flat();e.$is=this.on?s.filter(n=>n!==this.$of):[this.$of,...s]}$Define(){super.$Define(),this.classes.add(this,"pd-switch")}};i(oe,"$Switch");let D=oe;const de=class de extends D{press(){const e=this.book,s=[e.$is].flat().filter(n=>!this.$among.includes(n));e.$is=[this.$of,...s]}};i(de,"$Tab");let G=de;const Ee=t(D),ws=t(G);var ts=Object.defineProperty,as=Object.getOwnPropertyDescriptor,rs=i((d,e,s,n)=>{for(var r=as(e,s),o=d.length-1,c;o>=0;o--)(c=d[o])&&(r=c(e,s,r)||r);return r&&ts(e,s,r),r},"__decorateClass$4");const ce=class ce extends u{$saidOfABook(e){l(e instanceof v,"this is said of a book of this library, and here it is said of something else")}};i(ce,"OfABookSpecification");let x=ce;rs([h("this is said of a book of this library")],x.prototype,"$saidOfABook");const pe=class pe extends w{constructor(){super(...arguments),this.specification=new x,this.themeProvider=!0,this.style=f.div`${this.parts()}`}defines(e){super.defines(e),e.classes.add(this,"pa-layout"),e.open!==void 0&&e.classes.add(this,"pa-turned")}erase(e){super.erase(e),e.classes.revert(this)}parts(){return[this.paging()]}paging(){return p`
            .pd-leaf:not(.pd-open) { display: none; }
        `}};i(pe,"$Layout");let P=pe;const Ge=t(P),le=class le extends _e{write(){const e=this.book.chapters;return`${e.indexOf(this.chapter)+1} of ${e.length}`}$Define(){super.$Define(),this.classes.add(this,"pd-count")}};i(le,"$Count");let K=le;const he=class he extends m{get before(){const e=this.book.chapters;return e[e.indexOf(this.chapter)-1]??this.chapter}get after(){const e=this.book.chapters;return e[e.indexOf(this.chapter)+1]??this.chapter}write(){const e=t(W),s=t(is),n=t(this.before===this.chapter?Ae:k),r=t(this.after===this.chapter?Ae:k);return a.jsxs(a.Fragment,{children:[a.jsxs(e,{children:[a.jsx(n,{children:this.before.mention.identifier}),"← ",this.before.title.name]}),a.jsx(s,{}),a.jsxs(e,{children:[a.jsx(r,{children:this.after.mention.identifier}),this.after.title.name," →"]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-turn")}};i(he,"$Turn");let I=he;const is=t(K),ns=t(I);var os=Object.defineProperty,ds=Object.getOwnPropertyDescriptor,L=i((d,e,s,n)=>{for(var r=ds(e,s),o=d.length-1,c;o>=0;o--)(c=d[o])&&(r=c(e,s,r)||r);return r&&os(e,s,r),r},"__decorateClass$3");const fe=class fe extends Ne{constructor(){super(...arguments),this.specification=new b}get chapters(){return this.text.find($).filter(e=>[...e.classes].includes("pd-canonical"))}get placed(){return[this.cover,this.synopsis,this.table,...this.chapters]}get open(){return this.$bookmark===void 0?void 0:this.named(this.$bookmark)}write(){return this.text.find($).map((e,s)=>{const n=t(e);return a.jsxs(Ve.Fragment,{children:[a.jsx(n,{}),e===this.cover&&this.byline(),e===this.cover&&this.filed(),e===this.cover&&this.switches(),this.listings(e)]},s)})}named(e){return this.chapters.find(s=>s.mention?.identifier===e||this.sections(s).some(n=>n.mention?.identifier===e))}byline(){const e=t(es);return a.jsx(e,{chapter:this.cover})}filed(){const e=t(ss);return a.jsx(e,{chapter:this.cover})}switches(){const e=t(Ee);return a.jsx(e,{chapter:this.cover,of:Se,children:"outline"})}front(e){return a.jsx("div",{className:this.open===void 0?"pd-leaf pd-front pd-open":"pd-leaf pd-front",children:e})}leaves(){return this.chapters.map((e,s)=>{const n=t(e);return a.jsxs("div",{className:e===this.open?"pd-leaf pd-open":"pd-leaf",children:[a.jsx("div",{className:"pd-words",children:a.jsx(n,{})}),a.jsx("div",{className:"pd-files",children:this.listings(e)})]},s)})}listings(e){const s=t(qe);return e.annotations.find(B).reverse().map((n,r)=>a.jsx(s,{chapter:e,identifier:n.$identifier,type:n.$type},r))}sections(e){return e.text.find(We).flatMap(s=>[s,...this.sections(s)])}turn(){this.bookmark!==this.cover&&super.turn()}$Define(){super.$Define();const e=t(Ge);this.annotations.add(this,a.jsx(e,{}))}$Bound(){const e=t(ns);for(const s of this.chapters)s.text.add(this,a.jsx(e,{}));super.$Bound()}};i(fe,"$LibraryBook");let v=fe;const ue=class ue extends Xe{$holdsOnlyChapters(e){l([...e.text].every(s=>s instanceof $),"a book of this library holds only chapters, and this one holds something else")}$placesEveryChapter(e){l(e.text.find($).every(s=>e.placed.includes(s)),"a book of this library has a place for every chapter it holds, and this one holds a chapter it places nowhere")}$onlyAChapterAppends(e){l(e.text.find($).every(s=>e.chapters.includes(s)||!s.is(B)),"only an ordinary chapter appends a file, and here a cover, a synopsis or a table of contents appends one")}};i(ue,"LibraryBookSpecification");let b=ue;L([h("a book of this library holds only chapters")],b.prototype,"$holdsOnlyChapters");L([h("a book of this library has a place for every chapter it holds")],b.prototype,"$placesEveryChapter");L([h("only an ordinary chapter appends a file")],b.prototype,"$onlyAChapterAppends");const cs=t(v);t(cs,Fe)(Be);const $e=class $e extends w{constructor(){super(...arguments),this.specification=new x,this.themeProvider=!0,this.style=f.div`
        .pd-book.pa-code-forward .pd-leaf.pd-open { grid-template-columns: calc(1.4 * ${({theme:e})=>e.side}) minmax(0, 1fr); }
        .pd-book.pa-code-forward .pd-files { width: auto; }
    `}defines(e){super.defines(e),e.classes.add(this,"pa-code-forward")}erase(e){super.erase(e),e.classes.revert(this)}};i($e,"$CodeForward");let J=$e;const ps=t(J),be=class be extends v{write(){const e=t(this.cover),s=t(this.synopsis),n=t(this.table);return a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"pd-side",children:[this.filed(),a.jsx(e,{}),this.byline(),a.jsx("div",{className:"pd-switches",children:this.switches()}),a.jsx(n,{})]}),a.jsxs("div",{className:"pd-leaves",children:[this.front(a.jsx("div",{className:"pd-words",children:a.jsx(s,{})})),this.leaves()]})]})}switches(){const e=t(Ee);return a.jsxs(a.Fragment,{children:[super.switches(),a.jsx(e,{chapter:this.cover,of:ps,children:"code forward"})]})}};i(be,"$Manual");let M=be;const ge=class ge extends P{defines(e){super.defines(e),e.classes.add(this,"pa-spread")}parts(){return[...super.parts(),this.columns(),this.spread(),this.narrow()]}columns(){return p`
            .pd-book.pa-spread {
                display: grid;
                grid-template-columns: ${({theme:e})=>e.side} minmax(0, 1fr);
                grid-template-areas: 'side pages';
                height: 100vh;
            }
            .pa-spread .pd-side { grid-area: side; overflow-y: auto; }
            .pa-spread .pd-leaves { grid-area: pages; min-height: 0; }
            .pa-spread .pd-switches {
                display: flex;
                flex-wrap: wrap;
                gap: calc(${({theme:e})=>e.space} / 4);
            }
        `}spread(){return p`
            .pa-spread .pd-leaf.pd-open {
                display: grid;
                grid-template-columns: minmax(0, 1fr) auto;
                grid-template-areas: 'words files';
                height: 100%;
            }
            .pa-spread .pd-words { grid-area: words; overflow-y: auto; }
            .pa-spread .pd-files { grid-area: files; overflow-y: auto; width: calc(2.2 * ${({theme:e})=>e.side}); }
            .pa-spread .pd-files:empty { display: none; }
        `}narrow(){return p`
            @media (max-width: ${({theme:e})=>e.narrow}) {
                .pd-book.pa-spread { display: block; height: auto; }
                .pa-spread .pd-leaf.pd-open { display: block; height: auto; }
                .pa-spread .pd-files { width: auto; }
                .pa-spread.pa-turned .pa-table-of-contents { display: none; }
            }
        `}};i(ge,"$Spread");let Q=ge;const S=t(M),ls=t(Q);t(S,Ge)(ls);var hs=Object.defineProperty,fs=Object.getOwnPropertyDescriptor,ee=i((d,e,s,n)=>{for(var r=fs(e,s),o=d.length-1,c;o>=0;o--)(c=d[o])&&(r=c(e,s,r)||r);return r&&hs(e,s,r),r},"__decorateClass$2");const me=class me extends H{constructor(){super(...arguments),this.specification=new g}get date(){return this.text.find(Re)[0]}defines(e){e.classes.add(this,"pa-dated")}erase(e){e.classes.revert(this)}note(){const e=t(this.date);return a.jsx(e,{})}};i(me,"$Dated");let y=me;const xe=class xe extends u{$saidOfAChapter(e){l(e instanceof $,"dated is said of a chapter, and this is not one")}$datedOnce(e){l(e.annotations.containsOne(y),"a chapter is dated once, and this one is dated more than once")}$givenOneDate(e){l(e.annotations.expressed(y)?.text.find(Re).length===1,"a dated chapter is given one date, and this one is given none or more than one")}};i(xe,"DatedSpecification");let g=xe;ee([h("dated is said of a chapter")],g.prototype,"$saidOfAChapter");ee([h("a chapter is dated once")],g.prototype,"$datedOnce");ee([h("a dated chapter is given one date")],g.prototype,"$givenOneDate");const ks=t(y);var us=Object.defineProperty,$s=Object.getOwnPropertyDescriptor,Ke=i((d,e,s,n)=>{for(var r=$s(e,s),o=d.length-1,c;o>=0;o--)(c=d[o])&&(r=c(e,s,r)||r);return r&&us(e,s,r),r},"__decorateClass$1");const ve=class ve extends H{constructor(){super(...arguments),this.specification=new A}get place(){return this.parent.annotations.expressed(Z).identifier}get leads(){return this.book.named(this.place)}defines(e){e.classes.add(this,"pa-entry"),(this.place===this.book?.$bookmark||this.place===this.book.open?.mention?.identifier)&&e.classes.add(this,"pa-open")}erase(e){e.classes.revert(this)}};i(ve,"$Entry");let C=ve;const ye=class ye extends H{constructor(){super(...arguments),this.specification=new z}get entries(){return this.chapter.text.find(We).flatMap(s=>s.text.find(m)).filter(s=>s.is(Z))}$Bound(){const e=t(Ie);for(const s of this.entries)s.annotations.add(this,a.jsx(e,{}));super.$Bound()}};i(ye,"$Index");let U=ye;const we=class we extends u{$saidOfATableOfContents(e){l(e.is(Te),"an index is said of a table of contents, and this chapter is not one")}};i(we,"IndexSpecification");let z=we;Ke([h("an index is said of a table of contents")],z.prototype,"$saidOfATableOfContents");const ke=class ke extends u{$saidOfAnEntry(e){l(e instanceof m&&e.is(Z),"an entry is said of a paragraph that leads somewhere, and this is not one")}};i(ke,"EntrySpecification");let A=ke;Ke([h("an entry is said of a paragraph that leads somewhere")],A.prototype,"$saidOfAnEntry");const Ie=t(C),js=t(U),je=class je extends C{constructor(){super(...arguments),this.label=f.span.attrs({className:"pa-file-type"})``}get type(){return this.leads?.annotations.find(B)[0]?.$type??""}note(){const e=this.label;return a.jsx(e,{children:this.type})}};i(je,"$FileEntry");let V=je;const bs=t(V);t(S,Ie)(bs);const Oe=class Oe extends j{constructor(){super(...arguments),this.measure="58ch"}parts(){return[...super.parts(),this.index(),this.words(),this.small()]}index(){return p`
            .pd-side {
                background: ${({theme:e})=>e.panel};
                border-inline-end: thin solid ${({theme:e})=>e.line};
                padding: calc(${({theme:e})=>e.space} * 0.75) calc(${({theme:e})=>e.space} * 0.6);
                scrollbar-width: thin;
                scrollbar-color: ${({theme:e})=>e.line} transparent;
            }
            .pd-side .pd-filed-under, .pd-side .pd-byline {
                margin-block: 0;
                font-size: calc(0.83 * ${({theme:e})=>e.size});
                color: ${({theme:e})=>e.faint};
            }
            .pd-side .pd-filed-under .pa-reference, .pd-side .pd-byline .pa-reference {
                color: ${({theme:e})=>e.soft};
                text-decoration: none;
            }
            .pd-side .pd-switches { margin-block-start: calc(${({theme:e})=>e.space} / 2); }
            .pd-side .pd-switch { font-size: calc(0.9 * ${({theme:e})=>e.size}); }
        `}words(){return p`
            .pd-words { padding: calc(${({theme:e})=>e.space} * 1.4) calc(${({theme:e})=>e.space} * 1.8); }
            .pd-words .pd-chapter { margin-block: 0; }
            .pd-words .pd-title {
                font-size: calc(2.07 * ${({theme:e})=>e.size});
                font-weight: 600;
                line-height: 1.15;
                letter-spacing: -0.02em;
                margin-block-end: calc(${({theme:e})=>e.space} * 0.4);
            }
            .pd-words .pd-section { margin-block-start: calc(${({theme:e})=>e.space} * 1.25); }
            .pd-words .pd-heading {
                font-size: calc(0.9 * ${({theme:e})=>e.size});
                font-weight: 600;
                letter-spacing: 0.06em;
                text-transform: uppercase;
                color: ${({theme:e})=>e.faint};
                padding-block-start: calc(${({theme:e})=>e.space} * 0.9);
                margin-block-end: calc(${({theme:e})=>e.space} / 6);
                border-block-start: thin solid ${({theme:e})=>e.line};
            }
            .pd-words .pd-paragraph { margin-block: calc(${({theme:e})=>e.space} * 0.4); }
            .pd-words .pd-paragraph.pd-turn { margin-block-start: calc(${({theme:e})=>e.space} * 1.1); }
            .pd-words .pa-synopsis .pd-paragraph {
                font-size: calc(1.1 * ${({theme:e})=>e.size});
                color: ${({theme:e})=>e.soft};
            }
            .pd-book.pa-code-forward .pd-words { font-size: calc(0.9 * ${({theme:e})=>e.size}); }
        `}small(){return p`
            @media (max-width: ${({theme:e})=>e.narrow}) {
                .pd-side {
                    border-inline-end: none;
                    border-block-end: thin solid ${({theme:e})=>e.line};
                }
                .pd-words { padding: calc(${({theme:e})=>e.space} * 0.83) calc(${({theme:e})=>e.space} * 0.67) calc(${({theme:e})=>e.space} / 3); }
                .pd-words .pd-title { font-size: calc(1.72 * ${({theme:e})=>e.size}); }
            }
        `}};i(Oe,"$ManualTheme");let X=Oe;const gs=t(X);t(S,Fe)(gs);var ms=Object.defineProperty,xs=Object.getOwnPropertyDescriptor,Je=i((d,e,s,n)=>{for(var r=xs(e,s),o=d.length-1,c;o>=0;o--)(c=d[o])&&(r=c(e,s,r)||r);return r&&ms(e,s,r),r},"__decorateClass");const De=class De extends w{constructor(){super(...arguments),this.specification=new N,this.themeProvider=!0,this.style=f.header`
        .pd-chapter.pa-top-bar { margin-block: 0; }
        .pa-top-bar .pd-title {
            font-family: ${({theme:e})=>e.serif};
            font-size: calc(1.8 * ${({theme:e})=>e.size});
            font-weight: 600;
            line-height: 1.04;
            color: ${({theme:e})=>e.heading};
        }
    `}defines(e){super.defines(e),e.classes.add(this,"pa-top-bar")}erase(e){super.erase(e),e.classes.revert(this)}};i(De,"$TopBar");let Y=De;const Pe=class Pe extends w{constructor(){super(...arguments),this.specification=new _,this.themeProvider=!0,this.style=f.nav`
        .pd-chapter.pa-side-bar {
            margin-block: 0;
            color: ${({theme:e})=>e.barDim};
        }
        .pa-side-bar .pd-section { margin-block: ${({theme:e})=>e.space} 0; }
        .pa-side-bar .pd-heading {
            display: flex;
            justify-content: space-between;
            margin-block: 0 calc(${({theme:e})=>e.space} / 3);
            padding-inline: calc(${({theme:e})=>e.space} * 0.375);
            font-size: calc(0.76 * ${({theme:e})=>e.size});
            font-weight: 600;
            letter-spacing: 0.12em;
            text-transform: uppercase;
            color: ${({theme:e})=>e.barDim};
        }
        .pa-side-bar .pd-paragraph.pa-entry {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: calc(${({theme:e})=>e.space} * 0.375);
            margin-block: 0;
            padding: calc(${({theme:e})=>e.space} / 4) calc(${({theme:e})=>e.space} * 0.375) calc(${({theme:e})=>e.space} / 4) calc(${({theme:e})=>e.space} * 1.1);
            border-radius: calc(${({theme:e})=>e.space} / 3);
            font-weight: 500;
            color: ${({theme:e})=>e.barInk};
        }
        .pa-side-bar .pd-paragraph.pa-entry::before {
            content: '';
            position: absolute;
            inset-inline-start: calc(${({theme:e})=>e.space} * 0.375);
            width: calc(${({theme:e})=>e.space} * 0.375);
            height: calc(${({theme:e})=>e.space} * 0.375);
            border-radius: 50%;
            background: ${({theme:e})=>e.sea};
        }
        .pa-side-bar .pd-paragraph.pa-entry.pa-open { background: ${({theme:e})=>e.barOn}; }
        .pa-side-bar .pa-reference.pa-reference { color: inherit; text-decoration: none; }
    `}defines(e){super.defines(e),e.classes.add(this,"pa-side-bar")}erase(e){super.erase(e),e.classes.revert(this)}};i(Pe,"$SideBar");let q=Pe;const Ce=class Ce extends u{$saidOfACover(e){l(e.is(Ye),"a top bar is said of a cover, and this chapter is not one")}};i(Ce,"TopBarSpecification");let N=Ce;Je([h("a top bar is said of a cover")],N.prototype,"$saidOfACover");const ze=class ze extends u{$saidOfATableOfContents(e){l(e.is(Te),"a side bar is said of a table of contents, and this chapter is not one")}};i(ze,"SideBarSpecification");let _=ze;Je([h("a side bar is said of a table of contents")],_.prototype,"$saidOfATableOfContents");const Os=t(Y),Ds=t(q);export{v as $,ks as D,js as I,Ge as L,x as O,Ds as S,ws as T,P as a,j as b,Os as c,M as d};
