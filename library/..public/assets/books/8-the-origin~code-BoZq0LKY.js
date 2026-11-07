var Ln=Object.defineProperty;var n=(d,e)=>Ln(d,"name",{value:e,configurable:!0});import{jsxs as h,Fragment as $,jsx as r}from"react/jsx-runtime";import{$ as o,selection as w,$check as c,$Chemical as Fn,inert as ks}from"@dna-platform/chemistry";import{$Theme as Rn,specify as l,$Annotation as g,$Paragraph as f,$Author as ys,Word as j,Reference as x,$Subject as $n,$Topic as mn,AnnotationSpecification as u,$Word as O,$Book as vn,$Format as X,html as k,$Chapter as v,binder as N,$Svg as gt,Code as En,$Section as A,$Append as kn,$Date as xs,$Content as pn,$Parenthetical as Gn,$TableOfContents as Q,$Composition as Sn,$Image as Un,$Reference as ws,$Cover as z,$Synopsis as cn,CoverSpecification as Zn,$Paginated as Yn,Self as ln,Theme as yn,reflection as qn,BookSpecification as Xn,$Heading as xn,$Referent as zs,$SelfReference as Qn,$Means as Kn,Referent as Jn,identifier as Vn,SectionSpecification as er,Chapter as Os,Title as Ds,Author as Ps,Subject as js,About as Cs,Paragraph as As,Svg as Ms,Autobiography as tr}from"@dna-platform/public";import{css as b}from"styled-components";const Es=class Es extends Rn{constructor(){super(...arguments),this.font="'Inter', system-ui, sans-serif",this.prose="'Inter', system-ui, sans-serif",this.mono="'JetBrains Mono', ui-monospace, monospace",this.size="0.875rem",this.leading="1.6",this.measure="44rem",this.spreadColumn="15.5rem",this.space="1.5rem",this.holdsColumn="240px",this.barHeight="50px",this.beat="320ms",this.narrow="48rem",this.phoneWidth="390px",this.colour="#4e9eb9",this.accent="#166178",this.bar="#0c1b1f",this.barInk="#ffffff",this.barDim="#a9bcc1",this.barOn="rgba(255, 255, 255, 0.11)",this.barLine="#1d3339",this.mark="#c8f4fb",this.side="#f8f9fb",this.sideInk="#10252c",this.sideDim="#727d8c",this.sideOn="#ffffff",this.sideLine="#e4e9f2",this.night="#0c1b1f",this.deep="#14323c",this.blue="#166178",this.sea="#4e9eb9",this.sky="#8fc8dc",this.opal="#c8f4fb",this.pale="#e3f5fa",this.mist="#f1f7f9",this.white="#ffffff",this.ink="#10252c",this.soft="#727d8c",this.line="#e4e9f2",this.me="#e8590c",this.wash="linear-gradient(105deg, #e2f6fb 0%, #ecf0fd 52%, #fae9f4 100%)",this.serif="'Source Serif 4', Georgia, serif",this.between="'Source Sans 3', 'Inter', system-ui, sans-serif",this.bookPaper="#fbf9f3",this.bookInk="#29251d",this.heading="#10252c",this.capital="#166178",this.lit="#166178",this.faint="#9ea8b5",this.paper="#ffffff",this.panel="#f1f7f9",this.rule="#e4e9f2",this.edge="transparent",this.tint="rgba(11, 11, 11, 0.05)",this.dusk="#14323c",this.glow="#cfe6e3",this.dim="#4f7672",this.keyword="#8ad7ff",this.string="#ffd48a",this.type="#9be3d6",this.comment="#5f8a86",this.haze="#a9bcc1",this.glass="rgba(255, 255, 255, 0.62)",this.binding="linear-gradient(160deg, #16303a, #0c1b1f)",this.spine="inset 5px 0 0 rgba(0, 0, 0, 0.14), inset 6px 0 0 rgba(255, 255, 255, 0.12), 0 10px 20px -10px rgba(0, 0, 0, 0.45)",this.shadow="0 0.75rem 1.4rem -0.9rem rgba(12, 27, 31, 0.55)",this.volume="11.5rem",this.cover="8.25rem",this.card="18rem",this.barLight="#ffffff",this.barMid="#f1f7f9",this.barDeep="#f5f7fa",this.barShadow="none",this.sideLight="#ffffff",this.sideDeep="#f5f7fa",this.codeGround="#f1f7f9",this.hairline="1px",this.stroke="2px",this.rise="-1px",this.gloss="none",this.ring="0 0 0 2px #c8f4fb",this.decisionShadow="none",this.photo="7rem",this.radius="0.375rem",this.barTint="#ffffff",this.skyInk="#166178",this.lift="inset 5px 0 0 rgba(0, 0, 0, 0.14), inset 6px 0 0 rgba(255, 255, 255, 0.12), 0 14px 24px -12px rgba(0, 0, 0, 0.5)",this.openSpine="inset 7px 0 0 rgba(0, 0, 0, 0.14), inset 8px 0 0 rgba(255, 255, 255, 0.12), 0 12px 22px -14px rgba(0, 0, 0, 0.5)",this.sans="'Inter', system-ui, sans-serif",this.muted="#516770",this.bubble="rgba(16, 37, 44, 0.05)",this.shade="rgba(16, 37, 44, 0.03)",this.pill="#166178",this.column="48rem",this.style=w.div`${this.parts()}`}parts(){return[this.page(),this.writing(),this.links(),this.figures(),this.listings(),this.switches(),this.turns(),this.illustrations(),this.marks(),this.library(),this.head(),this.holds(),this.context(),this.tones()]}page(){return b`
            font-family: ${({theme:e})=>e.font};
            font-size: ${({theme:e})=>e.size};
            line-height: ${({theme:e})=>e.leading};
            color: ${({theme:e})=>e.ink};
            background: ${({theme:e})=>e.paper};
            min-height: 100vh;
        `}writing(){return b`
            .pd-pages { font-family: ${({theme:e})=>e.prose}; }
            .pd-chapter, .pd-section, .pd-paragraph { margin-block: ${({theme:e})=>e.space}; }
            .pd-chapter { max-width: ${({theme:e})=>e.measure}; }
        `}links(){return b`
            .pa-reference { color: ${({theme:e})=>e.accent}; }
            .pa-reference.pa-self-reference { color: inherit; text-decoration: none; }
        `}figures(){return b`
            .pd-image img { display: block; max-width: 100%; height: auto; }
            .pa-phone .pd-image img { max-width: min(100%, ${({theme:e})=>e.phoneWidth}); }
            .pd-code { font-family: ${({theme:e})=>e.mono}; overflow-x: auto; }
        `}listings(){return b`
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
        `}switches(){return b`
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
        `}illustrations(){return b`
            .pd-illustration { fill: none; stroke: var(--ink); stroke-width: 1.7; stroke-linecap: round; stroke-linejoin: round; }
            .pd-illustration .fill { fill: var(--foot); stroke: var(--ink); }
            .pd-illustration .light { fill: ${({theme:e})=>e.white}; stroke: none; }
            .pd-drawing { display: grid; place-items: center; min-height: 0; }
        `}marks(){return b`
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
        `}library(){return b`
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
        `}head(){return b`
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
        `}holds(){return b`
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
        `}context(){return b`
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
        `}tones(){return b`
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
        `}turns(){return b`
            .pd-paragraph.pd-turn {
                display: flex;
                justify-content: space-between;
                gap: ${({theme:e})=>e.space};
                font-size: calc(0.786 * ${({theme:e})=>e.size});
            }
            .pd-turn .pa-reference { font-weight: 500; text-decoration: none; }
            .pd-turn .pd-count { color: ${({theme:e})=>e.faint}; }
        `}};n(Es,"$LibraryBookTheme");let De=Es;const sr=o(De);var ar=Object.defineProperty,or=Object.getOwnPropertyDescriptor,nr=n((d,e,t,a)=>{for(var s=or(e,t),i=d.length-1,p;i>=0;i--)(p=d[i])&&(s=p(e,t,s)||s);return s&&ar(e,t,s),s},"__decorateClass$j");const Gs=class Gs extends g{constructor(){super(...arguments),this.specification=new Pe}defines(e){e.classes.add(this,"pa-label")}erase(e){e.classes.revert(this)}};n(Gs,"$Label");let ut=Gs;const Ss=class Ss extends u{$saidOfAWord(e){c(e instanceof O,"label is said of a word, and this is not one")}};n(Ss,"LabelSpecification");let Pe=Ss;nr([l("label is said of a word")],Pe.prototype,"$saidOfAWord");const de=o(ut),Us=class Us extends f{get cover(){return this.$cover??this.book?.cover}write(){const e=this.cover.annotations.expressed(ys),t=o(j),a=o(de),s=o(x);return h($,{children:[h(t,{children:[r(a,{}),"by"]}),h(t,{children:[r(s,{children:e.means.identifier}),e.name]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-byline")}};n(Us,"$Byline");let bt=Us;const Zs=class Zs extends f{get cover(){return this.$cover??this.book?.cover}write(){const e=this.cover.annotations.expressed($n),t=o(j),a=o(de),s=o(x);return h($,{children:[h(t,{children:[r(a,{}),"subject"]}),h(t,{children:[r(s,{children:e.means.identifier}),e.name]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-subject-line")}};n(Zs,"$SubjectLine");let $t=Zs;const Ys=class Ys extends f{get cover(){return this.$cover??this.book?.cover}get topics(){return this.cover?.annotations.find(mn)??[]}write(){const e=o(j),t=o(de),a=o(x);return h($,{children:[h(e,{children:[r(t,{}),"topic"]}),this.topics.map((s,i)=>h(e,{children:[r(a,{children:s.means.identifier}),s.name]},i))]})}$Define(){super.$Define(),this.classes.add(this,"pd-topic-line")}};n(Ys,"$TopicLine");let mt=Ys;const rr=o(bt),bd=o($t),ir=o(mt);var dr=Object.defineProperty,pr=Object.getOwnPropertyDescriptor,cr=n((d,e,t,a)=>{for(var s=pr(e,t),i=d.length-1,p;i>=0;i--)(p=d[i])&&(s=p(e,t,s)||s);return s&&dr(e,t,s),s},"__decorateClass$i");const qs=class qs extends u{$saidOfABook(e){c(e instanceof vn,"this is said of a book, and here it is said of something else")}};n(qs,"OfABookSpecification");let W=qs;cr([l("this is said of a book")],W.prototype,"$saidOfABook");const Xs=class Xs extends O{get on(){return[this.book.$is].flat().includes(this.$annotation)}$Switch(...e){this.$Writing(...e),this.containers.replace(this,"span","button")}container(e){return super.container({type:"button","aria-pressed":this.on,onClick:n(()=>this.press(),"onClick"),...e})}press(){const e=this.book,t=[e.$is].flat();e.$is=this.on?t.filter(a=>a!==this.$annotation):[this.$annotation,...t]}$Define(){super.$Define(),this.classes.add(this,"pd-switch")}};n(Xs,"$Switch");let he=Xs;const Qs=class Qs extends he{press(){const e=this.book,t=[e.$is].flat().filter(a=>!this.$family.includes(a));e.$is=[this.$annotation,...t]}};n(Qs,"$Tab");let fe=Qs;const wn=o(he),lr=o(fe);var hr=Object.defineProperty,fr=Object.getOwnPropertyDescriptor,zn=n((d,e,t,a)=>{for(var s=fr(e,t),i=d.length-1,p;i>=0;i--)(p=d[i])&&(s=p(e,t,s)||s);return s&&hr(e,t,s),s},"__decorateClass$h");const Ks=class Ks extends X{constructor(){super(...arguments),this.specification=new ge,this.style=w.div`
        .pa-coloured { --colour: ${e=>e.$colour}; }
    `}get colour(){return k.copy(this.text).trim()}$Coloured(...e){this.$Format(...e);const t=this.style;this._painted=a=>r(t,{$colour:this.colour,...a})}defines(e){e.classes.add(this,"pa-coloured"),e.containers.add(this,this._painted)}erase(e){e.classes.revert(this),e.containers.revert(this)}};n(Ks,"$Coloured");let Z=Ks;const Js=class Js extends u{$saidOfAChapterOrAParagraph(e){c(e instanceof v||e instanceof f,"coloured is said of a chapter or a paragraph, and this is neither")}$givenItsColour(e){c(/^#[0-9a-f]{6}$/iu.test(e.annotations.expressed(Z)?.colour??""),"coloured is given its colour as six hex digits, and this one was given something else")}};n(Js,"ColouredSpecification");let ge=Js;zn([l("coloured is said of a chapter or a paragraph")],ge.prototype,"$saidOfAChapterOrAParagraph");zn([l("coloured is given its colour")],ge.prototype,"$givenItsColour");o(Z);var gr=Object.defineProperty,ur=Object.getOwnPropertyDescriptor,Is=n((d,e,t,a)=>{for(var s=ur(e,t),i=d.length-1,p;i>=0;i--)(p=d[i])&&(s=p(e,t,s)||s);return s&&gr(e,t,s),s},"__decorateClass$g");const Vs=class Vs extends X{constructor(){super(...arguments),this.specification=new ee}get identifier(){return N.reference(k.copy(this.text))?.identifier??""}get name(){return N.reference(k.copy(this.text))?.name??""}get entry(){return this.book?.chapterAt(this.identifier)}get drawing(){const e=this.entry?.text.find(f).flatMap(t=>t.text.find(gt))[0];return e===void 0?"":k.copy(e.text).trim()}get colour(){return this.entry?.annotations.expressed(Z)?.colour??""}$Keyed(...e){this.$Format(...e);const t=o($r);this._layer=a=>h("div",{...a,children:[r(t,{keyed:this}),a.children]})}defines(e){e.classes.add(this,"pa-keyed"),e.containers.add(this,this._layer)}erase(e){e.classes.revert(this),e.containers.revert(this)}};n(Vs,"$Keyed");let U=Vs;const ea=class ea extends O{constructor(){super(...arguments),this.style=w.span`
        --colour: ${e=>e.$colour};
    `}$Icon(...e){this.$Writing(...e);const t=this.style;this._painted=a=>r(t,{$colour:this.$keyed?.colour??"",...a}),this.containers.replace(this,"span",this._painted)}write(){return r("span",{className:"pd-drawing",role:"img","aria-label":this.$keyed?.name,dangerouslySetInnerHTML:{__html:this.$keyed?.drawing??""}})}$Define(){super.$Define(),this.classes.add(this,"pd-icon")}};n(ea,"$Icon");let vt=ea;const ta=class ta extends u{$saidOfAChapter(e){c(e instanceof v,"keyed is said of a chapter, and this is not one")}$namesAnEntry(e){const t=e.annotations.expressed(U)?.entry;c(t!==void 0&&t.annotations.expressed(U)?.entry===t,"keyed names an entry of the key, a chapter of this book keyed as itself, and this one names something else")}$entryHoldsItsDrawingAndColour(e){const t=e.annotations.expressed(U)?.entry;t!==void 0&&c(t.text.find(f).flatMap(a=>a.text.find(gt)).length===1&&t.is(Z),"an entry of the key holds one drawing and its colour, and this one holds something else")}};n(ta,"KeyedSpecification");let ee=ta;Is([l("keyed is said of a chapter")],ee.prototype,"$saidOfAChapter");Is([l("keyed names an entry of the key")],ee.prototype,"$namesAnEntry");Is([l("an entry of the key holds one drawing and its colour")],ee.prototype,"$entryHoldsItsDrawingAndColour");o(U);const br=o(vt),$r=br;var mr=Object.defineProperty,vr=Object.getOwnPropertyDescriptor,kr=n((d,e,t,a)=>{for(var s=vr(e,t),i=d.length-1,p;i>=0;i--)(p=d[i])&&(s=p(e,t,s)||s);return s&&mr(e,t,s),s},"__decorateClass$f");const yr={tsx:"typescript",ts:"typescript",mjs:"javascript",js:"javascript",css:"css",html:"xml",svg:"xml",json:"json",md:"markdown"},xr='<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"><path d="M6 4.5 3.5 8 6 11.5M10 4.5 12.5 8 10 11.5"/></svg>',pe=n(d=>`${d.$identifier}${d.$type}`,"fileNameOf"),wr=n(d=>d===void 0?[]:k.copy(d.text).split(`
`),"fileLinesOf"),On=n(d=>d?.chapter?.annotations.expressed(M),"spreadOf"),sa=class sa extends f{constructor(){super(...arguments),this.$family=[]}get name(){return this.$file===void 0?"":pe(this.$file)}get language(){return yr[(this.$file?.$type??"").replace(/^\./u,"")]??""}get spread(){return On(this.$file)}get chapter(){return this.$file?.chapter??super.chapter}$FileListing(...e){this.$Writing(...e),this.containers.replace(this,"span","div")}container(e){return super.container({onClick:n(()=>this.press(),"onClick"),...e})}press(){if(this.$filePanelState===void 0)return;const e=this.book,t=[e.$is].flat().filter(a=>!this.$family.includes(a));e.$is=[this.$filePanelState,...t]}write(){const e=o(j),t=o(En);return h($,{children:[r(e,{children:this.name}),r(t,{identifier:this.$file?.$identifier,type:this.$file?.$type,language:this.language,numbered:!0})]})}$Define(){super.$Define(),this.classes.add(this,"pd-file-listing");const e=o(Dr);this.annotations.add(this,r(e,{}))}};n(sa,"$FileListing");let je=sa;const aa=class aa extends g{constructor(){super(...arguments),this.specification=new Ce}defines(e){const t=e;t.$file!==void 0&&t.spread?.openFile===t.$file&&e.classes.add(this,"pa-open")}erase(e){e.classes.revert(this)}};n(aa,"$OpenListing");let kt=aa;const oa=class oa extends u{$isAFileListing(e){c(e instanceof je,"an open listing is a file listing, and this is not one")}};n(oa,"OpenListingSpecification");let Ce=oa;kr([l("an open listing is a file listing")],Ce.prototype,"$isAFileListing");const na=class na extends fe{constructor(){super(...arguments),this.$skeleton=!1,this.style=w.button`
        --colour: ${e=>e.$colour};
    `}get on(){const e=this.$file?.chapter;return e!==void 0&&e===this.book.open&&this.spread?.openFile===this.$file}get name(){return this.$file===void 0?"":pe(this.$file)}get spread(){return On(this.$file)}get colour(){return this.$file?.chapter?.annotations.expressed(U)?.colour??""}get lines(){return wr(this.$file)}get chapter(){return this.$file?.chapter??super.chapter}$FileTab(...e){this.$Switch(...e),this.containers.replace(this,"button",this.style)}container(e){return super.container({$colour:this.colour,...e})}press(){const e=this.spread;e!==void 0&&(e.$openFile=this.$file),this.$annotation!==void 0&&super.press()}write(){return h($,{children:[r("span",{className:"pd-drawing",dangerouslySetInnerHTML:{__html:xr}}),r("span",{className:"pd-tab-name",children:this.name}),this.$skeleton?r("span",{className:"pd-skeleton",children:this.lines.slice(0,14).map((e,t)=>r("i",{style:{width:`${Math.max(12,Math.min(100,e.length*2.2))}%`}},t))}):void 0]})}$Define(){super.$Define(),this.classes.add(this,"pd-file-tab")}};n(na,"$FileTab");let yt=na;const zr=o(je),Or=o(kt),Ts=o(yt),Dr=Or;var Pr=Object.defineProperty,jr=Object.getOwnPropertyDescriptor,Cr=n((d,e,t,a)=>{for(var s=jr(e,t),i=d.length-1,p;i>=0;i--)(p=d[i])&&(s=p(e,t,s)||s);return s&&Pr(e,t,s),s},"__decorateClass$e");const lt=class lt extends g{constructor(){super(...arguments),this.specification=new W}defines(e){for(const t of e.annotations.after(this))t instanceof lt&&e.annotations.express(t,!1);e.classes.add(this,"pa-file-panel-state")}erase(e){e.classes.revert(this)}};n(lt,"$FilePanelState");let te=lt;const ra=class ra extends te{defines(e){super.defines(e),e.classes.add(this,"pa-code-forward")}};n(ra,"$CodeForward");let xt=ra;const ia=class ia extends te{defines(e){super.defines(e),e.classes.add(this,"pa-words-forward")}};n(ia,"$WordsForward");let wt=ia;const da=class da extends te{defines(e){super.defines(e),e.classes.add(this,"pa-split")}};n(da,"$Split");let zt=da;const pa=class pa extends g{constructor(){super(...arguments),this.specification=new W}defines(e){e.classes.add(this,"pa-light-code")}erase(e){e.classes.revert(this)}};n(pa,"$LightCode");let Ot=pa;const ca=class ca extends g{constructor(){super(...arguments),this.specification=new W}defines(e){e.classes.add(this,"pa-wrapped-code")}erase(e){e.classes.revert(this)}};n(ca,"$WrappedCode");let Dt=ca;const la=class la extends g{constructor(){super(...arguments),this.specification=new W}defines(e){e.classes.add(this,"pa-numbered-code")}erase(e){e.classes.revert(this)}};n(la,"$NumberedCode");let Pt=la;const ha=class ha extends g{constructor(){super(...arguments),this.specification=new Ae}defines(e){e.classes.add(this,"pa-brief")}erase(e){e.classes.revert(this)}};n(ha,"$Brief");let jt=ha;const fa=class fa extends u{$saidOfAParagraph(e){c(e instanceof f,"brief is said of a paragraph, and this is not one")}};n(fa,"BriefSpecification");let Ae=fa;Cr([l("brief is said of a paragraph")],Ae.prototype,"$saidOfAParagraph");o(te);const Ns=o(xt),Dn=o(wt),ue=o(zt),Ar=o(Ot),Mr=o(Dt),Ir=o(Pt),$d=o(jt),ga=class ga extends f{constructor(){super(...arguments),this.style=w.div`
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
    `}get spread(){return this.chapter?.annotations.expressed(M)}$FileRail(...e){this.$Writing(...e),this.containers.replace(this,"span",this.style)}write(){const e=o(Ts),t=this.spread;if(t!==void 0)return t.files.map(a=>r(e,{file:a,annotation:ue,family:t.filePanelStates,skeleton:!0},pe(a)))}$Define(){super.$Define(),this.classes.add(this,"pd-file-rail")}};n(ga,"$FileRail");let Ct=ga;const ua=class ua extends fe{constructor(){super(...arguments),this.style=w.button`
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
    `}get paragraphs(){return(this.chapter?.text.find(A)??[]).flatMap(e=>e.text.find(f)).slice(0,16).map(e=>k.copy(e.text))}$FilePanelGrip(...e){this.$Switch(...e),this.containers.replace(this,"button",this.style)}write(){return r("span",{className:"pd-skeleton",children:this.paragraphs.map((e,t)=>r("i",{style:{width:`${Math.max(25,Math.min(100,e.length/4))}%`}},t))})}$Define(){super.$Define(),this.classes.add(this,"pd-file-panel-grip")}};n(ua,"$FilePanelGrip");let At=ua;const Tr=o(Ct),Nr=o(At),ba=class ba extends f{constructor(){super(...arguments),this.style=w.div`
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
    `}get spread(){return this.chapter?.annotations.expressed(M)}$FilePanel(...e){this.$Writing(...e),this.containers.replace(this,"span",this.style)}write(){const e=o(Br),t=o(zr),a=this.spread;if(a!==void 0)return h($,{children:[r(e,{chapter:this.chapter}),r("div",{className:"pd-file-listings",children:a.files.map(s=>r(t,{file:s,filePanelState:Ns,family:a.filePanelStates},pe(s)))})]})}$Define(){super.$Define(),this.classes.add(this,"pd-file-panel")}};n(ba,"$FilePanel");let Mt=ba;const $a=class $a extends f{constructor(){super(...arguments),this.style=w.div`
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
    `}get spread(){return this.chapter?.annotations.expressed(M)}$FilePanelBar(...e){this.$Writing(...e),this.containers.replace(this,"span",this.style)}write(){const e=o(Ts),t=o(lr),a=o(wn),s=this.spread,i=this.chapter;if(s!==void 0)return h($,{children:[s.files.map(p=>r(e,{file:p},pe(p))),r("span",{className:"pd-words-only",children:r(t,{chapter:i,annotation:Dn,family:s.filePanelStates,children:"words"})}),r("span",{className:"pd-dock pd-to-full",children:r(t,{chapter:i,annotation:Ns,family:s.filePanelStates,children:"full screen"})}),r("span",{className:"pd-dock pd-to-split",children:r(t,{chapter:i,annotation:ue,family:s.filePanelStates,children:"split"})}),h("span",{className:"pd-options",children:[r(a,{chapter:i,annotation:Ar,children:"light"}),r(a,{chapter:i,annotation:Mr,children:"wrap"}),r(a,{chapter:i,annotation:Ir,children:"lines"})]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-file-panel-bar")}};n($a,"$FilePanelBar");let It=$a;const Wr=o(Mt),Hr=o(It),Br=Hr;var _r=Object.defineProperty,Lr=Object.getOwnPropertyDescriptor,Fr=n((d,e,t,a)=>{for(var s=Lr(e,t),i=d.length-1,p;i>=0;i--)(p=d[i])&&(s=p(e,t,s)||s);return s&&_r(e,t,s),s},"__decorateClass$d");const ma=class ma extends X{constructor(){super(...arguments),this.specification=new Me,this.$openFile=void 0,this.grid=w.div`
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
    `}get files(){return this.parent.annotations.find(kn).reverse()}get openFile(){return this.$openFile??this.files[0]}get filePanelStates(){return[Dn,ue,Ns]}$Spread(...e){this.$Format(...e);const t=this.grid,a=o(Wr),s=o(Tr),i=o(Nr);this.style=({className:p,children:D})=>{const C=this.parent,m=[...C.classes].includes("pa-open");return h(t,{className:`${p??""}${m?" pa-open":""}`.trim(),children:[r("div",{className:"pd-words",children:D}),m?h($,{children:[r(a,{chapter:C}),r(s,{chapter:C}),r(i,{chapter:C,annotation:ue,family:this.filePanelStates})]}):void 0]})}}defines(e){super.defines(e),e.classes.add(this,"pa-spread")}erase(e){super.erase(e),e.classes.revert(this)}};n(ma,"$Spread");let M=ma;const va=class va extends u{$isAChapter(e){c(e instanceof v,"a spread is a chapter read beside its files, and this is not a chapter")}};n(va,"SpreadSpecification");let Me=va;Fr([l("a spread is a chapter read beside its files")],Me.prototype,"$isAChapter");const md=o(M);var Rr=Object.defineProperty,Er=Object.getOwnPropertyDescriptor,Ws=n((d,e,t,a)=>{for(var s=Er(e,t),i=d.length-1,p;i>=0;i--)(p=d[i])&&(s=p(e,t,s)||s);return s&&Rr(e,t,s),s},"__decorateClass$c");const ka=class ka extends g{constructor(){super(...arguments),this.specification=new se}get date(){return this.text.find(xs)[0]}defines(e){e.classes.add(this,"pa-dated")}erase(e){e.classes.revert(this)}note(){const e=o(this.date);return r(e,{})}};n(ka,"$Dated");let H=ka;const ya=class ya extends u{$saidOfAChapter(e){c(e instanceof v,"dated is said of a chapter, and this is not one")}$datedOnce(e){c(e.annotations.containsOne(H),"a chapter is dated once, and this one is dated more than once")}$givenOneDate(e){c(e.annotations.expressed(H)?.text.find(xs).length===1,"a dated chapter is given one date, and this one is given none or more than one")}};n(ya,"DatedSpecification");let se=ya;Ws([l("dated is said of a chapter")],se.prototype,"$saidOfAChapter");Ws([l("a chapter is dated once")],se.prototype,"$datedOnce");Ws([l("a dated chapter is given one date")],se.prototype,"$givenOneDate");const vd=o(H);var Gr=Object.defineProperty,Sr=Object.getOwnPropertyDescriptor,ce=n((d,e,t,a)=>{for(var s=Sr(e,t),i=d.length-1,p;i>=0;i--)(p=d[i])&&(s=p(e,t,s)||s);return s&&Gr(e,t,s),s},"__decorateClass$b");const Pn='<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3.5 10.5 8 6 12.5"/></svg>',Ur='<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linejoin="round" stroke-linecap="round"><rect class="ground" x="0.75" y="0.75" width="14.5" height="14.5"/><path d="M3.5 5.5h3l1.5 1.5h4.5v5h-9z"/></svg>',xa=class xa extends X{constructor(){super(...arguments),this.specification=new Be,this.style=w.div`
        ${e=>e.$schemeDeclarations===void 0?"":`.pa-entry { ${e.$schemeDeclarations} }`}
    `}get place(){return T(this.parent).identifier}get referencedChapter(){return this.book.chapterAt(this.place)}get cover(){return this.referencedChapter?.annotations.expressed(q)?.cover??this.book.coverOf(this.place)}get schemeDeclarations(){const e=this.cover?.annotations.expressed(_);if(e!==void 0)return e.declarations;const t=this.referencedChapter?.annotations.expressed(Z)?.colour;return t===void 0?void 0:`--colour: ${t};`}$Entry(...e){this.$Format(...e);const t=this.style;this._painted=a=>r(t,{$schemeDeclarations:this.schemeDeclarations,...a})}defines(e){e.classes.add(this,"pa-entry"),e.containers.add(this,this._painted),(this.place===this.book?.$bookmark||this.place===this.book.open?.mention?.identifier)&&e.classes.add(this,"pa-open")}erase(e){e.classes.revert(this),e.containers.revert(this)}};n(xa,"$Entry");let ae=xa;const wa=class wa extends g{constructor(){super(...arguments),this.specification=new He}defines(e){e.classes.add(this,"pa-appendix")}erase(e){e.classes.revert(this)}};n(wa,"$Appendix");let Ie=wa;const za=class za extends Fn{constructor(){super(...arguments),this.$word=""}};n(za,"$Sought");let Tt=za;const Oa=class Oa extends g{constructor(){super(...arguments),this.specification=new We,this.$folded=!1,this.$counted=!1,this.$dated=!1,this.$searched=!1}get word(){return fn.$word}get sections(){return this.chapter.text.find(A)}get entries(){const e=n(t=>!t.is(Gn)&&T(t)!==void 0,"listed");return[...this.chapter.text].flatMap(t=>t instanceof A?t.text.find(f):t instanceof f?[t]:[]).filter(e)}get found(){return this.book.found(this.word)}chapterOf(e){const t=T(e)?.identifier;return t===void 0?void 0:this.book.chapterAt(t)}search(e){fn.$word=e;const t=this.chapter,a=e.trim()!=="";if(t!==void 0&&a!==t.is(Te)){const s=[t.$is].flat().filter(i=>i!==void 0&&i!==gn);t.$is=a?[gn,...s]:s}this.book.sought(e.trim())}$Bound(){const e=o(oi),t=o(Cn),a=o(Ts),s=this.book;for(const m of this.entries){m.annotations.add(this,r(e,{}));const y=s.chapterAt(T(m).identifier)?.annotations.expressed(M);if(y===void 0)continue;const le=y.files;le.length===0&&!this.sections.some(G=>G.text.find(f).includes(m))||m.text.add(this,r(t,{foldedWriting:le.length===0?void 0:m,annotation:Gt}),...le.map(G=>r(a,{file:G,annotation:ue,family:y.filePanelStates},pe(G))))}const i=o(jn),p=o(ii),D=new Set(s.entries),C=n(m=>{const y=this.chapterOf(m);return y!==void 0&&D.has(y)},"leadsToAnEntry");if(this.$dated)for(const m of this.entries){const y=this.chapterOf(m);y===void 0||!D.has(y)||!y.is(H)||m.text.add(this,r(i,{entry:y}))}for(const m of this.sections){this.$folded&&(m.$is=[Gt]);const y=m.canonical;this.$counted&&y!==void 0&&m.text.find(f).some(C)&&y.text.add(this,r(p,{section:m}))}super.$Bound()}};n(Oa,"$Index");let B=Oa;const Da=class Da extends g{constructor(){super(...arguments),this.specification=new Ne}defines(e){e.classes.add(this,"pa-searching")}erase(e){e.classes.revert(this)}};n(Da,"$Searching");let Te=Da;const Pa=class Pa extends u{$saidOfATable(e){c(e.is(Q),"searching is said of a table of contents, the index's chapter, and this is not one")}};n(Pa,"SearchingSpecification");let Ne=Pa;ce([l("searching is said of a table of contents")],Ne.prototype,"$saidOfATable");const ja=class ja extends f{get index(){return this.book?.table?.annotations.expressed(B)}$Search(...e){this.$Writing(...e),this.containers.replace(this,"span","div")}write(){const e=this.index,t=this.book;if(!(e===void 0||t===void 0))return h($,{children:[r("span",{className:"pd-search-mark","aria-hidden":"true",children:"⌕"}),r("input",{className:"pd-search-word",type:"search",value:e.word,placeholder:t.searchHint,"aria-label":"search",onInput:n(a=>e.search(a.target.value),"onInput")})]})}$Define(){super.$Define(),this.classes.add(this,"pd-search")}};n(ja,"$Search");let Nt=ja;const Ca=class Ca extends f{get index(){return this.book?.table?.annotations.expressed(B)}$Results(...e){this.$Writing(...e),this.containers.replace(this,"span","div")}write(){const e=this.index,t=this.book;if(e===void 0||t===void 0)return;const a=e.word.trim();if(a==="")return;const s=t.found(a);return h($,{children:[r("span",{className:"pd-results-count",children:t.countOfFound(s,a)}),s.map((i,p)=>this.result(i,p))]})}result(e,t){const a=o(ni);return r(a,{chapter:this.chapter,hit:e},this.book.placeOf(e)??t)}$Define(){super.$Define(),this.classes.add(this,"pd-results")}};n(Ca,"$Results");let Wt=Ca;const Aa=class Aa extends O{write(){}$Define(){super.$Define(),this.classes.add(this,"pd-entry-open")}};n(Aa,"$EntryOpen");let Ht=Aa;const Ma=class Ma extends f{get index(){return this.book?.table?.annotations.expressed(B)}$Result(...e){this.$Writing(...e),this.containers.replace(this,"span","div")}write(){const e=this.book,t=this.$hit,a=this.index;if(e===void 0||t===void 0||a===void 0)return;const s=a.word.trim(),i=e.wordsOf(t),p=e.placeOf(t),D=o(x),C=o(jn),m=o(this.open());return h($,{children:[r("span",{className:"pd-result-title",children:hn(i.title,s)}),t instanceof v&&t.is(H)?r(C,{entry:t}):void 0,r("span",{className:"pd-result-synopsis",children:hn(Zr(i.text,s),s)}),p===void 0?void 0:r(m,{entry:t,children:r(D,{children:p})})]})}open(){return ri}$Define(){super.$Define(),this.classes.add(this,"pd-result")}};n(Ma,"$Result");let Bt=Ma;const Zr=n((d,e)=>{if(d.length<=190)return d;const t=d.toLowerCase().indexOf(e.toLowerCase());if(t<150)return`${d.slice(0,187)}…`;const a=d.lastIndexOf(" ",t-90)+1;return`…${d.slice(a,a+186)}…`},"clipped"),hn=n((d,e)=>{if(e==="")return d;const t=d.toLowerCase(),a=e.toLowerCase(),s=[];let i=0;for(let p=t.indexOf(a);p!==-1;p=t.indexOf(a,i))s.push(d.slice(i,p),r("mark",{children:d.slice(p,p+e.length)},p)),i=p+e.length;return s.push(d.slice(i)),s},"marked"),Ia=class Ia extends O{write(){const[e,t,a]=(this.$entry?.annotations.expressed(H)?.date?.date??"").split("-");if(!(e===void 0||t===void 0||a===void 0))return new Date(Date.UTC(Number(e),Number(t)-1,Number(a.slice(0,2)))).toLocaleString("en-GB",{day:"numeric",month:"short",timeZone:"UTC"})}$Define(){super.$Define(),this.classes.add(this,"pd-entry-day")}};n(Ia,"$EntryDay");let _t=Ia;const Ta=class Ta extends O{write(){return String(this.$section?.text.find(f).filter(e=>T(e)!==void 0).length??0)}$Define(){super.$Define(),this.classes.add(this,"pd-section-count")}};n(Ta,"$SectionCount");let Lt=Ta;const Na=class Na extends u{$isATableOfContents(e){c(e.is(Q),"an index is a table of contents, and this chapter is not one")}};n(Na,"IndexSpecification");let We=Na;ce([l("an index is a table of contents")],We.prototype,"$isATableOfContents");const Wa=class Wa extends u{$isASectionOfTheTable(e){c(e instanceof A&&e.chapter?.is(Q)===!0,"the appendix is a section of the table of contents, and this is not one")}};n(Wa,"AppendixSpecification");let He=Wa;ce([l("the appendix is a section of the table of contents")],He.prototype,"$isASectionOfTheTable");const Ha=class Ha extends u{$isARowThatLeadsSomewhere(e){c(e instanceof f&&T(e)!==void 0,"an entry is a row that leads somewhere, and this is not one")}};n(Ha,"EntrySpecification");let Be=Ha;ce([l("an entry is a row that leads somewhere")],Be.prototype,"$isARowThatLeadsSomewhere");const Ba=class Ba extends g{constructor(){super(...arguments),this.specification=new Le}defines(e){e.classes.add(this,"pa-folded")}erase(e){e.classes.revert(this)}};n(Ba,"$Folded");let Ft=Ba;const _a=class _a extends he{get on(){return this.$foldedWriting!==void 0&&[this.$foldedWriting.$is].flat().includes(this.$annotation)}container(e){return super.container({...e,disabled:this.$foldedWriting===void 0,onClick:n(t=>{t.preventDefault(),this.press()},"onClick")})}press(){const e=this.$foldedWriting;if(e===void 0)return;const t=[e.$is].flat();e.$is=this.on?t.filter(a=>a!==this.$annotation):[this.$annotation,...t]}write(){return r("span",{className:"pd-drawing",dangerouslySetInnerHTML:{__html:Pn}})}$Define(){super.$Define(),this.classes.add(this,"pd-fold-chevron")}};n(_a,"$FoldChevron");let Rt=_a;const La=class La extends X{constructor(){super(...arguments),this.specification=new Fe,this.tree=w.div`
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
        .pd-book:not(.pa-turned) .pd-holds &.pd-tree-folder.pa-open .pa-folded .pd-paragraph.pa-entry { display: none; }
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
    `}get section(){return this.parent}get firstPlace(){return this.section.text.find(f).map(e=>T(e)).find(e=>e!==void 0)?.identifier}get part(){const e=this.firstPlace;return e===void 0?void 0:this.book.chapterAt(e)?.part}get open(){const e=this.book,t=e.open,a=e.$bookmark,s=this.section.mention?.identifier;return a!==void 0&&a.includes("#")&&this.section.text.find(f).some(p=>T(p)?.identifier===a)||t!==void 0&&t.part!==void 0&&t.part.name===this.part?.name||s!==void 0&&e.placeWithin(s)===a}$TreeFolder(...e){this.$Format(...e);const t=this.tree,a=o(Cn),s=o(j),i=o(x);this.style=({className:p,children:D})=>{const C=this.firstPlace,m=[...this.section.classes].includes("pa-open"),y=this.book.open!==void 0,le=this.chapter?.annotations.expressed(B)?.$folded===!0&&!(m&&y),G=r("span",{className:"pd-drawing pd-tree-folder-mark",dangerouslySetInnerHTML:{__html:Ur}});return h(t,{className:`${p??""} pd-tree-folder${m?" pa-open":""}${le?" pa-foldable":""}`.trim(),children:[r(a,{foldedWriting:this.section,annotation:Gt}),C===void 0?G:h(s,{children:[r(i,{children:C}),G]}),D]})}}defines(e){super.defines(e),e.classes.add(this,"pa-tree-folder"),this.open&&e.classes.add(this,"pa-open")}erase(e){super.erase(e),e.classes.revert(this)}};n(La,"$TreeFolder");let _e=La;const Fa=class Fa extends u{$saidOfASectionOrAnEntry(e){c(e instanceof A&&e.chapter?.is(Q)===!0||e.is(ae),"folded is said of a section of a table of contents or of an entry, and this is neither")}};n(Fa,"FoldedSpecification");let Le=Fa;ce([l("folded is said of a section of a table of contents or of an entry")],Le.prototype,"$saidOfASectionOrAnEntry");const Ra=class Ra extends u{$isASectionOfTheTable(e){c(e instanceof A&&e.chapter?.is(Q)===!0,"a tree folder is a section of the table of contents, and this is not one")}};n(Ra,"TreeFolderSpecification");let Fe=Ra;ce([l("a tree folder is a section of the table of contents")],Fe.prototype,"$isASectionOfTheTable");const Ea=class Ea extends f{get cover(){return this.$cover??this.book?.cover}write(){const e=this.cover,t=o(j),a=o(x);return h(t,{children:[r(a,{children:e.mention.identifier}),r("span",{className:"pd-drawing",dangerouslySetInnerHTML:{__html:Pn}}),e.title.name]})}$Define(){super.$Define(),this.classes.add(this,"pd-tree-root")}};n(Ea,"$TreeRoot");let Et=Ea;const T=n(d=>d.annotations.expressed(pn)??d.text.find(O).map(e=>e.annotations.expressed(pn)).find(e=>e!==void 0),"contentOf"),Yr=o(ae),kd=o(B),qr=o(Te),yd=o(Nt),xd=o(Wt),Xr=o(Bt),Qr=o(Ht),Kr=o(_t),Jr=o(Tt),fn=o(r(Jr,{})),Vr=o(Lt);o(Ie);const ei=o(Ft),ti=o(Rt),si=o(_e),ai=o(Et),oi=Yr,gn=qr,ni=Xr,ri=Qr,jn=Kr,ii=Vr,Gt=ei,Cn=ti;var di=Object.defineProperty,pi=Object.getOwnPropertyDescriptor,K=n((d,e,t,a)=>{for(var s=pi(e,t),i=d.length-1,p;i>=0;i--)(p=d[i])&&(s=p(e,t,s)||s);return s&&di(e,t,s),s},"__decorateClass$a");const Hs=n((d,e)=>{const t=new Set(d.text.find(e));return d.text.find(Sn).flatMap(a=>[...t.has(a)?[a]:[],...Hs(a,e)])},"within"),Ga=class Ga extends g{constructor(){super(...arguments),this.specification=new Y}get identifier(){return N.reference(k.copy(this.text))?.identifier??""}get name(){return N.reference(k.copy(this.text))?.name??""}get cover(){const e=this.identifier;return this.chapter?.annotations.find(q).map(t=>t.cover).find(t=>t?.mention?.identifier===e)}defines(e){e.classes.add(this,"pa-design")}erase(e){e.classes.revert(this)}};n(Ga,"$Design");let P=Ga;const Sa=class Sa extends g{constructor(){super(...arguments),this.specification=new Ee}defines(e){e.classes.add(this,"pa-exhibit")}erase(e){e.classes.revert(this)}};n(Sa,"$Exhibit");let Re=Sa;const Ua=class Ua extends g{constructor(){super(...arguments),this.specification=new Ge,this.$number=0,this.span=w.span.attrs({className:"pd-plate"})``}note(){const e=this.span;return h($,{children:[r(e,{children:String(this.$number).padStart(2,"0")}),r("span",{className:"pd-jacket-mini"})]})}defines(e){e.classes.add(this,"pa-plate")}erase(e){e.classes.revert(this)}};n(Ua,"$Plate");let St=Ua;const Za=class Za extends X{constructor(){super(...arguments),this.specification=new Se,this.themeProvider=!0,this.room=w.div`
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
    `}get chapter(){return this.parent}get design(){return this.chapter.annotations.expressed(P)}get plate(){return this.book.chapters.filter(e=>e.is(P)).indexOf(this.chapter)+1}$Room(...e){this.$Format(...e);const t=this.room;this.style=({className:a,children:s})=>{const i=[...this.chapter.classes].includes("pa-open");return V(this.design?.cover,h(t,{className:`${a??""} pd-room${i?" pa-open":""}`.trim(),children:[r("span",{className:"pd-plate",children:String(this.plate).padStart(2,"0")}),s]}))}}defines(e){super.defines(e),e.classes.add(this,"pa-room")}erase(e){super.erase(e),e.classes.revert(this)}};n(Za,"$Room");let Ut=Za;const Ya=class Ya extends f{get references(){const e=this.book?.means?.identifier??"",t=new Map;for(const a of Hs(this.chapter,O)){if(a.parent===this)continue;const s=a.annotations.expressed(ws)?.identifier;if(s===void 0||s.startsWith(e)||t.has(s))continue;const i=k.copy(a.text);t.set(s,N.reference(i)?.name??i.trim())}return[...t]}write(){const e=o(j),t=o(x);return this.references.map(([a,s],i)=>h(e,{children:[r(t,{children:a}),s,r("span",{className:"pd-where",children:a.replace(/^\/dougs-/u,"").replace(/\/#?/u," · ").replace(/ · $/u,"").replace(/-/gu," ")})]},i))}$Define(){super.$Define(),this.classes.add(this,"pd-built-in")}};n(Ya,"$BuiltIn");let Zt=Ya;const qa=class qa extends u{$isAChapter(e){c(e instanceof v,"a design is a chapter, and this is not one")}$namesABook(e){c((e.annotations.expressed(P)?.identifier??"")!=="","a design names the book it is of, and this one names nothing")}$holdsTheCover(e){c(e.annotations.expressed(P)?.cover!==void 0,"a design holds the cover of the book it is of, as a volume, and this one holds none")}$showsItselfAsBuilt(e){c(e instanceof v&&Hs(e,f).some(t=>t.is(Re)),"a design shows itself as built, in a paragraph said to be the exhibit, and this one shows nothing")}};n(qa,"DesignSpecification");let Y=qa;K([l("a design is a chapter")],Y.prototype,"$isAChapter");K([l("a design names the book it is of")],Y.prototype,"$namesABook");K([l("a design holds the cover of the book it is of")],Y.prototype,"$holdsTheCover");K([l("a design shows itself as built")],Y.prototype,"$showsItselfAsBuilt");const Xa=class Xa extends u{$isAParagraphOfADesignHoldingOneImage(e){c(e instanceof f&&e.chapter?.is(P)===!0&&e.text.find(Un).length===1,"an exhibit is a paragraph of a design that holds one image, and this is not one")}};n(Xa,"ExhibitSpecification");let Ee=Xa;K([l("an exhibit is a paragraph of a design that holds one image")],Ee.prototype,"$isAParagraphOfADesignHoldingOneImage");const Qa=class Qa extends u{$saidOfAnEntryLeadingToADesign(e){c(e.is(ae)&&e.annotations.expressed(ae)?.referencedChapter?.is(P)===!0,"a plate is said of an entry that leads to a design, and this is not one")}};n(Qa,"PlateSpecification");let Ge=Qa;K([l("a plate is said of an entry that leads to a design")],Ge.prototype,"$saidOfAnEntryLeadingToADesign");const Ka=class Ka extends u{$isADesign(e){c(e instanceof v&&e.is(P),"a room is a chapter that is a design, and this is not one")}};n(Ka,"RoomSpecification");let Se=Ka;K([l("a room is a chapter that is a design")],Se.prototype,"$isADesign");o(P);o(Re);o(St);o(Ut);o(Zt);var ci=Object.defineProperty,li=Object.getOwnPropertyDescriptor,I=n((d,e,t,a)=>{for(var s=li(e,t),i=d.length-1,p;i>=0;i--)(p=d[i])&&(s=p(e,t,s)||s);return s&&ci(e,t,s),s},"__decorateClass$9");const V=n((d,e,t)=>{const a=d?.annotations.expressed(_)?.painted;return a===void 0?e:r(a,{children:e},t)},"painted"),Ja=class Ja extends z{constructor(){super(...arguments),this.specification=new ne}get name(){return this.chapter?.title?.name??""}get author(){return this.chapter?.annotations.expressed(ys)?.name??""}get illustration(){return this.chapter?.text.find(f).find(e=>e.is(be))}get drawing(){const e=this.illustration?.text.find(gt)[0];return e===void 0?"":k.copy(e.text).trim()}get scheme(){return this.chapter?.annotations.expressed(_)}get window(){return this.chapter?.annotations.expressed(oe)}};n(Ja,"$BookshelfCover");let Ue=Ja;const Va=class Va extends g{constructor(){super(...arguments),this.specification=new qe}defines(e){e.classes.add(this,"pa-illustration")}erase(e){e.classes.revert(this)}};n(Va,"$Illustration");let be=Va;const eo=class eo extends X{constructor(){super(...arguments),this.specification=new $e,this.$ground="",this.$band="",this.$bandInk="",this.$foot="",this.$footInk="",this.$ink="",this.style=w.div.attrs({className:"pd-scheme"})`
        ${e=>e.$scheme}
    `}get colours(){return[this.$ground,this.$band,this.$bandInk,this.$foot,this.$footInk,this.$ink]}get declarations(){return`--ground: ${this.$ground}; --band: ${this.$band}; --band-ink: ${this.$bandInk}; --foot: ${this.$foot}; --foot-ink: ${this.$footInk}; --ink: ${this.$ink};`}get painted(){return this._painted}$Scheme(...e){this.$Format(...e);const t=this.style;this._painted=a=>r(t,{$scheme:this.declarations,...a})}defines(e){e.classes.add(this,"pa-scheme"),e.containers.add(this,this._painted)}erase(e){e.classes.revert(this),e.containers.revert(this)}};n(eo,"$Scheme");let _=eo;const to=class to extends g{constructor(){super(...arguments),this.specification=new me,this.$x="",this.$y=""}get declarations(){return`--window-x: ${this.$x}px; --window-y: ${this.$y}px;`}};n(to,"$Window");let oe=to;const so=class so extends g{constructor(){super(...arguments),this.specification=new ve}get cover(){return this._cover}get jacket(){return this._cover?.annotations.expressed(z)}$Volume(...e){this._cover=e.find(t=>t instanceof v),this.$Annotation(...e.filter(t=>t!==this._cover))}defines(e){e.classes.add(this,"pa-volume")}erase(e){e.classes.revert(this)}};n(so,"$Volume");let q=so;const ao=class ao extends f{get cover(){return this.$cover?.annotations.expressed(z)}$Jacket(...e){this.$Writing(...e),this._painted=t=>{const a=this.cover?.scheme?.painted;return a===void 0?r("div",{...t}):r(a,{...t})},this.containers.add(this,this._painted)}write(){const e=this.cover;if(e===void 0)return;const t=o(j),a=o(de);return h($,{children:[r(t,{children:e.name}),r("span",{className:"pd-drawing",dangerouslySetInnerHTML:{__html:e.drawing}}),h(t,{children:[r(a,{}),e.author]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-jacket")}};n(ao,"$Jacket");let Yt=ao;const oo=class oo extends f{constructor(){super(...arguments),this.unfolded=!1}get filedElsewhere(){return this.$subject!==void 0&&this.$subject!==this.$cover}container(e){return super.container({onMouseOver:n(t=>{t.target instanceof Element&&t.target.closest(".pd-filed")!==null&&this.unfold()},"onMouseOver"),onMouseLeave:n(()=>this.fold(),"onMouseLeave"),...e})}unfold(){this.unfolded=!0}fold(){this.unfolded=!1}write(){const e=this.$cover,t=this.$subject;if(e!==void 0)return h($,{children:[this.filedElsewhere?V(t,r("span",{className:"pd-filed",children:this.mark(t)})):void 0,V(e,r("span",{className:"pd-own",children:this.mark(e)})),h("span",{className:"pd-names",children:[V(e,r("span",{className:"pd-name",children:this.name(e)})),this.filedElsewhere?V(t,r("span",{className:"pd-name pd-under",children:this.name(t)})):void 0]})]})}mark(e){const t=o(ui),a=o(x);return r(t,{cover:e,children:r(a,{children:e.mention.identifier})})}name(e){const t=o(j),a=o(x);return h(t,{children:[r(a,{children:e.mention.identifier}),e.title.name]})}$Define(){super.$Define(),this.classes.add(this,"pd-logo");const e=o(bi);this.annotations.add(this,r(e,{}))}};n(oo,"$Logo");let Ze=oo;const no=class no extends g{constructor(){super(...arguments),this.specification=new Ye}defines(e){e.unfolded&&e.classes.add(this,"pa-unfolded")}erase(e){e.classes.revert(this)}};n(no,"$Unfolded");let qt=no;const ro=class ro extends u{$saidOfALogo(e){c(e instanceof Ze,"unfolded is said of a logo, and this is not one")}};n(ro,"UnfoldedSpecification");let Ye=ro;I([l("unfolded is said of a logo")],Ye.prototype,"$saidOfALogo");const hi=n(d=>{const e=d?.annotations.expressed(z);return{drawing:e?.drawing??"",declarations:`${e?.scheme?.declarations??""} ${e?.window?.declarations??""}`}},"markingOf"),io=class io extends O{constructor(){super(...arguments),this.style=w.span`
        ${e=>e.$vars}
    `}get cover(){return this.$cover?.annotations.expressed(z)}get marking(){return hi(this.$cover)}$Mark(...e){this.$Writing(...e);const t=this.style;this._painted=a=>r(t,{$vars:this.marking.declarations,...a}),this.containers.add(this,this._painted)}write(){return r("span",{className:"pd-drawing",dangerouslySetInnerHTML:{__html:this.marking.drawing}})}$Define(){super.$Define(),this.classes.add(this,"pd-mark")}};n(io,"$Mark");let Xt=io;const po=class po extends Zn{$carriesItsScheme(e){c(e.is(_),"a bookshelf cover carries its scheme, and this one carries none")}$carriesItsWindow(e){c(e.is(oe),"a bookshelf cover carries its window, and this one carries none")}$carriesItsIllustration(e){c(e instanceof v&&e.text.find(f).some(t=>t.is(be)),"a bookshelf cover carries its illustration, and this one carries none")}};n(po,"BookshelfCoverSpecification");let ne=po;I([l("a bookshelf cover carries its scheme")],ne.prototype,"$carriesItsScheme");I([l("a bookshelf cover carries its window")],ne.prototype,"$carriesItsWindow");I([l("a bookshelf cover carries its illustration")],ne.prototype,"$carriesItsIllustration");const co=class co extends u{$saidOfADrawing(e){c(e instanceof f&&e.chapter?.is(z)===!0&&e.text.find(gt).length===1,"an illustration is a paragraph of a cover that holds one drawing, and this is not one")}};n(co,"IllustrationSpecification");let qe=co;I([l("an illustration is a paragraph of a cover that holds one drawing")],qe.prototype,"$saidOfADrawing");const lo=class lo extends u{$isACover(e){c(e instanceof v&&e.is(z),"a cover has a scheme, and this is not a cover")}$givenItsColours(e){const t=e.annotations.expressed(_)?.colours??[];c(t.every(a=>/^#[0-9a-f]{6}$/iu.test(a)),"a scheme is given its six colours as six hex digits each — the ground, the band and its ink, the foot and its ink, and the ink of the drawing — and this one was given something else")}};n(lo,"SchemeSpecification");let $e=lo;I([l("a cover has a scheme")],$e.prototype,"$isACover");I([l("a scheme is given its six colours")],$e.prototype,"$givenItsColours");const ho=class ho extends u{$isACover(e){c(e instanceof v&&e.is(z),"a cover has a window, and this is not a cover")}$givenItsPlace(e){const t=e.annotations.expressed(oe);c(/^-?\d+$/u.test(t?.$x??"")&&/^-?\d+$/u.test(t?.$y??""),"a window is given where it stands on the drawing, two whole numbers, and this one was given something else")}};n(ho,"WindowSpecification");let me=ho;I([l("a cover has a window")],me.prototype,"$isACover");I([l("a window is given where it stands on the drawing")],me.prototype,"$givenItsPlace");const fo=class fo extends u{$saidOfAChapterStandingForABook(e){c(e instanceof v&&(e.is(cn)||e.is(z)||e.is(P)),"a volume is a chapter that stands for another book, a synopsis of it, a cover filed under it or a design of it, and this is none")}$holdsTheCover(e){const t=[e.annotations.expressed(cn)?.means?.identifier,e.annotations.expressed($n)?.means?.identifier,e.annotations.expressed(ys)?.means?.identifier,e.annotations.expressed(P)?.identifier,...[...e.annotations].map(a=>a.means?.identifier)];c(e.annotations.find(q).every(a=>a.cover?.is(z)===!0&&t.includes(a.cover.mention?.identifier)),"a volume holds the cover of a book its chapter stands for or names, the book a synopsis or a design is of, the subject or author a cover is filed under or a book another line of the cover names, and one here holds something else")}};n(fo,"VolumeSpecification");let ve=fo;I([l("a volume is a chapter that stands for another book")],ve.prototype,"$saidOfAChapterStandingForABook");I([l("a volume holds the cover of a book its chapter stands for or names")],ve.prototype,"$holdsTheCover");const An=o(Ue),Bs=o(be),_s=o(_),Ls=o(oe),Qt=o(q),wd=o(Yt),fi=o(Ze),gi=o(qt),Mn=o(Xt),ui=Mn,bi=gi;var $i=Object.defineProperty,mi=Object.getOwnPropertyDescriptor,vi=n((d,e,t,a)=>{for(var s=mi(e,t),i=d.length-1,p;i>=0;i--)(p=d[i])&&(s=p(e,t,s)||s);return s&&$i(e,t,s),s},"__decorateClass$8");const ht=class ht extends Yn{constructor(){super(...arguments),this.specification=new Xe,this.themeProvider=!0,this.style=w.div`
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
    `}get rules(){return this.parts().flat(1/0).filter(e=>typeof e=="string").join("")}get pages(){return this.book.pages}get open(){const e=this.book;return e.open??e.synopsis}$Bound(){const e=this.style,t=this.book;this.style=a=>r(e,{$at:t.means?.identifier,$scheme:t.cover?.annotations.expressed(_)?.declarations,...a}),super.$Bound()}defines(e){for(const a of e.annotations.after(this))a instanceof ht&&e.annotations.express(a,!1);super.defines(e),e.classes.add(this,"pa-layout");const t=this.book.open;t!==void 0&&e.classes.add(this,"pa-turned"),t?.is(M)&&e.classes.add(this,"pa-manual")}erase(e){super.erase(e),e.classes.revert(this)}parts(){return[this.paging(),this.regions(),this.areas(),this.phone()]}paging(){return b`
            .pa-page:not(.pa-open) { display: none; }
        `}regions(){return b`
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
        `}areas(){return b`
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
        `}phone(){return b`
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
        `}};n(ht,"$Layout");let ke=ht;const go=class go extends W{$placesTheSideAndNeverDressesIt(e){for(const t of e.annotations.find(ke)){const a=(t.rules.match(/[^{};]*\.pd-holds\s+[^\s{},][^{};]*\{/gu)??[]).map(s=>s.trim());c(a.length===0,`a layout places the side and never dresses it, what stands in the side being the index's and the folder's, and this one says "${a[0]}"`)}}};n(go,"LayoutSpecification");let Xe=go;vi([l("a layout places the side and never dresses it")],Xe.prototype,"$placesTheSideAndNeverDressesIt");const In=o(ke),ft=class ft extends g{constructor(){super(...arguments),this.specification=new W}defines(e){for(const t of e.annotations.after(this))t instanceof ft&&e.annotations.express(t,!1);e.classes.add(this,"pa-tone")}erase(e){e.classes.revert(this)}};n(ft,"$Tone");let re=ft;const uo=class uo extends re{defines(e){super.defines(e),e.classes.add(this,"pa-dark")}};n(uo,"$Dark");let Kt=uo;const bo=class bo extends re{defines(e){super.defines(e),e.classes.add(this,"pa-light")}};n(bo,"$Light");let Jt=bo;const $o=class $o extends re{defines(e){super.defines(e),e.classes.add(this,"pa-white-over-black")}};n($o,"$WhiteOverBlack");let Vt=$o;const Fs=o(re),Tn=o(Kt),Nn=o(Jt),ki=o(Vt);var yi=Object.defineProperty,xi=Object.getOwnPropertyDescriptor,wi=n((d,e,t,a)=>{for(var s=xi(e,t),i=d.length-1,p;i>=0;i--)(p=d[i])&&(s=p(e,t,s)||s);return s&&yi(e,t,s),s},"__decorateClass$7");const mo=class mo extends O{write(){const e=this.book.body;return`${e.indexOf(this.chapter)+1} of ${e.length}`}$Define(){super.$Define(),this.classes.add(this,"pd-count")}};n(mo,"$Count");let es=mo;const vo=class vo extends g{constructor(){super(...arguments),this.specification=new ye}defines(e){e.classes.add(this,"pa-before")}erase(e){e.classes.revert(this)}};n(vo,"$Before");let ts=vo;const ko=class ko extends g{constructor(){super(...arguments),this.specification=new ye}defines(e){e.classes.add(this,"pa-after")}erase(e){e.classes.revert(this)}};n(ko,"$After");let ss=ko;const yo=class yo extends u{$saidOfAWordOfATurn(e){c(e instanceof O&&e.parent instanceof Qe,"this is said of a word of a turn, and here it is said of something else")}};n(yo,"OfATurnSpecification");let ye=yo;wi([l("this is said of a word of a turn")],ye.prototype,"$saidOfAWordOfATurn");const zi=o(es),Oi=o(ts),Di=o(ss),xo=class xo extends f{get before(){const e=this.book.body;return e[e.indexOf(this.chapter)-1]??this.chapter}get after(){const e=this.book.body;return e[e.indexOf(this.chapter)+1]??this.chapter}write(){const e=o(j),t=o(zi),a=o(Oi),s=o(Di),i=o(this.before===this.chapter?ln:x),p=o(this.after===this.chapter?ln:x);return h($,{children:[h(e,{children:[r(a,{}),r(i,{children:this.before.mention.identifier}),"← ",this.before.title.name]}),r(t,{}),h(e,{children:[r(s,{}),r(p,{children:this.after.mention.identifier}),this.after.title.name," →"]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-turn")}};n(xo,"$Turn");let Qe=xo;const Pi=o(Qe);var ji=Object.defineProperty,Ci=Object.getOwnPropertyDescriptor,J=n((d,e,t,a)=>{for(var s=a>1?void 0:a?Ci(e,t):e,i=d.length-1,p;i>=0;i--)(p=d[i])&&(s=(a?p(e,t,s):p(s))||s);return a&&s&&ji(e,t,s),s},"__decorateClass$6");const wo=class wo extends vn{constructor(){super(...arguments),this.specification=new L}get chapters(){return this.text.find(v).filter(e=>[...e.classes].includes("pd-canonical"))}get laidOutChapters(){return[this.cover,this.synopsis,this.table,...this.chapters]}get pages(){return[this.synopsis,...this.chapters].filter(e=>e!==void 0)}get body(){if(this._body===void 0){const e=this.appendix;this._body=this.chapters.filter(t=>!e.includes(t))}return this._body}get entries(){return this.body}get appendix(){const e=this.table;if(e===void 0)return[];const t=e.text.find(A).filter(a=>a.is(Ie)).flatMap(a=>a.text.find(f).map(s=>T(s)?.identifier));return this.chapters.filter(a=>t.includes(a.mention?.identifier??""))}get open(){return this.$bookmark===void 0?void 0:this.chapterAt(this.$bookmark)}get tones(){return[Tn,Nn,ki]}get topics(){return this.cover?.annotations.find(mn)??[]}get subjectCover(){return this.coverOf(this.subject?.means?.identifier)}get searchHint(){return"a word"}wordsOf(e){const t=(this._words??=new Map).get(e);if(t!==void 0)return t;const a=e instanceof v?e.title?.name??"":"",s=e.text.find(f).filter(p=>![...p.classes].includes("pa-caption")).map(p=>k.copy(p.text).replace(/\s+/gu," ").trim()).join(" "),i={title:a,text:s,lower:`${a} ${s}`.toLowerCase()};return this._words.set(e,i),i}found(e){const t=e.trim().toLowerCase();if(t==="")return[];const a=this.table?.annotations.expressed(B);return a===void 0?[]:a.entries.map(s=>a.chapterOf(s)).filter(s=>s!==void 0&&this.wordsOf(s).lower.includes(t))}countOfFound(e,t){return h($,{children:[r("b",{children:e.length})," ",e.length===1?"entry says":"entries say"," “",t,"”"]})}placeOf(e){return e instanceof v?e.mention?.identifier:void 0}sought(e){}write(){return h($,{children:[r("div",{className:"pd-library",children:this.library()}),r("div",{className:"pd-me",children:this.me()}),r("div",{className:"pd-holds",children:this.holds()}),r("div",{className:"pd-head",children:this.head()}),h("div",{className:"pd-pages",children:[this.aboveThePages(),this.pages.map((e,t)=>{const a=o(e);return r(a,{},t)}),this.belowThePages()]})]})}library(){if(this._logo===void 0)return;const e=o(this._logo);return r(e,{})}me(){const e=o(Mn),t=o(x),a=o(ir),s=this.coverOf(this.author?.means?.identifier);return h($,{children:[this.byline(),s===void 0?void 0:this.painted(s,r(e,{cover:s,children:r(t,{children:s.mention.identifier})})),this.topics.length===0?void 0:r(a,{cover:this.cover})]})}painted(e,t,a){return V(e,t,a)}holds(){const e=o(this.table);return r(e,{})}head(){const e=o(this.cover);return h($,{children:[r(e,{}),r("div",{className:"pd-switches",children:this.switches()})]})}aboveThePages(){}belowThePages(){}chapterAt(e){return(this._chapterByPlace??this.chapterByPlace()).get(e)}chapterByPlace(){const e=new Map;for(const t of this.chapters)for(const a of this.sections(t))a.mention!==void 0&&!e.has(a.mention.identifier)&&e.set(a.mention.identifier,t);for(const t of this.chapters)t.mention!==void 0&&e.set(t.mention.identifier,t);for(const t of this.entries)t.mention!==void 0&&!e.has(t.mention.identifier)&&e.set(t.mention.identifier,t);return e}placeWithin(e){return e.startsWith("#")?`${this.means?.identifier??""}${e}`:e}coverOf(e){if(e!==void 0)return this.means?.identifier===e?this.cover:this.cover?.annotations.find(q).map(t=>t.cover).find(t=>t?.mention?.identifier===e)}byline(){const e=o(rr);return r(e,{chapter:this.cover})}root(){const e=o(ai);return r(e,{cover:this.cover})}switches(){}sections(e){return e.text.find(A).flatMap(t=>[t,...this.sections(t)])}sectionOf(e){const t=this.table;return t===void 0?void 0:this.sections(t).find(a=>a.canonical?.name===e.name)}turn(){this.bookmark!==this.cover&&super.turn()}$Define(){super.$Define();const e=o(In),t=o(Fs);this.annotations.add(this,r(e,{}),r(t,{}))}$Bound(){this._chapterByPlace=this.chapterByPlace();const e=o(si),t=this.table?.annotations.expressed(Q);for(const i of t?.parts??[]){const p=this.sectionOf(i);p===void 0||p.is(_e)||!i.chapters.some(D=>D.is(M))||p.annotations.add(this,r(e,{}))}const a=this.root();a!==void 0&&this.table?.text.add(this,a);const s=o(fi);this._logo=qn.chemical(r(s,{cover:this.cover,subject:this.subjectCover}),this),this.turns(),super.$Bound()}turns(){const e=o(Pi);for(const t of this.body)t.text.add(this,r(e,{}))}};n(wo,"$LibraryBook");let R=wo;J([ks()],R.prototype,"_chapterByPlace",2);J([ks()],R.prototype,"_body",2);J([ks()],R.prototype,"_words",2);const zo=class zo extends Xn{$holdsOnlyChapters(e){c([...e.text].every(t=>t instanceof v),"a book of this library holds only chapters, and this one holds something else")}$placesEveryChapter(e){c(e.text.find(v).every(t=>e.laidOutChapters.includes(t)),"a book of this library has a place for every chapter it holds, and this one holds a chapter it places nowhere")}$onlyAChapterAppends(e){c(e.text.find(v).every(t=>e.chapters.includes(t)||!t.is(kn)),"only an ordinary chapter files a file, and here a cover, a synopsis or a table of contents files one")}$listsEachManualPart(e){const a=(e.table?.annotations.expressed(Q)?.parts??[]).find(s=>s.chapters.some(i=>i.is(M))&&e.sectionOf(s)===void 0);c(a===void 0,`a part read as a manual is listed under a section headed with its name, and "${a?.name}" has none`)}};n(zo,"LibraryBookSpecification");let L=zo;J([l("a book of this library holds only chapters")],L.prototype,"$holdsOnlyChapters",1);J([l("a book of this library has a place for every chapter it holds")],L.prototype,"$placesEveryChapter",1);J([l("only an ordinary chapter files a file")],L.prototype,"$onlyAChapterAppends",1);J([l("a part read as a manual is listed under a section headed with its name")],L.prototype,"$listsEachManualPart",1);const Wn=o(R);o(Wn,yn)(sr);o(Wn,Fs)(Tn);const Oo=class Oo extends De{constructor(){super(...arguments),this.prose="'Source Serif 4', Georgia, serif",this.ink="#343c4a",this.heading="#1a1f36",this.soft="#727d8c",this.faint="#9ea8b5",this.line="#e4e9f2",this.paper="#ffffff",this.side="#f8f9fb",this.holdsColumn="240px",this.barHeight="52px",this.shadow="0 1px 2px rgba(43, 54, 60, 0.05), 0 6px 18px rgba(43, 54, 60, 0.05)",this.lift="0 2px 4px rgba(43, 54, 60, 0.06), 0 14px 32px rgba(43, 54, 60, 0.10)",this.barLight="#fcfcfd",this.barMid="#f8f9fc",this.barDeep="#f2f4f9",this.barShadow="0 1px 0 rgba(43, 54, 60, 0.05)",this.sideLight="#fafbfc",this.sideDeep="#f2f4f8",this.hairline="1px",this.stroke="2px"}parts(){return[...super.parts(),this.bands(),this.guide(),this.order(),this.surface(),this.entries(),this.small()]}bands(){return b`
            .pd-book .pd-library { position: relative; background: linear-gradient(180deg, ${({theme:e})=>e.barLight} 0%, ${({theme:e})=>e.barMid} 60%, ${({theme:e})=>e.barDeep} 100%); border-block-end: thin solid ${({theme:e})=>e.line}; box-shadow: ${({theme:e})=>e.barShadow}; }
            .pd-book .pd-library::after { content: ''; position: absolute; left: 0; right: 0; bottom: calc(-1 * ${({theme:e})=>e.hairline}); height: ${({theme:e})=>e.stroke}; background: linear-gradient(90deg, var(--band) 0 40%, var(--ground) 40% 70%, var(--foot) 70%); opacity: 0.75; }
        `}guide(){return b`
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
        `}order(){return b`
            .pd-book .pd-holds .pd-paragraph.pd-entry-order { position: absolute; top: calc(${({theme:e})=>e.space} * 0.75); right: calc(${({theme:e})=>e.space} * 0.583); z-index: 1; margin: 0; }
            .pd-book .pd-holds .pd-entry-order .pd-word.pd-switch { padding: 0; border: 0; border-radius: 0; background: none; font-family: ${({theme:e})=>e.font}; font-size: calc(0.7143 * ${({theme:e})=>e.size}); font-weight: 500; line-height: 1.4; letter-spacing: 0.02em; color: ${({theme:e})=>e.faint}; cursor: pointer; transition: color ${({theme:e})=>e.beat} ease; }
            .pd-book .pd-holds .pd-entry-order .pd-word.pd-switch::before { content: '↓ '; }
            .pd-book .pd-holds .pd-entry-order .pd-word.pd-switch:hover { color: ${({theme:e})=>e.ink}; }
            .pd-book .pd-holds .pd-entry-order .pd-word.pd-switch[aria-pressed='true'] { background: none; border: 0; color: var(--foot-ink); }
            .pd-book .pd-holds .pd-entry-order .pd-word.pd-switch[aria-pressed='true']::before { content: '↑ '; }
        `}surface(){return b`
            .pd-book .pd-pages { display: flex; flex-direction: column; padding: ${({theme:e})=>e.space} calc(${({theme:e})=>e.space} * 1.6667) calc(${({theme:e})=>e.space} * 5); background: linear-gradient(180deg, color-mix(in oklab, var(--foot) 12%, white), transparent) top / 100% calc(${({theme:e})=>e.space} * 2) no-repeat, linear-gradient(90deg, color-mix(in oklab, var(--foot) 8%, white), transparent) left / calc(${({theme:e})=>e.space} * 1.6667) 100% no-repeat, ${({theme:e})=>e.paper}; }
        `}entries(){return b`
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
        `}small(){return b`
            @media (max-width: ${({theme:e})=>e.narrow}) {
                .pd-book .pd-holds, .pd-book .pd-library { border-inline-end: none; }
                .pd-book .pd-holds .pd-paragraph.pd-entry-order, .pd-book .pd-holds .pa-entry .pd-word.pd-entry-day { display: none; }
                .pd-book .pd-pages { padding: 0 calc(${({theme:e})=>e.space} * 0.8333) calc(${({theme:e})=>e.space} * 2.5); }
                .pd-book .pd-pages .pd-chapter.pa-page { padding: calc(${({theme:e})=>e.space} * 1.1667) 0 calc(${({theme:e})=>e.space} * 1.3333); }
                .pd-book .pd-pages .pa-page .pd-word.pd-entry-number { position: static; display: block; margin-block-end: calc(${({theme:e})=>e.space} / 6); font-size: calc(2 * ${({theme:e})=>e.size}); }
                .pd-book .pd-pages .pa-page .pd-word.pd-date { position: static; width: auto; margin-block-end: calc(${({theme:e})=>e.space} * 0.4167); }
            }
        `}};n(Oo,"$Typeset");let as=Oo;const Ai=o(as);var Mi=Object.defineProperty,Ii=Object.getOwnPropertyDescriptor,Hn=n((d,e,t,a)=>{for(var s=Ii(e,t),i=d.length-1,p;i>=0;i--)(p=d[i])&&(s=p(e,t,s)||s);return s&&Mi(e,t,s),s},"__decorateClass$5");const S=n(d=>d.annotations.expressed(H)?.date?.date??"","dayOf"),un=n(d=>{const[e,t]=S(d).split("-");return e===void 0||t===void 0?"":new Date(Date.UTC(Number(e),Number(t)-1,1)).toLocaleString("en-GB",{month:"long",year:"numeric",timeZone:"UTC"})},"monthOf"),Do=class Do extends g{constructor(){super(...arguments),this.specification=new W}defines(e){e.classes.add(this,"pa-newest-first")}erase(e){e.classes.revert(this)}};n(Do,"$NewestFirst");let Ke=Do;const Ti=o(Ke),Bn=Ti,Po=class Po extends f{write(){const e=o(wn);return r(e,{annotation:Bn,children:"newest first"})}$Define(){super.$Define(),this.classes.add(this,"pd-entry-order")}};n(Po,"$EntryOrder");let os=Po;const jo=class jo extends O{write(){return String(this.book.entries.indexOf(this.chapter)+1)}$Define(){super.$Define(),this.classes.add(this,"pd-entry-number")}};n(jo,"$EntryNumber");let ns=jo;const Co=class Co extends ke{paging(){return b``}};n(Co,"$JournalLayout");let rs=Co;const Ni=o(os),Wi=o(ns),Hi=o(rs),Bi=Ni,_i=Wi,Ao=class Ao extends R{constructor(){super(...arguments),this.specification=new xe}get latest(){return[...this.entries].sort((e,t)=>S(t).localeCompare(S(e)))[0]}get pages(){const e=[...this.entries].sort((t,a)=>S(t).localeCompare(S(a)));return this.is(Ke)?e.reverse():e}get open(){return super.open??this.latest}head(){}switches(){}turns(){}$Bound(){const e=o(_i);for(const s of this.entries)s.text.add(this,r(e,{}));const t=this.table?.annotations.expressed(B);t!==void 0&&(t.$dated=!0);const a=o(Bi);this.table?.text.add(this,r(a,{})),this.$is=[Bn],super.$Bound()}};n(Ao,"$Journal");let is=Ao;const Mo=class Mo extends L{$everyEntryIsDated(e){const t=e.entries.find(a=>!a.is(H));c(t===void 0,`every entry of a journal is dated, and "${t?.title?.name}" is not`)}$everyEntrySaysItsMonth(e){const t=e.entries.find(a=>a.part?.name!==un(a));c(t===void 0,t===void 0?"":`every entry of a journal says the month of its date as its part, and "${t.title?.name}" says "${t.part?.name??"none"}" for ${un(t)}`)}};n(Mo,"JournalSpecification");let xe=Mo;Hn([l("every entry of a journal is dated")],xe.prototype,"$everyEntryIsDated");Hn([l("every entry of a journal says the month of its date as its part")],xe.prototype,"$everyEntrySaysItsMonth");const Rs=o(is);o(Rs,yn)(Ai);o(Rs,Fs)(Nn);o(Rs,In)(Hi);var Li=Object.defineProperty,Fi=Object.getOwnPropertyDescriptor,Ri=n((d,e,t,a)=>{for(var s=Fi(e,t),i=d.length-1,p;i>=0;i--)(p=d[i])&&(s=p(e,t,s)||s);return s&&Li(e,t,s),s},"__decorateClass$4");const Io=class Io extends g{constructor(){super(...arguments),this.specification=new Je}get section(){return this.parent instanceof A?this.parent:void 0}get headings(){const e=this.section;return e===void 0?[]:e.text.find(xn).filter(t=>t!==e.canonical)}defines(e){e.classes.add(this,"pa-opaque")}erase(e){e.classes.revert(this)}$Bound(){for(const e of this.headings){const t=e.annotations.expressed(zs),a=e.annotations.expressed(Qn);for(const s of[t,a])s!==void 0&&e.annotations.remove(e,s)}super.$Bound()}};n(Io,"$Opaque");let ds=Io;const To=class To extends u{$saidOfASection(e){c(e instanceof A,"opaque is said of a section, and this is not one")}};n(To,"OpaqueSpecification");let Je=To;Ri([l("opaque is said of a section")],Je.prototype,"$saidOfASection");const Ei=o(ds);var Gi=Object.defineProperty,Si=Object.getOwnPropertyDescriptor,F=n((d,e,t,a)=>{for(var s=Si(e,t),i=d.length-1,p;i>=0;i--)(p=d[i])&&(s=p(e,t,s)||s);return s&&Gi(e,t,s),s},"__decorateClass$3");const No=class No extends xn{$Define(){super.$Define(),this.classes.add(this,"pd-speaker")}$Bound(){super.$Bound();const e=this.annotations.expressed(zs);e!==void 0&&this.annotations.remove(this,e)}};n(No,"$Speaker");let we=No;const Wo=class Wo extends xs{$Define(){super.$Define(),this.classes.add(this,"pd-time")}};n(Wo,"$Time");let ps=Wo;const Ho=class Ho extends Kn{$Define(){super.$Define(),this.classes.add(this,"pd-participant")}};n(Ho,"$Participant");let Ve=Ho;const Bo=class Bo extends f{get participants(){return this.text.find(Ve)}write(){const e=this.participants;return e.flatMap((t,a)=>{const s=o(t);return[a===0?"":a===e.length-1?" and ":", ",r(s,{},a)]})}$Define(){super.$Define(),this.classes.add(this,"pd-participants")}};n(Bo,"$Participants");let et=Bo;const zd=o(we),Ui=o(ps),Od=o(Ve),Dd=o(et),Zi=Ui,Yi=n(d=>{const e=new Date(d);if(Number.isNaN(e.getTime()))return d;const t=e.toLocaleDateString("en-GB",{day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return`${e.toLocaleTimeString("en-GB",{hour:"2-digit",minute:"2-digit",timeZone:"UTC"})} UTC, ${t}`},"shownTime"),_o=class _o extends A{constructor(){super(...arguments),this.specification=new ze,this.$at=void 0}get when(){return this.$at??""}get speaker(){return this.text.find(we)[0]}write(){const e=o(Zi),t=this.speaker,a=t===void 0?void 0:o(t),s=[...this.text].filter(i=>i!==t);return h($,{children:[a===void 0?void 0:r(a,{}),r(e,{children:`[${Yi(this.when)}](${this.when})`}),r("div",{className:"pd-said",children:s.map((i,p)=>{const D=o(i);return r(D,{},p)})})]})}$Define(){super.$Define(),this.classes.add(this,"pd-message");const e=o(Ei);if(this.annotations.add(this,r(e,{})),this.when==="")return;const t=this.speaker,a=t===void 0?"":N.reference(k.copy(t.text))?.name??k.copy(t.text),s=o(Jn);this.annotations.add(this,r(s,{children:Vn.slug(`${this.when.replace(/Z$/u,"")} ${a}`)}))}$Bound(){const e=this.book?.author?.means?.identifier;if(e!==void 0&&this.speaker?.means?.identifier===e){const t=o(Xi);this.annotations.add(this,r(t,{}))}super.$Bound()}};n(_o,"$Message");let E=_o;const Lo=class Lo extends g{constructor(){super(...arguments),this.specification=new tt}defines(e){e.classes.add(this,"pa-mine")}erase(e){e.classes.revert(this)}};n(Lo,"$Mine");let cs=Lo;const Fo=class Fo extends u{$saidOfAMessage(e){c(e instanceof E,"mine is said of a message, and this is not one")}};n(Fo,"MineSpecification");let tt=Fo;F([l("mine is said of a message")],tt.prototype,"$saidOfAMessage");const qi=o(cs),Xi=qi,Ro=class Ro extends g{constructor(){super(...arguments),this.specification=new ot}defines(e){e.classes.add(this,"pa-quoted")}erase(e){e.classes.revert(this)}};n(Ro,"$Quoted");let ls=Ro;const Eo=class Eo extends g{constructor(){super(...arguments),this.specification=new nt}defines(e){e.classes.add(this,"pa-verbatim")}erase(e){e.classes.revert(this)}};n(Eo,"$Verbatim");let hs=Eo;const Go=class Go extends g{constructor(){super(...arguments),this.specification=new Oe,this.$from=void 0,this.$to=void 0}get from(){return this.$from??""}get to(){return this.$to??""}defines(e){e.classes.add(this,"pa-period")}erase(e){e.classes.revert(this)}};n(Go,"$Period");let st=Go;const So=class So extends g{constructor(){super(...arguments),this.specification=new Oe,this.$shown=void 0,this.$all=void 0}get shown(){return Number(this.$shown??0)}get all(){return Number(this.$all??0)}get aside(){return this.all-this.shown}defines(e){e.classes.add(this,"pa-messages")}erase(e){e.classes.revert(this)}};n(So,"$Messages");let at=So;const Uo=class Uo extends er{$saysWhen(e){c(e.when!==""&&!Number.isNaN(Date.parse(e.when)),"a message says when it was said, as an instant the machine can read, and this one does not")}$headedByItsSpeaker(e){c(e.canonical instanceof we,"a message is headed by its speaker, a heading that refers to them, and this one is not")}};n(Uo,"MessageSpecification");let ze=Uo;F([l("a message says when it was said")],ze.prototype,"$saysWhen");F([l("a message is headed by its speaker")],ze.prototype,"$headedByItsSpeaker");const Zo=class Zo extends u{$saidOfAParagraph(e){c(e instanceof f,"this is said of a paragraph, and this is not one")}};n(Zo,"OfAParagraphSpecification");let ot=Zo;F([l("this is said of a paragraph")],ot.prototype,"$saidOfAParagraph");const Yo=class Yo extends u{$saidOfACover(e){c(e instanceof v&&e.is(z),"this is said of a cover, and this is not one")}};n(Yo,"OfACoverSpecification");let Oe=Yo;F([l("this is said of a cover")],Oe.prototype,"$saidOfACover");const qo=class qo extends u{$saidOfAWord(e){c(e instanceof O,"verbatim is said of a word, and this is not one")}};n(qo,"VerbatimSpecification");let nt=qo;F([l("verbatim is said of a word")],nt.prototype,"$saidOfAWord");const Pd=o(E),jd=o(ls),Cd=o(hs),Ad=o(st),Md=o(at),bn=n(d=>d===void 0||d===""?"":new Date(d).toLocaleDateString("en-GB",{day:"numeric",month:"long",year:"numeric",timeZone:"UTC"}),"dayWords"),Xo=class Xo extends f{write(){const e=this.book,t=e.messageCount?.shown??e.messages.length,a=new Set(e.messages.map(p=>p.when.slice(0,10))).size,s=bn(e.period?.from),i=bn(e.period?.to);return h($,{children:[h("span",{className:"pd-tally-count",children:[r("b",{children:t}),a===1?" messages in ":" messages over ",r("b",{children:a}),a===1?" day":" days"]}),r("span",{className:"pd-tally-period",children:s===i?s:`${s} to ${i}`})]})}$Define(){super.$Define(),this.classes.add(this,"pd-tally")}};n(Xo,"$Tally");let fs=Xo;const Qo=class Qo extends O{write(){return String(this.$entry?.text.find(E).length??0)}$Define(){super.$Define(),this.classes.add(this,"pd-day-count")}};n(Qo,"$DayCount");let gs=Qo;const Qi=o(fs),Ki=o(gs),Ji=Qi,Vi=Ki,Ko=class Ko extends R{constructor(){super(...arguments),this.specification=new ie}get participants(){return this.cover?.text.find(et)[0]?.participants??[]}get period(){return this.cover?.annotations.expressed(st)}get messageCount(){return this.cover?.annotations.expressed(at)}get messages(){return this.body.flatMap(e=>e.text.find(E))}get pages(){return[...[...this.body].sort((t,a)=>S(t).localeCompare(S(a))),...this.appendix]}get open(){return super.open??this.pages[0]}head(){const e=o(Ji);return h($,{children:[super.head(),r(e,{chapter:this.cover})]})}$Bound(){const e=o(Vi);for(const t of this.table?.annotations.expressed(B)?.entries??[]){const a=T(t)?.identifier,s=a===void 0?void 0:this.chapterAt(a);s===void 0||!this.body.includes(s)||t.text.add(this,r(e,{entry:s}))}super.$Bound()}};n(Ko,"$Conversation");let us=Ko;const Jo=class Jo extends L{$saysItsParticipantsPeriodAndCount(e){c(e.participants.length>0&&e.period!==void 0&&e.messageCount!==void 0,"a conversation says its participants, its period and how many messages it holds, on its cover, and this one says less")}$everyMessageIsAddressed(e){const t=e.messages.find(a=>a.annotations.expressed(zs)===void 0);c(t===void 0,`every message of a conversation is addressed by its time, and the one at "${t?.when}" is not`)}$everyChapterHoldsAMessage(e){const t=e.body.find(a=>a.text.find(E).length===0);c(t===void 0,`every chapter of a conversation holds a message, and "${t?.title?.name}" holds none`)}};n(Jo,"ConversationSpecification");let ie=Jo;F([l("a conversation says its participants, its period and how many messages it holds")],ie.prototype,"$saysItsParticipantsPeriodAndCount");F([l("every message of a conversation is addressed by its time")],ie.prototype,"$everyMessageIsAddressed");F([l("every chapter of a conversation holds a message")],ie.prototype,"$everyChapterHoldsAMessage");o(us);var ed=Object.defineProperty,td=Object.getOwnPropertyDescriptor,sd=n((d,e,t,a)=>{for(var s=td(e,t),i=d.length-1,p;i>=0;i--)(p=d[i])&&(s=p(e,t,s)||s);return s&&ed(e,t,s),s},"__decorateClass$2");const Vo=class Vo extends g{constructor(){super(...arguments),this.specification=new it}get name(){return N.reference(k.copy(this.text))?.name??""}get means(){return this.annotations.expressed(ws)}$Define(){super.$Define();const e=N.reference(k.copy(this.text));if(e===void 0)return;const t=o(x);this.annotations.add(this,r(t,{children:e.identifier}))}write(){return this.name}};n(Vo,"$Project");let rt=Vo;const en=class en extends u{$saidOfACover(e){c(e instanceof v&&e.is(z),"a project is said of a cover, and this is not one")}};n(en,"ProjectSpecification");let it=en;sd([l("a project is said of a cover")],it.prototype,"$saidOfACover");const tn=class tn extends f{get cover(){return this.$cover??this.book?.cover}get project(){return this.cover?.annotations.expressed(rt)}write(){const e=this.project,t=o(j),a=o(de),s=o(x);return h($,{children:[h(t,{children:[r(a,{}),"project"]}),h(t,{children:[r(s,{children:e.means.identifier}),e.name]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-project-line")}};n(tn,"$ProjectLine");let bs=tn;const Id=o(rt),Td=o(bs),sn=class sn extends Ue{};n(sn,"$JournalCover");let $s=sn;const ad=o($s),_n=n(()=>h(Os,{children:[r(An,{}),r(_s,{ground:"#eef5f6",band:"#c3e3e6",bandInk:"#1c565c",foot:"#8db9bd",footInk:"#153e43",ink:"#1f5a60"}),r(Ls,{x:"-46",y:"-13"}),r(Ds,{children:"[Dougs Library](/dougs-library/)"}),r(Ps,{children:"[Doug](/dougs-story/)"}),r(js,{children:"[Library](/dougs-library/)"}),r(Cs,{children:"[The Library](/dougs-library/)"}),h(As,{children:[r(Bs,{}),r(Ms,{children:`<svg viewBox="0 0 64 64" class="pd-illustration"><path class="light" d="M9 7h46v50H9z"/><path d="M9 7h46v50H9zM9 24h46M9 41h46"/><path class="fill" d="M13 11h5v13h-5zM20 9h4v15h-4zM26 13h6v11h-6zM34 10h4v14h-4zM40 14h6v10h-6z"/><path d="M48 24l4-12 3 1-4 11z"/><path class="fill" d="M13 28h4v13h-4zM19 30h7v11h-7zM28 27h4v14h-4zM34 31h5v10h-5zM41 28h6v13h-6zM49 29h3v12h-3z"/><path class="fill" d="M13 46h6v11h-6zM21 44h4v13h-4zM27 47h8v10h-8zM37 45h4v12h-4zM43 48h6v9h-6z"/><path d="M50 57l3-11 3 1-3 10z"/></svg>
`})]})]}),"SubjectCover$1"),od=n(()=>h(Os,{children:[r(ad,{}),r(tr,{}),r(Qt,{children:_n()}),r(_s,{ground:"#f5eedf",band:"#d9c3a3",bandInk:"#4a3626",foot:"#a3b6cc",footInk:"#2a4262",ink:"#2f4a6a"}),r(Ls,{x:"-54",y:"-33"}),r(Ds,{children:"[Dougs Story](/dougs-story/)"}),r(Ps,{children:"[Doug](/dougs-story/)"}),r(js,{children:"[Library](/dougs-library/)"}),r(Cs,{children:"[The Librarian](/dougs-story/)"}),h(As,{children:[r(Bs,{}),r(Ms,{children:`<svg viewBox="0 0 64 64" class="pd-illustration"><path class="light" d="M8 13h23v38H8zM33 13h23v38H33z"/><path d="M8 13h23v38H8zM33 13h23v38H33z"/><path d="M13 21h13M13 27h13M13 33h9M38 21h13M38 27h13M38 33h13M38 39h8"/><path class="fill" d="M15 55 45 25l4 4-30 30-6 2z"/><path d="M15 55 45 25l4 4-30 30-6 2zM43 27l4 4M17 53l2 2"/></svg>
`})]})]}),"StoryCover"),Nd=n(()=>h(Os,{children:[r(An,{}),r(Qt,{children:_n()}),r(Qt,{children:od()}),r(_s,{ground:"#eff1f6",band:"#c0c9df",bandInk:"#2a3a63",foot:"#8e9fc8",footInk:"#1f2d50",ink:"#2a3a63"}),r(Ls,{x:"-36",y:"-26"}),r(Ds,{children:"[Dougs Claude](/dougs-claude/)"}),r(Ps,{children:"[Doug](/dougs-story/)"}),r(js,{children:"[Library](/dougs-library/)"}),r(Cs,{children:"[Claude](/dougs-claude/)"}),h(As,{children:[r(Bs,{}),r(Ms,{children:`<svg viewBox="0 0 64 64" class="pd-illustration"><path class="light" d="M8 30h48v27H8z"/><path d="M8 30h48v27H8zM8 44h48"/><path class="fill" d="M12 33h5v9h-5zM19 31h4v11h-4zM25 34h7v8h-7zM34 32h4v10h-4zM40 35h8v7h-8z"/><path class="fill" d="M12 47h6v8h-6zM20 48h4v7h-4zM26 46h9v9h-9zM37 49h5v6h-5zM44 47h7v8h-7z"/><path class="light" d="M28 6h28v16H40l-6 5v-5h-6z"/><path d="M28 6h28v16H40l-6 5v-5h-6z"/><path d="M33 11h18M33 16h12"/></svg>
`})]})]}),"SubjectCover");var nd=Object.defineProperty,rd=Object.getOwnPropertyDescriptor,id=n((d,e,t,a)=>{for(var s=rd(e,t),i=d.length-1,p;i>=0;i--)(p=d[i])&&(s=p(e,t,s)||s);return s&&nd(e,t,s),s},"__decorateClass$1");const an=class an extends g{constructor(){super(...arguments),this.specification=new pt}get name(){return N.reference(k.copy(this.text))?.name??""}get means(){return this.annotations.expressed(ws)}$Define(){super.$Define();const e=N.reference(k.copy(this.text));if(e===void 0)return;const t=o(x);this.annotations.add(this,r(t,{children:e.identifier}))}write(){return this.name}};n(an,"$Account");let dt=an;const on=class on extends u{$saidOfACover(e){c(e instanceof v&&e.is(z),"an account is said of a cover, and this is not one")}};n(on,"AccountSpecification");let pt=on;id([l("an account is said of a cover")],pt.prototype,"$saidOfACover");const nn=class nn extends f{get cover(){return this.$cover??this.book?.cover}get account(){return this.cover?.annotations.expressed(dt)}write(){const e=this.account,t=o(j),a=o(de),s=o(x);return h($,{children:[h(t,{children:[r(a,{}),"account"]}),h(t,{children:[r(s,{children:e.means.identifier}),e.name]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-account-line")}};n(nn,"$AccountLine");let ms=nn;const Wd=o(dt),Hd=o(ms);var dd=Object.defineProperty,pd=Object.getOwnPropertyDescriptor,cd=n((d,e,t,a)=>{for(var s=pd(e,t),i=d.length-1,p;i>=0;i--)(p=d[i])&&(s=p(e,t,s)||s);return s&&dd(e,t,s),s},"__decorateClass");const rn=class rn extends g{constructor(){super(...arguments),this.specification=new ct}get uuid(){return k.copy(this.text).trim()}write(){return null}};n(rn,"$Origin");let vs=rn;const dn=class dn extends u{$saidOfACoverOrAMessage(e){c(e instanceof v&&e.is(z)||e instanceof E,"an origin is said of a cover or a message, and this is neither")}};n(dn,"OriginSpecification");let ct=dn;cd([l("an origin is said of a cover or a message")],ct.prototype,"$saidOfACoverOrAMessage");const Bd=o(vs);export{De as $,Wd as A,An as B,Nd as C,vd as D,Kr as E,ei as F,md as G,$d as H,kd as I,wd as J,rr as K,Nn as L,Md as M,bd as N,Bd as O,Dd as P,jd as Q,wn as R,yd as S,Fs as T,W as U,Qt as V,Ls as W,ad as X,Ht as Y,hi as Z,vs as _,In as a,Ue as a0,Dn as a1,Ir as a2,Ie as a3,jt as a4,ke as a5,ue as a6,M as a7,xd as a8,as as a9,E as aa,cs as ab,he as ac,Xt as ad,us as ae,dt as af,Td as ag,Hd as ah,R as b,B as c,S as d,T as e,q as f,at as g,rt as h,si as i,Qr as j,Wt as k,Bt as l,hn as m,Zr as n,un as o,L as p,H as q,od as r,_s as s,Od as t,Ad as u,Id as v,Bs as w,Pd as x,zd as y,Cd as z};
