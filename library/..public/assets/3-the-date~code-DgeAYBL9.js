var b=Object.defineProperty;var i=(f,e)=>b(f,"name",{value:e,configurable:!0});import{$ as s,z as x,s as $,u as n,B as w,j as t,p as z,W as v,R as y,v as j,i as R,D as m,E as g}from"./index-COUNQOOg.js";const l=class l extends x{constructor(){super(...arguments),this.font="'Cormorant Garamond', Georgia, serif",this.size="1.25rem",this.leading="1.6",this.measure="40rem",this.space="1.5rem",this.ink="#14262b",this.paper="#f5f1e8",this.link="#1c6a71",this.style=$.div`${this.parts()}`}parts(){return[this.page(),this.levels(),this.links(),this.apparatus()]}page(){return n`
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
        `}levels(){return n`
            .pd-chapter { margin-block: calc(2 * ${({theme:e})=>e.space}); }
            .pd-section { margin-block: ${({theme:e})=>e.space}; }
            .pd-paragraph { margin-block: ${({theme:e})=>e.space}; }
            .pd-title { font-size: calc(2 * ${({theme:e})=>e.size}); font-weight: 300; letter-spacing: 0.08em; margin-block-end: ${({theme:e})=>e.space}; }
            .pd-heading { font-weight: 600; margin-block: ${({theme:e})=>e.space} 0; }
            .pd-line { white-space: pre-wrap; }
            .pd-word { overflow-wrap: break-word; }
            .pd-image img { display: block; max-width: 100%; height: auto; }
            .pd-code { font-family: ui-monospace, monospace; font-size: calc(0.75 * ${({theme:e})=>e.size}); line-height: 1.5; white-space: pre; overflow-x: auto; padding: ${({theme:e})=>e.space}; background: color-mix(in srgb, ${({theme:e})=>e.ink} 6%, ${({theme:e})=>e.paper}); }
        `}links(){return n`
            .pa-reference { color: ${({theme:e})=>e.link}; text-decoration-color: ${({theme:e})=>e.link}; text-underline-offset: 0.15em; }
            .pa-self-reference { color: inherit; text-decoration: none; }
            .pa-content { color: ${({theme:e})=>e.link}; }
        `}apparatus(){return n`
            .pd-paragraph.pd-byline { margin-block: 0; text-align: end; font-size: calc(0.8 * ${({theme:e})=>e.size}); letter-spacing: 0.08em; }
            .pd-byline .pa-reference { text-decoration: none; }
            .pd-dateline { display: block; margin-block-start: ${({theme:e})=>e.space}; text-align: end; font-size: calc(0.8 * ${({theme:e})=>e.size}); font-style: italic; color: color-mix(in srgb, ${({theme:e})=>e.ink} 64%, ${({theme:e})=>e.paper}); }
        `}};i(l,"$DougsTheme");let a=l;const T=s(a),p=class p extends z{$Define(){super.$Define(),this.classes.add(this,"pd-byline")}write(){const e=this.book;if(e===void 0)return null;const u=s(v),k=s(y);return t.jsxs(t.Fragment,{children:["by"," ",t.jsxs(u,{children:[t.jsx(k,{children:e.author?.means?.identifier}),e.author?.name]})]})}};i(p,"$Byline");let r=p;const W=s(r),B=W,d=class d extends w{write(){const e=s(B);return t.jsxs(t.Fragment,{children:[t.jsx(e,{chapter:this.cover}),super.write()]})}turn(){this.bookmark!==void 0&&this.bookmark===this.cover?window.scrollTo(0,0):super.turn()}};i(d,"$DougsLibrary");let o=d;const E=s(o);s(E,j)(T);const h=class h extends R{get name(){return m.reference(g.copy(this.text))?.name??""}get date(){return m.reference(g.copy(this.text))?.identifier}note(){return t.jsx("time",{className:"pd-dateline",dateTime:this.date,children:this.name})}defines(e){e.classes.add(this,"pa-dated")}erase(e){e.classes.revert(this)}};i(h,"$Dated");let c=h;const A=s(c);export{o as $,A as D,a};
