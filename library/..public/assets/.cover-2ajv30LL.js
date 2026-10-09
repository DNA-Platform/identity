var Gt=Object.defineProperty;var r=(p,e)=>Gt(p,"name",{value:e,configurable:!0});import{$ as i,z as M,f as q,s as b,p as H,j as a,g as f,h as c,i as $,o as u,k as l,B as gt,E as Fe,W as w,t as Jt,F as X,n as g,G as qt,l as h,J as Ds,R as x,K as mt,N as y,O as ce,Q as Ut,U as Kt,q as C,V as Qt,X as N,Y as ut,Z as Be,_ as Xt,a0 as Zt,a1 as Vt,m as Cs,a2 as xt,x as kt,a3 as St,a4 as eo,C as vt,T as wt,u as yt,v as jt,a5 as zt,a as Ot,w as Pt,a6 as so}from"./index-BUx02VZO.js";const Ls=class Ls extends M{get on(){return[this.book.$is].flat().includes(this.$of)}$Switch(...e){this.$Writing(...e),this.containers.replace(this,"span","button")}container(e){return super.container({type:"button","aria-pressed":this.on,onClick:r(()=>this.press(),"onClick"),...e})}press(){const e=this.book,s=[e.$is].flat();e.$is=this.on?s.filter(o=>o!==this.$of):[this.$of,...s]}$Define(){super.$Define(),this.classes.add(this,"pd-switch")}};r(Ls,"$Switch");let Z=Ls;const Ws=class Ws extends Z{press(){const e=this.book,s=[e.$is].flat().filter(o=>!this.$among.includes(o));e.$is=[this.$of,...s]}};r(Ws,"$Tab");let le=Ws;const Ye=i(Z),ao=i(le);var to=Object.defineProperty,oo=Object.getOwnPropertyDescriptor,Dt=r((p,e,s,o)=>{for(var t=oo(e,s),n=p.length-1,d;n>=0;n--)(d=p[n])&&(t=d(e,s,t)||t);return t&&to(e,s,t),t},"__decorateClass$e");const Rs=class Rs extends q{constructor(){super(...arguments),this.specification=new V,this.style=b.div`
        .pa-coloured { --colour: ${e=>e.$colour}; }
    `}get colour(){return H.copy(this.text).trim()}$Coloured(...e){this.$Format(...e);const s=this.style;this._painted=o=>a.jsx(s,{$colour:this.colour,...o})}defines(e){e.classes.add(this,"pa-coloured"),e.containers.add(this,this._painted)}erase(e){e.classes.revert(this),e.containers.revert(this)}};r(Rs,"$Coloured");let T=Rs;const Es=class Es extends f{$saidOfAChapterOrAParagraph(e){c(e instanceof $||e instanceof u,"coloured is said of a chapter or a paragraph, and this is neither")}$givenItsColour(e){c(/^#[0-9a-f]{6}$/iu.test(e.annotations.expressed(T)?.colour??""),"coloured is given its colour as six hex digits, and this one was given something else")}};r(Es,"ColouredSpecification");let V=Es;Dt([l("coloured is said of a chapter or a paragraph")],V.prototype,"$saidOfAChapterOrAParagraph");Dt([l("coloured is given its colour")],V.prototype,"$givenItsColour");const yi=i(T);var io=Object.defineProperty,ro=Object.getOwnPropertyDescriptor,Is=r((p,e,s,o)=>{for(var t=ro(e,s),n=p.length-1,d;n>=0;n--)(d=p[n])&&(t=d(e,s,t)||t);return t&&io(e,s,t),t},"__decorateClass$d");const Bs=class Bs extends q{constructor(){super(...arguments),this.specification=new R}get identifier(){return gt.reference(H.copy(this.text))?.identifier??""}get name(){return gt.reference(H.copy(this.text))?.name??""}get entry(){return this.book?.named(this.identifier)}get drawing(){const e=this.entry?.text.find(u).flatMap(s=>s.text.find(Fe))[0];return e===void 0?"":H.copy(e.text).trim()}get colour(){return this.entry?.annotations.expressed(T)?.colour??""}$Kind(...e){this.$Format(...e);const s=i(no);this._layer=o=>a.jsxs("div",{...o,children:[a.jsx(s,{kind:this}),o.children]})}defines(e){e.classes.add(this,"pa-kind"),e.containers.add(this,this._layer)}erase(e){e.classes.revert(this),e.containers.revert(this)}};r(Bs,"$Kind");let D=Bs;const Ys=class Ys extends M{constructor(){super(...arguments),this.style=b.span`
        --colour: ${e=>e.$colour};
    `}$Icon(...e){this.$Writing(...e);const s=this.style;this._painted=o=>a.jsx(s,{$colour:this.$kind?.colour??"",...o}),this.containers.replace(this,"span",this._painted)}write(){return a.jsx("span",{className:"pd-drawing",role:"img","aria-label":this.$kind?.name,dangerouslySetInnerHTML:{__html:this.$kind?.drawing??""}})}$Define(){super.$Define(),this.classes.add(this,"pd-icon")}};r(Ys,"$Icon");let Ge=Ys;const Gs=class Gs extends f{$saidOfAChapter(e){c(e instanceof $,"a kind is said of a chapter, and this is not one")}$namesAnEntry(e){const s=e.annotations.expressed(D)?.entry;c(s!==void 0&&s.annotations.expressed(D)?.entry===s,"a kind names an entry of the key, a chapter of this book whose kind is itself, and this one names something else")}$entryHoldsItsDrawingAndColour(e){const s=e.annotations.expressed(D)?.entry;s!==void 0&&c(s.text.find(u).flatMap(o=>o.text.find(Fe)).length===1&&s.is(T),"an entry of the key holds one drawing and its colour, and this one holds something else")}};r(Gs,"KindSpecification");let R=Gs;Is([l("a kind is said of a chapter")],R.prototype,"$saidOfAChapter");Is([l("a kind names an entry of the key")],R.prototype,"$namesAnEntry");Is([l("an entry of the key holds one drawing and its colour")],R.prototype,"$entryHoldsItsDrawingAndColour");const ji=i(D),Ct=i(Ge),no=Ct;var po=Object.defineProperty,co=Object.getOwnPropertyDescriptor,lo=r((p,e,s,o)=>{for(var t=co(e,s),n=p.length-1,d;n>=0;n--)(d=p[n])&&(t=d(e,s,t)||t);return t&&po(e,s,t),t},"__decorateClass$c");const ho={tsx:"typescript",ts:"typescript",mjs:"javascript",js:"javascript",css:"css",html:"xml",svg:"xml",json:"json",md:"markdown"},fo='<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"><path d="M6 4.5 3.5 8 6 11.5M10 4.5 12.5 8 10 11.5"/></svg>',go=r((p,e)=>{const s=p?.annotations.find(X).find(o=>`${o.$identifier}${o.$type}`===e);return s===void 0?[]:H.copy(s.text).split(`
`)},"linesOf"),Js=class Js extends u{constructor(){super(...arguments),this.$identifier="",this.$type="",this.$among=[]}get name(){return`${this.$identifier}${this.$type}`}get language(){return ho[this.$type.replace(/^\./u,"")]??""}$Listing(...e){this.$Writing(...e),this.containers.replace(this,"span","div")}container(e){return super.container({onClick:r(()=>this.press(),"onClick"),...e})}press(){if(this.$reading===void 0)return;const e=this.book,s=[e.$is].flat().filter(o=>!this.$among.includes(o));e.$is=[this.$reading,...s]}write(){const e=i(w),s=i(Jt);return a.jsxs(a.Fragment,{children:[a.jsx(e,{children:this.name}),a.jsx(s,{identifier:this.$identifier,type:this.$type,language:this.language,numbered:!0})]})}$Define(){super.$Define(),this.classes.add(this,"pd-listing");const e=i(bo);this.annotations.add(this,a.jsx(e,{}))}};r(Js,"$Listing");let he=Js;const qs=class qs extends g{constructor(){super(...arguments),this.specification=new fe}defines(e){const s=e;s.$manual!==void 0&&s.$manual.file===s.name&&e.classes.add(this,"pa-opened")}erase(e){e.classes.revert(this)}};r(qs,"$Opened");let Je=qs;const Us=class Us extends f{$saidOfAListing(e){c(e instanceof he,"opened is said of a listing, and this is not one")}};r(Us,"OpenedSpecification");let fe=Us;lo([l("opened is said of a listing")],fe.prototype,"$saidOfAListing");const Ks=class Ks extends le{constructor(){super(...arguments),this.$name="",this.$skeleton=!1,this.style=b.button`
        --colour: ${e=>e.$colour};
    `}get on(){const e=this.book;return this.$chapter!==void 0&&this.$chapter===e.open&&this.$manual?.file===this.$name}get colour(){return this.$chapter?.annotations.expressed(D)?.colour??""}get lines(){return go(this.$chapter,this.$name)}$File(...e){this.$Switch(...e),this.containers.replace(this,"button",this.style)}container(e){return super.container({$colour:this.colour,...e})}press(){this.$manual?.show(this.$name),this.$of!==void 0&&super.press()}write(){return a.jsxs(a.Fragment,{children:[a.jsx("span",{className:"pd-drawing",dangerouslySetInnerHTML:{__html:fo}}),a.jsx("span",{className:"pd-file-name",children:this.$name}),this.$skeleton?a.jsx("span",{className:"pd-skeleton",children:this.lines.slice(0,14).map((e,s)=>a.jsx("i",{style:{width:`${Math.max(12,Math.min(100,e.length*2.2))}%`}},s))}):void 0]})}$Define(){super.$Define(),this.classes.add(this,"pd-file")}};r(Ks,"$File");let qe=Ks;const It=i(he),uo=i(Je),bt=i(qe),bo=uo,Qs=class Qs extends qt{constructor(){super(...arguments),this.font="'Inter', system-ui, sans-serif",this.prose="'Inter', system-ui, sans-serif",this.mono="'JetBrains Mono', ui-monospace, monospace",this.size="0.875rem",this.leading="1.6",this.measure="44rem",this.spreadColumn="15.5rem",this.space="1.5rem",this.holdsColumn="240px",this.barHeight="50px",this.beat="320ms",this.narrow="48rem",this.colour="#4e9eb9",this.accent="#166178",this.bar="#0c1b1f",this.barInk="#ffffff",this.barDim="#a9bcc1",this.barOn="rgba(255, 255, 255, 0.11)",this.barLine="#1d3339",this.mark="#c8f4fb",this.side="#e3f5fa",this.sideInk="#10252c",this.sideDim="#516770",this.sideOn="#ffffff",this.sideLine="#cbe6ee",this.night="#0c1b1f",this.deep="#14323c",this.blue="#166178",this.sea="#4e9eb9",this.sky="#8fc8dc",this.opal="#c8f4fb",this.pale="#e3f5fa",this.mist="#f1f7f9",this.white="#ffffff",this.ink="#10252c",this.soft="#516770",this.line="#dbe7ec",this.me="#e8590c",this.wash="linear-gradient(105deg, #e2f6fb 0%, #ecf0fd 52%, #fae9f4 100%)",this.serif="'Source Serif 4', Georgia, serif",this.between="'Source Sans 3', 'Inter', system-ui, sans-serif",this.bookPaper="#fbf9f3",this.bookInk="#29251d",this.heading="#10252c",this.capital="#166178",this.lit="#166178",this.faint="#8792a2",this.paper="#ffffff",this.panel="#f1f7f9",this.rule="#dbe7ec",this.edge="transparent",this.tint="#e3f5fa",this.dusk="#14323c",this.glow="#cfe6e3",this.dim="#4f7672",this.keyword="#8ad7ff",this.string="#ffd48a",this.type="#9be3d6",this.comment="#5f8a86",this.haze="#a9bcc1",this.glass="rgba(255, 255, 255, 0.62)",this.binding="linear-gradient(160deg, #16303a, #0c1b1f)",this.spine="inset 5px 0 0 rgba(0, 0, 0, 0.14), inset 6px 0 0 rgba(255, 255, 255, 0.12), 0 10px 20px -10px rgba(0, 0, 0, 0.45)",this.shadow="0 0.75rem 1.4rem -0.9rem rgba(12, 27, 31, 0.55)",this.volume="11.5rem",this.cover="8.25rem",this.card="18rem",this.photo="7rem",this.radius="0.375rem",this.barTint="#ffffff",this.skyInk="#166178",this.lift="inset 5px 0 0 rgba(0, 0, 0, 0.14), inset 6px 0 0 rgba(255, 255, 255, 0.12), 0 14px 24px -12px rgba(0, 0, 0, 0.5)",this.openSpine="inset 7px 0 0 rgba(0, 0, 0, 0.14), inset 8px 0 0 rgba(255, 255, 255, 0.12), 0 12px 22px -14px rgba(0, 0, 0, 0.5)",this.style=b.div`${this.parts()}`}parts(){return[this.page(),this.writing(),this.links(),this.figures(),this.listings(),this.switches(),this.turns(),this.illustrations(),this.marks(),this.library(),this.head(),this.holds(),this.tones()]}page(){return h`
            font-family: ${({theme:e})=>e.font};
            font-size: ${({theme:e})=>e.size};
            line-height: ${({theme:e})=>e.leading};
            color: ${({theme:e})=>e.ink};
            background: ${({theme:e})=>e.paper};
            min-height: 100vh;
        `}writing(){return h`
            .pd-leaves { font-family: ${({theme:e})=>e.prose}; }
            .pd-chapter, .pd-section, .pd-paragraph { margin-block: ${({theme:e})=>e.space}; }
            .pd-chapter { max-width: ${({theme:e})=>e.measure}; }
        `}links(){return h`
            .pa-reference { color: ${({theme:e})=>e.accent}; }
            .pa-reference.pa-self-reference { color: inherit; text-decoration: none; }
        `}figures(){return h`
            .pd-image img { display: block; max-width: 100%; height: auto; }
            .pd-code { font-family: ${({theme:e})=>e.mono}; overflow-x: auto; }
        `}listings(){return h`
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
            .pd-holds .pd-paragraph.pa-entry .pd-word + .pd-word {
                margin-inline-start: auto;
                font-size: calc(0.83 * ${({theme:e})=>e.size});
                opacity: 0.55;
            }
            .pd-holds .pa-reference.pa-reference { color: inherit; text-decoration: none; }
            .pd-holds .pd-section.pa-appendix { opacity: 0.72; }
            .pd-holds .pd-section.pa-appendix .pd-heading { font-size: calc(0.66 * ${({theme:e})=>e.size}); }
            .pd-holds .pd-section.pa-appendix .pd-paragraph.pa-entry { font-size: calc(0.86 * ${({theme:e})=>e.size}); }
            .pa-built .pd-holds .pd-section:not(.pa-folder) { opacity: 0.55; }
            .pa-built .pd-holds .pd-section:not(.pa-folder) .pd-paragraph.pa-entry { display: none; }
            .pa-built .pd-holds .pd-section.pa-folder { order: -1; }
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
        `}};r(Qs,"$LibraryBookTheme");let S=Qs;const $o=i(S);var mo=Object.defineProperty,xo=Object.getOwnPropertyDescriptor,ko=r((p,e,s,o)=>{for(var t=xo(e,s),n=p.length-1,d;n>=0;n--)(d=p[n])&&(t=d(e,s,t)||t);return t&&mo(e,s,t),t},"__decorateClass$b");const Xs=class Xs extends g{constructor(){super(...arguments),this.specification=new ge}defines(e){e.classes.add(this,"pa-label")}erase(e){e.classes.revert(this)}};r(Xs,"$Label");let Ue=Xs;const Zs=class Zs extends f{$saidOfAWord(e){c(e instanceof M,"label is said of a word, and this is not one")}};r(Zs,"LabelSpecification");let ge=Zs;ko([l("label is said of a word")],ge.prototype,"$saidOfAWord");const As=i(Ue),Vs=class Vs extends u{get cover(){return this.$cover??this.book?.cover}write(){const e=this.cover.annotations.expressed(Ds),s=i(w),o=i(As),t=i(x);return a.jsxs(a.Fragment,{children:[a.jsxs(s,{children:[a.jsx(o,{}),"by"]}),a.jsxs(s,{children:[a.jsx(t,{children:e.means.identifier}),e.name]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-byline")}};r(Vs,"$Byline");let Ke=Vs;const Ss=class Ss extends u{get cover(){return this.$cover??this.book?.cover}write(){const e=this.cover.annotations.expressed(mt),s=i(w),o=i(As),t=i(x);return a.jsxs(a.Fragment,{children:[a.jsxs(s,{children:[a.jsx(o,{}),"filed under"]}),a.jsxs(s,{children:[a.jsx(t,{children:e.means.identifier}),e.name]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-filed-under")}};r(Ss,"$FiledUnder");let Qe=Ss;const At=i(Ke),Mt=i(Qe);var vo=Object.defineProperty,wo=Object.getOwnPropertyDescriptor,yo=r((p,e,s,o)=>{for(var t=wo(e,s),n=p.length-1,d;n>=0;n--)(d=p[n])&&(t=d(e,s,t)||t);return t&&vo(e,s,t),t},"__decorateClass$a");const ea=class ea extends f{$saidOfABook(e){c(e instanceof F,"this is said of a book of this library, and here it is said of something else")}};r(ea,"OfABookSpecification");let v=ea;yo([l("this is said of a book of this library")],v.prototype,"$saidOfABook");var jo=Object.defineProperty,zo=Object.getOwnPropertyDescriptor,Oo=r((p,e,s,o)=>{for(var t=zo(e,s),n=p.length-1,d;n>=0;n--)(d=p[n])&&(t=d(e,s,t)||t);return t&&jo(e,s,t),t},"__decorateClass$9");const sa=class sa extends q{constructor(){super(...arguments),this.specification=new ue}get context(){}row(e){}};r(sa,"$View");let I=sa;const aa=class aa extends f{$saidOfAChapter(e){c(e instanceof $,"a view is said of a chapter, and this is not one")}};r(aa,"ViewSpecification");let ue=aa;Oo([l("a view is said of a chapter")],ue.prototype,"$saidOfAChapter");i(I);var Po=Object.defineProperty,Do=Object.getOwnPropertyDescriptor,k=r((p,e,s,o)=>{for(var t=Do(e,s),n=p.length-1,d;n>=0;n--)(d=p[n])&&(t=d(e,s,t)||t);return t&&Po(e,s,t),t},"__decorateClass$8");const Q=r((p,e,s)=>{const o=p?.annotations.expressed(j)?.painted;return o===void 0?e:a.jsx(o,{children:e},s)},"painted"),ta=class ta extends y{constructor(){super(...arguments),this.specification=new B}get name(){return this.chapter?.title?.name??""}get author(){return this.chapter?.annotations.expressed(Ds)?.name??""}get illustration(){return this.chapter?.text.find(u).find(e=>e.is(se))}get drawing(){const e=this.illustration?.text.find(Fe)[0];return e===void 0?"":H.copy(e.text).trim()}get scheme(){return this.chapter?.annotations.expressed(j)}get window(){return this.chapter?.annotations.expressed(E)}};r(ta,"$BookshelfCover");let ee=ta;const oa=class oa extends g{constructor(){super(...arguments),this.specification=new me}defines(e){e.classes.add(this,"pa-illustration")}erase(e){e.classes.revert(this)}};r(oa,"$Illustration");let se=oa;const ia=class ia extends q{constructor(){super(...arguments),this.specification=new ae,this.$ground="",this.$band="",this.$bandInk="",this.$foot="",this.$footInk="",this.$ink="",this.style=b.div.attrs({className:"pd-scheme"})`
        ${e=>e.$scheme}
    `}get colours(){return[this.$ground,this.$band,this.$bandInk,this.$foot,this.$footInk,this.$ink]}get declarations(){return`--ground: ${this.$ground}; --band: ${this.$band}; --band-ink: ${this.$bandInk}; --foot: ${this.$foot}; --foot-ink: ${this.$footInk}; --ink: ${this.$ink};`}get painted(){return this._painted}$Scheme(...e){this.$Format(...e);const s=this.style;this._painted=o=>a.jsx(s,{$scheme:this.declarations,...o})}defines(e){e.classes.add(this,"pa-scheme"),e.containers.add(this,this._painted)}erase(e){e.classes.revert(this),e.containers.revert(this)}};r(ia,"$Scheme");let j=ia;const ra=class ra extends g{constructor(){super(...arguments),this.specification=new te,this.$x="",this.$y=""}get declarations(){return`--window-x: ${this.$x}px; --window-y: ${this.$y}px;`}};r(ra,"$Window");let E=ra;const na=class na extends g{constructor(){super(...arguments),this.specification=new oe}get cover(){return this._cover}get jacket(){return this._cover?.annotations.expressed(y)}$Volume(...e){this._cover=e.find(s=>s instanceof $),this.$Annotation(...e.filter(s=>s!==this._cover))}defines(e){e.classes.add(this,"pa-volume")}erase(e){e.classes.revert(this)}};r(na,"$Volume");let A=na;const da=class da extends u{get cover(){return this.$cover?.annotations.expressed(y)}$Jacket(...e){this.$Writing(...e),this._painted=s=>{const o=this.cover?.scheme?.painted;return o===void 0?a.jsx("div",{...s}):a.jsx(o,{...s})},this.containers.add(this,this._painted)}write(){const e=this.cover;if(e===void 0)return;const s=i(w),o=i(As);return a.jsxs(a.Fragment,{children:[a.jsx(s,{children:e.name}),a.jsx("span",{className:"pd-drawing",dangerouslySetInnerHTML:{__html:e.drawing}}),a.jsxs(s,{children:[a.jsx(o,{}),e.author]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-jacket")}};r(da,"$Jacket");let Xe=da;const pa=class pa extends u{constructor(){super(...arguments),this.unfolded=!1}get filedElsewhere(){return this.$subject!==void 0&&this.$subject!==this.$cover}container(e){return super.container({onMouseOver:r(s=>{s.target instanceof Element&&s.target.closest(".pd-filed")!==null&&this.unfold()},"onMouseOver"),onMouseLeave:r(()=>this.fold(),"onMouseLeave"),...e})}unfold(){this.unfolded=!0}fold(){this.unfolded=!1}write(){const e=this.$cover,s=this.$subject;if(e!==void 0)return a.jsxs(a.Fragment,{children:[this.filedElsewhere?Q(s,a.jsx("span",{className:"pd-filed",children:this.mark(s)})):void 0,Q(e,a.jsx("span",{className:"pd-own",children:this.mark(e)})),a.jsxs("span",{className:"pd-names",children:[Q(e,a.jsx("span",{className:"pd-name",children:this.name(e)})),this.filedElsewhere?Q(s,a.jsx("span",{className:"pd-name pd-under",children:this.name(s)})):void 0]})]})}mark(e){const s=i(Ho),o=i(x);return a.jsx(s,{cover:e,children:a.jsx(o,{children:e.mention.identifier})})}name(e){const s=i(w),o=i(x);return a.jsxs(s,{children:[a.jsx(o,{children:e.mention.identifier}),e.title.name]})}$Define(){super.$Define(),this.classes.add(this,"pd-logo");const e=i(To);this.annotations.add(this,a.jsx(e,{}))}};r(pa,"$Logo");let be=pa;var W;let Co=(W=class extends g{constructor(){super(...arguments),this.specification=new $e}defines(e){e.unfolded&&e.classes.add(this,"pa-unfolded")}erase(e){e.classes.revert(this)}},r(W,"$Unfolded"),W);const ca=class ca extends f{$saidOfALogo(e){c(e instanceof be,"unfolded is said of a logo, and this is not one")}};r(ca,"UnfoldedSpecification");let $e=ca;k([l("unfolded is said of a logo")],$e.prototype,"$saidOfALogo");const la=class la extends M{constructor(){super(...arguments),this.style=b.span`
        ${e=>e.$vars}
    `}get cover(){return this.$cover?.annotations.expressed(y)}$Mark(...e){this.$Writing(...e);const s=this.style;this._painted=o=>a.jsx(s,{$vars:`${this.cover?.scheme?.declarations??""} ${this.cover?.window?.declarations??""}`,...o}),this.containers.add(this,this._painted)}write(){return a.jsx("span",{className:"pd-drawing",dangerouslySetInnerHTML:{__html:this.cover?.drawing??""}})}$Define(){super.$Define(),this.classes.add(this,"pd-mark")}};r(la,"$Mark");let Ze=la;const ha=class ha extends Ut{$carriesItsScheme(e){c(e.is(j),"a bookshelf cover carries its scheme, and this one carries none")}$carriesItsWindow(e){c(e.is(E),"a bookshelf cover carries its window, and this one carries none")}$carriesItsIllustration(e){c(e instanceof $&&e.text.find(u).some(s=>s.is(se)),"a bookshelf cover carries its illustration, and this one carries none")}};r(ha,"BookshelfCoverSpecification");let B=ha;k([l("a bookshelf cover carries its scheme")],B.prototype,"$carriesItsScheme");k([l("a bookshelf cover carries its window")],B.prototype,"$carriesItsWindow");k([l("a bookshelf cover carries its illustration")],B.prototype,"$carriesItsIllustration");const fa=class fa extends f{$saidOfADrawing(e){c(e instanceof u&&e.chapter?.is(y)===!0&&e.text.find(Fe).length===1,"an illustration is said of a paragraph of a cover that holds one drawing, and this is not one")}};r(fa,"IllustrationSpecification");let me=fa;k([l("an illustration is said of a paragraph of a cover that holds one drawing")],me.prototype,"$saidOfADrawing");const ga=class ga extends f{$saidOfACover(e){c(e instanceof $&&e.is(y),"a scheme is said of a cover, and this is not one")}$givenItsColours(e){const s=e.annotations.expressed(j)?.colours??[];c(s.every(o=>/^#[0-9a-f]{6}$/iu.test(o)),"a scheme is given its six colours as six hex digits each — the ground, the band and its ink, the foot and its ink, and the ink of the drawing — and this one was given something else")}};r(ga,"SchemeSpecification");let ae=ga;k([l("a scheme is said of a cover")],ae.prototype,"$saidOfACover");k([l("a scheme is given its six colours")],ae.prototype,"$givenItsColours");const ua=class ua extends f{$saidOfACover(e){c(e instanceof $&&e.is(y),"a window is said of a cover, and this is not one")}$givenItsPlace(e){const s=e.annotations.expressed(E);c(/^-?\d+$/u.test(s?.$x??"")&&/^-?\d+$/u.test(s?.$y??""),"a window is given where it stands on the drawing, two whole numbers, and this one was given something else")}};r(ua,"WindowSpecification");let te=ua;k([l("a window is said of a cover")],te.prototype,"$saidOfACover");k([l("a window is given where it stands on the drawing")],te.prototype,"$givenItsPlace");const ba=class ba extends f{$saidOfAChapterStandingForABook(e){c(e instanceof $&&(e.is(ce)||e.is(y)),"a volume is said of a chapter that stands for another book, a synopsis of it or a cover filed under it, and this is neither")}$holdsTheCover(e){const s=[e.annotations.expressed(ce)?.means?.identifier,e.annotations.expressed(mt)?.means?.identifier,e.annotations.expressed(Ds)?.means?.identifier];c(e.annotations.find(A).every(o=>o.cover?.is(y)===!0&&s.includes(o.cover.mention?.identifier)),"a volume holds the cover of a book its chapter stands for, the book a synopsis is of or the subject or author a cover is filed under, and one here holds something else")}};r(ba,"VolumeSpecification");let oe=ba;k([l("a volume is said of a chapter that stands for another book")],oe.prototype,"$saidOfAChapterStandingForABook");k([l("a volume holds the cover of a book its chapter stands for")],oe.prototype,"$holdsTheCover");const Io=i(ee),Nt=i(se),_t=i(j),Ht=i(E),Ao=i(A),Mo=i(Xe),No=i(be),_o=i(Co),Tt=i(Ze),Ho=Tt,To=_o,_e=class _e extends Kt{constructor(){super(...arguments),this.specification=new v,this.themeProvider=!0,this.style=b.div`
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
    `}get pages(){return this.book.pages}get open(){return this.book.open}$Bound(){const e=this.style,s=this.book;this.style=o=>a.jsx(e,{$at:s.means?.identifier,$scheme:s.cover?.annotations.expressed(j)?.declarations,...o}),super.$Bound()}defines(e){for(const t of e.annotations.after(this))t instanceof _e&&e.annotations.express(t,!1);super.defines(e),e.classes.add(this,"pa-layout");const s=this.open;s!==void 0&&e.classes.add(this,"pa-turned");const o=s?.annotations.expressed(I)?.context;o!==void 0&&e.classes.add(this,o)}erase(e){super.erase(e),e.classes.revert(this)}parts(){return[this.paging(),this.regions(),this.areas(),this.phone()]}paging(){return h`
            .pd-leaf:not(.pd-open) { display: none; }
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
            .pa-layout .pd-leaves { grid-area: leaves; min-width: 0; overflow-y: auto; }
            .pa-layout .pd-words .pd-chapter { scroll-margin-block-start: ${({theme:e})=>e.space}; }
        `}areas(){return h`
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
                .pa-layout .pd-leaves { order: 3; overflow: visible; }
                .pa-layout .pd-words .pd-chapter { scroll-margin-block-start: calc(${({theme:e})=>e.barHeight} + ${({theme:e})=>e.space} / 2); }
            }
        `}};r(_e,"$Layout");let Ve=_e;const Fo=i(Ve);var Lo=Object.defineProperty,Wo=Object.getOwnPropertyDescriptor,pe=r((p,e,s,o)=>{for(var t=Wo(e,s),n=p.length-1,d;n>=0;n--)(d=p[n])&&(t=d(e,s,t)||t);return t&&Lo(e,s,t),t},"__decorateClass$7");const Ro='<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3.5 10.5 8 6 12.5"/></svg>',Eo='<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linejoin="round" stroke-linecap="round"><rect class="ground" x="0.75" y="0.75" width="14.5" height="14.5"/><path d="M3.5 5.5h3l1.5 1.5h4.5v5h-9z"/></svg>',$a=class $a extends q{constructor(){super(...arguments),this.specification=new we,this.style=b.div`
        ${e=>e.$vars===void 0?"":`.pa-entry { ${e.$vars} }`}
    `}get place(){return U(this.parent).identifier}get leads(){return this.book.named(this.place)}get cover(){return this.leads?.annotations.expressed(A)?.cover??this.book.coverOf(this.place)}get vars(){const e=this.cover?.annotations.expressed(j);if(e!==void 0)return e.declarations;const s=this.leads?.annotations.expressed(T)?.colour;return s===void 0?void 0:`--colour: ${s};`}$Entry(...e){this.$Format(...e);const s=this.style;this._painted=o=>a.jsx(s,{$vars:this.vars,...o})}defines(e){e.classes.add(this,"pa-entry"),e.containers.add(this,this._painted),(this.place===this.book?.$bookmark||this.place===this.book.open?.mention?.identifier)&&e.classes.add(this,"pa-open")}erase(e){e.classes.revert(this),e.containers.revert(this)}note(){return this.leads?.annotations.expressed(I)?.row(this)}};r($a,"$Entry");let ie=$a;const ma=class ma extends g{constructor(){super(...arguments),this.specification=new ve}defines(e){e.classes.add(this,"pa-appendix")}erase(e){e.classes.revert(this)}};r(ma,"$Appendix");let re=ma;const xa=class xa extends g{constructor(){super(...arguments),this.specification=new ke}get entries(){return this.chapter.text.find(C).flatMap(s=>s.text.find(u)).filter(s=>!s.is(Qt)&&U(s)!==void 0)}$Bound(){const e=i(Ft);for(const s of this.entries)s.annotations.add(this,a.jsx(e,{}));super.$Bound()}};r(xa,"$Index");let xe=xa;const ka=class ka extends f{$saidOfATableOfContents(e){c(e.is(N),"an index is said of a table of contents, and this chapter is not one")}};r(ka,"IndexSpecification");let ke=ka;pe([l("an index is said of a table of contents")],ke.prototype,"$saidOfATableOfContents");const va=class va extends f{$saidOfASection(e){c(e instanceof C&&e.chapter?.is(N)===!0,"an appendix is said of a section of a table of contents, and this is not one")}};r(va,"AppendixSpecification");let ve=va;pe([l("an appendix is said of a section of a table of contents")],ve.prototype,"$saidOfASection");const wa=class wa extends f{$saidOfAnEntry(e){c(e instanceof u&&U(e)!==void 0,"an entry is said of a paragraph that leads somewhere, and this is not one")}};r(wa,"EntrySpecification");let we=wa;pe([l("an entry is said of a paragraph that leads somewhere")],we.prototype,"$saidOfAnEntry");const ya=class ya extends g{constructor(){super(...arguments),this.specification=new je}defines(e){e.classes.add(this,"pa-folded")}erase(e){e.classes.revert(this)}};r(ya,"$Folded");let Se=ya;const ja=class ja extends Z{get on(){return this.$target!==void 0&&[this.$target.$is].flat().includes(this.$of)}container(e){return super.container({...e,onClick:r(s=>{s.preventDefault(),this.press()},"onClick")})}press(){const e=this.$target,s=[e.$is].flat();e.$is=this.on?s.filter(o=>o!==this.$of):[this.$of,...s]}write(){return a.jsx("span",{className:"pd-drawing",dangerouslySetInnerHTML:{__html:Ro}})}$Define(){super.$Define(),this.classes.add(this,"pd-twist")}};r(ja,"$Twist");let es=ja;const za=class za extends q{constructor(){super(...arguments),this.specification=new ze,this.themeProvider=!0,this.tree=b.div`
        .pd-book .pd-holds &.pd-folder { position: relative; }
        .pd-book .pd-holds &.pd-folder .pd-section { margin: 0 0 calc(${({theme:e})=>e.space} / 3); }
        .pd-book .pd-holds &.pd-folder .pd-sentence.pd-heading {
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
        .pd-book .pd-holds &.pd-folder .pd-heading:hover { background: color-mix(in oklab, ${({theme:e})=>e.sky} 30%, white); }
        .pd-book .pd-holds &.pd-folder .pd-heading .pa-reference { color: inherit; text-decoration: none; }
        .pd-book .pd-holds &.pd-folder .pd-twist {
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
        .pd-book .pd-holds &.pd-folder .pd-twist .pd-drawing { display: block; width: calc(0.7143 * ${({theme:e})=>e.size}); height: calc(0.7143 * ${({theme:e})=>e.size}); }
        .pd-book .pd-holds &.pd-folder .pd-twist svg, .pd-book .pd-holds &.pd-folder .pd-folder-mark svg, .pd-book .pd-holds &.pd-folder .pd-file svg { display: block; width: 100%; height: 100%; }
        .pd-book .pd-holds &.pd-folder .pd-word.pd-twist[aria-pressed='true'] { color: #a5aebb; background: none; border-color: transparent; }
        .pd-book .pd-holds &.pd-folder .pd-twist[aria-pressed='false'] { transform: rotate(90deg); }
        .pd-book .pd-holds &.pd-folder .pd-twist:hover { color: ${({theme:e})=>e.ink}; }
        .pd-book .pd-holds &.pd-folder .pd-twist { position: absolute; top: calc(${({theme:e})=>e.space} * 0.2292); left: calc(${({theme:e})=>e.space} * 0.4167); }
        .pd-book .pd-holds &.pd-folder .pd-folder-mark {
            position: absolute;
            top: calc(${({theme:e})=>e.space} * 0.2292);
            left: calc(${({theme:e})=>e.space} * 1.375);
            width: calc(1.1429 * ${({theme:e})=>e.size});
            height: calc(1.1429 * ${({theme:e})=>e.size});
            color: #8a94a3;
        }
        .pd-book .pd-holds &.pd-folder .pd-folder-mark .ground { fill: #f1f3f5; stroke: #8a94a3; stroke-width: 1.5; }
        .pd-book .pd-holds &.pd-folder .pa-folded .pd-paragraph.pa-entry { display: none; }
        .pd-book .pd-holds &.pd-folder .pd-paragraph.pa-entry {
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
        .pd-book .pd-holds &.pd-folder .pd-paragraph.pa-entry::before { content: none; }
        .pd-book .pd-holds &.pd-folder .pa-entry .pd-twist { order: -2; position: static; }
        .pd-book .pd-holds &.pd-folder .pa-entry .pd-twist.pd-blank { visibility: hidden; }
        .pd-book .pd-holds &.pd-folder .pa-entry .pd-icon { order: -1; }
        .pd-book .pd-holds &.pd-folder .pa-entry .pa-content { flex: 1; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
        .pd-book .pd-holds &.pd-folder .pa-entry:hover { background: linear-gradient(color-mix(in oklab, ${({theme:e})=>e.sky} 40%, white), color-mix(in oklab, ${({theme:e})=>e.sky} 40%, white)) left top / 100% calc(1.9286 * ${({theme:e})=>e.size}) no-repeat; }
        .pd-book .pd-holds &.pd-folder .pd-paragraph.pa-entry.pa-open {
            background: linear-gradient(var(--band-ink), var(--band-ink)) left top / 3px calc(1.9286 * ${({theme:e})=>e.size}) no-repeat, linear-gradient(color-mix(in oklab, ${({theme:e})=>e.sky} 72%, white), color-mix(in oklab, ${({theme:e})=>e.sky} 72%, white)) left top / 100% calc(1.9286 * ${({theme:e})=>e.size}) no-repeat;
            color: var(--band-ink);
            font-weight: 400;
            box-shadow: none;
        }
        .pd-book .pd-holds &.pd-folder .pa-number { order: 1; margin: 0; font-size: calc(0.75 * ${({theme:e})=>e.size}); color: color-mix(in oklch, var(--foot-ink) 48%, white); font-variant-numeric: tabular-nums; }
        .pd-book .pd-holds &.pd-folder .pd-paragraph.pa-entry .pd-file {
            order: 2;
            flex: 0 0 calc(100% + ${({theme:e})=>e.space} * 1.75);
            margin: 0 calc(${({theme:e})=>e.space} * -0.5833) 0 calc(${({theme:e})=>e.space} * -1.1667);
            padding: 0 calc(${({theme:e})=>e.space} * 0.5833) 0 calc(${({theme:e})=>e.space} * 2.875);
            opacity: 1;
        }
        .pd-book .pd-holds &.pd-folder .pd-paragraph.pa-entry.pa-folded .pd-file { display: none; }
        .pd-book .pd-holds &.pd-folder .pd-paragraph.pa-entry .pd-file {
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
        .pd-book .pd-holds &.pd-folder .pd-file .pd-drawing { flex: none; width: ${({theme:e})=>e.size}; height: ${({theme:e})=>e.size}; color: #a5aebb; transition: color ${({theme:e})=>e.beat} ease; }
        .pd-book .pd-holds &.pd-folder .pd-file:hover { background: color-mix(in oklab, ${({theme:e})=>e.sky} 40%, white); color: ${({theme:e})=>e.ink}; }
        .pd-book.pa-split .pd-holds &.pd-folder .pd-paragraph.pa-entry .pd-file[aria-pressed='true'], .pd-book.pa-code-forward .pd-holds &.pd-folder .pd-paragraph.pa-entry .pd-file[aria-pressed='true'] { color: ${({theme:e})=>e.skyInk}; font-weight: 500; background: color-mix(in oklab, ${({theme:e})=>e.sky} 45%, white); }
        .pd-book.pa-split .pd-holds &.pd-folder .pd-paragraph.pa-entry .pd-file[aria-pressed='true'] .pd-drawing, .pd-book.pa-code-forward .pd-holds &.pd-folder .pd-paragraph.pa-entry .pd-file[aria-pressed='true'] .pd-drawing { color: var(--colour); }
        @media (max-width: ${({theme:e})=>e.narrow}) {
            .pd-book .pd-holds &.pd-folder .pd-twist, .pd-book .pd-holds &.pd-folder .pd-folder-mark, .pd-book .pd-holds &.pd-folder .pa-entry .pd-file { display: none; }
            .pd-book .pd-holds &.pd-folder .pd-heading { height: auto; padding: 0 calc(${({theme:e})=>e.space} / 2); }
        }
    `}get section(){return this.parent}get first(){return this.section.text.find(u).map(e=>U(e)).find(e=>e!==void 0)?.identifier}$Folder(...e){this.$Format(...e);const s=this.tree,o=i(Yo),t=i(w),n=i(x);this.style=({className:d,children:z})=>{const O=this.first,P=a.jsx("span",{className:"pd-drawing pd-folder-mark",dangerouslySetInnerHTML:{__html:Eo}});return a.jsxs(s,{className:`${d??""} pd-folder`.trim(),children:[a.jsx(o,{target:this.section,of:Bo}),O===void 0?P:a.jsxs(t,{children:[a.jsx(n,{children:O}),P]}),z]})}}defines(e){super.defines(e),e.classes.add(this,"pa-folder")}erase(e){super.erase(e),e.classes.revert(this)}};r(za,"$Folder");let ye=za;const Oa=class Oa extends f{$saidOfASectionOrAnEntry(e){c(e instanceof C&&e.chapter?.is(N)===!0||e.is(ie),"folded is said of a section of a table of contents or of an entry, and this is neither")}};r(Oa,"FoldedSpecification");let je=Oa;pe([l("folded is said of a section of a table of contents or of an entry")],je.prototype,"$saidOfASectionOrAnEntry");const Pa=class Pa extends f{$saidOfASection(e){c(e instanceof C&&e.chapter?.is(N)===!0,"a folder is said of a section of a table of contents, and this is not one")}};r(Pa,"FolderSpecification");let ze=Pa;pe([l("a folder is said of a section of a table of contents")],ze.prototype,"$saidOfASection");const U=r(p=>p.annotations.expressed(ut)??p.text.find(M).map(e=>e.annotations.expressed(ut)).find(e=>e!==void 0),"leads"),Ft=i(ie),zi=i(xe),Oi=i(re),Ms=i(Se),Lt=i(es),Wt=i(ye),Bo=Ms,Yo=Lt,He=class He extends g{constructor(){super(...arguments),this.specification=new v}defines(e){for(const s of e.annotations.after(this))s instanceof He&&e.annotations.express(s,!1);e.classes.add(this,"pa-tone")}erase(e){e.classes.revert(this)}};r(He,"$Tone");let Y=He;const Da=class Da extends Y{defines(e){super.defines(e),e.classes.add(this,"pa-dark")}};r(Da,"$Dark");let ss=Da;const Ca=class Ca extends Y{defines(e){super.defines(e),e.classes.add(this,"pa-light")}};r(Ca,"$Light");let as=Ca;const Ia=class Ia extends Y{defines(e){super.defines(e),e.classes.add(this,"pa-white-over-black")}};r(Ia,"$WhiteOverBlack");let ts=Ia;const Le=i(Y),Rt=i(ss),Ns=i(as),Go=i(ts);var Jo=Object.defineProperty,qo=Object.getOwnPropertyDescriptor,Uo=r((p,e,s,o)=>{for(var t=qo(e,s),n=p.length-1,d;n>=0;n--)(d=p[n])&&(t=d(e,s,t)||t);return t&&Jo(e,s,t),t},"__decorateClass$6");const Aa=class Aa extends M{write(){const e=this.book.pages;return`${e.indexOf(this.chapter)+1} of ${e.length}`}$Define(){super.$Define(),this.classes.add(this,"pd-count")}};r(Aa,"$Count");let os=Aa;const Ma=class Ma extends g{constructor(){super(...arguments),this.specification=new ne}defines(e){e.classes.add(this,"pa-before")}erase(e){e.classes.revert(this)}};r(Ma,"$Before");let is=Ma;const Na=class Na extends g{constructor(){super(...arguments),this.specification=new ne}defines(e){e.classes.add(this,"pa-after")}erase(e){e.classes.revert(this)}};r(Na,"$After");let rs=Na;const _a=class _a extends f{$saidOfAWordOfATurn(e){c(e instanceof M&&e.parent instanceof Oe,"this is said of a word of a turn, and here it is said of something else")}};r(_a,"OfATurnSpecification");let ne=_a;Uo([l("this is said of a word of a turn")],ne.prototype,"$saidOfAWordOfATurn");const Ko=i(os),Qo=i(is),Xo=i(rs),Ha=class Ha extends u{get before(){const e=this.book.pages;return e[e.indexOf(this.chapter)-1]??this.chapter}get after(){const e=this.book.pages;return e[e.indexOf(this.chapter)+1]??this.chapter}write(){const e=i(w),s=i(Ko),o=i(Qo),t=i(Xo),n=i(this.before===this.chapter?Be:x),d=i(this.after===this.chapter?Be:x);return a.jsxs(a.Fragment,{children:[a.jsxs(e,{children:[a.jsx(o,{}),a.jsx(n,{children:this.before.mention.identifier}),"← ",this.before.title.name]}),a.jsx(s,{}),a.jsxs(e,{children:[a.jsx(t,{}),a.jsx(d,{children:this.after.mention.identifier}),this.after.title.name," →"]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-turn")}};r(Ha,"$Turn");let Oe=Ha;const Zo=i(Oe);var Vo=Object.defineProperty,So=Object.getOwnPropertyDescriptor,We=r((p,e,s,o)=>{for(var t=o>1?void 0:o?So(e,s):e,n=p.length-1,d;n>=0;n--)(d=p[n])&&(t=(o?d(e,s,t):d(t))||t);return o&&t&&Vo(e,s,t),t},"__decorateClass$5");const Ta=class Ta extends Xt{constructor(){super(...arguments),this.specification=new L}get chapters(){return this.text.find($).filter(e=>[...e.classes].includes("pd-canonical"))}get placed(){return[this.cover,this.synopsis,this.table,...this.chapters]}get pages(){const e=this.appendix;return this.chapters.filter(s=>!e.includes(s))}get appendix(){const e=this.table;if(e===void 0)return[];const s=e.text.find(C).filter(o=>o.is(re)).flatMap(o=>o.text.find(u).map(t=>U(t)?.identifier));return this.chapters.filter(o=>s.includes(o.mention?.identifier??""))}get open(){return this.$bookmark===void 0?void 0:this.named(this.$bookmark)}get tones(){return[Rt,Ns,Go]}write(){return a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"pd-library",children:this.library()}),a.jsx("div",{className:"pd-me",children:this.me()}),a.jsx("div",{className:"pd-holds",children:this.holds()}),a.jsx("div",{className:"pd-head",children:this.head()}),a.jsxs("div",{className:"pd-leaves",children:[this.front(),this.leaves()]})]})}library(){if(this._logo===void 0)return;const e=i(this._logo);return a.jsx(e,{})}me(){const e=i(Tt),s=i(x),o=this.coverOf(this.author?.means?.identifier);return a.jsxs(a.Fragment,{children:[this.byline(),o===void 0?void 0:this.painted(o,a.jsx(e,{cover:o,children:a.jsx(s,{children:o.mention.identifier})}))]})}painted(e,s,o){return Q(e,s,o)}holds(){const e=i(this.table);return a.jsx(e,{})}head(){const e=i(this.cover);return a.jsxs(a.Fragment,{children:[this.filed(),a.jsx(e,{}),a.jsx("div",{className:"pd-switches",children:this.switches()})]})}front(){return a.jsx("div",{className:this.open===void 0?"pd-leaf pd-front pd-open":"pd-leaf pd-front",children:this.opening()})}opening(){const e=i(this.synopsis);return a.jsx("div",{className:"pd-words",children:a.jsx(e,{})})}leaves(){return this.chapters.map((e,s)=>this.leaf(e,s))}leaf(e,s){const o=i(e),t=e===this.open?"pd-leaf pd-open":"pd-leaf";return e.is(I)?a.jsx("div",{className:t,children:a.jsx(o,{})},s):a.jsxs("div",{className:t,children:[a.jsx("div",{className:"pd-words",children:a.jsx(o,{})}),a.jsx("div",{className:"pd-files",children:this.listings(e)})]},s)}named(e){return(this._places??this.places()).get(e)}places(){const e=new Map;for(const s of this.chapters)for(const o of this.sections(s))o.mention!==void 0&&!e.has(o.mention.identifier)&&e.set(o.mention.identifier,s);for(const s of this.chapters)s.mention!==void 0&&e.set(s.mention.identifier,s);return e}coverOf(e){if(e!==void 0)return this.means?.identifier===e?this.cover:this.cover?.annotations.find(A).map(s=>s.cover).find(s=>s?.mention?.identifier===e)}byline(){const e=i(At);return a.jsx(e,{chapter:this.cover})}filed(){const e=i(Mt);return a.jsx(e,{chapter:this.cover})}switches(){}listings(e){const s=i(It);return e.annotations.find(X).reverse().map((o,t)=>a.jsx(s,{chapter:e,identifier:o.$identifier,type:o.$type},t))}filesOf(e){return e.annotations.find(X).reverse().map(s=>`${s.$identifier}${s.$type}`)}sections(e){return e.text.find(C).flatMap(s=>[s,...this.sections(s)])}sectionOf(e){const s=this.table;return s===void 0?void 0:this.sections(s).find(o=>o.canonical?.name===e.name)}turn(){this.bookmark!==this.cover&&super.turn()}$Define(){super.$Define();const e=i(Fo),s=i(Le);this.annotations.add(this,a.jsx(e,{}),a.jsx(s,{}))}$Bound(){this._places=this.places();const e=i(Wt),s=this.table?.annotations.expressed(N);for(const n of s?.parts??[]){const d=this.sectionOf(n);d===void 0||d.is(ye)||!n.chapters.some(z=>z.is(I))||d.annotations.add(this,a.jsx(e,{}))}const o=i(No);this._logo=Zt.chemical(a.jsx(o,{cover:this.cover,subject:this.coverOf(this.subject?.means?.identifier)}),this);const t=i(Zo);for(const n of this.pages)n.text.add(this,a.jsx(t,{}));super.$Bound()}};r(Ta,"$LibraryBook");let F=Ta;We([xt()],F.prototype,"_places",2);const Fa=class Fa extends Vt{$holdsOnlyChapters(e){c([...e.text].every(s=>s instanceof $),"a book of this library holds only chapters, and this one holds something else")}$placesEveryChapter(e){c(e.text.find($).every(s=>e.placed.includes(s)),"a book of this library has a place for every chapter it holds, and this one holds a chapter it places nowhere")}$onlyAChapterAppends(e){c(e.text.find($).every(s=>e.chapters.includes(s)||!s.is(X)),"only an ordinary chapter appends a file, and here a cover, a synopsis or a table of contents appends one")}};r(Fa,"LibraryBookSpecification");let L=Fa;We([l("a book of this library holds only chapters")],L.prototype,"$holdsOnlyChapters",1);We([l("a book of this library has a place for every chapter it holds")],L.prototype,"$placesEveryChapter",1);We([l("only an ordinary chapter appends a file")],L.prototype,"$onlyAChapterAppends",1);const Et=i(F);i(Et,Cs)($o);i(Et,Le)(Rt);var ei=Object.defineProperty,si=Object.getOwnPropertyDescriptor,ai=r((p,e,s,o)=>{for(var t=si(e,s),n=p.length-1,d;n>=0;n--)(d=p[n])&&(t=d(e,s,t)||t);return t&&ei(e,s,t),t},"__decorateClass$4");const Te=class Te extends g{constructor(){super(...arguments),this.specification=new v}defines(e){for(const s of e.annotations.after(this))s instanceof Te&&e.annotations.express(s,!1);e.classes.add(this,"pa-reading")}erase(e){e.classes.revert(this)}};r(Te,"$Reading");let G=Te;const La=class La extends G{defines(e){super.defines(e),e.classes.add(this,"pa-code-forward")}};r(La,"$CodeForward");let ns=La;const Wa=class Wa extends G{defines(e){super.defines(e),e.classes.add(this,"pa-words-forward")}};r(Wa,"$WordsForward");let ds=Wa;const Ra=class Ra extends G{defines(e){super.defines(e),e.classes.add(this,"pa-split")}};r(Ra,"$Split");let ps=Ra;const Ea=class Ea extends g{constructor(){super(...arguments),this.specification=new v}defines(e){e.classes.add(this,"pa-light-code")}erase(e){e.classes.revert(this)}};r(Ea,"$LightCode");let cs=Ea;const Ba=class Ba extends g{constructor(){super(...arguments),this.specification=new v}defines(e){e.classes.add(this,"pa-wrapped")}erase(e){e.classes.revert(this)}};r(Ba,"$Wrapped");let ls=Ba;const Ya=class Ya extends g{constructor(){super(...arguments),this.specification=new v}defines(e){e.classes.add(this,"pa-numbered")}erase(e){e.classes.revert(this)}};r(Ya,"$Numbered");let hs=Ya;const Ga=class Ga extends g{constructor(){super(...arguments),this.specification=new De}defines(e){e.classes.add(this,"pa-brief")}erase(e){e.classes.revert(this)}};r(Ga,"$Brief");let Pe=Ga;const Ja=class Ja extends f{$saidOfAParagraph(e){c(e instanceof u,"brief is said of a paragraph, and this is not one")}};r(Ja,"BriefSpecification");let De=Ja;ai([l("brief is said of a paragraph")],De.prototype,"$saidOfAParagraph");i(G);const Ee=i(ns),fs=i(ds),K=i(ps),ti=i(cs),oi=i(ls),Bt=i(hs),Pi=i(Pe);var ii=Object.defineProperty,ri=Object.getOwnPropertyDescriptor,ni=r((p,e,s,o)=>{for(var t=ri(e,s),n=p.length-1,d;n>=0;n--)(d=p[n])&&(t=d(e,s,t)||t);return t&&ii(e,s,t),t},"__decorateClass$3");const qa=class qa extends I{constructor(){super(...arguments),this.themeProvider=!0,this.$file="",this.spread=b.div`
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
        .pd-book .pd-leaf.pd-open & {
            display: grid;
            grid-template-columns: minmax(0, 1fr) 0 calc(2 * ${({theme:e})=>e.space});
            grid-template-areas: 'words panel rail';
            min-height: calc(100vh - ${({theme:e})=>e.barHeight});
            transition: grid-template-columns 0.28s ease;
        }
        .pd-book.pa-split .pd-leaf.pd-open & { grid-template-columns: minmax(380px, 1fr) min(44vw, 720px) calc(2 * ${({theme:e})=>e.space}); }
        .pd-book.pa-code-forward .pd-leaf.pd-open & {
            grid-template-areas: 'panel panel grip';
            grid-template-columns: minmax(0, 1fr) 0 calc(${({theme:e})=>e.space} * 0.75);
            height: calc(100vh - ${({theme:e})=>e.barHeight});
        }
        .pd-book & .pd-words { grid-area: words; min-width: 0; overflow: hidden; }
        .pd-book.pa-code-forward & .pd-words { display: none; }
        .pd-book & .pd-files { grid-area: panel; display: grid; grid-template-rows: auto minmax(0, 1fr); min-width: 0; overflow: hidden; }
        .pd-book & .pd-rail { grid-area: rail; }
        .pd-book.pa-code-forward & .pd-rail { display: none; }
        .pd-book & .pd-grip { grid-area: grip; display: none; }
        .pd-book.pa-code-forward & .pd-grip { display: block; }
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
        .pd-book & .pd-rail {
            display: flex;
            flex-direction: column;
            align-items: stretch;
            gap: calc(${({theme:e})=>e.space} / 12);
            padding: calc(${({theme:e})=>e.space} * 0.4167) 0;
            background: linear-gradient(90deg, color-mix(in oklch, var(--night) 82%, white) 0%, var(--night) 22%);
            box-shadow: inset 1px 0 0 rgba(255, 255, 255, 0.08);
            transition: background ${({theme:e})=>e.beat} ease;
        }
        .pd-book & .pd-rail .pd-file {
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
        .pd-book & .pd-rail .pd-file .pd-file-name { writing-mode: vertical-rl; }
        .pd-book & .pd-rail .pd-file .pd-drawing { width: calc(0.9286 * ${({theme:e})=>e.size}); height: calc(0.9286 * ${({theme:e})=>e.size}); color: #9aa4b3; }
        .pd-book & .pd-rail .pd-file svg { display: block; width: 100%; height: 100%; }
        .pd-book & .pd-rail .pd-skeleton { display: flex; flex-direction: column; align-items: flex-start; gap: 3px; width: calc(${({theme:e})=>e.space} * 1.0833); margin-block-start: 2px; opacity: 0.55; transition: opacity ${({theme:e})=>e.beat} ease; }
        .pd-book & .pd-rail .pd-skeleton i { display: block; height: 2px; border-radius: 1px; background: color-mix(in oklch, var(--brass) 60%, var(--glow)); }
        .pd-book & .pd-rail .pd-file:hover { color: var(--glow); background: var(--dusk); }
        .pd-book & .pd-rail .pd-word.pd-switch[aria-pressed='true'] { color: color-mix(in oklch, var(--glow) 66%, var(--night)); border-color: transparent; background: none; }
        .pd-book.pa-split & .pd-rail .pd-file[aria-pressed='true'] { color: var(--glow); border-inline-start-color: var(--foot); background: var(--dusk); }
        .pd-book & .pd-rail .pd-file:hover .pd-skeleton, .pa-split & .pd-rail .pd-file[aria-pressed='true'] .pd-skeleton { opacity: 0.9; }
        .pd-book & .pd-grip { position: relative; background: linear-gradient(90deg, #f3f1eb 0%, #fbfaf6 10px); border-inline-start: thin solid #e6e2d8; transition: background ${({theme:e})=>e.beat} ease; }
        .pd-book & .pd-grip:hover { background: linear-gradient(90deg, #ece9e1 0%, #ffffff 10px); }
        .pd-book & .pd-grip .pd-word.pd-switch { display: block; width: 100%; height: 100%; padding: 0; border: 0; border-radius: 0; background: none; cursor: pointer; }
        .pd-book & .pd-grip .pd-skeleton { position: absolute; top: calc(${({theme:e})=>e.space} * 0.5833); left: 5px; display: flex; flex-direction: column; gap: 3px; width: 8px; opacity: 0.7; }
        .pd-book & .pd-grip .pd-skeleton i { display: block; height: 2px; border-radius: 1px; background: #cfcbc0; }
        .pd-book & .pd-files {
            background: linear-gradient(90deg, color-mix(in oklch, var(--night) 90%, white) 0%, var(--night) 36px);
            color: var(--glow);
            box-shadow: -10px 0 18px -16px rgba(43, 54, 60, 0.5);
            transition: background ${({theme:e})=>e.beat} ease, color ${({theme:e})=>e.beat} ease;
        }
        .pd-book.pa-code-forward & .pd-files { box-shadow: none; }
        .pd-book & .pd-tabs {
            display: flex;
            align-items: stretch;
            gap: 1px;
            padding: 0 0 0 2px;
            background: linear-gradient(180deg, color-mix(in oklch, var(--dusk) 88%, white) 0%, var(--dusk) 100%);
            border-block-end: thin solid color-mix(in oklch, var(--foot) 28%, var(--dusk));
        }
        .pd-book & .pd-tabs .pd-file {
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
        .pd-book & .pd-tabs .pd-file .pd-drawing { width: calc(0.9286 * ${({theme:e})=>e.size}); height: calc(0.9286 * ${({theme:e})=>e.size}); color: #9aa4b3; }
        .pd-book & .pd-tabs .pd-file svg { display: block; width: 100%; height: 100%; }
        .pd-book & .pd-tabs .pd-file:hover { color: var(--glow); }
        .pd-book & .pd-tabs .pd-file[aria-pressed='true'] { color: var(--glow); background: var(--night); border-block-start-color: var(--foot); }
        .pd-book & .pd-tabs .pd-file[aria-pressed='true'] .pd-drawing { color: var(--colour); }
        .pd-book & .pd-tabs .pd-words-tab, .pd-tabs .pd-dock { display: flex; align-items: center; }
        .pd-book & .pd-tabs .pd-dock { margin-inline-start: auto; }
        .pd-book & .pd-tabs .pd-words-tab .pd-word.pd-switch, .pd-tabs .pd-dock .pd-word.pd-switch {
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
        .pd-book & .pd-tabs .pd-dock .pd-word.pd-switch { color: var(--brass); }
        .pd-book & .pd-tabs .pd-words-tab .pd-word.pd-switch:hover, .pd-tabs .pd-dock .pd-word.pd-switch:hover { color: var(--glow); }
        .pd-book & .pd-tabs .pd-dock .pd-word.pd-switch::before { content: ''; width: 9px; height: 9px; border: 1.5px solid currentColor; border-radius: 1px; box-shadow: 3px 3px 0 -1.5px currentColor; }
        .pd-book & .pd-tabs .pd-to-split { display: none; }
        .pd-book.pa-code-forward & .pd-tabs .pd-to-full, .pa-code-forward & .pd-tabs .pd-words-tab { display: none; }
        .pd-book.pa-code-forward & .pd-tabs .pd-to-split { display: flex; }
        .pd-book.pa-code-forward & .pd-tabs .pd-dock .pd-word.pd-switch::before { box-shadow: -3px 3px 0 -1.5px currentColor; }
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
        .pd-book & .pd-listings { display: grid; grid-template-rows: minmax(0, 1fr); align-content: start; min-height: 0; overflow: hidden; }
        .pd-book & .pd-listings .pd-container { display: contents; }
        .pd-book & .pd-paragraph.pd-listing { display: none; margin: 0; padding: 0; min-height: 0; }
        .pd-book & .pd-listing.pa-opened { display: block; overflow: auto; scrollbar-width: thin; scrollbar-color: transparent transparent; transition: scrollbar-color ${({theme:e})=>e.beat} ease; }
        .pd-book & .pd-listing.pa-opened:hover { scrollbar-color: var(--dim) transparent; }
        .pd-book & .pd-listing .pd-word { display: none; }
        .pd-book & .pd-listing .pd-code {
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
        .pd-book.pa-code-forward & .pd-listing .pd-code { cursor: default; }
        .pd-book & .pd-listing .pd-code code { background: transparent; color: inherit; }
        .pd-book & .pd-code-line { display: block; padding-inline-end: calc(${({theme:e})=>e.space} * 0.75); white-space: pre; }
        .pd-book.pa-wrapped & .pd-code-line { white-space: pre-wrap; padding-inline-start: calc(${({theme:e})=>e.space} * 2.4167); text-indent: calc(${({theme:e})=>e.space} * -2.4167); }
        .pd-book & .pd-code-line::before { content: attr(data-line); display: inline-block; width: calc(${({theme:e})=>e.space} * 1.8333); padding-inline-end: calc(${({theme:e})=>e.space} * 0.5833); text-align: end; color: var(--dim); user-select: none; text-indent: 0; }
        .pd-book:not(.pa-numbered) & .pd-code-line::before { content: ''; width: calc(${({theme:e})=>e.space} * 0.5833); padding: 0; }
        .pd-book.pa-light-code & .hljs-keyword, .pa-light-code & .hljs-built_in, .pa-light-code & .hljs-literal { color: #5a4fa8; }
        .pd-book.pa-light-code & .hljs-string, .pa-light-code & .hljs-regexp, .pa-light-code & .hljs-number { color: #2f7f6e; }
        .pd-book.pa-light-code & .hljs-title, .pa-light-code & .hljs-type, .pa-light-code & .hljs-tag, .pa-light-code & .hljs-name, .pa-light-code & .hljs-attr { color: #23407a; }
        .pd-book.pa-light-code & .hljs-comment, .pa-light-code & .hljs-meta { color: #8a94a3; }
        @media (max-width: ${({theme:e})=>e.narrow}) {
            .pd-book .pd-leaf.pd-open &, .pd-book.pa-split .pd-leaf.pd-open &, .pd-book.pa-code-forward .pd-leaf.pd-open & { display: block; height: auto; min-height: 0; }
            .pd-book & .pd-rail, .pd-book & .pd-grip { display: none; }
            .pd-book.pa-code-forward & .pd-words { display: block; }
            .pd-book & .pd-words { padding: calc(${({theme:e})=>e.space} * 0.83) calc(${({theme:e})=>e.space} * 0.67) calc(${({theme:e})=>e.space} / 3); }
            .pd-book & .pd-words .pd-title { font-size: calc(1.5 * ${({theme:e})=>e.size}); }
            .pd-book & .pd-files { box-shadow: none; }
        }
    `}get files(){return this.book.filesOf(this.parent)}get file(){const e=this.files;return e.includes(this.$file)?this.$file:e[0]??""}get readings(){return[fs,K,Ee]}get context(){return"pa-built"}$Manual(...e){this.$Format(...e);const s=this.spread,o=i(ao),t=i(Ye),n=i(bt),d=i(It);this.style=({className:z,children:O})=>{const P=this.parent,_=this.book,ft=this.files,Yt=P.text.find(C).flatMap(m=>m.text.find(u)).slice(0,16);return a.jsxs(s,{className:z,children:[a.jsx("div",{className:"pd-words",children:O}),a.jsxs("div",{className:"pd-files",children:[a.jsxs("div",{className:"pd-tabs",children:[ft.map(m=>a.jsx(n,{chapter:P,name:m,manual:this},m)),a.jsx("span",{className:"pd-words-tab",children:a.jsx(o,{chapter:_.cover,of:fs,among:this.readings,children:"words"})}),a.jsx("span",{className:"pd-dock pd-to-full",children:a.jsx(o,{chapter:_.cover,of:Ee,among:this.readings,children:"full screen"})}),a.jsx("span",{className:"pd-dock pd-to-split",children:a.jsx(o,{chapter:_.cover,of:K,among:this.readings,children:"split"})}),a.jsxs("span",{className:"pd-options",children:[a.jsx(t,{chapter:_.cover,of:ti,children:"light"}),a.jsx(t,{chapter:_.cover,of:oi,children:"wrap"}),a.jsx(t,{chapter:_.cover,of:Bt,children:"lines"})]})]}),a.jsx("div",{className:"pd-listings",children:P.annotations.find(X).reverse().map((m,Re)=>a.jsx(d,{chapter:P,identifier:m.$identifier,type:m.$type,reading:Ee,among:this.readings,manual:this},Re))})]}),a.jsx("div",{className:"pd-rail",children:ft.map(m=>a.jsx(n,{chapter:P,name:m,of:K,among:this.readings,manual:this,skeleton:!0},m))}),a.jsx("div",{className:"pd-grip",children:a.jsx(o,{chapter:_.cover,of:K,among:this.readings,children:a.jsx("span",{className:"pd-skeleton",children:Yt.map((m,Re)=>a.jsx("i",{style:{width:`${Math.max(25,Math.min(100,H.copy(m.text).length/4))}%`}},Re))})})})]})}}show(e){this.$file=e}row(e){const s=i(Lt),o=i(bt),t=this.parent,n=this.files;return a.jsxs(a.Fragment,{children:[n.length===0?a.jsx("span",{className:"pd-twist pd-blank"}):a.jsx(s,{target:e.parent,of:Ms}),n.map(d=>a.jsx(o,{chapter:t,name:d,of:K,among:this.readings,manual:this},d))]})}defines(e){super.defines(e),e.classes.add(this,"pa-manual")}erase(e){super.erase(e),e.classes.revert(this)}};r(qa,"$Manual");let gs=qa;const Ua=class Ua extends F{constructor(){super(...arguments),this.specification=new Ce}get open(){return super.open??this.pages[0]}head(){}front(){}switches(){}$Define(){super.$Define(),this.$is=[fs,Bt]}$Bound(){const e=i(Wt);for(const s of this.table?.text.find(C)??[])s.annotations.add(this,a.jsx(e,{})),s.is(re)&&(s.$is=[Ms]);super.$Bound()}};r(Ua,"$ManualBook");let us=Ua;const Ka=class Ka extends L{$everyChapterHasABrief(e){c(e.chapters.every(s=>s.text.find(u).some(o=>o.is(Pe))),"every chapter of a manual opens with a brief, and one here has none")}};r(Ka,"ManualBookSpecification");let Ce=Ka;ni([l("every chapter of a manual opens with a brief")],Ce.prototype,"$everyChapterHasABrief");const Di=i(gs),_s=i(us);i(_s,Le)(Ns);var di=Object.defineProperty,pi=Object.getOwnPropertyDescriptor,Hs=r((p,e,s,o)=>{for(var t=pi(e,s),n=p.length-1,d;n>=0;n--)(d=p[n])&&(t=d(e,s,t)||t);return t&&di(e,s,t),t},"__decorateClass$2");const Qa=class Qa extends g{constructor(){super(...arguments),this.specification=new J}get date(){return this.text.find(kt)[0]}defines(e){e.classes.add(this,"pa-dated")}erase(e){e.classes.revert(this)}note(){const e=i(this.date);return a.jsx(e,{})}};r(Qa,"$Dated");let de=Qa;const Xa=class Xa extends f{$saidOfAChapter(e){c(e instanceof $,"dated is said of a chapter, and this is not one")}$datedOnce(e){c(e.annotations.containsOne(de),"a chapter is dated once, and this one is dated more than once")}$givenOneDate(e){c(e.annotations.expressed(de)?.text.find(kt).length===1,"a dated chapter is given one date, and this one is given none or more than one")}};r(Xa,"DatedSpecification");let J=Xa;Hs([l("dated is said of a chapter")],J.prototype,"$saidOfAChapter");Hs([l("a chapter is dated once")],J.prototype,"$datedOnce");Hs([l("a dated chapter is given one date")],J.prototype,"$givenOneDate");const Ci=i(de),Za=class Za extends ie{constructor(){super(...arguments),this.label=b.span.attrs({className:"pa-number"})``}get number(){return this.book.pages.indexOf(this.leads)+1}get kind(){return this.leads?.annotations.expressed(D)}note(){const e=this.label,s=i(Ct),o=this.kind;return a.jsxs(a.Fragment,{children:[super.note(),o===void 0?void 0:a.jsx(s,{kind:o}),this.number===0?void 0:a.jsx(e,{children:String(this.number)})]})}};r(Za,"$NumberedEntry");let bs=Za;const ci=i(bs);i(_s,Ft)(ci);const Va=class Va extends ee{constructor(){super(...arguments),this.style=b.header`
        .pd-chapter.pa-cover { margin-block: 0; }
        .pa-cover .pd-title {
            font-size: calc(1.04 * ${({theme:e})=>e.size});
            font-weight: 600;
        }
    `}};r(Va,"$ManualCover");let $s=Va;const Sa=class Sa extends N{constructor(){super(...arguments),this.style=b.nav`
        .pa-table-of-contents .pa-reference { color: inherit; text-decoration: none; }
    `}};r(Sa,"$ManualTableOfContents");let ms=Sa;const Ii=i($s),Ai=i(ms),et=class et extends S{constructor(){super(...arguments),this.measure="104ch",this.holdsColumn="272px",this.barHeight="52px",this.space="24px",this.size="14px",this.beat="0.22s",this.serif="'Source Serif 4', Georgia, serif",this.paper="#fdfcfa",this.ink="#343c4a",this.heading="#1a1f36",this.soft="#727d8c",this.faint="#9ea8b5",this.line="#e4e9f2",this.tint="#f0f4fc",this.barTint="#f8fafe",this.side="#f7f8fb",this.sideInk="#3a4452",this.sideDim="#6b7684",this.sideLine="#e0e4eb",this.sky="#e3edfb",this.skyInk="#4a6ea0",this.accent="#4a6ea0",this.colour="#4fb3a8",this.radius="6px",this.wash="linear-gradient(135deg, #f1f5fd 0%, #fdfcfa 48%, #fdf5ee 100%)"}parts(){return[...super.parts(),this.tree(),this.icons(),this.small()]}library(){return h`
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
        `}};r(et,"$ManualTheme");let xs=et;const li=i(xs);i(_s,Cs)(li);var hi=Object.defineProperty,fi=Object.getOwnPropertyDescriptor,gi=r((p,e,s,o)=>{for(var t=fi(e,s),n=p.length-1,d;n>=0;n--)(d=p[n])&&(t=d(e,s,t)||t);return t&&hi(e,s,t),t},"__decorateClass$1");const st=class st extends g{constructor(){super(...arguments),this.specification=new Ie}defines(e){e.classes.add(this,"pa-first")}erase(e){e.classes.revert(this)}};r(st,"$First");let ks=st;const at=class at extends f{$saidOfAParagraph(e){c(e instanceof u,"first is said of a paragraph, and this is not one")}};r(at,"FirstSpecification");let Ie=at;gi([l("first is said of a paragraph")],Ie.prototype,"$saidOfAParagraph");const Mi=i(ks),tt=class tt extends S{constructor(){super(...arguments),this.serif="'Source Serif 4', Georgia, serif",this.paper="#fdfcfa",this.ink="#343c4a",this.soft="#727d8c",this.faint="#9ea8b5",this.line="#e4e9f2",this.tint="#f0f4fc",this.barTint="#f8fafe",this.sky="#e3edfb",this.skyInk="#4a6ea0",this.accent="#4a6ea0",this.wash="linear-gradient(135deg, #f2f6fd 0%, #fdfcfa 48%, #fdf6f1 100%)",this.side="#f7f8fb",this.sideInk="#3a4452",this.sideDim="#7f8a9b",this.sideLine="#e3e7ee",this.barHeight="52px",this.holdsColumn="232px",this.space="24px",this.cover="132px",this.volume="184px",this.radius="6px",this.spine="inset 3px 0 0 rgba(0, 0, 0, 0.08), inset 4px 0 0 rgba(255, 255, 255, 0.35), 0 6px 12px -10px rgba(44, 52, 64, 0.3)",this.lift="inset 3px 0 0 rgba(0, 0, 0, 0.08), inset 4px 0 0 rgba(255, 255, 255, 0.35), 0 10px 16px -12px rgba(44, 52, 64, 0.35)",this.openSpine="inset 7px 0 0 rgba(0, 0, 0, 0.07), inset 9px 0 0 rgba(255, 255, 255, 0.45), 0 12px 22px -16px rgba(44, 52, 64, 0.35)",this.keyword="#5a4fa8",this.string="#2f7f6e",this.type="#23407a",this.comment="#8a94a3"}parts(){return[...super.parts(),this.shelf(),this.jackets(),this.desk(),this.unfolded(),this.built(),this.small()]}page(){return h`
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
            .pd-holds .pd-folder { margin-block-start: auto; }
            .pd-holds .pd-section.pa-appendix.pa-folder { padding-block-start: 0; }
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
                .pd-holds .pd-folder { margin: 0; }
            }
        `}shelf(){return h`
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
            .pd-leaf.pd-desk.pd-open {
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
            .pd-leaf.pd-desk.pd-open .pd-paragraph.pd-jacket {
                width: ${({theme:e})=>e.volume};
                height: calc(${({theme:e})=>e.volume} * 1.5);
                font-size: calc(1.357 * ${({theme:e})=>e.size});
                box-shadow: ${({theme:e})=>e.openSpine};
                cursor: default;
            }
            .pd-leaf.pd-desk.pd-open .pd-jacket .pd-word {
                padding: calc(${({theme:e})=>e.space} / 2) calc(${({theme:e})=>e.space} * 0.833) calc(${({theme:e})=>e.space} / 2) calc(${({theme:e})=>e.space} * 0.958);
                box-shadow: 0 calc(${({theme:e})=>e.space} / 8) 0 ${({theme:e})=>e.white};
            }
            .pd-leaf.pd-desk.pd-open .pd-jacket .pd-word.pa-label {
                padding: 0 calc(${({theme:e})=>e.space} * 0.75) 0 calc(${({theme:e})=>e.space} * 0.875);
                font-size: calc(0.75 * ${({theme:e})=>e.size});
                letter-spacing: 0.18em;
                box-shadow: 0 calc(${({theme:e})=>e.space} / -8) 0 ${({theme:e})=>e.white};
            }
            .pd-leaf.pd-desk.pd-open .pd-words {
                position: relative;
                max-height: calc(${({theme:e})=>e.volume} * 1.5);
                padding-block-start: calc(${({theme:e})=>e.space} / 4);
                overflow: clip;
            }
            .pd-leaf.pd-desk.pd-open .pd-words::after {
                content: '';
                position: absolute;
                inset-inline: 0;
                top: calc(${({theme:e})=>e.volume} * 1.5 - ${({theme:e})=>e.space} * 3);
                height: calc(${({theme:e})=>e.space} * 3);
                background: linear-gradient(to bottom, transparent, color-mix(in oklch, var(--ground, ${({theme:e})=>e.tint}) 60%, white) 70%, color-mix(in oklch, var(--ground, ${({theme:e})=>e.tint}) 60%, white));
                pointer-events: none;
            }
            .pd-leaf.pd-desk.pd-open .pd-words .pd-chapter { margin-block: 0; max-width: none; scroll-margin-block-start: calc(${({theme:e})=>e.space} * 3.5); }
            .pd-leaf.pd-desk.pd-open .pd-words .pd-paragraph.pd-shelved {
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
            .pd-leaf.pd-desk.pd-open .pd-paragraph.pd-shelved::before {
                content: '';
                width: calc(${({theme:e})=>e.space} / 3);
                height: calc(${({theme:e})=>e.space} / 3);
                border-radius: 50%;
                background: var(--foot, ${({theme:e})=>e.sky});
            }
            .pd-leaf.pd-desk.pd-open .pd-words .pd-title {
                margin: 0 0 calc(${({theme:e})=>e.space} / 6);
                font-family: ${({theme:e})=>e.serif};
                font-size: calc(1.714 * ${({theme:e})=>e.size});
                font-weight: 700;
                line-height: 1.1;
                letter-spacing: -0.01em;
                color: var(--band-ink, ${({theme:e})=>e.ink});
            }
            .pd-leaf.pd-desk.pd-open .pd-words .pd-paragraph {
                display: block;
                max-width: 56ch;
                margin: 0 0 calc(${({theme:e})=>e.space} * 0.417);
                font-family: ${({theme:e})=>e.serif};
                font-size: calc(1.07 * ${({theme:e})=>e.size});
                font-weight: 400;
                line-height: 1.55;
                color: ${({theme:e})=>e.ink};
            }
            .pd-leaf.pd-desk.pd-open .pd-words .pd-paragraph.pd-turn { display: none; }
            .pd-leaf.pd-desk.pd-open .pd-words .pd-paragraph.pa-caption {
                font-family: ${({theme:e})=>e.font};
                font-size: ${({theme:e})=>e.size};
                font-weight: 500;
                line-height: 1.5;
                color: var(--band-ink, ${({theme:e})=>e.ink});
            }
            .pd-leaf.pd-desk.pd-open .pd-words .pd-paragraph .pa-reference { color: var(--band-ink, ${({theme:e})=>e.skyInk}); }
            .pd-leaf.pd-desk.pd-open .pd-line { grid-column: 2; display: flex; flex-wrap: wrap; gap: 0 calc(${({theme:e})=>e.space} / 2); }
            .pd-leaf.pd-desk.pd-open .pd-paragraph.pd-byline, .pd-leaf.pd-desk.pd-open .pd-paragraph.pd-filed-under {
                display: inline-flex;
                gap: calc(${({theme:e})=>e.space} / 6);
                max-width: none;
                margin: 0 calc(${({theme:e})=>e.space} / 3) calc(${({theme:e})=>e.space} * 0.667) 0;
                font-family: ${({theme:e})=>e.serif};
                font-size: calc(0.93 * ${({theme:e})=>e.size});
                line-height: 1.55;
                color: ${({theme:e})=>e.soft};
            }
            .pd-leaf.pd-desk.pd-open .pd-line .pd-paragraph { margin-block-end: 0; }
            .pd-leaf.pd-desk.pd-open .pd-byline .pa-reference, .pd-leaf.pd-desk.pd-open .pd-filed-under .pa-reference { color: var(--band-ink, ${({theme:e})=>e.skyInk}); font-weight: 500; text-decoration: none; }
            .pd-leaf.pd-desk.pd-open .pd-paragraph.pd-read { grid-column: 2; margin: 0; }
            .pd-leaf.pd-desk.pd-open .pd-read .pd-word {
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
            .pd-leaf.pd-desk.pd-open .pd-read .pd-word:hover { background: var(--foot, ${({theme:e})=>e.tint}); color: var(--foot-ink, ${({theme:e})=>e.ink}); }
            .pd-leaf.pd-desk.pd-open .pd-word.pd-switch {
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
            .pd-leaf.pd-desk.pd-open .pd-word.pd-switch::after {
                content: '';
                width: calc(${({theme:e})=>e.space} * 0.375);
                height: calc(${({theme:e})=>e.space} * 0.375);
                border-inline-end: calc(${({theme:e})=>e.space} / 16) solid currentColor;
                border-block-start: calc(${({theme:e})=>e.space} / 16) solid currentColor;
                transform: translateY(calc(${({theme:e})=>e.space} / 24));
            }
            .pd-leaf.pd-desk.pd-open .pd-word.pd-switch:hover { background: var(--band, ${({theme:e})=>e.sky}); }
            .pd-leaf.pd-desk.pd-open .pd-files { display: none; }
        `}unfolded(){return h`
            .pa-unfolded .pd-shelf { display: none; }
            .pa-unfolded .pd-leaf.pd-desk.pd-open { margin-block-end: 0; }
            .pa-unfolded .pd-leaf.pd-desk.pd-open .pd-paragraph.pd-jacket { position: sticky; top: calc(${({theme:e})=>e.space} * 0.833); }
            .pa-unfolded .pd-leaf.pd-desk.pd-open .pd-words { max-height: none; max-width: 60ch; overflow: visible; }
            .pa-unfolded .pd-leaf.pd-desk.pd-open .pd-words::after { display: none; }
            .pa-unfolded .pd-leaf.pd-desk.pd-open .pd-words .pd-paragraph { font-size: calc(1.143 * ${({theme:e})=>e.size}); line-height: 1.6; }
            .pa-unfolded .pd-leaf.pd-desk.pd-open .pd-word.pd-switch { top: calc(${({theme:e})=>e.space} * 0.667); right: ${({theme:e})=>e.space}; bottom: auto; }
            .pa-unfolded .pd-leaf.pd-desk.pd-open .pd-word.pd-switch::after { transform: translateY(calc(${({theme:e})=>e.space} / 24)) rotate(180deg); }
        `}built(){return h`
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
        `}small(){return h`
            @media (max-width: ${({theme:e})=>e.narrow}) {
                .pd-leaves { padding: calc(${({theme:e})=>e.space} * 0.667); }
                .pd-logo { margin-inline-end: calc(${({theme:e})=>e.space} / 2); }
                .pd-me .pd-word.pd-mark { display: block; }
                .pd-leaf.pd-desk.pd-open { grid-template-columns: ${({theme:e})=>e.cover} minmax(0, 1fr); gap: calc(${({theme:e})=>e.space} * 0.667); padding: calc(${({theme:e})=>e.space} * 0.667); }
                .pd-leaf.pd-desk.pd-open .pd-paragraph.pd-jacket { width: ${({theme:e})=>e.cover}; height: calc(${({theme:e})=>e.cover} * 1.5); font-size: calc(0.964 * ${({theme:e})=>e.size}); }
                .pd-leaf.pd-desk.pd-open .pd-words { max-height: none; }
                .pd-leaf.pd-desk.pd-open .pd-words::after { display: none; }
                .pd-leaf.pd-desk.pd-open .pd-word.pd-switch { display: none; }
                .pd-shelf { grid-template-columns: repeat(3, minmax(0, 1fr)); gap: calc(${({theme:e})=>e.space} * 0.583) calc(${({theme:e})=>e.space} / 2); }
                .pd-volume .pd-paragraph.pd-jacket { width: auto; height: auto; aspect-ratio: 2 / 3; }
            }
        `}};r(tt,"$Bookshelf");let vs=tt;const ui=i(vs);var bi=Object.defineProperty,$i=Object.getOwnPropertyDescriptor,Ts=r((p,e,s,o)=>{for(var t=o>1?void 0:o?$i(e,s):e,n=p.length-1,d;n>=0;n--)(d=p[n])&&(t=(o?d(e,s,t):d(t))||t);return o&&t&&bi(e,s,t),t},"__decorateClass");const ot=class ot extends F{get books(){return this.text.find($).filter(e=>e.is(ce)&&e!==this.synopsis)}get placed(){return[...super.placed,...this.books]}get pages(){return[...this.books,...super.pages]}write(){return a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"pd-library",children:this.library()}),a.jsx("div",{className:"pd-me",children:this.me()}),a.jsx("div",{className:"pd-holds",children:this.holds()}),a.jsx("div",{className:"pd-head",children:this.head()}),a.jsxs("div",{className:"pd-leaves",children:[this.front(),this.leaves(),a.jsx("div",{className:"pd-shelf",children:this.volumes()})]})]})}head(){return a.jsx("div",{className:"pd-switches",children:this.switches()})}front(){const e=i(Ye);return this.painted(this.cover,a.jsxs("div",{className:this.open===void 0?"pd-leaf pd-front pd-desk pd-open":"pd-leaf pd-front pd-desk",children:[this.jacket(this.cover),this.opening(),this.reading(this.cover),a.jsx(e,{chapter:this.cover,of:$t,children:"read on"})]}))}opening(){const e=i(this.title),s=i(this.synopsis);return a.jsxs("div",{className:"pd-words",children:[this.shelved(this.cover),a.jsx(e,{}),this.line(this.cover),a.jsx(s,{})]})}leaves(){const e=this.books;return[...e.map((s,o)=>this.desk(s,o)),...this.chapters.map((s,o)=>this.leaf(s,e.length+o))]}desk(e,s){const o=i(Ye);{const t=i(e),n=this.jacketOf(e);return this.painted(n,a.jsxs("div",{className:e===this.open?"pd-leaf pd-desk pd-open":"pd-leaf pd-desk",children:[this.jacket(n),a.jsxs("div",{className:"pd-words",children:[this.shelved(n),a.jsx(t,{})]}),n===void 0?void 0:a.jsx("div",{className:"pd-line",children:this.line(n)}),this.reading(n),n===void 0?void 0:a.jsx(o,{chapter:e,of:$t,children:"read on"}),a.jsx("div",{className:"pd-files",children:this.listings(e)})]},s),s)}}volumes(){const e=i(w),s=i(x);return(this.table?.annotations.expressed(xe)?.entries??[]).map((t,n)=>{const d=U(t).identifier,z=this.named(d),O=z===void 0?this.coverOf(d):this.jacketOf(z);if(O!==void 0)return a.jsxs("div",{className:"pd-volume",children:[this.jacket(O,d),a.jsx("div",{className:"pd-paragraph pd-name",children:a.jsxs(e,{children:[a.jsx(s,{children:d}),O.title.name]})})]},n)})}jacket(e,s){if(e===void 0)return;const o=i(Mo),t=i(x);return s===void 0?a.jsx(o,{cover:e}):a.jsx(o,{cover:e,children:a.jsx(t,{children:s})})}shelved(e){if(e!==void 0)return a.jsx("div",{className:"pd-paragraph pd-shelved",children:e===this.cover?"filed under itself":"filed here"})}line(e){if(e===void 0)return;const s=i(At),o=i(Mt);return a.jsxs(a.Fragment,{children:[a.jsx(s,{cover:e}),a.jsx(o,{cover:e})]})}reading(e){if(e===void 0)return;const s=i(w),o=i(x),t=e.mention.identifier;return a.jsx("div",{className:"pd-paragraph pd-read",children:a.jsxs(s,{children:[a.jsx(o,{children:t}),e===this.cover?"This is the catalogue":`Read ${e.title.name}`," →"]})})}jacketOf(e){return e.annotations.expressed(A)?.cover??(this.appendix.includes(e)?void 0:this.cover)}coverOf(e){return super.coverOf(e)??this.books.map(s=>s.annotations.expressed(A)?.cover).find(s=>s!==void 0&&s.mention?.identifier===e)}named(e){return super.named(e)??this.books.find(s=>this.placeOf(s)===e)}placeOf(e){const s=e.title?.annotations.expressed(St)?.identifier,o=this.means?.identifier;if(!(s===void 0||o===void 0))return`${o.replace(/\/+$/u,"")}/#${s}`}};r(ot,"$Catalogue");let ws=ot;const it=class it extends eo{get identifier(){return this._book??super.identifier}$Bound(){super.$Bound(),this._book=this.chapter?.annotations.expressed(ce)?.means?.identifier}};r(it,"$BookLink");let Ae=it;Ts([xt()],Ae.prototype,"_book",2);const rt=class rt extends g{constructor(){super(...arguments),this.specification=new Me}defines(e){e.classes.add(this,"pa-caption")}erase(e){e.classes.revert(this)}};r(rt,"$Caption");let ys=rt;const nt=class nt extends g{constructor(){super(...arguments),this.specification=new Ne}defines(e){e.classes.add(this,"pa-arrow")}erase(e){e.classes.revert(this)}};r(nt,"$Arrow");let js=nt;const dt=class dt extends g{constructor(){super(...arguments),this.specification=new v}defines(e){e.classes.add(this,"pa-unfolded")}erase(e){e.classes.revert(this)}};r(dt,"$Unfolded");let zs=dt;const pt=class pt extends f{$saidOfAParagraph(e){c(e instanceof u,"a caption is said of a paragraph, and this is not one")}};r(pt,"CaptionSpecification");let Me=pt;Ts([l("a caption is said of a paragraph")],Me.prototype,"$saidOfAParagraph",1);const ct=class ct extends f{$saidOfAWord(e){c(e instanceof M&&e.chapter?.is(N)===!0,"an arrow is said of a word of a table of contents, and this is not one")}};r(ct,"ArrowSpecification");let Ne=ct;Ts([l("an arrow is said of a word of a table of contents")],Ne.prototype,"$saidOfAWord",1);const Fs=i(ws),mi=i(Ae),Ni=i(ys),_i=i(js),$t=i(zs);i(Fs,Be)(mi);i(Fs,Cs)(ui);i(Fs,Le)(Ns);const xi=r(()=>a.jsxs(vt,{children:[a.jsx(Io,{}),a.jsx(_t,{ground:"#eef5f6",band:"#c3e3e6",bandInk:"#1c565c",foot:"#8db9bd",footInk:"#153e43",ink:"#1f5a60"}),a.jsx(Ht,{x:"-46",y:"-13"}),a.jsx(wt,{children:"[Dougs Library](/dougs-library/)"}),a.jsx(yt,{children:"[Doug](/dougs-story/)"}),a.jsx(jt,{children:"[Library](/dougs-library/)"}),a.jsx(zt,{children:"[The Library](/dougs-library/)"}),a.jsxs(Ot,{children:[a.jsx(Nt,{}),a.jsx(Pt,{children:`<svg viewBox="0 0 64 64" class="pd-illustration"><path class="light" d="M9 7h46v50H9z"/><path d="M9 7h46v50H9zM9 24h46M9 41h46"/><path class="fill" d="M13 11h5v13h-5zM20 9h4v15h-4zM26 13h6v11h-6zM34 10h4v14h-4zM40 14h6v10h-6z"/><path d="M48 24l4-12 3 1-4 11z"/><path class="fill" d="M13 28h4v13h-4zM19 30h7v11h-7zM28 27h4v14h-4zM34 31h5v10h-5zM41 28h6v13h-6zM49 29h3v12h-3z"/><path class="fill" d="M13 46h6v11h-6zM21 44h4v13h-4zM27 47h8v10h-8zM37 45h4v12h-4zM43 48h6v9h-6z"/><path d="M50 57l3-11 3 1-3 10z"/></svg>
`})]})]}),"Cover$2"),lt=class lt extends ee{constructor(){super(...arguments),this.style=b.header`
        justify-self: end;
        .pd-chapter.pa-cover { margin-block: 0; }
    `}};r(lt,"$StoryCover");let Os=lt;const ht=class ht extends N{constructor(){super(...arguments),this.style=b.nav`
        .pd-chapter.pa-table-of-contents { margin-block: 0; }
    `}};r(ht,"$StoryTableOfContents");let Ps=ht;const ki=i(Os),Hi=i(Ps),Ti=r(()=>a.jsxs(vt,{children:[a.jsx(ki,{}),a.jsx(so,{}),a.jsx(Ao,{children:xi()}),a.jsx(_t,{ground:"#f5eedf",band:"#d9c3a3",bandInk:"#4a3626",foot:"#a3b6cc",footInk:"#2a4262",ink:"#2f4a6a"}),a.jsx(Ht,{x:"-54",y:"-33"}),a.jsx(wt,{children:"[Dougs Story](/dougs-story/)"}),a.jsx(yt,{children:"[Doug](/dougs-story/)"}),a.jsx(jt,{children:"[Library](/dougs-library/)"}),a.jsx(zt,{children:"[The Librarian](/dougs-story/)"}),a.jsxs(Ot,{children:[a.jsx(Nt,{}),a.jsx(Pt,{children:`<svg viewBox="0 0 64 64" class="pd-illustration"><path class="light" d="M8 13h23v38H8zM33 13h23v38H33z"/><path d="M8 13h23v38H8zM33 13h23v38H33z"/><path d="M13 21h13M13 27h13M13 33h9M38 21h13M38 27h13M38 33h13M38 39h8"/><path class="fill" d="M15 55 45 25l4 4-30 30-6 2z"/><path d="M15 55 45 25l4 4-30 30-6 2zM43 27l4 4M17 53l2 2"/></svg>
`})]})]}),"Cover");export{ws as $,_i as A,Pi as B,Ti as C,Rt as D,Mi as F,zi as I,ji as K,Ns as L,Di as M,v as O,_t as S,ao as T,Ao as V,Ht as W,Oi as a,Ni as b,xi as c,S as d,F as e,Le as f,ee as g,Nt as h,de as i,Ko as j,os as k,Hi as l,Ci as m,us as n,Ai as o,yi as p,Ii as q};
