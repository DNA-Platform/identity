var Pp=Object.defineProperty;var o=(d,e)=>Pp(d,"name",{value:e,configurable:!0});import{$ as s,selection as x,$check as l,inert as Ki}from"@dna-platform/chemistry";import{$Theme as Cp,specify as h,$Annotation as b,$Paragraph as g,$Author as Ss,Word as D,Reference as w,$Subject as Ji,$Topic as Qi,AnnotationSpecification as u,$Word as z,$Format as F,html as O,$Chapter as y,binder as L,$Svg as at,Code as Ap,$Section as A,$Append as Y,$Content as Yi,$TableOfContents as J,$Parenthetical as Mp,$Composition as Np,$Image as eo,$Reference as S,$Cover as M,$Synopsis as E,CoverSpecification as Ip,$Paginated as Tp,Self as mt,$Book as Hp,reflection as Bp,BookSpecification as Wp,Theme as re,$Date as ao,$Referent as tt,$SelfReference as Vi,$Writing as Lp,$Heading as Si,$Means as Rp,Referent as Fp,identifier as ep,SectionSpecification as _p,$Code as to,highlighting as Ep,Chapter as st,Title as ot,Author as nt,Subject as rt,About as it,Paragraph as pt,Svg as dt,Autobiography as qp}from"@dna-platform/public";import{jsxs as c,Fragment as k,jsx as r}from"react/jsx-runtime";import{css as f}from"styled-components";const bo=class bo extends Cp{constructor(){super(...arguments),this.font="'Inter', system-ui, sans-serif",this.prose="'Inter', system-ui, sans-serif",this.mono="'JetBrains Mono', ui-monospace, monospace",this.size="0.875rem",this.leading="1.6",this.measure="44rem",this.spreadColumn="15.5rem",this.space="1.5rem",this.holdsColumn="240px",this.barHeight="50px",this.beat="320ms",this.narrow="48rem",this.phoneWidth="390px",this.colour="#4e9eb9",this.accent="#166178",this.bar="#0c1b1f",this.barInk="#ffffff",this.barDim="#a9bcc1",this.barOn="rgba(255, 255, 255, 0.11)",this.barLine="#1d3339",this.mark="#c8f4fb",this.side="#e3f5fa",this.sideInk="#10252c",this.sideDim="#516770",this.sideOn="#ffffff",this.sideLine="#cbe6ee",this.night="#0c1b1f",this.deep="#14323c",this.blue="#166178",this.sea="#4e9eb9",this.sky="#8fc8dc",this.opal="#c8f4fb",this.pale="#e3f5fa",this.mist="#f1f7f9",this.white="#ffffff",this.ink="#10252c",this.soft="#516770",this.line="#dbe7ec",this.me="#e8590c",this.wash="linear-gradient(105deg, #e2f6fb 0%, #ecf0fd 52%, #fae9f4 100%)",this.serif="'Source Serif 4', Georgia, serif",this.between="'Source Sans 3', 'Inter', system-ui, sans-serif",this.bookPaper="#fbf9f3",this.bookInk="#29251d",this.heading="#10252c",this.capital="#166178",this.lit="#166178",this.faint="#8792a2",this.paper="#ffffff",this.panel="#f1f7f9",this.rule="#dbe7ec",this.edge="transparent",this.tint="#e3f5fa",this.dusk="#14323c",this.glow="#cfe6e3",this.dim="#4f7672",this.keyword="#8ad7ff",this.string="#ffd48a",this.type="#9be3d6",this.comment="#5f8a86",this.haze="#a9bcc1",this.glass="rgba(255, 255, 255, 0.62)",this.binding="linear-gradient(160deg, #16303a, #0c1b1f)",this.spine="inset 5px 0 0 rgba(0, 0, 0, 0.14), inset 6px 0 0 rgba(255, 255, 255, 0.12), 0 10px 20px -10px rgba(0, 0, 0, 0.45)",this.shadow="0 0.75rem 1.4rem -0.9rem rgba(12, 27, 31, 0.55)",this.volume="11.5rem",this.cover="8.25rem",this.card="18rem",this.barLight="#ffffff",this.barMid="#f1f7f9",this.barDeep="#e3f5fa",this.barShadow="none",this.sideLight="#ffffff",this.sideDeep="#e3f5fa",this.codeGround="#f1f7f9",this.hairline="1px",this.stroke="2px",this.rise="-1px",this.gloss="none",this.ring="0 0 0 2px #c8f4fb",this.decisionShadow="none",this.photo="7rem",this.radius="0.375rem",this.barTint="#ffffff",this.skyInk="#166178",this.lift="inset 5px 0 0 rgba(0, 0, 0, 0.14), inset 6px 0 0 rgba(255, 255, 255, 0.12), 0 14px 24px -12px rgba(0, 0, 0, 0.5)",this.openSpine="inset 7px 0 0 rgba(0, 0, 0, 0.14), inset 8px 0 0 rgba(255, 255, 255, 0.12), 0 12px 22px -14px rgba(0, 0, 0, 0.5)",this.sans="'Inter', system-ui, sans-serif",this.muted="#516770",this.bubble="rgba(16, 37, 44, 0.05)",this.shade="rgba(16, 37, 44, 0.03)",this.pill="#166178",this.column="48rem",this.style=x.div`${this.parts()}`}parts(){return[this.page(),this.writing(),this.links(),this.figures(),this.listings(),this.switches(),this.turns(),this.illustrations(),this.marks(),this.library(),this.head(),this.holds(),this.context(),this.tones()]}page(){return f`
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
        `}};o(bo,"$LibraryBookTheme");let ee=bo;const Gp=s(ee);var Up=Object.defineProperty,Yp=Object.getOwnPropertyDescriptor,Zp=o((d,e,a,n)=>{for(var t=Yp(e,a),i=d.length-1,p;i>=0;i--)(p=d[i])&&(t=p(e,a,t)||t);return t&&Up(e,a,t),t},"__decorateClass$s");const uo=class uo extends b{constructor(){super(...arguments),this.specification=new Se}defines(e){e.classes.add(this,"pa-label")}erase(e){e.classes.revert(this)}};o(uo,"$Label");let $t=uo;const mo=class mo extends u{$saidOfAWord(e){l(e instanceof z,"label is said of a word, and this is not one")}};o(mo,"LabelSpecification");let Se=mo;Zp([h("label is said of a word")],Se.prototype,"$saidOfAWord");const ze=s($t),$o=class $o extends g{get cover(){return this.$cover??this.book?.cover}write(){const e=this.cover.annotations.expressed(Ss),a=s(D),n=s(ze),t=s(w);return c(k,{children:[c(a,{children:[r(n,{}),"by"]}),c(a,{children:[r(t,{children:e.means.identifier}),e.name]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-byline")}};o($o,"$Byline");let kt=$o;const ko=class ko extends g{get cover(){return this.$cover??this.book?.cover}write(){const e=this.cover.annotations.expressed(Ji),a=s(D),n=s(ze),t=s(w);return c(k,{children:[c(a,{children:[r(n,{}),"subject"]}),c(a,{children:[r(t,{children:e.means.identifier}),e.name]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-subject-line")}};o(ko,"$SubjectLine");let vt=ko;const vo=class vo extends g{get cover(){return this.$cover??this.book?.cover}get topics(){return this.cover?.annotations.find(Qi)??[]}write(){const e=s(D),a=s(ze),n=s(w);return c(k,{children:[c(e,{children:[r(a,{}),"topic"]}),this.topics.map((t,i)=>c(e,{children:[r(n,{children:t.means.identifier}),t.name]},i))]})}$Define(){super.$Define(),this.classes.add(this,"pd-topic-line")}};o(vo,"$TopicLine");let yt=vo;const ap=s(kt),Xp=s(vt),Kp=s(yt);var Jp=Object.defineProperty,Qp=Object.getOwnPropertyDescriptor,Vp=o((d,e,a,n)=>{for(var t=Qp(e,a),i=d.length-1,p;i>=0;i--)(p=d[i])&&(t=p(e,a,t)||t);return t&&Jp(e,a,t),t},"__decorateClass$r");const yo=class yo extends u{$saidOfABook(e){l(e instanceof R,"this is said of a book of this library, and here it is said of something else")}};o(yo,"OfABookSpecification");let H=yo;Vp([h("this is said of a book of this library")],H.prototype,"$saidOfABook");const xo=class xo extends z{get on(){return[this.book.$is].flat().includes(this.$annotation)}$Switch(...e){this.$Writing(...e),this.containers.replace(this,"span","button")}container(e){return super.container({type:"button","aria-pressed":this.on,onClick:o(()=>this.press(),"onClick"),...e})}press(){const e=this.book,a=[e.$is].flat();e.$is=this.on?a.filter(n=>n!==this.$annotation):[this.$annotation,...a]}$Define(){super.$Define(),this.classes.add(this,"pd-switch")}};o(xo,"$Switch");let De=xo;const wo=class wo extends De{press(){const e=this.book,a=[e.$is].flat().filter(n=>!this.$family.includes(n));e.$is=[this.$annotation,...a]}};o(wo,"$Tab");let je=wo;const ct=s(De),Sp=s(je);var ed=Object.defineProperty,ad=Object.getOwnPropertyDescriptor,tp=o((d,e,a,n)=>{for(var t=ad(e,a),i=d.length-1,p;i>=0;i--)(p=d[i])&&(t=p(e,a,t)||t);return t&&ed(e,a,t),t},"__decorateClass$q");const zo=class zo extends F{constructor(){super(...arguments),this.specification=new Pe,this.style=x.div`
        .pa-coloured { --colour: ${e=>e.$colour}; }
    `}get colour(){return O.copy(this.text).trim()}$Coloured(...e){this.$Format(...e);const a=this.style;this._painted=n=>r(a,{$colour:this.colour,...n})}defines(e){e.classes.add(this,"pa-coloured"),e.containers.add(this,this._painted)}erase(e){e.classes.revert(this),e.containers.revert(this)}};o(zo,"$Coloured");let ae=zo;const Oo=class Oo extends u{$saidOfAChapterOrAParagraph(e){l(e instanceof y||e instanceof g,"coloured is said of a chapter or a paragraph, and this is neither")}$givenItsColour(e){l(/^#[0-9a-f]{6}$/iu.test(e.annotations.expressed(ae)?.colour??""),"coloured is given its colour as six hex digits, and this one was given something else")}};o(Oo,"ColouredSpecification");let Pe=Oo;tp([h("coloured is said of a chapter or a paragraph")],Pe.prototype,"$saidOfAChapterOrAParagraph");tp([h("coloured is given its colour")],Pe.prototype,"$givenItsColour");s(ae);var td=Object.defineProperty,sd=Object.getOwnPropertyDescriptor,so=o((d,e,a,n)=>{for(var t=sd(e,a),i=d.length-1,p;i>=0;i--)(p=d[i])&&(t=p(e,a,t)||t);return t&&td(e,a,t),t},"__decorateClass$p");const Do=class Do extends F{constructor(){super(...arguments),this.specification=new le}get identifier(){return L.reference(O.copy(this.text))?.identifier??""}get name(){return L.reference(O.copy(this.text))?.name??""}get entry(){return this.book?.chapterAt(this.identifier)}get drawing(){const e=this.entry?.text.find(g).flatMap(a=>a.text.find(at))[0];return e===void 0?"":O.copy(e.text).trim()}get colour(){return this.entry?.annotations.expressed(ae)?.colour??""}$Keyed(...e){this.$Format(...e);const a=s(od);this._layer=n=>c("div",{...n,children:[r(a,{keyed:this}),n.children]})}defines(e){e.classes.add(this,"pa-keyed"),e.containers.add(this,this._layer)}erase(e){e.classes.revert(this),e.containers.revert(this)}};o(Do,"$Keyed");let U=Do;const jo=class jo extends z{constructor(){super(...arguments),this.style=x.span`
        --colour: ${e=>e.$colour};
    `}$Icon(...e){this.$Writing(...e);const a=this.style;this._painted=n=>r(a,{$colour:this.$keyed?.colour??"",...n}),this.containers.replace(this,"span",this._painted)}write(){return r("span",{className:"pd-drawing",role:"img","aria-label":this.$keyed?.name,dangerouslySetInnerHTML:{__html:this.$keyed?.drawing??""}})}$Define(){super.$Define(),this.classes.add(this,"pd-icon")}};o(jo,"$Icon");let xt=jo;const Po=class Po extends u{$saidOfAChapter(e){l(e instanceof y,"keyed is said of a chapter, and this is not one")}$namesAnEntry(e){const a=e.annotations.expressed(U)?.entry;l(a!==void 0&&a.annotations.expressed(U)?.entry===a,"keyed names an entry of the key, a chapter of this book keyed as itself, and this one names something else")}$entryHoldsItsDrawingAndColour(e){const a=e.annotations.expressed(U)?.entry;a!==void 0&&l(a.text.find(g).flatMap(n=>n.text.find(at)).length===1&&a.is(ae),"an entry of the key holds one drawing and its colour, and this one holds something else")}};o(Po,"KeyedSpecification");let le=Po;so([h("keyed is said of a chapter")],le.prototype,"$saidOfAChapter");so([h("keyed names an entry of the key")],le.prototype,"$namesAnEntry");so([h("an entry of the key holds one drawing and its colour")],le.prototype,"$entryHoldsItsDrawingAndColour");s(U);const sp=s(xt),od=sp;var nd=Object.defineProperty,rd=Object.getOwnPropertyDescriptor,id=o((d,e,a,n)=>{for(var t=rd(e,a),i=d.length-1,p;i>=0;i--)(p=d[i])&&(t=p(e,a,t)||t);return t&&nd(e,a,t),t},"__decorateClass$o");const pd={tsx:"typescript",ts:"typescript",mjs:"javascript",js:"javascript",css:"css",html:"xml",svg:"xml",json:"json",md:"markdown"},dd='<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"><path d="M6 4.5 3.5 8 6 11.5M10 4.5 12.5 8 10 11.5"/></svg>',Oe=o(d=>`${d.$identifier}${d.$type}`,"fileNameOf"),cd=o(d=>d===void 0?[]:O.copy(d.text).split(`
`),"fileLinesOf"),op=o(d=>d?.chapter?.annotations.expressed(P),"spreadOf"),Co=class Co extends g{constructor(){super(...arguments),this.$family=[]}get name(){return this.$file===void 0?"":Oe(this.$file)}get language(){return pd[(this.$file?.$type??"").replace(/^\./u,"")]??""}get spread(){return op(this.$file)}get chapter(){return this.$file?.chapter??super.chapter}$FileListing(...e){this.$Writing(...e),this.containers.replace(this,"span","div")}container(e){return super.container({onClick:o(()=>this.press(),"onClick"),...e})}press(){if(this.$filePanelState===void 0)return;const e=this.book,a=[e.$is].flat().filter(n=>!this.$family.includes(n));e.$is=[this.$filePanelState,...a]}write(){const e=s(D),a=s(Ap);return c(k,{children:[r(e,{children:this.name}),r(a,{identifier:this.$file?.$identifier,type:this.$file?.$type,language:this.language,numbered:!0})]})}$Define(){super.$Define(),this.classes.add(this,"pd-file-listing");const e=s(fd);this.annotations.add(this,r(e,{}))}};o(Co,"$FileListing");let ea=Co;const Ao=class Ao extends b{constructor(){super(...arguments),this.specification=new aa}defines(e){const a=e;a.$file!==void 0&&a.spread?.openFile===a.$file&&e.classes.add(this,"pa-open")}erase(e){e.classes.revert(this)}};o(Ao,"$OpenListing");let wt=Ao;const Mo=class Mo extends u{$isAFileListing(e){l(e instanceof ea,"an open listing is a file listing, and this is not one")}};o(Mo,"OpenListingSpecification");let aa=Mo;id([h("an open listing is a file listing")],aa.prototype,"$isAFileListing");const No=class No extends je{constructor(){super(...arguments),this.$skeleton=!1,this.style=x.button`
        --colour: ${e=>e.$colour};
    `}get on(){const e=this.$file?.chapter;return e!==void 0&&e===this.book.open&&this.spread?.openFile===this.$file}get name(){return this.$file===void 0?"":Oe(this.$file)}get spread(){return op(this.$file)}get colour(){return this.$file?.chapter?.annotations.expressed(U)?.colour??""}get lines(){return cd(this.$file)}get chapter(){return this.$file?.chapter??super.chapter}$FileTab(...e){this.$Switch(...e),this.containers.replace(this,"button",this.style)}container(e){return super.container({$colour:this.colour,...e})}press(){const e=this.spread;e!==void 0&&(e.$openFile=this.$file),this.$annotation!==void 0&&super.press()}write(){return c(k,{children:[r("span",{className:"pd-drawing",dangerouslySetInnerHTML:{__html:dd}}),r("span",{className:"pd-tab-name",children:this.name}),this.$skeleton?r("span",{className:"pd-skeleton",children:this.lines.slice(0,14).map((e,a)=>r("i",{style:{width:`${Math.max(12,Math.min(100,e.length*2.2))}%`}},a))}):void 0]})}$Define(){super.$Define(),this.classes.add(this,"pd-file-tab")}};o(No,"$FileTab");let zt=No;const ld=s(ea),hd=s(wt),oo=s(zt),fd=hd;var gd=Object.defineProperty,bd=Object.getOwnPropertyDescriptor,ud=o((d,e,a,n)=>{for(var t=bd(e,a),i=d.length-1,p;i>=0;i--)(p=d[i])&&(t=p(e,a,t)||t);return t&&gd(e,a,t),t},"__decorateClass$n");const Va=class Va extends b{constructor(){super(...arguments),this.specification=new H}defines(e){for(const a of e.annotations.after(this))a instanceof Va&&e.annotations.express(a,!1);e.classes.add(this,"pa-file-panel-state")}erase(e){e.classes.revert(this)}};o(Va,"$FilePanelState");let he=Va;const Io=class Io extends he{defines(e){super.defines(e),e.classes.add(this,"pa-code-forward")}};o(Io,"$CodeForward");let Ot=Io;const To=class To extends he{defines(e){super.defines(e),e.classes.add(this,"pa-words-forward")}};o(To,"$WordsForward");let Dt=To;const Ho=class Ho extends he{defines(e){super.defines(e),e.classes.add(this,"pa-split")}};o(Ho,"$Split");let jt=Ho;const Bo=class Bo extends b{constructor(){super(...arguments),this.specification=new H}defines(e){e.classes.add(this,"pa-light-code")}erase(e){e.classes.revert(this)}};o(Bo,"$LightCode");let Pt=Bo;const Wo=class Wo extends b{constructor(){super(...arguments),this.specification=new H}defines(e){e.classes.add(this,"pa-wrapped-code")}erase(e){e.classes.revert(this)}};o(Wo,"$WrappedCode");let Ct=Wo;const Lo=class Lo extends b{constructor(){super(...arguments),this.specification=new H}defines(e){e.classes.add(this,"pa-numbered-code")}erase(e){e.classes.revert(this)}};o(Lo,"$NumberedCode");let At=Lo;const Ro=class Ro extends b{constructor(){super(...arguments),this.specification=new sa}defines(e){e.classes.add(this,"pa-brief")}erase(e){e.classes.revert(this)}};o(Ro,"$Brief");let ta=Ro;const Fo=class Fo extends u{$saidOfAParagraph(e){l(e instanceof g,"brief is said of a paragraph, and this is not one")}};o(Fo,"BriefSpecification");let sa=Fo;ud([h("brief is said of a paragraph")],sa.prototype,"$saidOfAParagraph");s(he);const no=s(Ot),ro=s(Dt),Ce=s(jt),md=s(Pt),$d=s(Ct),np=s(At);s(ta);const _o=class _o extends g{constructor(){super(...arguments),this.style=x.div`
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
    `}get spread(){return this.chapter?.annotations.expressed(P)}$FileRail(...e){this.$Writing(...e),this.containers.replace(this,"span",this.style)}write(){const e=s(oo),a=this.spread;if(a!==void 0)return a.files.map(n=>r(e,{file:n,annotation:Ce,family:a.filePanelStates,skeleton:!0},Oe(n)))}$Define(){super.$Define(),this.classes.add(this,"pd-file-rail")}};o(_o,"$FileRail");let Mt=_o;const Eo=class Eo extends je{constructor(){super(...arguments),this.style=x.button`
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
    `}get paragraphs(){return(this.chapter?.text.find(A)??[]).flatMap(e=>e.text.find(g)).slice(0,16).map(e=>O.copy(e.text))}$FilePanelGrip(...e){this.$Switch(...e),this.containers.replace(this,"button",this.style)}write(){return r("span",{className:"pd-skeleton",children:this.paragraphs.map((e,a)=>r("i",{style:{width:`${Math.max(25,Math.min(100,e.length/4))}%`}},a))})}$Define(){super.$Define(),this.classes.add(this,"pd-file-panel-grip")}};o(Eo,"$FilePanelGrip");let Nt=Eo;const kd=s(Mt),vd=s(Nt),qo=class qo extends g{constructor(){super(...arguments),this.style=x.div`
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
    `}get spread(){return this.chapter?.annotations.expressed(P)}$FilePanel(...e){this.$Writing(...e),this.containers.replace(this,"span",this.style)}write(){const e=s(wd),a=s(ld),n=this.spread;if(n!==void 0)return c(k,{children:[r(e,{chapter:this.chapter}),r("div",{className:"pd-file-listings",children:n.files.map(t=>r(a,{file:t,filePanelState:no,family:n.filePanelStates},Oe(t)))})]})}$Define(){super.$Define(),this.classes.add(this,"pd-file-panel")}};o(qo,"$FilePanel");let It=qo;const Go=class Go extends g{constructor(){super(...arguments),this.style=x.div`
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
    `}get spread(){return this.chapter?.annotations.expressed(P)}$FilePanelBar(...e){this.$Writing(...e),this.containers.replace(this,"span",this.style)}write(){const e=s(oo),a=s(Sp),n=s(ct),t=this.spread,i=this.chapter;if(t!==void 0)return c(k,{children:[t.files.map(p=>r(e,{file:p},Oe(p))),r("span",{className:"pd-words-only",children:r(a,{chapter:i,annotation:ro,family:t.filePanelStates,children:"words"})}),r("span",{className:"pd-dock pd-to-full",children:r(a,{chapter:i,annotation:no,family:t.filePanelStates,children:"full screen"})}),r("span",{className:"pd-dock pd-to-split",children:r(a,{chapter:i,annotation:Ce,family:t.filePanelStates,children:"split"})}),c("span",{className:"pd-options",children:[r(n,{chapter:i,annotation:md,children:"light"}),r(n,{chapter:i,annotation:$d,children:"wrap"}),r(n,{chapter:i,annotation:np,children:"lines"})]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-file-panel-bar")}};o(Go,"$FilePanelBar");let Tt=Go;const yd=s(It),xd=s(Tt),wd=xd;var zd=Object.defineProperty,Od=Object.getOwnPropertyDescriptor,Dd=o((d,e,a,n)=>{for(var t=Od(e,a),i=d.length-1,p;i>=0;i--)(p=d[i])&&(t=p(e,a,t)||t);return t&&zd(e,a,t),t},"__decorateClass$m");const Uo=class Uo extends F{constructor(){super(...arguments),this.specification=new oa,this.$openFile=void 0,this.grid=x.div`
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
    `}get files(){return this.parent.annotations.find(Y).reverse()}get openFile(){return this.$openFile??this.files[0]}get filePanelStates(){return[ro,Ce,no]}$Spread(...e){this.$Format(...e);const a=this.grid,n=s(yd),t=s(kd),i=s(vd);this.style=({className:p,children:m})=>{const $=this.parent,v=[...$.classes].includes("pa-open");return c(a,{className:`${p??""}${v?" pa-open":""}`.trim(),children:[r("div",{className:"pd-words",children:m}),v?c(k,{children:[r(n,{chapter:$}),r(t,{chapter:$}),r(i,{chapter:$,annotation:Ce,family:this.filePanelStates})]}):void 0]})}}defines(e){super.defines(e),e.classes.add(this,"pa-spread")}erase(e){super.erase(e),e.classes.revert(this)}};o(Uo,"$Spread");let P=Uo;const Yo=class Yo extends u{$isAChapter(e){l(e instanceof y,"a spread is a chapter read beside its files, and this is not a chapter")}};o(Yo,"SpreadSpecification");let oa=Yo;Dd([h("a spread is a chapter read beside its files")],oa.prototype,"$isAChapter");s(P);var jd=Object.defineProperty,Pd=Object.getOwnPropertyDescriptor,Je=o((d,e,a,n)=>{for(var t=Pd(e,a),i=d.length-1,p;i>=0;i--)(p=d[i])&&(t=p(e,a,t)||t);return t&&jd(e,a,t),t},"__decorateClass$l");const rp='<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3.5 10.5 8 6 12.5"/></svg>',Cd='<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linejoin="round" stroke-linecap="round"><rect class="ground" x="0.75" y="0.75" width="14.5" height="14.5"/><path d="M3.5 5.5h3l1.5 1.5h4.5v5h-9z"/></svg>',Zo=class Zo extends F{constructor(){super(...arguments),this.specification=new ia,this.style=x.div`
        ${e=>e.$schemeDeclarations===void 0?"":`.pa-entry { ${e.$schemeDeclarations} }`}
    `}get place(){return N(this.parent).identifier}get referencedChapter(){return this.book.chapterAt(this.place)}get cover(){return this.referencedChapter?.annotations.expressed(T)?.cover??this.book.coverOf(this.place)}get schemeDeclarations(){const e=this.cover?.annotations.expressed(q);if(e!==void 0)return e.declarations;const a=this.referencedChapter?.annotations.expressed(ae)?.colour;return a===void 0?void 0:`--colour: ${a};`}$Entry(...e){this.$Format(...e);const a=this.style;this._painted=n=>r(a,{$schemeDeclarations:this.schemeDeclarations,...n})}defines(e){e.classes.add(this,"pa-entry"),e.containers.add(this,this._painted),(this.place===this.book?.$bookmark||this.place===this.book.open?.mention?.identifier)&&e.classes.add(this,"pa-open")}erase(e){e.classes.revert(this),e.containers.revert(this)}};o(Zo,"$Entry");let te=Zo;const Xo=class Xo extends b{constructor(){super(...arguments),this.specification=new ra}defines(e){e.classes.add(this,"pa-appendix")}erase(e){e.classes.revert(this)}};o(Xo,"$Appendix");let Ae=Xo;const Ko=class Ko extends b{constructor(){super(...arguments),this.specification=new na}get entries(){return this.chapter.text.find(A).flatMap(a=>a.text.find(g)).filter(a=>!a.is(Mp)&&N(a)!==void 0)}$Bound(){const e=s(Nd),a=s(cp),n=s(oo),t=this.book;for(const i of this.entries){i.annotations.add(this,r(e,{}));const p=t.chapterAt(N(i).identifier)?.annotations.expressed(P);if(p===void 0)continue;const m=p.files;i.text.add(this,r(a,{foldedWriting:m.length===0?void 0:i,annotation:dp}),...m.map($=>r(n,{file:$,annotation:Ce,family:p.filePanelStates},Oe($))))}super.$Bound()}};o(Ko,"$Index");let Z=Ko;const Jo=class Jo extends u{$isATableOfContents(e){l(e.is(J),"an index is a table of contents, and this chapter is not one")}};o(Jo,"IndexSpecification");let na=Jo;Je([h("an index is a table of contents")],na.prototype,"$isATableOfContents");const Qo=class Qo extends u{$isASectionOfTheTable(e){l(e instanceof A&&e.chapter?.is(J)===!0,"the appendix is a section of the table of contents, and this is not one")}};o(Qo,"AppendixSpecification");let ra=Qo;Je([h("the appendix is a section of the table of contents")],ra.prototype,"$isASectionOfTheTable");const Vo=class Vo extends u{$isARowThatLeadsSomewhere(e){l(e instanceof g&&N(e)!==void 0,"an entry is a row that leads somewhere, and this is not one")}};o(Vo,"EntrySpecification");let ia=Vo;Je([h("an entry is a row that leads somewhere")],ia.prototype,"$isARowThatLeadsSomewhere");const So=class So extends b{constructor(){super(...arguments),this.specification=new da}defines(e){e.classes.add(this,"pa-folded")}erase(e){e.classes.revert(this)}};o(So,"$Folded");let Ht=So;const en=class en extends De{get on(){return this.$foldedWriting!==void 0&&[this.$foldedWriting.$is].flat().includes(this.$annotation)}container(e){return super.container({...e,disabled:this.$foldedWriting===void 0,onClick:o(a=>{a.preventDefault(),this.press()},"onClick")})}press(){const e=this.$foldedWriting;if(e===void 0)return;const a=[e.$is].flat();e.$is=this.on?a.filter(n=>n!==this.$annotation):[this.$annotation,...a]}write(){return r("span",{className:"pd-drawing",dangerouslySetInnerHTML:{__html:rp}})}$Define(){super.$Define(),this.classes.add(this,"pd-fold-chevron")}};o(en,"$FoldChevron");let Bt=en;const an=class an extends F{constructor(){super(...arguments),this.specification=new ca,this.tree=x.div`
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
        @media (max-width: ${({theme:e})=>e.narrow}) {
            .pd-book .pd-holds &.pd-tree-folder.pa-open .pd-fold-chevron, .pd-book .pd-holds &.pd-tree-folder.pa-open .pd-tree-folder-mark, .pd-book .pd-holds &.pd-tree-folder.pa-open .pa-entry .pd-file-tab { display: none; }
            .pd-book .pd-holds &.pd-tree-folder.pa-open .pd-sentence.pd-heading { height: auto; padding: 0 calc(${({theme:e})=>e.space} / 2); }
        }
    `}get section(){return this.parent}get firstPlace(){return this.section.text.find(g).map(e=>N(e)).find(e=>e!==void 0)?.identifier}get part(){const e=this.firstPlace;return e===void 0?void 0:this.book.chapterAt(e)?.part}get open(){const e=this.book.open;return e!==void 0&&e.part?.name===this.part?.name}$TreeFolder(...e){this.$Format(...e);const a=this.tree,n=s(cp),t=s(D),i=s(w);this.style=({className:p,children:m})=>{const $=this.firstPlace,v=[...this.section.classes].includes("pa-open"),j=r("span",{className:"pd-drawing pd-tree-folder-mark",dangerouslySetInnerHTML:{__html:Cd}});return c(a,{className:`${p??""} pd-tree-folder${v?" pa-open":""}`.trim(),children:[r(n,{foldedWriting:this.section,annotation:dp}),$===void 0?j:c(t,{children:[r(i,{children:$}),j]}),m]})}}defines(e){super.defines(e),e.classes.add(this,"pa-tree-folder"),this.open&&e.classes.add(this,"pa-open")}erase(e){super.erase(e),e.classes.revert(this)}};o(an,"$TreeFolder");let pa=an;const tn=class tn extends u{$saidOfASectionOrAnEntry(e){l(e instanceof A&&e.chapter?.is(J)===!0||e.is(te),"folded is said of a section of a table of contents or of an entry, and this is neither")}};o(tn,"FoldedSpecification");let da=tn;Je([h("folded is said of a section of a table of contents or of an entry")],da.prototype,"$saidOfASectionOrAnEntry");const sn=class sn extends u{$isASectionOfTheTable(e){l(e instanceof A&&e.chapter?.is(J)===!0,"a tree folder is a section of the table of contents, and this is not one")}};o(sn,"TreeFolderSpecification");let ca=sn;Je([h("a tree folder is a section of the table of contents")],ca.prototype,"$isASectionOfTheTable");const on=class on extends g{get cover(){return this.$cover??this.book?.cover}write(){const e=this.cover,a=s(D),n=s(w);return c(a,{children:[r(n,{children:e.mention.identifier}),r("span",{className:"pd-drawing",dangerouslySetInnerHTML:{__html:rp}}),e.title.name]})}$Define(){super.$Define(),this.classes.add(this,"pd-tree-root")}};o(on,"$TreeRoot");let Wt=on;const N=o(d=>d.annotations.expressed(Yi)??d.text.find(z).map(e=>e.annotations.expressed(Yi)).find(e=>e!==void 0),"contentOf"),ip=s(te),Xl=s(Z),Kl=s(Ae),io=s(Ht),Ad=s(Bt),pp=s(pa),Md=s(Wt),Nd=ip,dp=io,cp=Ad;var Id=Object.defineProperty,Td=Object.getOwnPropertyDescriptor,ie=o((d,e,a,n)=>{for(var t=Td(e,a),i=d.length-1,p;i>=0;i--)(p=d[i])&&(t=p(e,a,t)||t);return t&&Id(e,a,t),t},"__decorateClass$k");const lt=o((d,e)=>{const a=new Set(d.text.find(e));return d.text.find(Np).flatMap(n=>[...a.has(n)?[n]:[],...lt(n,e)])},"within"),nn=class nn extends b{constructor(){super(...arguments),this.specification=new se}get identifier(){return L.reference(O.copy(this.text))?.identifier??""}get name(){return L.reference(O.copy(this.text))?.name??""}get cover(){const e=this.identifier;return this.chapter?.annotations.find(T).map(a=>a.cover).find(a=>a?.mention?.identifier===e)}defines(e){e.classes.add(this,"pa-design")}erase(e){e.classes.revert(this)}};o(nn,"$Design");let I=nn;const rn=class rn extends b{constructor(){super(...arguments),this.specification=new la}defines(e){e.classes.add(this,"pa-exhibit")}erase(e){e.classes.revert(this)}};o(rn,"$Exhibit");let Me=rn;const pn=class pn extends b{constructor(){super(...arguments),this.specification=new ha,this.$number=0,this.span=x.span.attrs({className:"pd-plate"})``}note(){const e=this.span;return c(k,{children:[r(e,{children:String(this.$number).padStart(2,"0")}),r("span",{className:"pd-jacket-mini"})]})}defines(e){e.classes.add(this,"pa-plate")}erase(e){e.classes.revert(this)}};o(pn,"$Plate");let Lt=pn;const dn=class dn extends F{constructor(){super(...arguments),this.specification=new fa,this.themeProvider=!0,this.room=x.div`
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
    `}get chapter(){return this.parent}get design(){return this.chapter.annotations.expressed(I)}get plate(){return this.book.chapters.filter(e=>e.is(I)).indexOf(this.chapter)+1}$Room(...e){this.$Format(...e);const a=this.room;this.style=({className:n,children:t})=>{const i=[...this.chapter.classes].includes("pa-open");return ce(this.design?.cover,c(a,{className:`${n??""} pd-room${i?" pa-open":""}`.trim(),children:[r("span",{className:"pd-plate",children:String(this.plate).padStart(2,"0")}),t]}))}}defines(e){super.defines(e),e.classes.add(this,"pa-room")}erase(e){super.erase(e),e.classes.revert(this)}};o(dn,"$Room");let Rt=dn;const cn=class cn extends g{get references(){const e=this.book?.means?.identifier??"",a=new Map;for(const n of lt(this.chapter,z)){if(n.parent===this)continue;const t=n.annotations.expressed(S)?.identifier;if(t===void 0||t.startsWith(e)||a.has(t))continue;const i=O.copy(n.text);a.set(t,L.reference(i)?.name??i.trim())}return[...a]}write(){const e=s(D),a=s(w);return this.references.map(([n,t],i)=>c(e,{children:[r(a,{children:n}),t,r("span",{className:"pd-where",children:n.replace(/^\/dougs-/u,"").replace(/\/#?/u," · ").replace(/ · $/u,"").replace(/-/gu," ")})]},i))}$Define(){super.$Define(),this.classes.add(this,"pd-built-in")}};o(cn,"$BuiltIn");let Ft=cn;const ln=class ln extends u{$isAChapter(e){l(e instanceof y,"a design is a chapter, and this is not one")}$namesABook(e){l((e.annotations.expressed(I)?.identifier??"")!=="","a design names the book it is of, and this one names nothing")}$holdsTheCover(e){l(e.annotations.expressed(I)?.cover!==void 0,"a design holds the cover of the book it is of, as a volume, and this one holds none")}$showsItselfAsBuilt(e){l(e instanceof y&&lt(e,g).some(a=>a.is(Me)),"a design shows itself as built, in a paragraph said to be the exhibit, and this one shows nothing")}};o(ln,"DesignSpecification");let se=ln;ie([h("a design is a chapter")],se.prototype,"$isAChapter");ie([h("a design names the book it is of")],se.prototype,"$namesABook");ie([h("a design holds the cover of the book it is of")],se.prototype,"$holdsTheCover");ie([h("a design shows itself as built")],se.prototype,"$showsItselfAsBuilt");const hn=class hn extends u{$isAParagraphOfADesignHoldingOneImage(e){l(e instanceof g&&e.chapter?.is(I)===!0&&e.text.find(eo).length===1,"an exhibit is a paragraph of a design that holds one image, and this is not one")}};o(hn,"ExhibitSpecification");let la=hn;ie([h("an exhibit is a paragraph of a design that holds one image")],la.prototype,"$isAParagraphOfADesignHoldingOneImage");const fn=class fn extends u{$saidOfAnEntryLeadingToADesign(e){l(e.is(te)&&e.annotations.expressed(te)?.referencedChapter?.is(I)===!0,"a plate is said of an entry that leads to a design, and this is not one")}};o(fn,"PlateSpecification");let ha=fn;ie([h("a plate is said of an entry that leads to a design")],ha.prototype,"$saidOfAnEntryLeadingToADesign");const gn=class gn extends u{$isADesign(e){l(e instanceof y&&e.is(I),"a room is a chapter that is a design, and this is not one")}};o(gn,"RoomSpecification");let fa=gn;ie([h("a room is a chapter that is a design")],fa.prototype,"$isADesign");s(I);s(Me);const Hd=s(Lt),Bd=s(Rt),Wd=s(Ft);var Ld=Object.defineProperty,Rd=Object.getOwnPropertyDescriptor,W=o((d,e,a,n)=>{for(var t=Rd(e,a),i=d.length-1,p;i>=0;i--)(p=d[i])&&(t=p(e,a,t)||t);return t&&Ld(e,a,t),t},"__decorateClass$j");const ce=o((d,e,a)=>{const n=d?.annotations.expressed(q)?.painted;return n===void 0?e:r(n,{children:e},a)},"painted"),bn=class bn extends M{constructor(){super(...arguments),this.specification=new be}get name(){return this.chapter?.title?.name??""}get author(){return this.chapter?.annotations.expressed(Ss)?.name??""}get illustration(){return this.chapter?.text.find(g).find(e=>e.is(Ne))}get drawing(){const e=this.illustration?.text.find(at)[0];return e===void 0?"":O.copy(e.text).trim()}get scheme(){return this.chapter?.annotations.expressed(q)}get window(){return this.chapter?.annotations.expressed(ge)}};o(bn,"$BookshelfCover");let fe=bn;const un=class un extends b{constructor(){super(...arguments),this.specification=new ua}defines(e){e.classes.add(this,"pa-illustration")}erase(e){e.classes.revert(this)}};o(un,"$Illustration");let Ne=un;const mn=class mn extends F{constructor(){super(...arguments),this.specification=new Ie,this.$ground="",this.$band="",this.$bandInk="",this.$foot="",this.$footInk="",this.$ink="",this.style=x.div.attrs({className:"pd-scheme"})`
        ${e=>e.$scheme}
    `}get colours(){return[this.$ground,this.$band,this.$bandInk,this.$foot,this.$footInk,this.$ink]}get declarations(){return`--ground: ${this.$ground}; --band: ${this.$band}; --band-ink: ${this.$bandInk}; --foot: ${this.$foot}; --foot-ink: ${this.$footInk}; --ink: ${this.$ink};`}get painted(){return this._painted}$Scheme(...e){this.$Format(...e);const a=this.style;this._painted=n=>r(a,{$scheme:this.declarations,...n})}defines(e){e.classes.add(this,"pa-scheme"),e.containers.add(this,this._painted)}erase(e){e.classes.revert(this),e.containers.revert(this)}};o(mn,"$Scheme");let q=mn;const $n=class $n extends b{constructor(){super(...arguments),this.specification=new Te,this.$x="",this.$y=""}get declarations(){return`--window-x: ${this.$x}px; --window-y: ${this.$y}px;`}};o($n,"$Window");let ge=$n;const kn=class kn extends b{constructor(){super(...arguments),this.specification=new He}get cover(){return this._cover}get jacket(){return this._cover?.annotations.expressed(M)}$Volume(...e){this._cover=e.find(a=>a instanceof y),this.$Annotation(...e.filter(a=>a!==this._cover))}defines(e){e.classes.add(this,"pa-volume")}erase(e){e.classes.revert(this)}};o(kn,"$Volume");let T=kn;const vn=class vn extends g{get cover(){return this.$cover?.annotations.expressed(M)}$Jacket(...e){this.$Writing(...e),this._painted=a=>{const n=this.cover?.scheme?.painted;return n===void 0?r("div",{...a}):r(n,{...a})},this.containers.add(this,this._painted)}write(){const e=this.cover;if(e===void 0)return;const a=s(D),n=s(ze);return c(k,{children:[r(a,{children:e.name}),r("span",{className:"pd-drawing",dangerouslySetInnerHTML:{__html:e.drawing}}),c(a,{children:[r(n,{}),e.author]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-jacket")}};o(vn,"$Jacket");let _t=vn;const yn=class yn extends g{constructor(){super(...arguments),this.unfolded=!1}get filedElsewhere(){return this.$subject!==void 0&&this.$subject!==this.$cover}container(e){return super.container({onMouseOver:o(a=>{a.target instanceof Element&&a.target.closest(".pd-filed")!==null&&this.unfold()},"onMouseOver"),onMouseLeave:o(()=>this.fold(),"onMouseLeave"),...e})}unfold(){this.unfolded=!0}fold(){this.unfolded=!1}write(){const e=this.$cover,a=this.$subject;if(e!==void 0)return c(k,{children:[this.filedElsewhere?ce(a,r("span",{className:"pd-filed",children:this.mark(a)})):void 0,ce(e,r("span",{className:"pd-own",children:this.mark(e)})),c("span",{className:"pd-names",children:[ce(e,r("span",{className:"pd-name",children:this.name(e)})),this.filedElsewhere?ce(a,r("span",{className:"pd-name pd-under",children:this.name(a)})):void 0]})]})}mark(e){const a=s(qd),n=s(w);return r(a,{cover:e,children:r(n,{children:e.mention.identifier})})}name(e){const a=s(D),n=s(w);return c(a,{children:[r(n,{children:e.mention.identifier}),e.title.name]})}$Define(){super.$Define(),this.classes.add(this,"pd-logo");const e=s(Gd);this.annotations.add(this,r(e,{}))}};o(yn,"$Logo");let ga=yn;const xn=class xn extends b{constructor(){super(...arguments),this.specification=new ba}defines(e){e.unfolded&&e.classes.add(this,"pa-unfolded")}erase(e){e.classes.revert(this)}};o(xn,"$Unfolded");let Et=xn;const wn=class wn extends u{$saidOfALogo(e){l(e instanceof ga,"unfolded is said of a logo, and this is not one")}};o(wn,"UnfoldedSpecification");let ba=wn;W([h("unfolded is said of a logo")],ba.prototype,"$saidOfALogo");const zn=class zn extends z{constructor(){super(...arguments),this.style=x.span`
        ${e=>e.$vars}
    `}get cover(){return this.$cover?.annotations.expressed(M)}$Mark(...e){this.$Writing(...e);const a=this.style;this._painted=n=>r(a,{$vars:`${this.cover?.scheme?.declarations??""} ${this.cover?.window?.declarations??""}`,...n}),this.containers.add(this,this._painted)}write(){return r("span",{className:"pd-drawing",dangerouslySetInnerHTML:{__html:this.cover?.drawing??""}})}$Define(){super.$Define(),this.classes.add(this,"pd-mark")}};o(zn,"$Mark");let qt=zn;const On=class On extends Ip{$carriesItsScheme(e){l(e.is(q),"a bookshelf cover carries its scheme, and this one carries none")}$carriesItsWindow(e){l(e.is(ge),"a bookshelf cover carries its window, and this one carries none")}$carriesItsIllustration(e){l(e instanceof y&&e.text.find(g).some(a=>a.is(Ne)),"a bookshelf cover carries its illustration, and this one carries none")}};o(On,"BookshelfCoverSpecification");let be=On;W([h("a bookshelf cover carries its scheme")],be.prototype,"$carriesItsScheme");W([h("a bookshelf cover carries its window")],be.prototype,"$carriesItsWindow");W([h("a bookshelf cover carries its illustration")],be.prototype,"$carriesItsIllustration");const Dn=class Dn extends u{$saidOfADrawing(e){l(e instanceof g&&e.chapter?.is(M)===!0&&e.text.find(at).length===1,"an illustration is a paragraph of a cover that holds one drawing, and this is not one")}};o(Dn,"IllustrationSpecification");let ua=Dn;W([h("an illustration is a paragraph of a cover that holds one drawing")],ua.prototype,"$saidOfADrawing");const jn=class jn extends u{$isACover(e){l(e instanceof y&&e.is(M),"a cover has a scheme, and this is not a cover")}$givenItsColours(e){const a=e.annotations.expressed(q)?.colours??[];l(a.every(n=>/^#[0-9a-f]{6}$/iu.test(n)),"a scheme is given its six colours as six hex digits each — the ground, the band and its ink, the foot and its ink, and the ink of the drawing — and this one was given something else")}};o(jn,"SchemeSpecification");let Ie=jn;W([h("a cover has a scheme")],Ie.prototype,"$isACover");W([h("a scheme is given its six colours")],Ie.prototype,"$givenItsColours");const Pn=class Pn extends u{$isACover(e){l(e instanceof y&&e.is(M),"a cover has a window, and this is not a cover")}$givenItsPlace(e){const a=e.annotations.expressed(ge);l(/^-?\d+$/u.test(a?.$x??"")&&/^-?\d+$/u.test(a?.$y??""),"a window is given where it stands on the drawing, two whole numbers, and this one was given something else")}};o(Pn,"WindowSpecification");let Te=Pn;W([h("a cover has a window")],Te.prototype,"$isACover");W([h("a window is given where it stands on the drawing")],Te.prototype,"$givenItsPlace");const Cn=class Cn extends u{$saidOfAChapterStandingForABook(e){l(e instanceof y&&(e.is(E)||e.is(M)||e.is(I)),"a volume is a chapter that stands for another book, a synopsis of it, a cover filed under it or a design of it, and this is none")}$holdsTheCover(e){const a=[e.annotations.expressed(E)?.means?.identifier,e.annotations.expressed(Ji)?.means?.identifier,e.annotations.expressed(Ss)?.means?.identifier,e.annotations.expressed(I)?.identifier];l(e.annotations.find(T).every(n=>n.cover?.is(M)===!0&&a.includes(n.cover.mention?.identifier)),"a volume holds the cover of a book its chapter stands for, the book a synopsis or a design is of or the subject or author a cover is filed under, and one here holds something else")}};o(Cn,"VolumeSpecification");let He=Cn;W([h("a volume is a chapter that stands for another book")],He.prototype,"$saidOfAChapterStandingForABook");W([h("a volume holds the cover of a book its chapter stands for")],He.prototype,"$holdsTheCover");const lp=s(fe),ht=s(Ne),ft=s(q),gt=s(ge),Be=s(T),Fd=s(_t),_d=s(ga),Ed=s(Et),hp=s(qt),qd=hp,Gd=Ed,Sa=class Sa extends Tp{constructor(){super(...arguments),this.specification=new H,this.themeProvider=!0,this.style=x.div`
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
    `}get pages(){return this.book.pages}get open(){const e=this.book;return e.open??e.synopsis}$Bound(){const e=this.style,a=this.book;this.style=n=>r(e,{$at:a.means?.identifier,$scheme:a.cover?.annotations.expressed(q)?.declarations,...n}),super.$Bound()}defines(e){for(const n of e.annotations.after(this))n instanceof Sa&&e.annotations.express(n,!1);super.defines(e),e.classes.add(this,"pa-layout");const a=this.book.open;a!==void 0&&e.classes.add(this,"pa-turned"),a?.is(P)&&e.classes.add(this,"pa-manual")}erase(e){super.erase(e),e.classes.revert(this)}parts(){return[this.paging(),this.regions(),this.areas(),this.phone()]}paging(){return f`
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
        `}};o(Sa,"$Layout");let We=Sa;const bt=s(We),et=class et extends b{constructor(){super(...arguments),this.specification=new H}defines(e){for(const a of e.annotations.after(this))a instanceof et&&e.annotations.express(a,!1);e.classes.add(this,"pa-tone")}erase(e){e.classes.revert(this)}};o(et,"$Tone");let ue=et;const An=class An extends ue{defines(e){super.defines(e),e.classes.add(this,"pa-dark")}};o(An,"$Dark");let Gt=An;const Mn=class Mn extends ue{defines(e){super.defines(e),e.classes.add(this,"pa-light")}};o(Mn,"$Light");let Ut=Mn;const Nn=class Nn extends ue{defines(e){super.defines(e),e.classes.add(this,"pa-white-over-black")}};o(Nn,"$WhiteOverBlack");let Yt=Nn;const Q=s(ue),fp=s(Gt),pe=s(Ut),Ud=s(Yt);var Yd=Object.defineProperty,Zd=Object.getOwnPropertyDescriptor,Xd=o((d,e,a,n)=>{for(var t=Zd(e,a),i=d.length-1,p;i>=0;i--)(p=d[i])&&(t=p(e,a,t)||t);return t&&Yd(e,a,t),t},"__decorateClass$i");const In=class In extends z{write(){const e=this.book.body;return`${e.indexOf(this.chapter)+1} of ${e.length}`}$Define(){super.$Define(),this.classes.add(this,"pd-count")}};o(In,"$Count");let Zt=In;const Tn=class Tn extends b{constructor(){super(...arguments),this.specification=new Le}defines(e){e.classes.add(this,"pa-before")}erase(e){e.classes.revert(this)}};o(Tn,"$Before");let Xt=Tn;const Hn=class Hn extends b{constructor(){super(...arguments),this.specification=new Le}defines(e){e.classes.add(this,"pa-after")}erase(e){e.classes.revert(this)}};o(Hn,"$After");let Kt=Hn;const Bn=class Bn extends u{$saidOfAWordOfATurn(e){l(e instanceof z&&e.parent instanceof ma,"this is said of a word of a turn, and here it is said of something else")}};o(Bn,"OfATurnSpecification");let Le=Bn;Xd([h("this is said of a word of a turn")],Le.prototype,"$saidOfAWordOfATurn");const Kd=s(Zt),Jd=s(Xt),Qd=s(Kt),Wn=class Wn extends g{get before(){const e=this.book.body;return e[e.indexOf(this.chapter)-1]??this.chapter}get after(){const e=this.book.body;return e[e.indexOf(this.chapter)+1]??this.chapter}write(){const e=s(D),a=s(Kd),n=s(Jd),t=s(Qd),i=s(this.before===this.chapter?mt:w),p=s(this.after===this.chapter?mt:w);return c(k,{children:[c(e,{children:[r(n,{}),r(i,{children:this.before.mention.identifier}),"← ",this.before.title.name]}),r(a,{}),c(e,{children:[r(t,{}),r(p,{children:this.after.mention.identifier}),this.after.title.name," →"]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-turn")}};o(Wn,"$Turn");let ma=Wn;const Vd=s(ma);var Sd=Object.defineProperty,ec=Object.getOwnPropertyDescriptor,Qe=o((d,e,a,n)=>{for(var t=n>1?void 0:n?ec(e,a):e,i=d.length-1,p;i>=0;i--)(p=d[i])&&(t=(n?p(e,a,t):p(t))||t);return n&&t&&Sd(e,a,t),t},"__decorateClass$h");const Ln=class Ln extends Hp{constructor(){super(...arguments),this.specification=new B}get chapters(){return this.text.find(y).filter(e=>[...e.classes].includes("pd-canonical"))}get laidOutChapters(){return[this.cover,this.synopsis,this.table,...this.chapters]}get pages(){return[this.synopsis,...this.chapters].filter(e=>e!==void 0)}get body(){const e=this.appendix;return this.chapters.filter(a=>!e.includes(a))}get appendix(){const e=this.table;if(e===void 0)return[];const a=e.text.find(A).filter(n=>n.is(Ae)).flatMap(n=>n.text.find(g).map(t=>N(t)?.identifier));return this.chapters.filter(n=>a.includes(n.mention?.identifier??""))}get open(){return this.$bookmark===void 0?void 0:this.chapterAt(this.$bookmark)}get tones(){return[fp,pe,Ud]}get topics(){return this.cover?.annotations.find(Qi)??[]}write(){return c(k,{children:[r("div",{className:"pd-library",children:this.library()}),r("div",{className:"pd-me",children:this.me()}),r("div",{className:"pd-holds",children:this.holds()}),r("div",{className:"pd-head",children:this.head()}),c("div",{className:"pd-pages",children:[this.aboveThePages(),this.pages.map((e,a)=>{const n=s(e);return r(n,{},a)}),this.belowThePages()]})]})}library(){if(this._logo===void 0)return;const e=s(this._logo);return r(e,{})}me(){const e=s(hp),a=s(w),n=s(Kp),t=this.coverOf(this.author?.means?.identifier);return c(k,{children:[this.byline(),t===void 0?void 0:this.painted(t,r(e,{cover:t,children:r(a,{children:t.mention.identifier})})),this.topics.length===0?void 0:r(n,{cover:this.cover})]})}painted(e,a,n){return ce(e,a,n)}holds(){const e=s(this.table);return r(e,{})}head(){const e=s(this.cover);return c(k,{children:[r(e,{}),r("div",{className:"pd-switches",children:this.switches()})]})}aboveThePages(){}belowThePages(){}chapterAt(e){return(this._chapterByPlace??this.chapterByPlace()).get(e)}chapterByPlace(){const e=new Map;for(const a of this.chapters)for(const n of this.sections(a))n.mention!==void 0&&!e.has(n.mention.identifier)&&e.set(n.mention.identifier,a);for(const a of this.chapters)a.mention!==void 0&&e.set(a.mention.identifier,a);return e}coverOf(e){if(e!==void 0)return this.means?.identifier===e?this.cover:this.cover?.annotations.find(T).map(a=>a.cover).find(a=>a?.mention?.identifier===e)}byline(){const e=s(ap);return r(e,{chapter:this.cover})}root(){const e=s(Md);return r(e,{cover:this.cover})}switches(){}sections(e){return e.text.find(A).flatMap(a=>[a,...this.sections(a)])}sectionOf(e){const a=this.table;return a===void 0?void 0:this.sections(a).find(n=>n.canonical?.name===e.name)}turn(){this.bookmark!==this.cover&&super.turn()}$Define(){super.$Define();const e=s(bt),a=s(Q);this.annotations.add(this,r(e,{}),r(a,{}))}$Bound(){this._chapterByPlace=this.chapterByPlace();const e=s(pp),a=this.table?.annotations.expressed(J);for(const i of a?.parts??[]){const p=this.sectionOf(i);p===void 0||p.is(pa)||!i.chapters.some(m=>m.is(P))||p.annotations.add(this,r(e,{}))}const n=this.root();n!==void 0&&this.table?.text.add(this,n);const t=s(_d);this._logo=Bp.chemical(r(t,{cover:this.cover,subject:this.coverOf(this.subject?.means?.identifier)}),this),this.turns(),super.$Bound()}turns(){const e=s(Vd);for(const a of this.body)a.text.add(this,r(e,{}))}};o(Ln,"$LibraryBook");let R=Ln;Qe([Ki()],R.prototype,"_chapterByPlace",2);const Rn=class Rn extends Wp{$holdsOnlyChapters(e){l([...e.text].every(a=>a instanceof y),"a book of this library holds only chapters, and this one holds something else")}$placesEveryChapter(e){l(e.text.find(y).every(a=>e.laidOutChapters.includes(a)),"a book of this library has a place for every chapter it holds, and this one holds a chapter it places nowhere")}$onlyAChapterAppends(e){l(e.text.find(y).every(a=>e.chapters.includes(a)||!a.is(Y)),"only an ordinary chapter files a file, and here a cover, a synopsis or a table of contents files one")}$listsEachManualPart(e){const n=(e.table?.annotations.expressed(J)?.parts??[]).find(t=>t.chapters.some(i=>i.is(P))&&e.sectionOf(t)===void 0);l(n===void 0,`a part read as a manual is listed under a section headed with its name, and "${n?.name}" has none`)}};o(Rn,"LibraryBookSpecification");let B=Rn;Qe([h("a book of this library holds only chapters")],B.prototype,"$holdsOnlyChapters",1);Qe([h("a book of this library has a place for every chapter it holds")],B.prototype,"$placesEveryChapter",1);Qe([h("only an ordinary chapter files a file")],B.prototype,"$onlyAChapterAppends",1);Qe([h("a part read as a manual is listed under a section headed with its name")],B.prototype,"$listsEachManualPart",1);const gp=s(R);s(gp,re)(Gp);s(gp,Q)(fp);var ac=Object.defineProperty,tc=Object.getOwnPropertyDescriptor,sc=o((d,e,a,n)=>{for(var t=tc(e,a),i=d.length-1,p;i>=0;i--)(p=d[i])&&(t=p(e,a,t)||t);return t&&ac(e,a,t),t},"__decorateClass$g");const Fn=class Fn extends R{constructor(){super(...arguments),this.specification=new Re}get open(){return super.open??this.body[0]}head(){}switches(){}root(){}$Define(){super.$Define(),this.$is=[ro,np]}$Bound(){const e=s(pp);for(const a of this.table?.text.find(A)??[])a.annotations.add(this,r(e,{})),a.is(Ae)&&(a.$is=[io]);super.$Bound()}};o(Fn,"$Manual");let $a=Fn;const _n=class _n extends B{$everyChapterHasABrief(e){l(e.chapters.every(a=>a.text.find(g).some(n=>n.is(ta))),"every chapter of a manual opens with a brief, and one here has none")}};o(_n,"ManualSpecification");let Re=_n;sc([h("every chapter of a manual opens with a brief")],Re.prototype,"$everyChapterHasABrief");const po=s($a);s(po,Q)(pe);var oc=Object.defineProperty,nc=Object.getOwnPropertyDescriptor,co=o((d,e,a,n)=>{for(var t=nc(e,a),i=d.length-1,p;i>=0;i--)(p=d[i])&&(t=p(e,a,t)||t);return t&&oc(e,a,t),t},"__decorateClass$f");const En=class En extends b{constructor(){super(...arguments),this.specification=new me}get date(){return this.text.find(ao)[0]}defines(e){e.classes.add(this,"pa-dated")}erase(e){e.classes.revert(this)}note(){const e=s(this.date);return r(e,{})}};o(En,"$Dated");let X=En;const qn=class qn extends u{$saidOfAChapter(e){l(e instanceof y,"dated is said of a chapter, and this is not one")}$datedOnce(e){l(e.annotations.containsOne(X),"a chapter is dated once, and this one is dated more than once")}$givenOneDate(e){l(e.annotations.expressed(X)?.text.find(ao).length===1,"a dated chapter is given one date, and this one is given none or more than one")}};o(qn,"DatedSpecification");let me=qn;co([h("dated is said of a chapter")],me.prototype,"$saidOfAChapter");co([h("a chapter is dated once")],me.prototype,"$datedOnce");co([h("a dated chapter is given one date")],me.prototype,"$givenOneDate");const Jl=s(X),Gn=class Gn extends te{constructor(){super(...arguments),this.label=x.span.attrs({className:"pa-number"})``}get number(){return this.book.body.indexOf(this.referencedChapter)+1}get keyed(){return this.referencedChapter?.annotations.expressed(U)}note(){const e=this.label,a=s(sp),n=this.keyed;return c(k,{children:[super.note(),n===void 0?void 0:r(a,{keyed:n}),this.number===0?void 0:r(e,{children:String(this.number)})]})}};o(Gn,"$NumberedEntry");let Jt=Gn;const rc=s(Jt);s(po,ip)(rc);const Un=class Un extends fe{constructor(){super(...arguments),this.style=x.header`
        .pd-chapter.pa-cover { margin-block: 0; }
        .pa-cover .pd-title {
            font-size: calc(1.04 * ${({theme:e})=>e.size});
            font-weight: 600;
        }
    `}};o(Un,"$ManualCover");let Qt=Un;const Yn=class Yn extends J{constructor(){super(...arguments),this.style=x.nav`
        .pa-table-of-contents .pa-reference { color: inherit; text-decoration: none; }
    `}};o(Yn,"$ManualTableOfContents");let Vt=Yn;s(Qt);s(Vt);const Zn=class Zn extends ee{constructor(){super(...arguments),this.measure="104ch",this.holdsColumn="272px",this.barHeight="52px",this.space="24px",this.size="14px",this.beat="0.22s",this.serif="'Source Serif 4', Georgia, serif",this.paper="#fdfcfa",this.ink="#343c4a",this.heading="#1a1f36",this.soft="#727d8c",this.faint="#9ea8b5",this.line="#e4e9f2",this.tint="#f0f4fc",this.barTint="#f8fafe",this.side="#f7f8fb",this.sideInk="#3a4452",this.sideDim="#6b7684",this.sideLine="#e0e4eb",this.sky="#e3edfb",this.skyInk="#4a6ea0",this.accent="#4a6ea0",this.colour="#4fb3a8",this.radius="6px",this.wash="linear-gradient(135deg, #f1f5fd 0%, #fdfcfa 48%, #fdf5ee 100%)"}parts(){return[...super.parts(),this.tree(),this.icons(),this.small()]}library(){return f`
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
        `}};o(Zn,"$ManualTheme");let St=Zn;const ic=s(St);s(po,re)(ic);var pc=Object.defineProperty,dc=Object.getOwnPropertyDescriptor,cc=o((d,e,a,n)=>{for(var t=dc(e,a),i=d.length-1,p;i>=0;i--)(p=d[i])&&(t=p(e,a,t)||t);return t&&pc(e,a,t),t},"__decorateClass$e");const Xn=class Xn extends b{constructor(){super(...arguments),this.specification=new ka}defines(e){e.classes.add(this,"pa-first")}erase(e){e.classes.revert(this)}};o(Xn,"$First");let es=Xn;const Kn=class Kn extends u{$saidOfAParagraph(e){l(e instanceof g,"first is said of a paragraph, and this is not one")}};o(Kn,"FirstSpecification");let ka=Kn;cc([h("first is said of a paragraph")],ka.prototype,"$saidOfAParagraph");s(es);const Jn=class Jn extends ee{constructor(){super(...arguments),this.serif="'Source Serif 4', Georgia, serif",this.paper="#fdfcfa",this.ink="#343c4a",this.soft="#727d8c",this.faint="#9ea8b5",this.line="#e4e9f2",this.tint="#f0f4fc",this.barTint="#f8fafe",this.sky="#e3edfb",this.skyInk="#4a6ea0",this.accent="#4a6ea0",this.wash="linear-gradient(135deg, #f2f6fd 0%, #fdfcfa 48%, #fdf6f1 100%)",this.side="#f7f8fb",this.sideInk="#3a4452",this.sideDim="#7f8a9b",this.sideLine="#e3e7ee",this.barHeight="52px",this.holdsColumn="232px",this.space="24px",this.cover="132px",this.volume="184px",this.radius="6px",this.spine="inset 3px 0 0 rgba(0, 0, 0, 0.08), inset 4px 0 0 rgba(255, 255, 255, 0.35), 0 6px 12px -10px rgba(44, 52, 64, 0.3)",this.lift="inset 3px 0 0 rgba(0, 0, 0, 0.08), inset 4px 0 0 rgba(255, 255, 255, 0.35), 0 10px 16px -12px rgba(44, 52, 64, 0.35)",this.openSpine="inset 7px 0 0 rgba(0, 0, 0, 0.07), inset 9px 0 0 rgba(255, 255, 255, 0.45), 0 12px 22px -16px rgba(44, 52, 64, 0.35)"}parts(){return[...super.parts(),this.shelf(),this.jackets(),this.desk(),this.unfolded(),this.small()]}page(){return f`
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
        `}};o(Jn,"$Bookshelf");let as=Jn;const lc=s(as);var hc=Object.defineProperty,fc=Object.getOwnPropertyDescriptor,ut=o((d,e,a,n)=>{for(var t=n>1?void 0:n?fc(e,a):e,i=d.length-1,p;i>=0;i--)(p=d[i])&&(t=(n?p(e,a,t):p(t))||t);return n&&t&&hc(e,a,t),t},"__decorateClass$d");const Qn=class Qn extends R{get books(){return this.text.find(y).filter(e=>e.is(E)&&e!==this.synopsis)}get laidOutChapters(){return[...super.laidOutChapters,...this.books]}get pages(){return[this.synopsis,...this.books,...this.chapters]}head(){return r("div",{className:"pd-switches",children:this.switches()})}belowThePages(){return r("div",{className:"pd-shelf",children:this.volumes()})}volumes(){const e=s(D),a=s(w);return(this.table?.annotations.expressed(Z)?.entries??[]).map((t,i)=>{const p=N(t).identifier,m=this.chapterAt(p),$=m===void 0?this.coverOf(p):this.jacketOf(m);if($!==void 0)return c("div",{className:"pd-volume",children:[this.jacket($,p),r("div",{className:"pd-paragraph pd-name",children:c(e,{children:[r(a,{children:p}),$.title.name]})})]},i)})}jacket(e,a){if(e===void 0)return;const n=s(Fd),t=s(w);return a===void 0?r(n,{cover:e}):r(n,{cover:e,children:r(t,{children:a})})}line(e){if(e===void 0)return;const a=s(ap),n=s(Xp);return c(k,{children:[r(a,{cover:e}),r(n,{cover:e})]})}wayIntoTheBook(e){if(e===void 0)return;const a=s(D),n=s(w),t=e.mention.identifier;return r("div",{className:"pd-paragraph pd-read",children:c(a,{children:[r(n,{children:t}),`Read ${e.title.name}`]})})}jacketOf(e){return e===this.synopsis?this.cover:e.annotations.expressed(T)?.cover??(this.appendix.includes(e)?void 0:this.cover)}coverOf(e){return super.coverOf(e)??this.books.map(a=>a.annotations.expressed(T)?.cover).find(a=>a!==void 0&&a.mention?.identifier===e)}chapterAt(e){return super.chapterAt(e)??this.books.find(a=>this.placeOf(a)===e)}placeOf(e){const a=e.title?.annotations.expressed(tt)?.identifier,n=this.means?.identifier;if(!(a===void 0||n===void 0))return`${n.replace(/\/+$/u,"")}/#${a}`}$Bound(){const e=s(mc);for(const a of[this.synopsis,...this.books])a?.annotations.add(this,r(e,{}));super.$Bound()}};o(Qn,"$Catalogue");let ts=Qn;const Vn=class Vn extends F{constructor(){super(...arguments),this.specification=new va,this.card=x.div`
        &:not(.pa-open) { display: none; }
    `}get chapter(){return this.parent}get catalogue(){return this.book}get isTheFront(){return this.chapter===this.catalogue.synopsis}get cover(){return this.catalogue.jacketOf(this.chapter)}$CatalogueDesk(...e){this.$Format(...e);const a=s(ct),n=this.card;this.style=({className:t,children:i})=>{const p=this.catalogue,m=this.cover,$=[...this.chapter.classes].includes("pa-open"),v=this.isTheFront?s(p.title):void 0;return p.painted(m,c(n,{className:`${t??""} pd-catalogue-desk${$?" pa-open":""}`.trim(),children:[p.jacket(m),c("div",{className:"pd-words",children:[v===void 0?void 0:r(v,{}),i]}),m===void 0||this.isTheFront?void 0:r("div",{className:"pd-line",children:p.line(m)}),p.wayIntoTheBook(m),m===void 0?void 0:r(a,{chapter:this.chapter,annotation:uc,children:"read on"})]}))}}defines(e){super.defines(e),e.classes.add(this,"pa-catalogue-desk")}erase(e){super.erase(e),e.classes.revert(this)}};o(Vn,"$CatalogueDesk");let ss=Vn;const Sn=class Sn extends u{$holdsASynopsis(e){l(e instanceof y&&e.is(E),"a catalogue desk holds a synopsis, and this is not one")}};o(Sn,"CatalogueDeskSpecification");let va=Sn;ut([h("a catalogue desk holds a synopsis")],va.prototype,"$holdsASynopsis",1);const er=class er extends Vi{get identifier(){return this._book??super.identifier}$Bound(){super.$Bound(),this._book=this.chapter?.annotations.expressed(E)?.means?.identifier}};o(er,"$BookLink");let ya=er;ut([Ki()],ya.prototype,"_book",2);const ar=class ar extends b{constructor(){super(...arguments),this.specification=new xa}defines(e){e.classes.add(this,"pa-caption")}erase(e){e.classes.revert(this)}};o(ar,"$Caption");let os=ar;const tr=class tr extends b{constructor(){super(...arguments),this.specification=new wa}defines(e){e.classes.add(this,"pa-arrow")}erase(e){e.classes.revert(this)}};o(tr,"$Arrow");let ns=tr;const sr=class sr extends b{constructor(){super(...arguments),this.specification=new H}defines(e){e.classes.add(this,"pa-unfolded-desk")}erase(e){e.classes.revert(this)}};o(sr,"$UnfoldedDesk");let rs=sr;const or=class or extends u{$isAParagraph(e){l(e instanceof g,"a caption is a paragraph, and this is not one")}};o(or,"CaptionSpecification");let xa=or;ut([h("a caption is a paragraph")],xa.prototype,"$isAParagraph",1);const nr=class nr extends u{$isAWordOfTheTable(e){l(e instanceof z&&e.chapter?.is(J)===!0,"an arrow is a word of the table of contents, and this is not one")}};o(nr,"ArrowSpecification");let wa=nr;ut([h("an arrow is a word of the table of contents")],wa.prototype,"$isAWordOfTheTable",1);const lo=s(ts),gc=s(ss),bc=s(ya);s(os);s(ns);const uc=s(rs),mc=gc;s(lo,mt)(bc);s(lo,re)(lc);s(lo,Q)(pe);var $c=Object.defineProperty,kc=Object.getOwnPropertyDescriptor,Ve=o((d,e,a,n)=>{for(var t=kc(e,a),i=d.length-1,p;i>=0;i--)(p=d[i])&&(t=p(e,a,t)||t);return t&&$c(e,a,t),t},"__decorateClass$c");const rr=class rr extends b{constructor(){super(...arguments),this.specification=new Oa}defines(e){e.classes.add(this,"pa-question")}erase(e){e.classes.revert(this)}};o(rr,"$Question");let is=rr;const ir=class ir extends b{constructor(){super(...arguments),this.specification=new Da}defines(e){e.classes.add(this,"pa-answer")}erase(e){e.classes.revert(this)}};o(ir,"$Answer");let ps=ir;const pr=class pr extends b{constructor(){super(...arguments),this.specification=new ja}defines(e){e.classes.add(this,"pa-decision")}erase(e){e.classes.revert(this)}};o(pr,"$Decision");let za=pr;const dr=class dr extends b{constructor(){super(...arguments),this.specification=new Pa}defines(e){e.classes.add(this,"pa-pain")}erase(e){e.classes.revert(this)}};o(dr,"$Pain");let ds=dr;const cr=class cr extends b{constructor(){super(...arguments),this.specification=new Ca}defines(e){e.classes.add(this,"pa-solution")}erase(e){e.classes.revert(this)}};o(cr,"$Solution");let cs=cr;const lr=class lr extends u{$isAParagraph(e){l(e instanceof g,"a question is a paragraph, and this is not one")}};o(lr,"QuestionSpecification");let Oa=lr;Ve([h("a question is a paragraph")],Oa.prototype,"$isAParagraph");const hr=class hr extends u{$isAParagraph(e){l(e instanceof g,"an answer is a paragraph, and this is not one")}};o(hr,"AnswerSpecification");let Da=hr;Ve([h("an answer is a paragraph")],Da.prototype,"$isAParagraph");const fr=class fr extends u{$isAParagraph(e){l(e instanceof g,"a decision is a paragraph, and this is not one")}};o(fr,"DecisionSpecification");let ja=fr;Ve([h("a decision is a paragraph")],ja.prototype,"$isAParagraph");const gr=class gr extends u{$isAParagraph(e){l(e instanceof g,"a pain is a paragraph, and this is not one")}};o(gr,"PainSpecification");let Pa=gr;Ve([h("a pain is a paragraph")],Pa.prototype,"$isAParagraph");const br=class br extends u{$isAParagraph(e){l(e instanceof g,"a solution is a paragraph, and this is not one")}};o(br,"SolutionSpecification");let Ca=br;Ve([h("a solution is a paragraph")],Ca.prototype,"$isAParagraph");s(is);s(ps);s(za);s(ds);s(cs);var vc=Object.defineProperty,yc=Object.getOwnPropertyDescriptor,de=o((d,e,a,n)=>{for(var t=yc(e,a),i=d.length-1,p;i>=0;i--)(p=d[i])&&(t=p(e,a,t)||t);return t&&vc(e,a,t),t},"__decorateClass$b");const ur=class ur extends b{constructor(){super(...arguments),this.specification=new $e,this.span=x.span.attrs({className:"pd-number"})``,this.close=x.span.attrs({className:"pd-close"})``}get number(){const e=O.copy(this.text).trim();return e===""?NaN:Number(e)}note(){const e=this.span,a=this.close,n=s(D),t=s(w),i=this.chapter?.mention?.identifier;return c(k,{children:[r(e,{children:this.number}),i===void 0?void 0:r(a,{children:c(n,{children:[r(t,{children:i}),"×"]})})]})}defines(e){e.classes.add(this,"pa-concept")}erase(e){e.classes.revert(this)}};o(ur,"$Concept");let G=ur;const mr=class mr extends b{constructor(){super(...arguments),this.specification=new _e}defines(e){e.classes.add(this,"pa-designed")}erase(e){e.classes.revert(this)}};o(mr,"$Designed");let ls=mr;const $r=class $r extends b{constructor(){super(...arguments),this.specification=new _e}defines(e){e.classes.add(this,"pa-decided")}erase(e){e.classes.revert(this)}};o($r,"$Decided");let hs=$r;const kr=class kr extends b{constructor(){super(...arguments),this.specification=new ke}defines(e){e.classes.add(this,"pa-desk")}erase(e){e.classes.revert(this)}};o(kr,"$Desk");let Aa=kr;const vr=class vr extends b{constructor(){super(...arguments),this.specification=new ke}defines(e){e.classes.add(this,"pa-phone")}erase(e){e.classes.revert(this)}};o(vr,"$Phone");let Ma=vr;const yr=class yr extends b{constructor(){super(...arguments),this.specification=new ke}defines(e){e.classes.add(this,"pa-thumbnail")}erase(e){e.classes.revert(this)}};o(yr,"$Thumbnail");let Fe=yr;const xr=class xr extends b{constructor(){super(...arguments),this.specification=new ve}defines(e){e.classes.add(this,"pa-precedent")}erase(e){e.classes.revert(this)}};o(xr,"$Precedent");let fs=xr;const wr=class wr extends b{constructor(){super(...arguments),this.specification=new ve}defines(e){e.classes.add(this,"pa-source")}erase(e){e.classes.revert(this)}};o(wr,"$Source");let gs=wr;const zr=class zr extends b{constructor(){super(...arguments),this.specification=new Na}defines(e){e.classes.add(this,"pa-where")}erase(e){e.classes.revert(this)}};o(zr,"$Where");let bs=zr;const Or=class Or extends u{$isASection(e){l(e instanceof A,"a concept is a section, and this is not one")}$givenItsNumber(e){l(Number.isInteger(e.annotations.expressed(G)?.number),"a concept is given its number, and this one was given something else")}$photographedThreeWays(e){const a=e.text.find(g);l([Aa,Ma,Fe].every(n=>a.some(t=>t.is(n))),"a concept is photographed at a desk, at a phone, and small, and this one is missing a photograph")}};o(Or,"ConceptSpecification");let $e=Or;de([h("a concept is a section")],$e.prototype,"$isASection");de([h("a concept is given its number")],$e.prototype,"$givenItsNumber");de([h("a concept is photographed at a desk, at a phone, and small")],$e.prototype,"$photographedThreeWays");const Dr=class Dr extends u{$isAParagraphHoldingOneImage(e){l(e instanceof g&&e.text.find(eo).length===1,"a photograph is a paragraph that holds one image, and this is not one")}};o(Dr,"PhotographSpecification");let ke=Dr;de([h("a photograph is a paragraph that holds one image")],ke.prototype,"$isAParagraphHoldingOneImage");const jr=class jr extends u{$saidOfAParagraphOfAConcept(e){l(e instanceof g&&e.parent instanceof Lp&&e.parent.is(G),"this is said of a paragraph of a concept, and here it is said of something else")}};o(jr,"OfAConceptSpecification");let ve=jr;de([h("this is said of a paragraph of a concept")],ve.prototype,"$saidOfAParagraphOfAConcept");const Pr=class Pr extends ve{$refersToWhereItIsBuilt(e){l(e.text.find(z).some(a=>a.is(S)),"a where refers to where the concept is built, and this one refers nowhere")}};o(Pr,"WhereSpecification");let Na=Pr;de([h("a where refers to where the concept is built")],Na.prototype,"$refersToWhereItIsBuilt");const Cr=class Cr extends u{$saidOfAConcept(e){l(e.is(G),"this is said of a concept, and here it is said of something else")}};o(Cr,"OfAConceptSectionSpecification");let _e=Cr;de([h("this is said of a concept")],_e.prototype,"$saidOfAConcept");s(G);s(ls);s(hs);s(Aa);s(Ma);s(Fe);s(fs);s(gs);s(bs);var xc=Object.defineProperty,wc=Object.getOwnPropertyDescriptor,bp=o((d,e,a,n)=>{for(var t=wc(e,a),i=d.length-1,p;i>=0;i--)(p=d[i])&&(t=p(e,a,t)||t);return t&&xc(e,a,t),t},"__decorateClass$a");const zc=o((d,e)=>d.chapters.flatMap(a=>d.sections(a)).find(a=>a.is(G)&&a.mention?.identifier===e),"conceptAt"),Oc=o(d=>{const e=d.text.find(g).find(a=>a.is(Fe))?.text.find(eo)[0];return e===void 0?"":e.contents||O.copy(e.text)},"thumbnailOf"),Ar=class Ar extends F{constructor(){super(...arguments),this.specification=new Ia,this.themeProvider=!0,this.style=x.div`
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
    `}get chapter(){return this.parent}get concepts(){return this.book.sections(this.chapter).filter(e=>e.is(G))}get open(){return this.concepts.find(e=>e.mention?.identifier===this.book?.$bookmark)}defines(e){super.defines(e),e.classes.add(this,"pa-gallery");const a=this.open,n=this.concepts.find(t=>[...t.classes].includes("pa-open"));n!==a&&(n?.classes.revert(this),a?.classes.add(this,"pa-open"))}erase(e){super.erase(e),e.classes.revert(this)}};o(Ar,"$Gallery");let us=Ar;const Mr=class Mr extends F{constructor(){super(...arguments),this.specification=new Ta,this.strip=x.div`
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
    `}get paragraph(){return this.parent}get places(){return this.paragraph.text.find(z).map(e=>e.annotations.expressed(S)?.identifier).filter(e=>e!==void 0)}get concepts(){const e=this.book;return[...new Set(this.places.map(a=>zc(e,a)).filter(a=>a!==void 0))]}get chosen(){const e=this.paragraph.parent?.text.find(g).filter(a=>a.is(za))??[];return new Set(e.flatMap(a=>a.text.find(z).map(n=>n.annotations.expressed(S)?.identifier)).filter(a=>a!==void 0))}$Strip(...e){this.$Format(...e);const a=this.strip,n=s(D),t=s(w);this.style=({className:i,children:p})=>{const m=this.chosen;return c(a,{className:`${i??""} pd-strip`.trim(),children:[this.concepts.map(($,v)=>{const j=$.mention.identifier;return c(n,{children:[r(t,{children:j}),c("span",{className:`pd-thumb${m.has(j)?" pd-chosen":""}`,children:[r("img",{src:Oc($),alt:""}),c("span",{className:"pd-name",children:[r("span",{className:"pd-number",children:$.annotations.expressed(G)?.number}),$.canonical?.name]})]})]},v)}),r("span",{className:"pd-said",children:p})]})}}defines(e){super.defines(e),e.classes.add(this,"pa-strip")}erase(e){super.erase(e),e.classes.revert(this)}};o(Mr,"$Strip");let ms=Mr;const Nr=class Nr extends u{$isAChapter(e){l(e instanceof y,"a gallery is a chapter, and this is not one")}};o(Nr,"GallerySpecification");let Ia=Nr;bp([h("a gallery is a chapter")],Ia.prototype,"$isAChapter");const Ir=class Ir extends u{$isAParagraphReferringToConcepts(e){l(e instanceof g&&e.text.find(z).some(a=>a.annotations.expressed(S)!==void 0),"a strip is a paragraph that refers to concepts, and this one refers to nothing")}};o(Ir,"StripSpecification");let Ta=Ir;bp([h("a strip is a paragraph that refers to concepts")],Ta.prototype,"$isAParagraphReferringToConcepts");s(us);s(ms);const Tr=class Tr extends ee{constructor(){super(...arguments),this.accent="#23407a",this.ink="#343c4a",this.heading="#1a1f36",this.soft="#727d8c",this.faint="#9ea8b5",this.line="#e4e9f2",this.paper="#fdfcfa",this.side="#f8f9fb",this.holdsColumn="256px",this.barHeight="52px",this.card="12.5rem",this.shadow="0 1px 2px rgba(43, 54, 60, 0.05), 0 6px 18px rgba(43, 54, 60, 0.05)",this.lift="0 2px 4px rgba(43, 54, 60, 0.06), 0 14px 32px rgba(43, 54, 60, 0.10)",this.barLight="#fcfcfd",this.barMid="#f8f9fc",this.barDeep="#f2f4f9",this.barShadow="0 1px 0 rgba(43, 54, 60, 0.05)",this.sideLight="#fafbfc",this.sideDeep="#f2f4f8",this.codeGround="#f6f7fa",this.hairline="1px",this.stroke="2px",this.rise="-1px",this.gloss="inset 0 1px 0 rgba(255, 255, 255, 0.7)",this.ring="0 0 0 2px color-mix(in oklab, var(--band) 80%, white)",this.decisionShadow="0 1px 2px rgba(43, 54, 60, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.6)"}parts(){return[...super.parts(),this.backdrop(),this.bands(),this.guide(),this.story(),this.said(),this.small()]}backdrop(){return f`
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
        `}};o(Tr,"$Exhibition");let $s=Tr;const Dc=s($s);var jc=Object.defineProperty,Pc=Object.getOwnPropertyDescriptor,up=o((d,e,a,n)=>{for(var t=Pc(e,a),i=d.length-1,p;i>=0;i--)(p=d[i])&&(t=p(e,a,t)||t);return t&&jc(e,a,t),t},"__decorateClass$9");const Hr=class Hr extends R{constructor(){super(...arguments),this.specification=new Ee}get designs(){return this.chapters.filter(e=>e.is(I))}get open(){return super.open??this.body[0]}head(){}switches(){}$Bound(){const e=s(Bd),a=s(Hd),n=s(Wd),t=this.designs;for(const i of t)i.annotations.add(this,r(e,{})),i.text.add(this,r(n,{}));for(const i of this.table?.annotations.expressed(Z)?.entries??[]){const p=N(i)?.identifier,m=p===void 0?void 0:this.chapterAt(p);m===void 0||!t.includes(m)||i.annotations.add(this,r(a,{number:t.indexOf(m)+1}))}super.$Bound()}};o(Hr,"$Portfolio");let ks=Hr;const Br=class Br extends B{$everyChapterInAPart(e){l(e.chapters.every(a=>a.part!==void 0),"every chapter of a portfolio is in a part, and one here is in none")}$showsEveryDesign(e){l(e.designs.every(a=>lt(a,g).some(n=>n.is(Me))),"a portfolio shows every design it holds as built, in a paragraph said to be the exhibit, and one here has none")}};o(Br,"PortfolioSpecification");let Ee=Br;up([h("every chapter of a portfolio is in a part")],Ee.prototype,"$everyChapterInAPart");up([h("a portfolio shows every design it holds as built")],Ee.prototype,"$showsEveryDesign");const mp=s(ks);s(mp,re)(Dc);s(mp,Q)(pe);const Wr=class Wr extends fe{};o(Wr,"$PortfolioCover");let vs=Wr;s(vs);const Lr=class Lr extends ee{constructor(){super(...arguments),this.prose="'Source Serif 4', Georgia, serif",this.ink="#343c4a",this.heading="#1a1f36",this.soft="#727d8c",this.faint="#9ea8b5",this.line="#e4e9f2",this.paper="#ffffff",this.side="#f8f9fb",this.holdsColumn="240px",this.barHeight="52px",this.shadow="0 1px 2px rgba(43, 54, 60, 0.05), 0 6px 18px rgba(43, 54, 60, 0.05)",this.lift="0 2px 4px rgba(43, 54, 60, 0.06), 0 14px 32px rgba(43, 54, 60, 0.10)",this.barLight="#fcfcfd",this.barMid="#f8f9fc",this.barDeep="#f2f4f9",this.barShadow="0 1px 0 rgba(43, 54, 60, 0.05)",this.sideLight="#fafbfc",this.sideDeep="#f2f4f8",this.hairline="1px",this.stroke="2px"}parts(){return[...super.parts(),this.bands(),this.guide(),this.order(),this.surface(),this.entries(),this.small()]}bands(){return f`
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
        `}};o(Lr,"$Typeset");let Ha=Lr;const $p=s(Ha);var Cc=Object.defineProperty,Ac=Object.getOwnPropertyDescriptor,kp=o((d,e,a,n)=>{for(var t=Ac(e,a),i=d.length-1,p;i>=0;i--)(p=d[i])&&(t=p(e,a,t)||t);return t&&Cc(e,a,t),t},"__decorateClass$8");const C=o(d=>d.annotations.expressed(X)?.date?.date??"","dayOf"),ye=o(d=>{const[e,a]=C(d).split("-");return e===void 0||a===void 0?"":new Date(Date.UTC(Number(e),Number(a)-1,1)).toLocaleString("en-GB",{month:"long",year:"numeric",timeZone:"UTC"})},"monthOf"),Rr=class Rr extends b{constructor(){super(...arguments),this.specification=new H}defines(e){e.classes.add(this,"pa-newest-first")}erase(e){e.classes.revert(this)}};o(Rr,"$NewestFirst");let Ba=Rr;const Mc=s(Ba),vp=Mc,Fr=class Fr extends g{write(){const e=s(ct);return r(e,{annotation:vp,children:"newest first"})}$Define(){super.$Define(),this.classes.add(this,"pd-entry-order")}};o(Fr,"$EntryOrder");let ys=Fr;const _r=class _r extends z{write(){return String(this.book.entries.indexOf(this.chapter)+1)}$Define(){super.$Define(),this.classes.add(this,"pd-entry-number")}};o(_r,"$EntryNumber");let xs=_r;const Er=class Er extends z{write(){const[e,a,n]=C(this.$entry).split("-");if(!(e===void 0||a===void 0||n===void 0))return new Date(Date.UTC(Number(e),Number(a)-1,Number(n.slice(0,2)))).toLocaleString("en-GB",{day:"numeric",month:"short",timeZone:"UTC"})}$Define(){super.$Define(),this.classes.add(this,"pd-entry-day")}};o(Er,"$EntryDay");let ws=Er;const qr=class qr extends We{paging(){return f``}};o(qr,"$JournalLayout");let zs=qr;const Nc=s(ys),Ic=s(xs),yp=s(ws),xp=s(zs),Tc=Nc,Hc=Ic,Bc=yp,Gr=class Gr extends R{constructor(){super(...arguments),this.specification=new xe}get entries(){return this.body}get latest(){return[...this.entries].sort((e,a)=>C(a).localeCompare(C(e)))[0]}get pages(){const e=[...this.entries].sort((a,n)=>C(a).localeCompare(C(n)));return this.is(Ba)?e.reverse():e}get open(){return super.open??this.latest}head(){}switches(){}turns(){}$Bound(){const e=s(Hc);for(const t of this.entries)t.text.add(this,r(e,{}));const a=s(Bc);for(const t of this.table?.annotations.expressed(Z)?.entries??[]){const i=N(t)?.identifier,p=i===void 0?void 0:this.chapterAt(i);p===void 0||!this.entries.includes(p)||t.text.add(this,r(a,{entry:p}))}const n=s(Tc);this.table?.text.add(this,r(n,{})),this.$is=[vp],super.$Bound()}};o(Gr,"$Journal");let Wa=Gr;const Ur=class Ur extends B{$everyEntryIsDated(e){const a=e.entries.find(n=>!n.is(X));l(a===void 0,`every entry of a journal is dated, and "${a?.title?.name}" is not`)}$everyEntrySaysItsMonth(e){const a=e.entries.find(n=>n.part?.name!==ye(n));l(a===void 0,a===void 0?"":`every entry of a journal says the month of its date as its part, and "${a.title?.name}" says "${a.part?.name??"none"}" for ${ye(a)}`)}};o(Ur,"JournalSpecification");let xe=Ur;kp([h("every entry of a journal is dated")],xe.prototype,"$everyEntryIsDated");kp([h("every entry of a journal says the month of its date as its part")],xe.prototype,"$everyEntrySaysItsMonth");const ho=s(Wa);s(ho,re)($p);s(ho,Q)(pe);s(ho,bt)(xp);const Yr=class Yr extends fe{};o(Yr,"$JournalCover");let Os=Yr;const wp=s(Os);var Wc=Object.defineProperty,Lc=Object.getOwnPropertyDescriptor,Rc=o((d,e,a,n)=>{for(var t=Lc(e,a),i=d.length-1,p;i>=0;i--)(p=d[i])&&(t=p(e,a,t)||t);return t&&Wc(e,a,t),t},"__decorateClass$7");const Zr=class Zr extends b{constructor(){super(...arguments),this.specification=new La}get section(){return this.parent instanceof A?this.parent:void 0}get headings(){const e=this.section;return e===void 0?[]:e.text.find(Si).filter(a=>a!==e.canonical)}defines(e){e.classes.add(this,"pa-opaque")}erase(e){e.classes.revert(this)}$Bound(){for(const e of this.headings){const a=e.annotations.expressed(tt),n=e.annotations.expressed(Vi);for(const t of[a,n])t!==void 0&&e.annotations.remove(e,t)}super.$Bound()}};o(Zr,"$Opaque");let Ds=Zr;const Xr=class Xr extends u{$saidOfASection(e){l(e instanceof A,"opaque is said of a section, and this is not one")}};o(Xr,"OpaqueSpecification");let La=Xr;Rc([h("opaque is said of a section")],La.prototype,"$saidOfASection");const Fc=s(Ds);var _c=Object.defineProperty,Ec=Object.getOwnPropertyDescriptor,_=o((d,e,a,n)=>{for(var t=Ec(e,a),i=d.length-1,p;i>=0;i--)(p=d[i])&&(t=p(e,a,t)||t);return t&&_c(e,a,t),t},"__decorateClass$6");const Kr=class Kr extends Si{$Define(){super.$Define(),this.classes.add(this,"pd-speaker")}$Bound(){super.$Bound();const e=this.annotations.expressed(tt);e!==void 0&&this.annotations.remove(this,e)}};o(Kr,"$Speaker");let qe=Kr;const Jr=class Jr extends ao{$Define(){super.$Define(),this.classes.add(this,"pd-time")}};o(Jr,"$Time");let js=Jr;const Qr=class Qr extends Rp{$Define(){super.$Define(),this.classes.add(this,"pd-participant")}};o(Qr,"$Participant");let Ra=Qr;const Vr=class Vr extends g{get participants(){return this.text.find(Ra)}write(){const e=this.participants;return e.flatMap((a,n)=>{const t=s(a);return[n===0?"":n===e.length-1?" and ":", ",r(t,{},n)]})}$Define(){super.$Define(),this.classes.add(this,"pd-participants")}};o(Vr,"$Participants");let Fa=Vr;const Ql=s(qe),qc=s(js),Vl=s(Ra),Sl=s(Fa),Gc=qc,Uc=o(d=>{const e=new Date(d);if(Number.isNaN(e.getTime()))return d;const a=e.toLocaleDateString("en-GB",{day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return`${e.toLocaleTimeString("en-GB",{hour:"2-digit",minute:"2-digit",timeZone:"UTC"})} UTC, ${a}`},"shownTime"),Sr=class Sr extends A{constructor(){super(...arguments),this.specification=new Ge,this.$at=void 0}get when(){return this.$at??""}get speaker(){return this.text.find(qe)[0]}write(){const e=s(Gc),a=this.speaker,n=a===void 0?void 0:s(a),t=[...this.text].filter(i=>i!==a);return c(k,{children:[n===void 0?void 0:r(n,{}),r(e,{children:`[${Uc(this.when)}](${this.when})`}),r("div",{className:"pd-said",children:t.map((i,p)=>{const m=s(i);return r(m,{},p)})})]})}$Define(){super.$Define(),this.classes.add(this,"pd-message");const e=s(Fc);if(this.annotations.add(this,r(e,{})),this.when==="")return;const a=this.speaker,n=a===void 0?"":L.reference(O.copy(a.text))?.name??O.copy(a.text),t=s(Fp);this.annotations.add(this,r(t,{children:ep.slug(`${this.when.replace(/Z$/u,"")} ${n}`)}))}$Bound(){const e=this.book?.author?.means?.identifier;if(e!==void 0&&this.speaker?.means?.identifier===e){const a=s(Zc);this.annotations.add(this,r(a,{}))}super.$Bound()}};o(Sr,"$Message");let K=Sr;const ei=class ei extends b{constructor(){super(...arguments),this.specification=new _a}defines(e){e.classes.add(this,"pa-mine")}erase(e){e.classes.revert(this)}};o(ei,"$Mine");let Ps=ei;const ai=class ai extends u{$saidOfAMessage(e){l(e instanceof K,"mine is said of a message, and this is not one")}};o(ai,"MineSpecification");let _a=ai;_([h("mine is said of a message")],_a.prototype,"$saidOfAMessage");const Yc=s(Ps),Zc=Yc,ti=class ti extends b{constructor(){super(...arguments),this.specification=new qa}defines(e){e.classes.add(this,"pa-quoted")}erase(e){e.classes.revert(this)}};o(ti,"$Quoted");let Cs=ti;const si=class si extends b{constructor(){super(...arguments),this.specification=new Ga}defines(e){e.classes.add(this,"pa-verbatim")}erase(e){e.classes.revert(this)}};o(si,"$Verbatim");let As=si;const oi=class oi extends b{constructor(){super(...arguments),this.specification=new Ue,this.$from=void 0,this.$to=void 0}get from(){return this.$from??""}get to(){return this.$to??""}defines(e){e.classes.add(this,"pa-period")}erase(e){e.classes.revert(this)}};o(oi,"$Period");let Ea=oi;const ni=class ni extends b{constructor(){super(...arguments),this.specification=new Ue,this.$shown=void 0,this.$all=void 0}get shown(){return Number(this.$shown??0)}get all(){return Number(this.$all??0)}get aside(){return this.all-this.shown}defines(e){e.classes.add(this,"pa-messages")}erase(e){e.classes.revert(this)}};o(ni,"$Messages");let oe=ni;const ri=class ri extends _p{$saysWhen(e){l(e.when!==""&&!Number.isNaN(Date.parse(e.when)),"a message says when it was said, as an instant the machine can read, and this one does not")}$headedByItsSpeaker(e){l(e.canonical instanceof qe,"a message is headed by its speaker, a heading that refers to them, and this one is not")}};o(ri,"MessageSpecification");let Ge=ri;_([h("a message says when it was said")],Ge.prototype,"$saysWhen");_([h("a message is headed by its speaker")],Ge.prototype,"$headedByItsSpeaker");const ii=class ii extends u{$saidOfAParagraph(e){l(e instanceof g,"this is said of a paragraph, and this is not one")}};o(ii,"OfAParagraphSpecification");let qa=ii;_([h("this is said of a paragraph")],qa.prototype,"$saidOfAParagraph");const pi=class pi extends u{$saidOfACover(e){l(e instanceof y&&e.is(M),"this is said of a cover, and this is not one")}};o(pi,"OfACoverSpecification");let Ue=pi;_([h("this is said of a cover")],Ue.prototype,"$saidOfACover");const di=class di extends u{$saidOfAWord(e){l(e instanceof z,"verbatim is said of a word, and this is not one")}};o(di,"VerbatimSpecification");let Ga=di;_([h("verbatim is said of a word")],Ga.prototype,"$saidOfAWord");const eh=s(K),ah=s(Cs),th=s(As),sh=s(Ea),oh=s(oe),Zi=o(d=>d===void 0||d===""?"":new Date(d).toLocaleDateString("en-GB",{day:"numeric",month:"long",year:"numeric",timeZone:"UTC"}),"dayWords"),ci=class ci extends g{write(){const e=this.book,a=e.messageCount?.shown??e.messages.length,n=e.body.length,t=Zi(e.period?.from),i=Zi(e.period?.to);return c(k,{children:[c("span",{className:"pd-tally-count",children:[r("b",{children:a}),n===1?" messages in ":" messages over ",r("b",{children:n}),n===1?" day":" days"]}),r("span",{className:"pd-tally-period",children:t===i?t:`${t} to ${i}`})]})}$Define(){super.$Define(),this.classes.add(this,"pd-tally")}};o(ci,"$Tally");let Ms=ci;const li=class li extends z{write(){return String(this.$entry?.text.find(K).length??0)}$Define(){super.$Define(),this.classes.add(this,"pd-day-count")}};o(li,"$DayCount");let Ns=li;const Xc=s(Ms),Kc=s(Ns),Jc=Xc,Qc=Kc,hi=class hi extends R{constructor(){super(...arguments),this.specification=new ne}get participants(){return this.cover?.text.find(Fa)[0]?.participants??[]}get period(){return this.cover?.annotations.expressed(Ea)}get messageCount(){return this.cover?.annotations.expressed(oe)}get messages(){return this.body.flatMap(e=>e.text.find(K))}get pages(){return[...[...this.body].sort((a,n)=>C(a).localeCompare(C(n))),...this.appendix]}get open(){return super.open??this.pages[0]}head(){const e=s(Jc);return c(k,{children:[super.head(),r(e,{chapter:this.cover})]})}$Bound(){const e=s(Qc);for(const a of this.table?.annotations.expressed(Z)?.entries??[]){const n=N(a)?.identifier,t=n===void 0?void 0:this.chapterAt(n);t===void 0||!this.body.includes(t)||a.text.add(this,r(e,{entry:t}))}super.$Bound()}};o(hi,"$Conversation");let Ua=hi;const fi=class fi extends B{$saysItsParticipantsPeriodAndCount(e){l(e.participants.length>0&&e.period!==void 0&&e.messageCount!==void 0,"a conversation says its participants, its period and how many messages it holds, on its cover, and this one says less")}$everyChapterIsDated(e){const a=e.body.find(n=>!n.is(X));l(a===void 0,`every chapter of a conversation is dated, and "${a?.title?.name}" is not`)}$everyMessageIsAddressed(e){const a=e.messages.find(n=>n.annotations.expressed(tt)===void 0);l(a===void 0,`every message of a conversation is addressed by its time, and the one at "${a?.when}" is not`)}$everyChapterHoldsAMessage(e){const a=e.body.find(n=>n.text.find(K).length===0);l(a===void 0,`every chapter of a conversation holds a message, and "${a?.title?.name}" holds none`)}};o(fi,"ConversationSpecification");let ne=fi;_([h("a conversation says its participants, its period and how many messages it holds")],ne.prototype,"$saysItsParticipantsPeriodAndCount");_([h("every chapter of a conversation is dated")],ne.prototype,"$everyChapterIsDated");_([h("every message of a conversation is addressed by its time")],ne.prototype,"$everyMessageIsAddressed");_([h("every chapter of a conversation holds a message")],ne.prototype,"$everyChapterHoldsAMessage");s(Ua);const Vc=/(::[^\n]*|<\|=\|>|=\|>|=[A-Za-z0-9'_]*>|-\([^)]*\)>|->|==|!=)/gu,Xi=o(d=>d.replace(/[&<>]/gu,e=>({"&":"&amp;","<":"&lt;",">":"&gt;"})[e]),"escaped"),Sc=o(d=>d.split(Vc).map((e,a)=>a%2===0?Xi(e):`<span class="${e.startsWith("::")?"hljs-comment":"hljs-keyword"}">${Xi(e)}</span>`).join(""),"notationHighlighting"),el=o((d,e)=>e==="srt"?Sc(d):Ep(d,e),"boxHighlighting"),gi=class gi extends to{constructor(){super(...arguments),this.$highlighter=el}get name(){return this.language===""?"text":this.language}$CodeBox(...e){this.$Code(...e),this.containers.replace(this,"pre","div")}write(){return c(k,{children:[c("div",{className:"pd-code-bar",children:[r("span",{className:"pd-code-name",children:this.name}),r("button",{type:"button",className:"pd-copy",onClick:o(e=>this.copy(e),"onClick"),children:"Copy"})]}),r("pre",{children:super.write()})]})}copy(e){const a=e.currentTarget.closest(".pd-code-box")?.querySelector("pre")?.textContent??"";navigator.clipboard?.writeText(a)}$Define(){super.$Define(),this.classes.add(this,"pd-code-box")}};o(gi,"$CodeBox");let Is=gi;const nh=s(Is);var al=Object.defineProperty,tl=Object.getOwnPropertyDescriptor,zp=o((d,e,a,n)=>{for(var t=tl(e,a),i=d.length-1,p;i>=0;i--)(p=d[i])&&(t=p(e,a,t)||t);return t&&al(e,a,t),t},"__decorateClass$5");const bi=class bi extends Wa{constructor(){super(...arguments),this.specification=new Ye}get entries(){return this.text.find(y).filter(e=>e.is(E)&&e!==this.synopsis)}get laidOutChapters(){return[...super.laidOutChapters,...this.entries]}sizeOf(e){return e.annotations.expressed(T)?.cover?.annotations.expressed(oe)?.shown??0}};o(bi,"$Register");let Ts=bi;const ui=class ui extends xe{$everyEntryStandsForABook(e){const a=e.entries.find(n=>n.annotations.expressed(E)?.means===void 0);l(a===void 0,`every entry of a register stands for a book, holding its synopsis, and "${a?.title?.name}" stands for none`)}$onlyAChapterAppends(e){const a=[...e.chapters,...e.entries];l(e.text.find(y).every(n=>a.includes(n)||!n.is(Y)),"only an ordinary chapter or an entry files a file, and here a cover, a synopsis or a table of contents files one")}};o(ui,"RegisterSpecification");let Ye=ui;zp([h("every entry of a register stands for a book, holding its synopsis")],Ye.prototype,"$everyEntryStandsForABook");zp([h("only an ordinary chapter or an entry files a file")],Ye.prototype,"$onlyAChapterAppends");const fo=s(Ts);s(fo,re)($p);s(fo,Q)(pe);s(fo,bt)(xp);var sl=Object.defineProperty,ol=Object.getOwnPropertyDescriptor,go=o((d,e,a,n)=>{for(var t=ol(e,a),i=d.length-1,p;i>=0;i--)(p=d[i])&&(t=p(e,a,t)||t);return t&&sl(e,a,t),t},"__decorateClass$4");const mi=class mi extends b{constructor(){super(...arguments),this.specification=new H}defines(e){e.classes.add(this,"pa-synopses")}erase(e){e.classes.revert(this)}};o(mi,"$Synopses");let Hs=mi;const nl=s(Hs),rl=nl,$i=class $i extends g{write(){const e=s(ct);return r(e,{annotation:rl,children:"with the synopsis"})}$Define(){super.$Define(),this.classes.add(this,"pd-row-form")}};o($i,"$RowForm");let Bs=$i;const ki=class ki extends z{write(){return`${this.chapter?.annotations.expressed(T)?.cover?.annotations.expressed(oe)?.shown??0} exchanges`}$Define(){super.$Define(),this.classes.add(this,"pd-entry-count")}};o(ki,"$EntryCount");let Ws=ki;const vi=class vi extends z{write(){return ye(this.chapter)}$Define(){super.$Define(),this.classes.add(this,"pd-entry-month")}};o(vi,"$EntryMonth");let Ls=vi;const yi=class yi extends z{write(){}$Define(){super.$Define(),this.classes.add(this,"pd-entry-open")}};o(yi,"$EntryOpen");let Rs=yi;const xi=class xi extends z{write(){return String(this.$section?.text.find(g).filter(e=>N(e)!==void 0).length??0)}$Define(){super.$Define(),this.classes.add(this,"pd-month-count")}};o(xi,"$MonthCount");let Fs=xi;const wi=class wi extends g{get project(){return this.book}$ProjectHead(...e){this.$Writing(...e),this.containers.replace(this,"span","div")}write(){const e=this.project;if(e===void 0)return;const a=s(D),n=s(w),t=e.coverOf(e.subject?.means?.identifier),i=e.entries,p=i.reduce((v,j)=>v+(j.annotations.expressed(T)?.cover?.annotations.expressed(oe)?.shown??0),0),m=i.map(C).filter(v=>v!=="").sort(),$=m.length===0?"":`${ye(i.find(v=>C(v)===m[0]))} to ${ye(i.find(v=>C(v)===m[m.length-1]))}`;return c(k,{children:[c("span",{className:"pd-crumbs",children:[t===void 0?void 0:c(a,{children:[r(n,{children:t.mention.identifier}),t.title?.name]}),r("i",{children:"/"}),r(a,{children:e.title?.name})]}),c("span",{className:"pd-report",children:[c("span",{children:[r("b",{children:i.length})," conversations"]}),c("span",{children:[r("b",{children:p})," exchanges"]}),c("span",{children:[r("b",{children:e.files.length})," files"]}),r("span",{children:$})]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-project-head")}};o(wi,"$ProjectHead");let _s=wi;const zi=class zi extends g{constructor(){super(...arguments),this.style=x.div`
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
    `}get project(){return this.book}$Knowledge(...e){this.$Writing(...e),this.containers.replace(this,"span",this.style)}write(){const e=this.project;if(e===void 0)return;const a=s(D),n=s(w),t=e.project,i='<svg viewBox="0 0 16 16"><path d="M4 1.5h5.5L13 5v9.5H4z"/><path d="M9.5 1.5V5H13M6 8h4M6 10.5h4"/></svg>';return c(k,{children:[t?.mention===void 0?void 0:c("span",{className:"pd-knowledge-row",children:[c(a,{children:[r(n,{children:t.mention.identifier}),t.title?.name]}),r("span",{className:"pd-at-right",children:"what it is, its instructions"})]}),c("span",{className:"pd-knowledge-row",children:["Files",r("small",{children:e.files.length}),r("span",{className:"pd-at-right",children:"as uploaded"})]}),r("span",{className:"pd-knowledge-files",children:e.files.map((p,m)=>c("span",{className:"pd-knowledge-file",children:[r("span",{className:"pd-drawing",dangerouslySetInnerHTML:{__html:i}}),c(a,{children:[r(n,{children:p.mention.identifier}),p.title?.name]}),r("span",{className:"pd-file-type",children:(p.annotations.find(Y)[0]?.$type??"").replace(/^\./u,"")})]},m))})]})}$Define(){super.$Define(),this.classes.add(this,"pd-knowledge")}};o(zi,"$Knowledge");let Es=zi;const Oi=class Oi extends We{paging(){return f`
            .pd-book.pa-turned .pa-page:not(.pa-open) { display: none; }
            .pd-book:not(.pa-turned) .pa-page.pa-spread { display: none; }
        `}areas(){return f`
            ${super.areas()}
            .pd-book.pa-layout:not(.pa-turned) {
                grid-template-columns: ${({theme:e})=>e.holdsColumn} minmax(0, 1fr) 320px;
                grid-template-areas: 'library library library' 'holds head knowledge' 'holds pages knowledge';
            }
            .pa-layout .pd-knowledge-column { grid-area: knowledge; min-width: 0; overflow-y: auto; }
            .pd-book.pa-turned .pd-knowledge-column { display: none; }
            .pd-book.pa-layout:not(.pa-turned) .pd-head { display: grid; gap: calc(${({theme:e})=>e.space} / 4); align-content: end; padding: calc(${({theme:e})=>e.space} * 0.9167) calc(${({theme:e})=>e.space} * 1.5) calc(${({theme:e})=>e.space} * 0.5833); }
            .pd-book.pa-layout.pa-turned .pd-head { display: none; }
            ${this.head()}
            ${this.list()}
            ${this.side()}
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
                .pd-book:not(.pa-turned) .pd-pages { padding: 0 calc(${({theme:e})=>e.space} * 0.6667) calc(${({theme:e})=>e.space} * 2.5); }
                .pd-book:not(.pa-turned) .pd-pages .pa-volume .pd-word.pd-entry-count { display: none; }
                .pd-book.pa-layout:not(.pa-turned) .pd-head { padding: calc(${({theme:e})=>e.space} * 0.75) calc(${({theme:e})=>e.space} * 0.6667) calc(${({theme:e})=>e.space} / 3); }
                .pd-book.pa-layout:not(.pa-turned) .pd-knowledge-column { order: 4; }
            }
        `}side(){return f`
            .pd-book:not(.pa-turned) .pd-holds { padding-block-start: calc(${({theme:e})=>e.space} * 0.4167); }
            .pd-book .pd-holds .pd-tree-folder:not(.pa-open) { position: relative; }
            .pd-book .pd-holds .pd-tree-folder:not(.pa-open) .pd-section { margin: 0 0 calc(${({theme:e})=>e.space} / 6); }
            .pd-book .pd-holds .pd-tree-folder:not(.pa-open) .pd-sentence.pd-heading { display: flex; align-items: center; gap: calc(${({theme:e})=>e.space} / 3); height: calc(2.1429 * ${({theme:e})=>e.size}); margin: 0; padding: 0 calc(${({theme:e})=>e.space} * 0.5833) 0 calc(${({theme:e})=>e.space} * 1.5); border: 0; font-size: calc(0.9286 * ${({theme:e})=>e.size}); font-weight: 500; line-height: 1; letter-spacing: 0; text-transform: none; color: ${({theme:e})=>e.sideInk}; cursor: pointer; transition: background ${({theme:e})=>e.beat} ease; }
            .pd-book .pd-holds .pd-tree-folder:not(.pa-open) .pd-heading:hover { background: color-mix(in oklab, ${({theme:e})=>e.sky} 30%, white); }
            .pd-book .pd-holds .pd-tree-folder:not(.pa-open) .pd-heading .pa-reference { color: inherit; text-decoration: none; }
            .pd-book .pd-holds .pd-tree-folder:not(.pa-open) .pd-fold-chevron { display: grid; place-items: center; position: absolute; top: calc(${({theme:e})=>e.space} * 0.3125); left: calc(${({theme:e})=>e.space} * 0.5); width: calc(1.1429 * ${({theme:e})=>e.size}); height: calc(1.1429 * ${({theme:e})=>e.size}); padding: 0; border: 0; border-radius: 0; background: none; color: #a5aebb; cursor: pointer; transition: transform 0.18s ease, color ${({theme:e})=>e.beat} ease; }
            .pd-book .pd-holds .pd-tree-folder:not(.pa-open) .pd-fold-chevron .pd-drawing { display: block; width: calc(0.7143 * ${({theme:e})=>e.size}); height: calc(0.7143 * ${({theme:e})=>e.size}); }
            .pd-book .pd-holds .pd-tree-folder:not(.pa-open) .pd-fold-chevron svg { display: block; width: 100%; height: 100%; }
            .pd-book .pd-holds .pd-tree-folder:not(.pa-open) .pd-fold-chevron[aria-pressed='false'] { transform: rotate(90deg); }
            .pd-book .pd-holds .pd-tree-folder:not(.pa-open) .pd-fold-chevron:hover { color: ${({theme:e})=>e.ink}; }
            .pd-book .pd-holds .pd-tree-folder:not(.pa-open) .pd-tree-folder-mark, .pd-book .pd-holds .pd-tree-folder:not(.pa-open) .pa-entry .pd-file-tab, .pd-book .pd-holds .pd-tree-folder:not(.pa-open) .pa-entry .pd-fold-chevron { display: none; }
            .pd-book .pd-holds .pd-tree-folder:not(.pa-open) .pa-folded .pd-paragraph.pa-entry { display: none; }
            .pd-book .pd-holds .pd-tree-folder:not(.pa-open) .pd-paragraph.pa-entry { display: flex; align-items: center; gap: calc(${({theme:e})=>e.space} / 3); margin: 0; padding: calc(${({theme:e})=>e.space} / 6) calc(${({theme:e})=>e.space} * 0.5833) calc(${({theme:e})=>e.space} / 6) calc(${({theme:e})=>e.space} * 1.5); font-size: calc(0.8929 * ${({theme:e})=>e.size}); line-height: 1.35; color: ${({theme:e})=>e.sideInk}; }
            .pd-book .pd-holds .pd-tree-folder:not(.pa-open) .pd-paragraph.pa-entry > a:first-child, .pd-book .pd-holds .pd-tree-folder:not(.pa-open) .pd-paragraph.pa-entry > .pd-word.pa-content, .pd-book .pd-holds .pd-tree-folder:not(.pa-open) .pd-paragraph.pa-entry .pa-content { flex: 1 1 auto; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
            .pd-book .pd-holds .pd-tree-folder:not(.pa-open) .pd-paragraph.pa-entry .pd-word.pa-arrow, .pd-book .pd-holds .pd-tree-folder:not(.pa-open) .pd-paragraph.pa-entry > a:has(> .pa-arrow) { display: none; }
            .pd-book .pd-holds .pd-tree-folder:not(.pa-open) .pd-paragraph.pa-entry .pa-number { display: none; }
            .pd-book .pd-holds .pd-tree-folder:not(.pa-open) .pd-paragraph.pa-entry:hover { background: color-mix(in oklab, ${({theme:e})=>e.sky} 30%, white); }
            .pd-book .pd-holds .pd-tree-folder:not(.pa-open) .pd-paragraph.pa-entry.pa-open { background: linear-gradient(90deg, #eff4fa, #f8fafd); color: ${({theme:e})=>e.heading}; font-weight: 500; }
            @media (max-width: ${({theme:e})=>e.narrow}) {
                .pd-book:not(.pa-turned) .pd-holds { padding: calc(${({theme:e})=>e.space} / 4) calc(${({theme:e})=>e.space} / 3); }
                .pd-book:not(.pa-turned) .pd-holds .pd-chapter.pa-table-of-contents { flex-direction: row; align-items: center; min-height: 0; }
                .pd-book .pd-holds .pd-tree-folder:not(.pa-open) { display: inline-block; vertical-align: top; }
                .pd-book .pd-holds .pd-tree-folder:not(.pa-open) .pd-fold-chevron { position: static; display: inline-grid; vertical-align: middle; margin-inline-end: 2px; }
                .pd-book .pd-holds .pd-tree-folder:not(.pa-open) .pd-sentence.pd-heading { display: inline-flex; height: calc(1.9 * ${({theme:e})=>e.size}); padding: 0 calc(${({theme:e})=>e.space} / 2) 0 calc(${({theme:e})=>e.space} / 6); }
                .pd-book .pd-holds .pd-tree-folder:not(.pa-open) .pd-section { display: inline; margin: 0; }
                .pd-book .pd-holds .pd-tree-folder:not(.pa-open) .pd-paragraph.pa-entry { display: none; }
            }
            .pd-book .pd-holds .pd-sentence.pd-heading .pd-word.pd-month-count { margin-inline-start: auto; font-size: calc(0.7857 * ${({theme:e})=>e.size}); font-weight: 400; color: ${({theme:e})=>e.faint}; font-variant-numeric: tabular-nums; }
            .pd-book .pd-holds .pa-entry .pd-word.pd-entry-day { flex: none; margin-inline-start: auto; font-size: calc(0.7857 * ${({theme:e})=>e.size}); font-weight: 400; color: ${({theme:e})=>e.faint}; font-variant-numeric: tabular-nums; }
        `}};o(Oi,"$ProjectLayout");let qs=Oi;const Di=class Di extends $a{constructor(){super(...arguments),this.specification=new we}get entries(){return this.text.find(y).filter(e=>e.is(E)&&e!==this.synopsis)}get files(){return this.chapters.filter(e=>e.is(P)&&e.is(Y))}get project(){return this.chapters.find(e=>e.is(P)&&!e.is(Y))}get laidOutChapters(){return[...super.laidOutChapters,...this.entries]}get pages(){const e=[...this.entries].sort((a,n)=>C(n).localeCompare(C(a)));return[...super.pages,...e]}get open(){return this.$bookmark===void 0?void 0:this.chapterAt(this.$bookmark)}chapterByPlace(){const e=super.chapterByPlace();for(const a of this.entries)a.mention!==void 0&&!e.has(a.mention.identifier)&&e.set(a.mention.identifier,a);return e}write(){const e=s(xl);return c(k,{children:[super.write(),r("div",{className:"pd-knowledge-column",children:r(e,{chapter:this.cover})})]})}head(){const e=s(this.cover),a=s(yl),n=s(ul);return c(k,{children:[r(e,{}),r(a,{chapter:this.cover}),r(n,{chapter:this.cover})]})}$Bound(){const e=s(ml),a=s($l),n=s(kl);let t="";const i=s(w);for(const $ of this.pages.filter(v=>this.entries.includes(v))){const v=ye($),j=$.annotations.expressed(T)?.cover?.mention?.identifier;$.text.add(this,...v!==t?[r(a,{},"month")]:[],r(e,{},"count"),...j===void 0?[]:[r(n,{children:r(i,{children:j})},"open")]),t=v}const p=s(yp),m=s(vl);for(const $ of this.table?.annotations.expressed(Z)?.entries??[]){const v=N($)?.identifier,j=v===void 0?void 0:this.chapterAt(v);j===void 0||!this.entries.includes(j)||$.text.add(this,r(p,{entry:j}))}for(const $ of this.table?.text.find(A)??[]){$.$is=[io];const v=$.canonical;v!==void 0&&$.text.find(g).some(j=>{const Ui=N(j)?.identifier;return Ui!==void 0&&this.entries.includes(this.chapterAt(Ui))})&&v.text.add(this,r(m,{section:$}))}super.$Bound()}};o(Di,"$ProjectManual");let Gs=Di;const ji=class ji extends Re{$everyEntryStandsForAConversation(e){const a=e.entries.find(n=>n.annotations.expressed(E)?.means===void 0);l(a===void 0,`every entry of a project manual stands for a conversation, holding its synopsis, and "${a?.title?.name}" stands for none`)}$hasOneProjectChapter(e){l(e.chapters.filter(a=>a.is(P)&&!a.is(Y)).length===1,"a project manual has one chapter about the project, which appends no file, and this one has none or more than one")}$onlyAChapterAppends(e){const a=[...e.chapters,...e.entries];l(e.text.find(y).every(n=>a.includes(n)||!n.is(Y)),"only an ordinary chapter or an entry files a file, and here a cover, a synopsis or a table of contents files one")}};o(ji,"ProjectManualSpecification");let we=ji;go([h("every entry of a project manual stands for a conversation, holding its synopsis")],we.prototype,"$everyEntryStandsForAConversation");go([h("a project manual has one chapter about the project, which appends no file")],we.prototype,"$hasOneProjectChapter");go([h("an entry of a project manual files a file only when a chapter may")],we.prototype,"$onlyAChapterAppends");const il=s(Bs),pl=s(Ws),dl=s(Ls),cl=s(Rs),ll=s(Fs),hl=s(_s),fl=s(Es),gl=s(qs),bl=s(Gs),ul=il,ml=pl,$l=dl,kl=cl,vl=ll,yl=hl,xl=fl;s(bl,bt)(gl);const Pi=class Pi extends g{$Define(){super.$Define(),this.classes.add(this,"pd-action")}};o(Pi,"$Action");let Us=Pi;const Ci=class Ci extends g{$Define(){super.$Define(),this.classes.add(this,"pd-result")}};o(Ci,"$Result");let Ys=Ci;const rh=s(Us);s(Ys);var wl=Object.defineProperty,zl=Object.getOwnPropertyDescriptor,Ol=o((d,e,a,n)=>{for(var t=zl(e,a),i=d.length-1,p;i>=0;i--)(p=d[i])&&(t=p(e,a,t)||t);return t&&wl(e,a,t),t},"__decorateClass$3");const Dl='<svg viewBox="0 0 24 24"><path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4M9 12h6M9 16h6"/></svg>',jl='<svg viewBox="0 0 24 24"><path d="M8 7l-5 5 5 5M16 7l5 5-5 5M13 5l-2 14"/></svg>',V=o(d=>{const e=d.book;return e!==void 0&&"$shown"in e?e:void 0},"showingBook"),Ai=class Ai extends b{constructor(){super(...arguments),this.specification=new Ya}defines(e){e.classes.add(this,"pa-version")}erase(e){e.classes.revert(this)}};o(Ai,"$Version");let Zs=Ai;const Mi=class Mi extends u{$saidOfAChapter(e){l(e instanceof y,"a version is said of a chapter, and this is not one")}};o(Mi,"VersionSpecification");let Ya=Mi;Ol([h("a version is said of a chapter")],Ya.prototype,"$saidOfAChapter");const Ni=class Ni extends to{constructor(){super(...arguments),this.$artifact=void 0,this.$place=void 0}get version(){const e=this.$place;if(e!==void 0)return this.book.chapters.find(a=>ep.slug(a.title?.name??"")===e)}get versionName(){return this.version?.title?.name??""}get name(){return this.versionName.replace(/ v\d+(?:-\d+)?$/u,"")||this.$identifier}get number(){return/ v(\d+)(?:-\d+)?$/u.exec(this.versionName)?.[1]??"1"}get kind(){const e=this.$type.replace(/^\./u,"");return e==="md"||e==="txt"||e===""?"document":e==="html"?"page":"code"}get shown(){return V(this)?.$shown===this}$Artifact(...e){this.$Code(...e),this.containers.replace(this,"pre","figure")}write(){const e=[...this.text].map((n,t)=>{const i=s(n);return r(i,{},t)}),a={__html:this.kind==="document"?Dl:jl};return c(k,{children:[c("button",{type:"button",className:"pd-card","aria-pressed":this.shown,onClick:o(()=>this.press(),"onClick"),children:[r("span",{className:"pd-card-mark",dangerouslySetInnerHTML:a}),c("span",{className:"pd-card-words",children:[r("b",{children:this.name}),r("small",{children:`Click to open ${this.kind} · v${this.number}`})]})]}),r("figcaption",{children:e})]})}press(){const e=V(this);e!==void 0&&(e.$shown=e.$shown===this?void 0:this)}$Define(){super.$Define(),this.classes.add(this,"pd-artifact"),this.shown&&this.classes.add(this,"pa-open")}};o(Ni,"$Artifact");let Ze=Ni;const Ii=class Ii extends to{get sentence(){return O.copy(this.text)}get fileName(){return/“([^”]+)”/u.exec(this.sentence)?.[1]??"a file"}get extension(){return(this.fileName.split(".").pop()??"file").toUpperCase().slice(0,4)}get lineCount(){return this.names?this.contents.split(`
`).length:0}get shown(){return V(this)?.$shown===this}$Attachment(...e){this.$Code(...e),this.containers.replace(this,"pre","figure")}write(){const e=[...this.text].map((a,n)=>{const t=s(a);return r(t,{},n)});return c(k,{children:[c("button",{type:"button",className:"pd-chip","aria-pressed":this.shown,onClick:o(()=>this.press(),"onClick"),children:[r("span",{className:"pd-chip-mark",children:this.extension}),c("span",{className:"pd-chip-words",children:[r("b",{children:this.fileName}),r("small",{children:this.names?`${this.lineCount} lines`:"not carried by the export"})]})]}),r("figcaption",{children:e})]})}press(){const e=V(this);e!==void 0&&(e.$shown=e.$shown===this?void 0:this)}$Define(){super.$Define(),this.classes.add(this,"pd-attachment"),this.shown&&this.classes.add(this,"pa-open")}};o(Ii,"$Attachment");let Za=Ii;const ih=s(Zs),ph=s(Ze),dh=s(Za),Ti=class Ti extends Ha{constructor(){super(...arguments),this.sans="'Inter', system-ui, sans-serif",this.mono="ui-monospace, 'Cascadia Code', Consolas, monospace",this.keyword="#1f5fbf",this.string="#9a3b1e",this.type="#116b4a",this.comment="#7a8491"}parts(){return[...super.parts(),this.surfaces(),this.top(),this.rows(),this.openDay(),this.exchanges(),this.said(),this.cards(),this.paneColumn(),this.phone()]}surfaces(){return f`
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
        `}};o(Ti,"$ApplicationForm");let Xs=Ti;const Pl=s(Xs),Hi=class Hi extends g{constructor(){super(...arguments),this.style=x.div`
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
    `}get shown(){return V(this)?.$shown}get artifacts(){return this.book?.messages.flatMap(e=>e.text.find(Ze))??[]}$Pane(...e){this.$Writing(...e),this.containers.replace(this,"span",this.style)}neighbour(e,a){const n=Number(e.number)+a;return this.artifacts.find(t=>t.$artifact===e.$artifact&&Number(t.number)===n)}write(){const e=this.shown;if(e===void 0)return;const a=e instanceof Ze?e:void 0,n=e instanceof Za?e:void 0,t=a?.version,i=t===void 0?void 0:s(t),p=a===void 0?void 0:this.neighbour(a,-1),m=a===void 0?void 0:this.neighbour(a,1),$=n===void 0?"":n.names?n.contents:"The export does not carry this upload; the name is all it kept.";return c(k,{children:[c("div",{className:"pd-pane-bar",children:[r("span",{className:"pd-pane-title",children:a?.name??n?.fileName}),r("span",{className:"pd-pane-kind",children:a?.kind??n?.extension.toLowerCase()}),r("button",{type:"button",className:"pd-pane-copy",onClick:o(v=>this.copy(v),"onClick"),children:"Copy"}),r("button",{type:"button",className:"pd-pane-close","aria-label":"close",onClick:o(()=>this.close(),"onClick"),children:"×"})]}),r("div",{className:"pd-pane-body",children:i===void 0?r("pre",{children:$}):r(i,{})}),a===void 0?void 0:c("div",{className:"pd-pane-foot",children:[c("span",{className:"pd-pane-version",children:[r("button",{type:"button",disabled:p===void 0,onClick:o(()=>this.show(p),"onClick"),children:"‹"}),r("span",{children:`v${a.number}`}),r("button",{type:"button",disabled:m===void 0,onClick:o(()=>this.show(m),"onClick"),children:"›"})]}),r("button",{type:"button",className:"pd-pane-download",onClick:o(()=>this.download(a),"onClick"),children:"Download"})]})]})}show(e){const a=V(this);a!==void 0&&e!==void 0&&(a.$shown=e)}close(){const e=V(this);e!==void 0&&(e.$shown=void 0)}copy(e){const a=e.currentTarget.closest(".pd-pane")?.querySelector(".pd-pane-body");navigator.clipboard?.writeText(a?.textContent??"")}download(e){const a=e.$type.replace(/^\./u,"")||"md",n=new Blob([e.contents],{type:"text/plain"}),t=document.createElement("a");t.href=URL.createObjectURL(n),t.download=`${e.name} v${e.number}.${a}`,t.click(),URL.revokeObjectURL(t.href)}$Define(){super.$Define(),this.classes.add(this,"pd-pane")}};o(Hi,"$Pane");let Ks=Hi;const Cl=s(Ks);var Al=Object.defineProperty,Ml=Object.getOwnPropertyDescriptor,Nl=o((d,e,a,n)=>{for(var t=Ml(e,a),i=d.length-1,p;i>=0;i--)(p=d[i])&&(t=p(e,a,t)||t);return t&&Al(e,a,t),t},"__decorateClass$2");const Bi=class Bi extends b{constructor(){super(...arguments),this.specification=new Xa}get name(){return L.reference(O.copy(this.text))?.name??""}get means(){return this.annotations.expressed(S)}$Define(){super.$Define();const e=L.reference(O.copy(this.text));if(e===void 0)return;const a=s(w);this.annotations.add(this,r(a,{children:e.identifier}))}write(){return this.name}};o(Bi,"$Account");let Xe=Bi;const Wi=class Wi extends u{$saidOfACover(e){l(e instanceof y&&e.is(M),"an account is said of a cover, and this is not one")}};o(Wi,"AccountSpecification");let Xa=Wi;Nl([h("an account is said of a cover")],Xa.prototype,"$saidOfACover");const Li=class Li extends g{get cover(){return this.$cover??this.book?.cover}get account(){return this.cover?.annotations.expressed(Xe)}write(){const e=this.account,a=s(D),n=s(ze),t=s(w);return c(k,{children:[c(a,{children:[r(n,{}),"account"]}),c(a,{children:[r(t,{children:e.means.identifier}),e.name]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-account-line")}};o(Li,"$AccountLine");let Js=Li;const ch=s(Xe),Il=s(Js);var Tl=Object.defineProperty,Hl=Object.getOwnPropertyDescriptor,Bl=o((d,e,a,n)=>{for(var t=Hl(e,a),i=d.length-1,p;i>=0;i--)(p=d[i])&&(t=p(e,a,t)||t);return t&&Tl(e,a,t),t},"__decorateClass$1");const Ri=class Ri extends b{constructor(){super(...arguments),this.specification=new Ja}get uuid(){return O.copy(this.text).trim()}write(){return null}};o(Ri,"$Origin");let Ka=Ri;const Fi=class Fi extends u{$saidOfACoverOrAMessage(e){l(e instanceof y&&e.is(M)||e instanceof K,"an origin is said of a cover or a message, and this is neither")}};o(Fi,"OriginSpecification");let Ja=Fi;Bl([h("an origin is said of a cover or a message")],Ja.prototype,"$saidOfACoverOrAMessage");const lh=s(Ka);var Wl=Object.defineProperty,Ll=Object.getOwnPropertyDescriptor,Rl=o((d,e,a,n)=>{for(var t=Ll(e,a),i=d.length-1,p;i>=0;i--)(p=d[i])&&(t=p(e,a,t)||t);return t&&Wl(e,a,t),t},"__decorateClass");const _i=class _i extends b{constructor(){super(...arguments),this.specification=new Qa}get name(){return L.reference(O.copy(this.text))?.name??""}get means(){return this.annotations.expressed(S)}$Define(){super.$Define();const e=L.reference(O.copy(this.text));if(e===void 0)return;const a=s(w);this.annotations.add(this,r(a,{children:e.identifier}))}write(){return this.name}};o(_i,"$Project");let Ke=_i;const Ei=class Ei extends u{$saidOfACover(e){l(e instanceof y&&e.is(M),"a project is said of a cover, and this is not one")}};o(Ei,"ProjectSpecification");let Qa=Ei;Rl([h("a project is said of a cover")],Qa.prototype,"$saidOfACover");const qi=class qi extends g{get cover(){return this.$cover??this.book?.cover}get project(){return this.cover?.annotations.expressed(Ke)}write(){const e=this.project,a=s(D),n=s(ze),t=s(w);return c(k,{children:[c(a,{children:[r(n,{}),"project"]}),c(a,{children:[r(t,{children:e.means.identifier}),e.name]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-project-line")}};o(qi,"$ProjectLine");let Qs=qi;const hh=s(Ke),Fl=s(Qs),_l=Fl,Gi=class Gi extends Ua{constructor(){super(...arguments),this.$shown=void 0}get project(){return this.cover?.annotations.expressed(Ke)}get account(){return this.cover?.annotations.expressed(Xe)}get origin(){return this.cover?.annotations.expressed(Ka)?.uuid}write(){const e=s(Cl);return c(k,{children:[super.write(),r(e,{chapter:this.cover})]})}me(){const e=s(_l),a=s(Il);return c(k,{children:[super.me(),this.project===void 0?void 0:r(e,{cover:this.cover}),this.account===void 0?void 0:r(a,{cover:this.cover})]})}};o(Gi,"$ClaudeConversation");let Vs=Gi;const Op=s(Vs);s(Op,re)(Pl);s(Op,Q)(pe);const Dp=o(()=>c(st,{children:[r(lp,{}),r(ft,{ground:"#eef5f6",band:"#c3e3e6",bandInk:"#1c565c",foot:"#8db9bd",footInk:"#153e43",ink:"#1f5a60"}),r(gt,{x:"-46",y:"-13"}),r(ot,{children:"[Dougs Library](/dougs-library/)"}),r(nt,{children:"[Doug](/dougs-story/)"}),r(rt,{children:"[Library](/dougs-library/)"}),r(it,{children:"[The Library](/dougs-library/)"}),c(pt,{children:[r(ht,{}),r(dt,{children:`<svg viewBox="0 0 64 64" class="pd-illustration"><path class="light" d="M9 7h46v50H9z"/><path d="M9 7h46v50H9zM9 24h46M9 41h46"/><path class="fill" d="M13 11h5v13h-5zM20 9h4v15h-4zM26 13h6v11h-6zM34 10h4v14h-4zM40 14h6v10h-6z"/><path d="M48 24l4-12 3 1-4 11z"/><path class="fill" d="M13 28h4v13h-4zM19 30h7v11h-7zM28 27h4v14h-4zM34 31h5v10h-5zM41 28h6v13h-6zM49 29h3v12h-3z"/><path class="fill" d="M13 46h6v11h-6zM21 44h4v13h-4zM27 47h8v10h-8zM37 45h4v12h-4zM43 48h6v9h-6z"/><path d="M50 57l3-11 3 1-3 10z"/></svg>
`})]})]}),"SubjectCover$2"),jp=o(()=>c(st,{children:[r(wp,{}),r(qp,{}),r(Be,{children:Dp()}),r(ft,{ground:"#f5eedf",band:"#d9c3a3",bandInk:"#4a3626",foot:"#a3b6cc",footInk:"#2a4262",ink:"#2f4a6a"}),r(gt,{x:"-54",y:"-33"}),r(ot,{children:"[Dougs Story](/dougs-story/)"}),r(nt,{children:"[Doug](/dougs-story/)"}),r(rt,{children:"[Library](/dougs-library/)"}),r(it,{children:"[The Librarian](/dougs-story/)"}),c(pt,{children:[r(ht,{}),r(dt,{children:`<svg viewBox="0 0 64 64" class="pd-illustration"><path class="light" d="M8 13h23v38H8zM33 13h23v38H33z"/><path d="M8 13h23v38H8zM33 13h23v38H33z"/><path d="M13 21h13M13 27h13M13 33h9M38 21h13M38 27h13M38 33h13M38 39h8"/><path class="fill" d="M15 55 45 25l4 4-30 30-6 2z"/><path d="M15 55 45 25l4 4-30 30-6 2zM43 27l4 4M17 53l2 2"/></svg>
`})]})]}),"StoryCover"),El=o(()=>c(st,{children:[r(lp,{}),r(Be,{children:Dp()}),r(Be,{children:jp()}),r(ft,{ground:"#eff1f6",band:"#c0c9df",bandInk:"#2a3a63",foot:"#8e9fc8",footInk:"#1f2d50",ink:"#2a3a63"}),r(gt,{x:"-36",y:"-26"}),r(ot,{children:"[Dougs Claude](/dougs-claude/)"}),r(nt,{children:"[Doug](/dougs-story/)"}),r(rt,{children:"[Library](/dougs-library/)"}),r(it,{children:"[Claude](/dougs-claude/)"}),c(pt,{children:[r(ht,{}),r(dt,{children:`<svg viewBox="0 0 64 64" class="pd-illustration"><path class="light" d="M8 30h48v27H8z"/><path d="M8 30h48v27H8zM8 44h48"/><path class="fill" d="M12 33h5v9h-5zM19 31h4v11h-4zM25 34h7v8h-7zM34 32h4v10h-4zM40 35h8v7h-8z"/><path class="fill" d="M12 47h6v8h-6zM20 48h4v7h-4zM26 46h9v9h-9zM37 49h5v6h-5zM44 47h7v8h-7z"/><path class="light" d="M28 6h28v16H40l-6 5v-5h-6z"/><path d="M28 6h28v16H40l-6 5v-5h-6z"/><path d="M33 11h18M33 16h12"/></svg>
`})]})]}),"SubjectCover$1"),fh=o(()=>c(st,{children:[r(wp,{}),r(Be,{children:El()}),r(Be,{children:jp()}),r(ft,{ground:"#eef5f6",band:"#b6dde2",bandInk:"#1c565c",foot:"#7fb7bd",footInk:"#153e43",ink:"#1f5a60"}),r(gt,{x:"-30",y:"-22"}),r(ot,{children:"[Our Conversations](/our-conversations/)"}),r(nt,{children:"[Doug](/dougs-story/)"}),r(rt,{children:"[Claude](/dougs-claude/)"}),r(it,{children:"[Conversations](/our-conversations/)"}),c(pt,{children:[r(ht,{}),r(dt,{children:`<svg viewBox="0 0 64 64" class="pd-illustration"><path class="light" d="M6 9h34v20H18l-6 6v-6H6z"/><path d="M6 9h34v20H18l-6 6v-6H6z"/><path d="M11 15h24M11 21h16"/><path class="fill" d="M24 31h34v20H52v6l-6-6H24z"/><path d="M24 31h34v20H52v6l-6-6H24z"/><path class="light" d="M29 37h24M29 43h16"/></svg>
`})]})]}),"SubjectCover");export{Vs as $,ch as A,lp as B,nh as C,Jl as D,ht as I,oh as M,lh as O,Sl as P,ah as Q,fh as S,Be as V,gt as W,jp as a,ft as b,Vl as c,sh as d,hh as e,Xl as f,eh as g,Ql as h,rh as i,dh as j,th as k,Kl as l,ph as m,ih as n,Fc as o};
