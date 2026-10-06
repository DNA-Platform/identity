var Os=Object.defineProperty;var i=(d,e)=>Os(d,"name",{value:e,configurable:!0});import{$ as r,e as f,W as X,D as zs,j as a,O as Ps,s as y,l as c,R as _,c as u,A as g,d as l,Q as D,g as h,U as Ds,f as we,y as Cs,h as m,z as I,V as As,G as us,X as ls,t as C,M as A,v as _s,S as hs,Y as Is,Z as gs,_ as Ns,T as bs,E as $s}from"./index-B6eU_VfC.js";const Oe=class Oe extends f{constructor(){super(...arguments),this.$identifier="",this.$type=""}get name(){return`${this.$identifier}${this.$type}`}write(){const e=r(X),s=r(zs);return a.jsxs(a.Fragment,{children:[a.jsx(e,{children:this.name}),a.jsx(s,{identifier:this.$identifier,type:this.$type,numbered:!0})]})}$Define(){super.$Define(),this.classes.add(this,"pd-listing")}};i(Oe,"$Listing");let S=Oe;const Ws=r(S),ze=class ze extends Ps{constructor(){super(...arguments),this.font="'Inter', system-ui, sans-serif",this.prose="'Inter', system-ui, sans-serif",this.mono="'JetBrains Mono', ui-monospace, monospace",this.size="0.875rem",this.leading="1.6",this.measure="44rem",this.spreadColumn="15.5rem",this.space="1.5rem",this.holdsColumn="240px",this.barHeight="50px",this.beat="320ms",this.narrow="48rem",this.colour="#4e9eb9",this.accent="#166178",this.bar="#0c1b1f",this.barInk="#ffffff",this.barDim="#a9bcc1",this.barOn="rgba(255, 255, 255, 0.11)",this.barLine="#1d3339",this.mark="#c8f4fb",this.side="#e3f5fa",this.sideInk="#10252c",this.sideDim="#516770",this.sideOn="#ffffff",this.sideLine="#cbe6ee",this.night="#0c1b1f",this.deep="#14323c",this.blue="#166178",this.sea="#4e9eb9",this.sky="#8fc8dc",this.opal="#c8f4fb",this.pale="#e3f5fa",this.mist="#f1f7f9",this.white="#ffffff",this.ink="#10252c",this.soft="#516770",this.line="#dbe7ec",this.me="#e8590c",this.wash="linear-gradient(105deg, #e2f6fb 0%, #ecf0fd 52%, #fae9f4 100%)",this.serif="'Cormorant Garamond', Georgia, serif",this.bookPaper="#fbf9f3",this.bookInk="#29251d",this.heading="#10252c",this.capital="#166178",this.lit="#166178",this.faint="#8792a2",this.paper="#ffffff",this.panel="#f1f7f9",this.rule="#dbe7ec",this.edge="transparent",this.tint="#e3f5fa",this.dusk="#14323c",this.glow="#cfe6e3",this.dim="#4f7672",this.keyword="#8ad7ff",this.string="#ffd48a",this.type="#9be3d6",this.comment="#5f8a86",this.haze="#a9bcc1",this.glass="rgba(255, 255, 255, 0.62)",this.binding="linear-gradient(160deg, #16303a, #0c1b1f)",this.spine="inset 5px 0 0 rgba(0, 0, 0, 0.14), inset 6px 0 0 rgba(255, 255, 255, 0.12), 0 10px 20px -10px rgba(0, 0, 0, 0.45)",this.shadow="0 0.75rem 1.4rem -0.9rem rgba(12, 27, 31, 0.55)",this.initial="'D'",this.volume="11.5rem",this.card="18rem",this.photo="7rem",this.style=y.div`${this.parts()}`}parts(){return[this.page(),this.writing(),this.links(),this.figures(),this.listings(),this.switches(),this.turns(),this.library(),this.head(),this.holds(),this.tones()]}page(){return c`
            font-family: ${({theme:e})=>e.font};
            font-size: ${({theme:e})=>e.size};
            line-height: ${({theme:e})=>e.leading};
            color: ${({theme:e})=>e.ink};
            background: ${({theme:e})=>e.paper};
            min-height: 100vh;
        `}writing(){return c`
            .pd-leaves { font-family: ${({theme:e})=>e.prose}; }
            .pd-chapter, .pd-section, .pd-paragraph { margin-block: ${({theme:e})=>e.space}; }
            .pd-chapter { max-width: ${({theme:e})=>e.measure}; }
        `}links(){return c`
            .pa-reference { color: ${({theme:e})=>e.accent}; }
            .pa-reference.pa-self-reference { color: inherit; text-decoration: none; }
        `}figures(){return c`
            .pd-image img { display: block; max-width: 100%; height: auto; }
            .pd-code { font-family: ${({theme:e})=>e.mono}; overflow-x: auto; }
        `}listings(){return c`
            .pd-files {
                background: ${({theme:e})=>e.night};
                color: ${({theme:e})=>e.glow};
                scrollbar-width: thin;
                scrollbar-color: ${({theme:e})=>e.dim} transparent;
            }
            .pd-paragraph.pd-listing {
                margin-block: 0;
                padding: calc(${({theme:e})=>e.space} / 2) calc(${({theme:e})=>e.space} * 0.6);
            }
            .pd-listing .pd-word {
                display: inline-block;
                padding: calc(${({theme:e})=>e.space} * 0.3) calc(${({theme:e})=>e.space} / 2);
                border-start-start-radius: calc(${({theme:e})=>e.space} * 0.3);
                border-start-end-radius: calc(${({theme:e})=>e.space} * 0.3);
                background: ${({theme:e})=>e.dusk};
                color: ${({theme:e})=>e.paper};
                font-size: calc(0.86 * ${({theme:e})=>e.size});
            }
            .pd-listing .pd-code {
                margin: 0;
                padding-block: calc(${({theme:e})=>e.space} * 0.66);
                border-radius: calc(${({theme:e})=>e.space} * 0.4);
                border-start-start-radius: 0;
                background: ${({theme:e})=>e.dusk};
                font-size: calc(0.84 * ${({theme:e})=>e.size});
                line-height: 1.75;
                scrollbar-width: thin;
                scrollbar-color: ${({theme:e})=>e.dim} transparent;
            }
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
        `}switches(){return c`
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
        `}library(){return c`
            .pd-library { padding: calc(${({theme:e})=>e.space} * 0.375) calc(${({theme:e})=>e.space} * 0.75); }
            .pd-library .pd-paragraph, .pd-me .pd-paragraph { margin-block: 0; }
            .pd-me { padding: 0 calc(${({theme:e})=>e.space} * 0.75); }
            .pd-logo .pd-paragraph, .pd-me .pd-byline {
                display: flex;
                align-items: center;
                gap: calc(${({theme:e})=>e.space} * 0.4);
                font-size: calc(0.83 * ${({theme:e})=>e.size});
            }
            .pd-logo { margin-inline-end: calc(${({theme:e})=>e.space} / 2); }
            .pd-library .pd-word, .pd-me .pd-word { font-weight: 500; }
            .pd-library .pd-word.pa-label, .pd-me .pd-word.pa-label { font-weight: 400; }
            .pd-logo .pd-word {
                font-family: ${({theme:e})=>e.serif};
                font-size: calc(1.5 * ${({theme:e})=>e.size});
                font-weight: 600;
                line-height: 1;
                white-space: nowrap;
            }
            .pd-library .pa-reference, .pd-me .pa-reference { color: inherit; text-decoration: none; }
            .pd-logo .pd-paragraph::before, .pd-me .pd-byline::before {
                content: ${({theme:e})=>e.initial};
                display: grid;
                place-items: center;
                width: calc(${({theme:e})=>e.space} * 1.3);
                height: calc(${({theme:e})=>e.space} * 1.3);
                font-size: ${({theme:e})=>e.size};
                font-weight: 600;
            }
            .pd-logo .pd-paragraph::before { border-radius: calc(${({theme:e})=>e.space} / 3); }
            .pd-me .pd-byline::before {
                border-radius: 50%;
                background: ${({theme:e})=>e.me};
                color: ${({theme:e})=>e.white};
            }
            .pd-subjects { min-width: 0; }
            .pd-subjects .pd-section {
                display: flex;
                gap: calc(${({theme:e})=>e.space} / 12);
                margin-block: 0;
            }
            .pd-subjects .pd-paragraph {
                display: flex;
                align-items: center;
                gap: calc(${({theme:e})=>e.space} / 3);
                padding: calc(${({theme:e})=>e.space} * 0.29) calc(${({theme:e})=>e.space} * 0.42);
                border-radius: calc(${({theme:e})=>e.space} / 3);
                font-size: calc(0.964 * ${({theme:e})=>e.size});
                white-space: nowrap;
            }
            .pd-subjects .pd-paragraph::before {
                content: '';
                width: calc(${({theme:e})=>e.space} * 0.375);
                height: calc(${({theme:e})=>e.space} * 0.375);
                border-radius: 50%;
                background: var(--colour, ${({theme:e})=>e.barDim});
            }
            .pd-subjects .pa-reference { color: inherit; text-decoration: none; }
        `}head(){return c`
            .pd-head { padding: calc(${({theme:e})=>e.space} * 0.83) calc(${({theme:e})=>e.space} * 1.17) calc(${({theme:e})=>e.space} * 0.58); }
            .pd-head .pd-chapter { margin-block: 0; }
            .pd-head .pd-filed-under {
                display: flex;
                align-items: center;
                gap: calc(${({theme:e})=>e.space} * 0.3);
                flex-basis: 100%;
                margin-block: 0;
                font-size: calc(0.9 * ${({theme:e})=>e.size});
                color: ${({theme:e})=>e.soft};
            }
            .pd-head .pd-filed-under .pa-label {
                font-size: calc(0.68 * ${({theme:e})=>e.size});
                font-weight: 600;
                letter-spacing: 0.12em;
                text-transform: uppercase;
            }
            .pd-head .pd-filed-under .pd-word + .pd-word { font-weight: 500; }
            .pd-head .pd-filed-under .pa-reference { color: ${({theme:e})=>e.accent}; text-decoration: none; }
            .pd-head .pd-title {
                font-family: ${({theme:e})=>e.serif};
                font-size: calc(2.57 * ${({theme:e})=>e.size});
                font-weight: 600;
                line-height: 1.04;
                color: ${({theme:e})=>e.heading};
            }
        `}holds(){return c`
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
            .pd-holds .pd-paragraph.pa-entry .pd-word + .pd-word {
                margin-inline-start: auto;
                font-size: calc(0.83 * ${({theme:e})=>e.size});
                opacity: 0.55;
            }
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
        `}tones(){return c`
            .pa-dark .pd-library, .pa-dark .pd-me {
                background: ${({theme:e})=>e.bar};
                color: ${({theme:e})=>e.barInk};
            }
            .pa-dark .pd-library .pd-word, .pa-dark .pd-me .pd-word { color: ${({theme:e})=>e.barInk}; }
            .pa-dark .pd-library .pa-label, .pa-dark .pd-me .pa-label, .pa-dark .pd-subjects .pd-paragraph { color: ${({theme:e})=>e.barDim}; }
            .pa-dark .pd-logo .pd-paragraph::before {
                background: ${({theme:e})=>e.mark};
                color: ${({theme:e})=>e.bar};
            }
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
            .pa-light .pd-library .pa-label, .pa-light .pd-me .pa-label, .pa-light .pd-subjects .pd-paragraph, .pa-white-over-black .pd-library .pa-label, .pa-white-over-black .pd-me .pa-label, .pa-white-over-black .pd-subjects .pd-paragraph { color: ${({theme:e})=>e.soft}; }
            .pa-light .pd-logo .pd-paragraph::before, .pa-white-over-black .pd-logo .pd-paragraph::before {
                background: ${({theme:e})=>e.bar};
                color: ${({theme:e})=>e.barInk};
            }
            .pa-white-over-black .pd-holds {
                background: ${({theme:e})=>e.bar};
                color: ${({theme:e})=>e.barInk};
                border-inline-end: thin solid ${({theme:e})=>e.barLine};
            }
            .pa-white-over-black .pd-holds .pd-chapter, .pa-white-over-black .pd-holds .pd-heading { color: ${({theme:e})=>e.barDim}; }
            .pa-white-over-black .pd-holds .pd-paragraph.pa-entry { color: ${({theme:e})=>e.barInk}; }
            .pa-white-over-black .pd-holds .pd-paragraph.pa-entry.pa-open { background: ${({theme:e})=>e.barOn}; color: ${({theme:e})=>e.barInk}; }
        `}turns(){return c`
            .pd-paragraph.pd-turn {
                display: flex;
                justify-content: space-between;
                gap: ${({theme:e})=>e.space};
                font-size: calc(0.786 * ${({theme:e})=>e.size});
            }
            .pd-turn .pa-reference { font-weight: 500; text-decoration: none; }
            .pd-turn .pd-count { color: ${({theme:e})=>e.faint}; }
        `}};i(ze,"$LibraryBookTheme");let N=ze;const Hs=r(N);var Fs=Object.defineProperty,Rs=Object.getOwnPropertyDescriptor,Ts=i((d,e,s,o)=>{for(var t=Rs(e,s),n=d.length-1,p;n>=0;n--)(p=d[n])&&(t=p(e,s,t)||t);return t&&Fs(e,s,t),t},"__decorateClass$9");const Pe=class Pe extends u{constructor(){super(...arguments),this.specification=new W}defines(e){e.classes.add(this,"pa-label")}erase(e){e.classes.revert(this)}};i(Pe,"$Label");let ee=Pe;const De=class De extends g{$saidOfAWord(e){l(e instanceof D,"label is said of a word, and this is not one")}};i(De,"LabelSpecification");let W=De;Ts([h("label is said of a word")],W.prototype,"$saidOfAWord");const ms=r(ee),Ce=class Ce extends f{write(){const e=this.book.author,s=r(X),o=r(ms),t=r(_);return a.jsxs(a.Fragment,{children:[a.jsxs(s,{children:[a.jsx(o,{}),"by"]}),a.jsxs(s,{children:[a.jsx(t,{children:e.means.identifier}),e.name]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-byline")}};i(Ce,"$Byline");let se=Ce;const Ae=class Ae extends f{write(){const e=this.book.subject,s=r(X),o=r(ms),t=r(_);return a.jsxs(a.Fragment,{children:[a.jsxs(s,{children:[a.jsx(o,{}),"filed under"]}),a.jsxs(s,{children:[a.jsx(t,{children:e.means.identifier}),e.name]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-filed-under")}};i(Ae,"$FiledUnder");let ae=Ae;const Es=r(se),Gs=r(ae);var Bs=Object.defineProperty,Ls=Object.getOwnPropertyDescriptor,Ms=i((d,e,s,o)=>{for(var t=Ls(e,s),n=d.length-1,p;n>=0;n--)(p=d[n])&&(t=p(e,s,t)||t);return t&&Bs(e,s,t),t},"__decorateClass$8");const _e=class _e extends g{$saidOfABook(e){l(e instanceof O,"this is said of a book of this library, and here it is said of something else")}};i(_e,"OfABookSpecification");let b=_e;Ms([h("this is said of a book of this library")],b.prototype,"$saidOfABook");const Q=class Q extends Ds{constructor(){super(...arguments),this.specification=new b,this.themeProvider=!0,this.style=y.div`
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
    `}get pages(){return this.book.pages}get open(){return this.book.open}$Bound(){const e=this.style;this.style=s=>a.jsx(e,{$at:this.book.means?.identifier,...s}),super.$Bound()}defines(e){for(const s of e.annotations.after(this))s instanceof Q&&e.annotations.express(s,!1);super.defines(e),e.classes.add(this,"pa-layout"),this.open!==void 0&&e.classes.add(this,"pa-turned")}erase(e){super.erase(e),e.classes.revert(this)}parts(){return[this.paging(),this.regions(),this.areas(),this.phone()]}paging(){return c`
            .pd-leaf:not(.pd-open) { display: none; }
        `}regions(){return c`
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
            .pa-layout .pd-switches {
                display: flex;
                flex-wrap: wrap;
                justify-content: flex-end;
                align-items: center;
                gap: calc(${({theme:e})=>e.space} / 3);
            }
            .pa-layout .pd-leaves { grid-area: leaves; min-width: 0; overflow-y: auto; }
            .pa-layout .pd-words .pd-chapter { scroll-margin-block-start: ${({theme:e})=>e.space}; }
        `}areas(){return c`
            .pd-book.pa-layout {
                grid-template-columns: ${({theme:e})=>e.holdsColumn} minmax(0, 1fr);
                grid-template-rows: auto auto minmax(0, 1fr);
                grid-template-areas: 'library library' 'holds head' 'holds leaves';
            }
            .pa-layout .pd-me {
                grid-area: library;
                justify-self: end;
                background: none;
            }
        `}phone(){return c`
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
                .pa-layout .pd-leaves { order: 3; overflow: visible; }
                .pa-layout .pd-words .pd-chapter { scroll-margin-block-start: calc(${({theme:e})=>e.barHeight} + ${({theme:e})=>e.space} / 2); }
            }
        `}};i(Q,"$Layout");let te=Q;const Js=r(te);var Ks=Object.defineProperty,Qs=Object.getOwnPropertyDescriptor,xs=i((d,e,s,o)=>{for(var t=Qs(e,s),n=d.length-1,p;n>=0;n--)(p=d[n])&&(t=p(e,s,t)||t);return t&&Ks(e,s,t),t},"__decorateClass$7");const Ie=class Ie extends we{constructor(){super(...arguments),this.specification=new k,this.style=y.div`
        .pa-coloured { --colour: ${e=>e.$colour}; }
    `}get colour(){return Cs.copy(this.text).trim()}$Coloured(...e){this.$Format(...e);const s=this.style;this._painted=o=>a.jsx(s,{$colour:this.colour,...o})}defines(e){e.classes.add(this,"pa-coloured"),e.containers.add(this,this._painted)}erase(e){e.classes.revert(this),e.containers.revert(this)}};i(Ie,"$Coloured");let v=Ie;const Ne=class Ne extends g{$saidOfAChapterOrAParagraph(e){l(e instanceof m||e instanceof f,"coloured is said of a chapter or a paragraph, and this is neither")}$givenItsColour(e){l(/^#[0-9a-f]{6}$/iu.test(e.annotations.expressed(v)?.colour??""),"coloured is given its colour as six hex digits, and this one was given something else")}};i(Ne,"ColouredSpecification");let k=Ne;xs([h("coloured is said of a chapter or a paragraph")],k.prototype,"$saidOfAChapterOrAParagraph");xs([h("coloured is given its colour")],k.prototype,"$givenItsColour");const q=r(v);var Us=Object.defineProperty,Vs=Object.getOwnPropertyDescriptor,ye=i((d,e,s,o)=>{for(var t=Vs(e,s),n=d.length-1,p;n>=0;n--)(p=d[n])&&(t=p(e,s,t)||t);return t&&Us(e,s,t),t},"__decorateClass$6");const We=class We extends we{constructor(){super(...arguments),this.specification=new E,this.style=y.div`
        ${e=>e.$colour===void 0?"":`.pa-entry { --colour: ${e.$colour}; }`}
    `}get place(){return Y(this.parent).identifier}get leads(){return this.book.named(this.place)}get colour(){return this.leads?.annotations.expressed(v)?.colour}$Entry(...e){this.$Format(...e);const s=this.style;this._coloured=o=>a.jsx(s,{$colour:this.colour,...o})}defines(e){e.classes.add(this,"pa-entry"),e.containers.add(this,this._coloured),(this.place===this.book?.$bookmark||this.place===this.book.open?.mention?.identifier)&&e.classes.add(this,"pa-open")}erase(e){e.classes.revert(this),e.containers.revert(this)}};i(We,"$Entry");let H=We;const He=class He extends u{constructor(){super(...arguments),this.specification=new T}defines(e){e.classes.add(this,"pa-appendix")}erase(e){e.classes.revert(this)}};i(He,"$Appendix");let F=He;const Fe=class Fe extends u{constructor(){super(...arguments),this.specification=new R}get entries(){return this.chapter.text.find(I).flatMap(s=>s.text.find(f)).filter(s=>!s.is(As)&&Y(s)!==void 0)}$Bound(){const e=r(ws);for(const s of this.entries)s.annotations.add(this,a.jsx(e,{}));super.$Bound()}};i(Fe,"$Index");let re=Fe;const Re=class Re extends g{$saidOfATableOfContents(e){l(e.is(us),"an index is said of a table of contents, and this chapter is not one")}};i(Re,"IndexSpecification");let R=Re;ye([h("an index is said of a table of contents")],R.prototype,"$saidOfATableOfContents");const Te=class Te extends g{$saidOfASection(e){l(e instanceof I&&e.chapter?.is(us)===!0,"an appendix is said of a section of a table of contents, and this is not one")}};i(Te,"AppendixSpecification");let T=Te;ye([h("an appendix is said of a section of a table of contents")],T.prototype,"$saidOfASection");const Ee=class Ee extends g{$saidOfAnEntry(e){l(e instanceof f&&Y(e)!==void 0,"an entry is said of a paragraph that leads somewhere, and this is not one")}};i(Ee,"EntrySpecification");let E=Ee;ye([h("an entry is said of a paragraph that leads somewhere")],E.prototype,"$saidOfAnEntry");const Y=i(d=>d.annotations.expressed(ls)??d.text.find(D).map(e=>e.annotations.expressed(ls)).find(e=>e!==void 0),"leads"),ws=r(H),ja=r(re),Oa=r(F),U=class U extends u{constructor(){super(...arguments),this.specification=new b}defines(e){for(const s of e.annotations.after(this))s instanceof U&&e.annotations.express(s,!1);e.classes.add(this,"pa-tone")}erase(e){e.classes.revert(this)}};i(U,"$Tone");let x=U;const Ge=class Ge extends x{defines(e){super.defines(e),e.classes.add(this,"pa-dark")}};i(Ge,"$Dark");let ie=Ge;const Be=class Be extends x{defines(e){super.defines(e),e.classes.add(this,"pa-light")}};i(Be,"$Light");let ne=Be;const Le=class Le extends x{defines(e){super.defines(e),e.classes.add(this,"pa-white-over-black")}};i(Le,"$WhiteOverBlack");let oe=Le;const ve=r(x),ys=r(ie),vs=r(ne),Xs=r(oe),Ys=i(()=>a.jsx(C,{children:a.jsx(A,{children:"[Dougs Library](/dougs-library/)"})}),"Logo"),Zs=i(()=>a.jsxs(_s,{children:[a.jsxs(C,{children:[a.jsx(q,{children:"#d9a05b"}),a.jsx(A,{children:"[Dougs Story](/dougs-story/)"})]}),a.jsxs(C,{children:[a.jsx(q,{children:"#3b6cf0"}),a.jsx(A,{children:"[Dougs Design](/dougs-design/)"})]}),a.jsxs(C,{children:[a.jsx(q,{children:"#4fb3a8"}),a.jsx(A,{children:"[Dougs Reference Manual](/dougs-reference-manual/)"})]})]}),"Subjects");var qs=Object.defineProperty,Ss=Object.getOwnPropertyDescriptor,ea=i((d,e,s,o)=>{for(var t=Ss(e,s),n=d.length-1,p;n>=0;n--)(p=d[n])&&(t=p(e,s,t)||t);return t&&qs(e,s,t),t},"__decorateClass$5");const Me=class Me extends D{write(){const e=this.book.pages;return`${e.indexOf(this.chapter)+1} of ${e.length}`}$Define(){super.$Define(),this.classes.add(this,"pd-count")}};i(Me,"$Count");let de=Me;const Je=class Je extends u{constructor(){super(...arguments),this.specification=new j}defines(e){e.classes.add(this,"pa-before")}erase(e){e.classes.revert(this)}};i(Je,"$Before");let pe=Je;const Ke=class Ke extends u{constructor(){super(...arguments),this.specification=new j}defines(e){e.classes.add(this,"pa-after")}erase(e){e.classes.revert(this)}};i(Ke,"$After");let ce=Ke;const Qe=class Qe extends g{$saidOfAWordOfATurn(e){l(e instanceof D&&e.parent instanceof G,"this is said of a word of a turn, and here it is said of something else")}};i(Qe,"OfATurnSpecification");let j=Qe;ea([h("this is said of a word of a turn")],j.prototype,"$saidOfAWordOfATurn");const sa=r(de),aa=r(pe),ta=r(ce),Ue=class Ue extends f{get before(){const e=this.book.pages;return e[e.indexOf(this.chapter)-1]??this.chapter}get after(){const e=this.book.pages;return e[e.indexOf(this.chapter)+1]??this.chapter}write(){const e=r(X),s=r(sa),o=r(aa),t=r(ta),n=r(this.before===this.chapter?hs:_),p=r(this.after===this.chapter?hs:_);return a.jsxs(a.Fragment,{children:[a.jsxs(e,{children:[a.jsx(o,{}),a.jsx(n,{children:this.before.mention.identifier}),"← ",this.before.title.name]}),a.jsx(s,{}),a.jsxs(e,{children:[a.jsx(t,{}),a.jsx(p,{children:this.after.mention.identifier}),this.after.title.name," →"]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-turn")}};i(Ue,"$Turn");let G=Ue;const ra=r(G);var ia=Object.defineProperty,na=Object.getOwnPropertyDescriptor,ke=i((d,e,s,o)=>{for(var t=na(e,s),n=d.length-1,p;n>=0;n--)(p=d[n])&&(t=p(e,s,t)||t);return t&&ia(e,s,t),t},"__decorateClass$4");const Ve=class Ve extends Is{constructor(){super(...arguments),this.specification=new $}get chapters(){return this.text.find(m).filter(e=>[...e.classes].includes("pd-canonical"))}get placed(){return[this.cover,this.synopsis,this.table,...this.chapters]}get pages(){const e=this.appendix;return this.chapters.filter(s=>!e.includes(s))}get appendix(){const e=this.table;if(e===void 0)return[];const s=e.text.find(I).filter(o=>o.is(F)).flatMap(o=>o.text.find(f).map(t=>Y(t)?.identifier));return this.chapters.filter(o=>s.includes(o.mention?.identifier??""))}get open(){return this.$bookmark===void 0?void 0:this.named(this.$bookmark)}get tones(){return[ys,vs,Xs]}write(){return a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"pd-library",children:this.library()}),a.jsx("div",{className:"pd-me",children:this.byline()}),a.jsx("div",{className:"pd-holds",children:this.holds()}),a.jsx("div",{className:"pd-head",children:this.head()}),a.jsxs("div",{className:"pd-leaves",children:[this.front(),this.leaves()]})]})}library(){return a.jsxs(a.Fragment,{children:[this.logo(),this.subjects()]})}logo(){return a.jsx("div",{className:"pd-logo",children:a.jsx(Ys,{})})}subjects(){return a.jsx("div",{className:"pd-subjects",children:a.jsx(Zs,{})})}holds(){const e=r(this.table);return a.jsx(e,{})}head(){const e=r(this.cover);return a.jsxs(a.Fragment,{children:[this.filed(),a.jsx(e,{}),a.jsx("div",{className:"pd-switches",children:this.switches()})]})}front(){return a.jsx("div",{className:this.open===void 0?"pd-leaf pd-front pd-open":"pd-leaf pd-front",children:this.opening()})}opening(){const e=r(this.synopsis);return a.jsx("div",{className:"pd-words",children:a.jsx(e,{})})}leaves(){return this.chapters.map((e,s)=>{const o=r(e);return a.jsxs("div",{className:e===this.open?"pd-leaf pd-open":"pd-leaf",children:[a.jsx("div",{className:"pd-words",children:a.jsx(o,{})}),a.jsx("div",{className:"pd-files",children:this.listings(e)})]},s)})}named(e){return this.chapters.find(s=>s.mention?.identifier===e||this.sections(s).some(o=>o.mention?.identifier===e))}byline(){const e=r(Es);return a.jsx(e,{chapter:this.cover})}filed(){const e=r(Gs);return a.jsx(e,{chapter:this.cover})}switches(){}listings(e){const s=r(Ws);return e.annotations.find(gs).reverse().map((o,t)=>a.jsx(s,{chapter:e,identifier:o.$identifier,type:o.$type},t))}sections(e){return e.text.find(I).flatMap(s=>[s,...this.sections(s)])}turn(){this.bookmark!==this.cover&&super.turn()}$Define(){super.$Define();const e=r(Js),s=r(ve);this.annotations.add(this,a.jsx(e,{}),a.jsx(s,{}))}$Bound(){const e=r(ra);for(const s of this.pages)s.text.add(this,a.jsx(e,{}));super.$Bound()}};i(Ve,"$LibraryBook");let O=Ve;const Xe=class Xe extends Ns{$holdsOnlyChapters(e){l([...e.text].every(s=>s instanceof m),"a book of this library holds only chapters, and this one holds something else")}$placesEveryChapter(e){l(e.text.find(m).every(s=>e.placed.includes(s)),"a book of this library has a place for every chapter it holds, and this one holds a chapter it places nowhere")}$onlyAChapterAppends(e){l(e.text.find(m).every(s=>e.chapters.includes(s)||!s.is(gs)),"only an ordinary chapter appends a file, and here a cover, a synopsis or a table of contents appends one")}};i(Xe,"LibraryBookSpecification");let $=Xe;ke([h("a book of this library holds only chapters")],$.prototype,"$holdsOnlyChapters");ke([h("a book of this library has a place for every chapter it holds")],$.prototype,"$placesEveryChapter");ke([h("only an ordinary chapter appends a file")],$.prototype,"$onlyAChapterAppends");const ks=r(O);r(ks,bs)(Hs);r(ks,ve)(ys);const Ye=class Ye extends D{get on(){return this.book.is(this.$of)}$Switch(...e){this.$Writing(...e),this._button=s=>a.jsx("button",{type:"button","aria-pressed":this.on,onClick:i(()=>this.press(),"onClick"),...s}),this.containers.replace(this,"span",this._button)}press(){const e=this.book,s=[e.$is].flat();e.$is=this.on?s.filter(o=>o!==this.$of):[this.$of,...s]}$Define(){super.$Define(),this.classes.add(this,"pd-switch")}};i(Ye,"$Switch");let B=Ye;const Ze=class Ze extends B{press(){const e=this.book,s=[e.$is].flat().filter(o=>!this.$among.includes(o));e.$is=[this.$of,...s]}};i(Ze,"$Tab");let le=Ze;r(B);const oa=r(le);var da=Object.defineProperty,pa=Object.getOwnPropertyDescriptor,ca=i((d,e,s,o)=>{for(var t=pa(e,s),n=d.length-1,p;n>=0;n--)(p=d[n])&&(t=p(e,s,t)||t);return t&&da(e,s,t),t},"__decorateClass$3");const V=class V extends u{constructor(){super(...arguments),this.specification=new b}defines(e){for(const s of e.annotations.after(this))s instanceof V&&e.annotations.express(s,!1);e.classes.add(this,"pa-reading")}erase(e){e.classes.revert(this)}};i(V,"$Reading");let z=V;const qe=class qe extends z{defines(e){super.defines(e),e.classes.add(this,"pa-code-forward")}};i(qe,"$CodeForward");let he=qe;const Se=class Se extends z{defines(e){super.defines(e),e.classes.add(this,"pa-words-forward")}};i(Se,"$WordsForward");let fe=Se;const es=class es extends u{constructor(){super(...arguments),this.specification=new M}defines(e){e.classes.add(this,"pa-brief")}erase(e){e.classes.revert(this)}};i(es,"$Brief");let L=es;const ss=class ss extends g{$saidOfAParagraph(e){l(e instanceof f,"brief is said of a paragraph, and this is not one")}};i(ss,"BriefSpecification");let M=ss;ca([h("brief is said of a paragraph")],M.prototype,"$saidOfAParagraph");const js=r(z),fs=r(he),ue=r(fe),za=r(L);var la=Object.defineProperty,ha=Object.getOwnPropertyDescriptor,fa=i((d,e,s,o)=>{for(var t=ha(e,s),n=d.length-1,p;n>=0;n--)(p=d[n])&&(t=p(e,s,t)||t);return t&&la(e,s,t),t},"__decorateClass$2");const as=class as extends we{constructor(){super(...arguments),this.specification=new b,this.themeProvider=!0,this.style=y.div`
        .pa-spread .pd-leaf.pd-open {
            display: grid;
            grid-template-columns: minmax(0, 1fr) calc(2.2 * ${({theme:e})=>e.spreadColumn});
            grid-template-areas: 'words files';
            height: 100%;
            transition: grid-template-columns ${({theme:e})=>e.beat};
        }
        .pa-spread .pd-words { grid-area: words; overflow-y: auto; }
        .pa-spread .pd-files { grid-area: files; overflow-y: auto; min-width: 0; }
        .pa-spread .pd-files:empty { display: none; }
        .pa-spread.pa-words-forward .pd-leaf.pd-open { grid-template-columns: minmax(0, 1fr) calc(2.33 * ${({theme:e})=>e.space}); }
        .pa-spread.pa-words-forward .pd-files { overflow: hidden; }
        .pa-spread.pa-words-forward .pd-paragraph.pd-listing {
            display: flex;
            justify-content: center;
            padding: calc(${({theme:e})=>e.space} * 0.6667) 0 0;
        }
        .pa-spread.pa-words-forward .pd-listing .pd-word {
            writing-mode: vertical-rl;
            padding: 0;
            border-radius: 0;
        }
        .pa-spread.pa-words-forward .pd-listing .pd-code { display: none; }
        .pa-spread.pa-words-forward .pd-words .pd-paragraph.pa-brief { display: none; }
        .pa-spread.pa-code-forward .pd-leaf.pd-open {
            grid-template-columns: minmax(0, 1fr);
            grid-template-areas: 'words' 'files';
            height: auto;
        }
        .pa-spread.pa-code-forward .pd-words, .pa-spread.pa-code-forward .pd-files { overflow: visible; }
        .pa-spread.pa-code-forward .pd-files {
            margin: 0 calc(${({theme:e})=>e.space} * 1.8333) calc(${({theme:e})=>e.space} * 1.6667);
            border-radius: calc(${({theme:e})=>e.space} / 2);
            min-height: calc(${({theme:e})=>e.space} * 17.5);
        }
        .pa-spread.pa-code-forward .pd-words .pd-section { display: none; }
        @media (max-width: ${({theme:e})=>e.narrow}) {
            .pa-spread .pd-leaf.pd-open { display: block; height: auto; }
            .pa-spread.pa-words-forward .pd-listing .pd-word { writing-mode: horizontal-tb; }
        }
    `}defines(e){super.defines(e),e.classes.add(this,"pa-spread")}erase(e){super.erase(e),e.classes.revert(this)}};i(as,"$Spread");let ge=as;const ua=r(ge),ts=class ts extends O{constructor(){super(...arguments),this.specification=new J}get readings(){return[fs,ue]}get open(){return super.open??this.pages[0]}front(){}switches(){const e=r(oa);return a.jsxs(a.Fragment,{children:[a.jsx(e,{chapter:this.cover,of:fs,among:this.readings,children:"code"}),a.jsx(e,{chapter:this.cover,of:ue,among:this.readings,children:"words"}),super.switches()]})}$Define(){super.$Define();const e=r(ua),s=r(js);this.annotations.add(this,a.jsx(e,{}),a.jsx(s,{}))}};i(ts,"$Manual");let be=ts;const rs=class rs extends ${$everyChapterHasABrief(e){l(e.chapters.every(s=>s.text.find(f).some(o=>o.is(L))),"every chapter of a manual opens with a brief, and one here has none")}};i(rs,"ManualSpecification");let J=rs;fa([h("every chapter of a manual opens with a brief")],J.prototype,"$everyChapterHasABrief");const Z=r(be);r(Z,js)(ue);r(Z,ve)(vs);var ga=Object.defineProperty,ba=Object.getOwnPropertyDescriptor,je=i((d,e,s,o)=>{for(var t=ba(e,s),n=d.length-1,p;n>=0;n--)(p=d[n])&&(t=p(e,s,t)||t);return t&&ga(e,s,t),t},"__decorateClass$1");const is=class is extends u{constructor(){super(...arguments),this.specification=new w}get date(){return this.text.find($s)[0]}defines(e){e.classes.add(this,"pa-dated")}erase(e){e.classes.revert(this)}note(){const e=r(this.date);return a.jsx(e,{})}};i(is,"$Dated");let P=is;const ns=class ns extends g{$saidOfAChapter(e){l(e instanceof m,"dated is said of a chapter, and this is not one")}$datedOnce(e){l(e.annotations.containsOne(P),"a chapter is dated once, and this one is dated more than once")}$givenOneDate(e){l(e.annotations.expressed(P)?.text.find($s).length===1,"a dated chapter is given one date, and this one is given none or more than one")}};i(ns,"DatedSpecification");let w=ns;je([h("dated is said of a chapter")],w.prototype,"$saidOfAChapter");je([h("a chapter is dated once")],w.prototype,"$datedOnce");je([h("a dated chapter is given one date")],w.prototype,"$givenOneDate");const Pa=r(P),os=class os extends H{constructor(){super(...arguments),this.label=y.span.attrs({className:"pa-number"})``}get number(){return this.book.pages.indexOf(this.leads)+1}note(){const e=this.label;return this.number===0?void 0:a.jsx(e,{children:String(this.number)})}};i(os,"$NumberedEntry");let $e=os;const $a=r($e);r(Z,ws)($a);const ds=class ds extends N{constructor(){super(...arguments),this.measure="58ch",this.spreadColumn="15.5rem",this.colour="#4fb3a8",this.side="#e3f4f1",this.sideLine="#c6e5df",this.ink="#1a1f36",this.heading="#1a1f36",this.soft="#4f566b",this.faint="#8792a2",this.line="#e6e8ee",this.rule="#e6e8ee",this.panel="#f7f8fa",this.accent="#0a7a70",this.capital="#0a7a70",this.lit="#0a7a70",this.tint="#e3f4f1",this.night="#0f2a33",this.dusk="#17363f"}parts(){return[...super.parts(),this.index(),this.words(),this.file(),this.fold(),this.small()]}holds(){return c`
            ${super.holds()}
            .pd-holds .pd-paragraph.pa-entry { padding: calc(${({theme:e})=>e.space} / 4) calc(${({theme:e})=>e.space} / 3); }
            .pd-holds .pd-paragraph.pa-entry::before { content: none; }
        `}index(){return c`
            .pd-holds {
                background: ${({theme:e})=>e.panel};
                border-inline-end: thin solid ${({theme:e})=>e.line};
                padding: calc(${({theme:e})=>e.space} * 0.75) calc(${({theme:e})=>e.space} * 0.6);
                scrollbar-width: thin;
                scrollbar-color: ${({theme:e})=>e.line} transparent;
            }
            .pd-library {
                background: ${({theme:e})=>e.panel};
                border-block-end: thin solid ${({theme:e})=>e.line};
            }
            .pd-logo .pd-paragraph, .pd-library .pd-byline {
                margin-block: 0;
                font-size: calc(0.83 * ${({theme:e})=>e.size});
                color: ${({theme:e})=>e.faint};
            }
            .pd-logo .pa-reference, .pd-library .pd-byline .pa-reference {
                color: ${({theme:e})=>e.soft};
                text-decoration: none;
            }
            .pd-head .pd-switches { margin-block-start: calc(${({theme:e})=>e.space} / 2); }
            .pd-head .pd-switch { font-size: calc(0.9 * ${({theme:e})=>e.size}); }
        `}words(){return c`
            .pd-words {
                padding: calc(${({theme:e})=>e.space} * 1.4) calc(${({theme:e})=>e.space} * 1.8);
                font-size: calc(1.0357 * ${({theme:e})=>e.size});
            }
            .pd-words .pd-chapter { margin-block: 0; }
            .pd-words .pd-title {
                font-size: calc(2.1429 * ${({theme:e})=>e.size});
                font-weight: 600;
                line-height: 1.15;
                letter-spacing: -0.02em;
                margin-block-end: calc(${({theme:e})=>e.space} * 0.4);
            }
            .pd-words .pd-section { margin-block-start: calc(${({theme:e})=>e.space} * 1.25); }
            .pd-words .pd-heading {
                font-size: calc(0.9286 * ${({theme:e})=>e.size});
                font-weight: 600;
                letter-spacing: 0.06em;
                text-transform: uppercase;
                color: ${({theme:e})=>e.faint};
                padding-block-start: calc(${({theme:e})=>e.space} * 0.9);
                margin-block-end: calc(${({theme:e})=>e.space} / 6);
                border-block-start: thin solid ${({theme:e})=>e.line};
            }
            .pd-words .pd-paragraph { margin-block: calc(${({theme:e})=>e.space} * 0.4); }
            .pd-words .pd-paragraph.pd-turn { margin-block-start: calc(${({theme:e})=>e.space} * 1.1); }
            .pd-book.pa-code-forward .pd-words { padding: calc(${({theme:e})=>e.space} * 1.1667) calc(${({theme:e})=>e.space} * 1.8333) calc(${({theme:e})=>e.space} * 0.75); }
            .pd-book.pa-code-forward .pd-words .pd-paragraph.pa-brief {
                font-size: calc(1.1429 * ${({theme:e})=>e.size});
                color: ${({theme:e})=>e.soft};
            }
        `}file(){return c`
            .pd-book.pa-code-forward .pd-listing .pd-code { font-size: calc(0.9286 * ${({theme:e})=>e.size}); }
        `}fold(){return c`
            .pa-words-forward .pd-listing .pd-word {
                background: none;
                font-size: calc(0.8571 * ${({theme:e})=>e.size});
                letter-spacing: 0.08em;
                color: color-mix(in srgb, ${({theme:e})=>e.glow} 70%, ${({theme:e})=>e.night});
            }
        `}small(){return c`
            @media (max-width: ${({theme:e})=>e.narrow}) {
                .pd-holds, .pd-library {
                    border-inline-end: none;
                    border-block-end: thin solid ${({theme:e})=>e.line};
                }
                .pd-words { padding: calc(${({theme:e})=>e.space} * 0.83) calc(${({theme:e})=>e.space} * 0.67) calc(${({theme:e})=>e.space} / 3); }
                .pd-words .pd-title { font-size: calc(1.72 * ${({theme:e})=>e.size}); }
            }
        `}};i(ds,"$ManualTheme");let me=ds;const ma=r(me);r(Z,bs)(ma);var xa=Object.defineProperty,wa=Object.getOwnPropertyDescriptor,ya=i((d,e,s,o)=>{for(var t=wa(e,s),n=d.length-1,p;n>=0;n--)(p=d[n])&&(t=p(e,s,t)||t);return t&&xa(e,s,t),t},"__decorateClass");const ps=class ps extends u{constructor(){super(...arguments),this.specification=new K}defines(e){e.classes.add(this,"pa-first")}erase(e){e.classes.revert(this)}};i(ps,"$First");let xe=ps;const cs=class cs extends g{$saidOfAParagraph(e){l(e instanceof f,"first is said of a paragraph, and this is not one")}};i(cs,"FirstSpecification");let K=cs;ya([h("first is said of a paragraph")],K.prototype,"$saidOfAParagraph");const Da=r(xe);export{O as $,Oa as A,za as B,q as C,ys as D,Da as F,ja as I,vs as L,b as O,oa as T,N as a,ve as b,P as c,sa as d,de as e,Pa as f,be as g};
