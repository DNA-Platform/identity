var Nt=Object.defineProperty;var n=(p,e)=>Nt(p,"name",{value:e,configurable:!0});import{$ as t,z as I,e as B,s as m,o as M,j as a,f as g,g as l,h as b,n as u,i as h,B as tt,E as Ae,W as O,r as _t,m as f,F as U,G as Ht,k as c,J as ks,R as w,K as ot,N as y,O as ne,Q as Lt,U as Tt,p as P,V as Ft,y as Y,X as it,Y as Fe,Z as Wt,_ as Et,a0 as Rt,l as ys,a1 as dt,w as pt,a2 as Bt,a3 as Yt,C as ct,T as lt,t as ht,u as ft,a4 as gt,a as ut,v as $t,a5 as Gt}from"./index-B0qf1kAK.js";const As=class As extends I{get on(){return[this.book.$is].flat().includes(this.$of)}$Switch(...e){this.$Writing(...e),this.containers.replace(this,"span","button")}container(e){return super.container({type:"button","aria-pressed":this.on,onClick:n(()=>this.press(),"onClick"),...e})}press(){const e=this.book,s=[e.$is].flat();e.$is=this.on?s.filter(r=>r!==this.$of):[this.$of,...s]}$Define(){super.$Define(),this.classes.add(this,"pd-switch")}};n(As,"$Switch");let K=As;const Ns=class Ns extends K{press(){const e=this.book,s=[e.$is].flat().filter(r=>!this.$among.includes(r));e.$is=[this.$of,...s]}};n(Ns,"$Tab");let oe=Ns;const We=t(K),Jt=t(oe);var Ut=Object.defineProperty,Kt=Object.getOwnPropertyDescriptor,bt=n((p,e,s,r)=>{for(var i=Kt(e,s),o=p.length-1,d;o>=0;o--)(d=p[o])&&(i=d(e,s,i)||i);return i&&Ut(e,s,i),i},"__decorateClass$d");const _s=class _s extends B{constructor(){super(...arguments),this.specification=new Q,this.style=m.div`
        .pa-coloured { --colour: ${e=>e.$colour}; }
    `}get colour(){return M.copy(this.text).trim()}$Coloured(...e){this.$Format(...e);const s=this.style;this._painted=r=>a.jsx(s,{$colour:this.colour,...r})}defines(e){e.classes.add(this,"pa-coloured"),e.containers.add(this,this._painted)}erase(e){e.classes.revert(this),e.containers.revert(this)}};n(_s,"$Coloured");let A=_s;const Hs=class Hs extends g{$saidOfAChapterOrAParagraph(e){l(e instanceof b||e instanceof u,"coloured is said of a chapter or a paragraph, and this is neither")}$givenItsColour(e){l(/^#[0-9a-f]{6}$/iu.test(e.annotations.expressed(A)?.colour??""),"coloured is given its colour as six hex digits, and this one was given something else")}};n(Hs,"ColouredSpecification");let Q=Hs;bt([h("coloured is said of a chapter or a paragraph")],Q.prototype,"$saidOfAChapterOrAParagraph");bt([h("coloured is given its colour")],Q.prototype,"$givenItsColour");const pr=t(A);var Qt=Object.defineProperty,Xt=Object.getOwnPropertyDescriptor,js=n((p,e,s,r)=>{for(var i=Xt(e,s),o=p.length-1,d;o>=0;o--)(d=p[o])&&(i=d(e,s,i)||i);return i&&Qt(e,s,i),i},"__decorateClass$c");const Ls=class Ls extends B{constructor(){super(...arguments),this.specification=new L}get identifier(){return tt.reference(M.copy(this.text))?.identifier??""}get name(){return tt.reference(M.copy(this.text))?.name??""}get entry(){return this.book?.named(this.identifier)}get drawing(){const e=this.entry?.text.find(u).flatMap(s=>s.text.find(Ae))[0];return e===void 0?"":M.copy(e.text).trim()}get colour(){return this.entry?.annotations.expressed(A)?.colour??""}$Kind(...e){this.$Format(...e);const s=t(Zt);this._layer=r=>a.jsxs("div",{...r,children:[a.jsx(s,{kind:this}),r.children]})}defines(e){e.classes.add(this,"pa-kind"),e.containers.add(this,this._layer)}erase(e){e.classes.revert(this),e.containers.revert(this)}};n(Ls,"$Kind");let z=Ls;const Ts=class Ts extends I{constructor(){super(...arguments),this.style=m.span`
        --colour: ${e=>e.$colour};
    `}$Icon(...e){this.$Writing(...e);const s=this.style;this._painted=r=>a.jsx(s,{$colour:this.$kind?.colour??"",...r}),this.containers.replace(this,"span",this._painted)}write(){return a.jsx("span",{className:"pd-drawing",role:"img","aria-label":this.$kind?.name,dangerouslySetInnerHTML:{__html:this.$kind?.drawing??""}})}$Define(){super.$Define(),this.classes.add(this,"pd-icon")}};n(Ts,"$Icon");let Ee=Ts;const Fs=class Fs extends g{$saidOfAChapter(e){l(e instanceof b,"a kind is said of a chapter, and this is not one")}$namesAnEntry(e){const s=e.annotations.expressed(z)?.entry;l(s!==void 0&&s.annotations.expressed(z)?.entry===s,"a kind names an entry of the key, a chapter of this book whose kind is itself, and this one names something else")}$entryHoldsItsDrawingAndColour(e){const s=e.annotations.expressed(z)?.entry;s!==void 0&&l(s.text.find(u).flatMap(r=>r.text.find(Ae)).length===1&&s.is(A),"an entry of the key holds one drawing and its colour, and this one holds something else")}};n(Fs,"KindSpecification");let L=Fs;js([h("a kind is said of a chapter")],L.prototype,"$saidOfAChapter");js([h("a kind names an entry of the key")],L.prototype,"$namesAnEntry");js([h("an entry of the key holds one drawing and its colour")],L.prototype,"$entryHoldsItsDrawingAndColour");const cr=t(z),mt=t(Ee),Zt=mt;var qt=Object.defineProperty,Vt=Object.getOwnPropertyDescriptor,St=n((p,e,s,r)=>{for(var i=Vt(e,s),o=p.length-1,d;o>=0;o--)(d=p[o])&&(i=d(e,s,i)||i);return i&&qt(e,s,i),i},"__decorateClass$b");const ei={tsx:"typescript",ts:"typescript",mjs:"javascript",js:"javascript",css:"css",html:"xml",svg:"xml",json:"json",md:"markdown"},si='<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"><path d="M6 4.5 3.5 8 6 11.5M10 4.5 12.5 8 10 11.5"/></svg>',ai=n((p,e)=>{const s=p?.annotations.find(U).find(r=>`${r.$identifier}${r.$type}`===e);return s===void 0?[]:M.copy(s.text).split(`
`)},"linesOf"),Ws=class Ws extends u{constructor(){super(...arguments),this.$identifier="",this.$type="",this.$among=[]}get name(){return`${this.$identifier}${this.$type}`}get language(){return ei[this.$type.replace(/^\./u,"")]??""}$Listing(...e){this.$Writing(...e),this.containers.replace(this,"span","div")}container(e){return super.container({onClick:n(()=>this.press(),"onClick"),...e})}press(){if(this.$reading===void 0)return;const e=this.book,s=[e.$is].flat().filter(r=>!this.$among.includes(r));e.$is=[this.$reading,...s]}write(){const e=t(O),s=t(_t);return a.jsxs(a.Fragment,{children:[a.jsx(e,{children:this.name}),a.jsx(s,{identifier:this.$identifier,type:this.$type,language:this.language,numbered:!0})]})}$Define(){super.$Define(),this.classes.add(this,"pd-listing")}};n(Ws,"$Listing");let de=Ws;const Es=class Es extends f{constructor(){super(...arguments),this.specification=new pe}defines(e){e.classes.add(this,"pa-opened")}erase(e){e.classes.revert(this)}};n(Es,"$Opened");let Re=Es;const Rs=class Rs extends g{$saidOfAListing(e){l(e instanceof de,"opened is said of a listing, and this is not one")}};n(Rs,"OpenedSpecification");let pe=Rs;St([h("opened is said of a listing")],pe.prototype,"$saidOfAListing");const Bs=class Bs extends oe{constructor(){super(...arguments),this.$name="",this.$skeleton=!1,this.style=m.button`
        --colour: ${e=>e.$colour};
    `}get on(){const e=this.book;return this.$chapter!==void 0&&this.$chapter===e.open&&e.fileOf(this.$chapter)===this.$name}get colour(){return this.$chapter?.annotations.expressed(z)?.colour??""}get lines(){return ai(this.$chapter,this.$name)}$File(...e){this.$Switch(...e),this.containers.replace(this,"button",this.style)}container(e){return super.container({$colour:this.colour,...e})}press(){this.book.show(this.$chapter,this.$name),this.$of!==void 0&&super.press()}write(){return a.jsxs(a.Fragment,{children:[a.jsx("span",{className:"pd-drawing",dangerouslySetInnerHTML:{__html:si}}),a.jsx("span",{className:"pd-file-name",children:this.$name}),this.$skeleton?a.jsx("span",{className:"pd-skeleton",children:this.lines.slice(0,14).map((e,s)=>a.jsx("i",{style:{width:`${Math.max(12,Math.min(100,e.length*2.2))}%`}},s))}):void 0]})}$Define(){super.$Define(),this.classes.add(this,"pd-file")}};n(Bs,"$File");let Be=Bs;const xt=t(de),ti=t(Re),vt=t(Be),Ys=class Ys extends Ht{constructor(){super(...arguments),this.font="'Inter', system-ui, sans-serif",this.prose="'Inter', system-ui, sans-serif",this.mono="'JetBrains Mono', ui-monospace, monospace",this.size="0.875rem",this.leading="1.6",this.measure="44rem",this.spreadColumn="15.5rem",this.space="1.5rem",this.holdsColumn="240px",this.barHeight="50px",this.beat="320ms",this.narrow="48rem",this.colour="#4e9eb9",this.accent="#166178",this.bar="#0c1b1f",this.barInk="#ffffff",this.barDim="#a9bcc1",this.barOn="rgba(255, 255, 255, 0.11)",this.barLine="#1d3339",this.mark="#c8f4fb",this.side="#e3f5fa",this.sideInk="#10252c",this.sideDim="#516770",this.sideOn="#ffffff",this.sideLine="#cbe6ee",this.night="#0c1b1f",this.deep="#14323c",this.blue="#166178",this.sea="#4e9eb9",this.sky="#8fc8dc",this.opal="#c8f4fb",this.pale="#e3f5fa",this.mist="#f1f7f9",this.white="#ffffff",this.ink="#10252c",this.soft="#516770",this.line="#dbe7ec",this.me="#e8590c",this.wash="linear-gradient(105deg, #e2f6fb 0%, #ecf0fd 52%, #fae9f4 100%)",this.serif="'Source Serif 4', Georgia, serif",this.between="'Source Sans 3', 'Inter', system-ui, sans-serif",this.bookPaper="#fbf9f3",this.bookInk="#29251d",this.heading="#10252c",this.capital="#166178",this.lit="#166178",this.faint="#8792a2",this.paper="#ffffff",this.panel="#f1f7f9",this.rule="#dbe7ec",this.edge="transparent",this.tint="#e3f5fa",this.dusk="#14323c",this.glow="#cfe6e3",this.dim="#4f7672",this.keyword="#8ad7ff",this.string="#ffd48a",this.type="#9be3d6",this.comment="#5f8a86",this.haze="#a9bcc1",this.glass="rgba(255, 255, 255, 0.62)",this.binding="linear-gradient(160deg, #16303a, #0c1b1f)",this.spine="inset 5px 0 0 rgba(0, 0, 0, 0.14), inset 6px 0 0 rgba(255, 255, 255, 0.12), 0 10px 20px -10px rgba(0, 0, 0, 0.45)",this.shadow="0 0.75rem 1.4rem -0.9rem rgba(12, 27, 31, 0.55)",this.volume="11.5rem",this.cover="8.25rem",this.card="18rem",this.photo="7rem",this.radius="0.375rem",this.barTint="#ffffff",this.skyInk="#166178",this.lift="inset 5px 0 0 rgba(0, 0, 0, 0.14), inset 6px 0 0 rgba(255, 255, 255, 0.12), 0 14px 24px -12px rgba(0, 0, 0, 0.5)",this.openSpine="inset 7px 0 0 rgba(0, 0, 0, 0.14), inset 8px 0 0 rgba(255, 255, 255, 0.12), 0 12px 22px -14px rgba(0, 0, 0, 0.5)",this.style=m.div`${this.parts()}`}parts(){return[this.page(),this.writing(),this.links(),this.figures(),this.listings(),this.switches(),this.turns(),this.illustrations(),this.marks(),this.library(),this.head(),this.holds(),this.tones()]}page(){return c`
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
            .pd-book .pd-library { box-sizing: border-box; height: ${({theme:e})=>e.barHeight}; padding: 0 calc(${({theme:e})=>e.space} * 0.75); background: ${({theme:e})=>e.barTint}; border-block-end: thin solid ${({theme:e})=>e.line}; }
            .pd-library .pd-paragraph, .pd-me .pd-paragraph { margin-block: 0; }
            .pd-library .pa-reference, .pd-me .pa-reference { color: inherit; text-decoration: none; }
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
        `}};n(Ys,"$LibraryBookTheme");let X=Ys;const ii=t(X);var ri=Object.defineProperty,ni=Object.getOwnPropertyDescriptor,oi=n((p,e,s,r)=>{for(var i=ni(e,s),o=p.length-1,d;o>=0;o--)(d=p[o])&&(i=d(e,s,i)||i);return i&&ri(e,s,i),i},"__decorateClass$a");const Gs=class Gs extends f{constructor(){super(...arguments),this.specification=new ce}defines(e){e.classes.add(this,"pa-label")}erase(e){e.classes.revert(this)}};n(Gs,"$Label");let Ye=Gs;const Js=class Js extends g{$saidOfAWord(e){l(e instanceof I,"label is said of a word, and this is not one")}};n(Js,"LabelSpecification");let ce=Js;oi([h("label is said of a word")],ce.prototype,"$saidOfAWord");const zs=t(Ye),Us=class Us extends u{get cover(){return this.$cover??this.book?.cover}write(){const e=this.cover.annotations.expressed(ks),s=t(O),r=t(zs),i=t(w);return a.jsxs(a.Fragment,{children:[a.jsxs(s,{children:[a.jsx(r,{}),"by"]}),a.jsxs(s,{children:[a.jsx(i,{children:e.means.identifier}),e.name]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-byline")}};n(Us,"$Byline");let Ge=Us;const Ks=class Ks extends u{get cover(){return this.$cover??this.book?.cover}write(){const e=this.cover.annotations.expressed(ot),s=t(O),r=t(zs),i=t(w);return a.jsxs(a.Fragment,{children:[a.jsxs(s,{children:[a.jsx(r,{}),"filed under"]}),a.jsxs(s,{children:[a.jsx(i,{children:e.means.identifier}),e.name]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-filed-under")}};n(Ks,"$FiledUnder");let Je=Ks;const wt=t(Ge),kt=t(Je);var di=Object.defineProperty,pi=Object.getOwnPropertyDescriptor,ci=n((p,e,s,r)=>{for(var i=pi(e,s),o=p.length-1,d;o>=0;o--)(d=p[o])&&(i=d(e,s,i)||i);return i&&di(e,s,i),i},"__decorateClass$9");const Qs=class Qs extends g{$saidOfABook(e){l(e instanceof N,"this is said of a book of this library, and here it is said of something else")}};n(Qs,"OfABookSpecification");let x=Qs;ci([h("this is said of a book of this library")],x.prototype,"$saidOfABook");var li=Object.defineProperty,hi=Object.getOwnPropertyDescriptor,v=n((p,e,s,r)=>{for(var i=hi(e,s),o=p.length-1,d;o>=0;o--)(d=p[o])&&(i=d(e,s,i)||i);return i&&li(e,s,i),i},"__decorateClass$8");const G=n((p,e,s)=>{const r=p?.annotations.expressed(j)?.painted;return r===void 0?e:a.jsx(r,{children:e},s)},"painted"),Xs=class Xs extends y{constructor(){super(...arguments),this.specification=new F}get name(){return this.chapter?.title?.name??""}get author(){return this.chapter?.annotations.expressed(ks)?.name??""}get illustration(){return this.chapter?.text.find(u).find(e=>e.is(Z))}get drawing(){const e=this.illustration?.text.find(Ae)[0];return e===void 0?"":M.copy(e.text).trim()}get scheme(){return this.chapter?.annotations.expressed(j)}get window(){return this.chapter?.annotations.expressed(T)}};n(Xs,"$BookshelfCover");let le=Xs;const Zs=class Zs extends f{constructor(){super(...arguments),this.specification=new ge}defines(e){e.classes.add(this,"pa-illustration")}erase(e){e.classes.revert(this)}};n(Zs,"$Illustration");let Z=Zs;const qs=class qs extends B{constructor(){super(...arguments),this.specification=new q,this.$ground="",this.$band="",this.$bandInk="",this.$foot="",this.$footInk="",this.$ink="",this.style=m.div.attrs({className:"pd-scheme"})`
        ${e=>e.$scheme}
    `}get colours(){return[this.$ground,this.$band,this.$bandInk,this.$foot,this.$footInk,this.$ink]}get declarations(){return`--ground: ${this.$ground}; --band: ${this.$band}; --band-ink: ${this.$bandInk}; --foot: ${this.$foot}; --foot-ink: ${this.$footInk}; --ink: ${this.$ink};`}get painted(){return this._painted}$Scheme(...e){this.$Format(...e);const s=this.style;this._painted=r=>a.jsx(s,{$scheme:this.declarations,...r})}defines(e){e.classes.add(this,"pa-scheme"),e.containers.add(this,this._painted)}erase(e){e.classes.revert(this),e.containers.revert(this)}};n(qs,"$Scheme");let j=qs;const Vs=class Vs extends f{constructor(){super(...arguments),this.specification=new V,this.$x="",this.$y=""}get declarations(){return`--window-x: ${this.$x}px; --window-y: ${this.$y}px;`}};n(Vs,"$Window");let T=Vs;const Ss=class Ss extends f{constructor(){super(...arguments),this.specification=new S}get cover(){return this._cover}get jacket(){return this._cover?.annotations.expressed(y)}$Volume(...e){this._cover=e.find(s=>s instanceof b),this.$Annotation(...e.filter(s=>s!==this._cover))}defines(e){e.classes.add(this,"pa-volume")}erase(e){e.classes.revert(this)}};n(Ss,"$Volume");let D=Ss;const ea=class ea extends u{get cover(){return this.$cover?.annotations.expressed(y)}$Jacket(...e){this.$Writing(...e),this._painted=s=>{const r=this.cover?.scheme?.painted;return r===void 0?a.jsx("div",{...s}):a.jsx(r,{...s})},this.containers.add(this,this._painted)}write(){const e=this.cover;if(e===void 0)return;const s=t(O),r=t(zs);return a.jsxs(a.Fragment,{children:[a.jsx(s,{children:e.name}),a.jsx("span",{className:"pd-drawing",dangerouslySetInnerHTML:{__html:e.drawing}}),a.jsxs(s,{children:[a.jsx(r,{}),e.author]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-jacket")}};n(ea,"$Jacket");let Ue=ea;const sa=class sa extends u{constructor(){super(...arguments),this.unfolded=!1}get filedElsewhere(){return this.$subject!==void 0&&this.$subject!==this.$cover}container(e){return super.container({onMouseOver:n(s=>{s.target instanceof Element&&s.target.closest(".pd-filed")!==null&&this.unfold()},"onMouseOver"),onMouseLeave:n(()=>this.fold(),"onMouseLeave"),...e})}unfold(){this.unfolded=!0}fold(){this.unfolded=!1}write(){const e=this.$cover,s=this.$subject;if(e!==void 0)return a.jsxs(a.Fragment,{children:[this.filedElsewhere?G(s,a.jsx("span",{className:"pd-filed",children:this.mark(s)})):void 0,G(e,a.jsx("span",{className:"pd-own",children:this.mark(e)})),a.jsxs("span",{className:"pd-names",children:[G(e,a.jsx("span",{className:"pd-name",children:this.name(e)})),this.filedElsewhere?G(s,a.jsx("span",{className:"pd-name pd-under",children:this.name(s)})):void 0]})]})}mark(e){const s=t(xi),r=t(w);return a.jsx(s,{cover:e,children:a.jsx(r,{children:e.mention.identifier})})}name(e){const s=t(O),r=t(w);return a.jsxs(s,{children:[a.jsx(r,{children:e.mention.identifier}),e.title.name]})}$Define(){super.$Define(),this.classes.add(this,"pd-logo");const e=t(vi);this.annotations.add(this,a.jsx(e,{}))}};n(sa,"$Logo");let he=sa;var H;let fi=(H=class extends f{constructor(){super(...arguments),this.specification=new fe}defines(e){e.unfolded&&e.classes.add(this,"pa-unfolded")}erase(e){e.classes.revert(this)}},n(H,"$Unfolded"),H);const aa=class aa extends g{$saidOfALogo(e){l(e instanceof he,"unfolded is said of a logo, and this is not one")}};n(aa,"UnfoldedSpecification");let fe=aa;v([h("unfolded is said of a logo")],fe.prototype,"$saidOfALogo");const ta=class ta extends I{constructor(){super(...arguments),this.style=m.span`
        ${e=>e.$vars}
    `}get cover(){return this.$cover?.annotations.expressed(y)}$Mark(...e){this.$Writing(...e);const s=this.style;this._painted=r=>a.jsx(s,{$vars:`${this.cover?.scheme?.declarations??""} ${this.cover?.window?.declarations??""}`,...r}),this.containers.add(this,this._painted)}write(){return a.jsx("span",{className:"pd-drawing",dangerouslySetInnerHTML:{__html:this.cover?.drawing??""}})}$Define(){super.$Define(),this.classes.add(this,"pd-mark")}};n(ta,"$Mark");let Ke=ta;const ia=class ia extends Lt{$carriesItsScheme(e){l(e.is(j),"a bookshelf cover carries its scheme, and this one carries none")}$carriesItsWindow(e){l(e.is(T),"a bookshelf cover carries its window, and this one carries none")}$carriesItsIllustration(e){l(e instanceof b&&e.text.find(u).some(s=>s.is(Z)),"a bookshelf cover carries its illustration, and this one carries none")}};n(ia,"BookshelfCoverSpecification");let F=ia;v([h("a bookshelf cover carries its scheme")],F.prototype,"$carriesItsScheme");v([h("a bookshelf cover carries its window")],F.prototype,"$carriesItsWindow");v([h("a bookshelf cover carries its illustration")],F.prototype,"$carriesItsIllustration");const ra=class ra extends g{$saidOfADrawing(e){l(e instanceof u&&e.chapter?.is(y)===!0&&e.text.find(Ae).length===1,"an illustration is said of a paragraph of a cover that holds one drawing, and this is not one")}};n(ra,"IllustrationSpecification");let ge=ra;v([h("an illustration is said of a paragraph of a cover that holds one drawing")],ge.prototype,"$saidOfADrawing");const na=class na extends g{$saidOfACover(e){l(e instanceof b&&e.is(y),"a scheme is said of a cover, and this is not one")}$givenItsColours(e){const s=e.annotations.expressed(j)?.colours??[];l(s.every(r=>/^#[0-9a-f]{6}$/iu.test(r)),"a scheme is given its six colours as six hex digits each — the ground, the band and its ink, the foot and its ink, and the ink of the drawing — and this one was given something else")}};n(na,"SchemeSpecification");let q=na;v([h("a scheme is said of a cover")],q.prototype,"$saidOfACover");v([h("a scheme is given its six colours")],q.prototype,"$givenItsColours");const oa=class oa extends g{$saidOfACover(e){l(e instanceof b&&e.is(y),"a window is said of a cover, and this is not one")}$givenItsPlace(e){const s=e.annotations.expressed(T);l(/^-?\d+$/u.test(s?.$x??"")&&/^-?\d+$/u.test(s?.$y??""),"a window is given where it stands on the drawing, two whole numbers, and this one was given something else")}};n(oa,"WindowSpecification");let V=oa;v([h("a window is said of a cover")],V.prototype,"$saidOfACover");v([h("a window is given where it stands on the drawing")],V.prototype,"$givenItsPlace");const da=class da extends g{$saidOfAChapterStandingForABook(e){l(e instanceof b&&(e.is(ne)||e.is(y)),"a volume is said of a chapter that stands for another book, a synopsis of it or a cover filed under it, and this is neither")}$holdsTheCover(e){const s=[e.annotations.expressed(ne)?.means?.identifier,e.annotations.expressed(ot)?.means?.identifier,e.annotations.expressed(ks)?.means?.identifier];l(e.annotations.find(D).every(r=>r.cover?.is(y)===!0&&s.includes(r.cover.mention?.identifier)),"a volume holds the cover of a book its chapter stands for, the book a synopsis is of or the subject or author a cover is filed under, and one here holds something else")}};n(da,"VolumeSpecification");let S=da;v([h("a volume is said of a chapter that stands for another book")],S.prototype,"$saidOfAChapterStandingForABook");v([h("a volume holds the cover of a book its chapter stands for")],S.prototype,"$holdsTheCover");const gi=t(le),yt=t(Z),jt=t(j),zt=t(T),ui=t(D),$i=t(Ue),bi=t(he),mi=t(fi),Ot=t(Ke),xi=Ot,vi=mi,Ie=class Ie extends Tt{constructor(){super(...arguments),this.specification=new x,this.themeProvider=!0,this.style=m.div`
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
    `}get pages(){return this.book.pages}get open(){return this.book.open}$Bound(){const e=this.style,s=this.book;this.style=r=>a.jsx(e,{$at:s.means?.identifier,$scheme:s.cover?.annotations.expressed(j)?.declarations,...r}),super.$Bound()}defines(e){for(const r of e.annotations.after(this))r instanceof Ie&&e.annotations.express(r,!1);super.defines(e),e.classes.add(this,"pa-layout");const s=this.open;s!==void 0&&e.classes.add(this,"pa-turned"),s!==void 0&&this.book.appendix.includes(s)&&e.classes.add(this,"pa-built")}erase(e){super.erase(e),e.classes.revert(this)}parts(){return[this.paging(),this.regions(),this.areas(),this.phone()]}paging(){return c`
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
        `}};n(Ie,"$Layout");let Qe=Ie;const wi=t(Qe);var ki=Object.defineProperty,yi=Object.getOwnPropertyDescriptor,ie=n((p,e,s,r)=>{for(var i=yi(e,s),o=p.length-1,d;o>=0;o--)(d=p[o])&&(i=d(e,s,i)||i);return i&&ki(e,s,i),i},"__decorateClass$7");const ji='<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3.5 10.5 8 6 12.5"/></svg>',zi='<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linejoin="round" stroke-linecap="round"><rect class="ground" x="0.75" y="0.75" width="14.5" height="14.5"/><path d="M3.5 5.5h3l1.5 1.5h4.5v5h-9z"/></svg>',pa=class pa extends B{constructor(){super(...arguments),this.specification=new me,this.style=m.div`
        ${e=>e.$vars===void 0?"":`.pa-entry { ${e.$vars} }`}
    `}get place(){return re(this.parent).identifier}get leads(){return this.book.named(this.place)}get cover(){return this.leads?.annotations.expressed(D)?.cover??this.book.coverOf(this.place)}get vars(){const e=this.cover?.annotations.expressed(j);if(e!==void 0)return e.declarations;const s=this.leads?.annotations.expressed(A)?.colour;return s===void 0?void 0:`--colour: ${s};`}$Entry(...e){this.$Format(...e);const s=this.style;this._painted=r=>a.jsx(s,{$vars:this.vars,...r})}defines(e){e.classes.add(this,"pa-entry"),e.containers.add(this,this._painted),(this.place===this.book?.$bookmark||this.place===this.book.open?.mention?.identifier)&&e.classes.add(this,"pa-open")}erase(e){e.classes.revert(this),e.containers.revert(this)}};n(pa,"$Entry");let ee=pa;const ca=class ca extends f{constructor(){super(...arguments),this.specification=new be}defines(e){e.classes.add(this,"pa-appendix")}erase(e){e.classes.revert(this)}};n(ca,"$Appendix");let se=ca;const la=class la extends f{constructor(){super(...arguments),this.specification=new $e}get entries(){return this.chapter.text.find(P).flatMap(s=>s.text.find(u)).filter(s=>!s.is(Ft)&&re(s)!==void 0)}$Bound(){const e=t(Pt);for(const s of this.entries)s.annotations.add(this,a.jsx(e,{}));super.$Bound()}};n(la,"$Index");let ue=la;const ha=class ha extends g{$saidOfATableOfContents(e){l(e.is(Y),"an index is said of a table of contents, and this chapter is not one")}};n(ha,"IndexSpecification");let $e=ha;ie([h("an index is said of a table of contents")],$e.prototype,"$saidOfATableOfContents");const fa=class fa extends g{$saidOfASection(e){l(e instanceof P&&e.chapter?.is(Y)===!0,"an appendix is said of a section of a table of contents, and this is not one")}};n(fa,"AppendixSpecification");let be=fa;ie([h("an appendix is said of a section of a table of contents")],be.prototype,"$saidOfASection");const ga=class ga extends g{$saidOfAnEntry(e){l(e instanceof u&&re(e)!==void 0,"an entry is said of a paragraph that leads somewhere, and this is not one")}};n(ga,"EntrySpecification");let me=ga;ie([h("an entry is said of a paragraph that leads somewhere")],me.prototype,"$saidOfAnEntry");const ua=class ua extends f{constructor(){super(...arguments),this.specification=new xe}defines(e){e.classes.add(this,"pa-folded")}erase(e){e.classes.revert(this)}};n(ua,"$Folded");let Xe=ua;const $a=class $a extends K{get on(){return this.$target!==void 0&&[this.$target.$is].flat().includes(this.$of)}container(e){return super.container({...e,onClick:n(s=>{s.preventDefault(),this.press()},"onClick")})}press(){const e=this.$target,s=[e.$is].flat();e.$is=this.on?s.filter(r=>r!==this.$of):[this.$of,...s]}write(){return a.jsx("span",{className:"pd-drawing",dangerouslySetInnerHTML:{__html:ji}})}$Define(){super.$Define(),this.classes.add(this,"pd-twist")}};n($a,"$Twist");let Ze=$a;const ba=class ba extends B{constructor(){super(...arguments),this.specification=new ve}$Folder(...e){this.$Format(...e);const s=t(Di);this._layer=({className:r,...i})=>a.jsxs("div",{className:`${r??""} pd-folder`.trim(),...i,children:[a.jsx(s,{target:this.parent,of:Pi}),a.jsx("span",{className:"pd-drawing pd-folder-mark",dangerouslySetInnerHTML:{__html:zi}}),i.children]})}defines(e){e.classes.add(this,"pa-folder"),e.containers.add(this,this._layer)}erase(e){e.classes.revert(this),e.containers.revert(this)}};n(ba,"$Folder");let qe=ba;const ma=class ma extends g{$saidOfASectionOrAnEntry(e){l(e instanceof P&&e.chapter?.is(Y)===!0||e.is(ee),"folded is said of a section of a table of contents or of an entry, and this is neither")}};n(ma,"FoldedSpecification");let xe=ma;ie([h("folded is said of a section of a table of contents or of an entry")],xe.prototype,"$saidOfASectionOrAnEntry");const xa=class xa extends g{$saidOfASection(e){l(e instanceof P&&e.chapter?.is(Y)===!0,"a folder is said of a section of a table of contents, and this is not one")}};n(xa,"FolderSpecification");let ve=xa;ie([h("a folder is said of a section of a table of contents")],ve.prototype,"$saidOfASection");const re=n(p=>p.annotations.expressed(it)??p.text.find(I).map(e=>e.annotations.expressed(it)).find(e=>e!==void 0),"leads"),Pt=t(ee),lr=t(ue),hr=t(se),Os=t(Xe),Dt=t(Ze),Oi=t(qe),Pi=Os,Di=Dt,Ce=class Ce extends f{constructor(){super(...arguments),this.specification=new x}defines(e){for(const s of e.annotations.after(this))s instanceof Ce&&e.annotations.express(s,!1);e.classes.add(this,"pa-tone")}erase(e){e.classes.revert(this)}};n(Ce,"$Tone");let W=Ce;const va=class va extends W{defines(e){super.defines(e),e.classes.add(this,"pa-dark")}};n(va,"$Dark");let Ve=va;const wa=class wa extends W{defines(e){super.defines(e),e.classes.add(this,"pa-light")}};n(wa,"$Light");let Se=wa;const ka=class ka extends W{defines(e){super.defines(e),e.classes.add(this,"pa-white-over-black")}};n(ka,"$WhiteOverBlack");let es=ka;const Ne=t(W),It=t(Ve),Ps=t(Se),Ii=t(es);var Ci=Object.defineProperty,Mi=Object.getOwnPropertyDescriptor,Ai=n((p,e,s,r)=>{for(var i=Mi(e,s),o=p.length-1,d;o>=0;o--)(d=p[o])&&(i=d(e,s,i)||i);return i&&Ci(e,s,i),i},"__decorateClass$6");const ya=class ya extends I{write(){const e=this.book.pages;return`${e.indexOf(this.chapter)+1} of ${e.length}`}$Define(){super.$Define(),this.classes.add(this,"pd-count")}};n(ya,"$Count");let ss=ya;const ja=class ja extends f{constructor(){super(...arguments),this.specification=new ae}defines(e){e.classes.add(this,"pa-before")}erase(e){e.classes.revert(this)}};n(ja,"$Before");let as=ja;const za=class za extends f{constructor(){super(...arguments),this.specification=new ae}defines(e){e.classes.add(this,"pa-after")}erase(e){e.classes.revert(this)}};n(za,"$After");let ts=za;const Oa=class Oa extends g{$saidOfAWordOfATurn(e){l(e instanceof I&&e.parent instanceof we,"this is said of a word of a turn, and here it is said of something else")}};n(Oa,"OfATurnSpecification");let ae=Oa;Ai([h("this is said of a word of a turn")],ae.prototype,"$saidOfAWordOfATurn");const Ni=t(ss),_i=t(as),Hi=t(ts),Pa=class Pa extends u{get before(){const e=this.book.pages;return e[e.indexOf(this.chapter)-1]??this.chapter}get after(){const e=this.book.pages;return e[e.indexOf(this.chapter)+1]??this.chapter}write(){const e=t(O),s=t(Ni),r=t(_i),i=t(Hi),o=t(this.before===this.chapter?Fe:w),d=t(this.after===this.chapter?Fe:w);return a.jsxs(a.Fragment,{children:[a.jsxs(e,{children:[a.jsx(r,{}),a.jsx(o,{children:this.before.mention.identifier}),"← ",this.before.title.name]}),a.jsx(s,{}),a.jsxs(e,{children:[a.jsx(i,{}),a.jsx(d,{children:this.after.mention.identifier}),this.after.title.name," →"]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-turn")}};n(Pa,"$Turn");let we=Pa;const Li=t(we);var Ti=Object.defineProperty,Fi=Object.getOwnPropertyDescriptor,_e=n((p,e,s,r)=>{for(var i=r>1?void 0:r?Fi(e,s):e,o=p.length-1,d;o>=0;o--)(d=p[o])&&(i=(r?d(e,s,i):d(i))||i);return r&&i&&Ti(e,s,i),i},"__decorateClass$5");const Da=class Da extends Wt{constructor(){super(...arguments),this.specification=new _}get chapters(){return this.text.find(b).filter(e=>[...e.classes].includes("pd-canonical"))}get placed(){return[this.cover,this.synopsis,this.table,...this.chapters]}get pages(){const e=this.appendix;return this.chapters.filter(s=>!e.includes(s))}get appendix(){const e=this.table;if(e===void 0)return[];const s=e.text.find(P).filter(r=>r.is(se)).flatMap(r=>r.text.find(u).map(i=>re(i)?.identifier));return this.chapters.filter(r=>s.includes(r.mention?.identifier??""))}get open(){return this.$bookmark===void 0?void 0:this.named(this.$bookmark)}get tones(){return[It,Ps,Ii]}write(){return a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"pd-library",children:this.library()}),a.jsx("div",{className:"pd-me",children:this.me()}),a.jsx("div",{className:"pd-holds",children:this.holds()}),a.jsx("div",{className:"pd-head",children:this.head()}),a.jsxs("div",{className:"pd-leaves",children:[this.front(),this.leaves()]})]})}library(){if(this._logo===void 0)return;const e=t(this._logo);return a.jsx(e,{})}me(){const e=t(Ot),s=t(w),r=this.coverOf(this.author?.means?.identifier);return a.jsxs(a.Fragment,{children:[this.byline(),r===void 0?void 0:this.painted(r,a.jsx(e,{cover:r,children:a.jsx(s,{children:r.mention.identifier})}))]})}painted(e,s,r){return G(e,s,r)}holds(){const e=t(this.table);return a.jsx(e,{})}head(){const e=t(this.cover);return a.jsxs(a.Fragment,{children:[this.filed(),a.jsx(e,{}),a.jsx("div",{className:"pd-switches",children:this.switches()})]})}front(){return a.jsx("div",{className:this.open===void 0?"pd-leaf pd-front pd-open":"pd-leaf pd-front",children:this.opening()})}opening(){const e=t(this.synopsis);return a.jsx("div",{className:"pd-words",children:a.jsx(e,{})})}leaves(){return this.chapters.map((e,s)=>{const r=t(e);return a.jsxs("div",{className:e===this.open?"pd-leaf pd-open":"pd-leaf",children:[a.jsx("div",{className:"pd-words",children:a.jsx(r,{})}),a.jsx("div",{className:"pd-files",children:this.listings(e)})]},s)})}named(e){return(this._places??this.places()).get(e)}places(){const e=new Map;for(const s of this.chapters)for(const r of this.sections(s))r.mention!==void 0&&!e.has(r.mention.identifier)&&e.set(r.mention.identifier,s);for(const s of this.chapters)s.mention!==void 0&&e.set(s.mention.identifier,s);return e}coverOf(e){if(e!==void 0)return this.means?.identifier===e?this.cover:this.cover?.annotations.find(D).map(s=>s.cover).find(s=>s?.mention?.identifier===e)}byline(){const e=t(wt);return a.jsx(e,{chapter:this.cover})}filed(){const e=t(kt);return a.jsx(e,{chapter:this.cover})}switches(){}listings(e){const s=t(xt);return e.annotations.find(U).reverse().map((r,i)=>a.jsx(s,{chapter:e,identifier:r.$identifier,type:r.$type},i))}filesOf(e){return e.annotations.find(U).reverse().map(s=>`${s.$identifier}${s.$type}`)}sections(e){return e.text.find(P).flatMap(s=>[s,...this.sections(s)])}turn(){this.bookmark!==this.cover&&super.turn()}$Define(){super.$Define();const e=t(wi),s=t(Ne);this.annotations.add(this,a.jsx(e,{}),a.jsx(s,{}))}$Bound(){this._places=this.places();const e=t(bi);this._logo=Et.chemical(a.jsx(e,{cover:this.cover,subject:this.coverOf(this.subject?.means?.identifier)}),this);const s=t(Li);for(const r of this.pages)r.text.add(this,a.jsx(s,{}));super.$Bound()}};n(Da,"$LibraryBook");let N=Da;_e([dt()],N.prototype,"_places",2);const Ia=class Ia extends Rt{$holdsOnlyChapters(e){l([...e.text].every(s=>s instanceof b),"a book of this library holds only chapters, and this one holds something else")}$placesEveryChapter(e){l(e.text.find(b).every(s=>e.placed.includes(s)),"a book of this library has a place for every chapter it holds, and this one holds a chapter it places nowhere")}$onlyAChapterAppends(e){l(e.text.find(b).every(s=>e.chapters.includes(s)||!s.is(U)),"only an ordinary chapter appends a file, and here a cover, a synopsis or a table of contents appends one")}};n(Ia,"LibraryBookSpecification");let _=Ia;_e([h("a book of this library holds only chapters")],_.prototype,"$holdsOnlyChapters",1);_e([h("a book of this library has a place for every chapter it holds")],_.prototype,"$placesEveryChapter",1);_e([h("only an ordinary chapter appends a file")],_.prototype,"$onlyAChapterAppends",1);const Ct=t(N);t(Ct,ys)(ii);t(Ct,Ne)(It);var Wi=Object.defineProperty,Ei=Object.getOwnPropertyDescriptor,Ri=n((p,e,s,r)=>{for(var i=Ei(e,s),o=p.length-1,d;o>=0;o--)(d=p[o])&&(i=d(e,s,i)||i);return i&&Wi(e,s,i),i},"__decorateClass$4");const Me=class Me extends f{constructor(){super(...arguments),this.specification=new x}defines(e){for(const s of e.annotations.after(this))s instanceof Me&&e.annotations.express(s,!1);e.classes.add(this,"pa-reading")}erase(e){e.classes.revert(this)}};n(Me,"$Reading");let E=Me;const Ca=class Ca extends E{defines(e){super.defines(e),e.classes.add(this,"pa-code-forward")}};n(Ca,"$CodeForward");let is=Ca;const Ma=class Ma extends E{defines(e){super.defines(e),e.classes.add(this,"pa-words-forward")}};n(Ma,"$WordsForward");let rs=Ma;const Aa=class Aa extends E{defines(e){super.defines(e),e.classes.add(this,"pa-split")}};n(Aa,"$Split");let ns=Aa;const Na=class Na extends f{constructor(){super(...arguments),this.specification=new x}defines(e){e.classes.add(this,"pa-light-code")}erase(e){e.classes.revert(this)}};n(Na,"$LightCode");let os=Na;const _a=class _a extends f{constructor(){super(...arguments),this.specification=new x}defines(e){e.classes.add(this,"pa-wrapped")}erase(e){e.classes.revert(this)}};n(_a,"$Wrapped");let ds=_a;const Ha=class Ha extends f{constructor(){super(...arguments),this.specification=new x}defines(e){e.classes.add(this,"pa-numbered")}erase(e){e.classes.revert(this)}};n(Ha,"$Numbered");let ps=Ha;const La=class La extends f{constructor(){super(...arguments),this.specification=new ye}defines(e){e.classes.add(this,"pa-brief")}erase(e){e.classes.revert(this)}};n(La,"$Brief");let ke=La;const Ta=class Ta extends g{$saidOfAParagraph(e){l(e instanceof u,"brief is said of a paragraph, and this is not one")}};n(Ta,"BriefSpecification");let ye=Ta;Ri([h("brief is said of a paragraph")],ye.prototype,"$saidOfAParagraph");t(E);const Le=t(is),Te=t(rs),J=t(ns),Bi=t(os),Yi=t(ds),rt=t(ps),fr=t(ke);var Gi=Object.defineProperty,Ji=Object.getOwnPropertyDescriptor,Ui=n((p,e,s,r)=>{for(var i=Ji(e,s),o=p.length-1,d;o>=0;o--)(d=p[o])&&(i=d(e,s,i)||i);return i&&Gi(e,s,i),i},"__decorateClass$3");const Fa=class Fa extends B{constructor(){super(...arguments),this.specification=new x,this.themeProvider=!0,this.style=m.div`
        .pa-spread .pd-leaf.pd-open {
            display: grid;
            grid-template-columns: minmax(0, 1fr) 0 calc(2 * ${({theme:e})=>e.space});
            grid-template-areas: 'words panel rail';
            min-height: calc(100vh - ${({theme:e})=>e.barHeight});
            transition: grid-template-columns 0.28s ease;
        }
        .pa-spread.pa-split .pd-leaf.pd-open { grid-template-columns: minmax(380px, 1fr) min(44vw, 720px) calc(2 * ${({theme:e})=>e.space}); }
        .pa-spread.pa-code-forward .pd-leaf.pd-open {
            grid-template-areas: 'panel panel grip';
            grid-template-columns: minmax(0, 1fr) 0 calc(${({theme:e})=>e.space} * 0.75);
            height: calc(100vh - ${({theme:e})=>e.barHeight});
        }
        .pa-spread .pd-words { grid-area: words; min-width: 0; overflow: hidden; }
        .pa-spread.pa-code-forward .pd-words { display: none; }
        .pa-spread .pd-files { grid-area: panel; display: grid; grid-template-rows: auto minmax(0, 1fr); min-width: 0; overflow: hidden; }
        .pa-spread .pd-rail { grid-area: rail; }
        .pa-spread.pa-code-forward .pd-rail { display: none; }
        .pa-spread .pd-grip { grid-area: grip; display: none; }
        .pa-spread.pa-code-forward .pd-grip { display: block; }
        @media (max-width: ${({theme:e})=>e.narrow}) {
            .pa-spread .pd-leaf.pd-open, .pa-spread.pa-split .pd-leaf.pd-open, .pa-spread.pa-code-forward .pd-leaf.pd-open { display: block; height: auto; min-height: 0; }
            .pa-spread .pd-rail, .pa-spread .pd-grip { display: none; }
            .pa-spread.pa-code-forward .pd-words { display: block; }
        }
    `}defines(e){super.defines(e),e.classes.add(this,"pa-spread")}erase(e){super.erase(e),e.classes.revert(this)}};n(Fa,"$Spread");let cs=Fa;const Ki=t(cs),Wa=class Wa extends N{constructor(){super(...arguments),this.specification=new je,this.$file=""}get readings(){return[Te,J,Le]}get open(){return super.open??this.pages[0]}fileOf(e){const s=this.filesOf(e);return s.includes(this.$file)?this.$file:s[0]}show(e,s){this.$file=s}head(){}front(){}switches(){}leaves(){const e=t(Jt),s=t(We),r=t(vt),i=t(xt);return this.chapters.map((o,d)=>{const C=t(o),k=this.filesOf(o),Mt=this.fileOf(o),At=o.text.find(P).flatMap($=>$.text.find(u)).slice(0,16);return a.jsxs("div",{className:o===this.open?"pd-leaf pd-open":"pd-leaf",children:[a.jsx("div",{className:"pd-words",children:a.jsx(C,{})}),a.jsxs("div",{className:"pd-files",children:[a.jsxs("div",{className:"pd-tabs",children:[k.map($=>a.jsx(r,{chapter:o,name:$},$)),a.jsx("span",{className:"pd-words-tab",children:a.jsx(e,{chapter:this.cover,of:Te,among:this.readings,children:"words"})}),a.jsx("span",{className:"pd-dock pd-to-full",children:a.jsx(e,{chapter:this.cover,of:Le,among:this.readings,children:"full screen"})}),a.jsx("span",{className:"pd-dock pd-to-split",children:a.jsx(e,{chapter:this.cover,of:J,among:this.readings,children:"split"})}),a.jsxs("span",{className:"pd-options",children:[a.jsx(s,{chapter:this.cover,of:Bi,children:"light"}),a.jsx(s,{chapter:this.cover,of:Yi,children:"wrap"}),a.jsx(s,{chapter:this.cover,of:rt,children:"lines"})]})]}),a.jsx("div",{className:"pd-listings",children:o.annotations.find(U).reverse().map(($,He)=>a.jsx(i,{chapter:o,identifier:$.$identifier,type:$.$type,reading:Le,among:this.readings,is:`${$.$identifier}${$.$type}`===Mt?ti:[]},He))})]}),a.jsx("div",{className:"pd-rail",children:k.map($=>a.jsx(r,{chapter:o,name:$,of:J,among:this.readings,skeleton:!0},$))}),a.jsx("div",{className:"pd-grip",children:a.jsx(e,{chapter:this.cover,of:J,among:this.readings,children:a.jsx("span",{className:"pd-skeleton",children:At.map(($,He)=>a.jsx("i",{style:{width:`${Math.max(25,Math.min(100,M.copy($.text).length/4))}%`}},He))})})})]},d)})}$Define(){super.$Define();const e=t(Ki);this.annotations.add(this,a.jsx(e,{})),this.$is=[Te,rt]}$Bound(){const e=t(Oi);for(const s of this.table?.text.find(P)??[])s.annotations.add(this,a.jsx(e,{})),s.is(se)&&(s.$is=[Os]);super.$Bound()}};n(Wa,"$Manual");let ls=Wa;const Ea=class Ea extends _{$everyChapterHasABrief(e){l(e.chapters.every(s=>s.text.find(u).some(r=>r.is(ke))),"every chapter of a manual opens with a brief, and one here has none")}};n(Ea,"ManualSpecification");let je=Ea;Ui([h("every chapter of a manual opens with a brief")],je.prototype,"$everyChapterHasABrief");const Ds=t(ls);t(Ds,Ne)(Ps);var Qi=Object.defineProperty,Xi=Object.getOwnPropertyDescriptor,Is=n((p,e,s,r)=>{for(var i=Xi(e,s),o=p.length-1,d;o>=0;o--)(d=p[o])&&(i=d(e,s,i)||i);return i&&Qi(e,s,i),i},"__decorateClass$2");const Ra=class Ra extends f{constructor(){super(...arguments),this.specification=new R}get date(){return this.text.find(pt)[0]}defines(e){e.classes.add(this,"pa-dated")}erase(e){e.classes.revert(this)}note(){const e=t(this.date);return a.jsx(e,{})}};n(Ra,"$Dated");let te=Ra;const Ba=class Ba extends g{$saidOfAChapter(e){l(e instanceof b,"dated is said of a chapter, and this is not one")}$datedOnce(e){l(e.annotations.containsOne(te),"a chapter is dated once, and this one is dated more than once")}$givenOneDate(e){l(e.annotations.expressed(te)?.text.find(pt).length===1,"a dated chapter is given one date, and this one is given none or more than one")}};n(Ba,"DatedSpecification");let R=Ba;Is([h("dated is said of a chapter")],R.prototype,"$saidOfAChapter");Is([h("a chapter is dated once")],R.prototype,"$datedOnce");Is([h("a dated chapter is given one date")],R.prototype,"$givenOneDate");const gr=t(te),Ya=class Ya extends ee{constructor(){super(...arguments),this.label=m.span.attrs({className:"pa-number"})``}get number(){return this.book.pages.indexOf(this.leads)+1}get kind(){return this.leads?.annotations.expressed(z)}get files(){const e=this.leads;return e===void 0?[]:this.book.filesOf(e)}note(){const e=this.label,s=t(mt),r=t(Dt),i=t(vt),o=this.kind,d=this.leads,C=this.files;return a.jsxs(a.Fragment,{children:[C.length===0?a.jsx("span",{className:"pd-twist pd-blank"}):a.jsx(r,{target:this.parent,of:Os}),o===void 0?void 0:a.jsx(s,{kind:o}),this.number===0?void 0:a.jsx(e,{children:String(this.number)}),C.map(k=>a.jsx(i,{chapter:d,name:k,of:J,among:this.book.readings},k))]})}};n(Ya,"$NumberedEntry");let hs=Ya;const Zi=t(hs);t(Ds,Pt)(Zi);const Ga=class Ga extends X{constructor(){super(...arguments),this.measure="104ch",this.holdsColumn="272px",this.barHeight="52px",this.space="24px",this.size="14px",this.beat="0.22s",this.serif="'Source Serif 4', Georgia, serif",this.paper="#fdfcfa",this.ink="#343c4a",this.heading="#1a1f36",this.soft="#727d8c",this.faint="#9ea8b5",this.line="#e4e9f2",this.tint="#f0f4fc",this.barTint="#f8fafe",this.side="#f7f8fb",this.sideInk="#3a4452",this.sideDim="#6b7684",this.sideLine="#e0e4eb",this.sky="#e3edfb",this.skyInk="#4a6ea0",this.accent="#4a6ea0",this.colour="#4fb3a8",this.radius="6px",this.wash="linear-gradient(135deg, #f1f5fd 0%, #fdfcfa 48%, #fdf5ee 100%)"}parts(){return[...super.parts(),this.tree(),this.icons(),this.words(),this.rail(),this.grip(),this.files(),this.code(),this.small()]}library(){return c`
            ${super.library()}
            .pd-book.pa-tone .pd-library {
                background: linear-gradient(180deg, #fbfcfe 0%, #f8fafe 60%, #f1f4fa 100%);
                border-block-end: thin solid #dfe4ed;
                box-shadow: 0 1px 0 rgba(43, 54, 60, 0.05);
            }
        `}holds(){return c`
            ${super.holds()}
            .pd-holds .pd-paragraph.pa-entry::before { content: none; }
        `}page(){return c`
            ${super.page()}
            .pd-book {
                --night: color-mix(in oklch, #0f2a33 55%, #2b363c);
                --dusk: color-mix(in oklch, #17363f 55%, #343f45);
                --dawn: color-mix(in oklch, #17363f 40%, #4a5560);
                --glow: #d6e1e3;
                --dim: color-mix(in oklch, #d8c48e 38%, #17363f);
                --brass: color-mix(in oklch, #d8c48e 72%, white);
                line-height: 1.6;
            }
            .pd-book.pa-light-code {
                --night: #f6f7f4;
                --dusk: #eceee8;
                --dawn: #ffffff;
                --glow: #2b363c;
                --dim: color-mix(in oklch, #5d4a16 45%, white);
                --brass: #5d4a16;
            }
            .pd-book.pa-layout { background: ${({theme:e})=>e.wash}; }
            .pd-book .pd-head { display: none; padding: 0; }
        `}tree(){return c`
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
            .pd-holds .pd-section { margin: 0 0 calc(${({theme:e})=>e.space} / 3); }
            .pd-holds .pd-folder { position: relative; }
            .pd-book .pd-holds .pd-heading {
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
            .pd-holds .pd-heading:hover { background: color-mix(in oklab, ${({theme:e})=>e.sky} 30%, white); }
            .pd-holds .pd-heading .pa-reference { color: inherit; text-decoration: none; }
            .pd-holds .pd-twist {
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
            .pd-holds .pd-twist .pd-drawing { display: block; width: calc(0.7143 * ${({theme:e})=>e.size}); height: calc(0.7143 * ${({theme:e})=>e.size}); }
            .pd-holds .pd-twist svg, .pd-holds .pd-folder-mark svg, .pd-holds .pd-file svg { display: block; width: 100%; height: 100%; }
            .pd-holds .pd-word.pd-twist[aria-pressed='true'] { color: #a5aebb; background: none; border-color: transparent; }
            .pd-holds .pd-twist[aria-pressed='false'] { transform: rotate(90deg); }
            .pd-holds .pd-twist:hover { color: ${({theme:e})=>e.ink}; }
            .pd-holds .pd-folder .pd-twist { position: absolute; top: calc(${({theme:e})=>e.space} * 0.2292); left: calc(${({theme:e})=>e.space} * 0.4167); }
            .pd-holds .pd-folder-mark {
                position: absolute;
                top: calc(${({theme:e})=>e.space} * 0.2292);
                left: calc(${({theme:e})=>e.space} * 1.375);
                width: calc(1.1429 * ${({theme:e})=>e.size});
                height: calc(1.1429 * ${({theme:e})=>e.size});
                color: #8a94a3;
            }
            .pd-holds .pd-folder-mark .ground { fill: #f1f3f5; stroke: #8a94a3; stroke-width: 1.5; }
            .pd-book .pd-holds .pa-folded .pd-paragraph.pa-entry { display: none; }
            .pd-book .pd-holds .pd-paragraph.pa-entry {
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
            .pd-holds .pa-entry .pd-twist { order: -2; position: static; }
            .pd-holds .pa-entry .pd-twist.pd-blank { visibility: hidden; }
            .pd-holds .pa-entry .pd-icon { order: -1; }
            .pd-holds .pa-entry .pa-content { flex: 1; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
            .pd-book .pd-holds .pa-entry:hover { background: linear-gradient(color-mix(in oklab, ${({theme:e})=>e.sky} 40%, white), color-mix(in oklab, ${({theme:e})=>e.sky} 40%, white)) left top / 100% calc(1.9286 * ${({theme:e})=>e.size}) no-repeat; }
            .pd-book .pd-holds .pd-paragraph.pa-entry.pa-open {
                background: linear-gradient(var(--band-ink), var(--band-ink)) left top / 3px calc(1.9286 * ${({theme:e})=>e.size}) no-repeat, linear-gradient(color-mix(in oklab, ${({theme:e})=>e.sky} 72%, white), color-mix(in oklab, ${({theme:e})=>e.sky} 72%, white)) left top / 100% calc(1.9286 * ${({theme:e})=>e.size}) no-repeat;
                color: var(--band-ink);
                font-weight: 400;
                box-shadow: none;
            }
            .pd-holds .pa-number { order: 1; margin: 0; font-size: calc(0.75 * ${({theme:e})=>e.size}); color: color-mix(in oklch, var(--foot-ink) 48%, white); font-variant-numeric: tabular-nums; }
            .pd-holds .pa-entry .pd-file {
                order: 2;
                flex: 0 0 calc(100% + ${({theme:e})=>e.space} * 1.75);
                margin: 0 calc(${({theme:e})=>e.space} * -0.5833) 0 calc(${({theme:e})=>e.space} * -1.1667);
                padding: 0 calc(${({theme:e})=>e.space} * 0.5833) 0 calc(${({theme:e})=>e.space} * 2.875);
            }
            .pd-book .pd-holds .pa-entry.pa-folded .pd-file { display: none; }
            .pd-book .pd-holds .pd-file {
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
            .pd-holds .pd-file .pd-drawing { flex: none; width: ${({theme:e})=>e.size}; height: ${({theme:e})=>e.size}; color: #a5aebb; transition: color ${({theme:e})=>e.beat} ease; }
            .pd-book .pd-holds .pd-file:hover { background: color-mix(in oklab, ${({theme:e})=>e.sky} 40%, white); color: ${({theme:e})=>e.ink}; }
            .pa-split .pd-holds .pd-file[aria-pressed='true'], .pa-code-forward .pd-holds .pd-file[aria-pressed='true'] { color: ${({theme:e})=>e.skyInk}; font-weight: 500; background: color-mix(in oklab, ${({theme:e})=>e.sky} 45%, white); }
            .pa-split .pd-holds .pd-file[aria-pressed='true'] .pd-drawing, .pa-code-forward .pd-holds .pd-file[aria-pressed='true'] .pd-drawing { color: var(--colour); }
            .pd-holds .pd-section.pa-appendix { margin: auto 0 0; padding-block-start: calc(${({theme:e})=>e.space} / 3); border-block-start: thin solid #e3e7ee; opacity: 1; }
            .pd-holds .pd-section.pa-appendix .pd-heading { font-size: calc(0.9286 * ${({theme:e})=>e.size}); }
            .pd-holds .pd-section.pa-appendix .pa-entry { font-size: calc(0.9286 * ${({theme:e})=>e.size}); font-weight: 400; }
        `}icons(){return c`
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
            .pd-words .pd-icon {
                float: inline-start;
                width: calc(1.571 * ${({theme:e})=>e.size});
                height: calc(1.571 * ${({theme:e})=>e.size});
                margin: calc(${({theme:e})=>e.space} * 0.1417) calc(${({theme:e})=>e.space} * 0.4167) 0 0;
            }
            .pd-words .pd-paragraph .pd-svg { display: block; width: calc(${({theme:e})=>e.space} * 4); height: calc(${({theme:e})=>e.space} * 4); }
        `}words(){return c`
            .pd-words { padding: calc(${({theme:e})=>e.space} * 0.9167) calc(${({theme:e})=>e.space} * 1.5) calc(${({theme:e})=>e.space} * 1.6667); font-size: ${({theme:e})=>e.size}; }
            .pa-split .pd-words { padding: calc(${({theme:e})=>e.space} * 0.9167) calc(${({theme:e})=>e.space} * 1.1667) calc(${({theme:e})=>e.space} * 1.6667) calc(${({theme:e})=>e.space} * 1.3333); }
            .pd-words .pd-chapter { max-width: ${({theme:e})=>e.measure}; margin: 0; }
            .pd-words .pd-title {
                margin: 0 0 calc(${({theme:e})=>e.space} / 4);
                font-family: ${({theme:e})=>e.font};
                font-size: calc(1.7143 * ${({theme:e})=>e.size});
                font-weight: 600;
                line-height: 1.2;
                letter-spacing: -0.02em;
                color: ${({theme:e})=>e.heading};
            }
            .pd-words .pd-paragraph.pa-brief {
                display: block;
                max-width: 72ch;
                margin: 0 0 calc(${({theme:e})=>e.space} * 0.4167);
                font-family: ${({theme:e})=>e.serif};
                font-size: calc(1.1071 * ${({theme:e})=>e.size});
                font-style: italic;
                line-height: 1.5;
                color: ${({theme:e})=>e.soft};
            }
            .pd-words .pd-section { margin: calc(${({theme:e})=>e.space} * 1.0833) 0 0; }
            .pd-words .pd-heading {
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
            .pd-words .pd-paragraph { margin: calc(${({theme:e})=>e.space} / 3) 0; }
            .pd-words .pd-paragraph .pa-reference { color: var(--band-ink); text-decoration: underline; text-decoration-color: color-mix(in oklch, var(--band-ink) 35%, white); text-underline-offset: 2px; transition: text-decoration-color ${({theme:e})=>e.beat} ease; }
            .pd-words .pd-paragraph .pa-reference:hover { text-decoration-color: var(--band-ink); }
            .pd-words .pa-self-reference { color: inherit; text-decoration: none; }
            .pd-words .pd-paragraph.pd-turn { display: flex; justify-content: space-between; gap: ${({theme:e})=>e.space}; margin: calc(${({theme:e})=>e.space} * 1.0833) 0 0; font-size: calc(0.7857 * ${({theme:e})=>e.size}); }
            .pd-words .pd-turn .pd-count { color: ${({theme:e})=>e.faint}; }
        `}rail(){return c`
            .pd-rail {
                display: flex;
                flex-direction: column;
                align-items: stretch;
                gap: calc(${({theme:e})=>e.space} / 12);
                padding: calc(${({theme:e})=>e.space} * 0.4167) 0;
                background: linear-gradient(90deg, color-mix(in oklch, var(--night) 82%, white) 0%, var(--night) 22%);
                box-shadow: inset 1px 0 0 rgba(255, 255, 255, 0.08);
                transition: background ${({theme:e})=>e.beat} ease;
            }
            .pd-rail .pd-file {
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
            .pd-rail .pd-file .pd-file-name { writing-mode: vertical-rl; }
            .pd-rail .pd-file .pd-drawing { width: calc(0.9286 * ${({theme:e})=>e.size}); height: calc(0.9286 * ${({theme:e})=>e.size}); color: #9aa4b3; }
            .pd-rail .pd-file svg { display: block; width: 100%; height: 100%; }
            .pd-rail .pd-skeleton { display: flex; flex-direction: column; align-items: flex-start; gap: 3px; width: calc(${({theme:e})=>e.space} * 1.0833); margin-block-start: 2px; opacity: 0.55; transition: opacity ${({theme:e})=>e.beat} ease; }
            .pd-rail .pd-skeleton i { display: block; height: 2px; border-radius: 1px; background: color-mix(in oklch, var(--brass) 60%, var(--glow)); }
            .pd-rail .pd-file:hover { color: var(--glow); background: var(--dusk); }
            .pd-rail .pd-word.pd-switch[aria-pressed='true'] { color: color-mix(in oklch, var(--glow) 66%, var(--night)); border-color: transparent; background: none; }
            .pa-split .pd-rail .pd-file[aria-pressed='true'] { color: var(--glow); border-inline-start-color: var(--foot); background: var(--dusk); }
            .pd-rail .pd-file:hover .pd-skeleton, .pa-split .pd-rail .pd-file[aria-pressed='true'] .pd-skeleton { opacity: 0.9; }
        `}grip(){return c`
            .pd-grip { position: relative; background: linear-gradient(90deg, #f3f1eb 0%, #fbfaf6 10px); border-inline-start: thin solid #e6e2d8; transition: background ${({theme:e})=>e.beat} ease; }
            .pd-grip:hover { background: linear-gradient(90deg, #ece9e1 0%, #ffffff 10px); }
            .pd-grip .pd-word.pd-switch { display: block; width: 100%; height: 100%; padding: 0; border: 0; border-radius: 0; background: none; cursor: pointer; }
            .pd-grip .pd-skeleton { position: absolute; top: calc(${({theme:e})=>e.space} * 0.5833); left: 5px; display: flex; flex-direction: column; gap: 3px; width: 8px; opacity: 0.7; }
            .pd-grip .pd-skeleton i { display: block; height: 2px; border-radius: 1px; background: #cfcbc0; }
        `}files(){return c`
            .pd-files {
                background: linear-gradient(90deg, color-mix(in oklch, var(--night) 90%, white) 0%, var(--night) 36px);
                color: var(--glow);
                box-shadow: -10px 0 18px -16px rgba(43, 54, 60, 0.5);
                transition: background ${({theme:e})=>e.beat} ease, color ${({theme:e})=>e.beat} ease;
            }
            .pa-code-forward .pd-files { box-shadow: none; }
            .pd-tabs {
                display: flex;
                align-items: stretch;
                gap: 1px;
                padding: 0 0 0 2px;
                background: linear-gradient(180deg, color-mix(in oklch, var(--dusk) 88%, white) 0%, var(--dusk) 100%);
                border-block-end: thin solid color-mix(in oklch, var(--foot) 28%, var(--dusk));
            }
            .pd-tabs .pd-file {
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
            .pd-tabs .pd-file .pd-drawing { width: calc(0.9286 * ${({theme:e})=>e.size}); height: calc(0.9286 * ${({theme:e})=>e.size}); color: #9aa4b3; }
            .pd-tabs .pd-file svg { display: block; width: 100%; height: 100%; }
            .pd-tabs .pd-file:hover { color: var(--glow); }
            .pd-tabs .pd-file[aria-pressed='true'] { color: var(--glow); background: var(--night); border-block-start-color: var(--foot); }
            .pd-tabs .pd-file[aria-pressed='true'] .pd-drawing { color: var(--colour); }
            .pd-tabs .pd-words-tab, .pd-tabs .pd-dock { display: flex; align-items: center; }
            .pd-tabs .pd-dock { margin-inline-start: auto; }
            .pd-tabs .pd-words-tab .pd-word.pd-switch, .pd-tabs .pd-dock .pd-word.pd-switch {
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
            .pd-tabs .pd-dock .pd-word.pd-switch { color: var(--brass); }
            .pd-tabs .pd-words-tab .pd-word.pd-switch:hover, .pd-tabs .pd-dock .pd-word.pd-switch:hover { color: var(--glow); }
            .pd-tabs .pd-dock .pd-word.pd-switch::before { content: ''; width: 9px; height: 9px; border: 1.5px solid currentColor; border-radius: 1px; box-shadow: 3px 3px 0 -1.5px currentColor; }
            .pd-tabs .pd-to-split { display: none; }
            .pa-code-forward .pd-tabs .pd-to-full, .pa-code-forward .pd-tabs .pd-words-tab { display: none; }
            .pa-code-forward .pd-tabs .pd-to-split { display: flex; }
            .pa-code-forward .pd-tabs .pd-dock .pd-word.pd-switch::before { box-shadow: -3px 3px 0 -1.5px currentColor; }
            .pd-options { display: flex; align-items: center; gap: 2px; padding: 0 calc(${({theme:e})=>e.space} / 3) 0 calc(${({theme:e})=>e.space} / 6); border-inline-start: thin solid color-mix(in oklch, var(--glow) 12%, transparent); }
            .pd-options .pd-word.pd-switch {
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
            .pd-options .pd-word.pd-switch:hover { color: var(--glow); }
            .pd-options .pd-word.pd-switch[aria-pressed='true'] { color: var(--glow); background: var(--dawn); border-color: transparent; }
            .pd-listings { display: grid; grid-template-rows: minmax(0, 1fr); align-content: start; min-height: 0; overflow: hidden; }
            .pd-listings .pd-container { display: contents; }
        `}code(){return c`
            .pd-paragraph.pd-listing { display: none; margin: 0; padding: 0; min-height: 0; }
            .pd-listing.pa-opened { display: block; overflow: auto; scrollbar-width: thin; scrollbar-color: transparent transparent; transition: scrollbar-color ${({theme:e})=>e.beat} ease; }
            .pd-listing.pa-opened:hover { scrollbar-color: var(--dim) transparent; }
            .pd-listing .pd-word { display: none; }
            .pd-listing .pd-code {
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
            .pa-code-forward .pd-listing .pd-code { cursor: default; }
            .pd-listing .pd-code code { background: transparent; color: inherit; }
            .pd-code-line { display: block; padding-inline-end: calc(${({theme:e})=>e.space} * 0.75); white-space: pre; }
            .pa-wrapped .pd-code-line { white-space: pre-wrap; padding-inline-start: calc(${({theme:e})=>e.space} * 2.4167); text-indent: calc(${({theme:e})=>e.space} * -2.4167); }
            .pd-code-line::before { content: attr(data-line); display: inline-block; width: calc(${({theme:e})=>e.space} * 1.8333); padding-inline-end: calc(${({theme:e})=>e.space} * 0.5833); text-align: end; color: var(--dim); user-select: none; text-indent: 0; }
            .pd-book:not(.pa-numbered) .pd-code-line::before { content: ''; width: calc(${({theme:e})=>e.space} * 0.5833); padding: 0; }
            .pa-light-code .hljs-keyword, .pa-light-code .hljs-built_in, .pa-light-code .hljs-literal { color: #5a4fa8; }
            .pa-light-code .hljs-string, .pa-light-code .hljs-regexp, .pa-light-code .hljs-number { color: #2f7f6e; }
            .pa-light-code .hljs-title, .pa-light-code .hljs-type, .pa-light-code .hljs-tag, .pa-light-code .hljs-name, .pa-light-code .hljs-attr { color: #23407a; }
            .pa-light-code .hljs-comment, .pa-light-code .hljs-meta { color: #8a94a3; }
        `}small(){return c`
            @media (max-width: ${({theme:e})=>e.narrow}) {
                .pd-holds, .pd-library { border-inline-end: none; border-block-end: thin solid ${({theme:e})=>e.line}; }
                .pd-holds .pd-chapter { min-height: 0; }
                .pd-holds .pa-folder .pd-twist, .pd-holds .pd-folder-mark, .pd-holds .pa-entry .pd-twist, .pd-holds .pa-entry .pd-file { display: none; }
                .pd-holds .pd-heading { height: auto; padding: 0 calc(${({theme:e})=>e.space} / 2); }
                .pd-words { padding: calc(${({theme:e})=>e.space} * 0.83) calc(${({theme:e})=>e.space} * 0.67) calc(${({theme:e})=>e.space} / 3); }
                .pd-words .pd-title { font-size: calc(1.5 * ${({theme:e})=>e.size}); }
                .pd-files { box-shadow: none; }
            }
        `}};n(Ga,"$ManualTheme");let fs=Ga;const qi=t(fs);t(Ds,ys)(qi);var Vi=Object.defineProperty,Si=Object.getOwnPropertyDescriptor,er=n((p,e,s,r)=>{for(var i=Si(e,s),o=p.length-1,d;o>=0;o--)(d=p[o])&&(i=d(e,s,i)||i);return i&&Vi(e,s,i),i},"__decorateClass$1");const Ja=class Ja extends f{constructor(){super(...arguments),this.specification=new ze}defines(e){e.classes.add(this,"pa-first")}erase(e){e.classes.revert(this)}};n(Ja,"$First");let gs=Ja;const Ua=class Ua extends g{$saidOfAParagraph(e){l(e instanceof u,"first is said of a paragraph, and this is not one")}};n(Ua,"FirstSpecification");let ze=Ua;er([h("first is said of a paragraph")],ze.prototype,"$saidOfAParagraph");const ur=t(gs),Ka=class Ka extends X{constructor(){super(...arguments),this.serif="'Source Serif 4', Georgia, serif",this.paper="#fdfcfa",this.ink="#343c4a",this.soft="#727d8c",this.faint="#9ea8b5",this.line="#e4e9f2",this.tint="#f0f4fc",this.barTint="#f8fafe",this.sky="#e3edfb",this.skyInk="#4a6ea0",this.accent="#4a6ea0",this.wash="linear-gradient(135deg, #f2f6fd 0%, #fdfcfa 48%, #fdf6f1 100%)",this.side="#f7f8fb",this.sideInk="#3a4452",this.sideDim="#7f8a9b",this.sideLine="#e3e7ee",this.barHeight="52px",this.holdsColumn="232px",this.space="24px",this.cover="132px",this.volume="184px",this.radius="6px",this.spine="inset 3px 0 0 rgba(0, 0, 0, 0.08), inset 4px 0 0 rgba(255, 255, 255, 0.35), 0 6px 12px -10px rgba(44, 52, 64, 0.3)",this.lift="inset 3px 0 0 rgba(0, 0, 0, 0.08), inset 4px 0 0 rgba(255, 255, 255, 0.35), 0 10px 16px -12px rgba(44, 52, 64, 0.35)",this.openSpine="inset 7px 0 0 rgba(0, 0, 0, 0.07), inset 9px 0 0 rgba(255, 255, 255, 0.45), 0 12px 22px -16px rgba(44, 52, 64, 0.35)",this.keyword="#5a4fa8",this.string="#2f7f6e",this.type="#23407a",this.comment="#8a94a3"}parts(){return[...super.parts(),this.shelf(),this.jackets(),this.desk(),this.unfolded(),this.built(),this.small()]}page(){return c`
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
        `}};n(Ka,"$Bookshelf");let us=Ka;const sr=t(us);var ar=Object.defineProperty,tr=Object.getOwnPropertyDescriptor,Cs=n((p,e,s,r)=>{for(var i=r>1?void 0:r?tr(e,s):e,o=p.length-1,d;o>=0;o--)(d=p[o])&&(i=(r?d(e,s,i):d(i))||i);return r&&i&&ar(e,s,i),i},"__decorateClass");const Qa=class Qa extends N{get books(){return this.text.find(b).filter(e=>e.is(ne)&&e!==this.synopsis)}get placed(){return[...super.placed,...this.books]}get pages(){return[...this.books,...super.pages]}write(){return a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"pd-library",children:this.library()}),a.jsx("div",{className:"pd-me",children:this.me()}),a.jsx("div",{className:"pd-holds",children:this.holds()}),a.jsx("div",{className:"pd-head",children:this.head()}),a.jsxs("div",{className:"pd-leaves",children:[this.front(),this.leaves(),a.jsx("div",{className:"pd-shelf",children:this.volumes()})]})]})}head(){return a.jsx("div",{className:"pd-switches",children:this.switches()})}front(){const e=t(We);return this.painted(this.cover,a.jsxs("div",{className:this.open===void 0?"pd-leaf pd-front pd-open":"pd-leaf pd-front",children:[this.jacket(this.cover),this.opening(),this.reading(this.cover),a.jsx(e,{chapter:this.cover,of:nt,children:"read on"})]}))}opening(){const e=t(this.title),s=t(this.synopsis);return a.jsxs("div",{className:"pd-words",children:[this.shelved(this.cover),a.jsx(e,{}),this.line(this.cover),a.jsx(s,{})]})}leaves(){const e=t(We);return[...this.books,...this.chapters].map((s,r)=>{const i=t(s),o=this.jacketOf(s);return this.painted(o,a.jsxs("div",{className:s===this.open?"pd-leaf pd-open":"pd-leaf",children:[this.jacket(o),a.jsxs("div",{className:"pd-words",children:[this.shelved(o),a.jsx(i,{})]}),o===void 0?void 0:a.jsx("div",{className:"pd-line",children:this.line(o)}),this.reading(o),o===void 0?void 0:a.jsx(e,{chapter:s,of:nt,children:"read on"}),a.jsx("div",{className:"pd-files",children:this.listings(s)})]},r),r)})}volumes(){const e=t(O),s=t(w);return(this.table?.annotations.expressed(ue)?.entries??[]).map((i,o)=>{const d=re(i).identifier,C=this.named(d),k=C===void 0?this.coverOf(d):this.jacketOf(C);if(k!==void 0)return a.jsxs("div",{className:"pd-volume",children:[this.jacket(k,d),a.jsx("div",{className:"pd-paragraph pd-name",children:a.jsxs(e,{children:[a.jsx(s,{children:d}),k.title.name]})})]},o)})}jacket(e,s){if(e===void 0)return;const r=t($i),i=t(w);return s===void 0?a.jsx(r,{cover:e}):a.jsx(r,{cover:e,children:a.jsx(i,{children:s})})}shelved(e){if(e!==void 0)return a.jsx("div",{className:"pd-paragraph pd-shelved",children:e===this.cover?"filed under itself":"filed here"})}line(e){if(e===void 0)return;const s=t(wt),r=t(kt);return a.jsxs(a.Fragment,{children:[a.jsx(s,{cover:e}),a.jsx(r,{cover:e})]})}reading(e){if(e===void 0)return;const s=t(O),r=t(w),i=e.mention.identifier;return a.jsx("div",{className:"pd-paragraph pd-read",children:a.jsxs(s,{children:[a.jsx(r,{children:i}),e===this.cover?"This is the catalogue":`Read ${e.title.name}`," →"]})})}jacketOf(e){return e.annotations.expressed(D)?.cover??(this.appendix.includes(e)?void 0:this.cover)}coverOf(e){return super.coverOf(e)??this.books.map(s=>s.annotations.expressed(D)?.cover).find(s=>s!==void 0&&s.mention?.identifier===e)}named(e){return super.named(e)??this.books.find(s=>this.placeOf(s)===e)}placeOf(e){const s=e.title?.annotations.expressed(Bt)?.identifier,r=this.means?.identifier;if(!(s===void 0||r===void 0))return`${r.replace(/\/+$/u,"")}/#${s}`}};n(Qa,"$Catalogue");let $s=Qa;const Xa=class Xa extends Yt{get identifier(){return this._book??super.identifier}$Bound(){super.$Bound(),this._book=this.chapter?.annotations.expressed(ne)?.means?.identifier}};n(Xa,"$BookLink");let Oe=Xa;Cs([dt()],Oe.prototype,"_book",2);const Za=class Za extends f{constructor(){super(...arguments),this.specification=new Pe}defines(e){e.classes.add(this,"pa-caption")}erase(e){e.classes.revert(this)}};n(Za,"$Caption");let bs=Za;const qa=class qa extends f{constructor(){super(...arguments),this.specification=new De}defines(e){e.classes.add(this,"pa-arrow")}erase(e){e.classes.revert(this)}};n(qa,"$Arrow");let ms=qa;const Va=class Va extends f{constructor(){super(...arguments),this.specification=new x}defines(e){e.classes.add(this,"pa-unfolded")}erase(e){e.classes.revert(this)}};n(Va,"$Unfolded");let xs=Va;const Sa=class Sa extends g{$saidOfAParagraph(e){l(e instanceof u,"a caption is said of a paragraph, and this is not one")}};n(Sa,"CaptionSpecification");let Pe=Sa;Cs([h("a caption is said of a paragraph")],Pe.prototype,"$saidOfAParagraph",1);const et=class et extends g{$saidOfAWord(e){l(e instanceof I&&e.chapter?.is(Y)===!0,"an arrow is said of a word of a table of contents, and this is not one")}};n(et,"ArrowSpecification");let De=et;Cs([h("an arrow is said of a word of a table of contents")],De.prototype,"$saidOfAWord",1);const Ms=t($s),ir=t(Oe),$r=t(bs),br=t(ms),nt=t(xs);t(Ms,Fe)(ir);t(Ms,ys)(sr);t(Ms,Ne)(Ps);const rr=n(()=>a.jsxs(ct,{children:[a.jsx(gi,{}),a.jsx(jt,{ground:"#eef5f6",band:"#c3e3e6",bandInk:"#1c565c",foot:"#8db9bd",footInk:"#153e43",ink:"#1f5a60"}),a.jsx(zt,{x:"-46",y:"-13"}),a.jsx(lt,{children:"[Dougs Library](/dougs-library/)"}),a.jsx(ht,{children:"[Doug](/dougs-story/)"}),a.jsx(ft,{children:"[Library](/dougs-library/)"}),a.jsx(gt,{children:"[The Library](/dougs-library/)"}),a.jsxs(ut,{children:[a.jsx(yt,{}),a.jsx($t,{children:`<svg viewBox="0 0 64 64" class="pd-illustration"><path class="light" d="M9 7h46v50H9z"/><path d="M9 7h46v50H9zM9 24h46M9 41h46"/><path class="fill" d="M13 11h5v13h-5zM20 9h4v15h-4zM26 13h6v11h-6zM34 10h4v14h-4zM40 14h6v10h-6z"/><path d="M48 24l4-12 3 1-4 11z"/><path class="fill" d="M13 28h4v13h-4zM19 30h7v11h-7zM28 27h4v14h-4zM34 31h5v10h-5zM41 28h6v13h-6zM49 29h3v12h-3z"/><path class="fill" d="M13 46h6v11h-6zM21 44h4v13h-4zM27 47h8v10h-8zM37 45h4v12h-4zM43 48h6v9h-6z"/><path d="M50 57l3-11 3 1-3 10z"/></svg>
`})]})]}),"Cover$2"),st=class st extends le{constructor(){super(...arguments),this.style=m.header`
        justify-self: end;
        .pd-chapter.pa-cover { margin-block: 0; }
    `}};n(st,"$StoryCover");let vs=st;const at=class at extends Y{constructor(){super(...arguments),this.style=m.nav`
        .pd-chapter.pa-table-of-contents { margin-block: 0; }
    `}};n(at,"$StoryTableOfContents");let ws=at;const nr=t(vs),mr=t(ws),xr=n(()=>a.jsxs(ct,{children:[a.jsx(nr,{}),a.jsx(Gt,{}),a.jsx(ui,{children:rr()}),a.jsx(jt,{ground:"#f5eedf",band:"#d9c3a3",bandInk:"#4a3626",foot:"#a3b6cc",footInk:"#2a4262",ink:"#2f4a6a"}),a.jsx(zt,{x:"-54",y:"-33"}),a.jsx(lt,{children:"[Dougs Story](/dougs-story/)"}),a.jsx(ht,{children:"[Doug](/dougs-story/)"}),a.jsx(ft,{children:"[Library](/dougs-library/)"}),a.jsx(gt,{children:"[The Librarian](/dougs-story/)"}),a.jsxs(ut,{children:[a.jsx(yt,{}),a.jsx($t,{children:`<svg viewBox="0 0 64 64" class="pd-illustration"><path class="light" d="M8 13h23v38H8zM33 13h23v38H33z"/><path d="M8 13h23v38H8zM33 13h23v38H33z"/><path d="M13 21h13M13 27h13M13 33h9M38 21h13M38 27h13M38 33h13M38 39h8"/><path class="fill" d="M15 55 45 25l4 4-30 30-6 2z"/><path d="M15 55 45 25l4 4-30 30-6 2zM43 27l4 4M17 53l2 2"/></svg>
`})]})]}),"Cover");export{$s as $,br as A,fr as B,xr as C,It as D,ur as F,lr as I,cr as K,Ps as L,x as O,jt as S,Jt as T,ui as V,zt as W,hr as a,$r as b,rr as c,X as d,N as e,Ne as f,le as g,yt as h,te as i,Ni as j,ss as k,mr as l,gr as m,ls as n,pr as o};
