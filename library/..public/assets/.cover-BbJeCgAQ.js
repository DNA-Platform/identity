var _r=Object.defineProperty;var r=(d,e)=>_r(d,"name",{value:e,configurable:!0});import{$ as o,q as Rr,s as m,k as h,r as f,t as Os,W as j,R as x,j as s,u as dr,n as g,v as b,w as c,x as v,y as l,m as A,z as y,B as k,E as ne,F as ga,f as Er,G as C,J as cr,K as Gr,N as F,O as pr,Q as Ps,U as qr,V as ie,X as I,Y as pe,Z as Yr,_ as Jr,a0 as ka,a1 as Xr,a2 as Zr,a3 as Kr,o as ba,a4 as lr,l as hr,a5 as Vr,a6 as Qr,a7 as Ur,C as fr,T as gr,g as br,h as ur,a8 as mr,a as $r,i as kr,a9 as Sr}from"./index-CNTkUlJO.js";const Hs=class Hs extends Rr{constructor(){super(...arguments),this.font="'Inter', system-ui, sans-serif",this.prose="'Inter', system-ui, sans-serif",this.mono="'JetBrains Mono', ui-monospace, monospace",this.size="0.875rem",this.leading="1.6",this.measure="44rem",this.spreadColumn="15.5rem",this.space="1.5rem",this.holdsColumn="240px",this.barHeight="50px",this.beat="320ms",this.narrow="48rem",this.phoneWidth="390px",this.colour="#4e9eb9",this.accent="#166178",this.bar="#0c1b1f",this.barInk="#ffffff",this.barDim="#a9bcc1",this.barOn="rgba(255, 255, 255, 0.11)",this.barLine="#1d3339",this.mark="#c8f4fb",this.side="#e3f5fa",this.sideInk="#10252c",this.sideDim="#516770",this.sideOn="#ffffff",this.sideLine="#cbe6ee",this.night="#0c1b1f",this.deep="#14323c",this.blue="#166178",this.sea="#4e9eb9",this.sky="#8fc8dc",this.opal="#c8f4fb",this.pale="#e3f5fa",this.mist="#f1f7f9",this.white="#ffffff",this.ink="#10252c",this.soft="#516770",this.line="#dbe7ec",this.me="#e8590c",this.wash="linear-gradient(105deg, #e2f6fb 0%, #ecf0fd 52%, #fae9f4 100%)",this.serif="'Source Serif 4', Georgia, serif",this.between="'Source Sans 3', 'Inter', system-ui, sans-serif",this.bookPaper="#fbf9f3",this.bookInk="#29251d",this.heading="#10252c",this.capital="#166178",this.lit="#166178",this.faint="#8792a2",this.paper="#ffffff",this.panel="#f1f7f9",this.rule="#dbe7ec",this.edge="transparent",this.tint="#e3f5fa",this.dusk="#14323c",this.glow="#cfe6e3",this.dim="#4f7672",this.keyword="#8ad7ff",this.string="#ffd48a",this.type="#9be3d6",this.comment="#5f8a86",this.haze="#a9bcc1",this.glass="rgba(255, 255, 255, 0.62)",this.binding="linear-gradient(160deg, #16303a, #0c1b1f)",this.spine="inset 5px 0 0 rgba(0, 0, 0, 0.14), inset 6px 0 0 rgba(255, 255, 255, 0.12), 0 10px 20px -10px rgba(0, 0, 0, 0.45)",this.shadow="0 0.75rem 1.4rem -0.9rem rgba(12, 27, 31, 0.55)",this.volume="11.5rem",this.cover="8.25rem",this.card="18rem",this.barLight="#ffffff",this.barMid="#f1f7f9",this.barDeep="#e3f5fa",this.barShadow="none",this.sideLight="#ffffff",this.sideDeep="#e3f5fa",this.codeGround="#f1f7f9",this.hairline="1px",this.stroke="2px",this.rise="-1px",this.gloss="none",this.ring="0 0 0 2px #c8f4fb",this.decisionShadow="none",this.photo="7rem",this.radius="0.375rem",this.barTint="#ffffff",this.skyInk="#166178",this.lift="inset 5px 0 0 rgba(0, 0, 0, 0.14), inset 6px 0 0 rgba(255, 255, 255, 0.12), 0 14px 24px -12px rgba(0, 0, 0, 0.5)",this.openSpine="inset 7px 0 0 rgba(0, 0, 0, 0.14), inset 8px 0 0 rgba(255, 255, 255, 0.12), 0 12px 22px -14px rgba(0, 0, 0, 0.5)",this.style=m.div`${this.parts()}`}parts(){return[this.page(),this.writing(),this.links(),this.figures(),this.listings(),this.switches(),this.turns(),this.illustrations(),this.marks(),this.library(),this.head(),this.holds(),this.context(),this.tones()]}page(){return h`
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
        `}};r(Hs,"$LibraryBookTheme");let X=Hs;const en=o(X);var an=Object.defineProperty,sn=Object.getOwnPropertyDescriptor,tn=r((d,e,a,n)=>{for(var t=sn(e,a),i=d.length-1,p;i>=0;i--)(p=d[i])&&(t=p(e,a,t)||t);return t&&an(e,a,t),t},"__decorateClass$j");const Bs=class Bs extends g{constructor(){super(...arguments),this.specification=new Ae}defines(e){e.classes.add(this,"pa-label")}erase(e){e.classes.revert(this)}};r(Bs,"$Label");let xa=Bs;const Ls=class Ls extends b{$saidOfAWord(e){c(e instanceof v,"label is said of a word, and this is not one")}};r(Ls,"LabelSpecification");let Ae=Ls;tn([l("label is said of a word")],Ae.prototype,"$saidOfAWord");const As=o(xa),_s=class _s extends f{get cover(){return this.$cover??this.book?.cover}write(){const e=this.cover.annotations.expressed(Os),a=o(j),n=o(As),t=o(x);return s.jsxs(s.Fragment,{children:[s.jsxs(a,{children:[s.jsx(n,{}),"by"]}),s.jsxs(a,{children:[s.jsx(t,{children:e.means.identifier}),e.name]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-byline")}};r(_s,"$Byline");let va=_s;const Rs=class Rs extends f{get cover(){return this.$cover??this.book?.cover}write(){const e=this.cover.annotations.expressed(dr),a=o(j),n=o(As),t=o(x);return s.jsxs(s.Fragment,{children:[s.jsxs(a,{children:[s.jsx(n,{}),"subject"]}),s.jsxs(a,{children:[s.jsx(t,{children:e.means.identifier}),e.name]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-subject-line")}};r(Rs,"$SubjectLine");let wa=Rs;const xr=o(va),on=o(wa);var rn=Object.defineProperty,nn=Object.getOwnPropertyDescriptor,pn=r((d,e,a,n)=>{for(var t=nn(e,a),i=d.length-1,p;i>=0;i--)(p=d[i])&&(t=p(e,a,t)||t);return t&&rn(e,a,t),t},"__decorateClass$i");const Es=class Es extends b{$saidOfABook(e){c(e instanceof B,"this is said of a book of this library, and here it is said of something else")}};r(Es,"OfABookSpecification");let P=Es;pn([l("this is said of a book of this library")],P.prototype,"$saidOfABook");const Gs=class Gs extends v{get on(){return[this.book.$is].flat().includes(this.$annotation)}$Switch(...e){this.$Writing(...e),this.containers.replace(this,"span","button")}container(e){return super.container({type:"button","aria-pressed":this.on,onClick:r(()=>this.press(),"onClick"),...e})}press(){const e=this.book,a=[e.$is].flat();e.$is=this.on?a.filter(n=>n!==this.$annotation):[this.$annotation,...a]}$Define(){super.$Define(),this.classes.add(this,"pd-switch")}};r(Gs,"$Switch");let de=Gs;const qs=class qs extends de{press(){const e=this.book,a=[e.$is].flat().filter(n=>!this.$family.includes(n));e.$is=[this.$annotation,...a]}};r(qs,"$Tab");let ce=qs;const vr=o(de),dn=o(ce);var cn=Object.defineProperty,ln=Object.getOwnPropertyDescriptor,wr=r((d,e,a,n)=>{for(var t=ln(e,a),i=d.length-1,p;i>=0;i--)(p=d[i])&&(t=p(e,a,t)||t);return t&&cn(e,a,t),t},"__decorateClass$h");const Ys=class Ys extends A{constructor(){super(...arguments),this.specification=new le,this.style=m.div`
        .pa-coloured { --colour: ${e=>e.$colour}; }
    `}get colour(){return y.copy(this.text).trim()}$Coloured(...e){this.$Format(...e);const a=this.style;this._painted=n=>s.jsx(a,{$colour:this.colour,...n})}defines(e){e.classes.add(this,"pa-coloured"),e.containers.add(this,this._painted)}erase(e){e.classes.revert(this),e.containers.revert(this)}};r(Ys,"$Coloured");let _=Ys;const Js=class Js extends b{$saidOfAChapterOrAParagraph(e){c(e instanceof k||e instanceof f,"coloured is said of a chapter or a paragraph, and this is neither")}$givenItsColour(e){c(/^#[0-9a-f]{6}$/iu.test(e.annotations.expressed(_)?.colour??""),"coloured is given its colour as six hex digits, and this one was given something else")}};r(Js,"ColouredSpecification");let le=Js;wr([l("coloured is said of a chapter or a paragraph")],le.prototype,"$saidOfAChapterOrAParagraph");wr([l("coloured is given its colour")],le.prototype,"$givenItsColour");const Ji=o(_);var hn=Object.defineProperty,fn=Object.getOwnPropertyDescriptor,Ds=r((d,e,a,n)=>{for(var t=fn(e,a),i=d.length-1,p;i>=0;i--)(p=d[i])&&(t=p(e,a,t)||t);return t&&hn(e,a,t),t},"__decorateClass$g");const Xs=class Xs extends A{constructor(){super(...arguments),this.specification=new Z}get identifier(){return ne.reference(y.copy(this.text))?.identifier??""}get name(){return ne.reference(y.copy(this.text))?.name??""}get entry(){return this.book?.chapterAt(this.identifier)}get drawing(){const e=this.entry?.text.find(f).flatMap(a=>a.text.find(ga))[0];return e===void 0?"":y.copy(e.text).trim()}get colour(){return this.entry?.annotations.expressed(_)?.colour??""}$Keyed(...e){this.$Format(...e);const a=o(gn);this._layer=n=>s.jsxs("div",{...n,children:[s.jsx(a,{keyed:this}),n.children]})}defines(e){e.classes.add(this,"pa-keyed"),e.containers.add(this,this._layer)}erase(e){e.classes.revert(this),e.containers.revert(this)}};r(Xs,"$Keyed");let W=Xs;const Zs=class Zs extends v{constructor(){super(...arguments),this.style=m.span`
        --colour: ${e=>e.$colour};
    `}$Icon(...e){this.$Writing(...e);const a=this.style;this._painted=n=>s.jsx(a,{$colour:this.$keyed?.colour??"",...n}),this.containers.replace(this,"span",this._painted)}write(){return s.jsx("span",{className:"pd-drawing",role:"img","aria-label":this.$keyed?.name,dangerouslySetInnerHTML:{__html:this.$keyed?.drawing??""}})}$Define(){super.$Define(),this.classes.add(this,"pd-icon")}};r(Zs,"$Icon");let ya=Zs;const Ks=class Ks extends b{$saidOfAChapter(e){c(e instanceof k,"keyed is said of a chapter, and this is not one")}$namesAnEntry(e){const a=e.annotations.expressed(W)?.entry;c(a!==void 0&&a.annotations.expressed(W)?.entry===a,"keyed names an entry of the key, a chapter of this book keyed as itself, and this one names something else")}$entryHoldsItsDrawingAndColour(e){const a=e.annotations.expressed(W)?.entry;a!==void 0&&c(a.text.find(f).flatMap(n=>n.text.find(ga)).length===1&&a.is(_),"an entry of the key holds one drawing and its colour, and this one holds something else")}};r(Ks,"KeyedSpecification");let Z=Ks;Ds([l("keyed is said of a chapter")],Z.prototype,"$saidOfAChapter");Ds([l("keyed names an entry of the key")],Z.prototype,"$namesAnEntry");Ds([l("an entry of the key holds one drawing and its colour")],Z.prototype,"$entryHoldsItsDrawingAndColour");const Xi=o(W),yr=o(ya),gn=yr;var bn=Object.defineProperty,un=Object.getOwnPropertyDescriptor,mn=r((d,e,a,n)=>{for(var t=un(e,a),i=d.length-1,p;i>=0;i--)(p=d[i])&&(t=p(e,a,t)||t);return t&&bn(e,a,t),t},"__decorateClass$f");const $n={tsx:"typescript",ts:"typescript",mjs:"javascript",js:"javascript",css:"css",html:"xml",svg:"xml",json:"json",md:"markdown"},kn='<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"><path d="M6 4.5 3.5 8 6 11.5M10 4.5 12.5 8 10 11.5"/></svg>',oe=r(d=>`${d.$identifier}${d.$type}`,"fileNameOf"),xn=r(d=>d===void 0?[]:y.copy(d.text).split(`
`),"fileLinesOf"),jr=r(d=>d?.chapter?.annotations.expressed(z),"spreadOf"),Vs=class Vs extends f{constructor(){super(...arguments),this.$family=[]}get name(){return this.$file===void 0?"":oe(this.$file)}get language(){return $n[(this.$file?.$type??"").replace(/^\./u,"")]??""}get spread(){return jr(this.$file)}get chapter(){return this.$file?.chapter??super.chapter}$FileListing(...e){this.$Writing(...e),this.containers.replace(this,"span","div")}container(e){return super.container({onClick:r(()=>this.press(),"onClick"),...e})}press(){if(this.$filePanelState===void 0)return;const e=this.book,a=[e.$is].flat().filter(n=>!this.$family.includes(n));e.$is=[this.$filePanelState,...a]}write(){const e=o(j),a=o(Er);return s.jsxs(s.Fragment,{children:[s.jsx(e,{children:this.name}),s.jsx(a,{identifier:this.$file?.$identifier,type:this.$file?.$type,language:this.language,numbered:!0})]})}$Define(){super.$Define(),this.classes.add(this,"pd-file-listing");const e=o(yn);this.annotations.add(this,s.jsx(e,{}))}};r(Vs,"$FileListing");let De=Vs;const Qs=class Qs extends g{constructor(){super(...arguments),this.specification=new Ce}defines(e){const a=e;a.$file!==void 0&&a.spread?.openFile===a.$file&&e.classes.add(this,"pa-open")}erase(e){e.classes.revert(this)}};r(Qs,"$OpenListing");let ja=Qs;const Us=class Us extends b{$isAFileListing(e){c(e instanceof De,"an open listing is a file listing, and this is not one")}};r(Us,"OpenListingSpecification");let Ce=Us;mn([l("an open listing is a file listing")],Ce.prototype,"$isAFileListing");const Ss=class Ss extends ce{constructor(){super(...arguments),this.$skeleton=!1,this.style=m.button`
        --colour: ${e=>e.$colour};
    `}get on(){const e=this.$file?.chapter;return e!==void 0&&e===this.book.open&&this.spread?.openFile===this.$file}get name(){return this.$file===void 0?"":oe(this.$file)}get spread(){return jr(this.$file)}get colour(){return this.$file?.chapter?.annotations.expressed(W)?.colour??""}get lines(){return xn(this.$file)}get chapter(){return this.$file?.chapter??super.chapter}$FileTab(...e){this.$Switch(...e),this.containers.replace(this,"button",this.style)}container(e){return super.container({$colour:this.colour,...e})}press(){const e=this.spread;e!==void 0&&(e.$openFile=this.$file),this.$annotation!==void 0&&super.press()}write(){return s.jsxs(s.Fragment,{children:[s.jsx("span",{className:"pd-drawing",dangerouslySetInnerHTML:{__html:kn}}),s.jsx("span",{className:"pd-tab-name",children:this.name}),this.$skeleton?s.jsx("span",{className:"pd-skeleton",children:this.lines.slice(0,14).map((e,a)=>s.jsx("i",{style:{width:`${Math.max(12,Math.min(100,e.length*2.2))}%`}},a))}):void 0]})}$Define(){super.$Define(),this.classes.add(this,"pd-file-tab")}};r(Ss,"$FileTab");let za=Ss;const vn=o(De),wn=o(ja),Cs=o(za),yn=wn;var jn=Object.defineProperty,zn=Object.getOwnPropertyDescriptor,On=r((d,e,a,n)=>{for(var t=zn(e,a),i=d.length-1,p;i>=0;i--)(p=d[i])&&(t=p(e,a,t)||t);return t&&jn(e,a,t),t},"__decorateClass$e");const la=class la extends g{constructor(){super(...arguments),this.specification=new P}defines(e){for(const a of e.annotations.after(this))a instanceof la&&e.annotations.express(a,!1);e.classes.add(this,"pa-file-panel-state")}erase(e){e.classes.revert(this)}};r(la,"$FilePanelState");let K=la;const et=class et extends K{defines(e){super.defines(e),e.classes.add(this,"pa-code-forward")}};r(et,"$CodeForward");let Oa=et;const at=class at extends K{defines(e){super.defines(e),e.classes.add(this,"pa-words-forward")}};r(at,"$WordsForward");let Pa=at;const st=class st extends K{defines(e){super.defines(e),e.classes.add(this,"pa-split")}};r(st,"$Split");let Aa=st;const tt=class tt extends g{constructor(){super(...arguments),this.specification=new P}defines(e){e.classes.add(this,"pa-light-code")}erase(e){e.classes.revert(this)}};r(tt,"$LightCode");let Da=tt;const ot=class ot extends g{constructor(){super(...arguments),this.specification=new P}defines(e){e.classes.add(this,"pa-wrapped-code")}erase(e){e.classes.revert(this)}};r(ot,"$WrappedCode");let Ca=ot;const rt=class rt extends g{constructor(){super(...arguments),this.specification=new P}defines(e){e.classes.add(this,"pa-numbered-code")}erase(e){e.classes.revert(this)}};r(rt,"$NumberedCode");let Ia=rt;const nt=class nt extends g{constructor(){super(...arguments),this.specification=new Me}defines(e){e.classes.add(this,"pa-brief")}erase(e){e.classes.revert(this)}};r(nt,"$Brief");let Ie=nt;const it=class it extends b{$saidOfAParagraph(e){c(e instanceof f,"brief is said of a paragraph, and this is not one")}};r(it,"BriefSpecification");let Me=it;On([l("brief is said of a paragraph")],Me.prototype,"$saidOfAParagraph");o(K);const Is=o(Oa),Ms=o(Pa),he=o(Aa),Pn=o(Da),An=o(Ca),zr=o(Ia),Zi=o(Ie),pt=class pt extends f{constructor(){super(...arguments),this.style=m.div`
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
    `}get spread(){return this.chapter?.annotations.expressed(z)}$FileRail(...e){this.$Writing(...e),this.containers.replace(this,"span",this.style)}write(){const e=o(Cs),a=this.spread;if(a!==void 0)return a.files.map(n=>s.jsx(e,{file:n,annotation:he,family:a.filePanelStates,skeleton:!0},oe(n)))}$Define(){super.$Define(),this.classes.add(this,"pd-file-rail")}};r(pt,"$FileRail");let Ma=pt;const dt=class dt extends ce{constructor(){super(...arguments),this.style=m.button`
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
    `}get paragraphs(){return(this.chapter?.text.find(C)??[]).flatMap(e=>e.text.find(f)).slice(0,16).map(e=>y.copy(e.text))}$FilePanelGrip(...e){this.$Switch(...e),this.containers.replace(this,"button",this.style)}write(){return s.jsx("span",{className:"pd-skeleton",children:this.paragraphs.map((e,a)=>s.jsx("i",{style:{width:`${Math.max(25,Math.min(100,e.length/4))}%`}},a))})}$Define(){super.$Define(),this.classes.add(this,"pd-file-panel-grip")}};r(dt,"$FilePanelGrip");let Ta=dt;const Dn=o(Ma),Cn=o(Ta),ct=class ct extends f{constructor(){super(...arguments),this.style=m.div`
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
    `}get spread(){return this.chapter?.annotations.expressed(z)}$FilePanel(...e){this.$Writing(...e),this.containers.replace(this,"span",this.style)}write(){const e=o(Tn),a=o(vn),n=this.spread;if(n!==void 0)return s.jsxs(s.Fragment,{children:[s.jsx(e,{chapter:this.chapter}),s.jsx("div",{className:"pd-file-listings",children:n.files.map(t=>s.jsx(a,{file:t,filePanelState:Is,family:n.filePanelStates},oe(t)))})]})}$Define(){super.$Define(),this.classes.add(this,"pd-file-panel")}};r(ct,"$FilePanel");let Na=ct;const lt=class lt extends f{constructor(){super(...arguments),this.style=m.div`
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
    `}get spread(){return this.chapter?.annotations.expressed(z)}$FilePanelBar(...e){this.$Writing(...e),this.containers.replace(this,"span",this.style)}write(){const e=o(Cs),a=o(dn),n=o(vr),t=this.spread,i=this.chapter;if(t!==void 0)return s.jsxs(s.Fragment,{children:[t.files.map(p=>s.jsx(e,{file:p},oe(p))),s.jsx("span",{className:"pd-words-only",children:s.jsx(a,{chapter:i,annotation:Ms,family:t.filePanelStates,children:"words"})}),s.jsx("span",{className:"pd-dock pd-to-full",children:s.jsx(a,{chapter:i,annotation:Is,family:t.filePanelStates,children:"full screen"})}),s.jsx("span",{className:"pd-dock pd-to-split",children:s.jsx(a,{chapter:i,annotation:he,family:t.filePanelStates,children:"split"})}),s.jsxs("span",{className:"pd-options",children:[s.jsx(n,{chapter:i,annotation:Pn,children:"light"}),s.jsx(n,{chapter:i,annotation:An,children:"wrap"}),s.jsx(n,{chapter:i,annotation:zr,children:"lines"})]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-file-panel-bar")}};r(lt,"$FilePanelBar");let Fa=lt;const In=o(Na),Mn=o(Fa),Tn=Mn;var Nn=Object.defineProperty,Fn=Object.getOwnPropertyDescriptor,Wn=r((d,e,a,n)=>{for(var t=Fn(e,a),i=d.length-1,p;i>=0;i--)(p=d[i])&&(t=p(e,a,t)||t);return t&&Nn(e,a,t),t},"__decorateClass$d");const ht=class ht extends A{constructor(){super(...arguments),this.specification=new Te,this.$openFile=void 0,this.grid=m.div`
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
    `}get files(){return this.parent.annotations.find(cr).reverse()}get openFile(){return this.$openFile??this.files[0]}get filePanelStates(){return[Ms,he,Is]}$Spread(...e){this.$Format(...e);const a=this.grid,n=o(In),t=o(Dn),i=o(Cn);this.style=({className:p,children:u})=>{const $=this.parent,D=[...$.classes].includes("pa-open");return s.jsxs(a,{className:`${p??""}${D?" pa-open":""}`.trim(),children:[s.jsx("div",{className:"pd-words",children:u}),D?s.jsxs(s.Fragment,{children:[s.jsx(n,{chapter:$}),s.jsx(t,{chapter:$}),s.jsx(i,{chapter:$,annotation:he,family:this.filePanelStates})]}):void 0]})}}defines(e){super.defines(e),e.classes.add(this,"pa-spread")}erase(e){super.erase(e),e.classes.revert(this)}};r(ht,"$Spread");let z=ht;const ft=class ft extends b{$isAChapter(e){c(e instanceof k,"a spread is a chapter read beside its files, and this is not a chapter")}};r(ft,"SpreadSpecification");let Te=ft;Wn([l("a spread is a chapter read beside its files")],Te.prototype,"$isAChapter");const Ki=o(z);var Hn=Object.defineProperty,Bn=Object.getOwnPropertyDescriptor,je=r((d,e,a,n)=>{for(var t=Bn(e,a),i=d.length-1,p;i>=0;i--)(p=d[i])&&(t=p(e,a,t)||t);return t&&Hn(e,a,t),t},"__decorateClass$c");const Or='<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3.5 10.5 8 6 12.5"/></svg>',Ln='<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linejoin="round" stroke-linecap="round"><rect class="ground" x="0.75" y="0.75" width="14.5" height="14.5"/><path d="M3.5 5.5h3l1.5 1.5h4.5v5h-9z"/></svg>',gt=class gt extends A{constructor(){super(...arguments),this.specification=new We,this.style=m.div`
        ${e=>e.$schemeDeclarations===void 0?"":`.pa-entry { ${e.$schemeDeclarations} }`}
    `}get place(){return H(this.parent).identifier}get referencedChapter(){return this.book.chapterAt(this.place)}get cover(){return this.referencedChapter?.annotations.expressed(T)?.cover??this.book.coverOf(this.place)}get schemeDeclarations(){const e=this.cover?.annotations.expressed(M);if(e!==void 0)return e.declarations;const a=this.referencedChapter?.annotations.expressed(_)?.colour;return a===void 0?void 0:`--colour: ${a};`}$Entry(...e){this.$Format(...e);const a=this.style;this._painted=n=>s.jsx(a,{$schemeDeclarations:this.schemeDeclarations,...n})}defines(e){e.classes.add(this,"pa-entry"),e.containers.add(this,this._painted),(this.place===this.book?.$bookmark||this.place===this.book.open?.mention?.identifier)&&e.classes.add(this,"pa-open")}erase(e){e.classes.revert(this),e.containers.revert(this)}};r(gt,"$Entry");let R=gt;const bt=class bt extends g{constructor(){super(...arguments),this.specification=new Fe}defines(e){e.classes.add(this,"pa-appendix")}erase(e){e.classes.revert(this)}};r(bt,"$Appendix");let fe=bt;const ut=class ut extends g{constructor(){super(...arguments),this.specification=new Ne}get entries(){return this.chapter.text.find(C).flatMap(a=>a.text.find(f)).filter(a=>!a.is(Gr)&&H(a)!==void 0)}$Bound(){const e=o(En),a=o(Ir),n=o(Cs),t=this.book;for(const i of this.entries){i.annotations.add(this,s.jsx(e,{}));const p=t.chapterAt(H(i).identifier)?.annotations.expressed(z);if(p===void 0)continue;const u=p.files;i.text.add(this,s.jsx(a,{foldedWriting:u.length===0?void 0:i,annotation:Cr}),...u.map($=>s.jsx(n,{file:$,annotation:he,family:p.filePanelStates},oe($))))}super.$Bound()}};r(ut,"$Index");let ge=ut;const mt=class mt extends b{$isATableOfContents(e){c(e.is(F),"an index is a table of contents, and this chapter is not one")}};r(mt,"IndexSpecification");let Ne=mt;je([l("an index is a table of contents")],Ne.prototype,"$isATableOfContents");const $t=class $t extends b{$isASectionOfTheTable(e){c(e instanceof C&&e.chapter?.is(F)===!0,"the appendix is a section of the table of contents, and this is not one")}};r($t,"AppendixSpecification");let Fe=$t;je([l("the appendix is a section of the table of contents")],Fe.prototype,"$isASectionOfTheTable");const kt=class kt extends b{$isARowThatLeadsSomewhere(e){c(e instanceof f&&H(e)!==void 0,"an entry is a row that leads somewhere, and this is not one")}};r(kt,"EntrySpecification");let We=kt;je([l("an entry is a row that leads somewhere")],We.prototype,"$isARowThatLeadsSomewhere");const xt=class xt extends g{constructor(){super(...arguments),this.specification=new Be}defines(e){e.classes.add(this,"pa-folded")}erase(e){e.classes.revert(this)}};r(xt,"$Folded");let Wa=xt;const vt=class vt extends de{get on(){return this.$foldedWriting!==void 0&&[this.$foldedWriting.$is].flat().includes(this.$annotation)}container(e){return super.container({...e,disabled:this.$foldedWriting===void 0,onClick:r(a=>{a.preventDefault(),this.press()},"onClick")})}press(){const e=this.$foldedWriting;if(e===void 0)return;const a=[e.$is].flat();e.$is=this.on?a.filter(n=>n!==this.$annotation):[this.$annotation,...a]}write(){return s.jsx("span",{className:"pd-drawing",dangerouslySetInnerHTML:{__html:Or}})}$Define(){super.$Define(),this.classes.add(this,"pd-fold-chevron")}};r(vt,"$FoldChevron");let Ha=vt;const wt=class wt extends A{constructor(){super(...arguments),this.specification=new Le,this.tree=m.div`
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
    `}get section(){return this.parent}get firstPlace(){return this.section.text.find(f).map(e=>H(e)).find(e=>e!==void 0)?.identifier}get part(){const e=this.firstPlace;return e===void 0?void 0:this.book.chapterAt(e)?.part}get open(){const e=this.book.open;return e!==void 0&&e.part?.name===this.part?.name}$TreeFolder(...e){this.$Format(...e);const a=this.tree,n=o(Ir),t=o(j),i=o(x);this.style=({className:p,children:u})=>{const $=this.firstPlace,D=[...this.section.classes].includes("pa-open"),re=s.jsx("span",{className:"pd-drawing pd-tree-folder-mark",dangerouslySetInnerHTML:{__html:Ln}});return s.jsxs(a,{className:`${p??""} pd-tree-folder${D?" pa-open":""}`.trim(),children:[s.jsx(n,{foldedWriting:this.section,annotation:Cr}),$===void 0?re:s.jsxs(t,{children:[s.jsx(i,{children:$}),re]}),u]})}}defines(e){super.defines(e),e.classes.add(this,"pa-tree-folder"),this.open&&e.classes.add(this,"pa-open")}erase(e){super.erase(e),e.classes.revert(this)}};r(wt,"$TreeFolder");let He=wt;const yt=class yt extends b{$saidOfASectionOrAnEntry(e){c(e instanceof C&&e.chapter?.is(F)===!0||e.is(R),"folded is said of a section of a table of contents or of an entry, and this is neither")}};r(yt,"FoldedSpecification");let Be=yt;je([l("folded is said of a section of a table of contents or of an entry")],Be.prototype,"$saidOfASectionOrAnEntry");const jt=class jt extends b{$isASectionOfTheTable(e){c(e instanceof C&&e.chapter?.is(F)===!0,"a tree folder is a section of the table of contents, and this is not one")}};r(jt,"TreeFolderSpecification");let Le=jt;je([l("a tree folder is a section of the table of contents")],Le.prototype,"$isASectionOfTheTable");const zt=class zt extends f{get cover(){return this.$cover??this.book?.cover}write(){const e=this.cover,a=o(j),n=o(x);return s.jsxs(a,{children:[s.jsx(n,{children:e.mention.identifier}),s.jsx("span",{className:"pd-drawing",dangerouslySetInnerHTML:{__html:Or}}),e.title.name]})}$Define(){super.$Define(),this.classes.add(this,"pd-tree-root")}};r(zt,"$TreeRoot");let Ba=zt;const H=r(d=>d.annotations.expressed(pr)??d.text.find(v).map(e=>e.annotations.expressed(pr)).find(e=>e!==void 0),"contentOf"),Pr=o(R),Vi=o(ge),Qi=o(fe),Ar=o(Wa),_n=o(Ha),Dr=o(He),Rn=o(Ba),En=Pr,Cr=Ar,Ir=_n;var Gn=Object.defineProperty,qn=Object.getOwnPropertyDescriptor,q=r((d,e,a,n)=>{for(var t=qn(e,a),i=d.length-1,p;i>=0;i--)(p=d[i])&&(t=p(e,a,t)||t);return t&&Gn(e,a,t),t},"__decorateClass$b");const ua=r((d,e)=>{const a=new Set(d.text.find(e));return d.text.find(qr).flatMap(n=>[...a.has(n)?[n]:[],...ua(n,e)])},"within"),Ot=class Ot extends g{constructor(){super(...arguments),this.specification=new E}get identifier(){return ne.reference(y.copy(this.text))?.identifier??""}get name(){return ne.reference(y.copy(this.text))?.name??""}get cover(){const e=this.identifier;return this.chapter?.annotations.find(T).map(a=>a.cover).find(a=>a?.mention?.identifier===e)}defines(e){e.classes.add(this,"pa-design")}erase(e){e.classes.revert(this)}};r(Ot,"$Design");let w=Ot;const Pt=class Pt extends g{constructor(){super(...arguments),this.specification=new _e}defines(e){e.classes.add(this,"pa-exhibit")}erase(e){e.classes.revert(this)}};r(Pt,"$Exhibit");let be=Pt;const At=class At extends g{constructor(){super(...arguments),this.specification=new Re,this.$number=0,this.span=m.span.attrs({className:"pd-plate"})``}note(){const e=this.span;return s.jsxs(s.Fragment,{children:[s.jsx(e,{children:String(this.$number).padStart(2,"0")}),s.jsx("span",{className:"pd-jacket-mini"})]})}defines(e){e.classes.add(this,"pa-plate")}erase(e){e.classes.revert(this)}};r(At,"$Plate");let La=At;const Dt=class Dt extends A{constructor(){super(...arguments),this.specification=new Ee,this.themeProvider=!0,this.room=m.div`
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
    `}get chapter(){return this.parent}get design(){return this.chapter.annotations.expressed(w)}get plate(){return this.book.chapters.filter(e=>e.is(w)).indexOf(this.chapter)+1}$Room(...e){this.$Format(...e);const a=this.room;this.style=({className:n,children:t})=>{const i=[...this.chapter.classes].includes("pa-open");return J(this.design?.cover,s.jsxs(a,{className:`${n??""} pd-room${i?" pa-open":""}`.trim(),children:[s.jsx("span",{className:"pd-plate",children:String(this.plate).padStart(2,"0")}),t]}))}}defines(e){super.defines(e),e.classes.add(this,"pa-room")}erase(e){super.erase(e),e.classes.revert(this)}};r(Dt,"$Room");let _a=Dt;const Ct=class Ct extends f{get references(){const e=this.book?.means?.identifier??"",a=new Map;for(const n of ua(this.chapter,v)){if(n.parent===this)continue;const t=n.annotations.expressed(ie)?.identifier;if(t===void 0||t.startsWith(e)||a.has(t))continue;const i=y.copy(n.text);a.set(t,ne.reference(i)?.name??i.trim())}return[...a]}write(){const e=o(j),a=o(x);return this.references.map(([n,t],i)=>s.jsxs(e,{children:[s.jsx(a,{children:n}),t,s.jsx("span",{className:"pd-where",children:n.replace(/^\/dougs-/u,"").replace(/\/#?/u," · ").replace(/ · $/u,"").replace(/-/gu," ")})]},i))}$Define(){super.$Define(),this.classes.add(this,"pd-built-in")}};r(Ct,"$BuiltIn");let Ra=Ct;const It=class It extends b{$isAChapter(e){c(e instanceof k,"a design is a chapter, and this is not one")}$namesABook(e){c((e.annotations.expressed(w)?.identifier??"")!=="","a design names the book it is of, and this one names nothing")}$holdsTheCover(e){c(e.annotations.expressed(w)?.cover!==void 0,"a design holds the cover of the book it is of, as a volume, and this one holds none")}$showsItselfAsBuilt(e){c(e instanceof k&&ua(e,f).some(a=>a.is(be)),"a design shows itself as built, in a paragraph said to be the exhibit, and this one shows nothing")}};r(It,"DesignSpecification");let E=It;q([l("a design is a chapter")],E.prototype,"$isAChapter");q([l("a design names the book it is of")],E.prototype,"$namesABook");q([l("a design holds the cover of the book it is of")],E.prototype,"$holdsTheCover");q([l("a design shows itself as built")],E.prototype,"$showsItselfAsBuilt");const Mt=class Mt extends b{$isAParagraphOfADesignHoldingOneImage(e){c(e instanceof f&&e.chapter?.is(w)===!0&&e.text.find(Ps).length===1,"an exhibit is a paragraph of a design that holds one image, and this is not one")}};r(Mt,"ExhibitSpecification");let _e=Mt;q([l("an exhibit is a paragraph of a design that holds one image")],_e.prototype,"$isAParagraphOfADesignHoldingOneImage");const Tt=class Tt extends b{$saidOfAnEntryLeadingToADesign(e){c(e.is(R)&&e.annotations.expressed(R)?.referencedChapter?.is(w)===!0,"a plate is said of an entry that leads to a design, and this is not one")}};r(Tt,"PlateSpecification");let Re=Tt;q([l("a plate is said of an entry that leads to a design")],Re.prototype,"$saidOfAnEntryLeadingToADesign");const Nt=class Nt extends b{$isADesign(e){c(e instanceof k&&e.is(w),"a room is a chapter that is a design, and this is not one")}};r(Nt,"RoomSpecification");let Ee=Nt;q([l("a room is a chapter that is a design")],Ee.prototype,"$isADesign");const Ui=o(w),Si=o(be),Yn=o(La),Jn=o(_a),Xn=o(Ra);var Zn=Object.defineProperty,Kn=Object.getOwnPropertyDescriptor,O=r((d,e,a,n)=>{for(var t=Kn(e,a),i=d.length-1,p;i>=0;i--)(p=d[i])&&(t=p(e,a,t)||t);return t&&Zn(e,a,t),t},"__decorateClass$a");const J=r((d,e,a)=>{const n=d?.annotations.expressed(M)?.painted;return n===void 0?e:s.jsx(n,{children:e},a)},"painted"),Ft=class Ft extends I{constructor(){super(...arguments),this.specification=new U}get name(){return this.chapter?.title?.name??""}get author(){return this.chapter?.annotations.expressed(Os)?.name??""}get illustration(){return this.chapter?.text.find(f).find(e=>e.is(ue))}get drawing(){const e=this.illustration?.text.find(ga)[0];return e===void 0?"":y.copy(e.text).trim()}get scheme(){return this.chapter?.annotations.expressed(M)}get window(){return this.chapter?.annotations.expressed(Q)}};r(Ft,"$BookshelfCover");let V=Ft;const Wt=class Wt extends g{constructor(){super(...arguments),this.specification=new Ye}defines(e){e.classes.add(this,"pa-illustration")}erase(e){e.classes.revert(this)}};r(Wt,"$Illustration");let ue=Wt;const Ht=class Ht extends A{constructor(){super(...arguments),this.specification=new me,this.$ground="",this.$band="",this.$bandInk="",this.$foot="",this.$footInk="",this.$ink="",this.style=m.div.attrs({className:"pd-scheme"})`
        ${e=>e.$scheme}
    `}get colours(){return[this.$ground,this.$band,this.$bandInk,this.$foot,this.$footInk,this.$ink]}get declarations(){return`--ground: ${this.$ground}; --band: ${this.$band}; --band-ink: ${this.$bandInk}; --foot: ${this.$foot}; --foot-ink: ${this.$footInk}; --ink: ${this.$ink};`}get painted(){return this._painted}$Scheme(...e){this.$Format(...e);const a=this.style;this._painted=n=>s.jsx(a,{$scheme:this.declarations,...n})}defines(e){e.classes.add(this,"pa-scheme"),e.containers.add(this,this._painted)}erase(e){e.classes.revert(this),e.containers.revert(this)}};r(Ht,"$Scheme");let M=Ht;const Bt=class Bt extends g{constructor(){super(...arguments),this.specification=new $e,this.$x="",this.$y=""}get declarations(){return`--window-x: ${this.$x}px; --window-y: ${this.$y}px;`}};r(Bt,"$Window");let Q=Bt;const Lt=class Lt extends g{constructor(){super(...arguments),this.specification=new ke}get cover(){return this._cover}get jacket(){return this._cover?.annotations.expressed(I)}$Volume(...e){this._cover=e.find(a=>a instanceof k),this.$Annotation(...e.filter(a=>a!==this._cover))}defines(e){e.classes.add(this,"pa-volume")}erase(e){e.classes.revert(this)}};r(Lt,"$Volume");let T=Lt;const _t=class _t extends f{get cover(){return this.$cover?.annotations.expressed(I)}$Jacket(...e){this.$Writing(...e),this._painted=a=>{const n=this.cover?.scheme?.painted;return n===void 0?s.jsx("div",{...a}):s.jsx(n,{...a})},this.containers.add(this,this._painted)}write(){const e=this.cover;if(e===void 0)return;const a=o(j),n=o(As);return s.jsxs(s.Fragment,{children:[s.jsx(a,{children:e.name}),s.jsx("span",{className:"pd-drawing",dangerouslySetInnerHTML:{__html:e.drawing}}),s.jsxs(a,{children:[s.jsx(n,{}),e.author]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-jacket")}};r(_t,"$Jacket");let Ea=_t;const Rt=class Rt extends f{constructor(){super(...arguments),this.unfolded=!1}get filedElsewhere(){return this.$subject!==void 0&&this.$subject!==this.$cover}container(e){return super.container({onMouseOver:r(a=>{a.target instanceof Element&&a.target.closest(".pd-filed")!==null&&this.unfold()},"onMouseOver"),onMouseLeave:r(()=>this.fold(),"onMouseLeave"),...e})}unfold(){this.unfolded=!0}fold(){this.unfolded=!1}write(){const e=this.$cover,a=this.$subject;if(e!==void 0)return s.jsxs(s.Fragment,{children:[this.filedElsewhere?J(a,s.jsx("span",{className:"pd-filed",children:this.mark(a)})):void 0,J(e,s.jsx("span",{className:"pd-own",children:this.mark(e)})),s.jsxs("span",{className:"pd-names",children:[J(e,s.jsx("span",{className:"pd-name",children:this.name(e)})),this.filedElsewhere?J(a,s.jsx("span",{className:"pd-name pd-under",children:this.name(a)})):void 0]})]})}mark(e){const a=o(ai),n=o(x);return s.jsx(a,{cover:e,children:s.jsx(n,{children:e.mention.identifier})})}name(e){const a=o(j),n=o(x);return s.jsxs(a,{children:[s.jsx(n,{children:e.mention.identifier}),e.title.name]})}$Define(){super.$Define(),this.classes.add(this,"pd-logo");const e=o(si);this.annotations.add(this,s.jsx(e,{}))}};r(Rt,"$Logo");let Ge=Rt;const Et=class Et extends g{constructor(){super(...arguments),this.specification=new qe}defines(e){e.unfolded&&e.classes.add(this,"pa-unfolded")}erase(e){e.classes.revert(this)}};r(Et,"$Unfolded");let Ga=Et;const Gt=class Gt extends b{$saidOfALogo(e){c(e instanceof Ge,"unfolded is said of a logo, and this is not one")}};r(Gt,"UnfoldedSpecification");let qe=Gt;O([l("unfolded is said of a logo")],qe.prototype,"$saidOfALogo");const qt=class qt extends v{constructor(){super(...arguments),this.style=m.span`
        ${e=>e.$vars}
    `}get cover(){return this.$cover?.annotations.expressed(I)}$Mark(...e){this.$Writing(...e);const a=this.style;this._painted=n=>s.jsx(a,{$vars:`${this.cover?.scheme?.declarations??""} ${this.cover?.window?.declarations??""}`,...n}),this.containers.add(this,this._painted)}write(){return s.jsx("span",{className:"pd-drawing",dangerouslySetInnerHTML:{__html:this.cover?.drawing??""}})}$Define(){super.$Define(),this.classes.add(this,"pd-mark")}};r(qt,"$Mark");let qa=qt;const Yt=class Yt extends Yr{$carriesItsScheme(e){c(e.is(M),"a bookshelf cover carries its scheme, and this one carries none")}$carriesItsWindow(e){c(e.is(Q),"a bookshelf cover carries its window, and this one carries none")}$carriesItsIllustration(e){c(e instanceof k&&e.text.find(f).some(a=>a.is(ue)),"a bookshelf cover carries its illustration, and this one carries none")}};r(Yt,"BookshelfCoverSpecification");let U=Yt;O([l("a bookshelf cover carries its scheme")],U.prototype,"$carriesItsScheme");O([l("a bookshelf cover carries its window")],U.prototype,"$carriesItsWindow");O([l("a bookshelf cover carries its illustration")],U.prototype,"$carriesItsIllustration");const Jt=class Jt extends b{$saidOfADrawing(e){c(e instanceof f&&e.chapter?.is(I)===!0&&e.text.find(ga).length===1,"an illustration is a paragraph of a cover that holds one drawing, and this is not one")}};r(Jt,"IllustrationSpecification");let Ye=Jt;O([l("an illustration is a paragraph of a cover that holds one drawing")],Ye.prototype,"$saidOfADrawing");const Xt=class Xt extends b{$isACover(e){c(e instanceof k&&e.is(I),"a cover has a scheme, and this is not a cover")}$givenItsColours(e){const a=e.annotations.expressed(M)?.colours??[];c(a.every(n=>/^#[0-9a-f]{6}$/iu.test(n)),"a scheme is given its six colours as six hex digits each — the ground, the band and its ink, the foot and its ink, and the ink of the drawing — and this one was given something else")}};r(Xt,"SchemeSpecification");let me=Xt;O([l("a cover has a scheme")],me.prototype,"$isACover");O([l("a scheme is given its six colours")],me.prototype,"$givenItsColours");const Zt=class Zt extends b{$isACover(e){c(e instanceof k&&e.is(I),"a cover has a window, and this is not a cover")}$givenItsPlace(e){const a=e.annotations.expressed(Q);c(/^-?\d+$/u.test(a?.$x??"")&&/^-?\d+$/u.test(a?.$y??""),"a window is given where it stands on the drawing, two whole numbers, and this one was given something else")}};r(Zt,"WindowSpecification");let $e=Zt;O([l("a cover has a window")],$e.prototype,"$isACover");O([l("a window is given where it stands on the drawing")],$e.prototype,"$givenItsPlace");const Kt=class Kt extends b{$saidOfAChapterStandingForABook(e){c(e instanceof k&&(e.is(pe)||e.is(I)||e.is(w)),"a volume is a chapter that stands for another book, a synopsis of it, a cover filed under it or a design of it, and this is none")}$holdsTheCover(e){const a=[e.annotations.expressed(pe)?.means?.identifier,e.annotations.expressed(dr)?.means?.identifier,e.annotations.expressed(Os)?.means?.identifier,e.annotations.expressed(w)?.identifier];c(e.annotations.find(T).every(n=>n.cover?.is(I)===!0&&a.includes(n.cover.mention?.identifier)),"a volume holds the cover of a book its chapter stands for, the book a synopsis or a design is of or the subject or author a cover is filed under, and one here holds something else")}};r(Kt,"VolumeSpecification");let ke=Kt;O([l("a volume is a chapter that stands for another book")],ke.prototype,"$saidOfAChapterStandingForABook");O([l("a volume holds the cover of a book its chapter stands for")],ke.prototype,"$holdsTheCover");const Vn=o(V),Mr=o(ue),Tr=o(M),Nr=o(Q),Qn=o(T),Un=o(Ea),Sn=o(Ge),ei=o(Ga),Fr=o(qa),ai=Fr,si=ei,ha=class ha extends Jr{constructor(){super(...arguments),this.specification=new P,this.themeProvider=!0,this.style=m.div`
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
    `}get pages(){return this.book.pages}get open(){const e=this.book;return e.open??e.synopsis}$Bound(){const e=this.style,a=this.book;this.style=n=>s.jsx(e,{$at:a.means?.identifier,$scheme:a.cover?.annotations.expressed(M)?.declarations,...n}),super.$Bound()}defines(e){for(const n of e.annotations.after(this))n instanceof ha&&e.annotations.express(n,!1);super.defines(e),e.classes.add(this,"pa-layout");const a=this.book.open;a!==void 0&&e.classes.add(this,"pa-turned"),a?.is(z)&&e.classes.add(this,"pa-manual")}erase(e){super.erase(e),e.classes.revert(this)}parts(){return[this.paging(),this.regions(),this.areas(),this.phone()]}paging(){return h`
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
        `}};r(ha,"$Layout");let Ya=ha;const ti=o(Ya),fa=class fa extends g{constructor(){super(...arguments),this.specification=new P}defines(e){for(const a of e.annotations.after(this))a instanceof fa&&e.annotations.express(a,!1);e.classes.add(this,"pa-tone")}erase(e){e.classes.revert(this)}};r(fa,"$Tone");let S=fa;const Vt=class Vt extends S{defines(e){super.defines(e),e.classes.add(this,"pa-dark")}};r(Vt,"$Dark");let Ja=Vt;const Qt=class Qt extends S{defines(e){super.defines(e),e.classes.add(this,"pa-light")}};r(Qt,"$Light");let Xa=Qt;const Ut=class Ut extends S{defines(e){super.defines(e),e.classes.add(this,"pa-white-over-black")}};r(Ut,"$WhiteOverBlack");let Za=Ut;const ze=o(S),Wr=o(Ja),ma=o(Xa),oi=o(Za);var ri=Object.defineProperty,ni=Object.getOwnPropertyDescriptor,ii=r((d,e,a,n)=>{for(var t=ni(e,a),i=d.length-1,p;i>=0;i--)(p=d[i])&&(t=p(e,a,t)||t);return t&&ri(e,a,t),t},"__decorateClass$9");const St=class St extends v{write(){const e=this.book.body;return`${e.indexOf(this.chapter)+1} of ${e.length}`}$Define(){super.$Define(),this.classes.add(this,"pd-count")}};r(St,"$Count");let Ka=St;const eo=class eo extends g{constructor(){super(...arguments),this.specification=new xe}defines(e){e.classes.add(this,"pa-before")}erase(e){e.classes.revert(this)}};r(eo,"$Before");let Va=eo;const ao=class ao extends g{constructor(){super(...arguments),this.specification=new xe}defines(e){e.classes.add(this,"pa-after")}erase(e){e.classes.revert(this)}};r(ao,"$After");let Qa=ao;const so=class so extends b{$saidOfAWordOfATurn(e){c(e instanceof v&&e.parent instanceof Je,"this is said of a word of a turn, and here it is said of something else")}};r(so,"OfATurnSpecification");let xe=so;ii([l("this is said of a word of a turn")],xe.prototype,"$saidOfAWordOfATurn");const pi=o(Ka),di=o(Va),ci=o(Qa),to=class to extends f{get before(){const e=this.book.body;return e[e.indexOf(this.chapter)-1]??this.chapter}get after(){const e=this.book.body;return e[e.indexOf(this.chapter)+1]??this.chapter}write(){const e=o(j),a=o(pi),n=o(di),t=o(ci),i=o(this.before===this.chapter?ka:x),p=o(this.after===this.chapter?ka:x);return s.jsxs(s.Fragment,{children:[s.jsxs(e,{children:[s.jsx(n,{}),s.jsx(i,{children:this.before.mention.identifier}),"← ",this.before.title.name]}),s.jsx(a,{}),s.jsxs(e,{children:[s.jsx(t,{}),s.jsx(p,{children:this.after.mention.identifier}),this.after.title.name," →"]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-turn")}};r(to,"$Turn");let Je=to;const li=o(Je);var hi=Object.defineProperty,fi=Object.getOwnPropertyDescriptor,Oe=r((d,e,a,n)=>{for(var t=n>1?void 0:n?fi(e,a):e,i=d.length-1,p;i>=0;i--)(p=d[i])&&(t=(n?p(e,a,t):p(t))||t);return n&&t&&hi(e,a,t),t},"__decorateClass$8");const oo=class oo extends Xr{constructor(){super(...arguments),this.specification=new N}get chapters(){return this.text.find(k).filter(e=>[...e.classes].includes("pd-canonical"))}get laidOutChapters(){return[this.cover,this.synopsis,this.table,...this.chapters]}get pages(){return[this.synopsis,...this.chapters].filter(e=>e!==void 0)}get body(){const e=this.appendix;return this.chapters.filter(a=>!e.includes(a))}get appendix(){const e=this.table;if(e===void 0)return[];const a=e.text.find(C).filter(n=>n.is(fe)).flatMap(n=>n.text.find(f).map(t=>H(t)?.identifier));return this.chapters.filter(n=>a.includes(n.mention?.identifier??""))}get open(){return this.$bookmark===void 0?void 0:this.chapterAt(this.$bookmark)}get tones(){return[Wr,ma,oi]}write(){return s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"pd-library",children:this.library()}),s.jsx("div",{className:"pd-me",children:this.me()}),s.jsx("div",{className:"pd-holds",children:this.holds()}),s.jsx("div",{className:"pd-head",children:this.head()}),s.jsxs("div",{className:"pd-pages",children:[this.aboveThePages(),this.pages.map((e,a)=>{const n=o(e);return s.jsx(n,{},a)}),this.belowThePages()]})]})}library(){if(this._logo===void 0)return;const e=o(this._logo);return s.jsx(e,{})}me(){const e=o(Fr),a=o(x),n=this.coverOf(this.author?.means?.identifier);return s.jsxs(s.Fragment,{children:[this.byline(),n===void 0?void 0:this.painted(n,s.jsx(e,{cover:n,children:s.jsx(a,{children:n.mention.identifier})}))]})}painted(e,a,n){return J(e,a,n)}holds(){const e=o(this.table);return s.jsx(e,{})}head(){const e=o(this.cover);return s.jsxs(s.Fragment,{children:[s.jsx(e,{}),s.jsx("div",{className:"pd-switches",children:this.switches()})]})}aboveThePages(){}belowThePages(){}chapterAt(e){return(this._chapterByPlace??this.chapterByPlace()).get(e)}chapterByPlace(){const e=new Map;for(const a of this.chapters)for(const n of this.sections(a))n.mention!==void 0&&!e.has(n.mention.identifier)&&e.set(n.mention.identifier,a);for(const a of this.chapters)a.mention!==void 0&&e.set(a.mention.identifier,a);return e}coverOf(e){if(e!==void 0)return this.means?.identifier===e?this.cover:this.cover?.annotations.find(T).map(a=>a.cover).find(a=>a?.mention?.identifier===e)}byline(){const e=o(xr);return s.jsx(e,{chapter:this.cover})}root(){const e=o(Rn);return s.jsx(e,{cover:this.cover})}switches(){}sections(e){return e.text.find(C).flatMap(a=>[a,...this.sections(a)])}sectionOf(e){const a=this.table;return a===void 0?void 0:this.sections(a).find(n=>n.canonical?.name===e.name)}turn(){this.bookmark!==this.cover&&super.turn()}$Define(){super.$Define();const e=o(ti),a=o(ze);this.annotations.add(this,s.jsx(e,{}),s.jsx(a,{}))}$Bound(){this._chapterByPlace=this.chapterByPlace();const e=o(Dr),a=this.table?.annotations.expressed(F);for(const p of a?.parts??[]){const u=this.sectionOf(p);u===void 0||u.is(He)||!p.chapters.some($=>$.is(z))||u.annotations.add(this,s.jsx(e,{}))}const n=this.root();n!==void 0&&this.table?.text.add(this,n);const t=o(Sn);this._logo=Zr.chemical(s.jsx(t,{cover:this.cover,subject:this.coverOf(this.subject?.means?.identifier)}),this);const i=o(li);for(const p of this.body)p.text.add(this,s.jsx(i,{}));super.$Bound()}};r(oo,"$LibraryBook");let B=oo;Oe([lr()],B.prototype,"_chapterByPlace",2);const ro=class ro extends Kr{$holdsOnlyChapters(e){c([...e.text].every(a=>a instanceof k),"a book of this library holds only chapters, and this one holds something else")}$placesEveryChapter(e){c(e.text.find(k).every(a=>e.laidOutChapters.includes(a)),"a book of this library has a place for every chapter it holds, and this one holds a chapter it places nowhere")}$onlyAChapterAppends(e){c(e.text.find(k).every(a=>e.chapters.includes(a)||!a.is(cr)),"only an ordinary chapter files a file, and here a cover, a synopsis or a table of contents files one")}$listsEachManualPart(e){const n=(e.table?.annotations.expressed(F)?.parts??[]).find(t=>t.chapters.some(i=>i.is(z))&&e.sectionOf(t)===void 0);c(n===void 0,`a part read as a manual is listed under a section headed with its name, and "${n?.name}" has none`)}};r(ro,"LibraryBookSpecification");let N=ro;Oe([l("a book of this library holds only chapters")],N.prototype,"$holdsOnlyChapters",1);Oe([l("a book of this library has a place for every chapter it holds")],N.prototype,"$placesEveryChapter",1);Oe([l("only an ordinary chapter files a file")],N.prototype,"$onlyAChapterAppends",1);Oe([l("a part read as a manual is listed under a section headed with its name")],N.prototype,"$listsEachManualPart",1);const Hr=o(B);o(Hr,ba)(en);o(Hr,ze)(Wr);var gi=Object.defineProperty,bi=Object.getOwnPropertyDescriptor,ui=r((d,e,a,n)=>{for(var t=bi(e,a),i=d.length-1,p;i>=0;i--)(p=d[i])&&(t=p(e,a,t)||t);return t&&gi(e,a,t),t},"__decorateClass$7");const no=class no extends B{constructor(){super(...arguments),this.specification=new Xe}get open(){return super.open??this.body[0]}head(){}switches(){}root(){}$Define(){super.$Define(),this.$is=[Ms,zr]}$Bound(){const e=o(Dr);for(const a of this.table?.text.find(C)??[])a.annotations.add(this,s.jsx(e,{})),a.is(fe)&&(a.$is=[Ar]);super.$Bound()}};r(no,"$Manual");let Ua=no;const io=class io extends N{$everyChapterHasABrief(e){c(e.chapters.every(a=>a.text.find(f).some(n=>n.is(Ie))),"every chapter of a manual opens with a brief, and one here has none")}};r(io,"ManualSpecification");let Xe=io;ui([l("every chapter of a manual opens with a brief")],Xe.prototype,"$everyChapterHasABrief");const Ts=o(Ua);o(Ts,ze)(ma);var mi=Object.defineProperty,$i=Object.getOwnPropertyDescriptor,Ns=r((d,e,a,n)=>{for(var t=$i(e,a),i=d.length-1,p;i>=0;i--)(p=d[i])&&(t=p(e,a,t)||t);return t&&mi(e,a,t),t},"__decorateClass$6");const po=class po extends g{constructor(){super(...arguments),this.specification=new ee}get date(){return this.text.find(hr)[0]}defines(e){e.classes.add(this,"pa-dated")}erase(e){e.classes.revert(this)}note(){const e=o(this.date);return s.jsx(e,{})}};r(po,"$Dated");let ve=po;const co=class co extends b{$saidOfAChapter(e){c(e instanceof k,"dated is said of a chapter, and this is not one")}$datedOnce(e){c(e.annotations.containsOne(ve),"a chapter is dated once, and this one is dated more than once")}$givenOneDate(e){c(e.annotations.expressed(ve)?.text.find(hr).length===1,"a dated chapter is given one date, and this one is given none or more than one")}};r(co,"DatedSpecification");let ee=co;Ns([l("dated is said of a chapter")],ee.prototype,"$saidOfAChapter");Ns([l("a chapter is dated once")],ee.prototype,"$datedOnce");Ns([l("a dated chapter is given one date")],ee.prototype,"$givenOneDate");const ep=o(ve),lo=class lo extends R{constructor(){super(...arguments),this.label=m.span.attrs({className:"pa-number"})``}get number(){return this.book.body.indexOf(this.referencedChapter)+1}get keyed(){return this.referencedChapter?.annotations.expressed(W)}note(){const e=this.label,a=o(yr),n=this.keyed;return s.jsxs(s.Fragment,{children:[super.note(),n===void 0?void 0:s.jsx(a,{keyed:n}),this.number===0?void 0:s.jsx(e,{children:String(this.number)})]})}};r(lo,"$NumberedEntry");let Sa=lo;const ki=o(Sa);o(Ts,Pr)(ki);const ho=class ho extends V{constructor(){super(...arguments),this.style=m.header`
        .pd-chapter.pa-cover { margin-block: 0; }
        .pa-cover .pd-title {
            font-size: calc(1.04 * ${({theme:e})=>e.size});
            font-weight: 600;
        }
    `}};r(ho,"$ManualCover");let es=ho;const fo=class fo extends F{constructor(){super(...arguments),this.style=m.nav`
        .pa-table-of-contents .pa-reference { color: inherit; text-decoration: none; }
    `}};r(fo,"$ManualTableOfContents");let as=fo;const ap=o(es),sp=o(as),go=class go extends X{constructor(){super(...arguments),this.measure="104ch",this.holdsColumn="272px",this.barHeight="52px",this.space="24px",this.size="14px",this.beat="0.22s",this.serif="'Source Serif 4', Georgia, serif",this.paper="#fdfcfa",this.ink="#343c4a",this.heading="#1a1f36",this.soft="#727d8c",this.faint="#9ea8b5",this.line="#e4e9f2",this.tint="#f0f4fc",this.barTint="#f8fafe",this.side="#f7f8fb",this.sideInk="#3a4452",this.sideDim="#6b7684",this.sideLine="#e0e4eb",this.sky="#e3edfb",this.skyInk="#4a6ea0",this.accent="#4a6ea0",this.colour="#4fb3a8",this.radius="6px",this.wash="linear-gradient(135deg, #f1f5fd 0%, #fdfcfa 48%, #fdf5ee 100%)"}parts(){return[...super.parts(),this.tree(),this.icons(),this.small()]}library(){return h`
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
        `}};r(go,"$ManualTheme");let ss=go;const xi=o(ss);o(Ts,ba)(xi);var vi=Object.defineProperty,wi=Object.getOwnPropertyDescriptor,yi=r((d,e,a,n)=>{for(var t=wi(e,a),i=d.length-1,p;i>=0;i--)(p=d[i])&&(t=p(e,a,t)||t);return t&&vi(e,a,t),t},"__decorateClass$5");const bo=class bo extends g{constructor(){super(...arguments),this.specification=new Ze}defines(e){e.classes.add(this,"pa-first")}erase(e){e.classes.revert(this)}};r(bo,"$First");let ts=bo;const uo=class uo extends b{$saidOfAParagraph(e){c(e instanceof f,"first is said of a paragraph, and this is not one")}};r(uo,"FirstSpecification");let Ze=uo;yi([l("first is said of a paragraph")],Ze.prototype,"$saidOfAParagraph");const tp=o(ts),mo=class mo extends X{constructor(){super(...arguments),this.serif="'Source Serif 4', Georgia, serif",this.paper="#fdfcfa",this.ink="#343c4a",this.soft="#727d8c",this.faint="#9ea8b5",this.line="#e4e9f2",this.tint="#f0f4fc",this.barTint="#f8fafe",this.sky="#e3edfb",this.skyInk="#4a6ea0",this.accent="#4a6ea0",this.wash="linear-gradient(135deg, #f2f6fd 0%, #fdfcfa 48%, #fdf6f1 100%)",this.side="#f7f8fb",this.sideInk="#3a4452",this.sideDim="#7f8a9b",this.sideLine="#e3e7ee",this.barHeight="52px",this.holdsColumn="232px",this.space="24px",this.cover="132px",this.volume="184px",this.radius="6px",this.spine="inset 3px 0 0 rgba(0, 0, 0, 0.08), inset 4px 0 0 rgba(255, 255, 255, 0.35), 0 6px 12px -10px rgba(44, 52, 64, 0.3)",this.lift="inset 3px 0 0 rgba(0, 0, 0, 0.08), inset 4px 0 0 rgba(255, 255, 255, 0.35), 0 10px 16px -12px rgba(44, 52, 64, 0.35)",this.openSpine="inset 7px 0 0 rgba(0, 0, 0, 0.07), inset 9px 0 0 rgba(255, 255, 255, 0.45), 0 12px 22px -16px rgba(44, 52, 64, 0.35)"}parts(){return[...super.parts(),this.shelf(),this.jackets(),this.desk(),this.unfolded(),this.small()]}page(){return h`
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
        `}};r(mo,"$Bookshelf");let os=mo;const ji=o(os);var zi=Object.defineProperty,Oi=Object.getOwnPropertyDescriptor,$a=r((d,e,a,n)=>{for(var t=n>1?void 0:n?Oi(e,a):e,i=d.length-1,p;i>=0;i--)(p=d[i])&&(t=(n?p(e,a,t):p(t))||t);return n&&t&&zi(e,a,t),t},"__decorateClass$4");const $o=class $o extends B{get books(){return this.text.find(k).filter(e=>e.is(pe)&&e!==this.synopsis)}get laidOutChapters(){return[...super.laidOutChapters,...this.books]}get pages(){return[this.synopsis,...this.books,...this.chapters]}head(){return s.jsx("div",{className:"pd-switches",children:this.switches()})}belowThePages(){return s.jsx("div",{className:"pd-shelf",children:this.volumes()})}volumes(){const e=o(j),a=o(x);return(this.table?.annotations.expressed(ge)?.entries??[]).map((t,i)=>{const p=H(t).identifier,u=this.chapterAt(p),$=u===void 0?this.coverOf(p):this.jacketOf(u);if($!==void 0)return s.jsxs("div",{className:"pd-volume",children:[this.jacket($,p),s.jsx("div",{className:"pd-paragraph pd-name",children:s.jsxs(e,{children:[s.jsx(a,{children:p}),$.title.name]})})]},i)})}jacket(e,a){if(e===void 0)return;const n=o(Un),t=o(x);return a===void 0?s.jsx(n,{cover:e}):s.jsx(n,{cover:e,children:s.jsx(t,{children:a})})}line(e){if(e===void 0)return;const a=o(xr),n=o(on);return s.jsxs(s.Fragment,{children:[s.jsx(a,{cover:e}),s.jsx(n,{cover:e})]})}wayIntoTheBook(e){if(e===void 0)return;const a=o(j),n=o(x),t=e.mention.identifier;return s.jsx("div",{className:"pd-paragraph pd-read",children:s.jsxs(a,{children:[s.jsx(n,{children:t}),`Read ${e.title.name}`]})})}jacketOf(e){return e===this.synopsis?this.cover:e.annotations.expressed(T)?.cover??(this.appendix.includes(e)?void 0:this.cover)}coverOf(e){return super.coverOf(e)??this.books.map(a=>a.annotations.expressed(T)?.cover).find(a=>a!==void 0&&a.mention?.identifier===e)}chapterAt(e){return super.chapterAt(e)??this.books.find(a=>this.placeOf(a)===e)}placeOf(e){const a=e.title?.annotations.expressed(Vr)?.identifier,n=this.means?.identifier;if(!(a===void 0||n===void 0))return`${n.replace(/\/+$/u,"")}/#${a}`}$Bound(){const e=o(Ci);for(const a of[this.synopsis,...this.books])a?.annotations.add(this,s.jsx(e,{}));super.$Bound()}};r($o,"$Catalogue");let rs=$o;const ko=class ko extends A{constructor(){super(...arguments),this.specification=new Ke,this.card=m.div`
        &:not(.pa-open) { display: none; }
    `}get chapter(){return this.parent}get catalogue(){return this.book}get isTheFront(){return this.chapter===this.catalogue.synopsis}get cover(){return this.catalogue.jacketOf(this.chapter)}$CatalogueDesk(...e){this.$Format(...e);const a=o(vr),n=this.card;this.style=({className:t,children:i})=>{const p=this.catalogue,u=this.cover,$=[...this.chapter.classes].includes("pa-open"),D=this.isTheFront?o(p.title):void 0;return p.painted(u,s.jsxs(n,{className:`${t??""} pd-catalogue-desk${$?" pa-open":""}`.trim(),children:[p.jacket(u),s.jsxs("div",{className:"pd-words",children:[D===void 0?void 0:s.jsx(D,{}),i]}),u===void 0||this.isTheFront?void 0:s.jsx("div",{className:"pd-line",children:p.line(u)}),p.wayIntoTheBook(u),u===void 0?void 0:s.jsx(a,{chapter:this.chapter,annotation:Di,children:"read on"})]}))}}defines(e){super.defines(e),e.classes.add(this,"pa-catalogue-desk")}erase(e){super.erase(e),e.classes.revert(this)}};r(ko,"$CatalogueDesk");let ns=ko;const xo=class xo extends b{$holdsASynopsis(e){c(e instanceof k&&e.is(pe),"a catalogue desk holds a synopsis, and this is not one")}};r(xo,"CatalogueDeskSpecification");let Ke=xo;$a([l("a catalogue desk holds a synopsis")],Ke.prototype,"$holdsASynopsis",1);const vo=class vo extends Qr{get identifier(){return this._book??super.identifier}$Bound(){super.$Bound(),this._book=this.chapter?.annotations.expressed(pe)?.means?.identifier}};r(vo,"$BookLink");let Ve=vo;$a([lr()],Ve.prototype,"_book",2);const wo=class wo extends g{constructor(){super(...arguments),this.specification=new Qe}defines(e){e.classes.add(this,"pa-caption")}erase(e){e.classes.revert(this)}};r(wo,"$Caption");let is=wo;const yo=class yo extends g{constructor(){super(...arguments),this.specification=new Ue}defines(e){e.classes.add(this,"pa-arrow")}erase(e){e.classes.revert(this)}};r(yo,"$Arrow");let ps=yo;const jo=class jo extends g{constructor(){super(...arguments),this.specification=new P}defines(e){e.classes.add(this,"pa-unfolded-desk")}erase(e){e.classes.revert(this)}};r(jo,"$UnfoldedDesk");let ds=jo;const zo=class zo extends b{$isAParagraph(e){c(e instanceof f,"a caption is a paragraph, and this is not one")}};r(zo,"CaptionSpecification");let Qe=zo;$a([l("a caption is a paragraph")],Qe.prototype,"$isAParagraph",1);const Oo=class Oo extends b{$isAWordOfTheTable(e){c(e instanceof v&&e.chapter?.is(F)===!0,"an arrow is a word of the table of contents, and this is not one")}};r(Oo,"ArrowSpecification");let Ue=Oo;$a([l("an arrow is a word of the table of contents")],Ue.prototype,"$isAWordOfTheTable",1);const Fs=o(rs),Pi=o(ns),Ai=o(Ve),op=o(is),rp=o(ps),Di=o(ds),Ci=Pi;o(Fs,ka)(Ai);o(Fs,ba)(ji);o(Fs,ze)(ma);var Ii=Object.defineProperty,Mi=Object.getOwnPropertyDescriptor,Pe=r((d,e,a,n)=>{for(var t=Mi(e,a),i=d.length-1,p;i>=0;i--)(p=d[i])&&(t=p(e,a,t)||t);return t&&Ii(e,a,t),t},"__decorateClass$3");const Po=class Po extends g{constructor(){super(...arguments),this.specification=new ea}defines(e){e.classes.add(this,"pa-question")}erase(e){e.classes.revert(this)}};r(Po,"$Question");let cs=Po;const Ao=class Ao extends g{constructor(){super(...arguments),this.specification=new aa}defines(e){e.classes.add(this,"pa-answer")}erase(e){e.classes.revert(this)}};r(Ao,"$Answer");let ls=Ao;const Do=class Do extends g{constructor(){super(...arguments),this.specification=new sa}defines(e){e.classes.add(this,"pa-decision")}erase(e){e.classes.revert(this)}};r(Do,"$Decision");let Se=Do;const Co=class Co extends g{constructor(){super(...arguments),this.specification=new ta}defines(e){e.classes.add(this,"pa-pain")}erase(e){e.classes.revert(this)}};r(Co,"$Pain");let hs=Co;const Io=class Io extends g{constructor(){super(...arguments),this.specification=new oa}defines(e){e.classes.add(this,"pa-solution")}erase(e){e.classes.revert(this)}};r(Io,"$Solution");let fs=Io;const Mo=class Mo extends b{$isAParagraph(e){c(e instanceof f,"a question is a paragraph, and this is not one")}};r(Mo,"QuestionSpecification");let ea=Mo;Pe([l("a question is a paragraph")],ea.prototype,"$isAParagraph");const To=class To extends b{$isAParagraph(e){c(e instanceof f,"an answer is a paragraph, and this is not one")}};r(To,"AnswerSpecification");let aa=To;Pe([l("an answer is a paragraph")],aa.prototype,"$isAParagraph");const No=class No extends b{$isAParagraph(e){c(e instanceof f,"a decision is a paragraph, and this is not one")}};r(No,"DecisionSpecification");let sa=No;Pe([l("a decision is a paragraph")],sa.prototype,"$isAParagraph");const Fo=class Fo extends b{$isAParagraph(e){c(e instanceof f,"a pain is a paragraph, and this is not one")}};r(Fo,"PainSpecification");let ta=Fo;Pe([l("a pain is a paragraph")],ta.prototype,"$isAParagraph");const Wo=class Wo extends b{$isAParagraph(e){c(e instanceof f,"a solution is a paragraph, and this is not one")}};r(Wo,"SolutionSpecification");let oa=Wo;Pe([l("a solution is a paragraph")],oa.prototype,"$isAParagraph");const np=o(cs),ip=o(ls),pp=o(Se),dp=o(hs),cp=o(fs);var Ti=Object.defineProperty,Ni=Object.getOwnPropertyDescriptor,Y=r((d,e,a,n)=>{for(var t=Ni(e,a),i=d.length-1,p;i>=0;i--)(p=d[i])&&(t=p(e,a,t)||t);return t&&Ti(e,a,t),t},"__decorateClass$2");const Ho=class Ho extends g{constructor(){super(...arguments),this.specification=new ae,this.span=m.span.attrs({className:"pa-number"})``}get number(){const e=y.copy(this.text).trim();return e===""?NaN:Number(e)}note(){const e=this.span;return s.jsx(e,{children:this.number})}defines(e){e.classes.add(this,"pa-concept"),e.mention?.identifier===this.book?.$bookmark&&e.classes.add(this,"pa-open")}erase(e){e.classes.revert(this)}};r(Ho,"$Concept");let L=Ho;const Bo=class Bo extends g{constructor(){super(...arguments),this.specification=new ye}defines(e){e.classes.add(this,"pa-designed")}erase(e){e.classes.revert(this)}};r(Bo,"$Designed");let gs=Bo;const Lo=class Lo extends g{constructor(){super(...arguments),this.specification=new ye}defines(e){e.classes.add(this,"pa-decided")}erase(e){e.classes.revert(this)}};r(Lo,"$Decided");let bs=Lo;const _o=class _o extends g{constructor(){super(...arguments),this.specification=new se}defines(e){e.classes.add(this,"pa-desk")}erase(e){e.classes.revert(this)}};r(_o,"$Desk");let ra=_o;const Ro=class Ro extends g{constructor(){super(...arguments),this.specification=new se}defines(e){e.classes.add(this,"pa-phone")}erase(e){e.classes.revert(this)}};r(Ro,"$Phone");let na=Ro;const Eo=class Eo extends g{constructor(){super(...arguments),this.specification=new se}defines(e){e.classes.add(this,"pa-thumbnail")}erase(e){e.classes.revert(this)}};r(Eo,"$Thumbnail");let we=Eo;const Go=class Go extends g{constructor(){super(...arguments),this.specification=new G}defines(e){e.classes.add(this,"pa-precedent")}erase(e){e.classes.revert(this)}};r(Go,"$Precedent");let us=Go;const qo=class qo extends g{constructor(){super(...arguments),this.specification=new G}defines(e){e.classes.add(this,"pa-source")}erase(e){e.classes.revert(this)}};r(qo,"$Source");let ms=qo;const Yo=class Yo extends g{constructor(){super(...arguments),this.specification=new G}defines(e){e.classes.add(this,"pa-close")}erase(e){e.classes.revert(this)}};r(Yo,"$Close");let $s=Yo;const Jo=class Jo extends g{constructor(){super(...arguments),this.specification=new ia}defines(e){e.classes.add(this,"pa-where")}erase(e){e.classes.revert(this)}};r(Jo,"$Where");let ks=Jo;const Xo=class Xo extends b{$isASection(e){c(e instanceof C,"a concept is a section, and this is not one")}$givenItsNumber(e){c(Number.isInteger(e.annotations.expressed(L)?.number),"a concept is given its number, and this one was given something else")}$photographedThreeWays(e){const a=e.text.find(f);c([ra,na,we].every(n=>a.some(t=>t.is(n))),"a concept is photographed at a desk, at a phone, and small, and this one is missing a photograph")}};r(Xo,"ConceptSpecification");let ae=Xo;Y([l("a concept is a section")],ae.prototype,"$isASection");Y([l("a concept is given its number")],ae.prototype,"$givenItsNumber");Y([l("a concept is photographed at a desk, at a phone, and small")],ae.prototype,"$photographedThreeWays");const Zo=class Zo extends b{$isAParagraphHoldingOneImage(e){c(e instanceof f&&e.text.find(Ps).length===1,"a photograph is a paragraph that holds one image, and this is not one")}};r(Zo,"PhotographSpecification");let se=Zo;Y([l("a photograph is a paragraph that holds one image")],se.prototype,"$isAParagraphHoldingOneImage");const Ko=class Ko extends b{$saidOfAParagraphOfAConcept(e){c(e instanceof f&&e.parent instanceof Ur&&e.parent.is(L),"this is said of a paragraph of a concept, and here it is said of something else")}};r(Ko,"OfAConceptSpecification");let G=Ko;Y([l("this is said of a paragraph of a concept")],G.prototype,"$saidOfAParagraphOfAConcept");const Vo=class Vo extends G{$refersToWhereItIsBuilt(e){c(e.text.find(v).some(a=>a.is(ie)),"a where refers to where the concept is built, and this one refers nowhere")}};r(Vo,"WhereSpecification");let ia=Vo;Y([l("a where refers to where the concept is built")],ia.prototype,"$refersToWhereItIsBuilt");const Qo=class Qo extends b{$saidOfAConcept(e){c(e.is(L),"this is said of a concept, and here it is said of something else")}};r(Qo,"OfAConceptSectionSpecification");let ye=Qo;Y([l("this is said of a concept")],ye.prototype,"$saidOfAConcept");const lp=o(L),hp=o(gs),fp=o(bs),gp=o(ra),bp=o(na),up=o(we),mp=o(us),$p=o(ms),kp=o($s),xp=o(ks);var Fi=Object.defineProperty,Wi=Object.getOwnPropertyDescriptor,Br=r((d,e,a,n)=>{for(var t=Wi(e,a),i=d.length-1,p;i>=0;i--)(p=d[i])&&(t=p(e,a,t)||t);return t&&Fi(e,a,t),t},"__decorateClass$1");const Hi=r((d,e)=>d.chapters.flatMap(a=>d.sections(a)).find(a=>a.is(L)&&a.mention?.identifier===e),"conceptAt"),Bi=r(d=>{const e=d.text.find(f).find(a=>a.is(we))?.text.find(Ps)[0];return e===void 0?"":e.contents||y.copy(e.text)},"thumbnailOf"),Uo=class Uo extends A{constructor(){super(...arguments),this.specification=new da,this.themeProvider=!0,this.style=m.div`
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
        .pd-book & .pa-gallery .pd-section.pa-concept .pa-number { grid-area: number; font-size: calc(0.7857 * ${({theme:e})=>e.size}); font-weight: 600; color: var(--foot-ink); font-variant-numeric: tabular-nums; }
        .pd-book & .pa-gallery .pd-section.pa-concept.pa-designed .pa-number::before, .pd-book & .pa-gallery .pd-section.pa-concept.pa-decided .pa-number::before {
            margin-inline-end: calc(${({theme:e})=>e.space} / 4);
            font-size: calc(0.6786 * ${({theme:e})=>e.size});
            font-weight: 500;
            letter-spacing: 0.06em;
            text-transform: uppercase;
        }
        .pd-book & .pa-gallery .pd-section.pa-concept.pa-designed .pa-number::before { content: 'designed'; color: var(--band-ink); }
        .pd-book & .pa-gallery .pd-section.pa-concept.pa-decided .pa-number::before { content: 'decided'; color: var(--foot-ink); }
        .pd-book & .pa-gallery .pd-section.pa-concept .pa-self-reference.pd-container { grid-area: name; grid-column: name; }
        .pd-book & .pa-gallery .pd-section.pa-concept .pd-sentence.pd-heading { margin: 0; padding: 0; border: 0; font-family: ${({theme:e})=>e.serif}; font-size: calc(0.9643 * ${({theme:e})=>e.size}); font-weight: 600; color: ${({theme:e})=>e.heading}; }
        .pd-book & .pa-gallery .pd-section.pa-concept .pd-paragraph.pa-caption { grid-area: caption; margin: calc(${({theme:e})=>e.space} / 8) 0 0; font-size: calc(0.8571 * ${({theme:e})=>e.size}); line-height: 1.5; color: ${({theme:e})=>e.soft}; }
        .pd-book & .pa-gallery .pd-section.pa-concept .pd-paragraph.pa-precedent { grid-area: precedent; margin: calc(${({theme:e})=>e.space} / 8) 0 0; font-size: calc(0.8214 * ${({theme:e})=>e.size}); color: ${({theme:e})=>e.faint}; }
        .pd-book & .pa-gallery .pd-section.pa-concept .pd-paragraph.pa-desk, .pd-book & .pa-gallery .pd-section.pa-concept .pd-paragraph.pa-phone, .pd-book & .pa-gallery .pd-section.pa-concept .pd-paragraph.pa-source, .pd-book & .pa-gallery .pd-section.pa-concept .pd-paragraph.pa-close, .pd-book & .pa-gallery .pd-section.pa-concept .pd-paragraph.pa-answer, .pd-book & .pa-gallery .pd-section.pa-concept .pd-paragraph.pa-where { display: none; }
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
        .pd-book & .pa-gallery .pd-section.pa-concept.pa-open .pa-number { display: inline-block; margin-inline-end: calc(${({theme:e})=>e.space} * 0.4167); font-size: calc(0.9286 * ${({theme:e})=>e.size}); }
        .pd-book & .pa-gallery .pd-section.pa-concept.pa-open .pa-self-reference.pd-container { display: inline; }
        .pd-book & .pa-gallery .pd-section.pa-concept.pa-open .pd-sentence.pd-heading { display: inline; font-size: calc(2 * ${({theme:e})=>e.size}); letter-spacing: -0.02em; }
        .pd-book & .pa-gallery .pd-section.pa-concept.pa-open .pd-paragraph.pa-close { display: block; position: absolute; top: calc(${({theme:e})=>e.space} * 0.9167); right: calc(${({theme:e})=>e.space} * 1.5); margin: 0; font-size: calc(1.857 * ${({theme:e})=>e.size}); line-height: 1; }
        .pd-book & .pa-gallery .pd-section.pa-concept.pa-open .pa-close .pa-reference { color: ${({theme:e})=>e.faint}; text-decoration: none; }
        .pd-book & .pa-gallery .pd-section.pa-concept.pa-open .pa-close .pa-reference:hover { color: ${({theme:e})=>e.ink}; }
        .pd-book & .pa-gallery .pd-section.pa-concept.pa-open .pd-paragraph.pa-thumbnail { display: none; }
        .pd-book & .pa-gallery .pd-section.pa-concept.pa-open .pd-paragraph.pa-precedent { font-size: calc(0.9286 * ${({theme:e})=>e.size}); color: ${({theme:e})=>e.soft}; }
        .pd-book & .pa-gallery .pd-section.pa-concept.pa-open .pd-paragraph.pa-caption { margin: calc(${({theme:e})=>e.space} * 0.4167) 0 calc(${({theme:e})=>e.space} * 0.8333); font-family: ${({theme:e})=>e.serif}; font-size: calc(1.2143 * ${({theme:e})=>e.size}); line-height: 1.55; color: ${({theme:e})=>e.ink}; max-width: 64ch; }
        .pd-book & .pa-gallery .pd-section.pa-concept.pa-open .pd-paragraph.pa-desk, .pd-book & .pa-gallery .pd-section.pa-concept.pa-open .pd-paragraph.pa-phone, .pd-book & .pa-gallery .pd-section.pa-concept.pa-open .pd-paragraph.pa-answer, .pd-book & .pa-gallery .pd-section.pa-concept.pa-open .pd-paragraph.pa-source { display: block; max-width: none; }
        .pd-book & .pa-gallery .pd-section.pa-concept.pa-open .pd-paragraph.pa-desk img, .pd-book & .pa-gallery .pd-section.pa-concept.pa-open .pd-paragraph.pa-phone img { border: thin solid ${({theme:e})=>e.line}; border-radius: ${({theme:e})=>e.radius}; box-shadow: ${({theme:e})=>e.shadow}; }
        .pd-book & .pa-gallery .pd-section.pa-concept.pa-open .pd-paragraph.pa-answer { max-width: 68ch; }
        .pd-book & .pa-gallery .pd-section.pa-concept.pa-open .pd-paragraph.pa-where { display: block; margin-block-start: calc(${({theme:e})=>e.space} / 2); font-size: calc(0.9643 * ${({theme:e})=>e.size}); color: ${({theme:e})=>e.soft}; }
        .pd-book & .pa-gallery .pd-section.pa-concept.pa-open .pa-number { grid-area: number; align-self: baseline; }
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
    `}defines(e){super.defines(e),e.classes.add(this,"pa-gallery")}erase(e){super.erase(e),e.classes.revert(this)}};r(Uo,"$Gallery");let pa=Uo;const So=class So extends A{constructor(){super(...arguments),this.specification=new ca,this.strip=m.div`
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
        .pd-book & .pd-thumb.pa-chosen img { border-color: var(--band-ink); box-shadow: ${({theme:e})=>e.ring}; }
        .pd-book & .pd-thumb .pd-name { display: block; margin-block-start: calc(${({theme:e})=>e.space} / 5); font-size: calc(0.8571 * ${({theme:e})=>e.size}); color: ${({theme:e})=>e.soft}; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        .pd-book & .pd-thumb.pa-chosen .pd-name { color: var(--band-ink); }
        .pd-book & .pd-thumb .pd-name .pa-number { margin-inline-end: calc(${({theme:e})=>e.space} / 5); font-weight: 600; color: var(--foot-ink); font-variant-numeric: tabular-nums; }
    `}get paragraph(){return this.parent}get places(){return this.paragraph.text.find(v).map(e=>e.annotations.expressed(ie)?.identifier).filter(e=>e!==void 0)}get concepts(){const e=this.book;return[...new Set(this.places.map(a=>Hi(e,a)).filter(a=>a!==void 0))]}get chosen(){const e=this.paragraph.parent?.text.find(f).find(a=>a.is(Se));return new Set(e?.text.find(v).map(a=>a.annotations.expressed(ie)?.identifier).filter(a=>a!==void 0))}$Strip(...e){this.$Format(...e);const a=this.strip,n=o(j),t=o(x);this.style=({className:i,children:p})=>{const u=this.chosen;return s.jsxs(a,{className:`${i??""} pd-strip`.trim(),children:[this.concepts.map(($,D)=>{const re=$.mention.identifier;return s.jsxs(n,{children:[s.jsx(t,{children:re}),s.jsxs("span",{className:`pd-thumb${u.has(re)?" pa-chosen":""}`,children:[s.jsx("img",{src:Bi($),alt:""}),s.jsxs("span",{className:"pd-name",children:[s.jsx("span",{className:"pa-number",children:$.annotations.expressed(L)?.number}),$.canonical?.name]})]})]},D)}),s.jsx("span",{className:"pd-said",children:p})]})}}defines(e){super.defines(e),e.classes.add(this,"pa-strip")}erase(e){super.erase(e),e.classes.revert(this)}};r(So,"$Strip");let xs=So;const er=class er extends b{$isAChapter(e){c(e instanceof k,"a gallery is a chapter, and this is not one")}};r(er,"GallerySpecification");let da=er;Br([l("a gallery is a chapter")],da.prototype,"$isAChapter");const ar=class ar extends b{$isAParagraphReferringToConcepts(e){c(e instanceof f&&e.text.find(v).some(a=>a.annotations.expressed(ie)!==void 0),"a strip is a paragraph that refers to concepts, and this one refers to nothing")}};r(ar,"StripSpecification");let ca=ar;Br([l("a strip is a paragraph that refers to concepts")],ca.prototype,"$isAParagraphReferringToConcepts");const vp=o(pa),wp=o(xs),sr=class sr extends X{constructor(){super(...arguments),this.accent="#23407a",this.ink="#343c4a",this.heading="#1a1f36",this.soft="#727d8c",this.faint="#9ea8b5",this.line="#e4e9f2",this.paper="#fdfcfa",this.side="#f8f9fb",this.holdsColumn="256px",this.barHeight="52px",this.card="12.5rem",this.shadow="0 1px 2px rgba(43, 54, 60, 0.05), 0 6px 18px rgba(43, 54, 60, 0.05)",this.lift="0 2px 4px rgba(43, 54, 60, 0.06), 0 14px 32px rgba(43, 54, 60, 0.10)",this.barLight="#fcfcfd",this.barMid="#f8f9fc",this.barDeep="#f2f4f9",this.barShadow="0 1px 0 rgba(43, 54, 60, 0.05)",this.sideLight="#fafbfc",this.sideDeep="#f2f4f8",this.codeGround="#f6f7fa",this.hairline="1px",this.stroke="2px",this.rise="-1px",this.gloss="inset 0 1px 0 rgba(255, 255, 255, 0.7)",this.ring="0 0 0 2px color-mix(in oklab, var(--band) 80%, white)",this.decisionShadow="0 1px 2px rgba(43, 54, 60, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.6)"}parts(){return[...super.parts(),this.backdrop(),this.bands(),this.guide(),this.story(),this.said(),this.small()]}backdrop(){return h`
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
        `}};r(sr,"$Exhibition");let vs=sr;const Li=o(vs);var _i=Object.defineProperty,Ri=Object.getOwnPropertyDescriptor,Ws=r((d,e,a,n)=>{for(var t=Ri(e,a),i=d.length-1,p;i>=0;i--)(p=d[i])&&(t=p(e,a,t)||t);return t&&_i(e,a,t),t},"__decorateClass");const tr=class tr extends B{constructor(){super(...arguments),this.specification=new te}get designs(){return this.chapters.filter(e=>e.is(w))}get open(){return super.open??this.body[0]}head(){}switches(){}$Bound(){const e=o(Jn),a=o(Yn),n=o(Xn),t=this.designs;for(const i of t)i.annotations.add(this,s.jsx(e,{})),i.text.add(this,s.jsx(n,{}));for(const i of this.table?.annotations.expressed(ge)?.entries??[]){const p=H(i)?.identifier,u=p===void 0?void 0:this.chapterAt(p);u===void 0||!t.includes(u)||i.annotations.add(this,s.jsx(a,{number:t.indexOf(u)+1}))}super.$Bound()}};r(tr,"$Portfolio");let ws=tr;const or=class or extends N{$everyChapterInAPart(e){c(e.chapters.every(a=>a.part!==void 0),"every chapter of a portfolio is in a part, and one here is in none")}$showsEveryDesign(e){c(e.designs.every(a=>ua(a,f).some(n=>n.is(be))),"a portfolio shows every design it holds as built, in a paragraph said to be the exhibit, and one here has none")}$keepsAGallery(e){c(e.chapters.some(a=>a.is(pa)),"a portfolio keeps its sketches in a gallery, and this one has none")}};r(or,"PortfolioSpecification");let te=or;Ws([l("every chapter of a portfolio is in a part")],te.prototype,"$everyChapterInAPart");Ws([l("a portfolio shows every design it holds as built")],te.prototype,"$showsEveryDesign");Ws([l("a portfolio keeps its sketches in a gallery")],te.prototype,"$keepsAGallery");const Lr=o(ws);o(Lr,ba)(Li);o(Lr,ze)(ma);const rr=class rr extends V{};r(rr,"$PortfolioCover");let ys=rr;const yp=o(ys),Ei=r(()=>s.jsxs(fr,{children:[s.jsx(Vn,{}),s.jsx(Tr,{ground:"#eef5f6",band:"#c3e3e6",bandInk:"#1c565c",foot:"#8db9bd",footInk:"#153e43",ink:"#1f5a60"}),s.jsx(Nr,{x:"-46",y:"-13"}),s.jsx(gr,{children:"[Dougs Library](/dougs-library/)"}),s.jsx(br,{children:"[Doug](/dougs-story/)"}),s.jsx(ur,{children:"[Library](/dougs-library/)"}),s.jsx(mr,{children:"[The Library](/dougs-library/)"}),s.jsxs($r,{children:[s.jsx(Mr,{}),s.jsx(kr,{children:`<svg viewBox="0 0 64 64" class="pd-illustration"><path class="light" d="M9 7h46v50H9z"/><path d="M9 7h46v50H9zM9 24h46M9 41h46"/><path class="fill" d="M13 11h5v13h-5zM20 9h4v15h-4zM26 13h6v11h-6zM34 10h4v14h-4zM40 14h6v10h-6z"/><path d="M48 24l4-12 3 1-4 11z"/><path class="fill" d="M13 28h4v13h-4zM19 30h7v11h-7zM28 27h4v14h-4zM34 31h5v10h-5zM41 28h6v13h-6zM49 29h3v12h-3z"/><path class="fill" d="M13 46h6v11h-6zM21 44h4v13h-4zM27 47h8v10h-8zM37 45h4v12h-4zM43 48h6v9h-6z"/><path d="M50 57l3-11 3 1-3 10z"/></svg>
`})]})]}),"LibraryCover"),nr=class nr extends V{constructor(){super(...arguments),this.style=m.header`
        justify-self: end;
        .pd-chapter.pa-cover { margin-block: 0; }
    `}};r(nr,"$StoryCover");let js=nr;const ir=class ir extends F{constructor(){super(...arguments),this.style=m.nav`
        .pd-chapter.pa-table-of-contents { margin-block: 0; }
    `}};r(ir,"$StoryTableOfContents");let zs=ir;const Gi=o(js),jp=o(zs),zp=r(()=>s.jsxs(fr,{children:[s.jsx(Gi,{}),s.jsx(Sr,{}),s.jsx(Qn,{children:Ei()}),s.jsx(Tr,{ground:"#f5eedf",band:"#d9c3a3",bandInk:"#4a3626",foot:"#a3b6cc",footInk:"#2a4262",ink:"#2f4a6a"}),s.jsx(Nr,{x:"-54",y:"-33"}),s.jsx(gr,{children:"[Dougs Story](/dougs-story/)"}),s.jsx(br,{children:"[Doug](/dougs-story/)"}),s.jsx(ur,{children:"[Library](/dougs-library/)"}),s.jsx(mr,{children:"[The Librarian](/dougs-story/)"}),s.jsxs($r,{children:[s.jsx(Mr,{}),s.jsx(kr,{children:`<svg viewBox="0 0 64 64" class="pd-illustration"><path class="light" d="M8 13h23v38H8zM33 13h23v38H33z"/><path d="M8 13h23v38H8zM33 13h23v38H33z"/><path d="M13 21h13M13 27h13M13 33h9M38 21h13M38 27h13M38 33h13M38 39h8"/><path class="fill" d="M15 55 45 25l4 4-30 30-6 2z"/><path d="M15 55 45 25l4 4-30 30-6 2zM43 27l4 4M17 53l2 2"/></svg>
`})]})]}),"Cover");export{rs as $,rp as A,Zi as B,zp as C,pp as D,Si as E,ep as F,vp as G,tp as H,Vi as I,Ua as J,sp as K,Ei as L,Xi as M,Ji as N,P as O,dp as P,np as Q,ap as R,Ki as S,up as T,Qn as V,xp as W,Qi as a,op as b,ws as c,ip as d,wp as e,cp as f,Ui as g,gp as h,bp as i,lp as j,hp as k,kp as l,mp as m,$p as n,fp as o,yp as p,Tr as q,Nr as r,Mr as s,X as t,B as u,dn as v,ve as w,pi as x,Ka as y,jp as z};
