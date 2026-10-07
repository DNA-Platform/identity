var f=Object.defineProperty;var a=(h,e)=>f(h,"name",{value:e,configurable:!0});import{$ as r,s as l,z as g,j as s,C as i,T as p,A as b,S as x,P as d,b as u,c as m,d as j}from"./index-pFjXU_-4.js";import{f as y,S as $,W as k,I as v}from"./20-the-bookshelf~code-Ca-TkhFO.js";const o=class o extends y{constructor(){super(...arguments),this.style=l.header`
        .pd-chapter.pa-cover { margin-block: 0; }
        .pa-cover .pd-title {
            font-size: calc(1.04 * ${({theme:e})=>e.size});
            font-weight: 600;
        }
    `}};a(o,"$ManualCover");let t=o;const n=class n extends g{constructor(){super(...arguments),this.style=l.nav`
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
            justify-content: space-between;
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
            font-size: calc(0.8571 * ${({theme:e})=>e.size});
            color: ${({theme:e})=>e.faint};
        }
    `}};a(n,"$ManualTableOfContents");let c=n;const z=r(t),T=r(c),C=a(()=>s.jsxs(i,{children:[s.jsx(z,{}),s.jsx($,{ground:"#eef1f2",band:"#b6c1c6",bandInk:"#2b363c",foot:"#d8c48e",footInk:"#5d4a16",ink:"#4b3d14"}),s.jsx(k,{x:"-23",y:"-50"}),s.jsx(p,{children:"[Dougs Reference Manual](/dougs-reference-manual/)"}),s.jsx(b,{children:"[Doug](/dougs-story/)"}),s.jsx(x,{children:"[Library](/dougs-library/)"}),s.jsxs(d,{children:[s.jsx(v,{}),s.jsx(u,{children:`<svg viewBox="0 0 64 64" class="pd-illustration"><circle class="fill" cx="24" cy="41" r="10"/><circle class="light" cx="24" cy="41" r="3.5"/><circle cx="24" cy="41" r="3.5"/><path d="M24 28v-4M24 54v4M11 41H7M37 41h4M15 32l-3-3M33 32l3-3M15 50l-3 3M33 50l3 3"/><path class="fill" d="M38 10l5-5 9 9-5 5-4-1L31 30l-5-5 12-12z"/><path d="M38 10l5-5 9 9-5 5-4-1L31 30l-5-5 12-12zM44 12l3 3"/></svg>
`})]})]}),"Cover"),I=a(()=>s.jsxs(i,{children:[s.jsx(m,{}),s.jsxs(p,{children:[s.jsx(j,{}),"[Synopsis](/dougs-reference-manual/)"]}),s.jsx(d,{children:"The reusable parts of this library, each beside the chapter that says what it is. The other books import their tools from this manual's book file."})]}),"Synopsis");export{C,I as S,T};
