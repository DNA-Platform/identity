var Be=Object.defineProperty;var i=(c,e)=>Be(c,"name",{value:e,configurable:!0});import{$ as t,u as m,W as C,z as Fe,j as a,F as _e,s as f,f as p,c as M,r as A,t as l,G as je,v as h,R as y,J as Oe,S as ke,d as u,K as Re,N as Q,x as ze,O as Ge,T as De,q as Pe,Q as Ce,U as Te,V as U,e as Ee}from"./index-DcwFE8Nk.js";const Y=class Y extends m{constructor(){super(...arguments),this.$identifier="",this.$type=""}get name(){return`${this.$identifier}${this.$type}`}write(){const e=t(C),s=t(Fe);return a.jsxs(a.Fragment,{children:[a.jsx(e,{children:this.name}),a.jsx(s,{identifier:this.$identifier,type:this.$type,numbered:!0})]})}$Define(){super.$Define(),this.classes.add(this,"pd-listing")}};i(Y,"$Listing");let N=Y;const Ie=t(N),Z=class Z extends _e{constructor(){super(...arguments),this.font="'Inter', system-ui, sans-serif",this.mono="'JetBrains Mono', ui-monospace, monospace",this.size="0.90625rem",this.leading="1.6",this.measure="44rem",this.space="1.5rem",this.side="15.5rem",this.narrow="48rem",this.ink="#1a1f36",this.heading="#1a1f36",this.capital="#0a7a70",this.lit="#0a7a70",this.soft="#4f566b",this.faint="#8792a2",this.paper="#ffffff",this.panel="#f7f8fa",this.line="#e6e8ee",this.rule="#e6e8ee",this.edge="transparent",this.barFill="#f7f8fa",this.barInk="#1a1f36",this.barDim="#8792a2",this.barOn="#e3f4f1",this.barLine="#e6e8ee",this.accent="#0a7a70",this.tint="#e3f4f1",this.night="#0f2a33",this.dusk="#17363f",this.glow="#cfe6e3",this.dim="#4f7672",this.keyword="#8ad7ff",this.string="#ffd48a",this.type="#9be3d6",this.comment="#5f8a86",this.serif="'Cormorant Garamond', Georgia, serif",this.haze="#a9bcc1",this.sky="#8fc8dc",this.sea="#4e9eb9",this.opal="#c8f4fb",this.me="#e8590c",this.glass="rgba(255, 255, 255, 0.62)",this.wash="linear-gradient(105deg, #e2f6fb 0%, #ecf0fd 52%, #fae9f4 100%)",this.binding="linear-gradient(160deg, #16303a, #0c1b1f)",this.shadow="0 0.75rem 1.4rem -0.9rem rgba(12, 27, 31, 0.55)",this.initial="'D'",this.volume="11.5rem",this.card="18rem",this.plate="7rem",this.style=f.div`${this.parts()}`}parts(){return[this.page(),this.writing(),this.links(),this.figures(),this.listings(),this.switches(),this.turns()]}page(){return p`
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
            .pd-paragraph.pd-catchword {
                display: flex;
                justify-content: space-between;
                gap: ${({theme:e})=>e.space};
                font-size: calc(0.93 * ${({theme:e})=>e.size});
            }
            .pd-catchword .pa-reference { font-weight: 500; text-decoration: none; }
            .pd-catchword .pd-folio { color: ${({theme:e})=>e.faint}; }
        `}};i(Z,"$DougsTheme");let v=Z;const Je=t(v);var Ke=Object.defineProperty,Le=Object.getOwnPropertyDescriptor,qe=i((c,e,s,n)=>{for(var r=Le(e,s),o=c.length-1,d;o>=0;o--)(d=c[o])&&(r=d(e,s,r)||r);return r&&Ke(e,s,r),r},"__decorateClass$4");const S=class S extends M{constructor(){super(...arguments),this.specification=new k,this.themeProvider=!0,this.style=f.div`
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
    `}defines(e){super.defines(e),e.classes.add(this,"pa-outline")}erase(e){super.erase(e),e.classes.revert(this)}};i(S,"$Outline");let W=S;const ee=class ee extends A{$saidOfABook(e){l(e instanceof je,"outline is said of a book, and this is not one")}};i(ee,"OutlineSpecification");let k=ee;qe([h("outline is said of a book")],k.prototype,"$saidOfABook");const Me=t(W),se=class se extends m{write(){const e=this.book.author,s=t(C),n=t(y);return a.jsxs(a.Fragment,{children:["by ",a.jsxs(s,{children:[a.jsx(n,{children:e.means.identifier}),e.name]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-byline")}};i(se,"$Byline");let B=se;const te=class te extends m{write(){const e=this.book.subject,s=t(C),n=t(y);return a.jsxs(a.Fragment,{children:["filed under ",a.jsxs(s,{children:[a.jsx(n,{children:e.means.identifier}),e.name]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-classmark")}};i(te,"$Classmark");let F=te;const Qe=t(B),Ue=t(F),ae=class ae extends Oe{get on(){return this.book.is(this.$of)}$Switch(...e){this.$Writing(...e),this._button=s=>a.jsx("button",{type:"button","aria-pressed":this.on,onClick:i(()=>this.press(),"onClick"),...s}),this.containers.replace(this,"span",this._button)}press(){const e=this.book,s=[e.$is].flat();e.$is=this.on?s.filter(n=>n!==this.$of):[this.$of,...s]}$Define(){super.$Define(),this.classes.add(this,"pd-switch")}};i(ae,"$Switch");let j=ae;const re=class re extends j{press(){const e=this.book,s=[e.$is].flat().filter(n=>!this.$among.includes(n));e.$is=[this.$of,...s]}};i(re,"$Tab");let _=re;const Ae=t(j),fs=t(_);var Ve=Object.defineProperty,He=Object.getOwnPropertyDescriptor,Xe=i((c,e,s,n)=>{for(var r=He(e,s),o=c.length-1,d;o>=0;o--)(d=c[o])&&(r=d(e,s,r)||r);return r&&Ve(e,s,r),r},"__decorateClass$3");const ie=class ie extends A{$saidOfABook(e){l(e instanceof x,"this is said of a book of this library, and here it is said of something else")}};i(ie,"OfABookSpecification");let b=ie;Xe([h("this is said of a book of this library")],b.prototype,"$saidOfABook");const ne=class ne extends M{constructor(){super(...arguments),this.specification=new b,this.themeProvider=!0,this.style=f.div`${this.parts()}`}defines(e){super.defines(e),e.classes.add(this,"pa-imposition"),e.open!==void 0&&e.classes.add(this,"pa-turned")}erase(e){super.erase(e),e.classes.revert(this)}parts(){return[this.paging()]}paging(){return p`
            .pd-leaf:not(.pd-open) { display: none; }
        `}};i(ne,"$Imposition");let O=ne;const Ne=t(O),oe=class oe extends Oe{write(){const e=this.book.chapters;return`${e.indexOf(this.chapter)+1} of ${e.length}`}$Define(){super.$Define(),this.classes.add(this,"pd-folio")}};i(oe,"$Folio");let R=oe;const ce=class ce extends m{get before(){const e=this.book.chapters;return e[e.indexOf(this.chapter)-1]??this.chapter}get after(){const e=this.book.chapters;return e[e.indexOf(this.chapter)+1]??this.chapter}write(){const e=t(C),s=t(Ye),n=t(this.before===this.chapter?ke:y),r=t(this.after===this.chapter?ke:y);return a.jsxs(a.Fragment,{children:[a.jsxs(e,{children:[a.jsx(n,{children:this.before.mention.identifier}),"← ",this.before.title.name]}),a.jsx(s,{}),a.jsxs(e,{children:[a.jsx(r,{children:this.after.mention.identifier}),this.after.title.name," →"]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-catchword")}};i(ce,"$Catchword");let G=ce;const Ye=t(R),Ze=t(G);var Se=Object.defineProperty,es=Object.getOwnPropertyDescriptor,V=i((c,e,s,n)=>{for(var r=es(e,s),o=c.length-1,d;o>=0;o--)(d=c[o])&&(r=d(e,s,r)||r);return r&&Se(e,s,r),r},"__decorateClass$2");const de=class de extends je{constructor(){super(...arguments),this.specification=new g}get chapters(){return this.text.find(u).filter(e=>[...e.classes].includes("pd-canonical"))}get placed(){return[this.cover,this.synopsis,this.table,...this.chapters]}get open(){return this.$bookmark===void 0?void 0:this.named(this.$bookmark)}write(){return this.text.find(u).map((e,s)=>{const n=t(e);return a.jsxs(Re.Fragment,{children:[a.jsx(n,{}),e===this.cover&&this.byline(),e===this.cover&&this.classmark(),e===this.cover&&this.switches(),this.listings(e)]},s)})}named(e){return this.chapters.find(s=>s.mention?.identifier===e||this.sections(s).some(n=>n.mention?.identifier===e))}byline(){const e=t(Qe);return a.jsx(e,{chapter:this.cover})}classmark(){const e=t(Ue);return a.jsx(e,{chapter:this.cover})}switches(){const e=t(Ae);return a.jsx(e,{chapter:this.cover,of:Me,children:"outline"})}front(e){return a.jsx("div",{className:this.open===void 0?"pd-leaf pd-front pd-open":"pd-leaf pd-front",children:e})}leaves(){return this.chapters.map((e,s)=>{const n=t(e);return a.jsxs("div",{className:e===this.open?"pd-leaf pd-open":"pd-leaf",children:[a.jsx("div",{className:"pd-words",children:a.jsx(n,{})}),a.jsx("div",{className:"pd-files",children:this.listings(e)})]},s)})}listings(e){const s=t(Ie);return e.annotations.find(Q).reverse().map((n,r)=>a.jsx(s,{chapter:e,identifier:n.$identifier,type:n.$type},r))}sections(e){return e.text.find(ze).flatMap(s=>[s,...this.sections(s)])}turn(){this.bookmark!==this.cover&&super.turn()}$Define(){super.$Define();const e=t(Ne);this.annotations.add(this,a.jsx(e,{}))}$Bound(){const e=t(Ze);for(const s of this.chapters)s.text.add(this,a.jsx(e,{}));super.$Bound()}};i(de,"$DougsBook");let x=de;const pe=class pe extends Ge{$holdsOnlyChapters(e){l([...e.text].every(s=>s instanceof u),"a book of this library holds only chapters, and this one holds something else")}$placesEveryChapter(e){l(e.text.find(u).every(s=>e.placed.includes(s)),"a book of this library has a place for every chapter it holds, and this one holds a chapter it places nowhere")}$onlyAChapterAppends(e){l(e.text.find(u).every(s=>e.chapters.includes(s)||!s.is(Q)),"only an ordinary chapter appends a file, and here a cover, a synopsis or a table of contents appends one")}};i(pe,"DougsBookSpecification");let g=pe;V([h("a book of this library holds only chapters")],g.prototype,"$holdsOnlyChapters");V([h("a book of this library has a place for every chapter it holds")],g.prototype,"$placesEveryChapter");V([h("only an ordinary chapter appends a file")],g.prototype,"$onlyAChapterAppends");const ss=t(x);t(ss,De)(Je);const le=class le extends M{constructor(){super(...arguments),this.specification=new b,this.themeProvider=!0,this.style=f.div`
        .pd-book.pa-code-forward .pd-leaf.pd-open { grid-template-columns: calc(1.4 * ${({theme:e})=>e.side}) minmax(0, 1fr); }
        .pd-book.pa-code-forward .pd-files { width: auto; }
    `}defines(e){super.defines(e),e.classes.add(this,"pa-code-forward")}erase(e){super.erase(e),e.classes.revert(this)}};i(le,"$CodeForward");let T=le;const ts=t(T),he=class he extends x{write(){const e=t(this.cover),s=t(this.synopsis),n=t(this.table);return a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"pd-side",children:[this.classmark(),a.jsx(e,{}),this.byline(),a.jsx("div",{className:"pd-switches",children:this.switches()}),a.jsx(n,{})]}),a.jsxs("div",{className:"pd-leaves",children:[this.front(a.jsx("div",{className:"pd-words",children:a.jsx(s,{})})),this.leaves()]})]})}switches(){const e=t(Ae);return a.jsxs(a.Fragment,{children:[super.switches(),a.jsx(e,{chapter:this.cover,of:ts,children:"code forward"})]})}};i(he,"$Manual");let E=he;const fe=class fe extends O{defines(e){super.defines(e),e.classes.add(this,"pa-spread")}parts(){return[...super.parts(),this.columns(),this.spread(),this.narrow()]}columns(){return p`
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
        `}};i(fe,"$Spread");let I=fe;const H=t(E),as=t(I);t(H,Ne)(as);var rs=Object.defineProperty,is=Object.getOwnPropertyDescriptor,X=i((c,e,s,n)=>{for(var r=is(e,s),o=c.length-1,d;o>=0;o--)(d=c[o])&&(r=d(e,s,r)||r);return r&&rs(e,s,r),r},"__decorateClass$1");const ue=class ue extends Pe{constructor(){super(...arguments),this.specification=new $}get date(){return this.text.find(Ce)[0]}defines(e){e.classes.add(this,"pa-dateline")}erase(e){e.classes.revert(this)}note(){const e=t(this.date);return a.jsx(e,{})}};i(ue,"$Dateline");let w=ue;const ge=class ge extends A{$saidOfAChapter(e){l(e instanceof u,"dated is said of a chapter, and this is not one")}$datedOnce(e){l(e.annotations.containsOne(w),"a chapter is dated once, and this one is dated more than once")}$givenOneDate(e){l(e.annotations.expressed(w)?.text.find(Ce).length===1,"a dated chapter is given one date, and this one is given none or more than one")}};i(ge,"DatedSpecification");let $=ge;X([h("dated is said of a chapter")],$.prototype,"$saidOfAChapter");X([h("a chapter is dated once")],$.prototype,"$datedOnce");X([h("a dated chapter is given one date")],$.prototype,"$givenOneDate");const us=t(w);var ns=Object.defineProperty,os=Object.getOwnPropertyDescriptor,cs=i((c,e,s,n)=>{for(var r=os(e,s),o=c.length-1,d;o>=0;o--)(d=c[o])&&(r=d(e,s,r)||r);return r&&ns(e,s,r),r},"__decorateClass");const $e=class $e extends Pe{constructor(){super(...arguments),this.specification=new P}get leads(){const e=this.parent.annotations.expressed(U).identifier;return this.book.named(e)}defines(e){e.classes.add(this,"pa-entry"),this.leads!==void 0&&this.leads===this.book.open&&e.classes.add(this,"pa-open")}erase(e){e.classes.revert(this)}};i($e,"$Entry");let z=$e;const me=class me extends Te{get entries(){return this.chapter.text.find(ze).flatMap(s=>s.text.find(m)).filter(s=>s.is(U))}$Bound(){const e=t(We);for(const s of this.entries)s.annotations.add(this,a.jsx(e,{}));super.$Bound()}};i(me,"$Index");let D=me;const be=class be extends A{$saidOfAnEntry(e){l(e instanceof m&&e.is(U),"an entry is said of a paragraph that leads somewhere, and this is not one")}};i(be,"EntrySpecification");let P=be;cs([h("an entry is said of a paragraph that leads somewhere")],P.prototype,"$saidOfAnEntry");const We=t(z);t(D);const xe=class xe extends z{constructor(){super(...arguments),this.label=f.span.attrs({className:"pa-file-type"})``}get type(){return this.leads?.annotations.find(Q)[0]?.$type??""}note(){const e=this.label;return a.jsx(e,{children:this.type})}};i(xe,"$FileEntry");let J=xe;const ds=t(J);t(H,We)(ds);const we=class we extends v{constructor(){super(...arguments),this.measure="58ch"}parts(){return[...super.parts(),this.index(),this.words(),this.small()]}index(){return p`
            .pd-side {
                background: ${({theme:e})=>e.panel};
                border-inline-end: thin solid ${({theme:e})=>e.line};
                padding: calc(${({theme:e})=>e.space} * 0.75) calc(${({theme:e})=>e.space} * 0.6);
                scrollbar-width: thin;
                scrollbar-color: ${({theme:e})=>e.line} transparent;
            }
            .pd-side .pd-classmark, .pd-side .pd-byline {
                margin-block: 0;
                font-size: calc(0.83 * ${({theme:e})=>e.size});
                color: ${({theme:e})=>e.faint};
            }
            .pd-side .pd-classmark .pa-reference, .pd-side .pd-byline .pa-reference {
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
            .pd-words .pd-paragraph.pd-catchword { margin-block-start: calc(${({theme:e})=>e.space} * 1.1); }
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
        `}};i(we,"$ManualTheme");let K=we;const ps=t(K);t(H,De)(ps);const ye=class ye extends Ee{constructor(){super(...arguments),this.style=f.header`
        .pd-chapter.pa-cover { margin-block: 0; }
        .pa-cover .pd-title {
            font-family: ${({theme:e})=>e.serif};
            font-size: calc(1.8 * ${({theme:e})=>e.size});
            font-weight: 600;
            line-height: 1.04;
            color: ${({theme:e})=>e.heading};
        }
    `}};i(ye,"$Banner");let L=ye;const ve=class ve extends D{constructor(){super(...arguments),this.style=f.nav`
        .pd-chapter.pa-table-of-contents {
            margin-block: 0;
            color: ${({theme:e})=>e.barDim};
        }
        .pa-table-of-contents .pd-section { margin-block: ${({theme:e})=>e.space} 0; }
        .pa-table-of-contents .pd-heading {
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
        .pa-table-of-contents .pd-paragraph.pa-entry {
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
        .pa-table-of-contents .pd-paragraph.pa-entry::before {
            content: '';
            position: absolute;
            inset-inline-start: calc(${({theme:e})=>e.space} * 0.375);
            width: calc(${({theme:e})=>e.space} * 0.375);
            height: calc(${({theme:e})=>e.space} * 0.375);
            border-radius: 50%;
            background: ${({theme:e})=>e.sea};
        }
        .pa-table-of-contents .pd-paragraph.pa-entry.pa-open { background: ${({theme:e})=>e.barOn}; }
        .pa-table-of-contents .pa-reference.pa-reference { color: inherit; text-decoration: none; }
    `}};i(ve,"$Sidebar");let q=ve;const gs=t(L),$s=t(q);export{x as $,gs as B,us as D,Ne as I,b as O,$s as S,fs as T,O as a,v as b,D as c,E as d};
