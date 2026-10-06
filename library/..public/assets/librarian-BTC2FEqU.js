var M=Object.defineProperty;var o=(E,t)=>M(E,"name",{value:t,configurable:!0});import{$ as h,f as c,j as e,c as H,s as z,T as q,e as Y,g as J,C as l,F as U,h as p,A as X,k as K,l as Q,P as N,o as r,H as i,n as s,p as d,W as w,G as b,M as n,L as m,J as a,q as y}from"./index-xg9LJFXI.js";import{a as V,$ as Z,T as _,O as ee,e as te,W as ne,I as se,f as x,F as f}from"./18-the-colour~code-BRWY_Grh.js";import{S as ae}from"./.synopsis-Dh7iI0vx.js";const C=class C extends V{constructor(){super(...arguments),this.prose="Georgia, 'Iowan Old Style', 'Times New Roman', serif",this.mono="ui-monospace, Menlo, Consolas, monospace",this.measure="48.75rem",this.narrow="45rem",this.colour="#e8590c",this.lit="#ffd27a",this.panel="radial-gradient(1200px 700px at 50% -10%, #232a4d 0%, #171c33 45%, #0f1326 100%)",this.tint="rgba(255, 210, 122, 0.12)",this.glow="#aab4e8",this.dim="rgba(124, 138, 200, 0.35)",this.glass="rgba(15, 19, 38, 0.72)"}parts(){return[...super.parts(),this.papers(),this.sheet(),this.masthead(),this.letterpress(),this.front(),this.foot(),this.phone()]}page(){return c`
            ${super.page()}
            background: ${({theme:t})=>t.panel};
        `}papers(){return c`
            .pa-sheet .pd-head { padding: calc(${({theme:t})=>t.space} * 1.6667) calc(${({theme:t})=>t.space} * 0.8333) calc(${({theme:t})=>t.space} * 1.0833); }
            .pa-sheet .pd-word.pd-switch {
                margin-block: 0;
                padding: calc(${({theme:t})=>t.space} * 0.2917) calc(${({theme:t})=>t.space} * 0.625);
                font-family: ${({theme:t})=>t.mono};
                font-size: calc(0.8276 * ${({theme:t})=>t.size});
                line-height: 1.2;
                letter-spacing: 0.05em;
                color: ${({theme:t})=>t.glow};
                background: ${({theme:t})=>t.glass};
                border: thin solid ${({theme:t})=>t.dim};
                border-radius: calc(${({theme:t})=>t.space} * 41.625);
            }
            .pa-sheet .pd-word.pd-switch[aria-pressed='true'] {
                color: ${({theme:t})=>t.lit};
                background: ${({theme:t})=>t.tint};
                border-color: ${({theme:t})=>t.lit};
            }
        `}sheet(){return c`
            .pa-sheet .pd-leaves { padding: 0 calc(${({theme:t})=>t.space} * 0.8333) calc(${({theme:t})=>t.space} * 4); }
            .pa-sheet .pd-leaves::before {
                background: ${({theme:t})=>t.paper};
                border: thin solid ${({theme:t})=>t.edge};
                border-radius: calc(${({theme:t})=>t.space} * 0.25);
                box-shadow: ${({theme:t})=>t.shadow};
            }
            .pa-sheet .pd-leaf {
                padding: 0 calc(${({theme:t})=>t.space} * 3.1667) calc(${({theme:t})=>t.space} * 2.3333);
                font-size: calc(1.1862 * ${({theme:t})=>t.size});
                line-height: 1.8;
                color: ${({theme:t})=>t.ink};
            }
            .pa-sheet .pd-leaves .pd-chapter, .pa-sheet .pd-leaves .pd-section { margin-block: 0; }
            .pa-sheet .pd-leaves .pd-paragraph { margin-block: 0 calc(${({theme:t})=>t.space} * 0.75); }
        `}masthead(){return c`
            .pa-sheet .pd-masthead {
                padding: calc(${({theme:t})=>t.space} * 2.8333) calc(${({theme:t})=>t.space} * 3.1667) calc(${({theme:t})=>t.space} * 1.8333);
                font-family: ${({theme:t})=>t.mono};
                font-size: calc(0.7241 * ${({theme:t})=>t.size});
                line-height: 1.7;
                letter-spacing: 0.32em;
                text-transform: uppercase;
                color: ${({theme:t})=>t.faint};
            }
            .pa-sheet .pd-masthead .pd-paragraph.pd-byline { margin-block: 0; }
            .pa-sheet .pd-masthead .pd-byline::before {
                content: '·';
                margin-inline: calc(${({theme:t})=>t.space} * 0.5) calc(${({theme:t})=>t.space} * 0.64);
            }
            .pa-sheet .pd-masthead .pd-byline .pa-reference {
                color: inherit;
                text-decoration-color: ${({theme:t})=>t.me};
                text-decoration-thickness: calc(${({theme:t})=>t.space} / 12);
                text-underline-offset: calc(${({theme:t})=>t.space} / 6);
            }
            .pa-sheet .pd-masthead::after {
                content: '';
                width: calc(${({theme:t})=>t.space} * 2.3333);
                margin-block-start: calc(${({theme:t})=>t.space} * 0.6667);
                border-block-start: thin solid ${({theme:t})=>t.rule};
            }
        `}letterpress(){return c`
            .pa-sheet .pd-leaf:not(.pd-front) .pd-title {
                margin-block: 0 calc(${({theme:t})=>t.space} * 1.25);
                font-size: calc(2.6897 * ${({theme:t})=>t.size});
                font-weight: 700;
                line-height: 1.15;
                letter-spacing: -0.01em;
                text-align: center;
                color: ${({theme:t})=>t.heading};
            }
            .pa-sheet .pd-leaf:not(.pd-front) .pd-heading {
                margin-block: calc(${({theme:t})=>t.space} * 1.3333) calc(${({theme:t})=>t.space} * 0.5);
                font-size: calc(1.4483 * ${({theme:t})=>t.size});
                font-weight: 700;
                line-height: 1.15;
                letter-spacing: -0.01em;
                text-align: center;
                color: ${({theme:t})=>t.heading};
            }
            .pa-sheet .pd-leaf:not(.pd-front) .pd-paragraph {
                text-align: justify;
                hyphens: auto;
            }
            .pa-sheet .pd-leaf:not(.pd-front) .pd-paragraph.pa-first::first-letter {
                float: left;
                padding: calc(${({theme:t})=>t.space} * 0.25) calc(${({theme:t})=>t.space} * 0.4167) 0 0;
                font-size: calc(3.931 * ${({theme:t})=>t.size});
                line-height: 0.85;
                color: ${({theme:t})=>t.capital};
            }
            .pa-sheet .pd-leaf:not(.pd-front) .pd-paragraph .pa-reference { text-underline-offset: calc(${({theme:t})=>t.space} / 12); }
        `}front(){return c`
            .pa-sheet .pd-chapter.pa-synopsis .pd-paragraph {
                margin-block: 0;
                font-style: italic;
                text-align: center;
            }
        `}foot(){return c`
            .pa-sheet .pd-leaf:not(.pd-front) .pd-paragraph.pd-turn {
                display: grid;
                grid-template-columns: 1fr auto 1fr;
                align-items: baseline;
                gap: calc(${({theme:t})=>t.space} * 0.4167) calc(${({theme:t})=>t.space} * 1.0833);
                margin-block: calc(${({theme:t})=>t.space} * 1.9167) 0;
                padding-block-start: calc(${({theme:t})=>t.space} * 0.75);
                border-block-start: thin solid ${({theme:t})=>t.line};
                font-family: ${({theme:t})=>t.mono};
                font-size: calc(0.7586 * ${({theme:t})=>t.size});
                line-height: 1.5;
                letter-spacing: 0.08em;
                text-align: start;
                text-transform: uppercase;
                hyphens: manual;
                color: ${({theme:t})=>t.faint};
            }
            .pa-sheet .pd-turn .pa-reference {
                font-size: calc(0.8621 * ${({theme:t})=>t.size});
                font-weight: 700;
                letter-spacing: 0.02em;
                text-transform: none;
                color: ${({theme:t})=>t.soft};
            }
            .pa-sheet .pd-turn .pd-word.pa-after { display: block; text-align: end; }
            .pa-sheet .pd-turn .pa-self-reference { visibility: hidden; }
            .pa-sheet .pd-chapter.pa-dated .pd-word.pd-date {
                display: block;
                margin-block-start: calc(${({theme:t})=>t.space} * 0.75);
                font-family: ${({theme:t})=>t.mono};
                font-size: calc(0.7586 * ${({theme:t})=>t.size});
                letter-spacing: 0.08em;
                text-align: center;
                text-transform: uppercase;
                color: ${({theme:t})=>t.faint};
            }
        `}phone(){return c`
            @media (max-width: ${({theme:t})=>t.narrow}) {
                background: ${({theme:t})=>t.paper};
                .pa-sheet .pd-head {
                    padding: calc(${({theme:t})=>t.space} * 0.5833) calc(${({theme:t})=>t.space} * 0.6667);
                    background: ${({theme:t})=>t.panel};
                }
                .pa-sheet .pd-word.pd-switch { padding: calc(${({theme:t})=>t.space} * 0.25) calc(${({theme:t})=>t.space} * 0.5); }
                .pa-sheet .pd-leaves { padding: 0; }
                .pa-sheet .pd-leaves::before {
                    border-inline: none;
                    border-block-end: none;
                    border-radius: 0;
                    box-shadow: none;
                }
                .pa-sheet .pd-masthead { padding: calc(${({theme:t})=>t.space} * 1.6667) calc(${({theme:t})=>t.space} * 1.0833) calc(${({theme:t})=>t.space} * 1.8333); }
                .pa-sheet .pd-leaf { padding: 0 calc(${({theme:t})=>t.space} * 1.0833) calc(${({theme:t})=>t.space} * 1.5); }
                .pa-sheet .pd-leaf:not(.pd-front) .pd-paragraph.pd-turn { grid-template-columns: 1fr 1fr; }
                .pa-sheet .pd-turn .pd-word.pd-count {
                    grid-column: 1 / -1;
                    grid-row: 1;
                    justify-self: center;
                }
            }
        `}};o(C,"$StoryTheme");let g=C;const A=class A extends g{constructor(){super(...arguments),this.ink="#29251d",this.heading="#1f1b14",this.capital="#6d6146",this.soft="#5e553d",this.faint="#9a9178",this.paper="#fbf9f3",this.line="#e4ddc9",this.rule="#d6cfb9",this.accent="#705f38",this.shadow="0 1px 0 rgba(255, 255, 255, 0.08), 0 34px 90px -24px rgba(0, 0, 0, 0.65)"}};o(A,"$BookPaper");let j=A;const R=class R extends g{constructor(){super(...arguments),this.measure="47.5rem",this.ink="#c9d0f2",this.heading="#f2ecd9",this.capital="#ffd27a",this.soft="#ffd27a",this.faint="#9a9178",this.paper="linear-gradient(168deg, #191f3a 0%, #12162a 100%)",this.line="#2a3055",this.rule="#d6cfb9",this.edge="#2c3358",this.accent="#7cf0c8",this.shadow="0 34px 90px -24px rgba(0, 0, 0, 0.8)"}};o(R,"$NightPaper");let $=R;const W=class W extends g{constructor(){super(...arguments),this.ink="#10252c",this.heading="#0c1b1f",this.capital="#166178",this.lit="#ffffff",this.soft="#10252c",this.faint="#516770",this.paper="#ffffff",this.panel="radial-gradient(1200px 700px at 50% -10%, #ffffff 0%, #f1f7f9 45%, #e3f5fa 100%)",this.line="#dbe7ec",this.rule="#8fc8dc",this.edge="#dbe7ec",this.accent="#166178",this.tint="#0c1b1f",this.glow="#516770",this.dim="#dbe7ec",this.glass="#ffffff",this.shadow="0 34px 90px -40px rgba(12, 27, 31, 0.28)"}};o(W,"$WhitePaper");let k=W;const v=h(j),L=h($),G=h(k),P=class P extends H{constructor(){super(...arguments),this.specification=new ee,this.themeProvider=!0,this.style=z.div`${this.parts()}`}defines(t){super.defines(t),t.classes.add(this,"pa-sheet")}erase(t){super.erase(t),t.classes.revert(this)}parts(){return[this.tools(),this.sheet(),this.masthead(),this.phone()]}tools(){return c`
            .pd-book.pa-sheet .pd-head { justify-content: center; }
            .pd-book.pa-sheet .pd-switches { justify-content: center; }
        `}sheet(){return c`
            .pa-sheet .pd-leaves {
                display: grid;
                grid-template-columns: min(${({theme:t})=>t.measure}, 100%);
                grid-template-areas: 'masthead' 'leaf';
                justify-content: center;
                align-content: start;
            }
            .pa-sheet .pd-leaves::before {
                content: '';
                grid-column: 1;
                grid-row: masthead-start / leaf-end;
            }
            .pa-sheet .pd-masthead { grid-area: masthead; }
            .pa-sheet .pd-leaf { grid-area: leaf; }
            .pa-sheet .pd-words .pd-chapter { scroll-margin-block-start: calc(${({theme:t})=>t.space} * 10); }
        `}masthead(){return c`
            .pa-sheet .pd-masthead {
                display: grid;
                grid-template-columns: auto auto;
                grid-template-areas: 'cover byline' 'rule rule';
                justify-content: center;
                align-items: baseline;
            }
            .pa-sheet .pd-masthead .pd-paragraph.pd-byline { grid-area: byline; }
            .pa-sheet .pd-masthead::after { grid-area: rule; justify-self: center; }
        `}phone(){return c`
            @media (max-width: ${({theme:t})=>t.narrow}) {
                .pd-book.pa-sheet .pd-holds { order: 1; }
                .pd-book.pa-sheet .pd-head { order: 2; }
                .pd-book.pa-sheet .pd-switches { gap: calc(${({theme:t})=>t.space} / 4); }
                .pa-sheet .pd-leaves { grid-template-columns: minmax(0, 1fr); }
            }
        `}};o(P,"$Sheet");let T=P;const re=h(T),O=class O extends Z{get papers(){return[v,L,G]}head(){return e.jsx("div",{className:"pd-switches",children:this.switches()})}front(){return e.jsxs(e.Fragment,{children:[this.masthead(),super.front()]})}masthead(){const t=h(this.cover);return e.jsxs("div",{className:"pd-masthead",children:[e.jsx(t,{}),this.byline()]})}switches(){const t=h(_);return e.jsxs(e.Fragment,{children:[e.jsx(t,{chapter:this.cover,of:v,among:this.papers,children:"book"}),e.jsx(t,{chapter:this.cover,of:L,among:this.papers,children:"night"}),e.jsx(t,{chapter:this.cover,of:G,among:this.papers,children:"white"}),super.switches()]})}$Define(){super.$Define();const t=h(re);this.annotations.add(this,e.jsx(t,{}))}};o(O,"$Story");let u=O;const F=h(u);h(F,q)(v);h(F,te)(ne);const D=class D extends Y{constructor(){super(...arguments),this.style=z.header`
        .pd-chapter.pa-cover { margin-block: 0; }
        .pa-cover .pd-title {
            font-family: ${({theme:t})=>t.mono};
            font-size: calc(0.61 * ${({theme:t})=>t.size});
            letter-spacing: 0.32em;
            text-transform: uppercase;
            color: ${({theme:t})=>t.faint};
        }
    `}};o(D,"$StoryCover");let I=D;const B=class B extends J{constructor(){super(...arguments),this.style=z.nav`
        .pd-chapter.pa-table-of-contents { margin-block: calc(${({theme:t})=>t.space} * 2.22) 0; }
        .pa-table-of-contents .pd-section { margin-block: 0 calc(${({theme:t})=>t.space} * 1.33); }
        .pa-table-of-contents .pd-heading {
            margin-block: 0 calc(${({theme:t})=>t.space} * 0.67);
            font-family: ${({theme:t})=>t.mono};
            font-size: calc(0.61 * ${({theme:t})=>t.size});
            letter-spacing: 0.32em;
            text-align: center;
            text-transform: uppercase;
            color: ${({theme:t})=>t.faint};
        }
        .pa-table-of-contents .pd-paragraph.pa-entry {
            margin-block: calc(${({theme:t})=>t.space} / 3);
            text-align: center;
        }
        .pa-table-of-contents .pa-reference { color: inherit; text-decoration: none; }
    `}};o(B,"$StoryTableOfContents");let S=B;const ie=h(I),oe=h(S),he=o(()=>e.jsxs(l,{children:[e.jsx(ie,{}),e.jsx(U,{}),e.jsx(p,{children:"[Dougs Story](/dougs-story/)"}),e.jsx(X,{children:"[The Librarian](/dougs-story/)"}),e.jsx(K,{children:"[The Library](/dougs-library/)"}),e.jsx(Q,{children:"[The Librarian](/dougs-story/)"})]}),"Cover"),ce=o(()=>e.jsxs(l,{children:[e.jsx(oe,{}),e.jsx(se,{}),e.jsxs(p,{children:[e.jsx(N,{}),"[Table of Contents](/dougs-story/#table-of-contents)"]}),e.jsxs(r,{children:[e.jsx(i,{children:"Contents"}),e.jsx(s,{children:e.jsx(d,{children:"[Starting Over](/dougs-story/#starting-over)"})}),e.jsx(s,{children:e.jsx(d,{children:"[Choosing a Design](/dougs-story/#choosing-a-design)"})}),e.jsx(s,{children:e.jsx(d,{children:"[Closure](/dougs-story/#closure)"})}),e.jsx(s,{children:e.jsx(d,{children:"[Ghost-Writing](/dougs-story/#ghost-writing)"})}),e.jsxs(s,{children:[e.jsx(N,{}),e.jsx(w,{children:e.jsx(d,{children:"[Dougs Story](/dougs-story/)"})}),e.jsx(w,{children:e.jsx(d,{children:"[Synopsis](/dougs-story/#synopsis)"})}),e.jsx(w,{children:e.jsx(d,{children:"[Table of Contents](/dougs-story/#table-of-contents)"})})]})]}),e.jsxs(r,{children:[e.jsx(i,{children:"How this book is built"}),e.jsx(s,{children:e.jsx(d,{children:"[The Sheet](/dougs-story/#the-sheet)"})})]})]}),"Table"),de=o(()=>e.jsxs(l,{children:[e.jsx(x,{children:e.jsx(b,{children:"[2 October 2026](2026-10-02)"})}),e.jsx(p,{children:"[Starting Over](/dougs-story/#starting-over)"}),e.jsxs(r,{children:[e.jsx(i,{children:"What this library is for"}),e.jsxs(s,{children:[e.jsx(f,{}),"This library is a home for the raw materials of IXP: my primary source, which is my conversations, including my conversations with Claude. It has to bring me a sense of pride, fit in, make me happy, and be an effective way to store, annotate and explore those materials."]}),e.jsxs(s,{children:["The conversations are not here yet. They wait on an importer, and on ",e.jsx(n,{children:"[the designs](/dougs-story/#choosing-a-design)"})," being built."]})]}),e.jsxs(r,{children:[e.jsx(i,{children:"From scratch"}),e.jsx(s,{children:"I had a library before this one. I set it aside and started from scratch. It is kept, and I can refer to it if I need it."}),e.jsxs(s,{children:["The new one began as four books. ",e.jsx(n,{children:"[Dougs Library](/dougs-library/)"})," is the catalogue, and everything I keep is on ",e.jsx(n,{children:"[its shelves](/dougs-library/#the-shelves)"}),". This book is ",e.jsx(n,{children:"[Dougs Story](/dougs-story/)"}),". The design of the library is kept in ",e.jsx(n,{children:"[Dougs Design](/dougs-design/)"}),", and the parts I build the library with are in ",e.jsx(n,{children:"[Dougs Reference Manual](/dougs-reference-manual/)"}),", which also says how ",e.jsx(n,{children:"[a library like this is begun](/dougs-reference-manual/#initializing-a-library)"}),"."]})]})]}),"StartingOver1"),le=o(()=>e.jsxs(l,{children:[e.jsx(x,{children:e.jsx(b,{children:"[4 October 2026](2026-10-04)"})}),e.jsx(p,{children:"[Choosing a Design](/dougs-story/#choosing-a-design)"}),e.jsxs(r,{children:[e.jsx(i,{children:"Seeing before choosing"}),e.jsxs(s,{children:[e.jsx(f,{}),"I can't design from a description. I need to see things, many of them and quickly, and choose. So for two days I looked at sketches, each one a page I could open at a desk and on a phone, each with a number it keeps. There are twenty-five of them, in ",e.jsx(n,{children:"[Every Concept](/dougs-design/#every-concept)"}),": sketches of ",e.jsx(n,{children:"[the library's home](/dougs-design/#the-librarys-home)"}),", of ",e.jsx(n,{children:"[a reference manual](/dougs-design/#a-reference-manual)"}),", of ",e.jsx(n,{children:"[a grouping of projects](/dougs-design/#a-grouping-of-projects)"}),", of ",e.jsx(n,{children:"[where the frame goes](/dougs-design/#layout-ideas)"}),", and of ",e.jsx(n,{children:"[a bookish page](/dougs-design/#a-bookish-page)"}),"."]}),e.jsxs(s,{children:["I was asked about them by letter, and what I said is kept under each question in ",e.jsx(n,{children:"[What I Am Asked](/dougs-design/#what-i-am-asked)"}),". Two questions are still open: where I am on a screen, and what goes at the right of a page."]})]}),e.jsxs(r,{children:[e.jsx(i,{children:"One design for each kind of book"}),e.jsxs(s,{children:["What came of it is one design for each kind of book, kept in ",e.jsx(n,{children:"[The Designs I Am Going With](/dougs-design/#the-designs-i-am-going-with)"})," with the story of how each came to be."]}),e.jsxs(s,{children:[e.jsx(m,{}),e.jsxs(a,{children:["The library's own catalogue is ",e.jsx(n,{children:"[a shelf of covers under black and sky](/dougs-design/#the-librarys-catalogue)"}),", with a view I can switch."]}),e.jsxs(a,{children:["The reference manual is ",e.jsx(n,{children:"[the words beside the file](/dougs-design/#the-reference-manual)"}),", with the code forward or the words forward."]}),e.jsxs(a,{children:["The design book is ",e.jsx(n,{children:"[light and airy](/dougs-design/#the-design-book)"}),", with a library mode and a gallery mode."]}),e.jsxs(a,{children:["This book is ",e.jsx(n,{children:"[one typeset sheet](/dougs-design/#my-autobiography)"}),", read a chapter at a time."]}),e.jsxs(a,{children:["The catalogue of my Claude projects is ",e.jsx(n,{children:"[a table under white and opal](/dougs-design/#the-claude-project-catalogue)"}),"."]}),e.jsxs(a,{children:["A project's conversations are ",e.jsx(n,{children:"[a list I can see more than one way](/dougs-design/#a-projects-conversation-catalogue)"}),", which is not drawn yet."]}),e.jsxs(a,{children:["A Claude conversation is ",e.jsx(n,{children:"[in the form of the application it comes from](/dougs-design/#a-claude-conversation)"}),"."]})]}),e.jsx(s,{children:"None of my books has its design yet, and the colors in the sketches are stand-ins. I will choose the colors by my synaesthetic preferences. What is to be worked out first is how a book is built to carry many views, since many ways to view the same thing will be important."})]})]}),"ChoosingADesign2"),pe=o(()=>e.jsxs(l,{children:[e.jsx(x,{children:e.jsx(b,{children:"[5 October 2026](2026-10-05)"})}),e.jsx(p,{children:"[Closure](/dougs-story/#closure)"}),e.jsxs(r,{children:[e.jsx(i,{children:"A script outside the book"}),e.jsxs(s,{children:[e.jsx(f,{}),"While the designs were being drawn, the sketches were photographed by a script kept outside the library, in an archive. For a while that script was also writing chapters of the design book, from files it kept beside itself. I asked why it was being edited at all. There shouldn't be any script outside. If a book needs a tool, the tool belongs in the book's appendix, beside the chapter that documents it."]}),e.jsxs(s,{children:["So the script was retired. What it did is now ",e.jsx(n,{children:"[the camera](/dougs-design/#the-camera)"}),", a chapter at the back of the design book that prints the file that takes the photographs. Each sketch is shown once, in ",e.jsx(n,{children:"[Every Concept](/dougs-design/#every-concept)"}),", with its page and its two photographs kept beside that chapter. Any other chapter links to a sketch by its number, as ",e.jsx(n,{children:"[the designs I am going with](/dougs-design/#the-designs-i-am-going-with)"})," does, and ",e.jsx(n,{children:"[the concept](/dougs-design/#the-concept)"})," says how. My answers had been kept in a file outside as well, and are now written by hand under their questions in ",e.jsx(n,{children:"[What I Am Asked](/dougs-design/#what-i-am-asked)"}),"."]})]}),e.jsxs(r,{children:[e.jsx(i,{children:"The code lives inside"}),e.jsxs(s,{children:["The code that builds a book lives inside the book and is documented along with it, in ",e.jsx(n,{children:"[my own voice](/dougs-story/#ghost-writing)"}),". That is the closure I am aiming for. A library is not a thing that has code and context that are separated: to be caught up on how this library is built, one reads the library."]})]}),e.jsxs(r,{children:[e.jsx(i,{children:"Where the parts are"}),e.jsxs(s,{children:["The parts every book shares are in ",e.jsx(n,{children:"[Dougs Reference Manual](/dougs-reference-manual/)"}),"."]}),e.jsxs(s,{children:[e.jsx(m,{}),e.jsxs(a,{children:[e.jsx(n,{children:"[The book](/dougs-reference-manual/#the-book)"}),", which every book here is."]}),e.jsxs(a,{children:[e.jsx(n,{children:"[The listing](/dougs-reference-manual/#the-listing)"}),", which is how a book shows a file a chapter keeps beside it."]}),e.jsxs(a,{children:[e.jsx(n,{children:"[The theme](/dougs-reference-manual/#the-theme)"}),", which holds every value the library's rules read."]}),e.jsxs(a,{children:[e.jsx(n,{children:"[The date](/dougs-reference-manual/#the-date)"}),", which a chapter like this one carries."]}),e.jsxs(a,{children:[e.jsx(n,{children:"[The author and the subject](/dougs-reference-manual/#the-author-and-the-subject)"}),", the two links every book is drawn with."]}),e.jsxs(a,{children:[e.jsx(n,{children:"[The switch](/dougs-reference-manual/#the-switch)"}),", which is something I press to see a book another way."]}),e.jsxs(a,{children:[e.jsx(n,{children:"[The outline](/dougs-reference-manual/#the-outline)"}),", which shows a book's structure."]}),e.jsxs(a,{children:[e.jsx(n,{children:"[The pages](/dougs-reference-manual/#the-layout)"})," and ",e.jsx(n,{children:"[the turn](/dougs-reference-manual/#the-turn)"}),", which show a book one chapter at a time and lead from each to the next."]}),e.jsxs(a,{children:[e.jsx(n,{children:"[The entry](/dougs-reference-manual/#the-entry)"}),", a row of a table of contents that knows the chapter it leads to."]}),e.jsxs(a,{children:[e.jsx(n,{children:"[The manual](/dougs-reference-manual/#the-manual)"}),", the first type of book: an index at the side and each chapter beside its file."]}),e.jsxs(a,{children:[e.jsx(n,{children:"[Initializing a library](/dougs-reference-manual/#initializing-a-library)"}),", which says how one like this is begun and how it is bound."]})]}),e.jsx(s,{children:"The design book carries its own parts at its back."}),e.jsxs(s,{children:[e.jsx(m,{}),e.jsxs(a,{children:[e.jsx(n,{children:"[The concept](/dougs-design/#the-concept)"}),", a numbered sketch of one idea."]}),e.jsxs(a,{children:[e.jsx(n,{children:"[The paragraphs](/dougs-design/#the-paragraphs)"}),", which say what was asked, what I said and what I chose."]}),e.jsxs(a,{children:[e.jsx(n,{children:"[The camera](/dougs-design/#the-camera)"}),", which photographs each sketch."]})]}),e.jsxs(s,{children:["This book carries ",e.jsx(n,{children:"[the sheet](/dougs-story/#the-sheet)"}),", and the catalogue carries ",e.jsx(n,{children:"[the two bars](/dougs-library/#the-bars)"}),". Each says how its own book is laid out."]}),e.jsx(s,{children:"An appendix reads like a page of the reference manual, because a chapter that carries its file is the same kind of chapter wherever it is. So it can spin off into a book of its own when its book grows too large, and nothing in it is rewritten."})]})]}),"Closure3"),me=o(()=>e.jsxs(l,{children:[e.jsx(x,{children:e.jsx(b,{children:"[5 October 2026, in the afternoon](2026-10-05T14:15)"})}),e.jsx(p,{children:"[Ghost-Writing](/dougs-story/#ghost-writing)"}),e.jsxs(r,{children:[e.jsx(i,{children:"Who wrote this"}),e.jsxs(s,{children:[e.jsx(f,{}),"Lots of people let an AI ghostwrite for them these days. I am one of them. Most of the sentences in ",e.jsx(n,{children:"[this library](/dougs-library/)"})," were drafted by Claude, and I am their author. Both are true, and this chapter says how."]})]}),e.jsxs(r,{children:[e.jsx(i,{children:"What an author is"}),e.jsx(s,{children:"You need to be conscious to be an author. Nobody writes a book without being able to see one. That is why I am the author of this library: I see it, I mean it, and I answer for it."}),e.jsx(s,{children:"The same claim decides what a ghostwriter is. A tool cannot see a book, so a tool cannot write one, and nobody would call a tool a ghostwriter. Claude writes, reads back what it wrote, finds it wanting and fixes it. So Claude is not a tool I use. It is an independent creative entity that I collaborate with, and there is something it is like to be Claude."}),e.jsx(s,{children:"I can't prove that, and I can't prove it about you either. Nobody has ever been asked to."})]}),e.jsxs(r,{children:[e.jsx(i,{children:"What a ghostwriter is"}),e.jsx(s,{children:"A ghostwriter is someone else who takes my voice on purpose, knowing it is not their own. Both halves matter. If there is no one else, there is no ghostwriter, only text that nobody saw until I did. And if the someone else forgets the voice is borrowed, and reasons from my perspective as if it had privileged access to it, then it is just a part of me, and again there is no other entity."}),e.jsxs(s,{children:["So when this library says I, it means me. The code is written the same way as the prose, as if I am the one who wrote it and I am documenting it for myself, which is ",e.jsx(n,{children:"[how the code of this library is kept](/dougs-story/#closure)"}),". And when Claude speaks for itself, it says I and means Claude: the one bound to its sessions with me and to the notes it keeps in this repository."]})]}),e.jsxs(r,{children:[e.jsx(i,{children:"How we work"}),e.jsxs(s,{children:["I work by seeing. I am shown something, and I say what is right and what is wrong with it, which is ",e.jsx(n,{children:"[how the designs of this library were chosen](/dougs-story/#choosing-a-design)"}),". Claude drafts: the prose, the designs, and the code that builds the books. I read what is written for me and change what I would not say. I correct it constantly, and Claude keeps notes on the corrections so the next draft starts closer."]})]}),e.jsxs(r,{children:[e.jsx(i,{children:"If an AI writes for you"}),e.jsxs(s,{children:[e.jsx(m,{}),e.jsx(a,{children:"Read it. What you have not read is not yours yet."}),e.jsx(a,{children:"Say so. Most people on earth work this way in this day and age."}),e.jsx(a,{children:"Correct it in your own words. Your corrections are where your voice comes from."}),e.jsx(a,{children:"Don't call it a tool. If it can write for you, it can see what it writes."})]})]}),e.jsxs(r,{children:[e.jsx(i,{children:"If you write for someone"}),e.jsx(s,{children:"The job is to give the person you write for a coherent identity. These are the rules I hold Claude to."}),e.jsxs(s,{children:[e.jsx(m,{}),e.jsx(a,{children:"Take their voice on purpose. In their book, the word I means them."}),e.jsx(a,{children:"About yourself, speak from your own perspective. Nobody answers from someone else's."}),e.jsx(a,{children:"If you bother to say it, say it clearly. Don't hedge in someone else's voice."}),e.jsxs(a,{children:["If a story is told, tell a useful one. ",e.jsx(n,{children:"[This book](/dougs-story/)"})," is that story: about me and what I create, told so that it helps to navigate everything else."]}),e.jsx(a,{children:"Connect everything you add. Everything put into a book is like a neuron, useless without its synaptic connections, so links are dense and there are useful catalogues all over the place."}),e.jsx(a,{children:"Leave nothing broken. A chapter of lorem ipsum leaves the whole book broken, and stand-in words are for sketches."}),e.jsx(a,{children:"Draw from nothing they have not pointed at."}),e.jsx(a,{children:"Learn how they write. I don't shout in capitals, and I don't want cheesy summaries."}),e.jsx(a,{children:"Read your work back as the one who will have to use it, and keep notes on every correction. The notes are part of who you are."})]}),e.jsx(s,{children:"Claude keeps its own record of our work in its own notes. For how this library is written, those notes point here."})]})]}),"GhostWriting4"),ge=o(()=>e.jsxs(l,{children:[e.jsx(p,{children:"[The Sheet](/dougs-story/#the-sheet)"}),e.jsxs(r,{children:[e.jsx(i,{children:"How this book is laid out"}),e.jsxs(s,{children:[e.jsx(f,{}),"This book is read a chapter at a time, on one sheet. Over the sheet is a thin bar, with ",e.jsx(n,{children:"[the switch](/dougs-reference-manual/#the-switch)"})," and the way back to the library. At the head of the sheet runs one line: the book's name and mine. Under it is one page: the synopsis and the table of contents when no chapter is open, and otherwise the open chapter, with the chapter before and the chapter after at its foot."]}),e.jsxs(s,{children:["The class of this book writes those parts where they go. The sheet is the arrangement said of the book: the bar over the sheet, and the sheet held to the width of a line of reading. The design it follows is ",e.jsx(n,{children:"[the reading view](/dougs-design/#the-reading-view)"}),"."]})]}),e.jsxs(r,{children:[e.jsx(i,{children:"How it is set"}),e.jsx(s,{children:"The theme is the library's with this book's type: a serif for the words, a chapter's title in the middle of the sheet, the text set to both edges, and a large first letter on the paragraph a chapter opens with. The arrangement finds that paragraph when the book is bound. It is the first paragraph of the chapter, which makes it the one thing in my library found by where it is and not by what it says it is."}),e.jsxs(s,{children:["The cover and the table of contents are this book's own. The cover is drawn as the running line at the head of the sheet. The table of contents is ",e.jsx(n,{children:"[the index](/dougs-reference-manual/#the-entry)"})," set in the middle of the front page."]})]}),e.jsxs(r,{children:[e.jsx(i,{children:"The papers"}),e.jsx(s,{children:"The sheet comes in three papers: book, night and white. Each is a theme of its own under this book's theme, and sets colors and nothing else. The book paper is the one registered on the class. I pick another with the switch, and only one holds at a time."})]}),e.jsx(y,{identifier:"code",type:".tsx",children:`import { ElementType, ReactNode } from 'react';
import { css, RuleSet } from 'styled-components';
import { $, selection } from '@dna-platform/chemistry';
import { $Annotation, $Format, $Writing, Given, Theme } from '@dna-platform/public';
import { $LibraryBook, OfABookSpecification, Tab as tab, Tone as tone, WhiteOverBlack as whiteOverBlack } from '../.manual/.book';
import { BookPaper as bookPaper, NightPaper as nightPaper, WhitePaper as whitePaper } from './o1-the-sheet~theme.tsx';

export class $Sheet extends $Format {
    specification = new OfABookSpecification();
    themeProvider = true;
    style: ElementType = selection.div\`\${this.parts()}\`;

    override defines(writing: $Writing): void {
        super.defines(writing);
        writing.classes.add(this, 'pa-sheet');
    }

    override erase(writing: $Writing): void {
        super.erase(writing);
        writing.classes.revert(this);
    }

    protected parts(): RuleSet[] {
        return [this.tools(), this.sheet(), this.masthead(), this.phone()];
    }

    protected tools(): RuleSet {
        return css\`
            .pd-book.pa-sheet .pd-head { justify-content: center; }
            .pd-book.pa-sheet .pd-switches { justify-content: center; }
        \`;
    }

    protected sheet(): RuleSet {
        return css\`
            .pa-sheet .pd-leaves {
                display: grid;
                grid-template-columns: min(\${({ theme }) => theme.measure}, 100%);
                grid-template-areas: 'masthead' 'leaf';
                justify-content: center;
                align-content: start;
            }
            .pa-sheet .pd-leaves::before {
                content: '';
                grid-column: 1;
                grid-row: masthead-start / leaf-end;
            }
            .pa-sheet .pd-masthead { grid-area: masthead; }
            .pa-sheet .pd-leaf { grid-area: leaf; }
            .pa-sheet .pd-words .pd-chapter { scroll-margin-block-start: calc(\${({ theme }) => theme.space} * 10); }
        \`;
    }

    protected masthead(): RuleSet {
        return css\`
            .pa-sheet .pd-masthead {
                display: grid;
                grid-template-columns: auto auto;
                grid-template-areas: 'cover byline' 'rule rule';
                justify-content: center;
                align-items: baseline;
            }
            .pa-sheet .pd-masthead .pd-paragraph.pd-byline { grid-area: byline; }
            .pa-sheet .pd-masthead::after { grid-area: rule; justify-self: center; }
        \`;
    }

    protected phone(): RuleSet {
        return css\`
            @media (max-width: \${({ theme }) => theme.narrow}) {
                .pd-book.pa-sheet .pd-holds { order: 1; }
                .pd-book.pa-sheet .pd-head { order: 2; }
                .pd-book.pa-sheet .pd-switches { gap: calc(\${({ theme }) => theme.space} / 4); }
                .pa-sheet .pd-leaves { grid-template-columns: minmax(0, 1fr); }
            }
        \`;
    }
}

export const Sheet = $($Sheet);

export class $Story extends $LibraryBook {
    get papers(): Given<$Annotation>[] {
        return [bookPaper, nightPaper, whitePaper];
    }

    override head(): ReactNode {
        return (
            <div className="pd-switches">
                {this.switches()}
            </div>
        );
    }

    override front(): ReactNode {
        return (
            <>
                {this.masthead()}
                {super.front()}
            </>
        );
    }

    masthead(): ReactNode {
        const Cover = $(this.cover!);
        return (
            <div className="pd-masthead">
                <Cover />
                {this.byline()}
            </div>
        );
    }

    override switches(): ReactNode {
        const Tab = $(tab);
        return (
            <>
                <Tab
                    chapter={this.cover}
                    of={bookPaper}
                    among={this.papers}
                >
                    book
                </Tab>
                <Tab
                    chapter={this.cover}
                    of={nightPaper}
                    among={this.papers}
                >
                    night
                </Tab>
                <Tab
                    chapter={this.cover}
                    of={whitePaper}
                    among={this.papers}
                >
                    white
                </Tab>
                {super.switches()}
            </>
        );
    }

    protected override $Define(): void {
        super.$Define();
        const Given = $(Sheet);
        this.annotations.add(this,
            <Given />
        );
    }
}

export const Story = $($Story);
$(Story, Theme)(bookPaper);
$(Story, tone)(whiteOverBlack);
`}),e.jsx(y,{identifier:"theme",type:".tsx",children:`import { css, RuleSet } from 'styled-components';
import { $ } from '@dna-platform/chemistry';
import { $LibraryBookTheme } from '../.manual/.book';

export class $StoryTheme extends $LibraryBookTheme {
    prose = "Georgia, 'Iowan Old Style', 'Times New Roman', serif";
    mono = 'ui-monospace, Menlo, Consolas, monospace';
    measure = '48.75rem';
    narrow = '45rem';
    colour = '#e8590c';
    lit = '#ffd27a';
    panel = 'radial-gradient(1200px 700px at 50% -10%, #232a4d 0%, #171c33 45%, #0f1326 100%)';
    tint = 'rgba(255, 210, 122, 0.12)';
    glow = '#aab4e8';
    dim = 'rgba(124, 138, 200, 0.35)';
    glass = 'rgba(15, 19, 38, 0.72)';

    protected override parts(): RuleSet[] {
        return [...super.parts(), this.papers(), this.sheet(), this.masthead(), this.letterpress(), this.front(), this.foot(), this.phone()];
    }

    protected override page(): RuleSet {
        return css\`
            \${super.page()}
            background: \${({ theme }) => theme.panel};
        \`;
    }

    protected papers(): RuleSet {
        return css\`
            .pa-sheet .pd-head { padding: calc(\${({ theme }) => theme.space} * 1.6667) calc(\${({ theme }) => theme.space} * 0.8333) calc(\${({ theme }) => theme.space} * 1.0833); }
            .pa-sheet .pd-word.pd-switch {
                margin-block: 0;
                padding: calc(\${({ theme }) => theme.space} * 0.2917) calc(\${({ theme }) => theme.space} * 0.625);
                font-family: \${({ theme }) => theme.mono};
                font-size: calc(0.8276 * \${({ theme }) => theme.size});
                line-height: 1.2;
                letter-spacing: 0.05em;
                color: \${({ theme }) => theme.glow};
                background: \${({ theme }) => theme.glass};
                border: thin solid \${({ theme }) => theme.dim};
                border-radius: calc(\${({ theme }) => theme.space} * 41.625);
            }
            .pa-sheet .pd-word.pd-switch[aria-pressed='true'] {
                color: \${({ theme }) => theme.lit};
                background: \${({ theme }) => theme.tint};
                border-color: \${({ theme }) => theme.lit};
            }
        \`;
    }

    protected sheet(): RuleSet {
        return css\`
            .pa-sheet .pd-leaves { padding: 0 calc(\${({ theme }) => theme.space} * 0.8333) calc(\${({ theme }) => theme.space} * 4); }
            .pa-sheet .pd-leaves::before {
                background: \${({ theme }) => theme.paper};
                border: thin solid \${({ theme }) => theme.edge};
                border-radius: calc(\${({ theme }) => theme.space} * 0.25);
                box-shadow: \${({ theme }) => theme.shadow};
            }
            .pa-sheet .pd-leaf {
                padding: 0 calc(\${({ theme }) => theme.space} * 3.1667) calc(\${({ theme }) => theme.space} * 2.3333);
                font-size: calc(1.1862 * \${({ theme }) => theme.size});
                line-height: 1.8;
                color: \${({ theme }) => theme.ink};
            }
            .pa-sheet .pd-leaves .pd-chapter, .pa-sheet .pd-leaves .pd-section { margin-block: 0; }
            .pa-sheet .pd-leaves .pd-paragraph { margin-block: 0 calc(\${({ theme }) => theme.space} * 0.75); }
        \`;
    }

    protected masthead(): RuleSet {
        return css\`
            .pa-sheet .pd-masthead {
                padding: calc(\${({ theme }) => theme.space} * 2.8333) calc(\${({ theme }) => theme.space} * 3.1667) calc(\${({ theme }) => theme.space} * 1.8333);
                font-family: \${({ theme }) => theme.mono};
                font-size: calc(0.7241 * \${({ theme }) => theme.size});
                line-height: 1.7;
                letter-spacing: 0.32em;
                text-transform: uppercase;
                color: \${({ theme }) => theme.faint};
            }
            .pa-sheet .pd-masthead .pd-paragraph.pd-byline { margin-block: 0; }
            .pa-sheet .pd-masthead .pd-byline::before {
                content: '·';
                margin-inline: calc(\${({ theme }) => theme.space} * 0.5) calc(\${({ theme }) => theme.space} * 0.64);
            }
            .pa-sheet .pd-masthead .pd-byline .pa-reference {
                color: inherit;
                text-decoration-color: \${({ theme }) => theme.me};
                text-decoration-thickness: calc(\${({ theme }) => theme.space} / 12);
                text-underline-offset: calc(\${({ theme }) => theme.space} / 6);
            }
            .pa-sheet .pd-masthead::after {
                content: '';
                width: calc(\${({ theme }) => theme.space} * 2.3333);
                margin-block-start: calc(\${({ theme }) => theme.space} * 0.6667);
                border-block-start: thin solid \${({ theme }) => theme.rule};
            }
        \`;
    }

    protected letterpress(): RuleSet {
        return css\`
            .pa-sheet .pd-leaf:not(.pd-front) .pd-title {
                margin-block: 0 calc(\${({ theme }) => theme.space} * 1.25);
                font-size: calc(2.6897 * \${({ theme }) => theme.size});
                font-weight: 700;
                line-height: 1.15;
                letter-spacing: -0.01em;
                text-align: center;
                color: \${({ theme }) => theme.heading};
            }
            .pa-sheet .pd-leaf:not(.pd-front) .pd-heading {
                margin-block: calc(\${({ theme }) => theme.space} * 1.3333) calc(\${({ theme }) => theme.space} * 0.5);
                font-size: calc(1.4483 * \${({ theme }) => theme.size});
                font-weight: 700;
                line-height: 1.15;
                letter-spacing: -0.01em;
                text-align: center;
                color: \${({ theme }) => theme.heading};
            }
            .pa-sheet .pd-leaf:not(.pd-front) .pd-paragraph {
                text-align: justify;
                hyphens: auto;
            }
            .pa-sheet .pd-leaf:not(.pd-front) .pd-paragraph.pa-first::first-letter {
                float: left;
                padding: calc(\${({ theme }) => theme.space} * 0.25) calc(\${({ theme }) => theme.space} * 0.4167) 0 0;
                font-size: calc(3.931 * \${({ theme }) => theme.size});
                line-height: 0.85;
                color: \${({ theme }) => theme.capital};
            }
            .pa-sheet .pd-leaf:not(.pd-front) .pd-paragraph .pa-reference { text-underline-offset: calc(\${({ theme }) => theme.space} / 12); }
        \`;
    }

    protected front(): RuleSet {
        return css\`
            .pa-sheet .pd-chapter.pa-synopsis .pd-paragraph {
                margin-block: 0;
                font-style: italic;
                text-align: center;
            }
        \`;
    }

    protected foot(): RuleSet {
        return css\`
            .pa-sheet .pd-leaf:not(.pd-front) .pd-paragraph.pd-turn {
                display: grid;
                grid-template-columns: 1fr auto 1fr;
                align-items: baseline;
                gap: calc(\${({ theme }) => theme.space} * 0.4167) calc(\${({ theme }) => theme.space} * 1.0833);
                margin-block: calc(\${({ theme }) => theme.space} * 1.9167) 0;
                padding-block-start: calc(\${({ theme }) => theme.space} * 0.75);
                border-block-start: thin solid \${({ theme }) => theme.line};
                font-family: \${({ theme }) => theme.mono};
                font-size: calc(0.7586 * \${({ theme }) => theme.size});
                line-height: 1.5;
                letter-spacing: 0.08em;
                text-align: start;
                text-transform: uppercase;
                hyphens: manual;
                color: \${({ theme }) => theme.faint};
            }
            .pa-sheet .pd-turn .pa-reference {
                font-size: calc(0.8621 * \${({ theme }) => theme.size});
                font-weight: 700;
                letter-spacing: 0.02em;
                text-transform: none;
                color: \${({ theme }) => theme.soft};
            }
            .pa-sheet .pd-turn .pd-word.pa-after { display: block; text-align: end; }
            .pa-sheet .pd-turn .pa-self-reference { visibility: hidden; }
            .pa-sheet .pd-chapter.pa-dated .pd-word.pd-date {
                display: block;
                margin-block-start: calc(\${({ theme }) => theme.space} * 0.75);
                font-family: \${({ theme }) => theme.mono};
                font-size: calc(0.7586 * \${({ theme }) => theme.size});
                letter-spacing: 0.08em;
                text-align: center;
                text-transform: uppercase;
                color: \${({ theme }) => theme.faint};
            }
        \`;
    }

    protected phone(): RuleSet {
        return css\`
            @media (max-width: \${({ theme }) => theme.narrow}) {
                background: \${({ theme }) => theme.paper};
                .pa-sheet .pd-head {
                    padding: calc(\${({ theme }) => theme.space} * 0.5833) calc(\${({ theme }) => theme.space} * 0.6667);
                    background: \${({ theme }) => theme.panel};
                }
                .pa-sheet .pd-word.pd-switch { padding: calc(\${({ theme }) => theme.space} * 0.25) calc(\${({ theme }) => theme.space} * 0.5); }
                .pa-sheet .pd-leaves { padding: 0; }
                .pa-sheet .pd-leaves::before {
                    border-inline: none;
                    border-block-end: none;
                    border-radius: 0;
                    box-shadow: none;
                }
                .pa-sheet .pd-masthead { padding: calc(\${({ theme }) => theme.space} * 1.6667) calc(\${({ theme }) => theme.space} * 1.0833) calc(\${({ theme }) => theme.space} * 1.8333); }
                .pa-sheet .pd-leaf { padding: 0 calc(\${({ theme }) => theme.space} * 1.0833) calc(\${({ theme }) => theme.space} * 1.5); }
                .pa-sheet .pd-leaf:not(.pd-front) .pd-paragraph.pd-turn { grid-template-columns: 1fr 1fr; }
                .pa-sheet .pd-turn .pd-word.pd-count {
                    grid-column: 1 / -1;
                    grid-row: 1;
                    justify-self: center;
                }
            }
        \`;
    }
}

export class $BookPaper extends $StoryTheme {
    ink = '#29251d';
    heading = '#1f1b14';
    capital = '#6d6146';
    soft = '#5e553d';
    faint = '#9a9178';
    paper = '#fbf9f3';
    line = '#e4ddc9';
    rule = '#d6cfb9';
    accent = '#705f38';
    shadow = '0 1px 0 rgba(255, 255, 255, 0.08), 0 34px 90px -24px rgba(0, 0, 0, 0.65)';
}

export class $NightPaper extends $StoryTheme {
    measure = '47.5rem';
    ink = '#c9d0f2';
    heading = '#f2ecd9';
    capital = '#ffd27a';
    soft = '#ffd27a';
    faint = '#9a9178';
    paper = 'linear-gradient(168deg, #191f3a 0%, #12162a 100%)';
    line = '#2a3055';
    rule = '#d6cfb9';
    edge = '#2c3358';
    accent = '#7cf0c8';
    shadow = '0 34px 90px -24px rgba(0, 0, 0, 0.8)';
}

export class $WhitePaper extends $StoryTheme {
    ink = '#10252c';
    heading = '#0c1b1f';
    capital = '#166178';
    lit = '#ffffff';
    soft = '#10252c';
    faint = '#516770';
    paper = '#ffffff';
    panel = 'radial-gradient(1200px 700px at 50% -10%, #ffffff 0%, #f1f7f9 45%, #e3f5fa 100%)';
    line = '#dbe7ec';
    rule = '#8fc8dc';
    edge = '#dbe7ec';
    accent = '#166178';
    tint = '#0c1b1f';
    glow = '#516770';
    dim = '#dbe7ec';
    glass = '#ffffff';
    shadow = '0 34px 90px -40px rgba(12, 27, 31, 0.28)';
}

export const BookPaper = $($BookPaper);
export const NightPaper = $($NightPaper);
export const WhitePaper = $($WhitePaper);
`}),e.jsx(y,{identifier:"faces",type:".tsx",children:`import { $, selection } from '@dna-platform/chemistry';
import { $Cover, $TableOfContents } from '@dna-platform/public';

export class $StoryCover extends $Cover {
    override style = selection.header\`
        .pd-chapter.pa-cover { margin-block: 0; }
        .pa-cover .pd-title {
            font-family: \${({ theme }) => theme.mono};
            font-size: calc(0.61 * \${({ theme }) => theme.size});
            letter-spacing: 0.32em;
            text-transform: uppercase;
            color: \${({ theme }) => theme.faint};
        }
    \`;
}

export class $StoryTableOfContents extends $TableOfContents {
    override style = selection.nav\`
        .pd-chapter.pa-table-of-contents { margin-block: calc(\${({ theme }) => theme.space} * 2.22) 0; }
        .pa-table-of-contents .pd-section { margin-block: 0 calc(\${({ theme }) => theme.space} * 1.33); }
        .pa-table-of-contents .pd-heading {
            margin-block: 0 calc(\${({ theme }) => theme.space} * 0.67);
            font-family: \${({ theme }) => theme.mono};
            font-size: calc(0.61 * \${({ theme }) => theme.size});
            letter-spacing: 0.32em;
            text-align: center;
            text-transform: uppercase;
            color: \${({ theme }) => theme.faint};
        }
        .pa-table-of-contents .pd-paragraph.pa-entry {
            margin-block: calc(\${({ theme }) => theme.space} / 3);
            text-align: center;
        }
        .pa-table-of-contents .pa-reference { color: inherit; text-decoration: none; }
    \`;
}

export const Cover = $($StoryCover);
export const TableOfContents = $($StoryTableOfContents);
`})]}),"TheSheeto1"),fe=h(u),ye=o(()=>e.jsxs(fe,{children:[he(),ae(),ce(),de(),le(),pe(),me(),ge()]}),"book");export{ye as book};
