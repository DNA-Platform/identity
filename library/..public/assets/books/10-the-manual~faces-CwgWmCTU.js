var m=Object.defineProperty;var t=(p,e)=>m(p,"name",{value:e,configurable:!0});import{$ as i,selection as n}from"@dna-platform/chemistry";import{$TableOfContents as a}from"@dna-platform/public";import{$ as f}from"./.cover-CHeJxok7.js";const s=class s extends f{constructor(){super(...arguments),this.style=n.header`
        .pd-chapter.pa-cover { margin-block: 0; }
        .pa-cover .pd-title {
            font-size: calc(1.04 * ${({theme:e})=>e.size});
            font-weight: 600;
        }
    `}};t(s,"$ManualCover");let o=s;const c=class c extends a{constructor(){super(...arguments),this.style=n.nav`
        .pa-table-of-contents .pa-reference { color: inherit; text-decoration: none; }
    `}};t(c,"$ManualTableOfContents");let r=c;const x=i(o);i(r);export{x as C};
