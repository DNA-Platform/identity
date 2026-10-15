var ei=Object.defineProperty;var n=(p,e)=>ei(p,"name",{value:e,configurable:!0});import{$ as o,J as ai,K as m,r as h,p as g,N as st,W as y,R as x,j as t,O as xn,Q as vn,s as f,w as b,x as c,U as v,G as l,V as N,u as j,y as $,t as me,X as Ba,f as si,Y as A,Z as tt,_ as ti,a0 as G,a1 as $n,a2 as ot,a3 as oi,v as $e,z as C,a4 as E,a5 as ri,a6 as ni,a7 as Ra,a8 as ii,a9 as di,aa as pi,F as fe,ab as yn,ac as rt,ad as nt,ae as ci,af as li,ag as hi,ah as fi,ai as gi,aj as bi,ak as ui,C as wn,T as jn,l as zn,m as On,o as Pn,a as Dn,n as An,al as mi}from"./index-u7EcVasr.js";const kt=class kt extends ai{constructor(){super(...arguments),this.font="'Inter', system-ui, sans-serif",this.prose="'Inter', system-ui, sans-serif",this.mono="'JetBrains Mono', ui-monospace, monospace",this.size="0.875rem",this.leading="1.6",this.measure="44rem",this.spreadColumn="15.5rem",this.space="1.5rem",this.holdsColumn="240px",this.barHeight="50px",this.beat="320ms",this.narrow="48rem",this.phoneWidth="390px",this.colour="#4e9eb9",this.accent="#166178",this.bar="#0c1b1f",this.barInk="#ffffff",this.barDim="#a9bcc1",this.barOn="rgba(255, 255, 255, 0.11)",this.barLine="#1d3339",this.mark="#c8f4fb",this.side="#e3f5fa",this.sideInk="#10252c",this.sideDim="#516770",this.sideOn="#ffffff",this.sideLine="#cbe6ee",this.night="#0c1b1f",this.deep="#14323c",this.blue="#166178",this.sea="#4e9eb9",this.sky="#8fc8dc",this.opal="#c8f4fb",this.pale="#e3f5fa",this.mist="#f1f7f9",this.white="#ffffff",this.ink="#10252c",this.soft="#516770",this.line="#dbe7ec",this.me="#e8590c",this.wash="linear-gradient(105deg, #e2f6fb 0%, #ecf0fd 52%, #fae9f4 100%)",this.serif="'Source Serif 4', Georgia, serif",this.between="'Source Sans 3', 'Inter', system-ui, sans-serif",this.bookPaper="#fbf9f3",this.bookInk="#29251d",this.heading="#10252c",this.capital="#166178",this.lit="#166178",this.faint="#8792a2",this.paper="#ffffff",this.panel="#f1f7f9",this.rule="#dbe7ec",this.edge="transparent",this.tint="#e3f5fa",this.dusk="#14323c",this.glow="#cfe6e3",this.dim="#4f7672",this.keyword="#8ad7ff",this.string="#ffd48a",this.type="#9be3d6",this.comment="#5f8a86",this.haze="#a9bcc1",this.glass="rgba(255, 255, 255, 0.62)",this.binding="linear-gradient(160deg, #16303a, #0c1b1f)",this.spine="inset 5px 0 0 rgba(0, 0, 0, 0.14), inset 6px 0 0 rgba(255, 255, 255, 0.12), 0 10px 20px -10px rgba(0, 0, 0, 0.45)",this.shadow="0 0.75rem 1.4rem -0.9rem rgba(12, 27, 31, 0.55)",this.volume="11.5rem",this.cover="8.25rem",this.card="18rem",this.barLight="#ffffff",this.barMid="#f1f7f9",this.barDeep="#e3f5fa",this.barShadow="none",this.sideLight="#ffffff",this.sideDeep="#e3f5fa",this.codeGround="#f1f7f9",this.hairline="1px",this.stroke="2px",this.rise="-1px",this.gloss="none",this.ring="0 0 0 2px #c8f4fb",this.decisionShadow="none",this.photo="7rem",this.radius="0.375rem",this.barTint="#ffffff",this.skyInk="#166178",this.lift="inset 5px 0 0 rgba(0, 0, 0, 0.14), inset 6px 0 0 rgba(255, 255, 255, 0.12), 0 14px 24px -12px rgba(0, 0, 0, 0.5)",this.openSpine="inset 7px 0 0 rgba(0, 0, 0, 0.14), inset 8px 0 0 rgba(255, 255, 255, 0.12), 0 12px 22px -14px rgba(0, 0, 0, 0.5)",this.sans="'Inter', system-ui, sans-serif",this.muted="#516770",this.bubble="rgba(16, 37, 44, 0.05)",this.shade="rgba(16, 37, 44, 0.03)",this.pill="#166178",this.column="48rem",this.style=m.div`${this.parts()}`}parts(){return[this.page(),this.writing(),this.links(),this.figures(),this.listings(),this.switches(),this.turns(),this.illustrations(),this.marks(),this.library(),this.head(),this.holds(),this.context(),this.tones()]}page(){return h`
            font-family: ${({theme:e})=>e.font};
            font-size: ${({theme:e})=>e.size};
            line-height: ${({theme:e})=>e.leading};
            color: ${({theme:e})=>e.ink};
            background: ${({theme:e})=>e.paper};
            min-height: 100vh;
        `}writing(){return h`
            .pd-pages { font-family: ${({theme:e})=>e.prose}; }
            .pd-chapter, .pd-section, .pd-paragraph { margin-block: ${({theme:e})=>e.space}; }
            .pd-chapter { max-width: ${({theme:e})=>e.measure}; }
        `}links(){return h`
            .pa-reference { color: ${({theme:e})=>e.accent}; }
            .pa-reference.pa-self-reference { color: inherit; text-decoration: none; }
        `}figures(){return h`
            .pd-image img { display: block; max-width: 100%; height: auto; }
            .pa-phone .pd-image img { max-width: min(100%, ${({theme:e})=>e.phoneWidth}); }
            .pd-code { font-family: ${({theme:e})=>e.mono}; overflow-x: auto; }
        `}listings(){return h`
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
        `}switches(){return h`
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
        `}illustrations(){return h`
            .pd-illustration { fill: none; stroke: var(--ink); stroke-width: 1.7; stroke-linecap: round; stroke-linejoin: round; }
            .pd-illustration .fill { fill: var(--foot); stroke: var(--ink); }
            .pd-illustration .light { fill: ${({theme:e})=>e.white}; stroke: none; }
            .pd-drawing { display: grid; place-items: center; min-height: 0; }
        `}marks(){return h`
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
        `}library(){return h`
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
            .pd-me .pd-paragraph { display: flex; align-items: center; gap: calc(${({theme:e})=>e.space} * 0.375); font-size: calc(0.93 * ${({theme:e})=>e.size}); color: ${({theme:e})=>e.soft}; }
            .pd-me .pd-word.pa-reference { color: ${({theme:e})=>e.ink}; font-weight: 500; }
        `}head(){return h`
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
        `}holds(){return h`
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
        `}context(){return h`
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
        `}tones(){return h`
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
        `}turns(){return h`
            .pd-paragraph.pd-turn {
                display: flex;
                justify-content: space-between;
                gap: ${({theme:e})=>e.space};
                font-size: calc(0.786 * ${({theme:e})=>e.size});
            }
            .pd-turn .pa-reference { font-weight: 500; text-decoration: none; }
            .pd-turn .pd-count { color: ${({theme:e})=>e.faint}; }
        `}};n(kt,"$LibraryBookTheme");let Y=kt;const $i=o(Y);var ki=Object.defineProperty,xi=Object.getOwnPropertyDescriptor,vi=n((p,e,a,r)=>{for(var s=xi(e,a),i=p.length-1,d;i>=0;i--)(d=p[i])&&(s=d(e,a,s)||s);return s&&ki(e,a,s),s},"__decorateClass$m");const xt=class xt extends f{constructor(){super(...arguments),this.specification=new Re}defines(e){e.classes.add(this,"pa-label")}erase(e){e.classes.revert(this)}};n(xt,"$Label");let Ea=xt;const vt=class vt extends b{$saidOfAWord(e){c(e instanceof v,"label is said of a word, and this is not one")}};n(vt,"LabelSpecification");let Re=vt;vi([l("label is said of a word")],Re.prototype,"$saidOfAWord");const Wa=o(Ea),yt=class yt extends g{get cover(){return this.$cover??this.book?.cover}write(){const e=this.cover.annotations.expressed(st),a=o(y),r=o(Wa),s=o(x);return t.jsxs(t.Fragment,{children:[t.jsxs(a,{children:[t.jsx(r,{}),"by"]}),t.jsxs(a,{children:[t.jsx(s,{children:e.means.identifier}),e.name]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-byline")}};n(yt,"$Byline");let _a=yt;const wt=class wt extends g{get cover(){return this.$cover??this.book?.cover}write(){const e=this.cover.annotations.expressed(xn),a=o(y),r=o(Wa),s=o(x);return t.jsxs(t.Fragment,{children:[t.jsxs(a,{children:[t.jsx(r,{}),"subject"]}),t.jsxs(a,{children:[t.jsx(s,{children:e.means.identifier}),e.name]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-subject-line")}};n(wt,"$SubjectLine");let Ga=wt;const jt=class jt extends g{get cover(){return this.$cover??this.book?.cover}get topics(){return this.cover?.annotations.find(vn)??[]}write(){const e=o(y),a=o(Wa),r=o(x);return t.jsxs(t.Fragment,{children:[t.jsxs(e,{children:[t.jsx(a,{}),"topic"]}),this.topics.map((s,i)=>t.jsxs(e,{children:[t.jsx(r,{children:s.means.identifier}),s.name]},i))]})}$Define(){super.$Define(),this.classes.add(this,"pd-topic-line")}};n(jt,"$TopicLine");let Ya=jt;const Cn=o(_a),yi=o(Ga),wi=o(Ya);var ji=Object.defineProperty,zi=Object.getOwnPropertyDescriptor,Oi=n((p,e,a,r)=>{for(var s=zi(e,a),i=p.length-1,d;i>=0;i--)(d=p[i])&&(s=d(e,a,s)||s);return s&&ji(e,a,s),s},"__decorateClass$l");const zt=class zt extends b{$saidOfABook(e){c(e instanceof M,"this is said of a book of this library, and here it is said of something else")}};n(zt,"OfABookSpecification");let z=zt;Oi([l("this is said of a book of this library")],z.prototype,"$saidOfABook");const Ot=class Ot extends v{get on(){return[this.book.$is].flat().includes(this.$annotation)}$Switch(...e){this.$Writing(...e),this.containers.replace(this,"span","button")}container(e){return super.container({type:"button","aria-pressed":this.on,onClick:n(()=>this.press(),"onClick"),...e})}press(){const e=this.book,a=[e.$is].flat();e.$is=this.on?a.filter(r=>r!==this.$annotation):[this.$annotation,...a]}$Define(){super.$Define(),this.classes.add(this,"pd-switch")}};n(Ot,"$Switch");let ke=Ot;const Pt=class Pt extends ke{press(){const e=this.book,a=[e.$is].flat().filter(r=>!this.$family.includes(r));e.$is=[this.$annotation,...a]}};n(Pt,"$Tab");let xe=Pt;const it=o(ke),Pi=o(xe);var Di=Object.defineProperty,Ai=Object.getOwnPropertyDescriptor,In=n((p,e,a,r)=>{for(var s=Ai(e,a),i=p.length-1,d;i>=0;i--)(d=p[i])&&(s=d(e,a,s)||s);return s&&Di(e,a,s),s},"__decorateClass$k");const Dt=class Dt extends N{constructor(){super(...arguments),this.specification=new ve,this.style=m.div`
        .pa-coloured { --colour: ${e=>e.$colour}; }
    `}get colour(){return j.copy(this.text).trim()}$Coloured(...e){this.$Format(...e);const a=this.style;this._painted=r=>t.jsx(a,{$colour:this.colour,...r})}defines(e){e.classes.add(this,"pa-coloured"),e.containers.add(this,this._painted)}erase(e){e.classes.revert(this),e.containers.revert(this)}};n(Dt,"$Coloured");let q=Dt;const At=class At extends b{$saidOfAChapterOrAParagraph(e){c(e instanceof $||e instanceof g,"coloured is said of a chapter or a paragraph, and this is neither")}$givenItsColour(e){c(/^#[0-9a-f]{6}$/iu.test(e.annotations.expressed(q)?.colour??""),"coloured is given its colour as six hex digits, and this one was given something else")}};n(At,"ColouredSpecification");let ve=At;In([l("coloured is said of a chapter or a paragraph")],ve.prototype,"$saidOfAChapterOrAParagraph");In([l("coloured is given its colour")],ve.prototype,"$givenItsColour");const Pp=o(q);var Ci=Object.defineProperty,Ii=Object.getOwnPropertyDescriptor,dt=n((p,e,a,r)=>{for(var s=Ii(e,a),i=p.length-1,d;i>=0;i--)(d=p[i])&&(s=d(e,a,s)||s);return s&&Ci(e,a,s),s},"__decorateClass$j");const Ct=class Ct extends N{constructor(){super(...arguments),this.specification=new S}get identifier(){return me.reference(j.copy(this.text))?.identifier??""}get name(){return me.reference(j.copy(this.text))?.name??""}get entry(){return this.book?.chapterAt(this.identifier)}get drawing(){const e=this.entry?.text.find(g).flatMap(a=>a.text.find(Ba))[0];return e===void 0?"":j.copy(e.text).trim()}get colour(){return this.entry?.annotations.expressed(q)?.colour??""}$Keyed(...e){this.$Format(...e);const a=o(Mi);this._layer=r=>t.jsxs("div",{...r,children:[t.jsx(a,{keyed:this}),r.children]})}defines(e){e.classes.add(this,"pa-keyed"),e.containers.add(this,this._layer)}erase(e){e.classes.revert(this),e.containers.revert(this)}};n(Ct,"$Keyed");let R=Ct;const It=class It extends v{constructor(){super(...arguments),this.style=m.span`
        --colour: ${e=>e.$colour};
    `}$Icon(...e){this.$Writing(...e);const a=this.style;this._painted=r=>t.jsx(a,{$colour:this.$keyed?.colour??"",...r}),this.containers.replace(this,"span",this._painted)}write(){return t.jsx("span",{className:"pd-drawing",role:"img","aria-label":this.$keyed?.name,dangerouslySetInnerHTML:{__html:this.$keyed?.drawing??""}})}$Define(){super.$Define(),this.classes.add(this,"pd-icon")}};n(It,"$Icon");let qa=It;const Mt=class Mt extends b{$saidOfAChapter(e){c(e instanceof $,"keyed is said of a chapter, and this is not one")}$namesAnEntry(e){const a=e.annotations.expressed(R)?.entry;c(a!==void 0&&a.annotations.expressed(R)?.entry===a,"keyed names an entry of the key, a chapter of this book keyed as itself, and this one names something else")}$entryHoldsItsDrawingAndColour(e){const a=e.annotations.expressed(R)?.entry;a!==void 0&&c(a.text.find(g).flatMap(r=>r.text.find(Ba)).length===1&&a.is(q),"an entry of the key holds one drawing and its colour, and this one holds something else")}};n(Mt,"KeyedSpecification");let S=Mt;dt([l("keyed is said of a chapter")],S.prototype,"$saidOfAChapter");dt([l("keyed names an entry of the key")],S.prototype,"$namesAnEntry");dt([l("an entry of the key holds one drawing and its colour")],S.prototype,"$entryHoldsItsDrawingAndColour");const Dp=o(R),Mn=o(qa),Mi=Mn;var Ni=Object.defineProperty,Ti=Object.getOwnPropertyDescriptor,Fi=n((p,e,a,r)=>{for(var s=Ti(e,a),i=p.length-1,d;i>=0;i--)(d=p[i])&&(s=d(e,a,s)||s);return s&&Ni(e,a,s),s},"__decorateClass$i");const Bi={tsx:"typescript",ts:"typescript",mjs:"javascript",js:"javascript",css:"css",html:"xml",svg:"xml",json:"json",md:"markdown"},Wi='<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"><path d="M6 4.5 3.5 8 6 11.5M10 4.5 12.5 8 10 11.5"/></svg>',ge=n(p=>`${p.$identifier}${p.$type}`,"fileNameOf"),Hi=n(p=>p===void 0?[]:j.copy(p.text).split(`
`),"fileLinesOf"),Nn=n(p=>p?.chapter?.annotations.expressed(O),"spreadOf"),Nt=class Nt extends g{constructor(){super(...arguments),this.$family=[]}get name(){return this.$file===void 0?"":ge(this.$file)}get language(){return Bi[(this.$file?.$type??"").replace(/^\./u,"")]??""}get spread(){return Nn(this.$file)}get chapter(){return this.$file?.chapter??super.chapter}$FileListing(...e){this.$Writing(...e),this.containers.replace(this,"span","div")}container(e){return super.container({onClick:n(()=>this.press(),"onClick"),...e})}press(){if(this.$filePanelState===void 0)return;const e=this.book,a=[e.$is].flat().filter(r=>!this.$family.includes(r));e.$is=[this.$filePanelState,...a]}write(){const e=o(y),a=o(si);return t.jsxs(t.Fragment,{children:[t.jsx(e,{children:this.name}),t.jsx(a,{identifier:this.$file?.$identifier,type:this.$file?.$type,language:this.language,numbered:!0})]})}$Define(){super.$Define(),this.classes.add(this,"pd-file-listing");const e=o(Ei);this.annotations.add(this,t.jsx(e,{}))}};n(Nt,"$FileListing");let Ee=Nt;const Tt=class Tt extends f{constructor(){super(...arguments),this.specification=new _e}defines(e){const a=e;a.$file!==void 0&&a.spread?.openFile===a.$file&&e.classes.add(this,"pa-open")}erase(e){e.classes.revert(this)}};n(Tt,"$OpenListing");let Za=Tt;const Ft=class Ft extends b{$isAFileListing(e){c(e instanceof Ee,"an open listing is a file listing, and this is not one")}};n(Ft,"OpenListingSpecification");let _e=Ft;Fi([l("an open listing is a file listing")],_e.prototype,"$isAFileListing");const Bt=class Bt extends xe{constructor(){super(...arguments),this.$skeleton=!1,this.style=m.button`
        --colour: ${e=>e.$colour};
    `}get on(){const e=this.$file?.chapter;return e!==void 0&&e===this.book.open&&this.spread?.openFile===this.$file}get name(){return this.$file===void 0?"":ge(this.$file)}get spread(){return Nn(this.$file)}get colour(){return this.$file?.chapter?.annotations.expressed(R)?.colour??""}get lines(){return Hi(this.$file)}get chapter(){return this.$file?.chapter??super.chapter}$FileTab(...e){this.$Switch(...e),this.containers.replace(this,"button",this.style)}container(e){return super.container({$colour:this.colour,...e})}press(){const e=this.spread;e!==void 0&&(e.$openFile=this.$file),this.$annotation!==void 0&&super.press()}write(){return t.jsxs(t.Fragment,{children:[t.jsx("span",{className:"pd-drawing",dangerouslySetInnerHTML:{__html:Wi}}),t.jsx("span",{className:"pd-tab-name",children:this.name}),this.$skeleton?t.jsx("span",{className:"pd-skeleton",children:this.lines.slice(0,14).map((e,a)=>t.jsx("i",{style:{width:`${Math.max(12,Math.min(100,e.length*2.2))}%`}},a))}):void 0]})}$Define(){super.$Define(),this.classes.add(this,"pd-file-tab")}};n(Bt,"$FileTab");let Ua=Bt;const Li=o(Ee),Ri=o(Za),pt=o(Ua),Ei=Ri;var _i=Object.defineProperty,Gi=Object.getOwnPropertyDescriptor,Yi=n((p,e,a,r)=>{for(var s=Gi(e,a),i=p.length-1,d;i>=0;i--)(d=p[i])&&(s=d(e,a,s)||s);return s&&_i(e,a,s),s},"__decorateClass$h");const Na=class Na extends f{constructor(){super(...arguments),this.specification=new z}defines(e){for(const a of e.annotations.after(this))a instanceof Na&&e.annotations.express(a,!1);e.classes.add(this,"pa-file-panel-state")}erase(e){e.classes.revert(this)}};n(Na,"$FilePanelState");let ee=Na;const Wt=class Wt extends ee{defines(e){super.defines(e),e.classes.add(this,"pa-code-forward")}};n(Wt,"$CodeForward");let Xa=Wt;const Ht=class Ht extends ee{defines(e){super.defines(e),e.classes.add(this,"pa-words-forward")}};n(Ht,"$WordsForward");let Ka=Ht;const Lt=class Lt extends ee{defines(e){super.defines(e),e.classes.add(this,"pa-split")}};n(Lt,"$Split");let Ja=Lt;const Rt=class Rt extends f{constructor(){super(...arguments),this.specification=new z}defines(e){e.classes.add(this,"pa-light-code")}erase(e){e.classes.revert(this)}};n(Rt,"$LightCode");let Qa=Rt;const Et=class Et extends f{constructor(){super(...arguments),this.specification=new z}defines(e){e.classes.add(this,"pa-wrapped-code")}erase(e){e.classes.revert(this)}};n(Et,"$WrappedCode");let Va=Et;const _t=class _t extends f{constructor(){super(...arguments),this.specification=new z}defines(e){e.classes.add(this,"pa-numbered-code")}erase(e){e.classes.revert(this)}};n(_t,"$NumberedCode");let Sa=_t;const Gt=class Gt extends f{constructor(){super(...arguments),this.specification=new Ye}defines(e){e.classes.add(this,"pa-brief")}erase(e){e.classes.revert(this)}};n(Gt,"$Brief");let Ge=Gt;const Yt=class Yt extends b{$saidOfAParagraph(e){c(e instanceof g,"brief is said of a paragraph, and this is not one")}};n(Yt,"BriefSpecification");let Ye=Yt;Yi([l("brief is said of a paragraph")],Ye.prototype,"$saidOfAParagraph");o(ee);const ct=o(Xa),lt=o(Ka),ye=o(Ja),qi=o(Qa),Zi=o(Va),Tn=o(Sa),Ap=o(Ge),qt=class qt extends g{constructor(){super(...arguments),this.style=m.div`
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
    `}get spread(){return this.chapter?.annotations.expressed(O)}$FileRail(...e){this.$Writing(...e),this.containers.replace(this,"span",this.style)}write(){const e=o(pt),a=this.spread;if(a!==void 0)return a.files.map(r=>t.jsx(e,{file:r,annotation:ye,family:a.filePanelStates,skeleton:!0},ge(r)))}$Define(){super.$Define(),this.classes.add(this,"pd-file-rail")}};n(qt,"$FileRail");let es=qt;const Zt=class Zt extends xe{constructor(){super(...arguments),this.style=m.button`
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
    `}get paragraphs(){return(this.chapter?.text.find(A)??[]).flatMap(e=>e.text.find(g)).slice(0,16).map(e=>j.copy(e.text))}$FilePanelGrip(...e){this.$Switch(...e),this.containers.replace(this,"button",this.style)}write(){return t.jsx("span",{className:"pd-skeleton",children:this.paragraphs.map((e,a)=>t.jsx("i",{style:{width:`${Math.max(25,Math.min(100,e.length/4))}%`}},a))})}$Define(){super.$Define(),this.classes.add(this,"pd-file-panel-grip")}};n(Zt,"$FilePanelGrip");let as=Zt;const Ui=o(es),Xi=o(as),Ut=class Ut extends g{constructor(){super(...arguments),this.style=m.div`
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
    `}get spread(){return this.chapter?.annotations.expressed(O)}$FilePanel(...e){this.$Writing(...e),this.containers.replace(this,"span",this.style)}write(){const e=o(Qi),a=o(Li),r=this.spread;if(r!==void 0)return t.jsxs(t.Fragment,{children:[t.jsx(e,{chapter:this.chapter}),t.jsx("div",{className:"pd-file-listings",children:r.files.map(s=>t.jsx(a,{file:s,filePanelState:ct,family:r.filePanelStates},ge(s)))})]})}$Define(){super.$Define(),this.classes.add(this,"pd-file-panel")}};n(Ut,"$FilePanel");let ss=Ut;const Xt=class Xt extends g{constructor(){super(...arguments),this.style=m.div`
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
    `}get spread(){return this.chapter?.annotations.expressed(O)}$FilePanelBar(...e){this.$Writing(...e),this.containers.replace(this,"span",this.style)}write(){const e=o(pt),a=o(Pi),r=o(it),s=this.spread,i=this.chapter;if(s!==void 0)return t.jsxs(t.Fragment,{children:[s.files.map(d=>t.jsx(e,{file:d},ge(d))),t.jsx("span",{className:"pd-words-only",children:t.jsx(a,{chapter:i,annotation:lt,family:s.filePanelStates,children:"words"})}),t.jsx("span",{className:"pd-dock pd-to-full",children:t.jsx(a,{chapter:i,annotation:ct,family:s.filePanelStates,children:"full screen"})}),t.jsx("span",{className:"pd-dock pd-to-split",children:t.jsx(a,{chapter:i,annotation:ye,family:s.filePanelStates,children:"split"})}),t.jsxs("span",{className:"pd-options",children:[t.jsx(r,{chapter:i,annotation:qi,children:"light"}),t.jsx(r,{chapter:i,annotation:Zi,children:"wrap"}),t.jsx(r,{chapter:i,annotation:Tn,children:"lines"})]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-file-panel-bar")}};n(Xt,"$FilePanelBar");let ts=Xt;const Ki=o(ss),Ji=o(ts),Qi=Ji;var Vi=Object.defineProperty,Si=Object.getOwnPropertyDescriptor,ed=n((p,e,a,r)=>{for(var s=Si(e,a),i=p.length-1,d;i>=0;i--)(d=p[i])&&(s=d(e,a,s)||s);return s&&Vi(e,a,s),s},"__decorateClass$g");const Kt=class Kt extends N{constructor(){super(...arguments),this.specification=new qe,this.$openFile=void 0,this.grid=m.div`
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
    `}get files(){return this.parent.annotations.find(tt).reverse()}get openFile(){return this.$openFile??this.files[0]}get filePanelStates(){return[lt,ye,ct]}$Spread(...e){this.$Format(...e);const a=this.grid,r=o(Ki),s=o(Ui),i=o(Xi);this.style=({className:d,children:u})=>{const k=this.parent,F=[...k.classes].includes("pa-open");return t.jsxs(a,{className:`${d??""}${F?" pa-open":""}`.trim(),children:[t.jsx("div",{className:"pd-words",children:u}),F?t.jsxs(t.Fragment,{children:[t.jsx(r,{chapter:k}),t.jsx(s,{chapter:k}),t.jsx(i,{chapter:k,annotation:ye,family:this.filePanelStates})]}):void 0]})}}defines(e){super.defines(e),e.classes.add(this,"pa-spread")}erase(e){super.erase(e),e.classes.revert(this)}};n(Kt,"$Spread");let O=Kt;const Jt=class Jt extends b{$isAChapter(e){c(e instanceof $,"a spread is a chapter read beside its files, and this is not a chapter")}};n(Jt,"SpreadSpecification");let qe=Jt;ed([l("a spread is a chapter read beside its files")],qe.prototype,"$isAChapter");const Cp=o(O);var ad=Object.defineProperty,sd=Object.getOwnPropertyDescriptor,We=n((p,e,a,r)=>{for(var s=sd(e,a),i=p.length-1,d;i>=0;i--)(d=p[i])&&(s=d(e,a,s)||s);return s&&ad(e,a,s),s},"__decorateClass$f");const Fn='<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3.5 10.5 8 6 12.5"/></svg>',td='<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linejoin="round" stroke-linecap="round"><rect class="ground" x="0.75" y="0.75" width="14.5" height="14.5"/><path d="M3.5 5.5h3l1.5 1.5h4.5v5h-9z"/></svg>',Qt=class Qt extends N{constructor(){super(...arguments),this.specification=new Xe,this.style=m.div`
        ${e=>e.$schemeDeclarations===void 0?"":`.pa-entry { ${e.$schemeDeclarations} }`}
    `}get place(){return B(this.parent).identifier}get referencedChapter(){return this.book.chapterAt(this.place)}get cover(){return this.referencedChapter?.annotations.expressed(I)?.cover??this.book.coverOf(this.place)}get schemeDeclarations(){const e=this.cover?.annotations.expressed(W);if(e!==void 0)return e.declarations;const a=this.referencedChapter?.annotations.expressed(q)?.colour;return a===void 0?void 0:`--colour: ${a};`}$Entry(...e){this.$Format(...e);const a=this.style;this._painted=r=>t.jsx(a,{$schemeDeclarations:this.schemeDeclarations,...r})}defines(e){e.classes.add(this,"pa-entry"),e.containers.add(this,this._painted),(this.place===this.book?.$bookmark||this.place===this.book.open?.mention?.identifier)&&e.classes.add(this,"pa-open")}erase(e){e.classes.revert(this),e.containers.revert(this)}};n(Qt,"$Entry");let Z=Qt;const Vt=class Vt extends f{constructor(){super(...arguments),this.specification=new Ue}defines(e){e.classes.add(this,"pa-appendix")}erase(e){e.classes.revert(this)}};n(Vt,"$Appendix");let we=Vt;const St=class St extends f{constructor(){super(...arguments),this.specification=new Ze}get entries(){return this.chapter.text.find(A).flatMap(a=>a.text.find(g)).filter(a=>!a.is(ti)&&B(a)!==void 0)}$Bound(){const e=o(nd),a=o(Rn),r=o(pt),s=this.book;for(const i of this.entries){i.annotations.add(this,t.jsx(e,{}));const d=s.chapterAt(B(i).identifier)?.annotations.expressed(O);if(d===void 0)continue;const u=d.files;i.text.add(this,t.jsx(a,{foldedWriting:u.length===0?void 0:i,annotation:Ln}),...u.map(k=>t.jsx(r,{file:k,annotation:ye,family:d.filePanelStates},ge(k))))}super.$Bound()}};n(St,"$Index");let ae=St;const eo=class eo extends b{$isATableOfContents(e){c(e.is(G),"an index is a table of contents, and this chapter is not one")}};n(eo,"IndexSpecification");let Ze=eo;We([l("an index is a table of contents")],Ze.prototype,"$isATableOfContents");const ao=class ao extends b{$isASectionOfTheTable(e){c(e instanceof A&&e.chapter?.is(G)===!0,"the appendix is a section of the table of contents, and this is not one")}};n(ao,"AppendixSpecification");let Ue=ao;We([l("the appendix is a section of the table of contents")],Ue.prototype,"$isASectionOfTheTable");const so=class so extends b{$isARowThatLeadsSomewhere(e){c(e instanceof g&&B(e)!==void 0,"an entry is a row that leads somewhere, and this is not one")}};n(so,"EntrySpecification");let Xe=so;We([l("an entry is a row that leads somewhere")],Xe.prototype,"$isARowThatLeadsSomewhere");const to=class to extends f{constructor(){super(...arguments),this.specification=new Je}defines(e){e.classes.add(this,"pa-folded")}erase(e){e.classes.revert(this)}};n(to,"$Folded");let os=to;const oo=class oo extends ke{get on(){return this.$foldedWriting!==void 0&&[this.$foldedWriting.$is].flat().includes(this.$annotation)}container(e){return super.container({...e,disabled:this.$foldedWriting===void 0,onClick:n(a=>{a.preventDefault(),this.press()},"onClick")})}press(){const e=this.$foldedWriting;if(e===void 0)return;const a=[e.$is].flat();e.$is=this.on?a.filter(r=>r!==this.$annotation):[this.$annotation,...a]}write(){return t.jsx("span",{className:"pd-drawing",dangerouslySetInnerHTML:{__html:Fn}})}$Define(){super.$Define(),this.classes.add(this,"pd-fold-chevron")}};n(oo,"$FoldChevron");let rs=oo;const ro=class ro extends N{constructor(){super(...arguments),this.specification=new Qe,this.tree=m.div`
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
    `}get section(){return this.parent}get firstPlace(){return this.section.text.find(g).map(e=>B(e)).find(e=>e!==void 0)?.identifier}get part(){const e=this.firstPlace;return e===void 0?void 0:this.book.chapterAt(e)?.part}get open(){const e=this.book.open;return e!==void 0&&e.part?.name===this.part?.name}$TreeFolder(...e){this.$Format(...e);const a=this.tree,r=o(Rn),s=o(y),i=o(x);this.style=({className:d,children:u})=>{const k=this.firstPlace,F=[...this.section.classes].includes("pa-open"),ue=t.jsx("span",{className:"pd-drawing pd-tree-folder-mark",dangerouslySetInnerHTML:{__html:td}});return t.jsxs(a,{className:`${d??""} pd-tree-folder${F?" pa-open":""}`.trim(),children:[t.jsx(r,{foldedWriting:this.section,annotation:Ln}),k===void 0?ue:t.jsxs(s,{children:[t.jsx(i,{children:k}),ue]}),u]})}}defines(e){super.defines(e),e.classes.add(this,"pa-tree-folder"),this.open&&e.classes.add(this,"pa-open")}erase(e){super.erase(e),e.classes.revert(this)}};n(ro,"$TreeFolder");let Ke=ro;const no=class no extends b{$saidOfASectionOrAnEntry(e){c(e instanceof A&&e.chapter?.is(G)===!0||e.is(Z),"folded is said of a section of a table of contents or of an entry, and this is neither")}};n(no,"FoldedSpecification");let Je=no;We([l("folded is said of a section of a table of contents or of an entry")],Je.prototype,"$saidOfASectionOrAnEntry");const io=class io extends b{$isASectionOfTheTable(e){c(e instanceof A&&e.chapter?.is(G)===!0,"a tree folder is a section of the table of contents, and this is not one")}};n(io,"TreeFolderSpecification");let Qe=io;We([l("a tree folder is a section of the table of contents")],Qe.prototype,"$isASectionOfTheTable");const po=class po extends g{get cover(){return this.$cover??this.book?.cover}write(){const e=this.cover,a=o(y),r=o(x);return t.jsxs(a,{children:[t.jsx(r,{children:e.mention.identifier}),t.jsx("span",{className:"pd-drawing",dangerouslySetInnerHTML:{__html:Fn}}),e.title.name]})}$Define(){super.$Define(),this.classes.add(this,"pd-tree-root")}};n(po,"$TreeRoot");let ns=po;const B=n(p=>p.annotations.expressed($n)??p.text.find(v).map(e=>e.annotations.expressed($n)).find(e=>e!==void 0),"contentOf"),Bn=o(Z),Ip=o(ae),Mp=o(we),Wn=o(os),od=o(rs),Hn=o(Ke),rd=o(ns),nd=Bn,Ln=Wn,Rn=od;var id=Object.defineProperty,dd=Object.getOwnPropertyDescriptor,K=n((p,e,a,r)=>{for(var s=dd(e,a),i=p.length-1,d;i>=0;i--)(d=p[i])&&(s=d(e,a,s)||s);return s&&id(e,a,s),s},"__decorateClass$e");const Ha=n((p,e)=>{const a=new Set(p.text.find(e));return p.text.find(oi).flatMap(r=>[...a.has(r)?[r]:[],...Ha(r,e)])},"within"),co=class co extends f{constructor(){super(...arguments),this.specification=new U}get identifier(){return me.reference(j.copy(this.text))?.identifier??""}get name(){return me.reference(j.copy(this.text))?.name??""}get cover(){const e=this.identifier;return this.chapter?.annotations.find(I).map(a=>a.cover).find(a=>a?.mention?.identifier===e)}defines(e){e.classes.add(this,"pa-design")}erase(e){e.classes.revert(this)}};n(co,"$Design");let w=co;const lo=class lo extends f{constructor(){super(...arguments),this.specification=new Ve}defines(e){e.classes.add(this,"pa-exhibit")}erase(e){e.classes.revert(this)}};n(lo,"$Exhibit");let je=lo;const ho=class ho extends f{constructor(){super(...arguments),this.specification=new Se,this.$number=0,this.span=m.span.attrs({className:"pd-plate"})``}note(){const e=this.span;return t.jsxs(t.Fragment,{children:[t.jsx(e,{children:String(this.$number).padStart(2,"0")}),t.jsx("span",{className:"pd-jacket-mini"})]})}defines(e){e.classes.add(this,"pa-plate")}erase(e){e.classes.revert(this)}};n(ho,"$Plate");let is=ho;const fo=class fo extends N{constructor(){super(...arguments),this.specification=new ea,this.themeProvider=!0,this.room=m.div`
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
    `}get chapter(){return this.parent}get design(){return this.chapter.annotations.expressed(w)}get plate(){return this.book.chapters.filter(e=>e.is(w)).indexOf(this.chapter)+1}$Room(...e){this.$Format(...e);const a=this.room;this.style=({className:r,children:s})=>{const i=[...this.chapter.classes].includes("pa-open");return V(this.design?.cover,t.jsxs(a,{className:`${r??""} pd-room${i?" pa-open":""}`.trim(),children:[t.jsx("span",{className:"pd-plate",children:String(this.plate).padStart(2,"0")}),s]}))}}defines(e){super.defines(e),e.classes.add(this,"pa-room")}erase(e){super.erase(e),e.classes.revert(this)}};n(fo,"$Room");let ds=fo;const go=class go extends g{get references(){const e=this.book?.means?.identifier??"",a=new Map;for(const r of Ha(this.chapter,v)){if(r.parent===this)continue;const s=r.annotations.expressed($e)?.identifier;if(s===void 0||s.startsWith(e)||a.has(s))continue;const i=j.copy(r.text);a.set(s,me.reference(i)?.name??i.trim())}return[...a]}write(){const e=o(y),a=o(x);return this.references.map(([r,s],i)=>t.jsxs(e,{children:[t.jsx(a,{children:r}),s,t.jsx("span",{className:"pd-where",children:r.replace(/^\/dougs-/u,"").replace(/\/#?/u," · ").replace(/ · $/u,"").replace(/-/gu," ")})]},i))}$Define(){super.$Define(),this.classes.add(this,"pd-built-in")}};n(go,"$BuiltIn");let ps=go;const bo=class bo extends b{$isAChapter(e){c(e instanceof $,"a design is a chapter, and this is not one")}$namesABook(e){c((e.annotations.expressed(w)?.identifier??"")!=="","a design names the book it is of, and this one names nothing")}$holdsTheCover(e){c(e.annotations.expressed(w)?.cover!==void 0,"a design holds the cover of the book it is of, as a volume, and this one holds none")}$showsItselfAsBuilt(e){c(e instanceof $&&Ha(e,g).some(a=>a.is(je)),"a design shows itself as built, in a paragraph said to be the exhibit, and this one shows nothing")}};n(bo,"DesignSpecification");let U=bo;K([l("a design is a chapter")],U.prototype,"$isAChapter");K([l("a design names the book it is of")],U.prototype,"$namesABook");K([l("a design holds the cover of the book it is of")],U.prototype,"$holdsTheCover");K([l("a design shows itself as built")],U.prototype,"$showsItselfAsBuilt");const uo=class uo extends b{$isAParagraphOfADesignHoldingOneImage(e){c(e instanceof g&&e.chapter?.is(w)===!0&&e.text.find(ot).length===1,"an exhibit is a paragraph of a design that holds one image, and this is not one")}};n(uo,"ExhibitSpecification");let Ve=uo;K([l("an exhibit is a paragraph of a design that holds one image")],Ve.prototype,"$isAParagraphOfADesignHoldingOneImage");const mo=class mo extends b{$saidOfAnEntryLeadingToADesign(e){c(e.is(Z)&&e.annotations.expressed(Z)?.referencedChapter?.is(w)===!0,"a plate is said of an entry that leads to a design, and this is not one")}};n(mo,"PlateSpecification");let Se=mo;K([l("a plate is said of an entry that leads to a design")],Se.prototype,"$saidOfAnEntryLeadingToADesign");const $o=class $o extends b{$isADesign(e){c(e instanceof $&&e.is(w),"a room is a chapter that is a design, and this is not one")}};n($o,"RoomSpecification");let ea=$o;K([l("a room is a chapter that is a design")],ea.prototype,"$isADesign");const Np=o(w),Tp=o(je),pd=o(is),cd=o(ds),ld=o(ps);var hd=Object.defineProperty,fd=Object.getOwnPropertyDescriptor,D=n((p,e,a,r)=>{for(var s=fd(e,a),i=p.length-1,d;i>=0;i--)(d=p[i])&&(s=d(e,a,s)||s);return s&&hd(e,a,s),s},"__decorateClass$d");const V=n((p,e,a)=>{const r=p?.annotations.expressed(W)?.painted;return r===void 0?e:t.jsx(r,{children:e},a)},"painted"),ko=class ko extends C{constructor(){super(...arguments),this.specification=new oe}get name(){return this.chapter?.title?.name??""}get author(){return this.chapter?.annotations.expressed(st)?.name??""}get illustration(){return this.chapter?.text.find(g).find(e=>e.is(ze))}get drawing(){const e=this.illustration?.text.find(Ba)[0];return e===void 0?"":j.copy(e.text).trim()}get scheme(){return this.chapter?.annotations.expressed(W)}get window(){return this.chapter?.annotations.expressed(te)}};n(ko,"$BookshelfCover");let se=ko;const xo=class xo extends f{constructor(){super(...arguments),this.specification=new ta}defines(e){e.classes.add(this,"pa-illustration")}erase(e){e.classes.revert(this)}};n(xo,"$Illustration");let ze=xo;const vo=class vo extends N{constructor(){super(...arguments),this.specification=new Oe,this.$ground="",this.$band="",this.$bandInk="",this.$foot="",this.$footInk="",this.$ink="",this.style=m.div.attrs({className:"pd-scheme"})`
        ${e=>e.$scheme}
    `}get colours(){return[this.$ground,this.$band,this.$bandInk,this.$foot,this.$footInk,this.$ink]}get declarations(){return`--ground: ${this.$ground}; --band: ${this.$band}; --band-ink: ${this.$bandInk}; --foot: ${this.$foot}; --foot-ink: ${this.$footInk}; --ink: ${this.$ink};`}get painted(){return this._painted}$Scheme(...e){this.$Format(...e);const a=this.style;this._painted=r=>t.jsx(a,{$scheme:this.declarations,...r})}defines(e){e.classes.add(this,"pa-scheme"),e.containers.add(this,this._painted)}erase(e){e.classes.revert(this),e.containers.revert(this)}};n(vo,"$Scheme");let W=vo;const yo=class yo extends f{constructor(){super(...arguments),this.specification=new Pe,this.$x="",this.$y=""}get declarations(){return`--window-x: ${this.$x}px; --window-y: ${this.$y}px;`}};n(yo,"$Window");let te=yo;const wo=class wo extends f{constructor(){super(...arguments),this.specification=new De}get cover(){return this._cover}get jacket(){return this._cover?.annotations.expressed(C)}$Volume(...e){this._cover=e.find(a=>a instanceof $),this.$Annotation(...e.filter(a=>a!==this._cover))}defines(e){e.classes.add(this,"pa-volume")}erase(e){e.classes.revert(this)}};n(wo,"$Volume");let I=wo;const jo=class jo extends g{get cover(){return this.$cover?.annotations.expressed(C)}$Jacket(...e){this.$Writing(...e),this._painted=a=>{const r=this.cover?.scheme?.painted;return r===void 0?t.jsx("div",{...a}):t.jsx(r,{...a})},this.containers.add(this,this._painted)}write(){const e=this.cover;if(e===void 0)return;const a=o(y),r=o(Wa);return t.jsxs(t.Fragment,{children:[t.jsx(a,{children:e.name}),t.jsx("span",{className:"pd-drawing",dangerouslySetInnerHTML:{__html:e.drawing}}),t.jsxs(a,{children:[t.jsx(r,{}),e.author]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-jacket")}};n(jo,"$Jacket");let cs=jo;const zo=class zo extends g{constructor(){super(...arguments),this.unfolded=!1}get filedElsewhere(){return this.$subject!==void 0&&this.$subject!==this.$cover}container(e){return super.container({onMouseOver:n(a=>{a.target instanceof Element&&a.target.closest(".pd-filed")!==null&&this.unfold()},"onMouseOver"),onMouseLeave:n(()=>this.fold(),"onMouseLeave"),...e})}unfold(){this.unfolded=!0}fold(){this.unfolded=!1}write(){const e=this.$cover,a=this.$subject;if(e!==void 0)return t.jsxs(t.Fragment,{children:[this.filedElsewhere?V(a,t.jsx("span",{className:"pd-filed",children:this.mark(a)})):void 0,V(e,t.jsx("span",{className:"pd-own",children:this.mark(e)})),t.jsxs("span",{className:"pd-names",children:[V(e,t.jsx("span",{className:"pd-name",children:this.name(e)})),this.filedElsewhere?V(a,t.jsx("span",{className:"pd-name pd-under",children:this.name(a)})):void 0]})]})}mark(e){const a=o(kd),r=o(x);return t.jsx(a,{cover:e,children:t.jsx(r,{children:e.mention.identifier})})}name(e){const a=o(y),r=o(x);return t.jsxs(a,{children:[t.jsx(r,{children:e.mention.identifier}),e.title.name]})}$Define(){super.$Define(),this.classes.add(this,"pd-logo");const e=o(xd);this.annotations.add(this,t.jsx(e,{}))}};n(zo,"$Logo");let aa=zo;const Oo=class Oo extends f{constructor(){super(...arguments),this.specification=new sa}defines(e){e.unfolded&&e.classes.add(this,"pa-unfolded")}erase(e){e.classes.revert(this)}};n(Oo,"$Unfolded");let ls=Oo;const Po=class Po extends b{$saidOfALogo(e){c(e instanceof aa,"unfolded is said of a logo, and this is not one")}};n(Po,"UnfoldedSpecification");let sa=Po;D([l("unfolded is said of a logo")],sa.prototype,"$saidOfALogo");const Do=class Do extends v{constructor(){super(...arguments),this.style=m.span`
        ${e=>e.$vars}
    `}get cover(){return this.$cover?.annotations.expressed(C)}$Mark(...e){this.$Writing(...e);const a=this.style;this._painted=r=>t.jsx(a,{$vars:`${this.cover?.scheme?.declarations??""} ${this.cover?.window?.declarations??""}`,...r}),this.containers.add(this,this._painted)}write(){return t.jsx("span",{className:"pd-drawing",dangerouslySetInnerHTML:{__html:this.cover?.drawing??""}})}$Define(){super.$Define(),this.classes.add(this,"pd-mark")}};n(Do,"$Mark");let hs=Do;const Ao=class Ao extends ri{$carriesItsScheme(e){c(e.is(W),"a bookshelf cover carries its scheme, and this one carries none")}$carriesItsWindow(e){c(e.is(te),"a bookshelf cover carries its window, and this one carries none")}$carriesItsIllustration(e){c(e instanceof $&&e.text.find(g).some(a=>a.is(ze)),"a bookshelf cover carries its illustration, and this one carries none")}};n(Ao,"BookshelfCoverSpecification");let oe=Ao;D([l("a bookshelf cover carries its scheme")],oe.prototype,"$carriesItsScheme");D([l("a bookshelf cover carries its window")],oe.prototype,"$carriesItsWindow");D([l("a bookshelf cover carries its illustration")],oe.prototype,"$carriesItsIllustration");const Co=class Co extends b{$saidOfADrawing(e){c(e instanceof g&&e.chapter?.is(C)===!0&&e.text.find(Ba).length===1,"an illustration is a paragraph of a cover that holds one drawing, and this is not one")}};n(Co,"IllustrationSpecification");let ta=Co;D([l("an illustration is a paragraph of a cover that holds one drawing")],ta.prototype,"$saidOfADrawing");const Io=class Io extends b{$isACover(e){c(e instanceof $&&e.is(C),"a cover has a scheme, and this is not a cover")}$givenItsColours(e){const a=e.annotations.expressed(W)?.colours??[];c(a.every(r=>/^#[0-9a-f]{6}$/iu.test(r)),"a scheme is given its six colours as six hex digits each — the ground, the band and its ink, the foot and its ink, and the ink of the drawing — and this one was given something else")}};n(Io,"SchemeSpecification");let Oe=Io;D([l("a cover has a scheme")],Oe.prototype,"$isACover");D([l("a scheme is given its six colours")],Oe.prototype,"$givenItsColours");const Mo=class Mo extends b{$isACover(e){c(e instanceof $&&e.is(C),"a cover has a window, and this is not a cover")}$givenItsPlace(e){const a=e.annotations.expressed(te);c(/^-?\d+$/u.test(a?.$x??"")&&/^-?\d+$/u.test(a?.$y??""),"a window is given where it stands on the drawing, two whole numbers, and this one was given something else")}};n(Mo,"WindowSpecification");let Pe=Mo;D([l("a cover has a window")],Pe.prototype,"$isACover");D([l("a window is given where it stands on the drawing")],Pe.prototype,"$givenItsPlace");const No=class No extends b{$saidOfAChapterStandingForABook(e){c(e instanceof $&&(e.is(E)||e.is(C)||e.is(w)),"a volume is a chapter that stands for another book, a synopsis of it, a cover filed under it or a design of it, and this is none")}$holdsTheCover(e){const a=[e.annotations.expressed(E)?.means?.identifier,e.annotations.expressed(xn)?.means?.identifier,e.annotations.expressed(st)?.means?.identifier,e.annotations.expressed(w)?.identifier];c(e.annotations.find(I).every(r=>r.cover?.is(C)===!0&&a.includes(r.cover.mention?.identifier)),"a volume holds the cover of a book its chapter stands for, the book a synopsis or a design is of or the subject or author a cover is filed under, and one here holds something else")}};n(No,"VolumeSpecification");let De=No;D([l("a volume is a chapter that stands for another book")],De.prototype,"$saidOfAChapterStandingForABook");D([l("a volume holds the cover of a book its chapter stands for")],De.prototype,"$holdsTheCover");const gd=o(se),En=o(ze),_n=o(W),Gn=o(te),bd=o(I),ud=o(cs),md=o(aa),$d=o(ls),Yn=o(hs),kd=Yn,xd=$d,Ta=class Ta extends ni{constructor(){super(...arguments),this.specification=new z,this.themeProvider=!0,this.style=m.div`
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
    `}get pages(){return this.book.pages}get open(){const e=this.book;return e.open??e.synopsis}$Bound(){const e=this.style,a=this.book;this.style=r=>t.jsx(e,{$at:a.means?.identifier,$scheme:a.cover?.annotations.expressed(W)?.declarations,...r}),super.$Bound()}defines(e){for(const r of e.annotations.after(this))r instanceof Ta&&e.annotations.express(r,!1);super.defines(e),e.classes.add(this,"pa-layout");const a=this.book.open;a!==void 0&&e.classes.add(this,"pa-turned"),a?.is(O)&&e.classes.add(this,"pa-manual")}erase(e){super.erase(e),e.classes.revert(this)}parts(){return[this.paging(),this.regions(),this.areas(),this.phone()]}paging(){return h`
            .pa-page:not(.pa-open) { display: none; }
        `}regions(){return h`
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
        `}areas(){return h`
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
        `}phone(){return h`
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
        `}};n(Ta,"$Layout");let oa=Ta;const ht=o(oa),Fa=class Fa extends f{constructor(){super(...arguments),this.specification=new z}defines(e){for(const a of e.annotations.after(this))a instanceof Fa&&e.annotations.express(a,!1);e.classes.add(this,"pa-tone")}erase(e){e.classes.revert(this)}};n(Fa,"$Tone");let re=Fa;const To=class To extends re{defines(e){super.defines(e),e.classes.add(this,"pa-dark")}};n(To,"$Dark");let fs=To;const Fo=class Fo extends re{defines(e){super.defines(e),e.classes.add(this,"pa-light")}};n(Fo,"$Light");let gs=Fo;const Bo=class Bo extends re{defines(e){super.defines(e),e.classes.add(this,"pa-white-over-black")}};n(Bo,"$WhiteOverBlack");let bs=Bo;const J=o(re),qn=o(fs),be=o(gs),vd=o(bs);var yd=Object.defineProperty,wd=Object.getOwnPropertyDescriptor,jd=n((p,e,a,r)=>{for(var s=wd(e,a),i=p.length-1,d;i>=0;i--)(d=p[i])&&(s=d(e,a,s)||s);return s&&yd(e,a,s),s},"__decorateClass$c");const Wo=class Wo extends v{write(){const e=this.book.body;return`${e.indexOf(this.chapter)+1} of ${e.length}`}$Define(){super.$Define(),this.classes.add(this,"pd-count")}};n(Wo,"$Count");let us=Wo;const Ho=class Ho extends f{constructor(){super(...arguments),this.specification=new Ae}defines(e){e.classes.add(this,"pa-before")}erase(e){e.classes.revert(this)}};n(Ho,"$Before");let ms=Ho;const Lo=class Lo extends f{constructor(){super(...arguments),this.specification=new Ae}defines(e){e.classes.add(this,"pa-after")}erase(e){e.classes.revert(this)}};n(Lo,"$After");let $s=Lo;const Ro=class Ro extends b{$saidOfAWordOfATurn(e){c(e instanceof v&&e.parent instanceof ra,"this is said of a word of a turn, and here it is said of something else")}};n(Ro,"OfATurnSpecification");let Ae=Ro;jd([l("this is said of a word of a turn")],Ae.prototype,"$saidOfAWordOfATurn");const zd=o(us),Od=o(ms),Pd=o($s),Eo=class Eo extends g{get before(){const e=this.book.body;return e[e.indexOf(this.chapter)-1]??this.chapter}get after(){const e=this.book.body;return e[e.indexOf(this.chapter)+1]??this.chapter}write(){const e=o(y),a=o(zd),r=o(Od),s=o(Pd),i=o(this.before===this.chapter?Ra:x),d=o(this.after===this.chapter?Ra:x);return t.jsxs(t.Fragment,{children:[t.jsxs(e,{children:[t.jsx(r,{}),t.jsx(i,{children:this.before.mention.identifier}),"← ",this.before.title.name]}),t.jsx(a,{}),t.jsxs(e,{children:[t.jsx(s,{}),t.jsx(d,{children:this.after.mention.identifier}),this.after.title.name," →"]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-turn")}};n(Eo,"$Turn");let ra=Eo;const Dd=o(ra);var Ad=Object.defineProperty,Cd=Object.getOwnPropertyDescriptor,He=n((p,e,a,r)=>{for(var s=r>1?void 0:r?Cd(e,a):e,i=p.length-1,d;i>=0;i--)(d=p[i])&&(s=(r?d(e,a,s):d(s))||s);return r&&s&&Ad(e,a,s),s},"__decorateClass$b");const _o=class _o extends ii{constructor(){super(...arguments),this.specification=new P}get chapters(){return this.text.find($).filter(e=>[...e.classes].includes("pd-canonical"))}get laidOutChapters(){return[this.cover,this.synopsis,this.table,...this.chapters]}get pages(){return[this.synopsis,...this.chapters].filter(e=>e!==void 0)}get body(){const e=this.appendix;return this.chapters.filter(a=>!e.includes(a))}get appendix(){const e=this.table;if(e===void 0)return[];const a=e.text.find(A).filter(r=>r.is(we)).flatMap(r=>r.text.find(g).map(s=>B(s)?.identifier));return this.chapters.filter(r=>a.includes(r.mention?.identifier??""))}get open(){return this.$bookmark===void 0?void 0:this.chapterAt(this.$bookmark)}get tones(){return[qn,be,vd]}get topics(){return this.cover?.annotations.find(vn)??[]}write(){return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"pd-library",children:this.library()}),t.jsx("div",{className:"pd-me",children:this.me()}),t.jsx("div",{className:"pd-holds",children:this.holds()}),t.jsx("div",{className:"pd-head",children:this.head()}),t.jsxs("div",{className:"pd-pages",children:[this.aboveThePages(),this.pages.map((e,a)=>{const r=o(e);return t.jsx(r,{},a)}),this.belowThePages()]})]})}library(){if(this._logo===void 0)return;const e=o(this._logo);return t.jsx(e,{})}me(){const e=o(Yn),a=o(x),r=o(wi),s=this.coverOf(this.author?.means?.identifier);return t.jsxs(t.Fragment,{children:[this.byline(),s===void 0?void 0:this.painted(s,t.jsx(e,{cover:s,children:t.jsx(a,{children:s.mention.identifier})})),this.topics.length===0?void 0:t.jsx(r,{cover:this.cover})]})}painted(e,a,r){return V(e,a,r)}holds(){const e=o(this.table);return t.jsx(e,{})}head(){const e=o(this.cover);return t.jsxs(t.Fragment,{children:[t.jsx(e,{}),t.jsx("div",{className:"pd-switches",children:this.switches()})]})}aboveThePages(){}belowThePages(){}chapterAt(e){return(this._chapterByPlace??this.chapterByPlace()).get(e)}chapterByPlace(){const e=new Map;for(const a of this.chapters)for(const r of this.sections(a))r.mention!==void 0&&!e.has(r.mention.identifier)&&e.set(r.mention.identifier,a);for(const a of this.chapters)a.mention!==void 0&&e.set(a.mention.identifier,a);return e}coverOf(e){if(e!==void 0)return this.means?.identifier===e?this.cover:this.cover?.annotations.find(I).map(a=>a.cover).find(a=>a?.mention?.identifier===e)}byline(){const e=o(Cn);return t.jsx(e,{chapter:this.cover})}root(){const e=o(rd);return t.jsx(e,{cover:this.cover})}switches(){}sections(e){return e.text.find(A).flatMap(a=>[a,...this.sections(a)])}sectionOf(e){const a=this.table;return a===void 0?void 0:this.sections(a).find(r=>r.canonical?.name===e.name)}turn(){this.bookmark!==this.cover&&super.turn()}$Define(){super.$Define();const e=o(ht),a=o(J);this.annotations.add(this,t.jsx(e,{}),t.jsx(a,{}))}$Bound(){this._chapterByPlace=this.chapterByPlace();const e=o(Hn),a=this.table?.annotations.expressed(G);for(const i of a?.parts??[]){const d=this.sectionOf(i);d===void 0||d.is(Ke)||!i.chapters.some(u=>u.is(O))||d.annotations.add(this,t.jsx(e,{}))}const r=this.root();r!==void 0&&this.table?.text.add(this,r);const s=o(md);this._logo=di.chemical(t.jsx(s,{cover:this.cover,subject:this.coverOf(this.subject?.means?.identifier)}),this),this.turns(),super.$Bound()}turns(){const e=o(Dd);for(const a of this.body)a.text.add(this,t.jsx(e,{}))}};n(_o,"$LibraryBook");let M=_o;He([yn()],M.prototype,"_chapterByPlace",2);const Go=class Go extends pi{$holdsOnlyChapters(e){c([...e.text].every(a=>a instanceof $),"a book of this library holds only chapters, and this one holds something else")}$placesEveryChapter(e){c(e.text.find($).every(a=>e.laidOutChapters.includes(a)),"a book of this library has a place for every chapter it holds, and this one holds a chapter it places nowhere")}$onlyAChapterAppends(e){c(e.text.find($).every(a=>e.chapters.includes(a)||!a.is(tt)),"only an ordinary chapter files a file, and here a cover, a synopsis or a table of contents files one")}$listsEachManualPart(e){const r=(e.table?.annotations.expressed(G)?.parts??[]).find(s=>s.chapters.some(i=>i.is(O))&&e.sectionOf(s)===void 0);c(r===void 0,`a part read as a manual is listed under a section headed with its name, and "${r?.name}" has none`)}};n(Go,"LibraryBookSpecification");let P=Go;He([l("a book of this library holds only chapters")],P.prototype,"$holdsOnlyChapters",1);He([l("a book of this library has a place for every chapter it holds")],P.prototype,"$placesEveryChapter",1);He([l("only an ordinary chapter files a file")],P.prototype,"$onlyAChapterAppends",1);He([l("a part read as a manual is listed under a section headed with its name")],P.prototype,"$listsEachManualPart",1);const Zn=o(M);o(Zn,fe)($i);o(Zn,J)(qn);var Id=Object.defineProperty,Md=Object.getOwnPropertyDescriptor,Nd=n((p,e,a,r)=>{for(var s=Md(e,a),i=p.length-1,d;i>=0;i--)(d=p[i])&&(s=d(e,a,s)||s);return s&&Id(e,a,s),s},"__decorateClass$a");const Yo=class Yo extends M{constructor(){super(...arguments),this.specification=new ia}get open(){return super.open??this.body[0]}head(){}switches(){}root(){}$Define(){super.$Define(),this.$is=[lt,Tn]}$Bound(){const e=o(Hn);for(const a of this.table?.text.find(A)??[])a.annotations.add(this,t.jsx(e,{})),a.is(we)&&(a.$is=[Wn]);super.$Bound()}};n(Yo,"$Manual");let na=Yo;const qo=class qo extends P{$everyChapterHasABrief(e){c(e.chapters.every(a=>a.text.find(g).some(r=>r.is(Ge))),"every chapter of a manual opens with a brief, and one here has none")}};n(qo,"ManualSpecification");let ia=qo;Nd([l("every chapter of a manual opens with a brief")],ia.prototype,"$everyChapterHasABrief");const ft=o(na);o(ft,J)(be);var Td=Object.defineProperty,Fd=Object.getOwnPropertyDescriptor,gt=n((p,e,a,r)=>{for(var s=Fd(e,a),i=p.length-1,d;i>=0;i--)(d=p[i])&&(s=d(e,a,s)||s);return s&&Td(e,a,s),s},"__decorateClass$9");const Zo=class Zo extends f{constructor(){super(...arguments),this.specification=new ne}get date(){return this.text.find(rt)[0]}defines(e){e.classes.add(this,"pa-dated")}erase(e){e.classes.revert(this)}note(){const e=o(this.date);return t.jsx(e,{})}};n(Zo,"$Dated");let _=Zo;const Uo=class Uo extends b{$saidOfAChapter(e){c(e instanceof $,"dated is said of a chapter, and this is not one")}$datedOnce(e){c(e.annotations.containsOne(_),"a chapter is dated once, and this one is dated more than once")}$givenOneDate(e){c(e.annotations.expressed(_)?.text.find(rt).length===1,"a dated chapter is given one date, and this one is given none or more than one")}};n(Uo,"DatedSpecification");let ne=Uo;gt([l("dated is said of a chapter")],ne.prototype,"$saidOfAChapter");gt([l("a chapter is dated once")],ne.prototype,"$datedOnce");gt([l("a dated chapter is given one date")],ne.prototype,"$givenOneDate");const Fp=o(_),Xo=class Xo extends Z{constructor(){super(...arguments),this.label=m.span.attrs({className:"pa-number"})``}get number(){return this.book.body.indexOf(this.referencedChapter)+1}get keyed(){return this.referencedChapter?.annotations.expressed(R)}note(){const e=this.label,a=o(Mn),r=this.keyed;return t.jsxs(t.Fragment,{children:[super.note(),r===void 0?void 0:t.jsx(a,{keyed:r}),this.number===0?void 0:t.jsx(e,{children:String(this.number)})]})}};n(Xo,"$NumberedEntry");let ks=Xo;const Bd=o(ks);o(ft,Bn)(Bd);const Ko=class Ko extends se{constructor(){super(...arguments),this.style=m.header`
        .pd-chapter.pa-cover { margin-block: 0; }
        .pa-cover .pd-title {
            font-size: calc(1.04 * ${({theme:e})=>e.size});
            font-weight: 600;
        }
    `}};n(Ko,"$ManualCover");let xs=Ko;const Jo=class Jo extends G{constructor(){super(...arguments),this.style=m.nav`
        .pa-table-of-contents .pa-reference { color: inherit; text-decoration: none; }
    `}};n(Jo,"$ManualTableOfContents");let vs=Jo;const Bp=o(xs),Wp=o(vs),Qo=class Qo extends Y{constructor(){super(...arguments),this.measure="104ch",this.holdsColumn="272px",this.barHeight="52px",this.space="24px",this.size="14px",this.beat="0.22s",this.serif="'Source Serif 4', Georgia, serif",this.paper="#fdfcfa",this.ink="#343c4a",this.heading="#1a1f36",this.soft="#727d8c",this.faint="#9ea8b5",this.line="#e4e9f2",this.tint="#f0f4fc",this.barTint="#f8fafe",this.side="#f7f8fb",this.sideInk="#3a4452",this.sideDim="#6b7684",this.sideLine="#e0e4eb",this.sky="#e3edfb",this.skyInk="#4a6ea0",this.accent="#4a6ea0",this.colour="#4fb3a8",this.radius="6px",this.wash="linear-gradient(135deg, #f1f5fd 0%, #fdfcfa 48%, #fdf5ee 100%)"}parts(){return[...super.parts(),this.tree(),this.icons(),this.small()]}library(){return h`
            ${super.library()}
            .pd-book.pa-tone .pd-library {
                background: linear-gradient(180deg, #fbfcfe 0%, #f8fafe 60%, #f1f4fa 100%);
                border-block-end: thin solid #dfe4ed;
                box-shadow: 0 1px 0 rgba(43, 54, 60, 0.05);
            }
        `}holds(){return h`
            ${super.holds()}
            .pd-holds .pd-paragraph.pa-entry::before { content: none; }
        `}page(){return h`
            ${super.page()}
            .pd-book { line-height: 1.6; }
            .pd-book.pa-layout { background: ${({theme:e})=>e.wash}; }
            .pd-book .pd-head { display: none; padding: 0; }
        `}tree(){return h`
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
        `}icons(){return h`
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
        `}small(){return h`
            @media (max-width: ${({theme:e})=>e.narrow}) {
                .pd-holds, .pd-library { border-inline-end: none; border-block-end: thin solid ${({theme:e})=>e.line}; }
                .pd-holds .pd-chapter { min-height: 0; }
            }
        `}};n(Qo,"$ManualTheme");let ys=Qo;const Wd=o(ys);o(ft,fe)(Wd);var Hd=Object.defineProperty,Ld=Object.getOwnPropertyDescriptor,Rd=n((p,e,a,r)=>{for(var s=Ld(e,a),i=p.length-1,d;i>=0;i--)(d=p[i])&&(s=d(e,a,s)||s);return s&&Hd(e,a,s),s},"__decorateClass$8");const Vo=class Vo extends f{constructor(){super(...arguments),this.specification=new da}defines(e){e.classes.add(this,"pa-first")}erase(e){e.classes.revert(this)}};n(Vo,"$First");let ws=Vo;const So=class So extends b{$saidOfAParagraph(e){c(e instanceof g,"first is said of a paragraph, and this is not one")}};n(So,"FirstSpecification");let da=So;Rd([l("first is said of a paragraph")],da.prototype,"$saidOfAParagraph");const Hp=o(ws),er=class er extends Y{constructor(){super(...arguments),this.serif="'Source Serif 4', Georgia, serif",this.paper="#fdfcfa",this.ink="#343c4a",this.soft="#727d8c",this.faint="#9ea8b5",this.line="#e4e9f2",this.tint="#f0f4fc",this.barTint="#f8fafe",this.sky="#e3edfb",this.skyInk="#4a6ea0",this.accent="#4a6ea0",this.wash="linear-gradient(135deg, #f2f6fd 0%, #fdfcfa 48%, #fdf6f1 100%)",this.side="#f7f8fb",this.sideInk="#3a4452",this.sideDim="#7f8a9b",this.sideLine="#e3e7ee",this.barHeight="52px",this.holdsColumn="232px",this.space="24px",this.cover="132px",this.volume="184px",this.radius="6px",this.spine="inset 3px 0 0 rgba(0, 0, 0, 0.08), inset 4px 0 0 rgba(255, 255, 255, 0.35), 0 6px 12px -10px rgba(44, 52, 64, 0.3)",this.lift="inset 3px 0 0 rgba(0, 0, 0, 0.08), inset 4px 0 0 rgba(255, 255, 255, 0.35), 0 10px 16px -12px rgba(44, 52, 64, 0.35)",this.openSpine="inset 7px 0 0 rgba(0, 0, 0, 0.07), inset 9px 0 0 rgba(255, 255, 255, 0.45), 0 12px 22px -16px rgba(44, 52, 64, 0.35)"}parts(){return[...super.parts(),this.shelf(),this.jackets(),this.desk(),this.unfolded(),this.small()]}page(){return h`
            font-family: ${({theme:e})=>e.font};
            font-size: ${({theme:e})=>e.size};
            line-height: 1.55;
            color: ${({theme:e})=>e.ink};
            background: ${({theme:e})=>e.wash};
            min-height: 100vh;
        `}library(){return h`
            ${super.library()}
            .pd-names .pd-name { font-family: ${({theme:e})=>e.serif}; font-size: calc(1.286 * ${({theme:e})=>e.size}); font-weight: 700; letter-spacing: -0.015em; }
        `}head(){return h`
            .pd-head { padding: 0; }
            .pd-head .pa-illustration { display: none; }
        `}holds(){return h`
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
        `}shelf(){return h`
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
        `}jackets(){return h`
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
        `}desk(){return h`
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
        `}unfolded(){return h`
            .pa-unfolded-desk .pd-shelf { display: none; }
            .pa-unfolded-desk .pd-container.pd-catalogue-desk.pa-open { height: auto; margin-block-end: 0; }
            .pa-unfolded-desk .pd-container.pd-catalogue-desk.pa-open .pd-paragraph.pd-jacket { position: sticky; top: calc(${({theme:e})=>e.space} * 0.833); }
            .pa-unfolded-desk .pd-container.pd-catalogue-desk.pa-open .pd-words { max-height: none; max-width: 72ch; overflow: visible; mask-image: none; }
            .pa-unfolded-desk .pd-container.pd-catalogue-desk.pa-open .pd-words .pd-paragraph { font-size: calc(1.143 * ${({theme:e})=>e.size}); line-height: 1.6; }
            .pa-unfolded-desk .pd-container.pd-catalogue-desk.pa-open .pd-word.pd-switch { top: calc(${({theme:e})=>e.space} * 0.667); right: ${({theme:e})=>e.space}; bottom: auto; }
            .pa-unfolded-desk .pd-container.pd-catalogue-desk.pa-open .pd-word.pd-switch::after { transform: translateY(calc(${({theme:e})=>e.space} / 24)) rotate(180deg); }
        `}context(){return h`
            ${super.context()}
            .pd-book.pa-manual .pd-holds .pd-tree-folder { margin-block-start: 0; }
            .pd-book.pa-manual .pd-holds .pd-section.pa-appendix { margin-block-start: 0; padding-block-start: 0; border-block-start: 0; opacity: 1; }
            .pd-book.pa-manual .pd-holds .pd-section.pa-appendix .pd-heading { font-size: calc(0.75 * ${({theme:e})=>e.size}); }
            .pd-book.pa-manual .pd-holds .pd-section.pa-appendix .pa-entry { font-size: calc(0.964 * ${({theme:e})=>e.size}); font-weight: 500; }
            .pd-book.pa-manual .pd-holds .pd-section.pa-appendix .pa-entry::before { background: ${({theme:e})=>e.skyInk}; }
            .pd-book.pa-manual .pd-shelf { display: none; }
        `}small(){return h`
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
        `}};n(er,"$Bookshelf");let js=er;const Ed=o(js);var _d=Object.defineProperty,Gd=Object.getOwnPropertyDescriptor,La=n((p,e,a,r)=>{for(var s=r>1?void 0:r?Gd(e,a):e,i=p.length-1,d;i>=0;i--)(d=p[i])&&(s=(r?d(e,a,s):d(s))||s);return r&&s&&_d(e,a,s),s},"__decorateClass$7");const ar=class ar extends M{get books(){return this.text.find($).filter(e=>e.is(E)&&e!==this.synopsis)}get laidOutChapters(){return[...super.laidOutChapters,...this.books]}get pages(){return[this.synopsis,...this.books,...this.chapters]}head(){return t.jsx("div",{className:"pd-switches",children:this.switches()})}belowThePages(){return t.jsx("div",{className:"pd-shelf",children:this.volumes()})}volumes(){const e=o(y),a=o(x);return(this.table?.annotations.expressed(ae)?.entries??[]).map((s,i)=>{const d=B(s).identifier,u=this.chapterAt(d),k=u===void 0?this.coverOf(d):this.jacketOf(u);if(k!==void 0)return t.jsxs("div",{className:"pd-volume",children:[this.jacket(k,d),t.jsx("div",{className:"pd-paragraph pd-name",children:t.jsxs(e,{children:[t.jsx(a,{children:d}),k.title.name]})})]},i)})}jacket(e,a){if(e===void 0)return;const r=o(ud),s=o(x);return a===void 0?t.jsx(r,{cover:e}):t.jsx(r,{cover:e,children:t.jsx(s,{children:a})})}line(e){if(e===void 0)return;const a=o(Cn),r=o(yi);return t.jsxs(t.Fragment,{children:[t.jsx(a,{cover:e}),t.jsx(r,{cover:e})]})}wayIntoTheBook(e){if(e===void 0)return;const a=o(y),r=o(x),s=e.mention.identifier;return t.jsx("div",{className:"pd-paragraph pd-read",children:t.jsxs(a,{children:[t.jsx(r,{children:s}),`Read ${e.title.name}`]})})}jacketOf(e){return e===this.synopsis?this.cover:e.annotations.expressed(I)?.cover??(this.appendix.includes(e)?void 0:this.cover)}coverOf(e){return super.coverOf(e)??this.books.map(a=>a.annotations.expressed(I)?.cover).find(a=>a!==void 0&&a.mention?.identifier===e)}chapterAt(e){return super.chapterAt(e)??this.books.find(a=>this.placeOf(a)===e)}placeOf(e){const a=e.title?.annotations.expressed(nt)?.identifier,r=this.means?.identifier;if(!(a===void 0||r===void 0))return`${r.replace(/\/+$/u,"")}/#${a}`}$Bound(){const e=o(Ud);for(const a of[this.synopsis,...this.books])a?.annotations.add(this,t.jsx(e,{}));super.$Bound()}};n(ar,"$Catalogue");let zs=ar;const sr=class sr extends N{constructor(){super(...arguments),this.specification=new pa,this.card=m.div`
        &:not(.pa-open) { display: none; }
    `}get chapter(){return this.parent}get catalogue(){return this.book}get isTheFront(){return this.chapter===this.catalogue.synopsis}get cover(){return this.catalogue.jacketOf(this.chapter)}$CatalogueDesk(...e){this.$Format(...e);const a=o(it),r=this.card;this.style=({className:s,children:i})=>{const d=this.catalogue,u=this.cover,k=[...this.chapter.classes].includes("pa-open"),F=this.isTheFront?o(d.title):void 0;return d.painted(u,t.jsxs(r,{className:`${s??""} pd-catalogue-desk${k?" pa-open":""}`.trim(),children:[d.jacket(u),t.jsxs("div",{className:"pd-words",children:[F===void 0?void 0:t.jsx(F,{}),i]}),u===void 0||this.isTheFront?void 0:t.jsx("div",{className:"pd-line",children:d.line(u)}),d.wayIntoTheBook(u),u===void 0?void 0:t.jsx(a,{chapter:this.chapter,annotation:Zd,children:"read on"})]}))}}defines(e){super.defines(e),e.classes.add(this,"pa-catalogue-desk")}erase(e){super.erase(e),e.classes.revert(this)}};n(sr,"$CatalogueDesk");let Os=sr;const tr=class tr extends b{$holdsASynopsis(e){c(e instanceof $&&e.is(E),"a catalogue desk holds a synopsis, and this is not one")}};n(tr,"CatalogueDeskSpecification");let pa=tr;La([l("a catalogue desk holds a synopsis")],pa.prototype,"$holdsASynopsis",1);const or=class or extends ci{get identifier(){return this._book??super.identifier}$Bound(){super.$Bound(),this._book=this.chapter?.annotations.expressed(E)?.means?.identifier}};n(or,"$BookLink");let ca=or;La([yn()],ca.prototype,"_book",2);const rr=class rr extends f{constructor(){super(...arguments),this.specification=new la}defines(e){e.classes.add(this,"pa-caption")}erase(e){e.classes.revert(this)}};n(rr,"$Caption");let Ps=rr;const nr=class nr extends f{constructor(){super(...arguments),this.specification=new ha}defines(e){e.classes.add(this,"pa-arrow")}erase(e){e.classes.revert(this)}};n(nr,"$Arrow");let Ds=nr;const ir=class ir extends f{constructor(){super(...arguments),this.specification=new z}defines(e){e.classes.add(this,"pa-unfolded-desk")}erase(e){e.classes.revert(this)}};n(ir,"$UnfoldedDesk");let As=ir;const dr=class dr extends b{$isAParagraph(e){c(e instanceof g,"a caption is a paragraph, and this is not one")}};n(dr,"CaptionSpecification");let la=dr;La([l("a caption is a paragraph")],la.prototype,"$isAParagraph",1);const pr=class pr extends b{$isAWordOfTheTable(e){c(e instanceof v&&e.chapter?.is(G)===!0,"an arrow is a word of the table of contents, and this is not one")}};n(pr,"ArrowSpecification");let ha=pr;La([l("an arrow is a word of the table of contents")],ha.prototype,"$isAWordOfTheTable",1);const bt=o(zs),Yd=o(Os),qd=o(ca),Lp=o(Ps),Rp=o(Ds),Zd=o(As),Ud=Yd;o(bt,Ra)(qd);o(bt,fe)(Ed);o(bt,J)(be);var Xd=Object.defineProperty,Kd=Object.getOwnPropertyDescriptor,Le=n((p,e,a,r)=>{for(var s=Kd(e,a),i=p.length-1,d;i>=0;i--)(d=p[i])&&(s=d(e,a,s)||s);return s&&Xd(e,a,s),s},"__decorateClass$6");const cr=class cr extends f{constructor(){super(...arguments),this.specification=new ga}defines(e){e.classes.add(this,"pa-question")}erase(e){e.classes.revert(this)}};n(cr,"$Question");let Cs=cr;const lr=class lr extends f{constructor(){super(...arguments),this.specification=new ba}defines(e){e.classes.add(this,"pa-answer")}erase(e){e.classes.revert(this)}};n(lr,"$Answer");let Is=lr;const hr=class hr extends f{constructor(){super(...arguments),this.specification=new ua}defines(e){e.classes.add(this,"pa-decision")}erase(e){e.classes.revert(this)}};n(hr,"$Decision");let fa=hr;const fr=class fr extends f{constructor(){super(...arguments),this.specification=new ma}defines(e){e.classes.add(this,"pa-pain")}erase(e){e.classes.revert(this)}};n(fr,"$Pain");let Ms=fr;const gr=class gr extends f{constructor(){super(...arguments),this.specification=new $a}defines(e){e.classes.add(this,"pa-solution")}erase(e){e.classes.revert(this)}};n(gr,"$Solution");let Ns=gr;const br=class br extends b{$isAParagraph(e){c(e instanceof g,"a question is a paragraph, and this is not one")}};n(br,"QuestionSpecification");let ga=br;Le([l("a question is a paragraph")],ga.prototype,"$isAParagraph");const ur=class ur extends b{$isAParagraph(e){c(e instanceof g,"an answer is a paragraph, and this is not one")}};n(ur,"AnswerSpecification");let ba=ur;Le([l("an answer is a paragraph")],ba.prototype,"$isAParagraph");const mr=class mr extends b{$isAParagraph(e){c(e instanceof g,"a decision is a paragraph, and this is not one")}};n(mr,"DecisionSpecification");let ua=mr;Le([l("a decision is a paragraph")],ua.prototype,"$isAParagraph");const $r=class $r extends b{$isAParagraph(e){c(e instanceof g,"a pain is a paragraph, and this is not one")}};n($r,"PainSpecification");let ma=$r;Le([l("a pain is a paragraph")],ma.prototype,"$isAParagraph");const kr=class kr extends b{$isAParagraph(e){c(e instanceof g,"a solution is a paragraph, and this is not one")}};n(kr,"SolutionSpecification");let $a=kr;Le([l("a solution is a paragraph")],$a.prototype,"$isAParagraph");const Ep=o(Cs),_p=o(Is),Gp=o(fa),Yp=o(Ms),qp=o(Ns);var Jd=Object.defineProperty,Qd=Object.getOwnPropertyDescriptor,Q=n((p,e,a,r)=>{for(var s=Qd(e,a),i=p.length-1,d;i>=0;i--)(d=p[i])&&(s=d(e,a,s)||s);return s&&Jd(e,a,s),s},"__decorateClass$5");const xr=class xr extends f{constructor(){super(...arguments),this.specification=new ie,this.span=m.span.attrs({className:"pd-number"})``,this.close=m.span.attrs({className:"pd-close"})``}get number(){const e=j.copy(this.text).trim();return e===""?NaN:Number(e)}note(){const e=this.span,a=this.close,r=o(y),s=o(x),i=this.chapter?.mention?.identifier;return t.jsxs(t.Fragment,{children:[t.jsx(e,{children:this.number}),i===void 0?void 0:t.jsx(a,{children:t.jsxs(r,{children:[t.jsx(s,{children:i}),"×"]})})]})}defines(e){e.classes.add(this,"pa-concept")}erase(e){e.classes.revert(this)}};n(xr,"$Concept");let H=xr;const vr=class vr extends f{constructor(){super(...arguments),this.specification=new Ie}defines(e){e.classes.add(this,"pa-designed")}erase(e){e.classes.revert(this)}};n(vr,"$Designed");let Ts=vr;const yr=class yr extends f{constructor(){super(...arguments),this.specification=new Ie}defines(e){e.classes.add(this,"pa-decided")}erase(e){e.classes.revert(this)}};n(yr,"$Decided");let Fs=yr;const wr=class wr extends f{constructor(){super(...arguments),this.specification=new de}defines(e){e.classes.add(this,"pa-desk")}erase(e){e.classes.revert(this)}};n(wr,"$Desk");let ka=wr;const jr=class jr extends f{constructor(){super(...arguments),this.specification=new de}defines(e){e.classes.add(this,"pa-phone")}erase(e){e.classes.revert(this)}};n(jr,"$Phone");let xa=jr;const zr=class zr extends f{constructor(){super(...arguments),this.specification=new de}defines(e){e.classes.add(this,"pa-thumbnail")}erase(e){e.classes.revert(this)}};n(zr,"$Thumbnail");let Ce=zr;const Or=class Or extends f{constructor(){super(...arguments),this.specification=new pe}defines(e){e.classes.add(this,"pa-precedent")}erase(e){e.classes.revert(this)}};n(Or,"$Precedent");let Bs=Or;const Pr=class Pr extends f{constructor(){super(...arguments),this.specification=new pe}defines(e){e.classes.add(this,"pa-source")}erase(e){e.classes.revert(this)}};n(Pr,"$Source");let Ws=Pr;const Dr=class Dr extends f{constructor(){super(...arguments),this.specification=new va}defines(e){e.classes.add(this,"pa-where")}erase(e){e.classes.revert(this)}};n(Dr,"$Where");let Hs=Dr;const Ar=class Ar extends b{$isASection(e){c(e instanceof A,"a concept is a section, and this is not one")}$givenItsNumber(e){c(Number.isInteger(e.annotations.expressed(H)?.number),"a concept is given its number, and this one was given something else")}$photographedThreeWays(e){const a=e.text.find(g);c([ka,xa,Ce].every(r=>a.some(s=>s.is(r))),"a concept is photographed at a desk, at a phone, and small, and this one is missing a photograph")}};n(Ar,"ConceptSpecification");let ie=Ar;Q([l("a concept is a section")],ie.prototype,"$isASection");Q([l("a concept is given its number")],ie.prototype,"$givenItsNumber");Q([l("a concept is photographed at a desk, at a phone, and small")],ie.prototype,"$photographedThreeWays");const Cr=class Cr extends b{$isAParagraphHoldingOneImage(e){c(e instanceof g&&e.text.find(ot).length===1,"a photograph is a paragraph that holds one image, and this is not one")}};n(Cr,"PhotographSpecification");let de=Cr;Q([l("a photograph is a paragraph that holds one image")],de.prototype,"$isAParagraphHoldingOneImage");const Ir=class Ir extends b{$saidOfAParagraphOfAConcept(e){c(e instanceof g&&e.parent instanceof li&&e.parent.is(H),"this is said of a paragraph of a concept, and here it is said of something else")}};n(Ir,"OfAConceptSpecification");let pe=Ir;Q([l("this is said of a paragraph of a concept")],pe.prototype,"$saidOfAParagraphOfAConcept");const Mr=class Mr extends pe{$refersToWhereItIsBuilt(e){c(e.text.find(v).some(a=>a.is($e)),"a where refers to where the concept is built, and this one refers nowhere")}};n(Mr,"WhereSpecification");let va=Mr;Q([l("a where refers to where the concept is built")],va.prototype,"$refersToWhereItIsBuilt");const Nr=class Nr extends b{$saidOfAConcept(e){c(e.is(H),"this is said of a concept, and here it is said of something else")}};n(Nr,"OfAConceptSectionSpecification");let Ie=Nr;Q([l("this is said of a concept")],Ie.prototype,"$saidOfAConcept");const Zp=o(H),Up=o(Ts),Xp=o(Fs),Kp=o(ka),Jp=o(xa),Qp=o(Ce),Vp=o(Bs),Sp=o(Ws),ec=o(Hs);var Vd=Object.defineProperty,Sd=Object.getOwnPropertyDescriptor,Un=n((p,e,a,r)=>{for(var s=Sd(e,a),i=p.length-1,d;i>=0;i--)(d=p[i])&&(s=d(e,a,s)||s);return s&&Vd(e,a,s),s},"__decorateClass$4");const ep=n((p,e)=>p.chapters.flatMap(a=>p.sections(a)).find(a=>a.is(H)&&a.mention?.identifier===e),"conceptAt"),ap=n(p=>{const e=p.text.find(g).find(a=>a.is(Ce))?.text.find(ot)[0];return e===void 0?"":e.contents||j.copy(e.text)},"thumbnailOf"),Tr=class Tr extends N{constructor(){super(...arguments),this.specification=new wa,this.themeProvider=!0,this.style=m.div`
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
    `}get chapter(){return this.parent}get concepts(){return this.book.sections(this.chapter).filter(e=>e.is(H))}get open(){return this.concepts.find(e=>e.mention?.identifier===this.book?.$bookmark)}defines(e){super.defines(e),e.classes.add(this,"pa-gallery");const a=this.open,r=this.concepts.find(s=>[...s.classes].includes("pa-open"));r!==a&&(r?.classes.revert(this),a?.classes.add(this,"pa-open"))}erase(e){super.erase(e),e.classes.revert(this)}};n(Tr,"$Gallery");let ya=Tr;const Fr=class Fr extends N{constructor(){super(...arguments),this.specification=new ja,this.strip=m.div`
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
    `}get paragraph(){return this.parent}get places(){return this.paragraph.text.find(v).map(e=>e.annotations.expressed($e)?.identifier).filter(e=>e!==void 0)}get concepts(){const e=this.book;return[...new Set(this.places.map(a=>ep(e,a)).filter(a=>a!==void 0))]}get chosen(){const e=this.paragraph.parent?.text.find(g).filter(a=>a.is(fa))??[];return new Set(e.flatMap(a=>a.text.find(v).map(r=>r.annotations.expressed($e)?.identifier)).filter(a=>a!==void 0))}$Strip(...e){this.$Format(...e);const a=this.strip,r=o(y),s=o(x);this.style=({className:i,children:d})=>{const u=this.chosen;return t.jsxs(a,{className:`${i??""} pd-strip`.trim(),children:[this.concepts.map((k,F)=>{const ue=k.mention.identifier;return t.jsxs(r,{children:[t.jsx(s,{children:ue}),t.jsxs("span",{className:`pd-thumb${u.has(ue)?" pd-chosen":""}`,children:[t.jsx("img",{src:ap(k),alt:""}),t.jsxs("span",{className:"pd-name",children:[t.jsx("span",{className:"pd-number",children:k.annotations.expressed(H)?.number}),k.canonical?.name]})]})]},F)}),t.jsx("span",{className:"pd-said",children:d})]})}}defines(e){super.defines(e),e.classes.add(this,"pa-strip")}erase(e){super.erase(e),e.classes.revert(this)}};n(Fr,"$Strip");let Ls=Fr;const Br=class Br extends b{$isAChapter(e){c(e instanceof $,"a gallery is a chapter, and this is not one")}};n(Br,"GallerySpecification");let wa=Br;Un([l("a gallery is a chapter")],wa.prototype,"$isAChapter");const Wr=class Wr extends b{$isAParagraphReferringToConcepts(e){c(e instanceof g&&e.text.find(v).some(a=>a.annotations.expressed($e)!==void 0),"a strip is a paragraph that refers to concepts, and this one refers to nothing")}};n(Wr,"StripSpecification");let ja=Wr;Un([l("a strip is a paragraph that refers to concepts")],ja.prototype,"$isAParagraphReferringToConcepts");const ac=o(ya),sc=o(Ls),Hr=class Hr extends Y{constructor(){super(...arguments),this.accent="#23407a",this.ink="#343c4a",this.heading="#1a1f36",this.soft="#727d8c",this.faint="#9ea8b5",this.line="#e4e9f2",this.paper="#fdfcfa",this.side="#f8f9fb",this.holdsColumn="256px",this.barHeight="52px",this.card="12.5rem",this.shadow="0 1px 2px rgba(43, 54, 60, 0.05), 0 6px 18px rgba(43, 54, 60, 0.05)",this.lift="0 2px 4px rgba(43, 54, 60, 0.06), 0 14px 32px rgba(43, 54, 60, 0.10)",this.barLight="#fcfcfd",this.barMid="#f8f9fc",this.barDeep="#f2f4f9",this.barShadow="0 1px 0 rgba(43, 54, 60, 0.05)",this.sideLight="#fafbfc",this.sideDeep="#f2f4f8",this.codeGround="#f6f7fa",this.hairline="1px",this.stroke="2px",this.rise="-1px",this.gloss="inset 0 1px 0 rgba(255, 255, 255, 0.7)",this.ring="0 0 0 2px color-mix(in oklab, var(--band) 80%, white)",this.decisionShadow="0 1px 2px rgba(43, 54, 60, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.6)"}parts(){return[...super.parts(),this.backdrop(),this.bands(),this.guide(),this.story(),this.said(),this.small()]}backdrop(){return h`
            .pd-book .pd-pages { background: linear-gradient(135deg, color-mix(in oklab, var(--band) 10%, white) 0%, ${({theme:e})=>e.paper} 48%, color-mix(in oklab, var(--foot) 8%, white) 100%); }
        `}bands(){return h`
            .pd-book .pd-library { position: relative; background: linear-gradient(180deg, ${({theme:e})=>e.barLight} 0%, ${({theme:e})=>e.barMid} 60%, ${({theme:e})=>e.barDeep} 100%); border-block-end: thin solid ${({theme:e})=>e.line}; box-shadow: ${({theme:e})=>e.barShadow}; }
            .pd-book .pd-library::after { content: ''; position: absolute; left: 0; right: 0; bottom: calc(-1 * ${({theme:e})=>e.hairline}); height: ${({theme:e})=>e.stroke}; background: linear-gradient(90deg, var(--band) 0 40%, var(--ground) 40% 70%, var(--foot) 70%); opacity: 0.75; }
        `}guide(){return h`
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
        `}story(){return h`
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
        `}said(){return h`
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
        `}small(){return h`
            @media (max-width: ${({theme:e})=>e.narrow}) {
                .pd-book .pd-holds, .pd-book .pd-library { border-inline-end: none; }
                .pd-book .pd-holds .pd-paragraph.pa-entry.pa-plate { min-height: calc(2 * ${({theme:e})=>e.size}); gap: calc(${({theme:e})=>e.space} / 4); font-size: calc(0.9286 * ${({theme:e})=>e.size}); }
                .pd-book .pd-holds .pa-entry.pa-plate .pd-plate { display: none; }
                .pd-book .pd-pages .pd-chapter { padding: calc(${({theme:e})=>e.space} * 0.8333) calc(${({theme:e})=>e.space} * 0.6667) calc(${({theme:e})=>e.space} * 2); }
                .pd-book .pd-pages .pd-title { font-size: calc(2 * ${({theme:e})=>e.size}); }
            }
        `}};n(Hr,"$Exhibition");let Rs=Hr;const sp=o(Rs);var tp=Object.defineProperty,op=Object.getOwnPropertyDescriptor,ut=n((p,e,a,r)=>{for(var s=op(e,a),i=p.length-1,d;i>=0;i--)(d=p[i])&&(s=d(e,a,s)||s);return s&&tp(e,a,s),s},"__decorateClass$3");const Lr=class Lr extends M{constructor(){super(...arguments),this.specification=new ce}get designs(){return this.chapters.filter(e=>e.is(w))}get open(){return super.open??this.body[0]}head(){}switches(){}$Bound(){const e=o(cd),a=o(pd),r=o(ld),s=this.designs;for(const i of s)i.annotations.add(this,t.jsx(e,{})),i.text.add(this,t.jsx(r,{}));for(const i of this.table?.annotations.expressed(ae)?.entries??[]){const d=B(i)?.identifier,u=d===void 0?void 0:this.chapterAt(d);u===void 0||!s.includes(u)||i.annotations.add(this,t.jsx(a,{number:s.indexOf(u)+1}))}super.$Bound()}};n(Lr,"$Portfolio");let Es=Lr;const Rr=class Rr extends P{$everyChapterInAPart(e){c(e.chapters.every(a=>a.part!==void 0),"every chapter of a portfolio is in a part, and one here is in none")}$showsEveryDesign(e){c(e.designs.every(a=>Ha(a,g).some(r=>r.is(je))),"a portfolio shows every design it holds as built, in a paragraph said to be the exhibit, and one here has none")}$keepsAGallery(e){c(e.chapters.some(a=>a.is(ya)),"a portfolio keeps its sketches in a gallery, and this one has none")}};n(Rr,"PortfolioSpecification");let ce=Rr;ut([l("every chapter of a portfolio is in a part")],ce.prototype,"$everyChapterInAPart");ut([l("a portfolio shows every design it holds as built")],ce.prototype,"$showsEveryDesign");ut([l("a portfolio keeps its sketches in a gallery")],ce.prototype,"$keepsAGallery");const Xn=o(Es);o(Xn,fe)(sp);o(Xn,J)(be);const Er=class Er extends se{};n(Er,"$PortfolioCover");let _s=Er;const tc=o(_s),_r=class _r extends Y{constructor(){super(...arguments),this.prose="'Source Serif 4', Georgia, serif",this.ink="#343c4a",this.heading="#1a1f36",this.soft="#727d8c",this.faint="#9ea8b5",this.line="#e4e9f2",this.paper="#ffffff",this.side="#f8f9fb",this.holdsColumn="240px",this.barHeight="52px",this.shadow="0 1px 2px rgba(43, 54, 60, 0.05), 0 6px 18px rgba(43, 54, 60, 0.05)",this.lift="0 2px 4px rgba(43, 54, 60, 0.06), 0 14px 32px rgba(43, 54, 60, 0.10)",this.barLight="#fcfcfd",this.barMid="#f8f9fc",this.barDeep="#f2f4f9",this.barShadow="0 1px 0 rgba(43, 54, 60, 0.05)",this.sideLight="#fafbfc",this.sideDeep="#f2f4f8",this.hairline="1px",this.stroke="2px"}parts(){return[...super.parts(),this.bands(),this.guide(),this.order(),this.surface(),this.entries(),this.small()]}bands(){return h`
            .pd-book .pd-library { position: relative; background: linear-gradient(180deg, ${({theme:e})=>e.barLight} 0%, ${({theme:e})=>e.barMid} 60%, ${({theme:e})=>e.barDeep} 100%); border-block-end: thin solid ${({theme:e})=>e.line}; box-shadow: ${({theme:e})=>e.barShadow}; }
            .pd-book .pd-library::after { content: ''; position: absolute; left: 0; right: 0; bottom: calc(-1 * ${({theme:e})=>e.hairline}); height: ${({theme:e})=>e.stroke}; background: linear-gradient(90deg, var(--band) 0 40%, var(--ground) 40% 70%, var(--foot) 70%); opacity: 0.75; }
        `}guide(){return h`
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
        `}order(){return h`
            .pd-book .pd-holds .pd-paragraph.pd-entry-order { position: absolute; top: calc(${({theme:e})=>e.space} * 0.75); right: calc(${({theme:e})=>e.space} * 0.583); z-index: 1; margin: 0; }
            .pd-book .pd-holds .pd-entry-order .pd-word.pd-switch { padding: 0; border: 0; border-radius: 0; background: none; font-family: ${({theme:e})=>e.font}; font-size: calc(0.7143 * ${({theme:e})=>e.size}); font-weight: 500; line-height: 1.4; letter-spacing: 0.02em; color: ${({theme:e})=>e.faint}; cursor: pointer; transition: color ${({theme:e})=>e.beat} ease; }
            .pd-book .pd-holds .pd-entry-order .pd-word.pd-switch::before { content: '↓ '; }
            .pd-book .pd-holds .pd-entry-order .pd-word.pd-switch:hover { color: ${({theme:e})=>e.ink}; }
            .pd-book .pd-holds .pd-entry-order .pd-word.pd-switch[aria-pressed='true'] { background: none; border: 0; color: var(--foot-ink); }
            .pd-book .pd-holds .pd-entry-order .pd-word.pd-switch[aria-pressed='true']::before { content: '↑ '; }
        `}surface(){return h`
            .pd-book .pd-pages { display: flex; flex-direction: column; padding: ${({theme:e})=>e.space} calc(${({theme:e})=>e.space} * 1.6667) calc(${({theme:e})=>e.space} * 5); background: linear-gradient(180deg, color-mix(in oklab, var(--foot) 12%, white), transparent) top / 100% calc(${({theme:e})=>e.space} * 2) no-repeat, linear-gradient(90deg, color-mix(in oklab, var(--foot) 8%, white), transparent) left / calc(${({theme:e})=>e.space} * 1.6667) 100% no-repeat, ${({theme:e})=>e.paper}; }
        `}entries(){return h`
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
        `}small(){return h`
            @media (max-width: ${({theme:e})=>e.narrow}) {
                .pd-book .pd-holds, .pd-book .pd-library { border-inline-end: none; }
                .pd-book .pd-holds .pd-paragraph.pd-entry-order, .pd-book .pd-holds .pa-entry .pd-word.pd-entry-day { display: none; }
                .pd-book .pd-pages { padding: 0 calc(${({theme:e})=>e.space} * 0.8333) calc(${({theme:e})=>e.space} * 2.5); }
                .pd-book .pd-pages .pd-chapter.pa-page { padding: calc(${({theme:e})=>e.space} * 1.1667) 0 calc(${({theme:e})=>e.space} * 1.3333); }
                .pd-book .pd-pages .pa-page .pd-word.pd-entry-number { position: static; display: block; margin-block-end: calc(${({theme:e})=>e.space} / 6); font-size: calc(2 * ${({theme:e})=>e.size}); }
                .pd-book .pd-pages .pa-page .pd-word.pd-date { position: static; width: auto; margin-block-end: calc(${({theme:e})=>e.space} * 0.4167); }
            }
        `}};n(_r,"$Typeset");let Gs=_r;const Kn=o(Gs);var rp=Object.defineProperty,np=Object.getOwnPropertyDescriptor,Jn=n((p,e,a,r)=>{for(var s=np(e,a),i=p.length-1,d;i>=0;i--)(d=p[i])&&(s=d(e,a,s)||s);return s&&rp(e,a,s),s},"__decorateClass$2");const L=n(p=>p.annotations.expressed(_)?.date?.date??"","dayOf"),kn=n(p=>{const[e,a]=L(p).split("-");return e===void 0||a===void 0?"":new Date(Date.UTC(Number(e),Number(a)-1,1)).toLocaleString("en-GB",{month:"long",year:"numeric",timeZone:"UTC"})},"monthOf"),Gr=class Gr extends f{constructor(){super(...arguments),this.specification=new z}defines(e){e.classes.add(this,"pa-newest-first")}erase(e){e.classes.revert(this)}};n(Gr,"$NewestFirst");let za=Gr;const ip=o(za),Qn=ip,Yr=class Yr extends g{write(){const e=o(it);return t.jsx(e,{annotation:Qn,children:"newest first"})}$Define(){super.$Define(),this.classes.add(this,"pd-entry-order")}};n(Yr,"$EntryOrder");let Ys=Yr;const qr=class qr extends v{write(){return String(this.book.entries.indexOf(this.chapter)+1)}$Define(){super.$Define(),this.classes.add(this,"pd-entry-number")}};n(qr,"$EntryNumber");let qs=qr;const Zr=class Zr extends v{write(){const[e,a,r]=L(this.$entry).split("-");if(!(e===void 0||a===void 0||r===void 0))return new Date(Date.UTC(Number(e),Number(a)-1,Number(r.slice(0,2)))).toLocaleString("en-GB",{day:"numeric",month:"short",timeZone:"UTC"})}$Define(){super.$Define(),this.classes.add(this,"pd-entry-day")}};n(Zr,"$EntryDay");let Zs=Zr;const Ur=class Ur extends oa{paging(){return h``}};n(Ur,"$JournalLayout");let Us=Ur;const dp=o(Ys),pp=o(qs),cp=o(Zs),Vn=o(Us),lp=dp,hp=pp,fp=cp,Xr=class Xr extends M{constructor(){super(...arguments),this.specification=new le}get entries(){return this.body}get latest(){return[...this.entries].sort((e,a)=>L(a).localeCompare(L(e)))[0]}get pages(){const e=[...this.entries].sort((a,r)=>L(a).localeCompare(L(r)));return this.is(za)?e.reverse():e}get open(){return super.open??this.latest}head(){}switches(){}turns(){}$Bound(){const e=o(hp);for(const s of this.entries)s.text.add(this,t.jsx(e,{}));const a=o(fp);for(const s of this.table?.annotations.expressed(ae)?.entries??[]){const i=B(s)?.identifier,d=i===void 0?void 0:this.chapterAt(i);d===void 0||!this.entries.includes(d)||s.text.add(this,t.jsx(a,{entry:d}))}const r=o(lp);this.table?.text.add(this,t.jsx(r,{})),this.$is=[Qn],super.$Bound()}};n(Xr,"$Journal");let Oa=Xr;const Kr=class Kr extends P{$everyEntryIsDated(e){const a=e.entries.find(r=>!r.is(_));c(a===void 0,`every entry of a journal is dated, and "${a?.title?.name}" is not`)}$everyEntrySaysItsMonth(e){const a=e.entries.find(r=>r.part?.name!==kn(r));c(a===void 0,a===void 0?"":`every entry of a journal says the month of its date as its part, and "${a.title?.name}" says "${a.part?.name??"none"}" for ${kn(a)}`)}};n(Kr,"JournalSpecification");let le=Kr;Jn([l("every entry of a journal is dated")],le.prototype,"$everyEntryIsDated");Jn([l("every entry of a journal says the month of its date as its part")],le.prototype,"$everyEntrySaysItsMonth");const mt=o(Oa);o(mt,fe)(Kn);o(mt,J)(be);o(mt,ht)(Vn);const Jr=class Jr extends se{};n(Jr,"$JournalCover");let Xs=Jr;const gp=o(Xs);var bp=Object.defineProperty,up=Object.getOwnPropertyDescriptor,T=n((p,e,a,r)=>{for(var s=up(e,a),i=p.length-1,d;i>=0;i--)(d=p[i])&&(s=d(e,a,s)||s);return s&&bp(e,a,s),s},"__decorateClass$1");const Qr=class Qr extends bi{$Define(){super.$Define(),this.classes.add(this,"pd-speaker")}$Bound(){super.$Bound();const e=this.annotations.expressed(nt);e!==void 0&&this.annotations.remove(this,e)}};n(Qr,"$Speaker");let Me=Qr;const Vr=class Vr extends rt{$Define(){super.$Define(),this.classes.add(this,"pd-time")}};n(Vr,"$Time");let Ks=Vr;const Sr=class Sr extends hi{$Define(){super.$Define(),this.classes.add(this,"pd-participant")}};n(Sr,"$Participant");let Pa=Sr;const en=class en extends g{get participants(){return this.text.find(Pa)}write(){const e=this.participants;return e.flatMap((a,r)=>{const s=o(a);return[r===0?"":r===e.length-1?" and ":", ",t.jsx(s,{},r)]})}$Define(){super.$Define(),this.classes.add(this,"pd-participants")}};n(en,"$Participants");let Da=en;const oc=o(Me),mp=o(Ks),rc=o(Pa),nc=o(Da),$p=mp,kp=n(p=>{const e=new Date(p);if(Number.isNaN(e.getTime()))return p;const a=e.toLocaleDateString("en-GB",{day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return`${e.toLocaleTimeString("en-GB",{hour:"2-digit",minute:"2-digit",timeZone:"UTC"})} UTC, ${a}`},"shownTime"),an=class an extends A{constructor(){super(...arguments),this.specification=new Te,this.$at=void 0}get when(){return this.$at??""}get speaker(){return this.text.find(Me)[0]}write(){const e=o($p),a=this.speaker,r=a===void 0?void 0:o(a),s=[...this.text].filter(i=>i!==a);return t.jsxs(t.Fragment,{children:[r===void 0?void 0:t.jsx(r,{}),t.jsx(e,{children:`[${kp(this.when)}](${this.when})`}),t.jsx("div",{className:"pd-said",children:s.map((i,d)=>{const u=o(i);return t.jsx(u,{},d)})})]})}$Define(){if(super.$Define(),this.classes.add(this,"pd-message"),this.when==="")return;const e=o(fi);this.annotations.add(this,t.jsx(e,{children:gi.slug(this.when.replace(/Z$/u,""))}))}$Bound(){const e=this.book?.author?.means?.identifier;if(e!==void 0&&this.speaker?.means?.identifier===e){const a=o(vp);this.annotations.add(this,t.jsx(a,{}))}super.$Bound()}};n(an,"$Message");let he=an;const sn=class sn extends f{constructor(){super(...arguments),this.specification=new Aa}defines(e){e.classes.add(this,"pa-mine")}erase(e){e.classes.revert(this)}};n(sn,"$Mine");let Js=sn;const tn=class tn extends b{$saidOfAMessage(e){c(e instanceof he,"mine is said of a message, and this is not one")}};n(tn,"MineSpecification");let Aa=tn;T([l("mine is said of a message")],Aa.prototype,"$saidOfAMessage");const xp=o(Js),vp=xp,on=class on extends f{constructor(){super(...arguments),this.specification=new Ia}defines(e){e.classes.add(this,"pa-quoted")}erase(e){e.classes.revert(this)}};n(on,"$Quoted");let Qs=on;const rn=class rn extends f{constructor(){super(...arguments),this.specification=new Ma}defines(e){e.classes.add(this,"pa-verbatim")}erase(e){e.classes.revert(this)}};n(rn,"$Verbatim");let Vs=rn;const nn=class nn extends f{constructor(){super(...arguments),this.specification=new Fe,this.$from=void 0,this.$to=void 0}get from(){return this.$from??""}get to(){return this.$to??""}defines(e){e.classes.add(this,"pa-period")}erase(e){e.classes.revert(this)}};n(nn,"$Period");let Ca=nn;const dn=class dn extends f{constructor(){super(...arguments),this.specification=new Fe,this.$shown=void 0,this.$all=void 0}get shown(){return Number(this.$shown??0)}get all(){return Number(this.$all??0)}get aside(){return this.all-this.shown}defines(e){e.classes.add(this,"pa-messages")}erase(e){e.classes.revert(this)}};n(dn,"$Messages");let Ne=dn;const pn=class pn extends ui{$saysWhen(e){c(e.when!==""&&!Number.isNaN(Date.parse(e.when)),"a message says when it was said, as an instant the machine can read, and this one does not")}$headedByItsSpeaker(e){c(e.canonical instanceof Me,"a message is headed by its speaker, a heading that refers to them, and this one is not")}};n(pn,"MessageSpecification");let Te=pn;T([l("a message says when it was said")],Te.prototype,"$saysWhen");T([l("a message is headed by its speaker")],Te.prototype,"$headedByItsSpeaker");const cn=class cn extends b{$saidOfAParagraph(e){c(e instanceof g,"this is said of a paragraph, and this is not one")}};n(cn,"OfAParagraphSpecification");let Ia=cn;T([l("this is said of a paragraph")],Ia.prototype,"$saidOfAParagraph");const ln=class ln extends b{$saidOfACover(e){c(e instanceof $&&e.is(C),"this is said of a cover, and this is not one")}};n(ln,"OfACoverSpecification");let Fe=ln;T([l("this is said of a cover")],Fe.prototype,"$saidOfACover");const hn=class hn extends b{$saidOfAWord(e){c(e instanceof v,"verbatim is said of a word, and this is not one")}};n(hn,"VerbatimSpecification");let Ma=hn;T([l("verbatim is said of a word")],Ma.prototype,"$saidOfAWord");const ic=o(he),dc=o(Qs),pc=o(Vs),cc=o(Ca),lc=o(Ne),fn=class fn extends M{constructor(){super(...arguments),this.specification=new X}get participants(){return this.cover?.text.find(Da)[0]?.participants??[]}get period(){return this.cover?.annotations.expressed(Ca)}get messageCount(){return this.cover?.annotations.expressed(Ne)}get messages(){return this.body.flatMap(e=>e.text.find(he))}get pages(){const e=[...this.body].sort((a,r)=>L(a).localeCompare(L(r)));return[this.synopsis,...e,...this.appendix].filter(a=>a!==void 0)}};n(fn,"$Conversation");let Ss=fn;const gn=class gn extends P{$saysItsParticipantsPeriodAndCount(e){c(e.participants.length>0&&e.period!==void 0&&e.messageCount!==void 0,"a conversation says its participants, its period and how many messages it holds, on its cover, and this one says less")}$everyChapterIsDated(e){const a=e.body.find(r=>!r.is(_));c(a===void 0,`every chapter of a conversation is dated, and "${a?.title?.name}" is not`)}$everyMessageIsAddressed(e){const a=e.messages.find(r=>r.annotations.expressed(nt)===void 0);c(a===void 0,`every message of a conversation is addressed by its time, and the one at "${a?.when}" is not`)}$everyChapterHoldsAMessage(e){const a=e.body.find(r=>r.text.find(he).length===0);c(a===void 0,`every chapter of a conversation holds a message, and "${a?.title?.name}" holds none`)}};n(gn,"ConversationSpecification");let X=gn;T([l("a conversation says its participants, its period and how many messages it holds")],X.prototype,"$saysItsParticipantsPeriodAndCount");T([l("every chapter of a conversation is dated")],X.prototype,"$everyChapterIsDated");T([l("every message of a conversation is addressed by its time")],X.prototype,"$everyMessageIsAddressed");T([l("every chapter of a conversation holds a message")],X.prototype,"$everyChapterHoldsAMessage");o(Ss);var yp=Object.defineProperty,wp=Object.getOwnPropertyDescriptor,Sn=n((p,e,a,r)=>{for(var s=wp(e,a),i=p.length-1,d;i>=0;i--)(d=p[i])&&(s=d(e,a,s)||s);return s&&yp(e,a,s),s},"__decorateClass");const bn=class bn extends Oa{constructor(){super(...arguments),this.specification=new Be}get entries(){return this.text.find($).filter(e=>e.is(E)&&e!==this.synopsis)}get laidOutChapters(){return[...super.laidOutChapters,...this.entries]}sizeOf(e){return e.annotations.expressed(I)?.cover?.annotations.expressed(Ne)?.shown??0}};n(bn,"$Register");let et=bn;const un=class un extends le{$everyEntryStandsForABook(e){const a=e.entries.find(r=>r.annotations.expressed(E)?.means===void 0);c(a===void 0,`every entry of a register stands for a book, holding its synopsis, and "${a?.title?.name}" stands for none`)}$onlyAChapterAppends(e){const a=[...e.chapters,...e.entries];c(e.text.find($).every(r=>a.includes(r)||!r.is(tt)),"only an ordinary chapter or an entry files a file, and here a cover, a synopsis or a table of contents files one")}};n(un,"RegisterSpecification");let Be=un;Sn([l("every entry of a register stands for a book, holding its synopsis")],Be.prototype,"$everyEntryStandsForABook");Sn([l("only an ordinary chapter or an entry files a file")],Be.prototype,"$onlyAChapterAppends");const $t=o(et);o($t,fe)(Kn);o($t,J)(be);o($t,ht)(Vn);const mn=class mn extends na{get entries(){return this.text.find($).filter(e=>e.is(E)&&e!==this.synopsis)}get laidOutChapters(){return[...super.laidOutChapters,...this.entries]}get pages(){return[...super.pages,...this.entries]}};n(mn,"$ProjectManual");let at=mn;o(at);const jp=n(()=>t.jsxs(wn,{children:[t.jsx(gd,{}),t.jsx(_n,{ground:"#eef5f6",band:"#c3e3e6",bandInk:"#1c565c",foot:"#8db9bd",footInk:"#153e43",ink:"#1f5a60"}),t.jsx(Gn,{x:"-46",y:"-13"}),t.jsx(jn,{children:"[Dougs Library](/dougs-library/)"}),t.jsx(zn,{children:"[Doug](/dougs-story/)"}),t.jsx(On,{children:"[Library](/dougs-library/)"}),t.jsx(Pn,{children:"[The Library](/dougs-library/)"}),t.jsxs(Dn,{children:[t.jsx(En,{}),t.jsx(An,{children:`<svg viewBox="0 0 64 64" class="pd-illustration"><path class="light" d="M9 7h46v50H9z"/><path d="M9 7h46v50H9zM9 24h46M9 41h46"/><path class="fill" d="M13 11h5v13h-5zM20 9h4v15h-4zM26 13h6v11h-6zM34 10h4v14h-4zM40 14h6v10h-6z"/><path d="M48 24l4-12 3 1-4 11z"/><path class="fill" d="M13 28h4v13h-4zM19 30h7v11h-7zM28 27h4v14h-4zM34 31h5v10h-5zM41 28h6v13h-6zM49 29h3v12h-3z"/><path class="fill" d="M13 46h6v11h-6zM21 44h4v13h-4zM27 47h8v10h-8zM37 45h4v12h-4zM43 48h6v9h-6z"/><path d="M50 57l3-11 3 1-3 10z"/></svg>
`})]})]}),"LibraryCover"),hc=n(()=>t.jsxs(wn,{children:[t.jsx(gp,{}),t.jsx(mi,{}),t.jsx(bd,{children:jp()}),t.jsx(_n,{ground:"#f5eedf",band:"#d9c3a3",bandInk:"#4a3626",foot:"#a3b6cc",footInk:"#2a4262",ink:"#2f4a6a"}),t.jsx(Gn,{x:"-54",y:"-33"}),t.jsx(jn,{children:"[Dougs Story](/dougs-story/)"}),t.jsx(zn,{children:"[Doug](/dougs-story/)"}),t.jsx(On,{children:"[Library](/dougs-library/)"}),t.jsx(Pn,{children:"[The Librarian](/dougs-story/)"}),t.jsxs(Dn,{children:[t.jsx(En,{}),t.jsx(An,{children:`<svg viewBox="0 0 64 64" class="pd-illustration"><path class="light" d="M8 13h23v38H8zM33 13h23v38H33z"/><path d="M8 13h23v38H8zM33 13h23v38H33z"/><path d="M13 21h13M13 27h13M13 33h9M38 21h13M38 27h13M38 33h13M38 39h8"/><path class="fill" d="M15 55 45 25l4 4-30 30-6 2z"/><path d="M15 55 45 25l4 4-30 30-6 2zM43 27l4 4M17 53l2 2"/></svg>
`})]})]}),"Cover");export{zs as $,Rp as A,Ap as B,hc as C,Fp as D,Np as E,Tp as F,ac as G,Kp as H,Ip as I,gp as J,Jp as K,jp as L,ic as M,Qp as N,Zp as O,tc as P,dc as Q,Up as R,Cp as S,J as T,Vp as U,bd as V,Gn as W,ec as X,Sp as Y,Xp as Z,Oa as _,Mp as a,Hp as a0,Wp as a1,Dp as a2,Pp as a3,Lp as b,et as c,oc as d,pc as e,Es as f,_p as g,_n as h,En as i,na as j,Bp as k,at as l,gd as m,nc as n,rc as o,cc as p,lc as q,Gs as r,Ss as s,Wa as t,be as u,sc as v,Ep as w,Gp as x,Yp as y,qp as z};
