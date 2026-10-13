var Rn=Object.defineProperty;var o=(d,e)=>Rn(d,"name",{value:e,configurable:!0});import{$ as t,q as _n,s as $,r as f,t as g,u as at,W as y,R as v,j as n,v as $n,w as h,x as b,y as c,z as x,F as l,G as T,J as j,K as m,N as ke,O as Fa,k as En,Q as z,U as st,V as Gn,X as q,Y as un,Z as tt,_ as qn,a0 as xe,a1 as C,a2 as _,a3 as Yn,a4 as Un,a5 as Ba,a6 as Zn,a7 as Xn,a8 as Kn,a9 as be,aa as mn,ab as ot,ac as Jn,ad as Qn,ae as Vn,af as Sn,ag as ei}from"./index-BGM852en.js";const mt=class mt extends _n{constructor(){super(...arguments),this.font="'Inter', system-ui, sans-serif",this.prose="'Inter', system-ui, sans-serif",this.mono="'JetBrains Mono', ui-monospace, monospace",this.size="0.875rem",this.leading="1.6",this.measure="44rem",this.spreadColumn="15.5rem",this.space="1.5rem",this.holdsColumn="240px",this.barHeight="50px",this.beat="320ms",this.narrow="48rem",this.phoneWidth="390px",this.colour="#4e9eb9",this.accent="#166178",this.bar="#0c1b1f",this.barInk="#ffffff",this.barDim="#a9bcc1",this.barOn="rgba(255, 255, 255, 0.11)",this.barLine="#1d3339",this.mark="#c8f4fb",this.side="#e3f5fa",this.sideInk="#10252c",this.sideDim="#516770",this.sideOn="#ffffff",this.sideLine="#cbe6ee",this.night="#0c1b1f",this.deep="#14323c",this.blue="#166178",this.sea="#4e9eb9",this.sky="#8fc8dc",this.opal="#c8f4fb",this.pale="#e3f5fa",this.mist="#f1f7f9",this.white="#ffffff",this.ink="#10252c",this.soft="#516770",this.line="#dbe7ec",this.me="#e8590c",this.wash="linear-gradient(105deg, #e2f6fb 0%, #ecf0fd 52%, #fae9f4 100%)",this.serif="'Source Serif 4', Georgia, serif",this.between="'Source Sans 3', 'Inter', system-ui, sans-serif",this.bookPaper="#fbf9f3",this.bookInk="#29251d",this.heading="#10252c",this.capital="#166178",this.lit="#166178",this.faint="#8792a2",this.paper="#ffffff",this.panel="#f1f7f9",this.rule="#dbe7ec",this.edge="transparent",this.tint="#e3f5fa",this.dusk="#14323c",this.glow="#cfe6e3",this.dim="#4f7672",this.keyword="#8ad7ff",this.string="#ffd48a",this.type="#9be3d6",this.comment="#5f8a86",this.haze="#a9bcc1",this.glass="rgba(255, 255, 255, 0.62)",this.binding="linear-gradient(160deg, #16303a, #0c1b1f)",this.spine="inset 5px 0 0 rgba(0, 0, 0, 0.14), inset 6px 0 0 rgba(255, 255, 255, 0.12), 0 10px 20px -10px rgba(0, 0, 0, 0.45)",this.shadow="0 0.75rem 1.4rem -0.9rem rgba(12, 27, 31, 0.55)",this.volume="11.5rem",this.cover="8.25rem",this.card="18rem",this.barLight="#ffffff",this.barMid="#f1f7f9",this.barDeep="#e3f5fa",this.barShadow="none",this.sideLight="#ffffff",this.sideDeep="#e3f5fa",this.codeGround="#f1f7f9",this.hairline="1px",this.stroke="2px",this.rise="-1px",this.gloss="none",this.ring="0 0 0 2px #c8f4fb",this.decisionShadow="none",this.photo="7rem",this.radius="0.375rem",this.barTint="#ffffff",this.skyInk="#166178",this.lift="inset 5px 0 0 rgba(0, 0, 0, 0.14), inset 6px 0 0 rgba(255, 255, 255, 0.12), 0 14px 24px -12px rgba(0, 0, 0, 0.5)",this.openSpine="inset 7px 0 0 rgba(0, 0, 0, 0.14), inset 8px 0 0 rgba(255, 255, 255, 0.12), 0 12px 22px -14px rgba(0, 0, 0, 0.5)",this.style=$.div`${this.parts()}`}parts(){return[this.page(),this.writing(),this.links(),this.figures(),this.listings(),this.switches(),this.turns(),this.illustrations(),this.marks(),this.library(),this.head(),this.holds(),this.context(),this.tones()]}page(){return f`
            font-family: ${({theme:e})=>e.font};
            font-size: ${({theme:e})=>e.size};
            line-height: ${({theme:e})=>e.leading};
            color: ${({theme:e})=>e.ink};
            background: ${({theme:e})=>e.paper};
            min-height: 100vh;
        `}writing(){return f`
            .pd-pages { font-family: ${({theme:e})=>e.prose}; }
            .pd-chapter, .pd-section, .pd-paragraph { margin-block: ${({theme:e})=>e.space}; }
            .pd-chapter { max-width: ${({theme:e})=>e.measure}; }
        `}links(){return f`
            .pa-reference { color: ${({theme:e})=>e.accent}; }
            .pa-reference.pa-self-reference { color: inherit; text-decoration: none; }
        `}figures(){return f`
            .pd-image img { display: block; max-width: 100%; height: auto; }
            .pa-phone .pd-image img { max-width: min(100%, ${({theme:e})=>e.phoneWidth}); }
            .pd-code { font-family: ${({theme:e})=>e.mono}; overflow-x: auto; }
        `}listings(){return f`
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
        `}switches(){return f`
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
        `}illustrations(){return f`
            .pd-illustration { fill: none; stroke: var(--ink); stroke-width: 1.7; stroke-linecap: round; stroke-linejoin: round; }
            .pd-illustration .fill { fill: var(--foot); stroke: var(--ink); }
            .pd-illustration .light { fill: ${({theme:e})=>e.white}; stroke: none; }
            .pd-drawing { display: grid; place-items: center; min-height: 0; }
        `}marks(){return f`
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
        `}library(){return f`
            .pd-book .pd-library { box-sizing: border-box; height: ${({theme:e})=>e.barHeight}; padding: 0 calc(${({theme:e})=>e.space} * 0.75); background: ${({theme:e})=>e.barTint}; border-block-end: thin solid ${({theme:e})=>e.line}; }
            .pd-library .pd-paragraph, .pd-me .pd-paragraph { margin-block: 0; }
            .pd-library .pa-reference, .pd-me .pa-reference { color: inherit; text-decoration: none; }
            .pd-library .pa-reference:hover .pd-name, .pd-me .pa-reference:hover { text-decoration: underline; text-underline-offset: 3px; }
            .pd-paragraph.pd-logo { display: flex; align-items: center; height: ${({theme:e})=>e.barHeight}; }
            .pd-logo .pa-reference, .pd-me .pd-mark .pa-reference { display: block; }
            .pd-logo .pd-filed, .pd-logo .pd-own { display: block; flex: none; overflow: hidden; transition: width ${({theme:e})=>e.beat} ease, margin ${({theme:e})=>e.beat} ease, opacity ${({theme:e})=>e.beat} ease; }
            .pd-logo .pd-own { width: calc(2 * ${({theme:e})=>e.size}); }
            .pd-logo .pd-scheme + .pd-scheme .pd-own { margin-inline-start: calc(${({theme:e})=>e.space} / 6); }
            .pd-logo.pa-unfolded .pd-own { width: 0; margin-inline-start: 0; opacity: 0; }
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
            .pd-logo.pa-unfolded .pd-names .pd-name { opacity: 0; transform: translateY(-5px); pointer-events: none; }
            .pd-logo.pa-unfolded .pd-names .pd-name.pd-under { opacity: 1; transform: translateY(1px); pointer-events: auto; }
            .pd-me { gap: calc(${({theme:e})=>e.space} * 0.375); padding: 0 calc(${({theme:e})=>e.space} * 0.75); }
            .pd-me .pd-byline { display: flex; align-items: center; gap: calc(${({theme:e})=>e.space} * 0.375); font-size: calc(0.93 * ${({theme:e})=>e.size}); color: ${({theme:e})=>e.soft}; }
            .pd-me .pd-word.pa-reference { color: ${({theme:e})=>e.ink}; font-weight: 500; }
        `}head(){return f`
            .pd-head { padding: calc(${({theme:e})=>e.space} * 0.83) calc(${({theme:e})=>e.space} * 1.17) calc(${({theme:e})=>e.space} * 0.58); }
            .pd-head .pd-chapter { margin-block: 0; }
            .pd-head .pd-title {
                font-family: ${({theme:e})=>e.serif};
                font-size: calc(2.57 * ${({theme:e})=>e.size});
                font-weight: 600;
                line-height: 1.04;
                color: ${({theme:e})=>e.heading};
            }
            .pd-head .pa-illustration { display: none; }
        `}holds(){return f`
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
        `}context(){return f`
            .pd-holds .pd-paragraph.pd-tree-root { display: none; }
            .pd-book.pa-manual .pd-holds .pd-section:not(.pa-tree-folder) { display: none; }
            .pd-book.pa-manual .pd-holds .pd-tree-folder { order: -1; }
            .pd-book.pa-manual .pd-holds .pd-paragraph.pd-tree-root {
                display: flex;
                order: -2;
                align-items: center;
                margin: 0 0 calc(${({theme:e})=>e.space} / 3);
                padding: 0 calc(${({theme:e})=>e.space} * 0.5833) 0 calc(${({theme:e})=>e.space} * 0.4167);
                font-size: calc(0.9286 * ${({theme:e})=>e.size});
                font-weight: 500;
                line-height: calc(1.9286 * ${({theme:e})=>e.size});
                color: ${({theme:e})=>e.sideInk};
            }
            .pd-book.pa-manual .pd-holds .pd-tree-root .pd-word { display: inline-flex; align-items: center; gap: calc(${({theme:e})=>e.space} * 0.2917); }
            .pd-book.pa-manual .pd-holds .pd-tree-root .pd-drawing { width: calc(0.7143 * ${({theme:e})=>e.size}); height: calc(0.7143 * ${({theme:e})=>e.size}); color: ${({theme:e})=>e.faint}; transform: rotate(180deg); }
            .pd-book.pa-manual .pd-holds .pd-tree-root svg { display: block; width: 100%; height: 100%; }
            .pd-book.pa-manual .pd-holds .pd-tree-root .pa-reference { color: inherit; text-decoration: none; }
            .pd-book.pa-manual .pd-holds .pd-tree-root:hover { color: ${({theme:e})=>e.ink}; }
        `}tones(){return f`
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
        `}turns(){return f`
            .pd-paragraph.pd-turn {
                display: flex;
                justify-content: space-between;
                gap: ${({theme:e})=>e.space};
                font-size: calc(0.786 * ${({theme:e})=>e.size});
            }
            .pd-turn .pa-reference { font-weight: 500; text-decoration: none; }
            .pd-turn .pd-count { color: ${({theme:e})=>e.faint}; }
        `}};o(mt,"$LibraryBookTheme");let Y=mt;const ai=t(Y);var si=Object.defineProperty,ti=Object.getOwnPropertyDescriptor,oi=o((d,e,a,r)=>{for(var s=ti(e,a),i=d.length-1,p;i>=0;i--)(p=d[i])&&(s=p(e,a,s)||s);return s&&si(e,a,s),s},"__decorateClass$m");const kt=class kt extends h{constructor(){super(...arguments),this.specification=new Re}defines(e){e.classes.add(this,"pa-label")}erase(e){e.classes.revert(this)}};o(kt,"$Label");let Ha=kt;const xt=class xt extends b{$saidOfAWord(e){c(e instanceof x,"label is said of a word, and this is not one")}};o(xt,"LabelSpecification");let Re=xt;oi([l("label is said of a word")],Re.prototype,"$saidOfAWord");const rt=t(Ha),vt=class vt extends g{get cover(){return this.$cover??this.book?.cover}write(){const e=this.cover.annotations.expressed(at),a=t(y),r=t(rt),s=t(v);return n.jsxs(n.Fragment,{children:[n.jsxs(a,{children:[n.jsx(r,{}),"by"]}),n.jsxs(a,{children:[n.jsx(s,{children:e.means.identifier}),e.name]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-byline")}};o(vt,"$Byline");let La=vt;const yt=class yt extends g{get cover(){return this.$cover??this.book?.cover}write(){const e=this.cover.annotations.expressed($n),a=t(y),r=t(rt),s=t(v);return n.jsxs(n.Fragment,{children:[n.jsxs(a,{children:[n.jsx(r,{}),"subject"]}),n.jsxs(a,{children:[n.jsx(s,{children:e.means.identifier}),e.name]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-subject-line")}};o(yt,"$SubjectLine");let Ra=yt;const kn=t(La),ri=t(Ra);var ni=Object.defineProperty,ii=Object.getOwnPropertyDescriptor,pi=o((d,e,a,r)=>{for(var s=ii(e,a),i=d.length-1,p;i>=0;i--)(p=d[i])&&(s=p(e,a,s)||s);return s&&ni(e,a,s),s},"__decorateClass$l");const wt=class wt extends b{$saidOfABook(e){c(e instanceof N,"this is said of a book of this library, and here it is said of something else")}};o(wt,"OfABookSpecification");let O=wt;pi([l("this is said of a book of this library")],O.prototype,"$saidOfABook");const jt=class jt extends x{get on(){return[this.book.$is].flat().includes(this.$annotation)}$Switch(...e){this.$Writing(...e),this.containers.replace(this,"span","button")}container(e){return super.container({type:"button","aria-pressed":this.on,onClick:o(()=>this.press(),"onClick"),...e})}press(){const e=this.book,a=[e.$is].flat();e.$is=this.on?a.filter(r=>r!==this.$annotation):[this.$annotation,...a]}$Define(){super.$Define(),this.classes.add(this,"pd-switch")}};o(jt,"$Switch");let ve=jt;const zt=class zt extends ve{press(){const e=this.book,a=[e.$is].flat().filter(r=>!this.$family.includes(r));e.$is=[this.$annotation,...a]}};o(zt,"$Tab");let ye=zt;const nt=t(ve),di=t(ye);var ci=Object.defineProperty,li=Object.getOwnPropertyDescriptor,xn=o((d,e,a,r)=>{for(var s=li(e,a),i=d.length-1,p;i>=0;i--)(p=d[i])&&(s=p(e,a,s)||s);return s&&ci(e,a,s),s},"__decorateClass$k");const Ot=class Ot extends T{constructor(){super(...arguments),this.specification=new we,this.style=$.div`
        .pa-coloured { --colour: ${e=>e.$colour}; }
    `}get colour(){return j.copy(this.text).trim()}$Coloured(...e){this.$Format(...e);const a=this.style;this._painted=r=>n.jsx(a,{$colour:this.colour,...r})}defines(e){e.classes.add(this,"pa-coloured"),e.containers.add(this,this._painted)}erase(e){e.classes.revert(this),e.containers.revert(this)}};o(Ot,"$Coloured");let U=Ot;const Pt=class Pt extends b{$saidOfAChapterOrAParagraph(e){c(e instanceof m||e instanceof g,"coloured is said of a chapter or a paragraph, and this is neither")}$givenItsColour(e){c(/^#[0-9a-f]{6}$/iu.test(e.annotations.expressed(U)?.colour??""),"coloured is given its colour as six hex digits, and this one was given something else")}};o(Pt,"ColouredSpecification");let we=Pt;xn([l("coloured is said of a chapter or a paragraph")],we.prototype,"$saidOfAChapterOrAParagraph");xn([l("coloured is given its colour")],we.prototype,"$givenItsColour");const sd=t(U);var hi=Object.defineProperty,fi=Object.getOwnPropertyDescriptor,it=o((d,e,a,r)=>{for(var s=fi(e,a),i=d.length-1,p;i>=0;i--)(p=d[i])&&(s=p(e,a,s)||s);return s&&hi(e,a,s),s},"__decorateClass$j");const Dt=class Dt extends T{constructor(){super(...arguments),this.specification=new ae}get identifier(){return ke.reference(j.copy(this.text))?.identifier??""}get name(){return ke.reference(j.copy(this.text))?.name??""}get entry(){return this.book?.chapterAt(this.identifier)}get drawing(){const e=this.entry?.text.find(g).flatMap(a=>a.text.find(Fa))[0];return e===void 0?"":j.copy(e.text).trim()}get colour(){return this.entry?.annotations.expressed(U)?.colour??""}$Keyed(...e){this.$Format(...e);const a=t(gi);this._layer=r=>n.jsxs("div",{...r,children:[n.jsx(a,{keyed:this}),r.children]})}defines(e){e.classes.add(this,"pa-keyed"),e.containers.add(this,this._layer)}erase(e){e.classes.revert(this),e.containers.revert(this)}};o(Dt,"$Keyed");let R=Dt;const At=class At extends x{constructor(){super(...arguments),this.style=$.span`
        --colour: ${e=>e.$colour};
    `}$Icon(...e){this.$Writing(...e);const a=this.style;this._painted=r=>n.jsx(a,{$colour:this.$keyed?.colour??"",...r}),this.containers.replace(this,"span",this._painted)}write(){return n.jsx("span",{className:"pd-drawing",role:"img","aria-label":this.$keyed?.name,dangerouslySetInnerHTML:{__html:this.$keyed?.drawing??""}})}$Define(){super.$Define(),this.classes.add(this,"pd-icon")}};o(At,"$Icon");let _a=At;const Ct=class Ct extends b{$saidOfAChapter(e){c(e instanceof m,"keyed is said of a chapter, and this is not one")}$namesAnEntry(e){const a=e.annotations.expressed(R)?.entry;c(a!==void 0&&a.annotations.expressed(R)?.entry===a,"keyed names an entry of the key, a chapter of this book keyed as itself, and this one names something else")}$entryHoldsItsDrawingAndColour(e){const a=e.annotations.expressed(R)?.entry;a!==void 0&&c(a.text.find(g).flatMap(r=>r.text.find(Fa)).length===1&&a.is(U),"an entry of the key holds one drawing and its colour, and this one holds something else")}};o(Ct,"KeyedSpecification");let ae=Ct;it([l("keyed is said of a chapter")],ae.prototype,"$saidOfAChapter");it([l("keyed names an entry of the key")],ae.prototype,"$namesAnEntry");it([l("an entry of the key holds one drawing and its colour")],ae.prototype,"$entryHoldsItsDrawingAndColour");const td=t(R),vn=t(_a),gi=vn;var bi=Object.defineProperty,ui=Object.getOwnPropertyDescriptor,$i=o((d,e,a,r)=>{for(var s=ui(e,a),i=d.length-1,p;i>=0;i--)(p=d[i])&&(s=p(e,a,s)||s);return s&&bi(e,a,s),s},"__decorateClass$i");const mi={tsx:"typescript",ts:"typescript",mjs:"javascript",js:"javascript",css:"css",html:"xml",svg:"xml",json:"json",md:"markdown"},ki='<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"><path d="M6 4.5 3.5 8 6 11.5M10 4.5 12.5 8 10 11.5"/></svg>',ue=o(d=>`${d.$identifier}${d.$type}`,"fileNameOf"),xi=o(d=>d===void 0?[]:j.copy(d.text).split(`
`),"fileLinesOf"),yn=o(d=>d?.chapter?.annotations.expressed(P),"spreadOf"),It=class It extends g{constructor(){super(...arguments),this.$family=[]}get name(){return this.$file===void 0?"":ue(this.$file)}get language(){return mi[(this.$file?.$type??"").replace(/^\./u,"")]??""}get spread(){return yn(this.$file)}get chapter(){return this.$file?.chapter??super.chapter}$FileListing(...e){this.$Writing(...e),this.containers.replace(this,"span","div")}container(e){return super.container({onClick:o(()=>this.press(),"onClick"),...e})}press(){if(this.$filePanelState===void 0)return;const e=this.book,a=[e.$is].flat().filter(r=>!this.$family.includes(r));e.$is=[this.$filePanelState,...a]}write(){const e=t(y),a=t(En);return n.jsxs(n.Fragment,{children:[n.jsx(e,{children:this.name}),n.jsx(a,{identifier:this.$file?.$identifier,type:this.$file?.$type,language:this.language,numbered:!0})]})}$Define(){super.$Define(),this.classes.add(this,"pd-file-listing");const e=t(wi);this.annotations.add(this,n.jsx(e,{}))}};o(It,"$FileListing");let _e=It;const Nt=class Nt extends h{constructor(){super(...arguments),this.specification=new Ee}defines(e){const a=e;a.$file!==void 0&&a.spread?.openFile===a.$file&&e.classes.add(this,"pa-open")}erase(e){e.classes.revert(this)}};o(Nt,"$OpenListing");let Ea=Nt;const Tt=class Tt extends b{$isAFileListing(e){c(e instanceof _e,"an open listing is a file listing, and this is not one")}};o(Tt,"OpenListingSpecification");let Ee=Tt;$i([l("an open listing is a file listing")],Ee.prototype,"$isAFileListing");const Ft=class Ft extends ye{constructor(){super(...arguments),this.$skeleton=!1,this.style=$.button`
        --colour: ${e=>e.$colour};
    `}get on(){const e=this.$file?.chapter;return e!==void 0&&e===this.book.open&&this.spread?.openFile===this.$file}get name(){return this.$file===void 0?"":ue(this.$file)}get spread(){return yn(this.$file)}get colour(){return this.$file?.chapter?.annotations.expressed(R)?.colour??""}get lines(){return xi(this.$file)}get chapter(){return this.$file?.chapter??super.chapter}$FileTab(...e){this.$Switch(...e),this.containers.replace(this,"button",this.style)}container(e){return super.container({$colour:this.colour,...e})}press(){const e=this.spread;e!==void 0&&(e.$openFile=this.$file),this.$annotation!==void 0&&super.press()}write(){return n.jsxs(n.Fragment,{children:[n.jsx("span",{className:"pd-drawing",dangerouslySetInnerHTML:{__html:ki}}),n.jsx("span",{className:"pd-tab-name",children:this.name}),this.$skeleton?n.jsx("span",{className:"pd-skeleton",children:this.lines.slice(0,14).map((e,a)=>n.jsx("i",{style:{width:`${Math.max(12,Math.min(100,e.length*2.2))}%`}},a))}):void 0]})}$Define(){super.$Define(),this.classes.add(this,"pd-file-tab")}};o(Ft,"$FileTab");let Ga=Ft;const vi=t(_e),yi=t(Ea),pt=t(Ga),wi=yi;var ji=Object.defineProperty,zi=Object.getOwnPropertyDescriptor,Oi=o((d,e,a,r)=>{for(var s=zi(e,a),i=d.length-1,p;i>=0;i--)(p=d[i])&&(s=p(e,a,s)||s);return s&&ji(e,a,s),s},"__decorateClass$h");const Ia=class Ia extends h{constructor(){super(...arguments),this.specification=new O}defines(e){for(const a of e.annotations.after(this))a instanceof Ia&&e.annotations.express(a,!1);e.classes.add(this,"pa-file-panel-state")}erase(e){e.classes.revert(this)}};o(Ia,"$FilePanelState");let se=Ia;const Wt=class Wt extends se{defines(e){super.defines(e),e.classes.add(this,"pa-code-forward")}};o(Wt,"$CodeForward");let qa=Wt;const Mt=class Mt extends se{defines(e){super.defines(e),e.classes.add(this,"pa-words-forward")}};o(Mt,"$WordsForward");let Ya=Mt;const Bt=class Bt extends se{defines(e){super.defines(e),e.classes.add(this,"pa-split")}};o(Bt,"$Split");let Ua=Bt;const Ht=class Ht extends h{constructor(){super(...arguments),this.specification=new O}defines(e){e.classes.add(this,"pa-light-code")}erase(e){e.classes.revert(this)}};o(Ht,"$LightCode");let Za=Ht;const Lt=class Lt extends h{constructor(){super(...arguments),this.specification=new O}defines(e){e.classes.add(this,"pa-wrapped-code")}erase(e){e.classes.revert(this)}};o(Lt,"$WrappedCode");let Xa=Lt;const Rt=class Rt extends h{constructor(){super(...arguments),this.specification=new O}defines(e){e.classes.add(this,"pa-numbered-code")}erase(e){e.classes.revert(this)}};o(Rt,"$NumberedCode");let Ka=Rt;const _t=class _t extends h{constructor(){super(...arguments),this.specification=new qe}defines(e){e.classes.add(this,"pa-brief")}erase(e){e.classes.revert(this)}};o(_t,"$Brief");let Ge=_t;const Et=class Et extends b{$saidOfAParagraph(e){c(e instanceof g,"brief is said of a paragraph, and this is not one")}};o(Et,"BriefSpecification");let qe=Et;Oi([l("brief is said of a paragraph")],qe.prototype,"$saidOfAParagraph");t(se);const dt=t(qa),ct=t(Ya),je=t(Ua),Pi=t(Za),Di=t(Xa),wn=t(Ka),od=t(Ge),Gt=class Gt extends g{constructor(){super(...arguments),this.style=$.div`
        .pd-book &.pd-paragraph {
            display: flex;
            flex-direction: column;
            align-items: stretch;
            gap: calc(${({theme:e})=>e.space} / 12);
            margin: 0;
            padding: calc(${({theme:e})=>e.space} * 0.4167) 0;
            background: linear-gradient(90deg, color-mix(in oklch, var(--night) 82%, white) 0%, var(--night) 22%);
            box-shadow: inset 1px 0 0 rgba(255, 255, 255, 0.08);
            transition: background ${({theme:e})=>e.beat} ease;
        }
        .pd-book & .pd-file-tab {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: calc(${({theme:e})=>e.space} * 0.4167);
            padding: calc(${({theme:e})=>e.space} * 0.4167) 0 calc(${({theme:e})=>e.space} / 3);
            border: 0;
            border-inline-start: 2px solid transparent;
            background: none;
            font-family: ${({theme:e})=>e.mono};
            font-size: calc(0.7857 * ${({theme:e})=>e.size});
            font-weight: 500;
            line-height: 1;
            letter-spacing: 0.04em;
            color: color-mix(in oklch, var(--glow) 66%, var(--night));
            cursor: pointer;
            transition: background ${({theme:e})=>e.beat} ease, color ${({theme:e})=>e.beat} ease, border-color ${({theme:e})=>e.beat} ease;
        }
        .pd-book & .pd-file-tab .pd-tab-name { writing-mode: vertical-rl; }
        .pd-book & .pd-file-tab .pd-drawing { width: calc(0.9286 * ${({theme:e})=>e.size}); height: calc(0.9286 * ${({theme:e})=>e.size}); color: #9aa4b3; }
        .pd-book & .pd-file-tab svg { display: block; width: 100%; height: 100%; }
        .pd-book & .pd-skeleton { display: flex; flex-direction: column; align-items: flex-start; gap: 3px; width: calc(${({theme:e})=>e.space} * 1.0833); margin-block-start: 2px; opacity: 0.55; transition: opacity ${({theme:e})=>e.beat} ease; }
        .pd-book & .pd-skeleton i { display: block; height: 2px; border-radius: 1px; background: color-mix(in oklch, var(--brass) 60%, var(--glow)); }
        .pd-book & .pd-file-tab:hover { color: var(--glow); background: var(--dusk); }
        .pd-book & .pd-word.pd-switch[aria-pressed='true'] { color: color-mix(in oklch, var(--glow) 66%, var(--night)); border-color: transparent; background: none; }
        .pd-book.pa-split & .pd-file-tab[aria-pressed='true'] { color: var(--glow); border-inline-start-color: var(--foot); background: var(--dusk); }
        .pd-book & .pd-file-tab:hover .pd-skeleton, .pd-book.pa-split & .pd-file-tab[aria-pressed='true'] .pd-skeleton { opacity: 0.9; }
    `}get spread(){return this.chapter?.annotations.expressed(P)}$FileRail(...e){this.$Writing(...e),this.containers.replace(this,"span",this.style)}write(){const e=t(pt),a=this.spread;if(a!==void 0)return a.files.map(r=>n.jsx(e,{file:r,annotation:je,family:a.filePanelStates,skeleton:!0},ue(r)))}$Define(){super.$Define(),this.classes.add(this,"pd-file-rail")}};o(Gt,"$FileRail");let Ja=Gt;const qt=class qt extends ye{constructor(){super(...arguments),this.style=$.button`
        .pd-book & {
            position: relative;
            display: block;
            width: 100%;
            height: 100%;
            padding: 0;
            border: 0;
            border-radius: 0;
            border-inline-start: thin solid #e6e2d8;
            background: linear-gradient(90deg, #f3f1eb 0%, #fbfaf6 10px);
            cursor: pointer;
            transition: background ${({theme:e})=>e.beat} ease;
        }
        .pd-book &:hover { background: linear-gradient(90deg, #ece9e1 0%, #ffffff 10px); }
        .pd-book & .pd-skeleton { position: absolute; top: calc(${({theme:e})=>e.space} * 0.5833); left: 5px; display: flex; flex-direction: column; gap: 3px; width: 8px; opacity: 0.7; }
        .pd-book & .pd-skeleton i { display: block; height: 2px; border-radius: 1px; background: #cfcbc0; }
    `}get paragraphs(){return(this.chapter?.text.find(z)??[]).flatMap(e=>e.text.find(g)).slice(0,16).map(e=>j.copy(e.text))}$FilePanelGrip(...e){this.$Switch(...e),this.containers.replace(this,"button",this.style)}write(){return n.jsx("span",{className:"pd-skeleton",children:this.paragraphs.map((e,a)=>n.jsx("i",{style:{width:`${Math.max(25,Math.min(100,e.length/4))}%`}},a))})}$Define(){super.$Define(),this.classes.add(this,"pd-file-panel-grip")}};o(qt,"$FilePanelGrip");let Qa=qt;const Ai=t(Ja),Ci=t(Qa),Yt=class Yt extends g{constructor(){super(...arguments),this.style=$.div`
        .pd-book &.pd-paragraph {
            display: grid;
            grid-template-rows: auto minmax(0, 1fr);
            min-width: 0;
            margin: 0;
            overflow: hidden;
            contain: size;
            background: linear-gradient(90deg, color-mix(in oklch, var(--night) 90%, white) 0%, var(--night) 36px);
            color: var(--glow);
            box-shadow: -10px 0 18px -16px rgba(43, 54, 60, 0.5);
            transition: background ${({theme:e})=>e.beat} ease, color ${({theme:e})=>e.beat} ease;
        }
        .pd-book.pa-code-forward & { box-shadow: none; }
        .pd-book & .pd-file-listings { display: grid; grid-template-rows: minmax(0, 1fr); align-content: start; min-height: 0; overflow: hidden; }
        .pd-book & .pd-file-listings .pd-container { display: contents; }
        .pd-book & .pd-paragraph.pd-file-listing { display: none; margin: 0; padding: 0; min-height: 0; }
        .pd-book & .pd-file-listing.pa-open { display: block; overflow: auto; scrollbar-width: thin; scrollbar-color: transparent transparent; transition: scrollbar-color ${({theme:e})=>e.beat} ease; }
        .pd-book & .pd-file-listing.pa-open:hover { scrollbar-color: var(--dim) transparent; }
        .pd-book & .pd-file-listing .pd-word { display: none; }
        .pd-book & .pd-file-listing .pd-code {
            margin: 0;
            padding: calc(${({theme:e})=>e.space} * 0.5833) 0;
            border-radius: 0;
            background: transparent;
            font-family: ${({theme:e})=>e.mono};
            font-size: calc(0.8571 * ${({theme:e})=>e.size});
            line-height: 1.7;
            white-space: normal;
            color: var(--glow);
            cursor: zoom-in;
        }
        .pd-book.pa-code-forward & .pd-file-listing .pd-code { cursor: default; }
        .pd-book & .pd-file-listing .pd-code code { background: transparent; color: inherit; }
        .pd-book & .pd-code-line { display: block; padding-inline-end: calc(${({theme:e})=>e.space} * 0.75); white-space: pre; }
        .pd-book.pa-wrapped-code & .pd-code-line { white-space: pre-wrap; padding-inline-start: calc(${({theme:e})=>e.space} * 2.4167); text-indent: calc(${({theme:e})=>e.space} * -2.4167); }
        .pd-book & .pd-code-line::before { content: attr(data-line); display: inline-block; width: calc(${({theme:e})=>e.space} * 1.8333); padding-inline-end: calc(${({theme:e})=>e.space} * 0.5833); text-align: end; color: var(--dim); user-select: none; text-indent: 0; }
        .pd-book:not(.pa-numbered-code) & .pd-code-line::before { content: ''; width: calc(${({theme:e})=>e.space} * 0.5833); padding: 0; }
        .pd-book.pa-light-code & .hljs-keyword, .pd-book.pa-light-code & .hljs-built_in, .pd-book.pa-light-code & .hljs-literal { color: #5a4fa8; }
        .pd-book.pa-light-code & .hljs-string, .pd-book.pa-light-code & .hljs-regexp, .pd-book.pa-light-code & .hljs-number { color: #2f7f6e; }
        .pd-book.pa-light-code & .hljs-title, .pd-book.pa-light-code & .hljs-type, .pd-book.pa-light-code & .hljs-tag, .pd-book.pa-light-code & .hljs-name, .pd-book.pa-light-code & .hljs-attr { color: #23407a; }
        .pd-book.pa-light-code & .hljs-comment, .pd-book.pa-light-code & .hljs-meta { color: #8a94a3; }
        @media (max-width: ${({theme:e})=>e.narrow}) {
            .pd-book & { box-shadow: none; }
        }
    `}get spread(){return this.chapter?.annotations.expressed(P)}$FilePanel(...e){this.$Writing(...e),this.containers.replace(this,"span",this.style)}write(){const e=t(Ti),a=t(vi),r=this.spread;if(r!==void 0)return n.jsxs(n.Fragment,{children:[n.jsx(e,{chapter:this.chapter}),n.jsx("div",{className:"pd-file-listings",children:r.files.map(s=>n.jsx(a,{file:s,filePanelState:dt,family:r.filePanelStates},ue(s)))})]})}$Define(){super.$Define(),this.classes.add(this,"pd-file-panel")}};o(Yt,"$FilePanel");let Va=Yt;const Ut=class Ut extends g{constructor(){super(...arguments),this.style=$.div`
        .pd-book &.pd-paragraph {
            display: flex;
            align-items: stretch;
            gap: 1px;
            margin: 0;
            padding: 0 0 0 2px;
            background: linear-gradient(180deg, color-mix(in oklch, var(--dusk) 88%, white) 0%, var(--dusk) 100%);
            border-block-end: thin solid color-mix(in oklch, var(--foot) 28%, var(--dusk));
        }
        .pd-book & .pd-file-tab {
            display: flex;
            align-items: center;
            gap: calc(${({theme:e})=>e.space} * 0.2917);
            padding: calc(${({theme:e})=>e.space} * 0.375) calc(${({theme:e})=>e.space} * 0.5833) calc(${({theme:e})=>e.space} / 3) calc(${({theme:e})=>e.space} / 2);
            border: 0;
            border-block-start: 2px solid transparent;
            background: none;
            font-family: ${({theme:e})=>e.mono};
            font-size: calc(0.8571 * ${({theme:e})=>e.size});
            font-weight: 500;
            line-height: 1;
            color: color-mix(in oklch, var(--glow) 62%, var(--night));
            cursor: pointer;
            transition: background ${({theme:e})=>e.beat} ease, color ${({theme:e})=>e.beat} ease, border-color ${({theme:e})=>e.beat} ease;
        }
        .pd-book & .pd-file-tab .pd-drawing { width: calc(0.9286 * ${({theme:e})=>e.size}); height: calc(0.9286 * ${({theme:e})=>e.size}); color: #9aa4b3; }
        .pd-book & .pd-file-tab svg { display: block; width: 100%; height: 100%; }
        .pd-book & .pd-file-tab:hover { color: var(--glow); }
        .pd-book & .pd-file-tab[aria-pressed='true'] { color: var(--glow); background: var(--night); border-block-start-color: var(--foot); }
        .pd-book & .pd-file-tab[aria-pressed='true'] .pd-drawing { color: var(--colour); }
        .pd-book & .pd-words-only, .pd-book & .pd-dock { display: flex; align-items: center; }
        .pd-book & .pd-dock { margin-inline-start: auto; }
        .pd-book & .pd-words-only .pd-word.pd-switch, .pd-book & .pd-dock .pd-word.pd-switch {
            display: flex;
            align-items: center;
            gap: calc(${({theme:e})=>e.space} / 4);
            padding: 0 calc(${({theme:e})=>e.space} / 2);
            border: 0;
            border-radius: 0;
            background: none;
            font-family: ${({theme:e})=>e.font};
            font-size: calc(0.75 * ${({theme:e})=>e.size});
            font-weight: 500;
            line-height: 1;
            letter-spacing: 0.06em;
            text-transform: uppercase;
            color: color-mix(in oklch, var(--glow) 62%, var(--night));
            cursor: pointer;
            transition: color ${({theme:e})=>e.beat} ease;
        }
        .pd-book & .pd-dock .pd-word.pd-switch { color: var(--brass); }
        .pd-book & .pd-words-only .pd-word.pd-switch:hover, .pd-book & .pd-dock .pd-word.pd-switch:hover { color: var(--glow); }
        .pd-book & .pd-dock .pd-word.pd-switch::before { content: ''; width: 9px; height: 9px; border: 1.5px solid currentColor; border-radius: 1px; box-shadow: 3px 3px 0 -1.5px currentColor; }
        .pd-book & .pd-to-split { display: none; }
        .pd-book.pa-code-forward & .pd-to-full, .pd-book.pa-code-forward & .pd-words-only { display: none; }
        .pd-book.pa-code-forward & .pd-to-split { display: flex; }
        .pd-book.pa-code-forward & .pd-dock .pd-word.pd-switch::before { box-shadow: -3px 3px 0 -1.5px currentColor; }
        .pd-book & .pd-options { display: flex; align-items: center; gap: 2px; padding: 0 calc(${({theme:e})=>e.space} / 3) 0 calc(${({theme:e})=>e.space} / 6); border-inline-start: thin solid color-mix(in oklch, var(--glow) 12%, transparent); }
        .pd-book & .pd-options .pd-word.pd-switch {
            padding: 5px 7px;
            border: 0;
            border-radius: 4px;
            background: none;
            font-family: ${({theme:e})=>e.font};
            font-size: calc(0.75 * ${({theme:e})=>e.size});
            font-weight: 500;
            line-height: 1;
            letter-spacing: 0.04em;
            color: color-mix(in oklch, var(--glow) 55%, var(--night));
            cursor: pointer;
            transition: color ${({theme:e})=>e.beat} ease, background ${({theme:e})=>e.beat} ease;
        }
        .pd-book & .pd-options .pd-word.pd-switch:hover { color: var(--glow); }
        .pd-book & .pd-options .pd-word.pd-switch[aria-pressed='true'] { color: var(--glow); background: var(--dawn); border-color: transparent; }
    `}get spread(){return this.chapter?.annotations.expressed(P)}$FilePanelBar(...e){this.$Writing(...e),this.containers.replace(this,"span",this.style)}write(){const e=t(pt),a=t(di),r=t(nt),s=this.spread,i=this.chapter;if(s!==void 0)return n.jsxs(n.Fragment,{children:[s.files.map(p=>n.jsx(e,{file:p},ue(p))),n.jsx("span",{className:"pd-words-only",children:n.jsx(a,{chapter:i,annotation:ct,family:s.filePanelStates,children:"words"})}),n.jsx("span",{className:"pd-dock pd-to-full",children:n.jsx(a,{chapter:i,annotation:dt,family:s.filePanelStates,children:"full screen"})}),n.jsx("span",{className:"pd-dock pd-to-split",children:n.jsx(a,{chapter:i,annotation:je,family:s.filePanelStates,children:"split"})}),n.jsxs("span",{className:"pd-options",children:[n.jsx(r,{chapter:i,annotation:Pi,children:"light"}),n.jsx(r,{chapter:i,annotation:Di,children:"wrap"}),n.jsx(r,{chapter:i,annotation:wn,children:"lines"})]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-file-panel-bar")}};o(Ut,"$FilePanelBar");let Sa=Ut;const Ii=t(Va),Ni=t(Sa),Ti=Ni;var Fi=Object.defineProperty,Wi=Object.getOwnPropertyDescriptor,Mi=o((d,e,a,r)=>{for(var s=Wi(e,a),i=d.length-1,p;i>=0;i--)(p=d[i])&&(s=p(e,a,s)||s);return s&&Fi(e,a,s),s},"__decorateClass$g");const Zt=class Zt extends T{constructor(){super(...arguments),this.specification=new Ye,this.$openFile=void 0,this.grid=$.div`
        --night: color-mix(in oklch, #0f2a33 55%, #2b363c);
        --dusk: color-mix(in oklch, #17363f 55%, #343f45);
        --dawn: color-mix(in oklch, #17363f 40%, #4a5560);
        --glow: #d6e1e3;
        --dim: color-mix(in oklch, #d8c48e 38%, #17363f);
        --brass: color-mix(in oklch, #d8c48e 72%, white);
        .pd-book.pa-light-code & {
            --night: #f6f7f4;
            --dusk: #eceee8;
            --dawn: #ffffff;
            --glow: #2b363c;
            --dim: color-mix(in oklch, #5d4a16 45%, white);
            --brass: #5d4a16;
        }
        .pd-book &.pd-container:not(.pa-open) { display: none; }
        .pd-book &.pd-container.pa-open {
            display: grid;
            grid-template-columns: minmax(0, 1fr) 0 calc(2 * ${({theme:e})=>e.space});
            grid-template-areas: 'words panel rail';
            min-height: calc(100vh - ${({theme:e})=>e.barHeight});
            transition: grid-template-columns 0.28s ease;
        }
        .pd-book.pa-split &.pd-container.pa-open { grid-template-columns: minmax(380px, 1fr) min(44vw, 720px) calc(2 * ${({theme:e})=>e.space}); }
        .pd-book.pa-code-forward &.pd-container.pa-open {
            grid-template-areas: 'panel panel grip';
            grid-template-columns: minmax(0, 1fr) 0 calc(${({theme:e})=>e.space} * 0.75);
            height: calc(100vh - ${({theme:e})=>e.barHeight});
        }
        .pd-book & .pd-words { grid-area: words; min-width: 0; overflow: hidden; }
        .pd-book.pa-code-forward & .pd-words { display: none; }
        .pd-book & .pd-file-panel { grid-area: panel; }
        .pd-book & .pd-file-rail { grid-area: rail; }
        .pd-book.pa-code-forward & .pd-file-rail { display: none; }
        .pd-book & .pd-file-panel-grip { grid-area: grip; display: none; }
        .pd-book.pa-code-forward & .pd-file-panel-grip { display: block; }
        .pd-book & .pd-words { padding: calc(${({theme:e})=>e.space} * 0.9167) calc(${({theme:e})=>e.space} * 1.5) calc(${({theme:e})=>e.space} * 1.6667); font-size: ${({theme:e})=>e.size}; }
        .pd-book.pa-split & .pd-words { padding: calc(${({theme:e})=>e.space} * 0.9167) calc(${({theme:e})=>e.space} * 1.1667) calc(${({theme:e})=>e.space} * 1.6667) calc(${({theme:e})=>e.space} * 1.3333); }
        .pd-book & .pd-words .pd-chapter { max-width: ${({theme:e})=>e.measure}; margin: 0; }
        .pd-book & .pd-words .pd-title {
            margin: 0 0 calc(${({theme:e})=>e.space} / 4);
            font-family: ${({theme:e})=>e.font};
            font-size: calc(1.7143 * ${({theme:e})=>e.size});
            font-weight: 600;
            line-height: 1.2;
            letter-spacing: -0.02em;
            color: ${({theme:e})=>e.heading};
        }
        .pd-book & .pd-words .pd-paragraph.pa-brief {
            display: block;
            max-width: 72ch;
            margin: 0 0 calc(${({theme:e})=>e.space} * 0.4167);
            font-family: ${({theme:e})=>e.serif};
            font-size: calc(1.1071 * ${({theme:e})=>e.size});
            font-style: italic;
            line-height: 1.5;
            color: ${({theme:e})=>e.soft};
        }
        .pd-book & .pd-words .pd-section { margin: calc(${({theme:e})=>e.space} * 1.0833) 0 0; }
        .pd-book & .pd-words .pd-heading {
            margin: 0 0 calc(${({theme:e})=>e.space} / 3);
            padding: 0 0 calc(${({theme:e})=>e.space} / 4);
            border: 0;
            border-block-end: thin solid ${({theme:e})=>e.line};
            border-image: linear-gradient(90deg, var(--brass) 0 calc(${({theme:e})=>e.space} * 1.6667), ${({theme:e})=>e.line} calc(${({theme:e})=>e.space} * 1.6667)) 1;
            font-family: ${({theme:e})=>e.font};
            font-size: calc(0.7857 * ${({theme:e})=>e.size});
            font-weight: 600;
            line-height: 1.3;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            color: ${({theme:e})=>e.sideDim};
        }
        .pd-book & .pd-words .pd-paragraph { margin: calc(${({theme:e})=>e.space} / 3) 0; }
        .pd-book & .pd-words .pd-paragraph .pa-reference { color: var(--band-ink); text-decoration: underline; text-decoration-color: color-mix(in oklch, var(--band-ink) 35%, white); text-underline-offset: 2px; transition: text-decoration-color ${({theme:e})=>e.beat} ease; }
        .pd-book & .pd-words .pd-paragraph .pa-reference:hover { text-decoration-color: var(--band-ink); }
        .pd-book & .pd-words .pa-self-reference { color: inherit; text-decoration: none; }
        .pd-book & .pd-words .pd-paragraph.pd-turn { display: flex; justify-content: space-between; gap: ${({theme:e})=>e.space}; margin: calc(${({theme:e})=>e.space} * 1.0833) 0 0; font-size: calc(0.7857 * ${({theme:e})=>e.size}); }
        .pd-book & .pd-words .pd-turn .pd-count { color: ${({theme:e})=>e.faint}; }
        .pd-book & .pd-words .pd-icon {
            float: inline-start;
            width: calc(1.571 * ${({theme:e})=>e.size});
            height: calc(1.571 * ${({theme:e})=>e.size});
            margin: calc(${({theme:e})=>e.space} * 0.1417) calc(${({theme:e})=>e.space} * 0.4167) 0 0;
        }
        .pd-book & .pd-words .pd-paragraph .pd-svg { display: block; width: calc(${({theme:e})=>e.space} * 4); height: calc(${({theme:e})=>e.space} * 4); }
        @media (max-width: ${({theme:e})=>e.narrow}) {
            .pd-book &.pd-container.pa-open, .pd-book.pa-split &.pd-container.pa-open, .pd-book.pa-code-forward &.pd-container.pa-open { display: block; height: auto; min-height: 0; }
            .pd-book & .pd-file-rail, .pd-book & .pd-file-panel-grip { display: none; }
            .pd-book.pa-code-forward & .pd-words { display: block; }
            .pd-book & .pd-words { padding: calc(${({theme:e})=>e.space} * 0.83) calc(${({theme:e})=>e.space} * 0.67) calc(${({theme:e})=>e.space} / 3); }
            .pd-book & .pd-words .pd-title { font-size: calc(1.5 * ${({theme:e})=>e.size}); }
        }
    `}get files(){return this.parent.annotations.find(st).reverse()}get openFile(){return this.$openFile??this.files[0]}get filePanelStates(){return[ct,je,dt]}$Spread(...e){this.$Format(...e);const a=this.grid,r=t(Ii),s=t(Ai),i=t(Ci);this.style=({className:p,children:u})=>{const k=this.parent,W=[...k.classes].includes("pa-open");return n.jsxs(a,{className:`${p??""}${W?" pa-open":""}`.trim(),children:[n.jsx("div",{className:"pd-words",children:u}),W?n.jsxs(n.Fragment,{children:[n.jsx(r,{chapter:k}),n.jsx(s,{chapter:k}),n.jsx(i,{chapter:k,annotation:je,family:this.filePanelStates})]}):void 0]})}}defines(e){super.defines(e),e.classes.add(this,"pa-spread")}erase(e){super.erase(e),e.classes.revert(this)}};o(Zt,"$Spread");let P=Zt;const Xt=class Xt extends b{$isAChapter(e){c(e instanceof m,"a spread is a chapter read beside its files, and this is not a chapter")}};o(Xt,"SpreadSpecification");let Ye=Xt;Mi([l("a spread is a chapter read beside its files")],Ye.prototype,"$isAChapter");const rd=t(P);var Bi=Object.defineProperty,Hi=Object.getOwnPropertyDescriptor,Be=o((d,e,a,r)=>{for(var s=Hi(e,a),i=d.length-1,p;i>=0;i--)(p=d[i])&&(s=p(e,a,s)||s);return s&&Bi(e,a,s),s},"__decorateClass$f");const jn='<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3.5 10.5 8 6 12.5"/></svg>',Li='<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linejoin="round" stroke-linecap="round"><rect class="ground" x="0.75" y="0.75" width="14.5" height="14.5"/><path d="M3.5 5.5h3l1.5 1.5h4.5v5h-9z"/></svg>',Kt=class Kt extends T{constructor(){super(...arguments),this.specification=new Xe,this.style=$.div`
        ${e=>e.$schemeDeclarations===void 0?"":`.pa-entry { ${e.$schemeDeclarations} }`}
    `}get place(){return M(this.parent).identifier}get referencedChapter(){return this.book.chapterAt(this.place)}get cover(){return this.referencedChapter?.annotations.expressed(I)?.cover??this.book.coverOf(this.place)}get schemeDeclarations(){const e=this.cover?.annotations.expressed(B);if(e!==void 0)return e.declarations;const a=this.referencedChapter?.annotations.expressed(U)?.colour;return a===void 0?void 0:`--colour: ${a};`}$Entry(...e){this.$Format(...e);const a=this.style;this._painted=r=>n.jsx(a,{$schemeDeclarations:this.schemeDeclarations,...r})}defines(e){e.classes.add(this,"pa-entry"),e.containers.add(this,this._painted),(this.place===this.book?.$bookmark||this.place===this.book.open?.mention?.identifier)&&e.classes.add(this,"pa-open")}erase(e){e.classes.revert(this),e.containers.revert(this)}};o(Kt,"$Entry");let Z=Kt;const Jt=class Jt extends h{constructor(){super(...arguments),this.specification=new Ze}defines(e){e.classes.add(this,"pa-appendix")}erase(e){e.classes.revert(this)}};o(Jt,"$Appendix");let ze=Jt;const Qt=class Qt extends h{constructor(){super(...arguments),this.specification=new Ue}get entries(){return this.chapter.text.find(z).flatMap(a=>a.text.find(g)).filter(a=>!a.is(Gn)&&M(a)!==void 0)}$Bound(){const e=t(Ei),a=t(An),r=t(pt),s=this.book;for(const i of this.entries){i.annotations.add(this,n.jsx(e,{}));const p=s.chapterAt(M(i).identifier)?.annotations.expressed(P);if(p===void 0)continue;const u=p.files;i.text.add(this,n.jsx(a,{foldedWriting:u.length===0?void 0:i,annotation:Dn}),...u.map(k=>n.jsx(r,{file:k,annotation:je,family:p.filePanelStates},ue(k))))}super.$Bound()}};o(Qt,"$Index");let te=Qt;const Vt=class Vt extends b{$isATableOfContents(e){c(e.is(q),"an index is a table of contents, and this chapter is not one")}};o(Vt,"IndexSpecification");let Ue=Vt;Be([l("an index is a table of contents")],Ue.prototype,"$isATableOfContents");const St=class St extends b{$isASectionOfTheTable(e){c(e instanceof z&&e.chapter?.is(q)===!0,"the appendix is a section of the table of contents, and this is not one")}};o(St,"AppendixSpecification");let Ze=St;Be([l("the appendix is a section of the table of contents")],Ze.prototype,"$isASectionOfTheTable");const eo=class eo extends b{$isARowThatLeadsSomewhere(e){c(e instanceof g&&M(e)!==void 0,"an entry is a row that leads somewhere, and this is not one")}};o(eo,"EntrySpecification");let Xe=eo;Be([l("an entry is a row that leads somewhere")],Xe.prototype,"$isARowThatLeadsSomewhere");const ao=class ao extends h{constructor(){super(...arguments),this.specification=new Je}defines(e){e.classes.add(this,"pa-folded")}erase(e){e.classes.revert(this)}};o(ao,"$Folded");let es=ao;const so=class so extends ve{get on(){return this.$foldedWriting!==void 0&&[this.$foldedWriting.$is].flat().includes(this.$annotation)}container(e){return super.container({...e,disabled:this.$foldedWriting===void 0,onClick:o(a=>{a.preventDefault(),this.press()},"onClick")})}press(){const e=this.$foldedWriting;if(e===void 0)return;const a=[e.$is].flat();e.$is=this.on?a.filter(r=>r!==this.$annotation):[this.$annotation,...a]}write(){return n.jsx("span",{className:"pd-drawing",dangerouslySetInnerHTML:{__html:jn}})}$Define(){super.$Define(),this.classes.add(this,"pd-fold-chevron")}};o(so,"$FoldChevron");let as=so;const to=class to extends T{constructor(){super(...arguments),this.specification=new Qe,this.tree=$.div`
        .pd-book .pd-holds &.pd-tree-folder .pd-fold-chevron, .pd-book .pd-holds &.pd-tree-folder .pd-tree-folder-mark, .pd-book .pd-holds &.pd-tree-folder .pa-entry .pd-file-tab { display: none; }
        .pd-book.pa-manual .pd-holds &.pd-tree-folder:not(.pa-open) { display: none; }
        .pd-book .pd-holds &.pd-tree-folder.pa-open { position: relative; }
        .pd-book .pd-holds &.pd-tree-folder.pa-open .pd-section { margin: 0 0 calc(${({theme:e})=>e.space} / 3); }
        .pd-book .pd-holds &.pd-tree-folder.pa-open .pd-sentence.pd-heading {
            display: flex;
            align-items: center;
            height: calc(1.9286 * ${({theme:e})=>e.size});
            margin: 0;
            padding: 0 calc(${({theme:e})=>e.space} * 0.5833) 0 calc(${({theme:e})=>e.space} * 2.3333);
            border: 0;
            font-size: calc(0.9286 * ${({theme:e})=>e.size});
            font-weight: 400;
            line-height: calc(1.9286 * ${({theme:e})=>e.size});
            letter-spacing: 0;
            text-transform: none;
            color: ${({theme:e})=>e.sideInk};
            transition: background ${({theme:e})=>e.beat} ease;
        }
        .pd-book .pd-holds &.pd-tree-folder.pa-open .pd-heading:hover { background: color-mix(in oklab, ${({theme:e})=>e.sky} 30%, white); }
        .pd-book .pd-holds &.pd-tree-folder.pa-open .pd-heading .pa-reference { color: inherit; text-decoration: none; }
        .pd-book .pd-holds &.pd-tree-folder.pa-open .pd-fold-chevron {
            display: grid;
            place-items: center;
            width: calc(1.1429 * ${({theme:e})=>e.size});
            height: calc(1.1429 * ${({theme:e})=>e.size});
            padding: 0;
            border: 0;
            border-radius: 0;
            background: none;
            color: #a5aebb;
            cursor: pointer;
            transition: transform 0.18s ease, color ${({theme:e})=>e.beat} ease;
        }
        .pd-book .pd-holds &.pd-tree-folder.pa-open .pd-fold-chevron .pd-drawing { display: block; width: calc(0.7143 * ${({theme:e})=>e.size}); height: calc(0.7143 * ${({theme:e})=>e.size}); }
        .pd-book .pd-holds &.pd-tree-folder.pa-open .pd-fold-chevron svg, .pd-book .pd-holds &.pd-tree-folder.pa-open .pd-tree-folder-mark svg, .pd-book .pd-holds &.pd-tree-folder.pa-open .pd-file-tab svg { display: block; width: 100%; height: 100%; }
        .pd-book .pd-holds &.pd-tree-folder.pa-open .pd-word.pd-fold-chevron[aria-pressed='true'] { color: #a5aebb; background: none; border-color: transparent; }
        .pd-book .pd-holds &.pd-tree-folder.pa-open .pd-fold-chevron[aria-pressed='false'] { transform: rotate(90deg); }
        .pd-book .pd-holds &.pd-tree-folder.pa-open .pd-fold-chevron:hover { color: ${({theme:e})=>e.ink}; }
        .pd-book .pd-holds &.pd-tree-folder.pa-open .pd-fold-chevron { position: absolute; top: calc(${({theme:e})=>e.space} * 0.2292); left: calc(${({theme:e})=>e.space} * 0.4167); }
        .pd-book .pd-holds &.pd-tree-folder.pa-open .pd-tree-folder-mark {
            display: block;
            position: absolute;
            top: calc(${({theme:e})=>e.space} * 0.2292);
            left: calc(${({theme:e})=>e.space} * 1.375);
            width: calc(1.1429 * ${({theme:e})=>e.size});
            height: calc(1.1429 * ${({theme:e})=>e.size});
            color: #8a94a3;
        }
        .pd-book .pd-holds &.pd-tree-folder.pa-open .pd-tree-folder-mark .ground { fill: #f1f3f5; stroke: #8a94a3; stroke-width: 1.5; }
        .pd-book .pd-holds &.pd-tree-folder.pa-open .pa-folded .pd-paragraph.pa-entry { display: none; }
        .pd-book .pd-holds &.pd-tree-folder.pa-open .pd-paragraph.pa-entry {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: flex-start;
            gap: 0 calc(${({theme:e})=>e.space} * 0.2917);
            margin: 0;
            min-height: calc(1.9286 * ${({theme:e})=>e.size});
            padding: 0 calc(${({theme:e})=>e.space} * 0.5833) 0 calc(${({theme:e})=>e.space} * 1.1667);
            border-radius: 0;
            font-size: calc(0.9286 * ${({theme:e})=>e.size});
            font-weight: 400;
            line-height: calc(1.9286 * ${({theme:e})=>e.size});
            color: ${({theme:e})=>e.sideInk};
            cursor: pointer;
            transition: color ${({theme:e})=>e.beat} ease;
        }
        .pd-book .pd-holds &.pd-tree-folder.pa-open .pd-paragraph.pa-entry::before { content: none; }
        .pd-book .pd-holds &.pd-tree-folder.pa-open .pa-entry .pd-fold-chevron { order: -2; position: static; }
        .pd-book .pd-holds &.pd-tree-folder.pa-open .pa-entry .pd-fold-chevron[disabled] { visibility: hidden; }
        .pd-book .pd-holds &.pd-tree-folder.pa-open .pa-entry .pd-icon { order: -1; }
        .pd-book .pd-holds &.pd-tree-folder.pa-open .pa-entry .pa-content { flex: 1; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
        .pd-book .pd-holds &.pd-tree-folder.pa-open .pa-entry:hover { background: linear-gradient(color-mix(in oklab, ${({theme:e})=>e.sky} 40%, white), color-mix(in oklab, ${({theme:e})=>e.sky} 40%, white)) left top / 100% calc(1.9286 * ${({theme:e})=>e.size}) no-repeat; }
        .pd-book .pd-holds &.pd-tree-folder.pa-open .pd-paragraph.pa-entry.pa-open {
            background: linear-gradient(var(--band-ink), var(--band-ink)) left top / 3px calc(1.9286 * ${({theme:e})=>e.size}) no-repeat, linear-gradient(color-mix(in oklab, ${({theme:e})=>e.sky} 72%, white), color-mix(in oklab, ${({theme:e})=>e.sky} 72%, white)) left top / 100% calc(1.9286 * ${({theme:e})=>e.size}) no-repeat;
            color: var(--band-ink);
            font-weight: 400;
            box-shadow: none;
        }
        .pd-book .pd-holds &.pd-tree-folder.pa-open .pa-number { order: 1; margin: 0; font-size: calc(0.75 * ${({theme:e})=>e.size}); color: color-mix(in oklch, var(--foot-ink) 48%, white); font-variant-numeric: tabular-nums; }
        .pd-book .pd-holds &.pd-tree-folder.pa-open .pd-paragraph.pa-entry .pd-file-tab {
            order: 2;
            flex: 0 0 calc(100% + ${({theme:e})=>e.space} * 1.75);
            margin: 0 calc(${({theme:e})=>e.space} * -0.5833) 0 calc(${({theme:e})=>e.space} * -1.1667);
            padding: 0 calc(${({theme:e})=>e.space} * 0.5833) 0 calc(${({theme:e})=>e.space} * 2.875);
        }
        .pd-book .pd-holds &.pd-tree-folder.pa-open .pd-paragraph.pa-entry.pa-folded .pd-file-tab { display: none; }
        .pd-book .pd-holds &.pd-tree-folder.pa-open .pd-paragraph.pa-entry .pd-file-tab {
            display: flex;
            align-items: center;
            gap: calc(${({theme:e})=>e.space} * 0.2917);
            height: calc(1.9286 * ${({theme:e})=>e.size});
            border: 0;
            border-radius: 0;
            background: none;
            font: inherit;
            font-size: calc(0.9286 * ${({theme:e})=>e.size});
            font-weight: 400;
            line-height: calc(1.9286 * ${({theme:e})=>e.size});
            color: ${({theme:e})=>e.sideInk};
            text-align: start;
            cursor: pointer;
            transition: background ${({theme:e})=>e.beat} ease, color ${({theme:e})=>e.beat} ease;
        }
        .pd-book .pd-holds &.pd-tree-folder.pa-open .pd-file-tab .pd-drawing { flex: none; width: ${({theme:e})=>e.size}; height: ${({theme:e})=>e.size}; color: #a5aebb; transition: color ${({theme:e})=>e.beat} ease; }
        .pd-book .pd-holds &.pd-tree-folder.pa-open .pd-file-tab:hover { background: color-mix(in oklab, ${({theme:e})=>e.sky} 40%, white); color: ${({theme:e})=>e.ink}; }
        .pd-book.pa-split .pd-holds &.pd-tree-folder.pa-open .pd-paragraph.pa-entry .pd-file-tab[aria-pressed='true'], .pd-book.pa-code-forward .pd-holds &.pd-tree-folder.pa-open .pd-paragraph.pa-entry .pd-file-tab[aria-pressed='true'] { color: ${({theme:e})=>e.skyInk}; font-weight: 500; background: color-mix(in oklab, ${({theme:e})=>e.sky} 45%, white); }
        .pd-book.pa-split .pd-holds &.pd-tree-folder.pa-open .pd-paragraph.pa-entry .pd-file-tab[aria-pressed='true'] .pd-drawing, .pd-book.pa-code-forward .pd-holds &.pd-tree-folder.pa-open .pd-paragraph.pa-entry .pd-file-tab[aria-pressed='true'] .pd-drawing { color: var(--colour); }
        @media (max-width: ${({theme:e})=>e.narrow}) {
            .pd-book .pd-holds &.pd-tree-folder.pa-open .pd-fold-chevron, .pd-book .pd-holds &.pd-tree-folder.pa-open .pd-tree-folder-mark, .pd-book .pd-holds &.pd-tree-folder.pa-open .pa-entry .pd-file-tab { display: none; }
            .pd-book .pd-holds &.pd-tree-folder.pa-open .pd-sentence.pd-heading { height: auto; padding: 0 calc(${({theme:e})=>e.space} / 2); }
        }
    `}get section(){return this.parent}get firstPlace(){return this.section.text.find(g).map(e=>M(e)).find(e=>e!==void 0)?.identifier}get part(){const e=this.firstPlace;return e===void 0?void 0:this.book.chapterAt(e)?.part}get open(){const e=this.book.open;return e!==void 0&&e.part?.name===this.part?.name}$TreeFolder(...e){this.$Format(...e);const a=this.tree,r=t(An),s=t(y),i=t(v);this.style=({className:p,children:u})=>{const k=this.firstPlace,W=[...this.section.classes].includes("pa-open"),me=n.jsx("span",{className:"pd-drawing pd-tree-folder-mark",dangerouslySetInnerHTML:{__html:Li}});return n.jsxs(a,{className:`${p??""} pd-tree-folder${W?" pa-open":""}`.trim(),children:[n.jsx(r,{foldedWriting:this.section,annotation:Dn}),k===void 0?me:n.jsxs(s,{children:[n.jsx(i,{children:k}),me]}),u]})}}defines(e){super.defines(e),e.classes.add(this,"pa-tree-folder"),this.open&&e.classes.add(this,"pa-open")}erase(e){super.erase(e),e.classes.revert(this)}};o(to,"$TreeFolder");let Ke=to;const oo=class oo extends b{$saidOfASectionOrAnEntry(e){c(e instanceof z&&e.chapter?.is(q)===!0||e.is(Z),"folded is said of a section of a table of contents or of an entry, and this is neither")}};o(oo,"FoldedSpecification");let Je=oo;Be([l("folded is said of a section of a table of contents or of an entry")],Je.prototype,"$saidOfASectionOrAnEntry");const ro=class ro extends b{$isASectionOfTheTable(e){c(e instanceof z&&e.chapter?.is(q)===!0,"a tree folder is a section of the table of contents, and this is not one")}};o(ro,"TreeFolderSpecification");let Qe=ro;Be([l("a tree folder is a section of the table of contents")],Qe.prototype,"$isASectionOfTheTable");const no=class no extends g{get cover(){return this.$cover??this.book?.cover}write(){const e=this.cover,a=t(y),r=t(v);return n.jsxs(a,{children:[n.jsx(r,{children:e.mention.identifier}),n.jsx("span",{className:"pd-drawing",dangerouslySetInnerHTML:{__html:jn}}),e.title.name]})}$Define(){super.$Define(),this.classes.add(this,"pd-tree-root")}};o(no,"$TreeRoot");let ss=no;const M=o(d=>d.annotations.expressed(un)??d.text.find(x).map(e=>e.annotations.expressed(un)).find(e=>e!==void 0),"contentOf"),zn=t(Z),nd=t(te),id=t(ze),On=t(es),Ri=t(as),Pn=t(Ke),_i=t(ss),Ei=zn,Dn=On,An=Ri;var Gi=Object.defineProperty,qi=Object.getOwnPropertyDescriptor,Q=o((d,e,a,r)=>{for(var s=qi(e,a),i=d.length-1,p;i>=0;i--)(p=d[i])&&(s=p(e,a,s)||s);return s&&Gi(e,a,s),s},"__decorateClass$e");const Wa=o((d,e)=>{const a=new Set(d.text.find(e));return d.text.find(qn).flatMap(r=>[...a.has(r)?[r]:[],...Wa(r,e)])},"within"),io=class io extends h{constructor(){super(...arguments),this.specification=new X}get identifier(){return ke.reference(j.copy(this.text))?.identifier??""}get name(){return ke.reference(j.copy(this.text))?.name??""}get cover(){const e=this.identifier;return this.chapter?.annotations.find(I).map(a=>a.cover).find(a=>a?.mention?.identifier===e)}defines(e){e.classes.add(this,"pa-design")}erase(e){e.classes.revert(this)}};o(io,"$Design");let w=io;const po=class po extends h{constructor(){super(...arguments),this.specification=new Ve}defines(e){e.classes.add(this,"pa-exhibit")}erase(e){e.classes.revert(this)}};o(po,"$Exhibit");let Oe=po;const co=class co extends h{constructor(){super(...arguments),this.specification=new Se,this.$number=0,this.span=$.span.attrs({className:"pd-plate"})``}note(){const e=this.span;return n.jsxs(n.Fragment,{children:[n.jsx(e,{children:String(this.$number).padStart(2,"0")}),n.jsx("span",{className:"pd-jacket-mini"})]})}defines(e){e.classes.add(this,"pa-plate")}erase(e){e.classes.revert(this)}};o(co,"$Plate");let ts=co;const lo=class lo extends T{constructor(){super(...arguments),this.specification=new ea,this.themeProvider=!0,this.room=$.div`
        .pd-book &.pd-container:not(.pa-open) { display: none; }
        .pd-book &.pd-container.pa-open { display: block; position: relative; min-height: 100%; padding: calc(${({theme:e})=>e.space} * 1.5) calc(${({theme:e})=>e.space} * 1.8333) calc(${({theme:e})=>e.space} * 3); background: linear-gradient(160deg, color-mix(in oklab, var(--ground) 55%, white) 0%, color-mix(in oklab, var(--ground) 22%, white) 45%, color-mix(in oklab, var(--foot) 7%, white) 100%); }
        .pd-book & .pd-plate { position: absolute; top: calc(${({theme:e})=>e.space} * 0.9167); left: calc(${({theme:e})=>e.space} * 1.8333); font-family: ${({theme:e})=>e.serif}; font-size: calc(${({theme:e})=>e.size} * 26 / 7); font-weight: 500; line-height: 1; letter-spacing: -0.03em; color: color-mix(in oklab, var(--band) 32%, white); pointer-events: none; }
        .pd-book & .pd-chapter { position: relative; max-width: none; margin: 0; }
        .pd-book &.pd-room .pd-chapter .pd-sentence.pd-title { margin: calc(${({theme:e})=>e.space} * 1.75) 0 calc(${({theme:e})=>e.space} * 0.4167); font-family: ${({theme:e})=>e.serif}; font-size: calc(2.4286 * ${({theme:e})=>e.size}); font-weight: 600; line-height: 1.15; letter-spacing: -0.02em; color: var(--band-ink); }
        .pd-book & .pd-paragraph { max-width: 72ch; }
        .pd-book & .pd-paragraph.pa-exhibit { max-width: calc(${({theme:e})=>e.space} * 43.33); margin: calc(${({theme:e})=>e.space} / 2) 0 calc(${({theme:e})=>e.space} * 1.25); padding: calc(${({theme:e})=>e.space} * 0.75) calc(${({theme:e})=>e.space} * 0.75) calc(${({theme:e})=>e.space} / 2); border-radius: calc(${({theme:e})=>e.radius} * 2); background: linear-gradient(135deg, color-mix(in oklab, var(--ground) 72%, white) 0%, color-mix(in oklab, var(--ground) 40%, white) 100%); box-shadow: ${({theme:e})=>e.gloss}; }
        .pd-book & .pd-paragraph.pa-exhibit img { width: 100%; border: 0; border-radius: ${({theme:e})=>e.radius}; box-shadow: ${({theme:e})=>e.lift}; }
        .pd-book & .pd-paragraph.pa-exhibit::after { content: 'As built'; display: block; margin-block-start: calc(${({theme:e})=>e.space} / 2); font-size: calc(0.75 * ${({theme:e})=>e.size}); font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: var(--band-ink); }
        .pd-book & .pd-section { margin-block-start: calc(${({theme:e})=>e.space} * 1.25); }
        .pd-book &.pd-room .pd-chapter .pd-sentence.pd-heading { color: var(--band-ink); }
        .pd-book & .pd-image img { border: thin solid ${({theme:e})=>e.line}; border-radius: ${({theme:e})=>e.radius}; background: ${({theme:e})=>e.paper}; box-shadow: ${({theme:e})=>e.shadow}; }
        .pd-book & .pd-built-in { display: flex; flex-wrap: wrap; align-items: baseline; gap: calc(${({theme:e})=>e.space} / 3) calc(${({theme:e})=>e.space} * 0.4167); max-width: 72ch; margin: calc(${({theme:e})=>e.space} * 1.75) 0 0; padding-block-start: calc(${({theme:e})=>e.space} * 0.8333); border-block-start: thin solid color-mix(in oklab, var(--band) 70%, white); }
        .pd-book & .pd-built-in:empty { display: none; }
        .pd-book & .pd-built-in::before { content: 'Built in'; flex-basis: 100%; font-size: calc(0.75 * ${({theme:e})=>e.size}); font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: var(--band-ink); }
        .pd-book & .pd-paragraph.pd-built-in .pa-reference.pd-container { text-decoration: none; }
        .pd-book & .pd-paragraph.pd-built-in .pd-word.pa-reference { display: inline-flex; flex-direction: column; padding: calc(${({theme:e})=>e.space} / 4) calc(${({theme:e})=>e.space} * 0.4167); border: thin solid color-mix(in oklab, var(--band) 75%, white); border-radius: ${({theme:e})=>e.radius}; background: ${({theme:e})=>e.paper}; font-size: calc(0.9286 * ${({theme:e})=>e.size}); color: var(--band-ink); text-decoration: none; box-shadow: ${({theme:e})=>e.shadow}; transition: border-color ${({theme:e})=>e.beat} ease, box-shadow ${({theme:e})=>e.beat} ease; }
        .pd-book & .pd-paragraph.pd-built-in .pd-word.pa-reference:hover { border-color: var(--band-ink); box-shadow: ${({theme:e})=>e.lift}; text-decoration: none; }
        .pd-book & .pd-built-in .pd-where { display: block; font-size: calc(0.75 * ${({theme:e})=>e.size}); color: ${({theme:e})=>e.faint}; }
        @media (max-width: ${({theme:e})=>e.narrow}) {
            .pd-book &.pd-container.pa-open { padding: calc(${({theme:e})=>e.space} * 0.8333) calc(${({theme:e})=>e.space} * 0.6667) calc(${({theme:e})=>e.space} * 2); }
            .pd-book & .pd-plate { top: calc(${({theme:e})=>e.space} * 0.75); left: calc(${({theme:e})=>e.space} * 0.6667); font-size: calc(2.857 * ${({theme:e})=>e.size}); }
            .pd-book & .pd-chapter .pd-sentence.pd-title { margin-block-start: calc(${({theme:e})=>e.space} * 1.4167); font-size: calc(2 * ${({theme:e})=>e.size}); }
            .pd-book & .pd-paragraph.pa-exhibit { padding: calc(${({theme:e})=>e.space} * 0.4167); }
        }
    `}get chapter(){return this.parent}get design(){return this.chapter.annotations.expressed(w)}get plate(){return this.book.chapters.filter(e=>e.is(w)).indexOf(this.chapter)+1}$Room(...e){this.$Format(...e);const a=this.room;this.style=({className:r,children:s})=>{const i=[...this.chapter.classes].includes("pa-open");return ee(this.design?.cover,n.jsxs(a,{className:`${r??""} pd-room${i?" pa-open":""}`.trim(),children:[n.jsx("span",{className:"pd-plate",children:String(this.plate).padStart(2,"0")}),s]}))}}defines(e){super.defines(e),e.classes.add(this,"pa-room")}erase(e){super.erase(e),e.classes.revert(this)}};o(lo,"$Room");let os=lo;const ho=class ho extends g{get references(){const e=this.book?.means?.identifier??"",a=new Map;for(const r of Wa(this.chapter,x)){if(r.parent===this)continue;const s=r.annotations.expressed(xe)?.identifier;if(s===void 0||s.startsWith(e)||a.has(s))continue;const i=j.copy(r.text);a.set(s,ke.reference(i)?.name??i.trim())}return[...a]}write(){const e=t(y),a=t(v);return this.references.map(([r,s],i)=>n.jsxs(e,{children:[n.jsx(a,{children:r}),s,n.jsx("span",{className:"pd-where",children:r.replace(/^\/dougs-/u,"").replace(/\/#?/u," · ").replace(/ · $/u,"").replace(/-/gu," ")})]},i))}$Define(){super.$Define(),this.classes.add(this,"pd-built-in")}};o(ho,"$BuiltIn");let rs=ho;const fo=class fo extends b{$isAChapter(e){c(e instanceof m,"a design is a chapter, and this is not one")}$namesABook(e){c((e.annotations.expressed(w)?.identifier??"")!=="","a design names the book it is of, and this one names nothing")}$holdsTheCover(e){c(e.annotations.expressed(w)?.cover!==void 0,"a design holds the cover of the book it is of, as a volume, and this one holds none")}$showsItselfAsBuilt(e){c(e instanceof m&&Wa(e,g).some(a=>a.is(Oe)),"a design shows itself as built, in a paragraph said to be the exhibit, and this one shows nothing")}};o(fo,"DesignSpecification");let X=fo;Q([l("a design is a chapter")],X.prototype,"$isAChapter");Q([l("a design names the book it is of")],X.prototype,"$namesABook");Q([l("a design holds the cover of the book it is of")],X.prototype,"$holdsTheCover");Q([l("a design shows itself as built")],X.prototype,"$showsItselfAsBuilt");const go=class go extends b{$isAParagraphOfADesignHoldingOneImage(e){c(e instanceof g&&e.chapter?.is(w)===!0&&e.text.find(tt).length===1,"an exhibit is a paragraph of a design that holds one image, and this is not one")}};o(go,"ExhibitSpecification");let Ve=go;Q([l("an exhibit is a paragraph of a design that holds one image")],Ve.prototype,"$isAParagraphOfADesignHoldingOneImage");const bo=class bo extends b{$saidOfAnEntryLeadingToADesign(e){c(e.is(Z)&&e.annotations.expressed(Z)?.referencedChapter?.is(w)===!0,"a plate is said of an entry that leads to a design, and this is not one")}};o(bo,"PlateSpecification");let Se=bo;Q([l("a plate is said of an entry that leads to a design")],Se.prototype,"$saidOfAnEntryLeadingToADesign");const uo=class uo extends b{$isADesign(e){c(e instanceof m&&e.is(w),"a room is a chapter that is a design, and this is not one")}};o(uo,"RoomSpecification");let ea=uo;Q([l("a room is a chapter that is a design")],ea.prototype,"$isADesign");const pd=t(w),dd=t(Oe),Yi=t(ts),Ui=t(os),Zi=t(rs);var Xi=Object.defineProperty,Ki=Object.getOwnPropertyDescriptor,A=o((d,e,a,r)=>{for(var s=Ki(e,a),i=d.length-1,p;i>=0;i--)(p=d[i])&&(s=p(e,a,s)||s);return s&&Xi(e,a,s),s},"__decorateClass$d");const ee=o((d,e,a)=>{const r=d?.annotations.expressed(B)?.painted;return r===void 0?e:n.jsx(r,{children:e},a)},"painted"),$o=class $o extends C{constructor(){super(...arguments),this.specification=new ne}get name(){return this.chapter?.title?.name??""}get author(){return this.chapter?.annotations.expressed(at)?.name??""}get illustration(){return this.chapter?.text.find(g).find(e=>e.is(Pe))}get drawing(){const e=this.illustration?.text.find(Fa)[0];return e===void 0?"":j.copy(e.text).trim()}get scheme(){return this.chapter?.annotations.expressed(B)}get window(){return this.chapter?.annotations.expressed(re)}};o($o,"$BookshelfCover");let oe=$o;const mo=class mo extends h{constructor(){super(...arguments),this.specification=new ta}defines(e){e.classes.add(this,"pa-illustration")}erase(e){e.classes.revert(this)}};o(mo,"$Illustration");let Pe=mo;const ko=class ko extends T{constructor(){super(...arguments),this.specification=new De,this.$ground="",this.$band="",this.$bandInk="",this.$foot="",this.$footInk="",this.$ink="",this.style=$.div.attrs({className:"pd-scheme"})`
        ${e=>e.$scheme}
    `}get colours(){return[this.$ground,this.$band,this.$bandInk,this.$foot,this.$footInk,this.$ink]}get declarations(){return`--ground: ${this.$ground}; --band: ${this.$band}; --band-ink: ${this.$bandInk}; --foot: ${this.$foot}; --foot-ink: ${this.$footInk}; --ink: ${this.$ink};`}get painted(){return this._painted}$Scheme(...e){this.$Format(...e);const a=this.style;this._painted=r=>n.jsx(a,{$scheme:this.declarations,...r})}defines(e){e.classes.add(this,"pa-scheme"),e.containers.add(this,this._painted)}erase(e){e.classes.revert(this),e.containers.revert(this)}};o(ko,"$Scheme");let B=ko;const xo=class xo extends h{constructor(){super(...arguments),this.specification=new Ae,this.$x="",this.$y=""}get declarations(){return`--window-x: ${this.$x}px; --window-y: ${this.$y}px;`}};o(xo,"$Window");let re=xo;const vo=class vo extends h{constructor(){super(...arguments),this.specification=new Ce}get cover(){return this._cover}get jacket(){return this._cover?.annotations.expressed(C)}$Volume(...e){this._cover=e.find(a=>a instanceof m),this.$Annotation(...e.filter(a=>a!==this._cover))}defines(e){e.classes.add(this,"pa-volume")}erase(e){e.classes.revert(this)}};o(vo,"$Volume");let I=vo;const yo=class yo extends g{get cover(){return this.$cover?.annotations.expressed(C)}$Jacket(...e){this.$Writing(...e),this._painted=a=>{const r=this.cover?.scheme?.painted;return r===void 0?n.jsx("div",{...a}):n.jsx(r,{...a})},this.containers.add(this,this._painted)}write(){const e=this.cover;if(e===void 0)return;const a=t(y),r=t(rt);return n.jsxs(n.Fragment,{children:[n.jsx(a,{children:e.name}),n.jsx("span",{className:"pd-drawing",dangerouslySetInnerHTML:{__html:e.drawing}}),n.jsxs(a,{children:[n.jsx(r,{}),e.author]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-jacket")}};o(yo,"$Jacket");let ns=yo;const wo=class wo extends g{constructor(){super(...arguments),this.unfolded=!1}get filedElsewhere(){return this.$subject!==void 0&&this.$subject!==this.$cover}container(e){return super.container({onMouseOver:o(a=>{a.target instanceof Element&&a.target.closest(".pd-filed")!==null&&this.unfold()},"onMouseOver"),onMouseLeave:o(()=>this.fold(),"onMouseLeave"),...e})}unfold(){this.unfolded=!0}fold(){this.unfolded=!1}write(){const e=this.$cover,a=this.$subject;if(e!==void 0)return n.jsxs(n.Fragment,{children:[this.filedElsewhere?ee(a,n.jsx("span",{className:"pd-filed",children:this.mark(a)})):void 0,ee(e,n.jsx("span",{className:"pd-own",children:this.mark(e)})),n.jsxs("span",{className:"pd-names",children:[ee(e,n.jsx("span",{className:"pd-name",children:this.name(e)})),this.filedElsewhere?ee(a,n.jsx("span",{className:"pd-name pd-under",children:this.name(a)})):void 0]})]})}mark(e){const a=t(Si),r=t(v);return n.jsx(a,{cover:e,children:n.jsx(r,{children:e.mention.identifier})})}name(e){const a=t(y),r=t(v);return n.jsxs(a,{children:[n.jsx(r,{children:e.mention.identifier}),e.title.name]})}$Define(){super.$Define(),this.classes.add(this,"pd-logo");const e=t(ep);this.annotations.add(this,n.jsx(e,{}))}};o(wo,"$Logo");let aa=wo;const jo=class jo extends h{constructor(){super(...arguments),this.specification=new sa}defines(e){e.unfolded&&e.classes.add(this,"pa-unfolded")}erase(e){e.classes.revert(this)}};o(jo,"$Unfolded");let is=jo;const zo=class zo extends b{$saidOfALogo(e){c(e instanceof aa,"unfolded is said of a logo, and this is not one")}};o(zo,"UnfoldedSpecification");let sa=zo;A([l("unfolded is said of a logo")],sa.prototype,"$saidOfALogo");const Oo=class Oo extends x{constructor(){super(...arguments),this.style=$.span`
        ${e=>e.$vars}
    `}get cover(){return this.$cover?.annotations.expressed(C)}$Mark(...e){this.$Writing(...e);const a=this.style;this._painted=r=>n.jsx(a,{$vars:`${this.cover?.scheme?.declarations??""} ${this.cover?.window?.declarations??""}`,...r}),this.containers.add(this,this._painted)}write(){return n.jsx("span",{className:"pd-drawing",dangerouslySetInnerHTML:{__html:this.cover?.drawing??""}})}$Define(){super.$Define(),this.classes.add(this,"pd-mark")}};o(Oo,"$Mark");let ps=Oo;const Po=class Po extends Yn{$carriesItsScheme(e){c(e.is(B),"a bookshelf cover carries its scheme, and this one carries none")}$carriesItsWindow(e){c(e.is(re),"a bookshelf cover carries its window, and this one carries none")}$carriesItsIllustration(e){c(e instanceof m&&e.text.find(g).some(a=>a.is(Pe)),"a bookshelf cover carries its illustration, and this one carries none")}};o(Po,"BookshelfCoverSpecification");let ne=Po;A([l("a bookshelf cover carries its scheme")],ne.prototype,"$carriesItsScheme");A([l("a bookshelf cover carries its window")],ne.prototype,"$carriesItsWindow");A([l("a bookshelf cover carries its illustration")],ne.prototype,"$carriesItsIllustration");const Do=class Do extends b{$saidOfADrawing(e){c(e instanceof g&&e.chapter?.is(C)===!0&&e.text.find(Fa).length===1,"an illustration is a paragraph of a cover that holds one drawing, and this is not one")}};o(Do,"IllustrationSpecification");let ta=Do;A([l("an illustration is a paragraph of a cover that holds one drawing")],ta.prototype,"$saidOfADrawing");const Ao=class Ao extends b{$isACover(e){c(e instanceof m&&e.is(C),"a cover has a scheme, and this is not a cover")}$givenItsColours(e){const a=e.annotations.expressed(B)?.colours??[];c(a.every(r=>/^#[0-9a-f]{6}$/iu.test(r)),"a scheme is given its six colours as six hex digits each — the ground, the band and its ink, the foot and its ink, and the ink of the drawing — and this one was given something else")}};o(Ao,"SchemeSpecification");let De=Ao;A([l("a cover has a scheme")],De.prototype,"$isACover");A([l("a scheme is given its six colours")],De.prototype,"$givenItsColours");const Co=class Co extends b{$isACover(e){c(e instanceof m&&e.is(C),"a cover has a window, and this is not a cover")}$givenItsPlace(e){const a=e.annotations.expressed(re);c(/^-?\d+$/u.test(a?.$x??"")&&/^-?\d+$/u.test(a?.$y??""),"a window is given where it stands on the drawing, two whole numbers, and this one was given something else")}};o(Co,"WindowSpecification");let Ae=Co;A([l("a cover has a window")],Ae.prototype,"$isACover");A([l("a window is given where it stands on the drawing")],Ae.prototype,"$givenItsPlace");const Io=class Io extends b{$saidOfAChapterStandingForABook(e){c(e instanceof m&&(e.is(_)||e.is(C)||e.is(w)),"a volume is a chapter that stands for another book, a synopsis of it, a cover filed under it or a design of it, and this is none")}$holdsTheCover(e){const a=[e.annotations.expressed(_)?.means?.identifier,e.annotations.expressed($n)?.means?.identifier,e.annotations.expressed(at)?.means?.identifier,e.annotations.expressed(w)?.identifier];c(e.annotations.find(I).every(r=>r.cover?.is(C)===!0&&a.includes(r.cover.mention?.identifier)),"a volume holds the cover of a book its chapter stands for, the book a synopsis or a design is of or the subject or author a cover is filed under, and one here holds something else")}};o(Io,"VolumeSpecification");let Ce=Io;A([l("a volume is a chapter that stands for another book")],Ce.prototype,"$saidOfAChapterStandingForABook");A([l("a volume holds the cover of a book its chapter stands for")],Ce.prototype,"$holdsTheCover");const cd=t(oe),ld=t(Pe),hd=t(B),fd=t(re),gd=t(I),Ji=t(ns),Qi=t(aa),Vi=t(is),Cn=t(ps),Si=Cn,ep=Vi,Na=class Na extends Un{constructor(){super(...arguments),this.specification=new O,this.themeProvider=!0,this.style=$.div`
        ${e=>e.$scheme??""}
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
    `}get pages(){return this.book.pages}get open(){const e=this.book;return e.open??e.synopsis}$Bound(){const e=this.style,a=this.book;this.style=r=>n.jsx(e,{$at:a.means?.identifier,$scheme:a.cover?.annotations.expressed(B)?.declarations,...r}),super.$Bound()}defines(e){for(const r of e.annotations.after(this))r instanceof Na&&e.annotations.express(r,!1);super.defines(e),e.classes.add(this,"pa-layout");const a=this.book.open;a!==void 0&&e.classes.add(this,"pa-turned"),a?.is(P)&&e.classes.add(this,"pa-manual")}erase(e){super.erase(e),e.classes.revert(this)}parts(){return[this.paging(),this.regions(),this.areas(),this.phone()]}paging(){return f`
            .pa-page:not(.pa-open) { display: none; }
        `}regions(){return f`
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
            .pa-layout .pd-head:empty { display: none; }
            .pa-layout .pd-switches {
                display: flex;
                flex-wrap: wrap;
                justify-content: flex-end;
                align-items: center;
                gap: calc(${({theme:e})=>e.space} / 3);
            }
            .pa-layout .pd-pages { grid-area: pages; min-width: 0; overflow-y: auto; }
            .pa-layout .pd-chapter.pa-page { scroll-margin-block-start: ${({theme:e})=>e.space}; }
        `}areas(){return f`
            .pd-book.pa-layout {
                grid-template-columns: ${({theme:e})=>e.holdsColumn} minmax(0, 1fr);
                grid-template-rows: auto auto minmax(0, 1fr);
                grid-template-areas: 'library library' 'holds head' 'holds pages';
            }
            .pa-layout .pd-me {
                grid-area: library;
                justify-self: end;
                background: none;
            }
        `}phone(){return f`
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
                .pa-layout .pd-pages { order: 3; overflow: visible; }
                .pa-layout .pd-chapter.pa-page { scroll-margin-block-start: calc(${({theme:e})=>e.barHeight} + ${({theme:e})=>e.space} / 2); }
            }
        `}};o(Na,"$Layout");let oa=Na;const lt=t(oa),Ta=class Ta extends h{constructor(){super(...arguments),this.specification=new O}defines(e){for(const a of e.annotations.after(this))a instanceof Ta&&e.annotations.express(a,!1);e.classes.add(this,"pa-tone")}erase(e){e.classes.revert(this)}};o(Ta,"$Tone");let ie=Ta;const No=class No extends ie{defines(e){super.defines(e),e.classes.add(this,"pa-dark")}};o(No,"$Dark");let ds=No;const To=class To extends ie{defines(e){super.defines(e),e.classes.add(this,"pa-light")}};o(To,"$Light");let cs=To;const Fo=class Fo extends ie{defines(e){super.defines(e),e.classes.add(this,"pa-white-over-black")}};o(Fo,"$WhiteOverBlack");let ls=Fo;const V=t(ie),In=t(ds),$e=t(cs),ap=t(ls);var sp=Object.defineProperty,tp=Object.getOwnPropertyDescriptor,op=o((d,e,a,r)=>{for(var s=tp(e,a),i=d.length-1,p;i>=0;i--)(p=d[i])&&(s=p(e,a,s)||s);return s&&sp(e,a,s),s},"__decorateClass$c");const Wo=class Wo extends x{write(){const e=this.book.body;return`${e.indexOf(this.chapter)+1} of ${e.length}`}$Define(){super.$Define(),this.classes.add(this,"pd-count")}};o(Wo,"$Count");let hs=Wo;const Mo=class Mo extends h{constructor(){super(...arguments),this.specification=new Ie}defines(e){e.classes.add(this,"pa-before")}erase(e){e.classes.revert(this)}};o(Mo,"$Before");let fs=Mo;const Bo=class Bo extends h{constructor(){super(...arguments),this.specification=new Ie}defines(e){e.classes.add(this,"pa-after")}erase(e){e.classes.revert(this)}};o(Bo,"$After");let gs=Bo;const Ho=class Ho extends b{$saidOfAWordOfATurn(e){c(e instanceof x&&e.parent instanceof ra,"this is said of a word of a turn, and here it is said of something else")}};o(Ho,"OfATurnSpecification");let Ie=Ho;op([l("this is said of a word of a turn")],Ie.prototype,"$saidOfAWordOfATurn");const rp=t(hs),np=t(fs),ip=t(gs),Lo=class Lo extends g{get before(){const e=this.book.body;return e[e.indexOf(this.chapter)-1]??this.chapter}get after(){const e=this.book.body;return e[e.indexOf(this.chapter)+1]??this.chapter}write(){const e=t(y),a=t(rp),r=t(np),s=t(ip),i=t(this.before===this.chapter?Ba:v),p=t(this.after===this.chapter?Ba:v);return n.jsxs(n.Fragment,{children:[n.jsxs(e,{children:[n.jsx(r,{}),n.jsx(i,{children:this.before.mention.identifier}),"← ",this.before.title.name]}),n.jsx(a,{}),n.jsxs(e,{children:[n.jsx(s,{}),n.jsx(p,{children:this.after.mention.identifier}),this.after.title.name," →"]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-turn")}};o(Lo,"$Turn");let ra=Lo;const pp=t(ra);var dp=Object.defineProperty,cp=Object.getOwnPropertyDescriptor,He=o((d,e,a,r)=>{for(var s=r>1?void 0:r?cp(e,a):e,i=d.length-1,p;i>=0;i--)(p=d[i])&&(s=(r?p(e,a,s):p(s))||s);return r&&s&&dp(e,a,s),s},"__decorateClass$b");const Ro=class Ro extends Zn{constructor(){super(...arguments),this.specification=new D}get chapters(){return this.text.find(m).filter(e=>[...e.classes].includes("pd-canonical"))}get laidOutChapters(){return[this.cover,this.synopsis,this.table,...this.chapters]}get pages(){return[this.synopsis,...this.chapters].filter(e=>e!==void 0)}get body(){const e=this.appendix;return this.chapters.filter(a=>!e.includes(a))}get appendix(){const e=this.table;if(e===void 0)return[];const a=e.text.find(z).filter(r=>r.is(ze)).flatMap(r=>r.text.find(g).map(s=>M(s)?.identifier));return this.chapters.filter(r=>a.includes(r.mention?.identifier??""))}get open(){return this.$bookmark===void 0?void 0:this.chapterAt(this.$bookmark)}get tones(){return[In,$e,ap]}write(){return n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"pd-library",children:this.library()}),n.jsx("div",{className:"pd-me",children:this.me()}),n.jsx("div",{className:"pd-holds",children:this.holds()}),n.jsx("div",{className:"pd-head",children:this.head()}),n.jsxs("div",{className:"pd-pages",children:[this.aboveThePages(),this.pages.map((e,a)=>{const r=t(e);return n.jsx(r,{},a)}),this.belowThePages()]})]})}library(){if(this._logo===void 0)return;const e=t(this._logo);return n.jsx(e,{})}me(){const e=t(Cn),a=t(v),r=this.coverOf(this.author?.means?.identifier);return n.jsxs(n.Fragment,{children:[this.byline(),r===void 0?void 0:this.painted(r,n.jsx(e,{cover:r,children:n.jsx(a,{children:r.mention.identifier})}))]})}painted(e,a,r){return ee(e,a,r)}holds(){const e=t(this.table);return n.jsx(e,{})}head(){const e=t(this.cover);return n.jsxs(n.Fragment,{children:[n.jsx(e,{}),n.jsx("div",{className:"pd-switches",children:this.switches()})]})}aboveThePages(){}belowThePages(){}chapterAt(e){return(this._chapterByPlace??this.chapterByPlace()).get(e)}chapterByPlace(){const e=new Map;for(const a of this.chapters)for(const r of this.sections(a))r.mention!==void 0&&!e.has(r.mention.identifier)&&e.set(r.mention.identifier,a);for(const a of this.chapters)a.mention!==void 0&&e.set(a.mention.identifier,a);return e}coverOf(e){if(e!==void 0)return this.means?.identifier===e?this.cover:this.cover?.annotations.find(I).map(a=>a.cover).find(a=>a?.mention?.identifier===e)}byline(){const e=t(kn);return n.jsx(e,{chapter:this.cover})}root(){const e=t(_i);return n.jsx(e,{cover:this.cover})}switches(){}sections(e){return e.text.find(z).flatMap(a=>[a,...this.sections(a)])}sectionOf(e){const a=this.table;return a===void 0?void 0:this.sections(a).find(r=>r.canonical?.name===e.name)}turn(){this.bookmark!==this.cover&&super.turn()}$Define(){super.$Define();const e=t(lt),a=t(V);this.annotations.add(this,n.jsx(e,{}),n.jsx(a,{}))}$Bound(){this._chapterByPlace=this.chapterByPlace();const e=t(Pn),a=this.table?.annotations.expressed(q);for(const i of a?.parts??[]){const p=this.sectionOf(i);p===void 0||p.is(Ke)||!i.chapters.some(u=>u.is(P))||p.annotations.add(this,n.jsx(e,{}))}const r=this.root();r!==void 0&&this.table?.text.add(this,r);const s=t(Qi);this._logo=Xn.chemical(n.jsx(s,{cover:this.cover,subject:this.coverOf(this.subject?.means?.identifier)}),this),this.turns(),super.$Bound()}turns(){const e=t(pp);for(const a of this.body)a.text.add(this,n.jsx(e,{}))}};o(Ro,"$LibraryBook");let N=Ro;He([mn()],N.prototype,"_chapterByPlace",2);const _o=class _o extends Kn{$holdsOnlyChapters(e){c([...e.text].every(a=>a instanceof m),"a book of this library holds only chapters, and this one holds something else")}$placesEveryChapter(e){c(e.text.find(m).every(a=>e.laidOutChapters.includes(a)),"a book of this library has a place for every chapter it holds, and this one holds a chapter it places nowhere")}$onlyAChapterAppends(e){c(e.text.find(m).every(a=>e.chapters.includes(a)||!a.is(st)),"only an ordinary chapter files a file, and here a cover, a synopsis or a table of contents files one")}$listsEachManualPart(e){const r=(e.table?.annotations.expressed(q)?.parts??[]).find(s=>s.chapters.some(i=>i.is(P))&&e.sectionOf(s)===void 0);c(r===void 0,`a part read as a manual is listed under a section headed with its name, and "${r?.name}" has none`)}};o(_o,"LibraryBookSpecification");let D=_o;He([l("a book of this library holds only chapters")],D.prototype,"$holdsOnlyChapters",1);He([l("a book of this library has a place for every chapter it holds")],D.prototype,"$placesEveryChapter",1);He([l("only an ordinary chapter files a file")],D.prototype,"$onlyAChapterAppends",1);He([l("a part read as a manual is listed under a section headed with its name")],D.prototype,"$listsEachManualPart",1);const Nn=t(N);t(Nn,be)(ai);t(Nn,V)(In);var lp=Object.defineProperty,hp=Object.getOwnPropertyDescriptor,fp=o((d,e,a,r)=>{for(var s=hp(e,a),i=d.length-1,p;i>=0;i--)(p=d[i])&&(s=p(e,a,s)||s);return s&&lp(e,a,s),s},"__decorateClass$a");const Eo=class Eo extends N{constructor(){super(...arguments),this.specification=new ia}get open(){return super.open??this.body[0]}head(){}switches(){}root(){}$Define(){super.$Define(),this.$is=[ct,wn]}$Bound(){const e=t(Pn);for(const a of this.table?.text.find(z)??[])a.annotations.add(this,n.jsx(e,{})),a.is(ze)&&(a.$is=[On]);super.$Bound()}};o(Eo,"$Manual");let na=Eo;const Go=class Go extends D{$everyChapterHasABrief(e){c(e.chapters.every(a=>a.text.find(g).some(r=>r.is(Ge))),"every chapter of a manual opens with a brief, and one here has none")}};o(Go,"ManualSpecification");let ia=Go;fp([l("every chapter of a manual opens with a brief")],ia.prototype,"$everyChapterHasABrief");const ht=t(na);t(ht,V)($e);var gp=Object.defineProperty,bp=Object.getOwnPropertyDescriptor,ft=o((d,e,a,r)=>{for(var s=bp(e,a),i=d.length-1,p;i>=0;i--)(p=d[i])&&(s=p(e,a,s)||s);return s&&gp(e,a,s),s},"__decorateClass$9");const qo=class qo extends h{constructor(){super(...arguments),this.specification=new pe}get date(){return this.text.find(ot)[0]}defines(e){e.classes.add(this,"pa-dated")}erase(e){e.classes.revert(this)}note(){const e=t(this.date);return n.jsx(e,{})}};o(qo,"$Dated");let E=qo;const Yo=class Yo extends b{$saidOfAChapter(e){c(e instanceof m,"dated is said of a chapter, and this is not one")}$datedOnce(e){c(e.annotations.containsOne(E),"a chapter is dated once, and this one is dated more than once")}$givenOneDate(e){c(e.annotations.expressed(E)?.text.find(ot).length===1,"a dated chapter is given one date, and this one is given none or more than one")}};o(Yo,"DatedSpecification");let pe=Yo;ft([l("dated is said of a chapter")],pe.prototype,"$saidOfAChapter");ft([l("a chapter is dated once")],pe.prototype,"$datedOnce");ft([l("a dated chapter is given one date")],pe.prototype,"$givenOneDate");const bd=t(E),Uo=class Uo extends Z{constructor(){super(...arguments),this.label=$.span.attrs({className:"pa-number"})``}get number(){return this.book.body.indexOf(this.referencedChapter)+1}get keyed(){return this.referencedChapter?.annotations.expressed(R)}note(){const e=this.label,a=t(vn),r=this.keyed;return n.jsxs(n.Fragment,{children:[super.note(),r===void 0?void 0:n.jsx(a,{keyed:r}),this.number===0?void 0:n.jsx(e,{children:String(this.number)})]})}};o(Uo,"$NumberedEntry");let bs=Uo;const up=t(bs);t(ht,zn)(up);const Zo=class Zo extends oe{constructor(){super(...arguments),this.style=$.header`
        .pd-chapter.pa-cover { margin-block: 0; }
        .pa-cover .pd-title {
            font-size: calc(1.04 * ${({theme:e})=>e.size});
            font-weight: 600;
        }
    `}};o(Zo,"$ManualCover");let us=Zo;const Xo=class Xo extends q{constructor(){super(...arguments),this.style=$.nav`
        .pa-table-of-contents .pa-reference { color: inherit; text-decoration: none; }
    `}};o(Xo,"$ManualTableOfContents");let $s=Xo;const ud=t(us),$d=t($s),Ko=class Ko extends Y{constructor(){super(...arguments),this.measure="104ch",this.holdsColumn="272px",this.barHeight="52px",this.space="24px",this.size="14px",this.beat="0.22s",this.serif="'Source Serif 4', Georgia, serif",this.paper="#fdfcfa",this.ink="#343c4a",this.heading="#1a1f36",this.soft="#727d8c",this.faint="#9ea8b5",this.line="#e4e9f2",this.tint="#f0f4fc",this.barTint="#f8fafe",this.side="#f7f8fb",this.sideInk="#3a4452",this.sideDim="#6b7684",this.sideLine="#e0e4eb",this.sky="#e3edfb",this.skyInk="#4a6ea0",this.accent="#4a6ea0",this.colour="#4fb3a8",this.radius="6px",this.wash="linear-gradient(135deg, #f1f5fd 0%, #fdfcfa 48%, #fdf5ee 100%)"}parts(){return[...super.parts(),this.tree(),this.icons(),this.small()]}library(){return f`
            ${super.library()}
            .pd-book.pa-tone .pd-library {
                background: linear-gradient(180deg, #fbfcfe 0%, #f8fafe 60%, #f1f4fa 100%);
                border-block-end: thin solid #dfe4ed;
                box-shadow: 0 1px 0 rgba(43, 54, 60, 0.05);
            }
        `}holds(){return f`
            ${super.holds()}
            .pd-holds .pd-paragraph.pa-entry::before { content: none; }
        `}page(){return f`
            ${super.page()}
            .pd-book { line-height: 1.6; }
            .pd-book.pa-layout { background: ${({theme:e})=>e.wash}; }
            .pd-book .pd-head { display: none; padding: 0; }
        `}tree(){return f`
            .pd-book .pd-holds {
                padding: calc(${({theme:e})=>e.space} * 0.5833) 0 calc(${({theme:e})=>e.space} * 0.6667);
                background: linear-gradient(90deg, #f9fafc 0%, #f7f8fb 86%, #f2f4f8 100%);
                border-inline-end: thin solid ${({theme:e})=>e.sideLine};
                font-size: calc(0.8929 * ${({theme:e})=>e.size});
                scrollbar-width: thin;
                scrollbar-color: transparent transparent;
                transition: scrollbar-color ${({theme:e})=>e.beat} ease;
            }
            .pd-book .pd-holds:hover { scrollbar-color: color-mix(in oklab, var(--band) 62%, white) transparent; }
            .pd-book .pd-holds .pd-chapter { display: flex; flex-direction: column; min-height: 100%; margin: 0; color: ${({theme:e})=>e.sideInk}; }
            .pd-holds .pa-parenthetical { display: none; }
            .pd-holds .pd-section.pa-appendix { margin: auto 0 0; padding-block-start: calc(${({theme:e})=>e.space} / 3); border-block-start: thin solid #e3e7ee; opacity: 1; }
            .pd-holds .pd-section.pa-appendix .pd-heading { font-size: calc(0.9286 * ${({theme:e})=>e.size}); }
            .pd-holds .pd-section.pa-appendix .pa-entry { font-size: calc(0.9286 * ${({theme:e})=>e.size}); font-weight: 400; }
        `}icons(){return f`
            .pd-word.pd-icon {
                display: inline-block;
                flex: none;
                width: calc(1.1429 * ${({theme:e})=>e.size});
                height: calc(1.1429 * ${({theme:e})=>e.size});
                color: var(--colour);
            }
            .pd-icon .pd-drawing, .pd-icon svg, .pd-svg svg { display: block; width: 100%; height: 100%; }
            .pd-icon svg, .pd-svg svg { fill: none; stroke: var(--colour); stroke-width: 1.25; stroke-linecap: round; stroke-linejoin: round; }
            .pd-icon .ground, .pd-svg .ground { fill: color-mix(in oklch, var(--colour) 24%, white); stroke: var(--colour); stroke-width: 1.5; }
            .pd-icon .dot, .pd-svg .dot { fill: var(--colour); stroke: none; }
            .pd-icon .over, .pd-svg .over { fill: color-mix(in oklch, var(--colour) 24%, white); }
            .pd-icon .solid, .pd-svg .solid { fill: var(--colour); }
            .pd-holds .pd-word.pd-icon { width: calc(1.1429 * ${({theme:e})=>e.size}); height: calc(1.1429 * ${({theme:e})=>e.size}); }
        `}small(){return f`
            @media (max-width: ${({theme:e})=>e.narrow}) {
                .pd-holds, .pd-library { border-inline-end: none; border-block-end: thin solid ${({theme:e})=>e.line}; }
                .pd-holds .pd-chapter { min-height: 0; }
            }
        `}};o(Ko,"$ManualTheme");let ms=Ko;const $p=t(ms);t(ht,be)($p);var mp=Object.defineProperty,kp=Object.getOwnPropertyDescriptor,xp=o((d,e,a,r)=>{for(var s=kp(e,a),i=d.length-1,p;i>=0;i--)(p=d[i])&&(s=p(e,a,s)||s);return s&&mp(e,a,s),s},"__decorateClass$8");const Jo=class Jo extends h{constructor(){super(...arguments),this.specification=new pa}defines(e){e.classes.add(this,"pa-first")}erase(e){e.classes.revert(this)}};o(Jo,"$First");let ks=Jo;const Qo=class Qo extends b{$saidOfAParagraph(e){c(e instanceof g,"first is said of a paragraph, and this is not one")}};o(Qo,"FirstSpecification");let pa=Qo;xp([l("first is said of a paragraph")],pa.prototype,"$saidOfAParagraph");const md=t(ks),Vo=class Vo extends Y{constructor(){super(...arguments),this.serif="'Source Serif 4', Georgia, serif",this.paper="#fdfcfa",this.ink="#343c4a",this.soft="#727d8c",this.faint="#9ea8b5",this.line="#e4e9f2",this.tint="#f0f4fc",this.barTint="#f8fafe",this.sky="#e3edfb",this.skyInk="#4a6ea0",this.accent="#4a6ea0",this.wash="linear-gradient(135deg, #f2f6fd 0%, #fdfcfa 48%, #fdf6f1 100%)",this.side="#f7f8fb",this.sideInk="#3a4452",this.sideDim="#7f8a9b",this.sideLine="#e3e7ee",this.barHeight="52px",this.holdsColumn="232px",this.space="24px",this.cover="132px",this.volume="184px",this.radius="6px",this.spine="inset 3px 0 0 rgba(0, 0, 0, 0.08), inset 4px 0 0 rgba(255, 255, 255, 0.35), 0 6px 12px -10px rgba(44, 52, 64, 0.3)",this.lift="inset 3px 0 0 rgba(0, 0, 0, 0.08), inset 4px 0 0 rgba(255, 255, 255, 0.35), 0 10px 16px -12px rgba(44, 52, 64, 0.35)",this.openSpine="inset 7px 0 0 rgba(0, 0, 0, 0.07), inset 9px 0 0 rgba(255, 255, 255, 0.45), 0 12px 22px -16px rgba(44, 52, 64, 0.35)"}parts(){return[...super.parts(),this.shelf(),this.jackets(),this.desk(),this.unfolded(),this.small()]}page(){return f`
            font-family: ${({theme:e})=>e.font};
            font-size: ${({theme:e})=>e.size};
            line-height: 1.55;
            color: ${({theme:e})=>e.ink};
            background: ${({theme:e})=>e.wash};
            min-height: 100vh;
        `}library(){return f`
            ${super.library()}
            .pd-names .pd-name { font-family: ${({theme:e})=>e.serif}; font-size: calc(1.286 * ${({theme:e})=>e.size}); font-weight: 700; letter-spacing: -0.015em; }
        `}head(){return f`
            .pd-head { padding: 0; }
            .pd-head .pa-illustration { display: none; }
        `}holds(){return f`
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
            .pd-holds .pd-tree-folder { margin-block-start: auto; }
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
                .pd-holds .pd-tree-folder { margin: 0; }
            }
        `}shelf(){return f`
            .pd-pages { padding: calc(${({theme:e})=>e.space} * 1.167) ${({theme:e})=>e.space} calc(${({theme:e})=>e.space} * 2); }
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
        `}jackets(){return f`
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
        `}desk(){return f`
            .pd-container.pd-catalogue-desk.pa-open {
                position: relative;
                display: grid;
                grid-template-columns: ${({theme:e})=>e.volume} minmax(0, 1fr);
                grid-template-rows: minmax(0, 1fr) auto auto;
                height: calc(${({theme:e})=>e.volume} * 1.5);
                column-gap: calc(${({theme:e})=>e.space} * 1.167);
                align-items: start;
                margin-block-end: calc(${({theme:e})=>e.space} * 1.167);
                padding: calc(${({theme:e})=>e.space} * 0.833) ${({theme:e})=>e.space};
                border: thin solid color-mix(in oklch, var(--band, ${({theme:e})=>e.sky}) 40%, white);
                border-radius: calc(${({theme:e})=>e.space} * 0.417);
                background: linear-gradient(135deg, color-mix(in oklch, var(--band, ${({theme:e})=>e.sky}) 45%, white), color-mix(in oklch, var(--ground, ${({theme:e})=>e.tint}) 60%, white) 55%, ${({theme:e})=>e.white});
                box-shadow: 0 calc(${({theme:e})=>e.space} / 3) calc(${({theme:e})=>e.space} * 0.833) calc(${({theme:e})=>e.space} * -0.75) color-mix(in oklch, var(--band-ink, ${({theme:e})=>e.skyInk}) 45%, transparent);
            }
            .pd-container.pd-catalogue-desk.pa-open .pd-paragraph.pd-jacket {
                grid-row: 1 / -1;
                width: ${({theme:e})=>e.volume};
                height: calc(${({theme:e})=>e.volume} * 1.5);
                font-size: calc(1.357 * ${({theme:e})=>e.size});
                box-shadow: ${({theme:e})=>e.openSpine};
                cursor: default;
            }
            .pd-container.pd-catalogue-desk.pa-open .pd-jacket .pd-word {
                padding: calc(${({theme:e})=>e.space} / 2) calc(${({theme:e})=>e.space} * 0.833) calc(${({theme:e})=>e.space} / 2) calc(${({theme:e})=>e.space} * 0.958);
                box-shadow: 0 calc(${({theme:e})=>e.space} / 8) 0 ${({theme:e})=>e.white};
            }
            .pd-container.pd-catalogue-desk.pa-open .pd-jacket .pd-word.pa-label {
                padding: 0 calc(${({theme:e})=>e.space} * 0.75) 0 calc(${({theme:e})=>e.space} * 0.875);
                font-size: calc(0.75 * ${({theme:e})=>e.size});
                letter-spacing: 0.18em;
                box-shadow: 0 calc(${({theme:e})=>e.space} / -8) 0 ${({theme:e})=>e.white};
            }
            .pd-container.pd-catalogue-desk.pa-open .pd-words {
                position: relative;
                align-self: stretch;
                min-height: 0;
                padding-block-start: calc(${({theme:e})=>e.space} / 4);
                overflow: clip;
                mask-image: linear-gradient(to bottom, black calc(100% - ${({theme:e})=>e.space} * 1.5), transparent 100%);
            }
            .pd-container.pd-catalogue-desk.pa-open .pd-words .pd-chapter { margin-block: 0; max-width: none; scroll-margin-block-start: calc(${({theme:e})=>e.space} * 3.5); }
            .pd-container.pd-catalogue-desk.pa-open .pd-words .pd-title {
                margin: 0 0 calc(${({theme:e})=>e.space} / 6);
                font-family: ${({theme:e})=>e.serif};
                font-size: calc(1.714 * ${({theme:e})=>e.size});
                font-weight: 700;
                line-height: 1.1;
                letter-spacing: -0.01em;
                color: var(--band-ink, ${({theme:e})=>e.ink});
            }
            .pd-container.pd-catalogue-desk.pa-open .pd-words .pd-paragraph {
                display: block;
                max-width: 72ch;
                margin: 0 0 calc(${({theme:e})=>e.space} * 0.417);
                font-family: ${({theme:e})=>e.serif};
                font-size: calc(1.07 * ${({theme:e})=>e.size});
                font-weight: 400;
                line-height: 1.55;
                color: ${({theme:e})=>e.ink};
            }
            .pd-container.pd-catalogue-desk.pa-open .pd-words .pd-paragraph.pd-turn { display: none; }
            .pd-container.pd-catalogue-desk.pa-open .pd-words .pd-paragraph.pa-caption {
                font-family: ${({theme:e})=>e.font};
                font-size: ${({theme:e})=>e.size};
                font-weight: 500;
                line-height: 1.5;
                color: var(--band-ink, ${({theme:e})=>e.ink});
            }
            .pd-container.pd-catalogue-desk.pa-open .pd-words .pd-paragraph .pa-reference { color: var(--band-ink, ${({theme:e})=>e.skyInk}); }
            .pd-container.pd-catalogue-desk.pa-open .pd-line { grid-column: 2; display: flex; flex-wrap: wrap; gap: 0 calc(${({theme:e})=>e.space} / 2); padding-block: calc(${({theme:e})=>e.space} / 4) calc(${({theme:e})=>e.space} / 2); }
            .pd-container.pd-catalogue-desk.pa-open .pd-paragraph.pd-byline, .pd-container.pd-catalogue-desk.pa-open .pd-paragraph.pd-subject-line {
                display: inline-flex;
                gap: calc(${({theme:e})=>e.space} / 6);
                max-width: none;
                margin: 0 calc(${({theme:e})=>e.space} / 3) calc(${({theme:e})=>e.space} * 0.667) 0;
                font-family: ${({theme:e})=>e.serif};
                font-size: calc(0.93 * ${({theme:e})=>e.size});
                line-height: 1.55;
                color: ${({theme:e})=>e.soft};
            }
            .pd-container.pd-catalogue-desk.pa-open .pd-line .pd-paragraph { margin-block-end: 0; }
            .pd-container.pd-catalogue-desk.pa-open .pd-byline .pa-reference, .pd-container.pd-catalogue-desk.pa-open .pd-subject-line .pa-reference { color: var(--band-ink, ${({theme:e})=>e.skyInk}); font-weight: 500; text-decoration: none; }
            .pd-container.pd-catalogue-desk.pa-open .pd-byline .pa-reference:hover, .pd-container.pd-catalogue-desk.pa-open .pd-subject-line .pa-reference:hover { text-decoration: underline; text-decoration-color: var(--band-ink, ${({theme:e})=>e.skyInk}); text-underline-offset: 3px; }
            .pd-container.pd-catalogue-desk.pa-open .pd-words .pa-reference:hover .pd-title, .pd-container.pd-catalogue-desk.pa-open .pd-words .pd-title.pa-reference:hover { text-decoration: underline; text-decoration-color: var(--band, ${({theme:e})=>e.sky}); text-underline-offset: 4px; }
            .pd-container.pd-catalogue-desk.pa-open .pd-paragraph.pd-read { grid-column: 2; grid-row: 3; align-self: end; margin: 0; padding-block-start: calc(${({theme:e})=>e.space} / 3); }
            .pd-container.pd-catalogue-desk.pa-open .pd-read .pd-word {
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
            .pd-container.pd-catalogue-desk.pa-open .pd-read .pd-word:hover { background: var(--foot, ${({theme:e})=>e.tint}); color: var(--foot-ink, ${({theme:e})=>e.ink}); }
            .pd-container.pd-catalogue-desk.pa-open .pd-read .pd-word::after { content: '▷'; font-size: calc(0.786 * ${({theme:e})=>e.size}); line-height: 1; }
            .pd-container.pd-catalogue-desk.pa-open .pd-word.pd-switch {
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
            .pd-container.pd-catalogue-desk.pa-open .pd-word.pd-switch::after {
                content: '';
                width: calc(${({theme:e})=>e.space} * 0.375);
                height: calc(${({theme:e})=>e.space} * 0.375);
                border-inline-end: calc(${({theme:e})=>e.space} / 16) solid currentColor;
                border-block-start: calc(${({theme:e})=>e.space} / 16) solid currentColor;
                transform: translateY(calc(${({theme:e})=>e.space} / 24));
            }
            .pd-container.pd-catalogue-desk.pa-open .pd-word.pd-switch:hover { background: var(--band, ${({theme:e})=>e.sky}); }
        `}unfolded(){return f`
            .pa-unfolded-desk .pd-shelf { display: none; }
            .pa-unfolded-desk .pd-container.pd-catalogue-desk.pa-open { height: auto; margin-block-end: 0; }
            .pa-unfolded-desk .pd-container.pd-catalogue-desk.pa-open .pd-paragraph.pd-jacket { position: sticky; top: calc(${({theme:e})=>e.space} * 0.833); }
            .pa-unfolded-desk .pd-container.pd-catalogue-desk.pa-open .pd-words { max-height: none; max-width: 72ch; overflow: visible; mask-image: none; }
            .pa-unfolded-desk .pd-container.pd-catalogue-desk.pa-open .pd-words .pd-paragraph { font-size: calc(1.143 * ${({theme:e})=>e.size}); line-height: 1.6; }
            .pa-unfolded-desk .pd-container.pd-catalogue-desk.pa-open .pd-word.pd-switch { top: calc(${({theme:e})=>e.space} * 0.667); right: ${({theme:e})=>e.space}; bottom: auto; }
            .pa-unfolded-desk .pd-container.pd-catalogue-desk.pa-open .pd-word.pd-switch::after { transform: translateY(calc(${({theme:e})=>e.space} / 24)) rotate(180deg); }
        `}context(){return f`
            ${super.context()}
            .pd-book.pa-manual .pd-holds .pd-tree-folder { margin-block-start: 0; }
            .pd-book.pa-manual .pd-holds .pd-section.pa-appendix { margin-block-start: 0; padding-block-start: 0; border-block-start: 0; opacity: 1; }
            .pd-book.pa-manual .pd-holds .pd-section.pa-appendix .pd-heading { font-size: calc(0.75 * ${({theme:e})=>e.size}); }
            .pd-book.pa-manual .pd-holds .pd-section.pa-appendix .pa-entry { font-size: calc(0.964 * ${({theme:e})=>e.size}); font-weight: 500; }
            .pd-book.pa-manual .pd-holds .pd-section.pa-appendix .pa-entry::before { background: ${({theme:e})=>e.skyInk}; }
            .pd-book.pa-manual .pd-shelf { display: none; }
        `}small(){return f`
            @media (max-width: ${({theme:e})=>e.narrow}) {
                .pd-pages { padding: calc(${({theme:e})=>e.space} * 0.667); }
                .pd-logo { margin-inline-end: calc(${({theme:e})=>e.space} / 2); }
                .pd-me .pd-word.pd-mark { display: block; }
                .pd-container.pd-catalogue-desk.pa-open { height: auto; grid-template-columns: ${({theme:e})=>e.cover} minmax(0, 1fr); column-gap: calc(${({theme:e})=>e.space} * 0.667); row-gap: calc(${({theme:e})=>e.space} / 3); padding: calc(${({theme:e})=>e.space} * 0.667); }
                .pd-container.pd-catalogue-desk.pa-open .pd-paragraph.pd-jacket { width: ${({theme:e})=>e.cover}; height: calc(${({theme:e})=>e.cover} * 1.5); font-size: calc(0.964 * ${({theme:e})=>e.size}); }
                .pd-container.pd-catalogue-desk.pa-open .pd-words { max-height: none; mask-image: none; }
                .pd-container.pd-catalogue-desk.pa-open .pd-word.pd-switch { display: none; }
                .pd-shelf { grid-template-columns: repeat(3, minmax(0, 1fr)); gap: calc(${({theme:e})=>e.space} * 0.583) calc(${({theme:e})=>e.space} / 2); }
                .pd-volume .pd-paragraph.pd-jacket { width: auto; height: auto; aspect-ratio: 2 / 3; }
            }
        `}};o(Vo,"$Bookshelf");let xs=Vo;const vp=t(xs);var yp=Object.defineProperty,wp=Object.getOwnPropertyDescriptor,Ma=o((d,e,a,r)=>{for(var s=r>1?void 0:r?wp(e,a):e,i=d.length-1,p;i>=0;i--)(p=d[i])&&(s=(r?p(e,a,s):p(s))||s);return r&&s&&yp(e,a,s),s},"__decorateClass$7");const So=class So extends N{get books(){return this.text.find(m).filter(e=>e.is(_)&&e!==this.synopsis)}get laidOutChapters(){return[...super.laidOutChapters,...this.books]}get pages(){return[this.synopsis,...this.books,...this.chapters]}head(){return n.jsx("div",{className:"pd-switches",children:this.switches()})}belowThePages(){return n.jsx("div",{className:"pd-shelf",children:this.volumes()})}volumes(){const e=t(y),a=t(v);return(this.table?.annotations.expressed(te)?.entries??[]).map((s,i)=>{const p=M(s).identifier,u=this.chapterAt(p),k=u===void 0?this.coverOf(p):this.jacketOf(u);if(k!==void 0)return n.jsxs("div",{className:"pd-volume",children:[this.jacket(k,p),n.jsx("div",{className:"pd-paragraph pd-name",children:n.jsxs(e,{children:[n.jsx(a,{children:p}),k.title.name]})})]},i)})}jacket(e,a){if(e===void 0)return;const r=t(Ji),s=t(v);return a===void 0?n.jsx(r,{cover:e}):n.jsx(r,{cover:e,children:n.jsx(s,{children:a})})}line(e){if(e===void 0)return;const a=t(kn),r=t(ri);return n.jsxs(n.Fragment,{children:[n.jsx(a,{cover:e}),n.jsx(r,{cover:e})]})}wayIntoTheBook(e){if(e===void 0)return;const a=t(y),r=t(v),s=e.mention.identifier;return n.jsx("div",{className:"pd-paragraph pd-read",children:n.jsxs(a,{children:[n.jsx(r,{children:s}),`Read ${e.title.name}`]})})}jacketOf(e){return e===this.synopsis?this.cover:e.annotations.expressed(I)?.cover??(this.appendix.includes(e)?void 0:this.cover)}coverOf(e){return super.coverOf(e)??this.books.map(a=>a.annotations.expressed(I)?.cover).find(a=>a!==void 0&&a.mention?.identifier===e)}chapterAt(e){return super.chapterAt(e)??this.books.find(a=>this.placeOf(a)===e)}placeOf(e){const a=e.title?.annotations.expressed(Jn)?.identifier,r=this.means?.identifier;if(!(a===void 0||r===void 0))return`${r.replace(/\/+$/u,"")}/#${a}`}$Bound(){const e=t(Pp);for(const a of[this.synopsis,...this.books])a?.annotations.add(this,n.jsx(e,{}));super.$Bound()}};o(So,"$Catalogue");let vs=So;const er=class er extends T{constructor(){super(...arguments),this.specification=new da,this.card=$.div`
        &:not(.pa-open) { display: none; }
    `}get chapter(){return this.parent}get catalogue(){return this.book}get isTheFront(){return this.chapter===this.catalogue.synopsis}get cover(){return this.catalogue.jacketOf(this.chapter)}$CatalogueDesk(...e){this.$Format(...e);const a=t(nt),r=this.card;this.style=({className:s,children:i})=>{const p=this.catalogue,u=this.cover,k=[...this.chapter.classes].includes("pa-open"),W=this.isTheFront?t(p.title):void 0;return p.painted(u,n.jsxs(r,{className:`${s??""} pd-catalogue-desk${k?" pa-open":""}`.trim(),children:[p.jacket(u),n.jsxs("div",{className:"pd-words",children:[W===void 0?void 0:n.jsx(W,{}),i]}),u===void 0||this.isTheFront?void 0:n.jsx("div",{className:"pd-line",children:p.line(u)}),p.wayIntoTheBook(u),u===void 0?void 0:n.jsx(a,{chapter:this.chapter,annotation:Op,children:"read on"})]}))}}defines(e){super.defines(e),e.classes.add(this,"pa-catalogue-desk")}erase(e){super.erase(e),e.classes.revert(this)}};o(er,"$CatalogueDesk");let ys=er;const ar=class ar extends b{$holdsASynopsis(e){c(e instanceof m&&e.is(_),"a catalogue desk holds a synopsis, and this is not one")}};o(ar,"CatalogueDeskSpecification");let da=ar;Ma([l("a catalogue desk holds a synopsis")],da.prototype,"$holdsASynopsis",1);const sr=class sr extends Qn{get identifier(){return this._book??super.identifier}$Bound(){super.$Bound(),this._book=this.chapter?.annotations.expressed(_)?.means?.identifier}};o(sr,"$BookLink");let ca=sr;Ma([mn()],ca.prototype,"_book",2);const tr=class tr extends h{constructor(){super(...arguments),this.specification=new la}defines(e){e.classes.add(this,"pa-caption")}erase(e){e.classes.revert(this)}};o(tr,"$Caption");let ws=tr;const or=class or extends h{constructor(){super(...arguments),this.specification=new ha}defines(e){e.classes.add(this,"pa-arrow")}erase(e){e.classes.revert(this)}};o(or,"$Arrow");let js=or;const rr=class rr extends h{constructor(){super(...arguments),this.specification=new O}defines(e){e.classes.add(this,"pa-unfolded-desk")}erase(e){e.classes.revert(this)}};o(rr,"$UnfoldedDesk");let zs=rr;const nr=class nr extends b{$isAParagraph(e){c(e instanceof g,"a caption is a paragraph, and this is not one")}};o(nr,"CaptionSpecification");let la=nr;Ma([l("a caption is a paragraph")],la.prototype,"$isAParagraph",1);const ir=class ir extends b{$isAWordOfTheTable(e){c(e instanceof x&&e.chapter?.is(q)===!0,"an arrow is a word of the table of contents, and this is not one")}};o(ir,"ArrowSpecification");let ha=ir;Ma([l("an arrow is a word of the table of contents")],ha.prototype,"$isAWordOfTheTable",1);const gt=t(vs),jp=t(ys),zp=t(ca),kd=t(ws),xd=t(js),Op=t(zs),Pp=jp;t(gt,Ba)(zp);t(gt,be)(vp);t(gt,V)($e);var Dp=Object.defineProperty,Ap=Object.getOwnPropertyDescriptor,Le=o((d,e,a,r)=>{for(var s=Ap(e,a),i=d.length-1,p;i>=0;i--)(p=d[i])&&(s=p(e,a,s)||s);return s&&Dp(e,a,s),s},"__decorateClass$6");const pr=class pr extends h{constructor(){super(...arguments),this.specification=new ga}defines(e){e.classes.add(this,"pa-question")}erase(e){e.classes.revert(this)}};o(pr,"$Question");let Os=pr;const dr=class dr extends h{constructor(){super(...arguments),this.specification=new ba}defines(e){e.classes.add(this,"pa-answer")}erase(e){e.classes.revert(this)}};o(dr,"$Answer");let Ps=dr;const cr=class cr extends h{constructor(){super(...arguments),this.specification=new ua}defines(e){e.classes.add(this,"pa-decision")}erase(e){e.classes.revert(this)}};o(cr,"$Decision");let fa=cr;const lr=class lr extends h{constructor(){super(...arguments),this.specification=new $a}defines(e){e.classes.add(this,"pa-pain")}erase(e){e.classes.revert(this)}};o(lr,"$Pain");let Ds=lr;const hr=class hr extends h{constructor(){super(...arguments),this.specification=new ma}defines(e){e.classes.add(this,"pa-solution")}erase(e){e.classes.revert(this)}};o(hr,"$Solution");let As=hr;const fr=class fr extends b{$isAParagraph(e){c(e instanceof g,"a question is a paragraph, and this is not one")}};o(fr,"QuestionSpecification");let ga=fr;Le([l("a question is a paragraph")],ga.prototype,"$isAParagraph");const gr=class gr extends b{$isAParagraph(e){c(e instanceof g,"an answer is a paragraph, and this is not one")}};o(gr,"AnswerSpecification");let ba=gr;Le([l("an answer is a paragraph")],ba.prototype,"$isAParagraph");const br=class br extends b{$isAParagraph(e){c(e instanceof g,"a decision is a paragraph, and this is not one")}};o(br,"DecisionSpecification");let ua=br;Le([l("a decision is a paragraph")],ua.prototype,"$isAParagraph");const ur=class ur extends b{$isAParagraph(e){c(e instanceof g,"a pain is a paragraph, and this is not one")}};o(ur,"PainSpecification");let $a=ur;Le([l("a pain is a paragraph")],$a.prototype,"$isAParagraph");const $r=class $r extends b{$isAParagraph(e){c(e instanceof g,"a solution is a paragraph, and this is not one")}};o($r,"SolutionSpecification");let ma=$r;Le([l("a solution is a paragraph")],ma.prototype,"$isAParagraph");const vd=t(Os),yd=t(Ps),wd=t(fa),jd=t(Ds),zd=t(As);var Cp=Object.defineProperty,Ip=Object.getOwnPropertyDescriptor,S=o((d,e,a,r)=>{for(var s=Ip(e,a),i=d.length-1,p;i>=0;i--)(p=d[i])&&(s=p(e,a,s)||s);return s&&Cp(e,a,s),s},"__decorateClass$5");const mr=class mr extends h{constructor(){super(...arguments),this.specification=new de,this.span=$.span.attrs({className:"pd-number"})``,this.close=$.span.attrs({className:"pd-close"})``}get number(){const e=j.copy(this.text).trim();return e===""?NaN:Number(e)}note(){const e=this.span,a=this.close,r=t(y),s=t(v),i=this.chapter?.mention?.identifier;return n.jsxs(n.Fragment,{children:[n.jsx(e,{children:this.number}),i===void 0?void 0:n.jsx(a,{children:n.jsxs(r,{children:[n.jsx(s,{children:i}),"×"]})})]})}defines(e){e.classes.add(this,"pa-concept")}erase(e){e.classes.revert(this)}};o(mr,"$Concept");let H=mr;const kr=class kr extends h{constructor(){super(...arguments),this.specification=new Te}defines(e){e.classes.add(this,"pa-designed")}erase(e){e.classes.revert(this)}};o(kr,"$Designed");let Cs=kr;const xr=class xr extends h{constructor(){super(...arguments),this.specification=new Te}defines(e){e.classes.add(this,"pa-decided")}erase(e){e.classes.revert(this)}};o(xr,"$Decided");let Is=xr;const vr=class vr extends h{constructor(){super(...arguments),this.specification=new ce}defines(e){e.classes.add(this,"pa-desk")}erase(e){e.classes.revert(this)}};o(vr,"$Desk");let ka=vr;const yr=class yr extends h{constructor(){super(...arguments),this.specification=new ce}defines(e){e.classes.add(this,"pa-phone")}erase(e){e.classes.revert(this)}};o(yr,"$Phone");let xa=yr;const wr=class wr extends h{constructor(){super(...arguments),this.specification=new ce}defines(e){e.classes.add(this,"pa-thumbnail")}erase(e){e.classes.revert(this)}};o(wr,"$Thumbnail");let Ne=wr;const jr=class jr extends h{constructor(){super(...arguments),this.specification=new le}defines(e){e.classes.add(this,"pa-precedent")}erase(e){e.classes.revert(this)}};o(jr,"$Precedent");let Ns=jr;const zr=class zr extends h{constructor(){super(...arguments),this.specification=new le}defines(e){e.classes.add(this,"pa-source")}erase(e){e.classes.revert(this)}};o(zr,"$Source");let Ts=zr;const Or=class Or extends h{constructor(){super(...arguments),this.specification=new va}defines(e){e.classes.add(this,"pa-where")}erase(e){e.classes.revert(this)}};o(Or,"$Where");let Fs=Or;const Pr=class Pr extends b{$isASection(e){c(e instanceof z,"a concept is a section, and this is not one")}$givenItsNumber(e){c(Number.isInteger(e.annotations.expressed(H)?.number),"a concept is given its number, and this one was given something else")}$photographedThreeWays(e){const a=e.text.find(g);c([ka,xa,Ne].every(r=>a.some(s=>s.is(r))),"a concept is photographed at a desk, at a phone, and small, and this one is missing a photograph")}};o(Pr,"ConceptSpecification");let de=Pr;S([l("a concept is a section")],de.prototype,"$isASection");S([l("a concept is given its number")],de.prototype,"$givenItsNumber");S([l("a concept is photographed at a desk, at a phone, and small")],de.prototype,"$photographedThreeWays");const Dr=class Dr extends b{$isAParagraphHoldingOneImage(e){c(e instanceof g&&e.text.find(tt).length===1,"a photograph is a paragraph that holds one image, and this is not one")}};o(Dr,"PhotographSpecification");let ce=Dr;S([l("a photograph is a paragraph that holds one image")],ce.prototype,"$isAParagraphHoldingOneImage");const Ar=class Ar extends b{$saidOfAParagraphOfAConcept(e){c(e instanceof g&&e.parent instanceof Vn&&e.parent.is(H),"this is said of a paragraph of a concept, and here it is said of something else")}};o(Ar,"OfAConceptSpecification");let le=Ar;S([l("this is said of a paragraph of a concept")],le.prototype,"$saidOfAParagraphOfAConcept");const Cr=class Cr extends le{$refersToWhereItIsBuilt(e){c(e.text.find(x).some(a=>a.is(xe)),"a where refers to where the concept is built, and this one refers nowhere")}};o(Cr,"WhereSpecification");let va=Cr;S([l("a where refers to where the concept is built")],va.prototype,"$refersToWhereItIsBuilt");const Ir=class Ir extends b{$saidOfAConcept(e){c(e.is(H),"this is said of a concept, and here it is said of something else")}};o(Ir,"OfAConceptSectionSpecification");let Te=Ir;S([l("this is said of a concept")],Te.prototype,"$saidOfAConcept");const Od=t(H),Pd=t(Cs),Dd=t(Is),Ad=t(ka),Cd=t(xa),Id=t(Ne),Nd=t(Ns),Td=t(Ts),Fd=t(Fs);var Np=Object.defineProperty,Tp=Object.getOwnPropertyDescriptor,Tn=o((d,e,a,r)=>{for(var s=Tp(e,a),i=d.length-1,p;i>=0;i--)(p=d[i])&&(s=p(e,a,s)||s);return s&&Np(e,a,s),s},"__decorateClass$4");const Fp=o((d,e)=>d.chapters.flatMap(a=>d.sections(a)).find(a=>a.is(H)&&a.mention?.identifier===e),"conceptAt"),Wp=o(d=>{const e=d.text.find(g).find(a=>a.is(Ne))?.text.find(tt)[0];return e===void 0?"":e.contents||j.copy(e.text)},"thumbnailOf"),Nr=class Nr extends T{constructor(){super(...arguments),this.specification=new wa,this.themeProvider=!0,this.style=$.div`
        .pd-book & .pd-chapter.pa-gallery .pd-section {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(${({theme:e})=>e.card}, 1fr));
            gap: calc(${({theme:e})=>e.space} * 0.75) calc(${({theme:e})=>e.space} * 0.5833);
            align-items: start;
            margin-block-start: calc(${({theme:e})=>e.space} * 1.4167);
        }
        .pd-book & .pa-gallery .pd-section .pa-self-reference.pd-container, .pd-book & .pa-gallery .pd-section .pd-paragraph { grid-column: 1 / -1; }
        .pd-book & .pa-gallery .pd-section .pd-sentence.pd-heading { padding-block-end: calc(${({theme:e})=>e.space} / 3); border-block-end: thin solid ${({theme:e})=>e.line}; }
        .pd-book & .pa-gallery .pd-section .pd-paragraph { color: ${({theme:e})=>e.soft}; }
        .pd-book & .pd-chapter.pa-gallery .pd-paragraph.pa-brief { max-width: 64ch; margin-block-start: calc(${({theme:e})=>e.space} * 0.4167); font-family: ${({theme:e})=>e.serif}; font-size: calc(1.2143 * ${({theme:e})=>e.size}); line-height: 1.6; color: ${({theme:e})=>e.ink}; }
        .pd-book & .pa-gallery .pd-section.pa-concept {
            display: grid;
            grid-template-columns: auto minmax(0, 1fr);
            grid-template-areas: 'pictures pictures' 'number name' 'caption caption' 'precedent precedent';
            column-gap: calc(${({theme:e})=>e.space} / 3);
            align-items: baseline;
            margin: 0;
            cursor: pointer;
        }
        .pd-book & .pa-gallery .pd-section.pa-concept .pd-paragraph.pa-thumbnail { grid-area: pictures; grid-column: pictures; margin: 0 0 calc(${({theme:e})=>e.space} / 4); max-width: none; }
        .pd-book & .pa-gallery .pd-section.pa-concept .pa-thumbnail img {
            width: 100%;
            aspect-ratio: 16 / 10;
            object-fit: cover;
            object-position: top;
            border: thin solid ${({theme:e})=>e.line};
            border-radius: ${({theme:e})=>e.radius};
            background: ${({theme:e})=>e.paper};
            box-shadow: ${({theme:e})=>e.shadow};
            transition: border-color ${({theme:e})=>e.beat} ease, box-shadow ${({theme:e})=>e.beat} ease, transform ${({theme:e})=>e.beat} ease;
        }
        .pd-book & .pa-gallery .pd-section.pa-concept:hover .pa-thumbnail img { border-color: var(--band); box-shadow: ${({theme:e})=>e.lift}; transform: translateY(${({theme:e})=>e.rise}); }
        .pd-book & .pa-gallery .pd-section.pa-concept .pd-number { grid-area: number; font-size: calc(0.7857 * ${({theme:e})=>e.size}); font-weight: 600; color: var(--foot-ink); font-variant-numeric: tabular-nums; }
        .pd-book & .pa-gallery .pd-section.pa-concept.pa-designed .pd-number::before, .pd-book & .pa-gallery .pd-section.pa-concept.pa-decided .pd-number::before {
            margin-inline-end: calc(${({theme:e})=>e.space} / 4);
            font-size: calc(0.6786 * ${({theme:e})=>e.size});
            font-weight: 500;
            letter-spacing: 0.06em;
            text-transform: uppercase;
        }
        .pd-book & .pa-gallery .pd-section.pa-concept.pa-designed .pd-number::before { content: 'designed'; color: var(--band-ink); }
        .pd-book & .pa-gallery .pd-section.pa-concept.pa-decided .pd-number::before { content: 'decided'; color: var(--foot-ink); }
        .pd-book & .pa-gallery .pd-section.pa-concept .pa-self-reference.pd-container { grid-area: name; grid-column: name; }
        .pd-book & .pa-gallery .pd-section.pa-concept .pd-sentence.pd-heading { margin: 0; padding: 0; border: 0; font-family: ${({theme:e})=>e.serif}; font-size: calc(0.9643 * ${({theme:e})=>e.size}); font-weight: 600; color: ${({theme:e})=>e.heading}; }
        .pd-book & .pa-gallery .pd-section.pa-concept .pd-paragraph.pa-caption { grid-area: caption; margin: calc(${({theme:e})=>e.space} / 8) 0 0; font-size: calc(0.8571 * ${({theme:e})=>e.size}); line-height: 1.5; color: ${({theme:e})=>e.soft}; }
        .pd-book & .pa-gallery .pd-section.pa-concept .pd-paragraph.pa-precedent { grid-area: precedent; margin: calc(${({theme:e})=>e.space} / 8) 0 0; font-size: calc(0.8214 * ${({theme:e})=>e.size}); color: ${({theme:e})=>e.faint}; }
        .pd-book & .pa-gallery .pd-section.pa-concept .pd-paragraph.pa-desk, .pd-book & .pa-gallery .pd-section.pa-concept .pd-paragraph.pa-phone, .pd-book & .pa-gallery .pd-section.pa-concept .pd-paragraph.pa-source, .pd-book & .pa-gallery .pd-section.pa-concept .pd-close, .pd-book & .pa-gallery .pd-section.pa-concept .pd-paragraph.pa-answer, .pd-book & .pa-gallery .pd-section.pa-concept .pd-paragraph.pa-where { display: none; }
        .pd-book & .pa-gallery .pd-section.pa-concept.pa-open {
            position: fixed;
            inset: ${({theme:e})=>e.barHeight} 0 0 ${({theme:e})=>e.holdsColumn};
            z-index: 1;
            display: grid;
            grid-template-columns: auto minmax(0, 1fr) calc(${({theme:e})=>e.space} * 9.1667);
            grid-template-areas: 'number name name' 'precedent precedent precedent' 'caption caption caption' 'desk desk phone' 'answer answer answer' 'where where where' 'source source source';
            grid-auto-rows: max-content;
            align-content: start;
            align-items: start;
            column-gap: calc(${({theme:e})=>e.space} * 0.6667);
            overflow-y: auto;
            padding: calc(${({theme:e})=>e.space} * 1.1667) calc(${({theme:e})=>e.space} * 2) calc(${({theme:e})=>e.space} * 3);
            background: ${({theme:e})=>e.paper};
            cursor: default;
        }
        .pd-book & .pa-gallery .pd-section.pa-concept.pa-open .pd-paragraph, .pd-book & .pa-gallery .pd-section.pa-concept.pa-open .pa-self-reference.pd-container { max-width: calc(${({theme:e})=>e.space} * 46.67); }
        .pd-book & .pa-gallery .pd-section.pa-concept.pa-open .pd-number { display: inline-block; margin-inline-end: calc(${({theme:e})=>e.space} * 0.4167); font-size: calc(0.9286 * ${({theme:e})=>e.size}); }
        .pd-book & .pa-gallery .pd-section.pa-concept.pa-open .pa-self-reference.pd-container { display: inline; }
        .pd-book & .pa-gallery .pd-section.pa-concept.pa-open .pd-sentence.pd-heading { display: inline; font-size: calc(2 * ${({theme:e})=>e.size}); letter-spacing: -0.02em; }
        .pd-book & .pa-gallery .pd-section.pa-concept.pa-open .pd-close { display: block; position: absolute; top: calc(${({theme:e})=>e.space} * 0.9167); right: calc(${({theme:e})=>e.space} * 1.5); margin: 0; font-size: calc(1.857 * ${({theme:e})=>e.size}); line-height: 1; }
        .pd-book & .pa-gallery .pd-section.pa-concept.pa-open .pd-close .pa-reference { color: ${({theme:e})=>e.faint}; text-decoration: none; }
        .pd-book & .pa-gallery .pd-section.pa-concept.pa-open .pd-close .pa-reference:hover { color: ${({theme:e})=>e.ink}; }
        .pd-book & .pa-gallery .pd-section.pa-concept.pa-open .pd-paragraph.pa-thumbnail { display: none; }
        .pd-book & .pa-gallery .pd-section.pa-concept.pa-open .pd-paragraph.pa-precedent { font-size: calc(0.9286 * ${({theme:e})=>e.size}); color: ${({theme:e})=>e.soft}; }
        .pd-book & .pa-gallery .pd-section.pa-concept.pa-open .pd-paragraph.pa-caption { margin: calc(${({theme:e})=>e.space} * 0.4167) 0 calc(${({theme:e})=>e.space} * 0.8333); font-family: ${({theme:e})=>e.serif}; font-size: calc(1.2143 * ${({theme:e})=>e.size}); line-height: 1.55; color: ${({theme:e})=>e.ink}; max-width: 64ch; }
        .pd-book & .pa-gallery .pd-section.pa-concept.pa-open .pd-paragraph.pa-desk, .pd-book & .pa-gallery .pd-section.pa-concept.pa-open .pd-paragraph.pa-phone, .pd-book & .pa-gallery .pd-section.pa-concept.pa-open .pd-paragraph.pa-answer, .pd-book & .pa-gallery .pd-section.pa-concept.pa-open .pd-paragraph.pa-source { display: block; max-width: none; }
        .pd-book & .pa-gallery .pd-section.pa-concept.pa-open .pd-paragraph.pa-desk img, .pd-book & .pa-gallery .pd-section.pa-concept.pa-open .pd-paragraph.pa-phone img { border: thin solid ${({theme:e})=>e.line}; border-radius: ${({theme:e})=>e.radius}; box-shadow: ${({theme:e})=>e.shadow}; }
        .pd-book & .pa-gallery .pd-section.pa-concept.pa-open .pd-paragraph.pa-answer { max-width: 68ch; }
        .pd-book & .pa-gallery .pd-section.pa-concept.pa-open .pd-paragraph.pa-where { display: block; margin-block-start: calc(${({theme:e})=>e.space} / 2); font-size: calc(0.9643 * ${({theme:e})=>e.size}); color: ${({theme:e})=>e.soft}; }
        .pd-book & .pa-gallery .pd-section.pa-concept.pa-open .pd-number { grid-area: number; align-self: baseline; }
        .pd-book & .pa-gallery .pd-section.pa-concept.pa-open .pa-self-reference.pd-container { grid-area: name; grid-column: name; align-self: baseline; }
        .pd-book & .pa-gallery .pd-section.pa-concept.pa-open .pd-paragraph.pa-precedent { grid-area: precedent; }
        .pd-book & .pa-gallery .pd-section.pa-concept.pa-open .pd-paragraph.pa-caption { grid-area: caption; }
        .pd-book & .pa-gallery .pd-section.pa-concept.pa-open .pd-paragraph.pa-desk { grid-area: desk; margin: 0; }
        .pd-book & .pa-gallery .pd-section.pa-concept.pa-open .pd-paragraph.pa-phone { grid-area: phone; margin: 0; }
        .pd-book & .pa-gallery .pd-section.pa-concept.pa-open .pd-paragraph.pa-phone img { max-width: 100%; }
        .pd-book & .pa-gallery .pd-section.pa-concept.pa-open .pd-paragraph.pa-answer { grid-area: answer; }
        .pd-book & .pa-gallery .pd-section.pa-concept.pa-open .pd-paragraph.pa-where { grid-area: where; }
        .pd-book & .pa-gallery .pd-section.pa-concept.pa-open .pd-paragraph.pa-source { grid-area: source; }
        .pd-book & .pa-gallery .pd-section.pa-concept.pa-open .pd-paragraph.pa-thumbnail { grid-area: source; }
        @media (max-width: ${({theme:e})=>e.narrow}) {
            .pd-book & .pd-chapter.pa-gallery .pd-section { grid-template-columns: 1fr; }
            .pd-book & .pd-chapter.pa-gallery .pd-section.pa-concept { grid-template-columns: auto minmax(0, 1fr); }
            .pd-book & .pa-gallery .pd-section.pa-concept.pa-open { inset: ${({theme:e})=>e.barHeight} 0 0 0; grid-template-columns: auto minmax(0, 1fr); grid-template-areas: 'number name' 'precedent precedent' 'caption caption' 'desk desk' 'phone phone' 'answer answer' 'where where' 'source source'; padding: calc(${({theme:e})=>e.space} * 0.8333) calc(${({theme:e})=>e.space} * 0.6667) calc(${({theme:e})=>e.space} * 2); }
            .pd-book & .pa-gallery .pd-section.pa-concept.pa-open .pd-paragraph.pa-phone { margin-block-start: calc(${({theme:e})=>e.space} * 0.6667); }
        }
    `}get chapter(){return this.parent}get concepts(){return this.book.sections(this.chapter).filter(e=>e.is(H))}get open(){return this.concepts.find(e=>e.mention?.identifier===this.book?.$bookmark)}defines(e){super.defines(e),e.classes.add(this,"pa-gallery");const a=this.open,r=this.concepts.find(s=>[...s.classes].includes("pa-open"));r!==a&&(r?.classes.revert(this),a?.classes.add(this,"pa-open"))}erase(e){super.erase(e),e.classes.revert(this)}};o(Nr,"$Gallery");let ya=Nr;const Tr=class Tr extends T{constructor(){super(...arguments),this.specification=new ja,this.strip=$.div`
        .pd-book & { display: flex; flex-wrap: wrap; gap: calc(${({theme:e})=>e.space} * 0.5833); margin: calc(${({theme:e})=>e.space} / 2) 0 calc(${({theme:e})=>e.space} / 4); max-width: none; }
        .pd-book & .pd-said { display: none; }
        .pd-book & .pd-word { display: block; width: calc(${({theme:e})=>e.space} * 6.8333); }
        .pd-book & .pd-word .pa-reference { color: inherit; text-decoration: none; }
        .pd-book & .pd-thumb { display: block; }
        .pd-book & .pd-thumb img {
            display: block;
            width: 100%;
            aspect-ratio: 16 / 10;
            object-fit: cover;
            object-position: top;
            border: thin solid ${({theme:e})=>e.line};
            border-radius: calc(${({theme:e})=>e.radius} * 0.6667);
            background: ${({theme:e})=>e.paper};
            box-shadow: ${({theme:e})=>e.shadow};
            transition: border-color ${({theme:e})=>e.beat} ease, box-shadow ${({theme:e})=>e.beat} ease;
        }
        .pd-book & .pd-thumb:hover img { border-color: var(--band); box-shadow: ${({theme:e})=>e.lift}; }
        .pd-book & .pd-thumb.pd-chosen img { border-color: var(--band-ink); box-shadow: ${({theme:e})=>e.ring}; }
        .pd-book & .pd-thumb .pd-name { display: block; margin-block-start: calc(${({theme:e})=>e.space} / 5); font-size: calc(0.8571 * ${({theme:e})=>e.size}); color: ${({theme:e})=>e.soft}; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        .pd-book & .pd-thumb.pd-chosen .pd-name { color: var(--band-ink); }
        .pd-book & .pd-thumb .pd-name .pd-number { margin-inline-end: calc(${({theme:e})=>e.space} / 5); font-weight: 600; color: var(--foot-ink); font-variant-numeric: tabular-nums; }
    `}get paragraph(){return this.parent}get places(){return this.paragraph.text.find(x).map(e=>e.annotations.expressed(xe)?.identifier).filter(e=>e!==void 0)}get concepts(){const e=this.book;return[...new Set(this.places.map(a=>Fp(e,a)).filter(a=>a!==void 0))]}get chosen(){const e=this.paragraph.parent?.text.find(g).filter(a=>a.is(fa))??[];return new Set(e.flatMap(a=>a.text.find(x).map(r=>r.annotations.expressed(xe)?.identifier)).filter(a=>a!==void 0))}$Strip(...e){this.$Format(...e);const a=this.strip,r=t(y),s=t(v);this.style=({className:i,children:p})=>{const u=this.chosen;return n.jsxs(a,{className:`${i??""} pd-strip`.trim(),children:[this.concepts.map((k,W)=>{const me=k.mention.identifier;return n.jsxs(r,{children:[n.jsx(s,{children:me}),n.jsxs("span",{className:`pd-thumb${u.has(me)?" pd-chosen":""}`,children:[n.jsx("img",{src:Wp(k),alt:""}),n.jsxs("span",{className:"pd-name",children:[n.jsx("span",{className:"pd-number",children:k.annotations.expressed(H)?.number}),k.canonical?.name]})]})]},W)}),n.jsx("span",{className:"pd-said",children:p})]})}}defines(e){super.defines(e),e.classes.add(this,"pa-strip")}erase(e){super.erase(e),e.classes.revert(this)}};o(Tr,"$Strip");let Ws=Tr;const Fr=class Fr extends b{$isAChapter(e){c(e instanceof m,"a gallery is a chapter, and this is not one")}};o(Fr,"GallerySpecification");let wa=Fr;Tn([l("a gallery is a chapter")],wa.prototype,"$isAChapter");const Wr=class Wr extends b{$isAParagraphReferringToConcepts(e){c(e instanceof g&&e.text.find(x).some(a=>a.annotations.expressed(xe)!==void 0),"a strip is a paragraph that refers to concepts, and this one refers to nothing")}};o(Wr,"StripSpecification");let ja=Wr;Tn([l("a strip is a paragraph that refers to concepts")],ja.prototype,"$isAParagraphReferringToConcepts");const Wd=t(ya),Md=t(Ws),Mr=class Mr extends Y{constructor(){super(...arguments),this.accent="#23407a",this.ink="#343c4a",this.heading="#1a1f36",this.soft="#727d8c",this.faint="#9ea8b5",this.line="#e4e9f2",this.paper="#fdfcfa",this.side="#f8f9fb",this.holdsColumn="256px",this.barHeight="52px",this.card="12.5rem",this.shadow="0 1px 2px rgba(43, 54, 60, 0.05), 0 6px 18px rgba(43, 54, 60, 0.05)",this.lift="0 2px 4px rgba(43, 54, 60, 0.06), 0 14px 32px rgba(43, 54, 60, 0.10)",this.barLight="#fcfcfd",this.barMid="#f8f9fc",this.barDeep="#f2f4f9",this.barShadow="0 1px 0 rgba(43, 54, 60, 0.05)",this.sideLight="#fafbfc",this.sideDeep="#f2f4f8",this.codeGround="#f6f7fa",this.hairline="1px",this.stroke="2px",this.rise="-1px",this.gloss="inset 0 1px 0 rgba(255, 255, 255, 0.7)",this.ring="0 0 0 2px color-mix(in oklab, var(--band) 80%, white)",this.decisionShadow="0 1px 2px rgba(43, 54, 60, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.6)"}parts(){return[...super.parts(),this.backdrop(),this.bands(),this.guide(),this.story(),this.said(),this.small()]}backdrop(){return f`
            .pd-book .pd-pages { background: linear-gradient(135deg, color-mix(in oklab, var(--band) 10%, white) 0%, ${({theme:e})=>e.paper} 48%, color-mix(in oklab, var(--foot) 8%, white) 100%); }
        `}bands(){return f`
            .pd-book .pd-library { position: relative; background: linear-gradient(180deg, ${({theme:e})=>e.barLight} 0%, ${({theme:e})=>e.barMid} 60%, ${({theme:e})=>e.barDeep} 100%); border-block-end: thin solid ${({theme:e})=>e.line}; box-shadow: ${({theme:e})=>e.barShadow}; }
            .pd-book .pd-library::after { content: ''; position: absolute; left: 0; right: 0; bottom: calc(-1 * ${({theme:e})=>e.hairline}); height: ${({theme:e})=>e.stroke}; background: linear-gradient(90deg, var(--band) 0 40%, var(--ground) 40% 70%, var(--foot) 70%); opacity: 0.75; }
        `}guide(){return f`
            .pd-book .pd-holds { padding: calc(${({theme:e})=>e.space} * 0.75) 0 calc(${({theme:e})=>e.space} * 0.8333); background: linear-gradient(90deg, ${({theme:e})=>e.sideLight} 0%, ${({theme:e})=>e.side} 86%, ${({theme:e})=>e.sideDeep} 100%); border-inline-end: thin solid ${({theme:e})=>e.line}; }
            .pd-book .pd-holds .pd-section { margin: 0 0 calc(${({theme:e})=>e.space} * 0.5833); }
            .pd-book .pd-holds .pd-sentence.pd-heading { margin: 0; padding: 0 calc(${({theme:e})=>e.space} * 0.75) calc(${({theme:e})=>e.space} / 4); border: 0; font-family: ${({theme:e})=>e.font}; font-size: calc(0.75 * ${({theme:e})=>e.size}); font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: ${({theme:e})=>e.faint}; }
            .pd-book .pd-holds .pd-paragraph.pa-entry { display: flex; align-items: center; justify-content: flex-start; gap: calc(${({theme:e})=>e.space} / 3); min-height: calc(2.0714 * ${({theme:e})=>e.size}); margin: 0; padding: 0 calc(${({theme:e})=>e.space} * 0.75); border-radius: 0; font-size: calc(0.9286 * ${({theme:e})=>e.size}); color: ${({theme:e})=>e.ink}; box-shadow: inset ${({theme:e})=>e.stroke} 0 0 transparent; transition: background ${({theme:e})=>e.beat} ease, color ${({theme:e})=>e.beat} ease, box-shadow ${({theme:e})=>e.beat} ease; }
            .pd-book .pd-holds .pd-paragraph.pa-entry::before { content: none; }
            .pd-book .pd-holds .pd-paragraph.pa-entry:hover { background: color-mix(in oklab, var(--ground) 70%, white); }
            .pd-book .pd-holds .pd-paragraph.pa-entry.pa-open { background: var(--ground); color: var(--band-ink); box-shadow: inset ${({theme:e})=>e.stroke} 0 0 var(--band-ink); font-weight: 500; }
            .pd-book .pd-holds .pd-paragraph.pa-entry.pa-plate { min-height: calc(2.5714 * ${({theme:e})=>e.size}); gap: calc(${({theme:e})=>e.space} * 0.4167); font-family: ${({theme:e})=>e.serif}; font-size: calc(0.9643 * ${({theme:e})=>e.size}); font-weight: 500; }
            .pd-book .pd-holds .pa-entry.pa-plate .pd-plate { order: -2; flex: none; width: calc(1.2857 * ${({theme:e})=>e.size}); font-family: ${({theme:e})=>e.font}; font-size: calc(0.75 * ${({theme:e})=>e.size}); font-weight: 500; letter-spacing: 0.04em; color: ${({theme:e})=>e.faint}; font-variant-numeric: tabular-nums; }
            .pd-book .pd-holds .pa-entry.pa-plate .pd-jacket-mini { order: -1; flex: none; width: calc(0.8571 * ${({theme:e})=>e.size}); height: calc(1.2143 * ${({theme:e})=>e.size}); border-radius: calc(${({theme:e})=>e.radius} / 4); background: linear-gradient(180deg, var(--band) 0 30%, var(--ground) 30% 80%, var(--foot) 80%); opacity: 0.9; }
            .pd-book .pd-holds .pa-entry.pa-plate.pa-open .pd-plate { color: var(--band-ink); }
            .pd-book .pd-holds .pa-parenthetical { display: none; }
        `}story(){return f`
            .pd-book .pd-pages .pd-chapter { max-width: none; margin: 0; padding: calc(${({theme:e})=>e.space} * 1.25) calc(${({theme:e})=>e.space} * 1.8333) calc(${({theme:e})=>e.space} * 3); }
            .pd-book .pd-pages .pd-sentence.pd-title { margin: 0 0 calc(${({theme:e})=>e.space} / 3); font-family: ${({theme:e})=>e.serif}; font-size: calc(2.1429 * ${({theme:e})=>e.size}); font-weight: 600; line-height: 1.15; letter-spacing: -0.02em; color: ${({theme:e})=>e.heading}; }
            .pd-book .pd-pages .pd-section { margin: calc(${({theme:e})=>e.space} * 1.25) 0 0; }
            .pd-book .pd-pages .pd-sentence.pd-heading { margin: 0 0 calc(${({theme:e})=>e.space} * 0.4167); font-family: ${({theme:e})=>e.serif}; font-size: calc(1.4286 * ${({theme:e})=>e.size}); font-weight: 600; line-height: 1.25; letter-spacing: -0.01em; color: ${({theme:e})=>e.heading}; }
            .pd-book .pd-pages .pd-paragraph { max-width: 72ch; margin: calc(${({theme:e})=>e.space} * 0.4167) 0; font-size: calc(1.0714 * ${({theme:e})=>e.size}); line-height: 1.65; }
            .pd-book .pd-pages .pd-paragraph .pa-reference { color: var(--band-ink); text-decoration: underline; text-decoration-color: color-mix(in oklch, var(--band-ink) 35%, white); text-underline-offset: ${({theme:e})=>e.stroke}; transition: text-decoration-color ${({theme:e})=>e.beat} ease; }
            .pd-book .pd-pages .pd-paragraph .pa-reference:hover { text-decoration-color: var(--band-ink); }
            .pd-book .pd-pages .pa-self-reference { color: inherit; text-decoration: none; }
            .pd-book .pd-pages .pd-chapter.pa-synopsis .pd-paragraph { max-width: 64ch; margin-block-start: calc(${({theme:e})=>e.space} * 1.6667); font-family: ${({theme:e})=>e.serif}; font-size: calc(1.357 * ${({theme:e})=>e.size}); line-height: 1.6; color: ${({theme:e})=>e.soft}; }
            .pd-book .pd-pages .pd-paragraph .pd-image { display: inline-block; vertical-align: top; max-width: 100%; margin: calc(${({theme:e})=>e.space} / 4) calc(${({theme:e})=>e.space} / 2) calc(${({theme:e})=>e.space} / 4) 0; }
            .pd-book .pd-pages .pd-image img { margin: 0; border: thin solid ${({theme:e})=>e.line}; border-radius: ${({theme:e})=>e.radius}; box-shadow: ${({theme:e})=>e.shadow}; }
            .pd-book .pd-pages .pd-paragraph.pa-desk, .pd-book .pd-pages .pd-paragraph.pa-phone, .pd-book .pd-pages .pd-paragraph.pa-thumbnail, .pd-book .pd-pages .pd-paragraph.pa-exhibit { max-width: none; }
            .pd-book .pd-pages .pd-paragraph.pd-turn { display: flex; justify-content: space-between; align-items: center; gap: calc(${({theme:e})=>e.space} * 0.6667); max-width: none; margin: calc(${({theme:e})=>e.space} * 2.6667) 0 0; padding-block-start: calc(${({theme:e})=>e.space} * 0.6667); border-block-start: thin solid ${({theme:e})=>e.line}; font-size: calc(0.9286 * ${({theme:e})=>e.size}); color: ${({theme:e})=>e.soft}; }
            .pd-book .pd-pages .pd-turn .pa-reference { color: var(--band-ink); text-decoration: none; }
            .pd-book .pd-pages .pd-turn .pd-count { color: ${({theme:e})=>e.faint}; font-variant-numeric: tabular-nums; }
            .pd-book .pd-pages pre.pd-code { max-width: none; max-height: 60vh; margin: calc(${({theme:e})=>e.space} / 2) 0; padding: calc(${({theme:e})=>e.space} * 0.5833) calc(${({theme:e})=>e.space} * 0.6667); overflow: auto; font-size: calc(0.8929 * ${({theme:e})=>e.size}); line-height: 1.5; background: ${({theme:e})=>e.codeGround}; border: thin solid ${({theme:e})=>e.line}; border-radius: ${({theme:e})=>e.radius}; }
        `}said(){return f`
            .pd-book .pd-pages .pd-paragraph.pa-question { color: ${({theme:e})=>e.soft}; }
            .pd-book .pd-pages .pd-paragraph.pa-question, .pd-book .pd-pages .pd-paragraph.pa-answer, .pd-book .pd-pages .pd-paragraph.pa-decision, .pd-book .pd-pages .pd-paragraph.pa-pain, .pd-book .pd-pages .pd-paragraph.pa-solution { position: relative; }
            .pd-book .pd-pages .pd-paragraph.pa-question::before, .pd-book .pd-pages .pd-paragraph.pa-answer::before, .pd-book .pd-pages .pd-paragraph.pa-decision::before, .pd-book .pd-pages .pd-paragraph.pa-pain::before, .pd-book .pd-pages .pd-paragraph.pa-solution::before { display: block; margin-block-end: calc(${({theme:e})=>e.space} / 12); font-family: ${({theme:e})=>e.font}; font-size: calc(0.75 * ${({theme:e})=>e.size}); font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: ${({theme:e})=>e.faint}; }
            .pd-book .pd-pages .pd-paragraph.pa-question::before { content: 'Asked'; color: var(--band-ink); }
            .pd-book .pd-pages .pd-paragraph.pa-answer::before { content: 'Answered'; color: var(--foot-ink); }
            .pd-book .pd-pages .pd-paragraph.pa-decision::before { content: 'Decided'; color: var(--band-ink); }
            .pd-book .pd-pages .pd-paragraph.pa-pain::before { content: 'The pain'; color: var(--foot-ink); }
            .pd-book .pd-pages .pd-paragraph.pa-solution::before { content: 'What solves it'; color: var(--band-ink); }
            .pd-book .pd-pages .pd-paragraph.pa-answer, .pd-book .pd-pages .pd-paragraph.pa-pain, .pd-book .pd-pages .pd-paragraph.pa-solution { padding-inline-start: calc(${({theme:e})=>e.space} * 0.75); border-inline-start: ${({theme:e})=>e.stroke} solid var(--foot); }
            .pd-book .pd-pages .pd-paragraph.pa-answer, .pd-book .pd-pages .pd-paragraph.pa-pain { font-family: ${({theme:e})=>e.serif}; font-size: calc(1.1786 * ${({theme:e})=>e.size}); line-height: 1.6; color: ${({theme:e})=>e.ink}; }
            .pd-book .pd-pages .pd-paragraph.pa-pain { font-style: italic; }
            .pd-book .pd-pages .pd-paragraph.pa-solution { border-inline-start-color: var(--band); }
            .pd-book .pd-pages .pd-paragraph.pa-decision { margin-block-start: calc(${({theme:e})=>e.space} * 0.6667); padding: calc(${({theme:e})=>e.space} / 2) calc(${({theme:e})=>e.space} * 0.6667) calc(${({theme:e})=>e.space} / 2) calc(${({theme:e})=>e.space} * 0.75); border-inline-start: ${({theme:e})=>e.stroke} solid var(--band); border-radius: ${({theme:e})=>e.radius}; background: linear-gradient(135deg, color-mix(in oklab, var(--ground) 62%, white), color-mix(in oklab, var(--ground) 40%, white)); box-shadow: ${({theme:e})=>e.decisionShadow}; }
        `}small(){return f`
            @media (max-width: ${({theme:e})=>e.narrow}) {
                .pd-book .pd-holds, .pd-book .pd-library { border-inline-end: none; }
                .pd-book .pd-holds .pd-paragraph.pa-entry.pa-plate { min-height: calc(2 * ${({theme:e})=>e.size}); gap: calc(${({theme:e})=>e.space} / 4); font-size: calc(0.9286 * ${({theme:e})=>e.size}); }
                .pd-book .pd-holds .pa-entry.pa-plate .pd-plate { display: none; }
                .pd-book .pd-pages .pd-chapter { padding: calc(${({theme:e})=>e.space} * 0.8333) calc(${({theme:e})=>e.space} * 0.6667) calc(${({theme:e})=>e.space} * 2); }
                .pd-book .pd-pages .pd-title { font-size: calc(2 * ${({theme:e})=>e.size}); }
            }
        `}};o(Mr,"$Exhibition");let Ms=Mr;const Mp=t(Ms);var Bp=Object.defineProperty,Hp=Object.getOwnPropertyDescriptor,bt=o((d,e,a,r)=>{for(var s=Hp(e,a),i=d.length-1,p;i>=0;i--)(p=d[i])&&(s=p(e,a,s)||s);return s&&Bp(e,a,s),s},"__decorateClass$3");const Br=class Br extends N{constructor(){super(...arguments),this.specification=new he}get designs(){return this.chapters.filter(e=>e.is(w))}get open(){return super.open??this.body[0]}head(){}switches(){}$Bound(){const e=t(Ui),a=t(Yi),r=t(Zi),s=this.designs;for(const i of s)i.annotations.add(this,n.jsx(e,{})),i.text.add(this,n.jsx(r,{}));for(const i of this.table?.annotations.expressed(te)?.entries??[]){const p=M(i)?.identifier,u=p===void 0?void 0:this.chapterAt(p);u===void 0||!s.includes(u)||i.annotations.add(this,n.jsx(a,{number:s.indexOf(u)+1}))}super.$Bound()}};o(Br,"$Portfolio");let Bs=Br;const Hr=class Hr extends D{$everyChapterInAPart(e){c(e.chapters.every(a=>a.part!==void 0),"every chapter of a portfolio is in a part, and one here is in none")}$showsEveryDesign(e){c(e.designs.every(a=>Wa(a,g).some(r=>r.is(Oe))),"a portfolio shows every design it holds as built, in a paragraph said to be the exhibit, and one here has none")}$keepsAGallery(e){c(e.chapters.some(a=>a.is(ya)),"a portfolio keeps its sketches in a gallery, and this one has none")}};o(Hr,"PortfolioSpecification");let he=Hr;bt([l("every chapter of a portfolio is in a part")],he.prototype,"$everyChapterInAPart");bt([l("a portfolio shows every design it holds as built")],he.prototype,"$showsEveryDesign");bt([l("a portfolio keeps its sketches in a gallery")],he.prototype,"$keepsAGallery");const Fn=t(Bs);t(Fn,be)(Mp);t(Fn,V)($e);const Lr=class Lr extends oe{};o(Lr,"$PortfolioCover");let Hs=Lr;const Bd=t(Hs),Rr=class Rr extends Y{constructor(){super(...arguments),this.prose="'Source Serif 4', Georgia, serif",this.ink="#343c4a",this.heading="#1a1f36",this.soft="#727d8c",this.faint="#9ea8b5",this.line="#e4e9f2",this.paper="#ffffff",this.side="#f8f9fb",this.holdsColumn="240px",this.barHeight="52px",this.shadow="0 1px 2px rgba(43, 54, 60, 0.05), 0 6px 18px rgba(43, 54, 60, 0.05)",this.lift="0 2px 4px rgba(43, 54, 60, 0.06), 0 14px 32px rgba(43, 54, 60, 0.10)",this.barLight="#fcfcfd",this.barMid="#f8f9fc",this.barDeep="#f2f4f9",this.barShadow="0 1px 0 rgba(43, 54, 60, 0.05)",this.sideLight="#fafbfc",this.sideDeep="#f2f4f8",this.hairline="1px",this.stroke="2px"}parts(){return[...super.parts(),this.bands(),this.guide(),this.order(),this.surface(),this.entries(),this.small()]}bands(){return f`
            .pd-book .pd-library { position: relative; background: linear-gradient(180deg, ${({theme:e})=>e.barLight} 0%, ${({theme:e})=>e.barMid} 60%, ${({theme:e})=>e.barDeep} 100%); border-block-end: thin solid ${({theme:e})=>e.line}; box-shadow: ${({theme:e})=>e.barShadow}; }
            .pd-book .pd-library::after { content: ''; position: absolute; left: 0; right: 0; bottom: calc(-1 * ${({theme:e})=>e.hairline}); height: ${({theme:e})=>e.stroke}; background: linear-gradient(90deg, var(--band) 0 40%, var(--ground) 40% 70%, var(--foot) 70%); opacity: 0.75; }
        `}guide(){return f`
            .pd-book .pd-holds { position: relative; padding: calc(${({theme:e})=>e.space} * 0.75) 0 calc(${({theme:e})=>e.space} * 0.8333); background: linear-gradient(90deg, ${({theme:e})=>e.sideLight} 0%, ${({theme:e})=>e.side} 86%, ${({theme:e})=>e.sideDeep} 100%); border-inline-end: thin solid ${({theme:e})=>e.line}; }
            .pd-book .pd-holds .pd-section { margin: 0 0 calc(${({theme:e})=>e.space} * 0.5833); }
            .pd-book .pd-holds .pd-sentence.pd-heading { margin: 0; padding: 0 calc(${({theme:e})=>e.space} * 0.75) calc(${({theme:e})=>e.space} / 4); border: 0; font-family: ${({theme:e})=>e.font}; font-size: calc(0.75 * ${({theme:e})=>e.size}); font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: ${({theme:e})=>e.faint}; }
            .pd-book .pd-holds .pd-paragraph.pa-entry { position: relative; display: flex; align-items: center; justify-content: space-between; gap: calc(${({theme:e})=>e.space} * 0.375); margin: 0; padding: calc(${({theme:e})=>e.space} / 6) calc(${({theme:e})=>e.space} * 0.583) calc(${({theme:e})=>e.space} / 6) calc(${({theme:e})=>e.space} * 1.667); border-radius: 0; font-size: calc(0.93 * ${({theme:e})=>e.size}); font-weight: 500; line-height: 1.35; color: ${({theme:e})=>e.sideInk}; box-shadow: inset calc(${({theme:e})=>e.space} / 8) 0 0 transparent; transition: background ${({theme:e})=>e.beat} ease, color ${({theme:e})=>e.beat} ease, box-shadow ${({theme:e})=>e.beat} ease; }
            .pd-book .pd-holds .pd-paragraph.pa-entry::before { content: ''; position: absolute; inset-inline-start: calc(${({theme:e})=>e.space} * 0.958); width: calc(${({theme:e})=>e.space} / 3); height: calc(${({theme:e})=>e.space} / 3); border-radius: 50%; background: var(--foot-ink); box-shadow: 0 0 0 calc(${({theme:e})=>e.space} / 12) ${({theme:e})=>e.white}; }
            .pd-book .pd-holds .pd-paragraph.pa-entry:hover { background: color-mix(in oklab, color-mix(in oklab, var(--foot) 30%, white) 65%, white); }
            .pd-book .pd-holds .pd-paragraph.pa-entry.pa-open { background: linear-gradient(90deg, color-mix(in oklab, var(--foot) 30%, white), color-mix(in oklab, var(--foot) 16%, white)); color: var(--foot-ink); box-shadow: inset calc(${({theme:e})=>e.space} / 8) 0 0 var(--foot-ink), inset 0 ${({theme:e})=>e.hairline} 0 rgba(255, 255, 255, 0.7); }
            .pd-book .pd-holds .pa-entry .pd-word.pd-entry-day { flex: none; order: 1; margin-inline-start: auto; font-family: ${({theme:e})=>e.font}; font-size: calc(0.7857 * ${({theme:e})=>e.size}); font-weight: 400; letter-spacing: 0; color: ${({theme:e})=>e.faint}; font-variant-numeric: tabular-nums; }
            .pd-book.pa-newest-first .pd-holds .pd-section { display: flex; flex-direction: column-reverse; justify-content: flex-end; }
            .pd-book.pa-newest-first .pd-holds .pd-section > .pa-self-reference { order: 1; }
            .pd-book .pd-holds .pa-entry.pa-open .pd-word.pd-entry-day { color: color-mix(in oklab, var(--foot-ink) 70%, white); }
            .pd-book .pd-holds .pa-parenthetical { display: none; }
        `}order(){return f`
            .pd-book .pd-holds .pd-paragraph.pd-entry-order { position: absolute; top: calc(${({theme:e})=>e.space} * 0.75); right: calc(${({theme:e})=>e.space} * 0.583); z-index: 1; margin: 0; }
            .pd-book .pd-holds .pd-entry-order .pd-word.pd-switch { padding: 0; border: 0; border-radius: 0; background: none; font-family: ${({theme:e})=>e.font}; font-size: calc(0.7143 * ${({theme:e})=>e.size}); font-weight: 500; line-height: 1.4; letter-spacing: 0.02em; color: ${({theme:e})=>e.faint}; cursor: pointer; transition: color ${({theme:e})=>e.beat} ease; }
            .pd-book .pd-holds .pd-entry-order .pd-word.pd-switch::before { content: '↓ '; }
            .pd-book .pd-holds .pd-entry-order .pd-word.pd-switch:hover { color: ${({theme:e})=>e.ink}; }
            .pd-book .pd-holds .pd-entry-order .pd-word.pd-switch[aria-pressed='true'] { background: none; border: 0; color: var(--foot-ink); }
            .pd-book .pd-holds .pd-entry-order .pd-word.pd-switch[aria-pressed='true']::before { content: '↑ '; }
        `}surface(){return f`
            .pd-book .pd-pages { display: flex; flex-direction: column; padding: ${({theme:e})=>e.space} calc(${({theme:e})=>e.space} * 1.6667) calc(${({theme:e})=>e.space} * 5); background: linear-gradient(180deg, color-mix(in oklab, var(--foot) 12%, white), transparent) top / 100% calc(${({theme:e})=>e.space} * 2) no-repeat, linear-gradient(90deg, color-mix(in oklab, var(--foot) 8%, white), transparent) left / calc(${({theme:e})=>e.space} * 1.6667) 100% no-repeat, ${({theme:e})=>e.paper}; }
        `}entries(){return f`
            .pd-book .pd-pages .pd-chapter.pa-page { box-sizing: border-box; position: relative; width: 100%; max-width: calc(${({theme:e})=>e.space} * 33.75); margin: 0 auto; padding: calc(${({theme:e})=>e.space} * 1.6667) 0 calc(${({theme:e})=>e.space} * 2) calc(${({theme:e})=>e.space} * 7.9167); background: linear-gradient(90deg, transparent, ${({theme:e})=>e.line} 12% 88%, transparent) bottom / 100% ${({theme:e})=>e.hairline} no-repeat; }
            .pd-book .pd-pages .pa-page .pd-word.pd-entry-number { position: absolute; left: 0; top: calc(${({theme:e})=>e.space} * 1.4167); font-family: ${({theme:e})=>e.serif}; font-size: calc(3.4286 * ${({theme:e})=>e.size}); font-weight: 500; line-height: 1; letter-spacing: -0.03em; color: color-mix(in oklab, var(--foot-ink) 22%, white); pointer-events: none; }
            .pd-book .pd-pages .pa-page .pd-word.pd-date { display: flex; align-items: baseline; gap: calc(${({theme:e})=>e.space} / 3); position: absolute; left: 0; top: calc(${({theme:e})=>e.space} * 4); width: calc(${({theme:e})=>e.space} * 6.6667); font-family: ${({theme:e})=>e.font}; font-size: calc(0.857 * ${({theme:e})=>e.size}); font-weight: 500; line-height: 1.5; letter-spacing: 0.06em; text-transform: uppercase; color: var(--foot-ink); }
            .pd-book .pd-pages .pa-page .pd-word.pd-date::before { content: ''; flex: none; width: calc(${({theme:e})=>e.space} / 3); height: calc(${({theme:e})=>e.space} / 3); border-radius: 50%; background: linear-gradient(135deg, color-mix(in oklab, var(--foot) 30%, white), var(--foot-ink)); box-shadow: 0 0 0 calc(${({theme:e})=>e.space} / 8) ${({theme:e})=>e.paper}, 0 0 0 calc(${({theme:e})=>e.space} * 5 / 24) color-mix(in oklab, var(--foot) 21%, white), ${({theme:e})=>e.shadow}; }
            .pd-book .pd-pages .pd-sentence.pd-title { margin: 0 0 calc(${({theme:e})=>e.space} * 0.75); font-family: ${({theme:e})=>e.serif}; font-size: calc(2 * ${({theme:e})=>e.size}); font-weight: 700; line-height: 1.2; letter-spacing: -0.015em; color: ${({theme:e})=>e.heading}; }
            .pd-book .pd-pages .pd-section { margin: 0; }
            .pd-book .pd-pages .pd-sentence.pd-heading { margin: calc(${({theme:e})=>e.space} * 1.1667) 0 calc(${({theme:e})=>e.space} * 0.4167); font-family: ${({theme:e})=>e.serif}; font-size: calc(1.2857 * ${({theme:e})=>e.size}); font-weight: 600; line-height: 1.3; color: ${({theme:e})=>e.heading}; }
            .pd-book .pd-pages .pd-paragraph { margin: 0 0 calc(${({theme:e})=>e.space} * 0.7083); font-size: calc(1.2143 * ${({theme:e})=>e.size}); line-height: 1.65; color: ${({theme:e})=>e.ink}; }
            .pd-book .pd-pages .pd-paragraph .pa-reference { color: var(--foot-ink); text-decoration: underline; text-decoration-color: color-mix(in srgb, var(--foot-ink) 35%, transparent); text-decoration-thickness: ${({theme:e})=>e.hairline}; text-underline-offset: calc(${({theme:e})=>e.space} / 8); transition: text-decoration-color ${({theme:e})=>e.beat} ease; }
            .pd-book .pd-pages .pd-paragraph .pa-reference:hover { text-decoration-color: var(--foot-ink); }
            .pd-book .pd-pages .pa-self-reference { color: inherit; text-decoration: none; }
            .pd-book .pd-pages .pd-paragraph.pa-list .pd-line.pa-item { position: relative; margin: 0 0 calc(${({theme:e})=>e.space} / 4); padding-inline-start: 1.3em; }
            .pd-book .pd-pages .pd-paragraph.pa-list .pd-line.pa-item::before { content: '–'; position: absolute; left: 0.1em; color: var(--foot-ink); }
        `}small(){return f`
            @media (max-width: ${({theme:e})=>e.narrow}) {
                .pd-book .pd-holds, .pd-book .pd-library { border-inline-end: none; }
                .pd-book .pd-holds .pd-paragraph.pd-entry-order, .pd-book .pd-holds .pa-entry .pd-word.pd-entry-day { display: none; }
                .pd-book .pd-pages { padding: 0 calc(${({theme:e})=>e.space} * 0.8333) calc(${({theme:e})=>e.space} * 2.5); }
                .pd-book .pd-pages .pd-chapter.pa-page { padding: calc(${({theme:e})=>e.space} * 1.1667) 0 calc(${({theme:e})=>e.space} * 1.3333); }
                .pd-book .pd-pages .pa-page .pd-word.pd-entry-number { position: static; display: block; margin-block-end: calc(${({theme:e})=>e.space} / 6); font-size: calc(2 * ${({theme:e})=>e.size}); }
                .pd-book .pd-pages .pa-page .pd-word.pd-date { position: static; width: auto; margin-block-end: calc(${({theme:e})=>e.space} * 0.4167); }
            }
        `}};o(Rr,"$Typeset");let Ls=Rr;const Wn=t(Ls);var Lp=Object.defineProperty,Rp=Object.getOwnPropertyDescriptor,Mn=o((d,e,a,r)=>{for(var s=Rp(e,a),i=d.length-1,p;i>=0;i--)(p=d[i])&&(s=p(e,a,s)||s);return s&&Lp(e,a,s),s},"__decorateClass$2");const L=o(d=>d.annotations.expressed(E)?.date?.date??"","dayOf"),za=o(d=>{const[e,a]=L(d).split("-");return e===void 0||a===void 0?"":new Date(Date.UTC(Number(e),Number(a)-1,1)).toLocaleString("en-GB",{month:"long",year:"numeric",timeZone:"UTC"})},"monthOf"),_r=class _r extends h{constructor(){super(...arguments),this.specification=new O}defines(e){e.classes.add(this,"pa-newest-first")}erase(e){e.classes.revert(this)}};o(_r,"$NewestFirst");let Oa=_r;const _p=t(Oa),Bn=_p,Er=class Er extends g{write(){const e=t(nt);return n.jsx(e,{annotation:Bn,children:"newest first"})}$Define(){super.$Define(),this.classes.add(this,"pd-entry-order")}};o(Er,"$EntryOrder");let Rs=Er;const Gr=class Gr extends x{write(){return String(this.book.entries.indexOf(this.chapter)+1)}$Define(){super.$Define(),this.classes.add(this,"pd-entry-number")}};o(Gr,"$EntryNumber");let _s=Gr;const qr=class qr extends x{write(){const[e,a,r]=L(this.$entry).split("-");if(!(e===void 0||a===void 0||r===void 0))return new Date(Date.UTC(Number(e),Number(a)-1,Number(r.slice(0,2)))).toLocaleString("en-GB",{day:"numeric",month:"short",timeZone:"UTC"})}$Define(){super.$Define(),this.classes.add(this,"pd-entry-day")}};o(qr,"$EntryDay");let Es=qr;const Yr=class Yr extends oa{paging(){return f``}};o(Yr,"$JournalLayout");let Gs=Yr;const Ep=t(Rs),Gp=t(_s),qp=t(Es),Hn=t(Gs),Yp=Ep,Up=Gp,Zp=qp,Ur=class Ur extends N{constructor(){super(...arguments),this.specification=new fe}get entries(){return this.body}get latest(){return[...this.entries].sort((e,a)=>L(a).localeCompare(L(e)))[0]}get pages(){const e=[...this.entries].sort((a,r)=>L(a).localeCompare(L(r)));return this.is(Oa)?e.reverse():e}get open(){return super.open??this.latest}head(){}switches(){}turns(){}$Bound(){const e=t(Up);for(const s of this.entries)s.text.add(this,n.jsx(e,{}));const a=t(Zp);for(const s of this.table?.annotations.expressed(te)?.entries??[]){const i=M(s)?.identifier,p=i===void 0?void 0:this.chapterAt(i);p===void 0||!this.entries.includes(p)||s.text.add(this,n.jsx(a,{entry:p}))}const r=t(Yp);this.table?.text.add(this,n.jsx(r,{})),this.$is=[Bn],super.$Bound()}};o(Ur,"$Journal");let Pa=Ur;const Zr=class Zr extends D{$everyEntryIsDated(e){const a=e.entries.find(r=>!r.is(E));c(a===void 0,`every entry of a journal is dated, and "${a?.title?.name}" is not`)}$everyEntrySaysItsMonth(e){const a=e.entries.find(r=>r.part?.name!==za(r));c(a===void 0,a===void 0?"":`every entry of a journal says the month of its date as its part, and "${a.title?.name}" says "${a.part?.name??"none"}" for ${za(a)}`)}};o(Zr,"JournalSpecification");let fe=Zr;Mn([l("every entry of a journal is dated")],fe.prototype,"$everyEntryIsDated");Mn([l("every entry of a journal says the month of its date as its part")],fe.prototype,"$everyEntrySaysItsMonth");const ut=t(Pa);t(ut,be)(Wn);t(ut,V)($e);t(ut,lt)(Hn);const Xr=class Xr extends oe{};o(Xr,"$JournalCover");let qs=Xr;const Hd=t(qs);var Xp=Object.defineProperty,Kp=Object.getOwnPropertyDescriptor,F=o((d,e,a,r)=>{for(var s=Kp(e,a),i=d.length-1,p;i>=0;i--)(p=d[i])&&(s=p(e,a,s)||s);return s&&Xp(e,a,s),s},"__decorateClass$1");const Kr=class Kr extends ei{$Define(){super.$Define(),this.classes.add(this,"pd-speaker")}};o(Kr,"$Speaker");let Da=Kr;const Jr=class Jr extends ot{$Define(){super.$Define(),this.classes.add(this,"pd-time")}};o(Jr,"$Time");let Ys=Jr;const Ld=t(Da),Jp=t(Ys),Qp=Jp,Qr=class Qr extends h{constructor(){super(...arguments),this.specification=new ge,this.$at=void 0}get when(){return this.$at??""}get speaker(){return this.parent?.text.find(Sn)[0]?.text.find(Da)[0]}defines(e){e.classes.add(this,"pa-exchange")}erase(e){e.classes.revert(this)}note(){const e=t(Qp);return n.jsx(e,{children:`[${this.when}](${this.when})`})}};o(Qr,"$Exchange");let K=Qr;const Vr=class Vr extends h{constructor(){super(...arguments),this.specification=new G}defines(e){e.classes.add(this,"pa-action")}erase(e){e.classes.revert(this)}};o(Vr,"$Action");let Us=Vr;const Sr=class Sr extends h{constructor(){super(...arguments),this.specification=new G}defines(e){e.classes.add(this,"pa-result")}erase(e){e.classes.revert(this)}};o(Sr,"$Result");let Zs=Sr;const en=class en extends h{constructor(){super(...arguments),this.specification=new G}defines(e){e.classes.add(this,"pa-quoted")}erase(e){e.classes.revert(this)}};o(en,"$Quoted");let Xs=en;const an=class an extends h{constructor(){super(...arguments),this.specification=new G}defines(e){e.classes.add(this,"pa-attached")}erase(e){e.classes.revert(this)}};o(an,"$Attached");let Ks=an;const sn=class sn extends h{constructor(){super(...arguments),this.specification=new G}defines(e){e.classes.add(this,"pa-artifact")}erase(e){e.classes.revert(this)}};o(sn,"$Artifact");let Js=sn;const tn=class tn extends h{constructor(){super(...arguments),this.specification=new Ca}defines(e){e.classes.add(this,"pa-verbatim")}erase(e){e.classes.revert(this)}};o(tn,"$Verbatim");let Qs=tn;const on=class on extends h{constructor(){super(...arguments),this.specification=new We,this.$from=void 0,this.$to=void 0}get from(){return this.$from??""}get to(){return this.$to??""}defines(e){e.classes.add(this,"pa-period")}erase(e){e.classes.revert(this)}};o(on,"$Period");let Aa=on;const rn=class rn extends h{constructor(){super(...arguments),this.specification=new We,this.$shown=void 0,this.$all=void 0}get shown(){return Number(this.$shown??0)}get all(){return Number(this.$all??0)}get aside(){return this.all-this.shown}defines(e){e.classes.add(this,"pa-messages")}erase(e){e.classes.revert(this)}};o(rn,"$Messages");let Fe=rn;const nn=class nn extends b{$saidOfASection(e){c(e instanceof z,"an exchange is said of a section, and this is not one")}$saysWhen(e){const a=e.annotations.expressed(K)?.when??"";c(a!==""&&!Number.isNaN(Date.parse(a)),"an exchange says when it was said, as an instant the machine can read, and this one does not")}$headedByItsSpeaker(e){c(e.annotations.expressed(K)?.speaker!==void 0,"an exchange is headed by its speaker, a word that refers to them, and this one is not")}};o(nn,"ExchangeSpecification");let ge=nn;F([l("an exchange is said of a section")],ge.prototype,"$saidOfASection");F([l("an exchange says when it was said")],ge.prototype,"$saysWhen");F([l("an exchange is headed by its speaker")],ge.prototype,"$headedByItsSpeaker");const pn=class pn extends b{$saidOfAParagraph(e){c(e instanceof g,"this is said of a paragraph, and this is not one")}};o(pn,"OfAParagraphSpecification");let G=pn;F([l("this is said of a paragraph")],G.prototype,"$saidOfAParagraph");const dn=class dn extends b{$saidOfACover(e){c(e instanceof m&&e.is(C),"this is said of a cover, and this is not one")}};o(dn,"OfACoverSpecification");let We=dn;F([l("this is said of a cover")],We.prototype,"$saidOfACover");const cn=class cn extends b{$saidOfAWord(e){c(e instanceof x,"verbatim is said of a word, and this is not one")}};o(cn,"VerbatimSpecification");let Ca=cn;F([l("verbatim is said of a word")],Ca.prototype,"$saidOfAWord");const Rd=t(K),_d=t(Us),Ed=t(Zs),Gd=t(Xs);t(Ks);t(Js);const qd=t(Qs),Yd=t(Aa),Ud=t(Fe),ln=class ln extends N{constructor(){super(...arguments),this.specification=new J}get period(){return this.cover?.annotations.expressed(Aa)}get messages(){return this.cover?.annotations.expressed(Fe)}get exchanges(){return this.body.flatMap(e=>e.text.find(z).filter(a=>a.is(K)))}get pages(){const e=[...this.body].sort((a,r)=>L(a).localeCompare(L(r)));return[this.synopsis,...e,...this.appendix].filter(a=>a!==void 0)}};o(ln,"$Conversation");let Vs=ln;const hn=class hn extends D{$saysItsPeriodAndHowMany(e){c(e.period!==void 0&&e.messages!==void 0,"a conversation says its period and how many messages it holds, on its cover, and this one says less")}$everyChapterIsDated(e){const a=e.body.find(r=>!r.is(E));c(a===void 0,`every chapter of a conversation is dated, and "${a?.title?.name}" is not`)}$everyChapterSaysItsMonth(e){const a=e.body.find(r=>r.part?.name!==za(r));c(a===void 0,a===void 0?"":`every chapter of a conversation says the month of its date as its part, and "${a.title?.name}" says "${a.part?.name??"none"}" for ${za(a)}`)}$everyChapterHoldsAnExchange(e){const a=e.body.find(r=>!r.text.find(z).some(s=>s.is(K)));c(a===void 0,`every chapter of a conversation holds an exchange, and "${a?.title?.name}" holds none`)}};o(hn,"ConversationSpecification");let J=hn;F([l("a conversation says its period and how many messages it holds")],J.prototype,"$saysItsPeriodAndHowMany");F([l("every chapter of a conversation is dated")],J.prototype,"$everyChapterIsDated");F([l("every chapter of a conversation says the month of its date as its part")],J.prototype,"$everyChapterSaysItsMonth");F([l("every chapter of a conversation holds an exchange")],J.prototype,"$everyChapterHoldsAnExchange");t(Vs);var Vp=Object.defineProperty,Sp=Object.getOwnPropertyDescriptor,Ln=o((d,e,a,r)=>{for(var s=Sp(e,a),i=d.length-1,p;i>=0;i--)(p=d[i])&&(s=p(e,a,s)||s);return s&&Vp(e,a,s),s},"__decorateClass");const fn=class fn extends Pa{constructor(){super(...arguments),this.specification=new Me}get entries(){return this.text.find(m).filter(e=>e.is(_)&&e!==this.synopsis)}get laidOutChapters(){return[...super.laidOutChapters,...this.entries]}sizeOf(e){return e.annotations.expressed(I)?.cover?.annotations.expressed(Fe)?.shown??0}};o(fn,"$Register");let Ss=fn;const gn=class gn extends fe{$everyEntryStandsForABook(e){const a=e.entries.find(r=>r.annotations.expressed(_)?.means===void 0);c(a===void 0,`every entry of a register stands for a book, holding its synopsis, and "${a?.title?.name}" stands for none`)}$onlyAChapterAppends(e){const a=[...e.chapters,...e.entries];c(e.text.find(m).every(r=>a.includes(r)||!r.is(st)),"only an ordinary chapter or an entry files a file, and here a cover, a synopsis or a table of contents files one")}};o(gn,"RegisterSpecification");let Me=gn;Ln([l("every entry of a register stands for a book, holding its synopsis")],Me.prototype,"$everyEntryStandsForABook");Ln([l("only an ordinary chapter or an entry files a file")],Me.prototype,"$onlyAChapterAppends");const $t=t(Ss);t($t,be)(Wn);t($t,V)($e);t($t,lt)(Hn);const bn=class bn extends na{get entries(){return this.text.find(m).filter(e=>e.is(_)&&e!==this.synopsis)}get laidOutChapters(){return[...super.laidOutChapters,...this.entries]}get pages(){return[...super.pages,...this.entries]}};o(bn,"$Project");let et=bn;t(et);export{vs as $,xd as A,od as B,kd as C,bd as D,Rd as E,ld as F,Wd as G,Pa as H,nd as I,md as J,na as K,$d as L,Ud as M,td as N,sd as O,Yd as P,Gd as Q,Ed as R,rd as S,Id as T,ud as U,gd as V,Fd as W,cd as X,Hd as Y,id as a,Ss as b,hd as c,Vs as d,Ld as e,_d as f,qd as g,et as h,Bs as i,yd as j,Md as k,vd as l,wd as m,jd as n,zd as o,pd as p,dd as q,Ad as r,Cd as s,Od as t,Pd as u,Nd as v,Td as w,Dd as x,Bd as y,fd as z};
