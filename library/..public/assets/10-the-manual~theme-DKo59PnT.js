var rs=Object.defineProperty;var r=(p,e)=>rs(p,"name",{value:e,configurable:!0});import{$ as t,w as m,W as F,E as is,j as a,K as ns,s as $,f as d,c as ne,r as v,t as l,N as Qe,u as h,R as O,O as Ue,Q as os,v as j,o as ds,n as W,M as R,S as Je,d as y,U as oe,y as Ve,V as ps,T as Xe,X as Ye,Y as de,g as cs}from"./index-Bl1XWPeB.js";const he=class he extends m{constructor(){super(...arguments),this.$identifier="",this.$type=""}get name(){return`${this.$identifier}${this.$type}`}write(){const e=t(F),s=t(is);return a.jsxs(a.Fragment,{children:[a.jsx(e,{children:this.name}),a.jsx(s,{identifier:this.$identifier,type:this.$type,numbered:!0})]})}$Define(){super.$Define(),this.classes.add(this,"pd-listing")}};r(he,"$Listing");let H=he;const ls=t(H),fe=class fe extends ns{constructor(){super(...arguments),this.font="'Inter', system-ui, sans-serif",this.mono="'JetBrains Mono', ui-monospace, monospace",this.size="0.90625rem",this.leading="1.6",this.measure="44rem",this.side="15.5rem",this.space="1.5rem",this.sideColumn="256px",this.bothColumn="240px",this.twoColumn="236px",this.cardsColumn="244px",this.railColumn="68px",this.barHeight="50px",this.narrow="48rem",this.colour="#0c1b1f",this.night="#0c1b1f",this.deep="#14323c",this.blue="#166178",this.sea="#4e9eb9",this.sky="#8fc8dc",this.opal="#c8f4fb",this.pale="#e3f5fa",this.mist="#f1f7f9",this.white="#ffffff",this.ink="#10252c",this.soft="#516770",this.line="#dbe7ec",this.me="#e8590c",this.wash="linear-gradient(105deg, #e2f6fb 0%, #ecf0fd 52%, #fae9f4 100%)",this.serif="'Cormorant Garamond', Georgia, serif",this.darkBar="#0c1b1f",this.darkBarInk="#ffffff",this.darkBarDim="#a9bcc1",this.darkBarOn="rgba(255, 255, 255, 0.11)",this.darkBarLine="#1d3339",this.darkMark="#c8f4fb",this.darkMarkInk="#0c1b1f",this.lightBar="#ffffff",this.lightBarInk="#10252c",this.lightBarDim="#516770",this.lightBarOn="#e3f5fa",this.lightBarLine="#dbe7ec",this.lightMark="#0c1b1f",this.lightMarkInk="#ffffff",this.heading="#10252c",this.capital="#166178",this.lit="#166178",this.faint="#8792a2",this.paper="#ffffff",this.panel="#f1f7f9",this.rule="#dbe7ec",this.edge="transparent",this.barFill="#f1f7f9",this.barInk="#10252c",this.barDim="#516770",this.barOn="#e3f5fa",this.barLine="#dbe7ec",this.accent="#166178",this.tint="#e3f5fa",this.dusk="#14323c",this.glow="#cfe6e3",this.dim="#4f7672",this.keyword="#8ad7ff",this.string="#ffd48a",this.type="#9be3d6",this.comment="#5f8a86",this.haze="#a9bcc1",this.glass="rgba(255, 255, 255, 0.62)",this.binding="linear-gradient(160deg, #16303a, #0c1b1f)",this.shadow="0 0.75rem 1.4rem -0.9rem rgba(12, 27, 31, 0.55)",this.initial="'D'",this.volume="11.5rem",this.card="18rem",this.photo="7rem",this.style=$.div`${this.parts()}`}parts(){return[this.page(),this.writing(),this.links(),this.figures(),this.listings(),this.switches(),this.turns(),this.library(),this.head(),this.holds(),this.tones()]}page(){return d`
            font-family: ${({theme:e})=>e.font};
            font-size: ${({theme:e})=>e.size};
            line-height: ${({theme:e})=>e.leading};
            color: ${({theme:e})=>e.ink};
            background: ${({theme:e})=>e.paper};
            min-height: 100vh;
        `}writing(){return d`
            .pd-chapter, .pd-section, .pd-paragraph { margin-block: ${({theme:e})=>e.space}; }
            .pd-chapter { max-width: ${({theme:e})=>e.measure}; }
        `}links(){return d`
            .pa-reference { color: ${({theme:e})=>e.accent}; }
            .pa-reference.pa-self-reference { color: inherit; text-decoration: none; }
        `}figures(){return d`
            .pd-image img { display: block; max-width: 100%; height: auto; }
            .pd-code { font-family: ${({theme:e})=>e.mono}; overflow-x: auto; }
        `}listings(){return d`
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
        `}switches(){return d`
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
                color: ${({theme:e})=>e.white};
                background: ${({theme:e})=>e.colour};
                border-color: ${({theme:e})=>e.colour};
            }
        `}library(){return d`
            .pd-library { padding: calc(${({theme:e})=>e.space} * 0.375) calc(${({theme:e})=>e.space} * 0.75); }
            .pd-library .pd-paragraph, .pd-me .pd-paragraph { margin-block: 0; }
            .pd-me { padding: 0 calc(${({theme:e})=>e.space} * 0.75); }
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
        `}head(){return d`
            .pd-head { padding: calc(${({theme:e})=>e.space} * 0.83) calc(${({theme:e})=>e.space} * 1.17) calc(${({theme:e})=>e.space} * 0.58); }
            .pd-head .pd-chapter { margin-block: 0; }
            .pd-head .pd-title {
                font-family: ${({theme:e})=>e.serif};
                font-size: calc(1.8 * ${({theme:e})=>e.size});
                font-weight: 600;
                line-height: 1.04;
                color: ${({theme:e})=>e.heading};
            }
        `}holds(){return d`
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
        `}tones(){return d`
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
        `}turns(){return d`
            .pd-paragraph.pd-turn {
                display: flex;
                justify-content: space-between;
                gap: ${({theme:e})=>e.space};
                font-size: calc(0.93 * ${({theme:e})=>e.size});
            }
            .pd-turn .pa-reference { font-weight: 500; text-decoration: none; }
            .pd-turn .pd-count { color: ${({theme:e})=>e.faint}; }
        `}};r(fe,"$LibraryBookTheme");let D=fe;const hs=t(D);var fs=Object.defineProperty,us=Object.getOwnPropertyDescriptor,bs=r((p,e,s,n)=>{for(var i=us(e,s),o=p.length-1,c;o>=0;o--)(c=p[o])&&(i=c(e,s,i)||i);return i&&fs(e,s,i),i},"__decorateClass$4");const ue=class ue extends ne{constructor(){super(...arguments),this.specification=new z,this.themeProvider=!0,this.style=$.div`
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
    `}defines(e){super.defines(e),e.classes.add(this,"pa-outlined")}erase(e){super.erase(e),e.classes.revert(this)}};r(ue,"$Outlined");let G=ue;const be=class be extends v{$saidOfABook(e){l(e instanceof Qe,"outline is said of a book, and this is not one")}};r(be,"OutlineSpecification");let z=be;bs([h("outline is said of a book")],z.prototype,"$saidOfABook");const gs=t(G),ge=class ge extends m{write(){const e=this.book.author,s=t(F),n=t(O);return a.jsxs(a.Fragment,{children:["by ",a.jsxs(s,{children:[a.jsx(n,{children:e.means.identifier}),e.name]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-byline")}};r(ge,"$Byline");let L=ge;const me=class me extends m{write(){const e=this.book.subject,s=t(F),n=t(O);return a.jsxs(a.Fragment,{children:["filed under ",a.jsxs(s,{children:[a.jsx(n,{children:e.means.identifier}),e.name]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-filed-under")}};r(me,"$FiledUnder");let T=me;const ms=t(L),$s=t(T),$e=class $e extends Ue{get on(){return this.book.is(this.$of)}$Switch(...e){this.$Writing(...e),this._button=s=>a.jsx("button",{type:"button","aria-pressed":this.on,onClick:r(()=>this.press(),"onClick"),...s}),this.containers.replace(this,"span",this._button)}press(){const e=this.book,s=[e.$is].flat();e.$is=this.on?s.filter(n=>n!==this.$of):[this.$of,...s]}$Define(){super.$Define(),this.classes.add(this,"pd-switch")}};r($e,"$Switch");let C=$e;const ye=class ye extends C{press(){const e=this.book,s=[e.$is].flat().filter(n=>!this.$among.includes(n));e.$is=[this.$of,...s]}};r(ye,"$Tab");let E=ye;const qe=t(C),Js=t(E);var ys=Object.defineProperty,xs=Object.getOwnPropertyDescriptor,ks=r((p,e,s,n)=>{for(var i=xs(e,s),o=p.length-1,c;o>=0;o--)(c=p[o])&&(i=c(e,s,i)||i);return i&&ys(e,s,i),i},"__decorateClass$3");const xe=class xe extends v{$saidOfABook(e){l(e instanceof k,"this is said of a book of this library, and here it is said of something else")}};r(xe,"OfABookSpecification");let u=xe;ks([h("this is said of a book of this library")],u.prototype,"$saidOfABook");const N=class N extends os{constructor(){super(...arguments),this.specification=new u,this.themeProvider=!0,this.style=$.div`${this.parts()}`}get pages(){return this.book.chapters}get open(){return this.book.open}defines(e){for(const s of e.annotations.after(this))s instanceof N&&e.annotations.express(s,!1);super.defines(e),e.classes.add(this,"pa-layout"),this.open!==void 0&&e.classes.add(this,"pa-turned")}erase(e){super.erase(e),e.classes.revert(this)}parts(){return[this.paging(),this.regions(),this.areas(),this.phone()]}paging(){return d`
            .pd-leaf:not(.pd-open) { display: none; }
        `}regions(){return d`
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
        `}areas(){return d`
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
        `}phone(){return d`
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
        `}};r(N,"$Layout");let K=N;const ws=t(K),I=class I extends j{constructor(){super(...arguments),this.specification=new u}defines(e){for(const s of e.annotations.after(this))s instanceof I&&e.annotations.express(s,!1);e.classes.add(this,"pa-bars")}erase(e){e.classes.revert(this)}};r(I,"$Bars");let f=I;const ke=class ke extends f{defines(e){super.defines(e),e.classes.add(this,"pa-both-bars")}};r(ke,"$BothBars");let J=ke;const we=class we extends f{defines(e){super.defines(e),e.classes.add(this,"pa-side-bar")}};r(we,"$SideBar");let Q=we;const ve=class ve extends f{defines(e){super.defines(e),e.classes.add(this,"pa-top-bar")}};r(ve,"$TopBar");let U=ve;const je=class je extends f{defines(e){super.defines(e),e.classes.add(this,"pa-two-bars")}};r(je,"$TwoBars");let V=je;const Oe=class Oe extends f{defines(e){super.defines(e),e.classes.add(this,"pa-rail")}};r(Oe,"$Rail");let X=Oe;const De=class De extends f{defines(e){super.defines(e),e.classes.add(this,"pa-cards")}};r(De,"$Cards");let Y=De;const Ze=t(f),Se=t(J),vs=t(Q),js=t(U),Os=t(V),Ds=t(X),zs=t(Y),M=class M extends j{constructor(){super(...arguments),this.specification=new u}defines(e){for(const s of e.annotations.after(this))s instanceof M&&e.annotations.express(s,!1);e.classes.add(this,"pa-tone")}erase(e){e.classes.revert(this)}};r(M,"$Tone");let x=M;const ze=class ze extends x{defines(e){super.defines(e),e.classes.add(this,"pa-dark")}};r(ze,"$Dark");let q=ze;const Ce=class Ce extends x{defines(e){super.defines(e),e.classes.add(this,"pa-light")}};r(Ce,"$Light");let Z=Ce;const _e=t(x),es=t(q),Cs=t(Z),Ps=r(()=>a.jsxs(ds,{children:[a.jsx(W,{children:a.jsx(R,{children:"[Dougs Story](/dougs-story/)"})}),a.jsx(W,{children:a.jsx(R,{children:"[Dougs Design](/dougs-design/)"})}),a.jsx(W,{children:a.jsx(R,{children:"[Dougs Reference Manual](/dougs-reference-manual/)"})})]}),"Subjects"),Pe=class Pe extends Ue{write(){const e=this.book.chapters;return`${e.indexOf(this.chapter)+1} of ${e.length}`}$Define(){super.$Define(),this.classes.add(this,"pd-count")}};r(Pe,"$Count");let S=Pe;const Be=class Be extends m{get before(){const e=this.book.chapters;return e[e.indexOf(this.chapter)-1]??this.chapter}get after(){const e=this.book.chapters;return e[e.indexOf(this.chapter)+1]??this.chapter}write(){const e=t(F),s=t(Bs),n=t(this.before===this.chapter?Je:O),i=t(this.after===this.chapter?Je:O);return a.jsxs(a.Fragment,{children:[a.jsxs(e,{children:[a.jsx(n,{children:this.before.mention.identifier}),"← ",this.before.title.name]}),a.jsx(s,{}),a.jsxs(e,{children:[a.jsx(i,{children:this.after.mention.identifier}),this.after.title.name," →"]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-turn")}};r(Be,"$Turn");let _=Be;const Bs=t(S),As=t(_);var Ns=Object.defineProperty,Is=Object.getOwnPropertyDescriptor,pe=r((p,e,s,n)=>{for(var i=Is(e,s),o=p.length-1,c;o>=0;o--)(c=p[o])&&(i=c(e,s,i)||i);return i&&Ns(e,s,i),i},"__decorateClass$2");const Ae=class Ae extends Qe{constructor(){super(...arguments),this.specification=new b}get chapters(){return this.text.find(y).filter(e=>[...e.classes].includes("pd-canonical"))}get placed(){return[this.cover,this.synopsis,this.table,...this.chapters]}get open(){return this.$bookmark===void 0?void 0:this.named(this.$bookmark)}get arrangements(){return[Se,vs,js,Os,Ds,zs]}get tones(){return[es,Cs]}write(){return a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"pd-library",children:this.library()}),a.jsx("div",{className:"pd-me",children:this.byline()}),a.jsx("div",{className:"pd-holds",children:this.holds()}),a.jsx("div",{className:"pd-head",children:this.head()}),a.jsxs("div",{className:"pd-leaves",children:[this.front(),this.leaves()]})]})}library(){return a.jsxs(a.Fragment,{children:[this.filed(),this.subjects()]})}subjects(){return a.jsx("div",{className:"pd-subjects",children:a.jsx(Ps,{})})}holds(){const e=t(this.table);return a.jsx(e,{})}head(){const e=t(this.cover);return a.jsxs(a.Fragment,{children:[a.jsx(e,{}),a.jsx("div",{className:"pd-switches",children:this.switches()})]})}front(){return a.jsx("div",{className:this.open===void 0?"pd-leaf pd-front pd-open":"pd-leaf pd-front",children:this.opening()})}opening(){const e=t(this.synopsis);return a.jsx("div",{className:"pd-words",children:a.jsx(e,{})})}leaves(){return this.chapters.map((e,s)=>{const n=t(e);return a.jsxs("div",{className:e===this.open?"pd-leaf pd-open":"pd-leaf",children:[a.jsx("div",{className:"pd-words",children:a.jsx(n,{})}),a.jsx("div",{className:"pd-files",children:this.listings(e)})]},s)})}named(e){return this.chapters.find(s=>s.mention?.identifier===e||this.sections(s).some(n=>n.mention?.identifier===e))}byline(){const e=t(ms);return a.jsx(e,{chapter:this.cover})}filed(){const e=t($s);return a.jsx(e,{chapter:this.cover})}switches(){const e=t(qe);return a.jsx(e,{chapter:this.cover,of:gs,children:"outline"})}listings(e){const s=t(ls);return e.annotations.find(oe).reverse().map((n,i)=>a.jsx(s,{chapter:e,identifier:n.$identifier,type:n.$type},i))}sections(e){return e.text.find(Ve).flatMap(s=>[s,...this.sections(s)])}turn(){this.bookmark!==this.cover&&super.turn()}$Define(){super.$Define();const e=t(ws),s=t(Ze),n=t(_e);this.annotations.add(this,a.jsx(e,{}),a.jsx(s,{}),a.jsx(n,{}))}$Bound(){const e=t(As);for(const s of this.chapters)s.text.add(this,a.jsx(e,{}));super.$Bound()}};r(Ae,"$LibraryBook");let k=Ae;const Ne=class Ne extends ps{$holdsOnlyChapters(e){l([...e.text].every(s=>s instanceof y),"a book of this library holds only chapters, and this one holds something else")}$placesEveryChapter(e){l(e.text.find(y).every(s=>e.placed.includes(s)),"a book of this library has a place for every chapter it holds, and this one holds a chapter it places nowhere")}$onlyAChapterAppends(e){l(e.text.find(y).every(s=>e.chapters.includes(s)||!s.is(oe)),"only an ordinary chapter appends a file, and here a cover, a synopsis or a table of contents appends one")}};r(Ne,"LibraryBookSpecification");let b=Ne;pe([h("a book of this library holds only chapters")],b.prototype,"$holdsOnlyChapters");pe([h("a book of this library has a place for every chapter it holds")],b.prototype,"$placesEveryChapter");pe([h("only an ordinary chapter appends a file")],b.prototype,"$onlyAChapterAppends");const ce=t(k);t(ce,Xe)(hs);t(ce,Ze)(Se);t(ce,_e)(es);const Ie=class Ie extends ne{constructor(){super(...arguments),this.specification=new u,this.themeProvider=!0,this.style=$.div`
        .pd-book.pa-code-forward .pd-leaf.pd-open { grid-template-columns: calc(1.4 * ${({theme:e})=>e.side}) minmax(0, 1fr); }
        .pd-book.pa-code-forward .pd-files { width: auto; }
    `}defines(e){super.defines(e),e.classes.add(this,"pa-code-forward")}erase(e){super.erase(e),e.classes.revert(this)}};r(Ie,"$CodeForward");let ee=Ie;const Ms=t(ee),Me=class Me extends ne{constructor(){super(...arguments),this.specification=new u,this.themeProvider=!0,this.style=$.div`
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
    `}defines(e){super.defines(e),e.classes.add(this,"pa-spread")}erase(e){super.erase(e),e.classes.revert(this)}};r(Me,"$Spread");let se=Me;const Fs=t(se),Fe=class Fe extends k{switches(){const e=t(qe);return a.jsxs(a.Fragment,{children:[super.switches(),a.jsx(e,{chapter:this.cover,of:Ms,children:"code forward"})]})}$Define(){super.$Define();const e=t(Fs);this.annotations.add(this,a.jsx(e,{}))}};r(Fe,"$Manual");let ae=Fe;const ss=t(ae);var Ws=Object.defineProperty,Rs=Object.getOwnPropertyDescriptor,le=r((p,e,s,n)=>{for(var i=Rs(e,s),o=p.length-1,c;o>=0;o--)(c=p[o])&&(i=c(e,s,i)||i);return i&&Ws(e,s,i),i},"__decorateClass$1");const We=class We extends j{constructor(){super(...arguments),this.specification=new g}get date(){return this.text.find(Ye)[0]}defines(e){e.classes.add(this,"pa-dated")}erase(e){e.classes.revert(this)}note(){const e=t(this.date);return a.jsx(e,{})}};r(We,"$Dated");let w=We;const Re=class Re extends v{$saidOfAChapter(e){l(e instanceof y,"dated is said of a chapter, and this is not one")}$datedOnce(e){l(e.annotations.containsOne(w),"a chapter is dated once, and this one is dated more than once")}$givenOneDate(e){l(e.annotations.expressed(w)?.text.find(Ye).length===1,"a dated chapter is given one date, and this one is given none or more than one")}};r(Re,"DatedSpecification");let g=Re;le([h("dated is said of a chapter")],g.prototype,"$saidOfAChapter");le([h("a chapter is dated once")],g.prototype,"$datedOnce");le([h("a dated chapter is given one date")],g.prototype,"$givenOneDate");const Qs=t(w);var Hs=Object.defineProperty,Gs=Object.getOwnPropertyDescriptor,as=r((p,e,s,n)=>{for(var i=Gs(e,s),o=p.length-1,c;o>=0;o--)(c=p[o])&&(i=c(e,s,i)||i);return i&&Hs(e,s,i),i},"__decorateClass");const He=class He extends j{constructor(){super(...arguments),this.specification=new A}get place(){return this.parent.annotations.expressed(de).identifier}get leads(){return this.book.named(this.place)}defines(e){e.classes.add(this,"pa-entry"),(this.place===this.book?.$bookmark||this.place===this.book.open?.mention?.identifier)&&e.classes.add(this,"pa-open")}erase(e){e.classes.revert(this)}};r(He,"$Entry");let P=He;const Ge=class Ge extends j{constructor(){super(...arguments),this.specification=new B}get entries(){return this.chapter.text.find(Ve).flatMap(s=>s.text.find(m)).filter(s=>s.is(de))}$Bound(){const e=t(ts);for(const s of this.entries)s.annotations.add(this,a.jsx(e,{}));super.$Bound()}};r(Ge,"$Index");let te=Ge;const Le=class Le extends v{$saidOfATableOfContents(e){l(e.is(cs),"an index is said of a table of contents, and this chapter is not one")}};r(Le,"IndexSpecification");let B=Le;as([h("an index is said of a table of contents")],B.prototype,"$saidOfATableOfContents");const Te=class Te extends v{$saidOfAnEntry(e){l(e instanceof m&&e.is(de),"an entry is said of a paragraph that leads somewhere, and this is not one")}};r(Te,"EntrySpecification");let A=Te;as([h("an entry is said of a paragraph that leads somewhere")],A.prototype,"$saidOfAnEntry");const ts=t(P),Us=t(te),Ee=class Ee extends P{constructor(){super(...arguments),this.label=$.span.attrs({className:"pa-file-type"})``}get type(){return this.leads?.annotations.find(oe)[0]?.$type??""}note(){const e=this.label;return a.jsx(e,{children:this.type})}};r(Ee,"$FileEntry");let re=Ee;const Ls=t(re);t(ss,ts)(Ls);const Ke=class Ke extends D{constructor(){super(...arguments),this.measure="58ch",this.side="15.5rem",this.colour="#7a4a8c",this.ink="#1a1f36",this.heading="#1a1f36",this.soft="#4f566b",this.faint="#8792a2",this.line="#e6e8ee",this.rule="#e6e8ee",this.panel="#f7f8fa",this.accent="#0a7a70",this.capital="#0a7a70",this.lit="#0a7a70",this.tint="#e3f4f1",this.night="#0f2a33",this.dusk="#17363f"}parts(){return[...super.parts(),this.index(),this.words(),this.small()]}holds(){return d`
            ${super.holds()}
            .pd-holds .pd-paragraph.pa-entry { padding: calc(${({theme:e})=>e.space} / 4) calc(${({theme:e})=>e.space} / 3); }
            .pd-holds .pd-paragraph.pa-entry::before { content: none; }
        `}index(){return d`
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
        `}words(){return d`
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
        `}small(){return d`
            @media (max-width: ${({theme:e})=>e.narrow}) {
                .pd-holds, .pd-library {
                    border-inline-end: none;
                    border-block-end: thin solid ${({theme:e})=>e.line};
                }
                .pd-words { padding: calc(${({theme:e})=>e.space} * 0.83) calc(${({theme:e})=>e.space} * 0.67) calc(${({theme:e})=>e.space} / 3); }
                .pd-words .pd-title { font-size: calc(1.72 * ${({theme:e})=>e.size}); }
            }
        `}};r(Ke,"$ManualTheme");let ie=Ke;const Ts=t(ie);t(ss,Xe)(Ts);export{k as $,Se as B,zs as C,es as D,Us as I,Cs as L,u as O,Ds as R,vs as S,Js as T,D as a,js as b,Os as c,Qs as d,ae as e};
