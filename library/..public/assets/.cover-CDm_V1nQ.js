var ui=Object.defineProperty;var r=(d,e)=>ui(d,"name",{value:e,configurable:!0});import{$ as o,K as mi,x as m,w as h,o as f,N as pt,W as y,R as x,j as t,O as Tr,Q as Mr,r as g,s as b,t as c,U as v,v as l,V as M,q as j,u as $,y as ue,X as Fa,J as $i,Y as z,Z as ct,_ as ki,a0 as G,a1 as Ar,a2 as lt,a3 as xi,z as me,F as C,a4 as _,a5 as vi,a6 as yi,a7 as _a,a8 as wi,a9 as ji,aa as zi,G as he,ab as Br,ac as ht,ad as Wa,ae as Fr,af as Oi,ag as Wr,ah as Pi,ai as Di,aj as Ai,ak as Ci,p as Ii,al as Ni,C as Hr,T as Lr,i as Rr,k as _r,n as Er,a as Gr,l as qr,am as Ti}from"./index-BypI-zHx.js";const jt=class jt extends mi{constructor(){super(...arguments),this.font="'Inter', system-ui, sans-serif",this.prose="'Inter', system-ui, sans-serif",this.mono="'JetBrains Mono', ui-monospace, monospace",this.size="0.875rem",this.leading="1.6",this.measure="44rem",this.spreadColumn="15.5rem",this.space="1.5rem",this.holdsColumn="240px",this.barHeight="50px",this.beat="320ms",this.narrow="48rem",this.phoneWidth="390px",this.colour="#4e9eb9",this.accent="#166178",this.bar="#0c1b1f",this.barInk="#ffffff",this.barDim="#a9bcc1",this.barOn="rgba(255, 255, 255, 0.11)",this.barLine="#1d3339",this.mark="#c8f4fb",this.side="#e3f5fa",this.sideInk="#10252c",this.sideDim="#516770",this.sideOn="#ffffff",this.sideLine="#cbe6ee",this.night="#0c1b1f",this.deep="#14323c",this.blue="#166178",this.sea="#4e9eb9",this.sky="#8fc8dc",this.opal="#c8f4fb",this.pale="#e3f5fa",this.mist="#f1f7f9",this.white="#ffffff",this.ink="#10252c",this.soft="#516770",this.line="#dbe7ec",this.me="#e8590c",this.wash="linear-gradient(105deg, #e2f6fb 0%, #ecf0fd 52%, #fae9f4 100%)",this.serif="'Source Serif 4', Georgia, serif",this.between="'Source Sans 3', 'Inter', system-ui, sans-serif",this.bookPaper="#fbf9f3",this.bookInk="#29251d",this.heading="#10252c",this.capital="#166178",this.lit="#166178",this.faint="#8792a2",this.paper="#ffffff",this.panel="#f1f7f9",this.rule="#dbe7ec",this.edge="transparent",this.tint="#e3f5fa",this.dusk="#14323c",this.glow="#cfe6e3",this.dim="#4f7672",this.keyword="#8ad7ff",this.string="#ffd48a",this.type="#9be3d6",this.comment="#5f8a86",this.haze="#a9bcc1",this.glass="rgba(255, 255, 255, 0.62)",this.binding="linear-gradient(160deg, #16303a, #0c1b1f)",this.spine="inset 5px 0 0 rgba(0, 0, 0, 0.14), inset 6px 0 0 rgba(255, 255, 255, 0.12), 0 10px 20px -10px rgba(0, 0, 0, 0.45)",this.shadow="0 0.75rem 1.4rem -0.9rem rgba(12, 27, 31, 0.55)",this.volume="11.5rem",this.cover="8.25rem",this.card="18rem",this.barLight="#ffffff",this.barMid="#f1f7f9",this.barDeep="#e3f5fa",this.barShadow="none",this.sideLight="#ffffff",this.sideDeep="#e3f5fa",this.codeGround="#f1f7f9",this.hairline="1px",this.stroke="2px",this.rise="-1px",this.gloss="none",this.ring="0 0 0 2px #c8f4fb",this.decisionShadow="none",this.photo="7rem",this.radius="0.375rem",this.barTint="#ffffff",this.skyInk="#166178",this.lift="inset 5px 0 0 rgba(0, 0, 0, 0.14), inset 6px 0 0 rgba(255, 255, 255, 0.12), 0 14px 24px -12px rgba(0, 0, 0, 0.5)",this.openSpine="inset 7px 0 0 rgba(0, 0, 0, 0.14), inset 8px 0 0 rgba(255, 255, 255, 0.12), 0 12px 22px -14px rgba(0, 0, 0, 0.5)",this.sans="'Inter', system-ui, sans-serif",this.muted="#516770",this.bubble="rgba(16, 37, 44, 0.05)",this.shade="rgba(16, 37, 44, 0.03)",this.pill="#166178",this.column="48rem",this.style=m.div`${this.parts()}`}parts(){return[this.page(),this.writing(),this.links(),this.figures(),this.listings(),this.switches(),this.turns(),this.illustrations(),this.marks(),this.library(),this.head(),this.holds(),this.context(),this.tones()]}page(){return h`
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
        `}};r(jt,"$LibraryBookTheme");let q=jt;const Mi=o(q);var Bi=Object.defineProperty,Fi=Object.getOwnPropertyDescriptor,Wi=r((d,e,a,n)=>{for(var s=Fi(e,a),i=d.length-1,p;i>=0;i--)(p=d[i])&&(s=p(e,a,s)||s);return s&&Bi(e,a,s),s},"__decorateClass$n");const zt=class zt extends g{constructor(){super(...arguments),this.specification=new Re}defines(e){e.classes.add(this,"pa-label")}erase(e){e.classes.revert(this)}};r(zt,"$Label");let Ea=zt;const Ot=class Ot extends b{$saidOfAWord(e){c(e instanceof v,"label is said of a word, and this is not one")}};r(Ot,"LabelSpecification");let Re=Ot;Wi([l("label is said of a word")],Re.prototype,"$saidOfAWord");const Ha=o(Ea),Pt=class Pt extends f{get cover(){return this.$cover??this.book?.cover}write(){const e=this.cover.annotations.expressed(pt),a=o(y),n=o(Ha),s=o(x);return t.jsxs(t.Fragment,{children:[t.jsxs(a,{children:[t.jsx(n,{}),"by"]}),t.jsxs(a,{children:[t.jsx(s,{children:e.means.identifier}),e.name]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-byline")}};r(Pt,"$Byline");let Ga=Pt;const Dt=class Dt extends f{get cover(){return this.$cover??this.book?.cover}write(){const e=this.cover.annotations.expressed(Tr),a=o(y),n=o(Ha),s=o(x);return t.jsxs(t.Fragment,{children:[t.jsxs(a,{children:[t.jsx(n,{}),"subject"]}),t.jsxs(a,{children:[t.jsx(s,{children:e.means.identifier}),e.name]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-subject-line")}};r(Dt,"$SubjectLine");let qa=Dt;const At=class At extends f{get cover(){return this.$cover??this.book?.cover}get topics(){return this.cover?.annotations.find(Mr)??[]}write(){const e=o(y),a=o(Ha),n=o(x);return t.jsxs(t.Fragment,{children:[t.jsxs(e,{children:[t.jsx(a,{}),"topic"]}),this.topics.map((s,i)=>t.jsxs(e,{children:[t.jsx(n,{children:s.means.identifier}),s.name]},i))]})}$Define(){super.$Define(),this.classes.add(this,"pd-topic-line")}};r(At,"$TopicLine");let Ya=At;const Yr=o(Ga),Hi=o(qa),Li=o(Ya);var Ri=Object.defineProperty,_i=Object.getOwnPropertyDescriptor,Ei=r((d,e,a,n)=>{for(var s=_i(e,a),i=d.length-1,p;i>=0;i--)(p=d[i])&&(s=p(e,a,s)||s);return s&&Ri(e,a,s),s},"__decorateClass$m");const Ct=class Ct extends b{$saidOfABook(e){c(e instanceof T,"this is said of a book of this library, and here it is said of something else")}};r(Ct,"OfABookSpecification");let O=Ct;Ei([l("this is said of a book of this library")],O.prototype,"$saidOfABook");const It=class It extends v{get on(){return[this.book.$is].flat().includes(this.$annotation)}$Switch(...e){this.$Writing(...e),this.containers.replace(this,"span","button")}container(e){return super.container({type:"button","aria-pressed":this.on,onClick:r(()=>this.press(),"onClick"),...e})}press(){const e=this.book,a=[e.$is].flat();e.$is=this.on?a.filter(n=>n!==this.$annotation):[this.$annotation,...a]}$Define(){super.$Define(),this.classes.add(this,"pd-switch")}};r(It,"$Switch");let $e=It;const Nt=class Nt extends $e{press(){const e=this.book,a=[e.$is].flat().filter(n=>!this.$family.includes(n));e.$is=[this.$annotation,...a]}};r(Nt,"$Tab");let ke=Nt;const ft=o($e),Gi=o(ke);var qi=Object.defineProperty,Yi=Object.getOwnPropertyDescriptor,Zr=r((d,e,a,n)=>{for(var s=Yi(e,a),i=d.length-1,p;i>=0;i--)(p=d[i])&&(s=p(e,a,s)||s);return s&&qi(e,a,s),s},"__decorateClass$l");const Tt=class Tt extends M{constructor(){super(...arguments),this.specification=new xe,this.style=m.div`
        .pa-coloured { --colour: ${e=>e.$colour}; }
    `}get colour(){return j.copy(this.text).trim()}$Coloured(...e){this.$Format(...e);const a=this.style;this._painted=n=>t.jsx(a,{$colour:this.colour,...n})}defines(e){e.classes.add(this,"pa-coloured"),e.containers.add(this,this._painted)}erase(e){e.classes.revert(this),e.containers.revert(this)}};r(Tt,"$Coloured");let Y=Tt;const Mt=class Mt extends b{$saidOfAChapterOrAParagraph(e){c(e instanceof $||e instanceof f,"coloured is said of a chapter or a paragraph, and this is neither")}$givenItsColour(e){c(/^#[0-9a-f]{6}$/iu.test(e.annotations.expressed(Y)?.colour??""),"coloured is given its colour as six hex digits, and this one was given something else")}};r(Mt,"ColouredSpecification");let xe=Mt;Zr([l("coloured is said of a chapter or a paragraph")],xe.prototype,"$saidOfAChapterOrAParagraph");Zr([l("coloured is given its colour")],xe.prototype,"$givenItsColour");const sc=o(Y);var Zi=Object.defineProperty,Ui=Object.getOwnPropertyDescriptor,gt=r((d,e,a,n)=>{for(var s=Ui(e,a),i=d.length-1,p;i>=0;i--)(p=d[i])&&(s=p(e,a,s)||s);return s&&Zi(e,a,s),s},"__decorateClass$k");const Bt=class Bt extends M{constructor(){super(...arguments),this.specification=new ae}get identifier(){return ue.reference(j.copy(this.text))?.identifier??""}get name(){return ue.reference(j.copy(this.text))?.name??""}get entry(){return this.book?.chapterAt(this.identifier)}get drawing(){const e=this.entry?.text.find(f).flatMap(a=>a.text.find(Fa))[0];return e===void 0?"":j.copy(e.text).trim()}get colour(){return this.entry?.annotations.expressed(Y)?.colour??""}$Keyed(...e){this.$Format(...e);const a=o(Xi);this._layer=n=>t.jsxs("div",{...n,children:[t.jsx(a,{keyed:this}),n.children]})}defines(e){e.classes.add(this,"pa-keyed"),e.containers.add(this,this._layer)}erase(e){e.classes.revert(this),e.containers.revert(this)}};r(Bt,"$Keyed");let R=Bt;const Ft=class Ft extends v{constructor(){super(...arguments),this.style=m.span`
        --colour: ${e=>e.$colour};
    `}$Icon(...e){this.$Writing(...e);const a=this.style;this._painted=n=>t.jsx(a,{$colour:this.$keyed?.colour??"",...n}),this.containers.replace(this,"span",this._painted)}write(){return t.jsx("span",{className:"pd-drawing",role:"img","aria-label":this.$keyed?.name,dangerouslySetInnerHTML:{__html:this.$keyed?.drawing??""}})}$Define(){super.$Define(),this.classes.add(this,"pd-icon")}};r(Ft,"$Icon");let Za=Ft;const Wt=class Wt extends b{$saidOfAChapter(e){c(e instanceof $,"keyed is said of a chapter, and this is not one")}$namesAnEntry(e){const a=e.annotations.expressed(R)?.entry;c(a!==void 0&&a.annotations.expressed(R)?.entry===a,"keyed names an entry of the key, a chapter of this book keyed as itself, and this one names something else")}$entryHoldsItsDrawingAndColour(e){const a=e.annotations.expressed(R)?.entry;a!==void 0&&c(a.text.find(f).flatMap(n=>n.text.find(Fa)).length===1&&a.is(Y),"an entry of the key holds one drawing and its colour, and this one holds something else")}};r(Wt,"KeyedSpecification");let ae=Wt;gt([l("keyed is said of a chapter")],ae.prototype,"$saidOfAChapter");gt([l("keyed names an entry of the key")],ae.prototype,"$namesAnEntry");gt([l("an entry of the key holds one drawing and its colour")],ae.prototype,"$entryHoldsItsDrawingAndColour");const tc=o(R),Ur=o(Za),Xi=Ur;var Ki=Object.defineProperty,Ji=Object.getOwnPropertyDescriptor,Qi=r((d,e,a,n)=>{for(var s=Ji(e,a),i=d.length-1,p;i>=0;i--)(p=d[i])&&(s=p(e,a,s)||s);return s&&Ki(e,a,s),s},"__decorateClass$j");const Vi={tsx:"typescript",ts:"typescript",mjs:"javascript",js:"javascript",css:"css",html:"xml",svg:"xml",json:"json",md:"markdown"},Si='<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"><path d="M6 4.5 3.5 8 6 11.5M10 4.5 12.5 8 10 11.5"/></svg>',fe=r(d=>`${d.$identifier}${d.$type}`,"fileNameOf"),ed=r(d=>d===void 0?[]:j.copy(d.text).split(`
`),"fileLinesOf"),Xr=r(d=>d?.chapter?.annotations.expressed(P),"spreadOf"),Ht=class Ht extends f{constructor(){super(...arguments),this.$family=[]}get name(){return this.$file===void 0?"":fe(this.$file)}get language(){return Vi[(this.$file?.$type??"").replace(/^\./u,"")]??""}get spread(){return Xr(this.$file)}get chapter(){return this.$file?.chapter??super.chapter}$FileListing(...e){this.$Writing(...e),this.containers.replace(this,"span","div")}container(e){return super.container({onClick:r(()=>this.press(),"onClick"),...e})}press(){if(this.$filePanelState===void 0)return;const e=this.book,a=[e.$is].flat().filter(n=>!this.$family.includes(n));e.$is=[this.$filePanelState,...a]}write(){const e=o(y),a=o($i);return t.jsxs(t.Fragment,{children:[t.jsx(e,{children:this.name}),t.jsx(a,{identifier:this.$file?.$identifier,type:this.$file?.$type,language:this.language,numbered:!0})]})}$Define(){super.$Define(),this.classes.add(this,"pd-file-listing");const e=o(td);this.annotations.add(this,t.jsx(e,{}))}};r(Ht,"$FileListing");let _e=Ht;const Lt=class Lt extends g{constructor(){super(...arguments),this.specification=new Ee}defines(e){const a=e;a.$file!==void 0&&a.spread?.openFile===a.$file&&e.classes.add(this,"pa-open")}erase(e){e.classes.revert(this)}};r(Lt,"$OpenListing");let Ua=Lt;const Rt=class Rt extends b{$isAFileListing(e){c(e instanceof _e,"an open listing is a file listing, and this is not one")}};r(Rt,"OpenListingSpecification");let Ee=Rt;Qi([l("an open listing is a file listing")],Ee.prototype,"$isAFileListing");const _t=class _t extends ke{constructor(){super(...arguments),this.$skeleton=!1,this.style=m.button`
        --colour: ${e=>e.$colour};
    `}get on(){const e=this.$file?.chapter;return e!==void 0&&e===this.book.open&&this.spread?.openFile===this.$file}get name(){return this.$file===void 0?"":fe(this.$file)}get spread(){return Xr(this.$file)}get colour(){return this.$file?.chapter?.annotations.expressed(R)?.colour??""}get lines(){return ed(this.$file)}get chapter(){return this.$file?.chapter??super.chapter}$FileTab(...e){this.$Switch(...e),this.containers.replace(this,"button",this.style)}container(e){return super.container({$colour:this.colour,...e})}press(){const e=this.spread;e!==void 0&&(e.$openFile=this.$file),this.$annotation!==void 0&&super.press()}write(){return t.jsxs(t.Fragment,{children:[t.jsx("span",{className:"pd-drawing",dangerouslySetInnerHTML:{__html:Si}}),t.jsx("span",{className:"pd-tab-name",children:this.name}),this.$skeleton?t.jsx("span",{className:"pd-skeleton",children:this.lines.slice(0,14).map((e,a)=>t.jsx("i",{style:{width:`${Math.max(12,Math.min(100,e.length*2.2))}%`}},a))}):void 0]})}$Define(){super.$Define(),this.classes.add(this,"pd-file-tab")}};r(_t,"$FileTab");let Xa=_t;const ad=o(_e),sd=o(Ua),bt=o(Xa),td=sd;var od=Object.defineProperty,nd=Object.getOwnPropertyDescriptor,rd=r((d,e,a,n)=>{for(var s=nd(e,a),i=d.length-1,p;i>=0;i--)(p=d[i])&&(s=p(e,a,s)||s);return s&&od(e,a,s),s},"__decorateClass$i");const Ta=class Ta extends g{constructor(){super(...arguments),this.specification=new O}defines(e){for(const a of e.annotations.after(this))a instanceof Ta&&e.annotations.express(a,!1);e.classes.add(this,"pa-file-panel-state")}erase(e){e.classes.revert(this)}};r(Ta,"$FilePanelState");let se=Ta;const Et=class Et extends se{defines(e){super.defines(e),e.classes.add(this,"pa-code-forward")}};r(Et,"$CodeForward");let Ka=Et;const Gt=class Gt extends se{defines(e){super.defines(e),e.classes.add(this,"pa-words-forward")}};r(Gt,"$WordsForward");let Ja=Gt;const qt=class qt extends se{defines(e){super.defines(e),e.classes.add(this,"pa-split")}};r(qt,"$Split");let Qa=qt;const Yt=class Yt extends g{constructor(){super(...arguments),this.specification=new O}defines(e){e.classes.add(this,"pa-light-code")}erase(e){e.classes.revert(this)}};r(Yt,"$LightCode");let Va=Yt;const Zt=class Zt extends g{constructor(){super(...arguments),this.specification=new O}defines(e){e.classes.add(this,"pa-wrapped-code")}erase(e){e.classes.revert(this)}};r(Zt,"$WrappedCode");let Sa=Zt;const Ut=class Ut extends g{constructor(){super(...arguments),this.specification=new O}defines(e){e.classes.add(this,"pa-numbered-code")}erase(e){e.classes.revert(this)}};r(Ut,"$NumberedCode");let es=Ut;const Xt=class Xt extends g{constructor(){super(...arguments),this.specification=new qe}defines(e){e.classes.add(this,"pa-brief")}erase(e){e.classes.revert(this)}};r(Xt,"$Brief");let Ge=Xt;const Kt=class Kt extends b{$saidOfAParagraph(e){c(e instanceof f,"brief is said of a paragraph, and this is not one")}};r(Kt,"BriefSpecification");let qe=Kt;rd([l("brief is said of a paragraph")],qe.prototype,"$saidOfAParagraph");o(se);const ut=o(Ka),mt=o(Ja),ve=o(Qa),id=o(Va),dd=o(Sa),Kr=o(es),oc=o(Ge),Jt=class Jt extends f{constructor(){super(...arguments),this.style=m.div`
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
    `}get spread(){return this.chapter?.annotations.expressed(P)}$FileRail(...e){this.$Writing(...e),this.containers.replace(this,"span",this.style)}write(){const e=o(bt),a=this.spread;if(a!==void 0)return a.files.map(n=>t.jsx(e,{file:n,annotation:ve,family:a.filePanelStates,skeleton:!0},fe(n)))}$Define(){super.$Define(),this.classes.add(this,"pd-file-rail")}};r(Jt,"$FileRail");let as=Jt;const Qt=class Qt extends ke{constructor(){super(...arguments),this.style=m.button`
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
    `}get paragraphs(){return(this.chapter?.text.find(z)??[]).flatMap(e=>e.text.find(f)).slice(0,16).map(e=>j.copy(e.text))}$FilePanelGrip(...e){this.$Switch(...e),this.containers.replace(this,"button",this.style)}write(){return t.jsx("span",{className:"pd-skeleton",children:this.paragraphs.map((e,a)=>t.jsx("i",{style:{width:`${Math.max(25,Math.min(100,e.length/4))}%`}},a))})}$Define(){super.$Define(),this.classes.add(this,"pd-file-panel-grip")}};r(Qt,"$FilePanelGrip");let ss=Qt;const pd=o(as),cd=o(ss),Vt=class Vt extends f{constructor(){super(...arguments),this.style=m.div`
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
    `}get spread(){return this.chapter?.annotations.expressed(P)}$FilePanel(...e){this.$Writing(...e),this.containers.replace(this,"span",this.style)}write(){const e=o(fd),a=o(ad),n=this.spread;if(n!==void 0)return t.jsxs(t.Fragment,{children:[t.jsx(e,{chapter:this.chapter}),t.jsx("div",{className:"pd-file-listings",children:n.files.map(s=>t.jsx(a,{file:s,filePanelState:ut,family:n.filePanelStates},fe(s)))})]})}$Define(){super.$Define(),this.classes.add(this,"pd-file-panel")}};r(Vt,"$FilePanel");let ts=Vt;const St=class St extends f{constructor(){super(...arguments),this.style=m.div`
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
    `}get spread(){return this.chapter?.annotations.expressed(P)}$FilePanelBar(...e){this.$Writing(...e),this.containers.replace(this,"span",this.style)}write(){const e=o(bt),a=o(Gi),n=o(ft),s=this.spread,i=this.chapter;if(s!==void 0)return t.jsxs(t.Fragment,{children:[s.files.map(p=>t.jsx(e,{file:p},fe(p))),t.jsx("span",{className:"pd-words-only",children:t.jsx(a,{chapter:i,annotation:mt,family:s.filePanelStates,children:"words"})}),t.jsx("span",{className:"pd-dock pd-to-full",children:t.jsx(a,{chapter:i,annotation:ut,family:s.filePanelStates,children:"full screen"})}),t.jsx("span",{className:"pd-dock pd-to-split",children:t.jsx(a,{chapter:i,annotation:ve,family:s.filePanelStates,children:"split"})}),t.jsxs("span",{className:"pd-options",children:[t.jsx(n,{chapter:i,annotation:id,children:"light"}),t.jsx(n,{chapter:i,annotation:dd,children:"wrap"}),t.jsx(n,{chapter:i,annotation:Kr,children:"lines"})]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-file-panel-bar")}};r(St,"$FilePanelBar");let os=St;const ld=o(ts),hd=o(os),fd=hd;var gd=Object.defineProperty,bd=Object.getOwnPropertyDescriptor,ud=r((d,e,a,n)=>{for(var s=bd(e,a),i=d.length-1,p;i>=0;i--)(p=d[i])&&(s=p(e,a,s)||s);return s&&gd(e,a,s),s},"__decorateClass$h");const eo=class eo extends M{constructor(){super(...arguments),this.specification=new Ye,this.$openFile=void 0,this.grid=m.div`
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
    `}get files(){return this.parent.annotations.find(ct).reverse()}get openFile(){return this.$openFile??this.files[0]}get filePanelStates(){return[mt,ve,ut]}$Spread(...e){this.$Format(...e);const a=this.grid,n=o(ld),s=o(pd),i=o(cd);this.style=({className:p,children:u})=>{const k=this.parent,F=[...k.classes].includes("pa-open");return t.jsxs(a,{className:`${p??""}${F?" pa-open":""}`.trim(),children:[t.jsx("div",{className:"pd-words",children:u}),F?t.jsxs(t.Fragment,{children:[t.jsx(n,{chapter:k}),t.jsx(s,{chapter:k}),t.jsx(i,{chapter:k,annotation:ve,family:this.filePanelStates})]}):void 0]})}}defines(e){super.defines(e),e.classes.add(this,"pa-spread")}erase(e){super.erase(e),e.classes.revert(this)}};r(eo,"$Spread");let P=eo;const ao=class ao extends b{$isAChapter(e){c(e instanceof $,"a spread is a chapter read beside its files, and this is not a chapter")}};r(ao,"SpreadSpecification");let Ye=ao;ud([l("a spread is a chapter read beside its files")],Ye.prototype,"$isAChapter");const nc=o(P);var md=Object.defineProperty,$d=Object.getOwnPropertyDescriptor,We=r((d,e,a,n)=>{for(var s=$d(e,a),i=d.length-1,p;i>=0;i--)(p=d[i])&&(s=p(e,a,s)||s);return s&&md(e,a,s),s},"__decorateClass$g");const Jr='<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3.5 10.5 8 6 12.5"/></svg>',kd='<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linejoin="round" stroke-linecap="round"><rect class="ground" x="0.75" y="0.75" width="14.5" height="14.5"/><path d="M3.5 5.5h3l1.5 1.5h4.5v5h-9z"/></svg>',so=class so extends M{constructor(){super(...arguments),this.specification=new Xe,this.style=m.div`
        ${e=>e.$schemeDeclarations===void 0?"":`.pa-entry { ${e.$schemeDeclarations} }`}
    `}get place(){return I(this.parent).identifier}get referencedChapter(){return this.book.chapterAt(this.place)}get cover(){return this.referencedChapter?.annotations.expressed(N)?.cover??this.book.coverOf(this.place)}get schemeDeclarations(){const e=this.cover?.annotations.expressed(W);if(e!==void 0)return e.declarations;const a=this.referencedChapter?.annotations.expressed(Y)?.colour;return a===void 0?void 0:`--colour: ${a};`}$Entry(...e){this.$Format(...e);const a=this.style;this._painted=n=>t.jsx(a,{$schemeDeclarations:this.schemeDeclarations,...n})}defines(e){e.classes.add(this,"pa-entry"),e.containers.add(this,this._painted),(this.place===this.book?.$bookmark||this.place===this.book.open?.mention?.identifier)&&e.classes.add(this,"pa-open")}erase(e){e.classes.revert(this),e.containers.revert(this)}};r(so,"$Entry");let Z=so;const to=class to extends g{constructor(){super(...arguments),this.specification=new Ue}defines(e){e.classes.add(this,"pa-appendix")}erase(e){e.classes.revert(this)}};r(to,"$Appendix");let ye=to;const oo=class oo extends g{constructor(){super(...arguments),this.specification=new Ze}get entries(){return this.chapter.text.find(z).flatMap(a=>a.text.find(f)).filter(a=>!a.is(ki)&&I(a)!==void 0)}$Bound(){const e=o(yd),a=o(ai),n=o(bt),s=this.book;for(const i of this.entries){i.annotations.add(this,t.jsx(e,{}));const p=s.chapterAt(I(i).identifier)?.annotations.expressed(P);if(p===void 0)continue;const u=p.files;i.text.add(this,t.jsx(a,{foldedWriting:u.length===0?void 0:i,annotation:ei}),...u.map(k=>t.jsx(n,{file:k,annotation:ve,family:p.filePanelStates},fe(k))))}super.$Bound()}};r(oo,"$Index");let U=oo;const no=class no extends b{$isATableOfContents(e){c(e.is(G),"an index is a table of contents, and this chapter is not one")}};r(no,"IndexSpecification");let Ze=no;We([l("an index is a table of contents")],Ze.prototype,"$isATableOfContents");const ro=class ro extends b{$isASectionOfTheTable(e){c(e instanceof z&&e.chapter?.is(G)===!0,"the appendix is a section of the table of contents, and this is not one")}};r(ro,"AppendixSpecification");let Ue=ro;We([l("the appendix is a section of the table of contents")],Ue.prototype,"$isASectionOfTheTable");const io=class io extends b{$isARowThatLeadsSomewhere(e){c(e instanceof f&&I(e)!==void 0,"an entry is a row that leads somewhere, and this is not one")}};r(io,"EntrySpecification");let Xe=io;We([l("an entry is a row that leads somewhere")],Xe.prototype,"$isARowThatLeadsSomewhere");const po=class po extends g{constructor(){super(...arguments),this.specification=new Je}defines(e){e.classes.add(this,"pa-folded")}erase(e){e.classes.revert(this)}};r(po,"$Folded");let ns=po;const co=class co extends $e{get on(){return this.$foldedWriting!==void 0&&[this.$foldedWriting.$is].flat().includes(this.$annotation)}container(e){return super.container({...e,disabled:this.$foldedWriting===void 0,onClick:r(a=>{a.preventDefault(),this.press()},"onClick")})}press(){const e=this.$foldedWriting;if(e===void 0)return;const a=[e.$is].flat();e.$is=this.on?a.filter(n=>n!==this.$annotation):[this.$annotation,...a]}write(){return t.jsx("span",{className:"pd-drawing",dangerouslySetInnerHTML:{__html:Jr}})}$Define(){super.$Define(),this.classes.add(this,"pd-fold-chevron")}};r(co,"$FoldChevron");let rs=co;const lo=class lo extends M{constructor(){super(...arguments),this.specification=new Qe,this.tree=m.div`
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
    `}get section(){return this.parent}get firstPlace(){return this.section.text.find(f).map(e=>I(e)).find(e=>e!==void 0)?.identifier}get part(){const e=this.firstPlace;return e===void 0?void 0:this.book.chapterAt(e)?.part}get open(){const e=this.book.open;return e!==void 0&&e.part?.name===this.part?.name}$TreeFolder(...e){this.$Format(...e);const a=this.tree,n=o(ai),s=o(y),i=o(x);this.style=({className:p,children:u})=>{const k=this.firstPlace,F=[...this.section.classes].includes("pa-open"),be=t.jsx("span",{className:"pd-drawing pd-tree-folder-mark",dangerouslySetInnerHTML:{__html:kd}});return t.jsxs(a,{className:`${p??""} pd-tree-folder${F?" pa-open":""}`.trim(),children:[t.jsx(n,{foldedWriting:this.section,annotation:ei}),k===void 0?be:t.jsxs(s,{children:[t.jsx(i,{children:k}),be]}),u]})}}defines(e){super.defines(e),e.classes.add(this,"pa-tree-folder"),this.open&&e.classes.add(this,"pa-open")}erase(e){super.erase(e),e.classes.revert(this)}};r(lo,"$TreeFolder");let Ke=lo;const ho=class ho extends b{$saidOfASectionOrAnEntry(e){c(e instanceof z&&e.chapter?.is(G)===!0||e.is(Z),"folded is said of a section of a table of contents or of an entry, and this is neither")}};r(ho,"FoldedSpecification");let Je=ho;We([l("folded is said of a section of a table of contents or of an entry")],Je.prototype,"$saidOfASectionOrAnEntry");const fo=class fo extends b{$isASectionOfTheTable(e){c(e instanceof z&&e.chapter?.is(G)===!0,"a tree folder is a section of the table of contents, and this is not one")}};r(fo,"TreeFolderSpecification");let Qe=fo;We([l("a tree folder is a section of the table of contents")],Qe.prototype,"$isASectionOfTheTable");const go=class go extends f{get cover(){return this.$cover??this.book?.cover}write(){const e=this.cover,a=o(y),n=o(x);return t.jsxs(a,{children:[t.jsx(n,{children:e.mention.identifier}),t.jsx("span",{className:"pd-drawing",dangerouslySetInnerHTML:{__html:Jr}}),e.title.name]})}$Define(){super.$Define(),this.classes.add(this,"pd-tree-root")}};r(go,"$TreeRoot");let is=go;const I=r(d=>d.annotations.expressed(Ar)??d.text.find(v).map(e=>e.annotations.expressed(Ar)).find(e=>e!==void 0),"contentOf"),Qr=o(Z),rc=o(U),ic=o(ye),Vr=o(ns),xd=o(rs),Sr=o(Ke),vd=o(is),yd=Qr,ei=Vr,ai=xd;var wd=Object.defineProperty,jd=Object.getOwnPropertyDescriptor,Q=r((d,e,a,n)=>{for(var s=jd(e,a),i=d.length-1,p;i>=0;i--)(p=d[i])&&(s=p(e,a,s)||s);return s&&wd(e,a,s),s},"__decorateClass$f");const La=r((d,e)=>{const a=new Set(d.text.find(e));return d.text.find(xi).flatMap(n=>[...a.has(n)?[n]:[],...La(n,e)])},"within"),bo=class bo extends g{constructor(){super(...arguments),this.specification=new X}get identifier(){return ue.reference(j.copy(this.text))?.identifier??""}get name(){return ue.reference(j.copy(this.text))?.name??""}get cover(){const e=this.identifier;return this.chapter?.annotations.find(N).map(a=>a.cover).find(a=>a?.mention?.identifier===e)}defines(e){e.classes.add(this,"pa-design")}erase(e){e.classes.revert(this)}};r(bo,"$Design");let w=bo;const uo=class uo extends g{constructor(){super(...arguments),this.specification=new Ve}defines(e){e.classes.add(this,"pa-exhibit")}erase(e){e.classes.revert(this)}};r(uo,"$Exhibit");let we=uo;const mo=class mo extends g{constructor(){super(...arguments),this.specification=new Se,this.$number=0,this.span=m.span.attrs({className:"pd-plate"})``}note(){const e=this.span;return t.jsxs(t.Fragment,{children:[t.jsx(e,{children:String(this.$number).padStart(2,"0")}),t.jsx("span",{className:"pd-jacket-mini"})]})}defines(e){e.classes.add(this,"pa-plate")}erase(e){e.classes.revert(this)}};r(mo,"$Plate");let ds=mo;const $o=class $o extends M{constructor(){super(...arguments),this.specification=new ea,this.themeProvider=!0,this.room=m.div`
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
    `}get chapter(){return this.parent}get design(){return this.chapter.annotations.expressed(w)}get plate(){return this.book.chapters.filter(e=>e.is(w)).indexOf(this.chapter)+1}$Room(...e){this.$Format(...e);const a=this.room;this.style=({className:n,children:s})=>{const i=[...this.chapter.classes].includes("pa-open");return ee(this.design?.cover,t.jsxs(a,{className:`${n??""} pd-room${i?" pa-open":""}`.trim(),children:[t.jsx("span",{className:"pd-plate",children:String(this.plate).padStart(2,"0")}),s]}))}}defines(e){super.defines(e),e.classes.add(this,"pa-room")}erase(e){super.erase(e),e.classes.revert(this)}};r($o,"$Room");let ps=$o;const ko=class ko extends f{get references(){const e=this.book?.means?.identifier??"",a=new Map;for(const n of La(this.chapter,v)){if(n.parent===this)continue;const s=n.annotations.expressed(me)?.identifier;if(s===void 0||s.startsWith(e)||a.has(s))continue;const i=j.copy(n.text);a.set(s,ue.reference(i)?.name??i.trim())}return[...a]}write(){const e=o(y),a=o(x);return this.references.map(([n,s],i)=>t.jsxs(e,{children:[t.jsx(a,{children:n}),s,t.jsx("span",{className:"pd-where",children:n.replace(/^\/dougs-/u,"").replace(/\/#?/u," · ").replace(/ · $/u,"").replace(/-/gu," ")})]},i))}$Define(){super.$Define(),this.classes.add(this,"pd-built-in")}};r(ko,"$BuiltIn");let cs=ko;const xo=class xo extends b{$isAChapter(e){c(e instanceof $,"a design is a chapter, and this is not one")}$namesABook(e){c((e.annotations.expressed(w)?.identifier??"")!=="","a design names the book it is of, and this one names nothing")}$holdsTheCover(e){c(e.annotations.expressed(w)?.cover!==void 0,"a design holds the cover of the book it is of, as a volume, and this one holds none")}$showsItselfAsBuilt(e){c(e instanceof $&&La(e,f).some(a=>a.is(we)),"a design shows itself as built, in a paragraph said to be the exhibit, and this one shows nothing")}};r(xo,"DesignSpecification");let X=xo;Q([l("a design is a chapter")],X.prototype,"$isAChapter");Q([l("a design names the book it is of")],X.prototype,"$namesABook");Q([l("a design holds the cover of the book it is of")],X.prototype,"$holdsTheCover");Q([l("a design shows itself as built")],X.prototype,"$showsItselfAsBuilt");const vo=class vo extends b{$isAParagraphOfADesignHoldingOneImage(e){c(e instanceof f&&e.chapter?.is(w)===!0&&e.text.find(lt).length===1,"an exhibit is a paragraph of a design that holds one image, and this is not one")}};r(vo,"ExhibitSpecification");let Ve=vo;Q([l("an exhibit is a paragraph of a design that holds one image")],Ve.prototype,"$isAParagraphOfADesignHoldingOneImage");const yo=class yo extends b{$saidOfAnEntryLeadingToADesign(e){c(e.is(Z)&&e.annotations.expressed(Z)?.referencedChapter?.is(w)===!0,"a plate is said of an entry that leads to a design, and this is not one")}};r(yo,"PlateSpecification");let Se=yo;Q([l("a plate is said of an entry that leads to a design")],Se.prototype,"$saidOfAnEntryLeadingToADesign");const wo=class wo extends b{$isADesign(e){c(e instanceof $&&e.is(w),"a room is a chapter that is a design, and this is not one")}};r(wo,"RoomSpecification");let ea=wo;Q([l("a room is a chapter that is a design")],ea.prototype,"$isADesign");const dc=o(w),pc=o(we),zd=o(ds),Od=o(ps),Pd=o(cs);var Dd=Object.defineProperty,Ad=Object.getOwnPropertyDescriptor,A=r((d,e,a,n)=>{for(var s=Ad(e,a),i=d.length-1,p;i>=0;i--)(p=d[i])&&(s=p(e,a,s)||s);return s&&Dd(e,a,s),s},"__decorateClass$e");const ee=r((d,e,a)=>{const n=d?.annotations.expressed(W)?.painted;return n===void 0?e:t.jsx(n,{children:e},a)},"painted"),jo=class jo extends C{constructor(){super(...arguments),this.specification=new ne}get name(){return this.chapter?.title?.name??""}get author(){return this.chapter?.annotations.expressed(pt)?.name??""}get illustration(){return this.chapter?.text.find(f).find(e=>e.is(je))}get drawing(){const e=this.illustration?.text.find(Fa)[0];return e===void 0?"":j.copy(e.text).trim()}get scheme(){return this.chapter?.annotations.expressed(W)}get window(){return this.chapter?.annotations.expressed(oe)}};r(jo,"$BookshelfCover");let te=jo;const zo=class zo extends g{constructor(){super(...arguments),this.specification=new ta}defines(e){e.classes.add(this,"pa-illustration")}erase(e){e.classes.revert(this)}};r(zo,"$Illustration");let je=zo;const Oo=class Oo extends M{constructor(){super(...arguments),this.specification=new ze,this.$ground="",this.$band="",this.$bandInk="",this.$foot="",this.$footInk="",this.$ink="",this.style=m.div.attrs({className:"pd-scheme"})`
        ${e=>e.$scheme}
    `}get colours(){return[this.$ground,this.$band,this.$bandInk,this.$foot,this.$footInk,this.$ink]}get declarations(){return`--ground: ${this.$ground}; --band: ${this.$band}; --band-ink: ${this.$bandInk}; --foot: ${this.$foot}; --foot-ink: ${this.$footInk}; --ink: ${this.$ink};`}get painted(){return this._painted}$Scheme(...e){this.$Format(...e);const a=this.style;this._painted=n=>t.jsx(a,{$scheme:this.declarations,...n})}defines(e){e.classes.add(this,"pa-scheme"),e.containers.add(this,this._painted)}erase(e){e.classes.revert(this),e.containers.revert(this)}};r(Oo,"$Scheme");let W=Oo;const Po=class Po extends g{constructor(){super(...arguments),this.specification=new Oe,this.$x="",this.$y=""}get declarations(){return`--window-x: ${this.$x}px; --window-y: ${this.$y}px;`}};r(Po,"$Window");let oe=Po;const Do=class Do extends g{constructor(){super(...arguments),this.specification=new Pe}get cover(){return this._cover}get jacket(){return this._cover?.annotations.expressed(C)}$Volume(...e){this._cover=e.find(a=>a instanceof $),this.$Annotation(...e.filter(a=>a!==this._cover))}defines(e){e.classes.add(this,"pa-volume")}erase(e){e.classes.revert(this)}};r(Do,"$Volume");let N=Do;const Ao=class Ao extends f{get cover(){return this.$cover?.annotations.expressed(C)}$Jacket(...e){this.$Writing(...e),this._painted=a=>{const n=this.cover?.scheme?.painted;return n===void 0?t.jsx("div",{...a}):t.jsx(n,{...a})},this.containers.add(this,this._painted)}write(){const e=this.cover;if(e===void 0)return;const a=o(y),n=o(Ha);return t.jsxs(t.Fragment,{children:[t.jsx(a,{children:e.name}),t.jsx("span",{className:"pd-drawing",dangerouslySetInnerHTML:{__html:e.drawing}}),t.jsxs(a,{children:[t.jsx(n,{}),e.author]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-jacket")}};r(Ao,"$Jacket");let ls=Ao;const Co=class Co extends f{constructor(){super(...arguments),this.unfolded=!1}get filedElsewhere(){return this.$subject!==void 0&&this.$subject!==this.$cover}container(e){return super.container({onMouseOver:r(a=>{a.target instanceof Element&&a.target.closest(".pd-filed")!==null&&this.unfold()},"onMouseOver"),onMouseLeave:r(()=>this.fold(),"onMouseLeave"),...e})}unfold(){this.unfolded=!0}fold(){this.unfolded=!1}write(){const e=this.$cover,a=this.$subject;if(e!==void 0)return t.jsxs(t.Fragment,{children:[this.filedElsewhere?ee(a,t.jsx("span",{className:"pd-filed",children:this.mark(a)})):void 0,ee(e,t.jsx("span",{className:"pd-own",children:this.mark(e)})),t.jsxs("span",{className:"pd-names",children:[ee(e,t.jsx("span",{className:"pd-name",children:this.name(e)})),this.filedElsewhere?ee(a,t.jsx("span",{className:"pd-name pd-under",children:this.name(a)})):void 0]})]})}mark(e){const a=o(Bd),n=o(x);return t.jsx(a,{cover:e,children:t.jsx(n,{children:e.mention.identifier})})}name(e){const a=o(y),n=o(x);return t.jsxs(a,{children:[t.jsx(n,{children:e.mention.identifier}),e.title.name]})}$Define(){super.$Define(),this.classes.add(this,"pd-logo");const e=o(Fd);this.annotations.add(this,t.jsx(e,{}))}};r(Co,"$Logo");let aa=Co;const Io=class Io extends g{constructor(){super(...arguments),this.specification=new sa}defines(e){e.unfolded&&e.classes.add(this,"pa-unfolded")}erase(e){e.classes.revert(this)}};r(Io,"$Unfolded");let hs=Io;const No=class No extends b{$saidOfALogo(e){c(e instanceof aa,"unfolded is said of a logo, and this is not one")}};r(No,"UnfoldedSpecification");let sa=No;A([l("unfolded is said of a logo")],sa.prototype,"$saidOfALogo");const To=class To extends v{constructor(){super(...arguments),this.style=m.span`
        ${e=>e.$vars}
    `}get cover(){return this.$cover?.annotations.expressed(C)}$Mark(...e){this.$Writing(...e);const a=this.style;this._painted=n=>t.jsx(a,{$vars:`${this.cover?.scheme?.declarations??""} ${this.cover?.window?.declarations??""}`,...n}),this.containers.add(this,this._painted)}write(){return t.jsx("span",{className:"pd-drawing",dangerouslySetInnerHTML:{__html:this.cover?.drawing??""}})}$Define(){super.$Define(),this.classes.add(this,"pd-mark")}};r(To,"$Mark");let fs=To;const Mo=class Mo extends vi{$carriesItsScheme(e){c(e.is(W),"a bookshelf cover carries its scheme, and this one carries none")}$carriesItsWindow(e){c(e.is(oe),"a bookshelf cover carries its window, and this one carries none")}$carriesItsIllustration(e){c(e instanceof $&&e.text.find(f).some(a=>a.is(je)),"a bookshelf cover carries its illustration, and this one carries none")}};r(Mo,"BookshelfCoverSpecification");let ne=Mo;A([l("a bookshelf cover carries its scheme")],ne.prototype,"$carriesItsScheme");A([l("a bookshelf cover carries its window")],ne.prototype,"$carriesItsWindow");A([l("a bookshelf cover carries its illustration")],ne.prototype,"$carriesItsIllustration");const Bo=class Bo extends b{$saidOfADrawing(e){c(e instanceof f&&e.chapter?.is(C)===!0&&e.text.find(Fa).length===1,"an illustration is a paragraph of a cover that holds one drawing, and this is not one")}};r(Bo,"IllustrationSpecification");let ta=Bo;A([l("an illustration is a paragraph of a cover that holds one drawing")],ta.prototype,"$saidOfADrawing");const Fo=class Fo extends b{$isACover(e){c(e instanceof $&&e.is(C),"a cover has a scheme, and this is not a cover")}$givenItsColours(e){const a=e.annotations.expressed(W)?.colours??[];c(a.every(n=>/^#[0-9a-f]{6}$/iu.test(n)),"a scheme is given its six colours as six hex digits each — the ground, the band and its ink, the foot and its ink, and the ink of the drawing — and this one was given something else")}};r(Fo,"SchemeSpecification");let ze=Fo;A([l("a cover has a scheme")],ze.prototype,"$isACover");A([l("a scheme is given its six colours")],ze.prototype,"$givenItsColours");const Wo=class Wo extends b{$isACover(e){c(e instanceof $&&e.is(C),"a cover has a window, and this is not a cover")}$givenItsPlace(e){const a=e.annotations.expressed(oe);c(/^-?\d+$/u.test(a?.$x??"")&&/^-?\d+$/u.test(a?.$y??""),"a window is given where it stands on the drawing, two whole numbers, and this one was given something else")}};r(Wo,"WindowSpecification");let Oe=Wo;A([l("a cover has a window")],Oe.prototype,"$isACover");A([l("a window is given where it stands on the drawing")],Oe.prototype,"$givenItsPlace");const Ho=class Ho extends b{$saidOfAChapterStandingForABook(e){c(e instanceof $&&(e.is(_)||e.is(C)||e.is(w)),"a volume is a chapter that stands for another book, a synopsis of it, a cover filed under it or a design of it, and this is none")}$holdsTheCover(e){const a=[e.annotations.expressed(_)?.means?.identifier,e.annotations.expressed(Tr)?.means?.identifier,e.annotations.expressed(pt)?.means?.identifier,e.annotations.expressed(w)?.identifier];c(e.annotations.find(N).every(n=>n.cover?.is(C)===!0&&a.includes(n.cover.mention?.identifier)),"a volume holds the cover of a book its chapter stands for, the book a synopsis or a design is of or the subject or author a cover is filed under, and one here holds something else")}};r(Ho,"VolumeSpecification");let Pe=Ho;A([l("a volume is a chapter that stands for another book")],Pe.prototype,"$saidOfAChapterStandingForABook");A([l("a volume holds the cover of a book its chapter stands for")],Pe.prototype,"$holdsTheCover");const Cd=o(te),si=o(je),ti=o(W),oi=o(oe),Id=o(N),Nd=o(ls),Td=o(aa),Md=o(hs),ni=o(fs),Bd=ni,Fd=Md,Ma=class Ma extends yi{constructor(){super(...arguments),this.specification=new O,this.themeProvider=!0,this.style=m.div`
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
    `}get pages(){return this.book.pages}get open(){const e=this.book;return e.open??e.synopsis}$Bound(){const e=this.style,a=this.book;this.style=n=>t.jsx(e,{$at:a.means?.identifier,$scheme:a.cover?.annotations.expressed(W)?.declarations,...n}),super.$Bound()}defines(e){for(const n of e.annotations.after(this))n instanceof Ma&&e.annotations.express(n,!1);super.defines(e),e.classes.add(this,"pa-layout");const a=this.book.open;a!==void 0&&e.classes.add(this,"pa-turned"),a?.is(P)&&e.classes.add(this,"pa-manual")}erase(e){super.erase(e),e.classes.revert(this)}parts(){return[this.paging(),this.regions(),this.areas(),this.phone()]}paging(){return h`
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
        `}};r(Ma,"$Layout");let oa=Ma;const $t=o(oa),Ba=class Ba extends g{constructor(){super(...arguments),this.specification=new O}defines(e){for(const a of e.annotations.after(this))a instanceof Ba&&e.annotations.express(a,!1);e.classes.add(this,"pa-tone")}erase(e){e.classes.revert(this)}};r(Ba,"$Tone");let re=Ba;const Lo=class Lo extends re{defines(e){super.defines(e),e.classes.add(this,"pa-dark")}};r(Lo,"$Dark");let gs=Lo;const Ro=class Ro extends re{defines(e){super.defines(e),e.classes.add(this,"pa-light")}};r(Ro,"$Light");let bs=Ro;const _o=class _o extends re{defines(e){super.defines(e),e.classes.add(this,"pa-white-over-black")}};r(_o,"$WhiteOverBlack");let us=_o;const V=o(re),ri=o(gs),ge=o(bs),Wd=o(us);var Hd=Object.defineProperty,Ld=Object.getOwnPropertyDescriptor,Rd=r((d,e,a,n)=>{for(var s=Ld(e,a),i=d.length-1,p;i>=0;i--)(p=d[i])&&(s=p(e,a,s)||s);return s&&Hd(e,a,s),s},"__decorateClass$d");const Eo=class Eo extends v{write(){const e=this.book.body;return`${e.indexOf(this.chapter)+1} of ${e.length}`}$Define(){super.$Define(),this.classes.add(this,"pd-count")}};r(Eo,"$Count");let ms=Eo;const Go=class Go extends g{constructor(){super(...arguments),this.specification=new De}defines(e){e.classes.add(this,"pa-before")}erase(e){e.classes.revert(this)}};r(Go,"$Before");let $s=Go;const qo=class qo extends g{constructor(){super(...arguments),this.specification=new De}defines(e){e.classes.add(this,"pa-after")}erase(e){e.classes.revert(this)}};r(qo,"$After");let ks=qo;const Yo=class Yo extends b{$saidOfAWordOfATurn(e){c(e instanceof v&&e.parent instanceof na,"this is said of a word of a turn, and here it is said of something else")}};r(Yo,"OfATurnSpecification");let De=Yo;Rd([l("this is said of a word of a turn")],De.prototype,"$saidOfAWordOfATurn");const _d=o(ms),Ed=o($s),Gd=o(ks),Zo=class Zo extends f{get before(){const e=this.book.body;return e[e.indexOf(this.chapter)-1]??this.chapter}get after(){const e=this.book.body;return e[e.indexOf(this.chapter)+1]??this.chapter}write(){const e=o(y),a=o(_d),n=o(Ed),s=o(Gd),i=o(this.before===this.chapter?_a:x),p=o(this.after===this.chapter?_a:x);return t.jsxs(t.Fragment,{children:[t.jsxs(e,{children:[t.jsx(n,{}),t.jsx(i,{children:this.before.mention.identifier}),"← ",this.before.title.name]}),t.jsx(a,{}),t.jsxs(e,{children:[t.jsx(s,{}),t.jsx(p,{children:this.after.mention.identifier}),this.after.title.name," →"]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-turn")}};r(Zo,"$Turn");let na=Zo;const qd=o(na);var Yd=Object.defineProperty,Zd=Object.getOwnPropertyDescriptor,He=r((d,e,a,n)=>{for(var s=n>1?void 0:n?Zd(e,a):e,i=d.length-1,p;i>=0;i--)(p=d[i])&&(s=(n?p(e,a,s):p(s))||s);return n&&s&&Yd(e,a,s),s},"__decorateClass$c");const Uo=class Uo extends wi{constructor(){super(...arguments),this.specification=new D}get chapters(){return this.text.find($).filter(e=>[...e.classes].includes("pd-canonical"))}get laidOutChapters(){return[this.cover,this.synopsis,this.table,...this.chapters]}get pages(){return[this.synopsis,...this.chapters].filter(e=>e!==void 0)}get body(){const e=this.appendix;return this.chapters.filter(a=>!e.includes(a))}get appendix(){const e=this.table;if(e===void 0)return[];const a=e.text.find(z).filter(n=>n.is(ye)).flatMap(n=>n.text.find(f).map(s=>I(s)?.identifier));return this.chapters.filter(n=>a.includes(n.mention?.identifier??""))}get open(){return this.$bookmark===void 0?void 0:this.chapterAt(this.$bookmark)}get tones(){return[ri,ge,Wd]}get topics(){return this.cover?.annotations.find(Mr)??[]}write(){return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"pd-library",children:this.library()}),t.jsx("div",{className:"pd-me",children:this.me()}),t.jsx("div",{className:"pd-holds",children:this.holds()}),t.jsx("div",{className:"pd-head",children:this.head()}),t.jsxs("div",{className:"pd-pages",children:[this.aboveThePages(),this.pages.map((e,a)=>{const n=o(e);return t.jsx(n,{},a)}),this.belowThePages()]})]})}library(){if(this._logo===void 0)return;const e=o(this._logo);return t.jsx(e,{})}me(){const e=o(ni),a=o(x),n=o(Li),s=this.coverOf(this.author?.means?.identifier);return t.jsxs(t.Fragment,{children:[this.byline(),s===void 0?void 0:this.painted(s,t.jsx(e,{cover:s,children:t.jsx(a,{children:s.mention.identifier})})),this.topics.length===0?void 0:t.jsx(n,{cover:this.cover})]})}painted(e,a,n){return ee(e,a,n)}holds(){const e=o(this.table);return t.jsx(e,{})}head(){const e=o(this.cover);return t.jsxs(t.Fragment,{children:[t.jsx(e,{}),t.jsx("div",{className:"pd-switches",children:this.switches()})]})}aboveThePages(){}belowThePages(){}chapterAt(e){return(this._chapterByPlace??this.chapterByPlace()).get(e)}chapterByPlace(){const e=new Map;for(const a of this.chapters)for(const n of this.sections(a))n.mention!==void 0&&!e.has(n.mention.identifier)&&e.set(n.mention.identifier,a);for(const a of this.chapters)a.mention!==void 0&&e.set(a.mention.identifier,a);return e}coverOf(e){if(e!==void 0)return this.means?.identifier===e?this.cover:this.cover?.annotations.find(N).map(a=>a.cover).find(a=>a?.mention?.identifier===e)}byline(){const e=o(Yr);return t.jsx(e,{chapter:this.cover})}root(){const e=o(vd);return t.jsx(e,{cover:this.cover})}switches(){}sections(e){return e.text.find(z).flatMap(a=>[a,...this.sections(a)])}sectionOf(e){const a=this.table;return a===void 0?void 0:this.sections(a).find(n=>n.canonical?.name===e.name)}turn(){this.bookmark!==this.cover&&super.turn()}$Define(){super.$Define();const e=o($t),a=o(V);this.annotations.add(this,t.jsx(e,{}),t.jsx(a,{}))}$Bound(){this._chapterByPlace=this.chapterByPlace();const e=o(Sr),a=this.table?.annotations.expressed(G);for(const i of a?.parts??[]){const p=this.sectionOf(i);p===void 0||p.is(Ke)||!i.chapters.some(u=>u.is(P))||p.annotations.add(this,t.jsx(e,{}))}const n=this.root();n!==void 0&&this.table?.text.add(this,n);const s=o(Td);this._logo=ji.chemical(t.jsx(s,{cover:this.cover,subject:this.coverOf(this.subject?.means?.identifier)}),this),this.turns(),super.$Bound()}turns(){const e=o(qd);for(const a of this.body)a.text.add(this,t.jsx(e,{}))}};r(Uo,"$LibraryBook");let T=Uo;He([Br()],T.prototype,"_chapterByPlace",2);const Xo=class Xo extends zi{$holdsOnlyChapters(e){c([...e.text].every(a=>a instanceof $),"a book of this library holds only chapters, and this one holds something else")}$placesEveryChapter(e){c(e.text.find($).every(a=>e.laidOutChapters.includes(a)),"a book of this library has a place for every chapter it holds, and this one holds a chapter it places nowhere")}$onlyAChapterAppends(e){c(e.text.find($).every(a=>e.chapters.includes(a)||!a.is(ct)),"only an ordinary chapter files a file, and here a cover, a synopsis or a table of contents files one")}$listsEachManualPart(e){const n=(e.table?.annotations.expressed(G)?.parts??[]).find(s=>s.chapters.some(i=>i.is(P))&&e.sectionOf(s)===void 0);c(n===void 0,`a part read as a manual is listed under a section headed with its name, and "${n?.name}" has none`)}};r(Xo,"LibraryBookSpecification");let D=Xo;He([l("a book of this library holds only chapters")],D.prototype,"$holdsOnlyChapters",1);He([l("a book of this library has a place for every chapter it holds")],D.prototype,"$placesEveryChapter",1);He([l("only an ordinary chapter files a file")],D.prototype,"$onlyAChapterAppends",1);He([l("a part read as a manual is listed under a section headed with its name")],D.prototype,"$listsEachManualPart",1);const ii=o(T);o(ii,he)(Mi);o(ii,V)(ri);var Ud=Object.defineProperty,Xd=Object.getOwnPropertyDescriptor,Kd=r((d,e,a,n)=>{for(var s=Xd(e,a),i=d.length-1,p;i>=0;i--)(p=d[i])&&(s=p(e,a,s)||s);return s&&Ud(e,a,s),s},"__decorateClass$b");const Ko=class Ko extends T{constructor(){super(...arguments),this.specification=new ia}get open(){return super.open??this.body[0]}head(){}switches(){}root(){}$Define(){super.$Define(),this.$is=[mt,Kr]}$Bound(){const e=o(Sr);for(const a of this.table?.text.find(z)??[])a.annotations.add(this,t.jsx(e,{})),a.is(ye)&&(a.$is=[Vr]);super.$Bound()}};r(Ko,"$Manual");let ra=Ko;const Jo=class Jo extends D{$everyChapterHasABrief(e){c(e.chapters.every(a=>a.text.find(f).some(n=>n.is(Ge))),"every chapter of a manual opens with a brief, and one here has none")}};r(Jo,"ManualSpecification");let ia=Jo;Kd([l("every chapter of a manual opens with a brief")],ia.prototype,"$everyChapterHasABrief");const kt=o(ra);o(kt,V)(ge);var Jd=Object.defineProperty,Qd=Object.getOwnPropertyDescriptor,xt=r((d,e,a,n)=>{for(var s=Qd(e,a),i=d.length-1,p;i>=0;i--)(p=d[i])&&(s=p(e,a,s)||s);return s&&Jd(e,a,s),s},"__decorateClass$a");const Qo=class Qo extends g{constructor(){super(...arguments),this.specification=new ie}get date(){return this.text.find(ht)[0]}defines(e){e.classes.add(this,"pa-dated")}erase(e){e.classes.revert(this)}note(){const e=o(this.date);return t.jsx(e,{})}};r(Qo,"$Dated");let E=Qo;const Vo=class Vo extends b{$saidOfAChapter(e){c(e instanceof $,"dated is said of a chapter, and this is not one")}$datedOnce(e){c(e.annotations.containsOne(E),"a chapter is dated once, and this one is dated more than once")}$givenOneDate(e){c(e.annotations.expressed(E)?.text.find(ht).length===1,"a dated chapter is given one date, and this one is given none or more than one")}};r(Vo,"DatedSpecification");let ie=Vo;xt([l("dated is said of a chapter")],ie.prototype,"$saidOfAChapter");xt([l("a chapter is dated once")],ie.prototype,"$datedOnce");xt([l("a dated chapter is given one date")],ie.prototype,"$givenOneDate");const cc=o(E),So=class So extends Z{constructor(){super(...arguments),this.label=m.span.attrs({className:"pa-number"})``}get number(){return this.book.body.indexOf(this.referencedChapter)+1}get keyed(){return this.referencedChapter?.annotations.expressed(R)}note(){const e=this.label,a=o(Ur),n=this.keyed;return t.jsxs(t.Fragment,{children:[super.note(),n===void 0?void 0:t.jsx(a,{keyed:n}),this.number===0?void 0:t.jsx(e,{children:String(this.number)})]})}};r(So,"$NumberedEntry");let xs=So;const Vd=o(xs);o(kt,Qr)(Vd);const en=class en extends te{constructor(){super(...arguments),this.style=m.header`
        .pd-chapter.pa-cover { margin-block: 0; }
        .pa-cover .pd-title {
            font-size: calc(1.04 * ${({theme:e})=>e.size});
            font-weight: 600;
        }
    `}};r(en,"$ManualCover");let vs=en;const an=class an extends G{constructor(){super(...arguments),this.style=m.nav`
        .pa-table-of-contents .pa-reference { color: inherit; text-decoration: none; }
    `}};r(an,"$ManualTableOfContents");let ys=an;const lc=o(vs),hc=o(ys),sn=class sn extends q{constructor(){super(...arguments),this.measure="104ch",this.holdsColumn="272px",this.barHeight="52px",this.space="24px",this.size="14px",this.beat="0.22s",this.serif="'Source Serif 4', Georgia, serif",this.paper="#fdfcfa",this.ink="#343c4a",this.heading="#1a1f36",this.soft="#727d8c",this.faint="#9ea8b5",this.line="#e4e9f2",this.tint="#f0f4fc",this.barTint="#f8fafe",this.side="#f7f8fb",this.sideInk="#3a4452",this.sideDim="#6b7684",this.sideLine="#e0e4eb",this.sky="#e3edfb",this.skyInk="#4a6ea0",this.accent="#4a6ea0",this.colour="#4fb3a8",this.radius="6px",this.wash="linear-gradient(135deg, #f1f5fd 0%, #fdfcfa 48%, #fdf5ee 100%)"}parts(){return[...super.parts(),this.tree(),this.icons(),this.small()]}library(){return h`
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
        `}};r(sn,"$ManualTheme");let ws=sn;const Sd=o(ws);o(kt,he)(Sd);var ep=Object.defineProperty,ap=Object.getOwnPropertyDescriptor,sp=r((d,e,a,n)=>{for(var s=ap(e,a),i=d.length-1,p;i>=0;i--)(p=d[i])&&(s=p(e,a,s)||s);return s&&ep(e,a,s),s},"__decorateClass$9");const tn=class tn extends g{constructor(){super(...arguments),this.specification=new da}defines(e){e.classes.add(this,"pa-first")}erase(e){e.classes.revert(this)}};r(tn,"$First");let js=tn;const on=class on extends b{$saidOfAParagraph(e){c(e instanceof f,"first is said of a paragraph, and this is not one")}};r(on,"FirstSpecification");let da=on;sp([l("first is said of a paragraph")],da.prototype,"$saidOfAParagraph");const fc=o(js),nn=class nn extends q{constructor(){super(...arguments),this.serif="'Source Serif 4', Georgia, serif",this.paper="#fdfcfa",this.ink="#343c4a",this.soft="#727d8c",this.faint="#9ea8b5",this.line="#e4e9f2",this.tint="#f0f4fc",this.barTint="#f8fafe",this.sky="#e3edfb",this.skyInk="#4a6ea0",this.accent="#4a6ea0",this.wash="linear-gradient(135deg, #f2f6fd 0%, #fdfcfa 48%, #fdf6f1 100%)",this.side="#f7f8fb",this.sideInk="#3a4452",this.sideDim="#7f8a9b",this.sideLine="#e3e7ee",this.barHeight="52px",this.holdsColumn="232px",this.space="24px",this.cover="132px",this.volume="184px",this.radius="6px",this.spine="inset 3px 0 0 rgba(0, 0, 0, 0.08), inset 4px 0 0 rgba(255, 255, 255, 0.35), 0 6px 12px -10px rgba(44, 52, 64, 0.3)",this.lift="inset 3px 0 0 rgba(0, 0, 0, 0.08), inset 4px 0 0 rgba(255, 255, 255, 0.35), 0 10px 16px -12px rgba(44, 52, 64, 0.35)",this.openSpine="inset 7px 0 0 rgba(0, 0, 0, 0.07), inset 9px 0 0 rgba(255, 255, 255, 0.45), 0 12px 22px -16px rgba(44, 52, 64, 0.35)"}parts(){return[...super.parts(),this.shelf(),this.jackets(),this.desk(),this.unfolded(),this.small()]}page(){return h`
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
        `}};r(nn,"$Bookshelf");let zs=nn;const tp=o(zs);var op=Object.defineProperty,np=Object.getOwnPropertyDescriptor,Ra=r((d,e,a,n)=>{for(var s=n>1?void 0:n?np(e,a):e,i=d.length-1,p;i>=0;i--)(p=d[i])&&(s=(n?p(e,a,s):p(s))||s);return n&&s&&op(e,a,s),s},"__decorateClass$8");const rn=class rn extends T{get books(){return this.text.find($).filter(e=>e.is(_)&&e!==this.synopsis)}get laidOutChapters(){return[...super.laidOutChapters,...this.books]}get pages(){return[this.synopsis,...this.books,...this.chapters]}head(){return t.jsx("div",{className:"pd-switches",children:this.switches()})}belowThePages(){return t.jsx("div",{className:"pd-shelf",children:this.volumes()})}volumes(){const e=o(y),a=o(x);return(this.table?.annotations.expressed(U)?.entries??[]).map((s,i)=>{const p=I(s).identifier,u=this.chapterAt(p),k=u===void 0?this.coverOf(p):this.jacketOf(u);if(k!==void 0)return t.jsxs("div",{className:"pd-volume",children:[this.jacket(k,p),t.jsx("div",{className:"pd-paragraph pd-name",children:t.jsxs(e,{children:[t.jsx(a,{children:p}),k.title.name]})})]},i)})}jacket(e,a){if(e===void 0)return;const n=o(Nd),s=o(x);return a===void 0?t.jsx(n,{cover:e}):t.jsx(n,{cover:e,children:t.jsx(s,{children:a})})}line(e){if(e===void 0)return;const a=o(Yr),n=o(Hi);return t.jsxs(t.Fragment,{children:[t.jsx(a,{cover:e}),t.jsx(n,{cover:e})]})}wayIntoTheBook(e){if(e===void 0)return;const a=o(y),n=o(x),s=e.mention.identifier;return t.jsx("div",{className:"pd-paragraph pd-read",children:t.jsxs(a,{children:[t.jsx(n,{children:s}),`Read ${e.title.name}`]})})}jacketOf(e){return e===this.synopsis?this.cover:e.annotations.expressed(N)?.cover??(this.appendix.includes(e)?void 0:this.cover)}coverOf(e){return super.coverOf(e)??this.books.map(a=>a.annotations.expressed(N)?.cover).find(a=>a!==void 0&&a.mention?.identifier===e)}chapterAt(e){return super.chapterAt(e)??this.books.find(a=>this.placeOf(a)===e)}placeOf(e){const a=e.title?.annotations.expressed(Wa)?.identifier,n=this.means?.identifier;if(!(a===void 0||n===void 0))return`${n.replace(/\/+$/u,"")}/#${a}`}$Bound(){const e=o(pp);for(const a of[this.synopsis,...this.books])a?.annotations.add(this,t.jsx(e,{}));super.$Bound()}};r(rn,"$Catalogue");let Os=rn;const dn=class dn extends M{constructor(){super(...arguments),this.specification=new pa,this.card=m.div`
        &:not(.pa-open) { display: none; }
    `}get chapter(){return this.parent}get catalogue(){return this.book}get isTheFront(){return this.chapter===this.catalogue.synopsis}get cover(){return this.catalogue.jacketOf(this.chapter)}$CatalogueDesk(...e){this.$Format(...e);const a=o(ft),n=this.card;this.style=({className:s,children:i})=>{const p=this.catalogue,u=this.cover,k=[...this.chapter.classes].includes("pa-open"),F=this.isTheFront?o(p.title):void 0;return p.painted(u,t.jsxs(n,{className:`${s??""} pd-catalogue-desk${k?" pa-open":""}`.trim(),children:[p.jacket(u),t.jsxs("div",{className:"pd-words",children:[F===void 0?void 0:t.jsx(F,{}),i]}),u===void 0||this.isTheFront?void 0:t.jsx("div",{className:"pd-line",children:p.line(u)}),p.wayIntoTheBook(u),u===void 0?void 0:t.jsx(a,{chapter:this.chapter,annotation:dp,children:"read on"})]}))}}defines(e){super.defines(e),e.classes.add(this,"pa-catalogue-desk")}erase(e){super.erase(e),e.classes.revert(this)}};r(dn,"$CatalogueDesk");let Ps=dn;const pn=class pn extends b{$holdsASynopsis(e){c(e instanceof $&&e.is(_),"a catalogue desk holds a synopsis, and this is not one")}};r(pn,"CatalogueDeskSpecification");let pa=pn;Ra([l("a catalogue desk holds a synopsis")],pa.prototype,"$holdsASynopsis",1);const cn=class cn extends Fr{get identifier(){return this._book??super.identifier}$Bound(){super.$Bound(),this._book=this.chapter?.annotations.expressed(_)?.means?.identifier}};r(cn,"$BookLink");let ca=cn;Ra([Br()],ca.prototype,"_book",2);const ln=class ln extends g{constructor(){super(...arguments),this.specification=new la}defines(e){e.classes.add(this,"pa-caption")}erase(e){e.classes.revert(this)}};r(ln,"$Caption");let Ds=ln;const hn=class hn extends g{constructor(){super(...arguments),this.specification=new ha}defines(e){e.classes.add(this,"pa-arrow")}erase(e){e.classes.revert(this)}};r(hn,"$Arrow");let As=hn;const fn=class fn extends g{constructor(){super(...arguments),this.specification=new O}defines(e){e.classes.add(this,"pa-unfolded-desk")}erase(e){e.classes.revert(this)}};r(fn,"$UnfoldedDesk");let Cs=fn;const gn=class gn extends b{$isAParagraph(e){c(e instanceof f,"a caption is a paragraph, and this is not one")}};r(gn,"CaptionSpecification");let la=gn;Ra([l("a caption is a paragraph")],la.prototype,"$isAParagraph",1);const bn=class bn extends b{$isAWordOfTheTable(e){c(e instanceof v&&e.chapter?.is(G)===!0,"an arrow is a word of the table of contents, and this is not one")}};r(bn,"ArrowSpecification");let ha=bn;Ra([l("an arrow is a word of the table of contents")],ha.prototype,"$isAWordOfTheTable",1);const vt=o(Os),rp=o(Ps),ip=o(ca),gc=o(Ds),bc=o(As),dp=o(Cs),pp=rp;o(vt,_a)(ip);o(vt,he)(tp);o(vt,V)(ge);var cp=Object.defineProperty,lp=Object.getOwnPropertyDescriptor,Le=r((d,e,a,n)=>{for(var s=lp(e,a),i=d.length-1,p;i>=0;i--)(p=d[i])&&(s=p(e,a,s)||s);return s&&cp(e,a,s),s},"__decorateClass$7");const un=class un extends g{constructor(){super(...arguments),this.specification=new ga}defines(e){e.classes.add(this,"pa-question")}erase(e){e.classes.revert(this)}};r(un,"$Question");let Is=un;const mn=class mn extends g{constructor(){super(...arguments),this.specification=new ba}defines(e){e.classes.add(this,"pa-answer")}erase(e){e.classes.revert(this)}};r(mn,"$Answer");let Ns=mn;const $n=class $n extends g{constructor(){super(...arguments),this.specification=new ua}defines(e){e.classes.add(this,"pa-decision")}erase(e){e.classes.revert(this)}};r($n,"$Decision");let fa=$n;const kn=class kn extends g{constructor(){super(...arguments),this.specification=new ma}defines(e){e.classes.add(this,"pa-pain")}erase(e){e.classes.revert(this)}};r(kn,"$Pain");let Ts=kn;const xn=class xn extends g{constructor(){super(...arguments),this.specification=new $a}defines(e){e.classes.add(this,"pa-solution")}erase(e){e.classes.revert(this)}};r(xn,"$Solution");let Ms=xn;const vn=class vn extends b{$isAParagraph(e){c(e instanceof f,"a question is a paragraph, and this is not one")}};r(vn,"QuestionSpecification");let ga=vn;Le([l("a question is a paragraph")],ga.prototype,"$isAParagraph");const yn=class yn extends b{$isAParagraph(e){c(e instanceof f,"an answer is a paragraph, and this is not one")}};r(yn,"AnswerSpecification");let ba=yn;Le([l("an answer is a paragraph")],ba.prototype,"$isAParagraph");const wn=class wn extends b{$isAParagraph(e){c(e instanceof f,"a decision is a paragraph, and this is not one")}};r(wn,"DecisionSpecification");let ua=wn;Le([l("a decision is a paragraph")],ua.prototype,"$isAParagraph");const jn=class jn extends b{$isAParagraph(e){c(e instanceof f,"a pain is a paragraph, and this is not one")}};r(jn,"PainSpecification");let ma=jn;Le([l("a pain is a paragraph")],ma.prototype,"$isAParagraph");const zn=class zn extends b{$isAParagraph(e){c(e instanceof f,"a solution is a paragraph, and this is not one")}};r(zn,"SolutionSpecification");let $a=zn;Le([l("a solution is a paragraph")],$a.prototype,"$isAParagraph");const uc=o(Is),mc=o(Ns),$c=o(fa),kc=o(Ts),xc=o(Ms);var hp=Object.defineProperty,fp=Object.getOwnPropertyDescriptor,S=r((d,e,a,n)=>{for(var s=fp(e,a),i=d.length-1,p;i>=0;i--)(p=d[i])&&(s=p(e,a,s)||s);return s&&hp(e,a,s),s},"__decorateClass$6");const On=class On extends g{constructor(){super(...arguments),this.specification=new de,this.span=m.span.attrs({className:"pd-number"})``,this.close=m.span.attrs({className:"pd-close"})``}get number(){const e=j.copy(this.text).trim();return e===""?NaN:Number(e)}note(){const e=this.span,a=this.close,n=o(y),s=o(x),i=this.chapter?.mention?.identifier;return t.jsxs(t.Fragment,{children:[t.jsx(e,{children:this.number}),i===void 0?void 0:t.jsx(a,{children:t.jsxs(n,{children:[t.jsx(s,{children:i}),"×"]})})]})}defines(e){e.classes.add(this,"pa-concept")}erase(e){e.classes.revert(this)}};r(On,"$Concept");let H=On;const Pn=class Pn extends g{constructor(){super(...arguments),this.specification=new Ce}defines(e){e.classes.add(this,"pa-designed")}erase(e){e.classes.revert(this)}};r(Pn,"$Designed");let Bs=Pn;const Dn=class Dn extends g{constructor(){super(...arguments),this.specification=new Ce}defines(e){e.classes.add(this,"pa-decided")}erase(e){e.classes.revert(this)}};r(Dn,"$Decided");let Fs=Dn;const An=class An extends g{constructor(){super(...arguments),this.specification=new pe}defines(e){e.classes.add(this,"pa-desk")}erase(e){e.classes.revert(this)}};r(An,"$Desk");let ka=An;const Cn=class Cn extends g{constructor(){super(...arguments),this.specification=new pe}defines(e){e.classes.add(this,"pa-phone")}erase(e){e.classes.revert(this)}};r(Cn,"$Phone");let xa=Cn;const In=class In extends g{constructor(){super(...arguments),this.specification=new pe}defines(e){e.classes.add(this,"pa-thumbnail")}erase(e){e.classes.revert(this)}};r(In,"$Thumbnail");let Ae=In;const Nn=class Nn extends g{constructor(){super(...arguments),this.specification=new ce}defines(e){e.classes.add(this,"pa-precedent")}erase(e){e.classes.revert(this)}};r(Nn,"$Precedent");let Ws=Nn;const Tn=class Tn extends g{constructor(){super(...arguments),this.specification=new ce}defines(e){e.classes.add(this,"pa-source")}erase(e){e.classes.revert(this)}};r(Tn,"$Source");let Hs=Tn;const Mn=class Mn extends g{constructor(){super(...arguments),this.specification=new va}defines(e){e.classes.add(this,"pa-where")}erase(e){e.classes.revert(this)}};r(Mn,"$Where");let Ls=Mn;const Bn=class Bn extends b{$isASection(e){c(e instanceof z,"a concept is a section, and this is not one")}$givenItsNumber(e){c(Number.isInteger(e.annotations.expressed(H)?.number),"a concept is given its number, and this one was given something else")}$photographedThreeWays(e){const a=e.text.find(f);c([ka,xa,Ae].every(n=>a.some(s=>s.is(n))),"a concept is photographed at a desk, at a phone, and small, and this one is missing a photograph")}};r(Bn,"ConceptSpecification");let de=Bn;S([l("a concept is a section")],de.prototype,"$isASection");S([l("a concept is given its number")],de.prototype,"$givenItsNumber");S([l("a concept is photographed at a desk, at a phone, and small")],de.prototype,"$photographedThreeWays");const Fn=class Fn extends b{$isAParagraphHoldingOneImage(e){c(e instanceof f&&e.text.find(lt).length===1,"a photograph is a paragraph that holds one image, and this is not one")}};r(Fn,"PhotographSpecification");let pe=Fn;S([l("a photograph is a paragraph that holds one image")],pe.prototype,"$isAParagraphHoldingOneImage");const Wn=class Wn extends b{$saidOfAParagraphOfAConcept(e){c(e instanceof f&&e.parent instanceof Oi&&e.parent.is(H),"this is said of a paragraph of a concept, and here it is said of something else")}};r(Wn,"OfAConceptSpecification");let ce=Wn;S([l("this is said of a paragraph of a concept")],ce.prototype,"$saidOfAParagraphOfAConcept");const Hn=class Hn extends ce{$refersToWhereItIsBuilt(e){c(e.text.find(v).some(a=>a.is(me)),"a where refers to where the concept is built, and this one refers nowhere")}};r(Hn,"WhereSpecification");let va=Hn;S([l("a where refers to where the concept is built")],va.prototype,"$refersToWhereItIsBuilt");const Ln=class Ln extends b{$saidOfAConcept(e){c(e.is(H),"this is said of a concept, and here it is said of something else")}};r(Ln,"OfAConceptSectionSpecification");let Ce=Ln;S([l("this is said of a concept")],Ce.prototype,"$saidOfAConcept");const vc=o(H),yc=o(Bs),wc=o(Fs),jc=o(ka),zc=o(xa),Oc=o(Ae),Pc=o(Ws),Dc=o(Hs),Ac=o(Ls);var gp=Object.defineProperty,bp=Object.getOwnPropertyDescriptor,di=r((d,e,a,n)=>{for(var s=bp(e,a),i=d.length-1,p;i>=0;i--)(p=d[i])&&(s=p(e,a,s)||s);return s&&gp(e,a,s),s},"__decorateClass$5");const up=r((d,e)=>d.chapters.flatMap(a=>d.sections(a)).find(a=>a.is(H)&&a.mention?.identifier===e),"conceptAt"),mp=r(d=>{const e=d.text.find(f).find(a=>a.is(Ae))?.text.find(lt)[0];return e===void 0?"":e.contents||j.copy(e.text)},"thumbnailOf"),Rn=class Rn extends M{constructor(){super(...arguments),this.specification=new ya,this.themeProvider=!0,this.style=m.div`
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
    `}get chapter(){return this.parent}get concepts(){return this.book.sections(this.chapter).filter(e=>e.is(H))}get open(){return this.concepts.find(e=>e.mention?.identifier===this.book?.$bookmark)}defines(e){super.defines(e),e.classes.add(this,"pa-gallery");const a=this.open,n=this.concepts.find(s=>[...s.classes].includes("pa-open"));n!==a&&(n?.classes.revert(this),a?.classes.add(this,"pa-open"))}erase(e){super.erase(e),e.classes.revert(this)}};r(Rn,"$Gallery");let Rs=Rn;const _n=class _n extends M{constructor(){super(...arguments),this.specification=new wa,this.strip=m.div`
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
    `}get paragraph(){return this.parent}get places(){return this.paragraph.text.find(v).map(e=>e.annotations.expressed(me)?.identifier).filter(e=>e!==void 0)}get concepts(){const e=this.book;return[...new Set(this.places.map(a=>up(e,a)).filter(a=>a!==void 0))]}get chosen(){const e=this.paragraph.parent?.text.find(f).filter(a=>a.is(fa))??[];return new Set(e.flatMap(a=>a.text.find(v).map(n=>n.annotations.expressed(me)?.identifier)).filter(a=>a!==void 0))}$Strip(...e){this.$Format(...e);const a=this.strip,n=o(y),s=o(x);this.style=({className:i,children:p})=>{const u=this.chosen;return t.jsxs(a,{className:`${i??""} pd-strip`.trim(),children:[this.concepts.map((k,F)=>{const be=k.mention.identifier;return t.jsxs(n,{children:[t.jsx(s,{children:be}),t.jsxs("span",{className:`pd-thumb${u.has(be)?" pd-chosen":""}`,children:[t.jsx("img",{src:mp(k),alt:""}),t.jsxs("span",{className:"pd-name",children:[t.jsx("span",{className:"pd-number",children:k.annotations.expressed(H)?.number}),k.canonical?.name]})]})]},F)}),t.jsx("span",{className:"pd-said",children:p})]})}}defines(e){super.defines(e),e.classes.add(this,"pa-strip")}erase(e){super.erase(e),e.classes.revert(this)}};r(_n,"$Strip");let _s=_n;const En=class En extends b{$isAChapter(e){c(e instanceof $,"a gallery is a chapter, and this is not one")}};r(En,"GallerySpecification");let ya=En;di([l("a gallery is a chapter")],ya.prototype,"$isAChapter");const Gn=class Gn extends b{$isAParagraphReferringToConcepts(e){c(e instanceof f&&e.text.find(v).some(a=>a.annotations.expressed(me)!==void 0),"a strip is a paragraph that refers to concepts, and this one refers to nothing")}};r(Gn,"StripSpecification");let wa=Gn;di([l("a strip is a paragraph that refers to concepts")],wa.prototype,"$isAParagraphReferringToConcepts");const Cc=o(Rs),Ic=o(_s),qn=class qn extends q{constructor(){super(...arguments),this.accent="#23407a",this.ink="#343c4a",this.heading="#1a1f36",this.soft="#727d8c",this.faint="#9ea8b5",this.line="#e4e9f2",this.paper="#fdfcfa",this.side="#f8f9fb",this.holdsColumn="256px",this.barHeight="52px",this.card="12.5rem",this.shadow="0 1px 2px rgba(43, 54, 60, 0.05), 0 6px 18px rgba(43, 54, 60, 0.05)",this.lift="0 2px 4px rgba(43, 54, 60, 0.06), 0 14px 32px rgba(43, 54, 60, 0.10)",this.barLight="#fcfcfd",this.barMid="#f8f9fc",this.barDeep="#f2f4f9",this.barShadow="0 1px 0 rgba(43, 54, 60, 0.05)",this.sideLight="#fafbfc",this.sideDeep="#f2f4f8",this.codeGround="#f6f7fa",this.hairline="1px",this.stroke="2px",this.rise="-1px",this.gloss="inset 0 1px 0 rgba(255, 255, 255, 0.7)",this.ring="0 0 0 2px color-mix(in oklab, var(--band) 80%, white)",this.decisionShadow="0 1px 2px rgba(43, 54, 60, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.6)"}parts(){return[...super.parts(),this.backdrop(),this.bands(),this.guide(),this.story(),this.said(),this.small()]}backdrop(){return h`
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
        `}};r(qn,"$Exhibition");let Es=qn;const $p=o(Es);var kp=Object.defineProperty,xp=Object.getOwnPropertyDescriptor,pi=r((d,e,a,n)=>{for(var s=xp(e,a),i=d.length-1,p;i>=0;i--)(p=d[i])&&(s=p(e,a,s)||s);return s&&kp(e,a,s),s},"__decorateClass$4");const Yn=class Yn extends T{constructor(){super(...arguments),this.specification=new Ie}get designs(){return this.chapters.filter(e=>e.is(w))}get open(){return super.open??this.body[0]}head(){}switches(){}$Bound(){const e=o(Od),a=o(zd),n=o(Pd),s=this.designs;for(const i of s)i.annotations.add(this,t.jsx(e,{})),i.text.add(this,t.jsx(n,{}));for(const i of this.table?.annotations.expressed(U)?.entries??[]){const p=I(i)?.identifier,u=p===void 0?void 0:this.chapterAt(p);u===void 0||!s.includes(u)||i.annotations.add(this,t.jsx(a,{number:s.indexOf(u)+1}))}super.$Bound()}};r(Yn,"$Portfolio");let Gs=Yn;const Zn=class Zn extends D{$everyChapterInAPart(e){c(e.chapters.every(a=>a.part!==void 0),"every chapter of a portfolio is in a part, and one here is in none")}$showsEveryDesign(e){c(e.designs.every(a=>La(a,f).some(n=>n.is(we))),"a portfolio shows every design it holds as built, in a paragraph said to be the exhibit, and one here has none")}};r(Zn,"PortfolioSpecification");let Ie=Zn;pi([l("every chapter of a portfolio is in a part")],Ie.prototype,"$everyChapterInAPart");pi([l("a portfolio shows every design it holds as built")],Ie.prototype,"$showsEveryDesign");const ci=o(Gs);o(ci,he)($p);o(ci,V)(ge);const Un=class Un extends te{};r(Un,"$PortfolioCover");let qs=Un;const Nc=o(qs),Xn=class Xn extends q{constructor(){super(...arguments),this.prose="'Source Serif 4', Georgia, serif",this.ink="#343c4a",this.heading="#1a1f36",this.soft="#727d8c",this.faint="#9ea8b5",this.line="#e4e9f2",this.paper="#ffffff",this.side="#f8f9fb",this.holdsColumn="240px",this.barHeight="52px",this.shadow="0 1px 2px rgba(43, 54, 60, 0.05), 0 6px 18px rgba(43, 54, 60, 0.05)",this.lift="0 2px 4px rgba(43, 54, 60, 0.06), 0 14px 32px rgba(43, 54, 60, 0.10)",this.barLight="#fcfcfd",this.barMid="#f8f9fc",this.barDeep="#f2f4f9",this.barShadow="0 1px 0 rgba(43, 54, 60, 0.05)",this.sideLight="#fafbfc",this.sideDeep="#f2f4f8",this.hairline="1px",this.stroke="2px"}parts(){return[...super.parts(),this.bands(),this.guide(),this.order(),this.surface(),this.entries(),this.small()]}bands(){return h`
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
        `}};r(Xn,"$Typeset");let Ys=Xn;const li=o(Ys);var vp=Object.defineProperty,yp=Object.getOwnPropertyDescriptor,hi=r((d,e,a,n)=>{for(var s=yp(e,a),i=d.length-1,p;i>=0;i--)(p=d[i])&&(s=p(e,a,s)||s);return s&&vp(e,a,s),s},"__decorateClass$3");const L=r(d=>d.annotations.expressed(E)?.date?.date??"","dayOf"),Cr=r(d=>{const[e,a]=L(d).split("-");return e===void 0||a===void 0?"":new Date(Date.UTC(Number(e),Number(a)-1,1)).toLocaleString("en-GB",{month:"long",year:"numeric",timeZone:"UTC"})},"monthOf"),Kn=class Kn extends g{constructor(){super(...arguments),this.specification=new O}defines(e){e.classes.add(this,"pa-newest-first")}erase(e){e.classes.revert(this)}};r(Kn,"$NewestFirst");let ja=Kn;const wp=o(ja),fi=wp,Jn=class Jn extends f{write(){const e=o(ft);return t.jsx(e,{annotation:fi,children:"newest first"})}$Define(){super.$Define(),this.classes.add(this,"pd-entry-order")}};r(Jn,"$EntryOrder");let Zs=Jn;const Qn=class Qn extends v{write(){return String(this.book.entries.indexOf(this.chapter)+1)}$Define(){super.$Define(),this.classes.add(this,"pd-entry-number")}};r(Qn,"$EntryNumber");let Us=Qn;const Vn=class Vn extends v{write(){const[e,a,n]=L(this.$entry).split("-");if(!(e===void 0||a===void 0||n===void 0))return new Date(Date.UTC(Number(e),Number(a)-1,Number(n.slice(0,2)))).toLocaleString("en-GB",{day:"numeric",month:"short",timeZone:"UTC"})}$Define(){super.$Define(),this.classes.add(this,"pd-entry-day")}};r(Vn,"$EntryDay");let Xs=Vn;const Sn=class Sn extends oa{paging(){return h``}};r(Sn,"$JournalLayout");let Ks=Sn;const jp=o(Zs),zp=o(Us),Op=o(Xs),gi=o(Ks),Pp=jp,Dp=zp,Ap=Op,er=class er extends T{constructor(){super(...arguments),this.specification=new le}get entries(){return this.body}get latest(){return[...this.entries].sort((e,a)=>L(a).localeCompare(L(e)))[0]}get pages(){const e=[...this.entries].sort((a,n)=>L(a).localeCompare(L(n)));return this.is(ja)?e.reverse():e}get open(){return super.open??this.latest}head(){}switches(){}turns(){}$Bound(){const e=o(Dp);for(const s of this.entries)s.text.add(this,t.jsx(e,{}));const a=o(Ap);for(const s of this.table?.annotations.expressed(U)?.entries??[]){const i=I(s)?.identifier,p=i===void 0?void 0:this.chapterAt(i);p===void 0||!this.entries.includes(p)||s.text.add(this,t.jsx(a,{entry:p}))}const n=o(Pp);this.table?.text.add(this,t.jsx(n,{})),this.$is=[fi],super.$Bound()}};r(er,"$Journal");let za=er;const ar=class ar extends D{$everyEntryIsDated(e){const a=e.entries.find(n=>!n.is(E));c(a===void 0,`every entry of a journal is dated, and "${a?.title?.name}" is not`)}$everyEntrySaysItsMonth(e){const a=e.entries.find(n=>n.part?.name!==Cr(n));c(a===void 0,a===void 0?"":`every entry of a journal says the month of its date as its part, and "${a.title?.name}" says "${a.part?.name??"none"}" for ${Cr(a)}`)}};r(ar,"JournalSpecification");let le=ar;hi([l("every entry of a journal is dated")],le.prototype,"$everyEntryIsDated");hi([l("every entry of a journal says the month of its date as its part")],le.prototype,"$everyEntrySaysItsMonth");const yt=o(za);o(yt,he)(li);o(yt,V)(ge);o(yt,$t)(gi);const sr=class sr extends te{};r(sr,"$JournalCover");let Js=sr;const Cp=o(Js);var Ip=Object.defineProperty,Np=Object.getOwnPropertyDescriptor,Tp=r((d,e,a,n)=>{for(var s=Np(e,a),i=d.length-1,p;i>=0;i--)(p=d[i])&&(s=p(e,a,s)||s);return s&&Ip(e,a,s),s},"__decorateClass$2");const tr=class tr extends g{constructor(){super(...arguments),this.specification=new Oa}get section(){return this.parent instanceof z?this.parent:void 0}get headings(){const e=this.section;return e===void 0?[]:e.text.find(Wr).filter(a=>a!==e.canonical)}defines(e){e.classes.add(this,"pa-opaque")}erase(e){e.classes.revert(this)}$Bound(){for(const e of this.headings){const a=e.annotations.expressed(Wa),n=e.annotations.expressed(Fr);for(const s of[a,n])s!==void 0&&e.annotations.remove(e,s)}super.$Bound()}};r(tr,"$Opaque");let Qs=tr;const or=class or extends b{$saidOfASection(e){c(e instanceof z,"opaque is said of a section, and this is not one")}};r(or,"OpaqueSpecification");let Oa=or;Tp([l("opaque is said of a section")],Oa.prototype,"$saidOfASection");const Mp=o(Qs);var Bp=Object.defineProperty,Fp=Object.getOwnPropertyDescriptor,B=r((d,e,a,n)=>{for(var s=Fp(e,a),i=d.length-1,p;i>=0;i--)(p=d[i])&&(s=p(e,a,s)||s);return s&&Bp(e,a,s),s},"__decorateClass$1");const nr=class nr extends Wr{$Define(){super.$Define(),this.classes.add(this,"pd-speaker")}$Bound(){super.$Bound();const e=this.annotations.expressed(Wa);e!==void 0&&this.annotations.remove(this,e)}};r(nr,"$Speaker");let Ne=nr;const rr=class rr extends ht{$Define(){super.$Define(),this.classes.add(this,"pd-time")}};r(rr,"$Time");let Vs=rr;const ir=class ir extends Pi{$Define(){super.$Define(),this.classes.add(this,"pd-participant")}};r(ir,"$Participant");let Pa=ir;const dr=class dr extends f{get participants(){return this.text.find(Pa)}write(){const e=this.participants;return e.flatMap((a,n)=>{const s=o(a);return[n===0?"":n===e.length-1?" and ":", ",t.jsx(s,{},n)]})}$Define(){super.$Define(),this.classes.add(this,"pd-participants")}};r(dr,"$Participants");let Da=dr;const Tc=o(Ne),Wp=o(Vs),Mc=o(Pa),Bc=o(Da),Hp=Wp,Lp=r(d=>{const e=new Date(d);if(Number.isNaN(e.getTime()))return d;const a=e.toLocaleDateString("en-GB",{day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return`${e.toLocaleTimeString("en-GB",{hour:"2-digit",minute:"2-digit",timeZone:"UTC"})} UTC, ${a}`},"shownTime"),pr=class pr extends z{constructor(){super(...arguments),this.specification=new Me,this.$at=void 0}get when(){return this.$at??""}get speaker(){return this.text.find(Ne)[0]}write(){const e=o(Hp),a=this.speaker,n=a===void 0?void 0:o(a),s=[...this.text].filter(i=>i!==a);return t.jsxs(t.Fragment,{children:[n===void 0?void 0:t.jsx(n,{}),t.jsx(e,{children:`[${Lp(this.when)}](${this.when})`}),t.jsx("div",{className:"pd-said",children:s.map((i,p)=>{const u=o(i);return t.jsx(u,{},p)})})]})}$Define(){super.$Define(),this.classes.add(this,"pd-message");const e=o(Mp);if(this.annotations.add(this,t.jsx(e,{})),this.when==="")return;const a=o(Di);this.annotations.add(this,t.jsx(a,{children:Ai.slug(this.when.replace(/Z$/u,""))}))}$Bound(){const e=this.book?.author?.means?.identifier;if(e!==void 0&&this.speaker?.means?.identifier===e){const a=o(_p);this.annotations.add(this,t.jsx(a,{}))}super.$Bound()}};r(pr,"$Message");let K=pr;const cr=class cr extends g{constructor(){super(...arguments),this.specification=new Aa}defines(e){e.classes.add(this,"pa-mine")}erase(e){e.classes.revert(this)}};r(cr,"$Mine");let Ss=cr;const lr=class lr extends b{$saidOfAMessage(e){c(e instanceof K,"mine is said of a message, and this is not one")}};r(lr,"MineSpecification");let Aa=lr;B([l("mine is said of a message")],Aa.prototype,"$saidOfAMessage");const Rp=o(Ss),_p=Rp,hr=class hr extends g{constructor(){super(...arguments),this.specification=new Ia}defines(e){e.classes.add(this,"pa-quoted")}erase(e){e.classes.revert(this)}};r(hr,"$Quoted");let et=hr;const fr=class fr extends g{constructor(){super(...arguments),this.specification=new Na}defines(e){e.classes.add(this,"pa-verbatim")}erase(e){e.classes.revert(this)}};r(fr,"$Verbatim");let at=fr;const gr=class gr extends g{constructor(){super(...arguments),this.specification=new Be,this.$from=void 0,this.$to=void 0}get from(){return this.$from??""}get to(){return this.$to??""}defines(e){e.classes.add(this,"pa-period")}erase(e){e.classes.revert(this)}};r(gr,"$Period");let Ca=gr;const br=class br extends g{constructor(){super(...arguments),this.specification=new Be,this.$shown=void 0,this.$all=void 0}get shown(){return Number(this.$shown??0)}get all(){return Number(this.$all??0)}get aside(){return this.all-this.shown}defines(e){e.classes.add(this,"pa-messages")}erase(e){e.classes.revert(this)}};r(br,"$Messages");let Te=br;const ur=class ur extends Ci{$saysWhen(e){c(e.when!==""&&!Number.isNaN(Date.parse(e.when)),"a message says when it was said, as an instant the machine can read, and this one does not")}$headedByItsSpeaker(e){c(e.canonical instanceof Ne,"a message is headed by its speaker, a heading that refers to them, and this one is not")}};r(ur,"MessageSpecification");let Me=ur;B([l("a message says when it was said")],Me.prototype,"$saysWhen");B([l("a message is headed by its speaker")],Me.prototype,"$headedByItsSpeaker");const mr=class mr extends b{$saidOfAParagraph(e){c(e instanceof f,"this is said of a paragraph, and this is not one")}};r(mr,"OfAParagraphSpecification");let Ia=mr;B([l("this is said of a paragraph")],Ia.prototype,"$saidOfAParagraph");const $r=class $r extends b{$saidOfACover(e){c(e instanceof $&&e.is(C),"this is said of a cover, and this is not one")}};r($r,"OfACoverSpecification");let Be=$r;B([l("this is said of a cover")],Be.prototype,"$saidOfACover");const kr=class kr extends b{$saidOfAWord(e){c(e instanceof v,"verbatim is said of a word, and this is not one")}};r(kr,"VerbatimSpecification");let Na=kr;B([l("verbatim is said of a word")],Na.prototype,"$saidOfAWord");const Fc=o(K),Wc=o(et),Hc=o(at),Lc=o(Ca),Rc=o(Te),Ir=r(d=>d===void 0||d===""?"":new Date(d).toLocaleDateString("en-GB",{day:"numeric",month:"long",year:"numeric",timeZone:"UTC"}),"dayWords"),xr=class xr extends f{write(){const e=this.book,a=e.messageCount?.shown??e.messages.length,n=e.body.length,s=Ir(e.period?.from),i=Ir(e.period?.to);return t.jsxs(t.Fragment,{children:[t.jsxs("span",{className:"pd-tally-count",children:[t.jsx("b",{children:a}),n===1?" messages in ":" messages over ",t.jsx("b",{children:n}),n===1?" day":" days"]}),t.jsx("span",{className:"pd-tally-period",children:s===i?s:`${s} to ${i}`})]})}$Define(){super.$Define(),this.classes.add(this,"pd-tally")}};r(xr,"$Tally");let st=xr;const vr=class vr extends v{write(){return String(this.$entry?.text.find(K).length??0)}$Define(){super.$Define(),this.classes.add(this,"pd-day-count")}};r(vr,"$DayCount");let tt=vr;const yr=class yr extends f{write(){const e=this.book.pages[0]?.mention?.identifier;if(e===void 0)return;const a=o(y),n=o(x);return t.jsxs(a,{children:[t.jsx(n,{children:e}),"What it came to"]})}$Define(){super.$Define(),this.classes.add(this,"pd-came-to-row")}};r(yr,"$CameToRow");let ot=yr;const Ep=o(st),Gp=o(tt),qp=o(ot),Yp=Ep,Zp=Gp,Up=qp,wr=class wr extends T{constructor(){super(...arguments),this.specification=new J}get participants(){return this.cover?.text.find(Da)[0]?.participants??[]}get period(){return this.cover?.annotations.expressed(Ca)}get messageCount(){return this.cover?.annotations.expressed(Te)}get messages(){return this.body.flatMap(e=>e.text.find(K))}get pages(){return[...[...this.body].sort((a,n)=>L(a).localeCompare(L(n))),...this.appendix]}head(){const e=o(Yp);return t.jsxs(t.Fragment,{children:[super.head(),t.jsx(e,{chapter:this.cover})]})}aboveThePages(){const e=this.synopsis,a=this.pages[0];if(e===void 0||a===void 0||(this.open??a)!==a)return;const n=o(e);return t.jsx("div",{className:"pd-came-to",children:t.jsx(n,{})})}$Bound(){const e=o(Zp);for(const n of this.table?.annotations.expressed(U)?.entries??[]){const s=I(n)?.identifier,i=s===void 0?void 0:this.chapterAt(s);i===void 0||!this.body.includes(i)||n.text.add(this,t.jsx(e,{entry:i}))}const a=o(Up);this.table?.text.add(this,t.jsx(a,{})),super.$Bound()}};r(wr,"$Conversation");let nt=wr;const jr=class jr extends D{$saysItsParticipantsPeriodAndCount(e){c(e.participants.length>0&&e.period!==void 0&&e.messageCount!==void 0,"a conversation says its participants, its period and how many messages it holds, on its cover, and this one says less")}$everyChapterIsDated(e){const a=e.body.find(n=>!n.is(E));c(a===void 0,`every chapter of a conversation is dated, and "${a?.title?.name}" is not`)}$everyMessageIsAddressed(e){const a=e.messages.find(n=>n.annotations.expressed(Wa)===void 0);c(a===void 0,`every message of a conversation is addressed by its time, and the one at "${a?.when}" is not`)}$everyChapterHoldsAMessage(e){const a=e.body.find(n=>n.text.find(K).length===0);c(a===void 0,`every chapter of a conversation holds a message, and "${a?.title?.name}" holds none`)}};r(jr,"ConversationSpecification");let J=jr;B([l("a conversation says its participants, its period and how many messages it holds")],J.prototype,"$saysItsParticipantsPeriodAndCount");B([l("every chapter of a conversation is dated")],J.prototype,"$everyChapterIsDated");B([l("every message of a conversation is addressed by its time")],J.prototype,"$everyMessageIsAddressed");B([l("every chapter of a conversation holds a message")],J.prototype,"$everyChapterHoldsAMessage");o(nt);const Xp=/(::[^\n]*|<\|=\|>|=\|>|=[A-Za-z0-9'_]*>|-\([^)]*\)>|->|==|!=)/gu,Nr=r(d=>d.replace(/[&<>]/gu,e=>({"&":"&amp;","<":"&lt;",">":"&gt;"})[e]),"escaped"),Kp=r(d=>d.split(Xp).map((e,a)=>a%2===0?Nr(e):`<span class="${e.startsWith("::")?"hljs-comment":"hljs-keyword"}">${Nr(e)}</span>`).join(""),"notationHighlighting"),Jp=r((d,e)=>e==="srt"?Kp(d):Ni(d,e),"boxHighlighting"),zr=class zr extends Ii{constructor(){super(...arguments),this.$highlighter=Jp}get name(){return this.language===""?"text":this.language}$CodeBox(...e){this.$Code(...e),this.containers.replace(this,"pre","div")}write(){return t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"pd-code-bar",children:[t.jsx("span",{className:"pd-code-name",children:this.name}),t.jsx("button",{type:"button",className:"pd-copy",onClick:r(e=>this.copy(e),"onClick"),children:"Copy"})]}),t.jsx("pre",{children:super.write()})]})}copy(e){const a=e.currentTarget.closest(".pd-code-box")?.querySelector("pre")?.textContent??"";navigator.clipboard?.writeText(a)}$Define(){super.$Define(),this.classes.add(this,"pd-code-box")}};r(zr,"$CodeBox");let rt=zr;const _c=o(rt);var Qp=Object.defineProperty,Vp=Object.getOwnPropertyDescriptor,bi=r((d,e,a,n)=>{for(var s=Vp(e,a),i=d.length-1,p;i>=0;i--)(p=d[i])&&(s=p(e,a,s)||s);return s&&Qp(e,a,s),s},"__decorateClass");const Or=class Or extends za{constructor(){super(...arguments),this.specification=new Fe}get entries(){return this.text.find($).filter(e=>e.is(_)&&e!==this.synopsis)}get laidOutChapters(){return[...super.laidOutChapters,...this.entries]}sizeOf(e){return e.annotations.expressed(N)?.cover?.annotations.expressed(Te)?.shown??0}};r(Or,"$Register");let it=Or;const Pr=class Pr extends le{$everyEntryStandsForABook(e){const a=e.entries.find(n=>n.annotations.expressed(_)?.means===void 0);c(a===void 0,`every entry of a register stands for a book, holding its synopsis, and "${a?.title?.name}" stands for none`)}$onlyAChapterAppends(e){const a=[...e.chapters,...e.entries];c(e.text.find($).every(n=>a.includes(n)||!n.is(ct)),"only an ordinary chapter or an entry files a file, and here a cover, a synopsis or a table of contents files one")}};r(Pr,"RegisterSpecification");let Fe=Pr;bi([l("every entry of a register stands for a book, holding its synopsis")],Fe.prototype,"$everyEntryStandsForABook");bi([l("only an ordinary chapter or an entry files a file")],Fe.prototype,"$onlyAChapterAppends");const wt=o(it);o(wt,he)(li);o(wt,V)(ge);o(wt,$t)(gi);const Dr=class Dr extends ra{get entries(){return this.text.find($).filter(e=>e.is(_)&&e!==this.synopsis)}get laidOutChapters(){return[...super.laidOutChapters,...this.entries]}get pages(){return[...super.pages,...this.entries]}};r(Dr,"$ProjectManual");let dt=Dr;o(dt);const Sp=r(()=>t.jsxs(Hr,{children:[t.jsx(Cd,{}),t.jsx(ti,{ground:"#eef5f6",band:"#c3e3e6",bandInk:"#1c565c",foot:"#8db9bd",footInk:"#153e43",ink:"#1f5a60"}),t.jsx(oi,{x:"-46",y:"-13"}),t.jsx(Lr,{children:"[Dougs Library](/dougs-library/)"}),t.jsx(Rr,{children:"[Doug](/dougs-story/)"}),t.jsx(_r,{children:"[Library](/dougs-library/)"}),t.jsx(Er,{children:"[The Library](/dougs-library/)"}),t.jsxs(Gr,{children:[t.jsx(si,{}),t.jsx(qr,{children:`<svg viewBox="0 0 64 64" class="pd-illustration"><path class="light" d="M9 7h46v50H9z"/><path d="M9 7h46v50H9zM9 24h46M9 41h46"/><path class="fill" d="M13 11h5v13h-5zM20 9h4v15h-4zM26 13h6v11h-6zM34 10h4v14h-4zM40 14h6v10h-6z"/><path d="M48 24l4-12 3 1-4 11z"/><path class="fill" d="M13 28h4v13h-4zM19 30h7v11h-7zM28 27h4v14h-4zM34 31h5v10h-5zM41 28h6v13h-6zM49 29h3v12h-3z"/><path class="fill" d="M13 46h6v11h-6zM21 44h4v13h-4zM27 47h8v10h-8zM37 45h4v12h-4zM43 48h6v9h-6z"/><path d="M50 57l3-11 3 1-3 10z"/></svg>
`})]})]}),"LibraryCover"),Ec=r(()=>t.jsxs(Hr,{children:[t.jsx(Cp,{}),t.jsx(Ti,{}),t.jsx(Id,{children:Sp()}),t.jsx(ti,{ground:"#f5eedf",band:"#d9c3a3",bandInk:"#4a3626",foot:"#a3b6cc",footInk:"#2a4262",ink:"#2f4a6a"}),t.jsx(oi,{x:"-54",y:"-33"}),t.jsx(Lr,{children:"[Dougs Story](/dougs-story/)"}),t.jsx(Rr,{children:"[Doug](/dougs-story/)"}),t.jsx(_r,{children:"[Library](/dougs-library/)"}),t.jsx(Er,{children:"[The Librarian](/dougs-story/)"}),t.jsxs(Gr,{children:[t.jsx(si,{}),t.jsx(qr,{children:`<svg viewBox="0 0 64 64" class="pd-illustration"><path class="light" d="M8 13h23v38H8zM33 13h23v38H33z"/><path d="M8 13h23v38H8zM33 13h23v38H33z"/><path d="M13 21h13M13 27h13M13 33h9M38 21h13M38 27h13M38 33h13M38 39h8"/><path class="fill" d="M15 55 45 25l4 4-30 30-6 2z"/><path d="M15 55 45 25l4 4-30 30-6 2zM43 27l4 4M17 53l2 2"/></svg>
`})]})]}),"Cover");export{Os as $,bc as A,Cd as B,Ec as C,cc as D,Ic as E,$c as F,kc as G,xc as H,rc as I,Cp as J,dc as K,Sp as L,Fc as M,pc as N,Mp as O,Bc as P,Wc as Q,Cc as R,nc as S,Oc as T,vc as U,Id as V,oi as W,yc as X,Pc as Y,Ac as Z,Dc as _,ic as a,wc as a0,za as a1,fc as a2,hc as a3,tc as a4,sc as a5,gc as b,it as c,Tc as d,_c as e,Hc as f,ti as g,Mc as h,Lc as i,Rc as j,si as k,Gs as l,mc as m,uc as n,jc as o,zc as p,Nc as q,ra as r,oc as s,lc as t,dt as u,Ys as v,nt as w,Ha as x,V as y,ge as z};
