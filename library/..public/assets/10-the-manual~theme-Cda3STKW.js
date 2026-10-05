var De=Object.defineProperty;var i=(d,e)=>De(d,"name",{value:e,configurable:!0});import{$ as a,u as $,W as P,B as Ae,j as t,G as Ne,s as y,f as p,c as L,r as D,t as h,J as ye,v as l,R as v,K as ve,S as xe,d as f,N as _e,O as M,x as we,Q as Be,T as je,q as ke,U as Oe,V as We,X as Q}from"./index-CAgF6Vkk.js";const H=class H extends ${constructor(){super(...arguments),this.$identifier="",this.$type=""}get name(){return`${this.$identifier}${this.$type}`}write(){const e=a(P),s=a(Ae);return t.jsxs(t.Fragment,{children:[t.jsx(e,{children:this.name}),t.jsx(s,{identifier:this.$identifier,type:this.$type,numbered:!0})]})}$Define(){super.$Define(),this.classes.add(this,"pd-listing")}};i(H,"$Listing");let A=H;const Fe=a(A),Y=class Y extends Ne{constructor(){super(...arguments),this.font="'Inter', system-ui, sans-serif",this.mono="'JetBrains Mono', ui-monospace, monospace",this.size="0.90625rem",this.leading="1.6",this.measure="44rem",this.space="1.5rem",this.side="15.5rem",this.narrow="48rem",this.ink="#1a1f36",this.heading="#1a1f36",this.capital="#0a7a70",this.lit="#0a7a70",this.soft="#4f566b",this.faint="#8792a2",this.paper="#ffffff",this.panel="#f7f8fa",this.line="#e6e8ee",this.rule="#e6e8ee",this.edge="transparent",this.accent="#0a7a70",this.tint="#e3f4f1",this.night="#0f2a33",this.dusk="#17363f",this.glow="#cfe6e3",this.dim="#4f7672",this.keyword="#8ad7ff",this.string="#ffd48a",this.type="#9be3d6",this.comment="#5f8a86",this.serif="'Cormorant Garamond', Georgia, serif",this.haze="#a9bcc1",this.sky="#8fc8dc",this.sea="#4e9eb9",this.opal="#c8f4fb",this.me="#e8590c",this.glass="rgba(255, 255, 255, 0.62)",this.wash="linear-gradient(105deg, #e2f6fb 0%, #ecf0fd 52%, #fae9f4 100%)",this.binding="linear-gradient(160deg, #16303a, #0c1b1f)",this.shadow="0 0.75rem 1.4rem -0.9rem rgba(12, 27, 31, 0.55)",this.initial="'D'",this.volume="11.5rem",this.style=y.div`${this.parts()}`}parts(){return[this.page(),this.writing(),this.links(),this.figures(),this.listings(),this.choices(),this.turns()]}page(){return p`
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
        `}choices(){return p`
            .pd-choice {
                font: inherit;
                color: ${({theme:e})=>e.soft};
                background: ${({theme:e})=>e.paper};
                border: thin solid ${({theme:e})=>e.line};
                border-radius: calc(${({theme:e})=>e.space} / 4);
                padding: calc(${({theme:e})=>e.space} / 8) calc(${({theme:e})=>e.space} / 2);
                cursor: pointer;
            }
            .pd-choice[aria-pressed='true'] {
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
        `}};i(Y,"$DougsTheme");let w=Y;const Re=a(w);var Ge=Object.defineProperty,Te=Object.getOwnPropertyDescriptor,Ee=i((d,e,s,n)=>{for(var r=Te(e,s),o=d.length-1,c;o>=0;o--)(c=d[o])&&(r=c(e,s,r)||r);return r&&Ge(e,s,r),r},"__decorateClass$4");const Z=class Z extends L{constructor(){super(...arguments),this.specification=new j,this.themeProvider=!0,this.style=y.div`
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
    `}defines(e){super.defines(e),e.classes.add(this,"pa-outlined")}erase(e){super.erase(e),e.classes.revert(this)}};i(Z,"$Outlined");let N=Z;const I=class I extends D{$saidOfABook(e){h(e instanceof ye,"outlined is said of a book, and this is not one")}};i(I,"OutlinedSpecification");let j=I;Ee([l("outlined is said of a book")],j.prototype,"$saidOfABook");const Je=a(N),S=class S extends ${write(){const e=this.book.author,s=a(P),n=a(v);return t.jsxs(t.Fragment,{children:["by ",t.jsxs(s,{children:[t.jsx(n,{children:e.means.identifier}),e.name]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-byline")}};i(S,"$Byline");let _=S;const ee=class ee extends ${write(){const e=this.book.subject,s=a(P),n=a(v);return t.jsxs(t.Fragment,{children:["filed under ",t.jsxs(s,{children:[t.jsx(n,{children:e.means.identifier}),e.name]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-filed-under")}};i(ee,"$FiledUnder");let B=ee;const Ke=a(_),qe=a(B),se=class se extends ve{get on(){return this.book.is(this.$of)}$Choice(...e){this.$Writing(...e),this._button=s=>t.jsx("button",{type:"button","aria-pressed":this.on,onClick:i(()=>this.press(),"onClick"),...s}),this.containers.replace(this,"span",this._button)}press(){const e=this.book,s=[e.$is].flat();e.$is=this.on?s.filter(n=>n!==this.$of):[this.$of,...s]}$Define(){super.$Define(),this.classes.add(this,"pd-choice")}};i(se,"$Choice");let k=se;const te=class te extends k{press(){const e=this.book,s=[e.$is].flat().filter(n=>!this.$among.includes(n));e.$is=[this.$of,...s]}};i(te,"$Pick");let W=te;const ze=a(k),ds=a(W);var Le=Object.defineProperty,Me=Object.getOwnPropertyDescriptor,Qe=i((d,e,s,n)=>{for(var r=Me(e,s),o=d.length-1,c;o>=0;o--)(c=d[o])&&(r=c(e,s,r)||r);return r&&Le(e,s,r),r},"__decorateClass$3");const ae=class ae extends D{$saidOfABook(e){h(e instanceof b,"this is said of a book of this library, and here it is said of something else")}};i(ae,"OfABookSpecification");let m=ae;Qe([l("this is said of a book of this library")],m.prototype,"$saidOfABook");const re=class re extends L{constructor(){super(...arguments),this.specification=new m,this.themeProvider=!0,this.style=y.div`${this.parts()}`}defines(e){super.defines(e),e.classes.add(this,"pa-paged"),e.open!==void 0&&e.classes.add(this,"pa-turned")}erase(e){super.erase(e),e.classes.revert(this)}parts(){return[this.paging()]}paging(){return p`
            .pd-page:not(.pd-open) { display: none; }
        `}};i(re,"$Paged");let O=re;const Ce=a(O),ie=class ie extends ve{write(){const e=this.book.chapters;return`${e.indexOf(this.chapter)+1} of ${e.length}`}$Define(){super.$Define(),this.classes.add(this,"pd-folio")}};i(ie,"$Folio");let F=ie;const ne=class ne extends ${get before(){const e=this.book.chapters;return e[e.indexOf(this.chapter)-1]??this.chapter}get after(){const e=this.book.chapters;return e[e.indexOf(this.chapter)+1]??this.chapter}write(){const e=a(P),s=a(Ue),n=a(this.before===this.chapter?xe:v),r=a(this.after===this.chapter?xe:v);return t.jsxs(t.Fragment,{children:[t.jsxs(e,{children:[t.jsx(n,{children:this.before.mention.identifier}),"← ",this.before.title.name]}),t.jsx(s,{}),t.jsxs(e,{children:[t.jsx(r,{children:this.after.mention.identifier}),this.after.title.name," →"]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-catchword")}};i(ne,"$Catchword");let R=ne;const Ue=a(F),Ve=a(R);var Xe=Object.defineProperty,He=Object.getOwnPropertyDescriptor,U=i((d,e,s,n)=>{for(var r=He(e,s),o=d.length-1,c;o>=0;o--)(c=d[o])&&(r=c(e,s,r)||r);return r&&Xe(e,s,r),r},"__decorateClass$2");const oe=class oe extends ye{constructor(){super(...arguments),this.specification=new u}get chapters(){return this.text.find(f).filter(e=>[...e.classes].includes("pd-canonical"))}get placed(){return[this.cover,this.synopsis,this.table,...this.chapters]}get open(){return this.$bookmark===void 0?void 0:this.named(this.$bookmark)}write(){return this.text.find(f).map((e,s)=>{const n=a(e);return t.jsxs(_e.Fragment,{children:[t.jsx(n,{}),e===this.cover&&this.byline(),e===this.cover&&this.filed(),e===this.cover&&this.choices(),this.listings(e)]},s)})}named(e){return this.chapters.find(s=>s.mention?.identifier===e||this.sections(s).some(n=>n.mention?.identifier===e))}byline(){const e=a(Ke);return t.jsx(e,{chapter:this.cover})}filed(){const e=a(qe);return t.jsx(e,{chapter:this.cover})}choices(){const e=a(ze);return t.jsx(e,{chapter:this.cover,of:Je,children:"outline"})}front(e){return t.jsx("div",{className:this.open===void 0?"pd-page pd-front pd-open":"pd-page pd-front",children:e})}pages(){return this.chapters.map((e,s)=>{const n=a(e);return t.jsxs("div",{className:e===this.open?"pd-page pd-open":"pd-page",children:[t.jsx("div",{className:"pd-words",children:t.jsx(n,{})}),t.jsx("div",{className:"pd-files",children:this.listings(e)})]},s)})}listings(e){const s=a(Fe);return e.annotations.find(M).reverse().map((n,r)=>t.jsx(s,{chapter:e,identifier:n.$identifier,type:n.$type},r))}sections(e){return e.text.find(we).flatMap(s=>[s,...this.sections(s)])}turn(){this.bookmark!==this.cover&&super.turn()}$Define(){super.$Define();const e=a(Ce);this.annotations.add(this,t.jsx(e,{}))}$Bound(){const e=a(Ve);for(const s of this.chapters)s.text.add(this,t.jsx(e,{}));super.$Bound()}};i(oe,"$DougsBook");let b=oe;const de=class de extends Be{$holdsOnlyChapters(e){h([...e.text].every(s=>s instanceof f),"a book of this library holds only chapters, and this one holds something else")}$placesEveryChapter(e){h(e.text.find(f).every(s=>e.placed.includes(s)),"a book of this library has a place for every chapter it holds, and this one holds a chapter it places nowhere")}$onlyAChapterAppends(e){h(e.text.find(f).every(s=>e.chapters.includes(s)||!s.is(M)),"only an ordinary chapter appends a file, and here a cover, a synopsis or a table of contents appends one")}};i(de,"DougsBookSpecification");let u=de;U([l("a book of this library holds only chapters")],u.prototype,"$holdsOnlyChapters");U([l("a book of this library has a place for every chapter it holds")],u.prototype,"$placesEveryChapter");U([l("only an ordinary chapter appends a file")],u.prototype,"$onlyAChapterAppends");const Ye=a(b);a(Ye,je)(Re);const ce=class ce extends L{constructor(){super(...arguments),this.specification=new m,this.themeProvider=!0,this.style=y.div`
        .pd-book.pa-code-forward .pd-page.pd-open { grid-template-columns: calc(1.4 * ${({theme:e})=>e.side}) minmax(0, 1fr); }
        .pd-book.pa-code-forward .pd-files { width: auto; }
    `}defines(e){super.defines(e),e.classes.add(this,"pa-code-forward")}erase(e){super.erase(e),e.classes.revert(this)}};i(ce,"$CodeForward");let G=ce;const Ze=a(G),pe=class pe extends b{write(){const e=a(this.cover),s=a(this.synopsis),n=a(this.table);return t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"pd-side",children:[this.filed(),t.jsx(e,{}),this.byline(),t.jsx("div",{className:"pd-choices",children:this.choices()}),t.jsx(n,{})]}),t.jsxs("div",{className:"pd-pages",children:[this.front(t.jsx("div",{className:"pd-words",children:t.jsx(s,{})})),this.pages()]})]})}choices(){const e=a(ze);return t.jsxs(t.Fragment,{children:[super.choices(),t.jsx(e,{chapter:this.cover,of:Ze,children:"code forward"})]})}};i(pe,"$Manual");let T=pe;const he=class he extends O{defines(e){super.defines(e),e.classes.add(this,"pa-spread")}parts(){return[...super.parts(),this.columns(),this.spread(),this.narrow()]}columns(){return p`
            .pd-book.pa-spread {
                display: grid;
                grid-template-columns: ${({theme:e})=>e.side} minmax(0, 1fr);
                grid-template-areas: 'side pages';
                height: 100vh;
            }
            .pa-spread .pd-side { grid-area: side; overflow-y: auto; }
            .pa-spread .pd-pages { grid-area: pages; min-height: 0; }
            .pa-spread .pd-choices {
                display: flex;
                flex-wrap: wrap;
                gap: calc(${({theme:e})=>e.space} / 4);
            }
        `}spread(){return p`
            .pa-spread .pd-page.pd-open {
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
                .pa-spread .pd-page.pd-open { display: block; height: auto; }
                .pa-spread .pd-files { width: auto; }
                .pa-spread.pa-turned .pa-table-of-contents { display: none; }
            }
        `}};i(he,"$Spread");let E=he;const V=a(T),Ie=a(E);a(V,Ce)(Ie);var Se=Object.defineProperty,es=Object.getOwnPropertyDescriptor,X=i((d,e,s,n)=>{for(var r=es(e,s),o=d.length-1,c;o>=0;o--)(c=d[o])&&(r=c(e,s,r)||r);return r&&Se(e,s,r),r},"__decorateClass$1");const le=class le extends ke{constructor(){super(...arguments),this.specification=new g}get date(){return this.text.find(Oe)[0]}defines(e){e.classes.add(this,"pa-dated")}erase(e){e.classes.revert(this)}note(){const e=a(this.date);return t.jsx(e,{})}};i(le,"$Dated");let x=le;const fe=class fe extends D{$saidOfAChapter(e){h(e instanceof f,"dated is said of a chapter, and this is not one")}$datedOnce(e){h(e.annotations.containsOne(x),"a chapter is dated once, and this one is dated more than once")}$givenOneDate(e){h(e.annotations.expressed(x)?.text.find(Oe).length===1,"a dated chapter is given one date, and this one is given none or more than one")}};i(fe,"DatedSpecification");let g=fe;X([l("dated is said of a chapter")],g.prototype,"$saidOfAChapter");X([l("a chapter is dated once")],g.prototype,"$datedOnce");X([l("a dated chapter is given one date")],g.prototype,"$givenOneDate");const cs=a(x);var ss=Object.defineProperty,ts=Object.getOwnPropertyDescriptor,as=i((d,e,s,n)=>{for(var r=ts(e,s),o=d.length-1,c;o>=0;o--)(c=d[o])&&(r=c(e,s,r)||r);return r&&ss(e,s,r),r},"__decorateClass");const ue=class ue extends ke{constructor(){super(...arguments),this.specification=new C}get leads(){const e=this.parent.annotations.expressed(Q).identifier;return this.book.named(e)}defines(e){e.classes.add(this,"pa-entry"),this.leads!==void 0&&this.leads===this.book.open&&e.classes.add(this,"pa-open")}erase(e){e.classes.revert(this)}};i(ue,"$Entry");let z=ue;const ge=class ge extends We{get entries(){return this.chapter.text.find(we).flatMap(s=>s.text.find($)).filter(s=>s.is(Q))}$Bound(){const e=a(Pe);for(const s of this.entries)s.annotations.add(this,t.jsx(e,{}));super.$Bound()}};i(ge,"$Index");let J=ge;const $e=class $e extends D{$saidOfAnEntry(e){h(e instanceof $&&e.is(Q),"an entry is said of a paragraph that leads somewhere, and this is not one")}};i($e,"EntrySpecification");let C=$e;as([l("an entry is said of a paragraph that leads somewhere")],C.prototype,"$saidOfAnEntry");const Pe=a(z);a(J);const me=class me extends z{constructor(){super(...arguments),this.label=y.span.attrs({className:"pa-file-type"})``}get type(){return this.leads?.annotations.find(M)[0]?.$type??""}note(){const e=this.label;return t.jsx(e,{children:this.type})}};i(me,"$FileEntry");let K=me;const rs=a(K);a(V,Pe)(rs);const be=class be extends w{constructor(){super(...arguments),this.measure="58ch"}parts(){return[...super.parts(),this.index(),this.words(),this.small()]}index(){return p`
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
            .pd-side .pd-choices { margin-block-start: calc(${({theme:e})=>e.space} / 2); }
            .pd-side .pd-choice { font-size: calc(0.9 * ${({theme:e})=>e.size}); }
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
        `}};i(be,"$ManualTheme");let q=be;const is=a(q);a(V,je)(is);export{b as $,cs as D,m as O,ds as P,Ce as a,O as b,w as c,J as d,T as e};
