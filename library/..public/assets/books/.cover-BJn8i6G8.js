var Fi=Object.defineProperty;var n=(p,e)=>Fi(p,"name",{value:e,configurable:!0});import{jsxs as h,Fragment as v,jsx as r}from"react/jsx-runtime";import{$Theme as Ri,specify as l,$Annotation as b,$Paragraph as g,$Author as zs,Word as j,Reference as z,$Subject as ti,$Topic as si,AnnotationSpecification as u,$Word as x,$Format as F,html as D,$Chapter as w,binder as re,$Svg as Ea,Code as Ei,$Section as C,$Append as Y,$Content as Sr,$TableOfContents as X,$Parenthetical as _i,$Composition as Gi,$Image as Os,$Reference as xe,$Cover as H,$Synopsis as E,CoverSpecification as qi,$Paginated as Yi,Self as Xa,$Book as Zi,reflection as Ui,BookSpecification as Xi,Theme as ve,$Date as js,$Referent as _a,$SelfReference as oi,$Writing as Ki,$Heading as ni,$Means as Ji,Referent as Qi,identifier as Vi,SectionSpecification as Si,$Code as ed,highlighting as ad,Chapter as ri,Title as ii,Author as di,Subject as pi,About as ci,Paragraph as li,Svg as hi,Autobiography as td}from"@dna-platform/public";import{$ as s,selection as y,$check as c,inert as fi}from"@dna-platform/chemistry";import{css as f}from"styled-components";const Ls=class Ls extends Ri{constructor(){super(...arguments),this.font="'Inter', system-ui, sans-serif",this.prose="'Inter', system-ui, sans-serif",this.mono="'JetBrains Mono', ui-monospace, monospace",this.size="0.875rem",this.leading="1.6",this.measure="44rem",this.spreadColumn="15.5rem",this.space="1.5rem",this.holdsColumn="240px",this.barHeight="50px",this.beat="320ms",this.narrow="48rem",this.phoneWidth="390px",this.colour="#4e9eb9",this.accent="#166178",this.bar="#0c1b1f",this.barInk="#ffffff",this.barDim="#a9bcc1",this.barOn="rgba(255, 255, 255, 0.11)",this.barLine="#1d3339",this.mark="#c8f4fb",this.side="#e3f5fa",this.sideInk="#10252c",this.sideDim="#516770",this.sideOn="#ffffff",this.sideLine="#cbe6ee",this.night="#0c1b1f",this.deep="#14323c",this.blue="#166178",this.sea="#4e9eb9",this.sky="#8fc8dc",this.opal="#c8f4fb",this.pale="#e3f5fa",this.mist="#f1f7f9",this.white="#ffffff",this.ink="#10252c",this.soft="#516770",this.line="#dbe7ec",this.me="#e8590c",this.wash="linear-gradient(105deg, #e2f6fb 0%, #ecf0fd 52%, #fae9f4 100%)",this.serif="'Source Serif 4', Georgia, serif",this.between="'Source Sans 3', 'Inter', system-ui, sans-serif",this.bookPaper="#fbf9f3",this.bookInk="#29251d",this.heading="#10252c",this.capital="#166178",this.lit="#166178",this.faint="#8792a2",this.paper="#ffffff",this.panel="#f1f7f9",this.rule="#dbe7ec",this.edge="transparent",this.tint="#e3f5fa",this.dusk="#14323c",this.glow="#cfe6e3",this.dim="#4f7672",this.keyword="#8ad7ff",this.string="#ffd48a",this.type="#9be3d6",this.comment="#5f8a86",this.haze="#a9bcc1",this.glass="rgba(255, 255, 255, 0.62)",this.binding="linear-gradient(160deg, #16303a, #0c1b1f)",this.spine="inset 5px 0 0 rgba(0, 0, 0, 0.14), inset 6px 0 0 rgba(255, 255, 255, 0.12), 0 10px 20px -10px rgba(0, 0, 0, 0.45)",this.shadow="0 0.75rem 1.4rem -0.9rem rgba(12, 27, 31, 0.55)",this.volume="11.5rem",this.cover="8.25rem",this.card="18rem",this.barLight="#ffffff",this.barMid="#f1f7f9",this.barDeep="#e3f5fa",this.barShadow="none",this.sideLight="#ffffff",this.sideDeep="#e3f5fa",this.codeGround="#f1f7f9",this.hairline="1px",this.stroke="2px",this.rise="-1px",this.gloss="none",this.ring="0 0 0 2px #c8f4fb",this.decisionShadow="none",this.photo="7rem",this.radius="0.375rem",this.barTint="#ffffff",this.skyInk="#166178",this.lift="inset 5px 0 0 rgba(0, 0, 0, 0.14), inset 6px 0 0 rgba(255, 255, 255, 0.12), 0 14px 24px -12px rgba(0, 0, 0, 0.5)",this.openSpine="inset 7px 0 0 rgba(0, 0, 0, 0.14), inset 8px 0 0 rgba(255, 255, 255, 0.12), 0 12px 22px -14px rgba(0, 0, 0, 0.5)",this.sans="'Inter', system-ui, sans-serif",this.muted="#516770",this.bubble="rgba(16, 37, 44, 0.05)",this.shade="rgba(16, 37, 44, 0.03)",this.pill="#166178",this.column="48rem",this.style=y.div`${this.parts()}`}parts(){return[this.page(),this.writing(),this.links(),this.figures(),this.listings(),this.switches(),this.turns(),this.illustrations(),this.marks(),this.library(),this.head(),this.holds(),this.context(),this.tones()]}page(){return f`
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
        `}};n(Ls,"$LibraryBookTheme");let K=Ls;const sd=s(K);var od=Object.defineProperty,nd=Object.getOwnPropertyDescriptor,rd=n((p,e,a,o)=>{for(var t=nd(e,a),i=p.length-1,d;i>=0;i--)(d=p[i])&&(t=d(e,a,t)||t);return t&&od(e,a,t),t},"__decorateClass$o");const Fs=class Fs extends b{constructor(){super(...arguments),this.specification=new Ue}defines(e){e.classes.add(this,"pa-label")}erase(e){e.classes.revert(this)}};n(Fs,"$Label");let Ka=Fs;const Rs=class Rs extends u{$saidOfAWord(e){c(e instanceof x,"label is said of a word, and this is not one")}};n(Rs,"LabelSpecification");let Ue=Rs;rd([l("label is said of a word")],Ue.prototype,"$saidOfAWord");const Ga=s(Ka),Es=class Es extends g{get cover(){return this.$cover??this.book?.cover}write(){const e=this.cover.annotations.expressed(zs),a=s(j),o=s(Ga),t=s(z);return h(v,{children:[h(a,{children:[r(o,{}),"by"]}),h(a,{children:[r(t,{children:e.means.identifier}),e.name]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-byline")}};n(Es,"$Byline");let Ja=Es;const _s=class _s extends g{get cover(){return this.$cover??this.book?.cover}write(){const e=this.cover.annotations.expressed(ti),a=s(j),o=s(Ga),t=s(z);return h(v,{children:[h(a,{children:[r(o,{}),"subject"]}),h(a,{children:[r(t,{children:e.means.identifier}),e.name]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-subject-line")}};n(_s,"$SubjectLine");let Qa=_s;const Gs=class Gs extends g{get cover(){return this.$cover??this.book?.cover}get topics(){return this.cover?.annotations.find(si)??[]}write(){const e=s(j),a=s(Ga),o=s(z);return h(v,{children:[h(e,{children:[r(a,{}),"topic"]}),this.topics.map((t,i)=>h(e,{children:[r(o,{children:t.means.identifier}),t.name]},i))]})}$Define(){super.$Define(),this.classes.add(this,"pd-topic-line")}};n(Gs,"$TopicLine");let Va=Gs;const gi=s(Ja),id=s(Qa),dd=s(Va);var pd=Object.defineProperty,cd=Object.getOwnPropertyDescriptor,ld=n((p,e,a,o)=>{for(var t=cd(e,a),i=p.length-1,d;i>=0;i--)(d=p[i])&&(t=d(e,a,t)||t);return t&&pd(e,a,t),t},"__decorateClass$n");const qs=class qs extends u{$saidOfABook(e){c(e instanceof L,"this is said of a book of this library, and here it is said of something else")}};n(qs,"OfABookSpecification");let T=qs;ld([l("this is said of a book of this library")],T.prototype,"$saidOfABook");const Ys=class Ys extends x{get on(){return[this.book.$is].flat().includes(this.$annotation)}$Switch(...e){this.$Writing(...e),this.containers.replace(this,"span","button")}container(e){return super.container({type:"button","aria-pressed":this.on,onClick:n(()=>this.press(),"onClick"),...e})}press(){const e=this.book,a=[e.$is].flat();e.$is=this.on?a.filter(o=>o!==this.$annotation):[this.$annotation,...a]}$Define(){super.$Define(),this.classes.add(this,"pd-switch")}};n(Ys,"$Switch");let ze=Ys;const Zs=class Zs extends ze{press(){const e=this.book,a=[e.$is].flat().filter(o=>!this.$family.includes(o));e.$is=[this.$annotation,...a]}};n(Zs,"$Tab");let Oe=Zs;const qa=s(ze),hd=s(Oe);var fd=Object.defineProperty,gd=Object.getOwnPropertyDescriptor,bi=n((p,e,a,o)=>{for(var t=gd(e,a),i=p.length-1,d;i>=0;i--)(d=p[i])&&(t=d(e,a,t)||t);return t&&fd(e,a,t),t},"__decorateClass$m");const Us=class Us extends F{constructor(){super(...arguments),this.specification=new je,this.style=y.div`
        .pa-coloured { --colour: ${e=>e.$colour}; }
    `}get colour(){return D.copy(this.text).trim()}$Coloured(...e){this.$Format(...e);const a=this.style;this._painted=o=>r(a,{$colour:this.colour,...o})}defines(e){e.classes.add(this,"pa-coloured"),e.containers.add(this,this._painted)}erase(e){e.classes.revert(this),e.containers.revert(this)}};n(Us,"$Coloured");let J=Us;const Xs=class Xs extends u{$saidOfAChapterOrAParagraph(e){c(e instanceof w||e instanceof g,"coloured is said of a chapter or a paragraph, and this is neither")}$givenItsColour(e){c(/^#[0-9a-f]{6}$/iu.test(e.annotations.expressed(J)?.colour??""),"coloured is given its colour as six hex digits, and this one was given something else")}};n(Xs,"ColouredSpecification");let je=Xs;bi([l("coloured is said of a chapter or a paragraph")],je.prototype,"$saidOfAChapterOrAParagraph");bi([l("coloured is given its colour")],je.prototype,"$givenItsColour");const Yc=s(J);var bd=Object.defineProperty,ud=Object.getOwnPropertyDescriptor,Ds=n((p,e,a,o)=>{for(var t=ud(e,a),i=p.length-1,d;i>=0;i--)(d=p[i])&&(t=d(e,a,t)||t);return t&&bd(e,a,t),t},"__decorateClass$l");const Ks=class Ks extends F{constructor(){super(...arguments),this.specification=new ie}get identifier(){return re.reference(D.copy(this.text))?.identifier??""}get name(){return re.reference(D.copy(this.text))?.name??""}get entry(){return this.book?.chapterAt(this.identifier)}get drawing(){const e=this.entry?.text.find(g).flatMap(a=>a.text.find(Ea))[0];return e===void 0?"":D.copy(e.text).trim()}get colour(){return this.entry?.annotations.expressed(J)?.colour??""}$Keyed(...e){this.$Format(...e);const a=s(md);this._layer=o=>h("div",{...o,children:[r(a,{keyed:this}),o.children]})}defines(e){e.classes.add(this,"pa-keyed"),e.containers.add(this,this._layer)}erase(e){e.classes.revert(this),e.containers.revert(this)}};n(Ks,"$Keyed");let q=Ks;const Js=class Js extends x{constructor(){super(...arguments),this.style=y.span`
        --colour: ${e=>e.$colour};
    `}$Icon(...e){this.$Writing(...e);const a=this.style;this._painted=o=>r(a,{$colour:this.$keyed?.colour??"",...o}),this.containers.replace(this,"span",this._painted)}write(){return r("span",{className:"pd-drawing",role:"img","aria-label":this.$keyed?.name,dangerouslySetInnerHTML:{__html:this.$keyed?.drawing??""}})}$Define(){super.$Define(),this.classes.add(this,"pd-icon")}};n(Js,"$Icon");let Sa=Js;const Qs=class Qs extends u{$saidOfAChapter(e){c(e instanceof w,"keyed is said of a chapter, and this is not one")}$namesAnEntry(e){const a=e.annotations.expressed(q)?.entry;c(a!==void 0&&a.annotations.expressed(q)?.entry===a,"keyed names an entry of the key, a chapter of this book keyed as itself, and this one names something else")}$entryHoldsItsDrawingAndColour(e){const a=e.annotations.expressed(q)?.entry;a!==void 0&&c(a.text.find(g).flatMap(o=>o.text.find(Ea)).length===1&&a.is(J),"an entry of the key holds one drawing and its colour, and this one holds something else")}};n(Qs,"KeyedSpecification");let ie=Qs;Ds([l("keyed is said of a chapter")],ie.prototype,"$saidOfAChapter");Ds([l("keyed names an entry of the key")],ie.prototype,"$namesAnEntry");Ds([l("an entry of the key holds one drawing and its colour")],ie.prototype,"$entryHoldsItsDrawingAndColour");const Zc=s(q),ui=s(Sa),md=ui;var $d=Object.defineProperty,kd=Object.getOwnPropertyDescriptor,vd=n((p,e,a,o)=>{for(var t=kd(e,a),i=p.length-1,d;i>=0;i--)(d=p[i])&&(t=d(e,a,t)||t);return t&&$d(e,a,t),t},"__decorateClass$k");const yd={tsx:"typescript",ts:"typescript",mjs:"javascript",js:"javascript",css:"css",html:"xml",svg:"xml",json:"json",md:"markdown"},wd='<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"><path d="M6 4.5 3.5 8 6 11.5M10 4.5 12.5 8 10 11.5"/></svg>',ye=n(p=>`${p.$identifier}${p.$type}`,"fileNameOf"),xd=n(p=>p===void 0?[]:D.copy(p.text).split(`
`),"fileLinesOf"),mi=n(p=>p?.chapter?.annotations.expressed(P),"spreadOf"),Vs=class Vs extends g{constructor(){super(...arguments),this.$family=[]}get name(){return this.$file===void 0?"":ye(this.$file)}get language(){return yd[(this.$file?.$type??"").replace(/^\./u,"")]??""}get spread(){return mi(this.$file)}get chapter(){return this.$file?.chapter??super.chapter}$FileListing(...e){this.$Writing(...e),this.containers.replace(this,"span","div")}container(e){return super.container({onClick:n(()=>this.press(),"onClick"),...e})}press(){if(this.$filePanelState===void 0)return;const e=this.book,a=[e.$is].flat().filter(o=>!this.$family.includes(o));e.$is=[this.$filePanelState,...a]}write(){const e=s(j),a=s(Ei);return h(v,{children:[r(e,{children:this.name}),r(a,{identifier:this.$file?.$identifier,type:this.$file?.$type,language:this.language,numbered:!0})]})}$Define(){super.$Define(),this.classes.add(this,"pd-file-listing");const e=s(jd);this.annotations.add(this,r(e,{}))}};n(Vs,"$FileListing");let Xe=Vs;const Ss=class Ss extends b{constructor(){super(...arguments),this.specification=new Ke}defines(e){const a=e;a.$file!==void 0&&a.spread?.openFile===a.$file&&e.classes.add(this,"pa-open")}erase(e){e.classes.revert(this)}};n(Ss,"$OpenListing");let et=Ss;const eo=class eo extends u{$isAFileListing(e){c(e instanceof Xe,"an open listing is a file listing, and this is not one")}};n(eo,"OpenListingSpecification");let Ke=eo;vd([l("an open listing is a file listing")],Ke.prototype,"$isAFileListing");const ao=class ao extends Oe{constructor(){super(...arguments),this.$skeleton=!1,this.style=y.button`
        --colour: ${e=>e.$colour};
    `}get on(){const e=this.$file?.chapter;return e!==void 0&&e===this.book.open&&this.spread?.openFile===this.$file}get name(){return this.$file===void 0?"":ye(this.$file)}get spread(){return mi(this.$file)}get colour(){return this.$file?.chapter?.annotations.expressed(q)?.colour??""}get lines(){return xd(this.$file)}get chapter(){return this.$file?.chapter??super.chapter}$FileTab(...e){this.$Switch(...e),this.containers.replace(this,"button",this.style)}container(e){return super.container({$colour:this.colour,...e})}press(){const e=this.spread;e!==void 0&&(e.$openFile=this.$file),this.$annotation!==void 0&&super.press()}write(){return h(v,{children:[r("span",{className:"pd-drawing",dangerouslySetInnerHTML:{__html:wd}}),r("span",{className:"pd-tab-name",children:this.name}),this.$skeleton?r("span",{className:"pd-skeleton",children:this.lines.slice(0,14).map((e,a)=>r("i",{style:{width:`${Math.max(12,Math.min(100,e.length*2.2))}%`}},a))}):void 0]})}$Define(){super.$Define(),this.classes.add(this,"pd-file-tab")}};n(ao,"$FileTab");let at=ao;const zd=s(Xe),Od=s(et),Ps=s(at),jd=Od;var Dd=Object.defineProperty,Pd=Object.getOwnPropertyDescriptor,Ad=n((p,e,a,o)=>{for(var t=Pd(e,a),i=p.length-1,d;i>=0;i--)(d=p[i])&&(t=d(e,a,t)||t);return t&&Dd(e,a,t),t},"__decorateClass$j");const La=class La extends b{constructor(){super(...arguments),this.specification=new T}defines(e){for(const a of e.annotations.after(this))a instanceof La&&e.annotations.express(a,!1);e.classes.add(this,"pa-file-panel-state")}erase(e){e.classes.revert(this)}};n(La,"$FilePanelState");let de=La;const to=class to extends de{defines(e){super.defines(e),e.classes.add(this,"pa-code-forward")}};n(to,"$CodeForward");let tt=to;const so=class so extends de{defines(e){super.defines(e),e.classes.add(this,"pa-words-forward")}};n(so,"$WordsForward");let st=so;const oo=class oo extends de{defines(e){super.defines(e),e.classes.add(this,"pa-split")}};n(oo,"$Split");let ot=oo;const no=class no extends b{constructor(){super(...arguments),this.specification=new T}defines(e){e.classes.add(this,"pa-light-code")}erase(e){e.classes.revert(this)}};n(no,"$LightCode");let nt=no;const ro=class ro extends b{constructor(){super(...arguments),this.specification=new T}defines(e){e.classes.add(this,"pa-wrapped-code")}erase(e){e.classes.revert(this)}};n(ro,"$WrappedCode");let rt=ro;const io=class io extends b{constructor(){super(...arguments),this.specification=new T}defines(e){e.classes.add(this,"pa-numbered-code")}erase(e){e.classes.revert(this)}};n(io,"$NumberedCode");let it=io;const po=class po extends b{constructor(){super(...arguments),this.specification=new Qe}defines(e){e.classes.add(this,"pa-brief")}erase(e){e.classes.revert(this)}};n(po,"$Brief");let Je=po;const co=class co extends u{$saidOfAParagraph(e){c(e instanceof g,"brief is said of a paragraph, and this is not one")}};n(co,"BriefSpecification");let Qe=co;Ad([l("brief is said of a paragraph")],Qe.prototype,"$saidOfAParagraph");s(de);const As=s(tt),Cs=s(st),De=s(ot),Cd=s(nt),Id=s(rt),$i=s(it),Uc=s(Je),lo=class lo extends g{constructor(){super(...arguments),this.style=y.div`
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
    `}get spread(){return this.chapter?.annotations.expressed(P)}$FileRail(...e){this.$Writing(...e),this.containers.replace(this,"span",this.style)}write(){const e=s(Ps),a=this.spread;if(a!==void 0)return a.files.map(o=>r(e,{file:o,annotation:De,family:a.filePanelStates,skeleton:!0},ye(o)))}$Define(){super.$Define(),this.classes.add(this,"pd-file-rail")}};n(lo,"$FileRail");let dt=lo;const ho=class ho extends Oe{constructor(){super(...arguments),this.style=y.button`
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
    `}get paragraphs(){return(this.chapter?.text.find(C)??[]).flatMap(e=>e.text.find(g)).slice(0,16).map(e=>D.copy(e.text))}$FilePanelGrip(...e){this.$Switch(...e),this.containers.replace(this,"button",this.style)}write(){return r("span",{className:"pd-skeleton",children:this.paragraphs.map((e,a)=>r("i",{style:{width:`${Math.max(25,Math.min(100,e.length/4))}%`}},a))})}$Define(){super.$Define(),this.classes.add(this,"pd-file-panel-grip")}};n(ho,"$FilePanelGrip");let pt=ho;const Nd=s(dt),Md=s(pt),fo=class fo extends g{constructor(){super(...arguments),this.style=y.div`
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
    `}get spread(){return this.chapter?.annotations.expressed(P)}$FilePanel(...e){this.$Writing(...e),this.containers.replace(this,"span",this.style)}write(){const e=s(Wd),a=s(zd),o=this.spread;if(o!==void 0)return h(v,{children:[r(e,{chapter:this.chapter}),r("div",{className:"pd-file-listings",children:o.files.map(t=>r(a,{file:t,filePanelState:As,family:o.filePanelStates},ye(t)))})]})}$Define(){super.$Define(),this.classes.add(this,"pd-file-panel")}};n(fo,"$FilePanel");let ct=fo;const go=class go extends g{constructor(){super(...arguments),this.style=y.div`
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
    `}get spread(){return this.chapter?.annotations.expressed(P)}$FilePanelBar(...e){this.$Writing(...e),this.containers.replace(this,"span",this.style)}write(){const e=s(Ps),a=s(hd),o=s(qa),t=this.spread,i=this.chapter;if(t!==void 0)return h(v,{children:[t.files.map(d=>r(e,{file:d},ye(d))),r("span",{className:"pd-words-only",children:r(a,{chapter:i,annotation:Cs,family:t.filePanelStates,children:"words"})}),r("span",{className:"pd-dock pd-to-full",children:r(a,{chapter:i,annotation:As,family:t.filePanelStates,children:"full screen"})}),r("span",{className:"pd-dock pd-to-split",children:r(a,{chapter:i,annotation:De,family:t.filePanelStates,children:"split"})}),h("span",{className:"pd-options",children:[r(o,{chapter:i,annotation:Cd,children:"light"}),r(o,{chapter:i,annotation:Id,children:"wrap"}),r(o,{chapter:i,annotation:$i,children:"lines"})]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-file-panel-bar")}};n(go,"$FilePanelBar");let lt=go;const Td=s(ct),Bd=s(lt),Wd=Bd;var Hd=Object.defineProperty,Ld=Object.getOwnPropertyDescriptor,Fd=n((p,e,a,o)=>{for(var t=Ld(e,a),i=p.length-1,d;i>=0;i--)(d=p[i])&&(t=d(e,a,t)||t);return t&&Hd(e,a,t),t},"__decorateClass$i");const bo=class bo extends F{constructor(){super(...arguments),this.specification=new Ve,this.$openFile=void 0,this.grid=y.div`
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
    `}get files(){return this.parent.annotations.find(Y).reverse()}get openFile(){return this.$openFile??this.files[0]}get filePanelStates(){return[Cs,De,As]}$Spread(...e){this.$Format(...e);const a=this.grid,o=s(Td),t=s(Nd),i=s(Md);this.style=({className:d,children:m})=>{const $=this.parent,k=[...$.classes].includes("pa-open");return h(a,{className:`${d??""}${k?" pa-open":""}`.trim(),children:[r("div",{className:"pd-words",children:m}),k?h(v,{children:[r(o,{chapter:$}),r(t,{chapter:$}),r(i,{chapter:$,annotation:De,family:this.filePanelStates})]}):void 0]})}}defines(e){super.defines(e),e.classes.add(this,"pa-spread")}erase(e){super.erase(e),e.classes.revert(this)}};n(bo,"$Spread");let P=bo;const uo=class uo extends u{$isAChapter(e){c(e instanceof w,"a spread is a chapter read beside its files, and this is not a chapter")}};n(uo,"SpreadSpecification");let Ve=uo;Fd([l("a spread is a chapter read beside its files")],Ve.prototype,"$isAChapter");const Xc=s(P);var Rd=Object.defineProperty,Ed=Object.getOwnPropertyDescriptor,qe=n((p,e,a,o)=>{for(var t=Ed(e,a),i=p.length-1,d;i>=0;i--)(d=p[i])&&(t=d(e,a,t)||t);return t&&Rd(e,a,t),t},"__decorateClass$h");const ki='<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3.5 10.5 8 6 12.5"/></svg>',_d='<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linejoin="round" stroke-linecap="round"><rect class="ground" x="0.75" y="0.75" width="14.5" height="14.5"/><path d="M3.5 5.5h3l1.5 1.5h4.5v5h-9z"/></svg>',mo=class mo extends F{constructor(){super(...arguments),this.specification=new aa,this.style=y.div`
        ${e=>e.$schemeDeclarations===void 0?"":`.pa-entry { ${e.$schemeDeclarations} }`}
    `}get place(){return I(this.parent).identifier}get referencedChapter(){return this.book.chapterAt(this.place)}get cover(){return this.referencedChapter?.annotations.expressed(M)?.cover??this.book.coverOf(this.place)}get schemeDeclarations(){const e=this.cover?.annotations.expressed(_);if(e!==void 0)return e.declarations;const a=this.referencedChapter?.annotations.expressed(J)?.colour;return a===void 0?void 0:`--colour: ${a};`}$Entry(...e){this.$Format(...e);const a=this.style;this._painted=o=>r(a,{$schemeDeclarations:this.schemeDeclarations,...o})}defines(e){e.classes.add(this,"pa-entry"),e.containers.add(this,this._painted),(this.place===this.book?.$bookmark||this.place===this.book.open?.mention?.identifier)&&e.classes.add(this,"pa-open")}erase(e){e.classes.revert(this),e.containers.revert(this)}};n(mo,"$Entry");let Q=mo;const $o=class $o extends b{constructor(){super(...arguments),this.specification=new ea}defines(e){e.classes.add(this,"pa-appendix")}erase(e){e.classes.revert(this)}};n($o,"$Appendix");let Pe=$o;const ko=class ko extends b{constructor(){super(...arguments),this.specification=new Se}get entries(){return this.chapter.text.find(C).flatMap(a=>a.text.find(g)).filter(a=>!a.is(_i)&&I(a)!==void 0)}$Bound(){const e=s(Yd),a=s(xi),o=s(Ps),t=this.book;for(const i of this.entries){i.annotations.add(this,r(e,{}));const d=t.chapterAt(I(i).identifier)?.annotations.expressed(P);if(d===void 0)continue;const m=d.files;i.text.add(this,r(a,{foldedWriting:m.length===0?void 0:i,annotation:wi}),...m.map($=>r(o,{file:$,annotation:De,family:d.filePanelStates},ye($))))}super.$Bound()}};n(ko,"$Index");let Z=ko;const vo=class vo extends u{$isATableOfContents(e){c(e.is(X),"an index is a table of contents, and this chapter is not one")}};n(vo,"IndexSpecification");let Se=vo;qe([l("an index is a table of contents")],Se.prototype,"$isATableOfContents");const yo=class yo extends u{$isASectionOfTheTable(e){c(e instanceof C&&e.chapter?.is(X)===!0,"the appendix is a section of the table of contents, and this is not one")}};n(yo,"AppendixSpecification");let ea=yo;qe([l("the appendix is a section of the table of contents")],ea.prototype,"$isASectionOfTheTable");const wo=class wo extends u{$isARowThatLeadsSomewhere(e){c(e instanceof g&&I(e)!==void 0,"an entry is a row that leads somewhere, and this is not one")}};n(wo,"EntrySpecification");let aa=wo;qe([l("an entry is a row that leads somewhere")],aa.prototype,"$isARowThatLeadsSomewhere");const xo=class xo extends b{constructor(){super(...arguments),this.specification=new sa}defines(e){e.classes.add(this,"pa-folded")}erase(e){e.classes.revert(this)}};n(xo,"$Folded");let ht=xo;const zo=class zo extends ze{get on(){return this.$foldedWriting!==void 0&&[this.$foldedWriting.$is].flat().includes(this.$annotation)}container(e){return super.container({...e,disabled:this.$foldedWriting===void 0,onClick:n(a=>{a.preventDefault(),this.press()},"onClick")})}press(){const e=this.$foldedWriting;if(e===void 0)return;const a=[e.$is].flat();e.$is=this.on?a.filter(o=>o!==this.$annotation):[this.$annotation,...a]}write(){return r("span",{className:"pd-drawing",dangerouslySetInnerHTML:{__html:ki}})}$Define(){super.$Define(),this.classes.add(this,"pd-fold-chevron")}};n(zo,"$FoldChevron");let ft=zo;const Oo=class Oo extends F{constructor(){super(...arguments),this.specification=new oa,this.tree=y.div`
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
    `}get section(){return this.parent}get firstPlace(){return this.section.text.find(g).map(e=>I(e)).find(e=>e!==void 0)?.identifier}get part(){const e=this.firstPlace;return e===void 0?void 0:this.book.chapterAt(e)?.part}get open(){const e=this.book.open;return e!==void 0&&e.part?.name===this.part?.name}$TreeFolder(...e){this.$Format(...e);const a=this.tree,o=s(xi),t=s(j),i=s(z);this.style=({className:d,children:m})=>{const $=this.firstPlace,k=[...this.section.classes].includes("pa-open"),O=r("span",{className:"pd-drawing pd-tree-folder-mark",dangerouslySetInnerHTML:{__html:_d}});return h(a,{className:`${d??""} pd-tree-folder${k?" pa-open":""}`.trim(),children:[r(o,{foldedWriting:this.section,annotation:wi}),$===void 0?O:h(t,{children:[r(i,{children:$}),O]}),m]})}}defines(e){super.defines(e),e.classes.add(this,"pa-tree-folder"),this.open&&e.classes.add(this,"pa-open")}erase(e){super.erase(e),e.classes.revert(this)}};n(Oo,"$TreeFolder");let ta=Oo;const jo=class jo extends u{$saidOfASectionOrAnEntry(e){c(e instanceof C&&e.chapter?.is(X)===!0||e.is(Q),"folded is said of a section of a table of contents or of an entry, and this is neither")}};n(jo,"FoldedSpecification");let sa=jo;qe([l("folded is said of a section of a table of contents or of an entry")],sa.prototype,"$saidOfASectionOrAnEntry");const Do=class Do extends u{$isASectionOfTheTable(e){c(e instanceof C&&e.chapter?.is(X)===!0,"a tree folder is a section of the table of contents, and this is not one")}};n(Do,"TreeFolderSpecification");let oa=Do;qe([l("a tree folder is a section of the table of contents")],oa.prototype,"$isASectionOfTheTable");const Po=class Po extends g{get cover(){return this.$cover??this.book?.cover}write(){const e=this.cover,a=s(j),o=s(z);return h(a,{children:[r(o,{children:e.mention.identifier}),r("span",{className:"pd-drawing",dangerouslySetInnerHTML:{__html:ki}}),e.title.name]})}$Define(){super.$Define(),this.classes.add(this,"pd-tree-root")}};n(Po,"$TreeRoot");let gt=Po;const I=n(p=>p.annotations.expressed(Sr)??p.text.find(x).map(e=>e.annotations.expressed(Sr)).find(e=>e!==void 0),"contentOf"),vi=s(Q),Kc=s(Z),Jc=s(Pe),Is=s(ht),Gd=s(ft),yi=s(ta),qd=s(gt),Yd=vi,wi=Is,xi=Gd;var Zd=Object.defineProperty,Ud=Object.getOwnPropertyDescriptor,te=n((p,e,a,o)=>{for(var t=Ud(e,a),i=p.length-1,d;i>=0;i--)(d=p[i])&&(t=d(e,a,t)||t);return t&&Zd(e,a,t),t},"__decorateClass$g");const Ya=n((p,e)=>{const a=new Set(p.text.find(e));return p.text.find(Gi).flatMap(o=>[...a.has(o)?[o]:[],...Ya(o,e)])},"within"),Ao=class Ao extends b{constructor(){super(...arguments),this.specification=new V}get identifier(){return re.reference(D.copy(this.text))?.identifier??""}get name(){return re.reference(D.copy(this.text))?.name??""}get cover(){const e=this.identifier;return this.chapter?.annotations.find(M).map(a=>a.cover).find(a=>a?.mention?.identifier===e)}defines(e){e.classes.add(this,"pa-design")}erase(e){e.classes.revert(this)}};n(Ao,"$Design");let N=Ao;const Co=class Co extends b{constructor(){super(...arguments),this.specification=new na}defines(e){e.classes.add(this,"pa-exhibit")}erase(e){e.classes.revert(this)}};n(Co,"$Exhibit");let Ae=Co;const Io=class Io extends b{constructor(){super(...arguments),this.specification=new ra,this.$number=0,this.span=y.span.attrs({className:"pd-plate"})``}note(){const e=this.span;return h(v,{children:[r(e,{children:String(this.$number).padStart(2,"0")}),r("span",{className:"pd-jacket-mini"})]})}defines(e){e.classes.add(this,"pa-plate")}erase(e){e.classes.revert(this)}};n(Io,"$Plate");let bt=Io;const No=class No extends F{constructor(){super(...arguments),this.specification=new ia,this.themeProvider=!0,this.room=y.div`
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
    `}get chapter(){return this.parent}get design(){return this.chapter.annotations.expressed(N)}get plate(){return this.book.chapters.filter(e=>e.is(N)).indexOf(this.chapter)+1}$Room(...e){this.$Format(...e);const a=this.room;this.style=({className:o,children:t})=>{const i=[...this.chapter.classes].includes("pa-open");return ne(this.design?.cover,h(a,{className:`${o??""} pd-room${i?" pa-open":""}`.trim(),children:[r("span",{className:"pd-plate",children:String(this.plate).padStart(2,"0")}),t]}))}}defines(e){super.defines(e),e.classes.add(this,"pa-room")}erase(e){super.erase(e),e.classes.revert(this)}};n(No,"$Room");let ut=No;const Mo=class Mo extends g{get references(){const e=this.book?.means?.identifier??"",a=new Map;for(const o of Ya(this.chapter,x)){if(o.parent===this)continue;const t=o.annotations.expressed(xe)?.identifier;if(t===void 0||t.startsWith(e)||a.has(t))continue;const i=D.copy(o.text);a.set(t,re.reference(i)?.name??i.trim())}return[...a]}write(){const e=s(j),a=s(z);return this.references.map(([o,t],i)=>h(e,{children:[r(a,{children:o}),t,r("span",{className:"pd-where",children:o.replace(/^\/dougs-/u,"").replace(/\/#?/u," · ").replace(/ · $/u,"").replace(/-/gu," ")})]},i))}$Define(){super.$Define(),this.classes.add(this,"pd-built-in")}};n(Mo,"$BuiltIn");let mt=Mo;const To=class To extends u{$isAChapter(e){c(e instanceof w,"a design is a chapter, and this is not one")}$namesABook(e){c((e.annotations.expressed(N)?.identifier??"")!=="","a design names the book it is of, and this one names nothing")}$holdsTheCover(e){c(e.annotations.expressed(N)?.cover!==void 0,"a design holds the cover of the book it is of, as a volume, and this one holds none")}$showsItselfAsBuilt(e){c(e instanceof w&&Ya(e,g).some(a=>a.is(Ae)),"a design shows itself as built, in a paragraph said to be the exhibit, and this one shows nothing")}};n(To,"DesignSpecification");let V=To;te([l("a design is a chapter")],V.prototype,"$isAChapter");te([l("a design names the book it is of")],V.prototype,"$namesABook");te([l("a design holds the cover of the book it is of")],V.prototype,"$holdsTheCover");te([l("a design shows itself as built")],V.prototype,"$showsItselfAsBuilt");const Bo=class Bo extends u{$isAParagraphOfADesignHoldingOneImage(e){c(e instanceof g&&e.chapter?.is(N)===!0&&e.text.find(Os).length===1,"an exhibit is a paragraph of a design that holds one image, and this is not one")}};n(Bo,"ExhibitSpecification");let na=Bo;te([l("an exhibit is a paragraph of a design that holds one image")],na.prototype,"$isAParagraphOfADesignHoldingOneImage");const Wo=class Wo extends u{$saidOfAnEntryLeadingToADesign(e){c(e.is(Q)&&e.annotations.expressed(Q)?.referencedChapter?.is(N)===!0,"a plate is said of an entry that leads to a design, and this is not one")}};n(Wo,"PlateSpecification");let ra=Wo;te([l("a plate is said of an entry that leads to a design")],ra.prototype,"$saidOfAnEntryLeadingToADesign");const Ho=class Ho extends u{$isADesign(e){c(e instanceof w&&e.is(N),"a room is a chapter that is a design, and this is not one")}};n(Ho,"RoomSpecification");let ia=Ho;te([l("a room is a chapter that is a design")],ia.prototype,"$isADesign");const Qc=s(N),Vc=s(Ae),Xd=s(bt),Kd=s(ut),Jd=s(mt);var Qd=Object.defineProperty,Vd=Object.getOwnPropertyDescriptor,W=n((p,e,a,o)=>{for(var t=Vd(e,a),i=p.length-1,d;i>=0;i--)(d=p[i])&&(t=d(e,a,t)||t);return t&&Qd(e,a,t),t},"__decorateClass$f");const ne=n((p,e,a)=>{const o=p?.annotations.expressed(_)?.painted;return o===void 0?e:r(o,{children:e},a)},"painted"),Lo=class Lo extends H{constructor(){super(...arguments),this.specification=new le}get name(){return this.chapter?.title?.name??""}get author(){return this.chapter?.annotations.expressed(zs)?.name??""}get illustration(){return this.chapter?.text.find(g).find(e=>e.is(Ce))}get drawing(){const e=this.illustration?.text.find(Ea)[0];return e===void 0?"":D.copy(e.text).trim()}get scheme(){return this.chapter?.annotations.expressed(_)}get window(){return this.chapter?.annotations.expressed(ce)}};n(Lo,"$BookshelfCover");let pe=Lo;const Fo=class Fo extends b{constructor(){super(...arguments),this.specification=new ca}defines(e){e.classes.add(this,"pa-illustration")}erase(e){e.classes.revert(this)}};n(Fo,"$Illustration");let Ce=Fo;const Ro=class Ro extends F{constructor(){super(...arguments),this.specification=new Ie,this.$ground="",this.$band="",this.$bandInk="",this.$foot="",this.$footInk="",this.$ink="",this.style=y.div.attrs({className:"pd-scheme"})`
        ${e=>e.$scheme}
    `}get colours(){return[this.$ground,this.$band,this.$bandInk,this.$foot,this.$footInk,this.$ink]}get declarations(){return`--ground: ${this.$ground}; --band: ${this.$band}; --band-ink: ${this.$bandInk}; --foot: ${this.$foot}; --foot-ink: ${this.$footInk}; --ink: ${this.$ink};`}get painted(){return this._painted}$Scheme(...e){this.$Format(...e);const a=this.style;this._painted=o=>r(a,{$scheme:this.declarations,...o})}defines(e){e.classes.add(this,"pa-scheme"),e.containers.add(this,this._painted)}erase(e){e.classes.revert(this),e.containers.revert(this)}};n(Ro,"$Scheme");let _=Ro;const Eo=class Eo extends b{constructor(){super(...arguments),this.specification=new Ne,this.$x="",this.$y=""}get declarations(){return`--window-x: ${this.$x}px; --window-y: ${this.$y}px;`}};n(Eo,"$Window");let ce=Eo;const _o=class _o extends b{constructor(){super(...arguments),this.specification=new Me}get cover(){return this._cover}get jacket(){return this._cover?.annotations.expressed(H)}$Volume(...e){this._cover=e.find(a=>a instanceof w),this.$Annotation(...e.filter(a=>a!==this._cover))}defines(e){e.classes.add(this,"pa-volume")}erase(e){e.classes.revert(this)}};n(_o,"$Volume");let M=_o;const Go=class Go extends g{get cover(){return this.$cover?.annotations.expressed(H)}$Jacket(...e){this.$Writing(...e),this._painted=a=>{const o=this.cover?.scheme?.painted;return o===void 0?r("div",{...a}):r(o,{...a})},this.containers.add(this,this._painted)}write(){const e=this.cover;if(e===void 0)return;const a=s(j),o=s(Ga);return h(v,{children:[r(a,{children:e.name}),r("span",{className:"pd-drawing",dangerouslySetInnerHTML:{__html:e.drawing}}),h(a,{children:[r(o,{}),e.author]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-jacket")}};n(Go,"$Jacket");let $t=Go;const qo=class qo extends g{constructor(){super(...arguments),this.unfolded=!1}get filedElsewhere(){return this.$subject!==void 0&&this.$subject!==this.$cover}container(e){return super.container({onMouseOver:n(a=>{a.target instanceof Element&&a.target.closest(".pd-filed")!==null&&this.unfold()},"onMouseOver"),onMouseLeave:n(()=>this.fold(),"onMouseLeave"),...e})}unfold(){this.unfolded=!0}fold(){this.unfolded=!1}write(){const e=this.$cover,a=this.$subject;if(e!==void 0)return h(v,{children:[this.filedElsewhere?ne(a,r("span",{className:"pd-filed",children:this.mark(a)})):void 0,ne(e,r("span",{className:"pd-own",children:this.mark(e)})),h("span",{className:"pd-names",children:[ne(e,r("span",{className:"pd-name",children:this.name(e)})),this.filedElsewhere?ne(a,r("span",{className:"pd-name pd-under",children:this.name(a)})):void 0]})]})}mark(e){const a=s(op),o=s(z);return r(a,{cover:e,children:r(o,{children:e.mention.identifier})})}name(e){const a=s(j),o=s(z);return h(a,{children:[r(o,{children:e.mention.identifier}),e.title.name]})}$Define(){super.$Define(),this.classes.add(this,"pd-logo");const e=s(np);this.annotations.add(this,r(e,{}))}};n(qo,"$Logo");let da=qo;const Yo=class Yo extends b{constructor(){super(...arguments),this.specification=new pa}defines(e){e.unfolded&&e.classes.add(this,"pa-unfolded")}erase(e){e.classes.revert(this)}};n(Yo,"$Unfolded");let kt=Yo;const Zo=class Zo extends u{$saidOfALogo(e){c(e instanceof da,"unfolded is said of a logo, and this is not one")}};n(Zo,"UnfoldedSpecification");let pa=Zo;W([l("unfolded is said of a logo")],pa.prototype,"$saidOfALogo");const Uo=class Uo extends x{constructor(){super(...arguments),this.style=y.span`
        ${e=>e.$vars}
    `}get cover(){return this.$cover?.annotations.expressed(H)}$Mark(...e){this.$Writing(...e);const a=this.style;this._painted=o=>r(a,{$vars:`${this.cover?.scheme?.declarations??""} ${this.cover?.window?.declarations??""}`,...o}),this.containers.add(this,this._painted)}write(){return r("span",{className:"pd-drawing",dangerouslySetInnerHTML:{__html:this.cover?.drawing??""}})}$Define(){super.$Define(),this.classes.add(this,"pd-mark")}};n(Uo,"$Mark");let vt=Uo;const Xo=class Xo extends qi{$carriesItsScheme(e){c(e.is(_),"a bookshelf cover carries its scheme, and this one carries none")}$carriesItsWindow(e){c(e.is(ce),"a bookshelf cover carries its window, and this one carries none")}$carriesItsIllustration(e){c(e instanceof w&&e.text.find(g).some(a=>a.is(Ce)),"a bookshelf cover carries its illustration, and this one carries none")}};n(Xo,"BookshelfCoverSpecification");let le=Xo;W([l("a bookshelf cover carries its scheme")],le.prototype,"$carriesItsScheme");W([l("a bookshelf cover carries its window")],le.prototype,"$carriesItsWindow");W([l("a bookshelf cover carries its illustration")],le.prototype,"$carriesItsIllustration");const Ko=class Ko extends u{$saidOfADrawing(e){c(e instanceof g&&e.chapter?.is(H)===!0&&e.text.find(Ea).length===1,"an illustration is a paragraph of a cover that holds one drawing, and this is not one")}};n(Ko,"IllustrationSpecification");let ca=Ko;W([l("an illustration is a paragraph of a cover that holds one drawing")],ca.prototype,"$saidOfADrawing");const Jo=class Jo extends u{$isACover(e){c(e instanceof w&&e.is(H),"a cover has a scheme, and this is not a cover")}$givenItsColours(e){const a=e.annotations.expressed(_)?.colours??[];c(a.every(o=>/^#[0-9a-f]{6}$/iu.test(o)),"a scheme is given its six colours as six hex digits each — the ground, the band and its ink, the foot and its ink, and the ink of the drawing — and this one was given something else")}};n(Jo,"SchemeSpecification");let Ie=Jo;W([l("a cover has a scheme")],Ie.prototype,"$isACover");W([l("a scheme is given its six colours")],Ie.prototype,"$givenItsColours");const Qo=class Qo extends u{$isACover(e){c(e instanceof w&&e.is(H),"a cover has a window, and this is not a cover")}$givenItsPlace(e){const a=e.annotations.expressed(ce);c(/^-?\d+$/u.test(a?.$x??"")&&/^-?\d+$/u.test(a?.$y??""),"a window is given where it stands on the drawing, two whole numbers, and this one was given something else")}};n(Qo,"WindowSpecification");let Ne=Qo;W([l("a cover has a window")],Ne.prototype,"$isACover");W([l("a window is given where it stands on the drawing")],Ne.prototype,"$givenItsPlace");const Vo=class Vo extends u{$saidOfAChapterStandingForABook(e){c(e instanceof w&&(e.is(E)||e.is(H)||e.is(N)),"a volume is a chapter that stands for another book, a synopsis of it, a cover filed under it or a design of it, and this is none")}$holdsTheCover(e){const a=[e.annotations.expressed(E)?.means?.identifier,e.annotations.expressed(ti)?.means?.identifier,e.annotations.expressed(zs)?.means?.identifier,e.annotations.expressed(N)?.identifier];c(e.annotations.find(M).every(o=>o.cover?.is(H)===!0&&a.includes(o.cover.mention?.identifier)),"a volume holds the cover of a book its chapter stands for, the book a synopsis or a design is of or the subject or author a cover is filed under, and one here holds something else")}};n(Vo,"VolumeSpecification");let Me=Vo;W([l("a volume is a chapter that stands for another book")],Me.prototype,"$saidOfAChapterStandingForABook");W([l("a volume holds the cover of a book its chapter stands for")],Me.prototype,"$holdsTheCover");const Sd=s(pe),zi=s(Ce),Oi=s(_),ji=s(ce),ep=s(M),ap=s($t),tp=s(da),sp=s(kt),Di=s(vt),op=Di,np=sp,Fa=class Fa extends Yi{constructor(){super(...arguments),this.specification=new T,this.themeProvider=!0,this.style=y.div`
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
    `}get pages(){return this.book.pages}get open(){const e=this.book;return e.open??e.synopsis}$Bound(){const e=this.style,a=this.book;this.style=o=>r(e,{$at:a.means?.identifier,$scheme:a.cover?.annotations.expressed(_)?.declarations,...o}),super.$Bound()}defines(e){for(const o of e.annotations.after(this))o instanceof Fa&&e.annotations.express(o,!1);super.defines(e),e.classes.add(this,"pa-layout");const a=this.book.open;a!==void 0&&e.classes.add(this,"pa-turned"),a?.is(P)&&e.classes.add(this,"pa-manual")}erase(e){super.erase(e),e.classes.revert(this)}parts(){return[this.paging(),this.regions(),this.areas(),this.phone()]}paging(){return f`
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
        `}};n(Fa,"$Layout");let Te=Fa;const Za=s(Te),Ra=class Ra extends b{constructor(){super(...arguments),this.specification=new T}defines(e){for(const a of e.annotations.after(this))a instanceof Ra&&e.annotations.express(a,!1);e.classes.add(this,"pa-tone")}erase(e){e.classes.revert(this)}};n(Ra,"$Tone");let he=Ra;const So=class So extends he{defines(e){super.defines(e),e.classes.add(this,"pa-dark")}};n(So,"$Dark");let yt=So;const en=class en extends he{defines(e){super.defines(e),e.classes.add(this,"pa-light")}};n(en,"$Light");let wt=en;const an=class an extends he{defines(e){super.defines(e),e.classes.add(this,"pa-white-over-black")}};n(an,"$WhiteOverBlack");let xt=an;const se=s(he),Pi=s(yt),we=s(wt),rp=s(xt);var ip=Object.defineProperty,dp=Object.getOwnPropertyDescriptor,pp=n((p,e,a,o)=>{for(var t=dp(e,a),i=p.length-1,d;i>=0;i--)(d=p[i])&&(t=d(e,a,t)||t);return t&&ip(e,a,t),t},"__decorateClass$e");const tn=class tn extends x{write(){const e=this.book.body;return`${e.indexOf(this.chapter)+1} of ${e.length}`}$Define(){super.$Define(),this.classes.add(this,"pd-count")}};n(tn,"$Count");let zt=tn;const sn=class sn extends b{constructor(){super(...arguments),this.specification=new Be}defines(e){e.classes.add(this,"pa-before")}erase(e){e.classes.revert(this)}};n(sn,"$Before");let Ot=sn;const on=class on extends b{constructor(){super(...arguments),this.specification=new Be}defines(e){e.classes.add(this,"pa-after")}erase(e){e.classes.revert(this)}};n(on,"$After");let jt=on;const nn=class nn extends u{$saidOfAWordOfATurn(e){c(e instanceof x&&e.parent instanceof la,"this is said of a word of a turn, and here it is said of something else")}};n(nn,"OfATurnSpecification");let Be=nn;pp([l("this is said of a word of a turn")],Be.prototype,"$saidOfAWordOfATurn");const cp=s(zt),lp=s(Ot),hp=s(jt),rn=class rn extends g{get before(){const e=this.book.body;return e[e.indexOf(this.chapter)-1]??this.chapter}get after(){const e=this.book.body;return e[e.indexOf(this.chapter)+1]??this.chapter}write(){const e=s(j),a=s(cp),o=s(lp),t=s(hp),i=s(this.before===this.chapter?Xa:z),d=s(this.after===this.chapter?Xa:z);return h(v,{children:[h(e,{children:[r(o,{}),r(i,{children:this.before.mention.identifier}),"← ",this.before.title.name]}),r(a,{}),h(e,{children:[r(t,{}),r(d,{children:this.after.mention.identifier}),this.after.title.name," →"]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-turn")}};n(rn,"$Turn");let la=rn;const fp=s(la);var gp=Object.defineProperty,bp=Object.getOwnPropertyDescriptor,Ye=n((p,e,a,o)=>{for(var t=o>1?void 0:o?bp(e,a):e,i=p.length-1,d;i>=0;i--)(d=p[i])&&(t=(o?d(e,a,t):d(t))||t);return o&&t&&gp(e,a,t),t},"__decorateClass$d");const dn=class dn extends Zi{constructor(){super(...arguments),this.specification=new B}get chapters(){return this.text.find(w).filter(e=>[...e.classes].includes("pd-canonical"))}get laidOutChapters(){return[this.cover,this.synopsis,this.table,...this.chapters]}get pages(){return[this.synopsis,...this.chapters].filter(e=>e!==void 0)}get body(){const e=this.appendix;return this.chapters.filter(a=>!e.includes(a))}get appendix(){const e=this.table;if(e===void 0)return[];const a=e.text.find(C).filter(o=>o.is(Pe)).flatMap(o=>o.text.find(g).map(t=>I(t)?.identifier));return this.chapters.filter(o=>a.includes(o.mention?.identifier??""))}get open(){return this.$bookmark===void 0?void 0:this.chapterAt(this.$bookmark)}get tones(){return[Pi,we,rp]}get topics(){return this.cover?.annotations.find(si)??[]}write(){return h(v,{children:[r("div",{className:"pd-library",children:this.library()}),r("div",{className:"pd-me",children:this.me()}),r("div",{className:"pd-holds",children:this.holds()}),r("div",{className:"pd-head",children:this.head()}),h("div",{className:"pd-pages",children:[this.aboveThePages(),this.pages.map((e,a)=>{const o=s(e);return r(o,{},a)}),this.belowThePages()]})]})}library(){if(this._logo===void 0)return;const e=s(this._logo);return r(e,{})}me(){const e=s(Di),a=s(z),o=s(dd),t=this.coverOf(this.author?.means?.identifier);return h(v,{children:[this.byline(),t===void 0?void 0:this.painted(t,r(e,{cover:t,children:r(a,{children:t.mention.identifier})})),this.topics.length===0?void 0:r(o,{cover:this.cover})]})}painted(e,a,o){return ne(e,a,o)}holds(){const e=s(this.table);return r(e,{})}head(){const e=s(this.cover);return h(v,{children:[r(e,{}),r("div",{className:"pd-switches",children:this.switches()})]})}aboveThePages(){}belowThePages(){}chapterAt(e){return(this._chapterByPlace??this.chapterByPlace()).get(e)}chapterByPlace(){const e=new Map;for(const a of this.chapters)for(const o of this.sections(a))o.mention!==void 0&&!e.has(o.mention.identifier)&&e.set(o.mention.identifier,a);for(const a of this.chapters)a.mention!==void 0&&e.set(a.mention.identifier,a);return e}coverOf(e){if(e!==void 0)return this.means?.identifier===e?this.cover:this.cover?.annotations.find(M).map(a=>a.cover).find(a=>a?.mention?.identifier===e)}byline(){const e=s(gi);return r(e,{chapter:this.cover})}root(){const e=s(qd);return r(e,{cover:this.cover})}switches(){}sections(e){return e.text.find(C).flatMap(a=>[a,...this.sections(a)])}sectionOf(e){const a=this.table;return a===void 0?void 0:this.sections(a).find(o=>o.canonical?.name===e.name)}turn(){this.bookmark!==this.cover&&super.turn()}$Define(){super.$Define();const e=s(Za),a=s(se);this.annotations.add(this,r(e,{}),r(a,{}))}$Bound(){this._chapterByPlace=this.chapterByPlace();const e=s(yi),a=this.table?.annotations.expressed(X);for(const i of a?.parts??[]){const d=this.sectionOf(i);d===void 0||d.is(ta)||!i.chapters.some(m=>m.is(P))||d.annotations.add(this,r(e,{}))}const o=this.root();o!==void 0&&this.table?.text.add(this,o);const t=s(tp);this._logo=Ui.chemical(r(t,{cover:this.cover,subject:this.coverOf(this.subject?.means?.identifier)}),this),this.turns(),super.$Bound()}turns(){const e=s(fp);for(const a of this.body)a.text.add(this,r(e,{}))}};n(dn,"$LibraryBook");let L=dn;Ye([fi()],L.prototype,"_chapterByPlace",2);const pn=class pn extends Xi{$holdsOnlyChapters(e){c([...e.text].every(a=>a instanceof w),"a book of this library holds only chapters, and this one holds something else")}$placesEveryChapter(e){c(e.text.find(w).every(a=>e.laidOutChapters.includes(a)),"a book of this library has a place for every chapter it holds, and this one holds a chapter it places nowhere")}$onlyAChapterAppends(e){c(e.text.find(w).every(a=>e.chapters.includes(a)||!a.is(Y)),"only an ordinary chapter files a file, and here a cover, a synopsis or a table of contents files one")}$listsEachManualPart(e){const o=(e.table?.annotations.expressed(X)?.parts??[]).find(t=>t.chapters.some(i=>i.is(P))&&e.sectionOf(t)===void 0);c(o===void 0,`a part read as a manual is listed under a section headed with its name, and "${o?.name}" has none`)}};n(pn,"LibraryBookSpecification");let B=pn;Ye([l("a book of this library holds only chapters")],B.prototype,"$holdsOnlyChapters",1);Ye([l("a book of this library has a place for every chapter it holds")],B.prototype,"$placesEveryChapter",1);Ye([l("only an ordinary chapter files a file")],B.prototype,"$onlyAChapterAppends",1);Ye([l("a part read as a manual is listed under a section headed with its name")],B.prototype,"$listsEachManualPart",1);const Ai=s(L);s(Ai,ve)(sd);s(Ai,se)(Pi);var up=Object.defineProperty,mp=Object.getOwnPropertyDescriptor,$p=n((p,e,a,o)=>{for(var t=mp(e,a),i=p.length-1,d;i>=0;i--)(d=p[i])&&(t=d(e,a,t)||t);return t&&up(e,a,t),t},"__decorateClass$c");const cn=class cn extends L{constructor(){super(...arguments),this.specification=new We}get open(){return super.open??this.body[0]}head(){}switches(){}root(){}$Define(){super.$Define(),this.$is=[Cs,$i]}$Bound(){const e=s(yi);for(const a of this.table?.text.find(C)??[])a.annotations.add(this,r(e,{})),a.is(Pe)&&(a.$is=[Is]);super.$Bound()}};n(cn,"$Manual");let ha=cn;const ln=class ln extends B{$everyChapterHasABrief(e){c(e.chapters.every(a=>a.text.find(g).some(o=>o.is(Je))),"every chapter of a manual opens with a brief, and one here has none")}};n(ln,"ManualSpecification");let We=ln;$p([l("every chapter of a manual opens with a brief")],We.prototype,"$everyChapterHasABrief");const Ns=s(ha);s(Ns,se)(we);var kp=Object.defineProperty,vp=Object.getOwnPropertyDescriptor,Ms=n((p,e,a,o)=>{for(var t=vp(e,a),i=p.length-1,d;i>=0;i--)(d=p[i])&&(t=d(e,a,t)||t);return t&&kp(e,a,t),t},"__decorateClass$b");const hn=class hn extends b{constructor(){super(...arguments),this.specification=new fe}get date(){return this.text.find(js)[0]}defines(e){e.classes.add(this,"pa-dated")}erase(e){e.classes.revert(this)}note(){const e=s(this.date);return r(e,{})}};n(hn,"$Dated");let U=hn;const fn=class fn extends u{$saidOfAChapter(e){c(e instanceof w,"dated is said of a chapter, and this is not one")}$datedOnce(e){c(e.annotations.containsOne(U),"a chapter is dated once, and this one is dated more than once")}$givenOneDate(e){c(e.annotations.expressed(U)?.text.find(js).length===1,"a dated chapter is given one date, and this one is given none or more than one")}};n(fn,"DatedSpecification");let fe=fn;Ms([l("dated is said of a chapter")],fe.prototype,"$saidOfAChapter");Ms([l("a chapter is dated once")],fe.prototype,"$datedOnce");Ms([l("a dated chapter is given one date")],fe.prototype,"$givenOneDate");const Sc=s(U),gn=class gn extends Q{constructor(){super(...arguments),this.label=y.span.attrs({className:"pa-number"})``}get number(){return this.book.body.indexOf(this.referencedChapter)+1}get keyed(){return this.referencedChapter?.annotations.expressed(q)}note(){const e=this.label,a=s(ui),o=this.keyed;return h(v,{children:[super.note(),o===void 0?void 0:r(a,{keyed:o}),this.number===0?void 0:r(e,{children:String(this.number)})]})}};n(gn,"$NumberedEntry");let Dt=gn;const yp=s(Dt);s(Ns,vi)(yp);const bn=class bn extends pe{constructor(){super(...arguments),this.style=y.header`
        .pd-chapter.pa-cover { margin-block: 0; }
        .pa-cover .pd-title {
            font-size: calc(1.04 * ${({theme:e})=>e.size});
            font-weight: 600;
        }
    `}};n(bn,"$ManualCover");let Pt=bn;const un=class un extends X{constructor(){super(...arguments),this.style=y.nav`
        .pa-table-of-contents .pa-reference { color: inherit; text-decoration: none; }
    `}};n(un,"$ManualTableOfContents");let At=un;const el=s(Pt),al=s(At),mn=class mn extends K{constructor(){super(...arguments),this.measure="104ch",this.holdsColumn="272px",this.barHeight="52px",this.space="24px",this.size="14px",this.beat="0.22s",this.serif="'Source Serif 4', Georgia, serif",this.paper="#fdfcfa",this.ink="#343c4a",this.heading="#1a1f36",this.soft="#727d8c",this.faint="#9ea8b5",this.line="#e4e9f2",this.tint="#f0f4fc",this.barTint="#f8fafe",this.side="#f7f8fb",this.sideInk="#3a4452",this.sideDim="#6b7684",this.sideLine="#e0e4eb",this.sky="#e3edfb",this.skyInk="#4a6ea0",this.accent="#4a6ea0",this.colour="#4fb3a8",this.radius="6px",this.wash="linear-gradient(135deg, #f1f5fd 0%, #fdfcfa 48%, #fdf5ee 100%)"}parts(){return[...super.parts(),this.tree(),this.icons(),this.small()]}library(){return f`
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
        `}};n(mn,"$ManualTheme");let Ct=mn;const wp=s(Ct);s(Ns,ve)(wp);var xp=Object.defineProperty,zp=Object.getOwnPropertyDescriptor,Op=n((p,e,a,o)=>{for(var t=zp(e,a),i=p.length-1,d;i>=0;i--)(d=p[i])&&(t=d(e,a,t)||t);return t&&xp(e,a,t),t},"__decorateClass$a");const $n=class $n extends b{constructor(){super(...arguments),this.specification=new fa}defines(e){e.classes.add(this,"pa-first")}erase(e){e.classes.revert(this)}};n($n,"$First");let It=$n;const kn=class kn extends u{$saidOfAParagraph(e){c(e instanceof g,"first is said of a paragraph, and this is not one")}};n(kn,"FirstSpecification");let fa=kn;Op([l("first is said of a paragraph")],fa.prototype,"$saidOfAParagraph");const tl=s(It),vn=class vn extends K{constructor(){super(...arguments),this.serif="'Source Serif 4', Georgia, serif",this.paper="#fdfcfa",this.ink="#343c4a",this.soft="#727d8c",this.faint="#9ea8b5",this.line="#e4e9f2",this.tint="#f0f4fc",this.barTint="#f8fafe",this.sky="#e3edfb",this.skyInk="#4a6ea0",this.accent="#4a6ea0",this.wash="linear-gradient(135deg, #f2f6fd 0%, #fdfcfa 48%, #fdf6f1 100%)",this.side="#f7f8fb",this.sideInk="#3a4452",this.sideDim="#7f8a9b",this.sideLine="#e3e7ee",this.barHeight="52px",this.holdsColumn="232px",this.space="24px",this.cover="132px",this.volume="184px",this.radius="6px",this.spine="inset 3px 0 0 rgba(0, 0, 0, 0.08), inset 4px 0 0 rgba(255, 255, 255, 0.35), 0 6px 12px -10px rgba(44, 52, 64, 0.3)",this.lift="inset 3px 0 0 rgba(0, 0, 0, 0.08), inset 4px 0 0 rgba(255, 255, 255, 0.35), 0 10px 16px -12px rgba(44, 52, 64, 0.35)",this.openSpine="inset 7px 0 0 rgba(0, 0, 0, 0.07), inset 9px 0 0 rgba(255, 255, 255, 0.45), 0 12px 22px -16px rgba(44, 52, 64, 0.35)"}parts(){return[...super.parts(),this.shelf(),this.jackets(),this.desk(),this.unfolded(),this.small()]}page(){return f`
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
        `}};n(vn,"$Bookshelf");let Nt=vn;const jp=s(Nt);var Dp=Object.defineProperty,Pp=Object.getOwnPropertyDescriptor,Ua=n((p,e,a,o)=>{for(var t=o>1?void 0:o?Pp(e,a):e,i=p.length-1,d;i>=0;i--)(d=p[i])&&(t=(o?d(e,a,t):d(t))||t);return o&&t&&Dp(e,a,t),t},"__decorateClass$9");const yn=class yn extends L{get books(){return this.text.find(w).filter(e=>e.is(E)&&e!==this.synopsis)}get laidOutChapters(){return[...super.laidOutChapters,...this.books]}get pages(){return[this.synopsis,...this.books,...this.chapters]}head(){return r("div",{className:"pd-switches",children:this.switches()})}belowThePages(){return r("div",{className:"pd-shelf",children:this.volumes()})}volumes(){const e=s(j),a=s(z);return(this.table?.annotations.expressed(Z)?.entries??[]).map((t,i)=>{const d=I(t).identifier,m=this.chapterAt(d),$=m===void 0?this.coverOf(d):this.jacketOf(m);if($!==void 0)return h("div",{className:"pd-volume",children:[this.jacket($,d),r("div",{className:"pd-paragraph pd-name",children:h(e,{children:[r(a,{children:d}),$.title.name]})})]},i)})}jacket(e,a){if(e===void 0)return;const o=s(ap),t=s(z);return a===void 0?r(o,{cover:e}):r(o,{cover:e,children:r(t,{children:a})})}line(e){if(e===void 0)return;const a=s(gi),o=s(id);return h(v,{children:[r(a,{cover:e}),r(o,{cover:e})]})}wayIntoTheBook(e){if(e===void 0)return;const a=s(j),o=s(z),t=e.mention.identifier;return r("div",{className:"pd-paragraph pd-read",children:h(a,{children:[r(o,{children:t}),`Read ${e.title.name}`]})})}jacketOf(e){return e===this.synopsis?this.cover:e.annotations.expressed(M)?.cover??(this.appendix.includes(e)?void 0:this.cover)}coverOf(e){return super.coverOf(e)??this.books.map(a=>a.annotations.expressed(M)?.cover).find(a=>a!==void 0&&a.mention?.identifier===e)}chapterAt(e){return super.chapterAt(e)??this.books.find(a=>this.placeOf(a)===e)}placeOf(e){const a=e.title?.annotations.expressed(_a)?.identifier,o=this.means?.identifier;if(!(a===void 0||o===void 0))return`${o.replace(/\/+$/u,"")}/#${a}`}$Bound(){const e=s(Np);for(const a of[this.synopsis,...this.books])a?.annotations.add(this,r(e,{}));super.$Bound()}};n(yn,"$Catalogue");let Mt=yn;const wn=class wn extends F{constructor(){super(...arguments),this.specification=new ga,this.card=y.div`
        &:not(.pa-open) { display: none; }
    `}get chapter(){return this.parent}get catalogue(){return this.book}get isTheFront(){return this.chapter===this.catalogue.synopsis}get cover(){return this.catalogue.jacketOf(this.chapter)}$CatalogueDesk(...e){this.$Format(...e);const a=s(qa),o=this.card;this.style=({className:t,children:i})=>{const d=this.catalogue,m=this.cover,$=[...this.chapter.classes].includes("pa-open"),k=this.isTheFront?s(d.title):void 0;return d.painted(m,h(o,{className:`${t??""} pd-catalogue-desk${$?" pa-open":""}`.trim(),children:[d.jacket(m),h("div",{className:"pd-words",children:[k===void 0?void 0:r(k,{}),i]}),m===void 0||this.isTheFront?void 0:r("div",{className:"pd-line",children:d.line(m)}),d.wayIntoTheBook(m),m===void 0?void 0:r(a,{chapter:this.chapter,annotation:Ip,children:"read on"})]}))}}defines(e){super.defines(e),e.classes.add(this,"pa-catalogue-desk")}erase(e){super.erase(e),e.classes.revert(this)}};n(wn,"$CatalogueDesk");let Tt=wn;const xn=class xn extends u{$holdsASynopsis(e){c(e instanceof w&&e.is(E),"a catalogue desk holds a synopsis, and this is not one")}};n(xn,"CatalogueDeskSpecification");let ga=xn;Ua([l("a catalogue desk holds a synopsis")],ga.prototype,"$holdsASynopsis",1);const zn=class zn extends oi{get identifier(){return this._book??super.identifier}$Bound(){super.$Bound(),this._book=this.chapter?.annotations.expressed(E)?.means?.identifier}};n(zn,"$BookLink");let ba=zn;Ua([fi()],ba.prototype,"_book",2);const On=class On extends b{constructor(){super(...arguments),this.specification=new ua}defines(e){e.classes.add(this,"pa-caption")}erase(e){e.classes.revert(this)}};n(On,"$Caption");let Bt=On;const jn=class jn extends b{constructor(){super(...arguments),this.specification=new ma}defines(e){e.classes.add(this,"pa-arrow")}erase(e){e.classes.revert(this)}};n(jn,"$Arrow");let Wt=jn;const Dn=class Dn extends b{constructor(){super(...arguments),this.specification=new T}defines(e){e.classes.add(this,"pa-unfolded-desk")}erase(e){e.classes.revert(this)}};n(Dn,"$UnfoldedDesk");let Ht=Dn;const Pn=class Pn extends u{$isAParagraph(e){c(e instanceof g,"a caption is a paragraph, and this is not one")}};n(Pn,"CaptionSpecification");let ua=Pn;Ua([l("a caption is a paragraph")],ua.prototype,"$isAParagraph",1);const An=class An extends u{$isAWordOfTheTable(e){c(e instanceof x&&e.chapter?.is(X)===!0,"an arrow is a word of the table of contents, and this is not one")}};n(An,"ArrowSpecification");let ma=An;Ua([l("an arrow is a word of the table of contents")],ma.prototype,"$isAWordOfTheTable",1);const Ts=s(Mt),Ap=s(Tt),Cp=s(ba),sl=s(Bt),ol=s(Wt),Ip=s(Ht),Np=Ap;s(Ts,Xa)(Cp);s(Ts,ve)(jp);s(Ts,se)(we);var Mp=Object.defineProperty,Tp=Object.getOwnPropertyDescriptor,Ze=n((p,e,a,o)=>{for(var t=Tp(e,a),i=p.length-1,d;i>=0;i--)(d=p[i])&&(t=d(e,a,t)||t);return t&&Mp(e,a,t),t},"__decorateClass$8");const Cn=class Cn extends b{constructor(){super(...arguments),this.specification=new ka}defines(e){e.classes.add(this,"pa-question")}erase(e){e.classes.revert(this)}};n(Cn,"$Question");let Lt=Cn;const In=class In extends b{constructor(){super(...arguments),this.specification=new va}defines(e){e.classes.add(this,"pa-answer")}erase(e){e.classes.revert(this)}};n(In,"$Answer");let Ft=In;const Nn=class Nn extends b{constructor(){super(...arguments),this.specification=new ya}defines(e){e.classes.add(this,"pa-decision")}erase(e){e.classes.revert(this)}};n(Nn,"$Decision");let $a=Nn;const Mn=class Mn extends b{constructor(){super(...arguments),this.specification=new wa}defines(e){e.classes.add(this,"pa-pain")}erase(e){e.classes.revert(this)}};n(Mn,"$Pain");let Rt=Mn;const Tn=class Tn extends b{constructor(){super(...arguments),this.specification=new xa}defines(e){e.classes.add(this,"pa-solution")}erase(e){e.classes.revert(this)}};n(Tn,"$Solution");let Et=Tn;const Bn=class Bn extends u{$isAParagraph(e){c(e instanceof g,"a question is a paragraph, and this is not one")}};n(Bn,"QuestionSpecification");let ka=Bn;Ze([l("a question is a paragraph")],ka.prototype,"$isAParagraph");const Wn=class Wn extends u{$isAParagraph(e){c(e instanceof g,"an answer is a paragraph, and this is not one")}};n(Wn,"AnswerSpecification");let va=Wn;Ze([l("an answer is a paragraph")],va.prototype,"$isAParagraph");const Hn=class Hn extends u{$isAParagraph(e){c(e instanceof g,"a decision is a paragraph, and this is not one")}};n(Hn,"DecisionSpecification");let ya=Hn;Ze([l("a decision is a paragraph")],ya.prototype,"$isAParagraph");const Ln=class Ln extends u{$isAParagraph(e){c(e instanceof g,"a pain is a paragraph, and this is not one")}};n(Ln,"PainSpecification");let wa=Ln;Ze([l("a pain is a paragraph")],wa.prototype,"$isAParagraph");const Fn=class Fn extends u{$isAParagraph(e){c(e instanceof g,"a solution is a paragraph, and this is not one")}};n(Fn,"SolutionSpecification");let xa=Fn;Ze([l("a solution is a paragraph")],xa.prototype,"$isAParagraph");const nl=s(Lt),rl=s(Ft),il=s($a),dl=s(Rt),pl=s(Et);var Bp=Object.defineProperty,Wp=Object.getOwnPropertyDescriptor,oe=n((p,e,a,o)=>{for(var t=Wp(e,a),i=p.length-1,d;i>=0;i--)(d=p[i])&&(t=d(e,a,t)||t);return t&&Bp(e,a,t),t},"__decorateClass$7");const Rn=class Rn extends b{constructor(){super(...arguments),this.specification=new ge,this.span=y.span.attrs({className:"pd-number"})``,this.close=y.span.attrs({className:"pd-close"})``}get number(){const e=D.copy(this.text).trim();return e===""?NaN:Number(e)}note(){const e=this.span,a=this.close,o=s(j),t=s(z),i=this.chapter?.mention?.identifier;return h(v,{children:[r(e,{children:this.number}),i===void 0?void 0:r(a,{children:h(o,{children:[r(t,{children:i}),"×"]})})]})}defines(e){e.classes.add(this,"pa-concept")}erase(e){e.classes.revert(this)}};n(Rn,"$Concept");let G=Rn;const En=class En extends b{constructor(){super(...arguments),this.specification=new Le}defines(e){e.classes.add(this,"pa-designed")}erase(e){e.classes.revert(this)}};n(En,"$Designed");let _t=En;const _n=class _n extends b{constructor(){super(...arguments),this.specification=new Le}defines(e){e.classes.add(this,"pa-decided")}erase(e){e.classes.revert(this)}};n(_n,"$Decided");let Gt=_n;const Gn=class Gn extends b{constructor(){super(...arguments),this.specification=new be}defines(e){e.classes.add(this,"pa-desk")}erase(e){e.classes.revert(this)}};n(Gn,"$Desk");let za=Gn;const qn=class qn extends b{constructor(){super(...arguments),this.specification=new be}defines(e){e.classes.add(this,"pa-phone")}erase(e){e.classes.revert(this)}};n(qn,"$Phone");let Oa=qn;const Yn=class Yn extends b{constructor(){super(...arguments),this.specification=new be}defines(e){e.classes.add(this,"pa-thumbnail")}erase(e){e.classes.revert(this)}};n(Yn,"$Thumbnail");let He=Yn;const Zn=class Zn extends b{constructor(){super(...arguments),this.specification=new ue}defines(e){e.classes.add(this,"pa-precedent")}erase(e){e.classes.revert(this)}};n(Zn,"$Precedent");let qt=Zn;const Un=class Un extends b{constructor(){super(...arguments),this.specification=new ue}defines(e){e.classes.add(this,"pa-source")}erase(e){e.classes.revert(this)}};n(Un,"$Source");let Yt=Un;const Xn=class Xn extends b{constructor(){super(...arguments),this.specification=new ja}defines(e){e.classes.add(this,"pa-where")}erase(e){e.classes.revert(this)}};n(Xn,"$Where");let Zt=Xn;const Kn=class Kn extends u{$isASection(e){c(e instanceof C,"a concept is a section, and this is not one")}$givenItsNumber(e){c(Number.isInteger(e.annotations.expressed(G)?.number),"a concept is given its number, and this one was given something else")}$photographedThreeWays(e){const a=e.text.find(g);c([za,Oa,He].every(o=>a.some(t=>t.is(o))),"a concept is photographed at a desk, at a phone, and small, and this one is missing a photograph")}};n(Kn,"ConceptSpecification");let ge=Kn;oe([l("a concept is a section")],ge.prototype,"$isASection");oe([l("a concept is given its number")],ge.prototype,"$givenItsNumber");oe([l("a concept is photographed at a desk, at a phone, and small")],ge.prototype,"$photographedThreeWays");const Jn=class Jn extends u{$isAParagraphHoldingOneImage(e){c(e instanceof g&&e.text.find(Os).length===1,"a photograph is a paragraph that holds one image, and this is not one")}};n(Jn,"PhotographSpecification");let be=Jn;oe([l("a photograph is a paragraph that holds one image")],be.prototype,"$isAParagraphHoldingOneImage");const Qn=class Qn extends u{$saidOfAParagraphOfAConcept(e){c(e instanceof g&&e.parent instanceof Ki&&e.parent.is(G),"this is said of a paragraph of a concept, and here it is said of something else")}};n(Qn,"OfAConceptSpecification");let ue=Qn;oe([l("this is said of a paragraph of a concept")],ue.prototype,"$saidOfAParagraphOfAConcept");const Vn=class Vn extends ue{$refersToWhereItIsBuilt(e){c(e.text.find(x).some(a=>a.is(xe)),"a where refers to where the concept is built, and this one refers nowhere")}};n(Vn,"WhereSpecification");let ja=Vn;oe([l("a where refers to where the concept is built")],ja.prototype,"$refersToWhereItIsBuilt");const Sn=class Sn extends u{$saidOfAConcept(e){c(e.is(G),"this is said of a concept, and here it is said of something else")}};n(Sn,"OfAConceptSectionSpecification");let Le=Sn;oe([l("this is said of a concept")],Le.prototype,"$saidOfAConcept");const cl=s(G),ll=s(_t),hl=s(Gt),fl=s(za),gl=s(Oa),bl=s(He),ul=s(qt),ml=s(Yt),$l=s(Zt);var Hp=Object.defineProperty,Lp=Object.getOwnPropertyDescriptor,Ci=n((p,e,a,o)=>{for(var t=Lp(e,a),i=p.length-1,d;i>=0;i--)(d=p[i])&&(t=d(e,a,t)||t);return t&&Hp(e,a,t),t},"__decorateClass$6");const Fp=n((p,e)=>p.chapters.flatMap(a=>p.sections(a)).find(a=>a.is(G)&&a.mention?.identifier===e),"conceptAt"),Rp=n(p=>{const e=p.text.find(g).find(a=>a.is(He))?.text.find(Os)[0];return e===void 0?"":e.contents||D.copy(e.text)},"thumbnailOf"),er=class er extends F{constructor(){super(...arguments),this.specification=new Da,this.themeProvider=!0,this.style=y.div`
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
    `}get chapter(){return this.parent}get concepts(){return this.book.sections(this.chapter).filter(e=>e.is(G))}get open(){return this.concepts.find(e=>e.mention?.identifier===this.book?.$bookmark)}defines(e){super.defines(e),e.classes.add(this,"pa-gallery");const a=this.open,o=this.concepts.find(t=>[...t.classes].includes("pa-open"));o!==a&&(o?.classes.revert(this),a?.classes.add(this,"pa-open"))}erase(e){super.erase(e),e.classes.revert(this)}};n(er,"$Gallery");let Ut=er;const ar=class ar extends F{constructor(){super(...arguments),this.specification=new Pa,this.strip=y.div`
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
    `}get paragraph(){return this.parent}get places(){return this.paragraph.text.find(x).map(e=>e.annotations.expressed(xe)?.identifier).filter(e=>e!==void 0)}get concepts(){const e=this.book;return[...new Set(this.places.map(a=>Fp(e,a)).filter(a=>a!==void 0))]}get chosen(){const e=this.paragraph.parent?.text.find(g).filter(a=>a.is($a))??[];return new Set(e.flatMap(a=>a.text.find(x).map(o=>o.annotations.expressed(xe)?.identifier)).filter(a=>a!==void 0))}$Strip(...e){this.$Format(...e);const a=this.strip,o=s(j),t=s(z);this.style=({className:i,children:d})=>{const m=this.chosen;return h(a,{className:`${i??""} pd-strip`.trim(),children:[this.concepts.map(($,k)=>{const O=$.mention.identifier;return h(o,{children:[r(t,{children:O}),h("span",{className:`pd-thumb${m.has(O)?" pd-chosen":""}`,children:[r("img",{src:Rp($),alt:""}),h("span",{className:"pd-name",children:[r("span",{className:"pd-number",children:$.annotations.expressed(G)?.number}),$.canonical?.name]})]})]},k)}),r("span",{className:"pd-said",children:d})]})}}defines(e){super.defines(e),e.classes.add(this,"pa-strip")}erase(e){super.erase(e),e.classes.revert(this)}};n(ar,"$Strip");let Xt=ar;const tr=class tr extends u{$isAChapter(e){c(e instanceof w,"a gallery is a chapter, and this is not one")}};n(tr,"GallerySpecification");let Da=tr;Ci([l("a gallery is a chapter")],Da.prototype,"$isAChapter");const sr=class sr extends u{$isAParagraphReferringToConcepts(e){c(e instanceof g&&e.text.find(x).some(a=>a.annotations.expressed(xe)!==void 0),"a strip is a paragraph that refers to concepts, and this one refers to nothing")}};n(sr,"StripSpecification");let Pa=sr;Ci([l("a strip is a paragraph that refers to concepts")],Pa.prototype,"$isAParagraphReferringToConcepts");const kl=s(Ut),vl=s(Xt),or=class or extends K{constructor(){super(...arguments),this.accent="#23407a",this.ink="#343c4a",this.heading="#1a1f36",this.soft="#727d8c",this.faint="#9ea8b5",this.line="#e4e9f2",this.paper="#fdfcfa",this.side="#f8f9fb",this.holdsColumn="256px",this.barHeight="52px",this.card="12.5rem",this.shadow="0 1px 2px rgba(43, 54, 60, 0.05), 0 6px 18px rgba(43, 54, 60, 0.05)",this.lift="0 2px 4px rgba(43, 54, 60, 0.06), 0 14px 32px rgba(43, 54, 60, 0.10)",this.barLight="#fcfcfd",this.barMid="#f8f9fc",this.barDeep="#f2f4f9",this.barShadow="0 1px 0 rgba(43, 54, 60, 0.05)",this.sideLight="#fafbfc",this.sideDeep="#f2f4f8",this.codeGround="#f6f7fa",this.hairline="1px",this.stroke="2px",this.rise="-1px",this.gloss="inset 0 1px 0 rgba(255, 255, 255, 0.7)",this.ring="0 0 0 2px color-mix(in oklab, var(--band) 80%, white)",this.decisionShadow="0 1px 2px rgba(43, 54, 60, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.6)"}parts(){return[...super.parts(),this.backdrop(),this.bands(),this.guide(),this.story(),this.said(),this.small()]}backdrop(){return f`
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
        `}};n(or,"$Exhibition");let Kt=or;const Ep=s(Kt);var _p=Object.defineProperty,Gp=Object.getOwnPropertyDescriptor,Ii=n((p,e,a,o)=>{for(var t=Gp(e,a),i=p.length-1,d;i>=0;i--)(d=p[i])&&(t=d(e,a,t)||t);return t&&_p(e,a,t),t},"__decorateClass$5");const nr=class nr extends L{constructor(){super(...arguments),this.specification=new Fe}get designs(){return this.chapters.filter(e=>e.is(N))}get open(){return super.open??this.body[0]}head(){}switches(){}$Bound(){const e=s(Kd),a=s(Xd),o=s(Jd),t=this.designs;for(const i of t)i.annotations.add(this,r(e,{})),i.text.add(this,r(o,{}));for(const i of this.table?.annotations.expressed(Z)?.entries??[]){const d=I(i)?.identifier,m=d===void 0?void 0:this.chapterAt(d);m===void 0||!t.includes(m)||i.annotations.add(this,r(a,{number:t.indexOf(m)+1}))}super.$Bound()}};n(nr,"$Portfolio");let Jt=nr;const rr=class rr extends B{$everyChapterInAPart(e){c(e.chapters.every(a=>a.part!==void 0),"every chapter of a portfolio is in a part, and one here is in none")}$showsEveryDesign(e){c(e.designs.every(a=>Ya(a,g).some(o=>o.is(Ae))),"a portfolio shows every design it holds as built, in a paragraph said to be the exhibit, and one here has none")}};n(rr,"PortfolioSpecification");let Fe=rr;Ii([l("every chapter of a portfolio is in a part")],Fe.prototype,"$everyChapterInAPart");Ii([l("a portfolio shows every design it holds as built")],Fe.prototype,"$showsEveryDesign");const Ni=s(Jt);s(Ni,ve)(Ep);s(Ni,se)(we);const ir=class ir extends pe{};n(ir,"$PortfolioCover");let Qt=ir;const yl=s(Qt),dr=class dr extends K{constructor(){super(...arguments),this.prose="'Source Serif 4', Georgia, serif",this.ink="#343c4a",this.heading="#1a1f36",this.soft="#727d8c",this.faint="#9ea8b5",this.line="#e4e9f2",this.paper="#ffffff",this.side="#f8f9fb",this.holdsColumn="240px",this.barHeight="52px",this.shadow="0 1px 2px rgba(43, 54, 60, 0.05), 0 6px 18px rgba(43, 54, 60, 0.05)",this.lift="0 2px 4px rgba(43, 54, 60, 0.06), 0 14px 32px rgba(43, 54, 60, 0.10)",this.barLight="#fcfcfd",this.barMid="#f8f9fc",this.barDeep="#f2f4f9",this.barShadow="0 1px 0 rgba(43, 54, 60, 0.05)",this.sideLight="#fafbfc",this.sideDeep="#f2f4f8",this.hairline="1px",this.stroke="2px"}parts(){return[...super.parts(),this.bands(),this.guide(),this.order(),this.surface(),this.entries(),this.small()]}bands(){return f`
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
        `}};n(dr,"$Typeset");let Vt=dr;const Mi=s(Vt);var qp=Object.defineProperty,Yp=Object.getOwnPropertyDescriptor,Ti=n((p,e,a,o)=>{for(var t=Yp(e,a),i=p.length-1,d;i>=0;i--)(d=p[i])&&(t=d(e,a,t)||t);return t&&qp(e,a,t),t},"__decorateClass$4");const A=n(p=>p.annotations.expressed(U)?.date?.date??"","dayOf"),me=n(p=>{const[e,a]=A(p).split("-");return e===void 0||a===void 0?"":new Date(Date.UTC(Number(e),Number(a)-1,1)).toLocaleString("en-GB",{month:"long",year:"numeric",timeZone:"UTC"})},"monthOf"),pr=class pr extends b{constructor(){super(...arguments),this.specification=new T}defines(e){e.classes.add(this,"pa-newest-first")}erase(e){e.classes.revert(this)}};n(pr,"$NewestFirst");let Aa=pr;const Zp=s(Aa),Bi=Zp,cr=class cr extends g{write(){const e=s(qa);return r(e,{annotation:Bi,children:"newest first"})}$Define(){super.$Define(),this.classes.add(this,"pd-entry-order")}};n(cr,"$EntryOrder");let St=cr;const lr=class lr extends x{write(){return String(this.book.entries.indexOf(this.chapter)+1)}$Define(){super.$Define(),this.classes.add(this,"pd-entry-number")}};n(lr,"$EntryNumber");let es=lr;const hr=class hr extends x{write(){const[e,a,o]=A(this.$entry).split("-");if(!(e===void 0||a===void 0||o===void 0))return new Date(Date.UTC(Number(e),Number(a)-1,Number(o.slice(0,2)))).toLocaleString("en-GB",{day:"numeric",month:"short",timeZone:"UTC"})}$Define(){super.$Define(),this.classes.add(this,"pd-entry-day")}};n(hr,"$EntryDay");let as=hr;const fr=class fr extends Te{paging(){return f``}};n(fr,"$JournalLayout");let ts=fr;const Up=s(St),Xp=s(es),Wi=s(as),Hi=s(ts),Kp=Up,Jp=Xp,Qp=Wi,gr=class gr extends L{constructor(){super(...arguments),this.specification=new $e}get entries(){return this.body}get latest(){return[...this.entries].sort((e,a)=>A(a).localeCompare(A(e)))[0]}get pages(){const e=[...this.entries].sort((a,o)=>A(a).localeCompare(A(o)));return this.is(Aa)?e.reverse():e}get open(){return super.open??this.latest}head(){}switches(){}turns(){}$Bound(){const e=s(Jp);for(const t of this.entries)t.text.add(this,r(e,{}));const a=s(Qp);for(const t of this.table?.annotations.expressed(Z)?.entries??[]){const i=I(t)?.identifier,d=i===void 0?void 0:this.chapterAt(i);d===void 0||!this.entries.includes(d)||t.text.add(this,r(a,{entry:d}))}const o=s(Kp);this.table?.text.add(this,r(o,{})),this.$is=[Bi],super.$Bound()}};n(gr,"$Journal");let Ca=gr;const br=class br extends B{$everyEntryIsDated(e){const a=e.entries.find(o=>!o.is(U));c(a===void 0,`every entry of a journal is dated, and "${a?.title?.name}" is not`)}$everyEntrySaysItsMonth(e){const a=e.entries.find(o=>o.part?.name!==me(o));c(a===void 0,a===void 0?"":`every entry of a journal says the month of its date as its part, and "${a.title?.name}" says "${a.part?.name??"none"}" for ${me(a)}`)}};n(br,"JournalSpecification");let $e=br;Ti([l("every entry of a journal is dated")],$e.prototype,"$everyEntryIsDated");Ti([l("every entry of a journal says the month of its date as its part")],$e.prototype,"$everyEntrySaysItsMonth");const Bs=s(Ca);s(Bs,ve)(Mi);s(Bs,se)(we);s(Bs,Za)(Hi);const ur=class ur extends pe{};n(ur,"$JournalCover");let ss=ur;const Vp=s(ss);var Sp=Object.defineProperty,ec=Object.getOwnPropertyDescriptor,ac=n((p,e,a,o)=>{for(var t=ec(e,a),i=p.length-1,d;i>=0;i--)(d=p[i])&&(t=d(e,a,t)||t);return t&&Sp(e,a,t),t},"__decorateClass$3");const mr=class mr extends b{constructor(){super(...arguments),this.specification=new Ia}get section(){return this.parent instanceof C?this.parent:void 0}get headings(){const e=this.section;return e===void 0?[]:e.text.find(ni).filter(a=>a!==e.canonical)}defines(e){e.classes.add(this,"pa-opaque")}erase(e){e.classes.revert(this)}$Bound(){for(const e of this.headings){const a=e.annotations.expressed(_a),o=e.annotations.expressed(oi);for(const t of[a,o])t!==void 0&&e.annotations.remove(e,t)}super.$Bound()}};n(mr,"$Opaque");let os=mr;const $r=class $r extends u{$saidOfASection(e){c(e instanceof C,"opaque is said of a section, and this is not one")}};n($r,"OpaqueSpecification");let Ia=$r;ac([l("opaque is said of a section")],Ia.prototype,"$saidOfASection");const tc=s(os);var sc=Object.defineProperty,oc=Object.getOwnPropertyDescriptor,R=n((p,e,a,o)=>{for(var t=oc(e,a),i=p.length-1,d;i>=0;i--)(d=p[i])&&(t=d(e,a,t)||t);return t&&sc(e,a,t),t},"__decorateClass$2");const kr=class kr extends ni{$Define(){super.$Define(),this.classes.add(this,"pd-speaker")}$Bound(){super.$Bound();const e=this.annotations.expressed(_a);e!==void 0&&this.annotations.remove(this,e)}};n(kr,"$Speaker");let Re=kr;const vr=class vr extends js{$Define(){super.$Define(),this.classes.add(this,"pd-time")}};n(vr,"$Time");let ns=vr;const yr=class yr extends Ji{$Define(){super.$Define(),this.classes.add(this,"pd-participant")}};n(yr,"$Participant");let Na=yr;const wr=class wr extends g{get participants(){return this.text.find(Na)}write(){const e=this.participants;return e.flatMap((a,o)=>{const t=s(a);return[o===0?"":o===e.length-1?" and ":", ",r(t,{},o)]})}$Define(){super.$Define(),this.classes.add(this,"pd-participants")}};n(wr,"$Participants");let Ma=wr;const wl=s(Re),nc=s(ns),xl=s(Na),zl=s(Ma),rc=nc,ic=n(p=>{const e=new Date(p);if(Number.isNaN(e.getTime()))return p;const a=e.toLocaleDateString("en-GB",{day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return`${e.toLocaleTimeString("en-GB",{hour:"2-digit",minute:"2-digit",timeZone:"UTC"})} UTC, ${a}`},"shownTime"),xr=class xr extends C{constructor(){super(...arguments),this.specification=new Ee,this.$at=void 0}get when(){return this.$at??""}get speaker(){return this.text.find(Re)[0]}write(){const e=s(rc),a=this.speaker,o=a===void 0?void 0:s(a),t=[...this.text].filter(i=>i!==a);return h(v,{children:[o===void 0?void 0:r(o,{}),r(e,{children:`[${ic(this.when)}](${this.when})`}),r("div",{className:"pd-said",children:t.map((i,d)=>{const m=s(i);return r(m,{},d)})})]})}$Define(){super.$Define(),this.classes.add(this,"pd-message");const e=s(tc);if(this.annotations.add(this,r(e,{})),this.when==="")return;const a=this.speaker,o=a===void 0?"":re.reference(D.copy(a.text))?.name??D.copy(a.text),t=s(Qi);this.annotations.add(this,r(t,{children:Vi.slug(`${this.when.replace(/Z$/u,"")} ${o}`)}))}$Bound(){const e=this.book?.author?.means?.identifier;if(e!==void 0&&this.speaker?.means?.identifier===e){const a=s(pc);this.annotations.add(this,r(a,{}))}super.$Bound()}};n(xr,"$Message");let S=xr;const zr=class zr extends b{constructor(){super(...arguments),this.specification=new Ta}defines(e){e.classes.add(this,"pa-mine")}erase(e){e.classes.revert(this)}};n(zr,"$Mine");let rs=zr;const Or=class Or extends u{$saidOfAMessage(e){c(e instanceof S,"mine is said of a message, and this is not one")}};n(Or,"MineSpecification");let Ta=Or;R([l("mine is said of a message")],Ta.prototype,"$saidOfAMessage");const dc=s(rs),pc=dc,jr=class jr extends b{constructor(){super(...arguments),this.specification=new Wa}defines(e){e.classes.add(this,"pa-quoted")}erase(e){e.classes.revert(this)}};n(jr,"$Quoted");let is=jr;const Dr=class Dr extends b{constructor(){super(...arguments),this.specification=new Ha}defines(e){e.classes.add(this,"pa-verbatim")}erase(e){e.classes.revert(this)}};n(Dr,"$Verbatim");let ds=Dr;const Pr=class Pr extends b{constructor(){super(...arguments),this.specification=new _e,this.$from=void 0,this.$to=void 0}get from(){return this.$from??""}get to(){return this.$to??""}defines(e){e.classes.add(this,"pa-period")}erase(e){e.classes.revert(this)}};n(Pr,"$Period");let Ba=Pr;const Ar=class Ar extends b{constructor(){super(...arguments),this.specification=new _e,this.$shown=void 0,this.$all=void 0}get shown(){return Number(this.$shown??0)}get all(){return Number(this.$all??0)}get aside(){return this.all-this.shown}defines(e){e.classes.add(this,"pa-messages")}erase(e){e.classes.revert(this)}};n(Ar,"$Messages");let ee=Ar;const Cr=class Cr extends Si{$saysWhen(e){c(e.when!==""&&!Number.isNaN(Date.parse(e.when)),"a message says when it was said, as an instant the machine can read, and this one does not")}$headedByItsSpeaker(e){c(e.canonical instanceof Re,"a message is headed by its speaker, a heading that refers to them, and this one is not")}};n(Cr,"MessageSpecification");let Ee=Cr;R([l("a message says when it was said")],Ee.prototype,"$saysWhen");R([l("a message is headed by its speaker")],Ee.prototype,"$headedByItsSpeaker");const Ir=class Ir extends u{$saidOfAParagraph(e){c(e instanceof g,"this is said of a paragraph, and this is not one")}};n(Ir,"OfAParagraphSpecification");let Wa=Ir;R([l("this is said of a paragraph")],Wa.prototype,"$saidOfAParagraph");const Nr=class Nr extends u{$saidOfACover(e){c(e instanceof w&&e.is(H),"this is said of a cover, and this is not one")}};n(Nr,"OfACoverSpecification");let _e=Nr;R([l("this is said of a cover")],_e.prototype,"$saidOfACover");const Mr=class Mr extends u{$saidOfAWord(e){c(e instanceof x,"verbatim is said of a word, and this is not one")}};n(Mr,"VerbatimSpecification");let Ha=Mr;R([l("verbatim is said of a word")],Ha.prototype,"$saidOfAWord");const Ol=s(S),jl=s(is),Dl=s(ds),Pl=s(Ba),Al=s(ee),ei=n(p=>p===void 0||p===""?"":new Date(p).toLocaleDateString("en-GB",{day:"numeric",month:"long",year:"numeric",timeZone:"UTC"}),"dayWords"),Tr=class Tr extends g{write(){const e=this.book,a=e.messageCount?.shown??e.messages.length,o=e.body.length,t=ei(e.period?.from),i=ei(e.period?.to);return h(v,{children:[h("span",{className:"pd-tally-count",children:[r("b",{children:a}),o===1?" messages in ":" messages over ",r("b",{children:o}),o===1?" day":" days"]}),r("span",{className:"pd-tally-period",children:t===i?t:`${t} to ${i}`})]})}$Define(){super.$Define(),this.classes.add(this,"pd-tally")}};n(Tr,"$Tally");let ps=Tr;const Br=class Br extends x{write(){return String(this.$entry?.text.find(S).length??0)}$Define(){super.$Define(),this.classes.add(this,"pd-day-count")}};n(Br,"$DayCount");let cs=Br;const cc=s(ps),lc=s(cs),hc=cc,fc=lc,Wr=class Wr extends L{constructor(){super(...arguments),this.specification=new ae}get participants(){return this.cover?.text.find(Ma)[0]?.participants??[]}get period(){return this.cover?.annotations.expressed(Ba)}get messageCount(){return this.cover?.annotations.expressed(ee)}get messages(){return this.body.flatMap(e=>e.text.find(S))}get pages(){return[...[...this.body].sort((a,o)=>A(a).localeCompare(A(o))),...this.appendix]}get open(){return super.open??this.pages[0]}head(){const e=s(hc);return h(v,{children:[super.head(),r(e,{chapter:this.cover})]})}$Bound(){const e=s(fc);for(const a of this.table?.annotations.expressed(Z)?.entries??[]){const o=I(a)?.identifier,t=o===void 0?void 0:this.chapterAt(o);t===void 0||!this.body.includes(t)||a.text.add(this,r(e,{entry:t}))}super.$Bound()}};n(Wr,"$Conversation");let ls=Wr;const Hr=class Hr extends B{$saysItsParticipantsPeriodAndCount(e){c(e.participants.length>0&&e.period!==void 0&&e.messageCount!==void 0,"a conversation says its participants, its period and how many messages it holds, on its cover, and this one says less")}$everyChapterIsDated(e){const a=e.body.find(o=>!o.is(U));c(a===void 0,`every chapter of a conversation is dated, and "${a?.title?.name}" is not`)}$everyMessageIsAddressed(e){const a=e.messages.find(o=>o.annotations.expressed(_a)===void 0);c(a===void 0,`every message of a conversation is addressed by its time, and the one at "${a?.when}" is not`)}$everyChapterHoldsAMessage(e){const a=e.body.find(o=>o.text.find(S).length===0);c(a===void 0,`every chapter of a conversation holds a message, and "${a?.title?.name}" holds none`)}};n(Hr,"ConversationSpecification");let ae=Hr;R([l("a conversation says its participants, its period and how many messages it holds")],ae.prototype,"$saysItsParticipantsPeriodAndCount");R([l("every chapter of a conversation is dated")],ae.prototype,"$everyChapterIsDated");R([l("every message of a conversation is addressed by its time")],ae.prototype,"$everyMessageIsAddressed");R([l("every chapter of a conversation holds a message")],ae.prototype,"$everyChapterHoldsAMessage");s(ls);const gc=/(::[^\n]*|<\|=\|>|=\|>|=[A-Za-z0-9'_]*>|-\([^)]*\)>|->|==|!=)/gu,ai=n(p=>p.replace(/[&<>]/gu,e=>({"&":"&amp;","<":"&lt;",">":"&gt;"})[e]),"escaped"),bc=n(p=>p.split(gc).map((e,a)=>a%2===0?ai(e):`<span class="${e.startsWith("::")?"hljs-comment":"hljs-keyword"}">${ai(e)}</span>`).join(""),"notationHighlighting"),uc=n((p,e)=>e==="srt"?bc(p):ad(p,e),"boxHighlighting"),Lr=class Lr extends ed{constructor(){super(...arguments),this.$highlighter=uc}get name(){return this.language===""?"text":this.language}$CodeBox(...e){this.$Code(...e),this.containers.replace(this,"pre","div")}write(){return h(v,{children:[h("div",{className:"pd-code-bar",children:[r("span",{className:"pd-code-name",children:this.name}),r("button",{type:"button",className:"pd-copy",onClick:n(e=>this.copy(e),"onClick"),children:"Copy"})]}),r("pre",{children:super.write()})]})}copy(e){const a=e.currentTarget.closest(".pd-code-box")?.querySelector("pre")?.textContent??"";navigator.clipboard?.writeText(a)}$Define(){super.$Define(),this.classes.add(this,"pd-code-box")}};n(Lr,"$CodeBox");let hs=Lr;const Cl=s(hs);var mc=Object.defineProperty,$c=Object.getOwnPropertyDescriptor,Li=n((p,e,a,o)=>{for(var t=$c(e,a),i=p.length-1,d;i>=0;i--)(d=p[i])&&(t=d(e,a,t)||t);return t&&mc(e,a,t),t},"__decorateClass$1");const Fr=class Fr extends Ca{constructor(){super(...arguments),this.specification=new Ge}get entries(){return this.text.find(w).filter(e=>e.is(E)&&e!==this.synopsis)}get laidOutChapters(){return[...super.laidOutChapters,...this.entries]}sizeOf(e){return e.annotations.expressed(M)?.cover?.annotations.expressed(ee)?.shown??0}};n(Fr,"$Register");let fs=Fr;const Rr=class Rr extends $e{$everyEntryStandsForABook(e){const a=e.entries.find(o=>o.annotations.expressed(E)?.means===void 0);c(a===void 0,`every entry of a register stands for a book, holding its synopsis, and "${a?.title?.name}" stands for none`)}$onlyAChapterAppends(e){const a=[...e.chapters,...e.entries];c(e.text.find(w).every(o=>a.includes(o)||!o.is(Y)),"only an ordinary chapter or an entry files a file, and here a cover, a synopsis or a table of contents files one")}};n(Rr,"RegisterSpecification");let Ge=Rr;Li([l("every entry of a register stands for a book, holding its synopsis")],Ge.prototype,"$everyEntryStandsForABook");Li([l("only an ordinary chapter or an entry files a file")],Ge.prototype,"$onlyAChapterAppends");const Ws=s(fs);s(Ws,ve)(Mi);s(Ws,se)(we);s(Ws,Za)(Hi);var kc=Object.defineProperty,vc=Object.getOwnPropertyDescriptor,Hs=n((p,e,a,o)=>{for(var t=vc(e,a),i=p.length-1,d;i>=0;i--)(d=p[i])&&(t=d(e,a,t)||t);return t&&kc(e,a,t),t},"__decorateClass");const Er=class Er extends b{constructor(){super(...arguments),this.specification=new T}defines(e){e.classes.add(this,"pa-synopses")}erase(e){e.classes.revert(this)}};n(Er,"$Synopses");let gs=Er;const yc=s(gs),wc=yc,_r=class _r extends g{write(){const e=s(qa);return r(e,{annotation:wc,children:"with the synopsis"})}$Define(){super.$Define(),this.classes.add(this,"pd-row-form")}};n(_r,"$RowForm");let bs=_r;const Gr=class Gr extends x{write(){return`${this.chapter?.annotations.expressed(M)?.cover?.annotations.expressed(ee)?.shown??0} exchanges`}$Define(){super.$Define(),this.classes.add(this,"pd-entry-count")}};n(Gr,"$EntryCount");let us=Gr;const qr=class qr extends x{write(){return me(this.chapter)}$Define(){super.$Define(),this.classes.add(this,"pd-entry-month")}};n(qr,"$EntryMonth");let ms=qr;const Yr=class Yr extends x{write(){}$Define(){super.$Define(),this.classes.add(this,"pd-entry-open")}};n(Yr,"$EntryOpen");let $s=Yr;const Zr=class Zr extends x{write(){return String(this.$section?.text.find(g).filter(e=>I(e)!==void 0).length??0)}$Define(){super.$Define(),this.classes.add(this,"pd-month-count")}};n(Zr,"$MonthCount");let ks=Zr;const Ur=class Ur extends g{get project(){return this.book}$ProjectHead(...e){this.$Writing(...e),this.containers.replace(this,"span","div")}write(){const e=this.project;if(e===void 0)return;const a=s(j),o=s(z),t=e.coverOf(e.subject?.means?.identifier),i=e.entries,d=i.reduce((k,O)=>k+(O.annotations.expressed(M)?.cover?.annotations.expressed(ee)?.shown??0),0),m=i.map(A).filter(k=>k!=="").sort(),$=m.length===0?"":`${me(i.find(k=>A(k)===m[0]))} to ${me(i.find(k=>A(k)===m[m.length-1]))}`;return h(v,{children:[h("span",{className:"pd-crumbs",children:[t===void 0?void 0:h(a,{children:[r(o,{children:t.mention.identifier}),t.title?.name]}),r("i",{children:"/"}),r(a,{children:e.title?.name})]}),h("span",{className:"pd-report",children:[h("span",{children:[r("b",{children:i.length})," conversations"]}),h("span",{children:[r("b",{children:d})," exchanges"]}),h("span",{children:[r("b",{children:e.files.length})," files"]}),r("span",{children:$})]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-project-head")}};n(Ur,"$ProjectHead");let vs=Ur;const Xr=class Xr extends g{constructor(){super(...arguments),this.style=y.div`
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
    `}get project(){return this.book}$Knowledge(...e){this.$Writing(...e),this.containers.replace(this,"span",this.style)}write(){const e=this.project;if(e===void 0)return;const a=s(j),o=s(z),t=e.project,i='<svg viewBox="0 0 16 16"><path d="M4 1.5h5.5L13 5v9.5H4z"/><path d="M9.5 1.5V5H13M6 8h4M6 10.5h4"/></svg>';return h(v,{children:[t?.mention===void 0?void 0:h("span",{className:"pd-knowledge-row",children:[h(a,{children:[r(o,{children:t.mention.identifier}),t.title?.name]}),r("span",{className:"pd-at-right",children:"what it is, its instructions"})]}),h("span",{className:"pd-knowledge-row",children:["Files",r("small",{children:e.files.length}),r("span",{className:"pd-at-right",children:"as uploaded"})]}),r("span",{className:"pd-knowledge-files",children:e.files.map((d,m)=>h("span",{className:"pd-knowledge-file",children:[r("span",{className:"pd-drawing",dangerouslySetInnerHTML:{__html:i}}),h(a,{children:[r(o,{children:d.mention.identifier}),d.title?.name]}),r("span",{className:"pd-file-type",children:(d.annotations.find(Y)[0]?.$type??"").replace(/^\./u,"")})]},m))})]})}$Define(){super.$Define(),this.classes.add(this,"pd-knowledge")}};n(Xr,"$Knowledge");let ys=Xr;const Kr=class Kr extends Te{paging(){return f`
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
        `}};n(Kr,"$ProjectLayout");let ws=Kr;const Jr=class Jr extends ha{constructor(){super(...arguments),this.specification=new ke}get entries(){return this.text.find(w).filter(e=>e.is(E)&&e!==this.synopsis)}get files(){return this.chapters.filter(e=>e.is(P)&&e.is(Y))}get project(){return this.chapters.find(e=>e.is(P)&&!e.is(Y))}get laidOutChapters(){return[...super.laidOutChapters,...this.entries]}get pages(){const e=[...this.entries].sort((a,o)=>A(o).localeCompare(A(a)));return[...super.pages,...e]}get open(){return this.$bookmark===void 0?void 0:this.chapterAt(this.$bookmark)}chapterByPlace(){const e=super.chapterByPlace();for(const a of this.entries)a.mention!==void 0&&!e.has(a.mention.identifier)&&e.set(a.mention.identifier,a);return e}write(){const e=s(Lc);return h(v,{children:[super.write(),r("div",{className:"pd-knowledge-column",children:r(e,{chapter:this.cover})})]})}head(){const e=s(this.cover),a=s(Hc),o=s(Nc);return h(v,{children:[r(e,{}),r(a,{chapter:this.cover}),r(o,{chapter:this.cover})]})}$Bound(){const e=s(Mc),a=s(Tc),o=s(Bc);let t="";const i=s(z);for(const $ of this.pages.filter(k=>this.entries.includes(k))){const k=me($),O=$.annotations.expressed(M)?.cover?.mention?.identifier;$.text.add(this,...k!==t?[r(a,{},"month")]:[],r(e,{},"count"),...O===void 0?[]:[r(o,{children:r(i,{children:O})},"open")]),t=k}const d=s(Wi),m=s(Wc);for(const $ of this.table?.annotations.expressed(Z)?.entries??[]){const k=I($)?.identifier,O=k===void 0?void 0:this.chapterAt(k);O===void 0||!this.entries.includes(O)||$.text.add(this,r(d,{entry:O}))}for(const $ of this.table?.text.find(C)??[]){$.$is=[Is];const k=$.canonical;k!==void 0&&$.text.find(g).some(O=>{const Vr=I(O)?.identifier;return Vr!==void 0&&this.entries.includes(this.chapterAt(Vr))})&&k.text.add(this,r(m,{section:$}))}super.$Bound()}};n(Jr,"$ProjectManual");let xs=Jr;const Qr=class Qr extends We{$everyEntryStandsForAConversation(e){const a=e.entries.find(o=>o.annotations.expressed(E)?.means===void 0);c(a===void 0,`every entry of a project manual stands for a conversation, holding its synopsis, and "${a?.title?.name}" stands for none`)}$hasOneProjectChapter(e){c(e.chapters.filter(a=>a.is(P)&&!a.is(Y)).length===1,"a project manual has one chapter about the project, which appends no file, and this one has none or more than one")}$onlyAChapterAppends(e){const a=[...e.chapters,...e.entries];c(e.text.find(w).every(o=>a.includes(o)||!o.is(Y)),"only an ordinary chapter or an entry files a file, and here a cover, a synopsis or a table of contents files one")}};n(Qr,"ProjectManualSpecification");let ke=Qr;Hs([l("every entry of a project manual stands for a conversation, holding its synopsis")],ke.prototype,"$everyEntryStandsForAConversation");Hs([l("a project manual has one chapter about the project, which appends no file")],ke.prototype,"$hasOneProjectChapter");Hs([l("an entry of a project manual files a file only when a chapter may")],ke.prototype,"$onlyAChapterAppends");const xc=s(bs),zc=s(us),Oc=s(ms),jc=s($s),Dc=s(ks),Pc=s(vs),Ac=s(ys),Cc=s(ws),Ic=s(xs),Nc=xc,Mc=zc,Tc=Oc,Bc=jc,Wc=Dc,Hc=Pc,Lc=Ac;s(Ic,Za)(Cc);const Fc=n(()=>h(ri,{children:[r(Sd,{}),r(Oi,{ground:"#eef5f6",band:"#c3e3e6",bandInk:"#1c565c",foot:"#8db9bd",footInk:"#153e43",ink:"#1f5a60"}),r(ji,{x:"-46",y:"-13"}),r(ii,{children:"[Dougs Library](/dougs-library/)"}),r(di,{children:"[Doug](/dougs-story/)"}),r(pi,{children:"[Library](/dougs-library/)"}),r(ci,{children:"[The Library](/dougs-library/)"}),h(li,{children:[r(zi,{}),r(hi,{children:`<svg viewBox="0 0 64 64" class="pd-illustration"><path class="light" d="M9 7h46v50H9z"/><path d="M9 7h46v50H9zM9 24h46M9 41h46"/><path class="fill" d="M13 11h5v13h-5zM20 9h4v15h-4zM26 13h6v11h-6zM34 10h4v14h-4zM40 14h6v10h-6z"/><path d="M48 24l4-12 3 1-4 11z"/><path class="fill" d="M13 28h4v13h-4zM19 30h7v11h-7zM28 27h4v14h-4zM34 31h5v10h-5zM41 28h6v13h-6zM49 29h3v12h-3z"/><path class="fill" d="M13 46h6v11h-6zM21 44h4v13h-4zM27 47h8v10h-8zM37 45h4v12h-4zM43 48h6v9h-6z"/><path d="M50 57l3-11 3 1-3 10z"/></svg>
`})]})]}),"LibraryCover"),Il=n(()=>h(ri,{children:[r(Vp,{}),r(td,{}),r(ep,{children:Fc()}),r(Oi,{ground:"#f5eedf",band:"#d9c3a3",bandInk:"#4a3626",foot:"#a3b6cc",footInk:"#2a4262",ink:"#2f4a6a"}),r(ji,{x:"-54",y:"-33"}),r(ii,{children:"[Dougs Story](/dougs-story/)"}),r(di,{children:"[Doug](/dougs-story/)"}),r(pi,{children:"[Library](/dougs-library/)"}),r(ci,{children:"[The Librarian](/dougs-story/)"}),h(li,{children:[r(zi,{}),r(hi,{children:`<svg viewBox="0 0 64 64" class="pd-illustration"><path class="light" d="M8 13h23v38H8zM33 13h23v38H33z"/><path d="M8 13h23v38H8zM33 13h23v38H33z"/><path d="M13 21h13M13 27h13M13 33h9M38 21h13M38 27h13M38 33h13M38 39h8"/><path class="fill" d="M15 55 45 25l4 4-30 30-6 2z"/><path d="M15 55 45 25l4 4-30 30-6 2zM43 27l4 4M17 53l2 2"/></svg>
`})]})]}),"StoryCover");export{Jt as $,Jc as A,Sd as B,Cl as C,Sc as D,dl as E,pl as F,Qc as G,Vc as H,Kc as I,Vp as J,kl as K,Ga as L,Ol as M,cl as N,ll as O,zl as P,jl as Q,ul as R,wl as S,bl as T,sl as U,Dl as V,ji as W,$l as X,ml as Y,hl as Z,Ca as _,ep as a,tl as a0,al as a1,Zc as a2,Yc as a3,Il as b,Oi as c,xl as d,Pl as e,Al as f,zi as g,yl as h,rl as i,nl as j,fl as k,gl as l,Vt as m,S as n,se as o,we as p,ls as q,Fc as r,xs as s,el as t,ol as u,Xc as v,Uc as w,ha as x,vl as y,il as z};
