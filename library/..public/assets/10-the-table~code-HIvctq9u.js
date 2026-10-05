var re=Object.defineProperty;var n=(f,e)=>re(f,"name",{value:e,configurable:!0});import{t as oe,s as W,f as o,$ as t,u as ae,m as N,n as c,W as ie,R as ne,j as a,a as x,v as R,w as ce,x as pe,y as de,z as le,M as he,B as fe,T as me,D as _,E as ee,F as $,G as ge,I as se,l as ue}from"./index-hQSJOtq-.js";const T=class T extends oe{constructor(){super(...arguments),this.font="'Cormorant Garamond', Georgia, serif",this.size="1.25rem",this.leading="1.6",this.measure="40rem",this.space="1.5rem",this.ink="#14262b",this.paper="#f5f1e8",this.link="#1c6a71",this.bar="#0c1b1f",this.bright="#e8e4df",this.tint="#d4eef8",this.style=W.div`${this.parts()}`}parts(){return[this.page(),this.levels(),this.links(),this.figures(),this.apparatus(),this.spread()]}page(){return o`
            font-family: ${({theme:e})=>e.font};
            font-size: ${({theme:e})=>e.size};
            font-weight: 500;
            line-height: ${({theme:e})=>e.leading};
            color: ${({theme:e})=>e.ink};
            background: ${({theme:e})=>e.paper};
            min-height: 100vh;
        `}levels(){return o`
            .pd-chapter { margin-block: calc(2 * ${({theme:e})=>e.space}); }
            .pd-section { margin-block: ${({theme:e})=>e.space}; }
            .pd-paragraph { margin-block: ${({theme:e})=>e.space}; max-width: ${({theme:e})=>e.measure}; }
            .pd-title { font-size: calc(2 * ${({theme:e})=>e.size}); font-weight: 300; letter-spacing: 0.08em; margin-block-end: ${({theme:e})=>e.space}; }
            .pd-heading { font-weight: 600; margin-block: ${({theme:e})=>e.space} 0; }
            .pd-line { white-space: pre-wrap; }
            .pd-word { overflow-wrap: break-word; }
        `}links(){return o`
            .pa-reference { color: ${({theme:e})=>e.link}; text-decoration-color: ${({theme:e})=>e.link}; text-underline-offset: 0.15em; }
            .pa-self-reference { color: inherit; text-decoration: none; }
            .pa-content { color: ${({theme:e})=>e.link}; }
        `}figures(){return o`
            .pd-image img { display: block; max-width: 100%; height: auto; }
            .pd-code {
                font-family: ui-monospace, monospace;
                font-size: calc(0.6 * ${({theme:e})=>e.size});
                font-weight: 400;
                line-height: 1.5;
                white-space: pre;
                overflow-x: auto;
                padding: ${({theme:e})=>e.space};
                background: color-mix(in srgb, ${({theme:e})=>e.ink} 6%, ${({theme:e})=>e.paper});
            }
            .hljs-keyword, .hljs-built_in, .hljs-type, .hljs-literal, .hljs-tag, .hljs-name, .hljs-title { color: ${({theme:e})=>e.link}; }
            .hljs-comment, .hljs-meta { color: color-mix(in srgb, ${({theme:e})=>e.ink} 55%, ${({theme:e})=>e.paper}); font-style: italic; }
        `}apparatus(){return o`
            .pd-library-title .pa-reference, .pd-byline .pa-reference, .pd-filed .pa-reference { text-decoration: none; }
            .pd-byline, .pd-filed { font-size: calc(0.8 * ${({theme:e})=>e.size}); letter-spacing: 0.04em; }
            .pd-appended { margin-inline-start: 0.6em; font-family: ui-monospace, monospace; font-size: calc(0.5 * ${({theme:e})=>e.size}); opacity: 0.5; }
            .pd-switch { max-width: none; }
            .pd-views { display: inline-flex; gap: calc(${({theme:e})=>e.space} / 2); margin-inline-start: ${({theme:e})=>e.space}; }
            .pd-view { font: inherit; font-size: calc(0.7 * ${({theme:e})=>e.size}); letter-spacing: 0.04em; color: inherit; background: none; border: 0; border-block-end: 1px solid transparent; padding: 0; cursor: pointer; opacity: 0.6; }
            .pd-view.pa-shown { opacity: 1; border-block-end-color: ${({theme:e})=>e.link}; }
            .pd-word.pa-shelfmark .pa-content { position: absolute; width: 1px; height: 1px; overflow: hidden; clip-path: inset(50%); white-space: nowrap; }
            .pd-word.pa-shelfmark::after {
                content: '';
                display: inline-block;
                width: calc(0.45 * ${({theme:e})=>e.size});
                height: calc(0.45 * ${({theme:e})=>e.size});
                margin-inline-start: calc(0.5 * ${({theme:e})=>e.space});
                border: 1px solid currentColor;
            }
            .pd-dateline {
                display: block;
                margin-block-start: ${({theme:e})=>e.space};
                font-size: calc(0.8 * ${({theme:e})=>e.size});
                font-style: italic;
                color: color-mix(in srgb, ${({theme:e})=>e.ink} 64%, ${({theme:e})=>e.paper});
            }
        `}spread(){return o`
            .pa-listing .pd-paragraph { max-width: none; margin-block: 0; }
            .pa-listing .pd-code { background: ${({theme:e})=>e.bar}; color: ${({theme:e})=>e.bright}; }
            .pa-listing .hljs-keyword, .pa-listing .hljs-built_in, .pa-listing .hljs-type, .pa-listing .hljs-literal,
            .pa-listing .hljs-tag, .pa-listing .hljs-name, .pa-listing .hljs-title { color: ${({theme:e})=>e.tint}; }
            .pa-listing .hljs-comment, .pa-listing .hljs-meta { color: color-mix(in srgb, ${({theme:e})=>e.bright} 55%, ${({theme:e})=>e.bar}); }

            @media (min-width: 64rem) {
                .pd-chapter.pa-append.pa-open { display: grid; column-gap: calc(2 * ${({theme:e})=>e.space}); align-content: start; }
                .pa-append .pd-section.pa-listing { grid-row: 1 / span 99; position: sticky; top: 0; align-self: start; margin-block: 0; }
                .pa-append .pa-listing .pd-code { max-height: calc(100vh - 8 * ${({theme:e})=>e.space}); }
                .pa-words-forward .pd-chapter.pa-append.pa-open { grid-template-columns: minmax(0, 1fr) minmax(0, 14rem); }
                .pa-words-forward .pa-append .pd-section.pa-listing { grid-column: 2; }
                .pa-words-forward .pa-append .pa-listing .pd-code { overflow: hidden; }
                .pa-code-forward .pd-chapter.pa-append.pa-open { grid-template-columns: minmax(0, 1.6fr) minmax(0, 1fr); }
                .pa-code-forward .pa-append .pd-section.pa-listing { grid-column: 1; }
                .pa-code-forward .pa-append .pa-listing .pd-code { overflow: auto; }
            }
        `}};n(T,"$DougsTheme");let w=T;const be=t(w),G=class G extends ae{get pages(){return super.pages.filter(e=>e!==this.book?.cover&&e!==this.book?.table)}get open(){const e=this.book;if(e===void 0)return;const s=e.$bookmark,i=e.bookmark??(s===void 0?void 0:this.pages.find(r=>r.text.find(N).some(p=>p.mention?.identifier===s)));return i!==void 0&&this.pages.includes(i)?i:e.synopsis}defines(e){super.defines(e),this.open===this.book?.synopsis&&e.classes.add(this,"pa-front")}};n(G,"$Paged");let d=G;const xe=t(d),M=class M extends c{write(){const e=this.book,s=e?.subject;if(s===void 0||s.means?.identifier===e?.means?.identifier)return null;const i=t(ie),r=t(ne);return a.jsxs(a.Fragment,{children:["filed under"," ",a.jsxs(i,{children:[a.jsx(r,{children:s.means?.identifier}),s.name]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-filed")}};n(M,"$Filed");let y=M;const B=class B extends c{write(){const e=this.book?.author;if(e===void 0)return null;const s=t(ie),i=t(ne);return a.jsxs(a.Fragment,{children:["by"," ",a.jsxs(s,{children:[a.jsx(i,{children:e.means?.identifier}),e.name]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-byline")}};n(B,"$Byline");let v=B;const $e=t(y),we=t(v);var ye=Object.defineProperty,ve=Object.getOwnPropertyDescriptor,ke=n((f,e,s,i)=>{for(var r=ve(e,s),p=f.length-1,S;p>=0;p--)(S=f[p])&&(r=S(e,s,r)||r);return r&&ye(e,s,r),r},"__decorateClass");const E=class E extends R{defines(e){e.classes.add(this,"pa-append")}erase(e){e.classes.revert(this)}};n(E,"$DougsAppend");let k=E;const I=class I extends x{constructor(){super(...arguments),this.specification=new m}defines(e){e.classes.add(this,"pa-listing")}erase(e){e.classes.revert(this)}};n(I,"$Listing");let j=I;const b=class b extends x{defines(e){for(const s of e.annotations.after(this))s instanceof b&&e.annotations.express(s,!1)}erase(e){e.classes.revert(this)}};n(b,"$Spread");let l=b;const Z=class Z extends l{defines(e){super.defines(e),e.classes.add(this,"pa-words-forward")}};n(Z,"$WordsForward");let z=Z;const q=class q extends l{defines(e){super.defines(e),e.classes.add(this,"pa-code-forward")}};n(q,"$CodeForward");let C=q;const H=class H extends ce{$saidOfASection(e){pe(e instanceof N,"a listing is said of a section, and this is not one")}};n(H,"ListingSpecification");let m=H;ke([de("a listing is said of a section")],m.prototype,"$saidOfASection");const Re=t(k),Te=t(j);t(l);const te=t(z),je=t(C),J=class J extends le{get pages(){return this.annotations.expressed(d)?.pages??[]}get views(){const e=t(te),s=t(je);return this.annotations.expressed(d)?.open?.is(R)===!0?[[e,s]]:[]}write(){return a.jsxs(a.Fragment,{children:[this.library(),this.place(this.cover),this.filed(),this.byline(),this.place(this.table),this.place(...this.pages),this.controls()]})}place(...e){return e.map((s,i)=>{if(s===void 0)return null;const r=t(s);return a.jsx(r,{},i)})}library(){const e=t(De);return a.jsx(e,{chapter:this.cover})}filed(){const e=t($e);return a.jsx(e,{chapter:this.cover})}byline(){const e=t(we);return a.jsx(e,{chapter:this.cover})}controls(){const e=t(Fe);return a.jsx(e,{chapter:this.cover})}$Define(){super.$Define();const e=t(te),s=t(xe);this.annotations.add(this,a.jsx(e,{}),a.jsx(s,{}))}};n(J,"$DougsLibrary");let h=J;const K=class K extends c{write(){const e=t(he);return a.jsx(e,{children:"[Dougs Library](/dougs-library/)"})}$Define(){super.$Define(),this.classes.add(this,"pd-library-title")}};n(K,"$LibraryTitle");let D=K;const L=class L extends c{get library(){const e=this.book;return e instanceof h?e:void 0}write(){const e=this.library;return e===void 0?null:a.jsx(a.Fragment,{children:e.views.map((s,i)=>a.jsx("span",{className:"pd-views",children:s.map(r=>a.jsx("button",{type:"button",className:r===this.shown(s)?"pd-view pa-shown":"pd-view",onClick:n(()=>this.shows(r),"onClick"),children:this.says(r)},this.says(r)))},i))})}shown(e){return[this.library?.$is??[]].flat().find(i=>e.includes(i))??e[0]}shows(e){const s=this.library;s!==void 0&&(s.$is=[e,...[s.$is].flat().filter(i=>i!==e)])}says(e){return fe.name(e).replace(/([a-z])([A-Z])/gu,"$1 $2").toLowerCase()}$Define(){super.$Define(),this.classes.add(this,"pd-switch")}};n(L,"$Switch");let A=L;const ze=t(h),Ce=t(D),De=Ce,Ae=t(A),Fe=Ae;t(ze,me)(be);const Q=class Q extends h{constructor(){super(...arguments),this.layout=W.div`
        padding: ${({theme:e})=>e.space};

        & > aside .pd-library-title { font-size: calc(0.55 * ${({theme:e})=>e.size}); font-weight: 500; letter-spacing: 0.24em; text-transform: uppercase; }
        & > aside .pd-chapter.pa-cover { margin-block-end: 0; }
        & > aside .pd-chapter.pa-cover .pd-title { font-size: calc(1.2 * ${({theme:e})=>e.size}); line-height: 1.3; margin-block: 0; }
        & > aside .pd-filed, & > aside .pd-byline { margin-block: calc(${({theme:e})=>e.space} / 4) 0; }
        & > nav .pd-heading {
            font-size: calc(0.55 * ${({theme:e})=>e.size});
            font-weight: 500;
            letter-spacing: 0.24em;
            text-transform: uppercase;
            opacity: 0.6;
        }
        & > nav .pd-paragraph { margin-block: calc(${({theme:e})=>e.space} / 3); font-size: calc(0.85 * ${({theme:e})=>e.size}); line-height: 1.3; }
        & > nav .pa-reference { color: inherit; text-decoration: none; }
        & > nav .pa-content { color: inherit; opacity: 0.76; }
        & > nav .pd-appended { float: inline-end; line-height: 2.2; }
        & > nav .pa-entry.pa-open .pa-content { opacity: 1; font-weight: 700; }

        @media (min-width: 48rem) {
            position: fixed;
            inset: 0;
            padding: 0;
            display: grid;
            grid-template-columns: 17.5rem minmax(0, 1fr);
            grid-template-rows: auto minmax(0, 1fr);

            & > aside { grid-column: 1; grid-row: 1; padding: ${({theme:e})=>e.space} ${({theme:e})=>e.space} 0; color: ${({theme:e})=>e.bright}; background: ${({theme:e})=>e.bar}; }
            & > aside .pd-library-title { margin: 0; }
            & > aside .pd-chapter.pa-cover { margin: calc(${({theme:e})=>e.space} / 4) 0 0; }
            & > aside .pd-library-title .pa-reference, & > aside .pd-filed .pa-reference, & > aside .pd-byline .pa-reference { color: inherit; }

            & > nav { grid-column: 1; grid-row: 2; overflow: auto; padding: 0 ${({theme:e})=>e.space} ${({theme:e})=>e.space}; color: ${({theme:e})=>e.bright}; background: ${({theme:e})=>e.bar}; }
            & > nav .pd-chapter.pa-table-of-contents { margin: calc(2 * ${({theme:e})=>e.space}) 0 0; }
            & > nav .pa-entry.pa-open .pa-content { color: ${({theme:e})=>e.tint}; font-weight: inherit; }

            & > main { grid-column: 2; grid-row: 1 / span 2; display: grid; grid-template-rows: auto minmax(0, 1fr); }
            & > main .pd-switch { justify-self: end; margin: 0; padding: calc(${({theme:e})=>e.space} / 2) calc(3 * ${({theme:e})=>e.space}) 0; }
            & > main > article { overflow: auto; padding: calc(2 * ${({theme:e})=>e.space}) calc(3 * ${({theme:e})=>e.space}); }
            & > main .pd-chapter { margin: 0; }
        }
    `}write(){const e=this.layout;return a.jsxs(e,{children:[a.jsxs("aside",{children:[this.library(),this.place(this.cover),this.filed(),this.byline()]}),a.jsxs("main",{children:[this.controls(),a.jsx("article",{children:this.place(...this.pages)})]}),a.jsx("nav",{children:this.place(this.table)})]})}};n(Q,"$SideBar");let F=Q;t(F);const U=class U extends x{get name(){return _.reference(ee.copy(this.text))?.name??""}get date(){return _.reference(ee.copy(this.text))?.identifier}note(){return a.jsx("time",{className:"pd-dateline",dateTime:this.date,children:this.name})}defines(e){e.classes.add(this,"pa-dated")}erase(e){e.classes.revert(this)}};n(U,"$Dated");let O=U;const Ge=t(O),V=class V extends ${constructor(){super(...arguments),this.anchor=W(this.anchor).attrs({className:"pa-shelfmark"})``}defines(e){super.defines(e),e.classes.add(this,"pa-shelfmark")}};n(V,"$Shelfmark");let g=V;const Me=t(g),X=class X extends x{get paragraph(){return this.parent instanceof c?this.parent:void 0}get content(){const e=this.paragraph;return e?.annotations.expressed($)??e?.text.find(se)[0]?.annotations.expressed($)}get meant(){const e=this.content?.identifier;if(!(e===void 0||e===""))return this.book?.text.find(ue).find(s=>s.mention?.identifier===e)}defines(e){e.classes.add(this,"pa-entry");const s=this.meant;s!==void 0&&this.book?.annotations.expressed(ae)?.open===s&&e.classes.add(this,"pa-open"),this.paragraph?.text.find(se).some(i=>i.is(g))===!0&&e.classes.add(this,"pa-answer")}erase(e){e.classes.revert(this)}note(){const e=this.meant?.annotations.find(R)??[];return e.length===0?null:a.jsx("span",{className:"pd-appended",children:e.map(s=>s.$type).join(" ")})}};n(X,"$Entry");let u=X;const Y=class Y extends ge{$Bound(){const e=t(Pe);for(const s of this.chapter?.text.find(N)??[])for(const i of s.text.find(c))i.is(u)||i.annotations.add(this,a.jsx(e,{}));super.$Bound()}};n(Y,"$DougsTableOfContents");let P=Y;const Oe=t(u),Pe=Oe,Be=t(P);export{h as $,Re as A,Ge as D,Te as L,Me as S,Be as T,w as a,F as b};
