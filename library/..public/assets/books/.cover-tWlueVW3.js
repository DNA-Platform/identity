var so=Object.defineProperty;var n=(p,e)=>so(p,"name",{value:e,configurable:!0});import{jsx as r,jsxs as c,Fragment as m}from"react/jsx-runtime";import{$ as o,$check as l,selection as y,$Chemical as ao,inert as Wt}from"@dna-platform/chemistry";import{$Word as P,specify as h,AnnotationSpecification as b,$Book as Ma,$Annotation as u,$Paragraph as f,$Section as W,html as O,$Format as Y,$Append as Ia,$Chapter as $,binder as ne,$Svg as Ye,Word as M,Code as oo,$Date as Ta,$Author as _t,Reference as x,$Subject as Na,$Topic as Wa,$Reference as ro,$Image as no,$Composition as io,$Cover as C,$Synopsis as Oa,CoverSpecification as po,$Content as Da,$Parenthetical as co,$TableOfContents as S,$Theme as lo,$Paginated as ho,Self as Pa,Theme as fo,reflection as bo,BookSpecification as go,Chapter as _a,Title as Ha,Author as La,Subject as Fa,About as Ba,Paragraph as Ra,Svg as Ea,Autobiography as uo}from"@dna-platform/public";import{css as k}from"styled-components";const Et=class Et extends P{get on(){return[this.book.$is].flat().includes(this.$annotation)}$Switch(...e){this.$Writing(...e),this.containers.replace(this,"span","button")}container(e){return super.container({type:"button","aria-pressed":this.on,onClick:n(()=>this.press(),"onClick"),...e})}press(){const e=this.book,t=[e.$is].flat();e.$is=this.on?t.filter(a=>a!==this.$annotation):[this.$annotation,...t]}$Define(){super.$Define(),this.classes.add(this,"pd-switch")}};n(Et,"$Switch");let ie=Et;const Gt=class Gt extends ie{press(){const e=this.book,t=[e.$is].flat().filter(a=>!this.$family.includes(a));e.$is=[this.$annotation,...t]}};n(Gt,"$Tab");let de=Gt;const mo=o(ie),$o=o(de);var ko=Object.defineProperty,vo=Object.getOwnPropertyDescriptor,yo=n((p,e,t,a)=>{for(var s=vo(e,t),i=p.length-1,d;i>=0;i--)(d=p[i])&&(s=d(e,t,s)||s);return s&&ko(e,t,s),s},"__decorateClass$d");const Yt=class Yt extends b{$saidOfABook(e){l(e instanceof Ma,"this is said of a book, and here it is said of something else")}};n(Yt,"OfABookSpecification");let T=Yt;yo([h("this is said of a book")],T.prototype,"$saidOfABook");var xo=Object.defineProperty,wo=Object.getOwnPropertyDescriptor,zo=n((p,e,t,a)=>{for(var s=wo(e,t),i=p.length-1,d;i>=0;i--)(d=p[i])&&(s=d(e,t,s)||s);return s&&xo(e,t,s),s},"__decorateClass$c");const Re=class Re extends u{constructor(){super(...arguments),this.specification=new T}defines(e){for(const t of e.annotations.after(this))t instanceof Re&&e.annotations.express(t,!1);e.classes.add(this,"pa-file-panel-state")}erase(e){e.classes.revert(this)}};n(Re,"$FilePanelState");let Q=Re;const St=class St extends Q{defines(e){super.defines(e),e.classes.add(this,"pa-code-forward")}};n(St,"$CodeForward");let Ze=St;const Zt=class Zt extends Q{defines(e){super.defines(e),e.classes.add(this,"pa-words-forward")}};n(Zt,"$WordsForward");let qe=Zt;const qt=class qt extends Q{defines(e){super.defines(e),e.classes.add(this,"pa-split")}};n(qt,"$Split");let Je=qt;const Jt=class Jt extends u{constructor(){super(...arguments),this.specification=new T}defines(e){e.classes.add(this,"pa-light-code")}erase(e){e.classes.revert(this)}};n(Jt,"$LightCode");let Qe=Jt;const Qt=class Qt extends u{constructor(){super(...arguments),this.specification=new T}defines(e){e.classes.add(this,"pa-wrapped-code")}erase(e){e.classes.revert(this)}};n(Qt,"$WrappedCode");let Ue=Qt;const Ut=class Ut extends u{constructor(){super(...arguments),this.specification=new T}defines(e){e.classes.add(this,"pa-numbered-code")}erase(e){e.classes.revert(this)}};n(Ut,"$NumberedCode");let Xe=Ut;const Xt=class Xt extends u{constructor(){super(...arguments),this.specification=new ue}defines(e){e.classes.add(this,"pa-brief")}erase(e){e.classes.revert(this)}};n(Xt,"$Brief");let Ke=Xt;const Kt=class Kt extends b{$saidOfAParagraph(e){l(e instanceof f,"brief is said of a paragraph, and this is not one")}};n(Kt,"BriefSpecification");let ue=Kt;zo([h("brief is said of a paragraph")],ue.prototype,"$saidOfAParagraph");o(Q);const Ht=o(Ze),Ga=o(qe),pe=o(Je),Oo=o(Qe),Do=o(Ue),Po=o(Xe),an=o(Ke),Vt=class Vt extends f{constructor(){super(...arguments),this.style=y.div`
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
    `}get spread(){return this.chapter?.annotations.expressed(D)}$FileRail(...e){this.$Writing(...e),this.containers.replace(this,"span",this.style)}write(){const e=o(Ft),t=this.spread;if(t!==void 0)return t.files.map(a=>r(e,{file:a,annotation:pe,family:t.filePanelStates,skeleton:!0},ae(a)))}$Define(){super.$Define(),this.classes.add(this,"pd-file-rail")}};n(Vt,"$FileRail");let Ve=Vt;const es=class es extends de{constructor(){super(...arguments),this.style=y.button`
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
    `}get paragraphs(){return(this.chapter?.text.find(W)??[]).flatMap(e=>e.text.find(f)).slice(0,16).map(e=>O.copy(e.text))}$FilePanelGrip(...e){this.$Switch(...e),this.containers.replace(this,"button",this.style)}write(){return r("span",{className:"pd-skeleton",children:this.paragraphs.map((e,t)=>r("i",{style:{width:`${Math.max(25,Math.min(100,e.length/4))}%`}},t))})}$Define(){super.$Define(),this.classes.add(this,"pd-file-panel-grip")}};n(es,"$FilePanelGrip");let et=es;const jo=o(Ve),Ao=o(et),ts=class ts extends f{constructor(){super(...arguments),this.style=y.div`
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
    `}get spread(){return this.chapter?.annotations.expressed(D)}$FilePanel(...e){this.$Writing(...e),this.containers.replace(this,"span",this.style)}write(){const e=o(Io),t=o(Jo),a=this.spread;if(a!==void 0)return c(m,{children:[r(e,{chapter:this.chapter}),r("div",{className:"pd-file-listings",children:a.files.map(s=>r(t,{file:s,filePanelState:Ht,family:a.filePanelStates},ae(s)))})]})}$Define(){super.$Define(),this.classes.add(this,"pd-file-panel")}};n(ts,"$FilePanel");let tt=ts;const ss=class ss extends f{constructor(){super(...arguments),this.style=y.div`
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
    `}get spread(){return this.chapter?.annotations.expressed(D)}$FilePanelBar(...e){this.$Writing(...e),this.containers.replace(this,"span",this.style)}write(){const e=o(Ft),t=o($o),a=o(mo),s=this.spread,i=this.chapter;if(s!==void 0)return c(m,{children:[s.files.map(d=>r(e,{file:d},ae(d))),r("span",{className:"pd-words-only",children:r(t,{chapter:i,annotation:Ga,family:s.filePanelStates,children:"words"})}),r("span",{className:"pd-dock pd-to-full",children:r(t,{chapter:i,annotation:Ht,family:s.filePanelStates,children:"full screen"})}),r("span",{className:"pd-dock pd-to-split",children:r(t,{chapter:i,annotation:pe,family:s.filePanelStates,children:"split"})}),c("span",{className:"pd-options",children:[r(a,{chapter:i,annotation:Oo,children:"light"}),r(a,{chapter:i,annotation:Do,children:"wrap"}),r(a,{chapter:i,annotation:Po,children:"lines"})]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-file-panel-bar")}};n(ss,"$FilePanelBar");let st=ss;const Co=o(tt),Mo=o(st),Io=Mo;var To=Object.defineProperty,No=Object.getOwnPropertyDescriptor,Wo=n((p,e,t,a)=>{for(var s=No(e,t),i=p.length-1,d;i>=0;i--)(d=p[i])&&(s=d(e,t,s)||s);return s&&To(e,t,s),s},"__decorateClass$b");const as=class as extends Y{constructor(){super(...arguments),this.specification=new me,this.$openFile=void 0,this.grid=y.div`
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
    `}get files(){return this.parent.annotations.find(Ia).reverse()}get openFile(){return this.$openFile??this.files[0]}get filePanelStates(){return[Ga,pe,Ht]}$Spread(...e){this.$Format(...e);const t=this.grid,a=o(Co),s=o(jo),i=o(Ao);this.style=({className:d,children:A})=>{const z=this.parent,g=[...z.classes].includes("pa-open");return c(t,{className:`${d??""}${g?" pa-open":""}`.trim(),children:[r("div",{className:"pd-words",children:A}),g?c(m,{children:[r(a,{chapter:z}),r(s,{chapter:z}),r(i,{chapter:z,annotation:pe,family:this.filePanelStates})]}):void 0]})}}defines(e){super.defines(e),e.classes.add(this,"pa-spread")}erase(e){super.erase(e),e.classes.revert(this)}};n(as,"$Spread");let D=as;const os=class os extends b{$isAChapter(e){l(e instanceof $,"a spread is a chapter read beside its files, and this is not a chapter")}};n(os,"SpreadSpecification");let me=os;Wo([h("a spread is a chapter read beside its files")],me.prototype,"$isAChapter");const on=o(D);var _o=Object.defineProperty,Ho=Object.getOwnPropertyDescriptor,Ya=n((p,e,t,a)=>{for(var s=Ho(e,t),i=p.length-1,d;i>=0;i--)(d=p[i])&&(s=d(e,t,s)||s);return s&&_o(e,t,s),s},"__decorateClass$a");const rs=class rs extends Y{constructor(){super(...arguments),this.specification=new ce,this.style=y.div`
        .pa-coloured { --colour: ${e=>e.$colour}; }
    `}get colour(){return O.copy(this.text).trim()}$Coloured(...e){this.$Format(...e);const t=this.style;this._painted=a=>r(t,{$colour:this.colour,...a})}defines(e){e.classes.add(this,"pa-coloured"),e.containers.add(this,this._painted)}erase(e){e.classes.revert(this),e.containers.revert(this)}};n(rs,"$Coloured");let B=rs;const ns=class ns extends b{$saidOfAChapterOrAParagraph(e){l(e instanceof $||e instanceof f,"coloured is said of a chapter or a paragraph, and this is neither")}$givenItsColour(e){l(/^#[0-9a-f]{6}$/iu.test(e.annotations.expressed(B)?.colour??""),"coloured is given its colour as six hex digits, and this one was given something else")}};n(ns,"ColouredSpecification");let ce=ns;Ya([h("coloured is said of a chapter or a paragraph")],ce.prototype,"$saidOfAChapterOrAParagraph");Ya([h("coloured is given its colour")],ce.prototype,"$givenItsColour");const rn=o(B);var Lo=Object.defineProperty,Fo=Object.getOwnPropertyDescriptor,Lt=n((p,e,t,a)=>{for(var s=Fo(e,t),i=p.length-1,d;i>=0;i--)(d=p[i])&&(s=d(e,t,s)||s);return s&&Lo(e,t,s),s},"__decorateClass$9");const is=class is extends Y{constructor(){super(...arguments),this.specification=new U}get identifier(){return ne.reference(O.copy(this.text))?.identifier??""}get name(){return ne.reference(O.copy(this.text))?.name??""}get entry(){return this.book?.chapterAt(this.identifier)}get drawing(){const e=this.entry?.text.find(f).flatMap(t=>t.text.find(Ye))[0];return e===void 0?"":O.copy(e.text).trim()}get colour(){return this.entry?.annotations.expressed(B)?.colour??""}$Keyed(...e){this.$Format(...e);const t=o(Ro);this._layer=a=>c("div",{...a,children:[r(t,{keyed:this}),a.children]})}defines(e){e.classes.add(this,"pa-keyed"),e.containers.add(this,this._layer)}erase(e){e.classes.revert(this),e.containers.revert(this)}};n(is,"$Keyed");let F=is;const ds=class ds extends P{constructor(){super(...arguments),this.style=y.span`
        --colour: ${e=>e.$colour};
    `}$Icon(...e){this.$Writing(...e);const t=this.style;this._painted=a=>r(t,{$colour:this.$keyed?.colour??"",...a}),this.containers.replace(this,"span",this._painted)}write(){return r("span",{className:"pd-drawing",role:"img","aria-label":this.$keyed?.name,dangerouslySetInnerHTML:{__html:this.$keyed?.drawing??""}})}$Define(){super.$Define(),this.classes.add(this,"pd-icon")}};n(ds,"$Icon");let at=ds;const ps=class ps extends b{$saidOfAChapter(e){l(e instanceof $,"keyed is said of a chapter, and this is not one")}$namesAnEntry(e){const t=e.annotations.expressed(F)?.entry;l(t!==void 0&&t.annotations.expressed(F)?.entry===t,"keyed names an entry of the key, a chapter of this book keyed as itself, and this one names something else")}$entryHoldsItsDrawingAndColour(e){const t=e.annotations.expressed(F)?.entry;t!==void 0&&l(t.text.find(f).flatMap(a=>a.text.find(Ye)).length===1&&t.is(B),"an entry of the key holds one drawing and its colour, and this one holds something else")}};n(ps,"KeyedSpecification");let U=ps;Lt([h("keyed is said of a chapter")],U.prototype,"$saidOfAChapter");Lt([h("keyed names an entry of the key")],U.prototype,"$namesAnEntry");Lt([h("an entry of the key holds one drawing and its colour")],U.prototype,"$entryHoldsItsDrawingAndColour");const nn=o(F),Bo=o(at),Ro=Bo;var Eo=Object.defineProperty,Go=Object.getOwnPropertyDescriptor,Yo=n((p,e,t,a)=>{for(var s=Go(e,t),i=p.length-1,d;i>=0;i--)(d=p[i])&&(s=d(e,t,s)||s);return s&&Eo(e,t,s),s},"__decorateClass$8");const So={tsx:"typescript",ts:"typescript",mjs:"javascript",js:"javascript",css:"css",html:"xml",svg:"xml",json:"json",md:"markdown"},Zo='<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"><path d="M6 4.5 3.5 8 6 11.5M10 4.5 12.5 8 10 11.5"/></svg>',ae=n(p=>`${p.$identifier}${p.$type}`,"fileNameOf"),qo=n(p=>p===void 0?[]:O.copy(p.text).split(`
`),"fileLinesOf"),Sa=n(p=>p?.chapter?.annotations.expressed(D),"spreadOf"),cs=class cs extends f{constructor(){super(...arguments),this.$family=[]}get name(){return this.$file===void 0?"":ae(this.$file)}get language(){return So[(this.$file?.$type??"").replace(/^\./u,"")]??""}get spread(){return Sa(this.$file)}get chapter(){return this.$file?.chapter??super.chapter}$FileListing(...e){this.$Writing(...e),this.containers.replace(this,"span","div")}container(e){return super.container({onClick:n(()=>this.press(),"onClick"),...e})}press(){if(this.$filePanelState===void 0)return;const e=this.book,t=[e.$is].flat().filter(a=>!this.$family.includes(a));e.$is=[this.$filePanelState,...t]}write(){const e=o(M),t=o(oo);return c(m,{children:[r(e,{children:this.name}),r(t,{identifier:this.$file?.$identifier,type:this.$file?.$type,language:this.language,numbered:!0})]})}$Define(){super.$Define(),this.classes.add(this,"pd-file-listing");const e=o(Uo);this.annotations.add(this,r(e,{}))}};n(cs,"$FileListing");let $e=cs;const ls=class ls extends u{constructor(){super(...arguments),this.specification=new ke}defines(e){const t=e;t.$file!==void 0&&t.spread?.openFile===t.$file&&e.classes.add(this,"pa-open")}erase(e){e.classes.revert(this)}};n(ls,"$OpenListing");let ot=ls;const hs=class hs extends b{$isAFileListing(e){l(e instanceof $e,"an open listing is a file listing, and this is not one")}};n(hs,"OpenListingSpecification");let ke=hs;Yo([h("an open listing is a file listing")],ke.prototype,"$isAFileListing");const fs=class fs extends de{constructor(){super(...arguments),this.$skeleton=!1,this.style=y.button`
        --colour: ${e=>e.$colour};
    `}get on(){const e=this.$file?.chapter;return e!==void 0&&e===this.book.open&&this.spread?.openFile===this.$file}get name(){return this.$file===void 0?"":ae(this.$file)}get spread(){return Sa(this.$file)}get colour(){return this.$file?.chapter?.annotations.expressed(F)?.colour??""}get lines(){return qo(this.$file)}get chapter(){return this.$file?.chapter??super.chapter}$FileTab(...e){this.$Switch(...e),this.containers.replace(this,"button",this.style)}container(e){return super.container({$colour:this.colour,...e})}press(){const e=this.spread;e!==void 0&&(e.$openFile=this.$file),this.$annotation!==void 0&&super.press()}write(){return c(m,{children:[r("span",{className:"pd-drawing",dangerouslySetInnerHTML:{__html:Zo}}),r("span",{className:"pd-tab-name",children:this.name}),this.$skeleton?r("span",{className:"pd-skeleton",children:this.lines.slice(0,14).map((e,t)=>r("i",{style:{width:`${Math.max(12,Math.min(100,e.length*2.2))}%`}},t))}):void 0]})}$Define(){super.$Define(),this.classes.add(this,"pd-file-tab")}};n(fs,"$FileTab");let rt=fs;const Jo=o($e),Qo=o(ot),Ft=o(rt),Uo=Qo;var Xo=Object.defineProperty,Ko=Object.getOwnPropertyDescriptor,Bt=n((p,e,t,a)=>{for(var s=Ko(e,t),i=p.length-1,d;i>=0;i--)(d=p[i])&&(s=d(e,t,s)||s);return s&&Xo(e,t,s),s},"__decorateClass$7");const bs=class bs extends u{constructor(){super(...arguments),this.specification=new X}get date(){return this.text.find(Ta)[0]}defines(e){e.classes.add(this,"pa-dated")}erase(e){e.classes.revert(this)}note(){const e=o(this.date);return r(e,{})}};n(bs,"$Dated");let _=bs;const gs=class gs extends b{$saidOfAChapter(e){l(e instanceof $,"dated is said of a chapter, and this is not one")}$datedOnce(e){l(e.annotations.containsOne(_),"a chapter is dated once, and this one is dated more than once")}$givenOneDate(e){l(e.annotations.expressed(_)?.text.find(Ta).length===1,"a dated chapter is given one date, and this one is given none or more than one")}};n(gs,"DatedSpecification");let X=gs;Bt([h("dated is said of a chapter")],X.prototype,"$saidOfAChapter");Bt([h("a chapter is dated once")],X.prototype,"$datedOnce");Bt([h("a dated chapter is given one date")],X.prototype,"$givenOneDate");const dn=o(_);var Vo=Object.defineProperty,er=Object.getOwnPropertyDescriptor,tr=n((p,e,t,a)=>{for(var s=er(e,t),i=p.length-1,d;i>=0;i--)(d=p[i])&&(s=d(e,t,s)||s);return s&&Vo(e,t,s),s},"__decorateClass$6");const us=class us extends u{constructor(){super(...arguments),this.specification=new ve}defines(e){e.classes.add(this,"pa-label")}erase(e){e.classes.revert(this)}};n(us,"$Label");let nt=us;const ms=class ms extends b{$saidOfAWord(e){l(e instanceof P,"label is said of a word, and this is not one")}};n(ms,"LabelSpecification");let ve=ms;tr([h("label is said of a word")],ve.prototype,"$saidOfAWord");const Se=o(nt),$s=class $s extends f{get cover(){return this.$cover??this.book?.cover}write(){const e=this.cover.annotations.expressed(_t),t=o(M),a=o(Se),s=o(x);return c(m,{children:[c(t,{children:[r(a,{}),"by"]}),c(t,{children:[r(s,{children:e.means.identifier}),e.name]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-byline")}};n($s,"$Byline");let it=$s;const ks=class ks extends f{get cover(){return this.$cover??this.book?.cover}write(){const e=this.cover.annotations.expressed(Na),t=o(M),a=o(Se),s=o(x);return c(m,{children:[c(t,{children:[r(a,{}),"subject"]}),c(t,{children:[r(s,{children:e.means.identifier}),e.name]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-subject-line")}};n(ks,"$SubjectLine");let dt=ks;const vs=class vs extends f{get cover(){return this.$cover??this.book?.cover}get topics(){return this.cover?.annotations.find(Wa)??[]}write(){const e=o(M),t=o(Se),a=o(x);return c(m,{children:[c(e,{children:[r(t,{}),"topic"]}),this.topics.map((s,i)=>c(e,{children:[r(a,{children:s.means.identifier}),s.name]},i))]})}$Define(){super.$Define(),this.classes.add(this,"pd-topic-line")}};n(vs,"$TopicLine");let pt=vs;const sr=o(it),pn=o(dt),ar=o(pt);var or=Object.defineProperty,rr=Object.getOwnPropertyDescriptor,Z=n((p,e,t,a)=>{for(var s=rr(e,t),i=p.length-1,d;i>=0;i--)(d=p[i])&&(s=d(e,t,s)||s);return s&&or(e,t,s),s},"__decorateClass$5");const Rt=n((p,e)=>{const t=new Set(p.text.find(e));return p.text.find(io).flatMap(a=>[...t.has(a)?[a]:[],...Rt(a,e)])},"within"),ys=class ys extends u{constructor(){super(...arguments),this.specification=new R}get identifier(){return ne.reference(O.copy(this.text))?.identifier??""}get name(){return ne.reference(O.copy(this.text))?.name??""}get cover(){const e=this.identifier;return this.chapter?.annotations.find(E).map(t=>t.cover).find(t=>t?.mention?.identifier===e)}defines(e){e.classes.add(this,"pa-design")}erase(e){e.classes.revert(this)}};n(ys,"$Design");let w=ys;const xs=class xs extends u{constructor(){super(...arguments),this.specification=new xe}defines(e){e.classes.add(this,"pa-exhibit")}erase(e){e.classes.revert(this)}};n(xs,"$Exhibit");let ye=xs;const ws=class ws extends u{constructor(){super(...arguments),this.specification=new we,this.$number=0,this.span=y.span.attrs({className:"pd-plate"})``}note(){const e=this.span;return c(m,{children:[r(e,{children:String(this.$number).padStart(2,"0")}),r("span",{className:"pd-jacket-mini"})]})}defines(e){e.classes.add(this,"pa-plate")}erase(e){e.classes.revert(this)}};n(ws,"$Plate");let ct=ws;const zs=class zs extends Y{constructor(){super(...arguments),this.specification=new ze,this.themeProvider=!0,this.room=y.div`
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
    `}get chapter(){return this.parent}get design(){return this.chapter.annotations.expressed(w)}get plate(){return this.book.chapters.filter(e=>e.is(w)).indexOf(this.chapter)+1}$Room(...e){this.$Format(...e);const t=this.room;this.style=({className:a,children:s})=>{const i=[...this.chapter.classes].includes("pa-open");return J(this.design?.cover,c(t,{className:`${a??""} pd-room${i?" pa-open":""}`.trim(),children:[r("span",{className:"pd-plate",children:String(this.plate).padStart(2,"0")}),s]}))}}defines(e){super.defines(e),e.classes.add(this,"pa-room")}erase(e){super.erase(e),e.classes.revert(this)}};n(zs,"$Room");let lt=zs;const Os=class Os extends f{get references(){const e=this.book?.means?.identifier??"",t=new Map;for(const a of Rt(this.chapter,P)){if(a.parent===this)continue;const s=a.annotations.expressed(ro)?.identifier;if(s===void 0||s.startsWith(e)||t.has(s))continue;const i=O.copy(a.text);t.set(s,ne.reference(i)?.name??i.trim())}return[...t]}write(){const e=o(M),t=o(x);return this.references.map(([a,s],i)=>c(e,{children:[r(t,{children:a}),s,r("span",{className:"pd-where",children:a.replace(/^\/dougs-/u,"").replace(/\/#?/u," · ").replace(/ · $/u,"").replace(/-/gu," ")})]},i))}$Define(){super.$Define(),this.classes.add(this,"pd-built-in")}};n(Os,"$BuiltIn");let ht=Os;const Ds=class Ds extends b{$isAChapter(e){l(e instanceof $,"a design is a chapter, and this is not one")}$namesABook(e){l((e.annotations.expressed(w)?.identifier??"")!=="","a design names the book it is of, and this one names nothing")}$holdsTheCover(e){l(e.annotations.expressed(w)?.cover!==void 0,"a design holds the cover of the book it is of, as a volume, and this one holds none")}$showsItselfAsBuilt(e){l(e instanceof $&&Rt(e,f).some(t=>t.is(ye)),"a design shows itself as built, in a paragraph said to be the exhibit, and this one shows nothing")}};n(Ds,"DesignSpecification");let R=Ds;Z([h("a design is a chapter")],R.prototype,"$isAChapter");Z([h("a design names the book it is of")],R.prototype,"$namesABook");Z([h("a design holds the cover of the book it is of")],R.prototype,"$holdsTheCover");Z([h("a design shows itself as built")],R.prototype,"$showsItselfAsBuilt");const Ps=class Ps extends b{$isAParagraphOfADesignHoldingOneImage(e){l(e instanceof f&&e.chapter?.is(w)===!0&&e.text.find(no).length===1,"an exhibit is a paragraph of a design that holds one image, and this is not one")}};n(Ps,"ExhibitSpecification");let xe=Ps;Z([h("an exhibit is a paragraph of a design that holds one image")],xe.prototype,"$isAParagraphOfADesignHoldingOneImage");const js=class js extends b{$saidOfAnEntryLeadingToADesign(e){l(e.is(ee)&&e.annotations.expressed(ee)?.referencedChapter?.is(w)===!0,"a plate is said of an entry that leads to a design, and this is not one")}};n(js,"PlateSpecification");let we=js;Z([h("a plate is said of an entry that leads to a design")],we.prototype,"$saidOfAnEntryLeadingToADesign");const As=class As extends b{$isADesign(e){l(e instanceof $&&e.is(w),"a room is a chapter that is a design, and this is not one")}};n(As,"RoomSpecification");let ze=As;Z([h("a room is a chapter that is a design")],ze.prototype,"$isADesign");const cn=o(w),ln=o(ye),hn=o(ct),fn=o(lt),bn=o(ht);var nr=Object.defineProperty,ir=Object.getOwnPropertyDescriptor,j=n((p,e,t,a)=>{for(var s=ir(e,t),i=p.length-1,d;i>=0;i--)(d=p[i])&&(s=d(e,t,s)||s);return s&&nr(e,t,s),s},"__decorateClass$4");const J=n((p,e,t)=>{const a=p?.annotations.expressed(N)?.painted;return a===void 0?e:r(a,{children:e},t)},"painted"),Cs=class Cs extends C{constructor(){super(...arguments),this.specification=new V}get name(){return this.chapter?.title?.name??""}get author(){return this.chapter?.annotations.expressed(_t)?.name??""}get illustration(){return this.chapter?.text.find(f).find(e=>e.is(le))}get drawing(){const e=this.illustration?.text.find(Ye)[0];return e===void 0?"":O.copy(e.text).trim()}get scheme(){return this.chapter?.annotations.expressed(N)}get window(){return this.chapter?.annotations.expressed(K)}};n(Cs,"$BookshelfCover");let Oe=Cs;const Ms=class Ms extends u{constructor(){super(...arguments),this.specification=new je}defines(e){e.classes.add(this,"pa-illustration")}erase(e){e.classes.revert(this)}};n(Ms,"$Illustration");let le=Ms;const Is=class Is extends Y{constructor(){super(...arguments),this.specification=new he,this.$ground="",this.$band="",this.$bandInk="",this.$foot="",this.$footInk="",this.$ink="",this.style=y.div.attrs({className:"pd-scheme"})`
        ${e=>e.$scheme}
    `}get colours(){return[this.$ground,this.$band,this.$bandInk,this.$foot,this.$footInk,this.$ink]}get declarations(){return`--ground: ${this.$ground}; --band: ${this.$band}; --band-ink: ${this.$bandInk}; --foot: ${this.$foot}; --foot-ink: ${this.$footInk}; --ink: ${this.$ink};`}get painted(){return this._painted}$Scheme(...e){this.$Format(...e);const t=this.style;this._painted=a=>r(t,{$scheme:this.declarations,...a})}defines(e){e.classes.add(this,"pa-scheme"),e.containers.add(this,this._painted)}erase(e){e.classes.revert(this),e.containers.revert(this)}};n(Is,"$Scheme");let N=Is;const Ts=class Ts extends u{constructor(){super(...arguments),this.specification=new fe,this.$x="",this.$y=""}get declarations(){return`--window-x: ${this.$x}px; --window-y: ${this.$y}px;`}};n(Ts,"$Window");let K=Ts;const Ns=class Ns extends u{constructor(){super(...arguments),this.specification=new be}get cover(){return this._cover}get jacket(){return this._cover?.annotations.expressed(C)}$Volume(...e){this._cover=e.find(t=>t instanceof $),this.$Annotation(...e.filter(t=>t!==this._cover))}defines(e){e.classes.add(this,"pa-volume")}erase(e){e.classes.revert(this)}};n(Ns,"$Volume");let E=Ns;const Ws=class Ws extends f{get cover(){return this.$cover?.annotations.expressed(C)}$Jacket(...e){this.$Writing(...e),this._painted=t=>{const a=this.cover?.scheme?.painted;return a===void 0?r("div",{...t}):r(a,{...t})},this.containers.add(this,this._painted)}write(){const e=this.cover;if(e===void 0)return;const t=o(M),a=o(Se);return c(m,{children:[r(t,{children:e.name}),r("span",{className:"pd-drawing",dangerouslySetInnerHTML:{__html:e.drawing}}),c(t,{children:[r(a,{}),e.author]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-jacket")}};n(Ws,"$Jacket");let ft=Ws;const _s=class _s extends f{constructor(){super(...arguments),this.unfolded=!1}get filedElsewhere(){return this.$subject!==void 0&&this.$subject!==this.$cover}container(e){return super.container({onMouseOver:n(t=>{t.target instanceof Element&&t.target.closest(".pd-filed")!==null&&this.unfold()},"onMouseOver"),onMouseLeave:n(()=>this.fold(),"onMouseLeave"),...e})}unfold(){this.unfolded=!0}fold(){this.unfolded=!1}write(){const e=this.$cover,t=this.$subject;if(e!==void 0)return c(m,{children:[this.filedElsewhere?J(t,r("span",{className:"pd-filed",children:this.mark(t)})):void 0,J(e,r("span",{className:"pd-own",children:this.mark(e)})),c("span",{className:"pd-names",children:[J(e,r("span",{className:"pd-name",children:this.name(e)})),this.filedElsewhere?J(t,r("span",{className:"pd-name pd-under",children:this.name(t)})):void 0]})]})}mark(e){const t=o(fr),a=o(x);return r(t,{cover:e,children:r(a,{children:e.mention.identifier})})}name(e){const t=o(M),a=o(x);return c(t,{children:[r(a,{children:e.mention.identifier}),e.title.name]})}$Define(){super.$Define(),this.classes.add(this,"pd-logo");const e=o(br);this.annotations.add(this,r(e,{}))}};n(_s,"$Logo");let De=_s;const Hs=class Hs extends u{constructor(){super(...arguments),this.specification=new Pe}defines(e){e.unfolded&&e.classes.add(this,"pa-unfolded")}erase(e){e.classes.revert(this)}};n(Hs,"$Unfolded");let bt=Hs;const Ls=class Ls extends b{$saidOfALogo(e){l(e instanceof De,"unfolded is said of a logo, and this is not one")}};n(Ls,"UnfoldedSpecification");let Pe=Ls;j([h("unfolded is said of a logo")],Pe.prototype,"$saidOfALogo");const dr=n(p=>{const e=p?.annotations.expressed(C);return{drawing:e?.drawing??"",declarations:`${e?.scheme?.declarations??""} ${e?.window?.declarations??""}`}},"markingOf"),Fs=class Fs extends P{constructor(){super(...arguments),this.style=y.span`
        ${e=>e.$vars}
    `}get cover(){return this.$cover?.annotations.expressed(C)}get marking(){return dr(this.$cover)}$Mark(...e){this.$Writing(...e);const t=this.style;this._painted=a=>r(t,{$vars:this.marking.declarations,...a}),this.containers.add(this,this._painted)}write(){return r("span",{className:"pd-drawing",dangerouslySetInnerHTML:{__html:this.marking.drawing}})}$Define(){super.$Define(),this.classes.add(this,"pd-mark")}};n(Fs,"$Mark");let gt=Fs;const Bs=class Bs extends po{$carriesItsScheme(e){l(e.is(N),"a bookshelf cover carries its scheme, and this one carries none")}$carriesItsWindow(e){l(e.is(K),"a bookshelf cover carries its window, and this one carries none")}$carriesItsIllustration(e){l(e instanceof $&&e.text.find(f).some(t=>t.is(le)),"a bookshelf cover carries its illustration, and this one carries none")}};n(Bs,"BookshelfCoverSpecification");let V=Bs;j([h("a bookshelf cover carries its scheme")],V.prototype,"$carriesItsScheme");j([h("a bookshelf cover carries its window")],V.prototype,"$carriesItsWindow");j([h("a bookshelf cover carries its illustration")],V.prototype,"$carriesItsIllustration");const Rs=class Rs extends b{$saidOfADrawing(e){l(e instanceof f&&e.chapter?.is(C)===!0&&e.text.find(Ye).length===1,"an illustration is a paragraph of a cover that holds one drawing, and this is not one")}};n(Rs,"IllustrationSpecification");let je=Rs;j([h("an illustration is a paragraph of a cover that holds one drawing")],je.prototype,"$saidOfADrawing");const Es=class Es extends b{$isACover(e){l(e instanceof $&&e.is(C),"a cover has a scheme, and this is not a cover")}$givenItsColours(e){const t=e.annotations.expressed(N)?.colours??[];l(t.every(a=>/^#[0-9a-f]{6}$/iu.test(a)),"a scheme is given its six colours as six hex digits each — the ground, the band and its ink, the foot and its ink, and the ink of the drawing — and this one was given something else")}};n(Es,"SchemeSpecification");let he=Es;j([h("a cover has a scheme")],he.prototype,"$isACover");j([h("a scheme is given its six colours")],he.prototype,"$givenItsColours");const Gs=class Gs extends b{$isACover(e){l(e instanceof $&&e.is(C),"a cover has a window, and this is not a cover")}$givenItsPlace(e){const t=e.annotations.expressed(K);l(/^-?\d+$/u.test(t?.$x??"")&&/^-?\d+$/u.test(t?.$y??""),"a window is given where it stands on the drawing, two whole numbers, and this one was given something else")}};n(Gs,"WindowSpecification");let fe=Gs;j([h("a cover has a window")],fe.prototype,"$isACover");j([h("a window is given where it stands on the drawing")],fe.prototype,"$givenItsPlace");const Ys=class Ys extends b{$saidOfAChapterStandingForABook(e){l(e instanceof $&&(e.is(Oa)||e.is(C)||e.is(w)),"a volume is a chapter that stands for another book, a synopsis of it, a cover filed under it or a design of it, and this is none")}$holdsTheCover(e){const t=[e.annotations.expressed(Oa)?.means?.identifier,e.annotations.expressed(Na)?.means?.identifier,e.annotations.expressed(_t)?.means?.identifier,e.annotations.expressed(w)?.identifier,...[...e.annotations].map(a=>a.means?.identifier)];l(e.annotations.find(E).every(a=>a.cover?.is(C)===!0&&t.includes(a.cover.mention?.identifier)),"a volume holds the cover of a book its chapter stands for or names, the book a synopsis or a design is of, the subject or author a cover is filed under or a book another line of the cover names, and one here holds something else")}};n(Ys,"VolumeSpecification");let be=Ys;j([h("a volume is a chapter that stands for another book")],be.prototype,"$saidOfAChapterStandingForABook");j([h("a volume holds the cover of a book its chapter stands for or names")],be.prototype,"$holdsTheCover");const pr=o(Oe),Za=o(le),qa=o(N),Ja=o(K),cr=o(E),gn=o(ft),lr=o(De),hr=o(bt),Qa=o(gt),fr=Qa,br=hr;var gr=Object.defineProperty,ur=Object.getOwnPropertyDescriptor,oe=n((p,e,t,a)=>{for(var s=ur(e,t),i=p.length-1,d;i>=0;i--)(d=p[i])&&(s=d(e,t,s)||s);return s&&gr(e,t,s),s},"__decorateClass$3");const Ua='<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3.5 10.5 8 6 12.5"/></svg>',mr='<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linejoin="round" stroke-linecap="round"><rect class="ground" x="0.75" y="0.75" width="14.5" height="14.5"/><path d="M3.5 5.5h3l1.5 1.5h4.5v5h-9z"/></svg>',Ss=class Ss extends Y{constructor(){super(...arguments),this.specification=new Ne,this.style=y.div`
        ${e=>e.$schemeDeclarations===void 0?"":`.pa-entry { ${e.$schemeDeclarations} }`}
    `}get place(){return I(this.parent).identifier}get referencedChapter(){return this.book.chapterAt(this.place)}get cover(){return this.referencedChapter?.annotations.expressed(E)?.cover??this.book.coverOf(this.place)}get schemeDeclarations(){const e=this.cover?.annotations.expressed(N);if(e!==void 0)return e.declarations;const t=this.referencedChapter?.annotations.expressed(B)?.colour;return t===void 0?void 0:`--colour: ${t};`}$Entry(...e){this.$Format(...e);const t=this.style;this._painted=a=>r(t,{$schemeDeclarations:this.schemeDeclarations,...a})}defines(e){e.classes.add(this,"pa-entry"),e.containers.add(this,this._painted),(this.place===this.book?.$bookmark||this.place===this.book.open?.mention?.identifier)&&e.classes.add(this,"pa-open")}erase(e){e.classes.revert(this),e.containers.revert(this)}};n(Ss,"$Entry");let ee=Ss;const Zs=class Zs extends u{constructor(){super(...arguments),this.specification=new Te}defines(e){e.classes.add(this,"pa-appendix")}erase(e){e.classes.revert(this)}};n(Zs,"$Appendix");let Ae=Zs;const qs=class qs extends ao{constructor(){super(...arguments),this.$word=""}};n(qs,"$Sought");let ut=qs;const Js=class Js extends u{constructor(){super(...arguments),this.specification=new Ie,this.$folded=!1,this.$counted=!1,this.$dated=!1,this.$searched=!1}get word(){return Aa.$word}get sections(){return this.chapter.text.find(W)}get entries(){const e=n(t=>!t.is(co)&&I(t)!==void 0,"listed");return[...this.chapter.text].flatMap(t=>t instanceof W?t.text.find(f):t instanceof f?[t]:[]).filter(e)}get found(){return this.book.found(this.word)}chapterOf(e){const t=I(e)?.identifier;return t===void 0?void 0:this.book.chapterAt(t)}search(e){Aa.$word=e;const t=this.chapter,a=e.trim()!=="";if(t!==void 0&&a!==t.is(Ce)){const s=[t.$is].flat().filter(i=>i!==void 0&&i!==Ca);t.$is=a?[Ca,...s]:s}this.book.sought(e.trim())}$Bound(){const e=o(Cr),t=o(Ka),a=o(Ft),s=this.book;for(const g of this.entries){g.annotations.add(this,r(e,{}));const v=s.chapterAt(I(g).identifier)?.annotations.expressed(D);if(v===void 0)continue;const re=v.files;re.length===0&&!this.sections.some(L=>L.text.find(f).includes(g))||g.text.add(this,r(t,{foldedWriting:re.length===0?void 0:g,annotation:Dt}),...re.map(L=>r(a,{file:L,annotation:pe,family:v.filePanelStates},ae(L))))}const i=o(Xa),d=o(Tr),A=new Set(s.entries),z=n(g=>{const v=this.chapterOf(g);return v!==void 0&&A.has(v)},"leadsToAnEntry");if(this.$dated)for(const g of this.entries){const v=this.chapterOf(g);v===void 0||!A.has(v)||!v.is(_)||g.text.add(this,r(i,{entry:v}))}for(const g of this.sections){this.$folded&&(g.$is=[Dt]);const v=g.canonical;this.$counted&&v!==void 0&&g.text.find(f).some(z)&&v.text.add(this,r(d,{section:g}))}super.$Bound()}};n(Js,"$Index");let H=Js;const Qs=class Qs extends u{constructor(){super(...arguments),this.specification=new Me}defines(e){e.classes.add(this,"pa-searching")}erase(e){e.classes.revert(this)}};n(Qs,"$Searching");let Ce=Qs;const Us=class Us extends b{$saidOfATable(e){l(e.is(S),"searching is said of a table of contents, the index's chapter, and this is not one")}};n(Us,"SearchingSpecification");let Me=Us;oe([h("searching is said of a table of contents")],Me.prototype,"$saidOfATable");const Xs=class Xs extends f{get index(){return this.book?.table?.annotations.expressed(H)}$Search(...e){this.$Writing(...e),this.containers.replace(this,"span","div")}write(){const e=this.index,t=this.book;if(!(e===void 0||t===void 0))return c(m,{children:[r("span",{className:"pd-search-mark","aria-hidden":"true",children:"⌕"}),r("input",{className:"pd-search-word",type:"search",value:e.word,placeholder:t.searchHint,"aria-label":"search",onInput:n(a=>e.search(a.target.value),"onInput")})]})}$Define(){super.$Define(),this.classes.add(this,"pd-search")}};n(Xs,"$Search");let mt=Xs;const Ks=class Ks extends f{get index(){return this.book?.table?.annotations.expressed(H)}$Results(...e){this.$Writing(...e),this.containers.replace(this,"span","div")}write(){const e=this.index,t=this.book;if(e===void 0||t===void 0)return;const a=e.word.trim();if(a==="")return;const s=t.found(a);return c(m,{children:[r("span",{className:"pd-results-count",children:t.countOfFound(s,a)}),s.map((i,d)=>this.result(i,d))]})}result(e,t){const a=o(Mr);return r(a,{chapter:this.chapter,hit:e},this.book.placeOf(e)??t)}$Define(){super.$Define(),this.classes.add(this,"pd-results")}};n(Ks,"$Results");let $t=Ks;const Vs=class Vs extends P{write(){}$Define(){super.$Define(),this.classes.add(this,"pd-entry-open")}};n(Vs,"$EntryOpen");let kt=Vs;const ea=class ea extends f{get index(){return this.book?.table?.annotations.expressed(H)}$Result(...e){this.$Writing(...e),this.containers.replace(this,"span","div")}write(){const e=this.book,t=this.$hit,a=this.index;if(e===void 0||t===void 0||a===void 0)return;const s=a.word.trim(),i=e.wordsOf(t),d=e.placeOf(t),A=o(x),z=o(Xa),g=o(this.open());return c(m,{children:[r("span",{className:"pd-result-title",children:ja(i.title,s)}),t instanceof $&&t.is(_)?r(z,{entry:t}):void 0,r("span",{className:"pd-result-synopsis",children:ja($r(i.text,s),s)}),d===void 0?void 0:r(g,{entry:t,children:r(A,{children:d})})]})}open(){return Ir}$Define(){super.$Define(),this.classes.add(this,"pd-result")}};n(ea,"$Result");let vt=ea;const $r=n((p,e)=>{if(p.length<=190)return p;const t=p.toLowerCase().indexOf(e.toLowerCase());if(t<150)return`${p.slice(0,187)}…`;const a=p.lastIndexOf(" ",t-90)+1;return`…${p.slice(a,a+186)}…`},"clipped"),ja=n((p,e)=>{if(e==="")return p;const t=p.toLowerCase(),a=e.toLowerCase(),s=[];let i=0;for(let d=t.indexOf(a);d!==-1;d=t.indexOf(a,i))s.push(p.slice(i,d),r("mark",{children:p.slice(d,d+e.length)},d)),i=d+e.length;return s.push(p.slice(i)),s},"marked"),ta=class ta extends P{write(){const[e,t,a]=(this.$entry?.annotations.expressed(_)?.date?.date??"").split("-");if(!(e===void 0||t===void 0||a===void 0))return new Date(Date.UTC(Number(e),Number(t)-1,Number(a.slice(0,2)))).toLocaleString("en-GB",{day:"numeric",month:"short",timeZone:"UTC"})}$Define(){super.$Define(),this.classes.add(this,"pd-entry-day")}};n(ta,"$EntryDay");let yt=ta;const sa=class sa extends P{write(){return String(this.$section?.text.find(f).filter(e=>I(e)!==void 0).length??0)}$Define(){super.$Define(),this.classes.add(this,"pd-section-count")}};n(sa,"$SectionCount");let xt=sa;const aa=class aa extends b{$isATableOfContents(e){l(e.is(S),"an index is a table of contents, and this chapter is not one")}};n(aa,"IndexSpecification");let Ie=aa;oe([h("an index is a table of contents")],Ie.prototype,"$isATableOfContents");const oa=class oa extends b{$isASectionOfTheTable(e){l(e instanceof W&&e.chapter?.is(S)===!0,"the appendix is a section of the table of contents, and this is not one")}};n(oa,"AppendixSpecification");let Te=oa;oe([h("the appendix is a section of the table of contents")],Te.prototype,"$isASectionOfTheTable");const ra=class ra extends b{$isARowThatLeadsSomewhere(e){l(e instanceof f&&I(e)!==void 0,"an entry is a row that leads somewhere, and this is not one")}};n(ra,"EntrySpecification");let Ne=ra;oe([h("an entry is a row that leads somewhere")],Ne.prototype,"$isARowThatLeadsSomewhere");const na=class na extends u{constructor(){super(...arguments),this.specification=new _e}defines(e){e.classes.add(this,"pa-folded")}erase(e){e.classes.revert(this)}};n(na,"$Folded");let wt=na;const ia=class ia extends ie{get on(){return this.$foldedWriting!==void 0&&[this.$foldedWriting.$is].flat().includes(this.$annotation)}container(e){return super.container({...e,disabled:this.$foldedWriting===void 0,onClick:n(t=>{t.preventDefault(),this.press()},"onClick")})}press(){const e=this.$foldedWriting;if(e===void 0)return;const t=[e.$is].flat();e.$is=this.on?t.filter(a=>a!==this.$annotation):[this.$annotation,...t]}write(){return r("span",{className:"pd-drawing",dangerouslySetInnerHTML:{__html:Ua}})}$Define(){super.$Define(),this.classes.add(this,"pd-fold-chevron")}};n(ia,"$FoldChevron");let zt=ia;const da=class da extends Y{constructor(){super(...arguments),this.specification=new He,this.tree=y.div`
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
    `}get section(){return this.parent}get firstPlace(){return this.section.text.find(f).map(e=>I(e)).find(e=>e!==void 0)?.identifier}get part(){const e=this.firstPlace;return e===void 0?void 0:this.book.chapterAt(e)?.part}get open(){const e=this.book,t=e.open,a=e.$bookmark,s=this.section.mention?.identifier;return a!==void 0&&a.includes("#")&&this.section.text.find(f).some(d=>I(d)?.identifier===a)||t!==void 0&&t.part!==void 0&&t.part.name===this.part?.name||s!==void 0&&e.placeWithin(s)===a}$TreeFolder(...e){this.$Format(...e);const t=this.tree,a=o(Ka),s=o(M),i=o(x);this.style=({className:d,children:A})=>{const z=this.firstPlace,g=[...this.section.classes].includes("pa-open"),v=this.book.open!==void 0,re=this.chapter?.annotations.expressed(H)?.$folded===!0&&!(g&&v),L=r("span",{className:"pd-drawing pd-tree-folder-mark",dangerouslySetInnerHTML:{__html:mr}});return c(t,{className:`${d??""} pd-tree-folder${g?" pa-open":""}${re?" pa-foldable":""}`.trim(),children:[r(a,{foldedWriting:this.section,annotation:Dt}),z===void 0?L:c(s,{children:[r(i,{children:z}),L]}),A]})}}defines(e){super.defines(e),e.classes.add(this,"pa-tree-folder"),this.open&&e.classes.add(this,"pa-open")}erase(e){super.erase(e),e.classes.revert(this)}};n(da,"$TreeFolder");let We=da;const pa=class pa extends b{$saidOfASectionOrAnEntry(e){l(e instanceof W&&e.chapter?.is(S)===!0||e.is(ee),"folded is said of a section of a table of contents or of an entry, and this is neither")}};n(pa,"FoldedSpecification");let _e=pa;oe([h("folded is said of a section of a table of contents or of an entry")],_e.prototype,"$saidOfASectionOrAnEntry");const ca=class ca extends b{$isASectionOfTheTable(e){l(e instanceof W&&e.chapter?.is(S)===!0,"a tree folder is a section of the table of contents, and this is not one")}};n(ca,"TreeFolderSpecification");let He=ca;oe([h("a tree folder is a section of the table of contents")],He.prototype,"$isASectionOfTheTable");const la=class la extends f{get cover(){return this.$cover??this.book?.cover}write(){const e=this.cover,t=o(M),a=o(x);return c(t,{children:[r(a,{children:e.mention.identifier}),r("span",{className:"pd-drawing",dangerouslySetInnerHTML:{__html:Ua}}),e.title.name]})}$Define(){super.$Define(),this.classes.add(this,"pd-tree-root")}};n(la,"$TreeRoot");let Ot=la;const I=n(p=>p.annotations.expressed(Da)??p.text.find(P).map(e=>e.annotations.expressed(Da)).find(e=>e!==void 0),"contentOf"),kr=o(ee),un=o(H),vr=o(Ce),mn=o(mt),$n=o($t),yr=o(vt),xr=o(kt),wr=o(yt),zr=o(ut),Aa=o(r(zr,{})),Or=o(xt),kn=o(Ae),Dr=o(wt),Pr=o(zt),jr=o(We),Ar=o(Ot),Cr=kr,Ca=vr,Mr=yr,Ir=xr,Xa=wr,Tr=Or,Dt=Dr,Ka=Pr,ha=class ha extends lo{constructor(){super(...arguments),this.font="'Inter', system-ui, sans-serif",this.prose="'Inter', system-ui, sans-serif",this.mono="'JetBrains Mono', ui-monospace, monospace",this.size="0.875rem",this.leading="1.6",this.measure="44rem",this.spreadColumn="15.5rem",this.space="1.5rem",this.holdsColumn="240px",this.barHeight="50px",this.beat="320ms",this.narrow="48rem",this.phoneWidth="390px",this.colour="#4e9eb9",this.accent="#166178",this.bar="#0c1b1f",this.barInk="#ffffff",this.barDim="#a9bcc1",this.barOn="rgba(255, 255, 255, 0.11)",this.barLine="#1d3339",this.mark="#c8f4fb",this.side="#f8f9fb",this.sideInk="#10252c",this.sideDim="#727d8c",this.sideOn="#ffffff",this.sideLine="#e4e9f2",this.night="#0c1b1f",this.deep="#14323c",this.blue="#166178",this.sea="#4e9eb9",this.sky="#8fc8dc",this.opal="#c8f4fb",this.pale="#e3f5fa",this.mist="#f1f7f9",this.white="#ffffff",this.ink="#10252c",this.soft="#727d8c",this.line="#e4e9f2",this.me="#e8590c",this.wash="linear-gradient(105deg, #e2f6fb 0%, #ecf0fd 52%, #fae9f4 100%)",this.serif="'Source Serif 4', Georgia, serif",this.between="'Source Sans 3', 'Inter', system-ui, sans-serif",this.bookPaper="#fbf9f3",this.bookInk="#29251d",this.heading="#10252c",this.capital="#166178",this.lit="#166178",this.faint="#9ea8b5",this.paper="#ffffff",this.panel="#f1f7f9",this.rule="#e4e9f2",this.edge="transparent",this.tint="rgba(11, 11, 11, 0.05)",this.dusk="#14323c",this.glow="#cfe6e3",this.dim="#4f7672",this.keyword="#8ad7ff",this.string="#ffd48a",this.type="#9be3d6",this.comment="#5f8a86",this.haze="#a9bcc1",this.glass="rgba(255, 255, 255, 0.62)",this.binding="linear-gradient(160deg, #16303a, #0c1b1f)",this.spine="inset 5px 0 0 rgba(0, 0, 0, 0.14), inset 6px 0 0 rgba(255, 255, 255, 0.12), 0 10px 20px -10px rgba(0, 0, 0, 0.45)",this.shadow="0 0.75rem 1.4rem -0.9rem rgba(12, 27, 31, 0.55)",this.volume="11.5rem",this.cover="8.25rem",this.card="18rem",this.barLight="#ffffff",this.barMid="#f1f7f9",this.barDeep="#f5f7fa",this.barShadow="none",this.sideLight="#ffffff",this.sideDeep="#f5f7fa",this.codeGround="#f1f7f9",this.hairline="1px",this.stroke="2px",this.rise="-1px",this.gloss="none",this.ring="0 0 0 2px #c8f4fb",this.decisionShadow="none",this.photo="7rem",this.radius="0.375rem",this.barTint="#ffffff",this.skyInk="#166178",this.lift="inset 5px 0 0 rgba(0, 0, 0, 0.14), inset 6px 0 0 rgba(255, 255, 255, 0.12), 0 14px 24px -12px rgba(0, 0, 0, 0.5)",this.openSpine="inset 7px 0 0 rgba(0, 0, 0, 0.14), inset 8px 0 0 rgba(255, 255, 255, 0.12), 0 12px 22px -14px rgba(0, 0, 0, 0.5)",this.sans="'Inter', system-ui, sans-serif",this.muted="#516770",this.bubble="rgba(16, 37, 44, 0.05)",this.shade="rgba(16, 37, 44, 0.03)",this.pill="#166178",this.column="48rem",this.style=y.div`${this.parts()}`}parts(){return[this.page(),this.writing(),this.links(),this.figures(),this.listings(),this.switches(),this.turns(),this.illustrations(),this.marks(),this.library(),this.head(),this.holds(),this.context(),this.tones()]}page(){return k`
            font-family: ${({theme:e})=>e.font};
            font-size: ${({theme:e})=>e.size};
            line-height: ${({theme:e})=>e.leading};
            color: ${({theme:e})=>e.ink};
            background: ${({theme:e})=>e.paper};
            min-height: 100vh;
        `}writing(){return k`
            .pd-pages { font-family: ${({theme:e})=>e.prose}; }
            .pd-chapter, .pd-section, .pd-paragraph { margin-block: ${({theme:e})=>e.space}; }
            .pd-chapter { max-width: ${({theme:e})=>e.measure}; }
        `}links(){return k`
            .pa-reference { color: ${({theme:e})=>e.accent}; }
            .pa-reference.pa-self-reference { color: inherit; text-decoration: none; }
        `}figures(){return k`
            .pd-image img { display: block; max-width: 100%; height: auto; }
            .pa-phone .pd-image img { max-width: min(100%, ${({theme:e})=>e.phoneWidth}); }
            .pd-code { font-family: ${({theme:e})=>e.mono}; overflow-x: auto; }
        `}listings(){return k`
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
        `}switches(){return k`
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
        `}illustrations(){return k`
            .pd-illustration { fill: none; stroke: var(--ink); stroke-width: 1.7; stroke-linecap: round; stroke-linejoin: round; }
            .pd-illustration .fill { fill: var(--foot); stroke: var(--ink); }
            .pd-illustration .light { fill: ${({theme:e})=>e.white}; stroke: none; }
            .pd-drawing { display: grid; place-items: center; min-height: 0; }
        `}marks(){return k`
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
        `}library(){return k`
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
        `}head(){return k`
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
        `}holds(){return k`
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
        `}context(){return k`
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
        `}tones(){return k`
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
        `}turns(){return k`
            .pd-paragraph.pd-turn {
                display: flex;
                justify-content: space-between;
                gap: ${({theme:e})=>e.space};
                font-size: calc(0.786 * ${({theme:e})=>e.size});
            }
            .pd-turn .pa-reference { font-weight: 500; text-decoration: none; }
            .pd-turn .pd-count { color: ${({theme:e})=>e.faint}; }
        `}};n(ha,"$LibraryBookTheme");let Pt=ha;const Nr=o(Pt);var Wr=Object.defineProperty,_r=Object.getOwnPropertyDescriptor,Hr=n((p,e,t,a)=>{for(var s=_r(e,t),i=p.length-1,d;i>=0;i--)(d=p[i])&&(s=d(e,t,s)||s);return s&&Wr(e,t,s),s},"__decorateClass$2");const Ee=class Ee extends ho{constructor(){super(...arguments),this.specification=new Fe,this.themeProvider=!0,this.style=y.div`
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
    `}get rules(){return this.parts().flat(1/0).filter(e=>typeof e=="string").join("")}get pages(){return this.book.pages}get open(){const e=this.book;return e.open??e.synopsis}$Bound(){const e=this.style,t=this.book;this.style=a=>r(e,{$at:t.means?.identifier,$scheme:t.cover?.annotations.expressed(N)?.declarations,...a}),super.$Bound()}defines(e){for(const a of e.annotations.after(this))a instanceof Ee&&e.annotations.express(a,!1);super.defines(e),e.classes.add(this,"pa-layout");const t=this.book.open;t!==void 0&&e.classes.add(this,"pa-turned"),t?.is(D)&&e.classes.add(this,"pa-manual")}erase(e){super.erase(e),e.classes.revert(this)}parts(){return[this.paging(),this.regions(),this.areas(),this.phone()]}paging(){return k`
            .pa-page:not(.pa-open) { display: none; }
        `}regions(){return k`
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
        `}areas(){return k`
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
        `}phone(){return k`
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
        `}};n(Ee,"$Layout");let Le=Ee;const fa=class fa extends T{$placesTheSideAndNeverDressesIt(e){for(const t of e.annotations.find(Le)){const a=(t.rules.match(/[^{};]*\.pd-holds\s+[^\s{},][^{};]*\{/gu)??[]).map(s=>s.trim());l(a.length===0,`a layout places the side and never dresses it, what stands in the side being the index's and the folder's, and this one says "${a[0]}"`)}}};n(fa,"LayoutSpecification");let Fe=fa;Hr([h("a layout places the side and never dresses it")],Fe.prototype,"$placesTheSideAndNeverDressesIt");const Lr=o(Le),Ge=class Ge extends u{constructor(){super(...arguments),this.specification=new T}defines(e){for(const t of e.annotations.after(this))t instanceof Ge&&e.annotations.express(t,!1);e.classes.add(this,"pa-tone")}erase(e){e.classes.revert(this)}};n(Ge,"$Tone");let te=Ge;const ba=class ba extends te{defines(e){super.defines(e),e.classes.add(this,"pa-dark")}};n(ba,"$Dark");let jt=ba;const ga=class ga extends te{defines(e){super.defines(e),e.classes.add(this,"pa-light")}};n(ga,"$Light");let At=ga;const ua=class ua extends te{defines(e){super.defines(e),e.classes.add(this,"pa-white-over-black")}};n(ua,"$WhiteOverBlack");let Ct=ua;const Va=o(te),eo=o(jt),Fr=o(At),Br=o(Ct);var Rr=Object.defineProperty,Er=Object.getOwnPropertyDescriptor,Gr=n((p,e,t,a)=>{for(var s=Er(e,t),i=p.length-1,d;i>=0;i--)(d=p[i])&&(s=d(e,t,s)||s);return s&&Rr(e,t,s),s},"__decorateClass$1");const ma=class ma extends P{write(){const e=this.book.body;return`${e.indexOf(this.chapter)+1} of ${e.length}`}$Define(){super.$Define(),this.classes.add(this,"pd-count")}};n(ma,"$Count");let Mt=ma;const $a=class $a extends u{constructor(){super(...arguments),this.specification=new ge}defines(e){e.classes.add(this,"pa-before")}erase(e){e.classes.revert(this)}};n($a,"$Before");let It=$a;const ka=class ka extends u{constructor(){super(...arguments),this.specification=new ge}defines(e){e.classes.add(this,"pa-after")}erase(e){e.classes.revert(this)}};n(ka,"$After");let Tt=ka;const va=class va extends b{$saidOfAWordOfATurn(e){l(e instanceof P&&e.parent instanceof Be,"this is said of a word of a turn, and here it is said of something else")}};n(va,"OfATurnSpecification");let ge=va;Gr([h("this is said of a word of a turn")],ge.prototype,"$saidOfAWordOfATurn");const Yr=o(Mt),Sr=o(It),Zr=o(Tt),ya=class ya extends f{get before(){const e=this.book.body;return e[e.indexOf(this.chapter)-1]??this.chapter}get after(){const e=this.book.body;return e[e.indexOf(this.chapter)+1]??this.chapter}write(){const e=o(M),t=o(Yr),a=o(Sr),s=o(Zr),i=o(this.before===this.chapter?Pa:x),d=o(this.after===this.chapter?Pa:x);return c(m,{children:[c(e,{children:[r(a,{}),r(i,{children:this.before.mention.identifier}),"← ",this.before.title.name]}),r(t,{}),c(e,{children:[r(s,{}),r(d,{children:this.after.mention.identifier}),this.after.title.name," →"]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-turn")}};n(ya,"$Turn");let Be=ya;const qr=o(Be);var Jr=Object.defineProperty,Qr=Object.getOwnPropertyDescriptor,q=n((p,e,t,a)=>{for(var s=a>1?void 0:a?Qr(e,t):e,i=p.length-1,d;i>=0;i--)(d=p[i])&&(s=(a?d(e,t,s):d(s))||s);return a&&s&&Jr(e,t,s),s},"__decorateClass");const xa=class xa extends Ma{constructor(){super(...arguments),this.specification=new G}get chapters(){return this.text.find($).filter(e=>[...e.classes].includes("pd-canonical"))}get laidOutChapters(){return[this.cover,this.synopsis,this.table,...this.chapters]}get pages(){return[this.synopsis,...this.chapters].filter(e=>e!==void 0)}get body(){if(this._body===void 0){const e=this.appendix;this._body=this.chapters.filter(t=>!e.includes(t))}return this._body}get entries(){return this.body}get appendix(){const e=this.table;if(e===void 0)return[];const t=e.text.find(W).filter(a=>a.is(Ae)).flatMap(a=>a.text.find(f).map(s=>I(s)?.identifier));return this.chapters.filter(a=>t.includes(a.mention?.identifier??""))}get open(){return this.$bookmark===void 0?void 0:this.chapterAt(this.$bookmark)}get tones(){return[eo,Fr,Br]}get topics(){return this.cover?.annotations.find(Wa)??[]}get subjectCover(){return this.coverOf(this.subject?.means?.identifier)}get searchHint(){return"a word"}wordsOf(e){const t=(this._words??=new Map).get(e);if(t!==void 0)return t;const a=e instanceof $?e.title?.name??"":"",s=e.text.find(f).filter(d=>![...d.classes].includes("pa-caption")).map(d=>O.copy(d.text).replace(/\s+/gu," ").trim()).join(" "),i={title:a,text:s,lower:`${a} ${s}`.toLowerCase()};return this._words.set(e,i),i}found(e){const t=e.trim().toLowerCase();if(t==="")return[];const a=this.table?.annotations.expressed(H);return a===void 0?[]:a.entries.map(s=>a.chapterOf(s)).filter(s=>s!==void 0&&this.wordsOf(s).lower.includes(t))}countOfFound(e,t){return c(m,{children:[r("b",{children:e.length})," ",e.length===1?"entry says":"entries say"," “",t,"”"]})}placeOf(e){return e instanceof $?e.mention?.identifier:void 0}sought(e){}write(){return c(m,{children:[r("div",{className:"pd-library",children:this.library()}),r("div",{className:"pd-me",children:this.me()}),r("div",{className:"pd-holds",children:this.holds()}),r("div",{className:"pd-head",children:this.head()}),c("div",{className:"pd-pages",children:[this.aboveThePages(),this.pages.map((e,t)=>{const a=o(e);return r(a,{},t)}),this.belowThePages()]})]})}library(){if(this._logo===void 0)return;const e=o(this._logo);return r(e,{})}me(){const e=o(Qa),t=o(x),a=o(ar),s=this.coverOf(this.author?.means?.identifier);return c(m,{children:[this.byline(),s===void 0?void 0:this.painted(s,r(e,{cover:s,children:r(t,{children:s.mention.identifier})})),this.topics.length===0?void 0:r(a,{cover:this.cover})]})}painted(e,t,a){return J(e,t,a)}holds(){const e=o(this.table);return r(e,{})}head(){const e=o(this.cover);return c(m,{children:[r(e,{}),r("div",{className:"pd-switches",children:this.switches()})]})}aboveThePages(){}belowThePages(){}chapterAt(e){return(this._chapterByPlace??this.chapterByPlace()).get(e)}chapterByPlace(){const e=new Map;for(const t of this.chapters)for(const a of this.sections(t))a.mention!==void 0&&!e.has(a.mention.identifier)&&e.set(a.mention.identifier,t);for(const t of this.chapters)t.mention!==void 0&&e.set(t.mention.identifier,t);for(const t of this.entries)t.mention!==void 0&&!e.has(t.mention.identifier)&&e.set(t.mention.identifier,t);return e}placeWithin(e){return e.startsWith("#")?`${this.means?.identifier??""}${e}`:e}coverOf(e){if(e!==void 0)return this.means?.identifier===e?this.cover:this.cover?.annotations.find(E).map(t=>t.cover).find(t=>t?.mention?.identifier===e)}byline(){const e=o(sr);return r(e,{chapter:this.cover})}root(){const e=o(Ar);return r(e,{cover:this.cover})}switches(){}sections(e){return e.text.find(W).flatMap(t=>[t,...this.sections(t)])}sectionOf(e){const t=this.table;return t===void 0?void 0:this.sections(t).find(a=>a.canonical?.name===e.name)}turn(){this.bookmark!==this.cover&&super.turn()}$Define(){super.$Define();const e=o(Lr),t=o(Va);this.annotations.add(this,r(e,{}),r(t,{}))}$Bound(){this._chapterByPlace=this.chapterByPlace();const e=o(jr),t=this.table?.annotations.expressed(S);for(const i of t?.parts??[]){const d=this.sectionOf(i);d===void 0||d.is(We)||!i.chapters.some(A=>A.is(D))||d.annotations.add(this,r(e,{}))}const a=this.root();a!==void 0&&this.table?.text.add(this,a);const s=o(lr);this._logo=bo.chemical(r(s,{cover:this.cover,subject:this.subjectCover}),this),this.turns(),super.$Bound()}turns(){const e=o(qr);for(const t of this.body)t.text.add(this,r(e,{}))}};n(xa,"$LibraryBook");let se=xa;q([Wt()],se.prototype,"_chapterByPlace",2);q([Wt()],se.prototype,"_body",2);q([Wt()],se.prototype,"_words",2);const wa=class wa extends go{$holdsOnlyChapters(e){l([...e.text].every(t=>t instanceof $),"a book of this library holds only chapters, and this one holds something else")}$placesEveryChapter(e){l(e.text.find($).every(t=>e.laidOutChapters.includes(t)),"a book of this library has a place for every chapter it holds, and this one holds a chapter it places nowhere")}$onlyAChapterAppends(e){l(e.text.find($).every(t=>e.chapters.includes(t)||!t.is(Ia)),"only an ordinary chapter files a file, and here a cover, a synopsis or a table of contents files one")}$listsEachManualPart(e){const a=(e.table?.annotations.expressed(S)?.parts??[]).find(s=>s.chapters.some(i=>i.is(D))&&e.sectionOf(s)===void 0);l(a===void 0,`a part read as a manual is listed under a section headed with its name, and "${a?.name}" has none`)}};n(wa,"LibraryBookSpecification");let G=wa;q([h("a book of this library holds only chapters")],G.prototype,"$holdsOnlyChapters",1);q([h("a book of this library has a place for every chapter it holds")],G.prototype,"$placesEveryChapter",1);q([h("only an ordinary chapter files a file")],G.prototype,"$onlyAChapterAppends",1);q([h("a part read as a manual is listed under a section headed with its name")],G.prototype,"$listsEachManualPart",1);const to=o(se);o(to,fo)(Nr);o(to,Va)(eo);const za=class za extends Oe{};n(za,"$JournalCover");let Nt=za;const Ur=o(Nt),Xr=n(()=>c(_a,{children:[r(pr,{}),r(qa,{ground:"#eef5f6",band:"#c3e3e6",bandInk:"#1c565c",foot:"#8db9bd",footInk:"#153e43",ink:"#1f5a60"}),r(Ja,{x:"-46",y:"-13"}),r(Ha,{children:"[Dougs Library](/dougs-library/)"}),r(La,{children:"[Doug](/dougs-story/)"}),r(Fa,{children:"[Library](/dougs-library/)"}),r(Ba,{children:"[The Library](/dougs-library/)"}),c(Ra,{children:[r(Za,{}),r(Ea,{children:`<svg viewBox="0 0 64 64" class="pd-illustration"><path class="light" d="M9 7h46v50H9z"/><path d="M9 7h46v50H9zM9 24h46M9 41h46"/><path class="fill" d="M13 11h5v13h-5zM20 9h4v15h-4zM26 13h6v11h-6zM34 10h4v14h-4zM40 14h6v10h-6z"/><path d="M48 24l4-12 3 1-4 11z"/><path class="fill" d="M13 28h4v13h-4zM19 30h7v11h-7zM28 27h4v14h-4zM34 31h5v10h-5zM41 28h6v13h-6zM49 29h3v12h-3z"/><path class="fill" d="M13 46h6v11h-6zM21 44h4v13h-4zM27 47h8v10h-8zM37 45h4v12h-4zM43 48h6v9h-6z"/><path d="M50 57l3-11 3 1-3 10z"/></svg>
`})]})]}),"LibraryCover"),vn=n(()=>c(_a,{children:[r(Ur,{}),r(uo,{}),r(cr,{children:Xr()}),r(qa,{ground:"#f5eedf",band:"#d9c3a3",bandInk:"#4a3626",foot:"#a3b6cc",footInk:"#2a4262",ink:"#2f4a6a"}),r(Ja,{x:"-54",y:"-33"}),r(Ha,{children:"[Dougs Story](/dougs-story/)"}),r(La,{children:"[Doug](/dougs-story/)"}),r(Fa,{children:"[Library](/dougs-library/)"}),r(Ba,{children:"[The Librarian](/dougs-story/)"}),c(Ra,{children:[r(Za,{}),r(Ea,{children:`<svg viewBox="0 0 64 64" class="pd-illustration"><path class="light" d="M8 13h23v38H8zM33 13h23v38H33z"/><path d="M8 13h23v38H8zM33 13h23v38H33z"/><path d="M13 21h13M13 27h13M13 33h9M38 21h13M38 27h13M38 33h13M38 39h8"/><path class="fill" d="M15 55 45 25l4 4-30 30-6 2z"/><path d="M15 55 45 25l4 4-30 30-6 2zM43 27l4 4M17 53l2 2"/></svg>
`})]})]}),"StoryCover");export{ie as $,kn as A,pr as B,dr as C,dn as D,vt as E,$t as F,E as G,gn as H,Za as I,Ur as J,sr as K,Se as L,pn as M,pe as N,T as O,hn as P,Po as Q,$n as R,vn as S,Va as T,D as U,cr as V,Ja as W,xr as X,wr as Y,Ga as Z,Dr as _,qa as a,Ke as a0,cn as a1,ln as a2,kr as a3,ee as a4,F as a5,Bo as a6,ja as a7,$r as a8,nn as a9,rn as aa,un as b,Fr as c,gt as d,H as e,mn as f,jr as g,Ae as h,I as i,se as j,G as k,Pt as l,Lr as m,mo as n,Le as o,_ as p,Xr as q,w as r,fn as s,bn as t,ye as u,Oe as v,Rt as w,on as x,an as y,kt as z};
