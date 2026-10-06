var Os=Object.defineProperty;var i=(d,e)=>Os(d,"name",{value:e,configurable:!0});import{$ as r,e as f,W as U,D as Ps,j as t,O as Ds,s as w,l as c,R as C,c as u,A as b,d as l,Q as z,g as h,U as zs,f as xe,y as Cs,h as m,z as A,V as As,G as bs,X as hs,v as _s,t as X,M as Y,S as fs,Y as Is,Z as Ns,_ as ye,a0 as Ws,T as gs,E as $s}from"./index-DGVF6UTJ.js";const Pe=class Pe extends f{constructor(){super(...arguments),this.$identifier="",this.$type=""}get name(){return`${this.$identifier}${this.$type}`}write(){const e=r(U),s=r(Ps);return t.jsxs(t.Fragment,{children:[t.jsx(e,{children:this.name}),t.jsx(s,{identifier:this.$identifier,type:this.$type,numbered:!0})]})}$Define(){super.$Define(),this.classes.add(this,"pd-listing")}};i(Pe,"$Listing");let q=Pe;const Hs=r(q),De=class De extends Ds{constructor(){super(...arguments),this.font="'Inter', system-ui, sans-serif",this.prose="'Inter', system-ui, sans-serif",this.mono="'JetBrains Mono', ui-monospace, monospace",this.size="0.875rem",this.leading="1.6",this.measure="44rem",this.spreadColumn="15.5rem",this.space="1.5rem",this.holdsColumn="240px",this.barHeight="50px",this.beat="320ms",this.narrow="48rem",this.colour="#4e9eb9",this.accent="#166178",this.bar="#0c1b1f",this.barInk="#ffffff",this.barDim="#a9bcc1",this.barOn="rgba(255, 255, 255, 0.11)",this.barLine="#1d3339",this.mark="#c8f4fb",this.side="#e3f5fa",this.sideInk="#10252c",this.sideDim="#516770",this.sideOn="#ffffff",this.sideLine="#cbe6ee",this.night="#0c1b1f",this.deep="#14323c",this.blue="#166178",this.sea="#4e9eb9",this.sky="#8fc8dc",this.opal="#c8f4fb",this.pale="#e3f5fa",this.mist="#f1f7f9",this.white="#ffffff",this.ink="#10252c",this.soft="#516770",this.line="#dbe7ec",this.me="#e8590c",this.wash="linear-gradient(105deg, #e2f6fb 0%, #ecf0fd 52%, #fae9f4 100%)",this.serif="'Cormorant Garamond', Georgia, serif",this.bookPaper="#fbf9f3",this.bookInk="#29251d",this.heading="#10252c",this.capital="#166178",this.lit="#166178",this.faint="#8792a2",this.paper="#ffffff",this.panel="#f1f7f9",this.rule="#dbe7ec",this.edge="transparent",this.tint="#e3f5fa",this.dusk="#14323c",this.glow="#cfe6e3",this.dim="#4f7672",this.keyword="#8ad7ff",this.string="#ffd48a",this.type="#9be3d6",this.comment="#5f8a86",this.haze="#a9bcc1",this.glass="rgba(255, 255, 255, 0.62)",this.binding="linear-gradient(160deg, #16303a, #0c1b1f)",this.spine="inset 5px 0 0 rgba(0, 0, 0, 0.14), inset 6px 0 0 rgba(255, 255, 255, 0.12), 0 10px 20px -10px rgba(0, 0, 0, 0.45)",this.shadow="0 0.75rem 1.4rem -0.9rem rgba(12, 27, 31, 0.55)",this.initial="'D'",this.volume="11.5rem",this.card="18rem",this.photo="7rem",this.style=w.div`${this.parts()}`}parts(){return[this.page(),this.writing(),this.links(),this.figures(),this.listings(),this.switches(),this.turns(),this.library(),this.head(),this.holds(),this.tones()]}page(){return c`
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
            .pd-library .pd-filed-under, .pd-me .pd-byline {
                display: flex;
                align-items: center;
                gap: calc(${({theme:e})=>e.space} * 0.4);
                font-size: calc(0.83 * ${({theme:e})=>e.size});
            }
            .pd-library .pd-word, .pd-me .pd-word { font-weight: 500; }
            .pd-library .pd-word.pa-label, .pd-me .pd-word.pa-label { font-weight: 400; }
            .pd-library .pd-filed-under .pd-word {
                font-family: ${({theme:e})=>e.serif};
                font-size: calc(1.45 * ${({theme:e})=>e.size});
                font-weight: 600;
                line-height: 1;
            }
            .pd-library .pa-reference, .pd-me .pa-reference { color: inherit; text-decoration: none; }
            .pd-library .pd-filed-under::before, .pd-me .pd-byline::before {
                content: ${({theme:e})=>e.initial};
                display: grid;
                place-items: center;
                width: calc(${({theme:e})=>e.space} * 1.3);
                height: calc(${({theme:e})=>e.space} * 1.3);
                font-size: ${({theme:e})=>e.size};
                font-weight: 600;
            }
            .pd-library .pd-filed-under::before { border-radius: calc(${({theme:e})=>e.space} / 3); }
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
            .pa-dark .pd-library .pd-filed-under::before {
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
            .pa-light .pd-library .pd-filed-under::before, .pa-white-over-black .pd-library .pd-filed-under::before {
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
        `}};i(De,"$LibraryBookTheme");let _=De;const Fs=r(_);var Rs=Object.defineProperty,Ts=Object.getOwnPropertyDescriptor,Es=i((d,e,s,o)=>{for(var a=Ts(e,s),n=d.length-1,p;n>=0;n--)(p=d[n])&&(a=p(e,s,a)||a);return a&&Rs(e,s,a),a},"__decorateClass$9");const ze=class ze extends u{constructor(){super(...arguments),this.specification=new I}defines(e){e.classes.add(this,"pa-label")}erase(e){e.classes.revert(this)}};i(ze,"$Label");let S=ze;const Ce=class Ce extends b{$saidOfAWord(e){l(e instanceof z,"label is said of a word, and this is not one")}};i(Ce,"LabelSpecification");let I=Ce;Es([h("label is said of a word")],I.prototype,"$saidOfAWord");const ms=r(S),Ae=class Ae extends f{write(){const e=this.book.author,s=r(U),o=r(ms),a=r(C);return t.jsxs(t.Fragment,{children:[t.jsxs(s,{children:[t.jsx(o,{}),"by"]}),t.jsxs(s,{children:[t.jsx(a,{children:e.means.identifier}),e.name]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-byline")}};i(Ae,"$Byline");let ee=Ae;const _e=class _e extends f{write(){const e=this.book.subject,s=r(U),o=r(ms),a=r(C);return t.jsxs(t.Fragment,{children:[t.jsxs(s,{children:[t.jsx(o,{}),"filed under"]}),t.jsxs(s,{children:[t.jsx(a,{children:e.means.identifier}),e.name]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-filed-under")}};i(_e,"$FiledUnder");let se=_e;const Gs=r(ee),Bs=r(se);var Ms=Object.defineProperty,Js=Object.getOwnPropertyDescriptor,Ks=i((d,e,s,o)=>{for(var a=Js(e,s),n=d.length-1,p;n>=0;n--)(p=d[n])&&(a=p(e,s,a)||a);return a&&Ms(e,s,a),a},"__decorateClass$8");const Ie=class Ie extends b{$saidOfABook(e){l(e instanceof O,"this is said of a book of this library, and here it is said of something else")}};i(Ie,"OfABookSpecification");let g=Ie;Ks([h("this is said of a book of this library")],g.prototype,"$saidOfABook");const K=class K extends zs{constructor(){super(...arguments),this.specification=new g,this.themeProvider=!0,this.style=w.div`
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
    `}get pages(){return this.book.pages}get open(){return this.book.open}$Bound(){const e=this.style;this.style=s=>t.jsx(e,{$at:this.book.means?.identifier,...s}),super.$Bound()}defines(e){for(const s of e.annotations.after(this))s instanceof K&&e.annotations.express(s,!1);super.defines(e),e.classes.add(this,"pa-layout"),this.open!==void 0&&e.classes.add(this,"pa-turned")}erase(e){super.erase(e),e.classes.revert(this)}parts(){return[this.paging(),this.regions(),this.areas(),this.phone()]}paging(){return c`
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
        `}};i(K,"$Layout");let ae=K;const Ls=r(ae);var Qs=Object.defineProperty,Us=Object.getOwnPropertyDescriptor,xs=i((d,e,s,o)=>{for(var a=Us(e,s),n=d.length-1,p;n>=0;n--)(p=d[n])&&(a=p(e,s,a)||a);return a&&Qs(e,s,a),a},"__decorateClass$7");const Ne=class Ne extends xe{constructor(){super(...arguments),this.specification=new k,this.style=w.div`
        .pa-coloured { --colour: ${e=>e.$colour}; }
    `}get colour(){return Cs.copy(this.text).trim()}$Coloured(...e){this.$Format(...e);const s=this.style;this._painted=o=>t.jsx(s,{$colour:this.colour,...o})}defines(e){e.classes.add(this,"pa-coloured"),e.containers.add(this,this._painted)}erase(e){e.classes.revert(this),e.containers.revert(this)}};i(Ne,"$Coloured");let v=Ne;const We=class We extends b{$saidOfAChapterOrAParagraph(e){l(e instanceof m||e instanceof f,"coloured is said of a chapter or a paragraph, and this is neither")}$givenItsColour(e){l(/^#[0-9a-f]{6}$/iu.test(e.annotations.expressed(v)?.colour??""),"coloured is given its colour as six hex digits, and this one was given something else")}};i(We,"ColouredSpecification");let k=We;xs([h("coloured is said of a chapter or a paragraph")],k.prototype,"$saidOfAChapterOrAParagraph");xs([h("coloured is given its colour")],k.prototype,"$givenItsColour");const Z=r(v);var Vs=Object.defineProperty,Xs=Object.getOwnPropertyDescriptor,we=i((d,e,s,o)=>{for(var a=Xs(e,s),n=d.length-1,p;n>=0;n--)(p=d[n])&&(a=p(e,s,a)||a);return a&&Vs(e,s,a),a},"__decorateClass$6");const He=class He extends xe{constructor(){super(...arguments),this.specification=new R,this.style=w.div`
        ${e=>e.$colour===void 0?"":`.pa-entry { --colour: ${e.$colour}; }`}
    `}get place(){return ve(this.parent).identifier}get leads(){return this.book.named(this.place)}get colour(){return this.leads?.annotations.expressed(v)?.colour}$Entry(...e){this.$Format(...e);const s=this.style;this._coloured=o=>t.jsx(s,{$colour:this.colour,...o})}defines(e){e.classes.add(this,"pa-entry"),e.containers.add(this,this._coloured),(this.place===this.book?.$bookmark||this.place===this.book.open?.mention?.identifier)&&e.classes.add(this,"pa-open")}erase(e){e.classes.revert(this),e.containers.revert(this)}};i(He,"$Entry");let N=He;const Fe=class Fe extends u{constructor(){super(...arguments),this.specification=new F}defines(e){e.classes.add(this,"pa-appendix")}erase(e){e.classes.revert(this)}};i(Fe,"$Appendix");let W=Fe;const Re=class Re extends u{constructor(){super(...arguments),this.specification=new H}get entries(){return this.chapter.text.find(A).flatMap(s=>s.text.find(f)).filter(s=>!s.is(As)&&ve(s)!==void 0)}$Bound(){const e=r(ys);for(const s of this.entries)s.annotations.add(this,t.jsx(e,{}));super.$Bound()}};i(Re,"$Index");let te=Re;const Te=class Te extends b{$saidOfATableOfContents(e){l(e.is(bs),"an index is said of a table of contents, and this chapter is not one")}};i(Te,"IndexSpecification");let H=Te;we([h("an index is said of a table of contents")],H.prototype,"$saidOfATableOfContents");const Ee=class Ee extends b{$saidOfASection(e){l(e instanceof A&&e.chapter?.is(bs)===!0,"an appendix is said of a section of a table of contents, and this is not one")}};i(Ee,"AppendixSpecification");let F=Ee;we([h("an appendix is said of a section of a table of contents")],F.prototype,"$saidOfASection");const Ge=class Ge extends b{$saidOfAnEntry(e){l(e instanceof f&&ve(e)!==void 0,"an entry is said of a paragraph that leads somewhere, and this is not one")}};i(Ge,"EntrySpecification");let R=Ge;we([h("an entry is said of a paragraph that leads somewhere")],R.prototype,"$saidOfAnEntry");const ve=i(d=>d.annotations.expressed(hs)??d.text.find(z).map(e=>e.annotations.expressed(hs)).find(e=>e!==void 0),"leads"),ys=r(N),ja=r(te),Oa=r(W),L=class L extends u{constructor(){super(...arguments),this.specification=new g}defines(e){for(const s of e.annotations.after(this))s instanceof L&&e.annotations.express(s,!1);e.classes.add(this,"pa-tone")}erase(e){e.classes.revert(this)}};i(L,"$Tone");let x=L;const Be=class Be extends x{defines(e){super.defines(e),e.classes.add(this,"pa-dark")}};i(Be,"$Dark");let re=Be;const Me=class Me extends x{defines(e){super.defines(e),e.classes.add(this,"pa-light")}};i(Me,"$Light");let ie=Me;const Je=class Je extends x{defines(e){super.defines(e),e.classes.add(this,"pa-white-over-black")}};i(Je,"$WhiteOverBlack");let ne=Je;const ke=r(x),ws=r(re),vs=r(ie),Ys=r(ne),Zs=i(()=>t.jsxs(_s,{children:[t.jsxs(X,{children:[t.jsx(Z,{children:"#d9a05b"}),t.jsx(Y,{children:"[Dougs Story](/dougs-story/)"})]}),t.jsxs(X,{children:[t.jsx(Z,{children:"#d487a8"}),t.jsx(Y,{children:"[Dougs Design](/dougs-design/)"})]}),t.jsxs(X,{children:[t.jsx(Z,{children:"#4fb3a8"}),t.jsx(Y,{children:"[Dougs Reference Manual](/dougs-reference-manual/)"})]})]}),"Subjects");var qs=Object.defineProperty,Ss=Object.getOwnPropertyDescriptor,ea=i((d,e,s,o)=>{for(var a=Ss(e,s),n=d.length-1,p;n>=0;n--)(p=d[n])&&(a=p(e,s,a)||a);return a&&qs(e,s,a),a},"__decorateClass$5");const Ke=class Ke extends z{write(){const e=this.book.pages;return`${e.indexOf(this.chapter)+1} of ${e.length}`}$Define(){super.$Define(),this.classes.add(this,"pd-count")}};i(Ke,"$Count");let oe=Ke;const Le=class Le extends u{constructor(){super(...arguments),this.specification=new j}defines(e){e.classes.add(this,"pa-before")}erase(e){e.classes.revert(this)}};i(Le,"$Before");let de=Le;const Qe=class Qe extends u{constructor(){super(...arguments),this.specification=new j}defines(e){e.classes.add(this,"pa-after")}erase(e){e.classes.revert(this)}};i(Qe,"$After");let pe=Qe;const Ue=class Ue extends b{$saidOfAWordOfATurn(e){l(e instanceof z&&e.parent instanceof T,"this is said of a word of a turn, and here it is said of something else")}};i(Ue,"OfATurnSpecification");let j=Ue;ea([h("this is said of a word of a turn")],j.prototype,"$saidOfAWordOfATurn");const sa=r(oe),aa=r(de),ta=r(pe),Ve=class Ve extends f{get before(){const e=this.book.pages;return e[e.indexOf(this.chapter)-1]??this.chapter}get after(){const e=this.book.pages;return e[e.indexOf(this.chapter)+1]??this.chapter}write(){const e=r(U),s=r(sa),o=r(aa),a=r(ta),n=r(this.before===this.chapter?fs:C),p=r(this.after===this.chapter?fs:C);return t.jsxs(t.Fragment,{children:[t.jsxs(e,{children:[t.jsx(o,{}),t.jsx(n,{children:this.before.mention.identifier}),"← ",this.before.title.name]}),t.jsx(s,{}),t.jsxs(e,{children:[t.jsx(a,{}),t.jsx(p,{children:this.after.mention.identifier}),this.after.title.name," →"]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-turn")}};i(Ve,"$Turn");let T=Ve;const ra=r(T);var ia=Object.defineProperty,na=Object.getOwnPropertyDescriptor,je=i((d,e,s,o)=>{for(var a=na(e,s),n=d.length-1,p;n>=0;n--)(p=d[n])&&(a=p(e,s,a)||a);return a&&ia(e,s,a),a},"__decorateClass$4");const Xe=class Xe extends Is{constructor(){super(...arguments),this.specification=new $}get chapters(){return this.text.find(m).filter(e=>[...e.classes].includes("pd-canonical"))}get placed(){return[this.cover,this.synopsis,this.table,...this.chapters]}get pages(){const e=this.appendix;return this.chapters.filter(s=>!e.includes(s))}get appendix(){const e=this.table;if(e===void 0)return[];const s=e.text.find(A).filter(o=>o.is(W)).flatMap(o=>o.text.find(Ns).map(a=>a.identifier));return this.chapters.filter(o=>s.includes(o.mention?.identifier??""))}get open(){return this.$bookmark===void 0?void 0:this.named(this.$bookmark)}get tones(){return[ws,vs,Ys]}write(){return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"pd-library",children:this.library()}),t.jsx("div",{className:"pd-me",children:this.byline()}),t.jsx("div",{className:"pd-holds",children:this.holds()}),t.jsx("div",{className:"pd-head",children:this.head()}),t.jsxs("div",{className:"pd-leaves",children:[this.front(),this.leaves()]})]})}library(){return t.jsxs(t.Fragment,{children:[this.filed(),this.subjects()]})}subjects(){return t.jsx("div",{className:"pd-subjects",children:t.jsx(Zs,{})})}holds(){const e=r(this.table);return t.jsx(e,{})}head(){const e=r(this.cover);return t.jsxs(t.Fragment,{children:[t.jsx(e,{}),t.jsx("div",{className:"pd-switches",children:this.switches()})]})}front(){return t.jsx("div",{className:this.open===void 0?"pd-leaf pd-front pd-open":"pd-leaf pd-front",children:this.opening()})}opening(){const e=r(this.synopsis);return t.jsx("div",{className:"pd-words",children:t.jsx(e,{})})}leaves(){return this.chapters.map((e,s)=>{const o=r(e);return t.jsxs("div",{className:e===this.open?"pd-leaf pd-open":"pd-leaf",children:[t.jsx("div",{className:"pd-words",children:t.jsx(o,{})}),t.jsx("div",{className:"pd-files",children:this.listings(e)})]},s)})}named(e){return this.chapters.find(s=>s.mention?.identifier===e||this.sections(s).some(o=>o.mention?.identifier===e))}byline(){const e=r(Gs);return t.jsx(e,{chapter:this.cover})}filed(){const e=r(Bs);return t.jsx(e,{chapter:this.cover})}switches(){}listings(e){const s=r(Hs);return e.annotations.find(ye).reverse().map((o,a)=>t.jsx(s,{chapter:e,identifier:o.$identifier,type:o.$type},a))}sections(e){return e.text.find(A).flatMap(s=>[s,...this.sections(s)])}turn(){this.bookmark!==this.cover&&super.turn()}$Define(){super.$Define();const e=r(Ls),s=r(ke);this.annotations.add(this,t.jsx(e,{}),t.jsx(s,{}))}$Bound(){const e=r(ra);for(const s of this.pages)s.text.add(this,t.jsx(e,{}));super.$Bound()}};i(Xe,"$LibraryBook");let O=Xe;const Ye=class Ye extends Ws{$holdsOnlyChapters(e){l([...e.text].every(s=>s instanceof m),"a book of this library holds only chapters, and this one holds something else")}$placesEveryChapter(e){l(e.text.find(m).every(s=>e.placed.includes(s)),"a book of this library has a place for every chapter it holds, and this one holds a chapter it places nowhere")}$onlyAChapterAppends(e){l(e.text.find(m).every(s=>e.chapters.includes(s)||!s.is(ye)),"only an ordinary chapter appends a file, and here a cover, a synopsis or a table of contents appends one")}};i(Ye,"LibraryBookSpecification");let $=Ye;je([h("a book of this library holds only chapters")],$.prototype,"$holdsOnlyChapters");je([h("a book of this library has a place for every chapter it holds")],$.prototype,"$placesEveryChapter");je([h("only an ordinary chapter appends a file")],$.prototype,"$onlyAChapterAppends");const ks=r(O);r(ks,gs)(Fs);r(ks,ke)(ws);const Ze=class Ze extends z{get on(){return this.book.is(this.$of)}$Switch(...e){this.$Writing(...e),this._button=s=>t.jsx("button",{type:"button","aria-pressed":this.on,onClick:i(()=>this.press(),"onClick"),...s}),this.containers.replace(this,"span",this._button)}press(){const e=this.book,s=[e.$is].flat();e.$is=this.on?s.filter(o=>o!==this.$of):[this.$of,...s]}$Define(){super.$Define(),this.classes.add(this,"pd-switch")}};i(Ze,"$Switch");let E=Ze;const qe=class qe extends E{press(){const e=this.book,s=[e.$is].flat().filter(o=>!this.$among.includes(o));e.$is=[this.$of,...s]}};i(qe,"$Tab");let ce=qe;r(E);const oa=r(ce);var da=Object.defineProperty,pa=Object.getOwnPropertyDescriptor,ca=i((d,e,s,o)=>{for(var a=pa(e,s),n=d.length-1,p;n>=0;n--)(p=d[n])&&(a=p(e,s,a)||a);return a&&da(e,s,a),a},"__decorateClass$3");const Q=class Q extends u{constructor(){super(...arguments),this.specification=new g}defines(e){for(const s of e.annotations.after(this))s instanceof Q&&e.annotations.express(s,!1);e.classes.add(this,"pa-reading")}erase(e){e.classes.revert(this)}};i(Q,"$Reading");let P=Q;const Se=class Se extends P{defines(e){super.defines(e),e.classes.add(this,"pa-code-forward")}};i(Se,"$CodeForward");let le=Se;const es=class es extends P{defines(e){super.defines(e),e.classes.add(this,"pa-words-forward")}};i(es,"$WordsForward");let he=es;const ss=class ss extends u{constructor(){super(...arguments),this.specification=new B}defines(e){e.classes.add(this,"pa-brief")}erase(e){e.classes.revert(this)}};i(ss,"$Brief");let G=ss;const as=class as extends b{$saidOfAParagraph(e){l(e instanceof f,"brief is said of a paragraph, and this is not one")}};i(as,"BriefSpecification");let B=as;ca([h("brief is said of a paragraph")],B.prototype,"$saidOfAParagraph");const js=r(P),us=r(le),fe=r(he),Pa=r(G);var la=Object.defineProperty,ha=Object.getOwnPropertyDescriptor,fa=i((d,e,s,o)=>{for(var a=ha(e,s),n=d.length-1,p;n>=0;n--)(p=d[n])&&(a=p(e,s,a)||a);return a&&la(e,s,a),a},"__decorateClass$2");const ts=class ts extends xe{constructor(){super(...arguments),this.specification=new g,this.themeProvider=!0,this.style=w.div`
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
        .pa-spread.pa-words-forward .pd-listing .pd-word {
            writing-mode: vertical-rl;
            border-start-start-radius: 0;
            border-start-end-radius: calc(${({theme:e})=>e.space} * 0.3);
            border-end-end-radius: calc(${({theme:e})=>e.space} * 0.3);
        }
        .pa-spread.pa-words-forward .pd-listing .pd-code { display: none; }
        .pa-spread.pa-words-forward .pd-words .pd-paragraph.pa-brief { display: none; }
        .pa-spread.pa-code-forward .pd-leaf.pd-open { grid-template-columns: calc(1.4 * ${({theme:e})=>e.spreadColumn}) minmax(0, 1fr); }
        .pa-spread.pa-code-forward .pd-words .pd-section { display: none; }
        @media (max-width: ${({theme:e})=>e.narrow}) {
            .pa-spread .pd-leaf.pd-open { display: block; height: auto; }
            .pa-spread.pa-words-forward .pd-listing .pd-word { writing-mode: horizontal-tb; }
        }
    `}defines(e){super.defines(e),e.classes.add(this,"pa-spread")}erase(e){super.erase(e),e.classes.revert(this)}};i(ts,"$Spread");let ue=ts;const ua=r(ue),rs=class rs extends O{constructor(){super(...arguments),this.specification=new M}get readings(){return[us,fe]}switches(){const e=r(oa);return t.jsxs(t.Fragment,{children:[t.jsx(e,{chapter:this.cover,of:us,among:this.readings,children:"code"}),t.jsx(e,{chapter:this.cover,of:fe,among:this.readings,children:"words"}),super.switches()]})}$Define(){super.$Define();const e=r(ua),s=r(js);this.annotations.add(this,t.jsx(e,{}),t.jsx(s,{}))}};i(rs,"$Manual");let be=rs;const is=class is extends ${$everyChapterHasABrief(e){l(e.chapters.every(s=>s.text.find(f).some(o=>o.is(G))),"every chapter of a manual opens with a brief, and one here has none")}};i(is,"ManualSpecification");let M=is;fa([h("every chapter of a manual opens with a brief")],M.prototype,"$everyChapterHasABrief");const V=r(be);r(V,js)(fe);r(V,ke)(vs);var ba=Object.defineProperty,ga=Object.getOwnPropertyDescriptor,Oe=i((d,e,s,o)=>{for(var a=ga(e,s),n=d.length-1,p;n>=0;n--)(p=d[n])&&(a=p(e,s,a)||a);return a&&ba(e,s,a),a},"__decorateClass$1");const ns=class ns extends u{constructor(){super(...arguments),this.specification=new y}get date(){return this.text.find($s)[0]}defines(e){e.classes.add(this,"pa-dated")}erase(e){e.classes.revert(this)}note(){const e=r(this.date);return t.jsx(e,{})}};i(ns,"$Dated");let D=ns;const os=class os extends b{$saidOfAChapter(e){l(e instanceof m,"dated is said of a chapter, and this is not one")}$datedOnce(e){l(e.annotations.containsOne(D),"a chapter is dated once, and this one is dated more than once")}$givenOneDate(e){l(e.annotations.expressed(D)?.text.find($s).length===1,"a dated chapter is given one date, and this one is given none or more than one")}};i(os,"DatedSpecification");let y=os;Oe([h("dated is said of a chapter")],y.prototype,"$saidOfAChapter");Oe([h("a chapter is dated once")],y.prototype,"$datedOnce");Oe([h("a dated chapter is given one date")],y.prototype,"$givenOneDate");const Da=r(D),ds=class ds extends N{constructor(){super(...arguments),this.label=w.span.attrs({className:"pa-file-type"})``}get type(){return this.leads?.annotations.find(ye)[0]?.$type??""}note(){const e=this.label;return t.jsx(e,{children:this.type})}};i(ds,"$FileEntry");let ge=ds;const $a=r(ge);r(V,ys)($a);const ps=class ps extends _{constructor(){super(...arguments),this.measure="58ch",this.spreadColumn="15.5rem",this.colour="#4fb3a8",this.side="#e3f4f1",this.sideLine="#c6e5df",this.ink="#1a1f36",this.heading="#1a1f36",this.soft="#4f566b",this.faint="#8792a2",this.line="#e6e8ee",this.rule="#e6e8ee",this.panel="#f7f8fa",this.accent="#0a7a70",this.capital="#0a7a70",this.lit="#0a7a70",this.tint="#e3f4f1",this.night="#0f2a33",this.dusk="#17363f"}parts(){return[...super.parts(),this.index(),this.words(),this.small()]}holds(){return c`
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
            .pd-library .pd-filed-under, .pd-library .pd-byline {
                margin-block: 0;
                font-size: calc(0.83 * ${({theme:e})=>e.size});
                color: ${({theme:e})=>e.faint};
            }
            .pd-library .pd-filed-under .pa-reference, .pd-library .pd-byline .pa-reference {
                color: ${({theme:e})=>e.soft};
                text-decoration: none;
            }
            .pd-head .pd-switches { margin-block-start: calc(${({theme:e})=>e.space} / 2); }
            .pd-head .pd-switch { font-size: calc(0.9 * ${({theme:e})=>e.size}); }
        `}words(){return c`
            .pd-words { padding: calc(${({theme:e})=>e.space} * 1.4) calc(${({theme:e})=>e.space} * 1.8); }
            .pd-words .pd-chapter { margin-block: 0; }
            .pd-words .pd-title {
                font-size: calc(2.07 * ${({theme:e})=>e.size});
                font-weight: 600;
                line-height: 1.15;
                letter-spacing: -0.02em;
                margin-block-end: calc(${({theme:e})=>e.space} * 0.4);
            }
            .pd-words .pd-section { margin-block-start: calc(${({theme:e})=>e.space} * 1.25); }
            .pd-words .pd-heading {
                font-size: calc(0.9 * ${({theme:e})=>e.size});
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
            .pd-words .pa-synopsis .pd-paragraph {
                font-size: calc(1.1 * ${({theme:e})=>e.size});
                color: ${({theme:e})=>e.soft};
            }
            .pd-book.pa-code-forward .pd-words { font-size: calc(0.9 * ${({theme:e})=>e.size}); }
        `}small(){return c`
            @media (max-width: ${({theme:e})=>e.narrow}) {
                .pd-holds, .pd-library {
                    border-inline-end: none;
                    border-block-end: thin solid ${({theme:e})=>e.line};
                }
                .pd-words { padding: calc(${({theme:e})=>e.space} * 0.83) calc(${({theme:e})=>e.space} * 0.67) calc(${({theme:e})=>e.space} / 3); }
                .pd-words .pd-title { font-size: calc(1.72 * ${({theme:e})=>e.size}); }
            }
        `}};i(ps,"$ManualTheme");let $e=ps;const ma=r($e);r(V,gs)(ma);var xa=Object.defineProperty,ya=Object.getOwnPropertyDescriptor,wa=i((d,e,s,o)=>{for(var a=ya(e,s),n=d.length-1,p;n>=0;n--)(p=d[n])&&(a=p(e,s,a)||a);return a&&xa(e,s,a),a},"__decorateClass");const cs=class cs extends u{constructor(){super(...arguments),this.specification=new J}defines(e){e.classes.add(this,"pa-first")}erase(e){e.classes.revert(this)}};i(cs,"$First");let me=cs;const ls=class ls extends b{$saidOfAParagraph(e){l(e instanceof f,"first is said of a paragraph, and this is not one")}};i(ls,"FirstSpecification");let J=ls;wa([h("first is said of a paragraph")],J.prototype,"$saidOfAParagraph");const za=r(me);export{O as $,Oa as A,Pa as B,Z as C,ws as D,za as F,ja as I,vs as L,g as O,oa as T,_ as a,ke as b,D as c,sa as d,oe as e,Da as f,be as g};
