var ks=Object.defineProperty;var i=(d,e)=>ks(d,"name",{value:e,configurable:!0});import{$ as t,w as m,W as H,E as ws,j as a,K as vs,s as $,f as c,c as E,r as b,t as l,N as ds,u as h,R as P,O as be,Q as js,v as g,o as Os,n as G,M as T,S as os,d as y,U as ge,y as ps,V as Ds,T as cs,X as ls,Y as me,g as Ps,x as zs}from"./index-xg9LJFXI.js";const ke=class ke extends m{constructor(){super(...arguments),this.$identifier="",this.$type=""}get name(){return`${this.$identifier}${this.$type}`}write(){const e=t(H),s=t(ws);return a.jsxs(a.Fragment,{children:[a.jsx(e,{children:this.name}),a.jsx(s,{identifier:this.$identifier,type:this.$type,numbered:!0})]})}$Define(){super.$Define(),this.classes.add(this,"pd-listing")}};i(ke,"$Listing");let K=ke;const Cs=t(K),we=class we extends vs{constructor(){super(...arguments),this.font="'Inter', system-ui, sans-serif",this.prose="'Inter', system-ui, sans-serif",this.mono="'JetBrains Mono', ui-monospace, monospace",this.size="0.90625rem",this.leading="1.6",this.measure="44rem",this.side="15.5rem",this.space="1.5rem",this.sideColumn="256px",this.bothColumn="240px",this.twoColumn="236px",this.cardsColumn="244px",this.railColumn="68px",this.barHeight="50px",this.narrow="48rem",this.colour="#0c1b1f",this.night="#0c1b1f",this.deep="#14323c",this.blue="#166178",this.sea="#4e9eb9",this.sky="#8fc8dc",this.opal="#c8f4fb",this.pale="#e3f5fa",this.mist="#f1f7f9",this.white="#ffffff",this.ink="#10252c",this.soft="#516770",this.line="#dbe7ec",this.me="#e8590c",this.wash="linear-gradient(105deg, #e2f6fb 0%, #ecf0fd 52%, #fae9f4 100%)",this.serif="'Cormorant Garamond', Georgia, serif",this.darkBar="#0c1b1f",this.darkBarInk="#ffffff",this.darkBarDim="#a9bcc1",this.darkBarOn="rgba(255, 255, 255, 0.11)",this.darkBarLine="#1d3339",this.darkMark="#c8f4fb",this.darkMarkInk="#0c1b1f",this.lightBar="#ffffff",this.lightBarInk="#10252c",this.lightBarDim="#516770",this.lightBarOn="#e3f5fa",this.lightBarLine="#dbe7ec",this.lightMark="#0c1b1f",this.lightMarkInk="#ffffff",this.heading="#10252c",this.capital="#166178",this.lit="#166178",this.faint="#8792a2",this.paper="#ffffff",this.panel="#f1f7f9",this.rule="#dbe7ec",this.edge="transparent",this.barFill="#f1f7f9",this.barInk="#10252c",this.barDim="#516770",this.barOn="#e3f5fa",this.barLine="#dbe7ec",this.accent="#166178",this.tint="#e3f5fa",this.dusk="#14323c",this.glow="#cfe6e3",this.dim="#4f7672",this.keyword="#8ad7ff",this.string="#ffd48a",this.type="#9be3d6",this.comment="#5f8a86",this.haze="#a9bcc1",this.glass="rgba(255, 255, 255, 0.62)",this.binding="linear-gradient(160deg, #16303a, #0c1b1f)",this.spine="inset 5px 0 0 rgba(0, 0, 0, 0.14), inset 6px 0 0 rgba(255, 255, 255, 0.12), 0 10px 20px -10px rgba(0, 0, 0, 0.45)",this.shadow="0 0.75rem 1.4rem -0.9rem rgba(12, 27, 31, 0.55)",this.initial="'D'",this.volume="11.5rem",this.card="18rem",this.photo="7rem",this.style=$.div`${this.parts()}`}parts(){return[this.page(),this.writing(),this.links(),this.figures(),this.listings(),this.switches(),this.turns(),this.library(),this.head(),this.holds(),this.tones()]}page(){return c`
            font-family: ${({theme:e})=>e.font};
            font-size: ${({theme:e})=>e.size};
            line-height: ${({theme:e})=>e.leading};
            color: ${({theme:e})=>e.ink};
            background: ${({theme:e})=>e.paper};
            min-height: 100vh;
        `}writing(){return c`
            .pd-leaves { font-family: ${({theme:e})=>e.prose}; }
            .pd-chapter, .pd-section, .pd-paragraph { margin-block: ${({theme:e})=>e.space}; }
            .pd-chapter { max-width: ${({theme:e})=>e.measure}; }
        `}links(){return c`
            .pa-reference { color: ${({theme:e})=>e.accent}; }
            .pa-reference.pa-self-reference { color: inherit; text-decoration: none; }
        `}figures(){return c`
            .pd-image img { display: block; max-width: 100%; height: auto; }
            .pd-code { font-family: ${({theme:e})=>e.mono}; overflow-x: auto; }
        `}listings(){return c`
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
        `}switches(){return c`
            .pd-switch {
                font: inherit;
                color: ${({theme:e})=>e.soft};
                background: ${({theme:e})=>e.paper};
                border: thin solid ${({theme:e})=>e.line};
                border-radius: calc(${({theme:e})=>e.space} / 4);
                padding: calc(${({theme:e})=>e.space} / 8) calc(${({theme:e})=>e.space} / 2);
                cursor: pointer;
            }
            .pd-word.pd-switch[aria-pressed='true'] {
                color: ${({theme:e})=>e.white};
                background: ${({theme:e})=>e.colour};
                border-color: ${({theme:e})=>e.colour};
            }
        `}library(){return c`
            .pd-library { padding: calc(${({theme:e})=>e.space} * 0.375) calc(${({theme:e})=>e.space} * 0.75); }
            .pd-library .pd-paragraph, .pd-me .pd-paragraph { margin-block: 0; }
            .pd-me { padding: 0 calc(${({theme:e})=>e.space} * 0.75); }
            .pd-library .pd-filed-under, .pd-me .pd-byline {
                display: flex;
                align-items: center;
                gap: calc(${({theme:e})=>e.space} * 0.4);
                font-size: calc(0.83 * ${({theme:e})=>e.size});
            }
            .pd-library .pd-word, .pd-me .pd-word { font-weight: 500; }
            .pd-library .pd-filed-under .pd-word {
                font-family: ${({theme:e})=>e.serif};
                font-size: calc(1.45 * ${({theme:e})=>e.size});
                font-weight: 600;
                line-height: 1;
            }
            .pd-library .pa-reference, .pd-me .pa-reference { color: inherit; text-decoration: none; }
            .pd-library .pd-filed-under::before, .pd-me .pd-byline::before {
                content: ${({theme:e})=>e.initial};
                display: grid;
                place-items: center;
                width: calc(${({theme:e})=>e.space} * 1.3);
                height: calc(${({theme:e})=>e.space} * 1.3);
                font-size: ${({theme:e})=>e.size};
                font-weight: 600;
            }
            .pd-library .pd-filed-under::before { border-radius: calc(${({theme:e})=>e.space} / 3); }
            .pd-me .pd-byline::before {
                border-radius: 50%;
                background: ${({theme:e})=>e.me};
                color: ${({theme:e})=>e.white};
            }
            .pd-subjects { min-width: 0; }
            .pd-subjects .pd-section {
                display: flex;
                gap: calc(${({theme:e})=>e.space} / 12);
                margin-block: 0;
            }
            .pd-subjects .pd-paragraph {
                padding: calc(${({theme:e})=>e.space} * 0.29) calc(${({theme:e})=>e.space} * 0.42);
                border-radius: calc(${({theme:e})=>e.space} / 3);
                font-size: calc(0.93 * ${({theme:e})=>e.size});
                white-space: nowrap;
            }
            .pd-subjects .pa-reference { color: inherit; text-decoration: none; }
        `}head(){return c`
            .pd-head { padding: calc(${({theme:e})=>e.space} * 0.83) calc(${({theme:e})=>e.space} * 1.17) calc(${({theme:e})=>e.space} * 0.58); }
            .pd-head .pd-chapter { margin-block: 0; }
            .pd-head .pd-title {
                font-family: ${({theme:e})=>e.serif};
                font-size: calc(1.8 * ${({theme:e})=>e.size});
                font-weight: 600;
                line-height: 1.04;
                color: ${({theme:e})=>e.heading};
            }
        `}holds(){return c`
            .pd-holds { padding: calc(${({theme:e})=>e.space} * 0.83) calc(${({theme:e})=>e.space} / 2); }
            .pd-holds .pd-chapter { margin-block: 0; color: ${({theme:e})=>e.barDim}; }
            .pd-holds .pd-section { margin-block: ${({theme:e})=>e.space} 0; }
            .pd-holds .pd-heading {
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
            .pd-holds .pd-paragraph.pa-entry {
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
            .pd-holds .pd-paragraph.pa-entry::before {
                content: '';
                position: absolute;
                inset-inline-start: calc(${({theme:e})=>e.space} * 0.375);
                width: calc(${({theme:e})=>e.space} * 0.375);
                height: calc(${({theme:e})=>e.space} * 0.375);
                border-radius: 50%;
                background: ${({theme:e})=>e.colour};
            }
            .pd-holds .pd-paragraph.pa-entry.pa-open { background: ${({theme:e})=>e.barOn}; }
            .pd-holds .pa-reference.pa-reference { color: inherit; text-decoration: none; }
        `}tones(){return c`
            .pa-dark .pd-library, .pa-dark .pd-me, .pa-dark .pd-holds {
                background: ${({theme:e})=>e.darkBar};
                color: ${({theme:e})=>e.darkBarInk};
            }
            .pa-dark .pd-library .pd-word, .pa-dark .pd-me .pd-word { color: ${({theme:e})=>e.darkBarInk}; }
            .pa-dark .pd-library .pd-label, .pa-dark .pd-me .pd-label, .pa-dark .pd-holds .pd-chapter, .pa-dark .pd-holds .pd-heading { color: ${({theme:e})=>e.darkBarDim}; }
            .pa-dark .pd-holds { border-inline-end: thin solid ${({theme:e})=>e.darkBarLine}; }
            .pa-dark .pd-holds .pd-paragraph.pa-entry { color: ${({theme:e})=>e.darkBarInk}; }
            .pa-dark .pd-holds .pd-paragraph.pa-entry.pa-open { background: ${({theme:e})=>e.darkBarOn}; }
            .pa-dark .pd-library .pd-filed-under::before {
                background: ${({theme:e})=>e.darkMark};
                color: ${({theme:e})=>e.darkMarkInk};
            }
            .pa-light .pd-library, .pa-light .pd-me, .pa-light .pd-holds {
                background: ${({theme:e})=>e.lightBar};
                color: ${({theme:e})=>e.lightBarInk};
            }
            .pa-light .pd-library { border-block-end: thin solid ${({theme:e})=>e.lightBarLine}; }
            .pa-light .pd-library .pd-word, .pa-light .pd-me .pd-word { color: ${({theme:e})=>e.lightBarInk}; }
            .pa-light .pd-library .pd-label, .pa-light .pd-me .pd-label, .pa-light .pd-holds .pd-chapter, .pa-light .pd-holds .pd-heading { color: ${({theme:e})=>e.lightBarDim}; }
            .pa-light .pd-holds { border-inline-end: thin solid ${({theme:e})=>e.lightBarLine}; }
            .pa-light .pd-holds .pd-paragraph.pa-entry { color: ${({theme:e})=>e.lightBarInk}; }
            .pa-light .pd-holds .pd-paragraph.pa-entry.pa-open { background: ${({theme:e})=>e.lightBarOn}; }
            .pa-light .pd-library .pd-filed-under::before {
                background: ${({theme:e})=>e.lightMark};
                color: ${({theme:e})=>e.lightMarkInk};
            }
            .pa-white-over-black .pd-library, .pa-white-over-black .pd-me {
                background: ${({theme:e})=>e.lightBar};
                color: ${({theme:e})=>e.lightBarInk};
            }
            .pa-white-over-black .pd-library { border-block-end: thin solid ${({theme:e})=>e.lightBarLine}; }
            .pa-white-over-black .pd-library .pd-word, .pa-white-over-black .pd-me .pd-word { color: ${({theme:e})=>e.lightBarInk}; }
            .pa-white-over-black .pd-library .pd-label, .pa-white-over-black .pd-me .pd-label { color: ${({theme:e})=>e.lightBarDim}; }
            .pa-white-over-black .pd-library .pd-filed-under::before {
                background: ${({theme:e})=>e.lightMark};
                color: ${({theme:e})=>e.lightMarkInk};
            }
            .pa-white-over-black .pd-holds {
                background: ${({theme:e})=>e.darkBar};
                color: ${({theme:e})=>e.darkBarInk};
                border-inline-end: thin solid ${({theme:e})=>e.darkBarLine};
            }
            .pa-white-over-black .pd-holds .pd-chapter, .pa-white-over-black .pd-holds .pd-heading { color: ${({theme:e})=>e.darkBarDim}; }
            .pa-white-over-black .pd-holds .pd-paragraph.pa-entry { color: ${({theme:e})=>e.darkBarInk}; }
            .pa-white-over-black .pd-holds .pd-paragraph.pa-entry.pa-open { background: ${({theme:e})=>e.darkBarOn}; }
        `}turns(){return c`
            .pd-paragraph.pd-turn {
                display: flex;
                justify-content: space-between;
                gap: ${({theme:e})=>e.space};
                font-size: calc(0.93 * ${({theme:e})=>e.size});
            }
            .pd-turn .pa-reference { font-weight: 500; text-decoration: none; }
            .pd-turn .pd-count { color: ${({theme:e})=>e.faint}; }
        `}};i(we,"$LibraryBookTheme");let z=we;const Bs=t(z);var Is=Object.defineProperty,As=Object.getOwnPropertyDescriptor,Ms=i((d,e,s,o)=>{for(var r=As(e,s),n=d.length-1,p;n>=0;n--)(p=d[n])&&(r=p(e,s,r)||r);return r&&Is(e,s,r),r},"__decorateClass$7");const ve=class ve extends E{constructor(){super(...arguments),this.specification=new C,this.themeProvider=!0,this.style=$.div`
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
    `}defines(e){super.defines(e),e.classes.add(this,"pa-outlined")}erase(e){super.erase(e),e.classes.revert(this)}};i(ve,"$Outlined");let J=ve;const je=class je extends b{$saidOfABook(e){l(e instanceof ds,"outline is said of a book, and this is not one")}};i(je,"OutlineSpecification");let C=je;Ms([h("outline is said of a book")],C.prototype,"$saidOfABook");const Ns=t(J),Oe=class Oe extends m{write(){const e=this.book.author,s=t(H),o=t(P);return a.jsxs(a.Fragment,{children:["by ",a.jsxs(s,{children:[a.jsx(o,{children:e.means.identifier}),e.name]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-byline")}};i(Oe,"$Byline");let Q=Oe;const De=class De extends m{write(){const e=this.book.subject,s=t(H),o=t(P);return a.jsxs(a.Fragment,{children:["filed under ",a.jsxs(s,{children:[a.jsx(o,{children:e.means.identifier}),e.name]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-filed-under")}};i(De,"$FiledUnder");let U=De;const Ws=t(Q),Fs=t(U),Pe=class Pe extends be{get on(){return this.book.is(this.$of)}$Switch(...e){this.$Writing(...e),this._button=s=>a.jsx("button",{type:"button","aria-pressed":this.on,onClick:i(()=>this.press(),"onClick"),...s}),this.containers.replace(this,"span",this._button)}press(){const e=this.book,s=[e.$is].flat();e.$is=this.on?s.filter(o=>o!==this.$of):[this.$of,...s]}$Define(){super.$Define(),this.classes.add(this,"pd-switch")}};i(Pe,"$Switch");let B=Pe;const ze=class ze extends B{press(){const e=this.book,s=[e.$is].flat().filter(o=>!this.$among.includes(o));e.$is=[this.$of,...s]}};i(ze,"$Tab");let V=ze;const hs=t(B),ya=t(V);var Ls=Object.defineProperty,_s=Object.getOwnPropertyDescriptor,Rs=i((d,e,s,o)=>{for(var r=_s(e,s),n=d.length-1,p;n>=0;n--)(p=d[n])&&(r=p(e,s,r)||r);return r&&Ls(e,s,r),r},"__decorateClass$6");const Ce=class Ce extends b{$saidOfABook(e){l(e instanceof j,"this is said of a book of this library, and here it is said of something else")}};i(Ce,"OfABookSpecification");let u=Ce;Rs([h("this is said of a book of this library")],u.prototype,"$saidOfABook");const L=class L extends js{constructor(){super(...arguments),this.specification=new u,this.themeProvider=!0,this.style=$.div`${this.parts()}`}get pages(){return this.book.chapters}get open(){return this.book.open}defines(e){for(const s of e.annotations.after(this))s instanceof L&&e.annotations.express(s,!1);super.defines(e),e.classes.add(this,"pa-layout"),this.open!==void 0&&e.classes.add(this,"pa-turned")}erase(e){super.erase(e),e.classes.revert(this)}parts(){return[this.paging(),this.regions(),this.areas(),this.phone()]}paging(){return c`
            .pd-leaf:not(.pd-open) { display: none; }
        `}regions(){return c`
            .pd-book.pa-layout { display: grid; height: 100vh; }
            .pa-layout .pd-library {
                grid-area: library;
                display: flex;
                align-items: center;
                column-gap: calc(${({theme:e})=>e.space} / 4);
                min-width: 0;
            }
            .pa-layout .pd-me {
                grid-area: me;
                display: flex;
                align-items: center;
                column-gap: calc(${({theme:e})=>e.space} * 0.375);
            }
            .pa-layout .pd-holds { grid-area: holds; min-width: 0; overflow-y: auto; }
            .pa-layout .pd-head {
                grid-area: head;
                display: flex;
                flex-wrap: wrap;
                align-items: flex-end;
                justify-content: space-between;
                gap: calc(${({theme:e})=>e.space} * 0.42) calc(${({theme:e})=>e.space} * 0.83);
                min-width: 0;
            }
            .pa-layout .pd-switches {
                display: flex;
                flex-wrap: wrap;
                justify-content: flex-end;
                align-items: center;
                gap: calc(${({theme:e})=>e.space} / 3);
            }
            .pa-layout .pd-leaves { grid-area: leaves; min-width: 0; overflow-y: auto; }
            .pa-layout .pd-words .pd-chapter { scroll-margin-block-start: ${({theme:e})=>e.space}; }
        `}areas(){return c`
            .pd-book.pa-layout.pa-both-bars {
                grid-template-columns: ${({theme:e})=>e.bothColumn} minmax(0, 1fr);
                grid-template-rows: auto auto minmax(0, 1fr);
                grid-template-areas: 'library library' 'holds head' 'holds leaves';
            }
            .pd-book.pa-layout.pa-side-bar {
                grid-template-columns: ${({theme:e})=>e.sideColumn} minmax(0, 1fr);
                grid-template-rows: auto auto minmax(0, 1fr) auto;
                grid-template-areas: 'library head' 'library leaves' 'holds leaves' 'me leaves';
            }
            .pa-layout.pa-side-bar .pd-library { flex-direction: column; align-items: stretch; }
            .pd-book.pa-layout.pa-top-bar {
                grid-template-columns: minmax(0, 1fr);
                grid-template-rows: auto auto auto minmax(0, 1fr);
                grid-template-areas: 'library' 'head' 'holds' 'leaves';
            }
            .pa-layout.pa-top-bar .pd-holds { overflow: auto hidden; white-space: nowrap; scrollbar-width: none; }
            .pd-book.pa-layout.pa-two-bars {
                grid-template-columns: ${({theme:e})=>e.twoColumn} minmax(0, 1fr);
                grid-template-rows: auto auto minmax(0, 1fr);
                grid-template-areas: 'library library' 'head head' 'holds leaves';
            }
            .pd-book.pa-layout.pa-rail {
                grid-template-columns: ${({theme:e})=>e.railColumn} minmax(0, 1fr);
                grid-template-rows: auto auto minmax(0, 1fr) auto;
                grid-template-areas: 'library head' 'library holds' 'library leaves' 'me leaves';
            }
            .pa-layout.pa-rail .pd-library { flex-direction: column; align-items: center; }
            .pa-layout.pa-rail .pd-me { justify-content: center; }
            .pa-layout.pa-rail .pd-holds { overflow: auto hidden; white-space: nowrap; scrollbar-width: none; }
            .pd-book.pa-layout.pa-cards {
                grid-template-columns: ${({theme:e})=>e.cardsColumn} minmax(0, 1fr);
                grid-template-rows: auto auto minmax(0, 1fr);
                grid-template-areas: 'library library' 'holds head' 'holds leaves';
                column-gap: calc(${({theme:e})=>e.space} / 2);
                padding: 0 calc(${({theme:e})=>e.space} / 2) calc(${({theme:e})=>e.space} / 2);
                box-sizing: border-box;
            }
            .pa-layout.pa-cards .pd-holds { border-radius: calc(${({theme:e})=>e.space} * 0.67); }
            .pa-layout.pa-cards .pd-head { border-radius: calc(${({theme:e})=>e.space} * 0.67) calc(${({theme:e})=>e.space} * 0.67) 0 0; }
            .pa-layout.pa-cards .pd-leaves { border-radius: 0 0 calc(${({theme:e})=>e.space} * 0.67) calc(${({theme:e})=>e.space} * 0.67); }
            .pd-book.pa-layout.pa-both-bars .pd-me, .pd-book.pa-layout.pa-top-bar .pd-me, .pd-book.pa-layout.pa-two-bars .pd-me, .pd-book.pa-layout.pa-cards .pd-me {
                grid-area: library;
                justify-self: end;
                background: none;
            }
        `}phone(){return c`
            @media (max-width: ${({theme:e})=>e.narrow}) {
                .pd-book.pa-layout { display: flex; flex-direction: column; height: auto; }
                .pa-layout .pd-library {
                    position: sticky;
                    top: 0;
                    z-index: 4;
                    height: ${({theme:e})=>e.barHeight};
                    margin-inline-end: ${({theme:e})=>e.barHeight};
                    overflow: auto hidden;
                    white-space: nowrap;
                    scrollbar-width: none;
                }
                .pa-layout .pd-me {
                    position: fixed;
                    z-index: 5;
                    top: 0;
                    right: 0;
                    justify-content: center;
                    width: ${({theme:e})=>e.barHeight};
                    height: ${({theme:e})=>e.barHeight};
                }
                .pa-layout .pd-head { order: 1; flex-direction: column; align-items: stretch; }
                .pa-layout .pd-switches { justify-content: flex-start; }
                .pa-layout .pd-holds { order: 2; overflow: auto hidden; white-space: nowrap; scrollbar-width: none; }
                .pa-layout .pd-leaves { order: 3; overflow: visible; }
                .pa-layout.pa-turned .pa-table-of-contents { display: none; }
            }
        `}};i(L,"$Layout");let X=L;const Hs=t(X),_=class _ extends g{constructor(){super(...arguments),this.specification=new u}defines(e){for(const s of e.annotations.after(this))s instanceof _&&e.annotations.express(s,!1);e.classes.add(this,"pa-bars")}erase(e){e.classes.revert(this)}};i(_,"$Bars");let f=_;const Be=class Be extends f{defines(e){super.defines(e),e.classes.add(this,"pa-both-bars")}};i(Be,"$BothBars");let Y=Be;const Ie=class Ie extends f{defines(e){super.defines(e),e.classes.add(this,"pa-side-bar")}};i(Ie,"$SideBar");let q=Ie;const Ae=class Ae extends f{defines(e){super.defines(e),e.classes.add(this,"pa-top-bar")}};i(Ae,"$TopBar");let Z=Ae;const Me=class Me extends f{defines(e){super.defines(e),e.classes.add(this,"pa-two-bars")}};i(Me,"$TwoBars");let S=Me;const Ne=class Ne extends f{defines(e){super.defines(e),e.classes.add(this,"pa-rail")}};i(Ne,"$Rail");let ee=Ne;const We=class We extends f{defines(e){super.defines(e),e.classes.add(this,"pa-cards")}};i(We,"$Cards");let se=We;const fs=t(f),us=t(Y),Es=t(q),Gs=t(Z),Ts=t(S),Ks=t(ee),Js=t(se),R=class R extends g{constructor(){super(...arguments),this.specification=new u}defines(e){for(const s of e.annotations.after(this))s instanceof R&&e.annotations.express(s,!1);e.classes.add(this,"pa-tone")}erase(e){e.classes.revert(this)}};i(R,"$Tone");let x=R;const Fe=class Fe extends x{defines(e){super.defines(e),e.classes.add(this,"pa-dark")}};i(Fe,"$Dark");let ae=Fe;const Le=class Le extends x{defines(e){super.defines(e),e.classes.add(this,"pa-light")}};i(Le,"$Light");let te=Le;const _e=class _e extends x{defines(e){super.defines(e),e.classes.add(this,"pa-white-over-black")}};i(_e,"$WhiteOverBlack");let re=_e;const bs=t(x),gs=t(ae),Qs=t(te),Us=t(re),Vs=i(()=>a.jsxs(Os,{children:[a.jsx(G,{children:a.jsx(T,{children:"[Dougs Story](/dougs-story/)"})}),a.jsx(G,{children:a.jsx(T,{children:"[Dougs Design](/dougs-design/)"})}),a.jsx(G,{children:a.jsx(T,{children:"[Dougs Reference Manual](/dougs-reference-manual/)"})})]}),"Subjects");var Xs=Object.defineProperty,Ys=Object.getOwnPropertyDescriptor,qs=i((d,e,s,o)=>{for(var r=Ys(e,s),n=d.length-1,p;n>=0;n--)(p=d[n])&&(r=p(e,s,r)||r);return r&&Xs(e,s,r),r},"__decorateClass$5");const Re=class Re extends be{write(){const e=this.book.chapters;return`${e.indexOf(this.chapter)+1} of ${e.length}`}$Define(){super.$Define(),this.classes.add(this,"pd-count")}};i(Re,"$Count");let ie=Re;const He=class He extends g{constructor(){super(...arguments),this.specification=new v}defines(e){e.classes.add(this,"pa-before")}erase(e){e.classes.revert(this)}};i(He,"$Before");let ne=He;const Ee=class Ee extends g{constructor(){super(...arguments),this.specification=new v}defines(e){e.classes.add(this,"pa-after")}erase(e){e.classes.revert(this)}};i(Ee,"$After");let oe=Ee;const Ge=class Ge extends b{$saidOfAWordOfATurn(e){l(e instanceof be&&e.parent instanceof I,"this is said of a word of a turn, and here it is said of something else")}};i(Ge,"OfATurnSpecification");let v=Ge;qs([h("this is said of a word of a turn")],v.prototype,"$saidOfAWordOfATurn");const Zs=t(ie),Ss=t(ne),ea=t(oe),Te=class Te extends m{get before(){const e=this.book.chapters;return e[e.indexOf(this.chapter)-1]??this.chapter}get after(){const e=this.book.chapters;return e[e.indexOf(this.chapter)+1]??this.chapter}write(){const e=t(H),s=t(Zs),o=t(Ss),r=t(ea),n=t(this.before===this.chapter?os:P),p=t(this.after===this.chapter?os:P);return a.jsxs(a.Fragment,{children:[a.jsxs(e,{children:[a.jsx(o,{}),a.jsx(n,{children:this.before.mention.identifier}),"← ",this.before.title.name]}),a.jsx(s,{}),a.jsxs(e,{children:[a.jsx(r,{}),a.jsx(p,{children:this.after.mention.identifier}),this.after.title.name," →"]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-turn")}};i(Te,"$Turn");let I=Te;const sa=t(I);var aa=Object.defineProperty,ta=Object.getOwnPropertyDescriptor,$e=i((d,e,s,o)=>{for(var r=ta(e,s),n=d.length-1,p;n>=0;n--)(p=d[n])&&(r=p(e,s,r)||r);return r&&aa(e,s,r),r},"__decorateClass$4");const Ke=class Ke extends ds{constructor(){super(...arguments),this.specification=new k}get chapters(){return this.text.find(y).filter(e=>[...e.classes].includes("pd-canonical"))}get placed(){return[this.cover,this.synopsis,this.table,...this.chapters]}get open(){return this.$bookmark===void 0?void 0:this.named(this.$bookmark)}get arrangements(){return[us,Es,Gs,Ts,Ks,Js]}get tones(){return[gs,Qs,Us]}write(){return a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"pd-library",children:this.library()}),a.jsx("div",{className:"pd-me",children:this.byline()}),a.jsx("div",{className:"pd-holds",children:this.holds()}),a.jsx("div",{className:"pd-head",children:this.head()}),a.jsxs("div",{className:"pd-leaves",children:[this.front(),this.leaves()]})]})}library(){return a.jsxs(a.Fragment,{children:[this.filed(),this.subjects()]})}subjects(){return a.jsx("div",{className:"pd-subjects",children:a.jsx(Vs,{})})}holds(){const e=t(this.table);return a.jsx(e,{})}head(){const e=t(this.cover);return a.jsxs(a.Fragment,{children:[a.jsx(e,{}),a.jsx("div",{className:"pd-switches",children:this.switches()})]})}front(){return a.jsx("div",{className:this.open===void 0?"pd-leaf pd-front pd-open":"pd-leaf pd-front",children:this.opening()})}opening(){const e=t(this.synopsis);return a.jsx("div",{className:"pd-words",children:a.jsx(e,{})})}leaves(){return this.chapters.map((e,s)=>{const o=t(e);return a.jsxs("div",{className:e===this.open?"pd-leaf pd-open":"pd-leaf",children:[a.jsx("div",{className:"pd-words",children:a.jsx(o,{})}),a.jsx("div",{className:"pd-files",children:this.listings(e)})]},s)})}named(e){return this.chapters.find(s=>s.mention?.identifier===e||this.sections(s).some(o=>o.mention?.identifier===e))}byline(){const e=t(Ws);return a.jsx(e,{chapter:this.cover})}filed(){const e=t(Fs);return a.jsx(e,{chapter:this.cover})}switches(){const e=t(hs);return a.jsx(e,{chapter:this.cover,of:Ns,children:"outline"})}listings(e){const s=t(Cs);return e.annotations.find(ge).reverse().map((o,r)=>a.jsx(s,{chapter:e,identifier:o.$identifier,type:o.$type},r))}sections(e){return e.text.find(ps).flatMap(s=>[s,...this.sections(s)])}turn(){this.bookmark!==this.cover&&super.turn()}$Define(){super.$Define();const e=t(Hs),s=t(fs),o=t(bs);this.annotations.add(this,a.jsx(e,{}),a.jsx(s,{}),a.jsx(o,{}))}$Bound(){const e=t(sa);for(const s of this.chapters)s.text.add(this,a.jsx(e,{}));super.$Bound()}};i(Ke,"$LibraryBook");let j=Ke;const Je=class Je extends Ds{$holdsOnlyChapters(e){l([...e.text].every(s=>s instanceof y),"a book of this library holds only chapters, and this one holds something else")}$placesEveryChapter(e){l(e.text.find(y).every(s=>e.placed.includes(s)),"a book of this library has a place for every chapter it holds, and this one holds a chapter it places nowhere")}$onlyAChapterAppends(e){l(e.text.find(y).every(s=>e.chapters.includes(s)||!s.is(ge)),"only an ordinary chapter appends a file, and here a cover, a synopsis or a table of contents appends one")}};i(Je,"LibraryBookSpecification");let k=Je;$e([h("a book of this library holds only chapters")],k.prototype,"$holdsOnlyChapters");$e([h("a book of this library has a place for every chapter it holds")],k.prototype,"$placesEveryChapter");$e([h("only an ordinary chapter appends a file")],k.prototype,"$onlyAChapterAppends");const ye=t(j);t(ye,cs)(Bs);t(ye,fs)(us);t(ye,bs)(gs);const Qe=class Qe extends E{constructor(){super(...arguments),this.specification=new u,this.themeProvider=!0,this.style=$.div`
        .pd-book.pa-code-forward .pd-leaf.pd-open { grid-template-columns: calc(1.4 * ${({theme:e})=>e.side}) minmax(0, 1fr); }
        .pd-book.pa-code-forward .pd-files { width: auto; }
    `}defines(e){super.defines(e),e.classes.add(this,"pa-code-forward")}erase(e){super.erase(e),e.classes.revert(this)}};i(Qe,"$CodeForward");let de=Qe;const ra=t(de),Ue=class Ue extends E{constructor(){super(...arguments),this.specification=new u,this.themeProvider=!0,this.style=$.div`
        .pa-spread .pd-leaf.pd-open {
            display: grid;
            grid-template-columns: minmax(0, 1fr) auto;
            grid-template-areas: 'words files';
            height: 100%;
        }
        .pa-spread .pd-words { grid-area: words; overflow-y: auto; }
        .pa-spread .pd-files { grid-area: files; overflow-y: auto; width: calc(2.2 * ${({theme:e})=>e.side}); }
        .pa-spread .pd-files:empty { display: none; }
        @media (max-width: ${({theme:e})=>e.narrow}) {
            .pa-spread .pd-leaf.pd-open { display: block; height: auto; }
            .pa-spread .pd-files { width: auto; }
        }
    `}defines(e){super.defines(e),e.classes.add(this,"pa-spread")}erase(e){super.erase(e),e.classes.revert(this)}};i(Ue,"$Spread");let pe=Ue;const ia=t(pe),Ve=class Ve extends j{switches(){const e=t(hs);return a.jsxs(a.Fragment,{children:[super.switches(),a.jsx(e,{chapter:this.cover,of:ra,children:"code forward"})]})}$Define(){super.$Define();const e=t(ia);this.annotations.add(this,a.jsx(e,{}))}};i(Ve,"$Manual");let ce=Ve;const ms=t(ce);var na=Object.defineProperty,oa=Object.getOwnPropertyDescriptor,xe=i((d,e,s,o)=>{for(var r=oa(e,s),n=d.length-1,p;n>=0;n--)(p=d[n])&&(r=p(e,s,r)||r);return r&&na(e,s,r),r},"__decorateClass$3");const Xe=class Xe extends g{constructor(){super(...arguments),this.specification=new w}get date(){return this.text.find(ls)[0]}defines(e){e.classes.add(this,"pa-dated")}erase(e){e.classes.revert(this)}note(){const e=t(this.date);return a.jsx(e,{})}};i(Xe,"$Dated");let O=Xe;const Ye=class Ye extends b{$saidOfAChapter(e){l(e instanceof y,"dated is said of a chapter, and this is not one")}$datedOnce(e){l(e.annotations.containsOne(O),"a chapter is dated once, and this one is dated more than once")}$givenOneDate(e){l(e.annotations.expressed(O)?.text.find(ls).length===1,"a dated chapter is given one date, and this one is given none or more than one")}};i(Ye,"DatedSpecification");let w=Ye;xe([h("dated is said of a chapter")],w.prototype,"$saidOfAChapter");xe([h("a chapter is dated once")],w.prototype,"$datedOnce");xe([h("a dated chapter is given one date")],w.prototype,"$givenOneDate");const xa=t(O);var da=Object.defineProperty,pa=Object.getOwnPropertyDescriptor,$s=i((d,e,s,o)=>{for(var r=pa(e,s),n=d.length-1,p;n>=0;n--)(p=d[n])&&(r=p(e,s,r)||r);return r&&da(e,s,r),r},"__decorateClass$2");const qe=class qe extends g{constructor(){super(...arguments),this.specification=new N}get place(){return this.parent.annotations.expressed(me).identifier}get leads(){return this.book.named(this.place)}defines(e){e.classes.add(this,"pa-entry"),(this.place===this.book?.$bookmark||this.place===this.book.open?.mention?.identifier)&&e.classes.add(this,"pa-open")}erase(e){e.classes.revert(this)}};i(qe,"$Entry");let A=qe;const Ze=class Ze extends g{constructor(){super(...arguments),this.specification=new M}get entries(){return this.chapter.text.find(ps).flatMap(s=>s.text.find(m)).filter(s=>s.is(me))}$Bound(){const e=t(ys);for(const s of this.entries)s.annotations.add(this,a.jsx(e,{}));super.$Bound()}};i(Ze,"$Index");let le=Ze;const Se=class Se extends b{$saidOfATableOfContents(e){l(e.is(Ps),"an index is said of a table of contents, and this chapter is not one")}};i(Se,"IndexSpecification");let M=Se;$s([h("an index is said of a table of contents")],M.prototype,"$saidOfATableOfContents");const es=class es extends b{$saidOfAnEntry(e){l(e instanceof m&&e.is(me),"an entry is said of a paragraph that leads somewhere, and this is not one")}};i(es,"EntrySpecification");let N=es;$s([h("an entry is said of a paragraph that leads somewhere")],N.prototype,"$saidOfAnEntry");const ys=t(A),ka=t(le),ss=class ss extends A{constructor(){super(...arguments),this.label=$.span.attrs({className:"pa-file-type"})``}get type(){return this.leads?.annotations.find(ge)[0]?.$type??""}note(){const e=this.label;return a.jsx(e,{children:this.type})}};i(ss,"$FileEntry");let he=ss;const ca=t(he);t(ms,ys)(ca);const as=class as extends z{constructor(){super(...arguments),this.measure="58ch",this.side="15.5rem",this.colour="#7a4a8c",this.ink="#1a1f36",this.heading="#1a1f36",this.soft="#4f566b",this.faint="#8792a2",this.line="#e6e8ee",this.rule="#e6e8ee",this.panel="#f7f8fa",this.accent="#0a7a70",this.capital="#0a7a70",this.lit="#0a7a70",this.tint="#e3f4f1",this.night="#0f2a33",this.dusk="#17363f"}parts(){return[...super.parts(),this.index(),this.words(),this.small()]}holds(){return c`
            ${super.holds()}
            .pd-holds .pd-paragraph.pa-entry { padding: calc(${({theme:e})=>e.space} / 4) calc(${({theme:e})=>e.space} / 3); }
            .pd-holds .pd-paragraph.pa-entry::before { content: none; }
        `}index(){return c`
            .pd-holds {
                background: ${({theme:e})=>e.panel};
                border-inline-end: thin solid ${({theme:e})=>e.line};
                padding: calc(${({theme:e})=>e.space} * 0.75) calc(${({theme:e})=>e.space} * 0.6);
                scrollbar-width: thin;
                scrollbar-color: ${({theme:e})=>e.line} transparent;
            }
            .pd-library {
                background: ${({theme:e})=>e.panel};
                border-block-end: thin solid ${({theme:e})=>e.line};
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
        `}words(){return c`
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
        `}small(){return c`
            @media (max-width: ${({theme:e})=>e.narrow}) {
                .pd-holds, .pd-library {
                    border-inline-end: none;
                    border-block-end: thin solid ${({theme:e})=>e.line};
                }
                .pd-words { padding: calc(${({theme:e})=>e.space} * 0.83) calc(${({theme:e})=>e.space} * 0.67) calc(${({theme:e})=>e.space} / 3); }
                .pd-words .pd-title { font-size: calc(1.72 * ${({theme:e})=>e.size}); }
            }
        `}};i(as,"$ManualTheme");let fe=as;const la=t(fe);t(ms,cs)(la);var ha=Object.defineProperty,fa=Object.getOwnPropertyDescriptor,ua=i((d,e,s,o)=>{for(var r=fa(e,s),n=d.length-1,p;n>=0;n--)(p=d[n])&&(r=p(e,s,r)||r);return r&&ha(e,s,r),r},"__decorateClass$1");const ts=class ts extends g{constructor(){super(...arguments),this.specification=new W}defines(e){e.classes.add(this,"pa-first")}erase(e){e.classes.revert(this)}};i(ts,"$First");let ue=ts;const rs=class rs extends b{$saidOfAParagraph(e){l(e instanceof m,"first is said of a paragraph, and this is not one")}};i(rs,"FirstSpecification");let W=rs;ua([h("first is said of a paragraph")],W.prototype,"$saidOfAParagraph");const wa=t(ue);var ba=Object.defineProperty,ga=Object.getOwnPropertyDescriptor,xs=i((d,e,s,o)=>{for(var r=ga(e,s),n=d.length-1,p;n>=0;n--)(p=d[n])&&(r=p(e,s,r)||r);return r&&ba(e,s,r),r},"__decorateClass");const is=class is extends E{constructor(){super(...arguments),this.specification=new D,this.style=$.div`
        .pd-chapter.pa-coloured .pd-title {
            background: linear-gradient(160deg, color-mix(in srgb, ${e=>e.$colour} 90%, white), color-mix(in srgb, ${e=>e.$colour} 86%, black));
        }
        .pd-chapter.pa-coloured .pd-title::after { background: color-mix(in srgb, ${e=>e.$colour} 60%, white); }
    `}get colour(){return zs.copy(this.text).trim()}$Coloured(...e){this.$Format(...e);const s=this.style;this._painted=o=>a.jsx(s,{$colour:this.colour,...o})}defines(e){e.classes.add(this,"pa-coloured"),e.containers.add(this,this._painted)}erase(e){e.classes.revert(this),e.containers.revert(this)}};i(is,"$Coloured");let F=is;const ns=class ns extends b{$saidOfAChapter(e){l(e instanceof y,"coloured is said of a chapter, and this is not one")}$givenItsColour(e){l(/^#[0-9a-f]{6}$/iu.test(e.annotations.expressed(F)?.colour??""),"coloured is given its colour as six hex digits, and this one was given something else")}};i(ns,"ColouredSpecification");let D=ns;xs([h("coloured is said of a chapter")],D.prototype,"$saidOfAChapter");xs([h("coloured is given its colour")],D.prototype,"$givenItsColour");const va=t(F);export{j as $,us as B,va as C,gs as D,wa as F,ka as I,Qs as L,u as O,Ks as R,Es as S,ya as T,Us as W,z as a,Gs as b,Ts as c,Js as d,bs as e,xa as f,ce as g};
