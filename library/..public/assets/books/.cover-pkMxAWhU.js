var Fd=Object.defineProperty;var n=(p,e)=>Fd(p,"name",{value:e,configurable:!0});import{$ as o,selection as x,$check as l,inert as Ae}from"@dna-platform/chemistry";import{$Theme as Ed,specify as h,$Annotation as b,$Paragraph as g,$Author as co,Word as j,Reference as w,$Subject as cd,$Topic as ld,AnnotationSpecification as u,$Word as O,$Format as G,html as D,$Chapter as y,binder as F,$Svg as dt,Code as Gd,$Section as C,$Append as X,$Date as lo,$Content as id,$TableOfContents as V,$Parenthetical as qd,$Composition as Ud,$Image as ho,$Reference as se,$Cover as I,$Synopsis as U,CoverSpecification as Yd,$Paginated as Zd,Self as zt,$Book as Kd,reflection as Xd,BookSpecification as Jd,Theme as le,$Referent as pt,$SelfReference as hd,$Writing as Qd,$Heading as fd,$Means as Vd,Referent as Sd,identifier as gd,SectionSpecification as ep,$Code as fo,highlighting as ap,Chapter as ct,Title as lt,Author as ht,Subject as ft,About as gt,Paragraph as bt,Svg as ut,Autobiography as tp}from"@dna-platform/public";import{jsxs as c,Fragment as k,jsx as r}from"react/jsx-runtime";import{css as f}from"styled-components";const Do=class Do extends Ed{constructor(){super(...arguments),this.font="'Inter', system-ui, sans-serif",this.prose="'Inter', system-ui, sans-serif",this.mono="'JetBrains Mono', ui-monospace, monospace",this.size="0.875rem",this.leading="1.6",this.measure="44rem",this.spreadColumn="15.5rem",this.space="1.5rem",this.holdsColumn="240px",this.barHeight="50px",this.beat="320ms",this.narrow="48rem",this.phoneWidth="390px",this.colour="#4e9eb9",this.accent="#166178",this.bar="#0c1b1f",this.barInk="#ffffff",this.barDim="#a9bcc1",this.barOn="rgba(255, 255, 255, 0.11)",this.barLine="#1d3339",this.mark="#c8f4fb",this.side="#e3f5fa",this.sideInk="#10252c",this.sideDim="#516770",this.sideOn="#ffffff",this.sideLine="#cbe6ee",this.night="#0c1b1f",this.deep="#14323c",this.blue="#166178",this.sea="#4e9eb9",this.sky="#8fc8dc",this.opal="#c8f4fb",this.pale="#e3f5fa",this.mist="#f1f7f9",this.white="#ffffff",this.ink="#10252c",this.soft="#516770",this.line="#dbe7ec",this.me="#e8590c",this.wash="linear-gradient(105deg, #e2f6fb 0%, #ecf0fd 52%, #fae9f4 100%)",this.serif="'Source Serif 4', Georgia, serif",this.between="'Source Sans 3', 'Inter', system-ui, sans-serif",this.bookPaper="#fbf9f3",this.bookInk="#29251d",this.heading="#10252c",this.capital="#166178",this.lit="#166178",this.faint="#8792a2",this.paper="#ffffff",this.panel="#f1f7f9",this.rule="#dbe7ec",this.edge="transparent",this.tint="#e3f5fa",this.dusk="#14323c",this.glow="#cfe6e3",this.dim="#4f7672",this.keyword="#8ad7ff",this.string="#ffd48a",this.type="#9be3d6",this.comment="#5f8a86",this.haze="#a9bcc1",this.glass="rgba(255, 255, 255, 0.62)",this.binding="linear-gradient(160deg, #16303a, #0c1b1f)",this.spine="inset 5px 0 0 rgba(0, 0, 0, 0.14), inset 6px 0 0 rgba(255, 255, 255, 0.12), 0 10px 20px -10px rgba(0, 0, 0, 0.45)",this.shadow="0 0.75rem 1.4rem -0.9rem rgba(12, 27, 31, 0.55)",this.volume="11.5rem",this.cover="8.25rem",this.card="18rem",this.barLight="#ffffff",this.barMid="#f1f7f9",this.barDeep="#e3f5fa",this.barShadow="none",this.sideLight="#ffffff",this.sideDeep="#e3f5fa",this.codeGround="#f1f7f9",this.hairline="1px",this.stroke="2px",this.rise="-1px",this.gloss="none",this.ring="0 0 0 2px #c8f4fb",this.decisionShadow="none",this.photo="7rem",this.radius="0.375rem",this.barTint="#ffffff",this.skyInk="#166178",this.lift="inset 5px 0 0 rgba(0, 0, 0, 0.14), inset 6px 0 0 rgba(255, 255, 255, 0.12), 0 14px 24px -12px rgba(0, 0, 0, 0.5)",this.openSpine="inset 7px 0 0 rgba(0, 0, 0, 0.14), inset 8px 0 0 rgba(255, 255, 255, 0.12), 0 12px 22px -14px rgba(0, 0, 0, 0.5)",this.sans="'Inter', system-ui, sans-serif",this.muted="#516770",this.bubble="rgba(16, 37, 44, 0.05)",this.shade="rgba(16, 37, 44, 0.03)",this.pill="#166178",this.column="48rem",this.style=x.div`${this.parts()}`}parts(){return[this.page(),this.writing(),this.links(),this.figures(),this.listings(),this.switches(),this.turns(),this.illustrations(),this.marks(),this.library(),this.head(),this.holds(),this.context(),this.tones()]}page(){return f`
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
        `}};n(Do,"$LibraryBookTheme");let oe=Do;const sp=o(oe);var op=Object.defineProperty,np=Object.getOwnPropertyDescriptor,rp=n((p,e,a,s)=>{for(var t=np(e,a),i=p.length-1,d;i>=0;i--)(d=p[i])&&(t=d(e,a,t)||t);return t&&op(e,a,t),t},"__decorateClass$t");const jo=class jo extends b{constructor(){super(...arguments),this.specification=new na}defines(e){e.classes.add(this,"pa-label")}erase(e){e.classes.revert(this)}};n(jo,"$Label");let Ot=jo;const Po=class Po extends u{$saidOfAWord(e){l(e instanceof O,"label is said of a word, and this is not one")}};n(Po,"LabelSpecification");let na=Po;rp([h("label is said of a word")],na.prototype,"$saidOfAWord");const Ne=o(Ot),Co=class Co extends g{get cover(){return this.$cover??this.book?.cover}write(){const e=this.cover.annotations.expressed(co),a=o(j),s=o(Ne),t=o(w);return c(k,{children:[c(a,{children:[r(s,{}),"by"]}),c(a,{children:[r(t,{children:e.means.identifier}),e.name]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-byline")}};n(Co,"$Byline");let Dt=Co;const Ao=class Ao extends g{get cover(){return this.$cover??this.book?.cover}write(){const e=this.cover.annotations.expressed(cd),a=o(j),s=o(Ne),t=o(w);return c(k,{children:[c(a,{children:[r(s,{}),"subject"]}),c(a,{children:[r(t,{children:e.means.identifier}),e.name]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-subject-line")}};n(Ao,"$SubjectLine");let jt=Ao;const No=class No extends g{get cover(){return this.$cover??this.book?.cover}get topics(){return this.cover?.annotations.find(ld)??[]}write(){const e=o(j),a=o(Ne),s=o(w);return c(k,{children:[c(e,{children:[r(a,{}),"topic"]}),this.topics.map((t,i)=>c(e,{children:[r(s,{children:t.means.identifier}),t.name]},i))]})}$Define(){super.$Define(),this.classes.add(this,"pd-topic-line")}};n(No,"$TopicLine");let Pt=No;const bd=o(Dt),ip=o(jt),dp=o(Pt);var pp=Object.defineProperty,cp=Object.getOwnPropertyDescriptor,lp=n((p,e,a,s)=>{for(var t=cp(e,a),i=p.length-1,d;i>=0;i--)(d=p[i])&&(t=d(e,a,t)||t);return t&&pp(e,a,t),t},"__decorateClass$s");const Io=class Io extends u{$saidOfABook(e){l(e instanceof _,"this is said of a book of this library, and here it is said of something else")}};n(Io,"OfABookSpecification");let B=Io;lp([h("this is said of a book of this library")],B.prototype,"$saidOfABook");const Mo=class Mo extends O{get on(){return[this.book.$is].flat().includes(this.$annotation)}$Switch(...e){this.$Writing(...e),this.containers.replace(this,"span","button")}container(e){return super.container({type:"button","aria-pressed":this.on,onClick:n(()=>this.press(),"onClick"),...e})}press(){const e=this.book,a=[e.$is].flat();e.$is=this.on?a.filter(s=>s!==this.$annotation):[this.$annotation,...a]}$Define(){super.$Define(),this.classes.add(this,"pd-switch")}};n(Mo,"$Switch");let Me=Mo;const To=class To extends Me{press(){const e=this.book,a=[e.$is].flat().filter(s=>!this.$family.includes(s));e.$is=[this.$annotation,...a]}};n(To,"$Tab");let Te=To;const mt=o(Me),hp=o(Te);var fp=Object.defineProperty,gp=Object.getOwnPropertyDescriptor,ud=n((p,e,a,s)=>{for(var t=gp(e,a),i=p.length-1,d;i>=0;i--)(d=p[i])&&(t=d(e,a,t)||t);return t&&fp(e,a,t),t},"__decorateClass$r");const Ho=class Ho extends G{constructor(){super(...arguments),this.specification=new He,this.style=x.div`
        .pa-coloured { --colour: ${e=>e.$colour}; }
    `}get colour(){return D.copy(this.text).trim()}$Coloured(...e){this.$Format(...e);const a=this.style;this._painted=s=>r(a,{$colour:this.colour,...s})}defines(e){e.classes.add(this,"pa-coloured"),e.containers.add(this,this._painted)}erase(e){e.classes.revert(this),e.containers.revert(this)}};n(Ho,"$Coloured");let ne=Ho;const Bo=class Bo extends u{$saidOfAChapterOrAParagraph(e){l(e instanceof y||e instanceof g,"coloured is said of a chapter or a paragraph, and this is neither")}$givenItsColour(e){l(/^#[0-9a-f]{6}$/iu.test(e.annotations.expressed(ne)?.colour??""),"coloured is given its colour as six hex digits, and this one was given something else")}};n(Bo,"ColouredSpecification");let He=Bo;ud([h("coloured is said of a chapter or a paragraph")],He.prototype,"$saidOfAChapterOrAParagraph");ud([h("coloured is given its colour")],He.prototype,"$givenItsColour");o(ne);var bp=Object.defineProperty,up=Object.getOwnPropertyDescriptor,go=n((p,e,a,s)=>{for(var t=up(e,a),i=p.length-1,d;i>=0;i--)(d=p[i])&&(t=d(e,a,t)||t);return t&&bp(e,a,t),t},"__decorateClass$q");const Wo=class Wo extends G{constructor(){super(...arguments),this.specification=new ue}get identifier(){return F.reference(D.copy(this.text))?.identifier??""}get name(){return F.reference(D.copy(this.text))?.name??""}get entry(){return this.book?.chapterAt(this.identifier)}get drawing(){const e=this.entry?.text.find(g).flatMap(a=>a.text.find(dt))[0];return e===void 0?"":D.copy(e.text).trim()}get colour(){return this.entry?.annotations.expressed(ne)?.colour??""}$Keyed(...e){this.$Format(...e);const a=o(mp);this._layer=s=>c("div",{...s,children:[r(a,{keyed:this}),s.children]})}defines(e){e.classes.add(this,"pa-keyed"),e.containers.add(this,this._layer)}erase(e){e.classes.revert(this),e.containers.revert(this)}};n(Wo,"$Keyed");let K=Wo;const Lo=class Lo extends O{constructor(){super(...arguments),this.style=x.span`
        --colour: ${e=>e.$colour};
    `}$Icon(...e){this.$Writing(...e);const a=this.style;this._painted=s=>r(a,{$colour:this.$keyed?.colour??"",...s}),this.containers.replace(this,"span",this._painted)}write(){return r("span",{className:"pd-drawing",role:"img","aria-label":this.$keyed?.name,dangerouslySetInnerHTML:{__html:this.$keyed?.drawing??""}})}$Define(){super.$Define(),this.classes.add(this,"pd-icon")}};n(Lo,"$Icon");let Ct=Lo;const _o=class _o extends u{$saidOfAChapter(e){l(e instanceof y,"keyed is said of a chapter, and this is not one")}$namesAnEntry(e){const a=e.annotations.expressed(K)?.entry;l(a!==void 0&&a.annotations.expressed(K)?.entry===a,"keyed names an entry of the key, a chapter of this book keyed as itself, and this one names something else")}$entryHoldsItsDrawingAndColour(e){const a=e.annotations.expressed(K)?.entry;a!==void 0&&l(a.text.find(g).flatMap(s=>s.text.find(dt)).length===1&&a.is(ne),"an entry of the key holds one drawing and its colour, and this one holds something else")}};n(_o,"KeyedSpecification");let ue=_o;go([h("keyed is said of a chapter")],ue.prototype,"$saidOfAChapter");go([h("keyed names an entry of the key")],ue.prototype,"$namesAnEntry");go([h("an entry of the key holds one drawing and its colour")],ue.prototype,"$entryHoldsItsDrawingAndColour");o(K);const md=o(Ct),mp=md;var $p=Object.defineProperty,kp=Object.getOwnPropertyDescriptor,vp=n((p,e,a,s)=>{for(var t=kp(e,a),i=p.length-1,d;i>=0;i--)(d=p[i])&&(t=d(e,a,t)||t);return t&&$p(e,a,t),t},"__decorateClass$p");const yp={tsx:"typescript",ts:"typescript",mjs:"javascript",js:"javascript",css:"css",html:"xml",svg:"xml",json:"json",md:"markdown"},xp='<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"><path d="M6 4.5 3.5 8 6 11.5M10 4.5 12.5 8 10 11.5"/></svg>',Ie=n(p=>`${p.$identifier}${p.$type}`,"fileNameOf"),wp=n(p=>p===void 0?[]:D.copy(p.text).split(`
`),"fileLinesOf"),$d=n(p=>p?.chapter?.annotations.expressed(A),"spreadOf"),Ro=class Ro extends g{constructor(){super(...arguments),this.$family=[]}get name(){return this.$file===void 0?"":Ie(this.$file)}get language(){return yp[(this.$file?.$type??"").replace(/^\./u,"")]??""}get spread(){return $d(this.$file)}get chapter(){return this.$file?.chapter??super.chapter}$FileListing(...e){this.$Writing(...e),this.containers.replace(this,"span","div")}container(e){return super.container({onClick:n(()=>this.press(),"onClick"),...e})}press(){if(this.$filePanelState===void 0)return;const e=this.book,a=[e.$is].flat().filter(s=>!this.$family.includes(s));e.$is=[this.$filePanelState,...a]}write(){const e=o(j),a=o(Gd);return c(k,{children:[r(e,{children:this.name}),r(a,{identifier:this.$file?.$identifier,type:this.$file?.$type,language:this.language,numbered:!0})]})}$Define(){super.$Define(),this.classes.add(this,"pd-file-listing");const e=o(Dp);this.annotations.add(this,r(e,{}))}};n(Ro,"$FileListing");let ra=Ro;const Fo=class Fo extends b{constructor(){super(...arguments),this.specification=new ia}defines(e){const a=e;a.$file!==void 0&&a.spread?.openFile===a.$file&&e.classes.add(this,"pa-open")}erase(e){e.classes.revert(this)}};n(Fo,"$OpenListing");let At=Fo;const Eo=class Eo extends u{$isAFileListing(e){l(e instanceof ra,"an open listing is a file listing, and this is not one")}};n(Eo,"OpenListingSpecification");let ia=Eo;vp([h("an open listing is a file listing")],ia.prototype,"$isAFileListing");const Go=class Go extends Te{constructor(){super(...arguments),this.$skeleton=!1,this.style=x.button`
        --colour: ${e=>e.$colour};
    `}get on(){const e=this.$file?.chapter;return e!==void 0&&e===this.book.open&&this.spread?.openFile===this.$file}get name(){return this.$file===void 0?"":Ie(this.$file)}get spread(){return $d(this.$file)}get colour(){return this.$file?.chapter?.annotations.expressed(K)?.colour??""}get lines(){return wp(this.$file)}get chapter(){return this.$file?.chapter??super.chapter}$FileTab(...e){this.$Switch(...e),this.containers.replace(this,"button",this.style)}container(e){return super.container({$colour:this.colour,...e})}press(){const e=this.spread;e!==void 0&&(e.$openFile=this.$file),this.$annotation!==void 0&&super.press()}write(){return c(k,{children:[r("span",{className:"pd-drawing",dangerouslySetInnerHTML:{__html:xp}}),r("span",{className:"pd-tab-name",children:this.name}),this.$skeleton?r("span",{className:"pd-skeleton",children:this.lines.slice(0,14).map((e,a)=>r("i",{style:{width:`${Math.max(12,Math.min(100,e.length*2.2))}%`}},a))}):void 0]})}$Define(){super.$Define(),this.classes.add(this,"pd-file-tab")}};n(Go,"$FileTab");let Nt=Go;const zp=o(ra),Op=o(At),bo=o(Nt),Dp=Op;var jp=Object.defineProperty,Pp=Object.getOwnPropertyDescriptor,Cp=n((p,e,a,s)=>{for(var t=Pp(e,a),i=p.length-1,d;i>=0;i--)(d=p[i])&&(t=d(e,a,t)||t);return t&&jp(e,a,t),t},"__decorateClass$o");const nt=class nt extends b{constructor(){super(...arguments),this.specification=new B}defines(e){for(const a of e.annotations.after(this))a instanceof nt&&e.annotations.express(a,!1);e.classes.add(this,"pa-file-panel-state")}erase(e){e.classes.revert(this)}};n(nt,"$FilePanelState");let me=nt;const qo=class qo extends me{defines(e){super.defines(e),e.classes.add(this,"pa-code-forward")}};n(qo,"$CodeForward");let It=qo;const Uo=class Uo extends me{defines(e){super.defines(e),e.classes.add(this,"pa-words-forward")}};n(Uo,"$WordsForward");let Mt=Uo;const Yo=class Yo extends me{defines(e){super.defines(e),e.classes.add(this,"pa-split")}};n(Yo,"$Split");let Tt=Yo;const Zo=class Zo extends b{constructor(){super(...arguments),this.specification=new B}defines(e){e.classes.add(this,"pa-light-code")}erase(e){e.classes.revert(this)}};n(Zo,"$LightCode");let Ht=Zo;const Ko=class Ko extends b{constructor(){super(...arguments),this.specification=new B}defines(e){e.classes.add(this,"pa-wrapped-code")}erase(e){e.classes.revert(this)}};n(Ko,"$WrappedCode");let Bt=Ko;const Xo=class Xo extends b{constructor(){super(...arguments),this.specification=new B}defines(e){e.classes.add(this,"pa-numbered-code")}erase(e){e.classes.revert(this)}};n(Xo,"$NumberedCode");let Wt=Xo;const Jo=class Jo extends b{constructor(){super(...arguments),this.specification=new pa}defines(e){e.classes.add(this,"pa-brief")}erase(e){e.classes.revert(this)}};n(Jo,"$Brief");let da=Jo;const Qo=class Qo extends u{$saidOfAParagraph(e){l(e instanceof g,"brief is said of a paragraph, and this is not one")}};n(Qo,"BriefSpecification");let pa=Qo;Cp([h("brief is said of a paragraph")],pa.prototype,"$saidOfAParagraph");o(me);const uo=o(It),mo=o(Mt),Be=o(Tt),Ap=o(Ht),Np=o(Bt),kd=o(Wt);o(da);const Vo=class Vo extends g{constructor(){super(...arguments),this.style=x.div`
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
    `}get spread(){return this.chapter?.annotations.expressed(A)}$FileRail(...e){this.$Writing(...e),this.containers.replace(this,"span",this.style)}write(){const e=o(bo),a=this.spread;if(a!==void 0)return a.files.map(s=>r(e,{file:s,annotation:Be,family:a.filePanelStates,skeleton:!0},Ie(s)))}$Define(){super.$Define(),this.classes.add(this,"pd-file-rail")}};n(Vo,"$FileRail");let Lt=Vo;const So=class So extends Te{constructor(){super(...arguments),this.style=x.button`
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
    `}get paragraphs(){return(this.chapter?.text.find(C)??[]).flatMap(e=>e.text.find(g)).slice(0,16).map(e=>D.copy(e.text))}$FilePanelGrip(...e){this.$Switch(...e),this.containers.replace(this,"button",this.style)}write(){return r("span",{className:"pd-skeleton",children:this.paragraphs.map((e,a)=>r("i",{style:{width:`${Math.max(25,Math.min(100,e.length/4))}%`}},a))})}$Define(){super.$Define(),this.classes.add(this,"pd-file-panel-grip")}};n(So,"$FilePanelGrip");let _t=So;const Ip=o(Lt),Mp=o(_t),en=class en extends g{constructor(){super(...arguments),this.style=x.div`
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
    `}get spread(){return this.chapter?.annotations.expressed(A)}$FilePanel(...e){this.$Writing(...e),this.containers.replace(this,"span",this.style)}write(){const e=o(Bp),a=o(zp),s=this.spread;if(s!==void 0)return c(k,{children:[r(e,{chapter:this.chapter}),r("div",{className:"pd-file-listings",children:s.files.map(t=>r(a,{file:t,filePanelState:uo,family:s.filePanelStates},Ie(t)))})]})}$Define(){super.$Define(),this.classes.add(this,"pd-file-panel")}};n(en,"$FilePanel");let Rt=en;const an=class an extends g{constructor(){super(...arguments),this.style=x.div`
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
    `}get spread(){return this.chapter?.annotations.expressed(A)}$FilePanelBar(...e){this.$Writing(...e),this.containers.replace(this,"span",this.style)}write(){const e=o(bo),a=o(hp),s=o(mt),t=this.spread,i=this.chapter;if(t!==void 0)return c(k,{children:[t.files.map(d=>r(e,{file:d},Ie(d))),r("span",{className:"pd-words-only",children:r(a,{chapter:i,annotation:mo,family:t.filePanelStates,children:"words"})}),r("span",{className:"pd-dock pd-to-full",children:r(a,{chapter:i,annotation:uo,family:t.filePanelStates,children:"full screen"})}),r("span",{className:"pd-dock pd-to-split",children:r(a,{chapter:i,annotation:Be,family:t.filePanelStates,children:"split"})}),c("span",{className:"pd-options",children:[r(s,{chapter:i,annotation:Ap,children:"light"}),r(s,{chapter:i,annotation:Np,children:"wrap"}),r(s,{chapter:i,annotation:kd,children:"lines"})]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-file-panel-bar")}};n(an,"$FilePanelBar");let Ft=an;const Tp=o(Rt),Hp=o(Ft),Bp=Hp;var Wp=Object.defineProperty,Lp=Object.getOwnPropertyDescriptor,_p=n((p,e,a,s)=>{for(var t=Lp(e,a),i=p.length-1,d;i>=0;i--)(d=p[i])&&(t=d(e,a,t)||t);return t&&Wp(e,a,t),t},"__decorateClass$n");const tn=class tn extends G{constructor(){super(...arguments),this.specification=new ca,this.$openFile=void 0,this.grid=x.div`
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
    `}get files(){return this.parent.annotations.find(X).reverse()}get openFile(){return this.$openFile??this.files[0]}get filePanelStates(){return[mo,Be,uo]}$Spread(...e){this.$Format(...e);const a=this.grid,s=o(Tp),t=o(Ip),i=o(Mp);this.style=({className:d,children:m})=>{const v=this.parent,$=[...v.classes].includes("pa-open");return c(a,{className:`${d??""}${$?" pa-open":""}`.trim(),children:[r("div",{className:"pd-words",children:m}),$?c(k,{children:[r(s,{chapter:v}),r(t,{chapter:v}),r(i,{chapter:v,annotation:Be,family:this.filePanelStates})]}):void 0]})}}defines(e){super.defines(e),e.classes.add(this,"pa-spread")}erase(e){super.erase(e),e.classes.revert(this)}};n(tn,"$Spread");let A=tn;const sn=class sn extends u{$isAChapter(e){l(e instanceof y,"a spread is a chapter read beside its files, and this is not a chapter")}};n(sn,"SpreadSpecification");let ca=sn;_p([h("a spread is a chapter read beside its files")],ca.prototype,"$isAChapter");o(A);var Rp=Object.defineProperty,Fp=Object.getOwnPropertyDescriptor,$o=n((p,e,a,s)=>{for(var t=Fp(e,a),i=p.length-1,d;i>=0;i--)(d=p[i])&&(t=d(e,a,t)||t);return t&&Rp(e,a,t),t},"__decorateClass$m");const on=class on extends b{constructor(){super(...arguments),this.specification=new $e}get date(){return this.text.find(lo)[0]}defines(e){e.classes.add(this,"pa-dated")}erase(e){e.classes.revert(this)}note(){const e=o(this.date);return r(e,{})}};n(on,"$Dated");let L=on;const nn=class nn extends u{$saidOfAChapter(e){l(e instanceof y,"dated is said of a chapter, and this is not one")}$datedOnce(e){l(e.annotations.containsOne(L),"a chapter is dated once, and this one is dated more than once")}$givenOneDate(e){l(e.annotations.expressed(L)?.text.find(lo).length===1,"a dated chapter is given one date, and this one is given none or more than one")}};n(nn,"DatedSpecification");let $e=nn;$o([h("dated is said of a chapter")],$e.prototype,"$saidOfAChapter");$o([h("a chapter is dated once")],$e.prototype,"$datedOnce");$o([h("a dated chapter is given one date")],$e.prototype,"$givenOneDate");const gh=o(L);var Ep=Object.defineProperty,Gp=Object.getOwnPropertyDescriptor,ta=n((p,e,a,s)=>{for(var t=Gp(e,a),i=p.length-1,d;i>=0;i--)(d=p[i])&&(t=d(e,a,t)||t);return t&&Ep(e,a,t),t},"__decorateClass$l");const vd='<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3.5 10.5 8 6 12.5"/></svg>',qp='<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linejoin="round" stroke-linecap="round"><rect class="ground" x="0.75" y="0.75" width="14.5" height="14.5"/><path d="M3.5 5.5h3l1.5 1.5h4.5v5h-9z"/></svg>',rn=class rn extends G{constructor(){super(...arguments),this.specification=new fa,this.style=x.div`
        ${e=>e.$schemeDeclarations===void 0?"":`.pa-entry { ${e.$schemeDeclarations} }`}
    `}get place(){return H(this.parent).identifier}get referencedChapter(){return this.book.chapterAt(this.place)}get cover(){return this.referencedChapter?.annotations.expressed(N)?.cover??this.book.coverOf(this.place)}get schemeDeclarations(){const e=this.cover?.annotations.expressed(Y);if(e!==void 0)return e.declarations;const a=this.referencedChapter?.annotations.expressed(ne)?.colour;return a===void 0?void 0:`--colour: ${a};`}$Entry(...e){this.$Format(...e);const a=this.style;this._painted=s=>r(a,{$schemeDeclarations:this.schemeDeclarations,...s})}defines(e){e.classes.add(this,"pa-entry"),e.containers.add(this,this._painted),(this.place===this.book?.$bookmark||this.place===this.book.open?.mention?.identifier)&&e.classes.add(this,"pa-open")}erase(e){e.classes.revert(this),e.containers.revert(this)}};n(rn,"$Entry");let re=rn;const dn=class dn extends b{constructor(){super(...arguments),this.specification=new ha}defines(e){e.classes.add(this,"pa-appendix")}erase(e){e.classes.revert(this)}};n(dn,"$Appendix");let We=dn;const pn=class pn extends b{constructor(){super(...arguments),this.specification=new la,this.$folded=!1,this.$counted=!1,this.$dated=!1}get sections(){return this.chapter.text.find(C)}get entries(){return this.sections.flatMap(e=>e.text.find(g)).filter(e=>!e.is(qd)&&H(e)!==void 0)}chapterOf(e){const a=H(e)?.identifier;return a===void 0?void 0:this.book.chapterAt(a)}$Bound(){const e=o(Kp),a=o(wd),s=o(bo),t=this.book;for(const $ of this.entries){$.annotations.add(this,r(e,{}));const z=t.chapterAt(H($).identifier)?.annotations.expressed(A);if(z===void 0)continue;const T=z.files;$.text.add(this,r(a,{foldedWriting:T.length===0?void 0:$,annotation:Zt}),...T.map(ae=>r(s,{file:ae,annotation:Be,family:z.filePanelStates},Ie(ae))))}const i=o(Xp),d=o(Jp),m=new Set(t.entries),v=n($=>{const z=this.chapterOf($);return z!==void 0&&m.has(z)},"leadsToAnEntry");if(this.$dated)for(const $ of this.entries){const z=this.chapterOf($);z===void 0||!m.has(z)||!z.is(L)||$.text.add(this,r(i,{entry:z}))}for(const $ of this.sections){this.$folded&&($.$is=[Zt]);const z=$.canonical;this.$counted&&z!==void 0&&$.text.find(g).some(v)&&z.text.add(this,r(d,{section:$}))}super.$Bound()}};n(pn,"$Index");let E=pn;const cn=class cn extends O{write(){const[e,a,s]=(this.$entry?.annotations.expressed(L)?.date?.date??"").split("-");if(!(e===void 0||a===void 0||s===void 0))return new Date(Date.UTC(Number(e),Number(a)-1,Number(s.slice(0,2)))).toLocaleString("en-GB",{day:"numeric",month:"short",timeZone:"UTC"})}$Define(){super.$Define(),this.classes.add(this,"pd-entry-day")}};n(cn,"$EntryDay");let Et=cn;const ln=class ln extends O{write(){return String(this.$section?.text.find(g).filter(e=>H(e)!==void 0).length??0)}$Define(){super.$Define(),this.classes.add(this,"pd-section-count")}};n(ln,"$SectionCount");let Gt=ln;const hn=class hn extends u{$isATableOfContents(e){l(e.is(V),"an index is a table of contents, and this chapter is not one")}};n(hn,"IndexSpecification");let la=hn;ta([h("an index is a table of contents")],la.prototype,"$isATableOfContents");const fn=class fn extends u{$isASectionOfTheTable(e){l(e instanceof C&&e.chapter?.is(V)===!0,"the appendix is a section of the table of contents, and this is not one")}};n(fn,"AppendixSpecification");let ha=fn;ta([h("the appendix is a section of the table of contents")],ha.prototype,"$isASectionOfTheTable");const gn=class gn extends u{$isARowThatLeadsSomewhere(e){l(e instanceof g&&H(e)!==void 0,"an entry is a row that leads somewhere, and this is not one")}};n(gn,"EntrySpecification");let fa=gn;ta([h("an entry is a row that leads somewhere")],fa.prototype,"$isARowThatLeadsSomewhere");const bn=class bn extends b{constructor(){super(...arguments),this.specification=new ba}defines(e){e.classes.add(this,"pa-folded")}erase(e){e.classes.revert(this)}};n(bn,"$Folded");let qt=bn;const un=class un extends Me{get on(){return this.$foldedWriting!==void 0&&[this.$foldedWriting.$is].flat().includes(this.$annotation)}container(e){return super.container({...e,disabled:this.$foldedWriting===void 0,onClick:n(a=>{a.preventDefault(),this.press()},"onClick")})}press(){const e=this.$foldedWriting;if(e===void 0)return;const a=[e.$is].flat();e.$is=this.on?a.filter(s=>s!==this.$annotation):[this.$annotation,...a]}write(){return r("span",{className:"pd-drawing",dangerouslySetInnerHTML:{__html:vd}})}$Define(){super.$Define(),this.classes.add(this,"pd-fold-chevron")}};n(un,"$FoldChevron");let Ut=un;const mn=class mn extends G{constructor(){super(...arguments),this.specification=new ua,this.tree=x.div`
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
    `}get section(){return this.parent}get firstPlace(){return this.section.text.find(g).map(e=>H(e)).find(e=>e!==void 0)?.identifier}get part(){const e=this.firstPlace;return e===void 0?void 0:this.book.chapterAt(e)?.part}get open(){const e=this.book,a=e.open,s=this.section.mention?.identifier;return a!==void 0&&a.part?.name===this.part?.name||s!==void 0&&e.placeWithin(s)===e.$bookmark}$TreeFolder(...e){this.$Format(...e);const a=this.tree,s=o(wd),t=o(j),i=o(w);this.style=({className:d,children:m})=>{const v=this.firstPlace,$=[...this.section.classes].includes("pa-open"),z=this.book.open!==void 0,T=this.chapter?.annotations.expressed(E)?.$folded===!0&&!($&&z),ae=r("span",{className:"pd-drawing pd-tree-folder-mark",dangerouslySetInnerHTML:{__html:qp}});return c(a,{className:`${d??""} pd-tree-folder${$?" pa-open":""}${T?" pa-foldable":""}`.trim(),children:[r(s,{foldedWriting:this.section,annotation:Zt}),v===void 0?ae:c(t,{children:[r(i,{children:v}),ae]}),m]})}}defines(e){super.defines(e),e.classes.add(this,"pa-tree-folder"),this.open&&e.classes.add(this,"pa-open")}erase(e){super.erase(e),e.classes.revert(this)}};n(mn,"$TreeFolder");let ga=mn;const $n=class $n extends u{$saidOfASectionOrAnEntry(e){l(e instanceof C&&e.chapter?.is(V)===!0||e.is(re),"folded is said of a section of a table of contents or of an entry, and this is neither")}};n($n,"FoldedSpecification");let ba=$n;ta([h("folded is said of a section of a table of contents or of an entry")],ba.prototype,"$saidOfASectionOrAnEntry");const kn=class kn extends u{$isASectionOfTheTable(e){l(e instanceof C&&e.chapter?.is(V)===!0,"a tree folder is a section of the table of contents, and this is not one")}};n(kn,"TreeFolderSpecification");let ua=kn;ta([h("a tree folder is a section of the table of contents")],ua.prototype,"$isASectionOfTheTable");const vn=class vn extends g{get cover(){return this.$cover??this.book?.cover}write(){const e=this.cover,a=o(j),s=o(w);return c(a,{children:[r(s,{children:e.mention.identifier}),r("span",{className:"pd-drawing",dangerouslySetInnerHTML:{__html:vd}}),e.title.name]})}$Define(){super.$Define(),this.classes.add(this,"pd-tree-root")}};n(vn,"$TreeRoot");let Yt=vn;const H=n(p=>p.annotations.expressed(id)??p.text.find(O).map(e=>e.annotations.expressed(id)).find(e=>e!==void 0),"contentOf"),yd=o(re),bh=o(E),xd=o(Et),Up=o(Gt),uh=o(We),ko=o(qt),Yp=o(Ut),vo=o(ga),Zp=o(Yt),Kp=yd,Xp=xd,Jp=Up,Zt=ko,wd=Yp;var Qp=Object.defineProperty,Vp=Object.getOwnPropertyDescriptor,he=n((p,e,a,s)=>{for(var t=Vp(e,a),i=p.length-1,d;i>=0;i--)(d=p[i])&&(t=d(e,a,t)||t);return t&&Qp(e,a,t),t},"__decorateClass$k");const $t=n((p,e)=>{const a=new Set(p.text.find(e));return p.text.find(Ud).flatMap(s=>[...a.has(s)?[s]:[],...$t(s,e)])},"within"),yn=class yn extends b{constructor(){super(...arguments),this.specification=new ie}get identifier(){return F.reference(D.copy(this.text))?.identifier??""}get name(){return F.reference(D.copy(this.text))?.name??""}get cover(){const e=this.identifier;return this.chapter?.annotations.find(N).map(a=>a.cover).find(a=>a?.mention?.identifier===e)}defines(e){e.classes.add(this,"pa-design")}erase(e){e.classes.revert(this)}};n(yn,"$Design");let M=yn;const xn=class xn extends b{constructor(){super(...arguments),this.specification=new ma}defines(e){e.classes.add(this,"pa-exhibit")}erase(e){e.classes.revert(this)}};n(xn,"$Exhibit");let Le=xn;const wn=class wn extends b{constructor(){super(...arguments),this.specification=new $a,this.$number=0,this.span=x.span.attrs({className:"pd-plate"})``}note(){const e=this.span;return c(k,{children:[r(e,{children:String(this.$number).padStart(2,"0")}),r("span",{className:"pd-jacket-mini"})]})}defines(e){e.classes.add(this,"pa-plate")}erase(e){e.classes.revert(this)}};n(wn,"$Plate");let Kt=wn;const zn=class zn extends G{constructor(){super(...arguments),this.specification=new ka,this.themeProvider=!0,this.room=x.div`
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
    `}get chapter(){return this.parent}get design(){return this.chapter.annotations.expressed(M)}get plate(){return this.book.chapters.filter(e=>e.is(M)).indexOf(this.chapter)+1}$Room(...e){this.$Format(...e);const a=this.room;this.style=({className:s,children:t})=>{const i=[...this.chapter.classes].includes("pa-open");return be(this.design?.cover,c(a,{className:`${s??""} pd-room${i?" pa-open":""}`.trim(),children:[r("span",{className:"pd-plate",children:String(this.plate).padStart(2,"0")}),t]}))}}defines(e){super.defines(e),e.classes.add(this,"pa-room")}erase(e){super.erase(e),e.classes.revert(this)}};n(zn,"$Room");let Xt=zn;const On=class On extends g{get references(){const e=this.book?.means?.identifier??"",a=new Map;for(const s of $t(this.chapter,O)){if(s.parent===this)continue;const t=s.annotations.expressed(se)?.identifier;if(t===void 0||t.startsWith(e)||a.has(t))continue;const i=D.copy(s.text);a.set(t,F.reference(i)?.name??i.trim())}return[...a]}write(){const e=o(j),a=o(w);return this.references.map(([s,t],i)=>c(e,{children:[r(a,{children:s}),t,r("span",{className:"pd-where",children:s.replace(/^\/dougs-/u,"").replace(/\/#?/u," · ").replace(/ · $/u,"").replace(/-/gu," ")})]},i))}$Define(){super.$Define(),this.classes.add(this,"pd-built-in")}};n(On,"$BuiltIn");let Jt=On;const Dn=class Dn extends u{$isAChapter(e){l(e instanceof y,"a design is a chapter, and this is not one")}$namesABook(e){l((e.annotations.expressed(M)?.identifier??"")!=="","a design names the book it is of, and this one names nothing")}$holdsTheCover(e){l(e.annotations.expressed(M)?.cover!==void 0,"a design holds the cover of the book it is of, as a volume, and this one holds none")}$showsItselfAsBuilt(e){l(e instanceof y&&$t(e,g).some(a=>a.is(Le)),"a design shows itself as built, in a paragraph said to be the exhibit, and this one shows nothing")}};n(Dn,"DesignSpecification");let ie=Dn;he([h("a design is a chapter")],ie.prototype,"$isAChapter");he([h("a design names the book it is of")],ie.prototype,"$namesABook");he([h("a design holds the cover of the book it is of")],ie.prototype,"$holdsTheCover");he([h("a design shows itself as built")],ie.prototype,"$showsItselfAsBuilt");const jn=class jn extends u{$isAParagraphOfADesignHoldingOneImage(e){l(e instanceof g&&e.chapter?.is(M)===!0&&e.text.find(ho).length===1,"an exhibit is a paragraph of a design that holds one image, and this is not one")}};n(jn,"ExhibitSpecification");let ma=jn;he([h("an exhibit is a paragraph of a design that holds one image")],ma.prototype,"$isAParagraphOfADesignHoldingOneImage");const Pn=class Pn extends u{$saidOfAnEntryLeadingToADesign(e){l(e.is(re)&&e.annotations.expressed(re)?.referencedChapter?.is(M)===!0,"a plate is said of an entry that leads to a design, and this is not one")}};n(Pn,"PlateSpecification");let $a=Pn;he([h("a plate is said of an entry that leads to a design")],$a.prototype,"$saidOfAnEntryLeadingToADesign");const Cn=class Cn extends u{$isADesign(e){l(e instanceof y&&e.is(M),"a room is a chapter that is a design, and this is not one")}};n(Cn,"RoomSpecification");let ka=Cn;he([h("a room is a chapter that is a design")],ka.prototype,"$isADesign");o(M);o(Le);const Sp=o(Kt),ec=o(Xt),ac=o(Jt);var tc=Object.defineProperty,sc=Object.getOwnPropertyDescriptor,R=n((p,e,a,s)=>{for(var t=sc(e,a),i=p.length-1,d;i>=0;i--)(d=p[i])&&(t=d(e,a,t)||t);return t&&tc(e,a,t),t},"__decorateClass$j");const be=n((p,e,a)=>{const s=p?.annotations.expressed(Y)?.painted;return s===void 0?e:r(s,{children:e},a)},"painted"),An=class An extends I{constructor(){super(...arguments),this.specification=new ye}get name(){return this.chapter?.title?.name??""}get author(){return this.chapter?.annotations.expressed(co)?.name??""}get illustration(){return this.chapter?.text.find(g).find(e=>e.is(_e))}get drawing(){const e=this.illustration?.text.find(dt)[0];return e===void 0?"":D.copy(e.text).trim()}get scheme(){return this.chapter?.annotations.expressed(Y)}get window(){return this.chapter?.annotations.expressed(ve)}};n(An,"$BookshelfCover");let ke=An;const Nn=class Nn extends b{constructor(){super(...arguments),this.specification=new xa}defines(e){e.classes.add(this,"pa-illustration")}erase(e){e.classes.revert(this)}};n(Nn,"$Illustration");let _e=Nn;const In=class In extends G{constructor(){super(...arguments),this.specification=new Re,this.$ground="",this.$band="",this.$bandInk="",this.$foot="",this.$footInk="",this.$ink="",this.style=x.div.attrs({className:"pd-scheme"})`
        ${e=>e.$scheme}
    `}get colours(){return[this.$ground,this.$band,this.$bandInk,this.$foot,this.$footInk,this.$ink]}get declarations(){return`--ground: ${this.$ground}; --band: ${this.$band}; --band-ink: ${this.$bandInk}; --foot: ${this.$foot}; --foot-ink: ${this.$footInk}; --ink: ${this.$ink};`}get painted(){return this._painted}$Scheme(...e){this.$Format(...e);const a=this.style;this._painted=s=>r(a,{$scheme:this.declarations,...s})}defines(e){e.classes.add(this,"pa-scheme"),e.containers.add(this,this._painted)}erase(e){e.classes.revert(this),e.containers.revert(this)}};n(In,"$Scheme");let Y=In;const Mn=class Mn extends b{constructor(){super(...arguments),this.specification=new Fe,this.$x="",this.$y=""}get declarations(){return`--window-x: ${this.$x}px; --window-y: ${this.$y}px;`}};n(Mn,"$Window");let ve=Mn;const Tn=class Tn extends b{constructor(){super(...arguments),this.specification=new Ee}get cover(){return this._cover}get jacket(){return this._cover?.annotations.expressed(I)}$Volume(...e){this._cover=e.find(a=>a instanceof y),this.$Annotation(...e.filter(a=>a!==this._cover))}defines(e){e.classes.add(this,"pa-volume")}erase(e){e.classes.revert(this)}};n(Tn,"$Volume");let N=Tn;const Hn=class Hn extends g{get cover(){return this.$cover?.annotations.expressed(I)}$Jacket(...e){this.$Writing(...e),this._painted=a=>{const s=this.cover?.scheme?.painted;return s===void 0?r("div",{...a}):r(s,{...a})},this.containers.add(this,this._painted)}write(){const e=this.cover;if(e===void 0)return;const a=o(j),s=o(Ne);return c(k,{children:[r(a,{children:e.name}),r("span",{className:"pd-drawing",dangerouslySetInnerHTML:{__html:e.drawing}}),c(a,{children:[r(s,{}),e.author]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-jacket")}};n(Hn,"$Jacket");let Qt=Hn;const Bn=class Bn extends g{constructor(){super(...arguments),this.unfolded=!1}get filedElsewhere(){return this.$subject!==void 0&&this.$subject!==this.$cover}container(e){return super.container({onMouseOver:n(a=>{a.target instanceof Element&&a.target.closest(".pd-filed")!==null&&this.unfold()},"onMouseOver"),onMouseLeave:n(()=>this.fold(),"onMouseLeave"),...e})}unfold(){this.unfolded=!0}fold(){this.unfolded=!1}write(){const e=this.$cover,a=this.$subject;if(e!==void 0)return c(k,{children:[this.filedElsewhere?be(a,r("span",{className:"pd-filed",children:this.mark(a)})):void 0,be(e,r("span",{className:"pd-own",children:this.mark(e)})),c("span",{className:"pd-names",children:[be(e,r("span",{className:"pd-name",children:this.name(e)})),this.filedElsewhere?be(a,r("span",{className:"pd-name pd-under",children:this.name(a)})):void 0]})]})}mark(e){const a=o(ic),s=o(w);return r(a,{cover:e,children:r(s,{children:e.mention.identifier})})}name(e){const a=o(j),s=o(w);return c(a,{children:[r(s,{children:e.mention.identifier}),e.title.name]})}$Define(){super.$Define(),this.classes.add(this,"pd-logo");const e=o(dc);this.annotations.add(this,r(e,{}))}};n(Bn,"$Logo");let va=Bn;const Wn=class Wn extends b{constructor(){super(...arguments),this.specification=new ya}defines(e){e.unfolded&&e.classes.add(this,"pa-unfolded")}erase(e){e.classes.revert(this)}};n(Wn,"$Unfolded");let Vt=Wn;const Ln=class Ln extends u{$saidOfALogo(e){l(e instanceof va,"unfolded is said of a logo, and this is not one")}};n(Ln,"UnfoldedSpecification");let ya=Ln;R([h("unfolded is said of a logo")],ya.prototype,"$saidOfALogo");const _n=class _n extends O{constructor(){super(...arguments),this.style=x.span`
        ${e=>e.$vars}
    `}get cover(){return this.$cover?.annotations.expressed(I)}$Mark(...e){this.$Writing(...e);const a=this.style;this._painted=s=>r(a,{$vars:`${this.cover?.scheme?.declarations??""} ${this.cover?.window?.declarations??""}`,...s}),this.containers.add(this,this._painted)}write(){return r("span",{className:"pd-drawing",dangerouslySetInnerHTML:{__html:this.cover?.drawing??""}})}$Define(){super.$Define(),this.classes.add(this,"pd-mark")}};n(_n,"$Mark");let St=_n;const Rn=class Rn extends Yd{$carriesItsScheme(e){l(e.is(Y),"a bookshelf cover carries its scheme, and this one carries none")}$carriesItsWindow(e){l(e.is(ve),"a bookshelf cover carries its window, and this one carries none")}$carriesItsIllustration(e){l(e instanceof y&&e.text.find(g).some(a=>a.is(_e)),"a bookshelf cover carries its illustration, and this one carries none")}};n(Rn,"BookshelfCoverSpecification");let ye=Rn;R([h("a bookshelf cover carries its scheme")],ye.prototype,"$carriesItsScheme");R([h("a bookshelf cover carries its window")],ye.prototype,"$carriesItsWindow");R([h("a bookshelf cover carries its illustration")],ye.prototype,"$carriesItsIllustration");const Fn=class Fn extends u{$saidOfADrawing(e){l(e instanceof g&&e.chapter?.is(I)===!0&&e.text.find(dt).length===1,"an illustration is a paragraph of a cover that holds one drawing, and this is not one")}};n(Fn,"IllustrationSpecification");let xa=Fn;R([h("an illustration is a paragraph of a cover that holds one drawing")],xa.prototype,"$saidOfADrawing");const En=class En extends u{$isACover(e){l(e instanceof y&&e.is(I),"a cover has a scheme, and this is not a cover")}$givenItsColours(e){const a=e.annotations.expressed(Y)?.colours??[];l(a.every(s=>/^#[0-9a-f]{6}$/iu.test(s)),"a scheme is given its six colours as six hex digits each — the ground, the band and its ink, the foot and its ink, and the ink of the drawing — and this one was given something else")}};n(En,"SchemeSpecification");let Re=En;R([h("a cover has a scheme")],Re.prototype,"$isACover");R([h("a scheme is given its six colours")],Re.prototype,"$givenItsColours");const Gn=class Gn extends u{$isACover(e){l(e instanceof y&&e.is(I),"a cover has a window, and this is not a cover")}$givenItsPlace(e){const a=e.annotations.expressed(ve);l(/^-?\d+$/u.test(a?.$x??"")&&/^-?\d+$/u.test(a?.$y??""),"a window is given where it stands on the drawing, two whole numbers, and this one was given something else")}};n(Gn,"WindowSpecification");let Fe=Gn;R([h("a cover has a window")],Fe.prototype,"$isACover");R([h("a window is given where it stands on the drawing")],Fe.prototype,"$givenItsPlace");const qn=class qn extends u{$saidOfAChapterStandingForABook(e){l(e instanceof y&&(e.is(U)||e.is(I)||e.is(M)),"a volume is a chapter that stands for another book, a synopsis of it, a cover filed under it or a design of it, and this is none")}$holdsTheCover(e){const a=[e.annotations.expressed(U)?.means?.identifier,e.annotations.expressed(cd)?.means?.identifier,e.annotations.expressed(co)?.means?.identifier,e.annotations.expressed(M)?.identifier];l(e.annotations.find(N).every(s=>s.cover?.is(I)===!0&&a.includes(s.cover.mention?.identifier)),"a volume holds the cover of a book its chapter stands for, the book a synopsis or a design is of or the subject or author a cover is filed under, and one here holds something else")}};n(qn,"VolumeSpecification");let Ee=qn;R([h("a volume is a chapter that stands for another book")],Ee.prototype,"$saidOfAChapterStandingForABook");R([h("a volume holds the cover of a book its chapter stands for")],Ee.prototype,"$holdsTheCover");const zd=o(ke),kt=o(_e),vt=o(Y),yt=o(ve),Ge=o(N),oc=o(Qt),nc=o(va),rc=o(Vt),Od=o(St),ic=Od,dc=rc;var pc=Object.defineProperty,cc=Object.getOwnPropertyDescriptor,lc=n((p,e,a,s)=>{for(var t=cc(e,a),i=p.length-1,d;i>=0;i--)(d=p[i])&&(t=d(e,a,t)||t);return t&&pc(e,a,t),t},"__decorateClass$i");const rt=class rt extends Zd{constructor(){super(...arguments),this.specification=new wa,this.themeProvider=!0,this.style=x.div`
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
    `}get rules(){return this.parts().flat(1/0).filter(e=>typeof e=="string").join("")}get pages(){return this.book.pages}get open(){const e=this.book;return e.open??e.synopsis}$Bound(){const e=this.style,a=this.book;this.style=s=>r(e,{$at:a.means?.identifier,$scheme:a.cover?.annotations.expressed(Y)?.declarations,...s}),super.$Bound()}defines(e){for(const s of e.annotations.after(this))s instanceof rt&&e.annotations.express(s,!1);super.defines(e),e.classes.add(this,"pa-layout");const a=this.book.open;a!==void 0&&e.classes.add(this,"pa-turned"),a?.is(A)&&e.classes.add(this,"pa-manual")}erase(e){super.erase(e),e.classes.revert(this)}parts(){return[this.paging(),this.regions(),this.areas(),this.phone()]}paging(){return f`
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
        `}};n(rt,"$Layout");let xe=rt;const Un=class Un extends B{$placesTheSideAndNeverDressesIt(e){for(const a of e.annotations.find(xe)){const s=(a.rules.match(/[^{};]*\.pd-holds\s+[^\s{},][^{};]*\{/gu)??[]).map(t=>t.trim());l(s.length===0,`a layout places the side and never dresses it, what stands in the side being the index's and the folder's, and this one says "${s[0]}"`)}}};n(Un,"LayoutSpecification");let wa=Un;lc([h("a layout places the side and never dresses it")],wa.prototype,"$placesTheSideAndNeverDressesIt");const xt=o(xe),it=class it extends b{constructor(){super(...arguments),this.specification=new B}defines(e){for(const a of e.annotations.after(this))a instanceof it&&e.annotations.express(a,!1);e.classes.add(this,"pa-tone")}erase(e){e.classes.revert(this)}};n(it,"$Tone");let we=it;const Yn=class Yn extends we{defines(e){super.defines(e),e.classes.add(this,"pa-dark")}};n(Yn,"$Dark");let es=Yn;const Zn=class Zn extends we{defines(e){super.defines(e),e.classes.add(this,"pa-light")}};n(Zn,"$Light");let as=Zn;const Kn=class Kn extends we{defines(e){super.defines(e),e.classes.add(this,"pa-white-over-black")}};n(Kn,"$WhiteOverBlack");let ts=Kn;const S=o(we),Dd=o(es),fe=o(as),hc=o(ts);var fc=Object.defineProperty,gc=Object.getOwnPropertyDescriptor,bc=n((p,e,a,s)=>{for(var t=gc(e,a),i=p.length-1,d;i>=0;i--)(d=p[i])&&(t=d(e,a,t)||t);return t&&fc(e,a,t),t},"__decorateClass$h");const Xn=class Xn extends O{write(){const e=this.book.body;return`${e.indexOf(this.chapter)+1} of ${e.length}`}$Define(){super.$Define(),this.classes.add(this,"pd-count")}};n(Xn,"$Count");let ss=Xn;const Jn=class Jn extends b{constructor(){super(...arguments),this.specification=new qe}defines(e){e.classes.add(this,"pa-before")}erase(e){e.classes.revert(this)}};n(Jn,"$Before");let os=Jn;const Qn=class Qn extends b{constructor(){super(...arguments),this.specification=new qe}defines(e){e.classes.add(this,"pa-after")}erase(e){e.classes.revert(this)}};n(Qn,"$After");let ns=Qn;const Vn=class Vn extends u{$saidOfAWordOfATurn(e){l(e instanceof O&&e.parent instanceof za,"this is said of a word of a turn, and here it is said of something else")}};n(Vn,"OfATurnSpecification");let qe=Vn;bc([h("this is said of a word of a turn")],qe.prototype,"$saidOfAWordOfATurn");const uc=o(ss),mc=o(os),$c=o(ns),Sn=class Sn extends g{get before(){const e=this.book.body;return e[e.indexOf(this.chapter)-1]??this.chapter}get after(){const e=this.book.body;return e[e.indexOf(this.chapter)+1]??this.chapter}write(){const e=o(j),a=o(uc),s=o(mc),t=o($c),i=o(this.before===this.chapter?zt:w),d=o(this.after===this.chapter?zt:w);return c(k,{children:[c(e,{children:[r(s,{}),r(i,{children:this.before.mention.identifier}),"← ",this.before.title.name]}),r(a,{}),c(e,{children:[r(t,{}),r(d,{children:this.after.mention.identifier}),this.after.title.name," →"]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-turn")}};n(Sn,"$Turn");let za=Sn;const kc=o(za);var vc=Object.defineProperty,yc=Object.getOwnPropertyDescriptor,sa=n((p,e,a,s)=>{for(var t=s>1?void 0:s?yc(e,a):e,i=p.length-1,d;i>=0;i--)(d=p[i])&&(t=(s?d(e,a,t):d(t))||t);return s&&t&&vc(e,a,t),t},"__decorateClass$g");const er=class er extends Kd{constructor(){super(...arguments),this.specification=new W}get chapters(){return this.text.find(y).filter(e=>[...e.classes].includes("pd-canonical"))}get laidOutChapters(){return[this.cover,this.synopsis,this.table,...this.chapters]}get pages(){return[this.synopsis,...this.chapters].filter(e=>e!==void 0)}get body(){const e=this.appendix;return this.chapters.filter(a=>!e.includes(a))}get entries(){return this.body}get appendix(){const e=this.table;if(e===void 0)return[];const a=e.text.find(C).filter(s=>s.is(We)).flatMap(s=>s.text.find(g).map(t=>H(t)?.identifier));return this.chapters.filter(s=>a.includes(s.mention?.identifier??""))}get open(){return this.$bookmark===void 0?void 0:this.chapterAt(this.$bookmark)}get tones(){return[Dd,fe,hc]}get topics(){return this.cover?.annotations.find(ld)??[]}write(){return c(k,{children:[r("div",{className:"pd-library",children:this.library()}),r("div",{className:"pd-me",children:this.me()}),r("div",{className:"pd-holds",children:this.holds()}),r("div",{className:"pd-head",children:this.head()}),c("div",{className:"pd-pages",children:[this.aboveThePages(),this.pages.map((e,a)=>{const s=o(e);return r(s,{},a)}),this.belowThePages()]})]})}library(){if(this._logo===void 0)return;const e=o(this._logo);return r(e,{})}me(){const e=o(Od),a=o(w),s=o(dp),t=this.coverOf(this.author?.means?.identifier);return c(k,{children:[this.byline(),t===void 0?void 0:this.painted(t,r(e,{cover:t,children:r(a,{children:t.mention.identifier})})),this.topics.length===0?void 0:r(s,{cover:this.cover})]})}painted(e,a,s){return be(e,a,s)}holds(){const e=o(this.table);return r(e,{})}head(){const e=o(this.cover);return c(k,{children:[r(e,{}),r("div",{className:"pd-switches",children:this.switches()})]})}aboveThePages(){}belowThePages(){}chapterAt(e){return(this._chapterByPlace??this.chapterByPlace()).get(e)}chapterByPlace(){const e=new Map;for(const a of this.chapters)for(const s of this.sections(a))s.mention!==void 0&&!e.has(s.mention.identifier)&&e.set(s.mention.identifier,a);for(const a of this.chapters)a.mention!==void 0&&e.set(a.mention.identifier,a);for(const a of this.entries)a.mention!==void 0&&!e.has(a.mention.identifier)&&e.set(a.mention.identifier,a);return e}placeWithin(e){return e.startsWith("#")?`${this.means?.identifier??""}${e}`:e}coverOf(e){if(e!==void 0)return this.means?.identifier===e?this.cover:this.cover?.annotations.find(N).map(a=>a.cover).find(a=>a?.mention?.identifier===e)}byline(){const e=o(bd);return r(e,{chapter:this.cover})}root(){const e=o(Zp);return r(e,{cover:this.cover})}switches(){}sections(e){return e.text.find(C).flatMap(a=>[a,...this.sections(a)])}sectionOf(e){const a=this.table;return a===void 0?void 0:this.sections(a).find(s=>s.canonical?.name===e.name)}turn(){this.bookmark!==this.cover&&super.turn()}$Define(){super.$Define();const e=o(xt),a=o(S);this.annotations.add(this,r(e,{}),r(a,{}))}$Bound(){this._chapterByPlace=this.chapterByPlace();const e=o(vo),a=this.table?.annotations.expressed(V);for(const i of a?.parts??[]){const d=this.sectionOf(i);d===void 0||d.is(ga)||!i.chapters.some(m=>m.is(A))||d.annotations.add(this,r(e,{}))}const s=this.root();s!==void 0&&this.table?.text.add(this,s);const t=o(nc);this._logo=Xd.chemical(r(t,{cover:this.cover,subject:this.coverOf(this.subject?.means?.identifier)}),this),this.turns(),super.$Bound()}turns(){const e=o(kc);for(const a of this.body)a.text.add(this,r(e,{}))}};n(er,"$LibraryBook");let _=er;sa([Ae()],_.prototype,"_chapterByPlace",2);const ar=class ar extends Jd{$holdsOnlyChapters(e){l([...e.text].every(a=>a instanceof y),"a book of this library holds only chapters, and this one holds something else")}$placesEveryChapter(e){l(e.text.find(y).every(a=>e.laidOutChapters.includes(a)),"a book of this library has a place for every chapter it holds, and this one holds a chapter it places nowhere")}$onlyAChapterAppends(e){l(e.text.find(y).every(a=>e.chapters.includes(a)||!a.is(X)),"only an ordinary chapter files a file, and here a cover, a synopsis or a table of contents files one")}$listsEachManualPart(e){const s=(e.table?.annotations.expressed(V)?.parts??[]).find(t=>t.chapters.some(i=>i.is(A))&&e.sectionOf(t)===void 0);l(s===void 0,`a part read as a manual is listed under a section headed with its name, and "${s?.name}" has none`)}};n(ar,"LibraryBookSpecification");let W=ar;sa([h("a book of this library holds only chapters")],W.prototype,"$holdsOnlyChapters",1);sa([h("a book of this library has a place for every chapter it holds")],W.prototype,"$placesEveryChapter",1);sa([h("only an ordinary chapter files a file")],W.prototype,"$onlyAChapterAppends",1);sa([h("a part read as a manual is listed under a section headed with its name")],W.prototype,"$listsEachManualPart",1);const jd=o(_);o(jd,le)(sp);o(jd,S)(Dd);var xc=Object.defineProperty,wc=Object.getOwnPropertyDescriptor,zc=n((p,e,a,s)=>{for(var t=wc(e,a),i=p.length-1,d;i>=0;i--)(d=p[i])&&(t=d(e,a,t)||t);return t&&xc(e,a,t),t},"__decorateClass$f");const tr=class tr extends _{constructor(){super(...arguments),this.specification=new Ue}get open(){return super.open??this.body[0]}head(){}switches(){}root(){}$Define(){super.$Define(),this.$is=[mo,kd]}$Bound(){const e=o(vo);for(const a of this.table?.text.find(C)??[])a.annotations.add(this,r(e,{})),a.is(We)&&(a.$is=[ko]);super.$Bound()}};n(tr,"$Manual");let Oa=tr;const sr=class sr extends W{$everyChapterHasABrief(e){l(e.chapters.every(a=>a.text.find(g).some(s=>s.is(da))),"every chapter of a manual opens with a brief, and one here has none")}};n(sr,"ManualSpecification");let Ue=sr;zc([h("every chapter of a manual opens with a brief")],Ue.prototype,"$everyChapterHasABrief");const yo=o(Oa);o(yo,S)(fe);const or=class or extends re{constructor(){super(...arguments),this.label=x.span.attrs({className:"pa-number"})``}get number(){return this.book.body.indexOf(this.referencedChapter)+1}get keyed(){return this.referencedChapter?.annotations.expressed(K)}note(){const e=this.label,a=o(md),s=this.keyed;return c(k,{children:[super.note(),s===void 0?void 0:r(a,{keyed:s}),this.number===0?void 0:r(e,{children:String(this.number)})]})}};n(or,"$NumberedEntry");let rs=or;const Oc=o(rs);o(yo,yd)(Oc);const nr=class nr extends ke{constructor(){super(...arguments),this.style=x.header`
        .pd-chapter.pa-cover { margin-block: 0; }
        .pa-cover .pd-title {
            font-size: calc(1.04 * ${({theme:e})=>e.size});
            font-weight: 600;
        }
    `}};n(nr,"$ManualCover");let is=nr;const rr=class rr extends V{constructor(){super(...arguments),this.style=x.nav`
        .pa-table-of-contents .pa-reference { color: inherit; text-decoration: none; }
    `}};n(rr,"$ManualTableOfContents");let ds=rr;o(is);o(ds);const ir=class ir extends oe{constructor(){super(...arguments),this.measure="104ch",this.holdsColumn="272px",this.barHeight="52px",this.space="24px",this.size="14px",this.beat="0.22s",this.serif="'Source Serif 4', Georgia, serif",this.paper="#fdfcfa",this.ink="#343c4a",this.heading="#1a1f36",this.soft="#727d8c",this.faint="#9ea8b5",this.line="#e4e9f2",this.tint="#f0f4fc",this.barTint="#f8fafe",this.side="#f7f8fb",this.sideInk="#3a4452",this.sideDim="#6b7684",this.sideLine="#e0e4eb",this.sky="#e3edfb",this.skyInk="#4a6ea0",this.accent="#4a6ea0",this.colour="#4fb3a8",this.radius="6px",this.wash="linear-gradient(135deg, #f1f5fd 0%, #fdfcfa 48%, #fdf5ee 100%)"}parts(){return[...super.parts(),this.tree(),this.icons(),this.small()]}library(){return f`
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
        `}};n(ir,"$ManualTheme");let ps=ir;const Pd=o(ps);o(yo,le)(Pd);var Dc=Object.defineProperty,jc=Object.getOwnPropertyDescriptor,Pc=n((p,e,a,s)=>{for(var t=jc(e,a),i=p.length-1,d;i>=0;i--)(d=p[i])&&(t=d(e,a,t)||t);return t&&Dc(e,a,t),t},"__decorateClass$e");const dr=class dr extends b{constructor(){super(...arguments),this.specification=new Da}defines(e){e.classes.add(this,"pa-first")}erase(e){e.classes.revert(this)}};n(dr,"$First");let cs=dr;const pr=class pr extends u{$saidOfAParagraph(e){l(e instanceof g,"first is said of a paragraph, and this is not one")}};n(pr,"FirstSpecification");let Da=pr;Pc([h("first is said of a paragraph")],Da.prototype,"$saidOfAParagraph");o(cs);const cr=class cr extends oe{constructor(){super(...arguments),this.serif="'Source Serif 4', Georgia, serif",this.paper="#fdfcfa",this.ink="#343c4a",this.soft="#727d8c",this.faint="#9ea8b5",this.line="#e4e9f2",this.tint="#f0f4fc",this.barTint="#f8fafe",this.sky="#e3edfb",this.skyInk="#4a6ea0",this.accent="#4a6ea0",this.wash="linear-gradient(135deg, #f2f6fd 0%, #fdfcfa 48%, #fdf6f1 100%)",this.side="#f7f8fb",this.sideInk="#3a4452",this.sideDim="#7f8a9b",this.sideLine="#e3e7ee",this.barHeight="52px",this.holdsColumn="232px",this.space="24px",this.cover="132px",this.volume="184px",this.radius="6px",this.spine="inset 3px 0 0 rgba(0, 0, 0, 0.08), inset 4px 0 0 rgba(255, 255, 255, 0.35), 0 6px 12px -10px rgba(44, 52, 64, 0.3)",this.lift="inset 3px 0 0 rgba(0, 0, 0, 0.08), inset 4px 0 0 rgba(255, 255, 255, 0.35), 0 10px 16px -12px rgba(44, 52, 64, 0.35)",this.openSpine="inset 7px 0 0 rgba(0, 0, 0, 0.07), inset 9px 0 0 rgba(255, 255, 255, 0.45), 0 12px 22px -16px rgba(44, 52, 64, 0.35)"}parts(){return[...super.parts(),this.shelf(),this.jackets(),this.desk(),this.unfolded(),this.small()]}page(){return f`
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
        `}};n(cr,"$Bookshelf");let ls=cr;const Cc=o(ls);var Ac=Object.defineProperty,Nc=Object.getOwnPropertyDescriptor,wt=n((p,e,a,s)=>{for(var t=s>1?void 0:s?Nc(e,a):e,i=p.length-1,d;i>=0;i--)(d=p[i])&&(t=(s?d(e,a,t):d(t))||t);return s&&t&&Ac(e,a,t),t},"__decorateClass$d");const lr=class lr extends _{get books(){return this.text.find(y).filter(e=>e.is(U)&&e!==this.synopsis)}get laidOutChapters(){return[...super.laidOutChapters,...this.books]}get pages(){return[this.synopsis,...this.books,...this.chapters]}head(){return r("div",{className:"pd-switches",children:this.switches()})}belowThePages(){return r("div",{className:"pd-shelf",children:this.volumes()})}volumes(){const e=o(j),a=o(w);return(this.table?.annotations.expressed(E)?.entries??[]).map((t,i)=>{const d=H(t).identifier,m=this.chapterAt(d),v=m===void 0?this.coverOf(d):this.jacketOf(m);if(v!==void 0)return c("div",{className:"pd-volume",children:[this.jacket(v,d),r("div",{className:"pd-paragraph pd-name",children:c(e,{children:[r(a,{children:d}),v.title.name]})})]},i)})}jacket(e,a){if(e===void 0)return;const s=o(oc),t=o(w);return a===void 0?r(s,{cover:e}):r(s,{cover:e,children:r(t,{children:a})})}line(e){if(e===void 0)return;const a=o(bd),s=o(ip);return c(k,{children:[r(a,{cover:e}),r(s,{cover:e})]})}wayIntoTheBook(e){if(e===void 0)return;const a=o(j),s=o(w),t=e.mention.identifier;return r("div",{className:"pd-paragraph pd-read",children:c(a,{children:[r(s,{children:t}),`Read ${e.title.name}`]})})}jacketOf(e){return e===this.synopsis?this.cover:e.annotations.expressed(N)?.cover??(this.appendix.includes(e)?void 0:this.cover)}coverOf(e){return super.coverOf(e)??this.books.map(a=>a.annotations.expressed(N)?.cover).find(a=>a!==void 0&&a.mention?.identifier===e)}chapterAt(e){return super.chapterAt(e)??this.books.find(a=>this.placeOf(a)===e)}placeOf(e){const a=e.title?.annotations.expressed(pt)?.identifier,s=this.means?.identifier;if(!(a===void 0||s===void 0))return`${s.replace(/\/+$/u,"")}/#${a}`}$Bound(){const e=o(Hc);for(const a of[this.synopsis,...this.books])a?.annotations.add(this,r(e,{}));super.$Bound()}};n(lr,"$Catalogue");let hs=lr;const hr=class hr extends G{constructor(){super(...arguments),this.specification=new ja,this.card=x.div`
        &:not(.pa-open) { display: none; }
    `}get chapter(){return this.parent}get catalogue(){return this.book}get isTheFront(){return this.chapter===this.catalogue.synopsis}get cover(){return this.catalogue.jacketOf(this.chapter)}$CatalogueDesk(...e){this.$Format(...e);const a=o(mt),s=this.card;this.style=({className:t,children:i})=>{const d=this.catalogue,m=this.cover,v=[...this.chapter.classes].includes("pa-open"),$=this.isTheFront?o(d.title):void 0;return d.painted(m,c(s,{className:`${t??""} pd-catalogue-desk${v?" pa-open":""}`.trim(),children:[d.jacket(m),c("div",{className:"pd-words",children:[$===void 0?void 0:r($,{}),i]}),m===void 0||this.isTheFront?void 0:r("div",{className:"pd-line",children:d.line(m)}),d.wayIntoTheBook(m),m===void 0?void 0:r(a,{chapter:this.chapter,annotation:Tc,children:"read on"})]}))}}defines(e){super.defines(e),e.classes.add(this,"pa-catalogue-desk")}erase(e){super.erase(e),e.classes.revert(this)}};n(hr,"$CatalogueDesk");let fs=hr;const fr=class fr extends u{$holdsASynopsis(e){l(e instanceof y&&e.is(U),"a catalogue desk holds a synopsis, and this is not one")}};n(fr,"CatalogueDeskSpecification");let ja=fr;wt([h("a catalogue desk holds a synopsis")],ja.prototype,"$holdsASynopsis",1);const gr=class gr extends hd{get identifier(){return this._book??super.identifier}$Bound(){super.$Bound(),this._book=this.chapter?.annotations.expressed(U)?.means?.identifier}};n(gr,"$BookLink");let Pa=gr;wt([Ae()],Pa.prototype,"_book",2);const br=class br extends b{constructor(){super(...arguments),this.specification=new Ca}defines(e){e.classes.add(this,"pa-caption")}erase(e){e.classes.revert(this)}};n(br,"$Caption");let gs=br;const ur=class ur extends b{constructor(){super(...arguments),this.specification=new Aa}defines(e){e.classes.add(this,"pa-arrow")}erase(e){e.classes.revert(this)}};n(ur,"$Arrow");let bs=ur;const mr=class mr extends b{constructor(){super(...arguments),this.specification=new B}defines(e){e.classes.add(this,"pa-unfolded-desk")}erase(e){e.classes.revert(this)}};n(mr,"$UnfoldedDesk");let us=mr;const $r=class $r extends u{$isAParagraph(e){l(e instanceof g,"a caption is a paragraph, and this is not one")}};n($r,"CaptionSpecification");let Ca=$r;wt([h("a caption is a paragraph")],Ca.prototype,"$isAParagraph",1);const kr=class kr extends u{$isAWordOfTheTable(e){l(e instanceof O&&e.chapter?.is(V)===!0,"an arrow is a word of the table of contents, and this is not one")}};n(kr,"ArrowSpecification");let Aa=kr;wt([h("an arrow is a word of the table of contents")],Aa.prototype,"$isAWordOfTheTable",1);const xo=o(hs),Ic=o(fs),Mc=o(Pa);o(gs);o(bs);const Tc=o(us),Hc=Ic;o(xo,zt)(Mc);o(xo,le)(Cc);o(xo,S)(fe);var Bc=Object.defineProperty,Wc=Object.getOwnPropertyDescriptor,oa=n((p,e,a,s)=>{for(var t=Wc(e,a),i=p.length-1,d;i>=0;i--)(d=p[i])&&(t=d(e,a,t)||t);return t&&Bc(e,a,t),t},"__decorateClass$c");const vr=class vr extends b{constructor(){super(...arguments),this.specification=new Ia}defines(e){e.classes.add(this,"pa-question")}erase(e){e.classes.revert(this)}};n(vr,"$Question");let ms=vr;const yr=class yr extends b{constructor(){super(...arguments),this.specification=new Ma}defines(e){e.classes.add(this,"pa-answer")}erase(e){e.classes.revert(this)}};n(yr,"$Answer");let $s=yr;const xr=class xr extends b{constructor(){super(...arguments),this.specification=new Ta}defines(e){e.classes.add(this,"pa-decision")}erase(e){e.classes.revert(this)}};n(xr,"$Decision");let Na=xr;const wr=class wr extends b{constructor(){super(...arguments),this.specification=new Ha}defines(e){e.classes.add(this,"pa-pain")}erase(e){e.classes.revert(this)}};n(wr,"$Pain");let ks=wr;const zr=class zr extends b{constructor(){super(...arguments),this.specification=new Ba}defines(e){e.classes.add(this,"pa-solution")}erase(e){e.classes.revert(this)}};n(zr,"$Solution");let vs=zr;const Or=class Or extends u{$isAParagraph(e){l(e instanceof g,"a question is a paragraph, and this is not one")}};n(Or,"QuestionSpecification");let Ia=Or;oa([h("a question is a paragraph")],Ia.prototype,"$isAParagraph");const Dr=class Dr extends u{$isAParagraph(e){l(e instanceof g,"an answer is a paragraph, and this is not one")}};n(Dr,"AnswerSpecification");let Ma=Dr;oa([h("an answer is a paragraph")],Ma.prototype,"$isAParagraph");const jr=class jr extends u{$isAParagraph(e){l(e instanceof g,"a decision is a paragraph, and this is not one")}};n(jr,"DecisionSpecification");let Ta=jr;oa([h("a decision is a paragraph")],Ta.prototype,"$isAParagraph");const Pr=class Pr extends u{$isAParagraph(e){l(e instanceof g,"a pain is a paragraph, and this is not one")}};n(Pr,"PainSpecification");let Ha=Pr;oa([h("a pain is a paragraph")],Ha.prototype,"$isAParagraph");const Cr=class Cr extends u{$isAParagraph(e){l(e instanceof g,"a solution is a paragraph, and this is not one")}};n(Cr,"SolutionSpecification");let Ba=Cr;oa([h("a solution is a paragraph")],Ba.prototype,"$isAParagraph");o(ms);o($s);o(Na);o(ks);o(vs);var Lc=Object.defineProperty,_c=Object.getOwnPropertyDescriptor,ge=n((p,e,a,s)=>{for(var t=_c(e,a),i=p.length-1,d;i>=0;i--)(d=p[i])&&(t=d(e,a,t)||t);return t&&Lc(e,a,t),t},"__decorateClass$b");const Ar=class Ar extends b{constructor(){super(...arguments),this.specification=new ze,this.span=x.span.attrs({className:"pd-number"})``,this.close=x.span.attrs({className:"pd-close"})``}get number(){const e=D.copy(this.text).trim();return e===""?NaN:Number(e)}note(){const e=this.span,a=this.close,s=o(j),t=o(w),i=this.chapter?.mention?.identifier;return c(k,{children:[r(e,{children:this.number}),i===void 0?void 0:r(a,{children:c(s,{children:[r(t,{children:i}),"×"]})})]})}defines(e){e.classes.add(this,"pa-concept")}erase(e){e.classes.revert(this)}};n(Ar,"$Concept");let Z=Ar;const Nr=class Nr extends b{constructor(){super(...arguments),this.specification=new Ze}defines(e){e.classes.add(this,"pa-designed")}erase(e){e.classes.revert(this)}};n(Nr,"$Designed");let ys=Nr;const Ir=class Ir extends b{constructor(){super(...arguments),this.specification=new Ze}defines(e){e.classes.add(this,"pa-decided")}erase(e){e.classes.revert(this)}};n(Ir,"$Decided");let xs=Ir;const Mr=class Mr extends b{constructor(){super(...arguments),this.specification=new Oe}defines(e){e.classes.add(this,"pa-desk")}erase(e){e.classes.revert(this)}};n(Mr,"$Desk");let Wa=Mr;const Tr=class Tr extends b{constructor(){super(...arguments),this.specification=new Oe}defines(e){e.classes.add(this,"pa-phone")}erase(e){e.classes.revert(this)}};n(Tr,"$Phone");let La=Tr;const Hr=class Hr extends b{constructor(){super(...arguments),this.specification=new Oe}defines(e){e.classes.add(this,"pa-thumbnail")}erase(e){e.classes.revert(this)}};n(Hr,"$Thumbnail");let Ye=Hr;const Br=class Br extends b{constructor(){super(...arguments),this.specification=new De}defines(e){e.classes.add(this,"pa-precedent")}erase(e){e.classes.revert(this)}};n(Br,"$Precedent");let ws=Br;const Wr=class Wr extends b{constructor(){super(...arguments),this.specification=new De}defines(e){e.classes.add(this,"pa-source")}erase(e){e.classes.revert(this)}};n(Wr,"$Source");let zs=Wr;const Lr=class Lr extends b{constructor(){super(...arguments),this.specification=new _a}defines(e){e.classes.add(this,"pa-where")}erase(e){e.classes.revert(this)}};n(Lr,"$Where");let Os=Lr;const _r=class _r extends u{$isASection(e){l(e instanceof C,"a concept is a section, and this is not one")}$givenItsNumber(e){l(Number.isInteger(e.annotations.expressed(Z)?.number),"a concept is given its number, and this one was given something else")}$photographedThreeWays(e){const a=e.text.find(g);l([Wa,La,Ye].every(s=>a.some(t=>t.is(s))),"a concept is photographed at a desk, at a phone, and small, and this one is missing a photograph")}};n(_r,"ConceptSpecification");let ze=_r;ge([h("a concept is a section")],ze.prototype,"$isASection");ge([h("a concept is given its number")],ze.prototype,"$givenItsNumber");ge([h("a concept is photographed at a desk, at a phone, and small")],ze.prototype,"$photographedThreeWays");const Rr=class Rr extends u{$isAParagraphHoldingOneImage(e){l(e instanceof g&&e.text.find(ho).length===1,"a photograph is a paragraph that holds one image, and this is not one")}};n(Rr,"PhotographSpecification");let Oe=Rr;ge([h("a photograph is a paragraph that holds one image")],Oe.prototype,"$isAParagraphHoldingOneImage");const Fr=class Fr extends u{$saidOfAParagraphOfAConcept(e){l(e instanceof g&&e.parent instanceof Qd&&e.parent.is(Z),"this is said of a paragraph of a concept, and here it is said of something else")}};n(Fr,"OfAConceptSpecification");let De=Fr;ge([h("this is said of a paragraph of a concept")],De.prototype,"$saidOfAParagraphOfAConcept");const Er=class Er extends De{$refersToWhereItIsBuilt(e){l(e.text.find(O).some(a=>a.is(se)),"a where refers to where the concept is built, and this one refers nowhere")}};n(Er,"WhereSpecification");let _a=Er;ge([h("a where refers to where the concept is built")],_a.prototype,"$refersToWhereItIsBuilt");const Gr=class Gr extends u{$saidOfAConcept(e){l(e.is(Z),"this is said of a concept, and here it is said of something else")}};n(Gr,"OfAConceptSectionSpecification");let Ze=Gr;ge([h("this is said of a concept")],Ze.prototype,"$saidOfAConcept");o(Z);o(ys);o(xs);o(Wa);o(La);o(Ye);o(ws);o(zs);o(Os);var Rc=Object.defineProperty,Fc=Object.getOwnPropertyDescriptor,Cd=n((p,e,a,s)=>{for(var t=Fc(e,a),i=p.length-1,d;i>=0;i--)(d=p[i])&&(t=d(e,a,t)||t);return t&&Rc(e,a,t),t},"__decorateClass$a");const Ec=n((p,e)=>p.chapters.flatMap(a=>p.sections(a)).find(a=>a.is(Z)&&a.mention?.identifier===e),"conceptAt"),Gc=n(p=>{const e=p.text.find(g).find(a=>a.is(Ye))?.text.find(ho)[0];return e===void 0?"":e.contents||D.copy(e.text)},"thumbnailOf"),qr=class qr extends G{constructor(){super(...arguments),this.specification=new Ra,this.themeProvider=!0,this.style=x.div`
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
    `}get chapter(){return this.parent}get concepts(){return this.book.sections(this.chapter).filter(e=>e.is(Z))}get open(){return this.concepts.find(e=>e.mention?.identifier===this.book?.$bookmark)}defines(e){super.defines(e),e.classes.add(this,"pa-gallery");const a=this.open,s=this.concepts.find(t=>[...t.classes].includes("pa-open"));s!==a&&(s?.classes.revert(this),a?.classes.add(this,"pa-open"))}erase(e){super.erase(e),e.classes.revert(this)}};n(qr,"$Gallery");let Ds=qr;const Ur=class Ur extends G{constructor(){super(...arguments),this.specification=new Fa,this.strip=x.div`
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
    `}get paragraph(){return this.parent}get places(){return this.paragraph.text.find(O).map(e=>e.annotations.expressed(se)?.identifier).filter(e=>e!==void 0)}get concepts(){const e=this.book;return[...new Set(this.places.map(a=>Ec(e,a)).filter(a=>a!==void 0))]}get chosen(){const e=this.paragraph.parent?.text.find(g).filter(a=>a.is(Na))??[];return new Set(e.flatMap(a=>a.text.find(O).map(s=>s.annotations.expressed(se)?.identifier)).filter(a=>a!==void 0))}$Strip(...e){this.$Format(...e);const a=this.strip,s=o(j),t=o(w);this.style=({className:i,children:d})=>{const m=this.chosen;return c(a,{className:`${i??""} pd-strip`.trim(),children:[this.concepts.map((v,$)=>{const z=v.mention.identifier;return c(s,{children:[r(t,{children:z}),c("span",{className:`pd-thumb${m.has(z)?" pd-chosen":""}`,children:[r("img",{src:Gc(v),alt:""}),c("span",{className:"pd-name",children:[r("span",{className:"pd-number",children:v.annotations.expressed(Z)?.number}),v.canonical?.name]})]})]},$)}),r("span",{className:"pd-said",children:d})]})}}defines(e){super.defines(e),e.classes.add(this,"pa-strip")}erase(e){super.erase(e),e.classes.revert(this)}};n(Ur,"$Strip");let js=Ur;const Yr=class Yr extends u{$isAChapter(e){l(e instanceof y,"a gallery is a chapter, and this is not one")}};n(Yr,"GallerySpecification");let Ra=Yr;Cd([h("a gallery is a chapter")],Ra.prototype,"$isAChapter");const Zr=class Zr extends u{$isAParagraphReferringToConcepts(e){l(e instanceof g&&e.text.find(O).some(a=>a.annotations.expressed(se)!==void 0),"a strip is a paragraph that refers to concepts, and this one refers to nothing")}};n(Zr,"StripSpecification");let Fa=Zr;Cd([h("a strip is a paragraph that refers to concepts")],Fa.prototype,"$isAParagraphReferringToConcepts");o(Ds);o(js);const Kr=class Kr extends oe{constructor(){super(...arguments),this.accent="#23407a",this.ink="#343c4a",this.heading="#1a1f36",this.soft="#727d8c",this.faint="#9ea8b5",this.line="#e4e9f2",this.paper="#fdfcfa",this.side="#f8f9fb",this.holdsColumn="256px",this.barHeight="52px",this.card="12.5rem",this.shadow="0 1px 2px rgba(43, 54, 60, 0.05), 0 6px 18px rgba(43, 54, 60, 0.05)",this.lift="0 2px 4px rgba(43, 54, 60, 0.06), 0 14px 32px rgba(43, 54, 60, 0.10)",this.barLight="#fcfcfd",this.barMid="#f8f9fc",this.barDeep="#f2f4f9",this.barShadow="0 1px 0 rgba(43, 54, 60, 0.05)",this.sideLight="#fafbfc",this.sideDeep="#f2f4f8",this.codeGround="#f6f7fa",this.hairline="1px",this.stroke="2px",this.rise="-1px",this.gloss="inset 0 1px 0 rgba(255, 255, 255, 0.7)",this.ring="0 0 0 2px color-mix(in oklab, var(--band) 80%, white)",this.decisionShadow="0 1px 2px rgba(43, 54, 60, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.6)"}parts(){return[...super.parts(),this.backdrop(),this.bands(),this.guide(),this.story(),this.said(),this.small()]}backdrop(){return f`
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
        `}};n(Kr,"$Exhibition");let Ps=Kr;const qc=o(Ps);var Uc=Object.defineProperty,Yc=Object.getOwnPropertyDescriptor,Ad=n((p,e,a,s)=>{for(var t=Yc(e,a),i=p.length-1,d;i>=0;i--)(d=p[i])&&(t=d(e,a,t)||t);return t&&Uc(e,a,t),t},"__decorateClass$9");const Xr=class Xr extends _{constructor(){super(...arguments),this.specification=new Ke}get designs(){return this.chapters.filter(e=>e.is(M))}get open(){return super.open??this.body[0]}head(){}switches(){}$Bound(){const e=o(ec),a=o(Sp),s=o(ac),t=this.designs;for(const i of t)i.annotations.add(this,r(e,{})),i.text.add(this,r(s,{}));for(const i of this.table?.annotations.expressed(E)?.entries??[]){const d=H(i)?.identifier,m=d===void 0?void 0:this.chapterAt(d);m===void 0||!t.includes(m)||i.annotations.add(this,r(a,{number:t.indexOf(m)+1}))}super.$Bound()}};n(Xr,"$Portfolio");let Cs=Xr;const Jr=class Jr extends W{$everyChapterInAPart(e){l(e.chapters.every(a=>a.part!==void 0),"every chapter of a portfolio is in a part, and one here is in none")}$showsEveryDesign(e){l(e.designs.every(a=>$t(a,g).some(s=>s.is(Le))),"a portfolio shows every design it holds as built, in a paragraph said to be the exhibit, and one here has none")}};n(Jr,"PortfolioSpecification");let Ke=Jr;Ad([h("every chapter of a portfolio is in a part")],Ke.prototype,"$everyChapterInAPart");Ad([h("a portfolio shows every design it holds as built")],Ke.prototype,"$showsEveryDesign");const Nd=o(Cs);o(Nd,le)(qc);o(Nd,S)(fe);const Qr=class Qr extends ke{};n(Qr,"$PortfolioCover");let As=Qr;o(As);const Vr=class Vr extends oe{constructor(){super(...arguments),this.prose="'Source Serif 4', Georgia, serif",this.ink="#343c4a",this.heading="#1a1f36",this.soft="#727d8c",this.faint="#9ea8b5",this.line="#e4e9f2",this.paper="#ffffff",this.side="#f8f9fb",this.holdsColumn="240px",this.barHeight="52px",this.shadow="0 1px 2px rgba(43, 54, 60, 0.05), 0 6px 18px rgba(43, 54, 60, 0.05)",this.lift="0 2px 4px rgba(43, 54, 60, 0.06), 0 14px 32px rgba(43, 54, 60, 0.10)",this.barLight="#fcfcfd",this.barMid="#f8f9fc",this.barDeep="#f2f4f9",this.barShadow="0 1px 0 rgba(43, 54, 60, 0.05)",this.sideLight="#fafbfc",this.sideDeep="#f2f4f8",this.hairline="1px",this.stroke="2px"}parts(){return[...super.parts(),this.bands(),this.guide(),this.order(),this.surface(),this.entries(),this.small()]}bands(){return f`
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
        `}};n(Vr,"$Typeset");let Ea=Vr;const Zc=o(Ea);var Kc=Object.defineProperty,Xc=Object.getOwnPropertyDescriptor,Id=n((p,e,a,s)=>{for(var t=Xc(e,a),i=p.length-1,d;i>=0;i--)(d=p[i])&&(t=d(e,a,t)||t);return t&&Kc(e,a,t),t},"__decorateClass$8");const P=n(p=>p.annotations.expressed(L)?.date?.date??"","dayOf"),J=n(p=>{const[e,a]=P(p).split("-");return e===void 0||a===void 0?"":new Date(Date.UTC(Number(e),Number(a)-1,1)).toLocaleString("en-GB",{month:"long",year:"numeric",timeZone:"UTC"})},"monthOf"),Sr=class Sr extends b{constructor(){super(...arguments),this.specification=new B}defines(e){e.classes.add(this,"pa-newest-first")}erase(e){e.classes.revert(this)}};n(Sr,"$NewestFirst");let Ga=Sr;const Jc=o(Ga),Md=Jc,ei=class ei extends g{write(){const e=o(mt);return r(e,{annotation:Md,children:"newest first"})}$Define(){super.$Define(),this.classes.add(this,"pd-entry-order")}};n(ei,"$EntryOrder");let Ns=ei;const ai=class ai extends O{write(){return String(this.book.entries.indexOf(this.chapter)+1)}$Define(){super.$Define(),this.classes.add(this,"pd-entry-number")}};n(ai,"$EntryNumber");let Is=ai;const ti=class ti extends xe{paging(){return f``}};n(ti,"$JournalLayout");let Ms=ti;const Qc=o(Ns),Vc=o(Is),Sc=o(Ms),el=Qc,al=Vc,si=class si extends _{constructor(){super(...arguments),this.specification=new Xe}get latest(){return[...this.entries].sort((e,a)=>P(a).localeCompare(P(e)))[0]}get pages(){const e=[...this.entries].sort((a,s)=>P(a).localeCompare(P(s)));return this.is(Ga)?e.reverse():e}get open(){return super.open??this.latest}head(){}switches(){}turns(){}$Bound(){const e=o(al);for(const t of this.entries)t.text.add(this,r(e,{}));const a=this.table?.annotations.expressed(E);a!==void 0&&(a.$dated=!0);const s=o(el);this.table?.text.add(this,r(s,{})),this.$is=[Md],super.$Bound()}};n(si,"$Journal");let Ts=si;const oi=class oi extends W{$everyEntryIsDated(e){const a=e.entries.find(s=>!s.is(L));l(a===void 0,`every entry of a journal is dated, and "${a?.title?.name}" is not`)}$everyEntrySaysItsMonth(e){const a=e.entries.find(s=>s.part?.name!==J(s));l(a===void 0,a===void 0?"":`every entry of a journal says the month of its date as its part, and "${a.title?.name}" says "${a.part?.name??"none"}" for ${J(a)}`)}};n(oi,"JournalSpecification");let Xe=oi;Id([h("every entry of a journal is dated")],Xe.prototype,"$everyEntryIsDated");Id([h("every entry of a journal says the month of its date as its part")],Xe.prototype,"$everyEntrySaysItsMonth");const wo=o(Ts);o(wo,le)(Zc);o(wo,S)(fe);o(wo,xt)(Sc);const ni=class ni extends ke{};n(ni,"$JournalCover");let Hs=ni;const Td=o(Hs);var tl=Object.defineProperty,sl=Object.getOwnPropertyDescriptor,ol=n((p,e,a,s)=>{for(var t=sl(e,a),i=p.length-1,d;i>=0;i--)(d=p[i])&&(t=d(e,a,t)||t);return t&&tl(e,a,t),t},"__decorateClass$7");const ri=class ri extends b{constructor(){super(...arguments),this.specification=new qa}get section(){return this.parent instanceof C?this.parent:void 0}get headings(){const e=this.section;return e===void 0?[]:e.text.find(fd).filter(a=>a!==e.canonical)}defines(e){e.classes.add(this,"pa-opaque")}erase(e){e.classes.revert(this)}$Bound(){for(const e of this.headings){const a=e.annotations.expressed(pt),s=e.annotations.expressed(hd);for(const t of[a,s])t!==void 0&&e.annotations.remove(e,t)}super.$Bound()}};n(ri,"$Opaque");let Bs=ri;const ii=class ii extends u{$saidOfASection(e){l(e instanceof C,"opaque is said of a section, and this is not one")}};n(ii,"OpaqueSpecification");let qa=ii;ol([h("opaque is said of a section")],qa.prototype,"$saidOfASection");const nl=o(Bs);var rl=Object.defineProperty,il=Object.getOwnPropertyDescriptor,q=n((p,e,a,s)=>{for(var t=il(e,a),i=p.length-1,d;i>=0;i--)(d=p[i])&&(t=d(e,a,t)||t);return t&&rl(e,a,t),t},"__decorateClass$6");const di=class di extends fd{$Define(){super.$Define(),this.classes.add(this,"pd-speaker")}$Bound(){super.$Bound();const e=this.annotations.expressed(pt);e!==void 0&&this.annotations.remove(this,e)}};n(di,"$Speaker");let Je=di;const pi=class pi extends lo{$Define(){super.$Define(),this.classes.add(this,"pd-time")}};n(pi,"$Time");let Ws=pi;const ci=class ci extends Vd{$Define(){super.$Define(),this.classes.add(this,"pd-participant")}};n(ci,"$Participant");let Ua=ci;const li=class li extends g{get participants(){return this.text.find(Ua)}write(){const e=this.participants;return e.flatMap((a,s)=>{const t=o(a);return[s===0?"":s===e.length-1?" and ":", ",r(t,{},s)]})}$Define(){super.$Define(),this.classes.add(this,"pd-participants")}};n(li,"$Participants");let Ya=li;const mh=o(Je),dl=o(Ws),$h=o(Ua),kh=o(Ya),pl=dl,cl=n(p=>{const e=new Date(p);if(Number.isNaN(e.getTime()))return p;const a=e.toLocaleDateString("en-GB",{day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return`${e.toLocaleTimeString("en-GB",{hour:"2-digit",minute:"2-digit",timeZone:"UTC"})} UTC, ${a}`},"shownTime"),hi=class hi extends C{constructor(){super(...arguments),this.specification=new Qe,this.$at=void 0}get when(){return this.$at??""}get speaker(){return this.text.find(Je)[0]}write(){const e=o(pl),a=this.speaker,s=a===void 0?void 0:o(a),t=[...this.text].filter(i=>i!==a);return c(k,{children:[s===void 0?void 0:r(s,{}),r(e,{children:`[${cl(this.when)}](${this.when})`}),r("div",{className:"pd-said",children:t.map((i,d)=>{const m=o(i);return r(m,{},d)})})]})}$Define(){super.$Define(),this.classes.add(this,"pd-message");const e=o(nl);if(this.annotations.add(this,r(e,{})),this.when==="")return;const a=this.speaker,s=a===void 0?"":F.reference(D.copy(a.text))?.name??D.copy(a.text),t=o(Sd);this.annotations.add(this,r(t,{children:gd.slug(`${this.when.replace(/Z$/u,"")} ${s}`)}))}$Bound(){const e=this.book?.author?.means?.identifier;if(e!==void 0&&this.speaker?.means?.identifier===e){const a=o(hl);this.annotations.add(this,r(a,{}))}super.$Bound()}};n(hi,"$Message");let Q=hi;const fi=class fi extends b{constructor(){super(...arguments),this.specification=new Za}defines(e){e.classes.add(this,"pa-mine")}erase(e){e.classes.revert(this)}};n(fi,"$Mine");let Ls=fi;const gi=class gi extends u{$saidOfAMessage(e){l(e instanceof Q,"mine is said of a message, and this is not one")}};n(gi,"MineSpecification");let Za=gi;q([h("mine is said of a message")],Za.prototype,"$saidOfAMessage");const ll=o(Ls),hl=ll,bi=class bi extends b{constructor(){super(...arguments),this.specification=new Xa}defines(e){e.classes.add(this,"pa-quoted")}erase(e){e.classes.revert(this)}};n(bi,"$Quoted");let _s=bi;const ui=class ui extends b{constructor(){super(...arguments),this.specification=new Ja}defines(e){e.classes.add(this,"pa-verbatim")}erase(e){e.classes.revert(this)}};n(ui,"$Verbatim");let Rs=ui;const mi=class mi extends b{constructor(){super(...arguments),this.specification=new Ve,this.$from=void 0,this.$to=void 0}get from(){return this.$from??""}get to(){return this.$to??""}defines(e){e.classes.add(this,"pa-period")}erase(e){e.classes.revert(this)}};n(mi,"$Period");let Ka=mi;const $i=class $i extends b{constructor(){super(...arguments),this.specification=new Ve,this.$shown=void 0,this.$all=void 0}get shown(){return Number(this.$shown??0)}get all(){return Number(this.$all??0)}get aside(){return this.all-this.shown}defines(e){e.classes.add(this,"pa-messages")}erase(e){e.classes.revert(this)}};n($i,"$Messages");let de=$i;const ki=class ki extends ep{$saysWhen(e){l(e.when!==""&&!Number.isNaN(Date.parse(e.when)),"a message says when it was said, as an instant the machine can read, and this one does not")}$headedByItsSpeaker(e){l(e.canonical instanceof Je,"a message is headed by its speaker, a heading that refers to them, and this one is not")}};n(ki,"MessageSpecification");let Qe=ki;q([h("a message says when it was said")],Qe.prototype,"$saysWhen");q([h("a message is headed by its speaker")],Qe.prototype,"$headedByItsSpeaker");const vi=class vi extends u{$saidOfAParagraph(e){l(e instanceof g,"this is said of a paragraph, and this is not one")}};n(vi,"OfAParagraphSpecification");let Xa=vi;q([h("this is said of a paragraph")],Xa.prototype,"$saidOfAParagraph");const yi=class yi extends u{$saidOfACover(e){l(e instanceof y&&e.is(I),"this is said of a cover, and this is not one")}};n(yi,"OfACoverSpecification");let Ve=yi;q([h("this is said of a cover")],Ve.prototype,"$saidOfACover");const xi=class xi extends u{$saidOfAWord(e){l(e instanceof O,"verbatim is said of a word, and this is not one")}};n(xi,"VerbatimSpecification");let Ja=xi;q([h("verbatim is said of a word")],Ja.prototype,"$saidOfAWord");const vh=o(Q),yh=o(_s),xh=o(Rs),wh=o(Ka),zh=o(de),dd=n(p=>p===void 0||p===""?"":new Date(p).toLocaleDateString("en-GB",{day:"numeric",month:"long",year:"numeric",timeZone:"UTC"}),"dayWords"),wi=class wi extends g{write(){const e=this.book,a=e.messageCount?.shown??e.messages.length,s=e.body.length,t=dd(e.period?.from),i=dd(e.period?.to);return c(k,{children:[c("span",{className:"pd-tally-count",children:[r("b",{children:a}),s===1?" messages in ":" messages over ",r("b",{children:s}),s===1?" day":" days"]}),r("span",{className:"pd-tally-period",children:t===i?t:`${t} to ${i}`})]})}$Define(){super.$Define(),this.classes.add(this,"pd-tally")}};n(wi,"$Tally");let Fs=wi;const zi=class zi extends O{write(){return String(this.$entry?.text.find(Q).length??0)}$Define(){super.$Define(),this.classes.add(this,"pd-day-count")}};n(zi,"$DayCount");let Es=zi;const fl=o(Fs),gl=o(Es),bl=fl,ul=gl,Oi=class Oi extends _{constructor(){super(...arguments),this.specification=new pe}get participants(){return this.cover?.text.find(Ya)[0]?.participants??[]}get period(){return this.cover?.annotations.expressed(Ka)}get messageCount(){return this.cover?.annotations.expressed(de)}get messages(){return this.body.flatMap(e=>e.text.find(Q))}get pages(){return[...[...this.body].sort((a,s)=>P(a).localeCompare(P(s))),...this.appendix]}get open(){return super.open??this.pages[0]}head(){const e=o(bl);return c(k,{children:[super.head(),r(e,{chapter:this.cover})]})}$Bound(){const e=o(ul);for(const a of this.table?.annotations.expressed(E)?.entries??[]){const s=H(a)?.identifier,t=s===void 0?void 0:this.chapterAt(s);t===void 0||!this.body.includes(t)||a.text.add(this,r(e,{entry:t}))}super.$Bound()}};n(Oi,"$Conversation");let Qa=Oi;const Di=class Di extends W{$saysItsParticipantsPeriodAndCount(e){l(e.participants.length>0&&e.period!==void 0&&e.messageCount!==void 0,"a conversation says its participants, its period and how many messages it holds, on its cover, and this one says less")}$everyChapterIsDated(e){const a=e.body.find(s=>!s.is(L));l(a===void 0,`every chapter of a conversation is dated, and "${a?.title?.name}" is not`)}$everyMessageIsAddressed(e){const a=e.messages.find(s=>s.annotations.expressed(pt)===void 0);l(a===void 0,`every message of a conversation is addressed by its time, and the one at "${a?.when}" is not`)}$everyChapterHoldsAMessage(e){const a=e.body.find(s=>s.text.find(Q).length===0);l(a===void 0,`every chapter of a conversation holds a message, and "${a?.title?.name}" holds none`)}};n(Di,"ConversationSpecification");let pe=Di;q([h("a conversation says its participants, its period and how many messages it holds")],pe.prototype,"$saysItsParticipantsPeriodAndCount");q([h("every chapter of a conversation is dated")],pe.prototype,"$everyChapterIsDated");q([h("every message of a conversation is addressed by its time")],pe.prototype,"$everyMessageIsAddressed");q([h("every chapter of a conversation holds a message")],pe.prototype,"$everyChapterHoldsAMessage");o(Qa);const ml=/(::[^\n]*|<\|=\|>|=\|>|=[A-Za-z0-9'_]*>|-\([^)]*\)>|->|==|!=)/gu,pd=n(p=>p.replace(/[&<>]/gu,e=>({"&":"&amp;","<":"&lt;",">":"&gt;"})[e]),"escaped"),$l=n(p=>p.split(ml).map((e,a)=>a%2===0?pd(e):`<span class="${e.startsWith("::")?"hljs-comment":"hljs-keyword"}">${pd(e)}</span>`).join(""),"notationHighlighting"),kl=n((p,e)=>e==="srt"?$l(p):ap(p,e),"boxHighlighting"),ji=class ji extends fo{constructor(){super(...arguments),this.$highlighter=kl}get name(){return this.language===""?"text":this.language}$CodeBox(...e){this.$Code(...e),this.containers.replace(this,"pre","div")}write(){return c(k,{children:[c("div",{className:"pd-code-bar",children:[r("span",{className:"pd-code-name",children:this.name}),r("button",{type:"button",className:"pd-copy",onClick:n(e=>this.copy(e),"onClick"),children:"Copy"})]}),r("pre",{children:super.write()})]})}copy(e){const a=e.currentTarget.closest(".pd-code-box")?.querySelector("pre")?.textContent??"";navigator.clipboard?.writeText(a)}$Define(){super.$Define(),this.classes.add(this,"pd-code-box")}};n(ji,"$CodeBox");let Gs=ji;const Oh=o(Gs);var vl=Object.defineProperty,yl=Object.getOwnPropertyDescriptor,zo=n((p,e,a,s)=>{for(var t=yl(e,a),i=p.length-1,d;i>=0;i--)(d=p[i])&&(t=d(e,a,t)||t);return t&&vl(e,a,t),t},"__decorateClass$5");const Pi=class Pi extends b{constructor(){super(...arguments),this.specification=new B}defines(e){e.classes.add(this,"pa-synopses")}erase(e){e.classes.revert(this)}};n(Pi,"$Synopses");let qs=Pi;const xl=o(qs),wl=xl,Ci=class Ci extends g{write(){const e=o(mt);return r(e,{annotation:wl,children:"with the synopsis"})}$Define(){super.$Define(),this.classes.add(this,"pd-row-form")}};n(Ci,"$RowForm");let Us=Ci;const Ai=class Ai extends O{write(){return`${this.chapter?.annotations.expressed(N)?.cover?.annotations.expressed(de)?.shown??0} exchanges`}$Define(){super.$Define(),this.classes.add(this,"pd-entry-count")}};n(Ai,"$EntryCount");let Ys=Ai;const Ni=class Ni extends O{write(){return J(this.chapter)}$Define(){super.$Define(),this.classes.add(this,"pd-entry-month")}};n(Ni,"$EntryMonth");let Zs=Ni;const Ii=class Ii extends O{write(){}$Define(){super.$Define(),this.classes.add(this,"pd-entry-open")}};n(Ii,"$EntryOpen");let Ks=Ii;const Mi=class Mi extends g{get project(){return this.book}$ProjectHead(...e){this.$Writing(...e),this.containers.replace(this,"span","div")}write(){const e=this.project;if(e===void 0)return;const a=o(j),s=o(w),t=e.coverOf(e.subject?.means?.identifier),i=e.entries,d=i.reduce(($,z)=>$+(z.annotations.expressed(N)?.cover?.annotations.expressed(de)?.shown??0),0),m=i.map(P).filter($=>$!=="").sort(),v=m.length===0?"":`${J(i.find($=>P($)===m[0]))} to ${J(i.find($=>P($)===m[m.length-1]))}`;return c(k,{children:[c("span",{className:"pd-crumbs",children:[t===void 0?void 0:c(a,{children:[r(s,{children:t.mention.identifier}),t.title?.name]}),r("i",{children:"/"}),r(a,{children:e.title?.name})]}),c("span",{className:"pd-report",children:[c("span",{children:[r("b",{children:i.length})," conversations"]}),c("span",{children:[r("b",{children:d})," exchanges"]}),c("span",{children:[r("b",{children:e.files.length})," files"]}),r("span",{children:v})]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-project-head")}};n(Mi,"$ProjectHead");let Xs=Mi;const Ti=class Ti extends g{constructor(){super(...arguments),this.style=x.div`
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
    `}get project(){return this.book}$Knowledge(...e){this.$Writing(...e),this.containers.replace(this,"span",this.style)}write(){const e=this.project;if(e===void 0)return;const a=o(j),s=o(w),t=e.project,i='<svg viewBox="0 0 16 16"><path d="M4 1.5h5.5L13 5v9.5H4z"/><path d="M9.5 1.5V5H13M6 8h4M6 10.5h4"/></svg>';return c(k,{children:[t?.mention===void 0?void 0:c("span",{className:"pd-knowledge-row",children:[c(a,{children:[r(s,{children:t.mention.identifier}),t.title?.name]}),r("span",{className:"pd-at-right",children:"what it is, its instructions"})]}),c("span",{className:"pd-knowledge-row",children:["Files",r("small",{children:e.files.length}),r("span",{className:"pd-at-right",children:"as uploaded"})]}),r("span",{className:"pd-knowledge-files",children:e.files.map((d,m)=>c("span",{className:"pd-knowledge-file",children:[r("span",{className:"pd-drawing",dangerouslySetInnerHTML:{__html:i}}),c(a,{children:[r(s,{children:d.mention.identifier}),d.title?.name]}),r("span",{className:"pd-file-type",children:(d.annotations.find(X)[0]?.$type??"").replace(/^\./u,"")})]},m))})]})}$Define(){super.$Define(),this.classes.add(this,"pd-knowledge")}};n(Ti,"$Knowledge");let Js=Ti;const Hi=class Hi extends xe{paging(){return f`
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
        `}};n(Hi,"$ListLayout");let Se=Hi;const Bi=class Bi extends Se{areas(){return f`
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
        `}};n(Bi,"$ProjectLayout");let Qs=Bi;const Hd=n((p,e)=>{const a=o(Nl),s=o(Il),t=o(Ml),i=o(w);let d="";for(const m of e){const v=J(m),$=m.annotations.expressed(N)?.cover?.mention?.identifier;m.text.add(p,...v!==d?[r(s,{},"month")]:[],r(a,{},"count"),...$===void 0?[]:[r(t,{children:r(i,{children:$})},"open")]),d=v}},"rows"),Wi=class Wi extends Oa{constructor(){super(...arguments),this.specification=new je}get entries(){return this.text.find(y).filter(e=>e.is(U)&&e!==this.synopsis)}get files(){return this.chapters.filter(e=>e.is(A)&&e.is(X))}get project(){return this.chapters.find(e=>e.is(A)&&!e.is(X))}get laidOutChapters(){return[...super.laidOutChapters,...this.entries]}get pages(){const e=[...this.entries].sort((a,s)=>P(s).localeCompare(P(a)));return[...super.pages,...e]}get open(){return this.$bookmark===void 0?void 0:this.chapterAt(this.$bookmark)}write(){const e=o(Hl);return c(k,{children:[super.write(),r("div",{className:"pd-knowledge-column",children:r(e,{chapter:this.cover})})]})}head(){const e=o(this.cover),a=o(Tl),s=o(Al);return c(k,{children:[r(e,{}),r(a,{chapter:this.cover}),r(s,{chapter:this.cover})]})}$Bound(){Hd(this,this.pages.filter(a=>this.entries.includes(a)));const e=this.table?.annotations.expressed(E);e!==void 0&&(e.$folded=!0,e.$counted=!0,e.$dated=!0),super.$Bound()}};n(Wi,"$ProjectManual");let Vs=Wi;const Li=class Li extends Ue{$everyEntryStandsForAConversation(e){const a=e.entries.find(s=>s.annotations.expressed(U)?.means===void 0);l(a===void 0,`every entry of a project manual stands for a conversation, holding its synopsis, and "${a?.title?.name}" stands for none`)}$hasOneProjectChapter(e){l(e.chapters.filter(a=>a.is(A)&&!a.is(X)).length===1,"a project manual has one chapter about the project, which appends no file, and this one has none or more than one")}$onlyAChapterAppends(e){const a=[...e.chapters,...e.entries];l(e.text.find(y).every(s=>a.includes(s)||!s.is(X)),"only an ordinary chapter or an entry files a file, and here a cover, a synopsis or a table of contents files one")}};n(Li,"ProjectManualSpecification");let je=Li;zo([h("every entry of a project manual stands for a conversation, holding its synopsis")],je.prototype,"$everyEntryStandsForAConversation");zo([h("a project manual has one chapter about the project, which appends no file")],je.prototype,"$hasOneProjectChapter");zo([h("an entry of a project manual files a file only when a chapter may")],je.prototype,"$onlyAChapterAppends");const Bd=o(Us),zl=o(Ys),Ol=o(Zs),Wd=o(Ks),Dl=o(Xs),jl=o(Js);o(Se);const Pl=o(Qs),Cl=o(Vs),Al=Bd,Nl=zl,Il=Ol,Ml=Wd,Tl=Dl,Hl=jl;o(Cl,xt)(Pl);const _i=class _i extends Ea{constructor(){super(...arguments),this.sans="'Inter', system-ui, sans-serif",this.mono="ui-monospace, 'Cascadia Code', Consolas, monospace",this.keyword="#1f5fbf",this.string="#9a3b1e",this.type="#116b4a",this.comment="#7a8491"}parts(){return[...super.parts(),this.surfaces(),this.top(),this.rows(),this.openDay(),this.exchanges(),this.said(),this.cards(),this.paneColumn(),this.phone()]}surfaces(){return f`
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
        `}};n(_i,"$ApplicationForm");let Ss=_i;const Bl=o(Ss);var Wl=Object.defineProperty,Ll=Object.getOwnPropertyDescriptor,_l=n((p,e,a,s)=>{for(var t=Ll(e,a),i=p.length-1,d;i>=0;i--)(d=p[i])&&(t=d(e,a,t)||t);return t&&Wl(e,a,t),t},"__decorateClass$4");const Rl='<svg viewBox="0 0 24 24"><path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4M9 12h6M9 16h6"/></svg>',Fl='<svg viewBox="0 0 24 24"><path d="M8 7l-5 5 5 5M16 7l5 5-5 5M13 5l-2 14"/></svg>',te=n(p=>{const e=p.book;return e!==void 0&&"$shown"in e?e:void 0},"showingBook"),Ri=class Ri extends b{constructor(){super(...arguments),this.specification=new Va}defines(e){e.classes.add(this,"pa-version")}erase(e){e.classes.revert(this)}};n(Ri,"$Version");let eo=Ri;const Fi=class Fi extends u{$saidOfAChapter(e){l(e instanceof y,"a version is said of a chapter, and this is not one")}};n(Fi,"VersionSpecification");let Va=Fi;_l([h("a version is said of a chapter")],Va.prototype,"$saidOfAChapter");const Ei=class Ei extends fo{constructor(){super(...arguments),this.$artifact=void 0,this.$place=void 0}get version(){const e=this.$place;if(e!==void 0)return this.book.chapters.find(a=>gd.slug(a.title?.name??"")===e)}get versionName(){return this.version?.title?.name??""}get name(){return this.versionName.replace(/ v\d+(?:-\d+)?$/u,"")||this.$identifier}get number(){return/ v(\d+)(?:-\d+)?$/u.exec(this.versionName)?.[1]??"1"}get kind(){const e=this.$type.replace(/^\./u,"");return e==="md"||e==="txt"||e===""?"document":e==="html"?"page":"code"}get shown(){return te(this)?.$shown===this}$Artifact(...e){this.$Code(...e),this.containers.replace(this,"pre","figure")}write(){const e=[...this.text].map((s,t)=>{const i=o(s);return r(i,{},t)}),a={__html:this.kind==="document"?Rl:Fl};return c(k,{children:[c("button",{type:"button",className:"pd-card","aria-pressed":this.shown,onClick:n(()=>this.press(),"onClick"),children:[r("span",{className:"pd-card-mark",dangerouslySetInnerHTML:a}),c("span",{className:"pd-card-words",children:[r("b",{children:this.name}),r("small",{children:`Click to open ${this.kind} · v${this.number}`})]})]}),r("figcaption",{children:e})]})}press(){const e=te(this);e!==void 0&&(e.$shown=e.$shown===this?void 0:this)}$Define(){super.$Define(),this.classes.add(this,"pd-artifact"),this.shown&&this.classes.add(this,"pa-open")}};n(Ei,"$Artifact");let ea=Ei;const Gi=class Gi extends fo{get sentence(){return D.copy(this.text)}get fileName(){return/“([^”]+)”/u.exec(this.sentence)?.[1]??"a file"}get extension(){return(this.fileName.split(".").pop()??"file").toUpperCase().slice(0,4)}get lineCount(){return this.names?this.contents.split(`
`).length:0}get shown(){return te(this)?.$shown===this}$Attachment(...e){this.$Code(...e),this.containers.replace(this,"pre","figure")}write(){const e=[...this.text].map((a,s)=>{const t=o(a);return r(t,{},s)});return c(k,{children:[c("button",{type:"button",className:"pd-chip","aria-pressed":this.shown,onClick:n(()=>this.press(),"onClick"),children:[r("span",{className:"pd-chip-mark",children:this.extension}),c("span",{className:"pd-chip-words",children:[r("b",{children:this.fileName}),r("small",{children:this.names?`${this.lineCount} lines`:"not carried by the export"})]})]}),r("figcaption",{children:e})]})}press(){const e=te(this);e!==void 0&&(e.$shown=e.$shown===this?void 0:this)}$Define(){super.$Define(),this.classes.add(this,"pd-attachment"),this.shown&&this.classes.add(this,"pa-open")}};n(Gi,"$Attachment");let Sa=Gi;const Dh=o(eo),jh=o(ea),Ph=o(Sa),qi=class qi extends g{constructor(){super(...arguments),this.style=x.div`
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
    `}get shown(){return te(this)?.$shown}get artifacts(){return this.book?.messages.flatMap(e=>e.text.find(ea))??[]}$Pane(...e){this.$Writing(...e),this.containers.replace(this,"span",this.style)}neighbour(e,a){const s=Number(e.number)+a;return this.artifacts.find(t=>t.$artifact===e.$artifact&&Number(t.number)===s)}write(){const e=this.shown;if(e===void 0)return;const a=e instanceof ea?e:void 0,s=e instanceof Sa?e:void 0,t=a?.version,i=t===void 0?void 0:o(t),d=a===void 0?void 0:this.neighbour(a,-1),m=a===void 0?void 0:this.neighbour(a,1),v=s===void 0?"":s.names?s.contents:"The export does not carry this upload; the name is all it kept.";return c(k,{children:[c("div",{className:"pd-pane-bar",children:[r("span",{className:"pd-pane-title",children:a?.name??s?.fileName}),r("span",{className:"pd-pane-kind",children:a?.kind??s?.extension.toLowerCase()}),r("button",{type:"button",className:"pd-pane-copy",onClick:n($=>this.copy($),"onClick"),children:"Copy"}),r("button",{type:"button",className:"pd-pane-close","aria-label":"close",onClick:n(()=>this.close(),"onClick"),children:"×"})]}),r("div",{className:"pd-pane-body",children:i===void 0?r("pre",{children:v}):r(i,{})}),a===void 0?void 0:c("div",{className:"pd-pane-foot",children:[c("span",{className:"pd-pane-version",children:[r("button",{type:"button",disabled:d===void 0,onClick:n(()=>this.show(d),"onClick"),children:"‹"}),r("span",{children:`v${a.number}`}),r("button",{type:"button",disabled:m===void 0,onClick:n(()=>this.show(m),"onClick"),children:"›"})]}),r("button",{type:"button",className:"pd-pane-download",onClick:n(()=>this.download(a),"onClick"),children:"Download"})]})]})}show(e){const a=te(this);a!==void 0&&e!==void 0&&(a.$shown=e)}close(){const e=te(this);e!==void 0&&(e.$shown=void 0)}copy(e){const a=e.currentTarget.closest(".pd-pane")?.querySelector(".pd-pane-body");navigator.clipboard?.writeText(a?.textContent??"")}download(e){const a=e.$type.replace(/^\./u,"")||"md",s=new Blob([e.contents],{type:"text/plain"}),t=document.createElement("a");t.href=URL.createObjectURL(s),t.download=`${e.name} v${e.number}.${a}`,t.click(),URL.revokeObjectURL(t.href)}$Define(){super.$Define(),this.classes.add(this,"pd-pane")}};n(qi,"$Pane");let ao=qi;const El=o(ao);var Gl=Object.defineProperty,ql=Object.getOwnPropertyDescriptor,Ul=n((p,e,a,s)=>{for(var t=ql(e,a),i=p.length-1,d;i>=0;i--)(d=p[i])&&(t=d(e,a,t)||t);return t&&Gl(e,a,t),t},"__decorateClass$3");const Ui=class Ui extends b{constructor(){super(...arguments),this.specification=new et}get name(){return F.reference(D.copy(this.text))?.name??""}get means(){return this.annotations.expressed(se)}$Define(){super.$Define();const e=F.reference(D.copy(this.text));if(e===void 0)return;const a=o(w);this.annotations.add(this,r(a,{children:e.identifier}))}write(){return this.name}};n(Ui,"$Account");let aa=Ui;const Yi=class Yi extends u{$saidOfACover(e){l(e instanceof y&&e.is(I),"an account is said of a cover, and this is not one")}};n(Yi,"AccountSpecification");let et=Yi;Ul([h("an account is said of a cover")],et.prototype,"$saidOfACover");const Zi=class Zi extends g{get cover(){return this.$cover??this.book?.cover}get account(){return this.cover?.annotations.expressed(aa)}write(){const e=this.account,a=o(j),s=o(Ne),t=o(w);return c(k,{children:[c(a,{children:[r(s,{}),"account"]}),c(a,{children:[r(t,{children:e.means.identifier}),e.name]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-account-line")}};n(Zi,"$AccountLine");let to=Zi;const Ch=o(aa),Yl=o(to);var Zl=Object.defineProperty,Kl=Object.getOwnPropertyDescriptor,Xl=n((p,e,a,s)=>{for(var t=Kl(e,a),i=p.length-1,d;i>=0;i--)(d=p[i])&&(t=d(e,a,t)||t);return t&&Zl(e,a,t),t},"__decorateClass$2");const Ki=class Ki extends b{constructor(){super(...arguments),this.specification=new tt}get uuid(){return D.copy(this.text).trim()}write(){return null}};n(Ki,"$Origin");let at=Ki;const Xi=class Xi extends u{$saidOfACoverOrAMessage(e){l(e instanceof y&&e.is(I)||e instanceof Q,"an origin is said of a cover or a message, and this is neither")}};n(Xi,"OriginSpecification");let tt=Xi;Xl([h("an origin is said of a cover or a message")],tt.prototype,"$saidOfACoverOrAMessage");const Ah=o(at);var Jl=Object.defineProperty,Ql=Object.getOwnPropertyDescriptor,Vl=n((p,e,a,s)=>{for(var t=Ql(e,a),i=p.length-1,d;i>=0;i--)(d=p[i])&&(t=d(e,a,t)||t);return t&&Jl(e,a,t),t},"__decorateClass$1");const Ji=class Ji extends b{constructor(){super(...arguments),this.specification=new st}get name(){return F.reference(D.copy(this.text))?.name??""}get means(){return this.annotations.expressed(se)}$Define(){super.$Define();const e=F.reference(D.copy(this.text));if(e===void 0)return;const a=o(w);this.annotations.add(this,r(a,{children:e.identifier}))}write(){return this.name}};n(Ji,"$Project");let Pe=Ji;const Qi=class Qi extends u{$saidOfACover(e){l(e instanceof y&&e.is(I),"a project is said of a cover, and this is not one")}};n(Qi,"ProjectSpecification");let st=Qi;Vl([h("a project is said of a cover")],st.prototype,"$saidOfACover");const Vi=class Vi extends g{get cover(){return this.$cover??this.book?.cover}get project(){return this.cover?.annotations.expressed(Pe)}write(){const e=this.project,a=o(j),s=o(Ne),t=o(w);return c(k,{children:[c(a,{children:[r(s,{}),"project"]}),c(a,{children:[r(t,{children:e.means.identifier}),e.name]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-project-line")}};n(Vi,"$ProjectLine");let so=Vi;const Nh=o(Pe),Sl=o(so),eh=Sl,Si=class Si extends Qa{constructor(){super(...arguments),this.$shown=void 0}get project(){return this.cover?.annotations.expressed(Pe)}get account(){return this.cover?.annotations.expressed(aa)}get origin(){return this.cover?.annotations.expressed(at)?.uuid}write(){const e=o(El);return c(k,{children:[super.write(),r(e,{chapter:this.cover})]})}me(){const e=o(eh),a=o(Yl);return c(k,{children:[super.me(),this.project===void 0?void 0:r(e,{cover:this.cover}),this.account===void 0?void 0:r(a,{cover:this.cover})]})}};n(Si,"$ClaudeConversation");let oo=Si;const Ld=o(oo);o(Ld,le)(Bl);o(Ld,S)(fe);var ah=Object.defineProperty,th=Object.getOwnPropertyDescriptor,ee=n((p,e,a,s)=>{for(var t=s>1?void 0:s?th(e,a):e,i=p.length-1,d;i>=0;i--)(d=p[i])&&(t=(s?d(e,a,t):d(t))||t);return s&&t&&ah(e,a,t),t},"__decorateClass");const ed=class ed extends _{constructor(){super(...arguments),this.specification=new ce}get entries(){return this._entries??(this._entries=this.text.find(y).filter(e=>e.is(U)&&e!==this.synopsis))}get groups(){return[...this.groupsKept().keys()]}get openGroup(){return this.$bookmark===void 0?void 0:this.groups.find(e=>e.mention!==void 0&&this.placeWithin(e.mention.identifier)===this.$bookmark)}get open(){return this.$bookmark===void 0?void 0:this.chapterAt(this.$bookmark)}get laidOutChapters(){return[...super.laidOutChapters,...this.entries]}get pages(){return this._pages??(this._pages=[...this.entries].sort((e,a)=>P(a).localeCompare(P(e))))}get $bookmark(){return super.$bookmark}set $bookmark(e){super.$bookmark=e;const a=this.openGroup;for(const s of this.groups)s.$is=s===a?[]:[ko]}groupsKept(){if(this._groups!==void 0)return this._groups;const e=new Set(this.entries),a=new Map;for(const s of this.table?.text.find(C)??[]){const t=s.text.find(g).map(i=>{const d=H(i)?.identifier;return d===void 0?void 0:this.chapterAt(d)}).filter(i=>i!==void 0&&e.has(i)).sort((i,d)=>P(d).localeCompare(P(i)));t.length>0&&a.set(s,t)}return this._groups=a}entriesOf(e){return this.groupsKept().get(e)??[]}sizeOf(e){return e.annotations.expressed(N)?.cover?.annotations.expressed(de)?.shown??0}projectOf(e){return this.entriesOf(e)[0]?.annotations.expressed(N)?.cover?.annotations.expressed(Pe)}aboveThePages(){if(this.openGroup!==void 0)return;const e=o(rh);return r("div",{className:"pd-parts",children:this.groups.map((a,s)=>r(e,{chapter:this.table,part:a},s))})}head(){const e=o(this.cover),a=o(ih),s=o(Bd);return c(k,{children:[r(e,{}),r(a,{chapter:this.cover}),r(s,{chapter:this.cover})]})}$Bound(){this._chapterByPlace=this.chapterByPlace();const e=this.table?.annotations.expressed(E);e!==void 0&&(e.$folded=!0,e.$counted=!0,e.$dated=!0);const a=o(vo);for(const s of this.table?.text.find(C)??[])s.annotations.add(this,r(a,{}));for(const s of this.groups)Hd(this,this.entriesOf(s));super.$Bound()}};n(ed,"$Register");let Ce=ed;ee([Ae()],Ce.prototype,"_entries",2);ee([Ae()],Ce.prototype,"_groups",2);ee([Ae()],Ce.prototype,"_pages",2);const ad=class ad extends g{get register(){return this.book}$PartCard(...e){this.$Writing(...e),this.containers.replace(this,"span","div")}write(){const e=this.register,a=this.$part;if(e===void 0||a===void 0)return;const s=o(j),t=o(w),i=o(xd),d=o(Wd),m=e.entriesOf(a),v=m[0],$=a.mention===void 0?void 0:e.placeWithin(a.mention.identifier);return c(k,{children:[r(s,{children:r("span",{className:"pd-part-name",children:a.canonical?.name})}),c("span",{className:"pd-part-count",children:[m.length," ",m.length===1?"conversation":"conversations"]}),v===void 0?void 0:c("span",{className:"pd-part-latest",children:[r("span",{children:v.title?.name}),r(i,{entry:v})]}),$===void 0?void 0:r(d,{children:r(t,{children:$})})]})}$Define(){super.$Define(),this.classes.add(this,"pd-part-card")}};n(ad,"$PartCard");let no=ad;const td=class td extends g{get register(){return this.book}$RegisterHead(...e){this.$Writing(...e),this.containers.replace(this,"span","div")}write(){const e=this.register;if(e===void 0)return;const a=o(j),s=o(w),t=e.coverOf(e.subject?.means?.identifier),i=e.openGroup,d=i===void 0?e.entries:e.entriesOf(i),m=d.reduce((T,ae)=>T+e.sizeOf(ae),0),v=d.map(P).filter(T=>T!=="").sort(),$=v.length===0?"":`${J(d.find(T=>P(T)===v[0]))} to ${J(d.find(T=>P(T)===v[v.length-1]))}`,z=i===void 0?void 0:e.projectOf(i);return c(k,{children:[c("span",{className:"pd-crumbs",children:[t===void 0?void 0:c(a,{children:[r(s,{children:t.mention.identifier}),t.title?.name]}),r("i",{children:"/"}),i===void 0?r(a,{children:e.title?.name}):c(k,{children:[c(a,{children:[r(s,{children:e.means.identifier}),e.title?.name]}),r("i",{children:"/"}),r(a,{children:i.canonical?.name})]})]}),i===void 0?void 0:r("span",{className:"pd-part-title",children:i.canonical?.name}),c("span",{className:"pd-report",children:[c("span",{children:[r("b",{children:d.length})," conversations"]}),i===void 0?c("span",{children:[r("b",{children:e.groups.length})," parts"]}):void 0,c("span",{children:[r("b",{children:m.toLocaleString("en-US")})," exchanges"]}),r("span",{children:$}),z?.means===void 0?void 0:c(a,{children:[r(s,{children:z.means.identifier}),"the project's page"]})]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-register-head")}};n(td,"$RegisterHead");let ro=td;const sd=class sd extends Se{constructor(){super(...arguments),this.shown=[]}defines(e){super.defines(e);const a=this.book,s=a.openGroup;s!==void 0&&e.classes.add(this,"pa-part-open");const t=s===void 0?[]:a.entriesOf(s);for(const i of this.shown)t.includes(i)||i.classes.revert(e);for(const i of t)[...i.classes].includes("pa-open")||i.classes.add(e,"pa-open");this.shown=t}paging(){return f`
            .pd-book.pa-turned .pa-page:not(.pa-open) { display: none; }
            .pd-book:not(.pa-turned) .pd-pages .pd-chapter.pa-page.pa-volume:not(.pa-open) { display: none; }
        `}areas(){return f`
            ${super.areas()}
            .pd-book .pd-head .pd-register-head { display: contents; }
            .pd-book.pa-part-open .pd-head .pd-chapter.pa-cover > a { display: none; }
            .pd-book .pd-head .pd-part-title { order: 2; grid-column: 1 / -1; margin: 0; font-family: ${({theme:e})=>e.serif}; font-size: calc(2.1429 * ${({theme:e})=>e.size}); font-weight: 600; line-height: 1.1; letter-spacing: -0.01em; color: ${({theme:e})=>e.heading}; }
            .pd-book .pd-head .pd-report .pd-word.pa-reference { color: ${({theme:e})=>e.accent}; text-decoration: none; }
            ${this.cards()}
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
        `}};n(sd,"$RegisterLayout");let ot=sd;ee([Ae()],ot.prototype,"shown",2);const od=class od extends W{$everyEntryStandsForABook(e){const a=e.entries.find(s=>s.annotations.expressed(U)?.means===void 0);l(a===void 0,`every entry of a register stands for a book, holding its synopsis, and "${a?.title?.name}" stands for none`)}$everyEntryIsDated(e){const a=e.entries.find(s=>!s.is(L));l(a===void 0,`every entry of a register is dated, and "${a?.title?.name}" is not`)}$everyEntryIsListedUnderAPart(e){const a=new Set(e.groups.flatMap(t=>e.entriesOf(t))),s=e.entries.find(t=>!a.has(t));l(s===void 0,`every entry of a register is listed under a part of its table, and "${s?.title?.name}" is under none`)}$onlyAChapterAppends(e){const a=[...e.chapters,...e.entries];l(e.text.find(y).every(s=>a.includes(s)||!s.is(X)),"only an ordinary chapter or an entry files a file, and here a cover, a synopsis or a table of contents files one")}};n(od,"RegisterSpecification");let ce=od;ee([h("every entry of a register stands for a book, holding its synopsis")],ce.prototype,"$everyEntryStandsForABook",1);ee([h("every entry of a register is dated")],ce.prototype,"$everyEntryIsDated",1);ee([h("every entry of a register is listed under a part of its table")],ce.prototype,"$everyEntryIsListedUnderAPart",1);ee([h("only an ordinary chapter or an entry files a file")],ce.prototype,"$onlyAChapterAppends",1);const Oo=o(Ce),sh=o(no),oh=o(ro),nh=o(ot),rh=sh,ih=oh;o(Oo,le)(Pd);o(Oo,S)(fe);o(Oo,xt)(nh);const nd=class nd extends g{$Define(){super.$Define(),this.classes.add(this,"pd-action")}};n(nd,"$Action");let io=nd;const rd=class rd extends g{$Define(){super.$Define(),this.classes.add(this,"pd-result")}};n(rd,"$Result");let po=rd;const Ih=o(io);o(po);const _d=n(()=>c(ct,{children:[r(zd,{}),r(vt,{ground:"#eef5f6",band:"#c3e3e6",bandInk:"#1c565c",foot:"#8db9bd",footInk:"#153e43",ink:"#1f5a60"}),r(yt,{x:"-46",y:"-13"}),r(lt,{children:"[Dougs Library](/dougs-library/)"}),r(ht,{children:"[Doug](/dougs-story/)"}),r(ft,{children:"[Library](/dougs-library/)"}),r(gt,{children:"[The Library](/dougs-library/)"}),c(bt,{children:[r(kt,{}),r(ut,{children:`<svg viewBox="0 0 64 64" class="pd-illustration"><path class="light" d="M9 7h46v50H9z"/><path d="M9 7h46v50H9zM9 24h46M9 41h46"/><path class="fill" d="M13 11h5v13h-5zM20 9h4v15h-4zM26 13h6v11h-6zM34 10h4v14h-4zM40 14h6v10h-6z"/><path d="M48 24l4-12 3 1-4 11z"/><path class="fill" d="M13 28h4v13h-4zM19 30h7v11h-7zM28 27h4v14h-4zM34 31h5v10h-5zM41 28h6v13h-6zM49 29h3v12h-3z"/><path class="fill" d="M13 46h6v11h-6zM21 44h4v13h-4zM27 47h8v10h-8zM37 45h4v12h-4zM43 48h6v9h-6z"/><path d="M50 57l3-11 3 1-3 10z"/></svg>
`})]})]}),"SubjectCover$2"),Rd=n(()=>c(ct,{children:[r(Td,{}),r(tp,{}),r(Ge,{children:_d()}),r(vt,{ground:"#f5eedf",band:"#d9c3a3",bandInk:"#4a3626",foot:"#a3b6cc",footInk:"#2a4262",ink:"#2f4a6a"}),r(yt,{x:"-54",y:"-33"}),r(lt,{children:"[Dougs Story](/dougs-story/)"}),r(ht,{children:"[Doug](/dougs-story/)"}),r(ft,{children:"[Library](/dougs-library/)"}),r(gt,{children:"[The Librarian](/dougs-story/)"}),c(bt,{children:[r(kt,{}),r(ut,{children:`<svg viewBox="0 0 64 64" class="pd-illustration"><path class="light" d="M8 13h23v38H8zM33 13h23v38H33z"/><path d="M8 13h23v38H8zM33 13h23v38H33z"/><path d="M13 21h13M13 27h13M13 33h9M38 21h13M38 27h13M38 33h13M38 39h8"/><path class="fill" d="M15 55 45 25l4 4-30 30-6 2z"/><path d="M15 55 45 25l4 4-30 30-6 2zM43 27l4 4M17 53l2 2"/></svg>
`})]})]}),"StoryCover"),dh=n(()=>c(ct,{children:[r(zd,{}),r(Ge,{children:_d()}),r(Ge,{children:Rd()}),r(vt,{ground:"#eff1f6",band:"#c0c9df",bandInk:"#2a3a63",foot:"#8e9fc8",footInk:"#1f2d50",ink:"#2a3a63"}),r(yt,{x:"-36",y:"-26"}),r(lt,{children:"[Dougs Claude](/dougs-claude/)"}),r(ht,{children:"[Doug](/dougs-story/)"}),r(ft,{children:"[Library](/dougs-library/)"}),r(gt,{children:"[Claude](/dougs-claude/)"}),c(bt,{children:[r(kt,{}),r(ut,{children:`<svg viewBox="0 0 64 64" class="pd-illustration"><path class="light" d="M8 30h48v27H8z"/><path d="M8 30h48v27H8zM8 44h48"/><path class="fill" d="M12 33h5v9h-5zM19 31h4v11h-4zM25 34h7v8h-7zM34 32h4v10h-4zM40 35h8v7h-8z"/><path class="fill" d="M12 47h6v8h-6zM20 48h4v7h-4zM26 46h9v9h-9zM37 49h5v6h-5zM44 47h7v8h-7z"/><path class="light" d="M28 6h28v16H40l-6 5v-5h-6z"/><path d="M28 6h28v16H40l-6 5v-5h-6z"/><path d="M33 11h18M33 16h12"/></svg>
`})]})]}),"SubjectCover$1"),Mh=n(()=>c(ct,{children:[r(Td,{}),r(Ge,{children:dh()}),r(Ge,{children:Rd()}),r(vt,{ground:"#eef5f6",band:"#b6dde2",bandInk:"#1c565c",foot:"#7fb7bd",footInk:"#153e43",ink:"#1f5a60"}),r(yt,{x:"-30",y:"-22"}),r(lt,{children:"[Our Conversations](/our-conversations/)"}),r(ht,{children:"[Doug](/dougs-story/)"}),r(ft,{children:"[Claude](/dougs-claude/)"}),r(gt,{children:"[Conversations](/our-conversations/)"}),c(bt,{children:[r(kt,{}),r(ut,{children:`<svg viewBox="0 0 64 64" class="pd-illustration"><path class="light" d="M6 9h34v20H18l-6 6v-6H6z"/><path d="M6 9h34v20H18l-6 6v-6H6z"/><path d="M11 15h24M11 21h16"/><path class="fill" d="M24 31h34v20H52v6l-6-6H24z"/><path d="M24 31h34v20H52v6l-6-6H24z"/><path class="light" d="M29 37h24M29 43h16"/></svg>
`})]})]}),"SubjectCover");export{oo as $,Ch as A,zd as B,Oh as C,gh as D,kt as I,zh as M,Ah as O,kh as P,yh as Q,Mh as S,Ge as V,yt as W,Rd as a,vt as b,$h as c,wh as d,bh as e,vh as f,mh as g,Ph as h,xh as i,Nh as j,Ih as k,uh as l,jh as m,Dh as n,nl as o};
