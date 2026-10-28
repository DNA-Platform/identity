var lr=Object.defineProperty;var r=(p,e)=>lr(p,"name",{value:e,configurable:!0});import{jsx as a,jsxs as c,Fragment as m}from"react/jsx-runtime";import{$ as n,$check as l,selection as z,inert as Es}from"@dna-platform/chemistry";import{$Word as j,specify as h,AnnotationSpecification as $,$Book as _n,$Annotation as k,$Paragraph as f,$Section as M,html as y,$Format as X,$Append as Rn,$Chapter as v,binder as I,$Svg as zt,Word as C,Code as hr,$Date as Gs,$Author as Us,Reference as w,$Subject as Fn,$Topic as Sn,$Reference as Zs,$Image as fr,$Composition as gr,$Cover as D,$Synopsis as Nn,CoverSpecification as br,$Content as In,$Parenthetical as ur,$TableOfContents as Q,$Theme as mr,$Paginated as $r,Self as Tn,Theme as qs,reflection as kr,BookSpecification as xr,$Heading as En,$Referent as Ot,$SelfReference as vr,$Means as yr,Referent as wr,identifier as Gn,SectionSpecification as zr,$Code as Un,Chapter as Dt,Title as jt,Author as Ct,Subject as Pt,About as Mt,Paragraph as At,Svg as Nt,Autobiography as Or}from"@dna-platform/public";import{css as g}from"styled-components";const to=class to extends j{get on(){return[this.book.$is].flat().includes(this.$annotation)}$Switch(...e){this.$Writing(...e),this.containers.replace(this,"span","button")}container(e){return super.container({type:"button","aria-pressed":this.on,onClick:r(()=>this.press(),"onClick"),...e})}press(){const e=this.book,t=[e.$is].flat();e.$is=this.on?t.filter(o=>o!==this.$annotation):[this.$annotation,...t]}$Define(){super.$Define(),this.classes.add(this,"pd-switch")}};r(to,"$Switch");let ee=to;const so=class so extends ee{press(){const e=this.book,t=[e.$is].flat().filter(o=>!this.$family.includes(o));e.$is=[this.$annotation,...t]}};r(so,"$Tab");let fe=so;const Zn=n(ee),Dr=n(fe);var jr=Object.defineProperty,Cr=Object.getOwnPropertyDescriptor,Pr=r((p,e,t,o)=>{for(var s=Cr(e,t),i=p.length-1,d;i>=0;i--)(d=p[i])&&(s=d(e,t,s)||s);return s&&jr(e,t,s),s},"__decorateClass$k");const oo=class oo extends ${$saidOfABook(e){l(e instanceof _n,"this is said of a book, and here it is said of something else")}};r(oo,"OfABookSpecification");let L=oo;Pr([h("this is said of a book")],L.prototype,"$saidOfABook");var Mr=Object.defineProperty,Ar=Object.getOwnPropertyDescriptor,Nr=r((p,e,t,o)=>{for(var s=Ar(e,t),i=p.length-1,d;i>=0;i--)(d=p[i])&&(s=d(e,t,s)||s);return s&&Mr(e,t,s),s},"__decorateClass$j");const vt=class vt extends k{constructor(){super(...arguments),this.specification=new L}defines(e){for(const t of e.annotations.after(this))t instanceof vt&&e.annotations.express(t,!1);e.classes.add(this,"pa-file-panel-state")}erase(e){e.classes.revert(this)}};r(vt,"$FilePanelState");let te=vt;const ao=class ao extends te{defines(e){super.defines(e),e.classes.add(this,"pa-code-forward")}};r(ao,"$CodeForward");let Lt=ao;const no=class no extends te{defines(e){super.defines(e),e.classes.add(this,"pa-words-forward")}};r(no,"$WordsForward");let Bt=no;const ro=class ro extends te{defines(e){super.defines(e),e.classes.add(this,"pa-split")}};r(ro,"$Split");let _t=ro;const io=class io extends k{constructor(){super(...arguments),this.specification=new L}defines(e){e.classes.add(this,"pa-light-code")}erase(e){e.classes.revert(this)}};r(io,"$LightCode");let Rt=io;const po=class po extends k{constructor(){super(...arguments),this.specification=new L}defines(e){e.classes.add(this,"pa-wrapped-code")}erase(e){e.classes.revert(this)}};r(po,"$WrappedCode");let Ft=po;const co=class co extends k{constructor(){super(...arguments),this.specification=new L}defines(e){e.classes.add(this,"pa-numbered-code")}erase(e){e.classes.revert(this)}};r(co,"$NumberedCode");let St=co;const lo=class lo extends k{constructor(){super(...arguments),this.specification=new Ie}defines(e){e.classes.add(this,"pa-brief")}erase(e){e.classes.revert(this)}};r(lo,"$Brief");let Et=lo;const ho=class ho extends ${$saidOfAParagraph(e){l(e instanceof f,"brief is said of a paragraph, and this is not one")}};r(ho,"BriefSpecification");let Ie=ho;Nr([h("brief is said of a paragraph")],Ie.prototype,"$saidOfAParagraph");n(te);const Ys=n(Lt),qn=n(Bt),ge=n(_t),Ir=n(Rt),Tr=n(Ft),Hr=n(St);n(Et);const fo=class fo extends f{constructor(){super(...arguments),this.style=z.div`
        .pd-book &.pd-paragraph {
            display: flex;
            flex-direction: column;
            align-items: stretch;
            gap: calc(${({theme:e})=>e.space} / 12);
            margin: 0;
            padding: calc(${({theme:e})=>e.space} * 0.4167) 0;
            background: linear-gradient(90deg, color-mix(in oklch, var(--night) 82%, white) 0%, var(--night) 22%);
            box-shadow: inset 1px 0 0 rgba(255, 255, 255, 0.08);
            transition: background ${({theme:e})=>e.beat} ease;
        }
        .pd-book & .pd-file-tab {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: calc(${({theme:e})=>e.space} * 0.4167);
            padding: calc(${({theme:e})=>e.space} * 0.4167) 0 calc(${({theme:e})=>e.space} / 3);
            border: 0;
            border-inline-start: 2px solid transparent;
            background: none;
            font-family: ${({theme:e})=>e.mono};
            font-size: calc(0.7857 * ${({theme:e})=>e.size});
            font-weight: 500;
            line-height: 1;
            letter-spacing: 0.04em;
            color: color-mix(in oklch, var(--glow) 66%, var(--night));
            cursor: pointer;
            transition: background ${({theme:e})=>e.beat} ease, color ${({theme:e})=>e.beat} ease, border-color ${({theme:e})=>e.beat} ease;
        }
        .pd-book & .pd-file-tab .pd-tab-name { writing-mode: vertical-rl; }
        .pd-book & .pd-file-tab .pd-drawing { width: calc(0.9286 * ${({theme:e})=>e.size}); height: calc(0.9286 * ${({theme:e})=>e.size}); color: #9aa4b3; }
        .pd-book & .pd-file-tab svg { display: block; width: 100%; height: 100%; }
        .pd-book & .pd-skeleton { display: flex; flex-direction: column; align-items: flex-start; gap: 3px; width: calc(${({theme:e})=>e.space} * 1.0833); margin-block-start: 2px; opacity: 0.55; transition: opacity ${({theme:e})=>e.beat} ease; }
        .pd-book & .pd-skeleton i { display: block; height: 2px; border-radius: 1px; background: color-mix(in oklch, var(--brass) 60%, var(--glow)); }
        .pd-book & .pd-file-tab:hover { color: var(--glow); background: var(--dusk); }
        .pd-book & .pd-word.pd-switch[aria-pressed='true'] { color: color-mix(in oklch, var(--glow) 66%, var(--night)); border-color: transparent; background: none; }
        .pd-book.pa-split & .pd-file-tab[aria-pressed='true'] { color: var(--glow); border-inline-start-color: var(--foot); background: var(--dusk); }
        .pd-book & .pd-file-tab:hover .pd-skeleton, .pd-book.pa-split & .pd-file-tab[aria-pressed='true'] .pd-skeleton { opacity: 0.9; }
    `}get spread(){return this.chapter?.annotations.expressed(T)}$FileRail(...e){this.$Writing(...e),this.containers.replace(this,"span",this.style)}write(){const e=n(Qs),t=this.spread;if(t!==void 0)return t.files.map(o=>a(e,{file:o,annotation:ge,family:t.filePanelStates,skeleton:!0},pe(o)))}$Define(){super.$Define(),this.classes.add(this,"pd-file-rail")}};r(fo,"$FileRail");let Gt=fo;const go=class go extends fe{constructor(){super(...arguments),this.style=z.button`
        .pd-book & {
            position: relative;
            display: block;
            width: 100%;
            height: 100%;
            padding: 0;
            border: 0;
            border-radius: 0;
            border-inline-start: thin solid #e6e2d8;
            background: linear-gradient(90deg, #f3f1eb 0%, #fbfaf6 10px);
            cursor: pointer;
            transition: background ${({theme:e})=>e.beat} ease;
        }
        .pd-book &:hover { background: linear-gradient(90deg, #ece9e1 0%, #ffffff 10px); }
        .pd-book & .pd-skeleton { position: absolute; top: calc(${({theme:e})=>e.space} * 0.5833); left: 5px; display: flex; flex-direction: column; gap: 3px; width: 8px; opacity: 0.7; }
        .pd-book & .pd-skeleton i { display: block; height: 2px; border-radius: 1px; background: #cfcbc0; }
    `}get paragraphs(){return(this.chapter?.text.find(M)??[]).flatMap(e=>e.text.find(f)).slice(0,16).map(e=>y.copy(e.text))}$FilePanelGrip(...e){this.$Switch(...e),this.containers.replace(this,"button",this.style)}write(){return a("span",{className:"pd-skeleton",children:this.paragraphs.map((e,t)=>a("i",{style:{width:`${Math.max(25,Math.min(100,e.length/4))}%`}},t))})}$Define(){super.$Define(),this.classes.add(this,"pd-file-panel-grip")}};r(go,"$FilePanelGrip");let Ut=go;const Wr=n(Gt),Lr=n(Ut),bo=class bo extends f{constructor(){super(...arguments),this.style=z.div`
        .pd-book &.pd-paragraph {
            display: grid;
            grid-template-rows: auto minmax(0, 1fr);
            min-width: 0;
            margin: 0;
            overflow: hidden;
            contain: size;
            background: linear-gradient(90deg, color-mix(in oklch, var(--night) 90%, white) 0%, var(--night) 36px);
            color: var(--glow);
            box-shadow: -10px 0 18px -16px rgba(43, 54, 60, 0.5);
            transition: background ${({theme:e})=>e.beat} ease, color ${({theme:e})=>e.beat} ease;
        }
        .pd-book.pa-code-forward & { box-shadow: none; }
        .pd-book & .pd-file-listings { display: grid; grid-template-rows: minmax(0, 1fr); align-content: start; min-height: 0; overflow: hidden; }
        .pd-book & .pd-file-listings .pd-container { display: contents; }
        .pd-book & .pd-paragraph.pd-file-listing { display: none; margin: 0; padding: 0; min-height: 0; }
        .pd-book & .pd-file-listing.pa-open { display: block; overflow: auto; scrollbar-width: thin; scrollbar-color: transparent transparent; transition: scrollbar-color ${({theme:e})=>e.beat} ease; }
        .pd-book & .pd-file-listing.pa-open:hover { scrollbar-color: var(--dim) transparent; }
        .pd-book & .pd-file-listing .pd-word { display: none; }
        .pd-book & .pd-file-listing .pd-code {
            margin: 0;
            padding: calc(${({theme:e})=>e.space} * 0.5833) 0;
            border-radius: 0;
            background: transparent;
            font-family: ${({theme:e})=>e.mono};
            font-size: calc(0.8571 * ${({theme:e})=>e.size});
            line-height: 1.7;
            white-space: normal;
            color: var(--glow);
            cursor: zoom-in;
        }
        .pd-book.pa-code-forward & .pd-file-listing .pd-code { cursor: default; }
        .pd-book & .pd-file-listing .pd-code code { background: transparent; color: inherit; }
        .pd-book & .pd-code-line { display: block; padding-inline-end: calc(${({theme:e})=>e.space} * 0.75); white-space: pre; }
        .pd-book.pa-wrapped-code & .pd-code-line { white-space: pre-wrap; padding-inline-start: calc(${({theme:e})=>e.space} * 2.4167); text-indent: calc(${({theme:e})=>e.space} * -2.4167); }
        .pd-book & .pd-code-line::before { content: attr(data-line); display: inline-block; width: calc(${({theme:e})=>e.space} * 1.8333); padding-inline-end: calc(${({theme:e})=>e.space} * 0.5833); text-align: end; color: var(--dim); user-select: none; text-indent: 0; }
        .pd-book:not(.pa-numbered-code) & .pd-code-line::before { content: ''; width: calc(${({theme:e})=>e.space} * 0.5833); padding: 0; }
        .pd-book.pa-light-code & .hljs-keyword, .pd-book.pa-light-code & .hljs-built_in, .pd-book.pa-light-code & .hljs-literal { color: #5a4fa8; }
        .pd-book.pa-light-code & .hljs-string, .pd-book.pa-light-code & .hljs-regexp, .pd-book.pa-light-code & .hljs-number { color: #2f7f6e; }
        .pd-book.pa-light-code & .hljs-title, .pd-book.pa-light-code & .hljs-type, .pd-book.pa-light-code & .hljs-tag, .pd-book.pa-light-code & .hljs-name, .pd-book.pa-light-code & .hljs-attr { color: #23407a; }
        .pd-book.pa-light-code & .hljs-comment, .pd-book.pa-light-code & .hljs-meta { color: #8a94a3; }
        @media (max-width: ${({theme:e})=>e.narrow}) {
            .pd-book & { box-shadow: none; }
        }
    `}get spread(){return this.chapter?.annotations.expressed(T)}$FilePanel(...e){this.$Writing(...e),this.containers.replace(this,"span",this.style)}write(){const e=n(Rr),t=n(si),o=this.spread;if(o!==void 0)return c(m,{children:[a(e,{chapter:this.chapter}),a("div",{className:"pd-file-listings",children:o.files.map(s=>a(t,{file:s,filePanelState:Ys,family:o.filePanelStates},pe(s)))})]})}$Define(){super.$Define(),this.classes.add(this,"pd-file-panel")}};r(bo,"$FilePanel");let Zt=bo;const uo=class uo extends f{constructor(){super(...arguments),this.style=z.div`
        .pd-book &.pd-paragraph {
            display: flex;
            align-items: stretch;
            gap: 1px;
            margin: 0;
            padding: 0 0 0 2px;
            background: linear-gradient(180deg, color-mix(in oklch, var(--dusk) 88%, white) 0%, var(--dusk) 100%);
            border-block-end: thin solid color-mix(in oklch, var(--foot) 28%, var(--dusk));
        }
        .pd-book & .pd-file-tab {
            display: flex;
            align-items: center;
            gap: calc(${({theme:e})=>e.space} * 0.2917);
            padding: calc(${({theme:e})=>e.space} * 0.375) calc(${({theme:e})=>e.space} * 0.5833) calc(${({theme:e})=>e.space} / 3) calc(${({theme:e})=>e.space} / 2);
            border: 0;
            border-block-start: 2px solid transparent;
            background: none;
            font-family: ${({theme:e})=>e.mono};
            font-size: calc(0.8571 * ${({theme:e})=>e.size});
            font-weight: 500;
            line-height: 1;
            color: color-mix(in oklch, var(--glow) 62%, var(--night));
            cursor: pointer;
            transition: background ${({theme:e})=>e.beat} ease, color ${({theme:e})=>e.beat} ease, border-color ${({theme:e})=>e.beat} ease;
        }
        .pd-book & .pd-file-tab .pd-drawing { width: calc(0.9286 * ${({theme:e})=>e.size}); height: calc(0.9286 * ${({theme:e})=>e.size}); color: #9aa4b3; }
        .pd-book & .pd-file-tab svg { display: block; width: 100%; height: 100%; }
        .pd-book & .pd-file-tab:hover { color: var(--glow); }
        .pd-book & .pd-file-tab[aria-pressed='true'] { color: var(--glow); background: var(--night); border-block-start-color: var(--foot); }
        .pd-book & .pd-file-tab[aria-pressed='true'] .pd-drawing { color: var(--colour); }
        .pd-book & .pd-words-only, .pd-book & .pd-dock { display: flex; align-items: center; }
        .pd-book & .pd-dock { margin-inline-start: auto; }
        .pd-book & .pd-words-only .pd-word.pd-switch, .pd-book & .pd-dock .pd-word.pd-switch {
            display: flex;
            align-items: center;
            gap: calc(${({theme:e})=>e.space} / 4);
            padding: 0 calc(${({theme:e})=>e.space} / 2);
            border: 0;
            border-radius: 0;
            background: none;
            font-family: ${({theme:e})=>e.font};
            font-size: calc(0.75 * ${({theme:e})=>e.size});
            font-weight: 500;
            line-height: 1;
            letter-spacing: 0.06em;
            text-transform: uppercase;
            color: color-mix(in oklch, var(--glow) 62%, var(--night));
            cursor: pointer;
            transition: color ${({theme:e})=>e.beat} ease;
        }
        .pd-book & .pd-dock .pd-word.pd-switch { color: var(--brass); }
        .pd-book & .pd-words-only .pd-word.pd-switch:hover, .pd-book & .pd-dock .pd-word.pd-switch:hover { color: var(--glow); }
        .pd-book & .pd-dock .pd-word.pd-switch::before { content: ''; width: 9px; height: 9px; border: 1.5px solid currentColor; border-radius: 1px; box-shadow: 3px 3px 0 -1.5px currentColor; }
        .pd-book & .pd-to-split { display: none; }
        .pd-book.pa-code-forward & .pd-to-full, .pd-book.pa-code-forward & .pd-words-only { display: none; }
        .pd-book.pa-code-forward & .pd-to-split { display: flex; }
        .pd-book.pa-code-forward & .pd-dock .pd-word.pd-switch::before { box-shadow: -3px 3px 0 -1.5px currentColor; }
        .pd-book & .pd-options { display: flex; align-items: center; gap: 2px; padding: 0 calc(${({theme:e})=>e.space} / 3) 0 calc(${({theme:e})=>e.space} / 6); border-inline-start: thin solid color-mix(in oklch, var(--glow) 12%, transparent); }
        .pd-book & .pd-options .pd-word.pd-switch {
            padding: 5px 7px;
            border: 0;
            border-radius: 4px;
            background: none;
            font-family: ${({theme:e})=>e.font};
            font-size: calc(0.75 * ${({theme:e})=>e.size});
            font-weight: 500;
            line-height: 1;
            letter-spacing: 0.04em;
            color: color-mix(in oklch, var(--glow) 55%, var(--night));
            cursor: pointer;
            transition: color ${({theme:e})=>e.beat} ease, background ${({theme:e})=>e.beat} ease;
        }
        .pd-book & .pd-options .pd-word.pd-switch:hover { color: var(--glow); }
        .pd-book & .pd-options .pd-word.pd-switch[aria-pressed='true'] { color: var(--glow); background: var(--dawn); border-color: transparent; }
    `}get spread(){return this.chapter?.annotations.expressed(T)}$FilePanelBar(...e){this.$Writing(...e),this.containers.replace(this,"span",this.style)}write(){const e=n(Qs),t=n(Dr),o=n(Zn),s=this.spread,i=this.chapter;if(s!==void 0)return c(m,{children:[s.files.map(d=>a(e,{file:d},pe(d))),a("span",{className:"pd-words-only",children:a(t,{chapter:i,annotation:qn,family:s.filePanelStates,children:"words"})}),a("span",{className:"pd-dock pd-to-full",children:a(t,{chapter:i,annotation:Ys,family:s.filePanelStates,children:"full screen"})}),a("span",{className:"pd-dock pd-to-split",children:a(t,{chapter:i,annotation:ge,family:s.filePanelStates,children:"split"})}),c("span",{className:"pd-options",children:[a(o,{chapter:i,annotation:Ir,children:"light"}),a(o,{chapter:i,annotation:Tr,children:"wrap"}),a(o,{chapter:i,annotation:Hr,children:"lines"})]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-file-panel-bar")}};r(uo,"$FilePanelBar");let qt=uo;const Br=n(Zt),_r=n(qt),Rr=_r;var Fr=Object.defineProperty,Sr=Object.getOwnPropertyDescriptor,Er=r((p,e,t,o)=>{for(var s=Sr(e,t),i=p.length-1,d;i>=0;i--)(d=p[i])&&(s=d(e,t,s)||s);return s&&Fr(e,t,s),s},"__decorateClass$i");const mo=class mo extends X{constructor(){super(...arguments),this.specification=new Te,this.$openFile=void 0,this.grid=z.div`
        --night: color-mix(in oklch, #0f2a33 55%, #2b363c);
        --dusk: color-mix(in oklch, #17363f 55%, #343f45);
        --dawn: color-mix(in oklch, #17363f 40%, #4a5560);
        --glow: #d6e1e3;
        --dim: color-mix(in oklch, #d8c48e 38%, #17363f);
        --brass: color-mix(in oklch, #d8c48e 72%, white);
        .pd-book.pa-light-code & {
            --night: #f6f7f4;
            --dusk: #eceee8;
            --dawn: #ffffff;
            --glow: #2b363c;
            --dim: color-mix(in oklch, #5d4a16 45%, white);
            --brass: #5d4a16;
        }
        .pd-book &.pd-container:not(.pa-open) { display: none; }
        .pd-book &.pd-container.pa-open {
            display: grid;
            grid-template-columns: minmax(0, 1fr) 0 calc(2 * ${({theme:e})=>e.space});
            grid-template-areas: 'words panel rail';
            min-height: calc(100vh - ${({theme:e})=>e.barHeight});
            transition: grid-template-columns 0.28s ease;
        }
        .pd-book.pa-split &.pd-container.pa-open { grid-template-columns: minmax(380px, 1fr) min(44vw, 720px) calc(2 * ${({theme:e})=>e.space}); }
        .pd-book.pa-code-forward &.pd-container.pa-open {
            grid-template-areas: 'panel panel grip';
            grid-template-columns: minmax(0, 1fr) 0 calc(${({theme:e})=>e.space} * 0.75);
            height: calc(100vh - ${({theme:e})=>e.barHeight});
        }
        .pd-book & .pd-words { grid-area: words; min-width: 0; overflow: hidden; }
        .pd-book.pa-code-forward & .pd-words { display: none; }
        .pd-book & .pd-file-panel { grid-area: panel; }
        .pd-book & .pd-file-rail { grid-area: rail; }
        .pd-book.pa-code-forward & .pd-file-rail { display: none; }
        .pd-book & .pd-file-panel-grip { grid-area: grip; display: none; }
        .pd-book.pa-code-forward & .pd-file-panel-grip { display: block; }
        .pd-book & .pd-words { padding: calc(${({theme:e})=>e.space} * 0.9167) calc(${({theme:e})=>e.space} * 1.5) calc(${({theme:e})=>e.space} * 1.6667); font-size: ${({theme:e})=>e.size}; }
        .pd-book.pa-split & .pd-words { padding: calc(${({theme:e})=>e.space} * 0.9167) calc(${({theme:e})=>e.space} * 1.1667) calc(${({theme:e})=>e.space} * 1.6667) calc(${({theme:e})=>e.space} * 1.3333); }
        .pd-book & .pd-words .pd-chapter { max-width: ${({theme:e})=>e.measure}; margin: 0; }
        .pd-book & .pd-words .pd-title {
            margin: 0 0 calc(${({theme:e})=>e.space} / 4);
            font-family: ${({theme:e})=>e.font};
            font-size: calc(1.7143 * ${({theme:e})=>e.size});
            font-weight: 600;
            line-height: 1.2;
            letter-spacing: -0.02em;
            color: ${({theme:e})=>e.heading};
        }
        .pd-book & .pd-words .pd-paragraph.pa-brief {
            display: block;
            max-width: 72ch;
            margin: 0 0 calc(${({theme:e})=>e.space} * 0.4167);
            font-family: ${({theme:e})=>e.serif};
            font-size: calc(1.1071 * ${({theme:e})=>e.size});
            font-style: italic;
            line-height: 1.5;
            color: ${({theme:e})=>e.soft};
        }
        .pd-book & .pd-words .pd-section { margin: calc(${({theme:e})=>e.space} * 1.0833) 0 0; }
        .pd-book & .pd-words .pd-heading {
            margin: 0 0 calc(${({theme:e})=>e.space} / 3);
            padding: 0 0 calc(${({theme:e})=>e.space} / 4);
            border: 0;
            border-block-end: thin solid ${({theme:e})=>e.line};
            border-image: linear-gradient(90deg, var(--brass) 0 calc(${({theme:e})=>e.space} * 1.6667), ${({theme:e})=>e.line} calc(${({theme:e})=>e.space} * 1.6667)) 1;
            font-family: ${({theme:e})=>e.font};
            font-size: calc(0.7857 * ${({theme:e})=>e.size});
            font-weight: 600;
            line-height: 1.3;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            color: ${({theme:e})=>e.sideDim};
        }
        .pd-book & .pd-words .pd-paragraph { margin: calc(${({theme:e})=>e.space} / 3) 0; }
        .pd-book & .pd-words .pd-paragraph .pa-reference { color: var(--band-ink); text-decoration: underline; text-decoration-color: color-mix(in oklch, var(--band-ink) 35%, white); text-underline-offset: 2px; transition: text-decoration-color ${({theme:e})=>e.beat} ease; }
        .pd-book & .pd-words .pd-paragraph .pa-reference:hover { text-decoration-color: var(--band-ink); }
        .pd-book & .pd-words .pa-self-reference { color: inherit; text-decoration: none; }
        .pd-book & .pd-words .pd-paragraph.pd-turn { display: flex; justify-content: space-between; gap: ${({theme:e})=>e.space}; margin: calc(${({theme:e})=>e.space} * 1.0833) 0 0; font-size: calc(0.7857 * ${({theme:e})=>e.size}); }
        .pd-book & .pd-words .pd-turn .pd-count { color: ${({theme:e})=>e.faint}; }
        .pd-book & .pd-words .pd-icon {
            float: inline-start;
            width: calc(1.571 * ${({theme:e})=>e.size});
            height: calc(1.571 * ${({theme:e})=>e.size});
            margin: calc(${({theme:e})=>e.space} * 0.1417) calc(${({theme:e})=>e.space} * 0.4167) 0 0;
        }
        .pd-book & .pd-words .pd-paragraph .pd-svg { display: block; width: calc(${({theme:e})=>e.space} * 4); height: calc(${({theme:e})=>e.space} * 4); }
        @media (max-width: ${({theme:e})=>e.narrow}) {
            .pd-book &.pd-container.pa-open, .pd-book.pa-split &.pd-container.pa-open, .pd-book.pa-code-forward &.pd-container.pa-open { display: block; height: auto; min-height: 0; }
            .pd-book & .pd-file-rail, .pd-book & .pd-file-panel-grip { display: none; }
            .pd-book.pa-code-forward & .pd-words { display: block; }
            .pd-book & .pd-words { padding: calc(${({theme:e})=>e.space} * 0.83) calc(${({theme:e})=>e.space} * 0.67) calc(${({theme:e})=>e.space} / 3); }
            .pd-book & .pd-words .pd-title { font-size: calc(1.5 * ${({theme:e})=>e.size}); }
        }
    `}get files(){return this.parent.annotations.find(Rn).reverse()}get openFile(){return this.$openFile??this.files[0]}get filePanelStates(){return[qn,ge,Ys]}$Spread(...e){this.$Format(...e);const t=this.grid,o=n(Br),s=n(Wr),i=n(Lr);this.style=({className:d,children:u})=>{const x=this.parent,b=[...x.classes].includes("pa-open");return c(t,{className:`${d??""}${b?" pa-open":""}`.trim(),children:[a("div",{className:"pd-words",children:u}),b?c(m,{children:[a(o,{chapter:x}),a(s,{chapter:x}),a(i,{chapter:x,annotation:ge,family:this.filePanelStates})]}):void 0]})}}defines(e){super.defines(e),e.classes.add(this,"pa-spread")}erase(e){super.erase(e),e.classes.revert(this)}};r(mo,"$Spread");let T=mo;const $o=class $o extends ${$isAChapter(e){l(e instanceof v,"a spread is a chapter read beside its files, and this is not a chapter")}};r($o,"SpreadSpecification");let Te=$o;Er([h("a spread is a chapter read beside its files")],Te.prototype,"$isAChapter");n(T);var Gr=Object.defineProperty,Ur=Object.getOwnPropertyDescriptor,Yn=r((p,e,t,o)=>{for(var s=Ur(e,t),i=p.length-1,d;i>=0;i--)(d=p[i])&&(s=d(e,t,s)||s);return s&&Gr(e,t,s),s},"__decorateClass$h");const ko=class ko extends X{constructor(){super(...arguments),this.specification=new be,this.style=z.div`
        .pa-coloured { --colour: ${e=>e.$colour}; }
    `}get colour(){return y.copy(this.text).trim()}$Coloured(...e){this.$Format(...e);const t=this.style;this._painted=o=>a(t,{$colour:this.colour,...o})}defines(e){e.classes.add(this,"pa-coloured"),e.containers.add(this,this._painted)}erase(e){e.classes.revert(this),e.containers.revert(this)}};r(ko,"$Coloured");let Z=ko;const xo=class xo extends ${$saidOfAChapterOrAParagraph(e){l(e instanceof v||e instanceof f,"coloured is said of a chapter or a paragraph, and this is neither")}$givenItsColour(e){l(/^#[0-9a-f]{6}$/iu.test(e.annotations.expressed(Z)?.colour??""),"coloured is given its colour as six hex digits, and this one was given something else")}};r(xo,"ColouredSpecification");let be=xo;Yn([h("coloured is said of a chapter or a paragraph")],be.prototype,"$saidOfAChapterOrAParagraph");Yn([h("coloured is given its colour")],be.prototype,"$givenItsColour");n(Z);var Zr=Object.defineProperty,qr=Object.getOwnPropertyDescriptor,Xs=r((p,e,t,o)=>{for(var s=qr(e,t),i=p.length-1,d;i>=0;i--)(d=p[i])&&(s=d(e,t,s)||s);return s&&Zr(e,t,s),s},"__decorateClass$g");const vo=class vo extends X{constructor(){super(...arguments),this.specification=new se}get identifier(){return I.reference(y.copy(this.text))?.identifier??""}get name(){return I.reference(y.copy(this.text))?.name??""}get entry(){return this.book?.chapterAt(this.identifier)}get drawing(){const e=this.entry?.text.find(f).flatMap(t=>t.text.find(zt))[0];return e===void 0?"":y.copy(e.text).trim()}get colour(){return this.entry?.annotations.expressed(Z)?.colour??""}$Keyed(...e){this.$Format(...e);const t=n(Xr);this._layer=o=>c("div",{...o,children:[a(t,{keyed:this}),o.children]})}defines(e){e.classes.add(this,"pa-keyed"),e.containers.add(this,this._layer)}erase(e){e.classes.revert(this),e.containers.revert(this)}};r(vo,"$Keyed");let G=vo;const yo=class yo extends j{constructor(){super(...arguments),this.style=z.span`
        --colour: ${e=>e.$colour};
    `}$Icon(...e){this.$Writing(...e);const t=this.style;this._painted=o=>a(t,{$colour:this.$keyed?.colour??"",...o}),this.containers.replace(this,"span",this._painted)}write(){return a("span",{className:"pd-drawing",role:"img","aria-label":this.$keyed?.name,dangerouslySetInnerHTML:{__html:this.$keyed?.drawing??""}})}$Define(){super.$Define(),this.classes.add(this,"pd-icon")}};r(yo,"$Icon");let Yt=yo;const wo=class wo extends ${$saidOfAChapter(e){l(e instanceof v,"keyed is said of a chapter, and this is not one")}$namesAnEntry(e){const t=e.annotations.expressed(G)?.entry;l(t!==void 0&&t.annotations.expressed(G)?.entry===t,"keyed names an entry of the key, a chapter of this book keyed as itself, and this one names something else")}$entryHoldsItsDrawingAndColour(e){const t=e.annotations.expressed(G)?.entry;t!==void 0&&l(t.text.find(f).flatMap(o=>o.text.find(zt)).length===1&&t.is(Z),"an entry of the key holds one drawing and its colour, and this one holds something else")}};r(wo,"KeyedSpecification");let se=wo;Xs([h("keyed is said of a chapter")],se.prototype,"$saidOfAChapter");Xs([h("keyed names an entry of the key")],se.prototype,"$namesAnEntry");Xs([h("an entry of the key holds one drawing and its colour")],se.prototype,"$entryHoldsItsDrawingAndColour");n(G);const Yr=n(Yt),Xr=Yr;var Qr=Object.defineProperty,Kr=Object.getOwnPropertyDescriptor,Jr=r((p,e,t,o)=>{for(var s=Kr(e,t),i=p.length-1,d;i>=0;i--)(d=p[i])&&(s=d(e,t,s)||s);return s&&Qr(e,t,s),s},"__decorateClass$f");const Vr={tsx:"typescript",ts:"typescript",mjs:"javascript",js:"javascript",css:"css",html:"xml",svg:"xml",json:"json",md:"markdown"},ei='<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"><path d="M6 4.5 3.5 8 6 11.5M10 4.5 12.5 8 10 11.5"/></svg>',pe=r(p=>`${p.$identifier}${p.$type}`,"fileNameOf"),ti=r(p=>p===void 0?[]:y.copy(p.text).split(`
`),"fileLinesOf"),Xn=r(p=>p?.chapter?.annotations.expressed(T),"spreadOf"),zo=class zo extends f{constructor(){super(...arguments),this.$family=[]}get name(){return this.$file===void 0?"":pe(this.$file)}get language(){return Vr[(this.$file?.$type??"").replace(/^\./u,"")]??""}get spread(){return Xn(this.$file)}get chapter(){return this.$file?.chapter??super.chapter}$FileListing(...e){this.$Writing(...e),this.containers.replace(this,"span","div")}container(e){return super.container({onClick:r(()=>this.press(),"onClick"),...e})}press(){if(this.$filePanelState===void 0)return;const e=this.book,t=[e.$is].flat().filter(o=>!this.$family.includes(o));e.$is=[this.$filePanelState,...t]}write(){const e=n(C),t=n(hr);return c(m,{children:[a(e,{children:this.name}),a(t,{identifier:this.$file?.$identifier,type:this.$file?.$type,language:this.language,numbered:!0})]})}$Define(){super.$Define(),this.classes.add(this,"pd-file-listing");const e=n(ai);this.annotations.add(this,a(e,{}))}};r(zo,"$FileListing");let He=zo;const Oo=class Oo extends k{constructor(){super(...arguments),this.specification=new We}defines(e){const t=e;t.$file!==void 0&&t.spread?.openFile===t.$file&&e.classes.add(this,"pa-open")}erase(e){e.classes.revert(this)}};r(Oo,"$OpenListing");let Xt=Oo;const Do=class Do extends ${$isAFileListing(e){l(e instanceof He,"an open listing is a file listing, and this is not one")}};r(Do,"OpenListingSpecification");let We=Do;Jr([h("an open listing is a file listing")],We.prototype,"$isAFileListing");const jo=class jo extends fe{constructor(){super(...arguments),this.$skeleton=!1,this.style=z.button`
        --colour: ${e=>e.$colour};
    `}get on(){const e=this.$file?.chapter;return e!==void 0&&e===this.book.open&&this.spread?.openFile===this.$file}get name(){return this.$file===void 0?"":pe(this.$file)}get spread(){return Xn(this.$file)}get colour(){return this.$file?.chapter?.annotations.expressed(G)?.colour??""}get lines(){return ti(this.$file)}get chapter(){return this.$file?.chapter??super.chapter}$FileTab(...e){this.$Switch(...e),this.containers.replace(this,"button",this.style)}container(e){return super.container({$colour:this.colour,...e})}press(){const e=this.spread;e!==void 0&&(e.$openFile=this.$file),this.$annotation!==void 0&&super.press()}write(){return c(m,{children:[a("span",{className:"pd-drawing",dangerouslySetInnerHTML:{__html:ei}}),a("span",{className:"pd-tab-name",children:this.name}),this.$skeleton?a("span",{className:"pd-skeleton",children:this.lines.slice(0,14).map((e,t)=>a("i",{style:{width:`${Math.max(12,Math.min(100,e.length*2.2))}%`}},t))}):void 0]})}$Define(){super.$Define(),this.classes.add(this,"pd-file-tab")}};r(jo,"$FileTab");let Qt=jo;const si=n(He),oi=n(Xt),Qs=n(Qt),ai=oi;var ni=Object.defineProperty,ri=Object.getOwnPropertyDescriptor,Ks=r((p,e,t,o)=>{for(var s=ri(e,t),i=p.length-1,d;i>=0;i--)(d=p[i])&&(s=d(e,t,s)||s);return s&&ni(e,t,s),s},"__decorateClass$e");const Co=class Co extends k{constructor(){super(...arguments),this.specification=new oe}get date(){return this.text.find(Gs)[0]}defines(e){e.classes.add(this,"pa-dated")}erase(e){e.classes.revert(this)}note(){const e=n(this.date);return a(e,{})}};r(Co,"$Dated");let B=Co;const Po=class Po extends ${$saidOfAChapter(e){l(e instanceof v,"dated is said of a chapter, and this is not one")}$datedOnce(e){l(e.annotations.containsOne(B),"a chapter is dated once, and this one is dated more than once")}$givenOneDate(e){l(e.annotations.expressed(B)?.text.find(Gs).length===1,"a dated chapter is given one date, and this one is given none or more than one")}};r(Po,"DatedSpecification");let oe=Po;Ks([h("dated is said of a chapter")],oe.prototype,"$saidOfAChapter");Ks([h("a chapter is dated once")],oe.prototype,"$datedOnce");Ks([h("a dated chapter is given one date")],oe.prototype,"$givenOneDate");n(B);var ii=Object.defineProperty,di=Object.getOwnPropertyDescriptor,pi=r((p,e,t,o)=>{for(var s=di(e,t),i=p.length-1,d;i>=0;i--)(d=p[i])&&(s=d(e,t,s)||s);return s&&ii(e,t,s),s},"__decorateClass$d");const Mo=class Mo extends k{constructor(){super(...arguments),this.specification=new Le}defines(e){e.classes.add(this,"pa-label")}erase(e){e.classes.revert(this)}};r(Mo,"$Label");let Kt=Mo;const Ao=class Ao extends ${$saidOfAWord(e){l(e instanceof j,"label is said of a word, and this is not one")}};r(Ao,"LabelSpecification");let Le=Ao;pi([h("label is said of a word")],Le.prototype,"$saidOfAWord");const ce=n(Kt),No=class No extends f{get cover(){return this.$cover??this.book?.cover}write(){const e=this.cover.annotations.expressed(Us),t=n(C),o=n(ce),s=n(w);return c(m,{children:[c(t,{children:[a(o,{}),"by"]}),c(t,{children:[a(s,{children:e.means.identifier}),e.name]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-byline")}};r(No,"$Byline");let Jt=No;const Io=class Io extends f{get cover(){return this.$cover??this.book?.cover}write(){const e=this.cover.annotations.expressed(Fn),t=n(C),o=n(ce),s=n(w);return c(m,{children:[c(t,{children:[a(o,{}),"subject"]}),c(t,{children:[a(s,{children:e.means.identifier}),e.name]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-subject-line")}};r(Io,"$SubjectLine");let Vt=Io;const To=class To extends f{get cover(){return this.$cover??this.book?.cover}get topics(){return this.cover?.annotations.find(Sn)??[]}write(){const e=n(C),t=n(ce),o=n(w);return c(m,{children:[c(e,{children:[a(t,{}),"topic"]}),this.topics.map((s,i)=>c(e,{children:[a(o,{children:s.means.identifier}),s.name]},i))]})}$Define(){super.$Define(),this.classes.add(this,"pd-topic-line")}};r(To,"$TopicLine");let es=To;const ci=n(Jt);n(Vt);const li=n(es);var hi=Object.defineProperty,fi=Object.getOwnPropertyDescriptor,K=r((p,e,t,o)=>{for(var s=fi(e,t),i=p.length-1,d;i>=0;i--)(d=p[i])&&(s=d(e,t,s)||s);return s&&hi(e,t,s),s},"__decorateClass$c");const Js=r((p,e)=>{const t=new Set(p.text.find(e));return p.text.find(gr).flatMap(o=>[...t.has(o)?[o]:[],...Js(o,e)])},"within"),Ho=class Ho extends k{constructor(){super(...arguments),this.specification=new q}get identifier(){return I.reference(y.copy(this.text))?.identifier??""}get name(){return I.reference(y.copy(this.text))?.name??""}get cover(){const e=this.identifier;return this.chapter?.annotations.find(Y).map(t=>t.cover).find(t=>t?.mention?.identifier===e)}defines(e){e.classes.add(this,"pa-design")}erase(e){e.classes.revert(this)}};r(Ho,"$Design");let A=Ho;const Wo=class Wo extends k{constructor(){super(...arguments),this.specification=new _e}defines(e){e.classes.add(this,"pa-exhibit")}erase(e){e.classes.revert(this)}};r(Wo,"$Exhibit");let Be=Wo;const Lo=class Lo extends k{constructor(){super(...arguments),this.specification=new Re,this.$number=0,this.span=z.span.attrs({className:"pd-plate"})``}note(){const e=this.span;return c(m,{children:[a(e,{children:String(this.$number).padStart(2,"0")}),a("span",{className:"pd-jacket-mini"})]})}defines(e){e.classes.add(this,"pa-plate")}erase(e){e.classes.revert(this)}};r(Lo,"$Plate");let ts=Lo;const Bo=class Bo extends X{constructor(){super(...arguments),this.specification=new Fe,this.themeProvider=!0,this.room=z.div`
        .pd-book &.pd-container:not(.pa-open) { display: none; }
        .pd-book &.pd-container.pa-open { display: block; position: relative; min-height: 100%; padding: calc(${({theme:e})=>e.space} * 1.5) calc(${({theme:e})=>e.space} * 1.8333) calc(${({theme:e})=>e.space} * 3); background: linear-gradient(160deg, color-mix(in oklab, var(--ground) 55%, white) 0%, color-mix(in oklab, var(--ground) 22%, white) 45%, color-mix(in oklab, var(--foot) 7%, white) 100%); }
        .pd-book & .pd-plate { position: absolute; top: calc(${({theme:e})=>e.space} * 0.9167); left: calc(${({theme:e})=>e.space} * 1.8333); font-family: ${({theme:e})=>e.serif}; font-size: calc(${({theme:e})=>e.size} * 26 / 7); font-weight: 500; line-height: 1; letter-spacing: -0.03em; color: color-mix(in oklab, var(--band) 32%, white); pointer-events: none; }
        .pd-book & .pd-chapter { position: relative; max-width: none; margin: 0; }
        .pd-book &.pd-room .pd-chapter .pd-sentence.pd-title { margin: calc(${({theme:e})=>e.space} * 1.75) 0 calc(${({theme:e})=>e.space} * 0.4167); font-family: ${({theme:e})=>e.serif}; font-size: calc(2.4286 * ${({theme:e})=>e.size}); font-weight: 600; line-height: 1.15; letter-spacing: -0.02em; color: var(--band-ink); }
        .pd-book & .pd-paragraph { max-width: 72ch; }
        .pd-book & .pd-paragraph.pa-exhibit { max-width: calc(${({theme:e})=>e.space} * 43.33); margin: calc(${({theme:e})=>e.space} / 2) 0 calc(${({theme:e})=>e.space} * 1.25); padding: calc(${({theme:e})=>e.space} * 0.75) calc(${({theme:e})=>e.space} * 0.75) calc(${({theme:e})=>e.space} / 2); border-radius: calc(${({theme:e})=>e.radius} * 2); background: linear-gradient(135deg, color-mix(in oklab, var(--ground) 72%, white) 0%, color-mix(in oklab, var(--ground) 40%, white) 100%); box-shadow: ${({theme:e})=>e.gloss}; }
        .pd-book & .pd-paragraph.pa-exhibit img { width: 100%; border: 0; border-radius: ${({theme:e})=>e.radius}; box-shadow: ${({theme:e})=>e.lift}; }
        .pd-book & .pd-paragraph.pa-exhibit::after { content: 'As built'; display: block; margin-block-start: calc(${({theme:e})=>e.space} / 2); font-size: calc(0.75 * ${({theme:e})=>e.size}); font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: var(--band-ink); }
        .pd-book & .pd-section { margin-block-start: calc(${({theme:e})=>e.space} * 1.25); }
        .pd-book &.pd-room .pd-chapter .pd-sentence.pd-heading { color: var(--band-ink); }
        .pd-book & .pd-image img { border: thin solid ${({theme:e})=>e.line}; border-radius: ${({theme:e})=>e.radius}; background: ${({theme:e})=>e.paper}; box-shadow: ${({theme:e})=>e.shadow}; }
        .pd-book & .pd-built-in { display: flex; flex-wrap: wrap; align-items: baseline; gap: calc(${({theme:e})=>e.space} / 3) calc(${({theme:e})=>e.space} * 0.4167); max-width: 72ch; margin: calc(${({theme:e})=>e.space} * 1.75) 0 0; padding-block-start: calc(${({theme:e})=>e.space} * 0.8333); border-block-start: thin solid color-mix(in oklab, var(--band) 70%, white); }
        .pd-book & .pd-built-in:empty { display: none; }
        .pd-book & .pd-built-in::before { content: 'Built in'; flex-basis: 100%; font-size: calc(0.75 * ${({theme:e})=>e.size}); font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: var(--band-ink); }
        .pd-book & .pd-paragraph.pd-built-in .pa-reference.pd-container { text-decoration: none; }
        .pd-book & .pd-paragraph.pd-built-in .pd-word.pa-reference { display: inline-flex; flex-direction: column; padding: calc(${({theme:e})=>e.space} / 4) calc(${({theme:e})=>e.space} * 0.4167); border: thin solid color-mix(in oklab, var(--band) 75%, white); border-radius: ${({theme:e})=>e.radius}; background: ${({theme:e})=>e.paper}; font-size: calc(0.9286 * ${({theme:e})=>e.size}); color: var(--band-ink); text-decoration: none; box-shadow: ${({theme:e})=>e.shadow}; transition: border-color ${({theme:e})=>e.beat} ease, box-shadow ${({theme:e})=>e.beat} ease; }
        .pd-book & .pd-paragraph.pd-built-in .pd-word.pa-reference:hover { border-color: var(--band-ink); box-shadow: ${({theme:e})=>e.lift}; text-decoration: none; }
        .pd-book & .pd-built-in .pd-where { display: block; font-size: calc(0.75 * ${({theme:e})=>e.size}); color: ${({theme:e})=>e.faint}; }
        @media (max-width: ${({theme:e})=>e.narrow}) {
            .pd-book &.pd-container.pa-open { padding: calc(${({theme:e})=>e.space} * 0.8333) calc(${({theme:e})=>e.space} * 0.6667) calc(${({theme:e})=>e.space} * 2); }
            .pd-book & .pd-plate { top: calc(${({theme:e})=>e.space} * 0.75); left: calc(${({theme:e})=>e.space} * 0.6667); font-size: calc(2.857 * ${({theme:e})=>e.size}); }
            .pd-book & .pd-chapter .pd-sentence.pd-title { margin-block-start: calc(${({theme:e})=>e.space} * 1.4167); font-size: calc(2 * ${({theme:e})=>e.size}); }
            .pd-book & .pd-paragraph.pa-exhibit { padding: calc(${({theme:e})=>e.space} * 0.4167); }
        }
    `}get chapter(){return this.parent}get design(){return this.chapter.annotations.expressed(A)}get plate(){return this.book.chapters.filter(e=>e.is(A)).indexOf(this.chapter)+1}$Room(...e){this.$Format(...e);const t=this.room;this.style=({className:o,children:s})=>{const i=[...this.chapter.classes].includes("pa-open");return V(this.design?.cover,c(t,{className:`${o??""} pd-room${i?" pa-open":""}`.trim(),children:[a("span",{className:"pd-plate",children:String(this.plate).padStart(2,"0")}),s]}))}}defines(e){super.defines(e),e.classes.add(this,"pa-room")}erase(e){super.erase(e),e.classes.revert(this)}};r(Bo,"$Room");let ss=Bo;const _o=class _o extends f{get references(){const e=this.book?.means?.identifier??"",t=new Map;for(const o of Js(this.chapter,j)){if(o.parent===this)continue;const s=o.annotations.expressed(Zs)?.identifier;if(s===void 0||s.startsWith(e)||t.has(s))continue;const i=y.copy(o.text);t.set(s,I.reference(i)?.name??i.trim())}return[...t]}write(){const e=n(C),t=n(w);return this.references.map(([o,s],i)=>c(e,{children:[a(t,{children:o}),s,a("span",{className:"pd-where",children:o.replace(/^\/dougs-/u,"").replace(/\/#?/u," · ").replace(/ · $/u,"").replace(/-/gu," ")})]},i))}$Define(){super.$Define(),this.classes.add(this,"pd-built-in")}};r(_o,"$BuiltIn");let os=_o;const Ro=class Ro extends ${$isAChapter(e){l(e instanceof v,"a design is a chapter, and this is not one")}$namesABook(e){l((e.annotations.expressed(A)?.identifier??"")!=="","a design names the book it is of, and this one names nothing")}$holdsTheCover(e){l(e.annotations.expressed(A)?.cover!==void 0,"a design holds the cover of the book it is of, as a volume, and this one holds none")}$showsItselfAsBuilt(e){l(e instanceof v&&Js(e,f).some(t=>t.is(Be)),"a design shows itself as built, in a paragraph said to be the exhibit, and this one shows nothing")}};r(Ro,"DesignSpecification");let q=Ro;K([h("a design is a chapter")],q.prototype,"$isAChapter");K([h("a design names the book it is of")],q.prototype,"$namesABook");K([h("a design holds the cover of the book it is of")],q.prototype,"$holdsTheCover");K([h("a design shows itself as built")],q.prototype,"$showsItselfAsBuilt");const Fo=class Fo extends ${$isAParagraphOfADesignHoldingOneImage(e){l(e instanceof f&&e.chapter?.is(A)===!0&&e.text.find(fr).length===1,"an exhibit is a paragraph of a design that holds one image, and this is not one")}};r(Fo,"ExhibitSpecification");let _e=Fo;K([h("an exhibit is a paragraph of a design that holds one image")],_e.prototype,"$isAParagraphOfADesignHoldingOneImage");const So=class So extends ${$saidOfAnEntryLeadingToADesign(e){l(e.is(re)&&e.annotations.expressed(re)?.referencedChapter?.is(A)===!0,"a plate is said of an entry that leads to a design, and this is not one")}};r(So,"PlateSpecification");let Re=So;K([h("a plate is said of an entry that leads to a design")],Re.prototype,"$saidOfAnEntryLeadingToADesign");const Eo=class Eo extends ${$isADesign(e){l(e instanceof v&&e.is(A),"a room is a chapter that is a design, and this is not one")}};r(Eo,"RoomSpecification");let Fe=Eo;K([h("a room is a chapter that is a design")],Fe.prototype,"$isADesign");n(A);n(Be);n(ts);n(ss);n(os);var gi=Object.defineProperty,bi=Object.getOwnPropertyDescriptor,W=r((p,e,t,o)=>{for(var s=bi(e,t),i=p.length-1,d;i>=0;i--)(d=p[i])&&(s=d(e,t,s)||s);return s&&gi(e,t,s),s},"__decorateClass$b");const V=r((p,e,t)=>{const o=p?.annotations.expressed(_)?.painted;return o===void 0?e:a(o,{children:e},t)},"painted"),Go=class Go extends D{constructor(){super(...arguments),this.specification=new ne}get name(){return this.chapter?.title?.name??""}get author(){return this.chapter?.annotations.expressed(Us)?.name??""}get illustration(){return this.chapter?.text.find(f).find(e=>e.is(ue))}get drawing(){const e=this.illustration?.text.find(zt)[0];return e===void 0?"":y.copy(e.text).trim()}get scheme(){return this.chapter?.annotations.expressed(_)}get window(){return this.chapter?.annotations.expressed(ae)}};r(Go,"$BookshelfCover");let Se=Go;const Uo=class Uo extends k{constructor(){super(...arguments),this.specification=new Ze}defines(e){e.classes.add(this,"pa-illustration")}erase(e){e.classes.revert(this)}};r(Uo,"$Illustration");let ue=Uo;const Zo=class Zo extends X{constructor(){super(...arguments),this.specification=new me,this.$ground="",this.$band="",this.$bandInk="",this.$foot="",this.$footInk="",this.$ink="",this.style=z.div.attrs({className:"pd-scheme"})`
        ${e=>e.$scheme}
    `}get colours(){return[this.$ground,this.$band,this.$bandInk,this.$foot,this.$footInk,this.$ink]}get declarations(){return`--ground: ${this.$ground}; --band: ${this.$band}; --band-ink: ${this.$bandInk}; --foot: ${this.$foot}; --foot-ink: ${this.$footInk}; --ink: ${this.$ink};`}get painted(){return this._painted}$Scheme(...e){this.$Format(...e);const t=this.style;this._painted=o=>a(t,{$scheme:this.declarations,...o})}defines(e){e.classes.add(this,"pa-scheme"),e.containers.add(this,this._painted)}erase(e){e.classes.revert(this),e.containers.revert(this)}};r(Zo,"$Scheme");let _=Zo;const qo=class qo extends k{constructor(){super(...arguments),this.specification=new $e,this.$x="",this.$y=""}get declarations(){return`--window-x: ${this.$x}px; --window-y: ${this.$y}px;`}};r(qo,"$Window");let ae=qo;const Yo=class Yo extends k{constructor(){super(...arguments),this.specification=new ke}get cover(){return this._cover}get jacket(){return this._cover?.annotations.expressed(D)}$Volume(...e){this._cover=e.find(t=>t instanceof v),this.$Annotation(...e.filter(t=>t!==this._cover))}defines(e){e.classes.add(this,"pa-volume")}erase(e){e.classes.revert(this)}};r(Yo,"$Volume");let Y=Yo;const Xo=class Xo extends f{get cover(){return this.$cover?.annotations.expressed(D)}$Jacket(...e){this.$Writing(...e),this._painted=t=>{const o=this.cover?.scheme?.painted;return o===void 0?a("div",{...t}):a(o,{...t})},this.containers.add(this,this._painted)}write(){const e=this.cover;if(e===void 0)return;const t=n(C),o=n(ce);return c(m,{children:[a(t,{children:e.name}),a("span",{className:"pd-drawing",dangerouslySetInnerHTML:{__html:e.drawing}}),c(t,{children:[a(o,{}),e.author]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-jacket")}};r(Xo,"$Jacket");let as=Xo;const Qo=class Qo extends f{constructor(){super(...arguments),this.unfolded=!1}get filedElsewhere(){return this.$subject!==void 0&&this.$subject!==this.$cover}container(e){return super.container({onMouseOver:r(t=>{t.target instanceof Element&&t.target.closest(".pd-filed")!==null&&this.unfold()},"onMouseOver"),onMouseLeave:r(()=>this.fold(),"onMouseLeave"),...e})}unfold(){this.unfolded=!0}fold(){this.unfolded=!1}write(){const e=this.$cover,t=this.$subject;if(e!==void 0)return c(m,{children:[this.filedElsewhere?V(t,a("span",{className:"pd-filed",children:this.mark(t)})):void 0,V(e,a("span",{className:"pd-own",children:this.mark(e)})),c("span",{className:"pd-names",children:[V(e,a("span",{className:"pd-name",children:this.name(e)})),this.filedElsewhere?V(t,a("span",{className:"pd-name pd-under",children:this.name(t)})):void 0]})]})}mark(e){const t=n(ki),o=n(w);return a(t,{cover:e,children:a(o,{children:e.mention.identifier})})}name(e){const t=n(C),o=n(w);return c(t,{children:[a(o,{children:e.mention.identifier}),e.title.name]})}$Define(){super.$Define(),this.classes.add(this,"pd-logo");const e=n(xi);this.annotations.add(this,a(e,{}))}};r(Qo,"$Logo");let Ee=Qo;const Ko=class Ko extends k{constructor(){super(...arguments),this.specification=new Ge}defines(e){e.unfolded&&e.classes.add(this,"pa-unfolded")}erase(e){e.classes.revert(this)}};r(Ko,"$Unfolded");let ns=Ko;const Jo=class Jo extends ${$saidOfALogo(e){l(e instanceof Ee,"unfolded is said of a logo, and this is not one")}};r(Jo,"UnfoldedSpecification");let Ge=Jo;W([h("unfolded is said of a logo")],Ge.prototype,"$saidOfALogo");const ui=r(p=>{const e=p?.annotations.expressed(D);return{drawing:e?.drawing??"",declarations:`${e?.scheme?.declarations??""} ${e?.window?.declarations??""}`}},"markingOf"),Vo=class Vo extends j{constructor(){super(...arguments),this.style=z.span`
        ${e=>e.$vars}
    `}get cover(){return this.$cover?.annotations.expressed(D)}get marking(){return ui(this.$cover)}$Mark(...e){this.$Writing(...e);const t=this.style;this._painted=o=>a(t,{$vars:this.marking.declarations,...o}),this.containers.add(this,this._painted)}write(){return a("span",{className:"pd-drawing",dangerouslySetInnerHTML:{__html:this.marking.drawing}})}$Define(){super.$Define(),this.classes.add(this,"pd-mark")}};r(Vo,"$Mark");let Ue=Vo;const ea=class ea extends br{$carriesItsScheme(e){l(e.is(_),"a bookshelf cover carries its scheme, and this one carries none")}$carriesItsWindow(e){l(e.is(ae),"a bookshelf cover carries its window, and this one carries none")}$carriesItsIllustration(e){l(e instanceof v&&e.text.find(f).some(t=>t.is(ue)),"a bookshelf cover carries its illustration, and this one carries none")}};r(ea,"BookshelfCoverSpecification");let ne=ea;W([h("a bookshelf cover carries its scheme")],ne.prototype,"$carriesItsScheme");W([h("a bookshelf cover carries its window")],ne.prototype,"$carriesItsWindow");W([h("a bookshelf cover carries its illustration")],ne.prototype,"$carriesItsIllustration");const ta=class ta extends ${$saidOfADrawing(e){l(e instanceof f&&e.chapter?.is(D)===!0&&e.text.find(zt).length===1,"an illustration is a paragraph of a cover that holds one drawing, and this is not one")}};r(ta,"IllustrationSpecification");let Ze=ta;W([h("an illustration is a paragraph of a cover that holds one drawing")],Ze.prototype,"$saidOfADrawing");const sa=class sa extends ${$isACover(e){l(e instanceof v&&e.is(D),"a cover has a scheme, and this is not a cover")}$givenItsColours(e){const t=e.annotations.expressed(_)?.colours??[];l(t.every(o=>/^#[0-9a-f]{6}$/iu.test(o)),"a scheme is given its six colours as six hex digits each — the ground, the band and its ink, the foot and its ink, and the ink of the drawing — and this one was given something else")}};r(sa,"SchemeSpecification");let me=sa;W([h("a cover has a scheme")],me.prototype,"$isACover");W([h("a scheme is given its six colours")],me.prototype,"$givenItsColours");const oa=class oa extends ${$isACover(e){l(e instanceof v&&e.is(D),"a cover has a window, and this is not a cover")}$givenItsPlace(e){const t=e.annotations.expressed(ae);l(/^-?\d+$/u.test(t?.$x??"")&&/^-?\d+$/u.test(t?.$y??""),"a window is given where it stands on the drawing, two whole numbers, and this one was given something else")}};r(oa,"WindowSpecification");let $e=oa;W([h("a cover has a window")],$e.prototype,"$isACover");W([h("a window is given where it stands on the drawing")],$e.prototype,"$givenItsPlace");const aa=class aa extends ${$saidOfAChapterStandingForABook(e){l(e instanceof v&&(e.is(Nn)||e.is(D)||e.is(A)),"a volume is a chapter that stands for another book, a synopsis of it, a cover filed under it or a design of it, and this is none")}$holdsTheCover(e){const t=[e.annotations.expressed(Nn)?.means?.identifier,e.annotations.expressed(Fn)?.means?.identifier,e.annotations.expressed(Us)?.means?.identifier,e.annotations.expressed(A)?.identifier,...[...e.annotations].map(o=>o.means?.identifier)];l(e.annotations.find(Y).every(o=>o.cover?.is(D)===!0&&t.includes(o.cover.mention?.identifier)),"a volume holds the cover of a book its chapter stands for or names, the book a synopsis or a design is of, the subject or author a cover is filed under or a book another line of the cover names, and one here holds something else")}};r(aa,"VolumeSpecification");let ke=aa;W([h("a volume is a chapter that stands for another book")],ke.prototype,"$saidOfAChapterStandingForABook");W([h("a volume holds the cover of a book its chapter stands for or names")],ke.prototype,"$holdsTheCover");const Qn=n(Se),It=n(ue),Tt=n(_),Ht=n(ae),xe=n(Y);n(as);const mi=n(Ee),$i=n(ns),Kn=n(Ue),ki=Kn,xi=$i;var vi=Object.defineProperty,yi=Object.getOwnPropertyDescriptor,le=r((p,e,t,o)=>{for(var s=yi(e,t),i=p.length-1,d;i>=0;i--)(d=p[i])&&(s=d(e,t,s)||s);return s&&vi(e,t,s),s},"__decorateClass$a");const Jn='<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3.5 10.5 8 6 12.5"/></svg>',wi='<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linejoin="round" stroke-linecap="round"><rect class="ground" x="0.75" y="0.75" width="14.5" height="14.5"/><path d="M3.5 5.5h3l1.5 1.5h4.5v5h-9z"/></svg>',na=class na extends X{constructor(){super(...arguments),this.specification=new Ke,this.style=z.div`
        ${e=>e.$schemeDeclarations===void 0?"":`.pa-entry { ${e.$schemeDeclarations} }`}
    `}get place(){return N(this.parent).identifier}get referencedChapter(){return this.book.chapterAt(this.place)}get cover(){return this.referencedChapter?.annotations.expressed(Y)?.cover??this.book.coverOf(this.place)}get schemeDeclarations(){const e=this.cover?.annotations.expressed(_);if(e!==void 0)return e.declarations;const t=this.referencedChapter?.annotations.expressed(Z)?.colour;return t===void 0?void 0:`--colour: ${t};`}$Entry(...e){this.$Format(...e);const t=this.style;this._painted=o=>a(t,{$schemeDeclarations:this.schemeDeclarations,...o})}defines(e){e.classes.add(this,"pa-entry"),e.containers.add(this,this._painted),(this.place===this.book?.$bookmark||this.place===this.book.open?.mention?.identifier)&&e.classes.add(this,"pa-open")}erase(e){e.classes.revert(this),e.containers.revert(this)}};r(na,"$Entry");let re=na;const ra=class ra extends k{constructor(){super(...arguments),this.specification=new Qe}defines(e){e.classes.add(this,"pa-appendix")}erase(e){e.classes.revert(this)}};r(ra,"$Appendix");let ve=ra;const ia=class ia extends k{constructor(){super(...arguments),this.specification=new Xe,this.$folded=!1,this.$counted=!1,this.$dated=!1,this.$searched=!1,this.$search=""}get sections(){return this.chapter.text.find(M)}get entries(){const e=r(t=>!t.is(ur)&&N(t)!==void 0,"listed");return[...this.chapter.text].flatMap(t=>t instanceof M?t.text.find(f):t instanceof f?[t]:[]).filter(e)}get found(){return this.book.found(this.$search)}chapterOf(e){const t=N(e)?.identifier;return t===void 0?void 0:this.book.chapterAt(t)}search(e){this.$search=e;const t=this.chapter,o=e.trim()!=="";if(t!==void 0&&o!==t.is(qe)){const s=[t.$is].flat().filter(i=>i!==void 0&&i!==Wn);t.$is=o?[Wn,...s]:s}this.book.sought(e.trim())}$Bound(){const e=n(Wi),t=n(tr),o=n(Qs),s=this.book;for(const b of this.entries){b.annotations.add(this,a(e,{}));const O=s.chapterAt(N(b).identifier)?.annotations.expressed(T);if(O===void 0)continue;const Ne=O.files;b.text.add(this,a(t,{foldedWriting:Ne.length===0?void 0:b,annotation:bs}),...Ne.map(he=>a(o,{file:he,annotation:ge,family:O.filePanelStates},pe(he))))}const i=n(er),d=n(_i),u=new Set(s.entries),x=r(b=>{const O=this.chapterOf(b);return O!==void 0&&u.has(O)},"leadsToAnEntry");if(this.$dated)for(const b of this.entries){const O=this.chapterOf(b);O===void 0||!u.has(O)||!O.is(B)||b.text.add(this,a(i,{entry:O}))}for(const b of this.sections){this.$folded&&(b.$is=[bs]);const O=b.canonical;this.$counted&&O!==void 0&&b.text.find(f).some(x)&&O.text.add(this,a(d,{section:b}))}super.$Bound()}};r(ia,"$Index");let H=ia;const da=class da extends k{constructor(){super(...arguments),this.specification=new Ye}defines(e){e.classes.add(this,"pa-searching")}erase(e){e.classes.revert(this)}};r(da,"$Searching");let qe=da;const pa=class pa extends ${$saidOfATable(e){l(e.is(Q),"searching is said of a table of contents, the index's chapter, and this is not one")}};r(pa,"SearchingSpecification");let Ye=pa;le([h("searching is said of a table of contents")],Ye.prototype,"$saidOfATable");const ca=class ca extends f{get index(){return this.book?.table?.annotations.expressed(H)}$Search(...e){this.$Writing(...e),this.containers.replace(this,"span","div")}write(){const e=this.index,t=this.book;if(!(e===void 0||t===void 0))return c(m,{children:[a("span",{className:"pd-search-mark","aria-hidden":"true",children:"⌕"}),a("input",{className:"pd-search-word",type:"search",value:e.$search,placeholder:t.searchHint,"aria-label":"search",onInput:r(o=>e.search(o.target.value),"onInput")})]})}$Define(){super.$Define(),this.classes.add(this,"pd-search")}};r(ca,"$Search");let rs=ca;const la=class la extends f{get index(){return this.book?.table?.annotations.expressed(H)}$Results(...e){this.$Writing(...e),this.containers.replace(this,"span","div")}write(){const e=this.index,t=this.book;if(e===void 0||t===void 0)return;const o=e.$search.trim();if(o==="")return;const s=t.found(o);return c(m,{children:[a("span",{className:"pd-results-count",children:t.countOfFound(s,o)}),s.map((i,d)=>this.result(i,d))]})}result(e,t){const o=n(Li);return a(o,{chapter:this.chapter,hit:e},this.book.placeOf(e)??t)}$Define(){super.$Define(),this.classes.add(this,"pd-results")}};r(la,"$Results");let is=la;const ha=class ha extends j{write(){}$Define(){super.$Define(),this.classes.add(this,"pd-entry-open")}};r(ha,"$EntryOpen");let ds=ha;const fa=class fa extends f{get index(){return this.book?.table?.annotations.expressed(H)}$Result(...e){this.$Writing(...e),this.containers.replace(this,"span","div")}write(){const e=this.book,t=this.$hit,o=this.index;if(e===void 0||t===void 0||o===void 0)return;const s=o.$search.trim(),i=e.wordsOf(t),d=e.placeOf(t),u=n(w),x=n(er),b=n(this.open());return c(m,{children:[a("span",{className:"pd-result-title",children:Hn(i.title,s)}),t instanceof v&&t.is(B)?a(x,{entry:t}):void 0,a("span",{className:"pd-result-synopsis",children:Hn(zi(i.text,s),s)}),d===void 0?void 0:a(b,{entry:t,children:a(u,{children:d})})]})}open(){return Bi}$Define(){super.$Define(),this.classes.add(this,"pd-result")}};r(fa,"$Result");let ps=fa;const zi=r((p,e)=>{if(p.length<=190)return p;const t=p.toLowerCase().indexOf(e.toLowerCase());if(t<150)return`${p.slice(0,187)}…`;const o=p.lastIndexOf(" ",t-90)+1;return`…${p.slice(o,o+186)}…`},"clipped"),Hn=r((p,e)=>{if(e==="")return p;const t=p.toLowerCase(),o=e.toLowerCase(),s=[];let i=0;for(let d=t.indexOf(o);d!==-1;d=t.indexOf(o,i))s.push(p.slice(i,d),a("mark",{children:p.slice(d,d+e.length)},d)),i=d+e.length;return s.push(p.slice(i)),s},"marked"),ga=class ga extends j{write(){const[e,t,o]=(this.$entry?.annotations.expressed(B)?.date?.date??"").split("-");if(!(e===void 0||t===void 0||o===void 0))return new Date(Date.UTC(Number(e),Number(t)-1,Number(o.slice(0,2)))).toLocaleString("en-GB",{day:"numeric",month:"short",timeZone:"UTC"})}$Define(){super.$Define(),this.classes.add(this,"pd-entry-day")}};r(ga,"$EntryDay");let cs=ga;const ba=class ba extends j{write(){return String(this.$section?.text.find(f).filter(e=>N(e)!==void 0).length??0)}$Define(){super.$Define(),this.classes.add(this,"pd-section-count")}};r(ba,"$SectionCount");let ls=ba;const ua=class ua extends ${$isATableOfContents(e){l(e.is(Q),"an index is a table of contents, and this chapter is not one")}};r(ua,"IndexSpecification");let Xe=ua;le([h("an index is a table of contents")],Xe.prototype,"$isATableOfContents");const ma=class ma extends ${$isASectionOfTheTable(e){l(e instanceof M&&e.chapter?.is(Q)===!0,"the appendix is a section of the table of contents, and this is not one")}};r(ma,"AppendixSpecification");let Qe=ma;le([h("the appendix is a section of the table of contents")],Qe.prototype,"$isASectionOfTheTable");const $a=class $a extends ${$isARowThatLeadsSomewhere(e){l(e instanceof f&&N(e)!==void 0,"an entry is a row that leads somewhere, and this is not one")}};r($a,"EntrySpecification");let Ke=$a;le([h("an entry is a row that leads somewhere")],Ke.prototype,"$isARowThatLeadsSomewhere");const ka=class ka extends k{constructor(){super(...arguments),this.specification=new Ve}defines(e){e.classes.add(this,"pa-folded")}erase(e){e.classes.revert(this)}};r(ka,"$Folded");let hs=ka;const xa=class xa extends ee{get on(){return this.$foldedWriting!==void 0&&[this.$foldedWriting.$is].flat().includes(this.$annotation)}container(e){return super.container({...e,disabled:this.$foldedWriting===void 0,onClick:r(t=>{t.preventDefault(),this.press()},"onClick")})}press(){const e=this.$foldedWriting;if(e===void 0)return;const t=[e.$is].flat();e.$is=this.on?t.filter(o=>o!==this.$annotation):[this.$annotation,...t]}write(){return a("span",{className:"pd-drawing",dangerouslySetInnerHTML:{__html:Jn}})}$Define(){super.$Define(),this.classes.add(this,"pd-fold-chevron")}};r(xa,"$FoldChevron");let fs=xa;const va=class va extends X{constructor(){super(...arguments),this.specification=new et,this.tree=z.div`
        .pd-book .pd-holds &.pd-tree-folder .pd-fold-chevron, .pd-book .pd-holds &.pd-tree-folder .pd-tree-folder-mark, .pd-book .pd-holds &.pd-tree-folder .pa-entry .pd-file-tab { display: none; }
        .pd-book.pa-manual .pd-holds &.pd-tree-folder:not(.pa-open) { display: none; }
        .pd-book .pd-holds &.pd-tree-folder.pa-open { position: relative; }
        .pd-book .pd-holds &.pd-tree-folder.pa-open .pd-section { margin: 0 0 calc(${({theme:e})=>e.space} / 3); }
        .pd-book .pd-holds &.pd-tree-folder.pa-open .pd-sentence.pd-heading {
            display: flex;
            align-items: center;
            height: calc(1.9286 * ${({theme:e})=>e.size});
            margin: 0;
            padding: 0 calc(${({theme:e})=>e.space} * 0.5833) 0 calc(${({theme:e})=>e.space} * 2.3333);
            border: 0;
            font-size: calc(0.9286 * ${({theme:e})=>e.size});
            font-weight: 400;
            line-height: calc(1.9286 * ${({theme:e})=>e.size});
            letter-spacing: 0;
            text-transform: none;
            color: ${({theme:e})=>e.sideInk};
            transition: background ${({theme:e})=>e.beat} ease;
        }
        .pd-book .pd-holds &.pd-tree-folder.pa-open .pd-heading:hover { background: color-mix(in oklab, ${({theme:e})=>e.sky} 30%, white); }
        .pd-book .pd-holds &.pd-tree-folder.pa-open .pd-heading .pa-reference { color: inherit; text-decoration: none; }
        .pd-book .pd-holds &.pd-tree-folder.pa-open .pd-fold-chevron {
            display: grid;
            place-items: center;
            width: calc(1.1429 * ${({theme:e})=>e.size});
            height: calc(1.1429 * ${({theme:e})=>e.size});
            padding: 0;
            border: 0;
            border-radius: 0;
            background: none;
            color: #a5aebb;
            cursor: pointer;
            transition: transform 0.18s ease, color ${({theme:e})=>e.beat} ease;
        }
        .pd-book .pd-holds &.pd-tree-folder.pa-open .pd-fold-chevron .pd-drawing { display: block; width: calc(0.7143 * ${({theme:e})=>e.size}); height: calc(0.7143 * ${({theme:e})=>e.size}); }
        .pd-book .pd-holds &.pd-tree-folder.pa-open .pd-fold-chevron svg, .pd-book .pd-holds &.pd-tree-folder.pa-open .pd-tree-folder-mark svg, .pd-book .pd-holds &.pd-tree-folder.pa-open .pd-file-tab svg { display: block; width: 100%; height: 100%; }
        .pd-book .pd-holds &.pd-tree-folder.pa-open .pd-word.pd-fold-chevron[aria-pressed='true'] { color: #a5aebb; background: none; border-color: transparent; }
        .pd-book .pd-holds &.pd-tree-folder.pa-open .pd-fold-chevron[aria-pressed='false'] { transform: rotate(90deg); }
        .pd-book .pd-holds &.pd-tree-folder.pa-open .pd-fold-chevron:hover { color: ${({theme:e})=>e.ink}; }
        .pd-book .pd-holds &.pd-tree-folder.pa-open .pd-fold-chevron { position: absolute; top: calc(${({theme:e})=>e.space} * 0.2292); left: calc(${({theme:e})=>e.space} * 0.4167); }
        .pd-book .pd-holds &.pd-tree-folder.pa-open .pd-tree-folder-mark {
            display: block;
            position: absolute;
            top: calc(${({theme:e})=>e.space} * 0.2292);
            left: calc(${({theme:e})=>e.space} * 1.375);
            width: calc(1.1429 * ${({theme:e})=>e.size});
            height: calc(1.1429 * ${({theme:e})=>e.size});
            color: #8a94a3;
        }
        .pd-book .pd-holds &.pd-tree-folder.pa-open .pd-tree-folder-mark .ground { fill: #f1f3f5; stroke: #8a94a3; stroke-width: 1.5; }
        .pd-book:not(.pa-turned) .pd-holds &.pd-tree-folder.pa-open .pa-folded .pd-paragraph.pa-entry { display: none; }
        .pd-book .pd-holds &.pd-tree-folder.pa-open .pd-paragraph.pa-entry {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: flex-start;
            gap: 0 calc(${({theme:e})=>e.space} * 0.2917);
            margin: 0;
            min-height: calc(1.9286 * ${({theme:e})=>e.size});
            padding: 0 calc(${({theme:e})=>e.space} * 0.5833) 0 calc(${({theme:e})=>e.space} * 1.1667);
            border-radius: 0;
            font-size: calc(0.9286 * ${({theme:e})=>e.size});
            font-weight: 400;
            line-height: calc(1.9286 * ${({theme:e})=>e.size});
            color: ${({theme:e})=>e.sideInk};
            cursor: pointer;
            transition: color ${({theme:e})=>e.beat} ease;
        }
        .pd-book .pd-holds &.pd-tree-folder.pa-open .pd-paragraph.pa-entry::before { content: none; }
        .pd-book .pd-holds &.pd-tree-folder.pa-open .pa-entry .pd-fold-chevron { order: -2; position: static; }
        .pd-book .pd-holds &.pd-tree-folder.pa-open .pa-entry .pd-fold-chevron[disabled] { visibility: hidden; }
        .pd-book .pd-holds &.pd-tree-folder.pa-open .pa-entry .pd-icon { order: -1; }
        .pd-book .pd-holds &.pd-tree-folder.pa-open .pa-entry .pa-content { flex: 1; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
        .pd-book .pd-holds &.pd-tree-folder.pa-open .pa-entry:hover { background: linear-gradient(color-mix(in oklab, ${({theme:e})=>e.sky} 40%, white), color-mix(in oklab, ${({theme:e})=>e.sky} 40%, white)) left top / 100% calc(1.9286 * ${({theme:e})=>e.size}) no-repeat; }
        .pd-book .pd-holds &.pd-tree-folder.pa-open .pd-paragraph.pa-entry.pa-open {
            background: linear-gradient(var(--band-ink), var(--band-ink)) left top / 3px calc(1.9286 * ${({theme:e})=>e.size}) no-repeat, linear-gradient(color-mix(in oklab, ${({theme:e})=>e.sky} 72%, white), color-mix(in oklab, ${({theme:e})=>e.sky} 72%, white)) left top / 100% calc(1.9286 * ${({theme:e})=>e.size}) no-repeat;
            color: var(--band-ink);
            font-weight: 400;
            box-shadow: none;
        }
        .pd-book .pd-holds &.pd-tree-folder.pa-open .pa-number { order: 1; margin: 0; font-size: calc(0.75 * ${({theme:e})=>e.size}); color: color-mix(in oklch, var(--foot-ink) 48%, white); font-variant-numeric: tabular-nums; }
        .pd-book .pd-holds &.pd-tree-folder.pa-open .pd-paragraph.pa-entry .pd-file-tab {
            order: 2;
            flex: 0 0 calc(100% + ${({theme:e})=>e.space} * 1.75);
            margin: 0 calc(${({theme:e})=>e.space} * -0.5833) 0 calc(${({theme:e})=>e.space} * -1.1667);
            padding: 0 calc(${({theme:e})=>e.space} * 0.5833) 0 calc(${({theme:e})=>e.space} * 2.875);
        }
        .pd-book .pd-holds &.pd-tree-folder.pa-open .pd-paragraph.pa-entry.pa-folded .pd-file-tab { display: none; }
        .pd-book .pd-holds &.pd-tree-folder.pa-open .pd-paragraph.pa-entry .pd-file-tab {
            display: flex;
            align-items: center;
            gap: calc(${({theme:e})=>e.space} * 0.2917);
            height: calc(1.9286 * ${({theme:e})=>e.size});
            border: 0;
            border-radius: 0;
            background: none;
            font: inherit;
            font-size: calc(0.9286 * ${({theme:e})=>e.size});
            font-weight: 400;
            line-height: calc(1.9286 * ${({theme:e})=>e.size});
            color: ${({theme:e})=>e.sideInk};
            text-align: start;
            cursor: pointer;
            transition: background ${({theme:e})=>e.beat} ease, color ${({theme:e})=>e.beat} ease;
        }
        .pd-book .pd-holds &.pd-tree-folder.pa-open .pd-file-tab .pd-drawing { flex: none; width: ${({theme:e})=>e.size}; height: ${({theme:e})=>e.size}; color: #a5aebb; transition: color ${({theme:e})=>e.beat} ease; }
        .pd-book .pd-holds &.pd-tree-folder.pa-open .pd-file-tab:hover { background: color-mix(in oklab, ${({theme:e})=>e.sky} 40%, white); color: ${({theme:e})=>e.ink}; }
        .pd-book.pa-split .pd-holds &.pd-tree-folder.pa-open .pd-paragraph.pa-entry .pd-file-tab[aria-pressed='true'], .pd-book.pa-code-forward .pd-holds &.pd-tree-folder.pa-open .pd-paragraph.pa-entry .pd-file-tab[aria-pressed='true'] { color: ${({theme:e})=>e.skyInk}; font-weight: 500; background: color-mix(in oklab, ${({theme:e})=>e.sky} 45%, white); }
        .pd-book.pa-split .pd-holds &.pd-tree-folder.pa-open .pd-paragraph.pa-entry .pd-file-tab[aria-pressed='true'] .pd-drawing, .pd-book.pa-code-forward .pd-holds &.pd-tree-folder.pa-open .pd-paragraph.pa-entry .pd-file-tab[aria-pressed='true'] .pd-drawing { color: var(--colour); }
        .pd-book .pd-holds &.pd-tree-folder.pa-foldable { position: relative; }
        .pd-book .pd-holds &.pd-tree-folder.pa-foldable .pd-section { margin: 0 0 calc(${({theme:e})=>e.space} / 6); }
        .pd-book .pd-holds &.pd-tree-folder.pa-foldable .pd-sentence.pd-heading { display: flex; align-items: center; gap: calc(${({theme:e})=>e.space} / 3); height: calc(2.1429 * ${({theme:e})=>e.size}); margin: 0; padding: 0 calc(${({theme:e})=>e.space} * 0.5833) 0 calc(${({theme:e})=>e.space} * 1.5); border: 0; font-size: calc(0.9286 * ${({theme:e})=>e.size}); font-weight: 500; line-height: 1; letter-spacing: 0; text-transform: none; color: ${({theme:e})=>e.sideInk}; cursor: pointer; transition: background ${({theme:e})=>e.beat} ease; }
        .pd-book .pd-holds &.pd-tree-folder.pa-foldable .pd-heading:hover { background: color-mix(in oklab, ${({theme:e})=>e.sky} 30%, white); }
        .pd-book .pd-holds &.pd-tree-folder.pa-foldable .pd-heading .pa-reference { color: inherit; text-decoration: none; }
        .pd-book .pd-holds &.pd-tree-folder.pa-foldable .pd-fold-chevron { display: grid; place-items: center; position: absolute; top: calc(${({theme:e})=>e.space} * 0.3125); left: calc(${({theme:e})=>e.space} * 0.5); width: calc(1.1429 * ${({theme:e})=>e.size}); height: calc(1.1429 * ${({theme:e})=>e.size}); padding: 0; border: 0; border-radius: 0; background: none; color: #a5aebb; cursor: pointer; transition: transform 0.18s ease, color ${({theme:e})=>e.beat} ease; }
        .pd-book .pd-holds &.pd-tree-folder.pa-foldable .pd-fold-chevron .pd-drawing { display: block; width: calc(0.7143 * ${({theme:e})=>e.size}); height: calc(0.7143 * ${({theme:e})=>e.size}); }
        .pd-book .pd-holds &.pd-tree-folder.pa-foldable .pd-fold-chevron svg { display: block; width: 100%; height: 100%; }
        .pd-book .pd-holds &.pd-tree-folder.pa-foldable .pd-fold-chevron[aria-pressed='false'] { transform: rotate(90deg); }
        .pd-book .pd-holds &.pd-tree-folder.pa-foldable .pd-fold-chevron:hover { color: ${({theme:e})=>e.ink}; }
        .pd-book .pd-holds &.pd-tree-folder.pa-foldable .pd-tree-folder-mark, .pd-book .pd-holds &.pd-tree-folder.pa-foldable .pa-entry .pd-file-tab, .pd-book .pd-holds &.pd-tree-folder.pa-foldable .pa-entry .pd-fold-chevron { display: none; }
        .pd-book .pd-holds &.pd-tree-folder.pa-foldable .pa-folded .pd-paragraph.pa-entry { display: none; }
        .pd-book .pd-holds &.pd-tree-folder.pa-foldable .pd-paragraph.pa-entry { display: flex; flex-wrap: nowrap; align-items: center; gap: calc(${({theme:e})=>e.space} / 3); margin: 0; padding: calc(${({theme:e})=>e.space} / 6) calc(${({theme:e})=>e.space} * 0.5833) calc(${({theme:e})=>e.space} / 6) calc(${({theme:e})=>e.space} * 1.5); font-size: calc(0.8929 * ${({theme:e})=>e.size}); line-height: 1.35; color: ${({theme:e})=>e.sideInk}; }
        .pd-book .pd-holds &.pd-tree-folder.pa-foldable .pd-paragraph.pa-entry > a:first-child, .pd-book .pd-holds &.pd-tree-folder.pa-foldable .pd-paragraph.pa-entry > .pd-word.pa-content, .pd-book .pd-holds &.pd-tree-folder.pa-foldable .pd-paragraph.pa-entry .pa-content { flex: 1 1 auto; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
        .pd-book .pd-holds &.pd-tree-folder.pa-foldable .pd-paragraph.pa-entry .pd-word.pa-arrow, .pd-book .pd-holds &.pd-tree-folder.pa-foldable .pd-paragraph.pa-entry > a:has(> .pa-arrow) { display: none; }
        .pd-book .pd-holds &.pd-tree-folder.pa-foldable .pd-paragraph.pa-entry .pa-number { display: none; }
        .pd-book .pd-holds &.pd-tree-folder.pa-foldable .pd-paragraph.pa-entry:hover { background: color-mix(in oklab, ${({theme:e})=>e.sky} 30%, white); }
        .pd-book .pd-holds &.pd-tree-folder.pa-foldable .pd-paragraph.pa-entry.pa-open { background: linear-gradient(90deg, #eff4fa, #f8fafd); color: ${({theme:e})=>e.heading}; font-weight: 500; }
        .pd-book .pd-holds &.pd-tree-folder.pa-foldable.pa-open .pd-sentence.pd-heading { background: linear-gradient(90deg, #eff4fa, #f8fafd); color: ${({theme:e})=>e.heading}; }
        .pd-book .pd-holds &.pd-tree-folder .pd-sentence.pd-heading .pd-word.pd-section-count { margin-inline-start: auto; font-size: calc(0.7857 * ${({theme:e})=>e.size}); font-weight: 400; color: ${({theme:e})=>e.faint}; font-variant-numeric: tabular-nums; }
        .pd-book .pd-holds &.pd-tree-folder .pa-entry .pd-word.pd-entry-day { flex: none; margin-inline-start: auto; font-size: calc(0.7857 * ${({theme:e})=>e.size}); font-weight: 400; color: ${({theme:e})=>e.faint}; font-variant-numeric: tabular-nums; }
        @media (max-width: ${({theme:e})=>e.narrow}) {
            .pd-book .pd-holds &.pd-tree-folder.pa-open .pd-fold-chevron, .pd-book .pd-holds &.pd-tree-folder.pa-open .pd-tree-folder-mark, .pd-book .pd-holds &.pd-tree-folder.pa-open .pa-entry .pd-file-tab { display: none; }
            .pd-book .pd-holds &.pd-tree-folder.pa-open .pd-sentence.pd-heading { height: auto; padding: 0 calc(${({theme:e})=>e.space} / 2); }
            .pd-book:not(.pa-turned) .pd-holds .pd-chapter.pa-table-of-contents:has(> &.pd-tree-folder.pa-foldable) { flex-direction: row; align-items: center; min-height: 0; }
            .pd-book .pd-holds &.pd-tree-folder.pa-foldable { display: inline-block; vertical-align: top; }
            .pd-book .pd-holds &.pd-tree-folder.pa-foldable .pd-fold-chevron { position: static; display: inline-grid; vertical-align: middle; margin-inline-end: 2px; }
            .pd-book .pd-holds &.pd-tree-folder.pa-foldable .pd-sentence.pd-heading { display: inline-flex; height: calc(1.9 * ${({theme:e})=>e.size}); padding: 0 calc(${({theme:e})=>e.space} / 2) 0 calc(${({theme:e})=>e.space} / 6); }
            .pd-book .pd-holds &.pd-tree-folder.pa-foldable .pd-section { display: inline; margin: 0; }
            .pd-book .pd-holds &.pd-tree-folder.pa-foldable .pd-paragraph.pa-entry { display: none; }
        }
    `}get section(){return this.parent}get firstPlace(){return this.section.text.find(f).map(e=>N(e)).find(e=>e!==void 0)?.identifier}get part(){const e=this.firstPlace;return e===void 0?void 0:this.book.chapterAt(e)?.part}get open(){const e=this.book,t=e.open,o=e.$bookmark,s=this.section.mention?.identifier;return o!==void 0&&o.includes("#")&&this.section.text.find(f).some(d=>N(d)?.identifier===o)||t!==void 0&&t.part!==void 0&&t.part.name===this.part?.name||s!==void 0&&e.placeWithin(s)===o}$TreeFolder(...e){this.$Format(...e);const t=this.tree,o=n(tr),s=n(C),i=n(w);this.style=({className:d,children:u})=>{const x=this.firstPlace,b=[...this.section.classes].includes("pa-open"),O=this.book.open!==void 0,Ne=this.chapter?.annotations.expressed(H)?.$folded===!0&&!(b&&O),he=a("span",{className:"pd-drawing pd-tree-folder-mark",dangerouslySetInnerHTML:{__html:wi}});return c(t,{className:`${d??""} pd-tree-folder${b?" pa-open":""}${Ne?" pa-foldable":""}`.trim(),children:[a(o,{foldedWriting:this.section,annotation:bs}),x===void 0?he:c(s,{children:[a(i,{children:x}),he]}),u]})}}defines(e){super.defines(e),e.classes.add(this,"pa-tree-folder"),this.open&&e.classes.add(this,"pa-open")}erase(e){super.erase(e),e.classes.revert(this)}};r(va,"$TreeFolder");let Je=va;const ya=class ya extends ${$saidOfASectionOrAnEntry(e){l(e instanceof M&&e.chapter?.is(Q)===!0||e.is(re),"folded is said of a section of a table of contents or of an entry, and this is neither")}};r(ya,"FoldedSpecification");let Ve=ya;le([h("folded is said of a section of a table of contents or of an entry")],Ve.prototype,"$saidOfASectionOrAnEntry");const wa=class wa extends ${$isASectionOfTheTable(e){l(e instanceof M&&e.chapter?.is(Q)===!0,"a tree folder is a section of the table of contents, and this is not one")}};r(wa,"TreeFolderSpecification");let et=wa;le([h("a tree folder is a section of the table of contents")],et.prototype,"$isASectionOfTheTable");const za=class za extends f{get cover(){return this.$cover??this.book?.cover}write(){const e=this.cover,t=n(C),o=n(w);return c(t,{children:[a(o,{children:e.mention.identifier}),a("span",{className:"pd-drawing",dangerouslySetInnerHTML:{__html:Jn}}),e.title.name]})}$Define(){super.$Define(),this.classes.add(this,"pd-tree-root")}};r(za,"$TreeRoot");let gs=za;const N=r(p=>p.annotations.expressed(In)??p.text.find(j).map(e=>e.annotations.expressed(In)).find(e=>e!==void 0),"contentOf"),Oi=n(re),np=n(H),Di=n(qe),ji=n(rs),Ci=n(is),Pi=n(ps),Mi=n(ds),Ai=n(cs),Ni=n(ls),rp=n(ve),Ii=n(hs),Ti=n(fs),Vn=n(Je),Hi=n(gs),Wi=Oi,Wn=Di,Li=Pi,Bi=Mi,er=Ai,_i=Ni,bs=Ii,tr=Ti,Oa=class Oa extends mr{constructor(){super(...arguments),this.font="'Inter', system-ui, sans-serif",this.prose="'Inter', system-ui, sans-serif",this.mono="'JetBrains Mono', ui-monospace, monospace",this.size="0.875rem",this.leading="1.6",this.measure="44rem",this.spreadColumn="15.5rem",this.space="1.5rem",this.holdsColumn="240px",this.barHeight="50px",this.beat="320ms",this.narrow="48rem",this.phoneWidth="390px",this.colour="#4e9eb9",this.accent="#166178",this.bar="#0c1b1f",this.barInk="#ffffff",this.barDim="#a9bcc1",this.barOn="rgba(255, 255, 255, 0.11)",this.barLine="#1d3339",this.mark="#c8f4fb",this.side="#e3f5fa",this.sideInk="#10252c",this.sideDim="#516770",this.sideOn="#ffffff",this.sideLine="#cbe6ee",this.night="#0c1b1f",this.deep="#14323c",this.blue="#166178",this.sea="#4e9eb9",this.sky="#8fc8dc",this.opal="#c8f4fb",this.pale="#e3f5fa",this.mist="#f1f7f9",this.white="#ffffff",this.ink="#10252c",this.soft="#516770",this.line="#dbe7ec",this.me="#e8590c",this.wash="linear-gradient(105deg, #e2f6fb 0%, #ecf0fd 52%, #fae9f4 100%)",this.serif="'Source Serif 4', Georgia, serif",this.between="'Source Sans 3', 'Inter', system-ui, sans-serif",this.bookPaper="#fbf9f3",this.bookInk="#29251d",this.heading="#10252c",this.capital="#166178",this.lit="#166178",this.faint="#8792a2",this.paper="#ffffff",this.panel="#f1f7f9",this.rule="#dbe7ec",this.edge="transparent",this.tint="#e3f5fa",this.dusk="#14323c",this.glow="#cfe6e3",this.dim="#4f7672",this.keyword="#8ad7ff",this.string="#ffd48a",this.type="#9be3d6",this.comment="#5f8a86",this.haze="#a9bcc1",this.glass="rgba(255, 255, 255, 0.62)",this.binding="linear-gradient(160deg, #16303a, #0c1b1f)",this.spine="inset 5px 0 0 rgba(0, 0, 0, 0.14), inset 6px 0 0 rgba(255, 255, 255, 0.12), 0 10px 20px -10px rgba(0, 0, 0, 0.45)",this.shadow="0 0.75rem 1.4rem -0.9rem rgba(12, 27, 31, 0.55)",this.volume="11.5rem",this.cover="8.25rem",this.card="18rem",this.barLight="#ffffff",this.barMid="#f1f7f9",this.barDeep="#e3f5fa",this.barShadow="none",this.sideLight="#ffffff",this.sideDeep="#e3f5fa",this.codeGround="#f1f7f9",this.hairline="1px",this.stroke="2px",this.rise="-1px",this.gloss="none",this.ring="0 0 0 2px #c8f4fb",this.decisionShadow="none",this.photo="7rem",this.radius="0.375rem",this.barTint="#ffffff",this.skyInk="#166178",this.lift="inset 5px 0 0 rgba(0, 0, 0, 0.14), inset 6px 0 0 rgba(255, 255, 255, 0.12), 0 14px 24px -12px rgba(0, 0, 0, 0.5)",this.openSpine="inset 7px 0 0 rgba(0, 0, 0, 0.14), inset 8px 0 0 rgba(255, 255, 255, 0.12), 0 12px 22px -14px rgba(0, 0, 0, 0.5)",this.sans="'Inter', system-ui, sans-serif",this.muted="#516770",this.bubble="rgba(16, 37, 44, 0.05)",this.shade="rgba(16, 37, 44, 0.03)",this.pill="#166178",this.column="48rem",this.style=z.div`${this.parts()}`}parts(){return[this.page(),this.writing(),this.links(),this.figures(),this.listings(),this.switches(),this.turns(),this.illustrations(),this.marks(),this.library(),this.head(),this.holds(),this.context(),this.tones()]}page(){return g`
            font-family: ${({theme:e})=>e.font};
            font-size: ${({theme:e})=>e.size};
            line-height: ${({theme:e})=>e.leading};
            color: ${({theme:e})=>e.ink};
            background: ${({theme:e})=>e.paper};
            min-height: 100vh;
        `}writing(){return g`
            .pd-pages { font-family: ${({theme:e})=>e.prose}; }
            .pd-chapter, .pd-section, .pd-paragraph { margin-block: ${({theme:e})=>e.space}; }
            .pd-chapter { max-width: ${({theme:e})=>e.measure}; }
        `}links(){return g`
            .pa-reference { color: ${({theme:e})=>e.accent}; }
            .pa-reference.pa-self-reference { color: inherit; text-decoration: none; }
        `}figures(){return g`
            .pd-image img { display: block; max-width: 100%; height: auto; }
            .pa-phone .pd-image img { max-width: min(100%, ${({theme:e})=>e.phoneWidth}); }
            .pd-code { font-family: ${({theme:e})=>e.mono}; overflow-x: auto; }
        `}listings(){return g`
            .pd-code-line { padding-inline-end: calc(${({theme:e})=>e.space} * 0.75); }
            .pd-code-line::before {
                content: attr(data-line);
                display: inline-block;
                width: calc(${({theme:e})=>e.space} * 1.17);
                padding-inline-end: calc(${({theme:e})=>e.space} * 0.58);
                text-align: end;
                color: ${({theme:e})=>e.dim};
                user-select: none;
            }
            .hljs-keyword, .hljs-built_in, .hljs-literal { color: ${({theme:e})=>e.keyword}; }
            .hljs-string, .hljs-regexp, .hljs-number { color: ${({theme:e})=>e.string}; }
            .hljs-title, .hljs-type, .hljs-tag, .hljs-name, .hljs-attr { color: ${({theme:e})=>e.type}; }
            .hljs-comment, .hljs-meta { color: ${({theme:e})=>e.comment}; }
            .pd-code-box { border: 1px solid rgba(11, 11, 11, .1); border-radius: 12px; background: rgba(255, 255, 255, .5); overflow: hidden; }
            .pd-code-box .pd-code-bar { display: flex; align-items: center; justify-content: space-between; padding: 6px 8px 6px 14px; border-block-end: 1px solid rgba(11, 11, 11, .07); background: rgba(11, 11, 11, .025); font-family: ${({theme:e})=>e.sans}; font-size: 11.5px; font-weight: 500; line-height: 1.4; color: ${({theme:e})=>e.soft}; }
            .pd-code-box .pd-code-bar .pd-copy { border: 0; background: none; padding: 2px 8px; border-radius: 6px; font: inherit; color: inherit; cursor: pointer; }
            .pd-code-box .pd-code-bar .pd-copy:hover { background: rgba(11, 11, 11, .05); color: ${({theme:e})=>e.ink}; }
            .pd-code-box pre { margin: 0; padding: 14px; font-family: ${({theme:e})=>e.mono}; font-size: 14px; line-height: 22.75px; color: #14181f; overflow: auto; }
        `}switches(){return g`
            .pd-switch {
                font: inherit;
                color: ${({theme:e})=>e.soft};
                background: ${({theme:e})=>e.paper};
                border: thin solid ${({theme:e})=>e.line};
                border-radius: calc(${({theme:e})=>e.space} / 4);
                padding: calc(${({theme:e})=>e.space} / 8) calc(${({theme:e})=>e.space} / 2);
                cursor: pointer;
            }
            .pd-word.pd-switch[aria-pressed='true'] {
                color: ${({theme:e})=>e.white};
                background: ${({theme:e})=>e.accent};
                border-color: ${({theme:e})=>e.accent};
            }
        `}illustrations(){return g`
            .pd-illustration { fill: none; stroke: var(--ink); stroke-width: 1.7; stroke-linecap: round; stroke-linejoin: round; }
            .pd-illustration .fill { fill: var(--foot); stroke: var(--ink); }
            .pd-illustration .light { fill: ${({theme:e})=>e.white}; stroke: none; }
            .pd-drawing { display: grid; place-items: center; min-height: 0; }
        `}marks(){return g`
            .pd-word.pd-mark {
                display: block;
                position: relative;
                flex: none;
                box-sizing: border-box;
                width: calc(2 * ${({theme:e})=>e.size});
                height: calc(2 * ${({theme:e})=>e.size});
                border: calc(${({theme:e})=>e.volume} * 0.54 / 64 * 1.7) solid var(--ink);
                background: var(--band);
                overflow: hidden;
            }
            .pd-mark .pd-drawing { display: block; }
            .pd-mark .pd-illustration {
                position: absolute;
                width: calc(${({theme:e})=>e.volume} * 0.54);
                height: calc(${({theme:e})=>e.volume} * 0.54);
                left: var(--window-x);
                top: var(--window-y);
            }
        `}library(){return g`
            .pd-book .pd-library { box-sizing: border-box; height: ${({theme:e})=>e.barHeight}; padding: 0 calc(${({theme:e})=>e.space} * 0.75); background: ${({theme:e})=>e.barTint}; border-block-end: thin solid ${({theme:e})=>e.line}; }
            .pd-library .pd-paragraph, .pd-me .pd-paragraph { margin-block: 0; }
            .pd-library .pa-reference, .pd-me .pa-reference { color: inherit; text-decoration: none; }
            .pd-library .pa-reference:hover .pd-name, .pd-me .pa-reference:hover { text-decoration: underline; text-underline-offset: 3px; }
            .pd-paragraph.pd-logo { display: flex; align-items: center; height: ${({theme:e})=>e.barHeight}; }
            .pd-logo .pa-reference, .pd-me .pd-mark .pa-reference { display: block; }
            .pd-logo .pd-filed, .pd-logo .pd-own { display: block; flex: none; overflow: hidden; transition: width ${({theme:e})=>e.beat} ease, margin ${({theme:e})=>e.beat} ease, opacity ${({theme:e})=>e.beat} ease; }
            .pd-logo .pd-own { width: calc(2 * ${({theme:e})=>e.size}); }
            .pd-logo .pd-scheme + .pd-scheme .pd-own { margin-inline-start: calc(${({theme:e})=>e.space} / 6); }
            .pd-logo.pa-unfolded .pd-own { width: 0; margin-inline-start: 0; opacity: 0; }
            .pd-names { display: grid; margin-inline-start: calc(${({theme:e})=>e.space} * 0.375); }
            .pd-names .pd-scheme { grid-area: 1 / 1; }
            .pd-names .pd-name {
                display: block;
                font-family: ${({theme:e})=>e.between};
                font-size: calc(1.357 * ${({theme:e})=>e.size});
                font-weight: 600;
                line-height: 1;
                letter-spacing: -0.01em;
                white-space: nowrap;
                color: var(--band-ink, ${({theme:e})=>e.ink});
                transform: translateY(1px);
                transition: opacity ${({theme:e})=>e.beat} ease, transform ${({theme:e})=>e.beat} ease;
            }
            .pd-names .pd-name.pd-under { font-family: ${({theme:e})=>e.serif}; font-size: calc(1.286 * ${({theme:e})=>e.size}); font-weight: 700; letter-spacing: -0.015em; opacity: 0; transform: translateY(7px); pointer-events: none; }
            .pd-logo.pa-unfolded .pd-names .pd-name { opacity: 0; transform: translateY(-5px); pointer-events: none; }
            .pd-logo.pa-unfolded .pd-names .pd-name.pd-under { opacity: 1; transform: translateY(1px); pointer-events: auto; }
            .pd-me { gap: calc(${({theme:e})=>e.space} * 0.375); padding: 0 calc(${({theme:e})=>e.space} * 0.75); }
            .pd-me .pd-paragraph { display: flex; align-items: center; gap: calc(${({theme:e})=>e.space} * 0.375); font-size: calc(0.93 * ${({theme:e})=>e.size}); color: ${({theme:e})=>e.soft}; }
            .pd-me .pd-word.pa-reference { color: ${({theme:e})=>e.ink}; font-weight: 500; }
        `}head(){return g`
            .pd-head { padding: calc(${({theme:e})=>e.space} * 0.83) calc(${({theme:e})=>e.space} * 1.17) calc(${({theme:e})=>e.space} * 0.58); }
            .pd-head .pd-chapter { margin-block: 0; }
            .pd-head .pd-title {
                font-family: ${({theme:e})=>e.serif};
                font-size: calc(2.57 * ${({theme:e})=>e.size});
                font-weight: 600;
                line-height: 1.04;
                color: ${({theme:e})=>e.heading};
            }
            .pd-head .pa-illustration { display: none; }
        `}holds(){return g`
            .pd-holds { padding: calc(${({theme:e})=>e.space} * 0.83) calc(${({theme:e})=>e.space} / 2); }
            .pd-holds .pd-chapter { margin-block: 0; color: ${({theme:e})=>e.soft}; }
            .pd-holds .pd-section { margin-block: ${({theme:e})=>e.space} 0; }
            .pd-holds .pd-heading {
                display: flex;
                justify-content: space-between;
                margin-block: 0 calc(${({theme:e})=>e.space} / 3);
                padding-inline: calc(${({theme:e})=>e.space} * 0.375);
                font-size: calc(0.76 * ${({theme:e})=>e.size});
                font-weight: 600;
                letter-spacing: 0.12em;
                text-transform: uppercase;
                color: ${({theme:e})=>e.soft};
            }
            .pd-holds .pd-paragraph.pa-entry {
                position: relative;
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: calc(${({theme:e})=>e.space} * 0.375);
                margin-block: 0;
                padding: calc(${({theme:e})=>e.space} / 4) calc(${({theme:e})=>e.space} * 0.375) calc(${({theme:e})=>e.space} / 4) calc(${({theme:e})=>e.space} * 1.1);
                border-radius: calc(${({theme:e})=>e.space} / 3);
                font-weight: 500;
                color: ${({theme:e})=>e.ink};
            }
            .pd-holds .pd-paragraph.pa-entry::before {
                content: '';
                position: absolute;
                inset-inline-start: calc(${({theme:e})=>e.space} * 0.375);
                width: calc(${({theme:e})=>e.space} * 0.375);
                height: calc(${({theme:e})=>e.space} * 0.375);
                border-radius: 50%;
                background: var(--colour, ${({theme:e})=>e.colour});
            }
            .pd-holds .pd-paragraph.pa-entry.pa-open { background: ${({theme:e})=>e.sideOn}; color: ${({theme:e})=>e.accent}; }
            .pd-holds .pa-reference.pa-reference { color: inherit; text-decoration: none; }
            .pd-holds .pd-section.pa-appendix { opacity: 0.72; }
            .pd-holds .pd-section.pa-appendix .pd-heading { font-size: calc(0.66 * ${({theme:e})=>e.size}); }
            .pd-holds .pd-section.pa-appendix .pd-paragraph.pa-entry { font-size: calc(0.86 * ${({theme:e})=>e.size}); }
            @media not all and (max-width: ${({theme:e})=>e.narrow}) {
                .pd-holds > * { display: flex; flex-direction: column; min-height: 100%; }
                .pd-holds .pd-chapter.pa-table-of-contents { flex: 1; display: flex; flex-direction: column; }
                .pd-holds .pd-section.pa-appendix { margin-block-start: auto; }
            }
            @media (max-width: ${({theme:e})=>e.narrow}) {
                .pd-holds { padding: calc(${({theme:e})=>e.space} * 0.42) calc(${({theme:e})=>e.space} * 0.67) calc(${({theme:e})=>e.space} / 2); }
                .pd-holds .pd-chapter, .pd-holds .pd-section {
                    display: flex;
                    align-items: center;
                    gap: calc(${({theme:e})=>e.space} / 4);
                    margin-block: 0;
                }
                .pd-holds .pd-title { display: none; }
                .pd-holds .pd-heading { flex: none; margin: 0 calc(${({theme:e})=>e.space} / 4) 0 calc(${({theme:e})=>e.space} / 2); padding: 0; }
                .pd-holds .pd-paragraph.pa-entry {
                    flex: none;
                    padding: calc(${({theme:e})=>e.space} * 0.21) calc(${({theme:e})=>e.space} * 0.46) calc(${({theme:e})=>e.space} * 0.21) calc(${({theme:e})=>e.space} * 0.375);
                    border: thin solid currentColor;
                    border-radius: calc(${({theme:e})=>e.space} * 4);
                    white-space: nowrap;
                }
                .pd-holds .pd-paragraph.pa-entry::before { display: none; }
            }
        `}context(){return g`
            .pd-holds .pd-paragraph.pd-tree-root { display: none; }
            .pd-book.pa-manual .pd-holds .pd-section:not(.pa-tree-folder) { display: none; }
            .pd-book.pa-manual .pd-holds .pd-tree-folder { order: -1; }
            .pd-book.pa-manual .pd-holds .pd-paragraph.pd-tree-root {
                display: flex;
                order: -2;
                align-items: center;
                margin: 0 0 calc(${({theme:e})=>e.space} / 3);
                padding: 0 calc(${({theme:e})=>e.space} * 0.5833) 0 calc(${({theme:e})=>e.space} * 0.4167);
                font-size: calc(0.9286 * ${({theme:e})=>e.size});
                font-weight: 500;
                line-height: calc(1.9286 * ${({theme:e})=>e.size});
                color: ${({theme:e})=>e.sideInk};
            }
            .pd-book.pa-manual .pd-holds .pd-tree-root .pd-word { display: inline-flex; align-items: center; gap: calc(${({theme:e})=>e.space} * 0.2917); }
            .pd-book.pa-manual .pd-holds .pd-tree-root .pd-drawing { width: calc(0.7143 * ${({theme:e})=>e.size}); height: calc(0.7143 * ${({theme:e})=>e.size}); color: ${({theme:e})=>e.faint}; transform: rotate(180deg); }
            .pd-book.pa-manual .pd-holds .pd-tree-root svg { display: block; width: 100%; height: 100%; }
            .pd-book.pa-manual .pd-holds .pd-tree-root .pa-reference { color: inherit; text-decoration: none; }
            .pd-book.pa-manual .pd-holds .pd-tree-root:hover { color: ${({theme:e})=>e.ink}; }
        `}tones(){return g`
            .pa-dark .pd-library, .pa-dark .pd-me {
                background: ${({theme:e})=>e.bar};
                color: ${({theme:e})=>e.barInk};
            }
            .pa-dark .pd-library .pd-word, .pa-dark .pd-me .pd-word { color: ${({theme:e})=>e.barInk}; }
            .pa-dark .pd-library .pa-label, .pa-dark .pd-me .pa-label { color: ${({theme:e})=>e.barDim}; }
            .pa-dark .pd-holds, .pa-light .pd-holds {
                background: ${({theme:e})=>e.side};
                color: ${({theme:e})=>e.sideInk};
                border-inline-end: thin solid ${({theme:e})=>e.sideLine};
            }
            .pa-dark .pd-holds .pd-chapter, .pa-dark .pd-holds .pd-heading, .pa-light .pd-holds .pd-chapter, .pa-light .pd-holds .pd-heading { color: ${({theme:e})=>e.sideDim}; }
            .pa-light .pd-library, .pa-light .pd-me, .pa-white-over-black .pd-library, .pa-white-over-black .pd-me {
                background: ${({theme:e})=>e.paper};
                color: ${({theme:e})=>e.ink};
            }
            .pa-light .pd-library, .pa-white-over-black .pd-library { border-block-end: thin solid ${({theme:e})=>e.line}; }
            .pa-light .pd-library .pd-word, .pa-light .pd-me .pd-word, .pa-white-over-black .pd-library .pd-word, .pa-white-over-black .pd-me .pd-word { color: ${({theme:e})=>e.ink}; }
            .pa-light .pd-library .pa-label, .pa-light .pd-me .pa-label, .pa-white-over-black .pd-library .pa-label, .pa-white-over-black .pd-me .pa-label { color: ${({theme:e})=>e.soft}; }
            .pa-white-over-black .pd-holds {
                background: ${({theme:e})=>e.bar};
                color: ${({theme:e})=>e.barInk};
                border-inline-end: thin solid ${({theme:e})=>e.barLine};
            }
            .pa-white-over-black .pd-holds .pd-chapter, .pa-white-over-black .pd-holds .pd-heading { color: ${({theme:e})=>e.barDim}; }
            .pa-white-over-black .pd-holds .pd-paragraph.pa-entry { color: ${({theme:e})=>e.barInk}; }
            .pa-white-over-black .pd-holds .pd-paragraph.pa-entry.pa-open { background: ${({theme:e})=>e.barOn}; color: ${({theme:e})=>e.barInk}; }
        `}turns(){return g`
            .pd-paragraph.pd-turn {
                display: flex;
                justify-content: space-between;
                gap: ${({theme:e})=>e.space};
                font-size: calc(0.786 * ${({theme:e})=>e.size});
            }
            .pd-turn .pa-reference { font-weight: 500; text-decoration: none; }
            .pd-turn .pd-count { color: ${({theme:e})=>e.faint}; }
        `}};r(Oa,"$LibraryBookTheme");let tt=Oa;const Ri=n(tt);var Fi=Object.defineProperty,Si=Object.getOwnPropertyDescriptor,Ei=r((p,e,t,o)=>{for(var s=Si(e,t),i=p.length-1,d;i>=0;i--)(d=p[i])&&(s=d(e,t,s)||s);return s&&Fi(e,t,s),s},"__decorateClass$9");const yt=class yt extends $r{constructor(){super(...arguments),this.specification=new st,this.themeProvider=!0,this.style=z.div`
        ${e=>e.$scheme??""}
        ${this.parts()}
        .pa-dark .pd-subjects .pd-paragraph:has(> .pa-reference[href='${e=>e.$at}']) {
            background: ${({theme:e})=>e.barOn};
            color: ${({theme:e})=>e.barInk};
            box-shadow: inset 0 -2px 0 var(--colour, ${({theme:e})=>e.barDim});
        }
        .pa-light .pd-subjects .pd-paragraph:has(> .pa-reference[href='${e=>e.$at}']), .pa-white-over-black .pd-subjects .pd-paragraph:has(> .pa-reference[href='${e=>e.$at}']) {
            background: ${({theme:e})=>e.side};
            color: ${({theme:e})=>e.ink};
            box-shadow: inset 0 -2px 0 var(--colour, ${({theme:e})=>e.soft});
        }
    `}get rules(){return this.parts().flat(1/0).filter(e=>typeof e=="string").join("")}get pages(){return this.book.pages}get open(){const e=this.book;return e.open??e.synopsis}$Bound(){const e=this.style,t=this.book;this.style=o=>a(e,{$at:t.means?.identifier,$scheme:t.cover?.annotations.expressed(_)?.declarations,...o}),super.$Bound()}defines(e){for(const o of e.annotations.after(this))o instanceof yt&&e.annotations.express(o,!1);super.defines(e),e.classes.add(this,"pa-layout");const t=this.book.open;t!==void 0&&e.classes.add(this,"pa-turned"),t?.is(T)&&e.classes.add(this,"pa-manual")}erase(e){super.erase(e),e.classes.revert(this)}parts(){return[this.paging(),this.regions(),this.areas(),this.phone()]}paging(){return g`
            .pa-page:not(.pa-open) { display: none; }
        `}regions(){return g`
            .pd-book.pa-layout { display: grid; height: 100vh; }
            .pa-layout .pd-library {
                grid-area: library;
                display: flex;
                align-items: center;
                column-gap: calc(${({theme:e})=>e.space} / 4);
                min-width: 0;
            }
            .pa-layout .pd-me {
                grid-area: me;
                display: flex;
                align-items: center;
                column-gap: calc(${({theme:e})=>e.space} * 0.375);
            }
            .pa-layout .pd-holds { grid-area: holds; min-width: 0; overflow-y: auto; }
            .pa-layout .pd-head {
                grid-area: head;
                display: flex;
                flex-wrap: wrap;
                align-items: flex-end;
                justify-content: space-between;
                gap: calc(${({theme:e})=>e.space} * 0.42) calc(${({theme:e})=>e.space} * 0.83);
                min-width: 0;
            }
            .pa-layout .pd-head:empty { display: none; }
            .pa-layout .pd-switches {
                display: flex;
                flex-wrap: wrap;
                justify-content: flex-end;
                align-items: center;
                gap: calc(${({theme:e})=>e.space} / 3);
            }
            .pa-layout .pd-pages { grid-area: pages; min-width: 0; overflow-y: auto; }
            .pa-layout .pd-chapter.pa-page { scroll-margin-block-start: ${({theme:e})=>e.space}; }
        `}areas(){return g`
            .pd-book.pa-layout {
                grid-template-columns: ${({theme:e})=>e.holdsColumn} minmax(0, 1fr);
                grid-template-rows: auto auto minmax(0, 1fr);
                grid-template-areas: 'library library' 'holds head' 'holds pages';
            }
            .pa-layout .pd-me {
                grid-area: library;
                justify-self: end;
                background: none;
            }
        `}phone(){return g`
            @media (max-width: ${({theme:e})=>e.narrow}) {
                .pd-book.pa-layout { display: flex; flex-direction: column; height: auto; }
                .pa-layout .pd-library {
                    position: sticky;
                    top: 0;
                    z-index: 4;
                    box-sizing: border-box;
                    height: ${({theme:e})=>e.barHeight};
                    margin-inline-end: ${({theme:e})=>e.barHeight};
                    overflow: auto hidden;
                    white-space: nowrap;
                    scrollbar-width: none;
                }
                .pa-layout .pd-me {
                    position: fixed;
                    z-index: 5;
                    top: 0;
                    right: 0;
                    justify-content: center;
                    box-sizing: border-box;
                    width: ${({theme:e})=>e.barHeight};
                    height: ${({theme:e})=>e.barHeight};
                    padding: 0;
                }
                .pa-layout .pd-me .pd-word { display: none; }
                .pa-layout .pd-head { order: 1; flex-direction: column; align-items: stretch; }
                .pa-layout .pd-switches { justify-content: flex-start; }
                .pa-layout .pd-holds { order: 2; overflow: auto hidden; white-space: nowrap; scrollbar-width: none; }
                .pa-layout .pd-pages { order: 3; overflow: visible; }
                .pa-layout .pd-chapter.pa-page { scroll-margin-block-start: calc(${({theme:e})=>e.barHeight} + ${({theme:e})=>e.space} / 2); }
            }
        `}};r(yt,"$Layout");let ye=yt;const Da=class Da extends L{$placesTheSideAndNeverDressesIt(e){for(const t of e.annotations.find(ye)){const o=(t.rules.match(/[^{};]*\.pd-holds\s+[^\s{},][^{};]*\{/gu)??[]).map(s=>s.trim());l(o.length===0,`a layout places the side and never dresses it, what stands in the side being the index's and the folder's, and this one says "${o[0]}"`)}}};r(Da,"LayoutSpecification");let st=Da;Ei([h("a layout places the side and never dresses it")],st.prototype,"$placesTheSideAndNeverDressesIt");const sr=n(ye),wt=class wt extends k{constructor(){super(...arguments),this.specification=new L}defines(e){for(const t of e.annotations.after(this))t instanceof wt&&e.annotations.express(t,!1);e.classes.add(this,"pa-tone")}erase(e){e.classes.revert(this)}};r(wt,"$Tone");let ie=wt;const ja=class ja extends ie{defines(e){super.defines(e),e.classes.add(this,"pa-dark")}};r(ja,"$Dark");let us=ja;const Ca=class Ca extends ie{defines(e){super.defines(e),e.classes.add(this,"pa-light")}};r(Ca,"$Light");let ms=Ca;const Pa=class Pa extends ie{defines(e){super.defines(e),e.classes.add(this,"pa-white-over-black")}};r(Pa,"$WhiteOverBlack");let $s=Pa;const Wt=n(ie),or=n(us),Vs=n(ms),Gi=n($s);var Ui=Object.defineProperty,Zi=Object.getOwnPropertyDescriptor,qi=r((p,e,t,o)=>{for(var s=Zi(e,t),i=p.length-1,d;i>=0;i--)(d=p[i])&&(s=d(e,t,s)||s);return s&&Ui(e,t,s),s},"__decorateClass$8");const Ma=class Ma extends j{write(){const e=this.book.body;return`${e.indexOf(this.chapter)+1} of ${e.length}`}$Define(){super.$Define(),this.classes.add(this,"pd-count")}};r(Ma,"$Count");let ks=Ma;const Aa=class Aa extends k{constructor(){super(...arguments),this.specification=new we}defines(e){e.classes.add(this,"pa-before")}erase(e){e.classes.revert(this)}};r(Aa,"$Before");let xs=Aa;const Na=class Na extends k{constructor(){super(...arguments),this.specification=new we}defines(e){e.classes.add(this,"pa-after")}erase(e){e.classes.revert(this)}};r(Na,"$After");let vs=Na;const Ia=class Ia extends ${$saidOfAWordOfATurn(e){l(e instanceof j&&e.parent instanceof ot,"this is said of a word of a turn, and here it is said of something else")}};r(Ia,"OfATurnSpecification");let we=Ia;qi([h("this is said of a word of a turn")],we.prototype,"$saidOfAWordOfATurn");const Yi=n(ks),Xi=n(xs),Qi=n(vs),Ta=class Ta extends f{get before(){const e=this.book.body;return e[e.indexOf(this.chapter)-1]??this.chapter}get after(){const e=this.book.body;return e[e.indexOf(this.chapter)+1]??this.chapter}write(){const e=n(C),t=n(Yi),o=n(Xi),s=n(Qi),i=n(this.before===this.chapter?Tn:w),d=n(this.after===this.chapter?Tn:w);return c(m,{children:[c(e,{children:[a(o,{}),a(i,{children:this.before.mention.identifier}),"← ",this.before.title.name]}),a(t,{}),c(e,{children:[a(s,{}),a(d,{children:this.after.mention.identifier}),this.after.title.name," →"]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-turn")}};r(Ta,"$Turn");let ot=Ta;const Ki=n(ot);var Ji=Object.defineProperty,Vi=Object.getOwnPropertyDescriptor,J=r((p,e,t,o)=>{for(var s=o>1?void 0:o?Vi(e,t):e,i=p.length-1,d;i>=0;i--)(d=p[i])&&(s=(o?d(e,t,s):d(s))||s);return o&&s&&Ji(e,t,s),s},"__decorateClass$7");const Ha=class Ha extends _n{constructor(){super(...arguments),this.specification=new R}get chapters(){return this.text.find(v).filter(e=>[...e.classes].includes("pd-canonical"))}get laidOutChapters(){return[this.cover,this.synopsis,this.table,...this.chapters]}get pages(){return[this.synopsis,...this.chapters].filter(e=>e!==void 0)}get body(){if(this._body===void 0){const e=this.appendix;this._body=this.chapters.filter(t=>!e.includes(t))}return this._body}get entries(){return this.body}get appendix(){const e=this.table;if(e===void 0)return[];const t=e.text.find(M).filter(o=>o.is(ve)).flatMap(o=>o.text.find(f).map(s=>N(s)?.identifier));return this.chapters.filter(o=>t.includes(o.mention?.identifier??""))}get open(){return this.$bookmark===void 0?void 0:this.chapterAt(this.$bookmark)}get tones(){return[or,Vs,Gi]}get topics(){return this.cover?.annotations.find(Sn)??[]}get subjectCover(){return this.coverOf(this.subject?.means?.identifier)}get searchHint(){return"a word"}wordsOf(e){const t=(this._words??=new Map).get(e);if(t!==void 0)return t;const o=e instanceof v?e.title?.name??"":"",s=e.text.find(f).filter(d=>![...d.classes].includes("pa-caption")).map(d=>y.copy(d.text).replace(/\s+/gu," ").trim()).join(" "),i={title:o,text:s,lower:`${o} ${s}`.toLowerCase()};return this._words.set(e,i),i}found(e){const t=e.trim().toLowerCase();if(t==="")return[];const o=this.table?.annotations.expressed(H);return o===void 0?[]:o.entries.map(s=>o.chapterOf(s)).filter(s=>s!==void 0&&this.wordsOf(s).lower.includes(t))}countOfFound(e,t){return c(m,{children:[a("b",{children:e.length})," ",e.length===1?"entry says":"entries say"," “",t,"”"]})}placeOf(e){return e instanceof v?e.mention?.identifier:void 0}sought(e){}write(){return c(m,{children:[a("div",{className:"pd-library",children:this.library()}),a("div",{className:"pd-me",children:this.me()}),a("div",{className:"pd-holds",children:this.holds()}),a("div",{className:"pd-head",children:this.head()}),c("div",{className:"pd-pages",children:[this.aboveThePages(),this.pages.map((e,t)=>{const o=n(e);return a(o,{},t)}),this.belowThePages()]})]})}library(){if(this._logo===void 0)return;const e=n(this._logo);return a(e,{})}me(){const e=n(Kn),t=n(w),o=n(li),s=this.coverOf(this.author?.means?.identifier);return c(m,{children:[this.byline(),s===void 0?void 0:this.painted(s,a(e,{cover:s,children:a(t,{children:s.mention.identifier})})),this.topics.length===0?void 0:a(o,{cover:this.cover})]})}painted(e,t,o){return V(e,t,o)}holds(){const e=n(this.table);return a(e,{})}head(){const e=n(this.cover);return c(m,{children:[a(e,{}),a("div",{className:"pd-switches",children:this.switches()})]})}aboveThePages(){}belowThePages(){}chapterAt(e){return(this._chapterByPlace??this.chapterByPlace()).get(e)}chapterByPlace(){const e=new Map;for(const t of this.chapters)for(const o of this.sections(t))o.mention!==void 0&&!e.has(o.mention.identifier)&&e.set(o.mention.identifier,t);for(const t of this.chapters)t.mention!==void 0&&e.set(t.mention.identifier,t);for(const t of this.entries)t.mention!==void 0&&!e.has(t.mention.identifier)&&e.set(t.mention.identifier,t);return e}placeWithin(e){return e.startsWith("#")?`${this.means?.identifier??""}${e}`:e}coverOf(e){if(e!==void 0)return this.means?.identifier===e?this.cover:this.cover?.annotations.find(Y).map(t=>t.cover).find(t=>t?.mention?.identifier===e)}byline(){const e=n(ci);return a(e,{chapter:this.cover})}root(){const e=n(Hi);return a(e,{cover:this.cover})}switches(){}sections(e){return e.text.find(M).flatMap(t=>[t,...this.sections(t)])}sectionOf(e){const t=this.table;return t===void 0?void 0:this.sections(t).find(o=>o.canonical?.name===e.name)}turn(){this.bookmark!==this.cover&&super.turn()}$Define(){super.$Define();const e=n(sr),t=n(Wt);this.annotations.add(this,a(e,{}),a(t,{}))}$Bound(){this._chapterByPlace=this.chapterByPlace();const e=n(Vn),t=this.table?.annotations.expressed(Q);for(const i of t?.parts??[]){const d=this.sectionOf(i);d===void 0||d.is(Je)||!i.chapters.some(u=>u.is(T))||d.annotations.add(this,a(e,{}))}const o=this.root();o!==void 0&&this.table?.text.add(this,o);const s=n(mi);this._logo=kr.chemical(a(s,{cover:this.cover,subject:this.subjectCover}),this),this.turns(),super.$Bound()}turns(){const e=n(Ki);for(const t of this.body)t.text.add(this,a(e,{}))}};r(Ha,"$LibraryBook");let S=Ha;J([Es()],S.prototype,"_chapterByPlace",2);J([Es()],S.prototype,"_body",2);J([Es()],S.prototype,"_words",2);const Wa=class Wa extends xr{$holdsOnlyChapters(e){l([...e.text].every(t=>t instanceof v),"a book of this library holds only chapters, and this one holds something else")}$placesEveryChapter(e){l(e.text.find(v).every(t=>e.laidOutChapters.includes(t)),"a book of this library has a place for every chapter it holds, and this one holds a chapter it places nowhere")}$onlyAChapterAppends(e){l(e.text.find(v).every(t=>e.chapters.includes(t)||!t.is(Rn)),"only an ordinary chapter files a file, and here a cover, a synopsis or a table of contents files one")}$listsEachManualPart(e){const o=(e.table?.annotations.expressed(Q)?.parts??[]).find(s=>s.chapters.some(i=>i.is(T))&&e.sectionOf(s)===void 0);l(o===void 0,`a part read as a manual is listed under a section headed with its name, and "${o?.name}" has none`)}};r(Wa,"LibraryBookSpecification");let R=Wa;J([h("a book of this library holds only chapters")],R.prototype,"$holdsOnlyChapters",1);J([h("a book of this library has a place for every chapter it holds")],R.prototype,"$placesEveryChapter",1);J([h("only an ordinary chapter files a file")],R.prototype,"$onlyAChapterAppends",1);J([h("a part read as a manual is listed under a section headed with its name")],R.prototype,"$listsEachManualPart",1);const ar=n(S);n(ar,qs)(Ri);n(ar,Wt)(or);const La=class La extends tt{constructor(){super(...arguments),this.prose="'Source Serif 4', Georgia, serif",this.ink="#343c4a",this.heading="#1a1f36",this.soft="#727d8c",this.faint="#9ea8b5",this.line="#e4e9f2",this.paper="#ffffff",this.side="#f8f9fb",this.holdsColumn="240px",this.barHeight="52px",this.shadow="0 1px 2px rgba(43, 54, 60, 0.05), 0 6px 18px rgba(43, 54, 60, 0.05)",this.lift="0 2px 4px rgba(43, 54, 60, 0.06), 0 14px 32px rgba(43, 54, 60, 0.10)",this.barLight="#fcfcfd",this.barMid="#f8f9fc",this.barDeep="#f2f4f9",this.barShadow="0 1px 0 rgba(43, 54, 60, 0.05)",this.sideLight="#fafbfc",this.sideDeep="#f2f4f8",this.hairline="1px",this.stroke="2px"}parts(){return[...super.parts(),this.bands(),this.guide(),this.order(),this.surface(),this.entries(),this.small()]}bands(){return g`
            .pd-book .pd-library { position: relative; background: linear-gradient(180deg, ${({theme:e})=>e.barLight} 0%, ${({theme:e})=>e.barMid} 60%, ${({theme:e})=>e.barDeep} 100%); border-block-end: thin solid ${({theme:e})=>e.line}; box-shadow: ${({theme:e})=>e.barShadow}; }
            .pd-book .pd-library::after { content: ''; position: absolute; left: 0; right: 0; bottom: calc(-1 * ${({theme:e})=>e.hairline}); height: ${({theme:e})=>e.stroke}; background: linear-gradient(90deg, var(--band) 0 40%, var(--ground) 40% 70%, var(--foot) 70%); opacity: 0.75; }
        `}guide(){return g`
            .pd-book .pd-holds { position: relative; padding: calc(${({theme:e})=>e.space} * 0.75) 0 calc(${({theme:e})=>e.space} * 0.8333); background: linear-gradient(90deg, ${({theme:e})=>e.sideLight} 0%, ${({theme:e})=>e.side} 86%, ${({theme:e})=>e.sideDeep} 100%); border-inline-end: thin solid ${({theme:e})=>e.line}; }
            .pd-book .pd-holds .pd-section { margin: 0 0 calc(${({theme:e})=>e.space} * 0.5833); }
            .pd-book .pd-holds .pd-sentence.pd-heading { margin: 0; padding: 0 calc(${({theme:e})=>e.space} * 0.75) calc(${({theme:e})=>e.space} / 4); border: 0; font-family: ${({theme:e})=>e.font}; font-size: calc(0.75 * ${({theme:e})=>e.size}); font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: ${({theme:e})=>e.faint}; }
            .pd-book .pd-holds .pd-paragraph.pa-entry { position: relative; display: flex; align-items: center; justify-content: space-between; gap: calc(${({theme:e})=>e.space} * 0.375); margin: 0; padding: calc(${({theme:e})=>e.space} / 6) calc(${({theme:e})=>e.space} * 0.583) calc(${({theme:e})=>e.space} / 6) calc(${({theme:e})=>e.space} * 1.667); border-radius: 0; font-size: calc(0.93 * ${({theme:e})=>e.size}); font-weight: 500; line-height: 1.35; color: ${({theme:e})=>e.sideInk}; box-shadow: inset calc(${({theme:e})=>e.space} / 8) 0 0 transparent; transition: background ${({theme:e})=>e.beat} ease, color ${({theme:e})=>e.beat} ease, box-shadow ${({theme:e})=>e.beat} ease; }
            .pd-book .pd-holds .pd-paragraph.pa-entry::before { content: ''; position: absolute; inset-inline-start: calc(${({theme:e})=>e.space} * 0.958); width: calc(${({theme:e})=>e.space} / 3); height: calc(${({theme:e})=>e.space} / 3); border-radius: 50%; background: var(--foot-ink); box-shadow: 0 0 0 calc(${({theme:e})=>e.space} / 12) ${({theme:e})=>e.white}; }
            .pd-book .pd-holds .pd-paragraph.pa-entry:hover { background: color-mix(in oklab, color-mix(in oklab, var(--foot) 30%, white) 65%, white); }
            .pd-book .pd-holds .pd-paragraph.pa-entry.pa-open { background: linear-gradient(90deg, color-mix(in oklab, var(--foot) 30%, white), color-mix(in oklab, var(--foot) 16%, white)); color: var(--foot-ink); box-shadow: inset calc(${({theme:e})=>e.space} / 8) 0 0 var(--foot-ink), inset 0 ${({theme:e})=>e.hairline} 0 rgba(255, 255, 255, 0.7); }
            .pd-book .pd-holds .pa-entry .pd-word.pd-entry-day { flex: none; order: 1; margin-inline-start: auto; font-family: ${({theme:e})=>e.font}; font-size: calc(0.7857 * ${({theme:e})=>e.size}); font-weight: 400; letter-spacing: 0; color: ${({theme:e})=>e.faint}; font-variant-numeric: tabular-nums; }
            .pd-book.pa-newest-first .pd-holds .pd-section { display: flex; flex-direction: column-reverse; justify-content: flex-end; }
            .pd-book.pa-newest-first .pd-holds .pd-section > .pa-self-reference { order: 1; }
            .pd-book .pd-holds .pa-entry.pa-open .pd-word.pd-entry-day { color: color-mix(in oklab, var(--foot-ink) 70%, white); }
            .pd-book .pd-holds .pa-parenthetical { display: none; }
        `}order(){return g`
            .pd-book .pd-holds .pd-paragraph.pd-entry-order { position: absolute; top: calc(${({theme:e})=>e.space} * 0.75); right: calc(${({theme:e})=>e.space} * 0.583); z-index: 1; margin: 0; }
            .pd-book .pd-holds .pd-entry-order .pd-word.pd-switch { padding: 0; border: 0; border-radius: 0; background: none; font-family: ${({theme:e})=>e.font}; font-size: calc(0.7143 * ${({theme:e})=>e.size}); font-weight: 500; line-height: 1.4; letter-spacing: 0.02em; color: ${({theme:e})=>e.faint}; cursor: pointer; transition: color ${({theme:e})=>e.beat} ease; }
            .pd-book .pd-holds .pd-entry-order .pd-word.pd-switch::before { content: '↓ '; }
            .pd-book .pd-holds .pd-entry-order .pd-word.pd-switch:hover { color: ${({theme:e})=>e.ink}; }
            .pd-book .pd-holds .pd-entry-order .pd-word.pd-switch[aria-pressed='true'] { background: none; border: 0; color: var(--foot-ink); }
            .pd-book .pd-holds .pd-entry-order .pd-word.pd-switch[aria-pressed='true']::before { content: '↑ '; }
        `}surface(){return g`
            .pd-book .pd-pages { display: flex; flex-direction: column; padding: ${({theme:e})=>e.space} calc(${({theme:e})=>e.space} * 1.6667) calc(${({theme:e})=>e.space} * 5); background: linear-gradient(180deg, color-mix(in oklab, var(--foot) 12%, white), transparent) top / 100% calc(${({theme:e})=>e.space} * 2) no-repeat, linear-gradient(90deg, color-mix(in oklab, var(--foot) 8%, white), transparent) left / calc(${({theme:e})=>e.space} * 1.6667) 100% no-repeat, ${({theme:e})=>e.paper}; }
        `}entries(){return g`
            .pd-book .pd-pages .pd-chapter.pa-page { box-sizing: border-box; position: relative; width: 100%; max-width: calc(${({theme:e})=>e.space} * 33.75); margin: 0 auto; padding: calc(${({theme:e})=>e.space} * 1.6667) 0 calc(${({theme:e})=>e.space} * 2) calc(${({theme:e})=>e.space} * 7.9167); background: linear-gradient(90deg, transparent, ${({theme:e})=>e.line} 12% 88%, transparent) bottom / 100% ${({theme:e})=>e.hairline} no-repeat; }
            .pd-book .pd-pages .pa-page .pd-word.pd-entry-number { position: absolute; left: 0; top: calc(${({theme:e})=>e.space} * 1.4167); font-family: ${({theme:e})=>e.serif}; font-size: calc(3.4286 * ${({theme:e})=>e.size}); font-weight: 500; line-height: 1; letter-spacing: -0.03em; color: color-mix(in oklab, var(--foot-ink) 22%, white); pointer-events: none; }
            .pd-book .pd-pages .pa-page .pd-word.pd-date { display: flex; align-items: baseline; gap: calc(${({theme:e})=>e.space} / 3); position: absolute; left: 0; top: calc(${({theme:e})=>e.space} * 4); width: calc(${({theme:e})=>e.space} * 6.6667); font-family: ${({theme:e})=>e.font}; font-size: calc(0.857 * ${({theme:e})=>e.size}); font-weight: 500; line-height: 1.5; letter-spacing: 0.06em; text-transform: uppercase; color: var(--foot-ink); }
            .pd-book .pd-pages .pa-page .pd-word.pd-date::before { content: ''; flex: none; width: calc(${({theme:e})=>e.space} / 3); height: calc(${({theme:e})=>e.space} / 3); border-radius: 50%; background: linear-gradient(135deg, color-mix(in oklab, var(--foot) 30%, white), var(--foot-ink)); box-shadow: 0 0 0 calc(${({theme:e})=>e.space} / 8) ${({theme:e})=>e.paper}, 0 0 0 calc(${({theme:e})=>e.space} * 5 / 24) color-mix(in oklab, var(--foot) 21%, white), ${({theme:e})=>e.shadow}; }
            .pd-book .pd-pages .pd-sentence.pd-title { margin: 0 0 calc(${({theme:e})=>e.space} * 0.75); font-family: ${({theme:e})=>e.serif}; font-size: calc(2 * ${({theme:e})=>e.size}); font-weight: 700; line-height: 1.2; letter-spacing: -0.015em; color: ${({theme:e})=>e.heading}; }
            .pd-book .pd-pages .pd-section { margin: 0; }
            .pd-book .pd-pages .pd-sentence.pd-heading { margin: calc(${({theme:e})=>e.space} * 1.1667) 0 calc(${({theme:e})=>e.space} * 0.4167); font-family: ${({theme:e})=>e.serif}; font-size: calc(1.2857 * ${({theme:e})=>e.size}); font-weight: 600; line-height: 1.3; color: ${({theme:e})=>e.heading}; }
            .pd-book .pd-pages .pd-paragraph { margin: 0 0 calc(${({theme:e})=>e.space} * 0.7083); font-size: calc(1.2143 * ${({theme:e})=>e.size}); line-height: 1.65; color: ${({theme:e})=>e.ink}; }
            .pd-book .pd-pages .pd-paragraph .pa-reference { color: var(--foot-ink); text-decoration: underline; text-decoration-color: color-mix(in srgb, var(--foot-ink) 35%, transparent); text-decoration-thickness: ${({theme:e})=>e.hairline}; text-underline-offset: calc(${({theme:e})=>e.space} / 8); transition: text-decoration-color ${({theme:e})=>e.beat} ease; }
            .pd-book .pd-pages .pd-paragraph .pa-reference:hover { text-decoration-color: var(--foot-ink); }
            .pd-book .pd-pages .pa-self-reference { color: inherit; text-decoration: none; }
            .pd-book .pd-pages .pd-paragraph.pa-list .pd-line.pa-item { position: relative; margin: 0 0 calc(${({theme:e})=>e.space} / 4); padding-inline-start: 1.3em; }
            .pd-book .pd-pages .pd-paragraph.pa-list .pd-line.pa-item::before { content: '–'; position: absolute; left: 0.1em; color: var(--foot-ink); }
        `}small(){return g`
            @media (max-width: ${({theme:e})=>e.narrow}) {
                .pd-book .pd-holds, .pd-book .pd-library { border-inline-end: none; }
                .pd-book .pd-holds .pd-paragraph.pd-entry-order, .pd-book .pd-holds .pa-entry .pd-word.pd-entry-day { display: none; }
                .pd-book .pd-pages { padding: 0 calc(${({theme:e})=>e.space} * 0.8333) calc(${({theme:e})=>e.space} * 2.5); }
                .pd-book .pd-pages .pd-chapter.pa-page { padding: calc(${({theme:e})=>e.space} * 1.1667) 0 calc(${({theme:e})=>e.space} * 1.3333); }
                .pd-book .pd-pages .pa-page .pd-word.pd-entry-number { position: static; display: block; margin-block-end: calc(${({theme:e})=>e.space} / 6); font-size: calc(2 * ${({theme:e})=>e.size}); }
                .pd-book .pd-pages .pa-page .pd-word.pd-date { position: static; width: auto; margin-block-end: calc(${({theme:e})=>e.space} * 0.4167); }
            }
        `}};r(La,"$Typeset");let at=La;const ed=n(at);var td=Object.defineProperty,sd=Object.getOwnPropertyDescriptor,nr=r((p,e,t,o)=>{for(var s=sd(e,t),i=p.length-1,d;i>=0;i--)(d=p[i])&&(s=d(e,t,s)||s);return s&&td(e,t,s),s},"__decorateClass$6");const E=r(p=>p.annotations.expressed(B)?.date?.date??"","dayOf"),Ln=r(p=>{const[e,t]=E(p).split("-");return e===void 0||t===void 0?"":new Date(Date.UTC(Number(e),Number(t)-1,1)).toLocaleString("en-GB",{month:"long",year:"numeric",timeZone:"UTC"})},"monthOf"),Ba=class Ba extends k{constructor(){super(...arguments),this.specification=new L}defines(e){e.classes.add(this,"pa-newest-first")}erase(e){e.classes.revert(this)}};r(Ba,"$NewestFirst");let nt=Ba;const od=n(nt),rr=od,_a=class _a extends f{write(){const e=n(Zn);return a(e,{annotation:rr,children:"newest first"})}$Define(){super.$Define(),this.classes.add(this,"pd-entry-order")}};r(_a,"$EntryOrder");let ys=_a;const Ra=class Ra extends j{write(){return String(this.book.entries.indexOf(this.chapter)+1)}$Define(){super.$Define(),this.classes.add(this,"pd-entry-number")}};r(Ra,"$EntryNumber");let ws=Ra;const Fa=class Fa extends ye{paging(){return g``}};r(Fa,"$JournalLayout");let zs=Fa;const ad=n(ys),nd=n(ws),rd=n(zs),id=ad,dd=nd,Sa=class Sa extends S{constructor(){super(...arguments),this.specification=new ze}get latest(){return[...this.entries].sort((e,t)=>E(t).localeCompare(E(e)))[0]}get pages(){const e=[...this.entries].sort((t,o)=>E(t).localeCompare(E(o)));return this.is(nt)?e.reverse():e}get open(){return super.open??this.latest}head(){}switches(){}turns(){}$Bound(){const e=n(dd);for(const s of this.entries)s.text.add(this,a(e,{}));const t=this.table?.annotations.expressed(H);t!==void 0&&(t.$dated=!0);const o=n(id);this.table?.text.add(this,a(o,{})),this.$is=[rr],super.$Bound()}};r(Sa,"$Journal");let Os=Sa;const Ea=class Ea extends R{$everyEntryIsDated(e){const t=e.entries.find(o=>!o.is(B));l(t===void 0,`every entry of a journal is dated, and "${t?.title?.name}" is not`)}$everyEntrySaysItsMonth(e){const t=e.entries.find(o=>o.part?.name!==Ln(o));l(t===void 0,t===void 0?"":`every entry of a journal says the month of its date as its part, and "${t.title?.name}" says "${t.part?.name??"none"}" for ${Ln(t)}`)}};r(Ea,"JournalSpecification");let ze=Ea;nr([h("every entry of a journal is dated")],ze.prototype,"$everyEntryIsDated");nr([h("every entry of a journal says the month of its date as its part")],ze.prototype,"$everyEntrySaysItsMonth");const eo=n(Os);n(eo,qs)(ed);n(eo,Wt)(Vs);n(eo,sr)(rd);var pd=Object.defineProperty,cd=Object.getOwnPropertyDescriptor,ld=r((p,e,t,o)=>{for(var s=cd(e,t),i=p.length-1,d;i>=0;i--)(d=p[i])&&(s=d(e,t,s)||s);return s&&pd(e,t,s),s},"__decorateClass$5");const Ga=class Ga extends k{constructor(){super(...arguments),this.specification=new rt}get section(){return this.parent instanceof M?this.parent:void 0}get headings(){const e=this.section;return e===void 0?[]:e.text.find(En).filter(t=>t!==e.canonical)}defines(e){e.classes.add(this,"pa-opaque")}erase(e){e.classes.revert(this)}$Bound(){for(const e of this.headings){const t=e.annotations.expressed(Ot),o=e.annotations.expressed(vr);for(const s of[t,o])s!==void 0&&e.annotations.remove(e,s)}super.$Bound()}};r(Ga,"$Opaque");let Ds=Ga;const Ua=class Ua extends ${$saidOfASection(e){l(e instanceof M,"opaque is said of a section, and this is not one")}};r(Ua,"OpaqueSpecification");let rt=Ua;ld([h("opaque is said of a section")],rt.prototype,"$saidOfASection");const hd=n(Ds);var fd=Object.defineProperty,gd=Object.getOwnPropertyDescriptor,F=r((p,e,t,o)=>{for(var s=gd(e,t),i=p.length-1,d;i>=0;i--)(d=p[i])&&(s=d(e,t,s)||s);return s&&fd(e,t,s),s},"__decorateClass$4");const Za=class Za extends En{$Define(){super.$Define(),this.classes.add(this,"pd-speaker")}$Bound(){super.$Bound();const e=this.annotations.expressed(Ot);e!==void 0&&this.annotations.remove(this,e)}};r(Za,"$Speaker");let Oe=Za;const qa=class qa extends Gs{$Define(){super.$Define(),this.classes.add(this,"pd-time")}};r(qa,"$Time");let js=qa;const Ya=class Ya extends yr{$Define(){super.$Define(),this.classes.add(this,"pd-participant")}};r(Ya,"$Participant");let it=Ya;const Xa=class Xa extends f{get participants(){return this.text.find(it)}write(){const e=this.participants;return e.flatMap((t,o)=>{const s=n(t);return[o===0?"":o===e.length-1?" and ":", ",a(s,{},o)]})}$Define(){super.$Define(),this.classes.add(this,"pd-participants")}};r(Xa,"$Participants");let dt=Xa;const ip=n(Oe),bd=n(js),dp=n(it),pp=n(dt),ud=bd,md=r(p=>{const e=new Date(p);if(Number.isNaN(e.getTime()))return p;const t=e.toLocaleDateString("en-GB",{day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return`${e.toLocaleTimeString("en-GB",{hour:"2-digit",minute:"2-digit",timeZone:"UTC"})} UTC, ${t}`},"shownTime"),Qa=class Qa extends M{constructor(){super(...arguments),this.specification=new De,this.$at=void 0}get when(){return this.$at??""}get speaker(){return this.text.find(Oe)[0]}write(){const e=n(ud),t=this.speaker,o=t===void 0?void 0:n(t),s=[...this.text].filter(i=>i!==t);return c(m,{children:[o===void 0?void 0:a(o,{}),a(e,{children:`[${md(this.when)}](${this.when})`}),a("div",{className:"pd-said",children:s.map((i,d)=>{const u=n(i);return a(u,{},d)})})]})}$Define(){super.$Define(),this.classes.add(this,"pd-message");const e=n(hd);if(this.annotations.add(this,a(e,{})),this.when==="")return;const t=this.speaker,o=t===void 0?"":I.reference(y.copy(t.text))?.name??y.copy(t.text),s=n(wr);this.annotations.add(this,a(s,{children:Gn.slug(`${this.when.replace(/Z$/u,"")} ${o}`)}))}$Bound(){const e=this.book?.author?.means?.identifier;if(e!==void 0&&this.speaker?.means?.identifier===e){const t=n(kd);this.annotations.add(this,a(t,{}))}super.$Bound()}};r(Qa,"$Message");let P=Qa;const Ka=class Ka extends k{constructor(){super(...arguments),this.specification=new ct}defines(e){e.classes.add(this,"pa-mine")}erase(e){e.classes.revert(this)}};r(Ka,"$Mine");let pt=Ka;const Ja=class Ja extends ${$saidOfAMessage(e){l(e instanceof P,"mine is said of a message, and this is not one")}};r(Ja,"MineSpecification");let ct=Ja;F([h("mine is said of a message")],ct.prototype,"$saidOfAMessage");const $d=n(pt),kd=$d,Va=class Va extends k{constructor(){super(...arguments),this.specification=new ft}defines(e){e.classes.add(this,"pa-quoted")}erase(e){e.classes.revert(this)}};r(Va,"$Quoted");let Cs=Va;const en=class en extends k{constructor(){super(...arguments),this.specification=new gt}defines(e){e.classes.add(this,"pa-verbatim")}erase(e){e.classes.revert(this)}};r(en,"$Verbatim");let Ps=en;const tn=class tn extends k{constructor(){super(...arguments),this.specification=new je,this.$from=void 0,this.$to=void 0}get from(){return this.$from??""}get to(){return this.$to??""}defines(e){e.classes.add(this,"pa-period")}erase(e){e.classes.revert(this)}};r(tn,"$Period");let lt=tn;const sn=class sn extends k{constructor(){super(...arguments),this.specification=new je,this.$shown=void 0,this.$all=void 0}get shown(){return Number(this.$shown??0)}get all(){return Number(this.$all??0)}get aside(){return this.all-this.shown}defines(e){e.classes.add(this,"pa-messages")}erase(e){e.classes.revert(this)}};r(sn,"$Messages");let ht=sn;const on=class on extends zr{$saysWhen(e){l(e.when!==""&&!Number.isNaN(Date.parse(e.when)),"a message says when it was said, as an instant the machine can read, and this one does not")}$headedByItsSpeaker(e){l(e.canonical instanceof Oe,"a message is headed by its speaker, a heading that refers to them, and this one is not")}};r(on,"MessageSpecification");let De=on;F([h("a message says when it was said")],De.prototype,"$saysWhen");F([h("a message is headed by its speaker")],De.prototype,"$headedByItsSpeaker");const an=class an extends ${$saidOfAParagraph(e){l(e instanceof f,"this is said of a paragraph, and this is not one")}};r(an,"OfAParagraphSpecification");let ft=an;F([h("this is said of a paragraph")],ft.prototype,"$saidOfAParagraph");const nn=class nn extends ${$saidOfACover(e){l(e instanceof v&&e.is(D),"this is said of a cover, and this is not one")}};r(nn,"OfACoverSpecification");let je=nn;F([h("this is said of a cover")],je.prototype,"$saidOfACover");const rn=class rn extends ${$saidOfAWord(e){l(e instanceof j,"verbatim is said of a word, and this is not one")}};r(rn,"VerbatimSpecification");let gt=rn;F([h("verbatim is said of a word")],gt.prototype,"$saidOfAWord");const cp=n(P),lp=n(Cs),hp=n(Ps),fp=n(lt),gp=n(ht),Bn=r(p=>p===void 0||p===""?"":new Date(p).toLocaleDateString("en-GB",{day:"numeric",month:"long",year:"numeric",timeZone:"UTC"}),"dayWords"),dn=class dn extends f{write(){const e=this.book,t=e.messageCount?.shown??e.messages.length,o=new Set(e.messages.map(d=>d.when.slice(0,10))).size,s=Bn(e.period?.from),i=Bn(e.period?.to);return c(m,{children:[c("span",{className:"pd-tally-count",children:[a("b",{children:t}),o===1?" messages in ":" messages over ",a("b",{children:o}),o===1?" day":" days"]}),a("span",{className:"pd-tally-period",children:s===i?s:`${s} to ${i}`})]})}$Define(){super.$Define(),this.classes.add(this,"pd-tally")}};r(dn,"$Tally");let Ms=dn;const pn=class pn extends j{write(){return String(this.$entry?.text.find(P).length??0)}$Define(){super.$Define(),this.classes.add(this,"pd-day-count")}};r(pn,"$DayCount");let As=pn;const xd=n(Ms),vd=n(As),yd=xd,wd=vd,cn=class cn extends S{constructor(){super(...arguments),this.specification=new de}get participants(){return this.cover?.text.find(dt)[0]?.participants??[]}get period(){return this.cover?.annotations.expressed(lt)}get messageCount(){return this.cover?.annotations.expressed(ht)}get messages(){return this.body.flatMap(e=>e.text.find(P))}get pages(){return[...[...this.body].sort((t,o)=>E(t).localeCompare(E(o))),...this.appendix]}get open(){return super.open??this.pages[0]}head(){const e=n(yd);return c(m,{children:[super.head(),a(e,{chapter:this.cover})]})}$Bound(){const e=n(wd);for(const t of this.table?.annotations.expressed(H)?.entries??[]){const o=N(t)?.identifier,s=o===void 0?void 0:this.chapterAt(o);s===void 0||!this.body.includes(s)||t.text.add(this,a(e,{entry:s}))}super.$Bound()}};r(cn,"$Conversation");let bt=cn;const ln=class ln extends R{$saysItsParticipantsPeriodAndCount(e){l(e.participants.length>0&&e.period!==void 0&&e.messageCount!==void 0,"a conversation says its participants, its period and how many messages it holds, on its cover, and this one says less")}$everyMessageIsAddressed(e){const t=e.messages.find(o=>o.annotations.expressed(Ot)===void 0);l(t===void 0,`every message of a conversation is addressed by its time, and the one at "${t?.when}" is not`)}$everyChapterHoldsAMessage(e){const t=e.body.find(o=>o.text.find(P).length===0);l(t===void 0,`every chapter of a conversation holds a message, and "${t?.title?.name}" holds none`)}};r(ln,"ConversationSpecification");let de=ln;F([h("a conversation says its participants, its period and how many messages it holds")],de.prototype,"$saysItsParticipantsPeriodAndCount");F([h("every message of a conversation is addressed by its time")],de.prototype,"$everyMessageIsAddressed");F([h("every chapter of a conversation holds a message")],de.prototype,"$everyChapterHoldsAMessage");n(bt);const hn=class hn extends at{constructor(){super(...arguments),this.sans="'Inter', system-ui, sans-serif",this.mono="ui-monospace, 'Cascadia Code', Consolas, monospace",this.keyword="#1f5fbf",this.string="#9a3b1e",this.type="#116b4a",this.comment="#7a8491"}parts(){return[...super.parts(),this.surfaces(),this.top(),this.rows(),this.openDay(),this.exchanges(),this.said(),this.cards(),this.paneColumn(),this.phone()]}surfaces(){return g`
            .pd-book .pd-library { background: linear-gradient(180deg, #ffffff 0%, #ffffff 84%, #fbfcfe 100%); }
            .pd-book .pd-me { background: linear-gradient(180deg, #ffffff 0%, #ffffff 84%, #fbfcfe 100%); }
            .pd-book .pd-holds { background: linear-gradient(90deg, #ffffff 0%, #ffffff 88%, #fbfcfe 100%); }
            .pd-book.pa-layout:not(:has(.pd-holds .pd-paragraph.pa-entry)) { grid-template-columns: minmax(0, 1fr); grid-template-areas: 'library' 'head' 'pages'; }
            .pd-book.pa-layout:not(:has(.pd-holds .pd-paragraph.pa-entry)):has(> .pd-pane > .pd-pane-bar) { grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); grid-template-areas: 'library library' 'head pane' 'pages pane'; }
            .pd-book.pa-layout:not(:has(.pd-holds .pd-paragraph.pa-entry)) .pd-holds { display: none; }
            ::highlight(pd-found) { background: #fff2a8; color: inherit; }
            .pd-book .pd-head { background: #ffffff; box-shadow: none; }
            .pd-book.pa-layout .pd-library::after { content: none; }
            .pd-book .pd-pages { background: #ffffff; }
            @media (min-width: ${({theme:e})=>e.narrow}) {
                .pd-book.pa-layout { height: 100vh; overflow-y: auto; grid-template-rows: auto auto auto; }
                .pd-book.pa-layout .pd-pages { overflow: visible; }
                .pd-book.pa-layout .pd-library, .pd-book.pa-layout .pd-me { position: sticky; top: 0; z-index: 3; }
                .pd-book.pa-layout .pd-holds { position: sticky; top: ${({theme:e})=>e.barHeight}; align-self: start; max-height: calc(100vh - ${({theme:e})=>e.barHeight}); }
            }
        `}top(){return g`
            .pd-book .pd-head .pd-switches, .pd-book .pd-head .pa-illustration { display: none; }
            .pd-book .pd-head .pd-title { font-family: ${({theme:e})=>e.serif}; font-size: 30px; font-weight: 600; line-height: 1.1; letter-spacing: -.01em; }
            .pd-book .pd-head .pd-participants { display: flex; gap: 6px; align-items: center; margin: 6px 0 0; font-family: ${({theme:e})=>e.sans}; font-size: 13px; color: ${({theme:e})=>e.soft}; }
            .pd-book .pd-head .pd-participants::before { content: 'between'; }
            .pd-book .pd-head .pd-participants .pa-reference { color: ${({theme:e})=>e.ink}; font-weight: 500; text-decoration: none; }
            .pd-book .pd-head .pd-participants .pa-reference:hover { color: ${({theme:e})=>e.accent}; }
            .pd-book .pd-head .pd-tally { display: flex; flex-wrap: wrap; gap: 4px 16px; margin: 6px 0 0; font-family: ${({theme:e})=>e.sans}; font-size: 12.5px; color: ${({theme:e})=>e.soft}; }
            .pd-book .pd-head .pd-tally b { color: ${({theme:e})=>e.ink}; font-weight: 500; }
        `}rows(){return g`
            .pd-book .pd-holds .pd-chapter { display: flex; flex-direction: column; }
            .pd-book .pd-holds .pd-section.pa-appendix { display: none; }
            .pd-book .pd-holds .pd-section > .pd-heading { margin: 0 0 4px 18px; font-family: ${({theme:e})=>e.sans}; font-size: 10.5px; font-weight: 600; line-height: 1.4; letter-spacing: .12em; text-transform: uppercase; color: ${({theme:e})=>e.faint}; }
            .pd-book .pd-holds .pd-paragraph.pa-entry { display: flex; align-items: center; gap: 9px; padding: 6px 18px 6px 16px; font-family: ${({theme:e})=>e.sans}; font-size: 13px; color: ${({theme:e})=>e.ink}; }
            .pd-book .pd-holds .pd-paragraph.pa-entry::before { content: ''; flex: none; width: 7px; height: 7px; border-radius: 50%; background: ${({theme:e})=>e.sea}; }
            .pd-book .pd-holds .pd-paragraph.pa-entry .pd-day-count { margin-inline-start: auto; font-size: 11px; color: ${({theme:e})=>e.faint}; }
            .pd-book .pd-holds .pd-paragraph.pa-entry:hover { background: #f8fafc; }
            .pd-book .pd-holds .pd-paragraph.pa-entry.pa-open { background: linear-gradient(90deg, #eff4fa, #f8fafd); color: ${({theme:e})=>e.heading}; font-weight: 500; }
            ${this.sideIndex()}
        `}sideIndex(){return g`
            .pd-book .pd-holds { padding: 0 0 24px; }
            .pd-book .pd-holds .pd-paragraph.pd-search { display: flex; flex-direction: row; flex-wrap: nowrap; align-items: center; gap: 8px; margin: 14px 14px 6px; padding: 6px 10px; border: 1px solid ${({theme:e})=>e.line}; border-radius: 9px; background: #ffffff; color: ${({theme:e})=>e.soft}; font-family: ${({theme:e})=>e.sans}; font-size: 13px; line-height: 20px; }
            .pd-book .pd-holds .pd-search .pd-search-mark { flex: none; font-style: normal; font-size: 16px; line-height: 1; color: ${({theme:e})=>e.faint}; }
            .pd-book .pd-holds .pd-search .pd-search-word { flex: 1; min-width: 0; border: 0; background: none; padding: 0; font: inherit; color: ${({theme:e})=>e.ink}; outline: none; }
            .pd-book .pd-holds .pd-search .pd-search-word::placeholder { color: ${({theme:e})=>e.faint}; }
            .pd-book .pd-holds .pd-chapter.pa-table-of-contents.pa-searching { display: none; }
            .pd-book .pd-holds .pd-paragraph.pd-results { display: block; margin: 0; padding: 0 0 20px; }
            .pd-book .pd-holds .pd-results .pd-results-count { display: block; padding: 10px 18px 6px; font-family: ${({theme:e})=>e.sans}; font-size: 12px; line-height: 1.5; color: ${({theme:e})=>e.soft}; }
            .pd-book .pd-holds .pd-results .pd-results-count b { color: ${({theme:e})=>e.ink}; font-weight: 500; }
            .pd-book .pd-holds .pd-paragraph.pd-result { position: relative; display: grid; grid-template-columns: 38px minmax(0, 1fr); column-gap: 6px; margin: 0; padding: 4px 14px 5px 18px; font-family: ${({theme:e})=>e.sans}; font-size: 11.5px; line-height: 1.4; color: ${({theme:e})=>e.soft}; }
            .pd-book .pd-holds .pd-result:hover { background: #eef4f7; color: ${({theme:e})=>e.ink}; }
            .pd-book .pd-holds .pd-result .pd-result-title { font-weight: 500; color: ${({theme:e})=>e.faint}; }
            .pd-book .pd-holds .pd-result .pd-result-synopsis { display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
            .pd-book .pd-holds .pd-result mark { background: #fff2a8; color: inherit; padding: 0 1px; border-radius: 2px; }
            .pd-book .pd-holds .pd-result > a:has(> .pd-entry-open) { position: absolute; inset: 0; z-index: 1; }
            .pd-book .pd-holds .pd-paragraph.pa-entry { flex-wrap: wrap; }
            .pd-book .pd-holds .pd-paragraph.pa-entry::before { content: none; }
            .pd-book .pd-holds .pd-paragraph.pa-entry.pa-open { box-shadow: inset 3px 0 0 #1f5a60; }
            .pd-book .pd-holds .pd-paragraph.pa-entry > a:first-child, .pd-book .pd-holds .pd-paragraph.pa-entry > .pa-content { order: 0; flex: 1 1 auto; min-width: 0; }
            .pd-book .pd-holds .pd-paragraph.pa-entry .pd-day-count { order: 1; }
            .pd-book .pd-holds .pd-paragraph.pa-entry:not(.pa-open) .pd-file-tab { display: none; }
            .pd-book .pd-holds .pd-paragraph.pa-entry .pd-word.pd-file-tab { order: 2; display: flex; align-items: center; gap: 8px; flex: 0 0 calc(100% + 34px); height: 26px; margin: 2px -18px 0 -16px; padding: 0 14px 0 34px; border: 0; border-radius: 0; background: none; font-family: ${({theme:e})=>e.sans}; font-size: 12px; font-weight: 400; line-height: 1; color: ${({theme:e})=>e.soft}; text-align: start; cursor: pointer; }
            .pd-book .pd-holds .pd-paragraph.pa-entry .pd-file-tab:hover { background: #eef4f7; color: ${({theme:e})=>e.ink}; }
            .pd-book .pd-holds .pd-paragraph.pa-entry .pd-file-tab[aria-pressed='true'] { background: #eef5f6; color: #1f5a60; font-weight: 500; }
            .pd-book .pd-holds .pd-paragraph.pa-entry .pd-file-tab .pd-drawing { flex: none; width: 14px; height: 14px; color: #a5aebb; }
            .pd-book .pd-holds .pd-paragraph.pa-entry .pd-file-tab .pd-drawing svg { display: block; width: 100%; height: 100%; }
            .pd-book .pd-holds .pd-paragraph.pa-entry .pd-file-tab .pd-tab-name { min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
            .pd-book .pd-holds .pd-paragraph.pa-entry .pd-file-tab small { margin-inline-start: auto; font-size: 10.5px; color: ${({theme:e})=>e.faint}; white-space: nowrap; }
            .pd-book .pd-holds .pd-paragraph.pd-outline { display: block; margin: 0; }
            .pd-book .pd-holds:has(.pd-chapter.pa-table-of-contents.pa-searching) .pd-paragraph.pd-outline { display: none; }
            .pd-book .pd-holds .pd-outline .pd-asked { margin: 0; padding: 2px 0 8px; list-style: none; counter-reset: asked; }
            .pd-book .pd-holds .pd-outline .pd-asked li { counter-increment: asked; }
            .pd-book .pd-holds .pd-outline .pd-asked li > a, .pd-book .pd-holds .pd-outline .pd-asked li > .pd-word { display: grid; grid-template-columns: 22px minmax(0, 1fr); column-gap: 6px; padding: 3px 14px 3px 24px; font-family: ${({theme:e})=>e.sans}; font-size: 11.5px; line-height: 1.35; color: ${({theme:e})=>e.soft}; text-decoration: none; }
            .pd-book .pd-holds .pd-outline .pd-asked li > a::before, .pd-book .pd-holds .pd-outline .pd-asked li > .pd-word::before { content: counter(asked); font-size: 10px; color: ${({theme:e})=>e.faint}; font-variant-numeric: tabular-nums; text-align: end; padding-inline-end: 2px; line-height: 15.5px; }
            .pd-book .pd-holds .pd-outline .pd-asked li > a > .pd-word { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; color: inherit; }
            .pd-book .pd-holds .pd-outline .pd-asked li > a:hover { color: ${({theme:e})=>e.ink}; background: #eef4f7; }
        `}openDay(){return g`
            .pd-book .pd-pages .pd-chapter.pa-page { width: 100%; max-width: 768px; margin: 0 auto; }
            .pd-book .pd-pages .pa-page > .pd-title, .pd-book .pd-pages .pa-page > a.pa-self-reference .pd-title { margin: 0 0 22px; font-family: ${({theme:e})=>e.sans}; font-size: 11.5px; font-weight: 600; line-height: 1.4; letter-spacing: .14em; text-transform: uppercase; color: ${({theme:e})=>e.faint}; }
            .pd-book .pd-pages .pd-turn, .pd-book .pd-pages .pa-page > .pd-word.pd-date { display: none; }
        `}exchanges(){return g`
            .pd-book .pd-pages .pd-message { position: relative; display: block; margin: 0 0 28px; }
            .pd-book .pd-pages .pd-message > .pa-self-reference, .pd-book .pd-pages .pd-message .pd-heading.pd-speaker { display: none; }
            .pd-book .pd-pages .pd-message > .pd-word.pd-time { position: absolute; top: -17px; left: 0; display: block; width: auto; margin: 0; font-family: ${({theme:e})=>e.sans}; font-size: 11px; font-weight: 500; line-height: 1; color: ${({theme:e})=>e.faint}; opacity: 0; transition: opacity .15s; }
            .pd-book .pd-pages .pd-message > .pd-word.pd-time::before { content: none; }
            .pd-book .pd-pages .pd-message.pa-mine > .pd-word.pd-time { left: auto; right: 0; }
            .pd-book .pd-pages .pd-message:hover > .pd-word.pd-time { opacity: 1; }
            .pd-book .pd-pages .pd-message > .pd-said { display: flex; flex-direction: column; gap: 10px; min-width: 0; overflow-wrap: anywhere; }
            .pd-book .pd-pages .pd-message.pa-mine > .pd-said { margin-inline-start: auto; width: fit-content; max-width: 78%; padding: 12px 16px; border-radius: 12px; background: rgba(11, 11, 11, .05); gap: 8px; }
        `}said(){return g`
            .pd-book .pd-pages .pd-message .pd-said .pd-paragraph { margin: 0; font-family: ${({theme:e})=>e.serif}; font-size: 15px; line-height: 22px; color: #0b0b0b; }
            .pd-book .pd-pages .pd-message.pa-mine .pd-said .pd-paragraph { font-family: ${({theme:e})=>e.sans}; line-height: 20px; }
            .pd-book .pd-pages .pd-message .pd-said .pd-heading { margin: 8px 0 0; padding: 0; border: 0; font-family: ${({theme:e})=>e.serif}; font-size: 16px; font-weight: 600; line-height: 22px; color: #0b0b0b; }
            .pd-book .pd-pages .pd-message .pa-emphasis { font-style: italic; }
            .pd-book .pd-pages .pd-message .pa-bold { font-weight: 600; }
            .pd-book .pd-pages .pd-message .pa-list { padding-inline-start: 30px; }
            .pd-book .pd-pages .pd-message .pd-paragraph.pa-list .pd-line.pa-item { display: list-item; position: static; margin: 0; padding-inline-start: 0; list-style: disc outside; }
            .pd-book .pd-pages .pd-message .pd-paragraph.pa-list .pd-line.pa-item::before { content: none; }
            .pd-book .pd-pages .pd-message .pd-paragraph.pa-list.pa-ordered .pd-line.pa-item { list-style: decimal outside; }
            .pd-book .pd-pages .pd-message .pd-paragraph.pa-list .pd-line.pa-item + .pd-line.pa-item { margin-block-start: 4px; }
            .pd-book .pd-pages .pd-message .pa-list .pa-list { margin: 4px 0 0; }
            .pd-book .pd-pages .pd-message .pa-verbatim { font-family: ${({theme:e})=>e.mono}; font-size: 13.5px; padding: 1px 4px; border-radius: 5px; background: rgba(11, 11, 11, .05); color: #8e2626; }
            .pd-book .pd-pages .pd-message .pd-word.pa-reference { color: ${({theme:e})=>e.accent}; text-decoration: underline; text-decoration-color: color-mix(in srgb, ${({theme:e})=>e.accent} 35%, transparent); text-underline-offset: 3px; }
            .pd-book .pd-pages .pd-message .pa-quoted { padding-inline-start: 12px; border-inline-start: 3px solid ${({theme:e})=>e.line}; color: ${({theme:e})=>e.soft}; }
            .pd-book .pd-pages .pd-message .pd-paragraph.pa-table { display: table; width: 100%; border-collapse: collapse; font-family: ${({theme:e})=>e.sans}; font-size: 14px; line-height: 1.5; }
            .pd-book .pd-pages .pd-message .pa-table .pa-row { display: table-row; }
            .pd-book .pd-pages .pd-message .pa-table .pa-col { display: table-cell; padding: 7px 12px; border-block-end: 1px solid ${({theme:e})=>e.line}; vertical-align: top; }
            .pd-book .pd-pages .pd-message .pa-table .pa-row-start-1 .pa-col { font-weight: 600; color: ${({theme:e})=>e.heading}; border-block-end: 2px solid ${({theme:e})=>e.line}; }
            .pd-book .pd-pages .pd-message .pd-equation { display: block; margin: 4px 0; max-width: 100%; overflow-x: auto; }
            .pd-book .pd-pages .pd-message .katex-display { margin: 0; }
            .pd-book .pd-pages .pd-message .katex { font-size: 1.05em; }
        `}cards(){return g`
            .pd-book .pd-pages .pd-message .pd-action { display: flex; align-items: center; gap: 8px; width: fit-content; max-width: 100%; margin: 0; padding: 7px 12px; border: 1px solid ${({theme:e})=>e.line}; border-radius: 10px; font-family: ${({theme:e})=>e.sans}; font-size: 13px; line-height: 1.4; color: ${({theme:e})=>e.soft}; }
            .pd-book .pd-pages .pd-message .pd-action::before { content: '⌕'; flex: none; font-size: 15px; color: ${({theme:e})=>e.accent}; }
            .pd-book .pd-pages .pd-message .pd-artifact, .pd-book .pd-pages .pd-message .pd-attachment { margin: 0; padding: 0; border: 0; background: none; }
            .pd-book .pd-pages .pd-message .pd-artifact > figcaption, .pd-book .pd-pages .pd-message .pd-attachment > figcaption { display: none; }
            .pd-book .pd-pages .pd-message .pd-said > .pd-attachment { order: -1; }
            .pd-book .pd-pages .pd-message .pd-card { display: flex; align-items: center; gap: 12px; width: 100%; max-width: 100%; margin: 0; padding: 12px 14px; border: 1px solid ${({theme:e})=>e.line}; border-radius: 12px; background: #ffffff; text-align: start; font-family: ${({theme:e})=>e.sans}; font-size: 13px; line-height: 1.4; color: ${({theme:e})=>e.ink}; cursor: pointer; transition: border-color .15s, background .15s; }
            .pd-book .pd-pages .pd-message .pd-card:hover { border-color: #c9d1de; background: #fcfcfd; }
            .pd-book .pd-pages .pd-message .pd-card .pd-card-mark { display: grid; place-items: center; flex: none; width: 38px; height: 38px; border: 1px solid ${({theme:e})=>e.line}; border-radius: 9px; background: #fbfcfd; color: ${({theme:e})=>e.soft}; }
            .pd-book .pd-pages .pd-message .pd-card .pd-card-mark svg { width: 18px; height: 18px; stroke: currentColor; fill: none; stroke-width: 1.8; stroke-linecap: round; stroke-linejoin: round; }
            .pd-book .pd-pages .pd-message .pd-card b { display: block; font-size: 14px; font-weight: 500; color: ${({theme:e})=>e.heading}; }
            .pd-book .pd-pages .pd-message .pd-card small { color: ${({theme:e})=>e.soft}; }
            .pd-book .pd-pages .pd-message .pd-card[aria-pressed='true'] { border-color: ${({theme:e})=>e.accent}; background: #f3f8fa; }
            .pd-book .pd-pages .pd-message .pd-card[aria-pressed='true'] .pd-card-mark { color: ${({theme:e})=>e.accent}; }
            .pd-book .pd-pages .pd-message .pd-chip { display: flex; align-items: center; gap: 8px; width: fit-content; margin: 0; padding: 6px 10px 6px 8px; border: 1px solid rgba(11, 11, 11, .1); border-radius: 10px; background: #ffffff; text-align: start; font-family: ${({theme:e})=>e.sans}; font-size: 12px; line-height: 1.3; color: ${({theme:e})=>e.ink}; cursor: pointer; }
            .pd-book .pd-pages .pd-message .pd-chip:hover, .pd-book .pd-pages .pd-message .pd-chip[aria-pressed='true'] { border-color: ${({theme:e})=>e.accent}; }
            .pd-book .pd-pages .pd-message .pd-chip .pd-chip-mark { display: grid; place-items: center; flex: none; width: 26px; height: 26px; border-radius: 6px; background: #fbfcfd; font-size: 8.5px; font-weight: 600; line-height: 1; letter-spacing: .04em; color: ${({theme:e})=>e.soft}; }
            .pd-book .pd-pages .pd-message .pd-chip b { display: block; font-weight: 500; }
            .pd-book .pd-pages .pd-message .pd-chip small { font-size: 11px; color: ${({theme:e})=>e.soft}; }
        `}paneColumn(){return g`
            .pd-book.pa-layout:has(> .pd-pane > .pd-pane-bar) {
                grid-template-columns: ${({theme:e})=>e.holdsColumn} minmax(0, 1fr) minmax(0, 1fr);
                grid-template-areas: 'library library library' 'holds head pane' 'holds pages pane';
            }
            ${this.strip()}
        `}strip(){return g`
            .pd-book.pa-layout:has(> .pd-project-strip:not(:empty)) { grid-template-rows: auto auto auto minmax(0, 1fr); grid-template-areas: 'library library' 'strip strip' 'holds head' 'holds pages'; }
            .pd-book.pa-layout:has(> .pd-project-strip:not(:empty)):has(> .pd-pane > .pd-pane-bar) { grid-template-areas: 'library library library' 'strip strip strip' 'holds head pane' 'holds pages pane'; }
            .pd-book.pa-layout:has(> .pd-project-strip:not(:empty)):not(:has(.pd-holds .pd-paragraph.pa-entry)) { grid-template-areas: 'library' 'strip' 'head' 'pages'; }
            .pd-book.pa-layout:has(> .pd-project-strip:not(:empty)):not(:has(.pd-holds .pd-paragraph.pa-entry)):has(> .pd-pane > .pd-pane-bar) { grid-template-areas: 'library library' 'strip strip' 'head pane' 'pages pane'; }
            .pd-book .pd-paragraph.pd-project-strip { grid-area: strip; display: flex; align-items: center; gap: 14px; min-width: 0; height: 40px; margin: 0; padding: 0 18px; background: #ffffff; border-block-end: 1px solid ${({theme:e})=>e.line}; font-family: ${({theme:e})=>e.sans}; font-size: 12.5px; line-height: 1.4; color: ${({theme:e})=>e.soft}; }
            .pd-book .pd-paragraph.pd-project-strip:empty { display: none; }
            .pd-book .pd-project-strip .pd-scheme { flex: none; }
            .pd-book .pd-project-strip > a:first-child { flex: none; display: block; line-height: 0; text-decoration: none; }
            .pd-book .pd-project-strip .pd-word.pd-mark { transform: scale(.8); transform-origin: left center; }
            .pd-book .pd-project-strip .pd-mark .pd-drawing svg { display: block; }
            .pd-book .pd-project-strip .pd-strip-words { display: flex; align-items: baseline; gap: 8px; min-width: 0; }
            .pd-book .pd-project-strip .pd-strip-words .pd-word.pa-reference { color: ${({theme:e})=>e.heading}; text-decoration: none; font-family: 'Source Sans 3', ${({theme:e})=>e.sans}; font-size: 14px; font-weight: 600; letter-spacing: -.01em; white-space: nowrap; }
            .pd-book .pd-project-strip .pd-strip-words .pd-word.pa-reference:hover { text-decoration: underline; text-underline-offset: 3px; }
            .pd-book .pd-project-strip .pd-strip-place { color: ${({theme:e})=>e.faint}; font-variant-numeric: tabular-nums; white-space: nowrap; }
            .pd-book .pd-project-strip .pd-strip-neighbours { display: flex; align-items: center; gap: 14px; min-width: 0; }
            .pd-book .pd-project-strip .pd-strip-neighbours .pd-word.pa-reference { color: ${({theme:e})=>e.soft}; text-decoration: none; max-width: 30ch; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
            .pd-book .pd-project-strip .pd-strip-neighbours .pd-word.pa-reference:hover { color: ${({theme:e})=>e.accent}; }
            .pd-book .pd-project-strip .pd-strip-word { flex: none; font-size: 11.5px; color: ${({theme:e})=>e.faint}; font-style: italic; white-space: nowrap; }
            .pd-book .pd-project-strip > a:last-child, .pd-book .pd-project-strip > .pd-word:last-child { margin-inline-start: auto; }
            .pd-book .pd-project-strip > a:last-child .pd-word.pa-reference, .pd-book .pd-project-strip > .pd-word:last-child { flex: none; padding: 3px 11px; border: 1px solid ${({theme:e})=>e.line}; border-radius: 999px; color: ${({theme:e})=>e.ink}; text-decoration: none; font-weight: 500; white-space: nowrap; }
            .pd-book .pd-project-strip > a:last-child .pd-word.pa-reference:hover { border-color: #c0c9df; color: ${({theme:e})=>e.accent}; }
            @media (max-width: ${({theme:e})=>e.narrow}) {
                .pd-book .pd-paragraph.pd-project-strip { order: 0; height: auto; min-height: 40px; padding: 6px 14px; flex-wrap: wrap; gap: 6px 10px; }
                .pd-book .pd-project-strip .pd-strip-neighbours, .pd-book .pd-project-strip .pd-strip-word { display: none; }
            }
        `}phone(){return g`
            @media (max-width: ${({theme:e})=>e.narrow}) {
                .pd-book .pd-pages .pd-message.pa-mine > .pd-said { max-width: 92%; }
                .pd-book .pd-head .pd-title { font-size: 24px; }
                .pd-book.pa-layout:has(> .pd-pane > .pd-pane-bar) { grid-template-columns: minmax(0, 1fr); grid-template-areas: 'library' 'head' 'pages'; }
            }
        `}};r(hn,"$ApplicationForm");let Ns=hn;const zd=n(Ns);var Od=Object.defineProperty,Dd=Object.getOwnPropertyDescriptor,jd=r((p,e,t,o)=>{for(var s=Dd(e,t),i=p.length-1,d;i>=0;i--)(d=p[i])&&(s=d(e,t,s)||s);return s&&Od(e,t,s),s},"__decorateClass$3");const Cd='<svg viewBox="0 0 24 24"><path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4M9 12h6M9 16h6"/></svg>',Pd='<svg viewBox="0 0 24 24"><path d="M8 7l-5 5 5 5M16 7l5 5-5 5M13 5l-2 14"/></svg>',U=r(p=>{const e=p.book;return e!==void 0&&"$shown"in e?e:void 0},"showingBook"),fn=class fn extends k{constructor(){super(...arguments),this.specification=new ut}defines(e){e.classes.add(this,"pa-version")}erase(e){e.classes.revert(this)}};r(fn,"$Version");let Is=fn;const gn=class gn extends ${$saidOfAChapter(e){l(e instanceof v,"a version is said of a chapter, and this is not one")}};r(gn,"VersionSpecification");let ut=gn;jd([h("a version is said of a chapter")],ut.prototype,"$saidOfAChapter");const bn=class bn extends Un{constructor(){super(...arguments),this.$artifact=void 0,this.$place=void 0}get version(){const e=this.$place;if(e!==void 0)return this.book.chapters.find(t=>Gn.slug(t.title?.name??"")===e)}get versionName(){return this.version?.title?.name??""}get name(){return this.versionName.replace(/ v\d+(?:-\d+)?$/u,"")||this.$identifier}get number(){return/ v(\d+)(?:-\d+)?$/u.exec(this.versionName)?.[1]??"1"}get kind(){const e=this.$type.replace(/^\./u,"");return e==="md"||e==="txt"||e===""?"document":e==="html"?"page":"code"}get shown(){return U(this)?.$shown===this}$Artifact(...e){this.$Code(...e),this.containers.replace(this,"pre","figure")}write(){const e=[...this.text].map((o,s)=>{const i=n(o);return a(i,{},s)}),t={__html:this.kind==="document"?Cd:Pd};return c(m,{children:[c("button",{type:"button",className:"pd-card","aria-pressed":this.shown,onClick:r(()=>this.press(),"onClick"),children:[a("span",{className:"pd-card-mark",dangerouslySetInnerHTML:t}),c("span",{className:"pd-card-words",children:[a("b",{children:this.name}),a("small",{children:`Click to open ${this.kind} · v${this.number}`})]})]}),a("figcaption",{children:e})]})}press(){const e=U(this);e!==void 0&&(e.$shown=e.$shown===this?void 0:this)}$Define(){super.$Define(),this.classes.add(this,"pd-artifact"),this.shown&&this.classes.add(this,"pa-open")}};r(bn,"$Artifact");let Ce=bn;const un=class un extends Un{get sentence(){return y.copy(this.text)}get fileName(){return/“([^”]+)”/u.exec(this.sentence)?.[1]??"a file"}get extension(){return(this.fileName.split(".").pop()??"file").toUpperCase().slice(0,4)}get lineCount(){return this.names?this.contents.split(`
`).length:0}get shown(){return U(this)?.$shown===this}$Attachment(...e){this.$Code(...e),this.containers.replace(this,"pre","figure")}write(){const e=[...this.text].map((t,o)=>{const s=n(t);return a(s,{},o)});return c(m,{children:[c("button",{type:"button",className:"pd-chip","aria-pressed":this.shown,onClick:r(()=>this.press(),"onClick"),children:[a("span",{className:"pd-chip-mark",children:this.extension}),c("span",{className:"pd-chip-words",children:[a("b",{children:this.fileName}),a("small",{children:this.names?`${this.lineCount} lines`:"not carried by the export"})]})]}),a("figcaption",{children:e})]})}press(){const e=U(this);e!==void 0&&(e.$shown=e.$shown===this?void 0:this)}$Define(){super.$Define(),this.classes.add(this,"pd-attachment"),this.shown&&this.classes.add(this,"pa-open")}};r(un,"$Attachment");let Pe=un;const bp=n(Is),up=n(Ce),mp=n(Pe),mn=class mn extends f{constructor(){super(...arguments),this.style=z.div`
        .pd-book &.pd-paragraph {
            grid-area: pane;
            display: none;
            flex-direction: column;
            min-width: 0;
            margin: 12px 12px 12px 0;
            border: 1px solid ${({theme:e})=>e.line};
            border-radius: 14px;
            background: ${({theme:e})=>e.paper};
            box-shadow: 0 1px 2px rgba(43, 54, 60, .04), 0 12px 32px rgba(43, 54, 60, .07);
            overflow: hidden;
        }
        .pd-book &.pd-paragraph:has(> .pd-pane-bar) { display: flex; }
        .pd-book & .pd-pane-bar { display: flex; align-items: center; gap: 10px; padding: 10px 10px 10px 18px; border-block-end: 1px solid ${({theme:e})=>e.line}; }
        .pd-book & .pd-pane-title { flex: 1; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-family: ${({theme:e})=>e.sans}; font-size: 14px; font-weight: 500; line-height: 1.4; color: ${({theme:e})=>e.ink}; }
        .pd-book & .pd-pane-kind { font-family: ${({theme:e})=>e.sans}; font-size: 12px; line-height: 1.4; color: ${({theme:e})=>e.soft}; }
        .pd-book & button { border: 0; background: none; padding: 2px 8px; border-radius: 6px; font-family: ${({theme:e})=>e.sans}; font-size: 11.5px; font-weight: 500; line-height: 1.4; color: ${({theme:e})=>e.soft}; cursor: pointer; }
        .pd-book & button:hover { background: rgba(11, 11, 11, .05); color: ${({theme:e})=>e.ink}; }
        .pd-book & button:disabled { opacity: .35; cursor: default; }
        .pd-book & .pd-pane-close { font-size: 18px; padding: 0 8px; }
        .pd-book & .pd-pane-body { flex: 1; min-height: 0; overflow: auto; }
        .pd-book & .pd-pane-body > pre { margin: 0; padding: 18px 22px; font-family: ${({theme:e})=>e.mono}; font-size: 13.5px; line-height: 1.65; color: #14181f; white-space: pre-wrap; overflow-wrap: anywhere; }
        .pd-book & .pd-pane-body .pd-chapter { display: block; padding: 24px 36px 60px; }
        .pd-book & .pd-pane-body .pd-chapter > .pd-title, .pd-book & .pd-pane-body .pd-chapter > a.pa-self-reference { display: none; }
        .pd-book & .pd-pane-body .pd-section > a.pa-self-reference:first-child { display: none; }
        .pd-book & .pd-pane-body .pd-chapter .pd-code-box { margin: 0; border: 0; border-radius: 0; background: transparent; }
        .pd-book & .pd-pane-foot { display: flex; align-items: center; gap: 6px; padding: 8px 10px 8px 18px; border-block-start: 1px solid ${({theme:e})=>e.line}; font-family: ${({theme:e})=>e.sans}; font-size: 12px; font-weight: 500; line-height: 1.4; color: ${({theme:e})=>e.soft}; }
        .pd-book & .pd-pane-version { display: flex; align-items: center; gap: 4px; }
        .pd-book & .pd-pane-version button { padding: 0 6px; font-size: 13px; }
        .pd-book & .pd-pane-download { margin-inline-start: auto; }
        @media (max-width: ${({theme:e})=>e.narrow}) {
            .pd-book &.pd-paragraph:has(> .pd-pane-bar) { position: fixed; inset: 52px 0 0 0; margin: 0; border-radius: 0; z-index: 2; }
        }
    `}get shown(){return U(this)?.$shown}get artifacts(){return this.book?.messages.flatMap(e=>e.text.find(Ce))??[]}$Pane(...e){this.$Writing(...e),this.containers.replace(this,"span",this.style)}neighbour(e,t){const o=Number(e.number)+t;return this.artifacts.find(s=>s.$artifact===e.$artifact&&Number(s.number)===o)}write(){const e=this.shown;if(e===void 0)return;const t=e instanceof Ce?e:void 0,o=e instanceof Pe?e:void 0,s=t?.version,i=s===void 0?void 0:n(s),d=t===void 0?void 0:this.neighbour(t,-1),u=t===void 0?void 0:this.neighbour(t,1),x=o===void 0?"":o.names?o.contents:"The export does not carry this upload; the name is all it kept.";return c(m,{children:[c("div",{className:"pd-pane-bar",children:[a("span",{className:"pd-pane-title",children:t?.name??o?.fileName}),a("span",{className:"pd-pane-kind",children:t?.kind??o?.extension.toLowerCase()}),a("button",{type:"button",className:"pd-pane-copy",onClick:r(b=>this.copy(b),"onClick"),children:"Copy"}),a("button",{type:"button",className:"pd-pane-close","aria-label":"close",onClick:r(()=>this.close(),"onClick"),children:"×"})]}),a("div",{className:"pd-pane-body",children:i===void 0?a("pre",{children:x}):a(i,{})}),t===void 0?void 0:c("div",{className:"pd-pane-foot",children:[c("span",{className:"pd-pane-version",children:[a("button",{type:"button",disabled:d===void 0,onClick:r(()=>this.show(d),"onClick"),children:"‹"}),a("span",{children:`v${t.number}`}),a("button",{type:"button",disabled:u===void 0,onClick:r(()=>this.show(u),"onClick"),children:"›"})]}),a("button",{type:"button",className:"pd-pane-download",onClick:r(()=>this.download(t),"onClick"),children:"Download"})]})]})}show(e){const t=U(this);t!==void 0&&e!==void 0&&(t.$shown=e)}close(){const e=U(this);e!==void 0&&(e.$shown=void 0)}copy(e){const t=e.currentTarget.closest(".pd-pane")?.querySelector(".pd-pane-body");navigator.clipboard?.writeText(t?.textContent??"")}download(e){const t=e.$type.replace(/^\./u,"")||"md",o=new Blob([e.contents],{type:"text/plain"}),s=document.createElement("a");s.href=URL.createObjectURL(o),s.download=`${e.name} v${e.number}.${t}`,s.click(),URL.revokeObjectURL(s.href)}$Define(){super.$Define(),this.classes.add(this,"pd-pane")}};r(mn,"$Pane");let Ts=mn;const Md=n(Ts);var Ad=Object.defineProperty,Nd=Object.getOwnPropertyDescriptor,Id=r((p,e,t,o)=>{for(var s=Nd(e,t),i=p.length-1,d;i>=0;i--)(d=p[i])&&(s=d(e,t,s)||s);return s&&Ad(e,t,s),s},"__decorateClass$2");const $n=class $n extends k{constructor(){super(...arguments),this.specification=new mt}get name(){return I.reference(y.copy(this.text))?.name??""}get means(){return this.annotations.expressed(Zs)}$Define(){super.$Define();const e=I.reference(y.copy(this.text));if(e===void 0)return;const t=n(w);this.annotations.add(this,a(t,{children:e.identifier}))}write(){return this.name}};r($n,"$Account");let Me=$n;const kn=class kn extends ${$saidOfACover(e){l(e instanceof v&&e.is(D),"an account is said of a cover, and this is not one")}};r(kn,"AccountSpecification");let mt=kn;Id([h("an account is said of a cover")],mt.prototype,"$saidOfACover");const xn=class xn extends f{get cover(){return this.$cover??this.book?.cover}get account(){return this.cover?.annotations.expressed(Me)}write(){const e=this.account,t=n(C),o=n(ce),s=n(w);return c(m,{children:[c(t,{children:[a(o,{}),"account"]}),c(t,{children:[a(s,{children:e.means.identifier}),e.name]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-account-line")}};r(xn,"$AccountLine");let Hs=xn;const $p=n(Me),Td=n(Hs);var Hd=Object.defineProperty,Wd=Object.getOwnPropertyDescriptor,Ld=r((p,e,t,o)=>{for(var s=Wd(e,t),i=p.length-1,d;i>=0;i--)(d=p[i])&&(s=d(e,t,s)||s);return s&&Hd(e,t,s),s},"__decorateClass$1");const vn=class vn extends k{constructor(){super(...arguments),this.specification=new kt}get uuid(){return y.copy(this.text).trim()}write(){return null}};r(vn,"$Origin");let $t=vn;const yn=class yn extends ${$saidOfACoverOrAMessage(e){l(e instanceof v&&e.is(D)||e instanceof P,"an origin is said of a cover or a message, and this is neither")}};r(yn,"OriginSpecification");let kt=yn;Ld([h("an origin is said of a cover or a message")],kt.prototype,"$saidOfACoverOrAMessage");const kp=n($t);var Bd=Object.defineProperty,_d=Object.getOwnPropertyDescriptor,Rd=r((p,e,t,o)=>{for(var s=_d(e,t),i=p.length-1,d;i>=0;i--)(d=p[i])&&(s=d(e,t,s)||s);return s&&Bd(e,t,s),s},"__decorateClass");const wn=class wn extends k{constructor(){super(...arguments),this.specification=new xt}get name(){return I.reference(y.copy(this.text))?.name??""}get means(){return this.annotations.expressed(Zs)}$Define(){super.$Define();const e=I.reference(y.copy(this.text));if(e===void 0)return;const t=n(w);this.annotations.add(this,a(t,{children:e.identifier}))}write(){return this.name}};r(wn,"$Project");let Ae=wn;const zn=class zn extends ${$saidOfACover(e){l(e instanceof v&&e.is(D),"a project is said of a cover, and this is not one")}};r(zn,"ProjectSpecification");let xt=zn;Rd([h("a project is said of a cover")],xt.prototype,"$saidOfACover");const On=class On extends f{get cover(){return this.$cover??this.book?.cover}get project(){return this.cover?.annotations.expressed(Ae)}write(){const e=this.project,t=n(C),o=n(ce),s=n(w);return c(m,{children:[c(t,{children:[a(o,{}),"project"]}),c(t,{children:[a(s,{children:e.means.identifier}),e.name]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-project-line")}};r(On,"$ProjectLine");let Ws=On;const xp=n(Ae),Fd=n(Ws),Sd='<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linejoin="round" stroke-linecap="round"><path d="M4 1.5h5.5L13 5v9.5H4z"/><path d="M9.5 1.5V5H13M6 8h4M6 10.5h4"/></svg>',Dn=class Dn extends f{$Outline(...e){this.$Writing(...e),this.containers.replace(this,"span","div")}write(){const e=this.book,t=this.$asked;if(e===void 0||t===void 0)return;const o=n(C),s=n(w),i=t.text.find(P).filter(d=>d.is(pt));if(i.length!==0)return a("ol",{className:"pd-asked",children:i.map((d,u)=>{const x=e.placeOf(d),b=e.wordsOf(d).text;return a("li",{children:x===void 0?b:c(o,{children:[a(s,{children:x}),b]})},u)})})}$Define(){super.$Define(),this.classes.add(this,"pd-outline")}};r(Dn,"$Outline");let Ls=Dn;const jn=class jn extends ee{get on(){return this.$attachment?.shown===!0}press(){this.$attachment?.press()}write(){const e=this.$attachment;if(e!==void 0)return c(m,{children:[a("span",{className:"pd-drawing",dangerouslySetInnerHTML:{__html:Sd}}),a("span",{className:"pd-tab-name",children:e.fileName}),a("small",{children:e.names?`${e.lineCount} lines`:"not carried"})]})}$Define(){super.$Define(),this.classes.add(this,"pd-file-tab")}};r(jn,"$AttachmentTab");let Bs=jn;const Ed=n(Ls),Gd=n(Bs),Ud=Ed,Zd=Gd,qd="library-trail",Yd=r(()=>{try{const p=typeof localStorage>"u"?null:localStorage.getItem(qd);if(p===null)return;const e=JSON.parse(p);return e.from?.marking===void 0?void 0:e}catch{return}},"keptTrail"),Cn=class Cn extends Ue{constructor(){super(...arguments),this.$marking={drawing:"",declarations:""}}get marking(){return this.$marking}};r(Cn,"$TrailMark");let _s=Cn;const Pn=class Pn extends f{get conversation(){return this.book}$ProjectStrip(...e){this.$Writing(...e),this.containers.replace(this,"span","div")}write(){const e=this.conversation,t=e?.$trail;if(e===void 0||t===void 0)return;const o=n(C),s=n(w),i=n(Kd);return c(m,{children:[a(i,{marking:t.from.marking,children:a(s,{children:t.from.href})}),c("span",{className:"pd-strip-words",children:[c(o,{children:[a(s,{children:t.from.href}),t.from.title]}),a("span",{className:"pd-strip-place",children:`${t.within.index} of ${t.within.of}`})]}),c("span",{className:"pd-strip-neighbours",children:[t.within.prev===void 0?void 0:c(o,{children:[a(s,{children:t.within.prev.href}),`‹ ${t.within.prev.title}`]}),t.within.next===void 0?void 0:c(o,{children:[a(s,{children:t.within.next.href}),`${t.within.next.title} ›`]})]}),t.word===""?void 0:a("span",{className:"pd-strip-word",children:`you were searching “${t.word}”`}),c(o,{children:[a(s,{children:t.from.href}),"back to where I was"]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-project-strip")}};r(Pn,"$ProjectStrip");let Rs=Pn;const Xd=n(_s),Qd=n(Rs),Kd=Xd,Jd=Qd,Mn=class Mn extends bt{constructor(){super(...arguments),this.$shown=void 0,this.$trail=void 0}arrive(){const e=Yd();e===void 0||e.to!==this.means?.identifier||this.$trail?.at===e.at||(this.$trail=e)}turn(){super.turn(),this.arrive()}get project(){return this.cover?.annotations.expressed(Ae)}get account(){return this.cover?.annotations.expressed(Me)}get origin(){return this.cover?.annotations.expressed($t)?.uuid}get subjectCover(){return this.coverOf(this.project?.means?.identifier)??super.subjectCover}get index(){return this.table?.annotations.expressed(H)}get searchHint(){return"a word in this conversation"}wordsOf(e){if(!(e instanceof P))return super.wordsOf(e);const t=this._words?.get(e);if(t!==void 0)return t;const o=e.speaker,s=o===void 0?"":I.reference(y.copy(o.text))?.name??y.copy(o.text),i=[...e.text].filter(u=>u!==o).map(u=>y.copy(u.text).replace(/\s+/gu," ").trim()).filter(u=>u!=="").join(" "),d={title:s,text:i,lower:`${s} ${i}`.toLowerCase()};return(this._words??=new Map).set(e,d),d}found(e){const t=e.trim().toLowerCase();return t===""?[]:this.messages.filter(o=>this.wordsOf(o).lower.includes(t))}countOfFound(e,t){return c(m,{children:[a("b",{children:e.length})," ",e.length===1?"message says":"messages say"," “",t,"”"]})}placeOf(e){if(!(e instanceof P))return super.placeOf(e);const t=e.annotations.expressed(Ot)?.identifier;return t===void 0?void 0:this.placeWithin(`#${t}`)}sought(e){if(typeof CSS>"u"||!("highlights"in CSS)||typeof document>"u")return;const t=CSS.highlights;if(e===""){t.delete("pd-found");return}const o=[],s=e.toLowerCase(),i=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,{acceptNode:r(u=>u.parentElement?.closest(".pd-pages .pd-said")?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT,"acceptNode")});for(let u=i.nextNode();u!==null;u=i.nextNode()){const x=u.nodeValue?.toLowerCase()??"";for(let b=x.indexOf(s);b!==-1;b=x.indexOf(s,b+s.length))o.push(new StaticRange({startContainer:u,startOffset:b,endContainer:u,endOffset:b+e.length}))}const d=globalThis.Highlight;t.set("pd-found",new d(...o))}holds(){const e=n(ji),t=n(Ci),o=n(Ud),s=this.open;return c(m,{children:[a(e,{chapter:this.table}),a(t,{chapter:this.table}),super.holds(),s===void 0||!this.body.includes(s)?void 0:a(o,{chapter:this.table,asked:s},s.mention?.identifier)]})}write(){const e=n(Md),t=n(Jd);return c(m,{children:[super.write(),a(t,{chapter:this.cover}),a(e,{chapter:this.cover})]})}$Bound(){const e=this.index;e!==void 0&&(e.$folded=!0,e.$counted=!0,e.$searched=!0);const t=n(Vn);for(const s of this.table?.text.find(M)??[])s.is(ve)||s.annotations.add(this,a(t,{}));const o=n(Zd);for(const s of e?.entries??[]){const i=N(s)?.identifier,d=i===void 0?void 0:this.chapterAt(i);if(d===void 0||!this.body.includes(d))continue;const u=d.text.find(P).flatMap(x=>x.text.find(Pe)).filter(x=>x.names);u.length!==0&&s.text.add(this,...u.map((x,b)=>a(o,{attachment:x},b)))}super.$Bound()}me(){const e=n(Fd),t=n(Td);return c(m,{children:[super.me(),this.project===void 0?void 0:a(e,{cover:this.cover}),this.account===void 0?void 0:a(t,{cover:this.cover})]})}};r(Mn,"$ClaudeConversation");let Fs=Mn;const ir=n(Fs);n(ir,qs)(zd);n(ir,Wt)(Vs);const An=class An extends Se{};r(An,"$JournalCover");let Ss=An;const dr=n(Ss),pr=r(()=>c(Dt,{children:[a(Qn,{}),a(Tt,{ground:"#eef5f6",band:"#c3e3e6",bandInk:"#1c565c",foot:"#8db9bd",footInk:"#153e43",ink:"#1f5a60"}),a(Ht,{x:"-46",y:"-13"}),a(jt,{children:"[Dougs Library](/dougs-library/)"}),a(Ct,{children:"[Doug](/dougs-story/)"}),a(Pt,{children:"[Library](/dougs-library/)"}),a(Mt,{children:"[The Library](/dougs-library/)"}),c(At,{children:[a(It,{}),a(Nt,{children:`<svg viewBox="0 0 64 64" class="pd-illustration"><path class="light" d="M9 7h46v50H9z"/><path d="M9 7h46v50H9zM9 24h46M9 41h46"/><path class="fill" d="M13 11h5v13h-5zM20 9h4v15h-4zM26 13h6v11h-6zM34 10h4v14h-4zM40 14h6v10h-6z"/><path d="M48 24l4-12 3 1-4 11z"/><path class="fill" d="M13 28h4v13h-4zM19 30h7v11h-7zM28 27h4v14h-4zM34 31h5v10h-5zM41 28h6v13h-6zM49 29h3v12h-3z"/><path class="fill" d="M13 46h6v11h-6zM21 44h4v13h-4zM27 47h8v10h-8zM37 45h4v12h-4zM43 48h6v9h-6z"/><path d="M50 57l3-11 3 1-3 10z"/></svg>
`})]})]}),"SubjectCover$2"),cr=r(()=>c(Dt,{children:[a(dr,{}),a(Or,{}),a(xe,{children:pr()}),a(Tt,{ground:"#f5eedf",band:"#d9c3a3",bandInk:"#4a3626",foot:"#a3b6cc",footInk:"#2a4262",ink:"#2f4a6a"}),a(Ht,{x:"-54",y:"-33"}),a(jt,{children:"[Dougs Story](/dougs-story/)"}),a(Ct,{children:"[Doug](/dougs-story/)"}),a(Pt,{children:"[Library](/dougs-library/)"}),a(Mt,{children:"[The Librarian](/dougs-story/)"}),c(At,{children:[a(It,{}),a(Nt,{children:`<svg viewBox="0 0 64 64" class="pd-illustration"><path class="light" d="M8 13h23v38H8zM33 13h23v38H33z"/><path d="M8 13h23v38H8zM33 13h23v38H33z"/><path d="M13 21h13M13 27h13M13 33h9M38 21h13M38 27h13M38 33h13M38 39h8"/><path class="fill" d="M15 55 45 25l4 4-30 30-6 2z"/><path d="M15 55 45 25l4 4-30 30-6 2zM43 27l4 4M17 53l2 2"/></svg>
`})]})]}),"StoryCover"),Vd=r(()=>c(Dt,{children:[a(Qn,{}),a(xe,{children:pr()}),a(xe,{children:cr()}),a(Tt,{ground:"#eff1f6",band:"#c0c9df",bandInk:"#2a3a63",foot:"#8e9fc8",footInk:"#1f2d50",ink:"#2a3a63"}),a(Ht,{x:"-36",y:"-26"}),a(jt,{children:"[Dougs Claude](/dougs-claude/)"}),a(Ct,{children:"[Doug](/dougs-story/)"}),a(Pt,{children:"[Library](/dougs-library/)"}),a(Mt,{children:"[Claude](/dougs-claude/)"}),c(At,{children:[a(It,{}),a(Nt,{children:`<svg viewBox="0 0 64 64" class="pd-illustration"><path class="light" d="M8 30h48v27H8z"/><path d="M8 30h48v27H8zM8 44h48"/><path class="fill" d="M12 33h5v9h-5zM19 31h4v11h-4zM25 34h7v8h-7zM34 32h4v10h-4zM40 35h8v7h-8z"/><path class="fill" d="M12 47h6v8h-6zM20 48h4v7h-4zM26 46h9v9h-9zM37 49h5v6h-5zM44 47h7v8h-7z"/><path class="light" d="M28 6h28v16H40l-6 5v-5h-6z"/><path d="M28 6h28v16H40l-6 5v-5h-6z"/><path d="M33 11h18M33 16h12"/></svg>
`})]})]}),"SubjectCover$1"),vp=r(()=>c(Dt,{children:[a(dr,{}),a(xe,{children:Vd()}),a(xe,{children:cr()}),a(Tt,{ground:"#eef5f6",band:"#b6dde2",bandInk:"#1c565c",foot:"#7fb7bd",footInk:"#153e43",ink:"#1f5a60"}),a(Ht,{x:"-32",y:"-26"}),a(jt,{children:"[Our Conversations](/our-conversations/)"}),a(Ct,{children:"[Doug](/dougs-story/)"}),a(Pt,{children:"[Claude](/dougs-claude/)"}),a(Mt,{children:"[Conversations](/our-conversations/)"}),c(At,{children:[a(It,{}),a(Nt,{children:`<svg viewBox="0 0 64 64" class="pd-illustration"><path class="light" d="M6 9h34v20H18l-6 6v-6H6z"/><path d="M6 9h34v20H18l-6 6v-6H6z"/><path d="M11 15h24M11 21h16"/><path class="fill" d="M24 31h34v20H52v6l-6-6H24z"/><path d="M24 31h34v20H52v6l-6-6H24z"/><path class="light" d="M29 37h24M29 43h16"/></svg>
`})]})]}),"SubjectCover");export{Fs as $,$p as A,Qn as B,It as I,gp as M,kp as O,pp as P,lp as Q,vp as S,xe as V,Ht as W,cr as a,Tt as b,dp as c,fp as d,np as e,cp as f,ip as g,xp as h,rp as i,mp as j,hp as k,up as l,bp as m,hd as n};
