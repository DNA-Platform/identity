var yp=Object.defineProperty;var r=(p,e)=>yp(p,"name",{value:e,configurable:!0});import{jsxs as c,Fragment as k,jsx as n}from"react/jsx-runtime";import{$Theme as wp,specify as h,$Annotation as $,$Paragraph as u,$Author as mo,Word as j,Reference as w,$Subject as Wd,$Topic as Bd,AnnotationSpecification as v,$Word as D,$Format as q,html as z,$Chapter as y,binder as E,$Svg as ma,Code as zp,$Section as A,$Append as Q,$Date as $o,$Content as Nd,$TableOfContents as K,$Parenthetical as Op,$Composition as jp,$Image as ko,$Reference as oe,$Cover as T,$Synopsis as U,CoverSpecification as Dp,$Paginated as Cp,Self as za,$Book as Pp,reflection as Ap,BookSpecification as Np,Theme as he,$Referent as dt,$SelfReference as Hd,$Writing as Ip,$Heading as Ld,$Means as Mp,Referent as Tp,identifier as Rd,SectionSpecification as Wp,$Code as vo,highlighting as Bp,Chapter as Fd,Title as Ed,Author as _d,Subject as Gd,About as qd,Paragraph as Sd,Svg as Ud,Autobiography as Hp}from"@dna-platform/public";import{$ as o,selection as O,$check as l,inert as te,next as Lp}from"@dna-platform/chemistry";import{css as g}from"styled-components";const Wo=class Wo extends wp{constructor(){super(...arguments),this.font="'Inter', system-ui, sans-serif",this.prose="'Inter', system-ui, sans-serif",this.mono="'JetBrains Mono', ui-monospace, monospace",this.size="0.875rem",this.leading="1.6",this.measure="44rem",this.spreadColumn="15.5rem",this.space="1.5rem",this.holdsColumn="240px",this.barHeight="50px",this.beat="320ms",this.narrow="48rem",this.phoneWidth="390px",this.colour="#4e9eb9",this.accent="#166178",this.bar="#0c1b1f",this.barInk="#ffffff",this.barDim="#a9bcc1",this.barOn="rgba(255, 255, 255, 0.11)",this.barLine="#1d3339",this.mark="#c8f4fb",this.side="#e3f5fa",this.sideInk="#10252c",this.sideDim="#516770",this.sideOn="#ffffff",this.sideLine="#cbe6ee",this.night="#0c1b1f",this.deep="#14323c",this.blue="#166178",this.sea="#4e9eb9",this.sky="#8fc8dc",this.opal="#c8f4fb",this.pale="#e3f5fa",this.mist="#f1f7f9",this.white="#ffffff",this.ink="#10252c",this.soft="#516770",this.line="#dbe7ec",this.me="#e8590c",this.wash="linear-gradient(105deg, #e2f6fb 0%, #ecf0fd 52%, #fae9f4 100%)",this.serif="'Source Serif 4', Georgia, serif",this.between="'Source Sans 3', 'Inter', system-ui, sans-serif",this.bookPaper="#fbf9f3",this.bookInk="#29251d",this.heading="#10252c",this.capital="#166178",this.lit="#166178",this.faint="#8792a2",this.paper="#ffffff",this.panel="#f1f7f9",this.rule="#dbe7ec",this.edge="transparent",this.tint="#e3f5fa",this.dusk="#14323c",this.glow="#cfe6e3",this.dim="#4f7672",this.keyword="#8ad7ff",this.string="#ffd48a",this.type="#9be3d6",this.comment="#5f8a86",this.haze="#a9bcc1",this.glass="rgba(255, 255, 255, 0.62)",this.binding="linear-gradient(160deg, #16303a, #0c1b1f)",this.spine="inset 5px 0 0 rgba(0, 0, 0, 0.14), inset 6px 0 0 rgba(255, 255, 255, 0.12), 0 10px 20px -10px rgba(0, 0, 0, 0.45)",this.shadow="0 0.75rem 1.4rem -0.9rem rgba(12, 27, 31, 0.55)",this.volume="11.5rem",this.cover="8.25rem",this.card="18rem",this.barLight="#ffffff",this.barMid="#f1f7f9",this.barDeep="#e3f5fa",this.barShadow="none",this.sideLight="#ffffff",this.sideDeep="#e3f5fa",this.codeGround="#f1f7f9",this.hairline="1px",this.stroke="2px",this.rise="-1px",this.gloss="none",this.ring="0 0 0 2px #c8f4fb",this.decisionShadow="none",this.photo="7rem",this.radius="0.375rem",this.barTint="#ffffff",this.skyInk="#166178",this.lift="inset 5px 0 0 rgba(0, 0, 0, 0.14), inset 6px 0 0 rgba(255, 255, 255, 0.12), 0 14px 24px -12px rgba(0, 0, 0, 0.5)",this.openSpine="inset 7px 0 0 rgba(0, 0, 0, 0.14), inset 8px 0 0 rgba(255, 255, 255, 0.12), 0 12px 22px -14px rgba(0, 0, 0, 0.5)",this.sans="'Inter', system-ui, sans-serif",this.muted="#516770",this.bubble="rgba(16, 37, 44, 0.05)",this.shade="rgba(16, 37, 44, 0.03)",this.pill="#166178",this.column="48rem",this.style=O.div`${this.parts()}`}parts(){return[this.page(),this.writing(),this.links(),this.figures(),this.listings(),this.switches(),this.turns(),this.illustrations(),this.marks(),this.library(),this.head(),this.holds(),this.context(),this.tones()]}page(){return g`
            font-family: ${({theme:e})=>e.font};
            font-size: ${({theme:e})=>e.size};
            line-height: ${({theme:e})=>e.leading};
            color: ${({theme:e})=>e.ink};
            background: ${({theme:e})=>e.paper};
            min-height: 100vh;
        `}writing(){return g`
            .pd-pages { font-family: ${({theme:e})=>e.prose}; }
            .pd-chapter, .pd-section, .pd-paragraph { margin-block: ${({theme:e})=>e.space}; }
            .pd-chapter { max-width: ${({theme:e})=>e.measure}; }
        `}links(){return g`
            .pa-reference { color: ${({theme:e})=>e.accent}; }
            .pa-reference.pa-self-reference { color: inherit; text-decoration: none; }
        `}figures(){return g`
            .pd-image img { display: block; max-width: 100%; height: auto; }
            .pa-phone .pd-image img { max-width: min(100%, ${({theme:e})=>e.phoneWidth}); }
            .pd-code { font-family: ${({theme:e})=>e.mono}; overflow-x: auto; }
        `}listings(){return g`
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
        `}switches(){return g`
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
        `}illustrations(){return g`
            .pd-illustration { fill: none; stroke: var(--ink); stroke-width: 1.7; stroke-linecap: round; stroke-linejoin: round; }
            .pd-illustration .fill { fill: var(--foot); stroke: var(--ink); }
            .pd-illustration .light { fill: ${({theme:e})=>e.white}; stroke: none; }
            .pd-drawing { display: grid; place-items: center; min-height: 0; }
        `}marks(){return g`
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
        `}library(){return g`
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
        `}head(){return g`
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
        `}holds(){return g`
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
        `}context(){return g`
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
        `}tones(){return g`
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
        `}turns(){return g`
            .pd-paragraph.pd-turn {
                display: flex;
                justify-content: space-between;
                gap: ${({theme:e})=>e.space};
                font-size: calc(0.786 * ${({theme:e})=>e.size});
            }
            .pd-turn .pa-reference { font-weight: 500; text-decoration: none; }
            .pd-turn .pd-count { color: ${({theme:e})=>e.faint}; }
        `}};r(Wo,"$LibraryBookTheme");let ne=Wo;const Rp=o(ne);var Fp=Object.defineProperty,Ep=Object.getOwnPropertyDescriptor,_p=r((p,e,t,s)=>{for(var a=Ep(e,t),i=p.length-1,d;i>=0;i--)(d=p[i])&&(a=d(e,t,a)||a);return a&&Fp(e,t,a),a},"__decorateClass$t");const Bo=class Bo extends ${constructor(){super(...arguments),this.specification=new ct}defines(e){e.classes.add(this,"pa-label")}erase(e){e.classes.revert(this)}};r(Bo,"$Label");let Oa=Bo;const Ho=class Ho extends v{$saidOfAWord(e){l(e instanceof D,"label is said of a word, and this is not one")}};r(Ho,"LabelSpecification");let ct=Ho;_p([h("label is said of a word")],ct.prototype,"$saidOfAWord");const Me=o(Oa),Lo=class Lo extends u{get cover(){return this.$cover??this.book?.cover}write(){const e=this.cover.annotations.expressed(mo),t=o(j),s=o(Me),a=o(w);return c(k,{children:[c(t,{children:[n(s,{}),"by"]}),c(t,{children:[n(a,{children:e.means.identifier}),e.name]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-byline")}};r(Lo,"$Byline");let ja=Lo;const Ro=class Ro extends u{get cover(){return this.$cover??this.book?.cover}write(){const e=this.cover.annotations.expressed(Wd),t=o(j),s=o(Me),a=o(w);return c(k,{children:[c(t,{children:[n(s,{}),"subject"]}),c(t,{children:[n(a,{children:e.means.identifier}),e.name]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-subject-line")}};r(Ro,"$SubjectLine");let Da=Ro;const Fo=class Fo extends u{get cover(){return this.$cover??this.book?.cover}get topics(){return this.cover?.annotations.find(Bd)??[]}write(){const e=o(j),t=o(Me),s=o(w);return c(k,{children:[c(e,{children:[n(t,{}),"topic"]}),this.topics.map((a,i)=>c(e,{children:[n(s,{children:a.means.identifier}),a.name]},i))]})}$Define(){super.$Define(),this.classes.add(this,"pd-topic-line")}};r(Fo,"$TopicLine");let Ca=Fo;const Yd=o(ja),Gp=o(Da),qp=o(Ca);var Sp=Object.defineProperty,Up=Object.getOwnPropertyDescriptor,Yp=r((p,e,t,s)=>{for(var a=Up(e,t),i=p.length-1,d;i>=0;i--)(d=p[i])&&(a=d(e,t,a)||a);return a&&Sp(e,t,a),a},"__decorateClass$s");const Eo=class Eo extends v{$saidOfABook(e){l(e instanceof R,"this is said of a book of this library, and here it is said of something else")}};r(Eo,"OfABookSpecification");let L=Eo;Yp([h("this is said of a book of this library")],L.prototype,"$saidOfABook");const _o=class _o extends D{get on(){return[this.book.$is].flat().includes(this.$annotation)}$Switch(...e){this.$Writing(...e),this.containers.replace(this,"span","button")}container(e){return super.container({type:"button","aria-pressed":this.on,onClick:r(()=>this.press(),"onClick"),...e})}press(){const e=this.book,t=[e.$is].flat();e.$is=this.on?t.filter(s=>s!==this.$annotation):[this.$annotation,...t]}$Define(){super.$Define(),this.classes.add(this,"pd-switch")}};r(_o,"$Switch");let me=_o;const Go=class Go extends me{press(){const e=this.book,t=[e.$is].flat().filter(s=>!this.$family.includes(s));e.$is=[this.$annotation,...t]}};r(Go,"$Tab");let He=Go;const $a=o(me),Zp=o(He);var Kp=Object.defineProperty,Xp=Object.getOwnPropertyDescriptor,Zd=r((p,e,t,s)=>{for(var a=Xp(e,t),i=p.length-1,d;i>=0;i--)(d=p[i])&&(a=d(e,t,a)||a);return a&&Kp(e,t,a),a},"__decorateClass$r");const qo=class qo extends q{constructor(){super(...arguments),this.specification=new Le,this.style=O.div`
        .pa-coloured { --colour: ${e=>e.$colour}; }
    `}get colour(){return z.copy(this.text).trim()}$Coloured(...e){this.$Format(...e);const t=this.style;this._painted=s=>n(t,{$colour:this.colour,...s})}defines(e){e.classes.add(this,"pa-coloured"),e.containers.add(this,this._painted)}erase(e){e.classes.revert(this),e.containers.revert(this)}};r(qo,"$Coloured");let re=qo;const So=class So extends v{$saidOfAChapterOrAParagraph(e){l(e instanceof y||e instanceof u,"coloured is said of a chapter or a paragraph, and this is neither")}$givenItsColour(e){l(/^#[0-9a-f]{6}$/iu.test(e.annotations.expressed(re)?.colour??""),"coloured is given its colour as six hex digits, and this one was given something else")}};r(So,"ColouredSpecification");let Le=So;Zd([h("coloured is said of a chapter or a paragraph")],Le.prototype,"$saidOfAChapterOrAParagraph");Zd([h("coloured is given its colour")],Le.prototype,"$givenItsColour");const zf=o(re);var Jp=Object.defineProperty,Vp=Object.getOwnPropertyDescriptor,xo=r((p,e,t,s)=>{for(var a=Vp(e,t),i=p.length-1,d;i>=0;i--)(d=p[i])&&(a=d(e,t,a)||a);return a&&Jp(e,t,a),a},"__decorateClass$q");const Uo=class Uo extends q{constructor(){super(...arguments),this.specification=new $e}get identifier(){return E.reference(z.copy(this.text))?.identifier??""}get name(){return E.reference(z.copy(this.text))?.name??""}get entry(){return this.book?.chapterAt(this.identifier)}get drawing(){const e=this.entry?.text.find(u).flatMap(t=>t.text.find(ma))[0];return e===void 0?"":z.copy(e.text).trim()}get colour(){return this.entry?.annotations.expressed(re)?.colour??""}$Keyed(...e){this.$Format(...e);const t=o(Qp);this._layer=s=>c("div",{...s,children:[n(t,{keyed:this}),s.children]})}defines(e){e.classes.add(this,"pa-keyed"),e.containers.add(this,this._layer)}erase(e){e.classes.revert(this),e.containers.revert(this)}};r(Uo,"$Keyed");let V=Uo;const Yo=class Yo extends D{constructor(){super(...arguments),this.style=O.span`
        --colour: ${e=>e.$colour};
    `}$Icon(...e){this.$Writing(...e);const t=this.style;this._painted=s=>n(t,{$colour:this.$keyed?.colour??"",...s}),this.containers.replace(this,"span",this._painted)}write(){return n("span",{className:"pd-drawing",role:"img","aria-label":this.$keyed?.name,dangerouslySetInnerHTML:{__html:this.$keyed?.drawing??""}})}$Define(){super.$Define(),this.classes.add(this,"pd-icon")}};r(Yo,"$Icon");let Pa=Yo;const Zo=class Zo extends v{$saidOfAChapter(e){l(e instanceof y,"keyed is said of a chapter, and this is not one")}$namesAnEntry(e){const t=e.annotations.expressed(V)?.entry;l(t!==void 0&&t.annotations.expressed(V)?.entry===t,"keyed names an entry of the key, a chapter of this book keyed as itself, and this one names something else")}$entryHoldsItsDrawingAndColour(e){const t=e.annotations.expressed(V)?.entry;t!==void 0&&l(t.text.find(u).flatMap(s=>s.text.find(ma)).length===1&&t.is(re),"an entry of the key holds one drawing and its colour, and this one holds something else")}};r(Zo,"KeyedSpecification");let $e=Zo;xo([h("keyed is said of a chapter")],$e.prototype,"$saidOfAChapter");xo([h("keyed names an entry of the key")],$e.prototype,"$namesAnEntry");xo([h("an entry of the key holds one drawing and its colour")],$e.prototype,"$entryHoldsItsDrawingAndColour");const Of=o(V),Kd=o(Pa),Qp=Kd;var ec=Object.defineProperty,tc=Object.getOwnPropertyDescriptor,ac=r((p,e,t,s)=>{for(var a=tc(e,t),i=p.length-1,d;i>=0;i--)(d=p[i])&&(a=d(e,t,a)||a);return a&&ec(e,t,a),a},"__decorateClass$p");const sc={tsx:"typescript",ts:"typescript",mjs:"javascript",js:"javascript",css:"css",html:"xml",svg:"xml",json:"json",md:"markdown"},oc='<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"><path d="M6 4.5 3.5 8 6 11.5M10 4.5 12.5 8 10 11.5"/></svg>',Te=r(p=>`${p.$identifier}${p.$type}`,"fileNameOf"),nc=r(p=>p===void 0?[]:z.copy(p.text).split(`
`),"fileLinesOf"),Xd=r(p=>p?.chapter?.annotations.expressed(W),"spreadOf"),Ko=class Ko extends u{constructor(){super(...arguments),this.$family=[]}get name(){return this.$file===void 0?"":Te(this.$file)}get language(){return sc[(this.$file?.$type??"").replace(/^\./u,"")]??""}get spread(){return Xd(this.$file)}get chapter(){return this.$file?.chapter??super.chapter}$FileListing(...e){this.$Writing(...e),this.containers.replace(this,"span","div")}container(e){return super.container({onClick:r(()=>this.press(),"onClick"),...e})}press(){if(this.$filePanelState===void 0)return;const e=this.book,t=[e.$is].flat().filter(s=>!this.$family.includes(s));e.$is=[this.$filePanelState,...t]}write(){const e=o(j),t=o(zp);return c(k,{children:[n(e,{children:this.name}),n(t,{identifier:this.$file?.$identifier,type:this.$file?.$type,language:this.language,numbered:!0})]})}$Define(){super.$Define(),this.classes.add(this,"pd-file-listing");const e=o(dc);this.annotations.add(this,n(e,{}))}};r(Ko,"$FileListing");let lt=Ko;const Xo=class Xo extends ${constructor(){super(...arguments),this.specification=new ht}defines(e){const t=e;t.$file!==void 0&&t.spread?.openFile===t.$file&&e.classes.add(this,"pa-open")}erase(e){e.classes.revert(this)}};r(Xo,"$OpenListing");let Aa=Xo;const Jo=class Jo extends v{$isAFileListing(e){l(e instanceof lt,"an open listing is a file listing, and this is not one")}};r(Jo,"OpenListingSpecification");let ht=Jo;ac([h("an open listing is a file listing")],ht.prototype,"$isAFileListing");const Vo=class Vo extends He{constructor(){super(...arguments),this.$skeleton=!1,this.style=O.button`
        --colour: ${e=>e.$colour};
    `}get on(){const e=this.$file?.chapter;return e!==void 0&&e===this.book.open&&this.spread?.openFile===this.$file}get name(){return this.$file===void 0?"":Te(this.$file)}get spread(){return Xd(this.$file)}get colour(){return this.$file?.chapter?.annotations.expressed(V)?.colour??""}get lines(){return nc(this.$file)}get chapter(){return this.$file?.chapter??super.chapter}$FileTab(...e){this.$Switch(...e),this.containers.replace(this,"button",this.style)}container(e){return super.container({$colour:this.colour,...e})}press(){const e=this.spread;e!==void 0&&(e.$openFile=this.$file),this.$annotation!==void 0&&super.press()}write(){return c(k,{children:[n("span",{className:"pd-drawing",dangerouslySetInnerHTML:{__html:oc}}),n("span",{className:"pd-tab-name",children:this.name}),this.$skeleton?n("span",{className:"pd-skeleton",children:this.lines.slice(0,14).map((e,t)=>n("i",{style:{width:`${Math.max(12,Math.min(100,e.length*2.2))}%`}},t))}):void 0]})}$Define(){super.$Define(),this.classes.add(this,"pd-file-tab")}};r(Vo,"$FileTab");let Na=Vo;const rc=o(lt),ic=o(Aa),yo=o(Na),dc=ic;var pc=Object.defineProperty,cc=Object.getOwnPropertyDescriptor,lc=r((p,e,t,s)=>{for(var a=cc(e,t),i=p.length-1,d;i>=0;i--)(d=p[i])&&(a=d(e,t,a)||a);return a&&pc(e,t,a),a},"__decorateClass$o");const ga=class ga extends ${constructor(){super(...arguments),this.specification=new L}defines(e){for(const t of e.annotations.after(this))t instanceof ga&&e.annotations.express(t,!1);e.classes.add(this,"pa-file-panel-state")}erase(e){e.classes.revert(this)}};r(ga,"$FilePanelState");let ke=ga;const Qo=class Qo extends ke{defines(e){super.defines(e),e.classes.add(this,"pa-code-forward")}};r(Qo,"$CodeForward");let Ia=Qo;const en=class en extends ke{defines(e){super.defines(e),e.classes.add(this,"pa-words-forward")}};r(en,"$WordsForward");let Ma=en;const tn=class tn extends ke{defines(e){super.defines(e),e.classes.add(this,"pa-split")}};r(tn,"$Split");let Ta=tn;const an=class an extends ${constructor(){super(...arguments),this.specification=new L}defines(e){e.classes.add(this,"pa-light-code")}erase(e){e.classes.revert(this)}};r(an,"$LightCode");let Wa=an;const sn=class sn extends ${constructor(){super(...arguments),this.specification=new L}defines(e){e.classes.add(this,"pa-wrapped-code")}erase(e){e.classes.revert(this)}};r(sn,"$WrappedCode");let Ba=sn;const on=class on extends ${constructor(){super(...arguments),this.specification=new L}defines(e){e.classes.add(this,"pa-numbered-code")}erase(e){e.classes.revert(this)}};r(on,"$NumberedCode");let Ha=on;const nn=class nn extends ${constructor(){super(...arguments),this.specification=new ft}defines(e){e.classes.add(this,"pa-brief")}erase(e){e.classes.revert(this)}};r(nn,"$Brief");let Re=nn;const rn=class rn extends v{$saidOfAParagraph(e){l(e instanceof u,"brief is said of a paragraph, and this is not one")}};r(rn,"BriefSpecification");let ft=rn;lc([h("brief is said of a paragraph")],ft.prototype,"$saidOfAParagraph");o(ke);const wo=o(Ia),zo=o(Ma),Fe=o(Ta),hc=o(Wa),fc=o(Ba),Jd=o(Ha),jf=o(Re),dn=class dn extends u{constructor(){super(...arguments),this.style=O.div`
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
    `}get spread(){return this.chapter?.annotations.expressed(W)}$FileRail(...e){this.$Writing(...e),this.containers.replace(this,"span",this.style)}write(){const e=o(yo),t=this.spread;if(t!==void 0)return t.files.map(s=>n(e,{file:s,annotation:Fe,family:t.filePanelStates,skeleton:!0},Te(s)))}$Define(){super.$Define(),this.classes.add(this,"pd-file-rail")}};r(dn,"$FileRail");let La=dn;const pn=class pn extends He{constructor(){super(...arguments),this.style=O.button`
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
    `}get paragraphs(){return(this.chapter?.text.find(A)??[]).flatMap(e=>e.text.find(u)).slice(0,16).map(e=>z.copy(e.text))}$FilePanelGrip(...e){this.$Switch(...e),this.containers.replace(this,"button",this.style)}write(){return n("span",{className:"pd-skeleton",children:this.paragraphs.map((e,t)=>n("i",{style:{width:`${Math.max(25,Math.min(100,e.length/4))}%`}},t))})}$Define(){super.$Define(),this.classes.add(this,"pd-file-panel-grip")}};r(pn,"$FilePanelGrip");let Ra=pn;const gc=o(La),uc=o(Ra),cn=class cn extends u{constructor(){super(...arguments),this.style=O.div`
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
    `}get spread(){return this.chapter?.annotations.expressed(W)}$FilePanel(...e){this.$Writing(...e),this.containers.replace(this,"span",this.style)}write(){const e=o($c),t=o(rc),s=this.spread;if(s!==void 0)return c(k,{children:[n(e,{chapter:this.chapter}),n("div",{className:"pd-file-listings",children:s.files.map(a=>n(t,{file:a,filePanelState:wo,family:s.filePanelStates},Te(a)))})]})}$Define(){super.$Define(),this.classes.add(this,"pd-file-panel")}};r(cn,"$FilePanel");let Fa=cn;const ln=class ln extends u{constructor(){super(...arguments),this.style=O.div`
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
    `}get spread(){return this.chapter?.annotations.expressed(W)}$FilePanelBar(...e){this.$Writing(...e),this.containers.replace(this,"span",this.style)}write(){const e=o(yo),t=o(Zp),s=o($a),a=this.spread,i=this.chapter;if(a!==void 0)return c(k,{children:[a.files.map(d=>n(e,{file:d},Te(d))),n("span",{className:"pd-words-only",children:n(t,{chapter:i,annotation:zo,family:a.filePanelStates,children:"words"})}),n("span",{className:"pd-dock pd-to-full",children:n(t,{chapter:i,annotation:wo,family:a.filePanelStates,children:"full screen"})}),n("span",{className:"pd-dock pd-to-split",children:n(t,{chapter:i,annotation:Fe,family:a.filePanelStates,children:"split"})}),c("span",{className:"pd-options",children:[n(s,{chapter:i,annotation:hc,children:"light"}),n(s,{chapter:i,annotation:fc,children:"wrap"}),n(s,{chapter:i,annotation:Jd,children:"lines"})]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-file-panel-bar")}};r(ln,"$FilePanelBar");let Ea=ln;const bc=o(Fa),mc=o(Ea),$c=mc;var kc=Object.defineProperty,vc=Object.getOwnPropertyDescriptor,xc=r((p,e,t,s)=>{for(var a=vc(e,t),i=p.length-1,d;i>=0;i--)(d=p[i])&&(a=d(e,t,a)||a);return a&&kc(e,t,a),a},"__decorateClass$n");const hn=class hn extends q{constructor(){super(...arguments),this.specification=new gt,this.$openFile=void 0,this.grid=O.div`
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
    `}get files(){return this.parent.annotations.find(Q).reverse()}get openFile(){return this.$openFile??this.files[0]}get filePanelStates(){return[zo,Fe,wo]}$Spread(...e){this.$Format(...e);const t=this.grid,s=o(bc),a=o(gc),i=o(uc);this.style=({className:d,children:f})=>{const b=this.parent,m=[...b.classes].includes("pa-open");return c(t,{className:`${d??""}${m?" pa-open":""}`.trim(),children:[n("div",{className:"pd-words",children:f}),m?c(k,{children:[n(s,{chapter:b}),n(a,{chapter:b}),n(i,{chapter:b,annotation:Fe,family:this.filePanelStates})]}):void 0]})}}defines(e){super.defines(e),e.classes.add(this,"pa-spread")}erase(e){super.erase(e),e.classes.revert(this)}};r(hn,"$Spread");let W=hn;const fn=class fn extends v{$isAChapter(e){l(e instanceof y,"a spread is a chapter read beside its files, and this is not a chapter")}};r(fn,"SpreadSpecification");let gt=fn;xc([h("a spread is a chapter read beside its files")],gt.prototype,"$isAChapter");const Df=o(W);var yc=Object.defineProperty,wc=Object.getOwnPropertyDescriptor,Oo=r((p,e,t,s)=>{for(var a=wc(e,t),i=p.length-1,d;i>=0;i--)(d=p[i])&&(a=d(e,t,a)||a);return a&&yc(e,t,a),a},"__decorateClass$m");const gn=class gn extends ${constructor(){super(...arguments),this.specification=new ve}get date(){return this.text.find($o)[0]}defines(e){e.classes.add(this,"pa-dated")}erase(e){e.classes.revert(this)}note(){const e=o(this.date);return n(e,{})}};r(gn,"$Dated");let _=gn;const un=class un extends v{$saidOfAChapter(e){l(e instanceof y,"dated is said of a chapter, and this is not one")}$datedOnce(e){l(e.annotations.containsOne(_),"a chapter is dated once, and this one is dated more than once")}$givenOneDate(e){l(e.annotations.expressed(_)?.text.find($o).length===1,"a dated chapter is given one date, and this one is given none or more than one")}};r(un,"DatedSpecification");let ve=un;Oo([h("dated is said of a chapter")],ve.prototype,"$saidOfAChapter");Oo([h("a chapter is dated once")],ve.prototype,"$datedOnce");Oo([h("a dated chapter is given one date")],ve.prototype,"$givenOneDate");const Cf=o(_);var zc=Object.defineProperty,Oc=Object.getOwnPropertyDescriptor,We=r((p,e,t,s)=>{for(var a=Oc(e,t),i=p.length-1,d;i>=0;i--)(d=p[i])&&(a=d(e,t,a)||a);return a&&zc(e,t,a),a},"__decorateClass$l");const Vd='<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3.5 10.5 8 6 12.5"/></svg>',jc='<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linejoin="round" stroke-linecap="round"><rect class="ground" x="0.75" y="0.75" width="14.5" height="14.5"/><path d="M3.5 5.5h3l1.5 1.5h4.5v5h-9z"/></svg>',bn=class bn extends q{constructor(){super(...arguments),this.specification=new xt,this.style=O.div`
        ${e=>e.$schemeDeclarations===void 0?"":`.pa-entry { ${e.$schemeDeclarations} }`}
    `}get place(){return M(this.parent).identifier}get referencedChapter(){return this.book.chapterAt(this.place)}get cover(){return this.referencedChapter?.annotations.expressed(N)?.cover??this.book.coverOf(this.place)}get schemeDeclarations(){const e=this.cover?.annotations.expressed(Y);if(e!==void 0)return e.declarations;const t=this.referencedChapter?.annotations.expressed(re)?.colour;return t===void 0?void 0:`--colour: ${t};`}$Entry(...e){this.$Format(...e);const t=this.style;this._painted=s=>n(t,{$schemeDeclarations:this.schemeDeclarations,...s})}defines(e){e.classes.add(this,"pa-entry"),e.containers.add(this,this._painted),(this.place===this.book?.$bookmark||this.place===this.book.open?.mention?.identifier)&&e.classes.add(this,"pa-open")}erase(e){e.classes.revert(this),e.containers.revert(this)}};r(bn,"$Entry");let ie=bn;const mn=class mn extends ${constructor(){super(...arguments),this.specification=new vt}defines(e){e.classes.add(this,"pa-appendix")}erase(e){e.classes.revert(this)}};r(mn,"$Appendix");let xe=mn;const $n=class $n extends ${constructor(){super(...arguments),this.specification=new kt,this.$folded=!1,this.$counted=!1,this.$dated=!1,this.$searched=!1,this.$search=""}get sections(){return this.chapter.text.find(A)}get entries(){const e=r(t=>!t.is(Op)&&M(t)!==void 0,"listed");return[...this.chapter.text].flatMap(t=>t instanceof A?t.text.find(u):t instanceof u?[t]:[]).filter(e)}get found(){return this.book.found(this.$search)}chapterOf(e){const t=M(e)?.identifier;return t===void 0?void 0:this.book.chapterAt(t)}search(e){this.$search=e;const t=this.chapter,s=e.trim()!=="";if(t!==void 0&&s!==t.is(ut)){const a=[t.$is].flat().filter(i=>i!==void 0&&i!==Id);t.$is=s?[Id,...a]:a}this.book.sought(e.trim())}$Bound(){const e=o(Ic),t=o(sp),s=o(yo),a=this.book;for(const m of this.entries){m.annotations.add(this,n(e,{}));const x=a.chapterAt(M(m).identifier)?.annotations.expressed(W);if(x===void 0)continue;const C=x.files;m.text.add(this,n(t,{foldedWriting:C.length===0?void 0:m,annotation:Za}),...C.map(S=>n(s,{file:S,annotation:Fe,family:x.filePanelStates},Te(S))))}const i=o(ap),d=o(Wc),f=new Set(a.entries),b=r(m=>{const x=this.chapterOf(m);return x!==void 0&&f.has(x)},"leadsToAnEntry");if(this.$dated)for(const m of this.entries){const x=this.chapterOf(m);x===void 0||!f.has(x)||!x.is(_)||m.text.add(this,n(i,{entry:x}))}for(const m of this.sections){this.$folded&&(m.$is=[Za]);const x=m.canonical;this.$counted&&x!==void 0&&m.text.find(u).some(b)&&x.text.add(this,n(d,{section:m}))}super.$Bound()}};r($n,"$Index");let I=$n;const kn=class kn extends ${constructor(){super(...arguments),this.specification=new bt}defines(e){e.classes.add(this,"pa-searching")}erase(e){e.classes.revert(this)}};r(kn,"$Searching");let ut=kn;const vn=class vn extends v{$saidOfATable(e){l(e.is(K),"searching is said of a table of contents, the index's chapter, and this is not one")}};r(vn,"SearchingSpecification");let bt=vn;We([h("searching is said of a table of contents")],bt.prototype,"$saidOfATable");const xn=class xn extends u{get index(){return this.book?.table?.annotations.expressed(I)}$Search(...e){this.$Writing(...e),this.containers.replace(this,"span","div")}write(){const e=this.index,t=this.book;if(!(e===void 0||t===void 0))return c(k,{children:[n("span",{className:"pd-search-mark","aria-hidden":"true",children:"⌕"}),n("input",{className:"pd-search-word",type:"search",value:e.$search,placeholder:t.searchHint,"aria-label":"search",onInput:r(s=>e.search(s.target.value),"onInput")})]})}$Define(){super.$Define(),this.classes.add(this,"pd-search")}};r(xn,"$Search");let _a=xn;const yn=class yn extends u{get index(){return this.book?.table?.annotations.expressed(I)}$Results(...e){this.$Writing(...e),this.containers.replace(this,"span","div")}write(){const e=this.index,t=this.book;if(e===void 0||t===void 0)return;const s=e.$search.trim();if(s==="")return;const a=t.found(s);return c(k,{children:[n("span",{className:"pd-results-count",children:t.countOfFound(a,s)}),a.map((i,d)=>this.result(i,d))]})}result(e,t){const s=o(Mc);return n(s,{chapter:this.chapter,hit:e},this.book.placeOf(e)??t)}$Define(){super.$Define(),this.classes.add(this,"pd-results")}};r(yn,"$Results");let Ee=yn;const wn=class wn extends D{write(){}$Define(){super.$Define(),this.classes.add(this,"pd-entry-open")}};r(wn,"$EntryOpen");let mt=wn;const zn=class zn extends u{get index(){return this.book?.table?.annotations.expressed(I)}$Result(...e){this.$Writing(...e),this.containers.replace(this,"span","div")}write(){const e=this.book,t=this.$hit,s=this.index;if(e===void 0||t===void 0||s===void 0)return;const a=s.$search.trim(),i=e.wordsOf(t),d=e.placeOf(t),f=o(w),b=o(ap),m=o(this.open());return c(k,{children:[n("span",{className:"pd-result-title",children:$t(i.title,a)}),t instanceof y&&t.is(_)?n(b,{entry:t}):void 0,n("span",{className:"pd-result-synopsis",children:$t(Qd(i.text,a),a)}),d===void 0?void 0:n(m,{entry:t,children:n(f,{children:d})})]})}open(){return Tc}$Define(){super.$Define(),this.classes.add(this,"pd-result")}};r(zn,"$Result");let _e=zn;const Qd=r((p,e)=>{if(p.length<=190)return p;const t=p.toLowerCase().indexOf(e.toLowerCase());if(t<150)return`${p.slice(0,187)}…`;const s=p.lastIndexOf(" ",t-90)+1;return`…${p.slice(s,s+186)}…`},"clipped"),$t=r((p,e)=>{if(e==="")return p;const t=p.toLowerCase(),s=e.toLowerCase(),a=[];let i=0;for(let d=t.indexOf(s);d!==-1;d=t.indexOf(s,i))a.push(p.slice(i,d),n("mark",{children:p.slice(d,d+e.length)},d)),i=d+e.length;return a.push(p.slice(i)),a},"marked"),On=class On extends D{write(){const[e,t,s]=(this.$entry?.annotations.expressed(_)?.date?.date??"").split("-");if(!(e===void 0||t===void 0||s===void 0))return new Date(Date.UTC(Number(e),Number(t)-1,Number(s.slice(0,2)))).toLocaleString("en-GB",{day:"numeric",month:"short",timeZone:"UTC"})}$Define(){super.$Define(),this.classes.add(this,"pd-entry-day")}};r(On,"$EntryDay");let Ga=On;const jn=class jn extends D{write(){return String(this.$section?.text.find(u).filter(e=>M(e)!==void 0).length??0)}$Define(){super.$Define(),this.classes.add(this,"pd-section-count")}};r(jn,"$SectionCount");let qa=jn;const Dn=class Dn extends v{$isATableOfContents(e){l(e.is(K),"an index is a table of contents, and this chapter is not one")}};r(Dn,"IndexSpecification");let kt=Dn;We([h("an index is a table of contents")],kt.prototype,"$isATableOfContents");const Cn=class Cn extends v{$isASectionOfTheTable(e){l(e instanceof A&&e.chapter?.is(K)===!0,"the appendix is a section of the table of contents, and this is not one")}};r(Cn,"AppendixSpecification");let vt=Cn;We([h("the appendix is a section of the table of contents")],vt.prototype,"$isASectionOfTheTable");const Pn=class Pn extends v{$isARowThatLeadsSomewhere(e){l(e instanceof u&&M(e)!==void 0,"an entry is a row that leads somewhere, and this is not one")}};r(Pn,"EntrySpecification");let xt=Pn;We([h("an entry is a row that leads somewhere")],xt.prototype,"$isARowThatLeadsSomewhere");const An=class An extends ${constructor(){super(...arguments),this.specification=new wt}defines(e){e.classes.add(this,"pa-folded")}erase(e){e.classes.revert(this)}};r(An,"$Folded");let Sa=An;const Nn=class Nn extends me{get on(){return this.$foldedWriting!==void 0&&[this.$foldedWriting.$is].flat().includes(this.$annotation)}container(e){return super.container({...e,disabled:this.$foldedWriting===void 0,onClick:r(t=>{t.preventDefault(),this.press()},"onClick")})}press(){const e=this.$foldedWriting;if(e===void 0)return;const t=[e.$is].flat();e.$is=this.on?t.filter(s=>s!==this.$annotation):[this.$annotation,...t]}write(){return n("span",{className:"pd-drawing",dangerouslySetInnerHTML:{__html:Vd}})}$Define(){super.$Define(),this.classes.add(this,"pd-fold-chevron")}};r(Nn,"$FoldChevron");let Ua=Nn;const In=class In extends q{constructor(){super(...arguments),this.specification=new zt,this.tree=O.div`
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
    `}get section(){return this.parent}get firstPlace(){return this.section.text.find(u).map(e=>M(e)).find(e=>e!==void 0)?.identifier}get part(){const e=this.firstPlace;return e===void 0?void 0:this.book.chapterAt(e)?.part}get open(){const e=this.book,t=e.open,s=this.section.mention?.identifier;return t!==void 0&&t.part?.name===this.part?.name||s!==void 0&&e.placeWithin(s)===e.$bookmark}$TreeFolder(...e){this.$Format(...e);const t=this.tree,s=o(sp),a=o(j),i=o(w);this.style=({className:d,children:f})=>{const b=this.firstPlace,m=[...this.section.classes].includes("pa-open"),x=this.book.open!==void 0,C=this.chapter?.annotations.expressed(I)?.$folded===!0&&!(m&&x),S=n("span",{className:"pd-drawing pd-tree-folder-mark",dangerouslySetInnerHTML:{__html:jc}});return c(t,{className:`${d??""} pd-tree-folder${m?" pa-open":""}${C?" pa-foldable":""}`.trim(),children:[n(s,{foldedWriting:this.section,annotation:Za}),b===void 0?S:c(a,{children:[n(i,{children:b}),S]}),f]})}}defines(e){super.defines(e),e.classes.add(this,"pa-tree-folder"),this.open&&e.classes.add(this,"pa-open")}erase(e){super.erase(e),e.classes.revert(this)}};r(In,"$TreeFolder");let yt=In;const Mn=class Mn extends v{$saidOfASectionOrAnEntry(e){l(e instanceof A&&e.chapter?.is(K)===!0||e.is(ie),"folded is said of a section of a table of contents or of an entry, and this is neither")}};r(Mn,"FoldedSpecification");let wt=Mn;We([h("folded is said of a section of a table of contents or of an entry")],wt.prototype,"$saidOfASectionOrAnEntry");const Tn=class Tn extends v{$isASectionOfTheTable(e){l(e instanceof A&&e.chapter?.is(K)===!0,"a tree folder is a section of the table of contents, and this is not one")}};r(Tn,"TreeFolderSpecification");let zt=Tn;We([h("a tree folder is a section of the table of contents")],zt.prototype,"$isASectionOfTheTable");const Wn=class Wn extends u{get cover(){return this.$cover??this.book?.cover}write(){const e=this.cover,t=o(j),s=o(w);return c(t,{children:[n(s,{children:e.mention.identifier}),n("span",{className:"pd-drawing",dangerouslySetInnerHTML:{__html:Vd}}),e.title.name]})}$Define(){super.$Define(),this.classes.add(this,"pd-tree-root")}};r(Wn,"$TreeRoot");let Ya=Wn;const M=r(p=>p.annotations.expressed(Nd)??p.text.find(D).map(e=>e.annotations.expressed(Nd)).find(e=>e!==void 0),"contentOf"),ep=o(ie),Pf=o(I),Dc=o(ut),jo=o(_a),tp=o(Ee),Cc=o(_e),ka=o(mt),Do=o(Ga),Pc=o(qa),Af=o(xe),Co=o(Sa),Ac=o(Ua),va=o(yt),Nc=o(Ya),Ic=ep,Id=Dc,Mc=Cc,Tc=ka,ap=Do,Wc=Pc,Za=Co,sp=Ac;var Bc=Object.defineProperty,Hc=Object.getOwnPropertyDescriptor,fe=r((p,e,t,s)=>{for(var a=Hc(e,t),i=p.length-1,d;i>=0;i--)(d=p[i])&&(a=d(e,t,a)||a);return a&&Bc(e,t,a),a},"__decorateClass$k");const xa=r((p,e)=>{const t=new Set(p.text.find(e));return p.text.find(jp).flatMap(s=>[...t.has(s)?[s]:[],...xa(s,e)])},"within"),Bn=class Bn extends ${constructor(){super(...arguments),this.specification=new de}get identifier(){return E.reference(z.copy(this.text))?.identifier??""}get name(){return E.reference(z.copy(this.text))?.name??""}get cover(){const e=this.identifier;return this.chapter?.annotations.find(N).map(t=>t.cover).find(t=>t?.mention?.identifier===e)}defines(e){e.classes.add(this,"pa-design")}erase(e){e.classes.revert(this)}};r(Bn,"$Design");let B=Bn;const Hn=class Hn extends ${constructor(){super(...arguments),this.specification=new Ot}defines(e){e.classes.add(this,"pa-exhibit")}erase(e){e.classes.revert(this)}};r(Hn,"$Exhibit");let Ge=Hn;const Ln=class Ln extends ${constructor(){super(...arguments),this.specification=new jt,this.$number=0,this.span=O.span.attrs({className:"pd-plate"})``}note(){const e=this.span;return c(k,{children:[n(e,{children:String(this.$number).padStart(2,"0")}),n("span",{className:"pd-jacket-mini"})]})}defines(e){e.classes.add(this,"pa-plate")}erase(e){e.classes.revert(this)}};r(Ln,"$Plate");let Ka=Ln;const Rn=class Rn extends q{constructor(){super(...arguments),this.specification=new Dt,this.themeProvider=!0,this.room=O.div`
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
    `}get chapter(){return this.parent}get design(){return this.chapter.annotations.expressed(B)}get plate(){return this.book.chapters.filter(e=>e.is(B)).indexOf(this.chapter)+1}$Room(...e){this.$Format(...e);const t=this.room;this.style=({className:s,children:a})=>{const i=[...this.chapter.classes].includes("pa-open");return be(this.design?.cover,c(t,{className:`${s??""} pd-room${i?" pa-open":""}`.trim(),children:[n("span",{className:"pd-plate",children:String(this.plate).padStart(2,"0")}),a]}))}}defines(e){super.defines(e),e.classes.add(this,"pa-room")}erase(e){super.erase(e),e.classes.revert(this)}};r(Rn,"$Room");let Xa=Rn;const Fn=class Fn extends u{get references(){const e=this.book?.means?.identifier??"",t=new Map;for(const s of xa(this.chapter,D)){if(s.parent===this)continue;const a=s.annotations.expressed(oe)?.identifier;if(a===void 0||a.startsWith(e)||t.has(a))continue;const i=z.copy(s.text);t.set(a,E.reference(i)?.name??i.trim())}return[...t]}write(){const e=o(j),t=o(w);return this.references.map(([s,a],i)=>c(e,{children:[n(t,{children:s}),a,n("span",{className:"pd-where",children:s.replace(/^\/dougs-/u,"").replace(/\/#?/u," · ").replace(/ · $/u,"").replace(/-/gu," ")})]},i))}$Define(){super.$Define(),this.classes.add(this,"pd-built-in")}};r(Fn,"$BuiltIn");let Ja=Fn;const En=class En extends v{$isAChapter(e){l(e instanceof y,"a design is a chapter, and this is not one")}$namesABook(e){l((e.annotations.expressed(B)?.identifier??"")!=="","a design names the book it is of, and this one names nothing")}$holdsTheCover(e){l(e.annotations.expressed(B)?.cover!==void 0,"a design holds the cover of the book it is of, as a volume, and this one holds none")}$showsItselfAsBuilt(e){l(e instanceof y&&xa(e,u).some(t=>t.is(Ge)),"a design shows itself as built, in a paragraph said to be the exhibit, and this one shows nothing")}};r(En,"DesignSpecification");let de=En;fe([h("a design is a chapter")],de.prototype,"$isAChapter");fe([h("a design names the book it is of")],de.prototype,"$namesABook");fe([h("a design holds the cover of the book it is of")],de.prototype,"$holdsTheCover");fe([h("a design shows itself as built")],de.prototype,"$showsItselfAsBuilt");const _n=class _n extends v{$isAParagraphOfADesignHoldingOneImage(e){l(e instanceof u&&e.chapter?.is(B)===!0&&e.text.find(ko).length===1,"an exhibit is a paragraph of a design that holds one image, and this is not one")}};r(_n,"ExhibitSpecification");let Ot=_n;fe([h("an exhibit is a paragraph of a design that holds one image")],Ot.prototype,"$isAParagraphOfADesignHoldingOneImage");const Gn=class Gn extends v{$saidOfAnEntryLeadingToADesign(e){l(e.is(ie)&&e.annotations.expressed(ie)?.referencedChapter?.is(B)===!0,"a plate is said of an entry that leads to a design, and this is not one")}};r(Gn,"PlateSpecification");let jt=Gn;fe([h("a plate is said of an entry that leads to a design")],jt.prototype,"$saidOfAnEntryLeadingToADesign");const qn=class qn extends v{$isADesign(e){l(e instanceof y&&e.is(B),"a room is a chapter that is a design, and this is not one")}};r(qn,"RoomSpecification");let Dt=qn;fe([h("a room is a chapter that is a design")],Dt.prototype,"$isADesign");const Nf=o(B),If=o(Ge),Lc=o(Ka),Rc=o(Xa),Fc=o(Ja);var Ec=Object.defineProperty,_c=Object.getOwnPropertyDescriptor,G=r((p,e,t,s)=>{for(var a=_c(e,t),i=p.length-1,d;i>=0;i--)(d=p[i])&&(a=d(e,t,a)||a);return a&&Ec(e,t,a),a},"__decorateClass$j");const be=r((p,e,t)=>{const s=p?.annotations.expressed(Y)?.painted;return s===void 0?e:n(s,{children:e},t)},"painted"),Sn=class Sn extends T{constructor(){super(...arguments),this.specification=new ze}get name(){return this.chapter?.title?.name??""}get author(){return this.chapter?.annotations.expressed(mo)?.name??""}get illustration(){return this.chapter?.text.find(u).find(e=>e.is(qe))}get drawing(){const e=this.illustration?.text.find(ma)[0];return e===void 0?"":z.copy(e.text).trim()}get scheme(){return this.chapter?.annotations.expressed(Y)}get window(){return this.chapter?.annotations.expressed(we)}};r(Sn,"$BookshelfCover");let ye=Sn;const Un=class Un extends ${constructor(){super(...arguments),this.specification=new Nt}defines(e){e.classes.add(this,"pa-illustration")}erase(e){e.classes.revert(this)}};r(Un,"$Illustration");let qe=Un;const Yn=class Yn extends q{constructor(){super(...arguments),this.specification=new Se,this.$ground="",this.$band="",this.$bandInk="",this.$foot="",this.$footInk="",this.$ink="",this.style=O.div.attrs({className:"pd-scheme"})`
        ${e=>e.$scheme}
    `}get colours(){return[this.$ground,this.$band,this.$bandInk,this.$foot,this.$footInk,this.$ink]}get declarations(){return`--ground: ${this.$ground}; --band: ${this.$band}; --band-ink: ${this.$bandInk}; --foot: ${this.$foot}; --foot-ink: ${this.$footInk}; --ink: ${this.$ink};`}get painted(){return this._painted}$Scheme(...e){this.$Format(...e);const t=this.style;this._painted=s=>n(t,{$scheme:this.declarations,...s})}defines(e){e.classes.add(this,"pa-scheme"),e.containers.add(this,this._painted)}erase(e){e.classes.revert(this),e.containers.revert(this)}};r(Yn,"$Scheme");let Y=Yn;const Zn=class Zn extends ${constructor(){super(...arguments),this.specification=new Ue,this.$x="",this.$y=""}get declarations(){return`--window-x: ${this.$x}px; --window-y: ${this.$y}px;`}};r(Zn,"$Window");let we=Zn;const Kn=class Kn extends ${constructor(){super(...arguments),this.specification=new Ye}get cover(){return this._cover}get jacket(){return this._cover?.annotations.expressed(T)}$Volume(...e){this._cover=e.find(t=>t instanceof y),this.$Annotation(...e.filter(t=>t!==this._cover))}defines(e){e.classes.add(this,"pa-volume")}erase(e){e.classes.revert(this)}};r(Kn,"$Volume");let N=Kn;const Xn=class Xn extends u{get cover(){return this.$cover?.annotations.expressed(T)}$Jacket(...e){this.$Writing(...e),this._painted=t=>{const s=this.cover?.scheme?.painted;return s===void 0?n("div",{...t}):n(s,{...t})},this.containers.add(this,this._painted)}write(){const e=this.cover;if(e===void 0)return;const t=o(j),s=o(Me);return c(k,{children:[n(t,{children:e.name}),n("span",{className:"pd-drawing",dangerouslySetInnerHTML:{__html:e.drawing}}),c(t,{children:[n(s,{}),e.author]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-jacket")}};r(Xn,"$Jacket");let Va=Xn;const Jn=class Jn extends u{constructor(){super(...arguments),this.unfolded=!1}get filedElsewhere(){return this.$subject!==void 0&&this.$subject!==this.$cover}container(e){return super.container({onMouseOver:r(t=>{t.target instanceof Element&&t.target.closest(".pd-filed")!==null&&this.unfold()},"onMouseOver"),onMouseLeave:r(()=>this.fold(),"onMouseLeave"),...e})}unfold(){this.unfolded=!0}fold(){this.unfolded=!1}write(){const e=this.$cover,t=this.$subject;if(e!==void 0)return c(k,{children:[this.filedElsewhere?be(t,n("span",{className:"pd-filed",children:this.mark(t)})):void 0,be(e,n("span",{className:"pd-own",children:this.mark(e)})),c("span",{className:"pd-names",children:[be(e,n("span",{className:"pd-name",children:this.name(e)})),this.filedElsewhere?be(t,n("span",{className:"pd-name pd-under",children:this.name(t)})):void 0]})]})}mark(e){const t=o(Zc),s=o(w);return n(t,{cover:e,children:n(s,{children:e.mention.identifier})})}name(e){const t=o(j),s=o(w);return c(t,{children:[n(s,{children:e.mention.identifier}),e.title.name]})}$Define(){super.$Define(),this.classes.add(this,"pd-logo");const e=o(Kc);this.annotations.add(this,n(e,{}))}};r(Jn,"$Logo");let Ct=Jn;const Vn=class Vn extends ${constructor(){super(...arguments),this.specification=new Pt}defines(e){e.unfolded&&e.classes.add(this,"pa-unfolded")}erase(e){e.classes.revert(this)}};r(Vn,"$Unfolded");let Qa=Vn;const Qn=class Qn extends v{$saidOfALogo(e){l(e instanceof Ct,"unfolded is said of a logo, and this is not one")}};r(Qn,"UnfoldedSpecification");let Pt=Qn;G([h("unfolded is said of a logo")],Pt.prototype,"$saidOfALogo");const op=r(p=>{const e=p?.annotations.expressed(T);return{drawing:e?.drawing??"",declarations:`${e?.scheme?.declarations??""} ${e?.window?.declarations??""}`}},"markingOf"),er=class er extends D{constructor(){super(...arguments),this.style=O.span`
        ${e=>e.$vars}
    `}get cover(){return this.$cover?.annotations.expressed(T)}get marking(){return op(this.$cover)}$Mark(...e){this.$Writing(...e);const t=this.style;this._painted=s=>n(t,{$vars:this.marking.declarations,...s}),this.containers.add(this,this._painted)}write(){return n("span",{className:"pd-drawing",dangerouslySetInnerHTML:{__html:this.marking.drawing}})}$Define(){super.$Define(),this.classes.add(this,"pd-mark")}};r(er,"$Mark");let At=er;const tr=class tr extends Dp{$carriesItsScheme(e){l(e.is(Y),"a bookshelf cover carries its scheme, and this one carries none")}$carriesItsWindow(e){l(e.is(we),"a bookshelf cover carries its window, and this one carries none")}$carriesItsIllustration(e){l(e instanceof y&&e.text.find(u).some(t=>t.is(qe)),"a bookshelf cover carries its illustration, and this one carries none")}};r(tr,"BookshelfCoverSpecification");let ze=tr;G([h("a bookshelf cover carries its scheme")],ze.prototype,"$carriesItsScheme");G([h("a bookshelf cover carries its window")],ze.prototype,"$carriesItsWindow");G([h("a bookshelf cover carries its illustration")],ze.prototype,"$carriesItsIllustration");const ar=class ar extends v{$saidOfADrawing(e){l(e instanceof u&&e.chapter?.is(T)===!0&&e.text.find(ma).length===1,"an illustration is a paragraph of a cover that holds one drawing, and this is not one")}};r(ar,"IllustrationSpecification");let Nt=ar;G([h("an illustration is a paragraph of a cover that holds one drawing")],Nt.prototype,"$saidOfADrawing");const sr=class sr extends v{$isACover(e){l(e instanceof y&&e.is(T),"a cover has a scheme, and this is not a cover")}$givenItsColours(e){const t=e.annotations.expressed(Y)?.colours??[];l(t.every(s=>/^#[0-9a-f]{6}$/iu.test(s)),"a scheme is given its six colours as six hex digits each — the ground, the band and its ink, the foot and its ink, and the ink of the drawing — and this one was given something else")}};r(sr,"SchemeSpecification");let Se=sr;G([h("a cover has a scheme")],Se.prototype,"$isACover");G([h("a scheme is given its six colours")],Se.prototype,"$givenItsColours");const or=class or extends v{$isACover(e){l(e instanceof y&&e.is(T),"a cover has a window, and this is not a cover")}$givenItsPlace(e){const t=e.annotations.expressed(we);l(/^-?\d+$/u.test(t?.$x??"")&&/^-?\d+$/u.test(t?.$y??""),"a window is given where it stands on the drawing, two whole numbers, and this one was given something else")}};r(or,"WindowSpecification");let Ue=or;G([h("a cover has a window")],Ue.prototype,"$isACover");G([h("a window is given where it stands on the drawing")],Ue.prototype,"$givenItsPlace");const nr=class nr extends v{$saidOfAChapterStandingForABook(e){l(e instanceof y&&(e.is(U)||e.is(T)||e.is(B)),"a volume is a chapter that stands for another book, a synopsis of it, a cover filed under it or a design of it, and this is none")}$holdsTheCover(e){const t=[e.annotations.expressed(U)?.means?.identifier,e.annotations.expressed(Wd)?.means?.identifier,e.annotations.expressed(mo)?.means?.identifier,e.annotations.expressed(B)?.identifier,...[...e.annotations].map(s=>s.means?.identifier)];l(e.annotations.find(N).every(s=>s.cover?.is(T)===!0&&t.includes(s.cover.mention?.identifier)),"a volume holds the cover of a book its chapter stands for or names, the book a synopsis or a design is of, the subject or author a cover is filed under or a book another line of the cover names, and one here holds something else")}};r(nr,"VolumeSpecification");let Ye=nr;G([h("a volume is a chapter that stands for another book")],Ye.prototype,"$saidOfAChapterStandingForABook");G([h("a volume holds the cover of a book its chapter stands for or names")],Ye.prototype,"$holdsTheCover");const Gc=o(ye),np=o(qe),rp=o(Y),ip=o(we),qc=o(N),Sc=o(Va),Uc=o(Ct),Yc=o(Qa),dp=o(At),Zc=dp,Kc=Yc;var Xc=Object.defineProperty,Jc=Object.getOwnPropertyDescriptor,Vc=r((p,e,t,s)=>{for(var a=Jc(e,t),i=p.length-1,d;i>=0;i--)(d=p[i])&&(a=d(e,t,a)||a);return a&&Xc(e,t,a),a},"__decorateClass$i");const ua=class ua extends Cp{constructor(){super(...arguments),this.specification=new It,this.themeProvider=!0,this.style=O.div`
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
    `}get rules(){return this.parts().flat(1/0).filter(e=>typeof e=="string").join("")}get pages(){return this.book.pages}get open(){const e=this.book;return e.open??e.synopsis}$Bound(){const e=this.style,t=this.book;this.style=s=>n(e,{$at:t.means?.identifier,$scheme:t.cover?.annotations.expressed(Y)?.declarations,...s}),super.$Bound()}defines(e){for(const s of e.annotations.after(this))s instanceof ua&&e.annotations.express(s,!1);super.defines(e),e.classes.add(this,"pa-layout");const t=this.book.open;t!==void 0&&e.classes.add(this,"pa-turned"),t?.is(W)&&e.classes.add(this,"pa-manual")}erase(e){super.erase(e),e.classes.revert(this)}parts(){return[this.paging(),this.regions(),this.areas(),this.phone()]}paging(){return g`
            .pa-page:not(.pa-open) { display: none; }
        `}regions(){return g`
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
        `}areas(){return g`
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
        `}phone(){return g`
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
        `}};r(ua,"$Layout");let Oe=ua;const rr=class rr extends L{$placesTheSideAndNeverDressesIt(e){for(const t of e.annotations.find(Oe)){const s=(t.rules.match(/[^{};]*\.pd-holds\s+[^\s{},][^{};]*\{/gu)??[]).map(a=>a.trim());l(s.length===0,`a layout places the side and never dresses it, what stands in the side being the index's and the folder's, and this one says "${s[0]}"`)}}};r(rr,"LayoutSpecification");let It=rr;Vc([h("a layout places the side and never dresses it")],It.prototype,"$placesTheSideAndNeverDressesIt");const ya=o(Oe),ba=class ba extends ${constructor(){super(...arguments),this.specification=new L}defines(e){for(const t of e.annotations.after(this))t instanceof ba&&e.annotations.express(t,!1);e.classes.add(this,"pa-tone")}erase(e){e.classes.revert(this)}};r(ba,"$Tone");let je=ba;const ir=class ir extends je{defines(e){super.defines(e),e.classes.add(this,"pa-dark")}};r(ir,"$Dark");let es=ir;const dr=class dr extends je{defines(e){super.defines(e),e.classes.add(this,"pa-light")}};r(dr,"$Light");let ts=dr;const pr=class pr extends je{defines(e){super.defines(e),e.classes.add(this,"pa-white-over-black")}};r(pr,"$WhiteOverBlack");let as=pr;const ae=o(je),pp=o(es),ge=o(ts),Qc=o(as);var el=Object.defineProperty,tl=Object.getOwnPropertyDescriptor,al=r((p,e,t,s)=>{for(var a=tl(e,t),i=p.length-1,d;i>=0;i--)(d=p[i])&&(a=d(e,t,a)||a);return a&&el(e,t,a),a},"__decorateClass$h");const cr=class cr extends D{write(){const e=this.book.body;return`${e.indexOf(this.chapter)+1} of ${e.length}`}$Define(){super.$Define(),this.classes.add(this,"pd-count")}};r(cr,"$Count");let ss=cr;const lr=class lr extends ${constructor(){super(...arguments),this.specification=new Ze}defines(e){e.classes.add(this,"pa-before")}erase(e){e.classes.revert(this)}};r(lr,"$Before");let os=lr;const hr=class hr extends ${constructor(){super(...arguments),this.specification=new Ze}defines(e){e.classes.add(this,"pa-after")}erase(e){e.classes.revert(this)}};r(hr,"$After");let ns=hr;const fr=class fr extends v{$saidOfAWordOfATurn(e){l(e instanceof D&&e.parent instanceof Mt,"this is said of a word of a turn, and here it is said of something else")}};r(fr,"OfATurnSpecification");let Ze=fr;al([h("this is said of a word of a turn")],Ze.prototype,"$saidOfAWordOfATurn");const sl=o(ss),ol=o(os),nl=o(ns),gr=class gr extends u{get before(){const e=this.book.body;return e[e.indexOf(this.chapter)-1]??this.chapter}get after(){const e=this.book.body;return e[e.indexOf(this.chapter)+1]??this.chapter}write(){const e=o(j),t=o(sl),s=o(ol),a=o(nl),i=o(this.before===this.chapter?za:w),d=o(this.after===this.chapter?za:w);return c(k,{children:[c(e,{children:[n(s,{}),n(i,{children:this.before.mention.identifier}),"← ",this.before.title.name]}),n(t,{}),c(e,{children:[n(a,{}),n(d,{children:this.after.mention.identifier}),this.after.title.name," →"]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-turn")}};r(gr,"$Turn");let Mt=gr;const rl=o(Mt);var il=Object.defineProperty,dl=Object.getOwnPropertyDescriptor,Be=r((p,e,t,s)=>{for(var a=s>1?void 0:s?dl(e,t):e,i=p.length-1,d;i>=0;i--)(d=p[i])&&(a=(s?d(e,t,a):d(a))||a);return s&&a&&il(e,t,a),a},"__decorateClass$g");const ur=class ur extends Pp{constructor(){super(...arguments),this.specification=new F}get chapters(){return this.text.find(y).filter(e=>[...e.classes].includes("pd-canonical"))}get laidOutChapters(){return[this.cover,this.synopsis,this.table,...this.chapters]}get pages(){return[this.synopsis,...this.chapters].filter(e=>e!==void 0)}get body(){const e=this.appendix;return this.chapters.filter(t=>!e.includes(t))}get entries(){return this.body}get appendix(){const e=this.table;if(e===void 0)return[];const t=e.text.find(A).filter(s=>s.is(xe)).flatMap(s=>s.text.find(u).map(a=>M(a)?.identifier));return this.chapters.filter(s=>t.includes(s.mention?.identifier??""))}get open(){return this.$bookmark===void 0?void 0:this.chapterAt(this.$bookmark)}get tones(){return[pp,ge,Qc]}get topics(){return this.cover?.annotations.find(Bd)??[]}get subjectCover(){return this.coverOf(this.subject?.means?.identifier)}get searchHint(){return"a word"}wordsOf(e){const t=(this._words??=new Map).get(e);if(t!==void 0)return t;const s=e instanceof y?e.title?.name??"":"",a=e.text.find(u).filter(d=>![...d.classes].includes("pa-caption")).map(d=>z.copy(d.text).replace(/\s+/gu," ").trim()).join(" "),i={title:s,text:a,lower:`${s} ${a}`.toLowerCase()};return this._words.set(e,i),i}found(e){const t=e.trim().toLowerCase();if(t==="")return[];const s=this.table?.annotations.expressed(I);return s===void 0?[]:s.entries.map(a=>s.chapterOf(a)).filter(a=>a!==void 0&&this.wordsOf(a).lower.includes(t))}countOfFound(e,t){return c(k,{children:[n("b",{children:e.length})," ",e.length===1?"entry says":"entries say"," “",t,"”"]})}placeOf(e){return e instanceof y?e.mention?.identifier:void 0}sought(e){}write(){return c(k,{children:[n("div",{className:"pd-library",children:this.library()}),n("div",{className:"pd-me",children:this.me()}),n("div",{className:"pd-holds",children:this.holds()}),n("div",{className:"pd-head",children:this.head()}),c("div",{className:"pd-pages",children:[this.aboveThePages(),this.pages.map((e,t)=>{const s=o(e);return n(s,{},t)}),this.belowThePages()]})]})}library(){if(this._logo===void 0)return;const e=o(this._logo);return n(e,{})}me(){const e=o(dp),t=o(w),s=o(qp),a=this.coverOf(this.author?.means?.identifier);return c(k,{children:[this.byline(),a===void 0?void 0:this.painted(a,n(e,{cover:a,children:n(t,{children:a.mention.identifier})})),this.topics.length===0?void 0:n(s,{cover:this.cover})]})}painted(e,t,s){return be(e,t,s)}holds(){const e=o(this.table);return n(e,{})}head(){const e=o(this.cover);return c(k,{children:[n(e,{}),n("div",{className:"pd-switches",children:this.switches()})]})}aboveThePages(){}belowThePages(){}chapterAt(e){return(this._chapterByPlace??this.chapterByPlace()).get(e)}chapterByPlace(){const e=new Map;for(const t of this.chapters)for(const s of this.sections(t))s.mention!==void 0&&!e.has(s.mention.identifier)&&e.set(s.mention.identifier,t);for(const t of this.chapters)t.mention!==void 0&&e.set(t.mention.identifier,t);for(const t of this.entries)t.mention!==void 0&&!e.has(t.mention.identifier)&&e.set(t.mention.identifier,t);return e}placeWithin(e){return e.startsWith("#")?`${this.means?.identifier??""}${e}`:e}coverOf(e){if(e!==void 0)return this.means?.identifier===e?this.cover:this.cover?.annotations.find(N).map(t=>t.cover).find(t=>t?.mention?.identifier===e)}byline(){const e=o(Yd);return n(e,{chapter:this.cover})}root(){const e=o(Nc);return n(e,{cover:this.cover})}switches(){}sections(e){return e.text.find(A).flatMap(t=>[t,...this.sections(t)])}sectionOf(e){const t=this.table;return t===void 0?void 0:this.sections(t).find(s=>s.canonical?.name===e.name)}turn(){this.bookmark!==this.cover&&super.turn()}$Define(){super.$Define();const e=o(ya),t=o(ae);this.annotations.add(this,n(e,{}),n(t,{}))}$Bound(){this._chapterByPlace=this.chapterByPlace();const e=o(va),t=this.table?.annotations.expressed(K);for(const i of t?.parts??[]){const d=this.sectionOf(i);d===void 0||d.is(yt)||!i.chapters.some(f=>f.is(W))||d.annotations.add(this,n(e,{}))}const s=this.root();s!==void 0&&this.table?.text.add(this,s);const a=o(Uc);this._logo=Ap.chemical(n(a,{cover:this.cover,subject:this.subjectCover}),this),this.turns(),super.$Bound()}turns(){const e=o(rl);for(const t of this.body)t.text.add(this,n(e,{}))}};r(ur,"$LibraryBook");let R=ur;Be([te()],R.prototype,"_chapterByPlace",2);Be([te()],R.prototype,"_words",2);const br=class br extends Np{$holdsOnlyChapters(e){l([...e.text].every(t=>t instanceof y),"a book of this library holds only chapters, and this one holds something else")}$placesEveryChapter(e){l(e.text.find(y).every(t=>e.laidOutChapters.includes(t)),"a book of this library has a place for every chapter it holds, and this one holds a chapter it places nowhere")}$onlyAChapterAppends(e){l(e.text.find(y).every(t=>e.chapters.includes(t)||!t.is(Q)),"only an ordinary chapter files a file, and here a cover, a synopsis or a table of contents files one")}$listsEachManualPart(e){const s=(e.table?.annotations.expressed(K)?.parts??[]).find(a=>a.chapters.some(i=>i.is(W))&&e.sectionOf(a)===void 0);l(s===void 0,`a part read as a manual is listed under a section headed with its name, and "${s?.name}" has none`)}};r(br,"LibraryBookSpecification");let F=br;Be([h("a book of this library holds only chapters")],F.prototype,"$holdsOnlyChapters",1);Be([h("a book of this library has a place for every chapter it holds")],F.prototype,"$placesEveryChapter",1);Be([h("only an ordinary chapter files a file")],F.prototype,"$onlyAChapterAppends",1);Be([h("a part read as a manual is listed under a section headed with its name")],F.prototype,"$listsEachManualPart",1);const cp=o(R);o(cp,he)(Rp);o(cp,ae)(pp);var pl=Object.defineProperty,cl=Object.getOwnPropertyDescriptor,ll=r((p,e,t,s)=>{for(var a=cl(e,t),i=p.length-1,d;i>=0;i--)(d=p[i])&&(a=d(e,t,a)||a);return a&&pl(e,t,a),a},"__decorateClass$f");const mr=class mr extends R{constructor(){super(...arguments),this.specification=new Ke}get open(){return super.open??this.body[0]}head(){}switches(){}root(){}$Define(){super.$Define(),this.$is=[zo,Jd]}$Bound(){const e=o(va);for(const t of this.table?.text.find(A)??[])t.annotations.add(this,n(e,{})),t.is(xe)&&(t.$is=[Co]);super.$Bound()}};r(mr,"$Manual");let Tt=mr;const $r=class $r extends F{$everyChapterHasABrief(e){l(e.chapters.every(t=>t.text.find(u).some(s=>s.is(Re))),"every chapter of a manual opens with a brief, and one here has none")}};r($r,"ManualSpecification");let Ke=$r;ll([h("every chapter of a manual opens with a brief")],Ke.prototype,"$everyChapterHasABrief");const Po=o(Tt);o(Po,ae)(ge);const kr=class kr extends ie{constructor(){super(...arguments),this.label=O.span.attrs({className:"pa-number"})``}get number(){return this.book.body.indexOf(this.referencedChapter)+1}get keyed(){return this.referencedChapter?.annotations.expressed(V)}note(){const e=this.label,t=o(Kd),s=this.keyed;return c(k,{children:[super.note(),s===void 0?void 0:n(t,{keyed:s}),this.number===0?void 0:n(e,{children:String(this.number)})]})}};r(kr,"$NumberedEntry");let rs=kr;const hl=o(rs);o(Po,ep)(hl);const vr=class vr extends ye{constructor(){super(...arguments),this.style=O.header`
        .pd-chapter.pa-cover { margin-block: 0; }
        .pa-cover .pd-title {
            font-size: calc(1.04 * ${({theme:e})=>e.size});
            font-weight: 600;
        }
    `}};r(vr,"$ManualCover");let is=vr;const xr=class xr extends K{constructor(){super(...arguments),this.style=O.nav`
        .pa-table-of-contents .pa-reference { color: inherit; text-decoration: none; }
    `}};r(xr,"$ManualTableOfContents");let ds=xr;const Mf=o(is),Tf=o(ds),yr=class yr extends ne{constructor(){super(...arguments),this.measure="104ch",this.holdsColumn="272px",this.barHeight="52px",this.space="24px",this.size="14px",this.beat="0.22s",this.serif="'Source Serif 4', Georgia, serif",this.paper="#fdfcfa",this.ink="#343c4a",this.heading="#1a1f36",this.soft="#727d8c",this.faint="#9ea8b5",this.line="#e4e9f2",this.tint="#f0f4fc",this.barTint="#f8fafe",this.side="#f7f8fb",this.sideInk="#3a4452",this.sideDim="#6b7684",this.sideLine="#e0e4eb",this.sky="#e3edfb",this.skyInk="#4a6ea0",this.accent="#4a6ea0",this.colour="#4fb3a8",this.radius="6px",this.wash="linear-gradient(135deg, #f1f5fd 0%, #fdfcfa 48%, #fdf5ee 100%)"}parts(){return[...super.parts(),this.tree(),this.icons(),this.small()]}library(){return g`
            ${super.library()}
            .pd-book.pa-tone .pd-library {
                background: linear-gradient(180deg, #fbfcfe 0%, #f8fafe 60%, #f1f4fa 100%);
                border-block-end: thin solid #dfe4ed;
                box-shadow: 0 1px 0 rgba(43, 54, 60, 0.05);
            }
        `}holds(){return g`
            ${super.holds()}
            .pd-holds .pd-paragraph.pa-entry::before { content: none; }
        `}page(){return g`
            ${super.page()}
            .pd-book { line-height: 1.6; }
            .pd-book.pa-layout { background: ${({theme:e})=>e.wash}; }
            .pd-book .pd-head { display: none; padding: 0; }
        `}tree(){return g`
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
        `}icons(){return g`
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
        `}small(){return g`
            @media (max-width: ${({theme:e})=>e.narrow}) {
                .pd-holds, .pd-library { border-inline-end: none; border-block-end: thin solid ${({theme:e})=>e.line}; }
                .pd-holds .pd-chapter { min-height: 0; }
            }
        `}};r(yr,"$ManualTheme");let ps=yr;const lp=o(ps);o(Po,he)(lp);var fl=Object.defineProperty,gl=Object.getOwnPropertyDescriptor,ul=r((p,e,t,s)=>{for(var a=gl(e,t),i=p.length-1,d;i>=0;i--)(d=p[i])&&(a=d(e,t,a)||a);return a&&fl(e,t,a),a},"__decorateClass$e");const wr=class wr extends ${constructor(){super(...arguments),this.specification=new Wt}defines(e){e.classes.add(this,"pa-first")}erase(e){e.classes.revert(this)}};r(wr,"$First");let cs=wr;const zr=class zr extends v{$saidOfAParagraph(e){l(e instanceof u,"first is said of a paragraph, and this is not one")}};r(zr,"FirstSpecification");let Wt=zr;ul([h("first is said of a paragraph")],Wt.prototype,"$saidOfAParagraph");const Wf=o(cs),Or=class Or extends ne{constructor(){super(...arguments),this.serif="'Source Serif 4', Georgia, serif",this.paper="#fdfcfa",this.ink="#343c4a",this.soft="#727d8c",this.faint="#9ea8b5",this.line="#e4e9f2",this.tint="#f0f4fc",this.barTint="#f8fafe",this.sky="#e3edfb",this.skyInk="#4a6ea0",this.accent="#4a6ea0",this.wash="linear-gradient(135deg, #f2f6fd 0%, #fdfcfa 48%, #fdf6f1 100%)",this.side="#f7f8fb",this.sideInk="#3a4452",this.sideDim="#7f8a9b",this.sideLine="#e3e7ee",this.barHeight="52px",this.holdsColumn="232px",this.space="24px",this.cover="132px",this.volume="184px",this.radius="6px",this.spine="inset 3px 0 0 rgba(0, 0, 0, 0.08), inset 4px 0 0 rgba(255, 255, 255, 0.35), 0 6px 12px -10px rgba(44, 52, 64, 0.3)",this.lift="inset 3px 0 0 rgba(0, 0, 0, 0.08), inset 4px 0 0 rgba(255, 255, 255, 0.35), 0 10px 16px -12px rgba(44, 52, 64, 0.35)",this.openSpine="inset 7px 0 0 rgba(0, 0, 0, 0.07), inset 9px 0 0 rgba(255, 255, 255, 0.45), 0 12px 22px -16px rgba(44, 52, 64, 0.35)"}parts(){return[...super.parts(),this.shelf(),this.jackets(),this.desk(),this.unfolded(),this.small()]}page(){return g`
            font-family: ${({theme:e})=>e.font};
            font-size: ${({theme:e})=>e.size};
            line-height: 1.55;
            color: ${({theme:e})=>e.ink};
            background: ${({theme:e})=>e.wash};
            min-height: 100vh;
        `}library(){return g`
            ${super.library()}
            .pd-names .pd-name { font-family: ${({theme:e})=>e.serif}; font-size: calc(1.286 * ${({theme:e})=>e.size}); font-weight: 700; letter-spacing: -0.015em; }
        `}head(){return g`
            .pd-head { padding: 0; }
            .pd-head .pa-illustration { display: none; }
        `}holds(){return g`
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
        `}shelf(){return g`
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
        `}jackets(){return g`
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
        `}desk(){return g`
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
        `}unfolded(){return g`
            .pa-unfolded-desk .pd-shelf { display: none; }
            .pa-unfolded-desk .pd-container.pd-catalogue-desk.pa-open { height: auto; margin-block-end: 0; }
            .pa-unfolded-desk .pd-container.pd-catalogue-desk.pa-open .pd-paragraph.pd-jacket { position: sticky; top: calc(${({theme:e})=>e.space} * 0.833); }
            .pa-unfolded-desk .pd-container.pd-catalogue-desk.pa-open .pd-words { max-height: none; max-width: 72ch; overflow: visible; mask-image: none; }
            .pa-unfolded-desk .pd-container.pd-catalogue-desk.pa-open .pd-words .pd-paragraph { font-size: calc(1.143 * ${({theme:e})=>e.size}); line-height: 1.6; }
            .pa-unfolded-desk .pd-container.pd-catalogue-desk.pa-open .pd-word.pd-switch { top: calc(${({theme:e})=>e.space} * 0.667); right: ${({theme:e})=>e.space}; bottom: auto; }
            .pa-unfolded-desk .pd-container.pd-catalogue-desk.pa-open .pd-word.pd-switch::after { transform: translateY(calc(${({theme:e})=>e.space} / 24)) rotate(180deg); }
        `}context(){return g`
            ${super.context()}
            .pd-book.pa-manual .pd-holds .pd-tree-folder { margin-block-start: 0; }
            .pd-book.pa-manual .pd-holds .pd-section.pa-appendix { margin-block-start: 0; padding-block-start: 0; border-block-start: 0; opacity: 1; }
            .pd-book.pa-manual .pd-holds .pd-section.pa-appendix .pd-heading { font-size: calc(0.75 * ${({theme:e})=>e.size}); }
            .pd-book.pa-manual .pd-holds .pd-section.pa-appendix .pa-entry { font-size: calc(0.964 * ${({theme:e})=>e.size}); font-weight: 500; }
            .pd-book.pa-manual .pd-holds .pd-section.pa-appendix .pa-entry::before { background: ${({theme:e})=>e.skyInk}; }
            .pd-book.pa-manual .pd-shelf { display: none; }
        `}small(){return g`
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
        `}};r(Or,"$Bookshelf");let ls=Or;const bl=o(ls);var ml=Object.defineProperty,$l=Object.getOwnPropertyDescriptor,wa=r((p,e,t,s)=>{for(var a=s>1?void 0:s?$l(e,t):e,i=p.length-1,d;i>=0;i--)(d=p[i])&&(a=(s?d(e,t,a):d(a))||a);return s&&a&&ml(e,t,a),a},"__decorateClass$d");const jr=class jr extends R{get books(){return this.text.find(y).filter(e=>e.is(U)&&e!==this.synopsis)}get laidOutChapters(){return[...super.laidOutChapters,...this.books]}get pages(){return[this.synopsis,...this.books,...this.chapters]}head(){return n("div",{className:"pd-switches",children:this.switches()})}belowThePages(){return n("div",{className:"pd-shelf",children:this.volumes()})}volumes(){const e=o(j),t=o(w);return(this.table?.annotations.expressed(I)?.entries??[]).map((a,i)=>{const d=M(a).identifier,f=this.chapterAt(d),b=f===void 0?this.coverOf(d):this.jacketOf(f);if(b!==void 0)return c("div",{className:"pd-volume",children:[this.jacket(b,d),n("div",{className:"pd-paragraph pd-name",children:c(e,{children:[n(t,{children:d}),b.title.name]})})]},i)})}jacket(e,t){if(e===void 0)return;const s=o(Sc),a=o(w);return t===void 0?n(s,{cover:e}):n(s,{cover:e,children:n(a,{children:t})})}line(e){if(e===void 0)return;const t=o(Yd),s=o(Gp);return c(k,{children:[n(t,{cover:e}),n(s,{cover:e})]})}wayIntoTheBook(e){if(e===void 0)return;const t=o(j),s=o(w),a=e.mention.identifier;return n("div",{className:"pd-paragraph pd-read",children:c(t,{children:[n(s,{children:a}),`Read ${e.title.name}`]})})}jacketOf(e){return e===this.synopsis?this.cover:e.annotations.expressed(N)?.cover??(this.appendix.includes(e)?void 0:this.cover)}coverOf(e){return super.coverOf(e)??this.books.map(t=>t.annotations.expressed(N)?.cover).find(t=>t!==void 0&&t.mention?.identifier===e)}chapterAt(e){return super.chapterAt(e)??this.books.find(t=>this.placeOf(t)===e)}placeOf(e){const t=e.title?.annotations.expressed(dt)?.identifier,s=this.means?.identifier;if(!(t===void 0||s===void 0))return`${s.replace(/\/+$/u,"")}/#${t}`}$Bound(){const e=o(yl);for(const t of[this.synopsis,...this.books])t?.annotations.add(this,n(e,{}));super.$Bound()}};r(jr,"$Catalogue");let hs=jr;const Dr=class Dr extends q{constructor(){super(...arguments),this.specification=new Bt,this.card=O.div`
        &:not(.pa-open) { display: none; }
    `}get chapter(){return this.parent}get catalogue(){return this.book}get isTheFront(){return this.chapter===this.catalogue.synopsis}get cover(){return this.catalogue.jacketOf(this.chapter)}$CatalogueDesk(...e){this.$Format(...e);const t=o($a),s=this.card;this.style=({className:a,children:i})=>{const d=this.catalogue,f=this.cover,b=[...this.chapter.classes].includes("pa-open"),m=this.isTheFront?o(d.title):void 0;return d.painted(f,c(s,{className:`${a??""} pd-catalogue-desk${b?" pa-open":""}`.trim(),children:[d.jacket(f),c("div",{className:"pd-words",children:[m===void 0?void 0:n(m,{}),i]}),f===void 0||this.isTheFront?void 0:n("div",{className:"pd-line",children:d.line(f)}),d.wayIntoTheBook(f),f===void 0?void 0:n(t,{chapter:this.chapter,annotation:xl,children:"read on"})]}))}}defines(e){super.defines(e),e.classes.add(this,"pa-catalogue-desk")}erase(e){super.erase(e),e.classes.revert(this)}};r(Dr,"$CatalogueDesk");let fs=Dr;const Cr=class Cr extends v{$holdsASynopsis(e){l(e instanceof y&&e.is(U),"a catalogue desk holds a synopsis, and this is not one")}};r(Cr,"CatalogueDeskSpecification");let Bt=Cr;wa([h("a catalogue desk holds a synopsis")],Bt.prototype,"$holdsASynopsis",1);const Pr=class Pr extends Hd{get identifier(){return this._book??super.identifier}$Bound(){super.$Bound(),this._book=this.chapter?.annotations.expressed(U)?.means?.identifier}};r(Pr,"$BookLink");let Ht=Pr;wa([te()],Ht.prototype,"_book",2);const Ar=class Ar extends ${constructor(){super(...arguments),this.specification=new Lt}defines(e){e.classes.add(this,"pa-caption")}erase(e){e.classes.revert(this)}};r(Ar,"$Caption");let gs=Ar;const Nr=class Nr extends ${constructor(){super(...arguments),this.specification=new Rt}defines(e){e.classes.add(this,"pa-arrow")}erase(e){e.classes.revert(this)}};r(Nr,"$Arrow");let us=Nr;const Ir=class Ir extends ${constructor(){super(...arguments),this.specification=new L}defines(e){e.classes.add(this,"pa-unfolded-desk")}erase(e){e.classes.revert(this)}};r(Ir,"$UnfoldedDesk");let bs=Ir;const Mr=class Mr extends v{$isAParagraph(e){l(e instanceof u,"a caption is a paragraph, and this is not one")}};r(Mr,"CaptionSpecification");let Lt=Mr;wa([h("a caption is a paragraph")],Lt.prototype,"$isAParagraph",1);const Tr=class Tr extends v{$isAWordOfTheTable(e){l(e instanceof D&&e.chapter?.is(K)===!0,"an arrow is a word of the table of contents, and this is not one")}};r(Tr,"ArrowSpecification");let Rt=Tr;wa([h("an arrow is a word of the table of contents")],Rt.prototype,"$isAWordOfTheTable",1);const Ao=o(hs),kl=o(fs),vl=o(Ht),Bf=o(gs),Hf=o(us),xl=o(bs),yl=kl;o(Ao,za)(vl);o(Ao,he)(bl);o(Ao,ae)(ge);var wl=Object.defineProperty,zl=Object.getOwnPropertyDescriptor,pt=r((p,e,t,s)=>{for(var a=zl(e,t),i=p.length-1,d;i>=0;i--)(d=p[i])&&(a=d(e,t,a)||a);return a&&wl(e,t,a),a},"__decorateClass$c");const Wr=class Wr extends ${constructor(){super(...arguments),this.specification=new Et}defines(e){e.classes.add(this,"pa-question")}erase(e){e.classes.revert(this)}};r(Wr,"$Question");let ms=Wr;const Br=class Br extends ${constructor(){super(...arguments),this.specification=new _t}defines(e){e.classes.add(this,"pa-answer")}erase(e){e.classes.revert(this)}};r(Br,"$Answer");let $s=Br;const Hr=class Hr extends ${constructor(){super(...arguments),this.specification=new Gt}defines(e){e.classes.add(this,"pa-decision")}erase(e){e.classes.revert(this)}};r(Hr,"$Decision");let Ft=Hr;const Lr=class Lr extends ${constructor(){super(...arguments),this.specification=new qt}defines(e){e.classes.add(this,"pa-pain")}erase(e){e.classes.revert(this)}};r(Lr,"$Pain");let ks=Lr;const Rr=class Rr extends ${constructor(){super(...arguments),this.specification=new St}defines(e){e.classes.add(this,"pa-solution")}erase(e){e.classes.revert(this)}};r(Rr,"$Solution");let vs=Rr;const Fr=class Fr extends v{$isAParagraph(e){l(e instanceof u,"a question is a paragraph, and this is not one")}};r(Fr,"QuestionSpecification");let Et=Fr;pt([h("a question is a paragraph")],Et.prototype,"$isAParagraph");const Er=class Er extends v{$isAParagraph(e){l(e instanceof u,"an answer is a paragraph, and this is not one")}};r(Er,"AnswerSpecification");let _t=Er;pt([h("an answer is a paragraph")],_t.prototype,"$isAParagraph");const _r=class _r extends v{$isAParagraph(e){l(e instanceof u,"a decision is a paragraph, and this is not one")}};r(_r,"DecisionSpecification");let Gt=_r;pt([h("a decision is a paragraph")],Gt.prototype,"$isAParagraph");const Gr=class Gr extends v{$isAParagraph(e){l(e instanceof u,"a pain is a paragraph, and this is not one")}};r(Gr,"PainSpecification");let qt=Gr;pt([h("a pain is a paragraph")],qt.prototype,"$isAParagraph");const qr=class qr extends v{$isAParagraph(e){l(e instanceof u,"a solution is a paragraph, and this is not one")}};r(qr,"SolutionSpecification");let St=qr;pt([h("a solution is a paragraph")],St.prototype,"$isAParagraph");const Lf=o(ms),Rf=o($s),Ff=o(Ft),Ef=o(ks),_f=o(vs);var Ol=Object.defineProperty,jl=Object.getOwnPropertyDescriptor,ue=r((p,e,t,s)=>{for(var a=jl(e,t),i=p.length-1,d;i>=0;i--)(d=p[i])&&(a=d(e,t,a)||a);return a&&Ol(e,t,a),a},"__decorateClass$b");const Sr=class Sr extends ${constructor(){super(...arguments),this.specification=new De,this.span=O.span.attrs({className:"pd-number"})``,this.close=O.span.attrs({className:"pd-close"})``}get number(){const e=z.copy(this.text).trim();return e===""?NaN:Number(e)}note(){const e=this.span,t=this.close,s=o(j),a=o(w),i=this.chapter?.mention?.identifier;return c(k,{children:[n(e,{children:this.number}),i===void 0?void 0:n(t,{children:c(s,{children:[n(a,{children:i}),"×"]})})]})}defines(e){e.classes.add(this,"pa-concept")}erase(e){e.classes.revert(this)}};r(Sr,"$Concept");let Z=Sr;const Ur=class Ur extends ${constructor(){super(...arguments),this.specification=new Je}defines(e){e.classes.add(this,"pa-designed")}erase(e){e.classes.revert(this)}};r(Ur,"$Designed");let xs=Ur;const Yr=class Yr extends ${constructor(){super(...arguments),this.specification=new Je}defines(e){e.classes.add(this,"pa-decided")}erase(e){e.classes.revert(this)}};r(Yr,"$Decided");let ys=Yr;const Zr=class Zr extends ${constructor(){super(...arguments),this.specification=new Ce}defines(e){e.classes.add(this,"pa-desk")}erase(e){e.classes.revert(this)}};r(Zr,"$Desk");let Ut=Zr;const Kr=class Kr extends ${constructor(){super(...arguments),this.specification=new Ce}defines(e){e.classes.add(this,"pa-phone")}erase(e){e.classes.revert(this)}};r(Kr,"$Phone");let Yt=Kr;const Xr=class Xr extends ${constructor(){super(...arguments),this.specification=new Ce}defines(e){e.classes.add(this,"pa-thumbnail")}erase(e){e.classes.revert(this)}};r(Xr,"$Thumbnail");let Xe=Xr;const Jr=class Jr extends ${constructor(){super(...arguments),this.specification=new Pe}defines(e){e.classes.add(this,"pa-precedent")}erase(e){e.classes.revert(this)}};r(Jr,"$Precedent");let ws=Jr;const Vr=class Vr extends ${constructor(){super(...arguments),this.specification=new Pe}defines(e){e.classes.add(this,"pa-source")}erase(e){e.classes.revert(this)}};r(Vr,"$Source");let zs=Vr;const Qr=class Qr extends ${constructor(){super(...arguments),this.specification=new Zt}defines(e){e.classes.add(this,"pa-where")}erase(e){e.classes.revert(this)}};r(Qr,"$Where");let Os=Qr;const ei=class ei extends v{$isASection(e){l(e instanceof A,"a concept is a section, and this is not one")}$givenItsNumber(e){l(Number.isInteger(e.annotations.expressed(Z)?.number),"a concept is given its number, and this one was given something else")}$photographedThreeWays(e){const t=e.text.find(u);l([Ut,Yt,Xe].every(s=>t.some(a=>a.is(s))),"a concept is photographed at a desk, at a phone, and small, and this one is missing a photograph")}};r(ei,"ConceptSpecification");let De=ei;ue([h("a concept is a section")],De.prototype,"$isASection");ue([h("a concept is given its number")],De.prototype,"$givenItsNumber");ue([h("a concept is photographed at a desk, at a phone, and small")],De.prototype,"$photographedThreeWays");const ti=class ti extends v{$isAParagraphHoldingOneImage(e){l(e instanceof u&&e.text.find(ko).length===1,"a photograph is a paragraph that holds one image, and this is not one")}};r(ti,"PhotographSpecification");let Ce=ti;ue([h("a photograph is a paragraph that holds one image")],Ce.prototype,"$isAParagraphHoldingOneImage");const ai=class ai extends v{$saidOfAParagraphOfAConcept(e){l(e instanceof u&&e.parent instanceof Ip&&e.parent.is(Z),"this is said of a paragraph of a concept, and here it is said of something else")}};r(ai,"OfAConceptSpecification");let Pe=ai;ue([h("this is said of a paragraph of a concept")],Pe.prototype,"$saidOfAParagraphOfAConcept");const si=class si extends Pe{$refersToWhereItIsBuilt(e){l(e.text.find(D).some(t=>t.is(oe)),"a where refers to where the concept is built, and this one refers nowhere")}};r(si,"WhereSpecification");let Zt=si;ue([h("a where refers to where the concept is built")],Zt.prototype,"$refersToWhereItIsBuilt");const oi=class oi extends v{$saidOfAConcept(e){l(e.is(Z),"this is said of a concept, and here it is said of something else")}};r(oi,"OfAConceptSectionSpecification");let Je=oi;ue([h("this is said of a concept")],Je.prototype,"$saidOfAConcept");const Gf=o(Z),qf=o(xs),Sf=o(ys),Uf=o(Ut),Yf=o(Yt),Zf=o(Xe),Kf=o(ws),Xf=o(zs),Jf=o(Os);var Dl=Object.defineProperty,Cl=Object.getOwnPropertyDescriptor,hp=r((p,e,t,s)=>{for(var a=Cl(e,t),i=p.length-1,d;i>=0;i--)(d=p[i])&&(a=d(e,t,a)||a);return a&&Dl(e,t,a),a},"__decorateClass$a");const Pl=r((p,e)=>p.chapters.flatMap(t=>p.sections(t)).find(t=>t.is(Z)&&t.mention?.identifier===e),"conceptAt"),Al=r(p=>{const e=p.text.find(u).find(t=>t.is(Xe))?.text.find(ko)[0];return e===void 0?"":e.contents||z.copy(e.text)},"thumbnailOf"),ni=class ni extends q{constructor(){super(...arguments),this.specification=new Kt,this.themeProvider=!0,this.style=O.div`
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
    `}get chapter(){return this.parent}get concepts(){return this.book.sections(this.chapter).filter(e=>e.is(Z))}get open(){return this.concepts.find(e=>e.mention?.identifier===this.book?.$bookmark)}defines(e){super.defines(e),e.classes.add(this,"pa-gallery");const t=this.open,s=this.concepts.find(a=>[...a.classes].includes("pa-open"));s!==t&&(s?.classes.revert(this),t?.classes.add(this,"pa-open"))}erase(e){super.erase(e),e.classes.revert(this)}};r(ni,"$Gallery");let js=ni;const ri=class ri extends q{constructor(){super(...arguments),this.specification=new Xt,this.strip=O.div`
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
    `}get paragraph(){return this.parent}get places(){return this.paragraph.text.find(D).map(e=>e.annotations.expressed(oe)?.identifier).filter(e=>e!==void 0)}get concepts(){const e=this.book;return[...new Set(this.places.map(t=>Pl(e,t)).filter(t=>t!==void 0))]}get chosen(){const e=this.paragraph.parent?.text.find(u).filter(t=>t.is(Ft))??[];return new Set(e.flatMap(t=>t.text.find(D).map(s=>s.annotations.expressed(oe)?.identifier)).filter(t=>t!==void 0))}$Strip(...e){this.$Format(...e);const t=this.strip,s=o(j),a=o(w);this.style=({className:i,children:d})=>{const f=this.chosen;return c(t,{className:`${i??""} pd-strip`.trim(),children:[this.concepts.map((b,m)=>{const x=b.mention.identifier;return c(s,{children:[n(a,{children:x}),c("span",{className:`pd-thumb${f.has(x)?" pd-chosen":""}`,children:[n("img",{src:Al(b),alt:""}),c("span",{className:"pd-name",children:[n("span",{className:"pd-number",children:b.annotations.expressed(Z)?.number}),b.canonical?.name]})]})]},m)}),n("span",{className:"pd-said",children:d})]})}}defines(e){super.defines(e),e.classes.add(this,"pa-strip")}erase(e){super.erase(e),e.classes.revert(this)}};r(ri,"$Strip");let Ds=ri;const ii=class ii extends v{$isAChapter(e){l(e instanceof y,"a gallery is a chapter, and this is not one")}};r(ii,"GallerySpecification");let Kt=ii;hp([h("a gallery is a chapter")],Kt.prototype,"$isAChapter");const di=class di extends v{$isAParagraphReferringToConcepts(e){l(e instanceof u&&e.text.find(D).some(t=>t.annotations.expressed(oe)!==void 0),"a strip is a paragraph that refers to concepts, and this one refers to nothing")}};r(di,"StripSpecification");let Xt=di;hp([h("a strip is a paragraph that refers to concepts")],Xt.prototype,"$isAParagraphReferringToConcepts");const Vf=o(js),Qf=o(Ds),pi=class pi extends ne{constructor(){super(...arguments),this.accent="#23407a",this.ink="#343c4a",this.heading="#1a1f36",this.soft="#727d8c",this.faint="#9ea8b5",this.line="#e4e9f2",this.paper="#fdfcfa",this.side="#f8f9fb",this.holdsColumn="256px",this.barHeight="52px",this.card="12.5rem",this.shadow="0 1px 2px rgba(43, 54, 60, 0.05), 0 6px 18px rgba(43, 54, 60, 0.05)",this.lift="0 2px 4px rgba(43, 54, 60, 0.06), 0 14px 32px rgba(43, 54, 60, 0.10)",this.barLight="#fcfcfd",this.barMid="#f8f9fc",this.barDeep="#f2f4f9",this.barShadow="0 1px 0 rgba(43, 54, 60, 0.05)",this.sideLight="#fafbfc",this.sideDeep="#f2f4f8",this.codeGround="#f6f7fa",this.hairline="1px",this.stroke="2px",this.rise="-1px",this.gloss="inset 0 1px 0 rgba(255, 255, 255, 0.7)",this.ring="0 0 0 2px color-mix(in oklab, var(--band) 80%, white)",this.decisionShadow="0 1px 2px rgba(43, 54, 60, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.6)"}parts(){return[...super.parts(),this.backdrop(),this.bands(),this.guide(),this.story(),this.said(),this.small()]}backdrop(){return g`
            .pd-book .pd-pages { background: linear-gradient(135deg, color-mix(in oklab, var(--band) 10%, white) 0%, ${({theme:e})=>e.paper} 48%, color-mix(in oklab, var(--foot) 8%, white) 100%); }
        `}bands(){return g`
            .pd-book .pd-library { position: relative; background: linear-gradient(180deg, ${({theme:e})=>e.barLight} 0%, ${({theme:e})=>e.barMid} 60%, ${({theme:e})=>e.barDeep} 100%); border-block-end: thin solid ${({theme:e})=>e.line}; box-shadow: ${({theme:e})=>e.barShadow}; }
            .pd-book .pd-library::after { content: ''; position: absolute; left: 0; right: 0; bottom: calc(-1 * ${({theme:e})=>e.hairline}); height: ${({theme:e})=>e.stroke}; background: linear-gradient(90deg, var(--band) 0 40%, var(--ground) 40% 70%, var(--foot) 70%); opacity: 0.75; }
        `}guide(){return g`
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
        `}story(){return g`
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
        `}said(){return g`
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
        `}small(){return g`
            @media (max-width: ${({theme:e})=>e.narrow}) {
                .pd-book .pd-holds, .pd-book .pd-library { border-inline-end: none; }
                .pd-book .pd-holds .pd-paragraph.pa-entry.pa-plate { min-height: calc(2 * ${({theme:e})=>e.size}); gap: calc(${({theme:e})=>e.space} / 4); font-size: calc(0.9286 * ${({theme:e})=>e.size}); }
                .pd-book .pd-holds .pa-entry.pa-plate .pd-plate { display: none; }
                .pd-book .pd-pages .pd-chapter { padding: calc(${({theme:e})=>e.space} * 0.8333) calc(${({theme:e})=>e.space} * 0.6667) calc(${({theme:e})=>e.space} * 2); }
                .pd-book .pd-pages .pd-title { font-size: calc(2 * ${({theme:e})=>e.size}); }
            }
        `}};r(pi,"$Exhibition");let Cs=pi;const Nl=o(Cs);var Il=Object.defineProperty,Ml=Object.getOwnPropertyDescriptor,fp=r((p,e,t,s)=>{for(var a=Ml(e,t),i=p.length-1,d;i>=0;i--)(d=p[i])&&(a=d(e,t,a)||a);return a&&Il(e,t,a),a},"__decorateClass$9");const ci=class ci extends R{constructor(){super(...arguments),this.specification=new Ve}get designs(){return this.chapters.filter(e=>e.is(B))}get open(){return super.open??this.body[0]}head(){}switches(){}$Bound(){const e=o(Rc),t=o(Lc),s=o(Fc),a=this.designs;for(const i of a)i.annotations.add(this,n(e,{})),i.text.add(this,n(s,{}));for(const i of this.table?.annotations.expressed(I)?.entries??[]){const d=M(i)?.identifier,f=d===void 0?void 0:this.chapterAt(d);f===void 0||!a.includes(f)||i.annotations.add(this,n(t,{number:a.indexOf(f)+1}))}super.$Bound()}};r(ci,"$Portfolio");let Ps=ci;const li=class li extends F{$everyChapterInAPart(e){l(e.chapters.every(t=>t.part!==void 0),"every chapter of a portfolio is in a part, and one here is in none")}$showsEveryDesign(e){l(e.designs.every(t=>xa(t,u).some(s=>s.is(Ge))),"a portfolio shows every design it holds as built, in a paragraph said to be the exhibit, and one here has none")}};r(li,"PortfolioSpecification");let Ve=li;fp([h("every chapter of a portfolio is in a part")],Ve.prototype,"$everyChapterInAPart");fp([h("a portfolio shows every design it holds as built")],Ve.prototype,"$showsEveryDesign");const gp=o(Ps);o(gp,he)(Nl);o(gp,ae)(ge);const hi=class hi extends ye{};r(hi,"$PortfolioCover");let As=hi;const eg=o(As),fi=class fi extends ne{constructor(){super(...arguments),this.prose="'Source Serif 4', Georgia, serif",this.ink="#343c4a",this.heading="#1a1f36",this.soft="#727d8c",this.faint="#9ea8b5",this.line="#e4e9f2",this.paper="#ffffff",this.side="#f8f9fb",this.holdsColumn="240px",this.barHeight="52px",this.shadow="0 1px 2px rgba(43, 54, 60, 0.05), 0 6px 18px rgba(43, 54, 60, 0.05)",this.lift="0 2px 4px rgba(43, 54, 60, 0.06), 0 14px 32px rgba(43, 54, 60, 0.10)",this.barLight="#fcfcfd",this.barMid="#f8f9fc",this.barDeep="#f2f4f9",this.barShadow="0 1px 0 rgba(43, 54, 60, 0.05)",this.sideLight="#fafbfc",this.sideDeep="#f2f4f8",this.hairline="1px",this.stroke="2px"}parts(){return[...super.parts(),this.bands(),this.guide(),this.order(),this.surface(),this.entries(),this.small()]}bands(){return g`
            .pd-book .pd-library { position: relative; background: linear-gradient(180deg, ${({theme:e})=>e.barLight} 0%, ${({theme:e})=>e.barMid} 60%, ${({theme:e})=>e.barDeep} 100%); border-block-end: thin solid ${({theme:e})=>e.line}; box-shadow: ${({theme:e})=>e.barShadow}; }
            .pd-book .pd-library::after { content: ''; position: absolute; left: 0; right: 0; bottom: calc(-1 * ${({theme:e})=>e.hairline}); height: ${({theme:e})=>e.stroke}; background: linear-gradient(90deg, var(--band) 0 40%, var(--ground) 40% 70%, var(--foot) 70%); opacity: 0.75; }
        `}guide(){return g`
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
        `}order(){return g`
            .pd-book .pd-holds .pd-paragraph.pd-entry-order { position: absolute; top: calc(${({theme:e})=>e.space} * 0.75); right: calc(${({theme:e})=>e.space} * 0.583); z-index: 1; margin: 0; }
            .pd-book .pd-holds .pd-entry-order .pd-word.pd-switch { padding: 0; border: 0; border-radius: 0; background: none; font-family: ${({theme:e})=>e.font}; font-size: calc(0.7143 * ${({theme:e})=>e.size}); font-weight: 500; line-height: 1.4; letter-spacing: 0.02em; color: ${({theme:e})=>e.faint}; cursor: pointer; transition: color ${({theme:e})=>e.beat} ease; }
            .pd-book .pd-holds .pd-entry-order .pd-word.pd-switch::before { content: '↓ '; }
            .pd-book .pd-holds .pd-entry-order .pd-word.pd-switch:hover { color: ${({theme:e})=>e.ink}; }
            .pd-book .pd-holds .pd-entry-order .pd-word.pd-switch[aria-pressed='true'] { background: none; border: 0; color: var(--foot-ink); }
            .pd-book .pd-holds .pd-entry-order .pd-word.pd-switch[aria-pressed='true']::before { content: '↑ '; }
        `}surface(){return g`
            .pd-book .pd-pages { display: flex; flex-direction: column; padding: ${({theme:e})=>e.space} calc(${({theme:e})=>e.space} * 1.6667) calc(${({theme:e})=>e.space} * 5); background: linear-gradient(180deg, color-mix(in oklab, var(--foot) 12%, white), transparent) top / 100% calc(${({theme:e})=>e.space} * 2) no-repeat, linear-gradient(90deg, color-mix(in oklab, var(--foot) 8%, white), transparent) left / calc(${({theme:e})=>e.space} * 1.6667) 100% no-repeat, ${({theme:e})=>e.paper}; }
        `}entries(){return g`
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
        `}small(){return g`
            @media (max-width: ${({theme:e})=>e.narrow}) {
                .pd-book .pd-holds, .pd-book .pd-library { border-inline-end: none; }
                .pd-book .pd-holds .pd-paragraph.pd-entry-order, .pd-book .pd-holds .pa-entry .pd-word.pd-entry-day { display: none; }
                .pd-book .pd-pages { padding: 0 calc(${({theme:e})=>e.space} * 0.8333) calc(${({theme:e})=>e.space} * 2.5); }
                .pd-book .pd-pages .pd-chapter.pa-page { padding: calc(${({theme:e})=>e.space} * 1.1667) 0 calc(${({theme:e})=>e.space} * 1.3333); }
                .pd-book .pd-pages .pa-page .pd-word.pd-entry-number { position: static; display: block; margin-block-end: calc(${({theme:e})=>e.space} / 6); font-size: calc(2 * ${({theme:e})=>e.size}); }
                .pd-book .pd-pages .pa-page .pd-word.pd-date { position: static; width: auto; margin-block-end: calc(${({theme:e})=>e.space} * 0.4167); }
            }
        `}};r(fi,"$Typeset");let Jt=fi;const Tl=o(Jt);var Wl=Object.defineProperty,Bl=Object.getOwnPropertyDescriptor,up=r((p,e,t,s)=>{for(var a=Bl(e,t),i=p.length-1,d;i>=0;i--)(d=p[i])&&(a=d(e,t,a)||a);return a&&Wl(e,t,a),a},"__decorateClass$8");const P=r(p=>p.annotations.expressed(_)?.date?.date??"","dayOf"),ee=r(p=>{const[e,t]=P(p).split("-");return e===void 0||t===void 0?"":new Date(Date.UTC(Number(e),Number(t)-1,1)).toLocaleString("en-GB",{month:"long",year:"numeric",timeZone:"UTC"})},"monthOf"),gi=class gi extends ${constructor(){super(...arguments),this.specification=new L}defines(e){e.classes.add(this,"pa-newest-first")}erase(e){e.classes.revert(this)}};r(gi,"$NewestFirst");let Vt=gi;const Hl=o(Vt),bp=Hl,ui=class ui extends u{write(){const e=o($a);return n(e,{annotation:bp,children:"newest first"})}$Define(){super.$Define(),this.classes.add(this,"pd-entry-order")}};r(ui,"$EntryOrder");let Ns=ui;const bi=class bi extends D{write(){return String(this.book.entries.indexOf(this.chapter)+1)}$Define(){super.$Define(),this.classes.add(this,"pd-entry-number")}};r(bi,"$EntryNumber");let Is=bi;const mi=class mi extends Oe{paging(){return g``}};r(mi,"$JournalLayout");let Ms=mi;const Ll=o(Ns),Rl=o(Is),Fl=o(Ms),El=Ll,_l=Rl,$i=class $i extends R{constructor(){super(...arguments),this.specification=new Qe}get latest(){return[...this.entries].sort((e,t)=>P(t).localeCompare(P(e)))[0]}get pages(){const e=[...this.entries].sort((t,s)=>P(t).localeCompare(P(s)));return this.is(Vt)?e.reverse():e}get open(){return super.open??this.latest}head(){}switches(){}turns(){}$Bound(){const e=o(_l);for(const a of this.entries)a.text.add(this,n(e,{}));const t=this.table?.annotations.expressed(I);t!==void 0&&(t.$dated=!0);const s=o(El);this.table?.text.add(this,n(s,{})),this.$is=[bp],super.$Bound()}};r($i,"$Journal");let Ts=$i;const ki=class ki extends F{$everyEntryIsDated(e){const t=e.entries.find(s=>!s.is(_));l(t===void 0,`every entry of a journal is dated, and "${t?.title?.name}" is not`)}$everyEntrySaysItsMonth(e){const t=e.entries.find(s=>s.part?.name!==ee(s));l(t===void 0,t===void 0?"":`every entry of a journal says the month of its date as its part, and "${t.title?.name}" says "${t.part?.name??"none"}" for ${ee(t)}`)}};r(ki,"JournalSpecification");let Qe=ki;up([h("every entry of a journal is dated")],Qe.prototype,"$everyEntryIsDated");up([h("every entry of a journal says the month of its date as its part")],Qe.prototype,"$everyEntrySaysItsMonth");const No=o(Ts);o(No,he)(Tl);o(No,ae)(ge);o(No,ya)(Fl);const vi=class vi extends ye{};r(vi,"$JournalCover");let Ws=vi;const Gl=o(Ws);var ql=Object.defineProperty,Sl=Object.getOwnPropertyDescriptor,Ul=r((p,e,t,s)=>{for(var a=Sl(e,t),i=p.length-1,d;i>=0;i--)(d=p[i])&&(a=d(e,t,a)||a);return a&&ql(e,t,a),a},"__decorateClass$7");const xi=class xi extends ${constructor(){super(...arguments),this.specification=new Qt}get section(){return this.parent instanceof A?this.parent:void 0}get headings(){const e=this.section;return e===void 0?[]:e.text.find(Ld).filter(t=>t!==e.canonical)}defines(e){e.classes.add(this,"pa-opaque")}erase(e){e.classes.revert(this)}$Bound(){for(const e of this.headings){const t=e.annotations.expressed(dt),s=e.annotations.expressed(Hd);for(const a of[t,s])a!==void 0&&e.annotations.remove(e,a)}super.$Bound()}};r(xi,"$Opaque");let Bs=xi;const yi=class yi extends v{$saidOfASection(e){l(e instanceof A,"opaque is said of a section, and this is not one")}};r(yi,"OpaqueSpecification");let Qt=yi;Ul([h("opaque is said of a section")],Qt.prototype,"$saidOfASection");const Yl=o(Bs);var Zl=Object.defineProperty,Kl=Object.getOwnPropertyDescriptor,X=r((p,e,t,s)=>{for(var a=Kl(e,t),i=p.length-1,d;i>=0;i--)(d=p[i])&&(a=d(e,t,a)||a);return a&&Zl(e,t,a),a},"__decorateClass$6");const wi=class wi extends Ld{$Define(){super.$Define(),this.classes.add(this,"pd-speaker")}$Bound(){super.$Bound();const e=this.annotations.expressed(dt);e!==void 0&&this.annotations.remove(this,e)}};r(wi,"$Speaker");let et=wi;const zi=class zi extends $o{$Define(){super.$Define(),this.classes.add(this,"pd-time")}};r(zi,"$Time");let Hs=zi;const Oi=class Oi extends Mp{$Define(){super.$Define(),this.classes.add(this,"pd-participant")}};r(Oi,"$Participant");let ea=Oi;const ji=class ji extends u{get participants(){return this.text.find(ea)}write(){const e=this.participants;return e.flatMap((t,s)=>{const a=o(t);return[s===0?"":s===e.length-1?" and ":", ",n(a,{},s)]})}$Define(){super.$Define(),this.classes.add(this,"pd-participants")}};r(ji,"$Participants");let ta=ji;const tg=o(et),Xl=o(Hs),ag=o(ea),sg=o(ta),Jl=Xl,Vl=r(p=>{const e=new Date(p);if(Number.isNaN(e.getTime()))return p;const t=e.toLocaleDateString("en-GB",{day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return`${e.toLocaleTimeString("en-GB",{hour:"2-digit",minute:"2-digit",timeZone:"UTC"})} UTC, ${t}`},"shownTime"),Di=class Di extends A{constructor(){super(...arguments),this.specification=new tt,this.$at=void 0}get when(){return this.$at??""}get speaker(){return this.text.find(et)[0]}write(){const e=o(Jl),t=this.speaker,s=t===void 0?void 0:o(t),a=[...this.text].filter(i=>i!==t);return c(k,{children:[s===void 0?void 0:n(s,{}),n(e,{children:`[${Vl(this.when)}](${this.when})`}),n("div",{className:"pd-said",children:a.map((i,d)=>{const f=o(i);return n(f,{},d)})})]})}$Define(){super.$Define(),this.classes.add(this,"pd-message");const e=o(Yl);if(this.annotations.add(this,n(e,{})),this.when==="")return;const t=this.speaker,s=t===void 0?"":E.reference(z.copy(t.text))?.name??z.copy(t.text),a=o(Tp);this.annotations.add(this,n(a,{children:Rd.slug(`${this.when.replace(/Z$/u,"")} ${s}`)}))}$Bound(){const e=this.book?.author?.means?.identifier;if(e!==void 0&&this.speaker?.means?.identifier===e){const t=o(eh);this.annotations.add(this,n(t,{}))}super.$Bound()}};r(Di,"$Message");let H=Di;const Ci=class Ci extends ${constructor(){super(...arguments),this.specification=new sa}defines(e){e.classes.add(this,"pa-mine")}erase(e){e.classes.revert(this)}};r(Ci,"$Mine");let aa=Ci;const Pi=class Pi extends v{$saidOfAMessage(e){l(e instanceof H,"mine is said of a message, and this is not one")}};r(Pi,"MineSpecification");let sa=Pi;X([h("mine is said of a message")],sa.prototype,"$saidOfAMessage");const Ql=o(aa),eh=Ql,Ai=class Ai extends ${constructor(){super(...arguments),this.specification=new na}defines(e){e.classes.add(this,"pa-quoted")}erase(e){e.classes.revert(this)}};r(Ai,"$Quoted");let Ls=Ai;const Ni=class Ni extends ${constructor(){super(...arguments),this.specification=new ra}defines(e){e.classes.add(this,"pa-verbatim")}erase(e){e.classes.revert(this)}};r(Ni,"$Verbatim");let Rs=Ni;const Ii=class Ii extends ${constructor(){super(...arguments),this.specification=new at,this.$from=void 0,this.$to=void 0}get from(){return this.$from??""}get to(){return this.$to??""}defines(e){e.classes.add(this,"pa-period")}erase(e){e.classes.revert(this)}};r(Ii,"$Period");let oa=Ii;const Mi=class Mi extends ${constructor(){super(...arguments),this.specification=new at,this.$shown=void 0,this.$all=void 0}get shown(){return Number(this.$shown??0)}get all(){return Number(this.$all??0)}get aside(){return this.all-this.shown}defines(e){e.classes.add(this,"pa-messages")}erase(e){e.classes.revert(this)}};r(Mi,"$Messages");let pe=Mi;const Ti=class Ti extends Wp{$saysWhen(e){l(e.when!==""&&!Number.isNaN(Date.parse(e.when)),"a message says when it was said, as an instant the machine can read, and this one does not")}$headedByItsSpeaker(e){l(e.canonical instanceof et,"a message is headed by its speaker, a heading that refers to them, and this one is not")}};r(Ti,"MessageSpecification");let tt=Ti;X([h("a message says when it was said")],tt.prototype,"$saysWhen");X([h("a message is headed by its speaker")],tt.prototype,"$headedByItsSpeaker");const Wi=class Wi extends v{$saidOfAParagraph(e){l(e instanceof u,"this is said of a paragraph, and this is not one")}};r(Wi,"OfAParagraphSpecification");let na=Wi;X([h("this is said of a paragraph")],na.prototype,"$saidOfAParagraph");const Bi=class Bi extends v{$saidOfACover(e){l(e instanceof y&&e.is(T),"this is said of a cover, and this is not one")}};r(Bi,"OfACoverSpecification");let at=Bi;X([h("this is said of a cover")],at.prototype,"$saidOfACover");const Hi=class Hi extends v{$saidOfAWord(e){l(e instanceof D,"verbatim is said of a word, and this is not one")}};r(Hi,"VerbatimSpecification");let ra=Hi;X([h("verbatim is said of a word")],ra.prototype,"$saidOfAWord");const og=o(H),ng=o(Ls),rg=o(Rs),ig=o(oa),dg=o(pe),Md=r(p=>p===void 0||p===""?"":new Date(p).toLocaleDateString("en-GB",{day:"numeric",month:"long",year:"numeric",timeZone:"UTC"}),"dayWords"),Li=class Li extends u{write(){const e=this.book,t=e.messageCount?.shown??e.messages.length,s=new Set(e.messages.map(d=>d.when.slice(0,10))).size,a=Md(e.period?.from),i=Md(e.period?.to);return c(k,{children:[c("span",{className:"pd-tally-count",children:[n("b",{children:t}),s===1?" messages in ":" messages over ",n("b",{children:s}),s===1?" day":" days"]}),n("span",{className:"pd-tally-period",children:a===i?a:`${a} to ${i}`})]})}$Define(){super.$Define(),this.classes.add(this,"pd-tally")}};r(Li,"$Tally");let Fs=Li;const Ri=class Ri extends D{write(){return String(this.$entry?.text.find(H).length??0)}$Define(){super.$Define(),this.classes.add(this,"pd-day-count")}};r(Ri,"$DayCount");let Es=Ri;const th=o(Fs),ah=o(Es),sh=th,oh=ah,Fi=class Fi extends R{constructor(){super(...arguments),this.specification=new Ae}get participants(){return this.cover?.text.find(ta)[0]?.participants??[]}get period(){return this.cover?.annotations.expressed(oa)}get messageCount(){return this.cover?.annotations.expressed(pe)}get messages(){return this.body.flatMap(e=>e.text.find(H))}get pages(){return[...[...this.body].sort((t,s)=>P(t).localeCompare(P(s))),...this.appendix]}get open(){return super.open??this.pages[0]}head(){const e=o(sh);return c(k,{children:[super.head(),n(e,{chapter:this.cover})]})}$Bound(){const e=o(oh);for(const t of this.table?.annotations.expressed(I)?.entries??[]){const s=M(t)?.identifier,a=s===void 0?void 0:this.chapterAt(s);a===void 0||!this.body.includes(a)||t.text.add(this,n(e,{entry:a}))}super.$Bound()}};r(Fi,"$Conversation");let ia=Fi;const Ei=class Ei extends F{$saysItsParticipantsPeriodAndCount(e){l(e.participants.length>0&&e.period!==void 0&&e.messageCount!==void 0,"a conversation says its participants, its period and how many messages it holds, on its cover, and this one says less")}$everyMessageIsAddressed(e){const t=e.messages.find(s=>s.annotations.expressed(dt)===void 0);l(t===void 0,`every message of a conversation is addressed by its time, and the one at "${t?.when}" is not`)}$everyChapterHoldsAMessage(e){const t=e.body.find(s=>s.text.find(H).length===0);l(t===void 0,`every chapter of a conversation holds a message, and "${t?.title?.name}" holds none`)}};r(Ei,"ConversationSpecification");let Ae=Ei;X([h("a conversation says its participants, its period and how many messages it holds")],Ae.prototype,"$saysItsParticipantsPeriodAndCount");X([h("every message of a conversation is addressed by its time")],Ae.prototype,"$everyMessageIsAddressed");X([h("every chapter of a conversation holds a message")],Ae.prototype,"$everyChapterHoldsAMessage");o(ia);const nh=/(::[^\n]*|<\|=\|>|=\|>|=[A-Za-z0-9'_]*>|-\([^)]*\)>|->|==|!=)/gu,Td=r(p=>p.replace(/[&<>]/gu,e=>({"&":"&amp;","<":"&lt;",">":"&gt;"})[e]),"escaped"),rh=r(p=>p.split(nh).map((e,t)=>t%2===0?Td(e):`<span class="${e.startsWith("::")?"hljs-comment":"hljs-keyword"}">${Td(e)}</span>`).join(""),"notationHighlighting"),ih=r((p,e)=>e==="srt"?rh(p):Bp(p,e),"boxHighlighting"),_i=class _i extends vo{constructor(){super(...arguments),this.$highlighter=ih}get name(){return this.language===""?"text":this.language}$CodeBox(...e){this.$Code(...e),this.containers.replace(this,"pre","div")}write(){return c(k,{children:[c("div",{className:"pd-code-bar",children:[n("span",{className:"pd-code-name",children:this.name}),n("button",{type:"button",className:"pd-copy",onClick:r(e=>this.copy(e),"onClick"),children:"Copy"})]}),n("pre",{children:super.write()})]})}copy(e){const t=e.currentTarget.closest(".pd-code-box")?.querySelector("pre")?.textContent??"";navigator.clipboard?.writeText(t)}$Define(){super.$Define(),this.classes.add(this,"pd-code-box")}};r(_i,"$CodeBox");let _s=_i;const pg=o(_s);var dh=Object.defineProperty,ph=Object.getOwnPropertyDescriptor,Io=r((p,e,t,s)=>{for(var a=ph(e,t),i=p.length-1,d;i>=0;i--)(d=p[i])&&(a=d(e,t,a)||a);return a&&dh(e,t,a),a},"__decorateClass$5");const Gi=class Gi extends ${constructor(){super(...arguments),this.specification=new L}defines(e){e.classes.add(this,"pa-synopses")}erase(e){e.classes.revert(this)}};r(Gi,"$Synopses");let Gs=Gi;const ch=o(Gs),lh=ch,qi=class qi extends u{write(){const e=o($a);return n(e,{annotation:lh,children:"with the synopsis"})}$Define(){super.$Define(),this.classes.add(this,"pd-row-form")}};r(qi,"$RowForm");let qs=qi;const Si=class Si extends D{write(){return`${this.chapter?.annotations.expressed(N)?.cover?.annotations.expressed(pe)?.shown??0} exchanges`}$Define(){super.$Define(),this.classes.add(this,"pd-entry-count")}};r(Si,"$EntryCount");let Ss=Si;const Ui=class Ui extends D{write(){return ee(this.chapter)}$Define(){super.$Define(),this.classes.add(this,"pd-entry-month")}};r(Ui,"$EntryMonth");let Us=Ui;const Yi=class Yi extends u{get project(){return this.book}$ProjectHead(...e){this.$Writing(...e),this.containers.replace(this,"span","div")}write(){const e=this.project;if(e===void 0)return;const t=o(j),s=o(w),a=e.coverOf(e.subject?.means?.identifier),i=e.entries,d=i.reduce((C,S)=>C+(S.annotations.expressed(N)?.cover?.annotations.expressed(pe)?.shown??0),0),f=i.map(P).filter(C=>C!=="").sort(),b=f.length===0?"":`${ee(i.find(C=>P(C)===f[0]))} to ${ee(i.find(C=>P(C)===f[f.length-1]))}`,m=e.brief,x=e.instructions;return c(k,{children:[c("span",{className:"pd-crumbs",children:[a===void 0?void 0:c(t,{children:[n(s,{children:a.mention.identifier}),a.title?.name]}),n("i",{children:"/"}),n(t,{children:e.title?.name})]}),m===""?void 0:n("span",{className:"pd-brief",children:m}),x===void 0?void 0:c("span",{className:`pd-instructions${x.set?"":" pa-none"}`,children:[n("b",{children:"Instructions"}),n("span",{children:x.set?x.words:"none were set on this project"})]}),c("span",{className:"pd-report",children:[c("span",{children:[n("b",{children:i.length})," conversations"]}),c("span",{children:[n("b",{children:d})," exchanges"]}),c("span",{children:[n("b",{children:e.files.length})," files"]}),n("span",{children:b})]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-project-head")}};r(Yi,"$ProjectHead");let Ys=Yi;const Zi=class Zi extends u{get project(){return this.book}$MonthShape(...e){this.$Writing(...e),this.containers.replace(this,"span","div")}write(){const e=this.project;if(e===void 0)return;const t=o(j),s=o(w),a=e.months;if(a.length===0)return;const i=Math.max(...a.map(f=>f.count));let d="";return a.map((f,b)=>{const m=f.name.split(" ").at(-1)??"",x=m!==d;return d=m,c(t,{children:[f.place===void 0?void 0:n(s,{children:f.place}),n("span",{className:"pd-month-bar",style:{height:`${Math.round(6+36*f.count/i)}px`},title:`${f.name} · ${f.count}`}),x?n("b",{children:m}):void 0]},b)})}$Define(){super.$Define(),this.classes.add(this,"pd-month-shape")}};r(Zi,"$MonthShape");let Zs=Zi;const Ki=class Ki extends u{constructor(){super(...arguments),this.style=O.div`
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
    `}get project(){return this.book}$Knowledge(...e){this.$Writing(...e),this.containers.replace(this,"span",this.style)}write(){const e=this.project;if(e===void 0)return;const t=o(j),s=o(w),a=e.project,i='<svg viewBox="0 0 16 16"><path d="M4 1.5h5.5L13 5v9.5H4z"/><path d="M9.5 1.5V5H13M6 8h4M6 10.5h4"/></svg>';return c(k,{children:[a?.mention===void 0?void 0:c("span",{className:"pd-knowledge-row",children:[c(t,{children:[n(s,{children:a.mention.identifier}),a.title?.name]}),n("span",{className:"pd-at-right",children:"what it is, its instructions"})]}),c("span",{className:"pd-knowledge-row",children:["Files",n("small",{children:e.files.length}),n("span",{className:"pd-at-right",children:"as uploaded"})]}),n("span",{className:"pd-knowledge-files",children:e.files.map((d,f)=>c("span",{className:"pd-knowledge-file",children:[n("span",{className:"pd-drawing",dangerouslySetInnerHTML:{__html:i}}),c(t,{children:[n(s,{children:d.mention.identifier}),d.title?.name]}),n("span",{className:"pd-file-type",children:(d.annotations.find(Q)[0]?.$type??"").replace(/^\./u,"")})]},f))})]})}$Define(){super.$Define(),this.classes.add(this,"pd-knowledge")}};r(Ki,"$Knowledge");let Ks=Ki;const Xi=class Xi extends Oe{paging(){return g`
            .pd-book.pa-turned .pa-page:not(.pa-open) { display: none; }
            .pd-book:not(.pa-turned) .pa-page.pa-spread { display: none; }
        `}areas(){return g`
            ${super.areas()}
            .pd-book.pa-layout:not(.pa-turned) .pd-head { display: grid; gap: calc(${({theme:e})=>e.space} / 4); align-content: end; padding: calc(${({theme:e})=>e.space} * 0.9167) calc(${({theme:e})=>e.space} * 1.5) calc(${({theme:e})=>e.space} * 0.5833); }
            .pd-book.pa-layout.pa-turned .pd-head { display: none; }
            .pd-book:not(.pa-turned) .pd-holds { padding-block-start: calc(${({theme:e})=>e.space} * 0.4167); }
            ${this.head()}
            ${this.list()}
            ${this.search()}
        `}search(){return g`
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
        `}head(){return g`
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
            .pd-book .pd-head .pd-paragraph.pd-month-shape { order: 3; grid-column: 1 / -1; display: flex; align-items: flex-end; gap: 3px; width: min(440px, 100%); height: 58px; margin: calc(${({theme:e})=>e.space} / 2) 0 0; padding-block-end: 16px; }
            .pd-book .pd-head .pd-month-shape .pd-word { position: relative; flex: 1; display: flex; align-items: flex-end; height: 100%; min-width: 8px; }
            .pd-book .pd-head .pd-month-shape .pd-word > a { display: flex; align-items: flex-end; width: 100%; height: 100%; }
            .pd-book .pd-head .pd-month-shape .pd-month-bar { display: block; width: 100%; border-radius: 3px 3px 1px 1px; background: #c0c9df; transition: background ${({theme:e})=>e.beat}; }
            .pd-book .pd-head .pd-month-shape .pd-word:hover .pd-month-bar { background: ${({theme:e})=>e.accent}; }
            .pd-book .pd-head .pd-month-shape .pd-word b { position: absolute; left: 0; top: 100%; margin-block-start: 3px; font-family: ${({theme:e})=>e.font}; font-size: calc(0.7143 * ${({theme:e})=>e.size}); font-weight: 500; line-height: 1; color: ${({theme:e})=>e.faint}; white-space: nowrap; }
            @media (max-width: ${({theme:e})=>e.narrow}) {
                .pd-book .pd-head .pd-paragraph.pd-month-shape { width: 100%; height: 48px; }
            }
        `}list(){return g`
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
        `}};r(Xi,"$ListLayout");let st=Xi;const Ji=class Ji extends st{areas(){return g`
            ${super.areas()}
            .pd-book.pa-layout:not(.pa-turned) {
                grid-template-columns: ${({theme:e})=>e.holdsColumn} minmax(0, 1fr) 320px;
                grid-template-areas: 'library library library' 'holds head knowledge' 'holds pages knowledge';
            }
            .pa-layout .pd-knowledge-column { grid-area: knowledge; min-width: 0; overflow-y: auto; }
            .pd-book.pa-turned .pd-knowledge-column { display: none; }
            .pd-book:not(.pa-turned) .pd-pages .pd-chapter.pa-page.pa-synopsis:not(.pa-volume) { display: none; }
            @media (max-width: ${({theme:e})=>e.narrow}) {
                .pd-book.pa-layout:not(.pa-turned) .pd-knowledge-column { order: 4; }
            }
        `}};r(Ji,"$ProjectLayout");let Xs=Ji;const Mo=r((p,e,t=ka)=>{const s=o(vh),a=o(xh),i=o(t),d=o(w);let f="";for(const b of e){const m=ee(b),x=b.annotations.expressed(N)?.cover?.mention?.identifier;b.text.add(p,...m!==f?[n(a,{},"month")]:[],n(s,{},"count"),...x===void 0?[]:[n(i,{entry:b,children:n(d,{children:x})},"open")]),f=m}},"rows"),Vi=class Vi extends Tt{constructor(){super(...arguments),this.specification=new Ne}get entries(){return this.text.find(y).filter(e=>e.is(U)&&e!==this.synopsis)}get files(){return this.chapters.filter(e=>e.is(W)&&e.is(Q))}get project(){return this.chapters.find(e=>e.is(W)&&!e.is(Q))}get brief(){const e=this.project?.text.find(u).find(t=>t.is(Re));return e===void 0?"":z.copy(e.text).replace(/\s+/gu," ").trim()}get instructions(){const e=this.project?.text.find(A).find(s=>s.canonical?.name==="Its instructions");if(e===void 0)return;const t=e.text.find(u).map(s=>z.copy(s.text).replace(/\s+/gu," ").trim()).join(" ");return{set:!/^No instructions were set/u.test(t),words:t}}get months(){return(this.table?.text.find(A)??[]).map(e=>({section:e,name:e.canonical?.name??"",count:e.text.find(u).filter(t=>this.entries.includes(this.chapterAt(M(t)?.identifier??""))).length})).filter(e=>e.count>0&&!Number.isNaN(Date.parse(e.name))).sort((e,t)=>Date.parse(e.name)-Date.parse(t.name)).map(e=>({name:e.name,count:e.count,place:e.section.mention===void 0?void 0:this.placeWithin(e.section.mention.identifier)}))}get laidOutChapters(){return[...super.laidOutChapters,...this.entries]}get pages(){const e=[...this.entries].sort((t,s)=>P(s).localeCompare(P(t)));return[...super.pages,...e]}get open(){return this.$bookmark===void 0?void 0:this.chapterAt(this.$bookmark)}get index(){return this.table?.annotations.expressed(I)}get searchHint(){return"a word in this project, its conversations and its files"}found(e){const t=e.trim().toLowerCase();if(t==="")return[];const s=this.pages.filter(i=>this.entries.includes(i)&&this.wordsOf(i).lower.includes(t)),a=this.files.filter(i=>(i.title?.name??"").toLowerCase().includes(t));return[...s,...a]}placeOf(e){return e.annotations.expressed(N)?.cover?.mention?.identifier??super.placeOf(e)}countOfFound(e,t){const s=e.filter(i=>this.files.includes(i)).length,a=e.length-s;return c(k,{children:[n("b",{children:a})," of ",this.entries.length," conversations and ",n("b",{children:s})," of ",this.files.length," files say “",t,"”"]})}aboveThePages(){const e=o(tp);return n(e,{chapter:this.table})}write(){const e=o(zh);return c(k,{children:[super.write(),n("div",{className:"pd-knowledge-column",children:n(e,{chapter:this.cover})})]})}head(){const e=o(this.cover),t=o(yh),s=o(wh),a=o(kh),i=o(jo);return c(k,{children:[n(e,{}),n(t,{chapter:this.cover}),n(s,{chapter:this.table}),n(a,{chapter:this.cover}),n(i,{chapter:this.cover})]})}rows(e){Mo(this,e)}$Bound(){this.rows(this.pages.filter(t=>this.entries.includes(t)));const e=this.index;e!==void 0&&(e.$folded=!0,e.$counted=!0,e.$dated=!0,e.$searched=!0),super.$Bound()}};r(Vi,"$ProjectManual");let da=Vi;const Qi=class Qi extends Ke{$everyEntryStandsForAConversation(e){const t=e.entries.find(s=>s.annotations.expressed(U)?.means===void 0);l(t===void 0,`every entry of a project manual stands for a conversation, holding its synopsis, and "${t?.title?.name}" stands for none`)}$hasOneProjectChapter(e){l(e.chapters.filter(t=>t.is(W)&&!t.is(Q)).length===1,"a project manual has one chapter about the project, which appends no file, and this one has none or more than one")}$onlyAChapterAppends(e){const t=[...e.chapters,...e.entries];l(e.text.find(y).every(s=>t.includes(s)||!s.is(Q)),"only an ordinary chapter or an entry files a file, and here a cover, a synopsis or a table of contents files one")}};r(Qi,"ProjectManualSpecification");let Ne=Qi;Io([h("every entry of a project manual stands for a conversation, holding its synopsis")],Ne.prototype,"$everyEntryStandsForAConversation");Io([h("a project manual has one chapter about the project, which appends no file")],Ne.prototype,"$hasOneProjectChapter");Io([h("an entry of a project manual files a file only when a chapter may")],Ne.prototype,"$onlyAChapterAppends");const mp=o(qs),hh=o(Ss),fh=o(Us),gh=o(Ys),uh=o(Zs),bh=o(Ks);o(st);const mh=o(Xs),$h=o(da),kh=mp,vh=hh,xh=fh,yh=gh,wh=uh,zh=bh;o($h,ya)(mh);const ed=class ed extends Jt{constructor(){super(...arguments),this.sans="'Inter', system-ui, sans-serif",this.mono="ui-monospace, 'Cascadia Code', Consolas, monospace",this.keyword="#1f5fbf",this.string="#9a3b1e",this.type="#116b4a",this.comment="#7a8491"}parts(){return[...super.parts(),this.surfaces(),this.top(),this.rows(),this.openDay(),this.exchanges(),this.said(),this.cards(),this.paneColumn(),this.phone()]}surfaces(){return g`
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
        `}top(){return g`
            .pd-book .pd-head .pd-switches, .pd-book .pd-head .pa-illustration { display: none; }
            .pd-book .pd-head .pd-title { font-family: ${({theme:e})=>e.serif}; font-size: 30px; font-weight: 600; line-height: 1.1; letter-spacing: -.01em; }
            .pd-book .pd-head .pd-participants { display: flex; gap: 6px; align-items: center; margin: 6px 0 0; font-family: ${({theme:e})=>e.sans}; font-size: 13px; color: ${({theme:e})=>e.soft}; }
            .pd-book .pd-head .pd-participants::before { content: 'between'; }
            .pd-book .pd-head .pd-participants .pa-reference { color: ${({theme:e})=>e.ink}; font-weight: 500; text-decoration: none; }
            .pd-book .pd-head .pd-participants .pa-reference:hover { color: ${({theme:e})=>e.accent}; }
            .pd-book .pd-head .pd-tally { display: flex; flex-wrap: wrap; gap: 4px 16px; margin: 6px 0 0; font-family: ${({theme:e})=>e.sans}; font-size: 12.5px; color: ${({theme:e})=>e.soft}; }
            .pd-book .pd-head .pd-tally b { color: ${({theme:e})=>e.ink}; font-weight: 500; }
        `}rows(){return g`
            .pd-book .pd-holds .pd-chapter { display: flex; flex-direction: column; }
            .pd-book .pd-holds .pd-section.pa-appendix { display: none; }
            .pd-book .pd-holds .pd-section > .pd-heading { margin: 0 0 4px 18px; font-family: ${({theme:e})=>e.sans}; font-size: 10.5px; font-weight: 600; line-height: 1.4; letter-spacing: .12em; text-transform: uppercase; color: ${({theme:e})=>e.faint}; }
            .pd-book .pd-holds .pd-paragraph.pa-entry { display: flex; align-items: center; gap: 9px; padding: 6px 18px 6px 16px; font-family: ${({theme:e})=>e.sans}; font-size: 13px; color: ${({theme:e})=>e.ink}; }
            .pd-book .pd-holds .pd-paragraph.pa-entry::before { content: ''; flex: none; width: 7px; height: 7px; border-radius: 50%; background: ${({theme:e})=>e.sea}; }
            .pd-book .pd-holds .pd-paragraph.pa-entry .pd-day-count { margin-inline-start: auto; font-size: 11px; color: ${({theme:e})=>e.faint}; }
            .pd-book .pd-holds .pd-paragraph.pa-entry:hover { background: #f8fafc; }
            .pd-book .pd-holds .pd-paragraph.pa-entry.pa-open { background: linear-gradient(90deg, #eff4fa, #f8fafd); color: ${({theme:e})=>e.heading}; font-weight: 500; }
            ${this.sideIndex()}
        `}sideIndex(){return g`
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
        `}openDay(){return g`
            .pd-book .pd-pages .pd-chapter.pa-page { width: 100%; max-width: 768px; margin: 0 auto; }
            .pd-book .pd-pages .pa-page > .pd-title, .pd-book .pd-pages .pa-page > a.pa-self-reference .pd-title { margin: 0 0 22px; font-family: ${({theme:e})=>e.sans}; font-size: 11.5px; font-weight: 600; line-height: 1.4; letter-spacing: .14em; text-transform: uppercase; color: ${({theme:e})=>e.faint}; }
            .pd-book .pd-pages .pd-turn, .pd-book .pd-pages .pa-page > .pd-word.pd-date { display: none; }
        `}exchanges(){return g`
            .pd-book .pd-pages .pd-message { position: relative; display: block; margin: 0 0 28px; }
            .pd-book .pd-pages .pd-message > .pa-self-reference, .pd-book .pd-pages .pd-message .pd-heading.pd-speaker { display: none; }
            .pd-book .pd-pages .pd-message > .pd-word.pd-time { position: absolute; top: -17px; left: 0; display: block; width: auto; margin: 0; font-family: ${({theme:e})=>e.sans}; font-size: 11px; font-weight: 500; line-height: 1; color: ${({theme:e})=>e.faint}; opacity: 0; transition: opacity .15s; }
            .pd-book .pd-pages .pd-message > .pd-word.pd-time::before { content: none; }
            .pd-book .pd-pages .pd-message.pa-mine > .pd-word.pd-time { left: auto; right: 0; }
            .pd-book .pd-pages .pd-message:hover > .pd-word.pd-time { opacity: 1; }
            .pd-book .pd-pages .pd-message > .pd-said { display: flex; flex-direction: column; gap: 10px; min-width: 0; overflow-wrap: anywhere; }
            .pd-book .pd-pages .pd-message.pa-mine > .pd-said { margin-inline-start: auto; width: fit-content; max-width: 78%; padding: 12px 16px; border-radius: 12px; background: rgba(11, 11, 11, .05); gap: 8px; }
        `}said(){return g`
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
        `}cards(){return g`
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
        `}paneColumn(){return g`
            .pd-book.pa-layout:has(> .pd-pane > .pd-pane-bar) {
                grid-template-columns: ${({theme:e})=>e.holdsColumn} minmax(0, 1fr) minmax(0, 1fr);
                grid-template-areas: 'library library library' 'holds head pane' 'holds pages pane';
            }
            ${this.strip()}
        `}strip(){return g`
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
        `}phone(){return g`
            @media (max-width: ${({theme:e})=>e.narrow}) {
                .pd-book .pd-pages .pd-message.pa-mine > .pd-said { max-width: 92%; }
                .pd-book .pd-head .pd-title { font-size: 24px; }
                .pd-book.pa-layout:has(> .pd-pane > .pd-pane-bar) { grid-template-columns: minmax(0, 1fr); grid-template-areas: 'library' 'head' 'pages'; }
            }
        `}};r(ed,"$ApplicationForm");let Js=ed;const Oh=o(Js);var jh=Object.defineProperty,Dh=Object.getOwnPropertyDescriptor,Ch=r((p,e,t,s)=>{for(var a=Dh(e,t),i=p.length-1,d;i>=0;i--)(d=p[i])&&(a=d(e,t,a)||a);return a&&jh(e,t,a),a},"__decorateClass$4");const Ph='<svg viewBox="0 0 24 24"><path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4M9 12h6M9 16h6"/></svg>',Ah='<svg viewBox="0 0 24 24"><path d="M8 7l-5 5 5 5M16 7l5 5-5 5M13 5l-2 14"/></svg>',se=r(p=>{const e=p.book;return e!==void 0&&"$shown"in e?e:void 0},"showingBook"),td=class td extends ${constructor(){super(...arguments),this.specification=new pa}defines(e){e.classes.add(this,"pa-version")}erase(e){e.classes.revert(this)}};r(td,"$Version");let Vs=td;const ad=class ad extends v{$saidOfAChapter(e){l(e instanceof y,"a version is said of a chapter, and this is not one")}};r(ad,"VersionSpecification");let pa=ad;Ch([h("a version is said of a chapter")],pa.prototype,"$saidOfAChapter");const sd=class sd extends vo{constructor(){super(...arguments),this.$artifact=void 0,this.$place=void 0}get version(){const e=this.$place;if(e!==void 0)return this.book.chapters.find(t=>Rd.slug(t.title?.name??"")===e)}get versionName(){return this.version?.title?.name??""}get name(){return this.versionName.replace(/ v\d+(?:-\d+)?$/u,"")||this.$identifier}get number(){return/ v(\d+)(?:-\d+)?$/u.exec(this.versionName)?.[1]??"1"}get kind(){const e=this.$type.replace(/^\./u,"");return e==="md"||e==="txt"||e===""?"document":e==="html"?"page":"code"}get shown(){return se(this)?.$shown===this}$Artifact(...e){this.$Code(...e),this.containers.replace(this,"pre","figure")}write(){const e=[...this.text].map((s,a)=>{const i=o(s);return n(i,{},a)}),t={__html:this.kind==="document"?Ph:Ah};return c(k,{children:[c("button",{type:"button",className:"pd-card","aria-pressed":this.shown,onClick:r(()=>this.press(),"onClick"),children:[n("span",{className:"pd-card-mark",dangerouslySetInnerHTML:t}),c("span",{className:"pd-card-words",children:[n("b",{children:this.name}),n("small",{children:`Click to open ${this.kind} · v${this.number}`})]})]}),n("figcaption",{children:e})]})}press(){const e=se(this);e!==void 0&&(e.$shown=e.$shown===this?void 0:this)}$Define(){super.$Define(),this.classes.add(this,"pd-artifact"),this.shown&&this.classes.add(this,"pa-open")}};r(sd,"$Artifact");let ot=sd;const od=class od extends vo{get sentence(){return z.copy(this.text)}get fileName(){return/“([^”]+)”/u.exec(this.sentence)?.[1]??"a file"}get extension(){return(this.fileName.split(".").pop()??"file").toUpperCase().slice(0,4)}get lineCount(){return this.names?this.contents.split(`
`).length:0}get shown(){return se(this)?.$shown===this}$Attachment(...e){this.$Code(...e),this.containers.replace(this,"pre","figure")}write(){const e=[...this.text].map((t,s)=>{const a=o(t);return n(a,{},s)});return c(k,{children:[c("button",{type:"button",className:"pd-chip","aria-pressed":this.shown,onClick:r(()=>this.press(),"onClick"),children:[n("span",{className:"pd-chip-mark",children:this.extension}),c("span",{className:"pd-chip-words",children:[n("b",{children:this.fileName}),n("small",{children:this.names?`${this.lineCount} lines`:"not carried by the export"})]})]}),n("figcaption",{children:e})]})}press(){const e=se(this);e!==void 0&&(e.$shown=e.$shown===this?void 0:this)}$Define(){super.$Define(),this.classes.add(this,"pd-attachment"),this.shown&&this.classes.add(this,"pa-open")}};r(od,"$Attachment");let nt=od;const cg=o(Vs),lg=o(ot),hg=o(nt),nd=class nd extends u{constructor(){super(...arguments),this.style=O.div`
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
    `}get shown(){return se(this)?.$shown}get artifacts(){return this.book?.messages.flatMap(e=>e.text.find(ot))??[]}$Pane(...e){this.$Writing(...e),this.containers.replace(this,"span",this.style)}neighbour(e,t){const s=Number(e.number)+t;return this.artifacts.find(a=>a.$artifact===e.$artifact&&Number(a.number)===s)}write(){const e=this.shown;if(e===void 0)return;const t=e instanceof ot?e:void 0,s=e instanceof nt?e:void 0,a=t?.version,i=a===void 0?void 0:o(a),d=t===void 0?void 0:this.neighbour(t,-1),f=t===void 0?void 0:this.neighbour(t,1),b=s===void 0?"":s.names?s.contents:"The export does not carry this upload; the name is all it kept.";return c(k,{children:[c("div",{className:"pd-pane-bar",children:[n("span",{className:"pd-pane-title",children:t?.name??s?.fileName}),n("span",{className:"pd-pane-kind",children:t?.kind??s?.extension.toLowerCase()}),n("button",{type:"button",className:"pd-pane-copy",onClick:r(m=>this.copy(m),"onClick"),children:"Copy"}),n("button",{type:"button",className:"pd-pane-close","aria-label":"close",onClick:r(()=>this.close(),"onClick"),children:"×"})]}),n("div",{className:"pd-pane-body",children:i===void 0?n("pre",{children:b}):n(i,{})}),t===void 0?void 0:c("div",{className:"pd-pane-foot",children:[c("span",{className:"pd-pane-version",children:[n("button",{type:"button",disabled:d===void 0,onClick:r(()=>this.show(d),"onClick"),children:"‹"}),n("span",{children:`v${t.number}`}),n("button",{type:"button",disabled:f===void 0,onClick:r(()=>this.show(f),"onClick"),children:"›"})]}),n("button",{type:"button",className:"pd-pane-download",onClick:r(()=>this.download(t),"onClick"),children:"Download"})]})]})}show(e){const t=se(this);t!==void 0&&e!==void 0&&(t.$shown=e)}close(){const e=se(this);e!==void 0&&(e.$shown=void 0)}copy(e){const t=e.currentTarget.closest(".pd-pane")?.querySelector(".pd-pane-body");navigator.clipboard?.writeText(t?.textContent??"")}download(e){const t=e.$type.replace(/^\./u,"")||"md",s=new Blob([e.contents],{type:"text/plain"}),a=document.createElement("a");a.href=URL.createObjectURL(s),a.download=`${e.name} v${e.number}.${t}`,a.click(),URL.revokeObjectURL(a.href)}$Define(){super.$Define(),this.classes.add(this,"pd-pane")}};r(nd,"$Pane");let Qs=nd;const Nh=o(Qs);var Ih=Object.defineProperty,Mh=Object.getOwnPropertyDescriptor,Th=r((p,e,t,s)=>{for(var a=Mh(e,t),i=p.length-1,d;i>=0;i--)(d=p[i])&&(a=d(e,t,a)||a);return a&&Ih(e,t,a),a},"__decorateClass$3");const rd=class rd extends ${constructor(){super(...arguments),this.specification=new ca}get name(){return E.reference(z.copy(this.text))?.name??""}get means(){return this.annotations.expressed(oe)}$Define(){super.$Define();const e=E.reference(z.copy(this.text));if(e===void 0)return;const t=o(w);this.annotations.add(this,n(t,{children:e.identifier}))}write(){return this.name}};r(rd,"$Account");let rt=rd;const id=class id extends v{$saidOfACover(e){l(e instanceof y&&e.is(T),"an account is said of a cover, and this is not one")}};r(id,"AccountSpecification");let ca=id;Th([h("an account is said of a cover")],ca.prototype,"$saidOfACover");const dd=class dd extends u{get cover(){return this.$cover??this.book?.cover}get account(){return this.cover?.annotations.expressed(rt)}write(){const e=this.account,t=o(j),s=o(Me),a=o(w);return c(k,{children:[c(t,{children:[n(s,{}),"account"]}),c(t,{children:[n(a,{children:e.means.identifier}),e.name]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-account-line")}};r(dd,"$AccountLine");let eo=dd;const fg=o(rt),Wh=o(eo);var Bh=Object.defineProperty,Hh=Object.getOwnPropertyDescriptor,Lh=r((p,e,t,s)=>{for(var a=Hh(e,t),i=p.length-1,d;i>=0;i--)(d=p[i])&&(a=d(e,t,a)||a);return a&&Bh(e,t,a),a},"__decorateClass$2");const pd=class pd extends ${constructor(){super(...arguments),this.specification=new la}get uuid(){return z.copy(this.text).trim()}write(){return null}};r(pd,"$Origin");let it=pd;const cd=class cd extends v{$saidOfACoverOrAMessage(e){l(e instanceof y&&e.is(T)||e instanceof H,"an origin is said of a cover or a message, and this is neither")}};r(cd,"OriginSpecification");let la=cd;Lh([h("an origin is said of a cover or a message")],la.prototype,"$saidOfACoverOrAMessage");const gg=o(it);var Rh=Object.defineProperty,Fh=Object.getOwnPropertyDescriptor,Eh=r((p,e,t,s)=>{for(var a=Fh(e,t),i=p.length-1,d;i>=0;i--)(d=p[i])&&(a=d(e,t,a)||a);return a&&Rh(e,t,a),a},"__decorateClass$1");const _h='<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linejoin="round" stroke-linecap="round"><path d="M4 1.5h5.5L13 5v9.5H4z"/><path d="M9.5 1.5V5H13M6 8h4M6 10.5h4"/></svg>',ld=class ld extends u{$Outline(...e){this.$Writing(...e),this.containers.replace(this,"span","div")}write(){const e=this.book,t=this.$asked;if(e===void 0||t===void 0)return;const s=o(j),a=o(w),i=t.text.find(H).filter(d=>d.is(aa));if(i.length!==0)return n("ol",{className:"pd-asked",children:i.map((d,f)=>{const b=e.placeOf(d),m=e.wordsOf(d).text;return n("li",{children:b===void 0?m:c(s,{children:[n(a,{children:b}),m]})},f)})})}$Define(){super.$Define(),this.classes.add(this,"pd-outline")}};r(ld,"$Outline");let to=ld;const hd=class hd extends me{get on(){return this.$attachment?.shown===!0}press(){this.$attachment?.press()}write(){const e=this.$attachment;if(e!==void 0)return c(k,{children:[n("span",{className:"pd-drawing",dangerouslySetInnerHTML:{__html:_h}}),n("span",{className:"pd-tab-name",children:e.fileName}),n("small",{children:e.names?`${e.lineCount} lines`:"not carried"})]})}$Define(){super.$Define(),this.classes.add(this,"pd-file-tab")}};r(hd,"$AttachmentTab");let ao=hd;const Gh=o(to),qh=o(ao),Sh=Gh,Uh=qh,$p="library-trail",kp=r(()=>{try{const p=typeof localStorage>"u"?null:localStorage.getItem($p);if(p===null)return;const e=JSON.parse(p);return e.from?.marking===void 0?void 0:e}catch{return}},"keptTrail"),fd=class fd extends D{write(){if(this.$href!==void 0)return n("a",{className:"pd-way-on-link",href:this.$href,target:"_blank",rel:"noopener",children:"in Claude"})}$Define(){super.$Define(),this.classes.add(this,"pd-way-on")}};r(fd,"$WayOn");let so=fd;const gd=class gd extends mt{container(e){return super.container({...e,onClick:r(()=>this.keep(),"onClick")})}keep(){const e=this.book,t=this.$entry instanceof y?this.$entry:this.chapter;if(e===void 0||t===void 0||typeof localStorage>"u")return;const s=e.pages.filter(b=>e.entries.includes(b)),a=s.indexOf(t),i=r(b=>{const m=b?.annotations.expressed(N)?.cover?.mention?.identifier;return b===void 0||m===void 0?void 0:{title:b.title?.name??"",href:m}},"placeOf"),d=e.means?.identifier??"",f={at:new Date().toISOString(),from:{page:d,title:e.title?.name??"",href:d,marking:op(e.cover)},to:i(t)?.href,within:{title:e.title?.name??"",index:a+1,of:s.length,prev:i(s[a-1]),next:i(s[a+1])},word:e.index?.$search??"",row:t.mention?.identifier};try{localStorage.setItem($p,JSON.stringify(f))}catch{return}}};r(gd,"$ProjectEntryOpen");let oo=gd;const ud=class ud extends _e{get project(){return this.book}get returned(){const e=this.project,t=this.$hit;return e!==void 0&&t!==void 0&&e.$trail!==void 0&&e.$trail.to===e.placeOf(t)}$ProjectResult(...e){this.$Result(...e),this[Lp]("layout").then(()=>{this.returned&&this.project?.land()})}container(e){return super.container(this.returned?{...e,className:`${e.className??""} pa-returned`}:e)}open(){return vp}};r(ud,"$ProjectResult");let no=ud;const bd=class bd extends Ee{result(e,t){const s=o(tf);return n(s,{chapter:this.chapter,hit:e},this.book.placeOf(e)??t)}};r(bd,"$ProjectResults");let ro=bd;const md=class md extends da{constructor(){super(...arguments),this.$trail=void 0}aboveThePages(){const e=o(af);return n(e,{chapter:this.table})}rows(e){Mo(this,e,vp);const t=o(ef);for(const s of e){const a=s.annotations.expressed(N)?.cover?.annotations.expressed(it)?.uuid;a!==void 0&&s.text.add(this,n(t,{href:`https://claude.ai/chat/${a}`}))}}arrive(){const e=kp();if(e===void 0||e.from.page!==this.means?.identifier||this.$trail?.at===e.at)return;this.$trail=e,e.word!==""&&this.index?.search(e.word);const t=e.row===void 0?void 0:this.chapterAt(e.row);t!==void 0&&t.classes.add(this,"pa-returned"),t!==void 0&&e.word===""&&this.land(t)}land(e){const t=e?.title;(e===void 0?document.querySelector(".pd-book .pd-result.pa-returned"):t===void 0?null:document.getElementById(String(t.id))?.closest(".pd-chapter"))?.scrollIntoView({block:"center"})}turn(){super.turn(),this.arrive()}};r(md,"$ClaudeProjectManual");let io=md;const $d=class $d extends At{constructor(){super(...arguments),this.$marking={drawing:"",declarations:""}}get marking(){return this.$marking}};r($d,"$TrailMark");let po=$d;const kd=class kd extends u{get conversation(){return this.book}$ProjectStrip(...e){this.$Writing(...e),this.containers.replace(this,"span","div")}write(){const e=this.conversation,t=e?.$trail;if(e===void 0||t===void 0)return;const s=o(j),a=o(w),i=o(Qh);return c(k,{children:[n(i,{marking:t.from.marking,children:n(a,{children:t.from.href})}),c("span",{className:"pd-strip-words",children:[c(s,{children:[n(a,{children:t.from.href}),t.from.title]}),n("span",{className:"pd-strip-place",children:`${t.within.index} of ${t.within.of}`})]}),c("span",{className:"pd-strip-neighbours",children:[t.within.prev===void 0?void 0:c(s,{children:[n(a,{children:t.within.prev.href}),`‹ ${t.within.prev.title}`]}),t.within.next===void 0?void 0:c(s,{children:[n(a,{children:t.within.next.href}),`${t.within.next.title} ›`]})]}),t.word===""?void 0:n("span",{className:"pd-strip-word",children:`you were searching “${t.word}”`}),c(s,{children:[n(a,{children:t.from.href}),"back to where I was"]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-project-strip")}};r(kd,"$ProjectStrip");let co=kd;const Yh=o(so),Zh=o(oo),Kh=o(no),Xh=o(ro);o(io);const Jh=o(co),Vh=o(po),Qh=Vh,ef=Yh,vp=Zh,tf=Kh,af=Xh,sf=Jh,vd=class vd extends ${constructor(){super(...arguments),this.specification=new ha}get name(){return E.reference(z.copy(this.text))?.name??""}get means(){return this.annotations.expressed(oe)}$Define(){super.$Define();const e=E.reference(z.copy(this.text));if(e===void 0)return;const t=o(w);this.annotations.add(this,n(t,{children:e.identifier}))}write(){return this.name}};r(vd,"$Project");let Ie=vd;const xd=class xd extends v{$saidOfACover(e){l(e instanceof y&&e.is(T),"a project is said of a cover, and this is not one")}};r(xd,"ProjectSpecification");let ha=xd;Eh([h("a project is said of a cover")],ha.prototype,"$saidOfACover");const yd=class yd extends u{get cover(){return this.$cover??this.book?.cover}get project(){return this.cover?.annotations.expressed(Ie)}write(){const e=this.project,t=o(j),s=o(Me),a=o(w);return c(k,{children:[c(t,{children:[n(s,{}),"project"]}),c(t,{children:[n(a,{children:e.means.identifier}),e.name]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-project-line")}};r(yd,"$ProjectLine");let lo=yd;const ug=o(Ie),of=o(lo),nf=of,wd=class wd extends ia{constructor(){super(...arguments),this.$shown=void 0,this.$trail=void 0}arrive(){const e=kp();e===void 0||e.to!==this.means?.identifier||this.$trail?.at===e.at||(this.$trail=e)}turn(){super.turn(),this.arrive()}get project(){return this.cover?.annotations.expressed(Ie)}get account(){return this.cover?.annotations.expressed(rt)}get origin(){return this.cover?.annotations.expressed(it)?.uuid}get subjectCover(){return this.coverOf(this.project?.means?.identifier)??super.subjectCover}get index(){return this.table?.annotations.expressed(I)}get searchHint(){return"a word in this conversation"}wordsOf(e){if(!(e instanceof H))return super.wordsOf(e);const t=this._words?.get(e);if(t!==void 0)return t;const s=e.speaker,a=s===void 0?"":E.reference(z.copy(s.text))?.name??z.copy(s.text),i=[...e.text].filter(f=>f!==s).map(f=>z.copy(f.text).replace(/\s+/gu," ").trim()).filter(f=>f!=="").join(" "),d={title:a,text:i,lower:`${a} ${i}`.toLowerCase()};return(this._words??=new Map).set(e,d),d}found(e){const t=e.trim().toLowerCase();return t===""?[]:this.messages.filter(s=>this.wordsOf(s).lower.includes(t))}countOfFound(e,t){return c(k,{children:[n("b",{children:e.length})," ",e.length===1?"message says":"messages say"," “",t,"”"]})}placeOf(e){if(!(e instanceof H))return super.placeOf(e);const t=e.annotations.expressed(dt)?.identifier;return t===void 0?void 0:this.placeWithin(`#${t}`)}sought(e){if(typeof CSS>"u"||!("highlights"in CSS)||typeof document>"u")return;const t=CSS.highlights;if(e===""){t.delete("pd-found");return}const s=[],a=e.toLowerCase(),i=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,{acceptNode:r(f=>f.parentElement?.closest(".pd-pages .pd-said")?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT,"acceptNode")});for(let f=i.nextNode();f!==null;f=i.nextNode()){const b=f.nodeValue?.toLowerCase()??"";for(let m=b.indexOf(a);m!==-1;m=b.indexOf(a,m+a.length))s.push(new StaticRange({startContainer:f,startOffset:m,endContainer:f,endOffset:m+e.length}))}const d=globalThis.Highlight;t.set("pd-found",new d(...s))}holds(){const e=o(jo),t=o(tp),s=o(Sh),a=this.open;return c(k,{children:[n(e,{chapter:this.table}),n(t,{chapter:this.table}),super.holds(),a===void 0||!this.body.includes(a)?void 0:n(s,{chapter:this.table,asked:a},a.mention?.identifier)]})}write(){const e=o(Nh),t=o(sf);return c(k,{children:[super.write(),n(t,{chapter:this.cover}),n(e,{chapter:this.cover})]})}$Bound(){const e=this.index;e!==void 0&&(e.$folded=!0,e.$counted=!0,e.$searched=!0);const t=o(va);for(const a of this.table?.text.find(A)??[])a.is(xe)||a.annotations.add(this,n(t,{}));const s=o(Uh);for(const a of e?.entries??[]){const i=M(a)?.identifier,d=i===void 0?void 0:this.chapterAt(i);if(d===void 0||!this.body.includes(d))continue;const f=d.text.find(H).flatMap(b=>b.text.find(nt)).filter(b=>b.names);f.length!==0&&a.text.add(this,...f.map((b,m)=>n(s,{attachment:b},m)))}super.$Bound()}me(){const e=o(nf),t=o(Wh);return c(k,{children:[super.me(),this.project===void 0?void 0:n(e,{cover:this.cover}),this.account===void 0?void 0:n(t,{cover:this.cover})]})}};r(wd,"$ClaudeConversation");let ho=wd;const xp=o(ho);o(xp,he)(Oh);o(xp,ae)(ge);var rf=Object.defineProperty,df=Object.getOwnPropertyDescriptor,J=r((p,e,t,s)=>{for(var a=s>1?void 0:s?df(e,t):e,i=p.length-1,d;i>=0;i--)(d=p[i])&&(a=(s?d(e,t,a):d(a))||a);return s&&a&&rf(e,t,a),a},"__decorateClass");const zd=class zd extends R{constructor(){super(...arguments),this.specification=new le}get entries(){return this._entries??(this._entries=this.text.find(y).filter(e=>e.is(U)&&e!==this.synopsis))}get groups(){return[...this.groupsKept().keys()]}get openGroup(){return this.$bookmark===void 0?void 0:this.groups.find(e=>e.mention!==void 0&&this.placeWithin(e.mention.identifier)===this.$bookmark)}get index(){return this.table?.annotations.expressed(I)}get open(){return this.$bookmark===void 0?void 0:this.chapterAt(this.$bookmark)}get laidOutChapters(){return[...super.laidOutChapters,...this.entries]}get pages(){return this._pages??(this._pages=[...this.entries].sort((e,t)=>P(t).localeCompare(P(e))))}get $bookmark(){return super.$bookmark}set $bookmark(e){super.$bookmark=e;const t=this.openGroup;for(const s of this.groups)s.$is=s===t?[]:[Co]}get searchHint(){return this.openGroup===void 0?"a word, over every conversation":"a word, within this part"}groupsKept(){if(this._groups!==void 0)return this._groups;const e=new Set(this.entries),t=new Map;this._groupOf=new Map;for(const s of this.table?.text.find(A)??[]){const a=s.text.find(u).map(i=>{const d=M(i)?.identifier;return d===void 0?void 0:this.chapterAt(d)}).filter(i=>i!==void 0&&e.has(i)).sort((i,d)=>P(d).localeCompare(P(i)));a.length>0&&t.set(s,a);for(const i of a)this._groupOf.set(i,s)}return this._groups=t}entriesOf(e){return this.groupsKept().get(e)??[]}groupOf(e){return this.groupsKept(),this._groupOf?.get(e)}found(e){const t=e.trim().toLowerCase();if(t==="")return[];const s=this.openGroup;return(s===void 0?this.pages:this.entriesOf(s)).filter(i=>this.wordsOf(i).lower.includes(t))}countOfFound(e,t){const s=this.openGroup,a=s===void 0?`of ${this.entries.length}`:`of ${this.entriesOf(s).length} in this part`;return c(k,{children:[n("b",{children:e.length})," ",e.length===1?"conversation":"conversations"," ",a," ",e.length===1?"says":"say"," “",t,"” in ",e.length===1?"its":"their"," title or synopsis"]})}sizeOf(e){return e.annotations.expressed(N)?.cover?.annotations.expressed(pe)?.shown??0}projectOf(e){return this.entriesOf(e)[0]?.annotations.expressed(N)?.cover?.annotations.expressed(Ie)}aboveThePages(){if((this.index?.$search??"").trim()!==""){const t=o(uf);return n(t,{chapter:this.table})}if(this.openGroup!==void 0)return;const e=o(gf);return n("div",{className:"pd-parts",children:this.groups.map((t,s)=>n(e,{chapter:this.table,part:t},s))})}head(){const e=o(this.cover),t=o(mf),s=o(mp),a=o(jo);return c(k,{children:[n(e,{}),n(t,{chapter:this.cover}),n(s,{chapter:this.cover}),n(a,{chapter:this.cover})]})}$Bound(){this._chapterByPlace=this.chapterByPlace();const e=this.index;e!==void 0&&(e.$folded=!0,e.$counted=!0,e.$dated=!0,e.$searched=!0);const t=o(va);for(const s of this.table?.text.find(A)??[])s.annotations.add(this,n(t,{}));for(const s of this.groups)Mo(this,this.entriesOf(s));super.$Bound()}};r(zd,"$Register");let ce=zd;J([te()],ce.prototype,"_entries",2);J([te()],ce.prototype,"_groups",2);J([te()],ce.prototype,"_pages",2);J([te()],ce.prototype,"_groupOf",2);const Od=class Od extends u{get register(){return this.book}$PartCard(...e){this.$Writing(...e),this.containers.replace(this,"span","div")}write(){const e=this.register,t=this.$part;if(e===void 0||t===void 0)return;const s=o(j),a=o(w),i=o(Do),d=o(ka),f=e.entriesOf(t),b=f[0],m=t.mention===void 0?void 0:e.placeWithin(t.mention.identifier);return c(k,{children:[n(s,{children:n("span",{className:"pd-part-name",children:t.canonical?.name})}),c("span",{className:"pd-part-count",children:[f.length," ",f.length===1?"conversation":"conversations"]}),b===void 0?void 0:c("span",{className:"pd-part-latest",children:[n("span",{children:b.title?.name}),n(i,{entry:b})]}),m===void 0?void 0:n(d,{children:n(a,{children:m})})]})}$Define(){super.$Define(),this.classes.add(this,"pd-part-card")}};r(Od,"$PartCard");let fo=Od;const jd=class jd extends Ee{result(e,t){const s=this.book,a=o(bf);return n(a,{chapter:this.chapter,entry:e,named:s.openGroup===void 0},e.mention?.identifier??t)}};r(jd,"$RegisterResults");let go=jd;const Dd=class Dd extends _e{constructor(){super(...arguments),this.$named=!1}get register(){return this.book}write(){const e=this.register,t=this.$entry;if(e===void 0||t===void 0)return;o(j);const s=o(w),a=o(Do),i=o(ka),d=e.wordsOf(t),f=e.index?.$search.trim()??"",b=t.annotations.expressed(N)?.cover?.mention?.identifier,m=this.$named?e.groupOf(t)?.canonical?.name:void 0;return c(k,{children:[n("span",{className:"pd-result-title",children:$t(d.title,f)}),c("span",{className:"pd-result-exchanges",children:[e.sizeOf(t)," exchanges"]}),n(a,{entry:t}),c("span",{className:"pd-result-synopsis",children:[m===void 0?void 0:n("span",{className:"pd-result-part",children:m}),$t(Qd(d.text,f),f)]}),b===void 0?void 0:n(i,{children:n(s,{children:b})})]})}};r(Dd,"$RegisterResult");let uo=Dd;const Cd=class Cd extends u{get register(){return this.book}$RegisterHead(...e){this.$Writing(...e),this.containers.replace(this,"span","div")}write(){const e=this.register;if(e===void 0)return;const t=o(j),s=o(w),a=e.coverOf(e.subject?.means?.identifier),i=e.openGroup,d=i===void 0?e.entries:e.entriesOf(i),f=d.reduce((C,S)=>C+e.sizeOf(S),0),b=d.map(P).filter(C=>C!=="").sort(),m=b.length===0?"":`${ee(d.find(C=>P(C)===b[0]))} to ${ee(d.find(C=>P(C)===b[b.length-1]))}`,x=i===void 0?void 0:e.projectOf(i);return c(k,{children:[c("span",{className:"pd-crumbs",children:[a===void 0?void 0:c(t,{children:[n(s,{children:a.mention.identifier}),a.title?.name]}),n("i",{children:"/"}),i===void 0?n(t,{children:e.title?.name}):c(k,{children:[c(t,{children:[n(s,{children:e.means.identifier}),e.title?.name]}),n("i",{children:"/"}),n(t,{children:i.canonical?.name})]})]}),i===void 0?void 0:n("span",{className:"pd-part-title",children:i.canonical?.name}),c("span",{className:"pd-report",children:[c("span",{children:[n("b",{children:d.length})," conversations"]}),i===void 0?c("span",{children:[n("b",{children:e.groups.length})," parts"]}):void 0,c("span",{children:[n("b",{children:f.toLocaleString("en-US")})," exchanges"]}),n("span",{children:m}),x?.means===void 0?void 0:c(t,{children:[n(s,{children:x.means.identifier}),"the project's page"]})]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-register-head")}};r(Cd,"$RegisterHead");let bo=Cd;const Pd=class Pd extends st{constructor(){super(...arguments),this.shown=[]}defines(e){super.defines(e);const t=this.book,s=t.openGroup;s!==void 0&&e.classes.add(this,"pa-part-open");const a=s===void 0?[]:t.entriesOf(s);for(const i of this.shown)a.includes(i)||i.classes.revert(e);for(const i of a)[...i.classes].includes("pa-open")||i.classes.add(e,"pa-open");this.shown=a}paging(){return g`
            .pd-book.pa-turned .pa-page:not(.pa-open) { display: none; }
            .pd-book:not(.pa-turned) .pd-pages .pd-chapter.pa-page.pa-volume:not(.pa-open) { display: none; }
        `}areas(){return g`
            ${super.areas()}
            .pd-book .pd-head .pd-register-head { display: contents; }
            .pd-book.pa-part-open .pd-head .pd-chapter.pa-cover > a { display: none; }
            .pd-book .pd-head .pd-part-title { order: 2; grid-column: 1 / -1; margin: 0; font-family: ${({theme:e})=>e.serif}; font-size: calc(2.1429 * ${({theme:e})=>e.size}); font-weight: 600; line-height: 1.1; letter-spacing: -0.01em; color: ${({theme:e})=>e.heading}; }
            .pd-book .pd-head .pd-report .pd-word.pa-reference { color: ${({theme:e})=>e.accent}; text-decoration: none; }
            ${this.cards()}
            .pd-book .pd-pages .pd-result .pd-result-exchanges { grid-area: exchanges; font-family: ${({theme:e})=>e.font}; font-size: calc(0.8571 * ${({theme:e})=>e.size}); line-height: 20px; color: ${({theme:e})=>e.faint}; white-space: nowrap; font-variant-numeric: tabular-nums; }
            .pd-book .pd-pages .pd-result .pd-result-part { display: inline-block; margin-inline-end: calc(${({theme:e})=>e.space} / 3); padding: 0 6px; border-radius: 4px; background: ${({theme:e})=>e.tint}; font-family: ${({theme:e})=>e.font}; font-size: calc(0.7857 * ${({theme:e})=>e.size}); font-weight: 500; line-height: 18px; color: ${({theme:e})=>e.soft}; vertical-align: 1px; }
            @media (max-width: ${({theme:e})=>e.narrow}) {
                .pd-book .pd-pages .pd-result .pd-result-exchanges { display: none; }
            }
        `}cards(){return g`
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
        `}};r(Pd,"$RegisterLayout");let fa=Pd;J([te()],fa.prototype,"shown",2);const Ad=class Ad extends F{$everyEntryStandsForABook(e){const t=e.entries.find(s=>s.annotations.expressed(U)?.means===void 0);l(t===void 0,`every entry of a register stands for a book, holding its synopsis, and "${t?.title?.name}" stands for none`)}$everyEntryIsDated(e){const t=e.entries.find(s=>!s.is(_));l(t===void 0,`every entry of a register is dated, and "${t?.title?.name}" is not`)}$everyEntryIsListedUnderAPart(e){const t=new Set(e.groups.flatMap(a=>e.entriesOf(a))),s=e.entries.find(a=>!t.has(a));l(s===void 0,`every entry of a register is listed under a part of its table, and "${s?.title?.name}" is under none`)}$onlyAChapterAppends(e){const t=[...e.chapters,...e.entries];l(e.text.find(y).every(s=>t.includes(s)||!s.is(Q)),"only an ordinary chapter or an entry files a file, and here a cover, a synopsis or a table of contents files one")}};r(Ad,"RegisterSpecification");let le=Ad;J([h("every entry of a register stands for a book, holding its synopsis")],le.prototype,"$everyEntryStandsForABook",1);J([h("every entry of a register is dated")],le.prototype,"$everyEntryIsDated",1);J([h("every entry of a register is listed under a part of its table")],le.prototype,"$everyEntryIsListedUnderAPart",1);J([h("only an ordinary chapter or an entry files a file")],le.prototype,"$onlyAChapterAppends",1);const To=o(ce),pf=o(fo),cf=o(go),lf=o(uo),hf=o(bo),ff=o(fa),gf=pf,uf=cf,bf=lf,mf=hf;o(To,he)(lp);o(To,ae)(ge);o(To,ya)(ff);const $f=r(()=>c(Fd,{children:[n(Gc,{}),n(rp,{ground:"#eef5f6",band:"#c3e3e6",bandInk:"#1c565c",foot:"#8db9bd",footInk:"#153e43",ink:"#1f5a60"}),n(ip,{x:"-46",y:"-13"}),n(Ed,{children:"[Dougs Library](/dougs-library/)"}),n(_d,{children:"[Doug](/dougs-story/)"}),n(Gd,{children:"[Library](/dougs-library/)"}),n(qd,{children:"[The Library](/dougs-library/)"}),c(Sd,{children:[n(np,{}),n(Ud,{children:`<svg viewBox="0 0 64 64" class="pd-illustration"><path class="light" d="M9 7h46v50H9z"/><path d="M9 7h46v50H9zM9 24h46M9 41h46"/><path class="fill" d="M13 11h5v13h-5zM20 9h4v15h-4zM26 13h6v11h-6zM34 10h4v14h-4zM40 14h6v10h-6z"/><path d="M48 24l4-12 3 1-4 11z"/><path class="fill" d="M13 28h4v13h-4zM19 30h7v11h-7zM28 27h4v14h-4zM34 31h5v10h-5zM41 28h6v13h-6zM49 29h3v12h-3z"/><path class="fill" d="M13 46h6v11h-6zM21 44h4v13h-4zM27 47h8v10h-8zM37 45h4v12h-4zM43 48h6v9h-6z"/><path d="M50 57l3-11 3 1-3 10z"/></svg>
`})]})]}),"LibraryCover"),bg=r(()=>c(Fd,{children:[n(Gl,{}),n(Hp,{}),n(qc,{children:$f()}),n(rp,{ground:"#f5eedf",band:"#d9c3a3",bandInk:"#4a3626",foot:"#a3b6cc",footInk:"#2a4262",ink:"#2f4a6a"}),n(ip,{x:"-54",y:"-33"}),n(Ed,{children:"[Dougs Story](/dougs-story/)"}),n(_d,{children:"[Doug](/dougs-story/)"}),n(Gd,{children:"[Library](/dougs-library/)"}),n(qd,{children:"[The Librarian](/dougs-story/)"}),c(Sd,{children:[n(np,{}),n(Ud,{children:`<svg viewBox="0 0 64 64" class="pd-illustration"><path class="light" d="M8 13h23v38H8zM33 13h23v38H33z"/><path d="M8 13h23v38H8zM33 13h23v38H33z"/><path d="M13 21h13M13 27h13M13 33h9M38 21h13M38 27h13M38 33h13M38 39h8"/><path class="fill" d="M15 55 45 25l4 4-30 30-6 2z"/><path d="M15 55 45 25l4 4-30 30-6 2zM43 27l4 4M17 53l2 2"/></svg>
`})]})]}),"StoryCover");export{ho as $,fg as A,Gc as B,pg as C,Uf as D,Ef as E,_f as F,Nf as G,If as H,Pf as I,Gl as J,Vf as K,$f as L,og as M,Gf as N,gg as O,sg as P,ng as Q,qf as R,tg as S,Zf as T,Kf as U,rg as V,ip as W,Bf as X,Jf as Y,Xf as Z,Sf as _,qc as a,Ts as a0,Wf as a1,Tf as a2,Of as a3,zf as a4,bg as b,rp as c,ag as d,ig as e,dg as f,ug as g,np as h,hg as i,Af as j,lg as k,cg as l,Ps as m,eg as n,Rf as o,Lf as p,Yf as q,io as r,Mf as s,Hf as t,Df as u,jf as v,Cf as w,Tt as x,Qf as y,Ff as z};
