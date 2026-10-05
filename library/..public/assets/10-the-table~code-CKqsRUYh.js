var de=Object.defineProperty;var n=(h,e)=>de(h,"name",{value:e,configurable:!0});import{r as le,s as re,f as o,$ as a,t as oe,l as R,a as l,u as T,v as he,w as fe,x as ge,y as me,j as i,m as p,M as be,z as ue,T as xe,B as ae,D as te,E as k,F as $e,W as pe,R as ce,G as we,I as ie,k as ke}from"./index-BkJGTWoQ.js";const G=class G extends le{constructor(){super(...arguments),this.font="'Cormorant Garamond', Georgia, serif",this.size="1.25rem",this.leading="1.6",this.measure="40rem",this.space="1.5rem",this.ink="#14262b",this.paper="#f5f1e8",this.link="#1c6a71",this.bar="#0c1b1f",this.bright="#e8e4df",this.tint="#d4eef8",this.style=re.div`${this.parts()}`}parts(){return[this.page(),this.levels(),this.links(),this.figures(),this.apparatus(),this.sideBar(),this.spread()]}page(){return o`
            font-family: ${({theme:e})=>e.font};
            font-size: ${({theme:e})=>e.size};
            font-weight: 500;
            line-height: ${({theme:e})=>e.leading};
            color: ${({theme:e})=>e.ink};
            background: ${({theme:e})=>e.paper};
            min-height: 100vh;
            .pd-book { padding: ${({theme:e})=>e.space}; }
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
        `}sideBar(){return o`
            .pa-side-bar .pd-library-title { font-size: calc(0.55 * ${({theme:e})=>e.size}); font-weight: 500; letter-spacing: 0.24em; text-transform: uppercase; }
            .pa-side-bar .pd-chapter.pa-cover .pd-title { font-size: calc(1.2 * ${({theme:e})=>e.size}); line-height: 1.3; margin-block: 0; }
            .pa-side-bar .pd-chapter.pa-cover .pd-paragraph { margin-block: calc(${({theme:e})=>e.space} / 4) 0; }
            .pa-side-bar .pd-chapter.pa-table-of-contents .pd-heading {
                font-size: calc(0.55 * ${({theme:e})=>e.size});
                font-weight: 500;
                letter-spacing: 0.24em;
                text-transform: uppercase;
                opacity: 0.6;
            }
            .pa-side-bar .pd-chapter.pa-table-of-contents .pd-paragraph { margin-block: calc(${({theme:e})=>e.space} / 3); font-size: calc(0.85 * ${({theme:e})=>e.size}); line-height: 1.3; }
            .pa-side-bar .pd-chapter.pa-table-of-contents .pa-reference { color: inherit; text-decoration: none; }
            .pa-side-bar .pd-chapter.pa-table-of-contents .pa-content { color: inherit; opacity: 0.76; }
            .pa-side-bar .pd-chapter.pa-table-of-contents .pd-appended { float: inline-end; line-height: 2.2; }
            .pa-side-bar .pd-chapter.pa-table-of-contents .pa-entry.pa-open .pa-content { opacity: 1; font-weight: 700; }

            @media (min-width: 48rem) {
                .pd-book.pa-side-bar {
                    position: fixed;
                    inset: 0;
                    padding: 0;
                    display: grid;
                    grid-template-columns: 17.5rem minmax(0, 1fr);
                    grid-template-rows: auto auto minmax(0, 1fr);
                    grid-template-areas: 'library tools' 'cover page' 'table page';
                }
                .pd-book.pa-side-bar::before { content: ''; grid-column: 1; grid-row: 1 / -1; background: ${({theme:e})=>e.bar}; }
                .pa-side-bar > .pd-container { display: contents; }
                .pa-side-bar .pd-library-title { grid-area: library; margin: 0; padding: ${({theme:e})=>e.space} ${({theme:e})=>e.space} 0; color: ${({theme:e})=>e.bright}; }
                .pa-side-bar .pd-chapter.pa-cover { grid-area: cover; margin: 0; padding: calc(${({theme:e})=>e.space} / 4) ${({theme:e})=>e.space} ${({theme:e})=>e.space}; color: ${({theme:e})=>e.bright}; }
                .pa-side-bar .pd-chapter.pa-table-of-contents { grid-area: table; margin: 0; padding: 0 ${({theme:e})=>e.space} ${({theme:e})=>e.space}; overflow: auto; color: ${({theme:e})=>e.bright}; }
                .pa-side-bar .pd-library-title .pa-reference, .pa-side-bar .pd-chapter.pa-cover .pa-reference { color: inherit; }
                .pa-side-bar .pd-chapter.pa-table-of-contents .pa-entry.pa-open .pa-content { color: ${({theme:e})=>e.tint}; font-weight: inherit; }
                .pa-side-bar .pd-switch { grid-area: tools; justify-self: end; margin: 0; padding: calc(${({theme:e})=>e.space} / 2) calc(3 * ${({theme:e})=>e.space}) 0; }
                .pa-side-bar .pd-chapter.pa-page { grid-area: page; margin: 0; padding: calc(2 * ${({theme:e})=>e.space}) calc(3 * ${({theme:e})=>e.space}); overflow: auto; }
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
        `}};n(G,"$DougsTheme");let y=G;const ye=a(y),M=class M extends oe{get pages(){return super.pages.filter(e=>e!==this.book?.cover&&e!==this.book?.table)}get open(){const e=this.book;if(e===void 0)return;const s=e.$bookmark,t=e.bookmark??(s===void 0?void 0:this.pages.find(r=>r.text.find(R).some(c=>c.mention?.identifier===s)));return t!==void 0&&this.pages.includes(t)?t:e.synopsis}defines(e){super.defines(e),this.open===this.book?.synopsis&&e.classes.add(this,"pa-front")}};n(M,"$Paged");let f=M;const ve=a(f),$=class $ extends l{defines(e){for(const s of e.annotations.after(this))s instanceof $&&e.annotations.express(s,!1)}erase(e){e.classes.revert(this)}};n($,"$Frame");let g=$;const E=class E extends g{defines(e){super.defines(e),e.classes.add(this,"pa-side-bar")}};n(E,"$SideBar");let v=E;a(g);const je=a(v);var ze=Object.defineProperty,Ce=Object.getOwnPropertyDescriptor,De=n((h,e,s,t)=>{for(var r=Ce(e,s),c=h.length-1,se;c>=0;c--)(se=h[c])&&(r=se(e,s,r)||r);return r&&ze(e,s,r),r},"__decorateClass");const I=class I extends T{defines(e){e.classes.add(this,"pa-append")}erase(e){e.classes.revert(this)}};n(I,"$DougsAppend");let j=I;const Z=class Z extends l{constructor(){super(...arguments),this.specification=new m}defines(e){e.classes.add(this,"pa-listing")}erase(e){e.classes.revert(this)}};n(Z,"$Listing");let z=Z;const w=class w extends l{defines(e){for(const s of e.annotations.after(this))s instanceof w&&e.annotations.express(s,!1)}erase(e){e.classes.revert(this)}};n(w,"$Spread");let d=w;const q=class q extends d{defines(e){super.defines(e),e.classes.add(this,"pa-words-forward")}};n(q,"$WordsForward");let C=q;const H=class H extends d{defines(e){super.defines(e),e.classes.add(this,"pa-code-forward")}};n(H,"$CodeForward");let D=H;const J=class J extends he{$saidOfASection(e){fe(e instanceof R,"a listing is said of a section, and this is not one")}};n(J,"ListingSpecification");let m=J;De([ge("a listing is said of a section")],m.prototype,"$saidOfASection");const qe=a(j),He=a(z);a(d);const ne=a(C),Ae=a(D),K=class K extends me{get views(){const e=a(ne),s=a(Ae);return this.annotations.expressed(f)?.open?.is(T)===!0?[[e,s]]:[]}write(){const e=a(Pe),s=a(Fe);return i.jsxs(i.Fragment,{children:[i.jsx(e,{chapter:this.cover}),super.write(),i.jsx(s,{chapter:this.cover})]})}$Define(){super.$Define();const e=a(je),s=a(ne),t=a(ve);this.annotations.add(this,i.jsx(e,{}),i.jsx(s,{}),i.jsx(t,{}))}};n(K,"$DougsLibrary");let b=K;const Q=class Q extends p{write(){const e=a(be);return i.jsx(e,{children:"[Dougs Library](/dougs-library/)"})}$Define(){super.$Define(),this.classes.add(this,"pd-library-title")}};n(Q,"$LibraryTitle");let A=Q;const S=class S extends p{get library(){const e=this.book;return e instanceof b?e:void 0}write(){const e=this.library;return e===void 0?null:i.jsx(i.Fragment,{children:e.views.map((s,t)=>i.jsx("span",{className:"pd-views",children:s.map(r=>i.jsx("button",{type:"button",className:r===this.shown(s)?"pd-view pa-shown":"pd-view",onClick:n(()=>this.shows(s,r),"onClick"),children:this.says(r)},this.says(r)))},t))})}shown(e){return[this.library?.$is??[]].flat().find(t=>e.includes(t))??e[0]}shows(e,s){const t=this.library;t!==void 0&&(t.$is=[...[t.$is].flat().filter(r=>!e.includes(r)),s])}says(e){return ue.name(e).replace(/([a-z])([A-Z])/gu,"$1 $2").toLowerCase()}$Define(){super.$Define(),this.classes.add(this,"pd-switch")}};n(S,"$Switch");let B=S;const Be=a(b),Oe=a(A),Pe=Oe,We=a(B),Fe=We;a(Be,xe)(ye);const U=class U extends l{get name(){return ae.reference(te.copy(this.text))?.name??""}get date(){return ae.reference(te.copy(this.text))?.identifier}note(){return i.jsx("time",{className:"pd-dateline",dateTime:this.date,children:this.name})}defines(e){e.classes.add(this,"pa-dated")}erase(e){e.classes.revert(this)}};n(U,"$Dated");let O=U;const Je=a(O),V=class V extends k{constructor(){super(...arguments),this.anchor=re(this.anchor).attrs({className:"pa-shelfmark"})``}defines(e){super.defines(e),e.classes.add(this,"pa-shelfmark")}};n(V,"$Shelfmark");let u=V;const Ke=a(u),X=class X extends p{write(){const e=this.book,s=e?.subject;if(s===void 0||s.means?.identifier===e?.means?.identifier)return null;const t=a(pe),r=a(ce);return i.jsxs(i.Fragment,{children:["filed under"," ",i.jsxs(t,{children:[i.jsx(r,{children:s.means?.identifier}),s.name]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-filed")}};n(X,"$Filed");let P=X;const Y=class Y extends p{write(){const e=this.book?.author;if(e===void 0)return null;const s=a(pe),t=a(ce);return i.jsxs(i.Fragment,{children:["by"," ",i.jsxs(s,{children:[i.jsx(t,{children:e.means?.identifier}),e.name]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-byline")}};n(Y,"$Byline");let W=Y;const L=class L extends $e{$DougsCover(...e){this.$Format(...e);const s=a(Re),t=a(Ge);this.text.add(this,i.jsx(s,{}),i.jsx(t,{}))}defines(e){super.defines(e),e.text.append(this,...this.text)}erase(e){super.erase(e),e.text.revert(this)}};n(L,"$DougsCover");let F=L;const Ne=a(P),Re=Ne,Te=a(W),Ge=Te,Qe=a(F),_=class _ extends l{get paragraph(){return this.parent instanceof p?this.parent:void 0}get content(){const e=this.paragraph;return e?.annotations.expressed(k)??e?.text.find(ie)[0]?.annotations.expressed(k)}get meant(){const e=this.content?.identifier;if(!(e===void 0||e===""))return this.book?.text.find(ke).find(s=>s.mention?.identifier===e)}defines(e){e.classes.add(this,"pa-entry");const s=this.meant;s!==void 0&&this.book?.annotations.expressed(oe)?.open===s&&e.classes.add(this,"pa-open"),this.paragraph?.text.find(ie).some(t=>t.is(u))===!0&&e.classes.add(this,"pa-answer")}erase(e){e.classes.revert(this)}note(){const e=this.meant?.annotations.find(T)??[];return e.length===0?null:i.jsx("span",{className:"pd-appended",children:e.map(s=>s.$type).join(" ")})}};n(_,"$Entry");let x=_;const ee=class ee extends we{$Bound(){const e=a(Ee);for(const s of this.chapter?.text.find(R)??[])for(const t of s.text.find(p))t.is(x)||t.annotations.add(this,i.jsx(e,{}));super.$Bound()}};n(ee,"$DougsTableOfContents");let N=ee;const Me=a(x),Ee=Me,Se=a(N);export{g as $,qe as A,Qe as C,Je as D,He as L,Ke as S,Se as T,y as a,b};
