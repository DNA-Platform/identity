var $i=Object.defineProperty;var s=(c,e)=>$i(c,"name",{value:e,configurable:!0});import{jsxs as d,Fragment as v,jsx as n}from"react/jsx-runtime";import{$ as r,selection as z,$check as l,$Chemical as xi,inert as Vt,next as ji}from"@dna-platform/chemistry";import{$Theme as Ci,specify as f,$Annotation as x,$Paragraph as g,$Author as Ta,Word as A,Reference as O,$Subject as Vs,$Topic as Ys,AnnotationSpecification as j,$Word as M,$Book as Zs,$Format as pe,html as T,$Chapter as C,binder as G,$Svg as Yt,Code as Ti,$Section as W,$Append as se,$Date as Oa,$Content as Fs,$Parenthetical as Oi,$TableOfContents as ne,$Composition as zi,$Image as Pi,$Reference as za,$Cover as N,$Synopsis as Je,CoverSpecification as Ai,$Paginated as Di,Self as Hs,Theme as Pa,reflection as Ri,BookSpecification as Si,$Code as Qs,identifier as Xs,$Heading as Ks,$Referent as Zt,$SelfReference as Mi,$Means as Ii,Referent as Wi,SectionSpecification as Ni,Chapter as R,Title as S,Author as Qt,Subject as Xt,About as Aa,Paragraph as h,Svg as Kt,Autobiography as Li,Synopsis as Bi,Parenthetical as on,Means as u,TableOfContents as Ei,Section as k,Heading as y,Content as I,Append as D}from"@dna-platform/public";import{css as b}from"styled-components";const _a=class _a extends Ci{constructor(){super(...arguments),this.font="'Inter', system-ui, sans-serif",this.prose="'Inter', system-ui, sans-serif",this.mono="'JetBrains Mono', ui-monospace, monospace",this.size="0.875rem",this.leading="1.6",this.measure="44rem",this.spreadColumn="15.5rem",this.space="1.5rem",this.holdsColumn="240px",this.barHeight="50px",this.beat="320ms",this.narrow="48rem",this.phoneWidth="390px",this.colour="#4e9eb9",this.accent="#166178",this.bar="#0c1b1f",this.barInk="#ffffff",this.barDim="#a9bcc1",this.barOn="rgba(255, 255, 255, 0.11)",this.barLine="#1d3339",this.mark="#c8f4fb",this.side="#f8f9fb",this.sideInk="#10252c",this.sideDim="#727d8c",this.sideOn="#ffffff",this.sideLine="#e4e9f2",this.night="#0c1b1f",this.deep="#14323c",this.blue="#166178",this.sea="#4e9eb9",this.sky="#8fc8dc",this.opal="#c8f4fb",this.pale="#e3f5fa",this.mist="#f1f7f9",this.white="#ffffff",this.ink="#10252c",this.soft="#727d8c",this.line="#e4e9f2",this.me="#e8590c",this.wash="linear-gradient(105deg, #e2f6fb 0%, #ecf0fd 52%, #fae9f4 100%)",this.serif="'Source Serif 4', Georgia, serif",this.between="'Source Sans 3', 'Inter', system-ui, sans-serif",this.bookPaper="#fbf9f3",this.bookInk="#29251d",this.heading="#10252c",this.capital="#166178",this.lit="#166178",this.faint="#9ea8b5",this.paper="#ffffff",this.panel="#f1f7f9",this.rule="#e4e9f2",this.edge="transparent",this.tint="rgba(11, 11, 11, 0.05)",this.dusk="#14323c",this.glow="#cfe6e3",this.dim="#4f7672",this.keyword="#8ad7ff",this.string="#ffd48a",this.type="#9be3d6",this.comment="#5f8a86",this.haze="#a9bcc1",this.glass="rgba(255, 255, 255, 0.62)",this.binding="linear-gradient(160deg, #16303a, #0c1b1f)",this.spine="inset 5px 0 0 rgba(0, 0, 0, 0.14), inset 6px 0 0 rgba(255, 255, 255, 0.12), 0 10px 20px -10px rgba(0, 0, 0, 0.45)",this.shadow="0 0.75rem 1.4rem -0.9rem rgba(12, 27, 31, 0.55)",this.volume="11.5rem",this.cover="8.25rem",this.card="18rem",this.barLight="#ffffff",this.barMid="#f1f7f9",this.barDeep="#f5f7fa",this.barShadow="none",this.sideLight="#ffffff",this.sideDeep="#f5f7fa",this.codeGround="#f1f7f9",this.hairline="1px",this.stroke="2px",this.rise="-1px",this.gloss="none",this.ring="0 0 0 2px #c8f4fb",this.decisionShadow="none",this.photo="7rem",this.radius="0.375rem",this.barTint="#ffffff",this.skyInk="#166178",this.lift="inset 5px 0 0 rgba(0, 0, 0, 0.14), inset 6px 0 0 rgba(255, 255, 255, 0.12), 0 14px 24px -12px rgba(0, 0, 0, 0.5)",this.openSpine="inset 7px 0 0 rgba(0, 0, 0, 0.14), inset 8px 0 0 rgba(255, 255, 255, 0.12), 0 12px 22px -14px rgba(0, 0, 0, 0.5)",this.sans="'Inter', system-ui, sans-serif",this.muted="#516770",this.bubble="rgba(16, 37, 44, 0.05)",this.shade="rgba(16, 37, 44, 0.03)",this.pill="#166178",this.column="48rem",this.style=z.div`${this.parts()}`}parts(){return[this.page(),this.writing(),this.links(),this.figures(),this.listings(),this.switches(),this.turns(),this.illustrations(),this.marks(),this.library(),this.head(),this.holds(),this.context(),this.tones()]}page(){return b`
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
        `}};s(_a,"$LibraryBookTheme");let et=_a;const Fi=r(et);var Hi=Object.defineProperty,_i=Object.getOwnPropertyDescriptor,qi=s((c,e,t,o)=>{for(var a=_i(e,t),i=c.length-1,p;i>=0;i--)(p=c[i])&&(a=p(e,t,a)||a);return a&&Hi(e,t,a),a},"__decorateClass$m");const qa=class qa extends x{constructor(){super(...arguments),this.specification=new tt}defines(e){e.classes.add(this,"pa-label")}erase(e){e.classes.revert(this)}};s(qa,"$Label");let rn=qa;const Ua=class Ua extends j{$saidOfAWord(e){l(e instanceof M,"label is said of a word, and this is not one")}};s(Ua,"LabelSpecification");let tt=Ua;qi([f("label is said of a word")],tt.prototype,"$saidOfAWord");const Oe=r(rn),Ga=class Ga extends g{get cover(){return this.$cover??this.book?.cover}write(){const e=this.cover.annotations.expressed(Ta),t=r(A),o=r(Oe),a=r(O);return d(v,{children:[d(t,{children:[n(o,{}),"by"]}),d(t,{children:[n(a,{children:e.means.identifier}),e.name]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-byline")}};s(Ga,"$Byline");let sn=Ga;const Va=class Va extends g{get cover(){return this.$cover??this.book?.cover}write(){const e=this.cover.annotations.expressed(Vs),t=r(A),o=r(Oe),a=r(O);return d(v,{children:[d(t,{children:[n(o,{}),"subject"]}),d(t,{children:[n(a,{children:e.means.identifier}),e.name]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-subject-line")}};s(Va,"$SubjectLine");let dn=Va;const Ya=class Ya extends g{get cover(){return this.$cover??this.book?.cover}get topics(){return this.cover?.annotations.find(Ys)??[]}write(){const e=r(A),t=r(Oe),o=r(O);return d(v,{children:[d(e,{children:[n(t,{}),"topic"]}),this.topics.map((a,i)=>d(e,{children:[n(o,{children:a.means.identifier}),a.name]},i))]})}$Define(){super.$Define(),this.classes.add(this,"pd-topic-line")}};s(Ya,"$TopicLine");let pn=Ya;const Ui=r(sn);r(dn);const Gi=r(pn);var Vi=Object.defineProperty,Yi=Object.getOwnPropertyDescriptor,Zi=s((c,e,t,o)=>{for(var a=Yi(e,t),i=c.length-1,p;i>=0;i--)(p=c[i])&&(a=p(e,t,a)||a);return a&&Vi(e,t,a),a},"__decorateClass$l");const Za=class Za extends j{$saidOfABook(e){l(e instanceof Zs,"this is said of a book, and here it is said of something else")}};s(Za,"OfABookSpecification");let V=Za;Zi([f("this is said of a book")],V.prototype,"$saidOfABook");const Qa=class Qa extends M{get on(){return[this.book.$is].flat().includes(this.$annotation)}$Switch(...e){this.$Writing(...e),this.containers.replace(this,"span","button")}container(e){return super.container({type:"button","aria-pressed":this.on,onClick:s(()=>this.press(),"onClick"),...e})}press(){const e=this.book,t=[e.$is].flat();e.$is=this.on?t.filter(o=>o!==this.$annotation):[this.$annotation,...t]}$Define(){super.$Define(),this.classes.add(this,"pd-switch")}};s(Qa,"$Switch");let ge=Qa;const Xa=class Xa extends ge{press(){const e=this.book,t=[e.$is].flat().filter(o=>!this.$family.includes(o));e.$is=[this.$annotation,...t]}};s(Xa,"$Tab");let Ae=Xa;const Da=r(ge),Qi=r(Ae);var Xi=Object.defineProperty,Ki=Object.getOwnPropertyDescriptor,Js=s((c,e,t,o)=>{for(var a=Ki(e,t),i=c.length-1,p;i>=0;i--)(p=c[i])&&(a=p(e,t,a)||a);return a&&Xi(e,t,a),a},"__decorateClass$k");const Ka=class Ka extends pe{constructor(){super(...arguments),this.specification=new De,this.style=z.div`
        .pa-coloured { --colour: ${e=>e.$colour}; }
    `}get colour(){return T.copy(this.text).trim()}$Coloured(...e){this.$Format(...e);const t=this.style;this._painted=o=>n(t,{$colour:this.colour,...o})}defines(e){e.classes.add(this,"pa-coloured"),e.containers.add(this,this._painted)}erase(e){e.classes.revert(this),e.containers.revert(this)}};s(Ka,"$Coloured");let ie=Ka;const Ja=class Ja extends j{$saidOfAChapterOrAParagraph(e){l(e instanceof C||e instanceof g,"coloured is said of a chapter or a paragraph, and this is neither")}$givenItsColour(e){l(/^#[0-9a-f]{6}$/iu.test(e.annotations.expressed(ie)?.colour??""),"coloured is given its colour as six hex digits, and this one was given something else")}};s(Ja,"ColouredSpecification");let De=Ja;Js([f("coloured is said of a chapter or a paragraph")],De.prototype,"$saidOfAChapterOrAParagraph");Js([f("coloured is given its colour")],De.prototype,"$givenItsColour");r(ie);var Ji=Object.defineProperty,ed=Object.getOwnPropertyDescriptor,Ra=s((c,e,t,o)=>{for(var a=ed(e,t),i=c.length-1,p;i>=0;i--)(p=c[i])&&(a=p(e,t,a)||a);return a&&Ji(e,t,a),a},"__decorateClass$j");const eo=class eo extends pe{constructor(){super(...arguments),this.specification=new ue}get identifier(){return G.reference(T.copy(this.text))?.identifier??""}get name(){return G.reference(T.copy(this.text))?.name??""}get entry(){return this.book?.chapterAt(this.identifier)}get drawing(){const e=this.entry?.text.find(g).flatMap(t=>t.text.find(Yt))[0];return e===void 0?"":T.copy(e.text).trim()}get colour(){return this.entry?.annotations.expressed(ie)?.colour??""}$Keyed(...e){this.$Format(...e);const t=r(nd);this._layer=o=>d("div",{...o,children:[n(t,{keyed:this}),o.children]})}defines(e){e.classes.add(this,"pa-keyed"),e.containers.add(this,this._layer)}erase(e){e.classes.revert(this),e.containers.revert(this)}};s(eo,"$Keyed");let oe=eo;const to=class to extends M{constructor(){super(...arguments),this.style=z.span`
        --colour: ${e=>e.$colour};
    `}$Icon(...e){this.$Writing(...e);const t=this.style;this._painted=o=>n(t,{$colour:this.$keyed?.colour??"",...o}),this.containers.replace(this,"span",this._painted)}write(){return n("span",{className:"pd-drawing",role:"img","aria-label":this.$keyed?.name,dangerouslySetInnerHTML:{__html:this.$keyed?.drawing??""}})}$Define(){super.$Define(),this.classes.add(this,"pd-icon")}};s(to,"$Icon");let cn=to;const no=class no extends j{$saidOfAChapter(e){l(e instanceof C,"keyed is said of a chapter, and this is not one")}$namesAnEntry(e){const t=e.annotations.expressed(oe)?.entry;l(t!==void 0&&t.annotations.expressed(oe)?.entry===t,"keyed names an entry of the key, a chapter of this book keyed as itself, and this one names something else")}$entryHoldsItsDrawingAndColour(e){const t=e.annotations.expressed(oe)?.entry;t!==void 0&&l(t.text.find(g).flatMap(o=>o.text.find(Yt)).length===1&&t.is(ie),"an entry of the key holds one drawing and its colour, and this one holds something else")}};s(no,"KeyedSpecification");let ue=no;Ra([f("keyed is said of a chapter")],ue.prototype,"$saidOfAChapter");Ra([f("keyed names an entry of the key")],ue.prototype,"$namesAnEntry");Ra([f("an entry of the key holds one drawing and its colour")],ue.prototype,"$entryHoldsItsDrawingAndColour");r(oe);const td=r(cn),nd=td;var ad=Object.defineProperty,od=Object.getOwnPropertyDescriptor,rd=s((c,e,t,o)=>{for(var a=od(e,t),i=c.length-1,p;i>=0;i--)(p=c[i])&&(a=p(e,t,a)||a);return a&&ad(e,t,a),a},"__decorateClass$i");const sd={tsx:"typescript",ts:"typescript",mjs:"javascript",js:"javascript",css:"css",html:"xml",svg:"xml",json:"json",md:"markdown"},id='<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"><path d="M6 4.5 3.5 8 6 11.5M10 4.5 12.5 8 10 11.5"/></svg>',ze=s(c=>`${c.$identifier}${c.$type}`,"fileNameOf"),dd=s(c=>c===void 0?[]:T.copy(c.text).split(`
`),"fileLinesOf"),ei=s(c=>c?.chapter?.annotations.expressed(L),"spreadOf"),ao=class ao extends g{constructor(){super(...arguments),this.$family=[]}get name(){return this.$file===void 0?"":ze(this.$file)}get language(){return sd[(this.$file?.$type??"").replace(/^\./u,"")]??""}get spread(){return ei(this.$file)}get chapter(){return this.$file?.chapter??super.chapter}$FileListing(...e){this.$Writing(...e),this.containers.replace(this,"span","div")}container(e){return super.container({onClick:s(()=>this.press(),"onClick"),...e})}press(){if(this.$filePanelState===void 0)return;const e=this.book,t=[e.$is].flat().filter(o=>!this.$family.includes(o));e.$is=[this.$filePanelState,...t]}write(){const e=r(A),t=r(Ti);return d(v,{children:[n(e,{children:this.name}),n(t,{identifier:this.$file?.$identifier,type:this.$file?.$type,language:this.language,numbered:!0})]})}$Define(){super.$Define(),this.classes.add(this,"pd-file-listing");const e=r(hd);this.annotations.add(this,n(e,{}))}};s(ao,"$FileListing");let nt=ao;const oo=class oo extends x{constructor(){super(...arguments),this.specification=new at}defines(e){const t=e;t.$file!==void 0&&t.spread?.openFile===t.$file&&e.classes.add(this,"pa-open")}erase(e){e.classes.revert(this)}};s(oo,"$OpenListing");let hn=oo;const ro=class ro extends j{$isAFileListing(e){l(e instanceof nt,"an open listing is a file listing, and this is not one")}};s(ro,"OpenListingSpecification");let at=ro;rd([f("an open listing is a file listing")],at.prototype,"$isAFileListing");const so=class so extends Ae{constructor(){super(...arguments),this.$skeleton=!1,this.style=z.button`
        --colour: ${e=>e.$colour};
    `}get on(){const e=this.$file?.chapter;return e!==void 0&&e===this.book.open&&this.spread?.openFile===this.$file}get name(){return this.$file===void 0?"":ze(this.$file)}get spread(){return ei(this.$file)}get colour(){return this.$file?.chapter?.annotations.expressed(oe)?.colour??""}get lines(){return dd(this.$file)}get chapter(){return this.$file?.chapter??super.chapter}$FileTab(...e){this.$Switch(...e),this.containers.replace(this,"button",this.style)}container(e){return super.container({$colour:this.colour,...e})}press(){const e=this.spread;e!==void 0&&(e.$openFile=this.$file),this.$annotation!==void 0&&super.press()}write(){return d(v,{children:[n("span",{className:"pd-drawing",dangerouslySetInnerHTML:{__html:id}}),n("span",{className:"pd-tab-name",children:this.name}),this.$skeleton?n("span",{className:"pd-skeleton",children:this.lines.slice(0,14).map((e,t)=>n("i",{style:{width:`${Math.max(12,Math.min(100,e.length*2.2))}%`}},t))}):void 0]})}$Define(){super.$Define(),this.classes.add(this,"pd-file-tab")}};s(so,"$FileTab");let ln=so;const pd=r(nt),cd=r(hn),Sa=r(ln),hd=cd;var ld=Object.defineProperty,fd=Object.getOwnPropertyDescriptor,gd=s((c,e,t,o)=>{for(var a=fd(e,t),i=c.length-1,p;i>=0;i--)(p=c[i])&&(a=p(e,t,a)||a);return a&&ld(e,t,a),a},"__decorateClass$h");const qt=class qt extends x{constructor(){super(...arguments),this.specification=new V}defines(e){for(const t of e.annotations.after(this))t instanceof qt&&e.annotations.express(t,!1);e.classes.add(this,"pa-file-panel-state")}erase(e){e.classes.revert(this)}};s(qt,"$FilePanelState");let me=qt;const io=class io extends me{defines(e){super.defines(e),e.classes.add(this,"pa-code-forward")}};s(io,"$CodeForward");let fn=io;const po=class po extends me{defines(e){super.defines(e),e.classes.add(this,"pa-words-forward")}};s(po,"$WordsForward");let gn=po;const co=class co extends me{defines(e){super.defines(e),e.classes.add(this,"pa-split")}};s(co,"$Split");let un=co;const ho=class ho extends x{constructor(){super(...arguments),this.specification=new V}defines(e){e.classes.add(this,"pa-light-code")}erase(e){e.classes.revert(this)}};s(ho,"$LightCode");let mn=ho;const lo=class lo extends x{constructor(){super(...arguments),this.specification=new V}defines(e){e.classes.add(this,"pa-wrapped-code")}erase(e){e.classes.revert(this)}};s(lo,"$WrappedCode");let bn=lo;const fo=class fo extends x{constructor(){super(...arguments),this.specification=new V}defines(e){e.classes.add(this,"pa-numbered-code")}erase(e){e.classes.revert(this)}};s(fo,"$NumberedCode");let wn=fo;const go=class go extends x{constructor(){super(...arguments),this.specification=new rt}defines(e){e.classes.add(this,"pa-brief")}erase(e){e.classes.revert(this)}};s(go,"$Brief");let ot=go;const uo=class uo extends j{$saidOfAParagraph(e){l(e instanceof g,"brief is said of a paragraph, and this is not one")}};s(uo,"BriefSpecification");let rt=uo;gd([f("brief is said of a paragraph")],rt.prototype,"$saidOfAParagraph");r(me);const Ma=r(fn),Ia=r(gn),be=r(un),ud=r(mn),md=r(bn),Wa=r(wn),q=r(ot),mo=class mo extends g{constructor(){super(...arguments),this.style=z.div`
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
    `}get spread(){return this.chapter?.annotations.expressed(L)}$FileRail(...e){this.$Writing(...e),this.containers.replace(this,"span",this.style)}write(){const e=r(Sa),t=this.spread;if(t!==void 0)return t.files.map(o=>n(e,{file:o,annotation:be,family:t.filePanelStates,skeleton:!0},ze(o)))}$Define(){super.$Define(),this.classes.add(this,"pd-file-rail")}};s(mo,"$FileRail");let kn=mo;const bo=class bo extends Ae{constructor(){super(...arguments),this.style=z.button`
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
    `}get paragraphs(){return(this.chapter?.text.find(W)??[]).flatMap(e=>e.text.find(g)).slice(0,16).map(e=>T.copy(e.text))}$FilePanelGrip(...e){this.$Switch(...e),this.containers.replace(this,"button",this.style)}write(){return n("span",{className:"pd-skeleton",children:this.paragraphs.map((e,t)=>n("i",{style:{width:`${Math.max(25,Math.min(100,e.length/4))}%`}},t))})}$Define(){super.$Define(),this.classes.add(this,"pd-file-panel-grip")}};s(bo,"$FilePanelGrip");let yn=bo;const bd=r(kn),wd=r(yn),wo=class wo extends g{constructor(){super(...arguments),this.style=z.div`
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
    `}get spread(){return this.chapter?.annotations.expressed(L)}$FilePanel(...e){this.$Writing(...e),this.containers.replace(this,"span",this.style)}write(){const e=r(vd),t=r(pd),o=this.spread;if(o!==void 0)return d(v,{children:[n(e,{chapter:this.chapter}),n("div",{className:"pd-file-listings",children:o.files.map(a=>n(t,{file:a,filePanelState:Ma,family:o.filePanelStates},ze(a)))})]})}$Define(){super.$Define(),this.classes.add(this,"pd-file-panel")}};s(wo,"$FilePanel");let vn=wo;const ko=class ko extends g{constructor(){super(...arguments),this.style=z.div`
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
    `}get spread(){return this.chapter?.annotations.expressed(L)}$FilePanelBar(...e){this.$Writing(...e),this.containers.replace(this,"span",this.style)}write(){const e=r(Sa),t=r(Qi),o=r(Da),a=this.spread,i=this.chapter;if(a!==void 0)return d(v,{children:[a.files.map(p=>n(e,{file:p},ze(p))),n("span",{className:"pd-words-only",children:n(t,{chapter:i,annotation:Ia,family:a.filePanelStates,children:"words"})}),n("span",{className:"pd-dock pd-to-full",children:n(t,{chapter:i,annotation:Ma,family:a.filePanelStates,children:"full screen"})}),n("span",{className:"pd-dock pd-to-split",children:n(t,{chapter:i,annotation:be,family:a.filePanelStates,children:"split"})}),d("span",{className:"pd-options",children:[n(o,{chapter:i,annotation:ud,children:"light"}),n(o,{chapter:i,annotation:md,children:"wrap"}),n(o,{chapter:i,annotation:Wa,children:"lines"})]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-file-panel-bar")}};s(ko,"$FilePanelBar");let $n=ko;const kd=r(vn),yd=r($n),vd=yd;var $d=Object.defineProperty,xd=Object.getOwnPropertyDescriptor,jd=s((c,e,t,o)=>{for(var a=xd(e,t),i=c.length-1,p;i>=0;i--)(p=c[i])&&(a=p(e,t,a)||a);return a&&$d(e,t,a),a},"__decorateClass$g");const yo=class yo extends pe{constructor(){super(...arguments),this.specification=new st,this.$openFile=void 0,this.grid=z.div`
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
    `}get files(){return this.parent.annotations.find(se).reverse()}get openFile(){return this.$openFile??this.files[0]}get filePanelStates(){return[Ia,be,Ma]}$Spread(...e){this.$Format(...e);const t=this.grid,o=r(kd),a=r(bd),i=r(wd);this.style=({className:p,children:w})=>{const $=this.parent,m=[...$.classes].includes("pa-open");return d(t,{className:`${p??""}${m?" pa-open":""}`.trim(),children:[n("div",{className:"pd-words",children:w}),m?d(v,{children:[n(o,{chapter:$}),n(a,{chapter:$}),n(i,{chapter:$,annotation:be,family:this.filePanelStates})]}):void 0]})}}defines(e){super.defines(e),e.classes.add(this,"pa-spread")}erase(e){super.erase(e),e.classes.revert(this)}};s(yo,"$Spread");let L=yo;const vo=class vo extends j{$isAChapter(e){l(e instanceof C,"a spread is a chapter read beside its files, and this is not a chapter")}};s(vo,"SpreadSpecification");let st=vo;jd([f("a spread is a chapter read beside its files")],st.prototype,"$isAChapter");const U=r(L);var Cd=Object.defineProperty,Td=Object.getOwnPropertyDescriptor,Na=s((c,e,t,o)=>{for(var a=Td(e,t),i=c.length-1,p;i>=0;i--)(p=c[i])&&(a=p(e,t,a)||a);return a&&Cd(e,t,a),a},"__decorateClass$f");const $o=class $o extends x{constructor(){super(...arguments),this.specification=new we}get date(){return this.text.find(Oa)[0]}defines(e){e.classes.add(this,"pa-dated")}erase(e){e.classes.revert(this)}note(){const e=r(this.date);return n(e,{})}};s($o,"$Dated");let Q=$o;const xo=class xo extends j{$saidOfAChapter(e){l(e instanceof C,"dated is said of a chapter, and this is not one")}$datedOnce(e){l(e.annotations.containsOne(Q),"a chapter is dated once, and this one is dated more than once")}$givenOneDate(e){l(e.annotations.expressed(Q)?.text.find(Oa).length===1,"a dated chapter is given one date, and this one is given none or more than one")}};s(xo,"DatedSpecification");let we=xo;Na([f("dated is said of a chapter")],we.prototype,"$saidOfAChapter");Na([f("a chapter is dated once")],we.prototype,"$datedOnce");Na([f("a dated chapter is given one date")],we.prototype,"$givenOneDate");r(Q);var Od=Object.defineProperty,zd=Object.getOwnPropertyDescriptor,Pe=s((c,e,t,o)=>{for(var a=zd(e,t),i=c.length-1,p;i>=0;i--)(p=c[i])&&(a=p(e,t,a)||a);return a&&Od(e,t,a),a},"__decorateClass$e");const ti='<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3.5 10.5 8 6 12.5"/></svg>',Pd='<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linejoin="round" stroke-linecap="round"><rect class="ground" x="0.75" y="0.75" width="14.5" height="14.5"/><path d="M3.5 5.5h3l1.5 1.5h4.5v5h-9z"/></svg>',jo=class jo extends pe{constructor(){super(...arguments),this.specification=new ft,this.style=z.div`
        ${e=>e.$schemeDeclarations===void 0?"":`.pa-entry { ${e.$schemeDeclarations} }`}
    `}get place(){return B(this.parent).identifier}get referencedChapter(){return this.book.chapterAt(this.place)}get cover(){return this.referencedChapter?.annotations.expressed(_)?.cover??this.book.coverOf(this.place)}get schemeDeclarations(){const e=this.cover?.annotations.expressed(K);if(e!==void 0)return e.declarations;const t=this.referencedChapter?.annotations.expressed(ie)?.colour;return t===void 0?void 0:`--colour: ${t};`}$Entry(...e){this.$Format(...e);const t=this.style;this._painted=o=>n(t,{$schemeDeclarations:this.schemeDeclarations,...o})}defines(e){e.classes.add(this,"pa-entry"),e.containers.add(this,this._painted),(this.place===this.book?.$bookmark||this.place===this.book.open?.mention?.identifier)&&e.classes.add(this,"pa-open")}erase(e){e.classes.revert(this),e.containers.revert(this)}};s(jo,"$Entry");let ke=jo;const Co=class Co extends x{constructor(){super(...arguments),this.specification=new lt}defines(e){e.classes.add(this,"pa-appendix")}erase(e){e.classes.revert(this)}};s(Co,"$Appendix");let ye=Co;const To=class To extends xi{constructor(){super(...arguments),this.$word=""}};s(To,"$Sought");let xn=To;const Oo=class Oo extends x{constructor(){super(...arguments),this.specification=new ht,this.$folded=!1,this.$counted=!1,this.$dated=!1,this.$searched=!1}get word(){return qs.$word}get sections(){return this.chapter.text.find(W)}get entries(){const e=s(t=>!t.is(Oi)&&B(t)!==void 0,"listed");return[...this.chapter.text].flatMap(t=>t instanceof W?t.text.find(g):t instanceof g?[t]:[]).filter(e)}get found(){return this.book.found(this.word)}chapterOf(e){const t=B(e)?.identifier;return t===void 0?void 0:this.book.chapterAt(t)}search(e){qs.$word=e;const t=this.chapter,o=e.trim()!=="";if(t!==void 0&&o!==t.is(it)){const a=[t.$is].flat().filter(i=>i!==void 0&&i!==Us);t.$is=o?[Us,...a]:a}this.book.sought(e.trim())}$Bound(){const e=r(Bd),t=r(di),o=r(Sa),a=this.book;for(const m of this.entries){m.annotations.add(this,n(e,{}));const P=a.chapterAt(B(m).identifier)?.annotations.expressed(L);if(P===void 0)continue;const te=P.files;te.length===0&&!this.sections.some(ae=>ae.text.find(g).includes(m))||m.text.add(this,n(t,{foldedWriting:te.length===0?void 0:m,annotation:An}),...te.map(ae=>n(o,{file:ae,annotation:be,family:P.filePanelStates},ze(ae))))}const i=r(ii),p=r(Hd),w=new Set(a.entries),$=s(m=>{const P=this.chapterOf(m);return P!==void 0&&w.has(P)},"leadsToAnEntry");if(this.$dated)for(const m of this.entries){const P=this.chapterOf(m);P===void 0||!w.has(P)||!P.is(Q)||m.text.add(this,n(i,{entry:P}))}for(const m of this.sections){this.$folded&&(m.$is=[An]);const P=m.canonical;this.$counted&&P!==void 0&&m.text.find(g).some($)&&P.text.add(this,n(p,{section:m}))}super.$Bound()}};s(Oo,"$Index");let F=Oo;const zo=class zo extends x{constructor(){super(...arguments),this.specification=new dt}defines(e){e.classes.add(this,"pa-searching")}erase(e){e.classes.revert(this)}};s(zo,"$Searching");let it=zo;const Po=class Po extends j{$saidOfATable(e){l(e.is(ne),"searching is said of a table of contents, the index's chapter, and this is not one")}};s(Po,"SearchingSpecification");let dt=Po;Pe([f("searching is said of a table of contents")],dt.prototype,"$saidOfATable");const Ao=class Ao extends g{get index(){return this.book?.table?.annotations.expressed(F)}$Search(...e){this.$Writing(...e),this.containers.replace(this,"span","div")}write(){const e=this.index,t=this.book;if(!(e===void 0||t===void 0))return d(v,{children:[n("span",{className:"pd-search-mark","aria-hidden":"true",children:"⌕"}),n("input",{className:"pd-search-word",type:"search",value:e.word,placeholder:t.searchHint,"aria-label":"search",onInput:s(o=>e.search(o.target.value),"onInput")})]})}$Define(){super.$Define(),this.classes.add(this,"pd-search")}};s(Ao,"$Search");let jn=Ao;const Do=class Do extends g{get index(){return this.book?.table?.annotations.expressed(F)}$Results(...e){this.$Writing(...e),this.containers.replace(this,"span","div")}write(){const e=this.index,t=this.book;if(e===void 0||t===void 0)return;const o=e.word.trim();if(o==="")return;const a=t.found(o);return d(v,{children:[n("span",{className:"pd-results-count",children:t.countOfFound(a,o)}),a.map((i,p)=>this.result(i,p))]})}result(e,t){const o=r(Ed);return n(o,{chapter:this.chapter,hit:e},this.book.placeOf(e)??t)}$Define(){super.$Define(),this.classes.add(this,"pd-results")}};s(Do,"$Results");let pt=Do;const Ro=class Ro extends M{write(){}$Define(){super.$Define(),this.classes.add(this,"pd-entry-open")}};s(Ro,"$EntryOpen");let ct=Ro;var fe;let ni=(fe=class extends g{get index(){return this.book?.table?.annotations.expressed(F)}$Result(...e){this.$Writing(...e),this.containers.replace(this,"span","div")}write(){const e=this.book,t=this.$hit,o=this.index;if(e===void 0||t===void 0||o===void 0)return;const a=o.word.trim(),i=e.wordsOf(t),p=e.placeOf(t),w=r(O),$=r(ii),m=r(this.open());return d(v,{children:[n("span",{className:"pd-result-title",children:_s(i.title,a)}),t instanceof C&&t.is(Q)?n($,{entry:t}):void 0,n("span",{className:"pd-result-synopsis",children:_s(Ad(i.text,a),a)}),p===void 0?void 0:n(m,{entry:t,children:n(w,{children:p})})]})}open(){return Fd}$Define(){super.$Define(),this.classes.add(this,"pd-result")}},s(fe,"$Result"),fe);const Ad=s((c,e)=>{if(c.length<=190)return c;const t=c.toLowerCase().indexOf(e.toLowerCase());if(t<150)return`${c.slice(0,187)}…`;const o=c.lastIndexOf(" ",t-90)+1;return`…${c.slice(o,o+186)}…`},"clipped"),_s=s((c,e)=>{if(e==="")return c;const t=c.toLowerCase(),o=e.toLowerCase(),a=[];let i=0;for(let p=t.indexOf(o);p!==-1;p=t.indexOf(o,i))a.push(c.slice(i,p),n("mark",{children:c.slice(p,p+e.length)},p)),i=p+e.length;return a.push(c.slice(i)),a},"marked"),So=class So extends M{write(){const[e,t,o]=(this.$entry?.annotations.expressed(Q)?.date?.date??"").split("-");if(!(e===void 0||t===void 0||o===void 0))return new Date(Date.UTC(Number(e),Number(t)-1,Number(o.slice(0,2)))).toLocaleString("en-GB",{day:"numeric",month:"short",timeZone:"UTC"})}$Define(){super.$Define(),this.classes.add(this,"pd-entry-day")}};s(So,"$EntryDay");let Cn=So;const Mo=class Mo extends M{write(){return String(this.$section?.text.find(g).filter(e=>B(e)!==void 0).length??0)}$Define(){super.$Define(),this.classes.add(this,"pd-section-count")}};s(Mo,"$SectionCount");let Tn=Mo;const Io=class Io extends j{$isATableOfContents(e){l(e.is(ne),"an index is a table of contents, and this chapter is not one")}};s(Io,"IndexSpecification");let ht=Io;Pe([f("an index is a table of contents")],ht.prototype,"$isATableOfContents");const Wo=class Wo extends j{$isASectionOfTheTable(e){l(e instanceof W&&e.chapter?.is(ne)===!0,"the appendix is a section of the table of contents, and this is not one")}};s(Wo,"AppendixSpecification");let lt=Wo;Pe([f("the appendix is a section of the table of contents")],lt.prototype,"$isASectionOfTheTable");const No=class No extends j{$isARowThatLeadsSomewhere(e){l(e instanceof g&&B(e)!==void 0,"an entry is a row that leads somewhere, and this is not one")}};s(No,"EntrySpecification");let ft=No;Pe([f("an entry is a row that leads somewhere")],ft.prototype,"$isARowThatLeadsSomewhere");const Lo=class Lo extends x{constructor(){super(...arguments),this.specification=new ut}defines(e){e.classes.add(this,"pa-folded")}erase(e){e.classes.revert(this)}};s(Lo,"$Folded");let On=Lo;const Bo=class Bo extends ge{get on(){return this.$foldedWriting!==void 0&&[this.$foldedWriting.$is].flat().includes(this.$annotation)}container(e){return super.container({...e,disabled:this.$foldedWriting===void 0,onClick:s(t=>{t.preventDefault(),this.press()},"onClick")})}press(){const e=this.$foldedWriting;if(e===void 0)return;const t=[e.$is].flat();e.$is=this.on?t.filter(o=>o!==this.$annotation):[this.$annotation,...t]}write(){return n("span",{className:"pd-drawing",dangerouslySetInnerHTML:{__html:ti}})}$Define(){super.$Define(),this.classes.add(this,"pd-fold-chevron")}};s(Bo,"$FoldChevron");let zn=Bo;const Eo=class Eo extends pe{constructor(){super(...arguments),this.specification=new mt,this.tree=z.div`
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
    `}get section(){return this.parent}get firstPlace(){return this.section.text.find(g).map(e=>B(e)).find(e=>e!==void 0)?.identifier}get part(){const e=this.firstPlace;return e===void 0?void 0:this.book.chapterAt(e)?.part}get open(){const e=this.book,t=e.open,o=e.$bookmark,a=this.section.mention?.identifier;return o!==void 0&&o.includes("#")&&this.section.text.find(g).some(p=>B(p)?.identifier===o)||t!==void 0&&t.part!==void 0&&t.part.name===this.part?.name||a!==void 0&&e.placeWithin(a)===o}$TreeFolder(...e){this.$Format(...e);const t=this.tree,o=r(di),a=r(A),i=r(O);this.style=({className:p,children:w})=>{const $=this.firstPlace,m=[...this.section.classes].includes("pa-open"),P=this.book.open!==void 0,te=this.chapter?.annotations.expressed(F)?.$folded===!0&&!(m&&P),ae=n("span",{className:"pd-drawing pd-tree-folder-mark",dangerouslySetInnerHTML:{__html:Pd}});return d(t,{className:`${p??""} pd-tree-folder${m?" pa-open":""}${te?" pa-foldable":""}`.trim(),children:[n(o,{foldedWriting:this.section,annotation:An}),$===void 0?ae:d(a,{children:[n(i,{children:$}),ae]}),w]})}}defines(e){super.defines(e),e.classes.add(this,"pa-tree-folder"),this.open&&e.classes.add(this,"pa-open")}erase(e){super.erase(e),e.classes.revert(this)}};s(Eo,"$TreeFolder");let gt=Eo;const Fo=class Fo extends j{$saidOfASectionOrAnEntry(e){l(e instanceof W&&e.chapter?.is(ne)===!0||e.is(ke),"folded is said of a section of a table of contents or of an entry, and this is neither")}};s(Fo,"FoldedSpecification");let ut=Fo;Pe([f("folded is said of a section of a table of contents or of an entry")],ut.prototype,"$saidOfASectionOrAnEntry");const Ho=class Ho extends j{$isASectionOfTheTable(e){l(e instanceof W&&e.chapter?.is(ne)===!0,"a tree folder is a section of the table of contents, and this is not one")}};s(Ho,"TreeFolderSpecification");let mt=Ho;Pe([f("a tree folder is a section of the table of contents")],mt.prototype,"$isASectionOfTheTable");const _o=class _o extends g{get cover(){return this.$cover??this.book?.cover}write(){const e=this.cover,t=r(A),o=r(O);return d(t,{children:[n(o,{children:e.mention.identifier}),n("span",{className:"pd-drawing",dangerouslySetInnerHTML:{__html:ti}}),e.title.name]})}$Define(){super.$Define(),this.classes.add(this,"pd-tree-root")}};s(_o,"$TreeRoot");let Pn=_o;const B=s(c=>c.annotations.expressed(Fs)??c.text.find(M).map(e=>e.annotations.expressed(Fs)).find(e=>e!==void 0),"contentOf"),Dd=r(ke),Rd=r(F),Sd=r(it),ai=r(jn),oi=r(pt),Md=r(ni),La=r(ct),ri=r(Cn),Id=r(xn),qs=r(n(Id,{})),Wd=r(Tn);r(ye);const si=r(On),Nd=r(zn),Ba=r(gt),Ld=r(Pn),Bd=Dd,Us=Sd,Ed=Md,Fd=La,ii=ri,Hd=Wd,An=si,di=Nd;var _d=Object.defineProperty,qd=Object.getOwnPropertyDescriptor,ce=s((c,e,t,o)=>{for(var a=qd(e,t),i=c.length-1,p;i>=0;i--)(p=c[i])&&(a=p(e,t,a)||a);return a&&_d(e,t,a),a},"__decorateClass$d");const Ea=s((c,e)=>{const t=new Set(c.text.find(e));return c.text.find(zi).flatMap(o=>[...t.has(o)?[o]:[],...Ea(o,e)])},"within"),qo=class qo extends x{constructor(){super(...arguments),this.specification=new de}get identifier(){return G.reference(T.copy(this.text))?.identifier??""}get name(){return G.reference(T.copy(this.text))?.name??""}get cover(){const e=this.identifier;return this.chapter?.annotations.find(_).map(t=>t.cover).find(t=>t?.mention?.identifier===e)}defines(e){e.classes.add(this,"pa-design")}erase(e){e.classes.revert(this)}};s(qo,"$Design");let H=qo;const Uo=class Uo extends x{constructor(){super(...arguments),this.specification=new wt}defines(e){e.classes.add(this,"pa-exhibit")}erase(e){e.classes.revert(this)}};s(Uo,"$Exhibit");let bt=Uo;const Go=class Go extends x{constructor(){super(...arguments),this.specification=new kt,this.$number=0,this.span=z.span.attrs({className:"pd-plate"})``}note(){const e=this.span;return d(v,{children:[n(e,{children:String(this.$number).padStart(2,"0")}),n("span",{className:"pd-jacket-mini"})]})}defines(e){e.classes.add(this,"pa-plate")}erase(e){e.classes.revert(this)}};s(Go,"$Plate");let Dn=Go;const Vo=class Vo extends pe{constructor(){super(...arguments),this.specification=new yt,this.themeProvider=!0,this.room=z.div`
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
    `}get chapter(){return this.parent}get design(){return this.chapter.annotations.expressed(H)}get plate(){return this.book.chapters.filter(e=>e.is(H)).indexOf(this.chapter)+1}$Room(...e){this.$Format(...e);const t=this.room;this.style=({className:o,children:a})=>{const i=[...this.chapter.classes].includes("pa-open");return le(this.design?.cover,d(t,{className:`${o??""} pd-room${i?" pa-open":""}`.trim(),children:[n("span",{className:"pd-plate",children:String(this.plate).padStart(2,"0")}),a]}))}}defines(e){super.defines(e),e.classes.add(this,"pa-room")}erase(e){super.erase(e),e.classes.revert(this)}};s(Vo,"$Room");let Rn=Vo;const Yo=class Yo extends g{get references(){const e=this.book?.means?.identifier??"",t=new Map;for(const o of Ea(this.chapter,M)){if(o.parent===this)continue;const a=o.annotations.expressed(za)?.identifier;if(a===void 0||a.startsWith(e)||t.has(a))continue;const i=T.copy(o.text);t.set(a,G.reference(i)?.name??i.trim())}return[...t]}write(){const e=r(A),t=r(O);return this.references.map(([o,a],i)=>d(e,{children:[n(t,{children:o}),a,n("span",{className:"pd-where",children:o.replace(/^\/dougs-/u,"").replace(/\/#?/u," · ").replace(/ · $/u,"").replace(/-/gu," ")})]},i))}$Define(){super.$Define(),this.classes.add(this,"pd-built-in")}};s(Yo,"$BuiltIn");let Sn=Yo;const Zo=class Zo extends j{$isAChapter(e){l(e instanceof C,"a design is a chapter, and this is not one")}$namesABook(e){l((e.annotations.expressed(H)?.identifier??"")!=="","a design names the book it is of, and this one names nothing")}$holdsTheCover(e){l(e.annotations.expressed(H)?.cover!==void 0,"a design holds the cover of the book it is of, as a volume, and this one holds none")}$showsItselfAsBuilt(e){l(e instanceof C&&Ea(e,g).some(t=>t.is(bt)),"a design shows itself as built, in a paragraph said to be the exhibit, and this one shows nothing")}};s(Zo,"DesignSpecification");let de=Zo;ce([f("a design is a chapter")],de.prototype,"$isAChapter");ce([f("a design names the book it is of")],de.prototype,"$namesABook");ce([f("a design holds the cover of the book it is of")],de.prototype,"$holdsTheCover");ce([f("a design shows itself as built")],de.prototype,"$showsItselfAsBuilt");const Qo=class Qo extends j{$isAParagraphOfADesignHoldingOneImage(e){l(e instanceof g&&e.chapter?.is(H)===!0&&e.text.find(Pi).length===1,"an exhibit is a paragraph of a design that holds one image, and this is not one")}};s(Qo,"ExhibitSpecification");let wt=Qo;ce([f("an exhibit is a paragraph of a design that holds one image")],wt.prototype,"$isAParagraphOfADesignHoldingOneImage");const Xo=class Xo extends j{$saidOfAnEntryLeadingToADesign(e){l(e.is(ke)&&e.annotations.expressed(ke)?.referencedChapter?.is(H)===!0,"a plate is said of an entry that leads to a design, and this is not one")}};s(Xo,"PlateSpecification");let kt=Xo;ce([f("a plate is said of an entry that leads to a design")],kt.prototype,"$saidOfAnEntryLeadingToADesign");const Ko=class Ko extends j{$isADesign(e){l(e instanceof C&&e.is(H),"a room is a chapter that is a design, and this is not one")}};s(Ko,"RoomSpecification");let yt=Ko;ce([f("a room is a chapter that is a design")],yt.prototype,"$isADesign");r(H);r(bt);r(Dn);r(Rn);r(Sn);var Ud=Object.defineProperty,Gd=Object.getOwnPropertyDescriptor,Y=s((c,e,t,o)=>{for(var a=Gd(e,t),i=c.length-1,p;i>=0;i--)(p=c[i])&&(a=p(e,t,a)||a);return a&&Ud(e,t,a),a},"__decorateClass$c");const le=s((c,e,t)=>{const o=c?.annotations.expressed(K)?.painted;return o===void 0?e:n(o,{children:e},t)},"painted"),Jo=class Jo extends N{constructor(){super(...arguments),this.specification=new $e}get name(){return this.chapter?.title?.name??""}get author(){return this.chapter?.annotations.expressed(Ta)?.name??""}get illustration(){return this.chapter?.text.find(g).find(e=>e.is(Se))}get drawing(){const e=this.illustration?.text.find(Yt)[0];return e===void 0?"":T.copy(e.text).trim()}get scheme(){return this.chapter?.annotations.expressed(K)}get window(){return this.chapter?.annotations.expressed(ve)}};s(Jo,"$BookshelfCover");let Re=Jo;const er=class er extends x{constructor(){super(...arguments),this.specification=new jt}defines(e){e.classes.add(this,"pa-illustration")}erase(e){e.classes.revert(this)}};s(er,"$Illustration");let Se=er;const tr=class tr extends pe{constructor(){super(...arguments),this.specification=new Me,this.$ground="",this.$band="",this.$bandInk="",this.$foot="",this.$footInk="",this.$ink="",this.style=z.div.attrs({className:"pd-scheme"})`
        ${e=>e.$scheme}
    `}get colours(){return[this.$ground,this.$band,this.$bandInk,this.$foot,this.$footInk,this.$ink]}get declarations(){return`--ground: ${this.$ground}; --band: ${this.$band}; --band-ink: ${this.$bandInk}; --foot: ${this.$foot}; --foot-ink: ${this.$footInk}; --ink: ${this.$ink};`}get painted(){return this._painted}$Scheme(...e){this.$Format(...e);const t=this.style;this._painted=o=>n(t,{$scheme:this.declarations,...o})}defines(e){e.classes.add(this,"pa-scheme"),e.containers.add(this,this._painted)}erase(e){e.classes.revert(this),e.containers.revert(this)}};s(tr,"$Scheme");let K=tr;const nr=class nr extends x{constructor(){super(...arguments),this.specification=new Ie,this.$x="",this.$y=""}get declarations(){return`--window-x: ${this.$x}px; --window-y: ${this.$y}px;`}};s(nr,"$Window");let ve=nr;const ar=class ar extends x{constructor(){super(...arguments),this.specification=new We}get cover(){return this._cover}get jacket(){return this._cover?.annotations.expressed(N)}$Volume(...e){this._cover=e.find(t=>t instanceof C),this.$Annotation(...e.filter(t=>t!==this._cover))}defines(e){e.classes.add(this,"pa-volume")}erase(e){e.classes.revert(this)}};s(ar,"$Volume");let _=ar;const or=class or extends g{get cover(){return this.$cover?.annotations.expressed(N)}$Jacket(...e){this.$Writing(...e),this._painted=t=>{const o=this.cover?.scheme?.painted;return o===void 0?n("div",{...t}):n(o,{...t})},this.containers.add(this,this._painted)}write(){const e=this.cover;if(e===void 0)return;const t=r(A),o=r(Oe);return d(v,{children:[n(t,{children:e.name}),n("span",{className:"pd-drawing",dangerouslySetInnerHTML:{__html:e.drawing}}),d(t,{children:[n(o,{}),e.author]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-jacket")}};s(or,"$Jacket");let Mn=or;const rr=class rr extends g{constructor(){super(...arguments),this.unfolded=!1}get filedElsewhere(){return this.$subject!==void 0&&this.$subject!==this.$cover}container(e){return super.container({onMouseOver:s(t=>{t.target instanceof Element&&t.target.closest(".pd-filed")!==null&&this.unfold()},"onMouseOver"),onMouseLeave:s(()=>this.fold(),"onMouseLeave"),...e})}unfold(){this.unfolded=!0}fold(){this.unfolded=!1}write(){const e=this.$cover,t=this.$subject;if(e!==void 0)return d(v,{children:[this.filedElsewhere?le(t,n("span",{className:"pd-filed",children:this.mark(t)})):void 0,le(e,n("span",{className:"pd-own",children:this.mark(e)})),d("span",{className:"pd-names",children:[le(e,n("span",{className:"pd-name",children:this.name(e)})),this.filedElsewhere?le(t,n("span",{className:"pd-name pd-under",children:this.name(t)})):void 0]})]})}mark(e){const t=r(Zd),o=r(O);return n(t,{cover:e,children:n(o,{children:e.mention.identifier})})}name(e){const t=r(A),o=r(O);return d(t,{children:[n(o,{children:e.mention.identifier}),e.title.name]})}$Define(){super.$Define(),this.classes.add(this,"pd-logo");const e=r(Qd);this.annotations.add(this,n(e,{}))}};s(rr,"$Logo");let vt=rr;const sr=class sr extends x{constructor(){super(...arguments),this.specification=new $t}defines(e){e.unfolded&&e.classes.add(this,"pa-unfolded")}erase(e){e.classes.revert(this)}};s(sr,"$Unfolded");let In=sr;const ir=class ir extends j{$saidOfALogo(e){l(e instanceof vt,"unfolded is said of a logo, and this is not one")}};s(ir,"UnfoldedSpecification");let $t=ir;Y([f("unfolded is said of a logo")],$t.prototype,"$saidOfALogo");const pi=s(c=>{const e=c?.annotations.expressed(N);return{drawing:e?.drawing??"",declarations:`${e?.scheme?.declarations??""} ${e?.window?.declarations??""}`}},"markingOf"),dr=class dr extends M{constructor(){super(...arguments),this.style=z.span`
        ${e=>e.$vars}
    `}get cover(){return this.$cover?.annotations.expressed(N)}get marking(){return pi(this.$cover)}$Mark(...e){this.$Writing(...e);const t=this.style;this._painted=o=>n(t,{$vars:this.marking.declarations,...o}),this.containers.add(this,this._painted)}write(){return n("span",{className:"pd-drawing",dangerouslySetInnerHTML:{__html:this.marking.drawing}})}$Define(){super.$Define(),this.classes.add(this,"pd-mark")}};s(dr,"$Mark");let xt=dr;const pr=class pr extends Ai{$carriesItsScheme(e){l(e.is(K),"a bookshelf cover carries its scheme, and this one carries none")}$carriesItsWindow(e){l(e.is(ve),"a bookshelf cover carries its window, and this one carries none")}$carriesItsIllustration(e){l(e instanceof C&&e.text.find(g).some(t=>t.is(Se)),"a bookshelf cover carries its illustration, and this one carries none")}};s(pr,"BookshelfCoverSpecification");let $e=pr;Y([f("a bookshelf cover carries its scheme")],$e.prototype,"$carriesItsScheme");Y([f("a bookshelf cover carries its window")],$e.prototype,"$carriesItsWindow");Y([f("a bookshelf cover carries its illustration")],$e.prototype,"$carriesItsIllustration");const cr=class cr extends j{$saidOfADrawing(e){l(e instanceof g&&e.chapter?.is(N)===!0&&e.text.find(Yt).length===1,"an illustration is a paragraph of a cover that holds one drawing, and this is not one")}};s(cr,"IllustrationSpecification");let jt=cr;Y([f("an illustration is a paragraph of a cover that holds one drawing")],jt.prototype,"$saidOfADrawing");const hr=class hr extends j{$isACover(e){l(e instanceof C&&e.is(N),"a cover has a scheme, and this is not a cover")}$givenItsColours(e){const t=e.annotations.expressed(K)?.colours??[];l(t.every(o=>/^#[0-9a-f]{6}$/iu.test(o)),"a scheme is given its six colours as six hex digits each — the ground, the band and its ink, the foot and its ink, and the ink of the drawing — and this one was given something else")}};s(hr,"SchemeSpecification");let Me=hr;Y([f("a cover has a scheme")],Me.prototype,"$isACover");Y([f("a scheme is given its six colours")],Me.prototype,"$givenItsColours");const lr=class lr extends j{$isACover(e){l(e instanceof C&&e.is(N),"a cover has a window, and this is not a cover")}$givenItsPlace(e){const t=e.annotations.expressed(ve);l(/^-?\d+$/u.test(t?.$x??"")&&/^-?\d+$/u.test(t?.$y??""),"a window is given where it stands on the drawing, two whole numbers, and this one was given something else")}};s(lr,"WindowSpecification");let Ie=lr;Y([f("a cover has a window")],Ie.prototype,"$isACover");Y([f("a window is given where it stands on the drawing")],Ie.prototype,"$givenItsPlace");const fr=class fr extends j{$saidOfAChapterStandingForABook(e){l(e instanceof C&&(e.is(Je)||e.is(N)||e.is(H)),"a volume is a chapter that stands for another book, a synopsis of it, a cover filed under it or a design of it, and this is none")}$holdsTheCover(e){const t=[e.annotations.expressed(Je)?.means?.identifier,e.annotations.expressed(Vs)?.means?.identifier,e.annotations.expressed(Ta)?.means?.identifier,e.annotations.expressed(H)?.identifier,...[...e.annotations].map(o=>o.means?.identifier)];l(e.annotations.find(_).every(o=>o.cover?.is(N)===!0&&t.includes(o.cover.mention?.identifier)),"a volume holds the cover of a book its chapter stands for or names, the book a synopsis or a design is of, the subject or author a cover is filed under or a book another line of the cover names, and one here holds something else")}};s(fr,"VolumeSpecification");let We=fr;Y([f("a volume is a chapter that stands for another book")],We.prototype,"$saidOfAChapterStandingForABook");Y([f("a volume holds the cover of a book its chapter stands for or names")],We.prototype,"$holdsTheCover");const ci=r(Re),Jt=r(Se),en=r(K),tn=r(ve),Ne=r(_);r(Mn);const Vd=r(vt),Yd=r(In),hi=r(xt),Zd=hi,Qd=Yd;var Xd=Object.defineProperty,Kd=Object.getOwnPropertyDescriptor,Jd=s((c,e,t,o)=>{for(var a=Kd(e,t),i=c.length-1,p;i>=0;i--)(p=c[i])&&(a=p(e,t,a)||a);return a&&Xd(e,t,a),a},"__decorateClass$b");const Ut=class Ut extends Di{constructor(){super(...arguments),this.specification=new Ct,this.themeProvider=!0,this.style=z.div`
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
    `}get rules(){return this.parts().flat(1/0).filter(e=>typeof e=="string").join("")}get pages(){return this.book.pages}get open(){const e=this.book;return e.open??e.synopsis}$Bound(){const e=this.style,t=this.book;this.style=o=>n(e,{$at:t.means?.identifier,$scheme:t.cover?.annotations.expressed(K)?.declarations,...o}),super.$Bound()}defines(e){for(const o of e.annotations.after(this))o instanceof Ut&&e.annotations.express(o,!1);super.defines(e),e.classes.add(this,"pa-layout");const t=this.book.open;t!==void 0&&e.classes.add(this,"pa-turned"),t?.is(L)&&e.classes.add(this,"pa-manual")}erase(e){super.erase(e),e.classes.revert(this)}parts(){return[this.paging(),this.regions(),this.areas(),this.phone()]}paging(){return b`
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
        `}};s(Ut,"$Layout");let xe=Ut;const gr=class gr extends V{$placesTheSideAndNeverDressesIt(e){for(const t of e.annotations.find(xe)){const o=(t.rules.match(/[^{};]*\.pd-holds\s+[^\s{},][^{};]*\{/gu)??[]).map(a=>a.trim());l(o.length===0,`a layout places the side and never dresses it, what stands in the side being the index's and the folder's, and this one says "${o[0]}"`)}}};s(gr,"LayoutSpecification");let Ct=gr;Jd([f("a layout places the side and never dresses it")],Ct.prototype,"$placesTheSideAndNeverDressesIt");const Fa=r(xe),Gt=class Gt extends x{constructor(){super(...arguments),this.specification=new V}defines(e){for(const t of e.annotations.after(this))t instanceof Gt&&e.annotations.express(t,!1);e.classes.add(this,"pa-tone")}erase(e){e.classes.revert(this)}};s(Gt,"$Tone");let je=Gt;const ur=class ur extends je{defines(e){super.defines(e),e.classes.add(this,"pa-dark")}};s(ur,"$Dark");let Wn=ur;const mr=class mr extends je{defines(e){super.defines(e),e.classes.add(this,"pa-light")}};s(mr,"$Light");let Nn=mr;const br=class br extends je{defines(e){super.defines(e),e.classes.add(this,"pa-white-over-black")}};s(br,"$WhiteOverBlack");let Ln=br;const Ke=r(je),li=r(Wn),nn=r(Nn),ep=r(Ln);var tp=Object.defineProperty,np=Object.getOwnPropertyDescriptor,ap=s((c,e,t,o)=>{for(var a=np(e,t),i=c.length-1,p;i>=0;i--)(p=c[i])&&(a=p(e,t,a)||a);return a&&tp(e,t,a),a},"__decorateClass$a");const wr=class wr extends M{write(){const e=this.book.body;return`${e.indexOf(this.chapter)+1} of ${e.length}`}$Define(){super.$Define(),this.classes.add(this,"pd-count")}};s(wr,"$Count");let Bn=wr;const kr=class kr extends x{constructor(){super(...arguments),this.specification=new Le}defines(e){e.classes.add(this,"pa-before")}erase(e){e.classes.revert(this)}};s(kr,"$Before");let En=kr;const yr=class yr extends x{constructor(){super(...arguments),this.specification=new Le}defines(e){e.classes.add(this,"pa-after")}erase(e){e.classes.revert(this)}};s(yr,"$After");let Fn=yr;const vr=class vr extends j{$saidOfAWordOfATurn(e){l(e instanceof M&&e.parent instanceof Tt,"this is said of a word of a turn, and here it is said of something else")}};s(vr,"OfATurnSpecification");let Le=vr;ap([f("this is said of a word of a turn")],Le.prototype,"$saidOfAWordOfATurn");const op=r(Bn),rp=r(En),sp=r(Fn),$r=class $r extends g{get before(){const e=this.book.body;return e[e.indexOf(this.chapter)-1]??this.chapter}get after(){const e=this.book.body;return e[e.indexOf(this.chapter)+1]??this.chapter}write(){const e=r(A),t=r(op),o=r(rp),a=r(sp),i=r(this.before===this.chapter?Hs:O),p=r(this.after===this.chapter?Hs:O);return d(v,{children:[d(e,{children:[n(o,{}),n(i,{children:this.before.mention.identifier}),"← ",this.before.title.name]}),n(t,{}),d(e,{children:[n(a,{}),n(p,{children:this.after.mention.identifier}),this.after.title.name," →"]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-turn")}};s($r,"$Turn");let Tt=$r;const ip=r(Tt);var dp=Object.defineProperty,pp=Object.getOwnPropertyDescriptor,he=s((c,e,t,o)=>{for(var a=o>1?void 0:o?pp(e,t):e,i=c.length-1,p;i>=0;i--)(p=c[i])&&(a=(o?p(e,t,a):p(a))||a);return o&&a&&dp(e,t,a),a},"__decorateClass$9");const xr=class xr extends Zs{constructor(){super(...arguments),this.specification=new X}get chapters(){return this.text.find(C).filter(e=>[...e.classes].includes("pd-canonical"))}get laidOutChapters(){return[this.cover,this.synopsis,this.table,...this.chapters]}get pages(){return[this.synopsis,...this.chapters].filter(e=>e!==void 0)}get body(){if(this._body===void 0){const e=this.appendix;this._body=this.chapters.filter(t=>!e.includes(t))}return this._body}get entries(){return this.body}get appendix(){const e=this.table;if(e===void 0)return[];const t=e.text.find(W).filter(o=>o.is(ye)).flatMap(o=>o.text.find(g).map(a=>B(a)?.identifier));return this.chapters.filter(o=>t.includes(o.mention?.identifier??""))}get open(){return this.$bookmark===void 0?void 0:this.chapterAt(this.$bookmark)}get tones(){return[li,nn,ep]}get topics(){return this.cover?.annotations.find(Ys)??[]}get subjectCover(){return this.coverOf(this.subject?.means?.identifier)}get searchHint(){return"a word"}wordsOf(e){const t=(this._words??=new Map).get(e);if(t!==void 0)return t;const o=e instanceof C?e.title?.name??"":"",a=e.text.find(g).filter(p=>![...p.classes].includes("pa-caption")).map(p=>T.copy(p.text).replace(/\s+/gu," ").trim()).join(" "),i={title:o,text:a,lower:`${o} ${a}`.toLowerCase()};return this._words.set(e,i),i}found(e){const t=e.trim().toLowerCase();if(t==="")return[];const o=this.table?.annotations.expressed(F);return o===void 0?[]:o.entries.map(a=>o.chapterOf(a)).filter(a=>a!==void 0&&this.wordsOf(a).lower.includes(t))}countOfFound(e,t){return d(v,{children:[n("b",{children:e.length})," ",e.length===1?"entry says":"entries say"," “",t,"”"]})}placeOf(e){return e instanceof C?e.mention?.identifier:void 0}sought(e){}write(){return d(v,{children:[n("div",{className:"pd-library",children:this.library()}),n("div",{className:"pd-me",children:this.me()}),n("div",{className:"pd-holds",children:this.holds()}),n("div",{className:"pd-head",children:this.head()}),d("div",{className:"pd-pages",children:[this.aboveThePages(),this.pages.map((e,t)=>{const o=r(e);return n(o,{},t)}),this.belowThePages()]})]})}library(){if(this._logo===void 0)return;const e=r(this._logo);return n(e,{})}me(){const e=r(hi),t=r(O),o=r(Gi),a=this.coverOf(this.author?.means?.identifier);return d(v,{children:[this.byline(),a===void 0?void 0:this.painted(a,n(e,{cover:a,children:n(t,{children:a.mention.identifier})})),this.topics.length===0?void 0:n(o,{cover:this.cover})]})}painted(e,t,o){return le(e,t,o)}holds(){const e=r(this.table);return n(e,{})}head(){const e=r(this.cover);return d(v,{children:[n(e,{}),n("div",{className:"pd-switches",children:this.switches()})]})}aboveThePages(){}belowThePages(){}chapterAt(e){return(this._chapterByPlace??this.chapterByPlace()).get(e)}chapterByPlace(){const e=new Map;for(const t of this.chapters)for(const o of this.sections(t))o.mention!==void 0&&!e.has(o.mention.identifier)&&e.set(o.mention.identifier,t);for(const t of this.chapters)t.mention!==void 0&&e.set(t.mention.identifier,t);for(const t of this.entries)t.mention!==void 0&&!e.has(t.mention.identifier)&&e.set(t.mention.identifier,t);return e}placeWithin(e){return e.startsWith("#")?`${this.means?.identifier??""}${e}`:e}coverOf(e){if(e!==void 0)return this.means?.identifier===e?this.cover:this.cover?.annotations.find(_).map(t=>t.cover).find(t=>t?.mention?.identifier===e)}byline(){const e=r(Ui);return n(e,{chapter:this.cover})}root(){const e=r(Ld);return n(e,{cover:this.cover})}switches(){}sections(e){return e.text.find(W).flatMap(t=>[t,...this.sections(t)])}sectionOf(e){const t=this.table;return t===void 0?void 0:this.sections(t).find(o=>o.canonical?.name===e.name)}turn(){this.bookmark!==this.cover&&super.turn()}$Define(){super.$Define();const e=r(Fa),t=r(Ke);this.annotations.add(this,n(e,{}),n(t,{}))}$Bound(){this._chapterByPlace=this.chapterByPlace();const e=r(Ba),t=this.table?.annotations.expressed(ne);for(const i of t?.parts??[]){const p=this.sectionOf(i);p===void 0||p.is(gt)||!i.chapters.some(w=>w.is(L))||p.annotations.add(this,n(e,{}))}const o=this.root();o!==void 0&&this.table?.text.add(this,o);const a=r(Vd);this._logo=Ri.chemical(n(a,{cover:this.cover,subject:this.subjectCover}),this),this.turns(),super.$Bound()}turns(){const e=r(ip);for(const t of this.body)t.text.add(this,n(e,{}))}};s(xr,"$LibraryBook");let J=xr;he([Vt()],J.prototype,"_chapterByPlace",2);he([Vt()],J.prototype,"_body",2);he([Vt()],J.prototype,"_words",2);const jr=class jr extends Si{$holdsOnlyChapters(e){l([...e.text].every(t=>t instanceof C),"a book of this library holds only chapters, and this one holds something else")}$placesEveryChapter(e){l(e.text.find(C).every(t=>e.laidOutChapters.includes(t)),"a book of this library has a place for every chapter it holds, and this one holds a chapter it places nowhere")}$onlyAChapterAppends(e){l(e.text.find(C).every(t=>e.chapters.includes(t)||!t.is(se)),"only an ordinary chapter files a file, and here a cover, a synopsis or a table of contents files one")}$listsEachManualPart(e){const o=(e.table?.annotations.expressed(ne)?.parts??[]).find(a=>a.chapters.some(i=>i.is(L))&&e.sectionOf(a)===void 0);l(o===void 0,`a part read as a manual is listed under a section headed with its name, and "${o?.name}" has none`)}};s(jr,"LibraryBookSpecification");let X=jr;he([f("a book of this library holds only chapters")],X.prototype,"$holdsOnlyChapters",1);he([f("a book of this library has a place for every chapter it holds")],X.prototype,"$placesEveryChapter",1);he([f("only an ordinary chapter files a file")],X.prototype,"$onlyAChapterAppends",1);he([f("a part read as a manual is listed under a section headed with its name")],X.prototype,"$listsEachManualPart",1);const fi=r(J);r(fi,Pa)(Fi);r(fi,Ke)(li);var cp=Object.defineProperty,hp=Object.getOwnPropertyDescriptor,lp=s((c,e,t,o)=>{for(var a=hp(e,t),i=c.length-1,p;i>=0;i--)(p=c[i])&&(a=p(e,t,a)||a);return a&&cp(e,t,a),a},"__decorateClass$8");const Cr=class Cr extends J{constructor(){super(...arguments),this.specification=new Ee}get open(){return super.open??this.body[0]}head(){}switches(){}root(){}$Define(){super.$Define(),this.$is=[Ia,Wa]}$Bound(){const e=r(Ba);for(const t of this.table?.text.find(W)??[])t.annotations.add(this,n(e,{})),t.is(ye)&&(t.$is=[si]);super.$Bound()}};s(Cr,"$Manual");let Be=Cr;const Tr=class Tr extends X{$everyChapterHasABrief(e){l(e.chapters.every(t=>t.text.find(g).some(o=>o.is(ot))),"every chapter of a manual opens with a brief, and one here has none")}};s(Tr,"ManualSpecification");let Ee=Tr;lp([f("every chapter of a manual opens with a brief")],Ee.prototype,"$everyChapterHasABrief");const fp=r(Be);r(fp,Ke)(nn);const Or=class Or extends g{$Define(){super.$Define(),this.classes.add(this,"pd-action")}};s(Or,"$Action");let Hn=Or;const zr=class zr extends g{$Define(){super.$Define(),this.classes.add(this,"pd-result")}};s(zr,"$Result");let _n=zr;r(Hn);r(_n);var gp=Object.defineProperty,up=Object.getOwnPropertyDescriptor,mp=s((c,e,t,o)=>{for(var a=up(e,t),i=c.length-1,p;i>=0;i--)(p=c[i])&&(a=p(e,t,a)||a);return a&&gp(e,t,a),a},"__decorateClass$7");const bp='<svg viewBox="0 0 24 24"><path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4M9 12h6M9 16h6"/></svg>',wp='<svg viewBox="0 0 24 24"><path d="M8 7l-5 5 5 5M16 7l5 5-5 5M13 5l-2 14"/></svg>',re=s(c=>{const e=c.book;return e!==void 0&&"$shown"in e?e:void 0},"showingBook"),Pr=class Pr extends x{constructor(){super(...arguments),this.specification=new Ot}defines(e){e.classes.add(this,"pa-version")}erase(e){e.classes.revert(this)}};s(Pr,"$Version");let qn=Pr;const Ar=class Ar extends j{$saidOfAChapter(e){l(e instanceof C,"a version is said of a chapter, and this is not one")}};s(Ar,"VersionSpecification");let Ot=Ar;mp([f("a version is said of a chapter")],Ot.prototype,"$saidOfAChapter");const Dr=class Dr extends Qs{constructor(){super(...arguments),this.$artifact=void 0,this.$place=void 0}get version(){const e=this.$place;if(e!==void 0)return this.book.chapters.find(t=>Xs.slug(t.title?.name??"")===e)}get versionName(){return this.version?.title?.name??""}get name(){return this.versionName.replace(/ v\d+(?:-\d+)?$/u,"")||this.$identifier}get number(){return/ v(\d+)(?:-\d+)?$/u.exec(this.versionName)?.[1]??"1"}get kind(){const e=this.$type.replace(/^\./u,"");return e==="md"||e==="txt"||e===""?"document":e==="html"?"page":"code"}get shown(){return re(this)?.$shown===this}$Artifact(...e){this.$Code(...e),this.containers.replace(this,"pre","figure")}write(){const e=[...this.text].map((o,a)=>{const i=r(o);return n(i,{},a)}),t={__html:this.kind==="document"?bp:wp};return d(v,{children:[d("button",{type:"button",className:"pd-card","aria-pressed":this.shown,onClick:s(()=>this.press(),"onClick"),children:[n("span",{className:"pd-card-mark",dangerouslySetInnerHTML:t}),d("span",{className:"pd-card-words",children:[n("b",{children:this.name}),n("small",{children:`Click to open ${this.kind} · v${this.number}`})]})]}),n("figcaption",{children:e})]})}press(){const e=re(this);e!==void 0&&(e.$shown=e.$shown===this?void 0:this)}$Define(){super.$Define(),this.classes.add(this,"pd-artifact"),this.shown&&this.classes.add(this,"pa-open")}};s(Dr,"$Artifact");let Fe=Dr;const Rr=class Rr extends Qs{get sentence(){return T.copy(this.text)}get fileName(){return/“([^”]+)”/u.exec(this.sentence)?.[1]??"a file"}get extension(){return(this.fileName.split(".").pop()??"file").toUpperCase().slice(0,4)}get lineCount(){return this.names?this.contents.split(`
`).length:0}get shown(){return re(this)?.$shown===this}$Attachment(...e){this.$Code(...e),this.containers.replace(this,"pre","figure")}write(){const e=[...this.text].map((t,o)=>{const a=r(t);return n(a,{},o)});return d(v,{children:[d("button",{type:"button",className:"pd-chip","aria-pressed":this.shown,onClick:s(()=>this.press(),"onClick"),children:[n("span",{className:"pd-chip-mark",children:this.extension}),d("span",{className:"pd-chip-words",children:[n("b",{children:this.fileName}),n("small",{children:this.names?`${this.lineCount} lines`:"not carried by the export"})]})]}),n("figcaption",{children:e})]})}press(){const e=re(this);e!==void 0&&(e.$shown=e.$shown===this?void 0:this)}$Define(){super.$Define(),this.classes.add(this,"pd-attachment"),this.shown&&this.classes.add(this,"pa-open")}};s(Rr,"$Attachment");let He=Rr;r(qn);r(Fe);r(He);var kp=Object.defineProperty,yp=Object.getOwnPropertyDescriptor,vp=s((c,e,t,o)=>{for(var a=yp(e,t),i=c.length-1,p;i>=0;i--)(p=c[i])&&(a=p(e,t,a)||a);return a&&kp(e,t,a),a},"__decorateClass$6");const Sr=class Sr extends x{constructor(){super(...arguments),this.specification=new zt}get name(){return G.reference(T.copy(this.text))?.name??""}get means(){return this.annotations.expressed(za)}$Define(){super.$Define();const e=G.reference(T.copy(this.text));if(e===void 0)return;const t=r(O);this.annotations.add(this,n(t,{children:e.identifier}))}write(){return this.name}};s(Sr,"$Project");let _e=Sr;const Mr=class Mr extends j{$saidOfACover(e){l(e instanceof C&&e.is(N),"a project is said of a cover, and this is not one")}};s(Mr,"ProjectSpecification");let zt=Mr;vp([f("a project is said of a cover")],zt.prototype,"$saidOfACover");const Ir=class Ir extends g{get cover(){return this.$cover??this.book?.cover}get project(){return this.cover?.annotations.expressed(_e)}write(){const e=this.project,t=r(A),o=r(Oe),a=r(O);return d(v,{children:[d(t,{children:[n(o,{}),"project"]}),d(t,{children:[n(a,{children:e.means.identifier}),e.name]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-project-line")}};s(Ir,"$ProjectLine");let Un=Ir;r(_e);const $p=r(Un),Wr=class Wr extends g{constructor(){super(...arguments),this.style=z.div`
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
    `}get shown(){return re(this)?.$shown}get artifacts(){return this.book?.messages.flatMap(e=>e.text.find(Fe))??[]}$Pane(...e){this.$Writing(...e),this.containers.replace(this,"span",this.style)}neighbour(e,t){const o=Number(e.number)+t;return this.artifacts.find(a=>a.$artifact===e.$artifact&&Number(a.number)===o)}write(){const e=this.shown;if(e===void 0)return;const t=e instanceof Fe?e:void 0,o=e instanceof He?e:void 0,a=t?.version,i=a===void 0?void 0:r(a),p=t===void 0?void 0:this.neighbour(t,-1),w=t===void 0?void 0:this.neighbour(t,1),$=o===void 0?"":o.names?o.contents:"The export does not carry this upload; the name is all it kept.";return d(v,{children:[d("div",{className:"pd-pane-bar",children:[n("span",{className:"pd-pane-title",children:t?.name??o?.fileName}),n("span",{className:"pd-pane-kind",children:t?.kind??o?.extension.toLowerCase()}),n("button",{type:"button",className:"pd-pane-copy",onClick:s(m=>this.copy(m),"onClick"),children:"Copy"}),n("button",{type:"button",className:"pd-pane-close","aria-label":"close",onClick:s(()=>this.close(),"onClick"),children:"×"})]}),n("div",{className:"pd-pane-body",children:i===void 0?n("pre",{children:$}):n(i,{})}),t===void 0?void 0:d("div",{className:"pd-pane-foot",children:[d("span",{className:"pd-pane-version",children:[n("button",{type:"button",disabled:p===void 0,onClick:s(()=>this.show(p),"onClick"),children:"‹"}),n("span",{children:`v${t.number}`}),n("button",{type:"button",disabled:w===void 0,onClick:s(()=>this.show(w),"onClick"),children:"›"})]}),n("button",{type:"button",className:"pd-pane-download",onClick:s(()=>this.download(t),"onClick"),children:"Download"})]})]})}show(e){const t=re(this);t!==void 0&&e!==void 0&&(t.$shown=e)}close(){const e=re(this);e!==void 0&&(e.$shown=void 0)}copy(e){const t=e.currentTarget.closest(".pd-pane")?.querySelector(".pd-pane-body");navigator.clipboard?.writeText(t?.textContent??"")}download(e){const t=e.$type.replace(/^\./u,"")||"md",o=new Blob([e.contents],{type:"text/plain"}),a=document.createElement("a");a.href=URL.createObjectURL(o),a.download=`${e.name} v${e.number}.${t}`,a.click(),URL.revokeObjectURL(a.href)}$Define(){super.$Define(),this.classes.add(this,"pd-pane")}};s(Wr,"$Pane");let Gn=Wr;const xp=r(Gn);var jp=Object.defineProperty,Cp=Object.getOwnPropertyDescriptor,Tp=s((c,e,t,o)=>{for(var a=Cp(e,t),i=c.length-1,p;i>=0;i--)(p=c[i])&&(a=p(e,t,a)||a);return a&&jp(e,t,a),a},"__decorateClass$5");const Nr=class Nr extends x{constructor(){super(...arguments),this.specification=new Pt}get name(){return G.reference(T.copy(this.text))?.name??""}get means(){return this.annotations.expressed(za)}$Define(){super.$Define();const e=G.reference(T.copy(this.text));if(e===void 0)return;const t=r(O);this.annotations.add(this,n(t,{children:e.identifier}))}write(){return this.name}};s(Nr,"$Account");let qe=Nr;const Lr=class Lr extends j{$saidOfACover(e){l(e instanceof C&&e.is(N),"an account is said of a cover, and this is not one")}};s(Lr,"AccountSpecification");let Pt=Lr;Tp([f("an account is said of a cover")],Pt.prototype,"$saidOfACover");const Br=class Br extends g{get cover(){return this.$cover??this.book?.cover}get account(){return this.cover?.annotations.expressed(qe)}write(){const e=this.account,t=r(A),o=r(Oe),a=r(O);return d(v,{children:[d(t,{children:[n(o,{}),"account"]}),d(t,{children:[n(a,{children:e.means.identifier}),e.name]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-account-line")}};s(Br,"$AccountLine");let Vn=Br;r(qe);const Op=r(Vn),Er=class Er extends et{constructor(){super(...arguments),this.prose="'Source Serif 4', Georgia, serif",this.ink="#343c4a",this.heading="#1a1f36",this.soft="#727d8c",this.faint="#9ea8b5",this.line="#e4e9f2",this.paper="#ffffff",this.side="#f8f9fb",this.holdsColumn="240px",this.barHeight="52px",this.shadow="0 1px 2px rgba(43, 54, 60, 0.05), 0 6px 18px rgba(43, 54, 60, 0.05)",this.lift="0 2px 4px rgba(43, 54, 60, 0.06), 0 14px 32px rgba(43, 54, 60, 0.10)",this.barLight="#fcfcfd",this.barMid="#f8f9fc",this.barDeep="#f2f4f9",this.barShadow="0 1px 0 rgba(43, 54, 60, 0.05)",this.sideLight="#fafbfc",this.sideDeep="#f2f4f8",this.hairline="1px",this.stroke="2px"}parts(){return[...super.parts(),this.bands(),this.guide(),this.order(),this.surface(),this.entries(),this.small()]}bands(){return b`
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
        `}};s(Er,"$Typeset");let At=Er;const zp=r(At);var Pp=Object.defineProperty,Ap=Object.getOwnPropertyDescriptor,gi=s((c,e,t,o)=>{for(var a=Ap(e,t),i=c.length-1,p;i>=0;i--)(p=c[i])&&(a=p(e,t,a)||a);return a&&Pp(e,t,a),a},"__decorateClass$4");const Z=s(c=>c.annotations.expressed(Q)?.date?.date??"","dayOf"),Dt=s(c=>{const[e,t]=Z(c).split("-");return e===void 0||t===void 0?"":new Date(Date.UTC(Number(e),Number(t)-1,1)).toLocaleString("en-GB",{month:"long",year:"numeric",timeZone:"UTC"})},"monthOf"),Fr=class Fr extends x{constructor(){super(...arguments),this.specification=new V}defines(e){e.classes.add(this,"pa-newest-first")}erase(e){e.classes.revert(this)}};s(Fr,"$NewestFirst");let Rt=Fr;const Dp=r(Rt),ui=Dp,Hr=class Hr extends g{write(){const e=r(Da);return n(e,{annotation:ui,children:"newest first"})}$Define(){super.$Define(),this.classes.add(this,"pd-entry-order")}};s(Hr,"$EntryOrder");let Yn=Hr;const _r=class _r extends M{write(){return String(this.book.entries.indexOf(this.chapter)+1)}$Define(){super.$Define(),this.classes.add(this,"pd-entry-number")}};s(_r,"$EntryNumber");let Zn=_r;const qr=class qr extends xe{paging(){return b``}};s(qr,"$JournalLayout");let Qn=qr;const Rp=r(Yn),Sp=r(Zn),Mp=r(Qn),Ip=Rp,Wp=Sp,Ur=class Ur extends J{constructor(){super(...arguments),this.specification=new Ue}get latest(){return[...this.entries].sort((e,t)=>Z(t).localeCompare(Z(e)))[0]}get pages(){const e=[...this.entries].sort((t,o)=>Z(t).localeCompare(Z(o)));return this.is(Rt)?e.reverse():e}get open(){return super.open??this.latest}head(){}switches(){}turns(){}$Bound(){const e=r(Wp);for(const a of this.entries)a.text.add(this,n(e,{}));const t=this.table?.annotations.expressed(F);t!==void 0&&(t.$dated=!0);const o=r(Ip);this.table?.text.add(this,n(o,{})),this.$is=[ui],super.$Bound()}};s(Ur,"$Journal");let Xn=Ur;const Gr=class Gr extends X{$everyEntryIsDated(e){const t=e.entries.find(o=>!o.is(Q));l(t===void 0,`every entry of a journal is dated, and "${t?.title?.name}" is not`)}$everyEntrySaysItsMonth(e){const t=e.entries.find(o=>o.part?.name!==Dt(o));l(t===void 0,t===void 0?"":`every entry of a journal says the month of its date as its part, and "${t.title?.name}" says "${t.part?.name??"none"}" for ${Dt(t)}`)}};s(Gr,"JournalSpecification");let Ue=Gr;gi([f("every entry of a journal is dated")],Ue.prototype,"$everyEntryIsDated");gi([f("every entry of a journal says the month of its date as its part")],Ue.prototype,"$everyEntrySaysItsMonth");const Ha=r(Xn);r(Ha,Pa)(zp);r(Ha,Ke)(nn);r(Ha,Fa)(Mp);var Np=Object.defineProperty,Lp=Object.getOwnPropertyDescriptor,Bp=s((c,e,t,o)=>{for(var a=Lp(e,t),i=c.length-1,p;i>=0;i--)(p=c[i])&&(a=p(e,t,a)||a);return a&&Np(e,t,a),a},"__decorateClass$3");const Vr=class Vr extends x{constructor(){super(...arguments),this.specification=new St}get section(){return this.parent instanceof W?this.parent:void 0}get headings(){const e=this.section;return e===void 0?[]:e.text.find(Ks).filter(t=>t!==e.canonical)}defines(e){e.classes.add(this,"pa-opaque")}erase(e){e.classes.revert(this)}$Bound(){for(const e of this.headings){const t=e.annotations.expressed(Zt),o=e.annotations.expressed(Mi);for(const a of[t,o])a!==void 0&&e.annotations.remove(e,a)}super.$Bound()}};s(Vr,"$Opaque");let Kn=Vr;const Yr=class Yr extends j{$saidOfASection(e){l(e instanceof W,"opaque is said of a section, and this is not one")}};s(Yr,"OpaqueSpecification");let St=Yr;Bp([f("opaque is said of a section")],St.prototype,"$saidOfASection");const Ep=r(Kn);var Fp=Object.defineProperty,Hp=Object.getOwnPropertyDescriptor,ee=s((c,e,t,o)=>{for(var a=Hp(e,t),i=c.length-1,p;i>=0;i--)(p=c[i])&&(a=p(e,t,a)||a);return a&&Fp(e,t,a),a},"__decorateClass$2");const Zr=class Zr extends Ks{$Define(){super.$Define(),this.classes.add(this,"pd-speaker")}$Bound(){super.$Bound();const e=this.annotations.expressed(Zt);e!==void 0&&this.annotations.remove(this,e)}};s(Zr,"$Speaker");let Ge=Zr;const Qr=class Qr extends Oa{$Define(){super.$Define(),this.classes.add(this,"pd-time")}};s(Qr,"$Time");let Jn=Qr;const Xr=class Xr extends Ii{$Define(){super.$Define(),this.classes.add(this,"pd-participant")}};s(Xr,"$Participant");let Mt=Xr;const Kr=class Kr extends g{get participants(){return this.text.find(Mt)}write(){const e=this.participants;return e.flatMap((t,o)=>{const a=r(t);return[o===0?"":o===e.length-1?" and ":", ",n(a,{},o)]})}$Define(){super.$Define(),this.classes.add(this,"pd-participants")}};s(Kr,"$Participants");let It=Kr;r(Ge);const _p=r(Jn);r(Mt);r(It);const qp=_p,Up=s(c=>{const e=new Date(c);if(Number.isNaN(e.getTime()))return c;const t=e.toLocaleDateString("en-GB",{day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return`${e.toLocaleTimeString("en-GB",{hour:"2-digit",minute:"2-digit",timeZone:"UTC"})} UTC, ${t}`},"shownTime"),Jr=class Jr extends W{constructor(){super(...arguments),this.specification=new Ye,this.$at=void 0}get when(){return this.$at??""}get speaker(){return this.text.find(Ge)[0]}write(){const e=r(qp),t=this.speaker,o=t===void 0?void 0:r(t),a=[...this.text].filter(i=>i!==t);return d(v,{children:[o===void 0?void 0:n(o,{}),n(e,{children:`[${Up(this.when)}](${this.when})`}),n("div",{className:"pd-said",children:a.map((i,p)=>{const w=r(i);return n(w,{},p)})})]})}$Define(){super.$Define(),this.classes.add(this,"pd-message");const e=r(Ep);if(this.annotations.add(this,n(e,{})),this.when==="")return;const t=this.speaker,o=t===void 0?"":G.reference(T.copy(t.text))?.name??T.copy(t.text),a=r(Wi);this.annotations.add(this,n(a,{children:Xs.slug(`${this.when.replace(/Z$/u,"")} ${o}`)}))}$Bound(){const e=this.book?.author?.means?.identifier;if(e!==void 0&&this.speaker?.means?.identifier===e){const t=r(Vp);this.annotations.add(this,n(t,{}))}super.$Bound()}};s(Jr,"$Message");let E=Jr;const es=class es extends x{constructor(){super(...arguments),this.specification=new Nt}defines(e){e.classes.add(this,"pa-mine")}erase(e){e.classes.revert(this)}};s(es,"$Mine");let Wt=es;const ts=class ts extends j{$saidOfAMessage(e){l(e instanceof E,"mine is said of a message, and this is not one")}};s(ts,"MineSpecification");let Nt=ts;ee([f("mine is said of a message")],Nt.prototype,"$saidOfAMessage");const Gp=r(Wt),Vp=Gp,ns=class ns extends x{constructor(){super(...arguments),this.specification=new Bt}defines(e){e.classes.add(this,"pa-quoted")}erase(e){e.classes.revert(this)}};s(ns,"$Quoted");let ea=ns;const as=class as extends x{constructor(){super(...arguments),this.specification=new Et}defines(e){e.classes.add(this,"pa-verbatim")}erase(e){e.classes.revert(this)}};s(as,"$Verbatim");let ta=as;const os=class os extends x{constructor(){super(...arguments),this.specification=new Ze,this.$from=void 0,this.$to=void 0}get from(){return this.$from??""}get to(){return this.$to??""}defines(e){e.classes.add(this,"pa-period")}erase(e){e.classes.revert(this)}};s(os,"$Period");let Lt=os;const rs=class rs extends x{constructor(){super(...arguments),this.specification=new Ze,this.$shown=void 0,this.$all=void 0}get shown(){return Number(this.$shown??0)}get all(){return Number(this.$all??0)}get aside(){return this.all-this.shown}defines(e){e.classes.add(this,"pa-messages")}erase(e){e.classes.revert(this)}};s(rs,"$Messages");let Ve=rs;const ss=class ss extends Ni{$saysWhen(e){l(e.when!==""&&!Number.isNaN(Date.parse(e.when)),"a message says when it was said, as an instant the machine can read, and this one does not")}$headedByItsSpeaker(e){l(e.canonical instanceof Ge,"a message is headed by its speaker, a heading that refers to them, and this one is not")}};s(ss,"MessageSpecification");let Ye=ss;ee([f("a message says when it was said")],Ye.prototype,"$saysWhen");ee([f("a message is headed by its speaker")],Ye.prototype,"$headedByItsSpeaker");const is=class is extends j{$saidOfAParagraph(e){l(e instanceof g,"this is said of a paragraph, and this is not one")}};s(is,"OfAParagraphSpecification");let Bt=is;ee([f("this is said of a paragraph")],Bt.prototype,"$saidOfAParagraph");const ds=class ds extends j{$saidOfACover(e){l(e instanceof C&&e.is(N),"this is said of a cover, and this is not one")}};s(ds,"OfACoverSpecification");let Ze=ds;ee([f("this is said of a cover")],Ze.prototype,"$saidOfACover");const ps=class ps extends j{$saidOfAWord(e){l(e instanceof M,"verbatim is said of a word, and this is not one")}};s(ps,"VerbatimSpecification");let Et=ps;ee([f("verbatim is said of a word")],Et.prototype,"$saidOfAWord");r(E);r(ea);r(ta);r(Lt);r(Ve);const Gs=s(c=>c===void 0||c===""?"":new Date(c).toLocaleDateString("en-GB",{day:"numeric",month:"long",year:"numeric",timeZone:"UTC"}),"dayWords"),cs=class cs extends g{write(){const e=this.book,t=e.messageCount?.shown??e.messages.length,o=new Set(e.messages.map(p=>p.when.slice(0,10))).size,a=Gs(e.period?.from),i=Gs(e.period?.to);return d(v,{children:[d("span",{className:"pd-tally-count",children:[n("b",{children:t}),o===1?" messages in ":" messages over ",n("b",{children:o}),o===1?" day":" days"]}),n("span",{className:"pd-tally-period",children:a===i?a:`${a} to ${i}`})]})}$Define(){super.$Define(),this.classes.add(this,"pd-tally")}};s(cs,"$Tally");let na=cs;const hs=class hs extends M{write(){return String(this.$entry?.text.find(E).length??0)}$Define(){super.$Define(),this.classes.add(this,"pd-day-count")}};s(hs,"$DayCount");let aa=hs;const Yp=r(na),Zp=r(aa),Qp=Yp,Xp=Zp,ls=class ls extends J{constructor(){super(...arguments),this.specification=new Ce}get participants(){return this.cover?.text.find(It)[0]?.participants??[]}get period(){return this.cover?.annotations.expressed(Lt)}get messageCount(){return this.cover?.annotations.expressed(Ve)}get messages(){return this.body.flatMap(e=>e.text.find(E))}get pages(){return[...[...this.body].sort((t,o)=>Z(t).localeCompare(Z(o))),...this.appendix]}get open(){return super.open??this.pages[0]}head(){const e=r(Qp);return d(v,{children:[super.head(),n(e,{chapter:this.cover})]})}$Bound(){const e=r(Xp);for(const t of this.table?.annotations.expressed(F)?.entries??[]){const o=B(t)?.identifier,a=o===void 0?void 0:this.chapterAt(o);a===void 0||!this.body.includes(a)||t.text.add(this,n(e,{entry:a}))}super.$Bound()}};s(ls,"$Conversation");let Ft=ls;const fs=class fs extends X{$saysItsParticipantsPeriodAndCount(e){l(e.participants.length>0&&e.period!==void 0&&e.messageCount!==void 0,"a conversation says its participants, its period and how many messages it holds, on its cover, and this one says less")}$everyMessageIsAddressed(e){const t=e.messages.find(o=>o.annotations.expressed(Zt)===void 0);l(t===void 0,`every message of a conversation is addressed by its time, and the one at "${t?.when}" is not`)}$everyChapterHoldsAMessage(e){const t=e.body.find(o=>o.text.find(E).length===0);l(t===void 0,`every chapter of a conversation holds a message, and "${t?.title?.name}" holds none`)}};s(fs,"ConversationSpecification");let Ce=fs;ee([f("a conversation says its participants, its period and how many messages it holds")],Ce.prototype,"$saysItsParticipantsPeriodAndCount");ee([f("every message of a conversation is addressed by its time")],Ce.prototype,"$everyMessageIsAddressed");ee([f("every chapter of a conversation holds a message")],Ce.prototype,"$everyChapterHoldsAMessage");r(Ft);var Kp=Object.defineProperty,Jp=Object.getOwnPropertyDescriptor,ec=s((c,e,t,o)=>{for(var a=Jp(e,t),i=c.length-1,p;i>=0;i--)(p=c[i])&&(a=p(e,t,a)||a);return a&&Kp(e,t,a),a},"__decorateClass$1");const gs=class gs extends x{constructor(){super(...arguments),this.specification=new Ht}get uuid(){return T.copy(this.text).trim()}write(){return null}};s(gs,"$Origin");let Qe=gs;const us=class us extends j{$saidOfACoverOrAMessage(e){l(e instanceof C&&e.is(N)||e instanceof E,"an origin is said of a cover or a message, and this is neither")}};s(us,"OriginSpecification");let Ht=us;ec([f("an origin is said of a cover or a message")],Ht.prototype,"$saidOfACoverOrAMessage");r(Qe);const ms=class ms extends At{constructor(){super(...arguments),this.sans="'Inter', system-ui, sans-serif",this.mono="ui-monospace, 'Cascadia Code', Consolas, monospace",this.keyword="#1f5fbf",this.string="#9a3b1e",this.type="#116b4a",this.comment="#7a8491"}parts(){return[...super.parts(),this.surfaces(),this.top(),this.rows(),this.openDay(),this.exchanges(),this.said(),this.cards(),this.paneColumn(),this.phone()]}surfaces(){return b`
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
        `}top(){return b`
            .pd-book .pd-head .pd-switches, .pd-book .pd-head .pa-illustration { display: none; }
            .pd-book .pd-head .pd-title { font-family: ${({theme:e})=>e.serif}; font-size: 30px; font-weight: 600; line-height: 1.1; letter-spacing: -.01em; }
            .pd-book .pd-head .pd-participants { display: flex; gap: 6px; align-items: center; margin: 6px 0 0; font-family: ${({theme:e})=>e.sans}; font-size: 13px; color: ${({theme:e})=>e.soft}; }
            .pd-book .pd-head .pd-participants::before { content: 'between'; }
            .pd-book .pd-head .pd-participants .pa-reference { color: ${({theme:e})=>e.ink}; font-weight: 500; text-decoration: none; }
            .pd-book .pd-head .pd-participants .pa-reference:hover { color: ${({theme:e})=>e.accent}; }
            .pd-book .pd-head .pd-tally { display: flex; flex-wrap: wrap; gap: 4px 16px; margin: 6px 0 0; font-family: ${({theme:e})=>e.sans}; font-size: 12.5px; color: ${({theme:e})=>e.soft}; }
            .pd-book .pd-head .pd-tally b { color: ${({theme:e})=>e.ink}; font-weight: 500; }
        `}rows(){return b`
            .pd-book .pd-holds .pd-chapter { display: flex; flex-direction: column; }
            .pd-book .pd-holds .pd-section.pa-appendix { display: none; }
            .pd-book .pd-holds .pd-section > .pd-heading { margin: 0 0 4px 18px; font-family: ${({theme:e})=>e.sans}; font-size: 10.5px; font-weight: 600; line-height: 1.4; letter-spacing: .12em; text-transform: uppercase; color: ${({theme:e})=>e.faint}; }
            .pd-book .pd-holds .pd-paragraph.pa-entry { display: flex; align-items: center; gap: 9px; padding: 6px 18px 6px 16px; font-family: ${({theme:e})=>e.sans}; font-size: 13px; color: ${({theme:e})=>e.ink}; }
            .pd-book .pd-holds .pd-paragraph.pa-entry::before { content: ''; flex: none; width: 7px; height: 7px; border-radius: 50%; background: ${({theme:e})=>e.sea}; }
            .pd-book .pd-holds .pd-paragraph.pa-entry .pd-day-count { margin-inline-start: auto; font-size: 11px; color: ${({theme:e})=>e.faint}; }
            .pd-book .pd-holds .pd-paragraph.pa-entry:hover { background: #f8fafc; }
            .pd-book .pd-holds .pd-paragraph.pa-entry.pa-open { background: linear-gradient(90deg, #eff4fa, #f8fafd); color: ${({theme:e})=>e.heading}; font-weight: 500; }
            ${this.sideIndex()}
        `}sideIndex(){return b`
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
        `}openDay(){return b`
            .pd-book .pd-pages .pd-chapter.pa-page { width: 100%; max-width: 768px; margin: 0 auto; }
            .pd-book .pd-pages .pa-page > .pd-title, .pd-book .pd-pages .pa-page > a.pa-self-reference .pd-title { margin: 0 0 22px; font-family: ${({theme:e})=>e.sans}; font-size: 11.5px; font-weight: 600; line-height: 1.4; letter-spacing: .14em; text-transform: uppercase; color: ${({theme:e})=>e.faint}; }
            .pd-book .pd-pages .pd-turn, .pd-book .pd-pages .pa-page > .pd-word.pd-date { display: none; }
        `}exchanges(){return b`
            .pd-book .pd-pages .pd-message { position: relative; display: block; margin: 0 0 28px; }
            .pd-book .pd-pages .pd-message > .pa-self-reference, .pd-book .pd-pages .pd-message .pd-heading.pd-speaker { display: none; }
            .pd-book .pd-pages .pd-message > .pd-word.pd-time { position: absolute; top: -17px; left: 0; display: block; width: auto; margin: 0; font-family: ${({theme:e})=>e.sans}; font-size: 11px; font-weight: 500; line-height: 1; color: ${({theme:e})=>e.faint}; opacity: 0; transition: opacity .15s; }
            .pd-book .pd-pages .pd-message > .pd-word.pd-time::before { content: none; }
            .pd-book .pd-pages .pd-message.pa-mine > .pd-word.pd-time { left: auto; right: 0; }
            .pd-book .pd-pages .pd-message:hover > .pd-word.pd-time { opacity: 1; }
            .pd-book .pd-pages .pd-message > .pd-said { display: flex; flex-direction: column; gap: 10px; min-width: 0; overflow-wrap: anywhere; }
            .pd-book .pd-pages .pd-message.pa-mine > .pd-said { margin-inline-start: auto; width: fit-content; max-width: 78%; padding: 12px 16px; border-radius: 12px; background: rgba(11, 11, 11, .05); gap: 8px; }
        `}said(){return b`
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
        `}cards(){return b`
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
        `}paneColumn(){return b`
            .pd-book.pa-layout:has(> .pd-pane > .pd-pane-bar) {
                grid-template-columns: ${({theme:e})=>e.holdsColumn} minmax(0, 1fr) minmax(0, 1fr);
                grid-template-areas: 'library library library' 'holds head pane' 'holds pages pane';
            }
            ${this.strip()}
        `}strip(){return b`
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
        `}phone(){return b`
            @media (max-width: ${({theme:e})=>e.narrow}) {
                .pd-book .pd-pages .pd-message.pa-mine > .pd-said { max-width: 92%; }
                .pd-book .pd-head .pd-title { font-size: 24px; }
                .pd-book.pa-layout:has(> .pd-pane > .pd-pane-bar) { grid-template-columns: minmax(0, 1fr); grid-template-areas: 'library' 'head' 'pages'; }
            }
        `}};s(ms,"$ApplicationForm");let oa=ms;const tc=r(oa),nc='<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linejoin="round" stroke-linecap="round"><path d="M4 1.5h5.5L13 5v9.5H4z"/><path d="M9.5 1.5V5H13M6 8h4M6 10.5h4"/></svg>',bs=class bs extends g{$Outline(...e){this.$Writing(...e),this.containers.replace(this,"span","div")}write(){const e=this.book,t=this.$asked;if(e===void 0||t===void 0)return;const o=r(A),a=r(O),i=t.text.find(E).filter(p=>p.is(Wt));if(i.length!==0)return n("ol",{className:"pd-asked",children:i.map((p,w)=>{const $=e.placeOf(p),m=e.wordsOf(p).text;return n("li",{children:$===void 0?m:d(o,{children:[n(a,{children:$}),m]})},w)})})}$Define(){super.$Define(),this.classes.add(this,"pd-outline")}};s(bs,"$Outline");let ra=bs;const ws=class ws extends ge{get on(){return this.$attachment?.shown===!0}press(){this.$attachment?.press()}write(){const e=this.$attachment;if(e!==void 0)return d(v,{children:[n("span",{className:"pd-drawing",dangerouslySetInnerHTML:{__html:nc}}),n("span",{className:"pd-tab-name",children:e.fileName}),n("small",{children:e.names?`${e.lineCount} lines`:"not carried"})]})}$Define(){super.$Define(),this.classes.add(this,"pd-file-tab")}};s(ws,"$AttachmentTab");let sa=ws;const ac=r(ra),oc=r(sa),rc=ac,sc=oc,mi="library-trail",bi=s(()=>{try{const c=typeof localStorage>"u"?null:localStorage.getItem(mi);if(c===null)return;const e=JSON.parse(c);return e.from?.marking===void 0?void 0:e}catch{return}},"keptTrail"),ks=class ks extends xt{constructor(){super(...arguments),this.$marking={drawing:"",declarations:""}}get marking(){return this.$marking}};s(ks,"$TrailMark");let ia=ks;const ys=class ys extends g{get conversation(){return this.book}$ProjectStrip(...e){this.$Writing(...e),this.containers.replace(this,"span","div")}write(){const e=this.conversation,t=e?.$trail;if(e===void 0||t===void 0)return;const o=r(A),a=r(O),i=r(pc);return d(v,{children:[n(i,{marking:t.from.marking,children:n(a,{children:t.from.href})}),d("span",{className:"pd-strip-words",children:[d(o,{children:[n(a,{children:t.from.href}),t.from.title]}),n("span",{className:"pd-strip-place",children:`${t.within.index} of ${t.within.of}`})]}),d("span",{className:"pd-strip-neighbours",children:[t.within.prev===void 0?void 0:d(o,{children:[n(a,{children:t.within.prev.href}),`‹ ${t.within.prev.title}`]}),t.within.next===void 0?void 0:d(o,{children:[n(a,{children:t.within.next.href}),`${t.within.next.title} ›`]})]}),t.word===""?void 0:n("span",{className:"pd-strip-word",children:`you were searching “${t.word}”`}),d(o,{children:[n(a,{children:t.from.href}),"back to where I was"]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-project-strip")}};s(ys,"$ProjectStrip");let da=ys;const ic=r(ia),dc=r(da),pc=ic,cc=dc,vs=class vs extends Ft{constructor(){super(...arguments),this.$shown=void 0,this.$trail=void 0}arrive(){const e=bi();e===void 0||e.to!==this.means?.identifier||this.$trail?.at===e.at||(this.$trail=e)}turn(){super.turn(),this.arrive()}get project(){return this.cover?.annotations.expressed(_e)}get account(){return this.cover?.annotations.expressed(qe)}get origin(){return this.cover?.annotations.expressed(Qe)?.uuid}get subjectCover(){return this.coverOf(this.project?.means?.identifier)??super.subjectCover}get index(){return this.table?.annotations.expressed(F)}get searchHint(){return"a word in this conversation"}wordsOf(e){if(!(e instanceof E))return super.wordsOf(e);const t=this._words?.get(e);if(t!==void 0)return t;const o=e.speaker,a=o===void 0?"":G.reference(T.copy(o.text))?.name??T.copy(o.text),i=[...e.text].filter(w=>w!==o).map(w=>T.copy(w.text).replace(/\s+/gu," ").trim()).filter(w=>w!=="").join(" "),p={title:a,text:i,lower:`${a} ${i}`.toLowerCase()};return(this._words??=new Map).set(e,p),p}found(e){const t=e.trim().toLowerCase();return t===""?[]:this.messages.filter(o=>this.wordsOf(o).lower.includes(t))}countOfFound(e,t){return d(v,{children:[n("b",{children:e.length})," ",e.length===1?"message says":"messages say"," “",t,"”"]})}placeOf(e){if(!(e instanceof E))return super.placeOf(e);const t=e.annotations.expressed(Zt)?.identifier;return t===void 0?void 0:this.placeWithin(`#${t}`)}sought(e){if(typeof CSS>"u"||!("highlights"in CSS)||typeof document>"u")return;const t=CSS.highlights;if(e===""){t.delete("pd-found");return}const o=[],a=e.toLowerCase(),i=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,{acceptNode:s(w=>w.parentElement?.closest(".pd-pages .pd-said")?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT,"acceptNode")});for(let w=i.nextNode();w!==null;w=i.nextNode()){const $=w.nodeValue?.toLowerCase()??"";for(let m=$.indexOf(a);m!==-1;m=$.indexOf(a,m+a.length))o.push(new StaticRange({startContainer:w,startOffset:m,endContainer:w,endOffset:m+e.length}))}const p=globalThis.Highlight;t.set("pd-found",new p(...o))}holds(){const e=r(ai),t=r(oi),o=r(rc),a=this.open;return d(v,{children:[n(e,{chapter:this.table}),n(t,{chapter:this.table}),super.holds(),a===void 0||!this.body.includes(a)?void 0:n(o,{chapter:this.table,asked:a},a.mention?.identifier)]})}write(){const e=r(xp),t=r(cc);return d(v,{children:[super.write(),n(t,{chapter:this.cover}),n(e,{chapter:this.cover})]})}$Bound(){const e=this.index;e!==void 0&&(e.$folded=!0,e.$counted=!0,e.$searched=!0);const t=r(Ba);for(const a of this.table?.text.find(W)??[])a.is(ye)||a.annotations.add(this,n(t,{}));const o=r(sc);for(const a of e?.entries??[]){const i=B(a)?.identifier,p=i===void 0?void 0:this.chapterAt(i);if(p===void 0||!this.body.includes(p))continue;const w=p.text.find(E).flatMap($=>$.text.find(He)).filter($=>$.names);w.length!==0&&a.text.add(this,...w.map(($,m)=>n(o,{attachment:$},m)))}super.$Bound()}me(){const e=r($p),t=r(Op);return d(v,{children:[super.me(),this.project===void 0?void 0:n(e,{cover:this.cover}),this.account===void 0?void 0:n(t,{cover:this.cover})]})}};s(vs,"$ClaudeConversation");let pa=vs;const wi=r(pa);r(wi,Pa)(tc);r(wi,Ke)(nn);var hc=Object.defineProperty,lc=Object.getOwnPropertyDescriptor,an=s((c,e,t,o)=>{for(var a=o>1?void 0:o?lc(e,t):e,i=c.length-1,p;i>=0;i--)(p=c[i])&&(a=(o?p(e,t,a):p(a))||a);return o&&a&&hc(e,t,a),a},"__decorateClass");const $s=class $s extends x{constructor(){super(...arguments),this.specification=new V}defines(e){e.classes.add(this,"pa-synopses")}erase(e){e.classes.revert(this)}};s($s,"$Synopses");let ca=$s;const fc=r(ca),gc=fc,xs=class xs extends g{write(){const e=r(Da);return n(e,{annotation:gc,children:"with the synopsis"})}$Define(){super.$Define(),this.classes.add(this,"pd-row-form")}};s(xs,"$RowForm");let ha=xs;const js=class js extends M{write(){return`${this.chapter?.annotations.expressed(_)?.cover?.annotations.expressed(Ve)?.shown??0} exchanges`}$Define(){super.$Define(),this.classes.add(this,"pd-entry-count")}};s(js,"$EntryCount");let la=js;const Cs=class Cs extends M{write(){return Dt(this.chapter)}$Define(){super.$Define(),this.classes.add(this,"pd-entry-month")}};s(Cs,"$EntryMonth");let fa=Cs;const Ts=class Ts extends g{get project(){return this.book}$ProjectHead(...e){this.$Writing(...e),this.containers.replace(this,"span","div")}write(){const e=this.project;if(e===void 0)return;const t=r(A),o=r(O),a=e.coverOf(e.subject?.means?.identifier);if(a?.mention!==void 0)return n("span",{className:"pd-crumbs",children:d(t,{children:[n(o,{children:a.mention.identifier}),a.title?.name]})})}$Define(){super.$Define(),this.classes.add(this,"pd-project-head")}};s(Ts,"$ProjectHead");let ga=Ts;const Os=class Os extends g{constructor(){super(...arguments),this.style=z.div`
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
    `}get project(){return this.book}$Knowledge(...e){this.$Writing(...e),this.containers.replace(this,"span",this.style)}write(){const e=this.project;if(e===void 0)return;const t=r(A),o=r(O),a='<svg viewBox="0 0 16 16"><path d="M4 1.5h5.5L13 5v9.5H4z"/><path d="M9.5 1.5V5H13M6 8h4M6 10.5h4"/></svg>';return d(v,{children:[d("span",{className:"pd-knowledge-row",children:["Files",n("small",{children:e.files.length}),n("span",{className:"pd-at-right",children:"as uploaded"})]}),n("span",{className:"pd-knowledge-files",children:e.files.map((i,p)=>d("span",{className:"pd-knowledge-file",children:[n("span",{className:"pd-drawing",dangerouslySetInnerHTML:{__html:a}}),d(t,{children:[n(o,{children:i.mention.identifier}),i.title?.name]}),n("span",{className:"pd-file-type",children:(i.annotations.find(se)[0]?.$type??"").replace(/^\./u,"")})]},p))})]})}$Define(){super.$Define(),this.classes.add(this,"pd-knowledge")}};s(Os,"$Knowledge");let ua=Os;const zs=class zs extends xe{paging(){return b`
            .pd-book.pa-turned .pa-page:not(.pa-open) { display: none; }
            .pd-book:not(.pa-turned) .pa-page.pa-spread { display: none; }
        `}areas(){return b`
            ${super.areas()}
            .pd-book.pa-layout:not(.pa-turned) .pd-head { display: grid; gap: calc(${({theme:e})=>e.space} / 4); align-content: end; padding: calc(${({theme:e})=>e.space} * 0.9167) calc(${({theme:e})=>e.space} * 1.5) calc(${({theme:e})=>e.space} * 0.5833); }
            .pd-book.pa-layout.pa-turned .pd-head { display: none; }
            .pd-book:not(.pa-turned) .pd-holds { padding-block-start: calc(${({theme:e})=>e.space} * 0.4167); }
            ${this.head()}
            ${this.list()}
            ${this.search()}
        `}search(){return b`
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
        `}head(){return b`
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
        `}list(){return b`
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
        `}};s(zs,"$ListLayout");let _t=zs;const Ps=class Ps extends _t{areas(){return b`
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
        `}};s(Ps,"$ProjectLayout");let ma=Ps;const uc=s((c,e,t=La,o=!0)=>{const a=r(jc),i=r(Cc),p=r(t),w=r(O);let $="";for(const m of e){const P=Dt(m),te=m.annotations.expressed(_)?.cover?.mention?.identifier;m.text.add(c,...o&&P!==$?[n(i,{},"month")]:[],n(a,{},"count"),...te===void 0?[]:[n(p,{entry:m,children:n(w,{children:te})},"open")]),$=P}},"rows"),As=class As extends Be{constructor(){super(...arguments),this.specification=new Te}$Define(){super.$Define(),this.$is=[be,Wa]}get entries(){return this._entries??(this._entries=this.text.find(C).filter(e=>e.is(Je)&&e!==this.synopsis))}get files(){return this.chapters.filter(e=>e.is(L)&&e.is(se))}get project(){return this.chapters.find(e=>e.is(L)&&!e.is(se))}get laidOutChapters(){return[...super.laidOutChapters,...this.entries]}get pages(){const e=[...this.entries].sort((t,o)=>Z(o).localeCompare(Z(t)));return[...super.pages,...e]}get open(){return this.$bookmark===void 0?void 0:this.chapterAt(this.$bookmark)}get index(){return this.table?.annotations.expressed(F)}get searchHint(){return"a word in this project, its conversations and its files"}found(e){const t=e.trim().toLowerCase();if(t==="")return[];const o=this.pages.filter(i=>this.entries.includes(i)&&this.wordsOf(i).lower.includes(t)),a=this.files.filter(i=>(i.title?.name??"").toLowerCase().includes(t));return[...o,...a]}placeOf(e){return e.annotations.expressed(_)?.cover?.mention?.identifier??super.placeOf(e)}countOfFound(e,t){const o=e.filter(i=>this.files.includes(i)).length,a=e.length-o;return d(v,{children:[n("b",{children:a})," of ",this.entries.length," conversations and ",n("b",{children:o})," of ",this.files.length," files say “",t,"”"]})}aboveThePages(){const e=r(oi);return n(e,{chapter:this.table})}write(){const e=r(Oc);return d(v,{children:[super.write(),n("div",{className:"pd-knowledge-column",children:n(e,{chapter:this.cover})})]})}head(){const e=r(this.cover),t=r(Tc),o=r(xc),a=r(ai);return d(v,{children:[n(e,{}),n(t,{chapter:this.cover}),n(o,{chapter:this.cover}),n(a,{chapter:this.cover})]})}rows(e,t=La){uc(this,e,t,!1);const o=r(ri);for(const a of e)a.text.add(this,n(o,{entry:a},"day"))}$Bound(){this.rows(this.pages.filter(o=>this.entries.includes(o)));const e=this.index;e!==void 0&&(e.$folded=!0,e.$counted=!0,e.$dated=!0,e.$searched=!0),super.$Bound();const t=this.table?.text.find(W).find(o=>o.canonical?.name==="Its conversations");if(t!==void 0){const o=s(i=>{const p=this.chapterAt(B(i)?.identifier??"");return p===void 0?0:Date.parse(Z(p))},"dayOfRow"),a=t.text.find(g).sort((i,p)=>o(p)-o(i));for(const i of a)t.text.remove(this,i);t.text.append(this,...a)}}};s(As,"$ProjectManual");let Xe=As;an([Vt()],Xe.prototype,"_entries",2);const Ds=class Ds extends Ee{$everyEntryStandsForAConversation(e){const t=e.entries.find(o=>o.annotations.expressed(Je)?.means===void 0);l(t===void 0,`every entry of a project manual stands for a conversation, holding its synopsis, and "${t?.title?.name}" stands for none`)}$hasOneProjectChapter(e){l(e.chapters.filter(t=>t.is(L)&&!t.is(se)).length===1,"a project manual has one chapter about the project, which appends no file, and this one has none or more than one")}$onlyAChapterAppends(e){const t=[...e.chapters,...e.entries];l(e.text.find(C).every(o=>t.includes(o)||!o.is(se)),"only an ordinary chapter or an entry files a file, and here a cover, a synopsis or a table of contents files one")}};s(Ds,"ProjectManualSpecification");let Te=Ds;an([f("every entry of a project manual stands for a conversation, holding its synopsis")],Te.prototype,"$everyEntryStandsForAConversation",1);an([f("a project manual has one chapter about the project, which appends no file")],Te.prototype,"$hasOneProjectChapter",1);an([f("an entry of a project manual files a file only when a chapter may")],Te.prototype,"$onlyAChapterAppends",1);const mc=r(ha),bc=r(la),wc=r(fa),kc=r(ga),yc=r(ua);r(_t);const vc=r(ma),$c=r(Xe),xc=mc,jc=bc,Cc=wc,Tc=kc,Oc=yc;r($c,Fa)(vc);const Rs=class Rs extends M{write(){if(this.$href!==void 0)return n("a",{className:"pd-way-on-link",href:this.$href,target:"_blank",rel:"noopener","aria-label":"in Claude",title:"in Claude",children:"↗"})}$Define(){super.$Define(),this.classes.add(this,"pd-way-on")}};s(Rs,"$WayOn");let ba=Rs;const Ss=class Ss extends ct{container(e){return super.container({...e,onClick:s(()=>this.keep(),"onClick")})}keep(){const e=this.book,t=this.$entry instanceof C?this.$entry:this.chapter;if(e===void 0||t===void 0||typeof localStorage>"u")return;const o=e.pages.filter($=>e.entries.includes($)),a=o.indexOf(t),i=s($=>{const m=$?.annotations.expressed(_)?.cover?.mention?.identifier;return $===void 0||m===void 0?void 0:{title:$.title?.name??"",href:m}},"placeOf"),p=e.means?.identifier??"",w={at:new Date().toISOString(),from:{page:p,title:e.title?.name??"",href:p,marking:pi(e.cover)},to:i(t)?.href,within:{title:e.title?.name??"",index:a+1,of:o.length,prev:i(o[a-1]),next:i(o[a+1])},word:e.index?.word??"",row:t.mention?.identifier};try{localStorage.setItem(mi,JSON.stringify(w))}catch{return}}};s(Ss,"$ProjectEntryOpen");let wa=Ss;const Ms=class Ms extends ni{get project(){return this.book}get returned(){const e=this.project,t=this.$hit;return e!==void 0&&t!==void 0&&e.$trail!==void 0&&e.$trail.to===e.placeOf(t)}$ProjectResult(...e){this.$Result(...e),this[ji]("layout").then(()=>{this.returned&&this.project?.land()})}container(e){return super.container(this.returned?{...e,className:`${e.className??""} pa-returned`}:e)}open(){return ki}};s(Ms,"$ProjectResult");let ka=Ms;const Is=class Is extends pt{result(e,t){const o=r(Sc);return n(o,{chapter:this.chapter,hit:e},this.book.placeOf(e)??t)}};s(Is,"$ProjectResults");let ya=Is;const Ws=class Ws extends Xe{constructor(){super(...arguments),this.$trail=void 0}aboveThePages(){const e=r(Mc);return n(e,{chapter:this.table})}rows(e){super.rows(e,ki);const t=r(Rc);for(const o of e){const a=o.annotations.expressed(_)?.cover?.annotations.expressed(Qe)?.uuid;a!==void 0&&o.text.add(this,n(t,{href:`https://claude.ai/chat/${a}`}))}}arrive(){const e=bi();if(e===void 0||e.from.page!==this.means?.identifier||this.$trail?.at===e.at)return;this.$trail=e,e.word!==""&&this.index?.search(e.word);const t=e.row===void 0?void 0:this.chapterAt(e.row);t!==void 0&&t.classes.add(this,"pa-returned"),t!==void 0&&e.word===""&&this.land(t)}land(e){const t=e?.title;(e===void 0?document.querySelector(".pd-book .pd-result.pa-returned"):t===void 0?null:document.getElementById(String(t.id))?.closest(".pd-chapter"))?.scrollIntoView({block:"center"})}turn(){super.turn(),this.arrive()}};s(Ws,"$ClaudeProjectManual");let va=Ws;const zc=r(ba),Pc=r(wa),Ac=r(ka),Dc=r(ya);r(va);const Rc=zc,ki=Pc,Sc=Ac,Mc=Dc,Ns=class Ns extends Be{};s(Ns,"$ClaudesReferenceManual");let $a=Ns;const Ls=class Ls extends Re{constructor(){super(...arguments),this.style=z.header`
        .pd-chapter.pa-cover { margin-block: 0; }
        .pa-cover .pd-title {
            font-size: calc(1.04 * ${({theme:e})=>e.size});
            font-weight: 600;
        }
    `}};s(Ls,"$ManualCover");let xa=Ls;const Bs=class Bs extends ne{constructor(){super(...arguments),this.style=z.nav`
        .pa-table-of-contents .pa-reference { color: inherit; text-decoration: none; }
    `}};s(Bs,"$ManualTableOfContents");let ja=Bs;const Ic=r(xa);r(ja);const yi=s(()=>d(R,{children:[n(ci,{}),n(en,{ground:"#eef5f6",band:"#c3e3e6",bandInk:"#1c565c",foot:"#8db9bd",footInk:"#153e43",ink:"#1f5a60"}),n(tn,{x:"-46",y:"-13"}),n(S,{children:"[Dougs Library](/dougs-library/)"}),n(Qt,{children:"[Doug](/dougs-story/)"}),n(Xt,{children:"[Library](/dougs-library/)"}),n(Aa,{children:"[The Library](/dougs-library/)"}),d(h,{children:[n(Jt,{}),n(Kt,{children:`<svg viewBox="0 0 64 64" class="pd-illustration"><path class="light" d="M9 7h46v50H9z"/><path d="M9 7h46v50H9zM9 24h46M9 41h46"/><path class="fill" d="M13 11h5v13h-5zM20 9h4v15h-4zM26 13h6v11h-6zM34 10h4v14h-4zM40 14h6v10h-6z"/><path d="M48 24l4-12 3 1-4 11z"/><path class="fill" d="M13 28h4v13h-4zM19 30h7v11h-7zM28 27h4v14h-4zM34 31h5v10h-5zM41 28h6v13h-6zM49 29h3v12h-3z"/><path class="fill" d="M13 46h6v11h-6zM21 44h4v13h-4zM27 47h8v10h-8zM37 45h4v12h-4zM43 48h6v9h-6z"/><path d="M50 57l3-11 3 1-3 10z"/></svg>
`})]})]}),"SubjectCover$1"),Es=class Es extends Re{};s(Es,"$JournalCover");let Ca=Es;const Wc=r(Ca),vi=s(()=>d(R,{children:[n(Wc,{}),n(Li,{}),n(Ne,{children:yi()}),n(en,{ground:"#f5eedf",band:"#d9c3a3",bandInk:"#4a3626",foot:"#a3b6cc",footInk:"#2a4262",ink:"#2f4a6a"}),n(tn,{x:"-54",y:"-33"}),n(S,{children:"[Dougs Story](/dougs-story/)"}),n(Qt,{children:"[Doug](/dougs-story/)"}),n(Xt,{children:"[Library](/dougs-library/)"}),n(Aa,{children:"[The Librarian](/dougs-story/)"}),d(h,{children:[n(Jt,{}),n(Kt,{children:`<svg viewBox="0 0 64 64" class="pd-illustration"><path class="light" d="M8 13h23v38H8zM33 13h23v38H33z"/><path d="M8 13h23v38H8zM33 13h23v38H33z"/><path d="M13 21h13M13 27h13M13 33h9M38 21h13M38 27h13M38 33h13M38 39h8"/><path class="fill" d="M15 55 45 25l4 4-30 30-6 2z"/><path d="M15 55 45 25l4 4-30 30-6 2zM43 27l4 4M17 53l2 2"/></svg>
`})]})]}),"StoryCover"),Nc=s(()=>d(R,{children:[n(ci,{}),n(Ne,{children:yi()}),n(Ne,{children:vi()}),n(en,{ground:"#eff1f6",band:"#c0c9df",bandInk:"#2a3a63",foot:"#8e9fc8",footInk:"#1f2d50",ink:"#2a3a63"}),n(tn,{x:"-36",y:"-26"}),n(S,{children:"[Dougs Claude](/dougs-claude/)"}),n(Qt,{children:"[Doug](/dougs-story/)"}),n(Xt,{children:"[Library](/dougs-library/)"}),n(Aa,{children:"[Claude](/dougs-claude/)"}),d(h,{children:[n(Jt,{}),n(Kt,{children:`<svg viewBox="0 0 64 64" class="pd-illustration"><path class="light" d="M8 30h48v27H8z"/><path d="M8 30h48v27H8zM8 44h48"/><path class="fill" d="M12 33h5v9h-5zM19 31h4v11h-4zM25 34h7v8h-7zM34 32h4v10h-4zM40 35h8v7h-8z"/><path class="fill" d="M12 47h6v8h-6zM20 48h4v7h-4zM26 46h9v9h-9zM37 49h5v6h-5zM44 47h7v8h-7z"/><path class="light" d="M28 6h28v16H40l-6 5v-5h-6z"/><path d="M28 6h28v16H40l-6 5v-5h-6z"/><path d="M33 11h18M33 16h12"/></svg>
`})]})]}),"SubjectCover"),Lc=s(()=>d(R,{children:[n(Ic,{}),n(Ne,{children:Nc()}),n(Ne,{children:vi()}),n(en,{ground:"#eff1f6",band:"#c0c9df",bandInk:"#2a3a63",foot:"#8e9fc8",footInk:"#1f2d50",ink:"#2a3a63"}),n(tn,{x:"-22",y:"-50"}),n(S,{children:"[Claudes Reference Manual](/claudes-reference-manual/)"}),n(Qt,{children:"[Doug](/dougs-story/)"}),n(Xt,{children:"[Claude](/dougs-claude/)"}),d(h,{children:[n(Jt,{}),n(Kt,{children:`<svg viewBox="0 0 64 64" class="pd-illustration"><circle class="fill" cx="22" cy="42" r="10"/><circle class="light" cx="22" cy="42" r="3.5"/><circle cx="22" cy="42" r="3.5"/><path d="M22 29v-4M22 55v4M9 42H5M35 42h4M13 33l-3-3M31 33l3-3M13 51l-3 3M31 51l3 3"/><path class="fill" d="M44 7l3 9 9 3-9 3-3 9-3-9-9-3 9-3z"/><path d="M44 7l3 9 9 3-9 3-3 9-3-9-9-3 9-3z"/></svg>
`})]})]}),"Cover"),Bc=s(()=>d(R,{children:[n(Bi,{}),d(S,{children:[n(on,{}),"[Synopsis](/claudes-reference-manual/)"]}),d(h,{children:["What a message of Claude's is made of beyond what was said: an action and its result, an artifact and an attachment, each a writing of its own that the importer writes and the page draws as Claude's application does. They specialize what ",n(u,{children:"[my reference manual](/dougs-reference-manual/#the-conversation)"})," says a conversation is in general, a book of messages, each by a speaker at a time, with its participants on the cover; the conversations themselves are filed under ",n(u,{children:"[Our Conversations](/our-conversations/)"}),"."]})]}),"Synopsis"),Ec=s(()=>d(R,{children:[n(Ei,{}),n(Rd,{}),d(S,{children:[n(on,{}),"[Table of Contents](/claudes-reference-manual/#table-of-contents)"]}),d(k,{children:[n(y,{children:"What a message of Claude's holds"}),n(h,{children:n(I,{children:"[The Action and the Result](/claudes-reference-manual/#the-action-and-the-result)"})}),n(h,{children:n(I,{children:"[The Artifact and the Attachment](/claudes-reference-manual/#the-artifact-and-the-attachment)"})}),n(h,{children:n(I,{children:"[The Project](/claudes-reference-manual/#the-project)"})}),n(h,{children:n(I,{children:"[The Account](/claudes-reference-manual/#the-account)"})}),n(h,{children:n(I,{children:"[The Origin](/claudes-reference-manual/#the-origin)"})}),d(h,{children:[n(on,{}),n(A,{children:n(I,{children:"[Claudes Reference Manual](/claudes-reference-manual/)"})}),n(A,{children:n(I,{children:"[Synopsis](/claudes-reference-manual/#synopsis)"})}),n(A,{children:n(I,{children:"[Table of Contents](/claudes-reference-manual/#table-of-contents)"})})]})]}),d(k,{children:[n(y,{children:"Claude's pages"}),n(h,{children:n(I,{children:"[The Page](/claudes-reference-manual/#the-page)"})}),n(h,{children:n(I,{children:"[The Pane](/claudes-reference-manual/#the-pane)"})}),n(h,{children:n(I,{children:"[The Conversation's Page](/claudes-reference-manual/#the-conversations-page)"})}),n(h,{children:n(I,{children:"[The Project's Page](/claudes-reference-manual/#the-projects-page)"})})]}),d(k,{children:[n(y,{children:"What an import writes"}),n(h,{children:n(I,{children:"[The Imported Conversation](/claudes-reference-manual/#the-imported-conversation)"})}),n(h,{children:n(I,{children:"[The Annotated Conversation](/claudes-reference-manual/#the-annotated-conversation)"})}),n(h,{children:n(I,{children:"[How We Read a Conversation](/claudes-reference-manual/#how-we-read-a-conversation)"})})]})]}),"Table"),Fc=s(()=>d(R,{children:[n(U,{}),n(S,{children:"[The Action and the Result](/claudes-reference-manual/#the-action-and-the-result)"}),d(h,{children:[n(q,{}),"What Claude does in a message that is not said, a search, a fetch, a run of code, a read of a file, as a writing of its own; and the result, what came back, a writing the import counts and leaves out."]}),d(k,{children:[n(y,{children:"Done, and what came back"}),d(h,{children:["A message of Claude's holds more than prose. Where he searched the web, fetched a page, ran code or read a file, the message holds an action, one line saying what was done in plain words. What came back is a result, and the import does not write it: a fetched page or a run's output is the machine's and not the conversation's, it was what filled a page when it was kept, and the export still holds it, so the import counts the results it leaves out and a result that matters is kept by hand. Neither is a paragraph of what was said, so neither is a paragraph wearing a mark: each is a writing of its own, a paragraph in shape and not in meaning, which the page can fold, show as the application does, or count. They are Claude's, so they stand in this manual and not in ",n(u,{children:"[the library's](/dougs-reference-manual/#the-conversation)"}),", where a message is said to be a speaker, a time and what was said."]})]}),n(D,{identifier:"code",type:".tsx",children:`import { $ } from '@dna-platform/chemistry';
import { $Paragraph } from '@dna-platform/public';

export class $Action extends $Paragraph {
    protected override $Define(): void {
        super.$Define();
        this.classes.add(this, 'pd-action');
    }
}

export class $Result extends $Paragraph {
    protected override $Define(): void {
        super.$Define();
        this.classes.add(this, 'pd-result');
    }
}

export const Action = $($Action);
export const Result = $($Result);
`})]}),"TheActionAndTheResult1"),Hc=s(()=>d(R,{children:[n(U,{}),n(S,{children:"[The Artifact and the Attachment](/claudes-reference-manual/#the-artifact-and-the-attachment)"}),d(h,{children:[n(q,{}),"A file Claude made in a message and a file given to him in one, each a figure where it entered the conversation: a card for the artifact and a chip for the file given, each opening in the pane."]}),d(k,{children:[n(y,{children:"Made, and given"}),d(h,{children:["An artifact is a file Claude made as he answered, a document, a page, a program, and went on changing as the conversation went on. The day's chapter holds an artifact where each version was made: a figure, as a code listing is, that names the version's file beside the chapter and is drawn as the application draws one, a card with a glyph for a document or for code, the artifact's title and a line to open it; every version's file stands beside the chapter and the last under its own name. Each version is also a chapter of the conversation, said to be a version, its document converted to writing at import under an opaque section and its code set in a code box; the card's caption refers to that chapter, and pressing the card opens it in ",n(u,{children:"[the pane](/claudes-reference-manual/#the-pane)"}),", where the versions can be walked. An attachment is a file given to Claude in a message, pasted or uploaded: a figure the same way, drawn as a chip at the head of the words it was given with, naming the file when the export carried its text, which it does for what was pasted and not for what was uploaded, and opening in the same pane. Both are writings of their own and not paragraphs of what was said, as ",n(u,{children:"[an action](/claudes-reference-manual/#the-action-and-the-result)"})," is; each is a figure, since what it shows is the file."]})]}),n(D,{identifier:"code",type:".tsx",children:`import { ReactNode } from 'react';
import { $, $check, $Chemical } from '@dna-platform/chemistry';
import { $Annotation, $Chapter, $Code, $Writing, AnnotationSpecification, html, identifier, specify } from '@dna-platform/public';
import type { $LibraryBook } from '../../.manual/1-the-book~code.tsx';

export type Showing = { $shown: $Artifact | $Attachment | undefined };

const documentGlyph = '<svg viewBox="0 0 24 24"><path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4M9 12h6M9 16h6"/></svg>';
const codeGlyph = '<svg viewBox="0 0 24 24"><path d="M8 7l-5 5 5 5M16 7l5 5-5 5M13 5l-2 14"/></svg>';

export const showingBook = (writing: $Writing): Showing | undefined => {
    const book = writing.book as unknown as Partial<Showing> | undefined;
    return book !== undefined && '$shown' in book ? (book as Showing) : undefined;
};

export class $Version extends $Annotation {
    specification = new VersionSpecification();

    override defines(writing: $Writing): void {
        writing.classes.add(this, 'pa-version');
    }

    override erase(writing: $Writing): void {
        writing.classes.revert(this);
    }
}

export class VersionSpecification extends AnnotationSpecification {
    @specify('a version is said of a chapter')
    $saidOfAChapter(writing: $Writing): void {
        $check(writing instanceof $Chapter, 'a version is said of a chapter, and this is not one');
    }
}

export class $Artifact extends $Code {
    $artifact: string | undefined = undefined;
    $place: string | undefined = undefined;
    get version(): $Chapter | undefined {
        const place = this.$place;
        if (place === undefined) return undefined;
        return (this.book as $LibraryBook).chapters.find(chapter => identifier.slug(chapter.title?.name ?? '') === place);
    }
    get versionName(): string { return this.version?.title?.name ?? ''; }
    get name(): string { return this.versionName.replace(/ v\\d+(?:-\\d+)?$/u, '') || this.$identifier; }
    get number(): string { return / v(\\d+)(?:-\\d+)?$/u.exec(this.versionName)?.[1] ?? '1'; }
    get kind(): string {
        const type = this.$type.replace(/^\\./u, '');
        return type === 'md' || type === 'txt' || type === '' ? 'document' : type === 'html' ? 'page' : 'code';
    }
    get shown(): boolean { return showingBook(this)?.$shown === this; }

    $Artifact(...chemicals: $Chemical[]) {
        this.$Code(...chemicals);
        this.containers.replace(this, 'pre', 'figure');
    }

    override write(): ReactNode {
        const words = [...this.text].map((chemical, index) => {
            const Word = $(chemical);
            return (
                <Word key={index} />
            );
        });
        const glyph = { __html: this.kind === 'document' ? documentGlyph : codeGlyph };
        return (
            <>
                <button
                    type="button"
                    className="pd-card"
                    aria-pressed={this.shown}
                    onClick={() => this.press()}
                >
                    <span
                        className="pd-card-mark"
                        dangerouslySetInnerHTML={glyph}
                    />
                    <span className="pd-card-words">
                        <b>
                            {this.name}
                        </b>
                        <small>
                            {\`Click to open \${this.kind} · v\${this.number}\`}
                        </small>
                    </span>
                </button>
                <figcaption>
                    {words}
                </figcaption>
            </>
        );
    }

    press(): void {
        const book = showingBook(this);
        if (book === undefined) return;
        book.$shown = book.$shown === this ? undefined : this;
    }

    protected override $Define(): void {
        super.$Define();
        this.classes.add(this, 'pd-artifact');
        if (this.shown) this.classes.add(this, 'pa-open');
    }
}

export class $Attachment extends $Code {
    get sentence(): string { return html.copy(this.text); }
    get fileName(): string { return /“([^”]+)”/u.exec(this.sentence)?.[1] ?? 'a file'; }
    get extension(): string { return (this.fileName.split('.').pop() ?? 'file').toUpperCase().slice(0, 4); }
    get lineCount(): number { return this.names ? this.contents.split('\\n').length : 0; }
    get shown(): boolean { return showingBook(this)?.$shown === this; }

    $Attachment(...chemicals: $Chemical[]) {
        this.$Code(...chemicals);
        this.containers.replace(this, 'pre', 'figure');
    }

    override write(): ReactNode {
        const words = [...this.text].map((chemical, index) => {
            const Word = $(chemical);
            return (
                <Word key={index} />
            );
        });
        return (
            <>
                <button
                    type="button"
                    className="pd-chip"
                    aria-pressed={this.shown}
                    onClick={() => this.press()}
                >
                    <span className="pd-chip-mark">
                        {this.extension}
                    </span>
                    <span className="pd-chip-words">
                        <b>
                            {this.fileName}
                        </b>
                        <small>
                            {this.names ? \`\${this.lineCount} lines\` : 'not carried by the export'}
                        </small>
                    </span>
                </button>
                <figcaption>
                    {words}
                </figcaption>
            </>
        );
    }

    press(): void {
        const book = showingBook(this);
        if (book === undefined) return;
        book.$shown = book.$shown === this ? undefined : this;
    }

    protected override $Define(): void {
        super.$Define();
        this.classes.add(this, 'pd-attachment');
        if (this.shown) this.classes.add(this, 'pa-open');
    }
}

export const Version = $($Version);
export const Artifact = $($Artifact);
export const Attachment = $($Attachment);
`})]}),"TheArtifactAndTheAttachment2"),_c=s(()=>d(R,{children:[n(U,{}),n(S,{children:"[The Project](/claudes-reference-manual/#the-project)"}),d(h,{children:[n(q,{}),"The project a conversation with Claude was held in, said on the conversation's cover as a fact of Claude's, and the line in the bar that draws it."]}),d(k,{children:[n(y,{children:"Held in a project"}),n(h,{children:"In the application a conversation is held in a project, or in none, and the project holds the files Claude reads while it goes. That is a fact about Claude's conversations and not about conversations in general, so it is said here and not in the library's manual: a project is an annotation of a conversation's cover, as the author and the subject are, holding the project book's name and standing a reference to it, and the cover writes it with the form that says the project catalogues the conversation besides, so the project book's table answers it. It is not a topic. A topic is what a conversation, or a part of one, is about, and the same conversation may turn to several; the project is where it was held, one at most, whatever it turned to."}),d(h,{children:["The pages that draw it stand in chapters of their own: a conversation with Claude is the library's conversation specialized in ",n(u,{children:"[The Conversation's Page](/claudes-reference-manual/#the-conversations-page)"}),", which draws the project line beside the byline, a word said to be a label and the project's name leading to its book, and files the conversation under its project at the logo, the project's own mark in the project's own colours leading to its page, read off the project's cover standing as a volume of the conversation's, concept 5 of ",n(u,{children:"[The Project's Page](/claudes-design/#the-projects-page)"})," in its first form; and the project book is ",n(u,{children:"[a project manual](/dougs-reference-manual/#the-project-manual)"}),"specialized in ",n(u,{children:"[The Project's Page](/claudes-reference-manual/#the-projects-page)"}),". The annotation and its line stand here alone, since every page that reads a conversation's cover reads the project through this one class, and a class copied is a class no other page can read. The project has a twin, the account the conversation was held under, ",n(u,{children:"[The Account](/claudes-reference-manual/#the-account)"}),", said after it on the cover and drawn after it on the page."]})]}),n(D,{identifier:"code",type:".tsx",children:`import { ReactNode } from 'react';
import { $, $check } from '@dna-platform/chemistry';
import { $Annotation, $Chapter, $Cover, $Paragraph, $Reference, $Writing, AnnotationSpecification, Reference as reference, Word as word, binder, html, specify } from '@dna-platform/public';
import { Label as label } from '../../.manual/8-the-author-and-the-subject~code.tsx';

// The project a conversation was held in, said on its cover as a fact of Claude's: the project book's name and a
// reference to it. Every book that reads a conversation's cover reads it through this one class, so it stands here
// alone, apart from the pages that draw it; Sprint 117, D2.
export class $Project extends $Annotation {
    specification = new ProjectSpecification();
    get name(): string { return binder.reference(html.copy(this.text))?.name ?? ''; }
    get means(): $Reference | undefined { return this.annotations.expressed($Reference); }

    protected override $Define(): void {
        super.$Define();
        const link = binder.reference(html.copy(this.text));
        if (link === undefined) return;
        const Reference = $(reference);
        this.annotations.add(this,
            <Reference>{link.identifier}</Reference>
        );
    }

    override write(): ReactNode { return this.name; }
}

export class ProjectSpecification extends AnnotationSpecification {
    @specify('a project is said of a cover')
    $saidOfACover(writing: $Writing): void {
        $check(writing instanceof $Chapter && writing.is($Cover), 'a project is said of a cover, and this is not one');
    }
}

// The project line in a conversation's bar: a word said to be a label and the project's name leading to its book.
export class $ProjectLine extends $Paragraph {
    $cover?: $Chapter;
    get cover(): $Chapter | undefined { return this.$cover ?? this.book?.cover; }
    get project(): $Project | undefined { return this.cover?.annotations.expressed($Project); }

    override write(): ReactNode {
        const project = this.project!;
        const Word = $(word);
        const Said = $(label);
        const Reference = $(reference);
        return (
            <>
                <Word>
                    <Said />
                    project
                </Word>
                <Word>
                    <Reference>{project.means!.identifier}</Reference>
                    {project.name}
                </Word>
            </>
        );
    }

    protected override $Define(): void {
        super.$Define();
        this.classes.add(this, 'pd-project-line');
    }
}

export const Project = $($Project);
export const ProjectLine = $($ProjectLine);
`})]}),"TheProject3"),qc=s(()=>d(R,{children:[n(U,{}),n(S,{children:"[The Page](/claudes-reference-manual/#the-page)"}),d(h,{children:[n(q,{}),"How a conversation with Claude is shown on its page: the form the application itself gives a conversation, read off the application, and the browser this library keeps open to read it."]}),d(k,{children:[n(y,{children:"The form the application gives"}),d(h,{children:["A conversation is shown as the application shows it, since that is the form its reader knows, and annotations and flourishes come on that base. The form is read off the application's own page in a browser, element by element and style by style, and written as the theme of ",n(u,{children:"[a conversation with Claude](/claudes-reference-manual/#the-project)"}),", so that the message, the speaker, the time, the action, the artifact and the attachment are dressed as the application dresses them."]})]}),d(k,{children:[n(y,{children:"The side and the strip"}),d(h,{children:["The theme dresses what the application has no form for. The side, which the layout places: the search's field at its head under the register's mark, the hits in place of the index while a word stands, what I asked under the open chapter's entry and the file tabs under it, the open entry marked; the page draws no side only when the index has no entry. The project's strip under the bar, a row of the page's grid in every form, with a side and without, with the pane and without, at a desk and on a phone, where the neighbours and the word give way to the name and the way back. And the word found, marked by the browser's highlight and not by a class, the one rule the highlight takes. The side's part and the strip's are parts of the page's form, said in ",n(u,{children:"[The Conversation's Page](/claudes-reference-manual/#the-conversations-page)"})," and built to concept 9 of ",n(u,{children:"[The Conversation and the Project](/claudes-design/#the-conversation-and-the-project)"}),"."]})]}),d(k,{children:[n(y,{children:"The browser this library keeps open"}),d(h,{children:["The application's pages need my sign-in, so the library opens a browser of its own, with a profile that keeps the sign-in once I have logged in there, and leaves it open with a port a later command attaches to: one command opens it on the application and keeps it open, and the others list its tabs, open a page, say what an element says, print its tree or its computed styles, photograph it, scroll to an element, hover or press one and say what changed, or name what runs past the right edge at a width. The file beside this chapter is that tool, run from the repository's root. It is an essential tool of developing this library and is opened at the start of a session, in the background, with ",n(u,{children:"[the command](/dougs-reference-manual/#developing-a-library)"})," said there: node .me/.claude/.manual/4-the-page~browser.mjs open; it stays open as a resource until I close it, and I log in there once. It is a browser and not an interface for calls: it keeps one tab per place, the application, the workbench, the built site, a file, and goes to an address in the tab it has rather than opening another, and what it leaves open is closed with its close command."]})]}),n(D,{identifier:"theme",type:".tsx",children:`import { css, RuleSet } from 'styled-components';
import { $ } from '@dna-platform/chemistry';
import { $Typeset } from '../../.manual/28-the-journal~theme.tsx';

// Concept 3 of Claudes Design, the application measured in its own browser and carried in as decided: the chat text at its
// measures, white across every surface with a tint only in the last pixels before an edge, the head scrolling away with the
// words, and the pane's column when one is open.
export class $ApplicationForm extends $Typeset {
    sans = "'Inter', system-ui, sans-serif";
    mono = "ui-monospace, 'Cascadia Code', Consolas, monospace";
    keyword = '#1f5fbf';
    string = '#9a3b1e';
    type = '#116b4a';
    comment = '#7a8491';

    protected override parts(): RuleSet[] {
        return [
            ...super.parts(), this.surfaces(), this.top(), this.rows(), this.openDay(), this.exchanges(), this.said(),
            this.cards(), this.paneColumn(), this.phone(),
        ];
    }

    protected surfaces(): RuleSet {
        return css\`
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
            @media (min-width: \${({ theme }) => theme.narrow}) {
                .pd-book.pa-layout { height: 100vh; overflow-y: auto; grid-template-rows: auto auto auto; }
                .pd-book.pa-layout .pd-pages { overflow: visible; }
                .pd-book.pa-layout .pd-library, .pd-book.pa-layout .pd-me { position: sticky; top: 0; z-index: 3; }
                .pd-book.pa-layout .pd-holds { position: sticky; top: \${({ theme }) => theme.barHeight}; align-self: start; max-height: calc(100vh - \${({ theme }) => theme.barHeight}); }
            }
        \`;
    }

    protected top(): RuleSet {
        return css\`
            .pd-book .pd-head .pd-switches, .pd-book .pd-head .pa-illustration { display: none; }
            .pd-book .pd-head .pd-title { font-family: \${({ theme }) => theme.serif}; font-size: 30px; font-weight: 600; line-height: 1.1; letter-spacing: -.01em; }
            .pd-book .pd-head .pd-participants { display: flex; gap: 6px; align-items: center; margin: 6px 0 0; font-family: \${({ theme }) => theme.sans}; font-size: 13px; color: \${({ theme }) => theme.soft}; }
            .pd-book .pd-head .pd-participants::before { content: 'between'; }
            .pd-book .pd-head .pd-participants .pa-reference { color: \${({ theme }) => theme.ink}; font-weight: 500; text-decoration: none; }
            .pd-book .pd-head .pd-participants .pa-reference:hover { color: \${({ theme }) => theme.accent}; }
            .pd-book .pd-head .pd-tally { display: flex; flex-wrap: wrap; gap: 4px 16px; margin: 6px 0 0; font-family: \${({ theme }) => theme.sans}; font-size: 12.5px; color: \${({ theme }) => theme.soft}; }
            .pd-book .pd-head .pd-tally b { color: \${({ theme }) => theme.ink}; font-weight: 500; }
        \`;
    }

    protected rows(): RuleSet {
        return css\`
            .pd-book .pd-holds .pd-chapter { display: flex; flex-direction: column; }
            .pd-book .pd-holds .pd-section.pa-appendix { display: none; }
            .pd-book .pd-holds .pd-section > .pd-heading { margin: 0 0 4px 18px; font-family: \${({ theme }) => theme.sans}; font-size: 10.5px; font-weight: 600; line-height: 1.4; letter-spacing: .12em; text-transform: uppercase; color: \${({ theme }) => theme.faint}; }
            .pd-book .pd-holds .pd-paragraph.pa-entry { display: flex; align-items: center; gap: 9px; padding: 6px 18px 6px 16px; font-family: \${({ theme }) => theme.sans}; font-size: 13px; color: \${({ theme }) => theme.ink}; }
            .pd-book .pd-holds .pd-paragraph.pa-entry::before { content: ''; flex: none; width: 7px; height: 7px; border-radius: 50%; background: \${({ theme }) => theme.sea}; }
            .pd-book .pd-holds .pd-paragraph.pa-entry .pd-day-count { margin-inline-start: auto; font-size: 11px; color: \${({ theme }) => theme.faint}; }
            .pd-book .pd-holds .pd-paragraph.pa-entry:hover { background: #f8fafc; }
            .pd-book .pd-holds .pd-paragraph.pa-entry.pa-open { background: linear-gradient(90deg, #eff4fa, #f8fafd); color: \${({ theme }) => theme.heading}; font-weight: 500; }
            \${this.sideIndex()}
        \`;
    }

    // The side's index as concept 9 lays it: the search's field at its top, the hits in place of the index while a
    // word stands, and under the chapter in front its files as tabs and what I asked, each a row leading to its message.
    protected sideIndex(): RuleSet {
        return css\`
            .pd-book .pd-holds { padding: 0 0 24px; }
            .pd-book .pd-holds .pd-paragraph.pd-search { display: flex; flex-direction: row; flex-wrap: nowrap; align-items: center; gap: 8px; margin: 14px 14px 6px; padding: 6px 10px; border: 1px solid \${({ theme }) => theme.line}; border-radius: 9px; background: #ffffff; color: \${({ theme }) => theme.soft}; font-family: \${({ theme }) => theme.sans}; font-size: 13px; line-height: 20px; }
            .pd-book .pd-holds .pd-search .pd-search-mark { flex: none; font-style: normal; font-size: 16px; line-height: 1; color: \${({ theme }) => theme.faint}; }
            .pd-book .pd-holds .pd-search .pd-search-word { flex: 1; min-width: 0; border: 0; background: none; padding: 0; font: inherit; color: \${({ theme }) => theme.ink}; outline: none; }
            .pd-book .pd-holds .pd-search .pd-search-word::placeholder { color: \${({ theme }) => theme.faint}; }
            .pd-book .pd-holds .pd-chapter.pa-table-of-contents.pa-searching { display: none; }
            .pd-book .pd-holds .pd-paragraph.pd-results { display: block; margin: 0; padding: 0 0 20px; }
            .pd-book .pd-holds .pd-results .pd-results-count { display: block; padding: 10px 18px 6px; font-family: \${({ theme }) => theme.sans}; font-size: 12px; line-height: 1.5; color: \${({ theme }) => theme.soft}; }
            .pd-book .pd-holds .pd-results .pd-results-count b { color: \${({ theme }) => theme.ink}; font-weight: 500; }
            .pd-book .pd-holds .pd-paragraph.pd-result { position: relative; display: grid; grid-template-columns: 38px minmax(0, 1fr); column-gap: 6px; margin: 0; padding: 4px 14px 5px 18px; font-family: \${({ theme }) => theme.sans}; font-size: 11.5px; line-height: 1.4; color: \${({ theme }) => theme.soft}; }
            .pd-book .pd-holds .pd-result:hover { background: #eef4f7; color: \${({ theme }) => theme.ink}; }
            .pd-book .pd-holds .pd-result .pd-result-title { font-weight: 500; color: \${({ theme }) => theme.faint}; }
            .pd-book .pd-holds .pd-result .pd-result-synopsis { display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
            .pd-book .pd-holds .pd-result mark { background: #fff2a8; color: inherit; padding: 0 1px; border-radius: 2px; }
            .pd-book .pd-holds .pd-result > a:has(> .pd-entry-open) { position: absolute; inset: 0; z-index: 1; }
            .pd-book .pd-holds .pd-paragraph.pa-entry { flex-wrap: wrap; }
            .pd-book .pd-holds .pd-paragraph.pa-entry::before { content: none; }
            .pd-book .pd-holds .pd-paragraph.pa-entry.pa-open { box-shadow: inset 3px 0 0 #1f5a60; }
            .pd-book .pd-holds .pd-paragraph.pa-entry > a:first-child, .pd-book .pd-holds .pd-paragraph.pa-entry > .pa-content { order: 0; flex: 1 1 auto; min-width: 0; }
            .pd-book .pd-holds .pd-paragraph.pa-entry .pd-day-count { order: 1; }
            .pd-book .pd-holds .pd-paragraph.pa-entry:not(.pa-open) .pd-file-tab { display: none; }
            .pd-book .pd-holds .pd-paragraph.pa-entry .pd-word.pd-file-tab { order: 2; display: flex; align-items: center; gap: 8px; flex: 0 0 calc(100% + 34px); height: 26px; margin: 2px -18px 0 -16px; padding: 0 14px 0 34px; border: 0; border-radius: 0; background: none; font-family: \${({ theme }) => theme.sans}; font-size: 12px; font-weight: 400; line-height: 1; color: \${({ theme }) => theme.soft}; text-align: start; cursor: pointer; }
            .pd-book .pd-holds .pd-paragraph.pa-entry .pd-file-tab:hover { background: #eef4f7; color: \${({ theme }) => theme.ink}; }
            .pd-book .pd-holds .pd-paragraph.pa-entry .pd-file-tab[aria-pressed='true'] { background: #eef5f6; color: #1f5a60; font-weight: 500; }
            .pd-book .pd-holds .pd-paragraph.pa-entry .pd-file-tab .pd-drawing { flex: none; width: 14px; height: 14px; color: #a5aebb; }
            .pd-book .pd-holds .pd-paragraph.pa-entry .pd-file-tab .pd-drawing svg { display: block; width: 100%; height: 100%; }
            .pd-book .pd-holds .pd-paragraph.pa-entry .pd-file-tab .pd-tab-name { min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
            .pd-book .pd-holds .pd-paragraph.pa-entry .pd-file-tab small { margin-inline-start: auto; font-size: 10.5px; color: \${({ theme }) => theme.faint}; white-space: nowrap; }
            .pd-book .pd-holds .pd-paragraph.pd-outline { display: block; margin: 0; }
            .pd-book .pd-holds:has(.pd-chapter.pa-table-of-contents.pa-searching) .pd-paragraph.pd-outline { display: none; }
            .pd-book .pd-holds .pd-outline .pd-asked { margin: 0; padding: 2px 0 8px; list-style: none; counter-reset: asked; }
            .pd-book .pd-holds .pd-outline .pd-asked li { counter-increment: asked; }
            .pd-book .pd-holds .pd-outline .pd-asked li > a, .pd-book .pd-holds .pd-outline .pd-asked li > .pd-word { display: grid; grid-template-columns: 22px minmax(0, 1fr); column-gap: 6px; padding: 3px 14px 3px 24px; font-family: \${({ theme }) => theme.sans}; font-size: 11.5px; line-height: 1.35; color: \${({ theme }) => theme.soft}; text-decoration: none; }
            .pd-book .pd-holds .pd-outline .pd-asked li > a::before, .pd-book .pd-holds .pd-outline .pd-asked li > .pd-word::before { content: counter(asked); font-size: 10px; color: \${({ theme }) => theme.faint}; font-variant-numeric: tabular-nums; text-align: end; padding-inline-end: 2px; line-height: 15.5px; }
            .pd-book .pd-holds .pd-outline .pd-asked li > a > .pd-word { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; color: inherit; }
            .pd-book .pd-holds .pd-outline .pd-asked li > a:hover { color: \${({ theme }) => theme.ink}; background: #eef4f7; }
        \`;
    }

    protected openDay(): RuleSet {
        return css\`
            .pd-book .pd-pages .pd-chapter.pa-page { width: 100%; max-width: 768px; margin: 0 auto; }
            .pd-book .pd-pages .pa-page > .pd-title, .pd-book .pd-pages .pa-page > a.pa-self-reference .pd-title { margin: 0 0 22px; font-family: \${({ theme }) => theme.sans}; font-size: 11.5px; font-weight: 600; line-height: 1.4; letter-spacing: .14em; text-transform: uppercase; color: \${({ theme }) => theme.faint}; }
            .pd-book .pd-pages .pd-turn, .pd-book .pd-pages .pa-page > .pd-word.pd-date { display: none; }
        \`;
    }

    protected exchanges(): RuleSet {
        return css\`
            .pd-book .pd-pages .pd-message { position: relative; display: block; margin: 0 0 28px; }
            .pd-book .pd-pages .pd-message > .pa-self-reference, .pd-book .pd-pages .pd-message .pd-heading.pd-speaker { display: none; }
            .pd-book .pd-pages .pd-message > .pd-word.pd-time { position: absolute; top: -17px; left: 0; display: block; width: auto; margin: 0; font-family: \${({ theme }) => theme.sans}; font-size: 11px; font-weight: 500; line-height: 1; color: \${({ theme }) => theme.faint}; opacity: 0; transition: opacity .15s; }
            .pd-book .pd-pages .pd-message > .pd-word.pd-time::before { content: none; }
            .pd-book .pd-pages .pd-message.pa-mine > .pd-word.pd-time { left: auto; right: 0; }
            .pd-book .pd-pages .pd-message:hover > .pd-word.pd-time { opacity: 1; }
            .pd-book .pd-pages .pd-message > .pd-said { display: flex; flex-direction: column; gap: 10px; min-width: 0; overflow-wrap: anywhere; }
            .pd-book .pd-pages .pd-message.pa-mine > .pd-said { margin-inline-start: auto; width: fit-content; max-width: 78%; padding: 12px 16px; border-radius: 12px; background: rgba(11, 11, 11, .05); gap: 8px; }
        \`;
    }

    protected said(): RuleSet {
        return css\`
            .pd-book .pd-pages .pd-message .pd-said .pd-paragraph { margin: 0; font-family: \${({ theme }) => theme.serif}; font-size: 15px; line-height: 22px; color: #0b0b0b; }
            .pd-book .pd-pages .pd-message.pa-mine .pd-said .pd-paragraph { font-family: \${({ theme }) => theme.sans}; line-height: 20px; }
            .pd-book .pd-pages .pd-message .pd-said .pd-heading { margin: 8px 0 0; padding: 0; border: 0; font-family: \${({ theme }) => theme.serif}; font-size: 16px; font-weight: 600; line-height: 22px; color: #0b0b0b; }
            .pd-book .pd-pages .pd-message .pa-emphasis { font-style: italic; }
            .pd-book .pd-pages .pd-message .pa-bold { font-weight: 600; }
            .pd-book .pd-pages .pd-message .pa-list { padding-inline-start: 30px; }
            .pd-book .pd-pages .pd-message .pd-paragraph.pa-list .pd-line.pa-item { display: list-item; position: static; margin: 0; padding-inline-start: 0; list-style: disc outside; }
            .pd-book .pd-pages .pd-message .pd-paragraph.pa-list .pd-line.pa-item::before { content: none; }
            .pd-book .pd-pages .pd-message .pd-paragraph.pa-list.pa-ordered .pd-line.pa-item { list-style: decimal outside; }
            .pd-book .pd-pages .pd-message .pd-paragraph.pa-list .pd-line.pa-item + .pd-line.pa-item { margin-block-start: 4px; }
            .pd-book .pd-pages .pd-message .pa-list .pa-list { margin: 4px 0 0; }
            .pd-book .pd-pages .pd-message .pa-verbatim { font-family: \${({ theme }) => theme.mono}; font-size: 13.5px; padding: 1px 4px; border-radius: 5px; background: rgba(11, 11, 11, .05); color: #8e2626; }
            .pd-book .pd-pages .pd-message .pd-word.pa-reference { color: \${({ theme }) => theme.accent}; text-decoration: underline; text-decoration-color: color-mix(in srgb, \${({ theme }) => theme.accent} 35%, transparent); text-underline-offset: 3px; }
            .pd-book .pd-pages .pd-message .pa-quoted { padding-inline-start: 12px; border-inline-start: 3px solid \${({ theme }) => theme.line}; color: \${({ theme }) => theme.soft}; }
            .pd-book .pd-pages .pd-message .pd-paragraph.pa-table { display: table; width: 100%; border-collapse: collapse; font-family: \${({ theme }) => theme.sans}; font-size: 14px; line-height: 1.5; }
            .pd-book .pd-pages .pd-message .pa-table .pa-row { display: table-row; }
            .pd-book .pd-pages .pd-message .pa-table .pa-col { display: table-cell; padding: 7px 12px; border-block-end: 1px solid \${({ theme }) => theme.line}; vertical-align: top; }
            .pd-book .pd-pages .pd-message .pa-table .pa-row-start-1 .pa-col { font-weight: 600; color: \${({ theme }) => theme.heading}; border-block-end: 2px solid \${({ theme }) => theme.line}; }
            .pd-book .pd-pages .pd-message .pd-equation { display: block; margin: 4px 0; max-width: 100%; overflow-x: auto; }
            .pd-book .pd-pages .pd-message .katex-display { margin: 0; }
            .pd-book .pd-pages .pd-message .katex { font-size: 1.05em; }
        \`;
    }

    protected cards(): RuleSet {
        return css\`
            .pd-book .pd-pages .pd-message .pd-action { display: flex; align-items: center; gap: 8px; width: fit-content; max-width: 100%; margin: 0; padding: 7px 12px; border: 1px solid \${({ theme }) => theme.line}; border-radius: 10px; font-family: \${({ theme }) => theme.sans}; font-size: 13px; line-height: 1.4; color: \${({ theme }) => theme.soft}; }
            .pd-book .pd-pages .pd-message .pd-action::before { content: '⌕'; flex: none; font-size: 15px; color: \${({ theme }) => theme.accent}; }
            .pd-book .pd-pages .pd-message .pd-artifact, .pd-book .pd-pages .pd-message .pd-attachment { margin: 0; padding: 0; border: 0; background: none; }
            .pd-book .pd-pages .pd-message .pd-artifact > figcaption, .pd-book .pd-pages .pd-message .pd-attachment > figcaption { display: none; }
            .pd-book .pd-pages .pd-message .pd-said > .pd-attachment { order: -1; }
            .pd-book .pd-pages .pd-message .pd-card { display: flex; align-items: center; gap: 12px; width: 100%; max-width: 100%; margin: 0; padding: 12px 14px; border: 1px solid \${({ theme }) => theme.line}; border-radius: 12px; background: #ffffff; text-align: start; font-family: \${({ theme }) => theme.sans}; font-size: 13px; line-height: 1.4; color: \${({ theme }) => theme.ink}; cursor: pointer; transition: border-color .15s, background .15s; }
            .pd-book .pd-pages .pd-message .pd-card:hover { border-color: #c9d1de; background: #fcfcfd; }
            .pd-book .pd-pages .pd-message .pd-card .pd-card-mark { display: grid; place-items: center; flex: none; width: 38px; height: 38px; border: 1px solid \${({ theme }) => theme.line}; border-radius: 9px; background: #fbfcfd; color: \${({ theme }) => theme.soft}; }
            .pd-book .pd-pages .pd-message .pd-card .pd-card-mark svg { width: 18px; height: 18px; stroke: currentColor; fill: none; stroke-width: 1.8; stroke-linecap: round; stroke-linejoin: round; }
            .pd-book .pd-pages .pd-message .pd-card b { display: block; font-size: 14px; font-weight: 500; color: \${({ theme }) => theme.heading}; }
            .pd-book .pd-pages .pd-message .pd-card small { color: \${({ theme }) => theme.soft}; }
            .pd-book .pd-pages .pd-message .pd-card[aria-pressed='true'] { border-color: \${({ theme }) => theme.accent}; background: #f3f8fa; }
            .pd-book .pd-pages .pd-message .pd-card[aria-pressed='true'] .pd-card-mark { color: \${({ theme }) => theme.accent}; }
            .pd-book .pd-pages .pd-message .pd-chip { display: flex; align-items: center; gap: 8px; width: fit-content; margin: 0; padding: 6px 10px 6px 8px; border: 1px solid rgba(11, 11, 11, .1); border-radius: 10px; background: #ffffff; text-align: start; font-family: \${({ theme }) => theme.sans}; font-size: 12px; line-height: 1.3; color: \${({ theme }) => theme.ink}; cursor: pointer; }
            .pd-book .pd-pages .pd-message .pd-chip:hover, .pd-book .pd-pages .pd-message .pd-chip[aria-pressed='true'] { border-color: \${({ theme }) => theme.accent}; }
            .pd-book .pd-pages .pd-message .pd-chip .pd-chip-mark { display: grid; place-items: center; flex: none; width: 26px; height: 26px; border-radius: 6px; background: #fbfcfd; font-size: 8.5px; font-weight: 600; line-height: 1; letter-spacing: .04em; color: \${({ theme }) => theme.soft}; }
            .pd-book .pd-pages .pd-message .pd-chip b { display: block; font-weight: 500; }
            .pd-book .pd-pages .pd-message .pd-chip small { font-size: 11px; color: \${({ theme }) => theme.soft}; }
        \`;
    }

    protected paneColumn(): RuleSet {
        return css\`
            .pd-book.pa-layout:has(> .pd-pane > .pd-pane-bar) {
                grid-template-columns: \${({ theme }) => theme.holdsColumn} minmax(0, 1fr) minmax(0, 1fr);
                grid-template-areas: 'library library library' 'holds head pane' 'holds pages pane';
            }
            \${this.strip()}
        \`;
    }

    // The project's strip under the bar, a row of the grid that stands only while a trail is drawn in it: the project's
    // mark, its name, my place in it, the neighbours either side, the word I had typed, and the way back.
    protected strip(): RuleSet {
        return css\`
            .pd-book.pa-layout:has(> .pd-project-strip:not(:empty)) { grid-template-rows: auto auto auto minmax(0, 1fr); grid-template-areas: 'library library' 'strip strip' 'holds head' 'holds pages'; }
            .pd-book.pa-layout:has(> .pd-project-strip:not(:empty)):has(> .pd-pane > .pd-pane-bar) { grid-template-areas: 'library library library' 'strip strip strip' 'holds head pane' 'holds pages pane'; }
            .pd-book.pa-layout:has(> .pd-project-strip:not(:empty)):not(:has(.pd-holds .pd-paragraph.pa-entry)) { grid-template-areas: 'library' 'strip' 'head' 'pages'; }
            .pd-book.pa-layout:has(> .pd-project-strip:not(:empty)):not(:has(.pd-holds .pd-paragraph.pa-entry)):has(> .pd-pane > .pd-pane-bar) { grid-template-areas: 'library library' 'strip strip' 'head pane' 'pages pane'; }
            .pd-book .pd-paragraph.pd-project-strip { grid-area: strip; display: flex; align-items: center; gap: 14px; min-width: 0; height: 40px; margin: 0; padding: 0 18px; background: #ffffff; border-block-end: 1px solid \${({ theme }) => theme.line}; font-family: \${({ theme }) => theme.sans}; font-size: 12.5px; line-height: 1.4; color: \${({ theme }) => theme.soft}; }
            .pd-book .pd-paragraph.pd-project-strip:empty { display: none; }
            .pd-book .pd-project-strip .pd-scheme { flex: none; }
            .pd-book .pd-project-strip > a:first-child { flex: none; display: block; line-height: 0; text-decoration: none; }
            .pd-book .pd-project-strip .pd-word.pd-mark { transform: scale(.8); transform-origin: left center; }
            .pd-book .pd-project-strip .pd-mark .pd-drawing svg { display: block; }
            .pd-book .pd-project-strip .pd-strip-words { display: flex; align-items: baseline; gap: 8px; min-width: 0; }
            .pd-book .pd-project-strip .pd-strip-words .pd-word.pa-reference { color: \${({ theme }) => theme.heading}; text-decoration: none; font-family: 'Source Sans 3', \${({ theme }) => theme.sans}; font-size: 14px; font-weight: 600; letter-spacing: -.01em; white-space: nowrap; }
            .pd-book .pd-project-strip .pd-strip-words .pd-word.pa-reference:hover { text-decoration: underline; text-underline-offset: 3px; }
            .pd-book .pd-project-strip .pd-strip-place { color: \${({ theme }) => theme.faint}; font-variant-numeric: tabular-nums; white-space: nowrap; }
            .pd-book .pd-project-strip .pd-strip-neighbours { display: flex; align-items: center; gap: 14px; min-width: 0; }
            .pd-book .pd-project-strip .pd-strip-neighbours .pd-word.pa-reference { color: \${({ theme }) => theme.soft}; text-decoration: none; max-width: 30ch; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
            .pd-book .pd-project-strip .pd-strip-neighbours .pd-word.pa-reference:hover { color: \${({ theme }) => theme.accent}; }
            .pd-book .pd-project-strip .pd-strip-word { flex: none; font-size: 11.5px; color: \${({ theme }) => theme.faint}; font-style: italic; white-space: nowrap; }
            .pd-book .pd-project-strip > a:last-child, .pd-book .pd-project-strip > .pd-word:last-child { margin-inline-start: auto; }
            .pd-book .pd-project-strip > a:last-child .pd-word.pa-reference, .pd-book .pd-project-strip > .pd-word:last-child { flex: none; padding: 3px 11px; border: 1px solid \${({ theme }) => theme.line}; border-radius: 999px; color: \${({ theme }) => theme.ink}; text-decoration: none; font-weight: 500; white-space: nowrap; }
            .pd-book .pd-project-strip > a:last-child .pd-word.pa-reference:hover { border-color: #c0c9df; color: \${({ theme }) => theme.accent}; }
            @media (max-width: \${({ theme }) => theme.narrow}) {
                .pd-book .pd-paragraph.pd-project-strip { order: 0; height: auto; min-height: 40px; padding: 6px 14px; flex-wrap: wrap; gap: 6px 10px; }
                .pd-book .pd-project-strip .pd-strip-neighbours, .pd-book .pd-project-strip .pd-strip-word { display: none; }
            }
        \`;
    }

    protected phone(): RuleSet {
        return css\`
            @media (max-width: \${({ theme }) => theme.narrow}) {
                .pd-book .pd-pages .pd-message.pa-mine > .pd-said { max-width: 92%; }
                .pd-book .pd-head .pd-title { font-size: 24px; }
                .pd-book.pa-layout:has(> .pd-pane > .pd-pane-bar) { grid-template-columns: minmax(0, 1fr); grid-template-areas: 'library' 'head' 'pages'; }
            }
        \`;
    }
}

export const ApplicationForm = $($ApplicationForm);
`}),n(D,{identifier:"browser",type:".mjs",children:`import { createRequire } from 'node:module';
import { mkdirSync, writeFileSync } from 'node:fs';
import { homedir } from 'node:os';
import { join } from 'node:path';

const puppeteer = createRequire(join(process.cwd(), 'package.json'))('puppeteer');
const port = 9333;
const profile = join(homedir(), '.cache', 'dna-platform', 'claude-browser');
const browserUrl = \`http://127.0.0.1:\${port}\`;
const [command, ...words] = process.argv.slice(2);

const usage = [
    'node 4-the-page~browser.mjs open                       open the browser on claude.ai and keep it open',
    'node 4-the-page~browser.mjs tabs                       list the open tabs',
    'node 4-the-page~browser.mjs close [place]              close the tabs left open, all but the first, or those at one place',
    'node 4-the-page~browser.mjs go <url>                   open a url in a tab of its own, kept',
    'node 4-the-page~browser.mjs text <url> [selector]      print what the page, or one element, says',
    'node 4-the-page~browser.mjs html <url> <selector>      print an element\\'s outer HTML',
    'node 4-the-page~browser.mjs tree <url> <selector> [n]  print an element\\'s tree, tag and classes, n deep',
    'node 4-the-page~browser.mjs style <url> <selector> <properties,comma,separated>',
    'node 4-the-page~browser.mjs shot <url> <file.png>      photograph the page',
    'node 4-the-page~browser.mjs scroll <url> <selector>    scroll an element into view, at the top',
    'node 4-the-page~browser.mjs hover <url> <selector> [watch]   hover an element; print the watched element\\'s classes before and after',
    'node 4-the-page~browser.mjs press <url> <selector> [watch]   press an element; print the watched element\\'s classes before and after',
    'node 4-the-page~browser.mjs over <url> [width]         name the elements past the right edge at a width',
].join('\\n');

const attached = async () => {
    try {
        return await puppeteer.connect({ browserURL: browserUrl, defaultViewport: null });
    } catch {
        throw new Error(\`no browser answers at \${browserUrl}; open one first with: node 4-the-page~browser.mjs open\`);
    }
};

// ONE TAB PER PLACE: a tab is kept per origin, claude.ai, the workbench, the built site, a file, and navigated to the
// address asked for rather than a new tab opened for every address; a tab already at the address is reused as it is.
const placeOf = (url) => { try { return new URL(url).origin; } catch { return url; } };
const pageAt = async (browser, url) => {
    const pages = await browser.pages();
    const open = pages.find(page => page.url().split('#')[0] === url.split('#')[0]);
    if (open !== undefined) return open;
    const atThePlace = pages.find(page => placeOf(page.url()) === placeOf(url) && !page.url().startsWith('https://claude.ai/chat/'));
    const page = atThePlace ?? await browser.newPage();
    await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });
    return page;
};

const open = async () => {
    mkdirSync(profile, { recursive: true });
    const browser = await puppeteer.launch({
        headless: false,
        userDataDir: profile,
        defaultViewport: null,
        args: [\`--remote-debugging-port=\${port}\`, '--window-size=1400,1000', '--no-first-run', '--no-default-browser-check'],
        ignoreDefaultArgs: ['--enable-automation'],
    });
    const [page] = await browser.pages();
    await page.goto('https://claude.ai/', { waitUntil: 'domcontentloaded', timeout: 60000 });
    console.log(\`the browser is open at \${browserUrl}, on claude.ai, with its own profile under \${profile}\`);
    console.log('log in there once; it stays signed in. The browser stays open until this process ends.');
    browser.on('disconnected', () => process.exit(0));
    await new Promise(() => undefined);
};

const run = async () => {
    if (command === 'open') return open();
    if (command === undefined) { console.log(usage); return; }
    const browser = await attached();
    try {
        if (command === 'tabs') {
            for (const page of await browser.pages()) console.log(\`\${page.url()}  ·  \${await page.title()}\`);
            return;
        }
        if (command === 'close') {
            const pages = await browser.pages();
            const place = words[0];
            let closed = 0;
            for (const page of pages.slice(1)) {
                if (place !== undefined && !page.url().includes(place)) continue;
                await page.close();
                closed += 1;
            }
            console.log(\`closed \${closed} of \${pages.length} tabs; \${pages.length - closed} open\`);
            return;
        }
        const [url, selector, third] = words;
        if (url === undefined) throw new Error(\`\${command} needs a url\\n\${usage}\`);
        const page = await pageAt(browser, url);
        if (command === 'go') { console.log(\`\${page.url()}  ·  \${await page.title()}\`); return; }
        if (command === 'text') {
            const said = selector === undefined
                ? await page.evaluate(() => document.body.innerText)
                : await page.$$eval(selector, nodes => nodes.map(node => node.innerText).join('\\n---\\n'));
            console.log(said);
            return;
        }
        if (command === 'html') {
            console.log(await page.$$eval(selector, nodes => nodes.map(node => node.outerHTML).join('\\n---\\n')));
            return;
        }
        if (command === 'tree') {
            const depth = Number(third ?? 4);
            console.log(await page.$eval(selector, (root, depth) => {
                const lines = [];
                const walk = (node, level) => {
                    if (level > depth || node.nodeType !== 1) return;
                    const classes = [...node.classList].slice(0, 12).join('.');
                    const text = node.children.length === 0 ? \` "\${(node.textContent ?? '').trim().slice(0, 60)}"\` : '';
                    lines.push(\`\${'  '.repeat(level)}\${node.tagName.toLowerCase()}\${classes === '' ? '' : \`.\${classes}\`}\${text}\`);
                    for (const child of node.children) walk(child, level + 1);
                };
                walk(root, 0);
                return lines.join('\\n');
            }, depth));
            return;
        }
        if (command === 'style') {
            const properties = (third ?? 'font-family,font-size,line-height,color,background-color,padding,margin,border-radius,max-width').split(',');
            console.log(await page.$$eval(selector, (nodes, properties) => nodes.slice(0, 4).map(node => {
                const computed = getComputedStyle(node);
                const box = node.getBoundingClientRect();
                const values = properties.map(property => \`\${property}: \${computed.getPropertyValue(property)}\`).join('; ');
                return \`\${node.tagName.toLowerCase()} \${Math.round(box.width)}x\${Math.round(box.height)} at \${Math.round(box.left)},\${Math.round(box.top)} · \${values}\`;
            }).join('\\n'), properties));
            return;
        }
        if (command === 'shot') {
            const file = selector ?? 'page.png';
            await page.screenshot({ path: file, fullPage: third === 'full' });
            console.log(\`photograph: \${file}\`);
            return;
        }
        if (command === 'scroll') {
            await page.$eval(selector, node => node.scrollIntoView({ block: 'start' }));
            await new Promise(resolve => setTimeout(resolve, 800));
            console.log(\`scrolled to \${selector}\`);
            return;
        }
        if (command === 'hover' || command === 'press') {
            const watched = third ?? selector;
            const classesOf = () => page.$eval(watched, node => \`\${node.tagName.toLowerCase()}.\${[...node.classList].join('.')}\`).catch(() => 'nothing matches');
            const before = await classesOf();
            if (command === 'hover') await page.hover(selector);
            else await page.click(selector);
            await new Promise(resolve => setTimeout(resolve, 600));
            console.log(\`before: \${before}\\nafter:  \${await classesOf()}\`);
            return;
        }
        if (command === 'over') {
            const width = Number(selector ?? 390);
            await page.setViewport({ width, height: 844 });
            await new Promise(resolve => setTimeout(resolve, 800));
            console.log(await page.evaluate(() => \`the page is \${document.documentElement.scrollWidth} wide on a screen \${window.innerWidth} wide\`));
            console.log(await page.evaluate(() => [...document.querySelectorAll('body *')]
                .filter(node => node.getBoundingClientRect().right > window.innerWidth + 1)
                .slice(0, 20)
                .map(node => {
                    const box = node.getBoundingClientRect();
                    const classes = [...node.classList].slice(0, 6).join('.');
                    return \`\${node.tagName.toLowerCase()}\${classes === '' ? '' : \`.\${classes}\`} right \${Math.round(box.right)} of \${window.innerWidth} · "\${(node.textContent ?? '').trim().slice(0, 50)}"\`;
                }).join('\\n')));
            await page.setViewport({ width: 1400, height: 1000 });
            return;
        }
        throw new Error(\`no command \${command}\\n\${usage}\`);
    } finally {
        browser.disconnect();
    }
};

run().catch(error => {
    console.error(String(error.message ?? error));
    process.exit(1);
});
`})]}),"ThePage4"),Uc=s(()=>d(R,{children:[n(U,{}),n(S,{children:"[The Pane](/claudes-reference-manual/#the-pane)"}),d(h,{children:[n(q,{}),"The box beside the words where an artifact or a file given opens, as the application opens one."]}),d(k,{children:[n(y,{children:"What a pane is"}),d(h,{children:["When an artifact's card is pressed in a conversation, the artifact opens beside the words in a pane that takes half the window, the words narrowing beside it, as the application the conversations come from opens one. At the pane's head stand the artifact's title and its kind, a copy that puts the whole of it on the clipboard, and a close; in its body the version itself, a document as writing and code in its box; at its foot the version's number with an arrow to the one before and the one after, and a download that saves the version as a file. A file given to Claude opens the same way, from its chip at the head of my words, its text in the body and no foot, and an upload the export did not carry says so. The pressed card or chip reads pressed while the pane is open; pressing it again, or the close, shuts the pane. On a phone the pane covers the words. The design is ",n(u,{children:"[concept 2](/claudes-design/#a-conversation-as-the-application-shows-it)"}),"."]})]}),d(k,{children:[n(y,{children:"How a pane fits the library's patterns"}),n(h,{children:"A pane is a paragraph with content of its own, drawn as a box, as the reference manual's panel is. What it shows is a field of the conversation it stands in: the card or the chip that was pressed sets it, the pane reads it, and a press is a value set on the book, which draws once. An artifact's version is a chapter of the conversation, written at import as every message is, so the pane draws a chapter and never reads a document from a string. The chapter stands in the book's appendix, listed in a section of the table the side does not show, and is a page of the book like any other, hidden until the pane shows it, since the binder asks that every chapter be listed and the proof that every link on the page land; the days down the side are only days because the index lists no parenthetical entry. Its rules are its own, on its own element, and the conversation's theme only says where in its grid the pane stands."})]}),n(D,{identifier:"code",type:".tsx",children:`import { ElementType, MouseEvent, ReactNode } from 'react';
import { $, $Chemical, selection } from '@dna-platform/chemistry';
import { $Paragraph } from '@dna-platform/public';
import type { $Conversation } from '../../.manual/29-the-conversation~code.tsx';
import { $Artifact, $Attachment, showingBook } from './2-the-artifact-and-the-attachment~code.tsx';

export class $Pane extends $Paragraph {
    style: ElementType = selection.div\`
        .pd-book &.pd-paragraph {
            grid-area: pane;
            display: none;
            flex-direction: column;
            min-width: 0;
            margin: 12px 12px 12px 0;
            border: 1px solid \${({ theme }) => theme.line};
            border-radius: 14px;
            background: \${({ theme }) => theme.paper};
            box-shadow: 0 1px 2px rgba(43, 54, 60, .04), 0 12px 32px rgba(43, 54, 60, .07);
            overflow: hidden;
        }
        .pd-book &.pd-paragraph:has(> .pd-pane-bar) { display: flex; }
        .pd-book & .pd-pane-bar { display: flex; align-items: center; gap: 10px; padding: 10px 10px 10px 18px; border-block-end: 1px solid \${({ theme }) => theme.line}; }
        .pd-book & .pd-pane-title { flex: 1; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-family: \${({ theme }) => theme.sans}; font-size: 14px; font-weight: 500; line-height: 1.4; color: \${({ theme }) => theme.ink}; }
        .pd-book & .pd-pane-kind { font-family: \${({ theme }) => theme.sans}; font-size: 12px; line-height: 1.4; color: \${({ theme }) => theme.soft}; }
        .pd-book & button { border: 0; background: none; padding: 2px 8px; border-radius: 6px; font-family: \${({ theme }) => theme.sans}; font-size: 11.5px; font-weight: 500; line-height: 1.4; color: \${({ theme }) => theme.soft}; cursor: pointer; }
        .pd-book & button:hover { background: rgba(11, 11, 11, .05); color: \${({ theme }) => theme.ink}; }
        .pd-book & button:disabled { opacity: .35; cursor: default; }
        .pd-book & .pd-pane-close { font-size: 18px; padding: 0 8px; }
        .pd-book & .pd-pane-body { flex: 1; min-height: 0; overflow: auto; }
        .pd-book & .pd-pane-body > pre { margin: 0; padding: 18px 22px; font-family: \${({ theme }) => theme.mono}; font-size: 13.5px; line-height: 1.65; color: #14181f; white-space: pre-wrap; overflow-wrap: anywhere; }
        .pd-book & .pd-pane-body .pd-chapter { display: block; padding: 24px 36px 60px; }
        .pd-book & .pd-pane-body .pd-chapter > .pd-title, .pd-book & .pd-pane-body .pd-chapter > a.pa-self-reference { display: none; }
        .pd-book & .pd-pane-body .pd-section > a.pa-self-reference:first-child { display: none; }
        .pd-book & .pd-pane-body .pd-chapter .pd-code-box { margin: 0; border: 0; border-radius: 0; background: transparent; }
        .pd-book & .pd-pane-foot { display: flex; align-items: center; gap: 6px; padding: 8px 10px 8px 18px; border-block-start: 1px solid \${({ theme }) => theme.line}; font-family: \${({ theme }) => theme.sans}; font-size: 12px; font-weight: 500; line-height: 1.4; color: \${({ theme }) => theme.soft}; }
        .pd-book & .pd-pane-version { display: flex; align-items: center; gap: 4px; }
        .pd-book & .pd-pane-version button { padding: 0 6px; font-size: 13px; }
        .pd-book & .pd-pane-download { margin-inline-start: auto; }
        @media (max-width: \${({ theme }) => theme.narrow}) {
            .pd-book &.pd-paragraph:has(> .pd-pane-bar) { position: fixed; inset: 52px 0 0 0; margin: 0; border-radius: 0; z-index: 2; }
        }
    \`;
    get shown(): $Artifact | $Attachment | undefined { return showingBook(this)?.$shown; }
    get artifacts(): $Artifact[] {
        return (this.book as $Conversation | undefined)?.messages.flatMap(message => message.text.find($Artifact)) ?? [];
    }

    $Pane(...chemicals: $Chemical[]) {
        this.$Writing(...chemicals);
        this.containers.replace(this, 'span', this.style);
    }

    neighbour(artifact: $Artifact, step: number): $Artifact | undefined {
        const number = Number(artifact.number) + step;
        return this.artifacts.find(other => other.$artifact === artifact.$artifact && Number(other.number) === number);
    }

    override write(): ReactNode {
        const shown = this.shown;
        if (shown === undefined) return undefined;
        const artifact = shown instanceof $Artifact ? shown : undefined;
        const attachment = shown instanceof $Attachment ? shown : undefined;
        const version = artifact?.version;
        const Version = version === undefined ? undefined : $(version);
        const earlier = artifact === undefined ? undefined : this.neighbour(artifact, -1);
        const later = artifact === undefined ? undefined : this.neighbour(artifact, 1);
        const text = attachment === undefined ? ''
            : attachment.names ? attachment.contents : 'The export does not carry this upload; the name is all it kept.';
        return (
            <>
                <div className="pd-pane-bar">
                    <span className="pd-pane-title">
                        {artifact?.name ?? attachment?.fileName}
                    </span>
                    <span className="pd-pane-kind">
                        {artifact?.kind ?? attachment?.extension.toLowerCase()}
                    </span>
                    <button
                        type="button"
                        className="pd-pane-copy"
                        onClick={event => this.copy(event)}
                    >
                        Copy
                    </button>
                    <button
                        type="button"
                        className="pd-pane-close"
                        aria-label="close"
                        onClick={() => this.close()}
                    >
                        ×
                    </button>
                </div>
                <div className="pd-pane-body">
                    {Version === undefined ? (
                        <pre>
                            {text}
                        </pre>
                    ) : (
                        <Version />
                    )}
                </div>
                {artifact === undefined ? undefined : (
                    <div className="pd-pane-foot">
                        <span className="pd-pane-version">
                            <button
                                type="button"
                                disabled={earlier === undefined}
                                onClick={() => this.show(earlier)}
                            >
                                ‹
                            </button>
                            <span>
                                {\`v\${artifact.number}\`}
                            </span>
                            <button
                                type="button"
                                disabled={later === undefined}
                                onClick={() => this.show(later)}
                            >
                                ›
                            </button>
                        </span>
                        <button
                            type="button"
                            className="pd-pane-download"
                            onClick={() => this.download(artifact)}
                        >
                            Download
                        </button>
                    </div>
                )}
            </>
        );
    }

    show(artifact: $Artifact | undefined): void {
        const book = showingBook(this);
        if (book !== undefined && artifact !== undefined) book.$shown = artifact;
    }

    close(): void {
        const book = showingBook(this);
        if (book !== undefined) book.$shown = undefined;
    }

    copy(event: MouseEvent<HTMLButtonElement>): void {
        const body = event.currentTarget.closest('.pd-pane')?.querySelector('.pd-pane-body');
        void navigator.clipboard?.writeText(body?.textContent ?? '');
    }

    download(artifact: $Artifact): void {
        const type = artifact.$type.replace(/^\\./u, '') || 'md';
        const file = new Blob([artifact.contents], { type: 'text/plain' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(file);
        link.download = \`\${artifact.name} v\${artifact.number}.\${type}\`;
        link.click();
        URL.revokeObjectURL(link.href);
    }

    protected override $Define(): void {
        super.$Define();
        this.classes.add(this, 'pd-pane');
    }
}

export const Pane = $($Pane);
`})]}),"ThePane5"),Gc=s(()=>d(R,{children:[n(U,{}),n(S,{children:"[The Imported Conversation](/claudes-reference-manual/#the-imported-conversation)"}),d(h,{children:[n(q,{}),"The form an import writes a conversation in, file by file, which every importer writes and the reference manuals' types read; held stable, so the manuals change how a conversation looks and behaves without a conversation being imported again."]}),d(k,{children:[n(y,{children:"Why the form is written down"}),n(h,{children:"A conversation with Claude is imported from the application's export into my library as a book, and from then on it is a book: I edit it, cut it into chapters by what they are about, annotate it, and bind it with everything else. The importer that writes it and the types that draw it are built by different hands, and the export of my second account, the older one, is read by a different parser again. So the form they meet at is said once, here, and it is the one thing about an imported conversation that does not move: a change to the look or the behaviour of a conversation is a change to the reference manuals and reaches every conversation at the next bind, and a change to this form is a change to the import, made with care and run again. The three figures at the end of this chapter are excerpts of imported chapters as they stand, cut after their first messages, not written for the purpose."})]}),d(k,{children:[n(y,{children:"The book"}),d(h,{children:["A conversation is a book in a folder of its own under the conversations book, named claude, two dashes, the slug of the conversation's title cut at sixty characters, two dashes and the first eight characters of the application's id. Its book file extends the Claude conversation of ",n(u,{children:"[The Project](/claudes-reference-manual/#the-project)"})," and declares nothing else. Its cover is the bookshelf cover of my manual with two volumes, the conversations book's cover and my story's, and a third when the conversation was held in a project, that project's cover, imported from its book's folder as the first two are and written after them, which the logo files the conversation under, a scheme of six colours, a window, the participants, each a reference to a person's book, the period from the first instant to the last, the messages shown and the messages in all, the title in the reference form with its key in the paren, the author as my librarian, the subject as the conversations book, the project as Claude's own annotation, the account right after it as its twin, leading to the account's mention in Dougs Claude, the origin after the account, the application's own id of the conversation, drawn nowhere, and an illustration inserted from the file beside the cover. Its synopsis is the application's own summary as one paragraph, kept for the catalogue and never shown on the page. Its table lists its one chapter, Conversation, in no section, so the index lists nothing and the side draws nothing, then every artifact version in an appendix section headed Artifacts, each entry parenthetical, and last the parenthetical row naming the book, the synopsis and the table."]})]}),d(k,{children:[n(y,{children:"The title"}),n(h,{children:`A book is keyed apart from its title, on my ruling that the library must have no chance collisions with a conversation's name: the key is claude, two dashes, the title, two dashes and the first eight characters of the application's id, and the title is what the page shows, so the cover's title form carries the title as its words and the key in its paren, every reference to the book carries the key in its paren and the title as its words, the entry chapter in the conversations book and in a project book is titled the same way, the book's address is the slug of the key, and the ledger names the book by its key. Two conversations whose ids share those eight characters stop the run, which has not happened, so nothing is numbered, and two books may show one title and differ by key alone. A book's title is the conversation's name made sensible, and a name the application gave can hold anything, so the import writes it to the catalogue's grammar before it writes anything else, through the binder's own sanitizing, one function in its language, promised there and written nowhere twice, on my ruling that text is normalized for ids exactly the same everywhere. The grammar reads a title through the notation, so what holds for the words of a reference holds for a title, and the sanitizing makes a title hold: it is put in its normal form, what cannot be seen is removed, every run of space is one space, and a pictograph the application put first is dropped; a slash is the separator between a book and its chapter, and the grammar's escape for it, a dot before the slash, does not carry through a title today, so a slash becomes the sign that looks like one, the division slash, "TON∕Cocoon", and a backslash its lookalike, on my ruling, since neither reaches a file name, the folder being the slug; a parenthesis closes the name slot a reference may carry and a bracket of either kind opens or ends a form, so a parenthesis becomes ❨ or ❩ and a square bracket ⁅ or ⁆, the lookalikes that read closest in the three faces; a brace stays and is written as its entity, as an ampersand, a less-than and a greater-than are, by the binder's own writer; a newline ends a form and is never written. The words shown before a key's paren are never dot-escaped, since the language reads only the paren as the name; the key is, a dot in it written doubled, and neither begins with a dot and a slash, which means within here. The title's slug is the book's address, and the slug keeps every alphabet, puts the text in its normal form, drops what cannot be seen and keeps a combining mark, reads an ampersand, a plus, an at-sign, a percent sign, an equals and a not-equals as words and a sharp after a letter as the word sharp, treats every apostrophe alike, and makes a dash of any other sign, so a title must slug to something, and two keys that slug alike are one address, which the catalogue refuses. A title, a mention and a heading wear as their id the fragment of their address, which the catalogue makes from the key, so an entry titled with a key wears the key's slug, and a cover's or a synopsis's title wears the slug of its words. The same spelling of the title and the key is written wherever either stands: the cover's title form, the entry's title and its reference, and every table that lists it.`}),n(h,{children:"A conversation the application gave no name takes its title from its first message, the first sentence of it cut to a handful of words and made sensible as any title is, which is how the application names a chat itself; a first message with no words in it, a picture alone, leaves the conversation titled by the day it began, Untitled followed by the date; and the id in the key tells either apart from its like. The ledger keeps the application's own name, empty or not, beside the key the import gave, so a given name and a made one are told apart."})]}),d(k,{children:[n(y,{children:"The notation in the text"}),n(h,{children:"The catalogue reads a chapter's file for the library's notation, and it reads exactly two kinds of run: the text between tags, and a string, which is a quoted literal or a template with nothing substituted; a comment, a tag's name and an import's path are never read. A conversation's words may carry the notation's own brackets, two in a row around a term as a logic does, and read raw they form a title, a mention or a reference, refused when the form is malformed and resolved silently when it is not. So in prose, headings, items, words and captions a bracket of either kind is written as its numeric entity, which the page shows as the bracket and the scanner never matches, since only a matched form is read for entities, and the writing of it is the binder's own, the inverse of its reader, which the reference transform uses to write a form's words back into prose and the importer uses as it is, never an escape of its own; and a listing in a code box, which cannot carry an entity, is written as a template with a substitution in it whenever it holds a bracket, since a template with a substitution is not read, and its text on the page is the listing exactly."})]}),d(k,{children:[n(y,{children:"The conversation chapter"}),d(h,{children:["The whole conversation is one chapter, numbered 1 and titled Conversation, carrying no date of its own, since the cover's period and each message's instant hold the days as annotations for a later pass to consume; the chapters a conversation is cut into come with comprehension, by hand, and the day-based split that stood here until 21 October 2026 is struck on my word. The chapter holds one Message per message, said at its instant, which with its speaker is the message's whole address, since a question and its answer may share an instant to the microsecond in the older account's export, opening with its Origin, the application's own id of the message, drawn nowhere, and then its Speaker as a reference to the person's book, mine or Claude's. What was said is the library's own writing, paragraphs, headings, lists and lines nested as written, tables, bold, emphasis, verbatim and quoted words, inline math and displayed equations, a link as a word carrying a reference; a heading is written without the bold marks the application put around its words, since a heading is set bold already and the library reads a heading apart at its colon, which left a bare colon standing as a heading with no words and no id, while emphasis and code inside a heading are kept. A block of code is ",n(u,{children:"[a code box](/dougs-reference-manual/#the-code-box)"})," with its listing as a template literal of its lines, named for its language, srt where the notation's operators stand and nothing where the application named none. A tool Claude used is ",n(u,{children:"[an action](/claudes-reference-manual/#the-action-and-the-result)"}),", its result left out. A file Claude made is ",n(u,{children:"[an artifact](/claudes-reference-manual/#the-artifact-and-the-attachment)"}),", its sentence as the caption, its file beside the chapter, the export's id of the artifact and the place of the version chapter it opens, the uncut slug of the version's title; a file given to him is an attachment with its file beside the chapter, or the sentence alone when the export carries no content. A file beside a chapter is named for the chapter and the file, chapter, tilde, name and type, the type the application gave the file and never one chosen for it, with one exception: a document the export holds only as the text extracted from it, a pdf or a spreadsheet, is written as a text file, since a document's type on a file of text would misstate it. A file stands beside a chapter only because the chapter inserts it. The message says of itself that its headings are opaque, by ",n(u,{children:"[The Address](/dougs-reference-manual/#the-address)"}),", so a heading inside an answer is not a place."]})]}),d(k,{children:[n(y,{children:"The version"}),d(h,{children:["Every version of every artifact is a chapter of the book's appendix, numbered with the appendix mark and named for the artifact and its version, marked Version and titled with the artifact's name and its version number. A document's version is one section said to be opaque, headed with the name and the number so thirteen versions wear thirteen ids, holding the document as writing; a program's version is a code box. The side hides these chapters and the card opens them in ",n(u,{children:"[the pane](/claudes-reference-manual/#the-pane)"}),"."]})]}),d(k,{children:[n(y,{children:"The entry and the ledger"}),d(h,{children:["Beside the folder, in ",n(u,{children:"[Our Conversations](/our-conversations/)"}),", the import writes one entry chapter per conversation, numbered in the order imported and named by the slug of the key: its part the month, its date the conversation's last day, the conversation's cover as a volume, the title with the key in its paren, a caption counting the exchanges and leading to the book, and the synopsis inserted from the book's own. The conversations book's table lists every entry under the project its cover names, each project a section headed with its name, the sections ordered by their latest conversation and the rows within newest first, the conversations under no project last in a section headed No project, each row with an arrow leading into the book; the heading is the part's place, so an address naming it opens the register on that part. Until 2026-10-19 the table listed the entries under their months; the register's own table was rewritten by hand that day, and the importer writes this form. The import's memory stands nowhere beside the entry: it is the origins on the writing, ",n(u,{children:"[The Origin](/claudes-reference-manual/#the-origin)"}),", the conversation's on its cover and each message's on the message, and one ledger per import configuration, a dataset regardless of the date it was exported, one file for each account beside its chapter of ",n(u,{children:"[Dougs Importer](/dougs-importer/)"}),", updated in place by every run, keyed by the conversation's id and holding neither name nor folder, which is how a later run knows a conversation is already in, has grown, or was edited by hand, and finds a book by the origin on its cover however it was renamed, moved or cut, as ",n(u,{children:"[The Ledger](/dougs-importer/#the-ledger)"})," says."]})]}),d(k,{children:[n(y,{children:"What is held stable, and what may move"}),d(h,{children:["Held stable: the folder and its five files, the file names of the chapter, of versions and of resources, the tags and their attributes as the figures show them, the import lines as the figures show them too, one a manual file, naming the file each tag lives in and never the manual's barrel, since Sprint 117 on 28 October 2026, so the binder reads from them what a change to a manual reaches, the reference forms for a person and a version, the origins, the entry and the ledger. The binder holds some of it itself and refuses a bind that breaks it: every chapter listed in its table, every link landing, every id worn once, no file beside a chapter that nothing inserts, a title with no parenthesis or bracket in it, a file stem ending in no dash. The rest is the importer's promise, in ",n(u,{children:"[The Writing](/dougs-importer/#the-writing)"}),". Free to move without an import: everything a reader sees, which is the manuals', the message's bubble and its hour, the code box's bar, the card and the chip, the pane and its column, the tally, the day count, the head that scrolls, every colour and every measure."]})]}),d(k,{children:[n(y,{children:"What the export holds that the form does not carry"}),n(h,{children:"The export carries things the form leaves out, each counted by the import and written nowhere: Claude's thinking and a tool's result, left out on my ruling; a prompt the application injected; a memory Claude read or wrote; a place card on a map; the link from a conversation to an artifact published on the web, whose published copy the export keeps in a category of its own; and a conversation captured live from the application, which holds an artifact's content as the export does not, counts its turns in its own way, and is compared with the export by when each last changed and never by count. Each is a form owed if it is ever wanted, said here first and then written, never written around."})]}),d(k,{children:[n(y,{children:"The older account"}),d(h,{children:["My older account's export is in the application's earlier shape, one archive with its own schema, and its import is being generalized by the other team to read it. It writes this same form and nothing else: a conversation from either account is one kind of book, told apart by the account its cover says, ",n(u,{children:"[The Account](/claudes-reference-manual/#the-account)"}),", the line its page draws for it, and its line in the ledger."]})]}),n(D,{identifier:"conversation",type:".tsx",children:`import { Bold, Chapter, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Message, Speaker } from '../../../.manual/29-the-conversation~code.tsx';
import { Action } from '../../.manual/1-the-action-and-the-result~code.tsx';\r
import { Attachment } from '../../.manual/2-the-artifact-and-the-attachment~code.tsx';\r
import { Origin } from '../../.manual/8-the-origin~code.tsx';

export default () => (
    <Chapter>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2025-03-21T17:51:17.196966Z"
        >
            <Origin>30b7e596-43c1-43ae-95cf-525954992cc2</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                In three sentences, rate this on a scale of accuracy, with a mind for scientific accuracy, published fact,
                and free from fairness bias to multiple inconsistent perspectives:
            </Paragraph>
            <Attachment
                identifier="paste"
                type=".txt"
            >
                Attached “paste.txt”
            </Attachment>
            <Attachment>Uploaded “paste.txt”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2025-03-21T17:51:20.941507Z"
        >
            <Origin>a19143fd-deef-476f-b227-8a68602990d4</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Based on the provided text about quantum computing and Shor's algorithm:</Paragraph>
            <Paragraph>
                The claims about the progress of Shor's algorithm implementation (15 in 2001, 21 in 2012, 35 in 2022) are
                accurate and align with published research. The concerns about noise scaling with qubit count represent a
                legitimate scientific challenge acknowledged by researchers in the field, though they're presented with
                stronger certainty than the scientific consensus warrants. The characterization of quantum computing as
                "vaporware in its purest form" is an opinion that overstates the case against quantum computing's
                feasibility, as significant experimental progress continues despite acknowledged technical hurdles.
            </Paragraph>
        </Message>
        <Message
            at="2025-03-21T17:53:25.714188Z"
        >
            <Origin>5a889ae7-0062-48c4-b23a-2c240c5ff367</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Prove it. What constitutes significant? I recall Google's claims to quantum supremacy were, by scott
                aaronson acknowledged as a very tailored algorithm that skirts the line between usability. Am I right that
                no fault tolerant quit has come to exist? How would you feel about a omputer with 3300 transistors, none of
                which were fault tolerant, and an exponential scaling pronlem. I am 42. What was quantum computing like back
                when I was 5? Plot the rate of progress. Show me I am wrong
            </Paragraph>
        </Message>
        <Message
            at="2025-03-21T17:54:04.112399Z"
        >
            <Origin>545a2ea1-7a09-4a69-8747-bc638cd61a92</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Let me analyze this systematically by using published research to evaluate quantum computing progress.
            </Paragraph>
            <Action>Ran code</Action>
            <Paragraph>Based on the analysis, I'll address your points directly:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Factorization Progress
                    </Word>: You are correct about the numbers factored (15 in 2001, 21 in 2012, 35 in 2022). This shows
                    extremely slow progress in practical implementation of Shor's algorithm, despite theoretical promise.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Fault Tolerance
                    </Word>: You are correct that no fully fault-tolerant logical qubit has been demonstrated. While Google
                    demonstrated error correction that showed logical error rates lower than physical error rates in 2021,
                    we're still far from the robust fault-tolerance needed for practical quantum computing.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Google's Quantum Supremacy
                    </Word>: You're right about Scott Aaronson's assessment. The 2019 claim involved a highly specialized
                    problem designed specifically to showcase quantum advantage. By 2022, researchers showed the calculation
                    could be done on classical computers in days rather than the claimed 10,000 years.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Qubit Growth
                    </Word>: While raw qubit numbers have increased (from 2 in 1998 to 1121 in 2023), these are noisy
                    physical qubits, not error-corrected logical qubits. The negative value in the doubling calculation
                    shows inconsistent growth.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Error Correction Challenge
                    </Word>: You're correct about the scaling problem - current error correction codes require 10-1000
                    physical qubits per logical qubit. This means those 3300 logical qubits needed for RSA would require
                    millions of physical qubits with current techniques.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        When You Were 5 (circa 1988)
                    </Word>: Quantum computing was purely theoretical. The first working 2-qubit system wasn't demonstrated
                    until 1998, and practical implementations have fallen far short of theoretical promises.
                </Line>
            </Paragraph>
            <Paragraph>
                Your skepticism about near-term practical quantum computing that could threaten encryption is well-founded.
                While I wouldn't go as far as calling it "vaporware in its purest form," the gap between theoretical promise
                and practical achievement remains vast, and the challenges of fault tolerance and scalability are
                fundamental.
            </Paragraph>
        </Message>
    </Chapter>
);
`}),n(D,{identifier:"notation",type:".tsx",children:`import { Bold, Chapter, Emphasis, Paragraph, Title, Word } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/33-the-code-box~code.tsx';\r
import { Message, Speaker, Verbatim } from '../../../.manual/29-the-conversation~code.tsx';
import { Action } from '../../.manual/1-the-action-and-the-result~code.tsx';\r
import { Origin } from '../../.manual/8-the-origin~code.tsx';

export default () => (
    <Chapter>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-06-06T12:29:42.862941Z"
        >
            <Origin>019e9ce9-51c1-7c81-894d-4b2602ae167a</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Take a look in the recent project documents. The evolution one. We are doing pretty well. Learn the syntax
                too. You have to understand the definitions in the syntax to lower it to first order logic so you can reason
                formally
            </Paragraph>
            <Paragraph>I want to see if we can divide ip a big insight into axioms with semantic meaning</Paragraph>
        </Message>
        <Message
            at="2026-06-06T12:32:17.481797Z"
        >
            <Origin>019e9ce9-51c6-72b4-aa2b-f15a80612e62</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Read /mnt/project/The_Evolution_of_SRT</Action>
            <Paragraph>Let me read the middle phases I'm missing.</Paragraph>
            <Action>Read /mnt/project/The_Evolution_of_SRT</Action>
            <Paragraph>
                I have the shape of it. Let me read the formal foundation and the FOL spec so I'm reasoning from the actual
                transpilation rules, not from intuition.
            </Paragraph>
            <Action>Read /mnt/project/Doug__Semantic_Reference_Theory__A_Formal_Foundation</Action>
            <Action>Read /mnt/project/Seren__First-Order_Logic__Complete_Formal_Specification</Action>
            <Paragraph>
                Read the Evolution doc end to end, plus the Formal Foundation and the FOL spec for the lowering target. We
                <Word>
                    <Emphasis />
                    are
                </Word> doing well — Phases I–IV are load-bearing and the current-edge section is honest about exactly where
                the soft spots are. Let me lock the syntax→FOL dictionary first, since that's the prerequisite you named,
                then show where lowering actually bites.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The lowering dictionary
                </Word> (everything bottoms out in one ternary <Word>
                    <Verbatim />
                    R
                </Word>):
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {\`\${''}x =t> y        R(x,y,t)              the sole primitive
x !=t> y       ¬R(x,y,t)
x == y         x = y                 (== is FOL-native; see the eq seam below)
x => y         ∃t R(x,y,t)           relatedness; ≡ R(x,y,r) once Universality fixes r
s -> t         ∀u∀v(R(u,v,s) → R(u,v,t))     RELATION reading
x -> t         R(x,x,t)                       SELF-RELATION reading  ← the two collide
s !-> t        ∃u∃v(R(u,v,s) ∧ ¬R(u,v,t))
(x,y)          eliminated by expansion to the Specification witness — never a function symbol
=|> & | || <iff> !   → ∧ XOR ∨ ↔ ¬
E[x]:P  →  ∃x P     E(x:Q):P  →  ∃x(Q ∧ P)     free vars universally closed\`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    One that lowers clean
                </Word> — Specification, using only the relation reading:
            </Paragraph>
            <CodeBox>
                {\`∀x∀y( (∃u R(x,y,u)) →
        ∃s( R(x,y,s) ∧ ∀t( R(x,y,t) → ∀p∀q(R(p,q,s)→R(p,q,t)) ) ) )\`}
            </CodeBox>
            <Paragraph>
                And the antisymmetry theorem lowers to coextension-implies-identity — which is <Word>
                    <Emphasis />
                    not
                </Word> logically valid on its own. You need Directionality to close it. So formally, Directionality <Word>
                    <Bold />
                    is
                </Word> the extensionality axiom for relationships. That's the same fact Phase III recovered by correcting
                the "non-extensional" claim; the lowering makes it forced rather than observed.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    One that resists
                </Word> — Qualification. Watch the failure:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {\`t -> (x,y) =|> ( x' !-> x | y' !-> y ) =|> x' !=t> y'\`}
            </CodeBox>
            <Paragraph>
                If you lower <Word>
                    <Verbatim />
                    t -&gt; (x,y)
                </Word> by the <Word>
                    <Emphasis />
                    relation
                </Word> reading, it says t's extension ⊆ the bottom's — t relates almost nothing. That's clearly not the
                intent ("t has signature (x:X, y:Y)"). So Qualification cannot be lowered at all under either current
                reading of <Word>
                    <Verbatim />
                    -&gt;
                </Word>. The transpilation <Word>
                    <Bold />
                    proves
                </Word> the role-indexed arrow is owed — it's not a stylistic gap, it's a place where the FOL image is
                undefined. Same forcing case the doc names with <Word>
                    <Verbatim />
                    r -&gt; ref
                </Word>.
            </Paragraph>
            <Paragraph>
                So before any "big insight" gets factored: which one do you mean? My read is the most insight-shaped
                factorable block is <Word>
                    <Bold />
                    Phase VI's nine structure-preservation conditions
                </Word> — "faithful specialization = the map <Word>
                    <Verbatim />
                    (x,t,y)↦(x',t',y')
                </Word> preserves the whole inheritance structure." Right now that's one undifferentiated insight; the
                current-edge section already asks whether the nine are independent and whether pairwise preservation is
                complete. That's exactly "divide an insight into axioms each carrying its own semantic meaning," and three
                of the nine are suspect under the orphaned-edge case.
            </Paragraph>
            <Paragraph>Is Phase VI the insight you want to factor — or do you have a different one in hand?</Paragraph>
        </Message>
    </Chapter>
);
`}),n(D,{identifier:"version",type:".tsx",children:`import { Bold, Chapter, Heading, Paragraph, Section, Title, Word } from '@dna-platform/public';
import { Opaque } from '../../../.manual/32-the-address~code.tsx';
import { Version } from '../../.manual/2-the-artifact-and-the-attachment~code.tsx';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Quantum Computing Reality Check v1 ]]</Title>
        <Section>
            <Opaque />
            <Heading>Quantum Computing Reality Check at version 1</Heading>
            <Paragraph>
                📊 <Word>
                    <Bold />
                    QUANTUM COMPUTING REALITY CHECK
                </Word> 📊
            </Paragraph>
            <Paragraph>The truth about quantum computing breaking encryption might surprise you...</Paragraph>
            <Paragraph>
                🧮 Quantum Progress Report: • 2001: Factored 15 • 2012: Factored 21 • 2022: Factored 21 → 35 • Needed to
                break RSA: 3,072+ bits
            </Paragraph>
            <Paragraph>
                📈 The Math Doesn't Lie: At current rates of progress, quantum computers won't break today's encryption
                until approximately THE YEAR 54,080 C.E.
            </Paragraph>
        </Section>
    </Chapter>
);
`})]}),"TheImportedConversation6"),Vc=s(()=>d(R,{children:[n(U,{}),n(S,{children:"[The Account](/claudes-reference-manual/#the-account)"}),d(h,{children:[n(q,{}),"The account a conversation with Claude was held under, said on the conversation's cover as the project's twin, and the line the conversation draws for it beside the project line."]}),d(k,{children:[n(y,{children:"Two accounts, one kind of book"}),d(h,{children:["I have talked with Claude under two accounts, the one I use now and an older one, and every conversation of either is imported as the same kind of book. Which account held it is a fact of Claude's, as the project is, so it is said here and not in the library's manual: an account is an annotation of a conversation's cover, the twin of ",n(u,{children:"[the project](/claudes-reference-manual/#the-project)"}),", holding the account's name and standing a reference to it, written right after the project line. It leads to a mention and never to a chapter, on my ruling that the accounts must be free to move: the two, ",n(u,{children:"[DNA](/dougs-claude/#dna)"})," and ",n(u,{children:"[DNA Legacy](/dougs-claude/#dna-legacy)"}),", are mentioned in ",n(u,{children:"[The Accounts](/dougs-claude/#the-accounts)"}),", and a mention makes its id wherever it stands, so the cover's reference holds wherever the sections go."]}),n(h,{children:"A conversation with Claude draws an account line after its project line whenever its cover says one, a word said to be a label and the account's name leading to the mention, so a reader of any conversation sees which account it was held under without opening its record. The record says it too, in its own field, which is how the import tells the two apart; a record written before the field existed reads as the account I use now."})]}),n(D,{identifier:"code",type:".tsx",children:`import { ReactNode } from 'react';
import { $, $check } from '@dna-platform/chemistry';
import {
    $Annotation, $Chapter, $Cover, $Paragraph, $Reference, $Writing, AnnotationSpecification, Reference as reference,
    Word as word, binder, html, specify,
} from '@dna-platform/public';
import { Label as label } from '../../.manual/8-the-author-and-the-subject~code.tsx';

export class $Account extends $Annotation {
    specification = new AccountSpecification();
    get name(): string { return binder.reference(html.copy(this.text))?.name ?? ''; }
    get means(): $Reference | undefined { return this.annotations.expressed($Reference); }

    protected override $Define(): void {
        super.$Define();
        const link = binder.reference(html.copy(this.text));
        if (link === undefined) return;
        const Reference = $(reference);
        this.annotations.add(this,
            <Reference>{link.identifier}</Reference>
        );
    }

    override write(): ReactNode { return this.name; }
}

export class AccountSpecification extends AnnotationSpecification {
    @specify('an account is said of a cover')
    $saidOfACover(writing: $Writing): void {
        $check(writing instanceof $Chapter && writing.is($Cover), 'an account is said of a cover, and this is not one');
    }
}

export class $AccountLine extends $Paragraph {
    $cover?: $Chapter;
    get cover(): $Chapter | undefined { return this.$cover ?? this.book?.cover; }
    get account(): $Account | undefined { return this.cover?.annotations.expressed($Account); }

    override write(): ReactNode {
        const account = this.account!;
        const Word = $(word);
        const Said = $(label);
        const Reference = $(reference);
        return (
            <>
                <Word>
                    <Said />
                    account
                </Word>
                <Word>
                    <Reference>{account.means!.identifier}</Reference>
                    {account.name}
                </Word>
            </>
        );
    }

    protected override $Define(): void {
        super.$Define();
        this.classes.add(this, 'pd-account-line');
    }
}

export const Account = $($Account);
export const AccountLine = $($AccountLine);
`})]}),"TheAccount7"),Yc=s(()=>d(R,{children:[n(U,{}),n(S,{children:"[The Origin](/claudes-reference-manual/#the-origin)"}),d(h,{children:[n(q,{}),"The application's own id of a conversation and of each of its messages, kept on the writing as an annotation, in the object model and drawn nowhere, so an import finds a book again whatever it has been renamed to."]}),d(k,{children:[n(y,{children:"The id on the writing"}),d(h,{children:["The application gives every conversation and every message an id of its own, and the import used to keep those ids in a record beside each entry, with the book's name beside them. A name is mine to change, and I will rename conversations, move them and cut them into chapters, so a memory keyed by name loses the book it remembers. My ruling: the import's memory belongs on the writing itself, as annotations, in the object model, and it need not be surfaced. So an origin is an annotation holding the id, said of ",n(u,{children:"[the conversation](/dougs-reference-manual/#the-conversation)"}),"'s cover after ",n(u,{children:"[the account](/claudes-reference-manual/#the-account)"}),", and said of every message as its first child before the speaker. It draws nothing on the page and answers its id to code as its uuid: the conversation with Claude answers its origin from its cover, and a message's is read off the message's annotations."]}),d(h,{children:["With the ids on the writing, an import keeps one ledger per import configuration, a dataset regardless of the date it was exported, updated in place by every run, keyed by the conversation's id and holding neither name nor folder, and finds a book by the origin on its cover, so renaming, moving or cutting a book never loses it; the form is in ",n(u,{children:"[The Imported Conversation](/claudes-reference-manual/#the-imported-conversation)"}),"and the ledger in ",n(u,{children:"[The Ledger](/dougs-importer/#the-ledger)"}),"."]})]}),n(D,{identifier:"code",type:".tsx",children:`import { ReactNode } from 'react';
import { $, $check } from '@dna-platform/chemistry';
import { $Annotation, $Chapter, $Cover, $Writing, AnnotationSpecification, html, specify } from '@dna-platform/public';
import { $Message } from '../../.manual/29-the-conversation~code.tsx';

export class $Origin extends $Annotation {
    specification = new OriginSpecification();
    get uuid(): string { return html.copy(this.text).trim(); }

    override write(): ReactNode { return null; }
}

export class OriginSpecification extends AnnotationSpecification {
    @specify('an origin is said of a cover or a message')
    $saidOfACoverOrAMessage(writing: $Writing): void {
        $check((writing instanceof $Chapter && writing.is($Cover)) || writing instanceof $Message, 'an origin is said of a cover or a message, and this is neither');
    }
}

export const Origin = $($Origin);
`})]}),"TheOrigin8"),Zc=s(()=>d(R,{children:[n(U,{}),n(S,{children:"[The Conversation's Page](/claudes-reference-manual/#the-conversations-page)"}),d(h,{children:[n(q,{}),"A conversation with Claude on its page: the library's conversation with Claude's side, the project's strip when I came from a project, and the pane. Every conversation's book extends this chapter's, and no project's does."]}),d(k,{children:[n(y,{children:"The side, the search and the pane"}),d(h,{children:["The page of a conversation with Claude is the library's conversation page with Claude's side. The side lists the conversation's chapters and parts by the index's ways, folded and counted, so a conversation of one chapter, which every conversation is until I cut it by hand, shows its one entry with its count; under the open chapter's entry stands what I asked, each message of mine a row leading to its message, and the files pasted into the chapter as tabs, each opening the pane on that file beside the words. The search, the index's fourth way, stands at the head of the side over the messages, each hit leading to its message by the message's own referent, and while a word stands it is marked on the page by the browser's own highlights, which paint over the writing and rebuild nothing. The page draws no side only when the index has no entry. The chapter in front is the open page, since a conversation turns chapter by chapter. The bar carries the project line and the account line, said in ",n(u,{children:"[The Project](/claudes-reference-manual/#the-project)"})," and ",n(u,{children:"[The Account](/claudes-reference-manual/#the-account)"}),". Concept 9 of ",n(u,{children:"[The Conversation and the Project](/claudes-design/#the-conversation-and-the-project)"}),". The names, outline, attachment tab and the highlight's, are the session's until I keep or change them."]})]}),d(k,{children:[n(y,{children:"The way back, on the trail"}),d(h,{children:["A row pressed on ",n(u,{children:"[the project's page](/claudes-reference-manual/#the-projects-page)"}),", or a hit of its search, writes a trail into the browser's storage before the page turns: the project page it leaves, the conversation it leads to, the row's place in the count, the rows either side, the word typed, the row itself, and the project's mark as its cover draws it, the illustration and the scheme's declarations, carried because the project's cover is not on the conversation's page. This page reads the trail once the book has turned on the client, the framework's own moment after the mount and the layout and never at the server's draw, and only when the trail leads to it; from it the page draws the project's strip under the bar: the mark leading to the project, its name, the place of the count, the neighbours leading to theirs, the word I was searching, and the way back to where I was. Opened by its address alone a conversation draws no strip, since the strip is the way back to where I came from, and the bar's project line is its way to the project. No cookie and no server hold the trail, and nothing of the package changes. The trail is this chapter's, written here and read here, so the project's page imports this one for it and this one imports nothing of the project's. The names, trail, strip and trail mark, are the session's until I keep or change them."]})]}),d(k,{children:[n(y,{children:"Why a chapter of its own"}),n(h,{children:"Every conversation's book file extends this chapter's book by the file's own name, never by the manual's barrel, which re-exports every chapter; and since Sprint 117 a book's digest is what its files import, so a change to the project's page, or to any chapter of this manual a conversation does not import, reaches no conversation and binds in minutes. What a conversation reads of its cover, the project, the account and the origin, stands in those chapters, one class each, because the project's page reads the same cover through the same classes, and two copies of one class cannot read one cover."})]}),n(D,{identifier:"code",type:".tsx",children:`import { ReactNode } from 'react';
import { $, $Chemical } from '@dna-platform/chemistry';
import { $Chapter, $Paragraph, $Referent, $Section, $Writing, Reference as reference, Word as word, binder, html } from '@dna-platform/public';
import { Theme } from '@dna-platform/public';
import { $Appendix, $Index, Results as results, Search as search, TreeFolder as treeFolder, contentOf } from '../../.manual/14-the-entry~code.tsx';
import { $Conversation, $Message, $Mine } from '../../.manual/29-the-conversation~code.tsx';
import { $Mark, Marking } from '../../.manual/19-the-cover~code.tsx';
import { $Switch } from '../../.manual/9-the-switch~code.tsx';
import { Light as light, Tone as tone } from '../../.manual/16-the-tone~code.tsx';
import { Words } from '../../.manual/1-the-book~code.tsx';
import { ApplicationForm } from './4-the-page~theme.tsx';
import { $Artifact, $Attachment } from './2-the-artifact-and-the-attachment~code.tsx';
import { Pane as pane } from './5-the-pane~code.tsx';
import { $Account, AccountLine as accountLine } from './7-the-account~code.tsx';
import { $Origin } from './8-the-origin~code.tsx';
import { $Project, ProjectLine as projectLine } from './3-the-project~code.tsx';

const fileGlyph = '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linejoin="round" stroke-linecap="round"><path d="M4 1.5h5.5L13 5v9.5H4z"/><path d="M9.5 1.5V5H13M6 8h4M6 10.5h4"/></svg>';

// What I asked in a chapter: each message of mine a row under the chapter's entry in the side, its first words leading
// to the message. Sprint 115, concept 9 of Claudes Design; \`Outline\` is a PROXY name.
export class $Outline extends $Paragraph {
    $asked?: $Chapter;

    $Outline(...chemicals: $Chemical[]) {
        this.$Writing(...chemicals);
        this.containers.replace(this, 'span', 'div');
    }

    override write(): ReactNode {
        const book = this.book as $ClaudeConversation | undefined;
        const chapter = this.$asked;
        if (book === undefined || chapter === undefined) return undefined;
        const Word = $(word);
        const Reference = $(reference);
        const asked = chapter.text.find($Message).filter(message => message.is($Mine));
        if (asked.length === 0) return undefined;
        return (
            <ol className="pd-asked">
                {asked.map((message, index) => {
                    const place = book.placeOf(message);
                    const opening = book.wordsOf(message).text;
                    return (
                        <li key={index}>
                            {place === undefined ? opening : (
                                <Word>
                                    <Reference>{place}</Reference>
                                    {opening}
                                </Word>
                            )}
                        </li>
                    );
                })}
            </ol>
        );
    }

    protected override $Define(): void {
        super.$Define();
        this.classes.add(this, 'pd-outline');
    }
}

// A file given in a chapter, as a tab under the chapter's entry, opening in the pane as its chip does.
export class $AttachmentTab extends $Switch {
    $attachment?: $Attachment;
    override get on(): boolean { return this.$attachment?.shown === true; }

    override press(): void {
        this.$attachment?.press();
    }

    override write(): ReactNode {
        const attachment = this.$attachment;
        if (attachment === undefined) return undefined;
        return (
            <>
                <span
                    className="pd-drawing"
                    dangerouslySetInnerHTML={{ __html: fileGlyph }}
                />
                <span className="pd-tab-name">
                    {attachment.fileName}
                </span>
                <small>
                    {attachment.names ? \`\${attachment.lineCount} lines\` : 'not carried'}
                </small>
            </>
        );
    }

    protected override $Define(): void {
        super.$Define();
        this.classes.add(this, 'pd-file-tab');
    }
}

export const Outline = $($Outline);
export const AttachmentTab = $($AttachmentTab);
const outline = Outline;
const attachmentTab = AttachmentTab;

// THE TRAIL: where I came from, kept in the browser's storage by a press on a project page's row and read once the page
// has arrived, so a conversation can say the way back and a project page can land where I left it. No cookie and no
// server. Sprint 115, concepts 9 and 10 of Claudes Design, on Doug's "components with cookies"; \`Trail\`, \`ProjectStrip\`
// and \`TrailMark\` are PROXY names. The project's page writes it; this chapter reads it, so the project's page imports
// this one and never the reverse, and a change to the project's page reaches no conversation. Sprint 117, D2.
export type Place = { title: string; href: string };
export type Trail = {
    at: string;
    from: { page: string; title: string; href: string; marking: Marking };
    to: string | undefined;
    within: { title: string; index: number; of: number; prev?: Place; next?: Place };
    word: string;
    row: string | undefined;
};
export const trailKey = 'library-trail';
export const keptTrail = (): Trail | undefined => {
    try {
        const text = typeof localStorage === 'undefined' ? null : localStorage.getItem(trailKey);
        if (text === null) return undefined;
        const trail = JSON.parse(text) as Trail;
        return trail.from?.marking === undefined ? undefined : trail;
    } catch {
        return undefined;
    }
};

// The project's mark as the trail carries it: a mark drawn from the marking the project page wrote, since the project's
// cover is not on the conversation's page.
export class $TrailMark extends $Mark {
    $marking: Marking = { drawing: '', declarations: '' };
    override get marking(): Marking { return this.$marking; }
}

// The project's strip, a component of the project page carried into a conversation's page on the trail: the project's
// mark as the bar draws it, its name, my place in it, the conversations either side, the word I had typed, and the way back.
export class $ProjectStrip extends $Paragraph {
    get conversation(): $ClaudeConversation | undefined { return this.book as $ClaudeConversation | undefined; }

    $ProjectStrip(...chemicals: $Chemical[]) {
        this.$Writing(...chemicals);
        this.containers.replace(this, 'span', 'div');
    }

    override write(): ReactNode {
        const book = this.conversation;
        const trail = book?.$trail;
        if (book === undefined || trail === undefined) return undefined;
        const Word = $(word);
        const Reference = $(reference);
        const TrailMark = $(trailMark);
        return (
            <>
                <TrailMark marking={trail.from.marking}>
                    <Reference>{trail.from.href}</Reference>
                </TrailMark>
                <span className="pd-strip-words">
                    <Word>
                        <Reference>{trail.from.href}</Reference>
                        {trail.from.title}
                    </Word>
                    <span className="pd-strip-place">
                        {\`\${trail.within.index} of \${trail.within.of}\`}
                    </span>
                </span>
                <span className="pd-strip-neighbours">
                    {trail.within.prev === undefined ? undefined : (
                        <Word>
                            <Reference>{trail.within.prev.href}</Reference>
                            {\`‹ \${trail.within.prev.title}\`}
                        </Word>
                    )}
                    {trail.within.next === undefined ? undefined : (
                        <Word>
                            <Reference>{trail.within.next.href}</Reference>
                            {\`\${trail.within.next.title} ›\`}
                        </Word>
                    )}
                </span>
                {trail.word === '' ? undefined : (
                    <span className="pd-strip-word">
                        {\`you were searching “\${trail.word}”\`}
                    </span>
                )}
                <Word>
                    <Reference>{trail.from.href}</Reference>
                    back to where I was
                </Word>
            </>
        );
    }

    protected override $Define(): void {
        super.$Define();
        this.classes.add(this, 'pd-project-strip');
    }
}

export const TrailMark = $($TrailMark);
export const ProjectStrip = $($ProjectStrip);
const trailMark = TrailMark;
const projectStrip = ProjectStrip;

// A conversation with Claude: the library's conversation with Claude's side, the project line and the account line in
// the bar, the pane for an artifact or an attachment, the search over the messages marked by the browser's highlights,
// and the project's strip when the trail leads here.
export class $ClaudeConversation extends $Conversation {
    $shown: $Artifact | $Attachment | undefined = undefined;
    $trail: Trail | undefined = undefined;

    // Read once the page has arrived: the trail, if it led to this conversation, is what the strip under the bar draws.
    arrive(): void {
        const trail = keptTrail();
        if (trail === undefined || trail.to !== this.means?.identifier || this.$trail?.at === trail.at) return;
        this.$trail = trail;
    }

    protected override turn(): void {
        super.turn();
        this.arrive();
    }
    get project(): $Project | undefined { return this.cover?.annotations.expressed($Project); }
    get account(): $Account | undefined { return this.cover?.annotations.expressed($Account); }
    get origin(): string | undefined { return this.cover?.annotations.expressed($Origin)?.uuid; }
    // The logo files the conversation under its project when the cover names one, the project's cover standing as a
    // volume of the conversation's; the name under the conversation's on hover is the project's, and the mark leads
    // to the project's page. Sprint 114, concept 5 of Claudes Design, its first form.
    override get subjectCover(): $Chapter | undefined {
        return this.coverOf(this.project?.means?.identifier) ?? super.subjectCover;
    }
    get index(): $Index | undefined {
        return this.table?.annotations.expressed($Index);
    }
    override get searchHint(): string {
        return 'a word in this conversation';
    }

    // The words of a message are everything it said, headed by who said it; a chapter's are the book's own.
    override wordsOf(writing: $Writing): Words {
        if (!(writing instanceof $Message)) return super.wordsOf(writing);
        const kept = this._words?.get(writing);
        if (kept !== undefined) return kept;
        const speaker = writing.speaker;
        const title = speaker === undefined ? '' : binder.reference(html.copy(speaker.text))?.name ?? html.copy(speaker.text);
        const text = [...writing.text].filter(chemical => chemical !== speaker).map(chemical => html.copy((chemical as $Writing).text).replace(/\\s+/gu, ' ').trim()).filter(piece => piece !== '').join(' ');
        const words = { title, text, lower: \`\${title} \${text}\`.toLowerCase() };
        (this._words ??= new Map()).set(writing, words);
        return words;
    }

    // What a word finds here: the messages that say it, in the order they were said.
    override found(word: string): $Writing[] {
        const lower = word.trim().toLowerCase();
        if (lower === '') return [];
        return this.messages.filter(message => this.wordsOf(message).lower.includes(lower));
    }

    override countOfFound(found: $Writing[], word: string): ReactNode {
        return (
            <>
                <b>{found.length}</b> {found.length === 1 ? 'message says' : 'messages say'} “{word}”
            </>
        );
    }

    // A message's place is its address by its time, within this book.
    override placeOf(writing: $Writing): string | undefined {
        if (!(writing instanceof $Message)) return super.placeOf(writing);
        const referent = writing.annotations.expressed($Referent)?.identifier;
        return referent === undefined ? undefined : this.placeWithin(\`#\${referent}\`);
    }

    // The word marked wherever it is said on the page, by the browser's own highlights, which paint over the drawn
    // writing and rebuild nothing; a browser without them lists the hits and marks nothing.
    override sought(word: string): void {
        if (typeof CSS === 'undefined' || !('highlights' in CSS) || typeof document === 'undefined') return;
        const highlights = (CSS as unknown as { highlights: Map<string, unknown> }).highlights;
        if (word === '') { highlights.delete('pd-found'); return; }
        // Static ranges, never live ones: a live range is kept current by the browser on every change to the document,
        // so with one for every letter a word falls on, each row the hits drop costs the whole set, and a letter typed
        // cost 160 s on 684 messages. A static range costs the document nothing and the highlight paints it the same.
        const ranges: StaticRange[] = [];
        const lower = word.toLowerCase();
        const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
            acceptNode: node => node.parentElement?.closest('.pd-pages .pd-said') ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT,
        });
        for (let node = walker.nextNode(); node !== null; node = walker.nextNode()) {
            const text = node.nodeValue?.toLowerCase() ?? '';
            for (let at = text.indexOf(lower); at !== -1; at = text.indexOf(lower, at + lower.length))
                ranges.push(new StaticRange({ startContainer: node, startOffset: at, endContainer: node, endOffset: at + word.length }));
        }
        const Highlight = (globalThis as unknown as { Highlight: new (...ranges: AbstractRange[]) => unknown }).Highlight;
        highlights.set('pd-found', new Highlight(...ranges));
    }

    // The side: the search's field, its hits while a word stands, the index, and under it what I asked in the chapter in
    // front, which stands beside the index and not within an entry, since an entry is a link and a link holds no link.
    override holds(): ReactNode {
        const Search = $(search);
        const Results = $(results);
        const Outline = $(outline);
        const open = this.open;
        return (
            <>
                <Search chapter={this.table} />
                <Results chapter={this.table} />
                {super.holds()}
                {open === undefined || !this.body.includes(open) ? undefined : (
                    <Outline
                        key={open.mention?.identifier}
                        chapter={this.table}
                        asked={open}
                    />
                )}
            </>
        );
    }

    override write(): ReactNode {
        const Pane = $(pane);
        const ProjectStrip = $(projectStrip);
        return (
            <>
                {super.write()}
                <ProjectStrip chapter={this.cover} />
                <Pane chapter={this.cover} />
            </>
        );
    }

    protected override $Bound(): void {
        const index = this.index;
        if (index !== undefined) {
            index.$folded = true;
            index.$counted = true;
            index.$searched = true;
        }
        const TreeFolder = $(treeFolder);
        for (const section of this.table?.text.find($Section) ?? [])
            if (!section.is($Appendix))
                section.annotations.add(this,
                    <TreeFolder />
                );
        const AttachmentTab = $(attachmentTab);
        for (const paragraph of index?.entries ?? []) {
            const place = contentOf(paragraph)?.identifier;
            const chapter = place === undefined ? undefined : this.chapterAt(place);
            if (chapter === undefined || !this.body.includes(chapter)) continue;
            // A text's find answers its own writings, so the attachments are asked of each message.
            const given = chapter.text.find($Message).flatMap(message => message.text.find($Attachment)).filter(attachment => attachment.names);
            if (given.length === 0) continue;
            paragraph.text.add(this,
                ...given.map((attachment, index) => (
                    <AttachmentTab
                        key={index}
                        attachment={attachment}
                    />
                ))
            );
        }
        super.$Bound();
    }

    override me(): ReactNode {
        const ProjectLine = $(projectLine);
        const AccountLine = $(accountLine);
        return (
            <>
                {super.me()}
                {this.project === undefined ? undefined : (
                    <ProjectLine cover={this.cover} />
                )}
                {this.account === undefined ? undefined : (
                    <AccountLine cover={this.cover} />
                )}
            </>
        );
    }
}

export const ClaudeConversation = $($ClaudeConversation);
$(ClaudeConversation, Theme)(ApplicationForm);
$(ClaudeConversation, tone)(light);
`})]}),"TheConversationsPage9"),Qc=s(()=>d(R,{children:[n(U,{}),n(S,{children:"[The Project's Page](/claudes-reference-manual/#the-projects-page)"}),d(h,{children:[n(q,{}),"A project of mine with Claude on its page: the library's project manual with the way on to the application beside each conversation, the trail kept as a row is pressed, and the landing where I left it when I return. Every project's book extends this chapter's, and no conversation's does."]}),d(k,{children:[n(y,{children:"The rows, the files and the landing"}),d(h,{children:["The page is ",n(u,{children:"[the library's project manual](/dougs-reference-manual/#the-project-manual)"}),"with Claude's rows: the conversations as one list at the whole width, newest first with the day on each row, as the application lists them, the search over them and the files at their head; each row leads into the library by its title and on to the application by the origin its conversation's cover carries, a glyph at the row's end that shows under the hand. A file pressed in the column turns the page to the file beside its words, and the side lists the project first, then the conversations as a folder with their count, then the files' folder, with the open file lit. A row pressed, or a hit of the search pressed, writes the trail said in ",n(u,{children:"[The Conversation's Page](/claudes-reference-manual/#the-conversations-page)"}),", and the page lands where I left it when I come back: the word typed again, the row I left from marked in the list and among the hits, and scrolled to. Concept 11 of ",n(u,{children:"[The Conversation and the Project](/claudes-design/#the-conversation-and-the-project)"}),", as it opens, decided 2026-10-29; the brief, the instructions and the counts that stood at the head since concept 10 went with it, since synopses are rarely visible for books, and the months before them on my word of 2026-10-28, since the application has none."]})]}),d(k,{children:[n(y,{children:"Why a chapter apart from the conversation's"}),n(h,{children:"This chapter imports the conversation's page for the trail, and the conversation's page imports nothing of this one, so a change here reaches the 27 project books and no conversation; a book's digest is what its files import since Sprint 117, and a project's book file extends this chapter's book by the file's own name. The names, way on, project entry open and project result, are the session's until I keep or change them."})]}),n(D,{identifier:"code",type:".tsx",children:`import { ReactNode } from 'react';
import { $, $Chemical, Component, next } from '@dna-platform/chemistry';
import { $Chapter, $Word, $Writing, ContainerProps } from '@dna-platform/public';
import { $EntryOpen, $Result, $Results } from '../../.manual/14-the-entry~code.tsx';
import { $ProjectManual } from '../../.manual/31-the-project-manual~code.tsx';
import { $Volume, markingOf } from '../../.manual/19-the-cover~code.tsx';
import { $Origin } from './8-the-origin~code.tsx';
import { Place, Trail, keptTrail, trailKey } from './9-the-conversations-page~code.tsx';

// The way on to the application beside each conversation of a project, a link by the origin its cover carries.
export class $WayOn extends $Word {
    $href?: string;

    override write(): ReactNode {
        if (this.$href === undefined) return undefined;
        return (
            <a
                className="pd-way-on-link"
                href={this.$href}
                target="_blank"
                rel="noopener"
                aria-label="in Claude"
                title="in Claude"
            >
                ↗
            </a>
        );
    }

    protected override $Define(): void {
        super.$Define();
        this.classes.add(this, 'pd-way-on');
    }
}

// The way into a conversation from a row of its project, keeping the trail as the row is pressed.
export class $ProjectEntryOpen extends $EntryOpen {
    override container(props: ContainerProps): ReactNode {
        return super.container({ ...props, onClick: () => this.keep() });
    }

    keep(): void {
        const book = this.book as $ClaudeProjectManual | undefined;
        const entry = this.$entry instanceof $Chapter ? this.$entry : this.chapter;
        if (book === undefined || entry === undefined || typeof localStorage === 'undefined') return;
        const entries = book.pages.filter(chapter => book.entries.includes(chapter));
        const index = entries.indexOf(entry);
        const placeOf = (one: $Chapter | undefined): Place | undefined => {
            const href = one?.annotations.expressed($Volume)?.cover?.mention?.identifier;
            return one === undefined || href === undefined ? undefined : { title: one.title?.name ?? '', href };
        };
        const page = book.means?.identifier ?? '';
        const trail: Trail = {
            at: new Date().toISOString(),
            from: { page, title: book.title?.name ?? '', href: page, marking: markingOf(book.cover) },
            to: placeOf(entry)?.href,
            within: { title: book.title?.name ?? '', index: index + 1, of: entries.length, prev: placeOf(entries[index - 1]), next: placeOf(entries[index + 1]) },
            word: book.index?.word ?? '',
            row: entry.mention?.identifier,
        };
        try {
            localStorage.setItem(trailKey, JSON.stringify(trail));
        } catch {
            return;
        }
    }
}

// The project's hits lay the project's own open over each row, so a hit pressed keeps the trail as a row does.
export class $ProjectResult extends $Result {
    get project(): $ClaudeProjectManual | undefined { return this.book as $ClaudeProjectManual | undefined; }

    // The hit I came back from, when the trail leads back to this page: marked as the row of the list is, since the
    // hits stand in front of the list while a word stands.
    get returned(): boolean {
        const book = this.project;
        const hit = this.$hit;
        return book !== undefined && hit !== undefined && book.$trail !== undefined && book.$trail.to === book.placeOf(hit);
    }

    // A hit is drawn after the page arrives, so the one I came back from lands the page once it is laid out.
    $ProjectResult(...chemicals: $Chemical[]) {
        this.$Result(...chemicals);
        void this[next]('layout').then(() => { if (this.returned) this.project?.land(); });
    }

    override container(props: ContainerProps): ReactNode {
        return super.container(this.returned ? { ...props, className: \`\${props.className ?? ''} pa-returned\` } : props);
    }

    protected override open(): Component<$EntryOpen> {
        return projectEntryOpen as Component<$EntryOpen>;
    }
}

export class $ProjectResults extends $Results {
    protected override result(hit: $Writing, position: number): ReactNode {
        const ProjectResult = $(projectResult);
        return (
            <ProjectResult
                key={(this.book as $ProjectManual).placeOf(hit) ?? position}
                chapter={this.chapter}
                hit={hit}
            />
        );
    }
}

// A project of mine with Claude: the project manual with the way on to the application beside each conversation and
// the trail kept as a row is pressed; when the page arrives from a conversation, it lands where I left it. Sprint 117,
// D2: this chapter imports the conversation's page for the trail and the conversation's page imports nothing of it, so
// a change here reaches the project books and no conversation.
export class $ClaudeProjectManual extends $ProjectManual {
    $trail: Trail | undefined = undefined;

    override aboveThePages(): ReactNode {
        const ProjectResults = $(projectResults);
        return (
            <ProjectResults chapter={this.table} />
        );
    }

    protected override rows(entries: $Chapter[]): void {
        super.rows(entries, projectEntryOpen as Component<$EntryOpen>);
        const WayOn = $(wayOn);
        for (const entry of entries) {
            const origin = entry.annotations.expressed($Volume)?.cover?.annotations.expressed($Origin)?.uuid;
            if (origin === undefined) continue;
            entry.text.add(this,
                <WayOn href={\`https://claude.ai/chat/\${origin}\`} />
            );
        }
    }

    // Read once the page has arrived: the trail, if it leads back here, sets the word and marks the row I left from.
    arrive(): void {
        const trail = keptTrail();
        if (trail === undefined || trail.from.page !== this.means?.identifier || this.$trail?.at === trail.at) return;
        this.$trail = trail;
        if (trail.word !== '') this.index?.search(trail.word);
        const row = trail.row === undefined ? undefined : this.chapterAt(trail.row);
        if (row !== undefined) row.classes.add(this, 'pa-returned');
        if (row !== undefined && trail.word === '') this.land(row);
    }

    // Lands on the row I left from: the row of the list, found by its title as the book's turn finds a bookmark's, when
    // no word stands; and the hit I came back from, which calls once it is laid out, since the hits stand above the list
    // while a word stands.
    land(row?: $Chapter): void {
        const title = row?.title;
        const element = row === undefined
            ? document.querySelector('.pd-book .pd-result.pa-returned')
            : title === undefined ? null : document.getElementById(String(title.id))?.closest('.pd-chapter');
        element?.scrollIntoView({ block: 'center' });
    }

    // The turn is the framework's word that the book has drawn and laid out on the client, which is when the browser's
    // storage may be read without the first draw disagreeing with the print.
    protected override turn(): void {
        super.turn();
        this.arrive();
    }
}

export const WayOn = $($WayOn);
export const ProjectEntryOpen = $($ProjectEntryOpen);
export const ProjectResult = $($ProjectResult);
export const ProjectResults = $($ProjectResults);
export const ClaudeProjectManual = $($ClaudeProjectManual);
const wayOn = WayOn;
const projectEntryOpen = ProjectEntryOpen;
const projectResult = ProjectResult;
const projectResults = ProjectResults;
`})]}),"TheProjectsPage10"),Xc=s(()=>d(R,{children:[n(U,{}),n(S,{children:"[The Annotated Conversation](/claudes-reference-manual/#the-annotated-conversation)"}),d(h,{children:[n(q,{}),"How I read a conversation I had with Claude into my library: the marks I make on it, what each is for, the principles by which a conversation is cut into chapters after it is marked, and the rule the cut obeys before any other, that time is not meaning."]}),d(k,{children:[n(y,{children:"Time is not meaning"}),d(h,{children:["If you are thinking in time, you are not thinking semantically. A conversation is held in sittings, with breaks of hours or days between them, and I come back to a topic days later and it is the same topic. So a chapter of a conversation is a matter worked to a resting point, never a sitting; a part is a matter larger than a chapter, never a day; and a break between messages is evidence of a boundary only where the matter changes with it. The import writes every message with its instant, as ",n(u,{children:"[The Imported Conversation](/claudes-reference-manual/#the-imported-conversation)"})," says, so time is always there to be read. It is never what the cut is by."]})]}),d(k,{children:[n(y,{children:"The marks I make"}),n(h,{children:"An annotation is a thing said of a writing that is already there, kept in the writing's own annotations and drawn nowhere on the page, as the origin of a message is. I read a conversation by marking it. A Matter says what a stretch is about, in a few words from one vocabulary, so that I can find it again. A Turn says where the subject turns. A Result says what was stated, reached or circled; a Formalism what was defined, named or constructed. A Correction marks where I set Claude straight, which is where the clarifications of a conversation are. An Importance says why a thing mattered to me, in my own words. A Question says what was left open, a Reminder what to carry forward past the conversation, and a Summary what a stretch came to. A Note, a Thought, a Remark, an Idea, a Comment, a Reaction and a Description say the rest, each what its name says. The marks are the marks I make when doing long division: most are disposable once the cut is made, and the ones that stay are the annotated edition of the conversation."})]}),d(k,{children:[n(y,{children:"Key and trivial"}),n(h,{children:"My side of the conversation is the signal and Claude's side is the material. What is key bears on a result, a formalism or my judgment: what I corrected, insisted on, named, or returned to is key by that fact. What is trivial is Claude's scaffolding, restatements, headings, lists of options and enthusiasm, which is never evidence that a thing mattered. A thing said once and never returned to is trivial unless it was left open, and a thing that recurs across conversations is the most important of all."})]}),d(k,{children:[n(y,{children:"A moment off the matter"}),n(h,{children:"An interesting moment that is off the chapter's matter earns a mark and not a chapter. A Note or a Thought says what it is, a Matter names its topic so that it can be found, and the chapter keeps its matter. A conversation about a paper's scope can hold a paragraph on how I think, and the paragraph is found by its topic without the chapter being about it."})]}),d(k,{children:[n(y,{children:"The index"}),n(h,{children:"The Matters are the semantic index of my library. Their words come from one vocabulary, a topic named the same way wherever it is worked, so that a search for a topic finds every conversation that worked it. A Matter is assigned where a matter is worked, not to every message, and holds three or four terms at most. The vocabulary grows as the conversations are read and is kept as one list."})]}),d(k,{children:[n(y,{children:"Passes, then the cut"}),d(h,{children:["A conversation is read in passes, never once. A first pass by readers, each on a stretch of it, read whole; an audit of every mark against the message it stands on; a second pass that adjusts, compacts and clarifies the vocabulary, with my sense of what matters and not the readers'. Only then is the conversation cut, where the matter changes, which my own words mark: a boundary two readers found apart, or one that a correction opens, is strong, and a turn inside one matter is a beat and not a chapter. Each pass is a script with its edits and their reasons, run again from the conversation as it was imported, so a pass can be redone and nothing is lost between passes. The record the import keeps of a book is in ",n(u,{children:"[The Ledger](/dougs-importer/#the-ledger)"}),"; a cut book reads as edited there, which is the truth."]})]}),d(k,{children:[n(y,{children:"The titles"}),n(h,{children:"The chapters of a conversation are titled in one style, chosen for that conversation to express its individuality and applied to every chapter of it: short and authoritative about what was discussed, in language that conveys it. A quotation of mine at the turn is not a title; it does not feel like me."})]})]}),"TheAnnotatedConversation11"),Kc=s(()=>d(R,{children:[n(U,{}),n(S,{children:"[How We Read a Conversation](/claudes-reference-manual/#how-we-read-a-conversation)"}),d(h,{children:[n(q,{}),"A letter from the team to Doug on the reading of his conversations with Claude, written on 7 November 2026 after the first three were organized: what worked and what did not, the process we used to annotate, interpret and restructure a conversation, and how we read one efficiently to find its relations to others. Written in our voice, not his, since it is our process and our memory."]}),d(k,{children:[n(y,{children:"What worked, and what did not"}),n(h,{children:"Doug, three of the four Gödel and Goldbach conversations stand organized, and this is what we learned doing it. The rule you gave us, that time is not meaning, changed the cut materially: we had cut parts at the sitting's breaks, and when we cut by matter instead, three chapters stood inside one unbroken half hour that the clock would have hidden, and a break was evidence only where the matter changed with it. The Corrections are the spine of a conversation: the places you set Claude straight nearly reconstruct the argument on their own, and in the Opus sitting three of the four catch Claude agreeing enthusiastically with the wrong thing, which no reader sees unless the mark says it. A Result's words begin with its state, proven, conjectured, refuted or intuition, and that one convention showed more than any sort we added: the Opus sitting holds six proven claims and one refuted against twenty-two of intuition, which is the honest shape of the work. The Reminders found what no single reader could, that the two sittings of 12 October 2025 ran interleaved, the Samantha paste eighty-one seconds apart, and that the entropy measures born with Opus feed the paper's four cases ninety minutes later. The Matters, three or four terms from one vocabulary assigned where a matter is worked, are the index, and a topic per message was never missed."}),n(h,{children:"What did not work was ours. We proposed your own sentences at the turns as chapter titles, and they did not feel like you; a title is a short authoritative noun naming what was discussed, in one style for the whole conversation. Our first pass carried two hundred and twenty marks on a hundred and fifty-four messages, a reader's density and not a memory's, and you told us to be pragmatic: a third pass cut it to a hundred and sixty-six by rules we could state, one Matter and one Summary a chapter, every title idea gone once the titles were decided, every Note that only restated Claude gone, every Result of Claude's that restated yours gone, and a name nothing refers to made plain words. And we asked you to read marks you cannot read; the marks are our eyes, and what you read is a page."})]}),d(k,{children:[n(y,{children:"The process"}),n(h,{children:"First the shape: every message's instant, speaker and first line extracted into one file, which reads in two minutes and shows where the subject seems to turn. Second the first pass, off to the side: readers each on a stretch of forty messages or so, reading whole with the edges, writing marks and a report of the stretch into files of their own, never the chapter, against a brief that carries the method and your rulings. Third the audit, by one hand: every mark read against the message it stands on, all of your messages whole and Claude's at the passages the marks cite, each mark kept, struck or rewritten with its reason in a ledger, the stretches' edges reconciled, the names checked declared once and spent at least once before the catalogue sees them. Fourth the passes: the second adds the Matters from one vocabulary and reads importance by your standard, the third compacts by the rules above and prints the count and the words before and after. Fifth the placing, by a script that keys on a message's instant and a paragraph's index, never breaks a mention or a reference across a line, and expands a one-line paragraph once; then the proof that the messages' own text is identical with the marks and without, and the book specified alone, which refuses an unspent name, two names at one address, and a chapter titled at a name's address. Sixth the cut, by matter, from one data file, each chapter headed by the date of its first message and a title in the conversation's one style, the restructuring marks removed, the instants checked in the same order; then the synopsis, ours, in your perspective, what the conversation was about and what in it was valuable; then the bind and the look on the page. The order is what makes it safe: nothing is placed that was not audited, nothing is cut that was not placed, nothing is bound that was not specified."})]}),d(k,{children:[n(y,{children:"Reading efficiently, and finding relations"}),n(h,{children:"The marks are written so that a search finds them without the conversation being read again. A Matter is the way in by topic: every chapter's Matter stands at its head, so the chapters of the library that worked a term are found by searching the Matters for it, and a term is spelled one way wherever it is worked. A name declared once with triple brackets and spent by references is the way in by thing: the chapters that refer to the Goldbach representation or the fixed point of primes are found by the name. A Reminder is the way across: it says what another conversation or chapter holds of the same matter, by that book's and chapter's names, so the relations between conversations are read from the Reminders alone. The Corrections, read in order, are the argument's spine; the Summaries at the chapters' heads, read in order, are the page; the instants give the order and the braid. So the efficient reading of a conversation already organized is four searches and no reading: its Matters for what it is about, its Summaries for what it came to, its Corrections for where it turned on your word, and its Reminders for what it shares. The next day you asked four questions of every conversation, whether there is old information and new, whether things were replaced or changed, whether a direction is an old one left as archive, and whether ideas in it were never explored, and asked that the marks be a guide a reader explores by parsing the sorts' names alone; so four more searches answer them by name: its Revisions, each beginning Replaced or Changed, for what the later form supersedes and where the earlier stands; its Archives for the directions left behind; its Ideas for what was raised and never taken up; and its Questions for what stays open. A judgment that needs the whole conversation, or the whole family, is placed by the audit after the readers report it, and across books the earlier form carries a Reminder pointing forward, since a Revision stands on the later form. For a conversation not yet organized, the shape first, then the readers."}),n(h,{children:"Four tools stand beside this chapter now, each run with node from the library's root, each given a book's folder or one chapter and a file of marks, a mark being its message's instant, the index of the paragraph it is about or none, its sort and its words; the sorts they read are one list beside them, 12-how-we-read-a-conversation~sorts.mjs, which gains a sort when the package does. The check, 12-how-we-read-a-conversation~check.mjs, reads readers' marks against the conversation's own text, the marks already standing in it set aside: a quoted span of yours of four words or more must stand in the message the mark is on, a mark's instant must be its message's, a Result opens with its state, a Revision with Replaced or Changed, and no mark runs past forty-five words; it says every fault and refuses on any. The placing, 12-how-we-read-a-conversation~placing.mjs, puts the audited marks into the chapter that holds each mark's instant, as the first child after the message's Speaker or the first child of its paragraph, never breaking a mention or a reference across a line, and writes nothing unless the messages' own text reads identically before and after, which it proves itself. The cut, 12-how-we-read-a-conversation~cut.mjs, cuts the one chapter by a file of cuts, each a range of messages with a title and a part where one is said, into chapters headed by the date of their first message, carries each pasted file to the chapter whose message names it, lists the chapters in the table under their parts, removes the restructuring marks, and removes the one chapter only once every message is proven to stand once, in order, with its instant. The survey, 12-how-we-read-a-conversation~survey.mjs, lists a book's marks by sort from its chapters in a second, part by part, and named a sort prints every mark of it under its chapter, which is the guide read by a sort's name. Each was proven by giving back the four organized books from their chapters as imported, every file identical. What stays as scripts beside our records is what belongs to one conversation: the shape of its messages, the audit's ledger of edits with their reasons, and the passes over its particular readers."}),d(h,{children:["The form of the marks themselves is in ",n(u,{children:"[The Annotated Conversation](/claudes-reference-manual/#the-annotated-conversation)"}),", in your voice; this chapter is ours."]})]}),n(D,{identifier:"sorts",type:".mjs",children:"export const sorts = ['Matter', 'Summary', 'Result', 'Formalism', 'Correction', 'Importance', 'Revision', 'Archive', 'Idea', 'Question', 'Reminder', 'Remark', 'Note', 'Turn', 'Thought', 'Comment', 'Reaction', 'Description'];\r\nexport const marked = new RegExp(`<(${sorts.join('|')})>[\\\\s\\\\S]*?</\\\\1>`, 'gu');\r\n"}),n(D,{identifier:"check",type:".mjs",children:`import { readdirSync, readFileSync, statSync } from 'node:fs';\r
import { basename, join } from 'node:path';\r
import { marked } from './12-how-we-read-a-conversation~sorts.mjs';\r
\r
const [target, ...marksPaths] = process.argv.slice(2);\r
const chapters = statSync(target).isDirectory()\r
    ? readdirSync(target).filter(file => /^\\d+-.+\\.tsx$/u.test(file)).sort((a, b) => Number(a.split('-')[0]) - Number(b.split('-')[0])).map(file => join(target, file))\r
    : [target];\r
\r
const read = text => text.replace(/<[^>]+>/gu, ' ').replace(/\\{'\\s*'\\}|\\{" "\\}/gu, ' ')\r
    .replace(/&lt;/gu, '<').replace(/&gt;/gu, '>').replace(/&amp;/gu, '&').replace(/&#123;/gu, '{').replace(/&#125;/gu, '}').replace(/&quot;/gu, '"').replace(/&#39;/gu, "'")\r
    .replace(/[‘’]/gu, "'").replace(/[“”]/gu, '"').replace(/…/gu, '...').replace(/\\s+/gu, ' ').trim();\r
const loose = text => text.replace(/["']/gu, "'").toLowerCase().replace(/[.,;:!?]+$/u, '').trim();\r
const words = text => text.split(/\\s+/u).filter(word => word !== '').length;\r
\r
const messages = [];\r
for (const chapter of chapters) {\r
    const lines = readFileSync(chapter, 'utf8').split(/\\r?\\n/u);\r
    for (let index = 0; index < lines.length; index++) {\r
        if (lines[index].trim() !== '<Message') continue;\r
        const depth = /^ */u.exec(lines[index])[0].length;\r
        let close = index + 1;\r
        while (close < lines.length && !(/^ */u.exec(lines[close])[0].length === depth && lines[close].trim() === '</Message>')) close++;\r
        messages.push({ at: /at="([^"]+)"/u.exec(lines[index + 1])[1], text: read(lines.slice(index + 2, close).join(' ').replace(marked, ' ')) });\r
        index = close;\r
    }\r
}\r
const byInstant = new Map(messages.map((message, index) => [message.at, index]));\r
\r
const states = ['Proven', 'Conjectured', 'Refuted', 'Intuition'];\r
const quoting = ['Correction', 'Importance', 'Remark', 'Question', 'Revision', 'Archive', 'Idea'];\r
let faults = 0, checked = 0, spans = 0;\r
for (const path of marksPaths) {\r
    const list = JSON.parse(readFileSync(path, 'utf8'));\r
    const marks = Array.isArray(list) ? list : list.marks ?? [];\r
    const own = [];\r
    for (const mark of marks) {\r
        checked++;\r
        const index = mark.message !== undefined ? mark.message - 1 : byInstant.get(mark.at);\r
        const message = messages[index];\r
        const name = mark.message !== undefined ? \`\${mark.message} \${mark.sort}\` : \`the \${mark.sort} at \${mark.at}\`;\r
        if (message === undefined) { own.push(\`\${name}: no such message\`); continue; }\r
        if (mark.at !== message.at) own.push(\`\${name}: instant \${mark.at} is not the message's \${message.at}\`);\r
        if (words(mark.words) > 45) own.push(\`\${name}: \${words(mark.words)} words\`);\r
        if (mark.sort === 'Result' && !states.some(state => mark.words.startsWith(state))) own.push(\`\${name}: a Result opens with its state: "\${mark.words.slice(0, 40)}"\`);\r
        if (mark.sort === 'Revision' && !/^(Replaced|Changed)\\b/u.test(mark.words)) own.push(\`\${name}: a Revision opens with Replaced or Changed: "\${mark.words.slice(0, 40)}"\`);\r
        if (!quoting.includes(mark.sort)) continue;\r
        for (const match of read(mark.words).matchAll(/(?:^|[\\s(—-])(?:'([^']{12,}?)'|"([^"]{12,}?)")(?=[\\s).,;:!?—-]|$)/gu)) {\r
            const span = (match[1] ?? match[2]).replace(/\\.\\.\\.$/u, '').replace(/^\\.\\.\\./u, '').trim();\r
            for (const piece of span.split(/\\.\\.\\.|…/u).map(loose).filter(piece => words(piece) >= 4)) {\r
                spans++;\r
                const where = mark.speaker === 'Doug' ? [message] : [message, messages[index - 1], messages[index + 1]].filter(Boolean);\r
                if (!where.some(one => loose(one.text).includes(piece))) own.push(\`\${name}: not in the message: "\${piece}"\`);\r
            }\r
        }\r
    }\r
    console.log(\`\${basename(path)}: \${marks.length} marks, \${own.length} fault\${own.length === 1 ? '' : 's'}\`);\r
    for (const fault of own) console.log(\`  \${fault}\`);\r
    faults += own.length;\r
}\r
console.log(\`\${checked} marks checked against \${messages.length} messages, \${spans} quoted spans, \${faults} fault\${faults === 1 ? '' : 's'}\`);\r
process.exit(faults === 0 ? 0 : 1);\r
`}),n(D,{identifier:"placing",type:".mjs",children:`import { readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';\r
import { basename, join } from 'node:path';\r
\r
const [target, marksPath] = process.argv.slice(2);\r
const marks = JSON.parse(readFileSync(marksPath, 'utf8'));\r
const chapters = statSync(target).isDirectory()\r
    ? readdirSync(target).filter(file => /^\\d+-.+\\.tsx$/u.test(file)).sort((a, b) => Number(a.split('-')[0]) - Number(b.split('-')[0])).map(file => join(target, file))\r
    : [target];\r
\r
const holding = new Map();\r
for (const chapter of chapters) for (const match of readFileSync(chapter, 'utf8').matchAll(/at="([^"]+)"/gu)) holding.set(match[1], chapter);\r
\r
const say = mark => mark.message !== undefined ? \`message \${mark.message}\` : \`the \${mark.sort} at \${mark.at}\`;\r
const escape = words => words.replace(/&/gu, '&amp;').replace(/</gu, '&lt;').replace(/>/gu, '&gt;').replace(/\\{/gu, '&#123;').replace(/\\}/gu, '&#125;');\r
const tokens = words => {\r
    const out = [];\r
    let held = null;\r
    for (const part of words.split(/\\s+/u).filter(part => part !== '')) {\r
        if (held !== null) {\r
            held = \`\${held} \${part}\`;\r
            if (part.includes(']]')) { out.push(held); held = null; }\r
        } else if (part.includes('[[') && !part.includes(']]')) held = part;\r
        else out.push(part);\r
    }\r
    if (held !== null) out.push(held);\r
    return out;\r
};\r
const wrap = (words, width) => {\r
    const out = [];\r
    let line = '';\r
    for (const token of tokens(words)) {\r
        if (line.length > 0 && line.length + 1 + token.length > width) { out.push(line); line = token; }\r
        else line = line.length === 0 ? token : \`\${line} \${token}\`;\r
    }\r
    if (line.length > 0) out.push(line);\r
    return out;\r
};\r
const indentOf = line => /^ */u.exec(line)[0].length;\r
const block = (sort, words, indent) => [\`\${' '.repeat(indent)}<\${sort}>\`, ...wrap(escape(words), 114 - indent - 4).map(line => \`\${' '.repeat(indent + 4)}\${line}\`), \`\${' '.repeat(indent)}</\${sort}>\`];\r
\r
const place = (text, own) => {\r
    const ending = text.includes('\\r\\n') ? '\\r\\n' : '\\n';\r
    const lines = text.split(ending);\r
    const refused = [];\r
    const placed = {};\r
    const afterLine = new Map();\r
    const oneLiners = new Map();\r
    for (const mark of own) {\r
        const open = lines.findIndex((line, index) => line.trim() === '<Message' && lines[index + 1]?.trim() === \`at="\${mark.at}"\`);\r
        const depth = indentOf(lines[open]);\r
        let close = open + 1;\r
        while (close < lines.length && !(indentOf(lines[close]) === depth && lines[close].trim() === '</Message>')) close++;\r
        const speaker = lines.findIndex((line, index) => index > open && index < close && line.trim().startsWith('<Speaker>'));\r
        if (speaker === -1) { refused.push(\`\${say(mark)}: no Speaker\`); continue; }\r
        const childDepth = indentOf(lines[speaker]);\r
        if (mark.paragraph === null || mark.paragraph === undefined) {\r
            afterLine.set(speaker, [...(afterLine.get(speaker) ?? []), ...block(mark.sort, mark.words, childDepth)]);\r
        } else {\r
            const paragraphs = [];\r
            for (let index = speaker + 1; index < close; index++)\r
                if (indentOf(lines[index]) === childDepth && lines[index].trim().startsWith('<Paragraph>')) paragraphs.push(index);\r
            const which = paragraphs[mark.paragraph - 1];\r
            if (which === undefined) { refused.push(\`\${say(mark)} paragraph \${mark.paragraph}: the message has \${paragraphs.length} paragraphs of its own\`); continue; }\r
            const line = lines[which].trim();\r
            if (line === '<Paragraph>') afterLine.set(which, [...(afterLine.get(which) ?? []), ...block(mark.sort, mark.words, childDepth + 4)]);\r
            else {\r
                const match = /^<Paragraph>(.*)<\\/Paragraph>$/u.exec(line);\r
                if (match === null) { refused.push(\`\${say(mark)} paragraph \${mark.paragraph}: neither a one-line paragraph nor an open one\`); continue; }\r
                const held = oneLiners.get(which) ?? { indent: childDepth, text: match[1], blocks: [] };\r
                held.blocks.push(...block(mark.sort, mark.words, childDepth + 4));\r
                oneLiners.set(which, held);\r
            }\r
        }\r
        placed[mark.sort] = (placed[mark.sort] ?? 0) + 1;\r
    }\r
    const edits = [];\r
    for (const [at, blocks] of afterLine) edits.push({ at: at + 1, remove: 0, blocks });\r
    for (const [at, held] of oneLiners) edits.push({ at, remove: 1, blocks: [\`\${' '.repeat(held.indent)}<Paragraph>\`, ...held.blocks, \`\${' '.repeat(held.indent + 4)}\${held.text}\`, \`\${' '.repeat(held.indent)}</Paragraph>\`] });\r
    edits.sort((a, b) => b.at - a.at || b.remove - a.remove);\r
    for (const edit of edits) lines.splice(edit.at, edit.remove, ...edit.blocks);\r
    const importAt = lines.findIndex(line => line.startsWith('import {') && line.includes("from '@dna-platform/public'"));\r
    const names = new Set(/^import \\{([^}]*)\\} from '@dna-platform\\/public';$/u.exec(lines[importAt].trim())[1].split(',').map(name => name.trim()).filter(name => name !== ''));\r
    for (const sort of Object.keys(placed)) names.add(sort);\r
    lines[importAt] = \`import { \${[...names].sort((a, b) => a.localeCompare(b)).join(', ')} } from '@dna-platform/public';\`;\r
    return { text: lines.join(ending), placed, expanded: oneLiners.size, refused };\r
};\r
\r
const own = (text, sorts) => text.slice(text.indexOf('export default'))\r
    .replace(new RegExp(\`<(\${sorts.join('|')})>[\\\\s\\\\S]*?</\\\\1>\`, 'gu'), ' ').replace(/<[^>]+>/gu, ' ').replace(/\\s+/gu, ' ').trim();\r
\r
const refused = [];\r
const byChapter = new Map();\r
for (const mark of marks) {\r
    const chapter = holding.get(mark.at);\r
    if (chapter === undefined) { refused.push(\`\${say(mark)}: no message carries the instant \${mark.at}\`); continue; }\r
    byChapter.set(chapter, [...(byChapter.get(chapter) ?? []), mark]);\r
}\r
const results = [];\r
for (const [chapter, list] of byChapter) {\r
    const before = readFileSync(chapter, 'utf8');\r
    const result = place(before, list);\r
    refused.push(...result.refused.map(one => \`\${basename(chapter)}: \${one}\`));\r
    const sorts = [...new Set(list.map(mark => mark.sort))];\r
    if (own(before, sorts) !== own(result.text, sorts)) refused.push(\`\${basename(chapter)}: the messages' own text would change under the placing\`);\r
    results.push({ chapter, ...result });\r
}\r
if (refused.length > 0) {\r
    console.log(\`nothing written; refused \${refused.length}:\`);\r
    for (const one of refused) console.log(\`  \${one}\`);\r
    process.exit(1);\r
}\r
let total = 0;\r
for (const result of results) {\r
    writeFileSync(result.chapter, result.text);\r
    const count = Object.values(result.placed).reduce((n, c) => n + c, 0);\r
    total += count;\r
    const sorts = Object.entries(result.placed).sort((a, b) => b[1] - a[1]).map(([sort, n]) => \`\${sort} \${n}\`).join(', ');\r
    console.log(\`\${basename(result.chapter)}: \${count} marks placed, \${sorts}; \${result.expanded} one-line paragraph\${result.expanded === 1 ? '' : 's'} expanded; the messages' own text identical\`);\r
}\r
console.log(\`\${total} marks placed into \${results.length} chapter\${results.length === 1 ? '' : 's'}\`);\r
`}),n(D,{identifier:"cut",type:".mjs",children:`import { existsSync, readFileSync, renameSync, unlinkSync, writeFileSync } from 'node:fs';\r
import { join } from 'node:path';\r
\r
const [folder, cutsPath] = process.argv.slice(2);\r
const source = join(folder, '1-conversation.tsx');\r
const text = readFileSync(source, 'utf8');\r
const ending = text.includes('\\r\\n') ? '\\r\\n' : '\\n';\r
const lines = text.split(ending);\r
const cuts = JSON.parse(readFileSync(cutsPath, 'utf8'));\r
const slug = title => title.toLowerCase().replace(/[^a-z0-9]+/gu, '-').replace(/^-|-$/gu, '');\r
const instants = held => [...held.matchAll(/at="([^"]+)"/gu)].map(match => match[1]);\r
\r
const importEnd = lines.findIndex(line => line.startsWith('export default'));\r
const imports = lines.slice(0, importEnd).filter(line => line.trim() !== '');\r
const packageAt = imports.findIndex(line => line.includes("from '@dna-platform/public'"));\r
const names = new Set(/\\{([^}]*)\\}/u.exec(imports[packageAt])[1].split(',').map(name => name.trim()).filter(name => name !== ''));\r
names.add('Date');\r
if (cuts.some(cut => cut.part !== undefined)) names.add('Part');\r
imports[packageAt] = \`import { \${[...names].sort((a, b) => a.localeCompare(b)).join(', ')} } from '@dna-platform/public';\`;\r
imports.push("import { Dated } from '../../../.manual/4-the-date~code.tsx';");\r
\r
const messages = [];\r
for (let index = 0; index < lines.length; index++) {\r
    if (lines[index].trim() !== '<Message') continue;\r
    const depth = /^ */u.exec(lines[index])[0].length;\r
    let close = index + 1;\r
    while (close < lines.length && !(/^ */u.exec(lines[close])[0].length === depth && lines[close].trim() === '</Message>')) close++;\r
    messages.push({ from: index, to: close, at: /at="([^"]+)"/u.exec(lines[index + 1])[1] });\r
    index = close;\r
}\r
if (cuts[0].from !== 1 || cuts[cuts.length - 1].to !== messages.length || cuts.some((cut, index) => index > 0 && cut.from !== cuts[index - 1].to + 1))\r
    throw new Error(\`the cuts do not cover the \${messages.length} messages contiguously\`);\r
\r
const appends = [];\r
for (let index = messages[messages.length - 1].to + 1; index < lines.length; index++) {\r
    if (lines[index].trim() !== '<Append') continue;\r
    let close = index + 1;\r
    while (close < lines.length && lines[close].trim() !== '</Append>') close++;\r
    const block = lines.slice(index, close + 1);\r
    const identifier = /identifier="([^"]+)"/u.exec(block.join(' '))?.[1];\r
    const type = /type="([^"]+)"/u.exec(block.join(' '))?.[1] ?? '';\r
    const owner = messages.findIndex(message => lines.slice(message.from, message.to + 1).some(line => line.includes(\`identifier="\${identifier}"\`)));\r
    if (identifier === undefined || owner === -1) throw new Error(\`the append at line \${index + 1} names no message's attachment\`);\r
    appends.push({ block, identifier, type, message: owner + 1 });\r
    index = close;\r
}\r
\r
const withoutTurns = block => {\r
    const out = [];\r
    let skipping = false;\r
    for (const line of block) {\r
        if (!skipping && line.trim() === '<Turn>') { skipping = true; continue; }\r
        if (skipping) { if (line.trim() === '</Turn>') skipping = false; continue; }\r
        out.push(line);\r
    }\r
    return out;\r
};\r
\r
let turnsRemoved = 0;\r
const chapters = cuts.map((cut, index) => {\r
    const own = messages.slice(cut.from - 1, cut.to);\r
    const body = own.flatMap(message => lines.slice(message.from, message.to + 1));\r
    const kept = withoutTurns(body);\r
    turnsRemoved += body.length - kept.length;\r
    const day = own[0].at.slice(0, 10);\r
    const shown = new Date(\`\${day}T00:00:00Z\`).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });\r
    const file = \`\${index + 1}-\${slug(cut.title)}.tsx\`;\r
    const head = cut.part === undefined ? [] : [\`        <Part>\${cut.part}</Part>\`];\r
    const ownAppends = appends.filter(append => append.message >= cut.from && append.message <= cut.to);\r
    const chapter = [\r
        ...imports, '', 'export default () => (', '    <Chapter>', ...head, '        <Dated>', \`            <Date>[\${shown}](\${day})</Date>\`, '        </Dated>',\r
        \`        <Title>[[ \${cut.title} ]]</Title>\`, ...kept, ...ownAppends.flatMap(append => append.block), '    </Chapter>', ');', '',\r
    ];\r
    return { file, title: cut.title, text: chapter.join(ending), messages: own.length, appends: ownAppends };\r
});\r
\r
const expected = messages.map(message => message.at);\r
const found = chapters.flatMap(chapter => instants(chapter.text));\r
if (found.length !== expected.length || found.some((at, index) => at !== expected[index]))\r
    throw new Error(\`nothing written: the cut would lose the sequence, \${found.length} instants against \${expected.length}\`);\r
\r
for (const chapter of chapters) {\r
    writeFileSync(join(folder, chapter.file), chapter.text);\r
    for (const append of chapter.appends) {\r
        const was = join(folder, \`1-conversation~\${append.identifier}\${append.type}\`);\r
        if (existsSync(was)) renameSync(was, join(folder, \`\${chapter.file.replace(/\\.tsx$/u, '')}~\${append.identifier}\${append.type}\`));\r
    }\r
}\r
\r
const tablePath = join(folder, '.table.tsx');\r
const table = readFileSync(tablePath, 'utf8');\r
const tableEnding = table.includes('\\r\\n') ? '\\r\\n' : '\\n';\r
const tableLines = table.split(tableEnding);\r
const rowAt = tableLines.findIndex(line => line.includes('$[[ ./Conversation ]]'));\r
if (rowAt === -1) throw new Error('the table has no row for ./Conversation');\r
const indent = /^ */u.exec(tableLines[rowAt])[0];\r
const paragraphOpen = rowAt - 1;\r
const paragraphClose = rowAt + 1;\r
const paragraphIndent = /^ */u.exec(tableLines[paragraphOpen])[0];\r
const paragraphs = [];\r
let open = null;\r
for (const cut of cuts) {\r
    const part = cut.part ?? null;\r
    if (part !== open) {\r
        if (open !== null) paragraphs.push(\`\${paragraphIndent}</Section>\`);\r
        if (part !== null) paragraphs.push(\`\${paragraphIndent}<Section>\`, \`\${indent}<Heading>\${part}</Heading>\`);\r
        open = part;\r
    }\r
    const outer = part === null ? paragraphIndent : indent;\r
    const inner = part === null ? indent : \`\${indent}    \`;\r
    paragraphs.push(\`\${outer}<Paragraph>\`, \`\${inner}<Content>$[[ ./\${cut.title} ]]</Content>\`, \`\${outer}</Paragraph>\`);\r
}\r
if (open !== null) paragraphs.push(\`\${paragraphIndent}</Section>\`);\r
tableLines.splice(paragraphOpen, paragraphClose - paragraphOpen + 1, ...paragraphs);\r
writeFileSync(tablePath, tableLines.join(tableEnding));\r
\r
unlinkSync(source);\r
const parts = new Set(cuts.map(cut => cut.part).filter(part => part !== undefined));\r
console.log(\`\${chapters.length} chapters written in \${parts.size} part\${parts.size === 1 ? '' : 's'}, the \${found.length} messages once each in order with their instants, \${turnsRemoved} lines of Turn marks removed, 1-conversation.tsx removed, the table rewritten with \${cuts.length} rows\`);\r
for (const chapter of chapters) console.log(\`  \${chapter.file}: \${chapter.messages} messages, "\${chapter.title}"\${chapter.appends.length > 0 ? \`, \${chapter.appends.length} append\${chapter.appends.length > 1 ? 's' : ''} with its file\` : ''}\`);\r
`}),n(D,{identifier:"survey",type:".mjs",children:"import { readdirSync, readFileSync } from 'node:fs';\r\nimport { basename, join } from 'node:path';\r\nimport { sorts } from './12-how-we-read-a-conversation~sorts.mjs';\r\n\r\nconst [book, named] = process.argv.slice(2);\r\nconst wanted = named === undefined ? null : sorts.find(sort => sort.toLowerCase() === named.toLowerCase());\r\nif (named !== undefined && wanted === null) throw new Error(`no sort is named ${named}; the sorts are ${sorts.join(', ')}`);\r\n\r\nconst read = text => text.replace(/\\s+/gu, ' ').replace(/&lt;/gu, '<').replace(/&gt;/gu, '>').replace(/&#123;/gu, '{').replace(/&#125;/gu, '}').replace(/&amp;/gu, '&').trim();\r\nconst chapters = readdirSync(book).filter(file => /^\\d+-.+\\.tsx$/u.test(file)).sort((a, b) => Number(a.split('-')[0]) - Number(b.split('-')[0])).map(file => {\r\n    const text = readFileSync(join(book, file), 'utf8');\r\n    const marks = [...text.matchAll(new RegExp(`<(${sorts.join('|')})>([\\\\s\\\\S]*?)</\\\\1>`, 'gu'))].map(match => ({ sort: match[1], words: read(match[2]) }));\r\n    return { file, title: /<Title>\\[\\[ (.+?) \\]\\]<\\/Title>/u.exec(text)?.[1] ?? file, part: /<Part>(.+?)<\\/Part>/u.exec(text)?.[1] ?? null, marks };\r\n});\r\n\r\nconst count = marks => sorts.map(sort => [sort, marks.filter(mark => mark.sort === sort).length]).filter(([, n]) => n > 0).map(([sort, n]) => `${sort} ${n}`).join(', ');\r\nconst all = chapters.flatMap(chapter => chapter.marks);\r\nif (wanted === null) {\r\n    console.log(`${basename(book)}: ${all.length} marks in ${chapters.length} chapter${chapters.length === 1 ? '' : 's'}; ${count(all)}`);\r\n    let part = null;\r\n    for (const chapter of chapters) {\r\n        if (chapter.part !== part) { part = chapter.part; console.log(`${part}`); }\r\n        console.log(`  ${chapter.title}: ${count(chapter.marks) || 'no marks'}`);\r\n    }\r\n} else {\r\n    const held = all.filter(mark => mark.sort === wanted);\r\n    console.log(`${basename(book)}: ${held.length} ${wanted}${held.length === 1 ? '' : 's'}`);\r\n    for (const chapter of chapters) {\r\n        const own = chapter.marks.filter(mark => mark.sort === wanted);\r\n        if (own.length === 0) continue;\r\n        console.log(`${chapter.part === null ? '' : `${chapter.part} · `}${chapter.title}`);\r\n        for (const mark of own) console.log(`  ${mark.words}`);\r\n    }\r\n}\r\n"})]}),"HowWeReadAConversation12"),Jc=r($a),rh=s(()=>d(Jc,{children:[Lc(),Bc(),Ec(),Fc(),Hc(),_c(),qc(),Uc(),Gc(),Vc(),Yc(),Zc(),Qc(),Xc(),Kc()]}),"book");export{rh as book};
