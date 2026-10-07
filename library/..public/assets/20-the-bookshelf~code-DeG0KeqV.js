var Oa=Object.defineProperty;var r=(p,e)=>Oa(p,"name",{value:e,configurable:!0});import{$ as i,r as f,W as x,w as Pa,j as a,E as Da,s as y,o as c,F as ga,R as m,G as Ca,q as g,k as u,l,J as O,n as h,K as Ia,i as fe,t as ua,m as $,N as k,O as $a,Q as Aa,U as K,u as q,V as Na,z as Be,X as pa,P as E,M as J,f as _a,Y as me,Z as Wa,_ as ba,a0 as Fa,p as Qe,x as ma,a1 as Ha,a2 as Ta,a3 as Ra}from"./index-0A1jfFcY.js";const as=class as extends f{constructor(){super(...arguments),this.$identifier="",this.$type=""}get name(){return`${this.$identifier}${this.$type}`}write(){const e=i(x),s=i(Pa);return a.jsxs(a.Fragment,{children:[a.jsx(e,{children:this.name}),a.jsx(s,{identifier:this.$identifier,type:this.$type,numbered:!0})]})}$Define(){super.$Define(),this.classes.add(this,"pd-listing")}};r(as,"$Listing");let xe=as;const La=i(xe),ts=class ts extends Da{constructor(){super(...arguments),this.font="'Inter', system-ui, sans-serif",this.prose="'Inter', system-ui, sans-serif",this.mono="'JetBrains Mono', ui-monospace, monospace",this.size="0.875rem",this.leading="1.6",this.measure="44rem",this.spreadColumn="15.5rem",this.space="1.5rem",this.holdsColumn="240px",this.barHeight="50px",this.beat="320ms",this.narrow="48rem",this.colour="#4e9eb9",this.accent="#166178",this.bar="#0c1b1f",this.barInk="#ffffff",this.barDim="#a9bcc1",this.barOn="rgba(255, 255, 255, 0.11)",this.barLine="#1d3339",this.mark="#c8f4fb",this.side="#e3f5fa",this.sideInk="#10252c",this.sideDim="#516770",this.sideOn="#ffffff",this.sideLine="#cbe6ee",this.night="#0c1b1f",this.deep="#14323c",this.blue="#166178",this.sea="#4e9eb9",this.sky="#8fc8dc",this.opal="#c8f4fb",this.pale="#e3f5fa",this.mist="#f1f7f9",this.white="#ffffff",this.ink="#10252c",this.soft="#516770",this.line="#dbe7ec",this.me="#e8590c",this.wash="linear-gradient(105deg, #e2f6fb 0%, #ecf0fd 52%, #fae9f4 100%)",this.serif="'Cormorant Garamond', Georgia, serif",this.bookPaper="#fbf9f3",this.bookInk="#29251d",this.heading="#10252c",this.capital="#166178",this.lit="#166178",this.faint="#8792a2",this.paper="#ffffff",this.panel="#f1f7f9",this.rule="#dbe7ec",this.edge="transparent",this.tint="#e3f5fa",this.dusk="#14323c",this.glow="#cfe6e3",this.dim="#4f7672",this.keyword="#8ad7ff",this.string="#ffd48a",this.type="#9be3d6",this.comment="#5f8a86",this.haze="#a9bcc1",this.glass="rgba(255, 255, 255, 0.62)",this.binding="linear-gradient(160deg, #16303a, #0c1b1f)",this.spine="inset 5px 0 0 rgba(0, 0, 0, 0.14), inset 6px 0 0 rgba(255, 255, 255, 0.12), 0 10px 20px -10px rgba(0, 0, 0, 0.45)",this.shadow="0 0.75rem 1.4rem -0.9rem rgba(12, 27, 31, 0.55)",this.initial="'D'",this.volume="11.5rem",this.cover="8.25rem",this.card="18rem",this.photo="7rem",this.radius="0.375rem",this.barTint="#ffffff",this.skyInk="#166178",this.lift="inset 5px 0 0 rgba(0, 0, 0, 0.14), inset 6px 0 0 rgba(255, 255, 255, 0.12), 0 14px 24px -12px rgba(0, 0, 0, 0.5)",this.openSpine="inset 7px 0 0 rgba(0, 0, 0, 0.14), inset 8px 0 0 rgba(255, 255, 255, 0.12), 0 12px 22px -14px rgba(0, 0, 0, 0.5)",this.style=y.div`${this.parts()}`}parts(){return[this.page(),this.writing(),this.links(),this.figures(),this.listings(),this.switches(),this.turns(),this.library(),this.head(),this.holds(),this.tones()]}page(){return c`
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
            .pd-head .pa-illustration { display: none; }
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
        `}};r(ts,"$LibraryBookTheme");let N=ts;const Ma=i(N);var Ya=Object.defineProperty,Ga=Object.getOwnPropertyDescriptor,Ea=r((p,e,s,n)=>{for(var t=Ga(e,s),o=p.length-1,d;o>=0;o--)(d=p[o])&&(t=d(e,s,t)||t);return t&&Ya(e,s,t),t},"__decorateClass$b");const is=class is extends g{constructor(){super(...arguments),this.specification=new B}defines(e){e.classes.add(this,"pa-label")}erase(e){e.classes.revert(this)}};r(is,"$Label");let ve=is;const rs=class rs extends u{$saidOfAWord(e){l(e instanceof O,"label is said of a word, and this is not one")}};r(rs,"LabelSpecification");let B=rs;Ea([h("label is said of a word")],B.prototype,"$saidOfAWord");const Ue=i(ve),ns=class ns extends f{get cover(){return this.$cover??this.book?.cover}write(){const e=this.cover.annotations.expressed(ga),s=i(x),n=i(Ue),t=i(m);return a.jsxs(a.Fragment,{children:[a.jsxs(s,{children:[a.jsx(n,{}),"by"]}),a.jsxs(s,{children:[a.jsx(t,{children:e.means.identifier}),e.name]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-byline")}};r(ns,"$Byline");let we=ns;const os=class os extends f{get cover(){return this.$cover??this.book?.cover}write(){const e=this.cover.annotations.expressed(Ca),s=i(x),n=i(Ue),t=i(m);return a.jsxs(a.Fragment,{children:[a.jsxs(s,{children:[a.jsx(n,{}),"filed under"]}),a.jsxs(s,{children:[a.jsx(t,{children:e.means.identifier}),e.name]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-filed-under")}};r(os,"$FiledUnder");let ye=os;const xa=i(we),va=i(ye);var Ja=Object.defineProperty,Ka=Object.getOwnPropertyDescriptor,qa=r((p,e,s,n)=>{for(var t=Ka(e,s),o=p.length-1,d;o>=0;o--)(d=p[o])&&(t=d(e,s,t)||t);return t&&Ja(e,s,t),t},"__decorateClass$a");const ds=class ds extends u{$saidOfABook(e){l(e instanceof I,"this is said of a book of this library, and here it is said of something else")}};r(ds,"OfABookSpecification");let v=ds;qa([h("this is said of a book of this library")],v.prototype,"$saidOfABook");const ce=class ce extends Ia{constructor(){super(...arguments),this.specification=new v,this.themeProvider=!0,this.style=y.div`
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
    `}get pages(){return this.book.pages}get open(){return this.book.open}$Bound(){const e=this.style;this.style=s=>a.jsx(e,{$at:this.book.means?.identifier,...s}),super.$Bound()}defines(e){for(const n of e.annotations.after(this))n instanceof ce&&e.annotations.express(n,!1);super.defines(e),e.classes.add(this,"pa-layout");const s=this.open;s!==void 0&&e.classes.add(this,"pa-turned"),s!==void 0&&this.book.appendix.includes(s)&&e.classes.add(this,"pa-built")}erase(e){super.erase(e),e.classes.revert(this)}parts(){return[this.paging(),this.regions(),this.areas(),this.phone()]}paging(){return c`
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
        `}};r(ce,"$Layout");let ke=ce;const Ba=i(ke);var Qa=Object.defineProperty,Ua=Object.getOwnPropertyDescriptor,wa=r((p,e,s,n)=>{for(var t=Ua(e,s),o=p.length-1,d;o>=0;o--)(d=p[o])&&(t=d(e,s,t)||t);return t&&Qa(e,s,t),t},"__decorateClass$9");const ps=class ps extends fe{constructor(){super(...arguments),this.specification=new W,this.style=y.div`
        .pa-coloured { --colour: ${e=>e.$colour}; }
    `}get colour(){return ua.copy(this.text).trim()}$Coloured(...e){this.$Format(...e);const s=this.style;this._painted=n=>a.jsx(s,{$colour:this.colour,...n})}defines(e){e.classes.add(this,"pa-coloured"),e.containers.add(this,this._painted)}erase(e){e.classes.revert(this),e.containers.revert(this)}};r(ps,"$Coloured");let _=ps;const cs=class cs extends u{$saidOfAChapterOrAParagraph(e){l(e instanceof $||e instanceof f,"coloured is said of a chapter or a paragraph, and this is neither")}$givenItsColour(e){l(/^#[0-9a-f]{6}$/iu.test(e.annotations.expressed(_)?.colour??""),"coloured is given its colour as six hex digits, and this one was given something else")}};r(cs,"ColouredSpecification");let W=cs;wa([h("coloured is said of a chapter or a paragraph")],W.prototype,"$saidOfAChapterOrAParagraph");wa([h("coloured is given its colour")],W.prototype,"$givenItsColour");const be=i(_);var Xa=Object.defineProperty,Za=Object.getOwnPropertyDescriptor,b=r((p,e,s,n)=>{for(var t=Za(e,s),o=p.length-1,d;o>=0;o--)(d=p[o])&&(t=d(e,s,t)||t);return t&&Xa(e,s,t),t},"__decorateClass$8");const ls=class ls extends k{constructor(){super(...arguments),this.specification=new D}get name(){return this.chapter?.title?.name??""}get author(){return this.chapter?.annotations.expressed(ga)?.name??""}get illustration(){return this.chapter?.text.find(f).find(e=>e.is(F))}get drawing(){const e=this.illustration?.text.find($a)[0];return e===void 0?"":ua.copy(e.text).trim()}get scheme(){return this.chapter?.annotations.expressed(w)}get window(){return this.chapter?.annotations.expressed(P)}};r(ls,"$BookshelfCover");let je=ls;const hs=class hs extends g{constructor(){super(...arguments),this.specification=new Q}defines(e){e.classes.add(this,"pa-illustration")}erase(e){e.classes.revert(this)}};r(hs,"$Illustration");let F=hs;const fs=class fs extends fe{constructor(){super(...arguments),this.specification=new H,this.$ground="",this.$band="",this.$bandInk="",this.$foot="",this.$footInk="",this.$ink="",this.style=y.div`
        ${e=>e.$scheme}
    `}get colours(){return[this.$ground,this.$band,this.$bandInk,this.$foot,this.$footInk,this.$ink]}get declarations(){return`--ground: ${this.$ground}; --band: ${this.$band}; --band-ink: ${this.$bandInk}; --foot: ${this.$foot}; --foot-ink: ${this.$footInk}; --ink: ${this.$ink};`}get painted(){return this._painted}$Scheme(...e){this.$Format(...e);const s=this.style;this._painted=n=>a.jsx(s,{$scheme:this.declarations,...n})}defines(e){e.classes.add(this,"pa-scheme"),e.containers.add(this,this._painted)}erase(e){e.classes.revert(this),e.containers.revert(this)}};r(fs,"$Scheme");let w=fs;const gs=class gs extends g{constructor(){super(...arguments),this.specification=new T,this.$x="",this.$y=""}get declarations(){return`--window-x: ${this.$x}px; --window-y: ${this.$y}px;`}};r(gs,"$Window");let P=gs;const us=class us extends g{constructor(){super(...arguments),this.specification=new R}get cover(){return this._cover}get jacket(){return this._cover?.annotations.expressed(k)}$Volume(...e){this._cover=e.find(s=>s instanceof $),this.$Annotation(...e.filter(s=>s!==this._cover))}defines(e){e.classes.add(this,"pa-volume")}erase(e){e.classes.revert(this)}};r(us,"$Volume");let j=us;const $s=class $s extends f{get cover(){return this.$cover?.annotations.expressed(k)}$Jacket(...e){this.$Writing(...e),this._painted=s=>{const n=this.cover?.scheme?.painted;return n===void 0?a.jsx("div",{...s}):a.jsx(n,{...s})},this.containers.add(this,this._painted)}write(){const e=this.cover;if(e===void 0)return;const s=i(x),n=i(Ue);return a.jsxs(a.Fragment,{children:[a.jsx(s,{children:e.name}),a.jsx("span",{className:"pd-drawing",dangerouslySetInnerHTML:{__html:e.drawing}}),a.jsxs(s,{children:[a.jsx(n,{}),e.author]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-jacket")}};r($s,"$Jacket");let ze=$s;const bs=class bs extends O{constructor(){super(...arguments),this.style=y.span`
        ${e=>e.$vars}
    `}get cover(){return this.$cover?.annotations.expressed(k)}$Mark(...e){this.$Writing(...e);const s=this.style;this._painted=n=>a.jsx(s,{$vars:`${this.cover?.scheme?.declarations??""} ${this.cover?.window?.declarations??""}`,...n}),this.containers.add(this,this._painted)}write(){return a.jsx("span",{className:"pd-drawing",dangerouslySetInnerHTML:{__html:this.cover?.drawing??""}})}$Define(){super.$Define(),this.classes.add(this,"pd-mark")}};r(bs,"$Mark");let Oe=bs;const ms=class ms extends Aa{$carriesItsScheme(e){l(e.is(w),"a bookshelf cover carries its scheme, and this one carries none")}$carriesItsWindow(e){l(e.is(P),"a bookshelf cover carries its window, and this one carries none")}$carriesItsIllustration(e){l(e instanceof $&&e.text.find(f).some(s=>s.is(F)),"a bookshelf cover carries its illustration, and this one carries none")}};r(ms,"BookshelfCoverSpecification");let D=ms;b([h("a bookshelf cover carries its scheme")],D.prototype,"$carriesItsScheme");b([h("a bookshelf cover carries its window")],D.prototype,"$carriesItsWindow");b([h("a bookshelf cover carries its illustration")],D.prototype,"$carriesItsIllustration");const xs=class xs extends u{$saidOfADrawing(e){l(e instanceof f&&e.chapter?.is(k)===!0&&e.text.find($a).length===1,"an illustration is said of a paragraph of a cover that holds one drawing, and this is not one")}};r(xs,"IllustrationSpecification");let Q=xs;b([h("an illustration is said of a paragraph of a cover that holds one drawing")],Q.prototype,"$saidOfADrawing");const vs=class vs extends u{$saidOfACover(e){l(e instanceof $&&e.is(k),"a scheme is said of a cover, and this is not one")}$givenItsColours(e){const s=e.annotations.expressed(w)?.colours??[];l(s.every(n=>/^#[0-9a-f]{6}$/iu.test(n)),"a scheme is given its six colours as six hex digits each — the ground, the band and its ink, the foot and its ink, and the ink of the drawing — and this one was given something else")}};r(vs,"SchemeSpecification");let H=vs;b([h("a scheme is said of a cover")],H.prototype,"$saidOfACover");b([h("a scheme is given its six colours")],H.prototype,"$givenItsColours");const ws=class ws extends u{$saidOfACover(e){l(e instanceof $&&e.is(k),"a window is said of a cover, and this is not one")}$givenItsPlace(e){const s=e.annotations.expressed(P);l(/^-?\d+$/u.test(s?.$x??"")&&/^-?\d+$/u.test(s?.$y??""),"a window is given where it stands on the drawing, two whole numbers, and this one was given something else")}};r(ws,"WindowSpecification");let T=ws;b([h("a window is said of a cover")],T.prototype,"$saidOfACover");b([h("a window is given where it stands on the drawing")],T.prototype,"$givenItsPlace");const ys=class ys extends u{$saidOfASynopsis(e){l(e instanceof $&&e.is(K),"a volume is said of a chapter that is the synopsis of another book, and this is not one")}$holdsTheCover(e){const n=e.annotations.expressed(j)?.cover;l(n!==void 0&&n.is(k)&&n.mention?.identifier===e.annotations.expressed(K)?.means?.identifier,"a volume holds the cover of the book its chapter is a synopsis of, and this one holds something else")}};r(ys,"VolumeSpecification");let R=ys;b([h("a volume is said of a chapter that is the synopsis of another book")],R.prototype,"$saidOfASynopsis");b([h("a volume holds the cover of the book its chapter is a synopsis of")],R.prototype,"$holdsTheCover");const Wt=i(je),Ft=i(F),Ht=i(w),Tt=i(P),Rt=i(j),Va=i(ze),ca=i(Oe);var Sa=Object.defineProperty,et=Object.getOwnPropertyDescriptor,Xe=r((p,e,s,n)=>{for(var t=et(e,s),o=p.length-1,d;o>=0;o--)(d=p[o])&&(t=d(e,s,t)||t);return t&&Sa(e,s,t),t},"__decorateClass$7");const ks=class ks extends fe{constructor(){super(...arguments),this.specification=new ee,this.style=y.div`
        ${e=>e.$vars===void 0?"":`.pa-entry { ${e.$vars} }`}
    `}get place(){return G(this.parent).identifier}get leads(){return this.book.named(this.place)}get cover(){return this.leads?.annotations.expressed(j)?.cover??this.book.coverOf(this.place)}get vars(){const e=this.cover?.annotations.expressed(w);if(e!==void 0)return e.declarations;const s=this.leads?.annotations.expressed(_)?.colour;return s===void 0?void 0:`--colour: ${s};`}$Entry(...e){this.$Format(...e);const s=this.style;this._painted=n=>a.jsx(s,{$vars:this.vars,...n})}defines(e){e.classes.add(this,"pa-entry"),e.containers.add(this,this._painted),(this.place===this.book?.$bookmark||this.place===this.book.open?.mention?.identifier)&&e.classes.add(this,"pa-open")}erase(e){e.classes.revert(this),e.containers.revert(this)}};r(ks,"$Entry");let U=ks;const js=class js extends g{constructor(){super(...arguments),this.specification=new S}defines(e){e.classes.add(this,"pa-appendix")}erase(e){e.classes.revert(this)}};r(js,"$Appendix");let X=js;const zs=class zs extends g{constructor(){super(...arguments),this.specification=new V}get entries(){return this.chapter.text.find(q).flatMap(s=>s.text.find(f)).filter(s=>!s.is(Na)&&G(s)!==void 0)}$Bound(){const e=i(ya);for(const s of this.entries)s.annotations.add(this,a.jsx(e,{}));super.$Bound()}};r(zs,"$Index");let Z=zs;const Os=class Os extends u{$saidOfATableOfContents(e){l(e.is(Be),"an index is said of a table of contents, and this chapter is not one")}};r(Os,"IndexSpecification");let V=Os;Xe([h("an index is said of a table of contents")],V.prototype,"$saidOfATableOfContents");const Ps=class Ps extends u{$saidOfASection(e){l(e instanceof q&&e.chapter?.is(Be)===!0,"an appendix is said of a section of a table of contents, and this is not one")}};r(Ps,"AppendixSpecification");let S=Ps;Xe([h("an appendix is said of a section of a table of contents")],S.prototype,"$saidOfASection");const Ds=class Ds extends u{$saidOfAnEntry(e){l(e instanceof f&&G(e)!==void 0,"an entry is said of a paragraph that leads somewhere, and this is not one")}};r(Ds,"EntrySpecification");let ee=Ds;Xe([h("an entry is said of a paragraph that leads somewhere")],ee.prototype,"$saidOfAnEntry");const G=r(p=>p.annotations.expressed(pa)??p.text.find(O).map(e=>e.annotations.expressed(pa)).find(e=>e!==void 0),"leads"),ya=i(U),Lt=i(Z),Mt=i(X),le=class le extends g{constructor(){super(...arguments),this.specification=new v}defines(e){for(const s of e.annotations.after(this))s instanceof le&&e.annotations.express(s,!1);e.classes.add(this,"pa-tone")}erase(e){e.classes.revert(this)}};r(le,"$Tone");let C=le;const Cs=class Cs extends C{defines(e){super.defines(e),e.classes.add(this,"pa-dark")}};r(Cs,"$Dark");let Pe=Cs;const Is=class Is extends C{defines(e){super.defines(e),e.classes.add(this,"pa-light")}};r(Is,"$Light");let De=Is;const As=class As extends C{defines(e){super.defines(e),e.classes.add(this,"pa-white-over-black")}};r(As,"$WhiteOverBlack");let Ce=As;const ge=i(C),ka=i(Pe),Ze=i(De),st=i(Ce),at=r(()=>a.jsx(E,{children:a.jsx(J,{children:"[Dougs Library](/dougs-library/)"})}),"Logo"),tt=r(()=>a.jsxs(_a,{children:[a.jsxs(E,{children:[a.jsx(be,{children:"#d9a05b"}),a.jsx(J,{children:"[Dougs Story](/dougs-story/)"})]}),a.jsxs(E,{children:[a.jsx(be,{children:"#3b6cf0"}),a.jsx(J,{children:"[Dougs Design](/dougs-design/)"})]}),a.jsxs(E,{children:[a.jsx(be,{children:"#4fb3a8"}),a.jsx(J,{children:"[Dougs Reference Manual](/dougs-reference-manual/)"})]})]}),"Subjects");var it=Object.defineProperty,rt=Object.getOwnPropertyDescriptor,nt=r((p,e,s,n)=>{for(var t=rt(e,s),o=p.length-1,d;o>=0;o--)(d=p[o])&&(t=d(e,s,t)||t);return t&&it(e,s,t),t},"__decorateClass$6");const Ns=class Ns extends O{write(){const e=this.book.pages;return`${e.indexOf(this.chapter)+1} of ${e.length}`}$Define(){super.$Define(),this.classes.add(this,"pd-count")}};r(Ns,"$Count");let Ie=Ns;const _s=class _s extends g{constructor(){super(...arguments),this.specification=new L}defines(e){e.classes.add(this,"pa-before")}erase(e){e.classes.revert(this)}};r(_s,"$Before");let Ae=_s;const Ws=class Ws extends g{constructor(){super(...arguments),this.specification=new L}defines(e){e.classes.add(this,"pa-after")}erase(e){e.classes.revert(this)}};r(Ws,"$After");let Ne=Ws;const Fs=class Fs extends u{$saidOfAWordOfATurn(e){l(e instanceof O&&e.parent instanceof se,"this is said of a word of a turn, and here it is said of something else")}};r(Fs,"OfATurnSpecification");let L=Fs;nt([h("this is said of a word of a turn")],L.prototype,"$saidOfAWordOfATurn");const ot=i(Ie),dt=i(Ae),pt=i(Ne),Hs=class Hs extends f{get before(){const e=this.book.pages;return e[e.indexOf(this.chapter)-1]??this.chapter}get after(){const e=this.book.pages;return e[e.indexOf(this.chapter)+1]??this.chapter}write(){const e=i(x),s=i(ot),n=i(dt),t=i(pt),o=i(this.before===this.chapter?me:m),d=i(this.after===this.chapter?me:m);return a.jsxs(a.Fragment,{children:[a.jsxs(e,{children:[a.jsx(n,{}),a.jsx(o,{children:this.before.mention.identifier}),"← ",this.before.title.name]}),a.jsx(s,{}),a.jsxs(e,{children:[a.jsx(t,{}),a.jsx(d,{children:this.after.mention.identifier}),this.after.title.name," →"]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-turn")}};r(Hs,"$Turn");let se=Hs;const ct=i(se);var lt=Object.defineProperty,ht=Object.getOwnPropertyDescriptor,Ve=r((p,e,s,n)=>{for(var t=ht(e,s),o=p.length-1,d;o>=0;o--)(d=p[o])&&(t=d(e,s,t)||t);return t&&lt(e,s,t),t},"__decorateClass$5");const Ts=class Ts extends Wa{constructor(){super(...arguments),this.specification=new z}get chapters(){return this.text.find($).filter(e=>[...e.classes].includes("pd-canonical"))}get placed(){return[this.cover,this.synopsis,this.table,...this.chapters]}get pages(){const e=this.appendix;return this.chapters.filter(s=>!e.includes(s))}get appendix(){const e=this.table;if(e===void 0)return[];const s=e.text.find(q).filter(n=>n.is(X)).flatMap(n=>n.text.find(f).map(t=>G(t)?.identifier));return this.chapters.filter(n=>s.includes(n.mention?.identifier??""))}get open(){return this.$bookmark===void 0?void 0:this.named(this.$bookmark)}get tones(){return[ka,Ze,st]}write(){return a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"pd-library",children:this.library()}),a.jsx("div",{className:"pd-me",children:this.byline()}),a.jsx("div",{className:"pd-holds",children:this.holds()}),a.jsx("div",{className:"pd-head",children:this.head()}),a.jsxs("div",{className:"pd-leaves",children:[this.front(),this.leaves()]})]})}library(){return a.jsxs(a.Fragment,{children:[this.logo(),this.subjects()]})}logo(){return a.jsx("div",{className:"pd-logo",children:a.jsx(at,{})})}subjects(){return a.jsx("div",{className:"pd-subjects",children:a.jsx(tt,{})})}holds(){const e=i(this.table);return a.jsx(e,{})}head(){const e=i(this.cover);return a.jsxs(a.Fragment,{children:[this.filed(),a.jsx(e,{}),a.jsx("div",{className:"pd-switches",children:this.switches()})]})}front(){return a.jsx("div",{className:this.open===void 0?"pd-leaf pd-front pd-open":"pd-leaf pd-front",children:this.opening()})}opening(){const e=i(this.synopsis);return a.jsx("div",{className:"pd-words",children:a.jsx(e,{})})}leaves(){return this.chapters.map((e,s)=>{const n=i(e);return a.jsxs("div",{className:e===this.open?"pd-leaf pd-open":"pd-leaf",children:[a.jsx("div",{className:"pd-words",children:a.jsx(n,{})}),a.jsx("div",{className:"pd-files",children:this.listings(e)})]},s)})}named(e){return this.chapters.find(s=>s.mention?.identifier===e||this.sections(s).some(n=>n.mention?.identifier===e))}coverOf(e){return e!==void 0&&this.means?.identifier===e?this.cover:void 0}byline(){const e=i(xa);return a.jsx(e,{chapter:this.cover})}filed(){const e=i(va);return a.jsx(e,{chapter:this.cover})}switches(){}listings(e){const s=i(La);return e.annotations.find(ba).reverse().map((n,t)=>a.jsx(s,{chapter:e,identifier:n.$identifier,type:n.$type},t))}sections(e){return e.text.find(q).flatMap(s=>[s,...this.sections(s)])}turn(){this.bookmark!==this.cover&&super.turn()}$Define(){super.$Define();const e=i(Ba),s=i(ge);this.annotations.add(this,a.jsx(e,{}),a.jsx(s,{}))}$Bound(){const e=i(ct);for(const s of this.pages)s.text.add(this,a.jsx(e,{}));super.$Bound()}};r(Ts,"$LibraryBook");let I=Ts;const Rs=class Rs extends Fa{$holdsOnlyChapters(e){l([...e.text].every(s=>s instanceof $),"a book of this library holds only chapters, and this one holds something else")}$placesEveryChapter(e){l(e.text.find($).every(s=>e.placed.includes(s)),"a book of this library has a place for every chapter it holds, and this one holds a chapter it places nowhere")}$onlyAChapterAppends(e){l(e.text.find($).every(s=>e.chapters.includes(s)||!s.is(ba)),"only an ordinary chapter appends a file, and here a cover, a synopsis or a table of contents appends one")}};r(Rs,"LibraryBookSpecification");let z=Rs;Ve([h("a book of this library holds only chapters")],z.prototype,"$holdsOnlyChapters");Ve([h("a book of this library has a place for every chapter it holds")],z.prototype,"$placesEveryChapter");Ve([h("only an ordinary chapter appends a file")],z.prototype,"$onlyAChapterAppends");const ja=i(I);i(ja,Qe)(Ma);i(ja,ge)(ka);const Ls=class Ls extends O{get on(){return this.book.is(this.$of)}$Switch(...e){this.$Writing(...e),this._button=s=>a.jsx("button",{type:"button","aria-pressed":this.on,onClick:r(()=>this.press(),"onClick"),...s}),this.containers.replace(this,"span",this._button)}press(){const e=this.book,s=[e.$is].flat();e.$is=this.on?s.filter(n=>n!==this.$of):[this.$of,...s]}$Define(){super.$Define(),this.classes.add(this,"pd-switch")}};r(Ls,"$Switch");let ae=Ls;const Ms=class Ms extends ae{press(){const e=this.book,s=[e.$is].flat().filter(n=>!this.$among.includes(n));e.$is=[this.$of,...s]}};r(Ms,"$Tab");let _e=Ms;const la=i(ae),ft=i(_e);var gt=Object.defineProperty,ut=Object.getOwnPropertyDescriptor,$t=r((p,e,s,n)=>{for(var t=ut(e,s),o=p.length-1,d;o>=0;o--)(d=p[o])&&(t=d(e,s,t)||t);return t&&gt(e,s,t),t},"__decorateClass$4");const he=class he extends g{constructor(){super(...arguments),this.specification=new v}defines(e){for(const s of e.annotations.after(this))s instanceof he&&e.annotations.express(s,!1);e.classes.add(this,"pa-reading")}erase(e){e.classes.revert(this)}};r(he,"$Reading");let M=he;const Ys=class Ys extends M{defines(e){super.defines(e),e.classes.add(this,"pa-code-forward")}};r(Ys,"$CodeForward");let We=Ys;const Gs=class Gs extends M{defines(e){super.defines(e),e.classes.add(this,"pa-words-forward")}};r(Gs,"$WordsForward");let Fe=Gs;const Es=class Es extends g{constructor(){super(...arguments),this.specification=new ie}defines(e){e.classes.add(this,"pa-brief")}erase(e){e.classes.revert(this)}};r(Es,"$Brief");let te=Es;const Js=class Js extends u{$saidOfAParagraph(e){l(e instanceof f,"brief is said of a paragraph, and this is not one")}};r(Js,"BriefSpecification");let ie=Js;$t([h("brief is said of a paragraph")],ie.prototype,"$saidOfAParagraph");const za=i(M),ha=i(We),He=i(Fe),Yt=i(te);var bt=Object.defineProperty,mt=Object.getOwnPropertyDescriptor,xt=r((p,e,s,n)=>{for(var t=mt(e,s),o=p.length-1,d;o>=0;o--)(d=p[o])&&(t=d(e,s,t)||t);return t&&bt(e,s,t),t},"__decorateClass$3");const Ks=class Ks extends fe{constructor(){super(...arguments),this.specification=new v,this.themeProvider=!0,this.style=y.div`
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
    `}defines(e){super.defines(e),e.classes.add(this,"pa-spread")}erase(e){super.erase(e),e.classes.revert(this)}};r(Ks,"$Spread");let Te=Ks;const vt=i(Te),qs=class qs extends I{constructor(){super(...arguments),this.specification=new re}get readings(){return[ha,He]}get open(){return super.open??this.pages[0]}front(){}switches(){const e=i(ft);return a.jsxs(a.Fragment,{children:[a.jsx(e,{chapter:this.cover,of:ha,among:this.readings,children:"code"}),a.jsx(e,{chapter:this.cover,of:He,among:this.readings,children:"words"}),super.switches()]})}$Define(){super.$Define();const e=i(vt),s=i(za);this.annotations.add(this,a.jsx(e,{}),a.jsx(s,{}))}};r(qs,"$Manual");let Re=qs;const Bs=class Bs extends z{$everyChapterHasABrief(e){l(e.chapters.every(s=>s.text.find(f).some(n=>n.is(te))),"every chapter of a manual opens with a brief, and one here has none")}};r(Bs,"ManualSpecification");let re=Bs;xt([h("every chapter of a manual opens with a brief")],re.prototype,"$everyChapterHasABrief");const ue=i(Re);i(ue,za)(He);i(ue,ge)(Ze);var wt=Object.defineProperty,yt=Object.getOwnPropertyDescriptor,Se=r((p,e,s,n)=>{for(var t=yt(e,s),o=p.length-1,d;o>=0;o--)(d=p[o])&&(t=d(e,s,t)||t);return t&&wt(e,s,t),t},"__decorateClass$2");const Qs=class Qs extends g{constructor(){super(...arguments),this.specification=new A}get date(){return this.text.find(ma)[0]}defines(e){e.classes.add(this,"pa-dated")}erase(e){e.classes.revert(this)}note(){const e=i(this.date);return a.jsx(e,{})}};r(Qs,"$Dated");let Y=Qs;const Us=class Us extends u{$saidOfAChapter(e){l(e instanceof $,"dated is said of a chapter, and this is not one")}$datedOnce(e){l(e.annotations.containsOne(Y),"a chapter is dated once, and this one is dated more than once")}$givenOneDate(e){l(e.annotations.expressed(Y)?.text.find(ma).length===1,"a dated chapter is given one date, and this one is given none or more than one")}};r(Us,"DatedSpecification");let A=Us;Se([h("dated is said of a chapter")],A.prototype,"$saidOfAChapter");Se([h("a chapter is dated once")],A.prototype,"$datedOnce");Se([h("a dated chapter is given one date")],A.prototype,"$givenOneDate");const Gt=i(Y),Xs=class Xs extends U{constructor(){super(...arguments),this.label=y.span.attrs({className:"pa-number"})``}get number(){return this.book.pages.indexOf(this.leads)+1}note(){const e=this.label;return this.number===0?void 0:a.jsx(e,{children:String(this.number)})}};r(Xs,"$NumberedEntry");let Le=Xs;const kt=i(Le);i(ue,ya)(kt);const Zs=class Zs extends N{constructor(){super(...arguments),this.measure="58ch",this.spreadColumn="15.5rem",this.colour="#4fb3a8",this.side="#e3f4f1",this.sideLine="#c6e5df",this.ink="#1a1f36",this.heading="#1a1f36",this.soft="#4f566b",this.faint="#8792a2",this.line="#e6e8ee",this.rule="#e6e8ee",this.panel="#f7f8fa",this.accent="#0a7a70",this.capital="#0a7a70",this.lit="#0a7a70",this.tint="#e3f4f1",this.night="#0f2a33",this.dusk="#17363f"}parts(){return[...super.parts(),this.index(),this.words(),this.file(),this.fold(),this.small()]}holds(){return c`
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
        `}};r(Zs,"$ManualTheme");let Me=Zs;const jt=i(Me);i(ue,Qe)(jt);var zt=Object.defineProperty,Ot=Object.getOwnPropertyDescriptor,Pt=r((p,e,s,n)=>{for(var t=Ot(e,s),o=p.length-1,d;o>=0;o--)(d=p[o])&&(t=d(e,s,t)||t);return t&&zt(e,s,t),t},"__decorateClass$1");const Vs=class Vs extends g{constructor(){super(...arguments),this.specification=new ne}defines(e){e.classes.add(this,"pa-first")}erase(e){e.classes.revert(this)}};r(Vs,"$First");let Ye=Vs;const Ss=class Ss extends u{$saidOfAParagraph(e){l(e instanceof f,"first is said of a paragraph, and this is not one")}};r(Ss,"FirstSpecification");let ne=Ss;Pt([h("first is said of a paragraph")],ne.prototype,"$saidOfAParagraph");const Et=i(Ye),ea=class ea extends N{constructor(){super(...arguments),this.serif="'Source Serif 4', Georgia, serif",this.paper="#fdfcfa",this.ink="#343c4a",this.soft="#727d8c",this.faint="#9ea8b5",this.line="#e4e9f2",this.tint="#f0f4fc",this.barTint="#f8fafe",this.sky="#e3edfb",this.skyInk="#4a6ea0",this.accent="#4a6ea0",this.wash="linear-gradient(135deg, #f2f6fd 0%, #fdfcfa 48%, #fdf6f1 100%)",this.side="#f7f8fb",this.sideInk="#3a4452",this.sideDim="#7f8a9b",this.sideLine="#e3e7ee",this.barHeight="52px",this.holdsColumn="232px",this.space="24px",this.cover="132px",this.volume="184px",this.radius="6px",this.spine="inset 3px 0 0 rgba(0, 0, 0, 0.08), inset 4px 0 0 rgba(255, 255, 255, 0.35), 0 6px 12px -10px rgba(44, 52, 64, 0.3)",this.lift="inset 3px 0 0 rgba(0, 0, 0, 0.08), inset 4px 0 0 rgba(255, 255, 255, 0.35), 0 10px 16px -12px rgba(44, 52, 64, 0.35)",this.openSpine="inset 7px 0 0 rgba(0, 0, 0, 0.07), inset 9px 0 0 rgba(255, 255, 255, 0.45), 0 12px 22px -16px rgba(44, 52, 64, 0.35)",this.keyword="#5a4fa8",this.string="#2f7f6e",this.type="#23407a",this.comment="#8a94a3"}parts(){return[...super.parts(),this.illustrations(),this.marks(),this.lockups(),this.shelf(),this.jackets(),this.desk(),this.unfolded(),this.built(),this.small()]}page(){return c`
            font-family: ${({theme:e})=>e.font};
            font-size: ${({theme:e})=>e.size};
            line-height: 1.55;
            color: ${({theme:e})=>e.ink};
            background: ${({theme:e})=>e.wash};
            min-height: 100vh;
        `}library(){return c`
            .pd-library { padding: 0 calc(${({theme:e})=>e.space} * 0.75); gap: calc(${({theme:e})=>e.space} * 0.375); }
            .pd-library .pd-paragraph, .pd-me .pd-paragraph { margin-block: 0; }
            .pd-library .pa-reference, .pd-me .pa-reference { color: inherit; text-decoration: none; }
            .pd-subjects { display: none; }
            .pd-me { padding: 0 calc(${({theme:e})=>e.space} * 0.75); }
        `}head(){return c`
            .pd-head { padding: 0; }
            .pd-head .pa-illustration { display: none; }
        `}holds(){return c`
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
            }
        `}illustrations(){return c`
            .pd-illustration { fill: none; stroke: var(--ink); stroke-width: 1.7; stroke-linecap: round; stroke-linejoin: round; }
            .pd-illustration .fill { fill: var(--foot); stroke: var(--ink); }
            .pd-illustration .light { fill: ${({theme:e})=>e.white}; stroke: none; }
            .pd-drawing { display: grid; place-items: center; min-height: 0; }
        `}marks(){return c`
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
        `}lockups(){return c`
            .pd-book .pd-library { background: ${({theme:e})=>e.barTint}; }
            .pd-logo { display: flex; align-items: center; gap: calc(${({theme:e})=>e.space} * 0.375); height: ${({theme:e})=>e.barHeight}; margin-inline-end: calc(${({theme:e})=>e.space} * 1.125); }
            .pd-logo .pd-word.pa-reference {
                display: block;
                font-family: ${({theme:e})=>e.serif};
                font-size: calc(1.29 * ${({theme:e})=>e.size});
                font-weight: 700;
                line-height: 1;
                letter-spacing: -0.015em;
                color: var(--band-ink, ${({theme:e})=>e.ink});
                transform: translateY(calc(${({theme:e})=>e.space} / 24));
            }
            .pd-filed { display: flex; align-items: center; gap: calc(${({theme:e})=>e.space} * 0.375); height: ${({theme:e})=>e.barHeight}; }
            .pd-filed .pd-paragraph { display: flex; align-items: center; }
            .pd-filed .pa-label { display: none; }
            .pd-filed .pd-word.pa-reference {
                display: inline-block;
                max-width: 0;
                overflow: hidden;
                white-space: nowrap;
                font-size: calc(0.93 * ${({theme:e})=>e.size});
                font-weight: 500;
                line-height: 1;
                letter-spacing: 0.06em;
                text-transform: uppercase;
                color: ${({theme:e})=>e.soft};
                transition: max-width 0.22s ease, padding 0.22s ease;
            }
            .pd-filed:hover .pd-word.pa-reference {
                max-width: calc(${({theme:e})=>e.space} * 10);
                padding-inline: 0 calc(${({theme:e})=>e.space} / 4);
                font-family: ${({theme:e})=>e.serif};
                font-size: calc(1.29 * ${({theme:e})=>e.size});
                font-weight: 700;
                letter-spacing: -0.015em;
                text-transform: none;
                color: var(--band-ink, ${({theme:e})=>e.ink});
                transform: translateY(calc(${({theme:e})=>e.space} / 24));
            }
            .pd-library:has(.pd-filed:hover) .pd-logo { display: none; }
            .pd-me .pd-byline { display: flex; align-items: center; gap: calc(${({theme:e})=>e.space} * 0.375); font-size: calc(0.93 * ${({theme:e})=>e.size}); color: ${({theme:e})=>e.soft}; }
            .pd-me .pd-word.pa-reference { color: ${({theme:e})=>e.ink}; font-weight: 500; }
            .pd-me { gap: calc(${({theme:e})=>e.space} * 0.375); }
        `}shelf(){return c`
            .pd-leaves { padding: calc(${({theme:e})=>e.space} * 1.167) calc(${({theme:e})=>e.space} * 1.5) calc(${({theme:e})=>e.space} * 2); }
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
        `}jackets(){return c`
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
        `}desk(){return c`
            .pd-leaf.pd-open {
                position: relative;
                display: grid;
                grid-template-columns: ${({theme:e})=>e.volume} minmax(0, 1fr);
                gap: calc(${({theme:e})=>e.space} * 1.167);
                align-items: start;
                margin-block-end: calc(${({theme:e})=>e.space} * 1.167);
                padding: calc(${({theme:e})=>e.space} * 0.833) ${({theme:e})=>e.space};
                border: thin solid color-mix(in oklch, var(--band, ${({theme:e})=>e.sky}) 40%, white);
                border-radius: calc(${({theme:e})=>e.space} * 0.417);
                background: linear-gradient(135deg, color-mix(in oklch, var(--band, ${({theme:e})=>e.sky}) 45%, white), color-mix(in oklch, var(--ground, ${({theme:e})=>e.tint}) 60%, white) 55%, ${({theme:e})=>e.white});
                box-shadow: 0 calc(${({theme:e})=>e.space} / 3) calc(${({theme:e})=>e.space} * 0.833) calc(${({theme:e})=>e.space} * -0.75) color-mix(in oklch, var(--band-ink, ${({theme:e})=>e.skyInk}) 45%, transparent);
            }
            .pd-leaf.pd-open .pd-paragraph.pd-jacket {
                width: ${({theme:e})=>e.volume};
                height: calc(${({theme:e})=>e.volume} * 1.5);
                font-size: calc(1.357 * ${({theme:e})=>e.size});
                box-shadow: ${({theme:e})=>e.openSpine};
                cursor: default;
            }
            .pd-leaf.pd-open .pd-jacket .pd-word {
                padding: calc(${({theme:e})=>e.space} / 2) calc(${({theme:e})=>e.space} * 0.833) calc(${({theme:e})=>e.space} / 2) calc(${({theme:e})=>e.space} * 0.958);
                box-shadow: 0 calc(${({theme:e})=>e.space} / 8) 0 ${({theme:e})=>e.white};
            }
            .pd-leaf.pd-open .pd-jacket .pd-word.pa-label {
                padding: 0 calc(${({theme:e})=>e.space} * 0.75) 0 calc(${({theme:e})=>e.space} * 0.875);
                font-size: calc(0.75 * ${({theme:e})=>e.size});
                letter-spacing: 0.18em;
                box-shadow: 0 calc(${({theme:e})=>e.space} / -8) 0 ${({theme:e})=>e.white};
            }
            .pd-leaf.pd-open .pd-words {
                position: relative;
                max-height: calc(${({theme:e})=>e.volume} * 1.5);
                padding-block-start: calc(${({theme:e})=>e.space} / 4);
                overflow: clip;
            }
            .pd-leaf.pd-open .pd-words::after {
                content: '';
                position: absolute;
                inset-inline: 0;
                top: calc(${({theme:e})=>e.volume} * 1.5 - ${({theme:e})=>e.space} * 3);
                height: calc(${({theme:e})=>e.space} * 3);
                background: linear-gradient(to bottom, transparent, color-mix(in oklch, var(--ground, ${({theme:e})=>e.tint}) 60%, white) 70%, color-mix(in oklch, var(--ground, ${({theme:e})=>e.tint}) 60%, white));
                pointer-events: none;
            }
            .pd-leaf.pd-open .pd-words .pd-chapter { margin-block: 0; max-width: none; scroll-margin-block-start: calc(${({theme:e})=>e.space} * 3.5); }
            .pd-leaf.pd-open .pd-words .pd-paragraph.pd-shelved {
                display: flex;
                align-items: center;
                gap: calc(${({theme:e})=>e.space} / 3);
                margin: 0 0 calc(${({theme:e})=>e.space} / 3);
                font-size: calc(0.75 * ${({theme:e})=>e.size});
                font-weight: 600;
                line-height: 1;
                letter-spacing: 0.12em;
                text-transform: uppercase;
                color: var(--foot-ink, ${({theme:e})=>e.soft});
            }
            .pd-leaf.pd-open .pd-paragraph.pd-shelved::before {
                content: '';
                width: calc(${({theme:e})=>e.space} / 3);
                height: calc(${({theme:e})=>e.space} / 3);
                border-radius: 50%;
                background: var(--foot, ${({theme:e})=>e.sky});
            }
            .pd-leaf.pd-open .pd-words .pd-title {
                margin: 0 0 calc(${({theme:e})=>e.space} / 6);
                font-family: ${({theme:e})=>e.serif};
                font-size: calc(1.714 * ${({theme:e})=>e.size});
                font-weight: 700;
                line-height: 1.1;
                letter-spacing: -0.01em;
                color: var(--band-ink, ${({theme:e})=>e.ink});
            }
            .pd-leaf.pd-open .pd-words .pd-paragraph {
                display: block;
                max-width: 56ch;
                margin: 0 0 calc(${({theme:e})=>e.space} * 0.417);
                font-family: ${({theme:e})=>e.serif};
                font-size: calc(1.07 * ${({theme:e})=>e.size});
                font-weight: 400;
                line-height: 1.55;
                color: ${({theme:e})=>e.ink};
            }
            .pd-leaf.pd-open .pd-words .pd-paragraph.pd-turn { display: none; }
            .pd-leaf.pd-open .pd-words .pd-paragraph.pa-caption {
                font-family: ${({theme:e})=>e.font};
                font-size: ${({theme:e})=>e.size};
                font-weight: 500;
                line-height: 1.5;
                color: var(--band-ink, ${({theme:e})=>e.ink});
            }
            .pd-leaf.pd-open .pd-words .pd-paragraph .pa-reference { color: var(--band-ink, ${({theme:e})=>e.skyInk}); }
            .pd-leaf.pd-open .pd-line { grid-column: 2; display: flex; flex-wrap: wrap; gap: 0 calc(${({theme:e})=>e.space} / 2); }
            .pd-leaf.pd-open .pd-paragraph.pd-byline, .pd-leaf.pd-open .pd-paragraph.pd-filed-under {
                display: inline-flex;
                gap: calc(${({theme:e})=>e.space} / 6);
                max-width: none;
                margin: 0 calc(${({theme:e})=>e.space} / 3) calc(${({theme:e})=>e.space} * 0.667) 0;
                font-family: ${({theme:e})=>e.serif};
                font-size: calc(0.93 * ${({theme:e})=>e.size});
                line-height: 1.55;
                color: ${({theme:e})=>e.soft};
            }
            .pd-leaf.pd-open .pd-line .pd-paragraph { margin-block-end: 0; }
            .pd-leaf.pd-open .pd-byline .pa-reference, .pd-leaf.pd-open .pd-filed-under .pa-reference { color: var(--band-ink, ${({theme:e})=>e.skyInk}); font-weight: 500; text-decoration: none; }
            .pd-leaf.pd-open .pd-paragraph.pd-read { grid-column: 2; margin: 0; }
            .pd-leaf.pd-open .pd-read .pd-word {
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
            .pd-leaf.pd-open .pd-read .pd-word:hover { background: var(--foot, ${({theme:e})=>e.tint}); color: var(--foot-ink, ${({theme:e})=>e.ink}); }
            .pd-leaf.pd-open .pd-word.pd-switch {
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
            .pd-leaf.pd-open .pd-word.pd-switch::after {
                content: '';
                width: calc(${({theme:e})=>e.space} * 0.375);
                height: calc(${({theme:e})=>e.space} * 0.375);
                border-inline-end: calc(${({theme:e})=>e.space} / 16) solid currentColor;
                border-block-start: calc(${({theme:e})=>e.space} / 16) solid currentColor;
                transform: translateY(calc(${({theme:e})=>e.space} / 24));
            }
            .pd-leaf.pd-open .pd-word.pd-switch:hover { background: var(--band, ${({theme:e})=>e.sky}); }
            .pd-leaf.pd-open .pd-files { display: none; }
        `}unfolded(){return c`
            .pa-unfolded .pd-shelf { display: none; }
            .pa-unfolded .pd-leaf.pd-open { margin-block-end: 0; }
            .pa-unfolded .pd-leaf.pd-open .pd-paragraph.pd-jacket { position: sticky; top: calc(${({theme:e})=>e.space} * 0.833); }
            .pa-unfolded .pd-leaf.pd-open .pd-words { max-height: none; max-width: 60ch; overflow: visible; }
            .pa-unfolded .pd-leaf.pd-open .pd-words::after { display: none; }
            .pa-unfolded .pd-leaf.pd-open .pd-words .pd-paragraph { font-size: calc(1.143 * ${({theme:e})=>e.size}); line-height: 1.6; }
            .pa-unfolded .pd-leaf.pd-open .pd-word.pd-switch { top: calc(${({theme:e})=>e.space} * 0.667); right: ${({theme:e})=>e.space}; bottom: auto; }
            .pa-unfolded .pd-leaf.pd-open .pd-word.pd-switch::after { transform: translateY(calc(${({theme:e})=>e.space} / 24)) rotate(180deg); }
        `}built(){return c`
            .pa-built .pd-holds .pd-section:not(.pa-appendix) { opacity: 0.55; }
            .pa-built .pd-holds .pd-section:not(.pa-appendix) .pa-entry { display: none; }
            .pa-built .pd-holds .pd-section.pa-appendix { order: -1; margin-block-start: 0; padding-block-start: 0; border-block-start: 0; opacity: 1; }
            .pa-built .pd-holds .pd-section.pa-appendix .pd-heading { font-size: calc(0.75 * ${({theme:e})=>e.size}); }
            .pa-built .pd-holds .pd-section.pa-appendix .pa-entry { font-size: calc(0.964 * ${({theme:e})=>e.size}); font-weight: 500; }
            .pa-built .pd-holds .pd-section.pa-appendix .pa-entry::before { background: ${({theme:e})=>e.skyInk}; }
            .pa-built .pd-front, .pa-built .pd-shelf { display: none; }
            .pa-built .pd-leaf.pd-open {
                grid-template-columns: minmax(0, 1fr);
                padding: 0;
                border: 0;
                border-radius: 0;
                background: none;
                box-shadow: none;
            }
            .pa-built .pd-leaf.pd-open .pd-words { max-height: none; padding: 0; overflow: visible; }
            .pa-built .pd-leaf.pd-open .pd-words::after { display: none; }
            .pa-built .pd-leaf.pd-open .pd-words .pd-chapter { max-width: 64ch; }
            .pa-built .pd-leaf.pd-open .pd-words .pd-title {
                margin: 0 0 calc(${({theme:e})=>e.space} / 4);
                font-size: calc(1.857 * ${({theme:e})=>e.size});
                line-height: 1.15;
                color: ${({theme:e})=>e.ink};
            }
            .pa-built .pd-leaf.pd-open .pd-words .pd-heading {
                margin: calc(${({theme:e})=>e.space} * 1.083) 0 calc(${({theme:e})=>e.space} / 3);
                font-size: calc(0.786 * ${({theme:e})=>e.size});
                font-weight: 600;
                line-height: 1;
                letter-spacing: 0.12em;
                text-transform: uppercase;
                color: ${({theme:e})=>e.soft};
            }
            .pa-built .pd-leaf.pd-open .pd-words .pd-paragraph { margin: 0 0 calc(${({theme:e})=>e.space} * 0.583); font-size: calc(1.107 * ${({theme:e})=>e.size}); line-height: 1.6; }
            .pa-built .pd-leaf.pd-open .pd-words .pd-paragraph .pa-reference { color: ${({theme:e})=>e.skyInk}; }
            .pa-built .pd-leaf.pd-open .pd-word.pd-switch { display: none; }
            .pa-built .pd-leaf.pd-open .pd-files { display: grid; gap: calc(${({theme:e})=>e.space} * 0.75); background: none; color: inherit; }
            .pa-built .pd-paragraph.pd-listing { margin: 0; padding: 0; border: thin solid ${({theme:e})=>e.sideLine}; border-radius: ${({theme:e})=>e.radius}; background: ${({theme:e})=>e.side}; overflow: hidden; }
            .pa-built .pd-listing .pd-word {
                display: flex;
                align-items: center;
                gap: calc(${({theme:e})=>e.space} / 3);
                padding: calc(${({theme:e})=>e.space} * 0.292) calc(${({theme:e})=>e.space} / 2);
                border-block-end: thin solid ${({theme:e})=>e.sideLine};
                border-radius: 0;
                background: ${({theme:e})=>e.white};
                font-size: calc(0.857 * ${({theme:e})=>e.size});
                font-weight: 500;
                line-height: 1;
                color: ${({theme:e})=>e.soft};
            }
            .pa-built .pd-listing .pd-word::before { content: ''; width: calc(${({theme:e})=>e.space} * 0.292); height: calc(${({theme:e})=>e.space} * 0.292); border-radius: 50%; background: ${({theme:e})=>e.skyInk}; opacity: 0.6; }
            .pa-built .pd-listing .pd-code {
                margin: 0;
                padding: calc(${({theme:e})=>e.space} / 2) 0;
                border-radius: 0;
                background: none;
                font-size: calc(0.893 * ${({theme:e})=>e.size});
                line-height: 1.65;
                color: ${({theme:e})=>e.sideInk};
            }
            .pa-built .pd-code-line::before { width: calc(${({theme:e})=>e.space} * 1.833); padding-inline-end: calc(${({theme:e})=>e.space} * 0.583); color: ${({theme:e})=>e.faint}; }
        `}small(){return c`
            @media (max-width: ${({theme:e})=>e.narrow}) {
                .pd-leaves { padding: calc(${({theme:e})=>e.space} * 0.667); }
                .pd-logo { margin-inline-end: calc(${({theme:e})=>e.space} / 2); }
                .pd-me .pd-word.pd-mark { display: block; }
                .pd-leaf.pd-open { grid-template-columns: ${({theme:e})=>e.cover} minmax(0, 1fr); gap: calc(${({theme:e})=>e.space} * 0.667); padding: calc(${({theme:e})=>e.space} * 0.667); }
                .pd-leaf.pd-open .pd-paragraph.pd-jacket { width: ${({theme:e})=>e.cover}; height: calc(${({theme:e})=>e.cover} * 1.5); font-size: calc(0.964 * ${({theme:e})=>e.size}); }
                .pd-leaf.pd-open .pd-words { max-height: none; }
                .pd-leaf.pd-open .pd-words::after { display: none; }
                .pd-leaf.pd-open .pd-word.pd-switch { display: none; }
                .pd-shelf { grid-template-columns: repeat(3, minmax(0, 1fr)); gap: calc(${({theme:e})=>e.space} * 0.583) calc(${({theme:e})=>e.space} / 2); }
                .pd-volume .pd-paragraph.pd-jacket { width: auto; height: auto; aspect-ratio: 2 / 3; }
            }
        `}};r(ea,"$Bookshelf");let Ge=ea;const Dt=i(Ge);var Ct=Object.defineProperty,It=Object.getOwnPropertyDescriptor,es=r((p,e,s,n)=>{for(var t=n>1?void 0:n?It(e,s):e,o=p.length-1,d;o>=0;o--)(d=p[o])&&(t=(n?d(e,s,t):d(t))||t);return n&&t&&Ct(e,s,t),t},"__decorateClass");const sa=class sa extends I{get books(){return this.text.find($).filter(e=>e.is(K)&&e!==this.synopsis)}get placed(){return[...super.placed,...this.books]}get pages(){return[...this.books,...super.pages]}write(){return a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"pd-library",children:this.library()}),a.jsx("div",{className:"pd-me",children:this.byline()}),a.jsx("div",{className:"pd-holds",children:this.holds()}),a.jsx("div",{className:"pd-head",children:this.head()}),a.jsxs("div",{className:"pd-leaves",children:[this.front(),this.leaves(),a.jsx("div",{className:"pd-shelf",children:this.volumes()})]})]})}library(){const e=i(ca),s=this.coverOf(this.subject?.means?.identifier);return a.jsxs(a.Fragment,{children:[s===void 0||s===this.cover?void 0:this.painted(s,a.jsxs("div",{className:"pd-filed",children:[a.jsx(e,{cover:s}),this.filed()]})),this.painted(this.cover,a.jsxs("div",{className:"pd-logo",children:[a.jsx(e,{cover:this.cover}),this.logo()]}))]})}logo(){const e=i(x),s=i(m);return a.jsx("div",{className:"pd-paragraph",children:a.jsxs(e,{children:[a.jsx(s,{children:this.means.identifier}),this.title.name]})})}byline(){const e=i(ca),s=this.coverOf(this.author?.means?.identifier);return a.jsxs(a.Fragment,{children:[super.byline(),s===void 0?void 0:a.jsx(e,{cover:s})]})}head(){return a.jsx("div",{className:"pd-switches",children:this.switches()})}front(){const e=i(la);return this.painted(this.cover,a.jsxs("div",{className:this.open===void 0?"pd-leaf pd-front pd-open":"pd-leaf pd-front",children:[this.jacket(this.cover),this.opening(),this.reading(this.cover),a.jsx(e,{chapter:this.cover,of:fa,children:"read on"})]}))}opening(){const e=i(this.title),s=i(this.synopsis);return a.jsxs("div",{className:"pd-words",children:[this.shelved(this.cover),a.jsx(e,{}),this.line(this.cover),a.jsx(s,{})]})}leaves(){const e=i(la);return[...this.books,...this.chapters].map((s,n)=>{const t=i(s),o=this.jacketOf(s);return this.painted(o,a.jsxs("div",{className:s===this.open?"pd-leaf pd-open":"pd-leaf",children:[this.jacket(o),a.jsxs("div",{className:"pd-words",children:[this.shelved(o),a.jsx(t,{})]}),o===void 0?void 0:a.jsx("div",{className:"pd-line",children:this.line(o)}),this.reading(o),o===void 0?void 0:a.jsx(e,{chapter:s,of:fa,children:"read on"}),a.jsx("div",{className:"pd-files",children:this.listings(s)})]},n),n)})}volumes(){const e=i(x),s=i(m);return(this.table?.annotations.expressed(Z)?.entries??[]).map((t,o)=>{const d=G(t).identifier,da=this.named(d),$e=da===void 0?this.coverOf(d):this.jacketOf(da);if($e!==void 0)return a.jsxs("div",{className:"pd-volume",children:[this.jacket($e,d),a.jsx("div",{className:"pd-paragraph pd-name",children:a.jsxs(e,{children:[a.jsx(s,{children:d}),$e.title.name]})})]},o)})}jacket(e,s){if(e===void 0)return;const n=i(Va),t=i(m);return s===void 0?a.jsx(n,{cover:e}):a.jsx(n,{cover:e,children:a.jsx(t,{children:s})})}shelved(e){if(e!==void 0)return a.jsx("div",{className:"pd-paragraph pd-shelved",children:e===this.cover?"filed under itself":"filed here"})}line(e){if(e===void 0)return;const s=i(xa),n=i(va);return a.jsxs(a.Fragment,{children:[a.jsx(s,{cover:e}),a.jsx(n,{cover:e})]})}reading(e){if(e===void 0)return;const s=i(x),n=i(m),t=e.mention.identifier;return a.jsx("div",{className:"pd-paragraph pd-read",children:a.jsxs(s,{children:[a.jsx(n,{children:t}),e===this.cover?"This is the catalogue":`Read ${e.title.name}`," →"]})})}painted(e,s,n){const t=e?.annotations.expressed(w)?.painted;return t===void 0?s:a.jsx(t,{children:s},n)}jacketOf(e){return e.annotations.expressed(j)?.cover??(this.appendix.includes(e)?void 0:this.cover)}coverOf(e){return super.coverOf(e)??this.books.map(s=>s.annotations.expressed(j)?.cover).find(s=>s!==void 0&&s.mention?.identifier===e)}named(e){return super.named(e)??this.books.find(s=>this.placeOf(s)===e)}placeOf(e){const s=e.title?.annotations.expressed(Ha)?.identifier,n=this.means?.identifier;if(!(s===void 0||n===void 0))return`${n.replace(/\/+$/u,"")}/#${s}`}};r(sa,"$Catalogue");let Ee=sa;const aa=class aa extends Ta{get identifier(){return this._book??super.identifier}$Bound(){super.$Bound(),this._book=this.chapter?.annotations.expressed(K)?.means?.identifier}};r(aa,"$BookLink");let oe=aa;es([Ra()],oe.prototype,"_book",2);const ta=class ta extends g{constructor(){super(...arguments),this.specification=new de}defines(e){e.classes.add(this,"pa-caption")}erase(e){e.classes.revert(this)}};r(ta,"$Caption");let Je=ta;const ia=class ia extends g{constructor(){super(...arguments),this.specification=new pe}defines(e){e.classes.add(this,"pa-arrow")}erase(e){e.classes.revert(this)}};r(ia,"$Arrow");let Ke=ia;const ra=class ra extends g{constructor(){super(...arguments),this.specification=new v}defines(e){e.classes.add(this,"pa-unfolded")}erase(e){e.classes.revert(this)}};r(ra,"$Unfolded");let qe=ra;const na=class na extends u{$saidOfAParagraph(e){l(e instanceof f,"a caption is said of a paragraph, and this is not one")}};r(na,"CaptionSpecification");let de=na;es([h("a caption is said of a paragraph")],de.prototype,"$saidOfAParagraph",1);const oa=class oa extends u{$saidOfAWord(e){l(e instanceof O&&e.chapter?.is(Be)===!0,"an arrow is said of a word of a table of contents, and this is not one")}};r(oa,"ArrowSpecification");let pe=oa;es([h("an arrow is said of a word of a table of contents")],pe.prototype,"$saidOfAWord",1);const ss=i(Ee),At=i(oe),Jt=i(Je),Kt=i(Ke),fa=i(qe);i(ss,me)(At);i(ss,Qe)(Dt);i(ss,ge)(Ze);export{Ee as $,Kt as A,Wt as B,Jt as C,ka as D,Et as F,Ft as I,Ze as L,v as O,Ht as S,ft as T,Rt as V,Tt as W,Lt as a,Mt as b,N as c,I as d,ge as e,je as f,Y as g,ot as h,Ie as i,Gt as j,Re as k,Yt as l};
