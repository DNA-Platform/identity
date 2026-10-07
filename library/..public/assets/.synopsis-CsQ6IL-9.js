var f=Object.defineProperty;var t=(g,e)=>f(g,"name",{value:e,configurable:!0});import{$ as i,s as l,z as b,j as a,C as h,T as d,A as u,S as x,P as p,b as m,c as y,d as j,M as s}from"./index-DJZXWqNB.js";import{f as k,S as v,W as w,I as $}from"./20-the-bookshelf~code-DMM4yRyi.js";const n=class n extends k{constructor(){super(...arguments),this.style=l.header`
        .pd-chapter.pa-cover { margin-block: 0; }
        .pa-cover .pd-title {
            font-size: calc(1.04 * ${({theme:e})=>e.size});
            font-weight: 600;
        }
    `}};t(n,"$ManualCover");let o=n;const c=class c extends b{constructor(){super(...arguments),this.style=l.nav`
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
            gap: calc(${({theme:e})=>e.space} / 3);
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
    `}};t(c,"$ManualTableOfContents");let r=c;const z=i(o),C=i(r),I=t(()=>a.jsxs(h,{children:[a.jsx(z,{}),a.jsx(v,{ground:"#eef1f2",band:"#b6c1c6",bandInk:"#2b363c",foot:"#d8c48e",footInk:"#5d4a16",ink:"#4b3d14"}),a.jsx(w,{x:"-23",y:"-50"}),a.jsx(d,{children:"[Dougs Reference Manual](/dougs-reference-manual/)"}),a.jsx(u,{children:"[Doug](/dougs-story/)"}),a.jsx(x,{children:"[Library](/dougs-library/)"}),a.jsxs(p,{children:[a.jsx($,{}),a.jsx(m,{children:`<svg viewBox="0 0 64 64" class="pd-illustration"><circle class="fill" cx="24" cy="41" r="10"/><circle class="light" cx="24" cy="41" r="3.5"/><circle cx="24" cy="41" r="3.5"/><path d="M24 28v-4M24 54v4M11 41H7M37 41h4M15 32l-3-3M33 32l3-3M15 50l-3 3M33 50l3 3"/><path class="fill" d="M38 10l5-5 9 9-5 5-4-1L31 30l-5-5 12-12z"/><path d="M38 10l5-5 9 9-5 5-4-1L31 30l-5-5 12-12zM44 12l3 3"/></svg>
`})]})]}),"Cover"),L=t(()=>a.jsxs(h,{children:[a.jsx(y,{}),a.jsxs(d,{children:[a.jsx(j,{}),"[Synopsis](/dougs-reference-manual/)"]}),a.jsxs(p,{children:["The parts this library is built with, one chapter to a part, its code beside the chapter that says what it is and how it is used; every other book imports its tools from this manual's door. Start with ",a.jsx(s,{children:"[The Book](/dougs-reference-manual/#the-book)"}),", which every book here extends, and ",a.jsx(s,{children:"[The Theme](/dougs-reference-manual/#the-theme)"}),", which every book dresses itself from. ",a.jsx(s,{children:"[The Cover](/dougs-reference-manual/#the-cover)"})," is a book's data model, what a cover says and how another book reads it; ",a.jsx(s,{children:"[The Bookshelf](/dougs-reference-manual/#the-bookshelf)"})," is the catalogue's design as a type of book with its theme. ",a.jsx(s,{children:"[Developing a Library](/dougs-reference-manual/#developing-a-library)"})," is how a page is worked on with the page open, and ",a.jsx(s,{children:"[Initializing a Library](/dougs-reference-manual/#initializing-a-library)"})," how one is begun."]})]}),"Synopsis");export{I as C,L as S,C as T};
