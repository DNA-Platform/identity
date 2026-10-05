var w=Object.defineProperty;var a=(x,e)=>w(x,"name",{value:e,configurable:!0});import{$ as t,y,s as k,t as i,z,j as s,o as v,W as j,R,u as T,h as W,B as g,D as u,k as B}from"./index-B5s4JsO8.js";const p=class p extends y{constructor(){super(...arguments),this.font="'Cormorant Garamond', Georgia, serif",this.size="1.25rem",this.leading="1.6",this.measure="40rem",this.space="1.5rem",this.ink="#14262b",this.paper="#f5f1e8",this.link="#1c6a71",this.style=k.div`${this.parts()}`}parts(){return[this.page(),this.levels(),this.links(),this.apparatus()]}page(){return i`
            font-family: ${({theme:e})=>e.font};
            font-size: ${({theme:e})=>e.size};
            font-weight: 500;
            line-height: ${({theme:e})=>e.leading};
            color: ${({theme:e})=>e.ink};
            background: ${({theme:e})=>e.paper};
            min-height: 100vh;
            box-sizing: border-box;
            padding: ${({theme:e})=>e.space};
            .pd-book { max-width: ${({theme:e})=>e.measure}; margin-inline: auto; }
        `}levels(){return i`
            .pd-chapter { margin-block: calc(2 * ${({theme:e})=>e.space}); }
            .pd-section { margin-block: ${({theme:e})=>e.space}; }
            .pd-paragraph { margin-block: ${({theme:e})=>e.space}; }
            .pd-title { font-size: calc(2 * ${({theme:e})=>e.size}); font-weight: 300; letter-spacing: 0.08em; margin-block-end: ${({theme:e})=>e.space}; }
            .pd-heading { font-weight: 600; margin-block: ${({theme:e})=>e.space} 0; }
            .pd-line { white-space: pre-wrap; }
            .pd-word { overflow-wrap: break-word; }
            .pd-image img { display: block; max-width: 100%; height: auto; }
            .pd-code { font-family: ui-monospace, monospace; font-size: calc(0.75 * ${({theme:e})=>e.size}); line-height: 1.5; white-space: pre; overflow-x: auto; padding: ${({theme:e})=>e.space}; background: color-mix(in srgb, ${({theme:e})=>e.ink} 6%, ${({theme:e})=>e.paper}); }
        `}links(){return i`
            .pa-reference { color: ${({theme:e})=>e.link}; text-decoration-color: ${({theme:e})=>e.link}; text-underline-offset: 0.15em; }
            .pa-self-reference { color: inherit; text-decoration: none; }
            .pa-content { color: ${({theme:e})=>e.link}; }
        `}apparatus(){return i`
            .pd-paragraph.pd-byline { margin-block: 0; text-align: end; font-size: calc(0.8 * ${({theme:e})=>e.size}); letter-spacing: 0.08em; }
            .pd-byline .pa-reference { text-decoration: none; }
            .pa-table-of-contents .pd-section { width: max-content; max-width: 100%; }
            .pa-table-of-contents .pd-paragraph { display: flex; align-items: baseline; }
            .pd-container.pa-shelfmark { margin-inline-start: auto; padding-inline-start: calc(2 * ${({theme:e})=>e.space}); }
            .pd-word.pa-shelfmark .pa-content { position: absolute; width: 1px; height: 1px; overflow: hidden; clip-path: inset(50%); white-space: nowrap; }
            .pd-word.pa-shelfmark::after { content: ''; display: inline-block; width: calc(0.45 * ${({theme:e})=>e.size}); height: calc(0.45 * ${({theme:e})=>e.size}); border: 1px solid ${({theme:e})=>e.link}; }
            .pd-dateline { display: block; margin-block-start: ${({theme:e})=>e.space}; text-align: end; font-size: calc(0.8 * ${({theme:e})=>e.size}); font-style: italic; color: color-mix(in srgb, ${({theme:e})=>e.ink} 64%, ${({theme:e})=>e.paper}); }
        `}};a(p,"$DougsTheme");let n=p;const C=t(n),d=class d extends v{$Define(){super.$Define(),this.classes.add(this,"pd-byline")}write(){const e=this.book;if(e===void 0)return null;const b=t(j),$=t(R);return s.jsxs(s.Fragment,{children:["by"," ",s.jsxs(b,{children:[s.jsx($,{children:e.author?.means?.identifier}),e.author?.name]})]})}};a(d,"$Byline");let r=d;const F=t(r),G=F,h=class h extends z{write(){const e=t(G);return s.jsxs(s.Fragment,{children:[s.jsx(e,{chapter:this.cover}),super.write()]})}turn(){this.bookmark!==void 0&&this.bookmark===this.cover?window.scrollTo(0,0):super.turn()}};a(h,"$DougsLibrary");let o=h;const N=t(o);t(N,T)(C);const m=class m extends W{get name(){return g.reference(u.copy(this.text))?.name??""}get date(){return g.reference(u.copy(this.text))?.identifier}note(){return s.jsx("time",{className:"pd-dateline",dateTime:this.date,children:this.name})}defines(e){e.classes.add(this,"pa-dated")}erase(e){e.classes.revert(this)}};a(m,"$Dated");let c=m;const E=t(c),f=class f extends B{constructor(){super(...arguments),this.anchor=k(this.anchor).attrs({className:"pa-shelfmark"})``}defines(e){super.defines(e),e.classes.add(this,"pa-shelfmark")}};a(f,"$Shelfmark");let l=f;const P=t(l);export{o as $,E as D,P as S,n as a};
