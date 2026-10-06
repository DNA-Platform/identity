var wa=Object.defineProperty;var l=(v,e)=>wa(v,"name",{value:e,configurable:!0});import{$ as b,f as C,j as a,T as ka,q as S,r as L,t as M,u as O,v as D,w as ja,x as Ca,y as Aa,c as Ma,s as Da,d as Sa,C as y,g as w,A as La,h as Ta,P as fa,n as i,H as o,m as t,o as g,W as J,M as s,I as r,z as n,p as A}from"./index-DcwFE8Nk.js";import{b as za,$ as Ia,T as qa,I as Ea,a as Fa,B as Ba,S as Pa}from"./15-the-bars~code-D9MSnkBH.js";import{S as $a}from"./.synopsis-CHFiCo6A.js";const aa=class aa extends za{parts(){return[...super.parts(),this.sidebar(),this.head(),this.words(),this.cards(),this.small()]}sidebar(){return C`
            .pd-side {
                background: ${({theme:e})=>e.barFill};
                color: ${({theme:e})=>e.barInk};
                border-inline-end: thin solid ${({theme:e})=>e.barLine};
            }
            .pd-side .pd-classmark, .pd-side .pd-byline {
                display: flex;
                align-items: center;
                gap: calc(${({theme:e})=>e.space} * 0.4);
                margin-block: 0;
                padding: calc(${({theme:e})=>e.space} * 0.6) calc(${({theme:e})=>e.space} * 0.6);
                font-size: calc(0.83 * ${({theme:e})=>e.size});
                color: ${({theme:e})=>e.barDim};
            }
            .pd-side .pd-byline { border-block-start: thin solid ${({theme:e})=>e.barLine}; }
            .pd-side .pd-word {
                color: ${({theme:e})=>e.barInk};
                font-weight: 500;
            }
            .pd-side .pd-classmark .pd-word {
                font-family: ${({theme:e})=>e.serif};
                font-size: calc(1.45 * ${({theme:e})=>e.size});
                font-weight: 600;
                line-height: 1;
            }
            .pd-side .pa-reference { color: inherit; text-decoration: none; }
            .pd-side .pd-classmark::before, .pd-side .pd-byline::before {
                content: ${({theme:e})=>e.initial};
                display: grid;
                place-items: center;
                width: calc(${({theme:e})=>e.space} * 1.3);
                height: calc(${({theme:e})=>e.space} * 1.3);
                font-size: ${({theme:e})=>e.size};
                font-weight: 600;
            }
            .pd-side .pd-classmark::before {
                border-radius: calc(${({theme:e})=>e.space} / 3);
                background: ${({theme:e})=>e.opal};
                color: ${({theme:e})=>e.night};
            }
            .pd-side .pd-byline::before {
                border-radius: 50%;
                background: ${({theme:e})=>e.me};
                color: ${({theme:e})=>e.paper};
            }
            .pd-side .pa-table-of-contents.pd-container { padding: 0 calc(${({theme:e})=>e.space} / 2) ${({theme:e})=>e.space}; }
        `}head(){return C`
            .pd-head {
                padding: calc(${({theme:e})=>e.space} * 0.83) calc(${({theme:e})=>e.space} * 1.17) calc(${({theme:e})=>e.space} * 0.6);
                border-block-end: thin solid ${({theme:e})=>e.line};
            }
            .pd-head .pd-switch {
                border: none;
                border-radius: calc(${({theme:e})=>e.space} * 0.375);
                padding: calc(${({theme:e})=>e.space} / 4) calc(${({theme:e})=>e.space} / 2);
                background: ${({theme:e})=>e.panel};
                color: ${({theme:e})=>e.soft};
            }
            .pd-head .pd-switch[aria-pressed='true'] {
                background: ${({theme:e})=>e.night};
                color: ${({theme:e})=>e.paper};
                font-weight: 500;
            }
        `}words(){return C`
            .pd-leaves { padding: calc(${({theme:e})=>e.space} * 0.83) calc(${({theme:e})=>e.space} * 1.17) calc(${({theme:e})=>e.space} * 1.67); }
            .pd-words .pd-chapter { margin-block: 0; max-width: none; }
            .pd-words .pd-title {
                font-family: ${({theme:e})=>e.serif};
                font-size: calc(2.5 * ${({theme:e})=>e.size});
                font-weight: 600;
                line-height: 1.04;
                color: ${({theme:e})=>e.heading};
            }
            .pd-words .pd-heading {
                font-size: calc(0.76 * ${({theme:e})=>e.size});
                font-weight: 600;
                letter-spacing: 0.12em;
                text-transform: uppercase;
                color: ${({theme:e})=>e.soft};
            }
            .pd-words .pd-paragraph { max-width: ${({theme:e})=>e.measure}; }
            .pd-front .pd-words .pd-paragraph {
                font-family: ${({theme:e})=>e.serif};
                font-size: calc(1.5 * ${({theme:e})=>e.size});
                line-height: 1.25;
            }
        `}cards(){return C`
            .pa-gallery .pd-section.pa-concept {
                padding: calc(${({theme:e})=>e.space} * 0.6);
                border: thin solid ${({theme:e})=>e.line};
                border-radius: calc(${({theme:e})=>e.space} * 0.6);
                background: ${({theme:e})=>e.paper};
                box-shadow: ${({theme:e})=>e.shadow};
            }
            .pa-gallery .pa-concept .pd-heading {
                font-family: ${({theme:e})=>e.serif};
                font-size: calc(1.3 * ${({theme:e})=>e.size});
                font-weight: 600;
                letter-spacing: 0;
                text-transform: none;
                color: ${({theme:e})=>e.heading};
            }
            .pa-gallery .pa-concept .pd-paragraph {
                margin-block: 0;
                font-size: calc(0.86 * ${({theme:e})=>e.size});
                color: ${({theme:e})=>e.soft};
            }
            .pa-gallery .pa-concept .pd-paragraph.pa-answer {
                padding-inline-start: calc(${({theme:e})=>e.space} / 2);
                border-inline-start: calc(${({theme:e})=>e.space} / 8) solid ${({theme:e})=>e.me};
                color: ${({theme:e})=>e.ink};
            }
            .pa-gallery .pa-concept .pa-plates img { border-radius: calc(${({theme:e})=>e.space} / 4); border: thin solid ${({theme:e})=>e.line}; }
            .pa-gallery .pa-concept.pa-open { box-shadow: 0 0 0 calc(${({theme:e})=>e.space} / 8) ${({theme:e})=>e.accent}; }
        `}small(){return C`
            @media (max-width: ${({theme:e})=>e.narrow}) {
                .pd-side { border-inline-end: none; }
                .pd-leaves { padding: calc(${({theme:e})=>e.space} * 0.67); }
            }
        `}};l(aa,"$DesignTheme");let T=aa;const ea=class ea extends T{constructor(){super(...arguments),this.barFill="#f1f7f9",this.barInk="#10252c",this.barDim="#516770",this.barOn="#e3f5fa",this.barLine="#dbe7ec"}};l(ea,"$GalleryMode");let R=ea;const ta=class ta extends T{constructor(){super(...arguments),this.barFill="#0c1b1f",this.barInk="#ffffff",this.barDim="#a9bcc1",this.barOn="rgba(255, 255, 255, 0.11)",this.barLine="#1d3339"}};l(ta,"$LibraryMode");let H=ta;b(T);const G=b(R),va=b(H),sa=class sa extends Ia{get modes(){return[va,G]}write(){const e=b(this.cover),u=b(this.synopsis),E=b(this.table);return a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"pd-side",children:[this.classmark(),a.jsx(E,{}),this.byline()]}),a.jsxs("div",{className:"pd-main",children:[a.jsxs("div",{className:"pd-head",children:[a.jsx(e,{}),a.jsx("div",{className:"pd-switches",children:this.switches()})]}),a.jsxs("div",{className:"pd-leaves",children:[this.front(a.jsx("div",{className:"pd-words",children:a.jsx(u,{})})),this.leaves()]})]})]})}switches(){const e=b(qa);return a.jsxs(a.Fragment,{children:[a.jsx(e,{chapter:this.cover,of:va,among:this.modes,children:"library"}),a.jsx(e,{chapter:this.cover,of:G,among:this.modes,children:"gallery"}),super.switches()]})}};l(sa,"$DougsDesign");let F=sa;const ia=class ia extends Fa{defines(e){super.defines(e),e.classes.add(this,"pa-frame")}parts(){return[...super.parts(),this.areas(),this.narrow()]}areas(){return C`
            .pd-book.pa-frame {
                display: grid;
                grid-template-columns: ${({theme:e})=>e.side} minmax(0, 1fr);
                grid-template-areas: 'side main';
                height: 100vh;
            }
            .pa-frame .pd-side {
                grid-area: side;
                display: grid;
                grid-template-rows: auto minmax(0, 1fr) auto;
                grid-template-areas: 'home' 'contents' 'me';
                overflow: hidden;
            }
            .pa-frame .pd-side .pd-classmark { grid-area: home; }
            .pa-frame .pd-side .pa-table-of-contents.pd-container { grid-area: contents; overflow-y: auto; }
            .pa-frame .pd-side .pd-byline { grid-area: me; }
            .pa-frame .pd-main {
                grid-area: main;
                display: grid;
                grid-template-rows: auto minmax(0, 1fr);
                grid-template-areas: 'head' 'pages';
            }
            .pa-frame .pd-head {
                grid-area: head;
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                justify-content: space-between;
                column-gap: ${({theme:e})=>e.space};
            }
            .pa-frame .pd-switches {
                display: flex;
                gap: calc(${({theme:e})=>e.space} / 3);
            }
            .pa-frame .pd-leaves { grid-area: pages; overflow-y: auto; }
            .pa-frame .pd-words .pd-chapter { scroll-margin-block-start: ${({theme:e})=>e.space}; }
        `}narrow(){return C`
            @media (max-width: ${({theme:e})=>e.narrow}) {
                .pd-book.pa-frame { display: block; height: auto; }
                .pa-frame .pd-side { display: block; }
                .pa-frame .pd-main { display: block; }
                .pa-frame.pa-turned .pa-table-of-contents { display: none; }
            }
        `}};l(ia,"$Frame");let U=ia;const ya=b(F),Na=b(U);b(ya,Ea)(Na);b(ya,ka)(G);var Oa=Object.defineProperty,Ja=Object.getOwnPropertyDescriptor,Z=l((v,e,u,E)=>{for(var h=Ja(e,u),f=v.length-1,k;f>=0;f--)(k=v[f])&&(h=k(e,u,h)||h);return h&&Oa(e,u,h),h},"__decorateClass$2");const oa=class oa extends S{constructor(){super(...arguments),this.specification=new B}defines(e){e.classes.add(this,"pa-question")}erase(e){e.classes.revert(this)}};l(oa,"$Question");let W=oa;const ra=class ra extends S{constructor(){super(...arguments),this.specification=new P}defines(e){e.classes.add(this,"pa-answer")}erase(e){e.classes.revert(this)}};l(ra,"$Answer");let Q=ra;const la=class la extends S{constructor(){super(...arguments),this.specification=new $}defines(e){e.classes.add(this,"pa-decision")}erase(e){e.classes.revert(this)}};l(la,"$Decision");let V=la;const na=class na extends L{$saidOfAParagraph(e){M(e instanceof O,"asked is said of a paragraph, and this is not one")}};l(na,"QuestionSpecification");let B=na;Z([D("asked is said of a paragraph")],B.prototype,"$saidOfAParagraph");const da=class da extends L{$saidOfAParagraph(e){M(e instanceof O,"said is said of a paragraph, and this is not one")}};l(da,"AnswerSpecification");let P=da;Z([D("said is said of a paragraph")],P.prototype,"$saidOfAParagraph");const pa=class pa extends L{$saidOfAParagraph(e){M(e instanceof O,"chosen is said of a paragraph, and this is not one")}};l(pa,"DecisionSpecification");let $=pa;Z([D("chosen is said of a paragraph")],$.prototype,"$saidOfAParagraph");const x=b(W),m=b(Q),j=b(V);var Ra=Object.defineProperty,Ha=Object.getOwnPropertyDescriptor,_=l((v,e,u,E)=>{for(var h=Ha(e,u),f=v.length-1,k;f>=0;f--)(k=v[f])&&(h=k(e,u,h)||h);return h&&Ra(e,u,h),h},"__decorateClass$1");const ca=class ca extends S{constructor(){super(...arguments),this.specification=new I}get number(){const e=ja.copy(this.text).trim();return e===""?NaN:Number(e)}defines(e){e.classes.add(this,"pa-concept"),e.mention?.identifier===this.book?.$bookmark&&e.classes.add(this,"pa-open")}erase(e){e.classes.revert(this)}};l(ca,"$Concept");let z=ca;const ha=class ha extends S{constructor(){super(...arguments),this.specification=new q}defines(e){e.classes.add(this,"pa-plates")}erase(e){e.classes.revert(this)}};l(ha,"$Plates");let K=ha;const ma=class ma extends S{constructor(){super(...arguments),this.specification=new q}defines(e){e.classes.add(this,"pa-source")}erase(e){e.classes.revert(this)}};l(ma,"$Source");let Y=ma;const ba=class ba extends L{$saidOfASection(e){M(e instanceof Ca,"a concept is said of a section, and this is not one")}$givenItsNumber(e){M(Number.isInteger(e.annotations.expressed(z)?.number),"a concept is given its number, and this one was given something else")}};l(ba,"ConceptSpecification");let I=ba;_([D("a concept is said of a section")],I.prototype,"$saidOfASection");_([D("a concept is given its number")],I.prototype,"$givenItsNumber");const ga=class ga extends L{$saidOfAParagraphOfAConcept(e){M(e instanceof O&&e.parent instanceof Aa&&e.parent.is(z),"this is said of a paragraph of a concept, and here it is said of something else")}};l(ga,"OfAConceptSpecification");let q=ga;_([D("this is said of a paragraph of a concept")],q.prototype,"$saidOfAParagraphOfAConcept");const d=b(z),p=b(K),c=b(Y);var Ga=Object.defineProperty,Ua=Object.getOwnPropertyDescriptor,Wa=l((v,e,u,E)=>{for(var h=Ua(e,u),f=v.length-1,k;f>=0;f--)(k=v[f])&&(h=k(e,u,h)||h);return h&&Ga(e,u,h),h},"__decorateClass");const ua=class ua extends Ma{constructor(){super(...arguments),this.specification=new N,this.themeProvider=!0,this.style=Da.div`
        .pd-chapter.pa-gallery .pd-section {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(${({theme:e})=>e.card}, 1fr));
            gap: ${({theme:e})=>e.space};
            align-items: start;
        }
        .pa-gallery .pd-section .pa-self-reference.pd-container, .pa-gallery .pd-section .pd-paragraph { grid-column: 1 / -1; }
        .pa-gallery .pd-section.pa-concept {
            display: grid;
            grid-template-columns: minmax(0, 1fr);
            grid-template-areas: 'pictures' 'name';
            gap: calc(${({theme:e})=>e.space} / 2);
        }
        .pa-gallery .pa-concept .pa-self-reference.pd-container { grid-area: name; }
        .pa-gallery .pa-concept .pd-paragraph { grid-column: auto; }
        .pa-gallery .pa-concept .pd-paragraph.pa-plates {
            grid-area: pictures;
            display: flex;
            gap: calc(${({theme:e})=>e.space} / 2);
            overflow: hidden;
        }
        .pa-gallery .pa-concept .pa-plates img { height: ${({theme:e})=>e.plate}; width: auto; max-width: none; }
        .pa-gallery .pa-concept .pd-paragraph.pa-source { display: none; }
        .pa-gallery .pa-concept.pa-open { grid-column: 1 / -1; }
        .pa-gallery .pa-concept.pa-open .pa-plates { flex-wrap: wrap; }
        .pa-gallery .pa-concept.pa-open .pa-plates img { height: auto; max-width: 100%; }
        .pa-gallery .pa-concept.pa-open .pd-paragraph.pa-source { display: block; }
    `}defines(e){super.defines(e),e.classes.add(this,"pa-gallery")}erase(e){super.erase(e),e.classes.revert(this)}};l(ua,"$Gallery");let X=ua;const xa=class xa extends L{$saidOfAChapter(e){M(e instanceof Sa,"a gallery is said of a chapter, and this is not one")}};l(xa,"GallerySpecification");let N=xa;Wa([D("a gallery is said of a chapter")],N.prototype,"$saidOfAChapter");const Qa=b(X),Va=l(()=>a.jsxs(y,{children:[a.jsx(Ba,{}),a.jsx(w,{children:"[Dougs Design](/dougs-design/)"}),a.jsx(La,{children:"[The Librarian](/dougs-story/)"}),a.jsx(Ta,{children:"[The Library](/dougs-library/)"})]}),"Cover"),Ka=l(()=>a.jsxs(y,{children:[a.jsx(Pa,{}),a.jsxs(w,{children:[a.jsx(fa,{}),"[Table of Contents](/dougs-design/#table-of-contents)"]}),a.jsxs(i,{children:[a.jsx(o,{children:"The design"}),a.jsx(t,{children:a.jsx(g,{children:"[The Designs I Am Going With](/dougs-design/#the-designs-i-am-going-with)"})}),a.jsx(t,{children:a.jsx(g,{children:"[What I Am Asked](/dougs-design/#what-i-am-asked)"})}),a.jsx(t,{children:a.jsx(g,{children:"[Every Concept](/dougs-design/#every-concept)"})}),a.jsx(t,{children:a.jsx(g,{children:"[The Library's Home](/dougs-design/#the-librarys-home)"})}),a.jsx(t,{children:a.jsx(g,{children:"[A Reference Manual](/dougs-design/#a-reference-manual)"})}),a.jsx(t,{children:a.jsx(g,{children:"[A Grouping of Projects](/dougs-design/#a-grouping-of-projects)"})}),a.jsx(t,{children:a.jsx(g,{children:"[Layout Ideas](/dougs-design/#layout-ideas)"})}),a.jsx(t,{children:a.jsx(g,{children:"[A Bookish Page](/dougs-design/#a-bookish-page)"})}),a.jsxs(t,{children:[a.jsx(fa,{}),a.jsx(J,{children:a.jsx(g,{children:"[Dougs Design](/dougs-design/)"})}),a.jsx(J,{children:a.jsx(g,{children:"[Synopsis](/dougs-design/#synopsis)"})}),a.jsx(J,{children:a.jsx(g,{children:"[Table of Contents](/dougs-design/#table-of-contents)"})})]})]}),a.jsxs(i,{children:[a.jsx(o,{children:"How this book is built"}),a.jsx(t,{children:a.jsx(g,{children:"[The Paragraphs](/dougs-design/#the-paragraphs)"})}),a.jsx(t,{children:a.jsx(g,{children:"[The Concept](/dougs-design/#the-concept)"})}),a.jsx(t,{children:a.jsx(g,{children:"[The Camera](/dougs-design/#the-camera)"})}),a.jsx(t,{children:a.jsx(g,{children:"[The Gallery](/dougs-design/#the-gallery)"})}),a.jsx(t,{children:a.jsx(g,{children:"[The Frame](/dougs-design/#the-frame)"})})]})]}),"Table"),Ya=l(()=>a.jsxs(y,{children:[a.jsx(w,{children:"[The Designs I Am Going With](/dougs-design/#the-designs-i-am-going-with)"}),a.jsxs(i,{children:[a.jsx(o,{children:"One for each kind of book"}),a.jsxs(t,{children:["These are the designs I am going with, one for each kind of book in my library. Under each are the concepts it comes from, how it came to be, and the book it is for. This page changes as the library is built: the story goes on, and the pages that have a design are linked from it. The two days of choosing are told in ",a.jsx(s,{children:"[Choosing a Design](/dougs-story/#choosing-a-design)"}),"."]})]}),a.jsxs(i,{children:[a.jsx(o,{children:"[The library's catalogue](/dougs-design/#the-librarys-catalogue)"}),a.jsxs(t,{children:[a.jsx(j,{}),"The shelf of 1 under the black and sky of 19, with the view switching among 1, 2 and 3."]}),a.jsxs(t,{children:["Concept ",a.jsx(s,{children:"[1](/dougs-design/#the-shelf)"}),", concept ",a.jsx(s,{children:"[19](/dougs-design/#two-top-bars-black-then-sky)"}),", concept ",a.jsx(s,{children:"[2](/dougs-design/#ask-the-sources)"})," and concept ",a.jsx(s,{children:"[3](/dougs-design/#the-wall)"}),"."]}),a.jsxs(t,{children:["I liked the shelf from the start: the book view, with the cover as the landmark that grounds a book. When I saw the black and sky I wanted it for the library itself, with its more bookish view, and each cataloguing book under it moving into colors of its own. I want to switch the view among 1, 2 and 3 on the page, because many ways to view the same thing will be important. A book carries many views by having each one said of it, one at a time, and a shelf and a list are the first two. Where a view gets its books from is settled too. A catalogue holds a chapter for each book filed under it. That chapter carries the book's synopsis and its title leads to the book, and a view draws those chapters. In ",a.jsx(s,{children:"[its table](/dougs-library/#table-of-contents)"})," the row for such a chapter ends in a small square at the right, which leads to the book as well."]}),a.jsxs(t,{children:["It is for ",a.jsx(s,{children:"[Dougs Library](/dougs-library/)"}),", which has the two bars, the shelf and the list. The views of 2 and 3 are not built."]})]}),a.jsxs(i,{children:[a.jsx(o,{children:"[The reference manual](/dougs-design/#the-reference-manual)"}),a.jsxs(t,{children:[a.jsx(j,{}),"The words beside the file as in 6, a part opened alone on the bench as in 8, and a toggle between the code forward and the words forward."]}),a.jsxs(t,{children:["Concept ",a.jsx(s,{children:"[6](/dougs-design/#side-by-side)"})," and concept ",a.jsx(s,{children:"[8](/dougs-design/#the-workbench)"}),"."]}),a.jsx(t,{children:"Code doesn't look right unless it is in full view. So I want one view with the write-up at the right of the code, and another that moves the code off to the right, there mostly to give the sense that it can be expanded out again. The appendix of a book will likely have this view too. An appendix holds the code that builds its book and documents it there, so it can look like a reference manual before it spins off into a book of its own when the book becomes too large."}),a.jsxs(t,{children:["It is for ",a.jsx(s,{children:"[Dougs Reference Manual](/dougs-reference-manual/)"}),", which has the words beside the file and the toggle. A part opened alone on the bench is not built."]})]}),a.jsxs(i,{children:[a.jsx(o,{children:"[The design book](/dougs-design/#the-design-book)"}),a.jsxs(t,{children:[a.jsx(j,{}),"This book: light and airy, with a toggle between a library mode and a gallery mode."]}),a.jsx(t,{children:"I began to like this book's own page while the designs in it were still wrong. I want it kept light and airy. But if the dark side bar is the thing that makes the library memorable, there can be two modes: a gallery mode that is white with subtle variation, and a library mode that is darker."}),a.jsxs(t,{children:["It is for ",a.jsx(s,{children:"[Dougs Design](/dougs-design/)"}),", which does not have it yet."]})]}),a.jsxs(i,{children:[a.jsx(o,{children:"[My autobiography](/dougs-design/#my-autobiography)"}),a.jsxs(t,{children:[a.jsx(j,{}),"The reading view of 25: one typeset sheet, a chapter at a time, likely under a dark bar on top."]}),a.jsxs(t,{children:["Concept ",a.jsx(s,{children:"[25](/dougs-design/#the-reading-view)"}),"."]}),a.jsx(t,{children:"I remembered the algebra of perspective in the original demo, with its dark and light theme and its simple reading view, and asked for something like that. It was drawn again as 25 and I like it. It is beautiful, and right for bookish chapters like the autobiography. There will likely be a bar on top as well, in dark perhaps, so that it isn't so noticeable. Since then I have said what the book is for. It is a story about me and what I create, a narrative slice of the library that helps to navigate everything we have built, so that it is the most relevant place to begin from. Its chapters are annotated by date and time, and it is to have a view that sorts them for recency. It was also very hard to get to from another book, so every book now carries my name as a way to it."}),a.jsxs(t,{children:["It is for ",a.jsx(s,{children:"[Dougs Story](/dougs-story/)"}),", which has the sheet, its type and its three papers. The view that sorts by recency is not built."]})]}),a.jsxs(i,{children:[a.jsx(o,{children:"[The Claude project catalogue](/dougs-design/#the-claude-project-catalogue)"}),a.jsxs(t,{children:[a.jsx(j,{}),"The table of 9 under the white and opal bars of 20, with a splash of the Claude theme."]}),a.jsxs(t,{children:["Concept ",a.jsx(s,{children:"[9](/dougs-design/#the-database)"})," and concept ",a.jsx(s,{children:"[20](/dougs-design/#two-top-bars-white-then-opal)"}),"."]}),a.jsx(t,{children:"Of the ways to see a catalogue across projects I liked 9 the best, with a splash of the Claude theme to say that this view is Claude's projects. The white and then opal of 20 looks really good, and it made me think I may not want quite so much of the dark. The opal is to be used carefully, as a kind of annotation."}),a.jsx(t,{children:"No book of mine holds this yet."})]}),a.jsxs(i,{children:[a.jsx(o,{children:"[A project's conversation catalogue](/dougs-design/#a-projects-conversation-catalogue)"}),a.jsxs(t,{children:[a.jsx(j,{}),"A multi-view that begins as a plain list downward, with views by recency and by size and each conversation's synopsis. It is not drawn yet."]}),a.jsx(t,{children:"This is the one to think hard about, and not yet, because we will have to build the importer first and likely add annotations. In Claude the simplest way is a list of conversations downward. I want views by recency and by size, something from each conversation's synopsis to say what it is about, and perhaps conversations annotated by topic. A search can come later, and we annotate as if we will build one."}),a.jsx(t,{children:"No book of mine holds this yet."})]}),a.jsxs(i,{children:[a.jsx(o,{children:"[A Claude conversation](/dougs-design/#a-claude-conversation)"}),a.jsxs(t,{children:[a.jsx(j,{}),"23: the conversation in the black side bar, in the form of the application it comes from."]}),a.jsxs(t,{children:["Concept ",a.jsx(s,{children:"[23](/dougs-design/#a-conversation-in-the-black-side-bar)"}),"."]}),a.jsx(t,{children:"It will look a lot like a Claude conversation, because the artifacts and the code blocks come from there. 23 is it. The color scheme might vary by project, but it starts from the dark side bar. That theme looks nice."}),a.jsx(t,{children:"No book of mine holds this yet."})]})]}),"TheDesignsIAmGoingWith1"),Xa=l(()=>a.jsxs(y,{children:[a.jsx(w,{children:"[What I Am Asked](/dougs-design/#what-i-am-asked)"}),a.jsxs(i,{children:[a.jsx(o,{children:"By letter"}),a.jsx(t,{children:"Each question here has a letter, and is about the numbered concepts linked under it. I answer by the letter, in my own words, and what I say is written under the question."})]}),a.jsxs(i,{children:[a.jsx(o,{children:"E · Where I am"}),a.jsxs(t,{children:[a.jsx(x,{}),"Where am I on the screen: a card at the foot of the bar as in 11, the end of the top bar as in 13, or only a face as in 17? And is the orange right for me, under my name and on my turns in 23?"]}),a.jsxs(t,{children:["Concept ",a.jsx(s,{children:"[11](/dougs-design/#a-black-side-bar)"}),", concept ",a.jsx(s,{children:"[13](/dougs-design/#a-black-top-bar)"}),", concept ",a.jsx(s,{children:"[17](/dougs-design/#a-black-rail-and-a-blue-top)"})," and concept ",a.jsx(s,{children:"[23](/dougs-design/#a-conversation-in-the-black-side-bar)"}),"."]})]}),a.jsxs(i,{children:[a.jsx(o,{children:"F · What stands at the right"}),a.jsxs(t,{children:[a.jsx(x,{}),"In 11 and 23 the right side holds what the page cites, what cites it and my notes. In 2 it holds what was made from the sources. Is that column always there or opened when wanted, and what belongs in it?"]}),a.jsxs(t,{children:["Concept ",a.jsx(s,{children:"[11](/dougs-design/#a-black-side-bar)"}),", concept ",a.jsx(s,{children:"[23](/dougs-design/#a-conversation-in-the-black-side-bar)"})," and concept ",a.jsx(s,{children:"[2](/dougs-design/#ask-the-sources)"}),"."]})]}),a.jsxs(i,{children:[a.jsx(o,{children:"H · The library's catalogue"}),a.jsxs(t,{children:[a.jsx(x,{}),"For the library's own catalogue I chose the shelf of 1, and spoke of black and sky for the library itself, as in 19. Is the library's page the shelf of 1 under the two bars of 19, under the white and opal of 20, or the shelf as it stands in 1? And what do I come to this page to do?"]}),a.jsxs(t,{children:["Concept ",a.jsx(s,{children:"[1](/dougs-design/#the-shelf)"}),", concept ",a.jsx(s,{children:"[19](/dougs-design/#two-top-bars-black-then-sky)"})," and concept ",a.jsx(s,{children:"[20](/dougs-design/#two-top-bars-white-then-opal)"}),"."]}),a.jsxs(t,{children:[a.jsx(m,{}),"Yes, and I like the black and sky, though I think I want to be able to switch the view between 1 to 3 as part of the dynamism of the page. We will talk about how to implement a book, and you will find that you might want to do more structurally than you expect to support many different views. Many ways to view the same thing will be important."]})]}),a.jsxs(i,{children:[a.jsx(o,{children:"I · The reference manual"}),a.jsxs(t,{children:[a.jsx(x,{}),"A reference manual shows a chapter and the file it is about. Which is nearest: the words beside the file as in 6, the column of cells as in 7, the part on a bench with its properties as in 8? And what do I come to a manual to do: read it through, look up a part, copy its code?"]}),a.jsxs(t,{children:["Concept ",a.jsx(s,{children:"[6](/dougs-design/#side-by-side)"}),", concept ",a.jsx(s,{children:"[7](/dougs-design/#the-notebook)"})," and concept ",a.jsx(s,{children:"[8](/dougs-design/#the-workbench)"}),"."]}),a.jsxs(t,{children:[a.jsx(m,{}),"6 with 8 for a part, yes, though I think we want a way to toggle between code emphasized and documentation emphasized. Code doesn't look right unless in full view, so we might want a view where we show one write-up on the right side of the code and another that moves the code off to the right, but it's mostly there to give the visual sense that it can be expanded out again. Something like that."]})]}),a.jsxs(i,{children:[a.jsx(o,{children:"J · The design book"}),a.jsxs(t,{children:[a.jsx(x,{}),"The design book is the book I am reading now: a dark rail with its index, the questions I am asked, the numbered concepts, a card that opens across the whole screen. Is this its design, and what would I change in it?"]}),a.jsxs(t,{children:[a.jsx(m,{}),"Yeah, how about we keep design light and airy. But no, if the dark sidebar is the thing that makes the library memorable, then maybe we have a toggle between library and gallery mode, and gallery mode is more white themed with subtle variation, and library mode is more dark themed."]})]}),a.jsxs(i,{children:[a.jsx(o,{children:"K · My autobiography"}),a.jsxs(t,{children:[a.jsx(x,{}),"My own account can be more of a bookish view. I pointed at the algebra of perspective in the original demo, with its dark and light theme and its simple reading view, and 25 is that view drawn again for my story. Is 25 it, and on which paper: the demo's book, its night, or the plain white? Or is the title page of 24 nearer, the front page of 5, the reading column of 7?"]}),a.jsxs(t,{children:["Concept ",a.jsx(s,{children:"[25](/dougs-design/#the-reading-view)"}),", concept ",a.jsx(s,{children:"[24](/dougs-design/#the-title-page)"}),", concept ",a.jsx(s,{children:"[5](/dougs-design/#the-front-page)"})," and concept ",a.jsx(s,{children:"[7](/dougs-design/#the-notebook)"}),"."]}),a.jsxs(t,{children:[a.jsx(m,{}),"I like 25, beautiful. We will likely have a bar on top also, in dark perhaps so it isn't so noticeable, but I really like it for bookish chapters like the autobiography."]})]}),a.jsxs(i,{children:[a.jsx(o,{children:"L · The Claude project catalogue"}),a.jsxs(t,{children:[a.jsx(x,{}),"Conversations with Claude holds my Claude projects. I chose the table of 9 with a splash of the Claude theme. Does it sit under the white and opal bars of 20, beside the black side bar of 11, or as it stands in 9? And what is a project on this page: a row, a cover with its mark, a region as in 10?"]}),a.jsxs(t,{children:["Concept ",a.jsx(s,{children:"[9](/dougs-design/#the-database)"}),", concept ",a.jsx(s,{children:"[20](/dougs-design/#two-top-bars-white-then-opal)"}),", concept ",a.jsx(s,{children:"[11](/dougs-design/#a-black-side-bar)"})," and concept ",a.jsx(s,{children:"[10](/dougs-design/#the-map)"}),"."]}),a.jsxs(t,{children:[a.jsx(m,{}),"9 under white and opal."]})]}),a.jsxs(i,{children:[a.jsx(o,{children:"M · A project's conversation catalogue"}),a.jsxs(t,{children:[a.jsx(x,{}),"One for each project, and the one to think hard about. Which is nearest to begin from: the table of 9, the light and airy list of 2, the shelf of 1, the map of 10 by size? And what do I need there first: a search I configure, the views by recency and by size, my annotations on each conversation, each conversation's synopsis?"]}),a.jsxs(t,{children:["Concept ",a.jsx(s,{children:"[9](/dougs-design/#the-database)"}),", concept ",a.jsx(s,{children:"[2](/dougs-design/#ask-the-sources)"}),", concept ",a.jsx(s,{children:"[1](/dougs-design/#the-shelf)"})," and concept ",a.jsx(s,{children:"[10](/dougs-design/#the-map)"}),"."]}),a.jsxs(t,{children:[a.jsx(m,{}),"I think we want to start with a multi-view. We will have to write an importer, and we will likely have to add annotations. So let's think about the types of ways we want to enable interaction with the data. In Claude, the simplest way is just a downward list of conversations. And we will probably want to do something with importing information from the synopsis of each conversation to help give a sense for what it is about. Maybe we will annotate conversations by topic. So let's not think too much about the conversation view yet, because we will have to build the importer. Of what the first version needs: the views by recency and size, and each one's synopsis. The search might make more sense in the front of Claude. Let's annotate like we will create a search and need some form of indexing, but not do it in version 1."]})]}),a.jsxs(i,{children:[a.jsx(o,{children:"N · A Claude conversation"}),a.jsxs(t,{children:[a.jsx(x,{}),"It will look a lot like a Claude conversation. Is 23 it: the black side bar holding the chapters, my turns in my color, what the chapter cites and my notes at the right? What is missing from it, and what should go?"]}),a.jsxs(t,{children:["Concept ",a.jsx(s,{children:"[23](/dougs-design/#a-conversation-in-the-black-side-bar)"}),"."]}),a.jsxs(t,{children:[a.jsx(m,{}),"Yes, 23, though we might vary the color scheme based on project, but start assuming the dark sidebar. That theme looks nice."]})]}),a.jsxs(i,{children:[a.jsx(o,{children:"A · Where the frame goes"}),a.jsxs(t,{children:[a.jsx(x,{}),"Where does the library's frame go: a side bar as in 11, a top bar as in 13, both as in 15, a narrow rail as in 17, two top bars as in 19, or none as in 21? More than one may stay, if different kinds of page want different frames."]}),a.jsxs(t,{children:["Concept ",a.jsx(s,{children:"[11](/dougs-design/#a-black-side-bar)"}),", concept ",a.jsx(s,{children:"[13](/dougs-design/#a-black-top-bar)"}),", concept ",a.jsx(s,{children:"[15](/dougs-design/#a-black-top-bar-and-an-opal-side-bar)"}),", concept ",a.jsx(s,{children:"[17](/dougs-design/#a-black-rail-and-a-blue-top)"}),", concept ",a.jsx(s,{children:"[19](/dougs-design/#two-top-bars-black-then-sky)"})," and concept ",a.jsx(s,{children:"[21](/dougs-design/#no-bars-white-cards)"}),"."]}),a.jsxs(t,{children:[a.jsx(m,{}),"The side bar, yes: we like it for this design we are converging on, though let's explore other options too. The top bar too, and I'd like to explore a version that has them both. Might the top bar be a version of the cover and the side bar be a version of the table of contents? I do want to explore that more, because they might be good things to think about as the meaning of the cover and table of contents. For the narrow rail, we might like something collapsible in cases where screen real estate could be useful, so let's keep them all in mind. I also want to see designs that are quite different before converging on exactly this. Of two top bars and the white cards, it is hard to say. The white and then opal looks really good. A clean white theme with the dark logo makes me start to think that maybe I don't want quite so much of the dark. The opal is interesting too, and while we would need to use that effect carefully, I like it as a type of annotation."]})]}),a.jsxs(i,{children:[a.jsx(o,{children:"B · Darker or lighter"}),a.jsxs(t,{children:[a.jsx(x,{}),"Is the soft black the library's own, as in 11 and 13, with the lighter of each a thing I may switch to, as in 12 and 14? Or the other way round? Or does it depend on the page?"]}),a.jsxs(t,{children:["Concept ",a.jsx(s,{children:"[11](/dougs-design/#a-black-side-bar)"}),", concept ",a.jsx(s,{children:"[12](/dougs-design/#a-light-side-bar)"}),", concept ",a.jsx(s,{children:"[13](/dougs-design/#a-black-top-bar)"})," and concept ",a.jsx(s,{children:"[14](/dougs-design/#a-white-top-bar)"}),"."]}),a.jsxs(t,{children:[a.jsx(m,{}),"It depends on the page for sure. Maybe I like the black and sky for the library itself, with its more bookish view, and then moving into different color themes for each cataloguing book. We do truly want the different parts of the app, in some ways, to feel like different apps, and that can even mean the top bar has different colors and an evolving logo."]})]}),a.jsxs(i,{children:[a.jsx(o,{children:"C · The ways to read one subject"}),a.jsxs(t,{children:[a.jsx(x,{}),"A subject's page can be read many ways. Which of these become views I switch between on one subject, and which go: the shelf of covers in 1, the list of sources in 2, the wall in 3, the front page in 5, the table in 9, the map in 10?"]}),a.jsxs(t,{children:["Concept ",a.jsx(s,{children:"[1](/dougs-design/#the-shelf)"}),", concept ",a.jsx(s,{children:"[2](/dougs-design/#ask-the-sources)"}),", concept ",a.jsx(s,{children:"[3](/dougs-design/#the-wall)"}),", concept ",a.jsx(s,{children:"[5](/dougs-design/#the-front-page)"}),", concept ",a.jsx(s,{children:"[9](/dougs-design/#the-database)"})," and concept ",a.jsx(s,{children:"[10](/dougs-design/#the-map)"}),"."]}),a.jsxs(t,{children:[a.jsx(m,{}),"The shelf, the table and the map are all good for different catalogues. We have the across Claude projects catalogue, and then we have the conversations per project catalogue, and we have the library catalogue. These should all look like different things, and I am inclined to choose between them. I really like the UI of the checked version in 2, the light and airy feel. But so much of that user interface is interactive, where one selects their books. I want those features, but we need to imagine things based on the set of features we want in each interaction. For the library's own catalogue I like the shelf, but can we consider implementing it in a way where we can dynamically change the view? Dynamic view change is proof that we are coding the semantics and annotating the semantic structure with what is necessary for the view. For the catalogue across projects I like 9 the best, and I might even like a splash of the Claude theme to delineate that this view is Claude projects. And I think we need to think hard about the project view. This is where we might even want to have some form of search that we configure. We will also want some color and icon-based theming to indicate what project we are on. I like the different views to comprehend the conversations, by recency, by conversation size, and maybe others, and perhaps we can annotate the conversations and this can help us build the view. A good use for the synopsis of a conversation might be surfacing the information that the project catalogue needs."]})]}),a.jsxs(i,{children:[a.jsx(o,{children:"D · What a cover's color says"}),a.jsxs(t,{children:[a.jsx(x,{}),"In 11 every book has a color of its own, and the color means nothing. In 1 the projects have colors and the covers nearly follow them. Should a cover's color say something, its project, its subject, who the conversation was with, or stay the book's own?"]}),a.jsxs(t,{children:["Concept ",a.jsx(s,{children:"[1](/dougs-design/#the-shelf)"})," and concept ",a.jsx(s,{children:"[11](/dougs-design/#a-black-side-bar)"}),"."]}),a.jsxs(t,{children:[a.jsx(m,{}),"I will choose colors based on my synaesthetic preferences. I also think we want some form of cover art, and the cover art perhaps for the library can be the logo of the library. Perhaps the cover art is simply the logo of the book, and we just have a progressive logo."]})]})]}),"WhatIAmAsked2"),Za=l(()=>a.jsxs(y,{children:[a.jsx(w,{children:"[Every Concept](/dougs-design/#every-concept)"}),a.jsx(Qa,{}),a.jsxs(i,{children:[a.jsx(o,{children:"By number"}),a.jsx(t,{children:"Every concept here has a number, and keeps it. Each is shown as it looks at a desk and on a phone, and I answer by its number. What I say of one is written under it."})]}),a.jsxs(i,{children:[a.jsx(o,{children:"[The Library's Home](/dougs-design/#the-librarys-home)"}),a.jsx(t,{children:"The first page of the library: where everything I keep is found from. Each of these is a different layout, with different tools in different places and a different way of moving around."}),a.jsxs(i,{children:[a.jsx(d,{children:"1"}),a.jsx(o,{children:"[The Shelf](/dougs-design/#the-shelf)"}),a.jsx(t,{children:"Concept 1, after Apple Books."}),a.jsx(t,{children:"Every conversation gets a cover. The library opens on what I was last reading and on shelves by project, and a conversation is picked up by its face, the way a book is."}),a.jsxs(t,{children:[a.jsx(p,{}),a.jsx(r,{children:"/.design/3-every-concept~001-desk.png"}),a.jsx(r,{children:"/.design/3-every-concept~001-phone.png"})]}),a.jsxs(t,{children:[a.jsx(m,{}),"I really like the book view, and aside from color, we will need some sort of visual landmark to ground the book, which justifies seeing the cover."]}),a.jsxs(t,{children:[a.jsx(c,{}),a.jsx(n,{children:`<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>The Shelf</title>
<meta name="number" content="1">
<meta name="said" content="I really like the book view, and aside from color, we will need some sort of visual landmark to ground the book, which justifies seeing the cover.">
<meta name="after" content="Apple Books">
<meta name="idea" content="Every conversation gets a cover. The library opens on what I was last reading and on shelves by project, and a conversation is picked up by its face, the way a book is.">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
<style>
    :root { --bg: #ffffff; --side: #f6f6f7; --line: #e7e7ea; --ink: #18181b; --soft: #5a5a63; --faint: #93939c; --accent: #e8590c; }
    * { box-sizing: border-box; margin: 0; }
    html, body { height: 100%; }
    body { background: var(--bg); color: var(--ink); font: 400 14px/1.45 'Inter', system-ui, sans-serif; display: grid; grid-template-columns: 232px minmax(0, 1fr); overflow: hidden; }
    svg { width: 17px; height: 17px; stroke: currentColor; fill: none; stroke-width: 1.7; stroke-linecap: round; stroke-linejoin: round; flex: none; }

    .side { background: var(--side); border-right: 1px solid var(--line); padding: 18px 12px; display: flex; flex-direction: column; gap: 2px; }
    .side .find { display: flex; align-items: center; gap: 8px; background: #e9e9ec; border-radius: 9px; padding: 7px 10px; color: var(--faint); margin-bottom: 12px; }
    .side h3 { font: 600 11px/1 'Inter'; letter-spacing: .04em; text-transform: uppercase; color: var(--faint); padding: 14px 10px 6px; }
    .side a { display: flex; align-items: center; gap: 10px; padding: 7px 10px; border-radius: 8px; }
    .side a.on { background: #e4e4e8; font-weight: 500; }
    .side a svg { color: var(--accent); }
    .side a i { width: 10px; height: 10px; border-radius: 3px; flex: none; margin: 0 3px; }
    .side a span { margin-left: auto; color: var(--faint); font-size: 12px; }

    main { overflow: auto; padding: 26px 34px 30px; }
    h1 { font: 600 30px/1.1 'Fraunces', serif; letter-spacing: -.01em; }
    .sub { color: var(--faint); margin: 4px 0 20px; }
    .now { display: grid; grid-template-columns: auto minmax(0, 1fr); gap: 22px; align-items: center; background: linear-gradient(135deg, #fff4ea, #fdebe0 60%, #f7e4f0); border-radius: 18px; padding: 20px 24px; margin-bottom: 26px; }
    .now .meta small { font: 600 11px/1 'Inter'; letter-spacing: .06em; text-transform: uppercase; color: var(--accent); }
    .now .meta h2 { font: 600 24px/1.15 'Fraunces', serif; margin: 6px 0 4px; }
    .now .meta p { color: var(--soft); max-width: 46ch; }
    .now .bar { height: 5px; border-radius: 99px; background: rgba(0, 0, 0, .09); margin: 14px 0 8px; max-width: 320px; overflow: hidden; }
    .now .bar i { display: block; width: 14%; height: 100%; background: var(--accent); border-radius: 99px; }
    .now .go { display: flex; align-items: center; gap: 14px; margin-top: 12px; }
    .now .go b { background: var(--ink); color: #fff; border-radius: 99px; padding: 8px 18px; font-weight: 500; }
    .now .go span { color: var(--soft); }
    .row h2 { font: 600 18px/1 'Inter'; display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 12px; }
    .row h2 a { font: 500 13px/1 'Inter'; color: var(--accent); }
    .shelf { display: grid; grid-template-columns: repeat(6, minmax(0, 1fr)); gap: 20px; margin-bottom: 26px; }
    .book p { margin-top: 8px; font-weight: 500; font-size: 13px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
    .book small { color: var(--faint); font-size: 12px; }

    /* a cover: the conversation's face — a colour for its project, its name set in serif, who it was with at the foot */
    .cover { aspect-ratio: 2 / 3; border-radius: 4px 7px 7px 4px; padding: 13px 12px 11px 16px; display: flex; flex-direction: column; color: #fff; position: relative; box-shadow: inset 5px 0 0 rgba(0, 0, 0, .14), inset 6px 0 0 rgba(255, 255, 255, .12), 0 10px 20px -10px rgba(0, 0, 0, .45); }
    .cover b { font: 600 15px/1.12 'Fraunces', serif; letter-spacing: -.005em; }
    .cover i { margin-top: auto; font: 500 9.5px/1.2 'Inter'; letter-spacing: .08em; text-transform: uppercase; font-style: normal; opacity: .85; }
    .cover::after { content: ''; position: absolute; left: 16px; right: 12px; top: 56%; height: 1px; background: rgba(255, 255, 255, .35); }
    .p1 { background: linear-gradient(160deg, #e2643a, #c9462a); } .p1.b { background: linear-gradient(160deg, #f08a4b, #dd6a2d); } .p1.c { background: linear-gradient(160deg, #cf4b46, #a8323a); }
    .p2 { background: linear-gradient(160deg, #1f8f84, #14695f); }
    .p3 { background: linear-gradient(160deg, #4a56c9, #343c9e); }
    .mine { background: linear-gradient(160deg, #20242c, #0f1216); }
    .mine b { color: #f0dba8; }
    .big { width: 132px; }
    .big b { font-size: 19px; }

    .tabbar { display: none; }
    @media (max-width: 760px) {
        body { grid-template-columns: 1fr; grid-template-rows: minmax(0, 1fr) auto; }
        .side { display: none; }
        main { padding: 18px 16px 20px; }
        h1 { font-size: 27px; }
        .now { grid-template-columns: 92px minmax(0, 1fr); gap: 14px; padding: 14px; }
        .big { width: 92px; } .big b { font-size: 14px; }
        .now .meta h2 { font-size: 19px; }
        .now .meta p, .now .go span { display: none; }
        .shelf { grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 14px; }
        .shelf .book:nth-child(n+4) { display: none; }
        .tabbar { display: grid; grid-template-columns: repeat(4, 1fr); border-top: 1px solid var(--line); background: rgba(250, 250, 251, .96); padding: 8px 4px 10px; }
        .tabbar a { display: grid; justify-items: center; gap: 3px; font-size: 10.5px; color: var(--faint); }
        .tabbar a.on { color: var(--accent); }
        .tabbar svg { width: 21px; height: 21px; }
    }
</style>
</head>
<body>
<aside class="side">
    <div class="find"><svg viewBox="0 0 16 16"><circle cx="7" cy="7" r="4.5"/><path d="M10.5 10.5 14 14"/></svg>Search</div>
    <a class="on"><svg viewBox="0 0 16 16"><path d="M2.5 7 8 2.5 13.5 7v6.5h-11z"/></svg>Home</a>
    <a><svg viewBox="0 0 16 16"><path d="M3 2.5h3v11H3zM7 2.5h3v11H7zM11.2 4l2.6-.6 2 9.6-2.6.6z" transform="translate(-1)"/></svg>All<span>362</span></a>
    <a><svg viewBox="0 0 16 16"><path d="M3 2.5h10v11l-5-3-5 3z"/></svg>With my notes<span>94</span></a>
    <h3>Kept with</h3>
    <a><svg viewBox="0 0 16 16"><path d="M2.5 3.5h11v7h-6l-3 2.5v-2.5h-2z"/></svg>Claude<span>212</span></a>
    <a><svg viewBox="0 0 16 16"><path d="M2.5 3.5h11v7h-6l-3 2.5v-2.5h-2z"/></svg>ChatGPT<span>147</span></a>
    <h3>Projects</h3>
    <a><i style="background:#d9542f"></i>A First Project<span>38</span></a>
    <a><i style="background:#1a7c72"></i>A Second Project<span>91</span></a>
    <a><i style="background:#3f49b4"></i>A Third Project<span>83</span></a>
    <h3>My books</h3>
    <a><i style="background:#14171c"></i>Written by me<span>3</span></a>
</aside>

<main>
    <h1>Home</h1>
    <p class="sub">Sunday 4 October · 362 on the shelves</p>
    <section class="now">
        <div class="cover p1 big"><b>Lorem Ipsum Dolor</b><i>with Claude</i></div>
        <div class="meta">
            <small>Continue</small>
            <h2>Lorem Ipsum Dolor</h2>
            <p>A First Project · kept 9 September 2026. Ut enim ad minim veniam, quis nostrud exercitation.</p>
            <div class="bar"><i></i></div>
            <span style="color:var(--faint);font-size:12px">Chapter 1 of 8 · 2 notes of mine · cited twice</span>
            <div class="go"><b>Read</b><span>or open its notes</span></div>
        </div>
    </section>
    <section class="row">
        <h2>Recently kept <a>See all</a></h2>
        <div class="shelf">
            <div class="book"><div class="cover p1 b"><b>Quis Nostrud</b><i>with Claude</i></div><p>Quis Nostrud</p><small>1 Oct · 6 chapters</small></div>
            <div class="book"><div class="cover p1 c"><b>Ut Enim ad Minim</b><i>with Claude</i></div><p>Ut Enim ad Minim</p><small>27 Sep · 3 chapters</small></div>
            <div class="book"><div class="cover p3"><b>Magna Aliqua</b><i>with Claude</i></div><p>Magna Aliqua</p><small>20 Sep · 11 chapters</small></div>
            <div class="book"><div class="cover p2"><b>Tempor Incididunt</b><i>with Claude</i></div><p>Tempor Incididunt</p><small>12 Sep · 7 chapters</small></div>
            <div class="book"><div class="cover p1"><b>Sed Do Eiusmod</b><i>with Claude</i></div><p>Sed Do Eiusmod</p><small>5 Sep · 2 chapters</small></div>
            <div class="book"><div class="cover p1 b"><b>Adipiscing Elit</b><i>with Claude</i></div><p>Adipiscing Elit</p><small>2 Sep · 9 chapters</small></div>
        </div>
    </section>
    <section class="row">
        <h2>My books <a>See all</a></h2>
        <div class="shelf">
            <div class="book"><div class="cover mine"><b>Dougs Story</b><i>The Librarian</i></div><p>Dougs Story</p><small>my own account</small></div>
            <div class="book"><div class="cover mine"><b>Dougs Design</b><i>The Librarian</i></div><p>Dougs Design</p><small>the design of this library</small></div>
            <div class="book"><div class="cover mine"><b>Dougs Reference Manual</b><i>The Librarian</i></div><p>Dougs Reference Manual</p><small>the parts it is built with</small></div>
            <div class="book"><div class="cover p1 c"><b>Sit Amet Consectetur</b><i>with Claude</i></div><p>Sit Amet Consectetur</p><small>21 Jul · 14 chapters</small></div>
        </div>
    </section>
</main>

<nav class="tabbar">
    <a class="on"><svg viewBox="0 0 16 16"><path d="M2.5 7 8 2.5 13.5 7v6.5h-11z"/></svg>Home</a>
    <a><svg viewBox="0 0 16 16"><path d="M3 2.5h3v11H3zM7 2.5h3v11H7zM11 2.5h3v11h-3z"/></svg>Library</a>
    <a><svg viewBox="0 0 16 16"><path d="M3 2.5h10v11l-5-3-5 3z"/></svg>Notes</a>
    <a><svg viewBox="0 0 16 16"><circle cx="7" cy="7" r="4.5"/><path d="M10.5 10.5 14 14"/></svg>Search</a>
</nav>
</body>
</html>
`})]})]}),a.jsxs(i,{children:[a.jsx(d,{children:"2"}),a.jsx(o,{children:"[Ask the Sources](/dougs-design/#ask-the-sources)"}),a.jsx(t,{children:"Concept 2, after NotebookLM."}),a.jsx(t,{children:"The conversations are sources, and the library answers questions from them: every sentence of an answer carries the number of the passage it rests on, one press from the passage itself."}),a.jsxs(t,{children:[a.jsx(p,{}),a.jsx(r,{children:"/.design/3-every-concept~002-desk.png"}),a.jsx(r,{children:"/.design/3-every-concept~002-phone.png"})]}),a.jsxs(t,{children:[a.jsx(m,{}),"The sources really look great. I really like it. I like the little view and the logo. But what would it mean to type in a message? We have to be realistic."]}),a.jsxs(t,{children:[a.jsx(c,{}),a.jsx(n,{children:`<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Ask the Sources</title>
<meta name="number" content="2">
<meta name="said" content="The sources really look great. I really like it. I like the little view and the logo. But what would it mean to type in a message? We have to be realistic.">
<meta name="after" content="NotebookLM">
<meta name="idea" content="The conversations are sources, and the library answers questions from them: every sentence of an answer carries the number of the passage it rests on, one press from the passage itself.">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600&display=swap" rel="stylesheet">
<style>
    :root { --canvas: #eef1f8; --card: #ffffff; --line: #dfe3ee; --ink: #1c1f26; --soft: #586074; --faint: #8a91a3; --blue: #2f5ef0; --blue-soft: #e6ecff; --chip: #eef0f6; }
    * { box-sizing: border-box; margin: 0; }
    html, body { height: 100%; }
    body { background: var(--canvas); color: var(--ink); font: 400 14px/1.5 'DM Sans', system-ui, sans-serif; display: grid; grid-template-rows: auto minmax(0, 1fr); padding: 0 12px 12px; gap: 0; overflow: hidden; }
    svg { width: 16px; height: 16px; stroke: currentColor; fill: none; stroke-width: 1.7; stroke-linecap: round; stroke-linejoin: round; flex: none; }
    header { display: flex; align-items: center; gap: 12px; padding: 12px 8px; }
    header .logo { width: 28px; height: 28px; border-radius: 9px; background: var(--ink); color: #fff; display: grid; place-items: center; font-weight: 600; }
    header b { font-size: 18px; font-weight: 500; }
    header .seg { margin-left: auto; display: flex; background: #e1e5f0; border-radius: 99px; padding: 3px; font-weight: 500; color: var(--soft); }
    header .seg span { padding: 5px 14px; border-radius: 99px; }
    header .seg .on { background: #fff; color: var(--ink); box-shadow: 0 1px 2px rgba(20, 30, 60, .15); }
    header .me { width: 30px; height: 30px; border-radius: 50%; background: #c9d4ff; color: #233a9a; display: grid; place-items: center; font-weight: 600; font-size: 12px; }
    .panels { display: grid; grid-template-columns: 310px minmax(0, 1fr) 330px; gap: 12px; min-height: 0; }
    .card { background: var(--card); border-radius: 18px; display: flex; flex-direction: column; min-height: 0; overflow: hidden; }
    .card > h2 { font: 500 15px/1 'DM Sans'; padding: 16px 18px 14px; border-bottom: 1px solid var(--line); display: flex; align-items: center; justify-content: space-between; }
    .card > h2 small { font: 400 12px/1 'DM Sans'; color: var(--faint); }

    .sources { padding: 12px 12px 14px; overflow: hidden; }
    .add { display: flex; align-items: center; justify-content: center; gap: 8px; border: 1px solid var(--line); border-radius: 99px; padding: 8px; font-weight: 500; margin-bottom: 12px; }
    .all, .src { display: flex; align-items: center; gap: 10px; padding: 7px 8px; border-radius: 9px; }
    .all { color: var(--soft); font-size: 13px; }
    .src svg { color: var(--blue); }
    .src.book svg { color: #b0621c; }
    .src span { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
    .src small { margin-left: auto; color: var(--faint); font-size: 12px; white-space: nowrap; }
    .box { width: 16px; height: 16px; border-radius: 4px; border: 1.5px solid #9aa2b6; flex: none; display: grid; place-items: center; }
    .box.on { background: var(--blue); border-color: var(--blue); }
    .box.on::after { content: ''; width: 8px; height: 4px; border-left: 2px solid #fff; border-bottom: 2px solid #fff; transform: rotate(-45deg) translateY(-1px); }
    .src.lit { background: var(--blue-soft); }
    .group { font-size: 12px; color: var(--faint); padding: 10px 8px 4px; }

    .chat { padding: 20px 26px 0; overflow: auto; }
    .asked { margin-left: auto; max-width: 78%; width: fit-content; background: var(--blue-soft); border-radius: 18px 18px 4px 18px; padding: 10px 16px; margin-bottom: 18px; }
    .answer { font-size: 15.5px; line-height: 1.65; max-width: 660px; }
    .answer p + p { margin-top: 12px; }
    .n { display: inline-grid; place-items: center; min-width: 19px; height: 19px; padding: 0 5px; margin: 0 1px; border-radius: 99px; background: var(--chip); color: var(--soft); font-size: 11px; font-weight: 600; vertical-align: 2px; }
    .n.on { background: var(--blue); color: #fff; }
    .quote { margin: 14px 0 6px; border: 1px solid var(--line); border-radius: 14px; padding: 12px 14px; max-width: 560px; box-shadow: 0 8px 24px -14px rgba(30, 50, 110, .35); }
    .quote .from { display: flex; align-items: center; gap: 8px; font-weight: 500; font-size: 13px; }
    .quote .from small { color: var(--faint); font-weight: 400; }
    .quote p { margin-top: 6px; color: var(--soft); font-size: 14px; }
    .quote mark { background: #fff1b8; color: inherit; }
    .quote a { display: inline-block; margin-top: 8px; color: var(--blue); font-weight: 500; font-size: 13px; }
    .more { display: flex; flex-wrap: wrap; gap: 8px; margin: 16px 0; }
    .more span { border: 1px solid var(--line); border-radius: 99px; padding: 6px 12px; color: var(--soft); font-size: 13px; }
    .ask { margin: auto 18px 16px; display: flex; align-items: center; gap: 10px; border: 1px solid var(--line); border-radius: 99px; padding: 10px 10px 10px 18px; color: var(--faint); background: #fff; }
    .ask small { margin-left: auto; color: var(--soft); white-space: nowrap; }
    .ask b { width: 32px; height: 32px; border-radius: 50%; background: var(--blue); display: grid; place-items: center; }

    .studio { padding: 14px; overflow: hidden; }
    .tiles { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-bottom: 14px; }
    .tile { border-radius: 12px; padding: 12px; font-weight: 500; font-size: 13px; display: grid; gap: 14px; }
    .tile svg { width: 18px; height: 18px; }
    .t1 { background: #e7f0ff; color: #1d3f9c; } .t2 { background: #e6f6ec; color: #17603a; } .t3 { background: #fff0dc; color: #8a4a10; } .t4 { background: #f3e9ff; color: #5a2c96; }
    .saved { border: 1px solid var(--line); border-radius: 12px; padding: 11px 13px; margin-bottom: 8px; }
    .saved b { display: block; font-weight: 500; }
    .saved p { color: var(--soft); font-size: 13px; }
    .saved small { color: var(--faint); font-size: 12px; }

    .tabs { display: none; }
    @media (max-width: 760px) {
        body { padding: 0; }
        header { padding: 10px 14px; }
        header .seg { display: none; }
        header .me { margin-left: auto; }
        .tabs { display: flex; background: #e1e5f0; border-radius: 99px; padding: 3px; margin: 0 14px 10px; font-weight: 500; color: var(--soft); }
        .tabs span { flex: 1; text-align: center; padding: 7px 0; border-radius: 99px; }
        .tabs .on { background: #fff; color: var(--ink); }
        body { grid-template-rows: auto auto minmax(0, 1fr); }
        .panels { grid-template-columns: 1fr; padding: 0 10px 10px; }
        .panels .left, .panels .right { display: none; }
        .chat { padding: 16px 16px 0; }
        .card > h2 { display: none; }
        .ask small { display: none; }
        .ask b { margin-left: auto; }
        .ask { margin: auto 12px 12px; }
    }
</style>
</head>
<body>
<header>
    <span class="logo">D</span><b>Dougs Library</b>
    <div class="seg"><span class="on">Ask</span><span>Read</span><span>Notes</span></div>
    <span class="me">TL</span>
</header>
<div class="tabs"><span>Sources</span><span class="on">Ask</span><span>Notes</span></div>
<div class="panels">
    <section class="card left">
        <h2>Sources <small>8 of 362 selected</small></h2>
        <div class="sources">
            <div class="add"><svg viewBox="0 0 16 16"><path d="M8 3v10M3 8h10"/></svg>Keep a conversation</div>
            <div class="all"><span class="box"></span>Select all in A First Project</div>
            <div class="group">A First Project · with Claude</div>
            <div class="src lit"><svg viewBox="0 0 16 16"><path d="M2.5 3.5h11v7h-6l-3 2.5v-2.5h-2z"/></svg><span>Lorem Ipsum Dolor</span><small>9 Sep</small><i class="box on"></i></div>
            <div class="src"><svg viewBox="0 0 16 16"><path d="M2.5 3.5h11v7h-6l-3 2.5v-2.5h-2z"/></svg><span>Sit Amet Consectetur</span><small>21 Jul</small><i class="box on"></i></div>
            <div class="src"><svg viewBox="0 0 16 16"><path d="M2.5 3.5h11v7h-6l-3 2.5v-2.5h-2z"/></svg><span>Adipiscing Elit</span><small>2 Sep</small><i class="box on"></i></div>
            <div class="src"><svg viewBox="0 0 16 16"><path d="M2.5 3.5h11v7h-6l-3 2.5v-2.5h-2z"/></svg><span>Sed Do Eiusmod</span><small>5 Sep</small><i class="box on"></i></div>
            <div class="src"><svg viewBox="0 0 16 16"><path d="M2.5 3.5h11v7h-6l-3 2.5v-2.5h-2z"/></svg><span>Ut Enim ad Minim</span><small>27 Sep</small><i class="box on"></i></div>
            <div class="src"><svg viewBox="0 0 16 16"><path d="M2.5 3.5h11v7h-6l-3 2.5v-2.5h-2z"/></svg><span>Quis Nostrud</span><small>1 Oct</small><i class="box on"></i></div>
            <div class="group">My books</div>
            <div class="src book"><svg viewBox="0 0 16 16"><path d="M3 2.5h7a2 2 0 0 1 2 2V13H5a2 2 0 0 1-2-2z"/></svg><span>Dougs Story</span><small>book</small><i class="box on"></i></div>
            <div class="src book"><svg viewBox="0 0 16 16"><path d="M3 2.5h7a2 2 0 0 1 2 2V13H5a2 2 0 0 1-2-2z"/></svg><span>Dougs Design</span><small>book</small><i class="box on"></i></div>
            <div class="group">Other projects</div>
            <div class="src"><svg viewBox="0 0 16 16"><path d="M2.5 3.5h11v7h-6l-3 2.5v-2.5h-2z"/></svg><span>Tempor Incididunt</span><small>12 Sep</small><i class="box"></i></div>
            <div class="src"><svg viewBox="0 0 16 16"><path d="M2.5 3.5h11v7h-6l-3 2.5v-2.5h-2z"/></svg><span>Magna Aliqua</span><small>20 Sep</small><i class="box"></i></div>
        </div>
    </section>

    <section class="card">
        <h2>Ask <small>answers come only from what is selected</small></h2>
        <div class="chat">
            <div class="asked">Where did I first work out dolore magna, and what did I rest it on?</div>
            <div class="answer">
                <p>You first worked it out in <b>Lorem Ipsum Dolor</b>, in its first chapter, where the reply says that excepteur sint occaecat cupidatat non proident<span class="n on">1</span> and you answered by asking whether voluptas sit aspernatur<span class="n">2</span>.</p>
                <p>You rested it on an earlier conversation, <b>Adipiscing Elit</b><span class="n">3</span>, and you have since cited the passage twice: in Sit Amet Consectetur<span class="n">4</span> and in your own book, Dougs Story<span class="n">5</span>.</p>
            </div>
            <div class="quote">
                <div class="from"><span class="n on">1</span>Lorem Ipsum Dolor <small>· A First Chapter · Claude · 9 Sep 2026</small></div>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <mark>Excepteur sint occaecat cupidatat non proident</mark>, sunt in culpa qui officia deserunt.</p>
                <a>Open the passage in its conversation →</a>
            </div>
            <div class="more"><span>What did I note on that passage?</span><span>Show every place it is cited</span><span>Summarize A First Project</span></div>
        </div>
        <div class="ask">Ask across what is selected<small>8 sources</small><b><svg viewBox="0 0 16 16" style="stroke:#fff"><path d="M8 13V3M4 7l4-4 4 4"/></svg></b></div>
    </section>

    <section class="card right">
        <h2>Made from the sources</h2>
        <div class="studio">
            <div class="tiles">
                <div class="tile t1"><svg viewBox="0 0 16 16"><path d="M2 8h12M2 4h12M2 12h8"/></svg>Timeline</div>
                <div class="tile t2"><svg viewBox="0 0 16 16"><path d="M3 2.5h10v11H3zM6 6h4M6 9h4"/></svg>Briefing</div>
                <div class="tile t3"><svg viewBox="0 0 16 16"><circle cx="4" cy="8" r="1.5"/><circle cx="12" cy="4" r="1.5"/><circle cx="12" cy="12" r="1.5"/><path d="M5.4 7.3 10.6 4.7M5.4 8.7l5.2 2.6"/></svg>Citation map</div>
                <div class="tile t4"><svg viewBox="0 0 16 16"><path d="M3 3h10M3 6.5h10M3 10h6M3 13.5h8"/></svg>Index of terms</div>
            </div>
            <div class="saved"><b>On dolore magna</b><p>Lorem ipsum, a note of mine beside the passage it is about.</p><small>My note · 3 Oct 2026 · rests on 1</small></div>
            <div class="saved"><b>A First Project, in brief</b><p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p><small>Saved answer · 4 Oct 2026 · 6 sources</small></div>
            <div class="saved"><b>What to cite in Dougs Story</b><p>Nemo enim ipsam voluptatem quia voluptas.</p><small>My note · 4 Oct 2026</small></div>
        </div>
    </section>
</div>
</body>
</html>
`})]})]}),a.jsxs(i,{children:[a.jsx(d,{children:"3"}),a.jsx(o,{children:"[The Wall](/dougs-design/#the-wall)"}),a.jsx(t,{children:"Concept 3, after Pinterest."}),a.jsx(t,{children:"The library browsed by what catches the eye: passages, notes, book covers and conversations pinned to one wall in a masonry of different sizes, each saved to boards, so finding is wandering and keeping is one button."}),a.jsxs(t,{children:[a.jsx(p,{}),a.jsx(r,{children:"/.design/3-every-concept~003-desk.png"}),a.jsx(r,{children:"/.design/3-every-concept~003-phone.png"})]}),a.jsxs(t,{children:[a.jsx(c,{}),a.jsx(n,{children:`<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>The Wall</title>
<meta name="number" content="3">
<meta name="after" content="Pinterest">
<meta name="idea" content="The library browsed by what catches the eye: passages, notes, book covers and conversations pinned to one wall in a masonry of different sizes, each saved to boards, so finding is wandering and keeping is one button.">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600&display=swap" rel="stylesheet">
<style>
    :root { --ink: #111; --soft: #5f5f5f; --red: #12343b; --pill: #efefef; --serif: 'Fraunces', Georgia, serif; }
    * { box-sizing: border-box; }
    body { margin: 0; font: 15px/1.4 -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; color: var(--ink); background: #fff; }
    .top { position: sticky; top: 0; z-index: 3; display: flex; align-items: center; gap: 8px; height: 72px; padding: 0 16px; background: #fff; }
    .logo { width: 40px; height: 40px; border-radius: 50%; background: var(--red); color: #fff; display: grid; place-items: center; font: 700 22px/1 var(--serif); }
    .tab { padding: 12px 16px; border-radius: 24px; font-weight: 600; }
    .tab.on { background: var(--ink); color: #fff; }
    .search { flex: 1; height: 48px; border-radius: 24px; background: #e9e9e9; display: flex; align-items: center; padding: 0 18px; color: #767676; gap: 10px; }
    .icon { width: 48px; height: 48px; border-radius: 50%; display: grid; place-items: center; color: #5f5f5f; font-size: 20px; }
    .me { width: 32px; height: 32px; border-radius: 50%; background: #7a5af5; color: #fff; display: grid; place-items: center; font-weight: 700; font-size: 14px; margin: 0 8px; }
    .pills { display: flex; gap: 8px; padding: 4px 16px 16px; overflow-x: auto; scrollbar-width: none; }
    .pills span { flex: none; padding: 10px 16px; border-radius: 16px; background: var(--pill); font-weight: 600; font-size: 14px; }
    .pills span.on { background: var(--ink); color: #fff; }
    .wall { column-count: 5; column-gap: 16px; padding: 0 16px 90px; }
    .pin { break-inside: avoid; margin-bottom: 18px; }
    .face { position: relative; border-radius: 16px; overflow: hidden; }
    .cap { display: flex; align-items: center; gap: 8px; padding: 8px 4px 0; font-size: 13px; }
    .cap b { font-weight: 600; }
    .cap .av { width: 24px; height: 24px; border-radius: 50%; color: #fff; display: grid; place-items: center; font-size: 11px; font-weight: 700; flex: none; }
    .cap small { color: var(--soft); display: block; font-size: 12px; }
    .quote { padding: 26px 22px 24px; font: 400 21px/1.35 var(--serif); }
    .quote.big { font-size: 27px; padding: 34px 24px 40px; }
    .quote small { display: block; margin-top: 16px; font: 600 11px/1.3 -apple-system, sans-serif; letter-spacing: .06em; text-transform: uppercase; opacity: .7; }
    .peach { background: #f6d8c6; color: #5a2d16; } .sage { background: #d6e7dc; color: #1f4430; } .lav { background: #e2dbf4; color: #352a5e; } .butter { background: #fdeaa8; color: #4d3b00; } .sky { background: #d2e6f3; color: #173a52; }
    .cover { aspect-ratio: 2 / 3; padding: 22px 20px; display: flex; flex-direction: column; justify-content: space-between; color: #fff; }
    .cover h3 { margin: 0; font: 600 26px/1.15 var(--serif); }
    .cover p { margin: 0; font-size: 13px; opacity: .85; }
    .cover::after { content: ''; position: absolute; left: 12px; top: 0; bottom: 0; width: 2px; background: rgba(255,255,255,.18); }
    .terra { background: linear-gradient(160deg, #c9654a, #9c4330); } .forest { background: linear-gradient(160deg, #4f7f6c, #2f5a4a); } .navy { background: linear-gradient(160deg, #3d5f96, #26406b); }
    .convo { background: #fff; border: 1px solid #e6e6e6; padding: 16px 16px 14px; }
    .convo h4 { margin: 0 0 6px; font-size: 17px; }
    .convo p { margin: 0 0 10px; color: #333; font-size: 14px; }
    .convo .meta { font-size: 12px; color: var(--soft); display: flex; gap: 6px; flex-wrap: wrap; }
    .convo .meta span { background: var(--pill); border-radius: 10px; padding: 2px 8px; }
    .note { background: #fff6c2; padding: 20px 18px; font: 400 17px/1.4 var(--serif); color: #4a3d00; box-shadow: inset 0 0 0 1px #f1e08a; }
    .note q { display: block; font-size: 13px; font-family: -apple-system, sans-serif; color: #7a6a1a; margin-bottom: 8px; }
    .note small { display: block; margin-top: 10px; font: 12px -apple-system, sans-serif; color: #7a6a1a; }
    .cite { background: #f1f1f1; padding: 18px; font-size: 14px; }
    .cite .arrow { display: flex; align-items: center; gap: 8px; margin: 8px 0; font-weight: 600; }
    .cite .arrow::before { content: '↳'; color: var(--red); font-size: 18px; }
    .hover .face::after { content: ''; position: absolute; inset: 0; background: rgba(0,0,0,.32); }
    .save { position: absolute; z-index: 2; top: 12px; right: 12px; background: var(--red); color: #fff; font-weight: 700; padding: 12px 16px; border-radius: 24px; font-size: 15px; display: none; }
    .board { position: absolute; z-index: 2; top: 18px; left: 14px; color: #fff; font-weight: 600; font-size: 14px; display: none; }
    .hover .save, .hover .board { display: block; }
    .hover .quote { padding-top: 66px; }
    .boards { display: grid; grid-template-columns: repeat(6, minmax(0, 1fr)); gap: 16px; padding: 4px 16px 22px; }
    .boards h2 { grid-column: 1 / -1; margin: 0 0 -4px; font-size: 20px; }
    .bd b { display: block; margin-top: 8px; font-size: 15px; }
    .bd small { color: var(--soft); font-size: 13px; }
    .collage { display: grid; grid-template-columns: 2fr 1fr; grid-template-rows: 1fr 1fr; gap: 2px; height: 120px; border-radius: 16px; overflow: hidden; }
    .collage i { display: block; } .collage i:first-child { grid-row: 1 / 3; }
    .wall-title { margin: 0; padding: 0 16px 12px; font-size: 20px; }
    .tabbar { display: none; }
    @media (max-width: 1100px) { .wall { column-count: 4; } }
    @media (max-width: 700px) {
        .top { height: 60px; padding: 0 12px; }
        .logo, .tab, .icon, .me { display: none; }
        .search { height: 44px; }
        .pills { padding: 0 12px 12px; }
        .wall { column-count: 2; column-gap: 10px; padding: 0 10px 90px; }
        .pin { margin-bottom: 12px; }
        .quote { font-size: 17px; padding: 18px 14px; } .quote.big { font-size: 20px; padding: 22px 14px 26px; }
        .cover { padding: 16px 14px; } .cover h3 { font-size: 20px; }
        .convo { padding: 12px; } .convo h4 { font-size: 15px; } .convo p { font-size: 13px; }
        .note { font-size: 15px; padding: 14px 12px; }
        .cap { font-size: 12px; }
        .boards { display: flex; overflow-x: auto; gap: 12px; padding: 0 12px 16px; scrollbar-width: none; }
        .boards h2 { display: none; }
        .bd { flex: none; width: 148px; }
        .collage { height: 96px; }
        .wall-title { padding: 0 12px 10px; font-size: 18px; }
        .tabbar { display: flex; justify-content: space-around; align-items: center; position: fixed; left: 0; right: 0; bottom: 0; height: 64px; background: #fff; box-shadow: 0 -1px 0 #e6e6e6; z-index: 4; font-size: 22px; color: #767676; }
        .tabbar .on { color: var(--ink); }
        .tabbar .me { display: grid; margin: 0; }
    }
</style>
</head>
<body>
<header class="top">
    <span class="logo">D</span><span class="tab on">Home</span><span class="tab">Collections</span>
    <span class="search">⌕ Search the library</span>
    <span class="icon">♡</span><span class="icon">✎</span><span class="me">L</span>
</header>
<div class="pills"><span class="on">All</span><span>Passages</span><span>My notes</span><span>Books</span><span>Conversations</span><span>A First Project</span><span>A Second Project</span><span>A Third Project</span><span>Cited</span></div>
<section class="boards"><h2>Dougs Library</h2>
    <div class="bd"><div class="collage"><i class="terra"></i><i class="peach"></i><i class="butter"></i></div><b>Dougs Story</b><small>My own account</small></div>
    <div class="bd"><div class="collage"><i class="forest"></i><i class="sage"></i><i class="sky"></i></div><b>Dougs Design</b><small>The design of this library</small></div>
    <div class="bd"><div class="collage"><i class="navy"></i><i class="sky"></i><i class="lav"></i></div><b>Dougs Reference Manual</b><small>The parts it is built with</small></div>
    <div class="bd"><div class="collage"><i style="background:#c96442"></i><i class="peach"></i><i class="sage"></i></div><b>With Claude</b><small>212 conversations · 3 projects</small></div>
    <div class="bd"><div class="collage"><i style="background:#3f8f6f"></i><i class="sage"></i><i class="sky"></i></div><b>With ChatGPT</b><small>147 conversations</small></div>
    <div class="bd"><div class="collage"><i class="butter"></i><i class="lav"></i><i class="peach"></i></div><b>My notes</b><small>41 notes · 77 citations</small></div>
</section>
<h2 class="wall-title">Lately in the library</h2>
<main class="wall">
    <div class="pin"><div class="face quote big sage">“Excepteur sint occaecat cupidatat non proident.”<small>Lorem Ipsum Dolor · chapter 1</small></div><div class="cap"><span class="av" style="background:#c96442">C</span><div><b>Claude</b><small>saved to To cite</small></div></div></div>
    <div class="pin"><div class="face cover terra"><h3>Dougs Story</h3><p>My own account · by The Librarian</p></div><div class="cap"><b>Dougs Story</b></div></div>
    <div class="pin"><div class="face convo"><h4>Magna Aliqua</h4><p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris…</p><div class="meta"><span>A Third Project</span><span>11 chapters</span><span>20 Sep</span></div></div></div>
    <div class="pin"><div class="face note"><q>on “Excepteur sint occaecat cupidatat non proident”</q>Lorem ipsum, a note of mine beside the passage it is about.<small>3 Oct 2026 · My notes</small></div></div>
    <div class="pin hover"><div class="face quote lav"><span class="board">A First Project ▾</span><span class="save">Save</span>“Lorem ipsum dolor sit amet, consectetur adipiscing elit?”<small>The Librarian asking · Lorem Ipsum Dolor</small></div><div class="cap"><span class="av" style="background:#7a5af5">L</span><div><b>The Librarian</b><small>9 Sep 2026</small></div></div></div>
    <div class="pin"><div class="face convo"><h4>Lorem Ipsum Dolor</h4><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit? Sed do eiusmod tempor incididunt…</p><div class="meta"><span>A First Project</span><span>8 chapters</span><span>cited 2×</span></div></div></div>
    <div class="pin"><div class="face cite"><b>A citation</b><div class="arrow">Dougs Story, chapter 1</div>rests on <b>Lorem Ipsum Dolor</b>, chapter 1 — “Excepteur sint occaecat…”</div></div>
    <div class="pin"><div class="face quote butter">“Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit?”<small>The Librarian · Lorem Ipsum Dolor</small></div></div>
    <div class="pin"><div class="face cover forest"><h3>Dougs Design</h3><p>The design of this library</p></div><div class="cap"><b>Dougs Design</b></div></div>
    <div class="pin"><div class="face convo"><h4>Sit Amet Consectetur</h4><p>Excepteur sint occaecat cupidatat non proident, sunt in culpa…</p><div class="meta"><span>A First Project</span><span>14 chapters</span><span>21 Jul</span></div></div></div>
    <div class="pin"><div class="face quote peach">“Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.”<small>Lorem Ipsum Dolor · chapter 1</small></div><div class="cap"><span class="av" style="background:#c96442">C</span><div><b>Claude</b><small>saved to A First Project</small></div></div></div>
    <div class="pin"><div class="face convo"><h4>Tempor Incididunt</h4><p>Duis aute irure dolor in reprehenderit in voluptate velit esse…</p><div class="meta"><span>A Second Project</span><span>7 chapters</span><span>12 Sep</span></div></div></div>
    <div class="pin"><div class="face cover navy"><h3>Dougs Reference Manual</h3><p>The parts it is built with</p></div><div class="cap"><b>Dougs Reference Manual</b></div></div>
    <div class="pin"><div class="face quote sky">“Ut enim ad minim veniam, quis nostrud exercitation.”<small>Adipiscing Elit · chapter 2</small></div></div>
    <div class="pin"><div class="face convo"><h4>Quis Nostrud</h4><p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur…</p><div class="meta"><span>A First Project</span><span>6 chapters</span><span>1 Oct</span></div></div></div>
</main>
<nav class="tabbar"><span class="on">⌂</span><span>⌕</span><span>＋</span><span>☰</span><span class="me">L</span></nav>
</body>
</html>
`})]})]}),a.jsxs(i,{children:[a.jsx(d,{children:"4"}),a.jsx(o,{children:"The Command Line"}),a.jsx(t,{children:"Concept 4, after keyboard-first tools: command palettes, launchers and the leader keys of editors."}),a.jsx(t,{children:"The library opens on one line: type to go anywhere or do anything, the last places are a number away and every book, grouping and list is two keystrokes away — and the same line waits at the top of every page, which is what unites them."}),a.jsxs(t,{children:[a.jsx(p,{}),a.jsx(r,{children:"/.design/3-every-concept~004-desk.png"}),a.jsx(r,{children:"/.design/3-every-concept~004-phone.png"})]}),a.jsxs(t,{children:[a.jsx(c,{}),a.jsx(n,{children:`<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>The Command Line</title>
<meta name="number" content="4">
<meta name="after" content="keyboard-first tools: command palettes, launchers and the leader keys of editors">
<meta name="idea" content="The library opens on one line: type to go anywhere or do anything, the last places are a number away and every book, grouping and list is two keystrokes away — and the same line waits at the top of every page, which is what unites them.">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=IBM+Plex+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>
    :root { --bg: #f6f4ee; --card: #fffdf8; --ink: #1f2328; --soft: #6b6f76; --faint: #a2a5aa; --line: #e4e0d6; --accent: #2b50c8; --accent-soft: #e6ecfb;
        --sans: 'IBM Plex Sans', system-ui, sans-serif; --mono: 'IBM Plex Mono', ui-monospace, monospace; }
    * { box-sizing: border-box; }
    body { margin: 0; font: 15px/1.5 var(--sans); color: var(--ink); background: var(--bg) radial-gradient(circle, #e2ded3 1px, transparent 1.2px) 0 0 / 22px 22px; min-height: 100vh; }
    .wrap { max-width: 1180px; margin: 0 auto; padding: 26px 32px 30px; }
    .top { display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 18px; }
    .top b { font-size: 20px; font-weight: 700; letter-spacing: -.01em; }
    .top span { color: var(--soft); font-size: 13px; font-family: var(--mono); }
    .line { display: flex; align-items: center; gap: 14px; background: var(--card); border: 1.5px solid var(--ink); border-radius: 14px; padding: 16px 20px; box-shadow: 0 10px 30px rgba(31,35,40,.10); }
    .line .prompt { font: 600 24px/1 var(--mono); color: var(--accent); }
    .line .text { flex: 1; font: 400 22px/1.3 var(--sans); color: var(--faint); }
    .line .text::after { content: ''; display: inline-block; width: 2px; height: 24px; background: var(--accent); margin-left: 2px; vertical-align: -4px; }
    .line .hint { display: flex; gap: 6px; align-items: center; color: var(--soft); font-size: 13px; }
    kbd { white-space: nowrap; display: inline-grid; place-items: center; min-width: 24px; height: 24px; padding: 0 6px; border-radius: 6px; border: 1px solid #cfcabf; border-bottom-width: 2px; background: #fff; font: 500 12px/1 var(--mono); color: var(--ink); }
    .grid { display: grid; grid-template-columns: minmax(0, 1.05fr) minmax(0, 1fr); gap: 20px; margin-top: 20px; }
    .card { background: var(--card); border: 1px solid var(--line); border-radius: 14px; padding: 16px 18px; }
    .card h2 { display: flex; justify-content: space-between; align-items: baseline; margin: 0 0 10px; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: .08em; color: var(--soft); }
    .card h2 span { text-transform: none; letter-spacing: 0; font-weight: 400; font-family: var(--mono); }
    .recent a { display: grid; grid-template-columns: 30px minmax(0, 1fr) auto; gap: 12px; align-items: center; padding: 9px 8px; border-radius: 9px; color: inherit; text-decoration: none; }
    .recent a.on { background: var(--accent-soft); }
    .recent .kind { width: 30px; height: 30px; border-radius: 8px; display: grid; place-items: center; font: 600 12px/1 var(--mono); color: #fff; }
    .recent b { display: block; font-weight: 600; }
    .recent small { color: var(--soft); font-size: 13px; }
    .recent em { white-space: nowrap; font-style: normal; display: flex; gap: 4px; align-items: center; color: var(--faint); font-size: 12px; }
    .keys { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 4px 18px; }
    .keys h3 { grid-column: 1 / -1; margin: 10px 0 4px; font-size: 13px; font-weight: 600; }
    .keys h3:first-child { margin-top: 0; }
    .key { display: flex; align-items: center; gap: 10px; padding: 4px 0; }
    .key span { display: flex; gap: 3px; flex: none; width: 64px; }
    .key b { font-weight: 500; }
    .key small { color: var(--soft); margin-left: auto; font-family: var(--mono); font-size: 12px; }
    .frame { margin-top: 20px; }
    .frame h2 { margin-bottom: 12px; }
    .pages { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 16px; }
    .page { border: 1px solid var(--line); border-radius: 10px; overflow: hidden; background: #fff; }
    .page .bar { display: flex; align-items: center; gap: 8px; padding: 7px 10px; border-bottom: 1.5px solid var(--ink); font: 500 12px/1 var(--mono); color: var(--soft); }
    .page .bar b { color: var(--accent); }
    .page .bar i { margin-left: auto; font-style: normal; }
    .page .body { padding: 10px 12px 12px; }
    .page .body strong { display: block; font-size: 14px; margin-bottom: 6px; }
    .page .body p { margin: 0; height: 7px; border-radius: 4px; background: #ece9e1; margin-bottom: 6px; }
    .page .body p.s { width: 70%; } .page .body p.t { width: 45%; }
    .page .body .row { display: flex; gap: 5px; margin-bottom: 6px; } .page .body .row i { flex: 1; height: 26px; border-radius: 5px; background: #eef2fd; }
    .tiles { display: none; }
    .line .short { display: none; }
    @media (max-width: 700px) {
        body { background-size: 18px 18px; }
        .wrap { padding: 18px 16px 120px; }
        .top { margin-bottom: 12px; } .top span { display: none; }
        .line { position: fixed; left: 12px; right: 12px; bottom: 14px; z-index: 5; padding: 12px 14px; border-radius: 16px; }
        .line .text { font-size: 17px; } .line .long { display: none; } .line .short { display: inline; } .card h2 span { display: none; } .line .prompt { font-size: 20px; } .line .hint { display: none; }
        .grid { display: block; margin-top: 0; }
        .card { margin-bottom: 14px; }
        .recent em { display: none; }
        .keys { display: none; }
        .tiles { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 8px; }
        .tiles span { background: #fff; border: 1px solid var(--line); border-radius: 12px; padding: 10px 8px; text-align: center; font-size: 13px; font-weight: 500; }
        .tiles span kbd { display: grid; margin: 0 auto 6px; width: 30px; }
        .pages { grid-template-columns: 1fr; }
        .page:nth-child(n+2) { display: none; }
    }
</style>
</head>
<body>
<div class="wrap">
    <header class="top"><b>Dougs Library</b><span>kept by The Librarian · 3 books · 359 conversations · 41 notes</span></header>
    <div class="line"><span class="prompt">›</span><span class="text"><span class="long">Go to a book, a project, a conversation — or type a command</span><span class="short">Go anywhere, or type a command</span></span><span class="hint"><kbd>Ctrl</kbd><kbd>K</kbd> anywhere</span></div>
    <div class="grid">
        <section class="card recent">
            <h2>Recent places <span>Ctrl+1 – Ctrl+6</span></h2>
            <a href="#" class="on"><span class="kind" style="background:#1f8a7a">C</span><div><b>Lorem Ipsum Dolor</b><small>chapter 1 · A First Project · with Claude</small></div><em><kbd>Ctrl</kbd><kbd>1</kbd></em></a>
            <a href="#"><span class="kind" style="background:#b4542f">B</span><div><b>Dougs Story</b><small>a book of mine · chapter 1</small></div><em><kbd>Ctrl</kbd><kbd>2</kbd></em></a>
            <a href="#"><span class="kind" style="background:#d98c1f">P</span><div><b>A Second Project</b><small>91 conversations with Claude</small></div><em><kbd>Ctrl</kbd><kbd>3</kbd></em></a>
            <a href="#"><span class="kind" style="background:#3d5f96">B</span><div><b>Dougs Reference Manual</b><small>the parts it is built with</small></div><em><kbd>Ctrl</kbd><kbd>4</kbd></em></a>
            <a href="#"><span class="kind" style="background:#8a6d1f">N</span><div><b>A note on “Excepteur sint occaecat…”</b><small>3 Oct 2026 · in Lorem Ipsum Dolor</small></div><em><kbd>Ctrl</kbd><kbd>5</kbd></em></a>
            <a href="#"><span class="kind" style="background:#c2456a">C</span><div><b>Magna Aliqua</b><small>11 chapters · A Third Project</small></div><em><kbd>Ctrl</kbd><kbd>6</kbd></em></a>
        </section>
        <section class="card">
            <h2>Two keys away <span>press G, then…</span></h2>
            <div class="keys">
                <h3>Books</h3>
                <div class="key"><span><kbd>G</kbd><kbd>L</kbd></span><b>Dougs Library</b></div>
                <div class="key"><span><kbd>G</kbd><kbd>S</kbd></span><b>Dougs Story</b></div>
                <div class="key"><span><kbd>G</kbd><kbd>D</kbd></span><b>Dougs Design</b></div>
                <div class="key"><span><kbd>G</kbd><kbd>M</kbd></span><b>Reference Manual</b></div>
                <h3>Conversations</h3>
                <div class="key"><span><kbd>G</kbd><kbd>C</kbd></span><b>With Claude</b><small>212</small></div>
                <div class="key"><span><kbd>G</kbd><kbd>G</kbd></span><b>With ChatGPT</b><small>147</small></div>
                <div class="key"><span><kbd>G</kbd><kbd>1</kbd></span><b>A First Project</b><small>38</small></div>
                <div class="key"><span><kbd>G</kbd><kbd>2</kbd></span><b>A Second Project</b><small>91</small></div>
                <div class="key"><span><kbd>G</kbd><kbd>3</kbd></span><b>A Third Project</b><small>83</small></div>
                <div class="key"><span><kbd>G</kbd><kbd>Y</kbd></span><b>The year</b></div>
                <h3>Do</h3>
                <div class="key"><span><kbd>/</kbd></span><b>Find any passage</b></div>
                <div class="key"><span><kbd>N</kbd></span><b>New note here</b></div>
                <div class="key"><span><kbd>C</kbd></span><b>Cite this passage</b></div>
                <div class="key"><span><kbd>?</kbd></span><b>Every key</b></div>
            </div>
            <div class="tiles">
                <span><kbd>S</kbd>Dougs Story</span><span><kbd>D</kbd>Dougs Design</span><span><kbd>M</kbd>Manual</span>
                <span><kbd>C</kbd>With Claude</span><span><kbd>G</kbd>With ChatGPT</span><span><kbd>N</kbd>My notes</span>
            </div>
        </section>
    </div>
    <section class="card frame">
        <h2>The same line on every page <span>it is the one thing that stays</span></h2>
        <div class="pages">
            <div class="page"><div class="bar"><b>›</b>Dougs Story <i>Ctrl+K</i></div><div class="body"><strong>Dougs Story · chapter 1</strong><p></p><p></p><p class="s"></p><p></p><p class="t"></p></div></div>
            <div class="page"><div class="bar"><b>›</b>A First Project <i>Ctrl+K</i></div><div class="body"><strong>A First Project · 38</strong><div class="row"><i></i><i></i><i></i></div><div class="row"><i></i><i></i><i></i></div><p class="s"></p></div></div>
            <div class="page"><div class="bar"><b>›</b>Lorem Ipsum Dolor <i>Ctrl+K</i></div><div class="body"><strong>Lorem Ipsum Dolor · chapter 1</strong><p class="s"></p><p></p><p class="t"></p><p class="s"></p><p></p></div></div>
        </div>
    </section>
</div>
</body>
</html>
`})]})]}),a.jsxs(i,{children:[a.jsx(d,{children:"5"}),a.jsx(o,{children:"[The Front Page](/dougs-design/#the-front-page)"}),a.jsx(t,{children:"Concept 5, after a newspaper's front page and the long-read site's home."}),a.jsx(t,{children:"The library opens like a front page: the conversation most recently kept leads with a standfirst, what was kept lately runs down a column by day, notes and citations take the next, and the books and groupings stand in the masthead's index — movement is by reading and by the sections across the top."}),a.jsxs(t,{children:[a.jsx(p,{}),a.jsx(r,{children:"/.design/3-every-concept~005-desk.png"}),a.jsx(r,{children:"/.design/3-every-concept~005-phone.png"})]}),a.jsxs(t,{children:[a.jsx(c,{}),a.jsx(n,{children:`<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>The Front Page</title>
<meta name="number" content="5">
<meta name="after" content="a newspaper's front page and the long-read site's home">
<meta name="idea" content="The library opens like a front page: the conversation most recently kept leads with a standfirst, what was kept lately runs down a column by day, notes and citations take the next, and the books and groupings stand in the masthead's index — movement is by reading and by the sections across the top.">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,700&family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,600;1,8..60,400&family=Inter:wght@500;600&display=swap" rel="stylesheet">
<style>
    :root { --paper: #fbf9f4; --ink: #1b1a17; --soft: #5f5b53; --rule: #d9d3c7; --accent: #b3261e;
        --display: 'Playfair Display', Georgia, serif; --text: 'Source Serif 4', Georgia, serif; --label: Inter, system-ui, sans-serif; }
    * { box-sizing: border-box; }
    body { margin: 0; background: var(--paper); color: var(--ink); font: 17px/1.55 var(--text); }
    a { color: inherit; text-decoration: none; }
    .wrap { max-width: 1216px; margin: 0 auto; padding: 0 32px 40px; }
    .dateline { display: flex; justify-content: space-between; padding: 12px 0 10px; font: 500 12px/1 var(--label); letter-spacing: .06em; text-transform: uppercase; color: var(--soft); }
    .nameplate { text-align: center; border-top: 3px double var(--ink); border-bottom: 1px solid var(--ink); padding: 14px 0 10px; }
    .nameplate h1 { margin: 0; font: 800 64px/1 var(--display); letter-spacing: -.01em; }
    .nameplate p { margin: 6px 0 0; font: italic 15px/1.3 var(--text); color: var(--soft); }
    .sections { display: flex; justify-content: center; gap: 34px; padding: 10px 0; border-bottom: 1px solid var(--ink); font: 600 13px/1 var(--label); letter-spacing: .1em; text-transform: uppercase; }
    .sections a.on { color: var(--accent); }
    .index { display: flex; justify-content: center; flex-wrap: wrap; gap: 6px 30px; padding: 9px 0 10px; border-bottom: 3px double var(--ink); font-size: 14px; color: var(--soft); }
    .index b { font: 600 11px/1.6 var(--label); letter-spacing: .08em; text-transform: uppercase; color: var(--ink); margin-right: 6px; }
    .index a { color: var(--ink); }
    .front { display: grid; grid-template-columns: minmax(0, 6.2fr) minmax(0, 2.9fr) minmax(0, 2.9fr); padding-top: 22px; }
    .front > * { padding: 0 22px; border-left: 1px solid var(--rule); }
    .front > :first-child { padding-left: 0; border-left: 0; }
    .front > :last-child { padding-right: 0; }
    .kicker { font: 600 12px/1.3 var(--label); letter-spacing: .1em; text-transform: uppercase; color: var(--accent); margin-bottom: 8px; }
    .lead h2 { margin: 0 0 12px; font: 800 58px/1.02 var(--display); letter-spacing: -.015em; }
    .standfirst { margin: 0 0 14px; font: italic 22px/1.4 var(--text); color: #34322d; }
    .byline { font: 500 13px/1.4 var(--label); color: var(--soft); padding: 10px 0; border-top: 1px solid var(--rule); border-bottom: 1px solid var(--rule); margin-bottom: 16px; }
    .byline b { color: var(--ink); }
    .lead .cols { columns: 2; column-gap: 26px; column-rule: 1px solid var(--rule); }
    .lead .cols p { margin: 0 0 12px; }
    .lead .cols p:first-of-type::first-letter { float: left; font: 800 64px/.85 var(--display); margin: 6px 8px 0 0; color: var(--accent); }
    .lead .who { font: 600 11px/1 var(--label); letter-spacing: .08em; text-transform: uppercase; color: var(--soft); display: block; margin-bottom: 3px; }
    .more { display: inline-block; margin-top: 4px; font: 600 13px/1 var(--label); color: var(--accent); }
    .col h3 { margin: 0 0 10px; padding-bottom: 6px; border-bottom: 2px solid var(--ink); font: 700 20px/1.1 var(--display); }
    .day { padding: 10px 0; border-bottom: 1px solid var(--rule); }
    .day time { display: block; font: 600 11px/1 var(--label); letter-spacing: .08em; text-transform: uppercase; color: var(--accent); margin-bottom: 5px; }
    .day h4 { margin: 0 0 3px; font: 700 20px/1.15 var(--display); }
    .day p { margin: 0; font-size: 15px; line-height: 1.45; color: var(--soft); }
    .pull { margin: 4px 0 14px; padding: 0 0 14px; border-bottom: 1px solid var(--rule); }
    .pull q { display: block; font: italic 700 22px/1.25 var(--display); quotes: '“' '”'; }
    .pull p { margin: 10px 0 0; font-size: 16px; }
    .pull small { display: block; margin-top: 6px; font: 500 12px/1.3 var(--label); color: var(--soft); }
    .cite { padding: 9px 0; border-bottom: 1px solid var(--rule); font-size: 15px; line-height: 1.45; }
    .cite b { font-weight: 600; }
    .cite em { font-style: normal; color: var(--accent); font: 600 11px/1 var(--label); letter-spacing: .08em; text-transform: uppercase; display: block; margin-bottom: 3px; }
    .books { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); margin-top: 26px; border-top: 3px double var(--ink); padding-top: 14px; }
    .books > * { padding: 0 22px; border-left: 1px solid var(--rule); }
    .books > :first-child { padding-left: 0; border-left: 0; }
    .books h4 { margin: 4px 0 4px; font: 700 24px/1.1 var(--display); }
    .books p { margin: 0; font-size: 15px; color: var(--soft); }
    @media (max-width: 700px) {
        body { font-size: 16px; }
        .wrap { padding: 0 16px 30px; }
        .dateline span:last-child { display: none; }
        .nameplate h1 { font-size: 40px; }
        .nameplate p { font-size: 13px; }
        .sections { justify-content: space-between; gap: 10px; white-space: nowrap; padding: 11px 0; font-size: 11.5px; letter-spacing: .05em; }
        .index { justify-content: flex-start; gap: 4px 14px; font-size: 13px; }
        .front { display: block; padding-top: 16px; }
        .front > * { padding: 0; border-left: 0; }
        .lead h2 { font-size: 40px; }
        .standfirst { font-size: 19px; }
        .lead .cols { columns: 1; }
        .col { margin-top: 26px; }
        .books { display: block; }
        .books > * { padding: 12px 0; border-left: 0; border-bottom: 1px solid var(--rule); }
    }
</style>
</head>
<body>
<div class="wrap">
    <div class="dateline"><span>Sunday, 4 October 2026</span><span>Kept by The Librarian · 3 books · 359 conversations · 41 notes</span></div>
    <header class="nameplate"><h1>Dougs Library</h1><p>Everything I keep, filed under what it is about</p></header>
    <nav class="sections"><a href="#" class="on">Front</a><a href="#">Books</a><a href="#">Conversations</a><a href="#">Notes</a><a href="#">Cited</a></nav>
    <div class="index">
        <span><b>Books</b><a href="#">Dougs Story</a>, <a href="#">Dougs Design</a>, <a href="#">Dougs Reference Manual</a></span>
        <span><b>With Claude</b><a href="#">A First Project</a> 38, <a href="#">A Second Project</a> 91, <a href="#">A Third Project</a> 83</span>
        <span><b>With ChatGPT</b><a href="#">147 conversations</a></span>
    </div>
    <main class="front">
        <article class="lead">
            <div class="kicker">Kept 1 October · A First Project · with Claude</div>
            <h2>Quis Nostrud</h2>
            <p class="standfirst">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
            <div class="byline"><b>The Librarian and Claude</b> · six chapters · read from the first</div>
            <div class="cols">
                <span class="who">The Librarian</span><p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem?</p>
                <span class="who">Claude</span><p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.</p>
                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
                <a class="more" href="#">Continue — chapter 1 of 6 →</a>
            </div>
        </article>
        <section class="col">
            <h3>Kept lately</h3>
            <div class="day"><time>Sunday 27 September</time><h4>Ut Enim ad Minim</h4><p>A First Project · three chapters</p></div>
            <div class="day"><time>Sunday 20 September</time><h4>Magna Aliqua</h4><p>A Third Project · eleven chapters</p></div>
            <div class="day"><time>Saturday 12 September</time><h4>Tempor Incididunt</h4><p>A Second Project · seven chapters</p></div>
            <div class="day"><time>Wednesday 9 September</time><h4>Lorem Ipsum Dolor</h4><p>A First Project · eight chapters · cited twice</p></div>
            <div class="day"><time>Saturday 5 September</time><h4>Sed Do Eiusmod</h4><p>A First Project · two chapters</p></div>
        </section>
        <section class="col">
            <h3>Notes &amp; citations</h3>
            <div class="pull"><q>Excepteur sint occaecat cupidatat non proident</q><p>Lorem ipsum, a note of mine beside the passage it is about.</p><small>My note · 3 October · Lorem Ipsum Dolor, chapter 1</small></div>
            <div class="cite"><em>Cited in</em><b>Sit Amet Consectetur</b>, chapter 3, rests on <b>Lorem Ipsum Dolor</b>.</div>
            <div class="cite"><em>Cited in</em><b>Dougs Story</b>, chapter 1, rests on <b>Lorem Ipsum Dolor</b>.</div>
            <div class="cite"><em>Cites</em><b>Lorem Ipsum Dolor</b> cites <b>Adipiscing Elit</b>, chapter 2.</div>
        </section>
    </main>
    <section class="books">
        <div><div class="kicker">From the books</div><h4>Dougs Story</h4><p>My own account. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></div>
        <div><div class="kicker">The design</div><h4>Dougs Design</h4><p>The design of this library, kept in the library it designs.</p></div>
        <div><div class="kicker">The parts</div><h4>Dougs Reference Manual</h4><p>The parts this library is built with, each beside the chapter that says what it is.</p></div>
    </section>
</div>
</body>
</html>
`})]})]})]}),a.jsxs(i,{children:[a.jsx(o,{children:"[A Reference Manual](/dougs-design/#a-reference-manual)"}),a.jsx(t,{children:"A reference manual holds the parts a library is built with, each beside the chapter that says what it is. These are different ways to show a chapter and its code together, and to move among the parts."}),a.jsxs(i,{children:[a.jsx(d,{children:"6"}),a.jsx(o,{children:"[Side by Side](/dougs-design/#side-by-side)"}),a.jsx(t,{children:"Concept 6, after API documentation, as Stripe sets it."}),a.jsx(t,{children:"A chapter and its file are always seen together: the words on the left, the file they are about held still on the right, and every name in the words lights the line it means."}),a.jsxs(t,{children:[a.jsx(p,{}),a.jsx(r,{children:"/.design/3-every-concept~006-desk.png"}),a.jsx(r,{children:"/.design/3-every-concept~006-phone.png"})]}),a.jsxs(t,{children:[a.jsx(m,{}),"6 with 8 for a part, yes, though I think we want a way to toggle between code emphasized and documentation emphasized. Code doesn't look right unless in full view."]}),a.jsxs(t,{children:[a.jsx(c,{}),a.jsx(n,{children:`<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Side by Side</title>
<meta name="number" content="6">
<meta name="said" content="6 with 8 for a part, yes, though I think we want a way to toggle between code emphasized and documentation emphasized. Code doesn't look right unless in full view.">
<meta name="after" content="API documentation, as Stripe sets it">
<meta name="idea" content="A chapter and its file are always seen together: the words on the left, the file they are about held still on the right, and every name in the words lights the line it means.">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
<style>
    :root { --bg: #ffffff; --side: #f7f8fa; --line: #e6e8ee; --ink: #1a1f36; --soft: #4f566b; --faint: #8792a2; --teal: #0a7a70; --teal-soft: #e3f4f1; --night: #0f2a33; --night-2: #17363f; --code: #cfe6e3; }
    * { box-sizing: border-box; margin: 0; }
    html, body { height: 100%; }
    body { background: var(--bg); color: var(--ink); font: 400 14.5px/1.6 'Inter', system-ui, sans-serif; display: grid; grid-template-columns: 248px minmax(0, 1fr) minmax(0, 548px); overflow: hidden; }
    code, pre { font-family: 'JetBrains Mono', ui-monospace, monospace; }
    svg { width: 15px; height: 15px; stroke: currentColor; fill: none; stroke-width: 1.7; stroke-linecap: round; stroke-linejoin: round; flex: none; }

    nav.parts { background: var(--side); border-right: 1px solid var(--line); padding: 18px 14px; overflow: hidden; }
    .where { font-size: 12px; color: var(--faint); margin-bottom: 4px; }
    .book { font-weight: 600; font-size: 15px; margin-bottom: 14px; }
    .find { display: flex; align-items: center; gap: 8px; background: #fff; border: 1px solid var(--line); border-radius: 7px; padding: 6px 9px; color: var(--faint); font-size: 13px; }
    .find kbd { margin-left: auto; font: 500 11px/1 'Inter'; border: 1px solid var(--line); border-radius: 4px; padding: 2px 5px; }
    nav.parts h4 { font: 600 11px/1 'Inter'; letter-spacing: .06em; text-transform: uppercase; color: var(--faint); margin: 20px 6px 8px; }
    nav.parts a { display: flex; align-items: center; justify-content: space-between; padding: 6px 8px; border-radius: 6px; color: var(--soft); }
    nav.parts a.on { background: var(--teal-soft); color: var(--teal); font-weight: 500; }
    nav.parts a small { font: 400 11px/1 'JetBrains Mono'; color: var(--faint); }

    article { overflow: auto; padding: 34px 44px 40px; }
    .crumb { font-size: 12.5px; color: var(--faint); }
    h1 { font-size: 30px; line-height: 1.15; letter-spacing: -.02em; margin: 6px 0 10px; }
    .lead { font-size: 16px; color: var(--soft); max-width: 54ch; }
    h2 { font-size: 13px; letter-spacing: .06em; text-transform: uppercase; color: var(--faint); margin: 30px 0 4px; padding-top: 22px; border-top: 1px solid var(--line); }
    p { max-width: 58ch; }
    p + p { margin-top: 10px; }
    .field { display: grid; grid-template-columns: 110px minmax(0, 1fr); gap: 16px; padding: 12px 0; border-bottom: 1px solid var(--line); }
    .field b { font: 500 13.5px/1.6 'JetBrains Mono'; }
    .field b small { display: block; font: 400 11.5px/1.3 'Inter'; color: var(--faint); }
    .field.lit { margin: 0 -12px; padding: 12px; background: var(--teal-soft); border-radius: 8px; border-bottom-color: transparent; }
    .field.lit b { color: var(--teal); }
    .next { display: flex; justify-content: space-between; margin-top: 26px; font-size: 13.5px; }
    .next a { color: var(--teal); font-weight: 500; }

    aside.file { background: var(--night); color: var(--code); display: flex; flex-direction: column; min-height: 0; min-width: 0; }
    .tabs { display: flex; align-items: center; gap: 2px; padding: 12px 14px 0; font-size: 12.5px; }
    .tabs span { padding: 7px 12px; border-radius: 7px 7px 0 0; color: #8fb0ad; }
    .tabs span.on { background: var(--night-2); color: #fff; }
    .tabs .copy { margin-left: auto; display: flex; align-items: center; gap: 6px; color: #8fb0ad; padding-bottom: 6px; }
    pre { background: var(--night-2); margin: 0 14px; border-radius: 0 10px 10px 10px; padding: 16px 0; font-size: 12.2px; line-height: 1.75; overflow: auto; flex: 1; scrollbar-width: thin; scrollbar-color: #2f5a62 transparent; }
    pre span.l { display: block; padding: 0 18px 0 0; white-space: pre; }
    pre span.l::before { content: attr(data-n); display: inline-block; width: 42px; padding-right: 14px; text-align: right; color: #4f7672; }
    pre span.hit { background: rgba(102, 220, 200, .14); box-shadow: inset 3px 0 0 #58d6c2; }
    .k { color: #8ad7ff; } .s { color: #ffd48a; } .t { color: #9be3d6; } .c { color: #5f8a86; }
    .used { margin: 14px; padding: 12px 14px; border: 1px solid #24484f; border-radius: 10px; font-size: 12.5px; color: #9fc2bf; }
    .used b { display: block; color: #fff; font-weight: 500; margin-bottom: 4px; }
    .used span { display: inline-block; margin: 4px 6px 0 0; padding: 2px 9px; border-radius: 99px; background: #1d4049; color: #cfe6e3; }

    .pick { display: none; }
    @media (max-width: 760px) {
        html, body { height: auto; }
        body { grid-template-columns: minmax(0, 1fr); grid-template-rows: auto; overflow: visible; }
        nav.parts { display: none; }
        .pick { display: flex; align-items: center; justify-content: space-between; padding: 12px 16px; border-bottom: 1px solid var(--line); background: var(--side); font-weight: 500; position: sticky; top: 0; z-index: 2; }
        .pick small { color: var(--faint); font-weight: 400; }
        article { overflow: visible; padding: 20px 16px 8px; }
        h1 { font-size: 25px; }
        .field { grid-template-columns: 84px minmax(0, 1fr); gap: 10px; }
        aside.file { margin: 8px 12px 18px; border-radius: 12px; }
        pre { font-size: 11.5px; margin: 0 10px; }
        pre span.l::before { width: 30px; padding-right: 10px; }
        .next { display: none; }
    }
</style>
</head>
<body>
<nav class="parts">
    <div class="where">Dougs Library</div>
    <div class="book">Dougs Reference Manual</div>
    <div class="find"><svg viewBox="0 0 16 16"><circle cx="7" cy="7" r="4.5"/><path d="M10.5 10.5 14 14"/></svg>Find a part<kbd>/</kbd></div>
    <h4>The library</h4>
    <a>The Book<small>.tsx</small></a>
    <a class="on">The Theme<small>.tsx</small></a>
    <a>Initializing a Library</a>
    <h4>The design book</h4>
    <a>The Pages<small>.tsx</small></a>
    <a>The Frame<small>.tsx</small></a>
    <a>The Concept<small>.tsx</small></a>
    <h4>Kept with</h4>
    <a>The Importer<small>.ts</small></a>
    <a>The Session<small>.mjs</small></a>
</nav>
<div class="pick"><span>The Theme <small>· part 2 of 8</small></span><svg viewBox="0 0 16 16"><path d="m4 6 4 4 4-4"/></svg></div>

<article>
    <div class="crumb">Dougs Reference Manual / The library</div>
    <h1>The Theme</h1>
    <p class="lead">A place for the library's properties, and the one styled component that dresses the framework's marks with them.</p>
    <h2>What it is</h2>
    <p>The framework's Theme is bare, so the properties are this library's own. They are declared as fields and read by every rule beneath through the theme's own provision.</p>
    <p>The component is composed of parts, each a method returning a fragment of rules, so that a book changes one part and keeps the rest.</p>
    <h2>Fields</h2>
    <div class="field"><b>font<small>string</small></b><span>The family every book is set in.</span></div>
    <div class="field lit"><b>ink<small>color</small></b><span>The color of the words. Every rule that needs it reads this field, so a book that changes it keeps the look in another ink.</span></div>
    <div class="field"><b>paper<small>color</small></b><span>The color of the page behind them.</span></div>
    <div class="field"><b>link<small>color</small></b><span>The color of a reference to another place in the library.</span></div>
    <div class="next"><a>← The Book</a><a>Initializing a Library →</a></div>
</article>

<aside class="file">
    <div class="tabs"><span class="on">2-the-theme~code.tsx</span><span>where it is used</span><span class="copy"><svg viewBox="0 0 16 16"><rect x="5" y="5" width="8" height="8" rx="1.5"/><path d="M3 10.5V4a1 1 0 0 1 1-1h6.5"/></svg>Copy</span></div>
    <pre><span class="l" data-n="1"><span class="k">export class</span> <span class="t">$DougsTheme</span> <span class="k">extends</span> <span class="t">$Theme</span> {</span><span class="l" data-n="2">    font = <span class="s">"'Cormorant Garamond', serif"</span>;</span><span class="l" data-n="3">    size = <span class="s">'1.25rem'</span>;</span><span class="l hit" data-n="4">    ink = <span class="s">'#14262b'</span>;</span><span class="l" data-n="5">    paper = <span class="s">'#f5f1e8'</span>;</span><span class="l" data-n="6">    link = <span class="s">'#1c6a71'</span>;</span><span class="l" data-n="7">    style = selection.div<span class="s">\`</span>\${<span class="k">this</span>.parts()}<span class="s">\`</span>;</span><span class="l" data-n="8"></span><span class="l" data-n="9">    <span class="k">protected</span> parts(): <span class="t">RuleSet</span>[] {</span><span class="l" data-n="10">        <span class="k">return</span> [<span class="k">this</span>.page(), <span class="k">this</span>.levels(), <span class="k">this</span>.links()];</span><span class="l" data-n="11">    }</span><span class="l" data-n="12"></span><span class="l" data-n="13">    <span class="k">protected</span> page(): <span class="t">RuleSet</span> {</span><span class="l" data-n="14">        <span class="k">return</span> css<span class="s">\`</span></span><span class="l hit" data-n="15"><span class="s">            color: </span>\${({ theme }) =&gt; theme.ink}<span class="s">;</span></span><span class="l" data-n="16"><span class="s">            background: </span>\${({ theme }) =&gt; theme.paper}<span class="s">;</span></span><span class="l" data-n="17"><span class="s">        \`</span>;</span><span class="l" data-n="18">    }</span><span class="l" data-n="19">}</span></pre>
    <div class="used"><b>ink is read in 14 places</b>Lines 4 and 15 here, and in<span>The Book</span><span>The Frame</span><span>The Concept</span></div>
</aside>
</body>
</html>
`})]})]}),a.jsxs(i,{children:[a.jsx(d,{children:"7"}),a.jsx(o,{children:"[The Notebook](/dougs-design/#the-notebook)"}),a.jsx(t,{children:"Concept 7, after a computational notebook, as Observable sets it."}),a.jsx(t,{children:"A chapter is a column of cells: what I say, the file itself, and the part shown working, one under the other, so the manual proves each part as it explains it."}),a.jsxs(t,{children:[a.jsx(p,{}),a.jsx(r,{children:"/.design/3-every-concept~007-desk.png"}),a.jsx(r,{children:"/.design/3-every-concept~007-phone.png"})]}),a.jsxs(t,{children:[a.jsx(c,{}),a.jsx(n,{children:`<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>The Notebook</title>
<meta name="number" content="7">
<meta name="after" content="a computational notebook, as Observable sets it">
<meta name="idea" content="A chapter is a column of cells: what I say, the file itself, and the part shown working, one under the other, so the manual proves each part as it explains it.">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,400&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
<style>
    :root { --bg: #fbfaf7; --card: #ffffff; --line: #e8e4da; --ink: #22241f; --soft: #5b5e55; --faint: #8f9186; --moss: #3d7a4e; --moss-soft: #e8f2e6; --amber: #b06a12; }
    * { box-sizing: border-box; margin: 0; }
    body { background: var(--bg); color: var(--ink); font: 400 14px/1.5 'Inter', system-ui, sans-serif; }
    svg { width: 15px; height: 15px; stroke: currentColor; fill: none; stroke-width: 1.7; stroke-linecap: round; stroke-linejoin: round; flex: none; }
    .top { position: sticky; top: 0; z-index: 3; display: flex; align-items: center; gap: 14px; padding: 11px 26px; background: rgba(251, 250, 247, .94); backdrop-filter: blur(6px); border-bottom: 1px solid var(--line); }
    .top .mark { width: 26px; height: 26px; border-radius: 7px; background: var(--moss); color: #fff; display: grid; place-items: center; font: 600 13px/1 'Newsreader', serif; }
    .top .path { color: var(--faint); }
    .top .path b { color: var(--ink); font-weight: 500; }
    .top .right { margin-left: auto; display: flex; align-items: center; gap: 16px; color: var(--soft); }
    .top .pill { border: 1px solid var(--line); border-radius: 99px; padding: 4px 12px; background: #fff; }
    .top .pill.on { background: var(--moss-soft); border-color: transparent; color: var(--moss); font-weight: 500; }

    .wrap { display: grid; grid-template-columns: minmax(0, 1fr) 232px; gap: 44px; max-width: 1100px; margin: 0 auto; padding: 30px 26px 60px; }
    h1 { font: 600 38px/1.1 'Newsreader', serif; letter-spacing: -.01em; }
    .by { color: var(--faint); margin: 8px 0 24px; }
    .cell { display: grid; grid-template-columns: 34px minmax(0, 1fr); gap: 0 10px; margin-bottom: 18px; }
    .cell > i { font: 500 11px/1 'IBM Plex Mono'; font-style: normal; color: var(--faint); padding-top: 7px; text-align: right; }
    .cell.words p { font: 400 18px/1.6 'Newsreader', serif; max-width: 62ch; }
    .cell.words p + p { margin-top: 10px; }
    .cell.words code { font: 400 14px/1 'IBM Plex Mono'; background: var(--moss-soft); color: var(--moss); padding: 2px 5px; border-radius: 4px; }
    .box { background: var(--card); border: 1px solid var(--line); border-radius: 10px; overflow: hidden; }
    .box .head { display: flex; align-items: center; gap: 8px; padding: 7px 12px; border-bottom: 1px solid var(--line); font: 500 12px/1 'IBM Plex Mono'; color: var(--soft); background: #fdfcf9; }
    .box .head span { margin-left: auto; font: 400 12px/1 'Inter'; color: var(--faint); }
    pre { font: 400 13px/1.7 'IBM Plex Mono', monospace; padding: 12px 14px; overflow: auto; }
    .k { color: #7a3e9d; } .s { color: var(--amber); } .t { color: #1f6f8b; }
    .cell.file > i { color: var(--moss); }
    .cell.shown > i { color: var(--amber); }
    .spec { display: grid; grid-template-columns: 1.1fr 1fr; }
    .page { padding: 18px 20px; font: 400 17px/1.55 'Cormorant Garamond', 'Newsreader', serif; background: #f5f1e8; color: #14262b; }
    .page h3 { font: 500 26px/1.1 'Newsreader', serif; letter-spacing: .02em; margin-bottom: 8px; }
    .page a { color: #1c6a71; text-decoration: underline; text-underline-offset: 3px; }
    .sw { padding: 14px 16px; display: grid; gap: 9px; align-content: center; border-left: 1px solid var(--line); }
    .sw div { display: grid; grid-template-columns: 26px 46px 1fr; align-items: center; gap: 10px; font: 400 12.5px/1 'IBM Plex Mono'; color: var(--soft); }
    .sw u { width: 26px; height: 26px; border-radius: 6px; border: 1px solid rgba(0, 0, 0, .12); }
    .sw b { font-weight: 500; color: var(--ink); }

    .side { position: sticky; top: 74px; align-self: start; font-size: 13px; }
    .side h4 { font: 600 11px/1 'Inter'; letter-spacing: .06em; text-transform: uppercase; color: var(--faint); margin: 0 0 10px; }
    .side a { display: block; padding: 5px 0 5px 12px; border-left: 2px solid var(--line); color: var(--soft); }
    .side a.on { border-left-color: var(--moss); color: var(--ink); font-weight: 500; }
    .side .parts { margin-top: 26px; }
    .side .parts a { border: 0; padding: 4px 0; display: flex; justify-content: space-between; }
    .side .parts small { color: var(--faint); font: 400 11px/1.6 'IBM Plex Mono'; }

    @media (max-width: 760px) {
        .top { padding: 10px 14px; gap: 10px; }
        .top .path span, .top .right .pill:not(.on), .top .right > span { display: none; }
        .wrap { grid-template-columns: 1fr; padding: 20px 12px 40px; gap: 0; }
        .side { display: none; }
        h1 { font-size: 30px; }
        .cell { grid-template-columns: 22px minmax(0, 1fr); gap: 0 6px; }
        .cell.words p { font-size: 17px; }
        pre { font-size: 11.5px; }
        .box .head span { display: none; }
        .spec { grid-template-columns: 1fr; }
        .sw { border-left: 0; border-top: 1px solid var(--line); }
    }
</style>
</head>
<body>
<div class="top">
    <span class="mark">D</span>
    <span class="path"><span>Dougs Library / Dougs Reference Manual / </span><b>The Theme</b></span>
    <div class="right"><span>part 2 of 8</span><span class="pill">Words only</span><span class="pill on">Words, file and result</span></div>
</div>
<div class="wrap">
    <main>
        <h1>The Theme</h1>
        <div class="by">by The Librarian · the file is as it stands on disk, read 4 Oct 2026</div>

        <div class="cell words"><i>¶</i><div>
            <p>A place for the library's properties, and the one styled component that dresses the framework's marks with them. The framework's Theme is bare, so the properties are this library's own.</p>
        </div></div>

        <div class="cell file"><i>[1]</i><div class="box">
            <div class="head"><svg viewBox="0 0 16 16"><path d="M4 2.5h5l3 3v8H4zM9 2.5v3h3"/></svg>2-the-theme~code.tsx<span>lines 1 to 7 of 42</span></div>
<pre><span class="k">export class</span> <span class="t">$DougsTheme</span> <span class="k">extends</span> <span class="t">$Theme</span> {
    font = <span class="s">"'Cormorant Garamond', Georgia, serif"</span>;
    size = <span class="s">'1.25rem'</span>;
    ink = <span class="s">'#14262b'</span>;
    paper = <span class="s">'#f5f1e8'</span>;
    link = <span class="s">'#1c6a71'</span>;
}</pre>
        </div></div>

        <div class="cell shown"><i>→</i><div class="box">
            <div class="head"><svg viewBox="0 0 16 16"><circle cx="8" cy="8" r="5.5"/><path d="M8 5v3l2 1.5"/></svg>what those six lines make<span>drawn from the file above</span></div>
            <div class="spec">
                <div class="page"><h3>A First Chapter</h3>Lorem ipsum dolor sit amet, <a>consectetur adipiscing</a> elit, sed do eiusmod tempor incididunt ut labore.</div>
                <div class="sw">
                    <div><u style="background:#14262b"></u><b>ink</b>#14262b</div>
                    <div><u style="background:#f5f1e8"></u><b>paper</b>#f5f1e8</div>
                    <div><u style="background:#1c6a71"></u><b>link</b>#1c6a71</div>
                </div>
            </div>
        </div></div>

        <div class="cell words"><i>¶</i><div>
            <p>The component is composed of parts, each a method returning a fragment of rules. A book changes one part and keeps the rest; every rule names a mark, as <code>.pd-title</code> names a title wherever it stands.</p>
        </div></div>

        <div class="cell file"><i>[2]</i><div class="box">
            <div class="head"><svg viewBox="0 0 16 16"><path d="M4 2.5h5l3 3v8H4zM9 2.5v3h3"/></svg>2-the-theme~code.tsx<span>lines 9 to 11</span></div>
<pre>    <span class="k">protected</span> parts(): <span class="t">RuleSet</span>[] {
        <span class="k">return</span> [<span class="k">this</span>.page(), <span class="k">this</span>.levels(), <span class="k">this</span>.links()];
    }</pre>
        </div></div>
    </main>
    <aside class="side">
        <h4>In this chapter</h4>
        <a class="on">The properties</a><a>What they make</a><a>The parts</a><a>A book's own theme</a>
        <div class="parts">
            <h4>The manual</h4>
            <a>The Book<small>tsx</small></a><a style="color:var(--ink);font-weight:500">The Theme<small>tsx</small></a><a>Initializing a Library</a><a>The Pages<small>tsx</small></a><a>The Frame<small>tsx</small></a><a>The Concept<small>tsx</small></a>
        </div>
    </aside>
</div>
</body>
</html>
`})]})]}),a.jsxs(i,{children:[a.jsx(d,{children:"8"}),a.jsx(o,{children:"[The Workbench](/dougs-design/#the-workbench)"}),a.jsx(t,{children:"Concept 8, after a component workshop, as Storybook sets it."}),a.jsx(t,{children:"A part is met by using it: the part itself drawn alone on a bench, its properties beside it to change, and the line a chapter would write rewriting itself as they change."}),a.jsxs(t,{children:[a.jsx(p,{}),a.jsx(r,{children:"/.design/3-every-concept~008-desk.png"}),a.jsx(r,{children:"/.design/3-every-concept~008-phone.png"})]}),a.jsxs(t,{children:[a.jsx(c,{}),a.jsx(n,{children:`<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>The Workbench</title>
<meta name="number" content="8">
<meta name="after" content="a component workshop, as Storybook sets it">
<meta name="idea" content="A part is met by using it: the part itself drawn alone on a bench, its properties beside it to change, and the line a chapter would write rewriting itself as they change.">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&family=Geist+Mono:wght@400;500&family=Fraunces:opsz,wght@9..144,500&display=swap" rel="stylesheet">
<style>
    :root { --ui: #f4f5f7; --card: #ffffff; --line: #e2e4ea; --ink: #1b1d29; --soft: #565a6e; --faint: #8b8fa3; --violet: #5746d9; --violet-soft: #ecebfb; --ok: #1f8a5b; --sans: 'Geist', system-ui, sans-serif; --mono: 'Geist Mono', ui-monospace, monospace; }
    * { box-sizing: border-box; margin: 0; }
    html, body { height: 100%; }
    body { background: var(--ui); color: var(--ink); font: 400 13.5px/1.5 var(--sans); display: grid; grid-template: 48px minmax(0, 1fr) / 244px minmax(0, 1fr); overflow: hidden; }
    svg { width: 15px; height: 15px; stroke: currentColor; fill: none; stroke-width: 1.7; stroke-linecap: round; stroke-linejoin: round; flex: none; }
    input, textarea { font: inherit; color: inherit; }

    .bar { grid-column: 1 / -1; display: flex; align-items: center; gap: 12px; padding: 0 16px; background: var(--card); border-bottom: 1px solid var(--line); }
    .bar .mark { width: 24px; height: 24px; border-radius: 6px; background: var(--ink); color: #fff; display: grid; place-items: center; font: 600 12px/1 var(--sans); }
    .bar .path { color: var(--faint); }
    .bar .path b { color: var(--ink); font-weight: 500; }
    .bar .find { margin-left: auto; display: flex; align-items: center; gap: 8px; width: 260px; padding: 6px 10px; border: 1px solid var(--line); border-radius: 8px; color: var(--faint); background: var(--ui); }
    .bar .find kbd { margin-left: auto; font: 500 11px/1 var(--mono); border: 1px solid var(--line); border-radius: 4px; padding: 2px 5px; background: #fff; }
    .bar .count { color: var(--soft); }
    .pick { display: none; }

    .tree { background: var(--card); border-right: 1px solid var(--line); padding: 12px 10px; overflow: auto; }
    .tree h4 { font: 600 10.5px/1 var(--sans); letter-spacing: .08em; text-transform: uppercase; color: var(--faint); margin: 14px 8px 6px; }
    .tree h4:first-child { margin-top: 4px; }
    .tree .file { display: flex; align-items: center; gap: 6px; padding: 5px 8px; color: var(--soft); font-weight: 500; }
    .tree .file svg { width: 12px; height: 12px; color: var(--faint); }
    .tree a { display: flex; align-items: center; gap: 8px; padding: 4px 8px 4px 28px; border-radius: 6px; color: var(--soft); }
    .tree a i { width: 8px; height: 8px; border-radius: 2px; background: var(--k, #c3c6d4); flex: none; }
    .tree a small { margin-left: auto; font: 400 10.5px/1 var(--mono); color: var(--faint); }
    .tree a.on { background: var(--violet-soft); color: var(--violet); font-weight: 500; }
    .tree a.on small { color: var(--violet); }
    .figure { --k: #e0795a; } .format { --k: #3b9ab2; } .mark-k { --k: #b7a13a; } .para { --k: #7d6bd6; } .theme { --k: #4aa36c; }

    .bench { display: grid; grid-template-rows: auto minmax(0, 1fr) auto; min-width: 0; min-height: 0; }
    .tools { display: flex; align-items: center; gap: 10px; padding: 9px 16px; background: var(--card); border-bottom: 1px solid var(--line); }
    .tools h1 { font: 600 16px/1.2 var(--sans); }
    .tools .kind { font: 500 11px/1 var(--mono); color: #b0522f; background: #fbeee8; border-radius: 99px; padding: 4px 9px; }
    .tools .from { color: var(--faint); font: 400 12px/1 var(--mono); }
    .tools .right { margin-left: auto; display: flex; align-items: center; gap: 8px; }
    .seg { display: flex; border: 1px solid var(--line); border-radius: 8px; overflow: hidden; background: var(--ui); }
    .seg span { padding: 5px 10px; color: var(--soft); display: flex; align-items: center; gap: 6px; cursor: pointer; }
    .seg span.on { background: #fff; color: var(--ink); font-weight: 500; box-shadow: 0 0 0 1px var(--line); }
    .seg u { width: 11px; height: 11px; border-radius: 50%; border: 1px solid rgba(0, 0, 0, .18); }
    .alone { color: var(--violet); font-weight: 500; white-space: nowrap; }

    .canvas { position: relative; display: grid; place-items: center; overflow: auto; padding: 22px; background: radial-gradient(circle, #cfd2dc 1px, transparent 1.3px) 0 0 / 18px 18px, #fafbfc; }
    .canvas.night { background: radial-gradient(circle, #2b4a52 1px, transparent 1.3px) 0 0 / 18px 18px, #0f2329; }
    .part { width: 330px; }
    .concept { background: #fff; border: 1px solid #e3ded2; border-radius: 14px; overflow: hidden; box-shadow: 0 10px 30px -14px rgba(20, 30, 50, .35); }
    .concept .shot { position: relative; aspect-ratio: 16 / 9.4; background: #f5f1e8; padding: 16px 16px 0; overflow: hidden; }
    .concept .shot .row { display: flex; gap: 8px; align-items: flex-end; height: 100%; }
    .concept .shot .row b { flex: 1; border-radius: 4px 4px 0 0; }
    .concept .shot .tel { position: absolute; right: 12px; bottom: -10px; width: 58px; height: 104px; border-radius: 10px; border: 3px solid #1b1d29; background: #fff; padding: 8px 6px; display: grid; gap: 4px; align-content: start; }
    .concept .shot .tel b { height: 22px; border-radius: 3px; }
    .concept .words { padding: 13px 16px 16px; }
    .concept .name { font: 500 21px/1.15 'Fraunces', Georgia, serif; color: #14262b; }
    .concept .after { font-size: 12px; color: #6f7b78; margin: 2px 0 8px; }
    .concept .says { font-size: 13.5px; line-height: 1.5; color: #3a4a4c; }
    .measure { margin-top: 10px; text-align: center; font: 400 11px/1 var(--mono); color: var(--faint); }
    .night .measure { color: #7fa3a8; }

    .dock { background: var(--card); border-top: 1px solid var(--line); min-width: 0; }
    .tabs { display: flex; gap: 2px; padding: 0 12px; border-bottom: 1px solid var(--line); }
    .tabs span { padding: 9px 12px; color: var(--soft); border-bottom: 2px solid transparent; margin-bottom: -1px; white-space: nowrap; }
    .tabs span.on { color: var(--violet); border-bottom-color: var(--violet); font-weight: 500; }
    .tabs span em { font-style: normal; font: 500 10.5px/1 var(--mono); background: var(--ui); border-radius: 99px; padding: 2px 6px; margin-left: 4px; color: var(--soft); }
    .panes { display: grid; grid-template-columns: minmax(0, 1.25fr) minmax(0, 1fr); }
    .props { padding: 4px 16px 12px; }
    .prop { display: grid; grid-template-columns: 76px minmax(0, 1fr) minmax(0, 1.15fr); gap: 14px; align-items: center; padding: 7px 0; border-bottom: 1px solid var(--line); }
    .prop:last-child { border-bottom: 0; }
    .prop b { font: 500 12.5px/1.4 var(--mono); }
    .prop b small { display: block; font: 400 11px/1.3 var(--sans); color: var(--faint); }
    .prop p { color: var(--soft); font-size: 12.5px; line-height: 1.4; }
    .prop input, .prop textarea { width: 100%; border: 1px solid var(--line); border-radius: 7px; padding: 6px 9px; background: var(--ui); resize: none; outline: none; }
    .prop input:focus, .prop textarea:focus { border-color: var(--violet); background: #fff; box-shadow: 0 0 0 3px var(--violet-soft); }
    .prop .lits { display: flex; flex-wrap: wrap; gap: 4px; }
    .prop .lits span { font: 400 11px/1 var(--mono); background: var(--ui); border: 1px solid var(--line); border-radius: 5px; padding: 4px 6px; color: var(--soft); }
    .written { border-left: 1px solid var(--line); padding: 12px 16px; min-width: 0; display: flex; flex-direction: column; gap: 8px; }
    .written .head { display: flex; align-items: center; color: var(--faint); font-size: 12px; }
    .written .head span { margin-left: auto; display: flex; align-items: center; gap: 5px; color: var(--soft); }
    .written pre { flex: 1; font: 400 12px/1.7 var(--mono); background: #171a2b; color: #d9dcf2; border-radius: 9px; padding: 12px 14px; overflow: auto; white-space: pre-wrap; word-break: break-word; }
    .written pre .t { color: #9db7ff; } .written pre .a { color: #c8a6ff; } .written pre .s { color: #ffcf8a; } .written pre .c { color: #6f7598; }
    .written .ok { display: flex; align-items: center; gap: 6px; color: var(--ok); font-size: 12px; }

    @media (max-width: 760px) {
        html, body { height: auto; }
        body { display: block; overflow: visible; }
        .bar { position: sticky; top: 0; z-index: 3; height: 50px; }
        .bar .path, .bar .find, .bar .count { display: none; }
        .pick { display: flex; align-items: center; gap: 8px; flex: 1; font-weight: 500; font-size: 15px; }
        .pick small { color: var(--faint); font-weight: 400; font-size: 12.5px; }
        .pick svg { margin-left: auto; }
        .tree { display: none; }
        .tools { flex-wrap: wrap; padding: 10px 14px; }
        .tools h1, .tools .from, .alone, .seg.width { display: none; }
        .tools .right { margin-left: auto; }
        .canvas { padding: 22px 14px 18px; overflow: visible; }
        .part { width: min(330px, 100%); }
        .tabs { overflow-x: auto; padding: 0 6px; scrollbar-width: none; }
        .panes { grid-template-columns: minmax(0, 1fr); }
        .props { padding: 2px 14px 8px; }
        .prop { grid-template-columns: minmax(0, 1fr); gap: 5px; padding: 11px 0; }
        .prop b small { display: inline; margin-left: 6px; }
        .written { border-left: 0; border-top: 1px solid var(--line); padding: 14px; }
        input, textarea { font-size: 16px; }
    }
</style>
</head>
<body>
<header class="bar">
    <span class="mark">D</span>
    <span class="path">Dougs Library / <b>Dougs Reference Manual</b></span>
    <span class="pick">Concept <small>a figure · part 9 of 11</small><svg viewBox="0 0 16 16"><path d="m4 6 4 4 4-4"/></svg></span>
    <span class="find"><svg viewBox="0 0 16 16"><circle cx="7" cy="7" r="4.5"/><path d="M10.5 10.5 14 14"/></svg>Find a part<kbd>/</kbd></span>
    <span class="count">11 parts in 6 files</span>
</header>

<nav class="tree">
    <h4>The library</h4>
    <div class="file"><svg viewBox="0 0 16 16"><path d="m4 6 4 4 4-4"/></svg>The Book</div>
    <a class="para"><i></i>DougsLibrary<small>book</small></a>
    <div class="file"><svg viewBox="0 0 16 16"><path d="m4 6 4 4 4-4"/></svg>The Theme</div>
    <a class="theme"><i></i>DougsTheme<small>theme</small></a>
    <h4>The design book</h4>
    <div class="file"><svg viewBox="0 0 16 16"><path d="m4 6 4 4 4-4"/></svg>The Pages</div>
    <a class="format"><i></i>Paged<small>format</small></a>
    <a class="mark-k"><i></i>Entry<small>mark</small></a>
    <a class="mark-k"><i></i>Appendix<small>mark</small></a>
    <div class="file"><svg viewBox="0 0 16 16"><path d="m4 6 4 4 4-4"/></svg>The Frame</div>
    <a class="para"><i></i>Masthead<small>paragraph</small></a>
    <a class="format"><i></i>Gallery<small>format</small></a>
    <div class="file"><svg viewBox="0 0 16 16"><path d="m4 6 4 4 4-4"/></svg>The Concept</div>
    <a class="figure on"><i></i>Concept<small>figure</small></a>
    <a class="mark-k"><i></i>Concepts<small>mark</small></a>
    <a class="para"><i></i>Viewer<small>paragraph</small></a>
    <div class="file"><svg viewBox="0 0 16 16"><path d="m4 6 4 4 4-4"/></svg>The Theme</div>
    <a class="theme"><i></i>DesignTheme<small>theme</small></a>
</nav>

<main class="bench">
    <div class="tools">
        <h1>Concept</h1><span class="kind">a figure</span><span class="from">92-the-concept~code.tsx</span>
        <div class="right">
            <div class="seg paper"><span class="on" data-paper="day"><u style="background:#fafbfc"></u>Paper</span><span data-paper="night"><u style="background:#0f2329"></u>Dark</span></div>
            <div class="seg width"><span class="on">Desk</span><span>Phone</span></div>
            <span class="alone">Open alone ↗</span>
        </div>
    </div>

    <div class="canvas" id="canvas">
        <div class="part">
            <div class="concept">
                <div class="shot">
                    <div class="row"><b style="height:78%;background:#b4553f"></b><b style="height:92%;background:#2f6b5f"></b><b style="height:70%;background:#33507f"></b><b style="height:86%;background:#c79a3b"></b><b style="height:64%;background:#6d4a7c"></b><b style="height:80%;background:#3f7f8c"></b></div>
                    <div class="tel"><b style="background:#b4553f"></b><b style="background:#2f6b5f"></b><b style="background:#33507f"></b></div>
                </div>
                <div class="words">
                    <div class="name" data-shows="named">The Shelf</div>
                    <div class="after">after <span data-shows="draws">a reading app's bookshelf</span></div>
                    <div class="says" data-shows="says">The library opens on its books, face out, and the one last read is already open.</div>
                </div>
            </div>
            <div class="measure">330 wide · drawn by write()</div>
        </div>
    </div>

    <section class="dock">
        <div class="tabs"><span class="on">Properties<em>4</em></span><span>The file</span><span>Used in<em>4</em></span><span>The chapter</span></div>
        <div class="panes">
            <div class="props">
                <div class="prop"><b>named<small>string</small></b><p>The concept's name, set under its picture.</p><input id="named" value="The Shelf"></div>
                <div class="prop"><b>draws<small>string</small></b><p>What the concept is drawn after.</p><input id="draws" value="a reading app's bookshelf"></div>
                <div class="prop"><b>says<small>string</small></b><p>The idea, in one sentence.</p><textarea id="says" rows="2">The library opens on its books, face out, and the one last read is already open.</textarea></div>
                <div class="prop"><b>text<small>three literals</small></b><p>The desk picture, the phone picture and the page itself.</p><div class="lits"><span>desk.png</span><span>phone.png</span><span>.html</span></div></div>
            </div>
            <div class="written">
                <div class="head">As a chapter writes it<span><svg viewBox="0 0 16 16"><rect x="5" y="5" width="8" height="8" rx="1.5"/><path d="M3 10.5V4a1 1 0 0 1 1-1h6.5"/></svg>Copy</span></div>
<pre>&lt;<span class="t">Concept</span>
    <span class="a">named</span>=<span class="s">"<span data-shows="named">The Shelf</span>"</span>
    <span class="a">draws</span>=<span class="s">"<span data-shows="draws">a reading app's bookshelf</span>"</span>
    <span class="a">says</span>=<span class="s">"<span data-shows="says">The library opens on its books, face out, and the one last read is already open.</span>"</span>&gt;
    <span class="c">!&#91;&#91; 01-the-shelf-desk.png &#93;&#93; !&#91;&#91; 01-the-shelf-phone.png &#93;&#93; !&#91;&#91; 01-the-shelf.html &#93;&#93;</span>
&lt;/<span class="t">Concept</span>&gt;</pre>
                <div class="ok"><svg viewBox="0 0 16 16"><path d="m3.5 8.5 3 3 6-7"/></svg>Three literals, each beside the chapter. It would bind.</div>
            </div>
        </div>
    </section>
</main>

<script>
    for (const field of document.querySelectorAll('.prop input, .prop textarea'))
        field.addEventListener('input', () => { for (const shown of document.querySelectorAll(\`[data-shows="\${field.id}"]\`)) shown.textContent = field.value; });
    for (const paper of document.querySelectorAll('.seg.paper span'))
        paper.addEventListener('click', () => {
            for (const other of paper.parentElement.children) other.classList.toggle('on', other === paper);
            document.getElementById('canvas').classList.toggle('night', paper.dataset.paper === 'night');
        });
<\/script>
</body>
</html>
`})]})]})]}),a.jsxs(i,{children:[a.jsx(o,{children:"[A Grouping of Projects](/dougs-design/#a-grouping-of-projects)"}),a.jsx(t,{children:"A page for one grouping of my conversations, such as everything kept with Claude, with its projects and the conversations in each. These are different ways to see and move through many of them."}),a.jsxs(i,{children:[a.jsx(d,{children:"9"}),a.jsx(o,{children:"[The Database](/dougs-design/#the-database)"}),a.jsx(t,{children:"Concept 9, after Notion."}),a.jsx(t,{children:"Every conversation is a row with properties — project, AI, kept, chapters, citations — so one set of records is seen as a table, a board or a gallery, and opening a row peeks its page beside the list."}),a.jsxs(t,{children:[a.jsx(p,{}),a.jsx(r,{children:"/.design/3-every-concept~009-desk.png"}),a.jsx(r,{children:"/.design/3-every-concept~009-phone.png"})]}),a.jsxs(t,{children:[a.jsx(m,{}),"For the catalogue across projects I like 9 the best, and I might even like a splash of the Claude theme to delineate that this view is Claude projects."]}),a.jsxs(t,{children:[a.jsx(c,{}),a.jsx(n,{children:`<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>The Database</title>
<meta name="number" content="9">
<meta name="said" content="For the catalogue across projects I like 9 the best, and I might even like a splash of the Claude theme to delineate that this view is Claude projects.">
<meta name="after" content="Notion">
<meta name="idea" content="Every conversation is a row with properties — project, AI, kept, chapters, citations — so one set of records is seen as a table, a board or a gallery, and opening a row peeks its page beside the list.">
<style>
    :root { --ink: #37352f; --soft: #787774; --faint: #9b9a97; --line: #e9e9e7; --side: #f7f7f5; --hover: #efefed; --blue: #2383e2;
        --tag-first: #d3e5ef; --tag-second: #dbeddb; --tag-third: #fadec9; --tag-ai: #e8deee; }
    * { box-sizing: border-box; }
    body { margin: 0; font: 14px/1.5 ui-sans-serif, -apple-system, "Segoe UI", Helvetica, Arial, sans-serif; color: var(--ink); background: #fff; }
    .app { display: grid; grid-template-columns: 240px minmax(0, 1fr) 400px; min-height: 100vh; }
    .side { background: var(--side); border-right: 1px solid var(--line); padding: 12px 8px; font-size: 14px; color: #5f5e5b; }
    .side .who { display: flex; align-items: center; gap: 8px; padding: 6px 8px; font-weight: 600; color: var(--ink); }
    .side .who b { width: 22px; height: 22px; border-radius: 4px; background: #e3d6c8; display: grid; place-items: center; font-size: 12px; color: #6b5440; }
    .side .head { margin: 18px 8px 4px; font-size: 12px; font-weight: 600; color: var(--faint); }
    .side a { display: flex; justify-content: space-between; padding: 3px 8px 3px 10px; border-radius: 4px; color: inherit; text-decoration: none; }
    .side a:hover { background: var(--hover); }
    .side a.on { background: #e6e5e2; color: var(--ink); font-weight: 500; }
    .side a span { color: var(--faint); font-size: 12px; }
    .side .in { padding-left: 26px; }
    main { padding: 28px 32px 60px; min-width: 0; }
    .crumb { font-size: 13px; color: var(--soft); margin-bottom: 26px; }
    h1 { font-size: 34px; line-height: 1.2; margin: 0 0 6px; font-weight: 700; }
    .lede { color: var(--soft); margin: 0 0 22px; }
    .views { display: flex; gap: 4px; border-bottom: 1px solid var(--line); margin-bottom: 4px; font-size: 14px; }
    .views span { padding: 6px 10px; color: var(--soft); border-bottom: 2px solid transparent; margin-bottom: -1px; }
    .views span.on { color: var(--ink); border-bottom-color: var(--ink); font-weight: 500; }
    .views em { margin-left: auto; font-style: normal; color: var(--faint); padding: 6px 4px; }
    table { width: 100%; border-collapse: collapse; font-size: 14px; }
    th { text-align: left; font-weight: 400; color: var(--soft); font-size: 13px; padding: 8px 8px; border-bottom: 1px solid var(--line); white-space: nowrap; }
    td { padding: 7px 8px; border-bottom: 1px solid var(--line); white-space: nowrap; }
    tr.open td { background: #f2f7fc; }
    td.name { font-weight: 500; }
    td.num { text-align: right; color: var(--soft); }
    .tag { display: inline-block; padding: 0 6px; border-radius: 3px; font-size: 13px; line-height: 20px; }
    .first { background: var(--tag-first); } .second { background: var(--tag-second); } .third { background: var(--tag-third); } .ai { background: var(--tag-ai); }
    .board-title { margin: 34px 0 10px; font-size: 13px; color: var(--soft); }
    .board { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 12px; }
    .lane h3 { margin: 0 0 8px; font-size: 13px; font-weight: 500; }
    .lane h3 .tag { margin-right: 6px; }
    .card { background: #fff; border-radius: 6px; box-shadow: 0 0 0 1px rgba(15,15,15,.08), 0 2px 4px rgba(15,15,15,.06); padding: 9px 10px; margin-bottom: 8px; }
    .card b { display: block; font-weight: 500; }
    .card small { color: var(--soft); }
    .peek { border-left: 1px solid var(--line); box-shadow: -8px 0 24px rgba(15,15,15,.05); padding: 22px 30px 40px; background: #fff; overflow: hidden; }
    .peek .bar { display: flex; gap: 14px; color: var(--faint); font-size: 13px; margin-bottom: 22px; }
    .peek h2 { font-size: 26px; margin: 0 0 14px; line-height: 1.25; }
    .props { display: grid; grid-template-columns: 110px 1fr; gap: 7px 10px; font-size: 14px; margin-bottom: 18px; }
    .props dt { color: var(--soft); }
    .props dd { margin: 0; }
    .props dd a { color: var(--ink); text-decoration: underline; text-decoration-color: #c9c8c5; }
    .peek hr { border: 0; border-top: 1px solid var(--line); margin: 16px 0; }
    .peek h4 { margin: 0 0 10px; font-size: 16px; }
    .turn { margin: 0 0 12px; }
    .turn .who { font-size: 12px; font-weight: 600; color: var(--soft); text-transform: uppercase; letter-spacing: .04em; }
    .turn.mine p { color: #5f5e5b; font-style: italic; }
    .turn p { margin: 2px 0 0; }
    mark { background: #fbf3db; border-bottom: 2px solid #f1d57a; }
    .callout { display: flex; gap: 10px; background: #fbf3db; border-radius: 6px; padding: 10px 12px; font-size: 14px; margin: 6px 0 14px; }
    .callout small { display: block; color: var(--soft); }
    .topbar { display: none; }
    @media (max-width: 700px) {
        .app { grid-template-columns: 1fr; }
        .side { display: none; }
        .topbar { display: flex; align-items: center; gap: 12px; position: sticky; top: 0; background: #fff; border-bottom: 1px solid var(--line); padding: 10px 14px; font-weight: 600; z-index: 2; }
        .topbar i { font-style: normal; font-size: 18px; color: var(--soft); }
        main { padding: 16px 14px 20px; }
        .crumb { display: none; }
        h1 { font-size: 26px; }
        .views { overflow-x: auto; overflow-y: hidden; white-space: nowrap; scrollbar-width: none; } .views em { display: none; }
        table, thead, tbody, tr, td { display: block; width: auto; }
        thead { display: none; }
        tr { border: 1px solid var(--line); border-radius: 8px; padding: 8px 10px; margin-bottom: 8px; }
        tr.open { border-color: #b7d4f0; background: #f2f7fc; }
        tr.open td { background: none; }
        td { border: 0; padding: 1px 0; display: inline-block; margin-right: 6px; }
        td.name { display: block; font-size: 15px; }
        td.num::after { content: ' chapters'; }
        .board, .board-title { display: none; }
        .peek { border-left: 0; border-top: 1px solid var(--line); box-shadow: none; padding: 18px 14px 40px; }
        .props { grid-template-columns: 100px 1fr; }
    }
</style>
</head>
<body>
<div class="topbar"><i>☰</i> Conversations with Claude</div>
<div class="app">
    <nav class="side">
        <div class="who"><b>D</b> Dougs Library</div>
        <div class="head">Books</div>
        <a href="#">Dougs Story</a>
        <a href="#">Dougs Design</a>
        <a href="#">Dougs Reference Manual</a>
        <div class="head">Conversations</div>
        <a href="#" class="on">With Claude <span>212</span></a>
        <a href="#" class="in">A First Project <span>38</span></a>
        <a href="#" class="in">A Second Project <span>91</span></a>
        <a href="#" class="in">A Third Project <span>83</span></a>
        <a href="#">With ChatGPT <span>147</span></a>
        <div class="head">Mine</div>
        <a href="#">Notes</a>
        <a href="#">Citations</a>
    </nav>
    <main>
        <div class="crumb">Dougs Library / Conversations / With Claude</div>
        <h1>Conversations with Claude</h1>
        <p class="lede">212 conversations, each kept as a book. One set of records, seen any way.</p>
        <div class="views"><span class="on">▤ Table</span><span>▥ Board</span><span>▦ Gallery</span><span>▦ Calendar</span><em>Filter · Sort · New</em></div>
        <table>
            <thead><tr><th>Aa Name</th><th>Project</th><th>Kept</th><th>Chapters</th><th>Cited in</th></tr></thead>
            <tbody>
                <tr><td class="name">Quis Nostrud</td><td><span class="tag first">A First Project</span></td><td>1 Oct 2026</td><td class="num">6</td><td></td></tr>
                <tr><td class="name">Ut Enim ad Minim</td><td><span class="tag first">A First Project</span></td><td>27 Sep 2026</td><td class="num">3</td><td></td></tr>
                <tr><td class="name">Magna Aliqua</td><td><span class="tag third">A Third Project</span></td><td>20 Sep 2026</td><td class="num">11</td><td></td></tr>
                <tr><td class="name">Tempor Incididunt</td><td><span class="tag second">A Second Project</span></td><td>12 Sep 2026</td><td class="num">7</td><td></td></tr>
                <tr class="open"><td class="name">Lorem Ipsum Dolor</td><td><span class="tag first">A First Project</span></td><td>9 Sep 2026</td><td class="num">8</td><td>2 books</td></tr>
                <tr><td class="name">Sed Do Eiusmod</td><td><span class="tag first">A First Project</span></td><td>5 Sep 2026</td><td class="num">2</td><td></td></tr>
                <tr><td class="name">Adipiscing Elit</td><td><span class="tag first">A First Project</span></td><td>2 Sep 2026</td><td class="num">9</td><td>1 book</td></tr>
                <tr><td class="name">Sit Amet Consectetur</td><td><span class="tag first">A First Project</span></td><td>21 Jul 2026</td><td class="num">14</td><td></td></tr>
            </tbody>
        </table>
        <div class="board-title">The same records as a Board, by project</div>
        <div class="board">
            <div class="lane"><h3><span class="tag first">A First Project</span> 38</h3>
                <div class="card"><b>Quis Nostrud</b><small>1 Oct · 6 chapters</small></div>
                <div class="card"><b>Lorem Ipsum Dolor</b><small>9 Sep · 8 chapters · cited 2×</small></div>
                <div class="card"><b>Adipiscing Elit</b><small>2 Sep · 9 chapters</small></div></div>
            <div class="lane"><h3><span class="tag second">A Second Project</span> 91</h3>
                <div class="card"><b>Tempor Incididunt</b><small>12 Sep · 7 chapters</small></div></div>
            <div class="lane"><h3><span class="tag third">A Third Project</span> 83</h3>
                <div class="card"><b>Magna Aliqua</b><small>20 Sep · 11 chapters</small></div></div>
        </div>
    </main>
    <aside class="peek">
        <div class="bar"><span>⇥ Close</span><span>⤢ Open as page</span><span>Chapter 1 of 8</span></div>
        <h2>Lorem Ipsum Dolor</h2>
        <dl class="props">
            <dt>Project</dt><dd><span class="tag first">A First Project</span></dd>
            <dt>AI</dt><dd><span class="tag ai">Claude</span></dd>
            <dt>Kept</dt><dd>9 September 2026</dd>
            <dt>Chapters</dt><dd>8</dd>
            <dt>Cited in</dt><dd><a href="#">Sit Amet Consectetur</a> ch. 3, <a href="#">Dougs Story</a> ch. 1</dd>
            <dt>Cites</dt><dd><a href="#">Adipiscing Elit</a> ch. 2</dd>
            <dt>Notes</dt><dd>1</dd>
        </dl>
        <hr>
        <h4>A First Chapter</h4>
        <div class="turn mine"><div class="who">The Librarian</div><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit? Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></div>
        <div class="turn"><div class="who">Claude</div><p>Ut enim ad minim veniam, quis nostrud exercitation. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <mark>Excepteur sint occaecat cupidatat non proident</mark>, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>
        <div class="callout">✎<div>Lorem ipsum, a note of mine beside the passage it is about.<small>3 Oct 2026</small></div></div>
        <div class="turn mine"><div class="who">The Librarian</div><p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit?</p></div>
        <div class="turn"><div class="who">Claude</div><p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.</p></div>
    </aside>
</div>
</body>
</html>
`})]})]}),a.jsxs(i,{children:[a.jsx(d,{children:"10"}),a.jsx(o,{children:"[The Map](/dougs-design/#the-map)"}),a.jsx(t,{children:"Concept 10, after market maps and disk-usage maps — the squarified treemap."}),a.jsx(t,{children:"The grouping is a map of where the thinking went: each project a region as large as the conversations it holds, each conversation a tile as large as its chapters and as dark as it is recent, so the whole of it is seen at once and any tile is one look from its name."}),a.jsxs(t,{children:[a.jsx(p,{}),a.jsx(r,{children:"/.design/3-every-concept~010-desk.png"}),a.jsx(r,{children:"/.design/3-every-concept~010-phone.png"})]}),a.jsxs(t,{children:[a.jsx(c,{}),a.jsx(n,{children:`<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>The Map</title>
<meta name="number" content="10">
<meta name="after" content="market maps and disk-usage maps — the squarified treemap">
<meta name="idea" content="The grouping is a map of where the thinking went: each project a region as large as the conversations it holds, each conversation a tile as large as its chapters and as dark as it is recent, so the whole of it is seen at once and any tile is one look from its name.">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>
    :root { --ink: #1c2230; --soft: #667085; --line: #e3e7ee; --bg: #f4f6fa; --font: 'Space Grotesk', system-ui, sans-serif; }
    * { box-sizing: border-box; }
    body { margin: 0; font: 14px/1.45 var(--font); color: var(--ink); background: var(--bg); }
    .mast { display: flex; align-items: center; gap: 10px; padding: 12px 28px; background: #fff; border-bottom: 1px solid var(--line); font-size: 13px; color: var(--soft); }
    .mast b { color: var(--ink); font-size: 15px; }
    .mast .find { margin-left: auto; border: 1px solid var(--line); border-radius: 8px; padding: 6px 12px; width: 240px; color: #98a2b3; }
    .head { display: flex; align-items: flex-end; gap: 18px; padding: 16px 28px 12px; flex-wrap: wrap; }
    h1 { font-size: 30px; line-height: 1.1; margin: 0; font-weight: 700; letter-spacing: -.01em; }
    .sub { color: var(--soft); margin-top: 4px; }
    .controls { margin-left: auto; display: flex; gap: 8px; flex-wrap: wrap; }
    .controls span { background: #fff; border: 1px solid var(--line); border-radius: 8px; padding: 6px 10px; font-size: 13px; color: var(--soft); }
    .controls span b { color: var(--ink); font-weight: 600; }
    .body { display: grid; grid-template-columns: minmax(0, 1fr) 300px; gap: 20px; padding: 0 28px 30px; }
    .crumb { font-size: 13px; color: var(--soft); margin: 0 0 8px; }
    .crumb b { color: var(--ink); }
    .map { position: relative; width: 100%; background: #fff; border-radius: 10px; overflow: hidden; box-shadow: 0 1px 2px rgba(16,24,40,.06), 0 0 0 1px var(--line); }
    .map.desk { aspect-ratio: 884 / 560; }
    .map.phone { display: none; aspect-ratio: 358 / 640; }
    .region { position: absolute; background: #fff; }
    .rname { position: absolute; left: 6px; top: 3px; font-size: 12px; font-weight: 600; white-space: nowrap; }
    .rname em { font-style: normal; font-weight: 400; color: var(--soft); margin-left: 4px; }
    .tile { position: absolute; box-shadow: inset 0 0 0 1px #fff; overflow: hidden; padding: 5px 7px; color: var(--ink); }
    .tile.dark { color: #fff; }
    .tile b { display: block; font-size: 12px; line-height: 1.2; font-weight: 600; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
    .tile small { font-size: 11px; opacity: .85; white-space: nowrap; }
    .tile b.one { font-size: 10.5px; font-weight: 500; }
    .tile { padding: 4px 6px; }
    .tile.sel { box-shadow: inset 0 0 0 1px #fff, inset 0 0 0 3px var(--ink); z-index: 2; }
    aside { display: flex; flex-direction: column; gap: 14px; }
    .card { background: #fff; border-radius: 10px; padding: 14px 16px; box-shadow: 0 1px 2px rgba(16,24,40,.06), 0 0 0 1px var(--line); }
    .card h3 { margin: 0 0 8px; font-size: 12px; text-transform: uppercase; letter-spacing: .06em; color: var(--soft); }
    .card h2 { margin: 0 0 4px; font-size: 20px; }
    .chip { display: inline-block; padding: 1px 8px; border-radius: 10px; font-size: 12px; font-weight: 600; background: hsl(172 50% 90%); color: hsl(172 60% 24%); }
    .facts { display: grid; grid-template-columns: 1fr 1fr; gap: 6px 10px; margin: 10px 0; font-size: 13px; }
    .facts b { display: block; font-size: 17px; }
    .facts span { color: var(--soft); }
    .card p { margin: 0 0 12px; color: #344054; font-size: 13px; }
    .btns { display: flex; gap: 8px; }
    .btns span { padding: 7px 12px; border-radius: 8px; font-weight: 600; font-size: 13px; border: 1px solid var(--line); }
    .btns span:first-child { background: var(--ink); color: #fff; border-color: var(--ink); }
    .scale { display: grid; gap: 6px; font-size: 12px; color: var(--soft); }
    .scale div { display: flex; align-items: center; gap: 8px; }
    .scale i { flex: 1; height: 10px; border-radius: 5px; }
    .tot { display: grid; grid-template-columns: 1fr auto; gap: 2px 8px; margin-bottom: 10px; font-size: 13px; }
    .tot span::before { content: ''; display: inline-block; width: 9px; height: 9px; border-radius: 2px; background: hsl(var(--h) 55% 45%); margin-right: 6px; }
    .tot i { grid-column: 1 / -1; height: 6px; border-radius: 3px; display: block; }
    .tot small { grid-column: 1 / -1; color: var(--soft); }
    @media (max-width: 700px) {
        .mast { padding: 10px 16px; } .mast > span:not(.find) { display: none; } .mast .find { width: auto; font-size: 0; padding: 6px 10px; } .mast .find::before { content: '⌕'; font-size: 15px; }
        .head { padding: 14px 16px 10px; } h1 { font-size: 26px; }
        .controls { margin-left: 0; flex-wrap: nowrap; overflow-x: auto; width: 100%; scrollbar-width: none; } .controls span { flex: none; }
        .body { display: block; padding: 0 16px 30px; }
        .map.desk { display: none; } .map.phone { display: block; }
        aside { margin-top: 14px; }
    }
</style>
</head>
<body>
<header class="mast"><b>Dougs Library</b><span>›</span><span>Conversations with Claude</span><span class="find">⌕ Find on the map</span></header>
<div class="head">
    <div><h1>Conversations with Claude</h1><div class="sub">212 conversations in three projects · 1090 chapters · kept in 2026</div></div>
    <div class="controls"><span>Size by <b>chapters ▾</b></span><span>Colour by <b>how recent ▾</b></span><span>Range <b>all of 2026 ▾</b></span></div>
</div>
<div class="body">
    <section>
        <div class="crumb"><b>All projects</b> · click a region to zoom into it, a tile to see it</div>
        <div class="map desk"><div class="region" style="left:0.000%;top:0.000%;width:42.925%;height:100.000%"><span class="rname">A Second Project <em>91 · 442 ch</em></span></div><span class="tile dark" title="Consequat Fugiat Laborum · 12 chapters · kept 4 Jul 2026" style="left:0.226%;top:3.929%;width:9.267%;height:11.910%;background:hsl(34 52% 51%)"><b class="one">Consequat Fugiat Laborum</b></span><span class="tile dark" title="Occaecat Amet Sint · 11 chapters · kept 16 Aug 2026" style="left:9.493%;top:3.929%;width:8.494%;height:11.910%;background:hsl(34 52% 43%)"><b class="one">Occaecat Amet Sint</b></span><span class="tile" title="Mollit Laborum Sit · 11 chapters · kept 16 Feb 2026" style="left:17.987%;top:3.929%;width:8.494%;height:11.910%;background:hsl(34 52% 76%)"><b class="one">Mollit Laborum Sit</b></span><span class="tile" title="Sunt Ullamco Sint · 11 chapters · kept 17 Feb 2026" style="left:26.482%;top:3.929%;width:8.494%;height:11.910%;background:hsl(34 52% 75%)"><b class="one">Sunt Ullamco Sint</b></span><span class="tile dark" title="Officia Anim · 10 chapters · kept 4 Oct 2026" style="left:34.976%;top:3.929%;width:7.722%;height:11.910%;background:hsl(34 52% 34%)"><b class="one">Officia Anim</b></span><span class="tile dark" title="Sed Labore Tempor · 10 chapters · kept 26 Sep 2026" style="left:0.226%;top:15.839%;width:7.323%;height:12.560%;background:hsl(34 52% 35%)"><b class="one">Sed Labore Tempor</b></span><span class="tile" title="Sunt Excepteur Fugiat · 10 chapters · kept 12 Apr 2026" style="left:7.549%;top:15.839%;width:7.323%;height:12.560%;background:hsl(34 52% 66%)"><b class="one">Sunt Excepteur Fugiat</b></span><span class="tile" title="Aliquip Incididunt · 10 chapters · kept 2 Jan 2026" style="left:14.872%;top:15.839%;width:7.323%;height:12.560%;background:hsl(34 52% 84%)"><b class="one">Aliquip Incididunt</b></span><span class="tile" title="Pariatur Fugiat Sunt · 10 chapters · kept 1 Apr 2026" style="left:22.195%;top:15.839%;width:7.323%;height:12.560%;background:hsl(34 52% 68%)"><b class="one">Pariatur Fugiat Sunt</b></span><span class="tile" title="Irure Dolore · 9 chapters · kept 20 Mar 2026" style="left:29.517%;top:15.839%;width:6.590%;height:12.560%;background:hsl(34 52% 70%)"><b class="one">Irure Dolore</b></span><span class="tile dark" title="Sit Commodo Exercitation · 9 chapters · kept 21 Aug 2026" style="left:36.108%;top:15.839%;width:6.590%;height:12.560%;background:hsl(34 52% 42%)"><b class="one">Sit Commodo Exercitation</b></span><span class="tile dark" title="Pariatur Commodo · 9 chapters · kept 22 Jul 2026" style="left:0.226%;top:28.399%;width:7.212%;height:11.477%;background:hsl(34 52% 47%)"><b class="one">Pariatur Commodo</b></span><span class="tile dark" title="Voluptate Minim · 9 chapters · kept 5 Aug 2026" style="left:7.438%;top:28.399%;width:7.212%;height:11.477%;background:hsl(34 52% 45%)"><b class="one">Voluptate Minim</b></span><span class="tile dark" title="Laboris Dolor Labore · 9 chapters · kept 26 Aug 2026" style="left:14.651%;top:28.399%;width:7.212%;height:11.477%;background:hsl(34 52% 41%)"><b class="one">Laboris Dolor Labore</b></span><span class="tile dark" title="Veniam Aliquip Reprehenderit · 9 chapters · kept 8 Sep 2026" style="left:21.863%;top:28.399%;width:7.212%;height:11.477%;background:hsl(34 52% 39%)"><b class="one">Veniam Aliquip Reprehenderit</b></span><span class="tile" title="Dolore Culpa · 9 chapters · kept 11 Jan 2026" style="left:29.075%;top:28.399%;width:7.212%;height:11.477%;background:hsl(34 52% 82%)"><b class="one">Dolore Culpa</b></span><span class="tile dark" title="Enim Anim Sit · 8 chapters · kept 3 Jun 2026" style="left:36.287%;top:28.399%;width:6.411%;height:11.477%;background:hsl(34 52% 56%)"><b class="one">Enim Anim Sit</b></span><span class="tile" title="Esse Occaecat · 8 chapters · kept 29 Apr 2026" style="left:0.226%;top:39.876%;width:6.925%;height:10.625%;background:hsl(34 52% 63%)"><b class="one">Esse Occaecat</b></span><span class="tile dark" title="Nulla Lorem · 8 chapters · kept 3 Oct 2026" style="left:0.226%;top:50.501%;width:6.925%;height:10.625%;background:hsl(34 52% 34%)"><b class="one">Nulla Lorem</b></span><span class="tile" title="Veniam Velit · 8 chapters · kept 9 May 2026" style="left:0.226%;top:61.126%;width:6.925%;height:10.625%;background:hsl(34 52% 61%)"><b class="one">Veniam Velit</b></span><span class="tile dark" title="Tempor Incididunt · 7 chapters · kept 12 Sep 2026" style="left:0.226%;top:71.751%;width:6.925%;height:9.297%;background:hsl(34 52% 38%)"><b class="one">Tempor Incididunt</b></span><span class="tile dark" title="Duis Velit Sed · 7 chapters · kept 19 Jun 2026" style="left:0.226%;top:81.049%;width:6.925%;height:9.297%;background:hsl(34 52% 53%)"><b class="one">Duis Velit Sed</b></span><span class="tile" title="Consequat Quis · 7 chapters · kept 9 Mar 2026" style="left:0.226%;top:90.346%;width:6.925%;height:9.297%;background:hsl(34 52% 72%)"><b class="one">Consequat Quis</b></span><span class="tile" title="Aliquip Deserunt · 7 chapters · kept 27 Feb 2026" style="left:7.151%;top:39.876%;width:5.925%;height:10.867%;background:hsl(34 52% 74%)"><b class="one">Aliquip Deserunt</b></span><span class="tile dark" title="Consectetur Laborum · 7 chapters · kept 25 Jul 2026" style="left:13.076%;top:39.876%;width:5.925%;height:10.867%;background:hsl(34 52% 47%)"><b class="one">Consectetur Laborum</b></span><span class="tile dark" title="Cillum Aliqua Nostrud · 7 chapters · kept 6 Jul 2026" style="left:19.000%;top:39.876%;width:5.925%;height:10.867%;background:hsl(34 52% 50%)"><b class="one">Cillum Aliqua Nostrud</b></span><span class="tile dark" title="Aliquip Irure · 7 chapters · kept 9 Jun 2026" style="left:24.925%;top:39.876%;width:5.925%;height:10.867%;background:hsl(34 52% 55%)"><b class="one">Aliquip Irure</b></span><span class="tile" title="Adipiscing Duis Consequat · 7 chapters · kept 14 Apr 2026" style="left:30.849%;top:39.876%;width:5.925%;height:10.867%;background:hsl(34 52% 65%)"><b class="one">Adipiscing Duis Consequat</b></span><span class="tile" title="Exercitation Mollit · 7 chapters · kept 16 May 2026" style="left:36.774%;top:39.876%;width:5.925%;height:10.867%;background:hsl(34 52% 60%)"><b class="one">Exercitation Mollit</b></span><span class="tile" title="Occaecat Sint Deserunt · 7 chapters · kept 24 Mar 2026" style="left:7.151%;top:50.742%;width:6.019%;height:10.697%;background:hsl(34 52% 69%)"><b class="one">Occaecat Sint Deserunt</b></span><span class="tile" title="Consequat Nostrud · 7 chapters · kept 20 Apr 2026" style="left:7.151%;top:61.439%;width:6.019%;height:10.697%;background:hsl(34 52% 64%)"><b class="one">Consequat Nostrud</b></span><span class="tile dark" title="Culpa Magna Cupidatat · 6 chapters · kept 8 Jul 2026" style="left:7.151%;top:72.136%;width:6.019%;height:9.169%;background:hsl(34 52% 50%)"><b class="one">Culpa Magna Cupidatat</b></span><span class="tile" title="Sed Commodo Sit · 6 chapters · kept 19 Mar 2026" style="left:7.151%;top:81.305%;width:6.019%;height:9.169%;background:hsl(34 52% 70%)"><b class="one">Sed Commodo Sit</b></span><span class="tile" title="Commodo Pariatur Reprehenderit · 6 chapters · kept 22 Apr 2026" style="left:7.151%;top:90.474%;width:6.019%;height:9.169%;background:hsl(34 52% 64%)"><b class="one">Commodo Pariatur Reprehenderit</b></span><span class="tile dark" title="Enim Cillum · 6 chapters · kept 6 Jul 2026" style="left:13.170%;top:50.742%;width:5.906%;height:9.344%;background:hsl(34 52% 50%)"><b class="one">Enim Cillum</b></span><span class="tile" title="Deserunt Culpa · 6 chapters · kept 17 Mar 2026" style="left:19.075%;top:50.742%;width:5.906%;height:9.344%;background:hsl(34 52% 70%)"><b class="one">Deserunt Culpa</b></span><span class="tile" title="Minim Pariatur Pariatur · 6 chapters · kept 19 Mar 2026" style="left:24.981%;top:50.742%;width:5.906%;height:9.344%;background:hsl(34 52% 70%)"><b class="one">Minim Pariatur Pariatur</b></span><span class="tile dark" title="Esse Ipsum Eiusmod · 6 chapters · kept 3 Aug 2026" style="left:30.887%;top:50.742%;width:5.906%;height:9.344%;background:hsl(34 52% 45%)"><b class="one">Esse Ipsum Eiusmod</b></span><span class="tile" title="Enim Aute · 6 chapters · kept 30 Jan 2026" style="left:36.793%;top:50.742%;width:5.906%;height:9.344%;background:hsl(34 52% 79%)"><b class="one">Enim Aute</b></span><span class="tile" title="Nostrud Officia Proident · 5 chapters · kept 27 Jan 2026" style="left:13.170%;top:60.086%;width:5.813%;height:7.911%;background:hsl(34 52% 79%)"></span><span class="tile dark" title="Nisi Ullamco · 5 chapters · kept 19 Aug 2026" style="left:13.170%;top:67.998%;width:5.813%;height:7.911%;background:hsl(34 52% 42%)"></span><span class="tile dark" title="Officia Aliqua Lorem · 5 chapters · kept 25 May 2026" style="left:13.170%;top:75.909%;width:5.813%;height:7.911%;background:hsl(34 52% 58%)"></span><span class="tile" title="Sint Excepteur Excepteur · 5 chapters · kept 21 Jan 2026" style="left:13.170%;top:83.820%;width:5.813%;height:7.911%;background:hsl(34 52% 80%)"></span><span class="tile dark" title="Nulla Excepteur · 5 chapters · kept 9 Jun 2026" style="left:13.170%;top:91.732%;width:5.813%;height:7.911%;background:hsl(34 52% 55%)"></span><span class="tile dark" title="Consectetur Minim · 5 chapters · kept 25 Jul 2026" style="left:18.982%;top:60.086%;width:5.647%;height:8.144%;background:hsl(34 52% 47%)"></span><span class="tile" title="Laborum Cupidatat Aliquip · 4 chapters · kept 26 Mar 2026" style="left:24.629%;top:60.086%;width:4.517%;height:8.144%;background:hsl(34 52% 69%)"></span><span class="tile" title="Elit Fugiat · 4 chapters · kept 3 May 2026" style="left:29.146%;top:60.086%;width:4.517%;height:8.144%;background:hsl(34 52% 62%)"></span><span class="tile" title="Deserunt Officia · 4 chapters · kept 29 Apr 2026" style="left:33.664%;top:60.086%;width:4.517%;height:8.144%;background:hsl(34 52% 63%)"></span><span class="tile dark" title="Labore Nulla Commodo · 4 chapters · kept 18 Jun 2026" style="left:38.181%;top:60.086%;width:4.517%;height:8.144%;background:hsl(34 52% 54%)"></span><span class="tile" title="Pariatur Incididunt Lorem · 4 chapters · kept 4 Apr 2026" style="left:18.982%;top:68.230%;width:4.685%;height:7.853%;background:hsl(34 52% 67%)"></span><span class="tile" title="Exercitation Aliqua Dolor · 4 chapters · kept 5 Mar 2026" style="left:18.982%;top:76.083%;width:4.685%;height:7.853%;background:hsl(34 52% 73%)"></span><span class="tile" title="Aliquip Nostrud Magna · 4 chapters · kept 13 Jan 2026" style="left:18.982%;top:83.937%;width:4.685%;height:7.853%;background:hsl(34 52% 82%)"></span><span class="tile dark" title="Mollit Velit Velit · 4 chapters · kept 29 Jun 2026" style="left:18.982%;top:91.790%;width:4.685%;height:7.853%;background:hsl(34 52% 52%)"></span><span class="tile" title="Dolore Sit · 4 chapters · kept 22 Mar 2026" style="left:23.667%;top:68.230%;width:5.438%;height:6.766%;background:hsl(34 52% 70%)"></span><span class="tile" title="Amet Excepteur Mollit · 4 chapters · kept 3 Feb 2026" style="left:29.104%;top:68.230%;width:5.438%;height:6.766%;background:hsl(34 52% 78%)"></span><span class="tile" title="Elit Magna · 3 chapters · kept 28 Feb 2026" style="left:34.542%;top:68.230%;width:4.078%;height:6.766%;background:hsl(34 52% 73%)"></span><span class="tile" title="Aliquip Anim Reprehenderit · 3 chapters · kept 6 Mar 2026" style="left:38.620%;top:68.230%;width:4.078%;height:6.766%;background:hsl(34 52% 72%)"></span><span class="tile dark" title="Lorem Tempor Tempor · 3 chapters · kept 30 May 2026" style="left:23.667%;top:74.996%;width:4.478%;height:6.162%;background:hsl(34 52% 57%)"></span><span class="tile" title="Aliqua Sint · 3 chapters · kept 8 Mar 2026" style="left:23.667%;top:81.158%;width:4.478%;height:6.162%;background:hsl(34 52% 72%)"></span><span class="tile" title="Commodo Mollit Deserunt · 3 chapters · kept 26 Jan 2026" style="left:23.667%;top:87.319%;width:4.478%;height:6.162%;background:hsl(34 52% 79%)"></span><span class="tile dark" title="Sint Esse · 3 chapters · kept 17 May 2026" style="left:23.667%;top:93.481%;width:4.478%;height:6.162%;background:hsl(34 52% 59%)"></span><span class="tile" title="Minim Consequat · 2 chapters · kept 2 Feb 2026" style="left:28.145%;top:74.996%;width:3.638%;height:5.056%;background:hsl(34 52% 78%)"></span><span class="tile" title="Excepteur Cupidatat Anim · 2 chapters · kept 7 Jan 2026" style="left:31.783%;top:74.996%;width:3.638%;height:5.056%;background:hsl(34 52% 83%)"></span><span class="tile" title="Nulla Reprehenderit Irure · 2 chapters · kept 17 Feb 2026" style="left:35.422%;top:74.996%;width:3.638%;height:5.056%;background:hsl(34 52% 75%)"></span><span class="tile dark" title="Sint Cillum · 2 chapters · kept 20 May 2026" style="left:39.060%;top:74.996%;width:3.638%;height:5.056%;background:hsl(34 52% 59%)"></span><span class="tile" title="Consequat Deserunt · 2 chapters · kept 5 May 2026" style="left:28.145%;top:80.052%;width:3.756%;height:4.898%;background:hsl(34 52% 62%)"></span><span class="tile dark" title="Pariatur Sed · 2 chapters · kept 8 Sep 2026" style="left:28.145%;top:84.950%;width:3.756%;height:4.898%;background:hsl(34 52% 39%)"></span><span class="tile dark" title="Aute Aute · 2 chapters · kept 31 May 2026" style="left:28.145%;top:89.847%;width:3.756%;height:4.898%;background:hsl(34 52% 57%)"></span><span class="tile" title="Laborum Elit Velit · 2 chapters · kept 30 Apr 2026" style="left:28.145%;top:94.745%;width:3.756%;height:4.898%;background:hsl(34 52% 62%)"></span><span class="tile" title="Amet Tempor Exercitation · 2 chapters · kept 20 Jan 2026" style="left:31.901%;top:80.052%;width:4.319%;height:4.259%;background:hsl(34 52% 81%)"></span><span class="tile" title="Proident Quis Aliqua · 1 chapter · kept 30 Mar 2026" style="left:36.220%;top:80.052%;width:2.160%;height:4.259%;background:hsl(34 52% 68%)"></span><span class="tile" title="Anim Enim Dolore · 1 chapter · kept 20 Mar 2026" style="left:38.379%;top:80.052%;width:2.160%;height:4.259%;background:hsl(34 52% 70%)"></span><span class="tile dark" title="Culpa Mollit Elit · 1 chapter · kept 17 Jul 2026" style="left:40.539%;top:80.052%;width:2.160%;height:4.259%;background:hsl(34 52% 48%)"></span><span class="tile" title="Pariatur Consectetur · 1 chapter · kept 26 Jan 2026" style="left:31.901%;top:84.311%;width:2.399%;height:3.833%;background:hsl(34 52% 79%)"></span><span class="tile dark" title="Ullamco Anim · 1 chapter · kept 11 Sep 2026" style="left:31.901%;top:88.144%;width:2.399%;height:3.833%;background:hsl(34 52% 38%)"></span><span class="tile dark" title="Aliqua Cillum Cupidatat · 1 chapter · kept 15 Aug 2026" style="left:31.901%;top:91.977%;width:2.399%;height:3.833%;background:hsl(34 52% 43%)"></span><span class="tile" title="Sit Aute Veniam · 1 chapter · kept 23 Jan 2026" style="left:31.901%;top:95.810%;width:2.399%;height:3.833%;background:hsl(34 52% 80%)"></span><span class="tile dark" title="Mollit Sed Nisi · 1 chapter · kept 23 Sep 2026" style="left:34.300%;top:84.311%;width:2.100%;height:4.381%;background:hsl(34 52% 36%)"></span><span class="tile" title="Aliqua Consectetur Voluptate · 1 chapter · kept 7 May 2026" style="left:36.400%;top:84.311%;width:2.100%;height:4.381%;background:hsl(34 52% 61%)"></span><span class="tile" title="Elit Dolore Laborum · 1 chapter · kept 27 Jan 2026" style="left:38.499%;top:84.311%;width:2.100%;height:4.381%;background:hsl(34 52% 79%)"></span><span class="tile dark" title="Aliqua Deserunt · 1 chapter · kept 24 Aug 2026" style="left:40.599%;top:84.311%;width:2.100%;height:4.381%;background:hsl(34 52% 41%)"></span><span class="tile dark" title="Quis Reprehenderit Labore · 1 chapter · kept 16 Jun 2026" style="left:34.300%;top:88.691%;width:2.519%;height:3.650%;background:hsl(34 52% 54%)"></span><span class="tile dark" title="Laboris Veniam · 1 chapter · kept 3 Oct 2026" style="left:34.300%;top:92.342%;width:2.519%;height:3.650%;background:hsl(34 52% 34%)"></span><span class="tile" title="Dolor Nostrud · 1 chapter · kept 1 Apr 2026" style="left:34.300%;top:95.992%;width:2.519%;height:3.650%;background:hsl(34 52% 68%)"></span><span class="tile" title="Consectetur Eiusmod Proident · 1 chapter · kept 21 Feb 2026" style="left:36.820%;top:88.691%;width:2.939%;height:3.129%;background:hsl(34 52% 75%)"></span><span class="tile" title="Laboris Irure · 1 chapter · kept 9 Jan 2026" style="left:39.759%;top:88.691%;width:2.939%;height:3.129%;background:hsl(34 52% 83%)"></span><span class="tile" title="Reprehenderit Commodo · 1 chapter · kept 25 Feb 2026" style="left:36.820%;top:91.820%;width:2.351%;height:3.911%;background:hsl(34 52% 74%)"></span><span class="tile dark" title="Ullamco Sed · 1 chapter · kept 25 May 2026" style="left:36.820%;top:95.732%;width:2.351%;height:3.911%;background:hsl(34 52% 58%)"></span><span class="tile" title="Cillum Velit Magna · 1 chapter · kept 16 Jan 2026" style="left:39.171%;top:91.820%;width:1.764%;height:5.215%;background:hsl(34 52% 81%)"></span><span class="tile dark" title="Laboris Enim Quis · 1 chapter · kept 26 May 2026" style="left:40.935%;top:91.820%;width:1.764%;height:5.215%;background:hsl(34 52% 58%)"></span><span class="tile dark" title="Adipiscing Nostrud · 1 chapter · kept 28 Sep 2026" style="left:39.171%;top:97.035%;width:3.527%;height:2.607%;background:hsl(34 52% 35%)"></span><div class="region" style="left:42.925%;top:0.000%;width:57.075%;height:68.595%"><span class="rname">A Third Project <em>83 · 448 ch</em></span></div><span class="tile dark" title="Elit Anim Officia · 12 chapters · kept 25 Aug 2026" style="left:43.151%;top:3.929%;width:7.204%;height:13.539%;background:hsl(342 52% 41%)"><b class="one">Elit Anim Officia</b></span><span class="tile" title="Consequat Nostrud Aliqua · 12 chapters · kept 16 May 2026" style="left:43.151%;top:17.467%;width:7.204%;height:13.539%;background:hsl(342 52% 60%)"><b class="one">Consequat Nostrud Aliqua</b></span><span class="tile dark" title="Magna Aliqua · 11 chapters · kept 20 Sep 2026" style="left:43.151%;top:31.006%;width:7.204%;height:12.411%;background:hsl(342 52% 37%)"><b class="one">Magna Aliqua</b></span><span class="tile dark" title="Amet Excepteur · 11 chapters · kept 25 Aug 2026" style="left:43.151%;top:43.417%;width:7.204%;height:12.411%;background:hsl(342 52% 41%)"><b class="one">Amet Excepteur</b></span><span class="tile" title="Dolore Duis Culpa · 11 chapters · kept 2 Jan 2026" style="left:43.151%;top:55.827%;width:7.204%;height:12.411%;background:hsl(342 52% 84%)"><b class="one">Dolore Duis Culpa</b></span><span class="tile" title="Mollit Occaecat Dolor · 10 chapters · kept 14 Jan 2026" style="left:50.355%;top:3.929%;width:7.583%;height:10.718%;background:hsl(342 52% 82%)"><b class="one">Mollit Occaecat Dolor</b></span><span class="tile dark" title="Laboris Mollit · 10 chapters · kept 26 May 2026" style="left:50.355%;top:14.647%;width:7.583%;height:10.718%;background:hsl(342 52% 58%)"><b class="one">Laboris Mollit</b></span><span class="tile dark" title="Velit Sunt · 10 chapters · kept 10 Jul 2026" style="left:50.355%;top:25.365%;width:7.583%;height:10.718%;background:hsl(342 52% 50%)"><b class="one">Velit Sunt</b></span><span class="tile" title="Lorem Occaecat · 10 chapters · kept 21 Feb 2026" style="left:50.355%;top:36.083%;width:7.583%;height:10.718%;background:hsl(342 52% 75%)"><b class="one">Lorem Occaecat</b></span><span class="tile dark" title="Elit Pariatur Sed · 10 chapters · kept 22 Jun 2026" style="left:50.355%;top:46.801%;width:7.583%;height:10.718%;background:hsl(342 52% 53%)"><b class="one">Elit Pariatur Sed</b></span><span class="tile" title="Voluptate Consectetur Mollit · 10 chapters · kept 26 Jan 2026" style="left:50.355%;top:57.520%;width:7.583%;height:10.718%;background:hsl(342 52% 79%)"><b class="one">Voluptate Consectetur Mollit</b></span><span class="tile" title="Dolore Cillum · 10 chapters · kept 10 May 2026" style="left:57.938%;top:3.929%;width:7.204%;height:11.282%;background:hsl(342 52% 61%)"><b class="one">Dolore Cillum</b></span><span class="tile dark" title="Enim Nulla Duis · 10 chapters · kept 6 Aug 2026" style="left:57.938%;top:15.211%;width:7.204%;height:11.282%;background:hsl(342 52% 45%)"><b class="one">Enim Nulla Duis</b></span><span class="tile" title="Ullamco Tempor · 10 chapters · kept 10 Apr 2026" style="left:57.938%;top:26.493%;width:7.204%;height:11.282%;background:hsl(342 52% 66%)"><b class="one">Ullamco Tempor</b></span><span class="tile" title="Laborum Aute · 9 chapters · kept 3 Feb 2026" style="left:57.938%;top:37.776%;width:7.204%;height:10.154%;background:hsl(342 52% 78%)"><b class="one">Laborum Aute</b></span><span class="tile" title="Aute Velit Laborum · 9 chapters · kept 15 Apr 2026" style="left:57.938%;top:47.930%;width:7.204%;height:10.154%;background:hsl(342 52% 65%)"><b class="one">Aute Velit Laborum</b></span><span class="tile dark" title="Consectetur Quis Nulla · 9 chapters · kept 7 Aug 2026" style="left:57.938%;top:58.084%;width:7.204%;height:10.154%;background:hsl(342 52% 45%)"><b class="one">Consectetur Quis Nulla</b></span><span class="tile" title="Nulla Incididunt Exercitation · 9 chapters · kept 1 Feb 2026" style="left:65.143%;top:3.929%;width:7.602%;height:9.623%;background:hsl(342 52% 78%)"><b class="one">Nulla Incididunt Exercitation</b></span><span class="tile dark" title="Exercitation Proident Laboris · 8 chapters · kept 16 Jun 2026" style="left:72.745%;top:3.929%;width:6.757%;height:9.623%;background:hsl(342 52% 54%)"><b class="one">Exercitation Proident Laboris</b></span><span class="tile dark" title="Consectetur Amet Dolor · 8 chapters · kept 23 Jul 2026" style="left:79.502%;top:3.929%;width:6.757%;height:9.623%;background:hsl(342 52% 47%)"><b class="one">Consectetur Amet Dolor</b></span><span class="tile" title="Dolor Sed Laborum · 8 chapters · kept 18 Mar 2026" style="left:86.259%;top:3.929%;width:6.757%;height:9.623%;background:hsl(342 52% 70%)"><b class="one">Dolor Sed Laborum</b></span><span class="tile dark" title="Nulla Dolore Exercitation · 8 chapters · kept 7 Sep 2026" style="left:93.016%;top:3.929%;width:6.757%;height:9.623%;background:hsl(342 52% 39%)"><b class="one">Nulla Dolore Exercitation</b></span><span class="tile dark" title="Minim Aute Labore · 8 chapters · kept 24 Jul 2026" style="left:65.143%;top:13.551%;width:6.926%;height:9.388%;background:hsl(342 52% 47%)"><b class="one">Minim Aute Labore</b></span><span class="tile" title="Commodo Velit · 8 chapters · kept 13 Mar 2026" style="left:72.069%;top:13.551%;width:6.926%;height:9.388%;background:hsl(342 52% 71%)"><b class="one">Commodo Velit</b></span><span class="tile" title="Ipsum Adipiscing · 8 chapters · kept 7 Feb 2026" style="left:78.995%;top:13.551%;width:6.926%;height:9.388%;background:hsl(342 52% 77%)"><b class="one">Ipsum Adipiscing</b></span><span class="tile dark" title="Sunt Sunt · 8 chapters · kept 1 Aug 2026" style="left:85.921%;top:13.551%;width:6.926%;height:9.388%;background:hsl(342 52% 46%)"><b class="one">Sunt Sunt</b></span><span class="tile dark" title="Excepteur Incididunt · 8 chapters · kept 12 Aug 2026" style="left:92.848%;top:13.551%;width:6.926%;height:9.388%;background:hsl(342 52% 44%)"><b class="one">Excepteur Incididunt</b></span><span class="tile dark" title="Consequat Ipsum Anim · 8 chapters · kept 13 Jul 2026" style="left:65.143%;top:22.940%;width:6.639%;height:9.794%;background:hsl(342 52% 49%)"><b class="one">Consequat Ipsum Anim</b></span><span class="tile" title="Commodo Reprehenderit Adipiscing · 8 chapters · kept 26 Feb 2026" style="left:65.143%;top:32.734%;width:6.639%;height:9.794%;background:hsl(342 52% 74%)"><b class="one">Commodo Reprehenderit Adipiscing</b></span><span class="tile dark" title="Anim Excepteur Excepteur · 7 chapters · kept 2 Jun 2026" style="left:65.143%;top:42.528%;width:6.639%;height:8.570%;background:hsl(342 52% 56%)"><b class="one">Anim Excepteur Excepteur</b></span><span class="tile" title="Sed Enim · 7 chapters · kept 13 May 2026" style="left:65.143%;top:51.098%;width:6.639%;height:8.570%;background:hsl(342 52% 60%)"><b class="one">Sed Enim</b></span><span class="tile dark" title="Consectetur Ipsum Officia · 7 chapters · kept 16 Jul 2026" style="left:65.143%;top:59.668%;width:6.639%;height:8.570%;background:hsl(342 52% 48%)"><b class="one">Consectetur Ipsum Officia</b></span><span class="tile" title="Laborum Laboris · 7 chapters · kept 21 Jan 2026" style="left:71.782%;top:22.940%;width:6.123%;height:9.292%;background:hsl(342 52% 80%)"><b class="one">Laborum Laboris</b></span><span class="tile" title="Irure Fugiat · 7 chapters · kept 3 Apr 2026" style="left:77.905%;top:22.940%;width:6.123%;height:9.292%;background:hsl(342 52% 67%)"><b class="one">Irure Fugiat</b></span><span class="tile" title="Consectetur Tempor · 6 chapters · kept 23 Mar 2026" style="left:84.028%;top:22.940%;width:5.248%;height:9.292%;background:hsl(342 52% 69%)"></span><span class="tile" title="Quis Lorem · 6 chapters · kept 17 Jan 2026" style="left:89.277%;top:22.940%;width:5.248%;height:9.292%;background:hsl(342 52% 81%)"></span><span class="tile" title="Proident Aliqua · 6 chapters · kept 25 Feb 2026" style="left:94.525%;top:22.940%;width:5.248%;height:9.292%;background:hsl(342 52% 74%)"></span><span class="tile" title="Commodo Aute Deserunt · 6 chapters · kept 31 Jan 2026" style="left:71.782%;top:32.232%;width:5.418%;height:9.002%;background:hsl(342 52% 79%)"></span><span class="tile dark" title="Fugiat Eiusmod · 6 chapters · kept 19 Sep 2026" style="left:71.782%;top:41.233%;width:5.418%;height:9.002%;background:hsl(342 52% 37%)"></span><span class="tile dark" title="Nostrud Tempor Aliqua · 6 chapters · kept 31 Jul 2026" style="left:71.782%;top:50.235%;width:5.418%;height:9.002%;background:hsl(342 52% 46%)"></span><span class="tile dark" title="Culpa Tempor Duis · 6 chapters · kept 2 Jun 2026" style="left:71.782%;top:59.236%;width:5.418%;height:9.002%;background:hsl(342 52% 56%)"></span><span class="tile" title="Enim Cupidatat · 6 chapters · kept 25 Jan 2026" style="left:77.200%;top:32.232%;width:6.450%;height:7.561%;background:hsl(342 52% 80%)"><b class="one">Enim Cupidatat</b></span><span class="tile dark" title="Lorem Laboris Incididunt · 5 chapters · kept 19 Sep 2026" style="left:83.649%;top:32.232%;width:5.375%;height:7.561%;background:hsl(342 52% 37%)"></span><span class="tile dark" title="Elit Nisi · 5 chapters · kept 3 Oct 2026" style="left:89.024%;top:32.232%;width:5.375%;height:7.561%;background:hsl(342 52% 34%)"></span><span class="tile dark" title="Occaecat Lorem · 5 chapters · kept 1 Jul 2026" style="left:94.399%;top:32.232%;width:5.375%;height:7.561%;background:hsl(342 52% 51%)"></span><span class="tile" title="Mollit Deserunt · 5 chapters · kept 12 Mar 2026" style="left:77.200%;top:39.793%;width:5.143%;height:7.901%;background:hsl(342 52% 71%)"></span><span class="tile" title="Ullamco Pariatur · 5 chapters · kept 4 May 2026" style="left:77.200%;top:47.694%;width:5.143%;height:7.901%;background:hsl(342 52% 62%)"></span><span class="tile" title="Laboris Aute Enim · 4 chapters · kept 11 Apr 2026" style="left:77.200%;top:55.596%;width:5.143%;height:6.321%;background:hsl(342 52% 66%)"></span><span class="tile" title="Exercitation Deserunt Velit · 4 chapters · kept 23 Apr 2026" style="left:77.200%;top:61.917%;width:5.143%;height:6.321%;background:hsl(342 52% 64%)"></span><span class="tile dark" title="Cillum Officia · 4 chapters · kept 29 May 2026" style="left:82.343%;top:39.793%;width:4.980%;height:6.528%;background:hsl(342 52% 57%)"></span><span class="tile dark" title="Incididunt Pariatur Occaecat · 4 chapters · kept 10 Aug 2026" style="left:87.323%;top:39.793%;width:4.980%;height:6.528%;background:hsl(342 52% 44%)"></span><span class="tile dark" title="Ullamco Sunt Deserunt · 3 chapters · kept 3 Oct 2026" style="left:92.303%;top:39.793%;width:3.735%;height:6.528%;background:hsl(342 52% 34%)"></span><span class="tile" title="Anim Commodo · 3 chapters · kept 26 Apr 2026" style="left:96.039%;top:39.793%;width:3.735%;height:6.528%;background:hsl(342 52% 63%)"></span><span class="tile dark" title="Culpa Adipiscing Adipiscing · 3 chapters · kept 30 Aug 2026" style="left:82.343%;top:46.321%;width:3.338%;height:7.306%;background:hsl(342 52% 40%)"></span><span class="tile" title="Nisi Irure · 3 chapters · kept 15 May 2026" style="left:82.343%;top:53.627%;width:3.338%;height:7.306%;background:hsl(342 52% 60%)"></span><span class="tile" title="Sed Duis Sit · 3 chapters · kept 10 May 2026" style="left:82.343%;top:60.932%;width:3.338%;height:7.306%;background:hsl(342 52% 61%)"></span><span class="tile" title="Veniam Laborum Enim · 2 chapters · kept 24 Apr 2026" style="left:85.681%;top:46.321%;width:2.967%;height:5.479%;background:hsl(342 52% 64%)"></span><span class="tile dark" title="Velit Aute · 2 chapters · kept 28 May 2026" style="left:85.681%;top:51.800%;width:2.967%;height:5.479%;background:hsl(342 52% 57%)"></span><span class="tile" title="Sed Officia · 2 chapters · kept 6 Mar 2026" style="left:85.681%;top:57.280%;width:2.967%;height:5.479%;background:hsl(342 52% 72%)"></span><span class="tile dark" title="Irure Aliquip · 2 chapters · kept 28 Jun 2026" style="left:85.681%;top:62.759%;width:2.967%;height:5.479%;background:hsl(342 52% 52%)"></span><span class="tile" title="Laborum Dolor Velit · 2 chapters · kept 2 Feb 2026" style="left:88.648%;top:46.321%;width:2.781%;height:5.844%;background:hsl(342 52% 78%)"></span><span class="tile" title="Culpa Nisi Sed · 2 chapters · kept 4 Feb 2026" style="left:91.429%;top:46.321%;width:2.781%;height:5.844%;background:hsl(342 52% 78%)"></span><span class="tile dark" title="Excepteur Mollit Laboris · 2 chapters · kept 5 Jun 2026" style="left:94.211%;top:46.321%;width:2.781%;height:5.844%;background:hsl(342 52% 56%)"></span><span class="tile" title="Eiusmod Consequat Sint · 2 chapters · kept 13 Jan 2026" style="left:96.992%;top:46.321%;width:2.781%;height:5.844%;background:hsl(342 52% 82%)"></span><span class="tile dark" title="Proident Laborum · 2 chapters · kept 23 Jun 2026" style="left:88.648%;top:52.166%;width:3.034%;height:5.357%;background:hsl(342 52% 53%)"></span><span class="tile dark" title="Lorem Amet Commodo · 2 chapters · kept 8 Aug 2026" style="left:88.648%;top:57.523%;width:3.034%;height:5.357%;background:hsl(342 52% 44%)"></span><span class="tile dark" title="Laboris Lorem · 2 chapters · kept 22 Aug 2026" style="left:88.648%;top:62.881%;width:3.034%;height:5.357%;background:hsl(342 52% 42%)"></span><span class="tile" title="Cupidatat Adipiscing · 1 chapter · kept 4 May 2026" style="left:91.682%;top:52.166%;width:2.023%;height:4.018%;background:hsl(342 52% 62%)"></span><span class="tile" title="Fugiat Excepteur Nostrud · 1 chapter · kept 2 Apr 2026" style="left:93.705%;top:52.166%;width:2.023%;height:4.018%;background:hsl(342 52% 68%)"></span><span class="tile dark" title="Cupidatat Elit · 1 chapter · kept 8 Aug 2026" style="left:95.728%;top:52.166%;width:2.023%;height:4.018%;background:hsl(342 52% 44%)"></span><span class="tile" title="Duis Amet · 1 chapter · kept 31 Mar 2026" style="left:97.751%;top:52.166%;width:2.023%;height:4.018%;background:hsl(342 52% 68%)"></span><span class="tile" title="Duis Fugiat · 1 chapter · kept 17 Mar 2026" style="left:91.682%;top:56.184%;width:2.023%;height:4.018%;background:hsl(342 52% 70%)"></span><span class="tile dark" title="Quis Esse Ullamco · 1 chapter · kept 28 Jun 2026" style="left:91.682%;top:60.202%;width:2.023%;height:4.018%;background:hsl(342 52% 52%)"></span><span class="tile dark" title="Lorem Nisi Reprehenderit · 1 chapter · kept 14 Jul 2026" style="left:91.682%;top:64.220%;width:2.023%;height:4.018%;background:hsl(342 52% 49%)"></span><span class="tile dark" title="Amet Consequat Consequat · 1 chapter · kept 17 Aug 2026" style="left:93.705%;top:56.184%;width:2.023%;height:4.018%;background:hsl(342 52% 43%)"></span><span class="tile" title="Occaecat Magna · 1 chapter · kept 13 May 2026" style="left:95.728%;top:56.184%;width:2.023%;height:4.018%;background:hsl(342 52% 60%)"></span><span class="tile" title="Minim Velit · 1 chapter · kept 27 Apr 2026" style="left:97.751%;top:56.184%;width:2.023%;height:4.018%;background:hsl(342 52% 63%)"></span><span class="tile" title="Commodo Fugiat · 1 chapter · kept 3 May 2026" style="left:93.705%;top:60.202%;width:2.023%;height:4.018%;background:hsl(342 52% 62%)"></span><span class="tile" title="Aliquip Laboris · 1 chapter · kept 11 Apr 2026" style="left:93.705%;top:64.220%;width:2.023%;height:4.018%;background:hsl(342 52% 66%)"></span><span class="tile" title="Commodo Aliqua · 1 chapter · kept 29 Jan 2026" style="left:95.728%;top:60.202%;width:2.023%;height:4.018%;background:hsl(342 52% 79%)"></span><span class="tile dark" title="Sint Enim Magna · 1 chapter · kept 24 May 2026" style="left:97.751%;top:60.202%;width:2.023%;height:4.018%;background:hsl(342 52% 58%)"></span><span class="tile" title="Sint Pariatur Aute · 1 chapter · kept 6 Jan 2026" style="left:95.728%;top:64.220%;width:2.023%;height:4.018%;background:hsl(342 52% 83%)"></span><span class="tile dark" title="Nisi Pariatur Elit · 1 chapter · kept 4 Jul 2026" style="left:97.751%;top:64.220%;width:2.023%;height:4.018%;background:hsl(342 52% 51%)"></span><div class="region" style="left:42.925%;top:68.595%;width:57.075%;height:31.405%"><span class="rname">A First Project <em>38 · 200 ch</em></span></div><span class="tile dark" title="Sit Amet Consectetur · 14 chapters · kept 21 Jul 2026" style="left:43.151%;top:72.524%;width:7.361%;height:14.603%;background:hsl(172 52% 48%)"><b class="one">Sit Amet Consectetur</b></span><span class="tile" title="Mollit Cupidatat Irure · 12 chapters · kept 10 Jan 2026" style="left:43.151%;top:87.126%;width:7.361%;height:12.517%;background:hsl(172 52% 82%)"><b class="one">Mollit Cupidatat Irure</b></span><span class="tile" title="Cupidatat Nostrud · 12 chapters · kept 5 May 2026" style="left:50.512%;top:72.524%;width:6.512%;height:14.149%;background:hsl(172 52% 62%)"><b class="one">Cupidatat Nostrud</b></span><span class="tile" title="Dolor Esse · 11 chapters · kept 6 May 2026" style="left:50.512%;top:86.673%;width:6.512%;height:12.970%;background:hsl(172 52% 61%)"><b class="one">Dolor Esse</b></span><span class="tile" title="Ipsum Consectetur · 10 chapters · kept 6 Jan 2026" style="left:57.023%;top:72.524%;width:7.927%;height:9.685%;background:hsl(172 52% 83%)"><b class="one">Ipsum Consectetur</b></span><span class="tile dark" title="Adipiscing Elit · 9 chapters · kept 2 Sep 2026" style="left:57.023%;top:82.209%;width:7.927%;height:8.717%;background:hsl(172 52% 40%)"><b class="one">Adipiscing Elit</b></span><span class="tile dark" title="Pariatur Anim Duis · 9 chapters · kept 8 Jun 2026" style="left:57.023%;top:90.926%;width:7.927%;height:8.717%;background:hsl(172 52% 55%)"><b class="one">Pariatur Anim Duis</b></span><span class="tile" title="Nisi Incididunt Aute · 9 chapters · kept 11 Feb 2026" style="left:64.951%;top:72.524%;width:7.361%;height:9.387%;background:hsl(172 52% 77%)"><b class="one">Nisi Incididunt Aute</b></span><span class="tile" title="Amet Labore Cupidatat · 9 chapters · kept 5 Mar 2026" style="left:64.951%;top:81.911%;width:7.361%;height:9.387%;background:hsl(172 52% 73%)"><b class="one">Amet Labore Cupidatat</b></span><span class="tile sel dark" title="Lorem Ipsum Dolor · 8 chapters · kept 9 Sep 2026" style="left:64.951%;top:91.298%;width:7.361%;height:8.344%;background:hsl(172 52% 39%)"><b class="one">Lorem Ipsum Dolor</b></span><span class="tile" title="Sit Anim · 7 chapters · kept 14 May 2026" style="left:72.312%;top:72.524%;width:5.662%;height:9.492%;background:hsl(172 52% 60%)"></span><span class="tile" title="Veniam Sint · 7 chapters · kept 26 Feb 2026" style="left:72.312%;top:82.015%;width:5.662%;height:9.492%;background:hsl(172 52% 74%)"></span><span class="tile dark" title="Quis Nostrud · 6 chapters · kept 1 Oct 2026" style="left:72.312%;top:91.507%;width:5.662%;height:8.136%;background:hsl(172 52% 35%)"></span><span class="tile" title="Reprehenderit Esse Anim · 6 chapters · kept 23 Jan 2026" style="left:77.974%;top:72.524%;width:5.096%;height:9.040%;background:hsl(172 52% 80%)"></span><span class="tile dark" title="Mollit Cupidatat · 6 chapters · kept 1 Oct 2026" style="left:77.974%;top:81.563%;width:5.096%;height:9.040%;background:hsl(172 52% 35%)"></span><span class="tile" title="Nulla Velit Laborum · 6 chapters · kept 15 Mar 2026" style="left:77.974%;top:90.603%;width:5.096%;height:9.040%;background:hsl(172 52% 71%)"></span><span class="tile" title="Laboris Labore · 5 chapters · kept 17 Mar 2026" style="left:83.070%;top:72.524%;width:5.568%;height:6.895%;background:hsl(172 52% 70%)"></span><span class="tile dark" title="Elit Pariatur · 5 chapters · kept 11 Aug 2026" style="left:88.638%;top:72.524%;width:5.568%;height:6.895%;background:hsl(172 52% 44%)"></span><span class="tile" title="Velit Officia Consectetur · 5 chapters · kept 8 Apr 2026" style="left:94.206%;top:72.524%;width:5.568%;height:6.895%;background:hsl(172 52% 66%)"></span><span class="tile dark" title="Duis Nisi · 5 chapters · kept 16 Aug 2026" style="left:83.070%;top:79.418%;width:4.935%;height:7.779%;background:hsl(172 52% 43%)"></span><span class="tile dark" title="Dolor Sed Veniam · 4 chapters · kept 29 Sep 2026" style="left:83.070%;top:87.197%;width:4.935%;height:6.223%;background:hsl(172 52% 35%)"></span><span class="tile dark" title="Excepteur Veniam · 4 chapters · kept 28 May 2026" style="left:83.070%;top:93.420%;width:4.935%;height:6.223%;background:hsl(172 52% 57%)"></span><span class="tile" title="Sed Nostrud · 4 chapters · kept 16 Mar 2026" style="left:88.005%;top:79.418%;width:4.707%;height:6.524%;background:hsl(172 52% 71%)"></span><span class="tile dark" title="Ut Enim ad Minim · 3 chapters · kept 27 Sep 2026" style="left:92.713%;top:79.418%;width:3.531%;height:6.524%;background:hsl(172 52% 35%)"></span><span class="tile dark" title="Cillum Cillum Enim · 3 chapters · kept 27 Aug 2026" style="left:96.243%;top:79.418%;width:3.531%;height:6.524%;background:hsl(172 52% 41%)"></span><span class="tile" title="Occaecat Lorem Commodo · 3 chapters · kept 19 Mar 2026" style="left:88.005%;top:85.942%;width:3.923%;height:5.872%;background:hsl(172 52% 70%)"></span><span class="tile dark" title="Sed Do Eiusmod · 2 chapters · kept 5 Sep 2026" style="left:88.005%;top:91.814%;width:3.923%;height:3.914%;background:hsl(172 52% 39%)"></span><span class="tile" title="Magna Consequat · 2 chapters · kept 8 Jan 2026" style="left:88.005%;top:95.728%;width:3.923%;height:3.914%;background:hsl(172 52% 83%)"></span><span class="tile dark" title="Nulla Duis Aliqua · 2 chapters · kept 2 Oct 2026" style="left:91.928%;top:85.942%;width:2.615%;height:5.872%;background:hsl(172 52% 34%)"></span><span class="tile" title="Irure Fugiat Laborum · 2 chapters · kept 5 Jan 2026" style="left:94.543%;top:85.942%;width:2.615%;height:5.872%;background:hsl(172 52% 83%)"></span><span class="tile" title="Sint Exercitation Duis · 2 chapters · kept 12 May 2026" style="left:97.159%;top:85.942%;width:2.615%;height:5.872%;background:hsl(172 52% 60%)"></span><span class="tile dark" title="Veniam Officia · 2 chapters · kept 27 Jun 2026" style="left:91.928%;top:91.814%;width:2.942%;height:5.219%;background:hsl(172 52% 52%)"></span><span class="tile dark" title="Sunt Eiusmod · 1 chapter · kept 23 Aug 2026" style="left:91.928%;top:97.033%;width:2.942%;height:2.610%;background:hsl(172 52% 42%)"></span><span class="tile" title="Consequat Pariatur · 1 chapter · kept 26 Jan 2026" style="left:94.870%;top:91.814%;width:2.452%;height:3.132%;background:hsl(172 52% 79%)"></span><span class="tile" title="Officia Enim · 1 chapter · kept 13 Apr 2026" style="left:97.322%;top:91.814%;width:2.452%;height:3.132%;background:hsl(172 52% 66%)"></span><span class="tile" title="Occaecat Reprehenderit Cupidatat · 1 chapter · kept 3 Jan 2026" style="left:94.870%;top:94.946%;width:1.635%;height:4.697%;background:hsl(172 52% 84%)"></span><span class="tile" title="Duis Sed Nostrud · 1 chapter · kept 22 Feb 2026" style="left:96.505%;top:94.946%;width:1.635%;height:4.697%;background:hsl(172 52% 75%)"></span><span class="tile dark" title="Ullamco Nisi · 1 chapter · kept 4 Oct 2026" style="left:98.139%;top:94.946%;width:1.635%;height:4.697%;background:hsl(172 52% 34%)"></span></div>
        <div class="map phone"><div class="region" style="left:0.000%;top:0.000%;width:100.000%;height:42.925%"><span class="rname">A Second Project <em>91 · 442 ch</em></span></div><span class="tile dark" title="Consequat Fugiat Laborum · 12 chapters · kept 4 Jul 2026" style="left:0.559%;top:3.438%;width:12.304%;height:8.547%;background:hsl(34 52% 51%)"></span><span class="tile dark" title="Occaecat Amet Sint · 11 chapters · kept 16 Aug 2026" style="left:0.559%;top:11.985%;width:12.304%;height:7.835%;background:hsl(34 52% 43%)"></span><span class="tile" title="Mollit Laborum Sit · 11 chapters · kept 16 Feb 2026" style="left:0.559%;top:19.820%;width:12.304%;height:7.835%;background:hsl(34 52% 76%)"></span><span class="tile" title="Sunt Ullamco Sint · 11 chapters · kept 17 Feb 2026" style="left:0.559%;top:27.654%;width:12.304%;height:7.835%;background:hsl(34 52% 75%)"></span><span class="tile dark" title="Officia Anim · 10 chapters · kept 4 Oct 2026" style="left:0.559%;top:35.489%;width:12.304%;height:7.123%;background:hsl(34 52% 34%)"></span><span class="tile dark" title="Sed Labore Tempor · 10 chapters · kept 26 Sep 2026" style="left:12.863%;top:3.438%;width:12.976%;height:6.754%;background:hsl(34 52% 35%)"></span><span class="tile" title="Sunt Excepteur Fugiat · 10 chapters · kept 12 Apr 2026" style="left:12.863%;top:10.192%;width:12.976%;height:6.754%;background:hsl(34 52% 66%)"></span><span class="tile" title="Aliquip Incididunt · 10 chapters · kept 2 Jan 2026" style="left:12.863%;top:16.946%;width:12.976%;height:6.754%;background:hsl(34 52% 84%)"></span><span class="tile" title="Pariatur Fugiat Sunt · 10 chapters · kept 1 Apr 2026" style="left:12.863%;top:23.700%;width:12.976%;height:6.754%;background:hsl(34 52% 68%)"></span><span class="tile" title="Irure Dolore · 9 chapters · kept 20 Mar 2026" style="left:12.863%;top:30.454%;width:12.976%;height:6.079%;background:hsl(34 52% 70%)"></span><span class="tile dark" title="Sit Commodo Exercitation · 9 chapters · kept 21 Aug 2026" style="left:12.863%;top:36.533%;width:12.976%;height:6.079%;background:hsl(34 52% 42%)"></span><span class="tile dark" title="Pariatur Commodo · 9 chapters · kept 22 Jul 2026" style="left:25.839%;top:3.438%;width:11.857%;height:6.652%;background:hsl(34 52% 47%)"></span><span class="tile dark" title="Voluptate Minim · 9 chapters · kept 5 Aug 2026" style="left:25.839%;top:10.090%;width:11.857%;height:6.652%;background:hsl(34 52% 45%)"></span><span class="tile dark" title="Laboris Dolor Labore · 9 chapters · kept 26 Aug 2026" style="left:25.839%;top:16.742%;width:11.857%;height:6.652%;background:hsl(34 52% 41%)"></span><span class="tile dark" title="Veniam Aliquip Reprehenderit · 9 chapters · kept 8 Sep 2026" style="left:25.839%;top:23.394%;width:11.857%;height:6.652%;background:hsl(34 52% 39%)"></span><span class="tile" title="Dolore Culpa · 9 chapters · kept 11 Jan 2026" style="left:25.839%;top:30.047%;width:11.857%;height:6.652%;background:hsl(34 52% 82%)"></span><span class="tile dark" title="Enim Anim Sit · 8 chapters · kept 3 Jun 2026" style="left:25.839%;top:36.699%;width:11.857%;height:5.913%;background:hsl(34 52% 56%)"></span><span class="tile" title="Esse Occaecat · 8 chapters · kept 29 Apr 2026" style="left:37.696%;top:3.438%;width:10.977%;height:6.387%;background:hsl(34 52% 63%)"></span><span class="tile dark" title="Nulla Lorem · 8 chapters · kept 3 Oct 2026" style="left:48.673%;top:3.438%;width:10.977%;height:6.387%;background:hsl(34 52% 34%)"></span><span class="tile" title="Veniam Velit · 8 chapters · kept 9 May 2026" style="left:59.650%;top:3.438%;width:10.977%;height:6.387%;background:hsl(34 52% 61%)"></span><span class="tile dark" title="Tempor Incididunt · 7 chapters · kept 12 Sep 2026" style="left:70.627%;top:3.438%;width:9.605%;height:6.387%;background:hsl(34 52% 38%)"></span><span class="tile dark" title="Duis Velit Sed · 7 chapters · kept 19 Jun 2026" style="left:80.232%;top:3.438%;width:9.605%;height:6.387%;background:hsl(34 52% 53%)"></span><span class="tile" title="Consequat Quis · 7 chapters · kept 9 Mar 2026" style="left:89.836%;top:3.438%;width:9.605%;height:6.387%;background:hsl(34 52% 72%)"></span><span class="tile" title="Aliquip Deserunt · 7 chapters · kept 27 Feb 2026" style="left:37.696%;top:9.825%;width:11.226%;height:5.465%;background:hsl(34 52% 74%)"></span><span class="tile dark" title="Consectetur Laborum · 7 chapters · kept 25 Jul 2026" style="left:37.696%;top:15.289%;width:11.226%;height:5.465%;background:hsl(34 52% 47%)"></span><span class="tile dark" title="Cillum Aliqua Nostrud · 7 chapters · kept 6 Jul 2026" style="left:37.696%;top:20.754%;width:11.226%;height:5.465%;background:hsl(34 52% 50%)"></span><span class="tile dark" title="Aliquip Irure · 7 chapters · kept 9 Jun 2026" style="left:37.696%;top:26.218%;width:11.226%;height:5.465%;background:hsl(34 52% 55%)"></span><span class="tile" title="Adipiscing Duis Consequat · 7 chapters · kept 14 Apr 2026" style="left:37.696%;top:31.683%;width:11.226%;height:5.465%;background:hsl(34 52% 65%)"></span><span class="tile" title="Exercitation Mollit · 7 chapters · kept 16 May 2026" style="left:37.696%;top:37.147%;width:11.226%;height:5.465%;background:hsl(34 52% 60%)"></span><span class="tile" title="Occaecat Sint Deserunt · 7 chapters · kept 24 Mar 2026" style="left:48.922%;top:9.825%;width:11.051%;height:5.551%;background:hsl(34 52% 69%)"></span><span class="tile" title="Consequat Nostrud · 7 chapters · kept 20 Apr 2026" style="left:59.973%;top:9.825%;width:11.051%;height:5.551%;background:hsl(34 52% 64%)"></span><span class="tile dark" title="Culpa Magna Cupidatat · 6 chapters · kept 8 Jul 2026" style="left:71.024%;top:9.825%;width:9.472%;height:5.551%;background:hsl(34 52% 50%)"></span><span class="tile" title="Sed Commodo Sit · 6 chapters · kept 19 Mar 2026" style="left:80.497%;top:9.825%;width:9.472%;height:5.551%;background:hsl(34 52% 70%)"></span><span class="tile" title="Commodo Pariatur Reprehenderit · 6 chapters · kept 22 Apr 2026" style="left:89.969%;top:9.825%;width:9.472%;height:5.551%;background:hsl(34 52% 64%)"></span><span class="tile dark" title="Enim Cillum · 6 chapters · kept 6 Jul 2026" style="left:48.922%;top:15.376%;width:9.653%;height:5.447%;background:hsl(34 52% 50%)"></span><span class="tile" title="Deserunt Culpa · 6 chapters · kept 17 Mar 2026" style="left:48.922%;top:20.823%;width:9.653%;height:5.447%;background:hsl(34 52% 70%)"></span><span class="tile" title="Minim Pariatur Pariatur · 6 chapters · kept 19 Mar 2026" style="left:48.922%;top:26.270%;width:9.653%;height:5.447%;background:hsl(34 52% 70%)"></span><span class="tile dark" title="Esse Ipsum Eiusmod · 6 chapters · kept 3 Aug 2026" style="left:48.922%;top:31.718%;width:9.653%;height:5.447%;background:hsl(34 52% 45%)"></span><span class="tile" title="Enim Aute · 6 chapters · kept 30 Jan 2026" style="left:48.922%;top:37.165%;width:9.653%;height:5.447%;background:hsl(34 52% 79%)"></span><span class="tile" title="Nostrud Officia Proident · 5 chapters · kept 27 Jan 2026" style="left:58.575%;top:15.376%;width:8.173%;height:5.361%;background:hsl(34 52% 79%)"></span><span class="tile dark" title="Nisi Ullamco · 5 chapters · kept 19 Aug 2026" style="left:66.749%;top:15.376%;width:8.173%;height:5.361%;background:hsl(34 52% 42%)"></span><span class="tile dark" title="Officia Aliqua Lorem · 5 chapters · kept 25 May 2026" style="left:74.922%;top:15.376%;width:8.173%;height:5.361%;background:hsl(34 52% 58%)"></span><span class="tile" title="Sint Excepteur Excepteur · 5 chapters · kept 21 Jan 2026" style="left:83.095%;top:15.376%;width:8.173%;height:5.361%;background:hsl(34 52% 80%)"></span><span class="tile dark" title="Nulla Excepteur · 5 chapters · kept 9 Jun 2026" style="left:91.268%;top:15.376%;width:8.173%;height:5.361%;background:hsl(34 52% 55%)"></span><span class="tile dark" title="Consectetur Minim · 5 chapters · kept 25 Jul 2026" style="left:58.575%;top:20.737%;width:8.414%;height:5.208%;background:hsl(34 52% 47%)"></span><span class="tile" title="Laborum Cupidatat Aliquip · 4 chapters · kept 26 Mar 2026" style="left:58.575%;top:25.946%;width:8.414%;height:4.167%;background:hsl(34 52% 69%)"></span><span class="tile" title="Elit Fugiat · 4 chapters · kept 3 May 2026" style="left:58.575%;top:30.112%;width:8.414%;height:4.167%;background:hsl(34 52% 62%)"></span><span class="tile" title="Deserunt Officia · 4 chapters · kept 29 Apr 2026" style="left:58.575%;top:34.279%;width:8.414%;height:4.167%;background:hsl(34 52% 63%)"></span><span class="tile dark" title="Labore Nulla Commodo · 4 chapters · kept 18 Jun 2026" style="left:58.575%;top:38.445%;width:8.414%;height:4.167%;background:hsl(34 52% 54%)"></span><span class="tile" title="Pariatur Incididunt Lorem · 4 chapters · kept 4 Apr 2026" style="left:66.989%;top:20.737%;width:8.113%;height:4.321%;background:hsl(34 52% 67%)"></span><span class="tile" title="Exercitation Aliqua Dolor · 4 chapters · kept 5 Mar 2026" style="left:75.102%;top:20.737%;width:8.113%;height:4.321%;background:hsl(34 52% 73%)"></span><span class="tile" title="Aliquip Nostrud Magna · 4 chapters · kept 13 Jan 2026" style="left:83.215%;top:20.737%;width:8.113%;height:4.321%;background:hsl(34 52% 82%)"></span><span class="tile dark" title="Mollit Velit Velit · 4 chapters · kept 29 Jun 2026" style="left:91.328%;top:20.737%;width:8.113%;height:4.321%;background:hsl(34 52% 52%)"></span><span class="tile" title="Dolore Sit · 4 chapters · kept 22 Mar 2026" style="left:66.989%;top:25.058%;width:6.990%;height:5.015%;background:hsl(34 52% 70%)"></span><span class="tile" title="Amet Excepteur Mollit · 4 chapters · kept 3 Feb 2026" style="left:66.989%;top:30.074%;width:6.990%;height:5.015%;background:hsl(34 52% 78%)"></span><span class="tile" title="Elit Magna · 3 chapters · kept 28 Feb 2026" style="left:66.989%;top:35.089%;width:6.990%;height:3.762%;background:hsl(34 52% 73%)"></span><span class="tile" title="Aliquip Anim Reprehenderit · 3 chapters · kept 6 Mar 2026" style="left:66.989%;top:38.851%;width:6.990%;height:3.762%;background:hsl(34 52% 72%)"></span><span class="tile dark" title="Lorem Tempor Tempor · 3 chapters · kept 30 May 2026" style="left:73.979%;top:25.058%;width:6.366%;height:4.130%;background:hsl(34 52% 57%)"></span><span class="tile" title="Aliqua Sint · 3 chapters · kept 8 Mar 2026" style="left:80.344%;top:25.058%;width:6.366%;height:4.130%;background:hsl(34 52% 72%)"></span><span class="tile" title="Commodo Mollit Deserunt · 3 chapters · kept 26 Jan 2026" style="left:86.710%;top:25.058%;width:6.366%;height:4.130%;background:hsl(34 52% 79%)"></span><span class="tile dark" title="Sint Esse · 3 chapters · kept 17 May 2026" style="left:93.076%;top:25.058%;width:6.366%;height:4.130%;background:hsl(34 52% 59%)"></span><span class="tile" title="Minim Consequat · 2 chapters · kept 2 Feb 2026" style="left:73.979%;top:29.189%;width:5.223%;height:3.356%;background:hsl(34 52% 78%)"></span><span class="tile" title="Excepteur Cupidatat Anim · 2 chapters · kept 7 Jan 2026" style="left:73.979%;top:32.544%;width:5.223%;height:3.356%;background:hsl(34 52% 83%)"></span><span class="tile" title="Nulla Reprehenderit Irure · 2 chapters · kept 17 Feb 2026" style="left:73.979%;top:35.900%;width:5.223%;height:3.356%;background:hsl(34 52% 75%)"></span><span class="tile dark" title="Sint Cillum · 2 chapters · kept 20 May 2026" style="left:73.979%;top:39.256%;width:5.223%;height:3.356%;background:hsl(34 52% 59%)"></span><span class="tile" title="Consequat Deserunt · 2 chapters · kept 5 May 2026" style="left:79.202%;top:29.189%;width:5.060%;height:3.464%;background:hsl(34 52% 62%)"></span><span class="tile dark" title="Pariatur Sed · 2 chapters · kept 8 Sep 2026" style="left:84.262%;top:29.189%;width:5.060%;height:3.464%;background:hsl(34 52% 39%)"></span><span class="tile dark" title="Aute Aute · 2 chapters · kept 31 May 2026" style="left:89.322%;top:29.189%;width:5.060%;height:3.464%;background:hsl(34 52% 57%)"></span><span class="tile" title="Laborum Elit Velit · 2 chapters · kept 30 Apr 2026" style="left:94.381%;top:29.189%;width:5.060%;height:3.464%;background:hsl(34 52% 62%)"></span><span class="tile" title="Amet Tempor Exercitation · 2 chapters · kept 20 Jan 2026" style="left:79.202%;top:32.653%;width:4.400%;height:3.984%;background:hsl(34 52% 81%)"></span><span class="tile" title="Proident Quis Aliqua · 1 chapter · kept 30 Mar 2026" style="left:79.202%;top:36.636%;width:4.400%;height:1.992%;background:hsl(34 52% 68%)"></span><span class="tile" title="Anim Enim Dolore · 1 chapter · kept 20 Mar 2026" style="left:79.202%;top:38.628%;width:4.400%;height:1.992%;background:hsl(34 52% 70%)"></span><span class="tile dark" title="Culpa Mollit Elit · 1 chapter · kept 17 Jul 2026" style="left:79.202%;top:40.620%;width:4.400%;height:1.992%;background:hsl(34 52% 48%)"></span><span class="tile" title="Pariatur Consectetur · 1 chapter · kept 26 Jan 2026" style="left:83.602%;top:32.653%;width:3.960%;height:2.213%;background:hsl(34 52% 79%)"></span><span class="tile dark" title="Ullamco Anim · 1 chapter · kept 11 Sep 2026" style="left:87.562%;top:32.653%;width:3.960%;height:2.213%;background:hsl(34 52% 38%)"></span><span class="tile dark" title="Aliqua Cillum Cupidatat · 1 chapter · kept 15 Aug 2026" style="left:91.522%;top:32.653%;width:3.960%;height:2.213%;background:hsl(34 52% 43%)"></span><span class="tile" title="Sit Aute Veniam · 1 chapter · kept 23 Jan 2026" style="left:95.481%;top:32.653%;width:3.960%;height:2.213%;background:hsl(34 52% 80%)"></span><span class="tile dark" title="Mollit Sed Nisi · 1 chapter · kept 23 Sep 2026" style="left:83.602%;top:34.866%;width:4.526%;height:1.937%;background:hsl(34 52% 36%)"></span><span class="tile" title="Aliqua Consectetur Voluptate · 1 chapter · kept 7 May 2026" style="left:83.602%;top:36.802%;width:4.526%;height:1.937%;background:hsl(34 52% 61%)"></span><span class="tile" title="Elit Dolore Laborum · 1 chapter · kept 27 Jan 2026" style="left:83.602%;top:38.739%;width:4.526%;height:1.937%;background:hsl(34 52% 79%)"></span><span class="tile dark" title="Aliqua Deserunt · 1 chapter · kept 24 Aug 2026" style="left:83.602%;top:40.675%;width:4.526%;height:1.937%;background:hsl(34 52% 41%)"></span><span class="tile dark" title="Quis Reprehenderit Labore · 1 chapter · kept 16 Jun 2026" style="left:88.127%;top:34.866%;width:3.771%;height:2.324%;background:hsl(34 52% 54%)"></span><span class="tile dark" title="Laboris Veniam · 1 chapter · kept 3 Oct 2026" style="left:91.899%;top:34.866%;width:3.771%;height:2.324%;background:hsl(34 52% 34%)"></span><span class="tile" title="Dolor Nostrud · 1 chapter · kept 1 Apr 2026" style="left:95.670%;top:34.866%;width:3.771%;height:2.324%;background:hsl(34 52% 68%)"></span><span class="tile" title="Consectetur Eiusmod Proident · 1 chapter · kept 21 Feb 2026" style="left:88.127%;top:37.190%;width:3.233%;height:2.711%;background:hsl(34 52% 75%)"></span><span class="tile" title="Laboris Irure · 1 chapter · kept 9 Jan 2026" style="left:88.127%;top:39.901%;width:3.233%;height:2.711%;background:hsl(34 52% 83%)"></span><span class="tile" title="Reprehenderit Commodo · 1 chapter · kept 25 Feb 2026" style="left:91.360%;top:37.190%;width:4.041%;height:2.169%;background:hsl(34 52% 74%)"></span><span class="tile dark" title="Ullamco Sed · 1 chapter · kept 25 May 2026" style="left:95.401%;top:37.190%;width:4.041%;height:2.169%;background:hsl(34 52% 58%)"></span><span class="tile" title="Cillum Velit Magna · 1 chapter · kept 16 Jan 2026" style="left:91.360%;top:39.359%;width:5.388%;height:1.627%;background:hsl(34 52% 81%)"></span><span class="tile dark" title="Laboris Enim Quis · 1 chapter · kept 26 May 2026" style="left:91.360%;top:40.985%;width:5.388%;height:1.627%;background:hsl(34 52% 58%)"></span><span class="tile dark" title="Adipiscing Nostrud · 1 chapter · kept 28 Sep 2026" style="left:96.748%;top:39.359%;width:2.694%;height:3.253%;background:hsl(34 52% 35%)"></span><div class="region" style="left:0.000%;top:42.925%;width:100.000%;height:39.151%"><span class="rname">A Third Project <em>83 · 448 ch</em></span></div><span class="tile dark" title="Elit Anim Officia · 12 chapters · kept 25 Aug 2026" style="left:0.559%;top:46.362%;width:12.581%;height:7.453%;background:hsl(342 52% 41%)"></span><span class="tile" title="Consequat Nostrud Aliqua · 12 chapters · kept 16 May 2026" style="left:0.559%;top:53.815%;width:12.581%;height:7.453%;background:hsl(342 52% 60%)"></span><span class="tile dark" title="Magna Aliqua · 11 chapters · kept 20 Sep 2026" style="left:0.559%;top:61.268%;width:12.581%;height:6.832%;background:hsl(342 52% 37%)"></span><span class="tile dark" title="Amet Excepteur · 11 chapters · kept 25 Aug 2026" style="left:0.559%;top:68.099%;width:12.581%;height:6.832%;background:hsl(342 52% 41%)"></span><span class="tile" title="Dolore Duis Culpa · 11 chapters · kept 2 Jan 2026" style="left:0.559%;top:74.931%;width:12.581%;height:6.832%;background:hsl(342 52% 84%)"></span><span class="tile" title="Mollit Occaecat Dolor · 10 chapters · kept 14 Jan 2026" style="left:13.140%;top:46.362%;width:11.036%;height:7.080%;background:hsl(342 52% 82%)"></span><span class="tile dark" title="Laboris Mollit · 10 chapters · kept 26 May 2026" style="left:13.140%;top:53.442%;width:11.036%;height:7.080%;background:hsl(342 52% 58%)"></span><span class="tile dark" title="Velit Sunt · 10 chapters · kept 10 Jul 2026" style="left:13.140%;top:60.522%;width:11.036%;height:7.080%;background:hsl(342 52% 50%)"></span><span class="tile" title="Lorem Occaecat · 10 chapters · kept 21 Feb 2026" style="left:13.140%;top:67.603%;width:11.036%;height:7.080%;background:hsl(342 52% 75%)"></span><span class="tile dark" title="Elit Pariatur Sed · 10 chapters · kept 22 Jun 2026" style="left:13.140%;top:74.683%;width:11.036%;height:7.080%;background:hsl(342 52% 53%)"></span><span class="tile" title="Voluptate Consectetur Mollit · 10 chapters · kept 26 Jan 2026" style="left:24.176%;top:46.362%;width:10.815%;height:7.225%;background:hsl(342 52% 79%)"></span><span class="tile" title="Dolore Cillum · 10 chapters · kept 10 May 2026" style="left:24.176%;top:53.587%;width:10.815%;height:7.225%;background:hsl(342 52% 61%)"></span><span class="tile dark" title="Enim Nulla Duis · 10 chapters · kept 6 Aug 2026" style="left:24.176%;top:60.811%;width:10.815%;height:7.225%;background:hsl(342 52% 45%)"></span><span class="tile" title="Ullamco Tempor · 10 chapters · kept 10 Apr 2026" style="left:24.176%;top:68.036%;width:10.815%;height:7.225%;background:hsl(342 52% 66%)"></span><span class="tile" title="Laborum Aute · 9 chapters · kept 3 Feb 2026" style="left:24.176%;top:75.261%;width:10.815%;height:6.502%;background:hsl(342 52% 78%)"></span><span class="tile" title="Aute Velit Laborum · 9 chapters · kept 15 Apr 2026" style="left:34.991%;top:46.362%;width:11.257%;height:6.247%;background:hsl(342 52% 65%)"></span><span class="tile dark" title="Consectetur Quis Nulla · 9 chapters · kept 7 Aug 2026" style="left:34.991%;top:52.609%;width:11.257%;height:6.247%;background:hsl(342 52% 45%)"></span><span class="tile" title="Nulla Incididunt Exercitation · 9 chapters · kept 1 Feb 2026" style="left:34.991%;top:58.856%;width:11.257%;height:6.247%;background:hsl(342 52% 78%)"></span><span class="tile dark" title="Exercitation Proident Laboris · 8 chapters · kept 16 Jun 2026" style="left:34.991%;top:65.104%;width:11.257%;height:5.553%;background:hsl(342 52% 54%)"></span><span class="tile dark" title="Consectetur Amet Dolor · 8 chapters · kept 23 Jul 2026" style="left:34.991%;top:70.657%;width:11.257%;height:5.553%;background:hsl(342 52% 47%)"></span><span class="tile" title="Dolor Sed Laborum · 8 chapters · kept 18 Mar 2026" style="left:34.991%;top:76.210%;width:11.257%;height:5.553%;background:hsl(342 52% 70%)"></span><span class="tile dark" title="Nulla Dolore Exercitation · 8 chapters · kept 7 Sep 2026" style="left:46.248%;top:46.362%;width:10.639%;height:5.876%;background:hsl(342 52% 39%)"></span><span class="tile dark" title="Minim Aute Labore · 8 chapters · kept 24 Jul 2026" style="left:56.886%;top:46.362%;width:10.639%;height:5.876%;background:hsl(342 52% 47%)"></span><span class="tile" title="Commodo Velit · 8 chapters · kept 13 Mar 2026" style="left:67.525%;top:46.362%;width:10.639%;height:5.876%;background:hsl(342 52% 71%)"></span><span class="tile" title="Ipsum Adipiscing · 8 chapters · kept 7 Feb 2026" style="left:78.164%;top:46.362%;width:10.639%;height:5.876%;background:hsl(342 52% 77%)"></span><span class="tile dark" title="Sunt Sunt · 8 chapters · kept 1 Aug 2026" style="left:88.803%;top:46.362%;width:10.639%;height:5.876%;background:hsl(342 52% 46%)"></span><span class="tile dark" title="Excepteur Incididunt · 8 chapters · kept 12 Aug 2026" style="left:46.248%;top:52.238%;width:10.056%;height:6.216%;background:hsl(342 52% 44%)"></span><span class="tile dark" title="Consequat Ipsum Anim · 8 chapters · kept 13 Jul 2026" style="left:46.248%;top:58.454%;width:10.056%;height:6.216%;background:hsl(342 52% 49%)"></span><span class="tile" title="Commodo Reprehenderit Adipiscing · 8 chapters · kept 26 Feb 2026" style="left:46.248%;top:64.669%;width:10.056%;height:6.216%;background:hsl(342 52% 74%)"></span><span class="tile dark" title="Anim Excepteur Excepteur · 7 chapters · kept 2 Jun 2026" style="left:46.248%;top:70.885%;width:10.056%;height:5.439%;background:hsl(342 52% 56%)"></span><span class="tile" title="Sed Enim · 7 chapters · kept 13 May 2026" style="left:46.248%;top:76.324%;width:10.056%;height:5.439%;background:hsl(342 52% 60%)"></span><span class="tile dark" title="Consectetur Ipsum Officia · 7 chapters · kept 16 Jul 2026" style="left:56.304%;top:52.238%;width:11.184%;height:4.891%;background:hsl(342 52% 48%)"></span><span class="tile" title="Laborum Laboris · 7 chapters · kept 21 Jan 2026" style="left:67.488%;top:52.238%;width:11.184%;height:4.891%;background:hsl(342 52% 80%)"></span><span class="tile" title="Irure Fugiat · 7 chapters · kept 3 Apr 2026" style="left:78.672%;top:52.238%;width:11.184%;height:4.891%;background:hsl(342 52% 67%)"></span><span class="tile" title="Consectetur Tempor · 6 chapters · kept 23 Mar 2026" style="left:89.855%;top:52.238%;width:9.586%;height:4.891%;background:hsl(342 52% 69%)"></span><span class="tile" title="Quis Lorem · 6 chapters · kept 17 Jan 2026" style="left:56.304%;top:57.128%;width:8.627%;height:5.434%;background:hsl(342 52% 81%)"></span><span class="tile" title="Proident Aliqua · 6 chapters · kept 25 Feb 2026" style="left:64.932%;top:57.128%;width:8.627%;height:5.434%;background:hsl(342 52% 74%)"></span><span class="tile" title="Commodo Aute Deserunt · 6 chapters · kept 31 Jan 2026" style="left:73.559%;top:57.128%;width:8.627%;height:5.434%;background:hsl(342 52% 79%)"></span><span class="tile dark" title="Fugiat Eiusmod · 6 chapters · kept 19 Sep 2026" style="left:82.187%;top:57.128%;width:8.627%;height:5.434%;background:hsl(342 52% 37%)"></span><span class="tile dark" title="Nostrud Tempor Aliqua · 6 chapters · kept 31 Jul 2026" style="left:90.814%;top:57.128%;width:8.627%;height:5.434%;background:hsl(342 52% 46%)"></span><span class="tile dark" title="Culpa Tempor Duis · 6 chapters · kept 2 Jun 2026" style="left:56.304%;top:62.562%;width:8.953%;height:5.236%;background:hsl(342 52% 56%)"></span><span class="tile" title="Enim Cupidatat · 6 chapters · kept 25 Jan 2026" style="left:56.304%;top:67.799%;width:8.953%;height:5.236%;background:hsl(342 52% 80%)"></span><span class="tile dark" title="Lorem Laboris Incididunt · 5 chapters · kept 19 Sep 2026" style="left:56.304%;top:73.035%;width:8.953%;height:4.364%;background:hsl(342 52% 37%)"></span><span class="tile dark" title="Elit Nisi · 5 chapters · kept 3 Oct 2026" style="left:56.304%;top:77.399%;width:8.953%;height:4.364%;background:hsl(342 52% 34%)"></span><span class="tile dark" title="Occaecat Lorem · 5 chapters · kept 1 Jul 2026" style="left:65.257%;top:62.562%;width:8.996%;height:4.343%;background:hsl(342 52% 51%)"></span><span class="tile" title="Mollit Deserunt · 5 chapters · kept 12 Mar 2026" style="left:74.253%;top:62.562%;width:8.996%;height:4.343%;background:hsl(342 52% 71%)"></span><span class="tile" title="Ullamco Pariatur · 5 chapters · kept 4 May 2026" style="left:83.249%;top:62.562%;width:8.996%;height:4.343%;background:hsl(342 52% 62%)"></span><span class="tile" title="Laboris Aute Enim · 4 chapters · kept 11 Apr 2026" style="left:92.245%;top:62.562%;width:7.197%;height:4.343%;background:hsl(342 52% 66%)"></span><span class="tile" title="Exercitation Deserunt Velit · 4 chapters · kept 23 Apr 2026" style="left:65.257%;top:66.905%;width:6.311%;height:4.953%;background:hsl(342 52% 64%)"></span><span class="tile dark" title="Cillum Officia · 4 chapters · kept 29 May 2026" style="left:65.257%;top:71.858%;width:6.311%;height:4.953%;background:hsl(342 52% 57%)"></span><span class="tile dark" title="Incididunt Pariatur Occaecat · 4 chapters · kept 10 Aug 2026" style="left:65.257%;top:76.810%;width:6.311%;height:4.953%;background:hsl(342 52% 44%)"></span><span class="tile dark" title="Ullamco Sunt Deserunt · 3 chapters · kept 3 Oct 2026" style="left:71.568%;top:66.905%;width:6.311%;height:3.714%;background:hsl(342 52% 34%)"></span><span class="tile" title="Anim Commodo · 3 chapters · kept 26 Apr 2026" style="left:71.568%;top:70.620%;width:6.311%;height:3.714%;background:hsl(342 52% 63%)"></span><span class="tile dark" title="Culpa Adipiscing Adipiscing · 3 chapters · kept 30 Aug 2026" style="left:71.568%;top:74.334%;width:6.311%;height:3.714%;background:hsl(342 52% 40%)"></span><span class="tile" title="Nisi Irure · 3 chapters · kept 15 May 2026" style="left:71.568%;top:78.049%;width:6.311%;height:3.714%;background:hsl(342 52% 60%)"></span><span class="tile" title="Sed Duis Sit · 3 chapters · kept 10 May 2026" style="left:77.879%;top:66.905%;width:7.187%;height:3.261%;background:hsl(342 52% 61%)"></span><span class="tile" title="Veniam Laborum Enim · 2 chapters · kept 24 Apr 2026" style="left:85.066%;top:66.905%;width:4.792%;height:3.261%;background:hsl(342 52% 64%)"></span><span class="tile dark" title="Velit Aute · 2 chapters · kept 28 May 2026" style="left:89.858%;top:66.905%;width:4.792%;height:3.261%;background:hsl(342 52% 57%)"></span><span class="tile" title="Sed Officia · 2 chapters · kept 6 Mar 2026" style="left:94.650%;top:66.905%;width:4.792%;height:3.261%;background:hsl(342 52% 72%)"></span><span class="tile dark" title="Irure Aliquip · 2 chapters · kept 28 Jun 2026" style="left:77.879%;top:70.167%;width:5.391%;height:2.899%;background:hsl(342 52% 52%)"></span><span class="tile" title="Laborum Dolor Velit · 2 chapters · kept 2 Feb 2026" style="left:77.879%;top:73.066%;width:5.391%;height:2.899%;background:hsl(342 52% 78%)"></span><span class="tile" title="Culpa Nisi Sed · 2 chapters · kept 4 Feb 2026" style="left:77.879%;top:75.965%;width:5.391%;height:2.899%;background:hsl(342 52% 78%)"></span><span class="tile dark" title="Excepteur Mollit Laboris · 2 chapters · kept 5 Jun 2026" style="left:77.879%;top:78.864%;width:5.391%;height:2.899%;background:hsl(342 52% 56%)"></span><span class="tile" title="Eiusmod Consequat Sint · 2 chapters · kept 13 Jan 2026" style="left:83.270%;top:70.167%;width:5.391%;height:2.899%;background:hsl(342 52% 82%)"></span><span class="tile dark" title="Proident Laborum · 2 chapters · kept 23 Jun 2026" style="left:88.660%;top:70.167%;width:5.391%;height:2.899%;background:hsl(342 52% 53%)"></span><span class="tile dark" title="Lorem Amet Commodo · 2 chapters · kept 8 Aug 2026" style="left:94.051%;top:70.167%;width:5.391%;height:2.899%;background:hsl(342 52% 44%)"></span><span class="tile dark" title="Laboris Lorem · 2 chapters · kept 22 Aug 2026" style="left:83.270%;top:73.066%;width:4.492%;height:3.479%;background:hsl(342 52% 42%)"></span><span class="tile" title="Cupidatat Adipiscing · 1 chapter · kept 4 May 2026" style="left:83.270%;top:76.545%;width:4.492%;height:1.739%;background:hsl(342 52% 62%)"></span><span class="tile" title="Fugiat Excepteur Nostrud · 1 chapter · kept 2 Apr 2026" style="left:83.270%;top:78.284%;width:4.492%;height:1.739%;background:hsl(342 52% 68%)"></span><span class="tile dark" title="Cupidatat Elit · 1 chapter · kept 8 Aug 2026" style="left:83.270%;top:80.024%;width:4.492%;height:1.739%;background:hsl(342 52% 44%)"></span><span class="tile" title="Duis Amet · 1 chapter · kept 31 Mar 2026" style="left:87.762%;top:73.066%;width:3.893%;height:2.007%;background:hsl(342 52% 68%)"></span><span class="tile" title="Duis Fugiat · 1 chapter · kept 17 Mar 2026" style="left:91.655%;top:73.066%;width:3.893%;height:2.007%;background:hsl(342 52% 70%)"></span><span class="tile dark" title="Quis Esse Ullamco · 1 chapter · kept 28 Jun 2026" style="left:95.548%;top:73.066%;width:3.893%;height:2.007%;background:hsl(342 52% 52%)"></span><span class="tile dark" title="Lorem Nisi Reprehenderit · 1 chapter · kept 14 Jul 2026" style="left:87.762%;top:75.073%;width:3.893%;height:2.007%;background:hsl(342 52% 49%)"></span><span class="tile dark" title="Amet Consequat Consequat · 1 chapter · kept 17 Aug 2026" style="left:91.655%;top:75.073%;width:3.893%;height:2.007%;background:hsl(342 52% 43%)"></span><span class="tile" title="Occaecat Magna · 1 chapter · kept 13 May 2026" style="left:95.548%;top:75.073%;width:3.893%;height:2.007%;background:hsl(342 52% 60%)"></span><span class="tile" title="Minim Velit · 1 chapter · kept 27 Apr 2026" style="left:87.762%;top:77.080%;width:3.337%;height:2.342%;background:hsl(342 52% 63%)"></span><span class="tile" title="Commodo Fugiat · 1 chapter · kept 3 May 2026" style="left:87.762%;top:79.421%;width:3.337%;height:2.342%;background:hsl(342 52% 62%)"></span><span class="tile" title="Aliquip Laboris · 1 chapter · kept 11 Apr 2026" style="left:91.099%;top:77.080%;width:4.171%;height:1.873%;background:hsl(342 52% 66%)"></span><span class="tile" title="Commodo Aliqua · 1 chapter · kept 29 Jan 2026" style="left:95.270%;top:77.080%;width:4.171%;height:1.873%;background:hsl(342 52% 79%)"></span><span class="tile dark" title="Sint Enim Magna · 1 chapter · kept 24 May 2026" style="left:91.099%;top:78.953%;width:2.781%;height:2.810%;background:hsl(342 52% 58%)"></span><span class="tile" title="Sint Pariatur Aute · 1 chapter · kept 6 Jan 2026" style="left:93.880%;top:78.953%;width:2.781%;height:2.810%;background:hsl(342 52% 83%)"></span><span class="tile dark" title="Nisi Pariatur Elit · 1 chapter · kept 4 Jul 2026" style="left:96.660%;top:78.953%;width:2.781%;height:2.810%;background:hsl(342 52% 51%)"></span><div class="region" style="left:0.000%;top:82.075%;width:100.000%;height:17.925%"><span class="rname">A First Project <em>38 · 200 ch</em></span></div><span class="tile dark" title="Sit Amet Consectetur · 14 chapters · kept 21 Jul 2026" style="left:0.559%;top:85.513%;width:12.855%;height:7.632%;background:hsl(172 52% 48%)"></span><span class="tile" title="Mollit Cupidatat Irure · 12 chapters · kept 10 Jan 2026" style="left:0.559%;top:93.145%;width:12.855%;height:6.542%;background:hsl(172 52% 82%)"></span><span class="tile" title="Cupidatat Nostrud · 12 chapters · kept 5 May 2026" style="left:13.413%;top:85.513%;width:11.372%;height:7.395%;background:hsl(172 52% 62%)"></span><span class="tile" title="Dolor Esse · 11 chapters · kept 6 May 2026" style="left:13.413%;top:92.908%;width:11.372%;height:6.779%;background:hsl(172 52% 61%)"></span><span class="tile" title="Ipsum Consectetur · 10 chapters · kept 6 Jan 2026" style="left:24.785%;top:85.513%;width:9.394%;height:7.460%;background:hsl(172 52% 83%)"></span><span class="tile dark" title="Adipiscing Elit · 9 chapters · kept 2 Sep 2026" style="left:24.785%;top:92.973%;width:9.394%;height:6.714%;background:hsl(172 52% 40%)"></span><span class="tile dark" title="Pariatur Anim Duis · 9 chapters · kept 8 Jun 2026" style="left:34.179%;top:85.513%;width:8.899%;height:7.087%;background:hsl(172 52% 55%)"></span><span class="tile" title="Nisi Incididunt Aute · 9 chapters · kept 11 Feb 2026" style="left:34.179%;top:92.600%;width:8.899%;height:7.087%;background:hsl(172 52% 77%)"></span><span class="tile" title="Amet Labore Cupidatat · 9 chapters · kept 5 Mar 2026" style="left:43.078%;top:85.513%;width:8.405%;height:7.504%;background:hsl(172 52% 73%)"></span><span class="tile sel dark" title="Lorem Ipsum Dolor · 8 chapters · kept 9 Sep 2026" style="left:43.078%;top:93.017%;width:8.405%;height:6.670%;background:hsl(172 52% 39%)"><b class="one">Lorem Ipsum Dolor</b></span><span class="tile" title="Sit Anim · 7 chapters · kept 14 May 2026" style="left:51.483%;top:85.513%;width:9.888%;height:4.961%;background:hsl(172 52% 60%)"></span><span class="tile" title="Veniam Sint · 7 chapters · kept 26 Feb 2026" style="left:51.483%;top:90.474%;width:9.888%;height:4.961%;background:hsl(172 52% 74%)"></span><span class="tile dark" title="Quis Nostrud · 6 chapters · kept 1 Oct 2026" style="left:51.483%;top:95.435%;width:9.888%;height:4.252%;background:hsl(172 52% 35%)"></span><span class="tile" title="Reprehenderit Esse Anim · 6 chapters · kept 23 Jan 2026" style="left:61.372%;top:85.513%;width:8.899%;height:4.725%;background:hsl(172 52% 80%)"></span><span class="tile dark" title="Mollit Cupidatat · 6 chapters · kept 1 Oct 2026" style="left:61.372%;top:90.238%;width:8.899%;height:4.725%;background:hsl(172 52% 35%)"></span><span class="tile" title="Nulla Velit Laborum · 6 chapters · kept 15 Mar 2026" style="left:61.372%;top:94.963%;width:8.899%;height:4.725%;background:hsl(172 52% 71%)"></span><span class="tile" title="Laboris Labore · 5 chapters · kept 17 Mar 2026" style="left:70.271%;top:85.513%;width:7.416%;height:4.725%;background:hsl(172 52% 70%)"></span><span class="tile dark" title="Elit Pariatur · 5 chapters · kept 11 Aug 2026" style="left:70.271%;top:90.238%;width:7.416%;height:4.725%;background:hsl(172 52% 44%)"></span><span class="tile" title="Velit Officia Consectetur · 5 chapters · kept 8 Apr 2026" style="left:70.271%;top:94.963%;width:7.416%;height:4.725%;background:hsl(172 52% 66%)"></span><span class="tile dark" title="Duis Nisi · 5 chapters · kept 16 Aug 2026" style="left:77.687%;top:85.513%;width:8.367%;height:4.188%;background:hsl(172 52% 43%)"></span><span class="tile dark" title="Dolor Sed Veniam · 4 chapters · kept 29 Sep 2026" style="left:86.054%;top:85.513%;width:6.694%;height:4.188%;background:hsl(172 52% 35%)"></span><span class="tile dark" title="Excepteur Veniam · 4 chapters · kept 28 May 2026" style="left:92.748%;top:85.513%;width:6.694%;height:4.188%;background:hsl(172 52% 57%)"></span><span class="tile" title="Sed Nostrud · 4 chapters · kept 16 Mar 2026" style="left:77.687%;top:89.701%;width:7.017%;height:3.995%;background:hsl(172 52% 71%)"></span><span class="tile dark" title="Ut Enim ad Minim · 3 chapters · kept 27 Sep 2026" style="left:77.687%;top:93.696%;width:7.017%;height:2.996%;background:hsl(172 52% 35%)"></span><span class="tile dark" title="Cillum Cillum Enim · 3 chapters · kept 27 Aug 2026" style="left:77.687%;top:96.692%;width:7.017%;height:2.996%;background:hsl(172 52% 41%)"></span><span class="tile" title="Occaecat Lorem Commodo · 3 chapters · kept 19 Mar 2026" style="left:84.705%;top:89.701%;width:6.316%;height:3.329%;background:hsl(172 52% 70%)"></span><span class="tile dark" title="Sed Do Eiusmod · 2 chapters · kept 5 Sep 2026" style="left:91.020%;top:89.701%;width:4.210%;height:3.329%;background:hsl(172 52% 39%)"></span><span class="tile" title="Magna Consequat · 2 chapters · kept 8 Jan 2026" style="left:95.231%;top:89.701%;width:4.210%;height:3.329%;background:hsl(172 52% 83%)"></span><span class="tile dark" title="Nulla Duis Aliqua · 2 chapters · kept 2 Oct 2026" style="left:84.705%;top:93.030%;width:4.210%;height:3.329%;background:hsl(172 52% 34%)"></span><span class="tile" title="Irure Fugiat Laborum · 2 chapters · kept 5 Jan 2026" style="left:84.705%;top:96.359%;width:4.210%;height:3.329%;background:hsl(172 52% 83%)"></span><span class="tile" title="Sint Exercitation Duis · 2 chapters · kept 12 May 2026" style="left:88.915%;top:93.030%;width:5.263%;height:2.663%;background:hsl(172 52% 60%)"></span><span class="tile dark" title="Veniam Officia · 2 chapters · kept 27 Jun 2026" style="left:94.178%;top:93.030%;width:5.263%;height:2.663%;background:hsl(172 52% 52%)"></span><span class="tile dark" title="Sunt Eiusmod · 1 chapter · kept 23 Aug 2026" style="left:88.915%;top:95.693%;width:3.509%;height:1.997%;background:hsl(172 52% 42%)"></span><span class="tile" title="Consequat Pariatur · 1 chapter · kept 26 Jan 2026" style="left:88.915%;top:97.690%;width:3.509%;height:1.997%;background:hsl(172 52% 79%)"></span><span class="tile" title="Officia Enim · 1 chapter · kept 13 Apr 2026" style="left:92.424%;top:95.693%;width:3.509%;height:1.997%;background:hsl(172 52% 66%)"></span><span class="tile" title="Occaecat Reprehenderit Cupidatat · 1 chapter · kept 3 Jan 2026" style="left:95.933%;top:95.693%;width:3.509%;height:1.997%;background:hsl(172 52% 84%)"></span><span class="tile" title="Duis Sed Nostrud · 1 chapter · kept 22 Feb 2026" style="left:92.424%;top:97.690%;width:3.509%;height:1.997%;background:hsl(172 52% 75%)"></span><span class="tile dark" title="Ullamco Nisi · 1 chapter · kept 4 Oct 2026" style="left:95.933%;top:97.690%;width:3.509%;height:1.997%;background:hsl(172 52% 34%)"></span></div>
    </section>
    <aside>
        <div class="card">
            <h3>Selected</h3>
            <h2>Lorem Ipsum Dolor</h2>
            <span class="chip">A First Project</span>
            <div class="facts"><div><b>8</b><span>chapters</span></div><div><b>9 Sep</b><span>kept</span></div><div><b>2×</b><span>cited</span></div><div><b>1</b><span>note</span></div></div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit? Sed do eiusmod tempor incididunt ut labore…</p>
            <div class="btns"><span>Open</span><span>Cite</span><span>Show on the year</span></div>
        </div>
        <div class="card">
            <h3>Reading the map</h3>
            <div class="scale">
                <div>older<i style="background:linear-gradient(90deg,hsl(172 48% 84%),hsl(172 48% 34%))"></i>newer</div>
                <div>older<i style="background:linear-gradient(90deg,hsl(34 48% 84%),hsl(34 48% 34%))"></i>newer</div>
                <div>older<i style="background:linear-gradient(90deg,hsl(342 48% 84%),hsl(342 48% 34%))"></i>newer</div>
                <div>A tile's size is its chapters; hover any tile for its name.</div>
            </div>
        </div>
        <div class="card"><h3>Projects</h3><div class="tot"><span style="--h:172">A First Project</span><b>38</b><i style="width:18.3%;background:hsl(172 55% 45%)"></i><small>200 chapters</small></div><div class="tot"><span style="--h:34">A Second Project</span><b>91</b><i style="width:40.6%;background:hsl(34 55% 45%)"></i><small>442 chapters</small></div><div class="tot"><span style="--h:342">A Third Project</span><b>83</b><i style="width:41.1%;background:hsl(342 55% 45%)"></i><small>448 chapters</small></div></div>
    </aside>
</div>
</body>
</html>
`})]})]})]}),a.jsxs(i,{children:[a.jsx(o,{children:"[Layout Ideas](/dougs-design/#layout-ideas)"}),a.jsx(t,{children:"These are ideas, not choices yet. Each is the same pages inside a different frame: a side bar, a top bar, both, a narrow rail, two bars, or none, each once darker and once lighter, in soft black, a blue between it and white, and white. What does not change is taken from the homes I liked: covers in many colors, light accents, the library's mark, a way to me from every screen, and a book that reports to its subject. The last shows a conversation inside the black side bar. I will choose which of them stay."}),a.jsxs(i,{children:[a.jsx(d,{children:"11"}),a.jsx(o,{children:"[A Black Side Bar](/dougs-design/#a-black-side-bar)"}),a.jsx(t,{children:"Concept 11, an idea, after the homes I liked, in the coming-soon page's soft black."}),a.jsx(t,{children:"One bar, at the left, in soft black: the library's mark, its subjects, what the open one holds, and me at its foot. The page beside it is white. Press a cover, a subject, or me; press Shelf and List to see the same books two ways."}),a.jsxs(t,{children:[a.jsx(p,{}),a.jsx(r,{children:"/.design/3-every-concept~011-desk.png"}),a.jsx(r,{children:"/.design/3-every-concept~011-phone.png"})]}),a.jsxs(t,{children:[a.jsx(c,{}),a.jsx(n,{children:`<!doctype html>
<html lang="en" data-layout="side" data-tone="dark" data-at="subject" data-view="shelf">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>A Black Side Bar</title>
<meta name="number" content="11">
<meta name="state" content="idea">
<meta name="after" content="the homes I liked, in the coming-soon page's soft black">
<meta name="idea" content="One bar, at the left, in soft black: the library's mark, its subjects, what the open one holds, and me at its foot. The page beside it is white. Press a cover, a subject, or me; press Shelf and List to see the same books two ways.">
<meta name="said" content="">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
<style>
    /* ---- what does not change between the ideas ----
       The frame is soft black, the blue between it and white, and white. The soft black #0c1b1f and the opal #c8f4fb are the
       coming-soon page's own; the blues are the hue between them (208 to 223 in OKLCH) walked from dark to light.
       The CONTENT keeps its own colors: every book a cover of its own, the light accents the opal's wave. */
    :root { --night: #0c1b1f; --deep: #14323c; --blue: #166178; --sea: #4e9eb9; --sky: #8fc8dc; --opal: #c8f4fb; --pale: #e3f5fa; --mist: #f1f7f9; --white: #ffffff;
        --ink: #10252c; --soft: #516770; --line: #dbe7ec; --me: #e8590c;
        --wash: linear-gradient(105deg, #e2f6fb 0%, #ecf0fd 52%, #fae9f4 100%);
        --serif: 'Cormorant Garamond', Georgia, serif; --sans: 'Inter', system-ui, sans-serif; }
    [data-tone="dark"] { --bar: var(--night); --bar-fg: #ffffff; --bar-dim: #a9bcc1; --bar-on: rgba(255, 255, 255, .11); --bar-line: #1d3339; --mark: var(--opal); --mark-fg: var(--night); }
    [data-tone="light"] { --bar: var(--white); --bar-fg: var(--ink); --bar-dim: var(--soft); --bar-on: var(--pale); --bar-line: var(--line); --mark: var(--night); --mark-fg: #ffffff; }
    [data-at="library"] [class*="at-"]:not(.at-library), [data-at="subject"] [class*="at-"]:not(.at-subject), [data-at="book"] [class*="at-"]:not(.at-book), [data-at="chat"] [class*="at-"]:not(.at-chat), [data-at="author"] [class*="at-"]:not(.at-author) { display: none !important; }

    * { box-sizing: border-box; margin: 0; }
    body { background: var(--white); color: var(--ink); font: 400 14px/1.5 var(--sans); }
    a { color: inherit; text-decoration: none; }
    svg { width: 15px; height: 15px; stroke: currentColor; fill: none; stroke-width: 1.7; stroke-linecap: round; stroke-linejoin: round; flex: none; }
    [data-go], [data-view-is] { cursor: pointer; }
    h4 { display: flex; align-items: center; gap: 8px; margin-bottom: 10px; font: 600 10.5px/1 var(--sans); letter-spacing: .12em; text-transform: uppercase; color: var(--soft); }
    h4 small { margin-left: auto; font: 400 11.5px/1 var(--sans); letter-spacing: 0; text-transform: none; }
    h4.next { margin-top: 22px; }
    .star { color: var(--me); font-style: normal; }

    /* the library's own things: its mark, its subjects, a way to find, and me. They are held together only where an idea has a side bar. */
    .side { display: contents; }
    [data-at="chat"] .holds a.first { background: var(--bar-on, var(--pale)); }
    .lib { grid-area: lib; display: flex; align-items: center; gap: 6px; min-width: 0; background: var(--bar); color: var(--bar-fg); }
    .logo { display: flex; align-items: center; gap: 10px; flex: none; }
    .logo i { display: grid; place-items: center; width: 30px; height: 30px; border-radius: 8px; background: var(--mark); color: var(--mark-fg); font: 600 15px/1 var(--sans); font-style: normal; }
    .logo b { font: 600 21px/1 var(--serif); white-space: nowrap; }
    .subjects { display: flex; gap: 2px; min-width: 0; }
    .s { display: flex; align-items: center; gap: 8px; padding: 7px 10px; border-radius: 8px; color: var(--bar-dim); font-size: 13.5px; }
    .s i { display: grid; place-items: center; flex: none; width: 9px; height: 9px; border-radius: 50%; background: var(--c); color: #fff; font: 600 0/1 var(--sans); font-style: normal; }
    .s b { font-weight: 500; }
    .s small { font-size: 12px; opacity: .7; }
    :is([data-at="subject"], [data-at="book"], [data-at="chat"]) .s.is-claude { background: var(--bar-on); color: var(--bar-fg); }
    .find { display: flex; align-items: center; gap: 8px; padding: 6px 11px; border-radius: 9px; white-space: nowrap; }
    .lib .find { margin-left: auto; background: var(--bar-on); color: var(--bar-dim); }
    .me { grid-area: me; display: flex; align-items: center; gap: 9px; background: var(--bar); color: var(--bar-fg); }
    .me i { display: grid; place-items: center; flex: none; width: 32px; height: 32px; border-radius: 50%; background: var(--me); color: #fff; font: 600 14px/1 var(--sans); font-style: normal; }
    .me b { display: block; font-weight: 500; line-height: 1.2; white-space: nowrap; }
    .me small { display: block; font-size: 11.5px; opacity: .7; white-space: nowrap; }

    /* the open page's own things: what it is filed under, its name, who it is by, its tools */
    .sub { --sub-fg: var(--ink); --sub-dim: var(--soft); --ctl: var(--mist); --ctl-line: var(--line); --ctl-fg: var(--soft); --on: var(--night); --on-fg: #fff; --lnk: var(--blue); --melnk: var(--me);
        grid-area: sub; display: flex; flex-wrap: wrap; align-items: flex-end; gap: 10px 20px; min-width: 0; padding: 20px 28px 14px; color: var(--sub-fg); }
    .chain { display: flex; align-items: center; gap: 7px; font-size: 12.5px; color: var(--sub-dim); white-space: nowrap; }
    .chain em { font: 600 9.5px/1 var(--sans); font-style: normal; letter-spacing: .12em; text-transform: uppercase; }
    .chain span { display: flex; align-items: center; gap: 7px; }
    .chain i { font-style: normal; opacity: .55; }
    .chain a { font-weight: 500; color: var(--lnk); }
    .title { min-width: 0; }
    h1 { margin-top: 4px; font: 600 36px/1.04 var(--serif); white-space: nowrap; }
    .title p { margin-top: 4px; font-size: 13px; color: var(--sub-dim); }
    .title p a { color: var(--lnk); font-weight: 500; }
    .title p a.to-me { color: var(--melnk); text-decoration: underline; text-decoration-color: var(--me); text-decoration-thickness: 2px; text-underline-offset: 3px; }
    .tools { margin-left: auto; }
    .tools > div { display: flex; flex-wrap: wrap; justify-content: flex-end; align-items: center; gap: 8px; }
    .seg { display: flex; overflow: hidden; border: 1px solid var(--ctl-line); border-radius: 9px; background: var(--ctl); }
    .seg span { padding: 6px 12px; color: var(--ctl-fg); }
    .seg span.on { background: var(--on); color: var(--on-fg); font-weight: 500; }
    .sub .find { border: 1px solid var(--ctl-line); background: var(--ctl); color: var(--ctl-fg); }
    .fav { display: flex; align-items: center; gap: 6px; padding: 6px 11px; border-radius: 9px; background: color-mix(in srgb, var(--me) 12%, white); color: #a8400a; font-weight: 500; white-space: nowrap; }

    /* down: what the open page holds */
    .holds { grid-area: holds; min-width: 0; }
    .holds a { display: flex; align-items: center; gap: 9px; padding: 6px 9px; border-radius: 8px; }
    .holds a i { flex: none; width: 9px; height: 9px; border-radius: 50%; background: var(--c, var(--sea)); }
    .holds a b { font-weight: 500; }
    .holds a small { margin-left: auto; font-size: 12px; color: var(--soft); }
    .holds a.on { background: var(--pale); }

    /* the page itself */
    .thing { grid-area: thing; min-width: 0; }
    .go { display: flex; align-items: center; gap: 20px; margin-bottom: 22px; padding: 16px 20px; border-radius: 16px; background: var(--wash); }
    .go .cover { flex: none; width: 92px; padding: 10px 8px 8px 13px; }
    .go .cover b { font-size: 13.5px; }
    .go .cover small { font-size: 7.5px; padding-top: 6px; }
    .go em { font: 600 10.5px/1 var(--sans); font-style: normal; letter-spacing: .1em; text-transform: uppercase; color: var(--me); }
    .go h2 { margin: 4px 0 2px; font: 600 24px/1.1 var(--serif); }
    .go p { max-width: 52ch; font-size: 13px; color: var(--soft); }
    .go u { display: block; width: 260px; max-width: 100%; height: 4px; margin: 10px 0 6px; border-radius: 9px; background: rgba(12, 27, 31, .1); text-decoration: none; }
    .go u i { display: block; width: 14%; height: 100%; border-radius: 9px; background: var(--me); }
    .go small { font-size: 12px; color: var(--soft); }
    .go .read { margin-left: auto; }
    .read { display: inline-flex; align-items: center; gap: 8px; padding: 9px 18px; border-radius: 99px; background: var(--night); color: #fff; font-weight: 500; white-space: nowrap; }

    /* a cover is the landmark of a book, and every book has a color of its own; my own books are the soft black */
    .cover { position: relative; display: flex; flex-direction: column; aspect-ratio: 3 / 4; padding: 13px 11px 10px 17px; border-radius: 3px 7px 7px 3px; color: #fff; background: linear-gradient(160deg, color-mix(in srgb, var(--c) 90%, white), color-mix(in srgb, var(--c) 86%, black)); box-shadow: 0 12px 22px -14px rgba(12, 27, 31, .55); }
    .cover::before { content: ''; position: absolute; left: 7px; top: 0; bottom: 0; width: 1px; background: rgba(255, 255, 255, .3); }
    .cover b { font: 600 17px/1.08 var(--serif); }
    .cover small { margin-top: auto; padding-top: 8px; border-top: 1px solid rgba(255, 255, 255, .32); font: 600 9px/1.2 var(--sans); letter-spacing: .1em; text-transform: uppercase; opacity: .92; }
    .cover.mine { --c: var(--night); color: var(--opal); background: linear-gradient(160deg, #16303a, var(--night)); }
    .bk:nth-child(8n+1), .open, .go { --c: #e07a35; }
    .bk:nth-child(8n+2) { --c: #c2413f; }
    .bk:nth-child(8n+3) { --c: #4450b8; }
    .bk:nth-child(8n+4) { --c: #1f8a78; }
    .bk:nth-child(8n+5) { --c: #7a4a8c; }
    .bk:nth-child(8n+6) { --c: #2f7fb0; }
    .bk:nth-child(8n+7) { --c: #3d7a4e; }
    .bk:nth-child(8n) { --c: #c24a78; }
    .shelf { display: grid; grid-template-columns: repeat(auto-fill, minmax(124px, 1fr)); gap: 22px 18px; }
    .bk { display: block; }
    .bk .name { display: none; }
    .bk p { display: flex; gap: 6px; margin-top: 8px; font-size: 12px; color: var(--soft); }
    [data-view="list"] .shelf { grid-template-columns: minmax(0, 1fr); gap: 0; }
    [data-view="list"] .bk { display: grid; grid-template-columns: 30px minmax(0, 1fr) auto; gap: 14px; align-items: center; padding: 9px 0; border-bottom: 1px solid var(--line); }
    [data-view="list"] .bk .cover { padding: 0; border-radius: 2px 4px 4px 2px; box-shadow: none; }
    [data-view="list"] .bk .cover::before { left: 4px; }
    [data-view="list"] .bk .cover b, [data-view="list"] .bk .cover small { display: none; }
    [data-view="list"] .bk .name { display: block; font: 600 19px/1.2 var(--serif); }
    [data-view="list"] .bk p { margin: 0; }
    .mines { display: grid; grid-template-columns: repeat(auto-fill, minmax(124px, 148px)); gap: 18px; }

    .tiles { display: grid; grid-template-columns: repeat(auto-fill, minmax(210px, 1fr)); gap: 14px; margin-bottom: 26px; }
    .tile { display: block; padding: 14px 16px 16px; border-radius: 14px; background: var(--t); }
    .tile i { display: block; width: 26px; height: 26px; margin-bottom: 24px; border-radius: 8px; background: var(--c); }
    .tile b { display: block; font: 600 21px/1.1 var(--serif); }
    .tile small { font-size: 12.5px; color: var(--soft); }

    .open, .person { display: flex; gap: 26px; align-items: flex-start; }
    .cover.big { flex: none; width: 180px; padding: 20px 15px 13px 24px; }
    .cover.big b { font-size: 26px; }
    .cover.big::before { left: 11px; }
    .words { min-width: 0; }
    .says { max-width: 56ch; font: 500 20px/1.5 var(--serif); }
    .words .read { margin-top: 18px; }
    .face { display: grid; place-items: center; flex: none; width: 96px; height: 96px; border-radius: 50%; background: var(--me); color: #fff; font: 600 46px/1 var(--serif); box-shadow: 0 0 0 5px var(--white), 0 0 0 6px color-mix(in srgb, var(--me) 45%, white); }
    .counts { display: flex; gap: 26px; margin: 16px 0 22px; color: var(--soft); font-size: 12.5px; }
    .counts b { display: block; font: 600 26px/1.1 var(--serif); color: var(--ink); }

    /* a conversation, in the form of the application it comes from; my turns in my color */
    .chat { display: grid; gap: 20px; max-width: 720px; margin: 0 auto; }
    .chat .who { display: block; margin-bottom: 4px; font: 600 10.5px/1 var(--sans); letter-spacing: .1em; text-transform: uppercase; color: var(--soft); }
    .chat .mine { justify-self: end; max-width: 78%; padding: 11px 16px; border-radius: 18px 18px 4px 18px; background: color-mix(in srgb, var(--me) 9%, white); font-size: 15px; }
    .chat .mine .who { color: var(--me); }
    .chat .theirs p { font: 500 19.5px/1.55 var(--serif); }
    .chat .theirs p + p { margin-top: 10px; }
    .chat mark { padding: 1px 3px; border-radius: 3px; background: var(--pale); color: inherit; }
    .chat sup { margin-left: 2px; font: 600 10.5px/1 var(--sans); color: var(--me); }
    .chat pre { margin: 12px 0; padding: 12px 14px; border-radius: 10px; background: var(--night); color: #d7e6ea; font: 400 12.5px/1.6 ui-monospace, 'Cascadia Code', Consolas, monospace; overflow: auto; }
    .chat .made { display: flex; align-items: center; gap: 10px; width: fit-content; margin-top: 12px; padding: 9px 13px; border: 1px solid var(--line); border-radius: 12px; font-size: 13px; }
    .chat .made i { display: grid; place-items: center; width: 30px; height: 30px; border-radius: 8px; background: var(--pale); color: var(--blue); font-style: normal; }
    .chat .made small { display: block; color: var(--soft); font-size: 12px; }
    .chat .turns { display: flex; justify-content: space-between; padding-top: 16px; border-top: 1px solid var(--line); color: var(--blue); font-weight: 500; }

    /* across: what it cites, what cites it, and what I wrote beside it */
    .across { grid-area: across; min-width: 0; }
    .ref { display: block; margin-bottom: 8px; padding: 10px 12px; border: 1px solid var(--line); border-radius: 12px; background: var(--white); }
    .ref .to { display: flex; align-items: center; gap: 7px; font-weight: 600; }
    .ref .to svg { color: var(--soft); }
    .ref .to i { flex: none; width: 9px; height: 9px; border-radius: 50%; background: var(--c, var(--sea)); }
    .ref p { margin-top: 2px; font-size: 12.5px; color: var(--soft); }
    .ref q { display: block; margin-top: 7px; padding: 6px 9px; border-radius: 7px; background: var(--pale); font: italic 500 15.5px/1.35 var(--serif); quotes: '“' '”'; }
    .note { padding: 10px 12px; border: 1px dashed var(--line); border-radius: 12px; font-size: 13px; color: var(--soft); }
    .note b { display: block; margin-bottom: 2px; color: var(--ink); font-weight: 500; }
    .return { display: none; align-items: center; gap: 8px; margin-bottom: 14px; padding: 9px 12px; border-radius: 10px; background: var(--night); color: #fff; font-weight: 500; }
    .return svg { color: var(--sky); }
    [data-at="author"][data-from="book"] .return.to-book, [data-at="author"][data-from="subject"] .return.to-subject { display: flex; }

    /* ---- what each idea colors, at every width ---- */
    [data-layout="both"] .holds { background: var(--pale); }
    [data-layout="both"] .holds a.on { background: var(--white); }
    [data-layout="rail"][data-tone="dark"] .sub { --sub-fg: #fff; --sub-dim: rgba(255, 255, 255, .8); --ctl: rgba(12, 27, 31, .26); --ctl-line: transparent; --ctl-fg: #fff; --on: #fff; --on-fg: var(--night); --lnk: #fff; --melnk: #fff; background: var(--blue); }
    [data-layout="rail"][data-tone="dark"] .fav { background: #fff; }
    [data-layout="rail"][data-tone="light"] { --bar: var(--pale); --bar-on: #fff; --bar-line: #cbe6ee; }
    [data-layout="two"][data-tone="dark"] .sub { --sub-dim: #27505c; --ctl: rgba(255, 255, 255, .62); --ctl-line: transparent; --ctl-fg: var(--ink); --lnk: var(--deep); background: var(--sky); }
    [data-layout="two"][data-tone="light"] .sub { --ctl: #fff; background: var(--pale); }
    [data-layout="side"][data-tone="light"] { --bar: var(--mist); --bar-on: #fff; }
    [data-layout="cards"][data-tone="light"] { --canvas: #e9f2f5; --bar-on: #fff; }
    [data-layout="cards"][data-tone="dark"] { --canvas: var(--night); }
    [data-layout="cards"] body, [data-layout="cards"] .lib, [data-layout="cards"] .me { background: var(--canvas); }
    [data-layout="cards"] :is(.sub, .holds, .thing, .across) { background: var(--white); }
    :is([data-layout="header"], [data-layout="both"], [data-layout="two"], [data-layout="cards"]):is([data-at="subject"], [data-at="book"], [data-at="chat"]) .s.is-claude { box-shadow: inset 0 -2px 0 var(--c); }

    /* ---- at a desk: where each idea puts the bars ---- */
    @media (min-width: 761px) {
        html, body { height: 100%; }
        body { display: grid; overflow: hidden; }
        .thing { padding: 20px 28px 40px; overflow: auto; }
        .holds { padding: 18px 12px; overflow: auto; }
        .across { padding: 18px 16px; overflow: auto; border-left: 1px solid var(--line); }

        /* a bar across the top holds the library, with me at its right end */
        :is([data-layout="header"], [data-layout="both"], [data-layout="two"], [data-layout="cards"]) .lib { padding: 9px 170px 9px 18px; }
        :is([data-layout="header"], [data-layout="both"], [data-layout="two"], [data-layout="cards"]) .logo { margin-right: 12px; }
        :is([data-layout="header"], [data-layout="both"], [data-layout="two"], [data-layout="cards"]) :is(.s small, .me small, .lib .find em) { display: none; }
        :is([data-layout="header"], [data-layout="both"], [data-layout="two"], [data-layout="cards"]) .me { grid-area: lib; justify-self: end; z-index: 1; padding: 0 18px 0 8px; background: none; }
        [data-tone="light"]:is([data-layout="header"], [data-layout="both"], [data-layout="two"]) .lib { border-bottom: 1px solid var(--line); }

        [data-layout="header"] body { grid-template: auto auto auto minmax(0, 1fr) / minmax(0, 1fr) 300px; grid-template-areas: "lib lib" "sub sub" "holds holds" "thing across"; }
        [data-layout="both"] body { grid-template: auto auto minmax(0, 1fr) / 240px minmax(0, 1fr) 300px; grid-template-areas: "lib lib lib" "holds sub sub" "holds thing across"; }
        [data-layout="both"] .holds { padding: 20px 12px; border-right: 1px solid #cbe6ee; }
        [data-layout="two"] body { grid-template: auto auto minmax(0, 1fr) / 236px minmax(0, 1fr) 300px; grid-template-areas: "lib lib lib" "sub sub sub" "holds thing across"; }
        [data-layout="two"] .sub { align-items: center; padding: 9px 24px; }
        [data-layout="two"] .title { display: flex; flex-wrap: wrap; align-items: baseline; gap: 4px 16px; }
        [data-layout="two"] h1 { margin: 0; font-size: 26px; order: -1; }
        [data-layout="two"] .title p { display: none; }
        [data-layout="two"] .holds { border-right: 1px solid var(--line); }
        [data-layout="cards"] body { grid-template: auto auto minmax(0, 1fr) / 244px minmax(0, 1fr) 300px; grid-template-areas: "lib lib lib" "holds sub across" "holds thing across"; column-gap: 12px; padding: 0 12px 12px; }
        [data-layout="cards"] .lib { padding: 11px 170px 11px 6px; }
        [data-layout="cards"] .me { padding: 0 6px; }
        [data-layout="cards"] :is(.holds, .across) { border: 0; border-radius: 16px; }
        [data-layout="cards"] .sub { border-radius: 16px 16px 0 0; }
        [data-layout="cards"] .thing { border-radius: 0 0 16px 16px; }

        /* a bar down the left holds the library, with me at its foot */
        [data-layout="side"] body { grid-template: auto minmax(0, 1fr) / 256px minmax(0, 1fr) 300px; grid-template-areas: "side sub sub" "side thing across"; }
        [data-layout="side"] .side { grid-area: side; display: flex; flex-direction: column; min-height: 0; background: var(--bar); }
        [data-layout="side"] .holds { flex: 1; order: 1; }
        [data-layout="side"] .me { order: 2; }
        [data-layout="side"] .lib { flex-direction: column; align-items: stretch; gap: 2px; padding: 18px 12px 12px; }
        [data-layout="side"] .logo { padding: 0 6px 14px; }
        [data-layout="side"] .subjects { flex-direction: column; }
        [data-layout="side"] .s small { margin-left: auto; }
        [data-layout="side"] .lib .find { margin: 10px 0 0; }
        [data-layout="side"] .holds { padding: 14px 12px; border-top: 1px solid var(--bar-line); background: var(--bar); color: var(--bar-fg); }
        [data-layout="side"] .holds h4, [data-layout="side"] .holds a small { color: var(--bar-dim); }
        [data-layout="side"] .holds a.on { background: var(--bar-on); }
        [data-layout="side"] .me { padding: 12px 18px 14px; border-top: 1px solid var(--bar-line); }
        [data-layout="side"][data-tone="light"] .side { border-right: 1px solid var(--line); }

        /* a narrow rail holds the subjects as marks and me as a face */
        [data-layout="rail"] body { grid-template: auto auto minmax(0, 1fr) auto / 68px minmax(0, 1fr) 300px; grid-template-areas: "lib sub sub" "lib holds holds" "lib thing across" "me thing across"; }
        [data-layout="rail"] .lib { flex-direction: column; gap: 12px; padding: 14px 0; }
        [data-layout="rail"] :is(.logo b, .lib .find, .s b, .s small, .me span) { display: none; }
        [data-layout="rail"] .subjects { flex-direction: column; align-items: center; gap: 10px; }
        [data-layout="rail"] .s { padding: 0; background: none; }
        [data-layout="rail"] :is(.s i, .logo i, .me i) { width: 40px; height: 40px; border-radius: 11px; font-size: 13px; }
        [data-layout="rail"] .logo i, [data-layout="rail"] .me i { font-size: 16px; }
        [data-layout="rail"] .me i { border-radius: 50%; }
        [data-layout="rail"]:is([data-at="subject"], [data-at="book"], [data-at="chat"]) .s.is-claude i { box-shadow: 0 0 0 2px var(--bar), 0 0 0 4px var(--c); }
        [data-layout="rail"] .me { justify-content: center; padding: 10px 0 14px; }
        [data-layout="rail"] .sub { padding: 16px 26px 14px; }
        [data-layout="rail"][data-tone="light"] :is(.lib, .me) { border-right: 1px solid #cbe6ee; }

        /* with no side bar, what the page holds is a row under its name */
        :is([data-layout="header"], [data-layout="rail"]) .holds { padding: 12px 28px; overflow: auto hidden; border-bottom: 1px solid var(--line); scrollbar-width: none; }
        [data-layout="header"] .holds { padding-top: 0; }
        :is([data-layout="header"], [data-layout="rail"]) .holds > div { display: flex; align-items: center; gap: 6px; }
        :is([data-layout="header"], [data-layout="rail"]) .holds h4 { flex: none; margin: 0 6px 0 0; }
        :is([data-layout="header"], [data-layout="rail"]) .holds h4.next { margin-left: 18px; }
        :is([data-layout="header"], [data-layout="rail"]) .holds h4 small { display: none; }
        :is([data-layout="header"], [data-layout="rail"]) .holds a { flex: none; padding: 5px 11px 5px 9px; border: 1px solid var(--line); border-radius: 99px; white-space: nowrap; }
        :is([data-layout="header"], [data-layout="rail"]) .holds a small { margin-left: 4px; }
        :is([data-layout="header"], [data-layout="rail"]) .holds a.on { border-color: transparent; }
    }

    /* ---- on a phone: one bar at the top, the page beneath it in one column ---- */
    @media (max-width: 760px) {
        body { position: relative; display: flex; flex-direction: column; }
        .sub { order: 1; }
        .holds { order: 2; }
        .thing { order: 3; }
        .across { order: 4; }
        .lib { position: sticky; top: 0; z-index: 4; height: 50px; margin-right: 54px; padding: 0 8px 0 14px; gap: 4px; overflow: auto hidden; scrollbar-width: none; }
        .logo { margin-right: 8px; }
        .logo b { font-size: 19px; }
        .s { white-space: nowrap; }
        .s small, .lib .find, .me span { display: none; }
        .me { position: fixed; z-index: 5; top: 0; right: 0; justify-content: center; width: 54px; height: 50px; }
        [data-tone="light"] :is(.lib, .me) { border-bottom: 1px solid var(--line); }
        .sub { flex-direction: column; flex-wrap: nowrap; align-items: stretch; padding: 16px 16px 12px; }
        h1 { font-size: 28px; white-space: normal; }
        .chain { overflow: auto hidden; scrollbar-width: none; }
        .tools { margin: 0; }
        .tools > div { justify-content: flex-start; }
        .holds { padding: 10px 16px 12px; overflow: auto hidden; border-bottom: 1px solid var(--line); scrollbar-width: none; }
        .holds > div { display: flex; align-items: center; gap: 6px; }
        .holds h4 { flex: none; margin: 0 6px 0 0; }
        .holds h4.next { margin-left: 18px; }
        .holds h4 small { display: none; }
        .holds a { flex: none; padding: 5px 11px 5px 9px; border: 1px solid var(--line); border-radius: 99px; background: var(--white); white-space: nowrap; }
        .holds a small { margin-left: 4px; }
        .thing { padding: 16px 16px 24px; }
        .go { flex-wrap: wrap; gap: 14px; padding: 14px; }
        .go > div { flex: 1 1 60%; min-width: 0; }
        .go .read { margin: 0; }
        .shelf { grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 16px 12px; }
        .cover { padding: 10px 8px 8px 13px; }
        .cover b { font-size: 14.5px; }
        .open, .person { flex-direction: column; gap: 16px; }
        .cover.big { width: 150px; }
        .cover.big b { font-size: 22px; }
        .counts { gap: 18px; }
        .chat .mine { max-width: 88%; }
        .across { padding: 16px; border-top: 1px solid var(--line); }

        /* a side bar or a rail turns to lie along the foot, the subjects as marks */
        :is([data-layout="side"], [data-layout="rail"]) body { padding-bottom: 60px; }
        :is([data-layout="side"], [data-layout="rail"]) .subjects { position: fixed; z-index: 4; left: 0; right: 0; bottom: 0; justify-content: space-around; padding: 8px 10px; border-top: 1px solid var(--bar-line); background: var(--bar); }
        :is([data-layout="side"], [data-layout="rail"]) .s { padding: 0; background: none; box-shadow: none; }
        :is([data-layout="side"], [data-layout="rail"]) .s b { display: none; }
        :is([data-layout="side"], [data-layout="rail"]) .s i { width: 42px; height: 42px; border-radius: 12px; font-size: 13px; }
        :is([data-layout="side"], [data-layout="rail"]):is([data-at="subject"], [data-at="book"], [data-at="chat"]) .s.is-claude i { box-shadow: 0 0 0 2px var(--bar), 0 0 0 4px var(--c); }

        [data-layout="two"] .sub { padding: 12px 16px; }
        [data-layout="two"] .title p { display: none; }
        [data-layout="cards"] body { padding-bottom: 10px; }
        [data-layout="cards"] :is(.sub, .holds, .thing, .across) { margin: 0 10px; }
        [data-layout="cards"] .sub { margin-top: 4px; border-radius: 14px 14px 0 0; }
        [data-layout="cards"] .thing { border-radius: 0 0 14px 14px; }
        [data-layout="cards"] .across { margin-top: 10px; border: 0; border-radius: 14px; }
    }
</style>
</head>
<body>

<div class="side">
<header class="lib">
    <a class="logo" data-go="library"><i>D</i><b>Dougs Library</b></a>
    <nav class="subjects">
        <a class="s is-claude" data-go="subject" style="--c: var(--sea)"><i>Cl</i><b>Conversations with Claude</b><small>212</small></a>
        <a class="s" style="--c: #1f8a78"><i>Ch</i><b>Conversations with ChatGPT</b><small>147</small></a>
        <a class="s" style="--c: #c24a78"><i>De</i><b>Dougs Design</b><small>5</small></a>
        <a class="s" style="--c: #7a4a8c"><i>Rm</i><b>Dougs Reference Manual</b><small>3</small></a>
    </nav>
    <span class="find"><svg viewBox="0 0 16 16"><circle cx="7" cy="7" r="4.5"/><path d="M10.5 10.5 14 14"/></svg><em style="font-style: normal">Find in the library</em></span>
</header>

<a class="me" data-go="author"><i>D</i><span><b>The Librarian</b><small>my own account</small></span></a>

<aside class="holds">
    <div class="at-library">
        <h4>My favorites<small>3</small></h4>
        <a data-go="book" style="--c: #e07a35"><i></i><b>Lorem Ipsum Dolor</b><small class="star">★</small></a>
        <a style="--c: #4450b8"><i></i><b>Magna Aliqua</b><small class="star">★</small></a>
        <a style="--c: #c24a78"><i></i><b>The Library's Home</b><small class="star">★</small></a>
    </div>
    <div class="at-subject">
        <h4>Holds<small>3 projects</small></h4>
        <a class="on" style="--c: #e07a35"><i></i><b>A First Project</b><small>38</small></a>
        <a style="--c: #1f8a78"><i></i><b>A Second Project</b><small>91</small></a>
        <a style="--c: #4450b8"><i></i><b>A Third Project</b><small>83</small></a>
        <h4 class="next">My favorites here<small>2</small></h4>
        <a data-go="book" style="--c: #e07a35"><i></i><b>Lorem Ipsum Dolor</b><small class="star">★</small></a>
        <a style="--c: #4450b8"><i></i><b>Magna Aliqua</b><small class="star">★</small></a>
    </div>
    <div class="at-book at-chat">
        <h4>Holds<small>8 chapters</small></h4>
        <a class="first" data-go="chat" style="--c: #e07a35"><i></i><b>A First Chapter</b><small>1</small></a>
        <a style="--c: #e07a35"><i></i><b>A Second Chapter</b><small>2</small></a>
        <a style="--c: #e07a35"><i></i><b>A Third Chapter</b><small>3</small></a>
        <a style="--c: #e07a35"><i></i><b>A Fourth Chapter</b><small>4</small></a>
        <a style="--c: #e07a35"><i></i><b>A Fifth Chapter</b><small>5</small></a>
    </div>
    <div class="at-author">
        <h4>My books<small>3</small></h4>
        <a class="on" style="--c: var(--me)"><i></i><b>Dougs Story</b><small>3</small></a>
        <a style="--c: #c24a78"><i></i><b>Dougs Design</b><small>5</small></a>
        <a style="--c: #7a4a8c"><i></i><b>Dougs Reference Manual</b><small>3</small></a>
    </div>
</aside>
</div>

<section class="sub">
    <div class="title">
        <div class="chain">
            <em>Filed under</em>
            <span class="at-library">itself</span>
            <span class="at-subject"><a data-go="library">Dougs Library</a></span>
            <span class="at-book"><a data-go="subject">Conversations with Claude</a><i>›</i><a data-go="subject">A First Project</a></span>
            <span class="at-chat"><a data-go="subject">Conversations with Claude</a><i>›</i><a data-go="subject">A First Project</a><i>›</i><a data-go="book">Lorem Ipsum Dolor</a></span>
            <span class="at-author"><a data-go="library">Dougs Library</a></span>
        </div>
        <h1 class="at-library">Dougs Library</h1>
        <h1 class="at-subject">Conversations with Claude</h1>
        <h1 class="at-book">Lorem Ipsum Dolor</h1>
        <h1 class="at-chat">A First Chapter</h1>
        <h1 class="at-author">Dougs Story</h1>
        <p class="at-library">by <a class="to-me" data-go="author">The Librarian</a> · three books and two subjects · 359 conversations kept</p>
        <p class="at-subject">a subject · 212 books in three projects · by <a class="to-me" data-go="author">The Librarian</a></p>
        <p class="at-book">by <a class="to-me" data-go="author">The Librarian</a> and Claude · 8 chapters · kept 9 Sep 2026</p>
        <p class="at-chat">chapter 1 of 8 · <a class="to-me" data-go="author">The Librarian</a> and Claude · kept 9 Sep 2026</p>
        <p class="at-author">The Librarian · my own account</p>
    </div>
    <div class="tools">
        <div class="at-subject">
            <span class="seg"><span class="on" data-view-is="shelf">Shelf</span><span data-view-is="list">List</span><span>Table</span></span>
            <span class="find"><svg viewBox="0 0 16 16"><circle cx="7" cy="7" r="4.5"/><path d="M10.5 10.5 14 14"/></svg>Find in this subject</span>
        </div>
        <div class="at-book">
            <span class="fav"><em class="star">★</em>Among my favorites</span>
            <span class="find"><svg viewBox="0 0 16 16"><circle cx="7" cy="7" r="4.5"/><path d="M10.5 10.5 14 14"/></svg>Find in this book</span>
        </div>
        <div class="at-chat">
            <span class="find"><svg viewBox="0 0 16 16"><path d="M8 3v10M3 8h10"/></svg>Note on a passage</span>
            <span class="find"><svg viewBox="0 0 16 16"><circle cx="7" cy="7" r="4.5"/><path d="M10.5 10.5 14 14"/></svg>Find in this book</span>
        </div>
    </div>
</section>

<main class="thing">
    <div class="at-library">
        <h4>Subjects</h4>
        <div class="tiles">
            <a class="tile" data-go="subject" style="--t: #dff3fa; --c: var(--sea)"><i></i><b>Conversations with Claude</b><small>212 books in three projects</small></a>
            <a class="tile" style="--t: #dcf5ee; --c: #1f8a78"><i></i><b>Conversations with ChatGPT</b><small>147 books</small></a>
        </div>
        <h4>My books</h4>
        <div class="mines">
            <a class="cover mine" data-go="author"><b>Dougs Story</b><small>my own account</small></a>
            <a class="cover mine"><b>Dougs Design</b><small>the design</small></a>
            <a class="cover mine"><b>Dougs Reference Manual</b><small>the parts</small></a>
        </div>
    </div>

    <div class="at-subject">
        <div class="go">
            <span class="cover"><b>Lorem Ipsum Dolor</b><small>with Claude</small></span>
            <div>
                <em>Continue</em>
                <h2>Lorem Ipsum Dolor</h2>
                <p>A First Project · kept 9 September 2026. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                <u><i></i></u>
                <small>Chapter 1 of 8 · 2 notes of mine · cited twice</small>
            </div>
            <a class="read" data-go="chat">Read</a>
        </div>
        <h4>Lately kept<small>212 books · newest first</small></h4>
        <div class="shelf">
            <a class="bk" data-go="book"><span class="cover"><b>Lorem Ipsum Dolor</b><small>with Claude</small></span><b class="name">Lorem Ipsum Dolor</b><p>9 Sep · 8 chapters <em class="star">★</em></p></a>
            <a class="bk"><span class="cover"><b>Quis Nostrud</b><small>with Claude</small></span><b class="name">Quis Nostrud</b><p>1 Oct · 6 chapters</p></a>
            <a class="bk"><span class="cover"><b>Magna Aliqua</b><small>with Claude</small></span><b class="name">Magna Aliqua</b><p>20 Sep · 11 chapters <em class="star">★</em></p></a>
            <a class="bk"><span class="cover"><b>Tempor Incididunt</b><small>with Claude</small></span><b class="name">Tempor Incididunt</b><p>12 Sep · 7 chapters</p></a>
            <a class="bk"><span class="cover"><b>Ut Enim ad Minim</b><small>with Claude</small></span><b class="name">Ut Enim ad Minim</b><p>27 Sep · 3 chapters</p></a>
            <a class="bk"><span class="cover"><b>Sed Do Eiusmod</b><small>with Claude</small></span><b class="name">Sed Do Eiusmod</b><p>5 Sep · 2 chapters</p></a>
            <a class="bk"><span class="cover"><b>Adipiscing Elit</b><small>with Claude</small></span><b class="name">Adipiscing Elit</b><p>2 Sep · 9 chapters</p></a>
            <a class="bk"><span class="cover"><b>Sit Amet Consectetur</b><small>with Claude</small></span><b class="name">Sit Amet Consectetur</b><p>21 Jul · 14 chapters</p></a>
            <a class="bk"><span class="cover"><b>Duis Aute Irure</b><small>with Claude</small></span><b class="name">Duis Aute Irure</b><p>14 Jul · 5 chapters</p></a>
            <a class="bk"><span class="cover"><b>Excepteur Sint</b><small>with Claude</small></span><b class="name">Excepteur Sint</b><p>2 Jul · 4 chapters</p></a>
        </div>
    </div>

    <div class="open at-book">
        <span class="cover big"><b>Lorem Ipsum Dolor</b><small>with Claude</small></span>
        <div class="words">
            <p class="says">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
            <a class="read" data-go="chat">Read from A First Chapter<svg viewBox="0 0 16 16"><path d="M3 8h10M9 4l4 4-4 4"/></svg></a>
        </div>
    </div>

    <div class="chat at-chat">
        <div class="mine"><span class="who">The Librarian</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit? Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
        <div class="theirs">
            <span class="who">Claude</span>
            <p>Ut enim ad minim veniam, quis nostrud exercitation. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <mark>Excepteur sint occaecat cupidatat non proident</mark><sup>1</sup>, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
<pre>const lorem = ipsum.dolor('sit amet');
return lorem.consectetur();</pre>
            <a class="made"><i>◇</i><span><b>Lorem Ipsum, a first draft</b><small>made in this turn · opens beside the page</small></span></a>
        </div>
        <div class="mine"><span class="who">The Librarian</span>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit?</div>
        <div class="theirs">
            <span class="who">Claude</span>
            <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.</p>
        </div>
        <div class="turns"><span></span><a>A Second Chapter →</a></div>
    </div>

    <div class="person at-author">
        <span class="face">D</span>
        <div class="words">
            <p class="says">My own account, and the one book here that is by its own subject. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            <div class="counts"><span><b>3</b>books written</span><span><b>359</b>conversations kept</span><span><b>41</b>notes</span></div>
            <div class="mines">
                <a class="cover mine"><b>Dougs Story</b><small>my own account</small></a>
                <a class="cover mine"><b>Dougs Design</b><small>the design</small></a>
                <a class="cover mine"><b>Dougs Reference Manual</b><small>the parts</small></a>
            </div>
        </div>
    </div>
</main>

<aside class="across">
    <a class="return to-book" data-go="book"><svg viewBox="0 0 16 16"><path d="M13 8H3M7 4 3 8l4 4"/></svg>Back to Lorem Ipsum Dolor</a>
    <a class="return to-subject" data-go="subject"><svg viewBox="0 0 16 16"><path d="M13 8H3M7 4 3 8l4 4"/></svg>Back to Conversations with Claude</a>

    <div class="at-library">
        <h4>Lately kept</h4>
        <a class="ref" style="--c: #c2413f"><span class="to"><i></i>Quis Nostrud</span><p>1 Oct · Conversations with Claude</p></a>
        <a class="ref" style="--c: #7a4a8c"><span class="to"><i></i>Ut Enim ad Minim</span><p>27 Sep · Conversations with Claude</p></a>
        <h4 class="next">My notes<small>41</small></h4>
        <div class="note"><b>3 Oct 2026 · in Lorem Ipsum Dolor</b>Lorem ipsum, a note of mine beside the passage it is about.</div>
    </div>

    <div class="at-subject">
        <h4>Cited from outside<small>2</small></h4>
        <a class="ref" data-go="author" data-from="subject" style="--c: var(--me)"><span class="to"><svg viewBox="0 0 16 16"><path d="M13 8H3M7 4 3 8l4 4"/></svg><i></i>Dougs Story</span><p>chapter 1 cites Lorem Ipsum Dolor</p></a>
        <a class="ref" style="--c: #1f8a78"><span class="to"><svg viewBox="0 0 16 16"><path d="M13 8H3M7 4 3 8l4 4"/></svg><i></i>Conversations with ChatGPT</span><p>one book cites Adipiscing Elit</p></a>
        <h4 class="next">My notes here<small>12</small></h4>
        <div class="note"><b>3 Oct 2026 · in Lorem Ipsum Dolor</b>Lorem ipsum, a note of mine beside the passage it is about.</div>
    </div>

    <div class="at-book at-chat">
        <h4>Cites<small>1</small></h4>
        <a class="ref" style="--c: #3d7a4e"><span class="to"><svg viewBox="0 0 16 16"><path d="M3 8h10M9 4l4 4-4 4"/></svg><i></i>Adipiscing Elit</span><p>chapter 2 · A First Project</p></a>
        <h4 class="next">Cited by<small>2</small></h4>
        <a class="ref" data-go="author" data-from="book" style="--c: var(--me)"><span class="to"><svg viewBox="0 0 16 16"><path d="M13 8H3M7 4 3 8l4 4"/></svg><i></i>Dougs Story</span><p>chapter 1 · my own account</p><q>Excepteur sint occaecat cupidatat non proident</q></a>
        <a class="ref" style="--c: #c24a78"><span class="to"><svg viewBox="0 0 16 16"><path d="M13 8H3M7 4 3 8l4 4"/></svg><i></i>Sit Amet Consectetur</span><p>chapter 3 · A First Project</p></a>
        <h4 class="next">My notes<small>1</small></h4>
        <div class="note"><b>1 · 3 Oct 2026</b>Lorem ipsum, a note of mine beside the passage it is about.</div>
    </div>

    <div class="at-author">
        <h4>Cites<small>1</small></h4>
        <a class="ref" data-go="book" style="--c: #e07a35"><span class="to"><svg viewBox="0 0 16 16"><path d="M3 8h10M9 4l4 4-4 4"/></svg><i></i>Lorem Ipsum Dolor</span><p>chapter 1 · a conversation with Claude</p><q>Excepteur sint occaecat cupidatat non proident</q></a>
        <h4 class="next">Cited by<small>0</small></h4>
        <div class="note">Nothing cites this chapter yet.</div>
    </div>
</aside>

<script>
    const page = document.documentElement;
    for (const door of document.querySelectorAll('[data-go]'))
        door.addEventListener('click', () => {
            if (door.dataset.from) page.dataset.from = door.dataset.from;
            else delete page.dataset.from;
            page.dataset.at = door.dataset.go;
            window.scrollTo(0, 0);
            for (const column of document.querySelectorAll('.thing, .holds, .across')) column.scrollTop = 0;
        });
    for (const view of document.querySelectorAll('[data-view-is]'))
        view.addEventListener('click', () => {
            page.dataset.view = view.dataset.viewIs;
            for (const other of view.parentElement.children) other.classList.toggle('on', other === view);
        });
<\/script>
</body>
</html>
`})]})]}),a.jsxs(i,{children:[a.jsx(d,{children:"12"}),a.jsx(o,{children:"[A Light Side Bar](/dougs-design/#a-light-side-bar)"}),a.jsx(t,{children:"Concept 12, an idea, after the homes I liked, the lighter way."}),a.jsx(t,{children:"The same side bar, lighter: a pale bar with the mark in black, as the shelf's home had it. The color is all in the covers and the light accents."}),a.jsxs(t,{children:[a.jsx(p,{}),a.jsx(r,{children:"/.design/3-every-concept~012-desk.png"}),a.jsx(r,{children:"/.design/3-every-concept~012-phone.png"})]}),a.jsxs(t,{children:[a.jsx(c,{}),a.jsx(n,{children:`<!doctype html>
<html lang="en" data-layout="side" data-tone="light" data-at="subject" data-view="shelf">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>A Light Side Bar</title>
<meta name="number" content="12">
<meta name="state" content="idea">
<meta name="after" content="the homes I liked, the lighter way">
<meta name="idea" content="The same side bar, lighter: a pale bar with the mark in black, as the shelf's home had it. The color is all in the covers and the light accents.">
<meta name="said" content="">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
<style>
    /* ---- what does not change between the ideas ----
       The frame is soft black, the blue between it and white, and white. The soft black #0c1b1f and the opal #c8f4fb are the
       coming-soon page's own; the blues are the hue between them (208 to 223 in OKLCH) walked from dark to light.
       The CONTENT keeps its own colors: every book a cover of its own, the light accents the opal's wave. */
    :root { --night: #0c1b1f; --deep: #14323c; --blue: #166178; --sea: #4e9eb9; --sky: #8fc8dc; --opal: #c8f4fb; --pale: #e3f5fa; --mist: #f1f7f9; --white: #ffffff;
        --ink: #10252c; --soft: #516770; --line: #dbe7ec; --me: #e8590c;
        --wash: linear-gradient(105deg, #e2f6fb 0%, #ecf0fd 52%, #fae9f4 100%);
        --serif: 'Cormorant Garamond', Georgia, serif; --sans: 'Inter', system-ui, sans-serif; }
    [data-tone="dark"] { --bar: var(--night); --bar-fg: #ffffff; --bar-dim: #a9bcc1; --bar-on: rgba(255, 255, 255, .11); --bar-line: #1d3339; --mark: var(--opal); --mark-fg: var(--night); }
    [data-tone="light"] { --bar: var(--white); --bar-fg: var(--ink); --bar-dim: var(--soft); --bar-on: var(--pale); --bar-line: var(--line); --mark: var(--night); --mark-fg: #ffffff; }
    [data-at="library"] [class*="at-"]:not(.at-library), [data-at="subject"] [class*="at-"]:not(.at-subject), [data-at="book"] [class*="at-"]:not(.at-book), [data-at="chat"] [class*="at-"]:not(.at-chat), [data-at="author"] [class*="at-"]:not(.at-author) { display: none !important; }

    * { box-sizing: border-box; margin: 0; }
    body { background: var(--white); color: var(--ink); font: 400 14px/1.5 var(--sans); }
    a { color: inherit; text-decoration: none; }
    svg { width: 15px; height: 15px; stroke: currentColor; fill: none; stroke-width: 1.7; stroke-linecap: round; stroke-linejoin: round; flex: none; }
    [data-go], [data-view-is] { cursor: pointer; }
    h4 { display: flex; align-items: center; gap: 8px; margin-bottom: 10px; font: 600 10.5px/1 var(--sans); letter-spacing: .12em; text-transform: uppercase; color: var(--soft); }
    h4 small { margin-left: auto; font: 400 11.5px/1 var(--sans); letter-spacing: 0; text-transform: none; }
    h4.next { margin-top: 22px; }
    .star { color: var(--me); font-style: normal; }

    /* the library's own things: its mark, its subjects, a way to find, and me. They are held together only where an idea has a side bar. */
    .side { display: contents; }
    [data-at="chat"] .holds a.first { background: var(--bar-on, var(--pale)); }
    .lib { grid-area: lib; display: flex; align-items: center; gap: 6px; min-width: 0; background: var(--bar); color: var(--bar-fg); }
    .logo { display: flex; align-items: center; gap: 10px; flex: none; }
    .logo i { display: grid; place-items: center; width: 30px; height: 30px; border-radius: 8px; background: var(--mark); color: var(--mark-fg); font: 600 15px/1 var(--sans); font-style: normal; }
    .logo b { font: 600 21px/1 var(--serif); white-space: nowrap; }
    .subjects { display: flex; gap: 2px; min-width: 0; }
    .s { display: flex; align-items: center; gap: 8px; padding: 7px 10px; border-radius: 8px; color: var(--bar-dim); font-size: 13.5px; }
    .s i { display: grid; place-items: center; flex: none; width: 9px; height: 9px; border-radius: 50%; background: var(--c); color: #fff; font: 600 0/1 var(--sans); font-style: normal; }
    .s b { font-weight: 500; }
    .s small { font-size: 12px; opacity: .7; }
    :is([data-at="subject"], [data-at="book"], [data-at="chat"]) .s.is-claude { background: var(--bar-on); color: var(--bar-fg); }
    .find { display: flex; align-items: center; gap: 8px; padding: 6px 11px; border-radius: 9px; white-space: nowrap; }
    .lib .find { margin-left: auto; background: var(--bar-on); color: var(--bar-dim); }
    .me { grid-area: me; display: flex; align-items: center; gap: 9px; background: var(--bar); color: var(--bar-fg); }
    .me i { display: grid; place-items: center; flex: none; width: 32px; height: 32px; border-radius: 50%; background: var(--me); color: #fff; font: 600 14px/1 var(--sans); font-style: normal; }
    .me b { display: block; font-weight: 500; line-height: 1.2; white-space: nowrap; }
    .me small { display: block; font-size: 11.5px; opacity: .7; white-space: nowrap; }

    /* the open page's own things: what it is filed under, its name, who it is by, its tools */
    .sub { --sub-fg: var(--ink); --sub-dim: var(--soft); --ctl: var(--mist); --ctl-line: var(--line); --ctl-fg: var(--soft); --on: var(--night); --on-fg: #fff; --lnk: var(--blue); --melnk: var(--me);
        grid-area: sub; display: flex; flex-wrap: wrap; align-items: flex-end; gap: 10px 20px; min-width: 0; padding: 20px 28px 14px; color: var(--sub-fg); }
    .chain { display: flex; align-items: center; gap: 7px; font-size: 12.5px; color: var(--sub-dim); white-space: nowrap; }
    .chain em { font: 600 9.5px/1 var(--sans); font-style: normal; letter-spacing: .12em; text-transform: uppercase; }
    .chain span { display: flex; align-items: center; gap: 7px; }
    .chain i { font-style: normal; opacity: .55; }
    .chain a { font-weight: 500; color: var(--lnk); }
    .title { min-width: 0; }
    h1 { margin-top: 4px; font: 600 36px/1.04 var(--serif); white-space: nowrap; }
    .title p { margin-top: 4px; font-size: 13px; color: var(--sub-dim); }
    .title p a { color: var(--lnk); font-weight: 500; }
    .title p a.to-me { color: var(--melnk); text-decoration: underline; text-decoration-color: var(--me); text-decoration-thickness: 2px; text-underline-offset: 3px; }
    .tools { margin-left: auto; }
    .tools > div { display: flex; flex-wrap: wrap; justify-content: flex-end; align-items: center; gap: 8px; }
    .seg { display: flex; overflow: hidden; border: 1px solid var(--ctl-line); border-radius: 9px; background: var(--ctl); }
    .seg span { padding: 6px 12px; color: var(--ctl-fg); }
    .seg span.on { background: var(--on); color: var(--on-fg); font-weight: 500; }
    .sub .find { border: 1px solid var(--ctl-line); background: var(--ctl); color: var(--ctl-fg); }
    .fav { display: flex; align-items: center; gap: 6px; padding: 6px 11px; border-radius: 9px; background: color-mix(in srgb, var(--me) 12%, white); color: #a8400a; font-weight: 500; white-space: nowrap; }

    /* down: what the open page holds */
    .holds { grid-area: holds; min-width: 0; }
    .holds a { display: flex; align-items: center; gap: 9px; padding: 6px 9px; border-radius: 8px; }
    .holds a i { flex: none; width: 9px; height: 9px; border-radius: 50%; background: var(--c, var(--sea)); }
    .holds a b { font-weight: 500; }
    .holds a small { margin-left: auto; font-size: 12px; color: var(--soft); }
    .holds a.on { background: var(--pale); }

    /* the page itself */
    .thing { grid-area: thing; min-width: 0; }
    .go { display: flex; align-items: center; gap: 20px; margin-bottom: 22px; padding: 16px 20px; border-radius: 16px; background: var(--wash); }
    .go .cover { flex: none; width: 92px; padding: 10px 8px 8px 13px; }
    .go .cover b { font-size: 13.5px; }
    .go .cover small { font-size: 7.5px; padding-top: 6px; }
    .go em { font: 600 10.5px/1 var(--sans); font-style: normal; letter-spacing: .1em; text-transform: uppercase; color: var(--me); }
    .go h2 { margin: 4px 0 2px; font: 600 24px/1.1 var(--serif); }
    .go p { max-width: 52ch; font-size: 13px; color: var(--soft); }
    .go u { display: block; width: 260px; max-width: 100%; height: 4px; margin: 10px 0 6px; border-radius: 9px; background: rgba(12, 27, 31, .1); text-decoration: none; }
    .go u i { display: block; width: 14%; height: 100%; border-radius: 9px; background: var(--me); }
    .go small { font-size: 12px; color: var(--soft); }
    .go .read { margin-left: auto; }
    .read { display: inline-flex; align-items: center; gap: 8px; padding: 9px 18px; border-radius: 99px; background: var(--night); color: #fff; font-weight: 500; white-space: nowrap; }

    /* a cover is the landmark of a book, and every book has a color of its own; my own books are the soft black */
    .cover { position: relative; display: flex; flex-direction: column; aspect-ratio: 3 / 4; padding: 13px 11px 10px 17px; border-radius: 3px 7px 7px 3px; color: #fff; background: linear-gradient(160deg, color-mix(in srgb, var(--c) 90%, white), color-mix(in srgb, var(--c) 86%, black)); box-shadow: 0 12px 22px -14px rgba(12, 27, 31, .55); }
    .cover::before { content: ''; position: absolute; left: 7px; top: 0; bottom: 0; width: 1px; background: rgba(255, 255, 255, .3); }
    .cover b { font: 600 17px/1.08 var(--serif); }
    .cover small { margin-top: auto; padding-top: 8px; border-top: 1px solid rgba(255, 255, 255, .32); font: 600 9px/1.2 var(--sans); letter-spacing: .1em; text-transform: uppercase; opacity: .92; }
    .cover.mine { --c: var(--night); color: var(--opal); background: linear-gradient(160deg, #16303a, var(--night)); }
    .bk:nth-child(8n+1), .open, .go { --c: #e07a35; }
    .bk:nth-child(8n+2) { --c: #c2413f; }
    .bk:nth-child(8n+3) { --c: #4450b8; }
    .bk:nth-child(8n+4) { --c: #1f8a78; }
    .bk:nth-child(8n+5) { --c: #7a4a8c; }
    .bk:nth-child(8n+6) { --c: #2f7fb0; }
    .bk:nth-child(8n+7) { --c: #3d7a4e; }
    .bk:nth-child(8n) { --c: #c24a78; }
    .shelf { display: grid; grid-template-columns: repeat(auto-fill, minmax(124px, 1fr)); gap: 22px 18px; }
    .bk { display: block; }
    .bk .name { display: none; }
    .bk p { display: flex; gap: 6px; margin-top: 8px; font-size: 12px; color: var(--soft); }
    [data-view="list"] .shelf { grid-template-columns: minmax(0, 1fr); gap: 0; }
    [data-view="list"] .bk { display: grid; grid-template-columns: 30px minmax(0, 1fr) auto; gap: 14px; align-items: center; padding: 9px 0; border-bottom: 1px solid var(--line); }
    [data-view="list"] .bk .cover { padding: 0; border-radius: 2px 4px 4px 2px; box-shadow: none; }
    [data-view="list"] .bk .cover::before { left: 4px; }
    [data-view="list"] .bk .cover b, [data-view="list"] .bk .cover small { display: none; }
    [data-view="list"] .bk .name { display: block; font: 600 19px/1.2 var(--serif); }
    [data-view="list"] .bk p { margin: 0; }
    .mines { display: grid; grid-template-columns: repeat(auto-fill, minmax(124px, 148px)); gap: 18px; }

    .tiles { display: grid; grid-template-columns: repeat(auto-fill, minmax(210px, 1fr)); gap: 14px; margin-bottom: 26px; }
    .tile { display: block; padding: 14px 16px 16px; border-radius: 14px; background: var(--t); }
    .tile i { display: block; width: 26px; height: 26px; margin-bottom: 24px; border-radius: 8px; background: var(--c); }
    .tile b { display: block; font: 600 21px/1.1 var(--serif); }
    .tile small { font-size: 12.5px; color: var(--soft); }

    .open, .person { display: flex; gap: 26px; align-items: flex-start; }
    .cover.big { flex: none; width: 180px; padding: 20px 15px 13px 24px; }
    .cover.big b { font-size: 26px; }
    .cover.big::before { left: 11px; }
    .words { min-width: 0; }
    .says { max-width: 56ch; font: 500 20px/1.5 var(--serif); }
    .words .read { margin-top: 18px; }
    .face { display: grid; place-items: center; flex: none; width: 96px; height: 96px; border-radius: 50%; background: var(--me); color: #fff; font: 600 46px/1 var(--serif); box-shadow: 0 0 0 5px var(--white), 0 0 0 6px color-mix(in srgb, var(--me) 45%, white); }
    .counts { display: flex; gap: 26px; margin: 16px 0 22px; color: var(--soft); font-size: 12.5px; }
    .counts b { display: block; font: 600 26px/1.1 var(--serif); color: var(--ink); }

    /* a conversation, in the form of the application it comes from; my turns in my color */
    .chat { display: grid; gap: 20px; max-width: 720px; margin: 0 auto; }
    .chat .who { display: block; margin-bottom: 4px; font: 600 10.5px/1 var(--sans); letter-spacing: .1em; text-transform: uppercase; color: var(--soft); }
    .chat .mine { justify-self: end; max-width: 78%; padding: 11px 16px; border-radius: 18px 18px 4px 18px; background: color-mix(in srgb, var(--me) 9%, white); font-size: 15px; }
    .chat .mine .who { color: var(--me); }
    .chat .theirs p { font: 500 19.5px/1.55 var(--serif); }
    .chat .theirs p + p { margin-top: 10px; }
    .chat mark { padding: 1px 3px; border-radius: 3px; background: var(--pale); color: inherit; }
    .chat sup { margin-left: 2px; font: 600 10.5px/1 var(--sans); color: var(--me); }
    .chat pre { margin: 12px 0; padding: 12px 14px; border-radius: 10px; background: var(--night); color: #d7e6ea; font: 400 12.5px/1.6 ui-monospace, 'Cascadia Code', Consolas, monospace; overflow: auto; }
    .chat .made { display: flex; align-items: center; gap: 10px; width: fit-content; margin-top: 12px; padding: 9px 13px; border: 1px solid var(--line); border-radius: 12px; font-size: 13px; }
    .chat .made i { display: grid; place-items: center; width: 30px; height: 30px; border-radius: 8px; background: var(--pale); color: var(--blue); font-style: normal; }
    .chat .made small { display: block; color: var(--soft); font-size: 12px; }
    .chat .turns { display: flex; justify-content: space-between; padding-top: 16px; border-top: 1px solid var(--line); color: var(--blue); font-weight: 500; }

    /* across: what it cites, what cites it, and what I wrote beside it */
    .across { grid-area: across; min-width: 0; }
    .ref { display: block; margin-bottom: 8px; padding: 10px 12px; border: 1px solid var(--line); border-radius: 12px; background: var(--white); }
    .ref .to { display: flex; align-items: center; gap: 7px; font-weight: 600; }
    .ref .to svg { color: var(--soft); }
    .ref .to i { flex: none; width: 9px; height: 9px; border-radius: 50%; background: var(--c, var(--sea)); }
    .ref p { margin-top: 2px; font-size: 12.5px; color: var(--soft); }
    .ref q { display: block; margin-top: 7px; padding: 6px 9px; border-radius: 7px; background: var(--pale); font: italic 500 15.5px/1.35 var(--serif); quotes: '“' '”'; }
    .note { padding: 10px 12px; border: 1px dashed var(--line); border-radius: 12px; font-size: 13px; color: var(--soft); }
    .note b { display: block; margin-bottom: 2px; color: var(--ink); font-weight: 500; }
    .return { display: none; align-items: center; gap: 8px; margin-bottom: 14px; padding: 9px 12px; border-radius: 10px; background: var(--night); color: #fff; font-weight: 500; }
    .return svg { color: var(--sky); }
    [data-at="author"][data-from="book"] .return.to-book, [data-at="author"][data-from="subject"] .return.to-subject { display: flex; }

    /* ---- what each idea colors, at every width ---- */
    [data-layout="both"] .holds { background: var(--pale); }
    [data-layout="both"] .holds a.on { background: var(--white); }
    [data-layout="rail"][data-tone="dark"] .sub { --sub-fg: #fff; --sub-dim: rgba(255, 255, 255, .8); --ctl: rgba(12, 27, 31, .26); --ctl-line: transparent; --ctl-fg: #fff; --on: #fff; --on-fg: var(--night); --lnk: #fff; --melnk: #fff; background: var(--blue); }
    [data-layout="rail"][data-tone="dark"] .fav { background: #fff; }
    [data-layout="rail"][data-tone="light"] { --bar: var(--pale); --bar-on: #fff; --bar-line: #cbe6ee; }
    [data-layout="two"][data-tone="dark"] .sub { --sub-dim: #27505c; --ctl: rgba(255, 255, 255, .62); --ctl-line: transparent; --ctl-fg: var(--ink); --lnk: var(--deep); background: var(--sky); }
    [data-layout="two"][data-tone="light"] .sub { --ctl: #fff; background: var(--pale); }
    [data-layout="side"][data-tone="light"] { --bar: var(--mist); --bar-on: #fff; }
    [data-layout="cards"][data-tone="light"] { --canvas: #e9f2f5; --bar-on: #fff; }
    [data-layout="cards"][data-tone="dark"] { --canvas: var(--night); }
    [data-layout="cards"] body, [data-layout="cards"] .lib, [data-layout="cards"] .me { background: var(--canvas); }
    [data-layout="cards"] :is(.sub, .holds, .thing, .across) { background: var(--white); }
    :is([data-layout="header"], [data-layout="both"], [data-layout="two"], [data-layout="cards"]):is([data-at="subject"], [data-at="book"], [data-at="chat"]) .s.is-claude { box-shadow: inset 0 -2px 0 var(--c); }

    /* ---- at a desk: where each idea puts the bars ---- */
    @media (min-width: 761px) {
        html, body { height: 100%; }
        body { display: grid; overflow: hidden; }
        .thing { padding: 20px 28px 40px; overflow: auto; }
        .holds { padding: 18px 12px; overflow: auto; }
        .across { padding: 18px 16px; overflow: auto; border-left: 1px solid var(--line); }

        /* a bar across the top holds the library, with me at its right end */
        :is([data-layout="header"], [data-layout="both"], [data-layout="two"], [data-layout="cards"]) .lib { padding: 9px 170px 9px 18px; }
        :is([data-layout="header"], [data-layout="both"], [data-layout="two"], [data-layout="cards"]) .logo { margin-right: 12px; }
        :is([data-layout="header"], [data-layout="both"], [data-layout="two"], [data-layout="cards"]) :is(.s small, .me small, .lib .find em) { display: none; }
        :is([data-layout="header"], [data-layout="both"], [data-layout="two"], [data-layout="cards"]) .me { grid-area: lib; justify-self: end; z-index: 1; padding: 0 18px 0 8px; background: none; }
        [data-tone="light"]:is([data-layout="header"], [data-layout="both"], [data-layout="two"]) .lib { border-bottom: 1px solid var(--line); }

        [data-layout="header"] body { grid-template: auto auto auto minmax(0, 1fr) / minmax(0, 1fr) 300px; grid-template-areas: "lib lib" "sub sub" "holds holds" "thing across"; }
        [data-layout="both"] body { grid-template: auto auto minmax(0, 1fr) / 240px minmax(0, 1fr) 300px; grid-template-areas: "lib lib lib" "holds sub sub" "holds thing across"; }
        [data-layout="both"] .holds { padding: 20px 12px; border-right: 1px solid #cbe6ee; }
        [data-layout="two"] body { grid-template: auto auto minmax(0, 1fr) / 236px minmax(0, 1fr) 300px; grid-template-areas: "lib lib lib" "sub sub sub" "holds thing across"; }
        [data-layout="two"] .sub { align-items: center; padding: 9px 24px; }
        [data-layout="two"] .title { display: flex; flex-wrap: wrap; align-items: baseline; gap: 4px 16px; }
        [data-layout="two"] h1 { margin: 0; font-size: 26px; order: -1; }
        [data-layout="two"] .title p { display: none; }
        [data-layout="two"] .holds { border-right: 1px solid var(--line); }
        [data-layout="cards"] body { grid-template: auto auto minmax(0, 1fr) / 244px minmax(0, 1fr) 300px; grid-template-areas: "lib lib lib" "holds sub across" "holds thing across"; column-gap: 12px; padding: 0 12px 12px; }
        [data-layout="cards"] .lib { padding: 11px 170px 11px 6px; }
        [data-layout="cards"] .me { padding: 0 6px; }
        [data-layout="cards"] :is(.holds, .across) { border: 0; border-radius: 16px; }
        [data-layout="cards"] .sub { border-radius: 16px 16px 0 0; }
        [data-layout="cards"] .thing { border-radius: 0 0 16px 16px; }

        /* a bar down the left holds the library, with me at its foot */
        [data-layout="side"] body { grid-template: auto minmax(0, 1fr) / 256px minmax(0, 1fr) 300px; grid-template-areas: "side sub sub" "side thing across"; }
        [data-layout="side"] .side { grid-area: side; display: flex; flex-direction: column; min-height: 0; background: var(--bar); }
        [data-layout="side"] .holds { flex: 1; order: 1; }
        [data-layout="side"] .me { order: 2; }
        [data-layout="side"] .lib { flex-direction: column; align-items: stretch; gap: 2px; padding: 18px 12px 12px; }
        [data-layout="side"] .logo { padding: 0 6px 14px; }
        [data-layout="side"] .subjects { flex-direction: column; }
        [data-layout="side"] .s small { margin-left: auto; }
        [data-layout="side"] .lib .find { margin: 10px 0 0; }
        [data-layout="side"] .holds { padding: 14px 12px; border-top: 1px solid var(--bar-line); background: var(--bar); color: var(--bar-fg); }
        [data-layout="side"] .holds h4, [data-layout="side"] .holds a small { color: var(--bar-dim); }
        [data-layout="side"] .holds a.on { background: var(--bar-on); }
        [data-layout="side"] .me { padding: 12px 18px 14px; border-top: 1px solid var(--bar-line); }
        [data-layout="side"][data-tone="light"] .side { border-right: 1px solid var(--line); }

        /* a narrow rail holds the subjects as marks and me as a face */
        [data-layout="rail"] body { grid-template: auto auto minmax(0, 1fr) auto / 68px minmax(0, 1fr) 300px; grid-template-areas: "lib sub sub" "lib holds holds" "lib thing across" "me thing across"; }
        [data-layout="rail"] .lib { flex-direction: column; gap: 12px; padding: 14px 0; }
        [data-layout="rail"] :is(.logo b, .lib .find, .s b, .s small, .me span) { display: none; }
        [data-layout="rail"] .subjects { flex-direction: column; align-items: center; gap: 10px; }
        [data-layout="rail"] .s { padding: 0; background: none; }
        [data-layout="rail"] :is(.s i, .logo i, .me i) { width: 40px; height: 40px; border-radius: 11px; font-size: 13px; }
        [data-layout="rail"] .logo i, [data-layout="rail"] .me i { font-size: 16px; }
        [data-layout="rail"] .me i { border-radius: 50%; }
        [data-layout="rail"]:is([data-at="subject"], [data-at="book"], [data-at="chat"]) .s.is-claude i { box-shadow: 0 0 0 2px var(--bar), 0 0 0 4px var(--c); }
        [data-layout="rail"] .me { justify-content: center; padding: 10px 0 14px; }
        [data-layout="rail"] .sub { padding: 16px 26px 14px; }
        [data-layout="rail"][data-tone="light"] :is(.lib, .me) { border-right: 1px solid #cbe6ee; }

        /* with no side bar, what the page holds is a row under its name */
        :is([data-layout="header"], [data-layout="rail"]) .holds { padding: 12px 28px; overflow: auto hidden; border-bottom: 1px solid var(--line); scrollbar-width: none; }
        [data-layout="header"] .holds { padding-top: 0; }
        :is([data-layout="header"], [data-layout="rail"]) .holds > div { display: flex; align-items: center; gap: 6px; }
        :is([data-layout="header"], [data-layout="rail"]) .holds h4 { flex: none; margin: 0 6px 0 0; }
        :is([data-layout="header"], [data-layout="rail"]) .holds h4.next { margin-left: 18px; }
        :is([data-layout="header"], [data-layout="rail"]) .holds h4 small { display: none; }
        :is([data-layout="header"], [data-layout="rail"]) .holds a { flex: none; padding: 5px 11px 5px 9px; border: 1px solid var(--line); border-radius: 99px; white-space: nowrap; }
        :is([data-layout="header"], [data-layout="rail"]) .holds a small { margin-left: 4px; }
        :is([data-layout="header"], [data-layout="rail"]) .holds a.on { border-color: transparent; }
    }

    /* ---- on a phone: one bar at the top, the page beneath it in one column ---- */
    @media (max-width: 760px) {
        body { position: relative; display: flex; flex-direction: column; }
        .sub { order: 1; }
        .holds { order: 2; }
        .thing { order: 3; }
        .across { order: 4; }
        .lib { position: sticky; top: 0; z-index: 4; height: 50px; margin-right: 54px; padding: 0 8px 0 14px; gap: 4px; overflow: auto hidden; scrollbar-width: none; }
        .logo { margin-right: 8px; }
        .logo b { font-size: 19px; }
        .s { white-space: nowrap; }
        .s small, .lib .find, .me span { display: none; }
        .me { position: fixed; z-index: 5; top: 0; right: 0; justify-content: center; width: 54px; height: 50px; }
        [data-tone="light"] :is(.lib, .me) { border-bottom: 1px solid var(--line); }
        .sub { flex-direction: column; flex-wrap: nowrap; align-items: stretch; padding: 16px 16px 12px; }
        h1 { font-size: 28px; white-space: normal; }
        .chain { overflow: auto hidden; scrollbar-width: none; }
        .tools { margin: 0; }
        .tools > div { justify-content: flex-start; }
        .holds { padding: 10px 16px 12px; overflow: auto hidden; border-bottom: 1px solid var(--line); scrollbar-width: none; }
        .holds > div { display: flex; align-items: center; gap: 6px; }
        .holds h4 { flex: none; margin: 0 6px 0 0; }
        .holds h4.next { margin-left: 18px; }
        .holds h4 small { display: none; }
        .holds a { flex: none; padding: 5px 11px 5px 9px; border: 1px solid var(--line); border-radius: 99px; background: var(--white); white-space: nowrap; }
        .holds a small { margin-left: 4px; }
        .thing { padding: 16px 16px 24px; }
        .go { flex-wrap: wrap; gap: 14px; padding: 14px; }
        .go > div { flex: 1 1 60%; min-width: 0; }
        .go .read { margin: 0; }
        .shelf { grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 16px 12px; }
        .cover { padding: 10px 8px 8px 13px; }
        .cover b { font-size: 14.5px; }
        .open, .person { flex-direction: column; gap: 16px; }
        .cover.big { width: 150px; }
        .cover.big b { font-size: 22px; }
        .counts { gap: 18px; }
        .chat .mine { max-width: 88%; }
        .across { padding: 16px; border-top: 1px solid var(--line); }

        /* a side bar or a rail turns to lie along the foot, the subjects as marks */
        :is([data-layout="side"], [data-layout="rail"]) body { padding-bottom: 60px; }
        :is([data-layout="side"], [data-layout="rail"]) .subjects { position: fixed; z-index: 4; left: 0; right: 0; bottom: 0; justify-content: space-around; padding: 8px 10px; border-top: 1px solid var(--bar-line); background: var(--bar); }
        :is([data-layout="side"], [data-layout="rail"]) .s { padding: 0; background: none; box-shadow: none; }
        :is([data-layout="side"], [data-layout="rail"]) .s b { display: none; }
        :is([data-layout="side"], [data-layout="rail"]) .s i { width: 42px; height: 42px; border-radius: 12px; font-size: 13px; }
        :is([data-layout="side"], [data-layout="rail"]):is([data-at="subject"], [data-at="book"], [data-at="chat"]) .s.is-claude i { box-shadow: 0 0 0 2px var(--bar), 0 0 0 4px var(--c); }

        [data-layout="two"] .sub { padding: 12px 16px; }
        [data-layout="two"] .title p { display: none; }
        [data-layout="cards"] body { padding-bottom: 10px; }
        [data-layout="cards"] :is(.sub, .holds, .thing, .across) { margin: 0 10px; }
        [data-layout="cards"] .sub { margin-top: 4px; border-radius: 14px 14px 0 0; }
        [data-layout="cards"] .thing { border-radius: 0 0 14px 14px; }
        [data-layout="cards"] .across { margin-top: 10px; border: 0; border-radius: 14px; }
    }
</style>
</head>
<body>

<div class="side">
<header class="lib">
    <a class="logo" data-go="library"><i>D</i><b>Dougs Library</b></a>
    <nav class="subjects">
        <a class="s is-claude" data-go="subject" style="--c: var(--sea)"><i>Cl</i><b>Conversations with Claude</b><small>212</small></a>
        <a class="s" style="--c: #1f8a78"><i>Ch</i><b>Conversations with ChatGPT</b><small>147</small></a>
        <a class="s" style="--c: #c24a78"><i>De</i><b>Dougs Design</b><small>5</small></a>
        <a class="s" style="--c: #7a4a8c"><i>Rm</i><b>Dougs Reference Manual</b><small>3</small></a>
    </nav>
    <span class="find"><svg viewBox="0 0 16 16"><circle cx="7" cy="7" r="4.5"/><path d="M10.5 10.5 14 14"/></svg><em style="font-style: normal">Find in the library</em></span>
</header>

<a class="me" data-go="author"><i>D</i><span><b>The Librarian</b><small>my own account</small></span></a>

<aside class="holds">
    <div class="at-library">
        <h4>My favorites<small>3</small></h4>
        <a data-go="book" style="--c: #e07a35"><i></i><b>Lorem Ipsum Dolor</b><small class="star">★</small></a>
        <a style="--c: #4450b8"><i></i><b>Magna Aliqua</b><small class="star">★</small></a>
        <a style="--c: #c24a78"><i></i><b>The Library's Home</b><small class="star">★</small></a>
    </div>
    <div class="at-subject">
        <h4>Holds<small>3 projects</small></h4>
        <a class="on" style="--c: #e07a35"><i></i><b>A First Project</b><small>38</small></a>
        <a style="--c: #1f8a78"><i></i><b>A Second Project</b><small>91</small></a>
        <a style="--c: #4450b8"><i></i><b>A Third Project</b><small>83</small></a>
        <h4 class="next">My favorites here<small>2</small></h4>
        <a data-go="book" style="--c: #e07a35"><i></i><b>Lorem Ipsum Dolor</b><small class="star">★</small></a>
        <a style="--c: #4450b8"><i></i><b>Magna Aliqua</b><small class="star">★</small></a>
    </div>
    <div class="at-book at-chat">
        <h4>Holds<small>8 chapters</small></h4>
        <a class="first" data-go="chat" style="--c: #e07a35"><i></i><b>A First Chapter</b><small>1</small></a>
        <a style="--c: #e07a35"><i></i><b>A Second Chapter</b><small>2</small></a>
        <a style="--c: #e07a35"><i></i><b>A Third Chapter</b><small>3</small></a>
        <a style="--c: #e07a35"><i></i><b>A Fourth Chapter</b><small>4</small></a>
        <a style="--c: #e07a35"><i></i><b>A Fifth Chapter</b><small>5</small></a>
    </div>
    <div class="at-author">
        <h4>My books<small>3</small></h4>
        <a class="on" style="--c: var(--me)"><i></i><b>Dougs Story</b><small>3</small></a>
        <a style="--c: #c24a78"><i></i><b>Dougs Design</b><small>5</small></a>
        <a style="--c: #7a4a8c"><i></i><b>Dougs Reference Manual</b><small>3</small></a>
    </div>
</aside>
</div>

<section class="sub">
    <div class="title">
        <div class="chain">
            <em>Filed under</em>
            <span class="at-library">itself</span>
            <span class="at-subject"><a data-go="library">Dougs Library</a></span>
            <span class="at-book"><a data-go="subject">Conversations with Claude</a><i>›</i><a data-go="subject">A First Project</a></span>
            <span class="at-chat"><a data-go="subject">Conversations with Claude</a><i>›</i><a data-go="subject">A First Project</a><i>›</i><a data-go="book">Lorem Ipsum Dolor</a></span>
            <span class="at-author"><a data-go="library">Dougs Library</a></span>
        </div>
        <h1 class="at-library">Dougs Library</h1>
        <h1 class="at-subject">Conversations with Claude</h1>
        <h1 class="at-book">Lorem Ipsum Dolor</h1>
        <h1 class="at-chat">A First Chapter</h1>
        <h1 class="at-author">Dougs Story</h1>
        <p class="at-library">by <a class="to-me" data-go="author">The Librarian</a> · three books and two subjects · 359 conversations kept</p>
        <p class="at-subject">a subject · 212 books in three projects · by <a class="to-me" data-go="author">The Librarian</a></p>
        <p class="at-book">by <a class="to-me" data-go="author">The Librarian</a> and Claude · 8 chapters · kept 9 Sep 2026</p>
        <p class="at-chat">chapter 1 of 8 · <a class="to-me" data-go="author">The Librarian</a> and Claude · kept 9 Sep 2026</p>
        <p class="at-author">The Librarian · my own account</p>
    </div>
    <div class="tools">
        <div class="at-subject">
            <span class="seg"><span class="on" data-view-is="shelf">Shelf</span><span data-view-is="list">List</span><span>Table</span></span>
            <span class="find"><svg viewBox="0 0 16 16"><circle cx="7" cy="7" r="4.5"/><path d="M10.5 10.5 14 14"/></svg>Find in this subject</span>
        </div>
        <div class="at-book">
            <span class="fav"><em class="star">★</em>Among my favorites</span>
            <span class="find"><svg viewBox="0 0 16 16"><circle cx="7" cy="7" r="4.5"/><path d="M10.5 10.5 14 14"/></svg>Find in this book</span>
        </div>
        <div class="at-chat">
            <span class="find"><svg viewBox="0 0 16 16"><path d="M8 3v10M3 8h10"/></svg>Note on a passage</span>
            <span class="find"><svg viewBox="0 0 16 16"><circle cx="7" cy="7" r="4.5"/><path d="M10.5 10.5 14 14"/></svg>Find in this book</span>
        </div>
    </div>
</section>

<main class="thing">
    <div class="at-library">
        <h4>Subjects</h4>
        <div class="tiles">
            <a class="tile" data-go="subject" style="--t: #dff3fa; --c: var(--sea)"><i></i><b>Conversations with Claude</b><small>212 books in three projects</small></a>
            <a class="tile" style="--t: #dcf5ee; --c: #1f8a78"><i></i><b>Conversations with ChatGPT</b><small>147 books</small></a>
        </div>
        <h4>My books</h4>
        <div class="mines">
            <a class="cover mine" data-go="author"><b>Dougs Story</b><small>my own account</small></a>
            <a class="cover mine"><b>Dougs Design</b><small>the design</small></a>
            <a class="cover mine"><b>Dougs Reference Manual</b><small>the parts</small></a>
        </div>
    </div>

    <div class="at-subject">
        <div class="go">
            <span class="cover"><b>Lorem Ipsum Dolor</b><small>with Claude</small></span>
            <div>
                <em>Continue</em>
                <h2>Lorem Ipsum Dolor</h2>
                <p>A First Project · kept 9 September 2026. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                <u><i></i></u>
                <small>Chapter 1 of 8 · 2 notes of mine · cited twice</small>
            </div>
            <a class="read" data-go="chat">Read</a>
        </div>
        <h4>Lately kept<small>212 books · newest first</small></h4>
        <div class="shelf">
            <a class="bk" data-go="book"><span class="cover"><b>Lorem Ipsum Dolor</b><small>with Claude</small></span><b class="name">Lorem Ipsum Dolor</b><p>9 Sep · 8 chapters <em class="star">★</em></p></a>
            <a class="bk"><span class="cover"><b>Quis Nostrud</b><small>with Claude</small></span><b class="name">Quis Nostrud</b><p>1 Oct · 6 chapters</p></a>
            <a class="bk"><span class="cover"><b>Magna Aliqua</b><small>with Claude</small></span><b class="name">Magna Aliqua</b><p>20 Sep · 11 chapters <em class="star">★</em></p></a>
            <a class="bk"><span class="cover"><b>Tempor Incididunt</b><small>with Claude</small></span><b class="name">Tempor Incididunt</b><p>12 Sep · 7 chapters</p></a>
            <a class="bk"><span class="cover"><b>Ut Enim ad Minim</b><small>with Claude</small></span><b class="name">Ut Enim ad Minim</b><p>27 Sep · 3 chapters</p></a>
            <a class="bk"><span class="cover"><b>Sed Do Eiusmod</b><small>with Claude</small></span><b class="name">Sed Do Eiusmod</b><p>5 Sep · 2 chapters</p></a>
            <a class="bk"><span class="cover"><b>Adipiscing Elit</b><small>with Claude</small></span><b class="name">Adipiscing Elit</b><p>2 Sep · 9 chapters</p></a>
            <a class="bk"><span class="cover"><b>Sit Amet Consectetur</b><small>with Claude</small></span><b class="name">Sit Amet Consectetur</b><p>21 Jul · 14 chapters</p></a>
            <a class="bk"><span class="cover"><b>Duis Aute Irure</b><small>with Claude</small></span><b class="name">Duis Aute Irure</b><p>14 Jul · 5 chapters</p></a>
            <a class="bk"><span class="cover"><b>Excepteur Sint</b><small>with Claude</small></span><b class="name">Excepteur Sint</b><p>2 Jul · 4 chapters</p></a>
        </div>
    </div>

    <div class="open at-book">
        <span class="cover big"><b>Lorem Ipsum Dolor</b><small>with Claude</small></span>
        <div class="words">
            <p class="says">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
            <a class="read" data-go="chat">Read from A First Chapter<svg viewBox="0 0 16 16"><path d="M3 8h10M9 4l4 4-4 4"/></svg></a>
        </div>
    </div>

    <div class="chat at-chat">
        <div class="mine"><span class="who">The Librarian</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit? Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
        <div class="theirs">
            <span class="who">Claude</span>
            <p>Ut enim ad minim veniam, quis nostrud exercitation. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <mark>Excepteur sint occaecat cupidatat non proident</mark><sup>1</sup>, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
<pre>const lorem = ipsum.dolor('sit amet');
return lorem.consectetur();</pre>
            <a class="made"><i>◇</i><span><b>Lorem Ipsum, a first draft</b><small>made in this turn · opens beside the page</small></span></a>
        </div>
        <div class="mine"><span class="who">The Librarian</span>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit?</div>
        <div class="theirs">
            <span class="who">Claude</span>
            <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.</p>
        </div>
        <div class="turns"><span></span><a>A Second Chapter →</a></div>
    </div>

    <div class="person at-author">
        <span class="face">D</span>
        <div class="words">
            <p class="says">My own account, and the one book here that is by its own subject. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            <div class="counts"><span><b>3</b>books written</span><span><b>359</b>conversations kept</span><span><b>41</b>notes</span></div>
            <div class="mines">
                <a class="cover mine"><b>Dougs Story</b><small>my own account</small></a>
                <a class="cover mine"><b>Dougs Design</b><small>the design</small></a>
                <a class="cover mine"><b>Dougs Reference Manual</b><small>the parts</small></a>
            </div>
        </div>
    </div>
</main>

<aside class="across">
    <a class="return to-book" data-go="book"><svg viewBox="0 0 16 16"><path d="M13 8H3M7 4 3 8l4 4"/></svg>Back to Lorem Ipsum Dolor</a>
    <a class="return to-subject" data-go="subject"><svg viewBox="0 0 16 16"><path d="M13 8H3M7 4 3 8l4 4"/></svg>Back to Conversations with Claude</a>

    <div class="at-library">
        <h4>Lately kept</h4>
        <a class="ref" style="--c: #c2413f"><span class="to"><i></i>Quis Nostrud</span><p>1 Oct · Conversations with Claude</p></a>
        <a class="ref" style="--c: #7a4a8c"><span class="to"><i></i>Ut Enim ad Minim</span><p>27 Sep · Conversations with Claude</p></a>
        <h4 class="next">My notes<small>41</small></h4>
        <div class="note"><b>3 Oct 2026 · in Lorem Ipsum Dolor</b>Lorem ipsum, a note of mine beside the passage it is about.</div>
    </div>

    <div class="at-subject">
        <h4>Cited from outside<small>2</small></h4>
        <a class="ref" data-go="author" data-from="subject" style="--c: var(--me)"><span class="to"><svg viewBox="0 0 16 16"><path d="M13 8H3M7 4 3 8l4 4"/></svg><i></i>Dougs Story</span><p>chapter 1 cites Lorem Ipsum Dolor</p></a>
        <a class="ref" style="--c: #1f8a78"><span class="to"><svg viewBox="0 0 16 16"><path d="M13 8H3M7 4 3 8l4 4"/></svg><i></i>Conversations with ChatGPT</span><p>one book cites Adipiscing Elit</p></a>
        <h4 class="next">My notes here<small>12</small></h4>
        <div class="note"><b>3 Oct 2026 · in Lorem Ipsum Dolor</b>Lorem ipsum, a note of mine beside the passage it is about.</div>
    </div>

    <div class="at-book at-chat">
        <h4>Cites<small>1</small></h4>
        <a class="ref" style="--c: #3d7a4e"><span class="to"><svg viewBox="0 0 16 16"><path d="M3 8h10M9 4l4 4-4 4"/></svg><i></i>Adipiscing Elit</span><p>chapter 2 · A First Project</p></a>
        <h4 class="next">Cited by<small>2</small></h4>
        <a class="ref" data-go="author" data-from="book" style="--c: var(--me)"><span class="to"><svg viewBox="0 0 16 16"><path d="M13 8H3M7 4 3 8l4 4"/></svg><i></i>Dougs Story</span><p>chapter 1 · my own account</p><q>Excepteur sint occaecat cupidatat non proident</q></a>
        <a class="ref" style="--c: #c24a78"><span class="to"><svg viewBox="0 0 16 16"><path d="M13 8H3M7 4 3 8l4 4"/></svg><i></i>Sit Amet Consectetur</span><p>chapter 3 · A First Project</p></a>
        <h4 class="next">My notes<small>1</small></h4>
        <div class="note"><b>1 · 3 Oct 2026</b>Lorem ipsum, a note of mine beside the passage it is about.</div>
    </div>

    <div class="at-author">
        <h4>Cites<small>1</small></h4>
        <a class="ref" data-go="book" style="--c: #e07a35"><span class="to"><svg viewBox="0 0 16 16"><path d="M3 8h10M9 4l4 4-4 4"/></svg><i></i>Lorem Ipsum Dolor</span><p>chapter 1 · a conversation with Claude</p><q>Excepteur sint occaecat cupidatat non proident</q></a>
        <h4 class="next">Cited by<small>0</small></h4>
        <div class="note">Nothing cites this chapter yet.</div>
    </div>
</aside>

<script>
    const page = document.documentElement;
    for (const door of document.querySelectorAll('[data-go]'))
        door.addEventListener('click', () => {
            if (door.dataset.from) page.dataset.from = door.dataset.from;
            else delete page.dataset.from;
            page.dataset.at = door.dataset.go;
            window.scrollTo(0, 0);
            for (const column of document.querySelectorAll('.thing, .holds, .across')) column.scrollTop = 0;
        });
    for (const view of document.querySelectorAll('[data-view-is]'))
        view.addEventListener('click', () => {
            page.dataset.view = view.dataset.viewIs;
            for (const other of view.parentElement.children) other.classList.toggle('on', other === view);
        });
<\/script>
</body>
</html>
`})]})]}),a.jsxs(i,{children:[a.jsx(d,{children:"13"}),a.jsx(o,{children:"[A Black Top Bar](/dougs-design/#a-black-top-bar)"}),a.jsx(t,{children:"Concept 13, an idea, after the homes I liked, in the coming-soon page's soft black."}),a.jsx(t,{children:"One bar, across the top, in soft black: the mark, the subjects as its tabs, and me at its right end. No side bar; what a subject holds is a row under its name, and the whole width is for its books."}),a.jsxs(t,{children:[a.jsx(p,{}),a.jsx(r,{children:"/.design/3-every-concept~013-desk.png"}),a.jsx(r,{children:"/.design/3-every-concept~013-phone.png"})]}),a.jsxs(t,{children:[a.jsx(c,{}),a.jsx(n,{children:`<!doctype html>
<html lang="en" data-layout="header" data-tone="dark" data-at="subject" data-view="shelf">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>A Black Top Bar</title>
<meta name="number" content="13">
<meta name="state" content="idea">
<meta name="after" content="the homes I liked, in the coming-soon page's soft black">
<meta name="idea" content="One bar, across the top, in soft black: the mark, the subjects as its tabs, and me at its right end. No side bar; what a subject holds is a row under its name, and the whole width is for its books.">
<meta name="said" content="">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
<style>
    /* ---- what does not change between the ideas ----
       The frame is soft black, the blue between it and white, and white. The soft black #0c1b1f and the opal #c8f4fb are the
       coming-soon page's own; the blues are the hue between them (208 to 223 in OKLCH) walked from dark to light.
       The CONTENT keeps its own colors: every book a cover of its own, the light accents the opal's wave. */
    :root { --night: #0c1b1f; --deep: #14323c; --blue: #166178; --sea: #4e9eb9; --sky: #8fc8dc; --opal: #c8f4fb; --pale: #e3f5fa; --mist: #f1f7f9; --white: #ffffff;
        --ink: #10252c; --soft: #516770; --line: #dbe7ec; --me: #e8590c;
        --wash: linear-gradient(105deg, #e2f6fb 0%, #ecf0fd 52%, #fae9f4 100%);
        --serif: 'Cormorant Garamond', Georgia, serif; --sans: 'Inter', system-ui, sans-serif; }
    [data-tone="dark"] { --bar: var(--night); --bar-fg: #ffffff; --bar-dim: #a9bcc1; --bar-on: rgba(255, 255, 255, .11); --bar-line: #1d3339; --mark: var(--opal); --mark-fg: var(--night); }
    [data-tone="light"] { --bar: var(--white); --bar-fg: var(--ink); --bar-dim: var(--soft); --bar-on: var(--pale); --bar-line: var(--line); --mark: var(--night); --mark-fg: #ffffff; }
    [data-at="library"] [class*="at-"]:not(.at-library), [data-at="subject"] [class*="at-"]:not(.at-subject), [data-at="book"] [class*="at-"]:not(.at-book), [data-at="chat"] [class*="at-"]:not(.at-chat), [data-at="author"] [class*="at-"]:not(.at-author) { display: none !important; }

    * { box-sizing: border-box; margin: 0; }
    body { background: var(--white); color: var(--ink); font: 400 14px/1.5 var(--sans); }
    a { color: inherit; text-decoration: none; }
    svg { width: 15px; height: 15px; stroke: currentColor; fill: none; stroke-width: 1.7; stroke-linecap: round; stroke-linejoin: round; flex: none; }
    [data-go], [data-view-is] { cursor: pointer; }
    h4 { display: flex; align-items: center; gap: 8px; margin-bottom: 10px; font: 600 10.5px/1 var(--sans); letter-spacing: .12em; text-transform: uppercase; color: var(--soft); }
    h4 small { margin-left: auto; font: 400 11.5px/1 var(--sans); letter-spacing: 0; text-transform: none; }
    h4.next { margin-top: 22px; }
    .star { color: var(--me); font-style: normal; }

    /* the library's own things: its mark, its subjects, a way to find, and me. They are held together only where an idea has a side bar. */
    .side { display: contents; }
    [data-at="chat"] .holds a.first { background: var(--bar-on, var(--pale)); }
    .lib { grid-area: lib; display: flex; align-items: center; gap: 6px; min-width: 0; background: var(--bar); color: var(--bar-fg); }
    .logo { display: flex; align-items: center; gap: 10px; flex: none; }
    .logo i { display: grid; place-items: center; width: 30px; height: 30px; border-radius: 8px; background: var(--mark); color: var(--mark-fg); font: 600 15px/1 var(--sans); font-style: normal; }
    .logo b { font: 600 21px/1 var(--serif); white-space: nowrap; }
    .subjects { display: flex; gap: 2px; min-width: 0; }
    .s { display: flex; align-items: center; gap: 8px; padding: 7px 10px; border-radius: 8px; color: var(--bar-dim); font-size: 13.5px; }
    .s i { display: grid; place-items: center; flex: none; width: 9px; height: 9px; border-radius: 50%; background: var(--c); color: #fff; font: 600 0/1 var(--sans); font-style: normal; }
    .s b { font-weight: 500; }
    .s small { font-size: 12px; opacity: .7; }
    :is([data-at="subject"], [data-at="book"], [data-at="chat"]) .s.is-claude { background: var(--bar-on); color: var(--bar-fg); }
    .find { display: flex; align-items: center; gap: 8px; padding: 6px 11px; border-radius: 9px; white-space: nowrap; }
    .lib .find { margin-left: auto; background: var(--bar-on); color: var(--bar-dim); }
    .me { grid-area: me; display: flex; align-items: center; gap: 9px; background: var(--bar); color: var(--bar-fg); }
    .me i { display: grid; place-items: center; flex: none; width: 32px; height: 32px; border-radius: 50%; background: var(--me); color: #fff; font: 600 14px/1 var(--sans); font-style: normal; }
    .me b { display: block; font-weight: 500; line-height: 1.2; white-space: nowrap; }
    .me small { display: block; font-size: 11.5px; opacity: .7; white-space: nowrap; }

    /* the open page's own things: what it is filed under, its name, who it is by, its tools */
    .sub { --sub-fg: var(--ink); --sub-dim: var(--soft); --ctl: var(--mist); --ctl-line: var(--line); --ctl-fg: var(--soft); --on: var(--night); --on-fg: #fff; --lnk: var(--blue); --melnk: var(--me);
        grid-area: sub; display: flex; flex-wrap: wrap; align-items: flex-end; gap: 10px 20px; min-width: 0; padding: 20px 28px 14px; color: var(--sub-fg); }
    .chain { display: flex; align-items: center; gap: 7px; font-size: 12.5px; color: var(--sub-dim); white-space: nowrap; }
    .chain em { font: 600 9.5px/1 var(--sans); font-style: normal; letter-spacing: .12em; text-transform: uppercase; }
    .chain span { display: flex; align-items: center; gap: 7px; }
    .chain i { font-style: normal; opacity: .55; }
    .chain a { font-weight: 500; color: var(--lnk); }
    .title { min-width: 0; }
    h1 { margin-top: 4px; font: 600 36px/1.04 var(--serif); white-space: nowrap; }
    .title p { margin-top: 4px; font-size: 13px; color: var(--sub-dim); }
    .title p a { color: var(--lnk); font-weight: 500; }
    .title p a.to-me { color: var(--melnk); text-decoration: underline; text-decoration-color: var(--me); text-decoration-thickness: 2px; text-underline-offset: 3px; }
    .tools { margin-left: auto; }
    .tools > div { display: flex; flex-wrap: wrap; justify-content: flex-end; align-items: center; gap: 8px; }
    .seg { display: flex; overflow: hidden; border: 1px solid var(--ctl-line); border-radius: 9px; background: var(--ctl); }
    .seg span { padding: 6px 12px; color: var(--ctl-fg); }
    .seg span.on { background: var(--on); color: var(--on-fg); font-weight: 500; }
    .sub .find { border: 1px solid var(--ctl-line); background: var(--ctl); color: var(--ctl-fg); }
    .fav { display: flex; align-items: center; gap: 6px; padding: 6px 11px; border-radius: 9px; background: color-mix(in srgb, var(--me) 12%, white); color: #a8400a; font-weight: 500; white-space: nowrap; }

    /* down: what the open page holds */
    .holds { grid-area: holds; min-width: 0; }
    .holds a { display: flex; align-items: center; gap: 9px; padding: 6px 9px; border-radius: 8px; }
    .holds a i { flex: none; width: 9px; height: 9px; border-radius: 50%; background: var(--c, var(--sea)); }
    .holds a b { font-weight: 500; }
    .holds a small { margin-left: auto; font-size: 12px; color: var(--soft); }
    .holds a.on { background: var(--pale); }

    /* the page itself */
    .thing { grid-area: thing; min-width: 0; }
    .go { display: flex; align-items: center; gap: 20px; margin-bottom: 22px; padding: 16px 20px; border-radius: 16px; background: var(--wash); }
    .go .cover { flex: none; width: 92px; padding: 10px 8px 8px 13px; }
    .go .cover b { font-size: 13.5px; }
    .go .cover small { font-size: 7.5px; padding-top: 6px; }
    .go em { font: 600 10.5px/1 var(--sans); font-style: normal; letter-spacing: .1em; text-transform: uppercase; color: var(--me); }
    .go h2 { margin: 4px 0 2px; font: 600 24px/1.1 var(--serif); }
    .go p { max-width: 52ch; font-size: 13px; color: var(--soft); }
    .go u { display: block; width: 260px; max-width: 100%; height: 4px; margin: 10px 0 6px; border-radius: 9px; background: rgba(12, 27, 31, .1); text-decoration: none; }
    .go u i { display: block; width: 14%; height: 100%; border-radius: 9px; background: var(--me); }
    .go small { font-size: 12px; color: var(--soft); }
    .go .read { margin-left: auto; }
    .read { display: inline-flex; align-items: center; gap: 8px; padding: 9px 18px; border-radius: 99px; background: var(--night); color: #fff; font-weight: 500; white-space: nowrap; }

    /* a cover is the landmark of a book, and every book has a color of its own; my own books are the soft black */
    .cover { position: relative; display: flex; flex-direction: column; aspect-ratio: 3 / 4; padding: 13px 11px 10px 17px; border-radius: 3px 7px 7px 3px; color: #fff; background: linear-gradient(160deg, color-mix(in srgb, var(--c) 90%, white), color-mix(in srgb, var(--c) 86%, black)); box-shadow: 0 12px 22px -14px rgba(12, 27, 31, .55); }
    .cover::before { content: ''; position: absolute; left: 7px; top: 0; bottom: 0; width: 1px; background: rgba(255, 255, 255, .3); }
    .cover b { font: 600 17px/1.08 var(--serif); }
    .cover small { margin-top: auto; padding-top: 8px; border-top: 1px solid rgba(255, 255, 255, .32); font: 600 9px/1.2 var(--sans); letter-spacing: .1em; text-transform: uppercase; opacity: .92; }
    .cover.mine { --c: var(--night); color: var(--opal); background: linear-gradient(160deg, #16303a, var(--night)); }
    .bk:nth-child(8n+1), .open, .go { --c: #e07a35; }
    .bk:nth-child(8n+2) { --c: #c2413f; }
    .bk:nth-child(8n+3) { --c: #4450b8; }
    .bk:nth-child(8n+4) { --c: #1f8a78; }
    .bk:nth-child(8n+5) { --c: #7a4a8c; }
    .bk:nth-child(8n+6) { --c: #2f7fb0; }
    .bk:nth-child(8n+7) { --c: #3d7a4e; }
    .bk:nth-child(8n) { --c: #c24a78; }
    .shelf { display: grid; grid-template-columns: repeat(auto-fill, minmax(124px, 1fr)); gap: 22px 18px; }
    .bk { display: block; }
    .bk .name { display: none; }
    .bk p { display: flex; gap: 6px; margin-top: 8px; font-size: 12px; color: var(--soft); }
    [data-view="list"] .shelf { grid-template-columns: minmax(0, 1fr); gap: 0; }
    [data-view="list"] .bk { display: grid; grid-template-columns: 30px minmax(0, 1fr) auto; gap: 14px; align-items: center; padding: 9px 0; border-bottom: 1px solid var(--line); }
    [data-view="list"] .bk .cover { padding: 0; border-radius: 2px 4px 4px 2px; box-shadow: none; }
    [data-view="list"] .bk .cover::before { left: 4px; }
    [data-view="list"] .bk .cover b, [data-view="list"] .bk .cover small { display: none; }
    [data-view="list"] .bk .name { display: block; font: 600 19px/1.2 var(--serif); }
    [data-view="list"] .bk p { margin: 0; }
    .mines { display: grid; grid-template-columns: repeat(auto-fill, minmax(124px, 148px)); gap: 18px; }

    .tiles { display: grid; grid-template-columns: repeat(auto-fill, minmax(210px, 1fr)); gap: 14px; margin-bottom: 26px; }
    .tile { display: block; padding: 14px 16px 16px; border-radius: 14px; background: var(--t); }
    .tile i { display: block; width: 26px; height: 26px; margin-bottom: 24px; border-radius: 8px; background: var(--c); }
    .tile b { display: block; font: 600 21px/1.1 var(--serif); }
    .tile small { font-size: 12.5px; color: var(--soft); }

    .open, .person { display: flex; gap: 26px; align-items: flex-start; }
    .cover.big { flex: none; width: 180px; padding: 20px 15px 13px 24px; }
    .cover.big b { font-size: 26px; }
    .cover.big::before { left: 11px; }
    .words { min-width: 0; }
    .says { max-width: 56ch; font: 500 20px/1.5 var(--serif); }
    .words .read { margin-top: 18px; }
    .face { display: grid; place-items: center; flex: none; width: 96px; height: 96px; border-radius: 50%; background: var(--me); color: #fff; font: 600 46px/1 var(--serif); box-shadow: 0 0 0 5px var(--white), 0 0 0 6px color-mix(in srgb, var(--me) 45%, white); }
    .counts { display: flex; gap: 26px; margin: 16px 0 22px; color: var(--soft); font-size: 12.5px; }
    .counts b { display: block; font: 600 26px/1.1 var(--serif); color: var(--ink); }

    /* a conversation, in the form of the application it comes from; my turns in my color */
    .chat { display: grid; gap: 20px; max-width: 720px; margin: 0 auto; }
    .chat .who { display: block; margin-bottom: 4px; font: 600 10.5px/1 var(--sans); letter-spacing: .1em; text-transform: uppercase; color: var(--soft); }
    .chat .mine { justify-self: end; max-width: 78%; padding: 11px 16px; border-radius: 18px 18px 4px 18px; background: color-mix(in srgb, var(--me) 9%, white); font-size: 15px; }
    .chat .mine .who { color: var(--me); }
    .chat .theirs p { font: 500 19.5px/1.55 var(--serif); }
    .chat .theirs p + p { margin-top: 10px; }
    .chat mark { padding: 1px 3px; border-radius: 3px; background: var(--pale); color: inherit; }
    .chat sup { margin-left: 2px; font: 600 10.5px/1 var(--sans); color: var(--me); }
    .chat pre { margin: 12px 0; padding: 12px 14px; border-radius: 10px; background: var(--night); color: #d7e6ea; font: 400 12.5px/1.6 ui-monospace, 'Cascadia Code', Consolas, monospace; overflow: auto; }
    .chat .made { display: flex; align-items: center; gap: 10px; width: fit-content; margin-top: 12px; padding: 9px 13px; border: 1px solid var(--line); border-radius: 12px; font-size: 13px; }
    .chat .made i { display: grid; place-items: center; width: 30px; height: 30px; border-radius: 8px; background: var(--pale); color: var(--blue); font-style: normal; }
    .chat .made small { display: block; color: var(--soft); font-size: 12px; }
    .chat .turns { display: flex; justify-content: space-between; padding-top: 16px; border-top: 1px solid var(--line); color: var(--blue); font-weight: 500; }

    /* across: what it cites, what cites it, and what I wrote beside it */
    .across { grid-area: across; min-width: 0; }
    .ref { display: block; margin-bottom: 8px; padding: 10px 12px; border: 1px solid var(--line); border-radius: 12px; background: var(--white); }
    .ref .to { display: flex; align-items: center; gap: 7px; font-weight: 600; }
    .ref .to svg { color: var(--soft); }
    .ref .to i { flex: none; width: 9px; height: 9px; border-radius: 50%; background: var(--c, var(--sea)); }
    .ref p { margin-top: 2px; font-size: 12.5px; color: var(--soft); }
    .ref q { display: block; margin-top: 7px; padding: 6px 9px; border-radius: 7px; background: var(--pale); font: italic 500 15.5px/1.35 var(--serif); quotes: '“' '”'; }
    .note { padding: 10px 12px; border: 1px dashed var(--line); border-radius: 12px; font-size: 13px; color: var(--soft); }
    .note b { display: block; margin-bottom: 2px; color: var(--ink); font-weight: 500; }
    .return { display: none; align-items: center; gap: 8px; margin-bottom: 14px; padding: 9px 12px; border-radius: 10px; background: var(--night); color: #fff; font-weight: 500; }
    .return svg { color: var(--sky); }
    [data-at="author"][data-from="book"] .return.to-book, [data-at="author"][data-from="subject"] .return.to-subject { display: flex; }

    /* ---- what each idea colors, at every width ---- */
    [data-layout="both"] .holds { background: var(--pale); }
    [data-layout="both"] .holds a.on { background: var(--white); }
    [data-layout="rail"][data-tone="dark"] .sub { --sub-fg: #fff; --sub-dim: rgba(255, 255, 255, .8); --ctl: rgba(12, 27, 31, .26); --ctl-line: transparent; --ctl-fg: #fff; --on: #fff; --on-fg: var(--night); --lnk: #fff; --melnk: #fff; background: var(--blue); }
    [data-layout="rail"][data-tone="dark"] .fav { background: #fff; }
    [data-layout="rail"][data-tone="light"] { --bar: var(--pale); --bar-on: #fff; --bar-line: #cbe6ee; }
    [data-layout="two"][data-tone="dark"] .sub { --sub-dim: #27505c; --ctl: rgba(255, 255, 255, .62); --ctl-line: transparent; --ctl-fg: var(--ink); --lnk: var(--deep); background: var(--sky); }
    [data-layout="two"][data-tone="light"] .sub { --ctl: #fff; background: var(--pale); }
    [data-layout="side"][data-tone="light"] { --bar: var(--mist); --bar-on: #fff; }
    [data-layout="cards"][data-tone="light"] { --canvas: #e9f2f5; --bar-on: #fff; }
    [data-layout="cards"][data-tone="dark"] { --canvas: var(--night); }
    [data-layout="cards"] body, [data-layout="cards"] .lib, [data-layout="cards"] .me { background: var(--canvas); }
    [data-layout="cards"] :is(.sub, .holds, .thing, .across) { background: var(--white); }
    :is([data-layout="header"], [data-layout="both"], [data-layout="two"], [data-layout="cards"]):is([data-at="subject"], [data-at="book"], [data-at="chat"]) .s.is-claude { box-shadow: inset 0 -2px 0 var(--c); }

    /* ---- at a desk: where each idea puts the bars ---- */
    @media (min-width: 761px) {
        html, body { height: 100%; }
        body { display: grid; overflow: hidden; }
        .thing { padding: 20px 28px 40px; overflow: auto; }
        .holds { padding: 18px 12px; overflow: auto; }
        .across { padding: 18px 16px; overflow: auto; border-left: 1px solid var(--line); }

        /* a bar across the top holds the library, with me at its right end */
        :is([data-layout="header"], [data-layout="both"], [data-layout="two"], [data-layout="cards"]) .lib { padding: 9px 170px 9px 18px; }
        :is([data-layout="header"], [data-layout="both"], [data-layout="two"], [data-layout="cards"]) .logo { margin-right: 12px; }
        :is([data-layout="header"], [data-layout="both"], [data-layout="two"], [data-layout="cards"]) :is(.s small, .me small, .lib .find em) { display: none; }
        :is([data-layout="header"], [data-layout="both"], [data-layout="two"], [data-layout="cards"]) .me { grid-area: lib; justify-self: end; z-index: 1; padding: 0 18px 0 8px; background: none; }
        [data-tone="light"]:is([data-layout="header"], [data-layout="both"], [data-layout="two"]) .lib { border-bottom: 1px solid var(--line); }

        [data-layout="header"] body { grid-template: auto auto auto minmax(0, 1fr) / minmax(0, 1fr) 300px; grid-template-areas: "lib lib" "sub sub" "holds holds" "thing across"; }
        [data-layout="both"] body { grid-template: auto auto minmax(0, 1fr) / 240px minmax(0, 1fr) 300px; grid-template-areas: "lib lib lib" "holds sub sub" "holds thing across"; }
        [data-layout="both"] .holds { padding: 20px 12px; border-right: 1px solid #cbe6ee; }
        [data-layout="two"] body { grid-template: auto auto minmax(0, 1fr) / 236px minmax(0, 1fr) 300px; grid-template-areas: "lib lib lib" "sub sub sub" "holds thing across"; }
        [data-layout="two"] .sub { align-items: center; padding: 9px 24px; }
        [data-layout="two"] .title { display: flex; flex-wrap: wrap; align-items: baseline; gap: 4px 16px; }
        [data-layout="two"] h1 { margin: 0; font-size: 26px; order: -1; }
        [data-layout="two"] .title p { display: none; }
        [data-layout="two"] .holds { border-right: 1px solid var(--line); }
        [data-layout="cards"] body { grid-template: auto auto minmax(0, 1fr) / 244px minmax(0, 1fr) 300px; grid-template-areas: "lib lib lib" "holds sub across" "holds thing across"; column-gap: 12px; padding: 0 12px 12px; }
        [data-layout="cards"] .lib { padding: 11px 170px 11px 6px; }
        [data-layout="cards"] .me { padding: 0 6px; }
        [data-layout="cards"] :is(.holds, .across) { border: 0; border-radius: 16px; }
        [data-layout="cards"] .sub { border-radius: 16px 16px 0 0; }
        [data-layout="cards"] .thing { border-radius: 0 0 16px 16px; }

        /* a bar down the left holds the library, with me at its foot */
        [data-layout="side"] body { grid-template: auto minmax(0, 1fr) / 256px minmax(0, 1fr) 300px; grid-template-areas: "side sub sub" "side thing across"; }
        [data-layout="side"] .side { grid-area: side; display: flex; flex-direction: column; min-height: 0; background: var(--bar); }
        [data-layout="side"] .holds { flex: 1; order: 1; }
        [data-layout="side"] .me { order: 2; }
        [data-layout="side"] .lib { flex-direction: column; align-items: stretch; gap: 2px; padding: 18px 12px 12px; }
        [data-layout="side"] .logo { padding: 0 6px 14px; }
        [data-layout="side"] .subjects { flex-direction: column; }
        [data-layout="side"] .s small { margin-left: auto; }
        [data-layout="side"] .lib .find { margin: 10px 0 0; }
        [data-layout="side"] .holds { padding: 14px 12px; border-top: 1px solid var(--bar-line); background: var(--bar); color: var(--bar-fg); }
        [data-layout="side"] .holds h4, [data-layout="side"] .holds a small { color: var(--bar-dim); }
        [data-layout="side"] .holds a.on { background: var(--bar-on); }
        [data-layout="side"] .me { padding: 12px 18px 14px; border-top: 1px solid var(--bar-line); }
        [data-layout="side"][data-tone="light"] .side { border-right: 1px solid var(--line); }

        /* a narrow rail holds the subjects as marks and me as a face */
        [data-layout="rail"] body { grid-template: auto auto minmax(0, 1fr) auto / 68px minmax(0, 1fr) 300px; grid-template-areas: "lib sub sub" "lib holds holds" "lib thing across" "me thing across"; }
        [data-layout="rail"] .lib { flex-direction: column; gap: 12px; padding: 14px 0; }
        [data-layout="rail"] :is(.logo b, .lib .find, .s b, .s small, .me span) { display: none; }
        [data-layout="rail"] .subjects { flex-direction: column; align-items: center; gap: 10px; }
        [data-layout="rail"] .s { padding: 0; background: none; }
        [data-layout="rail"] :is(.s i, .logo i, .me i) { width: 40px; height: 40px; border-radius: 11px; font-size: 13px; }
        [data-layout="rail"] .logo i, [data-layout="rail"] .me i { font-size: 16px; }
        [data-layout="rail"] .me i { border-radius: 50%; }
        [data-layout="rail"]:is([data-at="subject"], [data-at="book"], [data-at="chat"]) .s.is-claude i { box-shadow: 0 0 0 2px var(--bar), 0 0 0 4px var(--c); }
        [data-layout="rail"] .me { justify-content: center; padding: 10px 0 14px; }
        [data-layout="rail"] .sub { padding: 16px 26px 14px; }
        [data-layout="rail"][data-tone="light"] :is(.lib, .me) { border-right: 1px solid #cbe6ee; }

        /* with no side bar, what the page holds is a row under its name */
        :is([data-layout="header"], [data-layout="rail"]) .holds { padding: 12px 28px; overflow: auto hidden; border-bottom: 1px solid var(--line); scrollbar-width: none; }
        [data-layout="header"] .holds { padding-top: 0; }
        :is([data-layout="header"], [data-layout="rail"]) .holds > div { display: flex; align-items: center; gap: 6px; }
        :is([data-layout="header"], [data-layout="rail"]) .holds h4 { flex: none; margin: 0 6px 0 0; }
        :is([data-layout="header"], [data-layout="rail"]) .holds h4.next { margin-left: 18px; }
        :is([data-layout="header"], [data-layout="rail"]) .holds h4 small { display: none; }
        :is([data-layout="header"], [data-layout="rail"]) .holds a { flex: none; padding: 5px 11px 5px 9px; border: 1px solid var(--line); border-radius: 99px; white-space: nowrap; }
        :is([data-layout="header"], [data-layout="rail"]) .holds a small { margin-left: 4px; }
        :is([data-layout="header"], [data-layout="rail"]) .holds a.on { border-color: transparent; }
    }

    /* ---- on a phone: one bar at the top, the page beneath it in one column ---- */
    @media (max-width: 760px) {
        body { position: relative; display: flex; flex-direction: column; }
        .sub { order: 1; }
        .holds { order: 2; }
        .thing { order: 3; }
        .across { order: 4; }
        .lib { position: sticky; top: 0; z-index: 4; height: 50px; margin-right: 54px; padding: 0 8px 0 14px; gap: 4px; overflow: auto hidden; scrollbar-width: none; }
        .logo { margin-right: 8px; }
        .logo b { font-size: 19px; }
        .s { white-space: nowrap; }
        .s small, .lib .find, .me span { display: none; }
        .me { position: fixed; z-index: 5; top: 0; right: 0; justify-content: center; width: 54px; height: 50px; }
        [data-tone="light"] :is(.lib, .me) { border-bottom: 1px solid var(--line); }
        .sub { flex-direction: column; flex-wrap: nowrap; align-items: stretch; padding: 16px 16px 12px; }
        h1 { font-size: 28px; white-space: normal; }
        .chain { overflow: auto hidden; scrollbar-width: none; }
        .tools { margin: 0; }
        .tools > div { justify-content: flex-start; }
        .holds { padding: 10px 16px 12px; overflow: auto hidden; border-bottom: 1px solid var(--line); scrollbar-width: none; }
        .holds > div { display: flex; align-items: center; gap: 6px; }
        .holds h4 { flex: none; margin: 0 6px 0 0; }
        .holds h4.next { margin-left: 18px; }
        .holds h4 small { display: none; }
        .holds a { flex: none; padding: 5px 11px 5px 9px; border: 1px solid var(--line); border-radius: 99px; background: var(--white); white-space: nowrap; }
        .holds a small { margin-left: 4px; }
        .thing { padding: 16px 16px 24px; }
        .go { flex-wrap: wrap; gap: 14px; padding: 14px; }
        .go > div { flex: 1 1 60%; min-width: 0; }
        .go .read { margin: 0; }
        .shelf { grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 16px 12px; }
        .cover { padding: 10px 8px 8px 13px; }
        .cover b { font-size: 14.5px; }
        .open, .person { flex-direction: column; gap: 16px; }
        .cover.big { width: 150px; }
        .cover.big b { font-size: 22px; }
        .counts { gap: 18px; }
        .chat .mine { max-width: 88%; }
        .across { padding: 16px; border-top: 1px solid var(--line); }

        /* a side bar or a rail turns to lie along the foot, the subjects as marks */
        :is([data-layout="side"], [data-layout="rail"]) body { padding-bottom: 60px; }
        :is([data-layout="side"], [data-layout="rail"]) .subjects { position: fixed; z-index: 4; left: 0; right: 0; bottom: 0; justify-content: space-around; padding: 8px 10px; border-top: 1px solid var(--bar-line); background: var(--bar); }
        :is([data-layout="side"], [data-layout="rail"]) .s { padding: 0; background: none; box-shadow: none; }
        :is([data-layout="side"], [data-layout="rail"]) .s b { display: none; }
        :is([data-layout="side"], [data-layout="rail"]) .s i { width: 42px; height: 42px; border-radius: 12px; font-size: 13px; }
        :is([data-layout="side"], [data-layout="rail"]):is([data-at="subject"], [data-at="book"], [data-at="chat"]) .s.is-claude i { box-shadow: 0 0 0 2px var(--bar), 0 0 0 4px var(--c); }

        [data-layout="two"] .sub { padding: 12px 16px; }
        [data-layout="two"] .title p { display: none; }
        [data-layout="cards"] body { padding-bottom: 10px; }
        [data-layout="cards"] :is(.sub, .holds, .thing, .across) { margin: 0 10px; }
        [data-layout="cards"] .sub { margin-top: 4px; border-radius: 14px 14px 0 0; }
        [data-layout="cards"] .thing { border-radius: 0 0 14px 14px; }
        [data-layout="cards"] .across { margin-top: 10px; border: 0; border-radius: 14px; }
    }
</style>
</head>
<body>

<div class="side">
<header class="lib">
    <a class="logo" data-go="library"><i>D</i><b>Dougs Library</b></a>
    <nav class="subjects">
        <a class="s is-claude" data-go="subject" style="--c: var(--sea)"><i>Cl</i><b>Conversations with Claude</b><small>212</small></a>
        <a class="s" style="--c: #1f8a78"><i>Ch</i><b>Conversations with ChatGPT</b><small>147</small></a>
        <a class="s" style="--c: #c24a78"><i>De</i><b>Dougs Design</b><small>5</small></a>
        <a class="s" style="--c: #7a4a8c"><i>Rm</i><b>Dougs Reference Manual</b><small>3</small></a>
    </nav>
    <span class="find"><svg viewBox="0 0 16 16"><circle cx="7" cy="7" r="4.5"/><path d="M10.5 10.5 14 14"/></svg><em style="font-style: normal">Find in the library</em></span>
</header>

<a class="me" data-go="author"><i>D</i><span><b>The Librarian</b><small>my own account</small></span></a>

<aside class="holds">
    <div class="at-library">
        <h4>My favorites<small>3</small></h4>
        <a data-go="book" style="--c: #e07a35"><i></i><b>Lorem Ipsum Dolor</b><small class="star">★</small></a>
        <a style="--c: #4450b8"><i></i><b>Magna Aliqua</b><small class="star">★</small></a>
        <a style="--c: #c24a78"><i></i><b>The Library's Home</b><small class="star">★</small></a>
    </div>
    <div class="at-subject">
        <h4>Holds<small>3 projects</small></h4>
        <a class="on" style="--c: #e07a35"><i></i><b>A First Project</b><small>38</small></a>
        <a style="--c: #1f8a78"><i></i><b>A Second Project</b><small>91</small></a>
        <a style="--c: #4450b8"><i></i><b>A Third Project</b><small>83</small></a>
        <h4 class="next">My favorites here<small>2</small></h4>
        <a data-go="book" style="--c: #e07a35"><i></i><b>Lorem Ipsum Dolor</b><small class="star">★</small></a>
        <a style="--c: #4450b8"><i></i><b>Magna Aliqua</b><small class="star">★</small></a>
    </div>
    <div class="at-book at-chat">
        <h4>Holds<small>8 chapters</small></h4>
        <a class="first" data-go="chat" style="--c: #e07a35"><i></i><b>A First Chapter</b><small>1</small></a>
        <a style="--c: #e07a35"><i></i><b>A Second Chapter</b><small>2</small></a>
        <a style="--c: #e07a35"><i></i><b>A Third Chapter</b><small>3</small></a>
        <a style="--c: #e07a35"><i></i><b>A Fourth Chapter</b><small>4</small></a>
        <a style="--c: #e07a35"><i></i><b>A Fifth Chapter</b><small>5</small></a>
    </div>
    <div class="at-author">
        <h4>My books<small>3</small></h4>
        <a class="on" style="--c: var(--me)"><i></i><b>Dougs Story</b><small>3</small></a>
        <a style="--c: #c24a78"><i></i><b>Dougs Design</b><small>5</small></a>
        <a style="--c: #7a4a8c"><i></i><b>Dougs Reference Manual</b><small>3</small></a>
    </div>
</aside>
</div>

<section class="sub">
    <div class="title">
        <div class="chain">
            <em>Filed under</em>
            <span class="at-library">itself</span>
            <span class="at-subject"><a data-go="library">Dougs Library</a></span>
            <span class="at-book"><a data-go="subject">Conversations with Claude</a><i>›</i><a data-go="subject">A First Project</a></span>
            <span class="at-chat"><a data-go="subject">Conversations with Claude</a><i>›</i><a data-go="subject">A First Project</a><i>›</i><a data-go="book">Lorem Ipsum Dolor</a></span>
            <span class="at-author"><a data-go="library">Dougs Library</a></span>
        </div>
        <h1 class="at-library">Dougs Library</h1>
        <h1 class="at-subject">Conversations with Claude</h1>
        <h1 class="at-book">Lorem Ipsum Dolor</h1>
        <h1 class="at-chat">A First Chapter</h1>
        <h1 class="at-author">Dougs Story</h1>
        <p class="at-library">by <a class="to-me" data-go="author">The Librarian</a> · three books and two subjects · 359 conversations kept</p>
        <p class="at-subject">a subject · 212 books in three projects · by <a class="to-me" data-go="author">The Librarian</a></p>
        <p class="at-book">by <a class="to-me" data-go="author">The Librarian</a> and Claude · 8 chapters · kept 9 Sep 2026</p>
        <p class="at-chat">chapter 1 of 8 · <a class="to-me" data-go="author">The Librarian</a> and Claude · kept 9 Sep 2026</p>
        <p class="at-author">The Librarian · my own account</p>
    </div>
    <div class="tools">
        <div class="at-subject">
            <span class="seg"><span class="on" data-view-is="shelf">Shelf</span><span data-view-is="list">List</span><span>Table</span></span>
            <span class="find"><svg viewBox="0 0 16 16"><circle cx="7" cy="7" r="4.5"/><path d="M10.5 10.5 14 14"/></svg>Find in this subject</span>
        </div>
        <div class="at-book">
            <span class="fav"><em class="star">★</em>Among my favorites</span>
            <span class="find"><svg viewBox="0 0 16 16"><circle cx="7" cy="7" r="4.5"/><path d="M10.5 10.5 14 14"/></svg>Find in this book</span>
        </div>
        <div class="at-chat">
            <span class="find"><svg viewBox="0 0 16 16"><path d="M8 3v10M3 8h10"/></svg>Note on a passage</span>
            <span class="find"><svg viewBox="0 0 16 16"><circle cx="7" cy="7" r="4.5"/><path d="M10.5 10.5 14 14"/></svg>Find in this book</span>
        </div>
    </div>
</section>

<main class="thing">
    <div class="at-library">
        <h4>Subjects</h4>
        <div class="tiles">
            <a class="tile" data-go="subject" style="--t: #dff3fa; --c: var(--sea)"><i></i><b>Conversations with Claude</b><small>212 books in three projects</small></a>
            <a class="tile" style="--t: #dcf5ee; --c: #1f8a78"><i></i><b>Conversations with ChatGPT</b><small>147 books</small></a>
        </div>
        <h4>My books</h4>
        <div class="mines">
            <a class="cover mine" data-go="author"><b>Dougs Story</b><small>my own account</small></a>
            <a class="cover mine"><b>Dougs Design</b><small>the design</small></a>
            <a class="cover mine"><b>Dougs Reference Manual</b><small>the parts</small></a>
        </div>
    </div>

    <div class="at-subject">
        <div class="go">
            <span class="cover"><b>Lorem Ipsum Dolor</b><small>with Claude</small></span>
            <div>
                <em>Continue</em>
                <h2>Lorem Ipsum Dolor</h2>
                <p>A First Project · kept 9 September 2026. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                <u><i></i></u>
                <small>Chapter 1 of 8 · 2 notes of mine · cited twice</small>
            </div>
            <a class="read" data-go="chat">Read</a>
        </div>
        <h4>Lately kept<small>212 books · newest first</small></h4>
        <div class="shelf">
            <a class="bk" data-go="book"><span class="cover"><b>Lorem Ipsum Dolor</b><small>with Claude</small></span><b class="name">Lorem Ipsum Dolor</b><p>9 Sep · 8 chapters <em class="star">★</em></p></a>
            <a class="bk"><span class="cover"><b>Quis Nostrud</b><small>with Claude</small></span><b class="name">Quis Nostrud</b><p>1 Oct · 6 chapters</p></a>
            <a class="bk"><span class="cover"><b>Magna Aliqua</b><small>with Claude</small></span><b class="name">Magna Aliqua</b><p>20 Sep · 11 chapters <em class="star">★</em></p></a>
            <a class="bk"><span class="cover"><b>Tempor Incididunt</b><small>with Claude</small></span><b class="name">Tempor Incididunt</b><p>12 Sep · 7 chapters</p></a>
            <a class="bk"><span class="cover"><b>Ut Enim ad Minim</b><small>with Claude</small></span><b class="name">Ut Enim ad Minim</b><p>27 Sep · 3 chapters</p></a>
            <a class="bk"><span class="cover"><b>Sed Do Eiusmod</b><small>with Claude</small></span><b class="name">Sed Do Eiusmod</b><p>5 Sep · 2 chapters</p></a>
            <a class="bk"><span class="cover"><b>Adipiscing Elit</b><small>with Claude</small></span><b class="name">Adipiscing Elit</b><p>2 Sep · 9 chapters</p></a>
            <a class="bk"><span class="cover"><b>Sit Amet Consectetur</b><small>with Claude</small></span><b class="name">Sit Amet Consectetur</b><p>21 Jul · 14 chapters</p></a>
            <a class="bk"><span class="cover"><b>Duis Aute Irure</b><small>with Claude</small></span><b class="name">Duis Aute Irure</b><p>14 Jul · 5 chapters</p></a>
            <a class="bk"><span class="cover"><b>Excepteur Sint</b><small>with Claude</small></span><b class="name">Excepteur Sint</b><p>2 Jul · 4 chapters</p></a>
        </div>
    </div>

    <div class="open at-book">
        <span class="cover big"><b>Lorem Ipsum Dolor</b><small>with Claude</small></span>
        <div class="words">
            <p class="says">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
            <a class="read" data-go="chat">Read from A First Chapter<svg viewBox="0 0 16 16"><path d="M3 8h10M9 4l4 4-4 4"/></svg></a>
        </div>
    </div>

    <div class="chat at-chat">
        <div class="mine"><span class="who">The Librarian</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit? Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
        <div class="theirs">
            <span class="who">Claude</span>
            <p>Ut enim ad minim veniam, quis nostrud exercitation. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <mark>Excepteur sint occaecat cupidatat non proident</mark><sup>1</sup>, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
<pre>const lorem = ipsum.dolor('sit amet');
return lorem.consectetur();</pre>
            <a class="made"><i>◇</i><span><b>Lorem Ipsum, a first draft</b><small>made in this turn · opens beside the page</small></span></a>
        </div>
        <div class="mine"><span class="who">The Librarian</span>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit?</div>
        <div class="theirs">
            <span class="who">Claude</span>
            <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.</p>
        </div>
        <div class="turns"><span></span><a>A Second Chapter →</a></div>
    </div>

    <div class="person at-author">
        <span class="face">D</span>
        <div class="words">
            <p class="says">My own account, and the one book here that is by its own subject. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            <div class="counts"><span><b>3</b>books written</span><span><b>359</b>conversations kept</span><span><b>41</b>notes</span></div>
            <div class="mines">
                <a class="cover mine"><b>Dougs Story</b><small>my own account</small></a>
                <a class="cover mine"><b>Dougs Design</b><small>the design</small></a>
                <a class="cover mine"><b>Dougs Reference Manual</b><small>the parts</small></a>
            </div>
        </div>
    </div>
</main>

<aside class="across">
    <a class="return to-book" data-go="book"><svg viewBox="0 0 16 16"><path d="M13 8H3M7 4 3 8l4 4"/></svg>Back to Lorem Ipsum Dolor</a>
    <a class="return to-subject" data-go="subject"><svg viewBox="0 0 16 16"><path d="M13 8H3M7 4 3 8l4 4"/></svg>Back to Conversations with Claude</a>

    <div class="at-library">
        <h4>Lately kept</h4>
        <a class="ref" style="--c: #c2413f"><span class="to"><i></i>Quis Nostrud</span><p>1 Oct · Conversations with Claude</p></a>
        <a class="ref" style="--c: #7a4a8c"><span class="to"><i></i>Ut Enim ad Minim</span><p>27 Sep · Conversations with Claude</p></a>
        <h4 class="next">My notes<small>41</small></h4>
        <div class="note"><b>3 Oct 2026 · in Lorem Ipsum Dolor</b>Lorem ipsum, a note of mine beside the passage it is about.</div>
    </div>

    <div class="at-subject">
        <h4>Cited from outside<small>2</small></h4>
        <a class="ref" data-go="author" data-from="subject" style="--c: var(--me)"><span class="to"><svg viewBox="0 0 16 16"><path d="M13 8H3M7 4 3 8l4 4"/></svg><i></i>Dougs Story</span><p>chapter 1 cites Lorem Ipsum Dolor</p></a>
        <a class="ref" style="--c: #1f8a78"><span class="to"><svg viewBox="0 0 16 16"><path d="M13 8H3M7 4 3 8l4 4"/></svg><i></i>Conversations with ChatGPT</span><p>one book cites Adipiscing Elit</p></a>
        <h4 class="next">My notes here<small>12</small></h4>
        <div class="note"><b>3 Oct 2026 · in Lorem Ipsum Dolor</b>Lorem ipsum, a note of mine beside the passage it is about.</div>
    </div>

    <div class="at-book at-chat">
        <h4>Cites<small>1</small></h4>
        <a class="ref" style="--c: #3d7a4e"><span class="to"><svg viewBox="0 0 16 16"><path d="M3 8h10M9 4l4 4-4 4"/></svg><i></i>Adipiscing Elit</span><p>chapter 2 · A First Project</p></a>
        <h4 class="next">Cited by<small>2</small></h4>
        <a class="ref" data-go="author" data-from="book" style="--c: var(--me)"><span class="to"><svg viewBox="0 0 16 16"><path d="M13 8H3M7 4 3 8l4 4"/></svg><i></i>Dougs Story</span><p>chapter 1 · my own account</p><q>Excepteur sint occaecat cupidatat non proident</q></a>
        <a class="ref" style="--c: #c24a78"><span class="to"><svg viewBox="0 0 16 16"><path d="M13 8H3M7 4 3 8l4 4"/></svg><i></i>Sit Amet Consectetur</span><p>chapter 3 · A First Project</p></a>
        <h4 class="next">My notes<small>1</small></h4>
        <div class="note"><b>1 · 3 Oct 2026</b>Lorem ipsum, a note of mine beside the passage it is about.</div>
    </div>

    <div class="at-author">
        <h4>Cites<small>1</small></h4>
        <a class="ref" data-go="book" style="--c: #e07a35"><span class="to"><svg viewBox="0 0 16 16"><path d="M3 8h10M9 4l4 4-4 4"/></svg><i></i>Lorem Ipsum Dolor</span><p>chapter 1 · a conversation with Claude</p><q>Excepteur sint occaecat cupidatat non proident</q></a>
        <h4 class="next">Cited by<small>0</small></h4>
        <div class="note">Nothing cites this chapter yet.</div>
    </div>
</aside>

<script>
    const page = document.documentElement;
    for (const door of document.querySelectorAll('[data-go]'))
        door.addEventListener('click', () => {
            if (door.dataset.from) page.dataset.from = door.dataset.from;
            else delete page.dataset.from;
            page.dataset.at = door.dataset.go;
            window.scrollTo(0, 0);
            for (const column of document.querySelectorAll('.thing, .holds, .across')) column.scrollTop = 0;
        });
    for (const view of document.querySelectorAll('[data-view-is]'))
        view.addEventListener('click', () => {
            page.dataset.view = view.dataset.viewIs;
            for (const other of view.parentElement.children) other.classList.toggle('on', other === view);
        });
<\/script>
</body>
</html>
`})]})]}),a.jsxs(i,{children:[a.jsx(d,{children:"14"}),a.jsx(o,{children:"[A White Top Bar](/dougs-design/#a-white-top-bar)"}),a.jsx(t,{children:"Concept 14, an idea, after the homes I liked, the lighter way."}),a.jsx(t,{children:"The same top bar, lighter: white, with the mark in black and the open subject underlined in its own color."}),a.jsxs(t,{children:[a.jsx(p,{}),a.jsx(r,{children:"/.design/3-every-concept~014-desk.png"}),a.jsx(r,{children:"/.design/3-every-concept~014-phone.png"})]}),a.jsxs(t,{children:[a.jsx(c,{}),a.jsx(n,{children:`<!doctype html>
<html lang="en" data-layout="header" data-tone="light" data-at="subject" data-view="shelf">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>A White Top Bar</title>
<meta name="number" content="14">
<meta name="state" content="idea">
<meta name="after" content="the homes I liked, the lighter way">
<meta name="idea" content="The same top bar, lighter: white, with the mark in black and the open subject underlined in its own color.">
<meta name="said" content="">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
<style>
    /* ---- what does not change between the ideas ----
       The frame is soft black, the blue between it and white, and white. The soft black #0c1b1f and the opal #c8f4fb are the
       coming-soon page's own; the blues are the hue between them (208 to 223 in OKLCH) walked from dark to light.
       The CONTENT keeps its own colors: every book a cover of its own, the light accents the opal's wave. */
    :root { --night: #0c1b1f; --deep: #14323c; --blue: #166178; --sea: #4e9eb9; --sky: #8fc8dc; --opal: #c8f4fb; --pale: #e3f5fa; --mist: #f1f7f9; --white: #ffffff;
        --ink: #10252c; --soft: #516770; --line: #dbe7ec; --me: #e8590c;
        --wash: linear-gradient(105deg, #e2f6fb 0%, #ecf0fd 52%, #fae9f4 100%);
        --serif: 'Cormorant Garamond', Georgia, serif; --sans: 'Inter', system-ui, sans-serif; }
    [data-tone="dark"] { --bar: var(--night); --bar-fg: #ffffff; --bar-dim: #a9bcc1; --bar-on: rgba(255, 255, 255, .11); --bar-line: #1d3339; --mark: var(--opal); --mark-fg: var(--night); }
    [data-tone="light"] { --bar: var(--white); --bar-fg: var(--ink); --bar-dim: var(--soft); --bar-on: var(--pale); --bar-line: var(--line); --mark: var(--night); --mark-fg: #ffffff; }
    [data-at="library"] [class*="at-"]:not(.at-library), [data-at="subject"] [class*="at-"]:not(.at-subject), [data-at="book"] [class*="at-"]:not(.at-book), [data-at="chat"] [class*="at-"]:not(.at-chat), [data-at="author"] [class*="at-"]:not(.at-author) { display: none !important; }

    * { box-sizing: border-box; margin: 0; }
    body { background: var(--white); color: var(--ink); font: 400 14px/1.5 var(--sans); }
    a { color: inherit; text-decoration: none; }
    svg { width: 15px; height: 15px; stroke: currentColor; fill: none; stroke-width: 1.7; stroke-linecap: round; stroke-linejoin: round; flex: none; }
    [data-go], [data-view-is] { cursor: pointer; }
    h4 { display: flex; align-items: center; gap: 8px; margin-bottom: 10px; font: 600 10.5px/1 var(--sans); letter-spacing: .12em; text-transform: uppercase; color: var(--soft); }
    h4 small { margin-left: auto; font: 400 11.5px/1 var(--sans); letter-spacing: 0; text-transform: none; }
    h4.next { margin-top: 22px; }
    .star { color: var(--me); font-style: normal; }

    /* the library's own things: its mark, its subjects, a way to find, and me. They are held together only where an idea has a side bar. */
    .side { display: contents; }
    [data-at="chat"] .holds a.first { background: var(--bar-on, var(--pale)); }
    .lib { grid-area: lib; display: flex; align-items: center; gap: 6px; min-width: 0; background: var(--bar); color: var(--bar-fg); }
    .logo { display: flex; align-items: center; gap: 10px; flex: none; }
    .logo i { display: grid; place-items: center; width: 30px; height: 30px; border-radius: 8px; background: var(--mark); color: var(--mark-fg); font: 600 15px/1 var(--sans); font-style: normal; }
    .logo b { font: 600 21px/1 var(--serif); white-space: nowrap; }
    .subjects { display: flex; gap: 2px; min-width: 0; }
    .s { display: flex; align-items: center; gap: 8px; padding: 7px 10px; border-radius: 8px; color: var(--bar-dim); font-size: 13.5px; }
    .s i { display: grid; place-items: center; flex: none; width: 9px; height: 9px; border-radius: 50%; background: var(--c); color: #fff; font: 600 0/1 var(--sans); font-style: normal; }
    .s b { font-weight: 500; }
    .s small { font-size: 12px; opacity: .7; }
    :is([data-at="subject"], [data-at="book"], [data-at="chat"]) .s.is-claude { background: var(--bar-on); color: var(--bar-fg); }
    .find { display: flex; align-items: center; gap: 8px; padding: 6px 11px; border-radius: 9px; white-space: nowrap; }
    .lib .find { margin-left: auto; background: var(--bar-on); color: var(--bar-dim); }
    .me { grid-area: me; display: flex; align-items: center; gap: 9px; background: var(--bar); color: var(--bar-fg); }
    .me i { display: grid; place-items: center; flex: none; width: 32px; height: 32px; border-radius: 50%; background: var(--me); color: #fff; font: 600 14px/1 var(--sans); font-style: normal; }
    .me b { display: block; font-weight: 500; line-height: 1.2; white-space: nowrap; }
    .me small { display: block; font-size: 11.5px; opacity: .7; white-space: nowrap; }

    /* the open page's own things: what it is filed under, its name, who it is by, its tools */
    .sub { --sub-fg: var(--ink); --sub-dim: var(--soft); --ctl: var(--mist); --ctl-line: var(--line); --ctl-fg: var(--soft); --on: var(--night); --on-fg: #fff; --lnk: var(--blue); --melnk: var(--me);
        grid-area: sub; display: flex; flex-wrap: wrap; align-items: flex-end; gap: 10px 20px; min-width: 0; padding: 20px 28px 14px; color: var(--sub-fg); }
    .chain { display: flex; align-items: center; gap: 7px; font-size: 12.5px; color: var(--sub-dim); white-space: nowrap; }
    .chain em { font: 600 9.5px/1 var(--sans); font-style: normal; letter-spacing: .12em; text-transform: uppercase; }
    .chain span { display: flex; align-items: center; gap: 7px; }
    .chain i { font-style: normal; opacity: .55; }
    .chain a { font-weight: 500; color: var(--lnk); }
    .title { min-width: 0; }
    h1 { margin-top: 4px; font: 600 36px/1.04 var(--serif); white-space: nowrap; }
    .title p { margin-top: 4px; font-size: 13px; color: var(--sub-dim); }
    .title p a { color: var(--lnk); font-weight: 500; }
    .title p a.to-me { color: var(--melnk); text-decoration: underline; text-decoration-color: var(--me); text-decoration-thickness: 2px; text-underline-offset: 3px; }
    .tools { margin-left: auto; }
    .tools > div { display: flex; flex-wrap: wrap; justify-content: flex-end; align-items: center; gap: 8px; }
    .seg { display: flex; overflow: hidden; border: 1px solid var(--ctl-line); border-radius: 9px; background: var(--ctl); }
    .seg span { padding: 6px 12px; color: var(--ctl-fg); }
    .seg span.on { background: var(--on); color: var(--on-fg); font-weight: 500; }
    .sub .find { border: 1px solid var(--ctl-line); background: var(--ctl); color: var(--ctl-fg); }
    .fav { display: flex; align-items: center; gap: 6px; padding: 6px 11px; border-radius: 9px; background: color-mix(in srgb, var(--me) 12%, white); color: #a8400a; font-weight: 500; white-space: nowrap; }

    /* down: what the open page holds */
    .holds { grid-area: holds; min-width: 0; }
    .holds a { display: flex; align-items: center; gap: 9px; padding: 6px 9px; border-radius: 8px; }
    .holds a i { flex: none; width: 9px; height: 9px; border-radius: 50%; background: var(--c, var(--sea)); }
    .holds a b { font-weight: 500; }
    .holds a small { margin-left: auto; font-size: 12px; color: var(--soft); }
    .holds a.on { background: var(--pale); }

    /* the page itself */
    .thing { grid-area: thing; min-width: 0; }
    .go { display: flex; align-items: center; gap: 20px; margin-bottom: 22px; padding: 16px 20px; border-radius: 16px; background: var(--wash); }
    .go .cover { flex: none; width: 92px; padding: 10px 8px 8px 13px; }
    .go .cover b { font-size: 13.5px; }
    .go .cover small { font-size: 7.5px; padding-top: 6px; }
    .go em { font: 600 10.5px/1 var(--sans); font-style: normal; letter-spacing: .1em; text-transform: uppercase; color: var(--me); }
    .go h2 { margin: 4px 0 2px; font: 600 24px/1.1 var(--serif); }
    .go p { max-width: 52ch; font-size: 13px; color: var(--soft); }
    .go u { display: block; width: 260px; max-width: 100%; height: 4px; margin: 10px 0 6px; border-radius: 9px; background: rgba(12, 27, 31, .1); text-decoration: none; }
    .go u i { display: block; width: 14%; height: 100%; border-radius: 9px; background: var(--me); }
    .go small { font-size: 12px; color: var(--soft); }
    .go .read { margin-left: auto; }
    .read { display: inline-flex; align-items: center; gap: 8px; padding: 9px 18px; border-radius: 99px; background: var(--night); color: #fff; font-weight: 500; white-space: nowrap; }

    /* a cover is the landmark of a book, and every book has a color of its own; my own books are the soft black */
    .cover { position: relative; display: flex; flex-direction: column; aspect-ratio: 3 / 4; padding: 13px 11px 10px 17px; border-radius: 3px 7px 7px 3px; color: #fff; background: linear-gradient(160deg, color-mix(in srgb, var(--c) 90%, white), color-mix(in srgb, var(--c) 86%, black)); box-shadow: 0 12px 22px -14px rgba(12, 27, 31, .55); }
    .cover::before { content: ''; position: absolute; left: 7px; top: 0; bottom: 0; width: 1px; background: rgba(255, 255, 255, .3); }
    .cover b { font: 600 17px/1.08 var(--serif); }
    .cover small { margin-top: auto; padding-top: 8px; border-top: 1px solid rgba(255, 255, 255, .32); font: 600 9px/1.2 var(--sans); letter-spacing: .1em; text-transform: uppercase; opacity: .92; }
    .cover.mine { --c: var(--night); color: var(--opal); background: linear-gradient(160deg, #16303a, var(--night)); }
    .bk:nth-child(8n+1), .open, .go { --c: #e07a35; }
    .bk:nth-child(8n+2) { --c: #c2413f; }
    .bk:nth-child(8n+3) { --c: #4450b8; }
    .bk:nth-child(8n+4) { --c: #1f8a78; }
    .bk:nth-child(8n+5) { --c: #7a4a8c; }
    .bk:nth-child(8n+6) { --c: #2f7fb0; }
    .bk:nth-child(8n+7) { --c: #3d7a4e; }
    .bk:nth-child(8n) { --c: #c24a78; }
    .shelf { display: grid; grid-template-columns: repeat(auto-fill, minmax(124px, 1fr)); gap: 22px 18px; }
    .bk { display: block; }
    .bk .name { display: none; }
    .bk p { display: flex; gap: 6px; margin-top: 8px; font-size: 12px; color: var(--soft); }
    [data-view="list"] .shelf { grid-template-columns: minmax(0, 1fr); gap: 0; }
    [data-view="list"] .bk { display: grid; grid-template-columns: 30px minmax(0, 1fr) auto; gap: 14px; align-items: center; padding: 9px 0; border-bottom: 1px solid var(--line); }
    [data-view="list"] .bk .cover { padding: 0; border-radius: 2px 4px 4px 2px; box-shadow: none; }
    [data-view="list"] .bk .cover::before { left: 4px; }
    [data-view="list"] .bk .cover b, [data-view="list"] .bk .cover small { display: none; }
    [data-view="list"] .bk .name { display: block; font: 600 19px/1.2 var(--serif); }
    [data-view="list"] .bk p { margin: 0; }
    .mines { display: grid; grid-template-columns: repeat(auto-fill, minmax(124px, 148px)); gap: 18px; }

    .tiles { display: grid; grid-template-columns: repeat(auto-fill, minmax(210px, 1fr)); gap: 14px; margin-bottom: 26px; }
    .tile { display: block; padding: 14px 16px 16px; border-radius: 14px; background: var(--t); }
    .tile i { display: block; width: 26px; height: 26px; margin-bottom: 24px; border-radius: 8px; background: var(--c); }
    .tile b { display: block; font: 600 21px/1.1 var(--serif); }
    .tile small { font-size: 12.5px; color: var(--soft); }

    .open, .person { display: flex; gap: 26px; align-items: flex-start; }
    .cover.big { flex: none; width: 180px; padding: 20px 15px 13px 24px; }
    .cover.big b { font-size: 26px; }
    .cover.big::before { left: 11px; }
    .words { min-width: 0; }
    .says { max-width: 56ch; font: 500 20px/1.5 var(--serif); }
    .words .read { margin-top: 18px; }
    .face { display: grid; place-items: center; flex: none; width: 96px; height: 96px; border-radius: 50%; background: var(--me); color: #fff; font: 600 46px/1 var(--serif); box-shadow: 0 0 0 5px var(--white), 0 0 0 6px color-mix(in srgb, var(--me) 45%, white); }
    .counts { display: flex; gap: 26px; margin: 16px 0 22px; color: var(--soft); font-size: 12.5px; }
    .counts b { display: block; font: 600 26px/1.1 var(--serif); color: var(--ink); }

    /* a conversation, in the form of the application it comes from; my turns in my color */
    .chat { display: grid; gap: 20px; max-width: 720px; margin: 0 auto; }
    .chat .who { display: block; margin-bottom: 4px; font: 600 10.5px/1 var(--sans); letter-spacing: .1em; text-transform: uppercase; color: var(--soft); }
    .chat .mine { justify-self: end; max-width: 78%; padding: 11px 16px; border-radius: 18px 18px 4px 18px; background: color-mix(in srgb, var(--me) 9%, white); font-size: 15px; }
    .chat .mine .who { color: var(--me); }
    .chat .theirs p { font: 500 19.5px/1.55 var(--serif); }
    .chat .theirs p + p { margin-top: 10px; }
    .chat mark { padding: 1px 3px; border-radius: 3px; background: var(--pale); color: inherit; }
    .chat sup { margin-left: 2px; font: 600 10.5px/1 var(--sans); color: var(--me); }
    .chat pre { margin: 12px 0; padding: 12px 14px; border-radius: 10px; background: var(--night); color: #d7e6ea; font: 400 12.5px/1.6 ui-monospace, 'Cascadia Code', Consolas, monospace; overflow: auto; }
    .chat .made { display: flex; align-items: center; gap: 10px; width: fit-content; margin-top: 12px; padding: 9px 13px; border: 1px solid var(--line); border-radius: 12px; font-size: 13px; }
    .chat .made i { display: grid; place-items: center; width: 30px; height: 30px; border-radius: 8px; background: var(--pale); color: var(--blue); font-style: normal; }
    .chat .made small { display: block; color: var(--soft); font-size: 12px; }
    .chat .turns { display: flex; justify-content: space-between; padding-top: 16px; border-top: 1px solid var(--line); color: var(--blue); font-weight: 500; }

    /* across: what it cites, what cites it, and what I wrote beside it */
    .across { grid-area: across; min-width: 0; }
    .ref { display: block; margin-bottom: 8px; padding: 10px 12px; border: 1px solid var(--line); border-radius: 12px; background: var(--white); }
    .ref .to { display: flex; align-items: center; gap: 7px; font-weight: 600; }
    .ref .to svg { color: var(--soft); }
    .ref .to i { flex: none; width: 9px; height: 9px; border-radius: 50%; background: var(--c, var(--sea)); }
    .ref p { margin-top: 2px; font-size: 12.5px; color: var(--soft); }
    .ref q { display: block; margin-top: 7px; padding: 6px 9px; border-radius: 7px; background: var(--pale); font: italic 500 15.5px/1.35 var(--serif); quotes: '“' '”'; }
    .note { padding: 10px 12px; border: 1px dashed var(--line); border-radius: 12px; font-size: 13px; color: var(--soft); }
    .note b { display: block; margin-bottom: 2px; color: var(--ink); font-weight: 500; }
    .return { display: none; align-items: center; gap: 8px; margin-bottom: 14px; padding: 9px 12px; border-radius: 10px; background: var(--night); color: #fff; font-weight: 500; }
    .return svg { color: var(--sky); }
    [data-at="author"][data-from="book"] .return.to-book, [data-at="author"][data-from="subject"] .return.to-subject { display: flex; }

    /* ---- what each idea colors, at every width ---- */
    [data-layout="both"] .holds { background: var(--pale); }
    [data-layout="both"] .holds a.on { background: var(--white); }
    [data-layout="rail"][data-tone="dark"] .sub { --sub-fg: #fff; --sub-dim: rgba(255, 255, 255, .8); --ctl: rgba(12, 27, 31, .26); --ctl-line: transparent; --ctl-fg: #fff; --on: #fff; --on-fg: var(--night); --lnk: #fff; --melnk: #fff; background: var(--blue); }
    [data-layout="rail"][data-tone="dark"] .fav { background: #fff; }
    [data-layout="rail"][data-tone="light"] { --bar: var(--pale); --bar-on: #fff; --bar-line: #cbe6ee; }
    [data-layout="two"][data-tone="dark"] .sub { --sub-dim: #27505c; --ctl: rgba(255, 255, 255, .62); --ctl-line: transparent; --ctl-fg: var(--ink); --lnk: var(--deep); background: var(--sky); }
    [data-layout="two"][data-tone="light"] .sub { --ctl: #fff; background: var(--pale); }
    [data-layout="side"][data-tone="light"] { --bar: var(--mist); --bar-on: #fff; }
    [data-layout="cards"][data-tone="light"] { --canvas: #e9f2f5; --bar-on: #fff; }
    [data-layout="cards"][data-tone="dark"] { --canvas: var(--night); }
    [data-layout="cards"] body, [data-layout="cards"] .lib, [data-layout="cards"] .me { background: var(--canvas); }
    [data-layout="cards"] :is(.sub, .holds, .thing, .across) { background: var(--white); }
    :is([data-layout="header"], [data-layout="both"], [data-layout="two"], [data-layout="cards"]):is([data-at="subject"], [data-at="book"], [data-at="chat"]) .s.is-claude { box-shadow: inset 0 -2px 0 var(--c); }

    /* ---- at a desk: where each idea puts the bars ---- */
    @media (min-width: 761px) {
        html, body { height: 100%; }
        body { display: grid; overflow: hidden; }
        .thing { padding: 20px 28px 40px; overflow: auto; }
        .holds { padding: 18px 12px; overflow: auto; }
        .across { padding: 18px 16px; overflow: auto; border-left: 1px solid var(--line); }

        /* a bar across the top holds the library, with me at its right end */
        :is([data-layout="header"], [data-layout="both"], [data-layout="two"], [data-layout="cards"]) .lib { padding: 9px 170px 9px 18px; }
        :is([data-layout="header"], [data-layout="both"], [data-layout="two"], [data-layout="cards"]) .logo { margin-right: 12px; }
        :is([data-layout="header"], [data-layout="both"], [data-layout="two"], [data-layout="cards"]) :is(.s small, .me small, .lib .find em) { display: none; }
        :is([data-layout="header"], [data-layout="both"], [data-layout="two"], [data-layout="cards"]) .me { grid-area: lib; justify-self: end; z-index: 1; padding: 0 18px 0 8px; background: none; }
        [data-tone="light"]:is([data-layout="header"], [data-layout="both"], [data-layout="two"]) .lib { border-bottom: 1px solid var(--line); }

        [data-layout="header"] body { grid-template: auto auto auto minmax(0, 1fr) / minmax(0, 1fr) 300px; grid-template-areas: "lib lib" "sub sub" "holds holds" "thing across"; }
        [data-layout="both"] body { grid-template: auto auto minmax(0, 1fr) / 240px minmax(0, 1fr) 300px; grid-template-areas: "lib lib lib" "holds sub sub" "holds thing across"; }
        [data-layout="both"] .holds { padding: 20px 12px; border-right: 1px solid #cbe6ee; }
        [data-layout="two"] body { grid-template: auto auto minmax(0, 1fr) / 236px minmax(0, 1fr) 300px; grid-template-areas: "lib lib lib" "sub sub sub" "holds thing across"; }
        [data-layout="two"] .sub { align-items: center; padding: 9px 24px; }
        [data-layout="two"] .title { display: flex; flex-wrap: wrap; align-items: baseline; gap: 4px 16px; }
        [data-layout="two"] h1 { margin: 0; font-size: 26px; order: -1; }
        [data-layout="two"] .title p { display: none; }
        [data-layout="two"] .holds { border-right: 1px solid var(--line); }
        [data-layout="cards"] body { grid-template: auto auto minmax(0, 1fr) / 244px minmax(0, 1fr) 300px; grid-template-areas: "lib lib lib" "holds sub across" "holds thing across"; column-gap: 12px; padding: 0 12px 12px; }
        [data-layout="cards"] .lib { padding: 11px 170px 11px 6px; }
        [data-layout="cards"] .me { padding: 0 6px; }
        [data-layout="cards"] :is(.holds, .across) { border: 0; border-radius: 16px; }
        [data-layout="cards"] .sub { border-radius: 16px 16px 0 0; }
        [data-layout="cards"] .thing { border-radius: 0 0 16px 16px; }

        /* a bar down the left holds the library, with me at its foot */
        [data-layout="side"] body { grid-template: auto minmax(0, 1fr) / 256px minmax(0, 1fr) 300px; grid-template-areas: "side sub sub" "side thing across"; }
        [data-layout="side"] .side { grid-area: side; display: flex; flex-direction: column; min-height: 0; background: var(--bar); }
        [data-layout="side"] .holds { flex: 1; order: 1; }
        [data-layout="side"] .me { order: 2; }
        [data-layout="side"] .lib { flex-direction: column; align-items: stretch; gap: 2px; padding: 18px 12px 12px; }
        [data-layout="side"] .logo { padding: 0 6px 14px; }
        [data-layout="side"] .subjects { flex-direction: column; }
        [data-layout="side"] .s small { margin-left: auto; }
        [data-layout="side"] .lib .find { margin: 10px 0 0; }
        [data-layout="side"] .holds { padding: 14px 12px; border-top: 1px solid var(--bar-line); background: var(--bar); color: var(--bar-fg); }
        [data-layout="side"] .holds h4, [data-layout="side"] .holds a small { color: var(--bar-dim); }
        [data-layout="side"] .holds a.on { background: var(--bar-on); }
        [data-layout="side"] .me { padding: 12px 18px 14px; border-top: 1px solid var(--bar-line); }
        [data-layout="side"][data-tone="light"] .side { border-right: 1px solid var(--line); }

        /* a narrow rail holds the subjects as marks and me as a face */
        [data-layout="rail"] body { grid-template: auto auto minmax(0, 1fr) auto / 68px minmax(0, 1fr) 300px; grid-template-areas: "lib sub sub" "lib holds holds" "lib thing across" "me thing across"; }
        [data-layout="rail"] .lib { flex-direction: column; gap: 12px; padding: 14px 0; }
        [data-layout="rail"] :is(.logo b, .lib .find, .s b, .s small, .me span) { display: none; }
        [data-layout="rail"] .subjects { flex-direction: column; align-items: center; gap: 10px; }
        [data-layout="rail"] .s { padding: 0; background: none; }
        [data-layout="rail"] :is(.s i, .logo i, .me i) { width: 40px; height: 40px; border-radius: 11px; font-size: 13px; }
        [data-layout="rail"] .logo i, [data-layout="rail"] .me i { font-size: 16px; }
        [data-layout="rail"] .me i { border-radius: 50%; }
        [data-layout="rail"]:is([data-at="subject"], [data-at="book"], [data-at="chat"]) .s.is-claude i { box-shadow: 0 0 0 2px var(--bar), 0 0 0 4px var(--c); }
        [data-layout="rail"] .me { justify-content: center; padding: 10px 0 14px; }
        [data-layout="rail"] .sub { padding: 16px 26px 14px; }
        [data-layout="rail"][data-tone="light"] :is(.lib, .me) { border-right: 1px solid #cbe6ee; }

        /* with no side bar, what the page holds is a row under its name */
        :is([data-layout="header"], [data-layout="rail"]) .holds { padding: 12px 28px; overflow: auto hidden; border-bottom: 1px solid var(--line); scrollbar-width: none; }
        [data-layout="header"] .holds { padding-top: 0; }
        :is([data-layout="header"], [data-layout="rail"]) .holds > div { display: flex; align-items: center; gap: 6px; }
        :is([data-layout="header"], [data-layout="rail"]) .holds h4 { flex: none; margin: 0 6px 0 0; }
        :is([data-layout="header"], [data-layout="rail"]) .holds h4.next { margin-left: 18px; }
        :is([data-layout="header"], [data-layout="rail"]) .holds h4 small { display: none; }
        :is([data-layout="header"], [data-layout="rail"]) .holds a { flex: none; padding: 5px 11px 5px 9px; border: 1px solid var(--line); border-radius: 99px; white-space: nowrap; }
        :is([data-layout="header"], [data-layout="rail"]) .holds a small { margin-left: 4px; }
        :is([data-layout="header"], [data-layout="rail"]) .holds a.on { border-color: transparent; }
    }

    /* ---- on a phone: one bar at the top, the page beneath it in one column ---- */
    @media (max-width: 760px) {
        body { position: relative; display: flex; flex-direction: column; }
        .sub { order: 1; }
        .holds { order: 2; }
        .thing { order: 3; }
        .across { order: 4; }
        .lib { position: sticky; top: 0; z-index: 4; height: 50px; margin-right: 54px; padding: 0 8px 0 14px; gap: 4px; overflow: auto hidden; scrollbar-width: none; }
        .logo { margin-right: 8px; }
        .logo b { font-size: 19px; }
        .s { white-space: nowrap; }
        .s small, .lib .find, .me span { display: none; }
        .me { position: fixed; z-index: 5; top: 0; right: 0; justify-content: center; width: 54px; height: 50px; }
        [data-tone="light"] :is(.lib, .me) { border-bottom: 1px solid var(--line); }
        .sub { flex-direction: column; flex-wrap: nowrap; align-items: stretch; padding: 16px 16px 12px; }
        h1 { font-size: 28px; white-space: normal; }
        .chain { overflow: auto hidden; scrollbar-width: none; }
        .tools { margin: 0; }
        .tools > div { justify-content: flex-start; }
        .holds { padding: 10px 16px 12px; overflow: auto hidden; border-bottom: 1px solid var(--line); scrollbar-width: none; }
        .holds > div { display: flex; align-items: center; gap: 6px; }
        .holds h4 { flex: none; margin: 0 6px 0 0; }
        .holds h4.next { margin-left: 18px; }
        .holds h4 small { display: none; }
        .holds a { flex: none; padding: 5px 11px 5px 9px; border: 1px solid var(--line); border-radius: 99px; background: var(--white); white-space: nowrap; }
        .holds a small { margin-left: 4px; }
        .thing { padding: 16px 16px 24px; }
        .go { flex-wrap: wrap; gap: 14px; padding: 14px; }
        .go > div { flex: 1 1 60%; min-width: 0; }
        .go .read { margin: 0; }
        .shelf { grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 16px 12px; }
        .cover { padding: 10px 8px 8px 13px; }
        .cover b { font-size: 14.5px; }
        .open, .person { flex-direction: column; gap: 16px; }
        .cover.big { width: 150px; }
        .cover.big b { font-size: 22px; }
        .counts { gap: 18px; }
        .chat .mine { max-width: 88%; }
        .across { padding: 16px; border-top: 1px solid var(--line); }

        /* a side bar or a rail turns to lie along the foot, the subjects as marks */
        :is([data-layout="side"], [data-layout="rail"]) body { padding-bottom: 60px; }
        :is([data-layout="side"], [data-layout="rail"]) .subjects { position: fixed; z-index: 4; left: 0; right: 0; bottom: 0; justify-content: space-around; padding: 8px 10px; border-top: 1px solid var(--bar-line); background: var(--bar); }
        :is([data-layout="side"], [data-layout="rail"]) .s { padding: 0; background: none; box-shadow: none; }
        :is([data-layout="side"], [data-layout="rail"]) .s b { display: none; }
        :is([data-layout="side"], [data-layout="rail"]) .s i { width: 42px; height: 42px; border-radius: 12px; font-size: 13px; }
        :is([data-layout="side"], [data-layout="rail"]):is([data-at="subject"], [data-at="book"], [data-at="chat"]) .s.is-claude i { box-shadow: 0 0 0 2px var(--bar), 0 0 0 4px var(--c); }

        [data-layout="two"] .sub { padding: 12px 16px; }
        [data-layout="two"] .title p { display: none; }
        [data-layout="cards"] body { padding-bottom: 10px; }
        [data-layout="cards"] :is(.sub, .holds, .thing, .across) { margin: 0 10px; }
        [data-layout="cards"] .sub { margin-top: 4px; border-radius: 14px 14px 0 0; }
        [data-layout="cards"] .thing { border-radius: 0 0 14px 14px; }
        [data-layout="cards"] .across { margin-top: 10px; border: 0; border-radius: 14px; }
    }
</style>
</head>
<body>

<div class="side">
<header class="lib">
    <a class="logo" data-go="library"><i>D</i><b>Dougs Library</b></a>
    <nav class="subjects">
        <a class="s is-claude" data-go="subject" style="--c: var(--sea)"><i>Cl</i><b>Conversations with Claude</b><small>212</small></a>
        <a class="s" style="--c: #1f8a78"><i>Ch</i><b>Conversations with ChatGPT</b><small>147</small></a>
        <a class="s" style="--c: #c24a78"><i>De</i><b>Dougs Design</b><small>5</small></a>
        <a class="s" style="--c: #7a4a8c"><i>Rm</i><b>Dougs Reference Manual</b><small>3</small></a>
    </nav>
    <span class="find"><svg viewBox="0 0 16 16"><circle cx="7" cy="7" r="4.5"/><path d="M10.5 10.5 14 14"/></svg><em style="font-style: normal">Find in the library</em></span>
</header>

<a class="me" data-go="author"><i>D</i><span><b>The Librarian</b><small>my own account</small></span></a>

<aside class="holds">
    <div class="at-library">
        <h4>My favorites<small>3</small></h4>
        <a data-go="book" style="--c: #e07a35"><i></i><b>Lorem Ipsum Dolor</b><small class="star">★</small></a>
        <a style="--c: #4450b8"><i></i><b>Magna Aliqua</b><small class="star">★</small></a>
        <a style="--c: #c24a78"><i></i><b>The Library's Home</b><small class="star">★</small></a>
    </div>
    <div class="at-subject">
        <h4>Holds<small>3 projects</small></h4>
        <a class="on" style="--c: #e07a35"><i></i><b>A First Project</b><small>38</small></a>
        <a style="--c: #1f8a78"><i></i><b>A Second Project</b><small>91</small></a>
        <a style="--c: #4450b8"><i></i><b>A Third Project</b><small>83</small></a>
        <h4 class="next">My favorites here<small>2</small></h4>
        <a data-go="book" style="--c: #e07a35"><i></i><b>Lorem Ipsum Dolor</b><small class="star">★</small></a>
        <a style="--c: #4450b8"><i></i><b>Magna Aliqua</b><small class="star">★</small></a>
    </div>
    <div class="at-book at-chat">
        <h4>Holds<small>8 chapters</small></h4>
        <a class="first" data-go="chat" style="--c: #e07a35"><i></i><b>A First Chapter</b><small>1</small></a>
        <a style="--c: #e07a35"><i></i><b>A Second Chapter</b><small>2</small></a>
        <a style="--c: #e07a35"><i></i><b>A Third Chapter</b><small>3</small></a>
        <a style="--c: #e07a35"><i></i><b>A Fourth Chapter</b><small>4</small></a>
        <a style="--c: #e07a35"><i></i><b>A Fifth Chapter</b><small>5</small></a>
    </div>
    <div class="at-author">
        <h4>My books<small>3</small></h4>
        <a class="on" style="--c: var(--me)"><i></i><b>Dougs Story</b><small>3</small></a>
        <a style="--c: #c24a78"><i></i><b>Dougs Design</b><small>5</small></a>
        <a style="--c: #7a4a8c"><i></i><b>Dougs Reference Manual</b><small>3</small></a>
    </div>
</aside>
</div>

<section class="sub">
    <div class="title">
        <div class="chain">
            <em>Filed under</em>
            <span class="at-library">itself</span>
            <span class="at-subject"><a data-go="library">Dougs Library</a></span>
            <span class="at-book"><a data-go="subject">Conversations with Claude</a><i>›</i><a data-go="subject">A First Project</a></span>
            <span class="at-chat"><a data-go="subject">Conversations with Claude</a><i>›</i><a data-go="subject">A First Project</a><i>›</i><a data-go="book">Lorem Ipsum Dolor</a></span>
            <span class="at-author"><a data-go="library">Dougs Library</a></span>
        </div>
        <h1 class="at-library">Dougs Library</h1>
        <h1 class="at-subject">Conversations with Claude</h1>
        <h1 class="at-book">Lorem Ipsum Dolor</h1>
        <h1 class="at-chat">A First Chapter</h1>
        <h1 class="at-author">Dougs Story</h1>
        <p class="at-library">by <a class="to-me" data-go="author">The Librarian</a> · three books and two subjects · 359 conversations kept</p>
        <p class="at-subject">a subject · 212 books in three projects · by <a class="to-me" data-go="author">The Librarian</a></p>
        <p class="at-book">by <a class="to-me" data-go="author">The Librarian</a> and Claude · 8 chapters · kept 9 Sep 2026</p>
        <p class="at-chat">chapter 1 of 8 · <a class="to-me" data-go="author">The Librarian</a> and Claude · kept 9 Sep 2026</p>
        <p class="at-author">The Librarian · my own account</p>
    </div>
    <div class="tools">
        <div class="at-subject">
            <span class="seg"><span class="on" data-view-is="shelf">Shelf</span><span data-view-is="list">List</span><span>Table</span></span>
            <span class="find"><svg viewBox="0 0 16 16"><circle cx="7" cy="7" r="4.5"/><path d="M10.5 10.5 14 14"/></svg>Find in this subject</span>
        </div>
        <div class="at-book">
            <span class="fav"><em class="star">★</em>Among my favorites</span>
            <span class="find"><svg viewBox="0 0 16 16"><circle cx="7" cy="7" r="4.5"/><path d="M10.5 10.5 14 14"/></svg>Find in this book</span>
        </div>
        <div class="at-chat">
            <span class="find"><svg viewBox="0 0 16 16"><path d="M8 3v10M3 8h10"/></svg>Note on a passage</span>
            <span class="find"><svg viewBox="0 0 16 16"><circle cx="7" cy="7" r="4.5"/><path d="M10.5 10.5 14 14"/></svg>Find in this book</span>
        </div>
    </div>
</section>

<main class="thing">
    <div class="at-library">
        <h4>Subjects</h4>
        <div class="tiles">
            <a class="tile" data-go="subject" style="--t: #dff3fa; --c: var(--sea)"><i></i><b>Conversations with Claude</b><small>212 books in three projects</small></a>
            <a class="tile" style="--t: #dcf5ee; --c: #1f8a78"><i></i><b>Conversations with ChatGPT</b><small>147 books</small></a>
        </div>
        <h4>My books</h4>
        <div class="mines">
            <a class="cover mine" data-go="author"><b>Dougs Story</b><small>my own account</small></a>
            <a class="cover mine"><b>Dougs Design</b><small>the design</small></a>
            <a class="cover mine"><b>Dougs Reference Manual</b><small>the parts</small></a>
        </div>
    </div>

    <div class="at-subject">
        <div class="go">
            <span class="cover"><b>Lorem Ipsum Dolor</b><small>with Claude</small></span>
            <div>
                <em>Continue</em>
                <h2>Lorem Ipsum Dolor</h2>
                <p>A First Project · kept 9 September 2026. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                <u><i></i></u>
                <small>Chapter 1 of 8 · 2 notes of mine · cited twice</small>
            </div>
            <a class="read" data-go="chat">Read</a>
        </div>
        <h4>Lately kept<small>212 books · newest first</small></h4>
        <div class="shelf">
            <a class="bk" data-go="book"><span class="cover"><b>Lorem Ipsum Dolor</b><small>with Claude</small></span><b class="name">Lorem Ipsum Dolor</b><p>9 Sep · 8 chapters <em class="star">★</em></p></a>
            <a class="bk"><span class="cover"><b>Quis Nostrud</b><small>with Claude</small></span><b class="name">Quis Nostrud</b><p>1 Oct · 6 chapters</p></a>
            <a class="bk"><span class="cover"><b>Magna Aliqua</b><small>with Claude</small></span><b class="name">Magna Aliqua</b><p>20 Sep · 11 chapters <em class="star">★</em></p></a>
            <a class="bk"><span class="cover"><b>Tempor Incididunt</b><small>with Claude</small></span><b class="name">Tempor Incididunt</b><p>12 Sep · 7 chapters</p></a>
            <a class="bk"><span class="cover"><b>Ut Enim ad Minim</b><small>with Claude</small></span><b class="name">Ut Enim ad Minim</b><p>27 Sep · 3 chapters</p></a>
            <a class="bk"><span class="cover"><b>Sed Do Eiusmod</b><small>with Claude</small></span><b class="name">Sed Do Eiusmod</b><p>5 Sep · 2 chapters</p></a>
            <a class="bk"><span class="cover"><b>Adipiscing Elit</b><small>with Claude</small></span><b class="name">Adipiscing Elit</b><p>2 Sep · 9 chapters</p></a>
            <a class="bk"><span class="cover"><b>Sit Amet Consectetur</b><small>with Claude</small></span><b class="name">Sit Amet Consectetur</b><p>21 Jul · 14 chapters</p></a>
            <a class="bk"><span class="cover"><b>Duis Aute Irure</b><small>with Claude</small></span><b class="name">Duis Aute Irure</b><p>14 Jul · 5 chapters</p></a>
            <a class="bk"><span class="cover"><b>Excepteur Sint</b><small>with Claude</small></span><b class="name">Excepteur Sint</b><p>2 Jul · 4 chapters</p></a>
        </div>
    </div>

    <div class="open at-book">
        <span class="cover big"><b>Lorem Ipsum Dolor</b><small>with Claude</small></span>
        <div class="words">
            <p class="says">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
            <a class="read" data-go="chat">Read from A First Chapter<svg viewBox="0 0 16 16"><path d="M3 8h10M9 4l4 4-4 4"/></svg></a>
        </div>
    </div>

    <div class="chat at-chat">
        <div class="mine"><span class="who">The Librarian</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit? Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
        <div class="theirs">
            <span class="who">Claude</span>
            <p>Ut enim ad minim veniam, quis nostrud exercitation. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <mark>Excepteur sint occaecat cupidatat non proident</mark><sup>1</sup>, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
<pre>const lorem = ipsum.dolor('sit amet');
return lorem.consectetur();</pre>
            <a class="made"><i>◇</i><span><b>Lorem Ipsum, a first draft</b><small>made in this turn · opens beside the page</small></span></a>
        </div>
        <div class="mine"><span class="who">The Librarian</span>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit?</div>
        <div class="theirs">
            <span class="who">Claude</span>
            <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.</p>
        </div>
        <div class="turns"><span></span><a>A Second Chapter →</a></div>
    </div>

    <div class="person at-author">
        <span class="face">D</span>
        <div class="words">
            <p class="says">My own account, and the one book here that is by its own subject. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            <div class="counts"><span><b>3</b>books written</span><span><b>359</b>conversations kept</span><span><b>41</b>notes</span></div>
            <div class="mines">
                <a class="cover mine"><b>Dougs Story</b><small>my own account</small></a>
                <a class="cover mine"><b>Dougs Design</b><small>the design</small></a>
                <a class="cover mine"><b>Dougs Reference Manual</b><small>the parts</small></a>
            </div>
        </div>
    </div>
</main>

<aside class="across">
    <a class="return to-book" data-go="book"><svg viewBox="0 0 16 16"><path d="M13 8H3M7 4 3 8l4 4"/></svg>Back to Lorem Ipsum Dolor</a>
    <a class="return to-subject" data-go="subject"><svg viewBox="0 0 16 16"><path d="M13 8H3M7 4 3 8l4 4"/></svg>Back to Conversations with Claude</a>

    <div class="at-library">
        <h4>Lately kept</h4>
        <a class="ref" style="--c: #c2413f"><span class="to"><i></i>Quis Nostrud</span><p>1 Oct · Conversations with Claude</p></a>
        <a class="ref" style="--c: #7a4a8c"><span class="to"><i></i>Ut Enim ad Minim</span><p>27 Sep · Conversations with Claude</p></a>
        <h4 class="next">My notes<small>41</small></h4>
        <div class="note"><b>3 Oct 2026 · in Lorem Ipsum Dolor</b>Lorem ipsum, a note of mine beside the passage it is about.</div>
    </div>

    <div class="at-subject">
        <h4>Cited from outside<small>2</small></h4>
        <a class="ref" data-go="author" data-from="subject" style="--c: var(--me)"><span class="to"><svg viewBox="0 0 16 16"><path d="M13 8H3M7 4 3 8l4 4"/></svg><i></i>Dougs Story</span><p>chapter 1 cites Lorem Ipsum Dolor</p></a>
        <a class="ref" style="--c: #1f8a78"><span class="to"><svg viewBox="0 0 16 16"><path d="M13 8H3M7 4 3 8l4 4"/></svg><i></i>Conversations with ChatGPT</span><p>one book cites Adipiscing Elit</p></a>
        <h4 class="next">My notes here<small>12</small></h4>
        <div class="note"><b>3 Oct 2026 · in Lorem Ipsum Dolor</b>Lorem ipsum, a note of mine beside the passage it is about.</div>
    </div>

    <div class="at-book at-chat">
        <h4>Cites<small>1</small></h4>
        <a class="ref" style="--c: #3d7a4e"><span class="to"><svg viewBox="0 0 16 16"><path d="M3 8h10M9 4l4 4-4 4"/></svg><i></i>Adipiscing Elit</span><p>chapter 2 · A First Project</p></a>
        <h4 class="next">Cited by<small>2</small></h4>
        <a class="ref" data-go="author" data-from="book" style="--c: var(--me)"><span class="to"><svg viewBox="0 0 16 16"><path d="M13 8H3M7 4 3 8l4 4"/></svg><i></i>Dougs Story</span><p>chapter 1 · my own account</p><q>Excepteur sint occaecat cupidatat non proident</q></a>
        <a class="ref" style="--c: #c24a78"><span class="to"><svg viewBox="0 0 16 16"><path d="M13 8H3M7 4 3 8l4 4"/></svg><i></i>Sit Amet Consectetur</span><p>chapter 3 · A First Project</p></a>
        <h4 class="next">My notes<small>1</small></h4>
        <div class="note"><b>1 · 3 Oct 2026</b>Lorem ipsum, a note of mine beside the passage it is about.</div>
    </div>

    <div class="at-author">
        <h4>Cites<small>1</small></h4>
        <a class="ref" data-go="book" style="--c: #e07a35"><span class="to"><svg viewBox="0 0 16 16"><path d="M3 8h10M9 4l4 4-4 4"/></svg><i></i>Lorem Ipsum Dolor</span><p>chapter 1 · a conversation with Claude</p><q>Excepteur sint occaecat cupidatat non proident</q></a>
        <h4 class="next">Cited by<small>0</small></h4>
        <div class="note">Nothing cites this chapter yet.</div>
    </div>
</aside>

<script>
    const page = document.documentElement;
    for (const door of document.querySelectorAll('[data-go]'))
        door.addEventListener('click', () => {
            if (door.dataset.from) page.dataset.from = door.dataset.from;
            else delete page.dataset.from;
            page.dataset.at = door.dataset.go;
            window.scrollTo(0, 0);
            for (const column of document.querySelectorAll('.thing, .holds, .across')) column.scrollTop = 0;
        });
    for (const view of document.querySelectorAll('[data-view-is]'))
        view.addEventListener('click', () => {
            page.dataset.view = view.dataset.viewIs;
            for (const other of view.parentElement.children) other.classList.toggle('on', other === view);
        });
<\/script>
</body>
</html>
`})]})]}),a.jsxs(i,{children:[a.jsx(d,{children:"15"}),a.jsx(o,{children:"[A Black Top Bar and an Opal Side Bar](/dougs-design/#a-black-top-bar-and-an-opal-side-bar)"}),a.jsx(t,{children:"Concept 15, an idea, after the coming-soon page: its soft black, and its opal between that and white."}),a.jsx(t,{children:"Both. The top bar is the library's, in soft black; the side bar is the open subject's, in the pale opal, which is the step between the black and the white page."}),a.jsxs(t,{children:[a.jsx(p,{}),a.jsx(r,{children:"/.design/3-every-concept~015-desk.png"}),a.jsx(r,{children:"/.design/3-every-concept~015-phone.png"})]}),a.jsxs(t,{children:[a.jsx(c,{}),a.jsx(n,{children:`<!doctype html>
<html lang="en" data-layout="both" data-tone="dark" data-at="subject" data-view="shelf">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>A Black Top Bar and an Opal Side Bar</title>
<meta name="number" content="15">
<meta name="state" content="idea">
<meta name="after" content="the coming-soon page: its soft black, and its opal between that and white">
<meta name="idea" content="Both. The top bar is the library's, in soft black; the side bar is the open subject's, in the pale opal, which is the step between the black and the white page.">
<meta name="said" content="">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
<style>
    /* ---- what does not change between the ideas ----
       The frame is soft black, the blue between it and white, and white. The soft black #0c1b1f and the opal #c8f4fb are the
       coming-soon page's own; the blues are the hue between them (208 to 223 in OKLCH) walked from dark to light.
       The CONTENT keeps its own colors: every book a cover of its own, the light accents the opal's wave. */
    :root { --night: #0c1b1f; --deep: #14323c; --blue: #166178; --sea: #4e9eb9; --sky: #8fc8dc; --opal: #c8f4fb; --pale: #e3f5fa; --mist: #f1f7f9; --white: #ffffff;
        --ink: #10252c; --soft: #516770; --line: #dbe7ec; --me: #e8590c;
        --wash: linear-gradient(105deg, #e2f6fb 0%, #ecf0fd 52%, #fae9f4 100%);
        --serif: 'Cormorant Garamond', Georgia, serif; --sans: 'Inter', system-ui, sans-serif; }
    [data-tone="dark"] { --bar: var(--night); --bar-fg: #ffffff; --bar-dim: #a9bcc1; --bar-on: rgba(255, 255, 255, .11); --bar-line: #1d3339; --mark: var(--opal); --mark-fg: var(--night); }
    [data-tone="light"] { --bar: var(--white); --bar-fg: var(--ink); --bar-dim: var(--soft); --bar-on: var(--pale); --bar-line: var(--line); --mark: var(--night); --mark-fg: #ffffff; }
    [data-at="library"] [class*="at-"]:not(.at-library), [data-at="subject"] [class*="at-"]:not(.at-subject), [data-at="book"] [class*="at-"]:not(.at-book), [data-at="chat"] [class*="at-"]:not(.at-chat), [data-at="author"] [class*="at-"]:not(.at-author) { display: none !important; }

    * { box-sizing: border-box; margin: 0; }
    body { background: var(--white); color: var(--ink); font: 400 14px/1.5 var(--sans); }
    a { color: inherit; text-decoration: none; }
    svg { width: 15px; height: 15px; stroke: currentColor; fill: none; stroke-width: 1.7; stroke-linecap: round; stroke-linejoin: round; flex: none; }
    [data-go], [data-view-is] { cursor: pointer; }
    h4 { display: flex; align-items: center; gap: 8px; margin-bottom: 10px; font: 600 10.5px/1 var(--sans); letter-spacing: .12em; text-transform: uppercase; color: var(--soft); }
    h4 small { margin-left: auto; font: 400 11.5px/1 var(--sans); letter-spacing: 0; text-transform: none; }
    h4.next { margin-top: 22px; }
    .star { color: var(--me); font-style: normal; }

    /* the library's own things: its mark, its subjects, a way to find, and me. They are held together only where an idea has a side bar. */
    .side { display: contents; }
    [data-at="chat"] .holds a.first { background: var(--bar-on, var(--pale)); }
    .lib { grid-area: lib; display: flex; align-items: center; gap: 6px; min-width: 0; background: var(--bar); color: var(--bar-fg); }
    .logo { display: flex; align-items: center; gap: 10px; flex: none; }
    .logo i { display: grid; place-items: center; width: 30px; height: 30px; border-radius: 8px; background: var(--mark); color: var(--mark-fg); font: 600 15px/1 var(--sans); font-style: normal; }
    .logo b { font: 600 21px/1 var(--serif); white-space: nowrap; }
    .subjects { display: flex; gap: 2px; min-width: 0; }
    .s { display: flex; align-items: center; gap: 8px; padding: 7px 10px; border-radius: 8px; color: var(--bar-dim); font-size: 13.5px; }
    .s i { display: grid; place-items: center; flex: none; width: 9px; height: 9px; border-radius: 50%; background: var(--c); color: #fff; font: 600 0/1 var(--sans); font-style: normal; }
    .s b { font-weight: 500; }
    .s small { font-size: 12px; opacity: .7; }
    :is([data-at="subject"], [data-at="book"], [data-at="chat"]) .s.is-claude { background: var(--bar-on); color: var(--bar-fg); }
    .find { display: flex; align-items: center; gap: 8px; padding: 6px 11px; border-radius: 9px; white-space: nowrap; }
    .lib .find { margin-left: auto; background: var(--bar-on); color: var(--bar-dim); }
    .me { grid-area: me; display: flex; align-items: center; gap: 9px; background: var(--bar); color: var(--bar-fg); }
    .me i { display: grid; place-items: center; flex: none; width: 32px; height: 32px; border-radius: 50%; background: var(--me); color: #fff; font: 600 14px/1 var(--sans); font-style: normal; }
    .me b { display: block; font-weight: 500; line-height: 1.2; white-space: nowrap; }
    .me small { display: block; font-size: 11.5px; opacity: .7; white-space: nowrap; }

    /* the open page's own things: what it is filed under, its name, who it is by, its tools */
    .sub { --sub-fg: var(--ink); --sub-dim: var(--soft); --ctl: var(--mist); --ctl-line: var(--line); --ctl-fg: var(--soft); --on: var(--night); --on-fg: #fff; --lnk: var(--blue); --melnk: var(--me);
        grid-area: sub; display: flex; flex-wrap: wrap; align-items: flex-end; gap: 10px 20px; min-width: 0; padding: 20px 28px 14px; color: var(--sub-fg); }
    .chain { display: flex; align-items: center; gap: 7px; font-size: 12.5px; color: var(--sub-dim); white-space: nowrap; }
    .chain em { font: 600 9.5px/1 var(--sans); font-style: normal; letter-spacing: .12em; text-transform: uppercase; }
    .chain span { display: flex; align-items: center; gap: 7px; }
    .chain i { font-style: normal; opacity: .55; }
    .chain a { font-weight: 500; color: var(--lnk); }
    .title { min-width: 0; }
    h1 { margin-top: 4px; font: 600 36px/1.04 var(--serif); white-space: nowrap; }
    .title p { margin-top: 4px; font-size: 13px; color: var(--sub-dim); }
    .title p a { color: var(--lnk); font-weight: 500; }
    .title p a.to-me { color: var(--melnk); text-decoration: underline; text-decoration-color: var(--me); text-decoration-thickness: 2px; text-underline-offset: 3px; }
    .tools { margin-left: auto; }
    .tools > div { display: flex; flex-wrap: wrap; justify-content: flex-end; align-items: center; gap: 8px; }
    .seg { display: flex; overflow: hidden; border: 1px solid var(--ctl-line); border-radius: 9px; background: var(--ctl); }
    .seg span { padding: 6px 12px; color: var(--ctl-fg); }
    .seg span.on { background: var(--on); color: var(--on-fg); font-weight: 500; }
    .sub .find { border: 1px solid var(--ctl-line); background: var(--ctl); color: var(--ctl-fg); }
    .fav { display: flex; align-items: center; gap: 6px; padding: 6px 11px; border-radius: 9px; background: color-mix(in srgb, var(--me) 12%, white); color: #a8400a; font-weight: 500; white-space: nowrap; }

    /* down: what the open page holds */
    .holds { grid-area: holds; min-width: 0; }
    .holds a { display: flex; align-items: center; gap: 9px; padding: 6px 9px; border-radius: 8px; }
    .holds a i { flex: none; width: 9px; height: 9px; border-radius: 50%; background: var(--c, var(--sea)); }
    .holds a b { font-weight: 500; }
    .holds a small { margin-left: auto; font-size: 12px; color: var(--soft); }
    .holds a.on { background: var(--pale); }

    /* the page itself */
    .thing { grid-area: thing; min-width: 0; }
    .go { display: flex; align-items: center; gap: 20px; margin-bottom: 22px; padding: 16px 20px; border-radius: 16px; background: var(--wash); }
    .go .cover { flex: none; width: 92px; padding: 10px 8px 8px 13px; }
    .go .cover b { font-size: 13.5px; }
    .go .cover small { font-size: 7.5px; padding-top: 6px; }
    .go em { font: 600 10.5px/1 var(--sans); font-style: normal; letter-spacing: .1em; text-transform: uppercase; color: var(--me); }
    .go h2 { margin: 4px 0 2px; font: 600 24px/1.1 var(--serif); }
    .go p { max-width: 52ch; font-size: 13px; color: var(--soft); }
    .go u { display: block; width: 260px; max-width: 100%; height: 4px; margin: 10px 0 6px; border-radius: 9px; background: rgba(12, 27, 31, .1); text-decoration: none; }
    .go u i { display: block; width: 14%; height: 100%; border-radius: 9px; background: var(--me); }
    .go small { font-size: 12px; color: var(--soft); }
    .go .read { margin-left: auto; }
    .read { display: inline-flex; align-items: center; gap: 8px; padding: 9px 18px; border-radius: 99px; background: var(--night); color: #fff; font-weight: 500; white-space: nowrap; }

    /* a cover is the landmark of a book, and every book has a color of its own; my own books are the soft black */
    .cover { position: relative; display: flex; flex-direction: column; aspect-ratio: 3 / 4; padding: 13px 11px 10px 17px; border-radius: 3px 7px 7px 3px; color: #fff; background: linear-gradient(160deg, color-mix(in srgb, var(--c) 90%, white), color-mix(in srgb, var(--c) 86%, black)); box-shadow: 0 12px 22px -14px rgba(12, 27, 31, .55); }
    .cover::before { content: ''; position: absolute; left: 7px; top: 0; bottom: 0; width: 1px; background: rgba(255, 255, 255, .3); }
    .cover b { font: 600 17px/1.08 var(--serif); }
    .cover small { margin-top: auto; padding-top: 8px; border-top: 1px solid rgba(255, 255, 255, .32); font: 600 9px/1.2 var(--sans); letter-spacing: .1em; text-transform: uppercase; opacity: .92; }
    .cover.mine { --c: var(--night); color: var(--opal); background: linear-gradient(160deg, #16303a, var(--night)); }
    .bk:nth-child(8n+1), .open, .go { --c: #e07a35; }
    .bk:nth-child(8n+2) { --c: #c2413f; }
    .bk:nth-child(8n+3) { --c: #4450b8; }
    .bk:nth-child(8n+4) { --c: #1f8a78; }
    .bk:nth-child(8n+5) { --c: #7a4a8c; }
    .bk:nth-child(8n+6) { --c: #2f7fb0; }
    .bk:nth-child(8n+7) { --c: #3d7a4e; }
    .bk:nth-child(8n) { --c: #c24a78; }
    .shelf { display: grid; grid-template-columns: repeat(auto-fill, minmax(124px, 1fr)); gap: 22px 18px; }
    .bk { display: block; }
    .bk .name { display: none; }
    .bk p { display: flex; gap: 6px; margin-top: 8px; font-size: 12px; color: var(--soft); }
    [data-view="list"] .shelf { grid-template-columns: minmax(0, 1fr); gap: 0; }
    [data-view="list"] .bk { display: grid; grid-template-columns: 30px minmax(0, 1fr) auto; gap: 14px; align-items: center; padding: 9px 0; border-bottom: 1px solid var(--line); }
    [data-view="list"] .bk .cover { padding: 0; border-radius: 2px 4px 4px 2px; box-shadow: none; }
    [data-view="list"] .bk .cover::before { left: 4px; }
    [data-view="list"] .bk .cover b, [data-view="list"] .bk .cover small { display: none; }
    [data-view="list"] .bk .name { display: block; font: 600 19px/1.2 var(--serif); }
    [data-view="list"] .bk p { margin: 0; }
    .mines { display: grid; grid-template-columns: repeat(auto-fill, minmax(124px, 148px)); gap: 18px; }

    .tiles { display: grid; grid-template-columns: repeat(auto-fill, minmax(210px, 1fr)); gap: 14px; margin-bottom: 26px; }
    .tile { display: block; padding: 14px 16px 16px; border-radius: 14px; background: var(--t); }
    .tile i { display: block; width: 26px; height: 26px; margin-bottom: 24px; border-radius: 8px; background: var(--c); }
    .tile b { display: block; font: 600 21px/1.1 var(--serif); }
    .tile small { font-size: 12.5px; color: var(--soft); }

    .open, .person { display: flex; gap: 26px; align-items: flex-start; }
    .cover.big { flex: none; width: 180px; padding: 20px 15px 13px 24px; }
    .cover.big b { font-size: 26px; }
    .cover.big::before { left: 11px; }
    .words { min-width: 0; }
    .says { max-width: 56ch; font: 500 20px/1.5 var(--serif); }
    .words .read { margin-top: 18px; }
    .face { display: grid; place-items: center; flex: none; width: 96px; height: 96px; border-radius: 50%; background: var(--me); color: #fff; font: 600 46px/1 var(--serif); box-shadow: 0 0 0 5px var(--white), 0 0 0 6px color-mix(in srgb, var(--me) 45%, white); }
    .counts { display: flex; gap: 26px; margin: 16px 0 22px; color: var(--soft); font-size: 12.5px; }
    .counts b { display: block; font: 600 26px/1.1 var(--serif); color: var(--ink); }

    /* a conversation, in the form of the application it comes from; my turns in my color */
    .chat { display: grid; gap: 20px; max-width: 720px; margin: 0 auto; }
    .chat .who { display: block; margin-bottom: 4px; font: 600 10.5px/1 var(--sans); letter-spacing: .1em; text-transform: uppercase; color: var(--soft); }
    .chat .mine { justify-self: end; max-width: 78%; padding: 11px 16px; border-radius: 18px 18px 4px 18px; background: color-mix(in srgb, var(--me) 9%, white); font-size: 15px; }
    .chat .mine .who { color: var(--me); }
    .chat .theirs p { font: 500 19.5px/1.55 var(--serif); }
    .chat .theirs p + p { margin-top: 10px; }
    .chat mark { padding: 1px 3px; border-radius: 3px; background: var(--pale); color: inherit; }
    .chat sup { margin-left: 2px; font: 600 10.5px/1 var(--sans); color: var(--me); }
    .chat pre { margin: 12px 0; padding: 12px 14px; border-radius: 10px; background: var(--night); color: #d7e6ea; font: 400 12.5px/1.6 ui-monospace, 'Cascadia Code', Consolas, monospace; overflow: auto; }
    .chat .made { display: flex; align-items: center; gap: 10px; width: fit-content; margin-top: 12px; padding: 9px 13px; border: 1px solid var(--line); border-radius: 12px; font-size: 13px; }
    .chat .made i { display: grid; place-items: center; width: 30px; height: 30px; border-radius: 8px; background: var(--pale); color: var(--blue); font-style: normal; }
    .chat .made small { display: block; color: var(--soft); font-size: 12px; }
    .chat .turns { display: flex; justify-content: space-between; padding-top: 16px; border-top: 1px solid var(--line); color: var(--blue); font-weight: 500; }

    /* across: what it cites, what cites it, and what I wrote beside it */
    .across { grid-area: across; min-width: 0; }
    .ref { display: block; margin-bottom: 8px; padding: 10px 12px; border: 1px solid var(--line); border-radius: 12px; background: var(--white); }
    .ref .to { display: flex; align-items: center; gap: 7px; font-weight: 600; }
    .ref .to svg { color: var(--soft); }
    .ref .to i { flex: none; width: 9px; height: 9px; border-radius: 50%; background: var(--c, var(--sea)); }
    .ref p { margin-top: 2px; font-size: 12.5px; color: var(--soft); }
    .ref q { display: block; margin-top: 7px; padding: 6px 9px; border-radius: 7px; background: var(--pale); font: italic 500 15.5px/1.35 var(--serif); quotes: '“' '”'; }
    .note { padding: 10px 12px; border: 1px dashed var(--line); border-radius: 12px; font-size: 13px; color: var(--soft); }
    .note b { display: block; margin-bottom: 2px; color: var(--ink); font-weight: 500; }
    .return { display: none; align-items: center; gap: 8px; margin-bottom: 14px; padding: 9px 12px; border-radius: 10px; background: var(--night); color: #fff; font-weight: 500; }
    .return svg { color: var(--sky); }
    [data-at="author"][data-from="book"] .return.to-book, [data-at="author"][data-from="subject"] .return.to-subject { display: flex; }

    /* ---- what each idea colors, at every width ---- */
    [data-layout="both"] .holds { background: var(--pale); }
    [data-layout="both"] .holds a.on { background: var(--white); }
    [data-layout="rail"][data-tone="dark"] .sub { --sub-fg: #fff; --sub-dim: rgba(255, 255, 255, .8); --ctl: rgba(12, 27, 31, .26); --ctl-line: transparent; --ctl-fg: #fff; --on: #fff; --on-fg: var(--night); --lnk: #fff; --melnk: #fff; background: var(--blue); }
    [data-layout="rail"][data-tone="dark"] .fav { background: #fff; }
    [data-layout="rail"][data-tone="light"] { --bar: var(--pale); --bar-on: #fff; --bar-line: #cbe6ee; }
    [data-layout="two"][data-tone="dark"] .sub { --sub-dim: #27505c; --ctl: rgba(255, 255, 255, .62); --ctl-line: transparent; --ctl-fg: var(--ink); --lnk: var(--deep); background: var(--sky); }
    [data-layout="two"][data-tone="light"] .sub { --ctl: #fff; background: var(--pale); }
    [data-layout="side"][data-tone="light"] { --bar: var(--mist); --bar-on: #fff; }
    [data-layout="cards"][data-tone="light"] { --canvas: #e9f2f5; --bar-on: #fff; }
    [data-layout="cards"][data-tone="dark"] { --canvas: var(--night); }
    [data-layout="cards"] body, [data-layout="cards"] .lib, [data-layout="cards"] .me { background: var(--canvas); }
    [data-layout="cards"] :is(.sub, .holds, .thing, .across) { background: var(--white); }
    :is([data-layout="header"], [data-layout="both"], [data-layout="two"], [data-layout="cards"]):is([data-at="subject"], [data-at="book"], [data-at="chat"]) .s.is-claude { box-shadow: inset 0 -2px 0 var(--c); }

    /* ---- at a desk: where each idea puts the bars ---- */
    @media (min-width: 761px) {
        html, body { height: 100%; }
        body { display: grid; overflow: hidden; }
        .thing { padding: 20px 28px 40px; overflow: auto; }
        .holds { padding: 18px 12px; overflow: auto; }
        .across { padding: 18px 16px; overflow: auto; border-left: 1px solid var(--line); }

        /* a bar across the top holds the library, with me at its right end */
        :is([data-layout="header"], [data-layout="both"], [data-layout="two"], [data-layout="cards"]) .lib { padding: 9px 170px 9px 18px; }
        :is([data-layout="header"], [data-layout="both"], [data-layout="two"], [data-layout="cards"]) .logo { margin-right: 12px; }
        :is([data-layout="header"], [data-layout="both"], [data-layout="two"], [data-layout="cards"]) :is(.s small, .me small, .lib .find em) { display: none; }
        :is([data-layout="header"], [data-layout="both"], [data-layout="two"], [data-layout="cards"]) .me { grid-area: lib; justify-self: end; z-index: 1; padding: 0 18px 0 8px; background: none; }
        [data-tone="light"]:is([data-layout="header"], [data-layout="both"], [data-layout="two"]) .lib { border-bottom: 1px solid var(--line); }

        [data-layout="header"] body { grid-template: auto auto auto minmax(0, 1fr) / minmax(0, 1fr) 300px; grid-template-areas: "lib lib" "sub sub" "holds holds" "thing across"; }
        [data-layout="both"] body { grid-template: auto auto minmax(0, 1fr) / 240px minmax(0, 1fr) 300px; grid-template-areas: "lib lib lib" "holds sub sub" "holds thing across"; }
        [data-layout="both"] .holds { padding: 20px 12px; border-right: 1px solid #cbe6ee; }
        [data-layout="two"] body { grid-template: auto auto minmax(0, 1fr) / 236px minmax(0, 1fr) 300px; grid-template-areas: "lib lib lib" "sub sub sub" "holds thing across"; }
        [data-layout="two"] .sub { align-items: center; padding: 9px 24px; }
        [data-layout="two"] .title { display: flex; flex-wrap: wrap; align-items: baseline; gap: 4px 16px; }
        [data-layout="two"] h1 { margin: 0; font-size: 26px; order: -1; }
        [data-layout="two"] .title p { display: none; }
        [data-layout="two"] .holds { border-right: 1px solid var(--line); }
        [data-layout="cards"] body { grid-template: auto auto minmax(0, 1fr) / 244px minmax(0, 1fr) 300px; grid-template-areas: "lib lib lib" "holds sub across" "holds thing across"; column-gap: 12px; padding: 0 12px 12px; }
        [data-layout="cards"] .lib { padding: 11px 170px 11px 6px; }
        [data-layout="cards"] .me { padding: 0 6px; }
        [data-layout="cards"] :is(.holds, .across) { border: 0; border-radius: 16px; }
        [data-layout="cards"] .sub { border-radius: 16px 16px 0 0; }
        [data-layout="cards"] .thing { border-radius: 0 0 16px 16px; }

        /* a bar down the left holds the library, with me at its foot */
        [data-layout="side"] body { grid-template: auto minmax(0, 1fr) / 256px minmax(0, 1fr) 300px; grid-template-areas: "side sub sub" "side thing across"; }
        [data-layout="side"] .side { grid-area: side; display: flex; flex-direction: column; min-height: 0; background: var(--bar); }
        [data-layout="side"] .holds { flex: 1; order: 1; }
        [data-layout="side"] .me { order: 2; }
        [data-layout="side"] .lib { flex-direction: column; align-items: stretch; gap: 2px; padding: 18px 12px 12px; }
        [data-layout="side"] .logo { padding: 0 6px 14px; }
        [data-layout="side"] .subjects { flex-direction: column; }
        [data-layout="side"] .s small { margin-left: auto; }
        [data-layout="side"] .lib .find { margin: 10px 0 0; }
        [data-layout="side"] .holds { padding: 14px 12px; border-top: 1px solid var(--bar-line); background: var(--bar); color: var(--bar-fg); }
        [data-layout="side"] .holds h4, [data-layout="side"] .holds a small { color: var(--bar-dim); }
        [data-layout="side"] .holds a.on { background: var(--bar-on); }
        [data-layout="side"] .me { padding: 12px 18px 14px; border-top: 1px solid var(--bar-line); }
        [data-layout="side"][data-tone="light"] .side { border-right: 1px solid var(--line); }

        /* a narrow rail holds the subjects as marks and me as a face */
        [data-layout="rail"] body { grid-template: auto auto minmax(0, 1fr) auto / 68px minmax(0, 1fr) 300px; grid-template-areas: "lib sub sub" "lib holds holds" "lib thing across" "me thing across"; }
        [data-layout="rail"] .lib { flex-direction: column; gap: 12px; padding: 14px 0; }
        [data-layout="rail"] :is(.logo b, .lib .find, .s b, .s small, .me span) { display: none; }
        [data-layout="rail"] .subjects { flex-direction: column; align-items: center; gap: 10px; }
        [data-layout="rail"] .s { padding: 0; background: none; }
        [data-layout="rail"] :is(.s i, .logo i, .me i) { width: 40px; height: 40px; border-radius: 11px; font-size: 13px; }
        [data-layout="rail"] .logo i, [data-layout="rail"] .me i { font-size: 16px; }
        [data-layout="rail"] .me i { border-radius: 50%; }
        [data-layout="rail"]:is([data-at="subject"], [data-at="book"], [data-at="chat"]) .s.is-claude i { box-shadow: 0 0 0 2px var(--bar), 0 0 0 4px var(--c); }
        [data-layout="rail"] .me { justify-content: center; padding: 10px 0 14px; }
        [data-layout="rail"] .sub { padding: 16px 26px 14px; }
        [data-layout="rail"][data-tone="light"] :is(.lib, .me) { border-right: 1px solid #cbe6ee; }

        /* with no side bar, what the page holds is a row under its name */
        :is([data-layout="header"], [data-layout="rail"]) .holds { padding: 12px 28px; overflow: auto hidden; border-bottom: 1px solid var(--line); scrollbar-width: none; }
        [data-layout="header"] .holds { padding-top: 0; }
        :is([data-layout="header"], [data-layout="rail"]) .holds > div { display: flex; align-items: center; gap: 6px; }
        :is([data-layout="header"], [data-layout="rail"]) .holds h4 { flex: none; margin: 0 6px 0 0; }
        :is([data-layout="header"], [data-layout="rail"]) .holds h4.next { margin-left: 18px; }
        :is([data-layout="header"], [data-layout="rail"]) .holds h4 small { display: none; }
        :is([data-layout="header"], [data-layout="rail"]) .holds a { flex: none; padding: 5px 11px 5px 9px; border: 1px solid var(--line); border-radius: 99px; white-space: nowrap; }
        :is([data-layout="header"], [data-layout="rail"]) .holds a small { margin-left: 4px; }
        :is([data-layout="header"], [data-layout="rail"]) .holds a.on { border-color: transparent; }
    }

    /* ---- on a phone: one bar at the top, the page beneath it in one column ---- */
    @media (max-width: 760px) {
        body { position: relative; display: flex; flex-direction: column; }
        .sub { order: 1; }
        .holds { order: 2; }
        .thing { order: 3; }
        .across { order: 4; }
        .lib { position: sticky; top: 0; z-index: 4; height: 50px; margin-right: 54px; padding: 0 8px 0 14px; gap: 4px; overflow: auto hidden; scrollbar-width: none; }
        .logo { margin-right: 8px; }
        .logo b { font-size: 19px; }
        .s { white-space: nowrap; }
        .s small, .lib .find, .me span { display: none; }
        .me { position: fixed; z-index: 5; top: 0; right: 0; justify-content: center; width: 54px; height: 50px; }
        [data-tone="light"] :is(.lib, .me) { border-bottom: 1px solid var(--line); }
        .sub { flex-direction: column; flex-wrap: nowrap; align-items: stretch; padding: 16px 16px 12px; }
        h1 { font-size: 28px; white-space: normal; }
        .chain { overflow: auto hidden; scrollbar-width: none; }
        .tools { margin: 0; }
        .tools > div { justify-content: flex-start; }
        .holds { padding: 10px 16px 12px; overflow: auto hidden; border-bottom: 1px solid var(--line); scrollbar-width: none; }
        .holds > div { display: flex; align-items: center; gap: 6px; }
        .holds h4 { flex: none; margin: 0 6px 0 0; }
        .holds h4.next { margin-left: 18px; }
        .holds h4 small { display: none; }
        .holds a { flex: none; padding: 5px 11px 5px 9px; border: 1px solid var(--line); border-radius: 99px; background: var(--white); white-space: nowrap; }
        .holds a small { margin-left: 4px; }
        .thing { padding: 16px 16px 24px; }
        .go { flex-wrap: wrap; gap: 14px; padding: 14px; }
        .go > div { flex: 1 1 60%; min-width: 0; }
        .go .read { margin: 0; }
        .shelf { grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 16px 12px; }
        .cover { padding: 10px 8px 8px 13px; }
        .cover b { font-size: 14.5px; }
        .open, .person { flex-direction: column; gap: 16px; }
        .cover.big { width: 150px; }
        .cover.big b { font-size: 22px; }
        .counts { gap: 18px; }
        .chat .mine { max-width: 88%; }
        .across { padding: 16px; border-top: 1px solid var(--line); }

        /* a side bar or a rail turns to lie along the foot, the subjects as marks */
        :is([data-layout="side"], [data-layout="rail"]) body { padding-bottom: 60px; }
        :is([data-layout="side"], [data-layout="rail"]) .subjects { position: fixed; z-index: 4; left: 0; right: 0; bottom: 0; justify-content: space-around; padding: 8px 10px; border-top: 1px solid var(--bar-line); background: var(--bar); }
        :is([data-layout="side"], [data-layout="rail"]) .s { padding: 0; background: none; box-shadow: none; }
        :is([data-layout="side"], [data-layout="rail"]) .s b { display: none; }
        :is([data-layout="side"], [data-layout="rail"]) .s i { width: 42px; height: 42px; border-radius: 12px; font-size: 13px; }
        :is([data-layout="side"], [data-layout="rail"]):is([data-at="subject"], [data-at="book"], [data-at="chat"]) .s.is-claude i { box-shadow: 0 0 0 2px var(--bar), 0 0 0 4px var(--c); }

        [data-layout="two"] .sub { padding: 12px 16px; }
        [data-layout="two"] .title p { display: none; }
        [data-layout="cards"] body { padding-bottom: 10px; }
        [data-layout="cards"] :is(.sub, .holds, .thing, .across) { margin: 0 10px; }
        [data-layout="cards"] .sub { margin-top: 4px; border-radius: 14px 14px 0 0; }
        [data-layout="cards"] .thing { border-radius: 0 0 14px 14px; }
        [data-layout="cards"] .across { margin-top: 10px; border: 0; border-radius: 14px; }
    }
</style>
</head>
<body>

<div class="side">
<header class="lib">
    <a class="logo" data-go="library"><i>D</i><b>Dougs Library</b></a>
    <nav class="subjects">
        <a class="s is-claude" data-go="subject" style="--c: var(--sea)"><i>Cl</i><b>Conversations with Claude</b><small>212</small></a>
        <a class="s" style="--c: #1f8a78"><i>Ch</i><b>Conversations with ChatGPT</b><small>147</small></a>
        <a class="s" style="--c: #c24a78"><i>De</i><b>Dougs Design</b><small>5</small></a>
        <a class="s" style="--c: #7a4a8c"><i>Rm</i><b>Dougs Reference Manual</b><small>3</small></a>
    </nav>
    <span class="find"><svg viewBox="0 0 16 16"><circle cx="7" cy="7" r="4.5"/><path d="M10.5 10.5 14 14"/></svg><em style="font-style: normal">Find in the library</em></span>
</header>

<a class="me" data-go="author"><i>D</i><span><b>The Librarian</b><small>my own account</small></span></a>

<aside class="holds">
    <div class="at-library">
        <h4>My favorites<small>3</small></h4>
        <a data-go="book" style="--c: #e07a35"><i></i><b>Lorem Ipsum Dolor</b><small class="star">★</small></a>
        <a style="--c: #4450b8"><i></i><b>Magna Aliqua</b><small class="star">★</small></a>
        <a style="--c: #c24a78"><i></i><b>The Library's Home</b><small class="star">★</small></a>
    </div>
    <div class="at-subject">
        <h4>Holds<small>3 projects</small></h4>
        <a class="on" style="--c: #e07a35"><i></i><b>A First Project</b><small>38</small></a>
        <a style="--c: #1f8a78"><i></i><b>A Second Project</b><small>91</small></a>
        <a style="--c: #4450b8"><i></i><b>A Third Project</b><small>83</small></a>
        <h4 class="next">My favorites here<small>2</small></h4>
        <a data-go="book" style="--c: #e07a35"><i></i><b>Lorem Ipsum Dolor</b><small class="star">★</small></a>
        <a style="--c: #4450b8"><i></i><b>Magna Aliqua</b><small class="star">★</small></a>
    </div>
    <div class="at-book at-chat">
        <h4>Holds<small>8 chapters</small></h4>
        <a class="first" data-go="chat" style="--c: #e07a35"><i></i><b>A First Chapter</b><small>1</small></a>
        <a style="--c: #e07a35"><i></i><b>A Second Chapter</b><small>2</small></a>
        <a style="--c: #e07a35"><i></i><b>A Third Chapter</b><small>3</small></a>
        <a style="--c: #e07a35"><i></i><b>A Fourth Chapter</b><small>4</small></a>
        <a style="--c: #e07a35"><i></i><b>A Fifth Chapter</b><small>5</small></a>
    </div>
    <div class="at-author">
        <h4>My books<small>3</small></h4>
        <a class="on" style="--c: var(--me)"><i></i><b>Dougs Story</b><small>3</small></a>
        <a style="--c: #c24a78"><i></i><b>Dougs Design</b><small>5</small></a>
        <a style="--c: #7a4a8c"><i></i><b>Dougs Reference Manual</b><small>3</small></a>
    </div>
</aside>
</div>

<section class="sub">
    <div class="title">
        <div class="chain">
            <em>Filed under</em>
            <span class="at-library">itself</span>
            <span class="at-subject"><a data-go="library">Dougs Library</a></span>
            <span class="at-book"><a data-go="subject">Conversations with Claude</a><i>›</i><a data-go="subject">A First Project</a></span>
            <span class="at-chat"><a data-go="subject">Conversations with Claude</a><i>›</i><a data-go="subject">A First Project</a><i>›</i><a data-go="book">Lorem Ipsum Dolor</a></span>
            <span class="at-author"><a data-go="library">Dougs Library</a></span>
        </div>
        <h1 class="at-library">Dougs Library</h1>
        <h1 class="at-subject">Conversations with Claude</h1>
        <h1 class="at-book">Lorem Ipsum Dolor</h1>
        <h1 class="at-chat">A First Chapter</h1>
        <h1 class="at-author">Dougs Story</h1>
        <p class="at-library">by <a class="to-me" data-go="author">The Librarian</a> · three books and two subjects · 359 conversations kept</p>
        <p class="at-subject">a subject · 212 books in three projects · by <a class="to-me" data-go="author">The Librarian</a></p>
        <p class="at-book">by <a class="to-me" data-go="author">The Librarian</a> and Claude · 8 chapters · kept 9 Sep 2026</p>
        <p class="at-chat">chapter 1 of 8 · <a class="to-me" data-go="author">The Librarian</a> and Claude · kept 9 Sep 2026</p>
        <p class="at-author">The Librarian · my own account</p>
    </div>
    <div class="tools">
        <div class="at-subject">
            <span class="seg"><span class="on" data-view-is="shelf">Shelf</span><span data-view-is="list">List</span><span>Table</span></span>
            <span class="find"><svg viewBox="0 0 16 16"><circle cx="7" cy="7" r="4.5"/><path d="M10.5 10.5 14 14"/></svg>Find in this subject</span>
        </div>
        <div class="at-book">
            <span class="fav"><em class="star">★</em>Among my favorites</span>
            <span class="find"><svg viewBox="0 0 16 16"><circle cx="7" cy="7" r="4.5"/><path d="M10.5 10.5 14 14"/></svg>Find in this book</span>
        </div>
        <div class="at-chat">
            <span class="find"><svg viewBox="0 0 16 16"><path d="M8 3v10M3 8h10"/></svg>Note on a passage</span>
            <span class="find"><svg viewBox="0 0 16 16"><circle cx="7" cy="7" r="4.5"/><path d="M10.5 10.5 14 14"/></svg>Find in this book</span>
        </div>
    </div>
</section>

<main class="thing">
    <div class="at-library">
        <h4>Subjects</h4>
        <div class="tiles">
            <a class="tile" data-go="subject" style="--t: #dff3fa; --c: var(--sea)"><i></i><b>Conversations with Claude</b><small>212 books in three projects</small></a>
            <a class="tile" style="--t: #dcf5ee; --c: #1f8a78"><i></i><b>Conversations with ChatGPT</b><small>147 books</small></a>
        </div>
        <h4>My books</h4>
        <div class="mines">
            <a class="cover mine" data-go="author"><b>Dougs Story</b><small>my own account</small></a>
            <a class="cover mine"><b>Dougs Design</b><small>the design</small></a>
            <a class="cover mine"><b>Dougs Reference Manual</b><small>the parts</small></a>
        </div>
    </div>

    <div class="at-subject">
        <div class="go">
            <span class="cover"><b>Lorem Ipsum Dolor</b><small>with Claude</small></span>
            <div>
                <em>Continue</em>
                <h2>Lorem Ipsum Dolor</h2>
                <p>A First Project · kept 9 September 2026. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                <u><i></i></u>
                <small>Chapter 1 of 8 · 2 notes of mine · cited twice</small>
            </div>
            <a class="read" data-go="chat">Read</a>
        </div>
        <h4>Lately kept<small>212 books · newest first</small></h4>
        <div class="shelf">
            <a class="bk" data-go="book"><span class="cover"><b>Lorem Ipsum Dolor</b><small>with Claude</small></span><b class="name">Lorem Ipsum Dolor</b><p>9 Sep · 8 chapters <em class="star">★</em></p></a>
            <a class="bk"><span class="cover"><b>Quis Nostrud</b><small>with Claude</small></span><b class="name">Quis Nostrud</b><p>1 Oct · 6 chapters</p></a>
            <a class="bk"><span class="cover"><b>Magna Aliqua</b><small>with Claude</small></span><b class="name">Magna Aliqua</b><p>20 Sep · 11 chapters <em class="star">★</em></p></a>
            <a class="bk"><span class="cover"><b>Tempor Incididunt</b><small>with Claude</small></span><b class="name">Tempor Incididunt</b><p>12 Sep · 7 chapters</p></a>
            <a class="bk"><span class="cover"><b>Ut Enim ad Minim</b><small>with Claude</small></span><b class="name">Ut Enim ad Minim</b><p>27 Sep · 3 chapters</p></a>
            <a class="bk"><span class="cover"><b>Sed Do Eiusmod</b><small>with Claude</small></span><b class="name">Sed Do Eiusmod</b><p>5 Sep · 2 chapters</p></a>
            <a class="bk"><span class="cover"><b>Adipiscing Elit</b><small>with Claude</small></span><b class="name">Adipiscing Elit</b><p>2 Sep · 9 chapters</p></a>
            <a class="bk"><span class="cover"><b>Sit Amet Consectetur</b><small>with Claude</small></span><b class="name">Sit Amet Consectetur</b><p>21 Jul · 14 chapters</p></a>
            <a class="bk"><span class="cover"><b>Duis Aute Irure</b><small>with Claude</small></span><b class="name">Duis Aute Irure</b><p>14 Jul · 5 chapters</p></a>
            <a class="bk"><span class="cover"><b>Excepteur Sint</b><small>with Claude</small></span><b class="name">Excepteur Sint</b><p>2 Jul · 4 chapters</p></a>
        </div>
    </div>

    <div class="open at-book">
        <span class="cover big"><b>Lorem Ipsum Dolor</b><small>with Claude</small></span>
        <div class="words">
            <p class="says">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
            <a class="read" data-go="chat">Read from A First Chapter<svg viewBox="0 0 16 16"><path d="M3 8h10M9 4l4 4-4 4"/></svg></a>
        </div>
    </div>

    <div class="chat at-chat">
        <div class="mine"><span class="who">The Librarian</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit? Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
        <div class="theirs">
            <span class="who">Claude</span>
            <p>Ut enim ad minim veniam, quis nostrud exercitation. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <mark>Excepteur sint occaecat cupidatat non proident</mark><sup>1</sup>, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
<pre>const lorem = ipsum.dolor('sit amet');
return lorem.consectetur();</pre>
            <a class="made"><i>◇</i><span><b>Lorem Ipsum, a first draft</b><small>made in this turn · opens beside the page</small></span></a>
        </div>
        <div class="mine"><span class="who">The Librarian</span>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit?</div>
        <div class="theirs">
            <span class="who">Claude</span>
            <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.</p>
        </div>
        <div class="turns"><span></span><a>A Second Chapter →</a></div>
    </div>

    <div class="person at-author">
        <span class="face">D</span>
        <div class="words">
            <p class="says">My own account, and the one book here that is by its own subject. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            <div class="counts"><span><b>3</b>books written</span><span><b>359</b>conversations kept</span><span><b>41</b>notes</span></div>
            <div class="mines">
                <a class="cover mine"><b>Dougs Story</b><small>my own account</small></a>
                <a class="cover mine"><b>Dougs Design</b><small>the design</small></a>
                <a class="cover mine"><b>Dougs Reference Manual</b><small>the parts</small></a>
            </div>
        </div>
    </div>
</main>

<aside class="across">
    <a class="return to-book" data-go="book"><svg viewBox="0 0 16 16"><path d="M13 8H3M7 4 3 8l4 4"/></svg>Back to Lorem Ipsum Dolor</a>
    <a class="return to-subject" data-go="subject"><svg viewBox="0 0 16 16"><path d="M13 8H3M7 4 3 8l4 4"/></svg>Back to Conversations with Claude</a>

    <div class="at-library">
        <h4>Lately kept</h4>
        <a class="ref" style="--c: #c2413f"><span class="to"><i></i>Quis Nostrud</span><p>1 Oct · Conversations with Claude</p></a>
        <a class="ref" style="--c: #7a4a8c"><span class="to"><i></i>Ut Enim ad Minim</span><p>27 Sep · Conversations with Claude</p></a>
        <h4 class="next">My notes<small>41</small></h4>
        <div class="note"><b>3 Oct 2026 · in Lorem Ipsum Dolor</b>Lorem ipsum, a note of mine beside the passage it is about.</div>
    </div>

    <div class="at-subject">
        <h4>Cited from outside<small>2</small></h4>
        <a class="ref" data-go="author" data-from="subject" style="--c: var(--me)"><span class="to"><svg viewBox="0 0 16 16"><path d="M13 8H3M7 4 3 8l4 4"/></svg><i></i>Dougs Story</span><p>chapter 1 cites Lorem Ipsum Dolor</p></a>
        <a class="ref" style="--c: #1f8a78"><span class="to"><svg viewBox="0 0 16 16"><path d="M13 8H3M7 4 3 8l4 4"/></svg><i></i>Conversations with ChatGPT</span><p>one book cites Adipiscing Elit</p></a>
        <h4 class="next">My notes here<small>12</small></h4>
        <div class="note"><b>3 Oct 2026 · in Lorem Ipsum Dolor</b>Lorem ipsum, a note of mine beside the passage it is about.</div>
    </div>

    <div class="at-book at-chat">
        <h4>Cites<small>1</small></h4>
        <a class="ref" style="--c: #3d7a4e"><span class="to"><svg viewBox="0 0 16 16"><path d="M3 8h10M9 4l4 4-4 4"/></svg><i></i>Adipiscing Elit</span><p>chapter 2 · A First Project</p></a>
        <h4 class="next">Cited by<small>2</small></h4>
        <a class="ref" data-go="author" data-from="book" style="--c: var(--me)"><span class="to"><svg viewBox="0 0 16 16"><path d="M13 8H3M7 4 3 8l4 4"/></svg><i></i>Dougs Story</span><p>chapter 1 · my own account</p><q>Excepteur sint occaecat cupidatat non proident</q></a>
        <a class="ref" style="--c: #c24a78"><span class="to"><svg viewBox="0 0 16 16"><path d="M13 8H3M7 4 3 8l4 4"/></svg><i></i>Sit Amet Consectetur</span><p>chapter 3 · A First Project</p></a>
        <h4 class="next">My notes<small>1</small></h4>
        <div class="note"><b>1 · 3 Oct 2026</b>Lorem ipsum, a note of mine beside the passage it is about.</div>
    </div>

    <div class="at-author">
        <h4>Cites<small>1</small></h4>
        <a class="ref" data-go="book" style="--c: #e07a35"><span class="to"><svg viewBox="0 0 16 16"><path d="M3 8h10M9 4l4 4-4 4"/></svg><i></i>Lorem Ipsum Dolor</span><p>chapter 1 · a conversation with Claude</p><q>Excepteur sint occaecat cupidatat non proident</q></a>
        <h4 class="next">Cited by<small>0</small></h4>
        <div class="note">Nothing cites this chapter yet.</div>
    </div>
</aside>

<script>
    const page = document.documentElement;
    for (const door of document.querySelectorAll('[data-go]'))
        door.addEventListener('click', () => {
            if (door.dataset.from) page.dataset.from = door.dataset.from;
            else delete page.dataset.from;
            page.dataset.at = door.dataset.go;
            window.scrollTo(0, 0);
            for (const column of document.querySelectorAll('.thing, .holds, .across')) column.scrollTop = 0;
        });
    for (const view of document.querySelectorAll('[data-view-is]'))
        view.addEventListener('click', () => {
            page.dataset.view = view.dataset.viewIs;
            for (const other of view.parentElement.children) other.classList.toggle('on', other === view);
        });
<\/script>
</body>
</html>
`})]})]}),a.jsxs(i,{children:[a.jsx(d,{children:"16"}),a.jsx(o,{children:"A White Top Bar and an Opal Side Bar"}),a.jsx(t,{children:"Concept 16, an idea, after the homes I liked, the lighter way."}),a.jsx(t,{children:"Both, lighter: the top bar white, the side bar still the pale opal. The lightest frame that still has two bars."}),a.jsxs(t,{children:[a.jsx(p,{}),a.jsx(r,{children:"/.design/3-every-concept~016-desk.png"}),a.jsx(r,{children:"/.design/3-every-concept~016-phone.png"})]}),a.jsxs(t,{children:[a.jsx(c,{}),a.jsx(n,{children:`<!doctype html>
<html lang="en" data-layout="both" data-tone="light" data-at="subject" data-view="shelf">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>A White Top Bar and an Opal Side Bar</title>
<meta name="number" content="16">
<meta name="state" content="idea">
<meta name="after" content="the homes I liked, the lighter way">
<meta name="idea" content="Both, lighter: the top bar white, the side bar still the pale opal. The lightest frame that still has two bars.">
<meta name="said" content="">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
<style>
    /* ---- what does not change between the ideas ----
       The frame is soft black, the blue between it and white, and white. The soft black #0c1b1f and the opal #c8f4fb are the
       coming-soon page's own; the blues are the hue between them (208 to 223 in OKLCH) walked from dark to light.
       The CONTENT keeps its own colors: every book a cover of its own, the light accents the opal's wave. */
    :root { --night: #0c1b1f; --deep: #14323c; --blue: #166178; --sea: #4e9eb9; --sky: #8fc8dc; --opal: #c8f4fb; --pale: #e3f5fa; --mist: #f1f7f9; --white: #ffffff;
        --ink: #10252c; --soft: #516770; --line: #dbe7ec; --me: #e8590c;
        --wash: linear-gradient(105deg, #e2f6fb 0%, #ecf0fd 52%, #fae9f4 100%);
        --serif: 'Cormorant Garamond', Georgia, serif; --sans: 'Inter', system-ui, sans-serif; }
    [data-tone="dark"] { --bar: var(--night); --bar-fg: #ffffff; --bar-dim: #a9bcc1; --bar-on: rgba(255, 255, 255, .11); --bar-line: #1d3339; --mark: var(--opal); --mark-fg: var(--night); }
    [data-tone="light"] { --bar: var(--white); --bar-fg: var(--ink); --bar-dim: var(--soft); --bar-on: var(--pale); --bar-line: var(--line); --mark: var(--night); --mark-fg: #ffffff; }
    [data-at="library"] [class*="at-"]:not(.at-library), [data-at="subject"] [class*="at-"]:not(.at-subject), [data-at="book"] [class*="at-"]:not(.at-book), [data-at="chat"] [class*="at-"]:not(.at-chat), [data-at="author"] [class*="at-"]:not(.at-author) { display: none !important; }

    * { box-sizing: border-box; margin: 0; }
    body { background: var(--white); color: var(--ink); font: 400 14px/1.5 var(--sans); }
    a { color: inherit; text-decoration: none; }
    svg { width: 15px; height: 15px; stroke: currentColor; fill: none; stroke-width: 1.7; stroke-linecap: round; stroke-linejoin: round; flex: none; }
    [data-go], [data-view-is] { cursor: pointer; }
    h4 { display: flex; align-items: center; gap: 8px; margin-bottom: 10px; font: 600 10.5px/1 var(--sans); letter-spacing: .12em; text-transform: uppercase; color: var(--soft); }
    h4 small { margin-left: auto; font: 400 11.5px/1 var(--sans); letter-spacing: 0; text-transform: none; }
    h4.next { margin-top: 22px; }
    .star { color: var(--me); font-style: normal; }

    /* the library's own things: its mark, its subjects, a way to find, and me. They are held together only where an idea has a side bar. */
    .side { display: contents; }
    [data-at="chat"] .holds a.first { background: var(--bar-on, var(--pale)); }
    .lib { grid-area: lib; display: flex; align-items: center; gap: 6px; min-width: 0; background: var(--bar); color: var(--bar-fg); }
    .logo { display: flex; align-items: center; gap: 10px; flex: none; }
    .logo i { display: grid; place-items: center; width: 30px; height: 30px; border-radius: 8px; background: var(--mark); color: var(--mark-fg); font: 600 15px/1 var(--sans); font-style: normal; }
    .logo b { font: 600 21px/1 var(--serif); white-space: nowrap; }
    .subjects { display: flex; gap: 2px; min-width: 0; }
    .s { display: flex; align-items: center; gap: 8px; padding: 7px 10px; border-radius: 8px; color: var(--bar-dim); font-size: 13.5px; }
    .s i { display: grid; place-items: center; flex: none; width: 9px; height: 9px; border-radius: 50%; background: var(--c); color: #fff; font: 600 0/1 var(--sans); font-style: normal; }
    .s b { font-weight: 500; }
    .s small { font-size: 12px; opacity: .7; }
    :is([data-at="subject"], [data-at="book"], [data-at="chat"]) .s.is-claude { background: var(--bar-on); color: var(--bar-fg); }
    .find { display: flex; align-items: center; gap: 8px; padding: 6px 11px; border-radius: 9px; white-space: nowrap; }
    .lib .find { margin-left: auto; background: var(--bar-on); color: var(--bar-dim); }
    .me { grid-area: me; display: flex; align-items: center; gap: 9px; background: var(--bar); color: var(--bar-fg); }
    .me i { display: grid; place-items: center; flex: none; width: 32px; height: 32px; border-radius: 50%; background: var(--me); color: #fff; font: 600 14px/1 var(--sans); font-style: normal; }
    .me b { display: block; font-weight: 500; line-height: 1.2; white-space: nowrap; }
    .me small { display: block; font-size: 11.5px; opacity: .7; white-space: nowrap; }

    /* the open page's own things: what it is filed under, its name, who it is by, its tools */
    .sub { --sub-fg: var(--ink); --sub-dim: var(--soft); --ctl: var(--mist); --ctl-line: var(--line); --ctl-fg: var(--soft); --on: var(--night); --on-fg: #fff; --lnk: var(--blue); --melnk: var(--me);
        grid-area: sub; display: flex; flex-wrap: wrap; align-items: flex-end; gap: 10px 20px; min-width: 0; padding: 20px 28px 14px; color: var(--sub-fg); }
    .chain { display: flex; align-items: center; gap: 7px; font-size: 12.5px; color: var(--sub-dim); white-space: nowrap; }
    .chain em { font: 600 9.5px/1 var(--sans); font-style: normal; letter-spacing: .12em; text-transform: uppercase; }
    .chain span { display: flex; align-items: center; gap: 7px; }
    .chain i { font-style: normal; opacity: .55; }
    .chain a { font-weight: 500; color: var(--lnk); }
    .title { min-width: 0; }
    h1 { margin-top: 4px; font: 600 36px/1.04 var(--serif); white-space: nowrap; }
    .title p { margin-top: 4px; font-size: 13px; color: var(--sub-dim); }
    .title p a { color: var(--lnk); font-weight: 500; }
    .title p a.to-me { color: var(--melnk); text-decoration: underline; text-decoration-color: var(--me); text-decoration-thickness: 2px; text-underline-offset: 3px; }
    .tools { margin-left: auto; }
    .tools > div { display: flex; flex-wrap: wrap; justify-content: flex-end; align-items: center; gap: 8px; }
    .seg { display: flex; overflow: hidden; border: 1px solid var(--ctl-line); border-radius: 9px; background: var(--ctl); }
    .seg span { padding: 6px 12px; color: var(--ctl-fg); }
    .seg span.on { background: var(--on); color: var(--on-fg); font-weight: 500; }
    .sub .find { border: 1px solid var(--ctl-line); background: var(--ctl); color: var(--ctl-fg); }
    .fav { display: flex; align-items: center; gap: 6px; padding: 6px 11px; border-radius: 9px; background: color-mix(in srgb, var(--me) 12%, white); color: #a8400a; font-weight: 500; white-space: nowrap; }

    /* down: what the open page holds */
    .holds { grid-area: holds; min-width: 0; }
    .holds a { display: flex; align-items: center; gap: 9px; padding: 6px 9px; border-radius: 8px; }
    .holds a i { flex: none; width: 9px; height: 9px; border-radius: 50%; background: var(--c, var(--sea)); }
    .holds a b { font-weight: 500; }
    .holds a small { margin-left: auto; font-size: 12px; color: var(--soft); }
    .holds a.on { background: var(--pale); }

    /* the page itself */
    .thing { grid-area: thing; min-width: 0; }
    .go { display: flex; align-items: center; gap: 20px; margin-bottom: 22px; padding: 16px 20px; border-radius: 16px; background: var(--wash); }
    .go .cover { flex: none; width: 92px; padding: 10px 8px 8px 13px; }
    .go .cover b { font-size: 13.5px; }
    .go .cover small { font-size: 7.5px; padding-top: 6px; }
    .go em { font: 600 10.5px/1 var(--sans); font-style: normal; letter-spacing: .1em; text-transform: uppercase; color: var(--me); }
    .go h2 { margin: 4px 0 2px; font: 600 24px/1.1 var(--serif); }
    .go p { max-width: 52ch; font-size: 13px; color: var(--soft); }
    .go u { display: block; width: 260px; max-width: 100%; height: 4px; margin: 10px 0 6px; border-radius: 9px; background: rgba(12, 27, 31, .1); text-decoration: none; }
    .go u i { display: block; width: 14%; height: 100%; border-radius: 9px; background: var(--me); }
    .go small { font-size: 12px; color: var(--soft); }
    .go .read { margin-left: auto; }
    .read { display: inline-flex; align-items: center; gap: 8px; padding: 9px 18px; border-radius: 99px; background: var(--night); color: #fff; font-weight: 500; white-space: nowrap; }

    /* a cover is the landmark of a book, and every book has a color of its own; my own books are the soft black */
    .cover { position: relative; display: flex; flex-direction: column; aspect-ratio: 3 / 4; padding: 13px 11px 10px 17px; border-radius: 3px 7px 7px 3px; color: #fff; background: linear-gradient(160deg, color-mix(in srgb, var(--c) 90%, white), color-mix(in srgb, var(--c) 86%, black)); box-shadow: 0 12px 22px -14px rgba(12, 27, 31, .55); }
    .cover::before { content: ''; position: absolute; left: 7px; top: 0; bottom: 0; width: 1px; background: rgba(255, 255, 255, .3); }
    .cover b { font: 600 17px/1.08 var(--serif); }
    .cover small { margin-top: auto; padding-top: 8px; border-top: 1px solid rgba(255, 255, 255, .32); font: 600 9px/1.2 var(--sans); letter-spacing: .1em; text-transform: uppercase; opacity: .92; }
    .cover.mine { --c: var(--night); color: var(--opal); background: linear-gradient(160deg, #16303a, var(--night)); }
    .bk:nth-child(8n+1), .open, .go { --c: #e07a35; }
    .bk:nth-child(8n+2) { --c: #c2413f; }
    .bk:nth-child(8n+3) { --c: #4450b8; }
    .bk:nth-child(8n+4) { --c: #1f8a78; }
    .bk:nth-child(8n+5) { --c: #7a4a8c; }
    .bk:nth-child(8n+6) { --c: #2f7fb0; }
    .bk:nth-child(8n+7) { --c: #3d7a4e; }
    .bk:nth-child(8n) { --c: #c24a78; }
    .shelf { display: grid; grid-template-columns: repeat(auto-fill, minmax(124px, 1fr)); gap: 22px 18px; }
    .bk { display: block; }
    .bk .name { display: none; }
    .bk p { display: flex; gap: 6px; margin-top: 8px; font-size: 12px; color: var(--soft); }
    [data-view="list"] .shelf { grid-template-columns: minmax(0, 1fr); gap: 0; }
    [data-view="list"] .bk { display: grid; grid-template-columns: 30px minmax(0, 1fr) auto; gap: 14px; align-items: center; padding: 9px 0; border-bottom: 1px solid var(--line); }
    [data-view="list"] .bk .cover { padding: 0; border-radius: 2px 4px 4px 2px; box-shadow: none; }
    [data-view="list"] .bk .cover::before { left: 4px; }
    [data-view="list"] .bk .cover b, [data-view="list"] .bk .cover small { display: none; }
    [data-view="list"] .bk .name { display: block; font: 600 19px/1.2 var(--serif); }
    [data-view="list"] .bk p { margin: 0; }
    .mines { display: grid; grid-template-columns: repeat(auto-fill, minmax(124px, 148px)); gap: 18px; }

    .tiles { display: grid; grid-template-columns: repeat(auto-fill, minmax(210px, 1fr)); gap: 14px; margin-bottom: 26px; }
    .tile { display: block; padding: 14px 16px 16px; border-radius: 14px; background: var(--t); }
    .tile i { display: block; width: 26px; height: 26px; margin-bottom: 24px; border-radius: 8px; background: var(--c); }
    .tile b { display: block; font: 600 21px/1.1 var(--serif); }
    .tile small { font-size: 12.5px; color: var(--soft); }

    .open, .person { display: flex; gap: 26px; align-items: flex-start; }
    .cover.big { flex: none; width: 180px; padding: 20px 15px 13px 24px; }
    .cover.big b { font-size: 26px; }
    .cover.big::before { left: 11px; }
    .words { min-width: 0; }
    .says { max-width: 56ch; font: 500 20px/1.5 var(--serif); }
    .words .read { margin-top: 18px; }
    .face { display: grid; place-items: center; flex: none; width: 96px; height: 96px; border-radius: 50%; background: var(--me); color: #fff; font: 600 46px/1 var(--serif); box-shadow: 0 0 0 5px var(--white), 0 0 0 6px color-mix(in srgb, var(--me) 45%, white); }
    .counts { display: flex; gap: 26px; margin: 16px 0 22px; color: var(--soft); font-size: 12.5px; }
    .counts b { display: block; font: 600 26px/1.1 var(--serif); color: var(--ink); }

    /* a conversation, in the form of the application it comes from; my turns in my color */
    .chat { display: grid; gap: 20px; max-width: 720px; margin: 0 auto; }
    .chat .who { display: block; margin-bottom: 4px; font: 600 10.5px/1 var(--sans); letter-spacing: .1em; text-transform: uppercase; color: var(--soft); }
    .chat .mine { justify-self: end; max-width: 78%; padding: 11px 16px; border-radius: 18px 18px 4px 18px; background: color-mix(in srgb, var(--me) 9%, white); font-size: 15px; }
    .chat .mine .who { color: var(--me); }
    .chat .theirs p { font: 500 19.5px/1.55 var(--serif); }
    .chat .theirs p + p { margin-top: 10px; }
    .chat mark { padding: 1px 3px; border-radius: 3px; background: var(--pale); color: inherit; }
    .chat sup { margin-left: 2px; font: 600 10.5px/1 var(--sans); color: var(--me); }
    .chat pre { margin: 12px 0; padding: 12px 14px; border-radius: 10px; background: var(--night); color: #d7e6ea; font: 400 12.5px/1.6 ui-monospace, 'Cascadia Code', Consolas, monospace; overflow: auto; }
    .chat .made { display: flex; align-items: center; gap: 10px; width: fit-content; margin-top: 12px; padding: 9px 13px; border: 1px solid var(--line); border-radius: 12px; font-size: 13px; }
    .chat .made i { display: grid; place-items: center; width: 30px; height: 30px; border-radius: 8px; background: var(--pale); color: var(--blue); font-style: normal; }
    .chat .made small { display: block; color: var(--soft); font-size: 12px; }
    .chat .turns { display: flex; justify-content: space-between; padding-top: 16px; border-top: 1px solid var(--line); color: var(--blue); font-weight: 500; }

    /* across: what it cites, what cites it, and what I wrote beside it */
    .across { grid-area: across; min-width: 0; }
    .ref { display: block; margin-bottom: 8px; padding: 10px 12px; border: 1px solid var(--line); border-radius: 12px; background: var(--white); }
    .ref .to { display: flex; align-items: center; gap: 7px; font-weight: 600; }
    .ref .to svg { color: var(--soft); }
    .ref .to i { flex: none; width: 9px; height: 9px; border-radius: 50%; background: var(--c, var(--sea)); }
    .ref p { margin-top: 2px; font-size: 12.5px; color: var(--soft); }
    .ref q { display: block; margin-top: 7px; padding: 6px 9px; border-radius: 7px; background: var(--pale); font: italic 500 15.5px/1.35 var(--serif); quotes: '“' '”'; }
    .note { padding: 10px 12px; border: 1px dashed var(--line); border-radius: 12px; font-size: 13px; color: var(--soft); }
    .note b { display: block; margin-bottom: 2px; color: var(--ink); font-weight: 500; }
    .return { display: none; align-items: center; gap: 8px; margin-bottom: 14px; padding: 9px 12px; border-radius: 10px; background: var(--night); color: #fff; font-weight: 500; }
    .return svg { color: var(--sky); }
    [data-at="author"][data-from="book"] .return.to-book, [data-at="author"][data-from="subject"] .return.to-subject { display: flex; }

    /* ---- what each idea colors, at every width ---- */
    [data-layout="both"] .holds { background: var(--pale); }
    [data-layout="both"] .holds a.on { background: var(--white); }
    [data-layout="rail"][data-tone="dark"] .sub { --sub-fg: #fff; --sub-dim: rgba(255, 255, 255, .8); --ctl: rgba(12, 27, 31, .26); --ctl-line: transparent; --ctl-fg: #fff; --on: #fff; --on-fg: var(--night); --lnk: #fff; --melnk: #fff; background: var(--blue); }
    [data-layout="rail"][data-tone="dark"] .fav { background: #fff; }
    [data-layout="rail"][data-tone="light"] { --bar: var(--pale); --bar-on: #fff; --bar-line: #cbe6ee; }
    [data-layout="two"][data-tone="dark"] .sub { --sub-dim: #27505c; --ctl: rgba(255, 255, 255, .62); --ctl-line: transparent; --ctl-fg: var(--ink); --lnk: var(--deep); background: var(--sky); }
    [data-layout="two"][data-tone="light"] .sub { --ctl: #fff; background: var(--pale); }
    [data-layout="side"][data-tone="light"] { --bar: var(--mist); --bar-on: #fff; }
    [data-layout="cards"][data-tone="light"] { --canvas: #e9f2f5; --bar-on: #fff; }
    [data-layout="cards"][data-tone="dark"] { --canvas: var(--night); }
    [data-layout="cards"] body, [data-layout="cards"] .lib, [data-layout="cards"] .me { background: var(--canvas); }
    [data-layout="cards"] :is(.sub, .holds, .thing, .across) { background: var(--white); }
    :is([data-layout="header"], [data-layout="both"], [data-layout="two"], [data-layout="cards"]):is([data-at="subject"], [data-at="book"], [data-at="chat"]) .s.is-claude { box-shadow: inset 0 -2px 0 var(--c); }

    /* ---- at a desk: where each idea puts the bars ---- */
    @media (min-width: 761px) {
        html, body { height: 100%; }
        body { display: grid; overflow: hidden; }
        .thing { padding: 20px 28px 40px; overflow: auto; }
        .holds { padding: 18px 12px; overflow: auto; }
        .across { padding: 18px 16px; overflow: auto; border-left: 1px solid var(--line); }

        /* a bar across the top holds the library, with me at its right end */
        :is([data-layout="header"], [data-layout="both"], [data-layout="two"], [data-layout="cards"]) .lib { padding: 9px 170px 9px 18px; }
        :is([data-layout="header"], [data-layout="both"], [data-layout="two"], [data-layout="cards"]) .logo { margin-right: 12px; }
        :is([data-layout="header"], [data-layout="both"], [data-layout="two"], [data-layout="cards"]) :is(.s small, .me small, .lib .find em) { display: none; }
        :is([data-layout="header"], [data-layout="both"], [data-layout="two"], [data-layout="cards"]) .me { grid-area: lib; justify-self: end; z-index: 1; padding: 0 18px 0 8px; background: none; }
        [data-tone="light"]:is([data-layout="header"], [data-layout="both"], [data-layout="two"]) .lib { border-bottom: 1px solid var(--line); }

        [data-layout="header"] body { grid-template: auto auto auto minmax(0, 1fr) / minmax(0, 1fr) 300px; grid-template-areas: "lib lib" "sub sub" "holds holds" "thing across"; }
        [data-layout="both"] body { grid-template: auto auto minmax(0, 1fr) / 240px minmax(0, 1fr) 300px; grid-template-areas: "lib lib lib" "holds sub sub" "holds thing across"; }
        [data-layout="both"] .holds { padding: 20px 12px; border-right: 1px solid #cbe6ee; }
        [data-layout="two"] body { grid-template: auto auto minmax(0, 1fr) / 236px minmax(0, 1fr) 300px; grid-template-areas: "lib lib lib" "sub sub sub" "holds thing across"; }
        [data-layout="two"] .sub { align-items: center; padding: 9px 24px; }
        [data-layout="two"] .title { display: flex; flex-wrap: wrap; align-items: baseline; gap: 4px 16px; }
        [data-layout="two"] h1 { margin: 0; font-size: 26px; order: -1; }
        [data-layout="two"] .title p { display: none; }
        [data-layout="two"] .holds { border-right: 1px solid var(--line); }
        [data-layout="cards"] body { grid-template: auto auto minmax(0, 1fr) / 244px minmax(0, 1fr) 300px; grid-template-areas: "lib lib lib" "holds sub across" "holds thing across"; column-gap: 12px; padding: 0 12px 12px; }
        [data-layout="cards"] .lib { padding: 11px 170px 11px 6px; }
        [data-layout="cards"] .me { padding: 0 6px; }
        [data-layout="cards"] :is(.holds, .across) { border: 0; border-radius: 16px; }
        [data-layout="cards"] .sub { border-radius: 16px 16px 0 0; }
        [data-layout="cards"] .thing { border-radius: 0 0 16px 16px; }

        /* a bar down the left holds the library, with me at its foot */
        [data-layout="side"] body { grid-template: auto minmax(0, 1fr) / 256px minmax(0, 1fr) 300px; grid-template-areas: "side sub sub" "side thing across"; }
        [data-layout="side"] .side { grid-area: side; display: flex; flex-direction: column; min-height: 0; background: var(--bar); }
        [data-layout="side"] .holds { flex: 1; order: 1; }
        [data-layout="side"] .me { order: 2; }
        [data-layout="side"] .lib { flex-direction: column; align-items: stretch; gap: 2px; padding: 18px 12px 12px; }
        [data-layout="side"] .logo { padding: 0 6px 14px; }
        [data-layout="side"] .subjects { flex-direction: column; }
        [data-layout="side"] .s small { margin-left: auto; }
        [data-layout="side"] .lib .find { margin: 10px 0 0; }
        [data-layout="side"] .holds { padding: 14px 12px; border-top: 1px solid var(--bar-line); background: var(--bar); color: var(--bar-fg); }
        [data-layout="side"] .holds h4, [data-layout="side"] .holds a small { color: var(--bar-dim); }
        [data-layout="side"] .holds a.on { background: var(--bar-on); }
        [data-layout="side"] .me { padding: 12px 18px 14px; border-top: 1px solid var(--bar-line); }
        [data-layout="side"][data-tone="light"] .side { border-right: 1px solid var(--line); }

        /* a narrow rail holds the subjects as marks and me as a face */
        [data-layout="rail"] body { grid-template: auto auto minmax(0, 1fr) auto / 68px minmax(0, 1fr) 300px; grid-template-areas: "lib sub sub" "lib holds holds" "lib thing across" "me thing across"; }
        [data-layout="rail"] .lib { flex-direction: column; gap: 12px; padding: 14px 0; }
        [data-layout="rail"] :is(.logo b, .lib .find, .s b, .s small, .me span) { display: none; }
        [data-layout="rail"] .subjects { flex-direction: column; align-items: center; gap: 10px; }
        [data-layout="rail"] .s { padding: 0; background: none; }
        [data-layout="rail"] :is(.s i, .logo i, .me i) { width: 40px; height: 40px; border-radius: 11px; font-size: 13px; }
        [data-layout="rail"] .logo i, [data-layout="rail"] .me i { font-size: 16px; }
        [data-layout="rail"] .me i { border-radius: 50%; }
        [data-layout="rail"]:is([data-at="subject"], [data-at="book"], [data-at="chat"]) .s.is-claude i { box-shadow: 0 0 0 2px var(--bar), 0 0 0 4px var(--c); }
        [data-layout="rail"] .me { justify-content: center; padding: 10px 0 14px; }
        [data-layout="rail"] .sub { padding: 16px 26px 14px; }
        [data-layout="rail"][data-tone="light"] :is(.lib, .me) { border-right: 1px solid #cbe6ee; }

        /* with no side bar, what the page holds is a row under its name */
        :is([data-layout="header"], [data-layout="rail"]) .holds { padding: 12px 28px; overflow: auto hidden; border-bottom: 1px solid var(--line); scrollbar-width: none; }
        [data-layout="header"] .holds { padding-top: 0; }
        :is([data-layout="header"], [data-layout="rail"]) .holds > div { display: flex; align-items: center; gap: 6px; }
        :is([data-layout="header"], [data-layout="rail"]) .holds h4 { flex: none; margin: 0 6px 0 0; }
        :is([data-layout="header"], [data-layout="rail"]) .holds h4.next { margin-left: 18px; }
        :is([data-layout="header"], [data-layout="rail"]) .holds h4 small { display: none; }
        :is([data-layout="header"], [data-layout="rail"]) .holds a { flex: none; padding: 5px 11px 5px 9px; border: 1px solid var(--line); border-radius: 99px; white-space: nowrap; }
        :is([data-layout="header"], [data-layout="rail"]) .holds a small { margin-left: 4px; }
        :is([data-layout="header"], [data-layout="rail"]) .holds a.on { border-color: transparent; }
    }

    /* ---- on a phone: one bar at the top, the page beneath it in one column ---- */
    @media (max-width: 760px) {
        body { position: relative; display: flex; flex-direction: column; }
        .sub { order: 1; }
        .holds { order: 2; }
        .thing { order: 3; }
        .across { order: 4; }
        .lib { position: sticky; top: 0; z-index: 4; height: 50px; margin-right: 54px; padding: 0 8px 0 14px; gap: 4px; overflow: auto hidden; scrollbar-width: none; }
        .logo { margin-right: 8px; }
        .logo b { font-size: 19px; }
        .s { white-space: nowrap; }
        .s small, .lib .find, .me span { display: none; }
        .me { position: fixed; z-index: 5; top: 0; right: 0; justify-content: center; width: 54px; height: 50px; }
        [data-tone="light"] :is(.lib, .me) { border-bottom: 1px solid var(--line); }
        .sub { flex-direction: column; flex-wrap: nowrap; align-items: stretch; padding: 16px 16px 12px; }
        h1 { font-size: 28px; white-space: normal; }
        .chain { overflow: auto hidden; scrollbar-width: none; }
        .tools { margin: 0; }
        .tools > div { justify-content: flex-start; }
        .holds { padding: 10px 16px 12px; overflow: auto hidden; border-bottom: 1px solid var(--line); scrollbar-width: none; }
        .holds > div { display: flex; align-items: center; gap: 6px; }
        .holds h4 { flex: none; margin: 0 6px 0 0; }
        .holds h4.next { margin-left: 18px; }
        .holds h4 small { display: none; }
        .holds a { flex: none; padding: 5px 11px 5px 9px; border: 1px solid var(--line); border-radius: 99px; background: var(--white); white-space: nowrap; }
        .holds a small { margin-left: 4px; }
        .thing { padding: 16px 16px 24px; }
        .go { flex-wrap: wrap; gap: 14px; padding: 14px; }
        .go > div { flex: 1 1 60%; min-width: 0; }
        .go .read { margin: 0; }
        .shelf { grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 16px 12px; }
        .cover { padding: 10px 8px 8px 13px; }
        .cover b { font-size: 14.5px; }
        .open, .person { flex-direction: column; gap: 16px; }
        .cover.big { width: 150px; }
        .cover.big b { font-size: 22px; }
        .counts { gap: 18px; }
        .chat .mine { max-width: 88%; }
        .across { padding: 16px; border-top: 1px solid var(--line); }

        /* a side bar or a rail turns to lie along the foot, the subjects as marks */
        :is([data-layout="side"], [data-layout="rail"]) body { padding-bottom: 60px; }
        :is([data-layout="side"], [data-layout="rail"]) .subjects { position: fixed; z-index: 4; left: 0; right: 0; bottom: 0; justify-content: space-around; padding: 8px 10px; border-top: 1px solid var(--bar-line); background: var(--bar); }
        :is([data-layout="side"], [data-layout="rail"]) .s { padding: 0; background: none; box-shadow: none; }
        :is([data-layout="side"], [data-layout="rail"]) .s b { display: none; }
        :is([data-layout="side"], [data-layout="rail"]) .s i { width: 42px; height: 42px; border-radius: 12px; font-size: 13px; }
        :is([data-layout="side"], [data-layout="rail"]):is([data-at="subject"], [data-at="book"], [data-at="chat"]) .s.is-claude i { box-shadow: 0 0 0 2px var(--bar), 0 0 0 4px var(--c); }

        [data-layout="two"] .sub { padding: 12px 16px; }
        [data-layout="two"] .title p { display: none; }
        [data-layout="cards"] body { padding-bottom: 10px; }
        [data-layout="cards"] :is(.sub, .holds, .thing, .across) { margin: 0 10px; }
        [data-layout="cards"] .sub { margin-top: 4px; border-radius: 14px 14px 0 0; }
        [data-layout="cards"] .thing { border-radius: 0 0 14px 14px; }
        [data-layout="cards"] .across { margin-top: 10px; border: 0; border-radius: 14px; }
    }
</style>
</head>
<body>

<div class="side">
<header class="lib">
    <a class="logo" data-go="library"><i>D</i><b>Dougs Library</b></a>
    <nav class="subjects">
        <a class="s is-claude" data-go="subject" style="--c: var(--sea)"><i>Cl</i><b>Conversations with Claude</b><small>212</small></a>
        <a class="s" style="--c: #1f8a78"><i>Ch</i><b>Conversations with ChatGPT</b><small>147</small></a>
        <a class="s" style="--c: #c24a78"><i>De</i><b>Dougs Design</b><small>5</small></a>
        <a class="s" style="--c: #7a4a8c"><i>Rm</i><b>Dougs Reference Manual</b><small>3</small></a>
    </nav>
    <span class="find"><svg viewBox="0 0 16 16"><circle cx="7" cy="7" r="4.5"/><path d="M10.5 10.5 14 14"/></svg><em style="font-style: normal">Find in the library</em></span>
</header>

<a class="me" data-go="author"><i>D</i><span><b>The Librarian</b><small>my own account</small></span></a>

<aside class="holds">
    <div class="at-library">
        <h4>My favorites<small>3</small></h4>
        <a data-go="book" style="--c: #e07a35"><i></i><b>Lorem Ipsum Dolor</b><small class="star">★</small></a>
        <a style="--c: #4450b8"><i></i><b>Magna Aliqua</b><small class="star">★</small></a>
        <a style="--c: #c24a78"><i></i><b>The Library's Home</b><small class="star">★</small></a>
    </div>
    <div class="at-subject">
        <h4>Holds<small>3 projects</small></h4>
        <a class="on" style="--c: #e07a35"><i></i><b>A First Project</b><small>38</small></a>
        <a style="--c: #1f8a78"><i></i><b>A Second Project</b><small>91</small></a>
        <a style="--c: #4450b8"><i></i><b>A Third Project</b><small>83</small></a>
        <h4 class="next">My favorites here<small>2</small></h4>
        <a data-go="book" style="--c: #e07a35"><i></i><b>Lorem Ipsum Dolor</b><small class="star">★</small></a>
        <a style="--c: #4450b8"><i></i><b>Magna Aliqua</b><small class="star">★</small></a>
    </div>
    <div class="at-book at-chat">
        <h4>Holds<small>8 chapters</small></h4>
        <a class="first" data-go="chat" style="--c: #e07a35"><i></i><b>A First Chapter</b><small>1</small></a>
        <a style="--c: #e07a35"><i></i><b>A Second Chapter</b><small>2</small></a>
        <a style="--c: #e07a35"><i></i><b>A Third Chapter</b><small>3</small></a>
        <a style="--c: #e07a35"><i></i><b>A Fourth Chapter</b><small>4</small></a>
        <a style="--c: #e07a35"><i></i><b>A Fifth Chapter</b><small>5</small></a>
    </div>
    <div class="at-author">
        <h4>My books<small>3</small></h4>
        <a class="on" style="--c: var(--me)"><i></i><b>Dougs Story</b><small>3</small></a>
        <a style="--c: #c24a78"><i></i><b>Dougs Design</b><small>5</small></a>
        <a style="--c: #7a4a8c"><i></i><b>Dougs Reference Manual</b><small>3</small></a>
    </div>
</aside>
</div>

<section class="sub">
    <div class="title">
        <div class="chain">
            <em>Filed under</em>
            <span class="at-library">itself</span>
            <span class="at-subject"><a data-go="library">Dougs Library</a></span>
            <span class="at-book"><a data-go="subject">Conversations with Claude</a><i>›</i><a data-go="subject">A First Project</a></span>
            <span class="at-chat"><a data-go="subject">Conversations with Claude</a><i>›</i><a data-go="subject">A First Project</a><i>›</i><a data-go="book">Lorem Ipsum Dolor</a></span>
            <span class="at-author"><a data-go="library">Dougs Library</a></span>
        </div>
        <h1 class="at-library">Dougs Library</h1>
        <h1 class="at-subject">Conversations with Claude</h1>
        <h1 class="at-book">Lorem Ipsum Dolor</h1>
        <h1 class="at-chat">A First Chapter</h1>
        <h1 class="at-author">Dougs Story</h1>
        <p class="at-library">by <a class="to-me" data-go="author">The Librarian</a> · three books and two subjects · 359 conversations kept</p>
        <p class="at-subject">a subject · 212 books in three projects · by <a class="to-me" data-go="author">The Librarian</a></p>
        <p class="at-book">by <a class="to-me" data-go="author">The Librarian</a> and Claude · 8 chapters · kept 9 Sep 2026</p>
        <p class="at-chat">chapter 1 of 8 · <a class="to-me" data-go="author">The Librarian</a> and Claude · kept 9 Sep 2026</p>
        <p class="at-author">The Librarian · my own account</p>
    </div>
    <div class="tools">
        <div class="at-subject">
            <span class="seg"><span class="on" data-view-is="shelf">Shelf</span><span data-view-is="list">List</span><span>Table</span></span>
            <span class="find"><svg viewBox="0 0 16 16"><circle cx="7" cy="7" r="4.5"/><path d="M10.5 10.5 14 14"/></svg>Find in this subject</span>
        </div>
        <div class="at-book">
            <span class="fav"><em class="star">★</em>Among my favorites</span>
            <span class="find"><svg viewBox="0 0 16 16"><circle cx="7" cy="7" r="4.5"/><path d="M10.5 10.5 14 14"/></svg>Find in this book</span>
        </div>
        <div class="at-chat">
            <span class="find"><svg viewBox="0 0 16 16"><path d="M8 3v10M3 8h10"/></svg>Note on a passage</span>
            <span class="find"><svg viewBox="0 0 16 16"><circle cx="7" cy="7" r="4.5"/><path d="M10.5 10.5 14 14"/></svg>Find in this book</span>
        </div>
    </div>
</section>

<main class="thing">
    <div class="at-library">
        <h4>Subjects</h4>
        <div class="tiles">
            <a class="tile" data-go="subject" style="--t: #dff3fa; --c: var(--sea)"><i></i><b>Conversations with Claude</b><small>212 books in three projects</small></a>
            <a class="tile" style="--t: #dcf5ee; --c: #1f8a78"><i></i><b>Conversations with ChatGPT</b><small>147 books</small></a>
        </div>
        <h4>My books</h4>
        <div class="mines">
            <a class="cover mine" data-go="author"><b>Dougs Story</b><small>my own account</small></a>
            <a class="cover mine"><b>Dougs Design</b><small>the design</small></a>
            <a class="cover mine"><b>Dougs Reference Manual</b><small>the parts</small></a>
        </div>
    </div>

    <div class="at-subject">
        <div class="go">
            <span class="cover"><b>Lorem Ipsum Dolor</b><small>with Claude</small></span>
            <div>
                <em>Continue</em>
                <h2>Lorem Ipsum Dolor</h2>
                <p>A First Project · kept 9 September 2026. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                <u><i></i></u>
                <small>Chapter 1 of 8 · 2 notes of mine · cited twice</small>
            </div>
            <a class="read" data-go="chat">Read</a>
        </div>
        <h4>Lately kept<small>212 books · newest first</small></h4>
        <div class="shelf">
            <a class="bk" data-go="book"><span class="cover"><b>Lorem Ipsum Dolor</b><small>with Claude</small></span><b class="name">Lorem Ipsum Dolor</b><p>9 Sep · 8 chapters <em class="star">★</em></p></a>
            <a class="bk"><span class="cover"><b>Quis Nostrud</b><small>with Claude</small></span><b class="name">Quis Nostrud</b><p>1 Oct · 6 chapters</p></a>
            <a class="bk"><span class="cover"><b>Magna Aliqua</b><small>with Claude</small></span><b class="name">Magna Aliqua</b><p>20 Sep · 11 chapters <em class="star">★</em></p></a>
            <a class="bk"><span class="cover"><b>Tempor Incididunt</b><small>with Claude</small></span><b class="name">Tempor Incididunt</b><p>12 Sep · 7 chapters</p></a>
            <a class="bk"><span class="cover"><b>Ut Enim ad Minim</b><small>with Claude</small></span><b class="name">Ut Enim ad Minim</b><p>27 Sep · 3 chapters</p></a>
            <a class="bk"><span class="cover"><b>Sed Do Eiusmod</b><small>with Claude</small></span><b class="name">Sed Do Eiusmod</b><p>5 Sep · 2 chapters</p></a>
            <a class="bk"><span class="cover"><b>Adipiscing Elit</b><small>with Claude</small></span><b class="name">Adipiscing Elit</b><p>2 Sep · 9 chapters</p></a>
            <a class="bk"><span class="cover"><b>Sit Amet Consectetur</b><small>with Claude</small></span><b class="name">Sit Amet Consectetur</b><p>21 Jul · 14 chapters</p></a>
            <a class="bk"><span class="cover"><b>Duis Aute Irure</b><small>with Claude</small></span><b class="name">Duis Aute Irure</b><p>14 Jul · 5 chapters</p></a>
            <a class="bk"><span class="cover"><b>Excepteur Sint</b><small>with Claude</small></span><b class="name">Excepteur Sint</b><p>2 Jul · 4 chapters</p></a>
        </div>
    </div>

    <div class="open at-book">
        <span class="cover big"><b>Lorem Ipsum Dolor</b><small>with Claude</small></span>
        <div class="words">
            <p class="says">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
            <a class="read" data-go="chat">Read from A First Chapter<svg viewBox="0 0 16 16"><path d="M3 8h10M9 4l4 4-4 4"/></svg></a>
        </div>
    </div>

    <div class="chat at-chat">
        <div class="mine"><span class="who">The Librarian</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit? Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
        <div class="theirs">
            <span class="who">Claude</span>
            <p>Ut enim ad minim veniam, quis nostrud exercitation. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <mark>Excepteur sint occaecat cupidatat non proident</mark><sup>1</sup>, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
<pre>const lorem = ipsum.dolor('sit amet');
return lorem.consectetur();</pre>
            <a class="made"><i>◇</i><span><b>Lorem Ipsum, a first draft</b><small>made in this turn · opens beside the page</small></span></a>
        </div>
        <div class="mine"><span class="who">The Librarian</span>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit?</div>
        <div class="theirs">
            <span class="who">Claude</span>
            <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.</p>
        </div>
        <div class="turns"><span></span><a>A Second Chapter →</a></div>
    </div>

    <div class="person at-author">
        <span class="face">D</span>
        <div class="words">
            <p class="says">My own account, and the one book here that is by its own subject. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            <div class="counts"><span><b>3</b>books written</span><span><b>359</b>conversations kept</span><span><b>41</b>notes</span></div>
            <div class="mines">
                <a class="cover mine"><b>Dougs Story</b><small>my own account</small></a>
                <a class="cover mine"><b>Dougs Design</b><small>the design</small></a>
                <a class="cover mine"><b>Dougs Reference Manual</b><small>the parts</small></a>
            </div>
        </div>
    </div>
</main>

<aside class="across">
    <a class="return to-book" data-go="book"><svg viewBox="0 0 16 16"><path d="M13 8H3M7 4 3 8l4 4"/></svg>Back to Lorem Ipsum Dolor</a>
    <a class="return to-subject" data-go="subject"><svg viewBox="0 0 16 16"><path d="M13 8H3M7 4 3 8l4 4"/></svg>Back to Conversations with Claude</a>

    <div class="at-library">
        <h4>Lately kept</h4>
        <a class="ref" style="--c: #c2413f"><span class="to"><i></i>Quis Nostrud</span><p>1 Oct · Conversations with Claude</p></a>
        <a class="ref" style="--c: #7a4a8c"><span class="to"><i></i>Ut Enim ad Minim</span><p>27 Sep · Conversations with Claude</p></a>
        <h4 class="next">My notes<small>41</small></h4>
        <div class="note"><b>3 Oct 2026 · in Lorem Ipsum Dolor</b>Lorem ipsum, a note of mine beside the passage it is about.</div>
    </div>

    <div class="at-subject">
        <h4>Cited from outside<small>2</small></h4>
        <a class="ref" data-go="author" data-from="subject" style="--c: var(--me)"><span class="to"><svg viewBox="0 0 16 16"><path d="M13 8H3M7 4 3 8l4 4"/></svg><i></i>Dougs Story</span><p>chapter 1 cites Lorem Ipsum Dolor</p></a>
        <a class="ref" style="--c: #1f8a78"><span class="to"><svg viewBox="0 0 16 16"><path d="M13 8H3M7 4 3 8l4 4"/></svg><i></i>Conversations with ChatGPT</span><p>one book cites Adipiscing Elit</p></a>
        <h4 class="next">My notes here<small>12</small></h4>
        <div class="note"><b>3 Oct 2026 · in Lorem Ipsum Dolor</b>Lorem ipsum, a note of mine beside the passage it is about.</div>
    </div>

    <div class="at-book at-chat">
        <h4>Cites<small>1</small></h4>
        <a class="ref" style="--c: #3d7a4e"><span class="to"><svg viewBox="0 0 16 16"><path d="M3 8h10M9 4l4 4-4 4"/></svg><i></i>Adipiscing Elit</span><p>chapter 2 · A First Project</p></a>
        <h4 class="next">Cited by<small>2</small></h4>
        <a class="ref" data-go="author" data-from="book" style="--c: var(--me)"><span class="to"><svg viewBox="0 0 16 16"><path d="M13 8H3M7 4 3 8l4 4"/></svg><i></i>Dougs Story</span><p>chapter 1 · my own account</p><q>Excepteur sint occaecat cupidatat non proident</q></a>
        <a class="ref" style="--c: #c24a78"><span class="to"><svg viewBox="0 0 16 16"><path d="M13 8H3M7 4 3 8l4 4"/></svg><i></i>Sit Amet Consectetur</span><p>chapter 3 · A First Project</p></a>
        <h4 class="next">My notes<small>1</small></h4>
        <div class="note"><b>1 · 3 Oct 2026</b>Lorem ipsum, a note of mine beside the passage it is about.</div>
    </div>

    <div class="at-author">
        <h4>Cites<small>1</small></h4>
        <a class="ref" data-go="book" style="--c: #e07a35"><span class="to"><svg viewBox="0 0 16 16"><path d="M3 8h10M9 4l4 4-4 4"/></svg><i></i>Lorem Ipsum Dolor</span><p>chapter 1 · a conversation with Claude</p><q>Excepteur sint occaecat cupidatat non proident</q></a>
        <h4 class="next">Cited by<small>0</small></h4>
        <div class="note">Nothing cites this chapter yet.</div>
    </div>
</aside>

<script>
    const page = document.documentElement;
    for (const door of document.querySelectorAll('[data-go]'))
        door.addEventListener('click', () => {
            if (door.dataset.from) page.dataset.from = door.dataset.from;
            else delete page.dataset.from;
            page.dataset.at = door.dataset.go;
            window.scrollTo(0, 0);
            for (const column of document.querySelectorAll('.thing, .holds, .across')) column.scrollTop = 0;
        });
    for (const view of document.querySelectorAll('[data-view-is]'))
        view.addEventListener('click', () => {
            page.dataset.view = view.dataset.viewIs;
            for (const other of view.parentElement.children) other.classList.toggle('on', other === view);
        });
<\/script>
</body>
</html>
`})]})]}),a.jsxs(i,{children:[a.jsx(d,{children:"17"}),a.jsx(o,{children:"[A Black Rail and a Blue Top](/dougs-design/#a-black-rail-and-a-blue-top)"}),a.jsx(t,{children:"Concept 17, an idea, after the coming-soon page: its soft black, and the blue it suggests."}),a.jsx(t,{children:"A narrow soft-black rail holds only the subjects as marks and me as a face. The open subject's name stands on a band of the blue, the step between the black and the white, and what it holds is a row beneath."}),a.jsxs(t,{children:[a.jsx(p,{}),a.jsx(r,{children:"/.design/3-every-concept~017-desk.png"}),a.jsx(r,{children:"/.design/3-every-concept~017-phone.png"})]}),a.jsxs(t,{children:[a.jsx(c,{}),a.jsx(n,{children:`<!doctype html>
<html lang="en" data-layout="rail" data-tone="dark" data-at="subject" data-view="shelf">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>A Black Rail and a Blue Top</title>
<meta name="number" content="17">
<meta name="state" content="idea">
<meta name="after" content="the coming-soon page: its soft black, and the blue it suggests">
<meta name="idea" content="A narrow soft-black rail holds only the subjects as marks and me as a face. The open subject's name stands on a band of the blue, the step between the black and the white, and what it holds is a row beneath.">
<meta name="said" content="">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
<style>
    /* ---- what does not change between the ideas ----
       The frame is soft black, the blue between it and white, and white. The soft black #0c1b1f and the opal #c8f4fb are the
       coming-soon page's own; the blues are the hue between them (208 to 223 in OKLCH) walked from dark to light.
       The CONTENT keeps its own colors: every book a cover of its own, the light accents the opal's wave. */
    :root { --night: #0c1b1f; --deep: #14323c; --blue: #166178; --sea: #4e9eb9; --sky: #8fc8dc; --opal: #c8f4fb; --pale: #e3f5fa; --mist: #f1f7f9; --white: #ffffff;
        --ink: #10252c; --soft: #516770; --line: #dbe7ec; --me: #e8590c;
        --wash: linear-gradient(105deg, #e2f6fb 0%, #ecf0fd 52%, #fae9f4 100%);
        --serif: 'Cormorant Garamond', Georgia, serif; --sans: 'Inter', system-ui, sans-serif; }
    [data-tone="dark"] { --bar: var(--night); --bar-fg: #ffffff; --bar-dim: #a9bcc1; --bar-on: rgba(255, 255, 255, .11); --bar-line: #1d3339; --mark: var(--opal); --mark-fg: var(--night); }
    [data-tone="light"] { --bar: var(--white); --bar-fg: var(--ink); --bar-dim: var(--soft); --bar-on: var(--pale); --bar-line: var(--line); --mark: var(--night); --mark-fg: #ffffff; }
    [data-at="library"] [class*="at-"]:not(.at-library), [data-at="subject"] [class*="at-"]:not(.at-subject), [data-at="book"] [class*="at-"]:not(.at-book), [data-at="chat"] [class*="at-"]:not(.at-chat), [data-at="author"] [class*="at-"]:not(.at-author) { display: none !important; }

    * { box-sizing: border-box; margin: 0; }
    body { background: var(--white); color: var(--ink); font: 400 14px/1.5 var(--sans); }
    a { color: inherit; text-decoration: none; }
    svg { width: 15px; height: 15px; stroke: currentColor; fill: none; stroke-width: 1.7; stroke-linecap: round; stroke-linejoin: round; flex: none; }
    [data-go], [data-view-is] { cursor: pointer; }
    h4 { display: flex; align-items: center; gap: 8px; margin-bottom: 10px; font: 600 10.5px/1 var(--sans); letter-spacing: .12em; text-transform: uppercase; color: var(--soft); }
    h4 small { margin-left: auto; font: 400 11.5px/1 var(--sans); letter-spacing: 0; text-transform: none; }
    h4.next { margin-top: 22px; }
    .star { color: var(--me); font-style: normal; }

    /* the library's own things: its mark, its subjects, a way to find, and me. They are held together only where an idea has a side bar. */
    .side { display: contents; }
    [data-at="chat"] .holds a.first { background: var(--bar-on, var(--pale)); }
    .lib { grid-area: lib; display: flex; align-items: center; gap: 6px; min-width: 0; background: var(--bar); color: var(--bar-fg); }
    .logo { display: flex; align-items: center; gap: 10px; flex: none; }
    .logo i { display: grid; place-items: center; width: 30px; height: 30px; border-radius: 8px; background: var(--mark); color: var(--mark-fg); font: 600 15px/1 var(--sans); font-style: normal; }
    .logo b { font: 600 21px/1 var(--serif); white-space: nowrap; }
    .subjects { display: flex; gap: 2px; min-width: 0; }
    .s { display: flex; align-items: center; gap: 8px; padding: 7px 10px; border-radius: 8px; color: var(--bar-dim); font-size: 13.5px; }
    .s i { display: grid; place-items: center; flex: none; width: 9px; height: 9px; border-radius: 50%; background: var(--c); color: #fff; font: 600 0/1 var(--sans); font-style: normal; }
    .s b { font-weight: 500; }
    .s small { font-size: 12px; opacity: .7; }
    :is([data-at="subject"], [data-at="book"], [data-at="chat"]) .s.is-claude { background: var(--bar-on); color: var(--bar-fg); }
    .find { display: flex; align-items: center; gap: 8px; padding: 6px 11px; border-radius: 9px; white-space: nowrap; }
    .lib .find { margin-left: auto; background: var(--bar-on); color: var(--bar-dim); }
    .me { grid-area: me; display: flex; align-items: center; gap: 9px; background: var(--bar); color: var(--bar-fg); }
    .me i { display: grid; place-items: center; flex: none; width: 32px; height: 32px; border-radius: 50%; background: var(--me); color: #fff; font: 600 14px/1 var(--sans); font-style: normal; }
    .me b { display: block; font-weight: 500; line-height: 1.2; white-space: nowrap; }
    .me small { display: block; font-size: 11.5px; opacity: .7; white-space: nowrap; }

    /* the open page's own things: what it is filed under, its name, who it is by, its tools */
    .sub { --sub-fg: var(--ink); --sub-dim: var(--soft); --ctl: var(--mist); --ctl-line: var(--line); --ctl-fg: var(--soft); --on: var(--night); --on-fg: #fff; --lnk: var(--blue); --melnk: var(--me);
        grid-area: sub; display: flex; flex-wrap: wrap; align-items: flex-end; gap: 10px 20px; min-width: 0; padding: 20px 28px 14px; color: var(--sub-fg); }
    .chain { display: flex; align-items: center; gap: 7px; font-size: 12.5px; color: var(--sub-dim); white-space: nowrap; }
    .chain em { font: 600 9.5px/1 var(--sans); font-style: normal; letter-spacing: .12em; text-transform: uppercase; }
    .chain span { display: flex; align-items: center; gap: 7px; }
    .chain i { font-style: normal; opacity: .55; }
    .chain a { font-weight: 500; color: var(--lnk); }
    .title { min-width: 0; }
    h1 { margin-top: 4px; font: 600 36px/1.04 var(--serif); white-space: nowrap; }
    .title p { margin-top: 4px; font-size: 13px; color: var(--sub-dim); }
    .title p a { color: var(--lnk); font-weight: 500; }
    .title p a.to-me { color: var(--melnk); text-decoration: underline; text-decoration-color: var(--me); text-decoration-thickness: 2px; text-underline-offset: 3px; }
    .tools { margin-left: auto; }
    .tools > div { display: flex; flex-wrap: wrap; justify-content: flex-end; align-items: center; gap: 8px; }
    .seg { display: flex; overflow: hidden; border: 1px solid var(--ctl-line); border-radius: 9px; background: var(--ctl); }
    .seg span { padding: 6px 12px; color: var(--ctl-fg); }
    .seg span.on { background: var(--on); color: var(--on-fg); font-weight: 500; }
    .sub .find { border: 1px solid var(--ctl-line); background: var(--ctl); color: var(--ctl-fg); }
    .fav { display: flex; align-items: center; gap: 6px; padding: 6px 11px; border-radius: 9px; background: color-mix(in srgb, var(--me) 12%, white); color: #a8400a; font-weight: 500; white-space: nowrap; }

    /* down: what the open page holds */
    .holds { grid-area: holds; min-width: 0; }
    .holds a { display: flex; align-items: center; gap: 9px; padding: 6px 9px; border-radius: 8px; }
    .holds a i { flex: none; width: 9px; height: 9px; border-radius: 50%; background: var(--c, var(--sea)); }
    .holds a b { font-weight: 500; }
    .holds a small { margin-left: auto; font-size: 12px; color: var(--soft); }
    .holds a.on { background: var(--pale); }

    /* the page itself */
    .thing { grid-area: thing; min-width: 0; }
    .go { display: flex; align-items: center; gap: 20px; margin-bottom: 22px; padding: 16px 20px; border-radius: 16px; background: var(--wash); }
    .go .cover { flex: none; width: 92px; padding: 10px 8px 8px 13px; }
    .go .cover b { font-size: 13.5px; }
    .go .cover small { font-size: 7.5px; padding-top: 6px; }
    .go em { font: 600 10.5px/1 var(--sans); font-style: normal; letter-spacing: .1em; text-transform: uppercase; color: var(--me); }
    .go h2 { margin: 4px 0 2px; font: 600 24px/1.1 var(--serif); }
    .go p { max-width: 52ch; font-size: 13px; color: var(--soft); }
    .go u { display: block; width: 260px; max-width: 100%; height: 4px; margin: 10px 0 6px; border-radius: 9px; background: rgba(12, 27, 31, .1); text-decoration: none; }
    .go u i { display: block; width: 14%; height: 100%; border-radius: 9px; background: var(--me); }
    .go small { font-size: 12px; color: var(--soft); }
    .go .read { margin-left: auto; }
    .read { display: inline-flex; align-items: center; gap: 8px; padding: 9px 18px; border-radius: 99px; background: var(--night); color: #fff; font-weight: 500; white-space: nowrap; }

    /* a cover is the landmark of a book, and every book has a color of its own; my own books are the soft black */
    .cover { position: relative; display: flex; flex-direction: column; aspect-ratio: 3 / 4; padding: 13px 11px 10px 17px; border-radius: 3px 7px 7px 3px; color: #fff; background: linear-gradient(160deg, color-mix(in srgb, var(--c) 90%, white), color-mix(in srgb, var(--c) 86%, black)); box-shadow: 0 12px 22px -14px rgba(12, 27, 31, .55); }
    .cover::before { content: ''; position: absolute; left: 7px; top: 0; bottom: 0; width: 1px; background: rgba(255, 255, 255, .3); }
    .cover b { font: 600 17px/1.08 var(--serif); }
    .cover small { margin-top: auto; padding-top: 8px; border-top: 1px solid rgba(255, 255, 255, .32); font: 600 9px/1.2 var(--sans); letter-spacing: .1em; text-transform: uppercase; opacity: .92; }
    .cover.mine { --c: var(--night); color: var(--opal); background: linear-gradient(160deg, #16303a, var(--night)); }
    .bk:nth-child(8n+1), .open, .go { --c: #e07a35; }
    .bk:nth-child(8n+2) { --c: #c2413f; }
    .bk:nth-child(8n+3) { --c: #4450b8; }
    .bk:nth-child(8n+4) { --c: #1f8a78; }
    .bk:nth-child(8n+5) { --c: #7a4a8c; }
    .bk:nth-child(8n+6) { --c: #2f7fb0; }
    .bk:nth-child(8n+7) { --c: #3d7a4e; }
    .bk:nth-child(8n) { --c: #c24a78; }
    .shelf { display: grid; grid-template-columns: repeat(auto-fill, minmax(124px, 1fr)); gap: 22px 18px; }
    .bk { display: block; }
    .bk .name { display: none; }
    .bk p { display: flex; gap: 6px; margin-top: 8px; font-size: 12px; color: var(--soft); }
    [data-view="list"] .shelf { grid-template-columns: minmax(0, 1fr); gap: 0; }
    [data-view="list"] .bk { display: grid; grid-template-columns: 30px minmax(0, 1fr) auto; gap: 14px; align-items: center; padding: 9px 0; border-bottom: 1px solid var(--line); }
    [data-view="list"] .bk .cover { padding: 0; border-radius: 2px 4px 4px 2px; box-shadow: none; }
    [data-view="list"] .bk .cover::before { left: 4px; }
    [data-view="list"] .bk .cover b, [data-view="list"] .bk .cover small { display: none; }
    [data-view="list"] .bk .name { display: block; font: 600 19px/1.2 var(--serif); }
    [data-view="list"] .bk p { margin: 0; }
    .mines { display: grid; grid-template-columns: repeat(auto-fill, minmax(124px, 148px)); gap: 18px; }

    .tiles { display: grid; grid-template-columns: repeat(auto-fill, minmax(210px, 1fr)); gap: 14px; margin-bottom: 26px; }
    .tile { display: block; padding: 14px 16px 16px; border-radius: 14px; background: var(--t); }
    .tile i { display: block; width: 26px; height: 26px; margin-bottom: 24px; border-radius: 8px; background: var(--c); }
    .tile b { display: block; font: 600 21px/1.1 var(--serif); }
    .tile small { font-size: 12.5px; color: var(--soft); }

    .open, .person { display: flex; gap: 26px; align-items: flex-start; }
    .cover.big { flex: none; width: 180px; padding: 20px 15px 13px 24px; }
    .cover.big b { font-size: 26px; }
    .cover.big::before { left: 11px; }
    .words { min-width: 0; }
    .says { max-width: 56ch; font: 500 20px/1.5 var(--serif); }
    .words .read { margin-top: 18px; }
    .face { display: grid; place-items: center; flex: none; width: 96px; height: 96px; border-radius: 50%; background: var(--me); color: #fff; font: 600 46px/1 var(--serif); box-shadow: 0 0 0 5px var(--white), 0 0 0 6px color-mix(in srgb, var(--me) 45%, white); }
    .counts { display: flex; gap: 26px; margin: 16px 0 22px; color: var(--soft); font-size: 12.5px; }
    .counts b { display: block; font: 600 26px/1.1 var(--serif); color: var(--ink); }

    /* a conversation, in the form of the application it comes from; my turns in my color */
    .chat { display: grid; gap: 20px; max-width: 720px; margin: 0 auto; }
    .chat .who { display: block; margin-bottom: 4px; font: 600 10.5px/1 var(--sans); letter-spacing: .1em; text-transform: uppercase; color: var(--soft); }
    .chat .mine { justify-self: end; max-width: 78%; padding: 11px 16px; border-radius: 18px 18px 4px 18px; background: color-mix(in srgb, var(--me) 9%, white); font-size: 15px; }
    .chat .mine .who { color: var(--me); }
    .chat .theirs p { font: 500 19.5px/1.55 var(--serif); }
    .chat .theirs p + p { margin-top: 10px; }
    .chat mark { padding: 1px 3px; border-radius: 3px; background: var(--pale); color: inherit; }
    .chat sup { margin-left: 2px; font: 600 10.5px/1 var(--sans); color: var(--me); }
    .chat pre { margin: 12px 0; padding: 12px 14px; border-radius: 10px; background: var(--night); color: #d7e6ea; font: 400 12.5px/1.6 ui-monospace, 'Cascadia Code', Consolas, monospace; overflow: auto; }
    .chat .made { display: flex; align-items: center; gap: 10px; width: fit-content; margin-top: 12px; padding: 9px 13px; border: 1px solid var(--line); border-radius: 12px; font-size: 13px; }
    .chat .made i { display: grid; place-items: center; width: 30px; height: 30px; border-radius: 8px; background: var(--pale); color: var(--blue); font-style: normal; }
    .chat .made small { display: block; color: var(--soft); font-size: 12px; }
    .chat .turns { display: flex; justify-content: space-between; padding-top: 16px; border-top: 1px solid var(--line); color: var(--blue); font-weight: 500; }

    /* across: what it cites, what cites it, and what I wrote beside it */
    .across { grid-area: across; min-width: 0; }
    .ref { display: block; margin-bottom: 8px; padding: 10px 12px; border: 1px solid var(--line); border-radius: 12px; background: var(--white); }
    .ref .to { display: flex; align-items: center; gap: 7px; font-weight: 600; }
    .ref .to svg { color: var(--soft); }
    .ref .to i { flex: none; width: 9px; height: 9px; border-radius: 50%; background: var(--c, var(--sea)); }
    .ref p { margin-top: 2px; font-size: 12.5px; color: var(--soft); }
    .ref q { display: block; margin-top: 7px; padding: 6px 9px; border-radius: 7px; background: var(--pale); font: italic 500 15.5px/1.35 var(--serif); quotes: '“' '”'; }
    .note { padding: 10px 12px; border: 1px dashed var(--line); border-radius: 12px; font-size: 13px; color: var(--soft); }
    .note b { display: block; margin-bottom: 2px; color: var(--ink); font-weight: 500; }
    .return { display: none; align-items: center; gap: 8px; margin-bottom: 14px; padding: 9px 12px; border-radius: 10px; background: var(--night); color: #fff; font-weight: 500; }
    .return svg { color: var(--sky); }
    [data-at="author"][data-from="book"] .return.to-book, [data-at="author"][data-from="subject"] .return.to-subject { display: flex; }

    /* ---- what each idea colors, at every width ---- */
    [data-layout="both"] .holds { background: var(--pale); }
    [data-layout="both"] .holds a.on { background: var(--white); }
    [data-layout="rail"][data-tone="dark"] .sub { --sub-fg: #fff; --sub-dim: rgba(255, 255, 255, .8); --ctl: rgba(12, 27, 31, .26); --ctl-line: transparent; --ctl-fg: #fff; --on: #fff; --on-fg: var(--night); --lnk: #fff; --melnk: #fff; background: var(--blue); }
    [data-layout="rail"][data-tone="dark"] .fav { background: #fff; }
    [data-layout="rail"][data-tone="light"] { --bar: var(--pale); --bar-on: #fff; --bar-line: #cbe6ee; }
    [data-layout="two"][data-tone="dark"] .sub { --sub-dim: #27505c; --ctl: rgba(255, 255, 255, .62); --ctl-line: transparent; --ctl-fg: var(--ink); --lnk: var(--deep); background: var(--sky); }
    [data-layout="two"][data-tone="light"] .sub { --ctl: #fff; background: var(--pale); }
    [data-layout="side"][data-tone="light"] { --bar: var(--mist); --bar-on: #fff; }
    [data-layout="cards"][data-tone="light"] { --canvas: #e9f2f5; --bar-on: #fff; }
    [data-layout="cards"][data-tone="dark"] { --canvas: var(--night); }
    [data-layout="cards"] body, [data-layout="cards"] .lib, [data-layout="cards"] .me { background: var(--canvas); }
    [data-layout="cards"] :is(.sub, .holds, .thing, .across) { background: var(--white); }
    :is([data-layout="header"], [data-layout="both"], [data-layout="two"], [data-layout="cards"]):is([data-at="subject"], [data-at="book"], [data-at="chat"]) .s.is-claude { box-shadow: inset 0 -2px 0 var(--c); }

    /* ---- at a desk: where each idea puts the bars ---- */
    @media (min-width: 761px) {
        html, body { height: 100%; }
        body { display: grid; overflow: hidden; }
        .thing { padding: 20px 28px 40px; overflow: auto; }
        .holds { padding: 18px 12px; overflow: auto; }
        .across { padding: 18px 16px; overflow: auto; border-left: 1px solid var(--line); }

        /* a bar across the top holds the library, with me at its right end */
        :is([data-layout="header"], [data-layout="both"], [data-layout="two"], [data-layout="cards"]) .lib { padding: 9px 170px 9px 18px; }
        :is([data-layout="header"], [data-layout="both"], [data-layout="two"], [data-layout="cards"]) .logo { margin-right: 12px; }
        :is([data-layout="header"], [data-layout="both"], [data-layout="two"], [data-layout="cards"]) :is(.s small, .me small, .lib .find em) { display: none; }
        :is([data-layout="header"], [data-layout="both"], [data-layout="two"], [data-layout="cards"]) .me { grid-area: lib; justify-self: end; z-index: 1; padding: 0 18px 0 8px; background: none; }
        [data-tone="light"]:is([data-layout="header"], [data-layout="both"], [data-layout="two"]) .lib { border-bottom: 1px solid var(--line); }

        [data-layout="header"] body { grid-template: auto auto auto minmax(0, 1fr) / minmax(0, 1fr) 300px; grid-template-areas: "lib lib" "sub sub" "holds holds" "thing across"; }
        [data-layout="both"] body { grid-template: auto auto minmax(0, 1fr) / 240px minmax(0, 1fr) 300px; grid-template-areas: "lib lib lib" "holds sub sub" "holds thing across"; }
        [data-layout="both"] .holds { padding: 20px 12px; border-right: 1px solid #cbe6ee; }
        [data-layout="two"] body { grid-template: auto auto minmax(0, 1fr) / 236px minmax(0, 1fr) 300px; grid-template-areas: "lib lib lib" "sub sub sub" "holds thing across"; }
        [data-layout="two"] .sub { align-items: center; padding: 9px 24px; }
        [data-layout="two"] .title { display: flex; flex-wrap: wrap; align-items: baseline; gap: 4px 16px; }
        [data-layout="two"] h1 { margin: 0; font-size: 26px; order: -1; }
        [data-layout="two"] .title p { display: none; }
        [data-layout="two"] .holds { border-right: 1px solid var(--line); }
        [data-layout="cards"] body { grid-template: auto auto minmax(0, 1fr) / 244px minmax(0, 1fr) 300px; grid-template-areas: "lib lib lib" "holds sub across" "holds thing across"; column-gap: 12px; padding: 0 12px 12px; }
        [data-layout="cards"] .lib { padding: 11px 170px 11px 6px; }
        [data-layout="cards"] .me { padding: 0 6px; }
        [data-layout="cards"] :is(.holds, .across) { border: 0; border-radius: 16px; }
        [data-layout="cards"] .sub { border-radius: 16px 16px 0 0; }
        [data-layout="cards"] .thing { border-radius: 0 0 16px 16px; }

        /* a bar down the left holds the library, with me at its foot */
        [data-layout="side"] body { grid-template: auto minmax(0, 1fr) / 256px minmax(0, 1fr) 300px; grid-template-areas: "side sub sub" "side thing across"; }
        [data-layout="side"] .side { grid-area: side; display: flex; flex-direction: column; min-height: 0; background: var(--bar); }
        [data-layout="side"] .holds { flex: 1; order: 1; }
        [data-layout="side"] .me { order: 2; }
        [data-layout="side"] .lib { flex-direction: column; align-items: stretch; gap: 2px; padding: 18px 12px 12px; }
        [data-layout="side"] .logo { padding: 0 6px 14px; }
        [data-layout="side"] .subjects { flex-direction: column; }
        [data-layout="side"] .s small { margin-left: auto; }
        [data-layout="side"] .lib .find { margin: 10px 0 0; }
        [data-layout="side"] .holds { padding: 14px 12px; border-top: 1px solid var(--bar-line); background: var(--bar); color: var(--bar-fg); }
        [data-layout="side"] .holds h4, [data-layout="side"] .holds a small { color: var(--bar-dim); }
        [data-layout="side"] .holds a.on { background: var(--bar-on); }
        [data-layout="side"] .me { padding: 12px 18px 14px; border-top: 1px solid var(--bar-line); }
        [data-layout="side"][data-tone="light"] .side { border-right: 1px solid var(--line); }

        /* a narrow rail holds the subjects as marks and me as a face */
        [data-layout="rail"] body { grid-template: auto auto minmax(0, 1fr) auto / 68px minmax(0, 1fr) 300px; grid-template-areas: "lib sub sub" "lib holds holds" "lib thing across" "me thing across"; }
        [data-layout="rail"] .lib { flex-direction: column; gap: 12px; padding: 14px 0; }
        [data-layout="rail"] :is(.logo b, .lib .find, .s b, .s small, .me span) { display: none; }
        [data-layout="rail"] .subjects { flex-direction: column; align-items: center; gap: 10px; }
        [data-layout="rail"] .s { padding: 0; background: none; }
        [data-layout="rail"] :is(.s i, .logo i, .me i) { width: 40px; height: 40px; border-radius: 11px; font-size: 13px; }
        [data-layout="rail"] .logo i, [data-layout="rail"] .me i { font-size: 16px; }
        [data-layout="rail"] .me i { border-radius: 50%; }
        [data-layout="rail"]:is([data-at="subject"], [data-at="book"], [data-at="chat"]) .s.is-claude i { box-shadow: 0 0 0 2px var(--bar), 0 0 0 4px var(--c); }
        [data-layout="rail"] .me { justify-content: center; padding: 10px 0 14px; }
        [data-layout="rail"] .sub { padding: 16px 26px 14px; }
        [data-layout="rail"][data-tone="light"] :is(.lib, .me) { border-right: 1px solid #cbe6ee; }

        /* with no side bar, what the page holds is a row under its name */
        :is([data-layout="header"], [data-layout="rail"]) .holds { padding: 12px 28px; overflow: auto hidden; border-bottom: 1px solid var(--line); scrollbar-width: none; }
        [data-layout="header"] .holds { padding-top: 0; }
        :is([data-layout="header"], [data-layout="rail"]) .holds > div { display: flex; align-items: center; gap: 6px; }
        :is([data-layout="header"], [data-layout="rail"]) .holds h4 { flex: none; margin: 0 6px 0 0; }
        :is([data-layout="header"], [data-layout="rail"]) .holds h4.next { margin-left: 18px; }
        :is([data-layout="header"], [data-layout="rail"]) .holds h4 small { display: none; }
        :is([data-layout="header"], [data-layout="rail"]) .holds a { flex: none; padding: 5px 11px 5px 9px; border: 1px solid var(--line); border-radius: 99px; white-space: nowrap; }
        :is([data-layout="header"], [data-layout="rail"]) .holds a small { margin-left: 4px; }
        :is([data-layout="header"], [data-layout="rail"]) .holds a.on { border-color: transparent; }
    }

    /* ---- on a phone: one bar at the top, the page beneath it in one column ---- */
    @media (max-width: 760px) {
        body { position: relative; display: flex; flex-direction: column; }
        .sub { order: 1; }
        .holds { order: 2; }
        .thing { order: 3; }
        .across { order: 4; }
        .lib { position: sticky; top: 0; z-index: 4; height: 50px; margin-right: 54px; padding: 0 8px 0 14px; gap: 4px; overflow: auto hidden; scrollbar-width: none; }
        .logo { margin-right: 8px; }
        .logo b { font-size: 19px; }
        .s { white-space: nowrap; }
        .s small, .lib .find, .me span { display: none; }
        .me { position: fixed; z-index: 5; top: 0; right: 0; justify-content: center; width: 54px; height: 50px; }
        [data-tone="light"] :is(.lib, .me) { border-bottom: 1px solid var(--line); }
        .sub { flex-direction: column; flex-wrap: nowrap; align-items: stretch; padding: 16px 16px 12px; }
        h1 { font-size: 28px; white-space: normal; }
        .chain { overflow: auto hidden; scrollbar-width: none; }
        .tools { margin: 0; }
        .tools > div { justify-content: flex-start; }
        .holds { padding: 10px 16px 12px; overflow: auto hidden; border-bottom: 1px solid var(--line); scrollbar-width: none; }
        .holds > div { display: flex; align-items: center; gap: 6px; }
        .holds h4 { flex: none; margin: 0 6px 0 0; }
        .holds h4.next { margin-left: 18px; }
        .holds h4 small { display: none; }
        .holds a { flex: none; padding: 5px 11px 5px 9px; border: 1px solid var(--line); border-radius: 99px; background: var(--white); white-space: nowrap; }
        .holds a small { margin-left: 4px; }
        .thing { padding: 16px 16px 24px; }
        .go { flex-wrap: wrap; gap: 14px; padding: 14px; }
        .go > div { flex: 1 1 60%; min-width: 0; }
        .go .read { margin: 0; }
        .shelf { grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 16px 12px; }
        .cover { padding: 10px 8px 8px 13px; }
        .cover b { font-size: 14.5px; }
        .open, .person { flex-direction: column; gap: 16px; }
        .cover.big { width: 150px; }
        .cover.big b { font-size: 22px; }
        .counts { gap: 18px; }
        .chat .mine { max-width: 88%; }
        .across { padding: 16px; border-top: 1px solid var(--line); }

        /* a side bar or a rail turns to lie along the foot, the subjects as marks */
        :is([data-layout="side"], [data-layout="rail"]) body { padding-bottom: 60px; }
        :is([data-layout="side"], [data-layout="rail"]) .subjects { position: fixed; z-index: 4; left: 0; right: 0; bottom: 0; justify-content: space-around; padding: 8px 10px; border-top: 1px solid var(--bar-line); background: var(--bar); }
        :is([data-layout="side"], [data-layout="rail"]) .s { padding: 0; background: none; box-shadow: none; }
        :is([data-layout="side"], [data-layout="rail"]) .s b { display: none; }
        :is([data-layout="side"], [data-layout="rail"]) .s i { width: 42px; height: 42px; border-radius: 12px; font-size: 13px; }
        :is([data-layout="side"], [data-layout="rail"]):is([data-at="subject"], [data-at="book"], [data-at="chat"]) .s.is-claude i { box-shadow: 0 0 0 2px var(--bar), 0 0 0 4px var(--c); }

        [data-layout="two"] .sub { padding: 12px 16px; }
        [data-layout="two"] .title p { display: none; }
        [data-layout="cards"] body { padding-bottom: 10px; }
        [data-layout="cards"] :is(.sub, .holds, .thing, .across) { margin: 0 10px; }
        [data-layout="cards"] .sub { margin-top: 4px; border-radius: 14px 14px 0 0; }
        [data-layout="cards"] .thing { border-radius: 0 0 14px 14px; }
        [data-layout="cards"] .across { margin-top: 10px; border: 0; border-radius: 14px; }
    }
</style>
</head>
<body>

<div class="side">
<header class="lib">
    <a class="logo" data-go="library"><i>D</i><b>Dougs Library</b></a>
    <nav class="subjects">
        <a class="s is-claude" data-go="subject" style="--c: var(--sea)"><i>Cl</i><b>Conversations with Claude</b><small>212</small></a>
        <a class="s" style="--c: #1f8a78"><i>Ch</i><b>Conversations with ChatGPT</b><small>147</small></a>
        <a class="s" style="--c: #c24a78"><i>De</i><b>Dougs Design</b><small>5</small></a>
        <a class="s" style="--c: #7a4a8c"><i>Rm</i><b>Dougs Reference Manual</b><small>3</small></a>
    </nav>
    <span class="find"><svg viewBox="0 0 16 16"><circle cx="7" cy="7" r="4.5"/><path d="M10.5 10.5 14 14"/></svg><em style="font-style: normal">Find in the library</em></span>
</header>

<a class="me" data-go="author"><i>D</i><span><b>The Librarian</b><small>my own account</small></span></a>

<aside class="holds">
    <div class="at-library">
        <h4>My favorites<small>3</small></h4>
        <a data-go="book" style="--c: #e07a35"><i></i><b>Lorem Ipsum Dolor</b><small class="star">★</small></a>
        <a style="--c: #4450b8"><i></i><b>Magna Aliqua</b><small class="star">★</small></a>
        <a style="--c: #c24a78"><i></i><b>The Library's Home</b><small class="star">★</small></a>
    </div>
    <div class="at-subject">
        <h4>Holds<small>3 projects</small></h4>
        <a class="on" style="--c: #e07a35"><i></i><b>A First Project</b><small>38</small></a>
        <a style="--c: #1f8a78"><i></i><b>A Second Project</b><small>91</small></a>
        <a style="--c: #4450b8"><i></i><b>A Third Project</b><small>83</small></a>
        <h4 class="next">My favorites here<small>2</small></h4>
        <a data-go="book" style="--c: #e07a35"><i></i><b>Lorem Ipsum Dolor</b><small class="star">★</small></a>
        <a style="--c: #4450b8"><i></i><b>Magna Aliqua</b><small class="star">★</small></a>
    </div>
    <div class="at-book at-chat">
        <h4>Holds<small>8 chapters</small></h4>
        <a class="first" data-go="chat" style="--c: #e07a35"><i></i><b>A First Chapter</b><small>1</small></a>
        <a style="--c: #e07a35"><i></i><b>A Second Chapter</b><small>2</small></a>
        <a style="--c: #e07a35"><i></i><b>A Third Chapter</b><small>3</small></a>
        <a style="--c: #e07a35"><i></i><b>A Fourth Chapter</b><small>4</small></a>
        <a style="--c: #e07a35"><i></i><b>A Fifth Chapter</b><small>5</small></a>
    </div>
    <div class="at-author">
        <h4>My books<small>3</small></h4>
        <a class="on" style="--c: var(--me)"><i></i><b>Dougs Story</b><small>3</small></a>
        <a style="--c: #c24a78"><i></i><b>Dougs Design</b><small>5</small></a>
        <a style="--c: #7a4a8c"><i></i><b>Dougs Reference Manual</b><small>3</small></a>
    </div>
</aside>
</div>

<section class="sub">
    <div class="title">
        <div class="chain">
            <em>Filed under</em>
            <span class="at-library">itself</span>
            <span class="at-subject"><a data-go="library">Dougs Library</a></span>
            <span class="at-book"><a data-go="subject">Conversations with Claude</a><i>›</i><a data-go="subject">A First Project</a></span>
            <span class="at-chat"><a data-go="subject">Conversations with Claude</a><i>›</i><a data-go="subject">A First Project</a><i>›</i><a data-go="book">Lorem Ipsum Dolor</a></span>
            <span class="at-author"><a data-go="library">Dougs Library</a></span>
        </div>
        <h1 class="at-library">Dougs Library</h1>
        <h1 class="at-subject">Conversations with Claude</h1>
        <h1 class="at-book">Lorem Ipsum Dolor</h1>
        <h1 class="at-chat">A First Chapter</h1>
        <h1 class="at-author">Dougs Story</h1>
        <p class="at-library">by <a class="to-me" data-go="author">The Librarian</a> · three books and two subjects · 359 conversations kept</p>
        <p class="at-subject">a subject · 212 books in three projects · by <a class="to-me" data-go="author">The Librarian</a></p>
        <p class="at-book">by <a class="to-me" data-go="author">The Librarian</a> and Claude · 8 chapters · kept 9 Sep 2026</p>
        <p class="at-chat">chapter 1 of 8 · <a class="to-me" data-go="author">The Librarian</a> and Claude · kept 9 Sep 2026</p>
        <p class="at-author">The Librarian · my own account</p>
    </div>
    <div class="tools">
        <div class="at-subject">
            <span class="seg"><span class="on" data-view-is="shelf">Shelf</span><span data-view-is="list">List</span><span>Table</span></span>
            <span class="find"><svg viewBox="0 0 16 16"><circle cx="7" cy="7" r="4.5"/><path d="M10.5 10.5 14 14"/></svg>Find in this subject</span>
        </div>
        <div class="at-book">
            <span class="fav"><em class="star">★</em>Among my favorites</span>
            <span class="find"><svg viewBox="0 0 16 16"><circle cx="7" cy="7" r="4.5"/><path d="M10.5 10.5 14 14"/></svg>Find in this book</span>
        </div>
        <div class="at-chat">
            <span class="find"><svg viewBox="0 0 16 16"><path d="M8 3v10M3 8h10"/></svg>Note on a passage</span>
            <span class="find"><svg viewBox="0 0 16 16"><circle cx="7" cy="7" r="4.5"/><path d="M10.5 10.5 14 14"/></svg>Find in this book</span>
        </div>
    </div>
</section>

<main class="thing">
    <div class="at-library">
        <h4>Subjects</h4>
        <div class="tiles">
            <a class="tile" data-go="subject" style="--t: #dff3fa; --c: var(--sea)"><i></i><b>Conversations with Claude</b><small>212 books in three projects</small></a>
            <a class="tile" style="--t: #dcf5ee; --c: #1f8a78"><i></i><b>Conversations with ChatGPT</b><small>147 books</small></a>
        </div>
        <h4>My books</h4>
        <div class="mines">
            <a class="cover mine" data-go="author"><b>Dougs Story</b><small>my own account</small></a>
            <a class="cover mine"><b>Dougs Design</b><small>the design</small></a>
            <a class="cover mine"><b>Dougs Reference Manual</b><small>the parts</small></a>
        </div>
    </div>

    <div class="at-subject">
        <div class="go">
            <span class="cover"><b>Lorem Ipsum Dolor</b><small>with Claude</small></span>
            <div>
                <em>Continue</em>
                <h2>Lorem Ipsum Dolor</h2>
                <p>A First Project · kept 9 September 2026. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                <u><i></i></u>
                <small>Chapter 1 of 8 · 2 notes of mine · cited twice</small>
            </div>
            <a class="read" data-go="chat">Read</a>
        </div>
        <h4>Lately kept<small>212 books · newest first</small></h4>
        <div class="shelf">
            <a class="bk" data-go="book"><span class="cover"><b>Lorem Ipsum Dolor</b><small>with Claude</small></span><b class="name">Lorem Ipsum Dolor</b><p>9 Sep · 8 chapters <em class="star">★</em></p></a>
            <a class="bk"><span class="cover"><b>Quis Nostrud</b><small>with Claude</small></span><b class="name">Quis Nostrud</b><p>1 Oct · 6 chapters</p></a>
            <a class="bk"><span class="cover"><b>Magna Aliqua</b><small>with Claude</small></span><b class="name">Magna Aliqua</b><p>20 Sep · 11 chapters <em class="star">★</em></p></a>
            <a class="bk"><span class="cover"><b>Tempor Incididunt</b><small>with Claude</small></span><b class="name">Tempor Incididunt</b><p>12 Sep · 7 chapters</p></a>
            <a class="bk"><span class="cover"><b>Ut Enim ad Minim</b><small>with Claude</small></span><b class="name">Ut Enim ad Minim</b><p>27 Sep · 3 chapters</p></a>
            <a class="bk"><span class="cover"><b>Sed Do Eiusmod</b><small>with Claude</small></span><b class="name">Sed Do Eiusmod</b><p>5 Sep · 2 chapters</p></a>
            <a class="bk"><span class="cover"><b>Adipiscing Elit</b><small>with Claude</small></span><b class="name">Adipiscing Elit</b><p>2 Sep · 9 chapters</p></a>
            <a class="bk"><span class="cover"><b>Sit Amet Consectetur</b><small>with Claude</small></span><b class="name">Sit Amet Consectetur</b><p>21 Jul · 14 chapters</p></a>
            <a class="bk"><span class="cover"><b>Duis Aute Irure</b><small>with Claude</small></span><b class="name">Duis Aute Irure</b><p>14 Jul · 5 chapters</p></a>
            <a class="bk"><span class="cover"><b>Excepteur Sint</b><small>with Claude</small></span><b class="name">Excepteur Sint</b><p>2 Jul · 4 chapters</p></a>
        </div>
    </div>

    <div class="open at-book">
        <span class="cover big"><b>Lorem Ipsum Dolor</b><small>with Claude</small></span>
        <div class="words">
            <p class="says">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
            <a class="read" data-go="chat">Read from A First Chapter<svg viewBox="0 0 16 16"><path d="M3 8h10M9 4l4 4-4 4"/></svg></a>
        </div>
    </div>

    <div class="chat at-chat">
        <div class="mine"><span class="who">The Librarian</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit? Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
        <div class="theirs">
            <span class="who">Claude</span>
            <p>Ut enim ad minim veniam, quis nostrud exercitation. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <mark>Excepteur sint occaecat cupidatat non proident</mark><sup>1</sup>, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
<pre>const lorem = ipsum.dolor('sit amet');
return lorem.consectetur();</pre>
            <a class="made"><i>◇</i><span><b>Lorem Ipsum, a first draft</b><small>made in this turn · opens beside the page</small></span></a>
        </div>
        <div class="mine"><span class="who">The Librarian</span>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit?</div>
        <div class="theirs">
            <span class="who">Claude</span>
            <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.</p>
        </div>
        <div class="turns"><span></span><a>A Second Chapter →</a></div>
    </div>

    <div class="person at-author">
        <span class="face">D</span>
        <div class="words">
            <p class="says">My own account, and the one book here that is by its own subject. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            <div class="counts"><span><b>3</b>books written</span><span><b>359</b>conversations kept</span><span><b>41</b>notes</span></div>
            <div class="mines">
                <a class="cover mine"><b>Dougs Story</b><small>my own account</small></a>
                <a class="cover mine"><b>Dougs Design</b><small>the design</small></a>
                <a class="cover mine"><b>Dougs Reference Manual</b><small>the parts</small></a>
            </div>
        </div>
    </div>
</main>

<aside class="across">
    <a class="return to-book" data-go="book"><svg viewBox="0 0 16 16"><path d="M13 8H3M7 4 3 8l4 4"/></svg>Back to Lorem Ipsum Dolor</a>
    <a class="return to-subject" data-go="subject"><svg viewBox="0 0 16 16"><path d="M13 8H3M7 4 3 8l4 4"/></svg>Back to Conversations with Claude</a>

    <div class="at-library">
        <h4>Lately kept</h4>
        <a class="ref" style="--c: #c2413f"><span class="to"><i></i>Quis Nostrud</span><p>1 Oct · Conversations with Claude</p></a>
        <a class="ref" style="--c: #7a4a8c"><span class="to"><i></i>Ut Enim ad Minim</span><p>27 Sep · Conversations with Claude</p></a>
        <h4 class="next">My notes<small>41</small></h4>
        <div class="note"><b>3 Oct 2026 · in Lorem Ipsum Dolor</b>Lorem ipsum, a note of mine beside the passage it is about.</div>
    </div>

    <div class="at-subject">
        <h4>Cited from outside<small>2</small></h4>
        <a class="ref" data-go="author" data-from="subject" style="--c: var(--me)"><span class="to"><svg viewBox="0 0 16 16"><path d="M13 8H3M7 4 3 8l4 4"/></svg><i></i>Dougs Story</span><p>chapter 1 cites Lorem Ipsum Dolor</p></a>
        <a class="ref" style="--c: #1f8a78"><span class="to"><svg viewBox="0 0 16 16"><path d="M13 8H3M7 4 3 8l4 4"/></svg><i></i>Conversations with ChatGPT</span><p>one book cites Adipiscing Elit</p></a>
        <h4 class="next">My notes here<small>12</small></h4>
        <div class="note"><b>3 Oct 2026 · in Lorem Ipsum Dolor</b>Lorem ipsum, a note of mine beside the passage it is about.</div>
    </div>

    <div class="at-book at-chat">
        <h4>Cites<small>1</small></h4>
        <a class="ref" style="--c: #3d7a4e"><span class="to"><svg viewBox="0 0 16 16"><path d="M3 8h10M9 4l4 4-4 4"/></svg><i></i>Adipiscing Elit</span><p>chapter 2 · A First Project</p></a>
        <h4 class="next">Cited by<small>2</small></h4>
        <a class="ref" data-go="author" data-from="book" style="--c: var(--me)"><span class="to"><svg viewBox="0 0 16 16"><path d="M13 8H3M7 4 3 8l4 4"/></svg><i></i>Dougs Story</span><p>chapter 1 · my own account</p><q>Excepteur sint occaecat cupidatat non proident</q></a>
        <a class="ref" style="--c: #c24a78"><span class="to"><svg viewBox="0 0 16 16"><path d="M13 8H3M7 4 3 8l4 4"/></svg><i></i>Sit Amet Consectetur</span><p>chapter 3 · A First Project</p></a>
        <h4 class="next">My notes<small>1</small></h4>
        <div class="note"><b>1 · 3 Oct 2026</b>Lorem ipsum, a note of mine beside the passage it is about.</div>
    </div>

    <div class="at-author">
        <h4>Cites<small>1</small></h4>
        <a class="ref" data-go="book" style="--c: #e07a35"><span class="to"><svg viewBox="0 0 16 16"><path d="M3 8h10M9 4l4 4-4 4"/></svg><i></i>Lorem Ipsum Dolor</span><p>chapter 1 · a conversation with Claude</p><q>Excepteur sint occaecat cupidatat non proident</q></a>
        <h4 class="next">Cited by<small>0</small></h4>
        <div class="note">Nothing cites this chapter yet.</div>
    </div>
</aside>

<script>
    const page = document.documentElement;
    for (const door of document.querySelectorAll('[data-go]'))
        door.addEventListener('click', () => {
            if (door.dataset.from) page.dataset.from = door.dataset.from;
            else delete page.dataset.from;
            page.dataset.at = door.dataset.go;
            window.scrollTo(0, 0);
            for (const column of document.querySelectorAll('.thing, .holds, .across')) column.scrollTop = 0;
        });
    for (const view of document.querySelectorAll('[data-view-is]'))
        view.addEventListener('click', () => {
            page.dataset.view = view.dataset.viewIs;
            for (const other of view.parentElement.children) other.classList.toggle('on', other === view);
        });
<\/script>
</body>
</html>
`})]})]}),a.jsxs(i,{children:[a.jsx(d,{children:"18"}),a.jsx(o,{children:"An Opal Rail and a White Top"}),a.jsx(t,{children:"Concept 18, an idea, after the homes I liked, the lighter way."}),a.jsx(t,{children:"The same narrow rail, lighter: pale opal, the subjects' marks carrying the color, and the subject's name on white."}),a.jsxs(t,{children:[a.jsx(p,{}),a.jsx(r,{children:"/.design/3-every-concept~018-desk.png"}),a.jsx(r,{children:"/.design/3-every-concept~018-phone.png"})]}),a.jsxs(t,{children:[a.jsx(c,{}),a.jsx(n,{children:`<!doctype html>
<html lang="en" data-layout="rail" data-tone="light" data-at="subject" data-view="shelf">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>An Opal Rail and a White Top</title>
<meta name="number" content="18">
<meta name="state" content="idea">
<meta name="after" content="the homes I liked, the lighter way">
<meta name="idea" content="The same narrow rail, lighter: pale opal, the subjects' marks carrying the color, and the subject's name on white.">
<meta name="said" content="">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
<style>
    /* ---- what does not change between the ideas ----
       The frame is soft black, the blue between it and white, and white. The soft black #0c1b1f and the opal #c8f4fb are the
       coming-soon page's own; the blues are the hue between them (208 to 223 in OKLCH) walked from dark to light.
       The CONTENT keeps its own colors: every book a cover of its own, the light accents the opal's wave. */
    :root { --night: #0c1b1f; --deep: #14323c; --blue: #166178; --sea: #4e9eb9; --sky: #8fc8dc; --opal: #c8f4fb; --pale: #e3f5fa; --mist: #f1f7f9; --white: #ffffff;
        --ink: #10252c; --soft: #516770; --line: #dbe7ec; --me: #e8590c;
        --wash: linear-gradient(105deg, #e2f6fb 0%, #ecf0fd 52%, #fae9f4 100%);
        --serif: 'Cormorant Garamond', Georgia, serif; --sans: 'Inter', system-ui, sans-serif; }
    [data-tone="dark"] { --bar: var(--night); --bar-fg: #ffffff; --bar-dim: #a9bcc1; --bar-on: rgba(255, 255, 255, .11); --bar-line: #1d3339; --mark: var(--opal); --mark-fg: var(--night); }
    [data-tone="light"] { --bar: var(--white); --bar-fg: var(--ink); --bar-dim: var(--soft); --bar-on: var(--pale); --bar-line: var(--line); --mark: var(--night); --mark-fg: #ffffff; }
    [data-at="library"] [class*="at-"]:not(.at-library), [data-at="subject"] [class*="at-"]:not(.at-subject), [data-at="book"] [class*="at-"]:not(.at-book), [data-at="chat"] [class*="at-"]:not(.at-chat), [data-at="author"] [class*="at-"]:not(.at-author) { display: none !important; }

    * { box-sizing: border-box; margin: 0; }
    body { background: var(--white); color: var(--ink); font: 400 14px/1.5 var(--sans); }
    a { color: inherit; text-decoration: none; }
    svg { width: 15px; height: 15px; stroke: currentColor; fill: none; stroke-width: 1.7; stroke-linecap: round; stroke-linejoin: round; flex: none; }
    [data-go], [data-view-is] { cursor: pointer; }
    h4 { display: flex; align-items: center; gap: 8px; margin-bottom: 10px; font: 600 10.5px/1 var(--sans); letter-spacing: .12em; text-transform: uppercase; color: var(--soft); }
    h4 small { margin-left: auto; font: 400 11.5px/1 var(--sans); letter-spacing: 0; text-transform: none; }
    h4.next { margin-top: 22px; }
    .star { color: var(--me); font-style: normal; }

    /* the library's own things: its mark, its subjects, a way to find, and me. They are held together only where an idea has a side bar. */
    .side { display: contents; }
    [data-at="chat"] .holds a.first { background: var(--bar-on, var(--pale)); }
    .lib { grid-area: lib; display: flex; align-items: center; gap: 6px; min-width: 0; background: var(--bar); color: var(--bar-fg); }
    .logo { display: flex; align-items: center; gap: 10px; flex: none; }
    .logo i { display: grid; place-items: center; width: 30px; height: 30px; border-radius: 8px; background: var(--mark); color: var(--mark-fg); font: 600 15px/1 var(--sans); font-style: normal; }
    .logo b { font: 600 21px/1 var(--serif); white-space: nowrap; }
    .subjects { display: flex; gap: 2px; min-width: 0; }
    .s { display: flex; align-items: center; gap: 8px; padding: 7px 10px; border-radius: 8px; color: var(--bar-dim); font-size: 13.5px; }
    .s i { display: grid; place-items: center; flex: none; width: 9px; height: 9px; border-radius: 50%; background: var(--c); color: #fff; font: 600 0/1 var(--sans); font-style: normal; }
    .s b { font-weight: 500; }
    .s small { font-size: 12px; opacity: .7; }
    :is([data-at="subject"], [data-at="book"], [data-at="chat"]) .s.is-claude { background: var(--bar-on); color: var(--bar-fg); }
    .find { display: flex; align-items: center; gap: 8px; padding: 6px 11px; border-radius: 9px; white-space: nowrap; }
    .lib .find { margin-left: auto; background: var(--bar-on); color: var(--bar-dim); }
    .me { grid-area: me; display: flex; align-items: center; gap: 9px; background: var(--bar); color: var(--bar-fg); }
    .me i { display: grid; place-items: center; flex: none; width: 32px; height: 32px; border-radius: 50%; background: var(--me); color: #fff; font: 600 14px/1 var(--sans); font-style: normal; }
    .me b { display: block; font-weight: 500; line-height: 1.2; white-space: nowrap; }
    .me small { display: block; font-size: 11.5px; opacity: .7; white-space: nowrap; }

    /* the open page's own things: what it is filed under, its name, who it is by, its tools */
    .sub { --sub-fg: var(--ink); --sub-dim: var(--soft); --ctl: var(--mist); --ctl-line: var(--line); --ctl-fg: var(--soft); --on: var(--night); --on-fg: #fff; --lnk: var(--blue); --melnk: var(--me);
        grid-area: sub; display: flex; flex-wrap: wrap; align-items: flex-end; gap: 10px 20px; min-width: 0; padding: 20px 28px 14px; color: var(--sub-fg); }
    .chain { display: flex; align-items: center; gap: 7px; font-size: 12.5px; color: var(--sub-dim); white-space: nowrap; }
    .chain em { font: 600 9.5px/1 var(--sans); font-style: normal; letter-spacing: .12em; text-transform: uppercase; }
    .chain span { display: flex; align-items: center; gap: 7px; }
    .chain i { font-style: normal; opacity: .55; }
    .chain a { font-weight: 500; color: var(--lnk); }
    .title { min-width: 0; }
    h1 { margin-top: 4px; font: 600 36px/1.04 var(--serif); white-space: nowrap; }
    .title p { margin-top: 4px; font-size: 13px; color: var(--sub-dim); }
    .title p a { color: var(--lnk); font-weight: 500; }
    .title p a.to-me { color: var(--melnk); text-decoration: underline; text-decoration-color: var(--me); text-decoration-thickness: 2px; text-underline-offset: 3px; }
    .tools { margin-left: auto; }
    .tools > div { display: flex; flex-wrap: wrap; justify-content: flex-end; align-items: center; gap: 8px; }
    .seg { display: flex; overflow: hidden; border: 1px solid var(--ctl-line); border-radius: 9px; background: var(--ctl); }
    .seg span { padding: 6px 12px; color: var(--ctl-fg); }
    .seg span.on { background: var(--on); color: var(--on-fg); font-weight: 500; }
    .sub .find { border: 1px solid var(--ctl-line); background: var(--ctl); color: var(--ctl-fg); }
    .fav { display: flex; align-items: center; gap: 6px; padding: 6px 11px; border-radius: 9px; background: color-mix(in srgb, var(--me) 12%, white); color: #a8400a; font-weight: 500; white-space: nowrap; }

    /* down: what the open page holds */
    .holds { grid-area: holds; min-width: 0; }
    .holds a { display: flex; align-items: center; gap: 9px; padding: 6px 9px; border-radius: 8px; }
    .holds a i { flex: none; width: 9px; height: 9px; border-radius: 50%; background: var(--c, var(--sea)); }
    .holds a b { font-weight: 500; }
    .holds a small { margin-left: auto; font-size: 12px; color: var(--soft); }
    .holds a.on { background: var(--pale); }

    /* the page itself */
    .thing { grid-area: thing; min-width: 0; }
    .go { display: flex; align-items: center; gap: 20px; margin-bottom: 22px; padding: 16px 20px; border-radius: 16px; background: var(--wash); }
    .go .cover { flex: none; width: 92px; padding: 10px 8px 8px 13px; }
    .go .cover b { font-size: 13.5px; }
    .go .cover small { font-size: 7.5px; padding-top: 6px; }
    .go em { font: 600 10.5px/1 var(--sans); font-style: normal; letter-spacing: .1em; text-transform: uppercase; color: var(--me); }
    .go h2 { margin: 4px 0 2px; font: 600 24px/1.1 var(--serif); }
    .go p { max-width: 52ch; font-size: 13px; color: var(--soft); }
    .go u { display: block; width: 260px; max-width: 100%; height: 4px; margin: 10px 0 6px; border-radius: 9px; background: rgba(12, 27, 31, .1); text-decoration: none; }
    .go u i { display: block; width: 14%; height: 100%; border-radius: 9px; background: var(--me); }
    .go small { font-size: 12px; color: var(--soft); }
    .go .read { margin-left: auto; }
    .read { display: inline-flex; align-items: center; gap: 8px; padding: 9px 18px; border-radius: 99px; background: var(--night); color: #fff; font-weight: 500; white-space: nowrap; }

    /* a cover is the landmark of a book, and every book has a color of its own; my own books are the soft black */
    .cover { position: relative; display: flex; flex-direction: column; aspect-ratio: 3 / 4; padding: 13px 11px 10px 17px; border-radius: 3px 7px 7px 3px; color: #fff; background: linear-gradient(160deg, color-mix(in srgb, var(--c) 90%, white), color-mix(in srgb, var(--c) 86%, black)); box-shadow: 0 12px 22px -14px rgba(12, 27, 31, .55); }
    .cover::before { content: ''; position: absolute; left: 7px; top: 0; bottom: 0; width: 1px; background: rgba(255, 255, 255, .3); }
    .cover b { font: 600 17px/1.08 var(--serif); }
    .cover small { margin-top: auto; padding-top: 8px; border-top: 1px solid rgba(255, 255, 255, .32); font: 600 9px/1.2 var(--sans); letter-spacing: .1em; text-transform: uppercase; opacity: .92; }
    .cover.mine { --c: var(--night); color: var(--opal); background: linear-gradient(160deg, #16303a, var(--night)); }
    .bk:nth-child(8n+1), .open, .go { --c: #e07a35; }
    .bk:nth-child(8n+2) { --c: #c2413f; }
    .bk:nth-child(8n+3) { --c: #4450b8; }
    .bk:nth-child(8n+4) { --c: #1f8a78; }
    .bk:nth-child(8n+5) { --c: #7a4a8c; }
    .bk:nth-child(8n+6) { --c: #2f7fb0; }
    .bk:nth-child(8n+7) { --c: #3d7a4e; }
    .bk:nth-child(8n) { --c: #c24a78; }
    .shelf { display: grid; grid-template-columns: repeat(auto-fill, minmax(124px, 1fr)); gap: 22px 18px; }
    .bk { display: block; }
    .bk .name { display: none; }
    .bk p { display: flex; gap: 6px; margin-top: 8px; font-size: 12px; color: var(--soft); }
    [data-view="list"] .shelf { grid-template-columns: minmax(0, 1fr); gap: 0; }
    [data-view="list"] .bk { display: grid; grid-template-columns: 30px minmax(0, 1fr) auto; gap: 14px; align-items: center; padding: 9px 0; border-bottom: 1px solid var(--line); }
    [data-view="list"] .bk .cover { padding: 0; border-radius: 2px 4px 4px 2px; box-shadow: none; }
    [data-view="list"] .bk .cover::before { left: 4px; }
    [data-view="list"] .bk .cover b, [data-view="list"] .bk .cover small { display: none; }
    [data-view="list"] .bk .name { display: block; font: 600 19px/1.2 var(--serif); }
    [data-view="list"] .bk p { margin: 0; }
    .mines { display: grid; grid-template-columns: repeat(auto-fill, minmax(124px, 148px)); gap: 18px; }

    .tiles { display: grid; grid-template-columns: repeat(auto-fill, minmax(210px, 1fr)); gap: 14px; margin-bottom: 26px; }
    .tile { display: block; padding: 14px 16px 16px; border-radius: 14px; background: var(--t); }
    .tile i { display: block; width: 26px; height: 26px; margin-bottom: 24px; border-radius: 8px; background: var(--c); }
    .tile b { display: block; font: 600 21px/1.1 var(--serif); }
    .tile small { font-size: 12.5px; color: var(--soft); }

    .open, .person { display: flex; gap: 26px; align-items: flex-start; }
    .cover.big { flex: none; width: 180px; padding: 20px 15px 13px 24px; }
    .cover.big b { font-size: 26px; }
    .cover.big::before { left: 11px; }
    .words { min-width: 0; }
    .says { max-width: 56ch; font: 500 20px/1.5 var(--serif); }
    .words .read { margin-top: 18px; }
    .face { display: grid; place-items: center; flex: none; width: 96px; height: 96px; border-radius: 50%; background: var(--me); color: #fff; font: 600 46px/1 var(--serif); box-shadow: 0 0 0 5px var(--white), 0 0 0 6px color-mix(in srgb, var(--me) 45%, white); }
    .counts { display: flex; gap: 26px; margin: 16px 0 22px; color: var(--soft); font-size: 12.5px; }
    .counts b { display: block; font: 600 26px/1.1 var(--serif); color: var(--ink); }

    /* a conversation, in the form of the application it comes from; my turns in my color */
    .chat { display: grid; gap: 20px; max-width: 720px; margin: 0 auto; }
    .chat .who { display: block; margin-bottom: 4px; font: 600 10.5px/1 var(--sans); letter-spacing: .1em; text-transform: uppercase; color: var(--soft); }
    .chat .mine { justify-self: end; max-width: 78%; padding: 11px 16px; border-radius: 18px 18px 4px 18px; background: color-mix(in srgb, var(--me) 9%, white); font-size: 15px; }
    .chat .mine .who { color: var(--me); }
    .chat .theirs p { font: 500 19.5px/1.55 var(--serif); }
    .chat .theirs p + p { margin-top: 10px; }
    .chat mark { padding: 1px 3px; border-radius: 3px; background: var(--pale); color: inherit; }
    .chat sup { margin-left: 2px; font: 600 10.5px/1 var(--sans); color: var(--me); }
    .chat pre { margin: 12px 0; padding: 12px 14px; border-radius: 10px; background: var(--night); color: #d7e6ea; font: 400 12.5px/1.6 ui-monospace, 'Cascadia Code', Consolas, monospace; overflow: auto; }
    .chat .made { display: flex; align-items: center; gap: 10px; width: fit-content; margin-top: 12px; padding: 9px 13px; border: 1px solid var(--line); border-radius: 12px; font-size: 13px; }
    .chat .made i { display: grid; place-items: center; width: 30px; height: 30px; border-radius: 8px; background: var(--pale); color: var(--blue); font-style: normal; }
    .chat .made small { display: block; color: var(--soft); font-size: 12px; }
    .chat .turns { display: flex; justify-content: space-between; padding-top: 16px; border-top: 1px solid var(--line); color: var(--blue); font-weight: 500; }

    /* across: what it cites, what cites it, and what I wrote beside it */
    .across { grid-area: across; min-width: 0; }
    .ref { display: block; margin-bottom: 8px; padding: 10px 12px; border: 1px solid var(--line); border-radius: 12px; background: var(--white); }
    .ref .to { display: flex; align-items: center; gap: 7px; font-weight: 600; }
    .ref .to svg { color: var(--soft); }
    .ref .to i { flex: none; width: 9px; height: 9px; border-radius: 50%; background: var(--c, var(--sea)); }
    .ref p { margin-top: 2px; font-size: 12.5px; color: var(--soft); }
    .ref q { display: block; margin-top: 7px; padding: 6px 9px; border-radius: 7px; background: var(--pale); font: italic 500 15.5px/1.35 var(--serif); quotes: '“' '”'; }
    .note { padding: 10px 12px; border: 1px dashed var(--line); border-radius: 12px; font-size: 13px; color: var(--soft); }
    .note b { display: block; margin-bottom: 2px; color: var(--ink); font-weight: 500; }
    .return { display: none; align-items: center; gap: 8px; margin-bottom: 14px; padding: 9px 12px; border-radius: 10px; background: var(--night); color: #fff; font-weight: 500; }
    .return svg { color: var(--sky); }
    [data-at="author"][data-from="book"] .return.to-book, [data-at="author"][data-from="subject"] .return.to-subject { display: flex; }

    /* ---- what each idea colors, at every width ---- */
    [data-layout="both"] .holds { background: var(--pale); }
    [data-layout="both"] .holds a.on { background: var(--white); }
    [data-layout="rail"][data-tone="dark"] .sub { --sub-fg: #fff; --sub-dim: rgba(255, 255, 255, .8); --ctl: rgba(12, 27, 31, .26); --ctl-line: transparent; --ctl-fg: #fff; --on: #fff; --on-fg: var(--night); --lnk: #fff; --melnk: #fff; background: var(--blue); }
    [data-layout="rail"][data-tone="dark"] .fav { background: #fff; }
    [data-layout="rail"][data-tone="light"] { --bar: var(--pale); --bar-on: #fff; --bar-line: #cbe6ee; }
    [data-layout="two"][data-tone="dark"] .sub { --sub-dim: #27505c; --ctl: rgba(255, 255, 255, .62); --ctl-line: transparent; --ctl-fg: var(--ink); --lnk: var(--deep); background: var(--sky); }
    [data-layout="two"][data-tone="light"] .sub { --ctl: #fff; background: var(--pale); }
    [data-layout="side"][data-tone="light"] { --bar: var(--mist); --bar-on: #fff; }
    [data-layout="cards"][data-tone="light"] { --canvas: #e9f2f5; --bar-on: #fff; }
    [data-layout="cards"][data-tone="dark"] { --canvas: var(--night); }
    [data-layout="cards"] body, [data-layout="cards"] .lib, [data-layout="cards"] .me { background: var(--canvas); }
    [data-layout="cards"] :is(.sub, .holds, .thing, .across) { background: var(--white); }
    :is([data-layout="header"], [data-layout="both"], [data-layout="two"], [data-layout="cards"]):is([data-at="subject"], [data-at="book"], [data-at="chat"]) .s.is-claude { box-shadow: inset 0 -2px 0 var(--c); }

    /* ---- at a desk: where each idea puts the bars ---- */
    @media (min-width: 761px) {
        html, body { height: 100%; }
        body { display: grid; overflow: hidden; }
        .thing { padding: 20px 28px 40px; overflow: auto; }
        .holds { padding: 18px 12px; overflow: auto; }
        .across { padding: 18px 16px; overflow: auto; border-left: 1px solid var(--line); }

        /* a bar across the top holds the library, with me at its right end */
        :is([data-layout="header"], [data-layout="both"], [data-layout="two"], [data-layout="cards"]) .lib { padding: 9px 170px 9px 18px; }
        :is([data-layout="header"], [data-layout="both"], [data-layout="two"], [data-layout="cards"]) .logo { margin-right: 12px; }
        :is([data-layout="header"], [data-layout="both"], [data-layout="two"], [data-layout="cards"]) :is(.s small, .me small, .lib .find em) { display: none; }
        :is([data-layout="header"], [data-layout="both"], [data-layout="two"], [data-layout="cards"]) .me { grid-area: lib; justify-self: end; z-index: 1; padding: 0 18px 0 8px; background: none; }
        [data-tone="light"]:is([data-layout="header"], [data-layout="both"], [data-layout="two"]) .lib { border-bottom: 1px solid var(--line); }

        [data-layout="header"] body { grid-template: auto auto auto minmax(0, 1fr) / minmax(0, 1fr) 300px; grid-template-areas: "lib lib" "sub sub" "holds holds" "thing across"; }
        [data-layout="both"] body { grid-template: auto auto minmax(0, 1fr) / 240px minmax(0, 1fr) 300px; grid-template-areas: "lib lib lib" "holds sub sub" "holds thing across"; }
        [data-layout="both"] .holds { padding: 20px 12px; border-right: 1px solid #cbe6ee; }
        [data-layout="two"] body { grid-template: auto auto minmax(0, 1fr) / 236px minmax(0, 1fr) 300px; grid-template-areas: "lib lib lib" "sub sub sub" "holds thing across"; }
        [data-layout="two"] .sub { align-items: center; padding: 9px 24px; }
        [data-layout="two"] .title { display: flex; flex-wrap: wrap; align-items: baseline; gap: 4px 16px; }
        [data-layout="two"] h1 { margin: 0; font-size: 26px; order: -1; }
        [data-layout="two"] .title p { display: none; }
        [data-layout="two"] .holds { border-right: 1px solid var(--line); }
        [data-layout="cards"] body { grid-template: auto auto minmax(0, 1fr) / 244px minmax(0, 1fr) 300px; grid-template-areas: "lib lib lib" "holds sub across" "holds thing across"; column-gap: 12px; padding: 0 12px 12px; }
        [data-layout="cards"] .lib { padding: 11px 170px 11px 6px; }
        [data-layout="cards"] .me { padding: 0 6px; }
        [data-layout="cards"] :is(.holds, .across) { border: 0; border-radius: 16px; }
        [data-layout="cards"] .sub { border-radius: 16px 16px 0 0; }
        [data-layout="cards"] .thing { border-radius: 0 0 16px 16px; }

        /* a bar down the left holds the library, with me at its foot */
        [data-layout="side"] body { grid-template: auto minmax(0, 1fr) / 256px minmax(0, 1fr) 300px; grid-template-areas: "side sub sub" "side thing across"; }
        [data-layout="side"] .side { grid-area: side; display: flex; flex-direction: column; min-height: 0; background: var(--bar); }
        [data-layout="side"] .holds { flex: 1; order: 1; }
        [data-layout="side"] .me { order: 2; }
        [data-layout="side"] .lib { flex-direction: column; align-items: stretch; gap: 2px; padding: 18px 12px 12px; }
        [data-layout="side"] .logo { padding: 0 6px 14px; }
        [data-layout="side"] .subjects { flex-direction: column; }
        [data-layout="side"] .s small { margin-left: auto; }
        [data-layout="side"] .lib .find { margin: 10px 0 0; }
        [data-layout="side"] .holds { padding: 14px 12px; border-top: 1px solid var(--bar-line); background: var(--bar); color: var(--bar-fg); }
        [data-layout="side"] .holds h4, [data-layout="side"] .holds a small { color: var(--bar-dim); }
        [data-layout="side"] .holds a.on { background: var(--bar-on); }
        [data-layout="side"] .me { padding: 12px 18px 14px; border-top: 1px solid var(--bar-line); }
        [data-layout="side"][data-tone="light"] .side { border-right: 1px solid var(--line); }

        /* a narrow rail holds the subjects as marks and me as a face */
        [data-layout="rail"] body { grid-template: auto auto minmax(0, 1fr) auto / 68px minmax(0, 1fr) 300px; grid-template-areas: "lib sub sub" "lib holds holds" "lib thing across" "me thing across"; }
        [data-layout="rail"] .lib { flex-direction: column; gap: 12px; padding: 14px 0; }
        [data-layout="rail"] :is(.logo b, .lib .find, .s b, .s small, .me span) { display: none; }
        [data-layout="rail"] .subjects { flex-direction: column; align-items: center; gap: 10px; }
        [data-layout="rail"] .s { padding: 0; background: none; }
        [data-layout="rail"] :is(.s i, .logo i, .me i) { width: 40px; height: 40px; border-radius: 11px; font-size: 13px; }
        [data-layout="rail"] .logo i, [data-layout="rail"] .me i { font-size: 16px; }
        [data-layout="rail"] .me i { border-radius: 50%; }
        [data-layout="rail"]:is([data-at="subject"], [data-at="book"], [data-at="chat"]) .s.is-claude i { box-shadow: 0 0 0 2px var(--bar), 0 0 0 4px var(--c); }
        [data-layout="rail"] .me { justify-content: center; padding: 10px 0 14px; }
        [data-layout="rail"] .sub { padding: 16px 26px 14px; }
        [data-layout="rail"][data-tone="light"] :is(.lib, .me) { border-right: 1px solid #cbe6ee; }

        /* with no side bar, what the page holds is a row under its name */
        :is([data-layout="header"], [data-layout="rail"]) .holds { padding: 12px 28px; overflow: auto hidden; border-bottom: 1px solid var(--line); scrollbar-width: none; }
        [data-layout="header"] .holds { padding-top: 0; }
        :is([data-layout="header"], [data-layout="rail"]) .holds > div { display: flex; align-items: center; gap: 6px; }
        :is([data-layout="header"], [data-layout="rail"]) .holds h4 { flex: none; margin: 0 6px 0 0; }
        :is([data-layout="header"], [data-layout="rail"]) .holds h4.next { margin-left: 18px; }
        :is([data-layout="header"], [data-layout="rail"]) .holds h4 small { display: none; }
        :is([data-layout="header"], [data-layout="rail"]) .holds a { flex: none; padding: 5px 11px 5px 9px; border: 1px solid var(--line); border-radius: 99px; white-space: nowrap; }
        :is([data-layout="header"], [data-layout="rail"]) .holds a small { margin-left: 4px; }
        :is([data-layout="header"], [data-layout="rail"]) .holds a.on { border-color: transparent; }
    }

    /* ---- on a phone: one bar at the top, the page beneath it in one column ---- */
    @media (max-width: 760px) {
        body { position: relative; display: flex; flex-direction: column; }
        .sub { order: 1; }
        .holds { order: 2; }
        .thing { order: 3; }
        .across { order: 4; }
        .lib { position: sticky; top: 0; z-index: 4; height: 50px; margin-right: 54px; padding: 0 8px 0 14px; gap: 4px; overflow: auto hidden; scrollbar-width: none; }
        .logo { margin-right: 8px; }
        .logo b { font-size: 19px; }
        .s { white-space: nowrap; }
        .s small, .lib .find, .me span { display: none; }
        .me { position: fixed; z-index: 5; top: 0; right: 0; justify-content: center; width: 54px; height: 50px; }
        [data-tone="light"] :is(.lib, .me) { border-bottom: 1px solid var(--line); }
        .sub { flex-direction: column; flex-wrap: nowrap; align-items: stretch; padding: 16px 16px 12px; }
        h1 { font-size: 28px; white-space: normal; }
        .chain { overflow: auto hidden; scrollbar-width: none; }
        .tools { margin: 0; }
        .tools > div { justify-content: flex-start; }
        .holds { padding: 10px 16px 12px; overflow: auto hidden; border-bottom: 1px solid var(--line); scrollbar-width: none; }
        .holds > div { display: flex; align-items: center; gap: 6px; }
        .holds h4 { flex: none; margin: 0 6px 0 0; }
        .holds h4.next { margin-left: 18px; }
        .holds h4 small { display: none; }
        .holds a { flex: none; padding: 5px 11px 5px 9px; border: 1px solid var(--line); border-radius: 99px; background: var(--white); white-space: nowrap; }
        .holds a small { margin-left: 4px; }
        .thing { padding: 16px 16px 24px; }
        .go { flex-wrap: wrap; gap: 14px; padding: 14px; }
        .go > div { flex: 1 1 60%; min-width: 0; }
        .go .read { margin: 0; }
        .shelf { grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 16px 12px; }
        .cover { padding: 10px 8px 8px 13px; }
        .cover b { font-size: 14.5px; }
        .open, .person { flex-direction: column; gap: 16px; }
        .cover.big { width: 150px; }
        .cover.big b { font-size: 22px; }
        .counts { gap: 18px; }
        .chat .mine { max-width: 88%; }
        .across { padding: 16px; border-top: 1px solid var(--line); }

        /* a side bar or a rail turns to lie along the foot, the subjects as marks */
        :is([data-layout="side"], [data-layout="rail"]) body { padding-bottom: 60px; }
        :is([data-layout="side"], [data-layout="rail"]) .subjects { position: fixed; z-index: 4; left: 0; right: 0; bottom: 0; justify-content: space-around; padding: 8px 10px; border-top: 1px solid var(--bar-line); background: var(--bar); }
        :is([data-layout="side"], [data-layout="rail"]) .s { padding: 0; background: none; box-shadow: none; }
        :is([data-layout="side"], [data-layout="rail"]) .s b { display: none; }
        :is([data-layout="side"], [data-layout="rail"]) .s i { width: 42px; height: 42px; border-radius: 12px; font-size: 13px; }
        :is([data-layout="side"], [data-layout="rail"]):is([data-at="subject"], [data-at="book"], [data-at="chat"]) .s.is-claude i { box-shadow: 0 0 0 2px var(--bar), 0 0 0 4px var(--c); }

        [data-layout="two"] .sub { padding: 12px 16px; }
        [data-layout="two"] .title p { display: none; }
        [data-layout="cards"] body { padding-bottom: 10px; }
        [data-layout="cards"] :is(.sub, .holds, .thing, .across) { margin: 0 10px; }
        [data-layout="cards"] .sub { margin-top: 4px; border-radius: 14px 14px 0 0; }
        [data-layout="cards"] .thing { border-radius: 0 0 14px 14px; }
        [data-layout="cards"] .across { margin-top: 10px; border: 0; border-radius: 14px; }
    }
</style>
</head>
<body>

<div class="side">
<header class="lib">
    <a class="logo" data-go="library"><i>D</i><b>Dougs Library</b></a>
    <nav class="subjects">
        <a class="s is-claude" data-go="subject" style="--c: var(--sea)"><i>Cl</i><b>Conversations with Claude</b><small>212</small></a>
        <a class="s" style="--c: #1f8a78"><i>Ch</i><b>Conversations with ChatGPT</b><small>147</small></a>
        <a class="s" style="--c: #c24a78"><i>De</i><b>Dougs Design</b><small>5</small></a>
        <a class="s" style="--c: #7a4a8c"><i>Rm</i><b>Dougs Reference Manual</b><small>3</small></a>
    </nav>
    <span class="find"><svg viewBox="0 0 16 16"><circle cx="7" cy="7" r="4.5"/><path d="M10.5 10.5 14 14"/></svg><em style="font-style: normal">Find in the library</em></span>
</header>

<a class="me" data-go="author"><i>D</i><span><b>The Librarian</b><small>my own account</small></span></a>

<aside class="holds">
    <div class="at-library">
        <h4>My favorites<small>3</small></h4>
        <a data-go="book" style="--c: #e07a35"><i></i><b>Lorem Ipsum Dolor</b><small class="star">★</small></a>
        <a style="--c: #4450b8"><i></i><b>Magna Aliqua</b><small class="star">★</small></a>
        <a style="--c: #c24a78"><i></i><b>The Library's Home</b><small class="star">★</small></a>
    </div>
    <div class="at-subject">
        <h4>Holds<small>3 projects</small></h4>
        <a class="on" style="--c: #e07a35"><i></i><b>A First Project</b><small>38</small></a>
        <a style="--c: #1f8a78"><i></i><b>A Second Project</b><small>91</small></a>
        <a style="--c: #4450b8"><i></i><b>A Third Project</b><small>83</small></a>
        <h4 class="next">My favorites here<small>2</small></h4>
        <a data-go="book" style="--c: #e07a35"><i></i><b>Lorem Ipsum Dolor</b><small class="star">★</small></a>
        <a style="--c: #4450b8"><i></i><b>Magna Aliqua</b><small class="star">★</small></a>
    </div>
    <div class="at-book at-chat">
        <h4>Holds<small>8 chapters</small></h4>
        <a class="first" data-go="chat" style="--c: #e07a35"><i></i><b>A First Chapter</b><small>1</small></a>
        <a style="--c: #e07a35"><i></i><b>A Second Chapter</b><small>2</small></a>
        <a style="--c: #e07a35"><i></i><b>A Third Chapter</b><small>3</small></a>
        <a style="--c: #e07a35"><i></i><b>A Fourth Chapter</b><small>4</small></a>
        <a style="--c: #e07a35"><i></i><b>A Fifth Chapter</b><small>5</small></a>
    </div>
    <div class="at-author">
        <h4>My books<small>3</small></h4>
        <a class="on" style="--c: var(--me)"><i></i><b>Dougs Story</b><small>3</small></a>
        <a style="--c: #c24a78"><i></i><b>Dougs Design</b><small>5</small></a>
        <a style="--c: #7a4a8c"><i></i><b>Dougs Reference Manual</b><small>3</small></a>
    </div>
</aside>
</div>

<section class="sub">
    <div class="title">
        <div class="chain">
            <em>Filed under</em>
            <span class="at-library">itself</span>
            <span class="at-subject"><a data-go="library">Dougs Library</a></span>
            <span class="at-book"><a data-go="subject">Conversations with Claude</a><i>›</i><a data-go="subject">A First Project</a></span>
            <span class="at-chat"><a data-go="subject">Conversations with Claude</a><i>›</i><a data-go="subject">A First Project</a><i>›</i><a data-go="book">Lorem Ipsum Dolor</a></span>
            <span class="at-author"><a data-go="library">Dougs Library</a></span>
        </div>
        <h1 class="at-library">Dougs Library</h1>
        <h1 class="at-subject">Conversations with Claude</h1>
        <h1 class="at-book">Lorem Ipsum Dolor</h1>
        <h1 class="at-chat">A First Chapter</h1>
        <h1 class="at-author">Dougs Story</h1>
        <p class="at-library">by <a class="to-me" data-go="author">The Librarian</a> · three books and two subjects · 359 conversations kept</p>
        <p class="at-subject">a subject · 212 books in three projects · by <a class="to-me" data-go="author">The Librarian</a></p>
        <p class="at-book">by <a class="to-me" data-go="author">The Librarian</a> and Claude · 8 chapters · kept 9 Sep 2026</p>
        <p class="at-chat">chapter 1 of 8 · <a class="to-me" data-go="author">The Librarian</a> and Claude · kept 9 Sep 2026</p>
        <p class="at-author">The Librarian · my own account</p>
    </div>
    <div class="tools">
        <div class="at-subject">
            <span class="seg"><span class="on" data-view-is="shelf">Shelf</span><span data-view-is="list">List</span><span>Table</span></span>
            <span class="find"><svg viewBox="0 0 16 16"><circle cx="7" cy="7" r="4.5"/><path d="M10.5 10.5 14 14"/></svg>Find in this subject</span>
        </div>
        <div class="at-book">
            <span class="fav"><em class="star">★</em>Among my favorites</span>
            <span class="find"><svg viewBox="0 0 16 16"><circle cx="7" cy="7" r="4.5"/><path d="M10.5 10.5 14 14"/></svg>Find in this book</span>
        </div>
        <div class="at-chat">
            <span class="find"><svg viewBox="0 0 16 16"><path d="M8 3v10M3 8h10"/></svg>Note on a passage</span>
            <span class="find"><svg viewBox="0 0 16 16"><circle cx="7" cy="7" r="4.5"/><path d="M10.5 10.5 14 14"/></svg>Find in this book</span>
        </div>
    </div>
</section>

<main class="thing">
    <div class="at-library">
        <h4>Subjects</h4>
        <div class="tiles">
            <a class="tile" data-go="subject" style="--t: #dff3fa; --c: var(--sea)"><i></i><b>Conversations with Claude</b><small>212 books in three projects</small></a>
            <a class="tile" style="--t: #dcf5ee; --c: #1f8a78"><i></i><b>Conversations with ChatGPT</b><small>147 books</small></a>
        </div>
        <h4>My books</h4>
        <div class="mines">
            <a class="cover mine" data-go="author"><b>Dougs Story</b><small>my own account</small></a>
            <a class="cover mine"><b>Dougs Design</b><small>the design</small></a>
            <a class="cover mine"><b>Dougs Reference Manual</b><small>the parts</small></a>
        </div>
    </div>

    <div class="at-subject">
        <div class="go">
            <span class="cover"><b>Lorem Ipsum Dolor</b><small>with Claude</small></span>
            <div>
                <em>Continue</em>
                <h2>Lorem Ipsum Dolor</h2>
                <p>A First Project · kept 9 September 2026. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                <u><i></i></u>
                <small>Chapter 1 of 8 · 2 notes of mine · cited twice</small>
            </div>
            <a class="read" data-go="chat">Read</a>
        </div>
        <h4>Lately kept<small>212 books · newest first</small></h4>
        <div class="shelf">
            <a class="bk" data-go="book"><span class="cover"><b>Lorem Ipsum Dolor</b><small>with Claude</small></span><b class="name">Lorem Ipsum Dolor</b><p>9 Sep · 8 chapters <em class="star">★</em></p></a>
            <a class="bk"><span class="cover"><b>Quis Nostrud</b><small>with Claude</small></span><b class="name">Quis Nostrud</b><p>1 Oct · 6 chapters</p></a>
            <a class="bk"><span class="cover"><b>Magna Aliqua</b><small>with Claude</small></span><b class="name">Magna Aliqua</b><p>20 Sep · 11 chapters <em class="star">★</em></p></a>
            <a class="bk"><span class="cover"><b>Tempor Incididunt</b><small>with Claude</small></span><b class="name">Tempor Incididunt</b><p>12 Sep · 7 chapters</p></a>
            <a class="bk"><span class="cover"><b>Ut Enim ad Minim</b><small>with Claude</small></span><b class="name">Ut Enim ad Minim</b><p>27 Sep · 3 chapters</p></a>
            <a class="bk"><span class="cover"><b>Sed Do Eiusmod</b><small>with Claude</small></span><b class="name">Sed Do Eiusmod</b><p>5 Sep · 2 chapters</p></a>
            <a class="bk"><span class="cover"><b>Adipiscing Elit</b><small>with Claude</small></span><b class="name">Adipiscing Elit</b><p>2 Sep · 9 chapters</p></a>
            <a class="bk"><span class="cover"><b>Sit Amet Consectetur</b><small>with Claude</small></span><b class="name">Sit Amet Consectetur</b><p>21 Jul · 14 chapters</p></a>
            <a class="bk"><span class="cover"><b>Duis Aute Irure</b><small>with Claude</small></span><b class="name">Duis Aute Irure</b><p>14 Jul · 5 chapters</p></a>
            <a class="bk"><span class="cover"><b>Excepteur Sint</b><small>with Claude</small></span><b class="name">Excepteur Sint</b><p>2 Jul · 4 chapters</p></a>
        </div>
    </div>

    <div class="open at-book">
        <span class="cover big"><b>Lorem Ipsum Dolor</b><small>with Claude</small></span>
        <div class="words">
            <p class="says">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
            <a class="read" data-go="chat">Read from A First Chapter<svg viewBox="0 0 16 16"><path d="M3 8h10M9 4l4 4-4 4"/></svg></a>
        </div>
    </div>

    <div class="chat at-chat">
        <div class="mine"><span class="who">The Librarian</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit? Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
        <div class="theirs">
            <span class="who">Claude</span>
            <p>Ut enim ad minim veniam, quis nostrud exercitation. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <mark>Excepteur sint occaecat cupidatat non proident</mark><sup>1</sup>, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
<pre>const lorem = ipsum.dolor('sit amet');
return lorem.consectetur();</pre>
            <a class="made"><i>◇</i><span><b>Lorem Ipsum, a first draft</b><small>made in this turn · opens beside the page</small></span></a>
        </div>
        <div class="mine"><span class="who">The Librarian</span>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit?</div>
        <div class="theirs">
            <span class="who">Claude</span>
            <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.</p>
        </div>
        <div class="turns"><span></span><a>A Second Chapter →</a></div>
    </div>

    <div class="person at-author">
        <span class="face">D</span>
        <div class="words">
            <p class="says">My own account, and the one book here that is by its own subject. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            <div class="counts"><span><b>3</b>books written</span><span><b>359</b>conversations kept</span><span><b>41</b>notes</span></div>
            <div class="mines">
                <a class="cover mine"><b>Dougs Story</b><small>my own account</small></a>
                <a class="cover mine"><b>Dougs Design</b><small>the design</small></a>
                <a class="cover mine"><b>Dougs Reference Manual</b><small>the parts</small></a>
            </div>
        </div>
    </div>
</main>

<aside class="across">
    <a class="return to-book" data-go="book"><svg viewBox="0 0 16 16"><path d="M13 8H3M7 4 3 8l4 4"/></svg>Back to Lorem Ipsum Dolor</a>
    <a class="return to-subject" data-go="subject"><svg viewBox="0 0 16 16"><path d="M13 8H3M7 4 3 8l4 4"/></svg>Back to Conversations with Claude</a>

    <div class="at-library">
        <h4>Lately kept</h4>
        <a class="ref" style="--c: #c2413f"><span class="to"><i></i>Quis Nostrud</span><p>1 Oct · Conversations with Claude</p></a>
        <a class="ref" style="--c: #7a4a8c"><span class="to"><i></i>Ut Enim ad Minim</span><p>27 Sep · Conversations with Claude</p></a>
        <h4 class="next">My notes<small>41</small></h4>
        <div class="note"><b>3 Oct 2026 · in Lorem Ipsum Dolor</b>Lorem ipsum, a note of mine beside the passage it is about.</div>
    </div>

    <div class="at-subject">
        <h4>Cited from outside<small>2</small></h4>
        <a class="ref" data-go="author" data-from="subject" style="--c: var(--me)"><span class="to"><svg viewBox="0 0 16 16"><path d="M13 8H3M7 4 3 8l4 4"/></svg><i></i>Dougs Story</span><p>chapter 1 cites Lorem Ipsum Dolor</p></a>
        <a class="ref" style="--c: #1f8a78"><span class="to"><svg viewBox="0 0 16 16"><path d="M13 8H3M7 4 3 8l4 4"/></svg><i></i>Conversations with ChatGPT</span><p>one book cites Adipiscing Elit</p></a>
        <h4 class="next">My notes here<small>12</small></h4>
        <div class="note"><b>3 Oct 2026 · in Lorem Ipsum Dolor</b>Lorem ipsum, a note of mine beside the passage it is about.</div>
    </div>

    <div class="at-book at-chat">
        <h4>Cites<small>1</small></h4>
        <a class="ref" style="--c: #3d7a4e"><span class="to"><svg viewBox="0 0 16 16"><path d="M3 8h10M9 4l4 4-4 4"/></svg><i></i>Adipiscing Elit</span><p>chapter 2 · A First Project</p></a>
        <h4 class="next">Cited by<small>2</small></h4>
        <a class="ref" data-go="author" data-from="book" style="--c: var(--me)"><span class="to"><svg viewBox="0 0 16 16"><path d="M13 8H3M7 4 3 8l4 4"/></svg><i></i>Dougs Story</span><p>chapter 1 · my own account</p><q>Excepteur sint occaecat cupidatat non proident</q></a>
        <a class="ref" style="--c: #c24a78"><span class="to"><svg viewBox="0 0 16 16"><path d="M13 8H3M7 4 3 8l4 4"/></svg><i></i>Sit Amet Consectetur</span><p>chapter 3 · A First Project</p></a>
        <h4 class="next">My notes<small>1</small></h4>
        <div class="note"><b>1 · 3 Oct 2026</b>Lorem ipsum, a note of mine beside the passage it is about.</div>
    </div>

    <div class="at-author">
        <h4>Cites<small>1</small></h4>
        <a class="ref" data-go="book" style="--c: #e07a35"><span class="to"><svg viewBox="0 0 16 16"><path d="M3 8h10M9 4l4 4-4 4"/></svg><i></i>Lorem Ipsum Dolor</span><p>chapter 1 · a conversation with Claude</p><q>Excepteur sint occaecat cupidatat non proident</q></a>
        <h4 class="next">Cited by<small>0</small></h4>
        <div class="note">Nothing cites this chapter yet.</div>
    </div>
</aside>

<script>
    const page = document.documentElement;
    for (const door of document.querySelectorAll('[data-go]'))
        door.addEventListener('click', () => {
            if (door.dataset.from) page.dataset.from = door.dataset.from;
            else delete page.dataset.from;
            page.dataset.at = door.dataset.go;
            window.scrollTo(0, 0);
            for (const column of document.querySelectorAll('.thing, .holds, .across')) column.scrollTop = 0;
        });
    for (const view of document.querySelectorAll('[data-view-is]'))
        view.addEventListener('click', () => {
            page.dataset.view = view.dataset.viewIs;
            for (const other of view.parentElement.children) other.classList.toggle('on', other === view);
        });
<\/script>
</body>
</html>
`})]})]}),a.jsxs(i,{children:[a.jsx(d,{children:"19"}),a.jsx(o,{children:"[Two Top Bars: Black, then Sky](/dougs-design/#two-top-bars-black-then-sky)"}),a.jsx(t,{children:"Concept 19, an idea, after the coming-soon page: its soft black, and a lighter step of the blue."}),a.jsx(t,{children:"Two bars across the top. The black one is the library's and never changes; the lighter blue one under it is the open subject's own, with its name and its tools, so a subject reads as a place of its own inside the library."}),a.jsxs(t,{children:[a.jsx(p,{}),a.jsx(r,{children:"/.design/3-every-concept~019-desk.png"}),a.jsx(r,{children:"/.design/3-every-concept~019-phone.png"})]}),a.jsxs(t,{children:[a.jsx(m,{}),"Maybe I like the black and sky for the library itself, with its more bookish view. I like the black and sky, though I think I want to be able to switch the view as part of the dynamism of the page."]}),a.jsxs(t,{children:[a.jsx(c,{}),a.jsx(n,{children:`<!doctype html>
<html lang="en" data-layout="two" data-tone="dark" data-at="subject" data-view="shelf">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Two Top Bars: Black, then Sky</title>
<meta name="number" content="19">
<meta name="state" content="idea">
<meta name="after" content="the coming-soon page: its soft black, and a lighter step of the blue">
<meta name="idea" content="Two bars across the top. The black one is the library's and never changes; the lighter blue one under it is the open subject's own, with its name and its tools, so a subject reads as a place of its own inside the library.">
<meta name="said" content="Maybe I like the black and sky for the library itself, with its more bookish view. I like the black and sky, though I think I want to be able to switch the view as part of the dynamism of the page.">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
<style>
    /* ---- what does not change between the ideas ----
       The frame is soft black, the blue between it and white, and white. The soft black #0c1b1f and the opal #c8f4fb are the
       coming-soon page's own; the blues are the hue between them (208 to 223 in OKLCH) walked from dark to light.
       The CONTENT keeps its own colors: every book a cover of its own, the light accents the opal's wave. */
    :root { --night: #0c1b1f; --deep: #14323c; --blue: #166178; --sea: #4e9eb9; --sky: #8fc8dc; --opal: #c8f4fb; --pale: #e3f5fa; --mist: #f1f7f9; --white: #ffffff;
        --ink: #10252c; --soft: #516770; --line: #dbe7ec; --me: #e8590c;
        --wash: linear-gradient(105deg, #e2f6fb 0%, #ecf0fd 52%, #fae9f4 100%);
        --serif: 'Cormorant Garamond', Georgia, serif; --sans: 'Inter', system-ui, sans-serif; }
    [data-tone="dark"] { --bar: var(--night); --bar-fg: #ffffff; --bar-dim: #a9bcc1; --bar-on: rgba(255, 255, 255, .11); --bar-line: #1d3339; --mark: var(--opal); --mark-fg: var(--night); }
    [data-tone="light"] { --bar: var(--white); --bar-fg: var(--ink); --bar-dim: var(--soft); --bar-on: var(--pale); --bar-line: var(--line); --mark: var(--night); --mark-fg: #ffffff; }
    [data-at="library"] [class*="at-"]:not(.at-library), [data-at="subject"] [class*="at-"]:not(.at-subject), [data-at="book"] [class*="at-"]:not(.at-book), [data-at="chat"] [class*="at-"]:not(.at-chat), [data-at="author"] [class*="at-"]:not(.at-author) { display: none !important; }

    * { box-sizing: border-box; margin: 0; }
    body { background: var(--white); color: var(--ink); font: 400 14px/1.5 var(--sans); }
    a { color: inherit; text-decoration: none; }
    svg { width: 15px; height: 15px; stroke: currentColor; fill: none; stroke-width: 1.7; stroke-linecap: round; stroke-linejoin: round; flex: none; }
    [data-go], [data-view-is] { cursor: pointer; }
    h4 { display: flex; align-items: center; gap: 8px; margin-bottom: 10px; font: 600 10.5px/1 var(--sans); letter-spacing: .12em; text-transform: uppercase; color: var(--soft); }
    h4 small { margin-left: auto; font: 400 11.5px/1 var(--sans); letter-spacing: 0; text-transform: none; }
    h4.next { margin-top: 22px; }
    .star { color: var(--me); font-style: normal; }

    /* the library's own things: its mark, its subjects, a way to find, and me. They are held together only where an idea has a side bar. */
    .side { display: contents; }
    [data-at="chat"] .holds a.first { background: var(--bar-on, var(--pale)); }
    .lib { grid-area: lib; display: flex; align-items: center; gap: 6px; min-width: 0; background: var(--bar); color: var(--bar-fg); }
    .logo { display: flex; align-items: center; gap: 10px; flex: none; }
    .logo i { display: grid; place-items: center; width: 30px; height: 30px; border-radius: 8px; background: var(--mark); color: var(--mark-fg); font: 600 15px/1 var(--sans); font-style: normal; }
    .logo b { font: 600 21px/1 var(--serif); white-space: nowrap; }
    .subjects { display: flex; gap: 2px; min-width: 0; }
    .s { display: flex; align-items: center; gap: 8px; padding: 7px 10px; border-radius: 8px; color: var(--bar-dim); font-size: 13.5px; }
    .s i { display: grid; place-items: center; flex: none; width: 9px; height: 9px; border-radius: 50%; background: var(--c); color: #fff; font: 600 0/1 var(--sans); font-style: normal; }
    .s b { font-weight: 500; }
    .s small { font-size: 12px; opacity: .7; }
    :is([data-at="subject"], [data-at="book"], [data-at="chat"]) .s.is-claude { background: var(--bar-on); color: var(--bar-fg); }
    .find { display: flex; align-items: center; gap: 8px; padding: 6px 11px; border-radius: 9px; white-space: nowrap; }
    .lib .find { margin-left: auto; background: var(--bar-on); color: var(--bar-dim); }
    .me { grid-area: me; display: flex; align-items: center; gap: 9px; background: var(--bar); color: var(--bar-fg); }
    .me i { display: grid; place-items: center; flex: none; width: 32px; height: 32px; border-radius: 50%; background: var(--me); color: #fff; font: 600 14px/1 var(--sans); font-style: normal; }
    .me b { display: block; font-weight: 500; line-height: 1.2; white-space: nowrap; }
    .me small { display: block; font-size: 11.5px; opacity: .7; white-space: nowrap; }

    /* the open page's own things: what it is filed under, its name, who it is by, its tools */
    .sub { --sub-fg: var(--ink); --sub-dim: var(--soft); --ctl: var(--mist); --ctl-line: var(--line); --ctl-fg: var(--soft); --on: var(--night); --on-fg: #fff; --lnk: var(--blue); --melnk: var(--me);
        grid-area: sub; display: flex; flex-wrap: wrap; align-items: flex-end; gap: 10px 20px; min-width: 0; padding: 20px 28px 14px; color: var(--sub-fg); }
    .chain { display: flex; align-items: center; gap: 7px; font-size: 12.5px; color: var(--sub-dim); white-space: nowrap; }
    .chain em { font: 600 9.5px/1 var(--sans); font-style: normal; letter-spacing: .12em; text-transform: uppercase; }
    .chain span { display: flex; align-items: center; gap: 7px; }
    .chain i { font-style: normal; opacity: .55; }
    .chain a { font-weight: 500; color: var(--lnk); }
    .title { min-width: 0; }
    h1 { margin-top: 4px; font: 600 36px/1.04 var(--serif); white-space: nowrap; }
    .title p { margin-top: 4px; font-size: 13px; color: var(--sub-dim); }
    .title p a { color: var(--lnk); font-weight: 500; }
    .title p a.to-me { color: var(--melnk); text-decoration: underline; text-decoration-color: var(--me); text-decoration-thickness: 2px; text-underline-offset: 3px; }
    .tools { margin-left: auto; }
    .tools > div { display: flex; flex-wrap: wrap; justify-content: flex-end; align-items: center; gap: 8px; }
    .seg { display: flex; overflow: hidden; border: 1px solid var(--ctl-line); border-radius: 9px; background: var(--ctl); }
    .seg span { padding: 6px 12px; color: var(--ctl-fg); }
    .seg span.on { background: var(--on); color: var(--on-fg); font-weight: 500; }
    .sub .find { border: 1px solid var(--ctl-line); background: var(--ctl); color: var(--ctl-fg); }
    .fav { display: flex; align-items: center; gap: 6px; padding: 6px 11px; border-radius: 9px; background: color-mix(in srgb, var(--me) 12%, white); color: #a8400a; font-weight: 500; white-space: nowrap; }

    /* down: what the open page holds */
    .holds { grid-area: holds; min-width: 0; }
    .holds a { display: flex; align-items: center; gap: 9px; padding: 6px 9px; border-radius: 8px; }
    .holds a i { flex: none; width: 9px; height: 9px; border-radius: 50%; background: var(--c, var(--sea)); }
    .holds a b { font-weight: 500; }
    .holds a small { margin-left: auto; font-size: 12px; color: var(--soft); }
    .holds a.on { background: var(--pale); }

    /* the page itself */
    .thing { grid-area: thing; min-width: 0; }
    .go { display: flex; align-items: center; gap: 20px; margin-bottom: 22px; padding: 16px 20px; border-radius: 16px; background: var(--wash); }
    .go .cover { flex: none; width: 92px; padding: 10px 8px 8px 13px; }
    .go .cover b { font-size: 13.5px; }
    .go .cover small { font-size: 7.5px; padding-top: 6px; }
    .go em { font: 600 10.5px/1 var(--sans); font-style: normal; letter-spacing: .1em; text-transform: uppercase; color: var(--me); }
    .go h2 { margin: 4px 0 2px; font: 600 24px/1.1 var(--serif); }
    .go p { max-width: 52ch; font-size: 13px; color: var(--soft); }
    .go u { display: block; width: 260px; max-width: 100%; height: 4px; margin: 10px 0 6px; border-radius: 9px; background: rgba(12, 27, 31, .1); text-decoration: none; }
    .go u i { display: block; width: 14%; height: 100%; border-radius: 9px; background: var(--me); }
    .go small { font-size: 12px; color: var(--soft); }
    .go .read { margin-left: auto; }
    .read { display: inline-flex; align-items: center; gap: 8px; padding: 9px 18px; border-radius: 99px; background: var(--night); color: #fff; font-weight: 500; white-space: nowrap; }

    /* a cover is the landmark of a book, and every book has a color of its own; my own books are the soft black */
    .cover { position: relative; display: flex; flex-direction: column; aspect-ratio: 3 / 4; padding: 13px 11px 10px 17px; border-radius: 3px 7px 7px 3px; color: #fff; background: linear-gradient(160deg, color-mix(in srgb, var(--c) 90%, white), color-mix(in srgb, var(--c) 86%, black)); box-shadow: 0 12px 22px -14px rgba(12, 27, 31, .55); }
    .cover::before { content: ''; position: absolute; left: 7px; top: 0; bottom: 0; width: 1px; background: rgba(255, 255, 255, .3); }
    .cover b { font: 600 17px/1.08 var(--serif); }
    .cover small { margin-top: auto; padding-top: 8px; border-top: 1px solid rgba(255, 255, 255, .32); font: 600 9px/1.2 var(--sans); letter-spacing: .1em; text-transform: uppercase; opacity: .92; }
    .cover.mine { --c: var(--night); color: var(--opal); background: linear-gradient(160deg, #16303a, var(--night)); }
    .bk:nth-child(8n+1), .open, .go { --c: #e07a35; }
    .bk:nth-child(8n+2) { --c: #c2413f; }
    .bk:nth-child(8n+3) { --c: #4450b8; }
    .bk:nth-child(8n+4) { --c: #1f8a78; }
    .bk:nth-child(8n+5) { --c: #7a4a8c; }
    .bk:nth-child(8n+6) { --c: #2f7fb0; }
    .bk:nth-child(8n+7) { --c: #3d7a4e; }
    .bk:nth-child(8n) { --c: #c24a78; }
    .shelf { display: grid; grid-template-columns: repeat(auto-fill, minmax(124px, 1fr)); gap: 22px 18px; }
    .bk { display: block; }
    .bk .name { display: none; }
    .bk p { display: flex; gap: 6px; margin-top: 8px; font-size: 12px; color: var(--soft); }
    [data-view="list"] .shelf { grid-template-columns: minmax(0, 1fr); gap: 0; }
    [data-view="list"] .bk { display: grid; grid-template-columns: 30px minmax(0, 1fr) auto; gap: 14px; align-items: center; padding: 9px 0; border-bottom: 1px solid var(--line); }
    [data-view="list"] .bk .cover { padding: 0; border-radius: 2px 4px 4px 2px; box-shadow: none; }
    [data-view="list"] .bk .cover::before { left: 4px; }
    [data-view="list"] .bk .cover b, [data-view="list"] .bk .cover small { display: none; }
    [data-view="list"] .bk .name { display: block; font: 600 19px/1.2 var(--serif); }
    [data-view="list"] .bk p { margin: 0; }
    .mines { display: grid; grid-template-columns: repeat(auto-fill, minmax(124px, 148px)); gap: 18px; }

    .tiles { display: grid; grid-template-columns: repeat(auto-fill, minmax(210px, 1fr)); gap: 14px; margin-bottom: 26px; }
    .tile { display: block; padding: 14px 16px 16px; border-radius: 14px; background: var(--t); }
    .tile i { display: block; width: 26px; height: 26px; margin-bottom: 24px; border-radius: 8px; background: var(--c); }
    .tile b { display: block; font: 600 21px/1.1 var(--serif); }
    .tile small { font-size: 12.5px; color: var(--soft); }

    .open, .person { display: flex; gap: 26px; align-items: flex-start; }
    .cover.big { flex: none; width: 180px; padding: 20px 15px 13px 24px; }
    .cover.big b { font-size: 26px; }
    .cover.big::before { left: 11px; }
    .words { min-width: 0; }
    .says { max-width: 56ch; font: 500 20px/1.5 var(--serif); }
    .words .read { margin-top: 18px; }
    .face { display: grid; place-items: center; flex: none; width: 96px; height: 96px; border-radius: 50%; background: var(--me); color: #fff; font: 600 46px/1 var(--serif); box-shadow: 0 0 0 5px var(--white), 0 0 0 6px color-mix(in srgb, var(--me) 45%, white); }
    .counts { display: flex; gap: 26px; margin: 16px 0 22px; color: var(--soft); font-size: 12.5px; }
    .counts b { display: block; font: 600 26px/1.1 var(--serif); color: var(--ink); }

    /* a conversation, in the form of the application it comes from; my turns in my color */
    .chat { display: grid; gap: 20px; max-width: 720px; margin: 0 auto; }
    .chat .who { display: block; margin-bottom: 4px; font: 600 10.5px/1 var(--sans); letter-spacing: .1em; text-transform: uppercase; color: var(--soft); }
    .chat .mine { justify-self: end; max-width: 78%; padding: 11px 16px; border-radius: 18px 18px 4px 18px; background: color-mix(in srgb, var(--me) 9%, white); font-size: 15px; }
    .chat .mine .who { color: var(--me); }
    .chat .theirs p { font: 500 19.5px/1.55 var(--serif); }
    .chat .theirs p + p { margin-top: 10px; }
    .chat mark { padding: 1px 3px; border-radius: 3px; background: var(--pale); color: inherit; }
    .chat sup { margin-left: 2px; font: 600 10.5px/1 var(--sans); color: var(--me); }
    .chat pre { margin: 12px 0; padding: 12px 14px; border-radius: 10px; background: var(--night); color: #d7e6ea; font: 400 12.5px/1.6 ui-monospace, 'Cascadia Code', Consolas, monospace; overflow: auto; }
    .chat .made { display: flex; align-items: center; gap: 10px; width: fit-content; margin-top: 12px; padding: 9px 13px; border: 1px solid var(--line); border-radius: 12px; font-size: 13px; }
    .chat .made i { display: grid; place-items: center; width: 30px; height: 30px; border-radius: 8px; background: var(--pale); color: var(--blue); font-style: normal; }
    .chat .made small { display: block; color: var(--soft); font-size: 12px; }
    .chat .turns { display: flex; justify-content: space-between; padding-top: 16px; border-top: 1px solid var(--line); color: var(--blue); font-weight: 500; }

    /* across: what it cites, what cites it, and what I wrote beside it */
    .across { grid-area: across; min-width: 0; }
    .ref { display: block; margin-bottom: 8px; padding: 10px 12px; border: 1px solid var(--line); border-radius: 12px; background: var(--white); }
    .ref .to { display: flex; align-items: center; gap: 7px; font-weight: 600; }
    .ref .to svg { color: var(--soft); }
    .ref .to i { flex: none; width: 9px; height: 9px; border-radius: 50%; background: var(--c, var(--sea)); }
    .ref p { margin-top: 2px; font-size: 12.5px; color: var(--soft); }
    .ref q { display: block; margin-top: 7px; padding: 6px 9px; border-radius: 7px; background: var(--pale); font: italic 500 15.5px/1.35 var(--serif); quotes: '“' '”'; }
    .note { padding: 10px 12px; border: 1px dashed var(--line); border-radius: 12px; font-size: 13px; color: var(--soft); }
    .note b { display: block; margin-bottom: 2px; color: var(--ink); font-weight: 500; }
    .return { display: none; align-items: center; gap: 8px; margin-bottom: 14px; padding: 9px 12px; border-radius: 10px; background: var(--night); color: #fff; font-weight: 500; }
    .return svg { color: var(--sky); }
    [data-at="author"][data-from="book"] .return.to-book, [data-at="author"][data-from="subject"] .return.to-subject { display: flex; }

    /* ---- what each idea colors, at every width ---- */
    [data-layout="both"] .holds { background: var(--pale); }
    [data-layout="both"] .holds a.on { background: var(--white); }
    [data-layout="rail"][data-tone="dark"] .sub { --sub-fg: #fff; --sub-dim: rgba(255, 255, 255, .8); --ctl: rgba(12, 27, 31, .26); --ctl-line: transparent; --ctl-fg: #fff; --on: #fff; --on-fg: var(--night); --lnk: #fff; --melnk: #fff; background: var(--blue); }
    [data-layout="rail"][data-tone="dark"] .fav { background: #fff; }
    [data-layout="rail"][data-tone="light"] { --bar: var(--pale); --bar-on: #fff; --bar-line: #cbe6ee; }
    [data-layout="two"][data-tone="dark"] .sub { --sub-dim: #27505c; --ctl: rgba(255, 255, 255, .62); --ctl-line: transparent; --ctl-fg: var(--ink); --lnk: var(--deep); background: var(--sky); }
    [data-layout="two"][data-tone="light"] .sub { --ctl: #fff; background: var(--pale); }
    [data-layout="side"][data-tone="light"] { --bar: var(--mist); --bar-on: #fff; }
    [data-layout="cards"][data-tone="light"] { --canvas: #e9f2f5; --bar-on: #fff; }
    [data-layout="cards"][data-tone="dark"] { --canvas: var(--night); }
    [data-layout="cards"] body, [data-layout="cards"] .lib, [data-layout="cards"] .me { background: var(--canvas); }
    [data-layout="cards"] :is(.sub, .holds, .thing, .across) { background: var(--white); }
    :is([data-layout="header"], [data-layout="both"], [data-layout="two"], [data-layout="cards"]):is([data-at="subject"], [data-at="book"], [data-at="chat"]) .s.is-claude { box-shadow: inset 0 -2px 0 var(--c); }

    /* ---- at a desk: where each idea puts the bars ---- */
    @media (min-width: 761px) {
        html, body { height: 100%; }
        body { display: grid; overflow: hidden; }
        .thing { padding: 20px 28px 40px; overflow: auto; }
        .holds { padding: 18px 12px; overflow: auto; }
        .across { padding: 18px 16px; overflow: auto; border-left: 1px solid var(--line); }

        /* a bar across the top holds the library, with me at its right end */
        :is([data-layout="header"], [data-layout="both"], [data-layout="two"], [data-layout="cards"]) .lib { padding: 9px 170px 9px 18px; }
        :is([data-layout="header"], [data-layout="both"], [data-layout="two"], [data-layout="cards"]) .logo { margin-right: 12px; }
        :is([data-layout="header"], [data-layout="both"], [data-layout="two"], [data-layout="cards"]) :is(.s small, .me small, .lib .find em) { display: none; }
        :is([data-layout="header"], [data-layout="both"], [data-layout="two"], [data-layout="cards"]) .me { grid-area: lib; justify-self: end; z-index: 1; padding: 0 18px 0 8px; background: none; }
        [data-tone="light"]:is([data-layout="header"], [data-layout="both"], [data-layout="two"]) .lib { border-bottom: 1px solid var(--line); }

        [data-layout="header"] body { grid-template: auto auto auto minmax(0, 1fr) / minmax(0, 1fr) 300px; grid-template-areas: "lib lib" "sub sub" "holds holds" "thing across"; }
        [data-layout="both"] body { grid-template: auto auto minmax(0, 1fr) / 240px minmax(0, 1fr) 300px; grid-template-areas: "lib lib lib" "holds sub sub" "holds thing across"; }
        [data-layout="both"] .holds { padding: 20px 12px; border-right: 1px solid #cbe6ee; }
        [data-layout="two"] body { grid-template: auto auto minmax(0, 1fr) / 236px minmax(0, 1fr) 300px; grid-template-areas: "lib lib lib" "sub sub sub" "holds thing across"; }
        [data-layout="two"] .sub { align-items: center; padding: 9px 24px; }
        [data-layout="two"] .title { display: flex; flex-wrap: wrap; align-items: baseline; gap: 4px 16px; }
        [data-layout="two"] h1 { margin: 0; font-size: 26px; order: -1; }
        [data-layout="two"] .title p { display: none; }
        [data-layout="two"] .holds { border-right: 1px solid var(--line); }
        [data-layout="cards"] body { grid-template: auto auto minmax(0, 1fr) / 244px minmax(0, 1fr) 300px; grid-template-areas: "lib lib lib" "holds sub across" "holds thing across"; column-gap: 12px; padding: 0 12px 12px; }
        [data-layout="cards"] .lib { padding: 11px 170px 11px 6px; }
        [data-layout="cards"] .me { padding: 0 6px; }
        [data-layout="cards"] :is(.holds, .across) { border: 0; border-radius: 16px; }
        [data-layout="cards"] .sub { border-radius: 16px 16px 0 0; }
        [data-layout="cards"] .thing { border-radius: 0 0 16px 16px; }

        /* a bar down the left holds the library, with me at its foot */
        [data-layout="side"] body { grid-template: auto minmax(0, 1fr) / 256px minmax(0, 1fr) 300px; grid-template-areas: "side sub sub" "side thing across"; }
        [data-layout="side"] .side { grid-area: side; display: flex; flex-direction: column; min-height: 0; background: var(--bar); }
        [data-layout="side"] .holds { flex: 1; order: 1; }
        [data-layout="side"] .me { order: 2; }
        [data-layout="side"] .lib { flex-direction: column; align-items: stretch; gap: 2px; padding: 18px 12px 12px; }
        [data-layout="side"] .logo { padding: 0 6px 14px; }
        [data-layout="side"] .subjects { flex-direction: column; }
        [data-layout="side"] .s small { margin-left: auto; }
        [data-layout="side"] .lib .find { margin: 10px 0 0; }
        [data-layout="side"] .holds { padding: 14px 12px; border-top: 1px solid var(--bar-line); background: var(--bar); color: var(--bar-fg); }
        [data-layout="side"] .holds h4, [data-layout="side"] .holds a small { color: var(--bar-dim); }
        [data-layout="side"] .holds a.on { background: var(--bar-on); }
        [data-layout="side"] .me { padding: 12px 18px 14px; border-top: 1px solid var(--bar-line); }
        [data-layout="side"][data-tone="light"] .side { border-right: 1px solid var(--line); }

        /* a narrow rail holds the subjects as marks and me as a face */
        [data-layout="rail"] body { grid-template: auto auto minmax(0, 1fr) auto / 68px minmax(0, 1fr) 300px; grid-template-areas: "lib sub sub" "lib holds holds" "lib thing across" "me thing across"; }
        [data-layout="rail"] .lib { flex-direction: column; gap: 12px; padding: 14px 0; }
        [data-layout="rail"] :is(.logo b, .lib .find, .s b, .s small, .me span) { display: none; }
        [data-layout="rail"] .subjects { flex-direction: column; align-items: center; gap: 10px; }
        [data-layout="rail"] .s { padding: 0; background: none; }
        [data-layout="rail"] :is(.s i, .logo i, .me i) { width: 40px; height: 40px; border-radius: 11px; font-size: 13px; }
        [data-layout="rail"] .logo i, [data-layout="rail"] .me i { font-size: 16px; }
        [data-layout="rail"] .me i { border-radius: 50%; }
        [data-layout="rail"]:is([data-at="subject"], [data-at="book"], [data-at="chat"]) .s.is-claude i { box-shadow: 0 0 0 2px var(--bar), 0 0 0 4px var(--c); }
        [data-layout="rail"] .me { justify-content: center; padding: 10px 0 14px; }
        [data-layout="rail"] .sub { padding: 16px 26px 14px; }
        [data-layout="rail"][data-tone="light"] :is(.lib, .me) { border-right: 1px solid #cbe6ee; }

        /* with no side bar, what the page holds is a row under its name */
        :is([data-layout="header"], [data-layout="rail"]) .holds { padding: 12px 28px; overflow: auto hidden; border-bottom: 1px solid var(--line); scrollbar-width: none; }
        [data-layout="header"] .holds { padding-top: 0; }
        :is([data-layout="header"], [data-layout="rail"]) .holds > div { display: flex; align-items: center; gap: 6px; }
        :is([data-layout="header"], [data-layout="rail"]) .holds h4 { flex: none; margin: 0 6px 0 0; }
        :is([data-layout="header"], [data-layout="rail"]) .holds h4.next { margin-left: 18px; }
        :is([data-layout="header"], [data-layout="rail"]) .holds h4 small { display: none; }
        :is([data-layout="header"], [data-layout="rail"]) .holds a { flex: none; padding: 5px 11px 5px 9px; border: 1px solid var(--line); border-radius: 99px; white-space: nowrap; }
        :is([data-layout="header"], [data-layout="rail"]) .holds a small { margin-left: 4px; }
        :is([data-layout="header"], [data-layout="rail"]) .holds a.on { border-color: transparent; }
    }

    /* ---- on a phone: one bar at the top, the page beneath it in one column ---- */
    @media (max-width: 760px) {
        body { position: relative; display: flex; flex-direction: column; }
        .sub { order: 1; }
        .holds { order: 2; }
        .thing { order: 3; }
        .across { order: 4; }
        .lib { position: sticky; top: 0; z-index: 4; height: 50px; margin-right: 54px; padding: 0 8px 0 14px; gap: 4px; overflow: auto hidden; scrollbar-width: none; }
        .logo { margin-right: 8px; }
        .logo b { font-size: 19px; }
        .s { white-space: nowrap; }
        .s small, .lib .find, .me span { display: none; }
        .me { position: fixed; z-index: 5; top: 0; right: 0; justify-content: center; width: 54px; height: 50px; }
        [data-tone="light"] :is(.lib, .me) { border-bottom: 1px solid var(--line); }
        .sub { flex-direction: column; flex-wrap: nowrap; align-items: stretch; padding: 16px 16px 12px; }
        h1 { font-size: 28px; white-space: normal; }
        .chain { overflow: auto hidden; scrollbar-width: none; }
        .tools { margin: 0; }
        .tools > div { justify-content: flex-start; }
        .holds { padding: 10px 16px 12px; overflow: auto hidden; border-bottom: 1px solid var(--line); scrollbar-width: none; }
        .holds > div { display: flex; align-items: center; gap: 6px; }
        .holds h4 { flex: none; margin: 0 6px 0 0; }
        .holds h4.next { margin-left: 18px; }
        .holds h4 small { display: none; }
        .holds a { flex: none; padding: 5px 11px 5px 9px; border: 1px solid var(--line); border-radius: 99px; background: var(--white); white-space: nowrap; }
        .holds a small { margin-left: 4px; }
        .thing { padding: 16px 16px 24px; }
        .go { flex-wrap: wrap; gap: 14px; padding: 14px; }
        .go > div { flex: 1 1 60%; min-width: 0; }
        .go .read { margin: 0; }
        .shelf { grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 16px 12px; }
        .cover { padding: 10px 8px 8px 13px; }
        .cover b { font-size: 14.5px; }
        .open, .person { flex-direction: column; gap: 16px; }
        .cover.big { width: 150px; }
        .cover.big b { font-size: 22px; }
        .counts { gap: 18px; }
        .chat .mine { max-width: 88%; }
        .across { padding: 16px; border-top: 1px solid var(--line); }

        /* a side bar or a rail turns to lie along the foot, the subjects as marks */
        :is([data-layout="side"], [data-layout="rail"]) body { padding-bottom: 60px; }
        :is([data-layout="side"], [data-layout="rail"]) .subjects { position: fixed; z-index: 4; left: 0; right: 0; bottom: 0; justify-content: space-around; padding: 8px 10px; border-top: 1px solid var(--bar-line); background: var(--bar); }
        :is([data-layout="side"], [data-layout="rail"]) .s { padding: 0; background: none; box-shadow: none; }
        :is([data-layout="side"], [data-layout="rail"]) .s b { display: none; }
        :is([data-layout="side"], [data-layout="rail"]) .s i { width: 42px; height: 42px; border-radius: 12px; font-size: 13px; }
        :is([data-layout="side"], [data-layout="rail"]):is([data-at="subject"], [data-at="book"], [data-at="chat"]) .s.is-claude i { box-shadow: 0 0 0 2px var(--bar), 0 0 0 4px var(--c); }

        [data-layout="two"] .sub { padding: 12px 16px; }
        [data-layout="two"] .title p { display: none; }
        [data-layout="cards"] body { padding-bottom: 10px; }
        [data-layout="cards"] :is(.sub, .holds, .thing, .across) { margin: 0 10px; }
        [data-layout="cards"] .sub { margin-top: 4px; border-radius: 14px 14px 0 0; }
        [data-layout="cards"] .thing { border-radius: 0 0 14px 14px; }
        [data-layout="cards"] .across { margin-top: 10px; border: 0; border-radius: 14px; }
    }
</style>
</head>
<body>

<div class="side">
<header class="lib">
    <a class="logo" data-go="library"><i>D</i><b>Dougs Library</b></a>
    <nav class="subjects">
        <a class="s is-claude" data-go="subject" style="--c: var(--sea)"><i>Cl</i><b>Conversations with Claude</b><small>212</small></a>
        <a class="s" style="--c: #1f8a78"><i>Ch</i><b>Conversations with ChatGPT</b><small>147</small></a>
        <a class="s" style="--c: #c24a78"><i>De</i><b>Dougs Design</b><small>5</small></a>
        <a class="s" style="--c: #7a4a8c"><i>Rm</i><b>Dougs Reference Manual</b><small>3</small></a>
    </nav>
    <span class="find"><svg viewBox="0 0 16 16"><circle cx="7" cy="7" r="4.5"/><path d="M10.5 10.5 14 14"/></svg><em style="font-style: normal">Find in the library</em></span>
</header>

<a class="me" data-go="author"><i>D</i><span><b>The Librarian</b><small>my own account</small></span></a>

<aside class="holds">
    <div class="at-library">
        <h4>My favorites<small>3</small></h4>
        <a data-go="book" style="--c: #e07a35"><i></i><b>Lorem Ipsum Dolor</b><small class="star">★</small></a>
        <a style="--c: #4450b8"><i></i><b>Magna Aliqua</b><small class="star">★</small></a>
        <a style="--c: #c24a78"><i></i><b>The Library's Home</b><small class="star">★</small></a>
    </div>
    <div class="at-subject">
        <h4>Holds<small>3 projects</small></h4>
        <a class="on" style="--c: #e07a35"><i></i><b>A First Project</b><small>38</small></a>
        <a style="--c: #1f8a78"><i></i><b>A Second Project</b><small>91</small></a>
        <a style="--c: #4450b8"><i></i><b>A Third Project</b><small>83</small></a>
        <h4 class="next">My favorites here<small>2</small></h4>
        <a data-go="book" style="--c: #e07a35"><i></i><b>Lorem Ipsum Dolor</b><small class="star">★</small></a>
        <a style="--c: #4450b8"><i></i><b>Magna Aliqua</b><small class="star">★</small></a>
    </div>
    <div class="at-book at-chat">
        <h4>Holds<small>8 chapters</small></h4>
        <a class="first" data-go="chat" style="--c: #e07a35"><i></i><b>A First Chapter</b><small>1</small></a>
        <a style="--c: #e07a35"><i></i><b>A Second Chapter</b><small>2</small></a>
        <a style="--c: #e07a35"><i></i><b>A Third Chapter</b><small>3</small></a>
        <a style="--c: #e07a35"><i></i><b>A Fourth Chapter</b><small>4</small></a>
        <a style="--c: #e07a35"><i></i><b>A Fifth Chapter</b><small>5</small></a>
    </div>
    <div class="at-author">
        <h4>My books<small>3</small></h4>
        <a class="on" style="--c: var(--me)"><i></i><b>Dougs Story</b><small>3</small></a>
        <a style="--c: #c24a78"><i></i><b>Dougs Design</b><small>5</small></a>
        <a style="--c: #7a4a8c"><i></i><b>Dougs Reference Manual</b><small>3</small></a>
    </div>
</aside>
</div>

<section class="sub">
    <div class="title">
        <div class="chain">
            <em>Filed under</em>
            <span class="at-library">itself</span>
            <span class="at-subject"><a data-go="library">Dougs Library</a></span>
            <span class="at-book"><a data-go="subject">Conversations with Claude</a><i>›</i><a data-go="subject">A First Project</a></span>
            <span class="at-chat"><a data-go="subject">Conversations with Claude</a><i>›</i><a data-go="subject">A First Project</a><i>›</i><a data-go="book">Lorem Ipsum Dolor</a></span>
            <span class="at-author"><a data-go="library">Dougs Library</a></span>
        </div>
        <h1 class="at-library">Dougs Library</h1>
        <h1 class="at-subject">Conversations with Claude</h1>
        <h1 class="at-book">Lorem Ipsum Dolor</h1>
        <h1 class="at-chat">A First Chapter</h1>
        <h1 class="at-author">Dougs Story</h1>
        <p class="at-library">by <a class="to-me" data-go="author">The Librarian</a> · three books and two subjects · 359 conversations kept</p>
        <p class="at-subject">a subject · 212 books in three projects · by <a class="to-me" data-go="author">The Librarian</a></p>
        <p class="at-book">by <a class="to-me" data-go="author">The Librarian</a> and Claude · 8 chapters · kept 9 Sep 2026</p>
        <p class="at-chat">chapter 1 of 8 · <a class="to-me" data-go="author">The Librarian</a> and Claude · kept 9 Sep 2026</p>
        <p class="at-author">The Librarian · my own account</p>
    </div>
    <div class="tools">
        <div class="at-subject">
            <span class="seg"><span class="on" data-view-is="shelf">Shelf</span><span data-view-is="list">List</span><span>Table</span></span>
            <span class="find"><svg viewBox="0 0 16 16"><circle cx="7" cy="7" r="4.5"/><path d="M10.5 10.5 14 14"/></svg>Find in this subject</span>
        </div>
        <div class="at-book">
            <span class="fav"><em class="star">★</em>Among my favorites</span>
            <span class="find"><svg viewBox="0 0 16 16"><circle cx="7" cy="7" r="4.5"/><path d="M10.5 10.5 14 14"/></svg>Find in this book</span>
        </div>
        <div class="at-chat">
            <span class="find"><svg viewBox="0 0 16 16"><path d="M8 3v10M3 8h10"/></svg>Note on a passage</span>
            <span class="find"><svg viewBox="0 0 16 16"><circle cx="7" cy="7" r="4.5"/><path d="M10.5 10.5 14 14"/></svg>Find in this book</span>
        </div>
    </div>
</section>

<main class="thing">
    <div class="at-library">
        <h4>Subjects</h4>
        <div class="tiles">
            <a class="tile" data-go="subject" style="--t: #dff3fa; --c: var(--sea)"><i></i><b>Conversations with Claude</b><small>212 books in three projects</small></a>
            <a class="tile" style="--t: #dcf5ee; --c: #1f8a78"><i></i><b>Conversations with ChatGPT</b><small>147 books</small></a>
        </div>
        <h4>My books</h4>
        <div class="mines">
            <a class="cover mine" data-go="author"><b>Dougs Story</b><small>my own account</small></a>
            <a class="cover mine"><b>Dougs Design</b><small>the design</small></a>
            <a class="cover mine"><b>Dougs Reference Manual</b><small>the parts</small></a>
        </div>
    </div>

    <div class="at-subject">
        <div class="go">
            <span class="cover"><b>Lorem Ipsum Dolor</b><small>with Claude</small></span>
            <div>
                <em>Continue</em>
                <h2>Lorem Ipsum Dolor</h2>
                <p>A First Project · kept 9 September 2026. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                <u><i></i></u>
                <small>Chapter 1 of 8 · 2 notes of mine · cited twice</small>
            </div>
            <a class="read" data-go="chat">Read</a>
        </div>
        <h4>Lately kept<small>212 books · newest first</small></h4>
        <div class="shelf">
            <a class="bk" data-go="book"><span class="cover"><b>Lorem Ipsum Dolor</b><small>with Claude</small></span><b class="name">Lorem Ipsum Dolor</b><p>9 Sep · 8 chapters <em class="star">★</em></p></a>
            <a class="bk"><span class="cover"><b>Quis Nostrud</b><small>with Claude</small></span><b class="name">Quis Nostrud</b><p>1 Oct · 6 chapters</p></a>
            <a class="bk"><span class="cover"><b>Magna Aliqua</b><small>with Claude</small></span><b class="name">Magna Aliqua</b><p>20 Sep · 11 chapters <em class="star">★</em></p></a>
            <a class="bk"><span class="cover"><b>Tempor Incididunt</b><small>with Claude</small></span><b class="name">Tempor Incididunt</b><p>12 Sep · 7 chapters</p></a>
            <a class="bk"><span class="cover"><b>Ut Enim ad Minim</b><small>with Claude</small></span><b class="name">Ut Enim ad Minim</b><p>27 Sep · 3 chapters</p></a>
            <a class="bk"><span class="cover"><b>Sed Do Eiusmod</b><small>with Claude</small></span><b class="name">Sed Do Eiusmod</b><p>5 Sep · 2 chapters</p></a>
            <a class="bk"><span class="cover"><b>Adipiscing Elit</b><small>with Claude</small></span><b class="name">Adipiscing Elit</b><p>2 Sep · 9 chapters</p></a>
            <a class="bk"><span class="cover"><b>Sit Amet Consectetur</b><small>with Claude</small></span><b class="name">Sit Amet Consectetur</b><p>21 Jul · 14 chapters</p></a>
            <a class="bk"><span class="cover"><b>Duis Aute Irure</b><small>with Claude</small></span><b class="name">Duis Aute Irure</b><p>14 Jul · 5 chapters</p></a>
            <a class="bk"><span class="cover"><b>Excepteur Sint</b><small>with Claude</small></span><b class="name">Excepteur Sint</b><p>2 Jul · 4 chapters</p></a>
        </div>
    </div>

    <div class="open at-book">
        <span class="cover big"><b>Lorem Ipsum Dolor</b><small>with Claude</small></span>
        <div class="words">
            <p class="says">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
            <a class="read" data-go="chat">Read from A First Chapter<svg viewBox="0 0 16 16"><path d="M3 8h10M9 4l4 4-4 4"/></svg></a>
        </div>
    </div>

    <div class="chat at-chat">
        <div class="mine"><span class="who">The Librarian</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit? Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
        <div class="theirs">
            <span class="who">Claude</span>
            <p>Ut enim ad minim veniam, quis nostrud exercitation. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <mark>Excepteur sint occaecat cupidatat non proident</mark><sup>1</sup>, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
<pre>const lorem = ipsum.dolor('sit amet');
return lorem.consectetur();</pre>
            <a class="made"><i>◇</i><span><b>Lorem Ipsum, a first draft</b><small>made in this turn · opens beside the page</small></span></a>
        </div>
        <div class="mine"><span class="who">The Librarian</span>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit?</div>
        <div class="theirs">
            <span class="who">Claude</span>
            <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.</p>
        </div>
        <div class="turns"><span></span><a>A Second Chapter →</a></div>
    </div>

    <div class="person at-author">
        <span class="face">D</span>
        <div class="words">
            <p class="says">My own account, and the one book here that is by its own subject. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            <div class="counts"><span><b>3</b>books written</span><span><b>359</b>conversations kept</span><span><b>41</b>notes</span></div>
            <div class="mines">
                <a class="cover mine"><b>Dougs Story</b><small>my own account</small></a>
                <a class="cover mine"><b>Dougs Design</b><small>the design</small></a>
                <a class="cover mine"><b>Dougs Reference Manual</b><small>the parts</small></a>
            </div>
        </div>
    </div>
</main>

<aside class="across">
    <a class="return to-book" data-go="book"><svg viewBox="0 0 16 16"><path d="M13 8H3M7 4 3 8l4 4"/></svg>Back to Lorem Ipsum Dolor</a>
    <a class="return to-subject" data-go="subject"><svg viewBox="0 0 16 16"><path d="M13 8H3M7 4 3 8l4 4"/></svg>Back to Conversations with Claude</a>

    <div class="at-library">
        <h4>Lately kept</h4>
        <a class="ref" style="--c: #c2413f"><span class="to"><i></i>Quis Nostrud</span><p>1 Oct · Conversations with Claude</p></a>
        <a class="ref" style="--c: #7a4a8c"><span class="to"><i></i>Ut Enim ad Minim</span><p>27 Sep · Conversations with Claude</p></a>
        <h4 class="next">My notes<small>41</small></h4>
        <div class="note"><b>3 Oct 2026 · in Lorem Ipsum Dolor</b>Lorem ipsum, a note of mine beside the passage it is about.</div>
    </div>

    <div class="at-subject">
        <h4>Cited from outside<small>2</small></h4>
        <a class="ref" data-go="author" data-from="subject" style="--c: var(--me)"><span class="to"><svg viewBox="0 0 16 16"><path d="M13 8H3M7 4 3 8l4 4"/></svg><i></i>Dougs Story</span><p>chapter 1 cites Lorem Ipsum Dolor</p></a>
        <a class="ref" style="--c: #1f8a78"><span class="to"><svg viewBox="0 0 16 16"><path d="M13 8H3M7 4 3 8l4 4"/></svg><i></i>Conversations with ChatGPT</span><p>one book cites Adipiscing Elit</p></a>
        <h4 class="next">My notes here<small>12</small></h4>
        <div class="note"><b>3 Oct 2026 · in Lorem Ipsum Dolor</b>Lorem ipsum, a note of mine beside the passage it is about.</div>
    </div>

    <div class="at-book at-chat">
        <h4>Cites<small>1</small></h4>
        <a class="ref" style="--c: #3d7a4e"><span class="to"><svg viewBox="0 0 16 16"><path d="M3 8h10M9 4l4 4-4 4"/></svg><i></i>Adipiscing Elit</span><p>chapter 2 · A First Project</p></a>
        <h4 class="next">Cited by<small>2</small></h4>
        <a class="ref" data-go="author" data-from="book" style="--c: var(--me)"><span class="to"><svg viewBox="0 0 16 16"><path d="M13 8H3M7 4 3 8l4 4"/></svg><i></i>Dougs Story</span><p>chapter 1 · my own account</p><q>Excepteur sint occaecat cupidatat non proident</q></a>
        <a class="ref" style="--c: #c24a78"><span class="to"><svg viewBox="0 0 16 16"><path d="M13 8H3M7 4 3 8l4 4"/></svg><i></i>Sit Amet Consectetur</span><p>chapter 3 · A First Project</p></a>
        <h4 class="next">My notes<small>1</small></h4>
        <div class="note"><b>1 · 3 Oct 2026</b>Lorem ipsum, a note of mine beside the passage it is about.</div>
    </div>

    <div class="at-author">
        <h4>Cites<small>1</small></h4>
        <a class="ref" data-go="book" style="--c: #e07a35"><span class="to"><svg viewBox="0 0 16 16"><path d="M3 8h10M9 4l4 4-4 4"/></svg><i></i>Lorem Ipsum Dolor</span><p>chapter 1 · a conversation with Claude</p><q>Excepteur sint occaecat cupidatat non proident</q></a>
        <h4 class="next">Cited by<small>0</small></h4>
        <div class="note">Nothing cites this chapter yet.</div>
    </div>
</aside>

<script>
    const page = document.documentElement;
    for (const door of document.querySelectorAll('[data-go]'))
        door.addEventListener('click', () => {
            if (door.dataset.from) page.dataset.from = door.dataset.from;
            else delete page.dataset.from;
            page.dataset.at = door.dataset.go;
            window.scrollTo(0, 0);
            for (const column of document.querySelectorAll('.thing, .holds, .across')) column.scrollTop = 0;
        });
    for (const view of document.querySelectorAll('[data-view-is]'))
        view.addEventListener('click', () => {
            page.dataset.view = view.dataset.viewIs;
            for (const other of view.parentElement.children) other.classList.toggle('on', other === view);
        });
<\/script>
</body>
</html>
`})]})]}),a.jsxs(i,{children:[a.jsx(d,{children:"20"}),a.jsx(o,{children:"[Two Top Bars: White, then Opal](/dougs-design/#two-top-bars-white-then-opal)"}),a.jsx(t,{children:"Concept 20, an idea, after the homes I liked, the lighter way."}),a.jsx(t,{children:"The same two bars, lighter: the library's in white, the subject's in the pale opal."}),a.jsxs(t,{children:[a.jsx(p,{}),a.jsx(r,{children:"/.design/3-every-concept~020-desk.png"}),a.jsx(r,{children:"/.design/3-every-concept~020-phone.png"})]}),a.jsxs(t,{children:[a.jsx(m,{}),"The white and then opal looks really good. A clean white theme with the dark logo makes me start to think that maybe I don't want quite so much of the dark. The opal is interesting too, and while we would need to use that effect carefully, I like it as a type of annotation."]}),a.jsxs(t,{children:[a.jsx(c,{}),a.jsx(n,{children:`<!doctype html>
<html lang="en" data-layout="two" data-tone="light" data-at="subject" data-view="shelf">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Two Top Bars: White, then Opal</title>
<meta name="number" content="20">
<meta name="state" content="idea">
<meta name="after" content="the homes I liked, the lighter way">
<meta name="idea" content="The same two bars, lighter: the library's in white, the subject's in the pale opal.">
<meta name="said" content="The white and then opal looks really good. A clean white theme with the dark logo makes me start to think that maybe I don't want quite so much of the dark. The opal is interesting too, and while we would need to use that effect carefully, I like it as a type of annotation.">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
<style>
    /* ---- what does not change between the ideas ----
       The frame is soft black, the blue between it and white, and white. The soft black #0c1b1f and the opal #c8f4fb are the
       coming-soon page's own; the blues are the hue between them (208 to 223 in OKLCH) walked from dark to light.
       The CONTENT keeps its own colors: every book a cover of its own, the light accents the opal's wave. */
    :root { --night: #0c1b1f; --deep: #14323c; --blue: #166178; --sea: #4e9eb9; --sky: #8fc8dc; --opal: #c8f4fb; --pale: #e3f5fa; --mist: #f1f7f9; --white: #ffffff;
        --ink: #10252c; --soft: #516770; --line: #dbe7ec; --me: #e8590c;
        --wash: linear-gradient(105deg, #e2f6fb 0%, #ecf0fd 52%, #fae9f4 100%);
        --serif: 'Cormorant Garamond', Georgia, serif; --sans: 'Inter', system-ui, sans-serif; }
    [data-tone="dark"] { --bar: var(--night); --bar-fg: #ffffff; --bar-dim: #a9bcc1; --bar-on: rgba(255, 255, 255, .11); --bar-line: #1d3339; --mark: var(--opal); --mark-fg: var(--night); }
    [data-tone="light"] { --bar: var(--white); --bar-fg: var(--ink); --bar-dim: var(--soft); --bar-on: var(--pale); --bar-line: var(--line); --mark: var(--night); --mark-fg: #ffffff; }
    [data-at="library"] [class*="at-"]:not(.at-library), [data-at="subject"] [class*="at-"]:not(.at-subject), [data-at="book"] [class*="at-"]:not(.at-book), [data-at="chat"] [class*="at-"]:not(.at-chat), [data-at="author"] [class*="at-"]:not(.at-author) { display: none !important; }

    * { box-sizing: border-box; margin: 0; }
    body { background: var(--white); color: var(--ink); font: 400 14px/1.5 var(--sans); }
    a { color: inherit; text-decoration: none; }
    svg { width: 15px; height: 15px; stroke: currentColor; fill: none; stroke-width: 1.7; stroke-linecap: round; stroke-linejoin: round; flex: none; }
    [data-go], [data-view-is] { cursor: pointer; }
    h4 { display: flex; align-items: center; gap: 8px; margin-bottom: 10px; font: 600 10.5px/1 var(--sans); letter-spacing: .12em; text-transform: uppercase; color: var(--soft); }
    h4 small { margin-left: auto; font: 400 11.5px/1 var(--sans); letter-spacing: 0; text-transform: none; }
    h4.next { margin-top: 22px; }
    .star { color: var(--me); font-style: normal; }

    /* the library's own things: its mark, its subjects, a way to find, and me. They are held together only where an idea has a side bar. */
    .side { display: contents; }
    [data-at="chat"] .holds a.first { background: var(--bar-on, var(--pale)); }
    .lib { grid-area: lib; display: flex; align-items: center; gap: 6px; min-width: 0; background: var(--bar); color: var(--bar-fg); }
    .logo { display: flex; align-items: center; gap: 10px; flex: none; }
    .logo i { display: grid; place-items: center; width: 30px; height: 30px; border-radius: 8px; background: var(--mark); color: var(--mark-fg); font: 600 15px/1 var(--sans); font-style: normal; }
    .logo b { font: 600 21px/1 var(--serif); white-space: nowrap; }
    .subjects { display: flex; gap: 2px; min-width: 0; }
    .s { display: flex; align-items: center; gap: 8px; padding: 7px 10px; border-radius: 8px; color: var(--bar-dim); font-size: 13.5px; }
    .s i { display: grid; place-items: center; flex: none; width: 9px; height: 9px; border-radius: 50%; background: var(--c); color: #fff; font: 600 0/1 var(--sans); font-style: normal; }
    .s b { font-weight: 500; }
    .s small { font-size: 12px; opacity: .7; }
    :is([data-at="subject"], [data-at="book"], [data-at="chat"]) .s.is-claude { background: var(--bar-on); color: var(--bar-fg); }
    .find { display: flex; align-items: center; gap: 8px; padding: 6px 11px; border-radius: 9px; white-space: nowrap; }
    .lib .find { margin-left: auto; background: var(--bar-on); color: var(--bar-dim); }
    .me { grid-area: me; display: flex; align-items: center; gap: 9px; background: var(--bar); color: var(--bar-fg); }
    .me i { display: grid; place-items: center; flex: none; width: 32px; height: 32px; border-radius: 50%; background: var(--me); color: #fff; font: 600 14px/1 var(--sans); font-style: normal; }
    .me b { display: block; font-weight: 500; line-height: 1.2; white-space: nowrap; }
    .me small { display: block; font-size: 11.5px; opacity: .7; white-space: nowrap; }

    /* the open page's own things: what it is filed under, its name, who it is by, its tools */
    .sub { --sub-fg: var(--ink); --sub-dim: var(--soft); --ctl: var(--mist); --ctl-line: var(--line); --ctl-fg: var(--soft); --on: var(--night); --on-fg: #fff; --lnk: var(--blue); --melnk: var(--me);
        grid-area: sub; display: flex; flex-wrap: wrap; align-items: flex-end; gap: 10px 20px; min-width: 0; padding: 20px 28px 14px; color: var(--sub-fg); }
    .chain { display: flex; align-items: center; gap: 7px; font-size: 12.5px; color: var(--sub-dim); white-space: nowrap; }
    .chain em { font: 600 9.5px/1 var(--sans); font-style: normal; letter-spacing: .12em; text-transform: uppercase; }
    .chain span { display: flex; align-items: center; gap: 7px; }
    .chain i { font-style: normal; opacity: .55; }
    .chain a { font-weight: 500; color: var(--lnk); }
    .title { min-width: 0; }
    h1 { margin-top: 4px; font: 600 36px/1.04 var(--serif); white-space: nowrap; }
    .title p { margin-top: 4px; font-size: 13px; color: var(--sub-dim); }
    .title p a { color: var(--lnk); font-weight: 500; }
    .title p a.to-me { color: var(--melnk); text-decoration: underline; text-decoration-color: var(--me); text-decoration-thickness: 2px; text-underline-offset: 3px; }
    .tools { margin-left: auto; }
    .tools > div { display: flex; flex-wrap: wrap; justify-content: flex-end; align-items: center; gap: 8px; }
    .seg { display: flex; overflow: hidden; border: 1px solid var(--ctl-line); border-radius: 9px; background: var(--ctl); }
    .seg span { padding: 6px 12px; color: var(--ctl-fg); }
    .seg span.on { background: var(--on); color: var(--on-fg); font-weight: 500; }
    .sub .find { border: 1px solid var(--ctl-line); background: var(--ctl); color: var(--ctl-fg); }
    .fav { display: flex; align-items: center; gap: 6px; padding: 6px 11px; border-radius: 9px; background: color-mix(in srgb, var(--me) 12%, white); color: #a8400a; font-weight: 500; white-space: nowrap; }

    /* down: what the open page holds */
    .holds { grid-area: holds; min-width: 0; }
    .holds a { display: flex; align-items: center; gap: 9px; padding: 6px 9px; border-radius: 8px; }
    .holds a i { flex: none; width: 9px; height: 9px; border-radius: 50%; background: var(--c, var(--sea)); }
    .holds a b { font-weight: 500; }
    .holds a small { margin-left: auto; font-size: 12px; color: var(--soft); }
    .holds a.on { background: var(--pale); }

    /* the page itself */
    .thing { grid-area: thing; min-width: 0; }
    .go { display: flex; align-items: center; gap: 20px; margin-bottom: 22px; padding: 16px 20px; border-radius: 16px; background: var(--wash); }
    .go .cover { flex: none; width: 92px; padding: 10px 8px 8px 13px; }
    .go .cover b { font-size: 13.5px; }
    .go .cover small { font-size: 7.5px; padding-top: 6px; }
    .go em { font: 600 10.5px/1 var(--sans); font-style: normal; letter-spacing: .1em; text-transform: uppercase; color: var(--me); }
    .go h2 { margin: 4px 0 2px; font: 600 24px/1.1 var(--serif); }
    .go p { max-width: 52ch; font-size: 13px; color: var(--soft); }
    .go u { display: block; width: 260px; max-width: 100%; height: 4px; margin: 10px 0 6px; border-radius: 9px; background: rgba(12, 27, 31, .1); text-decoration: none; }
    .go u i { display: block; width: 14%; height: 100%; border-radius: 9px; background: var(--me); }
    .go small { font-size: 12px; color: var(--soft); }
    .go .read { margin-left: auto; }
    .read { display: inline-flex; align-items: center; gap: 8px; padding: 9px 18px; border-radius: 99px; background: var(--night); color: #fff; font-weight: 500; white-space: nowrap; }

    /* a cover is the landmark of a book, and every book has a color of its own; my own books are the soft black */
    .cover { position: relative; display: flex; flex-direction: column; aspect-ratio: 3 / 4; padding: 13px 11px 10px 17px; border-radius: 3px 7px 7px 3px; color: #fff; background: linear-gradient(160deg, color-mix(in srgb, var(--c) 90%, white), color-mix(in srgb, var(--c) 86%, black)); box-shadow: 0 12px 22px -14px rgba(12, 27, 31, .55); }
    .cover::before { content: ''; position: absolute; left: 7px; top: 0; bottom: 0; width: 1px; background: rgba(255, 255, 255, .3); }
    .cover b { font: 600 17px/1.08 var(--serif); }
    .cover small { margin-top: auto; padding-top: 8px; border-top: 1px solid rgba(255, 255, 255, .32); font: 600 9px/1.2 var(--sans); letter-spacing: .1em; text-transform: uppercase; opacity: .92; }
    .cover.mine { --c: var(--night); color: var(--opal); background: linear-gradient(160deg, #16303a, var(--night)); }
    .bk:nth-child(8n+1), .open, .go { --c: #e07a35; }
    .bk:nth-child(8n+2) { --c: #c2413f; }
    .bk:nth-child(8n+3) { --c: #4450b8; }
    .bk:nth-child(8n+4) { --c: #1f8a78; }
    .bk:nth-child(8n+5) { --c: #7a4a8c; }
    .bk:nth-child(8n+6) { --c: #2f7fb0; }
    .bk:nth-child(8n+7) { --c: #3d7a4e; }
    .bk:nth-child(8n) { --c: #c24a78; }
    .shelf { display: grid; grid-template-columns: repeat(auto-fill, minmax(124px, 1fr)); gap: 22px 18px; }
    .bk { display: block; }
    .bk .name { display: none; }
    .bk p { display: flex; gap: 6px; margin-top: 8px; font-size: 12px; color: var(--soft); }
    [data-view="list"] .shelf { grid-template-columns: minmax(0, 1fr); gap: 0; }
    [data-view="list"] .bk { display: grid; grid-template-columns: 30px minmax(0, 1fr) auto; gap: 14px; align-items: center; padding: 9px 0; border-bottom: 1px solid var(--line); }
    [data-view="list"] .bk .cover { padding: 0; border-radius: 2px 4px 4px 2px; box-shadow: none; }
    [data-view="list"] .bk .cover::before { left: 4px; }
    [data-view="list"] .bk .cover b, [data-view="list"] .bk .cover small { display: none; }
    [data-view="list"] .bk .name { display: block; font: 600 19px/1.2 var(--serif); }
    [data-view="list"] .bk p { margin: 0; }
    .mines { display: grid; grid-template-columns: repeat(auto-fill, minmax(124px, 148px)); gap: 18px; }

    .tiles { display: grid; grid-template-columns: repeat(auto-fill, minmax(210px, 1fr)); gap: 14px; margin-bottom: 26px; }
    .tile { display: block; padding: 14px 16px 16px; border-radius: 14px; background: var(--t); }
    .tile i { display: block; width: 26px; height: 26px; margin-bottom: 24px; border-radius: 8px; background: var(--c); }
    .tile b { display: block; font: 600 21px/1.1 var(--serif); }
    .tile small { font-size: 12.5px; color: var(--soft); }

    .open, .person { display: flex; gap: 26px; align-items: flex-start; }
    .cover.big { flex: none; width: 180px; padding: 20px 15px 13px 24px; }
    .cover.big b { font-size: 26px; }
    .cover.big::before { left: 11px; }
    .words { min-width: 0; }
    .says { max-width: 56ch; font: 500 20px/1.5 var(--serif); }
    .words .read { margin-top: 18px; }
    .face { display: grid; place-items: center; flex: none; width: 96px; height: 96px; border-radius: 50%; background: var(--me); color: #fff; font: 600 46px/1 var(--serif); box-shadow: 0 0 0 5px var(--white), 0 0 0 6px color-mix(in srgb, var(--me) 45%, white); }
    .counts { display: flex; gap: 26px; margin: 16px 0 22px; color: var(--soft); font-size: 12.5px; }
    .counts b { display: block; font: 600 26px/1.1 var(--serif); color: var(--ink); }

    /* a conversation, in the form of the application it comes from; my turns in my color */
    .chat { display: grid; gap: 20px; max-width: 720px; margin: 0 auto; }
    .chat .who { display: block; margin-bottom: 4px; font: 600 10.5px/1 var(--sans); letter-spacing: .1em; text-transform: uppercase; color: var(--soft); }
    .chat .mine { justify-self: end; max-width: 78%; padding: 11px 16px; border-radius: 18px 18px 4px 18px; background: color-mix(in srgb, var(--me) 9%, white); font-size: 15px; }
    .chat .mine .who { color: var(--me); }
    .chat .theirs p { font: 500 19.5px/1.55 var(--serif); }
    .chat .theirs p + p { margin-top: 10px; }
    .chat mark { padding: 1px 3px; border-radius: 3px; background: var(--pale); color: inherit; }
    .chat sup { margin-left: 2px; font: 600 10.5px/1 var(--sans); color: var(--me); }
    .chat pre { margin: 12px 0; padding: 12px 14px; border-radius: 10px; background: var(--night); color: #d7e6ea; font: 400 12.5px/1.6 ui-monospace, 'Cascadia Code', Consolas, monospace; overflow: auto; }
    .chat .made { display: flex; align-items: center; gap: 10px; width: fit-content; margin-top: 12px; padding: 9px 13px; border: 1px solid var(--line); border-radius: 12px; font-size: 13px; }
    .chat .made i { display: grid; place-items: center; width: 30px; height: 30px; border-radius: 8px; background: var(--pale); color: var(--blue); font-style: normal; }
    .chat .made small { display: block; color: var(--soft); font-size: 12px; }
    .chat .turns { display: flex; justify-content: space-between; padding-top: 16px; border-top: 1px solid var(--line); color: var(--blue); font-weight: 500; }

    /* across: what it cites, what cites it, and what I wrote beside it */
    .across { grid-area: across; min-width: 0; }
    .ref { display: block; margin-bottom: 8px; padding: 10px 12px; border: 1px solid var(--line); border-radius: 12px; background: var(--white); }
    .ref .to { display: flex; align-items: center; gap: 7px; font-weight: 600; }
    .ref .to svg { color: var(--soft); }
    .ref .to i { flex: none; width: 9px; height: 9px; border-radius: 50%; background: var(--c, var(--sea)); }
    .ref p { margin-top: 2px; font-size: 12.5px; color: var(--soft); }
    .ref q { display: block; margin-top: 7px; padding: 6px 9px; border-radius: 7px; background: var(--pale); font: italic 500 15.5px/1.35 var(--serif); quotes: '“' '”'; }
    .note { padding: 10px 12px; border: 1px dashed var(--line); border-radius: 12px; font-size: 13px; color: var(--soft); }
    .note b { display: block; margin-bottom: 2px; color: var(--ink); font-weight: 500; }
    .return { display: none; align-items: center; gap: 8px; margin-bottom: 14px; padding: 9px 12px; border-radius: 10px; background: var(--night); color: #fff; font-weight: 500; }
    .return svg { color: var(--sky); }
    [data-at="author"][data-from="book"] .return.to-book, [data-at="author"][data-from="subject"] .return.to-subject { display: flex; }

    /* ---- what each idea colors, at every width ---- */
    [data-layout="both"] .holds { background: var(--pale); }
    [data-layout="both"] .holds a.on { background: var(--white); }
    [data-layout="rail"][data-tone="dark"] .sub { --sub-fg: #fff; --sub-dim: rgba(255, 255, 255, .8); --ctl: rgba(12, 27, 31, .26); --ctl-line: transparent; --ctl-fg: #fff; --on: #fff; --on-fg: var(--night); --lnk: #fff; --melnk: #fff; background: var(--blue); }
    [data-layout="rail"][data-tone="dark"] .fav { background: #fff; }
    [data-layout="rail"][data-tone="light"] { --bar: var(--pale); --bar-on: #fff; --bar-line: #cbe6ee; }
    [data-layout="two"][data-tone="dark"] .sub { --sub-dim: #27505c; --ctl: rgba(255, 255, 255, .62); --ctl-line: transparent; --ctl-fg: var(--ink); --lnk: var(--deep); background: var(--sky); }
    [data-layout="two"][data-tone="light"] .sub { --ctl: #fff; background: var(--pale); }
    [data-layout="side"][data-tone="light"] { --bar: var(--mist); --bar-on: #fff; }
    [data-layout="cards"][data-tone="light"] { --canvas: #e9f2f5; --bar-on: #fff; }
    [data-layout="cards"][data-tone="dark"] { --canvas: var(--night); }
    [data-layout="cards"] body, [data-layout="cards"] .lib, [data-layout="cards"] .me { background: var(--canvas); }
    [data-layout="cards"] :is(.sub, .holds, .thing, .across) { background: var(--white); }
    :is([data-layout="header"], [data-layout="both"], [data-layout="two"], [data-layout="cards"]):is([data-at="subject"], [data-at="book"], [data-at="chat"]) .s.is-claude { box-shadow: inset 0 -2px 0 var(--c); }

    /* ---- at a desk: where each idea puts the bars ---- */
    @media (min-width: 761px) {
        html, body { height: 100%; }
        body { display: grid; overflow: hidden; }
        .thing { padding: 20px 28px 40px; overflow: auto; }
        .holds { padding: 18px 12px; overflow: auto; }
        .across { padding: 18px 16px; overflow: auto; border-left: 1px solid var(--line); }

        /* a bar across the top holds the library, with me at its right end */
        :is([data-layout="header"], [data-layout="both"], [data-layout="two"], [data-layout="cards"]) .lib { padding: 9px 170px 9px 18px; }
        :is([data-layout="header"], [data-layout="both"], [data-layout="two"], [data-layout="cards"]) .logo { margin-right: 12px; }
        :is([data-layout="header"], [data-layout="both"], [data-layout="two"], [data-layout="cards"]) :is(.s small, .me small, .lib .find em) { display: none; }
        :is([data-layout="header"], [data-layout="both"], [data-layout="two"], [data-layout="cards"]) .me { grid-area: lib; justify-self: end; z-index: 1; padding: 0 18px 0 8px; background: none; }
        [data-tone="light"]:is([data-layout="header"], [data-layout="both"], [data-layout="two"]) .lib { border-bottom: 1px solid var(--line); }

        [data-layout="header"] body { grid-template: auto auto auto minmax(0, 1fr) / minmax(0, 1fr) 300px; grid-template-areas: "lib lib" "sub sub" "holds holds" "thing across"; }
        [data-layout="both"] body { grid-template: auto auto minmax(0, 1fr) / 240px minmax(0, 1fr) 300px; grid-template-areas: "lib lib lib" "holds sub sub" "holds thing across"; }
        [data-layout="both"] .holds { padding: 20px 12px; border-right: 1px solid #cbe6ee; }
        [data-layout="two"] body { grid-template: auto auto minmax(0, 1fr) / 236px minmax(0, 1fr) 300px; grid-template-areas: "lib lib lib" "sub sub sub" "holds thing across"; }
        [data-layout="two"] .sub { align-items: center; padding: 9px 24px; }
        [data-layout="two"] .title { display: flex; flex-wrap: wrap; align-items: baseline; gap: 4px 16px; }
        [data-layout="two"] h1 { margin: 0; font-size: 26px; order: -1; }
        [data-layout="two"] .title p { display: none; }
        [data-layout="two"] .holds { border-right: 1px solid var(--line); }
        [data-layout="cards"] body { grid-template: auto auto minmax(0, 1fr) / 244px minmax(0, 1fr) 300px; grid-template-areas: "lib lib lib" "holds sub across" "holds thing across"; column-gap: 12px; padding: 0 12px 12px; }
        [data-layout="cards"] .lib { padding: 11px 170px 11px 6px; }
        [data-layout="cards"] .me { padding: 0 6px; }
        [data-layout="cards"] :is(.holds, .across) { border: 0; border-radius: 16px; }
        [data-layout="cards"] .sub { border-radius: 16px 16px 0 0; }
        [data-layout="cards"] .thing { border-radius: 0 0 16px 16px; }

        /* a bar down the left holds the library, with me at its foot */
        [data-layout="side"] body { grid-template: auto minmax(0, 1fr) / 256px minmax(0, 1fr) 300px; grid-template-areas: "side sub sub" "side thing across"; }
        [data-layout="side"] .side { grid-area: side; display: flex; flex-direction: column; min-height: 0; background: var(--bar); }
        [data-layout="side"] .holds { flex: 1; order: 1; }
        [data-layout="side"] .me { order: 2; }
        [data-layout="side"] .lib { flex-direction: column; align-items: stretch; gap: 2px; padding: 18px 12px 12px; }
        [data-layout="side"] .logo { padding: 0 6px 14px; }
        [data-layout="side"] .subjects { flex-direction: column; }
        [data-layout="side"] .s small { margin-left: auto; }
        [data-layout="side"] .lib .find { margin: 10px 0 0; }
        [data-layout="side"] .holds { padding: 14px 12px; border-top: 1px solid var(--bar-line); background: var(--bar); color: var(--bar-fg); }
        [data-layout="side"] .holds h4, [data-layout="side"] .holds a small { color: var(--bar-dim); }
        [data-layout="side"] .holds a.on { background: var(--bar-on); }
        [data-layout="side"] .me { padding: 12px 18px 14px; border-top: 1px solid var(--bar-line); }
        [data-layout="side"][data-tone="light"] .side { border-right: 1px solid var(--line); }

        /* a narrow rail holds the subjects as marks and me as a face */
        [data-layout="rail"] body { grid-template: auto auto minmax(0, 1fr) auto / 68px minmax(0, 1fr) 300px; grid-template-areas: "lib sub sub" "lib holds holds" "lib thing across" "me thing across"; }
        [data-layout="rail"] .lib { flex-direction: column; gap: 12px; padding: 14px 0; }
        [data-layout="rail"] :is(.logo b, .lib .find, .s b, .s small, .me span) { display: none; }
        [data-layout="rail"] .subjects { flex-direction: column; align-items: center; gap: 10px; }
        [data-layout="rail"] .s { padding: 0; background: none; }
        [data-layout="rail"] :is(.s i, .logo i, .me i) { width: 40px; height: 40px; border-radius: 11px; font-size: 13px; }
        [data-layout="rail"] .logo i, [data-layout="rail"] .me i { font-size: 16px; }
        [data-layout="rail"] .me i { border-radius: 50%; }
        [data-layout="rail"]:is([data-at="subject"], [data-at="book"], [data-at="chat"]) .s.is-claude i { box-shadow: 0 0 0 2px var(--bar), 0 0 0 4px var(--c); }
        [data-layout="rail"] .me { justify-content: center; padding: 10px 0 14px; }
        [data-layout="rail"] .sub { padding: 16px 26px 14px; }
        [data-layout="rail"][data-tone="light"] :is(.lib, .me) { border-right: 1px solid #cbe6ee; }

        /* with no side bar, what the page holds is a row under its name */
        :is([data-layout="header"], [data-layout="rail"]) .holds { padding: 12px 28px; overflow: auto hidden; border-bottom: 1px solid var(--line); scrollbar-width: none; }
        [data-layout="header"] .holds { padding-top: 0; }
        :is([data-layout="header"], [data-layout="rail"]) .holds > div { display: flex; align-items: center; gap: 6px; }
        :is([data-layout="header"], [data-layout="rail"]) .holds h4 { flex: none; margin: 0 6px 0 0; }
        :is([data-layout="header"], [data-layout="rail"]) .holds h4.next { margin-left: 18px; }
        :is([data-layout="header"], [data-layout="rail"]) .holds h4 small { display: none; }
        :is([data-layout="header"], [data-layout="rail"]) .holds a { flex: none; padding: 5px 11px 5px 9px; border: 1px solid var(--line); border-radius: 99px; white-space: nowrap; }
        :is([data-layout="header"], [data-layout="rail"]) .holds a small { margin-left: 4px; }
        :is([data-layout="header"], [data-layout="rail"]) .holds a.on { border-color: transparent; }
    }

    /* ---- on a phone: one bar at the top, the page beneath it in one column ---- */
    @media (max-width: 760px) {
        body { position: relative; display: flex; flex-direction: column; }
        .sub { order: 1; }
        .holds { order: 2; }
        .thing { order: 3; }
        .across { order: 4; }
        .lib { position: sticky; top: 0; z-index: 4; height: 50px; margin-right: 54px; padding: 0 8px 0 14px; gap: 4px; overflow: auto hidden; scrollbar-width: none; }
        .logo { margin-right: 8px; }
        .logo b { font-size: 19px; }
        .s { white-space: nowrap; }
        .s small, .lib .find, .me span { display: none; }
        .me { position: fixed; z-index: 5; top: 0; right: 0; justify-content: center; width: 54px; height: 50px; }
        [data-tone="light"] :is(.lib, .me) { border-bottom: 1px solid var(--line); }
        .sub { flex-direction: column; flex-wrap: nowrap; align-items: stretch; padding: 16px 16px 12px; }
        h1 { font-size: 28px; white-space: normal; }
        .chain { overflow: auto hidden; scrollbar-width: none; }
        .tools { margin: 0; }
        .tools > div { justify-content: flex-start; }
        .holds { padding: 10px 16px 12px; overflow: auto hidden; border-bottom: 1px solid var(--line); scrollbar-width: none; }
        .holds > div { display: flex; align-items: center; gap: 6px; }
        .holds h4 { flex: none; margin: 0 6px 0 0; }
        .holds h4.next { margin-left: 18px; }
        .holds h4 small { display: none; }
        .holds a { flex: none; padding: 5px 11px 5px 9px; border: 1px solid var(--line); border-radius: 99px; background: var(--white); white-space: nowrap; }
        .holds a small { margin-left: 4px; }
        .thing { padding: 16px 16px 24px; }
        .go { flex-wrap: wrap; gap: 14px; padding: 14px; }
        .go > div { flex: 1 1 60%; min-width: 0; }
        .go .read { margin: 0; }
        .shelf { grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 16px 12px; }
        .cover { padding: 10px 8px 8px 13px; }
        .cover b { font-size: 14.5px; }
        .open, .person { flex-direction: column; gap: 16px; }
        .cover.big { width: 150px; }
        .cover.big b { font-size: 22px; }
        .counts { gap: 18px; }
        .chat .mine { max-width: 88%; }
        .across { padding: 16px; border-top: 1px solid var(--line); }

        /* a side bar or a rail turns to lie along the foot, the subjects as marks */
        :is([data-layout="side"], [data-layout="rail"]) body { padding-bottom: 60px; }
        :is([data-layout="side"], [data-layout="rail"]) .subjects { position: fixed; z-index: 4; left: 0; right: 0; bottom: 0; justify-content: space-around; padding: 8px 10px; border-top: 1px solid var(--bar-line); background: var(--bar); }
        :is([data-layout="side"], [data-layout="rail"]) .s { padding: 0; background: none; box-shadow: none; }
        :is([data-layout="side"], [data-layout="rail"]) .s b { display: none; }
        :is([data-layout="side"], [data-layout="rail"]) .s i { width: 42px; height: 42px; border-radius: 12px; font-size: 13px; }
        :is([data-layout="side"], [data-layout="rail"]):is([data-at="subject"], [data-at="book"], [data-at="chat"]) .s.is-claude i { box-shadow: 0 0 0 2px var(--bar), 0 0 0 4px var(--c); }

        [data-layout="two"] .sub { padding: 12px 16px; }
        [data-layout="two"] .title p { display: none; }
        [data-layout="cards"] body { padding-bottom: 10px; }
        [data-layout="cards"] :is(.sub, .holds, .thing, .across) { margin: 0 10px; }
        [data-layout="cards"] .sub { margin-top: 4px; border-radius: 14px 14px 0 0; }
        [data-layout="cards"] .thing { border-radius: 0 0 14px 14px; }
        [data-layout="cards"] .across { margin-top: 10px; border: 0; border-radius: 14px; }
    }
</style>
</head>
<body>

<div class="side">
<header class="lib">
    <a class="logo" data-go="library"><i>D</i><b>Dougs Library</b></a>
    <nav class="subjects">
        <a class="s is-claude" data-go="subject" style="--c: var(--sea)"><i>Cl</i><b>Conversations with Claude</b><small>212</small></a>
        <a class="s" style="--c: #1f8a78"><i>Ch</i><b>Conversations with ChatGPT</b><small>147</small></a>
        <a class="s" style="--c: #c24a78"><i>De</i><b>Dougs Design</b><small>5</small></a>
        <a class="s" style="--c: #7a4a8c"><i>Rm</i><b>Dougs Reference Manual</b><small>3</small></a>
    </nav>
    <span class="find"><svg viewBox="0 0 16 16"><circle cx="7" cy="7" r="4.5"/><path d="M10.5 10.5 14 14"/></svg><em style="font-style: normal">Find in the library</em></span>
</header>

<a class="me" data-go="author"><i>D</i><span><b>The Librarian</b><small>my own account</small></span></a>

<aside class="holds">
    <div class="at-library">
        <h4>My favorites<small>3</small></h4>
        <a data-go="book" style="--c: #e07a35"><i></i><b>Lorem Ipsum Dolor</b><small class="star">★</small></a>
        <a style="--c: #4450b8"><i></i><b>Magna Aliqua</b><small class="star">★</small></a>
        <a style="--c: #c24a78"><i></i><b>The Library's Home</b><small class="star">★</small></a>
    </div>
    <div class="at-subject">
        <h4>Holds<small>3 projects</small></h4>
        <a class="on" style="--c: #e07a35"><i></i><b>A First Project</b><small>38</small></a>
        <a style="--c: #1f8a78"><i></i><b>A Second Project</b><small>91</small></a>
        <a style="--c: #4450b8"><i></i><b>A Third Project</b><small>83</small></a>
        <h4 class="next">My favorites here<small>2</small></h4>
        <a data-go="book" style="--c: #e07a35"><i></i><b>Lorem Ipsum Dolor</b><small class="star">★</small></a>
        <a style="--c: #4450b8"><i></i><b>Magna Aliqua</b><small class="star">★</small></a>
    </div>
    <div class="at-book at-chat">
        <h4>Holds<small>8 chapters</small></h4>
        <a class="first" data-go="chat" style="--c: #e07a35"><i></i><b>A First Chapter</b><small>1</small></a>
        <a style="--c: #e07a35"><i></i><b>A Second Chapter</b><small>2</small></a>
        <a style="--c: #e07a35"><i></i><b>A Third Chapter</b><small>3</small></a>
        <a style="--c: #e07a35"><i></i><b>A Fourth Chapter</b><small>4</small></a>
        <a style="--c: #e07a35"><i></i><b>A Fifth Chapter</b><small>5</small></a>
    </div>
    <div class="at-author">
        <h4>My books<small>3</small></h4>
        <a class="on" style="--c: var(--me)"><i></i><b>Dougs Story</b><small>3</small></a>
        <a style="--c: #c24a78"><i></i><b>Dougs Design</b><small>5</small></a>
        <a style="--c: #7a4a8c"><i></i><b>Dougs Reference Manual</b><small>3</small></a>
    </div>
</aside>
</div>

<section class="sub">
    <div class="title">
        <div class="chain">
            <em>Filed under</em>
            <span class="at-library">itself</span>
            <span class="at-subject"><a data-go="library">Dougs Library</a></span>
            <span class="at-book"><a data-go="subject">Conversations with Claude</a><i>›</i><a data-go="subject">A First Project</a></span>
            <span class="at-chat"><a data-go="subject">Conversations with Claude</a><i>›</i><a data-go="subject">A First Project</a><i>›</i><a data-go="book">Lorem Ipsum Dolor</a></span>
            <span class="at-author"><a data-go="library">Dougs Library</a></span>
        </div>
        <h1 class="at-library">Dougs Library</h1>
        <h1 class="at-subject">Conversations with Claude</h1>
        <h1 class="at-book">Lorem Ipsum Dolor</h1>
        <h1 class="at-chat">A First Chapter</h1>
        <h1 class="at-author">Dougs Story</h1>
        <p class="at-library">by <a class="to-me" data-go="author">The Librarian</a> · three books and two subjects · 359 conversations kept</p>
        <p class="at-subject">a subject · 212 books in three projects · by <a class="to-me" data-go="author">The Librarian</a></p>
        <p class="at-book">by <a class="to-me" data-go="author">The Librarian</a> and Claude · 8 chapters · kept 9 Sep 2026</p>
        <p class="at-chat">chapter 1 of 8 · <a class="to-me" data-go="author">The Librarian</a> and Claude · kept 9 Sep 2026</p>
        <p class="at-author">The Librarian · my own account</p>
    </div>
    <div class="tools">
        <div class="at-subject">
            <span class="seg"><span class="on" data-view-is="shelf">Shelf</span><span data-view-is="list">List</span><span>Table</span></span>
            <span class="find"><svg viewBox="0 0 16 16"><circle cx="7" cy="7" r="4.5"/><path d="M10.5 10.5 14 14"/></svg>Find in this subject</span>
        </div>
        <div class="at-book">
            <span class="fav"><em class="star">★</em>Among my favorites</span>
            <span class="find"><svg viewBox="0 0 16 16"><circle cx="7" cy="7" r="4.5"/><path d="M10.5 10.5 14 14"/></svg>Find in this book</span>
        </div>
        <div class="at-chat">
            <span class="find"><svg viewBox="0 0 16 16"><path d="M8 3v10M3 8h10"/></svg>Note on a passage</span>
            <span class="find"><svg viewBox="0 0 16 16"><circle cx="7" cy="7" r="4.5"/><path d="M10.5 10.5 14 14"/></svg>Find in this book</span>
        </div>
    </div>
</section>

<main class="thing">
    <div class="at-library">
        <h4>Subjects</h4>
        <div class="tiles">
            <a class="tile" data-go="subject" style="--t: #dff3fa; --c: var(--sea)"><i></i><b>Conversations with Claude</b><small>212 books in three projects</small></a>
            <a class="tile" style="--t: #dcf5ee; --c: #1f8a78"><i></i><b>Conversations with ChatGPT</b><small>147 books</small></a>
        </div>
        <h4>My books</h4>
        <div class="mines">
            <a class="cover mine" data-go="author"><b>Dougs Story</b><small>my own account</small></a>
            <a class="cover mine"><b>Dougs Design</b><small>the design</small></a>
            <a class="cover mine"><b>Dougs Reference Manual</b><small>the parts</small></a>
        </div>
    </div>

    <div class="at-subject">
        <div class="go">
            <span class="cover"><b>Lorem Ipsum Dolor</b><small>with Claude</small></span>
            <div>
                <em>Continue</em>
                <h2>Lorem Ipsum Dolor</h2>
                <p>A First Project · kept 9 September 2026. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                <u><i></i></u>
                <small>Chapter 1 of 8 · 2 notes of mine · cited twice</small>
            </div>
            <a class="read" data-go="chat">Read</a>
        </div>
        <h4>Lately kept<small>212 books · newest first</small></h4>
        <div class="shelf">
            <a class="bk" data-go="book"><span class="cover"><b>Lorem Ipsum Dolor</b><small>with Claude</small></span><b class="name">Lorem Ipsum Dolor</b><p>9 Sep · 8 chapters <em class="star">★</em></p></a>
            <a class="bk"><span class="cover"><b>Quis Nostrud</b><small>with Claude</small></span><b class="name">Quis Nostrud</b><p>1 Oct · 6 chapters</p></a>
            <a class="bk"><span class="cover"><b>Magna Aliqua</b><small>with Claude</small></span><b class="name">Magna Aliqua</b><p>20 Sep · 11 chapters <em class="star">★</em></p></a>
            <a class="bk"><span class="cover"><b>Tempor Incididunt</b><small>with Claude</small></span><b class="name">Tempor Incididunt</b><p>12 Sep · 7 chapters</p></a>
            <a class="bk"><span class="cover"><b>Ut Enim ad Minim</b><small>with Claude</small></span><b class="name">Ut Enim ad Minim</b><p>27 Sep · 3 chapters</p></a>
            <a class="bk"><span class="cover"><b>Sed Do Eiusmod</b><small>with Claude</small></span><b class="name">Sed Do Eiusmod</b><p>5 Sep · 2 chapters</p></a>
            <a class="bk"><span class="cover"><b>Adipiscing Elit</b><small>with Claude</small></span><b class="name">Adipiscing Elit</b><p>2 Sep · 9 chapters</p></a>
            <a class="bk"><span class="cover"><b>Sit Amet Consectetur</b><small>with Claude</small></span><b class="name">Sit Amet Consectetur</b><p>21 Jul · 14 chapters</p></a>
            <a class="bk"><span class="cover"><b>Duis Aute Irure</b><small>with Claude</small></span><b class="name">Duis Aute Irure</b><p>14 Jul · 5 chapters</p></a>
            <a class="bk"><span class="cover"><b>Excepteur Sint</b><small>with Claude</small></span><b class="name">Excepteur Sint</b><p>2 Jul · 4 chapters</p></a>
        </div>
    </div>

    <div class="open at-book">
        <span class="cover big"><b>Lorem Ipsum Dolor</b><small>with Claude</small></span>
        <div class="words">
            <p class="says">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
            <a class="read" data-go="chat">Read from A First Chapter<svg viewBox="0 0 16 16"><path d="M3 8h10M9 4l4 4-4 4"/></svg></a>
        </div>
    </div>

    <div class="chat at-chat">
        <div class="mine"><span class="who">The Librarian</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit? Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
        <div class="theirs">
            <span class="who">Claude</span>
            <p>Ut enim ad minim veniam, quis nostrud exercitation. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <mark>Excepteur sint occaecat cupidatat non proident</mark><sup>1</sup>, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
<pre>const lorem = ipsum.dolor('sit amet');
return lorem.consectetur();</pre>
            <a class="made"><i>◇</i><span><b>Lorem Ipsum, a first draft</b><small>made in this turn · opens beside the page</small></span></a>
        </div>
        <div class="mine"><span class="who">The Librarian</span>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit?</div>
        <div class="theirs">
            <span class="who">Claude</span>
            <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.</p>
        </div>
        <div class="turns"><span></span><a>A Second Chapter →</a></div>
    </div>

    <div class="person at-author">
        <span class="face">D</span>
        <div class="words">
            <p class="says">My own account, and the one book here that is by its own subject. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            <div class="counts"><span><b>3</b>books written</span><span><b>359</b>conversations kept</span><span><b>41</b>notes</span></div>
            <div class="mines">
                <a class="cover mine"><b>Dougs Story</b><small>my own account</small></a>
                <a class="cover mine"><b>Dougs Design</b><small>the design</small></a>
                <a class="cover mine"><b>Dougs Reference Manual</b><small>the parts</small></a>
            </div>
        </div>
    </div>
</main>

<aside class="across">
    <a class="return to-book" data-go="book"><svg viewBox="0 0 16 16"><path d="M13 8H3M7 4 3 8l4 4"/></svg>Back to Lorem Ipsum Dolor</a>
    <a class="return to-subject" data-go="subject"><svg viewBox="0 0 16 16"><path d="M13 8H3M7 4 3 8l4 4"/></svg>Back to Conversations with Claude</a>

    <div class="at-library">
        <h4>Lately kept</h4>
        <a class="ref" style="--c: #c2413f"><span class="to"><i></i>Quis Nostrud</span><p>1 Oct · Conversations with Claude</p></a>
        <a class="ref" style="--c: #7a4a8c"><span class="to"><i></i>Ut Enim ad Minim</span><p>27 Sep · Conversations with Claude</p></a>
        <h4 class="next">My notes<small>41</small></h4>
        <div class="note"><b>3 Oct 2026 · in Lorem Ipsum Dolor</b>Lorem ipsum, a note of mine beside the passage it is about.</div>
    </div>

    <div class="at-subject">
        <h4>Cited from outside<small>2</small></h4>
        <a class="ref" data-go="author" data-from="subject" style="--c: var(--me)"><span class="to"><svg viewBox="0 0 16 16"><path d="M13 8H3M7 4 3 8l4 4"/></svg><i></i>Dougs Story</span><p>chapter 1 cites Lorem Ipsum Dolor</p></a>
        <a class="ref" style="--c: #1f8a78"><span class="to"><svg viewBox="0 0 16 16"><path d="M13 8H3M7 4 3 8l4 4"/></svg><i></i>Conversations with ChatGPT</span><p>one book cites Adipiscing Elit</p></a>
        <h4 class="next">My notes here<small>12</small></h4>
        <div class="note"><b>3 Oct 2026 · in Lorem Ipsum Dolor</b>Lorem ipsum, a note of mine beside the passage it is about.</div>
    </div>

    <div class="at-book at-chat">
        <h4>Cites<small>1</small></h4>
        <a class="ref" style="--c: #3d7a4e"><span class="to"><svg viewBox="0 0 16 16"><path d="M3 8h10M9 4l4 4-4 4"/></svg><i></i>Adipiscing Elit</span><p>chapter 2 · A First Project</p></a>
        <h4 class="next">Cited by<small>2</small></h4>
        <a class="ref" data-go="author" data-from="book" style="--c: var(--me)"><span class="to"><svg viewBox="0 0 16 16"><path d="M13 8H3M7 4 3 8l4 4"/></svg><i></i>Dougs Story</span><p>chapter 1 · my own account</p><q>Excepteur sint occaecat cupidatat non proident</q></a>
        <a class="ref" style="--c: #c24a78"><span class="to"><svg viewBox="0 0 16 16"><path d="M13 8H3M7 4 3 8l4 4"/></svg><i></i>Sit Amet Consectetur</span><p>chapter 3 · A First Project</p></a>
        <h4 class="next">My notes<small>1</small></h4>
        <div class="note"><b>1 · 3 Oct 2026</b>Lorem ipsum, a note of mine beside the passage it is about.</div>
    </div>

    <div class="at-author">
        <h4>Cites<small>1</small></h4>
        <a class="ref" data-go="book" style="--c: #e07a35"><span class="to"><svg viewBox="0 0 16 16"><path d="M3 8h10M9 4l4 4-4 4"/></svg><i></i>Lorem Ipsum Dolor</span><p>chapter 1 · a conversation with Claude</p><q>Excepteur sint occaecat cupidatat non proident</q></a>
        <h4 class="next">Cited by<small>0</small></h4>
        <div class="note">Nothing cites this chapter yet.</div>
    </div>
</aside>

<script>
    const page = document.documentElement;
    for (const door of document.querySelectorAll('[data-go]'))
        door.addEventListener('click', () => {
            if (door.dataset.from) page.dataset.from = door.dataset.from;
            else delete page.dataset.from;
            page.dataset.at = door.dataset.go;
            window.scrollTo(0, 0);
            for (const column of document.querySelectorAll('.thing, .holds, .across')) column.scrollTop = 0;
        });
    for (const view of document.querySelectorAll('[data-view-is]'))
        view.addEventListener('click', () => {
            page.dataset.view = view.dataset.viewIs;
            for (const other of view.parentElement.children) other.classList.toggle('on', other === view);
        });
<\/script>
</body>
</html>
`})]})]}),a.jsxs(i,{children:[a.jsx(d,{children:"21"}),a.jsx(o,{children:"[No Bars: White Cards](/dougs-design/#no-bars-white-cards)"}),a.jsx(t,{children:"Concept 21, an idea, after the home that asks its sources."}),a.jsx(t,{children:"No bar at all, as the home that asks its sources had it: the mark and the subjects sit on a pale ground, and what the subject holds, its books and what cites them are three white cards."}),a.jsxs(t,{children:[a.jsx(p,{}),a.jsx(r,{children:"/.design/3-every-concept~021-desk.png"}),a.jsx(r,{children:"/.design/3-every-concept~021-phone.png"})]}),a.jsxs(t,{children:[a.jsx(c,{}),a.jsx(n,{children:`<!doctype html>
<html lang="en" data-layout="cards" data-tone="light" data-at="subject" data-view="shelf">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>No Bars: White Cards</title>
<meta name="number" content="21">
<meta name="state" content="idea">
<meta name="after" content="the home that asks its sources">
<meta name="idea" content="No bar at all, as the home that asks its sources had it: the mark and the subjects sit on a pale ground, and what the subject holds, its books and what cites them are three white cards.">
<meta name="said" content="">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
<style>
    /* ---- what does not change between the ideas ----
       The frame is soft black, the blue between it and white, and white. The soft black #0c1b1f and the opal #c8f4fb are the
       coming-soon page's own; the blues are the hue between them (208 to 223 in OKLCH) walked from dark to light.
       The CONTENT keeps its own colors: every book a cover of its own, the light accents the opal's wave. */
    :root { --night: #0c1b1f; --deep: #14323c; --blue: #166178; --sea: #4e9eb9; --sky: #8fc8dc; --opal: #c8f4fb; --pale: #e3f5fa; --mist: #f1f7f9; --white: #ffffff;
        --ink: #10252c; --soft: #516770; --line: #dbe7ec; --me: #e8590c;
        --wash: linear-gradient(105deg, #e2f6fb 0%, #ecf0fd 52%, #fae9f4 100%);
        --serif: 'Cormorant Garamond', Georgia, serif; --sans: 'Inter', system-ui, sans-serif; }
    [data-tone="dark"] { --bar: var(--night); --bar-fg: #ffffff; --bar-dim: #a9bcc1; --bar-on: rgba(255, 255, 255, .11); --bar-line: #1d3339; --mark: var(--opal); --mark-fg: var(--night); }
    [data-tone="light"] { --bar: var(--white); --bar-fg: var(--ink); --bar-dim: var(--soft); --bar-on: var(--pale); --bar-line: var(--line); --mark: var(--night); --mark-fg: #ffffff; }
    [data-at="library"] [class*="at-"]:not(.at-library), [data-at="subject"] [class*="at-"]:not(.at-subject), [data-at="book"] [class*="at-"]:not(.at-book), [data-at="chat"] [class*="at-"]:not(.at-chat), [data-at="author"] [class*="at-"]:not(.at-author) { display: none !important; }

    * { box-sizing: border-box; margin: 0; }
    body { background: var(--white); color: var(--ink); font: 400 14px/1.5 var(--sans); }
    a { color: inherit; text-decoration: none; }
    svg { width: 15px; height: 15px; stroke: currentColor; fill: none; stroke-width: 1.7; stroke-linecap: round; stroke-linejoin: round; flex: none; }
    [data-go], [data-view-is] { cursor: pointer; }
    h4 { display: flex; align-items: center; gap: 8px; margin-bottom: 10px; font: 600 10.5px/1 var(--sans); letter-spacing: .12em; text-transform: uppercase; color: var(--soft); }
    h4 small { margin-left: auto; font: 400 11.5px/1 var(--sans); letter-spacing: 0; text-transform: none; }
    h4.next { margin-top: 22px; }
    .star { color: var(--me); font-style: normal; }

    /* the library's own things: its mark, its subjects, a way to find, and me. They are held together only where an idea has a side bar. */
    .side { display: contents; }
    [data-at="chat"] .holds a.first { background: var(--bar-on, var(--pale)); }
    .lib { grid-area: lib; display: flex; align-items: center; gap: 6px; min-width: 0; background: var(--bar); color: var(--bar-fg); }
    .logo { display: flex; align-items: center; gap: 10px; flex: none; }
    .logo i { display: grid; place-items: center; width: 30px; height: 30px; border-radius: 8px; background: var(--mark); color: var(--mark-fg); font: 600 15px/1 var(--sans); font-style: normal; }
    .logo b { font: 600 21px/1 var(--serif); white-space: nowrap; }
    .subjects { display: flex; gap: 2px; min-width: 0; }
    .s { display: flex; align-items: center; gap: 8px; padding: 7px 10px; border-radius: 8px; color: var(--bar-dim); font-size: 13.5px; }
    .s i { display: grid; place-items: center; flex: none; width: 9px; height: 9px; border-radius: 50%; background: var(--c); color: #fff; font: 600 0/1 var(--sans); font-style: normal; }
    .s b { font-weight: 500; }
    .s small { font-size: 12px; opacity: .7; }
    :is([data-at="subject"], [data-at="book"], [data-at="chat"]) .s.is-claude { background: var(--bar-on); color: var(--bar-fg); }
    .find { display: flex; align-items: center; gap: 8px; padding: 6px 11px; border-radius: 9px; white-space: nowrap; }
    .lib .find { margin-left: auto; background: var(--bar-on); color: var(--bar-dim); }
    .me { grid-area: me; display: flex; align-items: center; gap: 9px; background: var(--bar); color: var(--bar-fg); }
    .me i { display: grid; place-items: center; flex: none; width: 32px; height: 32px; border-radius: 50%; background: var(--me); color: #fff; font: 600 14px/1 var(--sans); font-style: normal; }
    .me b { display: block; font-weight: 500; line-height: 1.2; white-space: nowrap; }
    .me small { display: block; font-size: 11.5px; opacity: .7; white-space: nowrap; }

    /* the open page's own things: what it is filed under, its name, who it is by, its tools */
    .sub { --sub-fg: var(--ink); --sub-dim: var(--soft); --ctl: var(--mist); --ctl-line: var(--line); --ctl-fg: var(--soft); --on: var(--night); --on-fg: #fff; --lnk: var(--blue); --melnk: var(--me);
        grid-area: sub; display: flex; flex-wrap: wrap; align-items: flex-end; gap: 10px 20px; min-width: 0; padding: 20px 28px 14px; color: var(--sub-fg); }
    .chain { display: flex; align-items: center; gap: 7px; font-size: 12.5px; color: var(--sub-dim); white-space: nowrap; }
    .chain em { font: 600 9.5px/1 var(--sans); font-style: normal; letter-spacing: .12em; text-transform: uppercase; }
    .chain span { display: flex; align-items: center; gap: 7px; }
    .chain i { font-style: normal; opacity: .55; }
    .chain a { font-weight: 500; color: var(--lnk); }
    .title { min-width: 0; }
    h1 { margin-top: 4px; font: 600 36px/1.04 var(--serif); white-space: nowrap; }
    .title p { margin-top: 4px; font-size: 13px; color: var(--sub-dim); }
    .title p a { color: var(--lnk); font-weight: 500; }
    .title p a.to-me { color: var(--melnk); text-decoration: underline; text-decoration-color: var(--me); text-decoration-thickness: 2px; text-underline-offset: 3px; }
    .tools { margin-left: auto; }
    .tools > div { display: flex; flex-wrap: wrap; justify-content: flex-end; align-items: center; gap: 8px; }
    .seg { display: flex; overflow: hidden; border: 1px solid var(--ctl-line); border-radius: 9px; background: var(--ctl); }
    .seg span { padding: 6px 12px; color: var(--ctl-fg); }
    .seg span.on { background: var(--on); color: var(--on-fg); font-weight: 500; }
    .sub .find { border: 1px solid var(--ctl-line); background: var(--ctl); color: var(--ctl-fg); }
    .fav { display: flex; align-items: center; gap: 6px; padding: 6px 11px; border-radius: 9px; background: color-mix(in srgb, var(--me) 12%, white); color: #a8400a; font-weight: 500; white-space: nowrap; }

    /* down: what the open page holds */
    .holds { grid-area: holds; min-width: 0; }
    .holds a { display: flex; align-items: center; gap: 9px; padding: 6px 9px; border-radius: 8px; }
    .holds a i { flex: none; width: 9px; height: 9px; border-radius: 50%; background: var(--c, var(--sea)); }
    .holds a b { font-weight: 500; }
    .holds a small { margin-left: auto; font-size: 12px; color: var(--soft); }
    .holds a.on { background: var(--pale); }

    /* the page itself */
    .thing { grid-area: thing; min-width: 0; }
    .go { display: flex; align-items: center; gap: 20px; margin-bottom: 22px; padding: 16px 20px; border-radius: 16px; background: var(--wash); }
    .go .cover { flex: none; width: 92px; padding: 10px 8px 8px 13px; }
    .go .cover b { font-size: 13.5px; }
    .go .cover small { font-size: 7.5px; padding-top: 6px; }
    .go em { font: 600 10.5px/1 var(--sans); font-style: normal; letter-spacing: .1em; text-transform: uppercase; color: var(--me); }
    .go h2 { margin: 4px 0 2px; font: 600 24px/1.1 var(--serif); }
    .go p { max-width: 52ch; font-size: 13px; color: var(--soft); }
    .go u { display: block; width: 260px; max-width: 100%; height: 4px; margin: 10px 0 6px; border-radius: 9px; background: rgba(12, 27, 31, .1); text-decoration: none; }
    .go u i { display: block; width: 14%; height: 100%; border-radius: 9px; background: var(--me); }
    .go small { font-size: 12px; color: var(--soft); }
    .go .read { margin-left: auto; }
    .read { display: inline-flex; align-items: center; gap: 8px; padding: 9px 18px; border-radius: 99px; background: var(--night); color: #fff; font-weight: 500; white-space: nowrap; }

    /* a cover is the landmark of a book, and every book has a color of its own; my own books are the soft black */
    .cover { position: relative; display: flex; flex-direction: column; aspect-ratio: 3 / 4; padding: 13px 11px 10px 17px; border-radius: 3px 7px 7px 3px; color: #fff; background: linear-gradient(160deg, color-mix(in srgb, var(--c) 90%, white), color-mix(in srgb, var(--c) 86%, black)); box-shadow: 0 12px 22px -14px rgba(12, 27, 31, .55); }
    .cover::before { content: ''; position: absolute; left: 7px; top: 0; bottom: 0; width: 1px; background: rgba(255, 255, 255, .3); }
    .cover b { font: 600 17px/1.08 var(--serif); }
    .cover small { margin-top: auto; padding-top: 8px; border-top: 1px solid rgba(255, 255, 255, .32); font: 600 9px/1.2 var(--sans); letter-spacing: .1em; text-transform: uppercase; opacity: .92; }
    .cover.mine { --c: var(--night); color: var(--opal); background: linear-gradient(160deg, #16303a, var(--night)); }
    .bk:nth-child(8n+1), .open, .go { --c: #e07a35; }
    .bk:nth-child(8n+2) { --c: #c2413f; }
    .bk:nth-child(8n+3) { --c: #4450b8; }
    .bk:nth-child(8n+4) { --c: #1f8a78; }
    .bk:nth-child(8n+5) { --c: #7a4a8c; }
    .bk:nth-child(8n+6) { --c: #2f7fb0; }
    .bk:nth-child(8n+7) { --c: #3d7a4e; }
    .bk:nth-child(8n) { --c: #c24a78; }
    .shelf { display: grid; grid-template-columns: repeat(auto-fill, minmax(124px, 1fr)); gap: 22px 18px; }
    .bk { display: block; }
    .bk .name { display: none; }
    .bk p { display: flex; gap: 6px; margin-top: 8px; font-size: 12px; color: var(--soft); }
    [data-view="list"] .shelf { grid-template-columns: minmax(0, 1fr); gap: 0; }
    [data-view="list"] .bk { display: grid; grid-template-columns: 30px minmax(0, 1fr) auto; gap: 14px; align-items: center; padding: 9px 0; border-bottom: 1px solid var(--line); }
    [data-view="list"] .bk .cover { padding: 0; border-radius: 2px 4px 4px 2px; box-shadow: none; }
    [data-view="list"] .bk .cover::before { left: 4px; }
    [data-view="list"] .bk .cover b, [data-view="list"] .bk .cover small { display: none; }
    [data-view="list"] .bk .name { display: block; font: 600 19px/1.2 var(--serif); }
    [data-view="list"] .bk p { margin: 0; }
    .mines { display: grid; grid-template-columns: repeat(auto-fill, minmax(124px, 148px)); gap: 18px; }

    .tiles { display: grid; grid-template-columns: repeat(auto-fill, minmax(210px, 1fr)); gap: 14px; margin-bottom: 26px; }
    .tile { display: block; padding: 14px 16px 16px; border-radius: 14px; background: var(--t); }
    .tile i { display: block; width: 26px; height: 26px; margin-bottom: 24px; border-radius: 8px; background: var(--c); }
    .tile b { display: block; font: 600 21px/1.1 var(--serif); }
    .tile small { font-size: 12.5px; color: var(--soft); }

    .open, .person { display: flex; gap: 26px; align-items: flex-start; }
    .cover.big { flex: none; width: 180px; padding: 20px 15px 13px 24px; }
    .cover.big b { font-size: 26px; }
    .cover.big::before { left: 11px; }
    .words { min-width: 0; }
    .says { max-width: 56ch; font: 500 20px/1.5 var(--serif); }
    .words .read { margin-top: 18px; }
    .face { display: grid; place-items: center; flex: none; width: 96px; height: 96px; border-radius: 50%; background: var(--me); color: #fff; font: 600 46px/1 var(--serif); box-shadow: 0 0 0 5px var(--white), 0 0 0 6px color-mix(in srgb, var(--me) 45%, white); }
    .counts { display: flex; gap: 26px; margin: 16px 0 22px; color: var(--soft); font-size: 12.5px; }
    .counts b { display: block; font: 600 26px/1.1 var(--serif); color: var(--ink); }

    /* a conversation, in the form of the application it comes from; my turns in my color */
    .chat { display: grid; gap: 20px; max-width: 720px; margin: 0 auto; }
    .chat .who { display: block; margin-bottom: 4px; font: 600 10.5px/1 var(--sans); letter-spacing: .1em; text-transform: uppercase; color: var(--soft); }
    .chat .mine { justify-self: end; max-width: 78%; padding: 11px 16px; border-radius: 18px 18px 4px 18px; background: color-mix(in srgb, var(--me) 9%, white); font-size: 15px; }
    .chat .mine .who { color: var(--me); }
    .chat .theirs p { font: 500 19.5px/1.55 var(--serif); }
    .chat .theirs p + p { margin-top: 10px; }
    .chat mark { padding: 1px 3px; border-radius: 3px; background: var(--pale); color: inherit; }
    .chat sup { margin-left: 2px; font: 600 10.5px/1 var(--sans); color: var(--me); }
    .chat pre { margin: 12px 0; padding: 12px 14px; border-radius: 10px; background: var(--night); color: #d7e6ea; font: 400 12.5px/1.6 ui-monospace, 'Cascadia Code', Consolas, monospace; overflow: auto; }
    .chat .made { display: flex; align-items: center; gap: 10px; width: fit-content; margin-top: 12px; padding: 9px 13px; border: 1px solid var(--line); border-radius: 12px; font-size: 13px; }
    .chat .made i { display: grid; place-items: center; width: 30px; height: 30px; border-radius: 8px; background: var(--pale); color: var(--blue); font-style: normal; }
    .chat .made small { display: block; color: var(--soft); font-size: 12px; }
    .chat .turns { display: flex; justify-content: space-between; padding-top: 16px; border-top: 1px solid var(--line); color: var(--blue); font-weight: 500; }

    /* across: what it cites, what cites it, and what I wrote beside it */
    .across { grid-area: across; min-width: 0; }
    .ref { display: block; margin-bottom: 8px; padding: 10px 12px; border: 1px solid var(--line); border-radius: 12px; background: var(--white); }
    .ref .to { display: flex; align-items: center; gap: 7px; font-weight: 600; }
    .ref .to svg { color: var(--soft); }
    .ref .to i { flex: none; width: 9px; height: 9px; border-radius: 50%; background: var(--c, var(--sea)); }
    .ref p { margin-top: 2px; font-size: 12.5px; color: var(--soft); }
    .ref q { display: block; margin-top: 7px; padding: 6px 9px; border-radius: 7px; background: var(--pale); font: italic 500 15.5px/1.35 var(--serif); quotes: '“' '”'; }
    .note { padding: 10px 12px; border: 1px dashed var(--line); border-radius: 12px; font-size: 13px; color: var(--soft); }
    .note b { display: block; margin-bottom: 2px; color: var(--ink); font-weight: 500; }
    .return { display: none; align-items: center; gap: 8px; margin-bottom: 14px; padding: 9px 12px; border-radius: 10px; background: var(--night); color: #fff; font-weight: 500; }
    .return svg { color: var(--sky); }
    [data-at="author"][data-from="book"] .return.to-book, [data-at="author"][data-from="subject"] .return.to-subject { display: flex; }

    /* ---- what each idea colors, at every width ---- */
    [data-layout="both"] .holds { background: var(--pale); }
    [data-layout="both"] .holds a.on { background: var(--white); }
    [data-layout="rail"][data-tone="dark"] .sub { --sub-fg: #fff; --sub-dim: rgba(255, 255, 255, .8); --ctl: rgba(12, 27, 31, .26); --ctl-line: transparent; --ctl-fg: #fff; --on: #fff; --on-fg: var(--night); --lnk: #fff; --melnk: #fff; background: var(--blue); }
    [data-layout="rail"][data-tone="dark"] .fav { background: #fff; }
    [data-layout="rail"][data-tone="light"] { --bar: var(--pale); --bar-on: #fff; --bar-line: #cbe6ee; }
    [data-layout="two"][data-tone="dark"] .sub { --sub-dim: #27505c; --ctl: rgba(255, 255, 255, .62); --ctl-line: transparent; --ctl-fg: var(--ink); --lnk: var(--deep); background: var(--sky); }
    [data-layout="two"][data-tone="light"] .sub { --ctl: #fff; background: var(--pale); }
    [data-layout="side"][data-tone="light"] { --bar: var(--mist); --bar-on: #fff; }
    [data-layout="cards"][data-tone="light"] { --canvas: #e9f2f5; --bar-on: #fff; }
    [data-layout="cards"][data-tone="dark"] { --canvas: var(--night); }
    [data-layout="cards"] body, [data-layout="cards"] .lib, [data-layout="cards"] .me { background: var(--canvas); }
    [data-layout="cards"] :is(.sub, .holds, .thing, .across) { background: var(--white); }
    :is([data-layout="header"], [data-layout="both"], [data-layout="two"], [data-layout="cards"]):is([data-at="subject"], [data-at="book"], [data-at="chat"]) .s.is-claude { box-shadow: inset 0 -2px 0 var(--c); }

    /* ---- at a desk: where each idea puts the bars ---- */
    @media (min-width: 761px) {
        html, body { height: 100%; }
        body { display: grid; overflow: hidden; }
        .thing { padding: 20px 28px 40px; overflow: auto; }
        .holds { padding: 18px 12px; overflow: auto; }
        .across { padding: 18px 16px; overflow: auto; border-left: 1px solid var(--line); }

        /* a bar across the top holds the library, with me at its right end */
        :is([data-layout="header"], [data-layout="both"], [data-layout="two"], [data-layout="cards"]) .lib { padding: 9px 170px 9px 18px; }
        :is([data-layout="header"], [data-layout="both"], [data-layout="two"], [data-layout="cards"]) .logo { margin-right: 12px; }
        :is([data-layout="header"], [data-layout="both"], [data-layout="two"], [data-layout="cards"]) :is(.s small, .me small, .lib .find em) { display: none; }
        :is([data-layout="header"], [data-layout="both"], [data-layout="two"], [data-layout="cards"]) .me { grid-area: lib; justify-self: end; z-index: 1; padding: 0 18px 0 8px; background: none; }
        [data-tone="light"]:is([data-layout="header"], [data-layout="both"], [data-layout="two"]) .lib { border-bottom: 1px solid var(--line); }

        [data-layout="header"] body { grid-template: auto auto auto minmax(0, 1fr) / minmax(0, 1fr) 300px; grid-template-areas: "lib lib" "sub sub" "holds holds" "thing across"; }
        [data-layout="both"] body { grid-template: auto auto minmax(0, 1fr) / 240px minmax(0, 1fr) 300px; grid-template-areas: "lib lib lib" "holds sub sub" "holds thing across"; }
        [data-layout="both"] .holds { padding: 20px 12px; border-right: 1px solid #cbe6ee; }
        [data-layout="two"] body { grid-template: auto auto minmax(0, 1fr) / 236px minmax(0, 1fr) 300px; grid-template-areas: "lib lib lib" "sub sub sub" "holds thing across"; }
        [data-layout="two"] .sub { align-items: center; padding: 9px 24px; }
        [data-layout="two"] .title { display: flex; flex-wrap: wrap; align-items: baseline; gap: 4px 16px; }
        [data-layout="two"] h1 { margin: 0; font-size: 26px; order: -1; }
        [data-layout="two"] .title p { display: none; }
        [data-layout="two"] .holds { border-right: 1px solid var(--line); }
        [data-layout="cards"] body { grid-template: auto auto minmax(0, 1fr) / 244px minmax(0, 1fr) 300px; grid-template-areas: "lib lib lib" "holds sub across" "holds thing across"; column-gap: 12px; padding: 0 12px 12px; }
        [data-layout="cards"] .lib { padding: 11px 170px 11px 6px; }
        [data-layout="cards"] .me { padding: 0 6px; }
        [data-layout="cards"] :is(.holds, .across) { border: 0; border-radius: 16px; }
        [data-layout="cards"] .sub { border-radius: 16px 16px 0 0; }
        [data-layout="cards"] .thing { border-radius: 0 0 16px 16px; }

        /* a bar down the left holds the library, with me at its foot */
        [data-layout="side"] body { grid-template: auto minmax(0, 1fr) / 256px minmax(0, 1fr) 300px; grid-template-areas: "side sub sub" "side thing across"; }
        [data-layout="side"] .side { grid-area: side; display: flex; flex-direction: column; min-height: 0; background: var(--bar); }
        [data-layout="side"] .holds { flex: 1; order: 1; }
        [data-layout="side"] .me { order: 2; }
        [data-layout="side"] .lib { flex-direction: column; align-items: stretch; gap: 2px; padding: 18px 12px 12px; }
        [data-layout="side"] .logo { padding: 0 6px 14px; }
        [data-layout="side"] .subjects { flex-direction: column; }
        [data-layout="side"] .s small { margin-left: auto; }
        [data-layout="side"] .lib .find { margin: 10px 0 0; }
        [data-layout="side"] .holds { padding: 14px 12px; border-top: 1px solid var(--bar-line); background: var(--bar); color: var(--bar-fg); }
        [data-layout="side"] .holds h4, [data-layout="side"] .holds a small { color: var(--bar-dim); }
        [data-layout="side"] .holds a.on { background: var(--bar-on); }
        [data-layout="side"] .me { padding: 12px 18px 14px; border-top: 1px solid var(--bar-line); }
        [data-layout="side"][data-tone="light"] .side { border-right: 1px solid var(--line); }

        /* a narrow rail holds the subjects as marks and me as a face */
        [data-layout="rail"] body { grid-template: auto auto minmax(0, 1fr) auto / 68px minmax(0, 1fr) 300px; grid-template-areas: "lib sub sub" "lib holds holds" "lib thing across" "me thing across"; }
        [data-layout="rail"] .lib { flex-direction: column; gap: 12px; padding: 14px 0; }
        [data-layout="rail"] :is(.logo b, .lib .find, .s b, .s small, .me span) { display: none; }
        [data-layout="rail"] .subjects { flex-direction: column; align-items: center; gap: 10px; }
        [data-layout="rail"] .s { padding: 0; background: none; }
        [data-layout="rail"] :is(.s i, .logo i, .me i) { width: 40px; height: 40px; border-radius: 11px; font-size: 13px; }
        [data-layout="rail"] .logo i, [data-layout="rail"] .me i { font-size: 16px; }
        [data-layout="rail"] .me i { border-radius: 50%; }
        [data-layout="rail"]:is([data-at="subject"], [data-at="book"], [data-at="chat"]) .s.is-claude i { box-shadow: 0 0 0 2px var(--bar), 0 0 0 4px var(--c); }
        [data-layout="rail"] .me { justify-content: center; padding: 10px 0 14px; }
        [data-layout="rail"] .sub { padding: 16px 26px 14px; }
        [data-layout="rail"][data-tone="light"] :is(.lib, .me) { border-right: 1px solid #cbe6ee; }

        /* with no side bar, what the page holds is a row under its name */
        :is([data-layout="header"], [data-layout="rail"]) .holds { padding: 12px 28px; overflow: auto hidden; border-bottom: 1px solid var(--line); scrollbar-width: none; }
        [data-layout="header"] .holds { padding-top: 0; }
        :is([data-layout="header"], [data-layout="rail"]) .holds > div { display: flex; align-items: center; gap: 6px; }
        :is([data-layout="header"], [data-layout="rail"]) .holds h4 { flex: none; margin: 0 6px 0 0; }
        :is([data-layout="header"], [data-layout="rail"]) .holds h4.next { margin-left: 18px; }
        :is([data-layout="header"], [data-layout="rail"]) .holds h4 small { display: none; }
        :is([data-layout="header"], [data-layout="rail"]) .holds a { flex: none; padding: 5px 11px 5px 9px; border: 1px solid var(--line); border-radius: 99px; white-space: nowrap; }
        :is([data-layout="header"], [data-layout="rail"]) .holds a small { margin-left: 4px; }
        :is([data-layout="header"], [data-layout="rail"]) .holds a.on { border-color: transparent; }
    }

    /* ---- on a phone: one bar at the top, the page beneath it in one column ---- */
    @media (max-width: 760px) {
        body { position: relative; display: flex; flex-direction: column; }
        .sub { order: 1; }
        .holds { order: 2; }
        .thing { order: 3; }
        .across { order: 4; }
        .lib { position: sticky; top: 0; z-index: 4; height: 50px; margin-right: 54px; padding: 0 8px 0 14px; gap: 4px; overflow: auto hidden; scrollbar-width: none; }
        .logo { margin-right: 8px; }
        .logo b { font-size: 19px; }
        .s { white-space: nowrap; }
        .s small, .lib .find, .me span { display: none; }
        .me { position: fixed; z-index: 5; top: 0; right: 0; justify-content: center; width: 54px; height: 50px; }
        [data-tone="light"] :is(.lib, .me) { border-bottom: 1px solid var(--line); }
        .sub { flex-direction: column; flex-wrap: nowrap; align-items: stretch; padding: 16px 16px 12px; }
        h1 { font-size: 28px; white-space: normal; }
        .chain { overflow: auto hidden; scrollbar-width: none; }
        .tools { margin: 0; }
        .tools > div { justify-content: flex-start; }
        .holds { padding: 10px 16px 12px; overflow: auto hidden; border-bottom: 1px solid var(--line); scrollbar-width: none; }
        .holds > div { display: flex; align-items: center; gap: 6px; }
        .holds h4 { flex: none; margin: 0 6px 0 0; }
        .holds h4.next { margin-left: 18px; }
        .holds h4 small { display: none; }
        .holds a { flex: none; padding: 5px 11px 5px 9px; border: 1px solid var(--line); border-radius: 99px; background: var(--white); white-space: nowrap; }
        .holds a small { margin-left: 4px; }
        .thing { padding: 16px 16px 24px; }
        .go { flex-wrap: wrap; gap: 14px; padding: 14px; }
        .go > div { flex: 1 1 60%; min-width: 0; }
        .go .read { margin: 0; }
        .shelf { grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 16px 12px; }
        .cover { padding: 10px 8px 8px 13px; }
        .cover b { font-size: 14.5px; }
        .open, .person { flex-direction: column; gap: 16px; }
        .cover.big { width: 150px; }
        .cover.big b { font-size: 22px; }
        .counts { gap: 18px; }
        .chat .mine { max-width: 88%; }
        .across { padding: 16px; border-top: 1px solid var(--line); }

        /* a side bar or a rail turns to lie along the foot, the subjects as marks */
        :is([data-layout="side"], [data-layout="rail"]) body { padding-bottom: 60px; }
        :is([data-layout="side"], [data-layout="rail"]) .subjects { position: fixed; z-index: 4; left: 0; right: 0; bottom: 0; justify-content: space-around; padding: 8px 10px; border-top: 1px solid var(--bar-line); background: var(--bar); }
        :is([data-layout="side"], [data-layout="rail"]) .s { padding: 0; background: none; box-shadow: none; }
        :is([data-layout="side"], [data-layout="rail"]) .s b { display: none; }
        :is([data-layout="side"], [data-layout="rail"]) .s i { width: 42px; height: 42px; border-radius: 12px; font-size: 13px; }
        :is([data-layout="side"], [data-layout="rail"]):is([data-at="subject"], [data-at="book"], [data-at="chat"]) .s.is-claude i { box-shadow: 0 0 0 2px var(--bar), 0 0 0 4px var(--c); }

        [data-layout="two"] .sub { padding: 12px 16px; }
        [data-layout="two"] .title p { display: none; }
        [data-layout="cards"] body { padding-bottom: 10px; }
        [data-layout="cards"] :is(.sub, .holds, .thing, .across) { margin: 0 10px; }
        [data-layout="cards"] .sub { margin-top: 4px; border-radius: 14px 14px 0 0; }
        [data-layout="cards"] .thing { border-radius: 0 0 14px 14px; }
        [data-layout="cards"] .across { margin-top: 10px; border: 0; border-radius: 14px; }
    }
</style>
</head>
<body>

<div class="side">
<header class="lib">
    <a class="logo" data-go="library"><i>D</i><b>Dougs Library</b></a>
    <nav class="subjects">
        <a class="s is-claude" data-go="subject" style="--c: var(--sea)"><i>Cl</i><b>Conversations with Claude</b><small>212</small></a>
        <a class="s" style="--c: #1f8a78"><i>Ch</i><b>Conversations with ChatGPT</b><small>147</small></a>
        <a class="s" style="--c: #c24a78"><i>De</i><b>Dougs Design</b><small>5</small></a>
        <a class="s" style="--c: #7a4a8c"><i>Rm</i><b>Dougs Reference Manual</b><small>3</small></a>
    </nav>
    <span class="find"><svg viewBox="0 0 16 16"><circle cx="7" cy="7" r="4.5"/><path d="M10.5 10.5 14 14"/></svg><em style="font-style: normal">Find in the library</em></span>
</header>

<a class="me" data-go="author"><i>D</i><span><b>The Librarian</b><small>my own account</small></span></a>

<aside class="holds">
    <div class="at-library">
        <h4>My favorites<small>3</small></h4>
        <a data-go="book" style="--c: #e07a35"><i></i><b>Lorem Ipsum Dolor</b><small class="star">★</small></a>
        <a style="--c: #4450b8"><i></i><b>Magna Aliqua</b><small class="star">★</small></a>
        <a style="--c: #c24a78"><i></i><b>The Library's Home</b><small class="star">★</small></a>
    </div>
    <div class="at-subject">
        <h4>Holds<small>3 projects</small></h4>
        <a class="on" style="--c: #e07a35"><i></i><b>A First Project</b><small>38</small></a>
        <a style="--c: #1f8a78"><i></i><b>A Second Project</b><small>91</small></a>
        <a style="--c: #4450b8"><i></i><b>A Third Project</b><small>83</small></a>
        <h4 class="next">My favorites here<small>2</small></h4>
        <a data-go="book" style="--c: #e07a35"><i></i><b>Lorem Ipsum Dolor</b><small class="star">★</small></a>
        <a style="--c: #4450b8"><i></i><b>Magna Aliqua</b><small class="star">★</small></a>
    </div>
    <div class="at-book at-chat">
        <h4>Holds<small>8 chapters</small></h4>
        <a class="first" data-go="chat" style="--c: #e07a35"><i></i><b>A First Chapter</b><small>1</small></a>
        <a style="--c: #e07a35"><i></i><b>A Second Chapter</b><small>2</small></a>
        <a style="--c: #e07a35"><i></i><b>A Third Chapter</b><small>3</small></a>
        <a style="--c: #e07a35"><i></i><b>A Fourth Chapter</b><small>4</small></a>
        <a style="--c: #e07a35"><i></i><b>A Fifth Chapter</b><small>5</small></a>
    </div>
    <div class="at-author">
        <h4>My books<small>3</small></h4>
        <a class="on" style="--c: var(--me)"><i></i><b>Dougs Story</b><small>3</small></a>
        <a style="--c: #c24a78"><i></i><b>Dougs Design</b><small>5</small></a>
        <a style="--c: #7a4a8c"><i></i><b>Dougs Reference Manual</b><small>3</small></a>
    </div>
</aside>
</div>

<section class="sub">
    <div class="title">
        <div class="chain">
            <em>Filed under</em>
            <span class="at-library">itself</span>
            <span class="at-subject"><a data-go="library">Dougs Library</a></span>
            <span class="at-book"><a data-go="subject">Conversations with Claude</a><i>›</i><a data-go="subject">A First Project</a></span>
            <span class="at-chat"><a data-go="subject">Conversations with Claude</a><i>›</i><a data-go="subject">A First Project</a><i>›</i><a data-go="book">Lorem Ipsum Dolor</a></span>
            <span class="at-author"><a data-go="library">Dougs Library</a></span>
        </div>
        <h1 class="at-library">Dougs Library</h1>
        <h1 class="at-subject">Conversations with Claude</h1>
        <h1 class="at-book">Lorem Ipsum Dolor</h1>
        <h1 class="at-chat">A First Chapter</h1>
        <h1 class="at-author">Dougs Story</h1>
        <p class="at-library">by <a class="to-me" data-go="author">The Librarian</a> · three books and two subjects · 359 conversations kept</p>
        <p class="at-subject">a subject · 212 books in three projects · by <a class="to-me" data-go="author">The Librarian</a></p>
        <p class="at-book">by <a class="to-me" data-go="author">The Librarian</a> and Claude · 8 chapters · kept 9 Sep 2026</p>
        <p class="at-chat">chapter 1 of 8 · <a class="to-me" data-go="author">The Librarian</a> and Claude · kept 9 Sep 2026</p>
        <p class="at-author">The Librarian · my own account</p>
    </div>
    <div class="tools">
        <div class="at-subject">
            <span class="seg"><span class="on" data-view-is="shelf">Shelf</span><span data-view-is="list">List</span><span>Table</span></span>
            <span class="find"><svg viewBox="0 0 16 16"><circle cx="7" cy="7" r="4.5"/><path d="M10.5 10.5 14 14"/></svg>Find in this subject</span>
        </div>
        <div class="at-book">
            <span class="fav"><em class="star">★</em>Among my favorites</span>
            <span class="find"><svg viewBox="0 0 16 16"><circle cx="7" cy="7" r="4.5"/><path d="M10.5 10.5 14 14"/></svg>Find in this book</span>
        </div>
        <div class="at-chat">
            <span class="find"><svg viewBox="0 0 16 16"><path d="M8 3v10M3 8h10"/></svg>Note on a passage</span>
            <span class="find"><svg viewBox="0 0 16 16"><circle cx="7" cy="7" r="4.5"/><path d="M10.5 10.5 14 14"/></svg>Find in this book</span>
        </div>
    </div>
</section>

<main class="thing">
    <div class="at-library">
        <h4>Subjects</h4>
        <div class="tiles">
            <a class="tile" data-go="subject" style="--t: #dff3fa; --c: var(--sea)"><i></i><b>Conversations with Claude</b><small>212 books in three projects</small></a>
            <a class="tile" style="--t: #dcf5ee; --c: #1f8a78"><i></i><b>Conversations with ChatGPT</b><small>147 books</small></a>
        </div>
        <h4>My books</h4>
        <div class="mines">
            <a class="cover mine" data-go="author"><b>Dougs Story</b><small>my own account</small></a>
            <a class="cover mine"><b>Dougs Design</b><small>the design</small></a>
            <a class="cover mine"><b>Dougs Reference Manual</b><small>the parts</small></a>
        </div>
    </div>

    <div class="at-subject">
        <div class="go">
            <span class="cover"><b>Lorem Ipsum Dolor</b><small>with Claude</small></span>
            <div>
                <em>Continue</em>
                <h2>Lorem Ipsum Dolor</h2>
                <p>A First Project · kept 9 September 2026. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                <u><i></i></u>
                <small>Chapter 1 of 8 · 2 notes of mine · cited twice</small>
            </div>
            <a class="read" data-go="chat">Read</a>
        </div>
        <h4>Lately kept<small>212 books · newest first</small></h4>
        <div class="shelf">
            <a class="bk" data-go="book"><span class="cover"><b>Lorem Ipsum Dolor</b><small>with Claude</small></span><b class="name">Lorem Ipsum Dolor</b><p>9 Sep · 8 chapters <em class="star">★</em></p></a>
            <a class="bk"><span class="cover"><b>Quis Nostrud</b><small>with Claude</small></span><b class="name">Quis Nostrud</b><p>1 Oct · 6 chapters</p></a>
            <a class="bk"><span class="cover"><b>Magna Aliqua</b><small>with Claude</small></span><b class="name">Magna Aliqua</b><p>20 Sep · 11 chapters <em class="star">★</em></p></a>
            <a class="bk"><span class="cover"><b>Tempor Incididunt</b><small>with Claude</small></span><b class="name">Tempor Incididunt</b><p>12 Sep · 7 chapters</p></a>
            <a class="bk"><span class="cover"><b>Ut Enim ad Minim</b><small>with Claude</small></span><b class="name">Ut Enim ad Minim</b><p>27 Sep · 3 chapters</p></a>
            <a class="bk"><span class="cover"><b>Sed Do Eiusmod</b><small>with Claude</small></span><b class="name">Sed Do Eiusmod</b><p>5 Sep · 2 chapters</p></a>
            <a class="bk"><span class="cover"><b>Adipiscing Elit</b><small>with Claude</small></span><b class="name">Adipiscing Elit</b><p>2 Sep · 9 chapters</p></a>
            <a class="bk"><span class="cover"><b>Sit Amet Consectetur</b><small>with Claude</small></span><b class="name">Sit Amet Consectetur</b><p>21 Jul · 14 chapters</p></a>
            <a class="bk"><span class="cover"><b>Duis Aute Irure</b><small>with Claude</small></span><b class="name">Duis Aute Irure</b><p>14 Jul · 5 chapters</p></a>
            <a class="bk"><span class="cover"><b>Excepteur Sint</b><small>with Claude</small></span><b class="name">Excepteur Sint</b><p>2 Jul · 4 chapters</p></a>
        </div>
    </div>

    <div class="open at-book">
        <span class="cover big"><b>Lorem Ipsum Dolor</b><small>with Claude</small></span>
        <div class="words">
            <p class="says">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
            <a class="read" data-go="chat">Read from A First Chapter<svg viewBox="0 0 16 16"><path d="M3 8h10M9 4l4 4-4 4"/></svg></a>
        </div>
    </div>

    <div class="chat at-chat">
        <div class="mine"><span class="who">The Librarian</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit? Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
        <div class="theirs">
            <span class="who">Claude</span>
            <p>Ut enim ad minim veniam, quis nostrud exercitation. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <mark>Excepteur sint occaecat cupidatat non proident</mark><sup>1</sup>, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
<pre>const lorem = ipsum.dolor('sit amet');
return lorem.consectetur();</pre>
            <a class="made"><i>◇</i><span><b>Lorem Ipsum, a first draft</b><small>made in this turn · opens beside the page</small></span></a>
        </div>
        <div class="mine"><span class="who">The Librarian</span>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit?</div>
        <div class="theirs">
            <span class="who">Claude</span>
            <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.</p>
        </div>
        <div class="turns"><span></span><a>A Second Chapter →</a></div>
    </div>

    <div class="person at-author">
        <span class="face">D</span>
        <div class="words">
            <p class="says">My own account, and the one book here that is by its own subject. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            <div class="counts"><span><b>3</b>books written</span><span><b>359</b>conversations kept</span><span><b>41</b>notes</span></div>
            <div class="mines">
                <a class="cover mine"><b>Dougs Story</b><small>my own account</small></a>
                <a class="cover mine"><b>Dougs Design</b><small>the design</small></a>
                <a class="cover mine"><b>Dougs Reference Manual</b><small>the parts</small></a>
            </div>
        </div>
    </div>
</main>

<aside class="across">
    <a class="return to-book" data-go="book"><svg viewBox="0 0 16 16"><path d="M13 8H3M7 4 3 8l4 4"/></svg>Back to Lorem Ipsum Dolor</a>
    <a class="return to-subject" data-go="subject"><svg viewBox="0 0 16 16"><path d="M13 8H3M7 4 3 8l4 4"/></svg>Back to Conversations with Claude</a>

    <div class="at-library">
        <h4>Lately kept</h4>
        <a class="ref" style="--c: #c2413f"><span class="to"><i></i>Quis Nostrud</span><p>1 Oct · Conversations with Claude</p></a>
        <a class="ref" style="--c: #7a4a8c"><span class="to"><i></i>Ut Enim ad Minim</span><p>27 Sep · Conversations with Claude</p></a>
        <h4 class="next">My notes<small>41</small></h4>
        <div class="note"><b>3 Oct 2026 · in Lorem Ipsum Dolor</b>Lorem ipsum, a note of mine beside the passage it is about.</div>
    </div>

    <div class="at-subject">
        <h4>Cited from outside<small>2</small></h4>
        <a class="ref" data-go="author" data-from="subject" style="--c: var(--me)"><span class="to"><svg viewBox="0 0 16 16"><path d="M13 8H3M7 4 3 8l4 4"/></svg><i></i>Dougs Story</span><p>chapter 1 cites Lorem Ipsum Dolor</p></a>
        <a class="ref" style="--c: #1f8a78"><span class="to"><svg viewBox="0 0 16 16"><path d="M13 8H3M7 4 3 8l4 4"/></svg><i></i>Conversations with ChatGPT</span><p>one book cites Adipiscing Elit</p></a>
        <h4 class="next">My notes here<small>12</small></h4>
        <div class="note"><b>3 Oct 2026 · in Lorem Ipsum Dolor</b>Lorem ipsum, a note of mine beside the passage it is about.</div>
    </div>

    <div class="at-book at-chat">
        <h4>Cites<small>1</small></h4>
        <a class="ref" style="--c: #3d7a4e"><span class="to"><svg viewBox="0 0 16 16"><path d="M3 8h10M9 4l4 4-4 4"/></svg><i></i>Adipiscing Elit</span><p>chapter 2 · A First Project</p></a>
        <h4 class="next">Cited by<small>2</small></h4>
        <a class="ref" data-go="author" data-from="book" style="--c: var(--me)"><span class="to"><svg viewBox="0 0 16 16"><path d="M13 8H3M7 4 3 8l4 4"/></svg><i></i>Dougs Story</span><p>chapter 1 · my own account</p><q>Excepteur sint occaecat cupidatat non proident</q></a>
        <a class="ref" style="--c: #c24a78"><span class="to"><svg viewBox="0 0 16 16"><path d="M13 8H3M7 4 3 8l4 4"/></svg><i></i>Sit Amet Consectetur</span><p>chapter 3 · A First Project</p></a>
        <h4 class="next">My notes<small>1</small></h4>
        <div class="note"><b>1 · 3 Oct 2026</b>Lorem ipsum, a note of mine beside the passage it is about.</div>
    </div>

    <div class="at-author">
        <h4>Cites<small>1</small></h4>
        <a class="ref" data-go="book" style="--c: #e07a35"><span class="to"><svg viewBox="0 0 16 16"><path d="M3 8h10M9 4l4 4-4 4"/></svg><i></i>Lorem Ipsum Dolor</span><p>chapter 1 · a conversation with Claude</p><q>Excepteur sint occaecat cupidatat non proident</q></a>
        <h4 class="next">Cited by<small>0</small></h4>
        <div class="note">Nothing cites this chapter yet.</div>
    </div>
</aside>

<script>
    const page = document.documentElement;
    for (const door of document.querySelectorAll('[data-go]'))
        door.addEventListener('click', () => {
            if (door.dataset.from) page.dataset.from = door.dataset.from;
            else delete page.dataset.from;
            page.dataset.at = door.dataset.go;
            window.scrollTo(0, 0);
            for (const column of document.querySelectorAll('.thing, .holds, .across')) column.scrollTop = 0;
        });
    for (const view of document.querySelectorAll('[data-view-is]'))
        view.addEventListener('click', () => {
            page.dataset.view = view.dataset.viewIs;
            for (const other of view.parentElement.children) other.classList.toggle('on', other === view);
        });
<\/script>
</body>
</html>
`})]})]}),a.jsxs(i,{children:[a.jsx(d,{children:"22"}),a.jsx(o,{children:"No Bars: White Cards on Black"}),a.jsx(t,{children:"Concept 22, an idea, after the home that asks its sources, on the coming-soon page's ground."}),a.jsx(t,{children:"The same three cards, darker: on the soft black, so the black is the ground the whole library stands on and the pages are white."}),a.jsxs(t,{children:[a.jsx(p,{}),a.jsx(r,{children:"/.design/3-every-concept~022-desk.png"}),a.jsx(r,{children:"/.design/3-every-concept~022-phone.png"})]}),a.jsxs(t,{children:[a.jsx(c,{}),a.jsx(n,{children:`<!doctype html>
<html lang="en" data-layout="cards" data-tone="dark" data-at="subject" data-view="shelf">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>No Bars: White Cards on Black</title>
<meta name="number" content="22">
<meta name="state" content="idea">
<meta name="after" content="the home that asks its sources, on the coming-soon page's ground">
<meta name="idea" content="The same three cards, darker: on the soft black, so the black is the ground the whole library stands on and the pages are white.">
<meta name="said" content="">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
<style>
    /* ---- what does not change between the ideas ----
       The frame is soft black, the blue between it and white, and white. The soft black #0c1b1f and the opal #c8f4fb are the
       coming-soon page's own; the blues are the hue between them (208 to 223 in OKLCH) walked from dark to light.
       The CONTENT keeps its own colors: every book a cover of its own, the light accents the opal's wave. */
    :root { --night: #0c1b1f; --deep: #14323c; --blue: #166178; --sea: #4e9eb9; --sky: #8fc8dc; --opal: #c8f4fb; --pale: #e3f5fa; --mist: #f1f7f9; --white: #ffffff;
        --ink: #10252c; --soft: #516770; --line: #dbe7ec; --me: #e8590c;
        --wash: linear-gradient(105deg, #e2f6fb 0%, #ecf0fd 52%, #fae9f4 100%);
        --serif: 'Cormorant Garamond', Georgia, serif; --sans: 'Inter', system-ui, sans-serif; }
    [data-tone="dark"] { --bar: var(--night); --bar-fg: #ffffff; --bar-dim: #a9bcc1; --bar-on: rgba(255, 255, 255, .11); --bar-line: #1d3339; --mark: var(--opal); --mark-fg: var(--night); }
    [data-tone="light"] { --bar: var(--white); --bar-fg: var(--ink); --bar-dim: var(--soft); --bar-on: var(--pale); --bar-line: var(--line); --mark: var(--night); --mark-fg: #ffffff; }
    [data-at="library"] [class*="at-"]:not(.at-library), [data-at="subject"] [class*="at-"]:not(.at-subject), [data-at="book"] [class*="at-"]:not(.at-book), [data-at="chat"] [class*="at-"]:not(.at-chat), [data-at="author"] [class*="at-"]:not(.at-author) { display: none !important; }

    * { box-sizing: border-box; margin: 0; }
    body { background: var(--white); color: var(--ink); font: 400 14px/1.5 var(--sans); }
    a { color: inherit; text-decoration: none; }
    svg { width: 15px; height: 15px; stroke: currentColor; fill: none; stroke-width: 1.7; stroke-linecap: round; stroke-linejoin: round; flex: none; }
    [data-go], [data-view-is] { cursor: pointer; }
    h4 { display: flex; align-items: center; gap: 8px; margin-bottom: 10px; font: 600 10.5px/1 var(--sans); letter-spacing: .12em; text-transform: uppercase; color: var(--soft); }
    h4 small { margin-left: auto; font: 400 11.5px/1 var(--sans); letter-spacing: 0; text-transform: none; }
    h4.next { margin-top: 22px; }
    .star { color: var(--me); font-style: normal; }

    /* the library's own things: its mark, its subjects, a way to find, and me. They are held together only where an idea has a side bar. */
    .side { display: contents; }
    [data-at="chat"] .holds a.first { background: var(--bar-on, var(--pale)); }
    .lib { grid-area: lib; display: flex; align-items: center; gap: 6px; min-width: 0; background: var(--bar); color: var(--bar-fg); }
    .logo { display: flex; align-items: center; gap: 10px; flex: none; }
    .logo i { display: grid; place-items: center; width: 30px; height: 30px; border-radius: 8px; background: var(--mark); color: var(--mark-fg); font: 600 15px/1 var(--sans); font-style: normal; }
    .logo b { font: 600 21px/1 var(--serif); white-space: nowrap; }
    .subjects { display: flex; gap: 2px; min-width: 0; }
    .s { display: flex; align-items: center; gap: 8px; padding: 7px 10px; border-radius: 8px; color: var(--bar-dim); font-size: 13.5px; }
    .s i { display: grid; place-items: center; flex: none; width: 9px; height: 9px; border-radius: 50%; background: var(--c); color: #fff; font: 600 0/1 var(--sans); font-style: normal; }
    .s b { font-weight: 500; }
    .s small { font-size: 12px; opacity: .7; }
    :is([data-at="subject"], [data-at="book"], [data-at="chat"]) .s.is-claude { background: var(--bar-on); color: var(--bar-fg); }
    .find { display: flex; align-items: center; gap: 8px; padding: 6px 11px; border-radius: 9px; white-space: nowrap; }
    .lib .find { margin-left: auto; background: var(--bar-on); color: var(--bar-dim); }
    .me { grid-area: me; display: flex; align-items: center; gap: 9px; background: var(--bar); color: var(--bar-fg); }
    .me i { display: grid; place-items: center; flex: none; width: 32px; height: 32px; border-radius: 50%; background: var(--me); color: #fff; font: 600 14px/1 var(--sans); font-style: normal; }
    .me b { display: block; font-weight: 500; line-height: 1.2; white-space: nowrap; }
    .me small { display: block; font-size: 11.5px; opacity: .7; white-space: nowrap; }

    /* the open page's own things: what it is filed under, its name, who it is by, its tools */
    .sub { --sub-fg: var(--ink); --sub-dim: var(--soft); --ctl: var(--mist); --ctl-line: var(--line); --ctl-fg: var(--soft); --on: var(--night); --on-fg: #fff; --lnk: var(--blue); --melnk: var(--me);
        grid-area: sub; display: flex; flex-wrap: wrap; align-items: flex-end; gap: 10px 20px; min-width: 0; padding: 20px 28px 14px; color: var(--sub-fg); }
    .chain { display: flex; align-items: center; gap: 7px; font-size: 12.5px; color: var(--sub-dim); white-space: nowrap; }
    .chain em { font: 600 9.5px/1 var(--sans); font-style: normal; letter-spacing: .12em; text-transform: uppercase; }
    .chain span { display: flex; align-items: center; gap: 7px; }
    .chain i { font-style: normal; opacity: .55; }
    .chain a { font-weight: 500; color: var(--lnk); }
    .title { min-width: 0; }
    h1 { margin-top: 4px; font: 600 36px/1.04 var(--serif); white-space: nowrap; }
    .title p { margin-top: 4px; font-size: 13px; color: var(--sub-dim); }
    .title p a { color: var(--lnk); font-weight: 500; }
    .title p a.to-me { color: var(--melnk); text-decoration: underline; text-decoration-color: var(--me); text-decoration-thickness: 2px; text-underline-offset: 3px; }
    .tools { margin-left: auto; }
    .tools > div { display: flex; flex-wrap: wrap; justify-content: flex-end; align-items: center; gap: 8px; }
    .seg { display: flex; overflow: hidden; border: 1px solid var(--ctl-line); border-radius: 9px; background: var(--ctl); }
    .seg span { padding: 6px 12px; color: var(--ctl-fg); }
    .seg span.on { background: var(--on); color: var(--on-fg); font-weight: 500; }
    .sub .find { border: 1px solid var(--ctl-line); background: var(--ctl); color: var(--ctl-fg); }
    .fav { display: flex; align-items: center; gap: 6px; padding: 6px 11px; border-radius: 9px; background: color-mix(in srgb, var(--me) 12%, white); color: #a8400a; font-weight: 500; white-space: nowrap; }

    /* down: what the open page holds */
    .holds { grid-area: holds; min-width: 0; }
    .holds a { display: flex; align-items: center; gap: 9px; padding: 6px 9px; border-radius: 8px; }
    .holds a i { flex: none; width: 9px; height: 9px; border-radius: 50%; background: var(--c, var(--sea)); }
    .holds a b { font-weight: 500; }
    .holds a small { margin-left: auto; font-size: 12px; color: var(--soft); }
    .holds a.on { background: var(--pale); }

    /* the page itself */
    .thing { grid-area: thing; min-width: 0; }
    .go { display: flex; align-items: center; gap: 20px; margin-bottom: 22px; padding: 16px 20px; border-radius: 16px; background: var(--wash); }
    .go .cover { flex: none; width: 92px; padding: 10px 8px 8px 13px; }
    .go .cover b { font-size: 13.5px; }
    .go .cover small { font-size: 7.5px; padding-top: 6px; }
    .go em { font: 600 10.5px/1 var(--sans); font-style: normal; letter-spacing: .1em; text-transform: uppercase; color: var(--me); }
    .go h2 { margin: 4px 0 2px; font: 600 24px/1.1 var(--serif); }
    .go p { max-width: 52ch; font-size: 13px; color: var(--soft); }
    .go u { display: block; width: 260px; max-width: 100%; height: 4px; margin: 10px 0 6px; border-radius: 9px; background: rgba(12, 27, 31, .1); text-decoration: none; }
    .go u i { display: block; width: 14%; height: 100%; border-radius: 9px; background: var(--me); }
    .go small { font-size: 12px; color: var(--soft); }
    .go .read { margin-left: auto; }
    .read { display: inline-flex; align-items: center; gap: 8px; padding: 9px 18px; border-radius: 99px; background: var(--night); color: #fff; font-weight: 500; white-space: nowrap; }

    /* a cover is the landmark of a book, and every book has a color of its own; my own books are the soft black */
    .cover { position: relative; display: flex; flex-direction: column; aspect-ratio: 3 / 4; padding: 13px 11px 10px 17px; border-radius: 3px 7px 7px 3px; color: #fff; background: linear-gradient(160deg, color-mix(in srgb, var(--c) 90%, white), color-mix(in srgb, var(--c) 86%, black)); box-shadow: 0 12px 22px -14px rgba(12, 27, 31, .55); }
    .cover::before { content: ''; position: absolute; left: 7px; top: 0; bottom: 0; width: 1px; background: rgba(255, 255, 255, .3); }
    .cover b { font: 600 17px/1.08 var(--serif); }
    .cover small { margin-top: auto; padding-top: 8px; border-top: 1px solid rgba(255, 255, 255, .32); font: 600 9px/1.2 var(--sans); letter-spacing: .1em; text-transform: uppercase; opacity: .92; }
    .cover.mine { --c: var(--night); color: var(--opal); background: linear-gradient(160deg, #16303a, var(--night)); }
    .bk:nth-child(8n+1), .open, .go { --c: #e07a35; }
    .bk:nth-child(8n+2) { --c: #c2413f; }
    .bk:nth-child(8n+3) { --c: #4450b8; }
    .bk:nth-child(8n+4) { --c: #1f8a78; }
    .bk:nth-child(8n+5) { --c: #7a4a8c; }
    .bk:nth-child(8n+6) { --c: #2f7fb0; }
    .bk:nth-child(8n+7) { --c: #3d7a4e; }
    .bk:nth-child(8n) { --c: #c24a78; }
    .shelf { display: grid; grid-template-columns: repeat(auto-fill, minmax(124px, 1fr)); gap: 22px 18px; }
    .bk { display: block; }
    .bk .name { display: none; }
    .bk p { display: flex; gap: 6px; margin-top: 8px; font-size: 12px; color: var(--soft); }
    [data-view="list"] .shelf { grid-template-columns: minmax(0, 1fr); gap: 0; }
    [data-view="list"] .bk { display: grid; grid-template-columns: 30px minmax(0, 1fr) auto; gap: 14px; align-items: center; padding: 9px 0; border-bottom: 1px solid var(--line); }
    [data-view="list"] .bk .cover { padding: 0; border-radius: 2px 4px 4px 2px; box-shadow: none; }
    [data-view="list"] .bk .cover::before { left: 4px; }
    [data-view="list"] .bk .cover b, [data-view="list"] .bk .cover small { display: none; }
    [data-view="list"] .bk .name { display: block; font: 600 19px/1.2 var(--serif); }
    [data-view="list"] .bk p { margin: 0; }
    .mines { display: grid; grid-template-columns: repeat(auto-fill, minmax(124px, 148px)); gap: 18px; }

    .tiles { display: grid; grid-template-columns: repeat(auto-fill, minmax(210px, 1fr)); gap: 14px; margin-bottom: 26px; }
    .tile { display: block; padding: 14px 16px 16px; border-radius: 14px; background: var(--t); }
    .tile i { display: block; width: 26px; height: 26px; margin-bottom: 24px; border-radius: 8px; background: var(--c); }
    .tile b { display: block; font: 600 21px/1.1 var(--serif); }
    .tile small { font-size: 12.5px; color: var(--soft); }

    .open, .person { display: flex; gap: 26px; align-items: flex-start; }
    .cover.big { flex: none; width: 180px; padding: 20px 15px 13px 24px; }
    .cover.big b { font-size: 26px; }
    .cover.big::before { left: 11px; }
    .words { min-width: 0; }
    .says { max-width: 56ch; font: 500 20px/1.5 var(--serif); }
    .words .read { margin-top: 18px; }
    .face { display: grid; place-items: center; flex: none; width: 96px; height: 96px; border-radius: 50%; background: var(--me); color: #fff; font: 600 46px/1 var(--serif); box-shadow: 0 0 0 5px var(--white), 0 0 0 6px color-mix(in srgb, var(--me) 45%, white); }
    .counts { display: flex; gap: 26px; margin: 16px 0 22px; color: var(--soft); font-size: 12.5px; }
    .counts b { display: block; font: 600 26px/1.1 var(--serif); color: var(--ink); }

    /* a conversation, in the form of the application it comes from; my turns in my color */
    .chat { display: grid; gap: 20px; max-width: 720px; margin: 0 auto; }
    .chat .who { display: block; margin-bottom: 4px; font: 600 10.5px/1 var(--sans); letter-spacing: .1em; text-transform: uppercase; color: var(--soft); }
    .chat .mine { justify-self: end; max-width: 78%; padding: 11px 16px; border-radius: 18px 18px 4px 18px; background: color-mix(in srgb, var(--me) 9%, white); font-size: 15px; }
    .chat .mine .who { color: var(--me); }
    .chat .theirs p { font: 500 19.5px/1.55 var(--serif); }
    .chat .theirs p + p { margin-top: 10px; }
    .chat mark { padding: 1px 3px; border-radius: 3px; background: var(--pale); color: inherit; }
    .chat sup { margin-left: 2px; font: 600 10.5px/1 var(--sans); color: var(--me); }
    .chat pre { margin: 12px 0; padding: 12px 14px; border-radius: 10px; background: var(--night); color: #d7e6ea; font: 400 12.5px/1.6 ui-monospace, 'Cascadia Code', Consolas, monospace; overflow: auto; }
    .chat .made { display: flex; align-items: center; gap: 10px; width: fit-content; margin-top: 12px; padding: 9px 13px; border: 1px solid var(--line); border-radius: 12px; font-size: 13px; }
    .chat .made i { display: grid; place-items: center; width: 30px; height: 30px; border-radius: 8px; background: var(--pale); color: var(--blue); font-style: normal; }
    .chat .made small { display: block; color: var(--soft); font-size: 12px; }
    .chat .turns { display: flex; justify-content: space-between; padding-top: 16px; border-top: 1px solid var(--line); color: var(--blue); font-weight: 500; }

    /* across: what it cites, what cites it, and what I wrote beside it */
    .across { grid-area: across; min-width: 0; }
    .ref { display: block; margin-bottom: 8px; padding: 10px 12px; border: 1px solid var(--line); border-radius: 12px; background: var(--white); }
    .ref .to { display: flex; align-items: center; gap: 7px; font-weight: 600; }
    .ref .to svg { color: var(--soft); }
    .ref .to i { flex: none; width: 9px; height: 9px; border-radius: 50%; background: var(--c, var(--sea)); }
    .ref p { margin-top: 2px; font-size: 12.5px; color: var(--soft); }
    .ref q { display: block; margin-top: 7px; padding: 6px 9px; border-radius: 7px; background: var(--pale); font: italic 500 15.5px/1.35 var(--serif); quotes: '“' '”'; }
    .note { padding: 10px 12px; border: 1px dashed var(--line); border-radius: 12px; font-size: 13px; color: var(--soft); }
    .note b { display: block; margin-bottom: 2px; color: var(--ink); font-weight: 500; }
    .return { display: none; align-items: center; gap: 8px; margin-bottom: 14px; padding: 9px 12px; border-radius: 10px; background: var(--night); color: #fff; font-weight: 500; }
    .return svg { color: var(--sky); }
    [data-at="author"][data-from="book"] .return.to-book, [data-at="author"][data-from="subject"] .return.to-subject { display: flex; }

    /* ---- what each idea colors, at every width ---- */
    [data-layout="both"] .holds { background: var(--pale); }
    [data-layout="both"] .holds a.on { background: var(--white); }
    [data-layout="rail"][data-tone="dark"] .sub { --sub-fg: #fff; --sub-dim: rgba(255, 255, 255, .8); --ctl: rgba(12, 27, 31, .26); --ctl-line: transparent; --ctl-fg: #fff; --on: #fff; --on-fg: var(--night); --lnk: #fff; --melnk: #fff; background: var(--blue); }
    [data-layout="rail"][data-tone="dark"] .fav { background: #fff; }
    [data-layout="rail"][data-tone="light"] { --bar: var(--pale); --bar-on: #fff; --bar-line: #cbe6ee; }
    [data-layout="two"][data-tone="dark"] .sub { --sub-dim: #27505c; --ctl: rgba(255, 255, 255, .62); --ctl-line: transparent; --ctl-fg: var(--ink); --lnk: var(--deep); background: var(--sky); }
    [data-layout="two"][data-tone="light"] .sub { --ctl: #fff; background: var(--pale); }
    [data-layout="side"][data-tone="light"] { --bar: var(--mist); --bar-on: #fff; }
    [data-layout="cards"][data-tone="light"] { --canvas: #e9f2f5; --bar-on: #fff; }
    [data-layout="cards"][data-tone="dark"] { --canvas: var(--night); }
    [data-layout="cards"] body, [data-layout="cards"] .lib, [data-layout="cards"] .me { background: var(--canvas); }
    [data-layout="cards"] :is(.sub, .holds, .thing, .across) { background: var(--white); }
    :is([data-layout="header"], [data-layout="both"], [data-layout="two"], [data-layout="cards"]):is([data-at="subject"], [data-at="book"], [data-at="chat"]) .s.is-claude { box-shadow: inset 0 -2px 0 var(--c); }

    /* ---- at a desk: where each idea puts the bars ---- */
    @media (min-width: 761px) {
        html, body { height: 100%; }
        body { display: grid; overflow: hidden; }
        .thing { padding: 20px 28px 40px; overflow: auto; }
        .holds { padding: 18px 12px; overflow: auto; }
        .across { padding: 18px 16px; overflow: auto; border-left: 1px solid var(--line); }

        /* a bar across the top holds the library, with me at its right end */
        :is([data-layout="header"], [data-layout="both"], [data-layout="two"], [data-layout="cards"]) .lib { padding: 9px 170px 9px 18px; }
        :is([data-layout="header"], [data-layout="both"], [data-layout="two"], [data-layout="cards"]) .logo { margin-right: 12px; }
        :is([data-layout="header"], [data-layout="both"], [data-layout="two"], [data-layout="cards"]) :is(.s small, .me small, .lib .find em) { display: none; }
        :is([data-layout="header"], [data-layout="both"], [data-layout="two"], [data-layout="cards"]) .me { grid-area: lib; justify-self: end; z-index: 1; padding: 0 18px 0 8px; background: none; }
        [data-tone="light"]:is([data-layout="header"], [data-layout="both"], [data-layout="two"]) .lib { border-bottom: 1px solid var(--line); }

        [data-layout="header"] body { grid-template: auto auto auto minmax(0, 1fr) / minmax(0, 1fr) 300px; grid-template-areas: "lib lib" "sub sub" "holds holds" "thing across"; }
        [data-layout="both"] body { grid-template: auto auto minmax(0, 1fr) / 240px minmax(0, 1fr) 300px; grid-template-areas: "lib lib lib" "holds sub sub" "holds thing across"; }
        [data-layout="both"] .holds { padding: 20px 12px; border-right: 1px solid #cbe6ee; }
        [data-layout="two"] body { grid-template: auto auto minmax(0, 1fr) / 236px minmax(0, 1fr) 300px; grid-template-areas: "lib lib lib" "sub sub sub" "holds thing across"; }
        [data-layout="two"] .sub { align-items: center; padding: 9px 24px; }
        [data-layout="two"] .title { display: flex; flex-wrap: wrap; align-items: baseline; gap: 4px 16px; }
        [data-layout="two"] h1 { margin: 0; font-size: 26px; order: -1; }
        [data-layout="two"] .title p { display: none; }
        [data-layout="two"] .holds { border-right: 1px solid var(--line); }
        [data-layout="cards"] body { grid-template: auto auto minmax(0, 1fr) / 244px minmax(0, 1fr) 300px; grid-template-areas: "lib lib lib" "holds sub across" "holds thing across"; column-gap: 12px; padding: 0 12px 12px; }
        [data-layout="cards"] .lib { padding: 11px 170px 11px 6px; }
        [data-layout="cards"] .me { padding: 0 6px; }
        [data-layout="cards"] :is(.holds, .across) { border: 0; border-radius: 16px; }
        [data-layout="cards"] .sub { border-radius: 16px 16px 0 0; }
        [data-layout="cards"] .thing { border-radius: 0 0 16px 16px; }

        /* a bar down the left holds the library, with me at its foot */
        [data-layout="side"] body { grid-template: auto minmax(0, 1fr) / 256px minmax(0, 1fr) 300px; grid-template-areas: "side sub sub" "side thing across"; }
        [data-layout="side"] .side { grid-area: side; display: flex; flex-direction: column; min-height: 0; background: var(--bar); }
        [data-layout="side"] .holds { flex: 1; order: 1; }
        [data-layout="side"] .me { order: 2; }
        [data-layout="side"] .lib { flex-direction: column; align-items: stretch; gap: 2px; padding: 18px 12px 12px; }
        [data-layout="side"] .logo { padding: 0 6px 14px; }
        [data-layout="side"] .subjects { flex-direction: column; }
        [data-layout="side"] .s small { margin-left: auto; }
        [data-layout="side"] .lib .find { margin: 10px 0 0; }
        [data-layout="side"] .holds { padding: 14px 12px; border-top: 1px solid var(--bar-line); background: var(--bar); color: var(--bar-fg); }
        [data-layout="side"] .holds h4, [data-layout="side"] .holds a small { color: var(--bar-dim); }
        [data-layout="side"] .holds a.on { background: var(--bar-on); }
        [data-layout="side"] .me { padding: 12px 18px 14px; border-top: 1px solid var(--bar-line); }
        [data-layout="side"][data-tone="light"] .side { border-right: 1px solid var(--line); }

        /* a narrow rail holds the subjects as marks and me as a face */
        [data-layout="rail"] body { grid-template: auto auto minmax(0, 1fr) auto / 68px minmax(0, 1fr) 300px; grid-template-areas: "lib sub sub" "lib holds holds" "lib thing across" "me thing across"; }
        [data-layout="rail"] .lib { flex-direction: column; gap: 12px; padding: 14px 0; }
        [data-layout="rail"] :is(.logo b, .lib .find, .s b, .s small, .me span) { display: none; }
        [data-layout="rail"] .subjects { flex-direction: column; align-items: center; gap: 10px; }
        [data-layout="rail"] .s { padding: 0; background: none; }
        [data-layout="rail"] :is(.s i, .logo i, .me i) { width: 40px; height: 40px; border-radius: 11px; font-size: 13px; }
        [data-layout="rail"] .logo i, [data-layout="rail"] .me i { font-size: 16px; }
        [data-layout="rail"] .me i { border-radius: 50%; }
        [data-layout="rail"]:is([data-at="subject"], [data-at="book"], [data-at="chat"]) .s.is-claude i { box-shadow: 0 0 0 2px var(--bar), 0 0 0 4px var(--c); }
        [data-layout="rail"] .me { justify-content: center; padding: 10px 0 14px; }
        [data-layout="rail"] .sub { padding: 16px 26px 14px; }
        [data-layout="rail"][data-tone="light"] :is(.lib, .me) { border-right: 1px solid #cbe6ee; }

        /* with no side bar, what the page holds is a row under its name */
        :is([data-layout="header"], [data-layout="rail"]) .holds { padding: 12px 28px; overflow: auto hidden; border-bottom: 1px solid var(--line); scrollbar-width: none; }
        [data-layout="header"] .holds { padding-top: 0; }
        :is([data-layout="header"], [data-layout="rail"]) .holds > div { display: flex; align-items: center; gap: 6px; }
        :is([data-layout="header"], [data-layout="rail"]) .holds h4 { flex: none; margin: 0 6px 0 0; }
        :is([data-layout="header"], [data-layout="rail"]) .holds h4.next { margin-left: 18px; }
        :is([data-layout="header"], [data-layout="rail"]) .holds h4 small { display: none; }
        :is([data-layout="header"], [data-layout="rail"]) .holds a { flex: none; padding: 5px 11px 5px 9px; border: 1px solid var(--line); border-radius: 99px; white-space: nowrap; }
        :is([data-layout="header"], [data-layout="rail"]) .holds a small { margin-left: 4px; }
        :is([data-layout="header"], [data-layout="rail"]) .holds a.on { border-color: transparent; }
    }

    /* ---- on a phone: one bar at the top, the page beneath it in one column ---- */
    @media (max-width: 760px) {
        body { position: relative; display: flex; flex-direction: column; }
        .sub { order: 1; }
        .holds { order: 2; }
        .thing { order: 3; }
        .across { order: 4; }
        .lib { position: sticky; top: 0; z-index: 4; height: 50px; margin-right: 54px; padding: 0 8px 0 14px; gap: 4px; overflow: auto hidden; scrollbar-width: none; }
        .logo { margin-right: 8px; }
        .logo b { font-size: 19px; }
        .s { white-space: nowrap; }
        .s small, .lib .find, .me span { display: none; }
        .me { position: fixed; z-index: 5; top: 0; right: 0; justify-content: center; width: 54px; height: 50px; }
        [data-tone="light"] :is(.lib, .me) { border-bottom: 1px solid var(--line); }
        .sub { flex-direction: column; flex-wrap: nowrap; align-items: stretch; padding: 16px 16px 12px; }
        h1 { font-size: 28px; white-space: normal; }
        .chain { overflow: auto hidden; scrollbar-width: none; }
        .tools { margin: 0; }
        .tools > div { justify-content: flex-start; }
        .holds { padding: 10px 16px 12px; overflow: auto hidden; border-bottom: 1px solid var(--line); scrollbar-width: none; }
        .holds > div { display: flex; align-items: center; gap: 6px; }
        .holds h4 { flex: none; margin: 0 6px 0 0; }
        .holds h4.next { margin-left: 18px; }
        .holds h4 small { display: none; }
        .holds a { flex: none; padding: 5px 11px 5px 9px; border: 1px solid var(--line); border-radius: 99px; background: var(--white); white-space: nowrap; }
        .holds a small { margin-left: 4px; }
        .thing { padding: 16px 16px 24px; }
        .go { flex-wrap: wrap; gap: 14px; padding: 14px; }
        .go > div { flex: 1 1 60%; min-width: 0; }
        .go .read { margin: 0; }
        .shelf { grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 16px 12px; }
        .cover { padding: 10px 8px 8px 13px; }
        .cover b { font-size: 14.5px; }
        .open, .person { flex-direction: column; gap: 16px; }
        .cover.big { width: 150px; }
        .cover.big b { font-size: 22px; }
        .counts { gap: 18px; }
        .chat .mine { max-width: 88%; }
        .across { padding: 16px; border-top: 1px solid var(--line); }

        /* a side bar or a rail turns to lie along the foot, the subjects as marks */
        :is([data-layout="side"], [data-layout="rail"]) body { padding-bottom: 60px; }
        :is([data-layout="side"], [data-layout="rail"]) .subjects { position: fixed; z-index: 4; left: 0; right: 0; bottom: 0; justify-content: space-around; padding: 8px 10px; border-top: 1px solid var(--bar-line); background: var(--bar); }
        :is([data-layout="side"], [data-layout="rail"]) .s { padding: 0; background: none; box-shadow: none; }
        :is([data-layout="side"], [data-layout="rail"]) .s b { display: none; }
        :is([data-layout="side"], [data-layout="rail"]) .s i { width: 42px; height: 42px; border-radius: 12px; font-size: 13px; }
        :is([data-layout="side"], [data-layout="rail"]):is([data-at="subject"], [data-at="book"], [data-at="chat"]) .s.is-claude i { box-shadow: 0 0 0 2px var(--bar), 0 0 0 4px var(--c); }

        [data-layout="two"] .sub { padding: 12px 16px; }
        [data-layout="two"] .title p { display: none; }
        [data-layout="cards"] body { padding-bottom: 10px; }
        [data-layout="cards"] :is(.sub, .holds, .thing, .across) { margin: 0 10px; }
        [data-layout="cards"] .sub { margin-top: 4px; border-radius: 14px 14px 0 0; }
        [data-layout="cards"] .thing { border-radius: 0 0 14px 14px; }
        [data-layout="cards"] .across { margin-top: 10px; border: 0; border-radius: 14px; }
    }
</style>
</head>
<body>

<div class="side">
<header class="lib">
    <a class="logo" data-go="library"><i>D</i><b>Dougs Library</b></a>
    <nav class="subjects">
        <a class="s is-claude" data-go="subject" style="--c: var(--sea)"><i>Cl</i><b>Conversations with Claude</b><small>212</small></a>
        <a class="s" style="--c: #1f8a78"><i>Ch</i><b>Conversations with ChatGPT</b><small>147</small></a>
        <a class="s" style="--c: #c24a78"><i>De</i><b>Dougs Design</b><small>5</small></a>
        <a class="s" style="--c: #7a4a8c"><i>Rm</i><b>Dougs Reference Manual</b><small>3</small></a>
    </nav>
    <span class="find"><svg viewBox="0 0 16 16"><circle cx="7" cy="7" r="4.5"/><path d="M10.5 10.5 14 14"/></svg><em style="font-style: normal">Find in the library</em></span>
</header>

<a class="me" data-go="author"><i>D</i><span><b>The Librarian</b><small>my own account</small></span></a>

<aside class="holds">
    <div class="at-library">
        <h4>My favorites<small>3</small></h4>
        <a data-go="book" style="--c: #e07a35"><i></i><b>Lorem Ipsum Dolor</b><small class="star">★</small></a>
        <a style="--c: #4450b8"><i></i><b>Magna Aliqua</b><small class="star">★</small></a>
        <a style="--c: #c24a78"><i></i><b>The Library's Home</b><small class="star">★</small></a>
    </div>
    <div class="at-subject">
        <h4>Holds<small>3 projects</small></h4>
        <a class="on" style="--c: #e07a35"><i></i><b>A First Project</b><small>38</small></a>
        <a style="--c: #1f8a78"><i></i><b>A Second Project</b><small>91</small></a>
        <a style="--c: #4450b8"><i></i><b>A Third Project</b><small>83</small></a>
        <h4 class="next">My favorites here<small>2</small></h4>
        <a data-go="book" style="--c: #e07a35"><i></i><b>Lorem Ipsum Dolor</b><small class="star">★</small></a>
        <a style="--c: #4450b8"><i></i><b>Magna Aliqua</b><small class="star">★</small></a>
    </div>
    <div class="at-book at-chat">
        <h4>Holds<small>8 chapters</small></h4>
        <a class="first" data-go="chat" style="--c: #e07a35"><i></i><b>A First Chapter</b><small>1</small></a>
        <a style="--c: #e07a35"><i></i><b>A Second Chapter</b><small>2</small></a>
        <a style="--c: #e07a35"><i></i><b>A Third Chapter</b><small>3</small></a>
        <a style="--c: #e07a35"><i></i><b>A Fourth Chapter</b><small>4</small></a>
        <a style="--c: #e07a35"><i></i><b>A Fifth Chapter</b><small>5</small></a>
    </div>
    <div class="at-author">
        <h4>My books<small>3</small></h4>
        <a class="on" style="--c: var(--me)"><i></i><b>Dougs Story</b><small>3</small></a>
        <a style="--c: #c24a78"><i></i><b>Dougs Design</b><small>5</small></a>
        <a style="--c: #7a4a8c"><i></i><b>Dougs Reference Manual</b><small>3</small></a>
    </div>
</aside>
</div>

<section class="sub">
    <div class="title">
        <div class="chain">
            <em>Filed under</em>
            <span class="at-library">itself</span>
            <span class="at-subject"><a data-go="library">Dougs Library</a></span>
            <span class="at-book"><a data-go="subject">Conversations with Claude</a><i>›</i><a data-go="subject">A First Project</a></span>
            <span class="at-chat"><a data-go="subject">Conversations with Claude</a><i>›</i><a data-go="subject">A First Project</a><i>›</i><a data-go="book">Lorem Ipsum Dolor</a></span>
            <span class="at-author"><a data-go="library">Dougs Library</a></span>
        </div>
        <h1 class="at-library">Dougs Library</h1>
        <h1 class="at-subject">Conversations with Claude</h1>
        <h1 class="at-book">Lorem Ipsum Dolor</h1>
        <h1 class="at-chat">A First Chapter</h1>
        <h1 class="at-author">Dougs Story</h1>
        <p class="at-library">by <a class="to-me" data-go="author">The Librarian</a> · three books and two subjects · 359 conversations kept</p>
        <p class="at-subject">a subject · 212 books in three projects · by <a class="to-me" data-go="author">The Librarian</a></p>
        <p class="at-book">by <a class="to-me" data-go="author">The Librarian</a> and Claude · 8 chapters · kept 9 Sep 2026</p>
        <p class="at-chat">chapter 1 of 8 · <a class="to-me" data-go="author">The Librarian</a> and Claude · kept 9 Sep 2026</p>
        <p class="at-author">The Librarian · my own account</p>
    </div>
    <div class="tools">
        <div class="at-subject">
            <span class="seg"><span class="on" data-view-is="shelf">Shelf</span><span data-view-is="list">List</span><span>Table</span></span>
            <span class="find"><svg viewBox="0 0 16 16"><circle cx="7" cy="7" r="4.5"/><path d="M10.5 10.5 14 14"/></svg>Find in this subject</span>
        </div>
        <div class="at-book">
            <span class="fav"><em class="star">★</em>Among my favorites</span>
            <span class="find"><svg viewBox="0 0 16 16"><circle cx="7" cy="7" r="4.5"/><path d="M10.5 10.5 14 14"/></svg>Find in this book</span>
        </div>
        <div class="at-chat">
            <span class="find"><svg viewBox="0 0 16 16"><path d="M8 3v10M3 8h10"/></svg>Note on a passage</span>
            <span class="find"><svg viewBox="0 0 16 16"><circle cx="7" cy="7" r="4.5"/><path d="M10.5 10.5 14 14"/></svg>Find in this book</span>
        </div>
    </div>
</section>

<main class="thing">
    <div class="at-library">
        <h4>Subjects</h4>
        <div class="tiles">
            <a class="tile" data-go="subject" style="--t: #dff3fa; --c: var(--sea)"><i></i><b>Conversations with Claude</b><small>212 books in three projects</small></a>
            <a class="tile" style="--t: #dcf5ee; --c: #1f8a78"><i></i><b>Conversations with ChatGPT</b><small>147 books</small></a>
        </div>
        <h4>My books</h4>
        <div class="mines">
            <a class="cover mine" data-go="author"><b>Dougs Story</b><small>my own account</small></a>
            <a class="cover mine"><b>Dougs Design</b><small>the design</small></a>
            <a class="cover mine"><b>Dougs Reference Manual</b><small>the parts</small></a>
        </div>
    </div>

    <div class="at-subject">
        <div class="go">
            <span class="cover"><b>Lorem Ipsum Dolor</b><small>with Claude</small></span>
            <div>
                <em>Continue</em>
                <h2>Lorem Ipsum Dolor</h2>
                <p>A First Project · kept 9 September 2026. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                <u><i></i></u>
                <small>Chapter 1 of 8 · 2 notes of mine · cited twice</small>
            </div>
            <a class="read" data-go="chat">Read</a>
        </div>
        <h4>Lately kept<small>212 books · newest first</small></h4>
        <div class="shelf">
            <a class="bk" data-go="book"><span class="cover"><b>Lorem Ipsum Dolor</b><small>with Claude</small></span><b class="name">Lorem Ipsum Dolor</b><p>9 Sep · 8 chapters <em class="star">★</em></p></a>
            <a class="bk"><span class="cover"><b>Quis Nostrud</b><small>with Claude</small></span><b class="name">Quis Nostrud</b><p>1 Oct · 6 chapters</p></a>
            <a class="bk"><span class="cover"><b>Magna Aliqua</b><small>with Claude</small></span><b class="name">Magna Aliqua</b><p>20 Sep · 11 chapters <em class="star">★</em></p></a>
            <a class="bk"><span class="cover"><b>Tempor Incididunt</b><small>with Claude</small></span><b class="name">Tempor Incididunt</b><p>12 Sep · 7 chapters</p></a>
            <a class="bk"><span class="cover"><b>Ut Enim ad Minim</b><small>with Claude</small></span><b class="name">Ut Enim ad Minim</b><p>27 Sep · 3 chapters</p></a>
            <a class="bk"><span class="cover"><b>Sed Do Eiusmod</b><small>with Claude</small></span><b class="name">Sed Do Eiusmod</b><p>5 Sep · 2 chapters</p></a>
            <a class="bk"><span class="cover"><b>Adipiscing Elit</b><small>with Claude</small></span><b class="name">Adipiscing Elit</b><p>2 Sep · 9 chapters</p></a>
            <a class="bk"><span class="cover"><b>Sit Amet Consectetur</b><small>with Claude</small></span><b class="name">Sit Amet Consectetur</b><p>21 Jul · 14 chapters</p></a>
            <a class="bk"><span class="cover"><b>Duis Aute Irure</b><small>with Claude</small></span><b class="name">Duis Aute Irure</b><p>14 Jul · 5 chapters</p></a>
            <a class="bk"><span class="cover"><b>Excepteur Sint</b><small>with Claude</small></span><b class="name">Excepteur Sint</b><p>2 Jul · 4 chapters</p></a>
        </div>
    </div>

    <div class="open at-book">
        <span class="cover big"><b>Lorem Ipsum Dolor</b><small>with Claude</small></span>
        <div class="words">
            <p class="says">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
            <a class="read" data-go="chat">Read from A First Chapter<svg viewBox="0 0 16 16"><path d="M3 8h10M9 4l4 4-4 4"/></svg></a>
        </div>
    </div>

    <div class="chat at-chat">
        <div class="mine"><span class="who">The Librarian</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit? Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
        <div class="theirs">
            <span class="who">Claude</span>
            <p>Ut enim ad minim veniam, quis nostrud exercitation. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <mark>Excepteur sint occaecat cupidatat non proident</mark><sup>1</sup>, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
<pre>const lorem = ipsum.dolor('sit amet');
return lorem.consectetur();</pre>
            <a class="made"><i>◇</i><span><b>Lorem Ipsum, a first draft</b><small>made in this turn · opens beside the page</small></span></a>
        </div>
        <div class="mine"><span class="who">The Librarian</span>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit?</div>
        <div class="theirs">
            <span class="who">Claude</span>
            <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.</p>
        </div>
        <div class="turns"><span></span><a>A Second Chapter →</a></div>
    </div>

    <div class="person at-author">
        <span class="face">D</span>
        <div class="words">
            <p class="says">My own account, and the one book here that is by its own subject. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            <div class="counts"><span><b>3</b>books written</span><span><b>359</b>conversations kept</span><span><b>41</b>notes</span></div>
            <div class="mines">
                <a class="cover mine"><b>Dougs Story</b><small>my own account</small></a>
                <a class="cover mine"><b>Dougs Design</b><small>the design</small></a>
                <a class="cover mine"><b>Dougs Reference Manual</b><small>the parts</small></a>
            </div>
        </div>
    </div>
</main>

<aside class="across">
    <a class="return to-book" data-go="book"><svg viewBox="0 0 16 16"><path d="M13 8H3M7 4 3 8l4 4"/></svg>Back to Lorem Ipsum Dolor</a>
    <a class="return to-subject" data-go="subject"><svg viewBox="0 0 16 16"><path d="M13 8H3M7 4 3 8l4 4"/></svg>Back to Conversations with Claude</a>

    <div class="at-library">
        <h4>Lately kept</h4>
        <a class="ref" style="--c: #c2413f"><span class="to"><i></i>Quis Nostrud</span><p>1 Oct · Conversations with Claude</p></a>
        <a class="ref" style="--c: #7a4a8c"><span class="to"><i></i>Ut Enim ad Minim</span><p>27 Sep · Conversations with Claude</p></a>
        <h4 class="next">My notes<small>41</small></h4>
        <div class="note"><b>3 Oct 2026 · in Lorem Ipsum Dolor</b>Lorem ipsum, a note of mine beside the passage it is about.</div>
    </div>

    <div class="at-subject">
        <h4>Cited from outside<small>2</small></h4>
        <a class="ref" data-go="author" data-from="subject" style="--c: var(--me)"><span class="to"><svg viewBox="0 0 16 16"><path d="M13 8H3M7 4 3 8l4 4"/></svg><i></i>Dougs Story</span><p>chapter 1 cites Lorem Ipsum Dolor</p></a>
        <a class="ref" style="--c: #1f8a78"><span class="to"><svg viewBox="0 0 16 16"><path d="M13 8H3M7 4 3 8l4 4"/></svg><i></i>Conversations with ChatGPT</span><p>one book cites Adipiscing Elit</p></a>
        <h4 class="next">My notes here<small>12</small></h4>
        <div class="note"><b>3 Oct 2026 · in Lorem Ipsum Dolor</b>Lorem ipsum, a note of mine beside the passage it is about.</div>
    </div>

    <div class="at-book at-chat">
        <h4>Cites<small>1</small></h4>
        <a class="ref" style="--c: #3d7a4e"><span class="to"><svg viewBox="0 0 16 16"><path d="M3 8h10M9 4l4 4-4 4"/></svg><i></i>Adipiscing Elit</span><p>chapter 2 · A First Project</p></a>
        <h4 class="next">Cited by<small>2</small></h4>
        <a class="ref" data-go="author" data-from="book" style="--c: var(--me)"><span class="to"><svg viewBox="0 0 16 16"><path d="M13 8H3M7 4 3 8l4 4"/></svg><i></i>Dougs Story</span><p>chapter 1 · my own account</p><q>Excepteur sint occaecat cupidatat non proident</q></a>
        <a class="ref" style="--c: #c24a78"><span class="to"><svg viewBox="0 0 16 16"><path d="M13 8H3M7 4 3 8l4 4"/></svg><i></i>Sit Amet Consectetur</span><p>chapter 3 · A First Project</p></a>
        <h4 class="next">My notes<small>1</small></h4>
        <div class="note"><b>1 · 3 Oct 2026</b>Lorem ipsum, a note of mine beside the passage it is about.</div>
    </div>

    <div class="at-author">
        <h4>Cites<small>1</small></h4>
        <a class="ref" data-go="book" style="--c: #e07a35"><span class="to"><svg viewBox="0 0 16 16"><path d="M3 8h10M9 4l4 4-4 4"/></svg><i></i>Lorem Ipsum Dolor</span><p>chapter 1 · a conversation with Claude</p><q>Excepteur sint occaecat cupidatat non proident</q></a>
        <h4 class="next">Cited by<small>0</small></h4>
        <div class="note">Nothing cites this chapter yet.</div>
    </div>
</aside>

<script>
    const page = document.documentElement;
    for (const door of document.querySelectorAll('[data-go]'))
        door.addEventListener('click', () => {
            if (door.dataset.from) page.dataset.from = door.dataset.from;
            else delete page.dataset.from;
            page.dataset.at = door.dataset.go;
            window.scrollTo(0, 0);
            for (const column of document.querySelectorAll('.thing, .holds, .across')) column.scrollTop = 0;
        });
    for (const view of document.querySelectorAll('[data-view-is]'))
        view.addEventListener('click', () => {
            page.dataset.view = view.dataset.viewIs;
            for (const other of view.parentElement.children) other.classList.toggle('on', other === view);
        });
<\/script>
</body>
</html>
`})]})]}),a.jsxs(i,{children:[a.jsx(d,{children:"23"}),a.jsx(o,{children:"[A Conversation, in the Black Side Bar](/dougs-design/#a-conversation-in-the-black-side-bar)"}),a.jsx(t,{children:"Concept 23, an idea, after the application the conversations come from."}),a.jsx(t,{children:"The black side bar with a conversation open: its chapters down the bar as that application lists its chats, the turns in that application's own form, my turns in my color, and my notes and what cites the chapter beside it."}),a.jsxs(t,{children:[a.jsx(p,{}),a.jsx(r,{children:"/.design/3-every-concept~023-desk.png"}),a.jsx(r,{children:"/.design/3-every-concept~023-phone.png"})]}),a.jsxs(t,{children:[a.jsx(m,{}),"Yes, 23, though we might vary the color scheme based on project, but start assuming the dark sidebar. That theme looks nice."]}),a.jsxs(t,{children:[a.jsx(c,{}),a.jsx(n,{children:`<!doctype html>
<html lang="en" data-layout="side" data-tone="dark" data-at="chat" data-view="shelf">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>A Conversation, in the Black Side Bar</title>
<meta name="number" content="23">
<meta name="state" content="idea">
<meta name="after" content="the application the conversations come from">
<meta name="idea" content="The black side bar with a conversation open: its chapters down the bar as that application lists its chats, the turns in that application's own form, my turns in my color, and my notes and what cites the chapter beside it.">
<meta name="said" content="Yes, 23, though we might vary the color scheme based on project, but start assuming the dark sidebar. That theme looks nice.">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
<style>
    /* ---- what does not change between the ideas ----
       The frame is soft black, the blue between it and white, and white. The soft black #0c1b1f and the opal #c8f4fb are the
       coming-soon page's own; the blues are the hue between them (208 to 223 in OKLCH) walked from dark to light.
       The CONTENT keeps its own colors: every book a cover of its own, the light accents the opal's wave. */
    :root { --night: #0c1b1f; --deep: #14323c; --blue: #166178; --sea: #4e9eb9; --sky: #8fc8dc; --opal: #c8f4fb; --pale: #e3f5fa; --mist: #f1f7f9; --white: #ffffff;
        --ink: #10252c; --soft: #516770; --line: #dbe7ec; --me: #e8590c;
        --wash: linear-gradient(105deg, #e2f6fb 0%, #ecf0fd 52%, #fae9f4 100%);
        --serif: 'Cormorant Garamond', Georgia, serif; --sans: 'Inter', system-ui, sans-serif; }
    [data-tone="dark"] { --bar: var(--night); --bar-fg: #ffffff; --bar-dim: #a9bcc1; --bar-on: rgba(255, 255, 255, .11); --bar-line: #1d3339; --mark: var(--opal); --mark-fg: var(--night); }
    [data-tone="light"] { --bar: var(--white); --bar-fg: var(--ink); --bar-dim: var(--soft); --bar-on: var(--pale); --bar-line: var(--line); --mark: var(--night); --mark-fg: #ffffff; }
    [data-at="library"] [class*="at-"]:not(.at-library), [data-at="subject"] [class*="at-"]:not(.at-subject), [data-at="book"] [class*="at-"]:not(.at-book), [data-at="chat"] [class*="at-"]:not(.at-chat), [data-at="author"] [class*="at-"]:not(.at-author) { display: none !important; }

    * { box-sizing: border-box; margin: 0; }
    body { background: var(--white); color: var(--ink); font: 400 14px/1.5 var(--sans); }
    a { color: inherit; text-decoration: none; }
    svg { width: 15px; height: 15px; stroke: currentColor; fill: none; stroke-width: 1.7; stroke-linecap: round; stroke-linejoin: round; flex: none; }
    [data-go], [data-view-is] { cursor: pointer; }
    h4 { display: flex; align-items: center; gap: 8px; margin-bottom: 10px; font: 600 10.5px/1 var(--sans); letter-spacing: .12em; text-transform: uppercase; color: var(--soft); }
    h4 small { margin-left: auto; font: 400 11.5px/1 var(--sans); letter-spacing: 0; text-transform: none; }
    h4.next { margin-top: 22px; }
    .star { color: var(--me); font-style: normal; }

    /* the library's own things: its mark, its subjects, a way to find, and me. They are held together only where an idea has a side bar. */
    .side { display: contents; }
    [data-at="chat"] .holds a.first { background: var(--bar-on, var(--pale)); }
    .lib { grid-area: lib; display: flex; align-items: center; gap: 6px; min-width: 0; background: var(--bar); color: var(--bar-fg); }
    .logo { display: flex; align-items: center; gap: 10px; flex: none; }
    .logo i { display: grid; place-items: center; width: 30px; height: 30px; border-radius: 8px; background: var(--mark); color: var(--mark-fg); font: 600 15px/1 var(--sans); font-style: normal; }
    .logo b { font: 600 21px/1 var(--serif); white-space: nowrap; }
    .subjects { display: flex; gap: 2px; min-width: 0; }
    .s { display: flex; align-items: center; gap: 8px; padding: 7px 10px; border-radius: 8px; color: var(--bar-dim); font-size: 13.5px; }
    .s i { display: grid; place-items: center; flex: none; width: 9px; height: 9px; border-radius: 50%; background: var(--c); color: #fff; font: 600 0/1 var(--sans); font-style: normal; }
    .s b { font-weight: 500; }
    .s small { font-size: 12px; opacity: .7; }
    :is([data-at="subject"], [data-at="book"], [data-at="chat"]) .s.is-claude { background: var(--bar-on); color: var(--bar-fg); }
    .find { display: flex; align-items: center; gap: 8px; padding: 6px 11px; border-radius: 9px; white-space: nowrap; }
    .lib .find { margin-left: auto; background: var(--bar-on); color: var(--bar-dim); }
    .me { grid-area: me; display: flex; align-items: center; gap: 9px; background: var(--bar); color: var(--bar-fg); }
    .me i { display: grid; place-items: center; flex: none; width: 32px; height: 32px; border-radius: 50%; background: var(--me); color: #fff; font: 600 14px/1 var(--sans); font-style: normal; }
    .me b { display: block; font-weight: 500; line-height: 1.2; white-space: nowrap; }
    .me small { display: block; font-size: 11.5px; opacity: .7; white-space: nowrap; }

    /* the open page's own things: what it is filed under, its name, who it is by, its tools */
    .sub { --sub-fg: var(--ink); --sub-dim: var(--soft); --ctl: var(--mist); --ctl-line: var(--line); --ctl-fg: var(--soft); --on: var(--night); --on-fg: #fff; --lnk: var(--blue); --melnk: var(--me);
        grid-area: sub; display: flex; flex-wrap: wrap; align-items: flex-end; gap: 10px 20px; min-width: 0; padding: 20px 28px 14px; color: var(--sub-fg); }
    .chain { display: flex; align-items: center; gap: 7px; font-size: 12.5px; color: var(--sub-dim); white-space: nowrap; }
    .chain em { font: 600 9.5px/1 var(--sans); font-style: normal; letter-spacing: .12em; text-transform: uppercase; }
    .chain span { display: flex; align-items: center; gap: 7px; }
    .chain i { font-style: normal; opacity: .55; }
    .chain a { font-weight: 500; color: var(--lnk); }
    .title { min-width: 0; }
    h1 { margin-top: 4px; font: 600 36px/1.04 var(--serif); white-space: nowrap; }
    .title p { margin-top: 4px; font-size: 13px; color: var(--sub-dim); }
    .title p a { color: var(--lnk); font-weight: 500; }
    .title p a.to-me { color: var(--melnk); text-decoration: underline; text-decoration-color: var(--me); text-decoration-thickness: 2px; text-underline-offset: 3px; }
    .tools { margin-left: auto; }
    .tools > div { display: flex; flex-wrap: wrap; justify-content: flex-end; align-items: center; gap: 8px; }
    .seg { display: flex; overflow: hidden; border: 1px solid var(--ctl-line); border-radius: 9px; background: var(--ctl); }
    .seg span { padding: 6px 12px; color: var(--ctl-fg); }
    .seg span.on { background: var(--on); color: var(--on-fg); font-weight: 500; }
    .sub .find { border: 1px solid var(--ctl-line); background: var(--ctl); color: var(--ctl-fg); }
    .fav { display: flex; align-items: center; gap: 6px; padding: 6px 11px; border-radius: 9px; background: color-mix(in srgb, var(--me) 12%, white); color: #a8400a; font-weight: 500; white-space: nowrap; }

    /* down: what the open page holds */
    .holds { grid-area: holds; min-width: 0; }
    .holds a { display: flex; align-items: center; gap: 9px; padding: 6px 9px; border-radius: 8px; }
    .holds a i { flex: none; width: 9px; height: 9px; border-radius: 50%; background: var(--c, var(--sea)); }
    .holds a b { font-weight: 500; }
    .holds a small { margin-left: auto; font-size: 12px; color: var(--soft); }
    .holds a.on { background: var(--pale); }

    /* the page itself */
    .thing { grid-area: thing; min-width: 0; }
    .go { display: flex; align-items: center; gap: 20px; margin-bottom: 22px; padding: 16px 20px; border-radius: 16px; background: var(--wash); }
    .go .cover { flex: none; width: 92px; padding: 10px 8px 8px 13px; }
    .go .cover b { font-size: 13.5px; }
    .go .cover small { font-size: 7.5px; padding-top: 6px; }
    .go em { font: 600 10.5px/1 var(--sans); font-style: normal; letter-spacing: .1em; text-transform: uppercase; color: var(--me); }
    .go h2 { margin: 4px 0 2px; font: 600 24px/1.1 var(--serif); }
    .go p { max-width: 52ch; font-size: 13px; color: var(--soft); }
    .go u { display: block; width: 260px; max-width: 100%; height: 4px; margin: 10px 0 6px; border-radius: 9px; background: rgba(12, 27, 31, .1); text-decoration: none; }
    .go u i { display: block; width: 14%; height: 100%; border-radius: 9px; background: var(--me); }
    .go small { font-size: 12px; color: var(--soft); }
    .go .read { margin-left: auto; }
    .read { display: inline-flex; align-items: center; gap: 8px; padding: 9px 18px; border-radius: 99px; background: var(--night); color: #fff; font-weight: 500; white-space: nowrap; }

    /* a cover is the landmark of a book, and every book has a color of its own; my own books are the soft black */
    .cover { position: relative; display: flex; flex-direction: column; aspect-ratio: 3 / 4; padding: 13px 11px 10px 17px; border-radius: 3px 7px 7px 3px; color: #fff; background: linear-gradient(160deg, color-mix(in srgb, var(--c) 90%, white), color-mix(in srgb, var(--c) 86%, black)); box-shadow: 0 12px 22px -14px rgba(12, 27, 31, .55); }
    .cover::before { content: ''; position: absolute; left: 7px; top: 0; bottom: 0; width: 1px; background: rgba(255, 255, 255, .3); }
    .cover b { font: 600 17px/1.08 var(--serif); }
    .cover small { margin-top: auto; padding-top: 8px; border-top: 1px solid rgba(255, 255, 255, .32); font: 600 9px/1.2 var(--sans); letter-spacing: .1em; text-transform: uppercase; opacity: .92; }
    .cover.mine { --c: var(--night); color: var(--opal); background: linear-gradient(160deg, #16303a, var(--night)); }
    .bk:nth-child(8n+1), .open, .go { --c: #e07a35; }
    .bk:nth-child(8n+2) { --c: #c2413f; }
    .bk:nth-child(8n+3) { --c: #4450b8; }
    .bk:nth-child(8n+4) { --c: #1f8a78; }
    .bk:nth-child(8n+5) { --c: #7a4a8c; }
    .bk:nth-child(8n+6) { --c: #2f7fb0; }
    .bk:nth-child(8n+7) { --c: #3d7a4e; }
    .bk:nth-child(8n) { --c: #c24a78; }
    .shelf { display: grid; grid-template-columns: repeat(auto-fill, minmax(124px, 1fr)); gap: 22px 18px; }
    .bk { display: block; }
    .bk .name { display: none; }
    .bk p { display: flex; gap: 6px; margin-top: 8px; font-size: 12px; color: var(--soft); }
    [data-view="list"] .shelf { grid-template-columns: minmax(0, 1fr); gap: 0; }
    [data-view="list"] .bk { display: grid; grid-template-columns: 30px minmax(0, 1fr) auto; gap: 14px; align-items: center; padding: 9px 0; border-bottom: 1px solid var(--line); }
    [data-view="list"] .bk .cover { padding: 0; border-radius: 2px 4px 4px 2px; box-shadow: none; }
    [data-view="list"] .bk .cover::before { left: 4px; }
    [data-view="list"] .bk .cover b, [data-view="list"] .bk .cover small { display: none; }
    [data-view="list"] .bk .name { display: block; font: 600 19px/1.2 var(--serif); }
    [data-view="list"] .bk p { margin: 0; }
    .mines { display: grid; grid-template-columns: repeat(auto-fill, minmax(124px, 148px)); gap: 18px; }

    .tiles { display: grid; grid-template-columns: repeat(auto-fill, minmax(210px, 1fr)); gap: 14px; margin-bottom: 26px; }
    .tile { display: block; padding: 14px 16px 16px; border-radius: 14px; background: var(--t); }
    .tile i { display: block; width: 26px; height: 26px; margin-bottom: 24px; border-radius: 8px; background: var(--c); }
    .tile b { display: block; font: 600 21px/1.1 var(--serif); }
    .tile small { font-size: 12.5px; color: var(--soft); }

    .open, .person { display: flex; gap: 26px; align-items: flex-start; }
    .cover.big { flex: none; width: 180px; padding: 20px 15px 13px 24px; }
    .cover.big b { font-size: 26px; }
    .cover.big::before { left: 11px; }
    .words { min-width: 0; }
    .says { max-width: 56ch; font: 500 20px/1.5 var(--serif); }
    .words .read { margin-top: 18px; }
    .face { display: grid; place-items: center; flex: none; width: 96px; height: 96px; border-radius: 50%; background: var(--me); color: #fff; font: 600 46px/1 var(--serif); box-shadow: 0 0 0 5px var(--white), 0 0 0 6px color-mix(in srgb, var(--me) 45%, white); }
    .counts { display: flex; gap: 26px; margin: 16px 0 22px; color: var(--soft); font-size: 12.5px; }
    .counts b { display: block; font: 600 26px/1.1 var(--serif); color: var(--ink); }

    /* a conversation, in the form of the application it comes from; my turns in my color */
    .chat { display: grid; gap: 20px; max-width: 720px; margin: 0 auto; }
    .chat .who { display: block; margin-bottom: 4px; font: 600 10.5px/1 var(--sans); letter-spacing: .1em; text-transform: uppercase; color: var(--soft); }
    .chat .mine { justify-self: end; max-width: 78%; padding: 11px 16px; border-radius: 18px 18px 4px 18px; background: color-mix(in srgb, var(--me) 9%, white); font-size: 15px; }
    .chat .mine .who { color: var(--me); }
    .chat .theirs p { font: 500 19.5px/1.55 var(--serif); }
    .chat .theirs p + p { margin-top: 10px; }
    .chat mark { padding: 1px 3px; border-radius: 3px; background: var(--pale); color: inherit; }
    .chat sup { margin-left: 2px; font: 600 10.5px/1 var(--sans); color: var(--me); }
    .chat pre { margin: 12px 0; padding: 12px 14px; border-radius: 10px; background: var(--night); color: #d7e6ea; font: 400 12.5px/1.6 ui-monospace, 'Cascadia Code', Consolas, monospace; overflow: auto; }
    .chat .made { display: flex; align-items: center; gap: 10px; width: fit-content; margin-top: 12px; padding: 9px 13px; border: 1px solid var(--line); border-radius: 12px; font-size: 13px; }
    .chat .made i { display: grid; place-items: center; width: 30px; height: 30px; border-radius: 8px; background: var(--pale); color: var(--blue); font-style: normal; }
    .chat .made small { display: block; color: var(--soft); font-size: 12px; }
    .chat .turns { display: flex; justify-content: space-between; padding-top: 16px; border-top: 1px solid var(--line); color: var(--blue); font-weight: 500; }

    /* across: what it cites, what cites it, and what I wrote beside it */
    .across { grid-area: across; min-width: 0; }
    .ref { display: block; margin-bottom: 8px; padding: 10px 12px; border: 1px solid var(--line); border-radius: 12px; background: var(--white); }
    .ref .to { display: flex; align-items: center; gap: 7px; font-weight: 600; }
    .ref .to svg { color: var(--soft); }
    .ref .to i { flex: none; width: 9px; height: 9px; border-radius: 50%; background: var(--c, var(--sea)); }
    .ref p { margin-top: 2px; font-size: 12.5px; color: var(--soft); }
    .ref q { display: block; margin-top: 7px; padding: 6px 9px; border-radius: 7px; background: var(--pale); font: italic 500 15.5px/1.35 var(--serif); quotes: '“' '”'; }
    .note { padding: 10px 12px; border: 1px dashed var(--line); border-radius: 12px; font-size: 13px; color: var(--soft); }
    .note b { display: block; margin-bottom: 2px; color: var(--ink); font-weight: 500; }
    .return { display: none; align-items: center; gap: 8px; margin-bottom: 14px; padding: 9px 12px; border-radius: 10px; background: var(--night); color: #fff; font-weight: 500; }
    .return svg { color: var(--sky); }
    [data-at="author"][data-from="book"] .return.to-book, [data-at="author"][data-from="subject"] .return.to-subject { display: flex; }

    /* ---- what each idea colors, at every width ---- */
    [data-layout="both"] .holds { background: var(--pale); }
    [data-layout="both"] .holds a.on { background: var(--white); }
    [data-layout="rail"][data-tone="dark"] .sub { --sub-fg: #fff; --sub-dim: rgba(255, 255, 255, .8); --ctl: rgba(12, 27, 31, .26); --ctl-line: transparent; --ctl-fg: #fff; --on: #fff; --on-fg: var(--night); --lnk: #fff; --melnk: #fff; background: var(--blue); }
    [data-layout="rail"][data-tone="dark"] .fav { background: #fff; }
    [data-layout="rail"][data-tone="light"] { --bar: var(--pale); --bar-on: #fff; --bar-line: #cbe6ee; }
    [data-layout="two"][data-tone="dark"] .sub { --sub-dim: #27505c; --ctl: rgba(255, 255, 255, .62); --ctl-line: transparent; --ctl-fg: var(--ink); --lnk: var(--deep); background: var(--sky); }
    [data-layout="two"][data-tone="light"] .sub { --ctl: #fff; background: var(--pale); }
    [data-layout="side"][data-tone="light"] { --bar: var(--mist); --bar-on: #fff; }
    [data-layout="cards"][data-tone="light"] { --canvas: #e9f2f5; --bar-on: #fff; }
    [data-layout="cards"][data-tone="dark"] { --canvas: var(--night); }
    [data-layout="cards"] body, [data-layout="cards"] .lib, [data-layout="cards"] .me { background: var(--canvas); }
    [data-layout="cards"] :is(.sub, .holds, .thing, .across) { background: var(--white); }
    :is([data-layout="header"], [data-layout="both"], [data-layout="two"], [data-layout="cards"]):is([data-at="subject"], [data-at="book"], [data-at="chat"]) .s.is-claude { box-shadow: inset 0 -2px 0 var(--c); }

    /* ---- at a desk: where each idea puts the bars ---- */
    @media (min-width: 761px) {
        html, body { height: 100%; }
        body { display: grid; overflow: hidden; }
        .thing { padding: 20px 28px 40px; overflow: auto; }
        .holds { padding: 18px 12px; overflow: auto; }
        .across { padding: 18px 16px; overflow: auto; border-left: 1px solid var(--line); }

        /* a bar across the top holds the library, with me at its right end */
        :is([data-layout="header"], [data-layout="both"], [data-layout="two"], [data-layout="cards"]) .lib { padding: 9px 170px 9px 18px; }
        :is([data-layout="header"], [data-layout="both"], [data-layout="two"], [data-layout="cards"]) .logo { margin-right: 12px; }
        :is([data-layout="header"], [data-layout="both"], [data-layout="two"], [data-layout="cards"]) :is(.s small, .me small, .lib .find em) { display: none; }
        :is([data-layout="header"], [data-layout="both"], [data-layout="two"], [data-layout="cards"]) .me { grid-area: lib; justify-self: end; z-index: 1; padding: 0 18px 0 8px; background: none; }
        [data-tone="light"]:is([data-layout="header"], [data-layout="both"], [data-layout="two"]) .lib { border-bottom: 1px solid var(--line); }

        [data-layout="header"] body { grid-template: auto auto auto minmax(0, 1fr) / minmax(0, 1fr) 300px; grid-template-areas: "lib lib" "sub sub" "holds holds" "thing across"; }
        [data-layout="both"] body { grid-template: auto auto minmax(0, 1fr) / 240px minmax(0, 1fr) 300px; grid-template-areas: "lib lib lib" "holds sub sub" "holds thing across"; }
        [data-layout="both"] .holds { padding: 20px 12px; border-right: 1px solid #cbe6ee; }
        [data-layout="two"] body { grid-template: auto auto minmax(0, 1fr) / 236px minmax(0, 1fr) 300px; grid-template-areas: "lib lib lib" "sub sub sub" "holds thing across"; }
        [data-layout="two"] .sub { align-items: center; padding: 9px 24px; }
        [data-layout="two"] .title { display: flex; flex-wrap: wrap; align-items: baseline; gap: 4px 16px; }
        [data-layout="two"] h1 { margin: 0; font-size: 26px; order: -1; }
        [data-layout="two"] .title p { display: none; }
        [data-layout="two"] .holds { border-right: 1px solid var(--line); }
        [data-layout="cards"] body { grid-template: auto auto minmax(0, 1fr) / 244px minmax(0, 1fr) 300px; grid-template-areas: "lib lib lib" "holds sub across" "holds thing across"; column-gap: 12px; padding: 0 12px 12px; }
        [data-layout="cards"] .lib { padding: 11px 170px 11px 6px; }
        [data-layout="cards"] .me { padding: 0 6px; }
        [data-layout="cards"] :is(.holds, .across) { border: 0; border-radius: 16px; }
        [data-layout="cards"] .sub { border-radius: 16px 16px 0 0; }
        [data-layout="cards"] .thing { border-radius: 0 0 16px 16px; }

        /* a bar down the left holds the library, with me at its foot */
        [data-layout="side"] body { grid-template: auto minmax(0, 1fr) / 256px minmax(0, 1fr) 300px; grid-template-areas: "side sub sub" "side thing across"; }
        [data-layout="side"] .side { grid-area: side; display: flex; flex-direction: column; min-height: 0; background: var(--bar); }
        [data-layout="side"] .holds { flex: 1; order: 1; }
        [data-layout="side"] .me { order: 2; }
        [data-layout="side"] .lib { flex-direction: column; align-items: stretch; gap: 2px; padding: 18px 12px 12px; }
        [data-layout="side"] .logo { padding: 0 6px 14px; }
        [data-layout="side"] .subjects { flex-direction: column; }
        [data-layout="side"] .s small { margin-left: auto; }
        [data-layout="side"] .lib .find { margin: 10px 0 0; }
        [data-layout="side"] .holds { padding: 14px 12px; border-top: 1px solid var(--bar-line); background: var(--bar); color: var(--bar-fg); }
        [data-layout="side"] .holds h4, [data-layout="side"] .holds a small { color: var(--bar-dim); }
        [data-layout="side"] .holds a.on { background: var(--bar-on); }
        [data-layout="side"] .me { padding: 12px 18px 14px; border-top: 1px solid var(--bar-line); }
        [data-layout="side"][data-tone="light"] .side { border-right: 1px solid var(--line); }

        /* a narrow rail holds the subjects as marks and me as a face */
        [data-layout="rail"] body { grid-template: auto auto minmax(0, 1fr) auto / 68px minmax(0, 1fr) 300px; grid-template-areas: "lib sub sub" "lib holds holds" "lib thing across" "me thing across"; }
        [data-layout="rail"] .lib { flex-direction: column; gap: 12px; padding: 14px 0; }
        [data-layout="rail"] :is(.logo b, .lib .find, .s b, .s small, .me span) { display: none; }
        [data-layout="rail"] .subjects { flex-direction: column; align-items: center; gap: 10px; }
        [data-layout="rail"] .s { padding: 0; background: none; }
        [data-layout="rail"] :is(.s i, .logo i, .me i) { width: 40px; height: 40px; border-radius: 11px; font-size: 13px; }
        [data-layout="rail"] .logo i, [data-layout="rail"] .me i { font-size: 16px; }
        [data-layout="rail"] .me i { border-radius: 50%; }
        [data-layout="rail"]:is([data-at="subject"], [data-at="book"], [data-at="chat"]) .s.is-claude i { box-shadow: 0 0 0 2px var(--bar), 0 0 0 4px var(--c); }
        [data-layout="rail"] .me { justify-content: center; padding: 10px 0 14px; }
        [data-layout="rail"] .sub { padding: 16px 26px 14px; }
        [data-layout="rail"][data-tone="light"] :is(.lib, .me) { border-right: 1px solid #cbe6ee; }

        /* with no side bar, what the page holds is a row under its name */
        :is([data-layout="header"], [data-layout="rail"]) .holds { padding: 12px 28px; overflow: auto hidden; border-bottom: 1px solid var(--line); scrollbar-width: none; }
        [data-layout="header"] .holds { padding-top: 0; }
        :is([data-layout="header"], [data-layout="rail"]) .holds > div { display: flex; align-items: center; gap: 6px; }
        :is([data-layout="header"], [data-layout="rail"]) .holds h4 { flex: none; margin: 0 6px 0 0; }
        :is([data-layout="header"], [data-layout="rail"]) .holds h4.next { margin-left: 18px; }
        :is([data-layout="header"], [data-layout="rail"]) .holds h4 small { display: none; }
        :is([data-layout="header"], [data-layout="rail"]) .holds a { flex: none; padding: 5px 11px 5px 9px; border: 1px solid var(--line); border-radius: 99px; white-space: nowrap; }
        :is([data-layout="header"], [data-layout="rail"]) .holds a small { margin-left: 4px; }
        :is([data-layout="header"], [data-layout="rail"]) .holds a.on { border-color: transparent; }
    }

    /* ---- on a phone: one bar at the top, the page beneath it in one column ---- */
    @media (max-width: 760px) {
        body { position: relative; display: flex; flex-direction: column; }
        .sub { order: 1; }
        .holds { order: 2; }
        .thing { order: 3; }
        .across { order: 4; }
        .lib { position: sticky; top: 0; z-index: 4; height: 50px; margin-right: 54px; padding: 0 8px 0 14px; gap: 4px; overflow: auto hidden; scrollbar-width: none; }
        .logo { margin-right: 8px; }
        .logo b { font-size: 19px; }
        .s { white-space: nowrap; }
        .s small, .lib .find, .me span { display: none; }
        .me { position: fixed; z-index: 5; top: 0; right: 0; justify-content: center; width: 54px; height: 50px; }
        [data-tone="light"] :is(.lib, .me) { border-bottom: 1px solid var(--line); }
        .sub { flex-direction: column; flex-wrap: nowrap; align-items: stretch; padding: 16px 16px 12px; }
        h1 { font-size: 28px; white-space: normal; }
        .chain { overflow: auto hidden; scrollbar-width: none; }
        .tools { margin: 0; }
        .tools > div { justify-content: flex-start; }
        .holds { padding: 10px 16px 12px; overflow: auto hidden; border-bottom: 1px solid var(--line); scrollbar-width: none; }
        .holds > div { display: flex; align-items: center; gap: 6px; }
        .holds h4 { flex: none; margin: 0 6px 0 0; }
        .holds h4.next { margin-left: 18px; }
        .holds h4 small { display: none; }
        .holds a { flex: none; padding: 5px 11px 5px 9px; border: 1px solid var(--line); border-radius: 99px; background: var(--white); white-space: nowrap; }
        .holds a small { margin-left: 4px; }
        .thing { padding: 16px 16px 24px; }
        .go { flex-wrap: wrap; gap: 14px; padding: 14px; }
        .go > div { flex: 1 1 60%; min-width: 0; }
        .go .read { margin: 0; }
        .shelf { grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 16px 12px; }
        .cover { padding: 10px 8px 8px 13px; }
        .cover b { font-size: 14.5px; }
        .open, .person { flex-direction: column; gap: 16px; }
        .cover.big { width: 150px; }
        .cover.big b { font-size: 22px; }
        .counts { gap: 18px; }
        .chat .mine { max-width: 88%; }
        .across { padding: 16px; border-top: 1px solid var(--line); }

        /* a side bar or a rail turns to lie along the foot, the subjects as marks */
        :is([data-layout="side"], [data-layout="rail"]) body { padding-bottom: 60px; }
        :is([data-layout="side"], [data-layout="rail"]) .subjects { position: fixed; z-index: 4; left: 0; right: 0; bottom: 0; justify-content: space-around; padding: 8px 10px; border-top: 1px solid var(--bar-line); background: var(--bar); }
        :is([data-layout="side"], [data-layout="rail"]) .s { padding: 0; background: none; box-shadow: none; }
        :is([data-layout="side"], [data-layout="rail"]) .s b { display: none; }
        :is([data-layout="side"], [data-layout="rail"]) .s i { width: 42px; height: 42px; border-radius: 12px; font-size: 13px; }
        :is([data-layout="side"], [data-layout="rail"]):is([data-at="subject"], [data-at="book"], [data-at="chat"]) .s.is-claude i { box-shadow: 0 0 0 2px var(--bar), 0 0 0 4px var(--c); }

        [data-layout="two"] .sub { padding: 12px 16px; }
        [data-layout="two"] .title p { display: none; }
        [data-layout="cards"] body { padding-bottom: 10px; }
        [data-layout="cards"] :is(.sub, .holds, .thing, .across) { margin: 0 10px; }
        [data-layout="cards"] .sub { margin-top: 4px; border-radius: 14px 14px 0 0; }
        [data-layout="cards"] .thing { border-radius: 0 0 14px 14px; }
        [data-layout="cards"] .across { margin-top: 10px; border: 0; border-radius: 14px; }
    }
</style>
</head>
<body>

<div class="side">
<header class="lib">
    <a class="logo" data-go="library"><i>D</i><b>Dougs Library</b></a>
    <nav class="subjects">
        <a class="s is-claude" data-go="subject" style="--c: var(--sea)"><i>Cl</i><b>Conversations with Claude</b><small>212</small></a>
        <a class="s" style="--c: #1f8a78"><i>Ch</i><b>Conversations with ChatGPT</b><small>147</small></a>
        <a class="s" style="--c: #c24a78"><i>De</i><b>Dougs Design</b><small>5</small></a>
        <a class="s" style="--c: #7a4a8c"><i>Rm</i><b>Dougs Reference Manual</b><small>3</small></a>
    </nav>
    <span class="find"><svg viewBox="0 0 16 16"><circle cx="7" cy="7" r="4.5"/><path d="M10.5 10.5 14 14"/></svg><em style="font-style: normal">Find in the library</em></span>
</header>

<a class="me" data-go="author"><i>D</i><span><b>The Librarian</b><small>my own account</small></span></a>

<aside class="holds">
    <div class="at-library">
        <h4>My favorites<small>3</small></h4>
        <a data-go="book" style="--c: #e07a35"><i></i><b>Lorem Ipsum Dolor</b><small class="star">★</small></a>
        <a style="--c: #4450b8"><i></i><b>Magna Aliqua</b><small class="star">★</small></a>
        <a style="--c: #c24a78"><i></i><b>The Library's Home</b><small class="star">★</small></a>
    </div>
    <div class="at-subject">
        <h4>Holds<small>3 projects</small></h4>
        <a class="on" style="--c: #e07a35"><i></i><b>A First Project</b><small>38</small></a>
        <a style="--c: #1f8a78"><i></i><b>A Second Project</b><small>91</small></a>
        <a style="--c: #4450b8"><i></i><b>A Third Project</b><small>83</small></a>
        <h4 class="next">My favorites here<small>2</small></h4>
        <a data-go="book" style="--c: #e07a35"><i></i><b>Lorem Ipsum Dolor</b><small class="star">★</small></a>
        <a style="--c: #4450b8"><i></i><b>Magna Aliqua</b><small class="star">★</small></a>
    </div>
    <div class="at-book at-chat">
        <h4>Holds<small>8 chapters</small></h4>
        <a class="first" data-go="chat" style="--c: #e07a35"><i></i><b>A First Chapter</b><small>1</small></a>
        <a style="--c: #e07a35"><i></i><b>A Second Chapter</b><small>2</small></a>
        <a style="--c: #e07a35"><i></i><b>A Third Chapter</b><small>3</small></a>
        <a style="--c: #e07a35"><i></i><b>A Fourth Chapter</b><small>4</small></a>
        <a style="--c: #e07a35"><i></i><b>A Fifth Chapter</b><small>5</small></a>
    </div>
    <div class="at-author">
        <h4>My books<small>3</small></h4>
        <a class="on" style="--c: var(--me)"><i></i><b>Dougs Story</b><small>3</small></a>
        <a style="--c: #c24a78"><i></i><b>Dougs Design</b><small>5</small></a>
        <a style="--c: #7a4a8c"><i></i><b>Dougs Reference Manual</b><small>3</small></a>
    </div>
</aside>
</div>

<section class="sub">
    <div class="title">
        <div class="chain">
            <em>Filed under</em>
            <span class="at-library">itself</span>
            <span class="at-subject"><a data-go="library">Dougs Library</a></span>
            <span class="at-book"><a data-go="subject">Conversations with Claude</a><i>›</i><a data-go="subject">A First Project</a></span>
            <span class="at-chat"><a data-go="subject">Conversations with Claude</a><i>›</i><a data-go="subject">A First Project</a><i>›</i><a data-go="book">Lorem Ipsum Dolor</a></span>
            <span class="at-author"><a data-go="library">Dougs Library</a></span>
        </div>
        <h1 class="at-library">Dougs Library</h1>
        <h1 class="at-subject">Conversations with Claude</h1>
        <h1 class="at-book">Lorem Ipsum Dolor</h1>
        <h1 class="at-chat">A First Chapter</h1>
        <h1 class="at-author">Dougs Story</h1>
        <p class="at-library">by <a class="to-me" data-go="author">The Librarian</a> · three books and two subjects · 359 conversations kept</p>
        <p class="at-subject">a subject · 212 books in three projects · by <a class="to-me" data-go="author">The Librarian</a></p>
        <p class="at-book">by <a class="to-me" data-go="author">The Librarian</a> and Claude · 8 chapters · kept 9 Sep 2026</p>
        <p class="at-chat">chapter 1 of 8 · <a class="to-me" data-go="author">The Librarian</a> and Claude · kept 9 Sep 2026</p>
        <p class="at-author">The Librarian · my own account</p>
    </div>
    <div class="tools">
        <div class="at-subject">
            <span class="seg"><span class="on" data-view-is="shelf">Shelf</span><span data-view-is="list">List</span><span>Table</span></span>
            <span class="find"><svg viewBox="0 0 16 16"><circle cx="7" cy="7" r="4.5"/><path d="M10.5 10.5 14 14"/></svg>Find in this subject</span>
        </div>
        <div class="at-book">
            <span class="fav"><em class="star">★</em>Among my favorites</span>
            <span class="find"><svg viewBox="0 0 16 16"><circle cx="7" cy="7" r="4.5"/><path d="M10.5 10.5 14 14"/></svg>Find in this book</span>
        </div>
        <div class="at-chat">
            <span class="find"><svg viewBox="0 0 16 16"><path d="M8 3v10M3 8h10"/></svg>Note on a passage</span>
            <span class="find"><svg viewBox="0 0 16 16"><circle cx="7" cy="7" r="4.5"/><path d="M10.5 10.5 14 14"/></svg>Find in this book</span>
        </div>
    </div>
</section>

<main class="thing">
    <div class="at-library">
        <h4>Subjects</h4>
        <div class="tiles">
            <a class="tile" data-go="subject" style="--t: #dff3fa; --c: var(--sea)"><i></i><b>Conversations with Claude</b><small>212 books in three projects</small></a>
            <a class="tile" style="--t: #dcf5ee; --c: #1f8a78"><i></i><b>Conversations with ChatGPT</b><small>147 books</small></a>
        </div>
        <h4>My books</h4>
        <div class="mines">
            <a class="cover mine" data-go="author"><b>Dougs Story</b><small>my own account</small></a>
            <a class="cover mine"><b>Dougs Design</b><small>the design</small></a>
            <a class="cover mine"><b>Dougs Reference Manual</b><small>the parts</small></a>
        </div>
    </div>

    <div class="at-subject">
        <div class="go">
            <span class="cover"><b>Lorem Ipsum Dolor</b><small>with Claude</small></span>
            <div>
                <em>Continue</em>
                <h2>Lorem Ipsum Dolor</h2>
                <p>A First Project · kept 9 September 2026. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                <u><i></i></u>
                <small>Chapter 1 of 8 · 2 notes of mine · cited twice</small>
            </div>
            <a class="read" data-go="chat">Read</a>
        </div>
        <h4>Lately kept<small>212 books · newest first</small></h4>
        <div class="shelf">
            <a class="bk" data-go="book"><span class="cover"><b>Lorem Ipsum Dolor</b><small>with Claude</small></span><b class="name">Lorem Ipsum Dolor</b><p>9 Sep · 8 chapters <em class="star">★</em></p></a>
            <a class="bk"><span class="cover"><b>Quis Nostrud</b><small>with Claude</small></span><b class="name">Quis Nostrud</b><p>1 Oct · 6 chapters</p></a>
            <a class="bk"><span class="cover"><b>Magna Aliqua</b><small>with Claude</small></span><b class="name">Magna Aliqua</b><p>20 Sep · 11 chapters <em class="star">★</em></p></a>
            <a class="bk"><span class="cover"><b>Tempor Incididunt</b><small>with Claude</small></span><b class="name">Tempor Incididunt</b><p>12 Sep · 7 chapters</p></a>
            <a class="bk"><span class="cover"><b>Ut Enim ad Minim</b><small>with Claude</small></span><b class="name">Ut Enim ad Minim</b><p>27 Sep · 3 chapters</p></a>
            <a class="bk"><span class="cover"><b>Sed Do Eiusmod</b><small>with Claude</small></span><b class="name">Sed Do Eiusmod</b><p>5 Sep · 2 chapters</p></a>
            <a class="bk"><span class="cover"><b>Adipiscing Elit</b><small>with Claude</small></span><b class="name">Adipiscing Elit</b><p>2 Sep · 9 chapters</p></a>
            <a class="bk"><span class="cover"><b>Sit Amet Consectetur</b><small>with Claude</small></span><b class="name">Sit Amet Consectetur</b><p>21 Jul · 14 chapters</p></a>
            <a class="bk"><span class="cover"><b>Duis Aute Irure</b><small>with Claude</small></span><b class="name">Duis Aute Irure</b><p>14 Jul · 5 chapters</p></a>
            <a class="bk"><span class="cover"><b>Excepteur Sint</b><small>with Claude</small></span><b class="name">Excepteur Sint</b><p>2 Jul · 4 chapters</p></a>
        </div>
    </div>

    <div class="open at-book">
        <span class="cover big"><b>Lorem Ipsum Dolor</b><small>with Claude</small></span>
        <div class="words">
            <p class="says">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
            <a class="read" data-go="chat">Read from A First Chapter<svg viewBox="0 0 16 16"><path d="M3 8h10M9 4l4 4-4 4"/></svg></a>
        </div>
    </div>

    <div class="chat at-chat">
        <div class="mine"><span class="who">The Librarian</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit? Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
        <div class="theirs">
            <span class="who">Claude</span>
            <p>Ut enim ad minim veniam, quis nostrud exercitation. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <mark>Excepteur sint occaecat cupidatat non proident</mark><sup>1</sup>, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
<pre>const lorem = ipsum.dolor('sit amet');
return lorem.consectetur();</pre>
            <a class="made"><i>◇</i><span><b>Lorem Ipsum, a first draft</b><small>made in this turn · opens beside the page</small></span></a>
        </div>
        <div class="mine"><span class="who">The Librarian</span>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit?</div>
        <div class="theirs">
            <span class="who">Claude</span>
            <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.</p>
        </div>
        <div class="turns"><span></span><a>A Second Chapter →</a></div>
    </div>

    <div class="person at-author">
        <span class="face">D</span>
        <div class="words">
            <p class="says">My own account, and the one book here that is by its own subject. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            <div class="counts"><span><b>3</b>books written</span><span><b>359</b>conversations kept</span><span><b>41</b>notes</span></div>
            <div class="mines">
                <a class="cover mine"><b>Dougs Story</b><small>my own account</small></a>
                <a class="cover mine"><b>Dougs Design</b><small>the design</small></a>
                <a class="cover mine"><b>Dougs Reference Manual</b><small>the parts</small></a>
            </div>
        </div>
    </div>
</main>

<aside class="across">
    <a class="return to-book" data-go="book"><svg viewBox="0 0 16 16"><path d="M13 8H3M7 4 3 8l4 4"/></svg>Back to Lorem Ipsum Dolor</a>
    <a class="return to-subject" data-go="subject"><svg viewBox="0 0 16 16"><path d="M13 8H3M7 4 3 8l4 4"/></svg>Back to Conversations with Claude</a>

    <div class="at-library">
        <h4>Lately kept</h4>
        <a class="ref" style="--c: #c2413f"><span class="to"><i></i>Quis Nostrud</span><p>1 Oct · Conversations with Claude</p></a>
        <a class="ref" style="--c: #7a4a8c"><span class="to"><i></i>Ut Enim ad Minim</span><p>27 Sep · Conversations with Claude</p></a>
        <h4 class="next">My notes<small>41</small></h4>
        <div class="note"><b>3 Oct 2026 · in Lorem Ipsum Dolor</b>Lorem ipsum, a note of mine beside the passage it is about.</div>
    </div>

    <div class="at-subject">
        <h4>Cited from outside<small>2</small></h4>
        <a class="ref" data-go="author" data-from="subject" style="--c: var(--me)"><span class="to"><svg viewBox="0 0 16 16"><path d="M13 8H3M7 4 3 8l4 4"/></svg><i></i>Dougs Story</span><p>chapter 1 cites Lorem Ipsum Dolor</p></a>
        <a class="ref" style="--c: #1f8a78"><span class="to"><svg viewBox="0 0 16 16"><path d="M13 8H3M7 4 3 8l4 4"/></svg><i></i>Conversations with ChatGPT</span><p>one book cites Adipiscing Elit</p></a>
        <h4 class="next">My notes here<small>12</small></h4>
        <div class="note"><b>3 Oct 2026 · in Lorem Ipsum Dolor</b>Lorem ipsum, a note of mine beside the passage it is about.</div>
    </div>

    <div class="at-book at-chat">
        <h4>Cites<small>1</small></h4>
        <a class="ref" style="--c: #3d7a4e"><span class="to"><svg viewBox="0 0 16 16"><path d="M3 8h10M9 4l4 4-4 4"/></svg><i></i>Adipiscing Elit</span><p>chapter 2 · A First Project</p></a>
        <h4 class="next">Cited by<small>2</small></h4>
        <a class="ref" data-go="author" data-from="book" style="--c: var(--me)"><span class="to"><svg viewBox="0 0 16 16"><path d="M13 8H3M7 4 3 8l4 4"/></svg><i></i>Dougs Story</span><p>chapter 1 · my own account</p><q>Excepteur sint occaecat cupidatat non proident</q></a>
        <a class="ref" style="--c: #c24a78"><span class="to"><svg viewBox="0 0 16 16"><path d="M13 8H3M7 4 3 8l4 4"/></svg><i></i>Sit Amet Consectetur</span><p>chapter 3 · A First Project</p></a>
        <h4 class="next">My notes<small>1</small></h4>
        <div class="note"><b>1 · 3 Oct 2026</b>Lorem ipsum, a note of mine beside the passage it is about.</div>
    </div>

    <div class="at-author">
        <h4>Cites<small>1</small></h4>
        <a class="ref" data-go="book" style="--c: #e07a35"><span class="to"><svg viewBox="0 0 16 16"><path d="M3 8h10M9 4l4 4-4 4"/></svg><i></i>Lorem Ipsum Dolor</span><p>chapter 1 · a conversation with Claude</p><q>Excepteur sint occaecat cupidatat non proident</q></a>
        <h4 class="next">Cited by<small>0</small></h4>
        <div class="note">Nothing cites this chapter yet.</div>
    </div>
</aside>

<script>
    const page = document.documentElement;
    for (const door of document.querySelectorAll('[data-go]'))
        door.addEventListener('click', () => {
            if (door.dataset.from) page.dataset.from = door.dataset.from;
            else delete page.dataset.from;
            page.dataset.at = door.dataset.go;
            window.scrollTo(0, 0);
            for (const column of document.querySelectorAll('.thing, .holds, .across')) column.scrollTop = 0;
        });
    for (const view of document.querySelectorAll('[data-view-is]'))
        view.addEventListener('click', () => {
            page.dataset.view = view.dataset.viewIs;
            for (const other of view.parentElement.children) other.classList.toggle('on', other === view);
        });
<\/script>
</body>
</html>
`})]})]})]}),a.jsxs(i,{children:[a.jsx(o,{children:"[A Bookish Page](/dougs-design/#a-bookish-page)"}),a.jsx(t,{children:"The first home drawn for this library, which I called beautiful: a title set as the coming-soon page set its own, a byline, a synopsis, and the catalogue as a contents page. It is kept here as the bookish way a book can open, for my own account."}),a.jsxs(i,{children:[a.jsx(d,{children:"24"}),a.jsx(o,{children:"[The Title Page](/dougs-design/#the-title-page)"}),a.jsx(t,{children:"Concept 24, an idea, after the coming-soon page."}),a.jsx(t,{children:"A book opens like a book: its title set as the coming-soon page set its own, who it is by and what it is filed under beneath, its synopsis, and its contents as a contents page. Nothing else is on the page."}),a.jsxs(t,{children:[a.jsx(p,{}),a.jsx(r,{children:"/.design/3-every-concept~024-desk.png"}),a.jsx(r,{children:"/.design/3-every-concept~024-phone.png"})]}),a.jsxs(t,{children:[a.jsx(m,{}),"Beautiful. We will be repurposing the design you put on the library home screen, but not at this very moment."]}),a.jsxs(t,{children:[a.jsx(c,{}),a.jsx(n,{children:`<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>The Title Page</title>
<meta name="number" content="24">
<meta name="state" content="idea">
<meta name="said" content="Beautiful. We will be repurposing the design you put on the library home screen, but not at this very moment.">
<meta name="after" content="the coming-soon page">
<meta name="idea" content="A book opens like a book: its title set as the coming-soon page set its own, who it is by and what it is filed under beneath, its synopsis, and its contents as a contents page. Nothing else is on the page.">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&display=swap" rel="stylesheet">
<style>
    :root {
        --paper: #0c1b1f;
        --ink: #e8e4df;
        --opal: #c8f4fb;
        --quiet: color-mix(in srgb, var(--ink) 62%, var(--paper));
        --hairline: color-mix(in srgb, var(--ink) 13%, var(--paper));
        --font: 'Cormorant Garamond', Georgia, serif;
    }

    * { box-sizing: border-box; }
    html { background: var(--paper); }
    body { margin: 0; color: var(--ink); font: 400 1.3rem/1.6 var(--font); overflow-x: hidden; }
    a { color: inherit; text-decoration: none; }

    /* the teaser's air, at a third of its strength and standing still enough to read over */
    .orb { position: fixed; border-radius: 50%; pointer-events: none; z-index: 0; animation: drift 24s ease-in-out infinite; }
    .orb-1 { left: 2%; top: -6%; width: 760px; height: 760px; background: radial-gradient(circle, hsla(250, 60%, 65%, .075), transparent 68%); }
    .orb-2 { left: 52%; top: 32%; width: 680px; height: 680px; background: radial-gradient(circle, hsla(160, 60%, 65%, .06), transparent 68%); animation-delay: -9s; }
    .orb-3 { left: 22%; top: 66%; width: 600px; height: 600px; background: radial-gradient(circle, hsla(340, 60%, 65%, .045), transparent 68%); animation-delay: -15s; }
    @keyframes drift {
        0%, 100% { transform: translate(0, 0) scale(1); }
        33% { transform: translate(24px, -16px) scale(1.06); }
        66% { transform: translate(-12px, 14px) scale(.97); }
    }
    @keyframes arrive { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: none; } }
    @keyframes halo { from { -webkit-text-stroke-color: transparent; } to { -webkit-text-stroke-color: rgba(100, 210, 210, .3); } }
    @media (prefers-reduced-motion: reduce) { .orb, .pa-cover .pd-title, .pd-byline, .pa-cover::after { animation: none !important; } }

    .pd-book { position: relative; z-index: 1; padding: 0 1.5rem 14vh; }

    /* the cover: the title as the teaser set its own, the rule that ends in nothing, the byline beneath */
    .pa-cover { text-align: center; padding-top: 17vh; }
    .pa-cover .pd-title { font-size: clamp(2.6rem, 6vw, 4.6rem); font-weight: 300; letter-spacing: .08em; line-height: 1.1; paint-order: stroke fill; -webkit-text-stroke: 3px transparent; animation: arrive 1.4s ease-out both, halo 1.5s ease-out 1.6s both; }
    .pa-cover::after { content: ''; display: block; width: clamp(80px, 12vw, 160px); height: 1px; margin: 26px auto 0; background: linear-gradient(90deg, transparent, hsla(180, 30%, 60%, .5), transparent); animation: arrive 1.4s ease-out .5s both; }
    .pd-byline { margin: 24px 0 0; text-align: center; font-style: italic; text-transform: lowercase; letter-spacing: .16em; font-size: 1.05rem; color: var(--quiet); animation: arrive 1.4s ease-out .8s both; }
    .pd-byline .pd-word { color: var(--opal); text-shadow: 0 0 1px currentColor; }
    .pd-byline .pd-label { letter-spacing: .16em; }

    /* the synopsis: one paragraph, centred, the library saying what it is */
    .pa-synopsis { max-width: 33rem; margin: 8vh auto 0; text-align: center; color: color-mix(in srgb, var(--ink) 88%, var(--paper)); }
    .pa-synopsis .pd-paragraph { margin: 0; }

    /* the table of contents: the catalogue first, set as a book's contents page */
    .pa-table-of-contents { max-width: 46rem; margin: 11vh auto 0; display: flex; flex-direction: column; }
    .pa-table-of-contents > .pd-section:not(.pa-table) { order: 2; margin-top: 4.5rem; }
    .pa-table-of-contents .pd-heading { font-size: .78rem; font-weight: 400; letter-spacing: .24em; text-transform: uppercase; color: var(--quiet); margin: 0 0 .9rem; }

    .pa-table .pa-row { display: grid; grid-template-columns: 5fr 7fr; column-gap: 2.5rem; align-items: baseline; padding: 1.15rem 0; border-top: 1px solid var(--hairline); }
    .pa-table .pa-row-start-1 { padding: 0 0 .55rem; border-top: 0; font-size: .78rem; letter-spacing: .24em; text-transform: uppercase; color: var(--quiet); opacity: .7; }
    .pa-table .pa-row-end { border-bottom: 1px solid var(--hairline); }
    .pa-table .pa-col-start-1 .pa-content { font-size: 1.7rem; font-weight: 300; letter-spacing: .03em; line-height: 1.2; transition: color .5s ease, text-shadow .5s ease; }
    .pa-table .pa-col-start-2 .pa-content { font-style: italic; color: var(--quiet); transition: color .5s ease; }
    .pa-table .pa-row a:hover .pa-content { color: var(--opal); text-shadow: 0 0 1px currentColor, 0 0 3px currentColor; }

    .pa-table-of-contents > .pd-section:not(.pa-table) .pd-paragraph { padding: .9rem 0; border-top: 1px solid var(--hairline); border-bottom: 1px solid var(--hairline); }
    .pa-table-of-contents > .pd-section:not(.pa-table) .pa-content { font-size: 1.35rem; font-weight: 300; letter-spacing: .03em; transition: color .5s ease; }
    .pa-table-of-contents > .pd-section:not(.pa-table) a:hover .pa-content { color: var(--opal); }

    /* a chapter of the book: a reading column, the title light and wide as the cover's */
    .pd-canonical.pd-chapter { max-width: 34rem; margin: 14vh auto 0; }
    .pd-canonical.pd-chapter .pd-title { font-size: 2.3rem; font-weight: 300; letter-spacing: .08em; line-height: 1.15; text-align: center; }
    .pd-canonical.pd-chapter .pd-title::after { content: ''; display: block; width: 72px; height: 1px; margin: 20px auto 0; background: linear-gradient(90deg, transparent, hsla(180, 30%, 60%, .45), transparent); }
    .pd-canonical.pd-chapter .pd-heading { font-size: .78rem; font-weight: 400; letter-spacing: .24em; text-transform: uppercase; color: var(--quiet); margin: 3rem 0 .6rem; }
    .pd-canonical.pd-chapter .pd-paragraph { margin: 0 0 1.1rem; }
    .pd-canonical.pd-chapter .pd-paragraph a { color: var(--opal); border-bottom: 1px solid color-mix(in srgb, var(--opal) 35%, transparent); transition: border-color .4s ease; }
    .pd-canonical.pd-chapter .pd-paragraph a:hover { border-bottom-color: var(--opal); }

    [hidden] { display: none; }
</style>
</head>
<body>
<div class="orb orb-1"></div>
<div class="orb orb-2"></div>
<div class="orb orb-3"></div>

<div class="pd-book">

    <header>
        <div class="pd-chapter pa-cover">
            <a href="/dougs-library/"><div id="dougs-library" class="pd-sentence pd-title">Dougs Library</div></a>
        </div>
        <!-- new: the byline, a paragraph the book draws from what its cover says -->
        <p class="pd-paragraph pd-byline">
            <span class="pd-label">by</span> <a href="/dougs-story/"><span class="pd-word">The Librarian</span></a>
            &nbsp;·&nbsp;
            <span class="pd-label">filed under</span> <a href="/dougs-library/"><span class="pd-word">The Library</span></a>
        </p>
    </header>

    <div class="pd-chapter pa-synopsis">
        <span id="synopsis" class="pd-sentence pd-title pa-parenthetical" hidden></span>
        <div class="pd-paragraph">The catalogue of my library, filed under what it is about, which is itself. Everything I keep stands under it, directly or through another book. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
    </div>

    <nav>
        <div class="pd-chapter pa-table-of-contents">
            <span id="table-of-contents" class="pd-sentence pd-title pa-parenthetical" hidden></span>

            <div class="pd-section">
                <div id="contents" class="pd-sentence pd-heading">Contents</div>
                <a href="#the-shelves"><div class="pd-paragraph"><span class="pa-content">The Shelves</span></div></a>
            </div>

            <div class="pd-section pa-table">
                <div id="the-catalogue" class="pd-sentence pd-heading">The Catalogue</div>
                <div class="pd-paragraph pa-row pa-row-start-1">
                    <span class="pd-word pa-col pa-col-start-1">Book</span> <span class="pd-word pa-col pa-col-start-2">What it is</span>
                </div>
                <div class="pd-paragraph pa-row pa-row-start-2">
                    <a href="/dougs-story/"><span class="pd-word pa-col pa-col-start-1"><span class="pa-content">Dougs Story</span></span></a>
                    <a href="/dougs-story/#synopsis"><span class="pd-word pa-col pa-col-start-2"><span class="pa-content">my own account</span></span></a>
                </div>
                <div class="pd-paragraph pa-row pa-row-start-3">
                    <a href="/dougs-design/"><span class="pd-word pa-col pa-col-start-1"><span class="pa-content">Dougs Design</span></span></a>
                    <a href="/dougs-design/#synopsis"><span class="pd-word pa-col pa-col-start-2"><span class="pa-content">the design of this library</span></span></a>
                </div>
                <div class="pd-paragraph pa-row pa-row-start-4 pa-row-end">
                    <a href="/dougs-reference-manual/"><span class="pd-word pa-col pa-col-start-1"><span class="pa-content">Dougs Reference Manual</span></span></a>
                    <a href="/dougs-reference-manual/#synopsis"><span class="pd-word pa-col pa-col-start-2"><span class="pa-content">the parts this library is built with</span></span></a>
                </div>
            </div>
        </div>
    </nav>

    <div class="pd-chapter pd-canonical">
        <a href="#the-shelves"><div id="the-shelves" class="pd-sentence pd-title">The Shelves</div></a>
        <div class="pd-section">
            <div id="what-stands-here" class="pd-sentence pd-heading">What stands here</div>
            <div class="pd-paragraph">Three books stand under this one. <a href="/dougs-story/"><span class="pd-word">Dougs Story</span></a> is mine, and the one book here that is by its own subject. <a href="/dougs-design/"><span class="pd-word">Dougs Design</span></a> is where the design of this library is kept. <a href="/dougs-reference-manual/"><span class="pd-word">Dougs Reference Manual</span></a> holds the parts I build this library with, each beside the chapter that says what it is.</div>
            <div class="pd-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
        </div>
    </div>

</div>
</body>
</html>
`})]})]}),a.jsxs(i,{children:[a.jsx(d,{children:"25"}),a.jsx(o,{children:"[The Reading View](/dougs-design/#the-reading-view)"}),a.jsx(t,{children:"Concept 25, an idea, after the algebra of perspective, in the original demo."}),a.jsx(t,{children:"A book is read a chapter at a time on one typeset sheet, as the original demo set the algebra of perspective: who wrote it in a running head, the title centred, a drop initial, justified serif prose, the chapters either side at the foot, on the demo's two papers, its warm book and its night, and a third in plain white."}),a.jsxs(t,{children:[a.jsx(p,{}),a.jsx(r,{children:"/.design/3-every-concept~025-desk.png"}),a.jsx(r,{children:"/.design/3-every-concept~025-phone.png"})]}),a.jsxs(t,{children:[a.jsx(m,{}),"I like 25, beautiful. We will likely have a bar on top also, in dark perhaps so it isn't so noticeable, but I really like it for bookish chapters like the autobiography."]}),a.jsxs(t,{children:[a.jsx(c,{}),a.jsx(n,{children:`<!doctype html>
<html lang="en" data-theme="book">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>The Reading View</title>
<meta name="number" content="25">
<meta name="state" content="idea">
<meta name="said" content="I like 25, beautiful. We will likely have a bar on top also, in dark perhaps so it isn't so noticeable, but I really like it for bookish chapters like the autobiography.">
<meta name="after" content="the algebra of perspective, in the original demo">
<meta name="idea" content="A book is read a chapter at a time on one typeset sheet, as the original demo set the algebra of perspective: who wrote it in a running head, the title centred, a drop initial, justified serif prose, the chapters either side at the foot, on the demo's two papers, its warm book and its night, and a third in plain white.">
<style>
    :root {
        --serif: Georgia, 'Iowan Old Style', 'Times New Roman', serif;
        --mono: ui-monospace, Menlo, Consolas, monospace;
        --me: #e8590c;
    }

    /* the demo's frame, the same behind its book and its night */
    [data-theme="book"], [data-theme="night"] {
        --ground: radial-gradient(1200px 700px at 50% -10%, #232a4d 0%, #171c33 45%, #0f1326 100%);
        --ground-end: #0f1326;
        --chip-fill: rgba(15, 19, 38, .72);
        --chip-line: rgba(124, 138, 200, .35);
        --chip-ink: #aab4e8;
        --chip-hover-ink: #e6eaff;
        --chip-hover-line: rgba(170, 180, 232, .7);
        --chip-on-fill: rgba(255, 210, 122, .12);
        --chip-on-line: rgba(255, 210, 122, .75);
        --chip-on-ink: #ffd27a;
        --chip-rule: rgba(124, 138, 200, .3);
    }

    /* the demo's book: its warm paper and its letterpress inks */
    [data-theme="book"] {
        --sheet: #fbf9f3;
        --sheet-border: 0;
        --sheet-radius: 6px;
        --sheet-shadow: 0 1px 0 rgba(255, 255, 255, .08), 0 34px 90px -24px rgba(0, 0, 0, .65);
        --sheet-width: 780px;
        --sheet-pad: 68px 76px 56px;
        --sheet-pad-phone: 40px 26px 36px;
        --ink: #29251d;
        --heading: #1f1b14;
        --strong: #14100a;
        --emphasis: #3c352a;
        --initial: #6d6146;
        --link: #705f38;
        --kicker: #9a9178;
        --kicker-rule: #d6cfb9;
        --foot: #9a9178;
        --foot-value: #5e553d;
        --foot-line: #e4ddc9;
    }

    /* the demo's night */
    [data-theme="night"] {
        --sheet: linear-gradient(168deg, #191f3a 0%, #12162a 100%);
        --sheet-border: 1px solid #2c3358;
        --sheet-radius: 14px;
        --sheet-shadow: 0 34px 90px -24px rgba(0, 0, 0, .8);
        --sheet-width: 760px;
        --sheet-pad: 56px 64px 44px;
        --sheet-pad-phone: 36px 24px;
        --ink: #c9d0f2;
        --heading: #f2ecd9;
        --strong: #ffd27a;
        --emphasis: #9fd0ff;
        --initial: #ffd27a;
        --link: #7cf0c8;
        --kicker: #9a9178;
        --kicker-rule: #d6cfb9;
        --foot: #7a86b8;
        --foot-value: #ffd27a;
        --foot-line: #2a3055;
    }

    /* new: plain white with its ink, the measured blue for the rest, on a light frame */
    [data-theme="white"] {
        --ground: radial-gradient(1200px 700px at 50% -10%, #ffffff 0%, #f1f7f9 45%, #e3f5fa 100%);
        --ground-end: #e3f5fa;
        --chip-fill: #ffffff;
        --chip-line: #dbe7ec;
        --chip-ink: #516770;
        --chip-hover-ink: #10252c;
        --chip-hover-line: #8fc8dc;
        --chip-on-fill: #0c1b1f;
        --chip-on-line: #0c1b1f;
        --chip-on-ink: #ffffff;
        --chip-rule: #dbe7ec;
        --sheet: #ffffff;
        --sheet-border: 1px solid #dbe7ec;
        --sheet-radius: 6px;
        --sheet-shadow: 0 34px 90px -40px rgba(12, 27, 31, .28);
        --sheet-width: 780px;
        --sheet-pad: 68px 76px 56px;
        --sheet-pad-phone: 40px 26px 36px;
        --ink: #10252c;
        --heading: #0c1b1f;
        --strong: #0c1b1f;
        --emphasis: #14323c;
        --initial: #166178;
        --link: #166178;
        --kicker: #516770;
        --kicker-rule: #8fc8dc;
        --foot: #516770;
        --foot-value: #10252c;
        --foot-line: #dbe7ec;
    }

    * { box-sizing: border-box; }
    html { background: var(--ground-end); }
    body { margin: 0; }
    [hidden] { display: none !important; }

    .frame { display: flex; flex-direction: column; align-items: center; min-height: 100vh; padding: 64px 20px 96px; background: var(--ground); }

    /* the demo's control bar: the papers, a rule, the way out */
    .controls { display: flex; flex-wrap: wrap; justify-content: center; align-items: center; gap: 8px; margin-bottom: 26px; }
    .chip { padding: 7px 15px; border: 1px solid var(--chip-line); border-radius: 999px; background: var(--chip-fill); color: var(--chip-ink); font: 12px/1.2 var(--mono); letter-spacing: .05em; text-decoration: none; cursor: pointer; transition: color 120ms, border-color 120ms, background 120ms; }
    .chip:hover { color: var(--chip-hover-ink); border-color: var(--chip-hover-line); }
    .chip[aria-pressed="true"] { color: var(--chip-on-ink); border-color: var(--chip-on-line); background: var(--chip-on-fill); }
    .controls .rule { width: 1px; height: 20px; margin: 0 6px; background: var(--chip-rule); }

    /* the sheet */
    .pd-book { width: min(var(--sheet-width), 100%); padding: var(--sheet-pad); border: var(--sheet-border); border-radius: var(--sheet-radius); background: var(--sheet); box-shadow: var(--sheet-shadow); font-family: var(--serif); color: var(--ink); }

    /* the running head: the cover's title and the byline, set as the demo set its kicker */
    .masthead { margin: 0 0 44px; text-align: center; text-indent: .32em; font: 10.5px/1.7 var(--mono); letter-spacing: .32em; text-transform: uppercase; color: var(--kicker); }
    .masthead::after { content: ''; display: block; width: 56px; height: 1px; margin: 16px auto 0; background: var(--kicker-rule); }
    .masthead .pa-cover, .masthead .pd-title, .masthead .pd-byline { display: inline; margin: 0; }
    .masthead .pd-byline::before { content: '·'; margin: 0 .55em 0 .25em; }
    .masthead a { color: inherit; text-decoration: none; }
    .masthead a.to-me { padding-bottom: 3px; background: linear-gradient(var(--me), var(--me)) left bottom / calc(100% - .32em) 2px no-repeat; }

    /* the chapter, in the demo's letterpress */
    .pd-canonical > a, .pd-canonical .pd-section > a { color: inherit; text-decoration: none; }
    .pd-canonical .pd-title { margin: 0 0 30px; font: 700 39px/1.15 var(--serif); letter-spacing: -.01em; text-align: center; color: var(--heading); }
    .pd-canonical .pd-heading { margin: 32px 0 12px; font: 700 21px/1.15 var(--serif); letter-spacing: -.01em; text-align: center; color: var(--heading); }
    .pd-canonical .pd-paragraph { margin: 0 0 18px; font-size: 17.2px; line-height: 1.8; text-align: justify; hyphens: auto; color: var(--ink); }
    .pd-canonical .pd-section:first-of-type .pd-paragraph:first-of-type::first-letter { float: left; padding: 6px 10px 0 0; font-size: 57px; line-height: .85; color: var(--initial); }
    .pd-canonical .pd-paragraph strong { font-weight: 700; color: var(--strong); }
    .pd-canonical .pd-paragraph em { font-style: italic; color: var(--emphasis); }
    .pd-canonical .pd-paragraph a { color: var(--link); text-decoration: underline; text-underline-offset: 2px; }

    /* the foot of the sheet, where the demo counted its readings: the chapters either side */
    .turn { display: grid; grid-template-columns: 1fr auto 1fr; grid-template-areas: "before folio after"; align-items: baseline; gap: 10px 26px; margin-top: 46px; padding-top: 18px; border-top: 1px solid var(--foot-line); font: 11px/1.5 var(--mono); letter-spacing: .08em; text-transform: uppercase; color: var(--foot); }
    .turn b { font-size: 12.5px; letter-spacing: .02em; text-transform: none; color: var(--foot-value); }
    .turn a { display: inline-flex; align-items: baseline; gap: 6px; color: inherit; text-decoration: none; }
    .turn a:hover b { text-decoration: underline; text-underline-offset: 3px; }
    .turn .before { grid-area: before; justify-self: start; }
    .turn .folio { grid-area: folio; }
    .turn .after { grid-area: after; justify-self: end; }

    /* a phone: the sheet is the screen, the bar above it */
    @media (max-width: 720px) {
        .frame { padding: 14px 0 0; }
        .controls { gap: 6px; margin-bottom: 14px; padding: 0 16px; }
        .chip { padding: 6px 12px; }
        .controls .rule { margin: 0 3px; }
        .pd-book { flex: 1; width: 100%; padding: var(--sheet-pad-phone); border-inline: 0; border-bottom: 0; border-radius: 0; box-shadow: none; }
        .turn { grid-template-columns: 1fr 1fr; grid-template-areas: "folio folio" "before after"; }
        .turn .folio { justify-self: center; }
    }
</style>
</head>
<body>
<div class="frame">

    <nav class="controls">
        <button class="chip" type="button" data-theme-to="book" aria-pressed="true">book</button>
        <button class="chip" type="button" data-theme-to="night" aria-pressed="false">night</button>
        <button class="chip" type="button" data-theme-to="white" aria-pressed="false">white</button>
        <span class="rule"></span>
        <a class="chip" href="/dougs-library/">the library →</a>
    </nav>

    <article class="pd-book">

        <header class="masthead">
            <div class="pd-chapter pa-biography pa-autobiography pa-cover">
                <a href="/dougs-story/"><div id="dougs-story" class="pd-sentence pd-title">Dougs Story</div></a>
            </div>
            <!-- new: the byline, a paragraph the book draws from what its cover says -->
            <p class="pd-paragraph pd-byline">
                <span class="pd-label">by</span> <a class="to-me" href="/dougs-story/"><span class="pd-word">The Librarian</span></a>
            </p>
        </header>

        <div class="pd-chapter pd-canonical" data-chapter="a-first-chapter">
            <a href="#a-first-chapter"><div id="a-first-chapter" class="pd-sentence pd-title">A First Chapter</div></a>
            <div class="pd-section">
                <div class="pd-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur, <a class="pa-reference" href="/lorem-ipsum-dolor/"><span class="pd-word">Lorem Ipsum Dolor</span></a>, excepteur sint occaecat cupidatat non proident.</div>
                <div class="pd-paragraph">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. <em>Nemo enim ipsam voluptatem</em> quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</div>
            </div>
            <div class="pd-section">
                <a href="#neque-porro-quisquam"><div id="neque-porro-quisquam" class="pd-sentence pd-heading">Neque porro quisquam</div></a>
                <div class="pd-paragraph">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.</div>
                <div class="pd-paragraph">Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.</div>
            </div>
            <div class="pd-section">
                <a href="#at-vero-eos"><div id="at-vero-eos" class="pd-sentence pd-heading">At vero eos</div></a>
                <div class="pd-paragraph">Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus <strong>asperiores repellat</strong>.</div>
            </div>
            <!-- new: the turn, the chapters either side of this one, read off the table of contents -->
            <nav class="turn">
                <span class="folio">chapter <b>1</b> of <b>3</b></span>
                <a class="after" href="#a-second-chapter" data-to="a-second-chapter"><b>A Second Chapter</b> →</a>
            </nav>
        </div>

        <div class="pd-chapter pd-canonical" data-chapter="a-second-chapter" hidden>
            <a href="#a-second-chapter"><div id="a-second-chapter" class="pd-sentence pd-title">A Second Chapter</div></a>
            <div class="pd-section">
                <div class="pd-paragraph">Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                <div class="pd-paragraph">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
            </div>
            <div class="pd-section">
                <a href="#excepteur-sint"><div id="excepteur-sint" class="pd-sentence pd-heading">Excepteur sint</div></a>
                <div class="pd-paragraph">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</div>
            </div>
            <nav class="turn">
                <a class="before" href="#a-first-chapter" data-to="a-first-chapter">← <b>A First Chapter</b></a>
                <span class="folio">chapter <b>2</b> of <b>3</b></span>
                <a class="after" href="#a-third-chapter" data-to="a-third-chapter"><b>A Third Chapter</b> →</a>
            </nav>
        </div>

        <div class="pd-chapter pd-canonical" data-chapter="a-third-chapter" hidden>
            <a href="#a-third-chapter"><div id="a-third-chapter" class="pd-sentence pd-title">A Third Chapter</div></a>
            <div class="pd-section">
                <div class="pd-paragraph">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</div>
                <div class="pd-paragraph">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</div>
            </div>
            <div class="pd-section">
                <a href="#quis-autem"><div id="quis-autem" class="pd-sentence pd-heading">Quis autem</div></a>
                <div class="pd-paragraph">Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.</div>
            </div>
            <nav class="turn">
                <a class="before" href="#a-second-chapter" data-to="a-second-chapter">← <b>A Second Chapter</b></a>
                <span class="folio">chapter <b>3</b> of <b>3</b></span>
            </nav>
        </div>

    </article>
</div>
<script>
    const root = document.documentElement;
    const papers = document.querySelectorAll('[data-theme-to]');
    papers.forEach(chip => chip.addEventListener('click', () => {
        root.dataset.theme = chip.dataset.themeTo;
        papers.forEach(other => other.setAttribute('aria-pressed', String(other === chip)));
    }));
    document.querySelectorAll('[data-to]').forEach(link => link.addEventListener('click', event => {
        event.preventDefault();
        document.querySelectorAll('[data-chapter]').forEach(chapter => { chapter.hidden = chapter.dataset.chapter !== link.dataset.to; });
        scrollTo(0, 0);
    }));
<\/script>
</body>
</html>
`})]})]})]})]}),"EveryConcept3"),_a=l(()=>a.jsxs(y,{children:[a.jsx(w,{children:"[The Paragraphs](/dougs-design/#the-paragraphs)"}),a.jsxs(i,{children:[a.jsx(o,{children:"What a paragraph may be"}),a.jsx(t,{children:"Most of this book is ordinary paragraphs. Three kinds are not. One is a question I am asked. One is what I said, in my own words. One is a design I chose."}),a.jsxs(t,{children:["A paragraph says which of these it is. So a page can show a question and its answer differently, and everything I said can be found. The questions and my answers are in ",a.jsx(s,{children:"[What I Am Asked](/dougs-design/#what-i-am-asked)"}),", and the designs I chose are in ",a.jsx(s,{children:"[The Designs I Am Going With](/dougs-design/#the-designs-i-am-going-with)"}),"."]})]}),a.jsx(A,{identifier:"code",type:".tsx",children:`import { $, $check } from '@dna-platform/chemistry';
import { $Annotation, $Paragraph, $Writing, AnnotationSpecification, specify } from '@dna-platform/public';

export class $Question extends $Annotation {
    specification = new QuestionSpecification();

    override defines(writing: $Writing): void {
        writing.classes.add(this, 'pa-question');
    }

    override erase(writing: $Writing): void {
        writing.classes.revert(this);
    }
}

export class $Answer extends $Annotation {
    specification = new AnswerSpecification();

    override defines(writing: $Writing): void {
        writing.classes.add(this, 'pa-answer');
    }

    override erase(writing: $Writing): void {
        writing.classes.revert(this);
    }
}

export class $Decision extends $Annotation {
    specification = new DecisionSpecification();

    override defines(writing: $Writing): void {
        writing.classes.add(this, 'pa-decision');
    }

    override erase(writing: $Writing): void {
        writing.classes.revert(this);
    }
}

export class QuestionSpecification extends AnnotationSpecification {
    @specify('asked is said of a paragraph')
    $saidOfAParagraph(writing: $Writing): void {
        $check(writing instanceof $Paragraph, 'asked is said of a paragraph, and this is not one');
    }
}

export class AnswerSpecification extends AnnotationSpecification {
    @specify('said is said of a paragraph')
    $saidOfAParagraph(writing: $Writing): void {
        $check(writing instanceof $Paragraph, 'said is said of a paragraph, and this is not one');
    }
}

export class DecisionSpecification extends AnnotationSpecification {
    @specify('chosen is said of a paragraph')
    $saidOfAParagraph(writing: $Writing): void {
        $check(writing instanceof $Paragraph, 'chosen is said of a paragraph, and this is not one');
    }
}

export const Question = $($Question);
export const Answer = $($Answer);
export const Decision = $($Decision);
`})]}),"TheParagraphso1"),ae=l(()=>a.jsxs(y,{children:[a.jsx(w,{children:"[The Concept](/dougs-design/#the-concept)"}),a.jsxs(i,{children:[a.jsx(o,{children:"What a concept is"}),a.jsxs(t,{children:["A concept is one sketch of one idea. In ",a.jsx(s,{children:"[Every Concept](/dougs-design/#every-concept)"})," each has a section of its own: its name, its number, what it is drawn after, the idea in a sentence, a photograph of it at a desk and on a phone, what I said of it if I said anything, and last the sketch's own code."]}),a.jsx(t,{children:"The section says it is a concept and gives its number, which it keeps for good. I answer by that number. The sketch itself is a file kept beside the chapter. It is there to document the concept, so its section prints it as code, and nothing in this library opens it or draws it."}),a.jsx(t,{children:"Another chapter points to a concept by its number, as a link to its place in Every Concept. It does not show the concept a second time."})]}),a.jsx(A,{identifier:"code",type:".tsx",children:`import { $, $check } from '@dna-platform/chemistry';
import { $Annotation, $Paragraph, $Section, $Writing, AnnotationSpecification, html, specify } from '@dna-platform/public';

export class $Concept extends $Annotation {
    specification = new ConceptSpecification();
    get number(): number {
        const written = html.copy(this.text).trim();
        return written === '' ? NaN : Number(written);
    }

    override defines(writing: $Writing): void {
        writing.classes.add(this, 'pa-concept');
        if ((writing as $Section).mention?.identifier === this.book?.$bookmark) writing.classes.add(this, 'pa-open');
    }

    override erase(writing: $Writing): void {
        writing.classes.revert(this);
    }
}

export class $Plates extends $Annotation {
    specification = new OfAConceptSpecification();

    override defines(writing: $Writing): void {
        writing.classes.add(this, 'pa-plates');
    }

    override erase(writing: $Writing): void {
        writing.classes.revert(this);
    }
}

export class $Source extends $Annotation {
    specification = new OfAConceptSpecification();

    override defines(writing: $Writing): void {
        writing.classes.add(this, 'pa-source');
    }

    override erase(writing: $Writing): void {
        writing.classes.revert(this);
    }
}

export class ConceptSpecification extends AnnotationSpecification {
    @specify('a concept is said of a section')
    $saidOfASection(writing: $Writing): void {
        $check(writing instanceof $Section, 'a concept is said of a section, and this is not one');
    }

    @specify('a concept is given its number')
    $givenItsNumber(writing: $Writing): void {
        $check(Number.isInteger(writing.annotations.expressed($Concept)?.number),
            'a concept is given its number, and this one was given something else');
    }
}

export class OfAConceptSpecification extends AnnotationSpecification {
    @specify('this is said of a paragraph of a concept')
    $saidOfAParagraphOfAConcept(writing: $Writing): void {
        $check(writing instanceof $Paragraph && writing.parent instanceof $Writing && writing.parent.is($Concept),
            'this is said of a paragraph of a concept, and here it is said of something else');
    }
}

export const Concept = $($Concept);
export const Plates = $($Plates);
export const Source = $($Source);
`})]}),"TheConcepto2"),ee=l(()=>a.jsxs(y,{children:[a.jsx(w,{children:"[The Camera](/dougs-design/#the-camera)"}),a.jsxs(i,{children:[a.jsx(o,{children:"What the camera is"}),a.jsxs(t,{children:["A concept is a page, and this book shows a photograph of it at a desk's width and another at a phone's. The camera takes those photographs. It is the one tool this book needs that the framework does not give, so it is kept here, beside the chapter that says what it is, and nothing that builds this book is kept outside it. It was once a script kept outside the library, and how it came to be here is told in ",a.jsx(s,{children:"[Closure](/dougs-story/#closure)"}),"."]}),a.jsx(t,{children:"It looks at every concept that is kept beside a chapter of this book under its number, photographs the ones that are newer than their photographs, and says how many things on each run past the right edge of the screen. That count is how a page that does not fit a phone is caught before I am shown it. It writes nothing but the photographs, and the book is bound afterwards in the usual way."}),a.jsxs(t,{children:["The camera photographs concepts. A page of the library itself is looked at with ",a.jsx(s,{children:"[the workbench](/dougs-reference-manual/#developing-a-library)"}),", which keeps the page open while I write it."]})]}),a.jsx(A,{identifier:"camera",type:".mjs",children:`// Photographs each concept of this book that is newer than its photographs, at a desk's width and at a phone's,
// and says what on it runs past the edge of the screen. Run from anywhere:
//
//     node .me/.design/o3-the-camera~camera.mjs
//
// A concept is a page kept beside a chapter under its number, as 3-every-concept~025.html. Its two
// photographs are kept beside it under the same number. Bind the book afterwards.
import { createRequire } from 'node:module';
import { existsSync, readdirSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const book = dirname(fileURLToPath(import.meta.url));
const require = createRequire(join(book, '../../package.json'));
const devices = [
    { name: 'desk', width: 1280, height: 800 },
    { name: 'phone', width: 390, height: 844 },
];

const older = (photograph, concept) => !existsSync(photograph) || statSync(photograph).mtimeMs < statSync(concept).mtimeMs;
const concepts = readdirSync(book).filter(file => /~\\d{3}\\.html$/u.test(file)).sort();
const wanted = concepts.flatMap(file => devices.map(device => ({ file, device, photograph: join(book, file.replace(/\\.html$/u, \`-\${device.name}.png\`)) })))
    .filter(shot => older(shot.photograph, join(book, shot.file)));

if (wanted.length === 0) console.log(\`\${concepts.length} concepts, every photograph current\`);
else {
    const puppeteer = require('puppeteer');
    const browser = await puppeteer.launch({ headless: true, ignoreDefaultArgs: ['--hide-scrollbars'] });
    for (const shot of wanted) {
        const page = await browser.newPage();
        await page.setViewport({ width: shot.device.width, height: shot.device.height, deviceScaleFactor: 1 });
        await page.goto(pathToFileURL(join(book, shot.file)).href, { waitUntil: 'networkidle0' });
        await page.evaluate(() => document.fonts.ready);
        await new Promise(done => setTimeout(done, 500));
        const past = await page.evaluate(() => {
            const wide = document.documentElement.clientWidth;
            return Array.from(document.querySelectorAll('body *')).filter(one => {
                const box = one.getBoundingClientRect();
                return box.width > 0 && box.right > wide + 1 && getComputedStyle(one).position !== 'fixed';
            }).length;
        });
        await page.screenshot({ path: shot.photograph });
        await page.close();
        console.log(\`\${shot.file} at a \${shot.device.name}: photographed, \${past} past the right edge\`);
    }
    await browser.close();
    console.log(\`photographed \${wanted.length}; bind the book to see them\`);
}
`})]}),"TheCamerao3"),te=l(()=>a.jsxs(y,{children:[a.jsx(w,{children:"[The Gallery](/dougs-design/#the-gallery)"}),a.jsxs(i,{children:[a.jsx(o,{children:"The concepts as cards"}),a.jsx(t,{children:"A gallery is said of a chapter whose sections are concepts. In it, each group of concepts is a grid, and each concept is a card: its two photographs first, then its name, what it is after, its idea, and what I said of it. The sketch's own code is not on the card."}),a.jsx(t,{children:"A card opens across the whole gallery when its address is the one I am at, and then it shows its photographs at full size and the sketch's code under them. The concept says of itself that it is open when the book's bookmark names it, and the gallery reads that; no card keeps a state of its own."}),a.jsxs(t,{children:["The two paragraphs the card places are said to be what they are in the chapter: the one holding the photographs is the pictures, and the one holding the code is the source. Both are kinds of ",a.jsx(s,{children:"[a concept's](/dougs-design/#the-concept)"})," paragraph."]})]}),a.jsx(A,{identifier:"code",type:".tsx",children:`import { $, $check, selection } from '@dna-platform/chemistry';
import { $Chapter, $Format, $Writing, AnnotationSpecification, specify } from '@dna-platform/public';

export class $Gallery extends $Format {
    specification = new GallerySpecification();
    themeProvider = true;
    style = selection.div\`
        .pd-chapter.pa-gallery .pd-section {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(\${({ theme }) => theme.card}, 1fr));
            gap: \${({ theme }) => theme.space};
            align-items: start;
        }
        .pa-gallery .pd-section .pa-self-reference.pd-container, .pa-gallery .pd-section .pd-paragraph { grid-column: 1 / -1; }
        .pa-gallery .pd-section.pa-concept {
            display: grid;
            grid-template-columns: minmax(0, 1fr);
            grid-template-areas: 'pictures' 'name';
            gap: calc(\${({ theme }) => theme.space} / 2);
        }
        .pa-gallery .pa-concept .pa-self-reference.pd-container { grid-area: name; }
        .pa-gallery .pa-concept .pd-paragraph { grid-column: auto; }
        .pa-gallery .pa-concept .pd-paragraph.pa-plates {
            grid-area: pictures;
            display: flex;
            gap: calc(\${({ theme }) => theme.space} / 2);
            overflow: hidden;
        }
        .pa-gallery .pa-concept .pa-plates img { height: \${({ theme }) => theme.plate}; width: auto; max-width: none; }
        .pa-gallery .pa-concept .pd-paragraph.pa-source { display: none; }
        .pa-gallery .pa-concept.pa-open { grid-column: 1 / -1; }
        .pa-gallery .pa-concept.pa-open .pa-plates { flex-wrap: wrap; }
        .pa-gallery .pa-concept.pa-open .pa-plates img { height: auto; max-width: 100%; }
        .pa-gallery .pa-concept.pa-open .pd-paragraph.pa-source { display: block; }
    \`;

    override defines(writing: $Writing): void {
        super.defines(writing);
        writing.classes.add(this, 'pa-gallery');
    }

    override erase(writing: $Writing): void {
        super.erase(writing);
        writing.classes.revert(this);
    }
}

export class GallerySpecification extends AnnotationSpecification {
    @specify('a gallery is said of a chapter')
    $saidOfAChapter(writing: $Writing): void {
        $check(writing instanceof $Chapter, 'a gallery is said of a chapter, and this is not one');
    }
}

export const Gallery = $($Gallery);
`})]}),"TheGalleryo4"),se=l(()=>a.jsxs(y,{children:[a.jsx(w,{children:"[The Frame](/dougs-design/#the-frame)"}),a.jsxs(i,{children:[a.jsx(o,{children:"How this book is laid out"}),a.jsxs(t,{children:["This book is laid out as the frame I answered on: a bar down the side with the way to the library at its head, this book's contents in the middle and me at its foot, and beside it the page, with the book's name and ",a.jsx(s,{children:"[the switch](/dougs-reference-manual/#the-switch)"})," across its top. One chapter is open at a time. The side bar is ",a.jsx(s,{children:"[the table of contents](/dougs-reference-manual/#the-bars)"})," as a bar, and the top is the cover as a bar, both taken from the manual."]}),a.jsxs(t,{children:["The design it follows is ",a.jsx(s,{children:"[the black side bar](/dougs-design/#a-black-side-bar)"})," in library mode and ",a.jsx(s,{children:"[the white cards](/dougs-design/#no-bars-white-cards)"})," in gallery mode. The two modes are two themes under this book's theme, and set only the bar's colors; gallery mode is the one registered, so the book opens light and airy, and I pick the other with the switch."]}),a.jsxs(t,{children:["The class of this book writes those parts where they go, and the frame is the arrangement said of the book. Its theme adds the side bar's look, the head, the words, and the cards of ",a.jsx(s,{children:"[the gallery](/dougs-design/#the-gallery)"}),"."]})]}),a.jsx(A,{identifier:"code",type:".tsx",children:`import { ReactNode } from 'react';
import { css, RuleSet } from 'styled-components';
import { $ } from '@dna-platform/chemistry';
import { $Annotation, $Writing, Given, Theme } from '@dna-platform/public';
import { $DougsBook, $Imposition, Imposition, Tab as tab } from '../.manual/.book';
import { GalleryMode as galleryMode, LibraryMode as libraryMode } from './o5-the-frame~theme.tsx';

export class $DougsDesign extends $DougsBook {
    get modes(): Given<$Annotation>[] {
        return [libraryMode, galleryMode];
    }

    override write(): ReactNode {
        const Cover = $(this.cover!);
        const Synopsis = $(this.synopsis!);
        const Table = $(this.table!);
        return (
            <>
                <div className="pd-side">
                    {this.classmark()}
                    <Table />
                    {this.byline()}
                </div>
                <div className="pd-main">
                    <div className="pd-head">
                        <Cover />
                        <div className="pd-switches">
                            {this.switches()}
                        </div>
                    </div>
                    <div className="pd-leaves">
                        {this.front(
                            <div className="pd-words">
                                <Synopsis />
                            </div>
                        )}
                        {this.leaves()}
                    </div>
                </div>
            </>
        );
    }

    override switches(): ReactNode {
        const Tab = $(tab);
        return (
            <>
                <Tab
                    chapter={this.cover}
                    of={libraryMode}
                    among={this.modes}
                >
                    library
                </Tab>
                <Tab
                    chapter={this.cover}
                    of={galleryMode}
                    among={this.modes}
                >
                    gallery
                </Tab>
                {super.switches()}
            </>
        );
    }
}

export class $Frame extends $Imposition {
    override defines(writing: $Writing): void {
        super.defines(writing);
        writing.classes.add(this, 'pa-frame');
    }

    protected override parts(): RuleSet[] {
        return [...super.parts(), this.areas(), this.narrow()];
    }

    protected areas(): RuleSet {
        return css\`
            .pd-book.pa-frame {
                display: grid;
                grid-template-columns: \${({ theme }) => theme.side} minmax(0, 1fr);
                grid-template-areas: 'side main';
                height: 100vh;
            }
            .pa-frame .pd-side {
                grid-area: side;
                display: grid;
                grid-template-rows: auto minmax(0, 1fr) auto;
                grid-template-areas: 'home' 'contents' 'me';
                overflow: hidden;
            }
            .pa-frame .pd-side .pd-classmark { grid-area: home; }
            .pa-frame .pd-side .pa-table-of-contents.pd-container { grid-area: contents; overflow-y: auto; }
            .pa-frame .pd-side .pd-byline { grid-area: me; }
            .pa-frame .pd-main {
                grid-area: main;
                display: grid;
                grid-template-rows: auto minmax(0, 1fr);
                grid-template-areas: 'head' 'pages';
            }
            .pa-frame .pd-head {
                grid-area: head;
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                justify-content: space-between;
                column-gap: \${({ theme }) => theme.space};
            }
            .pa-frame .pd-switches {
                display: flex;
                gap: calc(\${({ theme }) => theme.space} / 3);
            }
            .pa-frame .pd-leaves { grid-area: pages; overflow-y: auto; }
            .pa-frame .pd-words .pd-chapter { scroll-margin-block-start: \${({ theme }) => theme.space}; }
        \`;
    }

    protected narrow(): RuleSet {
        return css\`
            @media (max-width: \${({ theme }) => theme.narrow}) {
                .pd-book.pa-frame { display: block; height: auto; }
                .pa-frame .pd-side { display: block; }
                .pa-frame .pd-main { display: block; }
                .pa-frame.pa-turned .pa-table-of-contents { display: none; }
            }
        \`;
    }
}

export const DougsDesign = $($DougsDesign);
export const Frame = $($Frame);
$(DougsDesign, Imposition)(Frame);
$(DougsDesign, Theme)(galleryMode);
`}),a.jsx(A,{identifier:"theme",type:".tsx",children:`import { css, RuleSet } from 'styled-components';
import { $ } from '@dna-platform/chemistry';
import { $DougsTheme } from '../.manual/.book';

export class $DesignTheme extends $DougsTheme {

    protected override parts(): RuleSet[] {
        return [...super.parts(), this.sidebar(), this.head(), this.words(), this.cards(), this.small()];
    }

    protected sidebar(): RuleSet {
        return css\`
            .pd-side {
                background: \${({ theme }) => theme.barFill};
                color: \${({ theme }) => theme.barInk};
                border-inline-end: thin solid \${({ theme }) => theme.barLine};
            }
            .pd-side .pd-classmark, .pd-side .pd-byline {
                display: flex;
                align-items: center;
                gap: calc(\${({ theme }) => theme.space} * 0.4);
                margin-block: 0;
                padding: calc(\${({ theme }) => theme.space} * 0.6) calc(\${({ theme }) => theme.space} * 0.6);
                font-size: calc(0.83 * \${({ theme }) => theme.size});
                color: \${({ theme }) => theme.barDim};
            }
            .pd-side .pd-byline { border-block-start: thin solid \${({ theme }) => theme.barLine}; }
            .pd-side .pd-word {
                color: \${({ theme }) => theme.barInk};
                font-weight: 500;
            }
            .pd-side .pd-classmark .pd-word {
                font-family: \${({ theme }) => theme.serif};
                font-size: calc(1.45 * \${({ theme }) => theme.size});
                font-weight: 600;
                line-height: 1;
            }
            .pd-side .pa-reference { color: inherit; text-decoration: none; }
            .pd-side .pd-classmark::before, .pd-side .pd-byline::before {
                content: \${({ theme }) => theme.initial};
                display: grid;
                place-items: center;
                width: calc(\${({ theme }) => theme.space} * 1.3);
                height: calc(\${({ theme }) => theme.space} * 1.3);
                font-size: \${({ theme }) => theme.size};
                font-weight: 600;
            }
            .pd-side .pd-classmark::before {
                border-radius: calc(\${({ theme }) => theme.space} / 3);
                background: \${({ theme }) => theme.opal};
                color: \${({ theme }) => theme.night};
            }
            .pd-side .pd-byline::before {
                border-radius: 50%;
                background: \${({ theme }) => theme.me};
                color: \${({ theme }) => theme.paper};
            }
            .pd-side .pa-table-of-contents.pd-container { padding: 0 calc(\${({ theme }) => theme.space} / 2) \${({ theme }) => theme.space}; }
        \`;
    }

    protected head(): RuleSet {
        return css\`
            .pd-head {
                padding: calc(\${({ theme }) => theme.space} * 0.83) calc(\${({ theme }) => theme.space} * 1.17) calc(\${({ theme }) => theme.space} * 0.6);
                border-block-end: thin solid \${({ theme }) => theme.line};
            }
            .pd-head .pd-switch {
                border: none;
                border-radius: calc(\${({ theme }) => theme.space} * 0.375);
                padding: calc(\${({ theme }) => theme.space} / 4) calc(\${({ theme }) => theme.space} / 2);
                background: \${({ theme }) => theme.panel};
                color: \${({ theme }) => theme.soft};
            }
            .pd-head .pd-switch[aria-pressed='true'] {
                background: \${({ theme }) => theme.night};
                color: \${({ theme }) => theme.paper};
                font-weight: 500;
            }
        \`;
    }

    protected words(): RuleSet {
        return css\`
            .pd-leaves { padding: calc(\${({ theme }) => theme.space} * 0.83) calc(\${({ theme }) => theme.space} * 1.17) calc(\${({ theme }) => theme.space} * 1.67); }
            .pd-words .pd-chapter { margin-block: 0; max-width: none; }
            .pd-words .pd-title {
                font-family: \${({ theme }) => theme.serif};
                font-size: calc(2.5 * \${({ theme }) => theme.size});
                font-weight: 600;
                line-height: 1.04;
                color: \${({ theme }) => theme.heading};
            }
            .pd-words .pd-heading {
                font-size: calc(0.76 * \${({ theme }) => theme.size});
                font-weight: 600;
                letter-spacing: 0.12em;
                text-transform: uppercase;
                color: \${({ theme }) => theme.soft};
            }
            .pd-words .pd-paragraph { max-width: \${({ theme }) => theme.measure}; }
            .pd-front .pd-words .pd-paragraph {
                font-family: \${({ theme }) => theme.serif};
                font-size: calc(1.5 * \${({ theme }) => theme.size});
                line-height: 1.25;
            }
        \`;
    }

    protected cards(): RuleSet {
        return css\`
            .pa-gallery .pd-section.pa-concept {
                padding: calc(\${({ theme }) => theme.space} * 0.6);
                border: thin solid \${({ theme }) => theme.line};
                border-radius: calc(\${({ theme }) => theme.space} * 0.6);
                background: \${({ theme }) => theme.paper};
                box-shadow: \${({ theme }) => theme.shadow};
            }
            .pa-gallery .pa-concept .pd-heading {
                font-family: \${({ theme }) => theme.serif};
                font-size: calc(1.3 * \${({ theme }) => theme.size});
                font-weight: 600;
                letter-spacing: 0;
                text-transform: none;
                color: \${({ theme }) => theme.heading};
            }
            .pa-gallery .pa-concept .pd-paragraph {
                margin-block: 0;
                font-size: calc(0.86 * \${({ theme }) => theme.size});
                color: \${({ theme }) => theme.soft};
            }
            .pa-gallery .pa-concept .pd-paragraph.pa-answer {
                padding-inline-start: calc(\${({ theme }) => theme.space} / 2);
                border-inline-start: calc(\${({ theme }) => theme.space} / 8) solid \${({ theme }) => theme.me};
                color: \${({ theme }) => theme.ink};
            }
            .pa-gallery .pa-concept .pa-plates img { border-radius: calc(\${({ theme }) => theme.space} / 4); border: thin solid \${({ theme }) => theme.line}; }
            .pa-gallery .pa-concept.pa-open { box-shadow: 0 0 0 calc(\${({ theme }) => theme.space} / 8) \${({ theme }) => theme.accent}; }
        \`;
    }

    protected small(): RuleSet {
        return css\`
            @media (max-width: \${({ theme }) => theme.narrow}) {
                .pd-side { border-inline-end: none; }
                .pd-leaves { padding: calc(\${({ theme }) => theme.space} * 0.67); }
            }
        \`;
    }
}

export class $GalleryMode extends $DesignTheme {
    barFill = '#f1f7f9';
    barInk = '#10252c';
    barDim = '#516770';
    barOn = '#e3f5fa';
    barLine = '#dbe7ec';
}

export class $LibraryMode extends $DesignTheme {
    barFill = '#0c1b1f';
    barInk = '#ffffff';
    barDim = '#a9bcc1';
    barOn = 'rgba(255, 255, 255, 0.11)';
    barLine = '#1d3339';
}

export const DesignTheme = $($DesignTheme);
export const GalleryMode = $($GalleryMode);
export const LibraryMode = $($LibraryMode);
`}),a.jsx(A,{identifier:"faces",type:".tsx",children:`export { Sidebar as TableOfContents, Banner as Cover } from '../.manual/.book';
`})]}),"TheFrameo5"),ie=b(F),de=l(()=>a.jsxs(ie,{children:[Va(),$a(),Ka(),Ya(),Xa(),Za(),_a(),ae(),ee(),te(),se()]}),"book");export{de as book};
