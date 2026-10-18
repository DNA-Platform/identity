var Wi=Object.defineProperty;var r=(p,e)=>Wi(p,"name",{value:e,configurable:!0});import{$ as o,n as Hi,s as k,o as h,p as f,q as yt,W as j,R as y,j as s,r as ei,t as ai,u as g,v as b,w as c,x as v,y as l,z as W,F as z,G as x,I as oe,J as La,K as Li,N as P,O as G,Q as Ri,U as Z,V as Qr,X as wt,Y as Ei,Z as ve,_ as F,a0 as L,a1 as _i,a2 as Gi,a3 as Za,a4 as qi,a5 as Yi,a6 as Zi,a7 as $e,a8 as si,a9 as jt,aa as Ra,ab as ti,ac as Ui,ad as oi,ae as Xi,af as Ki,ag as Ji,ah as Qi,ai as Vi,aj as Si,C as ni,T as ri,f as ii,g as di,h as pi,a as ci,i as li,ak as ed}from"./index-Cz0DlGTh.js";const Bt=class Bt extends Hi{constructor(){super(...arguments),this.font="'Inter', system-ui, sans-serif",this.prose="'Inter', system-ui, sans-serif",this.mono="'JetBrains Mono', ui-monospace, monospace",this.size="0.875rem",this.leading="1.6",this.measure="44rem",this.spreadColumn="15.5rem",this.space="1.5rem",this.holdsColumn="240px",this.barHeight="50px",this.beat="320ms",this.narrow="48rem",this.phoneWidth="390px",this.colour="#4e9eb9",this.accent="#166178",this.bar="#0c1b1f",this.barInk="#ffffff",this.barDim="#a9bcc1",this.barOn="rgba(255, 255, 255, 0.11)",this.barLine="#1d3339",this.mark="#c8f4fb",this.side="#e3f5fa",this.sideInk="#10252c",this.sideDim="#516770",this.sideOn="#ffffff",this.sideLine="#cbe6ee",this.night="#0c1b1f",this.deep="#14323c",this.blue="#166178",this.sea="#4e9eb9",this.sky="#8fc8dc",this.opal="#c8f4fb",this.pale="#e3f5fa",this.mist="#f1f7f9",this.white="#ffffff",this.ink="#10252c",this.soft="#516770",this.line="#dbe7ec",this.me="#e8590c",this.wash="linear-gradient(105deg, #e2f6fb 0%, #ecf0fd 52%, #fae9f4 100%)",this.serif="'Source Serif 4', Georgia, serif",this.between="'Source Sans 3', 'Inter', system-ui, sans-serif",this.bookPaper="#fbf9f3",this.bookInk="#29251d",this.heading="#10252c",this.capital="#166178",this.lit="#166178",this.faint="#8792a2",this.paper="#ffffff",this.panel="#f1f7f9",this.rule="#dbe7ec",this.edge="transparent",this.tint="#e3f5fa",this.dusk="#14323c",this.glow="#cfe6e3",this.dim="#4f7672",this.keyword="#8ad7ff",this.string="#ffd48a",this.type="#9be3d6",this.comment="#5f8a86",this.haze="#a9bcc1",this.glass="rgba(255, 255, 255, 0.62)",this.binding="linear-gradient(160deg, #16303a, #0c1b1f)",this.spine="inset 5px 0 0 rgba(0, 0, 0, 0.14), inset 6px 0 0 rgba(255, 255, 255, 0.12), 0 10px 20px -10px rgba(0, 0, 0, 0.45)",this.shadow="0 0.75rem 1.4rem -0.9rem rgba(12, 27, 31, 0.55)",this.volume="11.5rem",this.cover="8.25rem",this.card="18rem",this.barLight="#ffffff",this.barMid="#f1f7f9",this.barDeep="#e3f5fa",this.barShadow="none",this.sideLight="#ffffff",this.sideDeep="#e3f5fa",this.codeGround="#f1f7f9",this.hairline="1px",this.stroke="2px",this.rise="-1px",this.gloss="none",this.ring="0 0 0 2px #c8f4fb",this.decisionShadow="none",this.photo="7rem",this.radius="0.375rem",this.barTint="#ffffff",this.skyInk="#166178",this.lift="inset 5px 0 0 rgba(0, 0, 0, 0.14), inset 6px 0 0 rgba(255, 255, 255, 0.12), 0 14px 24px -12px rgba(0, 0, 0, 0.5)",this.openSpine="inset 7px 0 0 rgba(0, 0, 0, 0.14), inset 8px 0 0 rgba(255, 255, 255, 0.12), 0 12px 22px -14px rgba(0, 0, 0, 0.5)",this.sans="'Inter', system-ui, sans-serif",this.muted="#516770",this.bubble="rgba(16, 37, 44, 0.05)",this.shade="rgba(16, 37, 44, 0.03)",this.pill="#166178",this.column="48rem",this.style=k.div`${this.parts()}`}parts(){return[this.page(),this.writing(),this.links(),this.figures(),this.listings(),this.switches(),this.turns(),this.illustrations(),this.marks(),this.library(),this.head(),this.holds(),this.context(),this.tones()]}page(){return h`
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
            .pd-code-box { border: 1px solid rgba(11, 11, 11, .1); border-radius: 12px; background: rgba(255, 255, 255, .5); overflow: hidden; }
            .pd-code-box .pd-code-bar { display: flex; align-items: center; justify-content: space-between; padding: 6px 8px 6px 14px; border-block-end: 1px solid rgba(11, 11, 11, .07); background: rgba(11, 11, 11, .025); font-family: ${({theme:e})=>e.sans}; font-size: 11.5px; font-weight: 500; line-height: 1.4; color: ${({theme:e})=>e.soft}; }
            .pd-code-box .pd-code-bar .pd-copy { border: 0; background: none; padding: 2px 8px; border-radius: 6px; font: inherit; color: inherit; cursor: pointer; }
            .pd-code-box .pd-code-bar .pd-copy:hover { background: rgba(11, 11, 11, .05); color: ${({theme:e})=>e.ink}; }
            .pd-code-box pre { margin: 0; padding: 14px; font-family: ${({theme:e})=>e.mono}; font-size: 14px; line-height: 22.75px; color: #14181f; overflow: auto; }
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
        `}};r(Bt,"$LibraryBookTheme");let U=Bt;const ad=o(U);var sd=Object.defineProperty,td=Object.getOwnPropertyDescriptor,od=r((p,e,a,n)=>{for(var t=td(e,a),i=p.length-1,d;i>=0;i--)(d=p[i])&&(t=d(e,a,t)||t);return t&&sd(e,a,t),t},"__decorateClass$o");const Wt=class Wt extends g{constructor(){super(...arguments),this.specification=new Ye}defines(e){e.classes.add(this,"pa-label")}erase(e){e.classes.revert(this)}};r(Wt,"$Label");let Ua=Wt;const Ht=class Ht extends b{$saidOfAWord(e){c(e instanceof v,"label is said of a word, and this is not one")}};r(Ht,"LabelSpecification");let Ye=Ht;od([l("label is said of a word")],Ye.prototype,"$saidOfAWord");const Ea=o(Ua),Lt=class Lt extends f{get cover(){return this.$cover??this.book?.cover}write(){const e=this.cover.annotations.expressed(yt),a=o(j),n=o(Ea),t=o(y);return s.jsxs(s.Fragment,{children:[s.jsxs(a,{children:[s.jsx(n,{}),"by"]}),s.jsxs(a,{children:[s.jsx(t,{children:e.means.identifier}),e.name]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-byline")}};r(Lt,"$Byline");let Xa=Lt;const Rt=class Rt extends f{get cover(){return this.$cover??this.book?.cover}write(){const e=this.cover.annotations.expressed(ei),a=o(j),n=o(Ea),t=o(y);return s.jsxs(s.Fragment,{children:[s.jsxs(a,{children:[s.jsx(n,{}),"subject"]}),s.jsxs(a,{children:[s.jsx(t,{children:e.means.identifier}),e.name]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-subject-line")}};r(Rt,"$SubjectLine");let Ka=Rt;const Et=class Et extends f{get cover(){return this.$cover??this.book?.cover}get topics(){return this.cover?.annotations.find(ai)??[]}write(){const e=o(j),a=o(Ea),n=o(y);return s.jsxs(s.Fragment,{children:[s.jsxs(e,{children:[s.jsx(a,{}),"topic"]}),this.topics.map((t,i)=>s.jsxs(e,{children:[s.jsx(n,{children:t.means.identifier}),t.name]},i))]})}$Define(){super.$Define(),this.classes.add(this,"pd-topic-line")}};r(Et,"$TopicLine");let Ja=Et;const hi=o(Xa),nd=o(Ka),rd=o(Ja);var id=Object.defineProperty,dd=Object.getOwnPropertyDescriptor,pd=r((p,e,a,n)=>{for(var t=dd(e,a),i=p.length-1,d;i>=0;i--)(d=p[i])&&(t=d(e,a,t)||t);return t&&id(e,a,t),t},"__decorateClass$n");const _t=class _t extends b{$saidOfABook(e){c(e instanceof B,"this is said of a book of this library, and here it is said of something else")}};r(_t,"OfABookSpecification");let N=_t;pd([l("this is said of a book of this library")],N.prototype,"$saidOfABook");const Gt=class Gt extends v{get on(){return[this.book.$is].flat().includes(this.$annotation)}$Switch(...e){this.$Writing(...e),this.containers.replace(this,"span","button")}container(e){return super.container({type:"button","aria-pressed":this.on,onClick:r(()=>this.press(),"onClick"),...e})}press(){const e=this.book,a=[e.$is].flat();e.$is=this.on?a.filter(n=>n!==this.$annotation):[this.$annotation,...a]}$Define(){super.$Define(),this.classes.add(this,"pd-switch")}};r(Gt,"$Switch");let ye=Gt;const qt=class qt extends ye{press(){const e=this.book,a=[e.$is].flat().filter(n=>!this.$family.includes(n));e.$is=[this.$annotation,...a]}};r(qt,"$Tab");let we=qt;const _a=o(ye),cd=o(we);var ld=Object.defineProperty,hd=Object.getOwnPropertyDescriptor,fi=r((p,e,a,n)=>{for(var t=hd(e,a),i=p.length-1,d;i>=0;i--)(d=p[i])&&(t=d(e,a,t)||t);return t&&ld(e,a,t),t},"__decorateClass$m");const Yt=class Yt extends W{constructor(){super(...arguments),this.specification=new je,this.style=k.div`
        .pa-coloured { --colour: ${e=>e.$colour}; }
    `}get colour(){return z.copy(this.text).trim()}$Coloured(...e){this.$Format(...e);const a=this.style;this._painted=n=>s.jsx(a,{$colour:this.colour,...n})}defines(e){e.classes.add(this,"pa-coloured"),e.containers.add(this,this._painted)}erase(e){e.classes.revert(this),e.containers.revert(this)}};r(Yt,"$Coloured");let X=Yt;const Zt=class Zt extends b{$saidOfAChapterOrAParagraph(e){c(e instanceof x||e instanceof f,"coloured is said of a chapter or a paragraph, and this is neither")}$givenItsColour(e){c(/^#[0-9a-f]{6}$/iu.test(e.annotations.expressed(X)?.colour??""),"coloured is given its colour as six hex digits, and this one was given something else")}};r(Zt,"ColouredSpecification");let je=Zt;fi([l("coloured is said of a chapter or a paragraph")],je.prototype,"$saidOfAChapterOrAParagraph");fi([l("coloured is given its colour")],je.prototype,"$givenItsColour");const Rc=o(X);var fd=Object.defineProperty,gd=Object.getOwnPropertyDescriptor,zt=r((p,e,a,n)=>{for(var t=gd(e,a),i=p.length-1,d;i>=0;i--)(d=p[i])&&(t=d(e,a,t)||t);return t&&fd(e,a,t),t},"__decorateClass$l");const Ut=class Ut extends W{constructor(){super(...arguments),this.specification=new ne}get identifier(){return oe.reference(z.copy(this.text))?.identifier??""}get name(){return oe.reference(z.copy(this.text))?.name??""}get entry(){return this.book?.chapterAt(this.identifier)}get drawing(){const e=this.entry?.text.find(f).flatMap(a=>a.text.find(La))[0];return e===void 0?"":z.copy(e.text).trim()}get colour(){return this.entry?.annotations.expressed(X)?.colour??""}$Keyed(...e){this.$Format(...e);const a=o(bd);this._layer=n=>s.jsxs("div",{...n,children:[s.jsx(a,{keyed:this}),n.children]})}defines(e){e.classes.add(this,"pa-keyed"),e.containers.add(this,this._layer)}erase(e){e.classes.revert(this),e.containers.revert(this)}};r(Ut,"$Keyed");let _=Ut;const Xt=class Xt extends v{constructor(){super(...arguments),this.style=k.span`
        --colour: ${e=>e.$colour};
    `}$Icon(...e){this.$Writing(...e);const a=this.style;this._painted=n=>s.jsx(a,{$colour:this.$keyed?.colour??"",...n}),this.containers.replace(this,"span",this._painted)}write(){return s.jsx("span",{className:"pd-drawing",role:"img","aria-label":this.$keyed?.name,dangerouslySetInnerHTML:{__html:this.$keyed?.drawing??""}})}$Define(){super.$Define(),this.classes.add(this,"pd-icon")}};r(Xt,"$Icon");let Qa=Xt;const Kt=class Kt extends b{$saidOfAChapter(e){c(e instanceof x,"keyed is said of a chapter, and this is not one")}$namesAnEntry(e){const a=e.annotations.expressed(_)?.entry;c(a!==void 0&&a.annotations.expressed(_)?.entry===a,"keyed names an entry of the key, a chapter of this book keyed as itself, and this one names something else")}$entryHoldsItsDrawingAndColour(e){const a=e.annotations.expressed(_)?.entry;a!==void 0&&c(a.text.find(f).flatMap(n=>n.text.find(La)).length===1&&a.is(X),"an entry of the key holds one drawing and its colour, and this one holds something else")}};r(Kt,"KeyedSpecification");let ne=Kt;zt([l("keyed is said of a chapter")],ne.prototype,"$saidOfAChapter");zt([l("keyed names an entry of the key")],ne.prototype,"$namesAnEntry");zt([l("an entry of the key holds one drawing and its colour")],ne.prototype,"$entryHoldsItsDrawingAndColour");const Ec=o(_),gi=o(Qa),bd=gi;var ud=Object.defineProperty,md=Object.getOwnPropertyDescriptor,$d=r((p,e,a,n)=>{for(var t=md(e,a),i=p.length-1,d;i>=0;i--)(d=p[i])&&(t=d(e,a,t)||t);return t&&ud(e,a,t),t},"__decorateClass$k");const kd={tsx:"typescript",ts:"typescript",mjs:"javascript",js:"javascript",css:"css",html:"xml",svg:"xml",json:"json",md:"markdown"},xd='<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"><path d="M6 4.5 3.5 8 6 11.5M10 4.5 12.5 8 10 11.5"/></svg>',ke=r(p=>`${p.$identifier}${p.$type}`,"fileNameOf"),vd=r(p=>p===void 0?[]:z.copy(p.text).split(`
`),"fileLinesOf"),bi=r(p=>p?.chapter?.annotations.expressed(O),"spreadOf"),Jt=class Jt extends f{constructor(){super(...arguments),this.$family=[]}get name(){return this.$file===void 0?"":ke(this.$file)}get language(){return kd[(this.$file?.$type??"").replace(/^\./u,"")]??""}get spread(){return bi(this.$file)}get chapter(){return this.$file?.chapter??super.chapter}$FileListing(...e){this.$Writing(...e),this.containers.replace(this,"span","div")}container(e){return super.container({onClick:r(()=>this.press(),"onClick"),...e})}press(){if(this.$filePanelState===void 0)return;const e=this.book,a=[e.$is].flat().filter(n=>!this.$family.includes(n));e.$is=[this.$filePanelState,...a]}write(){const e=o(j),a=o(Li);return s.jsxs(s.Fragment,{children:[s.jsx(e,{children:this.name}),s.jsx(a,{identifier:this.$file?.$identifier,type:this.$file?.$type,language:this.language,numbered:!0})]})}$Define(){super.$Define(),this.classes.add(this,"pd-file-listing");const e=o(jd);this.annotations.add(this,s.jsx(e,{}))}};r(Jt,"$FileListing");let Ze=Jt;const Qt=class Qt extends g{constructor(){super(...arguments),this.specification=new Ue}defines(e){const a=e;a.$file!==void 0&&a.spread?.openFile===a.$file&&e.classes.add(this,"pa-open")}erase(e){e.classes.revert(this)}};r(Qt,"$OpenListing");let Va=Qt;const Vt=class Vt extends b{$isAFileListing(e){c(e instanceof Ze,"an open listing is a file listing, and this is not one")}};r(Vt,"OpenListingSpecification");let Ue=Vt;$d([l("an open listing is a file listing")],Ue.prototype,"$isAFileListing");const St=class St extends we{constructor(){super(...arguments),this.$skeleton=!1,this.style=k.button`
        --colour: ${e=>e.$colour};
    `}get on(){const e=this.$file?.chapter;return e!==void 0&&e===this.book.open&&this.spread?.openFile===this.$file}get name(){return this.$file===void 0?"":ke(this.$file)}get spread(){return bi(this.$file)}get colour(){return this.$file?.chapter?.annotations.expressed(_)?.colour??""}get lines(){return vd(this.$file)}get chapter(){return this.$file?.chapter??super.chapter}$FileTab(...e){this.$Switch(...e),this.containers.replace(this,"button",this.style)}container(e){return super.container({$colour:this.colour,...e})}press(){const e=this.spread;e!==void 0&&(e.$openFile=this.$file),this.$annotation!==void 0&&super.press()}write(){return s.jsxs(s.Fragment,{children:[s.jsx("span",{className:"pd-drawing",dangerouslySetInnerHTML:{__html:xd}}),s.jsx("span",{className:"pd-tab-name",children:this.name}),this.$skeleton?s.jsx("span",{className:"pd-skeleton",children:this.lines.slice(0,14).map((e,a)=>s.jsx("i",{style:{width:`${Math.max(12,Math.min(100,e.length*2.2))}%`}},a))}):void 0]})}$Define(){super.$Define(),this.classes.add(this,"pd-file-tab")}};r(St,"$FileTab");let Sa=St;const yd=o(Ze),wd=o(Va),Ot=o(Sa),jd=wd;var zd=Object.defineProperty,Od=Object.getOwnPropertyDescriptor,Dd=r((p,e,a,n)=>{for(var t=Od(e,a),i=p.length-1,d;i>=0;i--)(d=p[i])&&(t=d(e,a,t)||t);return t&&zd(e,a,t),t},"__decorateClass$j");const Ba=class Ba extends g{constructor(){super(...arguments),this.specification=new N}defines(e){for(const a of e.annotations.after(this))a instanceof Ba&&e.annotations.express(a,!1);e.classes.add(this,"pa-file-panel-state")}erase(e){e.classes.revert(this)}};r(Ba,"$FilePanelState");let re=Ba;const eo=class eo extends re{defines(e){super.defines(e),e.classes.add(this,"pa-code-forward")}};r(eo,"$CodeForward");let es=eo;const ao=class ao extends re{defines(e){super.defines(e),e.classes.add(this,"pa-words-forward")}};r(ao,"$WordsForward");let as=ao;const so=class so extends re{defines(e){super.defines(e),e.classes.add(this,"pa-split")}};r(so,"$Split");let ss=so;const to=class to extends g{constructor(){super(...arguments),this.specification=new N}defines(e){e.classes.add(this,"pa-light-code")}erase(e){e.classes.revert(this)}};r(to,"$LightCode");let ts=to;const oo=class oo extends g{constructor(){super(...arguments),this.specification=new N}defines(e){e.classes.add(this,"pa-wrapped-code")}erase(e){e.classes.revert(this)}};r(oo,"$WrappedCode");let os=oo;const no=class no extends g{constructor(){super(...arguments),this.specification=new N}defines(e){e.classes.add(this,"pa-numbered-code")}erase(e){e.classes.revert(this)}};r(no,"$NumberedCode");let ns=no;const ro=class ro extends g{constructor(){super(...arguments),this.specification=new Ke}defines(e){e.classes.add(this,"pa-brief")}erase(e){e.classes.revert(this)}};r(ro,"$Brief");let Xe=ro;const io=class io extends b{$saidOfAParagraph(e){c(e instanceof f,"brief is said of a paragraph, and this is not one")}};r(io,"BriefSpecification");let Ke=io;Dd([l("brief is said of a paragraph")],Ke.prototype,"$saidOfAParagraph");o(re);const Dt=o(es),Pt=o(as),ze=o(ss),Pd=o(ts),Ad=o(os),ui=o(ns),_c=o(Xe),po=class po extends f{constructor(){super(...arguments),this.style=k.div`
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
    `}get spread(){return this.chapter?.annotations.expressed(O)}$FileRail(...e){this.$Writing(...e),this.containers.replace(this,"span",this.style)}write(){const e=o(Ot),a=this.spread;if(a!==void 0)return a.files.map(n=>s.jsx(e,{file:n,annotation:ze,family:a.filePanelStates,skeleton:!0},ke(n)))}$Define(){super.$Define(),this.classes.add(this,"pd-file-rail")}};r(po,"$FileRail");let rs=po;const co=class co extends we{constructor(){super(...arguments),this.style=k.button`
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
    `}get paragraphs(){return(this.chapter?.text.find(P)??[]).flatMap(e=>e.text.find(f)).slice(0,16).map(e=>z.copy(e.text))}$FilePanelGrip(...e){this.$Switch(...e),this.containers.replace(this,"button",this.style)}write(){return s.jsx("span",{className:"pd-skeleton",children:this.paragraphs.map((e,a)=>s.jsx("i",{style:{width:`${Math.max(25,Math.min(100,e.length/4))}%`}},a))})}$Define(){super.$Define(),this.classes.add(this,"pd-file-panel-grip")}};r(co,"$FilePanelGrip");let is=co;const Cd=o(rs),Id=o(is),lo=class lo extends f{constructor(){super(...arguments),this.style=k.div`
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
    `}get spread(){return this.chapter?.annotations.expressed(O)}$FilePanel(...e){this.$Writing(...e),this.containers.replace(this,"span",this.style)}write(){const e=o(Td),a=o(yd),n=this.spread;if(n!==void 0)return s.jsxs(s.Fragment,{children:[s.jsx(e,{chapter:this.chapter}),s.jsx("div",{className:"pd-file-listings",children:n.files.map(t=>s.jsx(a,{file:t,filePanelState:Dt,family:n.filePanelStates},ke(t)))})]})}$Define(){super.$Define(),this.classes.add(this,"pd-file-panel")}};r(lo,"$FilePanel");let ds=lo;const ho=class ho extends f{constructor(){super(...arguments),this.style=k.div`
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
    `}get spread(){return this.chapter?.annotations.expressed(O)}$FilePanelBar(...e){this.$Writing(...e),this.containers.replace(this,"span",this.style)}write(){const e=o(Ot),a=o(cd),n=o(_a),t=this.spread,i=this.chapter;if(t!==void 0)return s.jsxs(s.Fragment,{children:[t.files.map(d=>s.jsx(e,{file:d},ke(d))),s.jsx("span",{className:"pd-words-only",children:s.jsx(a,{chapter:i,annotation:Pt,family:t.filePanelStates,children:"words"})}),s.jsx("span",{className:"pd-dock pd-to-full",children:s.jsx(a,{chapter:i,annotation:Dt,family:t.filePanelStates,children:"full screen"})}),s.jsx("span",{className:"pd-dock pd-to-split",children:s.jsx(a,{chapter:i,annotation:ze,family:t.filePanelStates,children:"split"})}),s.jsxs("span",{className:"pd-options",children:[s.jsx(n,{chapter:i,annotation:Pd,children:"light"}),s.jsx(n,{chapter:i,annotation:Ad,children:"wrap"}),s.jsx(n,{chapter:i,annotation:ui,children:"lines"})]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-file-panel-bar")}};r(ho,"$FilePanelBar");let ps=ho;const Nd=o(ds),Md=o(ps),Td=Md;var Fd=Object.defineProperty,Bd=Object.getOwnPropertyDescriptor,Wd=r((p,e,a,n)=>{for(var t=Bd(e,a),i=p.length-1,d;i>=0;i--)(d=p[i])&&(t=d(e,a,t)||t);return t&&Fd(e,a,t),t},"__decorateClass$i");const fo=class fo extends W{constructor(){super(...arguments),this.specification=new Je,this.$openFile=void 0,this.grid=k.div`
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
    `}get files(){return this.parent.annotations.find(G).reverse()}get openFile(){return this.$openFile??this.files[0]}get filePanelStates(){return[Pt,ze,Dt]}$Spread(...e){this.$Format(...e);const a=this.grid,n=o(Nd),t=o(Cd),i=o(Id);this.style=({className:d,children:u})=>{const m=this.parent,$=[...m.classes].includes("pa-open");return s.jsxs(a,{className:`${d??""}${$?" pa-open":""}`.trim(),children:[s.jsx("div",{className:"pd-words",children:u}),$?s.jsxs(s.Fragment,{children:[s.jsx(n,{chapter:m}),s.jsx(t,{chapter:m}),s.jsx(i,{chapter:m,annotation:ze,family:this.filePanelStates})]}):void 0]})}}defines(e){super.defines(e),e.classes.add(this,"pa-spread")}erase(e){super.erase(e),e.classes.revert(this)}};r(fo,"$Spread");let O=fo;const go=class go extends b{$isAChapter(e){c(e instanceof x,"a spread is a chapter read beside its files, and this is not a chapter")}};r(go,"SpreadSpecification");let Je=go;Wd([l("a spread is a chapter read beside its files")],Je.prototype,"$isAChapter");const Gc=o(O);var Hd=Object.defineProperty,Ld=Object.getOwnPropertyDescriptor,_e=r((p,e,a,n)=>{for(var t=Ld(e,a),i=p.length-1,d;i>=0;i--)(d=p[i])&&(t=d(e,a,t)||t);return t&&Hd(e,a,t),t},"__decorateClass$h");const mi='<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3.5 10.5 8 6 12.5"/></svg>',Rd='<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linejoin="round" stroke-linecap="round"><rect class="ground" x="0.75" y="0.75" width="14.5" height="14.5"/><path d="M3.5 5.5h3l1.5 1.5h4.5v5h-9z"/></svg>',bo=class bo extends W{constructor(){super(...arguments),this.specification=new Se,this.style=k.div`
        ${e=>e.$schemeDeclarations===void 0?"":`.pa-entry { ${e.$schemeDeclarations} }`}
    `}get place(){return A(this.parent).identifier}get referencedChapter(){return this.book.chapterAt(this.place)}get cover(){return this.referencedChapter?.annotations.expressed(I)?.cover??this.book.coverOf(this.place)}get schemeDeclarations(){const e=this.cover?.annotations.expressed(R);if(e!==void 0)return e.declarations;const a=this.referencedChapter?.annotations.expressed(X)?.colour;return a===void 0?void 0:`--colour: ${a};`}$Entry(...e){this.$Format(...e);const a=this.style;this._painted=n=>s.jsx(a,{$schemeDeclarations:this.schemeDeclarations,...n})}defines(e){e.classes.add(this,"pa-entry"),e.containers.add(this,this._painted),(this.place===this.book?.$bookmark||this.place===this.book.open?.mention?.identifier)&&e.classes.add(this,"pa-open")}erase(e){e.classes.revert(this),e.containers.revert(this)}};r(bo,"$Entry");let K=bo;const uo=class uo extends g{constructor(){super(...arguments),this.specification=new Ve}defines(e){e.classes.add(this,"pa-appendix")}erase(e){e.classes.revert(this)}};r(uo,"$Appendix");let Oe=uo;const mo=class mo extends g{constructor(){super(...arguments),this.specification=new Qe}get entries(){return this.chapter.text.find(P).flatMap(a=>a.text.find(f)).filter(a=>!a.is(Ri)&&A(a)!==void 0)}$Bound(){const e=o(Gd),a=o(vi),n=o(Ot),t=this.book;for(const i of this.entries){i.annotations.add(this,s.jsx(e,{}));const d=t.chapterAt(A(i).identifier)?.annotations.expressed(O);if(d===void 0)continue;const u=d.files;i.text.add(this,s.jsx(a,{foldedWriting:u.length===0?void 0:i,annotation:xi}),...u.map(m=>s.jsx(n,{file:m,annotation:ze,family:d.filePanelStates},ke(m))))}super.$Bound()}};r(mo,"$Index");let q=mo;const $o=class $o extends b{$isATableOfContents(e){c(e.is(Z),"an index is a table of contents, and this chapter is not one")}};r($o,"IndexSpecification");let Qe=$o;_e([l("an index is a table of contents")],Qe.prototype,"$isATableOfContents");const ko=class ko extends b{$isASectionOfTheTable(e){c(e instanceof P&&e.chapter?.is(Z)===!0,"the appendix is a section of the table of contents, and this is not one")}};r(ko,"AppendixSpecification");let Ve=ko;_e([l("the appendix is a section of the table of contents")],Ve.prototype,"$isASectionOfTheTable");const xo=class xo extends b{$isARowThatLeadsSomewhere(e){c(e instanceof f&&A(e)!==void 0,"an entry is a row that leads somewhere, and this is not one")}};r(xo,"EntrySpecification");let Se=xo;_e([l("an entry is a row that leads somewhere")],Se.prototype,"$isARowThatLeadsSomewhere");const vo=class vo extends g{constructor(){super(...arguments),this.specification=new aa}defines(e){e.classes.add(this,"pa-folded")}erase(e){e.classes.revert(this)}};r(vo,"$Folded");let cs=vo;const yo=class yo extends ye{get on(){return this.$foldedWriting!==void 0&&[this.$foldedWriting.$is].flat().includes(this.$annotation)}container(e){return super.container({...e,disabled:this.$foldedWriting===void 0,onClick:r(a=>{a.preventDefault(),this.press()},"onClick")})}press(){const e=this.$foldedWriting;if(e===void 0)return;const a=[e.$is].flat();e.$is=this.on?a.filter(n=>n!==this.$annotation):[this.$annotation,...a]}write(){return s.jsx("span",{className:"pd-drawing",dangerouslySetInnerHTML:{__html:mi}})}$Define(){super.$Define(),this.classes.add(this,"pd-fold-chevron")}};r(yo,"$FoldChevron");let ls=yo;const wo=class wo extends W{constructor(){super(...arguments),this.specification=new sa,this.tree=k.div`
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
    `}get section(){return this.parent}get firstPlace(){return this.section.text.find(f).map(e=>A(e)).find(e=>e!==void 0)?.identifier}get part(){const e=this.firstPlace;return e===void 0?void 0:this.book.chapterAt(e)?.part}get open(){const e=this.book.open;return e!==void 0&&e.part?.name===this.part?.name}$TreeFolder(...e){this.$Format(...e);const a=this.tree,n=o(vi),t=o(j),i=o(y);this.style=({className:d,children:u})=>{const m=this.firstPlace,$=[...this.section.classes].includes("pa-open"),w=s.jsx("span",{className:"pd-drawing pd-tree-folder-mark",dangerouslySetInnerHTML:{__html:Rd}});return s.jsxs(a,{className:`${d??""} pd-tree-folder${$?" pa-open":""}`.trim(),children:[s.jsx(n,{foldedWriting:this.section,annotation:xi}),m===void 0?w:s.jsxs(t,{children:[s.jsx(i,{children:m}),w]}),u]})}}defines(e){super.defines(e),e.classes.add(this,"pa-tree-folder"),this.open&&e.classes.add(this,"pa-open")}erase(e){super.erase(e),e.classes.revert(this)}};r(wo,"$TreeFolder");let ea=wo;const jo=class jo extends b{$saidOfASectionOrAnEntry(e){c(e instanceof P&&e.chapter?.is(Z)===!0||e.is(K),"folded is said of a section of a table of contents or of an entry, and this is neither")}};r(jo,"FoldedSpecification");let aa=jo;_e([l("folded is said of a section of a table of contents or of an entry")],aa.prototype,"$saidOfASectionOrAnEntry");const zo=class zo extends b{$isASectionOfTheTable(e){c(e instanceof P&&e.chapter?.is(Z)===!0,"a tree folder is a section of the table of contents, and this is not one")}};r(zo,"TreeFolderSpecification");let sa=zo;_e([l("a tree folder is a section of the table of contents")],sa.prototype,"$isASectionOfTheTable");const Oo=class Oo extends f{get cover(){return this.$cover??this.book?.cover}write(){const e=this.cover,a=o(j),n=o(y);return s.jsxs(a,{children:[s.jsx(n,{children:e.mention.identifier}),s.jsx("span",{className:"pd-drawing",dangerouslySetInnerHTML:{__html:mi}}),e.title.name]})}$Define(){super.$Define(),this.classes.add(this,"pd-tree-root")}};r(Oo,"$TreeRoot");let hs=Oo;const A=r(p=>p.annotations.expressed(Qr)??p.text.find(v).map(e=>e.annotations.expressed(Qr)).find(e=>e!==void 0),"contentOf"),$i=o(K),qc=o(q),Yc=o(Oe),At=o(cs),Ed=o(ls),ki=o(ea),_d=o(hs),Gd=$i,xi=At,vi=Ed;var qd=Object.defineProperty,Yd=Object.getOwnPropertyDescriptor,ee=r((p,e,a,n)=>{for(var t=Yd(e,a),i=p.length-1,d;i>=0;i--)(d=p[i])&&(t=d(e,a,t)||t);return t&&qd(e,a,t),t},"__decorateClass$g");const Ga=r((p,e)=>{const a=new Set(p.text.find(e));return p.text.find(Ei).flatMap(n=>[...a.has(n)?[n]:[],...Ga(n,e)])},"within"),Do=class Do extends g{constructor(){super(...arguments),this.specification=new J}get identifier(){return oe.reference(z.copy(this.text))?.identifier??""}get name(){return oe.reference(z.copy(this.text))?.name??""}get cover(){const e=this.identifier;return this.chapter?.annotations.find(I).map(a=>a.cover).find(a=>a?.mention?.identifier===e)}defines(e){e.classes.add(this,"pa-design")}erase(e){e.classes.revert(this)}};r(Do,"$Design");let C=Do;const Po=class Po extends g{constructor(){super(...arguments),this.specification=new ta}defines(e){e.classes.add(this,"pa-exhibit")}erase(e){e.classes.revert(this)}};r(Po,"$Exhibit");let De=Po;const Ao=class Ao extends g{constructor(){super(...arguments),this.specification=new oa,this.$number=0,this.span=k.span.attrs({className:"pd-plate"})``}note(){const e=this.span;return s.jsxs(s.Fragment,{children:[s.jsx(e,{children:String(this.$number).padStart(2,"0")}),s.jsx("span",{className:"pd-jacket-mini"})]})}defines(e){e.classes.add(this,"pa-plate")}erase(e){e.classes.revert(this)}};r(Ao,"$Plate");let fs=Ao;const Co=class Co extends W{constructor(){super(...arguments),this.specification=new na,this.themeProvider=!0,this.room=k.div`
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
    `}get chapter(){return this.parent}get design(){return this.chapter.annotations.expressed(C)}get plate(){return this.book.chapters.filter(e=>e.is(C)).indexOf(this.chapter)+1}$Room(...e){this.$Format(...e);const a=this.room;this.style=({className:n,children:t})=>{const i=[...this.chapter.classes].includes("pa-open");return te(this.design?.cover,s.jsxs(a,{className:`${n??""} pd-room${i?" pa-open":""}`.trim(),children:[s.jsx("span",{className:"pd-plate",children:String(this.plate).padStart(2,"0")}),t]}))}}defines(e){super.defines(e),e.classes.add(this,"pa-room")}erase(e){super.erase(e),e.classes.revert(this)}};r(Co,"$Room");let gs=Co;const Io=class Io extends f{get references(){const e=this.book?.means?.identifier??"",a=new Map;for(const n of Ga(this.chapter,v)){if(n.parent===this)continue;const t=n.annotations.expressed(ve)?.identifier;if(t===void 0||t.startsWith(e)||a.has(t))continue;const i=z.copy(n.text);a.set(t,oe.reference(i)?.name??i.trim())}return[...a]}write(){const e=o(j),a=o(y);return this.references.map(([n,t],i)=>s.jsxs(e,{children:[s.jsx(a,{children:n}),t,s.jsx("span",{className:"pd-where",children:n.replace(/^\/dougs-/u,"").replace(/\/#?/u," · ").replace(/ · $/u,"").replace(/-/gu," ")})]},i))}$Define(){super.$Define(),this.classes.add(this,"pd-built-in")}};r(Io,"$BuiltIn");let bs=Io;const No=class No extends b{$isAChapter(e){c(e instanceof x,"a design is a chapter, and this is not one")}$namesABook(e){c((e.annotations.expressed(C)?.identifier??"")!=="","a design names the book it is of, and this one names nothing")}$holdsTheCover(e){c(e.annotations.expressed(C)?.cover!==void 0,"a design holds the cover of the book it is of, as a volume, and this one holds none")}$showsItselfAsBuilt(e){c(e instanceof x&&Ga(e,f).some(a=>a.is(De)),"a design shows itself as built, in a paragraph said to be the exhibit, and this one shows nothing")}};r(No,"DesignSpecification");let J=No;ee([l("a design is a chapter")],J.prototype,"$isAChapter");ee([l("a design names the book it is of")],J.prototype,"$namesABook");ee([l("a design holds the cover of the book it is of")],J.prototype,"$holdsTheCover");ee([l("a design shows itself as built")],J.prototype,"$showsItselfAsBuilt");const Mo=class Mo extends b{$isAParagraphOfADesignHoldingOneImage(e){c(e instanceof f&&e.chapter?.is(C)===!0&&e.text.find(wt).length===1,"an exhibit is a paragraph of a design that holds one image, and this is not one")}};r(Mo,"ExhibitSpecification");let ta=Mo;ee([l("an exhibit is a paragraph of a design that holds one image")],ta.prototype,"$isAParagraphOfADesignHoldingOneImage");const To=class To extends b{$saidOfAnEntryLeadingToADesign(e){c(e.is(K)&&e.annotations.expressed(K)?.referencedChapter?.is(C)===!0,"a plate is said of an entry that leads to a design, and this is not one")}};r(To,"PlateSpecification");let oa=To;ee([l("a plate is said of an entry that leads to a design")],oa.prototype,"$saidOfAnEntryLeadingToADesign");const Fo=class Fo extends b{$isADesign(e){c(e instanceof x&&e.is(C),"a room is a chapter that is a design, and this is not one")}};r(Fo,"RoomSpecification");let na=Fo;ee([l("a room is a chapter that is a design")],na.prototype,"$isADesign");const Zc=o(C),Uc=o(De),Zd=o(fs),Ud=o(gs),Xd=o(bs);var Kd=Object.defineProperty,Jd=Object.getOwnPropertyDescriptor,T=r((p,e,a,n)=>{for(var t=Jd(e,a),i=p.length-1,d;i>=0;i--)(d=p[i])&&(t=d(e,a,t)||t);return t&&Kd(e,a,t),t},"__decorateClass$f");const te=r((p,e,a)=>{const n=p?.annotations.expressed(R)?.painted;return n===void 0?e:s.jsx(n,{children:e},a)},"painted"),Bo=class Bo extends F{constructor(){super(...arguments),this.specification=new pe}get name(){return this.chapter?.title?.name??""}get author(){return this.chapter?.annotations.expressed(yt)?.name??""}get illustration(){return this.chapter?.text.find(f).find(e=>e.is(Pe))}get drawing(){const e=this.illustration?.text.find(La)[0];return e===void 0?"":z.copy(e.text).trim()}get scheme(){return this.chapter?.annotations.expressed(R)}get window(){return this.chapter?.annotations.expressed(de)}};r(Bo,"$BookshelfCover");let ie=Bo;const Wo=class Wo extends g{constructor(){super(...arguments),this.specification=new da}defines(e){e.classes.add(this,"pa-illustration")}erase(e){e.classes.revert(this)}};r(Wo,"$Illustration");let Pe=Wo;const Ho=class Ho extends W{constructor(){super(...arguments),this.specification=new Ae,this.$ground="",this.$band="",this.$bandInk="",this.$foot="",this.$footInk="",this.$ink="",this.style=k.div.attrs({className:"pd-scheme"})`
        ${e=>e.$scheme}
    `}get colours(){return[this.$ground,this.$band,this.$bandInk,this.$foot,this.$footInk,this.$ink]}get declarations(){return`--ground: ${this.$ground}; --band: ${this.$band}; --band-ink: ${this.$bandInk}; --foot: ${this.$foot}; --foot-ink: ${this.$footInk}; --ink: ${this.$ink};`}get painted(){return this._painted}$Scheme(...e){this.$Format(...e);const a=this.style;this._painted=n=>s.jsx(a,{$scheme:this.declarations,...n})}defines(e){e.classes.add(this,"pa-scheme"),e.containers.add(this,this._painted)}erase(e){e.classes.revert(this),e.containers.revert(this)}};r(Ho,"$Scheme");let R=Ho;const Lo=class Lo extends g{constructor(){super(...arguments),this.specification=new Ce,this.$x="",this.$y=""}get declarations(){return`--window-x: ${this.$x}px; --window-y: ${this.$y}px;`}};r(Lo,"$Window");let de=Lo;const Ro=class Ro extends g{constructor(){super(...arguments),this.specification=new Ie}get cover(){return this._cover}get jacket(){return this._cover?.annotations.expressed(F)}$Volume(...e){this._cover=e.find(a=>a instanceof x),this.$Annotation(...e.filter(a=>a!==this._cover))}defines(e){e.classes.add(this,"pa-volume")}erase(e){e.classes.revert(this)}};r(Ro,"$Volume");let I=Ro;const Eo=class Eo extends f{get cover(){return this.$cover?.annotations.expressed(F)}$Jacket(...e){this.$Writing(...e),this._painted=a=>{const n=this.cover?.scheme?.painted;return n===void 0?s.jsx("div",{...a}):s.jsx(n,{...a})},this.containers.add(this,this._painted)}write(){const e=this.cover;if(e===void 0)return;const a=o(j),n=o(Ea);return s.jsxs(s.Fragment,{children:[s.jsx(a,{children:e.name}),s.jsx("span",{className:"pd-drawing",dangerouslySetInnerHTML:{__html:e.drawing}}),s.jsxs(a,{children:[s.jsx(n,{}),e.author]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-jacket")}};r(Eo,"$Jacket");let us=Eo;const _o=class _o extends f{constructor(){super(...arguments),this.unfolded=!1}get filedElsewhere(){return this.$subject!==void 0&&this.$subject!==this.$cover}container(e){return super.container({onMouseOver:r(a=>{a.target instanceof Element&&a.target.closest(".pd-filed")!==null&&this.unfold()},"onMouseOver"),onMouseLeave:r(()=>this.fold(),"onMouseLeave"),...e})}unfold(){this.unfolded=!0}fold(){this.unfolded=!1}write(){const e=this.$cover,a=this.$subject;if(e!==void 0)return s.jsxs(s.Fragment,{children:[this.filedElsewhere?te(a,s.jsx("span",{className:"pd-filed",children:this.mark(a)})):void 0,te(e,s.jsx("span",{className:"pd-own",children:this.mark(e)})),s.jsxs("span",{className:"pd-names",children:[te(e,s.jsx("span",{className:"pd-name",children:this.name(e)})),this.filedElsewhere?te(a,s.jsx("span",{className:"pd-name pd-under",children:this.name(a)})):void 0]})]})}mark(e){const a=o(sp),n=o(y);return s.jsx(a,{cover:e,children:s.jsx(n,{children:e.mention.identifier})})}name(e){const a=o(j),n=o(y);return s.jsxs(a,{children:[s.jsx(n,{children:e.mention.identifier}),e.title.name]})}$Define(){super.$Define(),this.classes.add(this,"pd-logo");const e=o(tp);this.annotations.add(this,s.jsx(e,{}))}};r(_o,"$Logo");let ra=_o;const Go=class Go extends g{constructor(){super(...arguments),this.specification=new ia}defines(e){e.unfolded&&e.classes.add(this,"pa-unfolded")}erase(e){e.classes.revert(this)}};r(Go,"$Unfolded");let ms=Go;const qo=class qo extends b{$saidOfALogo(e){c(e instanceof ra,"unfolded is said of a logo, and this is not one")}};r(qo,"UnfoldedSpecification");let ia=qo;T([l("unfolded is said of a logo")],ia.prototype,"$saidOfALogo");const Yo=class Yo extends v{constructor(){super(...arguments),this.style=k.span`
        ${e=>e.$vars}
    `}get cover(){return this.$cover?.annotations.expressed(F)}$Mark(...e){this.$Writing(...e);const a=this.style;this._painted=n=>s.jsx(a,{$vars:`${this.cover?.scheme?.declarations??""} ${this.cover?.window?.declarations??""}`,...n}),this.containers.add(this,this._painted)}write(){return s.jsx("span",{className:"pd-drawing",dangerouslySetInnerHTML:{__html:this.cover?.drawing??""}})}$Define(){super.$Define(),this.classes.add(this,"pd-mark")}};r(Yo,"$Mark");let $s=Yo;const Zo=class Zo extends _i{$carriesItsScheme(e){c(e.is(R),"a bookshelf cover carries its scheme, and this one carries none")}$carriesItsWindow(e){c(e.is(de),"a bookshelf cover carries its window, and this one carries none")}$carriesItsIllustration(e){c(e instanceof x&&e.text.find(f).some(a=>a.is(Pe)),"a bookshelf cover carries its illustration, and this one carries none")}};r(Zo,"BookshelfCoverSpecification");let pe=Zo;T([l("a bookshelf cover carries its scheme")],pe.prototype,"$carriesItsScheme");T([l("a bookshelf cover carries its window")],pe.prototype,"$carriesItsWindow");T([l("a bookshelf cover carries its illustration")],pe.prototype,"$carriesItsIllustration");const Uo=class Uo extends b{$saidOfADrawing(e){c(e instanceof f&&e.chapter?.is(F)===!0&&e.text.find(La).length===1,"an illustration is a paragraph of a cover that holds one drawing, and this is not one")}};r(Uo,"IllustrationSpecification");let da=Uo;T([l("an illustration is a paragraph of a cover that holds one drawing")],da.prototype,"$saidOfADrawing");const Xo=class Xo extends b{$isACover(e){c(e instanceof x&&e.is(F),"a cover has a scheme, and this is not a cover")}$givenItsColours(e){const a=e.annotations.expressed(R)?.colours??[];c(a.every(n=>/^#[0-9a-f]{6}$/iu.test(n)),"a scheme is given its six colours as six hex digits each — the ground, the band and its ink, the foot and its ink, and the ink of the drawing — and this one was given something else")}};r(Xo,"SchemeSpecification");let Ae=Xo;T([l("a cover has a scheme")],Ae.prototype,"$isACover");T([l("a scheme is given its six colours")],Ae.prototype,"$givenItsColours");const Ko=class Ko extends b{$isACover(e){c(e instanceof x&&e.is(F),"a cover has a window, and this is not a cover")}$givenItsPlace(e){const a=e.annotations.expressed(de);c(/^-?\d+$/u.test(a?.$x??"")&&/^-?\d+$/u.test(a?.$y??""),"a window is given where it stands on the drawing, two whole numbers, and this one was given something else")}};r(Ko,"WindowSpecification");let Ce=Ko;T([l("a cover has a window")],Ce.prototype,"$isACover");T([l("a window is given where it stands on the drawing")],Ce.prototype,"$givenItsPlace");const Jo=class Jo extends b{$saidOfAChapterStandingForABook(e){c(e instanceof x&&(e.is(L)||e.is(F)||e.is(C)),"a volume is a chapter that stands for another book, a synopsis of it, a cover filed under it or a design of it, and this is none")}$holdsTheCover(e){const a=[e.annotations.expressed(L)?.means?.identifier,e.annotations.expressed(ei)?.means?.identifier,e.annotations.expressed(yt)?.means?.identifier,e.annotations.expressed(C)?.identifier];c(e.annotations.find(I).every(n=>n.cover?.is(F)===!0&&a.includes(n.cover.mention?.identifier)),"a volume holds the cover of a book its chapter stands for, the book a synopsis or a design is of or the subject or author a cover is filed under, and one here holds something else")}};r(Jo,"VolumeSpecification");let Ie=Jo;T([l("a volume is a chapter that stands for another book")],Ie.prototype,"$saidOfAChapterStandingForABook");T([l("a volume holds the cover of a book its chapter stands for")],Ie.prototype,"$holdsTheCover");const Qd=o(ie),yi=o(Pe),wi=o(R),ji=o(de),Vd=o(I),Sd=o(us),ep=o(ra),ap=o(ms),zi=o($s),sp=zi,tp=ap,Wa=class Wa extends Gi{constructor(){super(...arguments),this.specification=new N,this.themeProvider=!0,this.style=k.div`
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
    `}get pages(){return this.book.pages}get open(){const e=this.book;return e.open??e.synopsis}$Bound(){const e=this.style,a=this.book;this.style=n=>s.jsx(e,{$at:a.means?.identifier,$scheme:a.cover?.annotations.expressed(R)?.declarations,...n}),super.$Bound()}defines(e){for(const n of e.annotations.after(this))n instanceof Wa&&e.annotations.express(n,!1);super.defines(e),e.classes.add(this,"pa-layout");const a=this.book.open;a!==void 0&&e.classes.add(this,"pa-turned"),a?.is(O)&&e.classes.add(this,"pa-manual")}erase(e){super.erase(e),e.classes.revert(this)}parts(){return[this.paging(),this.regions(),this.areas(),this.phone()]}paging(){return h`
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
        `}};r(Wa,"$Layout");let Ne=Wa;const qa=o(Ne),Ha=class Ha extends g{constructor(){super(...arguments),this.specification=new N}defines(e){for(const a of e.annotations.after(this))a instanceof Ha&&e.annotations.express(a,!1);e.classes.add(this,"pa-tone")}erase(e){e.classes.revert(this)}};r(Ha,"$Tone");let ce=Ha;const Qo=class Qo extends ce{defines(e){super.defines(e),e.classes.add(this,"pa-dark")}};r(Qo,"$Dark");let ks=Qo;const Vo=class Vo extends ce{defines(e){super.defines(e),e.classes.add(this,"pa-light")}};r(Vo,"$Light");let xs=Vo;const So=class So extends ce{defines(e){super.defines(e),e.classes.add(this,"pa-white-over-black")}};r(So,"$WhiteOverBlack");let vs=So;const ae=o(ce),Oi=o(ks),xe=o(xs),op=o(vs);var np=Object.defineProperty,rp=Object.getOwnPropertyDescriptor,ip=r((p,e,a,n)=>{for(var t=rp(e,a),i=p.length-1,d;i>=0;i--)(d=p[i])&&(t=d(e,a,t)||t);return t&&np(e,a,t),t},"__decorateClass$e");const en=class en extends v{write(){const e=this.book.body;return`${e.indexOf(this.chapter)+1} of ${e.length}`}$Define(){super.$Define(),this.classes.add(this,"pd-count")}};r(en,"$Count");let ys=en;const an=class an extends g{constructor(){super(...arguments),this.specification=new Me}defines(e){e.classes.add(this,"pa-before")}erase(e){e.classes.revert(this)}};r(an,"$Before");let ws=an;const sn=class sn extends g{constructor(){super(...arguments),this.specification=new Me}defines(e){e.classes.add(this,"pa-after")}erase(e){e.classes.revert(this)}};r(sn,"$After");let js=sn;const tn=class tn extends b{$saidOfAWordOfATurn(e){c(e instanceof v&&e.parent instanceof pa,"this is said of a word of a turn, and here it is said of something else")}};r(tn,"OfATurnSpecification");let Me=tn;ip([l("this is said of a word of a turn")],Me.prototype,"$saidOfAWordOfATurn");const dp=o(ys),pp=o(ws),cp=o(js),on=class on extends f{get before(){const e=this.book.body;return e[e.indexOf(this.chapter)-1]??this.chapter}get after(){const e=this.book.body;return e[e.indexOf(this.chapter)+1]??this.chapter}write(){const e=o(j),a=o(dp),n=o(pp),t=o(cp),i=o(this.before===this.chapter?Za:y),d=o(this.after===this.chapter?Za:y);return s.jsxs(s.Fragment,{children:[s.jsxs(e,{children:[s.jsx(n,{}),s.jsx(i,{children:this.before.mention.identifier}),"← ",this.before.title.name]}),s.jsx(a,{}),s.jsxs(e,{children:[s.jsx(t,{}),s.jsx(d,{children:this.after.mention.identifier}),this.after.title.name," →"]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-turn")}};r(on,"$Turn");let pa=on;const lp=o(pa);var hp=Object.defineProperty,fp=Object.getOwnPropertyDescriptor,Ge=r((p,e,a,n)=>{for(var t=n>1?void 0:n?fp(e,a):e,i=p.length-1,d;i>=0;i--)(d=p[i])&&(t=(n?d(e,a,t):d(t))||t);return n&&t&&hp(e,a,t),t},"__decorateClass$d");const nn=class nn extends qi{constructor(){super(...arguments),this.specification=new M}get chapters(){return this.text.find(x).filter(e=>[...e.classes].includes("pd-canonical"))}get laidOutChapters(){return[this.cover,this.synopsis,this.table,...this.chapters]}get pages(){return[this.synopsis,...this.chapters].filter(e=>e!==void 0)}get body(){const e=this.appendix;return this.chapters.filter(a=>!e.includes(a))}get appendix(){const e=this.table;if(e===void 0)return[];const a=e.text.find(P).filter(n=>n.is(Oe)).flatMap(n=>n.text.find(f).map(t=>A(t)?.identifier));return this.chapters.filter(n=>a.includes(n.mention?.identifier??""))}get open(){return this.$bookmark===void 0?void 0:this.chapterAt(this.$bookmark)}get tones(){return[Oi,xe,op]}get topics(){return this.cover?.annotations.find(ai)??[]}write(){return s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"pd-library",children:this.library()}),s.jsx("div",{className:"pd-me",children:this.me()}),s.jsx("div",{className:"pd-holds",children:this.holds()}),s.jsx("div",{className:"pd-head",children:this.head()}),s.jsxs("div",{className:"pd-pages",children:[this.aboveThePages(),this.pages.map((e,a)=>{const n=o(e);return s.jsx(n,{},a)}),this.belowThePages()]})]})}library(){if(this._logo===void 0)return;const e=o(this._logo);return s.jsx(e,{})}me(){const e=o(zi),a=o(y),n=o(rd),t=this.coverOf(this.author?.means?.identifier);return s.jsxs(s.Fragment,{children:[this.byline(),t===void 0?void 0:this.painted(t,s.jsx(e,{cover:t,children:s.jsx(a,{children:t.mention.identifier})})),this.topics.length===0?void 0:s.jsx(n,{cover:this.cover})]})}painted(e,a,n){return te(e,a,n)}holds(){const e=o(this.table);return s.jsx(e,{})}head(){const e=o(this.cover);return s.jsxs(s.Fragment,{children:[s.jsx(e,{}),s.jsx("div",{className:"pd-switches",children:this.switches()})]})}aboveThePages(){}belowThePages(){}chapterAt(e){return(this._chapterByPlace??this.chapterByPlace()).get(e)}chapterByPlace(){const e=new Map;for(const a of this.chapters)for(const n of this.sections(a))n.mention!==void 0&&!e.has(n.mention.identifier)&&e.set(n.mention.identifier,a);for(const a of this.chapters)a.mention!==void 0&&e.set(a.mention.identifier,a);return e}coverOf(e){if(e!==void 0)return this.means?.identifier===e?this.cover:this.cover?.annotations.find(I).map(a=>a.cover).find(a=>a?.mention?.identifier===e)}byline(){const e=o(hi);return s.jsx(e,{chapter:this.cover})}root(){const e=o(_d);return s.jsx(e,{cover:this.cover})}switches(){}sections(e){return e.text.find(P).flatMap(a=>[a,...this.sections(a)])}sectionOf(e){const a=this.table;return a===void 0?void 0:this.sections(a).find(n=>n.canonical?.name===e.name)}turn(){this.bookmark!==this.cover&&super.turn()}$Define(){super.$Define();const e=o(qa),a=o(ae);this.annotations.add(this,s.jsx(e,{}),s.jsx(a,{}))}$Bound(){this._chapterByPlace=this.chapterByPlace();const e=o(ki),a=this.table?.annotations.expressed(Z);for(const i of a?.parts??[]){const d=this.sectionOf(i);d===void 0||d.is(ea)||!i.chapters.some(u=>u.is(O))||d.annotations.add(this,s.jsx(e,{}))}const n=this.root();n!==void 0&&this.table?.text.add(this,n);const t=o(ep);this._logo=Yi.chemical(s.jsx(t,{cover:this.cover,subject:this.coverOf(this.subject?.means?.identifier)}),this),this.turns(),super.$Bound()}turns(){const e=o(lp);for(const a of this.body)a.text.add(this,s.jsx(e,{}))}};r(nn,"$LibraryBook");let B=nn;Ge([si()],B.prototype,"_chapterByPlace",2);const rn=class rn extends Zi{$holdsOnlyChapters(e){c([...e.text].every(a=>a instanceof x),"a book of this library holds only chapters, and this one holds something else")}$placesEveryChapter(e){c(e.text.find(x).every(a=>e.laidOutChapters.includes(a)),"a book of this library has a place for every chapter it holds, and this one holds a chapter it places nowhere")}$onlyAChapterAppends(e){c(e.text.find(x).every(a=>e.chapters.includes(a)||!a.is(G)),"only an ordinary chapter files a file, and here a cover, a synopsis or a table of contents files one")}$listsEachManualPart(e){const n=(e.table?.annotations.expressed(Z)?.parts??[]).find(t=>t.chapters.some(i=>i.is(O))&&e.sectionOf(t)===void 0);c(n===void 0,`a part read as a manual is listed under a section headed with its name, and "${n?.name}" has none`)}};r(rn,"LibraryBookSpecification");let M=rn;Ge([l("a book of this library holds only chapters")],M.prototype,"$holdsOnlyChapters",1);Ge([l("a book of this library has a place for every chapter it holds")],M.prototype,"$placesEveryChapter",1);Ge([l("only an ordinary chapter files a file")],M.prototype,"$onlyAChapterAppends",1);Ge([l("a part read as a manual is listed under a section headed with its name")],M.prototype,"$listsEachManualPart",1);const Di=o(B);o(Di,$e)(ad);o(Di,ae)(Oi);var gp=Object.defineProperty,bp=Object.getOwnPropertyDescriptor,up=r((p,e,a,n)=>{for(var t=bp(e,a),i=p.length-1,d;i>=0;i--)(d=p[i])&&(t=d(e,a,t)||t);return t&&gp(e,a,t),t},"__decorateClass$c");const dn=class dn extends B{constructor(){super(...arguments),this.specification=new Te}get open(){return super.open??this.body[0]}head(){}switches(){}root(){}$Define(){super.$Define(),this.$is=[Pt,ui]}$Bound(){const e=o(ki);for(const a of this.table?.text.find(P)??[])a.annotations.add(this,s.jsx(e,{})),a.is(Oe)&&(a.$is=[At]);super.$Bound()}};r(dn,"$Manual");let ca=dn;const pn=class pn extends M{$everyChapterHasABrief(e){c(e.chapters.every(a=>a.text.find(f).some(n=>n.is(Xe))),"every chapter of a manual opens with a brief, and one here has none")}};r(pn,"ManualSpecification");let Te=pn;up([l("every chapter of a manual opens with a brief")],Te.prototype,"$everyChapterHasABrief");const Ct=o(ca);o(Ct,ae)(xe);var mp=Object.defineProperty,$p=Object.getOwnPropertyDescriptor,It=r((p,e,a,n)=>{for(var t=$p(e,a),i=p.length-1,d;i>=0;i--)(d=p[i])&&(t=d(e,a,t)||t);return t&&mp(e,a,t),t},"__decorateClass$b");const cn=class cn extends g{constructor(){super(...arguments),this.specification=new le}get date(){return this.text.find(jt)[0]}defines(e){e.classes.add(this,"pa-dated")}erase(e){e.classes.revert(this)}note(){const e=o(this.date);return s.jsx(e,{})}};r(cn,"$Dated");let Y=cn;const ln=class ln extends b{$saidOfAChapter(e){c(e instanceof x,"dated is said of a chapter, and this is not one")}$datedOnce(e){c(e.annotations.containsOne(Y),"a chapter is dated once, and this one is dated more than once")}$givenOneDate(e){c(e.annotations.expressed(Y)?.text.find(jt).length===1,"a dated chapter is given one date, and this one is given none or more than one")}};r(ln,"DatedSpecification");let le=ln;It([l("dated is said of a chapter")],le.prototype,"$saidOfAChapter");It([l("a chapter is dated once")],le.prototype,"$datedOnce");It([l("a dated chapter is given one date")],le.prototype,"$givenOneDate");const Xc=o(Y),hn=class hn extends K{constructor(){super(...arguments),this.label=k.span.attrs({className:"pa-number"})``}get number(){return this.book.body.indexOf(this.referencedChapter)+1}get keyed(){return this.referencedChapter?.annotations.expressed(_)}note(){const e=this.label,a=o(gi),n=this.keyed;return s.jsxs(s.Fragment,{children:[super.note(),n===void 0?void 0:s.jsx(a,{keyed:n}),this.number===0?void 0:s.jsx(e,{children:String(this.number)})]})}};r(hn,"$NumberedEntry");let zs=hn;const kp=o(zs);o(Ct,$i)(kp);const fn=class fn extends ie{constructor(){super(...arguments),this.style=k.header`
        .pd-chapter.pa-cover { margin-block: 0; }
        .pa-cover .pd-title {
            font-size: calc(1.04 * ${({theme:e})=>e.size});
            font-weight: 600;
        }
    `}};r(fn,"$ManualCover");let Os=fn;const gn=class gn extends Z{constructor(){super(...arguments),this.style=k.nav`
        .pa-table-of-contents .pa-reference { color: inherit; text-decoration: none; }
    `}};r(gn,"$ManualTableOfContents");let Ds=gn;const Kc=o(Os),Jc=o(Ds),bn=class bn extends U{constructor(){super(...arguments),this.measure="104ch",this.holdsColumn="272px",this.barHeight="52px",this.space="24px",this.size="14px",this.beat="0.22s",this.serif="'Source Serif 4', Georgia, serif",this.paper="#fdfcfa",this.ink="#343c4a",this.heading="#1a1f36",this.soft="#727d8c",this.faint="#9ea8b5",this.line="#e4e9f2",this.tint="#f0f4fc",this.barTint="#f8fafe",this.side="#f7f8fb",this.sideInk="#3a4452",this.sideDim="#6b7684",this.sideLine="#e0e4eb",this.sky="#e3edfb",this.skyInk="#4a6ea0",this.accent="#4a6ea0",this.colour="#4fb3a8",this.radius="6px",this.wash="linear-gradient(135deg, #f1f5fd 0%, #fdfcfa 48%, #fdf5ee 100%)"}parts(){return[...super.parts(),this.tree(),this.icons(),this.small()]}library(){return h`
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
        `}};r(bn,"$ManualTheme");let Ps=bn;const xp=o(Ps);o(Ct,$e)(xp);var vp=Object.defineProperty,yp=Object.getOwnPropertyDescriptor,wp=r((p,e,a,n)=>{for(var t=yp(e,a),i=p.length-1,d;i>=0;i--)(d=p[i])&&(t=d(e,a,t)||t);return t&&vp(e,a,t),t},"__decorateClass$a");const un=class un extends g{constructor(){super(...arguments),this.specification=new la}defines(e){e.classes.add(this,"pa-first")}erase(e){e.classes.revert(this)}};r(un,"$First");let As=un;const mn=class mn extends b{$saidOfAParagraph(e){c(e instanceof f,"first is said of a paragraph, and this is not one")}};r(mn,"FirstSpecification");let la=mn;wp([l("first is said of a paragraph")],la.prototype,"$saidOfAParagraph");const Qc=o(As),$n=class $n extends U{constructor(){super(...arguments),this.serif="'Source Serif 4', Georgia, serif",this.paper="#fdfcfa",this.ink="#343c4a",this.soft="#727d8c",this.faint="#9ea8b5",this.line="#e4e9f2",this.tint="#f0f4fc",this.barTint="#f8fafe",this.sky="#e3edfb",this.skyInk="#4a6ea0",this.accent="#4a6ea0",this.wash="linear-gradient(135deg, #f2f6fd 0%, #fdfcfa 48%, #fdf6f1 100%)",this.side="#f7f8fb",this.sideInk="#3a4452",this.sideDim="#7f8a9b",this.sideLine="#e3e7ee",this.barHeight="52px",this.holdsColumn="232px",this.space="24px",this.cover="132px",this.volume="184px",this.radius="6px",this.spine="inset 3px 0 0 rgba(0, 0, 0, 0.08), inset 4px 0 0 rgba(255, 255, 255, 0.35), 0 6px 12px -10px rgba(44, 52, 64, 0.3)",this.lift="inset 3px 0 0 rgba(0, 0, 0, 0.08), inset 4px 0 0 rgba(255, 255, 255, 0.35), 0 10px 16px -12px rgba(44, 52, 64, 0.35)",this.openSpine="inset 7px 0 0 rgba(0, 0, 0, 0.07), inset 9px 0 0 rgba(255, 255, 255, 0.45), 0 12px 22px -16px rgba(44, 52, 64, 0.35)"}parts(){return[...super.parts(),this.shelf(),this.jackets(),this.desk(),this.unfolded(),this.small()]}page(){return h`
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
        `}};r($n,"$Bookshelf");let Cs=$n;const jp=o(Cs);var zp=Object.defineProperty,Op=Object.getOwnPropertyDescriptor,Ya=r((p,e,a,n)=>{for(var t=n>1?void 0:n?Op(e,a):e,i=p.length-1,d;i>=0;i--)(d=p[i])&&(t=(n?d(e,a,t):d(t))||t);return n&&t&&zp(e,a,t),t},"__decorateClass$9");const kn=class kn extends B{get books(){return this.text.find(x).filter(e=>e.is(L)&&e!==this.synopsis)}get laidOutChapters(){return[...super.laidOutChapters,...this.books]}get pages(){return[this.synopsis,...this.books,...this.chapters]}head(){return s.jsx("div",{className:"pd-switches",children:this.switches()})}belowThePages(){return s.jsx("div",{className:"pd-shelf",children:this.volumes()})}volumes(){const e=o(j),a=o(y);return(this.table?.annotations.expressed(q)?.entries??[]).map((t,i)=>{const d=A(t).identifier,u=this.chapterAt(d),m=u===void 0?this.coverOf(d):this.jacketOf(u);if(m!==void 0)return s.jsxs("div",{className:"pd-volume",children:[this.jacket(m,d),s.jsx("div",{className:"pd-paragraph pd-name",children:s.jsxs(e,{children:[s.jsx(a,{children:d}),m.title.name]})})]},i)})}jacket(e,a){if(e===void 0)return;const n=o(Sd),t=o(y);return a===void 0?s.jsx(n,{cover:e}):s.jsx(n,{cover:e,children:s.jsx(t,{children:a})})}line(e){if(e===void 0)return;const a=o(hi),n=o(nd);return s.jsxs(s.Fragment,{children:[s.jsx(a,{cover:e}),s.jsx(n,{cover:e})]})}wayIntoTheBook(e){if(e===void 0)return;const a=o(j),n=o(y),t=e.mention.identifier;return s.jsx("div",{className:"pd-paragraph pd-read",children:s.jsxs(a,{children:[s.jsx(n,{children:t}),`Read ${e.title.name}`]})})}jacketOf(e){return e===this.synopsis?this.cover:e.annotations.expressed(I)?.cover??(this.appendix.includes(e)?void 0:this.cover)}coverOf(e){return super.coverOf(e)??this.books.map(a=>a.annotations.expressed(I)?.cover).find(a=>a!==void 0&&a.mention?.identifier===e)}chapterAt(e){return super.chapterAt(e)??this.books.find(a=>this.placeOf(a)===e)}placeOf(e){const a=e.title?.annotations.expressed(Ra)?.identifier,n=this.means?.identifier;if(!(a===void 0||n===void 0))return`${n.replace(/\/+$/u,"")}/#${a}`}$Bound(){const e=o(Cp);for(const a of[this.synopsis,...this.books])a?.annotations.add(this,s.jsx(e,{}));super.$Bound()}};r(kn,"$Catalogue");let Is=kn;const xn=class xn extends W{constructor(){super(...arguments),this.specification=new ha,this.card=k.div`
        &:not(.pa-open) { display: none; }
    `}get chapter(){return this.parent}get catalogue(){return this.book}get isTheFront(){return this.chapter===this.catalogue.synopsis}get cover(){return this.catalogue.jacketOf(this.chapter)}$CatalogueDesk(...e){this.$Format(...e);const a=o(_a),n=this.card;this.style=({className:t,children:i})=>{const d=this.catalogue,u=this.cover,m=[...this.chapter.classes].includes("pa-open"),$=this.isTheFront?o(d.title):void 0;return d.painted(u,s.jsxs(n,{className:`${t??""} pd-catalogue-desk${m?" pa-open":""}`.trim(),children:[d.jacket(u),s.jsxs("div",{className:"pd-words",children:[$===void 0?void 0:s.jsx($,{}),i]}),u===void 0||this.isTheFront?void 0:s.jsx("div",{className:"pd-line",children:d.line(u)}),d.wayIntoTheBook(u),u===void 0?void 0:s.jsx(a,{chapter:this.chapter,annotation:Ap,children:"read on"})]}))}}defines(e){super.defines(e),e.classes.add(this,"pa-catalogue-desk")}erase(e){super.erase(e),e.classes.revert(this)}};r(xn,"$CatalogueDesk");let Ns=xn;const vn=class vn extends b{$holdsASynopsis(e){c(e instanceof x&&e.is(L),"a catalogue desk holds a synopsis, and this is not one")}};r(vn,"CatalogueDeskSpecification");let ha=vn;Ya([l("a catalogue desk holds a synopsis")],ha.prototype,"$holdsASynopsis",1);const yn=class yn extends ti{get identifier(){return this._book??super.identifier}$Bound(){super.$Bound(),this._book=this.chapter?.annotations.expressed(L)?.means?.identifier}};r(yn,"$BookLink");let fa=yn;Ya([si()],fa.prototype,"_book",2);const wn=class wn extends g{constructor(){super(...arguments),this.specification=new ga}defines(e){e.classes.add(this,"pa-caption")}erase(e){e.classes.revert(this)}};r(wn,"$Caption");let Ms=wn;const jn=class jn extends g{constructor(){super(...arguments),this.specification=new ba}defines(e){e.classes.add(this,"pa-arrow")}erase(e){e.classes.revert(this)}};r(jn,"$Arrow");let Ts=jn;const zn=class zn extends g{constructor(){super(...arguments),this.specification=new N}defines(e){e.classes.add(this,"pa-unfolded-desk")}erase(e){e.classes.revert(this)}};r(zn,"$UnfoldedDesk");let Fs=zn;const On=class On extends b{$isAParagraph(e){c(e instanceof f,"a caption is a paragraph, and this is not one")}};r(On,"CaptionSpecification");let ga=On;Ya([l("a caption is a paragraph")],ga.prototype,"$isAParagraph",1);const Dn=class Dn extends b{$isAWordOfTheTable(e){c(e instanceof v&&e.chapter?.is(Z)===!0,"an arrow is a word of the table of contents, and this is not one")}};r(Dn,"ArrowSpecification");let ba=Dn;Ya([l("an arrow is a word of the table of contents")],ba.prototype,"$isAWordOfTheTable",1);const Nt=o(Is),Dp=o(Ns),Pp=o(fa),Vc=o(Ms),Sc=o(Ts),Ap=o(Fs),Cp=Dp;o(Nt,Za)(Pp);o(Nt,$e)(jp);o(Nt,ae)(xe);var Ip=Object.defineProperty,Np=Object.getOwnPropertyDescriptor,qe=r((p,e,a,n)=>{for(var t=Np(e,a),i=p.length-1,d;i>=0;i--)(d=p[i])&&(t=d(e,a,t)||t);return t&&Ip(e,a,t),t},"__decorateClass$8");const Pn=class Pn extends g{constructor(){super(...arguments),this.specification=new ma}defines(e){e.classes.add(this,"pa-question")}erase(e){e.classes.revert(this)}};r(Pn,"$Question");let Bs=Pn;const An=class An extends g{constructor(){super(...arguments),this.specification=new $a}defines(e){e.classes.add(this,"pa-answer")}erase(e){e.classes.revert(this)}};r(An,"$Answer");let Ws=An;const Cn=class Cn extends g{constructor(){super(...arguments),this.specification=new ka}defines(e){e.classes.add(this,"pa-decision")}erase(e){e.classes.revert(this)}};r(Cn,"$Decision");let ua=Cn;const In=class In extends g{constructor(){super(...arguments),this.specification=new xa}defines(e){e.classes.add(this,"pa-pain")}erase(e){e.classes.revert(this)}};r(In,"$Pain");let Hs=In;const Nn=class Nn extends g{constructor(){super(...arguments),this.specification=new va}defines(e){e.classes.add(this,"pa-solution")}erase(e){e.classes.revert(this)}};r(Nn,"$Solution");let Ls=Nn;const Mn=class Mn extends b{$isAParagraph(e){c(e instanceof f,"a question is a paragraph, and this is not one")}};r(Mn,"QuestionSpecification");let ma=Mn;qe([l("a question is a paragraph")],ma.prototype,"$isAParagraph");const Tn=class Tn extends b{$isAParagraph(e){c(e instanceof f,"an answer is a paragraph, and this is not one")}};r(Tn,"AnswerSpecification");let $a=Tn;qe([l("an answer is a paragraph")],$a.prototype,"$isAParagraph");const Fn=class Fn extends b{$isAParagraph(e){c(e instanceof f,"a decision is a paragraph, and this is not one")}};r(Fn,"DecisionSpecification");let ka=Fn;qe([l("a decision is a paragraph")],ka.prototype,"$isAParagraph");const Bn=class Bn extends b{$isAParagraph(e){c(e instanceof f,"a pain is a paragraph, and this is not one")}};r(Bn,"PainSpecification");let xa=Bn;qe([l("a pain is a paragraph")],xa.prototype,"$isAParagraph");const Wn=class Wn extends b{$isAParagraph(e){c(e instanceof f,"a solution is a paragraph, and this is not one")}};r(Wn,"SolutionSpecification");let va=Wn;qe([l("a solution is a paragraph")],va.prototype,"$isAParagraph");const el=o(Bs),al=o(Ws),sl=o(ua),tl=o(Hs),ol=o(Ls);var Mp=Object.defineProperty,Tp=Object.getOwnPropertyDescriptor,se=r((p,e,a,n)=>{for(var t=Tp(e,a),i=p.length-1,d;i>=0;i--)(d=p[i])&&(t=d(e,a,t)||t);return t&&Mp(e,a,t),t},"__decorateClass$7");const Hn=class Hn extends g{constructor(){super(...arguments),this.specification=new he,this.span=k.span.attrs({className:"pd-number"})``,this.close=k.span.attrs({className:"pd-close"})``}get number(){const e=z.copy(this.text).trim();return e===""?NaN:Number(e)}note(){const e=this.span,a=this.close,n=o(j),t=o(y),i=this.chapter?.mention?.identifier;return s.jsxs(s.Fragment,{children:[s.jsx(e,{children:this.number}),i===void 0?void 0:s.jsx(a,{children:s.jsxs(n,{children:[s.jsx(t,{children:i}),"×"]})})]})}defines(e){e.classes.add(this,"pa-concept")}erase(e){e.classes.revert(this)}};r(Hn,"$Concept");let E=Hn;const Ln=class Ln extends g{constructor(){super(...arguments),this.specification=new Be}defines(e){e.classes.add(this,"pa-designed")}erase(e){e.classes.revert(this)}};r(Ln,"$Designed");let Rs=Ln;const Rn=class Rn extends g{constructor(){super(...arguments),this.specification=new Be}defines(e){e.classes.add(this,"pa-decided")}erase(e){e.classes.revert(this)}};r(Rn,"$Decided");let Es=Rn;const En=class En extends g{constructor(){super(...arguments),this.specification=new fe}defines(e){e.classes.add(this,"pa-desk")}erase(e){e.classes.revert(this)}};r(En,"$Desk");let ya=En;const _n=class _n extends g{constructor(){super(...arguments),this.specification=new fe}defines(e){e.classes.add(this,"pa-phone")}erase(e){e.classes.revert(this)}};r(_n,"$Phone");let wa=_n;const Gn=class Gn extends g{constructor(){super(...arguments),this.specification=new fe}defines(e){e.classes.add(this,"pa-thumbnail")}erase(e){e.classes.revert(this)}};r(Gn,"$Thumbnail");let Fe=Gn;const qn=class qn extends g{constructor(){super(...arguments),this.specification=new ge}defines(e){e.classes.add(this,"pa-precedent")}erase(e){e.classes.revert(this)}};r(qn,"$Precedent");let _s=qn;const Yn=class Yn extends g{constructor(){super(...arguments),this.specification=new ge}defines(e){e.classes.add(this,"pa-source")}erase(e){e.classes.revert(this)}};r(Yn,"$Source");let Gs=Yn;const Zn=class Zn extends g{constructor(){super(...arguments),this.specification=new ja}defines(e){e.classes.add(this,"pa-where")}erase(e){e.classes.revert(this)}};r(Zn,"$Where");let qs=Zn;const Un=class Un extends b{$isASection(e){c(e instanceof P,"a concept is a section, and this is not one")}$givenItsNumber(e){c(Number.isInteger(e.annotations.expressed(E)?.number),"a concept is given its number, and this one was given something else")}$photographedThreeWays(e){const a=e.text.find(f);c([ya,wa,Fe].every(n=>a.some(t=>t.is(n))),"a concept is photographed at a desk, at a phone, and small, and this one is missing a photograph")}};r(Un,"ConceptSpecification");let he=Un;se([l("a concept is a section")],he.prototype,"$isASection");se([l("a concept is given its number")],he.prototype,"$givenItsNumber");se([l("a concept is photographed at a desk, at a phone, and small")],he.prototype,"$photographedThreeWays");const Xn=class Xn extends b{$isAParagraphHoldingOneImage(e){c(e instanceof f&&e.text.find(wt).length===1,"a photograph is a paragraph that holds one image, and this is not one")}};r(Xn,"PhotographSpecification");let fe=Xn;se([l("a photograph is a paragraph that holds one image")],fe.prototype,"$isAParagraphHoldingOneImage");const Kn=class Kn extends b{$saidOfAParagraphOfAConcept(e){c(e instanceof f&&e.parent instanceof Ui&&e.parent.is(E),"this is said of a paragraph of a concept, and here it is said of something else")}};r(Kn,"OfAConceptSpecification");let ge=Kn;se([l("this is said of a paragraph of a concept")],ge.prototype,"$saidOfAParagraphOfAConcept");const Jn=class Jn extends ge{$refersToWhereItIsBuilt(e){c(e.text.find(v).some(a=>a.is(ve)),"a where refers to where the concept is built, and this one refers nowhere")}};r(Jn,"WhereSpecification");let ja=Jn;se([l("a where refers to where the concept is built")],ja.prototype,"$refersToWhereItIsBuilt");const Qn=class Qn extends b{$saidOfAConcept(e){c(e.is(E),"this is said of a concept, and here it is said of something else")}};r(Qn,"OfAConceptSectionSpecification");let Be=Qn;se([l("this is said of a concept")],Be.prototype,"$saidOfAConcept");const nl=o(E),rl=o(Rs),il=o(Es),dl=o(ya),pl=o(wa),cl=o(Fe),ll=o(_s),hl=o(Gs),fl=o(qs);var Fp=Object.defineProperty,Bp=Object.getOwnPropertyDescriptor,Pi=r((p,e,a,n)=>{for(var t=Bp(e,a),i=p.length-1,d;i>=0;i--)(d=p[i])&&(t=d(e,a,t)||t);return t&&Fp(e,a,t),t},"__decorateClass$6");const Wp=r((p,e)=>p.chapters.flatMap(a=>p.sections(a)).find(a=>a.is(E)&&a.mention?.identifier===e),"conceptAt"),Hp=r(p=>{const e=p.text.find(f).find(a=>a.is(Fe))?.text.find(wt)[0];return e===void 0?"":e.contents||z.copy(e.text)},"thumbnailOf"),Vn=class Vn extends W{constructor(){super(...arguments),this.specification=new za,this.themeProvider=!0,this.style=k.div`
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
    `}get chapter(){return this.parent}get concepts(){return this.book.sections(this.chapter).filter(e=>e.is(E))}get open(){return this.concepts.find(e=>e.mention?.identifier===this.book?.$bookmark)}defines(e){super.defines(e),e.classes.add(this,"pa-gallery");const a=this.open,n=this.concepts.find(t=>[...t.classes].includes("pa-open"));n!==a&&(n?.classes.revert(this),a?.classes.add(this,"pa-open"))}erase(e){super.erase(e),e.classes.revert(this)}};r(Vn,"$Gallery");let Ys=Vn;const Sn=class Sn extends W{constructor(){super(...arguments),this.specification=new Oa,this.strip=k.div`
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
    `}get paragraph(){return this.parent}get places(){return this.paragraph.text.find(v).map(e=>e.annotations.expressed(ve)?.identifier).filter(e=>e!==void 0)}get concepts(){const e=this.book;return[...new Set(this.places.map(a=>Wp(e,a)).filter(a=>a!==void 0))]}get chosen(){const e=this.paragraph.parent?.text.find(f).filter(a=>a.is(ua))??[];return new Set(e.flatMap(a=>a.text.find(v).map(n=>n.annotations.expressed(ve)?.identifier)).filter(a=>a!==void 0))}$Strip(...e){this.$Format(...e);const a=this.strip,n=o(j),t=o(y);this.style=({className:i,children:d})=>{const u=this.chosen;return s.jsxs(a,{className:`${i??""} pd-strip`.trim(),children:[this.concepts.map((m,$)=>{const w=m.mention.identifier;return s.jsxs(n,{children:[s.jsx(t,{children:w}),s.jsxs("span",{className:`pd-thumb${u.has(w)?" pd-chosen":""}`,children:[s.jsx("img",{src:Hp(m),alt:""}),s.jsxs("span",{className:"pd-name",children:[s.jsx("span",{className:"pd-number",children:m.annotations.expressed(E)?.number}),m.canonical?.name]})]})]},$)}),s.jsx("span",{className:"pd-said",children:d})]})}}defines(e){super.defines(e),e.classes.add(this,"pa-strip")}erase(e){super.erase(e),e.classes.revert(this)}};r(Sn,"$Strip");let Zs=Sn;const er=class er extends b{$isAChapter(e){c(e instanceof x,"a gallery is a chapter, and this is not one")}};r(er,"GallerySpecification");let za=er;Pi([l("a gallery is a chapter")],za.prototype,"$isAChapter");const ar=class ar extends b{$isAParagraphReferringToConcepts(e){c(e instanceof f&&e.text.find(v).some(a=>a.annotations.expressed(ve)!==void 0),"a strip is a paragraph that refers to concepts, and this one refers to nothing")}};r(ar,"StripSpecification");let Oa=ar;Pi([l("a strip is a paragraph that refers to concepts")],Oa.prototype,"$isAParagraphReferringToConcepts");const gl=o(Ys),bl=o(Zs),sr=class sr extends U{constructor(){super(...arguments),this.accent="#23407a",this.ink="#343c4a",this.heading="#1a1f36",this.soft="#727d8c",this.faint="#9ea8b5",this.line="#e4e9f2",this.paper="#fdfcfa",this.side="#f8f9fb",this.holdsColumn="256px",this.barHeight="52px",this.card="12.5rem",this.shadow="0 1px 2px rgba(43, 54, 60, 0.05), 0 6px 18px rgba(43, 54, 60, 0.05)",this.lift="0 2px 4px rgba(43, 54, 60, 0.06), 0 14px 32px rgba(43, 54, 60, 0.10)",this.barLight="#fcfcfd",this.barMid="#f8f9fc",this.barDeep="#f2f4f9",this.barShadow="0 1px 0 rgba(43, 54, 60, 0.05)",this.sideLight="#fafbfc",this.sideDeep="#f2f4f8",this.codeGround="#f6f7fa",this.hairline="1px",this.stroke="2px",this.rise="-1px",this.gloss="inset 0 1px 0 rgba(255, 255, 255, 0.7)",this.ring="0 0 0 2px color-mix(in oklab, var(--band) 80%, white)",this.decisionShadow="0 1px 2px rgba(43, 54, 60, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.6)"}parts(){return[...super.parts(),this.backdrop(),this.bands(),this.guide(),this.story(),this.said(),this.small()]}backdrop(){return h`
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
        `}};r(sr,"$Exhibition");let Us=sr;const Lp=o(Us);var Rp=Object.defineProperty,Ep=Object.getOwnPropertyDescriptor,Ai=r((p,e,a,n)=>{for(var t=Ep(e,a),i=p.length-1,d;i>=0;i--)(d=p[i])&&(t=d(e,a,t)||t);return t&&Rp(e,a,t),t},"__decorateClass$5");const tr=class tr extends B{constructor(){super(...arguments),this.specification=new We}get designs(){return this.chapters.filter(e=>e.is(C))}get open(){return super.open??this.body[0]}head(){}switches(){}$Bound(){const e=o(Ud),a=o(Zd),n=o(Xd),t=this.designs;for(const i of t)i.annotations.add(this,s.jsx(e,{})),i.text.add(this,s.jsx(n,{}));for(const i of this.table?.annotations.expressed(q)?.entries??[]){const d=A(i)?.identifier,u=d===void 0?void 0:this.chapterAt(d);u===void 0||!t.includes(u)||i.annotations.add(this,s.jsx(a,{number:t.indexOf(u)+1}))}super.$Bound()}};r(tr,"$Portfolio");let Xs=tr;const or=class or extends M{$everyChapterInAPart(e){c(e.chapters.every(a=>a.part!==void 0),"every chapter of a portfolio is in a part, and one here is in none")}$showsEveryDesign(e){c(e.designs.every(a=>Ga(a,f).some(n=>n.is(De))),"a portfolio shows every design it holds as built, in a paragraph said to be the exhibit, and one here has none")}};r(or,"PortfolioSpecification");let We=or;Ai([l("every chapter of a portfolio is in a part")],We.prototype,"$everyChapterInAPart");Ai([l("a portfolio shows every design it holds as built")],We.prototype,"$showsEveryDesign");const Ci=o(Xs);o(Ci,$e)(Lp);o(Ci,ae)(xe);const nr=class nr extends ie{};r(nr,"$PortfolioCover");let Ks=nr;const ul=o(Ks),rr=class rr extends U{constructor(){super(...arguments),this.prose="'Source Serif 4', Georgia, serif",this.ink="#343c4a",this.heading="#1a1f36",this.soft="#727d8c",this.faint="#9ea8b5",this.line="#e4e9f2",this.paper="#ffffff",this.side="#f8f9fb",this.holdsColumn="240px",this.barHeight="52px",this.shadow="0 1px 2px rgba(43, 54, 60, 0.05), 0 6px 18px rgba(43, 54, 60, 0.05)",this.lift="0 2px 4px rgba(43, 54, 60, 0.06), 0 14px 32px rgba(43, 54, 60, 0.10)",this.barLight="#fcfcfd",this.barMid="#f8f9fc",this.barDeep="#f2f4f9",this.barShadow="0 1px 0 rgba(43, 54, 60, 0.05)",this.sideLight="#fafbfc",this.sideDeep="#f2f4f8",this.hairline="1px",this.stroke="2px"}parts(){return[...super.parts(),this.bands(),this.guide(),this.order(),this.surface(),this.entries(),this.small()]}bands(){return h`
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
        `}};r(rr,"$Typeset");let Js=rr;const Ii=o(Js);var _p=Object.defineProperty,Gp=Object.getOwnPropertyDescriptor,Ni=r((p,e,a,n)=>{for(var t=Gp(e,a),i=p.length-1,d;i>=0;i--)(d=p[i])&&(t=d(e,a,t)||t);return t&&_p(e,a,t),t},"__decorateClass$4");const D=r(p=>p.annotations.expressed(Y)?.date?.date??"","dayOf"),be=r(p=>{const[e,a]=D(p).split("-");return e===void 0||a===void 0?"":new Date(Date.UTC(Number(e),Number(a)-1,1)).toLocaleString("en-GB",{month:"long",year:"numeric",timeZone:"UTC"})},"monthOf"),ir=class ir extends g{constructor(){super(...arguments),this.specification=new N}defines(e){e.classes.add(this,"pa-newest-first")}erase(e){e.classes.revert(this)}};r(ir,"$NewestFirst");let Da=ir;const qp=o(Da),Mi=qp,dr=class dr extends f{write(){const e=o(_a);return s.jsx(e,{annotation:Mi,children:"newest first"})}$Define(){super.$Define(),this.classes.add(this,"pd-entry-order")}};r(dr,"$EntryOrder");let Qs=dr;const pr=class pr extends v{write(){return String(this.book.entries.indexOf(this.chapter)+1)}$Define(){super.$Define(),this.classes.add(this,"pd-entry-number")}};r(pr,"$EntryNumber");let Vs=pr;const cr=class cr extends v{write(){const[e,a,n]=D(this.$entry).split("-");if(!(e===void 0||a===void 0||n===void 0))return new Date(Date.UTC(Number(e),Number(a)-1,Number(n.slice(0,2)))).toLocaleString("en-GB",{day:"numeric",month:"short",timeZone:"UTC"})}$Define(){super.$Define(),this.classes.add(this,"pd-entry-day")}};r(cr,"$EntryDay");let Ss=cr;const lr=class lr extends Ne{paging(){return h``}};r(lr,"$JournalLayout");let et=lr;const Yp=o(Qs),Zp=o(Vs),Ti=o(Ss),Fi=o(et),Up=Yp,Xp=Zp,Kp=Ti,hr=class hr extends B{constructor(){super(...arguments),this.specification=new ue}get entries(){return this.body}get latest(){return[...this.entries].sort((e,a)=>D(a).localeCompare(D(e)))[0]}get pages(){const e=[...this.entries].sort((a,n)=>D(a).localeCompare(D(n)));return this.is(Da)?e.reverse():e}get open(){return super.open??this.latest}head(){}switches(){}turns(){}$Bound(){const e=o(Xp);for(const t of this.entries)t.text.add(this,s.jsx(e,{}));const a=o(Kp);for(const t of this.table?.annotations.expressed(q)?.entries??[]){const i=A(t)?.identifier,d=i===void 0?void 0:this.chapterAt(i);d===void 0||!this.entries.includes(d)||t.text.add(this,s.jsx(a,{entry:d}))}const n=o(Up);this.table?.text.add(this,s.jsx(n,{})),this.$is=[Mi],super.$Bound()}};r(hr,"$Journal");let Pa=hr;const fr=class fr extends M{$everyEntryIsDated(e){const a=e.entries.find(n=>!n.is(Y));c(a===void 0,`every entry of a journal is dated, and "${a?.title?.name}" is not`)}$everyEntrySaysItsMonth(e){const a=e.entries.find(n=>n.part?.name!==be(n));c(a===void 0,a===void 0?"":`every entry of a journal says the month of its date as its part, and "${a.title?.name}" says "${a.part?.name??"none"}" for ${be(a)}`)}};r(fr,"JournalSpecification");let ue=fr;Ni([l("every entry of a journal is dated")],ue.prototype,"$everyEntryIsDated");Ni([l("every entry of a journal says the month of its date as its part")],ue.prototype,"$everyEntrySaysItsMonth");const Mt=o(Pa);o(Mt,$e)(Ii);o(Mt,ae)(xe);o(Mt,qa)(Fi);const gr=class gr extends ie{};r(gr,"$JournalCover");let at=gr;const Jp=o(at);var Qp=Object.defineProperty,Vp=Object.getOwnPropertyDescriptor,Sp=r((p,e,a,n)=>{for(var t=Vp(e,a),i=p.length-1,d;i>=0;i--)(d=p[i])&&(t=d(e,a,t)||t);return t&&Qp(e,a,t),t},"__decorateClass$3");const br=class br extends g{constructor(){super(...arguments),this.specification=new Aa}get section(){return this.parent instanceof P?this.parent:void 0}get headings(){const e=this.section;return e===void 0?[]:e.text.find(oi).filter(a=>a!==e.canonical)}defines(e){e.classes.add(this,"pa-opaque")}erase(e){e.classes.revert(this)}$Bound(){for(const e of this.headings){const a=e.annotations.expressed(Ra),n=e.annotations.expressed(ti);for(const t of[a,n])t!==void 0&&e.annotations.remove(e,t)}super.$Bound()}};r(br,"$Opaque");let st=br;const ur=class ur extends b{$saidOfASection(e){c(e instanceof P,"opaque is said of a section, and this is not one")}};r(ur,"OpaqueSpecification");let Aa=ur;Sp([l("opaque is said of a section")],Aa.prototype,"$saidOfASection");const ec=o(st);var ac=Object.defineProperty,sc=Object.getOwnPropertyDescriptor,H=r((p,e,a,n)=>{for(var t=sc(e,a),i=p.length-1,d;i>=0;i--)(d=p[i])&&(t=d(e,a,t)||t);return t&&ac(e,a,t),t},"__decorateClass$2");const mr=class mr extends oi{$Define(){super.$Define(),this.classes.add(this,"pd-speaker")}$Bound(){super.$Bound();const e=this.annotations.expressed(Ra);e!==void 0&&this.annotations.remove(this,e)}};r(mr,"$Speaker");let He=mr;const $r=class $r extends jt{$Define(){super.$Define(),this.classes.add(this,"pd-time")}};r($r,"$Time");let tt=$r;const kr=class kr extends Xi{$Define(){super.$Define(),this.classes.add(this,"pd-participant")}};r(kr,"$Participant");let Ca=kr;const xr=class xr extends f{get participants(){return this.text.find(Ca)}write(){const e=this.participants;return e.flatMap((a,n)=>{const t=o(a);return[n===0?"":n===e.length-1?" and ":", ",s.jsx(t,{},n)]})}$Define(){super.$Define(),this.classes.add(this,"pd-participants")}};r(xr,"$Participants");let Ia=xr;const ml=o(He),tc=o(tt),$l=o(Ca),kl=o(Ia),oc=tc,nc=r(p=>{const e=new Date(p);if(Number.isNaN(e.getTime()))return p;const a=e.toLocaleDateString("en-GB",{day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return`${e.toLocaleTimeString("en-GB",{hour:"2-digit",minute:"2-digit",timeZone:"UTC"})} UTC, ${a}`},"shownTime"),vr=class vr extends P{constructor(){super(...arguments),this.specification=new Le,this.$at=void 0}get when(){return this.$at??""}get speaker(){return this.text.find(He)[0]}write(){const e=o(oc),a=this.speaker,n=a===void 0?void 0:o(a),t=[...this.text].filter(i=>i!==a);return s.jsxs(s.Fragment,{children:[n===void 0?void 0:s.jsx(n,{}),s.jsx(e,{children:`[${nc(this.when)}](${this.when})`}),s.jsx("div",{className:"pd-said",children:t.map((i,d)=>{const u=o(i);return s.jsx(u,{},d)})})]})}$Define(){super.$Define(),this.classes.add(this,"pd-message");const e=o(ec);if(this.annotations.add(this,s.jsx(e,{})),this.when==="")return;const a=this.speaker,n=a===void 0?"":oe.reference(z.copy(a.text))?.name??z.copy(a.text),t=o(Ki);this.annotations.add(this,s.jsx(t,{children:Ji.slug(`${this.when.replace(/Z$/u,"")} ${n}`)}))}$Bound(){const e=this.book?.author?.means?.identifier;if(e!==void 0&&this.speaker?.means?.identifier===e){const a=o(ic);this.annotations.add(this,s.jsx(a,{}))}super.$Bound()}};r(vr,"$Message");let Q=vr;const yr=class yr extends g{constructor(){super(...arguments),this.specification=new Na}defines(e){e.classes.add(this,"pa-mine")}erase(e){e.classes.revert(this)}};r(yr,"$Mine");let ot=yr;const wr=class wr extends b{$saidOfAMessage(e){c(e instanceof Q,"mine is said of a message, and this is not one")}};r(wr,"MineSpecification");let Na=wr;H([l("mine is said of a message")],Na.prototype,"$saidOfAMessage");const rc=o(ot),ic=rc,jr=class jr extends g{constructor(){super(...arguments),this.specification=new Ta}defines(e){e.classes.add(this,"pa-quoted")}erase(e){e.classes.revert(this)}};r(jr,"$Quoted");let nt=jr;const zr=class zr extends g{constructor(){super(...arguments),this.specification=new Fa}defines(e){e.classes.add(this,"pa-verbatim")}erase(e){e.classes.revert(this)}};r(zr,"$Verbatim");let rt=zr;const Or=class Or extends g{constructor(){super(...arguments),this.specification=new Re,this.$from=void 0,this.$to=void 0}get from(){return this.$from??""}get to(){return this.$to??""}defines(e){e.classes.add(this,"pa-period")}erase(e){e.classes.revert(this)}};r(Or,"$Period");let Ma=Or;const Dr=class Dr extends g{constructor(){super(...arguments),this.specification=new Re,this.$shown=void 0,this.$all=void 0}get shown(){return Number(this.$shown??0)}get all(){return Number(this.$all??0)}get aside(){return this.all-this.shown}defines(e){e.classes.add(this,"pa-messages")}erase(e){e.classes.revert(this)}};r(Dr,"$Messages");let V=Dr;const Pr=class Pr extends Qi{$saysWhen(e){c(e.when!==""&&!Number.isNaN(Date.parse(e.when)),"a message says when it was said, as an instant the machine can read, and this one does not")}$headedByItsSpeaker(e){c(e.canonical instanceof He,"a message is headed by its speaker, a heading that refers to them, and this one is not")}};r(Pr,"MessageSpecification");let Le=Pr;H([l("a message says when it was said")],Le.prototype,"$saysWhen");H([l("a message is headed by its speaker")],Le.prototype,"$headedByItsSpeaker");const Ar=class Ar extends b{$saidOfAParagraph(e){c(e instanceof f,"this is said of a paragraph, and this is not one")}};r(Ar,"OfAParagraphSpecification");let Ta=Ar;H([l("this is said of a paragraph")],Ta.prototype,"$saidOfAParagraph");const Cr=class Cr extends b{$saidOfACover(e){c(e instanceof x&&e.is(F),"this is said of a cover, and this is not one")}};r(Cr,"OfACoverSpecification");let Re=Cr;H([l("this is said of a cover")],Re.prototype,"$saidOfACover");const Ir=class Ir extends b{$saidOfAWord(e){c(e instanceof v,"verbatim is said of a word, and this is not one")}};r(Ir,"VerbatimSpecification");let Fa=Ir;H([l("verbatim is said of a word")],Fa.prototype,"$saidOfAWord");const xl=o(Q),vl=o(nt),yl=o(rt),wl=o(Ma),jl=o(V),Vr=r(p=>p===void 0||p===""?"":new Date(p).toLocaleDateString("en-GB",{day:"numeric",month:"long",year:"numeric",timeZone:"UTC"}),"dayWords"),Nr=class Nr extends f{write(){const e=this.book,a=e.messageCount?.shown??e.messages.length,n=e.body.length,t=Vr(e.period?.from),i=Vr(e.period?.to);return s.jsxs(s.Fragment,{children:[s.jsxs("span",{className:"pd-tally-count",children:[s.jsx("b",{children:a}),n===1?" messages in ":" messages over ",s.jsx("b",{children:n}),n===1?" day":" days"]}),s.jsx("span",{className:"pd-tally-period",children:t===i?t:`${t} to ${i}`})]})}$Define(){super.$Define(),this.classes.add(this,"pd-tally")}};r(Nr,"$Tally");let it=Nr;const Mr=class Mr extends v{write(){return String(this.$entry?.text.find(Q).length??0)}$Define(){super.$Define(),this.classes.add(this,"pd-day-count")}};r(Mr,"$DayCount");let dt=Mr;const dc=o(it),pc=o(dt),cc=dc,lc=pc,Tr=class Tr extends B{constructor(){super(...arguments),this.specification=new S}get participants(){return this.cover?.text.find(Ia)[0]?.participants??[]}get period(){return this.cover?.annotations.expressed(Ma)}get messageCount(){return this.cover?.annotations.expressed(V)}get messages(){return this.body.flatMap(e=>e.text.find(Q))}get pages(){return[...[...this.body].sort((a,n)=>D(a).localeCompare(D(n))),...this.appendix]}get open(){return super.open??this.pages[0]}head(){const e=o(cc);return s.jsxs(s.Fragment,{children:[super.head(),s.jsx(e,{chapter:this.cover})]})}$Bound(){const e=o(lc);for(const a of this.table?.annotations.expressed(q)?.entries??[]){const n=A(a)?.identifier,t=n===void 0?void 0:this.chapterAt(n);t===void 0||!this.body.includes(t)||a.text.add(this,s.jsx(e,{entry:t}))}super.$Bound()}};r(Tr,"$Conversation");let pt=Tr;const Fr=class Fr extends M{$saysItsParticipantsPeriodAndCount(e){c(e.participants.length>0&&e.period!==void 0&&e.messageCount!==void 0,"a conversation says its participants, its period and how many messages it holds, on its cover, and this one says less")}$everyChapterIsDated(e){const a=e.body.find(n=>!n.is(Y));c(a===void 0,`every chapter of a conversation is dated, and "${a?.title?.name}" is not`)}$everyMessageIsAddressed(e){const a=e.messages.find(n=>n.annotations.expressed(Ra)===void 0);c(a===void 0,`every message of a conversation is addressed by its time, and the one at "${a?.when}" is not`)}$everyChapterHoldsAMessage(e){const a=e.body.find(n=>n.text.find(Q).length===0);c(a===void 0,`every chapter of a conversation holds a message, and "${a?.title?.name}" holds none`)}};r(Fr,"ConversationSpecification");let S=Fr;H([l("a conversation says its participants, its period and how many messages it holds")],S.prototype,"$saysItsParticipantsPeriodAndCount");H([l("every chapter of a conversation is dated")],S.prototype,"$everyChapterIsDated");H([l("every message of a conversation is addressed by its time")],S.prototype,"$everyMessageIsAddressed");H([l("every chapter of a conversation holds a message")],S.prototype,"$everyChapterHoldsAMessage");o(pt);const hc=/(::[^\n]*|<\|=\|>|=\|>|=[A-Za-z0-9'_]*>|-\([^)]*\)>|->|==|!=)/gu,Sr=r(p=>p.replace(/[&<>]/gu,e=>({"&":"&amp;","<":"&lt;",">":"&gt;"})[e]),"escaped"),fc=r(p=>p.split(hc).map((e,a)=>a%2===0?Sr(e):`<span class="${e.startsWith("::")?"hljs-comment":"hljs-keyword"}">${Sr(e)}</span>`).join(""),"notationHighlighting"),gc=r((p,e)=>e==="srt"?fc(p):Si(p,e),"boxHighlighting"),Br=class Br extends Vi{constructor(){super(...arguments),this.$highlighter=gc}get name(){return this.language===""?"text":this.language}$CodeBox(...e){this.$Code(...e),this.containers.replace(this,"pre","div")}write(){return s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"pd-code-bar",children:[s.jsx("span",{className:"pd-code-name",children:this.name}),s.jsx("button",{type:"button",className:"pd-copy",onClick:r(e=>this.copy(e),"onClick"),children:"Copy"})]}),s.jsx("pre",{children:super.write()})]})}copy(e){const a=e.currentTarget.closest(".pd-code-box")?.querySelector("pre")?.textContent??"";navigator.clipboard?.writeText(a)}$Define(){super.$Define(),this.classes.add(this,"pd-code-box")}};r(Br,"$CodeBox");let ct=Br;const zl=o(ct);var bc=Object.defineProperty,uc=Object.getOwnPropertyDescriptor,Bi=r((p,e,a,n)=>{for(var t=uc(e,a),i=p.length-1,d;i>=0;i--)(d=p[i])&&(t=d(e,a,t)||t);return t&&bc(e,a,t),t},"__decorateClass$1");const Wr=class Wr extends Pa{constructor(){super(...arguments),this.specification=new Ee}get entries(){return this.text.find(x).filter(e=>e.is(L)&&e!==this.synopsis)}get laidOutChapters(){return[...super.laidOutChapters,...this.entries]}sizeOf(e){return e.annotations.expressed(I)?.cover?.annotations.expressed(V)?.shown??0}};r(Wr,"$Register");let lt=Wr;const Hr=class Hr extends ue{$everyEntryStandsForABook(e){const a=e.entries.find(n=>n.annotations.expressed(L)?.means===void 0);c(a===void 0,`every entry of a register stands for a book, holding its synopsis, and "${a?.title?.name}" stands for none`)}$onlyAChapterAppends(e){const a=[...e.chapters,...e.entries];c(e.text.find(x).every(n=>a.includes(n)||!n.is(G)),"only an ordinary chapter or an entry files a file, and here a cover, a synopsis or a table of contents files one")}};r(Hr,"RegisterSpecification");let Ee=Hr;Bi([l("every entry of a register stands for a book, holding its synopsis")],Ee.prototype,"$everyEntryStandsForABook");Bi([l("only an ordinary chapter or an entry files a file")],Ee.prototype,"$onlyAChapterAppends");const Tt=o(lt);o(Tt,$e)(Ii);o(Tt,ae)(xe);o(Tt,qa)(Fi);var mc=Object.defineProperty,$c=Object.getOwnPropertyDescriptor,Ft=r((p,e,a,n)=>{for(var t=$c(e,a),i=p.length-1,d;i>=0;i--)(d=p[i])&&(t=d(e,a,t)||t);return t&&mc(e,a,t),t},"__decorateClass");const Lr=class Lr extends g{constructor(){super(...arguments),this.specification=new N}defines(e){e.classes.add(this,"pa-synopses")}erase(e){e.classes.revert(this)}};r(Lr,"$Synopses");let ht=Lr;const kc=o(ht),xc=kc,Rr=class Rr extends f{write(){const e=o(_a);return s.jsx(e,{annotation:xc,children:"with the synopsis"})}$Define(){super.$Define(),this.classes.add(this,"pd-row-form")}};r(Rr,"$RowForm");let ft=Rr;const Er=class Er extends v{write(){return`${this.chapter?.annotations.expressed(I)?.cover?.annotations.expressed(V)?.shown??0} exchanges`}$Define(){super.$Define(),this.classes.add(this,"pd-entry-count")}};r(Er,"$EntryCount");let gt=Er;const _r=class _r extends v{write(){return be(this.chapter)}$Define(){super.$Define(),this.classes.add(this,"pd-entry-month")}};r(_r,"$EntryMonth");let bt=_r;const Gr=class Gr extends v{write(){}$Define(){super.$Define(),this.classes.add(this,"pd-entry-open")}};r(Gr,"$EntryOpen");let ut=Gr;const qr=class qr extends v{write(){return String(this.$section?.text.find(f).filter(e=>A(e)!==void 0).length??0)}$Define(){super.$Define(),this.classes.add(this,"pd-month-count")}};r(qr,"$MonthCount");let mt=qr;const Yr=class Yr extends f{get project(){return this.book}$ProjectHead(...e){this.$Writing(...e),this.containers.replace(this,"span","div")}write(){const e=this.project;if(e===void 0)return;const a=o(j),n=o(y),t=e.coverOf(e.subject?.means?.identifier),i=e.entries,d=i.reduce(($,w)=>$+(w.annotations.expressed(I)?.cover?.annotations.expressed(V)?.shown??0),0),u=i.map(D).filter($=>$!=="").sort(),m=u.length===0?"":`${be(i.find($=>D($)===u[0]))} to ${be(i.find($=>D($)===u[u.length-1]))}`;return s.jsxs(s.Fragment,{children:[s.jsxs("span",{className:"pd-crumbs",children:[t===void 0?void 0:s.jsxs(a,{children:[s.jsx(n,{children:t.mention.identifier}),t.title?.name]}),s.jsx("i",{children:"/"}),s.jsx(a,{children:e.title?.name})]}),s.jsxs("span",{className:"pd-report",children:[s.jsxs("span",{children:[s.jsx("b",{children:i.length})," conversations"]}),s.jsxs("span",{children:[s.jsx("b",{children:d})," exchanges"]}),s.jsxs("span",{children:[s.jsx("b",{children:e.files.length})," files"]}),s.jsx("span",{children:m})]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-project-head")}};r(Yr,"$ProjectHead");let $t=Yr;const Zr=class Zr extends f{constructor(){super(...arguments),this.style=k.div`
        .pd-book &.pd-paragraph { display: flex; flex-direction: column; margin: 0; padding: calc(${({theme:e})=>e.space} * 1.0833) ${({theme:e})=>e.space} calc(${({theme:e})=>e.space} * 1.6667) calc(${({theme:e})=>e.space} / 3); }
        .pd-book & .pd-knowledge-row { display: flex; align-items: center; gap: calc(${({theme:e})=>e.space} * 0.4167); padding: calc(${({theme:e})=>e.space} / 2) calc(${({theme:e})=>e.space} * 0.4167); border-block-end: thin solid rgba(11, 11, 11, .08); font-family: ${({theme:e})=>e.font}; font-size: ${({theme:e})=>e.size}; font-weight: 500; line-height: 1.4; color: ${({theme:e})=>e.ink}; }
        .pd-book & .pd-knowledge-row a.pa-reference, .pd-book & .pd-knowledge-file a.pa-reference { min-width: 0; overflow: hidden; color: inherit; text-decoration: none; }
        .pd-book & .pd-knowledge-row .pd-word.pa-reference { color: inherit; text-decoration: none; }
        .pd-book & .pd-knowledge-row small { font-weight: 400; color: ${({theme:e})=>e.faint}; }
        .pd-book & .pd-knowledge-row .pd-at-right { margin-inline-start: auto; font-size: calc(0.8929 * ${({theme:e})=>e.size}); font-weight: 500; color: ${({theme:e})=>e.soft}; }
        .pd-book & .pd-knowledge-files { display: flex; flex-direction: column; padding-block-start: calc(${({theme:e})=>e.space} / 4); }
        .pd-book & .pd-knowledge-file { display: grid; grid-template-columns: calc(1.1429 * ${({theme:e})=>e.size}) minmax(0, 1fr) auto; align-items: center; column-gap: calc(${({theme:e})=>e.space} * 0.4167); padding: calc(${({theme:e})=>e.space} * 0.2917) calc(${({theme:e})=>e.space} * 0.4167); border-radius: ${({theme:e})=>e.radius}; transition: background ${({theme:e})=>e.beat} ease; }
        .pd-book & .pd-knowledge-file:hover { background: rgba(11, 11, 11, .05); }
        .pd-book & .pd-knowledge-file .pd-drawing { width: calc(1.1429 * ${({theme:e})=>e.size}); height: calc(1.1429 * ${({theme:e})=>e.size}); color: ${({theme:e})=>e.soft}; }
        .pd-book & .pd-knowledge-file .pd-drawing svg { display: block; width: 100%; height: 100%; fill: none; stroke: currentColor; stroke-width: 1.25; stroke-linecap: round; stroke-linejoin: round; }
        .pd-book & .pd-knowledge-file .pd-word.pa-reference { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-size: calc(0.9643 * ${({theme:e})=>e.size}); font-weight: 400; color: ${({theme:e})=>e.ink}; text-decoration: none; }
        .pd-book & .pd-file-type { padding: 0 4px; border: thin solid ${({theme:e})=>e.line}; border-radius: 4px; font-size: calc(0.7143 * ${({theme:e})=>e.size}); font-weight: 500; letter-spacing: .06em; line-height: 1.5; text-transform: uppercase; color: ${({theme:e})=>e.faint}; }
    `}get project(){return this.book}$Knowledge(...e){this.$Writing(...e),this.containers.replace(this,"span",this.style)}write(){const e=this.project;if(e===void 0)return;const a=o(j),n=o(y),t=e.project,i='<svg viewBox="0 0 16 16"><path d="M4 1.5h5.5L13 5v9.5H4z"/><path d="M9.5 1.5V5H13M6 8h4M6 10.5h4"/></svg>';return s.jsxs(s.Fragment,{children:[t?.mention===void 0?void 0:s.jsxs("span",{className:"pd-knowledge-row",children:[s.jsxs(a,{children:[s.jsx(n,{children:t.mention.identifier}),t.title?.name]}),s.jsx("span",{className:"pd-at-right",children:"what it is, its instructions"})]}),s.jsxs("span",{className:"pd-knowledge-row",children:["Files",s.jsx("small",{children:e.files.length}),s.jsx("span",{className:"pd-at-right",children:"as uploaded"})]}),s.jsx("span",{className:"pd-knowledge-files",children:e.files.map((d,u)=>s.jsxs("span",{className:"pd-knowledge-file",children:[s.jsx("span",{className:"pd-drawing",dangerouslySetInnerHTML:{__html:i}}),s.jsxs(a,{children:[s.jsx(n,{children:d.mention.identifier}),d.title?.name]}),s.jsx("span",{className:"pd-file-type",children:(d.annotations.find(G)[0]?.$type??"").replace(/^\./u,"")})]},u))})]})}$Define(){super.$Define(),this.classes.add(this,"pd-knowledge")}};r(Zr,"$Knowledge");let kt=Zr;const Ur=class Ur extends Ne{paging(){return h`
            .pd-book.pa-turned .pa-page:not(.pa-open) { display: none; }
            .pd-book:not(.pa-turned) .pa-page.pa-spread { display: none; }
        `}areas(){return h`
            ${super.areas()}
            .pd-book.pa-layout:not(.pa-turned) {
                grid-template-columns: ${({theme:e})=>e.holdsColumn} minmax(0, 1fr) 320px;
                grid-template-areas: 'library library library' 'holds head knowledge' 'holds pages knowledge';
            }
            .pa-layout .pd-knowledge-column { grid-area: knowledge; min-width: 0; overflow-y: auto; }
            .pd-book.pa-turned .pd-knowledge-column { display: none; }
            .pd-book.pa-layout:not(.pa-turned) .pd-head { display: grid; gap: calc(${({theme:e})=>e.space} / 4); align-content: end; padding: calc(${({theme:e})=>e.space} * 0.9167) calc(${({theme:e})=>e.space} * 1.5) calc(${({theme:e})=>e.space} * 0.5833); }
            .pd-book.pa-layout.pa-turned .pd-head { display: none; }
            ${this.head()}
            ${this.list()}
            ${this.side()}
        `}head(){return h`
            .pd-book .pd-head header, .pd-book .pd-head header > .pd-scheme, .pd-book .pd-head .pd-switches { display: contents; }
            .pd-book .pd-head .pd-chapter.pa-cover > .pd-scheme, .pd-book .pd-head .pd-chapter.pa-cover > .pa-illustration, .pd-book .pd-head .pd-chapter.pa-cover .pd-byline, .pd-book .pd-head .pd-chapter.pa-cover .pd-subject-line { display: none; }
            .pd-book .pd-head .pd-chapter.pa-cover { display: contents; }
            .pd-book .pd-head .pd-project-head { display: contents; }
            .pd-book .pd-head .pd-crumbs { order: 1; display: flex; gap: calc(${({theme:e})=>e.space} / 3); font-family: ${({theme:e})=>e.font}; font-size: calc(0.8929 * ${({theme:e})=>e.size}); color: ${({theme:e})=>e.soft}; }
            .pd-book .pd-head .pd-crumbs i { font-style: normal; color: ${({theme:e})=>e.faint}; }
            .pd-book .pd-head .pd-crumbs .pd-word.pa-reference { color: inherit; text-decoration: none; }
            .pd-book .pd-head .pd-crumbs .pd-word.pa-reference:hover { color: ${({theme:e})=>e.accent}; }
            .pd-book .pd-head .pd-chapter.pa-cover > a { order: 2; }
            .pd-book .pd-head .pd-chapter.pa-cover .pd-title { margin: 0; font-family: ${({theme:e})=>e.serif}; font-size: calc(2.1429 * ${({theme:e})=>e.size}); font-weight: 600; line-height: 1.1; letter-spacing: -0.01em; color: ${({theme:e})=>e.heading}; }
            .pd-book .pd-head .pd-chapter.pa-cover .pd-title .pa-reference, .pd-book .pd-head .pd-chapter.pa-cover > a { color: inherit; text-decoration: none; }
            .pd-book .pd-head .pd-report { order: 3; display: flex; flex-wrap: wrap; gap: 4px calc(${({theme:e})=>e.space} * 0.6667); font-family: ${({theme:e})=>e.font}; font-size: calc(0.8929 * ${({theme:e})=>e.size}); color: ${({theme:e})=>e.soft}; }
            .pd-book .pd-head .pd-report b { font-weight: 500; color: ${({theme:e})=>e.ink}; }
            .pd-book .pd-head .pd-paragraph.pd-row-form { order: 3; justify-self: end; align-self: end; margin: 0; }
            .pd-book .pd-head .pd-row-form .pd-word.pd-switch { padding: 2px 10px; border: thin solid ${({theme:e})=>e.line}; border-radius: 999px; background: none; font-family: ${({theme:e})=>e.font}; font-size: calc(0.8214 * ${({theme:e})=>e.size}); font-weight: 500; line-height: 1.5; color: ${({theme:e})=>e.soft}; cursor: pointer; transition: color ${({theme:e})=>e.beat} ease, background ${({theme:e})=>e.beat} ease; }
            .pd-book .pd-head .pd-row-form .pd-word.pd-switch:hover { color: ${({theme:e})=>e.ink}; }
            .pd-book .pd-head .pd-row-form .pd-word.pd-switch[aria-pressed='true'] { background: ${({theme:e})=>e.heading}; border-color: ${({theme:e})=>e.heading}; color: ${({theme:e})=>e.paper}; }
            .pd-book.pa-layout:not(.pa-turned) .pd-head { grid-template-columns: minmax(0, 1fr) auto; }
            .pd-book .pd-head .pd-crumbs, .pd-book .pd-head .pd-chapter.pa-cover > a { grid-column: 1 / -1; }
        `}list(){return h`
            .pd-book:not(.pa-turned) .pd-pages { padding: 0 calc(${({theme:e})=>e.space} * 1.5) calc(${({theme:e})=>e.space} * 5); }
            .pd-book:not(.pa-turned) .pd-pages .pd-chapter.pa-page.pa-synopsis { max-width: 768px; margin: 0; }
            .pd-book:not(.pa-turned) .pd-pages .pd-chapter.pa-page.pa-synopsis:not(.pa-volume) { padding: calc(${({theme:e})=>e.space} / 4) 0 calc(${({theme:e})=>e.space} / 2); }
            .pd-book:not(.pa-turned) .pd-pages .pd-chapter.pa-page.pa-synopsis:not(.pa-volume) > a, .pd-book:not(.pa-turned) .pd-pages .pd-chapter.pa-page.pa-synopsis:not(.pa-volume) .pd-turn { display: none; }
            .pd-book:not(.pa-turned) .pd-pages .pd-chapter.pa-page.pa-synopsis:not(.pa-volume) .pd-paragraph { max-width: 72ch; margin: 0; font-family: ${({theme:e})=>e.serif}; font-size: calc(1.0714 * ${({theme:e})=>e.size}); line-height: 1.5; color: ${({theme:e})=>e.soft}; }
            .pd-book:not(.pa-turned) .pd-pages .pd-chapter.pa-page.pa-volume { position: relative; display: grid; grid-template-columns: minmax(0, 1fr) auto auto; grid-template-areas: 'month month month' 'title count day' 'synopsis synopsis synopsis'; align-items: baseline; column-gap: calc(${({theme:e})=>e.space} * 0.6667); padding: calc(${({theme:e})=>e.space} * 0.625) 0 calc(${({theme:e})=>e.space} * 0.5833); border-block-end: thin solid rgba(11, 11, 11, .08); }
            .pd-book:not(.pa-turned) .pd-pages .pa-volume .pd-word.pd-entry-month { grid-area: month; display: flex; align-items: baseline; gap: 8px; margin: calc(${({theme:e})=>e.space} * 1.0833) 0 calc(${({theme:e})=>e.space} * 0.4167); font-family: ${({theme:e})=>e.font}; font-size: calc(0.8571 * ${({theme:e})=>e.size}); font-weight: 500; letter-spacing: 0.02em; color: ${({theme:e})=>e.soft}; }
            .pd-book:not(.pa-turned) .pd-pages .pa-volume > a.pa-self-reference { grid-area: title; min-width: 0; }
            .pd-book:not(.pa-turned) .pd-pages .pa-volume .pd-title { margin: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-family: ${({theme:e})=>e.font}; font-size: calc(1.0714 * ${({theme:e})=>e.size}); font-weight: 400; line-height: 20px; color: ${({theme:e})=>e.ink}; }
            .pd-book:not(.pa-turned) .pd-pages .pa-volume:hover .pd-title { color: ${({theme:e})=>e.accent}; }
            .pd-book:not(.pa-turned) .pd-pages .pa-volume .pd-word.pd-entry-count { grid-area: count; font-family: ${({theme:e})=>e.font}; font-size: calc(0.8571 * ${({theme:e})=>e.size}); line-height: 20px; color: ${({theme:e})=>e.faint}; white-space: nowrap; font-variant-numeric: tabular-nums; }
            .pd-book:not(.pa-turned) .pd-pages .pa-volume > time.pd-date { grid-area: day; min-width: 52px; text-align: end; font-family: ${({theme:e})=>e.font}; font-size: ${({theme:e})=>e.size}; line-height: 20px; color: ${({theme:e})=>e.soft}; white-space: nowrap; }
            .pd-book:not(.pa-turned) .pd-pages .pa-volume .pd-paragraph.pa-brief, .pd-book:not(.pa-turned) .pd-pages .pa-volume .pd-paragraph:not(.pa-brief), .pd-book:not(.pa-turned) .pd-pages .pa-volume .pd-turn { display: none; }
            .pd-book.pa-synopses:not(.pa-turned) .pd-pages .pa-volume .pd-paragraph:not(.pa-brief) { grid-area: synopsis; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; margin: 4px 0 0; font-family: ${({theme:e})=>e.serif}; font-size: ${({theme:e})=>e.size}; line-height: 1.5; color: ${({theme:e})=>e.soft}; }
            .pd-book.pa-synopses:not(.pa-turned) .pd-pages .pa-volume { align-items: baseline; }
            .pd-book:not(.pa-turned) .pd-pages .pa-volume > a:has(> .pd-entry-open) { position: absolute; inset: 0; z-index: 1; }
            @media (max-width: ${({theme:e})=>e.narrow}) {
                .pd-book:not(.pa-turned) .pd-pages { padding: 0 calc(${({theme:e})=>e.space} * 0.6667) calc(${({theme:e})=>e.space} * 2.5); }
                .pd-book:not(.pa-turned) .pd-pages .pa-volume .pd-word.pd-entry-count { display: none; }
                .pd-book.pa-layout:not(.pa-turned) .pd-head { padding: calc(${({theme:e})=>e.space} * 0.75) calc(${({theme:e})=>e.space} * 0.6667) calc(${({theme:e})=>e.space} / 3); }
                .pd-book.pa-layout:not(.pa-turned) .pd-knowledge-column { order: 4; }
            }
        `}side(){return h`
            .pd-book:not(.pa-turned) .pd-holds { padding-block-start: calc(${({theme:e})=>e.space} * 0.4167); }
            .pd-book .pd-holds .pd-tree-folder:not(.pa-open) { position: relative; }
            .pd-book .pd-holds .pd-tree-folder:not(.pa-open) .pd-section { margin: 0 0 calc(${({theme:e})=>e.space} / 6); }
            .pd-book .pd-holds .pd-tree-folder:not(.pa-open) .pd-sentence.pd-heading { display: flex; align-items: center; gap: calc(${({theme:e})=>e.space} / 3); height: calc(2.1429 * ${({theme:e})=>e.size}); margin: 0; padding: 0 calc(${({theme:e})=>e.space} * 0.5833) 0 calc(${({theme:e})=>e.space} * 1.5); border: 0; font-size: calc(0.9286 * ${({theme:e})=>e.size}); font-weight: 500; line-height: 1; letter-spacing: 0; text-transform: none; color: ${({theme:e})=>e.sideInk}; cursor: pointer; transition: background ${({theme:e})=>e.beat} ease; }
            .pd-book .pd-holds .pd-tree-folder:not(.pa-open) .pd-heading:hover { background: color-mix(in oklab, ${({theme:e})=>e.sky} 30%, white); }
            .pd-book .pd-holds .pd-tree-folder:not(.pa-open) .pd-heading .pa-reference { color: inherit; text-decoration: none; }
            .pd-book .pd-holds .pd-tree-folder:not(.pa-open) .pd-fold-chevron { display: grid; place-items: center; position: absolute; top: calc(${({theme:e})=>e.space} * 0.3125); left: calc(${({theme:e})=>e.space} * 0.5); width: calc(1.1429 * ${({theme:e})=>e.size}); height: calc(1.1429 * ${({theme:e})=>e.size}); padding: 0; border: 0; border-radius: 0; background: none; color: #a5aebb; cursor: pointer; transition: transform 0.18s ease, color ${({theme:e})=>e.beat} ease; }
            .pd-book .pd-holds .pd-tree-folder:not(.pa-open) .pd-fold-chevron .pd-drawing { display: block; width: calc(0.7143 * ${({theme:e})=>e.size}); height: calc(0.7143 * ${({theme:e})=>e.size}); }
            .pd-book .pd-holds .pd-tree-folder:not(.pa-open) .pd-fold-chevron svg { display: block; width: 100%; height: 100%; }
            .pd-book .pd-holds .pd-tree-folder:not(.pa-open) .pd-fold-chevron[aria-pressed='false'] { transform: rotate(90deg); }
            .pd-book .pd-holds .pd-tree-folder:not(.pa-open) .pd-fold-chevron:hover { color: ${({theme:e})=>e.ink}; }
            .pd-book .pd-holds .pd-tree-folder:not(.pa-open) .pd-tree-folder-mark, .pd-book .pd-holds .pd-tree-folder:not(.pa-open) .pa-entry .pd-file-tab, .pd-book .pd-holds .pd-tree-folder:not(.pa-open) .pa-entry .pd-fold-chevron { display: none; }
            .pd-book .pd-holds .pd-tree-folder:not(.pa-open) .pa-folded .pd-paragraph.pa-entry { display: none; }
            .pd-book .pd-holds .pd-tree-folder:not(.pa-open) .pd-paragraph.pa-entry { display: flex; align-items: center; gap: calc(${({theme:e})=>e.space} / 3); margin: 0; padding: calc(${({theme:e})=>e.space} / 6) calc(${({theme:e})=>e.space} * 0.5833) calc(${({theme:e})=>e.space} / 6) calc(${({theme:e})=>e.space} * 1.5); font-size: calc(0.8929 * ${({theme:e})=>e.size}); line-height: 1.35; color: ${({theme:e})=>e.sideInk}; }
            .pd-book .pd-holds .pd-tree-folder:not(.pa-open) .pd-paragraph.pa-entry > a:first-child, .pd-book .pd-holds .pd-tree-folder:not(.pa-open) .pd-paragraph.pa-entry > .pd-word.pa-content, .pd-book .pd-holds .pd-tree-folder:not(.pa-open) .pd-paragraph.pa-entry .pa-content { flex: 1 1 auto; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
            .pd-book .pd-holds .pd-tree-folder:not(.pa-open) .pd-paragraph.pa-entry .pd-word.pa-arrow, .pd-book .pd-holds .pd-tree-folder:not(.pa-open) .pd-paragraph.pa-entry > a:has(> .pa-arrow) { display: none; }
            .pd-book .pd-holds .pd-tree-folder:not(.pa-open) .pd-paragraph.pa-entry .pa-number { display: none; }
            .pd-book .pd-holds .pd-tree-folder:not(.pa-open) .pd-paragraph.pa-entry:hover { background: color-mix(in oklab, ${({theme:e})=>e.sky} 30%, white); }
            .pd-book .pd-holds .pd-tree-folder:not(.pa-open) .pd-paragraph.pa-entry.pa-open { background: linear-gradient(90deg, #eff4fa, #f8fafd); color: ${({theme:e})=>e.heading}; font-weight: 500; }
            @media (max-width: ${({theme:e})=>e.narrow}) {
                .pd-book:not(.pa-turned) .pd-holds { padding: calc(${({theme:e})=>e.space} / 4) calc(${({theme:e})=>e.space} / 3); }
                .pd-book:not(.pa-turned) .pd-holds .pd-chapter.pa-table-of-contents { flex-direction: row; align-items: center; min-height: 0; }
                .pd-book .pd-holds .pd-tree-folder:not(.pa-open) { display: inline-block; vertical-align: top; }
                .pd-book .pd-holds .pd-tree-folder:not(.pa-open) .pd-fold-chevron { position: static; display: inline-grid; vertical-align: middle; margin-inline-end: 2px; }
                .pd-book .pd-holds .pd-tree-folder:not(.pa-open) .pd-sentence.pd-heading { display: inline-flex; height: calc(1.9 * ${({theme:e})=>e.size}); padding: 0 calc(${({theme:e})=>e.space} / 2) 0 calc(${({theme:e})=>e.space} / 6); }
                .pd-book .pd-holds .pd-tree-folder:not(.pa-open) .pd-section { display: inline; margin: 0; }
                .pd-book .pd-holds .pd-tree-folder:not(.pa-open) .pd-paragraph.pa-entry { display: none; }
            }
            .pd-book .pd-holds .pd-sentence.pd-heading .pd-word.pd-month-count { margin-inline-start: auto; font-size: calc(0.7857 * ${({theme:e})=>e.size}); font-weight: 400; color: ${({theme:e})=>e.faint}; font-variant-numeric: tabular-nums; }
            .pd-book .pd-holds .pa-entry .pd-word.pd-entry-day { flex: none; margin-inline-start: auto; font-size: calc(0.7857 * ${({theme:e})=>e.size}); font-weight: 400; color: ${({theme:e})=>e.faint}; font-variant-numeric: tabular-nums; }
        `}};r(Ur,"$ProjectLayout");let xt=Ur;const Xr=class Xr extends ca{constructor(){super(...arguments),this.specification=new me}get entries(){return this.text.find(x).filter(e=>e.is(L)&&e!==this.synopsis)}get files(){return this.chapters.filter(e=>e.is(O)&&e.is(G))}get project(){return this.chapters.find(e=>e.is(O)&&!e.is(G))}get laidOutChapters(){return[...super.laidOutChapters,...this.entries]}get pages(){const e=[...this.entries].sort((a,n)=>D(n).localeCompare(D(a)));return[...super.pages,...e]}get open(){return this.$bookmark===void 0?void 0:this.chapterAt(this.$bookmark)}chapterByPlace(){const e=super.chapterByPlace();for(const a of this.entries)a.mention!==void 0&&!e.has(a.mention.identifier)&&e.set(a.mention.identifier,a);return e}write(){const e=o(Bc);return s.jsxs(s.Fragment,{children:[super.write(),s.jsx("div",{className:"pd-knowledge-column",children:s.jsx(e,{chapter:this.cover})})]})}head(){const e=o(this.cover),a=o(Fc),n=o(Cc);return s.jsxs(s.Fragment,{children:[s.jsx(e,{}),s.jsx(a,{chapter:this.cover}),s.jsx(n,{chapter:this.cover})]})}$Bound(){const e=o(Ic),a=o(Nc),n=o(Mc);let t="";const i=o(y);for(const m of this.pages.filter($=>this.entries.includes($))){const $=be(m),w=m.annotations.expressed(I)?.cover?.mention?.identifier;m.text.add(this,...$!==t?[s.jsx(a,{},"month")]:[],s.jsx(e,{},"count"),...w===void 0?[]:[s.jsx(n,{children:s.jsx(i,{children:w})},"open")]),t=$}const d=o(Ti),u=o(Tc);for(const m of this.table?.annotations.expressed(q)?.entries??[]){const $=A(m)?.identifier,w=$===void 0?void 0:this.chapterAt($);w===void 0||!this.entries.includes(w)||m.text.add(this,s.jsx(d,{entry:w}))}for(const m of this.table?.text.find(P)??[]){m.$is=[At];const $=m.canonical;$!==void 0&&m.text.find(f).some(w=>{const Jr=A(w)?.identifier;return Jr!==void 0&&this.entries.includes(this.chapterAt(Jr))})&&$.text.add(this,s.jsx(u,{section:m}))}super.$Bound()}};r(Xr,"$ProjectManual");let vt=Xr;const Kr=class Kr extends Te{$everyEntryStandsForAConversation(e){const a=e.entries.find(n=>n.annotations.expressed(L)?.means===void 0);c(a===void 0,`every entry of a project manual stands for a conversation, holding its synopsis, and "${a?.title?.name}" stands for none`)}$hasOneProjectChapter(e){c(e.chapters.filter(a=>a.is(O)&&!a.is(G)).length===1,"a project manual has one chapter about the project, which appends no file, and this one has none or more than one")}$onlyAChapterAppends(e){const a=[...e.chapters,...e.entries];c(e.text.find(x).every(n=>a.includes(n)||!n.is(G)),"only an ordinary chapter or an entry files a file, and here a cover, a synopsis or a table of contents files one")}};r(Kr,"ProjectManualSpecification");let me=Kr;Ft([l("every entry of a project manual stands for a conversation, holding its synopsis")],me.prototype,"$everyEntryStandsForAConversation");Ft([l("a project manual has one chapter about the project, which appends no file")],me.prototype,"$hasOneProjectChapter");Ft([l("an entry of a project manual files a file only when a chapter may")],me.prototype,"$onlyAChapterAppends");const vc=o(ft),yc=o(gt),wc=o(bt),jc=o(ut),zc=o(mt),Oc=o($t),Dc=o(kt),Pc=o(xt),Ac=o(vt),Cc=vc,Ic=yc,Nc=wc,Mc=jc,Tc=zc,Fc=Oc,Bc=Dc;o(Ac,qa)(Pc);const Wc=r(()=>s.jsxs(ni,{children:[s.jsx(Qd,{}),s.jsx(wi,{ground:"#eef5f6",band:"#c3e3e6",bandInk:"#1c565c",foot:"#8db9bd",footInk:"#153e43",ink:"#1f5a60"}),s.jsx(ji,{x:"-46",y:"-13"}),s.jsx(ri,{children:"[Dougs Library](/dougs-library/)"}),s.jsx(ii,{children:"[Doug](/dougs-story/)"}),s.jsx(di,{children:"[Library](/dougs-library/)"}),s.jsx(pi,{children:"[The Library](/dougs-library/)"}),s.jsxs(ci,{children:[s.jsx(yi,{}),s.jsx(li,{children:`<svg viewBox="0 0 64 64" class="pd-illustration"><path class="light" d="M9 7h46v50H9z"/><path d="M9 7h46v50H9zM9 24h46M9 41h46"/><path class="fill" d="M13 11h5v13h-5zM20 9h4v15h-4zM26 13h6v11h-6zM34 10h4v14h-4zM40 14h6v10h-6z"/><path d="M48 24l4-12 3 1-4 11z"/><path class="fill" d="M13 28h4v13h-4zM19 30h7v11h-7zM28 27h4v14h-4zM34 31h5v10h-5zM41 28h6v13h-6zM49 29h3v12h-3z"/><path class="fill" d="M13 46h6v11h-6zM21 44h4v13h-4zM27 47h8v10h-8zM37 45h4v12h-4zM43 48h6v9h-6z"/><path d="M50 57l3-11 3 1-3 10z"/></svg>
`})]})]}),"LibraryCover"),Ol=r(()=>s.jsxs(ni,{children:[s.jsx(Jp,{}),s.jsx(ed,{}),s.jsx(Vd,{children:Wc()}),s.jsx(wi,{ground:"#f5eedf",band:"#d9c3a3",bandInk:"#4a3626",foot:"#a3b6cc",footInk:"#2a4262",ink:"#2f4a6a"}),s.jsx(ji,{x:"-54",y:"-33"}),s.jsx(ri,{children:"[Dougs Story](/dougs-story/)"}),s.jsx(ii,{children:"[Doug](/dougs-story/)"}),s.jsx(di,{children:"[Library](/dougs-library/)"}),s.jsx(pi,{children:"[The Librarian](/dougs-story/)"}),s.jsxs(ci,{children:[s.jsx(yi,{}),s.jsx(li,{children:`<svg viewBox="0 0 64 64" class="pd-illustration"><path class="light" d="M8 13h23v38H8zM33 13h23v38H33z"/><path d="M8 13h23v38H8zM33 13h23v38H33z"/><path d="M13 21h13M13 27h13M13 33h9M38 21h13M38 27h13M38 33h13M38 39h8"/><path class="fill" d="M15 55 45 25l4 4-30 30-6 2z"/><path d="M15 55 45 25l4 4-30 30-6 2zM43 27l4 4M17 53l2 2"/></svg>
`})]})]}),"Cover");export{Is as $,Sc as A,_c as B,Ol as C,Xc as D,ca as E,bl as F,sl as G,tl as H,qc as I,Jp as J,ol as K,Wc as L,xl as M,Zc as N,ec as O,kl as P,vl as Q,Uc as R,Gc as S,ae as T,gl as U,Vd as V,ji as W,nl as X,rl as Y,ll as Z,fl as _,Yc as a,hl as a0,il as a1,Pa as a2,Qc as a3,Jc as a4,Ec as a5,Rc as a6,Vc as b,vt as c,Kc as d,wi as e,yi as f,lt as g,ml as h,yl as i,Qd as j,$l as k,wl as l,jl as m,zl as n,ul as o,Js as p,Ea as q,Q as r,pt as s,xe as t,Xs as u,al as v,el as w,dl as x,pl as y,cl as z};
