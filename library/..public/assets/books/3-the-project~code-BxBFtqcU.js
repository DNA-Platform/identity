var he=Object.defineProperty;var a=(r,e)=>he(r,"name",{value:e,configurable:!0});import{$ as p,$check as D,selection as fe}from"@dna-platform/chemistry";import{$Paragraph as x,specify as O,$Annotation as N,$Code as pe,identifier as ge,html as g,AnnotationSpecification as j,$Chapter as P,binder as k,$Reference as ne,Reference as M,Word as de,$Cover as H,Theme as be}from"@dna-platform/public";import{jsx as t,jsxs as i,Fragment as f}from"react/jsx-runtime";import{r as me,L as ie,s as ue,T as xe,t as ke,u as ve}from"./.cover-BMJN-_37.js";import{css as l}from"styled-components";const q=class q extends x{$Define(){super.$Define(),this.classes.add(this,"pd-action")}};a(q,"$Action");let L=q;const G=class G extends x{$Define(){super.$Define(),this.classes.add(this,"pd-result")}};a(G,"$Result");let _=G;const Je=p(L);p(_);var ye=Object.defineProperty,we=Object.getOwnPropertyDescriptor,$e=a((r,e,o,n)=>{for(var s=we(e,o),d=r.length-1,c;d>=0;d--)(c=r[d])&&(s=c(e,o,s)||s);return s&&ye(e,o,s),s},"__decorateClass$3");const Ce='<svg viewBox="0 0 24 24"><path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4M9 12h6M9 16h6"/></svg>',ze='<svg viewBox="0 0 24 24"><path d="M8 7l-5 5 5 5M16 7l5 5-5 5M13 5l-2 14"/></svg>',h=a(r=>{const e=r.book;return e!==void 0&&"$shown"in e?e:void 0},"showingBook"),I=class I extends N{constructor(){super(...arguments),this.specification=new v}defines(e){e.classes.add(this,"pa-version")}erase(e){e.classes.revert(this)}};a(I,"$Version");let A=I;const E=class E extends j{$saidOfAChapter(e){D(e instanceof P,"a version is said of a chapter, and this is not one")}};a(E,"VersionSpecification");let v=E;$e([O("a version is said of a chapter")],v.prototype,"$saidOfAChapter");const F=class F extends pe{constructor(){super(...arguments),this.$artifact=void 0,this.$place=void 0}get version(){const e=this.$place;if(e!==void 0)return this.book.chapters.find(o=>ge.slug(o.title?.name??"")===e)}get versionName(){return this.version?.title?.name??""}get name(){return this.versionName.replace(/ v\d+(?:-\d+)?$/u,"")||this.$identifier}get number(){return/ v(\d+)(?:-\d+)?$/u.exec(this.versionName)?.[1]??"1"}get kind(){const e=this.$type.replace(/^\./u,"");return e==="md"||e==="txt"||e===""?"document":e==="html"?"page":"code"}get shown(){return h(this)?.$shown===this}$Artifact(...e){this.$Code(...e),this.containers.replace(this,"pre","figure")}write(){const e=[...this.text].map((n,s)=>{const d=p(n);return t(d,{},s)}),o={__html:this.kind==="document"?Ce:ze};return i(f,{children:[i("button",{type:"button",className:"pd-card","aria-pressed":this.shown,onClick:a(()=>this.press(),"onClick"),children:[t("span",{className:"pd-card-mark",dangerouslySetInnerHTML:o}),i("span",{className:"pd-card-words",children:[t("b",{children:this.name}),t("small",{children:`Click to open ${this.kind} · v${this.number}`})]})]}),t("figcaption",{children:e})]})}press(){const e=h(this);e!==void 0&&(e.$shown=e.$shown===this?void 0:this)}$Define(){super.$Define(),this.classes.add(this,"pd-artifact"),this.shown&&this.classes.add(this,"pa-open")}};a(F,"$Artifact");let b=F;const J=class J extends pe{get sentence(){return g.copy(this.text)}get fileName(){return/“([^”]+)”/u.exec(this.sentence)?.[1]??"a file"}get extension(){return(this.fileName.split(".").pop()??"file").toUpperCase().slice(0,4)}get lineCount(){return this.names?this.contents.split(`
`).length:0}get shown(){return h(this)?.$shown===this}$Attachment(...e){this.$Code(...e),this.containers.replace(this,"pre","figure")}write(){const e=[...this.text].map((o,n)=>{const s=p(o);return t(s,{},n)});return i(f,{children:[i("button",{type:"button",className:"pd-chip","aria-pressed":this.shown,onClick:a(()=>this.press(),"onClick"),children:[t("span",{className:"pd-chip-mark",children:this.extension}),i("span",{className:"pd-chip-words",children:[t("b",{children:this.fileName}),t("small",{children:this.names?`${this.lineCount} lines`:"not carried by the export"})]})]}),t("figcaption",{children:e})]})}press(){const e=h(this);e!==void 0&&(e.$shown=e.$shown===this?void 0:this)}$Define(){super.$Define(),this.classes.add(this,"pd-attachment"),this.shown&&this.classes.add(this,"pa-open")}};a(J,"$Attachment");let y=J;const Ke=p(A),Qe=p(b),Xe=p(y),K=class K extends me{constructor(){super(...arguments),this.sans="'Inter', system-ui, sans-serif",this.mono="ui-monospace, 'Cascadia Code', Consolas, monospace",this.keyword="#1f5fbf",this.string="#9a3b1e",this.type="#116b4a",this.comment="#7a8491"}parts(){return[...super.parts(),this.surfaces(),this.top(),this.rows(),this.openDay(),this.exchanges(),this.said(),this.cards(),this.paneColumn(),this.phone()]}surfaces(){return l`
            .pd-book .pd-library { background: linear-gradient(180deg, #ffffff 0%, #ffffff 84%, #fbfcfe 100%); }
            .pd-book .pd-me { background: linear-gradient(180deg, #ffffff 0%, #ffffff 84%, #fbfcfe 100%); }
            .pd-book .pd-holds { background: linear-gradient(90deg, #ffffff 0%, #ffffff 88%, #fbfcfe 100%); }
            .pd-book .pd-head { background: #ffffff; box-shadow: none; }
            .pd-book.pa-layout .pd-library::after { content: none; }
            .pd-book .pd-pages { background: #ffffff; }
            @media (min-width: ${({theme:e})=>e.narrow}) {
                .pd-book.pa-layout { height: 100vh; overflow-y: auto; grid-template-rows: auto auto auto; }
                .pd-book.pa-layout .pd-pages { overflow: visible; }
                .pd-book.pa-layout .pd-library, .pd-book.pa-layout .pd-me { position: sticky; top: 0; z-index: 3; }
                .pd-book.pa-layout .pd-holds { position: sticky; top: ${({theme:e})=>e.barHeight}; align-self: start; max-height: calc(100vh - ${({theme:e})=>e.barHeight}); }
            }
        `}top(){return l`
            .pd-book .pd-head .pd-switches, .pd-book .pd-head .pa-illustration { display: none; }
            .pd-book .pd-head .pd-title { font-family: ${({theme:e})=>e.serif}; font-size: 30px; font-weight: 600; line-height: 1.1; letter-spacing: -.01em; }
            .pd-book .pd-head .pd-participants { display: flex; gap: 6px; align-items: center; margin: 6px 0 0; font-family: ${({theme:e})=>e.sans}; font-size: 13px; color: ${({theme:e})=>e.soft}; }
            .pd-book .pd-head .pd-participants::before { content: 'between'; }
            .pd-book .pd-head .pd-participants .pa-reference { color: ${({theme:e})=>e.ink}; font-weight: 500; text-decoration: none; }
            .pd-book .pd-head .pd-participants .pa-reference:hover { color: ${({theme:e})=>e.accent}; }
            .pd-book .pd-head .pd-tally { display: flex; flex-wrap: wrap; gap: 4px 16px; margin: 6px 0 0; font-family: ${({theme:e})=>e.sans}; font-size: 12.5px; color: ${({theme:e})=>e.soft}; }
            .pd-book .pd-head .pd-tally b { color: ${({theme:e})=>e.ink}; font-weight: 500; }
        `}rows(){return l`
            .pd-book .pd-holds .pd-chapter { display: flex; flex-direction: column; }
            .pd-book .pd-holds .pd-section.pa-appendix { display: none; }
            .pd-book .pd-holds .pd-section > .pd-heading { margin: 0 0 4px 18px; font-family: ${({theme:e})=>e.sans}; font-size: 10.5px; font-weight: 600; line-height: 1.4; letter-spacing: .12em; text-transform: uppercase; color: ${({theme:e})=>e.faint}; }
            .pd-book .pd-holds .pd-paragraph.pa-entry { display: flex; align-items: center; gap: 9px; padding: 6px 18px 6px 16px; font-family: ${({theme:e})=>e.sans}; font-size: 13px; color: ${({theme:e})=>e.ink}; }
            .pd-book .pd-holds .pd-paragraph.pa-entry::before { content: ''; flex: none; width: 7px; height: 7px; border-radius: 50%; background: ${({theme:e})=>e.sea}; }
            .pd-book .pd-holds .pd-paragraph.pa-entry .pd-day-count { margin-inline-start: auto; font-size: 11px; color: ${({theme:e})=>e.faint}; }
            .pd-book .pd-holds .pd-paragraph.pa-entry:hover { background: #f8fafc; }
            .pd-book .pd-holds .pd-paragraph.pa-entry.pa-open { background: linear-gradient(90deg, #eff4fa, #f8fafd); color: ${({theme:e})=>e.heading}; font-weight: 500; }
        `}openDay(){return l`
            .pd-book .pd-pages .pd-chapter.pa-page { width: 100%; max-width: 768px; margin: 0 auto; }
            .pd-book .pd-pages .pa-page > .pd-title, .pd-book .pd-pages .pa-page > a.pa-self-reference .pd-title { margin: 0 0 22px; font-family: ${({theme:e})=>e.sans}; font-size: 11.5px; font-weight: 600; line-height: 1.4; letter-spacing: .14em; text-transform: uppercase; color: ${({theme:e})=>e.faint}; }
            .pd-book .pd-pages .pd-turn, .pd-book .pd-pages .pa-page > .pd-word.pd-date { display: none; }
        `}exchanges(){return l`
            .pd-book .pd-pages .pd-message { position: relative; display: block; margin: 0 0 28px; }
            .pd-book .pd-pages .pd-message > .pa-self-reference, .pd-book .pd-pages .pd-message .pd-heading.pd-speaker { display: none; }
            .pd-book .pd-pages .pd-message > .pd-word.pd-time { position: absolute; top: -17px; left: 0; display: block; width: auto; margin: 0; font-family: ${({theme:e})=>e.sans}; font-size: 11px; font-weight: 500; line-height: 1; color: ${({theme:e})=>e.faint}; opacity: 0; transition: opacity .15s; }
            .pd-book .pd-pages .pd-message > .pd-word.pd-time::before { content: none; }
            .pd-book .pd-pages .pd-message.pa-mine > .pd-word.pd-time { left: auto; right: 0; }
            .pd-book .pd-pages .pd-message:hover > .pd-word.pd-time { opacity: 1; }
            .pd-book .pd-pages .pd-message > .pd-said { display: flex; flex-direction: column; gap: 10px; min-width: 0; overflow-wrap: anywhere; }
            .pd-book .pd-pages .pd-message.pa-mine > .pd-said { margin-inline-start: auto; width: fit-content; max-width: 78%; padding: 12px 16px; border-radius: 12px; background: rgba(11, 11, 11, .05); gap: 8px; }
        `}said(){return l`
            .pd-book .pd-pages .pd-message .pd-said .pd-paragraph { margin: 0; font-family: ${({theme:e})=>e.serif}; font-size: 15px; line-height: 22px; color: #0b0b0b; }
            .pd-book .pd-pages .pd-message.pa-mine .pd-said .pd-paragraph { font-family: ${({theme:e})=>e.sans}; line-height: 20px; }
            .pd-book .pd-pages .pd-message .pd-said .pd-heading { margin: 8px 0 0; padding: 0; border: 0; font-family: ${({theme:e})=>e.serif}; font-size: 16px; font-weight: 600; line-height: 22px; color: #0b0b0b; }
            .pd-book .pd-pages .pd-message .pa-emphasis { font-style: italic; }
            .pd-book .pd-pages .pd-message .pa-bold { font-weight: 600; }
            .pd-book .pd-pages .pd-message .pa-list { padding-inline-start: 30px; }
            .pd-book .pd-pages .pd-message .pd-paragraph.pa-list .pd-line.pa-item { display: list-item; position: static; margin: 0; padding-inline-start: 0; list-style: disc outside; }
            .pd-book .pd-pages .pd-message .pd-paragraph.pa-list .pd-line.pa-item::before { content: none; }
            .pd-book .pd-pages .pd-message .pd-paragraph.pa-list.pa-ordered .pd-line.pa-item { list-style: decimal outside; }
            .pd-book .pd-pages .pd-message .pd-paragraph.pa-list .pd-line.pa-item + .pd-line.pa-item { margin-block-start: 4px; }
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
        `}cards(){return l`
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
        `}paneColumn(){return l`
            .pd-book.pa-layout:has(> .pd-pane > .pd-pane-bar) {
                grid-template-columns: ${({theme:e})=>e.holdsColumn} minmax(0, 1fr) minmax(0, 1fr);
                grid-template-areas: 'library library library' 'holds head pane' 'holds pages pane';
            }
        `}phone(){return l`
            @media (max-width: ${({theme:e})=>e.narrow}) {
                .pd-book .pd-pages .pd-message.pa-mine > .pd-said { max-width: 92%; }
                .pd-book .pd-head .pd-title { font-size: 24px; }
                .pd-book.pa-layout:has(> .pd-pane > .pd-pane-bar) { grid-template-columns: minmax(0, 1fr); grid-template-areas: 'library' 'head' 'pages'; }
            }
        `}};a(K,"$ApplicationForm");let R=K;const De=p(R),Q=class Q extends x{constructor(){super(...arguments),this.style=fe.div`
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
        .pd-book &.pd-paragraph:has(> .pd-pane-bar) { display: flex; }
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
        .pd-book & .pd-pane-body .pd-section > a.pa-self-reference:first-child { display: none; }
        .pd-book & .pd-pane-body .pd-chapter .pd-code-box { margin: 0; border: 0; border-radius: 0; background: transparent; }
        .pd-book & .pd-pane-foot { display: flex; align-items: center; gap: 6px; padding: 8px 10px 8px 18px; border-block-start: 1px solid ${({theme:e})=>e.line}; font-family: ${({theme:e})=>e.sans}; font-size: 12px; font-weight: 500; line-height: 1.4; color: ${({theme:e})=>e.soft}; }
        .pd-book & .pd-pane-version { display: flex; align-items: center; gap: 4px; }
        .pd-book & .pd-pane-version button { padding: 0 6px; font-size: 13px; }
        .pd-book & .pd-pane-download { margin-inline-start: auto; }
        @media (max-width: ${({theme:e})=>e.narrow}) {
            .pd-book &.pd-paragraph:has(> .pd-pane-bar) { position: fixed; inset: 52px 0 0 0; margin: 0; border-radius: 0; z-index: 2; }
        }
    `}get shown(){return h(this)?.$shown}get artifacts(){return this.book?.messages.flatMap(e=>e.text.find(b))??[]}$Pane(...e){this.$Writing(...e),this.containers.replace(this,"span",this.style)}neighbour(e,o){const n=Number(e.number)+o;return this.artifacts.find(s=>s.$artifact===e.$artifact&&Number(s.number)===n)}write(){const e=this.shown;if(e===void 0)return;const o=e instanceof b?e:void 0,n=e instanceof y?e:void 0,s=o?.version,d=s===void 0?void 0:p(s),c=o===void 0?void 0:this.neighbour(o,-1),te=o===void 0?void 0:this.neighbour(o,1),ce=n===void 0?"":n.names?n.contents:"The export does not carry this upload; the name is all it kept.";return i(f,{children:[i("div",{className:"pd-pane-bar",children:[t("span",{className:"pd-pane-title",children:o?.name??n?.fileName}),t("span",{className:"pd-pane-kind",children:o?.kind??n?.extension.toLowerCase()}),t("button",{type:"button",className:"pd-pane-copy",onClick:a(le=>this.copy(le),"onClick"),children:"Copy"}),t("button",{type:"button",className:"pd-pane-close","aria-label":"close",onClick:a(()=>this.close(),"onClick"),children:"×"})]}),t("div",{className:"pd-pane-body",children:d===void 0?t("pre",{children:ce}):t(d,{})}),o===void 0?void 0:i("div",{className:"pd-pane-foot",children:[i("span",{className:"pd-pane-version",children:[t("button",{type:"button",disabled:c===void 0,onClick:a(()=>this.show(c),"onClick"),children:"‹"}),t("span",{children:`v${o.number}`}),t("button",{type:"button",disabled:te===void 0,onClick:a(()=>this.show(te),"onClick"),children:"›"})]}),t("button",{type:"button",className:"pd-pane-download",onClick:a(()=>this.download(o),"onClick"),children:"Download"})]})]})}show(e){const o=h(this);o!==void 0&&e!==void 0&&(o.$shown=e)}close(){const e=h(this);e!==void 0&&(e.$shown=void 0)}copy(e){const o=e.currentTarget.closest(".pd-pane")?.querySelector(".pd-pane-body");navigator.clipboard?.writeText(o?.textContent??"")}download(e){const o=e.$type.replace(/^\./u,"")||"md",n=new Blob([e.contents],{type:"text/plain"}),s=document.createElement("a");s.href=URL.createObjectURL(n),s.download=`${e.name} v${e.number}.${o}`,s.click(),URL.revokeObjectURL(s.href)}$Define(){super.$Define(),this.classes.add(this,"pd-pane")}};a(Q,"$Pane");let T=Q;const Oe=p(T);var Ne=Object.defineProperty,je=Object.getOwnPropertyDescriptor,Pe=a((r,e,o,n)=>{for(var s=je(e,o),d=r.length-1,c;d>=0;d--)(c=r[d])&&(s=c(e,o,s)||s);return s&&Ne(e,o,s),s},"__decorateClass$2");const X=class X extends N{constructor(){super(...arguments),this.specification=new w}get name(){return k.reference(g.copy(this.text))?.name??""}get means(){return this.annotations.expressed(ne)}$Define(){super.$Define();const e=k.reference(g.copy(this.text));if(e===void 0)return;const o=p(M);this.annotations.add(this,t(o,{children:e.identifier}))}write(){return this.name}};a(X,"$Account");let m=X;const Y=class Y extends j{$saidOfACover(e){D(e instanceof P&&e.is(H),"an account is said of a cover, and this is not one")}};a(Y,"AccountSpecification");let w=Y;Pe([O("an account is said of a cover")],w.prototype,"$saidOfACover");const Z=class Z extends x{get cover(){return this.$cover??this.book?.cover}get account(){return this.cover?.annotations.expressed(m)}write(){const e=this.account,o=p(de),n=p(ie),s=p(M);return i(f,{children:[i(o,{children:[t(n,{}),"account"]}),i(o,{children:[t(s,{children:e.means.identifier}),e.name]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-account-line")}};a(Z,"$AccountLine");let W=Z;const Ye=p(m),Me=p(W);var Le=Object.defineProperty,_e=Object.getOwnPropertyDescriptor,Ae=a((r,e,o,n)=>{for(var s=_e(e,o),d=r.length-1,c;d>=0;d--)(c=r[d])&&(s=c(e,o,s)||s);return s&&Le(e,o,s),s},"__decorateClass$1");const V=class V extends N{constructor(){super(...arguments),this.specification=new C}get uuid(){return g.copy(this.text).trim()}write(){return null}};a(V,"$Origin");let $=V;const S=class S extends j{$saidOfACoverOrAMessage(e){D(e instanceof P&&e.is(H)||e instanceof ue,"an origin is said of a cover or a message, and this is neither")}};a(S,"OriginSpecification");let C=S;Ae([O("an origin is said of a cover or a message")],C.prototype,"$saidOfACoverOrAMessage");const Ze=p($);var Re=Object.defineProperty,Te=Object.getOwnPropertyDescriptor,We=a((r,e,o,n)=>{for(var s=Te(e,o),d=r.length-1,c;d>=0;d--)(c=r[d])&&(s=c(e,o,s)||s);return s&&Re(e,o,s),s},"__decorateClass");const ee=class ee extends N{constructor(){super(...arguments),this.specification=new z}get name(){return k.reference(g.copy(this.text))?.name??""}get means(){return this.annotations.expressed(ne)}$Define(){super.$Define();const e=k.reference(g.copy(this.text));if(e===void 0)return;const o=p(M);this.annotations.add(this,t(o,{children:e.identifier}))}write(){return this.name}};a(ee,"$Project");let u=ee;const oe=class oe extends j{$saidOfACover(e){D(e instanceof P&&e.is(H),"a project is said of a cover, and this is not one")}};a(oe,"ProjectSpecification");let z=oe;We([O("a project is said of a cover")],z.prototype,"$saidOfACover");const se=class se extends x{get cover(){return this.$cover??this.book?.cover}get project(){return this.cover?.annotations.expressed(u)}write(){const e=this.project,o=p(de),n=p(ie),s=p(M);return i(f,{children:[i(o,{children:[t(n,{}),"project"]}),i(o,{children:[t(s,{children:e.means.identifier}),e.name]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-project-line")}};a(se,"$ProjectLine");let U=se;const Ve=p(u),Ue=p(U),Be=Ue,ae=class ae extends ve{constructor(){super(...arguments),this.$shown=void 0}get project(){return this.cover?.annotations.expressed(u)}get account(){return this.cover?.annotations.expressed(m)}get origin(){return this.cover?.annotations.expressed($)?.uuid}write(){const e=p(Oe);return i(f,{children:[super.write(),t(e,{chapter:this.cover})]})}me(){const e=p(Be),o=p(Me);return i(f,{children:[super.me(),this.project===void 0?void 0:t(e,{cover:this.cover}),this.account===void 0?void 0:t(o,{cover:this.cover})]})}};a(ae,"$ClaudeConversation");let B=ae;const re=p(B);p(re,be)(De);p(re,xe)(ke);export{B as $,Ye as A,Ze as O,Ve as P,Ke as V,Je as a,Xe as b,Qe as c};
