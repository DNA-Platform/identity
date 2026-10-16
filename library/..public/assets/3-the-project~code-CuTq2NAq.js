var X=Object.defineProperty;var a=(i,e)=>X(i,"name",{value:e,configurable:!0});import{$ as t,o as x,p as B,q as u,j as o,r as G,s as E,t as H,u as I,v as _,w as r,x as Y,y as q,z as Z,R as J,F as V,W as ee,G as oe}from"./index-BypI-zHx.js";import{v as pe,w as se,x as ae,y as te,z as de}from"./.cover-CDm_V1nQ.js";const C=class C extends x{$Define(){super.$Define(),this.classes.add(this,"pd-action")}};a(C,"$Action");let k=C;const N=class N extends x{$Define(){super.$Define(),this.classes.add(this,"pd-result")}};a(N,"$Result");let y=N;const $e=t(k);t(y);var ne=Object.defineProperty,ie=Object.getOwnPropertyDescriptor,re=a((i,e,p,d)=>{for(var s=ie(e,p),n=i.length-1,c;n>=0;n--)(c=i[n])&&(s=c(e,p,s)||s);return s&&ne(e,p,s),s},"__decorateClass$1");const ce='<svg viewBox="0 0 24 24"><path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4M9 12h6M9 16h6"/></svg>',le='<svg viewBox="0 0 24 24"><path d="M8 7l-5 5 5 5M16 7l5 5-5 5M13 5l-2 14"/></svg>',l=a(i=>{const e=i.book;return e!==void 0&&"$shown"in e?e:void 0},"showingBook"),D=class D extends G{constructor(){super(...arguments),this.specification=new f}defines(e){e.classes.add(this,"pa-version")}erase(e){e.classes.revert(this)}};a(D,"$Version");let w=D;const O=class O extends E{$saidOfAChapter(e){H(e instanceof I,"a version is said of a chapter, and this is not one")}};a(O,"VersionSpecification");let f=O;re([_("a version is said of a chapter")],f.prototype,"$saidOfAChapter");const L=class L extends B{constructor(){super(...arguments),this.$place=void 0}get version(){return this.$place===void 0?void 0:this.book.chapterAt(this.$place)}get versionName(){return this.version?.title?.name??""}get name(){return this.versionName.replace(/ v\d+(?:-\d+)?$/u,"")||this.$identifier}get number(){return/ v(\d+)(?:-\d+)?$/u.exec(this.versionName)?.[1]??"1"}get kind(){const e=this.$type.replace(/^\./u,"");return e==="md"||e==="txt"||e===""?"document":e==="html"?"page":"code"}get shown(){return l(this)?.$shown===this}$Artifact(...e){this.$Code(...e),this.containers.replace(this,"pre","figure")}write(){const e=[...this.text].map((d,s)=>{const n=t(d);return o.jsx(n,{},s)}),p={__html:this.kind==="document"?ce:le};return o.jsxs(o.Fragment,{children:[o.jsxs("button",{type:"button",className:"pd-card","aria-pressed":this.shown,onClick:a(()=>this.press(),"onClick"),children:[o.jsx("span",{className:"pd-card-mark",dangerouslySetInnerHTML:p}),o.jsxs("span",{className:"pd-card-words",children:[o.jsx("b",{children:this.name}),o.jsx("small",{children:`Click to open ${this.kind} · v${this.number}`})]})]}),o.jsx("figcaption",{children:e})]})}press(){const e=l(this);e!==void 0&&(e.$shown=e.$shown===this?void 0:this)}$Define(){super.$Define(),this.classes.add(this,"pd-artifact"),this.shown&&this.classes.add(this,"pa-open")}};a(L,"$Artifact");let h=L;const M=class M extends B{get sentence(){return u.copy(this.text)}get fileName(){return/“([^”]+)”/u.exec(this.sentence)?.[1]??"a file"}get extension(){return(this.fileName.split(".").pop()??"file").toUpperCase().slice(0,4)}get lineCount(){return this.names?this.contents.split(`
`).length:0}get shown(){return l(this)?.$shown===this}$Attachment(...e){this.$Code(...e),this.containers.replace(this,"pre","figure")}write(){const e=[...this.text].map((p,d)=>{const s=t(p);return o.jsx(s,{},d)});return o.jsxs(o.Fragment,{children:[o.jsxs("button",{type:"button",className:"pd-chip","aria-pressed":this.shown,onClick:a(()=>this.press(),"onClick"),children:[o.jsx("span",{className:"pd-chip-mark",children:this.extension}),o.jsxs("span",{className:"pd-chip-words",children:[o.jsx("b",{children:this.fileName}),o.jsx("small",{children:this.names?`${this.lineCount} lines`:"not carried by the export"})]})]}),o.jsx("figcaption",{children:e})]})}press(){const e=l(this);e!==void 0&&(e.$shown=e.$shown===this?void 0:this)}$Define(){super.$Define(),this.classes.add(this,"pd-attachment"),this.shown&&this.classes.add(this,"pa-open")}};a(M,"$Attachment");let b=M;const ve=t(w),je=t(h),ze=t(b),T=class T extends pe{constructor(){super(...arguments),this.sans="'Inter', system-ui, sans-serif",this.mono="ui-monospace, 'Cascadia Code', Consolas, monospace",this.keyword="#1f5fbf",this.string="#9a3b1e",this.type="#116b4a",this.comment="#7a8491"}parts(){return[...super.parts(),this.surfaces(),this.top(),this.days(),this.cameTo(),this.exchanges(),this.said(),this.cards(),this.paneColumn(),this.phone()]}surfaces(){return r`
            .pd-book .pd-library { background: linear-gradient(180deg, #ffffff 0%, #ffffff 84%, #fbfcfe 100%); }
            .pd-book .pd-me { background: linear-gradient(180deg, #ffffff 0%, #ffffff 84%, #fbfcfe 100%); }
            .pd-book .pd-holds { background: linear-gradient(90deg, #ffffff 0%, #ffffff 88%, #fbfcfe 100%); }
            .pd-book .pd-head { background: #ffffff; box-shadow: 0 8px 22px rgba(43, 54, 60, .025); }
            .pd-book .pd-pages { background: #ffffff; }
        `}top(){return r`
            .pd-book .pd-head .pd-switches, .pd-book .pd-head .pa-illustration { display: none; }
            .pd-book .pd-head .pd-title { font-family: ${({theme:e})=>e.serif}; font-size: 30px; font-weight: 600; line-height: 1.1; letter-spacing: -.01em; }
            .pd-book .pd-head .pd-participants { display: flex; gap: 6px; align-items: center; margin: 6px 0 0; font-family: ${({theme:e})=>e.sans}; font-size: 13px; color: ${({theme:e})=>e.soft}; }
            .pd-book .pd-head .pd-participants::before { content: 'between'; }
            .pd-book .pd-head .pd-participants .pa-reference { color: ${({theme:e})=>e.ink}; font-weight: 500; text-decoration: none; }
            .pd-book .pd-head .pd-participants .pa-reference:hover { color: ${({theme:e})=>e.accent}; }
            .pd-book .pd-head .pd-tally { display: flex; flex-wrap: wrap; gap: 4px 16px; margin: 6px 0 0; font-family: ${({theme:e})=>e.sans}; font-size: 12.5px; color: ${({theme:e})=>e.soft}; }
            .pd-book .pd-head .pd-tally b { color: ${({theme:e})=>e.ink}; font-weight: 500; }
        `}days(){return r`
            .pd-book .pd-holds .pd-chapter { display: flex; flex-direction: column; }
            .pd-book .pd-holds .pd-section.pa-appendix { display: none; }
            .pd-book .pd-holds .pd-section > .pd-heading { margin: 0 0 4px 18px; font-family: ${({theme:e})=>e.sans}; font-size: 10.5px; font-weight: 600; line-height: 1.4; letter-spacing: .12em; text-transform: uppercase; color: ${({theme:e})=>e.faint}; }
            .pd-book .pd-holds .pd-paragraph.pa-entry { display: flex; align-items: center; gap: 9px; padding: 6px 18px 6px 16px; font-family: ${({theme:e})=>e.sans}; font-size: 13px; color: ${({theme:e})=>e.ink}; }
            .pd-book .pd-holds .pd-paragraph.pa-entry::before { content: ''; flex: none; width: 7px; height: 7px; border-radius: 50%; background: ${({theme:e})=>e.sea}; }
            .pd-book .pd-holds .pd-paragraph.pa-entry .pd-day-count { margin-inline-start: auto; font-size: 11px; color: ${({theme:e})=>e.faint}; }
            .pd-book .pd-holds .pd-paragraph.pa-entry:hover { background: #f8fafc; }
            .pd-book .pd-holds .pd-paragraph.pa-entry.pa-open { background: linear-gradient(90deg, #eff4fa, #f8fafd); color: ${({theme:e})=>e.heading}; font-weight: 500; }
            .pd-book .pd-holds .pd-came-to-row { order: -1; display: flex; align-items: center; gap: 9px; margin: 0 0 10px; padding: 6px 18px 6px 16px; font-family: ${({theme:e})=>e.sans}; font-size: 13px; font-style: italic; color: ${({theme:e})=>e.soft}; }
            .pd-book .pd-holds .pd-came-to-row::before { content: ''; width: 7px; height: 7px; border-radius: 50%; background: ${({theme:e})=>e.faint}; }
            .pd-book .pd-holds .pd-came-to-row .pa-reference { color: inherit; text-decoration: none; }
        `}cameTo(){return r`
            .pd-book .pd-pages .pd-came-to { width: min(760px, 100%); margin: 0 auto 26px; padding: 14px 18px; border-radius: 12px; background: #fbfcfd; }
            .pd-book .pd-pages .pd-came-to::before { content: 'What it came to'; display: block; margin-block-end: 4px; font-family: ${({theme:e})=>e.sans}; font-size: 10.5px; font-weight: 600; line-height: 1.4; letter-spacing: .12em; text-transform: uppercase; color: ${({theme:e})=>e.faint}; }
            .pd-book .pd-pages .pd-came-to .pd-chapter { display: block; }
            .pd-book .pd-pages .pd-came-to .pd-chapter > .pd-title, .pd-book .pd-pages .pd-came-to .pd-chapter > a.pa-self-reference, .pd-book .pd-pages .pd-came-to .pd-turn { display: none; }
            .pd-book .pd-pages .pd-came-to .pd-paragraph { margin: 0; font-family: ${({theme:e})=>e.sans}; font-size: 14px; line-height: 1.6; color: ${({theme:e})=>e.soft}; }
            .pd-book .pd-pages .pa-page { width: min(760px, 100%); margin: 0 auto; }
            .pd-book .pd-pages .pa-page > .pd-title, .pd-book .pd-pages .pa-page > a.pa-self-reference .pd-title { margin: 0 0 22px; font-family: ${({theme:e})=>e.sans}; font-size: 11.5px; font-weight: 600; line-height: 1.4; letter-spacing: .14em; text-transform: uppercase; color: ${({theme:e})=>e.faint}; }
            .pd-book .pd-pages .pd-turn, .pd-book .pd-pages .pa-page > .pd-word.pd-date { display: none; }
        `}exchanges(){return r`
            .pd-book .pd-pages .pd-message { position: relative; display: block; margin: 0 0 28px; }
            .pd-book .pd-pages .pd-message > .pa-self-reference, .pd-book .pd-pages .pd-message .pd-heading.pd-speaker { display: none; }
            .pd-book .pd-pages .pd-message > .pd-word.pd-time { position: absolute; top: -17px; left: 0; display: block; width: auto; margin: 0; font-family: ${({theme:e})=>e.sans}; font-size: 11px; font-weight: 500; line-height: 1; color: ${({theme:e})=>e.faint}; opacity: 0; transition: opacity .15s; }
            .pd-book .pd-pages .pd-message > .pd-word.pd-time::before { content: none; }
            .pd-book .pd-pages .pd-message.pa-mine > .pd-word.pd-time { left: auto; right: 0; }
            .pd-book .pd-pages .pd-message:hover > .pd-word.pd-time { opacity: 1; }
            .pd-book .pd-pages .pd-message > .pd-said { display: flex; flex-direction: column; gap: 10px; min-width: 0; overflow-wrap: anywhere; }
            .pd-book .pd-pages .pd-message.pa-mine > .pd-said { margin-inline-start: auto; width: fit-content; max-width: 78%; padding: 12px 16px; border-radius: 18px; background: rgba(11, 11, 11, .05); gap: 8px; }
        `}said(){return r`
            .pd-book .pd-pages .pd-message .pd-said .pd-paragraph { margin: 0; font-family: ${({theme:e})=>e.serif}; font-size: 16.5px; line-height: 1.6; color: ${({theme:e})=>e.ink}; }
            .pd-book .pd-pages .pd-message.pa-mine .pd-said .pd-paragraph { font-family: ${({theme:e})=>e.sans}; font-size: 15px; line-height: 1.5; }
            .pd-book .pd-pages .pd-message .pd-said .pd-heading { margin: 8px 0 0; padding: 0; border: 0; font-family: ${({theme:e})=>e.serif}; font-size: 17px; font-weight: 600; line-height: 1.3; color: ${({theme:e})=>e.heading}; }
            .pd-book .pd-pages .pd-message .pa-emphasis { font-style: italic; }
            .pd-book .pd-pages .pd-message .pa-bold { font-weight: 600; }
            .pd-book .pd-pages .pd-message .pa-list { padding-inline-start: 1.3em; }
            .pd-book .pd-pages .pd-message .pa-list .pa-item { display: list-item; list-style: disc outside; }
            .pd-book .pd-pages .pd-message .pa-list.pa-ordered .pa-item { list-style: decimal outside; }
            .pd-book .pd-pages .pd-message .pa-list .pa-item + .pa-item { margin-block-start: 4px; }
            .pd-book .pd-pages .pd-message .pa-list .pa-list { margin: 4px 0 0; }
            .pd-book .pd-pages .pd-message .pa-verbatim { font-family: ${({theme:e})=>e.mono}; font-size: 13.5px; padding: 1px 4px; border-radius: 5px; background: rgba(11, 11, 11, .05); color: #8e2626; }
            .pd-book .pd-pages .pd-message .pd-word.pa-reference { color: ${({theme:e})=>e.accent}; text-decoration: underline; text-decoration-color: color-mix(in srgb, ${({theme:e})=>e.accent} 35%, transparent); text-underline-offset: 3px; }
            .pd-book .pd-pages .pd-message .pa-quoted { padding-inline-start: 12px; border-inline-start: 3px solid ${({theme:e})=>e.line}; color: ${({theme:e})=>e.soft}; }
            .pd-book .pd-pages .pd-message .pd-paragraph.pa-table { display: table; width: 100%; border-collapse: collapse; font-family: ${({theme:e})=>e.sans}; font-size: 14px; line-height: 1.5; }
            .pd-book .pd-pages .pd-message .pa-table .pa-row { display: table-row; }
            .pd-book .pd-pages .pd-message .pa-table .pa-col { display: table-cell; padding: 7px 12px; border-block-end: 1px solid ${({theme:e})=>e.line}; vertical-align: top; }
            .pd-book .pd-pages .pd-message .pa-table .pa-row-start-1 .pa-col { font-weight: 600; color: ${({theme:e})=>e.heading}; border-block-end: 2px solid ${({theme:e})=>e.line}; }
            .pd-book .pd-pages .pd-message .pd-equation { display: block; margin: 4px 0; max-width: 100%; overflow-x: auto; }
            .pd-book .pd-pages .pd-message .katex-display { margin: 0; }
            .pd-book .pd-pages .pd-message .katex { font-size: 1.05em; }
        `}cards(){return r`
            .pd-book .pd-pages .pd-message .pd-action { display: flex; align-items: center; gap: 8px; width: fit-content; max-width: 100%; margin: 0; padding: 7px 12px; border: 1px solid ${({theme:e})=>e.line}; border-radius: 10px; font-family: ${({theme:e})=>e.sans}; font-size: 13px; line-height: 1.4; color: ${({theme:e})=>e.soft}; }
            .pd-book .pd-pages .pd-message .pd-action::before { content: '⌕'; flex: none; font-size: 15px; color: ${({theme:e})=>e.accent}; }
            .pd-book .pd-pages .pd-message .pd-artifact, .pd-book .pd-pages .pd-message .pd-attachment { margin: 0; padding: 0; border: 0; background: none; }
            .pd-book .pd-pages .pd-message .pd-artifact > figcaption, .pd-book .pd-pages .pd-message .pd-attachment > figcaption { display: none; }
            .pd-book .pd-pages .pd-message .pd-said > .pd-attachment { order: -1; }
            .pd-book .pd-pages .pd-message .pd-card { display: flex; align-items: center; gap: 12px; width: 100%; max-width: 100%; margin: 0; padding: 12px 14px; border: 1px solid ${({theme:e})=>e.line}; border-radius: 12px; background: #ffffff; text-align: start; font-family: ${({theme:e})=>e.sans}; font-size: 13px; line-height: 1.4; color: ${({theme:e})=>e.ink}; cursor: pointer; transition: border-color .15s, background .15s; }
            .pd-book .pd-pages .pd-message .pd-card:hover { border-color: #c9d1de; background: #fcfcfd; }
            .pd-book .pd-pages .pd-message .pd-card .pd-card-mark { display: grid; place-items: center; flex: none; width: 38px; height: 38px; border: 1px solid ${({theme:e})=>e.line}; border-radius: 9px; background: #fbfcfd; color: ${({theme:e})=>e.soft}; }
            .pd-book .pd-pages .pd-message .pd-card .pd-card-mark svg { width: 18px; height: 18px; stroke: currentColor; fill: none; stroke-width: 1.8; stroke-linecap: round; stroke-linejoin: round; }
            .pd-book .pd-pages .pd-message .pd-card b { display: block; font-size: 14px; font-weight: 500; color: ${({theme:e})=>e.heading}; }
            .pd-book .pd-pages .pd-message .pd-card small { color: ${({theme:e})=>e.soft}; }
            .pd-book .pd-pages .pd-message .pd-card[aria-pressed='true'] { border-color: ${({theme:e})=>e.accent}; background: #f3f8fa; }
            .pd-book .pd-pages .pd-message .pd-card[aria-pressed='true'] .pd-card-mark { color: ${({theme:e})=>e.accent}; }
            .pd-book .pd-pages .pd-message .pd-chip { display: flex; align-items: center; gap: 8px; width: fit-content; margin: 0; padding: 6px 10px 6px 8px; border: 1px solid rgba(11, 11, 11, .1); border-radius: 10px; background: #ffffff; text-align: start; font-family: ${({theme:e})=>e.sans}; font-size: 12px; line-height: 1.3; color: ${({theme:e})=>e.ink}; cursor: pointer; }
            .pd-book .pd-pages .pd-message .pd-chip:hover, .pd-book .pd-pages .pd-message .pd-chip[aria-pressed='true'] { border-color: ${({theme:e})=>e.accent}; }
            .pd-book .pd-pages .pd-message .pd-chip .pd-chip-mark { display: grid; place-items: center; flex: none; width: 26px; height: 26px; border-radius: 6px; background: #fbfcfd; font-size: 8.5px; font-weight: 600; line-height: 1; letter-spacing: .04em; color: ${({theme:e})=>e.soft}; }
            .pd-book .pd-pages .pd-message .pd-chip b { display: block; font-weight: 500; }
            .pd-book .pd-pages .pd-message .pd-chip small { font-size: 11px; color: ${({theme:e})=>e.soft}; }
        `}paneColumn(){return r`
            .pd-book.pa-layout:has(> .pd-pane.pa-open) {
                grid-template-columns: ${({theme:e})=>e.holdsColumn} minmax(0, 1fr) minmax(0, 1fr);
                grid-template-areas: 'library library library' 'holds head pane' 'holds pages pane';
            }
        `}phone(){return r`
            @media (max-width: ${({theme:e})=>e.narrow}) {
                .pd-book .pd-pages .pd-message.pa-mine > .pd-said { max-width: 92%; }
                .pd-book .pd-head .pd-title { font-size: 24px; }
                .pd-book.pa-layout:has(> .pd-pane.pa-open) { grid-template-columns: minmax(0, 1fr); grid-template-areas: 'library' 'head' 'pages'; }
            }
        `}};a(T,"$ApplicationForm");let $=T;const he=t($),P=class P extends x{constructor(){super(...arguments),this.style=Y.div`
        .pd-book &.pd-paragraph {
            grid-area: pane;
            display: none;
            flex-direction: column;
            min-width: 0;
            margin: 12px 12px 12px 0;
            border: 1px solid ${({theme:e})=>e.line};
            border-radius: 14px;
            background: ${({theme:e})=>e.paper};
            box-shadow: 0 1px 2px rgba(43, 54, 60, .04), 0 12px 32px rgba(43, 54, 60, .07);
            overflow: hidden;
        }
        .pd-book &.pd-paragraph.pa-open { display: flex; }
        .pd-book & .pd-pane-bar { display: flex; align-items: center; gap: 10px; padding: 10px 10px 10px 18px; border-block-end: 1px solid ${({theme:e})=>e.line}; }
        .pd-book & .pd-pane-title { flex: 1; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-family: ${({theme:e})=>e.sans}; font-size: 14px; font-weight: 500; line-height: 1.4; color: ${({theme:e})=>e.ink}; }
        .pd-book & .pd-pane-kind { font-family: ${({theme:e})=>e.sans}; font-size: 12px; line-height: 1.4; color: ${({theme:e})=>e.soft}; }
        .pd-book & button { border: 0; background: none; padding: 2px 8px; border-radius: 6px; font-family: ${({theme:e})=>e.sans}; font-size: 11.5px; font-weight: 500; line-height: 1.4; color: ${({theme:e})=>e.soft}; cursor: pointer; }
        .pd-book & button:hover { background: rgba(11, 11, 11, .05); color: ${({theme:e})=>e.ink}; }
        .pd-book & button:disabled { opacity: .35; cursor: default; }
        .pd-book & .pd-pane-close { font-size: 18px; padding: 0 8px; }
        .pd-book & .pd-pane-body { flex: 1; min-height: 0; overflow: auto; }
        .pd-book & .pd-pane-body > pre { margin: 0; padding: 18px 22px; font-family: ${({theme:e})=>e.mono}; font-size: 13.5px; line-height: 1.65; color: #14181f; white-space: pre-wrap; overflow-wrap: anywhere; }
        .pd-book & .pd-pane-body .pd-chapter { display: block; padding: 24px 36px 60px; }
        .pd-book & .pd-pane-body .pd-chapter > .pd-title, .pd-book & .pd-pane-body .pd-chapter > a.pa-self-reference { display: none; }
        .pd-book & .pd-pane-body .pd-chapter .pd-code-box { margin: 0; border: 0; border-radius: 0; background: transparent; }
        .pd-book & .pd-pane-foot { display: flex; align-items: center; gap: 6px; padding: 8px 10px 8px 18px; border-block-start: 1px solid ${({theme:e})=>e.line}; font-family: ${({theme:e})=>e.sans}; font-size: 12px; font-weight: 500; line-height: 1.4; color: ${({theme:e})=>e.soft}; }
        .pd-book & .pd-pane-version { display: flex; align-items: center; gap: 4px; }
        .pd-book & .pd-pane-version button { padding: 0 6px; font-size: 13px; }
        .pd-book & .pd-pane-download { margin-inline-start: auto; }
        @media (max-width: ${({theme:e})=>e.narrow}) {
            .pd-book &.pd-paragraph.pa-open { position: fixed; inset: 52px 0 0 0; margin: 0; border-radius: 0; z-index: 2; }
        }
    `}get shown(){return l(this)?.$shown}get artifacts(){return this.book?.messages.flatMap(e=>e.text.find(h))??[]}$Pane(...e){this.$Writing(...e),this.containers.replace(this,"span",this.style)}neighbour(e,p){const d=Number(e.number)+p;return this.artifacts.find(s=>s.name===e.name&&Number(s.number)===d)}write(){const e=this.shown;if(e===void 0)return;const p=e instanceof h?e:void 0,d=e instanceof b?e:void 0,s=p?.version,n=s===void 0?void 0:t(s),c=p===void 0?void 0:this.neighbour(p,-1),U=p===void 0?void 0:this.neighbour(p,1),Q=d===void 0?"":d.names?d.contents:"The export does not carry this upload; the name is all it kept.";return o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"pd-pane-bar",children:[o.jsx("span",{className:"pd-pane-title",children:p?.name??d?.fileName}),o.jsx("span",{className:"pd-pane-kind",children:p?.kind??d?.extension.toLowerCase()}),o.jsx("button",{type:"button",className:"pd-pane-copy",onClick:a(S=>this.copy(S),"onClick"),children:"Copy"}),o.jsx("button",{type:"button",className:"pd-pane-close","aria-label":"close",onClick:a(()=>this.close(),"onClick"),children:"×"})]}),o.jsx("div",{className:"pd-pane-body",children:n===void 0?o.jsx("pre",{children:Q}):o.jsx(n,{})}),p===void 0?void 0:o.jsxs("div",{className:"pd-pane-foot",children:[o.jsxs("span",{className:"pd-pane-version",children:[o.jsx("button",{type:"button",disabled:c===void 0,onClick:a(()=>this.show(c),"onClick"),children:"‹"}),o.jsx("span",{children:`v${p.number}`}),o.jsx("button",{type:"button",disabled:U===void 0,onClick:a(()=>this.show(U),"onClick"),children:"›"})]}),o.jsx("button",{type:"button",className:"pd-pane-download",onClick:a(()=>this.download(p),"onClick"),children:"Download"})]})]})}show(e){const p=l(this);p!==void 0&&e!==void 0&&(p.$shown=e)}close(){const e=l(this);e!==void 0&&(e.$shown=void 0)}copy(e){const p=e.currentTarget.closest(".pd-pane")?.querySelector(".pd-pane-body");navigator.clipboard?.writeText(p?.textContent??"")}download(e){const p=e.$type.replace(/^\./u,"")||"md",d=new Blob([e.contents],{type:"text/plain"}),s=document.createElement("a");s.href=URL.createObjectURL(d),s.download=`${e.name} v${e.number}.${p}`,s.click(),URL.revokeObjectURL(s.href)}$Define(){super.$Define(),this.classes.add(this,"pd-pane"),this.shown!==void 0&&this.classes.add(this,"pa-open")}};a(P,"$Pane");let v=P;const ge=t(v);var fe=Object.defineProperty,be=Object.getOwnPropertyDescriptor,me=a((i,e,p,d)=>{for(var s=be(e,p),n=i.length-1,c;n>=0;n--)(c=i[n])&&(s=c(e,p,s)||s);return s&&fe(e,p,s),s},"__decorateClass");const R=class R extends G{constructor(){super(...arguments),this.specification=new m}get name(){return q.reference(u.copy(this.text))?.name??""}get means(){return this.annotations.expressed(Z)}$Define(){super.$Define();const e=q.reference(u.copy(this.text));if(e===void 0)return;const p=t(J);this.annotations.add(this,o.jsx(p,{children:e.identifier}))}write(){return this.name}};a(R,"$Project");let g=R;const W=class W extends E{$saidOfACover(e){H(e instanceof I&&e.is(V),"a project is said of a cover, and this is not one")}};a(W,"ProjectSpecification");let m=W;me([_("a project is said of a cover")],m.prototype,"$saidOfACover");const A=class A extends x{get cover(){return this.$cover??this.book?.cover}get project(){return this.cover?.annotations.expressed(g)}write(){const e=this.project,p=t(ee),d=t(ae),s=t(J);return o.jsxs(o.Fragment,{children:[o.jsxs(p,{children:[o.jsx(d,{}),"project"]}),o.jsxs(p,{children:[o.jsx(s,{children:e.means.identifier}),e.name]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-project-line")}};a(A,"$ProjectLine");let j=A;const Ce=t(g),xe=t(j),ue=xe,F=class F extends se{constructor(){super(...arguments),this.$shown=void 0}get project(){return this.cover?.annotations.expressed(g)}write(){const e=t(ge);return o.jsxs(o.Fragment,{children:[super.write(),o.jsx(e,{chapter:this.cover})]})}me(){const e=t(ue);return o.jsxs(o.Fragment,{children:[super.me(),this.project===void 0?void 0:o.jsx(e,{cover:this.cover})]})}};a(F,"$ClaudeConversation");let z=F;const K=t(z);t(K,oe)(he);t(K,te)(de);export{z as $,$e as A,Ce as P,ve as V,ze as a,je as b};
