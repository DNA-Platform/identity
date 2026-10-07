var u=Object.defineProperty;var o=(f,e)=>u(f,"name",{value:e,configurable:!0});import{$ as l,s as h,y as b,j as s,C as d,T as p,t as x,u as m,a as g,v as y,S as j,P as k,M as a}from"./index-B9Qtr_rb.js";import{g as v,V as i,c as w,C as $,S as z,W as M,h as S}from"./.cover-4jYwc4gF.js";const n=class n extends v{constructor(){super(...arguments),this.style=h.header`
        .pd-chapter.pa-cover { margin-block: 0; }
        .pa-cover .pd-title {
            font-size: calc(1.04 * ${({theme:e})=>e.size});
            font-weight: 600;
        }
    `}};o(n,"$ManualCover");let t=n;const c=class c extends b{constructor(){super(...arguments),this.style=h.nav`
        .pd-chapter.pa-table-of-contents { margin-block: ${({theme:e})=>e.space}; }
        .pa-table-of-contents .pd-section { margin-block: calc(${({theme:e})=>e.space} * 0.83) 0; }
        .pa-table-of-contents .pd-heading {
            font-size: calc(0.76 * ${({theme:e})=>e.size});
            font-weight: 600;
            line-height: 1;
            letter-spacing: 0.06em;
            text-transform: uppercase;
            color: ${({theme:e})=>e.faint};
            padding-inline: calc(${({theme:e})=>e.space} / 4);
            margin-block-end: calc(${({theme:e})=>e.space} / 3);
        }
        .pa-table-of-contents .pd-paragraph.pa-entry {
            display: flex;
            align-items: center;
            margin-block: 0;
            padding: calc(${({theme:e})=>e.space} / 4) calc(${({theme:e})=>e.space} / 3);
            border-radius: calc(${({theme:e})=>e.space} / 4);
            color: ${({theme:e})=>e.soft};
        }
        .pa-table-of-contents .pd-paragraph.pa-entry.pa-open {
            background: ${({theme:e})=>e.tint};
            color: ${({theme:e})=>e.accent};
            font-weight: 500;
        }
        .pa-table-of-contents .pa-reference { color: inherit; text-decoration: none; }
        .pa-table-of-contents .pa-number {
            margin-inline-start: auto;
            font-size: calc(0.8571 * ${({theme:e})=>e.size});
            color: ${({theme:e})=>e.faint};
        }
    `}};o(c,"$ManualTableOfContents");let r=c;const T=l(t),I=l(r),D=o(()=>s.jsxs(d,{children:[s.jsx(T,{}),s.jsx(i,{children:w()}),s.jsx(i,{children:$()}),s.jsx(z,{ground:"#eef1f2",band:"#b6c1c6",bandInk:"#2b363c",foot:"#d8c48e",footInk:"#5d4a16",ink:"#4b3d14"}),s.jsx(M,{x:"-23",y:"-50"}),s.jsx(p,{children:"[Dougs Reference Manual](/dougs-reference-manual/)"}),s.jsx(x,{children:"[Doug](/dougs-story/)"}),s.jsx(m,{children:"[Library](/dougs-library/)"}),s.jsxs(g,{children:[s.jsx(S,{}),s.jsx(y,{children:`<svg viewBox="0 0 64 64" class="pd-illustration"><circle class="fill" cx="24" cy="41" r="10"/><circle class="light" cx="24" cy="41" r="3.5"/><circle cx="24" cy="41" r="3.5"/><path d="M24 28v-4M24 54v4M11 41H7M37 41h4M15 32l-3-3M33 32l3-3M15 50l-3 3M33 50l3 3"/><path class="fill" d="M38 10l5-5 9 9-5 5-4-1L31 30l-5-5 12-12z"/><path d="M38 10l5-5 9 9-5 5-4-1L31 30l-5-5 12-12zM44 12l3 3"/></svg>
`})]})]}),"Cover"),P=o(()=>s.jsxs(d,{children:[s.jsx(j,{}),s.jsxs(p,{children:[s.jsx(k,{}),"[Synopsis](/dougs-reference-manual/)"]}),s.jsxs(g,{children:["The parts this library is built with, one chapter to a part, its code beside the chapter that says what it is and how it is used; every other book imports its tools from this manual's door. Start with ",s.jsx(a,{children:"[The Book](/dougs-reference-manual/#the-book)"}),", which every book here extends, and ",s.jsx(a,{children:"[The Theme](/dougs-reference-manual/#the-theme)"}),", which every book dresses itself from. ",s.jsx(a,{children:"[The Cover](/dougs-reference-manual/#the-cover)"})," is a book's data model, what a cover says and how another book reads it; ",s.jsx(a,{children:"[The Bookshelf](/dougs-reference-manual/#the-bookshelf)"})," is the catalogue's design as a type of book with its theme. ",s.jsx(a,{children:"[Developing a Library](/dougs-reference-manual/#developing-a-library)"})," is how a page is worked on with the page open, and ",s.jsx(a,{children:"[Initializing a Library](/dougs-reference-manual/#initializing-a-library)"})," how one is begun."]})]}),"Synopsis");export{D as C,P as S,I as T};
