var Ld=Object.defineProperty;var s=(c,e)=>Ld(c,"name",{value:e,configurable:!0});import{jsxs as d,Fragment as w,jsx as t}from"react/jsx-runtime";import{$ as o,selection as z,$check as l,inert as sd}from"@dna-platform/chemistry";import{$Theme as Bd,specify as h,$Annotation as u,$Paragraph as g,$Author as po,Word as O,Reference as C,$Subject as rd,$Topic as id,AnnotationSpecification as m,$Word as P,$Format as V,html as D,$Chapter as x,binder as G,$Svg as lt,Code as Hd,$Section as W,$Append as ee,$Content as td,$TableOfContents as oe,$Parenthetical as Sd,$Composition as Ed,$Image as co,$Reference as pe,$Cover as L,$Synopsis as Q,CoverSpecification as Fd,$Paginated as qd,Self as xt,$Book as _d,reflection as Ud,BookSpecification as Gd,Theme as me,$Date as lo,$Referent as ht,$SelfReference as dd,$Writing as Zd,$Heading as pd,$Means as Vd,Referent as Yd,identifier as cd,SectionSpecification as Qd,$Code as ho,highlighting as Xd,Chapter as M,Title as I,Author as ft,Subject as gt,About as fo,Paragraph as b,Svg as ut,Autobiography as Jd,Synopsis as Kd,Parenthetical as zt,Means as v,TableOfContents as ep,Section as j,Heading as A,Content as F,Append as q}from"@dna-platform/public";import{css as f}from"styled-components";const Co=class Co extends Bd{constructor(){super(...arguments),this.font="'Inter', system-ui, sans-serif",this.prose="'Inter', system-ui, sans-serif",this.mono="'JetBrains Mono', ui-monospace, monospace",this.size="0.875rem",this.leading="1.6",this.measure="44rem",this.spreadColumn="15.5rem",this.space="1.5rem",this.holdsColumn="240px",this.barHeight="50px",this.beat="320ms",this.narrow="48rem",this.phoneWidth="390px",this.colour="#4e9eb9",this.accent="#166178",this.bar="#0c1b1f",this.barInk="#ffffff",this.barDim="#a9bcc1",this.barOn="rgba(255, 255, 255, 0.11)",this.barLine="#1d3339",this.mark="#c8f4fb",this.side="#e3f5fa",this.sideInk="#10252c",this.sideDim="#516770",this.sideOn="#ffffff",this.sideLine="#cbe6ee",this.night="#0c1b1f",this.deep="#14323c",this.blue="#166178",this.sea="#4e9eb9",this.sky="#8fc8dc",this.opal="#c8f4fb",this.pale="#e3f5fa",this.mist="#f1f7f9",this.white="#ffffff",this.ink="#10252c",this.soft="#516770",this.line="#dbe7ec",this.me="#e8590c",this.wash="linear-gradient(105deg, #e2f6fb 0%, #ecf0fd 52%, #fae9f4 100%)",this.serif="'Source Serif 4', Georgia, serif",this.between="'Source Sans 3', 'Inter', system-ui, sans-serif",this.bookPaper="#fbf9f3",this.bookInk="#29251d",this.heading="#10252c",this.capital="#166178",this.lit="#166178",this.faint="#8792a2",this.paper="#ffffff",this.panel="#f1f7f9",this.rule="#dbe7ec",this.edge="transparent",this.tint="#e3f5fa",this.dusk="#14323c",this.glow="#cfe6e3",this.dim="#4f7672",this.keyword="#8ad7ff",this.string="#ffd48a",this.type="#9be3d6",this.comment="#5f8a86",this.haze="#a9bcc1",this.glass="rgba(255, 255, 255, 0.62)",this.binding="linear-gradient(160deg, #16303a, #0c1b1f)",this.spine="inset 5px 0 0 rgba(0, 0, 0, 0.14), inset 6px 0 0 rgba(255, 255, 255, 0.12), 0 10px 20px -10px rgba(0, 0, 0, 0.45)",this.shadow="0 0.75rem 1.4rem -0.9rem rgba(12, 27, 31, 0.55)",this.volume="11.5rem",this.cover="8.25rem",this.card="18rem",this.barLight="#ffffff",this.barMid="#f1f7f9",this.barDeep="#e3f5fa",this.barShadow="none",this.sideLight="#ffffff",this.sideDeep="#e3f5fa",this.codeGround="#f1f7f9",this.hairline="1px",this.stroke="2px",this.rise="-1px",this.gloss="none",this.ring="0 0 0 2px #c8f4fb",this.decisionShadow="none",this.photo="7rem",this.radius="0.375rem",this.barTint="#ffffff",this.skyInk="#166178",this.lift="inset 5px 0 0 rgba(0, 0, 0, 0.14), inset 6px 0 0 rgba(255, 255, 255, 0.12), 0 14px 24px -12px rgba(0, 0, 0, 0.5)",this.openSpine="inset 7px 0 0 rgba(0, 0, 0, 0.14), inset 8px 0 0 rgba(255, 255, 255, 0.12), 0 12px 22px -14px rgba(0, 0, 0, 0.5)",this.sans="'Inter', system-ui, sans-serif",this.muted="#516770",this.bubble="rgba(16, 37, 44, 0.05)",this.shade="rgba(16, 37, 44, 0.03)",this.pill="#166178",this.column="48rem",this.style=z.div`${this.parts()}`}parts(){return[this.page(),this.writing(),this.links(),this.figures(),this.listings(),this.switches(),this.turns(),this.illustrations(),this.marks(),this.library(),this.head(),this.holds(),this.context(),this.tones()]}page(){return f`
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
        `}};s(Co,"$LibraryBookTheme");let ce=Co;const ap=o(ce);var tp=Object.defineProperty,np=Object.getOwnPropertyDescriptor,op=s((c,e,a,r)=>{for(var n=np(e,a),i=c.length-1,p;i>=0;i--)(p=c[i])&&(n=p(e,a,n)||n);return n&&tp(e,a,n),n},"__decorateClass$s");const jo=class jo extends u{constructor(){super(...arguments),this.specification=new ca}defines(e){e.classes.add(this,"pa-label")}erase(e){e.classes.revert(this)}};s(jo,"$Label");let Ct=jo;const Ao=class Ao extends m{$saidOfAWord(e){l(e instanceof P,"label is said of a word, and this is not one")}};s(Ao,"LabelSpecification");let ca=Ao;op([h("label is said of a word")],ca.prototype,"$saidOfAWord");const Ie=o(Ct),Oo=class Oo extends g{get cover(){return this.$cover??this.book?.cover}write(){const e=this.cover.annotations.expressed(po),a=o(O),r=o(Ie),n=o(C);return d(w,{children:[d(a,{children:[t(r,{}),"by"]}),d(a,{children:[t(n,{children:e.means.identifier}),e.name]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-byline")}};s(Oo,"$Byline");let jt=Oo;const Po=class Po extends g{get cover(){return this.$cover??this.book?.cover}write(){const e=this.cover.annotations.expressed(rd),a=o(O),r=o(Ie),n=o(C);return d(w,{children:[d(a,{children:[t(r,{}),"subject"]}),d(a,{children:[t(n,{children:e.means.identifier}),e.name]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-subject-line")}};s(Po,"$SubjectLine");let At=Po;const Do=class Do extends g{get cover(){return this.$cover??this.book?.cover}get topics(){return this.cover?.annotations.find(id)??[]}write(){const e=o(O),a=o(Ie),r=o(C);return d(w,{children:[d(e,{children:[t(a,{}),"topic"]}),this.topics.map((n,i)=>d(e,{children:[t(r,{children:n.means.identifier}),n.name]},i))]})}$Define(){super.$Define(),this.classes.add(this,"pd-topic-line")}};s(Do,"$TopicLine");let Ot=Do;const ld=o(jt),sp=o(At),rp=o(Ot);var ip=Object.defineProperty,dp=Object.getOwnPropertyDescriptor,pp=s((c,e,a,r)=>{for(var n=dp(e,a),i=c.length-1,p;i>=0;i--)(p=c[i])&&(n=p(e,a,n)||n);return n&&ip(e,a,n),n},"__decorateClass$r");const To=class To extends m{$saidOfABook(e){l(e instanceof Z,"this is said of a book of this library, and here it is said of something else")}};s(To,"OfABookSpecification");let E=To;pp([h("this is said of a book of this library")],E.prototype,"$saidOfABook");const No=class No extends P{get on(){return[this.book.$is].flat().includes(this.$annotation)}$Switch(...e){this.$Writing(...e),this.containers.replace(this,"span","button")}container(e){return super.container({type:"button","aria-pressed":this.on,onClick:s(()=>this.press(),"onClick"),...e})}press(){const e=this.book,a=[e.$is].flat();e.$is=this.on?a.filter(r=>r!==this.$annotation):[this.$annotation,...a]}$Define(){super.$Define(),this.classes.add(this,"pd-switch")}};s(No,"$Switch");let We=No;const Mo=class Mo extends We{press(){const e=this.book,a=[e.$is].flat().filter(r=>!this.$family.includes(r));e.$is=[this.$annotation,...a]}};s(Mo,"$Tab");let Le=Mo;const mt=o(We),cp=o(Le);var lp=Object.defineProperty,hp=Object.getOwnPropertyDescriptor,hd=s((c,e,a,r)=>{for(var n=hp(e,a),i=c.length-1,p;i>=0;i--)(p=c[i])&&(n=p(e,a,n)||n);return n&&lp(e,a,n),n},"__decorateClass$q");const Io=class Io extends V{constructor(){super(...arguments),this.specification=new Be,this.style=z.div`
        .pa-coloured { --colour: ${e=>e.$colour}; }
    `}get colour(){return D.copy(this.text).trim()}$Coloured(...e){this.$Format(...e);const a=this.style;this._painted=r=>t(a,{$colour:this.colour,...r})}defines(e){e.classes.add(this,"pa-coloured"),e.containers.add(this,this._painted)}erase(e){e.classes.revert(this),e.containers.revert(this)}};s(Io,"$Coloured");let le=Io;const Ro=class Ro extends m{$saidOfAChapterOrAParagraph(e){l(e instanceof x||e instanceof g,"coloured is said of a chapter or a paragraph, and this is neither")}$givenItsColour(e){l(/^#[0-9a-f]{6}$/iu.test(e.annotations.expressed(le)?.colour??""),"coloured is given its colour as six hex digits, and this one was given something else")}};s(Ro,"ColouredSpecification");let Be=Ro;hd([h("coloured is said of a chapter or a paragraph")],Be.prototype,"$saidOfAChapterOrAParagraph");hd([h("coloured is given its colour")],Be.prototype,"$givenItsColour");o(le);var fp=Object.defineProperty,gp=Object.getOwnPropertyDescriptor,go=s((c,e,a,r)=>{for(var n=gp(e,a),i=c.length-1,p;i>=0;i--)(p=c[i])&&(n=p(e,a,n)||n);return n&&fp(e,a,n),n},"__decorateClass$p");const Wo=class Wo extends V{constructor(){super(...arguments),this.specification=new ye}get identifier(){return G.reference(D.copy(this.text))?.identifier??""}get name(){return G.reference(D.copy(this.text))?.name??""}get entry(){return this.book?.chapterAt(this.identifier)}get drawing(){const e=this.entry?.text.find(g).flatMap(a=>a.text.find(lt))[0];return e===void 0?"":D.copy(e.text).trim()}get colour(){return this.entry?.annotations.expressed(le)?.colour??""}$Keyed(...e){this.$Format(...e);const a=o(up);this._layer=r=>d("div",{...r,children:[t(a,{keyed:this}),r.children]})}defines(e){e.classes.add(this,"pa-keyed"),e.containers.add(this,this._layer)}erase(e){e.classes.revert(this),e.containers.revert(this)}};s(Wo,"$Keyed");let K=Wo;const Lo=class Lo extends P{constructor(){super(...arguments),this.style=z.span`
        --colour: ${e=>e.$colour};
    `}$Icon(...e){this.$Writing(...e);const a=this.style;this._painted=r=>t(a,{$colour:this.$keyed?.colour??"",...r}),this.containers.replace(this,"span",this._painted)}write(){return t("span",{className:"pd-drawing",role:"img","aria-label":this.$keyed?.name,dangerouslySetInnerHTML:{__html:this.$keyed?.drawing??""}})}$Define(){super.$Define(),this.classes.add(this,"pd-icon")}};s(Lo,"$Icon");let Pt=Lo;const Bo=class Bo extends m{$saidOfAChapter(e){l(e instanceof x,"keyed is said of a chapter, and this is not one")}$namesAnEntry(e){const a=e.annotations.expressed(K)?.entry;l(a!==void 0&&a.annotations.expressed(K)?.entry===a,"keyed names an entry of the key, a chapter of this book keyed as itself, and this one names something else")}$entryHoldsItsDrawingAndColour(e){const a=e.annotations.expressed(K)?.entry;a!==void 0&&l(a.text.find(g).flatMap(r=>r.text.find(lt)).length===1&&a.is(le),"an entry of the key holds one drawing and its colour, and this one holds something else")}};s(Bo,"KeyedSpecification");let ye=Bo;go([h("keyed is said of a chapter")],ye.prototype,"$saidOfAChapter");go([h("keyed names an entry of the key")],ye.prototype,"$namesAnEntry");go([h("an entry of the key holds one drawing and its colour")],ye.prototype,"$entryHoldsItsDrawingAndColour");o(K);const fd=o(Pt),up=fd;var mp=Object.defineProperty,bp=Object.getOwnPropertyDescriptor,$p=s((c,e,a,r)=>{for(var n=bp(e,a),i=c.length-1,p;i>=0;i--)(p=c[i])&&(n=p(e,a,n)||n);return n&&mp(e,a,n),n},"__decorateClass$o");const kp={tsx:"typescript",ts:"typescript",mjs:"javascript",js:"javascript",css:"css",html:"xml",svg:"xml",json:"json",md:"markdown"},wp='<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"><path d="M6 4.5 3.5 8 6 11.5M10 4.5 12.5 8 10 11.5"/></svg>',Re=s(c=>`${c.$identifier}${c.$type}`,"fileNameOf"),yp=s(c=>c===void 0?[]:D.copy(c.text).split(`
`),"fileLinesOf"),gd=s(c=>c?.chapter?.annotations.expressed(N),"spreadOf"),Ho=class Ho extends g{constructor(){super(...arguments),this.$family=[]}get name(){return this.$file===void 0?"":Re(this.$file)}get language(){return kp[(this.$file?.$type??"").replace(/^\./u,"")]??""}get spread(){return gd(this.$file)}get chapter(){return this.$file?.chapter??super.chapter}$FileListing(...e){this.$Writing(...e),this.containers.replace(this,"span","div")}container(e){return super.container({onClick:s(()=>this.press(),"onClick"),...e})}press(){if(this.$filePanelState===void 0)return;const e=this.book,a=[e.$is].flat().filter(r=>!this.$family.includes(r));e.$is=[this.$filePanelState,...a]}write(){const e=o(O),a=o(Hd);return d(w,{children:[t(e,{children:this.name}),t(a,{identifier:this.$file?.$identifier,type:this.$file?.$type,language:this.language,numbered:!0})]})}$Define(){super.$Define(),this.classes.add(this,"pd-file-listing");const e=o(zp);this.annotations.add(this,t(e,{}))}};s(Ho,"$FileListing");let la=Ho;const So=class So extends u{constructor(){super(...arguments),this.specification=new ha}defines(e){const a=e;a.$file!==void 0&&a.spread?.openFile===a.$file&&e.classes.add(this,"pa-open")}erase(e){e.classes.revert(this)}};s(So,"$OpenListing");let Dt=So;const Eo=class Eo extends m{$isAFileListing(e){l(e instanceof la,"an open listing is a file listing, and this is not one")}};s(Eo,"OpenListingSpecification");let ha=Eo;$p([h("an open listing is a file listing")],ha.prototype,"$isAFileListing");const Fo=class Fo extends Le{constructor(){super(...arguments),this.$skeleton=!1,this.style=z.button`
        --colour: ${e=>e.$colour};
    `}get on(){const e=this.$file?.chapter;return e!==void 0&&e===this.book.open&&this.spread?.openFile===this.$file}get name(){return this.$file===void 0?"":Re(this.$file)}get spread(){return gd(this.$file)}get colour(){return this.$file?.chapter?.annotations.expressed(K)?.colour??""}get lines(){return yp(this.$file)}get chapter(){return this.$file?.chapter??super.chapter}$FileTab(...e){this.$Switch(...e),this.containers.replace(this,"button",this.style)}container(e){return super.container({$colour:this.colour,...e})}press(){const e=this.spread;e!==void 0&&(e.$openFile=this.$file),this.$annotation!==void 0&&super.press()}write(){return d(w,{children:[t("span",{className:"pd-drawing",dangerouslySetInnerHTML:{__html:wp}}),t("span",{className:"pd-tab-name",children:this.name}),this.$skeleton?t("span",{className:"pd-skeleton",children:this.lines.slice(0,14).map((e,a)=>t("i",{style:{width:`${Math.max(12,Math.min(100,e.length*2.2))}%`}},a))}):void 0]})}$Define(){super.$Define(),this.classes.add(this,"pd-file-tab")}};s(Fo,"$FileTab");let Tt=Fo;const vp=o(la),xp=o(Dt),uo=o(Tt),zp=xp;var Cp=Object.defineProperty,jp=Object.getOwnPropertyDescriptor,Ap=s((c,e,a,r)=>{for(var n=jp(e,a),i=c.length-1,p;i>=0;i--)(p=c[i])&&(n=p(e,a,n)||n);return n&&Cp(e,a,n),n},"__decorateClass$n");const dt=class dt extends u{constructor(){super(...arguments),this.specification=new E}defines(e){for(const a of e.annotations.after(this))a instanceof dt&&e.annotations.express(a,!1);e.classes.add(this,"pa-file-panel-state")}erase(e){e.classes.revert(this)}};s(dt,"$FilePanelState");let ve=dt;const qo=class qo extends ve{defines(e){super.defines(e),e.classes.add(this,"pa-code-forward")}};s(qo,"$CodeForward");let Nt=qo;const _o=class _o extends ve{defines(e){super.defines(e),e.classes.add(this,"pa-words-forward")}};s(_o,"$WordsForward");let Mt=_o;const Uo=class Uo extends ve{defines(e){super.defines(e),e.classes.add(this,"pa-split")}};s(Uo,"$Split");let It=Uo;const Go=class Go extends u{constructor(){super(...arguments),this.specification=new E}defines(e){e.classes.add(this,"pa-light-code")}erase(e){e.classes.revert(this)}};s(Go,"$LightCode");let Rt=Go;const Zo=class Zo extends u{constructor(){super(...arguments),this.specification=new E}defines(e){e.classes.add(this,"pa-wrapped-code")}erase(e){e.classes.revert(this)}};s(Zo,"$WrappedCode");let Wt=Zo;const Vo=class Vo extends u{constructor(){super(...arguments),this.specification=new E}defines(e){e.classes.add(this,"pa-numbered-code")}erase(e){e.classes.revert(this)}};s(Vo,"$NumberedCode");let Lt=Vo;const Yo=class Yo extends u{constructor(){super(...arguments),this.specification=new ga}defines(e){e.classes.add(this,"pa-brief")}erase(e){e.classes.revert(this)}};s(Yo,"$Brief");let fa=Yo;const Qo=class Qo extends m{$saidOfAParagraph(e){l(e instanceof g,"brief is said of a paragraph, and this is not one")}};s(Qo,"BriefSpecification");let ga=Qo;Ap([h("brief is said of a paragraph")],ga.prototype,"$saidOfAParagraph");o(ve);const mo=o(Nt),bo=o(Mt),He=o(It),Op=o(Rt),Pp=o(Wt),ud=o(Lt),se=o(fa),Xo=class Xo extends g{constructor(){super(...arguments),this.style=z.div`
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
    `}get spread(){return this.chapter?.annotations.expressed(N)}$FileRail(...e){this.$Writing(...e),this.containers.replace(this,"span",this.style)}write(){const e=o(uo),a=this.spread;if(a!==void 0)return a.files.map(r=>t(e,{file:r,annotation:He,family:a.filePanelStates,skeleton:!0},Re(r)))}$Define(){super.$Define(),this.classes.add(this,"pd-file-rail")}};s(Xo,"$FileRail");let Bt=Xo;const Jo=class Jo extends Le{constructor(){super(...arguments),this.style=z.button`
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
    `}get paragraphs(){return(this.chapter?.text.find(W)??[]).flatMap(e=>e.text.find(g)).slice(0,16).map(e=>D.copy(e.text))}$FilePanelGrip(...e){this.$Switch(...e),this.containers.replace(this,"button",this.style)}write(){return t("span",{className:"pd-skeleton",children:this.paragraphs.map((e,a)=>t("i",{style:{width:`${Math.max(25,Math.min(100,e.length/4))}%`}},a))})}$Define(){super.$Define(),this.classes.add(this,"pd-file-panel-grip")}};s(Jo,"$FilePanelGrip");let Ht=Jo;const Dp=o(Bt),Tp=o(Ht),Ko=class Ko extends g{constructor(){super(...arguments),this.style=z.div`
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
    `}get spread(){return this.chapter?.annotations.expressed(N)}$FilePanel(...e){this.$Writing(...e),this.containers.replace(this,"span",this.style)}write(){const e=o(Ip),a=o(vp),r=this.spread;if(r!==void 0)return d(w,{children:[t(e,{chapter:this.chapter}),t("div",{className:"pd-file-listings",children:r.files.map(n=>t(a,{file:n,filePanelState:mo,family:r.filePanelStates},Re(n)))})]})}$Define(){super.$Define(),this.classes.add(this,"pd-file-panel")}};s(Ko,"$FilePanel");let St=Ko;const es=class es extends g{constructor(){super(...arguments),this.style=z.div`
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
    `}get spread(){return this.chapter?.annotations.expressed(N)}$FilePanelBar(...e){this.$Writing(...e),this.containers.replace(this,"span",this.style)}write(){const e=o(uo),a=o(cp),r=o(mt),n=this.spread,i=this.chapter;if(n!==void 0)return d(w,{children:[n.files.map(p=>t(e,{file:p},Re(p))),t("span",{className:"pd-words-only",children:t(a,{chapter:i,annotation:bo,family:n.filePanelStates,children:"words"})}),t("span",{className:"pd-dock pd-to-full",children:t(a,{chapter:i,annotation:mo,family:n.filePanelStates,children:"full screen"})}),t("span",{className:"pd-dock pd-to-split",children:t(a,{chapter:i,annotation:He,family:n.filePanelStates,children:"split"})}),d("span",{className:"pd-options",children:[t(r,{chapter:i,annotation:Op,children:"light"}),t(r,{chapter:i,annotation:Pp,children:"wrap"}),t(r,{chapter:i,annotation:ud,children:"lines"})]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-file-panel-bar")}};s(es,"$FilePanelBar");let Et=es;const Np=o(St),Mp=o(Et),Ip=Mp;var Rp=Object.defineProperty,Wp=Object.getOwnPropertyDescriptor,Lp=s((c,e,a,r)=>{for(var n=Wp(e,a),i=c.length-1,p;i>=0;i--)(p=c[i])&&(n=p(e,a,n)||n);return n&&Rp(e,a,n),n},"__decorateClass$m");const as=class as extends V{constructor(){super(...arguments),this.specification=new ua,this.$openFile=void 0,this.grid=z.div`
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
    `}get files(){return this.parent.annotations.find(ee).reverse()}get openFile(){return this.$openFile??this.files[0]}get filePanelStates(){return[bo,He,mo]}$Spread(...e){this.$Format(...e);const a=this.grid,r=o(Np),n=o(Dp),i=o(Tp);this.style=({className:p,children:$})=>{const k=this.parent,y=[...k.classes].includes("pa-open");return d(a,{className:`${p??""}${y?" pa-open":""}`.trim(),children:[t("div",{className:"pd-words",children:$}),y?d(w,{children:[t(r,{chapter:k}),t(n,{chapter:k}),t(i,{chapter:k,annotation:He,family:this.filePanelStates})]}):void 0]})}}defines(e){super.defines(e),e.classes.add(this,"pa-spread")}erase(e){super.erase(e),e.classes.revert(this)}};s(as,"$Spread");let N=as;const ts=class ts extends m{$isAChapter(e){l(e instanceof x,"a spread is a chapter read beside its files, and this is not a chapter")}};s(ts,"SpreadSpecification");let ua=ts;Lp([h("a spread is a chapter read beside its files")],ua.prototype,"$isAChapter");const re=o(N);var Bp=Object.defineProperty,Hp=Object.getOwnPropertyDescriptor,ia=s((c,e,a,r)=>{for(var n=Hp(e,a),i=c.length-1,p;i>=0;i--)(p=c[i])&&(n=p(e,a,n)||n);return n&&Bp(e,a,n),n},"__decorateClass$l");const md='<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3.5 10.5 8 6 12.5"/></svg>',Sp='<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linejoin="round" stroke-linecap="round"><rect class="ground" x="0.75" y="0.75" width="14.5" height="14.5"/><path d="M3.5 5.5h3l1.5 1.5h4.5v5h-9z"/></svg>',ns=class ns extends V{constructor(){super(...arguments),this.specification=new $a,this.style=z.div`
        ${e=>e.$schemeDeclarations===void 0?"":`.pa-entry { ${e.$schemeDeclarations} }`}
    `}get place(){return B(this.parent).identifier}get referencedChapter(){return this.book.chapterAt(this.place)}get cover(){return this.referencedChapter?.annotations.expressed(S)?.cover??this.book.coverOf(this.place)}get schemeDeclarations(){const e=this.cover?.annotations.expressed(X);if(e!==void 0)return e.declarations;const a=this.referencedChapter?.annotations.expressed(le)?.colour;return a===void 0?void 0:`--colour: ${a};`}$Entry(...e){this.$Format(...e);const a=this.style;this._painted=r=>t(a,{$schemeDeclarations:this.schemeDeclarations,...r})}defines(e){e.classes.add(this,"pa-entry"),e.containers.add(this,this._painted),(this.place===this.book?.$bookmark||this.place===this.book.open?.mention?.identifier)&&e.classes.add(this,"pa-open")}erase(e){e.classes.revert(this),e.containers.revert(this)}};s(ns,"$Entry");let he=ns;const os=class os extends u{constructor(){super(...arguments),this.specification=new ba}defines(e){e.classes.add(this,"pa-appendix")}erase(e){e.classes.revert(this)}};s(os,"$Appendix");let Se=os;const ss=class ss extends u{constructor(){super(...arguments),this.specification=new ma}get entries(){return this.chapter.text.find(W).flatMap(a=>a.text.find(g)).filter(a=>!a.is(Sd)&&B(a)!==void 0)}$Bound(){const e=o(_p),a=o(wd),r=o(uo),n=this.book;for(const i of this.entries){i.annotations.add(this,t(e,{}));const p=n.chapterAt(B(i).identifier)?.annotations.expressed(N);if(p===void 0)continue;const $=p.files;i.text.add(this,t(a,{foldedWriting:$.length===0?void 0:i,annotation:kd}),...$.map(k=>t(r,{file:k,annotation:He,family:p.filePanelStates},Re(k))))}super.$Bound()}};s(ss,"$Index");let ae=ss;const rs=class rs extends m{$isATableOfContents(e){l(e.is(oe),"an index is a table of contents, and this chapter is not one")}};s(rs,"IndexSpecification");let ma=rs;ia([h("an index is a table of contents")],ma.prototype,"$isATableOfContents");const is=class is extends m{$isASectionOfTheTable(e){l(e instanceof W&&e.chapter?.is(oe)===!0,"the appendix is a section of the table of contents, and this is not one")}};s(is,"AppendixSpecification");let ba=is;ia([h("the appendix is a section of the table of contents")],ba.prototype,"$isASectionOfTheTable");const ds=class ds extends m{$isARowThatLeadsSomewhere(e){l(e instanceof g&&B(e)!==void 0,"an entry is a row that leads somewhere, and this is not one")}};s(ds,"EntrySpecification");let $a=ds;ia([h("an entry is a row that leads somewhere")],$a.prototype,"$isARowThatLeadsSomewhere");const ps=class ps extends u{constructor(){super(...arguments),this.specification=new wa}defines(e){e.classes.add(this,"pa-folded")}erase(e){e.classes.revert(this)}};s(ps,"$Folded");let Ft=ps;const cs=class cs extends We{get on(){return this.$foldedWriting!==void 0&&[this.$foldedWriting.$is].flat().includes(this.$annotation)}container(e){return super.container({...e,disabled:this.$foldedWriting===void 0,onClick:s(a=>{a.preventDefault(),this.press()},"onClick")})}press(){const e=this.$foldedWriting;if(e===void 0)return;const a=[e.$is].flat();e.$is=this.on?a.filter(r=>r!==this.$annotation):[this.$annotation,...a]}write(){return t("span",{className:"pd-drawing",dangerouslySetInnerHTML:{__html:md}})}$Define(){super.$Define(),this.classes.add(this,"pd-fold-chevron")}};s(cs,"$FoldChevron");let qt=cs;const ls=class ls extends V{constructor(){super(...arguments),this.specification=new ya,this.tree=z.div`
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
    `}get section(){return this.parent}get firstPlace(){return this.section.text.find(g).map(e=>B(e)).find(e=>e!==void 0)?.identifier}get part(){const e=this.firstPlace;return e===void 0?void 0:this.book.chapterAt(e)?.part}get open(){const e=this.book.open;return e!==void 0&&e.part?.name===this.part?.name}$TreeFolder(...e){this.$Format(...e);const a=this.tree,r=o(wd),n=o(O),i=o(C);this.style=({className:p,children:$})=>{const k=this.firstPlace,y=[...this.section.classes].includes("pa-open"),T=t("span",{className:"pd-drawing pd-tree-folder-mark",dangerouslySetInnerHTML:{__html:Sp}});return d(a,{className:`${p??""} pd-tree-folder${y?" pa-open":""}`.trim(),children:[t(r,{foldedWriting:this.section,annotation:kd}),k===void 0?T:d(n,{children:[t(i,{children:k}),T]}),$]})}}defines(e){super.defines(e),e.classes.add(this,"pa-tree-folder"),this.open&&e.classes.add(this,"pa-open")}erase(e){super.erase(e),e.classes.revert(this)}};s(ls,"$TreeFolder");let ka=ls;const hs=class hs extends m{$saidOfASectionOrAnEntry(e){l(e instanceof W&&e.chapter?.is(oe)===!0||e.is(he),"folded is said of a section of a table of contents or of an entry, and this is neither")}};s(hs,"FoldedSpecification");let wa=hs;ia([h("folded is said of a section of a table of contents or of an entry")],wa.prototype,"$saidOfASectionOrAnEntry");const fs=class fs extends m{$isASectionOfTheTable(e){l(e instanceof W&&e.chapter?.is(oe)===!0,"a tree folder is a section of the table of contents, and this is not one")}};s(fs,"TreeFolderSpecification");let ya=fs;ia([h("a tree folder is a section of the table of contents")],ya.prototype,"$isASectionOfTheTable");const gs=class gs extends g{get cover(){return this.$cover??this.book?.cover}write(){const e=this.cover,a=o(O),r=o(C);return d(a,{children:[t(r,{children:e.mention.identifier}),t("span",{className:"pd-drawing",dangerouslySetInnerHTML:{__html:md}}),e.title.name]})}$Define(){super.$Define(),this.classes.add(this,"pd-tree-root")}};s(gs,"$TreeRoot");let _t=gs;const B=s(c=>c.annotations.expressed(td)??c.text.find(P).map(e=>e.annotations.expressed(td)).find(e=>e!==void 0),"contentOf"),bd=o(he),Ep=o(ae);o(Se);const $o=o(Ft),Fp=o(qt),$d=o(ka),qp=o(_t),_p=bd,kd=$o,wd=Fp;var Up=Object.defineProperty,Gp=Object.getOwnPropertyDescriptor,be=s((c,e,a,r)=>{for(var n=Gp(e,a),i=c.length-1,p;i>=0;i--)(p=c[i])&&(n=p(e,a,n)||n);return n&&Up(e,a,n),n},"__decorateClass$k");const bt=s((c,e)=>{const a=new Set(c.text.find(e));return c.text.find(Ed).flatMap(r=>[...a.has(r)?[r]:[],...bt(r,e)])},"within"),us=class us extends u{constructor(){super(...arguments),this.specification=new fe}get identifier(){return G.reference(D.copy(this.text))?.identifier??""}get name(){return G.reference(D.copy(this.text))?.name??""}get cover(){const e=this.identifier;return this.chapter?.annotations.find(S).map(a=>a.cover).find(a=>a?.mention?.identifier===e)}defines(e){e.classes.add(this,"pa-design")}erase(e){e.classes.revert(this)}};s(us,"$Design");let H=us;const ms=class ms extends u{constructor(){super(...arguments),this.specification=new va}defines(e){e.classes.add(this,"pa-exhibit")}erase(e){e.classes.revert(this)}};s(ms,"$Exhibit");let Ee=ms;const bs=class bs extends u{constructor(){super(...arguments),this.specification=new xa,this.$number=0,this.span=z.span.attrs({className:"pd-plate"})``}note(){const e=this.span;return d(w,{children:[t(e,{children:String(this.$number).padStart(2,"0")}),t("span",{className:"pd-jacket-mini"})]})}defines(e){e.classes.add(this,"pa-plate")}erase(e){e.classes.revert(this)}};s(bs,"$Plate");let Ut=bs;const $s=class $s extends V{constructor(){super(...arguments),this.specification=new za,this.themeProvider=!0,this.room=z.div`
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
    `}get chapter(){return this.parent}get design(){return this.chapter.annotations.expressed(H)}get plate(){return this.book.chapters.filter(e=>e.is(H)).indexOf(this.chapter)+1}$Room(...e){this.$Format(...e);const a=this.room;this.style=({className:r,children:n})=>{const i=[...this.chapter.classes].includes("pa-open");return we(this.design?.cover,d(a,{className:`${r??""} pd-room${i?" pa-open":""}`.trim(),children:[t("span",{className:"pd-plate",children:String(this.plate).padStart(2,"0")}),n]}))}}defines(e){super.defines(e),e.classes.add(this,"pa-room")}erase(e){super.erase(e),e.classes.revert(this)}};s($s,"$Room");let Gt=$s;const ks=class ks extends g{get references(){const e=this.book?.means?.identifier??"",a=new Map;for(const r of bt(this.chapter,P)){if(r.parent===this)continue;const n=r.annotations.expressed(pe)?.identifier;if(n===void 0||n.startsWith(e)||a.has(n))continue;const i=D.copy(r.text);a.set(n,G.reference(i)?.name??i.trim())}return[...a]}write(){const e=o(O),a=o(C);return this.references.map(([r,n],i)=>d(e,{children:[t(a,{children:r}),n,t("span",{className:"pd-where",children:r.replace(/^\/dougs-/u,"").replace(/\/#?/u," · ").replace(/ · $/u,"").replace(/-/gu," ")})]},i))}$Define(){super.$Define(),this.classes.add(this,"pd-built-in")}};s(ks,"$BuiltIn");let Zt=ks;const ws=class ws extends m{$isAChapter(e){l(e instanceof x,"a design is a chapter, and this is not one")}$namesABook(e){l((e.annotations.expressed(H)?.identifier??"")!=="","a design names the book it is of, and this one names nothing")}$holdsTheCover(e){l(e.annotations.expressed(H)?.cover!==void 0,"a design holds the cover of the book it is of, as a volume, and this one holds none")}$showsItselfAsBuilt(e){l(e instanceof x&&bt(e,g).some(a=>a.is(Ee)),"a design shows itself as built, in a paragraph said to be the exhibit, and this one shows nothing")}};s(ws,"DesignSpecification");let fe=ws;be([h("a design is a chapter")],fe.prototype,"$isAChapter");be([h("a design names the book it is of")],fe.prototype,"$namesABook");be([h("a design holds the cover of the book it is of")],fe.prototype,"$holdsTheCover");be([h("a design shows itself as built")],fe.prototype,"$showsItselfAsBuilt");const ys=class ys extends m{$isAParagraphOfADesignHoldingOneImage(e){l(e instanceof g&&e.chapter?.is(H)===!0&&e.text.find(co).length===1,"an exhibit is a paragraph of a design that holds one image, and this is not one")}};s(ys,"ExhibitSpecification");let va=ys;be([h("an exhibit is a paragraph of a design that holds one image")],va.prototype,"$isAParagraphOfADesignHoldingOneImage");const vs=class vs extends m{$saidOfAnEntryLeadingToADesign(e){l(e.is(he)&&e.annotations.expressed(he)?.referencedChapter?.is(H)===!0,"a plate is said of an entry that leads to a design, and this is not one")}};s(vs,"PlateSpecification");let xa=vs;be([h("a plate is said of an entry that leads to a design")],xa.prototype,"$saidOfAnEntryLeadingToADesign");const xs=class xs extends m{$isADesign(e){l(e instanceof x&&e.is(H),"a room is a chapter that is a design, and this is not one")}};s(xs,"RoomSpecification");let za=xs;be([h("a room is a chapter that is a design")],za.prototype,"$isADesign");o(H);o(Ee);const Zp=o(Ut),Vp=o(Gt),Yp=o(Zt);var Qp=Object.defineProperty,Xp=Object.getOwnPropertyDescriptor,U=s((c,e,a,r)=>{for(var n=Xp(e,a),i=c.length-1,p;i>=0;i--)(p=c[i])&&(n=p(e,a,n)||n);return n&&Qp(e,a,n),n},"__decorateClass$j");const we=s((c,e,a)=>{const r=c?.annotations.expressed(X)?.painted;return r===void 0?e:t(r,{children:e},a)},"painted"),zs=class zs extends L{constructor(){super(...arguments),this.specification=new Ce}get name(){return this.chapter?.title?.name??""}get author(){return this.chapter?.annotations.expressed(po)?.name??""}get illustration(){return this.chapter?.text.find(g).find(e=>e.is(Fe))}get drawing(){const e=this.illustration?.text.find(lt)[0];return e===void 0?"":D.copy(e.text).trim()}get scheme(){return this.chapter?.annotations.expressed(X)}get window(){return this.chapter?.annotations.expressed(ze)}};s(zs,"$BookshelfCover");let xe=zs;const Cs=class Cs extends u{constructor(){super(...arguments),this.specification=new Aa}defines(e){e.classes.add(this,"pa-illustration")}erase(e){e.classes.revert(this)}};s(Cs,"$Illustration");let Fe=Cs;const js=class js extends V{constructor(){super(...arguments),this.specification=new qe,this.$ground="",this.$band="",this.$bandInk="",this.$foot="",this.$footInk="",this.$ink="",this.style=z.div.attrs({className:"pd-scheme"})`
        ${e=>e.$scheme}
    `}get colours(){return[this.$ground,this.$band,this.$bandInk,this.$foot,this.$footInk,this.$ink]}get declarations(){return`--ground: ${this.$ground}; --band: ${this.$band}; --band-ink: ${this.$bandInk}; --foot: ${this.$foot}; --foot-ink: ${this.$footInk}; --ink: ${this.$ink};`}get painted(){return this._painted}$Scheme(...e){this.$Format(...e);const a=this.style;this._painted=r=>t(a,{$scheme:this.declarations,...r})}defines(e){e.classes.add(this,"pa-scheme"),e.containers.add(this,this._painted)}erase(e){e.classes.revert(this),e.containers.revert(this)}};s(js,"$Scheme");let X=js;const As=class As extends u{constructor(){super(...arguments),this.specification=new _e,this.$x="",this.$y=""}get declarations(){return`--window-x: ${this.$x}px; --window-y: ${this.$y}px;`}};s(As,"$Window");let ze=As;const Os=class Os extends u{constructor(){super(...arguments),this.specification=new Ue}get cover(){return this._cover}get jacket(){return this._cover?.annotations.expressed(L)}$Volume(...e){this._cover=e.find(a=>a instanceof x),this.$Annotation(...e.filter(a=>a!==this._cover))}defines(e){e.classes.add(this,"pa-volume")}erase(e){e.classes.revert(this)}};s(Os,"$Volume");let S=Os;const Ps=class Ps extends g{get cover(){return this.$cover?.annotations.expressed(L)}$Jacket(...e){this.$Writing(...e),this._painted=a=>{const r=this.cover?.scheme?.painted;return r===void 0?t("div",{...a}):t(r,{...a})},this.containers.add(this,this._painted)}write(){const e=this.cover;if(e===void 0)return;const a=o(O),r=o(Ie);return d(w,{children:[t(a,{children:e.name}),t("span",{className:"pd-drawing",dangerouslySetInnerHTML:{__html:e.drawing}}),d(a,{children:[t(r,{}),e.author]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-jacket")}};s(Ps,"$Jacket");let Vt=Ps;const Ds=class Ds extends g{constructor(){super(...arguments),this.unfolded=!1}get filedElsewhere(){return this.$subject!==void 0&&this.$subject!==this.$cover}container(e){return super.container({onMouseOver:s(a=>{a.target instanceof Element&&a.target.closest(".pd-filed")!==null&&this.unfold()},"onMouseOver"),onMouseLeave:s(()=>this.fold(),"onMouseLeave"),...e})}unfold(){this.unfolded=!0}fold(){this.unfolded=!1}write(){const e=this.$cover,a=this.$subject;if(e!==void 0)return d(w,{children:[this.filedElsewhere?we(a,t("span",{className:"pd-filed",children:this.mark(a)})):void 0,we(e,t("span",{className:"pd-own",children:this.mark(e)})),d("span",{className:"pd-names",children:[we(e,t("span",{className:"pd-name",children:this.name(e)})),this.filedElsewhere?we(a,t("span",{className:"pd-name pd-under",children:this.name(a)})):void 0]})]})}mark(e){const a=o(ac),r=o(C);return t(a,{cover:e,children:t(r,{children:e.mention.identifier})})}name(e){const a=o(O),r=o(C);return d(a,{children:[t(r,{children:e.mention.identifier}),e.title.name]})}$Define(){super.$Define(),this.classes.add(this,"pd-logo");const e=o(tc);this.annotations.add(this,t(e,{}))}};s(Ds,"$Logo");let Ca=Ds;const Ts=class Ts extends u{constructor(){super(...arguments),this.specification=new ja}defines(e){e.unfolded&&e.classes.add(this,"pa-unfolded")}erase(e){e.classes.revert(this)}};s(Ts,"$Unfolded");let Yt=Ts;const Ns=class Ns extends m{$saidOfALogo(e){l(e instanceof Ca,"unfolded is said of a logo, and this is not one")}};s(Ns,"UnfoldedSpecification");let ja=Ns;U([h("unfolded is said of a logo")],ja.prototype,"$saidOfALogo");const Ms=class Ms extends P{constructor(){super(...arguments),this.style=z.span`
        ${e=>e.$vars}
    `}get cover(){return this.$cover?.annotations.expressed(L)}$Mark(...e){this.$Writing(...e);const a=this.style;this._painted=r=>t(a,{$vars:`${this.cover?.scheme?.declarations??""} ${this.cover?.window?.declarations??""}`,...r}),this.containers.add(this,this._painted)}write(){return t("span",{className:"pd-drawing",dangerouslySetInnerHTML:{__html:this.cover?.drawing??""}})}$Define(){super.$Define(),this.classes.add(this,"pd-mark")}};s(Ms,"$Mark");let Qt=Ms;const Is=class Is extends Fd{$carriesItsScheme(e){l(e.is(X),"a bookshelf cover carries its scheme, and this one carries none")}$carriesItsWindow(e){l(e.is(ze),"a bookshelf cover carries its window, and this one carries none")}$carriesItsIllustration(e){l(e instanceof x&&e.text.find(g).some(a=>a.is(Fe)),"a bookshelf cover carries its illustration, and this one carries none")}};s(Is,"BookshelfCoverSpecification");let Ce=Is;U([h("a bookshelf cover carries its scheme")],Ce.prototype,"$carriesItsScheme");U([h("a bookshelf cover carries its window")],Ce.prototype,"$carriesItsWindow");U([h("a bookshelf cover carries its illustration")],Ce.prototype,"$carriesItsIllustration");const Rs=class Rs extends m{$saidOfADrawing(e){l(e instanceof g&&e.chapter?.is(L)===!0&&e.text.find(lt).length===1,"an illustration is a paragraph of a cover that holds one drawing, and this is not one")}};s(Rs,"IllustrationSpecification");let Aa=Rs;U([h("an illustration is a paragraph of a cover that holds one drawing")],Aa.prototype,"$saidOfADrawing");const Ws=class Ws extends m{$isACover(e){l(e instanceof x&&e.is(L),"a cover has a scheme, and this is not a cover")}$givenItsColours(e){const a=e.annotations.expressed(X)?.colours??[];l(a.every(r=>/^#[0-9a-f]{6}$/iu.test(r)),"a scheme is given its six colours as six hex digits each — the ground, the band and its ink, the foot and its ink, and the ink of the drawing — and this one was given something else")}};s(Ws,"SchemeSpecification");let qe=Ws;U([h("a cover has a scheme")],qe.prototype,"$isACover");U([h("a scheme is given its six colours")],qe.prototype,"$givenItsColours");const Ls=class Ls extends m{$isACover(e){l(e instanceof x&&e.is(L),"a cover has a window, and this is not a cover")}$givenItsPlace(e){const a=e.annotations.expressed(ze);l(/^-?\d+$/u.test(a?.$x??"")&&/^-?\d+$/u.test(a?.$y??""),"a window is given where it stands on the drawing, two whole numbers, and this one was given something else")}};s(Ls,"WindowSpecification");let _e=Ls;U([h("a cover has a window")],_e.prototype,"$isACover");U([h("a window is given where it stands on the drawing")],_e.prototype,"$givenItsPlace");const Bs=class Bs extends m{$saidOfAChapterStandingForABook(e){l(e instanceof x&&(e.is(Q)||e.is(L)||e.is(H)),"a volume is a chapter that stands for another book, a synopsis of it, a cover filed under it or a design of it, and this is none")}$holdsTheCover(e){const a=[e.annotations.expressed(Q)?.means?.identifier,e.annotations.expressed(rd)?.means?.identifier,e.annotations.expressed(po)?.means?.identifier,e.annotations.expressed(H)?.identifier];l(e.annotations.find(S).every(r=>r.cover?.is(L)===!0&&a.includes(r.cover.mention?.identifier)),"a volume holds the cover of a book its chapter stands for, the book a synopsis or a design is of or the subject or author a cover is filed under, and one here holds something else")}};s(Bs,"VolumeSpecification");let Ue=Bs;U([h("a volume is a chapter that stands for another book")],Ue.prototype,"$saidOfAChapterStandingForABook");U([h("a volume holds the cover of a book its chapter stands for")],Ue.prototype,"$holdsTheCover");const yd=o(xe),$t=o(Fe),kt=o(X),wt=o(ze),Ge=o(S),Jp=o(Vt),Kp=o(Ca),ec=o(Yt),vd=o(Qt),ac=vd,tc=ec,pt=class pt extends qd{constructor(){super(...arguments),this.specification=new E,this.themeProvider=!0,this.style=z.div`
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
    `}get pages(){return this.book.pages}get open(){const e=this.book;return e.open??e.synopsis}$Bound(){const e=this.style,a=this.book;this.style=r=>t(e,{$at:a.means?.identifier,$scheme:a.cover?.annotations.expressed(X)?.declarations,...r}),super.$Bound()}defines(e){for(const r of e.annotations.after(this))r instanceof pt&&e.annotations.express(r,!1);super.defines(e),e.classes.add(this,"pa-layout");const a=this.book.open;a!==void 0&&e.classes.add(this,"pa-turned"),a?.is(N)&&e.classes.add(this,"pa-manual")}erase(e){super.erase(e),e.classes.revert(this)}parts(){return[this.paging(),this.regions(),this.areas(),this.phone()]}paging(){return f`
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
        `}};s(pt,"$Layout");let Ze=pt;const yt=o(Ze),ct=class ct extends u{constructor(){super(...arguments),this.specification=new E}defines(e){for(const a of e.annotations.after(this))a instanceof ct&&e.annotations.express(a,!1);e.classes.add(this,"pa-tone")}erase(e){e.classes.revert(this)}};s(ct,"$Tone");let je=ct;const Hs=class Hs extends je{defines(e){super.defines(e),e.classes.add(this,"pa-dark")}};s(Hs,"$Dark");let Xt=Hs;const Ss=class Ss extends je{defines(e){super.defines(e),e.classes.add(this,"pa-light")}};s(Ss,"$Light");let Jt=Ss;const Es=class Es extends je{defines(e){super.defines(e),e.classes.add(this,"pa-white-over-black")}};s(Es,"$WhiteOverBlack");let Kt=Es;const ie=o(je),xd=o(Xt),$e=o(Jt),nc=o(Kt);var oc=Object.defineProperty,sc=Object.getOwnPropertyDescriptor,rc=s((c,e,a,r)=>{for(var n=sc(e,a),i=c.length-1,p;i>=0;i--)(p=c[i])&&(n=p(e,a,n)||n);return n&&oc(e,a,n),n},"__decorateClass$i");const Fs=class Fs extends P{write(){const e=this.book.body;return`${e.indexOf(this.chapter)+1} of ${e.length}`}$Define(){super.$Define(),this.classes.add(this,"pd-count")}};s(Fs,"$Count");let en=Fs;const qs=class qs extends u{constructor(){super(...arguments),this.specification=new Ve}defines(e){e.classes.add(this,"pa-before")}erase(e){e.classes.revert(this)}};s(qs,"$Before");let an=qs;const _s=class _s extends u{constructor(){super(...arguments),this.specification=new Ve}defines(e){e.classes.add(this,"pa-after")}erase(e){e.classes.revert(this)}};s(_s,"$After");let tn=_s;const Us=class Us extends m{$saidOfAWordOfATurn(e){l(e instanceof P&&e.parent instanceof Oa,"this is said of a word of a turn, and here it is said of something else")}};s(Us,"OfATurnSpecification");let Ve=Us;rc([h("this is said of a word of a turn")],Ve.prototype,"$saidOfAWordOfATurn");const ic=o(en),dc=o(an),pc=o(tn),Gs=class Gs extends g{get before(){const e=this.book.body;return e[e.indexOf(this.chapter)-1]??this.chapter}get after(){const e=this.book.body;return e[e.indexOf(this.chapter)+1]??this.chapter}write(){const e=o(O),a=o(ic),r=o(dc),n=o(pc),i=o(this.before===this.chapter?xt:C),p=o(this.after===this.chapter?xt:C);return d(w,{children:[d(e,{children:[t(r,{}),t(i,{children:this.before.mention.identifier}),"← ",this.before.title.name]}),t(a,{}),d(e,{children:[t(n,{}),t(p,{children:this.after.mention.identifier}),this.after.title.name," →"]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-turn")}};s(Gs,"$Turn");let Oa=Gs;const cc=o(Oa);var lc=Object.defineProperty,hc=Object.getOwnPropertyDescriptor,da=s((c,e,a,r)=>{for(var n=r>1?void 0:r?hc(e,a):e,i=c.length-1,p;i>=0;i--)(p=c[i])&&(n=(r?p(e,a,n):p(n))||n);return r&&n&&lc(e,a,n),n},"__decorateClass$h");const Zs=class Zs extends _d{constructor(){super(...arguments),this.specification=new _}get chapters(){return this.text.find(x).filter(e=>[...e.classes].includes("pd-canonical"))}get laidOutChapters(){return[this.cover,this.synopsis,this.table,...this.chapters]}get pages(){return[this.synopsis,...this.chapters].filter(e=>e!==void 0)}get body(){const e=this.appendix;return this.chapters.filter(a=>!e.includes(a))}get appendix(){const e=this.table;if(e===void 0)return[];const a=e.text.find(W).filter(r=>r.is(Se)).flatMap(r=>r.text.find(g).map(n=>B(n)?.identifier));return this.chapters.filter(r=>a.includes(r.mention?.identifier??""))}get open(){return this.$bookmark===void 0?void 0:this.chapterAt(this.$bookmark)}get tones(){return[xd,$e,nc]}get topics(){return this.cover?.annotations.find(id)??[]}write(){return d(w,{children:[t("div",{className:"pd-library",children:this.library()}),t("div",{className:"pd-me",children:this.me()}),t("div",{className:"pd-holds",children:this.holds()}),t("div",{className:"pd-head",children:this.head()}),d("div",{className:"pd-pages",children:[this.aboveThePages(),this.pages.map((e,a)=>{const r=o(e);return t(r,{},a)}),this.belowThePages()]})]})}library(){if(this._logo===void 0)return;const e=o(this._logo);return t(e,{})}me(){const e=o(vd),a=o(C),r=o(rp),n=this.coverOf(this.author?.means?.identifier);return d(w,{children:[this.byline(),n===void 0?void 0:this.painted(n,t(e,{cover:n,children:t(a,{children:n.mention.identifier})})),this.topics.length===0?void 0:t(r,{cover:this.cover})]})}painted(e,a,r){return we(e,a,r)}holds(){const e=o(this.table);return t(e,{})}head(){const e=o(this.cover);return d(w,{children:[t(e,{}),t("div",{className:"pd-switches",children:this.switches()})]})}aboveThePages(){}belowThePages(){}chapterAt(e){return(this._chapterByPlace??this.chapterByPlace()).get(e)}chapterByPlace(){const e=new Map;for(const a of this.chapters)for(const r of this.sections(a))r.mention!==void 0&&!e.has(r.mention.identifier)&&e.set(r.mention.identifier,a);for(const a of this.chapters)a.mention!==void 0&&e.set(a.mention.identifier,a);return e}coverOf(e){if(e!==void 0)return this.means?.identifier===e?this.cover:this.cover?.annotations.find(S).map(a=>a.cover).find(a=>a?.mention?.identifier===e)}byline(){const e=o(ld);return t(e,{chapter:this.cover})}root(){const e=o(qp);return t(e,{cover:this.cover})}switches(){}sections(e){return e.text.find(W).flatMap(a=>[a,...this.sections(a)])}sectionOf(e){const a=this.table;return a===void 0?void 0:this.sections(a).find(r=>r.canonical?.name===e.name)}turn(){this.bookmark!==this.cover&&super.turn()}$Define(){super.$Define();const e=o(yt),a=o(ie);this.annotations.add(this,t(e,{}),t(a,{}))}$Bound(){this._chapterByPlace=this.chapterByPlace();const e=o($d),a=this.table?.annotations.expressed(oe);for(const i of a?.parts??[]){const p=this.sectionOf(i);p===void 0||p.is(ka)||!i.chapters.some($=>$.is(N))||p.annotations.add(this,t(e,{}))}const r=this.root();r!==void 0&&this.table?.text.add(this,r);const n=o(Kp);this._logo=Ud.chemical(t(n,{cover:this.cover,subject:this.coverOf(this.subject?.means?.identifier)}),this),this.turns(),super.$Bound()}turns(){const e=o(cc);for(const a of this.body)a.text.add(this,t(e,{}))}};s(Zs,"$LibraryBook");let Z=Zs;da([sd()],Z.prototype,"_chapterByPlace",2);const Vs=class Vs extends Gd{$holdsOnlyChapters(e){l([...e.text].every(a=>a instanceof x),"a book of this library holds only chapters, and this one holds something else")}$placesEveryChapter(e){l(e.text.find(x).every(a=>e.laidOutChapters.includes(a)),"a book of this library has a place for every chapter it holds, and this one holds a chapter it places nowhere")}$onlyAChapterAppends(e){l(e.text.find(x).every(a=>e.chapters.includes(a)||!a.is(ee)),"only an ordinary chapter files a file, and here a cover, a synopsis or a table of contents files one")}$listsEachManualPart(e){const r=(e.table?.annotations.expressed(oe)?.parts??[]).find(n=>n.chapters.some(i=>i.is(N))&&e.sectionOf(n)===void 0);l(r===void 0,`a part read as a manual is listed under a section headed with its name, and "${r?.name}" has none`)}};s(Vs,"LibraryBookSpecification");let _=Vs;da([h("a book of this library holds only chapters")],_.prototype,"$holdsOnlyChapters",1);da([h("a book of this library has a place for every chapter it holds")],_.prototype,"$placesEveryChapter",1);da([h("only an ordinary chapter files a file")],_.prototype,"$onlyAChapterAppends",1);da([h("a part read as a manual is listed under a section headed with its name")],_.prototype,"$listsEachManualPart",1);const zd=o(Z);o(zd,me)(ap);o(zd,ie)(xd);var fc=Object.defineProperty,gc=Object.getOwnPropertyDescriptor,uc=s((c,e,a,r)=>{for(var n=gc(e,a),i=c.length-1,p;i>=0;i--)(p=c[i])&&(n=p(e,a,n)||n);return n&&fc(e,a,n),n},"__decorateClass$g");const Ys=class Ys extends Z{constructor(){super(...arguments),this.specification=new Qe}get open(){return super.open??this.body[0]}head(){}switches(){}root(){}$Define(){super.$Define(),this.$is=[bo,ud]}$Bound(){const e=o($d);for(const a of this.table?.text.find(W)??[])a.annotations.add(this,t(e,{})),a.is(Se)&&(a.$is=[$o]);super.$Bound()}};s(Ys,"$Manual");let Ye=Ys;const Qs=class Qs extends _{$everyChapterHasABrief(e){l(e.chapters.every(a=>a.text.find(g).some(r=>r.is(fa))),"every chapter of a manual opens with a brief, and one here has none")}};s(Qs,"ManualSpecification");let Qe=Qs;uc([h("every chapter of a manual opens with a brief")],Qe.prototype,"$everyChapterHasABrief");const ko=o(Ye);o(ko,ie)($e);var mc=Object.defineProperty,bc=Object.getOwnPropertyDescriptor,wo=s((c,e,a,r)=>{for(var n=bc(e,a),i=c.length-1,p;i>=0;i--)(p=c[i])&&(n=p(e,a,n)||n);return n&&mc(e,a,n),n},"__decorateClass$f");const Xs=class Xs extends u{constructor(){super(...arguments),this.specification=new Ae}get date(){return this.text.find(lo)[0]}defines(e){e.classes.add(this,"pa-dated")}erase(e){e.classes.revert(this)}note(){const e=o(this.date);return t(e,{})}};s(Xs,"$Dated");let te=Xs;const Js=class Js extends m{$saidOfAChapter(e){l(e instanceof x,"dated is said of a chapter, and this is not one")}$datedOnce(e){l(e.annotations.containsOne(te),"a chapter is dated once, and this one is dated more than once")}$givenOneDate(e){l(e.annotations.expressed(te)?.text.find(lo).length===1,"a dated chapter is given one date, and this one is given none or more than one")}};s(Js,"DatedSpecification");let Ae=Js;wo([h("dated is said of a chapter")],Ae.prototype,"$saidOfAChapter");wo([h("a chapter is dated once")],Ae.prototype,"$datedOnce");wo([h("a dated chapter is given one date")],Ae.prototype,"$givenOneDate");o(te);const Ks=class Ks extends he{constructor(){super(...arguments),this.label=z.span.attrs({className:"pa-number"})``}get number(){return this.book.body.indexOf(this.referencedChapter)+1}get keyed(){return this.referencedChapter?.annotations.expressed(K)}note(){const e=this.label,a=o(fd),r=this.keyed;return d(w,{children:[super.note(),r===void 0?void 0:t(a,{keyed:r}),this.number===0?void 0:t(e,{children:String(this.number)})]})}};s(Ks,"$NumberedEntry");let nn=Ks;const $c=o(nn);o(ko,bd)($c);const er=class er extends xe{constructor(){super(...arguments),this.style=z.header`
        .pd-chapter.pa-cover { margin-block: 0; }
        .pa-cover .pd-title {
            font-size: calc(1.04 * ${({theme:e})=>e.size});
            font-weight: 600;
        }
    `}};s(er,"$ManualCover");let on=er;const ar=class ar extends oe{constructor(){super(...arguments),this.style=z.nav`
        .pa-table-of-contents .pa-reference { color: inherit; text-decoration: none; }
    `}};s(ar,"$ManualTableOfContents");let sn=ar;const kc=o(on);o(sn);const tr=class tr extends ce{constructor(){super(...arguments),this.measure="104ch",this.holdsColumn="272px",this.barHeight="52px",this.space="24px",this.size="14px",this.beat="0.22s",this.serif="'Source Serif 4', Georgia, serif",this.paper="#fdfcfa",this.ink="#343c4a",this.heading="#1a1f36",this.soft="#727d8c",this.faint="#9ea8b5",this.line="#e4e9f2",this.tint="#f0f4fc",this.barTint="#f8fafe",this.side="#f7f8fb",this.sideInk="#3a4452",this.sideDim="#6b7684",this.sideLine="#e0e4eb",this.sky="#e3edfb",this.skyInk="#4a6ea0",this.accent="#4a6ea0",this.colour="#4fb3a8",this.radius="6px",this.wash="linear-gradient(135deg, #f1f5fd 0%, #fdfcfa 48%, #fdf5ee 100%)"}parts(){return[...super.parts(),this.tree(),this.icons(),this.small()]}library(){return f`
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
        `}};s(tr,"$ManualTheme");let rn=tr;const wc=o(rn);o(ko,me)(wc);var yc=Object.defineProperty,vc=Object.getOwnPropertyDescriptor,xc=s((c,e,a,r)=>{for(var n=vc(e,a),i=c.length-1,p;i>=0;i--)(p=c[i])&&(n=p(e,a,n)||n);return n&&yc(e,a,n),n},"__decorateClass$e");const nr=class nr extends u{constructor(){super(...arguments),this.specification=new Pa}defines(e){e.classes.add(this,"pa-first")}erase(e){e.classes.revert(this)}};s(nr,"$First");let dn=nr;const or=class or extends m{$saidOfAParagraph(e){l(e instanceof g,"first is said of a paragraph, and this is not one")}};s(or,"FirstSpecification");let Pa=or;xc([h("first is said of a paragraph")],Pa.prototype,"$saidOfAParagraph");o(dn);const sr=class sr extends ce{constructor(){super(...arguments),this.serif="'Source Serif 4', Georgia, serif",this.paper="#fdfcfa",this.ink="#343c4a",this.soft="#727d8c",this.faint="#9ea8b5",this.line="#e4e9f2",this.tint="#f0f4fc",this.barTint="#f8fafe",this.sky="#e3edfb",this.skyInk="#4a6ea0",this.accent="#4a6ea0",this.wash="linear-gradient(135deg, #f2f6fd 0%, #fdfcfa 48%, #fdf6f1 100%)",this.side="#f7f8fb",this.sideInk="#3a4452",this.sideDim="#7f8a9b",this.sideLine="#e3e7ee",this.barHeight="52px",this.holdsColumn="232px",this.space="24px",this.cover="132px",this.volume="184px",this.radius="6px",this.spine="inset 3px 0 0 rgba(0, 0, 0, 0.08), inset 4px 0 0 rgba(255, 255, 255, 0.35), 0 6px 12px -10px rgba(44, 52, 64, 0.3)",this.lift="inset 3px 0 0 rgba(0, 0, 0, 0.08), inset 4px 0 0 rgba(255, 255, 255, 0.35), 0 10px 16px -12px rgba(44, 52, 64, 0.35)",this.openSpine="inset 7px 0 0 rgba(0, 0, 0, 0.07), inset 9px 0 0 rgba(255, 255, 255, 0.45), 0 12px 22px -16px rgba(44, 52, 64, 0.35)"}parts(){return[...super.parts(),this.shelf(),this.jackets(),this.desk(),this.unfolded(),this.small()]}page(){return f`
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
        `}};s(sr,"$Bookshelf");let pn=sr;const zc=o(pn);var Cc=Object.defineProperty,jc=Object.getOwnPropertyDescriptor,vt=s((c,e,a,r)=>{for(var n=r>1?void 0:r?jc(e,a):e,i=c.length-1,p;i>=0;i--)(p=c[i])&&(n=(r?p(e,a,n):p(n))||n);return r&&n&&Cc(e,a,n),n},"__decorateClass$d");const rr=class rr extends Z{get books(){return this.text.find(x).filter(e=>e.is(Q)&&e!==this.synopsis)}get laidOutChapters(){return[...super.laidOutChapters,...this.books]}get pages(){return[this.synopsis,...this.books,...this.chapters]}head(){return t("div",{className:"pd-switches",children:this.switches()})}belowThePages(){return t("div",{className:"pd-shelf",children:this.volumes()})}volumes(){const e=o(O),a=o(C);return(this.table?.annotations.expressed(ae)?.entries??[]).map((n,i)=>{const p=B(n).identifier,$=this.chapterAt(p),k=$===void 0?this.coverOf(p):this.jacketOf($);if(k!==void 0)return d("div",{className:"pd-volume",children:[this.jacket(k,p),t("div",{className:"pd-paragraph pd-name",children:d(e,{children:[t(a,{children:p}),k.title.name]})})]},i)})}jacket(e,a){if(e===void 0)return;const r=o(Jp),n=o(C);return a===void 0?t(r,{cover:e}):t(r,{cover:e,children:t(n,{children:a})})}line(e){if(e===void 0)return;const a=o(ld),r=o(sp);return d(w,{children:[t(a,{cover:e}),t(r,{cover:e})]})}wayIntoTheBook(e){if(e===void 0)return;const a=o(O),r=o(C),n=e.mention.identifier;return t("div",{className:"pd-paragraph pd-read",children:d(a,{children:[t(r,{children:n}),`Read ${e.title.name}`]})})}jacketOf(e){return e===this.synopsis?this.cover:e.annotations.expressed(S)?.cover??(this.appendix.includes(e)?void 0:this.cover)}coverOf(e){return super.coverOf(e)??this.books.map(a=>a.annotations.expressed(S)?.cover).find(a=>a!==void 0&&a.mention?.identifier===e)}chapterAt(e){return super.chapterAt(e)??this.books.find(a=>this.placeOf(a)===e)}placeOf(e){const a=e.title?.annotations.expressed(ht)?.identifier,r=this.means?.identifier;if(!(a===void 0||r===void 0))return`${r.replace(/\/+$/u,"")}/#${a}`}$Bound(){const e=o(Dc);for(const a of[this.synopsis,...this.books])a?.annotations.add(this,t(e,{}));super.$Bound()}};s(rr,"$Catalogue");let cn=rr;const ir=class ir extends V{constructor(){super(...arguments),this.specification=new Da,this.card=z.div`
        &:not(.pa-open) { display: none; }
    `}get chapter(){return this.parent}get catalogue(){return this.book}get isTheFront(){return this.chapter===this.catalogue.synopsis}get cover(){return this.catalogue.jacketOf(this.chapter)}$CatalogueDesk(...e){this.$Format(...e);const a=o(mt),r=this.card;this.style=({className:n,children:i})=>{const p=this.catalogue,$=this.cover,k=[...this.chapter.classes].includes("pa-open"),y=this.isTheFront?o(p.title):void 0;return p.painted($,d(r,{className:`${n??""} pd-catalogue-desk${k?" pa-open":""}`.trim(),children:[p.jacket($),d("div",{className:"pd-words",children:[y===void 0?void 0:t(y,{}),i]}),$===void 0||this.isTheFront?void 0:t("div",{className:"pd-line",children:p.line($)}),p.wayIntoTheBook($),$===void 0?void 0:t(a,{chapter:this.chapter,annotation:Pc,children:"read on"})]}))}}defines(e){super.defines(e),e.classes.add(this,"pa-catalogue-desk")}erase(e){super.erase(e),e.classes.revert(this)}};s(ir,"$CatalogueDesk");let ln=ir;const dr=class dr extends m{$holdsASynopsis(e){l(e instanceof x&&e.is(Q),"a catalogue desk holds a synopsis, and this is not one")}};s(dr,"CatalogueDeskSpecification");let Da=dr;vt([h("a catalogue desk holds a synopsis")],Da.prototype,"$holdsASynopsis",1);const pr=class pr extends dd{get identifier(){return this._book??super.identifier}$Bound(){super.$Bound(),this._book=this.chapter?.annotations.expressed(Q)?.means?.identifier}};s(pr,"$BookLink");let Ta=pr;vt([sd()],Ta.prototype,"_book",2);const cr=class cr extends u{constructor(){super(...arguments),this.specification=new Na}defines(e){e.classes.add(this,"pa-caption")}erase(e){e.classes.revert(this)}};s(cr,"$Caption");let hn=cr;const lr=class lr extends u{constructor(){super(...arguments),this.specification=new Ma}defines(e){e.classes.add(this,"pa-arrow")}erase(e){e.classes.revert(this)}};s(lr,"$Arrow");let fn=lr;const hr=class hr extends u{constructor(){super(...arguments),this.specification=new E}defines(e){e.classes.add(this,"pa-unfolded-desk")}erase(e){e.classes.revert(this)}};s(hr,"$UnfoldedDesk");let gn=hr;const fr=class fr extends m{$isAParagraph(e){l(e instanceof g,"a caption is a paragraph, and this is not one")}};s(fr,"CaptionSpecification");let Na=fr;vt([h("a caption is a paragraph")],Na.prototype,"$isAParagraph",1);const gr=class gr extends m{$isAWordOfTheTable(e){l(e instanceof P&&e.chapter?.is(oe)===!0,"an arrow is a word of the table of contents, and this is not one")}};s(gr,"ArrowSpecification");let Ma=gr;vt([h("an arrow is a word of the table of contents")],Ma.prototype,"$isAWordOfTheTable",1);const yo=o(cn),Ac=o(ln),Oc=o(Ta);o(hn);o(fn);const Pc=o(gn),Dc=Ac;o(yo,xt)(Oc);o(yo,me)(zc);o(yo,ie)($e);var Tc=Object.defineProperty,Nc=Object.getOwnPropertyDescriptor,pa=s((c,e,a,r)=>{for(var n=Nc(e,a),i=c.length-1,p;i>=0;i--)(p=c[i])&&(n=p(e,a,n)||n);return n&&Tc(e,a,n),n},"__decorateClass$c");const ur=class ur extends u{constructor(){super(...arguments),this.specification=new Ra}defines(e){e.classes.add(this,"pa-question")}erase(e){e.classes.revert(this)}};s(ur,"$Question");let un=ur;const mr=class mr extends u{constructor(){super(...arguments),this.specification=new Wa}defines(e){e.classes.add(this,"pa-answer")}erase(e){e.classes.revert(this)}};s(mr,"$Answer");let mn=mr;const br=class br extends u{constructor(){super(...arguments),this.specification=new La}defines(e){e.classes.add(this,"pa-decision")}erase(e){e.classes.revert(this)}};s(br,"$Decision");let Ia=br;const $r=class $r extends u{constructor(){super(...arguments),this.specification=new Ba}defines(e){e.classes.add(this,"pa-pain")}erase(e){e.classes.revert(this)}};s($r,"$Pain");let bn=$r;const kr=class kr extends u{constructor(){super(...arguments),this.specification=new Ha}defines(e){e.classes.add(this,"pa-solution")}erase(e){e.classes.revert(this)}};s(kr,"$Solution");let $n=kr;const wr=class wr extends m{$isAParagraph(e){l(e instanceof g,"a question is a paragraph, and this is not one")}};s(wr,"QuestionSpecification");let Ra=wr;pa([h("a question is a paragraph")],Ra.prototype,"$isAParagraph");const yr=class yr extends m{$isAParagraph(e){l(e instanceof g,"an answer is a paragraph, and this is not one")}};s(yr,"AnswerSpecification");let Wa=yr;pa([h("an answer is a paragraph")],Wa.prototype,"$isAParagraph");const vr=class vr extends m{$isAParagraph(e){l(e instanceof g,"a decision is a paragraph, and this is not one")}};s(vr,"DecisionSpecification");let La=vr;pa([h("a decision is a paragraph")],La.prototype,"$isAParagraph");const xr=class xr extends m{$isAParagraph(e){l(e instanceof g,"a pain is a paragraph, and this is not one")}};s(xr,"PainSpecification");let Ba=xr;pa([h("a pain is a paragraph")],Ba.prototype,"$isAParagraph");const zr=class zr extends m{$isAParagraph(e){l(e instanceof g,"a solution is a paragraph, and this is not one")}};s(zr,"SolutionSpecification");let Ha=zr;pa([h("a solution is a paragraph")],Ha.prototype,"$isAParagraph");o(un);o(mn);o(Ia);o(bn);o($n);var Mc=Object.defineProperty,Ic=Object.getOwnPropertyDescriptor,ke=s((c,e,a,r)=>{for(var n=Ic(e,a),i=c.length-1,p;i>=0;i--)(p=c[i])&&(n=p(e,a,n)||n);return n&&Mc(e,a,n),n},"__decorateClass$b");const Cr=class Cr extends u{constructor(){super(...arguments),this.specification=new Oe,this.span=z.span.attrs({className:"pd-number"})``,this.close=z.span.attrs({className:"pd-close"})``}get number(){const e=D.copy(this.text).trim();return e===""?NaN:Number(e)}note(){const e=this.span,a=this.close,r=o(O),n=o(C),i=this.chapter?.mention?.identifier;return d(w,{children:[t(e,{children:this.number}),i===void 0?void 0:t(a,{children:d(r,{children:[t(n,{children:i}),"×"]})})]})}defines(e){e.classes.add(this,"pa-concept")}erase(e){e.classes.revert(this)}};s(Cr,"$Concept");let J=Cr;const jr=class jr extends u{constructor(){super(...arguments),this.specification=new Je}defines(e){e.classes.add(this,"pa-designed")}erase(e){e.classes.revert(this)}};s(jr,"$Designed");let kn=jr;const Ar=class Ar extends u{constructor(){super(...arguments),this.specification=new Je}defines(e){e.classes.add(this,"pa-decided")}erase(e){e.classes.revert(this)}};s(Ar,"$Decided");let wn=Ar;const Or=class Or extends u{constructor(){super(...arguments),this.specification=new Pe}defines(e){e.classes.add(this,"pa-desk")}erase(e){e.classes.revert(this)}};s(Or,"$Desk");let Sa=Or;const Pr=class Pr extends u{constructor(){super(...arguments),this.specification=new Pe}defines(e){e.classes.add(this,"pa-phone")}erase(e){e.classes.revert(this)}};s(Pr,"$Phone");let Ea=Pr;const Dr=class Dr extends u{constructor(){super(...arguments),this.specification=new Pe}defines(e){e.classes.add(this,"pa-thumbnail")}erase(e){e.classes.revert(this)}};s(Dr,"$Thumbnail");let Xe=Dr;const Tr=class Tr extends u{constructor(){super(...arguments),this.specification=new De}defines(e){e.classes.add(this,"pa-precedent")}erase(e){e.classes.revert(this)}};s(Tr,"$Precedent");let yn=Tr;const Nr=class Nr extends u{constructor(){super(...arguments),this.specification=new De}defines(e){e.classes.add(this,"pa-source")}erase(e){e.classes.revert(this)}};s(Nr,"$Source");let vn=Nr;const Mr=class Mr extends u{constructor(){super(...arguments),this.specification=new Fa}defines(e){e.classes.add(this,"pa-where")}erase(e){e.classes.revert(this)}};s(Mr,"$Where");let xn=Mr;const Ir=class Ir extends m{$isASection(e){l(e instanceof W,"a concept is a section, and this is not one")}$givenItsNumber(e){l(Number.isInteger(e.annotations.expressed(J)?.number),"a concept is given its number, and this one was given something else")}$photographedThreeWays(e){const a=e.text.find(g);l([Sa,Ea,Xe].every(r=>a.some(n=>n.is(r))),"a concept is photographed at a desk, at a phone, and small, and this one is missing a photograph")}};s(Ir,"ConceptSpecification");let Oe=Ir;ke([h("a concept is a section")],Oe.prototype,"$isASection");ke([h("a concept is given its number")],Oe.prototype,"$givenItsNumber");ke([h("a concept is photographed at a desk, at a phone, and small")],Oe.prototype,"$photographedThreeWays");const Rr=class Rr extends m{$isAParagraphHoldingOneImage(e){l(e instanceof g&&e.text.find(co).length===1,"a photograph is a paragraph that holds one image, and this is not one")}};s(Rr,"PhotographSpecification");let Pe=Rr;ke([h("a photograph is a paragraph that holds one image")],Pe.prototype,"$isAParagraphHoldingOneImage");const Wr=class Wr extends m{$saidOfAParagraphOfAConcept(e){l(e instanceof g&&e.parent instanceof Zd&&e.parent.is(J),"this is said of a paragraph of a concept, and here it is said of something else")}};s(Wr,"OfAConceptSpecification");let De=Wr;ke([h("this is said of a paragraph of a concept")],De.prototype,"$saidOfAParagraphOfAConcept");const Lr=class Lr extends De{$refersToWhereItIsBuilt(e){l(e.text.find(P).some(a=>a.is(pe)),"a where refers to where the concept is built, and this one refers nowhere")}};s(Lr,"WhereSpecification");let Fa=Lr;ke([h("a where refers to where the concept is built")],Fa.prototype,"$refersToWhereItIsBuilt");const Br=class Br extends m{$saidOfAConcept(e){l(e.is(J),"this is said of a concept, and here it is said of something else")}};s(Br,"OfAConceptSectionSpecification");let Je=Br;ke([h("this is said of a concept")],Je.prototype,"$saidOfAConcept");o(J);o(kn);o(wn);o(Sa);o(Ea);o(Xe);o(yn);o(vn);o(xn);var Rc=Object.defineProperty,Wc=Object.getOwnPropertyDescriptor,Cd=s((c,e,a,r)=>{for(var n=Wc(e,a),i=c.length-1,p;i>=0;i--)(p=c[i])&&(n=p(e,a,n)||n);return n&&Rc(e,a,n),n},"__decorateClass$a");const Lc=s((c,e)=>c.chapters.flatMap(a=>c.sections(a)).find(a=>a.is(J)&&a.mention?.identifier===e),"conceptAt"),Bc=s(c=>{const e=c.text.find(g).find(a=>a.is(Xe))?.text.find(co)[0];return e===void 0?"":e.contents||D.copy(e.text)},"thumbnailOf"),Hr=class Hr extends V{constructor(){super(...arguments),this.specification=new qa,this.themeProvider=!0,this.style=z.div`
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
    `}get chapter(){return this.parent}get concepts(){return this.book.sections(this.chapter).filter(e=>e.is(J))}get open(){return this.concepts.find(e=>e.mention?.identifier===this.book?.$bookmark)}defines(e){super.defines(e),e.classes.add(this,"pa-gallery");const a=this.open,r=this.concepts.find(n=>[...n.classes].includes("pa-open"));r!==a&&(r?.classes.revert(this),a?.classes.add(this,"pa-open"))}erase(e){super.erase(e),e.classes.revert(this)}};s(Hr,"$Gallery");let zn=Hr;const Sr=class Sr extends V{constructor(){super(...arguments),this.specification=new _a,this.strip=z.div`
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
    `}get paragraph(){return this.parent}get places(){return this.paragraph.text.find(P).map(e=>e.annotations.expressed(pe)?.identifier).filter(e=>e!==void 0)}get concepts(){const e=this.book;return[...new Set(this.places.map(a=>Lc(e,a)).filter(a=>a!==void 0))]}get chosen(){const e=this.paragraph.parent?.text.find(g).filter(a=>a.is(Ia))??[];return new Set(e.flatMap(a=>a.text.find(P).map(r=>r.annotations.expressed(pe)?.identifier)).filter(a=>a!==void 0))}$Strip(...e){this.$Format(...e);const a=this.strip,r=o(O),n=o(C);this.style=({className:i,children:p})=>{const $=this.chosen;return d(a,{className:`${i??""} pd-strip`.trim(),children:[this.concepts.map((k,y)=>{const T=k.mention.identifier;return d(r,{children:[t(n,{children:T}),d("span",{className:`pd-thumb${$.has(T)?" pd-chosen":""}`,children:[t("img",{src:Bc(k),alt:""}),d("span",{className:"pd-name",children:[t("span",{className:"pd-number",children:k.annotations.expressed(J)?.number}),k.canonical?.name]})]})]},y)}),t("span",{className:"pd-said",children:p})]})}}defines(e){super.defines(e),e.classes.add(this,"pa-strip")}erase(e){super.erase(e),e.classes.revert(this)}};s(Sr,"$Strip");let Cn=Sr;const Er=class Er extends m{$isAChapter(e){l(e instanceof x,"a gallery is a chapter, and this is not one")}};s(Er,"GallerySpecification");let qa=Er;Cd([h("a gallery is a chapter")],qa.prototype,"$isAChapter");const Fr=class Fr extends m{$isAParagraphReferringToConcepts(e){l(e instanceof g&&e.text.find(P).some(a=>a.annotations.expressed(pe)!==void 0),"a strip is a paragraph that refers to concepts, and this one refers to nothing")}};s(Fr,"StripSpecification");let _a=Fr;Cd([h("a strip is a paragraph that refers to concepts")],_a.prototype,"$isAParagraphReferringToConcepts");o(zn);o(Cn);const qr=class qr extends ce{constructor(){super(...arguments),this.accent="#23407a",this.ink="#343c4a",this.heading="#1a1f36",this.soft="#727d8c",this.faint="#9ea8b5",this.line="#e4e9f2",this.paper="#fdfcfa",this.side="#f8f9fb",this.holdsColumn="256px",this.barHeight="52px",this.card="12.5rem",this.shadow="0 1px 2px rgba(43, 54, 60, 0.05), 0 6px 18px rgba(43, 54, 60, 0.05)",this.lift="0 2px 4px rgba(43, 54, 60, 0.06), 0 14px 32px rgba(43, 54, 60, 0.10)",this.barLight="#fcfcfd",this.barMid="#f8f9fc",this.barDeep="#f2f4f9",this.barShadow="0 1px 0 rgba(43, 54, 60, 0.05)",this.sideLight="#fafbfc",this.sideDeep="#f2f4f8",this.codeGround="#f6f7fa",this.hairline="1px",this.stroke="2px",this.rise="-1px",this.gloss="inset 0 1px 0 rgba(255, 255, 255, 0.7)",this.ring="0 0 0 2px color-mix(in oklab, var(--band) 80%, white)",this.decisionShadow="0 1px 2px rgba(43, 54, 60, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.6)"}parts(){return[...super.parts(),this.backdrop(),this.bands(),this.guide(),this.story(),this.said(),this.small()]}backdrop(){return f`
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
        `}};s(qr,"$Exhibition");let jn=qr;const Hc=o(jn);var Sc=Object.defineProperty,Ec=Object.getOwnPropertyDescriptor,jd=s((c,e,a,r)=>{for(var n=Ec(e,a),i=c.length-1,p;i>=0;i--)(p=c[i])&&(n=p(e,a,n)||n);return n&&Sc(e,a,n),n},"__decorateClass$9");const _r=class _r extends Z{constructor(){super(...arguments),this.specification=new Ke}get designs(){return this.chapters.filter(e=>e.is(H))}get open(){return super.open??this.body[0]}head(){}switches(){}$Bound(){const e=o(Vp),a=o(Zp),r=o(Yp),n=this.designs;for(const i of n)i.annotations.add(this,t(e,{})),i.text.add(this,t(r,{}));for(const i of this.table?.annotations.expressed(ae)?.entries??[]){const p=B(i)?.identifier,$=p===void 0?void 0:this.chapterAt(p);$===void 0||!n.includes($)||i.annotations.add(this,t(a,{number:n.indexOf($)+1}))}super.$Bound()}};s(_r,"$Portfolio");let An=_r;const Ur=class Ur extends _{$everyChapterInAPart(e){l(e.chapters.every(a=>a.part!==void 0),"every chapter of a portfolio is in a part, and one here is in none")}$showsEveryDesign(e){l(e.designs.every(a=>bt(a,g).some(r=>r.is(Ee))),"a portfolio shows every design it holds as built, in a paragraph said to be the exhibit, and one here has none")}};s(Ur,"PortfolioSpecification");let Ke=Ur;jd([h("every chapter of a portfolio is in a part")],Ke.prototype,"$everyChapterInAPart");jd([h("a portfolio shows every design it holds as built")],Ke.prototype,"$showsEveryDesign");const Ad=o(An);o(Ad,me)(Hc);o(Ad,ie)($e);const Gr=class Gr extends xe{};s(Gr,"$PortfolioCover");let On=Gr;o(On);const Zr=class Zr extends ce{constructor(){super(...arguments),this.prose="'Source Serif 4', Georgia, serif",this.ink="#343c4a",this.heading="#1a1f36",this.soft="#727d8c",this.faint="#9ea8b5",this.line="#e4e9f2",this.paper="#ffffff",this.side="#f8f9fb",this.holdsColumn="240px",this.barHeight="52px",this.shadow="0 1px 2px rgba(43, 54, 60, 0.05), 0 6px 18px rgba(43, 54, 60, 0.05)",this.lift="0 2px 4px rgba(43, 54, 60, 0.06), 0 14px 32px rgba(43, 54, 60, 0.10)",this.barLight="#fcfcfd",this.barMid="#f8f9fc",this.barDeep="#f2f4f9",this.barShadow="0 1px 0 rgba(43, 54, 60, 0.05)",this.sideLight="#fafbfc",this.sideDeep="#f2f4f8",this.hairline="1px",this.stroke="2px"}parts(){return[...super.parts(),this.bands(),this.guide(),this.order(),this.surface(),this.entries(),this.small()]}bands(){return f`
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
        `}};s(Zr,"$Typeset");let Ua=Zr;const Od=o(Ua);var Fc=Object.defineProperty,qc=Object.getOwnPropertyDescriptor,Pd=s((c,e,a,r)=>{for(var n=qc(e,a),i=c.length-1,p;i>=0;i--)(p=c[i])&&(n=p(e,a,n)||n);return n&&Fc(e,a,n),n},"__decorateClass$8");const R=s(c=>c.annotations.expressed(te)?.date?.date??"","dayOf"),Te=s(c=>{const[e,a]=R(c).split("-");return e===void 0||a===void 0?"":new Date(Date.UTC(Number(e),Number(a)-1,1)).toLocaleString("en-GB",{month:"long",year:"numeric",timeZone:"UTC"})},"monthOf"),Vr=class Vr extends u{constructor(){super(...arguments),this.specification=new E}defines(e){e.classes.add(this,"pa-newest-first")}erase(e){e.classes.revert(this)}};s(Vr,"$NewestFirst");let Ga=Vr;const _c=o(Ga),Dd=_c,Yr=class Yr extends g{write(){const e=o(mt);return t(e,{annotation:Dd,children:"newest first"})}$Define(){super.$Define(),this.classes.add(this,"pd-entry-order")}};s(Yr,"$EntryOrder");let Pn=Yr;const Qr=class Qr extends P{write(){return String(this.book.entries.indexOf(this.chapter)+1)}$Define(){super.$Define(),this.classes.add(this,"pd-entry-number")}};s(Qr,"$EntryNumber");let Dn=Qr;const Xr=class Xr extends P{write(){const[e,a,r]=R(this.$entry).split("-");if(!(e===void 0||a===void 0||r===void 0))return new Date(Date.UTC(Number(e),Number(a)-1,Number(r.slice(0,2)))).toLocaleString("en-GB",{day:"numeric",month:"short",timeZone:"UTC"})}$Define(){super.$Define(),this.classes.add(this,"pd-entry-day")}};s(Xr,"$EntryDay");let Tn=Xr;const Jr=class Jr extends Ze{paging(){return f``}};s(Jr,"$JournalLayout");let Nn=Jr;const Uc=o(Pn),Gc=o(Dn),Td=o(Tn),Nd=o(Nn),Zc=Uc,Vc=Gc,Yc=Td,Kr=class Kr extends Z{constructor(){super(...arguments),this.specification=new Ne}get entries(){return this.body}get latest(){return[...this.entries].sort((e,a)=>R(a).localeCompare(R(e)))[0]}get pages(){const e=[...this.entries].sort((a,r)=>R(a).localeCompare(R(r)));return this.is(Ga)?e.reverse():e}get open(){return super.open??this.latest}head(){}switches(){}turns(){}$Bound(){const e=o(Vc);for(const n of this.entries)n.text.add(this,t(e,{}));const a=o(Yc);for(const n of this.table?.annotations.expressed(ae)?.entries??[]){const i=B(n)?.identifier,p=i===void 0?void 0:this.chapterAt(i);p===void 0||!this.entries.includes(p)||n.text.add(this,t(a,{entry:p}))}const r=o(Zc);this.table?.text.add(this,t(r,{})),this.$is=[Dd],super.$Bound()}};s(Kr,"$Journal");let Za=Kr;const ei=class ei extends _{$everyEntryIsDated(e){const a=e.entries.find(r=>!r.is(te));l(a===void 0,`every entry of a journal is dated, and "${a?.title?.name}" is not`)}$everyEntrySaysItsMonth(e){const a=e.entries.find(r=>r.part?.name!==Te(r));l(a===void 0,a===void 0?"":`every entry of a journal says the month of its date as its part, and "${a.title?.name}" says "${a.part?.name??"none"}" for ${Te(a)}`)}};s(ei,"JournalSpecification");let Ne=ei;Pd([h("every entry of a journal is dated")],Ne.prototype,"$everyEntryIsDated");Pd([h("every entry of a journal says the month of its date as its part")],Ne.prototype,"$everyEntrySaysItsMonth");const vo=o(Za);o(vo,me)(Od);o(vo,ie)($e);o(vo,yt)(Nd);const ai=class ai extends xe{};s(ai,"$JournalCover");let Mn=ai;const Qc=o(Mn);var Xc=Object.defineProperty,Jc=Object.getOwnPropertyDescriptor,Kc=s((c,e,a,r)=>{for(var n=Jc(e,a),i=c.length-1,p;i>=0;i--)(p=c[i])&&(n=p(e,a,n)||n);return n&&Xc(e,a,n),n},"__decorateClass$7");const ti=class ti extends u{constructor(){super(...arguments),this.specification=new Va}get section(){return this.parent instanceof W?this.parent:void 0}get headings(){const e=this.section;return e===void 0?[]:e.text.find(pd).filter(a=>a!==e.canonical)}defines(e){e.classes.add(this,"pa-opaque")}erase(e){e.classes.revert(this)}$Bound(){for(const e of this.headings){const a=e.annotations.expressed(ht),r=e.annotations.expressed(dd);for(const n of[a,r])n!==void 0&&e.annotations.remove(e,n)}super.$Bound()}};s(ti,"$Opaque");let In=ti;const ni=class ni extends m{$saidOfASection(e){l(e instanceof W,"opaque is said of a section, and this is not one")}};s(ni,"OpaqueSpecification");let Va=ni;Kc([h("opaque is said of a section")],Va.prototype,"$saidOfASection");const el=o(In);var al=Object.defineProperty,tl=Object.getOwnPropertyDescriptor,Y=s((c,e,a,r)=>{for(var n=tl(e,a),i=c.length-1,p;i>=0;i--)(p=c[i])&&(n=p(e,a,n)||n);return n&&al(e,a,n),n},"__decorateClass$6");const oi=class oi extends pd{$Define(){super.$Define(),this.classes.add(this,"pd-speaker")}$Bound(){super.$Bound();const e=this.annotations.expressed(ht);e!==void 0&&this.annotations.remove(this,e)}};s(oi,"$Speaker");let ea=oi;const si=class si extends lo{$Define(){super.$Define(),this.classes.add(this,"pd-time")}};s(si,"$Time");let Rn=si;const ri=class ri extends Vd{$Define(){super.$Define(),this.classes.add(this,"pd-participant")}};s(ri,"$Participant");let Ya=ri;const ii=class ii extends g{get participants(){return this.text.find(Ya)}write(){const e=this.participants;return e.flatMap((a,r)=>{const n=o(a);return[r===0?"":r===e.length-1?" and ":", ",t(n,{},r)]})}$Define(){super.$Define(),this.classes.add(this,"pd-participants")}};s(ii,"$Participants");let Qa=ii;o(ea);const nl=o(Rn);o(Ya);o(Qa);const ol=nl,sl=s(c=>{const e=new Date(c);if(Number.isNaN(e.getTime()))return c;const a=e.toLocaleDateString("en-GB",{day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return`${e.toLocaleTimeString("en-GB",{hour:"2-digit",minute:"2-digit",timeZone:"UTC"})} UTC, ${a}`},"shownTime"),di=class di extends W{constructor(){super(...arguments),this.specification=new aa,this.$at=void 0}get when(){return this.$at??""}get speaker(){return this.text.find(ea)[0]}write(){const e=o(ol),a=this.speaker,r=a===void 0?void 0:o(a),n=[...this.text].filter(i=>i!==a);return d(w,{children:[r===void 0?void 0:t(r,{}),t(e,{children:`[${sl(this.when)}](${this.when})`}),t("div",{className:"pd-said",children:n.map((i,p)=>{const $=o(i);return t($,{},p)})})]})}$Define(){super.$Define(),this.classes.add(this,"pd-message");const e=o(el);if(this.annotations.add(this,t(e,{})),this.when==="")return;const a=this.speaker,r=a===void 0?"":G.reference(D.copy(a.text))?.name??D.copy(a.text),n=o(Yd);this.annotations.add(this,t(n,{children:cd.slug(`${this.when.replace(/Z$/u,"")} ${r}`)}))}$Bound(){const e=this.book?.author?.means?.identifier;if(e!==void 0&&this.speaker?.means?.identifier===e){const a=o(il);this.annotations.add(this,t(a,{}))}super.$Bound()}};s(di,"$Message");let ne=di;const pi=class pi extends u{constructor(){super(...arguments),this.specification=new Xa}defines(e){e.classes.add(this,"pa-mine")}erase(e){e.classes.revert(this)}};s(pi,"$Mine");let Wn=pi;const ci=class ci extends m{$saidOfAMessage(e){l(e instanceof ne,"mine is said of a message, and this is not one")}};s(ci,"MineSpecification");let Xa=ci;Y([h("mine is said of a message")],Xa.prototype,"$saidOfAMessage");const rl=o(Wn),il=rl,li=class li extends u{constructor(){super(...arguments),this.specification=new Ka}defines(e){e.classes.add(this,"pa-quoted")}erase(e){e.classes.revert(this)}};s(li,"$Quoted");let Ln=li;const hi=class hi extends u{constructor(){super(...arguments),this.specification=new et}defines(e){e.classes.add(this,"pa-verbatim")}erase(e){e.classes.revert(this)}};s(hi,"$Verbatim");let Bn=hi;const fi=class fi extends u{constructor(){super(...arguments),this.specification=new ta,this.$from=void 0,this.$to=void 0}get from(){return this.$from??""}get to(){return this.$to??""}defines(e){e.classes.add(this,"pa-period")}erase(e){e.classes.revert(this)}};s(fi,"$Period");let Ja=fi;const gi=class gi extends u{constructor(){super(...arguments),this.specification=new ta,this.$shown=void 0,this.$all=void 0}get shown(){return Number(this.$shown??0)}get all(){return Number(this.$all??0)}get aside(){return this.all-this.shown}defines(e){e.classes.add(this,"pa-messages")}erase(e){e.classes.revert(this)}};s(gi,"$Messages");let ge=gi;const ui=class ui extends Qd{$saysWhen(e){l(e.when!==""&&!Number.isNaN(Date.parse(e.when)),"a message says when it was said, as an instant the machine can read, and this one does not")}$headedByItsSpeaker(e){l(e.canonical instanceof ea,"a message is headed by its speaker, a heading that refers to them, and this one is not")}};s(ui,"MessageSpecification");let aa=ui;Y([h("a message says when it was said")],aa.prototype,"$saysWhen");Y([h("a message is headed by its speaker")],aa.prototype,"$headedByItsSpeaker");const mi=class mi extends m{$saidOfAParagraph(e){l(e instanceof g,"this is said of a paragraph, and this is not one")}};s(mi,"OfAParagraphSpecification");let Ka=mi;Y([h("this is said of a paragraph")],Ka.prototype,"$saidOfAParagraph");const bi=class bi extends m{$saidOfACover(e){l(e instanceof x&&e.is(L),"this is said of a cover, and this is not one")}};s(bi,"OfACoverSpecification");let ta=bi;Y([h("this is said of a cover")],ta.prototype,"$saidOfACover");const $i=class $i extends m{$saidOfAWord(e){l(e instanceof P,"verbatim is said of a word, and this is not one")}};s($i,"VerbatimSpecification");let et=$i;Y([h("verbatim is said of a word")],et.prototype,"$saidOfAWord");o(ne);o(Ln);o(Bn);o(Ja);o(ge);const nd=s(c=>c===void 0||c===""?"":new Date(c).toLocaleDateString("en-GB",{day:"numeric",month:"long",year:"numeric",timeZone:"UTC"}),"dayWords"),ki=class ki extends g{write(){const e=this.book,a=e.messageCount?.shown??e.messages.length,r=e.body.length,n=nd(e.period?.from),i=nd(e.period?.to);return d(w,{children:[d("span",{className:"pd-tally-count",children:[t("b",{children:a}),r===1?" messages in ":" messages over ",t("b",{children:r}),r===1?" day":" days"]}),t("span",{className:"pd-tally-period",children:n===i?n:`${n} to ${i}`})]})}$Define(){super.$Define(),this.classes.add(this,"pd-tally")}};s(ki,"$Tally");let Hn=ki;const wi=class wi extends P{write(){return String(this.$entry?.text.find(ne).length??0)}$Define(){super.$Define(),this.classes.add(this,"pd-day-count")}};s(wi,"$DayCount");let Sn=wi;const dl=o(Hn),pl=o(Sn),cl=dl,ll=pl,yi=class yi extends Z{constructor(){super(...arguments),this.specification=new ue}get participants(){return this.cover?.text.find(Qa)[0]?.participants??[]}get period(){return this.cover?.annotations.expressed(Ja)}get messageCount(){return this.cover?.annotations.expressed(ge)}get messages(){return this.body.flatMap(e=>e.text.find(ne))}get pages(){return[...[...this.body].sort((a,r)=>R(a).localeCompare(R(r))),...this.appendix]}get open(){return super.open??this.pages[0]}head(){const e=o(cl);return d(w,{children:[super.head(),t(e,{chapter:this.cover})]})}$Bound(){const e=o(ll);for(const a of this.table?.annotations.expressed(ae)?.entries??[]){const r=B(a)?.identifier,n=r===void 0?void 0:this.chapterAt(r);n===void 0||!this.body.includes(n)||a.text.add(this,t(e,{entry:n}))}super.$Bound()}};s(yi,"$Conversation");let at=yi;const vi=class vi extends _{$saysItsParticipantsPeriodAndCount(e){l(e.participants.length>0&&e.period!==void 0&&e.messageCount!==void 0,"a conversation says its participants, its period and how many messages it holds, on its cover, and this one says less")}$everyChapterIsDated(e){const a=e.body.find(r=>!r.is(te));l(a===void 0,`every chapter of a conversation is dated, and "${a?.title?.name}" is not`)}$everyMessageIsAddressed(e){const a=e.messages.find(r=>r.annotations.expressed(ht)===void 0);l(a===void 0,`every message of a conversation is addressed by its time, and the one at "${a?.when}" is not`)}$everyChapterHoldsAMessage(e){const a=e.body.find(r=>r.text.find(ne).length===0);l(a===void 0,`every chapter of a conversation holds a message, and "${a?.title?.name}" holds none`)}};s(vi,"ConversationSpecification");let ue=vi;Y([h("a conversation says its participants, its period and how many messages it holds")],ue.prototype,"$saysItsParticipantsPeriodAndCount");Y([h("every chapter of a conversation is dated")],ue.prototype,"$everyChapterIsDated");Y([h("every message of a conversation is addressed by its time")],ue.prototype,"$everyMessageIsAddressed");Y([h("every chapter of a conversation holds a message")],ue.prototype,"$everyChapterHoldsAMessage");o(at);const hl=/(::[^\n]*|<\|=\|>|=\|>|=[A-Za-z0-9'_]*>|-\([^)]*\)>|->|==|!=)/gu,od=s(c=>c.replace(/[&<>]/gu,e=>({"&":"&amp;","<":"&lt;",">":"&gt;"})[e]),"escaped"),fl=s(c=>c.split(hl).map((e,a)=>a%2===0?od(e):`<span class="${e.startsWith("::")?"hljs-comment":"hljs-keyword"}">${od(e)}</span>`).join(""),"notationHighlighting"),gl=s((c,e)=>e==="srt"?fl(c):Xd(c,e),"boxHighlighting"),xi=class xi extends ho{constructor(){super(...arguments),this.$highlighter=gl}get name(){return this.language===""?"text":this.language}$CodeBox(...e){this.$Code(...e),this.containers.replace(this,"pre","div")}write(){return d(w,{children:[d("div",{className:"pd-code-bar",children:[t("span",{className:"pd-code-name",children:this.name}),t("button",{type:"button",className:"pd-copy",onClick:s(e=>this.copy(e),"onClick"),children:"Copy"})]}),t("pre",{children:super.write()})]})}copy(e){const a=e.currentTarget.closest(".pd-code-box")?.querySelector("pre")?.textContent??"";navigator.clipboard?.writeText(a)}$Define(){super.$Define(),this.classes.add(this,"pd-code-box")}};s(xi,"$CodeBox");let En=xi;o(En);var ul=Object.defineProperty,ml=Object.getOwnPropertyDescriptor,Md=s((c,e,a,r)=>{for(var n=ml(e,a),i=c.length-1,p;i>=0;i--)(p=c[i])&&(n=p(e,a,n)||n);return n&&ul(e,a,n),n},"__decorateClass$5");const zi=class zi extends Za{constructor(){super(...arguments),this.specification=new na}get entries(){return this.text.find(x).filter(e=>e.is(Q)&&e!==this.synopsis)}get laidOutChapters(){return[...super.laidOutChapters,...this.entries]}sizeOf(e){return e.annotations.expressed(S)?.cover?.annotations.expressed(ge)?.shown??0}};s(zi,"$Register");let Fn=zi;const Ci=class Ci extends Ne{$everyEntryStandsForABook(e){const a=e.entries.find(r=>r.annotations.expressed(Q)?.means===void 0);l(a===void 0,`every entry of a register stands for a book, holding its synopsis, and "${a?.title?.name}" stands for none`)}$onlyAChapterAppends(e){const a=[...e.chapters,...e.entries];l(e.text.find(x).every(r=>a.includes(r)||!r.is(ee)),"only an ordinary chapter or an entry files a file, and here a cover, a synopsis or a table of contents files one")}};s(Ci,"RegisterSpecification");let na=Ci;Md([h("every entry of a register stands for a book, holding its synopsis")],na.prototype,"$everyEntryStandsForABook");Md([h("only an ordinary chapter or an entry files a file")],na.prototype,"$onlyAChapterAppends");const xo=o(Fn);o(xo,me)(Od);o(xo,ie)($e);o(xo,yt)(Nd);var bl=Object.defineProperty,$l=Object.getOwnPropertyDescriptor,zo=s((c,e,a,r)=>{for(var n=$l(e,a),i=c.length-1,p;i>=0;i--)(p=c[i])&&(n=p(e,a,n)||n);return n&&bl(e,a,n),n},"__decorateClass$4");const ji=class ji extends u{constructor(){super(...arguments),this.specification=new E}defines(e){e.classes.add(this,"pa-synopses")}erase(e){e.classes.revert(this)}};s(ji,"$Synopses");let qn=ji;const kl=o(qn),wl=kl,Ai=class Ai extends g{write(){const e=o(mt);return t(e,{annotation:wl,children:"with the synopsis"})}$Define(){super.$Define(),this.classes.add(this,"pd-row-form")}};s(Ai,"$RowForm");let _n=Ai;const Oi=class Oi extends P{write(){return`${this.chapter?.annotations.expressed(S)?.cover?.annotations.expressed(ge)?.shown??0} exchanges`}$Define(){super.$Define(),this.classes.add(this,"pd-entry-count")}};s(Oi,"$EntryCount");let Un=Oi;const Pi=class Pi extends P{write(){return Te(this.chapter)}$Define(){super.$Define(),this.classes.add(this,"pd-entry-month")}};s(Pi,"$EntryMonth");let Gn=Pi;const Di=class Di extends P{write(){}$Define(){super.$Define(),this.classes.add(this,"pd-entry-open")}};s(Di,"$EntryOpen");let Zn=Di;const Ti=class Ti extends P{write(){return String(this.$section?.text.find(g).filter(e=>B(e)!==void 0).length??0)}$Define(){super.$Define(),this.classes.add(this,"pd-month-count")}};s(Ti,"$MonthCount");let Vn=Ti;const Ni=class Ni extends g{get project(){return this.book}$ProjectHead(...e){this.$Writing(...e),this.containers.replace(this,"span","div")}write(){const e=this.project;if(e===void 0)return;const a=o(O),r=o(C),n=e.coverOf(e.subject?.means?.identifier),i=e.entries,p=i.reduce((y,T)=>y+(T.annotations.expressed(S)?.cover?.annotations.expressed(ge)?.shown??0),0),$=i.map(R).filter(y=>y!=="").sort(),k=$.length===0?"":`${Te(i.find(y=>R(y)===$[0]))} to ${Te(i.find(y=>R(y)===$[$.length-1]))}`;return d(w,{children:[d("span",{className:"pd-crumbs",children:[n===void 0?void 0:d(a,{children:[t(r,{children:n.mention.identifier}),n.title?.name]}),t("i",{children:"/"}),t(a,{children:e.title?.name})]}),d("span",{className:"pd-report",children:[d("span",{children:[t("b",{children:i.length})," conversations"]}),d("span",{children:[t("b",{children:p})," exchanges"]}),d("span",{children:[t("b",{children:e.files.length})," files"]}),t("span",{children:k})]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-project-head")}};s(Ni,"$ProjectHead");let Yn=Ni;const Mi=class Mi extends g{constructor(){super(...arguments),this.style=z.div`
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
    `}get project(){return this.book}$Knowledge(...e){this.$Writing(...e),this.containers.replace(this,"span",this.style)}write(){const e=this.project;if(e===void 0)return;const a=o(O),r=o(C),n=e.project,i='<svg viewBox="0 0 16 16"><path d="M4 1.5h5.5L13 5v9.5H4z"/><path d="M9.5 1.5V5H13M6 8h4M6 10.5h4"/></svg>';return d(w,{children:[n?.mention===void 0?void 0:d("span",{className:"pd-knowledge-row",children:[d(a,{children:[t(r,{children:n.mention.identifier}),n.title?.name]}),t("span",{className:"pd-at-right",children:"what it is, its instructions"})]}),d("span",{className:"pd-knowledge-row",children:["Files",t("small",{children:e.files.length}),t("span",{className:"pd-at-right",children:"as uploaded"})]}),t("span",{className:"pd-knowledge-files",children:e.files.map((p,$)=>d("span",{className:"pd-knowledge-file",children:[t("span",{className:"pd-drawing",dangerouslySetInnerHTML:{__html:i}}),d(a,{children:[t(r,{children:p.mention.identifier}),p.title?.name]}),t("span",{className:"pd-file-type",children:(p.annotations.find(ee)[0]?.$type??"").replace(/^\./u,"")})]},$))})]})}$Define(){super.$Define(),this.classes.add(this,"pd-knowledge")}};s(Mi,"$Knowledge");let Qn=Mi;const Ii=class Ii extends Ze{paging(){return f`
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
        `}};s(Ii,"$ProjectLayout");let Xn=Ii;const Ri=class Ri extends Ye{constructor(){super(...arguments),this.specification=new Me}get entries(){return this.text.find(x).filter(e=>e.is(Q)&&e!==this.synopsis)}get files(){return this.chapters.filter(e=>e.is(N)&&e.is(ee))}get project(){return this.chapters.find(e=>e.is(N)&&!e.is(ee))}get laidOutChapters(){return[...super.laidOutChapters,...this.entries]}get pages(){const e=[...this.entries].sort((a,r)=>R(r).localeCompare(R(a)));return[...super.pages,...e]}get open(){return this.$bookmark===void 0?void 0:this.chapterAt(this.$bookmark)}chapterByPlace(){const e=super.chapterByPlace();for(const a of this.entries)a.mention!==void 0&&!e.has(a.mention.identifier)&&e.set(a.mention.identifier,a);return e}write(){const e=o(Wl);return d(w,{children:[super.write(),t("div",{className:"pd-knowledge-column",children:t(e,{chapter:this.cover})})]})}head(){const e=o(this.cover),a=o(Rl),r=o(Dl);return d(w,{children:[t(e,{}),t(a,{chapter:this.cover}),t(r,{chapter:this.cover})]})}$Bound(){const e=o(Tl),a=o(Nl),r=o(Ml);let n="";const i=o(C);for(const k of this.pages.filter(y=>this.entries.includes(y))){const y=Te(k),T=k.annotations.expressed(S)?.cover?.mention?.identifier;k.text.add(this,...y!==n?[t(a,{},"month")]:[],t(e,{},"count"),...T===void 0?[]:[t(r,{children:t(i,{children:T})},"open")]),n=y}const p=o(Td),$=o(Il);for(const k of this.table?.annotations.expressed(ae)?.entries??[]){const y=B(k)?.identifier,T=y===void 0?void 0:this.chapterAt(y);T===void 0||!this.entries.includes(T)||k.text.add(this,t(p,{entry:T}))}for(const k of this.table?.text.find(W)??[]){k.$is=[$o];const y=k.canonical;y!==void 0&&k.text.find(g).some(T=>{const ad=B(T)?.identifier;return ad!==void 0&&this.entries.includes(this.chapterAt(ad))})&&y.text.add(this,t($,{section:k}))}super.$Bound()}};s(Ri,"$ProjectManual");let Jn=Ri;const Wi=class Wi extends Qe{$everyEntryStandsForAConversation(e){const a=e.entries.find(r=>r.annotations.expressed(Q)?.means===void 0);l(a===void 0,`every entry of a project manual stands for a conversation, holding its synopsis, and "${a?.title?.name}" stands for none`)}$hasOneProjectChapter(e){l(e.chapters.filter(a=>a.is(N)&&!a.is(ee)).length===1,"a project manual has one chapter about the project, which appends no file, and this one has none or more than one")}$onlyAChapterAppends(e){const a=[...e.chapters,...e.entries];l(e.text.find(x).every(r=>a.includes(r)||!r.is(ee)),"only an ordinary chapter or an entry files a file, and here a cover, a synopsis or a table of contents files one")}};s(Wi,"ProjectManualSpecification");let Me=Wi;zo([h("every entry of a project manual stands for a conversation, holding its synopsis")],Me.prototype,"$everyEntryStandsForAConversation");zo([h("a project manual has one chapter about the project, which appends no file")],Me.prototype,"$hasOneProjectChapter");zo([h("an entry of a project manual files a file only when a chapter may")],Me.prototype,"$onlyAChapterAppends");const yl=o(_n),vl=o(Un),xl=o(Gn),zl=o(Zn),Cl=o(Vn),jl=o(Yn),Al=o(Qn),Ol=o(Xn),Pl=o(Jn),Dl=yl,Tl=vl,Nl=xl,Ml=zl,Il=Cl,Rl=jl,Wl=Al;o(Pl,yt)(Ol);const Li=class Li extends g{$Define(){super.$Define(),this.classes.add(this,"pd-action")}};s(Li,"$Action");let Kn=Li;const Bi=class Bi extends g{$Define(){super.$Define(),this.classes.add(this,"pd-result")}};s(Bi,"$Result");let eo=Bi;o(Kn);o(eo);var Ll=Object.defineProperty,Bl=Object.getOwnPropertyDescriptor,Hl=s((c,e,a,r)=>{for(var n=Bl(e,a),i=c.length-1,p;i>=0;i--)(p=c[i])&&(n=p(e,a,n)||n);return n&&Ll(e,a,n),n},"__decorateClass$3");const Sl='<svg viewBox="0 0 24 24"><path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4M9 12h6M9 16h6"/></svg>',El='<svg viewBox="0 0 24 24"><path d="M8 7l-5 5 5 5M16 7l5 5-5 5M13 5l-2 14"/></svg>',de=s(c=>{const e=c.book;return e!==void 0&&"$shown"in e?e:void 0},"showingBook"),Hi=class Hi extends u{constructor(){super(...arguments),this.specification=new tt}defines(e){e.classes.add(this,"pa-version")}erase(e){e.classes.revert(this)}};s(Hi,"$Version");let ao=Hi;const Si=class Si extends m{$saidOfAChapter(e){l(e instanceof x,"a version is said of a chapter, and this is not one")}};s(Si,"VersionSpecification");let tt=Si;Hl([h("a version is said of a chapter")],tt.prototype,"$saidOfAChapter");const Ei=class Ei extends ho{constructor(){super(...arguments),this.$artifact=void 0,this.$place=void 0}get version(){const e=this.$place;if(e!==void 0)return this.book.chapters.find(a=>cd.slug(a.title?.name??"")===e)}get versionName(){return this.version?.title?.name??""}get name(){return this.versionName.replace(/ v\d+(?:-\d+)?$/u,"")||this.$identifier}get number(){return/ v(\d+)(?:-\d+)?$/u.exec(this.versionName)?.[1]??"1"}get kind(){const e=this.$type.replace(/^\./u,"");return e==="md"||e==="txt"||e===""?"document":e==="html"?"page":"code"}get shown(){return de(this)?.$shown===this}$Artifact(...e){this.$Code(...e),this.containers.replace(this,"pre","figure")}write(){const e=[...this.text].map((r,n)=>{const i=o(r);return t(i,{},n)}),a={__html:this.kind==="document"?Sl:El};return d(w,{children:[d("button",{type:"button",className:"pd-card","aria-pressed":this.shown,onClick:s(()=>this.press(),"onClick"),children:[t("span",{className:"pd-card-mark",dangerouslySetInnerHTML:a}),d("span",{className:"pd-card-words",children:[t("b",{children:this.name}),t("small",{children:`Click to open ${this.kind} · v${this.number}`})]})]}),t("figcaption",{children:e})]})}press(){const e=de(this);e!==void 0&&(e.$shown=e.$shown===this?void 0:this)}$Define(){super.$Define(),this.classes.add(this,"pd-artifact"),this.shown&&this.classes.add(this,"pa-open")}};s(Ei,"$Artifact");let oa=Ei;const Fi=class Fi extends ho{get sentence(){return D.copy(this.text)}get fileName(){return/“([^”]+)”/u.exec(this.sentence)?.[1]??"a file"}get extension(){return(this.fileName.split(".").pop()??"file").toUpperCase().slice(0,4)}get lineCount(){return this.names?this.contents.split(`
`).length:0}get shown(){return de(this)?.$shown===this}$Attachment(...e){this.$Code(...e),this.containers.replace(this,"pre","figure")}write(){const e=[...this.text].map((a,r)=>{const n=o(a);return t(n,{},r)});return d(w,{children:[d("button",{type:"button",className:"pd-chip","aria-pressed":this.shown,onClick:s(()=>this.press(),"onClick"),children:[t("span",{className:"pd-chip-mark",children:this.extension}),d("span",{className:"pd-chip-words",children:[t("b",{children:this.fileName}),t("small",{children:this.names?`${this.lineCount} lines`:"not carried by the export"})]})]}),t("figcaption",{children:e})]})}press(){const e=de(this);e!==void 0&&(e.$shown=e.$shown===this?void 0:this)}$Define(){super.$Define(),this.classes.add(this,"pd-attachment"),this.shown&&this.classes.add(this,"pa-open")}};s(Fi,"$Attachment");let nt=Fi;o(ao);o(oa);o(nt);const qi=class qi extends Ua{constructor(){super(...arguments),this.sans="'Inter', system-ui, sans-serif",this.mono="ui-monospace, 'Cascadia Code', Consolas, monospace",this.keyword="#1f5fbf",this.string="#9a3b1e",this.type="#116b4a",this.comment="#7a8491"}parts(){return[...super.parts(),this.surfaces(),this.top(),this.rows(),this.openDay(),this.exchanges(),this.said(),this.cards(),this.paneColumn(),this.phone()]}surfaces(){return f`
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
        `}};s(qi,"$ApplicationForm");let to=qi;const Fl=o(to),_i=class _i extends g{constructor(){super(...arguments),this.style=z.div`
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
    `}get shown(){return de(this)?.$shown}get artifacts(){return this.book?.messages.flatMap(e=>e.text.find(oa))??[]}$Pane(...e){this.$Writing(...e),this.containers.replace(this,"span",this.style)}neighbour(e,a){const r=Number(e.number)+a;return this.artifacts.find(n=>n.$artifact===e.$artifact&&Number(n.number)===r)}write(){const e=this.shown;if(e===void 0)return;const a=e instanceof oa?e:void 0,r=e instanceof nt?e:void 0,n=a?.version,i=n===void 0?void 0:o(n),p=a===void 0?void 0:this.neighbour(a,-1),$=a===void 0?void 0:this.neighbour(a,1),k=r===void 0?"":r.names?r.contents:"The export does not carry this upload; the name is all it kept.";return d(w,{children:[d("div",{className:"pd-pane-bar",children:[t("span",{className:"pd-pane-title",children:a?.name??r?.fileName}),t("span",{className:"pd-pane-kind",children:a?.kind??r?.extension.toLowerCase()}),t("button",{type:"button",className:"pd-pane-copy",onClick:s(y=>this.copy(y),"onClick"),children:"Copy"}),t("button",{type:"button",className:"pd-pane-close","aria-label":"close",onClick:s(()=>this.close(),"onClick"),children:"×"})]}),t("div",{className:"pd-pane-body",children:i===void 0?t("pre",{children:k}):t(i,{})}),a===void 0?void 0:d("div",{className:"pd-pane-foot",children:[d("span",{className:"pd-pane-version",children:[t("button",{type:"button",disabled:p===void 0,onClick:s(()=>this.show(p),"onClick"),children:"‹"}),t("span",{children:`v${a.number}`}),t("button",{type:"button",disabled:$===void 0,onClick:s(()=>this.show($),"onClick"),children:"›"})]}),t("button",{type:"button",className:"pd-pane-download",onClick:s(()=>this.download(a),"onClick"),children:"Download"})]})]})}show(e){const a=de(this);a!==void 0&&e!==void 0&&(a.$shown=e)}close(){const e=de(this);e!==void 0&&(e.$shown=void 0)}copy(e){const a=e.currentTarget.closest(".pd-pane")?.querySelector(".pd-pane-body");navigator.clipboard?.writeText(a?.textContent??"")}download(e){const a=e.$type.replace(/^\./u,"")||"md",r=new Blob([e.contents],{type:"text/plain"}),n=document.createElement("a");n.href=URL.createObjectURL(r),n.download=`${e.name} v${e.number}.${a}`,n.click(),URL.revokeObjectURL(n.href)}$Define(){super.$Define(),this.classes.add(this,"pd-pane")}};s(_i,"$Pane");let no=_i;const ql=o(no);var _l=Object.defineProperty,Ul=Object.getOwnPropertyDescriptor,Gl=s((c,e,a,r)=>{for(var n=Ul(e,a),i=c.length-1,p;i>=0;i--)(p=c[i])&&(n=p(e,a,n)||n);return n&&_l(e,a,n),n},"__decorateClass$2");const Ui=class Ui extends u{constructor(){super(...arguments),this.specification=new ot}get name(){return G.reference(D.copy(this.text))?.name??""}get means(){return this.annotations.expressed(pe)}$Define(){super.$Define();const e=G.reference(D.copy(this.text));if(e===void 0)return;const a=o(C);this.annotations.add(this,t(a,{children:e.identifier}))}write(){return this.name}};s(Ui,"$Account");let sa=Ui;const Gi=class Gi extends m{$saidOfACover(e){l(e instanceof x&&e.is(L),"an account is said of a cover, and this is not one")}};s(Gi,"AccountSpecification");let ot=Gi;Gl([h("an account is said of a cover")],ot.prototype,"$saidOfACover");const Zi=class Zi extends g{get cover(){return this.$cover??this.book?.cover}get account(){return this.cover?.annotations.expressed(sa)}write(){const e=this.account,a=o(O),r=o(Ie),n=o(C);return d(w,{children:[d(a,{children:[t(r,{}),"account"]}),d(a,{children:[t(n,{children:e.means.identifier}),e.name]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-account-line")}};s(Zi,"$AccountLine");let oo=Zi;o(sa);const Zl=o(oo);var Vl=Object.defineProperty,Yl=Object.getOwnPropertyDescriptor,Ql=s((c,e,a,r)=>{for(var n=Yl(e,a),i=c.length-1,p;i>=0;i--)(p=c[i])&&(n=p(e,a,n)||n);return n&&Vl(e,a,n),n},"__decorateClass$1");const Vi=class Vi extends u{constructor(){super(...arguments),this.specification=new rt}get uuid(){return D.copy(this.text).trim()}write(){return null}};s(Vi,"$Origin");let st=Vi;const Yi=class Yi extends m{$saidOfACoverOrAMessage(e){l(e instanceof x&&e.is(L)||e instanceof ne,"an origin is said of a cover or a message, and this is neither")}};s(Yi,"OriginSpecification");let rt=Yi;Ql([h("an origin is said of a cover or a message")],rt.prototype,"$saidOfACoverOrAMessage");o(st);var Xl=Object.defineProperty,Jl=Object.getOwnPropertyDescriptor,Kl=s((c,e,a,r)=>{for(var n=Jl(e,a),i=c.length-1,p;i>=0;i--)(p=c[i])&&(n=p(e,a,n)||n);return n&&Xl(e,a,n),n},"__decorateClass");const Qi=class Qi extends u{constructor(){super(...arguments),this.specification=new it}get name(){return G.reference(D.copy(this.text))?.name??""}get means(){return this.annotations.expressed(pe)}$Define(){super.$Define();const e=G.reference(D.copy(this.text));if(e===void 0)return;const a=o(C);this.annotations.add(this,t(a,{children:e.identifier}))}write(){return this.name}};s(Qi,"$Project");let ra=Qi;const Xi=class Xi extends m{$saidOfACover(e){l(e instanceof x&&e.is(L),"a project is said of a cover, and this is not one")}};s(Xi,"ProjectSpecification");let it=Xi;Kl([h("a project is said of a cover")],it.prototype,"$saidOfACover");const Ji=class Ji extends g{get cover(){return this.$cover??this.book?.cover}get project(){return this.cover?.annotations.expressed(ra)}write(){const e=this.project,a=o(O),r=o(Ie),n=o(C);return d(w,{children:[d(a,{children:[t(r,{}),"project"]}),d(a,{children:[t(n,{children:e.means.identifier}),e.name]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-project-line")}};s(Ji,"$ProjectLine");let so=Ji;o(ra);const eh=o(so),ah=eh,Ki=class Ki extends at{constructor(){super(...arguments),this.$shown=void 0}get project(){return this.cover?.annotations.expressed(ra)}get account(){return this.cover?.annotations.expressed(sa)}get origin(){return this.cover?.annotations.expressed(st)?.uuid}write(){const e=o(ql);return d(w,{children:[super.write(),t(e,{chapter:this.cover})]})}me(){const e=o(ah),a=o(Zl);return d(w,{children:[super.me(),this.project===void 0?void 0:t(e,{cover:this.cover}),this.account===void 0?void 0:t(a,{cover:this.cover})]})}};s(Ki,"$ClaudeConversation");let ro=Ki;const Id=o(ro);o(Id,me)(Fl);o(Id,ie)($e);const ed=class ed extends Ye{};s(ed,"$ClaudesReferenceManual");let io=ed;const Rd=s(()=>d(M,{children:[t(yd,{}),t(kt,{ground:"#eef5f6",band:"#c3e3e6",bandInk:"#1c565c",foot:"#8db9bd",footInk:"#153e43",ink:"#1f5a60"}),t(wt,{x:"-46",y:"-13"}),t(I,{children:"[Dougs Library](/dougs-library/)"}),t(ft,{children:"[Doug](/dougs-story/)"}),t(gt,{children:"[Library](/dougs-library/)"}),t(fo,{children:"[The Library](/dougs-library/)"}),d(b,{children:[t($t,{}),t(ut,{children:`<svg viewBox="0 0 64 64" class="pd-illustration"><path class="light" d="M9 7h46v50H9z"/><path d="M9 7h46v50H9zM9 24h46M9 41h46"/><path class="fill" d="M13 11h5v13h-5zM20 9h4v15h-4zM26 13h6v11h-6zM34 10h4v14h-4zM40 14h6v10h-6z"/><path d="M48 24l4-12 3 1-4 11z"/><path class="fill" d="M13 28h4v13h-4zM19 30h7v11h-7zM28 27h4v14h-4zM34 31h5v10h-5zM41 28h6v13h-6zM49 29h3v12h-3z"/><path class="fill" d="M13 46h6v11h-6zM21 44h4v13h-4zM27 47h8v10h-8zM37 45h4v12h-4zM43 48h6v9h-6z"/><path d="M50 57l3-11 3 1-3 10z"/></svg>
`})]})]}),"SubjectCover$1"),Wd=s(()=>d(M,{children:[t(Qc,{}),t(Jd,{}),t(Ge,{children:Rd()}),t(kt,{ground:"#f5eedf",band:"#d9c3a3",bandInk:"#4a3626",foot:"#a3b6cc",footInk:"#2a4262",ink:"#2f4a6a"}),t(wt,{x:"-54",y:"-33"}),t(I,{children:"[Dougs Story](/dougs-story/)"}),t(ft,{children:"[Doug](/dougs-story/)"}),t(gt,{children:"[Library](/dougs-library/)"}),t(fo,{children:"[The Librarian](/dougs-story/)"}),d(b,{children:[t($t,{}),t(ut,{children:`<svg viewBox="0 0 64 64" class="pd-illustration"><path class="light" d="M8 13h23v38H8zM33 13h23v38H33z"/><path d="M8 13h23v38H8zM33 13h23v38H33z"/><path d="M13 21h13M13 27h13M13 33h9M38 21h13M38 27h13M38 33h13M38 39h8"/><path class="fill" d="M15 55 45 25l4 4-30 30-6 2z"/><path d="M15 55 45 25l4 4-30 30-6 2zM43 27l4 4M17 53l2 2"/></svg>
`})]})]}),"StoryCover"),th=s(()=>d(M,{children:[t(yd,{}),t(Ge,{children:Rd()}),t(Ge,{children:Wd()}),t(kt,{ground:"#eff1f6",band:"#c0c9df",bandInk:"#2a3a63",foot:"#8e9fc8",footInk:"#1f2d50",ink:"#2a3a63"}),t(wt,{x:"-36",y:"-26"}),t(I,{children:"[Dougs Claude](/dougs-claude/)"}),t(ft,{children:"[Doug](/dougs-story/)"}),t(gt,{children:"[Library](/dougs-library/)"}),t(fo,{children:"[Claude](/dougs-claude/)"}),d(b,{children:[t($t,{}),t(ut,{children:`<svg viewBox="0 0 64 64" class="pd-illustration"><path class="light" d="M8 30h48v27H8z"/><path d="M8 30h48v27H8zM8 44h48"/><path class="fill" d="M12 33h5v9h-5zM19 31h4v11h-4zM25 34h7v8h-7zM34 32h4v10h-4zM40 35h8v7h-8z"/><path class="fill" d="M12 47h6v8h-6zM20 48h4v7h-4zM26 46h9v9h-9zM37 49h5v6h-5zM44 47h7v8h-7z"/><path class="light" d="M28 6h28v16H40l-6 5v-5h-6z"/><path d="M28 6h28v16H40l-6 5v-5h-6z"/><path d="M33 11h18M33 16h12"/></svg>
`})]})]}),"SubjectCover"),nh=s(()=>d(M,{children:[t(kc,{}),t(Ge,{children:th()}),t(Ge,{children:Wd()}),t(kt,{ground:"#eff1f6",band:"#c0c9df",bandInk:"#2a3a63",foot:"#8e9fc8",footInk:"#1f2d50",ink:"#2a3a63"}),t(wt,{x:"-22",y:"-50"}),t(I,{children:"[Claudes Reference Manual](/claudes-reference-manual/)"}),t(ft,{children:"[Doug](/dougs-story/)"}),t(gt,{children:"[Claude](/dougs-claude/)"}),d(b,{children:[t($t,{}),t(ut,{children:`<svg viewBox="0 0 64 64" class="pd-illustration"><circle class="fill" cx="22" cy="42" r="10"/><circle class="light" cx="22" cy="42" r="3.5"/><circle cx="22" cy="42" r="3.5"/><path d="M22 29v-4M22 55v4M9 42H5M35 42h4M13 33l-3-3M31 33l3-3M13 51l-3 3M31 51l3 3"/><path class="fill" d="M44 7l3 9 9 3-9 3-3 9-3-9-9-3 9-3z"/><path d="M44 7l3 9 9 3-9 3-3 9-3-9-9-3 9-3z"/></svg>
`})]})]}),"Cover"),oh=s(()=>d(M,{children:[t(Kd,{}),d(I,{children:[t(zt,{}),"[Synopsis](/claudes-reference-manual/)"]}),d(b,{children:["What a message of Claude's is made of beyond what was said: an action and its result, an artifact and an attachment, each a writing of its own that the importer writes and the page draws as Claude's application does. They specialize what ",t(v,{children:"[my reference manual](/dougs-reference-manual/#the-conversation)"})," says a conversation is in general, a book of messages, each by a speaker at a time, with its participants on the cover; the conversations themselves are filed under ",t(v,{children:"[Our Conversations](/our-conversations/)"}),"."]})]}),"Synopsis"),sh=s(()=>d(M,{children:[t(ep,{}),t(Ep,{}),d(I,{children:[t(zt,{}),"[Table of Contents](/claudes-reference-manual/#table-of-contents)"]}),d(j,{children:[t(A,{children:"What a message of Claude's holds"}),t(b,{children:t(F,{children:"[The Action and the Result](/claudes-reference-manual/#the-action-and-the-result)"})}),t(b,{children:t(F,{children:"[The Artifact and the Attachment](/claudes-reference-manual/#the-artifact-and-the-attachment)"})}),t(b,{children:t(F,{children:"[The Project](/claudes-reference-manual/#the-project)"})}),t(b,{children:t(F,{children:"[The Account](/claudes-reference-manual/#the-account)"})}),t(b,{children:t(F,{children:"[The Origin](/claudes-reference-manual/#the-origin)"})}),t(b,{children:t(F,{children:"[The Page](/claudes-reference-manual/#the-page)"})}),t(b,{children:t(F,{children:"[The Pane](/claudes-reference-manual/#the-pane)"})}),d(b,{children:[t(zt,{}),t(O,{children:t(F,{children:"[Claudes Reference Manual](/claudes-reference-manual/)"})}),t(O,{children:t(F,{children:"[Synopsis](/claudes-reference-manual/#synopsis)"})}),t(O,{children:t(F,{children:"[Table of Contents](/claudes-reference-manual/#table-of-contents)"})})]})]}),d(j,{children:[t(A,{children:"What an import writes"}),t(b,{children:t(F,{children:"[The Imported Conversation](/claudes-reference-manual/#the-imported-conversation)"})})]})]}),"Table"),rh=s(()=>d(M,{children:[t(re,{}),t(I,{children:"[The Action and the Result](/claudes-reference-manual/#the-action-and-the-result)"}),d(b,{children:[t(se,{}),"What Claude does in a message that is not said, a search, a fetch, a run of code, a read of a file, as a writing of its own; and the result, what came back, a writing the import counts and leaves out."]}),d(j,{children:[t(A,{children:"Done, and what came back"}),d(b,{children:["A message of Claude's holds more than prose. Where he searched the web, fetched a page, ran code or read a file, the message holds an action, one line saying what was done in plain words. What came back is a result, and the import does not write it: a fetched page or a run's output is the machine's and not the conversation's, it was what filled a page when it was kept, and the export still holds it, so the import counts the results it leaves out and a result that matters is kept by hand. Neither is a paragraph of what was said, so neither is a paragraph wearing a mark: each is a writing of its own, a paragraph in shape and not in meaning, which the page can fold, show as the application does, or count. They are Claude's, so they stand in this manual and not in ",t(v,{children:"[the library's](/dougs-reference-manual/#the-conversation)"}),", where a message is said to be a speaker, a time and what was said."]})]}),t(q,{identifier:"code",type:".tsx",children:`import { $ } from '@dna-platform/chemistry';
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
`})]}),"TheActionAndTheResult1"),ih=s(()=>d(M,{children:[t(re,{}),t(I,{children:"[The Artifact and the Attachment](/claudes-reference-manual/#the-artifact-and-the-attachment)"}),d(b,{children:[t(se,{}),"A file Claude made in a message and a file given to him in one, each a figure where it entered the conversation: a card for the artifact and a chip for the file given, each opening in the pane."]}),d(j,{children:[t(A,{children:"Made, and given"}),d(b,{children:["An artifact is a file Claude made as he answered, a document, a page, a program, and went on changing as the conversation went on. The day's chapter holds an artifact where each version was made: a figure, as a code listing is, that names the version's file beside the chapter and is drawn as the application draws one, a card with a glyph for a document or for code, the artifact's title and a line to open it; every version's file stands beside the chapter and the last under its own name. Each version is also a chapter of the conversation, said to be a version, its document converted to writing at import under an opaque section and its code set in a code box; the card's caption refers to that chapter, and pressing the card opens it in ",t(v,{children:"[the pane](/claudes-reference-manual/#the-pane)"}),", where the versions can be walked. An attachment is a file given to Claude in a message, pasted or uploaded: a figure the same way, drawn as a chip at the head of the words it was given with, naming the file when the export carried its text, which it does for what was pasted and not for what was uploaded, and opening in the same pane. Both are writings of their own and not paragraphs of what was said, as ",t(v,{children:"[an action](/claudes-reference-manual/#the-action-and-the-result)"})," is; each is a figure, since what it shows is the file."]})]}),t(q,{identifier:"code",type:".tsx",children:`import { ReactNode } from 'react';
import { $, $check, $Chemical } from '@dna-platform/chemistry';
import { $Annotation, $Chapter, $Code, $Writing, AnnotationSpecification, html, identifier, specify } from '@dna-platform/public';
import type { $LibraryBook } from '../../.manual/.book';

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
`})]}),"TheArtifactAndTheAttachment2"),dh=s(()=>d(M,{children:[t(re,{}),t(I,{children:"[The Project](/claudes-reference-manual/#the-project)"}),d(b,{children:[t(se,{}),"The project a conversation with Claude was held in, said on the conversation's cover as a fact of Claude's, and the conversation with Claude that draws it."]}),d(j,{children:[t(A,{children:"Held in a project"}),t(b,{children:"In the application a conversation is held in a project, or in none, and the project holds the files Claude reads while it goes. That is a fact about Claude's conversations and not about conversations in general, so it is said here and not in the library's manual: a project is an annotation of a conversation's cover, as the author and the subject are, holding the project book's name and standing a reference to it, and the cover writes it with the form that says the project catalogues the conversation besides, so the project book's table answers it. It is not a topic. A topic is what a conversation, or a part of one, is about, and the same conversation may turn to several; the project is where it was held, one at most, whatever it turned to."}),d(b,{children:["A conversation with Claude is the library's conversation specialized here: it answers its project, and draws a project line beside its byline, a word said to be a label and the project's name leading to its book, the way back from a conversation to its project. The project book itself is ",t(v,{children:"[a project manual](/dougs-reference-manual/#the-project-manual)"}),", the files as spreads and the conversations as entries. The project has a twin, the account the conversation was held under, ",t(v,{children:"[The Account](/claudes-reference-manual/#the-account)"}),", said after it on the cover and drawn after it on the page."]})]}),t(q,{identifier:"code",type:".tsx",children:`import { ReactNode } from 'react';
import { $, $check } from '@dna-platform/chemistry';
import {
    $Annotation, $Chapter, $Cover, $Paragraph, $Reference, $Writing, AnnotationSpecification, Reference as reference,
    Word as word, binder, html, specify,
} from '@dna-platform/public';
import { Theme } from '@dna-platform/public';
import { $Conversation, Label as label, Light as light, Tone as tone } from '../../.manual/.book';
import { ApplicationForm } from './4-the-page~theme.tsx';
import { $Artifact, $Attachment } from './2-the-artifact-and-the-attachment~code.tsx';
import { Pane as pane } from './5-the-pane~code.tsx';
import { $Account, AccountLine as accountLine } from './7-the-account~code.tsx';
import { $Origin } from './8-the-origin~code.tsx';

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
const projectLine = ProjectLine;

export class $ClaudeConversation extends $Conversation {
    $shown: $Artifact | $Attachment | undefined = undefined;
    get project(): $Project | undefined { return this.cover?.annotations.expressed($Project); }
    get account(): $Account | undefined { return this.cover?.annotations.expressed($Account); }
    get origin(): string | undefined { return this.cover?.annotations.expressed($Origin)?.uuid; }

    override write(): ReactNode {
        const Pane = $(pane);
        return (
            <>
                {super.write()}
                <Pane chapter={this.cover} />
            </>
        );
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
`})]}),"TheProject3"),ph=s(()=>d(M,{children:[t(re,{}),t(I,{children:"[The Page](/claudes-reference-manual/#the-page)"}),d(b,{children:[t(se,{}),"How a conversation with Claude is shown on its page: the form the application itself gives a conversation, read off the application, and the browser this library keeps open to read it."]}),d(j,{children:[t(A,{children:"The form the application gives"}),d(b,{children:["A conversation is shown as the application shows it, since that is the form its reader knows, and annotations and flourishes come on that base. The form is read off the application's own page in a browser, element by element and style by style, and written as the theme of ",t(v,{children:"[a conversation with Claude](/claudes-reference-manual/#the-project)"}),", so that the message, the speaker, the time, the action, the artifact and the attachment are dressed as the application dresses them."]})]}),d(j,{children:[t(A,{children:"The browser this library keeps open"}),d(b,{children:["The application's pages need my sign-in, so the library opens a browser of its own, with a profile that keeps the sign-in once I have logged in there, and leaves it open with a port a later command attaches to: one command opens it on the application and keeps it open, and the others list its tabs, open a page, say what an element says, print its tree or its computed styles, photograph it, scroll to an element, hover or press one and say what changed, or name what runs past the right edge at a width. The file beside this chapter is that tool, run from the repository's root. It is an essential tool of developing this library and is opened at the start of a session, in the background, with ",t(v,{children:"[the command](/dougs-reference-manual/#developing-a-library)"})," said there: node .me/.claude/.manual/4-the-page~browser.mjs open; it stays open as a resource until I close it, and I log in there once. It is a browser and not an interface for calls: it keeps one tab per place, the application, the workbench, the built site, a file, and goes to an address in the tab it has rather than opening another, and what it leaves open is closed with its close command."]})]}),t(q,{identifier:"theme",type:".tsx",children:`import { css, RuleSet } from 'styled-components';
import { $ } from '@dna-platform/chemistry';
import { $Typeset } from '../../.manual/.book';

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
`}),t(q,{identifier:"browser",type:".mjs",children:`import { createRequire } from 'node:module';
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
`})]}),"ThePage4"),ch=s(()=>d(M,{children:[t(re,{}),t(I,{children:"[The Pane](/claudes-reference-manual/#the-pane)"}),d(b,{children:[t(se,{}),"The box beside the words where an artifact or a file given opens, as the application opens one."]}),d(j,{children:[t(A,{children:"What a pane is"}),d(b,{children:["When an artifact's card is pressed in a conversation, the artifact opens beside the words in a pane that takes half the window, the words narrowing beside it, as the application the conversations come from opens one. At the pane's head stand the artifact's title and its kind, a copy that puts the whole of it on the clipboard, and a close; in its body the version itself, a document as writing and code in its box; at its foot the version's number with an arrow to the one before and the one after, and a download that saves the version as a file. A file given to Claude opens the same way, from its chip at the head of my words, its text in the body and no foot, and an upload the export did not carry says so. The pressed card or chip reads pressed while the pane is open; pressing it again, or the close, shuts the pane. On a phone the pane covers the words. The design is ",t(v,{children:"[concept 2](/claudes-design/#a-conversation-as-the-application-shows-it)"}),"."]})]}),d(j,{children:[t(A,{children:"How a pane fits the library's patterns"}),t(b,{children:"A pane is a paragraph with content of its own, drawn as a box, as the reference manual's panel is. What it shows is a field of the conversation it stands in: the card or the chip that was pressed sets it, the pane reads it, and a press is a value set on the book, which draws once. An artifact's version is a chapter of the conversation, written at import as every message is, so the pane draws a chapter and never reads a document from a string. The chapter stands in the book's appendix, listed in a section of the table the side does not show, and is a page of the book like any other, hidden until the pane shows it, since the binder asks that every chapter be listed and the proof that every link on the page land; the days down the side are only days because the index lists no parenthetical entry. Its rules are its own, on its own element, and the conversation's theme only says where in its grid the pane stands."})]}),t(q,{identifier:"code",type:".tsx",children:`import { ElementType, MouseEvent, ReactNode } from 'react';
import { $, $Chemical, selection } from '@dna-platform/chemistry';
import { $Paragraph } from '@dna-platform/public';
import type { $Conversation } from '../../.manual/.book';
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
`})]}),"ThePane5"),lh=s(()=>d(M,{children:[t(re,{}),t(I,{children:"[The Imported Conversation](/claudes-reference-manual/#the-imported-conversation)"}),d(b,{children:[t(se,{}),"The form an import writes a conversation in, file by file, which every importer writes and the reference manuals' types read; held stable, so the manuals change how a conversation looks and behaves without a conversation being imported again."]}),d(j,{children:[t(A,{children:"Why the form is written down"}),t(b,{children:"A conversation with Claude is imported from the application's export into my library as a book, and from then on it is a book: I edit it, cut it into chapters by what they are about, annotate it, and bind it with everything else. The importer that writes it and the types that draw it are built by different hands, and the export of my second account, the older one, is read by a different parser again. So the form they meet at is said once, here, and it is the one thing about an imported conversation that does not move: a change to the look or the behaviour of a conversation is a change to the reference manuals and reaches every conversation at the next bind, and a change to this form is a change to the import, made with care and run again. The three figures at the end of this chapter are excerpts of imported chapters as they stand, cut after their first messages, not written for the purpose."})]}),d(j,{children:[t(A,{children:"The book"}),d(b,{children:["A conversation is a book in a folder of its own under the conversations book, named claude, two dashes, the slug of the conversation's title cut at sixty characters, two dashes and the first eight characters of the application's id. Its book file extends the Claude conversation of ",t(v,{children:"[The Project](/claudes-reference-manual/#the-project)"})," and declares nothing else. Its cover is the bookshelf cover of my manual with two volumes, the conversations book's cover and my story's, a scheme of six colours, a window, the participants, each a reference to a person's book, the period from the first instant to the last, the messages shown and the messages in all, the title in the reference form with its key in the paren, the author as my librarian, the subject as the conversations book, the project as Claude's own annotation, the account right after it as its twin, leading to the account's mention in Dougs Claude, the origin after the account, the application's own id of the conversation, drawn nowhere, and an illustration inserted from the file beside the cover. Its synopsis is the application's own summary as one paragraph, kept for the catalogue and never shown on the page. Its table lists the days under headings by month, each a reference to the day's chapter, then every artifact version in an appendix section headed Artifacts, each entry parenthetical, and last the parenthetical row naming the book, the synopsis and the table."]})]}),d(j,{children:[t(A,{children:"The title"}),t(b,{children:`A book is keyed apart from its title, on my ruling that the library must have no chance collisions with a conversation's name: the key is claude, two dashes, the title, two dashes and the first eight characters of the application's id, and the title is what the page shows, so the cover's title form carries the title as its words and the key in its paren, every reference to the book carries the key in its paren and the title as its words, the entry chapter in the conversations book and in a project book is titled the same way, the book's address is the slug of the key, and the ledger names the book by its key. Two conversations whose ids share those eight characters stop the run, which has not happened, so nothing is numbered, and two books may show one title and differ by key alone. A book's title is the conversation's name made sensible, and a name the application gave can hold anything, so the import writes it to the catalogue's grammar before it writes anything else, through the binder's own sanitizing, one function in its language, promised there and written nowhere twice, on my ruling that text is normalized for ids exactly the same everywhere. The grammar reads a title through the notation, so what holds for the words of a reference holds for a title, and the sanitizing makes a title hold: it is put in its normal form, what cannot be seen is removed, every run of space is one space, and a pictograph the application put first is dropped; a slash is the separator between a book and its chapter, and the grammar's escape for it, a dot before the slash, does not carry through a title today, so a slash becomes the sign that looks like one, the division slash, "TON∕Cocoon", and a backslash its lookalike, on my ruling, since neither reaches a file name, the folder being the slug; a parenthesis closes the name slot a reference may carry and a bracket of either kind opens or ends a form, so a parenthesis becomes ❨ or ❩ and a square bracket ⁅ or ⁆, the lookalikes that read closest in the three faces; a brace stays and is written as its entity, as an ampersand, a less-than and a greater-than are, by the binder's own writer; a newline ends a form and is never written. The words shown before a key's paren are never dot-escaped, since the language reads only the paren as the name; the key is, a dot in it written doubled, and neither begins with a dot and a slash, which means within here. The title's slug is the book's address, and the slug keeps every alphabet, puts the text in its normal form, drops what cannot be seen and keeps a combining mark, reads an ampersand, a plus, an at-sign, a percent sign, an equals and a not-equals as words and a sharp after a letter as the word sharp, treats every apostrophe alike, and makes a dash of any other sign, so a title must slug to something, and two keys that slug alike are one address, which the catalogue refuses. A title, a mention and a heading wear as their id the fragment of their address, which the catalogue makes from the key, so an entry titled with a key wears the key's slug, and a cover's or a synopsis's title wears the slug of its words. The same spelling of the title and the key is written wherever either stands: the cover's title form, the entry's title and its reference, and every table that lists it.`}),t(b,{children:"A conversation the application gave no name takes its title from its first message, the first sentence of it cut to a handful of words and made sensible as any title is, which is how the application names a chat itself; a first message with no words in it, a picture alone, leaves the conversation titled by the day it began, Untitled followed by the date; and the id in the key tells either apart from its like. The ledger keeps the application's own name, empty or not, beside the key the import gave, so a given name and a made one are told apart."})]}),d(j,{children:[t(A,{children:"The notation in the text"}),t(b,{children:"The catalogue reads a chapter's file for the library's notation, and it reads exactly two kinds of run: the text between tags, and a string, which is a quoted literal or a template with nothing substituted; a comment, a tag's name and an import's path are never read. A conversation's words may carry the notation's own brackets, two in a row around a term as a logic does, and read raw they form a title, a mention or a reference, refused when the form is malformed and resolved silently when it is not. So in prose, headings, items, words and captions a bracket of either kind is written as its numeric entity, which the page shows as the bracket and the scanner never matches, since only a matched form is read for entities, and the writing of it is the binder's own, the inverse of its reader, which the reference transform uses to write a form's words back into prose and the importer uses as it is, never an escape of its own; and a listing in a code box, which cannot carry an entity, is written as a template with a substitution in it whenever it holds a bracket, since a template with a substitution is not read, and its text on the page is the listing exactly."})]}),d(j,{children:[t(A,{children:"The day"}),d(b,{children:["Each day of the conversation is a chapter, numbered in order and named by the day, with the date said by Dated as a date and the day as the title. The chapter holds one Message per message, said at its instant, which with its speaker is the message's whole address, since a question and its answer may share an instant to the microsecond in the older account's export, opening with its Origin, the application's own id of the message, drawn nowhere, and then its Speaker as a reference to the person's book, mine or Claude's. What was said is the library's own writing, paragraphs, headings, lists and lines nested as written, tables, bold, emphasis, verbatim and quoted words, inline math and displayed equations, a link as a word carrying a reference; a heading is written without the bold marks the application put around its words, since a heading is set bold already and the library reads a heading apart at its colon, which left a bare colon standing as a heading with no words and no id, while emphasis and code inside a heading are kept. A block of code is ",t(v,{children:"[a code box](/dougs-reference-manual/#the-code-box)"})," with its listing as a template literal of its lines, named for its language, srt where the notation's operators stand and nothing where the application named none. A tool Claude used is ",t(v,{children:"[an action](/claudes-reference-manual/#the-action-and-the-result)"}),", its result left out. A file Claude made is ",t(v,{children:"[an artifact](/claudes-reference-manual/#the-artifact-and-the-attachment)"}),", its sentence as the caption, its file beside the chapter, the export's id of the artifact and the place of the version chapter it opens, the uncut slug of the version's title; a file given to him is an attachment with its file beside the chapter, or the sentence alone when the export carries no content. A file beside a chapter is named for the chapter and the file, chapter, tilde, name and type, the type the application gave the file and never one chosen for it, with one exception: a document the export holds only as the text extracted from it, a pdf or a spreadsheet, is written as a text file, since a document's type on a file of text would misstate it. A file stands beside a chapter only because the chapter inserts it. The message says of itself that its headings are opaque, by ",t(v,{children:"[The Address](/dougs-reference-manual/#the-address)"}),", so a heading inside an answer is not a place."]})]}),d(j,{children:[t(A,{children:"The version"}),d(b,{children:["Every version of every artifact is a chapter of the book's appendix, numbered with the appendix mark and named for the artifact and its version, marked Version and titled with the artifact's name and its version number. A document's version is one section said to be opaque, headed with the name and the number so thirteen versions wear thirteen ids, holding the document as writing; a program's version is a code box. The side hides these chapters and the card opens them in ",t(v,{children:"[the pane](/claudes-reference-manual/#the-pane)"}),"."]})]}),d(j,{children:[t(A,{children:"The entry and the ledger"}),d(b,{children:["Beside the folder, in ",t(v,{children:"[Our Conversations](/our-conversations/)"}),", the import writes one entry chapter per conversation, numbered in the order imported and named by the slug of the key: its part the month, its date the conversation's last day, the conversation's cover as a volume, the title with the key in its paren, a caption counting the exchanges and leading to the book, and the synopsis inserted from the book's own. The conversations book's table lists every entry under its month with an arrow leading into the book. The import's memory stands nowhere beside the entry: it is the origins on the writing, ",t(v,{children:"[The Origin](/claudes-reference-manual/#the-origin)"}),", the conversation's on its cover and each message's on the message, and one ledger per import configuration, a dataset regardless of the date it was exported, one file for each account beside its chapter of ",t(v,{children:"[Dougs Importer](/dougs-importer/)"}),", updated in place by every run, keyed by the conversation's id and holding neither name nor folder, which is how a later run knows a conversation is already in, has grown, or was edited by hand, and finds a book by the origin on its cover however it was renamed, moved or cut, as ",t(v,{children:"[The Ledger](/dougs-importer/#the-ledger)"})," says."]})]}),d(j,{children:[t(A,{children:"What is held stable, and what may move"}),d(b,{children:["Held stable: the folder and its five files, the file names of days, versions and resources, the tags and their attributes as the figures show them, the reference forms for a person, a day and a version, the origins, the entry and the ledger. The binder holds some of it itself and refuses a bind that breaks it: every chapter listed in its table, every link landing, every id worn once, no file beside a chapter that nothing inserts, a title with no parenthesis or bracket in it, a file stem ending in no dash. The rest is the importer's promise, in ",t(v,{children:"[The Writing](/dougs-importer/#the-writing)"}),". Free to move without an import: everything a reader sees, which is the manuals', the message's bubble and its hour, the code box's bar, the card and the chip, the pane and its column, the tally, the day count, the head that scrolls, every colour and every measure."]})]}),d(j,{children:[t(A,{children:"What the export holds that the form does not carry"}),t(b,{children:"The export carries things the form leaves out, each counted by the import and written nowhere: Claude's thinking and a tool's result, left out on my ruling; a prompt the application injected; a memory Claude read or wrote; a place card on a map; the link from a conversation to an artifact published on the web, whose published copy the export keeps in a category of its own; and a conversation captured live from the application, which holds an artifact's content as the export does not, counts its turns in its own way, and is compared with the export by when each last changed and never by count. Each is a form owed if it is ever wanted, said here first and then written, never written around."})]}),d(j,{children:[t(A,{children:"The older account"}),d(b,{children:["My older account's export is in the application's earlier shape, one archive with its own schema, and its import is being generalized by the other team to read it. It writes this same form and nothing else: a conversation from either account is one kind of book, told apart by the account its cover says, ",t(v,{children:"[The Account](/claudes-reference-manual/#the-account)"}),", the line its page draws for it, and its line in the ledger."]})]}),t(q,{identifier:"day",type:".tsx",children:`import { Bold, Chapter, Date, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action, Artifact, Attachment, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[21 March 2025](2025-03-21)</Date>
        </Dated>
        <Title>[[ 21 March 2025 ]]</Title>
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
            </Paragraph>
        </Message>
        <Message
            at="2025-03-21T18:13:37.117896Z"
        >
            <Origin>eb9c9850-9489-465a-a9ae-4b61aff35c49</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Artifact
                identifier="quantum-computing-reality-check.v1"
                type=".md"
                artifact="instagram-post"
                place="quantum-computing-reality-check-v1"
            >
                Made the artifact “Quantum Computing Reality Check”
            </Artifact>
            <Paragraph>
                Here's your Instagram post highlighting the reality of quantum computing progress versus encryption
                standards. I've formatted it for social media with key points, emoji for visual interest, and relevant
                hashtags.
            </Paragraph>
        </Message>
    </Chapter>
);
`}),t(q,{identifier:"notation",type:".tsx",children:`import { Bold, Chapter, Date, Emphasis, Paragraph, Title, Word } from '@dna-platform/public';
import { CodeBox, Dated, Message, Speaker, Verbatim } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[6 June 2026](2026-06-06)</Date>
        </Dated>
        <Title>[[ 6 June 2026 ]]</Title>
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
                {\`x =t> y        R(x,y,t)              the sole primitive
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
        </Message>
    </Chapter>
);
`}),t(q,{identifier:"version",type:".tsx",children:`import { Bold, Chapter, Heading, Paragraph, Section, Title, Word } from '@dna-platform/public';
import { Opaque } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

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
`})]}),"TheImportedConversation6"),hh=s(()=>d(M,{children:[t(re,{}),t(I,{children:"[The Account](/claudes-reference-manual/#the-account)"}),d(b,{children:[t(se,{}),"The account a conversation with Claude was held under, said on the conversation's cover as the project's twin, and the line the conversation draws for it beside the project line."]}),d(j,{children:[t(A,{children:"Two accounts, one kind of book"}),d(b,{children:["I have talked with Claude under two accounts, the one I use now and an older one, and every conversation of either is imported as the same kind of book. Which account held it is a fact of Claude's, as the project is, so it is said here and not in the library's manual: an account is an annotation of a conversation's cover, the twin of ",t(v,{children:"[the project](/claudes-reference-manual/#the-project)"}),", holding the account's name and standing a reference to it, written right after the project line. It leads to a mention and never to a chapter, on my ruling that the accounts must be free to move: the two, ",t(v,{children:"[DNA](/dougs-claude/#dna)"})," and ",t(v,{children:"[DNA Legacy](/dougs-claude/#dna-legacy)"}),", are mentioned in ",t(v,{children:"[The Accounts](/dougs-claude/#the-accounts)"}),", and a mention makes its id wherever it stands, so the cover's reference holds wherever the sections go."]}),t(b,{children:"A conversation with Claude draws an account line after its project line whenever its cover says one, a word said to be a label and the account's name leading to the mention, so a reader of any conversation sees which account it was held under without opening its record. The record says it too, in its own field, which is how the import tells the two apart; a record written before the field existed reads as the account I use now."})]}),t(q,{identifier:"code",type:".tsx",children:`import { ReactNode } from 'react';
import { $, $check } from '@dna-platform/chemistry';
import {
    $Annotation, $Chapter, $Cover, $Paragraph, $Reference, $Writing, AnnotationSpecification, Reference as reference,
    Word as word, binder, html, specify,
} from '@dna-platform/public';
import { Label as label } from '../../.manual/.book';

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
`})]}),"TheAccount7"),fh=s(()=>d(M,{children:[t(re,{}),t(I,{children:"[The Origin](/claudes-reference-manual/#the-origin)"}),d(b,{children:[t(se,{}),"The application's own id of a conversation and of each of its messages, kept on the writing as an annotation, in the object model and drawn nowhere, so an import finds a book again whatever it has been renamed to."]}),d(j,{children:[t(A,{children:"The id on the writing"}),d(b,{children:["The application gives every conversation and every message an id of its own, and the import used to keep those ids in a record beside each entry, with the book's name beside them. A name is mine to change, and I will rename conversations, move them and cut them into chapters, so a memory keyed by name loses the book it remembers. My ruling: the import's memory belongs on the writing itself, as annotations, in the object model, and it need not be surfaced. So an origin is an annotation holding the id, said of ",t(v,{children:"[the conversation](/dougs-reference-manual/#the-conversation)"}),"'s cover after ",t(v,{children:"[the account](/claudes-reference-manual/#the-account)"}),", and said of every message as its first child before the speaker. It draws nothing on the page and answers its id to code as its uuid: the conversation with Claude answers its origin from its cover, and a message's is read off the message's annotations."]}),d(b,{children:["With the ids on the writing, an import keeps one ledger per import configuration, a dataset regardless of the date it was exported, updated in place by every run, keyed by the conversation's id and holding neither name nor folder, and finds a book by the origin on its cover, so renaming, moving or cutting a book never loses it; the form is in ",t(v,{children:"[The Imported Conversation](/claudes-reference-manual/#the-imported-conversation)"}),"and the ledger in ",t(v,{children:"[The Ledger](/dougs-importer/#the-ledger)"}),"."]})]}),t(q,{identifier:"code",type:".tsx",children:`import { ReactNode } from 'react';
import { $, $check } from '@dna-platform/chemistry';
import { $Annotation, $Chapter, $Cover, $Writing, AnnotationSpecification, html, specify } from '@dna-platform/public';
import { $Message } from '../../.manual/.book';

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
`})]}),"TheOrigin8"),gh=o(io),wh=s(()=>d(gh,{children:[nh(),oh(),sh(),rh(),ih(),dh(),ph(),ch(),lh(),hh(),fh()]}),"book");export{wh as book};
