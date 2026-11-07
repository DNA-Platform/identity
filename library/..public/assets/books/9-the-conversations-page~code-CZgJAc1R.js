var q=Object.defineProperty;var i=(g,e)=>q(g,"name",{value:e,configurable:!0});import{jsx as t,jsxs as r,Fragment as b}from"react/jsx-runtime";import{$ as d,$check as J,selection as K}from"@dna-platform/chemistry";import{specify as X,$Annotation as Q,$Code as B,identifier as Y,html as k,AnnotationSpecification as Z,$Chapter as V,$Paragraph as T,Theme as ee,Word as U,Reference as G,binder as oe,$Referent as pe,$Section as te}from"@dna-platform/public";import{T as ae,L as de,A as ie,C as re,c as ne,S as se,R as le,f as ce,G as he,d as fe}from"./.cover-CTiiXUGF.js";import{i as ge,j as w,k as be,l as me,a as ue,n as xe,h as ke,o as we,p as ye}from"./8-the-origin~code-PcSNBEed.js";import{css as f}from"styled-components";const L=class L extends ge{constructor(){super(...arguments),this.sans="'Inter', system-ui, sans-serif",this.mono="ui-monospace, 'Cascadia Code', Consolas, monospace",this.keyword="#1f5fbf",this.string="#9a3b1e",this.type="#116b4a",this.comment="#7a8491"}parts(){return[...super.parts(),this.surfaces(),this.top(),this.rows(),this.openDay(),this.exchanges(),this.said(),this.cards(),this.paneColumn(),this.phone()]}surfaces(){return f`
            .pd-book .pd-library { background: linear-gradient(180deg, #ffffff 0%, #ffffff 84%, #fbfcfe 100%); }
            .pd-book .pd-me { background: linear-gradient(180deg, #ffffff 0%, #ffffff 84%, #fbfcfe 100%); }
            .pd-book .pd-holds { background: linear-gradient(90deg, #ffffff 0%, #ffffff 88%, #fbfcfe 100%); }
            .pd-book.pa-layout:not(:has(.pd-holds .pd-paragraph.pa-entry)) { grid-template-columns: minmax(0, 1fr); grid-template-areas: 'library' 'head' 'pages'; }
            .pd-book.pa-layout:not(:has(.pd-holds .pd-paragraph.pa-entry)):has(> .pd-pane > .pd-pane-bar) { grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); grid-template-areas: 'library library' 'head pane' 'pages pane'; }
            .pd-book.pa-layout:not(:has(.pd-holds .pd-paragraph.pa-entry)) .pd-holds { display: none; }
            ::highlight(pd-found) { background: #fff2a8; color: inherit; }
            .pd-book .pd-head { background: #ffffff; box-shadow: none; }
            .pd-book.pa-layout .pd-library::after { content: none; }
            .pd-book .pd-pages { background: #ffffff; }
            @media (min-width: ${({theme:e})=>e.narrow}) {
                .pd-book.pa-layout { height: 100vh; overflow-y: auto; grid-template-rows: auto auto auto; }
                .pd-book.pa-layout .pd-pages { overflow: visible; }
                .pd-book.pa-layout .pd-library, .pd-book.pa-layout .pd-me { position: sticky; top: 0; z-index: 3; }
                .pd-book.pa-layout .pd-holds { position: sticky; top: ${({theme:e})=>e.barHeight}; align-self: start; max-height: calc(100vh - ${({theme:e})=>e.barHeight}); }
            }
        `}top(){return f`
            .pd-book .pd-head .pd-switches, .pd-book .pd-head .pa-illustration { display: none; }
            .pd-book .pd-head .pd-title { font-family: ${({theme:e})=>e.serif}; font-size: 30px; font-weight: 600; line-height: 1.1; letter-spacing: -.01em; }
            .pd-book .pd-head .pd-participants { display: flex; gap: 6px; align-items: center; margin: 6px 0 0; font-family: ${({theme:e})=>e.sans}; font-size: 13px; color: ${({theme:e})=>e.soft}; }
            .pd-book .pd-head .pd-participants::before { content: 'between'; }
            .pd-book .pd-head .pd-participants .pa-reference { color: ${({theme:e})=>e.ink}; font-weight: 500; text-decoration: none; }
            .pd-book .pd-head .pd-participants .pa-reference:hover { color: ${({theme:e})=>e.accent}; }
            .pd-book .pd-head .pd-tally { display: flex; flex-wrap: wrap; gap: 4px 16px; margin: 6px 0 0; font-family: ${({theme:e})=>e.sans}; font-size: 12.5px; color: ${({theme:e})=>e.soft}; }
            .pd-book .pd-head .pd-tally b { color: ${({theme:e})=>e.ink}; font-weight: 500; }
        `}rows(){return f`
            .pd-book .pd-holds .pd-chapter { display: flex; flex-direction: column; }
            .pd-book .pd-holds .pd-section.pa-appendix { display: none; }
            .pd-book .pd-holds .pd-section > .pd-heading { margin: 0 0 4px 18px; font-family: ${({theme:e})=>e.sans}; font-size: 10.5px; font-weight: 600; line-height: 1.4; letter-spacing: .12em; text-transform: uppercase; color: ${({theme:e})=>e.faint}; }
            .pd-book .pd-holds .pd-paragraph.pa-entry { display: flex; align-items: center; gap: 9px; padding: 6px 18px 6px 16px; font-family: ${({theme:e})=>e.sans}; font-size: 13px; color: ${({theme:e})=>e.ink}; }
            .pd-book .pd-holds .pd-paragraph.pa-entry::before { content: ''; flex: none; width: 7px; height: 7px; border-radius: 50%; background: ${({theme:e})=>e.sea}; }
            .pd-book .pd-holds .pd-paragraph.pa-entry .pd-day-count { margin-inline-start: auto; font-size: 11px; color: ${({theme:e})=>e.faint}; }
            .pd-book .pd-holds .pd-paragraph.pa-entry:hover { background: #f8fafc; }
            .pd-book .pd-holds .pd-paragraph.pa-entry.pa-open { background: linear-gradient(90deg, #eff4fa, #f8fafd); color: ${({theme:e})=>e.heading}; font-weight: 500; }
            ${this.sideIndex()}
        `}sideIndex(){return f`
            .pd-book .pd-holds { padding: 0 0 24px; }
            .pd-book .pd-holds .pd-paragraph.pd-search { display: flex; flex-direction: row; flex-wrap: nowrap; align-items: center; gap: 8px; margin: 14px 14px 6px; padding: 6px 10px; border: 1px solid ${({theme:e})=>e.line}; border-radius: 9px; background: #ffffff; color: ${({theme:e})=>e.soft}; font-family: ${({theme:e})=>e.sans}; font-size: 13px; line-height: 20px; }
            .pd-book .pd-holds .pd-search .pd-search-mark { flex: none; font-style: normal; font-size: 16px; line-height: 1; color: ${({theme:e})=>e.faint}; }
            .pd-book .pd-holds .pd-search .pd-search-word { flex: 1; min-width: 0; border: 0; background: none; padding: 0; font: inherit; color: ${({theme:e})=>e.ink}; outline: none; }
            .pd-book .pd-holds .pd-search .pd-search-word::placeholder { color: ${({theme:e})=>e.faint}; }
            .pd-book .pd-holds .pd-chapter.pa-table-of-contents.pa-searching { display: none; }
            .pd-book .pd-holds .pd-paragraph.pd-results { display: block; margin: 0; padding: 0 0 20px; }
            .pd-book .pd-holds .pd-results .pd-results-count { display: block; padding: 10px 18px 6px; font-family: ${({theme:e})=>e.sans}; font-size: 12px; line-height: 1.5; color: ${({theme:e})=>e.soft}; }
            .pd-book .pd-holds .pd-results .pd-results-count b { color: ${({theme:e})=>e.ink}; font-weight: 500; }
            .pd-book .pd-holds .pd-paragraph.pd-result { position: relative; display: grid; grid-template-columns: 38px minmax(0, 1fr); column-gap: 6px; margin: 0; padding: 4px 14px 5px 18px; font-family: ${({theme:e})=>e.sans}; font-size: 11.5px; line-height: 1.4; color: ${({theme:e})=>e.soft}; }
            .pd-book .pd-holds .pd-result:hover { background: #eef4f7; color: ${({theme:e})=>e.ink}; }
            .pd-book .pd-holds .pd-result .pd-result-title { font-weight: 500; color: ${({theme:e})=>e.faint}; }
            .pd-book .pd-holds .pd-result .pd-result-synopsis { display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
            .pd-book .pd-holds .pd-result mark { background: #fff2a8; color: inherit; padding: 0 1px; border-radius: 2px; }
            .pd-book .pd-holds .pd-result > a:has(> .pd-entry-open) { position: absolute; inset: 0; z-index: 1; }
            .pd-book .pd-holds .pd-paragraph.pa-entry { flex-wrap: wrap; }
            .pd-book .pd-holds .pd-paragraph.pa-entry::before { content: none; }
            .pd-book .pd-holds .pd-paragraph.pa-entry.pa-open { box-shadow: inset 3px 0 0 #1f5a60; }
            .pd-book .pd-holds .pd-paragraph.pa-entry > a:first-child, .pd-book .pd-holds .pd-paragraph.pa-entry > .pa-content { order: 0; flex: 1 1 auto; min-width: 0; }
            .pd-book .pd-holds .pd-paragraph.pa-entry .pd-day-count { order: 1; }
            .pd-book .pd-holds .pd-paragraph.pa-entry:not(.pa-open) .pd-file-tab { display: none; }
            .pd-book .pd-holds .pd-paragraph.pa-entry .pd-word.pd-file-tab { order: 2; display: flex; align-items: center; gap: 8px; flex: 0 0 calc(100% + 34px); height: 26px; margin: 2px -18px 0 -16px; padding: 0 14px 0 34px; border: 0; border-radius: 0; background: none; font-family: ${({theme:e})=>e.sans}; font-size: 12px; font-weight: 400; line-height: 1; color: ${({theme:e})=>e.soft}; text-align: start; cursor: pointer; }
            .pd-book .pd-holds .pd-paragraph.pa-entry .pd-file-tab:hover { background: #eef4f7; color: ${({theme:e})=>e.ink}; }
            .pd-book .pd-holds .pd-paragraph.pa-entry .pd-file-tab[aria-pressed='true'] { background: #eef5f6; color: #1f5a60; font-weight: 500; }
            .pd-book .pd-holds .pd-paragraph.pa-entry .pd-file-tab .pd-drawing { flex: none; width: 14px; height: 14px; color: #a5aebb; }
            .pd-book .pd-holds .pd-paragraph.pa-entry .pd-file-tab .pd-drawing svg { display: block; width: 100%; height: 100%; }
            .pd-book .pd-holds .pd-paragraph.pa-entry .pd-file-tab .pd-tab-name { min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
            .pd-book .pd-holds .pd-paragraph.pa-entry .pd-file-tab small { margin-inline-start: auto; font-size: 10.5px; color: ${({theme:e})=>e.faint}; white-space: nowrap; }
            .pd-book .pd-holds .pd-paragraph.pd-outline { display: block; margin: 0; }
            .pd-book .pd-holds:has(.pd-chapter.pa-table-of-contents.pa-searching) .pd-paragraph.pd-outline { display: none; }
            .pd-book .pd-holds .pd-outline .pd-asked { margin: 0; padding: 2px 0 8px; list-style: none; counter-reset: asked; }
            .pd-book .pd-holds .pd-outline .pd-asked li { counter-increment: asked; }
            .pd-book .pd-holds .pd-outline .pd-asked li > a, .pd-book .pd-holds .pd-outline .pd-asked li > .pd-word { display: grid; grid-template-columns: 22px minmax(0, 1fr); column-gap: 6px; padding: 3px 14px 3px 24px; font-family: ${({theme:e})=>e.sans}; font-size: 11.5px; line-height: 1.35; color: ${({theme:e})=>e.soft}; text-decoration: none; }
            .pd-book .pd-holds .pd-outline .pd-asked li > a::before, .pd-book .pd-holds .pd-outline .pd-asked li > .pd-word::before { content: counter(asked); font-size: 10px; color: ${({theme:e})=>e.faint}; font-variant-numeric: tabular-nums; text-align: end; padding-inline-end: 2px; line-height: 15.5px; }
            .pd-book .pd-holds .pd-outline .pd-asked li > a > .pd-word { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; color: inherit; }
            .pd-book .pd-holds .pd-outline .pd-asked li > a:hover { color: ${({theme:e})=>e.ink}; background: #eef4f7; }
        `}openDay(){return f`
            .pd-book .pd-pages .pd-chapter.pa-page { width: 100%; max-width: 768px; margin: 0 auto; }
            .pd-book .pd-pages .pa-page > .pd-title, .pd-book .pd-pages .pa-page > a.pa-self-reference .pd-title { margin: 0 0 22px; font-family: ${({theme:e})=>e.sans}; font-size: 11.5px; font-weight: 600; line-height: 1.4; letter-spacing: .14em; text-transform: uppercase; color: ${({theme:e})=>e.faint}; }
            .pd-book .pd-pages .pd-turn, .pd-book .pd-pages .pa-page > .pd-word.pd-date { display: none; }
        `}exchanges(){return f`
            .pd-book .pd-pages .pd-message { position: relative; display: block; margin: 0 0 28px; }
            .pd-book .pd-pages .pd-message > .pa-self-reference, .pd-book .pd-pages .pd-message .pd-heading.pd-speaker { display: none; }
            .pd-book .pd-pages .pd-message > .pd-word.pd-time { position: absolute; top: -17px; left: 0; display: block; width: auto; margin: 0; font-family: ${({theme:e})=>e.sans}; font-size: 11px; font-weight: 500; line-height: 1; color: ${({theme:e})=>e.faint}; opacity: 0; transition: opacity .15s; }
            .pd-book .pd-pages .pd-message > .pd-word.pd-time::before { content: none; }
            .pd-book .pd-pages .pd-message.pa-mine > .pd-word.pd-time { left: auto; right: 0; }
            .pd-book .pd-pages .pd-message:hover > .pd-word.pd-time { opacity: 1; }
            .pd-book .pd-pages .pd-message > .pd-said { display: flex; flex-direction: column; gap: 10px; min-width: 0; overflow-wrap: anywhere; }
            .pd-book .pd-pages .pd-message.pa-mine > .pd-said { margin-inline-start: auto; width: fit-content; max-width: 78%; padding: 12px 16px; border-radius: 12px; background: rgba(11, 11, 11, .05); gap: 8px; }
        `}said(){return f`
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
        `}cards(){return f`
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
        `}paneColumn(){return f`
            .pd-book.pa-layout:has(> .pd-pane > .pd-pane-bar) {
                grid-template-columns: ${({theme:e})=>e.holdsColumn} minmax(0, 1fr) minmax(0, 1fr);
                grid-template-areas: 'library library library' 'holds head pane' 'holds pages pane';
            }
            ${this.strip()}
        `}strip(){return f`
            .pd-book.pa-layout:has(> .pd-project-strip:not(:empty)) { grid-template-rows: auto auto auto minmax(0, 1fr); grid-template-areas: 'library library' 'strip strip' 'holds head' 'holds pages'; }
            .pd-book.pa-layout:has(> .pd-project-strip:not(:empty)):has(> .pd-pane > .pd-pane-bar) { grid-template-areas: 'library library library' 'strip strip strip' 'holds head pane' 'holds pages pane'; }
            .pd-book.pa-layout:has(> .pd-project-strip:not(:empty)):not(:has(.pd-holds .pd-paragraph.pa-entry)) { grid-template-areas: 'library' 'strip' 'head' 'pages'; }
            .pd-book.pa-layout:has(> .pd-project-strip:not(:empty)):not(:has(.pd-holds .pd-paragraph.pa-entry)):has(> .pd-pane > .pd-pane-bar) { grid-template-areas: 'library library' 'strip strip' 'head pane' 'pages pane'; }
            .pd-book .pd-paragraph.pd-project-strip { grid-area: strip; display: flex; align-items: center; gap: 14px; min-width: 0; height: 40px; margin: 0; padding: 0 18px; background: #ffffff; border-block-end: 1px solid ${({theme:e})=>e.line}; font-family: ${({theme:e})=>e.sans}; font-size: 12.5px; line-height: 1.4; color: ${({theme:e})=>e.soft}; }
            .pd-book .pd-paragraph.pd-project-strip:empty { display: none; }
            .pd-book .pd-project-strip .pd-scheme { flex: none; }
            .pd-book .pd-project-strip > a:first-child { flex: none; display: block; line-height: 0; text-decoration: none; }
            .pd-book .pd-project-strip .pd-word.pd-mark { transform: scale(.8); transform-origin: left center; }
            .pd-book .pd-project-strip .pd-mark .pd-drawing svg { display: block; }
            .pd-book .pd-project-strip .pd-strip-words { display: flex; align-items: baseline; gap: 8px; min-width: 0; }
            .pd-book .pd-project-strip .pd-strip-words .pd-word.pa-reference { color: ${({theme:e})=>e.heading}; text-decoration: none; font-family: 'Source Sans 3', ${({theme:e})=>e.sans}; font-size: 14px; font-weight: 600; letter-spacing: -.01em; white-space: nowrap; }
            .pd-book .pd-project-strip .pd-strip-words .pd-word.pa-reference:hover { text-decoration: underline; text-underline-offset: 3px; }
            .pd-book .pd-project-strip .pd-strip-place { color: ${({theme:e})=>e.faint}; font-variant-numeric: tabular-nums; white-space: nowrap; }
            .pd-book .pd-project-strip .pd-strip-neighbours { display: flex; align-items: center; gap: 14px; min-width: 0; }
            .pd-book .pd-project-strip .pd-strip-neighbours .pd-word.pa-reference { color: ${({theme:e})=>e.soft}; text-decoration: none; max-width: 30ch; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
            .pd-book .pd-project-strip .pd-strip-neighbours .pd-word.pa-reference:hover { color: ${({theme:e})=>e.accent}; }
            .pd-book .pd-project-strip .pd-strip-word { flex: none; font-size: 11.5px; color: ${({theme:e})=>e.faint}; font-style: italic; white-space: nowrap; }
            .pd-book .pd-project-strip > a:last-child, .pd-book .pd-project-strip > .pd-word:last-child { margin-inline-start: auto; }
            .pd-book .pd-project-strip > a:last-child .pd-word.pa-reference, .pd-book .pd-project-strip > .pd-word:last-child { flex: none; padding: 3px 11px; border: 1px solid ${({theme:e})=>e.line}; border-radius: 999px; color: ${({theme:e})=>e.ink}; text-decoration: none; font-weight: 500; white-space: nowrap; }
            .pd-book .pd-project-strip > a:last-child .pd-word.pa-reference:hover { border-color: #c0c9df; color: ${({theme:e})=>e.accent}; }
            @media (max-width: ${({theme:e})=>e.narrow}) {
                .pd-book .pd-paragraph.pd-project-strip { order: 0; height: auto; min-height: 40px; padding: 6px 14px; flex-wrap: wrap; gap: 6px 10px; }
                .pd-book .pd-project-strip .pd-strip-neighbours, .pd-book .pd-project-strip .pd-strip-word { display: none; }
            }
        `}phone(){return f`
            @media (max-width: ${({theme:e})=>e.narrow}) {
                .pd-book .pd-pages .pd-message.pa-mine > .pd-said { max-width: 92%; }
                .pd-book .pd-head .pd-title { font-size: 24px; }
                .pd-book.pa-layout:has(> .pd-pane > .pd-pane-bar) { grid-template-columns: minmax(0, 1fr); grid-template-areas: 'library' 'head' 'pages'; }
            }
        `}};i(L,"$ApplicationForm");let $=L;const $e=d($);var ve=Object.defineProperty,je=Object.getOwnPropertyDescriptor,ze=i((g,e,o,a)=>{for(var p=je(e,o),n=g.length-1,l;n>=0;n--)(l=g[n])&&(p=l(e,o,p)||p);return p&&ve(e,o,p),p},"__decorateClass");const Ce='<svg viewBox="0 0 24 24"><path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4M9 12h6M9 16h6"/></svg>',Ne='<svg viewBox="0 0 24 24"><path d="M8 7l-5 5 5 5M16 7l5 5-5 5M13 5l-2 14"/></svg>',m=i(g=>{const e=g.book;return e!==void 0&&"$shown"in e?e:void 0},"showingBook"),M=class M extends Q{constructor(){super(...arguments),this.specification=new y}defines(e){e.classes.add(this,"pa-version")}erase(e){e.classes.revert(this)}};i(M,"$Version");let v=M;const D=class D extends Z{$saidOfAChapter(e){J(e instanceof V,"a version is said of a chapter, and this is not one")}};i(D,"VersionSpecification");let y=D;ze([X("a version is said of a chapter")],y.prototype,"$saidOfAChapter");const R=class R extends B{constructor(){super(...arguments),this.$artifact=void 0,this.$place=void 0}get version(){const e=this.$place;if(e!==void 0)return this.book.chapters.find(o=>Y.slug(o.title?.name??"")===e)}get versionName(){return this.version?.title?.name??""}get name(){return this.versionName.replace(/ v\d+(?:-\d+)?$/u,"")||this.$identifier}get number(){return/ v(\d+)(?:-\d+)?$/u.exec(this.versionName)?.[1]??"1"}get kind(){const e=this.$type.replace(/^\./u,"");return e==="md"||e==="txt"||e===""?"document":e==="html"?"page":"code"}get shown(){return m(this)?.$shown===this}$Artifact(...e){this.$Code(...e),this.containers.replace(this,"pre","figure")}write(){const e=[...this.text].map((a,p)=>{const n=d(a);return t(n,{},p)}),o={__html:this.kind==="document"?Ce:Ne};return r(b,{children:[r("button",{type:"button",className:"pd-card","aria-pressed":this.shown,onClick:i(()=>this.press(),"onClick"),children:[t("span",{className:"pd-card-mark",dangerouslySetInnerHTML:o}),r("span",{className:"pd-card-words",children:[t("b",{children:this.name}),t("small",{children:`Click to open ${this.kind} · v${this.number}`})]})]}),t("figcaption",{children:e})]})}press(){const e=m(this);e!==void 0&&(e.$shown=e.$shown===this?void 0:this)}$Define(){super.$Define(),this.classes.add(this,"pd-artifact"),this.shown&&this.classes.add(this,"pa-open")}};i(R,"$Artifact");let u=R;const H=class H extends B{get sentence(){return k.copy(this.text)}get fileName(){return/“([^”]+)”/u.exec(this.sentence)?.[1]??"a file"}get extension(){return(this.fileName.split(".").pop()??"file").toUpperCase().slice(0,4)}get lineCount(){return this.names?this.contents.split(`
`).length:0}get shown(){return m(this)?.$shown===this}$Attachment(...e){this.$Code(...e),this.containers.replace(this,"pre","figure")}write(){const e=[...this.text].map((o,a)=>{const p=d(o);return t(p,{},a)});return r(b,{children:[r("button",{type:"button",className:"pd-chip","aria-pressed":this.shown,onClick:i(()=>this.press(),"onClick"),children:[t("span",{className:"pd-chip-mark",children:this.extension}),r("span",{className:"pd-chip-words",children:[t("b",{children:this.fileName}),t("small",{children:this.names?`${this.lineCount} lines`:"not carried by the export"})]})]}),t("figcaption",{children:e})]})}press(){const e=m(this);e!==void 0&&(e.$shown=e.$shown===this?void 0:this)}$Define(){super.$Define(),this.classes.add(this,"pd-attachment"),this.shown&&this.classes.add(this,"pa-open")}};i(H,"$Attachment");let x=H;d(v);d(u);const Je=d(x),P=class P extends T{constructor(){super(...arguments),this.style=K.div`
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
    `}get shown(){return m(this)?.$shown}get artifacts(){return this.book?.messages.flatMap(e=>e.text.find(u))??[]}$Pane(...e){this.$Writing(...e),this.containers.replace(this,"span",this.style)}neighbour(e,o){const a=Number(e.number)+o;return this.artifacts.find(p=>p.$artifact===e.$artifact&&Number(p.number)===a)}write(){const e=this.shown;if(e===void 0)return;const o=e instanceof u?e:void 0,a=e instanceof x?e:void 0,p=o?.version,n=p===void 0?void 0:d(p),l=o===void 0?void 0:this.neighbour(o,-1),s=o===void 0?void 0:this.neighbour(o,1),c=a===void 0?"":a.names?a.contents:"The export does not carry this upload; the name is all it kept.";return r(b,{children:[r("div",{className:"pd-pane-bar",children:[t("span",{className:"pd-pane-title",children:o?.name??a?.fileName}),t("span",{className:"pd-pane-kind",children:o?.kind??a?.extension.toLowerCase()}),t("button",{type:"button",className:"pd-pane-copy",onClick:i(h=>this.copy(h),"onClick"),children:"Copy"}),t("button",{type:"button",className:"pd-pane-close","aria-label":"close",onClick:i(()=>this.close(),"onClick"),children:"×"})]}),t("div",{className:"pd-pane-body",children:n===void 0?t("pre",{children:c}):t(n,{})}),o===void 0?void 0:r("div",{className:"pd-pane-foot",children:[r("span",{className:"pd-pane-version",children:[t("button",{type:"button",disabled:l===void 0,onClick:i(()=>this.show(l),"onClick"),children:"‹"}),t("span",{children:`v${o.number}`}),t("button",{type:"button",disabled:s===void 0,onClick:i(()=>this.show(s),"onClick"),children:"›"})]}),t("button",{type:"button",className:"pd-pane-download",onClick:i(()=>this.download(o),"onClick"),children:"Download"})]})]})}show(e){const o=m(this);o!==void 0&&e!==void 0&&(o.$shown=e)}close(){const e=m(this);e!==void 0&&(e.$shown=void 0)}copy(e){const o=e.currentTarget.closest(".pd-pane")?.querySelector(".pd-pane-body");navigator.clipboard?.writeText(o?.textContent??"")}download(e){const o=e.$type.replace(/^\./u,"")||"md",a=new Blob([e.contents],{type:"text/plain"}),p=document.createElement("a");p.href=URL.createObjectURL(a),p.download=`${e.name} v${e.number}.${o}`,p.click(),URL.revokeObjectURL(p.href)}$Define(){super.$Define(),this.classes.add(this,"pd-pane")}};i(P,"$Pane");let j=P;const Oe=d(j),Se='<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linejoin="round" stroke-linecap="round"><path d="M4 1.5h5.5L13 5v9.5H4z"/><path d="M9.5 1.5V5H13M6 8h4M6 10.5h4"/></svg>',W=class W extends T{$Outline(...e){this.$Writing(...e),this.containers.replace(this,"span","div")}write(){const e=this.book,o=this.$asked;if(e===void 0||o===void 0)return;const a=d(U),p=d(G),n=o.text.find(w).filter(l=>l.is(be));if(n.length!==0)return t("ol",{className:"pd-asked",children:n.map((l,s)=>{const c=e.placeOf(l),h=e.wordsOf(l).text;return t("li",{children:c===void 0?h:r(a,{children:[t(p,{children:c}),h]})},s)})})}$Define(){super.$Define(),this.classes.add(this,"pd-outline")}};i(W,"$Outline");let z=W;const A=class A extends ie{get on(){return this.$attachment?.shown===!0}press(){this.$attachment?.press()}write(){const e=this.$attachment;if(e!==void 0)return r(b,{children:[t("span",{className:"pd-drawing",dangerouslySetInnerHTML:{__html:Se}}),t("span",{className:"pd-tab-name",children:e.fileName}),t("small",{children:e.names?`${e.lineCount} lines`:"not carried"})]})}$Define(){super.$Define(),this.classes.add(this,"pd-file-tab")}};i(A,"$AttachmentTab");let C=A;const Te=d(z),Le=d(C),Me=Te,De=Le,Re="library-trail",He=i(()=>{try{const g=typeof localStorage>"u"?null:localStorage.getItem(Re);if(g===null)return;const e=JSON.parse(g);return e.from?.marking===void 0?void 0:e}catch{return}},"keptTrail"),I=class I extends re{constructor(){super(...arguments),this.$marking={drawing:"",declarations:""}}get marking(){return this.$marking}};i(I,"$TrailMark");let N=I;const E=class E extends T{get conversation(){return this.book}$ProjectStrip(...e){this.$Writing(...e),this.containers.replace(this,"span","div")}write(){const e=this.conversation,o=e?.$trail;if(e===void 0||o===void 0)return;const a=d(U),p=d(G),n=d(Ae);return r(b,{children:[t(n,{marking:o.from.marking,children:t(p,{children:o.from.href})}),r("span",{className:"pd-strip-words",children:[r(a,{children:[t(p,{children:o.from.href}),o.from.title]}),t("span",{className:"pd-strip-place",children:`${o.within.index} of ${o.within.of}`})]}),r("span",{className:"pd-strip-neighbours",children:[o.within.prev===void 0?void 0:r(a,{children:[t(p,{children:o.within.prev.href}),`‹ ${o.within.prev.title}`]}),o.within.next===void 0?void 0:r(a,{children:[t(p,{children:o.within.next.href}),`${o.within.next.title} ›`]})]}),o.word===""?void 0:t("span",{className:"pd-strip-word",children:`you were searching “${o.word}”`}),r(a,{children:[t(p,{children:o.from.href}),"back to where I was"]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-project-strip")}};i(E,"$ProjectStrip");let O=E;const Pe=d(N),We=d(O),Ae=Pe,Ie=We,F=class F extends me{constructor(){super(...arguments),this.$shown=void 0,this.$trail=void 0}arrive(){const e=He();e===void 0||e.to!==this.means?.identifier||this.$trail?.at===e.at||(this.$trail=e)}turn(){super.turn(),this.arrive()}get project(){return this.cover?.annotations.expressed(ue)}get account(){return this.cover?.annotations.expressed(xe)}get origin(){return this.cover?.annotations.expressed(ke)?.uuid}get subjectCover(){return this.coverOf(this.project?.means?.identifier)??super.subjectCover}get index(){return this.table?.annotations.expressed(ne)}get searchHint(){return"a word in this conversation"}wordsOf(e){if(!(e instanceof w))return super.wordsOf(e);const o=this._words?.get(e);if(o!==void 0)return o;const a=e.speaker,p=a===void 0?"":oe.reference(k.copy(a.text))?.name??k.copy(a.text),n=[...e.text].filter(s=>s!==a).map(s=>k.copy(s.text).replace(/\s+/gu," ").trim()).filter(s=>s!=="").join(" "),l={title:p,text:n,lower:`${p} ${n}`.toLowerCase()};return(this._words??=new Map).set(e,l),l}found(e){const o=e.trim().toLowerCase();return o===""?[]:this.messages.filter(a=>this.wordsOf(a).lower.includes(o))}countOfFound(e,o){return r(b,{children:[t("b",{children:e.length})," ",e.length===1?"message says":"messages say"," “",o,"”"]})}placeOf(e){if(!(e instanceof w))return super.placeOf(e);const o=e.annotations.expressed(pe)?.identifier;return o===void 0?void 0:this.placeWithin(`#${o}`)}sought(e){if(typeof CSS>"u"||!("highlights"in CSS)||typeof document>"u")return;const o=CSS.highlights;if(e===""){o.delete("pd-found");return}const a=[],p=e.toLowerCase(),n=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,{acceptNode:i(s=>s.parentElement?.closest(".pd-pages .pd-said")?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT,"acceptNode")});for(let s=n.nextNode();s!==null;s=n.nextNode()){const c=s.nodeValue?.toLowerCase()??"";for(let h=c.indexOf(p);h!==-1;h=c.indexOf(p,h+p.length))a.push(new StaticRange({startContainer:s,startOffset:h,endContainer:s,endOffset:h+e.length}))}const l=globalThis.Highlight;o.set("pd-found",new l(...a))}holds(){const e=d(se),o=d(le),a=d(Me),p=this.open;return r(b,{children:[t(e,{chapter:this.table}),t(o,{chapter:this.table}),super.holds(),p===void 0||!this.body.includes(p)?void 0:t(a,{chapter:this.table,asked:p},p.mention?.identifier)]})}write(){const e=d(Oe),o=d(Ie);return r(b,{children:[super.write(),t(o,{chapter:this.cover}),t(e,{chapter:this.cover})]})}$Bound(){const e=this.index;e!==void 0&&(e.$folded=!0,e.$counted=!0,e.$searched=!0);const o=d(ce);for(const p of this.table?.text.find(te)??[])p.is(he)||p.annotations.add(this,t(o,{}));const a=d(De);for(const p of e?.entries??[]){const n=fe(p)?.identifier,l=n===void 0?void 0:this.chapterAt(n);if(l===void 0||!this.body.includes(l))continue;const s=l.text.find(w).flatMap(c=>c.text.find(x)).filter(c=>c.names);s.length!==0&&p.text.add(this,...s.map((c,h)=>t(a,{attachment:c},h)))}super.$Bound()}me(){const e=d(we),o=d(ye);return r(b,{children:[super.me(),this.project===void 0?void 0:t(e,{cover:this.cover}),this.account===void 0?void 0:t(o,{cover:this.cover})]})}};i(F,"$ClaudeConversation");let S=F;const _=d(S);d(_,ee)($e);d(_,ae)(de);export{S as $,Je as A,He as k,Re as t};
