var Me=Object.defineProperty;var i=(d,e)=>Me(d,"name",{value:e,configurable:!0});import{$ as a,w as $,W as _,E as Qe,j as t,K as Ue,s as f,f as p,c as F,r as u,t as l,N as Ne,u as h,R as v,O as _e,Q as Ve,S as Ae,d as m,U as B,y as Fe,V as Xe,T as We,v as H,X as Re,Y as Z,g as Te,e as Ye}from"./index-BmR8dKpH.js";const se=class se extends ${constructor(){super(...arguments),this.$identifier="",this.$type=""}get name(){return`${this.$identifier}${this.$type}`}write(){const e=a(_),s=a(Qe);return t.jsxs(t.Fragment,{children:[t.jsx(e,{children:this.name}),t.jsx(s,{identifier:this.$identifier,type:this.$type,numbered:!0})]})}$Define(){super.$Define(),this.classes.add(this,"pd-listing")}};i(se,"$Listing");let W=se;const qe=a(W),te=class te extends Ue{constructor(){super(...arguments),this.font="'Inter', system-ui, sans-serif",this.mono="'JetBrains Mono', ui-monospace, monospace",this.size="0.90625rem",this.leading="1.6",this.measure="44rem",this.space="1.5rem",this.side="15.5rem",this.narrow="48rem",this.ink="#1a1f36",this.heading="#1a1f36",this.capital="#0a7a70",this.lit="#0a7a70",this.soft="#4f566b",this.faint="#8792a2",this.paper="#ffffff",this.panel="#f7f8fa",this.line="#e6e8ee",this.rule="#e6e8ee",this.edge="transparent",this.barFill="#f7f8fa",this.barInk="#1a1f36",this.barDim="#8792a2",this.barOn="#e3f4f1",this.barLine="#e6e8ee",this.accent="#0a7a70",this.tint="#e3f4f1",this.night="#0f2a33",this.dusk="#17363f",this.glow="#cfe6e3",this.dim="#4f7672",this.keyword="#8ad7ff",this.string="#ffd48a",this.type="#9be3d6",this.comment="#5f8a86",this.serif="'Cormorant Garamond', Georgia, serif",this.haze="#a9bcc1",this.sky="#8fc8dc",this.sea="#4e9eb9",this.opal="#c8f4fb",this.me="#e8590c",this.glass="rgba(255, 255, 255, 0.62)",this.wash="linear-gradient(105deg, #e2f6fb 0%, #ecf0fd 52%, #fae9f4 100%)",this.binding="linear-gradient(160deg, #16303a, #0c1b1f)",this.shadow="0 0.75rem 1.4rem -0.9rem rgba(12, 27, 31, 0.55)",this.initial="'D'",this.volume="11.5rem",this.card="18rem",this.photo="7rem",this.style=f.div`${this.parts()}`}parts(){return[this.page(),this.writing(),this.links(),this.figures(),this.listings(),this.switches(),this.turns()]}page(){return p`
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
        `}};i(te,"$LibraryBookTheme");let j=te;const Be=a(j);var He=Object.defineProperty,Ze=Object.getOwnPropertyDescriptor,Le=i((d,e,s,o)=>{for(var r=Ze(e,s),n=d.length-1,c;n>=0;n--)(c=d[n])&&(r=c(e,s,r)||r);return r&&He(e,s,r),r},"__decorateClass$5");const ae=class ae extends F{constructor(){super(...arguments),this.specification=new k,this.themeProvider=!0,this.style=f.div`
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
    `}defines(e){super.defines(e),e.classes.add(this,"pa-outlined")}erase(e){super.erase(e),e.classes.revert(this)}};i(ae,"$Outlined");let R=ae;const re=class re extends u{$saidOfABook(e){l(e instanceof Ne,"outline is said of a book, and this is not one")}};i(re,"OutlineSpecification");let k=re;Le([h("outline is said of a book")],k.prototype,"$saidOfABook");const Se=a(R),ie=class ie extends ${write(){const e=this.book.author,s=a(_),o=a(v);return t.jsxs(t.Fragment,{children:["by ",t.jsxs(s,{children:[t.jsx(o,{children:e.means.identifier}),e.name]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-byline")}};i(ie,"$Byline");let T=ie;const ne=class ne extends ${write(){const e=this.book.subject,s=a(_),o=a(v);return t.jsxs(t.Fragment,{children:["filed under ",t.jsxs(s,{children:[t.jsx(o,{children:e.means.identifier}),e.name]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-filed-under")}};i(ne,"$FiledUnder");let E=ne;const es=a(T),ss=a(E),oe=class oe extends _e{get on(){return this.book.is(this.$of)}$Switch(...e){this.$Writing(...e),this._button=s=>t.jsx("button",{type:"button","aria-pressed":this.on,onClick:i(()=>this.press(),"onClick"),...s}),this.containers.replace(this,"span",this._button)}press(){const e=this.book,s=[e.$is].flat();e.$is=this.on?s.filter(o=>o!==this.$of):[this.$of,...s]}$Define(){super.$Define(),this.classes.add(this,"pd-switch")}};i(oe,"$Switch");let O=oe;const de=class de extends O{press(){const e=this.book,s=[e.$is].flat().filter(o=>!this.$among.includes(o));e.$is=[this.$of,...s]}};i(de,"$Tab");let G=de;const Ee=a(O),vs=a(G);var ts=Object.defineProperty,as=Object.getOwnPropertyDescriptor,rs=i((d,e,s,o)=>{for(var r=as(e,s),n=d.length-1,c;n>=0;n--)(c=d[n])&&(r=c(e,s,r)||r);return r&&ts(e,s,r),r},"__decorateClass$4");const ce=class ce extends u{$saidOfABook(e){l(e instanceof x,"this is said of a book of this library, and here it is said of something else")}};i(ce,"OfABookSpecification");let y=ce;rs([h("this is said of a book of this library")],y.prototype,"$saidOfABook");const pe=class pe extends Ve{constructor(){super(...arguments),this.specification=new y,this.themeProvider=!0,this.style=f.div`${this.parts()}`}get pages(){return this.book.chapters}get open(){return this.book.open}defines(e){super.defines(e),e.classes.add(this,"pa-layout"),this.open!==void 0&&e.classes.add(this,"pa-turned")}erase(e){super.erase(e),e.classes.revert(this)}parts(){return[this.paging(),this.areas(),this.narrow()]}paging(){return p`
            .pd-leaf:not(.pd-open) { display: none; }
        `}areas(){return p`
            .pd-book.pa-layout {
                display: grid;
                grid-template-columns: ${({theme:e})=>e.side} minmax(0, 1fr);
                grid-template-rows: auto auto minmax(0, 1fr);
                grid-template-areas: 'library library' 'holds head' 'holds leaves';
                height: 100vh;
            }
            .pa-layout .pd-library {
                grid-area: library;
                display: flex;
                align-items: center;
                column-gap: ${({theme:e})=>e.space};
            }
            .pa-layout .pd-holds { grid-area: holds; overflow-y: auto; }
            .pa-layout .pd-head {
                grid-area: head;
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                justify-content: space-between;
                column-gap: ${({theme:e})=>e.space};
            }
            .pa-layout .pd-switches {
                display: flex;
                flex-wrap: wrap;
                gap: calc(${({theme:e})=>e.space} / 3);
            }
            .pa-layout .pd-leaves { grid-area: leaves; overflow-y: auto; }
            .pa-layout .pd-words .pd-chapter { scroll-margin-block-start: ${({theme:e})=>e.space}; }
        `}narrow(){return p`
            @media (max-width: ${({theme:e})=>e.narrow}) {
                .pd-book.pa-layout { display: block; height: auto; }
                .pa-layout .pd-library, .pa-layout .pd-holds {
                    overflow-x: auto;
                    white-space: nowrap;
                    scrollbar-width: none;
                }
                .pa-layout.pa-turned .pa-table-of-contents { display: none; }
            }
        `}};i(pe,"$Layout");let D=pe;const Ge=a(D),le=class le extends _e{write(){const e=this.book.chapters;return`${e.indexOf(this.chapter)+1} of ${e.length}`}$Define(){super.$Define(),this.classes.add(this,"pd-count")}};i(le,"$Count");let K=le;const he=class he extends ${get before(){const e=this.book.chapters;return e[e.indexOf(this.chapter)-1]??this.chapter}get after(){const e=this.book.chapters;return e[e.indexOf(this.chapter)+1]??this.chapter}write(){const e=a(_),s=a(is),o=a(this.before===this.chapter?Ae:v),r=a(this.after===this.chapter?Ae:v);return t.jsxs(t.Fragment,{children:[t.jsxs(e,{children:[t.jsx(o,{children:this.before.mention.identifier}),"← ",this.before.title.name]}),t.jsx(s,{}),t.jsxs(e,{children:[t.jsx(r,{children:this.after.mention.identifier}),this.after.title.name," →"]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-turn")}};i(he,"$Turn");let I=he;const is=a(K),ns=a(I);var os=Object.defineProperty,ds=Object.getOwnPropertyDescriptor,L=i((d,e,s,o)=>{for(var r=ds(e,s),n=d.length-1,c;n>=0;n--)(c=d[n])&&(r=c(e,s,r)||r);return r&&os(e,s,r),r},"__decorateClass$3");const fe=class fe extends Ne{constructor(){super(...arguments),this.specification=new b}get chapters(){return this.text.find(m).filter(e=>[...e.classes].includes("pd-canonical"))}get placed(){return[this.cover,this.synopsis,this.table,...this.chapters]}get open(){return this.$bookmark===void 0?void 0:this.named(this.$bookmark)}write(){return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"pd-library",children:this.library()}),t.jsx("div",{className:"pd-holds",children:this.holds()}),t.jsx("div",{className:"pd-head",children:this.head()}),t.jsxs("div",{className:"pd-leaves",children:[this.front(),this.leaves()]})]})}library(){return t.jsxs(t.Fragment,{children:[this.filed(),this.subjects(),this.byline()]})}subjects(){return null}holds(){const e=a(this.table);return t.jsx(e,{})}head(){const e=a(this.cover);return t.jsxs(t.Fragment,{children:[t.jsx(e,{}),t.jsx("div",{className:"pd-switches",children:this.switches()})]})}front(){return t.jsx("div",{className:this.open===void 0?"pd-leaf pd-front pd-open":"pd-leaf pd-front",children:this.opening()})}opening(){const e=a(this.synopsis);return t.jsx("div",{className:"pd-words",children:t.jsx(e,{})})}leaves(){return this.chapters.map((e,s)=>{const o=a(e);return t.jsxs("div",{className:e===this.open?"pd-leaf pd-open":"pd-leaf",children:[t.jsx("div",{className:"pd-words",children:t.jsx(o,{})}),t.jsx("div",{className:"pd-files",children:this.listings(e)})]},s)})}named(e){return this.chapters.find(s=>s.mention?.identifier===e||this.sections(s).some(o=>o.mention?.identifier===e))}byline(){const e=a(es);return t.jsx(e,{chapter:this.cover})}filed(){const e=a(ss);return t.jsx(e,{chapter:this.cover})}switches(){const e=a(Ee);return t.jsx(e,{chapter:this.cover,of:Se,children:"outline"})}listings(e){const s=a(qe);return e.annotations.find(B).reverse().map((o,r)=>t.jsx(s,{chapter:e,identifier:o.$identifier,type:o.$type},r))}sections(e){return e.text.find(Fe).flatMap(s=>[s,...this.sections(s)])}turn(){this.bookmark!==this.cover&&super.turn()}$Define(){super.$Define();const e=a(Ge);this.annotations.add(this,t.jsx(e,{}))}$Bound(){const e=a(ns);for(const s of this.chapters)s.text.add(this,t.jsx(e,{}));super.$Bound()}};i(fe,"$LibraryBook");let x=fe;const ue=class ue extends Xe{$holdsOnlyChapters(e){l([...e.text].every(s=>s instanceof m),"a book of this library holds only chapters, and this one holds something else")}$placesEveryChapter(e){l(e.text.find(m).every(s=>e.placed.includes(s)),"a book of this library has a place for every chapter it holds, and this one holds a chapter it places nowhere")}$onlyAChapterAppends(e){l(e.text.find(m).every(s=>e.chapters.includes(s)||!s.is(B)),"only an ordinary chapter appends a file, and here a cover, a synopsis or a table of contents appends one")}};i(ue,"LibraryBookSpecification");let b=ue;L([h("a book of this library holds only chapters")],b.prototype,"$holdsOnlyChapters");L([h("a book of this library has a place for every chapter it holds")],b.prototype,"$placesEveryChapter");L([h("only an ordinary chapter appends a file")],b.prototype,"$onlyAChapterAppends");const cs=a(x);a(cs,We)(Be);const be=class be extends F{constructor(){super(...arguments),this.specification=new y,this.themeProvider=!0,this.style=f.div`
        .pd-book.pa-code-forward .pd-leaf.pd-open { grid-template-columns: calc(1.4 * ${({theme:e})=>e.side}) minmax(0, 1fr); }
        .pd-book.pa-code-forward .pd-files { width: auto; }
    `}defines(e){super.defines(e),e.classes.add(this,"pa-code-forward")}erase(e){super.erase(e),e.classes.revert(this)}};i(be,"$CodeForward");let J=be;const ps=a(J),ge=class ge extends x{switches(){const e=a(Ee);return t.jsxs(t.Fragment,{children:[super.switches(),t.jsx(e,{chapter:this.cover,of:ps,children:"code forward"})]})}};i(ge,"$Manual");let M=ge;const $e=class $e extends D{defines(e){super.defines(e),e.classes.add(this,"pa-spread")}parts(){return[...super.parts(),this.spread(),this.one()]}spread(){return p`
            .pa-spread .pd-leaf.pd-open {
                display: grid;
                grid-template-columns: minmax(0, 1fr) auto;
                grid-template-areas: 'words files';
                height: 100%;
            }
            .pa-spread .pd-words { grid-area: words; overflow-y: auto; }
            .pa-spread .pd-files { grid-area: files; overflow-y: auto; width: calc(2.2 * ${({theme:e})=>e.side}); }
            .pa-spread .pd-files:empty { display: none; }
        `}one(){return p`
            @media (max-width: ${({theme:e})=>e.narrow}) {
                .pa-spread .pd-leaf.pd-open { display: block; height: auto; }
                .pa-spread .pd-files { width: auto; }
            }
        `}};i($e,"$Spread");let Q=$e;const S=a(M),ls=a(Q);a(S,Ge)(ls);var hs=Object.defineProperty,fs=Object.getOwnPropertyDescriptor,ee=i((d,e,s,o)=>{for(var r=fs(e,s),n=d.length-1,c;n>=0;n--)(c=d[n])&&(r=c(e,s,r)||r);return r&&hs(e,s,r),r},"__decorateClass$2");const me=class me extends H{constructor(){super(...arguments),this.specification=new g}get date(){return this.text.find(Re)[0]}defines(e){e.classes.add(this,"pa-dated")}erase(e){e.classes.revert(this)}note(){const e=a(this.date);return t.jsx(e,{})}};i(me,"$Dated");let w=me;const ye=class ye extends u{$saidOfAChapter(e){l(e instanceof m,"dated is said of a chapter, and this is not one")}$datedOnce(e){l(e.annotations.containsOne(w),"a chapter is dated once, and this one is dated more than once")}$givenOneDate(e){l(e.annotations.expressed(w)?.text.find(Re).length===1,"a dated chapter is given one date, and this one is given none or more than one")}};i(ye,"DatedSpecification");let g=ye;ee([h("dated is said of a chapter")],g.prototype,"$saidOfAChapter");ee([h("a chapter is dated once")],g.prototype,"$datedOnce");ee([h("a dated chapter is given one date")],g.prototype,"$givenOneDate");const js=a(w);var us=Object.defineProperty,bs=Object.getOwnPropertyDescriptor,Ke=i((d,e,s,o)=>{for(var r=bs(e,s),n=d.length-1,c;n>=0;n--)(c=d[n])&&(r=c(e,s,r)||r);return r&&us(e,s,r),r},"__decorateClass$1");const xe=class xe extends H{constructor(){super(...arguments),this.specification=new C}get place(){return this.parent.annotations.expressed(Z).identifier}get leads(){return this.book.named(this.place)}defines(e){e.classes.add(this,"pa-entry"),(this.place===this.book?.$bookmark||this.place===this.book.open?.mention?.identifier)&&e.classes.add(this,"pa-open")}erase(e){e.classes.revert(this)}};i(xe,"$Entry");let P=xe;const we=class we extends H{constructor(){super(...arguments),this.specification=new z}get entries(){return this.chapter.text.find(Fe).flatMap(s=>s.text.find($)).filter(s=>s.is(Z))}$Bound(){const e=a(Ie);for(const s of this.entries)s.annotations.add(this,t.jsx(e,{}));super.$Bound()}};i(we,"$Index");let U=we;const ve=class ve extends u{$saidOfATableOfContents(e){l(e.is(Te),"an index is said of a table of contents, and this chapter is not one")}};i(ve,"IndexSpecification");let z=ve;Ke([h("an index is said of a table of contents")],z.prototype,"$saidOfATableOfContents");const je=class je extends u{$saidOfAnEntry(e){l(e instanceof $&&e.is(Z),"an entry is said of a paragraph that leads somewhere, and this is not one")}};i(je,"EntrySpecification");let C=je;Ke([h("an entry is said of a paragraph that leads somewhere")],C.prototype,"$saidOfAnEntry");const Ie=a(P),ks=a(U),ke=class ke extends P{constructor(){super(...arguments),this.label=f.span.attrs({className:"pa-file-type"})``}get type(){return this.leads?.annotations.find(B)[0]?.$type??""}note(){const e=this.label;return t.jsx(e,{children:this.type})}};i(ke,"$FileEntry");let V=ke;const gs=a(V);a(S,Ie)(gs);const Oe=class Oe extends j{constructor(){super(...arguments),this.measure="58ch"}parts(){return[...super.parts(),this.index(),this.words(),this.small()]}index(){return p`
            .pd-holds, .pd-library {
                background: ${({theme:e})=>e.panel};
                border-inline-end: thin solid ${({theme:e})=>e.line};
                padding: calc(${({theme:e})=>e.space} * 0.75) calc(${({theme:e})=>e.space} * 0.6);
                scrollbar-width: thin;
                scrollbar-color: ${({theme:e})=>e.line} transparent;
            }
            .pd-library .pd-filed-under, .pd-library .pd-byline {
                margin-block: 0;
                font-size: calc(0.83 * ${({theme:e})=>e.size});
                color: ${({theme:e})=>e.faint};
            }
            .pd-library .pd-filed-under .pa-reference, .pd-library .pd-byline .pa-reference {
                color: ${({theme:e})=>e.soft};
                text-decoration: none;
            }
            .pd-head .pd-switches { margin-block-start: calc(${({theme:e})=>e.space} / 2); }
            .pd-head .pd-switch { font-size: calc(0.9 * ${({theme:e})=>e.size}); }
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
                .pd-holds, .pd-library {
                    border-inline-end: none;
                    border-block-end: thin solid ${({theme:e})=>e.line};
                }
                .pd-words { padding: calc(${({theme:e})=>e.space} * 0.83) calc(${({theme:e})=>e.space} * 0.67) calc(${({theme:e})=>e.space} / 3); }
                .pd-words .pd-title { font-size: calc(1.72 * ${({theme:e})=>e.size}); }
            }
        `}};i(Oe,"$ManualTheme");let X=Oe;const $s=a(X);a(S,We)($s);var ms=Object.defineProperty,ys=Object.getOwnPropertyDescriptor,Je=i((d,e,s,o)=>{for(var r=ys(e,s),n=d.length-1,c;n>=0;n--)(c=d[n])&&(r=c(e,s,r)||r);return r&&ms(e,s,r),r},"__decorateClass");const De=class De extends F{constructor(){super(...arguments),this.specification=new A,this.themeProvider=!0,this.style=f.header`
        .pd-chapter.pa-top-bar { margin-block: 0; }
        .pa-top-bar .pd-title {
            font-family: ${({theme:e})=>e.serif};
            font-size: calc(1.8 * ${({theme:e})=>e.size});
            font-weight: 600;
            line-height: 1.04;
            color: ${({theme:e})=>e.heading};
        }
    `}defines(e){super.defines(e),e.classes.add(this,"pa-top-bar")}erase(e){super.erase(e),e.classes.revert(this)}};i(De,"$TopBar");let Y=De;const Pe=class Pe extends F{constructor(){super(...arguments),this.specification=new N,this.themeProvider=!0,this.style=f.nav`
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
    `}defines(e){super.defines(e),e.classes.add(this,"pa-side-bar")}erase(e){super.erase(e),e.classes.revert(this)}};i(Pe,"$SideBar");let q=Pe;const ze=class ze extends u{$saidOfACover(e){l(e.is(Ye),"a top bar is said of a cover, and this chapter is not one")}};i(ze,"TopBarSpecification");let A=ze;Je([h("a top bar is said of a cover")],A.prototype,"$saidOfACover");const Ce=class Ce extends u{$saidOfATableOfContents(e){l(e.is(Te),"a side bar is said of a table of contents, and this chapter is not one")}};i(Ce,"SideBarSpecification");let N=Ce;Je([h("a side bar is said of a table of contents")],N.prototype,"$saidOfATableOfContents");const Os=a(Y),Ds=a(q);export{x as $,js as D,ks as I,Ge as L,y as O,Ds as S,vs as T,j as a,D as b,Os as c,M as d};
