var p=Object.defineProperty;var i=(c,e)=>p(c,"name",{value:e,configurable:!0});import{$ as o,z as l,s as d,u as a,B as h,v as m}from"./index-BG-LiBlq.js";const s=class s extends l{constructor(){super(...arguments),this.font="'Cormorant Garamond', Georgia, serif",this.size="1.25rem",this.leading="1.6",this.measure="40rem",this.space="1.5rem",this.ink="#14262b",this.paper="#f5f1e8",this.link="#1c6a71",this.style=d.div`${this.parts()}`}parts(){return[this.page(),this.levels(),this.links()]}page(){return a`
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
        `}levels(){return a`
            .pd-chapter { margin-block: calc(2 * ${({theme:e})=>e.space}); }
            .pd-section { margin-block: ${({theme:e})=>e.space}; }
            .pd-paragraph { margin-block: ${({theme:e})=>e.space}; }
            .pd-title { font-size: calc(2 * ${({theme:e})=>e.size}); font-weight: 300; letter-spacing: 0.08em; margin-block-end: ${({theme:e})=>e.space}; }
            .pd-heading { font-weight: 600; margin-block: ${({theme:e})=>e.space} 0; }
            .pd-line { white-space: pre-wrap; }
            .pd-word { overflow-wrap: break-word; }
            .pd-image img { display: block; max-width: 100%; height: auto; }
            .pd-code { font-family: ui-monospace, monospace; font-size: calc(0.75 * ${({theme:e})=>e.size}); line-height: 1.5; white-space: pre; overflow-x: auto; padding: ${({theme:e})=>e.space}; background: color-mix(in srgb, ${({theme:e})=>e.ink} 6%, ${({theme:e})=>e.paper}); }
        `}links(){return a`
            .pa-reference { color: ${({theme:e})=>e.link}; text-decoration-color: ${({theme:e})=>e.link}; text-underline-offset: 0.15em; }
            .pa-self-reference { color: inherit; text-decoration: none; }
            .pa-content { color: ${({theme:e})=>e.link}; }
        `}};i(s,"$DougsTheme");let t=s;const g=o(t),r=class r extends h{};i(r,"$DougsLibrary");let n=r;const f=o(n);o(f,m)(g);export{n as $,t as a};
