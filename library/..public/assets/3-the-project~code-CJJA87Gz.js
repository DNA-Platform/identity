var ne=Object.defineProperty;var p=(i,e)=>ne(i,"name",{value:e,configurable:!0});import{$ as t,o as x,p as S,q as h,j as s,r as de,s as R,t as L,u as M,v as F,w as T,x as c,y as ie,z as m,F as V,R as v,G as ee,W as se,J as re}from"./index-BnLaSEQE.js";import{v as ce,w as oe,x as le,y as he,z as fe}from"./.cover-DIvXCLzq.js";const W=class W extends x{$Define(){super.$Define(),this.classes.add(this,"pd-action")}};p(W,"$Action");let $=W;const U=class U extends x{$Define(){super.$Define(),this.classes.add(this,"pd-result")}};p(U,"$Result");let j=U;const Me=t($);t(j);var ge=Object.defineProperty,be=Object.getOwnPropertyDescriptor,xe=p((i,e,o,n)=>{for(var a=be(e,o),d=i.length-1,r;d>=0;d--)(r=i[d])&&(a=r(e,o,a)||a);return a&&ge(e,o,a),a},"__decorateClass$2");const me='<svg viewBox="0 0 24 24"><path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4M9 12h6M9 16h6"/></svg>',ue='<svg viewBox="0 0 24 24"><path d="M8 7l-5 5 5 5M16 7l5 5-5 5M13 5l-2 14"/></svg>',l=p(i=>{const e=i.book;return e!==void 0&&"$shown"in e?e:void 0},"showingBook"),_=class _ extends R{constructor(){super(...arguments),this.specification=new u}defines(e){e.classes.add(this,"pa-version")}erase(e){e.classes.revert(this)}};p(_,"$Version");let C=_;const q=class q extends L{$saidOfAChapter(e){M(e instanceof F,"a version is said of a chapter, and this is not one")}};p(q,"VersionSpecification");let u=q;xe([T("a version is said of a chapter")],u.prototype,"$saidOfAChapter");const B=class B extends S{constructor(){super(...arguments),this.$artifact=void 0,this.$place=void 0}get version(){const e=this.$place;if(e!==void 0)return this.book.chapters.find(o=>de.slug(o.title?.name??"")===e)}get versionName(){return this.version?.title?.name??""}get name(){return this.versionName.replace(/ v\d+(?:-\d+)?$/u,"")||this.$identifier}get number(){return/ v(\d+)(?:-\d+)?$/u.exec(this.versionName)?.[1]??"1"}get kind(){const e=this.$type.replace(/^\./u,"");return e==="md"||e==="txt"||e===""?"document":e==="html"?"page":"code"}get shown(){return l(this)?.$shown===this}$Artifact(...e){this.$Code(...e),this.containers.replace(this,"pre","figure")}write(){const e=[...this.text].map((n,a)=>{const d=t(n);return s.jsx(d,{},a)}),o={__html:this.kind==="document"?me:ue};return s.jsxs(s.Fragment,{children:[s.jsxs("button",{type:"button",className:"pd-card","aria-pressed":this.shown,onClick:p(()=>this.press(),"onClick"),children:[s.jsx("span",{className:"pd-card-mark",dangerouslySetInnerHTML:o}),s.jsxs("span",{className:"pd-card-words",children:[s.jsx("b",{children:this.name}),s.jsx("small",{children:`Click to open ${this.kind} · v${this.number}`})]})]}),s.jsx("figcaption",{children:e})]})}press(){const e=l(this);e!==void 0&&(e.$shown=e.$shown===this?void 0:this)}$Define(){super.$Define(),this.classes.add(this,"pd-artifact"),this.shown&&this.classes.add(this,"pa-open")}};p(B,"$Artifact");let f=B;const H=class H extends S{get sentence(){return h.copy(this.text)}get fileName(){return/“([^”]+)”/u.exec(this.sentence)?.[1]??"a file"}get extension(){return(this.fileName.split(".").pop()??"file").toUpperCase().slice(0,4)}get lineCount(){return this.names?this.contents.split(`
`).length:0}get shown(){return l(this)?.$shown===this}$Attachment(...e){this.$Code(...e),this.containers.replace(this,"pre","figure")}write(){const e=[...this.text].map((o,n)=>{const a=t(o);return s.jsx(a,{},n)});return s.jsxs(s.Fragment,{children:[s.jsxs("button",{type:"button",className:"pd-chip","aria-pressed":this.shown,onClick:p(()=>this.press(),"onClick"),children:[s.jsx("span",{className:"pd-chip-mark",children:this.extension}),s.jsxs("span",{className:"pd-chip-words",children:[s.jsx("b",{children:this.fileName}),s.jsx("small",{children:this.names?`${this.lineCount} lines`:"not carried by the export"})]})]}),s.jsx("figcaption",{children:e})]})}press(){const e=l(this);e!==void 0&&(e.$shown=e.$shown===this?void 0:this)}$Define(){super.$Define(),this.classes.add(this,"pd-attachment"),this.shown&&this.classes.add(this,"pa-open")}};p(H,"$Attachment");let k=H;const Fe=t(C),Te=t(f),We=t(k),A=class A extends ce{constructor(){super(...arguments),this.sans="'Inter', system-ui, sans-serif",this.mono="ui-monospace, 'Cascadia Code', Consolas, monospace",this.keyword="#1f5fbf",this.string="#9a3b1e",this.type="#116b4a",this.comment="#7a8491"}parts(){return[...super.parts(),this.surfaces(),this.top(),this.rows(),this.openDay(),this.exchanges(),this.said(),this.cards(),this.paneColumn(),this.phone()]}surfaces(){return c`
            .pd-book .pd-library { background: linear-gradient(180deg, #ffffff 0%, #ffffff 84%, #fbfcfe 100%); }
            .pd-book .pd-me { background: linear-gradient(180deg, #ffffff 0%, #ffffff 84%, #fbfcfe 100%); }
            .pd-book .pd-holds { background: linear-gradient(90deg, #ffffff 0%, #ffffff 88%, #fbfcfe 100%); }
            .pd-book .pd-head { background: #ffffff; box-shadow: none; }
            .pd-book .pd-pages { background: #ffffff; }
            @media (min-width: ${({theme:e})=>e.narrow}) {
                .pd-book.pa-layout { height: 100vh; overflow-y: auto; grid-template-rows: auto auto auto; }
                .pd-book.pa-layout .pd-pages { overflow: visible; }
                .pd-book.pa-layout .pd-library, .pd-book.pa-layout .pd-me { position: sticky; top: 0; z-index: 3; }
                .pd-book.pa-layout .pd-holds { position: sticky; top: ${({theme:e})=>e.barHeight}; align-self: start; max-height: calc(100vh - ${({theme:e})=>e.barHeight}); }
            }
        `}top(){return c`
            .pd-book .pd-head .pd-switches, .pd-book .pd-head .pa-illustration { display: none; }
            .pd-book .pd-head .pd-title { font-family: ${({theme:e})=>e.serif}; font-size: 30px; font-weight: 600; line-height: 1.1; letter-spacing: -.01em; }
            .pd-book .pd-head .pd-participants { display: flex; gap: 6px; align-items: center; margin: 6px 0 0; font-family: ${({theme:e})=>e.sans}; font-size: 13px; color: ${({theme:e})=>e.soft}; }
            .pd-book .pd-head .pd-participants::before { content: 'between'; }
            .pd-book .pd-head .pd-participants .pa-reference { color: ${({theme:e})=>e.ink}; font-weight: 500; text-decoration: none; }
            .pd-book .pd-head .pd-participants .pa-reference:hover { color: ${({theme:e})=>e.accent}; }
            .pd-book .pd-head .pd-tally { display: flex; flex-wrap: wrap; gap: 4px 16px; margin: 6px 0 0; font-family: ${({theme:e})=>e.sans}; font-size: 12.5px; color: ${({theme:e})=>e.soft}; }
            .pd-book .pd-head .pd-tally b { color: ${({theme:e})=>e.ink}; font-weight: 500; }
        `}rows(){return c`
            .pd-book .pd-holds .pd-chapter { display: flex; flex-direction: column; }
            .pd-book .pd-holds .pd-section.pa-appendix { display: none; }
            .pd-book .pd-holds .pd-section > .pd-heading { margin: 0 0 4px 18px; font-family: ${({theme:e})=>e.sans}; font-size: 10.5px; font-weight: 600; line-height: 1.4; letter-spacing: .12em; text-transform: uppercase; color: ${({theme:e})=>e.faint}; }
            .pd-book .pd-holds .pd-paragraph.pa-entry { display: flex; align-items: center; gap: 9px; padding: 6px 18px 6px 16px; font-family: ${({theme:e})=>e.sans}; font-size: 13px; color: ${({theme:e})=>e.ink}; }
            .pd-book .pd-holds .pd-paragraph.pa-entry::before { content: ''; flex: none; width: 7px; height: 7px; border-radius: 50%; background: ${({theme:e})=>e.sea}; }
            .pd-book .pd-holds .pd-paragraph.pa-entry .pd-day-count { margin-inline-start: auto; font-size: 11px; color: ${({theme:e})=>e.faint}; }
            .pd-book .pd-holds .pd-paragraph.pa-entry:hover { background: #f8fafc; }
            .pd-book .pd-holds .pd-paragraph.pa-entry.pa-open { background: linear-gradient(90deg, #eff4fa, #f8fafd); color: ${({theme:e})=>e.heading}; font-weight: 500; }
        `}openDay(){return c`
            .pd-book .pd-pages .pd-chapter.pa-page { width: 100%; max-width: 768px; margin: 0 auto; }
            .pd-book .pd-pages .pa-page > .pd-title, .pd-book .pd-pages .pa-page > a.pa-self-reference .pd-title { margin: 0 0 22px; font-family: ${({theme:e})=>e.sans}; font-size: 11.5px; font-weight: 600; line-height: 1.4; letter-spacing: .14em; text-transform: uppercase; color: ${({theme:e})=>e.faint}; }
            .pd-book .pd-pages .pd-turn, .pd-book .pd-pages .pa-page > .pd-word.pd-date { display: none; }
        `}exchanges(){return c`
            .pd-book .pd-pages .pd-message { position: relative; display: block; margin: 0 0 28px; }
            .pd-book .pd-pages .pd-message > .pa-self-reference, .pd-book .pd-pages .pd-message .pd-heading.pd-speaker { display: none; }
            .pd-book .pd-pages .pd-message > .pd-word.pd-time { position: absolute; top: -17px; left: 0; display: block; width: auto; margin: 0; font-family: ${({theme:e})=>e.sans}; font-size: 11px; font-weight: 500; line-height: 1; color: ${({theme:e})=>e.faint}; opacity: 0; transition: opacity .15s; }
            .pd-book .pd-pages .pd-message > .pd-word.pd-time::before { content: none; }
            .pd-book .pd-pages .pd-message.pa-mine > .pd-word.pd-time { left: auto; right: 0; }
            .pd-book .pd-pages .pd-message:hover > .pd-word.pd-time { opacity: 1; }
            .pd-book .pd-pages .pd-message > .pd-said { display: flex; flex-direction: column; gap: 10px; min-width: 0; overflow-wrap: anywhere; }
            .pd-book .pd-pages .pd-message.pa-mine > .pd-said { margin-inline-start: auto; width: fit-content; max-width: 78%; padding: 12px 16px; border-radius: 12px; background: rgba(11, 11, 11, .05); gap: 8px; }
        `}said(){return c`
            .pd-book .pd-pages .pd-message .pd-said .pd-paragraph { margin: 0; font-family: ${({theme:e})=>e.serif}; font-size: 15px; line-height: 22px; color: #0b0b0b; }
            .pd-book .pd-pages .pd-message.pa-mine .pd-said .pd-paragraph { font-family: ${({theme:e})=>e.sans}; line-height: 20px; }
            .pd-book .pd-pages .pd-message .pd-said .pd-heading { margin: 8px 0 0; padding: 0; border: 0; font-family: ${({theme:e})=>e.serif}; font-size: 16px; font-weight: 600; line-height: 22px; color: #0b0b0b; }
            .pd-book .pd-pages .pd-message .pa-emphasis { font-style: italic; }
            .pd-book .pd-pages .pd-message .pa-bold { font-weight: 600; }
            .pd-book .pd-pages .pd-message .pa-list { padding-inline-start: 30px; }
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
        `}cards(){return c`
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
        `}paneColumn(){return c`
            .pd-book.pa-layout:has(> .pd-pane > .pd-pane-bar) {
                grid-template-columns: ${({theme:e})=>e.holdsColumn} minmax(0, 1fr) minmax(0, 1fr);
                grid-template-areas: 'library library library' 'holds head pane' 'holds pages pane';
            }
        `}phone(){return c`
            @media (max-width: ${({theme:e})=>e.narrow}) {
                .pd-book .pd-pages .pd-message.pa-mine > .pd-said { max-width: 92%; }
                .pd-book .pd-head .pd-title { font-size: 24px; }
                .pd-book.pa-layout:has(> .pd-pane > .pd-pane-bar) { grid-template-columns: minmax(0, 1fr); grid-template-areas: 'library' 'head' 'pages'; }
            }
        `}};p(A,"$ApplicationForm");let z=A;const ke=t(z),G=class G extends x{constructor(){super(...arguments),this.style=ie.div`
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
    `}get shown(){return l(this)?.$shown}get artifacts(){return this.book?.messages.flatMap(e=>e.text.find(f))??[]}$Pane(...e){this.$Writing(...e),this.containers.replace(this,"span",this.style)}neighbour(e,o){const n=Number(e.number)+o;return this.artifacts.find(a=>a.$artifact===e.$artifact&&Number(a.number)===n)}write(){const e=this.shown;if(e===void 0)return;const o=e instanceof f?e:void 0,n=e instanceof k?e:void 0,a=o?.version,d=a===void 0?void 0:t(a),r=o===void 0?void 0:this.neighbour(o,-1),Z=o===void 0?void 0:this.neighbour(o,1),te=n===void 0?"":n.names?n.contents:"The export does not carry this upload; the name is all it kept.";return s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"pd-pane-bar",children:[s.jsx("span",{className:"pd-pane-title",children:o?.name??n?.fileName}),s.jsx("span",{className:"pd-pane-kind",children:o?.kind??n?.extension.toLowerCase()}),s.jsx("button",{type:"button",className:"pd-pane-copy",onClick:p(pe=>this.copy(pe),"onClick"),children:"Copy"}),s.jsx("button",{type:"button",className:"pd-pane-close","aria-label":"close",onClick:p(()=>this.close(),"onClick"),children:"×"})]}),s.jsx("div",{className:"pd-pane-body",children:d===void 0?s.jsx("pre",{children:te}):s.jsx(d,{})}),o===void 0?void 0:s.jsxs("div",{className:"pd-pane-foot",children:[s.jsxs("span",{className:"pd-pane-version",children:[s.jsx("button",{type:"button",disabled:r===void 0,onClick:p(()=>this.show(r),"onClick"),children:"‹"}),s.jsx("span",{children:`v${o.number}`}),s.jsx("button",{type:"button",disabled:Z===void 0,onClick:p(()=>this.show(Z),"onClick"),children:"›"})]}),s.jsx("button",{type:"button",className:"pd-pane-download",onClick:p(()=>this.download(o),"onClick"),children:"Download"})]})]})}show(e){const o=l(this);o!==void 0&&e!==void 0&&(o.$shown=e)}close(){const e=l(this);e!==void 0&&(e.$shown=void 0)}copy(e){const o=e.currentTarget.closest(".pd-pane")?.querySelector(".pd-pane-body");navigator.clipboard?.writeText(o?.textContent??"")}download(e){const o=e.$type.replace(/^\./u,"")||"md",n=new Blob([e.contents],{type:"text/plain"}),a=document.createElement("a");a.href=URL.createObjectURL(n),a.download=`${e.name} v${e.number}.${o}`,a.click(),URL.revokeObjectURL(a.href)}$Define(){super.$Define(),this.classes.add(this,"pd-pane")}};p(G,"$Pane");let D=G;const ye=t(D);var we=Object.defineProperty,ve=Object.getOwnPropertyDescriptor,$e=p((i,e,o,n)=>{for(var a=ve(e,o),d=i.length-1,r;d>=0;d--)(r=i[d])&&(a=r(e,o,a)||a);return a&&we(e,o,a),a},"__decorateClass$1");const E=class E extends R{constructor(){super(...arguments),this.specification=new y}get name(){return m.reference(h.copy(this.text))?.name??""}get means(){return this.annotations.expressed(V)}$Define(){super.$Define();const e=m.reference(h.copy(this.text));if(e===void 0)return;const o=t(v);this.annotations.add(this,s.jsx(o,{children:e.identifier}))}write(){return this.name}};p(E,"$Account");let g=E;const I=class I extends L{$saidOfACover(e){M(e instanceof F&&e.is(ee),"an account is said of a cover, and this is not one")}};p(I,"AccountSpecification");let y=I;$e([T("an account is said of a cover")],y.prototype,"$saidOfACover");const J=class J extends x{get cover(){return this.$cover??this.book?.cover}get account(){return this.cover?.annotations.expressed(g)}write(){const e=this.account,o=t(se),n=t(oe),a=t(v);return s.jsxs(s.Fragment,{children:[s.jsxs(o,{children:[s.jsx(n,{}),"account"]}),s.jsxs(o,{children:[s.jsx(a,{children:e.means.identifier}),e.name]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-account-line")}};p(J,"$AccountLine");let N=J;t(g);const je=t(N);var Ce=Object.defineProperty,ze=Object.getOwnPropertyDescriptor,De=p((i,e,o,n)=>{for(var a=ze(e,o),d=i.length-1,r;d>=0;d--)(r=i[d])&&(a=r(e,o,a)||a);return a&&Ce(e,o,a),a},"__decorateClass");const K=class K extends R{constructor(){super(...arguments),this.specification=new w}get name(){return m.reference(h.copy(this.text))?.name??""}get means(){return this.annotations.expressed(V)}$Define(){super.$Define();const e=m.reference(h.copy(this.text));if(e===void 0)return;const o=t(v);this.annotations.add(this,s.jsx(o,{children:e.identifier}))}write(){return this.name}};p(K,"$Project");let b=K;const Q=class Q extends L{$saidOfACover(e){M(e instanceof F&&e.is(ee),"a project is said of a cover, and this is not one")}};p(Q,"ProjectSpecification");let w=Q;De([T("a project is said of a cover")],w.prototype,"$saidOfACover");const X=class X extends x{get cover(){return this.$cover??this.book?.cover}get project(){return this.cover?.annotations.expressed(b)}write(){const e=this.project,o=t(se),n=t(oe),a=t(v);return s.jsxs(s.Fragment,{children:[s.jsxs(o,{children:[s.jsx(n,{}),"project"]}),s.jsxs(o,{children:[s.jsx(a,{children:e.means.identifier}),e.name]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-project-line")}};p(X,"$ProjectLine");let O=X;const Ue=t(b),Ne=t(O),Oe=Ne,Y=class Y extends le{constructor(){super(...arguments),this.$shown=void 0}get project(){return this.cover?.annotations.expressed(b)}get account(){return this.cover?.annotations.expressed(g)}write(){const e=t(ye);return s.jsxs(s.Fragment,{children:[super.write(),s.jsx(e,{chapter:this.cover})]})}me(){const e=t(Oe),o=t(je);return s.jsxs(s.Fragment,{children:[super.me(),this.project===void 0?void 0:s.jsx(e,{cover:this.cover}),this.account===void 0?void 0:s.jsx(o,{cover:this.cover})]})}};p(Y,"$ClaudeConversation");let P=Y;const ae=t(P);t(ae,re)(ke);t(ae,he)(fe);export{P as $,Me as A,Ue as P,Fe as V,We as a,Te as b};
