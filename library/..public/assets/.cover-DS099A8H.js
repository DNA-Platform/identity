var on=Object.defineProperty;var n=(d,e)=>on(d,"name",{value:e,configurable:!0});import{$ as o,l as rn,s as $,m as h,n as f,o as Ts,W as w,R as x,j as t,p as zr,q as g,r as b,t as c,u as v,v as l,w as A,x as j,y as k,z as ce,B as xa,f as nn,E as I,F as Or,G as pn,J as L,K as yr,N as Ns,O as dn,Q as le,U as M,V as he,X as cn,Y as ln,Z as ya,_ as hn,a0 as fn,a1 as gn,a2 as Pe,a3 as Pr,a4 as Dr,a5 as bn,a6 as un,a7 as $n,C as Ar,T as Cr,g as Ir,h as Mr,a8 as Tr,a as Nr,i as Fr,a9 as mn}from"./index-PKO25n1R.js";const Zs=class Zs extends rn{constructor(){super(...arguments),this.font="'Inter', system-ui, sans-serif",this.prose="'Inter', system-ui, sans-serif",this.mono="'JetBrains Mono', ui-monospace, monospace",this.size="0.875rem",this.leading="1.6",this.measure="44rem",this.spreadColumn="15.5rem",this.space="1.5rem",this.holdsColumn="240px",this.barHeight="50px",this.beat="320ms",this.narrow="48rem",this.phoneWidth="390px",this.colour="#4e9eb9",this.accent="#166178",this.bar="#0c1b1f",this.barInk="#ffffff",this.barDim="#a9bcc1",this.barOn="rgba(255, 255, 255, 0.11)",this.barLine="#1d3339",this.mark="#c8f4fb",this.side="#e3f5fa",this.sideInk="#10252c",this.sideDim="#516770",this.sideOn="#ffffff",this.sideLine="#cbe6ee",this.night="#0c1b1f",this.deep="#14323c",this.blue="#166178",this.sea="#4e9eb9",this.sky="#8fc8dc",this.opal="#c8f4fb",this.pale="#e3f5fa",this.mist="#f1f7f9",this.white="#ffffff",this.ink="#10252c",this.soft="#516770",this.line="#dbe7ec",this.me="#e8590c",this.wash="linear-gradient(105deg, #e2f6fb 0%, #ecf0fd 52%, #fae9f4 100%)",this.serif="'Source Serif 4', Georgia, serif",this.between="'Source Sans 3', 'Inter', system-ui, sans-serif",this.bookPaper="#fbf9f3",this.bookInk="#29251d",this.heading="#10252c",this.capital="#166178",this.lit="#166178",this.faint="#8792a2",this.paper="#ffffff",this.panel="#f1f7f9",this.rule="#dbe7ec",this.edge="transparent",this.tint="#e3f5fa",this.dusk="#14323c",this.glow="#cfe6e3",this.dim="#4f7672",this.keyword="#8ad7ff",this.string="#ffd48a",this.type="#9be3d6",this.comment="#5f8a86",this.haze="#a9bcc1",this.glass="rgba(255, 255, 255, 0.62)",this.binding="linear-gradient(160deg, #16303a, #0c1b1f)",this.spine="inset 5px 0 0 rgba(0, 0, 0, 0.14), inset 6px 0 0 rgba(255, 255, 255, 0.12), 0 10px 20px -10px rgba(0, 0, 0, 0.45)",this.shadow="0 0.75rem 1.4rem -0.9rem rgba(12, 27, 31, 0.55)",this.volume="11.5rem",this.cover="8.25rem",this.card="18rem",this.barLight="#ffffff",this.barMid="#f1f7f9",this.barDeep="#e3f5fa",this.barShadow="none",this.sideLight="#ffffff",this.sideDeep="#e3f5fa",this.codeGround="#f1f7f9",this.hairline="1px",this.stroke="2px",this.rise="-1px",this.gloss="none",this.ring="0 0 0 2px #c8f4fb",this.decisionShadow="none",this.photo="7rem",this.radius="0.375rem",this.barTint="#ffffff",this.skyInk="#166178",this.lift="inset 5px 0 0 rgba(0, 0, 0, 0.14), inset 6px 0 0 rgba(255, 255, 255, 0.12), 0 14px 24px -12px rgba(0, 0, 0, 0.5)",this.openSpine="inset 7px 0 0 rgba(0, 0, 0, 0.14), inset 8px 0 0 rgba(255, 255, 255, 0.12), 0 12px 22px -14px rgba(0, 0, 0, 0.5)",this.style=$.div`${this.parts()}`}parts(){return[this.page(),this.writing(),this.links(),this.figures(),this.listings(),this.switches(),this.turns(),this.illustrations(),this.marks(),this.library(),this.head(),this.holds(),this.context(),this.tones()]}page(){return h`
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
            .pd-me .pd-byline { display: flex; align-items: center; gap: calc(${({theme:e})=>e.space} * 0.375); font-size: calc(0.93 * ${({theme:e})=>e.size}); color: ${({theme:e})=>e.soft}; }
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
        `}};n(Zs,"$LibraryBookTheme");let _=Zs;const kn=o(_);var xn=Object.defineProperty,vn=Object.getOwnPropertyDescriptor,wn=n((d,e,a,r)=>{for(var s=vn(e,a),i=d.length-1,p;i>=0;i--)(p=d[i])&&(s=p(e,a,s)||s);return s&&xn(e,a,s),s},"__decorateClass$k");const Us=class Us extends g{constructor(){super(...arguments),this.specification=new Me}defines(e){e.classes.add(this,"pa-label")}erase(e){e.classes.revert(this)}};n(Us,"$Label");let ja=Us;const Xs=class Xs extends b{$saidOfAWord(e){c(e instanceof v,"label is said of a word, and this is not one")}};n(Xs,"LabelSpecification");let Me=Xs;wn([l("label is said of a word")],Me.prototype,"$saidOfAWord");const Fs=o(ja),Ks=class Ks extends f{get cover(){return this.$cover??this.book?.cover}write(){const e=this.cover.annotations.expressed(Ts),a=o(w),r=o(Fs),s=o(x);return t.jsxs(t.Fragment,{children:[t.jsxs(a,{children:[t.jsx(r,{}),"by"]}),t.jsxs(a,{children:[t.jsx(s,{children:e.means.identifier}),e.name]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-byline")}};n(Ks,"$Byline");let za=Ks;const Vs=class Vs extends f{get cover(){return this.$cover??this.book?.cover}write(){const e=this.cover.annotations.expressed(zr),a=o(w),r=o(Fs),s=o(x);return t.jsxs(t.Fragment,{children:[t.jsxs(a,{children:[t.jsx(r,{}),"subject"]}),t.jsxs(a,{children:[t.jsx(s,{children:e.means.identifier}),e.name]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-subject-line")}};n(Vs,"$SubjectLine");let Oa=Vs;const Wr=o(za),yn=o(Oa);var jn=Object.defineProperty,zn=Object.getOwnPropertyDescriptor,On=n((d,e,a,r)=>{for(var s=zn(e,a),i=d.length-1,p;i>=0;i--)(p=d[i])&&(s=p(e,a,s)||s);return s&&jn(e,a,s),s},"__decorateClass$j");const Qs=class Qs extends b{$saidOfABook(e){c(e instanceof W,"this is said of a book of this library, and here it is said of something else")}};n(Qs,"OfABookSpecification");let z=Qs;On([l("this is said of a book of this library")],z.prototype,"$saidOfABook");const Js=class Js extends v{get on(){return[this.book.$is].flat().includes(this.$annotation)}$Switch(...e){this.$Writing(...e),this.containers.replace(this,"span","button")}container(e){return super.container({type:"button","aria-pressed":this.on,onClick:n(()=>this.press(),"onClick"),...e})}press(){const e=this.book,a=[e.$is].flat();e.$is=this.on?a.filter(r=>r!==this.$annotation):[this.$annotation,...a]}$Define(){super.$Define(),this.classes.add(this,"pd-switch")}};n(Js,"$Switch");let fe=Js;const Ss=class Ss extends fe{press(){const e=this.book,a=[e.$is].flat().filter(r=>!this.$family.includes(r));e.$is=[this.$annotation,...a]}};n(Ss,"$Tab");let ge=Ss;const Ws=o(fe),Pn=o(ge);var Dn=Object.defineProperty,An=Object.getOwnPropertyDescriptor,Hr=n((d,e,a,r)=>{for(var s=An(e,a),i=d.length-1,p;i>=0;i--)(p=d[i])&&(s=p(e,a,s)||s);return s&&Dn(e,a,s),s},"__decorateClass$i");const et=class et extends A{constructor(){super(...arguments),this.specification=new be,this.style=$.div`
        .pa-coloured { --colour: ${e=>e.$colour}; }
    `}get colour(){return j.copy(this.text).trim()}$Coloured(...e){this.$Format(...e);const a=this.style;this._painted=r=>t.jsx(a,{$colour:this.colour,...r})}defines(e){e.classes.add(this,"pa-coloured"),e.containers.add(this,this._painted)}erase(e){e.classes.revert(this),e.containers.revert(this)}};n(et,"$Coloured");let R=et;const at=class at extends b{$saidOfAChapterOrAParagraph(e){c(e instanceof k||e instanceof f,"coloured is said of a chapter or a paragraph, and this is neither")}$givenItsColour(e){c(/^#[0-9a-f]{6}$/iu.test(e.annotations.expressed(R)?.colour??""),"coloured is given its colour as six hex digits, and this one was given something else")}};n(at,"ColouredSpecification");let be=at;Hr([l("coloured is said of a chapter or a paragraph")],be.prototype,"$saidOfAChapterOrAParagraph");Hr([l("coloured is given its colour")],be.prototype,"$givenItsColour");const xp=o(R);var Cn=Object.defineProperty,In=Object.getOwnPropertyDescriptor,Hs=n((d,e,a,r)=>{for(var s=In(e,a),i=d.length-1,p;i>=0;i--)(p=d[i])&&(s=p(e,a,s)||s);return s&&Cn(e,a,s),s},"__decorateClass$h");const st=class st extends A{constructor(){super(...arguments),this.specification=new K}get identifier(){return ce.reference(j.copy(this.text))?.identifier??""}get name(){return ce.reference(j.copy(this.text))?.name??""}get entry(){return this.book?.chapterAt(this.identifier)}get drawing(){const e=this.entry?.text.find(f).flatMap(a=>a.text.find(xa))[0];return e===void 0?"":j.copy(e.text).trim()}get colour(){return this.entry?.annotations.expressed(R)?.colour??""}$Keyed(...e){this.$Format(...e);const a=o(Mn);this._layer=r=>t.jsxs("div",{...r,children:[t.jsx(a,{keyed:this}),r.children]})}defines(e){e.classes.add(this,"pa-keyed"),e.containers.add(this,this._layer)}erase(e){e.classes.revert(this),e.containers.revert(this)}};n(st,"$Keyed");let B=st;const tt=class tt extends v{constructor(){super(...arguments),this.style=$.span`
        --colour: ${e=>e.$colour};
    `}$Icon(...e){this.$Writing(...e);const a=this.style;this._painted=r=>t.jsx(a,{$colour:this.$keyed?.colour??"",...r}),this.containers.replace(this,"span",this._painted)}write(){return t.jsx("span",{className:"pd-drawing",role:"img","aria-label":this.$keyed?.name,dangerouslySetInnerHTML:{__html:this.$keyed?.drawing??""}})}$Define(){super.$Define(),this.classes.add(this,"pd-icon")}};n(tt,"$Icon");let Pa=tt;const ot=class ot extends b{$saidOfAChapter(e){c(e instanceof k,"keyed is said of a chapter, and this is not one")}$namesAnEntry(e){const a=e.annotations.expressed(B)?.entry;c(a!==void 0&&a.annotations.expressed(B)?.entry===a,"keyed names an entry of the key, a chapter of this book keyed as itself, and this one names something else")}$entryHoldsItsDrawingAndColour(e){const a=e.annotations.expressed(B)?.entry;a!==void 0&&c(a.text.find(f).flatMap(r=>r.text.find(xa)).length===1&&a.is(R),"an entry of the key holds one drawing and its colour, and this one holds something else")}};n(ot,"KeyedSpecification");let K=ot;Hs([l("keyed is said of a chapter")],K.prototype,"$saidOfAChapter");Hs([l("keyed names an entry of the key")],K.prototype,"$namesAnEntry");Hs([l("an entry of the key holds one drawing and its colour")],K.prototype,"$entryHoldsItsDrawingAndColour");const vp=o(B),Br=o(Pa),Mn=Br;var Tn=Object.defineProperty,Nn=Object.getOwnPropertyDescriptor,Fn=n((d,e,a,r)=>{for(var s=Nn(e,a),i=d.length-1,p;i>=0;i--)(p=d[i])&&(s=p(e,a,s)||s);return s&&Tn(e,a,s),s},"__decorateClass$g");const Wn={tsx:"typescript",ts:"typescript",mjs:"javascript",js:"javascript",css:"css",html:"xml",svg:"xml",json:"json",md:"markdown"},Hn='<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"><path d="M6 4.5 3.5 8 6 11.5M10 4.5 12.5 8 10 11.5"/></svg>',ie=n(d=>`${d.$identifier}${d.$type}`,"fileNameOf"),Bn=n(d=>d===void 0?[]:j.copy(d.text).split(`
`),"fileLinesOf"),Lr=n(d=>d?.chapter?.annotations.expressed(O),"spreadOf"),rt=class rt extends f{constructor(){super(...arguments),this.$family=[]}get name(){return this.$file===void 0?"":ie(this.$file)}get language(){return Wn[(this.$file?.$type??"").replace(/^\./u,"")]??""}get spread(){return Lr(this.$file)}get chapter(){return this.$file?.chapter??super.chapter}$FileListing(...e){this.$Writing(...e),this.containers.replace(this,"span","div")}container(e){return super.container({onClick:n(()=>this.press(),"onClick"),...e})}press(){if(this.$filePanelState===void 0)return;const e=this.book,a=[e.$is].flat().filter(r=>!this.$family.includes(r));e.$is=[this.$filePanelState,...a]}write(){const e=o(w),a=o(nn);return t.jsxs(t.Fragment,{children:[t.jsx(e,{children:this.name}),t.jsx(a,{identifier:this.$file?.$identifier,type:this.$file?.$type,language:this.language,numbered:!0})]})}$Define(){super.$Define(),this.classes.add(this,"pd-file-listing");const e=o(Rn);this.annotations.add(this,t.jsx(e,{}))}};n(rt,"$FileListing");let Te=rt;const nt=class nt extends g{constructor(){super(...arguments),this.specification=new Ne}defines(e){const a=e;a.$file!==void 0&&a.spread?.openFile===a.$file&&e.classes.add(this,"pa-open")}erase(e){e.classes.revert(this)}};n(nt,"$OpenListing");let Da=nt;const it=class it extends b{$isAFileListing(e){c(e instanceof Te,"an open listing is a file listing, and this is not one")}};n(it,"OpenListingSpecification");let Ne=it;Fn([l("an open listing is a file listing")],Ne.prototype,"$isAFileListing");const pt=class pt extends ge{constructor(){super(...arguments),this.$skeleton=!1,this.style=$.button`
        --colour: ${e=>e.$colour};
    `}get on(){const e=this.$file?.chapter;return e!==void 0&&e===this.book.open&&this.spread?.openFile===this.$file}get name(){return this.$file===void 0?"":ie(this.$file)}get spread(){return Lr(this.$file)}get colour(){return this.$file?.chapter?.annotations.expressed(B)?.colour??""}get lines(){return Bn(this.$file)}get chapter(){return this.$file?.chapter??super.chapter}$FileTab(...e){this.$Switch(...e),this.containers.replace(this,"button",this.style)}container(e){return super.container({$colour:this.colour,...e})}press(){const e=this.spread;e!==void 0&&(e.$openFile=this.$file),this.$annotation!==void 0&&super.press()}write(){return t.jsxs(t.Fragment,{children:[t.jsx("span",{className:"pd-drawing",dangerouslySetInnerHTML:{__html:Hn}}),t.jsx("span",{className:"pd-tab-name",children:this.name}),this.$skeleton?t.jsx("span",{className:"pd-skeleton",children:this.lines.slice(0,14).map((e,a)=>t.jsx("i",{style:{width:`${Math.max(12,Math.min(100,e.length*2.2))}%`}},a))}):void 0]})}$Define(){super.$Define(),this.classes.add(this,"pd-file-tab")}};n(pt,"$FileTab");let Aa=pt;const Ln=o(Te),_n=o(Da),Bs=o(Aa),Rn=_n;var En=Object.defineProperty,Gn=Object.getOwnPropertyDescriptor,qn=n((d,e,a,r)=>{for(var s=Gn(e,a),i=d.length-1,p;i>=0;i--)(p=d[i])&&(s=p(e,a,s)||s);return s&&En(e,a,s),s},"__decorateClass$f");const $a=class $a extends g{constructor(){super(...arguments),this.specification=new z}defines(e){for(const a of e.annotations.after(this))a instanceof $a&&e.annotations.express(a,!1);e.classes.add(this,"pa-file-panel-state")}erase(e){e.classes.revert(this)}};n($a,"$FilePanelState");let V=$a;const dt=class dt extends V{defines(e){super.defines(e),e.classes.add(this,"pa-code-forward")}};n(dt,"$CodeForward");let Ca=dt;const ct=class ct extends V{defines(e){super.defines(e),e.classes.add(this,"pa-words-forward")}};n(ct,"$WordsForward");let Ia=ct;const lt=class lt extends V{defines(e){super.defines(e),e.classes.add(this,"pa-split")}};n(lt,"$Split");let Ma=lt;const ht=class ht extends g{constructor(){super(...arguments),this.specification=new z}defines(e){e.classes.add(this,"pa-light-code")}erase(e){e.classes.revert(this)}};n(ht,"$LightCode");let Ta=ht;const ft=class ft extends g{constructor(){super(...arguments),this.specification=new z}defines(e){e.classes.add(this,"pa-wrapped-code")}erase(e){e.classes.revert(this)}};n(ft,"$WrappedCode");let Na=ft;const gt=class gt extends g{constructor(){super(...arguments),this.specification=new z}defines(e){e.classes.add(this,"pa-numbered-code")}erase(e){e.classes.revert(this)}};n(gt,"$NumberedCode");let Fa=gt;const bt=class bt extends g{constructor(){super(...arguments),this.specification=new We}defines(e){e.classes.add(this,"pa-brief")}erase(e){e.classes.revert(this)}};n(bt,"$Brief");let Fe=bt;const ut=class ut extends b{$saidOfAParagraph(e){c(e instanceof f,"brief is said of a paragraph, and this is not one")}};n(ut,"BriefSpecification");let We=ut;qn([l("brief is said of a paragraph")],We.prototype,"$saidOfAParagraph");o(V);const Ls=o(Ca),_s=o(Ia),ue=o(Ma),Yn=o(Ta),Zn=o(Na),_r=o(Fa),wp=o(Fe),$t=class $t extends f{constructor(){super(...arguments),this.style=$.div`
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
    `}get spread(){return this.chapter?.annotations.expressed(O)}$FileRail(...e){this.$Writing(...e),this.containers.replace(this,"span",this.style)}write(){const e=o(Bs),a=this.spread;if(a!==void 0)return a.files.map(r=>t.jsx(e,{file:r,annotation:ue,family:a.filePanelStates,skeleton:!0},ie(r)))}$Define(){super.$Define(),this.classes.add(this,"pd-file-rail")}};n($t,"$FileRail");let Wa=$t;const mt=class mt extends ge{constructor(){super(...arguments),this.style=$.button`
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
    `}get paragraphs(){return(this.chapter?.text.find(I)??[]).flatMap(e=>e.text.find(f)).slice(0,16).map(e=>j.copy(e.text))}$FilePanelGrip(...e){this.$Switch(...e),this.containers.replace(this,"button",this.style)}write(){return t.jsx("span",{className:"pd-skeleton",children:this.paragraphs.map((e,a)=>t.jsx("i",{style:{width:`${Math.max(25,Math.min(100,e.length/4))}%`}},a))})}$Define(){super.$Define(),this.classes.add(this,"pd-file-panel-grip")}};n(mt,"$FilePanelGrip");let Ha=mt;const Un=o(Wa),Xn=o(Ha),kt=class kt extends f{constructor(){super(...arguments),this.style=$.div`
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
    `}get spread(){return this.chapter?.annotations.expressed(O)}$FilePanel(...e){this.$Writing(...e),this.containers.replace(this,"span",this.style)}write(){const e=o(Qn),a=o(Ln),r=this.spread;if(r!==void 0)return t.jsxs(t.Fragment,{children:[t.jsx(e,{chapter:this.chapter}),t.jsx("div",{className:"pd-file-listings",children:r.files.map(s=>t.jsx(a,{file:s,filePanelState:Ls,family:r.filePanelStates},ie(s)))})]})}$Define(){super.$Define(),this.classes.add(this,"pd-file-panel")}};n(kt,"$FilePanel");let Ba=kt;const xt=class xt extends f{constructor(){super(...arguments),this.style=$.div`
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
    `}get spread(){return this.chapter?.annotations.expressed(O)}$FilePanelBar(...e){this.$Writing(...e),this.containers.replace(this,"span",this.style)}write(){const e=o(Bs),a=o(Pn),r=o(Ws),s=this.spread,i=this.chapter;if(s!==void 0)return t.jsxs(t.Fragment,{children:[s.files.map(p=>t.jsx(e,{file:p},ie(p))),t.jsx("span",{className:"pd-words-only",children:t.jsx(a,{chapter:i,annotation:_s,family:s.filePanelStates,children:"words"})}),t.jsx("span",{className:"pd-dock pd-to-full",children:t.jsx(a,{chapter:i,annotation:Ls,family:s.filePanelStates,children:"full screen"})}),t.jsx("span",{className:"pd-dock pd-to-split",children:t.jsx(a,{chapter:i,annotation:ue,family:s.filePanelStates,children:"split"})}),t.jsxs("span",{className:"pd-options",children:[t.jsx(r,{chapter:i,annotation:Yn,children:"light"}),t.jsx(r,{chapter:i,annotation:Zn,children:"wrap"}),t.jsx(r,{chapter:i,annotation:_r,children:"lines"})]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-file-panel-bar")}};n(xt,"$FilePanelBar");let La=xt;const Kn=o(Ba),Vn=o(La),Qn=Vn;var Jn=Object.defineProperty,Sn=Object.getOwnPropertyDescriptor,ei=n((d,e,a,r)=>{for(var s=Sn(e,a),i=d.length-1,p;i>=0;i--)(p=d[i])&&(s=p(e,a,s)||s);return s&&Jn(e,a,s),s},"__decorateClass$e");const vt=class vt extends A{constructor(){super(...arguments),this.specification=new He,this.$openFile=void 0,this.grid=$.div`
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
    `}get files(){return this.parent.annotations.find(Or).reverse()}get openFile(){return this.$openFile??this.files[0]}get filePanelStates(){return[_s,ue,Ls]}$Spread(...e){this.$Format(...e);const a=this.grid,r=o(Kn),s=o(Un),i=o(Xn);this.style=({className:p,children:u})=>{const m=this.parent,C=[...m.classes].includes("pa-open");return t.jsxs(a,{className:`${p??""}${C?" pa-open":""}`.trim(),children:[t.jsx("div",{className:"pd-words",children:u}),C?t.jsxs(t.Fragment,{children:[t.jsx(r,{chapter:m}),t.jsx(s,{chapter:m}),t.jsx(i,{chapter:m,annotation:ue,family:this.filePanelStates})]}):void 0]})}}defines(e){super.defines(e),e.classes.add(this,"pa-spread")}erase(e){super.erase(e),e.classes.revert(this)}};n(vt,"$Spread");let O=vt;const wt=class wt extends b{$isAChapter(e){c(e instanceof k,"a spread is a chapter read beside its files, and this is not a chapter")}};n(wt,"SpreadSpecification");let He=wt;ei([l("a spread is a chapter read beside its files")],He.prototype,"$isAChapter");const yp=o(O);var ai=Object.defineProperty,si=Object.getOwnPropertyDescriptor,De=n((d,e,a,r)=>{for(var s=si(e,a),i=d.length-1,p;i>=0;i--)(p=d[i])&&(s=p(e,a,s)||s);return s&&ai(e,a,s),s},"__decorateClass$d");const Rr='<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3.5 10.5 8 6 12.5"/></svg>',ti='<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linejoin="round" stroke-linecap="round"><rect class="ground" x="0.75" y="0.75" width="14.5" height="14.5"/><path d="M3.5 5.5h3l1.5 1.5h4.5v5h-9z"/></svg>',yt=class yt extends A{constructor(){super(...arguments),this.specification=new _e,this.style=$.div`
        ${e=>e.$schemeDeclarations===void 0?"":`.pa-entry { ${e.$schemeDeclarations} }`}
    `}get place(){return T(this.parent).identifier}get referencedChapter(){return this.book.chapterAt(this.place)}get cover(){return this.referencedChapter?.annotations.expressed(F)?.cover??this.book.coverOf(this.place)}get schemeDeclarations(){const e=this.cover?.annotations.expressed(N);if(e!==void 0)return e.declarations;const a=this.referencedChapter?.annotations.expressed(R)?.colour;return a===void 0?void 0:`--colour: ${a};`}$Entry(...e){this.$Format(...e);const a=this.style;this._painted=r=>t.jsx(a,{$schemeDeclarations:this.schemeDeclarations,...r})}defines(e){e.classes.add(this,"pa-entry"),e.containers.add(this,this._painted),(this.place===this.book?.$bookmark||this.place===this.book.open?.mention?.identifier)&&e.classes.add(this,"pa-open")}erase(e){e.classes.revert(this),e.containers.revert(this)}};n(yt,"$Entry");let E=yt;const jt=class jt extends g{constructor(){super(...arguments),this.specification=new Le}defines(e){e.classes.add(this,"pa-appendix")}erase(e){e.classes.revert(this)}};n(jt,"$Appendix");let $e=jt;const zt=class zt extends g{constructor(){super(...arguments),this.specification=new Be}get entries(){return this.chapter.text.find(I).flatMap(a=>a.text.find(f)).filter(a=>!a.is(pn)&&T(a)!==void 0)}$Bound(){const e=o(ni),a=o(Zr),r=o(Bs),s=this.book;for(const i of this.entries){i.annotations.add(this,t.jsx(e,{}));const p=s.chapterAt(T(i).identifier)?.annotations.expressed(O);if(p===void 0)continue;const u=p.files;i.text.add(this,t.jsx(a,{foldedWriting:u.length===0?void 0:i,annotation:Yr}),...u.map(m=>t.jsx(r,{file:m,annotation:ue,family:p.filePanelStates},ie(m))))}super.$Bound()}};n(zt,"$Index");let Q=zt;const Ot=class Ot extends b{$isATableOfContents(e){c(e.is(L),"an index is a table of contents, and this chapter is not one")}};n(Ot,"IndexSpecification");let Be=Ot;De([l("an index is a table of contents")],Be.prototype,"$isATableOfContents");const Pt=class Pt extends b{$isASectionOfTheTable(e){c(e instanceof I&&e.chapter?.is(L)===!0,"the appendix is a section of the table of contents, and this is not one")}};n(Pt,"AppendixSpecification");let Le=Pt;De([l("the appendix is a section of the table of contents")],Le.prototype,"$isASectionOfTheTable");const Dt=class Dt extends b{$isARowThatLeadsSomewhere(e){c(e instanceof f&&T(e)!==void 0,"an entry is a row that leads somewhere, and this is not one")}};n(Dt,"EntrySpecification");let _e=Dt;De([l("an entry is a row that leads somewhere")],_e.prototype,"$isARowThatLeadsSomewhere");const At=class At extends g{constructor(){super(...arguments),this.specification=new Ee}defines(e){e.classes.add(this,"pa-folded")}erase(e){e.classes.revert(this)}};n(At,"$Folded");let _a=At;const Ct=class Ct extends fe{get on(){return this.$foldedWriting!==void 0&&[this.$foldedWriting.$is].flat().includes(this.$annotation)}container(e){return super.container({...e,disabled:this.$foldedWriting===void 0,onClick:n(a=>{a.preventDefault(),this.press()},"onClick")})}press(){const e=this.$foldedWriting;if(e===void 0)return;const a=[e.$is].flat();e.$is=this.on?a.filter(r=>r!==this.$annotation):[this.$annotation,...a]}write(){return t.jsx("span",{className:"pd-drawing",dangerouslySetInnerHTML:{__html:Rr}})}$Define(){super.$Define(),this.classes.add(this,"pd-fold-chevron")}};n(Ct,"$FoldChevron");let Ra=Ct;const It=class It extends A{constructor(){super(...arguments),this.specification=new Ge,this.tree=$.div`
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
    `}get section(){return this.parent}get firstPlace(){return this.section.text.find(f).map(e=>T(e)).find(e=>e!==void 0)?.identifier}get part(){const e=this.firstPlace;return e===void 0?void 0:this.book.chapterAt(e)?.part}get open(){const e=this.book.open;return e!==void 0&&e.part?.name===this.part?.name}$TreeFolder(...e){this.$Format(...e);const a=this.tree,r=o(Zr),s=o(w),i=o(x);this.style=({className:p,children:u})=>{const m=this.firstPlace,C=[...this.section.classes].includes("pa-open"),de=t.jsx("span",{className:"pd-drawing pd-tree-folder-mark",dangerouslySetInnerHTML:{__html:ti}});return t.jsxs(a,{className:`${p??""} pd-tree-folder${C?" pa-open":""}`.trim(),children:[t.jsx(r,{foldedWriting:this.section,annotation:Yr}),m===void 0?de:t.jsxs(s,{children:[t.jsx(i,{children:m}),de]}),u]})}}defines(e){super.defines(e),e.classes.add(this,"pa-tree-folder"),this.open&&e.classes.add(this,"pa-open")}erase(e){super.erase(e),e.classes.revert(this)}};n(It,"$TreeFolder");let Re=It;const Mt=class Mt extends b{$saidOfASectionOrAnEntry(e){c(e instanceof I&&e.chapter?.is(L)===!0||e.is(E),"folded is said of a section of a table of contents or of an entry, and this is neither")}};n(Mt,"FoldedSpecification");let Ee=Mt;De([l("folded is said of a section of a table of contents or of an entry")],Ee.prototype,"$saidOfASectionOrAnEntry");const Tt=class Tt extends b{$isASectionOfTheTable(e){c(e instanceof I&&e.chapter?.is(L)===!0,"a tree folder is a section of the table of contents, and this is not one")}};n(Tt,"TreeFolderSpecification");let Ge=Tt;De([l("a tree folder is a section of the table of contents")],Ge.prototype,"$isASectionOfTheTable");const Nt=class Nt extends f{get cover(){return this.$cover??this.book?.cover}write(){const e=this.cover,a=o(w),r=o(x);return t.jsxs(a,{children:[t.jsx(r,{children:e.mention.identifier}),t.jsx("span",{className:"pd-drawing",dangerouslySetInnerHTML:{__html:Rr}}),e.title.name]})}$Define(){super.$Define(),this.classes.add(this,"pd-tree-root")}};n(Nt,"$TreeRoot");let Ea=Nt;const T=n(d=>d.annotations.expressed(yr)??d.text.find(v).map(e=>e.annotations.expressed(yr)).find(e=>e!==void 0),"contentOf"),Er=o(E),jp=o(Q),zp=o($e),Gr=o(_a),oi=o(Ra),qr=o(Re),ri=o(Ea),ni=Er,Yr=Gr,Zr=oi;var ii=Object.defineProperty,pi=Object.getOwnPropertyDescriptor,Y=n((d,e,a,r)=>{for(var s=pi(e,a),i=d.length-1,p;i>=0;i--)(p=d[i])&&(s=p(e,a,s)||s);return s&&ii(e,a,s),s},"__decorateClass$c");const va=n((d,e)=>{const a=new Set(d.text.find(e));return d.text.find(dn).flatMap(r=>[...a.has(r)?[r]:[],...va(r,e)])},"within"),Ft=class Ft extends g{constructor(){super(...arguments),this.specification=new G}get identifier(){return ce.reference(j.copy(this.text))?.identifier??""}get name(){return ce.reference(j.copy(this.text))?.name??""}get cover(){const e=this.identifier;return this.chapter?.annotations.find(F).map(a=>a.cover).find(a=>a?.mention?.identifier===e)}defines(e){e.classes.add(this,"pa-design")}erase(e){e.classes.revert(this)}};n(Ft,"$Design");let y=Ft;const Wt=class Wt extends g{constructor(){super(...arguments),this.specification=new qe}defines(e){e.classes.add(this,"pa-exhibit")}erase(e){e.classes.revert(this)}};n(Wt,"$Exhibit");let me=Wt;const Ht=class Ht extends g{constructor(){super(...arguments),this.specification=new Ye,this.$number=0,this.span=$.span.attrs({className:"pd-plate"})``}note(){const e=this.span;return t.jsxs(t.Fragment,{children:[t.jsx(e,{children:String(this.$number).padStart(2,"0")}),t.jsx("span",{className:"pd-jacket-mini"})]})}defines(e){e.classes.add(this,"pa-plate")}erase(e){e.classes.revert(this)}};n(Ht,"$Plate");let Ga=Ht;const Bt=class Bt extends A{constructor(){super(...arguments),this.specification=new Ze,this.themeProvider=!0,this.room=$.div`
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
    `}get chapter(){return this.parent}get design(){return this.chapter.annotations.expressed(y)}get plate(){return this.book.chapters.filter(e=>e.is(y)).indexOf(this.chapter)+1}$Room(...e){this.$Format(...e);const a=this.room;this.style=({className:r,children:s})=>{const i=[...this.chapter.classes].includes("pa-open");return U(this.design?.cover,t.jsxs(a,{className:`${r??""} pd-room${i?" pa-open":""}`.trim(),children:[t.jsx("span",{className:"pd-plate",children:String(this.plate).padStart(2,"0")}),s]}))}}defines(e){super.defines(e),e.classes.add(this,"pa-room")}erase(e){super.erase(e),e.classes.revert(this)}};n(Bt,"$Room");let qa=Bt;const Lt=class Lt extends f{get references(){const e=this.book?.means?.identifier??"",a=new Map;for(const r of va(this.chapter,v)){if(r.parent===this)continue;const s=r.annotations.expressed(le)?.identifier;if(s===void 0||s.startsWith(e)||a.has(s))continue;const i=j.copy(r.text);a.set(s,ce.reference(i)?.name??i.trim())}return[...a]}write(){const e=o(w),a=o(x);return this.references.map(([r,s],i)=>t.jsxs(e,{children:[t.jsx(a,{children:r}),s,t.jsx("span",{className:"pd-where",children:r.replace(/^\/dougs-/u,"").replace(/\/#?/u," · ").replace(/ · $/u,"").replace(/-/gu," ")})]},i))}$Define(){super.$Define(),this.classes.add(this,"pd-built-in")}};n(Lt,"$BuiltIn");let Ya=Lt;const _t=class _t extends b{$isAChapter(e){c(e instanceof k,"a design is a chapter, and this is not one")}$namesABook(e){c((e.annotations.expressed(y)?.identifier??"")!=="","a design names the book it is of, and this one names nothing")}$holdsTheCover(e){c(e.annotations.expressed(y)?.cover!==void 0,"a design holds the cover of the book it is of, as a volume, and this one holds none")}$showsItselfAsBuilt(e){c(e instanceof k&&va(e,f).some(a=>a.is(me)),"a design shows itself as built, in a paragraph said to be the exhibit, and this one shows nothing")}};n(_t,"DesignSpecification");let G=_t;Y([l("a design is a chapter")],G.prototype,"$isAChapter");Y([l("a design names the book it is of")],G.prototype,"$namesABook");Y([l("a design holds the cover of the book it is of")],G.prototype,"$holdsTheCover");Y([l("a design shows itself as built")],G.prototype,"$showsItselfAsBuilt");const Rt=class Rt extends b{$isAParagraphOfADesignHoldingOneImage(e){c(e instanceof f&&e.chapter?.is(y)===!0&&e.text.find(Ns).length===1,"an exhibit is a paragraph of a design that holds one image, and this is not one")}};n(Rt,"ExhibitSpecification");let qe=Rt;Y([l("an exhibit is a paragraph of a design that holds one image")],qe.prototype,"$isAParagraphOfADesignHoldingOneImage");const Et=class Et extends b{$saidOfAnEntryLeadingToADesign(e){c(e.is(E)&&e.annotations.expressed(E)?.referencedChapter?.is(y)===!0,"a plate is said of an entry that leads to a design, and this is not one")}};n(Et,"PlateSpecification");let Ye=Et;Y([l("a plate is said of an entry that leads to a design")],Ye.prototype,"$saidOfAnEntryLeadingToADesign");const Gt=class Gt extends b{$isADesign(e){c(e instanceof k&&e.is(y),"a room is a chapter that is a design, and this is not one")}};n(Gt,"RoomSpecification");let Ze=Gt;Y([l("a room is a chapter that is a design")],Ze.prototype,"$isADesign");const Op=o(y),Pp=o(me),di=o(Ga),ci=o(qa),li=o(Ya);var hi=Object.defineProperty,fi=Object.getOwnPropertyDescriptor,P=n((d,e,a,r)=>{for(var s=fi(e,a),i=d.length-1,p;i>=0;i--)(p=d[i])&&(s=p(e,a,s)||s);return s&&hi(e,a,s),s},"__decorateClass$b");const U=n((d,e,a)=>{const r=d?.annotations.expressed(N)?.painted;return r===void 0?e:t.jsx(r,{children:e},a)},"painted"),qt=class qt extends M{constructor(){super(...arguments),this.specification=new ee}get name(){return this.chapter?.title?.name??""}get author(){return this.chapter?.annotations.expressed(Ts)?.name??""}get illustration(){return this.chapter?.text.find(f).find(e=>e.is(ke))}get drawing(){const e=this.illustration?.text.find(xa)[0];return e===void 0?"":j.copy(e.text).trim()}get scheme(){return this.chapter?.annotations.expressed(N)}get window(){return this.chapter?.annotations.expressed(S)}};n(qt,"$BookshelfCover");let J=qt;const Yt=class Yt extends g{constructor(){super(...arguments),this.specification=new Ke}defines(e){e.classes.add(this,"pa-illustration")}erase(e){e.classes.revert(this)}};n(Yt,"$Illustration");let ke=Yt;const Zt=class Zt extends A{constructor(){super(...arguments),this.specification=new xe,this.$ground="",this.$band="",this.$bandInk="",this.$foot="",this.$footInk="",this.$ink="",this.style=$.div.attrs({className:"pd-scheme"})`
        ${e=>e.$scheme}
    `}get colours(){return[this.$ground,this.$band,this.$bandInk,this.$foot,this.$footInk,this.$ink]}get declarations(){return`--ground: ${this.$ground}; --band: ${this.$band}; --band-ink: ${this.$bandInk}; --foot: ${this.$foot}; --foot-ink: ${this.$footInk}; --ink: ${this.$ink};`}get painted(){return this._painted}$Scheme(...e){this.$Format(...e);const a=this.style;this._painted=r=>t.jsx(a,{$scheme:this.declarations,...r})}defines(e){e.classes.add(this,"pa-scheme"),e.containers.add(this,this._painted)}erase(e){e.classes.revert(this),e.containers.revert(this)}};n(Zt,"$Scheme");let N=Zt;const Ut=class Ut extends g{constructor(){super(...arguments),this.specification=new ve,this.$x="",this.$y=""}get declarations(){return`--window-x: ${this.$x}px; --window-y: ${this.$y}px;`}};n(Ut,"$Window");let S=Ut;const Xt=class Xt extends g{constructor(){super(...arguments),this.specification=new we}get cover(){return this._cover}get jacket(){return this._cover?.annotations.expressed(M)}$Volume(...e){this._cover=e.find(a=>a instanceof k),this.$Annotation(...e.filter(a=>a!==this._cover))}defines(e){e.classes.add(this,"pa-volume")}erase(e){e.classes.revert(this)}};n(Xt,"$Volume");let F=Xt;const Kt=class Kt extends f{get cover(){return this.$cover?.annotations.expressed(M)}$Jacket(...e){this.$Writing(...e),this._painted=a=>{const r=this.cover?.scheme?.painted;return r===void 0?t.jsx("div",{...a}):t.jsx(r,{...a})},this.containers.add(this,this._painted)}write(){const e=this.cover;if(e===void 0)return;const a=o(w),r=o(Fs);return t.jsxs(t.Fragment,{children:[t.jsx(a,{children:e.name}),t.jsx("span",{className:"pd-drawing",dangerouslySetInnerHTML:{__html:e.drawing}}),t.jsxs(a,{children:[t.jsx(r,{}),e.author]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-jacket")}};n(Kt,"$Jacket");let Za=Kt;const Vt=class Vt extends f{constructor(){super(...arguments),this.unfolded=!1}get filedElsewhere(){return this.$subject!==void 0&&this.$subject!==this.$cover}container(e){return super.container({onMouseOver:n(a=>{a.target instanceof Element&&a.target.closest(".pd-filed")!==null&&this.unfold()},"onMouseOver"),onMouseLeave:n(()=>this.fold(),"onMouseLeave"),...e})}unfold(){this.unfolded=!0}fold(){this.unfolded=!1}write(){const e=this.$cover,a=this.$subject;if(e!==void 0)return t.jsxs(t.Fragment,{children:[this.filedElsewhere?U(a,t.jsx("span",{className:"pd-filed",children:this.mark(a)})):void 0,U(e,t.jsx("span",{className:"pd-own",children:this.mark(e)})),t.jsxs("span",{className:"pd-names",children:[U(e,t.jsx("span",{className:"pd-name",children:this.name(e)})),this.filedElsewhere?U(a,t.jsx("span",{className:"pd-name pd-under",children:this.name(a)})):void 0]})]})}mark(e){const a=o(ki),r=o(x);return t.jsx(a,{cover:e,children:t.jsx(r,{children:e.mention.identifier})})}name(e){const a=o(w),r=o(x);return t.jsxs(a,{children:[t.jsx(r,{children:e.mention.identifier}),e.title.name]})}$Define(){super.$Define(),this.classes.add(this,"pd-logo");const e=o(xi);this.annotations.add(this,t.jsx(e,{}))}};n(Vt,"$Logo");let Ue=Vt;const Qt=class Qt extends g{constructor(){super(...arguments),this.specification=new Xe}defines(e){e.unfolded&&e.classes.add(this,"pa-unfolded")}erase(e){e.classes.revert(this)}};n(Qt,"$Unfolded");let Ua=Qt;const Jt=class Jt extends b{$saidOfALogo(e){c(e instanceof Ue,"unfolded is said of a logo, and this is not one")}};n(Jt,"UnfoldedSpecification");let Xe=Jt;P([l("unfolded is said of a logo")],Xe.prototype,"$saidOfALogo");const St=class St extends v{constructor(){super(...arguments),this.style=$.span`
        ${e=>e.$vars}
    `}get cover(){return this.$cover?.annotations.expressed(M)}$Mark(...e){this.$Writing(...e);const a=this.style;this._painted=r=>t.jsx(a,{$vars:`${this.cover?.scheme?.declarations??""} ${this.cover?.window?.declarations??""}`,...r}),this.containers.add(this,this._painted)}write(){return t.jsx("span",{className:"pd-drawing",dangerouslySetInnerHTML:{__html:this.cover?.drawing??""}})}$Define(){super.$Define(),this.classes.add(this,"pd-mark")}};n(St,"$Mark");let Xa=St;const eo=class eo extends cn{$carriesItsScheme(e){c(e.is(N),"a bookshelf cover carries its scheme, and this one carries none")}$carriesItsWindow(e){c(e.is(S),"a bookshelf cover carries its window, and this one carries none")}$carriesItsIllustration(e){c(e instanceof k&&e.text.find(f).some(a=>a.is(ke)),"a bookshelf cover carries its illustration, and this one carries none")}};n(eo,"BookshelfCoverSpecification");let ee=eo;P([l("a bookshelf cover carries its scheme")],ee.prototype,"$carriesItsScheme");P([l("a bookshelf cover carries its window")],ee.prototype,"$carriesItsWindow");P([l("a bookshelf cover carries its illustration")],ee.prototype,"$carriesItsIllustration");const ao=class ao extends b{$saidOfADrawing(e){c(e instanceof f&&e.chapter?.is(M)===!0&&e.text.find(xa).length===1,"an illustration is a paragraph of a cover that holds one drawing, and this is not one")}};n(ao,"IllustrationSpecification");let Ke=ao;P([l("an illustration is a paragraph of a cover that holds one drawing")],Ke.prototype,"$saidOfADrawing");const so=class so extends b{$isACover(e){c(e instanceof k&&e.is(M),"a cover has a scheme, and this is not a cover")}$givenItsColours(e){const a=e.annotations.expressed(N)?.colours??[];c(a.every(r=>/^#[0-9a-f]{6}$/iu.test(r)),"a scheme is given its six colours as six hex digits each — the ground, the band and its ink, the foot and its ink, and the ink of the drawing — and this one was given something else")}};n(so,"SchemeSpecification");let xe=so;P([l("a cover has a scheme")],xe.prototype,"$isACover");P([l("a scheme is given its six colours")],xe.prototype,"$givenItsColours");const to=class to extends b{$isACover(e){c(e instanceof k&&e.is(M),"a cover has a window, and this is not a cover")}$givenItsPlace(e){const a=e.annotations.expressed(S);c(/^-?\d+$/u.test(a?.$x??"")&&/^-?\d+$/u.test(a?.$y??""),"a window is given where it stands on the drawing, two whole numbers, and this one was given something else")}};n(to,"WindowSpecification");let ve=to;P([l("a cover has a window")],ve.prototype,"$isACover");P([l("a window is given where it stands on the drawing")],ve.prototype,"$givenItsPlace");const oo=class oo extends b{$saidOfAChapterStandingForABook(e){c(e instanceof k&&(e.is(he)||e.is(M)||e.is(y)),"a volume is a chapter that stands for another book, a synopsis of it, a cover filed under it or a design of it, and this is none")}$holdsTheCover(e){const a=[e.annotations.expressed(he)?.means?.identifier,e.annotations.expressed(zr)?.means?.identifier,e.annotations.expressed(Ts)?.means?.identifier,e.annotations.expressed(y)?.identifier];c(e.annotations.find(F).every(r=>r.cover?.is(M)===!0&&a.includes(r.cover.mention?.identifier)),"a volume holds the cover of a book its chapter stands for, the book a synopsis or a design is of or the subject or author a cover is filed under, and one here holds something else")}};n(oo,"VolumeSpecification");let we=oo;P([l("a volume is a chapter that stands for another book")],we.prototype,"$saidOfAChapterStandingForABook");P([l("a volume holds the cover of a book its chapter stands for")],we.prototype,"$holdsTheCover");const gi=o(J),Ur=o(ke),Xr=o(N),Kr=o(S),bi=o(F),ui=o(Za),$i=o(Ue),mi=o(Ua),Vr=o(Xa),ki=Vr,xi=mi,ma=class ma extends ln{constructor(){super(...arguments),this.specification=new z,this.themeProvider=!0,this.style=$.div`
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
    `}get pages(){return this.book.pages}get open(){const e=this.book;return e.open??e.synopsis}$Bound(){const e=this.style,a=this.book;this.style=r=>t.jsx(e,{$at:a.means?.identifier,$scheme:a.cover?.annotations.expressed(N)?.declarations,...r}),super.$Bound()}defines(e){for(const r of e.annotations.after(this))r instanceof ma&&e.annotations.express(r,!1);super.defines(e),e.classes.add(this,"pa-layout");const a=this.book.open;a!==void 0&&e.classes.add(this,"pa-turned"),a?.is(O)&&e.classes.add(this,"pa-manual")}erase(e){super.erase(e),e.classes.revert(this)}parts(){return[this.paging(),this.regions(),this.areas(),this.phone()]}paging(){return h`
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
        `}};n(ma,"$Layout");let Ve=ma;const Qr=o(Ve),ka=class ka extends g{constructor(){super(...arguments),this.specification=new z}defines(e){for(const a of e.annotations.after(this))a instanceof ka&&e.annotations.express(a,!1);e.classes.add(this,"pa-tone")}erase(e){e.classes.revert(this)}};n(ka,"$Tone");let ae=ka;const ro=class ro extends ae{defines(e){super.defines(e),e.classes.add(this,"pa-dark")}};n(ro,"$Dark");let Ka=ro;const no=class no extends ae{defines(e){super.defines(e),e.classes.add(this,"pa-light")}};n(no,"$Light");let Va=no;const io=class io extends ae{defines(e){super.defines(e),e.classes.add(this,"pa-white-over-black")}};n(io,"$WhiteOverBlack");let Qa=io;const pe=o(ae),Jr=o(Ka),Ae=o(Va),vi=o(Qa);var wi=Object.defineProperty,yi=Object.getOwnPropertyDescriptor,ji=n((d,e,a,r)=>{for(var s=yi(e,a),i=d.length-1,p;i>=0;i--)(p=d[i])&&(s=p(e,a,s)||s);return s&&wi(e,a,s),s},"__decorateClass$a");const po=class po extends v{write(){const e=this.book.body;return`${e.indexOf(this.chapter)+1} of ${e.length}`}$Define(){super.$Define(),this.classes.add(this,"pd-count")}};n(po,"$Count");let Ja=po;const co=class co extends g{constructor(){super(...arguments),this.specification=new ye}defines(e){e.classes.add(this,"pa-before")}erase(e){e.classes.revert(this)}};n(co,"$Before");let Sa=co;const lo=class lo extends g{constructor(){super(...arguments),this.specification=new ye}defines(e){e.classes.add(this,"pa-after")}erase(e){e.classes.revert(this)}};n(lo,"$After");let es=lo;const ho=class ho extends b{$saidOfAWordOfATurn(e){c(e instanceof v&&e.parent instanceof Qe,"this is said of a word of a turn, and here it is said of something else")}};n(ho,"OfATurnSpecification");let ye=ho;ji([l("this is said of a word of a turn")],ye.prototype,"$saidOfAWordOfATurn");const zi=o(Ja),Oi=o(Sa),Pi=o(es),fo=class fo extends f{get before(){const e=this.book.body;return e[e.indexOf(this.chapter)-1]??this.chapter}get after(){const e=this.book.body;return e[e.indexOf(this.chapter)+1]??this.chapter}write(){const e=o(w),a=o(zi),r=o(Oi),s=o(Pi),i=o(this.before===this.chapter?ya:x),p=o(this.after===this.chapter?ya:x);return t.jsxs(t.Fragment,{children:[t.jsxs(e,{children:[t.jsx(r,{}),t.jsx(i,{children:this.before.mention.identifier}),"← ",this.before.title.name]}),t.jsx(a,{}),t.jsxs(e,{children:[t.jsx(s,{}),t.jsx(p,{children:this.after.mention.identifier}),this.after.title.name," →"]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-turn")}};n(fo,"$Turn");let Qe=fo;const Di=o(Qe);var Ai=Object.defineProperty,Ci=Object.getOwnPropertyDescriptor,Ce=n((d,e,a,r)=>{for(var s=r>1?void 0:r?Ci(e,a):e,i=d.length-1,p;i>=0;i--)(p=d[i])&&(s=(r?p(e,a,s):p(s))||s);return r&&s&&Ai(e,a,s),s},"__decorateClass$9");const go=class go extends hn{constructor(){super(...arguments),this.specification=new D}get chapters(){return this.text.find(k).filter(e=>[...e.classes].includes("pd-canonical"))}get laidOutChapters(){return[this.cover,this.synopsis,this.table,...this.chapters]}get pages(){return[this.synopsis,...this.chapters].filter(e=>e!==void 0)}get body(){const e=this.appendix;return this.chapters.filter(a=>!e.includes(a))}get appendix(){const e=this.table;if(e===void 0)return[];const a=e.text.find(I).filter(r=>r.is($e)).flatMap(r=>r.text.find(f).map(s=>T(s)?.identifier));return this.chapters.filter(r=>a.includes(r.mention?.identifier??""))}get open(){return this.$bookmark===void 0?void 0:this.chapterAt(this.$bookmark)}get tones(){return[Jr,Ae,vi]}write(){return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"pd-library",children:this.library()}),t.jsx("div",{className:"pd-me",children:this.me()}),t.jsx("div",{className:"pd-holds",children:this.holds()}),t.jsx("div",{className:"pd-head",children:this.head()}),t.jsxs("div",{className:"pd-pages",children:[this.aboveThePages(),this.pages.map((e,a)=>{const r=o(e);return t.jsx(r,{},a)}),this.belowThePages()]})]})}library(){if(this._logo===void 0)return;const e=o(this._logo);return t.jsx(e,{})}me(){const e=o(Vr),a=o(x),r=this.coverOf(this.author?.means?.identifier);return t.jsxs(t.Fragment,{children:[this.byline(),r===void 0?void 0:this.painted(r,t.jsx(e,{cover:r,children:t.jsx(a,{children:r.mention.identifier})}))]})}painted(e,a,r){return U(e,a,r)}holds(){const e=o(this.table);return t.jsx(e,{})}head(){const e=o(this.cover);return t.jsxs(t.Fragment,{children:[t.jsx(e,{}),t.jsx("div",{className:"pd-switches",children:this.switches()})]})}aboveThePages(){}belowThePages(){}chapterAt(e){return(this._chapterByPlace??this.chapterByPlace()).get(e)}chapterByPlace(){const e=new Map;for(const a of this.chapters)for(const r of this.sections(a))r.mention!==void 0&&!e.has(r.mention.identifier)&&e.set(r.mention.identifier,a);for(const a of this.chapters)a.mention!==void 0&&e.set(a.mention.identifier,a);return e}coverOf(e){if(e!==void 0)return this.means?.identifier===e?this.cover:this.cover?.annotations.find(F).map(a=>a.cover).find(a=>a?.mention?.identifier===e)}byline(){const e=o(Wr);return t.jsx(e,{chapter:this.cover})}root(){const e=o(ri);return t.jsx(e,{cover:this.cover})}switches(){}sections(e){return e.text.find(I).flatMap(a=>[a,...this.sections(a)])}sectionOf(e){const a=this.table;return a===void 0?void 0:this.sections(a).find(r=>r.canonical?.name===e.name)}turn(){this.bookmark!==this.cover&&super.turn()}$Define(){super.$Define();const e=o(Qr),a=o(pe);this.annotations.add(this,t.jsx(e,{}),t.jsx(a,{}))}$Bound(){this._chapterByPlace=this.chapterByPlace();const e=o(qr),a=this.table?.annotations.expressed(L);for(const i of a?.parts??[]){const p=this.sectionOf(i);p===void 0||p.is(Re)||!i.chapters.some(u=>u.is(O))||p.annotations.add(this,t.jsx(e,{}))}const r=this.root();r!==void 0&&this.table?.text.add(this,r);const s=o($i);this._logo=fn.chemical(t.jsx(s,{cover:this.cover,subject:this.coverOf(this.subject?.means?.identifier)}),this),this.turns(),super.$Bound()}turns(){const e=o(Di);for(const a of this.body)a.text.add(this,t.jsx(e,{}))}};n(go,"$LibraryBook");let W=go;Ce([Pr()],W.prototype,"_chapterByPlace",2);const bo=class bo extends gn{$holdsOnlyChapters(e){c([...e.text].every(a=>a instanceof k),"a book of this library holds only chapters, and this one holds something else")}$placesEveryChapter(e){c(e.text.find(k).every(a=>e.laidOutChapters.includes(a)),"a book of this library has a place for every chapter it holds, and this one holds a chapter it places nowhere")}$onlyAChapterAppends(e){c(e.text.find(k).every(a=>e.chapters.includes(a)||!a.is(Or)),"only an ordinary chapter files a file, and here a cover, a synopsis or a table of contents files one")}$listsEachManualPart(e){const r=(e.table?.annotations.expressed(L)?.parts??[]).find(s=>s.chapters.some(i=>i.is(O))&&e.sectionOf(s)===void 0);c(r===void 0,`a part read as a manual is listed under a section headed with its name, and "${r?.name}" has none`)}};n(bo,"LibraryBookSpecification");let D=bo;Ce([l("a book of this library holds only chapters")],D.prototype,"$holdsOnlyChapters",1);Ce([l("a book of this library has a place for every chapter it holds")],D.prototype,"$placesEveryChapter",1);Ce([l("only an ordinary chapter files a file")],D.prototype,"$onlyAChapterAppends",1);Ce([l("a part read as a manual is listed under a section headed with its name")],D.prototype,"$listsEachManualPart",1);const Sr=o(W);o(Sr,Pe)(kn);o(Sr,pe)(Jr);var Ii=Object.defineProperty,Mi=Object.getOwnPropertyDescriptor,Ti=n((d,e,a,r)=>{for(var s=Mi(e,a),i=d.length-1,p;i>=0;i--)(p=d[i])&&(s=p(e,a,s)||s);return s&&Ii(e,a,s),s},"__decorateClass$8");const uo=class uo extends W{constructor(){super(...arguments),this.specification=new Je}get open(){return super.open??this.body[0]}head(){}switches(){}root(){}$Define(){super.$Define(),this.$is=[_s,_r]}$Bound(){const e=o(qr);for(const a of this.table?.text.find(I)??[])a.annotations.add(this,t.jsx(e,{})),a.is($e)&&(a.$is=[Gr]);super.$Bound()}};n(uo,"$Manual");let as=uo;const $o=class $o extends D{$everyChapterHasABrief(e){c(e.chapters.every(a=>a.text.find(f).some(r=>r.is(Fe))),"every chapter of a manual opens with a brief, and one here has none")}};n($o,"ManualSpecification");let Je=$o;Ti([l("every chapter of a manual opens with a brief")],Je.prototype,"$everyChapterHasABrief");const Rs=o(as);o(Rs,pe)(Ae);var Ni=Object.defineProperty,Fi=Object.getOwnPropertyDescriptor,Es=n((d,e,a,r)=>{for(var s=Fi(e,a),i=d.length-1,p;i>=0;i--)(p=d[i])&&(s=p(e,a,s)||s);return s&&Ni(e,a,s),s},"__decorateClass$7");const mo=class mo extends g{constructor(){super(...arguments),this.specification=new se}get date(){return this.text.find(Dr)[0]}defines(e){e.classes.add(this,"pa-dated")}erase(e){e.classes.revert(this)}note(){const e=o(this.date);return t.jsx(e,{})}};n(mo,"$Dated");let q=mo;const ko=class ko extends b{$saidOfAChapter(e){c(e instanceof k,"dated is said of a chapter, and this is not one")}$datedOnce(e){c(e.annotations.containsOne(q),"a chapter is dated once, and this one is dated more than once")}$givenOneDate(e){c(e.annotations.expressed(q)?.text.find(Dr).length===1,"a dated chapter is given one date, and this one is given none or more than one")}};n(ko,"DatedSpecification");let se=ko;Es([l("dated is said of a chapter")],se.prototype,"$saidOfAChapter");Es([l("a chapter is dated once")],se.prototype,"$datedOnce");Es([l("a dated chapter is given one date")],se.prototype,"$givenOneDate");const Dp=o(q),xo=class xo extends E{constructor(){super(...arguments),this.label=$.span.attrs({className:"pa-number"})``}get number(){return this.book.body.indexOf(this.referencedChapter)+1}get keyed(){return this.referencedChapter?.annotations.expressed(B)}note(){const e=this.label,a=o(Br),r=this.keyed;return t.jsxs(t.Fragment,{children:[super.note(),r===void 0?void 0:t.jsx(a,{keyed:r}),this.number===0?void 0:t.jsx(e,{children:String(this.number)})]})}};n(xo,"$NumberedEntry");let ss=xo;const Wi=o(ss);o(Rs,Er)(Wi);const vo=class vo extends J{constructor(){super(...arguments),this.style=$.header`
        .pd-chapter.pa-cover { margin-block: 0; }
        .pa-cover .pd-title {
            font-size: calc(1.04 * ${({theme:e})=>e.size});
            font-weight: 600;
        }
    `}};n(vo,"$ManualCover");let ts=vo;const wo=class wo extends L{constructor(){super(...arguments),this.style=$.nav`
        .pa-table-of-contents .pa-reference { color: inherit; text-decoration: none; }
    `}};n(wo,"$ManualTableOfContents");let os=wo;const Ap=o(ts),Cp=o(os),yo=class yo extends _{constructor(){super(...arguments),this.measure="104ch",this.holdsColumn="272px",this.barHeight="52px",this.space="24px",this.size="14px",this.beat="0.22s",this.serif="'Source Serif 4', Georgia, serif",this.paper="#fdfcfa",this.ink="#343c4a",this.heading="#1a1f36",this.soft="#727d8c",this.faint="#9ea8b5",this.line="#e4e9f2",this.tint="#f0f4fc",this.barTint="#f8fafe",this.side="#f7f8fb",this.sideInk="#3a4452",this.sideDim="#6b7684",this.sideLine="#e0e4eb",this.sky="#e3edfb",this.skyInk="#4a6ea0",this.accent="#4a6ea0",this.colour="#4fb3a8",this.radius="6px",this.wash="linear-gradient(135deg, #f1f5fd 0%, #fdfcfa 48%, #fdf5ee 100%)"}parts(){return[...super.parts(),this.tree(),this.icons(),this.small()]}library(){return h`
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
        `}};n(yo,"$ManualTheme");let rs=yo;const Hi=o(rs);o(Rs,Pe)(Hi);var Bi=Object.defineProperty,Li=Object.getOwnPropertyDescriptor,_i=n((d,e,a,r)=>{for(var s=Li(e,a),i=d.length-1,p;i>=0;i--)(p=d[i])&&(s=p(e,a,s)||s);return s&&Bi(e,a,s),s},"__decorateClass$6");const jo=class jo extends g{constructor(){super(...arguments),this.specification=new Se}defines(e){e.classes.add(this,"pa-first")}erase(e){e.classes.revert(this)}};n(jo,"$First");let ns=jo;const zo=class zo extends b{$saidOfAParagraph(e){c(e instanceof f,"first is said of a paragraph, and this is not one")}};n(zo,"FirstSpecification");let Se=zo;_i([l("first is said of a paragraph")],Se.prototype,"$saidOfAParagraph");const Ip=o(ns),Oo=class Oo extends _{constructor(){super(...arguments),this.serif="'Source Serif 4', Georgia, serif",this.paper="#fdfcfa",this.ink="#343c4a",this.soft="#727d8c",this.faint="#9ea8b5",this.line="#e4e9f2",this.tint="#f0f4fc",this.barTint="#f8fafe",this.sky="#e3edfb",this.skyInk="#4a6ea0",this.accent="#4a6ea0",this.wash="linear-gradient(135deg, #f2f6fd 0%, #fdfcfa 48%, #fdf6f1 100%)",this.side="#f7f8fb",this.sideInk="#3a4452",this.sideDim="#7f8a9b",this.sideLine="#e3e7ee",this.barHeight="52px",this.holdsColumn="232px",this.space="24px",this.cover="132px",this.volume="184px",this.radius="6px",this.spine="inset 3px 0 0 rgba(0, 0, 0, 0.08), inset 4px 0 0 rgba(255, 255, 255, 0.35), 0 6px 12px -10px rgba(44, 52, 64, 0.3)",this.lift="inset 3px 0 0 rgba(0, 0, 0, 0.08), inset 4px 0 0 rgba(255, 255, 255, 0.35), 0 10px 16px -12px rgba(44, 52, 64, 0.35)",this.openSpine="inset 7px 0 0 rgba(0, 0, 0, 0.07), inset 9px 0 0 rgba(255, 255, 255, 0.45), 0 12px 22px -16px rgba(44, 52, 64, 0.35)"}parts(){return[...super.parts(),this.shelf(),this.jackets(),this.desk(),this.unfolded(),this.small()]}page(){return h`
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
        `}};n(Oo,"$Bookshelf");let is=Oo;const Ri=o(is);var Ei=Object.defineProperty,Gi=Object.getOwnPropertyDescriptor,wa=n((d,e,a,r)=>{for(var s=r>1?void 0:r?Gi(e,a):e,i=d.length-1,p;i>=0;i--)(p=d[i])&&(s=(r?p(e,a,s):p(s))||s);return r&&s&&Ei(e,a,s),s},"__decorateClass$5");const Po=class Po extends W{get books(){return this.text.find(k).filter(e=>e.is(he)&&e!==this.synopsis)}get laidOutChapters(){return[...super.laidOutChapters,...this.books]}get pages(){return[this.synopsis,...this.books,...this.chapters]}head(){return t.jsx("div",{className:"pd-switches",children:this.switches()})}belowThePages(){return t.jsx("div",{className:"pd-shelf",children:this.volumes()})}volumes(){const e=o(w),a=o(x);return(this.table?.annotations.expressed(Q)?.entries??[]).map((s,i)=>{const p=T(s).identifier,u=this.chapterAt(p),m=u===void 0?this.coverOf(p):this.jacketOf(u);if(m!==void 0)return t.jsxs("div",{className:"pd-volume",children:[this.jacket(m,p),t.jsx("div",{className:"pd-paragraph pd-name",children:t.jsxs(e,{children:[t.jsx(a,{children:p}),m.title.name]})})]},i)})}jacket(e,a){if(e===void 0)return;const r=o(ui),s=o(x);return a===void 0?t.jsx(r,{cover:e}):t.jsx(r,{cover:e,children:t.jsx(s,{children:a})})}line(e){if(e===void 0)return;const a=o(Wr),r=o(yn);return t.jsxs(t.Fragment,{children:[t.jsx(a,{cover:e}),t.jsx(r,{cover:e})]})}wayIntoTheBook(e){if(e===void 0)return;const a=o(w),r=o(x),s=e.mention.identifier;return t.jsx("div",{className:"pd-paragraph pd-read",children:t.jsxs(a,{children:[t.jsx(r,{children:s}),`Read ${e.title.name}`]})})}jacketOf(e){return e===this.synopsis?this.cover:e.annotations.expressed(F)?.cover??(this.appendix.includes(e)?void 0:this.cover)}coverOf(e){return super.coverOf(e)??this.books.map(a=>a.annotations.expressed(F)?.cover).find(a=>a!==void 0&&a.mention?.identifier===e)}chapterAt(e){return super.chapterAt(e)??this.books.find(a=>this.placeOf(a)===e)}placeOf(e){const a=e.title?.annotations.expressed(bn)?.identifier,r=this.means?.identifier;if(!(a===void 0||r===void 0))return`${r.replace(/\/+$/u,"")}/#${a}`}$Bound(){const e=o(Ui);for(const a of[this.synopsis,...this.books])a?.annotations.add(this,t.jsx(e,{}));super.$Bound()}};n(Po,"$Catalogue");let ps=Po;const Do=class Do extends A{constructor(){super(...arguments),this.specification=new ea,this.card=$.div`
        &:not(.pa-open) { display: none; }
    `}get chapter(){return this.parent}get catalogue(){return this.book}get isTheFront(){return this.chapter===this.catalogue.synopsis}get cover(){return this.catalogue.jacketOf(this.chapter)}$CatalogueDesk(...e){this.$Format(...e);const a=o(Ws),r=this.card;this.style=({className:s,children:i})=>{const p=this.catalogue,u=this.cover,m=[...this.chapter.classes].includes("pa-open"),C=this.isTheFront?o(p.title):void 0;return p.painted(u,t.jsxs(r,{className:`${s??""} pd-catalogue-desk${m?" pa-open":""}`.trim(),children:[p.jacket(u),t.jsxs("div",{className:"pd-words",children:[C===void 0?void 0:t.jsx(C,{}),i]}),u===void 0||this.isTheFront?void 0:t.jsx("div",{className:"pd-line",children:p.line(u)}),p.wayIntoTheBook(u),u===void 0?void 0:t.jsx(a,{chapter:this.chapter,annotation:Zi,children:"read on"})]}))}}defines(e){super.defines(e),e.classes.add(this,"pa-catalogue-desk")}erase(e){super.erase(e),e.classes.revert(this)}};n(Do,"$CatalogueDesk");let ds=Do;const Ao=class Ao extends b{$holdsASynopsis(e){c(e instanceof k&&e.is(he),"a catalogue desk holds a synopsis, and this is not one")}};n(Ao,"CatalogueDeskSpecification");let ea=Ao;wa([l("a catalogue desk holds a synopsis")],ea.prototype,"$holdsASynopsis",1);const Co=class Co extends un{get identifier(){return this._book??super.identifier}$Bound(){super.$Bound(),this._book=this.chapter?.annotations.expressed(he)?.means?.identifier}};n(Co,"$BookLink");let aa=Co;wa([Pr()],aa.prototype,"_book",2);const Io=class Io extends g{constructor(){super(...arguments),this.specification=new sa}defines(e){e.classes.add(this,"pa-caption")}erase(e){e.classes.revert(this)}};n(Io,"$Caption");let cs=Io;const Mo=class Mo extends g{constructor(){super(...arguments),this.specification=new ta}defines(e){e.classes.add(this,"pa-arrow")}erase(e){e.classes.revert(this)}};n(Mo,"$Arrow");let ls=Mo;const To=class To extends g{constructor(){super(...arguments),this.specification=new z}defines(e){e.classes.add(this,"pa-unfolded-desk")}erase(e){e.classes.revert(this)}};n(To,"$UnfoldedDesk");let hs=To;const No=class No extends b{$isAParagraph(e){c(e instanceof f,"a caption is a paragraph, and this is not one")}};n(No,"CaptionSpecification");let sa=No;wa([l("a caption is a paragraph")],sa.prototype,"$isAParagraph",1);const Fo=class Fo extends b{$isAWordOfTheTable(e){c(e instanceof v&&e.chapter?.is(L)===!0,"an arrow is a word of the table of contents, and this is not one")}};n(Fo,"ArrowSpecification");let ta=Fo;wa([l("an arrow is a word of the table of contents")],ta.prototype,"$isAWordOfTheTable",1);const Gs=o(ps),qi=o(ds),Yi=o(aa),Mp=o(cs),Tp=o(ls),Zi=o(hs),Ui=qi;o(Gs,ya)(Yi);o(Gs,Pe)(Ri);o(Gs,pe)(Ae);var Xi=Object.defineProperty,Ki=Object.getOwnPropertyDescriptor,Ie=n((d,e,a,r)=>{for(var s=Ki(e,a),i=d.length-1,p;i>=0;i--)(p=d[i])&&(s=p(e,a,s)||s);return s&&Xi(e,a,s),s},"__decorateClass$4");const Wo=class Wo extends g{constructor(){super(...arguments),this.specification=new ra}defines(e){e.classes.add(this,"pa-question")}erase(e){e.classes.revert(this)}};n(Wo,"$Question");let fs=Wo;const Ho=class Ho extends g{constructor(){super(...arguments),this.specification=new na}defines(e){e.classes.add(this,"pa-answer")}erase(e){e.classes.revert(this)}};n(Ho,"$Answer");let gs=Ho;const Bo=class Bo extends g{constructor(){super(...arguments),this.specification=new ia}defines(e){e.classes.add(this,"pa-decision")}erase(e){e.classes.revert(this)}};n(Bo,"$Decision");let oa=Bo;const Lo=class Lo extends g{constructor(){super(...arguments),this.specification=new pa}defines(e){e.classes.add(this,"pa-pain")}erase(e){e.classes.revert(this)}};n(Lo,"$Pain");let bs=Lo;const _o=class _o extends g{constructor(){super(...arguments),this.specification=new da}defines(e){e.classes.add(this,"pa-solution")}erase(e){e.classes.revert(this)}};n(_o,"$Solution");let us=_o;const Ro=class Ro extends b{$isAParagraph(e){c(e instanceof f,"a question is a paragraph, and this is not one")}};n(Ro,"QuestionSpecification");let ra=Ro;Ie([l("a question is a paragraph")],ra.prototype,"$isAParagraph");const Eo=class Eo extends b{$isAParagraph(e){c(e instanceof f,"an answer is a paragraph, and this is not one")}};n(Eo,"AnswerSpecification");let na=Eo;Ie([l("an answer is a paragraph")],na.prototype,"$isAParagraph");const Go=class Go extends b{$isAParagraph(e){c(e instanceof f,"a decision is a paragraph, and this is not one")}};n(Go,"DecisionSpecification");let ia=Go;Ie([l("a decision is a paragraph")],ia.prototype,"$isAParagraph");const qo=class qo extends b{$isAParagraph(e){c(e instanceof f,"a pain is a paragraph, and this is not one")}};n(qo,"PainSpecification");let pa=qo;Ie([l("a pain is a paragraph")],pa.prototype,"$isAParagraph");const Yo=class Yo extends b{$isAParagraph(e){c(e instanceof f,"a solution is a paragraph, and this is not one")}};n(Yo,"SolutionSpecification");let da=Yo;Ie([l("a solution is a paragraph")],da.prototype,"$isAParagraph");const Np=o(fs),Fp=o(gs),Wp=o(oa),Hp=o(bs),Bp=o(us);var Vi=Object.defineProperty,Qi=Object.getOwnPropertyDescriptor,Z=n((d,e,a,r)=>{for(var s=Qi(e,a),i=d.length-1,p;i>=0;i--)(p=d[i])&&(s=p(e,a,s)||s);return s&&Vi(e,a,s),s},"__decorateClass$3");const Zo=class Zo extends g{constructor(){super(...arguments),this.specification=new te,this.span=$.span.attrs({className:"pd-number"})``,this.close=$.span.attrs({className:"pd-close"})``}get number(){const e=j.copy(this.text).trim();return e===""?NaN:Number(e)}note(){const e=this.span,a=this.close,r=o(w),s=o(x),i=this.chapter?.mention?.identifier;return t.jsxs(t.Fragment,{children:[t.jsx(e,{children:this.number}),i===void 0?void 0:t.jsx(a,{children:t.jsxs(r,{children:[t.jsx(s,{children:i}),"×"]})})]})}defines(e){e.classes.add(this,"pa-concept")}erase(e){e.classes.revert(this)}};n(Zo,"$Concept");let H=Zo;const Uo=class Uo extends g{constructor(){super(...arguments),this.specification=new ze}defines(e){e.classes.add(this,"pa-designed")}erase(e){e.classes.revert(this)}};n(Uo,"$Designed");let $s=Uo;const Xo=class Xo extends g{constructor(){super(...arguments),this.specification=new ze}defines(e){e.classes.add(this,"pa-decided")}erase(e){e.classes.revert(this)}};n(Xo,"$Decided");let ms=Xo;const Ko=class Ko extends g{constructor(){super(...arguments),this.specification=new oe}defines(e){e.classes.add(this,"pa-desk")}erase(e){e.classes.revert(this)}};n(Ko,"$Desk");let ca=Ko;const Vo=class Vo extends g{constructor(){super(...arguments),this.specification=new oe}defines(e){e.classes.add(this,"pa-phone")}erase(e){e.classes.revert(this)}};n(Vo,"$Phone");let la=Vo;const Qo=class Qo extends g{constructor(){super(...arguments),this.specification=new oe}defines(e){e.classes.add(this,"pa-thumbnail")}erase(e){e.classes.revert(this)}};n(Qo,"$Thumbnail");let je=Qo;const Jo=class Jo extends g{constructor(){super(...arguments),this.specification=new re}defines(e){e.classes.add(this,"pa-precedent")}erase(e){e.classes.revert(this)}};n(Jo,"$Precedent");let ks=Jo;const So=class So extends g{constructor(){super(...arguments),this.specification=new re}defines(e){e.classes.add(this,"pa-source")}erase(e){e.classes.revert(this)}};n(So,"$Source");let xs=So;const er=class er extends g{constructor(){super(...arguments),this.specification=new ha}defines(e){e.classes.add(this,"pa-where")}erase(e){e.classes.revert(this)}};n(er,"$Where");let vs=er;const ar=class ar extends b{$isASection(e){c(e instanceof I,"a concept is a section, and this is not one")}$givenItsNumber(e){c(Number.isInteger(e.annotations.expressed(H)?.number),"a concept is given its number, and this one was given something else")}$photographedThreeWays(e){const a=e.text.find(f);c([ca,la,je].every(r=>a.some(s=>s.is(r))),"a concept is photographed at a desk, at a phone, and small, and this one is missing a photograph")}};n(ar,"ConceptSpecification");let te=ar;Z([l("a concept is a section")],te.prototype,"$isASection");Z([l("a concept is given its number")],te.prototype,"$givenItsNumber");Z([l("a concept is photographed at a desk, at a phone, and small")],te.prototype,"$photographedThreeWays");const sr=class sr extends b{$isAParagraphHoldingOneImage(e){c(e instanceof f&&e.text.find(Ns).length===1,"a photograph is a paragraph that holds one image, and this is not one")}};n(sr,"PhotographSpecification");let oe=sr;Z([l("a photograph is a paragraph that holds one image")],oe.prototype,"$isAParagraphHoldingOneImage");const tr=class tr extends b{$saidOfAParagraphOfAConcept(e){c(e instanceof f&&e.parent instanceof $n&&e.parent.is(H),"this is said of a paragraph of a concept, and here it is said of something else")}};n(tr,"OfAConceptSpecification");let re=tr;Z([l("this is said of a paragraph of a concept")],re.prototype,"$saidOfAParagraphOfAConcept");const or=class or extends re{$refersToWhereItIsBuilt(e){c(e.text.find(v).some(a=>a.is(le)),"a where refers to where the concept is built, and this one refers nowhere")}};n(or,"WhereSpecification");let ha=or;Z([l("a where refers to where the concept is built")],ha.prototype,"$refersToWhereItIsBuilt");const rr=class rr extends b{$saidOfAConcept(e){c(e.is(H),"this is said of a concept, and here it is said of something else")}};n(rr,"OfAConceptSectionSpecification");let ze=rr;Z([l("this is said of a concept")],ze.prototype,"$saidOfAConcept");const Lp=o(H),_p=o($s),Rp=o(ms),Ep=o(ca),Gp=o(la),qp=o(je),Yp=o(ks),Zp=o(xs),Up=o(vs);var Ji=Object.defineProperty,Si=Object.getOwnPropertyDescriptor,en=n((d,e,a,r)=>{for(var s=Si(e,a),i=d.length-1,p;i>=0;i--)(p=d[i])&&(s=p(e,a,s)||s);return s&&Ji(e,a,s),s},"__decorateClass$2");const ep=n((d,e)=>d.chapters.flatMap(a=>d.sections(a)).find(a=>a.is(H)&&a.mention?.identifier===e),"conceptAt"),ap=n(d=>{const e=d.text.find(f).find(a=>a.is(je))?.text.find(Ns)[0];return e===void 0?"":e.contents||j.copy(e.text)},"thumbnailOf"),nr=class nr extends A{constructor(){super(...arguments),this.specification=new ga,this.themeProvider=!0,this.style=$.div`
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
    `}get chapter(){return this.parent}get concepts(){return this.book.sections(this.chapter).filter(e=>e.is(H))}get open(){return this.concepts.find(e=>e.mention?.identifier===this.book?.$bookmark)}defines(e){super.defines(e),e.classes.add(this,"pa-gallery");const a=this.open,r=this.concepts.find(s=>[...s.classes].includes("pa-open"));r!==a&&(r?.classes.revert(this),a?.classes.add(this,"pa-open"))}erase(e){super.erase(e),e.classes.revert(this)}};n(nr,"$Gallery");let fa=nr;const ir=class ir extends A{constructor(){super(...arguments),this.specification=new ba,this.strip=$.div`
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
    `}get paragraph(){return this.parent}get places(){return this.paragraph.text.find(v).map(e=>e.annotations.expressed(le)?.identifier).filter(e=>e!==void 0)}get concepts(){const e=this.book;return[...new Set(this.places.map(a=>ep(e,a)).filter(a=>a!==void 0))]}get chosen(){const e=this.paragraph.parent?.text.find(f).filter(a=>a.is(oa))??[];return new Set(e.flatMap(a=>a.text.find(v).map(r=>r.annotations.expressed(le)?.identifier)).filter(a=>a!==void 0))}$Strip(...e){this.$Format(...e);const a=this.strip,r=o(w),s=o(x);this.style=({className:i,children:p})=>{const u=this.chosen;return t.jsxs(a,{className:`${i??""} pd-strip`.trim(),children:[this.concepts.map((m,C)=>{const de=m.mention.identifier;return t.jsxs(r,{children:[t.jsx(s,{children:de}),t.jsxs("span",{className:`pd-thumb${u.has(de)?" pd-chosen":""}`,children:[t.jsx("img",{src:ap(m),alt:""}),t.jsxs("span",{className:"pd-name",children:[t.jsx("span",{className:"pd-number",children:m.annotations.expressed(H)?.number}),m.canonical?.name]})]})]},C)}),t.jsx("span",{className:"pd-said",children:p})]})}}defines(e){super.defines(e),e.classes.add(this,"pa-strip")}erase(e){super.erase(e),e.classes.revert(this)}};n(ir,"$Strip");let ws=ir;const pr=class pr extends b{$isAChapter(e){c(e instanceof k,"a gallery is a chapter, and this is not one")}};n(pr,"GallerySpecification");let ga=pr;en([l("a gallery is a chapter")],ga.prototype,"$isAChapter");const dr=class dr extends b{$isAParagraphReferringToConcepts(e){c(e instanceof f&&e.text.find(v).some(a=>a.annotations.expressed(le)!==void 0),"a strip is a paragraph that refers to concepts, and this one refers to nothing")}};n(dr,"StripSpecification");let ba=dr;en([l("a strip is a paragraph that refers to concepts")],ba.prototype,"$isAParagraphReferringToConcepts");const Xp=o(fa),Kp=o(ws),cr=class cr extends _{constructor(){super(...arguments),this.accent="#23407a",this.ink="#343c4a",this.heading="#1a1f36",this.soft="#727d8c",this.faint="#9ea8b5",this.line="#e4e9f2",this.paper="#fdfcfa",this.side="#f8f9fb",this.holdsColumn="256px",this.barHeight="52px",this.card="12.5rem",this.shadow="0 1px 2px rgba(43, 54, 60, 0.05), 0 6px 18px rgba(43, 54, 60, 0.05)",this.lift="0 2px 4px rgba(43, 54, 60, 0.06), 0 14px 32px rgba(43, 54, 60, 0.10)",this.barLight="#fcfcfd",this.barMid="#f8f9fc",this.barDeep="#f2f4f9",this.barShadow="0 1px 0 rgba(43, 54, 60, 0.05)",this.sideLight="#fafbfc",this.sideDeep="#f2f4f8",this.codeGround="#f6f7fa",this.hairline="1px",this.stroke="2px",this.rise="-1px",this.gloss="inset 0 1px 0 rgba(255, 255, 255, 0.7)",this.ring="0 0 0 2px color-mix(in oklab, var(--band) 80%, white)",this.decisionShadow="0 1px 2px rgba(43, 54, 60, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.6)"}parts(){return[...super.parts(),this.backdrop(),this.bands(),this.guide(),this.story(),this.said(),this.small()]}backdrop(){return h`
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
        `}};n(cr,"$Exhibition");let ys=cr;const sp=o(ys);var tp=Object.defineProperty,op=Object.getOwnPropertyDescriptor,qs=n((d,e,a,r)=>{for(var s=op(e,a),i=d.length-1,p;i>=0;i--)(p=d[i])&&(s=p(e,a,s)||s);return s&&tp(e,a,s),s},"__decorateClass$1");const lr=class lr extends W{constructor(){super(...arguments),this.specification=new ne}get designs(){return this.chapters.filter(e=>e.is(y))}get open(){return super.open??this.body[0]}head(){}switches(){}$Bound(){const e=o(ci),a=o(di),r=o(li),s=this.designs;for(const i of s)i.annotations.add(this,t.jsx(e,{})),i.text.add(this,t.jsx(r,{}));for(const i of this.table?.annotations.expressed(Q)?.entries??[]){const p=T(i)?.identifier,u=p===void 0?void 0:this.chapterAt(p);u===void 0||!s.includes(u)||i.annotations.add(this,t.jsx(a,{number:s.indexOf(u)+1}))}super.$Bound()}};n(lr,"$Portfolio");let js=lr;const hr=class hr extends D{$everyChapterInAPart(e){c(e.chapters.every(a=>a.part!==void 0),"every chapter of a portfolio is in a part, and one here is in none")}$showsEveryDesign(e){c(e.designs.every(a=>va(a,f).some(r=>r.is(me))),"a portfolio shows every design it holds as built, in a paragraph said to be the exhibit, and one here has none")}$keepsAGallery(e){c(e.chapters.some(a=>a.is(fa)),"a portfolio keeps its sketches in a gallery, and this one has none")}};n(hr,"PortfolioSpecification");let ne=hr;qs([l("every chapter of a portfolio is in a part")],ne.prototype,"$everyChapterInAPart");qs([l("a portfolio shows every design it holds as built")],ne.prototype,"$showsEveryDesign");qs([l("a portfolio keeps its sketches in a gallery")],ne.prototype,"$keepsAGallery");const an=o(js);o(an,Pe)(sp);o(an,pe)(Ae);const fr=class fr extends J{};n(fr,"$PortfolioCover");let zs=fr;const Vp=o(zs),gr=class gr extends _{constructor(){super(...arguments),this.prose="'Source Serif 4', Georgia, serif",this.ink="#343c4a",this.heading="#1a1f36",this.soft="#727d8c",this.faint="#9ea8b5",this.line="#e4e9f2",this.paper="#ffffff",this.side="#f8f9fb",this.holdsColumn="240px",this.barHeight="52px",this.shadow="0 1px 2px rgba(43, 54, 60, 0.05), 0 6px 18px rgba(43, 54, 60, 0.05)",this.lift="0 2px 4px rgba(43, 54, 60, 0.06), 0 14px 32px rgba(43, 54, 60, 0.10)",this.barLight="#fcfcfd",this.barMid="#f8f9fc",this.barDeep="#f2f4f9",this.barShadow="0 1px 0 rgba(43, 54, 60, 0.05)",this.sideLight="#fafbfc",this.sideDeep="#f2f4f8",this.hairline="1px",this.stroke="2px"}parts(){return[...super.parts(),this.bands(),this.guide(),this.order(),this.surface(),this.entries(),this.small()]}bands(){return h`
            .pd-book .pd-library { position: relative; background: linear-gradient(180deg, ${({theme:e})=>e.barLight} 0%, ${({theme:e})=>e.barMid} 60%, ${({theme:e})=>e.barDeep} 100%); border-block-end: thin solid ${({theme:e})=>e.line}; box-shadow: ${({theme:e})=>e.barShadow}; }
            .pd-book .pd-library::after { content: ''; position: absolute; left: 0; right: 0; bottom: calc(-1 * ${({theme:e})=>e.hairline}); height: ${({theme:e})=>e.stroke}; background: linear-gradient(90deg, var(--band) 0 40%, var(--ground) 40% 70%, var(--foot) 70%); opacity: 0.75; }
            .pd-book .pd-head { display: none; }
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
            .pd-book .pd-pages { display: flex; flex-direction: column; padding: ${({theme:e})=>e.space} calc(${({theme:e})=>e.space} * 1.6667) calc(${({theme:e})=>e.space} * 5); background: radial-gradient(900px 520px at 18% -10%, color-mix(in oklab, var(--foot) 18%, white) 0%, transparent 62%), linear-gradient(135deg, color-mix(in oklab, var(--foot) 10%, white) 0%, ${({theme:e})=>e.paper} 50%, color-mix(in oklab, var(--foot) 5%, white) 100%); }
        `}entries(){return h`
            .pd-book .pd-pages .pd-chapter.pa-page { box-sizing: border-box; position: relative; width: 100%; max-width: calc(${({theme:e})=>e.space} * 33.75); margin: 0 auto; padding: calc(${({theme:e})=>e.space} * 1.6667) 0 calc(${({theme:e})=>e.space} * 2) calc(${({theme:e})=>e.space} * 7.9167); background: linear-gradient(90deg, transparent, ${({theme:e})=>e.line} 12% 88%, transparent) top / 100% ${({theme:e})=>e.hairline} no-repeat; }
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
        `}};n(gr,"$Typeset");let Os=gr;const rp=o(Os);var np=Object.defineProperty,ip=Object.getOwnPropertyDescriptor,sn=n((d,e,a,r)=>{for(var s=ip(e,a),i=d.length-1,p;i>=0;i--)(p=d[i])&&(s=p(e,a,s)||s);return s&&np(e,a,s),s},"__decorateClass");const X=n(d=>d.annotations.expressed(q)?.date?.date??"","dayOf"),jr=n(d=>{const[e,a]=X(d).split("-");return e===void 0||a===void 0?"":new Date(Date.UTC(Number(e),Number(a)-1,1)).toLocaleString("en-GB",{month:"long",year:"numeric",timeZone:"UTC"})},"monthOf"),br=class br extends g{constructor(){super(...arguments),this.specification=new z}defines(e){e.classes.add(this,"pa-newest-first")}erase(e){e.classes.revert(this)}};n(br,"$NewestFirst");let ua=br;const pp=o(ua),tn=pp,ur=class ur extends f{write(){const e=o(Ws);return t.jsx(e,{annotation:tn,children:"newest first"})}$Define(){super.$Define(),this.classes.add(this,"pd-entry-order")}};n(ur,"$EntryOrder");let Ps=ur;const $r=class $r extends v{write(){return String(this.book.entries.indexOf(this.chapter)+1)}$Define(){super.$Define(),this.classes.add(this,"pd-entry-number")}};n($r,"$EntryNumber");let Ds=$r;const mr=class mr extends v{write(){const[e,a,r]=X(this.$entry).split("-");if(!(e===void 0||a===void 0||r===void 0))return new Date(Date.UTC(Number(e),Number(a)-1,Number(r.slice(0,2)))).toLocaleString("en-GB",{day:"numeric",month:"short",timeZone:"UTC"})}$Define(){super.$Define(),this.classes.add(this,"pd-entry-day")}};n(mr,"$EntryDay");let As=mr;const kr=class kr extends Ve{paging(){return h``}};n(kr,"$JournalLayout");let Cs=kr;const dp=o(Ps),cp=o(Ds),lp=o(As),hp=o(Cs),fp=dp,gp=cp,bp=lp,xr=class xr extends W{constructor(){super(...arguments),this.specification=new Oe}get entries(){return this.body}get latest(){return[...this.entries].sort((e,a)=>X(a).localeCompare(X(e)))[0]}get pages(){const e=[...this.entries].sort((a,r)=>X(a).localeCompare(X(r)));return this.is(ua)?e.reverse():e}get open(){return super.open??this.latest}head(){}switches(){}turns(){}$Bound(){const e=o(gp);for(const s of this.entries)s.text.add(this,t.jsx(e,{}));const a=o(bp);for(const s of this.table?.annotations.expressed(Q)?.entries??[]){const i=T(s)?.identifier,p=i===void 0?void 0:this.chapterAt(i);p===void 0||!this.entries.includes(p)||s.text.add(this,t.jsx(a,{entry:p}))}const r=o(fp);this.table?.text.add(this,t.jsx(r,{})),this.$is=[tn],super.$Bound()}};n(xr,"$Journal");let Is=xr;const vr=class vr extends D{$everyEntryIsDated(e){const a=e.entries.find(r=>!r.is(q));c(a===void 0,`every entry of a journal is dated, and "${a?.title?.name}" is not`)}$everyEntrySaysItsMonth(e){const a=e.entries.find(r=>r.part?.name!==jr(r));c(a===void 0,a===void 0?"":`every entry of a journal says the month of its date as its part, and "${a.title?.name}" says "${a.part?.name??"none"}" for ${jr(a)}`)}};n(vr,"JournalSpecification");let Oe=vr;sn([l("every entry of a journal is dated")],Oe.prototype,"$everyEntryIsDated");sn([l("every entry of a journal says the month of its date as its part")],Oe.prototype,"$everyEntrySaysItsMonth");const Ys=o(Is);o(Ys,Pe)(rp);o(Ys,pe)(Ae);o(Ys,Qr)(hp);const wr=class wr extends J{};n(wr,"$JournalCover");let Ms=wr;const up=o(Ms),$p=n(()=>t.jsxs(Ar,{children:[t.jsx(gi,{}),t.jsx(Xr,{ground:"#eef5f6",band:"#c3e3e6",bandInk:"#1c565c",foot:"#8db9bd",footInk:"#153e43",ink:"#1f5a60"}),t.jsx(Kr,{x:"-46",y:"-13"}),t.jsx(Cr,{children:"[Dougs Library](/dougs-library/)"}),t.jsx(Ir,{children:"[Doug](/dougs-story/)"}),t.jsx(Mr,{children:"[Library](/dougs-library/)"}),t.jsx(Tr,{children:"[The Library](/dougs-library/)"}),t.jsxs(Nr,{children:[t.jsx(Ur,{}),t.jsx(Fr,{children:`<svg viewBox="0 0 64 64" class="pd-illustration"><path class="light" d="M9 7h46v50H9z"/><path d="M9 7h46v50H9zM9 24h46M9 41h46"/><path class="fill" d="M13 11h5v13h-5zM20 9h4v15h-4zM26 13h6v11h-6zM34 10h4v14h-4zM40 14h6v10h-6z"/><path d="M48 24l4-12 3 1-4 11z"/><path class="fill" d="M13 28h4v13h-4zM19 30h7v11h-7zM28 27h4v14h-4zM34 31h5v10h-5zM41 28h6v13h-6zM49 29h3v12h-3z"/><path class="fill" d="M13 46h6v11h-6zM21 44h4v13h-4zM27 47h8v10h-8zM37 45h4v12h-4zM43 48h6v9h-6z"/><path d="M50 57l3-11 3 1-3 10z"/></svg>
`})]})]}),"LibraryCover"),Qp=n(()=>t.jsxs(Ar,{children:[t.jsx(up,{}),t.jsx(mn,{}),t.jsx(bi,{children:$p()}),t.jsx(Xr,{ground:"#f5eedf",band:"#d9c3a3",bandInk:"#4a3626",foot:"#a3b6cc",footInk:"#2a4262",ink:"#2f4a6a"}),t.jsx(Kr,{x:"-54",y:"-33"}),t.jsx(Cr,{children:"[Dougs Story](/dougs-story/)"}),t.jsx(Ir,{children:"[Doug](/dougs-story/)"}),t.jsx(Mr,{children:"[Library](/dougs-library/)"}),t.jsx(Tr,{children:"[The Librarian](/dougs-story/)"}),t.jsxs(Nr,{children:[t.jsx(Ur,{}),t.jsx(Fr,{children:`<svg viewBox="0 0 64 64" class="pd-illustration"><path class="light" d="M8 13h23v38H8zM33 13h23v38H33z"/><path d="M8 13h23v38H8zM33 13h23v38H33z"/><path d="M13 21h13M13 27h13M13 33h9M38 21h13M38 27h13M38 33h13M38 39h8"/><path class="fill" d="M15 55 45 25l4 4-30 30-6 2z"/><path d="M15 55 45 25l4 4-30 30-6 2zM43 27l4 4M17 53l2 2"/></svg>
`})]})]}),"Cover");export{ps as $,Tp as A,wp as B,Qp as C,Wp as D,Pp as E,Ip as F,Xp as G,jp as I,vp as K,$p as L,Hp as P,Np as Q,yp as S,qp as T,bi as V,Up as W,zp as a,Mp as b,js as c,Fp as d,Kp as e,Bp as f,Op as g,Ep as h,Gp as i,Lp as j,_p as k,Yp as l,Zp as m,Rp as n,Vp as o,Xr as p,Kr as q,Ur as r,Is as s,Dp as t,as as u,Cp as v,xp as w,Ap as x};
