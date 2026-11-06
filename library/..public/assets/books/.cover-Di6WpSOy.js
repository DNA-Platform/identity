var gr=Object.defineProperty;var r=(p,e)=>gr(p,"name",{value:e,configurable:!0});import{jsx as a,jsxs as c,Fragment as m}from"react/jsx-runtime";import{$ as n,$check as l,selection as z,$Chemical as br,inert as Gs}from"@dna-platform/chemistry";import{$Word as j,specify as h,AnnotationSpecification as $,$Book as En,$Annotation as k,$Paragraph as f,$Section as M,html as y,$Format as Q,$Append as Sn,$Chapter as v,binder as I,$Svg as zt,Word as C,Code as ur,$Date as Us,$Author as Zs,Reference as w,$Subject as Gn,$Topic as Un,$Reference as qs,$Image as mr,$Composition as $r,$Cover as D,$Synopsis as Tn,CoverSpecification as kr,$Content as Hn,$Parenthetical as xr,$TableOfContents as K,$Theme as vr,$Paginated as yr,Self as Wn,Theme as Ys,reflection as wr,BookSpecification as zr,$Heading as Zn,$Referent as Ot,$SelfReference as Or,$Means as Dr,Referent as jr,identifier as qn,SectionSpecification as Cr,$Code as Yn,Chapter as Dt,Title as jt,Author as Ct,Subject as Pt,About as Mt,Paragraph as At,Svg as Nt,Autobiography as Pr}from"@dna-platform/public";import{css as b}from"styled-components";const so=class so extends j{get on(){return[this.book.$is].flat().includes(this.$annotation)}$Switch(...e){this.$Writing(...e),this.containers.replace(this,"span","button")}container(e){return super.container({type:"button","aria-pressed":this.on,onClick:r(()=>this.press(),"onClick"),...e})}press(){const e=this.book,t=[e.$is].flat();e.$is=this.on?t.filter(o=>o!==this.$annotation):[this.$annotation,...t]}$Define(){super.$Define(),this.classes.add(this,"pd-switch")}};r(so,"$Switch");let te=so;const oo=class oo extends te{press(){const e=this.book,t=[e.$is].flat().filter(o=>!this.$family.includes(o));e.$is=[this.$annotation,...t]}};r(oo,"$Tab");let ge=oo;const Xn=n(te),Mr=n(ge);var Ar=Object.defineProperty,Nr=Object.getOwnPropertyDescriptor,Ir=r((p,e,t,o)=>{for(var s=Nr(e,t),i=p.length-1,d;i>=0;i--)(d=p[i])&&(s=d(e,t,s)||s);return s&&Ar(e,t,s),s},"__decorateClass$k");const ao=class ao extends ${$saidOfABook(e){l(e instanceof En,"this is said of a book, and here it is said of something else")}};r(ao,"OfABookSpecification");let L=ao;Ir([h("this is said of a book")],L.prototype,"$saidOfABook");var Tr=Object.defineProperty,Hr=Object.getOwnPropertyDescriptor,Wr=r((p,e,t,o)=>{for(var s=Hr(e,t),i=p.length-1,d;i>=0;i--)(d=p[i])&&(s=d(e,t,s)||s);return s&&Tr(e,t,s),s},"__decorateClass$j");const vt=class vt extends k{constructor(){super(...arguments),this.specification=new L}defines(e){for(const t of e.annotations.after(this))t instanceof vt&&e.annotations.express(t,!1);e.classes.add(this,"pa-file-panel-state")}erase(e){e.classes.revert(this)}};r(vt,"$FilePanelState");let se=vt;const no=class no extends se{defines(e){super.defines(e),e.classes.add(this,"pa-code-forward")}};r(no,"$CodeForward");let Lt=no;const ro=class ro extends se{defines(e){super.defines(e),e.classes.add(this,"pa-words-forward")}};r(ro,"$WordsForward");let Bt=ro;const io=class io extends se{defines(e){super.defines(e),e.classes.add(this,"pa-split")}};r(io,"$Split");let _t=io;const po=class po extends k{constructor(){super(...arguments),this.specification=new L}defines(e){e.classes.add(this,"pa-light-code")}erase(e){e.classes.revert(this)}};r(po,"$LightCode");let Rt=po;const co=class co extends k{constructor(){super(...arguments),this.specification=new L}defines(e){e.classes.add(this,"pa-wrapped-code")}erase(e){e.classes.revert(this)}};r(co,"$WrappedCode");let Ft=co;const lo=class lo extends k{constructor(){super(...arguments),this.specification=new L}defines(e){e.classes.add(this,"pa-numbered-code")}erase(e){e.classes.revert(this)}};r(lo,"$NumberedCode");let Et=lo;const ho=class ho extends k{constructor(){super(...arguments),this.specification=new Ie}defines(e){e.classes.add(this,"pa-brief")}erase(e){e.classes.revert(this)}};r(ho,"$Brief");let St=ho;const fo=class fo extends ${$saidOfAParagraph(e){l(e instanceof f,"brief is said of a paragraph, and this is not one")}};r(fo,"BriefSpecification");let Ie=fo;Wr([h("brief is said of a paragraph")],Ie.prototype,"$saidOfAParagraph");n(se);const Xs=n(Lt),Qn=n(Bt),be=n(_t),Lr=n(Rt),Br=n(Ft),_r=n(Et);n(St);const go=class go extends f{constructor(){super(...arguments),this.style=z.div`
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
    `}get spread(){return this.chapter?.annotations.expressed(T)}$FileRail(...e){this.$Writing(...e),this.containers.replace(this,"span",this.style)}write(){const e=n(Ks),t=this.spread;if(t!==void 0)return t.files.map(o=>a(e,{file:o,annotation:be,family:t.filePanelStates,skeleton:!0},ce(o)))}$Define(){super.$Define(),this.classes.add(this,"pd-file-rail")}};r(go,"$FileRail");let Gt=go;const bo=class bo extends ge{constructor(){super(...arguments),this.style=z.button`
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
    `}get paragraphs(){return(this.chapter?.text.find(M)??[]).flatMap(e=>e.text.find(f)).slice(0,16).map(e=>y.copy(e.text))}$FilePanelGrip(...e){this.$Switch(...e),this.containers.replace(this,"button",this.style)}write(){return a("span",{className:"pd-skeleton",children:this.paragraphs.map((e,t)=>a("i",{style:{width:`${Math.max(25,Math.min(100,e.length/4))}%`}},t))})}$Define(){super.$Define(),this.classes.add(this,"pd-file-panel-grip")}};r(bo,"$FilePanelGrip");let Ut=bo;const Rr=n(Gt),Fr=n(Ut),uo=class uo extends f{constructor(){super(...arguments),this.style=z.div`
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
    `}get spread(){return this.chapter?.annotations.expressed(T)}$FilePanel(...e){this.$Writing(...e),this.containers.replace(this,"span",this.style)}write(){const e=n(Gr),t=n(ri),o=this.spread;if(o!==void 0)return c(m,{children:[a(e,{chapter:this.chapter}),a("div",{className:"pd-file-listings",children:o.files.map(s=>a(t,{file:s,filePanelState:Xs,family:o.filePanelStates},ce(s)))})]})}$Define(){super.$Define(),this.classes.add(this,"pd-file-panel")}};r(uo,"$FilePanel");let Zt=uo;const mo=class mo extends f{constructor(){super(...arguments),this.style=z.div`
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
    `}get spread(){return this.chapter?.annotations.expressed(T)}$FilePanelBar(...e){this.$Writing(...e),this.containers.replace(this,"span",this.style)}write(){const e=n(Ks),t=n(Mr),o=n(Xn),s=this.spread,i=this.chapter;if(s!==void 0)return c(m,{children:[s.files.map(d=>a(e,{file:d},ce(d))),a("span",{className:"pd-words-only",children:a(t,{chapter:i,annotation:Qn,family:s.filePanelStates,children:"words"})}),a("span",{className:"pd-dock pd-to-full",children:a(t,{chapter:i,annotation:Xs,family:s.filePanelStates,children:"full screen"})}),a("span",{className:"pd-dock pd-to-split",children:a(t,{chapter:i,annotation:be,family:s.filePanelStates,children:"split"})}),c("span",{className:"pd-options",children:[a(o,{chapter:i,annotation:Lr,children:"light"}),a(o,{chapter:i,annotation:Br,children:"wrap"}),a(o,{chapter:i,annotation:_r,children:"lines"})]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-file-panel-bar")}};r(mo,"$FilePanelBar");let qt=mo;const Er=n(Zt),Sr=n(qt),Gr=Sr;var Ur=Object.defineProperty,Zr=Object.getOwnPropertyDescriptor,qr=r((p,e,t,o)=>{for(var s=Zr(e,t),i=p.length-1,d;i>=0;i--)(d=p[i])&&(s=d(e,t,s)||s);return s&&Ur(e,t,s),s},"__decorateClass$i");const $o=class $o extends Q{constructor(){super(...arguments),this.specification=new Te,this.$openFile=void 0,this.grid=z.div`
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
    `}get files(){return this.parent.annotations.find(Sn).reverse()}get openFile(){return this.$openFile??this.files[0]}get filePanelStates(){return[Qn,be,Xs]}$Spread(...e){this.$Format(...e);const t=this.grid,o=n(Er),s=n(Rr),i=n(Fr);this.style=({className:d,children:u})=>{const x=this.parent,g=[...x.classes].includes("pa-open");return c(t,{className:`${d??""}${g?" pa-open":""}`.trim(),children:[a("div",{className:"pd-words",children:u}),g?c(m,{children:[a(o,{chapter:x}),a(s,{chapter:x}),a(i,{chapter:x,annotation:be,family:this.filePanelStates})]}):void 0]})}}defines(e){super.defines(e),e.classes.add(this,"pa-spread")}erase(e){super.erase(e),e.classes.revert(this)}};r($o,"$Spread");let T=$o;const ko=class ko extends ${$isAChapter(e){l(e instanceof v,"a spread is a chapter read beside its files, and this is not a chapter")}};r(ko,"SpreadSpecification");let Te=ko;qr([h("a spread is a chapter read beside its files")],Te.prototype,"$isAChapter");n(T);var Yr=Object.defineProperty,Xr=Object.getOwnPropertyDescriptor,Kn=r((p,e,t,o)=>{for(var s=Xr(e,t),i=p.length-1,d;i>=0;i--)(d=p[i])&&(s=d(e,t,s)||s);return s&&Yr(e,t,s),s},"__decorateClass$h");const xo=class xo extends Q{constructor(){super(...arguments),this.specification=new ue,this.style=z.div`
        .pa-coloured { --colour: ${e=>e.$colour}; }
    `}get colour(){return y.copy(this.text).trim()}$Coloured(...e){this.$Format(...e);const t=this.style;this._painted=o=>a(t,{$colour:this.colour,...o})}defines(e){e.classes.add(this,"pa-coloured"),e.containers.add(this,this._painted)}erase(e){e.classes.revert(this),e.containers.revert(this)}};r(xo,"$Coloured");let q=xo;const vo=class vo extends ${$saidOfAChapterOrAParagraph(e){l(e instanceof v||e instanceof f,"coloured is said of a chapter or a paragraph, and this is neither")}$givenItsColour(e){l(/^#[0-9a-f]{6}$/iu.test(e.annotations.expressed(q)?.colour??""),"coloured is given its colour as six hex digits, and this one was given something else")}};r(vo,"ColouredSpecification");let ue=vo;Kn([h("coloured is said of a chapter or a paragraph")],ue.prototype,"$saidOfAChapterOrAParagraph");Kn([h("coloured is given its colour")],ue.prototype,"$givenItsColour");n(q);var Qr=Object.defineProperty,Kr=Object.getOwnPropertyDescriptor,Qs=r((p,e,t,o)=>{for(var s=Kr(e,t),i=p.length-1,d;i>=0;i--)(d=p[i])&&(s=d(e,t,s)||s);return s&&Qr(e,t,s),s},"__decorateClass$g");const yo=class yo extends Q{constructor(){super(...arguments),this.specification=new oe}get identifier(){return I.reference(y.copy(this.text))?.identifier??""}get name(){return I.reference(y.copy(this.text))?.name??""}get entry(){return this.book?.chapterAt(this.identifier)}get drawing(){const e=this.entry?.text.find(f).flatMap(t=>t.text.find(zt))[0];return e===void 0?"":y.copy(e.text).trim()}get colour(){return this.entry?.annotations.expressed(q)?.colour??""}$Keyed(...e){this.$Format(...e);const t=n(Vr);this._layer=o=>c("div",{...o,children:[a(t,{keyed:this}),o.children]})}defines(e){e.classes.add(this,"pa-keyed"),e.containers.add(this,this._layer)}erase(e){e.classes.revert(this),e.containers.revert(this)}};r(yo,"$Keyed");let U=yo;const wo=class wo extends j{constructor(){super(...arguments),this.style=z.span`
        --colour: ${e=>e.$colour};
    `}$Icon(...e){this.$Writing(...e);const t=this.style;this._painted=o=>a(t,{$colour:this.$keyed?.colour??"",...o}),this.containers.replace(this,"span",this._painted)}write(){return a("span",{className:"pd-drawing",role:"img","aria-label":this.$keyed?.name,dangerouslySetInnerHTML:{__html:this.$keyed?.drawing??""}})}$Define(){super.$Define(),this.classes.add(this,"pd-icon")}};r(wo,"$Icon");let Yt=wo;const zo=class zo extends ${$saidOfAChapter(e){l(e instanceof v,"keyed is said of a chapter, and this is not one")}$namesAnEntry(e){const t=e.annotations.expressed(U)?.entry;l(t!==void 0&&t.annotations.expressed(U)?.entry===t,"keyed names an entry of the key, a chapter of this book keyed as itself, and this one names something else")}$entryHoldsItsDrawingAndColour(e){const t=e.annotations.expressed(U)?.entry;t!==void 0&&l(t.text.find(f).flatMap(o=>o.text.find(zt)).length===1&&t.is(q),"an entry of the key holds one drawing and its colour, and this one holds something else")}};r(zo,"KeyedSpecification");let oe=zo;Qs([h("keyed is said of a chapter")],oe.prototype,"$saidOfAChapter");Qs([h("keyed names an entry of the key")],oe.prototype,"$namesAnEntry");Qs([h("an entry of the key holds one drawing and its colour")],oe.prototype,"$entryHoldsItsDrawingAndColour");n(U);const Jr=n(Yt),Vr=Jr;var ei=Object.defineProperty,ti=Object.getOwnPropertyDescriptor,si=r((p,e,t,o)=>{for(var s=ti(e,t),i=p.length-1,d;i>=0;i--)(d=p[i])&&(s=d(e,t,s)||s);return s&&ei(e,t,s),s},"__decorateClass$f");const oi={tsx:"typescript",ts:"typescript",mjs:"javascript",js:"javascript",css:"css",html:"xml",svg:"xml",json:"json",md:"markdown"},ai='<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"><path d="M6 4.5 3.5 8 6 11.5M10 4.5 12.5 8 10 11.5"/></svg>',ce=r(p=>`${p.$identifier}${p.$type}`,"fileNameOf"),ni=r(p=>p===void 0?[]:y.copy(p.text).split(`
`),"fileLinesOf"),Jn=r(p=>p?.chapter?.annotations.expressed(T),"spreadOf"),Oo=class Oo extends f{constructor(){super(...arguments),this.$family=[]}get name(){return this.$file===void 0?"":ce(this.$file)}get language(){return oi[(this.$file?.$type??"").replace(/^\./u,"")]??""}get spread(){return Jn(this.$file)}get chapter(){return this.$file?.chapter??super.chapter}$FileListing(...e){this.$Writing(...e),this.containers.replace(this,"span","div")}container(e){return super.container({onClick:r(()=>this.press(),"onClick"),...e})}press(){if(this.$filePanelState===void 0)return;const e=this.book,t=[e.$is].flat().filter(o=>!this.$family.includes(o));e.$is=[this.$filePanelState,...t]}write(){const e=n(C),t=n(ur);return c(m,{children:[a(e,{children:this.name}),a(t,{identifier:this.$file?.$identifier,type:this.$file?.$type,language:this.language,numbered:!0})]})}$Define(){super.$Define(),this.classes.add(this,"pd-file-listing");const e=n(di);this.annotations.add(this,a(e,{}))}};r(Oo,"$FileListing");let He=Oo;const Do=class Do extends k{constructor(){super(...arguments),this.specification=new We}defines(e){const t=e;t.$file!==void 0&&t.spread?.openFile===t.$file&&e.classes.add(this,"pa-open")}erase(e){e.classes.revert(this)}};r(Do,"$OpenListing");let Xt=Do;const jo=class jo extends ${$isAFileListing(e){l(e instanceof He,"an open listing is a file listing, and this is not one")}};r(jo,"OpenListingSpecification");let We=jo;si([h("an open listing is a file listing")],We.prototype,"$isAFileListing");const Co=class Co extends ge{constructor(){super(...arguments),this.$skeleton=!1,this.style=z.button`
        --colour: ${e=>e.$colour};
    `}get on(){const e=this.$file?.chapter;return e!==void 0&&e===this.book.open&&this.spread?.openFile===this.$file}get name(){return this.$file===void 0?"":ce(this.$file)}get spread(){return Jn(this.$file)}get colour(){return this.$file?.chapter?.annotations.expressed(U)?.colour??""}get lines(){return ni(this.$file)}get chapter(){return this.$file?.chapter??super.chapter}$FileTab(...e){this.$Switch(...e),this.containers.replace(this,"button",this.style)}container(e){return super.container({$colour:this.colour,...e})}press(){const e=this.spread;e!==void 0&&(e.$openFile=this.$file),this.$annotation!==void 0&&super.press()}write(){return c(m,{children:[a("span",{className:"pd-drawing",dangerouslySetInnerHTML:{__html:ai}}),a("span",{className:"pd-tab-name",children:this.name}),this.$skeleton?a("span",{className:"pd-skeleton",children:this.lines.slice(0,14).map((e,t)=>a("i",{style:{width:`${Math.max(12,Math.min(100,e.length*2.2))}%`}},t))}):void 0]})}$Define(){super.$Define(),this.classes.add(this,"pd-file-tab")}};r(Co,"$FileTab");let Qt=Co;const ri=n(He),ii=n(Xt),Ks=n(Qt),di=ii;var pi=Object.defineProperty,ci=Object.getOwnPropertyDescriptor,Js=r((p,e,t,o)=>{for(var s=ci(e,t),i=p.length-1,d;i>=0;i--)(d=p[i])&&(s=d(e,t,s)||s);return s&&pi(e,t,s),s},"__decorateClass$e");const Po=class Po extends k{constructor(){super(...arguments),this.specification=new ae}get date(){return this.text.find(Us)[0]}defines(e){e.classes.add(this,"pa-dated")}erase(e){e.classes.revert(this)}note(){const e=n(this.date);return a(e,{})}};r(Po,"$Dated");let B=Po;const Mo=class Mo extends ${$saidOfAChapter(e){l(e instanceof v,"dated is said of a chapter, and this is not one")}$datedOnce(e){l(e.annotations.containsOne(B),"a chapter is dated once, and this one is dated more than once")}$givenOneDate(e){l(e.annotations.expressed(B)?.text.find(Us).length===1,"a dated chapter is given one date, and this one is given none or more than one")}};r(Mo,"DatedSpecification");let ae=Mo;Js([h("dated is said of a chapter")],ae.prototype,"$saidOfAChapter");Js([h("a chapter is dated once")],ae.prototype,"$datedOnce");Js([h("a dated chapter is given one date")],ae.prototype,"$givenOneDate");n(B);var li=Object.defineProperty,hi=Object.getOwnPropertyDescriptor,fi=r((p,e,t,o)=>{for(var s=hi(e,t),i=p.length-1,d;i>=0;i--)(d=p[i])&&(s=d(e,t,s)||s);return s&&li(e,t,s),s},"__decorateClass$d");const Ao=class Ao extends k{constructor(){super(...arguments),this.specification=new Le}defines(e){e.classes.add(this,"pa-label")}erase(e){e.classes.revert(this)}};r(Ao,"$Label");let Kt=Ao;const No=class No extends ${$saidOfAWord(e){l(e instanceof j,"label is said of a word, and this is not one")}};r(No,"LabelSpecification");let Le=No;fi([h("label is said of a word")],Le.prototype,"$saidOfAWord");const le=n(Kt),Io=class Io extends f{get cover(){return this.$cover??this.book?.cover}write(){const e=this.cover.annotations.expressed(Zs),t=n(C),o=n(le),s=n(w);return c(m,{children:[c(t,{children:[a(o,{}),"by"]}),c(t,{children:[a(s,{children:e.means.identifier}),e.name]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-byline")}};r(Io,"$Byline");let Jt=Io;const To=class To extends f{get cover(){return this.$cover??this.book?.cover}write(){const e=this.cover.annotations.expressed(Gn),t=n(C),o=n(le),s=n(w);return c(m,{children:[c(t,{children:[a(o,{}),"subject"]}),c(t,{children:[a(s,{children:e.means.identifier}),e.name]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-subject-line")}};r(To,"$SubjectLine");let Vt=To;const Ho=class Ho extends f{get cover(){return this.$cover??this.book?.cover}get topics(){return this.cover?.annotations.find(Un)??[]}write(){const e=n(C),t=n(le),o=n(w);return c(m,{children:[c(e,{children:[a(t,{}),"topic"]}),this.topics.map((s,i)=>c(e,{children:[a(o,{children:s.means.identifier}),s.name]},i))]})}$Define(){super.$Define(),this.classes.add(this,"pd-topic-line")}};r(Ho,"$TopicLine");let es=Ho;const gi=n(Jt);n(Vt);const bi=n(es);var ui=Object.defineProperty,mi=Object.getOwnPropertyDescriptor,J=r((p,e,t,o)=>{for(var s=mi(e,t),i=p.length-1,d;i>=0;i--)(d=p[i])&&(s=d(e,t,s)||s);return s&&ui(e,t,s),s},"__decorateClass$c");const Vs=r((p,e)=>{const t=new Set(p.text.find(e));return p.text.find($r).flatMap(o=>[...t.has(o)?[o]:[],...Vs(o,e)])},"within"),Wo=class Wo extends k{constructor(){super(...arguments),this.specification=new Y}get identifier(){return I.reference(y.copy(this.text))?.identifier??""}get name(){return I.reference(y.copy(this.text))?.name??""}get cover(){const e=this.identifier;return this.chapter?.annotations.find(X).map(t=>t.cover).find(t=>t?.mention?.identifier===e)}defines(e){e.classes.add(this,"pa-design")}erase(e){e.classes.revert(this)}};r(Wo,"$Design");let A=Wo;const Lo=class Lo extends k{constructor(){super(...arguments),this.specification=new _e}defines(e){e.classes.add(this,"pa-exhibit")}erase(e){e.classes.revert(this)}};r(Lo,"$Exhibit");let Be=Lo;const Bo=class Bo extends k{constructor(){super(...arguments),this.specification=new Re,this.$number=0,this.span=z.span.attrs({className:"pd-plate"})``}note(){const e=this.span;return c(m,{children:[a(e,{children:String(this.$number).padStart(2,"0")}),a("span",{className:"pd-jacket-mini"})]})}defines(e){e.classes.add(this,"pa-plate")}erase(e){e.classes.revert(this)}};r(Bo,"$Plate");let ts=Bo;const _o=class _o extends Q{constructor(){super(...arguments),this.specification=new Fe,this.themeProvider=!0,this.room=z.div`
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
    `}get chapter(){return this.parent}get design(){return this.chapter.annotations.expressed(A)}get plate(){return this.book.chapters.filter(e=>e.is(A)).indexOf(this.chapter)+1}$Room(...e){this.$Format(...e);const t=this.room;this.style=({className:o,children:s})=>{const i=[...this.chapter.classes].includes("pa-open");return ee(this.design?.cover,c(t,{className:`${o??""} pd-room${i?" pa-open":""}`.trim(),children:[a("span",{className:"pd-plate",children:String(this.plate).padStart(2,"0")}),s]}))}}defines(e){super.defines(e),e.classes.add(this,"pa-room")}erase(e){super.erase(e),e.classes.revert(this)}};r(_o,"$Room");let ss=_o;const Ro=class Ro extends f{get references(){const e=this.book?.means?.identifier??"",t=new Map;for(const o of Vs(this.chapter,j)){if(o.parent===this)continue;const s=o.annotations.expressed(qs)?.identifier;if(s===void 0||s.startsWith(e)||t.has(s))continue;const i=y.copy(o.text);t.set(s,I.reference(i)?.name??i.trim())}return[...t]}write(){const e=n(C),t=n(w);return this.references.map(([o,s],i)=>c(e,{children:[a(t,{children:o}),s,a("span",{className:"pd-where",children:o.replace(/^\/dougs-/u,"").replace(/\/#?/u," · ").replace(/ · $/u,"").replace(/-/gu," ")})]},i))}$Define(){super.$Define(),this.classes.add(this,"pd-built-in")}};r(Ro,"$BuiltIn");let os=Ro;const Fo=class Fo extends ${$isAChapter(e){l(e instanceof v,"a design is a chapter, and this is not one")}$namesABook(e){l((e.annotations.expressed(A)?.identifier??"")!=="","a design names the book it is of, and this one names nothing")}$holdsTheCover(e){l(e.annotations.expressed(A)?.cover!==void 0,"a design holds the cover of the book it is of, as a volume, and this one holds none")}$showsItselfAsBuilt(e){l(e instanceof v&&Vs(e,f).some(t=>t.is(Be)),"a design shows itself as built, in a paragraph said to be the exhibit, and this one shows nothing")}};r(Fo,"DesignSpecification");let Y=Fo;J([h("a design is a chapter")],Y.prototype,"$isAChapter");J([h("a design names the book it is of")],Y.prototype,"$namesABook");J([h("a design holds the cover of the book it is of")],Y.prototype,"$holdsTheCover");J([h("a design shows itself as built")],Y.prototype,"$showsItselfAsBuilt");const Eo=class Eo extends ${$isAParagraphOfADesignHoldingOneImage(e){l(e instanceof f&&e.chapter?.is(A)===!0&&e.text.find(mr).length===1,"an exhibit is a paragraph of a design that holds one image, and this is not one")}};r(Eo,"ExhibitSpecification");let _e=Eo;J([h("an exhibit is a paragraph of a design that holds one image")],_e.prototype,"$isAParagraphOfADesignHoldingOneImage");const So=class So extends ${$saidOfAnEntryLeadingToADesign(e){l(e.is(ie)&&e.annotations.expressed(ie)?.referencedChapter?.is(A)===!0,"a plate is said of an entry that leads to a design, and this is not one")}};r(So,"PlateSpecification");let Re=So;J([h("a plate is said of an entry that leads to a design")],Re.prototype,"$saidOfAnEntryLeadingToADesign");const Go=class Go extends ${$isADesign(e){l(e instanceof v&&e.is(A),"a room is a chapter that is a design, and this is not one")}};r(Go,"RoomSpecification");let Fe=Go;J([h("a room is a chapter that is a design")],Fe.prototype,"$isADesign");n(A);n(Be);n(ts);n(ss);n(os);var $i=Object.defineProperty,ki=Object.getOwnPropertyDescriptor,W=r((p,e,t,o)=>{for(var s=ki(e,t),i=p.length-1,d;i>=0;i--)(d=p[i])&&(s=d(e,t,s)||s);return s&&$i(e,t,s),s},"__decorateClass$b");const ee=r((p,e,t)=>{const o=p?.annotations.expressed(_)?.painted;return o===void 0?e:a(o,{children:e},t)},"painted"),Uo=class Uo extends D{constructor(){super(...arguments),this.specification=new re}get name(){return this.chapter?.title?.name??""}get author(){return this.chapter?.annotations.expressed(Zs)?.name??""}get illustration(){return this.chapter?.text.find(f).find(e=>e.is(me))}get drawing(){const e=this.illustration?.text.find(zt)[0];return e===void 0?"":y.copy(e.text).trim()}get scheme(){return this.chapter?.annotations.expressed(_)}get window(){return this.chapter?.annotations.expressed(ne)}};r(Uo,"$BookshelfCover");let Ee=Uo;const Zo=class Zo extends k{constructor(){super(...arguments),this.specification=new Ze}defines(e){e.classes.add(this,"pa-illustration")}erase(e){e.classes.revert(this)}};r(Zo,"$Illustration");let me=Zo;const qo=class qo extends Q{constructor(){super(...arguments),this.specification=new $e,this.$ground="",this.$band="",this.$bandInk="",this.$foot="",this.$footInk="",this.$ink="",this.style=z.div.attrs({className:"pd-scheme"})`
        ${e=>e.$scheme}
    `}get colours(){return[this.$ground,this.$band,this.$bandInk,this.$foot,this.$footInk,this.$ink]}get declarations(){return`--ground: ${this.$ground}; --band: ${this.$band}; --band-ink: ${this.$bandInk}; --foot: ${this.$foot}; --foot-ink: ${this.$footInk}; --ink: ${this.$ink};`}get painted(){return this._painted}$Scheme(...e){this.$Format(...e);const t=this.style;this._painted=o=>a(t,{$scheme:this.declarations,...o})}defines(e){e.classes.add(this,"pa-scheme"),e.containers.add(this,this._painted)}erase(e){e.classes.revert(this),e.containers.revert(this)}};r(qo,"$Scheme");let _=qo;const Yo=class Yo extends k{constructor(){super(...arguments),this.specification=new ke,this.$x="",this.$y=""}get declarations(){return`--window-x: ${this.$x}px; --window-y: ${this.$y}px;`}};r(Yo,"$Window");let ne=Yo;const Xo=class Xo extends k{constructor(){super(...arguments),this.specification=new xe}get cover(){return this._cover}get jacket(){return this._cover?.annotations.expressed(D)}$Volume(...e){this._cover=e.find(t=>t instanceof v),this.$Annotation(...e.filter(t=>t!==this._cover))}defines(e){e.classes.add(this,"pa-volume")}erase(e){e.classes.revert(this)}};r(Xo,"$Volume");let X=Xo;const Qo=class Qo extends f{get cover(){return this.$cover?.annotations.expressed(D)}$Jacket(...e){this.$Writing(...e),this._painted=t=>{const o=this.cover?.scheme?.painted;return o===void 0?a("div",{...t}):a(o,{...t})},this.containers.add(this,this._painted)}write(){const e=this.cover;if(e===void 0)return;const t=n(C),o=n(le);return c(m,{children:[a(t,{children:e.name}),a("span",{className:"pd-drawing",dangerouslySetInnerHTML:{__html:e.drawing}}),c(t,{children:[a(o,{}),e.author]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-jacket")}};r(Qo,"$Jacket");let as=Qo;const Ko=class Ko extends f{constructor(){super(...arguments),this.unfolded=!1}get filedElsewhere(){return this.$subject!==void 0&&this.$subject!==this.$cover}container(e){return super.container({onMouseOver:r(t=>{t.target instanceof Element&&t.target.closest(".pd-filed")!==null&&this.unfold()},"onMouseOver"),onMouseLeave:r(()=>this.fold(),"onMouseLeave"),...e})}unfold(){this.unfolded=!0}fold(){this.unfolded=!1}write(){const e=this.$cover,t=this.$subject;if(e!==void 0)return c(m,{children:[this.filedElsewhere?ee(t,a("span",{className:"pd-filed",children:this.mark(t)})):void 0,ee(e,a("span",{className:"pd-own",children:this.mark(e)})),c("span",{className:"pd-names",children:[ee(e,a("span",{className:"pd-name",children:this.name(e)})),this.filedElsewhere?ee(t,a("span",{className:"pd-name pd-under",children:this.name(t)})):void 0]})]})}mark(e){const t=n(wi),o=n(w);return a(t,{cover:e,children:a(o,{children:e.mention.identifier})})}name(e){const t=n(C),o=n(w);return c(t,{children:[a(o,{children:e.mention.identifier}),e.title.name]})}$Define(){super.$Define(),this.classes.add(this,"pd-logo");const e=n(zi);this.annotations.add(this,a(e,{}))}};r(Ko,"$Logo");let Se=Ko;const Jo=class Jo extends k{constructor(){super(...arguments),this.specification=new Ge}defines(e){e.unfolded&&e.classes.add(this,"pa-unfolded")}erase(e){e.classes.revert(this)}};r(Jo,"$Unfolded");let ns=Jo;const Vo=class Vo extends ${$saidOfALogo(e){l(e instanceof Se,"unfolded is said of a logo, and this is not one")}};r(Vo,"UnfoldedSpecification");let Ge=Vo;W([h("unfolded is said of a logo")],Ge.prototype,"$saidOfALogo");const xi=r(p=>{const e=p?.annotations.expressed(D);return{drawing:e?.drawing??"",declarations:`${e?.scheme?.declarations??""} ${e?.window?.declarations??""}`}},"markingOf"),ea=class ea extends j{constructor(){super(...arguments),this.style=z.span`
        ${e=>e.$vars}
    `}get cover(){return this.$cover?.annotations.expressed(D)}get marking(){return xi(this.$cover)}$Mark(...e){this.$Writing(...e);const t=this.style;this._painted=o=>a(t,{$vars:this.marking.declarations,...o}),this.containers.add(this,this._painted)}write(){return a("span",{className:"pd-drawing",dangerouslySetInnerHTML:{__html:this.marking.drawing}})}$Define(){super.$Define(),this.classes.add(this,"pd-mark")}};r(ea,"$Mark");let Ue=ea;const ta=class ta extends kr{$carriesItsScheme(e){l(e.is(_),"a bookshelf cover carries its scheme, and this one carries none")}$carriesItsWindow(e){l(e.is(ne),"a bookshelf cover carries its window, and this one carries none")}$carriesItsIllustration(e){l(e instanceof v&&e.text.find(f).some(t=>t.is(me)),"a bookshelf cover carries its illustration, and this one carries none")}};r(ta,"BookshelfCoverSpecification");let re=ta;W([h("a bookshelf cover carries its scheme")],re.prototype,"$carriesItsScheme");W([h("a bookshelf cover carries its window")],re.prototype,"$carriesItsWindow");W([h("a bookshelf cover carries its illustration")],re.prototype,"$carriesItsIllustration");const sa=class sa extends ${$saidOfADrawing(e){l(e instanceof f&&e.chapter?.is(D)===!0&&e.text.find(zt).length===1,"an illustration is a paragraph of a cover that holds one drawing, and this is not one")}};r(sa,"IllustrationSpecification");let Ze=sa;W([h("an illustration is a paragraph of a cover that holds one drawing")],Ze.prototype,"$saidOfADrawing");const oa=class oa extends ${$isACover(e){l(e instanceof v&&e.is(D),"a cover has a scheme, and this is not a cover")}$givenItsColours(e){const t=e.annotations.expressed(_)?.colours??[];l(t.every(o=>/^#[0-9a-f]{6}$/iu.test(o)),"a scheme is given its six colours as six hex digits each — the ground, the band and its ink, the foot and its ink, and the ink of the drawing — and this one was given something else")}};r(oa,"SchemeSpecification");let $e=oa;W([h("a cover has a scheme")],$e.prototype,"$isACover");W([h("a scheme is given its six colours")],$e.prototype,"$givenItsColours");const aa=class aa extends ${$isACover(e){l(e instanceof v&&e.is(D),"a cover has a window, and this is not a cover")}$givenItsPlace(e){const t=e.annotations.expressed(ne);l(/^-?\d+$/u.test(t?.$x??"")&&/^-?\d+$/u.test(t?.$y??""),"a window is given where it stands on the drawing, two whole numbers, and this one was given something else")}};r(aa,"WindowSpecification");let ke=aa;W([h("a cover has a window")],ke.prototype,"$isACover");W([h("a window is given where it stands on the drawing")],ke.prototype,"$givenItsPlace");const na=class na extends ${$saidOfAChapterStandingForABook(e){l(e instanceof v&&(e.is(Tn)||e.is(D)||e.is(A)),"a volume is a chapter that stands for another book, a synopsis of it, a cover filed under it or a design of it, and this is none")}$holdsTheCover(e){const t=[e.annotations.expressed(Tn)?.means?.identifier,e.annotations.expressed(Gn)?.means?.identifier,e.annotations.expressed(Zs)?.means?.identifier,e.annotations.expressed(A)?.identifier,...[...e.annotations].map(o=>o.means?.identifier)];l(e.annotations.find(X).every(o=>o.cover?.is(D)===!0&&t.includes(o.cover.mention?.identifier)),"a volume holds the cover of a book its chapter stands for or names, the book a synopsis or a design is of, the subject or author a cover is filed under or a book another line of the cover names, and one here holds something else")}};r(na,"VolumeSpecification");let xe=na;W([h("a volume is a chapter that stands for another book")],xe.prototype,"$saidOfAChapterStandingForABook");W([h("a volume holds the cover of a book its chapter stands for or names")],xe.prototype,"$holdsTheCover");const Vn=n(Ee),It=n(me),Tt=n(_),Ht=n(ne),ve=n(X);n(as);const vi=n(Se),yi=n(ns),er=n(Ue),wi=er,zi=yi;var Oi=Object.defineProperty,Di=Object.getOwnPropertyDescriptor,he=r((p,e,t,o)=>{for(var s=Di(e,t),i=p.length-1,d;i>=0;i--)(d=p[i])&&(s=d(e,t,s)||s);return s&&Oi(e,t,s),s},"__decorateClass$a");const tr='<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3.5 10.5 8 6 12.5"/></svg>',ji='<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linejoin="round" stroke-linecap="round"><rect class="ground" x="0.75" y="0.75" width="14.5" height="14.5"/><path d="M3.5 5.5h3l1.5 1.5h4.5v5h-9z"/></svg>',ra=class ra extends Q{constructor(){super(...arguments),this.specification=new Ke,this.style=z.div`
        ${e=>e.$schemeDeclarations===void 0?"":`.pa-entry { ${e.$schemeDeclarations} }`}
    `}get place(){return N(this.parent).identifier}get referencedChapter(){return this.book.chapterAt(this.place)}get cover(){return this.referencedChapter?.annotations.expressed(X)?.cover??this.book.coverOf(this.place)}get schemeDeclarations(){const e=this.cover?.annotations.expressed(_);if(e!==void 0)return e.declarations;const t=this.referencedChapter?.annotations.expressed(q)?.colour;return t===void 0?void 0:`--colour: ${t};`}$Entry(...e){this.$Format(...e);const t=this.style;this._painted=o=>a(t,{$schemeDeclarations:this.schemeDeclarations,...o})}defines(e){e.classes.add(this,"pa-entry"),e.containers.add(this,this._painted),(this.place===this.book?.$bookmark||this.place===this.book.open?.mention?.identifier)&&e.classes.add(this,"pa-open")}erase(e){e.classes.revert(this),e.containers.revert(this)}};r(ra,"$Entry");let ie=ra;const ia=class ia extends k{constructor(){super(...arguments),this.specification=new Qe}defines(e){e.classes.add(this,"pa-appendix")}erase(e){e.classes.revert(this)}};r(ia,"$Appendix");let ye=ia;const da=class da extends br{constructor(){super(...arguments),this.$word=""}};r(da,"$Sought");let rs=da;const pa=class pa extends k{constructor(){super(...arguments),this.specification=new Xe,this.$folded=!1,this.$counted=!1,this.$dated=!1,this.$searched=!1}get word(){return Bn.$word}get sections(){return this.chapter.text.find(M)}get entries(){const e=r(t=>!t.is(xr)&&N(t)!==void 0,"listed");return[...this.chapter.text].flatMap(t=>t instanceof M?t.text.find(f):t instanceof f?[t]:[]).filter(e)}get found(){return this.book.found(this.word)}chapterOf(e){const t=N(e)?.identifier;return t===void 0?void 0:this.book.chapterAt(t)}search(e){Bn.$word=e;const t=this.chapter,o=e.trim()!=="";if(t!==void 0&&o!==t.is(qe)){const s=[t.$is].flat().filter(i=>i!==void 0&&i!==_n);t.$is=o?[_n,...s]:s}this.book.sought(e.trim())}$Bound(){const e=n(Fi),t=n(ar),o=n(Ks),s=this.book;for(const g of this.entries){g.annotations.add(this,a(e,{}));const O=s.chapterAt(N(g).identifier)?.annotations.expressed(T);if(O===void 0)continue;const fe=O.files;fe.length===0&&!this.sections.some(S=>S.text.find(f).includes(g))||g.text.add(this,a(t,{foldedWriting:fe.length===0?void 0:g,annotation:us}),...fe.map(S=>a(o,{file:S,annotation:be,family:O.filePanelStates},ce(S))))}const i=n(or),d=n(Gi),u=new Set(s.entries),x=r(g=>{const O=this.chapterOf(g);return O!==void 0&&u.has(O)},"leadsToAnEntry");if(this.$dated)for(const g of this.entries){const O=this.chapterOf(g);O===void 0||!u.has(O)||!O.is(B)||g.text.add(this,a(i,{entry:O}))}for(const g of this.sections){this.$folded&&(g.$is=[us]);const O=g.canonical;this.$counted&&O!==void 0&&g.text.find(f).some(x)&&O.text.add(this,a(d,{section:g}))}super.$Bound()}};r(pa,"$Index");let H=pa;const ca=class ca extends k{constructor(){super(...arguments),this.specification=new Ye}defines(e){e.classes.add(this,"pa-searching")}erase(e){e.classes.revert(this)}};r(ca,"$Searching");let qe=ca;const la=class la extends ${$saidOfATable(e){l(e.is(K),"searching is said of a table of contents, the index's chapter, and this is not one")}};r(la,"SearchingSpecification");let Ye=la;he([h("searching is said of a table of contents")],Ye.prototype,"$saidOfATable");const ha=class ha extends f{get index(){return this.book?.table?.annotations.expressed(H)}$Search(...e){this.$Writing(...e),this.containers.replace(this,"span","div")}write(){const e=this.index,t=this.book;if(!(e===void 0||t===void 0))return c(m,{children:[a("span",{className:"pd-search-mark","aria-hidden":"true",children:"⌕"}),a("input",{className:"pd-search-word",type:"search",value:e.word,placeholder:t.searchHint,"aria-label":"search",onInput:r(o=>e.search(o.target.value),"onInput")})]})}$Define(){super.$Define(),this.classes.add(this,"pd-search")}};r(ha,"$Search");let is=ha;const fa=class fa extends f{get index(){return this.book?.table?.annotations.expressed(H)}$Results(...e){this.$Writing(...e),this.containers.replace(this,"span","div")}write(){const e=this.index,t=this.book;if(e===void 0||t===void 0)return;const o=e.word.trim();if(o==="")return;const s=t.found(o);return c(m,{children:[a("span",{className:"pd-results-count",children:t.countOfFound(s,o)}),s.map((i,d)=>this.result(i,d))]})}result(e,t){const o=n(Ei);return a(o,{chapter:this.chapter,hit:e},this.book.placeOf(e)??t)}$Define(){super.$Define(),this.classes.add(this,"pd-results")}};r(fa,"$Results");let ds=fa;const ga=class ga extends j{write(){}$Define(){super.$Define(),this.classes.add(this,"pd-entry-open")}};r(ga,"$EntryOpen");let ps=ga;const ba=class ba extends f{get index(){return this.book?.table?.annotations.expressed(H)}$Result(...e){this.$Writing(...e),this.containers.replace(this,"span","div")}write(){const e=this.book,t=this.$hit,o=this.index;if(e===void 0||t===void 0||o===void 0)return;const s=o.word.trim(),i=e.wordsOf(t),d=e.placeOf(t),u=n(w),x=n(or),g=n(this.open());return c(m,{children:[a("span",{className:"pd-result-title",children:Ln(i.title,s)}),t instanceof v&&t.is(B)?a(x,{entry:t}):void 0,a("span",{className:"pd-result-synopsis",children:Ln(Ci(i.text,s),s)}),d===void 0?void 0:a(g,{entry:t,children:a(u,{children:d})})]})}open(){return Si}$Define(){super.$Define(),this.classes.add(this,"pd-result")}};r(ba,"$Result");let cs=ba;const Ci=r((p,e)=>{if(p.length<=190)return p;const t=p.toLowerCase().indexOf(e.toLowerCase());if(t<150)return`${p.slice(0,187)}…`;const o=p.lastIndexOf(" ",t-90)+1;return`…${p.slice(o,o+186)}…`},"clipped"),Ln=r((p,e)=>{if(e==="")return p;const t=p.toLowerCase(),o=e.toLowerCase(),s=[];let i=0;for(let d=t.indexOf(o);d!==-1;d=t.indexOf(o,i))s.push(p.slice(i,d),a("mark",{children:p.slice(d,d+e.length)},d)),i=d+e.length;return s.push(p.slice(i)),s},"marked"),ua=class ua extends j{write(){const[e,t,o]=(this.$entry?.annotations.expressed(B)?.date?.date??"").split("-");if(!(e===void 0||t===void 0||o===void 0))return new Date(Date.UTC(Number(e),Number(t)-1,Number(o.slice(0,2)))).toLocaleString("en-GB",{day:"numeric",month:"short",timeZone:"UTC"})}$Define(){super.$Define(),this.classes.add(this,"pd-entry-day")}};r(ua,"$EntryDay");let ls=ua;const ma=class ma extends j{write(){return String(this.$section?.text.find(f).filter(e=>N(e)!==void 0).length??0)}$Define(){super.$Define(),this.classes.add(this,"pd-section-count")}};r(ma,"$SectionCount");let hs=ma;const $a=class $a extends ${$isATableOfContents(e){l(e.is(K),"an index is a table of contents, and this chapter is not one")}};r($a,"IndexSpecification");let Xe=$a;he([h("an index is a table of contents")],Xe.prototype,"$isATableOfContents");const ka=class ka extends ${$isASectionOfTheTable(e){l(e instanceof M&&e.chapter?.is(K)===!0,"the appendix is a section of the table of contents, and this is not one")}};r(ka,"AppendixSpecification");let Qe=ka;he([h("the appendix is a section of the table of contents")],Qe.prototype,"$isASectionOfTheTable");const xa=class xa extends ${$isARowThatLeadsSomewhere(e){l(e instanceof f&&N(e)!==void 0,"an entry is a row that leads somewhere, and this is not one")}};r(xa,"EntrySpecification");let Ke=xa;he([h("an entry is a row that leads somewhere")],Ke.prototype,"$isARowThatLeadsSomewhere");const va=class va extends k{constructor(){super(...arguments),this.specification=new Ve}defines(e){e.classes.add(this,"pa-folded")}erase(e){e.classes.revert(this)}};r(va,"$Folded");let fs=va;const ya=class ya extends te{get on(){return this.$foldedWriting!==void 0&&[this.$foldedWriting.$is].flat().includes(this.$annotation)}container(e){return super.container({...e,disabled:this.$foldedWriting===void 0,onClick:r(t=>{t.preventDefault(),this.press()},"onClick")})}press(){const e=this.$foldedWriting;if(e===void 0)return;const t=[e.$is].flat();e.$is=this.on?t.filter(o=>o!==this.$annotation):[this.$annotation,...t]}write(){return a("span",{className:"pd-drawing",dangerouslySetInnerHTML:{__html:tr}})}$Define(){super.$Define(),this.classes.add(this,"pd-fold-chevron")}};r(ya,"$FoldChevron");let gs=ya;const wa=class wa extends Q{constructor(){super(...arguments),this.specification=new et,this.tree=z.div`
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
    `}get section(){return this.parent}get firstPlace(){return this.section.text.find(f).map(e=>N(e)).find(e=>e!==void 0)?.identifier}get part(){const e=this.firstPlace;return e===void 0?void 0:this.book.chapterAt(e)?.part}get open(){const e=this.book,t=e.open,o=e.$bookmark,s=this.section.mention?.identifier;return o!==void 0&&o.includes("#")&&this.section.text.find(f).some(d=>N(d)?.identifier===o)||t!==void 0&&t.part!==void 0&&t.part.name===this.part?.name||s!==void 0&&e.placeWithin(s)===o}$TreeFolder(...e){this.$Format(...e);const t=this.tree,o=n(ar),s=n(C),i=n(w);this.style=({className:d,children:u})=>{const x=this.firstPlace,g=[...this.section.classes].includes("pa-open"),O=this.book.open!==void 0,fe=this.chapter?.annotations.expressed(H)?.$folded===!0&&!(g&&O),S=a("span",{className:"pd-drawing pd-tree-folder-mark",dangerouslySetInnerHTML:{__html:ji}});return c(t,{className:`${d??""} pd-tree-folder${g?" pa-open":""}${fe?" pa-foldable":""}`.trim(),children:[a(o,{foldedWriting:this.section,annotation:us}),x===void 0?S:c(s,{children:[a(i,{children:x}),S]}),u]})}}defines(e){super.defines(e),e.classes.add(this,"pa-tree-folder"),this.open&&e.classes.add(this,"pa-open")}erase(e){super.erase(e),e.classes.revert(this)}};r(wa,"$TreeFolder");let Je=wa;const za=class za extends ${$saidOfASectionOrAnEntry(e){l(e instanceof M&&e.chapter?.is(K)===!0||e.is(ie),"folded is said of a section of a table of contents or of an entry, and this is neither")}};r(za,"FoldedSpecification");let Ve=za;he([h("folded is said of a section of a table of contents or of an entry")],Ve.prototype,"$saidOfASectionOrAnEntry");const Oa=class Oa extends ${$isASectionOfTheTable(e){l(e instanceof M&&e.chapter?.is(K)===!0,"a tree folder is a section of the table of contents, and this is not one")}};r(Oa,"TreeFolderSpecification");let et=Oa;he([h("a tree folder is a section of the table of contents")],et.prototype,"$isASectionOfTheTable");const Da=class Da extends f{get cover(){return this.$cover??this.book?.cover}write(){const e=this.cover,t=n(C),o=n(w);return c(t,{children:[a(o,{children:e.mention.identifier}),a("span",{className:"pd-drawing",dangerouslySetInnerHTML:{__html:tr}}),e.title.name]})}$Define(){super.$Define(),this.classes.add(this,"pd-tree-root")}};r(Da,"$TreeRoot");let bs=Da;const N=r(p=>p.annotations.expressed(Hn)??p.text.find(j).map(e=>e.annotations.expressed(Hn)).find(e=>e!==void 0),"contentOf"),Pi=n(ie),cp=n(H),Mi=n(qe),Ai=n(is),Ni=n(ds),Ii=n(cs),Ti=n(ps),Hi=n(ls),Wi=n(rs),Bn=n(a(Wi,{})),Li=n(hs),lp=n(ye),Bi=n(fs),_i=n(gs),sr=n(Je),Ri=n(bs),Fi=Pi,_n=Mi,Ei=Ii,Si=Ti,or=Hi,Gi=Li,us=Bi,ar=_i,ja=class ja extends vr{constructor(){super(...arguments),this.font="'Inter', system-ui, sans-serif",this.prose="'Inter', system-ui, sans-serif",this.mono="'JetBrains Mono', ui-monospace, monospace",this.size="0.875rem",this.leading="1.6",this.measure="44rem",this.spreadColumn="15.5rem",this.space="1.5rem",this.holdsColumn="240px",this.barHeight="50px",this.beat="320ms",this.narrow="48rem",this.phoneWidth="390px",this.colour="#4e9eb9",this.accent="#166178",this.bar="#0c1b1f",this.barInk="#ffffff",this.barDim="#a9bcc1",this.barOn="rgba(255, 255, 255, 0.11)",this.barLine="#1d3339",this.mark="#c8f4fb",this.side="#f8f9fb",this.sideInk="#10252c",this.sideDim="#727d8c",this.sideOn="#ffffff",this.sideLine="#e4e9f2",this.night="#0c1b1f",this.deep="#14323c",this.blue="#166178",this.sea="#4e9eb9",this.sky="#8fc8dc",this.opal="#c8f4fb",this.pale="#e3f5fa",this.mist="#f1f7f9",this.white="#ffffff",this.ink="#10252c",this.soft="#727d8c",this.line="#e4e9f2",this.me="#e8590c",this.wash="linear-gradient(105deg, #e2f6fb 0%, #ecf0fd 52%, #fae9f4 100%)",this.serif="'Source Serif 4', Georgia, serif",this.between="'Source Sans 3', 'Inter', system-ui, sans-serif",this.bookPaper="#fbf9f3",this.bookInk="#29251d",this.heading="#10252c",this.capital="#166178",this.lit="#166178",this.faint="#9ea8b5",this.paper="#ffffff",this.panel="#f1f7f9",this.rule="#e4e9f2",this.edge="transparent",this.tint="rgba(11, 11, 11, 0.05)",this.dusk="#14323c",this.glow="#cfe6e3",this.dim="#4f7672",this.keyword="#8ad7ff",this.string="#ffd48a",this.type="#9be3d6",this.comment="#5f8a86",this.haze="#a9bcc1",this.glass="rgba(255, 255, 255, 0.62)",this.binding="linear-gradient(160deg, #16303a, #0c1b1f)",this.spine="inset 5px 0 0 rgba(0, 0, 0, 0.14), inset 6px 0 0 rgba(255, 255, 255, 0.12), 0 10px 20px -10px rgba(0, 0, 0, 0.45)",this.shadow="0 0.75rem 1.4rem -0.9rem rgba(12, 27, 31, 0.55)",this.volume="11.5rem",this.cover="8.25rem",this.card="18rem",this.barLight="#ffffff",this.barMid="#f1f7f9",this.barDeep="#f5f7fa",this.barShadow="none",this.sideLight="#ffffff",this.sideDeep="#f5f7fa",this.codeGround="#f1f7f9",this.hairline="1px",this.stroke="2px",this.rise="-1px",this.gloss="none",this.ring="0 0 0 2px #c8f4fb",this.decisionShadow="none",this.photo="7rem",this.radius="0.375rem",this.barTint="#ffffff",this.skyInk="#166178",this.lift="inset 5px 0 0 rgba(0, 0, 0, 0.14), inset 6px 0 0 rgba(255, 255, 255, 0.12), 0 14px 24px -12px rgba(0, 0, 0, 0.5)",this.openSpine="inset 7px 0 0 rgba(0, 0, 0, 0.14), inset 8px 0 0 rgba(255, 255, 255, 0.12), 0 12px 22px -14px rgba(0, 0, 0, 0.5)",this.sans="'Inter', system-ui, sans-serif",this.muted="#516770",this.bubble="rgba(16, 37, 44, 0.05)",this.shade="rgba(16, 37, 44, 0.03)",this.pill="#166178",this.column="48rem",this.style=z.div`${this.parts()}`}parts(){return[this.page(),this.writing(),this.links(),this.figures(),this.listings(),this.switches(),this.turns(),this.illustrations(),this.marks(),this.library(),this.head(),this.holds(),this.context(),this.tones()]}page(){return b`
            font-family: ${({theme:e})=>e.font};
            font-size: ${({theme:e})=>e.size};
            line-height: ${({theme:e})=>e.leading};
            color: ${({theme:e})=>e.ink};
            background: ${({theme:e})=>e.paper};
            min-height: 100vh;
        `}writing(){return b`
            .pd-pages { font-family: ${({theme:e})=>e.prose}; }
            .pd-chapter, .pd-section, .pd-paragraph { margin-block: ${({theme:e})=>e.space}; }
            .pd-chapter { max-width: ${({theme:e})=>e.measure}; }
        `}links(){return b`
            .pa-reference { color: ${({theme:e})=>e.accent}; }
            .pa-reference.pa-self-reference { color: inherit; text-decoration: none; }
        `}figures(){return b`
            .pd-image img { display: block; max-width: 100%; height: auto; }
            .pa-phone .pd-image img { max-width: min(100%, ${({theme:e})=>e.phoneWidth}); }
            .pd-code { font-family: ${({theme:e})=>e.mono}; overflow-x: auto; }
        `}listings(){return b`
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
        `}switches(){return b`
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
        `}illustrations(){return b`
            .pd-illustration { fill: none; stroke: var(--ink); stroke-width: 1.7; stroke-linecap: round; stroke-linejoin: round; }
            .pd-illustration .fill { fill: var(--foot); stroke: var(--ink); }
            .pd-illustration .light { fill: ${({theme:e})=>e.white}; stroke: none; }
            .pd-drawing { display: grid; place-items: center; min-height: 0; }
        `}marks(){return b`
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
        `}library(){return b`
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
        `}head(){return b`
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
        `}holds(){return b`
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
        `}context(){return b`
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
        `}tones(){return b`
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
        `}turns(){return b`
            .pd-paragraph.pd-turn {
                display: flex;
                justify-content: space-between;
                gap: ${({theme:e})=>e.space};
                font-size: calc(0.786 * ${({theme:e})=>e.size});
            }
            .pd-turn .pa-reference { font-weight: 500; text-decoration: none; }
            .pd-turn .pd-count { color: ${({theme:e})=>e.faint}; }
        `}};r(ja,"$LibraryBookTheme");let tt=ja;const Ui=n(tt);var Zi=Object.defineProperty,qi=Object.getOwnPropertyDescriptor,Yi=r((p,e,t,o)=>{for(var s=qi(e,t),i=p.length-1,d;i>=0;i--)(d=p[i])&&(s=d(e,t,s)||s);return s&&Zi(e,t,s),s},"__decorateClass$9");const yt=class yt extends yr{constructor(){super(...arguments),this.specification=new st,this.themeProvider=!0,this.style=z.div`
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
    `}get rules(){return this.parts().flat(1/0).filter(e=>typeof e=="string").join("")}get pages(){return this.book.pages}get open(){const e=this.book;return e.open??e.synopsis}$Bound(){const e=this.style,t=this.book;this.style=o=>a(e,{$at:t.means?.identifier,$scheme:t.cover?.annotations.expressed(_)?.declarations,...o}),super.$Bound()}defines(e){for(const o of e.annotations.after(this))o instanceof yt&&e.annotations.express(o,!1);super.defines(e),e.classes.add(this,"pa-layout");const t=this.book.open;t!==void 0&&e.classes.add(this,"pa-turned"),t?.is(T)&&e.classes.add(this,"pa-manual")}erase(e){super.erase(e),e.classes.revert(this)}parts(){return[this.paging(),this.regions(),this.areas(),this.phone()]}paging(){return b`
            .pa-page:not(.pa-open) { display: none; }
        `}regions(){return b`
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
        `}areas(){return b`
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
        `}phone(){return b`
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
        `}};r(yt,"$Layout");let we=yt;const Ca=class Ca extends L{$placesTheSideAndNeverDressesIt(e){for(const t of e.annotations.find(we)){const o=(t.rules.match(/[^{};]*\.pd-holds\s+[^\s{},][^{};]*\{/gu)??[]).map(s=>s.trim());l(o.length===0,`a layout places the side and never dresses it, what stands in the side being the index's and the folder's, and this one says "${o[0]}"`)}}};r(Ca,"LayoutSpecification");let st=Ca;Yi([h("a layout places the side and never dresses it")],st.prototype,"$placesTheSideAndNeverDressesIt");const nr=n(we),wt=class wt extends k{constructor(){super(...arguments),this.specification=new L}defines(e){for(const t of e.annotations.after(this))t instanceof wt&&e.annotations.express(t,!1);e.classes.add(this,"pa-tone")}erase(e){e.classes.revert(this)}};r(wt,"$Tone");let de=wt;const Pa=class Pa extends de{defines(e){super.defines(e),e.classes.add(this,"pa-dark")}};r(Pa,"$Dark");let ms=Pa;const Ma=class Ma extends de{defines(e){super.defines(e),e.classes.add(this,"pa-light")}};r(Ma,"$Light");let $s=Ma;const Aa=class Aa extends de{defines(e){super.defines(e),e.classes.add(this,"pa-white-over-black")}};r(Aa,"$WhiteOverBlack");let ks=Aa;const Wt=n(de),rr=n(ms),eo=n($s),Xi=n(ks);var Qi=Object.defineProperty,Ki=Object.getOwnPropertyDescriptor,Ji=r((p,e,t,o)=>{for(var s=Ki(e,t),i=p.length-1,d;i>=0;i--)(d=p[i])&&(s=d(e,t,s)||s);return s&&Qi(e,t,s),s},"__decorateClass$8");const Na=class Na extends j{write(){const e=this.book.body;return`${e.indexOf(this.chapter)+1} of ${e.length}`}$Define(){super.$Define(),this.classes.add(this,"pd-count")}};r(Na,"$Count");let xs=Na;const Ia=class Ia extends k{constructor(){super(...arguments),this.specification=new ze}defines(e){e.classes.add(this,"pa-before")}erase(e){e.classes.revert(this)}};r(Ia,"$Before");let vs=Ia;const Ta=class Ta extends k{constructor(){super(...arguments),this.specification=new ze}defines(e){e.classes.add(this,"pa-after")}erase(e){e.classes.revert(this)}};r(Ta,"$After");let ys=Ta;const Ha=class Ha extends ${$saidOfAWordOfATurn(e){l(e instanceof j&&e.parent instanceof ot,"this is said of a word of a turn, and here it is said of something else")}};r(Ha,"OfATurnSpecification");let ze=Ha;Ji([h("this is said of a word of a turn")],ze.prototype,"$saidOfAWordOfATurn");const Vi=n(xs),ed=n(vs),td=n(ys),Wa=class Wa extends f{get before(){const e=this.book.body;return e[e.indexOf(this.chapter)-1]??this.chapter}get after(){const e=this.book.body;return e[e.indexOf(this.chapter)+1]??this.chapter}write(){const e=n(C),t=n(Vi),o=n(ed),s=n(td),i=n(this.before===this.chapter?Wn:w),d=n(this.after===this.chapter?Wn:w);return c(m,{children:[c(e,{children:[a(o,{}),a(i,{children:this.before.mention.identifier}),"← ",this.before.title.name]}),a(t,{}),c(e,{children:[a(s,{}),a(d,{children:this.after.mention.identifier}),this.after.title.name," →"]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-turn")}};r(Wa,"$Turn");let ot=Wa;const sd=n(ot);var od=Object.defineProperty,ad=Object.getOwnPropertyDescriptor,V=r((p,e,t,o)=>{for(var s=o>1?void 0:o?ad(e,t):e,i=p.length-1,d;i>=0;i--)(d=p[i])&&(s=(o?d(e,t,s):d(s))||s);return o&&s&&od(e,t,s),s},"__decorateClass$7");const La=class La extends En{constructor(){super(...arguments),this.specification=new R}get chapters(){return this.text.find(v).filter(e=>[...e.classes].includes("pd-canonical"))}get laidOutChapters(){return[this.cover,this.synopsis,this.table,...this.chapters]}get pages(){return[this.synopsis,...this.chapters].filter(e=>e!==void 0)}get body(){if(this._body===void 0){const e=this.appendix;this._body=this.chapters.filter(t=>!e.includes(t))}return this._body}get entries(){return this.body}get appendix(){const e=this.table;if(e===void 0)return[];const t=e.text.find(M).filter(o=>o.is(ye)).flatMap(o=>o.text.find(f).map(s=>N(s)?.identifier));return this.chapters.filter(o=>t.includes(o.mention?.identifier??""))}get open(){return this.$bookmark===void 0?void 0:this.chapterAt(this.$bookmark)}get tones(){return[rr,eo,Xi]}get topics(){return this.cover?.annotations.find(Un)??[]}get subjectCover(){return this.coverOf(this.subject?.means?.identifier)}get searchHint(){return"a word"}wordsOf(e){const t=(this._words??=new Map).get(e);if(t!==void 0)return t;const o=e instanceof v?e.title?.name??"":"",s=e.text.find(f).filter(d=>![...d.classes].includes("pa-caption")).map(d=>y.copy(d.text).replace(/\s+/gu," ").trim()).join(" "),i={title:o,text:s,lower:`${o} ${s}`.toLowerCase()};return this._words.set(e,i),i}found(e){const t=e.trim().toLowerCase();if(t==="")return[];const o=this.table?.annotations.expressed(H);return o===void 0?[]:o.entries.map(s=>o.chapterOf(s)).filter(s=>s!==void 0&&this.wordsOf(s).lower.includes(t))}countOfFound(e,t){return c(m,{children:[a("b",{children:e.length})," ",e.length===1?"entry says":"entries say"," “",t,"”"]})}placeOf(e){return e instanceof v?e.mention?.identifier:void 0}sought(e){}write(){return c(m,{children:[a("div",{className:"pd-library",children:this.library()}),a("div",{className:"pd-me",children:this.me()}),a("div",{className:"pd-holds",children:this.holds()}),a("div",{className:"pd-head",children:this.head()}),c("div",{className:"pd-pages",children:[this.aboveThePages(),this.pages.map((e,t)=>{const o=n(e);return a(o,{},t)}),this.belowThePages()]})]})}library(){if(this._logo===void 0)return;const e=n(this._logo);return a(e,{})}me(){const e=n(er),t=n(w),o=n(bi),s=this.coverOf(this.author?.means?.identifier);return c(m,{children:[this.byline(),s===void 0?void 0:this.painted(s,a(e,{cover:s,children:a(t,{children:s.mention.identifier})})),this.topics.length===0?void 0:a(o,{cover:this.cover})]})}painted(e,t,o){return ee(e,t,o)}holds(){const e=n(this.table);return a(e,{})}head(){const e=n(this.cover);return c(m,{children:[a(e,{}),a("div",{className:"pd-switches",children:this.switches()})]})}aboveThePages(){}belowThePages(){}chapterAt(e){return(this._chapterByPlace??this.chapterByPlace()).get(e)}chapterByPlace(){const e=new Map;for(const t of this.chapters)for(const o of this.sections(t))o.mention!==void 0&&!e.has(o.mention.identifier)&&e.set(o.mention.identifier,t);for(const t of this.chapters)t.mention!==void 0&&e.set(t.mention.identifier,t);for(const t of this.entries)t.mention!==void 0&&!e.has(t.mention.identifier)&&e.set(t.mention.identifier,t);return e}placeWithin(e){return e.startsWith("#")?`${this.means?.identifier??""}${e}`:e}coverOf(e){if(e!==void 0)return this.means?.identifier===e?this.cover:this.cover?.annotations.find(X).map(t=>t.cover).find(t=>t?.mention?.identifier===e)}byline(){const e=n(gi);return a(e,{chapter:this.cover})}root(){const e=n(Ri);return a(e,{cover:this.cover})}switches(){}sections(e){return e.text.find(M).flatMap(t=>[t,...this.sections(t)])}sectionOf(e){const t=this.table;return t===void 0?void 0:this.sections(t).find(o=>o.canonical?.name===e.name)}turn(){this.bookmark!==this.cover&&super.turn()}$Define(){super.$Define();const e=n(nr),t=n(Wt);this.annotations.add(this,a(e,{}),a(t,{}))}$Bound(){this._chapterByPlace=this.chapterByPlace();const e=n(sr),t=this.table?.annotations.expressed(K);for(const i of t?.parts??[]){const d=this.sectionOf(i);d===void 0||d.is(Je)||!i.chapters.some(u=>u.is(T))||d.annotations.add(this,a(e,{}))}const o=this.root();o!==void 0&&this.table?.text.add(this,o);const s=n(vi);this._logo=wr.chemical(a(s,{cover:this.cover,subject:this.subjectCover}),this),this.turns(),super.$Bound()}turns(){const e=n(sd);for(const t of this.body)t.text.add(this,a(e,{}))}};r(La,"$LibraryBook");let E=La;V([Gs()],E.prototype,"_chapterByPlace",2);V([Gs()],E.prototype,"_body",2);V([Gs()],E.prototype,"_words",2);const Ba=class Ba extends zr{$holdsOnlyChapters(e){l([...e.text].every(t=>t instanceof v),"a book of this library holds only chapters, and this one holds something else")}$placesEveryChapter(e){l(e.text.find(v).every(t=>e.laidOutChapters.includes(t)),"a book of this library has a place for every chapter it holds, and this one holds a chapter it places nowhere")}$onlyAChapterAppends(e){l(e.text.find(v).every(t=>e.chapters.includes(t)||!t.is(Sn)),"only an ordinary chapter files a file, and here a cover, a synopsis or a table of contents files one")}$listsEachManualPart(e){const o=(e.table?.annotations.expressed(K)?.parts??[]).find(s=>s.chapters.some(i=>i.is(T))&&e.sectionOf(s)===void 0);l(o===void 0,`a part read as a manual is listed under a section headed with its name, and "${o?.name}" has none`)}};r(Ba,"LibraryBookSpecification");let R=Ba;V([h("a book of this library holds only chapters")],R.prototype,"$holdsOnlyChapters",1);V([h("a book of this library has a place for every chapter it holds")],R.prototype,"$placesEveryChapter",1);V([h("only an ordinary chapter files a file")],R.prototype,"$onlyAChapterAppends",1);V([h("a part read as a manual is listed under a section headed with its name")],R.prototype,"$listsEachManualPart",1);const ir=n(E);n(ir,Ys)(Ui);n(ir,Wt)(rr);const _a=class _a extends tt{constructor(){super(...arguments),this.prose="'Source Serif 4', Georgia, serif",this.ink="#343c4a",this.heading="#1a1f36",this.soft="#727d8c",this.faint="#9ea8b5",this.line="#e4e9f2",this.paper="#ffffff",this.side="#f8f9fb",this.holdsColumn="240px",this.barHeight="52px",this.shadow="0 1px 2px rgba(43, 54, 60, 0.05), 0 6px 18px rgba(43, 54, 60, 0.05)",this.lift="0 2px 4px rgba(43, 54, 60, 0.06), 0 14px 32px rgba(43, 54, 60, 0.10)",this.barLight="#fcfcfd",this.barMid="#f8f9fc",this.barDeep="#f2f4f9",this.barShadow="0 1px 0 rgba(43, 54, 60, 0.05)",this.sideLight="#fafbfc",this.sideDeep="#f2f4f8",this.hairline="1px",this.stroke="2px"}parts(){return[...super.parts(),this.bands(),this.guide(),this.order(),this.surface(),this.entries(),this.small()]}bands(){return b`
            .pd-book .pd-library { position: relative; background: linear-gradient(180deg, ${({theme:e})=>e.barLight} 0%, ${({theme:e})=>e.barMid} 60%, ${({theme:e})=>e.barDeep} 100%); border-block-end: thin solid ${({theme:e})=>e.line}; box-shadow: ${({theme:e})=>e.barShadow}; }
            .pd-book .pd-library::after { content: ''; position: absolute; left: 0; right: 0; bottom: calc(-1 * ${({theme:e})=>e.hairline}); height: ${({theme:e})=>e.stroke}; background: linear-gradient(90deg, var(--band) 0 40%, var(--ground) 40% 70%, var(--foot) 70%); opacity: 0.75; }
        `}guide(){return b`
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
        `}order(){return b`
            .pd-book .pd-holds .pd-paragraph.pd-entry-order { position: absolute; top: calc(${({theme:e})=>e.space} * 0.75); right: calc(${({theme:e})=>e.space} * 0.583); z-index: 1; margin: 0; }
            .pd-book .pd-holds .pd-entry-order .pd-word.pd-switch { padding: 0; border: 0; border-radius: 0; background: none; font-family: ${({theme:e})=>e.font}; font-size: calc(0.7143 * ${({theme:e})=>e.size}); font-weight: 500; line-height: 1.4; letter-spacing: 0.02em; color: ${({theme:e})=>e.faint}; cursor: pointer; transition: color ${({theme:e})=>e.beat} ease; }
            .pd-book .pd-holds .pd-entry-order .pd-word.pd-switch::before { content: '↓ '; }
            .pd-book .pd-holds .pd-entry-order .pd-word.pd-switch:hover { color: ${({theme:e})=>e.ink}; }
            .pd-book .pd-holds .pd-entry-order .pd-word.pd-switch[aria-pressed='true'] { background: none; border: 0; color: var(--foot-ink); }
            .pd-book .pd-holds .pd-entry-order .pd-word.pd-switch[aria-pressed='true']::before { content: '↑ '; }
        `}surface(){return b`
            .pd-book .pd-pages { display: flex; flex-direction: column; padding: ${({theme:e})=>e.space} calc(${({theme:e})=>e.space} * 1.6667) calc(${({theme:e})=>e.space} * 5); background: linear-gradient(180deg, color-mix(in oklab, var(--foot) 12%, white), transparent) top / 100% calc(${({theme:e})=>e.space} * 2) no-repeat, linear-gradient(90deg, color-mix(in oklab, var(--foot) 8%, white), transparent) left / calc(${({theme:e})=>e.space} * 1.6667) 100% no-repeat, ${({theme:e})=>e.paper}; }
        `}entries(){return b`
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
        `}small(){return b`
            @media (max-width: ${({theme:e})=>e.narrow}) {
                .pd-book .pd-holds, .pd-book .pd-library { border-inline-end: none; }
                .pd-book .pd-holds .pd-paragraph.pd-entry-order, .pd-book .pd-holds .pa-entry .pd-word.pd-entry-day { display: none; }
                .pd-book .pd-pages { padding: 0 calc(${({theme:e})=>e.space} * 0.8333) calc(${({theme:e})=>e.space} * 2.5); }
                .pd-book .pd-pages .pd-chapter.pa-page { padding: calc(${({theme:e})=>e.space} * 1.1667) 0 calc(${({theme:e})=>e.space} * 1.3333); }
                .pd-book .pd-pages .pa-page .pd-word.pd-entry-number { position: static; display: block; margin-block-end: calc(${({theme:e})=>e.space} / 6); font-size: calc(2 * ${({theme:e})=>e.size}); }
                .pd-book .pd-pages .pa-page .pd-word.pd-date { position: static; width: auto; margin-block-end: calc(${({theme:e})=>e.space} * 0.4167); }
            }
        `}};r(_a,"$Typeset");let at=_a;const nd=n(at);var rd=Object.defineProperty,id=Object.getOwnPropertyDescriptor,dr=r((p,e,t,o)=>{for(var s=id(e,t),i=p.length-1,d;i>=0;i--)(d=p[i])&&(s=d(e,t,s)||s);return s&&rd(e,t,s),s},"__decorateClass$6");const G=r(p=>p.annotations.expressed(B)?.date?.date??"","dayOf"),Rn=r(p=>{const[e,t]=G(p).split("-");return e===void 0||t===void 0?"":new Date(Date.UTC(Number(e),Number(t)-1,1)).toLocaleString("en-GB",{month:"long",year:"numeric",timeZone:"UTC"})},"monthOf"),Ra=class Ra extends k{constructor(){super(...arguments),this.specification=new L}defines(e){e.classes.add(this,"pa-newest-first")}erase(e){e.classes.revert(this)}};r(Ra,"$NewestFirst");let nt=Ra;const dd=n(nt),pr=dd,Fa=class Fa extends f{write(){const e=n(Xn);return a(e,{annotation:pr,children:"newest first"})}$Define(){super.$Define(),this.classes.add(this,"pd-entry-order")}};r(Fa,"$EntryOrder");let ws=Fa;const Ea=class Ea extends j{write(){return String(this.book.entries.indexOf(this.chapter)+1)}$Define(){super.$Define(),this.classes.add(this,"pd-entry-number")}};r(Ea,"$EntryNumber");let zs=Ea;const Sa=class Sa extends we{paging(){return b``}};r(Sa,"$JournalLayout");let Os=Sa;const pd=n(ws),cd=n(zs),ld=n(Os),hd=pd,fd=cd,Ga=class Ga extends E{constructor(){super(...arguments),this.specification=new Oe}get latest(){return[...this.entries].sort((e,t)=>G(t).localeCompare(G(e)))[0]}get pages(){const e=[...this.entries].sort((t,o)=>G(t).localeCompare(G(o)));return this.is(nt)?e.reverse():e}get open(){return super.open??this.latest}head(){}switches(){}turns(){}$Bound(){const e=n(fd);for(const s of this.entries)s.text.add(this,a(e,{}));const t=this.table?.annotations.expressed(H);t!==void 0&&(t.$dated=!0);const o=n(hd);this.table?.text.add(this,a(o,{})),this.$is=[pr],super.$Bound()}};r(Ga,"$Journal");let Ds=Ga;const Ua=class Ua extends R{$everyEntryIsDated(e){const t=e.entries.find(o=>!o.is(B));l(t===void 0,`every entry of a journal is dated, and "${t?.title?.name}" is not`)}$everyEntrySaysItsMonth(e){const t=e.entries.find(o=>o.part?.name!==Rn(o));l(t===void 0,t===void 0?"":`every entry of a journal says the month of its date as its part, and "${t.title?.name}" says "${t.part?.name??"none"}" for ${Rn(t)}`)}};r(Ua,"JournalSpecification");let Oe=Ua;dr([h("every entry of a journal is dated")],Oe.prototype,"$everyEntryIsDated");dr([h("every entry of a journal says the month of its date as its part")],Oe.prototype,"$everyEntrySaysItsMonth");const to=n(Ds);n(to,Ys)(nd);n(to,Wt)(eo);n(to,nr)(ld);var gd=Object.defineProperty,bd=Object.getOwnPropertyDescriptor,ud=r((p,e,t,o)=>{for(var s=bd(e,t),i=p.length-1,d;i>=0;i--)(d=p[i])&&(s=d(e,t,s)||s);return s&&gd(e,t,s),s},"__decorateClass$5");const Za=class Za extends k{constructor(){super(...arguments),this.specification=new rt}get section(){return this.parent instanceof M?this.parent:void 0}get headings(){const e=this.section;return e===void 0?[]:e.text.find(Zn).filter(t=>t!==e.canonical)}defines(e){e.classes.add(this,"pa-opaque")}erase(e){e.classes.revert(this)}$Bound(){for(const e of this.headings){const t=e.annotations.expressed(Ot),o=e.annotations.expressed(Or);for(const s of[t,o])s!==void 0&&e.annotations.remove(e,s)}super.$Bound()}};r(Za,"$Opaque");let js=Za;const qa=class qa extends ${$saidOfASection(e){l(e instanceof M,"opaque is said of a section, and this is not one")}};r(qa,"OpaqueSpecification");let rt=qa;ud([h("opaque is said of a section")],rt.prototype,"$saidOfASection");const md=n(js);var $d=Object.defineProperty,kd=Object.getOwnPropertyDescriptor,F=r((p,e,t,o)=>{for(var s=kd(e,t),i=p.length-1,d;i>=0;i--)(d=p[i])&&(s=d(e,t,s)||s);return s&&$d(e,t,s),s},"__decorateClass$4");const Ya=class Ya extends Zn{$Define(){super.$Define(),this.classes.add(this,"pd-speaker")}$Bound(){super.$Bound();const e=this.annotations.expressed(Ot);e!==void 0&&this.annotations.remove(this,e)}};r(Ya,"$Speaker");let De=Ya;const Xa=class Xa extends Us{$Define(){super.$Define(),this.classes.add(this,"pd-time")}};r(Xa,"$Time");let Cs=Xa;const Qa=class Qa extends Dr{$Define(){super.$Define(),this.classes.add(this,"pd-participant")}};r(Qa,"$Participant");let it=Qa;const Ka=class Ka extends f{get participants(){return this.text.find(it)}write(){const e=this.participants;return e.flatMap((t,o)=>{const s=n(t);return[o===0?"":o===e.length-1?" and ":", ",a(s,{},o)]})}$Define(){super.$Define(),this.classes.add(this,"pd-participants")}};r(Ka,"$Participants");let dt=Ka;const hp=n(De),xd=n(Cs),fp=n(it),gp=n(dt),vd=xd,yd=r(p=>{const e=new Date(p);if(Number.isNaN(e.getTime()))return p;const t=e.toLocaleDateString("en-GB",{day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return`${e.toLocaleTimeString("en-GB",{hour:"2-digit",minute:"2-digit",timeZone:"UTC"})} UTC, ${t}`},"shownTime"),Ja=class Ja extends M{constructor(){super(...arguments),this.specification=new je,this.$at=void 0}get when(){return this.$at??""}get speaker(){return this.text.find(De)[0]}write(){const e=n(vd),t=this.speaker,o=t===void 0?void 0:n(t),s=[...this.text].filter(i=>i!==t);return c(m,{children:[o===void 0?void 0:a(o,{}),a(e,{children:`[${yd(this.when)}](${this.when})`}),a("div",{className:"pd-said",children:s.map((i,d)=>{const u=n(i);return a(u,{},d)})})]})}$Define(){super.$Define(),this.classes.add(this,"pd-message");const e=n(md);if(this.annotations.add(this,a(e,{})),this.when==="")return;const t=this.speaker,o=t===void 0?"":I.reference(y.copy(t.text))?.name??y.copy(t.text),s=n(jr);this.annotations.add(this,a(s,{children:qn.slug(`${this.when.replace(/Z$/u,"")} ${o}`)}))}$Bound(){const e=this.book?.author?.means?.identifier;if(e!==void 0&&this.speaker?.means?.identifier===e){const t=n(zd);this.annotations.add(this,a(t,{}))}super.$Bound()}};r(Ja,"$Message");let P=Ja;const Va=class Va extends k{constructor(){super(...arguments),this.specification=new ct}defines(e){e.classes.add(this,"pa-mine")}erase(e){e.classes.revert(this)}};r(Va,"$Mine");let pt=Va;const en=class en extends ${$saidOfAMessage(e){l(e instanceof P,"mine is said of a message, and this is not one")}};r(en,"MineSpecification");let ct=en;F([h("mine is said of a message")],ct.prototype,"$saidOfAMessage");const wd=n(pt),zd=wd,tn=class tn extends k{constructor(){super(...arguments),this.specification=new ft}defines(e){e.classes.add(this,"pa-quoted")}erase(e){e.classes.revert(this)}};r(tn,"$Quoted");let Ps=tn;const sn=class sn extends k{constructor(){super(...arguments),this.specification=new gt}defines(e){e.classes.add(this,"pa-verbatim")}erase(e){e.classes.revert(this)}};r(sn,"$Verbatim");let Ms=sn;const on=class on extends k{constructor(){super(...arguments),this.specification=new Ce,this.$from=void 0,this.$to=void 0}get from(){return this.$from??""}get to(){return this.$to??""}defines(e){e.classes.add(this,"pa-period")}erase(e){e.classes.revert(this)}};r(on,"$Period");let lt=on;const an=class an extends k{constructor(){super(...arguments),this.specification=new Ce,this.$shown=void 0,this.$all=void 0}get shown(){return Number(this.$shown??0)}get all(){return Number(this.$all??0)}get aside(){return this.all-this.shown}defines(e){e.classes.add(this,"pa-messages")}erase(e){e.classes.revert(this)}};r(an,"$Messages");let ht=an;const nn=class nn extends Cr{$saysWhen(e){l(e.when!==""&&!Number.isNaN(Date.parse(e.when)),"a message says when it was said, as an instant the machine can read, and this one does not")}$headedByItsSpeaker(e){l(e.canonical instanceof De,"a message is headed by its speaker, a heading that refers to them, and this one is not")}};r(nn,"MessageSpecification");let je=nn;F([h("a message says when it was said")],je.prototype,"$saysWhen");F([h("a message is headed by its speaker")],je.prototype,"$headedByItsSpeaker");const rn=class rn extends ${$saidOfAParagraph(e){l(e instanceof f,"this is said of a paragraph, and this is not one")}};r(rn,"OfAParagraphSpecification");let ft=rn;F([h("this is said of a paragraph")],ft.prototype,"$saidOfAParagraph");const dn=class dn extends ${$saidOfACover(e){l(e instanceof v&&e.is(D),"this is said of a cover, and this is not one")}};r(dn,"OfACoverSpecification");let Ce=dn;F([h("this is said of a cover")],Ce.prototype,"$saidOfACover");const pn=class pn extends ${$saidOfAWord(e){l(e instanceof j,"verbatim is said of a word, and this is not one")}};r(pn,"VerbatimSpecification");let gt=pn;F([h("verbatim is said of a word")],gt.prototype,"$saidOfAWord");const bp=n(P),up=n(Ps),mp=n(Ms),$p=n(lt),kp=n(ht),Fn=r(p=>p===void 0||p===""?"":new Date(p).toLocaleDateString("en-GB",{day:"numeric",month:"long",year:"numeric",timeZone:"UTC"}),"dayWords"),cn=class cn extends f{write(){const e=this.book,t=e.messageCount?.shown??e.messages.length,o=new Set(e.messages.map(d=>d.when.slice(0,10))).size,s=Fn(e.period?.from),i=Fn(e.period?.to);return c(m,{children:[c("span",{className:"pd-tally-count",children:[a("b",{children:t}),o===1?" messages in ":" messages over ",a("b",{children:o}),o===1?" day":" days"]}),a("span",{className:"pd-tally-period",children:s===i?s:`${s} to ${i}`})]})}$Define(){super.$Define(),this.classes.add(this,"pd-tally")}};r(cn,"$Tally");let As=cn;const ln=class ln extends j{write(){return String(this.$entry?.text.find(P).length??0)}$Define(){super.$Define(),this.classes.add(this,"pd-day-count")}};r(ln,"$DayCount");let Ns=ln;const Od=n(As),Dd=n(Ns),jd=Od,Cd=Dd,hn=class hn extends E{constructor(){super(...arguments),this.specification=new pe}get participants(){return this.cover?.text.find(dt)[0]?.participants??[]}get period(){return this.cover?.annotations.expressed(lt)}get messageCount(){return this.cover?.annotations.expressed(ht)}get messages(){return this.body.flatMap(e=>e.text.find(P))}get pages(){return[...[...this.body].sort((t,o)=>G(t).localeCompare(G(o))),...this.appendix]}get open(){return super.open??this.pages[0]}head(){const e=n(jd);return c(m,{children:[super.head(),a(e,{chapter:this.cover})]})}$Bound(){const e=n(Cd);for(const t of this.table?.annotations.expressed(H)?.entries??[]){const o=N(t)?.identifier,s=o===void 0?void 0:this.chapterAt(o);s===void 0||!this.body.includes(s)||t.text.add(this,a(e,{entry:s}))}super.$Bound()}};r(hn,"$Conversation");let bt=hn;const fn=class fn extends R{$saysItsParticipantsPeriodAndCount(e){l(e.participants.length>0&&e.period!==void 0&&e.messageCount!==void 0,"a conversation says its participants, its period and how many messages it holds, on its cover, and this one says less")}$everyMessageIsAddressed(e){const t=e.messages.find(o=>o.annotations.expressed(Ot)===void 0);l(t===void 0,`every message of a conversation is addressed by its time, and the one at "${t?.when}" is not`)}$everyChapterHoldsAMessage(e){const t=e.body.find(o=>o.text.find(P).length===0);l(t===void 0,`every chapter of a conversation holds a message, and "${t?.title?.name}" holds none`)}};r(fn,"ConversationSpecification");let pe=fn;F([h("a conversation says its participants, its period and how many messages it holds")],pe.prototype,"$saysItsParticipantsPeriodAndCount");F([h("every message of a conversation is addressed by its time")],pe.prototype,"$everyMessageIsAddressed");F([h("every chapter of a conversation holds a message")],pe.prototype,"$everyChapterHoldsAMessage");n(bt);const gn=class gn extends at{constructor(){super(...arguments),this.sans="'Inter', system-ui, sans-serif",this.mono="ui-monospace, 'Cascadia Code', Consolas, monospace",this.keyword="#1f5fbf",this.string="#9a3b1e",this.type="#116b4a",this.comment="#7a8491"}parts(){return[...super.parts(),this.surfaces(),this.top(),this.rows(),this.openDay(),this.exchanges(),this.said(),this.cards(),this.paneColumn(),this.phone()]}surfaces(){return b`
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
        `}top(){return b`
            .pd-book .pd-head .pd-switches, .pd-book .pd-head .pa-illustration { display: none; }
            .pd-book .pd-head .pd-title { font-family: ${({theme:e})=>e.serif}; font-size: 30px; font-weight: 600; line-height: 1.1; letter-spacing: -.01em; }
            .pd-book .pd-head .pd-participants { display: flex; gap: 6px; align-items: center; margin: 6px 0 0; font-family: ${({theme:e})=>e.sans}; font-size: 13px; color: ${({theme:e})=>e.soft}; }
            .pd-book .pd-head .pd-participants::before { content: 'between'; }
            .pd-book .pd-head .pd-participants .pa-reference { color: ${({theme:e})=>e.ink}; font-weight: 500; text-decoration: none; }
            .pd-book .pd-head .pd-participants .pa-reference:hover { color: ${({theme:e})=>e.accent}; }
            .pd-book .pd-head .pd-tally { display: flex; flex-wrap: wrap; gap: 4px 16px; margin: 6px 0 0; font-family: ${({theme:e})=>e.sans}; font-size: 12.5px; color: ${({theme:e})=>e.soft}; }
            .pd-book .pd-head .pd-tally b { color: ${({theme:e})=>e.ink}; font-weight: 500; }
        `}rows(){return b`
            .pd-book .pd-holds .pd-chapter { display: flex; flex-direction: column; }
            .pd-book .pd-holds .pd-section.pa-appendix { display: none; }
            .pd-book .pd-holds .pd-section > .pd-heading { margin: 0 0 4px 18px; font-family: ${({theme:e})=>e.sans}; font-size: 10.5px; font-weight: 600; line-height: 1.4; letter-spacing: .12em; text-transform: uppercase; color: ${({theme:e})=>e.faint}; }
            .pd-book .pd-holds .pd-paragraph.pa-entry { display: flex; align-items: center; gap: 9px; padding: 6px 18px 6px 16px; font-family: ${({theme:e})=>e.sans}; font-size: 13px; color: ${({theme:e})=>e.ink}; }
            .pd-book .pd-holds .pd-paragraph.pa-entry::before { content: ''; flex: none; width: 7px; height: 7px; border-radius: 50%; background: ${({theme:e})=>e.sea}; }
            .pd-book .pd-holds .pd-paragraph.pa-entry .pd-day-count { margin-inline-start: auto; font-size: 11px; color: ${({theme:e})=>e.faint}; }
            .pd-book .pd-holds .pd-paragraph.pa-entry:hover { background: #f8fafc; }
            .pd-book .pd-holds .pd-paragraph.pa-entry.pa-open { background: linear-gradient(90deg, #eff4fa, #f8fafd); color: ${({theme:e})=>e.heading}; font-weight: 500; }
            ${this.sideIndex()}
        `}sideIndex(){return b`
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
        `}openDay(){return b`
            .pd-book .pd-pages .pd-chapter.pa-page { width: 100%; max-width: 768px; margin: 0 auto; }
            .pd-book .pd-pages .pa-page > .pd-title, .pd-book .pd-pages .pa-page > a.pa-self-reference .pd-title { margin: 0 0 22px; font-family: ${({theme:e})=>e.sans}; font-size: 11.5px; font-weight: 600; line-height: 1.4; letter-spacing: .14em; text-transform: uppercase; color: ${({theme:e})=>e.faint}; }
            .pd-book .pd-pages .pd-turn, .pd-book .pd-pages .pa-page > .pd-word.pd-date { display: none; }
        `}exchanges(){return b`
            .pd-book .pd-pages .pd-message { position: relative; display: block; margin: 0 0 28px; }
            .pd-book .pd-pages .pd-message > .pa-self-reference, .pd-book .pd-pages .pd-message .pd-heading.pd-speaker { display: none; }
            .pd-book .pd-pages .pd-message > .pd-word.pd-time { position: absolute; top: -17px; left: 0; display: block; width: auto; margin: 0; font-family: ${({theme:e})=>e.sans}; font-size: 11px; font-weight: 500; line-height: 1; color: ${({theme:e})=>e.faint}; opacity: 0; transition: opacity .15s; }
            .pd-book .pd-pages .pd-message > .pd-word.pd-time::before { content: none; }
            .pd-book .pd-pages .pd-message.pa-mine > .pd-word.pd-time { left: auto; right: 0; }
            .pd-book .pd-pages .pd-message:hover > .pd-word.pd-time { opacity: 1; }
            .pd-book .pd-pages .pd-message > .pd-said { display: flex; flex-direction: column; gap: 10px; min-width: 0; overflow-wrap: anywhere; }
            .pd-book .pd-pages .pd-message.pa-mine > .pd-said { margin-inline-start: auto; width: fit-content; max-width: 78%; padding: 12px 16px; border-radius: 12px; background: rgba(11, 11, 11, .05); gap: 8px; }
        `}said(){return b`
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
        `}cards(){return b`
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
        `}paneColumn(){return b`
            .pd-book.pa-layout:has(> .pd-pane > .pd-pane-bar) {
                grid-template-columns: ${({theme:e})=>e.holdsColumn} minmax(0, 1fr) minmax(0, 1fr);
                grid-template-areas: 'library library library' 'holds head pane' 'holds pages pane';
            }
            ${this.strip()}
        `}strip(){return b`
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
        `}phone(){return b`
            @media (max-width: ${({theme:e})=>e.narrow}) {
                .pd-book .pd-pages .pd-message.pa-mine > .pd-said { max-width: 92%; }
                .pd-book .pd-head .pd-title { font-size: 24px; }
                .pd-book.pa-layout:has(> .pd-pane > .pd-pane-bar) { grid-template-columns: minmax(0, 1fr); grid-template-areas: 'library' 'head' 'pages'; }
            }
        `}};r(gn,"$ApplicationForm");let Is=gn;const Pd=n(Is);var Md=Object.defineProperty,Ad=Object.getOwnPropertyDescriptor,Nd=r((p,e,t,o)=>{for(var s=Ad(e,t),i=p.length-1,d;i>=0;i--)(d=p[i])&&(s=d(e,t,s)||s);return s&&Md(e,t,s),s},"__decorateClass$3");const Id='<svg viewBox="0 0 24 24"><path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4M9 12h6M9 16h6"/></svg>',Td='<svg viewBox="0 0 24 24"><path d="M8 7l-5 5 5 5M16 7l5 5-5 5M13 5l-2 14"/></svg>',Z=r(p=>{const e=p.book;return e!==void 0&&"$shown"in e?e:void 0},"showingBook"),bn=class bn extends k{constructor(){super(...arguments),this.specification=new ut}defines(e){e.classes.add(this,"pa-version")}erase(e){e.classes.revert(this)}};r(bn,"$Version");let Ts=bn;const un=class un extends ${$saidOfAChapter(e){l(e instanceof v,"a version is said of a chapter, and this is not one")}};r(un,"VersionSpecification");let ut=un;Nd([h("a version is said of a chapter")],ut.prototype,"$saidOfAChapter");const mn=class mn extends Yn{constructor(){super(...arguments),this.$artifact=void 0,this.$place=void 0}get version(){const e=this.$place;if(e!==void 0)return this.book.chapters.find(t=>qn.slug(t.title?.name??"")===e)}get versionName(){return this.version?.title?.name??""}get name(){return this.versionName.replace(/ v\d+(?:-\d+)?$/u,"")||this.$identifier}get number(){return/ v(\d+)(?:-\d+)?$/u.exec(this.versionName)?.[1]??"1"}get kind(){const e=this.$type.replace(/^\./u,"");return e==="md"||e==="txt"||e===""?"document":e==="html"?"page":"code"}get shown(){return Z(this)?.$shown===this}$Artifact(...e){this.$Code(...e),this.containers.replace(this,"pre","figure")}write(){const e=[...this.text].map((o,s)=>{const i=n(o);return a(i,{},s)}),t={__html:this.kind==="document"?Id:Td};return c(m,{children:[c("button",{type:"button",className:"pd-card","aria-pressed":this.shown,onClick:r(()=>this.press(),"onClick"),children:[a("span",{className:"pd-card-mark",dangerouslySetInnerHTML:t}),c("span",{className:"pd-card-words",children:[a("b",{children:this.name}),a("small",{children:`Click to open ${this.kind} · v${this.number}`})]})]}),a("figcaption",{children:e})]})}press(){const e=Z(this);e!==void 0&&(e.$shown=e.$shown===this?void 0:this)}$Define(){super.$Define(),this.classes.add(this,"pd-artifact"),this.shown&&this.classes.add(this,"pa-open")}};r(mn,"$Artifact");let Pe=mn;const $n=class $n extends Yn{get sentence(){return y.copy(this.text)}get fileName(){return/“([^”]+)”/u.exec(this.sentence)?.[1]??"a file"}get extension(){return(this.fileName.split(".").pop()??"file").toUpperCase().slice(0,4)}get lineCount(){return this.names?this.contents.split(`
`).length:0}get shown(){return Z(this)?.$shown===this}$Attachment(...e){this.$Code(...e),this.containers.replace(this,"pre","figure")}write(){const e=[...this.text].map((t,o)=>{const s=n(t);return a(s,{},o)});return c(m,{children:[c("button",{type:"button",className:"pd-chip","aria-pressed":this.shown,onClick:r(()=>this.press(),"onClick"),children:[a("span",{className:"pd-chip-mark",children:this.extension}),c("span",{className:"pd-chip-words",children:[a("b",{children:this.fileName}),a("small",{children:this.names?`${this.lineCount} lines`:"not carried by the export"})]})]}),a("figcaption",{children:e})]})}press(){const e=Z(this);e!==void 0&&(e.$shown=e.$shown===this?void 0:this)}$Define(){super.$Define(),this.classes.add(this,"pd-attachment"),this.shown&&this.classes.add(this,"pa-open")}};r($n,"$Attachment");let Me=$n;const xp=n(Ts),vp=n(Pe),yp=n(Me),kn=class kn extends f{constructor(){super(...arguments),this.style=z.div`
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
    `}get shown(){return Z(this)?.$shown}get artifacts(){return this.book?.messages.flatMap(e=>e.text.find(Pe))??[]}$Pane(...e){this.$Writing(...e),this.containers.replace(this,"span",this.style)}neighbour(e,t){const o=Number(e.number)+t;return this.artifacts.find(s=>s.$artifact===e.$artifact&&Number(s.number)===o)}write(){const e=this.shown;if(e===void 0)return;const t=e instanceof Pe?e:void 0,o=e instanceof Me?e:void 0,s=t?.version,i=s===void 0?void 0:n(s),d=t===void 0?void 0:this.neighbour(t,-1),u=t===void 0?void 0:this.neighbour(t,1),x=o===void 0?"":o.names?o.contents:"The export does not carry this upload; the name is all it kept.";return c(m,{children:[c("div",{className:"pd-pane-bar",children:[a("span",{className:"pd-pane-title",children:t?.name??o?.fileName}),a("span",{className:"pd-pane-kind",children:t?.kind??o?.extension.toLowerCase()}),a("button",{type:"button",className:"pd-pane-copy",onClick:r(g=>this.copy(g),"onClick"),children:"Copy"}),a("button",{type:"button",className:"pd-pane-close","aria-label":"close",onClick:r(()=>this.close(),"onClick"),children:"×"})]}),a("div",{className:"pd-pane-body",children:i===void 0?a("pre",{children:x}):a(i,{})}),t===void 0?void 0:c("div",{className:"pd-pane-foot",children:[c("span",{className:"pd-pane-version",children:[a("button",{type:"button",disabled:d===void 0,onClick:r(()=>this.show(d),"onClick"),children:"‹"}),a("span",{children:`v${t.number}`}),a("button",{type:"button",disabled:u===void 0,onClick:r(()=>this.show(u),"onClick"),children:"›"})]}),a("button",{type:"button",className:"pd-pane-download",onClick:r(()=>this.download(t),"onClick"),children:"Download"})]})]})}show(e){const t=Z(this);t!==void 0&&e!==void 0&&(t.$shown=e)}close(){const e=Z(this);e!==void 0&&(e.$shown=void 0)}copy(e){const t=e.currentTarget.closest(".pd-pane")?.querySelector(".pd-pane-body");navigator.clipboard?.writeText(t?.textContent??"")}download(e){const t=e.$type.replace(/^\./u,"")||"md",o=new Blob([e.contents],{type:"text/plain"}),s=document.createElement("a");s.href=URL.createObjectURL(o),s.download=`${e.name} v${e.number}.${t}`,s.click(),URL.revokeObjectURL(s.href)}$Define(){super.$Define(),this.classes.add(this,"pd-pane")}};r(kn,"$Pane");let Hs=kn;const Hd=n(Hs);var Wd=Object.defineProperty,Ld=Object.getOwnPropertyDescriptor,Bd=r((p,e,t,o)=>{for(var s=Ld(e,t),i=p.length-1,d;i>=0;i--)(d=p[i])&&(s=d(e,t,s)||s);return s&&Wd(e,t,s),s},"__decorateClass$2");const xn=class xn extends k{constructor(){super(...arguments),this.specification=new mt}get name(){return I.reference(y.copy(this.text))?.name??""}get means(){return this.annotations.expressed(qs)}$Define(){super.$Define();const e=I.reference(y.copy(this.text));if(e===void 0)return;const t=n(w);this.annotations.add(this,a(t,{children:e.identifier}))}write(){return this.name}};r(xn,"$Account");let Ae=xn;const vn=class vn extends ${$saidOfACover(e){l(e instanceof v&&e.is(D),"an account is said of a cover, and this is not one")}};r(vn,"AccountSpecification");let mt=vn;Bd([h("an account is said of a cover")],mt.prototype,"$saidOfACover");const yn=class yn extends f{get cover(){return this.$cover??this.book?.cover}get account(){return this.cover?.annotations.expressed(Ae)}write(){const e=this.account,t=n(C),o=n(le),s=n(w);return c(m,{children:[c(t,{children:[a(o,{}),"account"]}),c(t,{children:[a(s,{children:e.means.identifier}),e.name]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-account-line")}};r(yn,"$AccountLine");let Ws=yn;const wp=n(Ae),_d=n(Ws);var Rd=Object.defineProperty,Fd=Object.getOwnPropertyDescriptor,Ed=r((p,e,t,o)=>{for(var s=Fd(e,t),i=p.length-1,d;i>=0;i--)(d=p[i])&&(s=d(e,t,s)||s);return s&&Rd(e,t,s),s},"__decorateClass$1");const wn=class wn extends k{constructor(){super(...arguments),this.specification=new kt}get uuid(){return y.copy(this.text).trim()}write(){return null}};r(wn,"$Origin");let $t=wn;const zn=class zn extends ${$saidOfACoverOrAMessage(e){l(e instanceof v&&e.is(D)||e instanceof P,"an origin is said of a cover or a message, and this is neither")}};r(zn,"OriginSpecification");let kt=zn;Ed([h("an origin is said of a cover or a message")],kt.prototype,"$saidOfACoverOrAMessage");const zp=n($t);var Sd=Object.defineProperty,Gd=Object.getOwnPropertyDescriptor,Ud=r((p,e,t,o)=>{for(var s=Gd(e,t),i=p.length-1,d;i>=0;i--)(d=p[i])&&(s=d(e,t,s)||s);return s&&Sd(e,t,s),s},"__decorateClass");const On=class On extends k{constructor(){super(...arguments),this.specification=new xt}get name(){return I.reference(y.copy(this.text))?.name??""}get means(){return this.annotations.expressed(qs)}$Define(){super.$Define();const e=I.reference(y.copy(this.text));if(e===void 0)return;const t=n(w);this.annotations.add(this,a(t,{children:e.identifier}))}write(){return this.name}};r(On,"$Project");let Ne=On;const Dn=class Dn extends ${$saidOfACover(e){l(e instanceof v&&e.is(D),"a project is said of a cover, and this is not one")}};r(Dn,"ProjectSpecification");let xt=Dn;Ud([h("a project is said of a cover")],xt.prototype,"$saidOfACover");const jn=class jn extends f{get cover(){return this.$cover??this.book?.cover}get project(){return this.cover?.annotations.expressed(Ne)}write(){const e=this.project,t=n(C),o=n(le),s=n(w);return c(m,{children:[c(t,{children:[a(o,{}),"project"]}),c(t,{children:[a(s,{children:e.means.identifier}),e.name]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-project-line")}};r(jn,"$ProjectLine");let Ls=jn;const Op=n(Ne),Zd=n(Ls),qd='<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linejoin="round" stroke-linecap="round"><path d="M4 1.5h5.5L13 5v9.5H4z"/><path d="M9.5 1.5V5H13M6 8h4M6 10.5h4"/></svg>',Cn=class Cn extends f{$Outline(...e){this.$Writing(...e),this.containers.replace(this,"span","div")}write(){const e=this.book,t=this.$asked;if(e===void 0||t===void 0)return;const o=n(C),s=n(w),i=t.text.find(P).filter(d=>d.is(pt));if(i.length!==0)return a("ol",{className:"pd-asked",children:i.map((d,u)=>{const x=e.placeOf(d),g=e.wordsOf(d).text;return a("li",{children:x===void 0?g:c(o,{children:[a(s,{children:x}),g]})},u)})})}$Define(){super.$Define(),this.classes.add(this,"pd-outline")}};r(Cn,"$Outline");let Bs=Cn;const Pn=class Pn extends te{get on(){return this.$attachment?.shown===!0}press(){this.$attachment?.press()}write(){const e=this.$attachment;if(e!==void 0)return c(m,{children:[a("span",{className:"pd-drawing",dangerouslySetInnerHTML:{__html:qd}}),a("span",{className:"pd-tab-name",children:e.fileName}),a("small",{children:e.names?`${e.lineCount} lines`:"not carried"})]})}$Define(){super.$Define(),this.classes.add(this,"pd-file-tab")}};r(Pn,"$AttachmentTab");let _s=Pn;const Yd=n(Bs),Xd=n(_s),Qd=Yd,Kd=Xd,Jd="library-trail",Vd=r(()=>{try{const p=typeof localStorage>"u"?null:localStorage.getItem(Jd);if(p===null)return;const e=JSON.parse(p);return e.from?.marking===void 0?void 0:e}catch{return}},"keptTrail"),Mn=class Mn extends Ue{constructor(){super(...arguments),this.$marking={drawing:"",declarations:""}}get marking(){return this.$marking}};r(Mn,"$TrailMark");let Rs=Mn;const An=class An extends f{get conversation(){return this.book}$ProjectStrip(...e){this.$Writing(...e),this.containers.replace(this,"span","div")}write(){const e=this.conversation,t=e?.$trail;if(e===void 0||t===void 0)return;const o=n(C),s=n(w),i=n(sp);return c(m,{children:[a(i,{marking:t.from.marking,children:a(s,{children:t.from.href})}),c("span",{className:"pd-strip-words",children:[c(o,{children:[a(s,{children:t.from.href}),t.from.title]}),a("span",{className:"pd-strip-place",children:`${t.within.index} of ${t.within.of}`})]}),c("span",{className:"pd-strip-neighbours",children:[t.within.prev===void 0?void 0:c(o,{children:[a(s,{children:t.within.prev.href}),`‹ ${t.within.prev.title}`]}),t.within.next===void 0?void 0:c(o,{children:[a(s,{children:t.within.next.href}),`${t.within.next.title} ›`]})]}),t.word===""?void 0:a("span",{className:"pd-strip-word",children:`you were searching “${t.word}”`}),c(o,{children:[a(s,{children:t.from.href}),"back to where I was"]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-project-strip")}};r(An,"$ProjectStrip");let Fs=An;const ep=n(Rs),tp=n(Fs),sp=ep,op=tp,Nn=class Nn extends bt{constructor(){super(...arguments),this.$shown=void 0,this.$trail=void 0}arrive(){const e=Vd();e===void 0||e.to!==this.means?.identifier||this.$trail?.at===e.at||(this.$trail=e)}turn(){super.turn(),this.arrive()}get project(){return this.cover?.annotations.expressed(Ne)}get account(){return this.cover?.annotations.expressed(Ae)}get origin(){return this.cover?.annotations.expressed($t)?.uuid}get subjectCover(){return this.coverOf(this.project?.means?.identifier)??super.subjectCover}get index(){return this.table?.annotations.expressed(H)}get searchHint(){return"a word in this conversation"}wordsOf(e){if(!(e instanceof P))return super.wordsOf(e);const t=this._words?.get(e);if(t!==void 0)return t;const o=e.speaker,s=o===void 0?"":I.reference(y.copy(o.text))?.name??y.copy(o.text),i=[...e.text].filter(u=>u!==o).map(u=>y.copy(u.text).replace(/\s+/gu," ").trim()).filter(u=>u!=="").join(" "),d={title:s,text:i,lower:`${s} ${i}`.toLowerCase()};return(this._words??=new Map).set(e,d),d}found(e){const t=e.trim().toLowerCase();return t===""?[]:this.messages.filter(o=>this.wordsOf(o).lower.includes(t))}countOfFound(e,t){return c(m,{children:[a("b",{children:e.length})," ",e.length===1?"message says":"messages say"," “",t,"”"]})}placeOf(e){if(!(e instanceof P))return super.placeOf(e);const t=e.annotations.expressed(Ot)?.identifier;return t===void 0?void 0:this.placeWithin(`#${t}`)}sought(e){if(typeof CSS>"u"||!("highlights"in CSS)||typeof document>"u")return;const t=CSS.highlights;if(e===""){t.delete("pd-found");return}const o=[],s=e.toLowerCase(),i=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,{acceptNode:r(u=>u.parentElement?.closest(".pd-pages .pd-said")?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT,"acceptNode")});for(let u=i.nextNode();u!==null;u=i.nextNode()){const x=u.nodeValue?.toLowerCase()??"";for(let g=x.indexOf(s);g!==-1;g=x.indexOf(s,g+s.length))o.push(new StaticRange({startContainer:u,startOffset:g,endContainer:u,endOffset:g+e.length}))}const d=globalThis.Highlight;t.set("pd-found",new d(...o))}holds(){const e=n(Ai),t=n(Ni),o=n(Qd),s=this.open;return c(m,{children:[a(e,{chapter:this.table}),a(t,{chapter:this.table}),super.holds(),s===void 0||!this.body.includes(s)?void 0:a(o,{chapter:this.table,asked:s},s.mention?.identifier)]})}write(){const e=n(Hd),t=n(op);return c(m,{children:[super.write(),a(t,{chapter:this.cover}),a(e,{chapter:this.cover})]})}$Bound(){const e=this.index;e!==void 0&&(e.$folded=!0,e.$counted=!0,e.$searched=!0);const t=n(sr);for(const s of this.table?.text.find(M)??[])s.is(ye)||s.annotations.add(this,a(t,{}));const o=n(Kd);for(const s of e?.entries??[]){const i=N(s)?.identifier,d=i===void 0?void 0:this.chapterAt(i);if(d===void 0||!this.body.includes(d))continue;const u=d.text.find(P).flatMap(x=>x.text.find(Me)).filter(x=>x.names);u.length!==0&&s.text.add(this,...u.map((x,g)=>a(o,{attachment:x},g)))}super.$Bound()}me(){const e=n(Zd),t=n(_d);return c(m,{children:[super.me(),this.project===void 0?void 0:a(e,{cover:this.cover}),this.account===void 0?void 0:a(t,{cover:this.cover})]})}};r(Nn,"$ClaudeConversation");let Es=Nn;const cr=n(Es);n(cr,Ys)(Pd);n(cr,Wt)(eo);const In=class In extends Ee{};r(In,"$JournalCover");let Ss=In;const lr=n(Ss),hr=r(()=>c(Dt,{children:[a(Vn,{}),a(Tt,{ground:"#eef5f6",band:"#c3e3e6",bandInk:"#1c565c",foot:"#8db9bd",footInk:"#153e43",ink:"#1f5a60"}),a(Ht,{x:"-46",y:"-13"}),a(jt,{children:"[Dougs Library](/dougs-library/)"}),a(Ct,{children:"[Doug](/dougs-story/)"}),a(Pt,{children:"[Library](/dougs-library/)"}),a(Mt,{children:"[The Library](/dougs-library/)"}),c(At,{children:[a(It,{}),a(Nt,{children:`<svg viewBox="0 0 64 64" class="pd-illustration"><path class="light" d="M9 7h46v50H9z"/><path d="M9 7h46v50H9zM9 24h46M9 41h46"/><path class="fill" d="M13 11h5v13h-5zM20 9h4v15h-4zM26 13h6v11h-6zM34 10h4v14h-4zM40 14h6v10h-6z"/><path d="M48 24l4-12 3 1-4 11z"/><path class="fill" d="M13 28h4v13h-4zM19 30h7v11h-7zM28 27h4v14h-4zM34 31h5v10h-5zM41 28h6v13h-6zM49 29h3v12h-3z"/><path class="fill" d="M13 46h6v11h-6zM21 44h4v13h-4zM27 47h8v10h-8zM37 45h4v12h-4zM43 48h6v9h-6z"/><path d="M50 57l3-11 3 1-3 10z"/></svg>
`})]})]}),"SubjectCover$2"),fr=r(()=>c(Dt,{children:[a(lr,{}),a(Pr,{}),a(ve,{children:hr()}),a(Tt,{ground:"#f5eedf",band:"#d9c3a3",bandInk:"#4a3626",foot:"#a3b6cc",footInk:"#2a4262",ink:"#2f4a6a"}),a(Ht,{x:"-54",y:"-33"}),a(jt,{children:"[Dougs Story](/dougs-story/)"}),a(Ct,{children:"[Doug](/dougs-story/)"}),a(Pt,{children:"[Library](/dougs-library/)"}),a(Mt,{children:"[The Librarian](/dougs-story/)"}),c(At,{children:[a(It,{}),a(Nt,{children:`<svg viewBox="0 0 64 64" class="pd-illustration"><path class="light" d="M8 13h23v38H8zM33 13h23v38H33z"/><path d="M8 13h23v38H8zM33 13h23v38H33z"/><path d="M13 21h13M13 27h13M13 33h9M38 21h13M38 27h13M38 33h13M38 39h8"/><path class="fill" d="M15 55 45 25l4 4-30 30-6 2z"/><path d="M15 55 45 25l4 4-30 30-6 2zM43 27l4 4M17 53l2 2"/></svg>
`})]})]}),"StoryCover"),ap=r(()=>c(Dt,{children:[a(Vn,{}),a(ve,{children:hr()}),a(ve,{children:fr()}),a(Tt,{ground:"#eff1f6",band:"#c0c9df",bandInk:"#2a3a63",foot:"#8e9fc8",footInk:"#1f2d50",ink:"#2a3a63"}),a(Ht,{x:"-36",y:"-26"}),a(jt,{children:"[Dougs Claude](/dougs-claude/)"}),a(Ct,{children:"[Doug](/dougs-story/)"}),a(Pt,{children:"[Library](/dougs-library/)"}),a(Mt,{children:"[Claude](/dougs-claude/)"}),c(At,{children:[a(It,{}),a(Nt,{children:`<svg viewBox="0 0 64 64" class="pd-illustration"><path class="light" d="M8 30h48v27H8z"/><path d="M8 30h48v27H8zM8 44h48"/><path class="fill" d="M12 33h5v9h-5zM19 31h4v11h-4zM25 34h7v8h-7zM34 32h4v10h-4zM40 35h8v7h-8z"/><path class="fill" d="M12 47h6v8h-6zM20 48h4v7h-4zM26 46h9v9h-9zM37 49h5v6h-5zM44 47h7v8h-7z"/><path class="light" d="M28 6h28v16H40l-6 5v-5h-6z"/><path d="M28 6h28v16H40l-6 5v-5h-6z"/><path d="M33 11h18M33 16h12"/></svg>
`})]})]}),"SubjectCover$1"),Dp=r(()=>c(Dt,{children:[a(lr,{}),a(ve,{children:ap()}),a(ve,{children:fr()}),a(Tt,{ground:"#eef5f6",band:"#b6dde2",bandInk:"#1c565c",foot:"#7fb7bd",footInk:"#153e43",ink:"#1f5a60"}),a(Ht,{x:"-32",y:"-26"}),a(jt,{children:"[Our Conversations](/our-conversations/)"}),a(Ct,{children:"[Doug](/dougs-story/)"}),a(Pt,{children:"[Claude](/dougs-claude/)"}),a(Mt,{children:"[Conversations](/our-conversations/)"}),c(At,{children:[a(It,{}),a(Nt,{children:`<svg viewBox="0 0 64 64" class="pd-illustration"><path class="light" d="M6 9h34v20H18l-6 6v-6H6z"/><path d="M6 9h34v20H18l-6 6v-6H6z"/><path d="M11 15h24M11 21h16"/><path class="fill" d="M24 31h34v20H52v6l-6-6H24z"/><path d="M24 31h34v20H52v6l-6-6H24z"/><path class="light" d="M29 37h24M29 43h16"/></svg>
`})]})]}),"SubjectCover");export{Es as $,wp as A,Vn as B,It as I,kp as M,zp as O,gp as P,up as Q,Dp as S,ve as V,Ht as W,fr as a,Tt as b,fp as c,$p as d,Op as e,cp as f,bp as g,hp as h,lp as i,yp as j,mp as k,vp as l,xp as m,md as n};
