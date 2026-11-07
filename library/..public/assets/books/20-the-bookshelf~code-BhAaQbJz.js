var De=Object.defineProperty;var r=(h,e)=>De(h,"name",{value:e,configurable:!0});import{jsx as p,jsxs as c,Fragment as b}from"react/jsx-runtime";import{css as i}from"styled-components";import{$ as t,inert as ye,selection as ve,$check as u}from"@dna-platform/chemistry";import{specify as k,$Annotation as T,$Paragraph as v,$Word as X,Word as z,Reference as m,$Append as w,$Chapter as N,$Synopsis as x,$Section as Ae,Self as Te,Theme as Ne,$Referent as Se,$Format as Re,$SelfReference as Be,AnnotationSpecification as Z,$TableOfContents as Pe}from"@dna-platform/public";import{a as Fe,O as xe,u as ze,e as y,v as We,w as Le,N as Ee,x as P,c as je,R as He,S as Me,g as Oe,E as Je,d as Ce,$ as Ye,T as Ve,L as Ge,b as Ke,J as qe,y as Qe,z as Xe}from"./.cover-CTiiXUGF.js";import{$ as Ze,a as _e}from"./10-the-manual~book-Devf-LJD.js";import{$ as Ue,m as Ie,d as B}from"./8-the-origin~code-PcSNBEed.js";var ea=Object.defineProperty,aa=Object.getOwnPropertyDescriptor,S=r((h,e,a,o)=>{for(var n=o>1?void 0:o?aa(e,a):e,s=h.length-1,d;s>=0;s--)(d=h[s])&&(n=(o?d(e,a,n):d(n))||n);return o&&n&&ea(e,a,n),n},"__decorateClass$1");const U=class U extends T{constructor(){super(...arguments),this.specification=new xe}defines(e){e.classes.add(this,"pa-synopses")}erase(e){e.classes.revert(this)}};r(U,"$Synopses");let F=U;const oa=t(F),ta=oa,ee=class ee extends v{write(){const e=t(ze);return p(e,{annotation:ta,children:"with the synopsis"})}$Define(){super.$Define(),this.classes.add(this,"pd-row-form")}};r(ee,"$RowForm");let W=ee;const ae=class ae extends X{write(){return`${this.chapter?.annotations.expressed(y)?.cover?.annotations.expressed(Ue)?.shown??0} exchanges`}$Define(){super.$Define(),this.classes.add(this,"pd-entry-count")}};r(ae,"$EntryCount");let L=ae;const oe=class oe extends X{write(){return Ie(this.chapter)}$Define(){super.$Define(),this.classes.add(this,"pd-entry-month")}};r(oe,"$EntryMonth");let E=oe;const te=class te extends v{get project(){return this.book}$ProjectHead(...e){this.$Writing(...e),this.containers.replace(this,"span","div")}write(){const e=this.project;if(e===void 0)return;const a=t(z),o=t(m),n=e.coverOf(e.subject?.means?.identifier);if(n?.mention!==void 0)return p("span",{className:"pd-crumbs",children:c(a,{children:[p(o,{children:n.mention.identifier}),n.title?.name]})})}$Define(){super.$Define(),this.classes.add(this,"pd-project-head")}};r(te,"$ProjectHead");let H=te;const ne=class ne extends v{constructor(){super(...arguments),this.style=ve.div`
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
    `}get project(){return this.book}$Knowledge(...e){this.$Writing(...e),this.containers.replace(this,"span",this.style)}write(){const e=this.project;if(e===void 0)return;const a=t(z),o=t(m),n='<svg viewBox="0 0 16 16"><path d="M4 1.5h5.5L13 5v9.5H4z"/><path d="M9.5 1.5V5H13M6 8h4M6 10.5h4"/></svg>';return c(b,{children:[c("span",{className:"pd-knowledge-row",children:["Files",p("small",{children:e.files.length}),p("span",{className:"pd-at-right",children:"as uploaded"})]}),p("span",{className:"pd-knowledge-files",children:e.files.map((s,d)=>c("span",{className:"pd-knowledge-file",children:[p("span",{className:"pd-drawing",dangerouslySetInnerHTML:{__html:n}}),c(a,{children:[p(o,{children:s.mention.identifier}),s.title?.name]}),p("span",{className:"pd-file-type",children:(s.annotations.find(w)[0]?.$type??"").replace(/^\./u,"")})]},d))})]})}$Define(){super.$Define(),this.classes.add(this,"pd-knowledge")}};r(ne,"$Knowledge");let M=ne;const pe=class pe extends We{paging(){return i`
            .pd-book.pa-turned .pa-page:not(.pa-open) { display: none; }
            .pd-book:not(.pa-turned) .pa-page.pa-spread { display: none; }
        `}areas(){return i`
            ${super.areas()}
            .pd-book.pa-layout:not(.pa-turned) .pd-head { display: grid; gap: calc(${({theme:e})=>e.space} / 4); align-content: end; padding: calc(${({theme:e})=>e.space} * 0.9167) calc(${({theme:e})=>e.space} * 1.5) calc(${({theme:e})=>e.space} * 0.5833); }
            .pd-book.pa-layout.pa-turned .pd-head { display: none; }
            .pd-book:not(.pa-turned) .pd-holds { padding-block-start: calc(${({theme:e})=>e.space} * 0.4167); }
            ${this.head()}
            ${this.list()}
            ${this.search()}
        `}search(){return i`
            .pd-book .pd-head .pd-paragraph.pd-search { order: 4; grid-column: 1 / -1; display: flex; align-items: center; gap: calc(${({theme:e})=>e.space} / 3); width: min(440px, 100%); margin: calc(${({theme:e})=>e.space} * 0.4167) 0 0; padding: calc(${({theme:e})=>e.space} * 0.2917) calc(${({theme:e})=>e.space} / 2); border: thin solid ${({theme:e})=>e.line}; border-radius: calc(${({theme:e})=>e.space} * 0.4167); background: ${({theme:e})=>e.side}; color: ${({theme:e})=>e.soft}; }
            .pd-book .pd-head .pd-search .pd-search-mark { font-style: normal; font-size: calc(1.1429 * ${({theme:e})=>e.size}); color: ${({theme:e})=>e.faint}; }
            .pd-book .pd-head .pd-search .pd-search-word { flex: 1; min-width: 0; border: 0; background: none; padding: 0; font-family: ${({theme:e})=>e.font}; font-size: ${({theme:e})=>e.size}; line-height: calc(1.4286 * ${({theme:e})=>e.size}); color: ${({theme:e})=>e.ink}; outline: none; }
            .pd-book .pd-head .pd-search .pd-search-word::placeholder { color: ${({theme:e})=>e.soft}; }
            .pd-book .pd-head .pd-search .pd-search-word::-webkit-search-cancel-button { cursor: pointer; }
            .pd-book:not(.pa-turned):has(.pd-chapter.pa-table-of-contents.pa-searching) .pd-pages .pd-chapter.pa-page.pa-volume { display: none; }
            .pd-book .pd-pages .pd-paragraph.pd-results { display: block; width: min(768px, 100%); margin: 0; }
            .pd-book .pd-pages .pd-results .pd-results-count { display: block; margin: calc(${({theme:e})=>e.space} * 0.8333) 0 0; font-family: ${({theme:e})=>e.font}; font-size: calc(0.8571 * ${({theme:e})=>e.size}); font-weight: 500; line-height: 1.5; letter-spacing: 0.02em; color: ${({theme:e})=>e.soft}; }
            .pd-book .pd-pages .pd-results .pd-results-count b { color: ${({theme:e})=>e.ink}; font-weight: 500; }
            .pd-book .pd-pages .pd-paragraph.pd-result { position: relative; display: grid; grid-template-columns: minmax(0, 1fr) auto auto; grid-template-areas: 'title exchanges day' 'synopsis synopsis synopsis'; align-items: baseline; column-gap: calc(${({theme:e})=>e.space} * 0.6667); margin: 0; padding: calc(${({theme:e})=>e.space} * 0.5833) 0 calc(${({theme:e})=>e.space} * 0.5417); border-block-end: thin solid rgba(11, 11, 11, .08); }
            .pd-book .pd-pages .pd-result .pd-result-title { grid-area: title; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-family: ${({theme:e})=>e.font}; font-size: calc(1.0714 * ${({theme:e})=>e.size}); line-height: 20px; color: ${({theme:e})=>e.ink}; }
            .pd-book .pd-pages .pd-result:hover .pd-result-title { color: ${({theme:e})=>e.accent}; }
            .pd-book .pd-pages .pd-result > a:has(> .pd-entry-open) { position: absolute; inset: 0; z-index: 1; }
            .pd-book .pd-pages .pd-result .pd-word.pd-entry-day { grid-area: day; min-width: 52px; text-align: end; font-family: ${({theme:e})=>e.font}; font-size: ${({theme:e})=>e.size}; line-height: 20px; color: ${({theme:e})=>e.soft}; white-space: nowrap; }
            .pd-book .pd-pages .pd-result .pd-result-synopsis { grid-area: synopsis; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; margin-block-start: 4px; font-family: ${({theme:e})=>e.serif}; font-size: ${({theme:e})=>e.size}; line-height: 1.5; color: ${({theme:e})=>e.soft}; }
            .pd-book .pd-pages .pd-result mark { background: #fff2a8; color: inherit; padding: 0 1px; border-radius: 2px; }
            @media (max-width: ${({theme:e})=>e.narrow}) {
                .pd-book .pd-head .pd-paragraph.pd-search { width: 100%; }
            }
        `}head(){return i`
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
            .pd-book .pd-head .pd-brief { order: 2; grid-column: 1 / -1; max-width: 72ch; font-family: ${({theme:e})=>e.serif}; font-size: calc(1.0714 * ${({theme:e})=>e.size}); line-height: 1.5; color: ${({theme:e})=>e.soft}; }
            .pd-book .pd-head .pd-instructions { order: 2; grid-column: 1 / -1; display: flex; gap: calc(${({theme:e})=>e.space} / 3); align-items: baseline; max-width: 72ch; font-family: ${({theme:e})=>e.font}; font-size: calc(0.9643 * ${({theme:e})=>e.size}); line-height: 1.5; color: ${({theme:e})=>e.ink}; }
            .pd-book .pd-head .pd-instructions b { flex: none; font-size: calc(0.75 * ${({theme:e})=>e.size}); font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; color: ${({theme:e})=>e.faint}; }
            .pd-book .pd-head .pd-instructions.pa-none { color: ${({theme:e})=>e.faint}; font-style: italic; }
            @media (max-width: ${({theme:e})=>e.narrow}) {
            }
        `}list(){return i`
            .pd-book:not(.pa-turned) .pd-pages { padding: 0 calc(${({theme:e})=>e.space} * 1.5) calc(${({theme:e})=>e.space} * 5); }
            .pd-book:not(.pa-turned) .pd-pages .pd-chapter.pa-page.pa-synopsis { max-width: 768px; margin: 0; }
            .pd-book:not(.pa-turned) .pd-pages .pd-chapter.pa-page.pa-synopsis:not(.pa-volume) { padding: calc(${({theme:e})=>e.space} / 4) 0 calc(${({theme:e})=>e.space} / 2); }
            .pd-book:not(.pa-turned) .pd-pages .pd-chapter.pa-page.pa-synopsis:not(.pa-volume) > a, .pd-book:not(.pa-turned) .pd-pages .pd-chapter.pa-page.pa-synopsis:not(.pa-volume) .pd-turn { display: none; }
            .pd-book:not(.pa-turned) .pd-pages .pd-chapter.pa-page.pa-synopsis:not(.pa-volume) .pd-paragraph { max-width: 72ch; margin: 0; font-family: ${({theme:e})=>e.serif}; font-size: calc(1.0714 * ${({theme:e})=>e.size}); line-height: 1.5; color: ${({theme:e})=>e.soft}; }
            .pd-book:not(.pa-turned) .pd-pages .pd-chapter.pa-page.pa-volume { position: relative; display: grid; grid-template-columns: minmax(0, 1fr) auto auto auto; grid-template-areas: 'month month month month' 'title count day open' 'synopsis synopsis synopsis synopsis'; align-items: baseline; column-gap: calc(${({theme:e})=>e.space} * 0.6667); padding: calc(${({theme:e})=>e.space} * 0.625) 0 calc(${({theme:e})=>e.space} * 0.5833); border-block-end: thin solid rgba(11, 11, 11, .08); }
            .pd-book:not(.pa-turned) .pd-pages .pa-volume .pd-word.pd-way-on { grid-area: open; position: relative; z-index: 2; }
            .pd-book:not(.pa-turned) .pd-pages .pa-volume .pd-way-on-link { display: inline-block; padding: 0 6px; font-family: ${({theme:e})=>e.font}; font-size: calc(0.75 * ${({theme:e})=>e.size}); font-weight: 500; line-height: 20px; letter-spacing: 0.04em; text-transform: uppercase; color: ${({theme:e})=>e.faint}; text-decoration: none; white-space: nowrap; }
            .pd-book:not(.pa-turned) .pd-pages .pa-volume .pd-way-on-link:hover { color: ${({theme:e})=>e.accent}; }
            .pd-book:not(.pa-turned) .pd-pages .pa-volume.pa-returned, .pd-book .pd-pages .pd-result.pa-returned { background: linear-gradient(90deg, #eef4fa, transparent 60%); }
            .pd-book:not(.pa-turned) .pd-pages .pa-volume.pa-returned .pd-word.pd-entry-count::before { content: 'you were here'; margin-inline-end: calc(${({theme:e})=>e.space} * 0.4167); padding: 0 7px; border-radius: 999px; background: #eff4fa; font-size: calc(0.75 * ${({theme:e})=>e.size}); font-weight: 500; color: ${({theme:e})=>e.accent}; }
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
            .pd-book .pd-pages .pd-word.pd-entry-open { display: block; position: absolute; inset: 0; }
            @media (max-width: ${({theme:e})=>e.narrow}) {
                .pd-book:not(.pa-turned) .pd-holds { padding: calc(${({theme:e})=>e.space} / 4) calc(${({theme:e})=>e.space} / 3); }
                .pd-book:not(.pa-turned) .pd-pages { padding: 0 calc(${({theme:e})=>e.space} * 0.6667) calc(${({theme:e})=>e.space} * 2.5); }
                .pd-book:not(.pa-turned) .pd-pages .pa-volume .pd-word.pd-entry-count { display: none; }
                .pd-book.pa-layout:not(.pa-turned) .pd-head { padding: calc(${({theme:e})=>e.space} * 0.75) calc(${({theme:e})=>e.space} * 0.6667) calc(${({theme:e})=>e.space} / 3); }
            }
        `}};r(pe,"$ListLayout");let j=pe;const se=class se extends j{areas(){return i`
            ${super.areas()}
            .pd-book.pa-layout:not(.pa-turned) {
                grid-template-columns: 220px minmax(0, 1fr) 320px;
                grid-template-areas: 'library library library' 'holds head knowledge' 'holds pages knowledge';
            }
            .pa-layout .pd-knowledge-column { grid-area: knowledge; min-width: 0; overflow-y: auto; }
            .pd-book .pd-head .pd-paragraph.pd-search { width: min(720px, 100%); max-width: 100%; box-sizing: border-box; }
            .pd-book:not(.pa-turned) .pd-pages .pd-chapter.pa-page.pa-synopsis { max-width: none; }
            .pd-book:not(.pa-turned) .pd-pages .pd-chapter.pa-page.pa-volume { grid-template-columns: minmax(0, 1fr) auto auto; grid-template-areas: 'title day open' 'synopsis synopsis synopsis'; column-gap: calc(${({theme:e})=>e.space} * 0.6); }
            .pd-book.pa-synopses:not(.pa-turned) .pd-pages .pd-chapter.pa-page.pa-volume { grid-template-columns: minmax(0, 1fr) auto auto auto; grid-template-areas: 'title count day open' 'synopsis synopsis synopsis synopsis'; }
            .pd-book:not(.pa-synopses):not(.pa-turned) .pd-pages .pa-volume .pd-word.pd-entry-count { display: none; }
            .pd-book:not(.pa-turned) .pd-pages .pa-volume > time.pd-date { display: none; }
            .pd-book:not(.pa-turned) .pd-pages .pa-volume .pd-word.pd-entry-day { grid-area: day; min-width: 0; font-family: ${({theme:e})=>e.font}; font-size: calc(0.8571 * ${({theme:e})=>e.size}); line-height: 20px; color: ${({theme:e})=>e.faint}; white-space: nowrap; font-variant-numeric: tabular-nums; }
            .pd-book:not(.pa-turned) .pd-pages .pa-volume .pd-title { font-weight: 400; }
            .pd-book:not(.pa-turned) .pd-pages .pa-volume .pd-way-on-link { padding: 0 2px; font-size: ${({theme:e})=>e.size}; letter-spacing: 0; text-transform: none; opacity: 0; transition: opacity 0.15s; }
            .pd-book:not(.pa-turned) .pd-pages .pa-volume:hover .pd-way-on-link { opacity: 1; }
            .pd-book:not(.pa-turned) .pd-pages .pa-volume .pd-way-on-link:hover { color: ${({theme:e})=>e.accent}; }
            .pd-book.pa-turned .pd-knowledge-column { display: none; }
            .pd-book:not(.pa-turned) .pd-pages .pd-chapter.pa-page.pa-synopsis:not(.pa-volume) { display: none; }
            @media (max-width: ${({theme:e})=>e.narrow}) {
                .pd-book.pa-layout:not(.pa-turned) .pd-knowledge-column { order: 4; }
            }
        `}};r(se,"$ProjectLayout");let J=se;const na=r((h,e,a=Oe,o=!0)=>{const n=t(ga),s=t(fa),d=t(a),l=t(m);let g="";for(const f of e){const be=Ie(f),we=f.annotations.expressed(y)?.cover?.mention?.identifier;f.text.add(h,...o&&be!==g?[p(s,{},"month")]:[],p(n,{},"count"),...we===void 0?[]:[p(d,{entry:f,children:p(l,{children:we})},"open")]),g=be}},"rows"),de=class de extends Ze{constructor(){super(...arguments),this.specification=new $}$Define(){super.$Define(),this.$is=[Le,Ee]}get entries(){return this._entries??(this._entries=this.text.find(N).filter(e=>e.is(x)&&e!==this.synopsis))}get files(){return this.chapters.filter(e=>e.is(P)&&e.is(w))}get project(){return this.chapters.find(e=>e.is(P)&&!e.is(w))}get laidOutChapters(){return[...super.laidOutChapters,...this.entries]}get pages(){const e=[...this.entries].sort((a,o)=>B(o).localeCompare(B(a)));return[...super.pages,...e]}get open(){return this.$bookmark===void 0?void 0:this.chapterAt(this.$bookmark)}get index(){return this.table?.annotations.expressed(je)}get searchHint(){return"a word in this project, its conversations and its files"}found(e){const a=e.trim().toLowerCase();if(a==="")return[];const o=this.pages.filter(s=>this.entries.includes(s)&&this.wordsOf(s).lower.includes(a)),n=this.files.filter(s=>(s.title?.name??"").toLowerCase().includes(a));return[...o,...n]}placeOf(e){return e.annotations.expressed(y)?.cover?.mention?.identifier??super.placeOf(e)}countOfFound(e,a){const o=e.filter(s=>this.files.includes(s)).length,n=e.length-o;return c(b,{children:[p("b",{children:n})," of ",this.entries.length," conversations and ",p("b",{children:o})," of ",this.files.length," files say “",a,"”"]})}aboveThePages(){const e=t(He);return p(e,{chapter:this.table})}write(){const e=t(ma);return c(b,{children:[super.write(),p("div",{className:"pd-knowledge-column",children:p(e,{chapter:this.cover})})]})}head(){const e=t(this.cover),a=t(ua),o=t(ha),n=t(Me);return c(b,{children:[p(e,{}),p(a,{chapter:this.cover}),p(o,{chapter:this.cover}),p(n,{chapter:this.cover})]})}rows(e,a=Oe){na(this,e,a,!1);const o=t(Je);for(const n of e)n.text.add(this,p(o,{entry:n},"day"))}$Bound(){this.rows(this.pages.filter(o=>this.entries.includes(o)));const e=this.index;e!==void 0&&(e.$folded=!0,e.$counted=!0,e.$dated=!0,e.$searched=!0),super.$Bound();const a=this.table?.text.find(Ae).find(o=>o.canonical?.name==="Its conversations");if(a!==void 0){const o=r(s=>{const d=this.chapterAt(Ce(s)?.identifier??"");return d===void 0?0:Date.parse(B(d))},"dayOfRow"),n=a.text.find(v).sort((s,d)=>o(d)-o(s));for(const s of n)a.text.remove(this,s);a.text.append(this,...n)}}};r(de,"$ProjectManual");let O=de;S([ye()],O.prototype,"_entries",2);const re=class re extends _e{$everyEntryStandsForAConversation(e){const a=e.entries.find(o=>o.annotations.expressed(x)?.means===void 0);u(a===void 0,`every entry of a project manual stands for a conversation, holding its synopsis, and "${a?.title?.name}" stands for none`)}$hasOneProjectChapter(e){u(e.chapters.filter(a=>a.is(P)&&!a.is(w)).length===1,"a project manual has one chapter about the project, which appends no file, and this one has none or more than one")}$onlyAChapterAppends(e){const a=[...e.chapters,...e.entries];u(e.text.find(N).every(o=>a.includes(o)||!o.is(w)),"only an ordinary chapter or an entry files a file, and here a cover, a synopsis or a table of contents files one")}};r(re,"ProjectManualSpecification");let $=re;S([k("every entry of a project manual stands for a conversation, holding its synopsis")],$.prototype,"$everyEntryStandsForAConversation",1);S([k("a project manual has one chapter about the project, which appends no file")],$.prototype,"$hasOneProjectChapter",1);S([k("an entry of a project manual files a file only when a chapter may")],$.prototype,"$onlyAChapterAppends",1);const pa=t(W),sa=t(L),da=t(E),ra=t(H),ia=t(M);t(j);const ca=t(J),la=t(O),ha=pa,ga=sa,fa=da,ua=ra,ma=ia;t(la,Fe)(ca);const ie=class ie extends Ye{constructor(){super(...arguments),this.serif="'Source Serif 4', Georgia, serif",this.paper="#fdfcfa",this.ink="#343c4a",this.soft="#727d8c",this.faint="#9ea8b5",this.line="#e4e9f2",this.tint="#f0f4fc",this.barTint="#f8fafe",this.sky="#e3edfb",this.skyInk="#4a6ea0",this.accent="#4a6ea0",this.wash="linear-gradient(135deg, #f2f6fd 0%, #fdfcfa 48%, #fdf6f1 100%)",this.side="#f7f8fb",this.sideInk="#3a4452",this.sideDim="#7f8a9b",this.sideLine="#e3e7ee",this.barHeight="52px",this.holdsColumn="232px",this.space="24px",this.cover="132px",this.volume="184px",this.radius="6px",this.spine="inset 3px 0 0 rgba(0, 0, 0, 0.08), inset 4px 0 0 rgba(255, 255, 255, 0.35), 0 6px 12px -10px rgba(44, 52, 64, 0.3)",this.lift="inset 3px 0 0 rgba(0, 0, 0, 0.08), inset 4px 0 0 rgba(255, 255, 255, 0.35), 0 10px 16px -12px rgba(44, 52, 64, 0.35)",this.openSpine="inset 7px 0 0 rgba(0, 0, 0, 0.07), inset 9px 0 0 rgba(255, 255, 255, 0.45), 0 12px 22px -16px rgba(44, 52, 64, 0.35)"}parts(){return[...super.parts(),this.shelf(),this.jackets(),this.desk(),this.unfolded(),this.small()]}page(){return i`
            font-family: ${({theme:e})=>e.font};
            font-size: ${({theme:e})=>e.size};
            line-height: 1.55;
            color: ${({theme:e})=>e.ink};
            background: ${({theme:e})=>e.wash};
            min-height: 100vh;
        `}library(){return i`
            ${super.library()}
            .pd-names .pd-name { font-family: ${({theme:e})=>e.serif}; font-size: calc(1.286 * ${({theme:e})=>e.size}); font-weight: 700; letter-spacing: -0.015em; }
        `}head(){return i`
            .pd-head { padding: 0; }
            .pd-head .pa-illustration { display: none; }
        `}holds(){return i`
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
        `}shelf(){return i`
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
        `}jackets(){return i`
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
        `}desk(){return i`
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
        `}unfolded(){return i`
            .pa-unfolded-desk .pd-shelf { display: none; }
            .pa-unfolded-desk .pd-container.pd-catalogue-desk.pa-open { height: auto; margin-block-end: 0; }
            .pa-unfolded-desk .pd-container.pd-catalogue-desk.pa-open .pd-paragraph.pd-jacket { position: sticky; top: calc(${({theme:e})=>e.space} * 0.833); }
            .pa-unfolded-desk .pd-container.pd-catalogue-desk.pa-open .pd-words { max-height: none; max-width: 72ch; overflow: visible; mask-image: none; }
            .pa-unfolded-desk .pd-container.pd-catalogue-desk.pa-open .pd-words .pd-paragraph { font-size: calc(1.143 * ${({theme:e})=>e.size}); line-height: 1.6; }
            .pa-unfolded-desk .pd-container.pd-catalogue-desk.pa-open .pd-word.pd-switch { top: calc(${({theme:e})=>e.space} * 0.667); right: ${({theme:e})=>e.space}; bottom: auto; }
            .pa-unfolded-desk .pd-container.pd-catalogue-desk.pa-open .pd-word.pd-switch::after { transform: translateY(calc(${({theme:e})=>e.space} / 24)) rotate(180deg); }
        `}context(){return i`
            ${super.context()}
            .pd-book.pa-manual .pd-holds .pd-tree-folder { margin-block-start: 0; }
            .pd-book.pa-manual .pd-holds .pd-section.pa-appendix { margin-block-start: 0; padding-block-start: 0; border-block-start: 0; opacity: 1; }
            .pd-book.pa-manual .pd-holds .pd-section.pa-appendix .pd-heading { font-size: calc(0.75 * ${({theme:e})=>e.size}); }
            .pd-book.pa-manual .pd-holds .pd-section.pa-appendix .pa-entry { font-size: calc(0.964 * ${({theme:e})=>e.size}); font-weight: 500; }
            .pd-book.pa-manual .pd-holds .pd-section.pa-appendix .pa-entry::before { background: ${({theme:e})=>e.skyInk}; }
            .pd-book.pa-manual .pd-shelf { display: none; }
        `}small(){return i`
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
        `}};r(ie,"$Bookshelf");let Y=ie;const $a=t(Y);var ka=Object.defineProperty,ba=Object.getOwnPropertyDescriptor,R=r((h,e,a,o)=>{for(var n=o>1?void 0:o?ba(e,a):e,s=h.length-1,d;s>=0;s--)(d=h[s])&&(n=(o?d(e,a,n):d(n))||n);return o&&n&&ka(e,a,n),n},"__decorateClass");const ce=class ce extends Ke{get books(){return this.text.find(N).filter(e=>e.is(x)&&e!==this.synopsis)}get laidOutChapters(){return[...super.laidOutChapters,...this.books]}get pages(){return[this.synopsis,...this.books,...this.chapters]}head(){return p("div",{className:"pd-switches",children:this.switches()})}belowThePages(){return p("div",{className:"pd-shelf",children:this.volumes()})}volumes(){const e=t(z),a=t(m);return(this.table?.annotations.expressed(je)?.entries??[]).map((n,s)=>{const d=Ce(n).identifier,l=this.chapterAt(d),g=l===void 0?this.coverOf(d):this.jacketOf(l);if(g!==void 0)return c("div",{className:"pd-volume",children:[this.jacket(g,d),p("div",{className:"pd-paragraph pd-name",children:c(e,{children:[p(a,{children:d}),g.title.name]})})]},s)})}jacket(e,a){if(e===void 0)return;const o=t(qe),n=t(m);return a===void 0?p(o,{cover:e}):p(o,{cover:e,children:p(n,{children:a})})}line(e){if(e===void 0)return;const a=t(Qe),o=t(Xe);return c(b,{children:[p(a,{cover:e}),p(o,{cover:e})]})}wayIntoTheBook(e){if(e===void 0)return;const a=t(z),o=t(m),n=e.mention.identifier;return p("div",{className:"pd-paragraph pd-read",children:c(a,{children:[p(o,{children:n}),`Read ${e.title.name}`]})})}jacketOf(e){return e===this.synopsis?this.cover:e.annotations.expressed(y)?.cover??(this.appendix.includes(e)?void 0:this.cover)}coverOf(e){return super.coverOf(e)??this.books.map(a=>a.annotations.expressed(y)?.cover).find(a=>a!==void 0&&a.mention?.identifier===e)}chapterAt(e){return super.chapterAt(e)??this.books.find(a=>this.placeOf(a)===e)}placeOf(e){const a=e.title?.annotations.expressed(Se)?.identifier,o=this.means?.identifier;if(!(a===void 0||o===void 0))return`${o.replace(/\/+$/u,"")}/#${a}`}$Bound(){const e=t(xa);for(const a of[this.synopsis,...this.books])a?.annotations.add(this,p(e,{}));super.$Bound()}};r(ce,"$Catalogue");let V=ce;const le=class le extends Re{constructor(){super(...arguments),this.specification=new C,this.card=ve.div`
        &:not(.pa-open) { display: none; }
    `}get chapter(){return this.parent}get catalogue(){return this.book}get isTheFront(){return this.chapter===this.catalogue.synopsis}get cover(){return this.catalogue.jacketOf(this.chapter)}$CatalogueDesk(...e){this.$Format(...e);const a=t(ze),o=this.card;this.style=({className:n,children:s})=>{const d=this.catalogue,l=this.cover,g=[...this.chapter.classes].includes("pa-open"),f=this.isTheFront?t(d.title):void 0;return d.painted(l,c(o,{className:`${n??""} pd-catalogue-desk${g?" pa-open":""}`.trim(),children:[d.jacket(l),c("div",{className:"pd-words",children:[f===void 0?void 0:p(f,{}),s]}),l===void 0||this.isTheFront?void 0:p("div",{className:"pd-line",children:d.line(l)}),d.wayIntoTheBook(l),l===void 0?void 0:p(a,{chapter:this.chapter,annotation:va,children:"read on"})]}))}}defines(e){super.defines(e),e.classes.add(this,"pa-catalogue-desk")}erase(e){super.erase(e),e.classes.revert(this)}};r(le,"$CatalogueDesk");let G=le;const he=class he extends Z{$holdsASynopsis(e){u(e instanceof N&&e.is(x),"a catalogue desk holds a synopsis, and this is not one")}};r(he,"CatalogueDeskSpecification");let C=he;R([k("a catalogue desk holds a synopsis")],C.prototype,"$holdsASynopsis",1);const ge=class ge extends Be{get identifier(){return this._book??super.identifier}$Bound(){super.$Bound(),this._book=this.chapter?.annotations.expressed(x)?.means?.identifier}};r(ge,"$BookLink");let I=ge;R([ye()],I.prototype,"_book",2);const fe=class fe extends T{constructor(){super(...arguments),this.specification=new D}defines(e){e.classes.add(this,"pa-caption")}erase(e){e.classes.revert(this)}};r(fe,"$Caption");let K=fe;const ue=class ue extends T{constructor(){super(...arguments),this.specification=new A}defines(e){e.classes.add(this,"pa-arrow")}erase(e){e.classes.revert(this)}};r(ue,"$Arrow");let q=ue;const me=class me extends T{constructor(){super(...arguments),this.specification=new xe}defines(e){e.classes.add(this,"pa-unfolded-desk")}erase(e){e.classes.revert(this)}};r(me,"$UnfoldedDesk");let Q=me;const $e=class $e extends Z{$isAParagraph(e){u(e instanceof v,"a caption is a paragraph, and this is not one")}};r($e,"CaptionSpecification");let D=$e;R([k("a caption is a paragraph")],D.prototype,"$isAParagraph",1);const ke=class ke extends Z{$isAWordOfTheTable(e){u(e instanceof X&&e.chapter?.is(Pe)===!0,"an arrow is a word of the table of contents, and this is not one")}};r(ke,"ArrowSpecification");let A=ke;R([k("an arrow is a word of the table of contents")],A.prototype,"$isAWordOfTheTable",1);const _=t(V),wa=t(G),ya=t(I),Na=t(K),Sa=t(q),va=t(Q),xa=wa;t(_,Te)(ya);t(_,Ne)($a);t(_,Ve)(Ge);export{j as $,Sa as A,Na as C,pa as R,O as a,na as r};
