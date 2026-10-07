var qa=Object.defineProperty;var n=(p,e)=>qa(p,"name",{value:e,configurable:!0});import{$ as i,n as f,W as w,r as Va,j as a,z as Sa,s as m,k as c,B as as,R as b,E as Da,m as u,f as g,g as l,F as z,i as h,G as et,e as Q,o as W,h as $,J as x,K as be,N as X,O as st,Q as at,p as Z,U as tt,y as ve,V as ka,X as je,Y as it,Z as Ia,_ as rt,a0 as nt,l as ts,a1 as Ca,w as Aa,a2 as ja,a3 as ot,a4 as dt,C as Ma,T as _a,t as Na,u as Ha,a5 as Fa,a as Wa,v as Ta,a6 as pt}from"./index-BOi-UD83.js";const ls=class ls extends f{constructor(){super(...arguments),this.$identifier="",this.$type=""}get name(){return`${this.$identifier}${this.$type}`}write(){const e=i(w),s=i(Va);return a.jsxs(a.Fragment,{children:[a.jsx(e,{children:this.name}),a.jsx(s,{identifier:this.$identifier,type:this.$type,numbered:!0})]})}$Define(){super.$Define(),this.classes.add(this,"pd-listing")}};n(ls,"$Listing");let ze=ls;const ct=i(ze),hs=class hs extends Sa{constructor(){super(...arguments),this.font="'Inter', system-ui, sans-serif",this.prose="'Inter', system-ui, sans-serif",this.mono="'JetBrains Mono', ui-monospace, monospace",this.size="0.875rem",this.leading="1.6",this.measure="44rem",this.spreadColumn="15.5rem",this.space="1.5rem",this.holdsColumn="240px",this.barHeight="50px",this.beat="320ms",this.narrow="48rem",this.colour="#4e9eb9",this.accent="#166178",this.bar="#0c1b1f",this.barInk="#ffffff",this.barDim="#a9bcc1",this.barOn="rgba(255, 255, 255, 0.11)",this.barLine="#1d3339",this.mark="#c8f4fb",this.side="#e3f5fa",this.sideInk="#10252c",this.sideDim="#516770",this.sideOn="#ffffff",this.sideLine="#cbe6ee",this.night="#0c1b1f",this.deep="#14323c",this.blue="#166178",this.sea="#4e9eb9",this.sky="#8fc8dc",this.opal="#c8f4fb",this.pale="#e3f5fa",this.mist="#f1f7f9",this.white="#ffffff",this.ink="#10252c",this.soft="#516770",this.line="#dbe7ec",this.me="#e8590c",this.wash="linear-gradient(105deg, #e2f6fb 0%, #ecf0fd 52%, #fae9f4 100%)",this.serif="'Source Serif 4', Georgia, serif",this.between="'Source Sans 3', 'Inter', system-ui, sans-serif",this.bookPaper="#fbf9f3",this.bookInk="#29251d",this.heading="#10252c",this.capital="#166178",this.lit="#166178",this.faint="#8792a2",this.paper="#ffffff",this.panel="#f1f7f9",this.rule="#dbe7ec",this.edge="transparent",this.tint="#e3f5fa",this.dusk="#14323c",this.glow="#cfe6e3",this.dim="#4f7672",this.keyword="#8ad7ff",this.string="#ffd48a",this.type="#9be3d6",this.comment="#5f8a86",this.haze="#a9bcc1",this.glass="rgba(255, 255, 255, 0.62)",this.binding="linear-gradient(160deg, #16303a, #0c1b1f)",this.spine="inset 5px 0 0 rgba(0, 0, 0, 0.14), inset 6px 0 0 rgba(255, 255, 255, 0.12), 0 10px 20px -10px rgba(0, 0, 0, 0.45)",this.shadow="0 0.75rem 1.4rem -0.9rem rgba(12, 27, 31, 0.55)",this.volume="11.5rem",this.cover="8.25rem",this.card="18rem",this.photo="7rem",this.radius="0.375rem",this.barTint="#ffffff",this.skyInk="#166178",this.lift="inset 5px 0 0 rgba(0, 0, 0, 0.14), inset 6px 0 0 rgba(255, 255, 255, 0.12), 0 14px 24px -12px rgba(0, 0, 0, 0.5)",this.openSpine="inset 7px 0 0 rgba(0, 0, 0, 0.14), inset 8px 0 0 rgba(255, 255, 255, 0.12), 0 12px 22px -14px rgba(0, 0, 0, 0.5)",this.style=m.div`${this.parts()}`}parts(){return[this.page(),this.writing(),this.links(),this.figures(),this.listings(),this.switches(),this.turns(),this.illustrations(),this.marks(),this.library(),this.head(),this.holds(),this.tones()]}page(){return c`
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
                background: ${({theme:e})=>e.accent};
                border-color: ${({theme:e})=>e.accent};
            }
        `}illustrations(){return c`
            .pd-illustration { fill: none; stroke: var(--ink); stroke-width: 1.7; stroke-linecap: round; stroke-linejoin: round; }
            .pd-illustration .fill { fill: var(--foot); stroke: var(--ink); }
            .pd-illustration .light { fill: ${({theme:e})=>e.white}; stroke: none; }
            .pd-drawing { display: grid; place-items: center; min-height: 0; }
        `}marks(){return c`
            .pd-word.pd-mark {
                display: block;
                position: relative;
                flex: none;
                box-sizing: border-box;
                width: calc(2 * ${({theme:e})=>e.size});
                height: calc(2 * ${({theme:e})=>e.size});
                border: calc(${({theme:e})=>e.volume} * 0.54 / 64 * 1.7) solid var(--ink);
                background: var(--band);
                overflow: hidden;
            }
            .pd-mark .pd-drawing { display: block; }
            .pd-mark .pd-illustration {
                position: absolute;
                width: calc(${({theme:e})=>e.volume} * 0.54);
                height: calc(${({theme:e})=>e.volume} * 0.54);
                left: var(--window-x);
                top: var(--window-y);
            }
        `}library(){return c`
            .pd-book .pd-library { padding: 0 calc(${({theme:e})=>e.space} * 0.75); background: ${({theme:e})=>e.barTint}; border-block-end: thin solid ${({theme:e})=>e.line}; }
            .pd-library .pd-paragraph, .pd-me .pd-paragraph { margin-block: 0; }
            .pd-library .pa-reference, .pd-me .pa-reference { color: inherit; text-decoration: none; }
            .pd-paragraph.pd-logo { display: flex; align-items: center; height: ${({theme:e})=>e.barHeight}; }
            .pd-logo .pa-reference, .pd-me .pd-mark .pa-reference { display: block; }
            .pd-logo .pd-filed, .pd-logo .pd-own { display: block; flex: none; overflow: hidden; transition: width ${({theme:e})=>e.beat} ease, margin ${({theme:e})=>e.beat} ease, opacity ${({theme:e})=>e.beat} ease; }
            .pd-logo .pd-own { width: calc(2 * ${({theme:e})=>e.size}); }
            .pd-logo .pd-filed + .pd-scheme .pd-own, .pd-logo .pd-filed + .pd-own { margin-inline-start: calc(${({theme:e})=>e.space} / 6); }
            .pa-filed .pd-own { width: 0; margin-inline-start: 0; opacity: 0; }
            .pd-names { display: grid; margin-inline-start: calc(${({theme:e})=>e.space} * 0.375); }
            .pd-names .pd-scheme { grid-area: 1 / 1; }
            .pd-names .pd-name {
                display: block;
                font-family: ${({theme:e})=>e.between};
                font-size: calc(1.357 * ${({theme:e})=>e.size});
                font-weight: 600;
                line-height: 1;
                letter-spacing: -0.01em;
                white-space: nowrap;
                color: var(--band-ink, ${({theme:e})=>e.ink});
                transform: translateY(1px);
                transition: opacity ${({theme:e})=>e.beat} ease, transform ${({theme:e})=>e.beat} ease;
            }
            .pd-names .pd-name.pd-under { font-family: ${({theme:e})=>e.serif}; font-size: calc(1.286 * ${({theme:e})=>e.size}); font-weight: 700; letter-spacing: -0.015em; opacity: 0; transform: translateY(7px); pointer-events: none; }
            .pa-filed .pd-names .pd-name { opacity: 0; transform: translateY(-5px); pointer-events: none; }
            .pa-filed .pd-names .pd-name.pd-under { opacity: 1; transform: translateY(1px); pointer-events: auto; }
            .pd-me { gap: calc(${({theme:e})=>e.space} * 0.375); padding: 0 calc(${({theme:e})=>e.space} * 0.75); }
            .pd-me .pd-byline { display: flex; align-items: center; gap: calc(${({theme:e})=>e.space} * 0.375); font-size: calc(0.93 * ${({theme:e})=>e.size}); color: ${({theme:e})=>e.soft}; }
            .pd-me .pd-word.pa-reference { color: ${({theme:e})=>e.ink}; font-weight: 500; }
        `}head(){return c`
            .pd-head { padding: calc(${({theme:e})=>e.space} * 0.83) calc(${({theme:e})=>e.space} * 1.17) calc(${({theme:e})=>e.space} * 0.58); }
            .pd-head .pd-chapter { margin-block: 0; }
            .pd-head .pd-filed-under {
                display: flex;
                align-items: center;
                gap: calc(${({theme:e})=>e.space} * 0.3);
                flex-basis: 100%;
                margin-block: 0;
                font-size: calc(0.9 * ${({theme:e})=>e.size});
                color: ${({theme:e})=>e.soft};
            }
            .pd-head .pd-filed-under .pa-label {
                font-size: calc(0.68 * ${({theme:e})=>e.size});
                font-weight: 600;
                letter-spacing: 0.12em;
                text-transform: uppercase;
            }
            .pd-head .pd-filed-under .pd-word + .pd-word { font-weight: 500; }
            .pd-head .pd-filed-under .pa-reference { color: ${({theme:e})=>e.accent}; text-decoration: none; }
            .pd-head .pd-title {
                font-family: ${({theme:e})=>e.serif};
                font-size: calc(2.57 * ${({theme:e})=>e.size});
                font-weight: 600;
                line-height: 1.04;
                color: ${({theme:e})=>e.heading};
            }
            .pd-head .pa-illustration { display: none; }
        `}holds(){return c`
            .pd-holds { padding: calc(${({theme:e})=>e.space} * 0.83) calc(${({theme:e})=>e.space} / 2); }
            .pd-holds .pd-chapter { margin-block: 0; color: ${({theme:e})=>e.soft}; }
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
                color: ${({theme:e})=>e.soft};
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
                color: ${({theme:e})=>e.ink};
            }
            .pd-holds .pd-paragraph.pa-entry::before {
                content: '';
                position: absolute;
                inset-inline-start: calc(${({theme:e})=>e.space} * 0.375);
                width: calc(${({theme:e})=>e.space} * 0.375);
                height: calc(${({theme:e})=>e.space} * 0.375);
                border-radius: 50%;
                background: var(--colour, ${({theme:e})=>e.colour});
            }
            .pd-holds .pd-paragraph.pa-entry.pa-open { background: ${({theme:e})=>e.sideOn}; color: ${({theme:e})=>e.accent}; }
            .pd-holds .pd-paragraph.pa-entry .pd-word + .pd-word {
                margin-inline-start: auto;
                font-size: calc(0.83 * ${({theme:e})=>e.size});
                opacity: 0.55;
            }
            .pd-holds .pa-reference.pa-reference { color: inherit; text-decoration: none; }
            .pd-holds .pd-section.pa-appendix { opacity: 0.72; }
            .pd-holds .pd-section.pa-appendix .pd-heading { font-size: calc(0.66 * ${({theme:e})=>e.size}); }
            .pd-holds .pd-section.pa-appendix .pd-paragraph.pa-entry { font-size: calc(0.86 * ${({theme:e})=>e.size}); }
            @media not all and (max-width: ${({theme:e})=>e.narrow}) {
                .pd-holds > * { display: flex; flex-direction: column; min-height: 100%; }
                .pd-holds .pd-chapter.pa-table-of-contents { flex: 1; display: flex; flex-direction: column; }
                .pd-holds .pd-section.pa-appendix { margin-block-start: auto; }
            }
            @media (max-width: ${({theme:e})=>e.narrow}) {
                .pd-holds { padding: calc(${({theme:e})=>e.space} * 0.42) calc(${({theme:e})=>e.space} * 0.67) calc(${({theme:e})=>e.space} / 2); }
                .pd-holds .pd-chapter, .pd-holds .pd-section {
                    display: flex;
                    align-items: center;
                    gap: calc(${({theme:e})=>e.space} / 4);
                    margin-block: 0;
                }
                .pd-holds .pd-title { display: none; }
                .pd-holds .pd-heading { flex: none; margin: 0 calc(${({theme:e})=>e.space} / 4) 0 calc(${({theme:e})=>e.space} / 2); padding: 0; }
                .pd-holds .pd-paragraph.pa-entry {
                    flex: none;
                    padding: calc(${({theme:e})=>e.space} * 0.21) calc(${({theme:e})=>e.space} * 0.46) calc(${({theme:e})=>e.space} * 0.21) calc(${({theme:e})=>e.space} * 0.375);
                    border: thin solid currentColor;
                    border-radius: calc(${({theme:e})=>e.space} * 4);
                    white-space: nowrap;
                }
                .pd-holds .pd-paragraph.pa-entry::before { display: none; }
            }
        `}tones(){return c`
            .pa-dark .pd-library, .pa-dark .pd-me {
                background: ${({theme:e})=>e.bar};
                color: ${({theme:e})=>e.barInk};
            }
            .pa-dark .pd-library .pd-word, .pa-dark .pd-me .pd-word { color: ${({theme:e})=>e.barInk}; }
            .pa-dark .pd-library .pa-label, .pa-dark .pd-me .pa-label { color: ${({theme:e})=>e.barDim}; }
            .pa-dark .pd-holds, .pa-light .pd-holds {
                background: ${({theme:e})=>e.side};
                color: ${({theme:e})=>e.sideInk};
                border-inline-end: thin solid ${({theme:e})=>e.sideLine};
            }
            .pa-dark .pd-holds .pd-chapter, .pa-dark .pd-holds .pd-heading, .pa-light .pd-holds .pd-chapter, .pa-light .pd-holds .pd-heading { color: ${({theme:e})=>e.sideDim}; }
            .pa-light .pd-library, .pa-light .pd-me, .pa-white-over-black .pd-library, .pa-white-over-black .pd-me {
                background: ${({theme:e})=>e.paper};
                color: ${({theme:e})=>e.ink};
            }
            .pa-light .pd-library, .pa-white-over-black .pd-library { border-block-end: thin solid ${({theme:e})=>e.line}; }
            .pa-light .pd-library .pd-word, .pa-light .pd-me .pd-word, .pa-white-over-black .pd-library .pd-word, .pa-white-over-black .pd-me .pd-word { color: ${({theme:e})=>e.ink}; }
            .pa-light .pd-library .pa-label, .pa-light .pd-me .pa-label, .pa-white-over-black .pd-library .pa-label, .pa-white-over-black .pd-me .pa-label { color: ${({theme:e})=>e.soft}; }
            .pa-white-over-black .pd-holds {
                background: ${({theme:e})=>e.bar};
                color: ${({theme:e})=>e.barInk};
                border-inline-end: thin solid ${({theme:e})=>e.barLine};
            }
            .pa-white-over-black .pd-holds .pd-chapter, .pa-white-over-black .pd-holds .pd-heading { color: ${({theme:e})=>e.barDim}; }
            .pa-white-over-black .pd-holds .pd-paragraph.pa-entry { color: ${({theme:e})=>e.barInk}; }
            .pa-white-over-black .pd-holds .pd-paragraph.pa-entry.pa-open { background: ${({theme:e})=>e.barOn}; color: ${({theme:e})=>e.barInk}; }
        `}turns(){return c`
            .pd-paragraph.pd-turn {
                display: flex;
                justify-content: space-between;
                gap: ${({theme:e})=>e.space};
                font-size: calc(0.786 * ${({theme:e})=>e.size});
            }
            .pd-turn .pa-reference { font-weight: 500; text-decoration: none; }
            .pd-turn .pd-count { color: ${({theme:e})=>e.faint}; }
        `}};n(hs,"$LibraryBookTheme");let T=hs;const lt=i(T);var ht=Object.defineProperty,ft=Object.getOwnPropertyDescriptor,gt=n((p,e,s,r)=>{for(var t=ft(e,s),o=p.length-1,d;o>=0;o--)(d=p[o])&&(t=d(e,s,t)||t);return t&&ht(e,s,t),t},"__decorateClass$c");const fs=class fs extends u{constructor(){super(...arguments),this.specification=new q}defines(e){e.classes.add(this,"pa-label")}erase(e){e.classes.revert(this)}};n(fs,"$Label");let Oe=fs;const gs=class gs extends g{$saidOfAWord(e){l(e instanceof z,"label is said of a word, and this is not one")}};n(gs,"LabelSpecification");let q=gs;gt([h("label is said of a word")],q.prototype,"$saidOfAWord");const is=i(Oe),us=class us extends f{get cover(){return this.$cover??this.book?.cover}write(){const e=this.cover.annotations.expressed(as),s=i(w),r=i(is),t=i(b);return a.jsxs(a.Fragment,{children:[a.jsxs(s,{children:[a.jsx(r,{}),"by"]}),a.jsxs(s,{children:[a.jsx(t,{children:e.means.identifier}),e.name]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-byline")}};n(us,"$Byline");let Pe=us;const $s=class $s extends f{get cover(){return this.$cover??this.book?.cover}write(){const e=this.cover.annotations.expressed(Da),s=i(w),r=i(is),t=i(b);return a.jsxs(a.Fragment,{children:[a.jsxs(s,{children:[a.jsx(r,{}),"filed under"]}),a.jsxs(s,{children:[a.jsx(t,{children:e.means.identifier}),e.name]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-filed-under")}};n($s,"$FiledUnder");let De=$s;const La=i(Pe),Ra=i(De);var ut=Object.defineProperty,$t=Object.getOwnPropertyDescriptor,mt=n((p,e,s,r)=>{for(var t=$t(e,s),o=p.length-1,d;o>=0;o--)(d=p[o])&&(t=d(e,s,t)||t);return t&&ut(e,s,t),t},"__decorateClass$b");const ms=class ms extends g{$saidOfABook(e){l(e instanceof D,"this is said of a book of this library, and here it is said of something else")}};n(ms,"OfABookSpecification");let y=ms;mt([h("this is said of a book of this library")],y.prototype,"$saidOfABook");const ue=class ue extends et{constructor(){super(...arguments),this.specification=new y,this.themeProvider=!0,this.style=m.div`
        ${this.parts()}
        .pa-dark .pd-subjects .pd-paragraph:has(> .pa-reference[href='${e=>e.$at}']) {
            background: ${({theme:e})=>e.barOn};
            color: ${({theme:e})=>e.barInk};
            box-shadow: inset 0 -2px 0 var(--colour, ${({theme:e})=>e.barDim});
        }
        .pa-light .pd-subjects .pd-paragraph:has(> .pa-reference[href='${e=>e.$at}']), .pa-white-over-black .pd-subjects .pd-paragraph:has(> .pa-reference[href='${e=>e.$at}']) {
            background: ${({theme:e})=>e.side};
            color: ${({theme:e})=>e.ink};
            box-shadow: inset 0 -2px 0 var(--colour, ${({theme:e})=>e.soft});
        }
    `}get pages(){return this.book.pages}get open(){return this.book.open}$Bound(){const e=this.style;this.style=s=>a.jsx(e,{$at:this.book.means?.identifier,...s}),super.$Bound()}defines(e){for(const r of e.annotations.after(this))r instanceof ue&&e.annotations.express(r,!1);super.defines(e),e.classes.add(this,"pa-layout");const s=this.open;s!==void 0&&e.classes.add(this,"pa-turned"),s!==void 0&&this.book.appendix.includes(s)&&e.classes.add(this,"pa-built")}erase(e){super.erase(e),e.classes.revert(this)}parts(){return[this.paging(),this.regions(),this.areas(),this.phone()]}paging(){return c`
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
            .pd-book.pa-layout {
                grid-template-columns: ${({theme:e})=>e.holdsColumn} minmax(0, 1fr);
                grid-template-rows: auto auto minmax(0, 1fr);
                grid-template-areas: 'library library' 'holds head' 'holds leaves';
            }
            .pa-layout .pd-me {
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
                    box-sizing: border-box;
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
                    box-sizing: border-box;
                    width: ${({theme:e})=>e.barHeight};
                    height: ${({theme:e})=>e.barHeight};
                    padding: 0;
                }
                .pa-layout .pd-me .pd-word { display: none; }
                .pa-layout .pd-head { order: 1; flex-direction: column; align-items: stretch; }
                .pa-layout .pd-switches { justify-content: flex-start; }
                .pa-layout .pd-holds { order: 2; overflow: auto hidden; white-space: nowrap; scrollbar-width: none; }
                .pa-layout .pd-leaves { order: 3; overflow: visible; }
                .pa-layout .pd-words .pd-chapter { scroll-margin-block-start: calc(${({theme:e})=>e.barHeight} + ${({theme:e})=>e.space} / 2); }
            }
        `}};n(ue,"$Layout");let Ie=ue;const bt=i(Ie);var vt=Object.defineProperty,xt=Object.getOwnPropertyDescriptor,Ea=n((p,e,s,r)=>{for(var t=xt(e,s),o=p.length-1,d;o>=0;o--)(d=p[o])&&(t=d(e,s,t)||t);return t&&vt(e,s,t),t},"__decorateClass$a");const bs=class bs extends Q{constructor(){super(...arguments),this.specification=new L,this.style=m.div`
        .pa-coloured { --colour: ${e=>e.$colour}; }
    `}get colour(){return W.copy(this.text).trim()}$Coloured(...e){this.$Format(...e);const s=this.style;this._painted=r=>a.jsx(s,{$colour:this.colour,...r})}defines(e){e.classes.add(this,"pa-coloured"),e.containers.add(this,this._painted)}erase(e){e.classes.revert(this),e.containers.revert(this)}};n(bs,"$Coloured");let P=bs;const vs=class vs extends g{$saidOfAChapterOrAParagraph(e){l(e instanceof $||e instanceof f,"coloured is said of a chapter or a paragraph, and this is neither")}$givenItsColour(e){l(/^#[0-9a-f]{6}$/iu.test(e.annotations.expressed(P)?.colour??""),"coloured is given its colour as six hex digits, and this one was given something else")}};n(vs,"ColouredSpecification");let L=vs;Ea([h("coloured is said of a chapter or a paragraph")],L.prototype,"$saidOfAChapterOrAParagraph");Ea([h("coloured is given its colour")],L.prototype,"$givenItsColour");const hi=i(P);var wt=Object.defineProperty,yt=Object.getOwnPropertyDescriptor,v=n((p,e,s,r)=>{for(var t=yt(e,s),o=p.length-1,d;o>=0;o--)(d=p[o])&&(t=d(e,s,t)||t);return t&&wt(e,s,t),t},"__decorateClass$9");const F=n((p,e,s)=>{const r=p?.annotations.expressed(k)?.painted;return r===void 0?e:a.jsx(r,{children:e},s)},"painted"),xs=class xs extends x{constructor(){super(...arguments),this.specification=new A}get name(){return this.chapter?.title?.name??""}get author(){return this.chapter?.annotations.expressed(as)?.name??""}get illustration(){return this.chapter?.text.find(f).find(e=>e.is(R))}get drawing(){const e=this.illustration?.text.find(be)[0];return e===void 0?"":W.copy(e.text).trim()}get scheme(){return this.chapter?.annotations.expressed(k)}get window(){return this.chapter?.annotations.expressed(C)}};n(xs,"$BookshelfCover");let V=xs;const ws=class ws extends u{constructor(){super(...arguments),this.specification=new S}defines(e){e.classes.add(this,"pa-illustration")}erase(e){e.classes.revert(this)}};n(ws,"$Illustration");let R=ws;const ys=class ys extends Q{constructor(){super(...arguments),this.specification=new E,this.$ground="",this.$band="",this.$bandInk="",this.$foot="",this.$footInk="",this.$ink="",this.style=m.div.attrs({className:"pd-scheme"})`
        ${e=>e.$scheme}
    `}get colours(){return[this.$ground,this.$band,this.$bandInk,this.$foot,this.$footInk,this.$ink]}get declarations(){return`--ground: ${this.$ground}; --band: ${this.$band}; --band-ink: ${this.$bandInk}; --foot: ${this.$foot}; --foot-ink: ${this.$footInk}; --ink: ${this.$ink};`}get painted(){return this._painted}$Scheme(...e){this.$Format(...e);const s=this.style;this._painted=r=>a.jsx(s,{$scheme:this.declarations,...r})}defines(e){e.classes.add(this,"pa-scheme"),e.containers.add(this,this._painted)}erase(e){e.classes.revert(this),e.containers.revert(this)}};n(ys,"$Scheme");let k=ys;const ks=class ks extends u{constructor(){super(...arguments),this.specification=new Y,this.$x="",this.$y=""}get declarations(){return`--window-x: ${this.$x}px; --window-y: ${this.$y}px;`}};n(ks,"$Window");let C=ks;const js=class js extends u{constructor(){super(...arguments),this.specification=new B}get cover(){return this._cover}get jacket(){return this._cover?.annotations.expressed(x)}$Volume(...e){this._cover=e.find(s=>s instanceof $),this.$Annotation(...e.filter(s=>s!==this._cover))}defines(e){e.classes.add(this,"pa-volume")}erase(e){e.classes.revert(this)}};n(js,"$Volume");let j=js;const zs=class zs extends f{get cover(){return this.$cover?.annotations.expressed(x)}$Jacket(...e){this.$Writing(...e),this._painted=s=>{const r=this.cover?.scheme?.painted;return r===void 0?a.jsx("div",{...s}):a.jsx(r,{...s})},this.containers.add(this,this._painted)}write(){const e=this.cover;if(e===void 0)return;const s=i(w),r=i(is);return a.jsxs(a.Fragment,{children:[a.jsx(s,{children:e.name}),a.jsx("span",{className:"pd-drawing",dangerouslySetInnerHTML:{__html:e.drawing}}),a.jsxs(s,{children:[a.jsx(r,{}),e.author]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-jacket")}};n(zs,"$Jacket");let Ce=zs;const Os=class Os extends f{get filedElsewhere(){return this.$subject!==void 0&&this.$subject!==this.$cover}$Logo(...e){this.$Writing(...e),this._held=({className:s,children:r,...t})=>{const[o,d]=at.useState(!1);return a.jsx("div",{className:o?`${s??""} pa-filed`.trim():s,onMouseOver:n(H=>{H.target instanceof Element&&H.target.closest(".pd-filed")!==null&&d(!0)},"onMouseOver"),onMouseLeave:n(()=>d(!1),"onMouseLeave"),...t,children:r})},this.containers.add(this,this._held)}write(){const e=this.$cover,s=this.$subject;if(e!==void 0)return a.jsxs(a.Fragment,{children:[this.filedElsewhere?F(s,a.jsx("span",{className:"pd-filed",children:this.mark(s)})):void 0,F(e,a.jsx("span",{className:"pd-own",children:this.mark(e)})),a.jsxs("span",{className:"pd-names",children:[F(e,a.jsx("span",{className:"pd-name",children:this.name(e)})),this.filedElsewhere?F(s,a.jsx("span",{className:"pd-name pd-under",children:this.name(s)})):void 0]})]})}mark(e){const s=i(Pt),r=i(b);return a.jsx(s,{cover:e,children:a.jsx(r,{children:e.mention.identifier})})}name(e){const s=i(w),r=i(b);return a.jsxs(s,{children:[a.jsx(r,{children:e.mention.identifier}),e.title.name]})}$Define(){super.$Define(),this.classes.add(this,"pd-logo")}};n(Os,"$Logo");let Ae=Os;const Ps=class Ps extends z{constructor(){super(...arguments),this.style=m.span`
        ${e=>e.$vars}
    `}get cover(){return this.$cover?.annotations.expressed(x)}$Mark(...e){this.$Writing(...e);const s=this.style;this._painted=r=>a.jsx(s,{$vars:`${this.cover?.scheme?.declarations??""} ${this.cover?.window?.declarations??""}`,...r}),this.containers.add(this,this._painted)}write(){return a.jsx("span",{className:"pd-drawing",dangerouslySetInnerHTML:{__html:this.cover?.drawing??""}})}$Define(){super.$Define(),this.classes.add(this,"pd-mark")}};n(Ps,"$Mark");let Me=Ps;const Ds=class Ds extends st{$carriesItsScheme(e){l(e.is(k),"a bookshelf cover carries its scheme, and this one carries none")}$carriesItsWindow(e){l(e.is(C),"a bookshelf cover carries its window, and this one carries none")}$carriesItsIllustration(e){l(e instanceof $&&e.text.find(f).some(s=>s.is(R)),"a bookshelf cover carries its illustration, and this one carries none")}};n(Ds,"BookshelfCoverSpecification");let A=Ds;v([h("a bookshelf cover carries its scheme")],A.prototype,"$carriesItsScheme");v([h("a bookshelf cover carries its window")],A.prototype,"$carriesItsWindow");v([h("a bookshelf cover carries its illustration")],A.prototype,"$carriesItsIllustration");const Is=class Is extends g{$saidOfADrawing(e){l(e instanceof f&&e.chapter?.is(x)===!0&&e.text.find(be).length===1,"an illustration is said of a paragraph of a cover that holds one drawing, and this is not one")}};n(Is,"IllustrationSpecification");let S=Is;v([h("an illustration is said of a paragraph of a cover that holds one drawing")],S.prototype,"$saidOfADrawing");const Cs=class Cs extends g{$saidOfACover(e){l(e instanceof $&&e.is(x),"a scheme is said of a cover, and this is not one")}$givenItsColours(e){const s=e.annotations.expressed(k)?.colours??[];l(s.every(r=>/^#[0-9a-f]{6}$/iu.test(r)),"a scheme is given its six colours as six hex digits each — the ground, the band and its ink, the foot and its ink, and the ink of the drawing — and this one was given something else")}};n(Cs,"SchemeSpecification");let E=Cs;v([h("a scheme is said of a cover")],E.prototype,"$saidOfACover");v([h("a scheme is given its six colours")],E.prototype,"$givenItsColours");const As=class As extends g{$saidOfACover(e){l(e instanceof $&&e.is(x),"a window is said of a cover, and this is not one")}$givenItsPlace(e){const s=e.annotations.expressed(C);l(/^-?\d+$/u.test(s?.$x??"")&&/^-?\d+$/u.test(s?.$y??""),"a window is given where it stands on the drawing, two whole numbers, and this one was given something else")}};n(As,"WindowSpecification");let Y=As;v([h("a window is said of a cover")],Y.prototype,"$saidOfACover");v([h("a window is given where it stands on the drawing")],Y.prototype,"$givenItsPlace");const Ms=class Ms extends g{$saidOfAChapterStandingForABook(e){l(e instanceof $&&(e.is(X)||e.is(x)),"a volume is said of a chapter that stands for another book, a synopsis of it or a cover filed under it, and this is neither")}$holdsTheCover(e){const s=[e.annotations.expressed(X)?.means?.identifier,e.annotations.expressed(Da)?.means?.identifier,e.annotations.expressed(as)?.means?.identifier];l(e.annotations.find(j).every(r=>r.cover?.is(x)===!0&&s.includes(r.cover.mention?.identifier)),"a volume holds the cover of a book its chapter stands for, the book a synopsis is of or the subject or author a cover is filed under, and one here holds something else")}};n(Ms,"VolumeSpecification");let B=Ms;v([h("a volume is said of a chapter that stands for another book")],B.prototype,"$saidOfAChapterStandingForABook");v([h("a volume holds the cover of a book its chapter stands for")],B.prototype,"$holdsTheCover");const kt=i(V),Ya=i(R),Ba=i(k),Ga=i(C),jt=i(j),zt=i(Ce),Ot=i(Ae),Ja=i(Me),Pt=Ja;var Dt=Object.defineProperty,It=Object.getOwnPropertyDescriptor,rs=n((p,e,s,r)=>{for(var t=It(e,s),o=p.length-1,d;o>=0;o--)(d=p[o])&&(t=d(e,s,t)||t);return t&&Dt(e,s,t),t},"__decorateClass$8");const _s=class _s extends Q{constructor(){super(...arguments),this.specification=new re,this.style=m.div`
        ${e=>e.$vars===void 0?"":`.pa-entry { ${e.$vars} }`}
    `}get place(){return U(this.parent).identifier}get leads(){return this.book.named(this.place)}get cover(){return this.leads?.annotations.expressed(j)?.cover??this.book.coverOf(this.place)}get vars(){const e=this.cover?.annotations.expressed(k);if(e!==void 0)return e.declarations;const s=this.leads?.annotations.expressed(P)?.colour;return s===void 0?void 0:`--colour: ${s};`}$Entry(...e){this.$Format(...e);const s=this.style;this._painted=r=>a.jsx(s,{$vars:this.vars,...r})}defines(e){e.classes.add(this,"pa-entry"),e.containers.add(this,this._painted),(this.place===this.book?.$bookmark||this.place===this.book.open?.mention?.identifier)&&e.classes.add(this,"pa-open")}erase(e){e.classes.revert(this),e.containers.revert(this)}};n(_s,"$Entry");let ee=_s;const Ns=class Ns extends u{constructor(){super(...arguments),this.specification=new ie}defines(e){e.classes.add(this,"pa-appendix")}erase(e){e.classes.revert(this)}};n(Ns,"$Appendix");let se=Ns;const Hs=class Hs extends u{constructor(){super(...arguments),this.specification=new te}get entries(){return this.chapter.text.find(Z).flatMap(s=>s.text.find(f)).filter(s=>!s.is(tt)&&U(s)!==void 0)}$Bound(){const e=i(Ka);for(const s of this.entries)s.annotations.add(this,a.jsx(e,{}));super.$Bound()}};n(Hs,"$Index");let ae=Hs;const Fs=class Fs extends g{$saidOfATableOfContents(e){l(e.is(ve),"an index is said of a table of contents, and this chapter is not one")}};n(Fs,"IndexSpecification");let te=Fs;rs([h("an index is said of a table of contents")],te.prototype,"$saidOfATableOfContents");const Ws=class Ws extends g{$saidOfASection(e){l(e instanceof Z&&e.chapter?.is(ve)===!0,"an appendix is said of a section of a table of contents, and this is not one")}};n(Ws,"AppendixSpecification");let ie=Ws;rs([h("an appendix is said of a section of a table of contents")],ie.prototype,"$saidOfASection");const Ts=class Ts extends g{$saidOfAnEntry(e){l(e instanceof f&&U(e)!==void 0,"an entry is said of a paragraph that leads somewhere, and this is not one")}};n(Ts,"EntrySpecification");let re=Ts;rs([h("an entry is said of a paragraph that leads somewhere")],re.prototype,"$saidOfAnEntry");const U=n(p=>p.annotations.expressed(ka)??p.text.find(z).map(e=>e.annotations.expressed(ka)).find(e=>e!==void 0),"leads"),Ka=i(ee),fi=i(ae),gi=i(se),$e=class $e extends u{constructor(){super(...arguments),this.specification=new y}defines(e){for(const s of e.annotations.after(this))s instanceof $e&&e.annotations.express(s,!1);e.classes.add(this,"pa-tone")}erase(e){e.classes.revert(this)}};n($e,"$Tone");let M=$e;const Ls=class Ls extends M{defines(e){super.defines(e),e.classes.add(this,"pa-dark")}};n(Ls,"$Dark");let _e=Ls;const Rs=class Rs extends M{defines(e){super.defines(e),e.classes.add(this,"pa-light")}};n(Rs,"$Light");let Ne=Rs;const Es=class Es extends M{defines(e){super.defines(e),e.classes.add(this,"pa-white-over-black")}};n(Es,"$WhiteOverBlack");let He=Es;const xe=i(M),Qa=i(_e),ns=i(Ne),Ct=i(He);var At=Object.defineProperty,Mt=Object.getOwnPropertyDescriptor,_t=n((p,e,s,r)=>{for(var t=Mt(e,s),o=p.length-1,d;o>=0;o--)(d=p[o])&&(t=d(e,s,t)||t);return t&&At(e,s,t),t},"__decorateClass$7");const Ys=class Ys extends z{write(){const e=this.book.pages;return`${e.indexOf(this.chapter)+1} of ${e.length}`}$Define(){super.$Define(),this.classes.add(this,"pd-count")}};n(Ys,"$Count");let Fe=Ys;const Bs=class Bs extends u{constructor(){super(...arguments),this.specification=new G}defines(e){e.classes.add(this,"pa-before")}erase(e){e.classes.revert(this)}};n(Bs,"$Before");let We=Bs;const Gs=class Gs extends u{constructor(){super(...arguments),this.specification=new G}defines(e){e.classes.add(this,"pa-after")}erase(e){e.classes.revert(this)}};n(Gs,"$After");let Te=Gs;const Js=class Js extends g{$saidOfAWordOfATurn(e){l(e instanceof z&&e.parent instanceof ne,"this is said of a word of a turn, and here it is said of something else")}};n(Js,"OfATurnSpecification");let G=Js;_t([h("this is said of a word of a turn")],G.prototype,"$saidOfAWordOfATurn");const Nt=i(Fe),Ht=i(We),Ft=i(Te),Ks=class Ks extends f{get before(){const e=this.book.pages;return e[e.indexOf(this.chapter)-1]??this.chapter}get after(){const e=this.book.pages;return e[e.indexOf(this.chapter)+1]??this.chapter}write(){const e=i(w),s=i(Nt),r=i(Ht),t=i(Ft),o=i(this.before===this.chapter?je:b),d=i(this.after===this.chapter?je:b);return a.jsxs(a.Fragment,{children:[a.jsxs(e,{children:[a.jsx(r,{}),a.jsx(o,{children:this.before.mention.identifier}),"← ",this.before.title.name]}),a.jsx(s,{}),a.jsxs(e,{children:[a.jsx(t,{}),a.jsx(d,{children:this.after.mention.identifier}),this.after.title.name," →"]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-turn")}};n(Ks,"$Turn");let ne=Ks;const Wt=i(ne);var Tt=Object.defineProperty,Lt=Object.getOwnPropertyDescriptor,we=n((p,e,s,r)=>{for(var t=r>1?void 0:r?Lt(e,s):e,o=p.length-1,d;o>=0;o--)(d=p[o])&&(t=(r?d(e,s,t):d(t))||t);return r&&t&&Tt(e,s,t),t},"__decorateClass$6");const Qs=class Qs extends it{constructor(){super(...arguments),this.specification=new I}get chapters(){return this.text.find($).filter(e=>[...e.classes].includes("pd-canonical"))}get placed(){return[this.cover,this.synopsis,this.table,...this.chapters]}get pages(){const e=this.appendix;return this.chapters.filter(s=>!e.includes(s))}get appendix(){const e=this.table;if(e===void 0)return[];const s=e.text.find(Z).filter(r=>r.is(se)).flatMap(r=>r.text.find(f).map(t=>U(t)?.identifier));return this.chapters.filter(r=>s.includes(r.mention?.identifier??""))}get open(){return this.$bookmark===void 0?void 0:this.named(this.$bookmark)}get tones(){return[Qa,ns,Ct]}write(){return a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"pd-library",children:this.library()}),a.jsx("div",{className:"pd-me",children:this.me()}),a.jsx("div",{className:"pd-holds",children:this.holds()}),a.jsx("div",{className:"pd-head",children:this.head()}),a.jsxs("div",{className:"pd-leaves",children:[this.front(),this.leaves()]})]})}library(){if(this._logo===void 0)return;const e=i(this._logo);return a.jsx(e,{})}me(){const e=i(Ja),s=i(b),r=this.coverOf(this.author?.means?.identifier);return a.jsxs(a.Fragment,{children:[this.byline(),r===void 0?void 0:this.painted(r,a.jsx(e,{cover:r,children:a.jsx(s,{children:r.mention.identifier})}))]})}painted(e,s,r){return F(e,s,r)}holds(){const e=i(this.table);return a.jsx(e,{})}head(){const e=i(this.cover);return a.jsxs(a.Fragment,{children:[this.filed(),a.jsx(e,{}),a.jsx("div",{className:"pd-switches",children:this.switches()})]})}front(){return a.jsx("div",{className:this.open===void 0?"pd-leaf pd-front pd-open":"pd-leaf pd-front",children:this.opening()})}opening(){const e=i(this.synopsis);return a.jsx("div",{className:"pd-words",children:a.jsx(e,{})})}leaves(){return this.chapters.map((e,s)=>{const r=i(e);return a.jsxs("div",{className:e===this.open?"pd-leaf pd-open":"pd-leaf",children:[a.jsx("div",{className:"pd-words",children:a.jsx(r,{})}),a.jsx("div",{className:"pd-files",children:this.listings(e)})]},s)})}named(e){return(this._places??this.places()).get(e)}places(){const e=new Map;for(const s of this.chapters)for(const r of this.sections(s))r.mention!==void 0&&!e.has(r.mention.identifier)&&e.set(r.mention.identifier,s);for(const s of this.chapters)s.mention!==void 0&&e.set(s.mention.identifier,s);return e}coverOf(e){if(e!==void 0)return this.means?.identifier===e?this.cover:this.cover?.annotations.find(j).map(s=>s.cover).find(s=>s?.mention?.identifier===e)}byline(){const e=i(La);return a.jsx(e,{chapter:this.cover})}filed(){const e=i(Ra);return a.jsx(e,{chapter:this.cover})}switches(){}listings(e){const s=i(ct);return e.annotations.find(Ia).reverse().map((r,t)=>a.jsx(s,{chapter:e,identifier:r.$identifier,type:r.$type},t))}sections(e){return e.text.find(Z).flatMap(s=>[s,...this.sections(s)])}turn(){this.bookmark!==this.cover&&super.turn()}$Define(){super.$Define();const e=i(bt),s=i(xe);this.annotations.add(this,a.jsx(e,{}),a.jsx(s,{}))}$Bound(){this._places=this.places();const e=i(Ot);this._logo=rt.chemical(a.jsx(e,{cover:this.cover,subject:this.coverOf(this.subject?.means?.identifier)}),this);const s=i(Wt);for(const r of this.pages)r.text.add(this,a.jsx(s,{}));super.$Bound()}};n(Qs,"$LibraryBook");let D=Qs;we([Ca()],D.prototype,"_places",2);const Us=class Us extends nt{$holdsOnlyChapters(e){l([...e.text].every(s=>s instanceof $),"a book of this library holds only chapters, and this one holds something else")}$placesEveryChapter(e){l(e.text.find($).every(s=>e.placed.includes(s)),"a book of this library has a place for every chapter it holds, and this one holds a chapter it places nowhere")}$onlyAChapterAppends(e){l(e.text.find($).every(s=>e.chapters.includes(s)||!s.is(Ia)),"only an ordinary chapter appends a file, and here a cover, a synopsis or a table of contents appends one")}};n(Us,"LibraryBookSpecification");let I=Us;we([h("a book of this library holds only chapters")],I.prototype,"$holdsOnlyChapters",1);we([h("a book of this library has a place for every chapter it holds")],I.prototype,"$placesEveryChapter",1);we([h("only an ordinary chapter appends a file")],I.prototype,"$onlyAChapterAppends",1);const Ua=i(D);i(Ua,ts)(lt);i(Ua,xe)(Qa);const Xs=class Xs extends z{get on(){return this.book.is(this.$of)}$Switch(...e){this.$Writing(...e),this._button=s=>a.jsx("button",{type:"button","aria-pressed":this.on,onClick:n(()=>this.press(),"onClick"),...s}),this.containers.replace(this,"span",this._button)}press(){const e=this.book,s=[e.$is].flat();e.$is=this.on?s.filter(r=>r!==this.$of):[this.$of,...s]}$Define(){super.$Define(),this.classes.add(this,"pd-switch")}};n(Xs,"$Switch");let oe=Xs;const Zs=class Zs extends oe{press(){const e=this.book,s=[e.$is].flat().filter(r=>!this.$among.includes(r));e.$is=[this.$of,...s]}};n(Zs,"$Tab");let Le=Zs;const za=i(oe),Rt=i(Le);var Et=Object.defineProperty,Yt=Object.getOwnPropertyDescriptor,Bt=n((p,e,s,r)=>{for(var t=Yt(e,s),o=p.length-1,d;o>=0;o--)(d=p[o])&&(t=d(e,s,t)||t);return t&&Et(e,s,t),t},"__decorateClass$5");const me=class me extends u{constructor(){super(...arguments),this.specification=new y}defines(e){for(const s of e.annotations.after(this))s instanceof me&&e.annotations.express(s,!1);e.classes.add(this,"pa-reading")}erase(e){e.classes.revert(this)}};n(me,"$Reading");let J=me;const qs=class qs extends J{defines(e){super.defines(e),e.classes.add(this,"pa-code-forward")}};n(qs,"$CodeForward");let Re=qs;const Vs=class Vs extends J{defines(e){super.defines(e),e.classes.add(this,"pa-words-forward")}};n(Vs,"$WordsForward");let Ee=Vs;const Ss=class Ss extends u{constructor(){super(...arguments),this.specification=new pe}defines(e){e.classes.add(this,"pa-brief")}erase(e){e.classes.revert(this)}};n(Ss,"$Brief");let de=Ss;const ea=class ea extends g{$saidOfAParagraph(e){l(e instanceof f,"brief is said of a paragraph, and this is not one")}};n(ea,"BriefSpecification");let pe=ea;Bt([h("brief is said of a paragraph")],pe.prototype,"$saidOfAParagraph");const Xa=i(J),Oa=i(Re),Ye=i(Ee),ui=i(de);var Gt=Object.defineProperty,Jt=Object.getOwnPropertyDescriptor,Kt=n((p,e,s,r)=>{for(var t=Jt(e,s),o=p.length-1,d;o>=0;o--)(d=p[o])&&(t=d(e,s,t)||t);return t&&Gt(e,s,t),t},"__decorateClass$4");const sa=class sa extends Q{constructor(){super(...arguments),this.specification=new y,this.themeProvider=!0,this.style=m.div`
        .pa-spread .pd-leaf.pd-open {
            display: grid;
            grid-template-columns: minmax(0, 1fr) calc(2.2 * ${({theme:e})=>e.spreadColumn});
            grid-template-areas: 'words files';
            height: 100%;
            transition: grid-template-columns ${({theme:e})=>e.beat};
        }
        .pa-spread .pd-words { grid-area: words; overflow-y: auto; }
        .pa-spread .pd-files { grid-area: files; overflow-y: auto; min-width: 0; }
        .pa-spread .pd-files:empty { display: none; }
        .pa-spread.pa-words-forward .pd-leaf.pd-open { grid-template-columns: minmax(0, 1fr) calc(2.33 * ${({theme:e})=>e.space}); }
        .pa-spread.pa-words-forward .pd-files { overflow: hidden; }
        .pa-spread.pa-words-forward .pd-paragraph.pd-listing {
            display: flex;
            justify-content: center;
            padding: calc(${({theme:e})=>e.space} * 0.6667) 0 0;
        }
        .pa-spread.pa-words-forward .pd-listing .pd-word {
            writing-mode: vertical-rl;
            padding: 0;
            border-radius: 0;
        }
        .pa-spread.pa-words-forward .pd-listing .pd-code { display: none; }
        .pa-spread.pa-words-forward .pd-words .pd-paragraph.pa-brief { display: none; }
        .pa-spread.pa-code-forward .pd-leaf.pd-open {
            grid-template-columns: minmax(0, 1fr);
            grid-template-areas: 'words' 'files';
            height: auto;
        }
        .pa-spread.pa-code-forward .pd-words, .pa-spread.pa-code-forward .pd-files { overflow: visible; }
        .pa-spread.pa-code-forward .pd-files {
            margin: 0 calc(${({theme:e})=>e.space} * 1.8333) calc(${({theme:e})=>e.space} * 1.6667);
            border-radius: calc(${({theme:e})=>e.space} / 2);
            min-height: calc(${({theme:e})=>e.space} * 17.5);
        }
        .pa-spread.pa-code-forward .pd-words .pd-section { display: none; }
        @media (max-width: ${({theme:e})=>e.narrow}) {
            .pa-spread .pd-leaf.pd-open { display: block; height: auto; }
            .pa-spread.pa-words-forward .pd-listing .pd-word { writing-mode: horizontal-tb; }
        }
    `}defines(e){super.defines(e),e.classes.add(this,"pa-spread")}erase(e){super.erase(e),e.classes.revert(this)}};n(sa,"$Spread");let Be=sa;const Qt=i(Be),aa=class aa extends D{constructor(){super(...arguments),this.specification=new ce}get readings(){return[Oa,Ye]}get open(){return super.open??this.pages[0]}front(){}switches(){const e=i(Rt);return a.jsxs(a.Fragment,{children:[a.jsx(e,{chapter:this.cover,of:Oa,among:this.readings,children:"code"}),a.jsx(e,{chapter:this.cover,of:Ye,among:this.readings,children:"words"}),super.switches()]})}$Define(){super.$Define();const e=i(Qt),s=i(Xa);this.annotations.add(this,a.jsx(e,{}),a.jsx(s,{}))}};n(aa,"$Manual");let Ge=aa;const ta=class ta extends I{$everyChapterHasABrief(e){l(e.chapters.every(s=>s.text.find(f).some(r=>r.is(de))),"every chapter of a manual opens with a brief, and one here has none")}};n(ta,"ManualSpecification");let ce=ta;Kt([h("every chapter of a manual opens with a brief")],ce.prototype,"$everyChapterHasABrief");const ye=i(Ge);i(ye,Xa)(Ye);i(ye,xe)(ns);var Ut=Object.defineProperty,Xt=Object.getOwnPropertyDescriptor,os=n((p,e,s,r)=>{for(var t=Xt(e,s),o=p.length-1,d;o>=0;o--)(d=p[o])&&(t=d(e,s,t)||t);return t&&Ut(e,s,t),t},"__decorateClass$3");const ia=class ia extends u{constructor(){super(...arguments),this.specification=new _}get date(){return this.text.find(Aa)[0]}defines(e){e.classes.add(this,"pa-dated")}erase(e){e.classes.revert(this)}note(){const e=i(this.date);return a.jsx(e,{})}};n(ia,"$Dated");let K=ia;const ra=class ra extends g{$saidOfAChapter(e){l(e instanceof $,"dated is said of a chapter, and this is not one")}$datedOnce(e){l(e.annotations.containsOne(K),"a chapter is dated once, and this one is dated more than once")}$givenOneDate(e){l(e.annotations.expressed(K)?.text.find(Aa).length===1,"a dated chapter is given one date, and this one is given none or more than one")}};n(ra,"DatedSpecification");let _=ra;os([h("dated is said of a chapter")],_.prototype,"$saidOfAChapter");os([h("a chapter is dated once")],_.prototype,"$datedOnce");os([h("a dated chapter is given one date")],_.prototype,"$givenOneDate");const $i=i(K);var Zt=Object.defineProperty,qt=Object.getOwnPropertyDescriptor,ds=n((p,e,s,r)=>{for(var t=qt(e,s),o=p.length-1,d;o>=0;o--)(d=p[o])&&(t=d(e,s,t)||t);return t&&Zt(e,s,t),t},"__decorateClass$2");const na=class na extends Q{constructor(){super(...arguments),this.specification=new N}get identifier(){return ja.reference(W.copy(this.text))?.identifier??""}get name(){return ja.reference(W.copy(this.text))?.name??""}get entry(){return this.book?.named(this.identifier)}get drawing(){const e=this.entry?.text.find(f).flatMap(s=>s.text.find(be))[0];return e===void 0?"":W.copy(e.text).trim()}get colour(){return this.entry?.annotations.expressed(P)?.colour??""}$Kind(...e){this.$Format(...e);const s=i(Vt);this._layer=r=>a.jsxs("div",{...r,children:[a.jsx(s,{kind:this}),r.children]})}defines(e){e.classes.add(this,"pa-kind"),e.containers.add(this,this._layer)}erase(e){e.classes.revert(this),e.containers.revert(this)}};n(na,"$Kind");let O=na;const oa=class oa extends z{constructor(){super(...arguments),this.style=m.span`
        --colour: ${e=>e.$colour};
    `}$Icon(...e){this.$Writing(...e);const s=this.style;this._painted=r=>a.jsx(s,{$colour:this.$kind?.colour??"",...r}),this.containers.replace(this,"span",this._painted)}write(){return a.jsx("span",{className:"pd-drawing",role:"img","aria-label":this.$kind?.name,dangerouslySetInnerHTML:{__html:this.$kind?.drawing??""}})}$Define(){super.$Define(),this.classes.add(this,"pd-icon")}};n(oa,"$Icon");let Je=oa;const da=class da extends g{$saidOfAChapter(e){l(e instanceof $,"a kind is said of a chapter, and this is not one")}$namesAnEntry(e){const s=e.annotations.expressed(O)?.entry;l(s!==void 0&&s.annotations.expressed(O)?.entry===s,"a kind names an entry of the key, a chapter of this book whose kind is itself, and this one names something else")}$entryHoldsItsDrawingAndColour(e){const s=e.annotations.expressed(O)?.entry;s!==void 0&&l(s.text.find(f).flatMap(r=>r.text.find(be)).length===1&&s.is(P),"an entry of the key holds one drawing and its colour, and this one holds something else")}};n(da,"KindSpecification");let N=da;ds([h("a kind is said of a chapter")],N.prototype,"$saidOfAChapter");ds([h("a kind names an entry of the key")],N.prototype,"$namesAnEntry");ds([h("an entry of the key holds one drawing and its colour")],N.prototype,"$entryHoldsItsDrawingAndColour");const mi=i(O),Za=i(Je),Vt=Za,pa=class pa extends ee{constructor(){super(...arguments),this.label=m.span.attrs({className:"pa-number"})``}get number(){return this.book.pages.indexOf(this.leads)+1}get kind(){return this.leads?.annotations.expressed(O)}note(){const e=this.label,s=i(Za),r=this.kind;return a.jsxs(a.Fragment,{children:[r===void 0?void 0:a.jsx(s,{kind:r}),this.number===0?void 0:a.jsx(e,{children:String(this.number)})]})}};n(pa,"$NumberedEntry");let Ke=pa;const St=i(Ke);i(ye,Ka)(St);const ca=class ca extends T{constructor(){super(...arguments),this.measure="58ch",this.spreadColumn="15.5rem",this.colour="#4fb3a8",this.side="#e3f4f1",this.sideLine="#c6e5df",this.ink="#1a1f36",this.heading="#1a1f36",this.soft="#4f566b",this.faint="#8792a2",this.line="#e6e8ee",this.rule="#e6e8ee",this.panel="#f7f8fa",this.accent="#0a7a70",this.capital="#0a7a70",this.lit="#0a7a70",this.tint="#e3f4f1",this.night="#0f2a33",this.dusk="#17363f"}parts(){return[...super.parts(),this.index(),this.words(),this.icons(),this.file(),this.fold(),this.small()]}icons(){return c`
            .pd-word.pd-icon {
                display: inline-block;
                flex: none;
                width: calc(1.143 * ${({theme:e})=>e.size});
                height: calc(1.143 * ${({theme:e})=>e.size});
                color: var(--colour);
            }
            .pd-icon .pd-drawing, .pd-icon svg, .pd-svg svg { display: block; width: 100%; height: 100%; }
            .pd-icon svg, .pd-svg svg { fill: none; stroke: var(--colour); stroke-width: 1.25; stroke-linecap: round; stroke-linejoin: round; }
            .pd-icon .ground, .pd-svg .ground { fill: color-mix(in oklch, var(--colour) 24%, white); stroke: var(--colour); stroke-width: 1.5; }
            .pd-icon .dot, .pd-svg .dot { fill: var(--colour); stroke: none; }
            .pd-icon .over, .pd-svg .over { fill: color-mix(in oklch, var(--colour) 24%, white); }
            .pd-icon .solid, .pd-svg .solid { fill: var(--colour); }
            .pd-holds .pa-entry .pd-icon { order: -1; }
            .pd-words .pd-icon {
                float: inline-start;
                width: calc(1.571 * ${({theme:e})=>e.size});
                height: calc(1.571 * ${({theme:e})=>e.size});
                margin: calc(${({theme:e})=>e.space} / 4) calc(${({theme:e})=>e.space} * 0.4167) 0 0;
            }
            .pd-words .pd-paragraph .pd-svg { display: block; width: calc(${({theme:e})=>e.space} * 4); height: calc(${({theme:e})=>e.space} * 4); }
        `}holds(){return c`
            ${super.holds()}
            .pd-holds .pd-paragraph.pa-entry { justify-content: flex-start; padding: calc(${({theme:e})=>e.space} / 4) calc(${({theme:e})=>e.space} / 3); }
            .pd-holds .pd-paragraph.pa-entry::before { content: none; }
        `}index(){return c`
            .pd-holds {
                background: ${({theme:e})=>e.panel};
                border-inline-end: thin solid ${({theme:e})=>e.line};
                padding: calc(${({theme:e})=>e.space} * 0.75) calc(${({theme:e})=>e.space} * 0.6);
                scrollbar-width: thin;
                scrollbar-color: ${({theme:e})=>e.line} transparent;
            }
            .pd-head .pd-switches { margin-block-start: calc(${({theme:e})=>e.space} / 2); }
            .pd-head .pd-switch { font-size: calc(0.9 * ${({theme:e})=>e.size}); }
        `}words(){return c`
            .pd-words {
                padding: calc(${({theme:e})=>e.space} * 1.4) calc(${({theme:e})=>e.space} * 1.8);
                font-size: calc(1.0357 * ${({theme:e})=>e.size});
            }
            .pd-words .pd-chapter { margin-block: 0; }
            .pd-words .pd-title {
                font-size: calc(2.1429 * ${({theme:e})=>e.size});
                font-weight: 600;
                line-height: 1.15;
                letter-spacing: -0.02em;
                margin-block-end: calc(${({theme:e})=>e.space} * 0.4);
            }
            .pd-words .pd-section { margin-block-start: calc(${({theme:e})=>e.space} * 1.25); }
            .pd-words .pd-heading {
                font-size: calc(0.9286 * ${({theme:e})=>e.size});
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
            .pd-book.pa-code-forward .pd-words { padding: calc(${({theme:e})=>e.space} * 1.1667) calc(${({theme:e})=>e.space} * 1.8333) calc(${({theme:e})=>e.space} * 0.75); }
            .pd-book.pa-code-forward .pd-words .pd-paragraph.pa-brief {
                font-size: calc(1.1429 * ${({theme:e})=>e.size});
                color: ${({theme:e})=>e.soft};
            }
        `}file(){return c`
            .pd-book.pa-code-forward .pd-listing .pd-code { font-size: calc(0.9286 * ${({theme:e})=>e.size}); }
        `}fold(){return c`
            .pa-words-forward .pd-listing .pd-word {
                background: none;
                font-size: calc(0.8571 * ${({theme:e})=>e.size});
                letter-spacing: 0.08em;
                color: color-mix(in srgb, ${({theme:e})=>e.glow} 70%, ${({theme:e})=>e.night});
            }
        `}small(){return c`
            @media (max-width: ${({theme:e})=>e.narrow}) {
                .pd-holds, .pd-library {
                    border-inline-end: none;
                    border-block-end: thin solid ${({theme:e})=>e.line};
                }
                .pd-words { padding: calc(${({theme:e})=>e.space} * 0.83) calc(${({theme:e})=>e.space} * 0.67) calc(${({theme:e})=>e.space} / 3); }
                .pd-words .pd-title { font-size: calc(1.72 * ${({theme:e})=>e.size}); }
            }
        `}};n(ca,"$ManualTheme");let Qe=ca;const ei=i(Qe);i(ye,ts)(ei);var si=Object.defineProperty,ai=Object.getOwnPropertyDescriptor,ti=n((p,e,s,r)=>{for(var t=ai(e,s),o=p.length-1,d;o>=0;o--)(d=p[o])&&(t=d(e,s,t)||t);return t&&si(e,s,t),t},"__decorateClass$1");const la=class la extends u{constructor(){super(...arguments),this.specification=new le}defines(e){e.classes.add(this,"pa-first")}erase(e){e.classes.revert(this)}};n(la,"$First");let Ue=la;const ha=class ha extends g{$saidOfAParagraph(e){l(e instanceof f,"first is said of a paragraph, and this is not one")}};n(ha,"FirstSpecification");let le=ha;ti([h("first is said of a paragraph")],le.prototype,"$saidOfAParagraph");const bi=i(Ue),fa=class fa extends T{constructor(){super(...arguments),this.serif="'Source Serif 4', Georgia, serif",this.paper="#fdfcfa",this.ink="#343c4a",this.soft="#727d8c",this.faint="#9ea8b5",this.line="#e4e9f2",this.tint="#f0f4fc",this.barTint="#f8fafe",this.sky="#e3edfb",this.skyInk="#4a6ea0",this.accent="#4a6ea0",this.wash="linear-gradient(135deg, #f2f6fd 0%, #fdfcfa 48%, #fdf6f1 100%)",this.side="#f7f8fb",this.sideInk="#3a4452",this.sideDim="#7f8a9b",this.sideLine="#e3e7ee",this.barHeight="52px",this.holdsColumn="232px",this.space="24px",this.cover="132px",this.volume="184px",this.radius="6px",this.spine="inset 3px 0 0 rgba(0, 0, 0, 0.08), inset 4px 0 0 rgba(255, 255, 255, 0.35), 0 6px 12px -10px rgba(44, 52, 64, 0.3)",this.lift="inset 3px 0 0 rgba(0, 0, 0, 0.08), inset 4px 0 0 rgba(255, 255, 255, 0.35), 0 10px 16px -12px rgba(44, 52, 64, 0.35)",this.openSpine="inset 7px 0 0 rgba(0, 0, 0, 0.07), inset 9px 0 0 rgba(255, 255, 255, 0.45), 0 12px 22px -16px rgba(44, 52, 64, 0.35)",this.keyword="#5a4fa8",this.string="#2f7f6e",this.type="#23407a",this.comment="#8a94a3"}parts(){return[...super.parts(),this.shelf(),this.jackets(),this.desk(),this.unfolded(),this.built(),this.small()]}page(){return c`
            font-family: ${({theme:e})=>e.font};
            font-size: ${({theme:e})=>e.size};
            line-height: 1.55;
            color: ${({theme:e})=>e.ink};
            background: ${({theme:e})=>e.wash};
            min-height: 100vh;
        `}library(){return c`
            ${super.library()}
            .pd-names .pd-name { font-family: ${({theme:e})=>e.serif}; font-size: calc(1.286 * ${({theme:e})=>e.size}); font-weight: 700; letter-spacing: -0.015em; }
        `}head(){return c`
            .pd-head { padding: 0; }
            .pd-head .pa-illustration { display: none; }
        `}holds(){return c`
            .pd-holds { display: grid; grid-template-rows: minmax(0, 1fr); padding: calc(${({theme:e})=>e.space} * 0.75) 0; }
            .pd-holds .pd-chapter { display: flex; flex-direction: column; min-height: 100%; margin-block: 0; }
            .pd-holds .pd-section { margin: 0 0 calc(${({theme:e})=>e.space} * 0.667); }
            .pd-holds .pd-heading {
                margin: 0 calc(${({theme:e})=>e.space} * 0.917) calc(${({theme:e})=>e.space} / 4);
                font-size: calc(0.75 * ${({theme:e})=>e.size});
                font-weight: 600;
                line-height: 1;
                letter-spacing: 0.12em;
                text-transform: uppercase;
                color: ${({theme:e})=>e.sideDim};
            }
            .pd-holds .pd-paragraph.pa-entry {
                position: relative;
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: calc(${({theme:e})=>e.space} * 0.375);
                margin: 0;
                padding: calc(${({theme:e})=>e.space} / 6) calc(${({theme:e})=>e.space} * 0.583) calc(${({theme:e})=>e.space} / 6) calc(${({theme:e})=>e.space} * 1.667);
                border-radius: 0;
                font-size: calc(0.93 * ${({theme:e})=>e.size});
                font-weight: 500;
                line-height: 1.35;
                color: ${({theme:e})=>e.sideInk};
                box-shadow: inset calc(${({theme:e})=>e.space} / 8) 0 0 transparent;
            }
            .pd-holds .pd-paragraph.pa-entry::before {
                content: '';
                position: absolute;
                inset-inline-start: calc(${({theme:e})=>e.space} * 0.958);
                width: calc(${({theme:e})=>e.space} / 3);
                height: calc(${({theme:e})=>e.space} / 3);
                border-radius: 50%;
                background: var(--band-ink, ${({theme:e})=>e.skyInk});
                box-shadow: 0 0 0 calc(${({theme:e})=>e.space} / 12) ${({theme:e})=>e.white};
            }
            .pd-holds .pd-paragraph.pa-entry:hover { background: color-mix(in oklch, var(--band, ${({theme:e})=>e.sky}) 30%, white); }
            .pd-holds .pd-paragraph.pa-entry.pa-open {
                background: color-mix(in oklch, var(--band, ${({theme:e})=>e.sky}) 45%, white);
                color: var(--band-ink, ${({theme:e})=>e.skyInk});
                box-shadow: inset calc(${({theme:e})=>e.space} / 8) 0 0 var(--band-ink, ${({theme:e})=>e.skyInk});
            }
            .pd-holds .pa-reference.pa-reference { color: inherit; text-decoration: none; }
            .pd-holds .pd-word.pa-arrow {
                display: grid;
                place-items: center;
                width: calc(${({theme:e})=>e.space} * 0.833);
                height: calc(${({theme:e})=>e.space} * 0.833);
                border: thin solid transparent;
                border-radius: 50%;
                color: ${({theme:e})=>e.faint};
            }
            .pd-holds .pd-word.pa-arrow .pa-content {
                display: block;
                margin-inline-start: calc(${({theme:e})=>e.space} / 24);
                font-size: calc(0.786 * ${({theme:e})=>e.size});
                line-height: 1;
                color: inherit;
            }
            .pd-holds .pa-entry:hover .pd-word.pa-arrow { border-color: ${({theme:e})=>e.line}; background: ${({theme:e})=>e.white}; color: ${({theme:e})=>e.soft}; }
            .pd-holds .pd-word.pa-arrow:hover {
                border-color: var(--band-ink, ${({theme:e})=>e.skyInk});
                background: var(--band, ${({theme:e})=>e.sky});
                color: var(--band-ink, ${({theme:e})=>e.skyInk});
            }
            .pd-holds .pa-parenthetical { display: none; }
            .pd-holds .pd-section.pa-appendix {
                margin: auto 0 0;
                padding-block-start: calc(${({theme:e})=>e.space} * 0.583);
                border-block-start: thin solid ${({theme:e})=>e.sideLine};
                opacity: 0.85;
            }
            .pd-holds .pd-section.pa-appendix .pd-heading { font-size: calc(0.68 * ${({theme:e})=>e.size}); }
            .pd-holds .pd-section.pa-appendix .pa-entry { font-size: calc(0.893 * ${({theme:e})=>e.size}); font-weight: 400; }
            @media (max-width: ${({theme:e})=>e.narrow}) {
                .pd-holds { padding: calc(${({theme:e})=>e.space} * 0.42) calc(${({theme:e})=>e.space} * 0.667) calc(${({theme:e})=>e.space} / 2); }
                .pd-holds .pd-chapter, .pd-holds .pd-section {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    gap: calc(${({theme:e})=>e.space} / 4);
                    margin: 0;
                    min-height: 0;
                }
                .pd-holds .pd-title { display: none; }
                .pd-holds .pd-heading { flex: none; margin: 0 calc(${({theme:e})=>e.space} / 4) 0 calc(${({theme:e})=>e.space} / 2); }
                .pd-holds .pd-paragraph.pa-entry {
                    flex: none;
                    padding: calc(${({theme:e})=>e.space} * 0.21) calc(${({theme:e})=>e.space} * 0.46);
                    border: thin solid currentColor;
                    border-radius: calc(${({theme:e})=>e.space} * 4);
                    white-space: nowrap;
                    box-shadow: none;
                }
                .pd-holds .pd-paragraph.pa-entry::before { display: none; }
                .pd-holds .pd-word.pa-arrow { display: none; }
                .pd-holds .pd-section.pa-appendix { margin: 0; padding: 0; border: 0; }
            }
        `}shelf(){return c`
            .pd-leaves { padding: calc(${({theme:e})=>e.space} * 1.167) calc(${({theme:e})=>e.space} * 1.5) calc(${({theme:e})=>e.space} * 2); }
            .pd-shelf {
                display: grid;
                grid-template-columns: repeat(auto-fill, ${({theme:e})=>e.cover});
                gap: calc(${({theme:e})=>e.space} * 1.083);
                align-items: start;
            }
            .pd-volume .pd-paragraph.pd-name {
                margin: calc(${({theme:e})=>e.space} * 0.417) 0 0;
                font-size: calc(0.93 * ${({theme:e})=>e.size});
                font-weight: 500;
                line-height: 1.3;
                text-align: center;
                color: ${({theme:e})=>e.ink};
            }
            .pd-volume .pa-reference { display: block; color: inherit; text-decoration: none; }
        `}jackets(){return c`
            .pd-paragraph.pd-jacket {
                position: relative;
                display: grid;
                grid-template-rows: 30% 1fr 24%;
                box-sizing: border-box;
                width: ${({theme:e})=>e.cover};
                height: calc(${({theme:e})=>e.cover} * 1.5);
                margin: 0;
                overflow: hidden;
                border-radius: calc(${({theme:e})=>e.space} / 12) calc(${({theme:e})=>e.space} / 6) calc(${({theme:e})=>e.space} / 6) calc(${({theme:e})=>e.space} / 12);
                background: var(--ground);
                color: var(--band-ink);
                font-family: ${({theme:e})=>e.serif};
                font-size: calc(0.964 * ${({theme:e})=>e.size});
                font-weight: 700;
                line-height: 1.18;
                letter-spacing: -0.005em;
                text-align: center;
                box-shadow: ${({theme:e})=>e.spine};
                cursor: pointer;
                transition: transform 0.18s ease, box-shadow 0.18s ease;
            }
            .pd-volume:hover .pd-jacket { transform: translateY(calc(${({theme:e})=>e.space} / -12)); box-shadow: ${({theme:e})=>e.lift}; }
            .pd-jacket .pd-word {
                display: grid;
                place-items: center;
                padding: calc(${({theme:e})=>e.space} / 8) calc(${({theme:e})=>e.space} * 0.417) calc(${({theme:e})=>e.space} / 8) calc(${({theme:e})=>e.space} * 0.542);
                background: var(--band);
                color: var(--band-ink);
                box-shadow: 0 calc(${({theme:e})=>e.space} / 12) 0 ${({theme:e})=>e.white};
            }
            .pd-jacket .pd-word.pa-label {
                padding: 0 calc(${({theme:e})=>e.space} * 0.417) 0 calc(${({theme:e})=>e.space} * 0.542);
                background: var(--foot);
                color: var(--foot-ink);
                font-family: ${({theme:e})=>e.font};
                font-size: calc(0.571 * ${({theme:e})=>e.size});
                font-weight: 500;
                line-height: 1.2;
                letter-spacing: 0.14em;
                text-transform: uppercase;
                box-shadow: 0 calc(${({theme:e})=>e.space} / -12) 0 ${({theme:e})=>e.white};
            }
            .pd-jacket .pd-illustration { width: 54%; height: auto; }
        `}desk(){return c`
            .pd-leaf.pd-open {
                position: relative;
                display: grid;
                grid-template-columns: ${({theme:e})=>e.volume} minmax(0, 1fr);
                gap: calc(${({theme:e})=>e.space} * 1.167);
                align-items: start;
                margin-block-end: calc(${({theme:e})=>e.space} * 1.167);
                padding: calc(${({theme:e})=>e.space} * 0.833) ${({theme:e})=>e.space};
                border: thin solid color-mix(in oklch, var(--band, ${({theme:e})=>e.sky}) 40%, white);
                border-radius: calc(${({theme:e})=>e.space} * 0.417);
                background: linear-gradient(135deg, color-mix(in oklch, var(--band, ${({theme:e})=>e.sky}) 45%, white), color-mix(in oklch, var(--ground, ${({theme:e})=>e.tint}) 60%, white) 55%, ${({theme:e})=>e.white});
                box-shadow: 0 calc(${({theme:e})=>e.space} / 3) calc(${({theme:e})=>e.space} * 0.833) calc(${({theme:e})=>e.space} * -0.75) color-mix(in oklch, var(--band-ink, ${({theme:e})=>e.skyInk}) 45%, transparent);
            }
            .pd-leaf.pd-open .pd-paragraph.pd-jacket {
                width: ${({theme:e})=>e.volume};
                height: calc(${({theme:e})=>e.volume} * 1.5);
                font-size: calc(1.357 * ${({theme:e})=>e.size});
                box-shadow: ${({theme:e})=>e.openSpine};
                cursor: default;
            }
            .pd-leaf.pd-open .pd-jacket .pd-word {
                padding: calc(${({theme:e})=>e.space} / 2) calc(${({theme:e})=>e.space} * 0.833) calc(${({theme:e})=>e.space} / 2) calc(${({theme:e})=>e.space} * 0.958);
                box-shadow: 0 calc(${({theme:e})=>e.space} / 8) 0 ${({theme:e})=>e.white};
            }
            .pd-leaf.pd-open .pd-jacket .pd-word.pa-label {
                padding: 0 calc(${({theme:e})=>e.space} * 0.75) 0 calc(${({theme:e})=>e.space} * 0.875);
                font-size: calc(0.75 * ${({theme:e})=>e.size});
                letter-spacing: 0.18em;
                box-shadow: 0 calc(${({theme:e})=>e.space} / -8) 0 ${({theme:e})=>e.white};
            }
            .pd-leaf.pd-open .pd-words {
                position: relative;
                max-height: calc(${({theme:e})=>e.volume} * 1.5);
                padding-block-start: calc(${({theme:e})=>e.space} / 4);
                overflow: clip;
            }
            .pd-leaf.pd-open .pd-words::after {
                content: '';
                position: absolute;
                inset-inline: 0;
                top: calc(${({theme:e})=>e.volume} * 1.5 - ${({theme:e})=>e.space} * 3);
                height: calc(${({theme:e})=>e.space} * 3);
                background: linear-gradient(to bottom, transparent, color-mix(in oklch, var(--ground, ${({theme:e})=>e.tint}) 60%, white) 70%, color-mix(in oklch, var(--ground, ${({theme:e})=>e.tint}) 60%, white));
                pointer-events: none;
            }
            .pd-leaf.pd-open .pd-words .pd-chapter { margin-block: 0; max-width: none; scroll-margin-block-start: calc(${({theme:e})=>e.space} * 3.5); }
            .pd-leaf.pd-open .pd-words .pd-paragraph.pd-shelved {
                display: flex;
                align-items: center;
                gap: calc(${({theme:e})=>e.space} / 3);
                margin: 0 0 calc(${({theme:e})=>e.space} / 3);
                font-size: calc(0.75 * ${({theme:e})=>e.size});
                font-weight: 600;
                line-height: 1;
                letter-spacing: 0.12em;
                text-transform: uppercase;
                color: var(--foot-ink, ${({theme:e})=>e.soft});
            }
            .pd-leaf.pd-open .pd-paragraph.pd-shelved::before {
                content: '';
                width: calc(${({theme:e})=>e.space} / 3);
                height: calc(${({theme:e})=>e.space} / 3);
                border-radius: 50%;
                background: var(--foot, ${({theme:e})=>e.sky});
            }
            .pd-leaf.pd-open .pd-words .pd-title {
                margin: 0 0 calc(${({theme:e})=>e.space} / 6);
                font-family: ${({theme:e})=>e.serif};
                font-size: calc(1.714 * ${({theme:e})=>e.size});
                font-weight: 700;
                line-height: 1.1;
                letter-spacing: -0.01em;
                color: var(--band-ink, ${({theme:e})=>e.ink});
            }
            .pd-leaf.pd-open .pd-words .pd-paragraph {
                display: block;
                max-width: 56ch;
                margin: 0 0 calc(${({theme:e})=>e.space} * 0.417);
                font-family: ${({theme:e})=>e.serif};
                font-size: calc(1.07 * ${({theme:e})=>e.size});
                font-weight: 400;
                line-height: 1.55;
                color: ${({theme:e})=>e.ink};
            }
            .pd-leaf.pd-open .pd-words .pd-paragraph.pd-turn { display: none; }
            .pd-leaf.pd-open .pd-words .pd-paragraph.pa-caption {
                font-family: ${({theme:e})=>e.font};
                font-size: ${({theme:e})=>e.size};
                font-weight: 500;
                line-height: 1.5;
                color: var(--band-ink, ${({theme:e})=>e.ink});
            }
            .pd-leaf.pd-open .pd-words .pd-paragraph .pa-reference { color: var(--band-ink, ${({theme:e})=>e.skyInk}); }
            .pd-leaf.pd-open .pd-line { grid-column: 2; display: flex; flex-wrap: wrap; gap: 0 calc(${({theme:e})=>e.space} / 2); }
            .pd-leaf.pd-open .pd-paragraph.pd-byline, .pd-leaf.pd-open .pd-paragraph.pd-filed-under {
                display: inline-flex;
                gap: calc(${({theme:e})=>e.space} / 6);
                max-width: none;
                margin: 0 calc(${({theme:e})=>e.space} / 3) calc(${({theme:e})=>e.space} * 0.667) 0;
                font-family: ${({theme:e})=>e.serif};
                font-size: calc(0.93 * ${({theme:e})=>e.size});
                line-height: 1.55;
                color: ${({theme:e})=>e.soft};
            }
            .pd-leaf.pd-open .pd-line .pd-paragraph { margin-block-end: 0; }
            .pd-leaf.pd-open .pd-byline .pa-reference, .pd-leaf.pd-open .pd-filed-under .pa-reference { color: var(--band-ink, ${({theme:e})=>e.skyInk}); font-weight: 500; text-decoration: none; }
            .pd-leaf.pd-open .pd-paragraph.pd-read { grid-column: 2; margin: 0; }
            .pd-leaf.pd-open .pd-read .pd-word {
                display: inline-flex;
                align-items: center;
                gap: calc(${({theme:e})=>e.space} / 3);
                padding: calc(${({theme:e})=>e.space} / 3) calc(${({theme:e})=>e.space} * 0.583);
                border-radius: ${({theme:e})=>e.radius};
                background: var(--band, ${({theme:e})=>e.sky});
                color: var(--band-ink, ${({theme:e})=>e.skyInk});
                font-family: ${({theme:e})=>e.font};
                font-size: calc(0.964 * ${({theme:e})=>e.size});
                font-weight: 600;
                text-decoration: none;
            }
            .pd-leaf.pd-open .pd-read .pd-word:hover { background: var(--foot, ${({theme:e})=>e.tint}); color: var(--foot-ink, ${({theme:e})=>e.ink}); }
            .pd-leaf.pd-open .pd-word.pd-switch {
                position: absolute;
                right: ${({theme:e})=>e.space};
                bottom: calc(${({theme:e})=>e.space} * 0.917);
                z-index: 1;
                display: inline-flex;
                align-items: center;
                gap: calc(${({theme:e})=>e.space} * 0.292);
                padding: calc(${({theme:e})=>e.space} / 4) calc(${({theme:e})=>e.space} / 2);
                border: thin solid color-mix(in oklch, var(--band, ${({theme:e})=>e.sky}) 60%, white);
                border-radius: ${({theme:e})=>e.radius};
                background: ${({theme:e})=>e.white};
                color: var(--band-ink, ${({theme:e})=>e.skyInk});
                font-size: calc(0.893 * ${({theme:e})=>e.size});
                font-weight: 500;
                line-height: 1;
                cursor: pointer;
            }
            .pd-leaf.pd-open .pd-word.pd-switch::after {
                content: '';
                width: calc(${({theme:e})=>e.space} * 0.375);
                height: calc(${({theme:e})=>e.space} * 0.375);
                border-inline-end: calc(${({theme:e})=>e.space} / 16) solid currentColor;
                border-block-start: calc(${({theme:e})=>e.space} / 16) solid currentColor;
                transform: translateY(calc(${({theme:e})=>e.space} / 24));
            }
            .pd-leaf.pd-open .pd-word.pd-switch:hover { background: var(--band, ${({theme:e})=>e.sky}); }
            .pd-leaf.pd-open .pd-files { display: none; }
        `}unfolded(){return c`
            .pa-unfolded .pd-shelf { display: none; }
            .pa-unfolded .pd-leaf.pd-open { margin-block-end: 0; }
            .pa-unfolded .pd-leaf.pd-open .pd-paragraph.pd-jacket { position: sticky; top: calc(${({theme:e})=>e.space} * 0.833); }
            .pa-unfolded .pd-leaf.pd-open .pd-words { max-height: none; max-width: 60ch; overflow: visible; }
            .pa-unfolded .pd-leaf.pd-open .pd-words::after { display: none; }
            .pa-unfolded .pd-leaf.pd-open .pd-words .pd-paragraph { font-size: calc(1.143 * ${({theme:e})=>e.size}); line-height: 1.6; }
            .pa-unfolded .pd-leaf.pd-open .pd-word.pd-switch { top: calc(${({theme:e})=>e.space} * 0.667); right: ${({theme:e})=>e.space}; bottom: auto; }
            .pa-unfolded .pd-leaf.pd-open .pd-word.pd-switch::after { transform: translateY(calc(${({theme:e})=>e.space} / 24)) rotate(180deg); }
        `}built(){return c`
            .pa-built .pd-holds .pd-section:not(.pa-appendix) { opacity: 0.55; }
            .pa-built .pd-holds .pd-section:not(.pa-appendix) .pa-entry { display: none; }
            .pa-built .pd-holds .pd-section.pa-appendix { order: -1; margin-block-start: 0; padding-block-start: 0; border-block-start: 0; opacity: 1; }
            .pa-built .pd-holds .pd-section.pa-appendix .pd-heading { font-size: calc(0.75 * ${({theme:e})=>e.size}); }
            .pa-built .pd-holds .pd-section.pa-appendix .pa-entry { font-size: calc(0.964 * ${({theme:e})=>e.size}); font-weight: 500; }
            .pa-built .pd-holds .pd-section.pa-appendix .pa-entry::before { background: ${({theme:e})=>e.skyInk}; }
            .pa-built .pd-front, .pa-built .pd-shelf { display: none; }
            .pa-built .pd-leaf.pd-open {
                grid-template-columns: minmax(0, 1fr);
                padding: 0;
                border: 0;
                border-radius: 0;
                background: none;
                box-shadow: none;
            }
            .pa-built .pd-leaf.pd-open .pd-words { max-height: none; padding: 0; overflow: visible; }
            .pa-built .pd-leaf.pd-open .pd-words::after { display: none; }
            .pa-built .pd-leaf.pd-open .pd-words .pd-chapter { max-width: 64ch; }
            .pa-built .pd-leaf.pd-open .pd-words .pd-title {
                margin: 0 0 calc(${({theme:e})=>e.space} / 4);
                font-size: calc(1.857 * ${({theme:e})=>e.size});
                line-height: 1.15;
                color: ${({theme:e})=>e.ink};
            }
            .pa-built .pd-leaf.pd-open .pd-words .pd-heading {
                margin: calc(${({theme:e})=>e.space} * 1.083) 0 calc(${({theme:e})=>e.space} / 3);
                font-size: calc(0.786 * ${({theme:e})=>e.size});
                font-weight: 600;
                line-height: 1;
                letter-spacing: 0.12em;
                text-transform: uppercase;
                color: ${({theme:e})=>e.soft};
            }
            .pa-built .pd-leaf.pd-open .pd-words .pd-paragraph { margin: 0 0 calc(${({theme:e})=>e.space} * 0.583); font-size: calc(1.107 * ${({theme:e})=>e.size}); line-height: 1.6; }
            .pa-built .pd-leaf.pd-open .pd-words .pd-paragraph .pa-reference { color: ${({theme:e})=>e.skyInk}; }
            .pa-built .pd-leaf.pd-open .pd-word.pd-switch { display: none; }
            .pa-built .pd-leaf.pd-open .pd-files { display: grid; gap: calc(${({theme:e})=>e.space} * 0.75); background: none; color: inherit; }
            .pa-built .pd-paragraph.pd-listing { margin: 0; padding: 0; border: thin solid ${({theme:e})=>e.sideLine}; border-radius: ${({theme:e})=>e.radius}; background: ${({theme:e})=>e.side}; overflow: hidden; }
            .pa-built .pd-listing .pd-word {
                display: flex;
                align-items: center;
                gap: calc(${({theme:e})=>e.space} / 3);
                padding: calc(${({theme:e})=>e.space} * 0.292) calc(${({theme:e})=>e.space} / 2);
                border-block-end: thin solid ${({theme:e})=>e.sideLine};
                border-radius: 0;
                background: ${({theme:e})=>e.white};
                font-size: calc(0.857 * ${({theme:e})=>e.size});
                font-weight: 500;
                line-height: 1;
                color: ${({theme:e})=>e.soft};
            }
            .pa-built .pd-listing .pd-word::before { content: ''; width: calc(${({theme:e})=>e.space} * 0.292); height: calc(${({theme:e})=>e.space} * 0.292); border-radius: 50%; background: ${({theme:e})=>e.skyInk}; opacity: 0.6; }
            .pa-built .pd-listing .pd-code {
                margin: 0;
                padding: calc(${({theme:e})=>e.space} / 2) 0;
                border-radius: 0;
                background: none;
                font-size: calc(0.893 * ${({theme:e})=>e.size});
                line-height: 1.65;
                color: ${({theme:e})=>e.sideInk};
            }
            .pa-built .pd-code-line::before { width: calc(${({theme:e})=>e.space} * 1.833); padding-inline-end: calc(${({theme:e})=>e.space} * 0.583); color: ${({theme:e})=>e.faint}; }
        `}small(){return c`
            @media (max-width: ${({theme:e})=>e.narrow}) {
                .pd-leaves { padding: calc(${({theme:e})=>e.space} * 0.667); }
                .pd-logo { margin-inline-end: calc(${({theme:e})=>e.space} / 2); }
                .pd-me .pd-word.pd-mark { display: block; }
                .pd-leaf.pd-open { grid-template-columns: ${({theme:e})=>e.cover} minmax(0, 1fr); gap: calc(${({theme:e})=>e.space} * 0.667); padding: calc(${({theme:e})=>e.space} * 0.667); }
                .pd-leaf.pd-open .pd-paragraph.pd-jacket { width: ${({theme:e})=>e.cover}; height: calc(${({theme:e})=>e.cover} * 1.5); font-size: calc(0.964 * ${({theme:e})=>e.size}); }
                .pd-leaf.pd-open .pd-words { max-height: none; }
                .pd-leaf.pd-open .pd-words::after { display: none; }
                .pd-leaf.pd-open .pd-word.pd-switch { display: none; }
                .pd-shelf { grid-template-columns: repeat(3, minmax(0, 1fr)); gap: calc(${({theme:e})=>e.space} * 0.583) calc(${({theme:e})=>e.space} / 2); }
                .pd-volume .pd-paragraph.pd-jacket { width: auto; height: auto; aspect-ratio: 2 / 3; }
            }
        `}};n(fa,"$Bookshelf");let Xe=fa;const ii=i(Xe);var ri=Object.defineProperty,ni=Object.getOwnPropertyDescriptor,ps=n((p,e,s,r)=>{for(var t=r>1?void 0:r?ni(e,s):e,o=p.length-1,d;o>=0;o--)(d=p[o])&&(t=(r?d(e,s,t):d(t))||t);return r&&t&&ri(e,s,t),t},"__decorateClass");const ga=class ga extends D{get books(){return this.text.find($).filter(e=>e.is(X)&&e!==this.synopsis)}get placed(){return[...super.placed,...this.books]}get pages(){return[...this.books,...super.pages]}write(){return a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"pd-library",children:this.library()}),a.jsx("div",{className:"pd-me",children:this.me()}),a.jsx("div",{className:"pd-holds",children:this.holds()}),a.jsx("div",{className:"pd-head",children:this.head()}),a.jsxs("div",{className:"pd-leaves",children:[this.front(),this.leaves(),a.jsx("div",{className:"pd-shelf",children:this.volumes()})]})]})}head(){return a.jsx("div",{className:"pd-switches",children:this.switches()})}front(){const e=i(za);return this.painted(this.cover,a.jsxs("div",{className:this.open===void 0?"pd-leaf pd-front pd-open":"pd-leaf pd-front",children:[this.jacket(this.cover),this.opening(),this.reading(this.cover),a.jsx(e,{chapter:this.cover,of:Pa,children:"read on"})]}))}opening(){const e=i(this.title),s=i(this.synopsis);return a.jsxs("div",{className:"pd-words",children:[this.shelved(this.cover),a.jsx(e,{}),this.line(this.cover),a.jsx(s,{})]})}leaves(){const e=i(za);return[...this.books,...this.chapters].map((s,r)=>{const t=i(s),o=this.jacketOf(s);return this.painted(o,a.jsxs("div",{className:s===this.open?"pd-leaf pd-open":"pd-leaf",children:[this.jacket(o),a.jsxs("div",{className:"pd-words",children:[this.shelved(o),a.jsx(t,{})]}),o===void 0?void 0:a.jsx("div",{className:"pd-line",children:this.line(o)}),this.reading(o),o===void 0?void 0:a.jsx(e,{chapter:s,of:Pa,children:"read on"}),a.jsx("div",{className:"pd-files",children:this.listings(s)})]},r),r)})}volumes(){const e=i(w),s=i(b);return(this.table?.annotations.expressed(ae)?.entries??[]).map((t,o)=>{const d=U(t).identifier,H=this.named(d),ke=H===void 0?this.coverOf(d):this.jacketOf(H);if(ke!==void 0)return a.jsxs("div",{className:"pd-volume",children:[this.jacket(ke,d),a.jsx("div",{className:"pd-paragraph pd-name",children:a.jsxs(e,{children:[a.jsx(s,{children:d}),ke.title.name]})})]},o)})}jacket(e,s){if(e===void 0)return;const r=i(zt),t=i(b);return s===void 0?a.jsx(r,{cover:e}):a.jsx(r,{cover:e,children:a.jsx(t,{children:s})})}shelved(e){if(e!==void 0)return a.jsx("div",{className:"pd-paragraph pd-shelved",children:e===this.cover?"filed under itself":"filed here"})}line(e){if(e===void 0)return;const s=i(La),r=i(Ra);return a.jsxs(a.Fragment,{children:[a.jsx(s,{cover:e}),a.jsx(r,{cover:e})]})}reading(e){if(e===void 0)return;const s=i(w),r=i(b),t=e.mention.identifier;return a.jsx("div",{className:"pd-paragraph pd-read",children:a.jsxs(s,{children:[a.jsx(r,{children:t}),e===this.cover?"This is the catalogue":`Read ${e.title.name}`," →"]})})}jacketOf(e){return e.annotations.expressed(j)?.cover??(this.appendix.includes(e)?void 0:this.cover)}coverOf(e){return super.coverOf(e)??this.books.map(s=>s.annotations.expressed(j)?.cover).find(s=>s!==void 0&&s.mention?.identifier===e)}named(e){return super.named(e)??this.books.find(s=>this.placeOf(s)===e)}placeOf(e){const s=e.title?.annotations.expressed(ot)?.identifier,r=this.means?.identifier;if(!(s===void 0||r===void 0))return`${r.replace(/\/+$/u,"")}/#${s}`}};n(ga,"$Catalogue");let Ze=ga;const ua=class ua extends dt{get identifier(){return this._book??super.identifier}$Bound(){super.$Bound(),this._book=this.chapter?.annotations.expressed(X)?.means?.identifier}};n(ua,"$BookLink");let he=ua;ps([Ca()],he.prototype,"_book",2);const $a=class $a extends u{constructor(){super(...arguments),this.specification=new fe}defines(e){e.classes.add(this,"pa-caption")}erase(e){e.classes.revert(this)}};n($a,"$Caption");let qe=$a;const ma=class ma extends u{constructor(){super(...arguments),this.specification=new ge}defines(e){e.classes.add(this,"pa-arrow")}erase(e){e.classes.revert(this)}};n(ma,"$Arrow");let Ve=ma;const ba=class ba extends u{constructor(){super(...arguments),this.specification=new y}defines(e){e.classes.add(this,"pa-unfolded")}erase(e){e.classes.revert(this)}};n(ba,"$Unfolded");let Se=ba;const va=class va extends g{$saidOfAParagraph(e){l(e instanceof f,"a caption is said of a paragraph, and this is not one")}};n(va,"CaptionSpecification");let fe=va;ps([h("a caption is said of a paragraph")],fe.prototype,"$saidOfAParagraph",1);const xa=class xa extends g{$saidOfAWord(e){l(e instanceof z&&e.chapter?.is(ve)===!0,"an arrow is said of a word of a table of contents, and this is not one")}};n(xa,"ArrowSpecification");let ge=xa;ps([h("an arrow is said of a word of a table of contents")],ge.prototype,"$saidOfAWord",1);const cs=i(Ze),oi=i(he),vi=i(qe),xi=i(Ve),Pa=i(Se);i(cs,je)(oi);i(cs,ts)(ii);i(cs,xe)(ns);const di=n(()=>a.jsxs(Ma,{children:[a.jsx(kt,{}),a.jsx(Ba,{ground:"#eef5f6",band:"#c3e3e6",bandInk:"#1c565c",foot:"#8db9bd",footInk:"#153e43",ink:"#1f5a60"}),a.jsx(Ga,{x:"-46",y:"-13"}),a.jsx(_a,{children:"[Dougs Library](/dougs-library/)"}),a.jsx(Na,{children:"[Doug](/dougs-story/)"}),a.jsx(Ha,{children:"[Library](/dougs-library/)"}),a.jsx(Fa,{children:"[The Library](/dougs-library/)"}),a.jsxs(Wa,{children:[a.jsx(Ya,{}),a.jsx(Ta,{children:`<svg viewBox="0 0 64 64" class="pd-illustration"><path class="light" d="M9 7h46v50H9z"/><path d="M9 7h46v50H9zM9 24h46M9 41h46"/><path class="fill" d="M13 11h5v13h-5zM20 9h4v15h-4zM26 13h6v11h-6zM34 10h4v14h-4zM40 14h6v10h-6z"/><path d="M48 24l4-12 3 1-4 11z"/><path class="fill" d="M13 28h4v13h-4zM19 30h7v11h-7zM28 27h4v14h-4zM34 31h5v10h-5zM41 28h6v13h-6zM49 29h3v12h-3z"/><path class="fill" d="M13 46h6v11h-6zM21 44h4v13h-4zM27 47h8v10h-8zM37 45h4v12h-4zM43 48h6v9h-6z"/><path d="M50 57l3-11 3 1-3 10z"/></svg>
`})]})]}),"Cover$2"),wa=class wa extends V{constructor(){super(...arguments),this.style=m.header`
        justify-self: end;
        .pd-chapter.pa-cover { margin-block: 0; }
    `}};n(wa,"$StoryCover");let es=wa;const ya=class ya extends ve{constructor(){super(...arguments),this.style=m.nav`
        .pd-chapter.pa-table-of-contents { margin-block: 0; }
    `}};n(ya,"$StoryTableOfContents");let ss=ya;const pi=i(es),wi=i(ss),yi=n(()=>a.jsxs(Ma,{children:[a.jsx(pi,{}),a.jsx(pt,{}),a.jsx(jt,{children:di()}),a.jsx(Ba,{ground:"#f5eedf",band:"#d9c3a3",bandInk:"#4a3626",foot:"#a3b6cc",footInk:"#2a4262",ink:"#2f4a6a"}),a.jsx(Ga,{x:"-54",y:"-33"}),a.jsx(_a,{children:"[Dougs Story](/dougs-story/)"}),a.jsx(Na,{children:"[Doug](/dougs-story/)"}),a.jsx(Ha,{children:"[Library](/dougs-library/)"}),a.jsx(Fa,{children:"[The Librarian](/dougs-story/)"}),a.jsxs(Wa,{children:[a.jsx(Ya,{}),a.jsx(Ta,{children:`<svg viewBox="0 0 64 64" class="pd-illustration"><path class="light" d="M8 13h23v38H8zM33 13h23v38H33z"/><path d="M8 13h23v38H8zM33 13h23v38H33z"/><path d="M13 21h13M13 27h13M13 33h9M38 21h13M38 27h13M38 33h13M38 39h8"/><path class="fill" d="M15 55 45 25l4 4-30 30-6 2z"/><path d="M15 55 45 25l4 4-30 30-6 2zM43 27l4 4M17 53l2 2"/></svg>
`})]})]}),"Cover");export{Ze as $,xi as A,ui as B,yi as C,Qa as D,bi as F,fi as I,mi as K,ns as L,y as O,Ba as S,Rt as T,jt as V,Ga as W,gi as a,vi as b,di as c,T as d,D as e,xe as f,V as g,Ya as h,K as i,Nt as j,Fe as k,wi as l,$i as m,Ge as n,hi as o};
