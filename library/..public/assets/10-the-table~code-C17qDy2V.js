var Q=Object.defineProperty;var i=(L,e)=>Q(L,"name",{value:e,configurable:!0});import{$ as t,w as U,s as w,m as n,n as S,h as H,q as V,x as X,j as a,i as o,M as Y,r as Z,f as I,y as P,z as q,p as h,B as _,D as A,W as J,R as K,E as ee,F as te,g as se}from"./index-2Y9Y4Gtg.js";const z=class z extends U{constructor(){super(...arguments),this.font="'Cormorant Garamond', Georgia, serif",this.size="1.25rem",this.leading="1.6",this.measure="40rem",this.space="1.5rem",this.ink="#14262b",this.paper="#f5f1e8",this.link="#1c6a71",this.bar="#0c1b1f",this.bright="#e8e4df",this.tint="#d4eef8",this.style=w.div`${this.parts()}`}parts(){return[this.page(),this.levels(),this.links(),this.figures(),this.apparatus()]}page(){return n`
            font-family: ${({theme:e})=>e.font};
            font-size: ${({theme:e})=>e.size};
            font-weight: 500;
            line-height: ${({theme:e})=>e.leading};
            color: ${({theme:e})=>e.ink};
            background: ${({theme:e})=>e.paper};
            min-height: 100vh;
            .pd-book { padding: ${({theme:e})=>e.space}; }
        `}levels(){return n`
            .pd-chapter { margin-block: calc(2 * ${({theme:e})=>e.space}); }
            .pd-section { margin-block: ${({theme:e})=>e.space}; }
            .pd-paragraph { margin-block: ${({theme:e})=>e.space}; max-width: ${({theme:e})=>e.measure}; }
            .pd-title { font-size: calc(2 * ${({theme:e})=>e.size}); font-weight: 300; letter-spacing: 0.08em; margin-block-end: ${({theme:e})=>e.space}; }
            .pd-heading { font-weight: 600; margin-block: ${({theme:e})=>e.space} 0; }
            .pd-line { white-space: pre-wrap; }
            .pd-word { overflow-wrap: break-word; }
        `}links(){return n`
            .pa-reference { color: ${({theme:e})=>e.link}; text-decoration-color: ${({theme:e})=>e.link}; text-underline-offset: 0.15em; }
            .pa-self-reference { color: inherit; text-decoration: none; }
            .pa-content { color: ${({theme:e})=>e.link}; }
        `}figures(){return n`
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
        `}apparatus(){return n`
            .pd-library-title .pa-reference, .pd-byline .pa-reference, .pd-filed .pa-reference { text-decoration: none; }
            .pd-byline, .pd-filed { font-size: calc(0.8 * ${({theme:e})=>e.size}); letter-spacing: 0.04em; }
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
        `}};i(z,"$DougsTheme");let f=z;const ae=t(f),C=class C extends S{get pages(){return super.pages.filter(e=>e!==this.book?.cover&&e!==this.book?.table)}get open(){const e=this.book;if(e===void 0)return;const s=e.$bookmark,r=e.bookmark??(s===void 0?void 0:this.pages.find(l=>l.text.find(H).some(O=>O.mention?.identifier===s)));return r!==void 0&&this.pages.includes(r)?r:e.synopsis}};i(C,"$Paged");let m=C;const ie=t(m),d=class d extends V{defines(e){for(const s of e.annotations.after(this))s instanceof d&&e.annotations.express(s,!1);super.defines(e)}};i(d,"$Frame");let c=d;const D=class D extends c{constructor(){super(...arguments),this.style=w.div`
        .pd-book.pa-side-bar { padding: 0; }
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
        .pa-side-bar .pd-chapter.pa-table-of-contents .pa-entry.pa-open .pa-content { color: ${({theme:e})=>e.tint}; opacity: 1; }

        @media (min-width: 48rem) {
            .pd-book.pa-side-bar {
                position: fixed;
                inset: 0;
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
            .pa-side-bar .pd-chapter.pa-page { grid-area: page; margin: 0; padding: calc(2 * ${({theme:e})=>e.space}) calc(3 * ${({theme:e})=>e.space}); overflow: auto; }
        }
    `}defines(e){super.defines(e),e.classes.add(this,"pa-side-bar")}erase(e){super.erase(e),e.classes.revert(this)}};i(D,"$SideBar");let b=D;t(c);const re=t(b),R=class R extends o{write(){const e=t(Y);return a.jsx(e,{children:"[Dougs Library](/dougs-library/)"})}$Define(){super.$Define(),this.classes.add(this,"pd-library-title")}};i(R,"$LibraryTitle");let g=R;const W=class W extends X{write(){const e=t(oe);return a.jsxs(a.Fragment,{children:[a.jsx(e,{chapter:this.cover}),super.write()]})}$Define(){super.$Define();const e=t(re),s=t(ie);this.annotations.add(this,a.jsx(e,{}),a.jsx(s,{}))}};i(W,"$DougsLibrary");let u=W;const ne=t(g),oe=ne,ce=t(u);t(ce,Z)(ae);const B=class B extends I{get name(){return P.reference(q.copy(this.text))?.name??""}get date(){return P.reference(q.copy(this.text))?.identifier}note(){return a.jsx("time",{className:"pd-dateline",dateTime:this.date,children:this.name})}defines(e){e.classes.add(this,"pa-dated")}erase(e){e.classes.revert(this)}};i(B,"$Dated");let x=B;const ue=t(x),F=class F extends h{constructor(){super(...arguments),this.anchor=w(this.anchor).attrs({className:"pa-shelfmark"})``}defines(e){super.defines(e),e.classes.add(this,"pa-shelfmark")}};i(F,"$Shelfmark");let $=F;const xe=t($),T=class T extends o{write(){const e=this.book,s=e?.subject;if(s===void 0||s.means?.identifier===e?.means?.identifier)return null;const r=t(J),l=t(K);return a.jsxs(a.Fragment,{children:["filed under"," ",a.jsxs(r,{children:[a.jsx(l,{children:s.means?.identifier}),s.name]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-filed")}};i(T,"$Filed");let k=T;const M=class M extends o{write(){const e=this.book?.author;if(e===void 0)return null;const s=t(J),r=t(K);return a.jsxs(a.Fragment,{children:["by"," ",a.jsxs(s,{children:[a.jsx(r,{children:e.means?.identifier}),e.name]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-byline")}};i(M,"$Byline");let y=M;const E=class E extends _{$DougsCover(...e){this.$Format(...e);const s=t(de),r=t(he);this._filed=A.chemical(a.jsx(s,{})),this._byline=A.chemical(a.jsx(r,{}))}defines(e){super.defines(e),e.text.append(this,this._filed,this._byline)}erase(e){super.erase(e),e.text.revert(this)}};i(E,"$DougsCover");let v=E;const pe=t(k),de=pe,le=t(y),he=le,$e=t(v),G=class G extends I{get paragraph(){return this.parent instanceof o?this.parent:void 0}get content(){const e=this.paragraph;return e?.annotations.expressed(h)??e?.text.find(te)[0]?.annotations.expressed(h)}get meant(){const e=this.content?.identifier;if(!(e===void 0||e===""))return this.book?.text.find(se).find(s=>s.mention?.identifier===e)}defines(e){e.classes.add(this,"pa-entry");const s=this.meant;s!==void 0&&this.book?.annotations.expressed(S)?.open===s&&e.classes.add(this,"pa-open")}erase(e){e.classes.revert(this)}};i(G,"$Entry");let p=G;const N=class N extends ee{$Bound(){const e=t(me);for(const s of this.chapter?.text.find(H)??[])for(const r of s.text.find(o))r.is(p)||r.annotations.append(this,a.jsx(e,{}));super.$Bound()}};i(N,"$DougsTableOfContents");let j=N;const fe=t(p),me=fe,ke=t(j);export{u as $,$e as C,ue as D,xe as S,ke as T,f as a};
