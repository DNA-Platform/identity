var a=Object.defineProperty;var t=(p,e)=>a(p,"name",{value:e,configurable:!0});import{$ as n,selection as i}from"@dna-platform/chemistry";import{$TableOfContents as m}from"@dna-platform/public";import{v as f}from"./.cover-DpEQoDQE.js";const r=class r extends f{constructor(){super(...arguments),this.style=i.header`
        .pd-chapter.pa-cover { margin-block: 0; }
        .pa-cover .pd-title {
            font-size: calc(1.04 * ${({theme:e})=>e.size});
            font-weight: 600;
        }
    `}};t(r,"$ManualCover");let o=r;const c=class c extends m{constructor(){super(...arguments),this.style=i.nav`
        .pa-table-of-contents .pa-reference { color: inherit; text-decoration: none; }
    `}};t(c,"$ManualTableOfContents");let s=c;const v=n(o),x=n(s);export{v as C,x as T};
