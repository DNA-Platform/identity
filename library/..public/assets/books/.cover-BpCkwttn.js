var Jd=Object.defineProperty;var r=(p,e)=>Jd(p,"name",{value:e,configurable:!0});import{$ as o,selection as w,$check as l,inert as ee}from"@dna-platform/chemistry";import{$Theme as Qd,specify as h,$Annotation as b,$Paragraph as g,$Author as go,Word as D,Reference as x,$Subject as yd,$Topic as xd,AnnotationSpecification as m,$Word as j,$Format as G,html as O,$Chapter as y,binder as F,$Svg as pt,Code as Vd,$Section as A,$Append as J,$Date as uo,$Content as bd,$TableOfContents as ae,$Parenthetical as Sd,$Composition as ep,$Image as bo,$Reference as ne,$Cover as I,$Synopsis as Y,CoverSpecification as ap,$Paginated as tp,Self as Ot,$Book as sp,reflection as op,BookSpecification as np,Theme as fe,$Referent as ct,$SelfReference as wd,$Writing as rp,$Heading as zd,$Means as ip,Referent as dp,identifier as Od,SectionSpecification as pp,$Code as mo,highlighting as cp,Chapter as lt,Title as ht,Author as ft,Subject as gt,About as ut,Paragraph as bt,Svg as mt,Autobiography as lp}from"@dna-platform/public";import{jsxs as c,Fragment as v,jsx as n}from"react/jsx-runtime";import{css as f}from"styled-components";const Io=class Io extends Qd{constructor(){super(...arguments),this.font="'Inter', system-ui, sans-serif",this.prose="'Inter', system-ui, sans-serif",this.mono="'JetBrains Mono', ui-monospace, monospace",this.size="0.875rem",this.leading="1.6",this.measure="44rem",this.spreadColumn="15.5rem",this.space="1.5rem",this.holdsColumn="240px",this.barHeight="50px",this.beat="320ms",this.narrow="48rem",this.phoneWidth="390px",this.colour="#4e9eb9",this.accent="#166178",this.bar="#0c1b1f",this.barInk="#ffffff",this.barDim="#a9bcc1",this.barOn="rgba(255, 255, 255, 0.11)",this.barLine="#1d3339",this.mark="#c8f4fb",this.side="#e3f5fa",this.sideInk="#10252c",this.sideDim="#516770",this.sideOn="#ffffff",this.sideLine="#cbe6ee",this.night="#0c1b1f",this.deep="#14323c",this.blue="#166178",this.sea="#4e9eb9",this.sky="#8fc8dc",this.opal="#c8f4fb",this.pale="#e3f5fa",this.mist="#f1f7f9",this.white="#ffffff",this.ink="#10252c",this.soft="#516770",this.line="#dbe7ec",this.me="#e8590c",this.wash="linear-gradient(105deg, #e2f6fb 0%, #ecf0fd 52%, #fae9f4 100%)",this.serif="'Source Serif 4', Georgia, serif",this.between="'Source Sans 3', 'Inter', system-ui, sans-serif",this.bookPaper="#fbf9f3",this.bookInk="#29251d",this.heading="#10252c",this.capital="#166178",this.lit="#166178",this.faint="#8792a2",this.paper="#ffffff",this.panel="#f1f7f9",this.rule="#dbe7ec",this.edge="transparent",this.tint="#e3f5fa",this.dusk="#14323c",this.glow="#cfe6e3",this.dim="#4f7672",this.keyword="#8ad7ff",this.string="#ffd48a",this.type="#9be3d6",this.comment="#5f8a86",this.haze="#a9bcc1",this.glass="rgba(255, 255, 255, 0.62)",this.binding="linear-gradient(160deg, #16303a, #0c1b1f)",this.spine="inset 5px 0 0 rgba(0, 0, 0, 0.14), inset 6px 0 0 rgba(255, 255, 255, 0.12), 0 10px 20px -10px rgba(0, 0, 0, 0.45)",this.shadow="0 0.75rem 1.4rem -0.9rem rgba(12, 27, 31, 0.55)",this.volume="11.5rem",this.cover="8.25rem",this.card="18rem",this.barLight="#ffffff",this.barMid="#f1f7f9",this.barDeep="#e3f5fa",this.barShadow="none",this.sideLight="#ffffff",this.sideDeep="#e3f5fa",this.codeGround="#f1f7f9",this.hairline="1px",this.stroke="2px",this.rise="-1px",this.gloss="none",this.ring="0 0 0 2px #c8f4fb",this.decisionShadow="none",this.photo="7rem",this.radius="0.375rem",this.barTint="#ffffff",this.skyInk="#166178",this.lift="inset 5px 0 0 rgba(0, 0, 0, 0.14), inset 6px 0 0 rgba(255, 255, 255, 0.12), 0 14px 24px -12px rgba(0, 0, 0, 0.5)",this.openSpine="inset 7px 0 0 rgba(0, 0, 0, 0.14), inset 8px 0 0 rgba(255, 255, 255, 0.12), 0 12px 22px -14px rgba(0, 0, 0, 0.5)",this.sans="'Inter', system-ui, sans-serif",this.muted="#516770",this.bubble="rgba(16, 37, 44, 0.05)",this.shade="rgba(16, 37, 44, 0.03)",this.pill="#166178",this.column="48rem",this.style=w.div`${this.parts()}`}parts(){return[this.page(),this.writing(),this.links(),this.figures(),this.listings(),this.switches(),this.turns(),this.illustrations(),this.marks(),this.library(),this.head(),this.holds(),this.context(),this.tones()]}page(){return f`
            font-family: ${({theme:e})=>e.font};
            font-size: ${({theme:e})=>e.size};
            line-height: ${({theme:e})=>e.leading};
            color: ${({theme:e})=>e.ink};
            background: ${({theme:e})=>e.paper};
            min-height: 100vh;
        `}writing(){return f`
            .pd-pages { font-family: ${({theme:e})=>e.prose}; }
            .pd-chapter, .pd-section, .pd-paragraph { margin-block: ${({theme:e})=>e.space}; }
            .pd-chapter { max-width: ${({theme:e})=>e.measure}; }
        `}links(){return f`
            .pa-reference { color: ${({theme:e})=>e.accent}; }
            .pa-reference.pa-self-reference { color: inherit; text-decoration: none; }
        `}figures(){return f`
            .pd-image img { display: block; max-width: 100%; height: auto; }
            .pa-phone .pd-image img { max-width: min(100%, ${({theme:e})=>e.phoneWidth}); }
            .pd-code { font-family: ${({theme:e})=>e.mono}; overflow-x: auto; }
        `}listings(){return f`
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
        `}switches(){return f`
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
        `}illustrations(){return f`
            .pd-illustration { fill: none; stroke: var(--ink); stroke-width: 1.7; stroke-linecap: round; stroke-linejoin: round; }
            .pd-illustration .fill { fill: var(--foot); stroke: var(--ink); }
            .pd-illustration .light { fill: ${({theme:e})=>e.white}; stroke: none; }
            .pd-drawing { display: grid; place-items: center; min-height: 0; }
        `}marks(){return f`
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
        `}library(){return f`
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
        `}head(){return f`
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
        `}holds(){return f`
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
        `}context(){return f`
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
        `}tones(){return f`
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
        `}turns(){return f`
            .pd-paragraph.pd-turn {
                display: flex;
                justify-content: space-between;
                gap: ${({theme:e})=>e.space};
                font-size: calc(0.786 * ${({theme:e})=>e.size});
            }
            .pd-turn .pa-reference { font-weight: 500; text-decoration: none; }
            .pd-turn .pd-count { color: ${({theme:e})=>e.faint}; }
        `}};r(Io,"$LibraryBookTheme");let re=Io;const hp=o(re);var fp=Object.defineProperty,gp=Object.getOwnPropertyDescriptor,up=r((p,e,a,s)=>{for(var t=gp(e,a),i=p.length-1,d;i>=0;i--)(d=p[i])&&(t=d(e,a,t)||t);return t&&fp(e,a,t),t},"__decorateClass$t");const Mo=class Mo extends b{constructor(){super(...arguments),this.specification=new ra}defines(e){e.classes.add(this,"pa-label")}erase(e){e.classes.revert(this)}};r(Mo,"$Label");let Dt=Mo;const To=class To extends m{$saidOfAWord(e){l(e instanceof j,"label is said of a word, and this is not one")}};r(To,"LabelSpecification");let ra=To;up([h("label is said of a word")],ra.prototype,"$saidOfAWord");const Ie=o(Dt),Ho=class Ho extends g{get cover(){return this.$cover??this.book?.cover}write(){const e=this.cover.annotations.expressed(go),a=o(D),s=o(Ie),t=o(x);return c(v,{children:[c(a,{children:[n(s,{}),"by"]}),c(a,{children:[n(t,{children:e.means.identifier}),e.name]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-byline")}};r(Ho,"$Byline");let jt=Ho;const Wo=class Wo extends g{get cover(){return this.$cover??this.book?.cover}write(){const e=this.cover.annotations.expressed(yd),a=o(D),s=o(Ie),t=o(x);return c(v,{children:[c(a,{children:[n(s,{}),"subject"]}),c(a,{children:[n(t,{children:e.means.identifier}),e.name]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-subject-line")}};r(Wo,"$SubjectLine");let Pt=Wo;const Bo=class Bo extends g{get cover(){return this.$cover??this.book?.cover}get topics(){return this.cover?.annotations.find(xd)??[]}write(){const e=o(D),a=o(Ie),s=o(x);return c(v,{children:[c(e,{children:[n(a,{}),"topic"]}),this.topics.map((t,i)=>c(e,{children:[n(s,{children:t.means.identifier}),t.name]},i))]})}$Define(){super.$Define(),this.classes.add(this,"pd-topic-line")}};r(Bo,"$TopicLine");let Ct=Bo;const Dd=o(jt),bp=o(Pt),mp=o(Ct);var $p=Object.defineProperty,kp=Object.getOwnPropertyDescriptor,vp=r((p,e,a,s)=>{for(var t=kp(e,a),i=p.length-1,d;i>=0;i--)(d=p[i])&&(t=d(e,a,t)||t);return t&&$p(e,a,t),t},"__decorateClass$s");const Lo=class Lo extends m{$saidOfABook(e){l(e instanceof _,"this is said of a book of this library, and here it is said of something else")}};r(Lo,"OfABookSpecification");let M=Lo;vp([h("this is said of a book of this library")],M.prototype,"$saidOfABook");const _o=class _o extends j{get on(){return[this.book.$is].flat().includes(this.$annotation)}$Switch(...e){this.$Writing(...e),this.containers.replace(this,"span","button")}container(e){return super.container({type:"button","aria-pressed":this.on,onClick:r(()=>this.press(),"onClick"),...e})}press(){const e=this.book,a=[e.$is].flat();e.$is=this.on?a.filter(s=>s!==this.$annotation):[this.$annotation,...a]}$Define(){super.$Define(),this.classes.add(this,"pd-switch")}};r(_o,"$Switch");let Te=_o;const Ro=class Ro extends Te{press(){const e=this.book,a=[e.$is].flat().filter(s=>!this.$family.includes(s));e.$is=[this.$annotation,...a]}};r(Ro,"$Tab");let He=Ro;const $t=o(Te),yp=o(He);var xp=Object.defineProperty,wp=Object.getOwnPropertyDescriptor,jd=r((p,e,a,s)=>{for(var t=wp(e,a),i=p.length-1,d;i>=0;i--)(d=p[i])&&(t=d(e,a,t)||t);return t&&xp(e,a,t),t},"__decorateClass$r");const Fo=class Fo extends G{constructor(){super(...arguments),this.specification=new We,this.style=w.div`
        .pa-coloured { --colour: ${e=>e.$colour}; }
    `}get colour(){return O.copy(this.text).trim()}$Coloured(...e){this.$Format(...e);const a=this.style;this._painted=s=>n(a,{$colour:this.colour,...s})}defines(e){e.classes.add(this,"pa-coloured"),e.containers.add(this,this._painted)}erase(e){e.classes.revert(this),e.containers.revert(this)}};r(Fo,"$Coloured");let ie=Fo;const Eo=class Eo extends m{$saidOfAChapterOrAParagraph(e){l(e instanceof y||e instanceof g,"coloured is said of a chapter or a paragraph, and this is neither")}$givenItsColour(e){l(/^#[0-9a-f]{6}$/iu.test(e.annotations.expressed(ie)?.colour??""),"coloured is given its colour as six hex digits, and this one was given something else")}};r(Eo,"ColouredSpecification");let We=Eo;jd([h("coloured is said of a chapter or a paragraph")],We.prototype,"$saidOfAChapterOrAParagraph");jd([h("coloured is given its colour")],We.prototype,"$givenItsColour");o(ie);var zp=Object.defineProperty,Op=Object.getOwnPropertyDescriptor,$o=r((p,e,a,s)=>{for(var t=Op(e,a),i=p.length-1,d;i>=0;i--)(d=p[i])&&(t=d(e,a,t)||t);return t&&zp(e,a,t),t},"__decorateClass$q");const Go=class Go extends G{constructor(){super(...arguments),this.specification=new ke}get identifier(){return F.reference(O.copy(this.text))?.identifier??""}get name(){return F.reference(O.copy(this.text))?.name??""}get entry(){return this.book?.chapterAt(this.identifier)}get drawing(){const e=this.entry?.text.find(g).flatMap(a=>a.text.find(pt))[0];return e===void 0?"":O.copy(e.text).trim()}get colour(){return this.entry?.annotations.expressed(ie)?.colour??""}$Keyed(...e){this.$Format(...e);const a=o(Dp);this._layer=s=>c("div",{...s,children:[n(a,{keyed:this}),s.children]})}defines(e){e.classes.add(this,"pa-keyed"),e.containers.add(this,this._layer)}erase(e){e.classes.revert(this),e.containers.revert(this)}};r(Go,"$Keyed");let X=Go;const qo=class qo extends j{constructor(){super(...arguments),this.style=w.span`
        --colour: ${e=>e.$colour};
    `}$Icon(...e){this.$Writing(...e);const a=this.style;this._painted=s=>n(a,{$colour:this.$keyed?.colour??"",...s}),this.containers.replace(this,"span",this._painted)}write(){return n("span",{className:"pd-drawing",role:"img","aria-label":this.$keyed?.name,dangerouslySetInnerHTML:{__html:this.$keyed?.drawing??""}})}$Define(){super.$Define(),this.classes.add(this,"pd-icon")}};r(qo,"$Icon");let At=qo;const Uo=class Uo extends m{$saidOfAChapter(e){l(e instanceof y,"keyed is said of a chapter, and this is not one")}$namesAnEntry(e){const a=e.annotations.expressed(X)?.entry;l(a!==void 0&&a.annotations.expressed(X)?.entry===a,"keyed names an entry of the key, a chapter of this book keyed as itself, and this one names something else")}$entryHoldsItsDrawingAndColour(e){const a=e.annotations.expressed(X)?.entry;a!==void 0&&l(a.text.find(g).flatMap(s=>s.text.find(pt)).length===1&&a.is(ie),"an entry of the key holds one drawing and its colour, and this one holds something else")}};r(Uo,"KeyedSpecification");let ke=Uo;$o([h("keyed is said of a chapter")],ke.prototype,"$saidOfAChapter");$o([h("keyed names an entry of the key")],ke.prototype,"$namesAnEntry");$o([h("an entry of the key holds one drawing and its colour")],ke.prototype,"$entryHoldsItsDrawingAndColour");o(X);const Pd=o(At),Dp=Pd;var jp=Object.defineProperty,Pp=Object.getOwnPropertyDescriptor,Cp=r((p,e,a,s)=>{for(var t=Pp(e,a),i=p.length-1,d;i>=0;i--)(d=p[i])&&(t=d(e,a,t)||t);return t&&jp(e,a,t),t},"__decorateClass$p");const Ap={tsx:"typescript",ts:"typescript",mjs:"javascript",js:"javascript",css:"css",html:"xml",svg:"xml",json:"json",md:"markdown"},Np='<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"><path d="M6 4.5 3.5 8 6 11.5M10 4.5 12.5 8 10 11.5"/></svg>',Me=r(p=>`${p.$identifier}${p.$type}`,"fileNameOf"),Ip=r(p=>p===void 0?[]:O.copy(p.text).split(`
`),"fileLinesOf"),Cd=r(p=>p?.chapter?.annotations.expressed(N),"spreadOf"),Yo=class Yo extends g{constructor(){super(...arguments),this.$family=[]}get name(){return this.$file===void 0?"":Me(this.$file)}get language(){return Ap[(this.$file?.$type??"").replace(/^\./u,"")]??""}get spread(){return Cd(this.$file)}get chapter(){return this.$file?.chapter??super.chapter}$FileListing(...e){this.$Writing(...e),this.containers.replace(this,"span","div")}container(e){return super.container({onClick:r(()=>this.press(),"onClick"),...e})}press(){if(this.$filePanelState===void 0)return;const e=this.book,a=[e.$is].flat().filter(s=>!this.$family.includes(s));e.$is=[this.$filePanelState,...a]}write(){const e=o(D),a=o(Vd);return c(v,{children:[n(e,{children:this.name}),n(a,{identifier:this.$file?.$identifier,type:this.$file?.$type,language:this.language,numbered:!0})]})}$Define(){super.$Define(),this.classes.add(this,"pd-file-listing");const e=o(Hp);this.annotations.add(this,n(e,{}))}};r(Yo,"$FileListing");let ia=Yo;const Zo=class Zo extends b{constructor(){super(...arguments),this.specification=new da}defines(e){const a=e;a.$file!==void 0&&a.spread?.openFile===a.$file&&e.classes.add(this,"pa-open")}erase(e){e.classes.revert(this)}};r(Zo,"$OpenListing");let Nt=Zo;const Ko=class Ko extends m{$isAFileListing(e){l(e instanceof ia,"an open listing is a file listing, and this is not one")}};r(Ko,"OpenListingSpecification");let da=Ko;Cp([h("an open listing is a file listing")],da.prototype,"$isAFileListing");const Xo=class Xo extends He{constructor(){super(...arguments),this.$skeleton=!1,this.style=w.button`
        --colour: ${e=>e.$colour};
    `}get on(){const e=this.$file?.chapter;return e!==void 0&&e===this.book.open&&this.spread?.openFile===this.$file}get name(){return this.$file===void 0?"":Me(this.$file)}get spread(){return Cd(this.$file)}get colour(){return this.$file?.chapter?.annotations.expressed(X)?.colour??""}get lines(){return Ip(this.$file)}get chapter(){return this.$file?.chapter??super.chapter}$FileTab(...e){this.$Switch(...e),this.containers.replace(this,"button",this.style)}container(e){return super.container({$colour:this.colour,...e})}press(){const e=this.spread;e!==void 0&&(e.$openFile=this.$file),this.$annotation!==void 0&&super.press()}write(){return c(v,{children:[n("span",{className:"pd-drawing",dangerouslySetInnerHTML:{__html:Np}}),n("span",{className:"pd-tab-name",children:this.name}),this.$skeleton?n("span",{className:"pd-skeleton",children:this.lines.slice(0,14).map((e,a)=>n("i",{style:{width:`${Math.max(12,Math.min(100,e.length*2.2))}%`}},a))}):void 0]})}$Define(){super.$Define(),this.classes.add(this,"pd-file-tab")}};r(Xo,"$FileTab");let It=Xo;const Mp=o(ia),Tp=o(Nt),ko=o(It),Hp=Tp;var Wp=Object.defineProperty,Bp=Object.getOwnPropertyDescriptor,Lp=r((p,e,a,s)=>{for(var t=Bp(e,a),i=p.length-1,d;i>=0;i--)(d=p[i])&&(t=d(e,a,t)||t);return t&&Wp(e,a,t),t},"__decorateClass$o");const rt=class rt extends b{constructor(){super(...arguments),this.specification=new M}defines(e){for(const a of e.annotations.after(this))a instanceof rt&&e.annotations.express(a,!1);e.classes.add(this,"pa-file-panel-state")}erase(e){e.classes.revert(this)}};r(rt,"$FilePanelState");let ve=rt;const Jo=class Jo extends ve{defines(e){super.defines(e),e.classes.add(this,"pa-code-forward")}};r(Jo,"$CodeForward");let Mt=Jo;const Qo=class Qo extends ve{defines(e){super.defines(e),e.classes.add(this,"pa-words-forward")}};r(Qo,"$WordsForward");let Tt=Qo;const Vo=class Vo extends ve{defines(e){super.defines(e),e.classes.add(this,"pa-split")}};r(Vo,"$Split");let Ht=Vo;const So=class So extends b{constructor(){super(...arguments),this.specification=new M}defines(e){e.classes.add(this,"pa-light-code")}erase(e){e.classes.revert(this)}};r(So,"$LightCode");let Wt=So;const en=class en extends b{constructor(){super(...arguments),this.specification=new M}defines(e){e.classes.add(this,"pa-wrapped-code")}erase(e){e.classes.revert(this)}};r(en,"$WrappedCode");let Bt=en;const an=class an extends b{constructor(){super(...arguments),this.specification=new M}defines(e){e.classes.add(this,"pa-numbered-code")}erase(e){e.classes.revert(this)}};r(an,"$NumberedCode");let Lt=an;const tn=class tn extends b{constructor(){super(...arguments),this.specification=new ca}defines(e){e.classes.add(this,"pa-brief")}erase(e){e.classes.revert(this)}};r(tn,"$Brief");let pa=tn;const sn=class sn extends m{$saidOfAParagraph(e){l(e instanceof g,"brief is said of a paragraph, and this is not one")}};r(sn,"BriefSpecification");let ca=sn;Lp([h("brief is said of a paragraph")],ca.prototype,"$saidOfAParagraph");o(ve);const vo=o(Mt),yo=o(Tt),Be=o(Ht),_p=o(Wt),Rp=o(Bt),Ad=o(Lt);o(pa);const on=class on extends g{constructor(){super(...arguments),this.style=w.div`
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
    `}get spread(){return this.chapter?.annotations.expressed(N)}$FileRail(...e){this.$Writing(...e),this.containers.replace(this,"span",this.style)}write(){const e=o(ko),a=this.spread;if(a!==void 0)return a.files.map(s=>n(e,{file:s,annotation:Be,family:a.filePanelStates,skeleton:!0},Me(s)))}$Define(){super.$Define(),this.classes.add(this,"pd-file-rail")}};r(on,"$FileRail");let _t=on;const nn=class nn extends He{constructor(){super(...arguments),this.style=w.button`
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
    `}get paragraphs(){return(this.chapter?.text.find(A)??[]).flatMap(e=>e.text.find(g)).slice(0,16).map(e=>O.copy(e.text))}$FilePanelGrip(...e){this.$Switch(...e),this.containers.replace(this,"button",this.style)}write(){return n("span",{className:"pd-skeleton",children:this.paragraphs.map((e,a)=>n("i",{style:{width:`${Math.max(25,Math.min(100,e.length/4))}%`}},a))})}$Define(){super.$Define(),this.classes.add(this,"pd-file-panel-grip")}};r(nn,"$FilePanelGrip");let Rt=nn;const Fp=o(_t),Ep=o(Rt),rn=class rn extends g{constructor(){super(...arguments),this.style=w.div`
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
    `}get spread(){return this.chapter?.annotations.expressed(N)}$FilePanel(...e){this.$Writing(...e),this.containers.replace(this,"span",this.style)}write(){const e=o(Up),a=o(Mp),s=this.spread;if(s!==void 0)return c(v,{children:[n(e,{chapter:this.chapter}),n("div",{className:"pd-file-listings",children:s.files.map(t=>n(a,{file:t,filePanelState:vo,family:s.filePanelStates},Me(t)))})]})}$Define(){super.$Define(),this.classes.add(this,"pd-file-panel")}};r(rn,"$FilePanel");let Ft=rn;const dn=class dn extends g{constructor(){super(...arguments),this.style=w.div`
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
    `}get spread(){return this.chapter?.annotations.expressed(N)}$FilePanelBar(...e){this.$Writing(...e),this.containers.replace(this,"span",this.style)}write(){const e=o(ko),a=o(yp),s=o($t),t=this.spread,i=this.chapter;if(t!==void 0)return c(v,{children:[t.files.map(d=>n(e,{file:d},Me(d))),n("span",{className:"pd-words-only",children:n(a,{chapter:i,annotation:yo,family:t.filePanelStates,children:"words"})}),n("span",{className:"pd-dock pd-to-full",children:n(a,{chapter:i,annotation:vo,family:t.filePanelStates,children:"full screen"})}),n("span",{className:"pd-dock pd-to-split",children:n(a,{chapter:i,annotation:Be,family:t.filePanelStates,children:"split"})}),c("span",{className:"pd-options",children:[n(s,{chapter:i,annotation:_p,children:"light"}),n(s,{chapter:i,annotation:Rp,children:"wrap"}),n(s,{chapter:i,annotation:Ad,children:"lines"})]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-file-panel-bar")}};r(dn,"$FilePanelBar");let Et=dn;const Gp=o(Ft),qp=o(Et),Up=qp;var Yp=Object.defineProperty,Zp=Object.getOwnPropertyDescriptor,Kp=r((p,e,a,s)=>{for(var t=Zp(e,a),i=p.length-1,d;i>=0;i--)(d=p[i])&&(t=d(e,a,t)||t);return t&&Yp(e,a,t),t},"__decorateClass$n");const pn=class pn extends G{constructor(){super(...arguments),this.specification=new la,this.$openFile=void 0,this.grid=w.div`
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
    `}get files(){return this.parent.annotations.find(J).reverse()}get openFile(){return this.$openFile??this.files[0]}get filePanelStates(){return[yo,Be,vo]}$Spread(...e){this.$Format(...e);const a=this.grid,s=o(Gp),t=o(Fp),i=o(Ep);this.style=({className:d,children:u})=>{const k=this.parent,$=[...k.classes].includes("pa-open");return c(a,{className:`${d??""}${$?" pa-open":""}`.trim(),children:[n("div",{className:"pd-words",children:u}),$?c(v,{children:[n(s,{chapter:k}),n(t,{chapter:k}),n(i,{chapter:k,annotation:Be,family:this.filePanelStates})]}):void 0]})}}defines(e){super.defines(e),e.classes.add(this,"pa-spread")}erase(e){super.erase(e),e.classes.revert(this)}};r(pn,"$Spread");let N=pn;const cn=class cn extends m{$isAChapter(e){l(e instanceof y,"a spread is a chapter read beside its files, and this is not a chapter")}};r(cn,"SpreadSpecification");let la=cn;Kp([h("a spread is a chapter read beside its files")],la.prototype,"$isAChapter");o(N);var Xp=Object.defineProperty,Jp=Object.getOwnPropertyDescriptor,xo=r((p,e,a,s)=>{for(var t=Jp(e,a),i=p.length-1,d;i>=0;i--)(d=p[i])&&(t=d(e,a,t)||t);return t&&Xp(e,a,t),t},"__decorateClass$m");const ln=class ln extends b{constructor(){super(...arguments),this.specification=new ye}get date(){return this.text.find(uo)[0]}defines(e){e.classes.add(this,"pa-dated")}erase(e){e.classes.revert(this)}note(){const e=o(this.date);return n(e,{})}};r(ln,"$Dated");let L=ln;const hn=class hn extends m{$saidOfAChapter(e){l(e instanceof y,"dated is said of a chapter, and this is not one")}$datedOnce(e){l(e.annotations.containsOne(L),"a chapter is dated once, and this one is dated more than once")}$givenOneDate(e){l(e.annotations.expressed(L)?.text.find(uo).length===1,"a dated chapter is given one date, and this one is given none or more than one")}};r(hn,"DatedSpecification");let ye=hn;xo([h("dated is said of a chapter")],ye.prototype,"$saidOfAChapter");xo([h("a chapter is dated once")],ye.prototype,"$datedOnce");xo([h("a dated chapter is given one date")],ye.prototype,"$givenOneDate");const Ih=o(L);var Qp=Object.defineProperty,Vp=Object.getOwnPropertyDescriptor,sa=r((p,e,a,s)=>{for(var t=Vp(e,a),i=p.length-1,d;i>=0;i--)(d=p[i])&&(t=d(e,a,t)||t);return t&&Qp(e,a,t),t},"__decorateClass$l");const Nd='<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3.5 10.5 8 6 12.5"/></svg>',Sp='<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linejoin="round" stroke-linecap="round"><rect class="ground" x="0.75" y="0.75" width="14.5" height="14.5"/><path d="M3.5 5.5h3l1.5 1.5h4.5v5h-9z"/></svg>',fn=class fn extends G{constructor(){super(...arguments),this.specification=new ga,this.style=w.div`
        ${e=>e.$schemeDeclarations===void 0?"":`.pa-entry { ${e.$schemeDeclarations} }`}
    `}get place(){return W(this.parent).identifier}get referencedChapter(){return this.book.chapterAt(this.place)}get cover(){return this.referencedChapter?.annotations.expressed(C)?.cover??this.book.coverOf(this.place)}get schemeDeclarations(){const e=this.cover?.annotations.expressed(Z);if(e!==void 0)return e.declarations;const a=this.referencedChapter?.annotations.expressed(ie)?.colour;return a===void 0?void 0:`--colour: ${a};`}$Entry(...e){this.$Format(...e);const a=this.style;this._painted=s=>n(a,{$schemeDeclarations:this.schemeDeclarations,...s})}defines(e){e.classes.add(this,"pa-entry"),e.containers.add(this,this._painted),(this.place===this.book?.$bookmark||this.place===this.book.open?.mention?.identifier)&&e.classes.add(this,"pa-open")}erase(e){e.classes.revert(this),e.containers.revert(this)}};r(fn,"$Entry");let de=fn;const gn=class gn extends b{constructor(){super(...arguments),this.specification=new fa}defines(e){e.classes.add(this,"pa-appendix")}erase(e){e.classes.revert(this)}};r(gn,"$Appendix");let Le=gn;const un=class un extends b{constructor(){super(...arguments),this.specification=new ha,this.$folded=!1,this.$counted=!1,this.$dated=!1}get sections(){return this.chapter.text.find(A)}get entries(){return this.sections.flatMap(e=>e.text.find(g)).filter(e=>!e.is(Sd)&&W(e)!==void 0)}chapterOf(e){const a=W(e)?.identifier;return a===void 0?void 0:this.book.chapterAt(a)}$Bound(){const e=o(sc),a=o(Md),s=o(ko),t=this.book;for(const $ of this.entries){$.annotations.add(this,n(e,{}));const z=t.chapterAt(W($).identifier)?.annotations.expressed(N);if(z===void 0)continue;const H=z.files;$.text.add(this,n(a,{foldedWriting:H.length===0?void 0:$,annotation:Kt}),...H.map(se=>n(s,{file:se,annotation:Be,family:z.filePanelStates},Me(se))))}const i=o(oc),d=o(nc),u=new Set(t.entries),k=r($=>{const z=this.chapterOf($);return z!==void 0&&u.has(z)},"leadsToAnEntry");if(this.$dated)for(const $ of this.entries){const z=this.chapterOf($);z===void 0||!u.has(z)||!z.is(L)||$.text.add(this,n(i,{entry:z}))}for(const $ of this.sections){this.$folded&&($.$is=[Kt]);const z=$.canonical;this.$counted&&z!==void 0&&$.text.find(g).some(k)&&z.text.add(this,n(d,{section:$}))}super.$Bound()}};r(un,"$Index");let E=un;const bn=class bn extends j{write(){const[e,a,s]=(this.$entry?.annotations.expressed(L)?.date?.date??"").split("-");if(!(e===void 0||a===void 0||s===void 0))return new Date(Date.UTC(Number(e),Number(a)-1,Number(s.slice(0,2)))).toLocaleString("en-GB",{day:"numeric",month:"short",timeZone:"UTC"})}$Define(){super.$Define(),this.classes.add(this,"pd-entry-day")}};r(bn,"$EntryDay");let Gt=bn;const mn=class mn extends j{write(){return String(this.$section?.text.find(g).filter(e=>W(e)!==void 0).length??0)}$Define(){super.$Define(),this.classes.add(this,"pd-section-count")}};r(mn,"$SectionCount");let qt=mn;const $n=class $n extends m{$isATableOfContents(e){l(e.is(ae),"an index is a table of contents, and this chapter is not one")}};r($n,"IndexSpecification");let ha=$n;sa([h("an index is a table of contents")],ha.prototype,"$isATableOfContents");const kn=class kn extends m{$isASectionOfTheTable(e){l(e instanceof A&&e.chapter?.is(ae)===!0,"the appendix is a section of the table of contents, and this is not one")}};r(kn,"AppendixSpecification");let fa=kn;sa([h("the appendix is a section of the table of contents")],fa.prototype,"$isASectionOfTheTable");const vn=class vn extends m{$isARowThatLeadsSomewhere(e){l(e instanceof g&&W(e)!==void 0,"an entry is a row that leads somewhere, and this is not one")}};r(vn,"EntrySpecification");let ga=vn;sa([h("an entry is a row that leads somewhere")],ga.prototype,"$isARowThatLeadsSomewhere");const yn=class yn extends b{constructor(){super(...arguments),this.specification=new ba}defines(e){e.classes.add(this,"pa-folded")}erase(e){e.classes.revert(this)}};r(yn,"$Folded");let Ut=yn;const xn=class xn extends Te{get on(){return this.$foldedWriting!==void 0&&[this.$foldedWriting.$is].flat().includes(this.$annotation)}container(e){return super.container({...e,disabled:this.$foldedWriting===void 0,onClick:r(a=>{a.preventDefault(),this.press()},"onClick")})}press(){const e=this.$foldedWriting;if(e===void 0)return;const a=[e.$is].flat();e.$is=this.on?a.filter(s=>s!==this.$annotation):[this.$annotation,...a]}write(){return n("span",{className:"pd-drawing",dangerouslySetInnerHTML:{__html:Nd}})}$Define(){super.$Define(),this.classes.add(this,"pd-fold-chevron")}};r(xn,"$FoldChevron");let Yt=xn;const wn=class wn extends G{constructor(){super(...arguments),this.specification=new ma,this.tree=w.div`
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
        .pd-book .pd-holds &.pd-tree-folder.pa-foldable { position: relative; }
        .pd-book .pd-holds &.pd-tree-folder.pa-foldable .pd-section { margin: 0 0 calc(${({theme:e})=>e.space} / 6); }
        .pd-book .pd-holds &.pd-tree-folder.pa-foldable .pd-sentence.pd-heading { display: flex; align-items: center; gap: calc(${({theme:e})=>e.space} / 3); height: calc(2.1429 * ${({theme:e})=>e.size}); margin: 0; padding: 0 calc(${({theme:e})=>e.space} * 0.5833) 0 calc(${({theme:e})=>e.space} * 1.5); border: 0; font-size: calc(0.9286 * ${({theme:e})=>e.size}); font-weight: 500; line-height: 1; letter-spacing: 0; text-transform: none; color: ${({theme:e})=>e.sideInk}; cursor: pointer; transition: background ${({theme:e})=>e.beat} ease; }
        .pd-book .pd-holds &.pd-tree-folder.pa-foldable .pd-heading:hover { background: color-mix(in oklab, ${({theme:e})=>e.sky} 30%, white); }
        .pd-book .pd-holds &.pd-tree-folder.pa-foldable .pd-heading .pa-reference { color: inherit; text-decoration: none; }
        .pd-book .pd-holds &.pd-tree-folder.pa-foldable .pd-fold-chevron { display: grid; place-items: center; position: absolute; top: calc(${({theme:e})=>e.space} * 0.3125); left: calc(${({theme:e})=>e.space} * 0.5); width: calc(1.1429 * ${({theme:e})=>e.size}); height: calc(1.1429 * ${({theme:e})=>e.size}); padding: 0; border: 0; border-radius: 0; background: none; color: #a5aebb; cursor: pointer; transition: transform 0.18s ease, color ${({theme:e})=>e.beat} ease; }
        .pd-book .pd-holds &.pd-tree-folder.pa-foldable .pd-fold-chevron .pd-drawing { display: block; width: calc(0.7143 * ${({theme:e})=>e.size}); height: calc(0.7143 * ${({theme:e})=>e.size}); }
        .pd-book .pd-holds &.pd-tree-folder.pa-foldable .pd-fold-chevron svg { display: block; width: 100%; height: 100%; }
        .pd-book .pd-holds &.pd-tree-folder.pa-foldable .pd-fold-chevron[aria-pressed='false'] { transform: rotate(90deg); }
        .pd-book .pd-holds &.pd-tree-folder.pa-foldable .pd-fold-chevron:hover { color: ${({theme:e})=>e.ink}; }
        .pd-book .pd-holds &.pd-tree-folder.pa-foldable .pd-tree-folder-mark, .pd-book .pd-holds &.pd-tree-folder.pa-foldable .pa-entry .pd-file-tab, .pd-book .pd-holds &.pd-tree-folder.pa-foldable .pa-entry .pd-fold-chevron { display: none; }
        .pd-book .pd-holds &.pd-tree-folder.pa-foldable .pa-folded .pd-paragraph.pa-entry { display: none; }
        .pd-book .pd-holds &.pd-tree-folder.pa-foldable .pd-paragraph.pa-entry { display: flex; flex-wrap: nowrap; align-items: center; gap: calc(${({theme:e})=>e.space} / 3); margin: 0; padding: calc(${({theme:e})=>e.space} / 6) calc(${({theme:e})=>e.space} * 0.5833) calc(${({theme:e})=>e.space} / 6) calc(${({theme:e})=>e.space} * 1.5); font-size: calc(0.8929 * ${({theme:e})=>e.size}); line-height: 1.35; color: ${({theme:e})=>e.sideInk}; }
        .pd-book .pd-holds &.pd-tree-folder.pa-foldable .pd-paragraph.pa-entry > a:first-child, .pd-book .pd-holds &.pd-tree-folder.pa-foldable .pd-paragraph.pa-entry > .pd-word.pa-content, .pd-book .pd-holds &.pd-tree-folder.pa-foldable .pd-paragraph.pa-entry .pa-content { flex: 1 1 auto; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
        .pd-book .pd-holds &.pd-tree-folder.pa-foldable .pd-paragraph.pa-entry .pd-word.pa-arrow, .pd-book .pd-holds &.pd-tree-folder.pa-foldable .pd-paragraph.pa-entry > a:has(> .pa-arrow) { display: none; }
        .pd-book .pd-holds &.pd-tree-folder.pa-foldable .pd-paragraph.pa-entry .pa-number { display: none; }
        .pd-book .pd-holds &.pd-tree-folder.pa-foldable .pd-paragraph.pa-entry:hover { background: color-mix(in oklab, ${({theme:e})=>e.sky} 30%, white); }
        .pd-book .pd-holds &.pd-tree-folder.pa-foldable .pd-paragraph.pa-entry.pa-open { background: linear-gradient(90deg, #eff4fa, #f8fafd); color: ${({theme:e})=>e.heading}; font-weight: 500; }
        .pd-book .pd-holds &.pd-tree-folder.pa-foldable.pa-open .pd-sentence.pd-heading { background: linear-gradient(90deg, #eff4fa, #f8fafd); color: ${({theme:e})=>e.heading}; }
        .pd-book .pd-holds &.pd-tree-folder .pd-sentence.pd-heading .pd-word.pd-section-count { margin-inline-start: auto; font-size: calc(0.7857 * ${({theme:e})=>e.size}); font-weight: 400; color: ${({theme:e})=>e.faint}; font-variant-numeric: tabular-nums; }
        .pd-book .pd-holds &.pd-tree-folder .pa-entry .pd-word.pd-entry-day { flex: none; margin-inline-start: auto; font-size: calc(0.7857 * ${({theme:e})=>e.size}); font-weight: 400; color: ${({theme:e})=>e.faint}; font-variant-numeric: tabular-nums; }
        @media (max-width: ${({theme:e})=>e.narrow}) {
            .pd-book .pd-holds &.pd-tree-folder.pa-open .pd-fold-chevron, .pd-book .pd-holds &.pd-tree-folder.pa-open .pd-tree-folder-mark, .pd-book .pd-holds &.pd-tree-folder.pa-open .pa-entry .pd-file-tab { display: none; }
            .pd-book .pd-holds &.pd-tree-folder.pa-open .pd-sentence.pd-heading { height: auto; padding: 0 calc(${({theme:e})=>e.space} / 2); }
            .pd-book:not(.pa-turned) .pd-holds .pd-chapter.pa-table-of-contents:has(> &.pd-tree-folder.pa-foldable) { flex-direction: row; align-items: center; min-height: 0; }
            .pd-book .pd-holds &.pd-tree-folder.pa-foldable { display: inline-block; vertical-align: top; }
            .pd-book .pd-holds &.pd-tree-folder.pa-foldable .pd-fold-chevron { position: static; display: inline-grid; vertical-align: middle; margin-inline-end: 2px; }
            .pd-book .pd-holds &.pd-tree-folder.pa-foldable .pd-sentence.pd-heading { display: inline-flex; height: calc(1.9 * ${({theme:e})=>e.size}); padding: 0 calc(${({theme:e})=>e.space} / 2) 0 calc(${({theme:e})=>e.space} / 6); }
            .pd-book .pd-holds &.pd-tree-folder.pa-foldable .pd-section { display: inline; margin: 0; }
            .pd-book .pd-holds &.pd-tree-folder.pa-foldable .pd-paragraph.pa-entry { display: none; }
        }
    `}get section(){return this.parent}get firstPlace(){return this.section.text.find(g).map(e=>W(e)).find(e=>e!==void 0)?.identifier}get part(){const e=this.firstPlace;return e===void 0?void 0:this.book.chapterAt(e)?.part}get open(){const e=this.book,a=e.open,s=this.section.mention?.identifier;return a!==void 0&&a.part?.name===this.part?.name||s!==void 0&&e.placeWithin(s)===e.$bookmark}$TreeFolder(...e){this.$Format(...e);const a=this.tree,s=o(Md),t=o(D),i=o(x);this.style=({className:d,children:u})=>{const k=this.firstPlace,$=[...this.section.classes].includes("pa-open"),z=this.book.open!==void 0,H=this.chapter?.annotations.expressed(E)?.$folded===!0&&!($&&z),se=n("span",{className:"pd-drawing pd-tree-folder-mark",dangerouslySetInnerHTML:{__html:Sp}});return c(a,{className:`${d??""} pd-tree-folder${$?" pa-open":""}${H?" pa-foldable":""}`.trim(),children:[n(s,{foldedWriting:this.section,annotation:Kt}),k===void 0?se:c(t,{children:[n(i,{children:k}),se]}),u]})}}defines(e){super.defines(e),e.classes.add(this,"pa-tree-folder"),this.open&&e.classes.add(this,"pa-open")}erase(e){super.erase(e),e.classes.revert(this)}};r(wn,"$TreeFolder");let ua=wn;const zn=class zn extends m{$saidOfASectionOrAnEntry(e){l(e instanceof A&&e.chapter?.is(ae)===!0||e.is(de),"folded is said of a section of a table of contents or of an entry, and this is neither")}};r(zn,"FoldedSpecification");let ba=zn;sa([h("folded is said of a section of a table of contents or of an entry")],ba.prototype,"$saidOfASectionOrAnEntry");const On=class On extends m{$isASectionOfTheTable(e){l(e instanceof A&&e.chapter?.is(ae)===!0,"a tree folder is a section of the table of contents, and this is not one")}};r(On,"TreeFolderSpecification");let ma=On;sa([h("a tree folder is a section of the table of contents")],ma.prototype,"$isASectionOfTheTable");const Dn=class Dn extends g{get cover(){return this.$cover??this.book?.cover}write(){const e=this.cover,a=o(D),s=o(x);return c(a,{children:[n(s,{children:e.mention.identifier}),n("span",{className:"pd-drawing",dangerouslySetInnerHTML:{__html:Nd}}),e.title.name]})}$Define(){super.$Define(),this.classes.add(this,"pd-tree-root")}};r(Dn,"$TreeRoot");let Zt=Dn;const W=r(p=>p.annotations.expressed(bd)??p.text.find(j).map(e=>e.annotations.expressed(bd)).find(e=>e!==void 0),"contentOf"),Id=o(de),Mh=o(E),wo=o(Gt),ec=o(qt),Th=o(Le),zo=o(Ut),ac=o(Yt),Oo=o(ua),tc=o(Zt),sc=Id,oc=wo,nc=ec,Kt=zo,Md=ac;var rc=Object.defineProperty,ic=Object.getOwnPropertyDescriptor,ge=r((p,e,a,s)=>{for(var t=ic(e,a),i=p.length-1,d;i>=0;i--)(d=p[i])&&(t=d(e,a,t)||t);return t&&rc(e,a,t),t},"__decorateClass$k");const kt=r((p,e)=>{const a=new Set(p.text.find(e));return p.text.find(ep).flatMap(s=>[...a.has(s)?[s]:[],...kt(s,e)])},"within"),jn=class jn extends b{constructor(){super(...arguments),this.specification=new pe}get identifier(){return F.reference(O.copy(this.text))?.identifier??""}get name(){return F.reference(O.copy(this.text))?.name??""}get cover(){const e=this.identifier;return this.chapter?.annotations.find(C).map(a=>a.cover).find(a=>a?.mention?.identifier===e)}defines(e){e.classes.add(this,"pa-design")}erase(e){e.classes.revert(this)}};r(jn,"$Design");let T=jn;const Pn=class Pn extends b{constructor(){super(...arguments),this.specification=new $a}defines(e){e.classes.add(this,"pa-exhibit")}erase(e){e.classes.revert(this)}};r(Pn,"$Exhibit");let _e=Pn;const Cn=class Cn extends b{constructor(){super(...arguments),this.specification=new ka,this.$number=0,this.span=w.span.attrs({className:"pd-plate"})``}note(){const e=this.span;return c(v,{children:[n(e,{children:String(this.$number).padStart(2,"0")}),n("span",{className:"pd-jacket-mini"})]})}defines(e){e.classes.add(this,"pa-plate")}erase(e){e.classes.revert(this)}};r(Cn,"$Plate");let Xt=Cn;const An=class An extends G{constructor(){super(...arguments),this.specification=new va,this.themeProvider=!0,this.room=w.div`
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
    `}get chapter(){return this.parent}get design(){return this.chapter.annotations.expressed(T)}get plate(){return this.book.chapters.filter(e=>e.is(T)).indexOf(this.chapter)+1}$Room(...e){this.$Format(...e);const a=this.room;this.style=({className:s,children:t})=>{const i=[...this.chapter.classes].includes("pa-open");return me(this.design?.cover,c(a,{className:`${s??""} pd-room${i?" pa-open":""}`.trim(),children:[n("span",{className:"pd-plate",children:String(this.plate).padStart(2,"0")}),t]}))}}defines(e){super.defines(e),e.classes.add(this,"pa-room")}erase(e){super.erase(e),e.classes.revert(this)}};r(An,"$Room");let Jt=An;const Nn=class Nn extends g{get references(){const e=this.book?.means?.identifier??"",a=new Map;for(const s of kt(this.chapter,j)){if(s.parent===this)continue;const t=s.annotations.expressed(ne)?.identifier;if(t===void 0||t.startsWith(e)||a.has(t))continue;const i=O.copy(s.text);a.set(t,F.reference(i)?.name??i.trim())}return[...a]}write(){const e=o(D),a=o(x);return this.references.map(([s,t],i)=>c(e,{children:[n(a,{children:s}),t,n("span",{className:"pd-where",children:s.replace(/^\/dougs-/u,"").replace(/\/#?/u," · ").replace(/ · $/u,"").replace(/-/gu," ")})]},i))}$Define(){super.$Define(),this.classes.add(this,"pd-built-in")}};r(Nn,"$BuiltIn");let Qt=Nn;const In=class In extends m{$isAChapter(e){l(e instanceof y,"a design is a chapter, and this is not one")}$namesABook(e){l((e.annotations.expressed(T)?.identifier??"")!=="","a design names the book it is of, and this one names nothing")}$holdsTheCover(e){l(e.annotations.expressed(T)?.cover!==void 0,"a design holds the cover of the book it is of, as a volume, and this one holds none")}$showsItselfAsBuilt(e){l(e instanceof y&&kt(e,g).some(a=>a.is(_e)),"a design shows itself as built, in a paragraph said to be the exhibit, and this one shows nothing")}};r(In,"DesignSpecification");let pe=In;ge([h("a design is a chapter")],pe.prototype,"$isAChapter");ge([h("a design names the book it is of")],pe.prototype,"$namesABook");ge([h("a design holds the cover of the book it is of")],pe.prototype,"$holdsTheCover");ge([h("a design shows itself as built")],pe.prototype,"$showsItselfAsBuilt");const Mn=class Mn extends m{$isAParagraphOfADesignHoldingOneImage(e){l(e instanceof g&&e.chapter?.is(T)===!0&&e.text.find(bo).length===1,"an exhibit is a paragraph of a design that holds one image, and this is not one")}};r(Mn,"ExhibitSpecification");let $a=Mn;ge([h("an exhibit is a paragraph of a design that holds one image")],$a.prototype,"$isAParagraphOfADesignHoldingOneImage");const Tn=class Tn extends m{$saidOfAnEntryLeadingToADesign(e){l(e.is(de)&&e.annotations.expressed(de)?.referencedChapter?.is(T)===!0,"a plate is said of an entry that leads to a design, and this is not one")}};r(Tn,"PlateSpecification");let ka=Tn;ge([h("a plate is said of an entry that leads to a design")],ka.prototype,"$saidOfAnEntryLeadingToADesign");const Hn=class Hn extends m{$isADesign(e){l(e instanceof y&&e.is(T),"a room is a chapter that is a design, and this is not one")}};r(Hn,"RoomSpecification");let va=Hn;ge([h("a room is a chapter that is a design")],va.prototype,"$isADesign");o(T);o(_e);const dc=o(Xt),pc=o(Jt),cc=o(Qt);var lc=Object.defineProperty,hc=Object.getOwnPropertyDescriptor,R=r((p,e,a,s)=>{for(var t=hc(e,a),i=p.length-1,d;i>=0;i--)(d=p[i])&&(t=d(e,a,t)||t);return t&&lc(e,a,t),t},"__decorateClass$j");const me=r((p,e,a)=>{const s=p?.annotations.expressed(Z)?.painted;return s===void 0?e:n(s,{children:e},a)},"painted"),Wn=class Wn extends I{constructor(){super(...arguments),this.specification=new ze}get name(){return this.chapter?.title?.name??""}get author(){return this.chapter?.annotations.expressed(go)?.name??""}get illustration(){return this.chapter?.text.find(g).find(e=>e.is(Re))}get drawing(){const e=this.illustration?.text.find(pt)[0];return e===void 0?"":O.copy(e.text).trim()}get scheme(){return this.chapter?.annotations.expressed(Z)}get window(){return this.chapter?.annotations.expressed(we)}};r(Wn,"$BookshelfCover");let xe=Wn;const Bn=class Bn extends b{constructor(){super(...arguments),this.specification=new wa}defines(e){e.classes.add(this,"pa-illustration")}erase(e){e.classes.revert(this)}};r(Bn,"$Illustration");let Re=Bn;const Ln=class Ln extends G{constructor(){super(...arguments),this.specification=new Fe,this.$ground="",this.$band="",this.$bandInk="",this.$foot="",this.$footInk="",this.$ink="",this.style=w.div.attrs({className:"pd-scheme"})`
        ${e=>e.$scheme}
    `}get colours(){return[this.$ground,this.$band,this.$bandInk,this.$foot,this.$footInk,this.$ink]}get declarations(){return`--ground: ${this.$ground}; --band: ${this.$band}; --band-ink: ${this.$bandInk}; --foot: ${this.$foot}; --foot-ink: ${this.$footInk}; --ink: ${this.$ink};`}get painted(){return this._painted}$Scheme(...e){this.$Format(...e);const a=this.style;this._painted=s=>n(a,{$scheme:this.declarations,...s})}defines(e){e.classes.add(this,"pa-scheme"),e.containers.add(this,this._painted)}erase(e){e.classes.revert(this),e.containers.revert(this)}};r(Ln,"$Scheme");let Z=Ln;const _n=class _n extends b{constructor(){super(...arguments),this.specification=new Ee,this.$x="",this.$y=""}get declarations(){return`--window-x: ${this.$x}px; --window-y: ${this.$y}px;`}};r(_n,"$Window");let we=_n;const Rn=class Rn extends b{constructor(){super(...arguments),this.specification=new Ge}get cover(){return this._cover}get jacket(){return this._cover?.annotations.expressed(I)}$Volume(...e){this._cover=e.find(a=>a instanceof y),this.$Annotation(...e.filter(a=>a!==this._cover))}defines(e){e.classes.add(this,"pa-volume")}erase(e){e.classes.revert(this)}};r(Rn,"$Volume");let C=Rn;const Fn=class Fn extends g{get cover(){return this.$cover?.annotations.expressed(I)}$Jacket(...e){this.$Writing(...e),this._painted=a=>{const s=this.cover?.scheme?.painted;return s===void 0?n("div",{...a}):n(s,{...a})},this.containers.add(this,this._painted)}write(){const e=this.cover;if(e===void 0)return;const a=o(D),s=o(Ie);return c(v,{children:[n(a,{children:e.name}),n("span",{className:"pd-drawing",dangerouslySetInnerHTML:{__html:e.drawing}}),c(a,{children:[n(s,{}),e.author]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-jacket")}};r(Fn,"$Jacket");let Vt=Fn;const En=class En extends g{constructor(){super(...arguments),this.unfolded=!1}get filedElsewhere(){return this.$subject!==void 0&&this.$subject!==this.$cover}container(e){return super.container({onMouseOver:r(a=>{a.target instanceof Element&&a.target.closest(".pd-filed")!==null&&this.unfold()},"onMouseOver"),onMouseLeave:r(()=>this.fold(),"onMouseLeave"),...e})}unfold(){this.unfolded=!0}fold(){this.unfolded=!1}write(){const e=this.$cover,a=this.$subject;if(e!==void 0)return c(v,{children:[this.filedElsewhere?me(a,n("span",{className:"pd-filed",children:this.mark(a)})):void 0,me(e,n("span",{className:"pd-own",children:this.mark(e)})),c("span",{className:"pd-names",children:[me(e,n("span",{className:"pd-name",children:this.name(e)})),this.filedElsewhere?me(a,n("span",{className:"pd-name pd-under",children:this.name(a)})):void 0]})]})}mark(e){const a=o(bc),s=o(x);return n(a,{cover:e,children:n(s,{children:e.mention.identifier})})}name(e){const a=o(D),s=o(x);return c(a,{children:[n(s,{children:e.mention.identifier}),e.title.name]})}$Define(){super.$Define(),this.classes.add(this,"pd-logo");const e=o(mc);this.annotations.add(this,n(e,{}))}};r(En,"$Logo");let ya=En;const Gn=class Gn extends b{constructor(){super(...arguments),this.specification=new xa}defines(e){e.unfolded&&e.classes.add(this,"pa-unfolded")}erase(e){e.classes.revert(this)}};r(Gn,"$Unfolded");let St=Gn;const qn=class qn extends m{$saidOfALogo(e){l(e instanceof ya,"unfolded is said of a logo, and this is not one")}};r(qn,"UnfoldedSpecification");let xa=qn;R([h("unfolded is said of a logo")],xa.prototype,"$saidOfALogo");const Un=class Un extends j{constructor(){super(...arguments),this.style=w.span`
        ${e=>e.$vars}
    `}get cover(){return this.$cover?.annotations.expressed(I)}$Mark(...e){this.$Writing(...e);const a=this.style;this._painted=s=>n(a,{$vars:`${this.cover?.scheme?.declarations??""} ${this.cover?.window?.declarations??""}`,...s}),this.containers.add(this,this._painted)}write(){return n("span",{className:"pd-drawing",dangerouslySetInnerHTML:{__html:this.cover?.drawing??""}})}$Define(){super.$Define(),this.classes.add(this,"pd-mark")}};r(Un,"$Mark");let es=Un;const Yn=class Yn extends ap{$carriesItsScheme(e){l(e.is(Z),"a bookshelf cover carries its scheme, and this one carries none")}$carriesItsWindow(e){l(e.is(we),"a bookshelf cover carries its window, and this one carries none")}$carriesItsIllustration(e){l(e instanceof y&&e.text.find(g).some(a=>a.is(Re)),"a bookshelf cover carries its illustration, and this one carries none")}};r(Yn,"BookshelfCoverSpecification");let ze=Yn;R([h("a bookshelf cover carries its scheme")],ze.prototype,"$carriesItsScheme");R([h("a bookshelf cover carries its window")],ze.prototype,"$carriesItsWindow");R([h("a bookshelf cover carries its illustration")],ze.prototype,"$carriesItsIllustration");const Zn=class Zn extends m{$saidOfADrawing(e){l(e instanceof g&&e.chapter?.is(I)===!0&&e.text.find(pt).length===1,"an illustration is a paragraph of a cover that holds one drawing, and this is not one")}};r(Zn,"IllustrationSpecification");let wa=Zn;R([h("an illustration is a paragraph of a cover that holds one drawing")],wa.prototype,"$saidOfADrawing");const Kn=class Kn extends m{$isACover(e){l(e instanceof y&&e.is(I),"a cover has a scheme, and this is not a cover")}$givenItsColours(e){const a=e.annotations.expressed(Z)?.colours??[];l(a.every(s=>/^#[0-9a-f]{6}$/iu.test(s)),"a scheme is given its six colours as six hex digits each — the ground, the band and its ink, the foot and its ink, and the ink of the drawing — and this one was given something else")}};r(Kn,"SchemeSpecification");let Fe=Kn;R([h("a cover has a scheme")],Fe.prototype,"$isACover");R([h("a scheme is given its six colours")],Fe.prototype,"$givenItsColours");const Xn=class Xn extends m{$isACover(e){l(e instanceof y&&e.is(I),"a cover has a window, and this is not a cover")}$givenItsPlace(e){const a=e.annotations.expressed(we);l(/^-?\d+$/u.test(a?.$x??"")&&/^-?\d+$/u.test(a?.$y??""),"a window is given where it stands on the drawing, two whole numbers, and this one was given something else")}};r(Xn,"WindowSpecification");let Ee=Xn;R([h("a cover has a window")],Ee.prototype,"$isACover");R([h("a window is given where it stands on the drawing")],Ee.prototype,"$givenItsPlace");const Jn=class Jn extends m{$saidOfAChapterStandingForABook(e){l(e instanceof y&&(e.is(Y)||e.is(I)||e.is(T)),"a volume is a chapter that stands for another book, a synopsis of it, a cover filed under it or a design of it, and this is none")}$holdsTheCover(e){const a=[e.annotations.expressed(Y)?.means?.identifier,e.annotations.expressed(yd)?.means?.identifier,e.annotations.expressed(go)?.means?.identifier,e.annotations.expressed(T)?.identifier,...[...e.annotations].map(s=>s.means?.identifier)];l(e.annotations.find(C).every(s=>s.cover?.is(I)===!0&&a.includes(s.cover.mention?.identifier)),"a volume holds the cover of a book its chapter stands for or names, the book a synopsis or a design is of, the subject or author a cover is filed under or a book another line of the cover names, and one here holds something else")}};r(Jn,"VolumeSpecification");let Ge=Jn;R([h("a volume is a chapter that stands for another book")],Ge.prototype,"$saidOfAChapterStandingForABook");R([h("a volume holds the cover of a book its chapter stands for or names")],Ge.prototype,"$holdsTheCover");const Td=o(xe),vt=o(Re),yt=o(Z),xt=o(we),qe=o(C),fc=o(Vt),gc=o(ya),uc=o(St),Hd=o(es),bc=Hd,mc=uc;var $c=Object.defineProperty,kc=Object.getOwnPropertyDescriptor,vc=r((p,e,a,s)=>{for(var t=kc(e,a),i=p.length-1,d;i>=0;i--)(d=p[i])&&(t=d(e,a,t)||t);return t&&$c(e,a,t),t},"__decorateClass$i");const it=class it extends tp{constructor(){super(...arguments),this.specification=new za,this.themeProvider=!0,this.style=w.div`
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
    `}get rules(){return this.parts().flat(1/0).filter(e=>typeof e=="string").join("")}get pages(){return this.book.pages}get open(){const e=this.book;return e.open??e.synopsis}$Bound(){const e=this.style,a=this.book;this.style=s=>n(e,{$at:a.means?.identifier,$scheme:a.cover?.annotations.expressed(Z)?.declarations,...s}),super.$Bound()}defines(e){for(const s of e.annotations.after(this))s instanceof it&&e.annotations.express(s,!1);super.defines(e),e.classes.add(this,"pa-layout");const a=this.book.open;a!==void 0&&e.classes.add(this,"pa-turned"),a?.is(N)&&e.classes.add(this,"pa-manual")}erase(e){super.erase(e),e.classes.revert(this)}parts(){return[this.paging(),this.regions(),this.areas(),this.phone()]}paging(){return f`
            .pa-page:not(.pa-open) { display: none; }
        `}regions(){return f`
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
        `}areas(){return f`
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
        `}phone(){return f`
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
        `}};r(it,"$Layout");let Oe=it;const Qn=class Qn extends M{$placesTheSideAndNeverDressesIt(e){for(const a of e.annotations.find(Oe)){const s=(a.rules.match(/[^{};]*\.pd-holds\s+[^\s{},][^{};]*\{/gu)??[]).map(t=>t.trim());l(s.length===0,`a layout places the side and never dresses it, what stands in the side being the index's and the folder's, and this one says "${s[0]}"`)}}};r(Qn,"LayoutSpecification");let za=Qn;vc([h("a layout places the side and never dresses it")],za.prototype,"$placesTheSideAndNeverDressesIt");const wt=o(Oe),dt=class dt extends b{constructor(){super(...arguments),this.specification=new M}defines(e){for(const a of e.annotations.after(this))a instanceof dt&&e.annotations.express(a,!1);e.classes.add(this,"pa-tone")}erase(e){e.classes.revert(this)}};r(dt,"$Tone");let De=dt;const Vn=class Vn extends De{defines(e){super.defines(e),e.classes.add(this,"pa-dark")}};r(Vn,"$Dark");let as=Vn;const Sn=class Sn extends De{defines(e){super.defines(e),e.classes.add(this,"pa-light")}};r(Sn,"$Light");let ts=Sn;const er=class er extends De{defines(e){super.defines(e),e.classes.add(this,"pa-white-over-black")}};r(er,"$WhiteOverBlack");let ss=er;const te=o(De),Wd=o(as),ue=o(ts),yc=o(ss);var xc=Object.defineProperty,wc=Object.getOwnPropertyDescriptor,zc=r((p,e,a,s)=>{for(var t=wc(e,a),i=p.length-1,d;i>=0;i--)(d=p[i])&&(t=d(e,a,t)||t);return t&&xc(e,a,t),t},"__decorateClass$h");const ar=class ar extends j{write(){const e=this.book.body;return`${e.indexOf(this.chapter)+1} of ${e.length}`}$Define(){super.$Define(),this.classes.add(this,"pd-count")}};r(ar,"$Count");let os=ar;const tr=class tr extends b{constructor(){super(...arguments),this.specification=new Ue}defines(e){e.classes.add(this,"pa-before")}erase(e){e.classes.revert(this)}};r(tr,"$Before");let ns=tr;const sr=class sr extends b{constructor(){super(...arguments),this.specification=new Ue}defines(e){e.classes.add(this,"pa-after")}erase(e){e.classes.revert(this)}};r(sr,"$After");let rs=sr;const or=class or extends m{$saidOfAWordOfATurn(e){l(e instanceof j&&e.parent instanceof Oa,"this is said of a word of a turn, and here it is said of something else")}};r(or,"OfATurnSpecification");let Ue=or;zc([h("this is said of a word of a turn")],Ue.prototype,"$saidOfAWordOfATurn");const Oc=o(os),Dc=o(ns),jc=o(rs),nr=class nr extends g{get before(){const e=this.book.body;return e[e.indexOf(this.chapter)-1]??this.chapter}get after(){const e=this.book.body;return e[e.indexOf(this.chapter)+1]??this.chapter}write(){const e=o(D),a=o(Oc),s=o(Dc),t=o(jc),i=o(this.before===this.chapter?Ot:x),d=o(this.after===this.chapter?Ot:x);return c(v,{children:[c(e,{children:[n(s,{}),n(i,{children:this.before.mention.identifier}),"← ",this.before.title.name]}),n(a,{}),c(e,{children:[n(t,{}),n(d,{children:this.after.mention.identifier}),this.after.title.name," →"]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-turn")}};r(nr,"$Turn");let Oa=nr;const Pc=o(Oa);var Cc=Object.defineProperty,Ac=Object.getOwnPropertyDescriptor,oa=r((p,e,a,s)=>{for(var t=s>1?void 0:s?Ac(e,a):e,i=p.length-1,d;i>=0;i--)(d=p[i])&&(t=(s?d(e,a,t):d(t))||t);return s&&t&&Cc(e,a,t),t},"__decorateClass$g");const rr=class rr extends sp{constructor(){super(...arguments),this.specification=new B}get chapters(){return this.text.find(y).filter(e=>[...e.classes].includes("pd-canonical"))}get laidOutChapters(){return[this.cover,this.synopsis,this.table,...this.chapters]}get pages(){return[this.synopsis,...this.chapters].filter(e=>e!==void 0)}get body(){const e=this.appendix;return this.chapters.filter(a=>!e.includes(a))}get entries(){return this.body}get appendix(){const e=this.table;if(e===void 0)return[];const a=e.text.find(A).filter(s=>s.is(Le)).flatMap(s=>s.text.find(g).map(t=>W(t)?.identifier));return this.chapters.filter(s=>a.includes(s.mention?.identifier??""))}get open(){return this.$bookmark===void 0?void 0:this.chapterAt(this.$bookmark)}get tones(){return[Wd,ue,yc]}get topics(){return this.cover?.annotations.find(xd)??[]}get subjectCover(){return this.coverOf(this.subject?.means?.identifier)}write(){return c(v,{children:[n("div",{className:"pd-library",children:this.library()}),n("div",{className:"pd-me",children:this.me()}),n("div",{className:"pd-holds",children:this.holds()}),n("div",{className:"pd-head",children:this.head()}),c("div",{className:"pd-pages",children:[this.aboveThePages(),this.pages.map((e,a)=>{const s=o(e);return n(s,{},a)}),this.belowThePages()]})]})}library(){if(this._logo===void 0)return;const e=o(this._logo);return n(e,{})}me(){const e=o(Hd),a=o(x),s=o(mp),t=this.coverOf(this.author?.means?.identifier);return c(v,{children:[this.byline(),t===void 0?void 0:this.painted(t,n(e,{cover:t,children:n(a,{children:t.mention.identifier})})),this.topics.length===0?void 0:n(s,{cover:this.cover})]})}painted(e,a,s){return me(e,a,s)}holds(){const e=o(this.table);return n(e,{})}head(){const e=o(this.cover);return c(v,{children:[n(e,{}),n("div",{className:"pd-switches",children:this.switches()})]})}aboveThePages(){}belowThePages(){}chapterAt(e){return(this._chapterByPlace??this.chapterByPlace()).get(e)}chapterByPlace(){const e=new Map;for(const a of this.chapters)for(const s of this.sections(a))s.mention!==void 0&&!e.has(s.mention.identifier)&&e.set(s.mention.identifier,a);for(const a of this.chapters)a.mention!==void 0&&e.set(a.mention.identifier,a);for(const a of this.entries)a.mention!==void 0&&!e.has(a.mention.identifier)&&e.set(a.mention.identifier,a);return e}placeWithin(e){return e.startsWith("#")?`${this.means?.identifier??""}${e}`:e}coverOf(e){if(e!==void 0)return this.means?.identifier===e?this.cover:this.cover?.annotations.find(C).map(a=>a.cover).find(a=>a?.mention?.identifier===e)}byline(){const e=o(Dd);return n(e,{chapter:this.cover})}root(){const e=o(tc);return n(e,{cover:this.cover})}switches(){}sections(e){return e.text.find(A).flatMap(a=>[a,...this.sections(a)])}sectionOf(e){const a=this.table;return a===void 0?void 0:this.sections(a).find(s=>s.canonical?.name===e.name)}turn(){this.bookmark!==this.cover&&super.turn()}$Define(){super.$Define();const e=o(wt),a=o(te);this.annotations.add(this,n(e,{}),n(a,{}))}$Bound(){this._chapterByPlace=this.chapterByPlace();const e=o(Oo),a=this.table?.annotations.expressed(ae);for(const i of a?.parts??[]){const d=this.sectionOf(i);d===void 0||d.is(ua)||!i.chapters.some(u=>u.is(N))||d.annotations.add(this,n(e,{}))}const s=this.root();s!==void 0&&this.table?.text.add(this,s);const t=o(gc);this._logo=op.chemical(n(t,{cover:this.cover,subject:this.subjectCover}),this),this.turns(),super.$Bound()}turns(){const e=o(Pc);for(const a of this.body)a.text.add(this,n(e,{}))}};r(rr,"$LibraryBook");let _=rr;oa([ee()],_.prototype,"_chapterByPlace",2);const ir=class ir extends np{$holdsOnlyChapters(e){l([...e.text].every(a=>a instanceof y),"a book of this library holds only chapters, and this one holds something else")}$placesEveryChapter(e){l(e.text.find(y).every(a=>e.laidOutChapters.includes(a)),"a book of this library has a place for every chapter it holds, and this one holds a chapter it places nowhere")}$onlyAChapterAppends(e){l(e.text.find(y).every(a=>e.chapters.includes(a)||!a.is(J)),"only an ordinary chapter files a file, and here a cover, a synopsis or a table of contents files one")}$listsEachManualPart(e){const s=(e.table?.annotations.expressed(ae)?.parts??[]).find(t=>t.chapters.some(i=>i.is(N))&&e.sectionOf(t)===void 0);l(s===void 0,`a part read as a manual is listed under a section headed with its name, and "${s?.name}" has none`)}};r(ir,"LibraryBookSpecification");let B=ir;oa([h("a book of this library holds only chapters")],B.prototype,"$holdsOnlyChapters",1);oa([h("a book of this library has a place for every chapter it holds")],B.prototype,"$placesEveryChapter",1);oa([h("only an ordinary chapter files a file")],B.prototype,"$onlyAChapterAppends",1);oa([h("a part read as a manual is listed under a section headed with its name")],B.prototype,"$listsEachManualPart",1);const Bd=o(_);o(Bd,fe)(hp);o(Bd,te)(Wd);var Nc=Object.defineProperty,Ic=Object.getOwnPropertyDescriptor,Mc=r((p,e,a,s)=>{for(var t=Ic(e,a),i=p.length-1,d;i>=0;i--)(d=p[i])&&(t=d(e,a,t)||t);return t&&Nc(e,a,t),t},"__decorateClass$f");const dr=class dr extends _{constructor(){super(...arguments),this.specification=new Ye}get open(){return super.open??this.body[0]}head(){}switches(){}root(){}$Define(){super.$Define(),this.$is=[yo,Ad]}$Bound(){const e=o(Oo);for(const a of this.table?.text.find(A)??[])a.annotations.add(this,n(e,{})),a.is(Le)&&(a.$is=[zo]);super.$Bound()}};r(dr,"$Manual");let Da=dr;const pr=class pr extends B{$everyChapterHasABrief(e){l(e.chapters.every(a=>a.text.find(g).some(s=>s.is(pa))),"every chapter of a manual opens with a brief, and one here has none")}};r(pr,"ManualSpecification");let Ye=pr;Mc([h("every chapter of a manual opens with a brief")],Ye.prototype,"$everyChapterHasABrief");const Do=o(Da);o(Do,te)(ue);const cr=class cr extends de{constructor(){super(...arguments),this.label=w.span.attrs({className:"pa-number"})``}get number(){return this.book.body.indexOf(this.referencedChapter)+1}get keyed(){return this.referencedChapter?.annotations.expressed(X)}note(){const e=this.label,a=o(Pd),s=this.keyed;return c(v,{children:[super.note(),s===void 0?void 0:n(a,{keyed:s}),this.number===0?void 0:n(e,{children:String(this.number)})]})}};r(cr,"$NumberedEntry");let is=cr;const Tc=o(is);o(Do,Id)(Tc);const lr=class lr extends xe{constructor(){super(...arguments),this.style=w.header`
        .pd-chapter.pa-cover { margin-block: 0; }
        .pa-cover .pd-title {
            font-size: calc(1.04 * ${({theme:e})=>e.size});
            font-weight: 600;
        }
    `}};r(lr,"$ManualCover");let ds=lr;const hr=class hr extends ae{constructor(){super(...arguments),this.style=w.nav`
        .pa-table-of-contents .pa-reference { color: inherit; text-decoration: none; }
    `}};r(hr,"$ManualTableOfContents");let ps=hr;const Hh=o(ds);o(ps);const fr=class fr extends re{constructor(){super(...arguments),this.measure="104ch",this.holdsColumn="272px",this.barHeight="52px",this.space="24px",this.size="14px",this.beat="0.22s",this.serif="'Source Serif 4', Georgia, serif",this.paper="#fdfcfa",this.ink="#343c4a",this.heading="#1a1f36",this.soft="#727d8c",this.faint="#9ea8b5",this.line="#e4e9f2",this.tint="#f0f4fc",this.barTint="#f8fafe",this.side="#f7f8fb",this.sideInk="#3a4452",this.sideDim="#6b7684",this.sideLine="#e0e4eb",this.sky="#e3edfb",this.skyInk="#4a6ea0",this.accent="#4a6ea0",this.colour="#4fb3a8",this.radius="6px",this.wash="linear-gradient(135deg, #f1f5fd 0%, #fdfcfa 48%, #fdf5ee 100%)"}parts(){return[...super.parts(),this.tree(),this.icons(),this.small()]}library(){return f`
            ${super.library()}
            .pd-book.pa-tone .pd-library {
                background: linear-gradient(180deg, #fbfcfe 0%, #f8fafe 60%, #f1f4fa 100%);
                border-block-end: thin solid #dfe4ed;
                box-shadow: 0 1px 0 rgba(43, 54, 60, 0.05);
            }
        `}holds(){return f`
            ${super.holds()}
            .pd-holds .pd-paragraph.pa-entry::before { content: none; }
        `}page(){return f`
            ${super.page()}
            .pd-book { line-height: 1.6; }
            .pd-book.pa-layout { background: ${({theme:e})=>e.wash}; }
            .pd-book .pd-head { display: none; padding: 0; }
        `}tree(){return f`
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
        `}icons(){return f`
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
        `}small(){return f`
            @media (max-width: ${({theme:e})=>e.narrow}) {
                .pd-holds, .pd-library { border-inline-end: none; border-block-end: thin solid ${({theme:e})=>e.line}; }
                .pd-holds .pd-chapter { min-height: 0; }
            }
        `}};r(fr,"$ManualTheme");let cs=fr;const Ld=o(cs);o(Do,fe)(Ld);var Hc=Object.defineProperty,Wc=Object.getOwnPropertyDescriptor,Bc=r((p,e,a,s)=>{for(var t=Wc(e,a),i=p.length-1,d;i>=0;i--)(d=p[i])&&(t=d(e,a,t)||t);return t&&Hc(e,a,t),t},"__decorateClass$e");const gr=class gr extends b{constructor(){super(...arguments),this.specification=new ja}defines(e){e.classes.add(this,"pa-first")}erase(e){e.classes.revert(this)}};r(gr,"$First");let ls=gr;const ur=class ur extends m{$saidOfAParagraph(e){l(e instanceof g,"first is said of a paragraph, and this is not one")}};r(ur,"FirstSpecification");let ja=ur;Bc([h("first is said of a paragraph")],ja.prototype,"$saidOfAParagraph");o(ls);const br=class br extends re{constructor(){super(...arguments),this.serif="'Source Serif 4', Georgia, serif",this.paper="#fdfcfa",this.ink="#343c4a",this.soft="#727d8c",this.faint="#9ea8b5",this.line="#e4e9f2",this.tint="#f0f4fc",this.barTint="#f8fafe",this.sky="#e3edfb",this.skyInk="#4a6ea0",this.accent="#4a6ea0",this.wash="linear-gradient(135deg, #f2f6fd 0%, #fdfcfa 48%, #fdf6f1 100%)",this.side="#f7f8fb",this.sideInk="#3a4452",this.sideDim="#7f8a9b",this.sideLine="#e3e7ee",this.barHeight="52px",this.holdsColumn="232px",this.space="24px",this.cover="132px",this.volume="184px",this.radius="6px",this.spine="inset 3px 0 0 rgba(0, 0, 0, 0.08), inset 4px 0 0 rgba(255, 255, 255, 0.35), 0 6px 12px -10px rgba(44, 52, 64, 0.3)",this.lift="inset 3px 0 0 rgba(0, 0, 0, 0.08), inset 4px 0 0 rgba(255, 255, 255, 0.35), 0 10px 16px -12px rgba(44, 52, 64, 0.35)",this.openSpine="inset 7px 0 0 rgba(0, 0, 0, 0.07), inset 9px 0 0 rgba(255, 255, 255, 0.45), 0 12px 22px -16px rgba(44, 52, 64, 0.35)"}parts(){return[...super.parts(),this.shelf(),this.jackets(),this.desk(),this.unfolded(),this.small()]}page(){return f`
            font-family: ${({theme:e})=>e.font};
            font-size: ${({theme:e})=>e.size};
            line-height: 1.55;
            color: ${({theme:e})=>e.ink};
            background: ${({theme:e})=>e.wash};
            min-height: 100vh;
        `}library(){return f`
            ${super.library()}
            .pd-names .pd-name { font-family: ${({theme:e})=>e.serif}; font-size: calc(1.286 * ${({theme:e})=>e.size}); font-weight: 700; letter-spacing: -0.015em; }
        `}head(){return f`
            .pd-head { padding: 0; }
            .pd-head .pa-illustration { display: none; }
        `}holds(){return f`
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
        `}shelf(){return f`
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
        `}jackets(){return f`
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
        `}desk(){return f`
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
        `}unfolded(){return f`
            .pa-unfolded-desk .pd-shelf { display: none; }
            .pa-unfolded-desk .pd-container.pd-catalogue-desk.pa-open { height: auto; margin-block-end: 0; }
            .pa-unfolded-desk .pd-container.pd-catalogue-desk.pa-open .pd-paragraph.pd-jacket { position: sticky; top: calc(${({theme:e})=>e.space} * 0.833); }
            .pa-unfolded-desk .pd-container.pd-catalogue-desk.pa-open .pd-words { max-height: none; max-width: 72ch; overflow: visible; mask-image: none; }
            .pa-unfolded-desk .pd-container.pd-catalogue-desk.pa-open .pd-words .pd-paragraph { font-size: calc(1.143 * ${({theme:e})=>e.size}); line-height: 1.6; }
            .pa-unfolded-desk .pd-container.pd-catalogue-desk.pa-open .pd-word.pd-switch { top: calc(${({theme:e})=>e.space} * 0.667); right: ${({theme:e})=>e.space}; bottom: auto; }
            .pa-unfolded-desk .pd-container.pd-catalogue-desk.pa-open .pd-word.pd-switch::after { transform: translateY(calc(${({theme:e})=>e.space} / 24)) rotate(180deg); }
        `}context(){return f`
            ${super.context()}
            .pd-book.pa-manual .pd-holds .pd-tree-folder { margin-block-start: 0; }
            .pd-book.pa-manual .pd-holds .pd-section.pa-appendix { margin-block-start: 0; padding-block-start: 0; border-block-start: 0; opacity: 1; }
            .pd-book.pa-manual .pd-holds .pd-section.pa-appendix .pd-heading { font-size: calc(0.75 * ${({theme:e})=>e.size}); }
            .pd-book.pa-manual .pd-holds .pd-section.pa-appendix .pa-entry { font-size: calc(0.964 * ${({theme:e})=>e.size}); font-weight: 500; }
            .pd-book.pa-manual .pd-holds .pd-section.pa-appendix .pa-entry::before { background: ${({theme:e})=>e.skyInk}; }
            .pd-book.pa-manual .pd-shelf { display: none; }
        `}small(){return f`
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
        `}};r(br,"$Bookshelf");let hs=br;const Lc=o(hs);var _c=Object.defineProperty,Rc=Object.getOwnPropertyDescriptor,zt=r((p,e,a,s)=>{for(var t=s>1?void 0:s?Rc(e,a):e,i=p.length-1,d;i>=0;i--)(d=p[i])&&(t=(s?d(e,a,t):d(t))||t);return s&&t&&_c(e,a,t),t},"__decorateClass$d");const mr=class mr extends _{get books(){return this.text.find(y).filter(e=>e.is(Y)&&e!==this.synopsis)}get laidOutChapters(){return[...super.laidOutChapters,...this.books]}get pages(){return[this.synopsis,...this.books,...this.chapters]}head(){return n("div",{className:"pd-switches",children:this.switches()})}belowThePages(){return n("div",{className:"pd-shelf",children:this.volumes()})}volumes(){const e=o(D),a=o(x);return(this.table?.annotations.expressed(E)?.entries??[]).map((t,i)=>{const d=W(t).identifier,u=this.chapterAt(d),k=u===void 0?this.coverOf(d):this.jacketOf(u);if(k!==void 0)return c("div",{className:"pd-volume",children:[this.jacket(k,d),n("div",{className:"pd-paragraph pd-name",children:c(e,{children:[n(a,{children:d}),k.title.name]})})]},i)})}jacket(e,a){if(e===void 0)return;const s=o(fc),t=o(x);return a===void 0?n(s,{cover:e}):n(s,{cover:e,children:n(t,{children:a})})}line(e){if(e===void 0)return;const a=o(Dd),s=o(bp);return c(v,{children:[n(a,{cover:e}),n(s,{cover:e})]})}wayIntoTheBook(e){if(e===void 0)return;const a=o(D),s=o(x),t=e.mention.identifier;return n("div",{className:"pd-paragraph pd-read",children:c(a,{children:[n(s,{children:t}),`Read ${e.title.name}`]})})}jacketOf(e){return e===this.synopsis?this.cover:e.annotations.expressed(C)?.cover??(this.appendix.includes(e)?void 0:this.cover)}coverOf(e){return super.coverOf(e)??this.books.map(a=>a.annotations.expressed(C)?.cover).find(a=>a!==void 0&&a.mention?.identifier===e)}chapterAt(e){return super.chapterAt(e)??this.books.find(a=>this.placeOf(a)===e)}placeOf(e){const a=e.title?.annotations.expressed(ct)?.identifier,s=this.means?.identifier;if(!(a===void 0||s===void 0))return`${s.replace(/\/+$/u,"")}/#${a}`}$Bound(){const e=o(qc);for(const a of[this.synopsis,...this.books])a?.annotations.add(this,n(e,{}));super.$Bound()}};r(mr,"$Catalogue");let fs=mr;const $r=class $r extends G{constructor(){super(...arguments),this.specification=new Pa,this.card=w.div`
        &:not(.pa-open) { display: none; }
    `}get chapter(){return this.parent}get catalogue(){return this.book}get isTheFront(){return this.chapter===this.catalogue.synopsis}get cover(){return this.catalogue.jacketOf(this.chapter)}$CatalogueDesk(...e){this.$Format(...e);const a=o($t),s=this.card;this.style=({className:t,children:i})=>{const d=this.catalogue,u=this.cover,k=[...this.chapter.classes].includes("pa-open"),$=this.isTheFront?o(d.title):void 0;return d.painted(u,c(s,{className:`${t??""} pd-catalogue-desk${k?" pa-open":""}`.trim(),children:[d.jacket(u),c("div",{className:"pd-words",children:[$===void 0?void 0:n($,{}),i]}),u===void 0||this.isTheFront?void 0:n("div",{className:"pd-line",children:d.line(u)}),d.wayIntoTheBook(u),u===void 0?void 0:n(a,{chapter:this.chapter,annotation:Gc,children:"read on"})]}))}}defines(e){super.defines(e),e.classes.add(this,"pa-catalogue-desk")}erase(e){super.erase(e),e.classes.revert(this)}};r($r,"$CatalogueDesk");let gs=$r;const kr=class kr extends m{$holdsASynopsis(e){l(e instanceof y&&e.is(Y),"a catalogue desk holds a synopsis, and this is not one")}};r(kr,"CatalogueDeskSpecification");let Pa=kr;zt([h("a catalogue desk holds a synopsis")],Pa.prototype,"$holdsASynopsis",1);const vr=class vr extends wd{get identifier(){return this._book??super.identifier}$Bound(){super.$Bound(),this._book=this.chapter?.annotations.expressed(Y)?.means?.identifier}};r(vr,"$BookLink");let Ca=vr;zt([ee()],Ca.prototype,"_book",2);const yr=class yr extends b{constructor(){super(...arguments),this.specification=new Aa}defines(e){e.classes.add(this,"pa-caption")}erase(e){e.classes.revert(this)}};r(yr,"$Caption");let us=yr;const xr=class xr extends b{constructor(){super(...arguments),this.specification=new Na}defines(e){e.classes.add(this,"pa-arrow")}erase(e){e.classes.revert(this)}};r(xr,"$Arrow");let bs=xr;const wr=class wr extends b{constructor(){super(...arguments),this.specification=new M}defines(e){e.classes.add(this,"pa-unfolded-desk")}erase(e){e.classes.revert(this)}};r(wr,"$UnfoldedDesk");let ms=wr;const zr=class zr extends m{$isAParagraph(e){l(e instanceof g,"a caption is a paragraph, and this is not one")}};r(zr,"CaptionSpecification");let Aa=zr;zt([h("a caption is a paragraph")],Aa.prototype,"$isAParagraph",1);const Or=class Or extends m{$isAWordOfTheTable(e){l(e instanceof j&&e.chapter?.is(ae)===!0,"an arrow is a word of the table of contents, and this is not one")}};r(Or,"ArrowSpecification");let Na=Or;zt([h("an arrow is a word of the table of contents")],Na.prototype,"$isAWordOfTheTable",1);const jo=o(fs),Fc=o(gs),Ec=o(Ca);o(us);o(bs);const Gc=o(ms),qc=Fc;o(jo,Ot)(Ec);o(jo,fe)(Lc);o(jo,te)(ue);var Uc=Object.defineProperty,Yc=Object.getOwnPropertyDescriptor,na=r((p,e,a,s)=>{for(var t=Yc(e,a),i=p.length-1,d;i>=0;i--)(d=p[i])&&(t=d(e,a,t)||t);return t&&Uc(e,a,t),t},"__decorateClass$c");const Dr=class Dr extends b{constructor(){super(...arguments),this.specification=new Ma}defines(e){e.classes.add(this,"pa-question")}erase(e){e.classes.revert(this)}};r(Dr,"$Question");let $s=Dr;const jr=class jr extends b{constructor(){super(...arguments),this.specification=new Ta}defines(e){e.classes.add(this,"pa-answer")}erase(e){e.classes.revert(this)}};r(jr,"$Answer");let ks=jr;const Pr=class Pr extends b{constructor(){super(...arguments),this.specification=new Ha}defines(e){e.classes.add(this,"pa-decision")}erase(e){e.classes.revert(this)}};r(Pr,"$Decision");let Ia=Pr;const Cr=class Cr extends b{constructor(){super(...arguments),this.specification=new Wa}defines(e){e.classes.add(this,"pa-pain")}erase(e){e.classes.revert(this)}};r(Cr,"$Pain");let vs=Cr;const Ar=class Ar extends b{constructor(){super(...arguments),this.specification=new Ba}defines(e){e.classes.add(this,"pa-solution")}erase(e){e.classes.revert(this)}};r(Ar,"$Solution");let ys=Ar;const Nr=class Nr extends m{$isAParagraph(e){l(e instanceof g,"a question is a paragraph, and this is not one")}};r(Nr,"QuestionSpecification");let Ma=Nr;na([h("a question is a paragraph")],Ma.prototype,"$isAParagraph");const Ir=class Ir extends m{$isAParagraph(e){l(e instanceof g,"an answer is a paragraph, and this is not one")}};r(Ir,"AnswerSpecification");let Ta=Ir;na([h("an answer is a paragraph")],Ta.prototype,"$isAParagraph");const Mr=class Mr extends m{$isAParagraph(e){l(e instanceof g,"a decision is a paragraph, and this is not one")}};r(Mr,"DecisionSpecification");let Ha=Mr;na([h("a decision is a paragraph")],Ha.prototype,"$isAParagraph");const Tr=class Tr extends m{$isAParagraph(e){l(e instanceof g,"a pain is a paragraph, and this is not one")}};r(Tr,"PainSpecification");let Wa=Tr;na([h("a pain is a paragraph")],Wa.prototype,"$isAParagraph");const Hr=class Hr extends m{$isAParagraph(e){l(e instanceof g,"a solution is a paragraph, and this is not one")}};r(Hr,"SolutionSpecification");let Ba=Hr;na([h("a solution is a paragraph")],Ba.prototype,"$isAParagraph");o($s);o(ks);o(Ia);o(vs);o(ys);var Zc=Object.defineProperty,Kc=Object.getOwnPropertyDescriptor,be=r((p,e,a,s)=>{for(var t=Kc(e,a),i=p.length-1,d;i>=0;i--)(d=p[i])&&(t=d(e,a,t)||t);return t&&Zc(e,a,t),t},"__decorateClass$b");const Wr=class Wr extends b{constructor(){super(...arguments),this.specification=new je,this.span=w.span.attrs({className:"pd-number"})``,this.close=w.span.attrs({className:"pd-close"})``}get number(){const e=O.copy(this.text).trim();return e===""?NaN:Number(e)}note(){const e=this.span,a=this.close,s=o(D),t=o(x),i=this.chapter?.mention?.identifier;return c(v,{children:[n(e,{children:this.number}),i===void 0?void 0:n(a,{children:c(s,{children:[n(t,{children:i}),"×"]})})]})}defines(e){e.classes.add(this,"pa-concept")}erase(e){e.classes.revert(this)}};r(Wr,"$Concept");let K=Wr;const Br=class Br extends b{constructor(){super(...arguments),this.specification=new Ke}defines(e){e.classes.add(this,"pa-designed")}erase(e){e.classes.revert(this)}};r(Br,"$Designed");let xs=Br;const Lr=class Lr extends b{constructor(){super(...arguments),this.specification=new Ke}defines(e){e.classes.add(this,"pa-decided")}erase(e){e.classes.revert(this)}};r(Lr,"$Decided");let ws=Lr;const _r=class _r extends b{constructor(){super(...arguments),this.specification=new Pe}defines(e){e.classes.add(this,"pa-desk")}erase(e){e.classes.revert(this)}};r(_r,"$Desk");let La=_r;const Rr=class Rr extends b{constructor(){super(...arguments),this.specification=new Pe}defines(e){e.classes.add(this,"pa-phone")}erase(e){e.classes.revert(this)}};r(Rr,"$Phone");let _a=Rr;const Fr=class Fr extends b{constructor(){super(...arguments),this.specification=new Pe}defines(e){e.classes.add(this,"pa-thumbnail")}erase(e){e.classes.revert(this)}};r(Fr,"$Thumbnail");let Ze=Fr;const Er=class Er extends b{constructor(){super(...arguments),this.specification=new Ce}defines(e){e.classes.add(this,"pa-precedent")}erase(e){e.classes.revert(this)}};r(Er,"$Precedent");let zs=Er;const Gr=class Gr extends b{constructor(){super(...arguments),this.specification=new Ce}defines(e){e.classes.add(this,"pa-source")}erase(e){e.classes.revert(this)}};r(Gr,"$Source");let Os=Gr;const qr=class qr extends b{constructor(){super(...arguments),this.specification=new Ra}defines(e){e.classes.add(this,"pa-where")}erase(e){e.classes.revert(this)}};r(qr,"$Where");let Ds=qr;const Ur=class Ur extends m{$isASection(e){l(e instanceof A,"a concept is a section, and this is not one")}$givenItsNumber(e){l(Number.isInteger(e.annotations.expressed(K)?.number),"a concept is given its number, and this one was given something else")}$photographedThreeWays(e){const a=e.text.find(g);l([La,_a,Ze].every(s=>a.some(t=>t.is(s))),"a concept is photographed at a desk, at a phone, and small, and this one is missing a photograph")}};r(Ur,"ConceptSpecification");let je=Ur;be([h("a concept is a section")],je.prototype,"$isASection");be([h("a concept is given its number")],je.prototype,"$givenItsNumber");be([h("a concept is photographed at a desk, at a phone, and small")],je.prototype,"$photographedThreeWays");const Yr=class Yr extends m{$isAParagraphHoldingOneImage(e){l(e instanceof g&&e.text.find(bo).length===1,"a photograph is a paragraph that holds one image, and this is not one")}};r(Yr,"PhotographSpecification");let Pe=Yr;be([h("a photograph is a paragraph that holds one image")],Pe.prototype,"$isAParagraphHoldingOneImage");const Zr=class Zr extends m{$saidOfAParagraphOfAConcept(e){l(e instanceof g&&e.parent instanceof rp&&e.parent.is(K),"this is said of a paragraph of a concept, and here it is said of something else")}};r(Zr,"OfAConceptSpecification");let Ce=Zr;be([h("this is said of a paragraph of a concept")],Ce.prototype,"$saidOfAParagraphOfAConcept");const Kr=class Kr extends Ce{$refersToWhereItIsBuilt(e){l(e.text.find(j).some(a=>a.is(ne)),"a where refers to where the concept is built, and this one refers nowhere")}};r(Kr,"WhereSpecification");let Ra=Kr;be([h("a where refers to where the concept is built")],Ra.prototype,"$refersToWhereItIsBuilt");const Xr=class Xr extends m{$saidOfAConcept(e){l(e.is(K),"this is said of a concept, and here it is said of something else")}};r(Xr,"OfAConceptSectionSpecification");let Ke=Xr;be([h("this is said of a concept")],Ke.prototype,"$saidOfAConcept");o(K);o(xs);o(ws);o(La);o(_a);o(Ze);o(zs);o(Os);o(Ds);var Xc=Object.defineProperty,Jc=Object.getOwnPropertyDescriptor,_d=r((p,e,a,s)=>{for(var t=Jc(e,a),i=p.length-1,d;i>=0;i--)(d=p[i])&&(t=d(e,a,t)||t);return t&&Xc(e,a,t),t},"__decorateClass$a");const Qc=r((p,e)=>p.chapters.flatMap(a=>p.sections(a)).find(a=>a.is(K)&&a.mention?.identifier===e),"conceptAt"),Vc=r(p=>{const e=p.text.find(g).find(a=>a.is(Ze))?.text.find(bo)[0];return e===void 0?"":e.contents||O.copy(e.text)},"thumbnailOf"),Jr=class Jr extends G{constructor(){super(...arguments),this.specification=new Fa,this.themeProvider=!0,this.style=w.div`
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
    `}get chapter(){return this.parent}get concepts(){return this.book.sections(this.chapter).filter(e=>e.is(K))}get open(){return this.concepts.find(e=>e.mention?.identifier===this.book?.$bookmark)}defines(e){super.defines(e),e.classes.add(this,"pa-gallery");const a=this.open,s=this.concepts.find(t=>[...t.classes].includes("pa-open"));s!==a&&(s?.classes.revert(this),a?.classes.add(this,"pa-open"))}erase(e){super.erase(e),e.classes.revert(this)}};r(Jr,"$Gallery");let js=Jr;const Qr=class Qr extends G{constructor(){super(...arguments),this.specification=new Ea,this.strip=w.div`
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
    `}get paragraph(){return this.parent}get places(){return this.paragraph.text.find(j).map(e=>e.annotations.expressed(ne)?.identifier).filter(e=>e!==void 0)}get concepts(){const e=this.book;return[...new Set(this.places.map(a=>Qc(e,a)).filter(a=>a!==void 0))]}get chosen(){const e=this.paragraph.parent?.text.find(g).filter(a=>a.is(Ia))??[];return new Set(e.flatMap(a=>a.text.find(j).map(s=>s.annotations.expressed(ne)?.identifier)).filter(a=>a!==void 0))}$Strip(...e){this.$Format(...e);const a=this.strip,s=o(D),t=o(x);this.style=({className:i,children:d})=>{const u=this.chosen;return c(a,{className:`${i??""} pd-strip`.trim(),children:[this.concepts.map((k,$)=>{const z=k.mention.identifier;return c(s,{children:[n(t,{children:z}),c("span",{className:`pd-thumb${u.has(z)?" pd-chosen":""}`,children:[n("img",{src:Vc(k),alt:""}),c("span",{className:"pd-name",children:[n("span",{className:"pd-number",children:k.annotations.expressed(K)?.number}),k.canonical?.name]})]})]},$)}),n("span",{className:"pd-said",children:d})]})}}defines(e){super.defines(e),e.classes.add(this,"pa-strip")}erase(e){super.erase(e),e.classes.revert(this)}};r(Qr,"$Strip");let Ps=Qr;const Vr=class Vr extends m{$isAChapter(e){l(e instanceof y,"a gallery is a chapter, and this is not one")}};r(Vr,"GallerySpecification");let Fa=Vr;_d([h("a gallery is a chapter")],Fa.prototype,"$isAChapter");const Sr=class Sr extends m{$isAParagraphReferringToConcepts(e){l(e instanceof g&&e.text.find(j).some(a=>a.annotations.expressed(ne)!==void 0),"a strip is a paragraph that refers to concepts, and this one refers to nothing")}};r(Sr,"StripSpecification");let Ea=Sr;_d([h("a strip is a paragraph that refers to concepts")],Ea.prototype,"$isAParagraphReferringToConcepts");o(js);o(Ps);const ei=class ei extends re{constructor(){super(...arguments),this.accent="#23407a",this.ink="#343c4a",this.heading="#1a1f36",this.soft="#727d8c",this.faint="#9ea8b5",this.line="#e4e9f2",this.paper="#fdfcfa",this.side="#f8f9fb",this.holdsColumn="256px",this.barHeight="52px",this.card="12.5rem",this.shadow="0 1px 2px rgba(43, 54, 60, 0.05), 0 6px 18px rgba(43, 54, 60, 0.05)",this.lift="0 2px 4px rgba(43, 54, 60, 0.06), 0 14px 32px rgba(43, 54, 60, 0.10)",this.barLight="#fcfcfd",this.barMid="#f8f9fc",this.barDeep="#f2f4f9",this.barShadow="0 1px 0 rgba(43, 54, 60, 0.05)",this.sideLight="#fafbfc",this.sideDeep="#f2f4f8",this.codeGround="#f6f7fa",this.hairline="1px",this.stroke="2px",this.rise="-1px",this.gloss="inset 0 1px 0 rgba(255, 255, 255, 0.7)",this.ring="0 0 0 2px color-mix(in oklab, var(--band) 80%, white)",this.decisionShadow="0 1px 2px rgba(43, 54, 60, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.6)"}parts(){return[...super.parts(),this.backdrop(),this.bands(),this.guide(),this.story(),this.said(),this.small()]}backdrop(){return f`
            .pd-book .pd-pages { background: linear-gradient(135deg, color-mix(in oklab, var(--band) 10%, white) 0%, ${({theme:e})=>e.paper} 48%, color-mix(in oklab, var(--foot) 8%, white) 100%); }
        `}bands(){return f`
            .pd-book .pd-library { position: relative; background: linear-gradient(180deg, ${({theme:e})=>e.barLight} 0%, ${({theme:e})=>e.barMid} 60%, ${({theme:e})=>e.barDeep} 100%); border-block-end: thin solid ${({theme:e})=>e.line}; box-shadow: ${({theme:e})=>e.barShadow}; }
            .pd-book .pd-library::after { content: ''; position: absolute; left: 0; right: 0; bottom: calc(-1 * ${({theme:e})=>e.hairline}); height: ${({theme:e})=>e.stroke}; background: linear-gradient(90deg, var(--band) 0 40%, var(--ground) 40% 70%, var(--foot) 70%); opacity: 0.75; }
        `}guide(){return f`
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
        `}story(){return f`
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
        `}said(){return f`
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
        `}small(){return f`
            @media (max-width: ${({theme:e})=>e.narrow}) {
                .pd-book .pd-holds, .pd-book .pd-library { border-inline-end: none; }
                .pd-book .pd-holds .pd-paragraph.pa-entry.pa-plate { min-height: calc(2 * ${({theme:e})=>e.size}); gap: calc(${({theme:e})=>e.space} / 4); font-size: calc(0.9286 * ${({theme:e})=>e.size}); }
                .pd-book .pd-holds .pa-entry.pa-plate .pd-plate { display: none; }
                .pd-book .pd-pages .pd-chapter { padding: calc(${({theme:e})=>e.space} * 0.8333) calc(${({theme:e})=>e.space} * 0.6667) calc(${({theme:e})=>e.space} * 2); }
                .pd-book .pd-pages .pd-title { font-size: calc(2 * ${({theme:e})=>e.size}); }
            }
        `}};r(ei,"$Exhibition");let Cs=ei;const Sc=o(Cs);var el=Object.defineProperty,al=Object.getOwnPropertyDescriptor,Rd=r((p,e,a,s)=>{for(var t=al(e,a),i=p.length-1,d;i>=0;i--)(d=p[i])&&(t=d(e,a,t)||t);return t&&el(e,a,t),t},"__decorateClass$9");const ai=class ai extends _{constructor(){super(...arguments),this.specification=new Xe}get designs(){return this.chapters.filter(e=>e.is(T))}get open(){return super.open??this.body[0]}head(){}switches(){}$Bound(){const e=o(pc),a=o(dc),s=o(cc),t=this.designs;for(const i of t)i.annotations.add(this,n(e,{})),i.text.add(this,n(s,{}));for(const i of this.table?.annotations.expressed(E)?.entries??[]){const d=W(i)?.identifier,u=d===void 0?void 0:this.chapterAt(d);u===void 0||!t.includes(u)||i.annotations.add(this,n(a,{number:t.indexOf(u)+1}))}super.$Bound()}};r(ai,"$Portfolio");let As=ai;const ti=class ti extends B{$everyChapterInAPart(e){l(e.chapters.every(a=>a.part!==void 0),"every chapter of a portfolio is in a part, and one here is in none")}$showsEveryDesign(e){l(e.designs.every(a=>kt(a,g).some(s=>s.is(_e))),"a portfolio shows every design it holds as built, in a paragraph said to be the exhibit, and one here has none")}};r(ti,"PortfolioSpecification");let Xe=ti;Rd([h("every chapter of a portfolio is in a part")],Xe.prototype,"$everyChapterInAPart");Rd([h("a portfolio shows every design it holds as built")],Xe.prototype,"$showsEveryDesign");const Fd=o(As);o(Fd,fe)(Sc);o(Fd,te)(ue);const si=class si extends xe{};r(si,"$PortfolioCover");let Ns=si;o(Ns);const oi=class oi extends re{constructor(){super(...arguments),this.prose="'Source Serif 4', Georgia, serif",this.ink="#343c4a",this.heading="#1a1f36",this.soft="#727d8c",this.faint="#9ea8b5",this.line="#e4e9f2",this.paper="#ffffff",this.side="#f8f9fb",this.holdsColumn="240px",this.barHeight="52px",this.shadow="0 1px 2px rgba(43, 54, 60, 0.05), 0 6px 18px rgba(43, 54, 60, 0.05)",this.lift="0 2px 4px rgba(43, 54, 60, 0.06), 0 14px 32px rgba(43, 54, 60, 0.10)",this.barLight="#fcfcfd",this.barMid="#f8f9fc",this.barDeep="#f2f4f9",this.barShadow="0 1px 0 rgba(43, 54, 60, 0.05)",this.sideLight="#fafbfc",this.sideDeep="#f2f4f8",this.hairline="1px",this.stroke="2px"}parts(){return[...super.parts(),this.bands(),this.guide(),this.order(),this.surface(),this.entries(),this.small()]}bands(){return f`
            .pd-book .pd-library { position: relative; background: linear-gradient(180deg, ${({theme:e})=>e.barLight} 0%, ${({theme:e})=>e.barMid} 60%, ${({theme:e})=>e.barDeep} 100%); border-block-end: thin solid ${({theme:e})=>e.line}; box-shadow: ${({theme:e})=>e.barShadow}; }
            .pd-book .pd-library::after { content: ''; position: absolute; left: 0; right: 0; bottom: calc(-1 * ${({theme:e})=>e.hairline}); height: ${({theme:e})=>e.stroke}; background: linear-gradient(90deg, var(--band) 0 40%, var(--ground) 40% 70%, var(--foot) 70%); opacity: 0.75; }
        `}guide(){return f`
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
        `}order(){return f`
            .pd-book .pd-holds .pd-paragraph.pd-entry-order { position: absolute; top: calc(${({theme:e})=>e.space} * 0.75); right: calc(${({theme:e})=>e.space} * 0.583); z-index: 1; margin: 0; }
            .pd-book .pd-holds .pd-entry-order .pd-word.pd-switch { padding: 0; border: 0; border-radius: 0; background: none; font-family: ${({theme:e})=>e.font}; font-size: calc(0.7143 * ${({theme:e})=>e.size}); font-weight: 500; line-height: 1.4; letter-spacing: 0.02em; color: ${({theme:e})=>e.faint}; cursor: pointer; transition: color ${({theme:e})=>e.beat} ease; }
            .pd-book .pd-holds .pd-entry-order .pd-word.pd-switch::before { content: '↓ '; }
            .pd-book .pd-holds .pd-entry-order .pd-word.pd-switch:hover { color: ${({theme:e})=>e.ink}; }
            .pd-book .pd-holds .pd-entry-order .pd-word.pd-switch[aria-pressed='true'] { background: none; border: 0; color: var(--foot-ink); }
            .pd-book .pd-holds .pd-entry-order .pd-word.pd-switch[aria-pressed='true']::before { content: '↑ '; }
        `}surface(){return f`
            .pd-book .pd-pages { display: flex; flex-direction: column; padding: ${({theme:e})=>e.space} calc(${({theme:e})=>e.space} * 1.6667) calc(${({theme:e})=>e.space} * 5); background: linear-gradient(180deg, color-mix(in oklab, var(--foot) 12%, white), transparent) top / 100% calc(${({theme:e})=>e.space} * 2) no-repeat, linear-gradient(90deg, color-mix(in oklab, var(--foot) 8%, white), transparent) left / calc(${({theme:e})=>e.space} * 1.6667) 100% no-repeat, ${({theme:e})=>e.paper}; }
        `}entries(){return f`
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
        `}small(){return f`
            @media (max-width: ${({theme:e})=>e.narrow}) {
                .pd-book .pd-holds, .pd-book .pd-library { border-inline-end: none; }
                .pd-book .pd-holds .pd-paragraph.pd-entry-order, .pd-book .pd-holds .pa-entry .pd-word.pd-entry-day { display: none; }
                .pd-book .pd-pages { padding: 0 calc(${({theme:e})=>e.space} * 0.8333) calc(${({theme:e})=>e.space} * 2.5); }
                .pd-book .pd-pages .pd-chapter.pa-page { padding: calc(${({theme:e})=>e.space} * 1.1667) 0 calc(${({theme:e})=>e.space} * 1.3333); }
                .pd-book .pd-pages .pa-page .pd-word.pd-entry-number { position: static; display: block; margin-block-end: calc(${({theme:e})=>e.space} / 6); font-size: calc(2 * ${({theme:e})=>e.size}); }
                .pd-book .pd-pages .pa-page .pd-word.pd-date { position: static; width: auto; margin-block-end: calc(${({theme:e})=>e.space} * 0.4167); }
            }
        `}};r(oi,"$Typeset");let Ga=oi;const tl=o(Ga);var sl=Object.defineProperty,ol=Object.getOwnPropertyDescriptor,Ed=r((p,e,a,s)=>{for(var t=ol(e,a),i=p.length-1,d;i>=0;i--)(d=p[i])&&(t=d(e,a,t)||t);return t&&sl(e,a,t),t},"__decorateClass$8");const P=r(p=>p.annotations.expressed(L)?.date?.date??"","dayOf"),Q=r(p=>{const[e,a]=P(p).split("-");return e===void 0||a===void 0?"":new Date(Date.UTC(Number(e),Number(a)-1,1)).toLocaleString("en-GB",{month:"long",year:"numeric",timeZone:"UTC"})},"monthOf"),ni=class ni extends b{constructor(){super(...arguments),this.specification=new M}defines(e){e.classes.add(this,"pa-newest-first")}erase(e){e.classes.revert(this)}};r(ni,"$NewestFirst");let qa=ni;const nl=o(qa),Gd=nl,ri=class ri extends g{write(){const e=o($t);return n(e,{annotation:Gd,children:"newest first"})}$Define(){super.$Define(),this.classes.add(this,"pd-entry-order")}};r(ri,"$EntryOrder");let Is=ri;const ii=class ii extends j{write(){return String(this.book.entries.indexOf(this.chapter)+1)}$Define(){super.$Define(),this.classes.add(this,"pd-entry-number")}};r(ii,"$EntryNumber");let Ms=ii;const di=class di extends Oe{paging(){return f``}};r(di,"$JournalLayout");let Ts=di;const rl=o(Is),il=o(Ms),dl=o(Ts),pl=rl,cl=il,pi=class pi extends _{constructor(){super(...arguments),this.specification=new Je}get latest(){return[...this.entries].sort((e,a)=>P(a).localeCompare(P(e)))[0]}get pages(){const e=[...this.entries].sort((a,s)=>P(a).localeCompare(P(s)));return this.is(qa)?e.reverse():e}get open(){return super.open??this.latest}head(){}switches(){}turns(){}$Bound(){const e=o(cl);for(const t of this.entries)t.text.add(this,n(e,{}));const a=this.table?.annotations.expressed(E);a!==void 0&&(a.$dated=!0);const s=o(pl);this.table?.text.add(this,n(s,{})),this.$is=[Gd],super.$Bound()}};r(pi,"$Journal");let Hs=pi;const ci=class ci extends B{$everyEntryIsDated(e){const a=e.entries.find(s=>!s.is(L));l(a===void 0,`every entry of a journal is dated, and "${a?.title?.name}" is not`)}$everyEntrySaysItsMonth(e){const a=e.entries.find(s=>s.part?.name!==Q(s));l(a===void 0,a===void 0?"":`every entry of a journal says the month of its date as its part, and "${a.title?.name}" says "${a.part?.name??"none"}" for ${Q(a)}`)}};r(ci,"JournalSpecification");let Je=ci;Ed([h("every entry of a journal is dated")],Je.prototype,"$everyEntryIsDated");Ed([h("every entry of a journal says the month of its date as its part")],Je.prototype,"$everyEntrySaysItsMonth");const Po=o(Hs);o(Po,fe)(tl);o(Po,te)(ue);o(Po,wt)(dl);const li=class li extends xe{};r(li,"$JournalCover");let Ws=li;const qd=o(Ws);var ll=Object.defineProperty,hl=Object.getOwnPropertyDescriptor,fl=r((p,e,a,s)=>{for(var t=hl(e,a),i=p.length-1,d;i>=0;i--)(d=p[i])&&(t=d(e,a,t)||t);return t&&ll(e,a,t),t},"__decorateClass$7");const hi=class hi extends b{constructor(){super(...arguments),this.specification=new Ua}get section(){return this.parent instanceof A?this.parent:void 0}get headings(){const e=this.section;return e===void 0?[]:e.text.find(zd).filter(a=>a!==e.canonical)}defines(e){e.classes.add(this,"pa-opaque")}erase(e){e.classes.revert(this)}$Bound(){for(const e of this.headings){const a=e.annotations.expressed(ct),s=e.annotations.expressed(wd);for(const t of[a,s])t!==void 0&&e.annotations.remove(e,t)}super.$Bound()}};r(hi,"$Opaque");let Bs=hi;const fi=class fi extends m{$saidOfASection(e){l(e instanceof A,"opaque is said of a section, and this is not one")}};r(fi,"OpaqueSpecification");let Ua=fi;fl([h("opaque is said of a section")],Ua.prototype,"$saidOfASection");const gl=o(Bs);var ul=Object.defineProperty,bl=Object.getOwnPropertyDescriptor,q=r((p,e,a,s)=>{for(var t=bl(e,a),i=p.length-1,d;i>=0;i--)(d=p[i])&&(t=d(e,a,t)||t);return t&&ul(e,a,t),t},"__decorateClass$6");const gi=class gi extends zd{$Define(){super.$Define(),this.classes.add(this,"pd-speaker")}$Bound(){super.$Bound();const e=this.annotations.expressed(ct);e!==void 0&&this.annotations.remove(this,e)}};r(gi,"$Speaker");let Qe=gi;const ui=class ui extends uo{$Define(){super.$Define(),this.classes.add(this,"pd-time")}};r(ui,"$Time");let Ls=ui;const bi=class bi extends ip{$Define(){super.$Define(),this.classes.add(this,"pd-participant")}};r(bi,"$Participant");let Ya=bi;const mi=class mi extends g{get participants(){return this.text.find(Ya)}write(){const e=this.participants;return e.flatMap((a,s)=>{const t=o(a);return[s===0?"":s===e.length-1?" and ":", ",n(t,{},s)]})}$Define(){super.$Define(),this.classes.add(this,"pd-participants")}};r(mi,"$Participants");let Za=mi;const Wh=o(Qe),ml=o(Ls),Bh=o(Ya),Lh=o(Za),$l=ml,kl=r(p=>{const e=new Date(p);if(Number.isNaN(e.getTime()))return p;const a=e.toLocaleDateString("en-GB",{day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return`${e.toLocaleTimeString("en-GB",{hour:"2-digit",minute:"2-digit",timeZone:"UTC"})} UTC, ${a}`},"shownTime"),$i=class $i extends A{constructor(){super(...arguments),this.specification=new Ve,this.$at=void 0}get when(){return this.$at??""}get speaker(){return this.text.find(Qe)[0]}write(){const e=o($l),a=this.speaker,s=a===void 0?void 0:o(a),t=[...this.text].filter(i=>i!==a);return c(v,{children:[s===void 0?void 0:n(s,{}),n(e,{children:`[${kl(this.when)}](${this.when})`}),n("div",{className:"pd-said",children:t.map((i,d)=>{const u=o(i);return n(u,{},d)})})]})}$Define(){super.$Define(),this.classes.add(this,"pd-message");const e=o(gl);if(this.annotations.add(this,n(e,{})),this.when==="")return;const a=this.speaker,s=a===void 0?"":F.reference(O.copy(a.text))?.name??O.copy(a.text),t=o(dp);this.annotations.add(this,n(t,{children:Od.slug(`${this.when.replace(/Z$/u,"")} ${s}`)}))}$Bound(){const e=this.book?.author?.means?.identifier;if(e!==void 0&&this.speaker?.means?.identifier===e){const a=o(yl);this.annotations.add(this,n(a,{}))}super.$Bound()}};r($i,"$Message");let V=$i;const ki=class ki extends b{constructor(){super(...arguments),this.specification=new Ka}defines(e){e.classes.add(this,"pa-mine")}erase(e){e.classes.revert(this)}};r(ki,"$Mine");let _s=ki;const vi=class vi extends m{$saidOfAMessage(e){l(e instanceof V,"mine is said of a message, and this is not one")}};r(vi,"MineSpecification");let Ka=vi;q([h("mine is said of a message")],Ka.prototype,"$saidOfAMessage");const vl=o(_s),yl=vl,yi=class yi extends b{constructor(){super(...arguments),this.specification=new Ja}defines(e){e.classes.add(this,"pa-quoted")}erase(e){e.classes.revert(this)}};r(yi,"$Quoted");let Rs=yi;const xi=class xi extends b{constructor(){super(...arguments),this.specification=new Qa}defines(e){e.classes.add(this,"pa-verbatim")}erase(e){e.classes.revert(this)}};r(xi,"$Verbatim");let Fs=xi;const wi=class wi extends b{constructor(){super(...arguments),this.specification=new Se,this.$from=void 0,this.$to=void 0}get from(){return this.$from??""}get to(){return this.$to??""}defines(e){e.classes.add(this,"pa-period")}erase(e){e.classes.revert(this)}};r(wi,"$Period");let Xa=wi;const zi=class zi extends b{constructor(){super(...arguments),this.specification=new Se,this.$shown=void 0,this.$all=void 0}get shown(){return Number(this.$shown??0)}get all(){return Number(this.$all??0)}get aside(){return this.all-this.shown}defines(e){e.classes.add(this,"pa-messages")}erase(e){e.classes.revert(this)}};r(zi,"$Messages");let ce=zi;const Oi=class Oi extends pp{$saysWhen(e){l(e.when!==""&&!Number.isNaN(Date.parse(e.when)),"a message says when it was said, as an instant the machine can read, and this one does not")}$headedByItsSpeaker(e){l(e.canonical instanceof Qe,"a message is headed by its speaker, a heading that refers to them, and this one is not")}};r(Oi,"MessageSpecification");let Ve=Oi;q([h("a message says when it was said")],Ve.prototype,"$saysWhen");q([h("a message is headed by its speaker")],Ve.prototype,"$headedByItsSpeaker");const Di=class Di extends m{$saidOfAParagraph(e){l(e instanceof g,"this is said of a paragraph, and this is not one")}};r(Di,"OfAParagraphSpecification");let Ja=Di;q([h("this is said of a paragraph")],Ja.prototype,"$saidOfAParagraph");const ji=class ji extends m{$saidOfACover(e){l(e instanceof y&&e.is(I),"this is said of a cover, and this is not one")}};r(ji,"OfACoverSpecification");let Se=ji;q([h("this is said of a cover")],Se.prototype,"$saidOfACover");const Pi=class Pi extends m{$saidOfAWord(e){l(e instanceof j,"verbatim is said of a word, and this is not one")}};r(Pi,"VerbatimSpecification");let Qa=Pi;q([h("verbatim is said of a word")],Qa.prototype,"$saidOfAWord");const _h=o(V),Rh=o(Rs),Fh=o(Fs),Eh=o(Xa),Gh=o(ce),md=r(p=>p===void 0||p===""?"":new Date(p).toLocaleDateString("en-GB",{day:"numeric",month:"long",year:"numeric",timeZone:"UTC"}),"dayWords"),Ci=class Ci extends g{write(){const e=this.book,a=e.messageCount?.shown??e.messages.length,s=e.body.length,t=md(e.period?.from),i=md(e.period?.to);return c(v,{children:[c("span",{className:"pd-tally-count",children:[n("b",{children:a}),s===1?" messages in ":" messages over ",n("b",{children:s}),s===1?" day":" days"]}),n("span",{className:"pd-tally-period",children:t===i?t:`${t} to ${i}`})]})}$Define(){super.$Define(),this.classes.add(this,"pd-tally")}};r(Ci,"$Tally");let Es=Ci;const Ai=class Ai extends j{write(){return String(this.$entry?.text.find(V).length??0)}$Define(){super.$Define(),this.classes.add(this,"pd-day-count")}};r(Ai,"$DayCount");let Gs=Ai;const xl=o(Es),wl=o(Gs),zl=xl,Ol=wl,Ni=class Ni extends _{constructor(){super(...arguments),this.specification=new le}get participants(){return this.cover?.text.find(Za)[0]?.participants??[]}get period(){return this.cover?.annotations.expressed(Xa)}get messageCount(){return this.cover?.annotations.expressed(ce)}get messages(){return this.body.flatMap(e=>e.text.find(V))}get pages(){return[...[...this.body].sort((a,s)=>P(a).localeCompare(P(s))),...this.appendix]}get open(){return super.open??this.pages[0]}head(){const e=o(zl);return c(v,{children:[super.head(),n(e,{chapter:this.cover})]})}$Bound(){const e=o(Ol);for(const a of this.table?.annotations.expressed(E)?.entries??[]){const s=W(a)?.identifier,t=s===void 0?void 0:this.chapterAt(s);t===void 0||!this.body.includes(t)||a.text.add(this,n(e,{entry:t}))}super.$Bound()}};r(Ni,"$Conversation");let Va=Ni;const Ii=class Ii extends B{$saysItsParticipantsPeriodAndCount(e){l(e.participants.length>0&&e.period!==void 0&&e.messageCount!==void 0,"a conversation says its participants, its period and how many messages it holds, on its cover, and this one says less")}$everyChapterIsDated(e){const a=e.body.find(s=>!s.is(L));l(a===void 0,`every chapter of a conversation is dated, and "${a?.title?.name}" is not`)}$everyMessageIsAddressed(e){const a=e.messages.find(s=>s.annotations.expressed(ct)===void 0);l(a===void 0,`every message of a conversation is addressed by its time, and the one at "${a?.when}" is not`)}$everyChapterHoldsAMessage(e){const a=e.body.find(s=>s.text.find(V).length===0);l(a===void 0,`every chapter of a conversation holds a message, and "${a?.title?.name}" holds none`)}};r(Ii,"ConversationSpecification");let le=Ii;q([h("a conversation says its participants, its period and how many messages it holds")],le.prototype,"$saysItsParticipantsPeriodAndCount");q([h("every chapter of a conversation is dated")],le.prototype,"$everyChapterIsDated");q([h("every message of a conversation is addressed by its time")],le.prototype,"$everyMessageIsAddressed");q([h("every chapter of a conversation holds a message")],le.prototype,"$everyChapterHoldsAMessage");o(Va);const Dl=/(::[^\n]*|<\|=\|>|=\|>|=[A-Za-z0-9'_]*>|-\([^)]*\)>|->|==|!=)/gu,$d=r(p=>p.replace(/[&<>]/gu,e=>({"&":"&amp;","<":"&lt;",">":"&gt;"})[e]),"escaped"),jl=r(p=>p.split(Dl).map((e,a)=>a%2===0?$d(e):`<span class="${e.startsWith("::")?"hljs-comment":"hljs-keyword"}">${$d(e)}</span>`).join(""),"notationHighlighting"),Pl=r((p,e)=>e==="srt"?jl(p):cp(p,e),"boxHighlighting"),Mi=class Mi extends mo{constructor(){super(...arguments),this.$highlighter=Pl}get name(){return this.language===""?"text":this.language}$CodeBox(...e){this.$Code(...e),this.containers.replace(this,"pre","div")}write(){return c(v,{children:[c("div",{className:"pd-code-bar",children:[n("span",{className:"pd-code-name",children:this.name}),n("button",{type:"button",className:"pd-copy",onClick:r(e=>this.copy(e),"onClick"),children:"Copy"})]}),n("pre",{children:super.write()})]})}copy(e){const a=e.currentTarget.closest(".pd-code-box")?.querySelector("pre")?.textContent??"";navigator.clipboard?.writeText(a)}$Define(){super.$Define(),this.classes.add(this,"pd-code-box")}};r(Mi,"$CodeBox");let qs=Mi;const qh=o(qs);var Cl=Object.defineProperty,Al=Object.getOwnPropertyDescriptor,Co=r((p,e,a,s)=>{for(var t=Al(e,a),i=p.length-1,d;i>=0;i--)(d=p[i])&&(t=d(e,a,t)||t);return t&&Cl(e,a,t),t},"__decorateClass$5");const Ti=class Ti extends b{constructor(){super(...arguments),this.specification=new M}defines(e){e.classes.add(this,"pa-synopses")}erase(e){e.classes.revert(this)}};r(Ti,"$Synopses");let Us=Ti;const Nl=o(Us),Il=Nl,Hi=class Hi extends g{write(){const e=o($t);return n(e,{annotation:Il,children:"with the synopsis"})}$Define(){super.$Define(),this.classes.add(this,"pd-row-form")}};r(Hi,"$RowForm");let Ys=Hi;const Wi=class Wi extends j{write(){return`${this.chapter?.annotations.expressed(C)?.cover?.annotations.expressed(ce)?.shown??0} exchanges`}$Define(){super.$Define(),this.classes.add(this,"pd-entry-count")}};r(Wi,"$EntryCount");let Zs=Wi;const Bi=class Bi extends j{write(){return Q(this.chapter)}$Define(){super.$Define(),this.classes.add(this,"pd-entry-month")}};r(Bi,"$EntryMonth");let Ks=Bi;const Li=class Li extends j{write(){}$Define(){super.$Define(),this.classes.add(this,"pd-entry-open")}};r(Li,"$EntryOpen");let Xs=Li;const _i=class _i extends g{get project(){return this.book}$ProjectHead(...e){this.$Writing(...e),this.containers.replace(this,"span","div")}write(){const e=this.project;if(e===void 0)return;const a=o(D),s=o(x),t=e.coverOf(e.subject?.means?.identifier),i=e.entries,d=i.reduce(($,z)=>$+(z.annotations.expressed(C)?.cover?.annotations.expressed(ce)?.shown??0),0),u=i.map(P).filter($=>$!=="").sort(),k=u.length===0?"":`${Q(i.find($=>P($)===u[0]))} to ${Q(i.find($=>P($)===u[u.length-1]))}`;return c(v,{children:[c("span",{className:"pd-crumbs",children:[t===void 0?void 0:c(a,{children:[n(s,{children:t.mention.identifier}),t.title?.name]}),n("i",{children:"/"}),n(a,{children:e.title?.name})]}),c("span",{className:"pd-report",children:[c("span",{children:[n("b",{children:i.length})," conversations"]}),c("span",{children:[n("b",{children:d})," exchanges"]}),c("span",{children:[n("b",{children:e.files.length})," files"]}),n("span",{children:k})]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-project-head")}};r(_i,"$ProjectHead");let Js=_i;const Ri=class Ri extends g{constructor(){super(...arguments),this.style=w.div`
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
    `}get project(){return this.book}$Knowledge(...e){this.$Writing(...e),this.containers.replace(this,"span",this.style)}write(){const e=this.project;if(e===void 0)return;const a=o(D),s=o(x),t=e.project,i='<svg viewBox="0 0 16 16"><path d="M4 1.5h5.5L13 5v9.5H4z"/><path d="M9.5 1.5V5H13M6 8h4M6 10.5h4"/></svg>';return c(v,{children:[t?.mention===void 0?void 0:c("span",{className:"pd-knowledge-row",children:[c(a,{children:[n(s,{children:t.mention.identifier}),t.title?.name]}),n("span",{className:"pd-at-right",children:"what it is, its instructions"})]}),c("span",{className:"pd-knowledge-row",children:["Files",n("small",{children:e.files.length}),n("span",{className:"pd-at-right",children:"as uploaded"})]}),n("span",{className:"pd-knowledge-files",children:e.files.map((d,u)=>c("span",{className:"pd-knowledge-file",children:[n("span",{className:"pd-drawing",dangerouslySetInnerHTML:{__html:i}}),c(a,{children:[n(s,{children:d.mention.identifier}),d.title?.name]}),n("span",{className:"pd-file-type",children:(d.annotations.find(J)[0]?.$type??"").replace(/^\./u,"")})]},u))})]})}$Define(){super.$Define(),this.classes.add(this,"pd-knowledge")}};r(Ri,"$Knowledge");let Qs=Ri;const Fi=class Fi extends Oe{paging(){return f`
            .pd-book.pa-turned .pa-page:not(.pa-open) { display: none; }
            .pd-book:not(.pa-turned) .pa-page.pa-spread { display: none; }
        `}areas(){return f`
            ${super.areas()}
            .pd-book.pa-layout:not(.pa-turned) .pd-head { display: grid; gap: calc(${({theme:e})=>e.space} / 4); align-content: end; padding: calc(${({theme:e})=>e.space} * 0.9167) calc(${({theme:e})=>e.space} * 1.5) calc(${({theme:e})=>e.space} * 0.5833); }
            .pd-book.pa-layout.pa-turned .pd-head { display: none; }
            .pd-book:not(.pa-turned) .pd-holds { padding-block-start: calc(${({theme:e})=>e.space} * 0.4167); }
            ${this.head()}
            ${this.list()}
        `}head(){return f`
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
        `}list(){return f`
            .pd-book:not(.pa-turned) .pd-pages { padding: 0 calc(${({theme:e})=>e.space} * 1.5) calc(${({theme:e})=>e.space} * 5); }
            .pd-book:not(.pa-turned) .pd-pages .pd-chapter.pa-page.pa-synopsis { max-width: 768px; margin: 0; }
            .pd-book:not(.pa-turned) .pd-pages .pd-chapter.pa-page.pa-synopsis:not(.pa-volume) { padding: calc(${({theme:e})=>e.space} / 4) 0 calc(${({theme:e})=>e.space} / 2); }
            .pd-book:not(.pa-turned) .pd-pages .pd-chapter.pa-page.pa-synopsis:not(.pa-volume) > a, .pd-book:not(.pa-turned) .pd-pages .pd-chapter.pa-page.pa-synopsis:not(.pa-volume) .pd-turn { display: none; }
            .pd-book:not(.pa-turned) .pd-pages .pd-chapter.pa-page.pa-synopsis:not(.pa-volume) .pd-paragraph { max-width: 72ch; margin: 0; font-family: ${({theme:e})=>e.serif}; font-size: calc(1.0714 * ${({theme:e})=>e.size}); line-height: 1.5; color: ${({theme:e})=>e.soft}; }
            .pd-book:not(.pa-turned) .pd-pages .pd-chapter.pa-page.pa-volume { position: relative; display: grid; grid-template-columns: minmax(0, 1fr) auto auto; grid-template-areas: 'month month month' 'title count day' 'synopsis synopsis synopsis'; align-items: baseline; column-gap: calc(${({theme:e})=>e.space} * 0.6667); padding: calc(${({theme:e})=>e.space} * 0.625) 0 calc(${({theme:e})=>e.space} * 0.5833); border-block-end: thin solid rgba(11, 11, 11, .08); }
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
            @media (max-width: ${({theme:e})=>e.narrow}) {
                .pd-book:not(.pa-turned) .pd-holds { padding: calc(${({theme:e})=>e.space} / 4) calc(${({theme:e})=>e.space} / 3); }
                .pd-book:not(.pa-turned) .pd-pages { padding: 0 calc(${({theme:e})=>e.space} * 0.6667) calc(${({theme:e})=>e.space} * 2.5); }
                .pd-book:not(.pa-turned) .pd-pages .pa-volume .pd-word.pd-entry-count { display: none; }
                .pd-book.pa-layout:not(.pa-turned) .pd-head { padding: calc(${({theme:e})=>e.space} * 0.75) calc(${({theme:e})=>e.space} * 0.6667) calc(${({theme:e})=>e.space} / 3); }
            }
        `}};r(Fi,"$ListLayout");let ea=Fi;const Ei=class Ei extends ea{areas(){return f`
            ${super.areas()}
            .pd-book.pa-layout:not(.pa-turned) {
                grid-template-columns: ${({theme:e})=>e.holdsColumn} minmax(0, 1fr) 320px;
                grid-template-areas: 'library library library' 'holds head knowledge' 'holds pages knowledge';
            }
            .pa-layout .pd-knowledge-column { grid-area: knowledge; min-width: 0; overflow-y: auto; }
            .pd-book.pa-turned .pd-knowledge-column { display: none; }
            @media (max-width: ${({theme:e})=>e.narrow}) {
                .pd-book.pa-layout:not(.pa-turned) .pd-knowledge-column { order: 4; }
            }
        `}};r(Ei,"$ProjectLayout");let Vs=Ei;const Ud=r((p,e)=>{const a=o(Rl),s=o(Fl),t=o(El),i=o(x);let d="";for(const u of e){const k=Q(u),$=u.annotations.expressed(C)?.cover?.mention?.identifier;u.text.add(p,...k!==d?[n(s,{},"month")]:[],n(a,{},"count"),...$===void 0?[]:[n(t,{children:n(i,{children:$})},"open")]),d=k}},"rows"),Gi=class Gi extends Da{constructor(){super(...arguments),this.specification=new Ae}get entries(){return this.text.find(y).filter(e=>e.is(Y)&&e!==this.synopsis)}get files(){return this.chapters.filter(e=>e.is(N)&&e.is(J))}get project(){return this.chapters.find(e=>e.is(N)&&!e.is(J))}get laidOutChapters(){return[...super.laidOutChapters,...this.entries]}get pages(){const e=[...this.entries].sort((a,s)=>P(s).localeCompare(P(a)));return[...super.pages,...e]}get open(){return this.$bookmark===void 0?void 0:this.chapterAt(this.$bookmark)}write(){const e=o(ql);return c(v,{children:[super.write(),n("div",{className:"pd-knowledge-column",children:n(e,{chapter:this.cover})})]})}head(){const e=o(this.cover),a=o(Gl),s=o(_l);return c(v,{children:[n(e,{}),n(a,{chapter:this.cover}),n(s,{chapter:this.cover})]})}$Bound(){Ud(this,this.pages.filter(a=>this.entries.includes(a)));const e=this.table?.annotations.expressed(E);e!==void 0&&(e.$folded=!0,e.$counted=!0,e.$dated=!0),super.$Bound()}};r(Gi,"$ProjectManual");let Ss=Gi;const qi=class qi extends Ye{$everyEntryStandsForAConversation(e){const a=e.entries.find(s=>s.annotations.expressed(Y)?.means===void 0);l(a===void 0,`every entry of a project manual stands for a conversation, holding its synopsis, and "${a?.title?.name}" stands for none`)}$hasOneProjectChapter(e){l(e.chapters.filter(a=>a.is(N)&&!a.is(J)).length===1,"a project manual has one chapter about the project, which appends no file, and this one has none or more than one")}$onlyAChapterAppends(e){const a=[...e.chapters,...e.entries];l(e.text.find(y).every(s=>a.includes(s)||!s.is(J)),"only an ordinary chapter or an entry files a file, and here a cover, a synopsis or a table of contents files one")}};r(qi,"ProjectManualSpecification");let Ae=qi;Co([h("every entry of a project manual stands for a conversation, holding its synopsis")],Ae.prototype,"$everyEntryStandsForAConversation");Co([h("a project manual has one chapter about the project, which appends no file")],Ae.prototype,"$hasOneProjectChapter");Co([h("an entry of a project manual files a file only when a chapter may")],Ae.prototype,"$onlyAChapterAppends");const Yd=o(Ys),Ml=o(Zs),Tl=o(Ks),Ao=o(Xs),Hl=o(Js),Wl=o(Qs);o(ea);const Bl=o(Vs),Ll=o(Ss),_l=Yd,Rl=Ml,Fl=Tl,El=Ao,Gl=Hl,ql=Wl;o(Ll,wt)(Bl);const Ui=class Ui extends Ga{constructor(){super(...arguments),this.sans="'Inter', system-ui, sans-serif",this.mono="ui-monospace, 'Cascadia Code', Consolas, monospace",this.keyword="#1f5fbf",this.string="#9a3b1e",this.type="#116b4a",this.comment="#7a8491"}parts(){return[...super.parts(),this.surfaces(),this.top(),this.rows(),this.openDay(),this.exchanges(),this.said(),this.cards(),this.paneColumn(),this.phone()]}surfaces(){return f`
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
        `}phone(){return f`
            @media (max-width: ${({theme:e})=>e.narrow}) {
                .pd-book .pd-pages .pd-message.pa-mine > .pd-said { max-width: 92%; }
                .pd-book .pd-head .pd-title { font-size: 24px; }
                .pd-book.pa-layout:has(> .pd-pane > .pd-pane-bar) { grid-template-columns: minmax(0, 1fr); grid-template-areas: 'library' 'head' 'pages'; }
            }
        `}};r(Ui,"$ApplicationForm");let eo=Ui;const Ul=o(eo);var Yl=Object.defineProperty,Zl=Object.getOwnPropertyDescriptor,Kl=r((p,e,a,s)=>{for(var t=Zl(e,a),i=p.length-1,d;i>=0;i--)(d=p[i])&&(t=d(e,a,t)||t);return t&&Yl(e,a,t),t},"__decorateClass$4");const Xl='<svg viewBox="0 0 24 24"><path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4M9 12h6M9 16h6"/></svg>',Jl='<svg viewBox="0 0 24 24"><path d="M8 7l-5 5 5 5M16 7l5 5-5 5M13 5l-2 14"/></svg>',oe=r(p=>{const e=p.book;return e!==void 0&&"$shown"in e?e:void 0},"showingBook"),Yi=class Yi extends b{constructor(){super(...arguments),this.specification=new Sa}defines(e){e.classes.add(this,"pa-version")}erase(e){e.classes.revert(this)}};r(Yi,"$Version");let ao=Yi;const Zi=class Zi extends m{$saidOfAChapter(e){l(e instanceof y,"a version is said of a chapter, and this is not one")}};r(Zi,"VersionSpecification");let Sa=Zi;Kl([h("a version is said of a chapter")],Sa.prototype,"$saidOfAChapter");const Ki=class Ki extends mo{constructor(){super(...arguments),this.$artifact=void 0,this.$place=void 0}get version(){const e=this.$place;if(e!==void 0)return this.book.chapters.find(a=>Od.slug(a.title?.name??"")===e)}get versionName(){return this.version?.title?.name??""}get name(){return this.versionName.replace(/ v\d+(?:-\d+)?$/u,"")||this.$identifier}get number(){return/ v(\d+)(?:-\d+)?$/u.exec(this.versionName)?.[1]??"1"}get kind(){const e=this.$type.replace(/^\./u,"");return e==="md"||e==="txt"||e===""?"document":e==="html"?"page":"code"}get shown(){return oe(this)?.$shown===this}$Artifact(...e){this.$Code(...e),this.containers.replace(this,"pre","figure")}write(){const e=[...this.text].map((s,t)=>{const i=o(s);return n(i,{},t)}),a={__html:this.kind==="document"?Xl:Jl};return c(v,{children:[c("button",{type:"button",className:"pd-card","aria-pressed":this.shown,onClick:r(()=>this.press(),"onClick"),children:[n("span",{className:"pd-card-mark",dangerouslySetInnerHTML:a}),c("span",{className:"pd-card-words",children:[n("b",{children:this.name}),n("small",{children:`Click to open ${this.kind} · v${this.number}`})]})]}),n("figcaption",{children:e})]})}press(){const e=oe(this);e!==void 0&&(e.$shown=e.$shown===this?void 0:this)}$Define(){super.$Define(),this.classes.add(this,"pd-artifact"),this.shown&&this.classes.add(this,"pa-open")}};r(Ki,"$Artifact");let aa=Ki;const Xi=class Xi extends mo{get sentence(){return O.copy(this.text)}get fileName(){return/“([^”]+)”/u.exec(this.sentence)?.[1]??"a file"}get extension(){return(this.fileName.split(".").pop()??"file").toUpperCase().slice(0,4)}get lineCount(){return this.names?this.contents.split(`
`).length:0}get shown(){return oe(this)?.$shown===this}$Attachment(...e){this.$Code(...e),this.containers.replace(this,"pre","figure")}write(){const e=[...this.text].map((a,s)=>{const t=o(a);return n(t,{},s)});return c(v,{children:[c("button",{type:"button",className:"pd-chip","aria-pressed":this.shown,onClick:r(()=>this.press(),"onClick"),children:[n("span",{className:"pd-chip-mark",children:this.extension}),c("span",{className:"pd-chip-words",children:[n("b",{children:this.fileName}),n("small",{children:this.names?`${this.lineCount} lines`:"not carried by the export"})]})]}),n("figcaption",{children:e})]})}press(){const e=oe(this);e!==void 0&&(e.$shown=e.$shown===this?void 0:this)}$Define(){super.$Define(),this.classes.add(this,"pd-attachment"),this.shown&&this.classes.add(this,"pa-open")}};r(Xi,"$Attachment");let et=Xi;const Uh=o(ao),Yh=o(aa),Zh=o(et),Ji=class Ji extends g{constructor(){super(...arguments),this.style=w.div`
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
    `}get shown(){return oe(this)?.$shown}get artifacts(){return this.book?.messages.flatMap(e=>e.text.find(aa))??[]}$Pane(...e){this.$Writing(...e),this.containers.replace(this,"span",this.style)}neighbour(e,a){const s=Number(e.number)+a;return this.artifacts.find(t=>t.$artifact===e.$artifact&&Number(t.number)===s)}write(){const e=this.shown;if(e===void 0)return;const a=e instanceof aa?e:void 0,s=e instanceof et?e:void 0,t=a?.version,i=t===void 0?void 0:o(t),d=a===void 0?void 0:this.neighbour(a,-1),u=a===void 0?void 0:this.neighbour(a,1),k=s===void 0?"":s.names?s.contents:"The export does not carry this upload; the name is all it kept.";return c(v,{children:[c("div",{className:"pd-pane-bar",children:[n("span",{className:"pd-pane-title",children:a?.name??s?.fileName}),n("span",{className:"pd-pane-kind",children:a?.kind??s?.extension.toLowerCase()}),n("button",{type:"button",className:"pd-pane-copy",onClick:r($=>this.copy($),"onClick"),children:"Copy"}),n("button",{type:"button",className:"pd-pane-close","aria-label":"close",onClick:r(()=>this.close(),"onClick"),children:"×"})]}),n("div",{className:"pd-pane-body",children:i===void 0?n("pre",{children:k}):n(i,{})}),a===void 0?void 0:c("div",{className:"pd-pane-foot",children:[c("span",{className:"pd-pane-version",children:[n("button",{type:"button",disabled:d===void 0,onClick:r(()=>this.show(d),"onClick"),children:"‹"}),n("span",{children:`v${a.number}`}),n("button",{type:"button",disabled:u===void 0,onClick:r(()=>this.show(u),"onClick"),children:"›"})]}),n("button",{type:"button",className:"pd-pane-download",onClick:r(()=>this.download(a),"onClick"),children:"Download"})]})]})}show(e){const a=oe(this);a!==void 0&&e!==void 0&&(a.$shown=e)}close(){const e=oe(this);e!==void 0&&(e.$shown=void 0)}copy(e){const a=e.currentTarget.closest(".pd-pane")?.querySelector(".pd-pane-body");navigator.clipboard?.writeText(a?.textContent??"")}download(e){const a=e.$type.replace(/^\./u,"")||"md",s=new Blob([e.contents],{type:"text/plain"}),t=document.createElement("a");t.href=URL.createObjectURL(s),t.download=`${e.name} v${e.number}.${a}`,t.click(),URL.revokeObjectURL(t.href)}$Define(){super.$Define(),this.classes.add(this,"pd-pane")}};r(Ji,"$Pane");let to=Ji;const Ql=o(to);var Vl=Object.defineProperty,Sl=Object.getOwnPropertyDescriptor,eh=r((p,e,a,s)=>{for(var t=Sl(e,a),i=p.length-1,d;i>=0;i--)(d=p[i])&&(t=d(e,a,t)||t);return t&&Vl(e,a,t),t},"__decorateClass$3");const Qi=class Qi extends b{constructor(){super(...arguments),this.specification=new at}get name(){return F.reference(O.copy(this.text))?.name??""}get means(){return this.annotations.expressed(ne)}$Define(){super.$Define();const e=F.reference(O.copy(this.text));if(e===void 0)return;const a=o(x);this.annotations.add(this,n(a,{children:e.identifier}))}write(){return this.name}};r(Qi,"$Account");let ta=Qi;const Vi=class Vi extends m{$saidOfACover(e){l(e instanceof y&&e.is(I),"an account is said of a cover, and this is not one")}};r(Vi,"AccountSpecification");let at=Vi;eh([h("an account is said of a cover")],at.prototype,"$saidOfACover");const Si=class Si extends g{get cover(){return this.$cover??this.book?.cover}get account(){return this.cover?.annotations.expressed(ta)}write(){const e=this.account,a=o(D),s=o(Ie),t=o(x);return c(v,{children:[c(a,{children:[n(s,{}),"account"]}),c(a,{children:[n(t,{children:e.means.identifier}),e.name]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-account-line")}};r(Si,"$AccountLine");let so=Si;const Kh=o(ta),ah=o(so);var th=Object.defineProperty,sh=Object.getOwnPropertyDescriptor,oh=r((p,e,a,s)=>{for(var t=sh(e,a),i=p.length-1,d;i>=0;i--)(d=p[i])&&(t=d(e,a,t)||t);return t&&th(e,a,t),t},"__decorateClass$2");const ed=class ed extends b{constructor(){super(...arguments),this.specification=new st}get uuid(){return O.copy(this.text).trim()}write(){return null}};r(ed,"$Origin");let tt=ed;const ad=class ad extends m{$saidOfACoverOrAMessage(e){l(e instanceof y&&e.is(I)||e instanceof V,"an origin is said of a cover or a message, and this is neither")}};r(ad,"OriginSpecification");let st=ad;oh([h("an origin is said of a cover or a message")],st.prototype,"$saidOfACoverOrAMessage");const Xh=o(tt);var nh=Object.defineProperty,rh=Object.getOwnPropertyDescriptor,ih=r((p,e,a,s)=>{for(var t=rh(e,a),i=p.length-1,d;i>=0;i--)(d=p[i])&&(t=d(e,a,t)||t);return t&&nh(e,a,t),t},"__decorateClass$1");const td=class td extends b{constructor(){super(...arguments),this.specification=new ot}get name(){return F.reference(O.copy(this.text))?.name??""}get means(){return this.annotations.expressed(ne)}$Define(){super.$Define();const e=F.reference(O.copy(this.text));if(e===void 0)return;const a=o(x);this.annotations.add(this,n(a,{children:e.identifier}))}write(){return this.name}};r(td,"$Project");let Ne=td;const sd=class sd extends m{$saidOfACover(e){l(e instanceof y&&e.is(I),"a project is said of a cover, and this is not one")}};r(sd,"ProjectSpecification");let ot=sd;ih([h("a project is said of a cover")],ot.prototype,"$saidOfACover");const od=class od extends g{get cover(){return this.$cover??this.book?.cover}get project(){return this.cover?.annotations.expressed(Ne)}write(){const e=this.project,a=o(D),s=o(Ie),t=o(x);return c(v,{children:[c(a,{children:[n(s,{}),"project"]}),c(a,{children:[n(t,{children:e.means.identifier}),e.name]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-project-line")}};r(od,"$ProjectLine");let oo=od;const Jh=o(Ne),dh=o(oo),ph=dh,nd=class nd extends Va{constructor(){super(...arguments),this.$shown=void 0}get project(){return this.cover?.annotations.expressed(Ne)}get account(){return this.cover?.annotations.expressed(ta)}get origin(){return this.cover?.annotations.expressed(tt)?.uuid}get subjectCover(){return this.coverOf(this.project?.means?.identifier)??super.subjectCover}write(){const e=o(Ql);return c(v,{children:[super.write(),n(e,{chapter:this.cover})]})}me(){const e=o(ph),a=o(ah);return c(v,{children:[super.me(),this.project===void 0?void 0:n(e,{cover:this.cover}),this.account===void 0?void 0:n(a,{cover:this.cover})]})}};r(nd,"$ClaudeConversation");let no=nd;const Zd=o(no);o(Zd,fe)(Ul);o(Zd,te)(ue);var ch=Object.defineProperty,lh=Object.getOwnPropertyDescriptor,U=r((p,e,a,s)=>{for(var t=s>1?void 0:s?lh(e,a):e,i=p.length-1,d;i>=0;i--)(d=p[i])&&(t=(s?d(e,a,t):d(t))||t);return s&&t&&ch(e,a,t),t},"__decorateClass");const rd=class rd extends _{constructor(){super(...arguments),this.specification=new he,this.$search=""}get entries(){return this._entries??(this._entries=this.text.find(y).filter(e=>e.is(Y)&&e!==this.synopsis))}get groups(){return[...this.groupsKept().keys()]}get openGroup(){return this.$bookmark===void 0?void 0:this.groups.find(e=>e.mention!==void 0&&this.placeWithin(e.mention.identifier)===this.$bookmark)}get open(){return this.$bookmark===void 0?void 0:this.chapterAt(this.$bookmark)}get laidOutChapters(){return[...super.laidOutChapters,...this.entries]}get pages(){return this._pages??(this._pages=[...this.entries].sort((e,a)=>P(a).localeCompare(P(e))))}get $bookmark(){return super.$bookmark}set $bookmark(e){super.$bookmark=e;const a=this.openGroup;for(const s of this.groups)s.$is=s===a?[]:[zo]}groupsKept(){if(this._groups!==void 0)return this._groups;const e=new Set(this.entries),a=new Map;this._groupOf=new Map;for(const s of this.table?.text.find(A)??[]){const t=s.text.find(g).map(i=>{const d=W(i)?.identifier;return d===void 0?void 0:this.chapterAt(d)}).filter(i=>i!==void 0&&e.has(i)).sort((i,d)=>P(d).localeCompare(P(i)));t.length>0&&a.set(s,t);for(const i of t)this._groupOf.set(i,s)}return this._groups=a}entriesOf(e){return this.groupsKept().get(e)??[]}groupOf(e){return this.groupsKept(),this._groupOf?.get(e)}index(){if(this._index!==void 0)return this._index;const e=new Map;for(const a of this.entries){const s=a.title?.name??"",t=a.text.find(g).filter(i=>![...i.classes].includes("pa-caption")).map(i=>O.copy(i.text).replace(/\s+/gu," ").trim()).join(" ");e.set(a,{title:s,synopsis:t,lower:`${s} ${t}`.toLowerCase()})}return this._index=e}found(e){const a=e.trim().toLowerCase();if(a==="")return[];const s=this.index(),t=this.openGroup;return(t===void 0?this.pages:this.entriesOf(t)).filter(d=>s.get(d)?.lower.includes(a)===!0)}search(e){this.$search=e;const a=[this.$is].flat().filter(s=>s!==void 0&&s!==vd);this.$is=e.trim()===""?a:[vd,...a]}sizeOf(e){return e.annotations.expressed(C)?.cover?.annotations.expressed(ce)?.shown??0}projectOf(e){return this.entriesOf(e)[0]?.annotations.expressed(C)?.cover?.annotations.expressed(Ne)}aboveThePages(){if(this.$search.trim()!==""){const a=o(wh);return n(a,{chapter:this.table})}if(this.openGroup!==void 0)return;const e=o(yh);return n("div",{className:"pd-parts",children:this.groups.map((a,s)=>n(e,{chapter:this.table,part:a},s))})}head(){const e=o(this.cover),a=o(Oh),s=o(Yd),t=o(xh);return c(v,{children:[n(e,{}),n(a,{chapter:this.cover}),n(s,{chapter:this.cover}),n(t,{chapter:this.cover})]})}$Bound(){this._chapterByPlace=this.chapterByPlace();const e=this.table?.annotations.expressed(E);e!==void 0&&(e.$folded=!0,e.$counted=!0,e.$dated=!0);const a=o(Oo);for(const s of this.table?.text.find(A)??[])s.annotations.add(this,n(a,{}));for(const s of this.groups)Ud(this,this.entriesOf(s));super.$Bound()}};r(rd,"$Register");let S=rd;U([ee()],S.prototype,"_entries",2);U([ee()],S.prototype,"_groups",2);U([ee()],S.prototype,"_pages",2);U([ee()],S.prototype,"_groupOf",2);U([ee()],S.prototype,"_index",2);const id=class id extends g{get register(){return this.book}$PartCard(...e){this.$Writing(...e),this.containers.replace(this,"span","div")}write(){const e=this.register,a=this.$part;if(e===void 0||a===void 0)return;const s=o(D),t=o(x),i=o(wo),d=o(Ao),u=e.entriesOf(a),k=u[0],$=a.mention===void 0?void 0:e.placeWithin(a.mention.identifier);return c(v,{children:[n(s,{children:n("span",{className:"pd-part-name",children:a.canonical?.name})}),c("span",{className:"pd-part-count",children:[u.length," ",u.length===1?"conversation":"conversations"]}),k===void 0?void 0:c("span",{className:"pd-part-latest",children:[n("span",{children:k.title?.name}),n(i,{entry:k})]}),$===void 0?void 0:n(d,{children:n(t,{children:$})})]})}$Define(){super.$Define(),this.classes.add(this,"pd-part-card")}};r(id,"$PartCard");let ro=id;const dd=class dd extends b{constructor(){super(...arguments),this.specification=new M}defines(e){e.classes.add(this,"pa-searching")}erase(e){e.classes.revert(this)}};r(dd,"$Searching");let io=dd;const pd=class pd extends g{get register(){return this.book}$Search(...e){this.$Writing(...e),this.containers.replace(this,"span","div")}write(){const e=this.register;if(e!==void 0)return c(v,{children:[n("span",{className:"pd-search-mark","aria-hidden":"true",children:"⌕"}),n("input",{className:"pd-search-word",type:"search",value:e.$search,placeholder:e.openGroup===void 0?"a word, over every conversation":"a word, within this part","aria-label":"search",onInput:r(a=>e.search(a.target.value),"onInput")})]})}$Define(){super.$Define(),this.classes.add(this,"pd-search")}};r(pd,"$Search");let po=pd;const cd=class cd extends g{get register(){return this.book}$Results(...e){this.$Writing(...e),this.containers.replace(this,"span","div")}write(){const e=this.register;if(e===void 0)return;const a=e.$search.trim(),s=e.openGroup,t=e.found(a),i=s===void 0?`of ${e.entries.length}`:`of ${e.entriesOf(s).length} in this part`,d=o(zh);return c(v,{children:[c("span",{className:"pd-results-count",children:[n("b",{children:t.length})," ",t.length===1?"conversation":"conversations"," ",i," ",t.length===1?"says":"say"," “",a,"” in ",t.length===1?"its":"their"," title or synopsis"]}),t.map((u,k)=>n(d,{chapter:this.chapter,entry:u,named:s===void 0},k))]})}$Define(){super.$Define(),this.classes.add(this,"pd-results")}};r(cd,"$Results");let co=cd;var $e;let hh=($e=class extends g{constructor(){super(...arguments),this.$named=!1}get register(){return this.book}$Result(...e){this.$Writing(...e),this.containers.replace(this,"span","div")}write(){const e=this.register,a=this.$entry;if(e===void 0||a===void 0)return;o(D);const s=o(x),t=o(wo),i=o(Ao),d=e.index().get(a),u=e.$search.trim(),k=a.annotations.expressed(C)?.cover?.mention?.identifier,$=this.$named?e.groupOf(a)?.canonical?.name:void 0;return c(v,{children:[n("span",{className:"pd-result-title",children:kd(d?.title??a.title?.name??"",u)}),c("span",{className:"pd-result-exchanges",children:[e.sizeOf(a)," exchanges"]}),n(t,{entry:a}),c("span",{className:"pd-result-synopsis",children:[$===void 0?void 0:n("span",{className:"pd-result-part",children:$}),kd(fh(d?.synopsis??"",u),u)]}),k===void 0?void 0:n(i,{children:n(s,{children:k})})]})}$Define(){super.$Define(),this.classes.add(this,"pd-result")}},r($e,"$Result"),$e);const fh=r((p,e)=>{if(p.length<=190)return p;const a=p.toLowerCase().indexOf(e.toLowerCase());if(a<150)return`${p.slice(0,187)}…`;const s=p.lastIndexOf(" ",a-90)+1;return`…${p.slice(s,s+186)}…`},"clipped"),kd=r((p,e)=>{if(e==="")return p;const a=p.toLowerCase(),s=e.toLowerCase(),t=[];let i=0;for(let d=a.indexOf(s);d!==-1;d=a.indexOf(s,i))t.push(p.slice(i,d),n("mark",{children:p.slice(d,d+e.length)},d)),i=d+e.length;return t.push(p.slice(i)),t},"marked"),ld=class ld extends g{get register(){return this.book}$RegisterHead(...e){this.$Writing(...e),this.containers.replace(this,"span","div")}write(){const e=this.register;if(e===void 0)return;const a=o(D),s=o(x),t=e.coverOf(e.subject?.means?.identifier),i=e.openGroup,d=i===void 0?e.entries:e.entriesOf(i),u=d.reduce((H,se)=>H+e.sizeOf(se),0),k=d.map(P).filter(H=>H!=="").sort(),$=k.length===0?"":`${Q(d.find(H=>P(H)===k[0]))} to ${Q(d.find(H=>P(H)===k[k.length-1]))}`,z=i===void 0?void 0:e.projectOf(i);return c(v,{children:[c("span",{className:"pd-crumbs",children:[t===void 0?void 0:c(a,{children:[n(s,{children:t.mention.identifier}),t.title?.name]}),n("i",{children:"/"}),i===void 0?n(a,{children:e.title?.name}):c(v,{children:[c(a,{children:[n(s,{children:e.means.identifier}),e.title?.name]}),n("i",{children:"/"}),n(a,{children:i.canonical?.name})]})]}),i===void 0?void 0:n("span",{className:"pd-part-title",children:i.canonical?.name}),c("span",{className:"pd-report",children:[c("span",{children:[n("b",{children:d.length})," conversations"]}),i===void 0?c("span",{children:[n("b",{children:e.groups.length})," parts"]}):void 0,c("span",{children:[n("b",{children:u.toLocaleString("en-US")})," exchanges"]}),n("span",{children:$}),z?.means===void 0?void 0:c(a,{children:[n(s,{children:z.means.identifier}),"the project's page"]})]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-register-head")}};r(ld,"$RegisterHead");let lo=ld;const hd=class hd extends ea{constructor(){super(...arguments),this.shown=[]}defines(e){super.defines(e);const a=this.book,s=a.openGroup;s!==void 0&&e.classes.add(this,"pa-part-open");const t=s===void 0?[]:a.entriesOf(s);for(const i of this.shown)t.includes(i)||i.classes.revert(e);for(const i of t)[...i.classes].includes("pa-open")||i.classes.add(e,"pa-open");this.shown=t}paging(){return f`
            .pd-book.pa-turned .pa-page:not(.pa-open) { display: none; }
            .pd-book:not(.pa-turned) .pd-pages .pd-chapter.pa-page.pa-volume:not(.pa-open) { display: none; }
        `}areas(){return f`
            ${super.areas()}
            .pd-book .pd-head .pd-register-head { display: contents; }
            .pd-book.pa-part-open .pd-head .pd-chapter.pa-cover > a { display: none; }
            .pd-book .pd-head .pd-part-title { order: 2; grid-column: 1 / -1; margin: 0; font-family: ${({theme:e})=>e.serif}; font-size: calc(2.1429 * ${({theme:e})=>e.size}); font-weight: 600; line-height: 1.1; letter-spacing: -0.01em; color: ${({theme:e})=>e.heading}; }
            .pd-book .pd-head .pd-report .pd-word.pa-reference { color: ${({theme:e})=>e.accent}; text-decoration: none; }
            ${this.cards()}
            ${this.search()}
        `}search(){return f`
            .pd-book .pd-head .pd-paragraph.pd-search { order: 4; grid-column: 1 / -1; display: flex; align-items: center; gap: calc(${({theme:e})=>e.space} / 3); width: min(440px, 100%); margin: calc(${({theme:e})=>e.space} * 0.4167) 0 0; padding: calc(${({theme:e})=>e.space} * 0.2917) calc(${({theme:e})=>e.space} / 2); border: thin solid ${({theme:e})=>e.line}; border-radius: calc(${({theme:e})=>e.space} * 0.4167); background: ${({theme:e})=>e.side}; color: ${({theme:e})=>e.soft}; }
            .pd-book .pd-head .pd-search .pd-search-mark { font-style: normal; font-size: calc(1.1429 * ${({theme:e})=>e.size}); color: ${({theme:e})=>e.faint}; }
            .pd-book .pd-head .pd-search .pd-search-word { flex: 1; min-width: 0; border: 0; background: none; padding: 0; font-family: ${({theme:e})=>e.font}; font-size: ${({theme:e})=>e.size}; line-height: calc(1.4286 * ${({theme:e})=>e.size}); color: ${({theme:e})=>e.ink}; outline: none; }
            .pd-book .pd-head .pd-search .pd-search-word::placeholder { color: ${({theme:e})=>e.soft}; }
            .pd-book .pd-head .pd-search .pd-search-word::-webkit-search-cancel-button { cursor: pointer; }
            .pd-book.pa-searching:not(.pa-turned) .pd-pages .pd-chapter.pa-page.pa-volume { display: none; }
            .pd-book .pd-pages .pd-paragraph.pd-results { display: block; width: min(768px, 100%); margin: 0; }
            .pd-book .pd-pages .pd-results .pd-results-count { display: block; margin: calc(${({theme:e})=>e.space} * 0.8333) 0 0; font-family: ${({theme:e})=>e.font}; font-size: calc(0.8571 * ${({theme:e})=>e.size}); font-weight: 500; line-height: 1.5; letter-spacing: 0.02em; color: ${({theme:e})=>e.soft}; }
            .pd-book .pd-pages .pd-results .pd-results-count b { color: ${({theme:e})=>e.ink}; font-weight: 500; }
            .pd-book .pd-pages .pd-paragraph.pd-result { position: relative; display: grid; grid-template-columns: minmax(0, 1fr) auto auto; grid-template-areas: 'title exchanges day' 'synopsis synopsis synopsis'; align-items: baseline; column-gap: calc(${({theme:e})=>e.space} * 0.6667); margin: 0; padding: calc(${({theme:e})=>e.space} * 0.5833) 0 calc(${({theme:e})=>e.space} * 0.5417); border-block-end: thin solid rgba(11, 11, 11, .08); }
            .pd-book .pd-pages .pd-result .pd-result-title { grid-area: title; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-family: ${({theme:e})=>e.font}; font-size: calc(1.0714 * ${({theme:e})=>e.size}); line-height: 20px; color: ${({theme:e})=>e.ink}; }
            .pd-book .pd-pages .pd-result:hover .pd-result-title { color: ${({theme:e})=>e.accent}; }
            .pd-book .pd-pages .pd-result .pd-result-exchanges { grid-area: exchanges; font-family: ${({theme:e})=>e.font}; font-size: calc(0.8571 * ${({theme:e})=>e.size}); line-height: 20px; color: ${({theme:e})=>e.faint}; white-space: nowrap; font-variant-numeric: tabular-nums; }
            .pd-book .pd-pages .pd-result .pd-word.pd-entry-day { grid-area: day; min-width: 52px; text-align: end; font-family: ${({theme:e})=>e.font}; font-size: ${({theme:e})=>e.size}; line-height: 20px; color: ${({theme:e})=>e.soft}; white-space: nowrap; }
            .pd-book .pd-pages .pd-result .pd-result-synopsis { grid-area: synopsis; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; margin-block-start: 4px; font-family: ${({theme:e})=>e.serif}; font-size: ${({theme:e})=>e.size}; line-height: 1.5; color: ${({theme:e})=>e.soft}; }
            .pd-book .pd-pages .pd-result .pd-result-part { display: inline-block; margin-inline-end: calc(${({theme:e})=>e.space} / 3); padding: 0 6px; border-radius: 4px; background: ${({theme:e})=>e.tint}; font-family: ${({theme:e})=>e.font}; font-size: calc(0.7857 * ${({theme:e})=>e.size}); font-weight: 500; line-height: 18px; color: ${({theme:e})=>e.soft}; vertical-align: 1px; }
            .pd-book .pd-pages .pd-result mark { background: #fff2a8; color: inherit; padding: 0 1px; border-radius: 2px; }
            .pd-book .pd-pages .pd-result > a:has(> .pd-entry-open) { position: absolute; inset: 0; z-index: 1; }
            @media (max-width: ${({theme:e})=>e.narrow}) {
                .pd-book .pd-head .pd-paragraph.pd-search { width: 100%; }
                .pd-book .pd-pages .pd-result .pd-result-exchanges { display: none; }
            }
        `}cards(){return f`
            .pd-book:not(.pa-turned) .pd-pages .pd-parts { display: grid; grid-template-columns: repeat(auto-fill, minmax(calc(${({theme:e})=>e.space} * 9.8333), 1fr)); gap: calc(${({theme:e})=>e.space} / 2); width: min(768px, 100%); margin-block-start: calc(${({theme:e})=>e.space} * 0.75); }
            .pd-book.pa-turned .pd-pages .pd-parts { display: none; }
            .pd-book .pd-pages .pd-paragraph.pd-part-card { position: relative; display: grid; gap: calc(${({theme:e})=>e.space} / 8); margin: 0; padding: calc(${({theme:e})=>e.space} * 0.5833) calc(${({theme:e})=>e.space} * 0.6667) calc(${({theme:e})=>e.space} / 2); border: thin solid ${({theme:e})=>e.line}; border-radius: calc(${({theme:e})=>e.space} / 2); background: ${({theme:e})=>e.paper}; color: ${({theme:e})=>e.ink}; min-width: 0; transition: border-color ${({theme:e})=>e.beat} ease, box-shadow ${({theme:e})=>e.beat} ease; }
            .pd-book .pd-pages .pd-part-card:hover { border-color: #c0c9df; box-shadow: 0 2px 10px rgba(26, 31, 54, 0.06); }
            .pd-book .pd-pages .pd-part-card .pd-word .pd-part-name { display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-family: ${({theme:e})=>e.font}; font-size: calc(1.0714 * ${({theme:e})=>e.size}); font-weight: 600; line-height: calc(1.4286 * ${({theme:e})=>e.size}); color: ${({theme:e})=>e.heading}; }
            .pd-book .pd-pages .pd-part-card .pd-part-count { font-family: ${({theme:e})=>e.font}; font-size: calc(0.8571 * ${({theme:e})=>e.size}); line-height: calc(1.2857 * ${({theme:e})=>e.size}); color: ${({theme:e})=>e.faint}; font-variant-numeric: tabular-nums; }
            .pd-book .pd-pages .pd-part-card .pd-part-latest { display: flex; gap: calc(${({theme:e})=>e.space} / 3); align-items: baseline; margin-block-start: calc(${({theme:e})=>e.space} / 3); font-family: ${({theme:e})=>e.serif}; font-size: calc(0.9643 * ${({theme:e})=>e.size}); line-height: calc(1.2857 * ${({theme:e})=>e.size}); color: ${({theme:e})=>e.soft}; min-width: 0; }
            .pd-book .pd-pages .pd-part-card .pd-part-latest > span { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
            .pd-book .pd-pages .pd-part-card .pd-part-latest .pd-word.pd-entry-day { flex: none; margin-inline-start: auto; font-family: ${({theme:e})=>e.font}; font-size: calc(0.7857 * ${({theme:e})=>e.size}); color: ${({theme:e})=>e.faint}; font-variant-numeric: tabular-nums; }
            .pd-book .pd-pages .pd-part-card > a:has(> .pd-entry-open) { position: absolute; inset: 0; z-index: 1; }
            @media (max-width: ${({theme:e})=>e.narrow}) {
                .pd-book:not(.pa-turned) .pd-pages .pd-parts { grid-template-columns: 1fr 1fr; gap: calc(${({theme:e})=>e.space} / 3); margin-block-start: calc(${({theme:e})=>e.space} / 2); }
                .pd-book .pd-pages .pd-paragraph.pd-part-card { padding: calc(${({theme:e})=>e.space} * 0.4167) calc(${({theme:e})=>e.space} / 2); }
                .pd-book .pd-pages .pd-part-card .pd-part-latest { display: none; }
            }
        `}};r(hd,"$RegisterLayout");let nt=hd;U([ee()],nt.prototype,"shown",2);const fd=class fd extends B{$everyEntryStandsForABook(e){const a=e.entries.find(s=>s.annotations.expressed(Y)?.means===void 0);l(a===void 0,`every entry of a register stands for a book, holding its synopsis, and "${a?.title?.name}" stands for none`)}$everyEntryIsDated(e){const a=e.entries.find(s=>!s.is(L));l(a===void 0,`every entry of a register is dated, and "${a?.title?.name}" is not`)}$everyEntryIsListedUnderAPart(e){const a=new Set(e.groups.flatMap(t=>e.entriesOf(t))),s=e.entries.find(t=>!a.has(t));l(s===void 0,`every entry of a register is listed under a part of its table, and "${s?.title?.name}" is under none`)}$onlyAChapterAppends(e){const a=[...e.chapters,...e.entries];l(e.text.find(y).every(s=>a.includes(s)||!s.is(J)),"only an ordinary chapter or an entry files a file, and here a cover, a synopsis or a table of contents files one")}};r(fd,"RegisterSpecification");let he=fd;U([h("every entry of a register stands for a book, holding its synopsis")],he.prototype,"$everyEntryStandsForABook",1);U([h("every entry of a register is dated")],he.prototype,"$everyEntryIsDated",1);U([h("every entry of a register is listed under a part of its table")],he.prototype,"$everyEntryIsListedUnderAPart",1);U([h("only an ordinary chapter or an entry files a file")],he.prototype,"$onlyAChapterAppends",1);const No=o(S),gh=o(ro),uh=o(io),bh=o(po),mh=o(co),$h=o(hh),kh=o(lo),vh=o(nt),yh=gh,vd=uh,xh=bh,wh=mh,zh=$h,Oh=kh;o(No,fe)(Ld);o(No,te)(ue);o(No,wt)(vh);const gd=class gd extends g{$Define(){super.$Define(),this.classes.add(this,"pd-action")}};r(gd,"$Action");let ho=gd;const ud=class ud extends g{$Define(){super.$Define(),this.classes.add(this,"pd-result")}};r(ud,"$Result");let fo=ud;const Qh=o(ho);o(fo);const Kd=r(()=>c(lt,{children:[n(Td,{}),n(yt,{ground:"#eef5f6",band:"#c3e3e6",bandInk:"#1c565c",foot:"#8db9bd",footInk:"#153e43",ink:"#1f5a60"}),n(xt,{x:"-46",y:"-13"}),n(ht,{children:"[Dougs Library](/dougs-library/)"}),n(ft,{children:"[Doug](/dougs-story/)"}),n(gt,{children:"[Library](/dougs-library/)"}),n(ut,{children:"[The Library](/dougs-library/)"}),c(bt,{children:[n(vt,{}),n(mt,{children:`<svg viewBox="0 0 64 64" class="pd-illustration"><path class="light" d="M9 7h46v50H9z"/><path d="M9 7h46v50H9zM9 24h46M9 41h46"/><path class="fill" d="M13 11h5v13h-5zM20 9h4v15h-4zM26 13h6v11h-6zM34 10h4v14h-4zM40 14h6v10h-6z"/><path d="M48 24l4-12 3 1-4 11z"/><path class="fill" d="M13 28h4v13h-4zM19 30h7v11h-7zM28 27h4v14h-4zM34 31h5v10h-5zM41 28h6v13h-6zM49 29h3v12h-3z"/><path class="fill" d="M13 46h6v11h-6zM21 44h4v13h-4zM27 47h8v10h-8zM37 45h4v12h-4zM43 48h6v9h-6z"/><path d="M50 57l3-11 3 1-3 10z"/></svg>
`})]})]}),"SubjectCover$2"),Xd=r(()=>c(lt,{children:[n(qd,{}),n(lp,{}),n(qe,{children:Kd()}),n(yt,{ground:"#f5eedf",band:"#d9c3a3",bandInk:"#4a3626",foot:"#a3b6cc",footInk:"#2a4262",ink:"#2f4a6a"}),n(xt,{x:"-54",y:"-33"}),n(ht,{children:"[Dougs Story](/dougs-story/)"}),n(ft,{children:"[Doug](/dougs-story/)"}),n(gt,{children:"[Library](/dougs-library/)"}),n(ut,{children:"[The Librarian](/dougs-story/)"}),c(bt,{children:[n(vt,{}),n(mt,{children:`<svg viewBox="0 0 64 64" class="pd-illustration"><path class="light" d="M8 13h23v38H8zM33 13h23v38H33z"/><path d="M8 13h23v38H8zM33 13h23v38H33z"/><path d="M13 21h13M13 27h13M13 33h9M38 21h13M38 27h13M38 33h13M38 39h8"/><path class="fill" d="M15 55 45 25l4 4-30 30-6 2z"/><path d="M15 55 45 25l4 4-30 30-6 2zM43 27l4 4M17 53l2 2"/></svg>
`})]})]}),"StoryCover"),Dh=r(()=>c(lt,{children:[n(Td,{}),n(qe,{children:Kd()}),n(qe,{children:Xd()}),n(yt,{ground:"#eff1f6",band:"#c0c9df",bandInk:"#2a3a63",foot:"#8e9fc8",footInk:"#1f2d50",ink:"#2a3a63"}),n(xt,{x:"-36",y:"-26"}),n(ht,{children:"[Dougs Claude](/dougs-claude/)"}),n(ft,{children:"[Doug](/dougs-story/)"}),n(gt,{children:"[Library](/dougs-library/)"}),n(ut,{children:"[Claude](/dougs-claude/)"}),c(bt,{children:[n(vt,{}),n(mt,{children:`<svg viewBox="0 0 64 64" class="pd-illustration"><path class="light" d="M8 30h48v27H8z"/><path d="M8 30h48v27H8zM8 44h48"/><path class="fill" d="M12 33h5v9h-5zM19 31h4v11h-4zM25 34h7v8h-7zM34 32h4v10h-4zM40 35h8v7h-8z"/><path class="fill" d="M12 47h6v8h-6zM20 48h4v7h-4zM26 46h9v9h-9zM37 49h5v6h-5zM44 47h7v8h-7z"/><path class="light" d="M28 6h28v16H40l-6 5v-5h-6z"/><path d="M28 6h28v16H40l-6 5v-5h-6z"/><path d="M33 11h18M33 16h12"/></svg>
`})]})]}),"SubjectCover$1"),Vh=r(()=>c(lt,{children:[n(qd,{}),n(qe,{children:Dh()}),n(qe,{children:Xd()}),n(yt,{ground:"#eef5f6",band:"#b6dde2",bandInk:"#1c565c",foot:"#7fb7bd",footInk:"#153e43",ink:"#1f5a60"}),n(xt,{x:"-30",y:"-22"}),n(ht,{children:"[Our Conversations](/our-conversations/)"}),n(ft,{children:"[Doug](/dougs-story/)"}),n(gt,{children:"[Claude](/dougs-claude/)"}),n(ut,{children:"[Conversations](/our-conversations/)"}),c(bt,{children:[n(vt,{}),n(mt,{children:`<svg viewBox="0 0 64 64" class="pd-illustration"><path class="light" d="M6 9h34v20H18l-6 6v-6H6z"/><path d="M6 9h34v20H18l-6 6v-6H6z"/><path d="M11 15h24M11 21h16"/><path class="fill" d="M24 31h34v20H52v6l-6-6H24z"/><path d="M24 31h34v20H52v6l-6-6H24z"/><path class="light" d="M29 37h24M29 43h16"/></svg>
`})]})]}),"SubjectCover");export{no as $,Kh as A,Td as B,qh as C,Ih as D,vt as I,Gh as M,Xh as O,Lh as P,Rh as Q,Vh as S,qe as V,xt as W,Xd as a,yt as b,Bh as c,Eh as d,Mh as e,_h as f,Wh as g,Jh as h,Th as i,Zh as j,Fh as k,Yh as l,Uh as m,Qh as n,Hh as o,Dh as p,gl as q};
