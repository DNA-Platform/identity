var ai=Object.defineProperty;var r=(p,e)=>ai(p,"name",{value:e,configurable:!0});import{jsx as n,jsxs as c,Fragment as $}from"react/jsx-runtime";import{$ as a,$check as h,selection as O,inert as Ht,next as ni}from"@dna-platform/chemistry";import{$Word as D,specify as f,AnnotationSpecification as v,$Book as Ar,$Annotation as k,$Paragraph as g,$Section as N,html as y,$Format as V,$Append as J,$Chapter as w,binder as L,$Svg as Bt,Word as j,Code as ri,$Date as ao,$Author as no,Reference as z,$Subject as Mr,$Topic as Ir,$Reference as ro,$Image as ii,$Composition as di,$Cover as A,$Synopsis as Se,CoverSpecification as pi,$Content as Dr,$Parenthetical as ci,$TableOfContents as q,$Theme as li,$Paginated as hi,Self as jr,Theme as io,reflection as fi,BookSpecification as gi,$Heading as Tr,$Referent as Lt,$SelfReference as ui,$Means as bi,Referent as mi,identifier as Wr,SectionSpecification as $i,$Code as Hr,Chapter as po,Title as co,Author as lo,Subject as ho,About as fo,Paragraph as go,Svg as uo,Autobiography as ki}from"@dna-platform/public";import{css as b}from"styled-components";const Ao=class Ao extends D{get on(){return[this.book.$is].flat().includes(this.$annotation)}$Switch(...e){this.$Writing(...e),this.containers.replace(this,"span","button")}container(e){return super.container({type:"button","aria-pressed":this.on,onClick:r(()=>this.press(),"onClick"),...e})}press(){const e=this.book,t=[e.$is].flat();e.$is=this.on?t.filter(o=>o!==this.$annotation):[this.$annotation,...t]}$Define(){super.$Define(),this.classes.add(this,"pd-switch")}};r(Ao,"$Switch");let oe=Ao;const Mo=class Mo extends oe{press(){const e=this.book,t=[e.$is].flat().filter(o=>!this.$family.includes(o));e.$is=[this.$annotation,...t]}};r(Mo,"$Tab");let ve=Mo;const bo=a(oe),xi=a(ve);var vi=Object.defineProperty,wi=Object.getOwnPropertyDescriptor,yi=r((p,e,t,o)=>{for(var s=wi(e,t),i=p.length-1,d;i>=0;i--)(d=p[i])&&(s=d(e,t,s)||s);return s&&vi(e,t,s),s},"__decorateClass$m");const Io=class Io extends v{$saidOfABook(e){h(e instanceof Ar,"this is said of a book, and here it is said of something else")}};r(Io,"OfABookSpecification");let R=Io;yi([f("this is said of a book")],R.prototype,"$saidOfABook");var zi=Object.defineProperty,Oi=Object.getOwnPropertyDescriptor,Di=r((p,e,t,o)=>{for(var s=Oi(e,t),i=p.length-1,d;i>=0;i--)(d=p[i])&&(s=d(e,t,s)||s);return s&&zi(e,t,s),s},"__decorateClass$l");const It=class It extends k{constructor(){super(...arguments),this.specification=new R}defines(e){for(const t of e.annotations.after(this))t instanceof It&&e.annotations.express(t,!1);e.classes.add(this,"pa-file-panel-state")}erase(e){e.classes.revert(this)}};r(It,"$FilePanelState");let ae=It;const To=class To extends ae{defines(e){super.defines(e),e.classes.add(this,"pa-code-forward")}};r(To,"$CodeForward");let Ft=To;const Wo=class Wo extends ae{defines(e){super.defines(e),e.classes.add(this,"pa-words-forward")}};r(Wo,"$WordsForward");let St=Wo;const Ho=class Ho extends ae{defines(e){super.defines(e),e.classes.add(this,"pa-split")}};r(Ho,"$Split");let Et=Ho;const Bo=class Bo extends k{constructor(){super(...arguments),this.specification=new R}defines(e){e.classes.add(this,"pa-light-code")}erase(e){e.classes.revert(this)}};r(Bo,"$LightCode");let Gt=Bo;const Lo=class Lo extends k{constructor(){super(...arguments),this.specification=new R}defines(e){e.classes.add(this,"pa-wrapped-code")}erase(e){e.classes.revert(this)}};r(Lo,"$WrappedCode");let Ut=Lo;const Ro=class Ro extends k{constructor(){super(...arguments),this.specification=new R}defines(e){e.classes.add(this,"pa-numbered-code")}erase(e){e.classes.revert(this)}};r(Ro,"$NumberedCode");let qt=Ro;const _o=class _o extends k{constructor(){super(...arguments),this.specification=new Ee}defines(e){e.classes.add(this,"pa-brief")}erase(e){e.classes.revert(this)}};r(_o,"$Brief");let we=_o;const Fo=class Fo extends v{$saidOfAParagraph(e){h(e instanceof g,"brief is said of a paragraph, and this is not one")}};r(Fo,"BriefSpecification");let Ee=Fo;Di([f("brief is said of a paragraph")],Ee.prototype,"$saidOfAParagraph");a(ae);const mo=a(Ft),$o=a(St),ne=a(Et),ji=a(Gt),Ci=a(Ut),ko=a(qt),kc=a(we),So=class So extends g{constructor(){super(...arguments),this.style=O.div`
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
    `}get spread(){return this.chapter?.annotations.expressed(P)}$FileRail(...e){this.$Writing(...e),this.containers.replace(this,"span",this.style)}write(){const e=a(vo),t=this.spread;if(t!==void 0)return t.files.map(o=>n(e,{file:o,annotation:ne,family:t.filePanelStates,skeleton:!0},$e(o)))}$Define(){super.$Define(),this.classes.add(this,"pd-file-rail")}};r(So,"$FileRail");let Zt=So;const Eo=class Eo extends ve{constructor(){super(...arguments),this.style=O.button`
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
    `}get paragraphs(){return(this.chapter?.text.find(N)??[]).flatMap(e=>e.text.find(g)).slice(0,16).map(e=>y.copy(e.text))}$FilePanelGrip(...e){this.$Switch(...e),this.containers.replace(this,"button",this.style)}write(){return n("span",{className:"pd-skeleton",children:this.paragraphs.map((e,t)=>n("i",{style:{width:`${Math.max(25,Math.min(100,e.length/4))}%`}},t))})}$Define(){super.$Define(),this.classes.add(this,"pd-file-panel-grip")}};r(Eo,"$FilePanelGrip");let Yt=Eo;const Pi=a(Zt),Ni=a(Yt),Go=class Go extends g{constructor(){super(...arguments),this.style=O.div`
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
    `}get spread(){return this.chapter?.annotations.expressed(P)}$FilePanel(...e){this.$Writing(...e),this.containers.replace(this,"span",this.style)}write(){const e=a(Ii),t=a(Xi),o=this.spread;if(o!==void 0)return c($,{children:[n(e,{chapter:this.chapter}),n("div",{className:"pd-file-listings",children:o.files.map(s=>n(t,{file:s,filePanelState:mo,family:o.filePanelStates},$e(s)))})]})}$Define(){super.$Define(),this.classes.add(this,"pd-file-panel")}};r(Go,"$FilePanel");let Xt=Go;const Uo=class Uo extends g{constructor(){super(...arguments),this.style=O.div`
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
    `}get spread(){return this.chapter?.annotations.expressed(P)}$FilePanelBar(...e){this.$Writing(...e),this.containers.replace(this,"span",this.style)}write(){const e=a(vo),t=a(xi),o=a(bo),s=this.spread,i=this.chapter;if(s!==void 0)return c($,{children:[s.files.map(d=>n(e,{file:d},$e(d))),n("span",{className:"pd-words-only",children:n(t,{chapter:i,annotation:$o,family:s.filePanelStates,children:"words"})}),n("span",{className:"pd-dock pd-to-full",children:n(t,{chapter:i,annotation:mo,family:s.filePanelStates,children:"full screen"})}),n("span",{className:"pd-dock pd-to-split",children:n(t,{chapter:i,annotation:ne,family:s.filePanelStates,children:"split"})}),c("span",{className:"pd-options",children:[n(o,{chapter:i,annotation:ji,children:"light"}),n(o,{chapter:i,annotation:Ci,children:"wrap"}),n(o,{chapter:i,annotation:ko,children:"lines"})]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-file-panel-bar")}};r(Uo,"$FilePanelBar");let Jt=Uo;const Ai=a(Xt),Mi=a(Jt),Ii=Mi;var Ti=Object.defineProperty,Wi=Object.getOwnPropertyDescriptor,Hi=r((p,e,t,o)=>{for(var s=Wi(e,t),i=p.length-1,d;i>=0;i--)(d=p[i])&&(s=d(e,t,s)||s);return s&&Ti(e,t,s),s},"__decorateClass$k");const qo=class qo extends V{constructor(){super(...arguments),this.specification=new Ge,this.$openFile=void 0,this.grid=O.div`
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
    `}get files(){return this.parent.annotations.find(J).reverse()}get openFile(){return this.$openFile??this.files[0]}get filePanelStates(){return[$o,ne,mo]}$Spread(...e){this.$Format(...e);const t=this.grid,o=a(Ai),s=a(Pi),i=a(Ni);this.style=({className:d,children:u})=>{const m=this.parent,l=[...m.classes].includes("pa-open");return c(t,{className:`${d??""}${l?" pa-open":""}`.trim(),children:[n("div",{className:"pd-words",children:u}),l?c($,{children:[n(o,{chapter:m}),n(s,{chapter:m}),n(i,{chapter:m,annotation:ne,family:this.filePanelStates})]}):void 0]})}}defines(e){super.defines(e),e.classes.add(this,"pa-spread")}erase(e){super.erase(e),e.classes.revert(this)}};r(qo,"$Spread");let P=qo;const Zo=class Zo extends v{$isAChapter(e){h(e instanceof w,"a spread is a chapter read beside its files, and this is not a chapter")}};r(Zo,"SpreadSpecification");let Ge=Zo;Hi([f("a spread is a chapter read beside its files")],Ge.prototype,"$isAChapter");const xc=a(P);var Bi=Object.defineProperty,Li=Object.getOwnPropertyDescriptor,Br=r((p,e,t,o)=>{for(var s=Li(e,t),i=p.length-1,d;i>=0;i--)(d=p[i])&&(s=d(e,t,s)||s);return s&&Bi(e,t,s),s},"__decorateClass$j");const Yo=class Yo extends V{constructor(){super(...arguments),this.specification=new ye,this.style=O.div`
        .pa-coloured { --colour: ${e=>e.$colour}; }
    `}get colour(){return y.copy(this.text).trim()}$Coloured(...e){this.$Format(...e);const t=this.style;this._painted=o=>n(t,{$colour:this.colour,...o})}defines(e){e.classes.add(this,"pa-coloured"),e.containers.add(this,this._painted)}erase(e){e.classes.revert(this),e.containers.revert(this)}};r(Yo,"$Coloured");let K=Yo;const Xo=class Xo extends v{$saidOfAChapterOrAParagraph(e){h(e instanceof w||e instanceof g,"coloured is said of a chapter or a paragraph, and this is neither")}$givenItsColour(e){h(/^#[0-9a-f]{6}$/iu.test(e.annotations.expressed(K)?.colour??""),"coloured is given its colour as six hex digits, and this one was given something else")}};r(Xo,"ColouredSpecification");let ye=Xo;Br([f("coloured is said of a chapter or a paragraph")],ye.prototype,"$saidOfAChapterOrAParagraph");Br([f("coloured is given its colour")],ye.prototype,"$givenItsColour");a(K);var Ri=Object.defineProperty,_i=Object.getOwnPropertyDescriptor,xo=r((p,e,t,o)=>{for(var s=_i(e,t),i=p.length-1,d;i>=0;i--)(d=p[i])&&(s=d(e,t,s)||s);return s&&Ri(e,t,s),s},"__decorateClass$i");const Jo=class Jo extends V{constructor(){super(...arguments),this.specification=new re}get identifier(){return L.reference(y.copy(this.text))?.identifier??""}get name(){return L.reference(y.copy(this.text))?.name??""}get entry(){return this.book?.chapterAt(this.identifier)}get drawing(){const e=this.entry?.text.find(g).flatMap(t=>t.text.find(Bt))[0];return e===void 0?"":y.copy(e.text).trim()}get colour(){return this.entry?.annotations.expressed(K)?.colour??""}$Keyed(...e){this.$Format(...e);const t=a(Si);this._layer=o=>c("div",{...o,children:[n(t,{keyed:this}),o.children]})}defines(e){e.classes.add(this,"pa-keyed"),e.containers.add(this,this._layer)}erase(e){e.classes.revert(this),e.containers.revert(this)}};r(Jo,"$Keyed");let Y=Jo;const Ko=class Ko extends D{constructor(){super(...arguments),this.style=O.span`
        --colour: ${e=>e.$colour};
    `}$Icon(...e){this.$Writing(...e);const t=this.style;this._painted=o=>n(t,{$colour:this.$keyed?.colour??"",...o}),this.containers.replace(this,"span",this._painted)}write(){return n("span",{className:"pd-drawing",role:"img","aria-label":this.$keyed?.name,dangerouslySetInnerHTML:{__html:this.$keyed?.drawing??""}})}$Define(){super.$Define(),this.classes.add(this,"pd-icon")}};r(Ko,"$Icon");let Kt=Ko;const Qo=class Qo extends v{$saidOfAChapter(e){h(e instanceof w,"keyed is said of a chapter, and this is not one")}$namesAnEntry(e){const t=e.annotations.expressed(Y)?.entry;h(t!==void 0&&t.annotations.expressed(Y)?.entry===t,"keyed names an entry of the key, a chapter of this book keyed as itself, and this one names something else")}$entryHoldsItsDrawingAndColour(e){const t=e.annotations.expressed(Y)?.entry;t!==void 0&&h(t.text.find(g).flatMap(o=>o.text.find(Bt)).length===1&&t.is(K),"an entry of the key holds one drawing and its colour, and this one holds something else")}};r(Qo,"KeyedSpecification");let re=Qo;xo([f("keyed is said of a chapter")],re.prototype,"$saidOfAChapter");xo([f("keyed names an entry of the key")],re.prototype,"$namesAnEntry");xo([f("an entry of the key holds one drawing and its colour")],re.prototype,"$entryHoldsItsDrawingAndColour");a(Y);const Fi=a(Kt),Si=Fi;var Ei=Object.defineProperty,Gi=Object.getOwnPropertyDescriptor,Ui=r((p,e,t,o)=>{for(var s=Gi(e,t),i=p.length-1,d;i>=0;i--)(d=p[i])&&(s=d(e,t,s)||s);return s&&Ei(e,t,s),s},"__decorateClass$h");const qi={tsx:"typescript",ts:"typescript",mjs:"javascript",js:"javascript",css:"css",html:"xml",svg:"xml",json:"json",md:"markdown"},Zi='<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"><path d="M6 4.5 3.5 8 6 11.5M10 4.5 12.5 8 10 11.5"/></svg>',$e=r(p=>`${p.$identifier}${p.$type}`,"fileNameOf"),Yi=r(p=>p===void 0?[]:y.copy(p.text).split(`
`),"fileLinesOf"),Lr=r(p=>p?.chapter?.annotations.expressed(P),"spreadOf"),Vo=class Vo extends g{constructor(){super(...arguments),this.$family=[]}get name(){return this.$file===void 0?"":$e(this.$file)}get language(){return qi[(this.$file?.$type??"").replace(/^\./u,"")]??""}get spread(){return Lr(this.$file)}get chapter(){return this.$file?.chapter??super.chapter}$FileListing(...e){this.$Writing(...e),this.containers.replace(this,"span","div")}container(e){return super.container({onClick:r(()=>this.press(),"onClick"),...e})}press(){if(this.$filePanelState===void 0)return;const e=this.book,t=[e.$is].flat().filter(o=>!this.$family.includes(o));e.$is=[this.$filePanelState,...t]}write(){const e=a(j),t=a(ri);return c($,{children:[n(e,{children:this.name}),n(t,{identifier:this.$file?.$identifier,type:this.$file?.$type,language:this.language,numbered:!0})]})}$Define(){super.$Define(),this.classes.add(this,"pd-file-listing");const e=a(Ki);this.annotations.add(this,n(e,{}))}};r(Vo,"$FileListing");let Ue=Vo;const ea=class ea extends k{constructor(){super(...arguments),this.specification=new qe}defines(e){const t=e;t.$file!==void 0&&t.spread?.openFile===t.$file&&e.classes.add(this,"pa-open")}erase(e){e.classes.revert(this)}};r(ea,"$OpenListing");let Qt=ea;const ta=class ta extends v{$isAFileListing(e){h(e instanceof Ue,"an open listing is a file listing, and this is not one")}};r(ta,"OpenListingSpecification");let qe=ta;Ui([f("an open listing is a file listing")],qe.prototype,"$isAFileListing");const sa=class sa extends ve{constructor(){super(...arguments),this.$skeleton=!1,this.style=O.button`
        --colour: ${e=>e.$colour};
    `}get on(){const e=this.$file?.chapter;return e!==void 0&&e===this.book.open&&this.spread?.openFile===this.$file}get name(){return this.$file===void 0?"":$e(this.$file)}get spread(){return Lr(this.$file)}get colour(){return this.$file?.chapter?.annotations.expressed(Y)?.colour??""}get lines(){return Yi(this.$file)}get chapter(){return this.$file?.chapter??super.chapter}$FileTab(...e){this.$Switch(...e),this.containers.replace(this,"button",this.style)}container(e){return super.container({$colour:this.colour,...e})}press(){const e=this.spread;e!==void 0&&(e.$openFile=this.$file),this.$annotation!==void 0&&super.press()}write(){return c($,{children:[n("span",{className:"pd-drawing",dangerouslySetInnerHTML:{__html:Zi}}),n("span",{className:"pd-tab-name",children:this.name}),this.$skeleton?n("span",{className:"pd-skeleton",children:this.lines.slice(0,14).map((e,t)=>n("i",{style:{width:`${Math.max(12,Math.min(100,e.length*2.2))}%`}},t))}):void 0]})}$Define(){super.$Define(),this.classes.add(this,"pd-file-tab")}};r(sa,"$FileTab");let Vt=sa;const Xi=a(Ue),Ji=a(Qt),vo=a(Vt),Ki=Ji;var Qi=Object.defineProperty,Vi=Object.getOwnPropertyDescriptor,wo=r((p,e,t,o)=>{for(var s=Vi(e,t),i=p.length-1,d;i>=0;i--)(d=p[i])&&(s=d(e,t,s)||s);return s&&Qi(e,t,s),s},"__decorateClass$g");const oa=class oa extends k{constructor(){super(...arguments),this.specification=new ie}get date(){return this.text.find(ao)[0]}defines(e){e.classes.add(this,"pa-dated")}erase(e){e.classes.revert(this)}note(){const e=a(this.date);return n(e,{})}};r(oa,"$Dated");let F=oa;const aa=class aa extends v{$saidOfAChapter(e){h(e instanceof w,"dated is said of a chapter, and this is not one")}$datedOnce(e){h(e.annotations.containsOne(F),"a chapter is dated once, and this one is dated more than once")}$givenOneDate(e){h(e.annotations.expressed(F)?.text.find(ao).length===1,"a dated chapter is given one date, and this one is given none or more than one")}};r(aa,"DatedSpecification");let ie=aa;wo([f("dated is said of a chapter")],ie.prototype,"$saidOfAChapter");wo([f("a chapter is dated once")],ie.prototype,"$datedOnce");wo([f("a dated chapter is given one date")],ie.prototype,"$givenOneDate");const vc=a(F);var ed=Object.defineProperty,td=Object.getOwnPropertyDescriptor,sd=r((p,e,t,o)=>{for(var s=td(e,t),i=p.length-1,d;i>=0;i--)(d=p[i])&&(s=d(e,t,s)||s);return s&&ed(e,t,s),s},"__decorateClass$f");const na=class na extends k{constructor(){super(...arguments),this.specification=new Ze}defines(e){e.classes.add(this,"pa-label")}erase(e){e.classes.revert(this)}};r(na,"$Label");let es=na;const ra=class ra extends v{$saidOfAWord(e){h(e instanceof D,"label is said of a word, and this is not one")}};r(ra,"LabelSpecification");let Ze=ra;sd([f("label is said of a word")],Ze.prototype,"$saidOfAWord");const ke=a(es),ia=class ia extends g{get cover(){return this.$cover??this.book?.cover}write(){const e=this.cover.annotations.expressed(no),t=a(j),o=a(ke),s=a(z);return c($,{children:[c(t,{children:[n(o,{}),"by"]}),c(t,{children:[n(s,{children:e.means.identifier}),e.name]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-byline")}};r(ia,"$Byline");let ts=ia;const da=class da extends g{get cover(){return this.$cover??this.book?.cover}write(){const e=this.cover.annotations.expressed(Mr),t=a(j),o=a(ke),s=a(z);return c($,{children:[c(t,{children:[n(o,{}),"subject"]}),c(t,{children:[n(s,{children:e.means.identifier}),e.name]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-subject-line")}};r(da,"$SubjectLine");let ss=da;const pa=class pa extends g{get cover(){return this.$cover??this.book?.cover}get topics(){return this.cover?.annotations.find(Ir)??[]}write(){const e=a(j),t=a(ke),o=a(z);return c($,{children:[c(e,{children:[n(t,{}),"topic"]}),this.topics.map((s,i)=>c(e,{children:[n(o,{children:s.means.identifier}),s.name]},i))]})}$Define(){super.$Define(),this.classes.add(this,"pd-topic-line")}};r(pa,"$TopicLine");let os=pa;const od=a(ts),wc=a(ss),ad=a(os);var nd=Object.defineProperty,rd=Object.getOwnPropertyDescriptor,ee=r((p,e,t,o)=>{for(var s=rd(e,t),i=p.length-1,d;i>=0;i--)(d=p[i])&&(s=d(e,t,s)||s);return s&&nd(e,t,s),s},"__decorateClass$e");const yo=r((p,e)=>{const t=new Set(p.text.find(e));return p.text.find(di).flatMap(o=>[...t.has(o)?[o]:[],...yo(o,e)])},"within"),ca=class ca extends k{constructor(){super(...arguments),this.specification=new Q}get identifier(){return L.reference(y.copy(this.text))?.identifier??""}get name(){return L.reference(y.copy(this.text))?.name??""}get cover(){const e=this.identifier;return this.chapter?.annotations.find(T).map(t=>t.cover).find(t=>t?.mention?.identifier===e)}defines(e){e.classes.add(this,"pa-design")}erase(e){e.classes.revert(this)}};r(ca,"$Design");let H=ca;const la=class la extends k{constructor(){super(...arguments),this.specification=new Xe}defines(e){e.classes.add(this,"pa-exhibit")}erase(e){e.classes.revert(this)}};r(la,"$Exhibit");let Ye=la;const ha=class ha extends k{constructor(){super(...arguments),this.specification=new Je,this.$number=0,this.span=O.span.attrs({className:"pd-plate"})``}note(){const e=this.span;return c($,{children:[n(e,{children:String(this.$number).padStart(2,"0")}),n("span",{className:"pd-jacket-mini"})]})}defines(e){e.classes.add(this,"pa-plate")}erase(e){e.classes.revert(this)}};r(ha,"$Plate");let as=ha;const fa=class fa extends V{constructor(){super(...arguments),this.specification=new Ke,this.themeProvider=!0,this.room=O.div`
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
    `}get chapter(){return this.parent}get design(){return this.chapter.annotations.expressed(H)}get plate(){return this.book.chapters.filter(e=>e.is(H)).indexOf(this.chapter)+1}$Room(...e){this.$Format(...e);const t=this.room;this.style=({className:o,children:s})=>{const i=[...this.chapter.classes].includes("pa-open");return se(this.design?.cover,c(t,{className:`${o??""} pd-room${i?" pa-open":""}`.trim(),children:[n("span",{className:"pd-plate",children:String(this.plate).padStart(2,"0")}),s]}))}}defines(e){super.defines(e),e.classes.add(this,"pa-room")}erase(e){super.erase(e),e.classes.revert(this)}};r(fa,"$Room");let ns=fa;const ga=class ga extends g{get references(){const e=this.book?.means?.identifier??"",t=new Map;for(const o of yo(this.chapter,D)){if(o.parent===this)continue;const s=o.annotations.expressed(ro)?.identifier;if(s===void 0||s.startsWith(e)||t.has(s))continue;const i=y.copy(o.text);t.set(s,L.reference(i)?.name??i.trim())}return[...t]}write(){const e=a(j),t=a(z);return this.references.map(([o,s],i)=>c(e,{children:[n(t,{children:o}),s,n("span",{className:"pd-where",children:o.replace(/^\/dougs-/u,"").replace(/\/#?/u," · ").replace(/ · $/u,"").replace(/-/gu," ")})]},i))}$Define(){super.$Define(),this.classes.add(this,"pd-built-in")}};r(ga,"$BuiltIn");let rs=ga;const ua=class ua extends v{$isAChapter(e){h(e instanceof w,"a design is a chapter, and this is not one")}$namesABook(e){h((e.annotations.expressed(H)?.identifier??"")!=="","a design names the book it is of, and this one names nothing")}$holdsTheCover(e){h(e.annotations.expressed(H)?.cover!==void 0,"a design holds the cover of the book it is of, as a volume, and this one holds none")}$showsItselfAsBuilt(e){h(e instanceof w&&yo(e,g).some(t=>t.is(Ye)),"a design shows itself as built, in a paragraph said to be the exhibit, and this one shows nothing")}};r(ua,"DesignSpecification");let Q=ua;ee([f("a design is a chapter")],Q.prototype,"$isAChapter");ee([f("a design names the book it is of")],Q.prototype,"$namesABook");ee([f("a design holds the cover of the book it is of")],Q.prototype,"$holdsTheCover");ee([f("a design shows itself as built")],Q.prototype,"$showsItselfAsBuilt");const ba=class ba extends v{$isAParagraphOfADesignHoldingOneImage(e){h(e instanceof g&&e.chapter?.is(H)===!0&&e.text.find(ii).length===1,"an exhibit is a paragraph of a design that holds one image, and this is not one")}};r(ba,"ExhibitSpecification");let Xe=ba;ee([f("an exhibit is a paragraph of a design that holds one image")],Xe.prototype,"$isAParagraphOfADesignHoldingOneImage");const ma=class ma extends v{$saidOfAnEntryLeadingToADesign(e){h(e.is(ce)&&e.annotations.expressed(ce)?.referencedChapter?.is(H)===!0,"a plate is said of an entry that leads to a design, and this is not one")}};r(ma,"PlateSpecification");let Je=ma;ee([f("a plate is said of an entry that leads to a design")],Je.prototype,"$saidOfAnEntryLeadingToADesign");const $a=class $a extends v{$isADesign(e){h(e instanceof w&&e.is(H),"a room is a chapter that is a design, and this is not one")}};r($a,"RoomSpecification");let Ke=$a;ee([f("a room is a chapter that is a design")],Ke.prototype,"$isADesign");a(H);a(Ye);a(as);a(ns);a(rs);var id=Object.defineProperty,dd=Object.getOwnPropertyDescriptor,_=r((p,e,t,o)=>{for(var s=dd(e,t),i=p.length-1,d;i>=0;i--)(d=p[i])&&(s=d(e,t,s)||s);return s&&id(e,t,s),s},"__decorateClass$d");const se=r((p,e,t)=>{const o=p?.annotations.expressed(E)?.painted;return o===void 0?e:n(o,{children:e},t)},"painted"),ka=class ka extends A{constructor(){super(...arguments),this.specification=new pe}get name(){return this.chapter?.title?.name??""}get author(){return this.chapter?.annotations.expressed(no)?.name??""}get illustration(){return this.chapter?.text.find(g).find(e=>e.is(Oe))}get drawing(){const e=this.illustration?.text.find(Bt)[0];return e===void 0?"":y.copy(e.text).trim()}get scheme(){return this.chapter?.annotations.expressed(E)}get window(){return this.chapter?.annotations.expressed(de)}};r(ka,"$BookshelfCover");let ze=ka;const xa=class xa extends k{constructor(){super(...arguments),this.specification=new tt}defines(e){e.classes.add(this,"pa-illustration")}erase(e){e.classes.revert(this)}};r(xa,"$Illustration");let Oe=xa;const va=class va extends V{constructor(){super(...arguments),this.specification=new De,this.$ground="",this.$band="",this.$bandInk="",this.$foot="",this.$footInk="",this.$ink="",this.style=O.div.attrs({className:"pd-scheme"})`
        ${e=>e.$scheme}
    `}get colours(){return[this.$ground,this.$band,this.$bandInk,this.$foot,this.$footInk,this.$ink]}get declarations(){return`--ground: ${this.$ground}; --band: ${this.$band}; --band-ink: ${this.$bandInk}; --foot: ${this.$foot}; --foot-ink: ${this.$footInk}; --ink: ${this.$ink};`}get painted(){return this._painted}$Scheme(...e){this.$Format(...e);const t=this.style;this._painted=o=>n(t,{$scheme:this.declarations,...o})}defines(e){e.classes.add(this,"pa-scheme"),e.containers.add(this,this._painted)}erase(e){e.classes.revert(this),e.containers.revert(this)}};r(va,"$Scheme");let E=va;const wa=class wa extends k{constructor(){super(...arguments),this.specification=new je,this.$x="",this.$y=""}get declarations(){return`--window-x: ${this.$x}px; --window-y: ${this.$y}px;`}};r(wa,"$Window");let de=wa;const ya=class ya extends k{constructor(){super(...arguments),this.specification=new Ce}get cover(){return this._cover}get jacket(){return this._cover?.annotations.expressed(A)}$Volume(...e){this._cover=e.find(t=>t instanceof w),this.$Annotation(...e.filter(t=>t!==this._cover))}defines(e){e.classes.add(this,"pa-volume")}erase(e){e.classes.revert(this)}};r(ya,"$Volume");let T=ya;const za=class za extends g{get cover(){return this.$cover?.annotations.expressed(A)}$Jacket(...e){this.$Writing(...e),this._painted=t=>{const o=this.cover?.scheme?.painted;return o===void 0?n("div",{...t}):n(o,{...t})},this.containers.add(this,this._painted)}write(){const e=this.cover;if(e===void 0)return;const t=a(j),o=a(ke);return c($,{children:[n(t,{children:e.name}),n("span",{className:"pd-drawing",dangerouslySetInnerHTML:{__html:e.drawing}}),c(t,{children:[n(o,{}),e.author]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-jacket")}};r(za,"$Jacket");let is=za;const Oa=class Oa extends g{constructor(){super(...arguments),this.unfolded=!1}get filedElsewhere(){return this.$subject!==void 0&&this.$subject!==this.$cover}container(e){return super.container({onMouseOver:r(t=>{t.target instanceof Element&&t.target.closest(".pd-filed")!==null&&this.unfold()},"onMouseOver"),onMouseLeave:r(()=>this.fold(),"onMouseLeave"),...e})}unfold(){this.unfolded=!0}fold(){this.unfolded=!1}write(){const e=this.$cover,t=this.$subject;if(e!==void 0)return c($,{children:[this.filedElsewhere?se(t,n("span",{className:"pd-filed",children:this.mark(t)})):void 0,se(e,n("span",{className:"pd-own",children:this.mark(e)})),c("span",{className:"pd-names",children:[se(e,n("span",{className:"pd-name",children:this.name(e)})),this.filedElsewhere?se(t,n("span",{className:"pd-name pd-under",children:this.name(t)})):void 0]})]})}mark(e){const t=a(ld),o=a(z);return n(t,{cover:e,children:n(o,{children:e.mention.identifier})})}name(e){const t=a(j),o=a(z);return c(t,{children:[n(o,{children:e.mention.identifier}),e.title.name]})}$Define(){super.$Define(),this.classes.add(this,"pd-logo");const e=a(hd);this.annotations.add(this,n(e,{}))}};r(Oa,"$Logo");let Qe=Oa;const Da=class Da extends k{constructor(){super(...arguments),this.specification=new Ve}defines(e){e.unfolded&&e.classes.add(this,"pa-unfolded")}erase(e){e.classes.revert(this)}};r(Da,"$Unfolded");let ds=Da;const ja=class ja extends v{$saidOfALogo(e){h(e instanceof Qe,"unfolded is said of a logo, and this is not one")}};r(ja,"UnfoldedSpecification");let Ve=ja;_([f("unfolded is said of a logo")],Ve.prototype,"$saidOfALogo");const Rr=r(p=>{const e=p?.annotations.expressed(A);return{drawing:e?.drawing??"",declarations:`${e?.scheme?.declarations??""} ${e?.window?.declarations??""}`}},"markingOf"),Ca=class Ca extends D{constructor(){super(...arguments),this.style=O.span`
        ${e=>e.$vars}
    `}get cover(){return this.$cover?.annotations.expressed(A)}get marking(){return Rr(this.$cover)}$Mark(...e){this.$Writing(...e);const t=this.style;this._painted=o=>n(t,{$vars:this.marking.declarations,...o}),this.containers.add(this,this._painted)}write(){return n("span",{className:"pd-drawing",dangerouslySetInnerHTML:{__html:this.marking.drawing}})}$Define(){super.$Define(),this.classes.add(this,"pd-mark")}};r(Ca,"$Mark");let et=Ca;const Pa=class Pa extends pi{$carriesItsScheme(e){h(e.is(E),"a bookshelf cover carries its scheme, and this one carries none")}$carriesItsWindow(e){h(e.is(de),"a bookshelf cover carries its window, and this one carries none")}$carriesItsIllustration(e){h(e instanceof w&&e.text.find(g).some(t=>t.is(Oe)),"a bookshelf cover carries its illustration, and this one carries none")}};r(Pa,"BookshelfCoverSpecification");let pe=Pa;_([f("a bookshelf cover carries its scheme")],pe.prototype,"$carriesItsScheme");_([f("a bookshelf cover carries its window")],pe.prototype,"$carriesItsWindow");_([f("a bookshelf cover carries its illustration")],pe.prototype,"$carriesItsIllustration");const Na=class Na extends v{$saidOfADrawing(e){h(e instanceof g&&e.chapter?.is(A)===!0&&e.text.find(Bt).length===1,"an illustration is a paragraph of a cover that holds one drawing, and this is not one")}};r(Na,"IllustrationSpecification");let tt=Na;_([f("an illustration is a paragraph of a cover that holds one drawing")],tt.prototype,"$saidOfADrawing");const Aa=class Aa extends v{$isACover(e){h(e instanceof w&&e.is(A),"a cover has a scheme, and this is not a cover")}$givenItsColours(e){const t=e.annotations.expressed(E)?.colours??[];h(t.every(o=>/^#[0-9a-f]{6}$/iu.test(o)),"a scheme is given its six colours as six hex digits each — the ground, the band and its ink, the foot and its ink, and the ink of the drawing — and this one was given something else")}};r(Aa,"SchemeSpecification");let De=Aa;_([f("a cover has a scheme")],De.prototype,"$isACover");_([f("a scheme is given its six colours")],De.prototype,"$givenItsColours");const Ma=class Ma extends v{$isACover(e){h(e instanceof w&&e.is(A),"a cover has a window, and this is not a cover")}$givenItsPlace(e){const t=e.annotations.expressed(de);h(/^-?\d+$/u.test(t?.$x??"")&&/^-?\d+$/u.test(t?.$y??""),"a window is given where it stands on the drawing, two whole numbers, and this one was given something else")}};r(Ma,"WindowSpecification");let je=Ma;_([f("a cover has a window")],je.prototype,"$isACover");_([f("a window is given where it stands on the drawing")],je.prototype,"$givenItsPlace");const Ia=class Ia extends v{$saidOfAChapterStandingForABook(e){h(e instanceof w&&(e.is(Se)||e.is(A)||e.is(H)),"a volume is a chapter that stands for another book, a synopsis of it, a cover filed under it or a design of it, and this is none")}$holdsTheCover(e){const t=[e.annotations.expressed(Se)?.means?.identifier,e.annotations.expressed(Mr)?.means?.identifier,e.annotations.expressed(no)?.means?.identifier,e.annotations.expressed(H)?.identifier,...[...e.annotations].map(o=>o.means?.identifier)];h(e.annotations.find(T).every(o=>o.cover?.is(A)===!0&&t.includes(o.cover.mention?.identifier)),"a volume holds the cover of a book its chapter stands for or names, the book a synopsis or a design is of, the subject or author a cover is filed under or a book another line of the cover names, and one here holds something else")}};r(Ia,"VolumeSpecification");let Ce=Ia;_([f("a volume is a chapter that stands for another book")],Ce.prototype,"$saidOfAChapterStandingForABook");_([f("a volume holds the cover of a book its chapter stands for or names")],Ce.prototype,"$holdsTheCover");const _r=a(ze),zo=a(Oe),Oo=a(E),Do=a(de),ps=a(T),yc=a(is),pd=a(Qe),cd=a(ds),Fr=a(et),ld=Fr,hd=cd;var fd=Object.defineProperty,gd=Object.getOwnPropertyDescriptor,xe=r((p,e,t,o)=>{for(var s=gd(e,t),i=p.length-1,d;i>=0;i--)(d=p[i])&&(s=d(e,t,s)||s);return s&&fd(e,t,s),s},"__decorateClass$c");const Sr='<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3.5 10.5 8 6 12.5"/></svg>',ud='<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linejoin="round" stroke-linecap="round"><rect class="ground" x="0.75" y="0.75" width="14.5" height="14.5"/><path d="M3.5 5.5h3l1.5 1.5h4.5v5h-9z"/></svg>',Ta=class Ta extends V{constructor(){super(...arguments),this.specification=new pt,this.style=O.div`
        ${e=>e.$schemeDeclarations===void 0?"":`.pa-entry { ${e.$schemeDeclarations} }`}
    `}get place(){return I(this.parent).identifier}get referencedChapter(){return this.book.chapterAt(this.place)}get cover(){return this.referencedChapter?.annotations.expressed(T)?.cover??this.book.coverOf(this.place)}get schemeDeclarations(){const e=this.cover?.annotations.expressed(E);if(e!==void 0)return e.declarations;const t=this.referencedChapter?.annotations.expressed(K)?.colour;return t===void 0?void 0:`--colour: ${t};`}$Entry(...e){this.$Format(...e);const t=this.style;this._painted=o=>n(t,{$schemeDeclarations:this.schemeDeclarations,...o})}defines(e){e.classes.add(this,"pa-entry"),e.containers.add(this,this._painted),(this.place===this.book?.$bookmark||this.place===this.book.open?.mention?.identifier)&&e.classes.add(this,"pa-open")}erase(e){e.classes.revert(this),e.containers.revert(this)}};r(Ta,"$Entry");let ce=Ta;const Wa=class Wa extends k{constructor(){super(...arguments),this.specification=new dt}defines(e){e.classes.add(this,"pa-appendix")}erase(e){e.classes.revert(this)}};r(Wa,"$Appendix");let le=Wa;const Ha=class Ha extends k{constructor(){super(...arguments),this.specification=new it,this.$folded=!1,this.$counted=!1,this.$dated=!1,this.$searched=!1,this.$search=""}get sections(){return this.chapter.text.find(N)}get entries(){const e=r(t=>!t.is(ci)&&I(t)!==void 0,"listed");return[...this.chapter.text].flatMap(t=>t instanceof N?t.text.find(g):t instanceof g?[t]:[]).filter(e)}get found(){return this.book.found(this.$search)}chapterOf(e){const t=I(e)?.identifier;return t===void 0?void 0:this.book.chapterAt(t)}search(e){this.$search=e;const t=this.chapter,o=e.trim()!=="";if(t!==void 0&&o!==t.is(st)){const s=[t.$is].flat().filter(i=>i!==void 0&&i!==Pr);t.$is=o?[Pr,...s]:s}this.book.sought(e.trim())}$Bound(){const e=a(zd),t=a(Zr),o=a(vo),s=this.book;for(const l of this.entries){l.annotations.add(this,n(e,{}));const x=s.chapterAt(I(l).identifier)?.annotations.expressed(P);if(x===void 0)continue;const C=x.files;l.text.add(this,n(t,{foldedWriting:C.length===0?void 0:l,annotation:bs}),...C.map(Z=>n(o,{file:Z,annotation:ne,family:x.filePanelStates},$e(Z))))}const i=a(qr),d=a(jd),u=new Set(s.entries),m=r(l=>{const x=this.chapterOf(l);return x!==void 0&&u.has(x)},"leadsToAnEntry");if(this.$dated)for(const l of this.entries){const x=this.chapterOf(l);x===void 0||!u.has(x)||!x.is(F)||l.text.add(this,n(i,{entry:x}))}for(const l of this.sections){this.$folded&&(l.$is=[bs]);const x=l.canonical;this.$counted&&x!==void 0&&l.text.find(g).some(m)&&x.text.add(this,n(d,{section:l}))}super.$Bound()}};r(Ha,"$Index");let B=Ha;const Ba=class Ba extends k{constructor(){super(...arguments),this.specification=new ot}defines(e){e.classes.add(this,"pa-searching")}erase(e){e.classes.revert(this)}};r(Ba,"$Searching");let st=Ba;const La=class La extends v{$saidOfATable(e){h(e.is(q),"searching is said of a table of contents, the index's chapter, and this is not one")}};r(La,"SearchingSpecification");let ot=La;xe([f("searching is said of a table of contents")],ot.prototype,"$saidOfATable");const Ra=class Ra extends g{get index(){return this.book?.table?.annotations.expressed(B)}$Search(...e){this.$Writing(...e),this.containers.replace(this,"span","div")}write(){const e=this.index,t=this.book;if(!(e===void 0||t===void 0))return c($,{children:[n("span",{className:"pd-search-mark","aria-hidden":"true",children:"⌕"}),n("input",{className:"pd-search-word",type:"search",value:e.$search,placeholder:t.searchHint,"aria-label":"search",onInput:r(o=>e.search(o.target.value),"onInput")})]})}$Define(){super.$Define(),this.classes.add(this,"pd-search")}};r(Ra,"$Search");let cs=Ra;const _a=class _a extends g{get index(){return this.book?.table?.annotations.expressed(B)}$Results(...e){this.$Writing(...e),this.containers.replace(this,"span","div")}write(){const e=this.index,t=this.book;if(e===void 0||t===void 0)return;const o=e.$search.trim();if(o==="")return;const s=t.found(o);return c($,{children:[n("span",{className:"pd-results-count",children:t.countOfFound(s,o)}),s.map((i,d)=>this.result(i,d))]})}result(e,t){const o=a(Od);return n(o,{chapter:this.chapter,hit:e},this.book.placeOf(e)??t)}$Define(){super.$Define(),this.classes.add(this,"pd-results")}};r(_a,"$Results");let at=_a;const Fa=class Fa extends D{write(){}$Define(){super.$Define(),this.classes.add(this,"pd-entry-open")}};r(Fa,"$EntryOpen");let nt=Fa;const Sa=class Sa extends g{get index(){return this.book?.table?.annotations.expressed(B)}$Result(...e){this.$Writing(...e),this.containers.replace(this,"span","div")}write(){const e=this.book,t=this.$hit,o=this.index;if(e===void 0||t===void 0||o===void 0)return;const s=o.$search.trim(),i=e.wordsOf(t),d=e.placeOf(t),u=a(z),m=a(qr),l=a(this.open());return c($,{children:[n("span",{className:"pd-result-title",children:Cr(i.title,s)}),t instanceof w&&t.is(F)?n(m,{entry:t}):void 0,n("span",{className:"pd-result-synopsis",children:Cr(bd(i.text,s),s)}),d===void 0?void 0:n(l,{entry:t,children:n(u,{children:d})})]})}open(){return Dd}$Define(){super.$Define(),this.classes.add(this,"pd-result")}};r(Sa,"$Result");let rt=Sa;const bd=r((p,e)=>{if(p.length<=190)return p;const t=p.toLowerCase().indexOf(e.toLowerCase());if(t<150)return`${p.slice(0,187)}…`;const o=p.lastIndexOf(" ",t-90)+1;return`…${p.slice(o,o+186)}…`},"clipped"),Cr=r((p,e)=>{if(e==="")return p;const t=p.toLowerCase(),o=e.toLowerCase(),s=[];let i=0;for(let d=t.indexOf(o);d!==-1;d=t.indexOf(o,i))s.push(p.slice(i,d),n("mark",{children:p.slice(d,d+e.length)},d)),i=d+e.length;return s.push(p.slice(i)),s},"marked"),Ea=class Ea extends D{write(){const[e,t,o]=(this.$entry?.annotations.expressed(F)?.date?.date??"").split("-");if(!(e===void 0||t===void 0||o===void 0))return new Date(Date.UTC(Number(e),Number(t)-1,Number(o.slice(0,2)))).toLocaleString("en-GB",{day:"numeric",month:"short",timeZone:"UTC"})}$Define(){super.$Define(),this.classes.add(this,"pd-entry-day")}};r(Ea,"$EntryDay");let ls=Ea;const Ga=class Ga extends D{write(){return String(this.$section?.text.find(g).filter(e=>I(e)!==void 0).length??0)}$Define(){super.$Define(),this.classes.add(this,"pd-section-count")}};r(Ga,"$SectionCount");let hs=Ga;const Ua=class Ua extends v{$isATableOfContents(e){h(e.is(q),"an index is a table of contents, and this chapter is not one")}};r(Ua,"IndexSpecification");let it=Ua;xe([f("an index is a table of contents")],it.prototype,"$isATableOfContents");const qa=class qa extends v{$isASectionOfTheTable(e){h(e instanceof N&&e.chapter?.is(q)===!0,"the appendix is a section of the table of contents, and this is not one")}};r(qa,"AppendixSpecification");let dt=qa;xe([f("the appendix is a section of the table of contents")],dt.prototype,"$isASectionOfTheTable");const Za=class Za extends v{$isARowThatLeadsSomewhere(e){h(e instanceof g&&I(e)!==void 0,"an entry is a row that leads somewhere, and this is not one")}};r(Za,"EntrySpecification");let pt=Za;xe([f("an entry is a row that leads somewhere")],pt.prototype,"$isARowThatLeadsSomewhere");const Ya=class Ya extends k{constructor(){super(...arguments),this.specification=new lt}defines(e){e.classes.add(this,"pa-folded")}erase(e){e.classes.revert(this)}};r(Ya,"$Folded");let fs=Ya;const Xa=class Xa extends oe{get on(){return this.$foldedWriting!==void 0&&[this.$foldedWriting.$is].flat().includes(this.$annotation)}container(e){return super.container({...e,disabled:this.$foldedWriting===void 0,onClick:r(t=>{t.preventDefault(),this.press()},"onClick")})}press(){const e=this.$foldedWriting;if(e===void 0)return;const t=[e.$is].flat();e.$is=this.on?t.filter(o=>o!==this.$annotation):[this.$annotation,...t]}write(){return n("span",{className:"pd-drawing",dangerouslySetInnerHTML:{__html:Sr}})}$Define(){super.$Define(),this.classes.add(this,"pd-fold-chevron")}};r(Xa,"$FoldChevron");let gs=Xa;const Ja=class Ja extends V{constructor(){super(...arguments),this.specification=new ht,this.tree=O.div`
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
    `}get section(){return this.parent}get firstPlace(){return this.section.text.find(g).map(e=>I(e)).find(e=>e!==void 0)?.identifier}get part(){const e=this.firstPlace;return e===void 0?void 0:this.book.chapterAt(e)?.part}get open(){const e=this.book,t=e.open,o=e.$bookmark,s=this.section.mention?.identifier;return o!==void 0&&o.includes("#")&&this.section.text.find(g).some(d=>I(d)?.identifier===o)||t!==void 0&&t.part!==void 0&&t.part.name===this.part?.name||s!==void 0&&e.placeWithin(s)===o}$TreeFolder(...e){this.$Format(...e);const t=this.tree,o=a(Zr),s=a(j),i=a(z);this.style=({className:d,children:u})=>{const m=this.firstPlace,l=[...this.section.classes].includes("pa-open"),x=this.book.open!==void 0,C=this.chapter?.annotations.expressed(B)?.$folded===!0&&!(l&&x),Z=n("span",{className:"pd-drawing pd-tree-folder-mark",dangerouslySetInnerHTML:{__html:ud}});return c(t,{className:`${d??""} pd-tree-folder${l?" pa-open":""}${C?" pa-foldable":""}`.trim(),children:[n(o,{foldedWriting:this.section,annotation:bs}),m===void 0?Z:c(s,{children:[n(i,{children:m}),Z]}),u]})}}defines(e){super.defines(e),e.classes.add(this,"pa-tree-folder"),this.open&&e.classes.add(this,"pa-open")}erase(e){super.erase(e),e.classes.revert(this)}};r(Ja,"$TreeFolder");let ct=Ja;const Ka=class Ka extends v{$saidOfASectionOrAnEntry(e){h(e instanceof N&&e.chapter?.is(q)===!0||e.is(ce),"folded is said of a section of a table of contents or of an entry, and this is neither")}};r(Ka,"FoldedSpecification");let lt=Ka;xe([f("folded is said of a section of a table of contents or of an entry")],lt.prototype,"$saidOfASectionOrAnEntry");const Qa=class Qa extends v{$isASectionOfTheTable(e){h(e instanceof N&&e.chapter?.is(q)===!0,"a tree folder is a section of the table of contents, and this is not one")}};r(Qa,"TreeFolderSpecification");let ht=Qa;xe([f("a tree folder is a section of the table of contents")],ht.prototype,"$isASectionOfTheTable");const Va=class Va extends g{get cover(){return this.$cover??this.book?.cover}write(){const e=this.cover,t=a(j),o=a(z);return c(t,{children:[n(o,{children:e.mention.identifier}),n("span",{className:"pd-drawing",dangerouslySetInnerHTML:{__html:Sr}}),e.title.name]})}$Define(){super.$Define(),this.classes.add(this,"pd-tree-root")}};r(Va,"$TreeRoot");let us=Va;const I=r(p=>p.annotations.expressed(Dr)??p.text.find(D).map(e=>e.annotations.expressed(Dr)).find(e=>e!==void 0),"contentOf"),md=a(ce),zc=a(B),$d=a(st),Er=a(cs),Gr=a(at),kd=a(rt),jo=a(nt),xd=a(ls),vd=a(hs);a(le);const Ur=a(fs),wd=a(gs),Co=a(ct),yd=a(us),zd=md,Pr=$d,Od=kd,Dd=jo,qr=xd,jd=vd,bs=Ur,Zr=wd,en=class en extends li{constructor(){super(...arguments),this.font="'Inter', system-ui, sans-serif",this.prose="'Inter', system-ui, sans-serif",this.mono="'JetBrains Mono', ui-monospace, monospace",this.size="0.875rem",this.leading="1.6",this.measure="44rem",this.spreadColumn="15.5rem",this.space="1.5rem",this.holdsColumn="240px",this.barHeight="50px",this.beat="320ms",this.narrow="48rem",this.phoneWidth="390px",this.colour="#4e9eb9",this.accent="#166178",this.bar="#0c1b1f",this.barInk="#ffffff",this.barDim="#a9bcc1",this.barOn="rgba(255, 255, 255, 0.11)",this.barLine="#1d3339",this.mark="#c8f4fb",this.side="#e3f5fa",this.sideInk="#10252c",this.sideDim="#516770",this.sideOn="#ffffff",this.sideLine="#cbe6ee",this.night="#0c1b1f",this.deep="#14323c",this.blue="#166178",this.sea="#4e9eb9",this.sky="#8fc8dc",this.opal="#c8f4fb",this.pale="#e3f5fa",this.mist="#f1f7f9",this.white="#ffffff",this.ink="#10252c",this.soft="#516770",this.line="#dbe7ec",this.me="#e8590c",this.wash="linear-gradient(105deg, #e2f6fb 0%, #ecf0fd 52%, #fae9f4 100%)",this.serif="'Source Serif 4', Georgia, serif",this.between="'Source Sans 3', 'Inter', system-ui, sans-serif",this.bookPaper="#fbf9f3",this.bookInk="#29251d",this.heading="#10252c",this.capital="#166178",this.lit="#166178",this.faint="#8792a2",this.paper="#ffffff",this.panel="#f1f7f9",this.rule="#dbe7ec",this.edge="transparent",this.tint="#e3f5fa",this.dusk="#14323c",this.glow="#cfe6e3",this.dim="#4f7672",this.keyword="#8ad7ff",this.string="#ffd48a",this.type="#9be3d6",this.comment="#5f8a86",this.haze="#a9bcc1",this.glass="rgba(255, 255, 255, 0.62)",this.binding="linear-gradient(160deg, #16303a, #0c1b1f)",this.spine="inset 5px 0 0 rgba(0, 0, 0, 0.14), inset 6px 0 0 rgba(255, 255, 255, 0.12), 0 10px 20px -10px rgba(0, 0, 0, 0.45)",this.shadow="0 0.75rem 1.4rem -0.9rem rgba(12, 27, 31, 0.55)",this.volume="11.5rem",this.cover="8.25rem",this.card="18rem",this.barLight="#ffffff",this.barMid="#f1f7f9",this.barDeep="#e3f5fa",this.barShadow="none",this.sideLight="#ffffff",this.sideDeep="#e3f5fa",this.codeGround="#f1f7f9",this.hairline="1px",this.stroke="2px",this.rise="-1px",this.gloss="none",this.ring="0 0 0 2px #c8f4fb",this.decisionShadow="none",this.photo="7rem",this.radius="0.375rem",this.barTint="#ffffff",this.skyInk="#166178",this.lift="inset 5px 0 0 rgba(0, 0, 0, 0.14), inset 6px 0 0 rgba(255, 255, 255, 0.12), 0 14px 24px -12px rgba(0, 0, 0, 0.5)",this.openSpine="inset 7px 0 0 rgba(0, 0, 0, 0.14), inset 8px 0 0 rgba(255, 255, 255, 0.12), 0 12px 22px -14px rgba(0, 0, 0, 0.5)",this.sans="'Inter', system-ui, sans-serif",this.muted="#516770",this.bubble="rgba(16, 37, 44, 0.05)",this.shade="rgba(16, 37, 44, 0.03)",this.pill="#166178",this.column="48rem",this.style=O.div`${this.parts()}`}parts(){return[this.page(),this.writing(),this.links(),this.figures(),this.listings(),this.switches(),this.turns(),this.illustrations(),this.marks(),this.library(),this.head(),this.holds(),this.context(),this.tones()]}page(){return b`
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
        `}};r(en,"$LibraryBookTheme");let ft=en;const Cd=a(ft);var Pd=Object.defineProperty,Nd=Object.getOwnPropertyDescriptor,Ad=r((p,e,t,o)=>{for(var s=Nd(e,t),i=p.length-1,d;i>=0;i--)(d=p[i])&&(s=d(e,t,s)||s);return s&&Pd(e,t,s),s},"__decorateClass$b");const Tt=class Tt extends hi{constructor(){super(...arguments),this.specification=new gt,this.themeProvider=!0,this.style=O.div`
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
    `}get rules(){return this.parts().flat(1/0).filter(e=>typeof e=="string").join("")}get pages(){return this.book.pages}get open(){const e=this.book;return e.open??e.synopsis}$Bound(){const e=this.style,t=this.book;this.style=o=>n(e,{$at:t.means?.identifier,$scheme:t.cover?.annotations.expressed(E)?.declarations,...o}),super.$Bound()}defines(e){for(const o of e.annotations.after(this))o instanceof Tt&&e.annotations.express(o,!1);super.defines(e),e.classes.add(this,"pa-layout");const t=this.book.open;t!==void 0&&e.classes.add(this,"pa-turned"),t?.is(P)&&e.classes.add(this,"pa-manual")}erase(e){super.erase(e),e.classes.revert(this)}parts(){return[this.paging(),this.regions(),this.areas(),this.phone()]}paging(){return b`
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
        `}};r(Tt,"$Layout");let he=Tt;const tn=class tn extends R{$placesTheSideAndNeverDressesIt(e){for(const t of e.annotations.find(he)){const o=(t.rules.match(/[^{};]*\.pd-holds\s+[^\s{},][^{};]*\{/gu)??[]).map(s=>s.trim());h(o.length===0,`a layout places the side and never dresses it, what stands in the side being the index's and the folder's, and this one says "${o[0]}"`)}}};r(tn,"LayoutSpecification");let gt=tn;Ad([f("a layout places the side and never dresses it")],gt.prototype,"$placesTheSideAndNeverDressesIt");const Po=a(he),Wt=class Wt extends k{constructor(){super(...arguments),this.specification=new R}defines(e){for(const t of e.annotations.after(this))t instanceof Wt&&e.annotations.express(t,!1);e.classes.add(this,"pa-tone")}erase(e){e.classes.revert(this)}};r(Wt,"$Tone");let fe=Wt;const sn=class sn extends fe{defines(e){super.defines(e),e.classes.add(this,"pa-dark")}};r(sn,"$Dark");let ms=sn;const on=class on extends fe{defines(e){super.defines(e),e.classes.add(this,"pa-light")}};r(on,"$Light");let $s=on;const an=class an extends fe{defines(e){super.defines(e),e.classes.add(this,"pa-white-over-black")}};r(an,"$WhiteOverBlack");let ks=an;const Fe=a(fe),Yr=a(ms),Rt=a($s),Md=a(ks);var Id=Object.defineProperty,Td=Object.getOwnPropertyDescriptor,Wd=r((p,e,t,o)=>{for(var s=Td(e,t),i=p.length-1,d;i>=0;i--)(d=p[i])&&(s=d(e,t,s)||s);return s&&Id(e,t,s),s},"__decorateClass$a");const nn=class nn extends D{write(){const e=this.book.body;return`${e.indexOf(this.chapter)+1} of ${e.length}`}$Define(){super.$Define(),this.classes.add(this,"pd-count")}};r(nn,"$Count");let xs=nn;const rn=class rn extends k{constructor(){super(...arguments),this.specification=new Pe}defines(e){e.classes.add(this,"pa-before")}erase(e){e.classes.revert(this)}};r(rn,"$Before");let vs=rn;const dn=class dn extends k{constructor(){super(...arguments),this.specification=new Pe}defines(e){e.classes.add(this,"pa-after")}erase(e){e.classes.revert(this)}};r(dn,"$After");let ws=dn;const pn=class pn extends v{$saidOfAWordOfATurn(e){h(e instanceof D&&e.parent instanceof ut,"this is said of a word of a turn, and here it is said of something else")}};r(pn,"OfATurnSpecification");let Pe=pn;Wd([f("this is said of a word of a turn")],Pe.prototype,"$saidOfAWordOfATurn");const Hd=a(xs),Bd=a(vs),Ld=a(ws),cn=class cn extends g{get before(){const e=this.book.body;return e[e.indexOf(this.chapter)-1]??this.chapter}get after(){const e=this.book.body;return e[e.indexOf(this.chapter)+1]??this.chapter}write(){const e=a(j),t=a(Hd),o=a(Bd),s=a(Ld),i=a(this.before===this.chapter?jr:z),d=a(this.after===this.chapter?jr:z);return c($,{children:[c(e,{children:[n(o,{}),n(i,{children:this.before.mention.identifier}),"← ",this.before.title.name]}),n(t,{}),c(e,{children:[n(s,{}),n(d,{children:this.after.mention.identifier}),this.after.title.name," →"]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-turn")}};r(cn,"$Turn");let ut=cn;const Rd=a(ut);var _d=Object.defineProperty,Fd=Object.getOwnPropertyDescriptor,te=r((p,e,t,o)=>{for(var s=o>1?void 0:o?Fd(e,t):e,i=p.length-1,d;i>=0;i--)(d=p[i])&&(s=(o?d(e,t,s):d(s))||s);return o&&s&&_d(e,t,s),s},"__decorateClass$9");const ln=class ln extends Ar{constructor(){super(...arguments),this.specification=new S}get chapters(){return this.text.find(w).filter(e=>[...e.classes].includes("pd-canonical"))}get laidOutChapters(){return[this.cover,this.synopsis,this.table,...this.chapters]}get pages(){return[this.synopsis,...this.chapters].filter(e=>e!==void 0)}get body(){if(this._body===void 0){const e=this.appendix;this._body=this.chapters.filter(t=>!e.includes(t))}return this._body}get entries(){return this.body}get appendix(){const e=this.table;if(e===void 0)return[];const t=e.text.find(N).filter(o=>o.is(le)).flatMap(o=>o.text.find(g).map(s=>I(s)?.identifier));return this.chapters.filter(o=>t.includes(o.mention?.identifier??""))}get open(){return this.$bookmark===void 0?void 0:this.chapterAt(this.$bookmark)}get tones(){return[Yr,Rt,Md]}get topics(){return this.cover?.annotations.find(Ir)??[]}get subjectCover(){return this.coverOf(this.subject?.means?.identifier)}get searchHint(){return"a word"}wordsOf(e){const t=(this._words??=new Map).get(e);if(t!==void 0)return t;const o=e instanceof w?e.title?.name??"":"",s=e.text.find(g).filter(d=>![...d.classes].includes("pa-caption")).map(d=>y.copy(d.text).replace(/\s+/gu," ").trim()).join(" "),i={title:o,text:s,lower:`${o} ${s}`.toLowerCase()};return this._words.set(e,i),i}found(e){const t=e.trim().toLowerCase();if(t==="")return[];const o=this.table?.annotations.expressed(B);return o===void 0?[]:o.entries.map(s=>o.chapterOf(s)).filter(s=>s!==void 0&&this.wordsOf(s).lower.includes(t))}countOfFound(e,t){return c($,{children:[n("b",{children:e.length})," ",e.length===1?"entry says":"entries say"," “",t,"”"]})}placeOf(e){return e instanceof w?e.mention?.identifier:void 0}sought(e){}write(){return c($,{children:[n("div",{className:"pd-library",children:this.library()}),n("div",{className:"pd-me",children:this.me()}),n("div",{className:"pd-holds",children:this.holds()}),n("div",{className:"pd-head",children:this.head()}),c("div",{className:"pd-pages",children:[this.aboveThePages(),this.pages.map((e,t)=>{const o=a(e);return n(o,{},t)}),this.belowThePages()]})]})}library(){if(this._logo===void 0)return;const e=a(this._logo);return n(e,{})}me(){const e=a(Fr),t=a(z),o=a(ad),s=this.coverOf(this.author?.means?.identifier);return c($,{children:[this.byline(),s===void 0?void 0:this.painted(s,n(e,{cover:s,children:n(t,{children:s.mention.identifier})})),this.topics.length===0?void 0:n(o,{cover:this.cover})]})}painted(e,t,o){return se(e,t,o)}holds(){const e=a(this.table);return n(e,{})}head(){const e=a(this.cover);return c($,{children:[n(e,{}),n("div",{className:"pd-switches",children:this.switches()})]})}aboveThePages(){}belowThePages(){}chapterAt(e){return(this._chapterByPlace??this.chapterByPlace()).get(e)}chapterByPlace(){const e=new Map;for(const t of this.chapters)for(const o of this.sections(t))o.mention!==void 0&&!e.has(o.mention.identifier)&&e.set(o.mention.identifier,t);for(const t of this.chapters)t.mention!==void 0&&e.set(t.mention.identifier,t);for(const t of this.entries)t.mention!==void 0&&!e.has(t.mention.identifier)&&e.set(t.mention.identifier,t);return e}placeWithin(e){return e.startsWith("#")?`${this.means?.identifier??""}${e}`:e}coverOf(e){if(e!==void 0)return this.means?.identifier===e?this.cover:this.cover?.annotations.find(T).map(t=>t.cover).find(t=>t?.mention?.identifier===e)}byline(){const e=a(od);return n(e,{chapter:this.cover})}root(){const e=a(yd);return n(e,{cover:this.cover})}switches(){}sections(e){return e.text.find(N).flatMap(t=>[t,...this.sections(t)])}sectionOf(e){const t=this.table;return t===void 0?void 0:this.sections(t).find(o=>o.canonical?.name===e.name)}turn(){this.bookmark!==this.cover&&super.turn()}$Define(){super.$Define();const e=a(Po),t=a(Fe);this.annotations.add(this,n(e,{}),n(t,{}))}$Bound(){this._chapterByPlace=this.chapterByPlace();const e=a(Co),t=this.table?.annotations.expressed(q);for(const i of t?.parts??[]){const d=this.sectionOf(i);d===void 0||d.is(ct)||!i.chapters.some(u=>u.is(P))||d.annotations.add(this,n(e,{}))}const o=this.root();o!==void 0&&this.table?.text.add(this,o);const s=a(pd);this._logo=fi.chemical(n(s,{cover:this.cover,subject:this.subjectCover}),this),this.turns(),super.$Bound()}turns(){const e=a(Rd);for(const t of this.body)t.text.add(this,n(e,{}))}};r(ln,"$LibraryBook");let G=ln;te([Ht()],G.prototype,"_chapterByPlace",2);te([Ht()],G.prototype,"_body",2);te([Ht()],G.prototype,"_words",2);const hn=class hn extends gi{$holdsOnlyChapters(e){h([...e.text].every(t=>t instanceof w),"a book of this library holds only chapters, and this one holds something else")}$placesEveryChapter(e){h(e.text.find(w).every(t=>e.laidOutChapters.includes(t)),"a book of this library has a place for every chapter it holds, and this one holds a chapter it places nowhere")}$onlyAChapterAppends(e){h(e.text.find(w).every(t=>e.chapters.includes(t)||!t.is(J)),"only an ordinary chapter files a file, and here a cover, a synopsis or a table of contents files one")}$listsEachManualPart(e){const o=(e.table?.annotations.expressed(q)?.parts??[]).find(s=>s.chapters.some(i=>i.is(P))&&e.sectionOf(s)===void 0);h(o===void 0,`a part read as a manual is listed under a section headed with its name, and "${o?.name}" has none`)}};r(hn,"LibraryBookSpecification");let S=hn;te([f("a book of this library holds only chapters")],S.prototype,"$holdsOnlyChapters",1);te([f("a book of this library has a place for every chapter it holds")],S.prototype,"$placesEveryChapter",1);te([f("only an ordinary chapter files a file")],S.prototype,"$onlyAChapterAppends",1);te([f("a part read as a manual is listed under a section headed with its name")],S.prototype,"$listsEachManualPart",1);const Xr=a(G);a(Xr,io)(Cd);a(Xr,Fe)(Yr);var Sd=Object.defineProperty,Ed=Object.getOwnPropertyDescriptor,Gd=r((p,e,t,o)=>{for(var s=Ed(e,t),i=p.length-1,d;i>=0;i--)(d=p[i])&&(s=d(e,t,s)||s);return s&&Sd(e,t,s),s},"__decorateClass$8");const fn=class fn extends G{constructor(){super(...arguments),this.specification=new Ne}get open(){return super.open??this.body[0]}head(){}switches(){}root(){}$Define(){super.$Define(),this.$is=[$o,ko]}$Bound(){const e=a(Co);for(const t of this.table?.text.find(N)??[])t.annotations.add(this,n(e,{})),t.is(le)&&(t.$is=[Ur]);super.$Bound()}};r(fn,"$Manual");let bt=fn;const gn=class gn extends S{$everyChapterHasABrief(e){h(e.chapters.every(t=>t.text.find(g).some(o=>o.is(we))),"every chapter of a manual opens with a brief, and one here has none")}};r(gn,"ManualSpecification");let Ne=gn;Gd([f("every chapter of a manual opens with a brief")],Ne.prototype,"$everyChapterHasABrief");const Ud=a(bt);a(Ud,Fe)(Rt);const un=class un extends ft{constructor(){super(...arguments),this.prose="'Source Serif 4', Georgia, serif",this.ink="#343c4a",this.heading="#1a1f36",this.soft="#727d8c",this.faint="#9ea8b5",this.line="#e4e9f2",this.paper="#ffffff",this.side="#f8f9fb",this.holdsColumn="240px",this.barHeight="52px",this.shadow="0 1px 2px rgba(43, 54, 60, 0.05), 0 6px 18px rgba(43, 54, 60, 0.05)",this.lift="0 2px 4px rgba(43, 54, 60, 0.06), 0 14px 32px rgba(43, 54, 60, 0.10)",this.barLight="#fcfcfd",this.barMid="#f8f9fc",this.barDeep="#f2f4f9",this.barShadow="0 1px 0 rgba(43, 54, 60, 0.05)",this.sideLight="#fafbfc",this.sideDeep="#f2f4f8",this.hairline="1px",this.stroke="2px"}parts(){return[...super.parts(),this.bands(),this.guide(),this.order(),this.surface(),this.entries(),this.small()]}bands(){return b`
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
        `}};r(un,"$Typeset");let mt=un;const qd=a(mt);var Zd=Object.defineProperty,Yd=Object.getOwnPropertyDescriptor,Jr=r((p,e,t,o)=>{for(var s=Yd(e,t),i=p.length-1,d;i>=0;i--)(d=p[i])&&(s=d(e,t,s)||s);return s&&Zd(e,t,s),s},"__decorateClass$7");const M=r(p=>p.annotations.expressed(F)?.date?.date??"","dayOf"),ge=r(p=>{const[e,t]=M(p).split("-");return e===void 0||t===void 0?"":new Date(Date.UTC(Number(e),Number(t)-1,1)).toLocaleString("en-GB",{month:"long",year:"numeric",timeZone:"UTC"})},"monthOf"),bn=class bn extends k{constructor(){super(...arguments),this.specification=new R}defines(e){e.classes.add(this,"pa-newest-first")}erase(e){e.classes.revert(this)}};r(bn,"$NewestFirst");let $t=bn;const Xd=a($t),Kr=Xd,mn=class mn extends g{write(){const e=a(bo);return n(e,{annotation:Kr,children:"newest first"})}$Define(){super.$Define(),this.classes.add(this,"pd-entry-order")}};r(mn,"$EntryOrder");let ys=mn;const $n=class $n extends D{write(){return String(this.book.entries.indexOf(this.chapter)+1)}$Define(){super.$Define(),this.classes.add(this,"pd-entry-number")}};r($n,"$EntryNumber");let zs=$n;const kn=class kn extends he{paging(){return b``}};r(kn,"$JournalLayout");let Os=kn;const Jd=a(ys),Kd=a(zs),Qd=a(Os),Vd=Jd,ep=Kd,xn=class xn extends G{constructor(){super(...arguments),this.specification=new Ae}get latest(){return[...this.entries].sort((e,t)=>M(t).localeCompare(M(e)))[0]}get pages(){const e=[...this.entries].sort((t,o)=>M(t).localeCompare(M(o)));return this.is($t)?e.reverse():e}get open(){return super.open??this.latest}head(){}switches(){}turns(){}$Bound(){const e=a(ep);for(const s of this.entries)s.text.add(this,n(e,{}));const t=this.table?.annotations.expressed(B);t!==void 0&&(t.$dated=!0);const o=a(Vd);this.table?.text.add(this,n(o,{})),this.$is=[Kr],super.$Bound()}};r(xn,"$Journal");let Ds=xn;const vn=class vn extends S{$everyEntryIsDated(e){const t=e.entries.find(o=>!o.is(F));h(t===void 0,`every entry of a journal is dated, and "${t?.title?.name}" is not`)}$everyEntrySaysItsMonth(e){const t=e.entries.find(o=>o.part?.name!==ge(o));h(t===void 0,t===void 0?"":`every entry of a journal says the month of its date as its part, and "${t.title?.name}" says "${t.part?.name??"none"}" for ${ge(t)}`)}};r(vn,"JournalSpecification");let Ae=vn;Jr([f("every entry of a journal is dated")],Ae.prototype,"$everyEntryIsDated");Jr([f("every entry of a journal says the month of its date as its part")],Ae.prototype,"$everyEntrySaysItsMonth");const No=a(Ds);a(No,io)(qd);a(No,Fe)(Rt);a(No,Po)(Qd);var tp=Object.defineProperty,sp=Object.getOwnPropertyDescriptor,op=r((p,e,t,o)=>{for(var s=sp(e,t),i=p.length-1,d;i>=0;i--)(d=p[i])&&(s=d(e,t,s)||s);return s&&tp(e,t,s),s},"__decorateClass$6");const wn=class wn extends k{constructor(){super(...arguments),this.specification=new kt}get section(){return this.parent instanceof N?this.parent:void 0}get headings(){const e=this.section;return e===void 0?[]:e.text.find(Tr).filter(t=>t!==e.canonical)}defines(e){e.classes.add(this,"pa-opaque")}erase(e){e.classes.revert(this)}$Bound(){for(const e of this.headings){const t=e.annotations.expressed(Lt),o=e.annotations.expressed(ui);for(const s of[t,o])s!==void 0&&e.annotations.remove(e,s)}super.$Bound()}};r(wn,"$Opaque");let js=wn;const yn=class yn extends v{$saidOfASection(e){h(e instanceof N,"opaque is said of a section, and this is not one")}};r(yn,"OpaqueSpecification");let kt=yn;op([f("opaque is said of a section")],kt.prototype,"$saidOfASection");const ap=a(js);var np=Object.defineProperty,rp=Object.getOwnPropertyDescriptor,U=r((p,e,t,o)=>{for(var s=rp(e,t),i=p.length-1,d;i>=0;i--)(d=p[i])&&(s=d(e,t,s)||s);return s&&np(e,t,s),s},"__decorateClass$5");const zn=class zn extends Tr{$Define(){super.$Define(),this.classes.add(this,"pd-speaker")}$Bound(){super.$Bound();const e=this.annotations.expressed(Lt);e!==void 0&&this.annotations.remove(this,e)}};r(zn,"$Speaker");let Me=zn;const On=class On extends ao{$Define(){super.$Define(),this.classes.add(this,"pd-time")}};r(On,"$Time");let Cs=On;const Dn=class Dn extends bi{$Define(){super.$Define(),this.classes.add(this,"pd-participant")}};r(Dn,"$Participant");let xt=Dn;const jn=class jn extends g{get participants(){return this.text.find(xt)}write(){const e=this.participants;return e.flatMap((t,o)=>{const s=a(t);return[o===0?"":o===e.length-1?" and ":", ",n(s,{},o)]})}$Define(){super.$Define(),this.classes.add(this,"pd-participants")}};r(jn,"$Participants");let vt=jn;a(Me);const ip=a(Cs),Oc=a(xt),Dc=a(vt),dp=ip,pp=r(p=>{const e=new Date(p);if(Number.isNaN(e.getTime()))return p;const t=e.toLocaleDateString("en-GB",{day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return`${e.toLocaleTimeString("en-GB",{hour:"2-digit",minute:"2-digit",timeZone:"UTC"})} UTC, ${t}`},"shownTime"),Cn=class Cn extends N{constructor(){super(...arguments),this.specification=new Ie,this.$at=void 0}get when(){return this.$at??""}get speaker(){return this.text.find(Me)[0]}write(){const e=a(dp),t=this.speaker,o=t===void 0?void 0:a(t),s=[...this.text].filter(i=>i!==t);return c($,{children:[o===void 0?void 0:n(o,{}),n(e,{children:`[${pp(this.when)}](${this.when})`}),n("div",{className:"pd-said",children:s.map((i,d)=>{const u=a(i);return n(u,{},d)})})]})}$Define(){super.$Define(),this.classes.add(this,"pd-message");const e=a(ap);if(this.annotations.add(this,n(e,{})),this.when==="")return;const t=this.speaker,o=t===void 0?"":L.reference(y.copy(t.text))?.name??y.copy(t.text),s=a(mi);this.annotations.add(this,n(s,{children:Wr.slug(`${this.when.replace(/Z$/u,"")} ${o}`)}))}$Bound(){const e=this.book?.author?.means?.identifier;if(e!==void 0&&this.speaker?.means?.identifier===e){const t=a(lp);this.annotations.add(this,n(t,{}))}super.$Bound()}};r(Cn,"$Message");let W=Cn;const Pn=class Pn extends k{constructor(){super(...arguments),this.specification=new yt}defines(e){e.classes.add(this,"pa-mine")}erase(e){e.classes.revert(this)}};r(Pn,"$Mine");let wt=Pn;const Nn=class Nn extends v{$saidOfAMessage(e){h(e instanceof W,"mine is said of a message, and this is not one")}};r(Nn,"MineSpecification");let yt=Nn;U([f("mine is said of a message")],yt.prototype,"$saidOfAMessage");const cp=a(wt),lp=cp,An=class An extends k{constructor(){super(...arguments),this.specification=new Ot}defines(e){e.classes.add(this,"pa-quoted")}erase(e){e.classes.revert(this)}};r(An,"$Quoted");let Ps=An;const Mn=class Mn extends k{constructor(){super(...arguments),this.specification=new Dt}defines(e){e.classes.add(this,"pa-verbatim")}erase(e){e.classes.revert(this)}};r(Mn,"$Verbatim");let Ns=Mn;const In=class In extends k{constructor(){super(...arguments),this.specification=new Te,this.$from=void 0,this.$to=void 0}get from(){return this.$from??""}get to(){return this.$to??""}defines(e){e.classes.add(this,"pa-period")}erase(e){e.classes.revert(this)}};r(In,"$Period");let zt=In;const Tn=class Tn extends k{constructor(){super(...arguments),this.specification=new Te,this.$shown=void 0,this.$all=void 0}get shown(){return Number(this.$shown??0)}get all(){return Number(this.$all??0)}get aside(){return this.all-this.shown}defines(e){e.classes.add(this,"pa-messages")}erase(e){e.classes.revert(this)}};r(Tn,"$Messages");let ue=Tn;const Wn=class Wn extends $i{$saysWhen(e){h(e.when!==""&&!Number.isNaN(Date.parse(e.when)),"a message says when it was said, as an instant the machine can read, and this one does not")}$headedByItsSpeaker(e){h(e.canonical instanceof Me,"a message is headed by its speaker, a heading that refers to them, and this one is not")}};r(Wn,"MessageSpecification");let Ie=Wn;U([f("a message says when it was said")],Ie.prototype,"$saysWhen");U([f("a message is headed by its speaker")],Ie.prototype,"$headedByItsSpeaker");const Hn=class Hn extends v{$saidOfAParagraph(e){h(e instanceof g,"this is said of a paragraph, and this is not one")}};r(Hn,"OfAParagraphSpecification");let Ot=Hn;U([f("this is said of a paragraph")],Ot.prototype,"$saidOfAParagraph");const Bn=class Bn extends v{$saidOfACover(e){h(e instanceof w&&e.is(A),"this is said of a cover, and this is not one")}};r(Bn,"OfACoverSpecification");let Te=Bn;U([f("this is said of a cover")],Te.prototype,"$saidOfACover");const Ln=class Ln extends v{$saidOfAWord(e){h(e instanceof D,"verbatim is said of a word, and this is not one")}};r(Ln,"VerbatimSpecification");let Dt=Ln;U([f("verbatim is said of a word")],Dt.prototype,"$saidOfAWord");a(W);a(Ps);a(Ns);const jc=a(zt),Cc=a(ue),Nr=r(p=>p===void 0||p===""?"":new Date(p).toLocaleDateString("en-GB",{day:"numeric",month:"long",year:"numeric",timeZone:"UTC"}),"dayWords"),Rn=class Rn extends g{write(){const e=this.book,t=e.messageCount?.shown??e.messages.length,o=new Set(e.messages.map(d=>d.when.slice(0,10))).size,s=Nr(e.period?.from),i=Nr(e.period?.to);return c($,{children:[c("span",{className:"pd-tally-count",children:[n("b",{children:t}),o===1?" messages in ":" messages over ",n("b",{children:o}),o===1?" day":" days"]}),n("span",{className:"pd-tally-period",children:s===i?s:`${s} to ${i}`})]})}$Define(){super.$Define(),this.classes.add(this,"pd-tally")}};r(Rn,"$Tally");let As=Rn;const _n=class _n extends D{write(){return String(this.$entry?.text.find(W).length??0)}$Define(){super.$Define(),this.classes.add(this,"pd-day-count")}};r(_n,"$DayCount");let Ms=_n;const hp=a(As),fp=a(Ms),gp=hp,up=fp,Fn=class Fn extends G{constructor(){super(...arguments),this.specification=new be}get participants(){return this.cover?.text.find(vt)[0]?.participants??[]}get period(){return this.cover?.annotations.expressed(zt)}get messageCount(){return this.cover?.annotations.expressed(ue)}get messages(){return this.body.flatMap(e=>e.text.find(W))}get pages(){return[...[...this.body].sort((t,o)=>M(t).localeCompare(M(o))),...this.appendix]}get open(){return super.open??this.pages[0]}head(){const e=a(gp);return c($,{children:[super.head(),n(e,{chapter:this.cover})]})}$Bound(){const e=a(up);for(const t of this.table?.annotations.expressed(B)?.entries??[]){const o=I(t)?.identifier,s=o===void 0?void 0:this.chapterAt(o);s===void 0||!this.body.includes(s)||t.text.add(this,n(e,{entry:s}))}super.$Bound()}};r(Fn,"$Conversation");let jt=Fn;const Sn=class Sn extends S{$saysItsParticipantsPeriodAndCount(e){h(e.participants.length>0&&e.period!==void 0&&e.messageCount!==void 0,"a conversation says its participants, its period and how many messages it holds, on its cover, and this one says less")}$everyMessageIsAddressed(e){const t=e.messages.find(o=>o.annotations.expressed(Lt)===void 0);h(t===void 0,`every message of a conversation is addressed by its time, and the one at "${t?.when}" is not`)}$everyChapterHoldsAMessage(e){const t=e.body.find(o=>o.text.find(W).length===0);h(t===void 0,`every chapter of a conversation holds a message, and "${t?.title?.name}" holds none`)}};r(Sn,"ConversationSpecification");let be=Sn;U([f("a conversation says its participants, its period and how many messages it holds")],be.prototype,"$saysItsParticipantsPeriodAndCount");U([f("every message of a conversation is addressed by its time")],be.prototype,"$everyMessageIsAddressed");U([f("every chapter of a conversation holds a message")],be.prototype,"$everyChapterHoldsAMessage");a(jt);var bp=Object.defineProperty,mp=Object.getOwnPropertyDescriptor,_t=r((p,e,t,o)=>{for(var s=o>1?void 0:o?mp(e,t):e,i=p.length-1,d;i>=0;i--)(d=p[i])&&(s=(o?d(e,t,s):d(s))||s);return o&&s&&bp(e,t,s),s},"__decorateClass$4");const En=class En extends k{constructor(){super(...arguments),this.specification=new R}defines(e){e.classes.add(this,"pa-synopses")}erase(e){e.classes.revert(this)}};r(En,"$Synopses");let Is=En;const $p=a(Is),kp=$p,Gn=class Gn extends g{write(){const e=a(bo);return n(e,{annotation:kp,children:"with the synopsis"})}$Define(){super.$Define(),this.classes.add(this,"pd-row-form")}};r(Gn,"$RowForm");let Ts=Gn;const Un=class Un extends D{write(){return`${this.chapter?.annotations.expressed(T)?.cover?.annotations.expressed(ue)?.shown??0} exchanges`}$Define(){super.$Define(),this.classes.add(this,"pd-entry-count")}};r(Un,"$EntryCount");let Ws=Un;const qn=class qn extends D{write(){return ge(this.chapter)}$Define(){super.$Define(),this.classes.add(this,"pd-entry-month")}};r(qn,"$EntryMonth");let Hs=qn;const Zn=class Zn extends g{get project(){return this.book}$ProjectHead(...e){this.$Writing(...e),this.containers.replace(this,"span","div")}write(){const e=this.project;if(e===void 0)return;const t=a(j),o=a(z),s=e.coverOf(e.subject?.means?.identifier),i=e.entries,d=i.reduce((C,Z)=>C+(Z.annotations.expressed(T)?.cover?.annotations.expressed(ue)?.shown??0),0),u=i.map(M).filter(C=>C!=="").sort(),m=u.length===0?"":`${ge(i.find(C=>M(C)===u[0]))} to ${ge(i.find(C=>M(C)===u[u.length-1]))}`,l=e.brief,x=e.instructions;return c($,{children:[c("span",{className:"pd-crumbs",children:[s===void 0?void 0:c(t,{children:[n(o,{children:s.mention.identifier}),s.title?.name]}),n("i",{children:"/"}),n(t,{children:e.title?.name})]}),l===""?void 0:n("span",{className:"pd-brief",children:l}),x===void 0?void 0:c("span",{className:`pd-instructions${x.set?"":" pa-none"}`,children:[n("b",{children:"Instructions"}),n("span",{children:x.set?x.words:"none were set on this project"})]}),c("span",{className:"pd-report",children:[c("span",{children:[n("b",{children:i.length})," conversations"]}),c("span",{children:[n("b",{children:d})," exchanges"]}),c("span",{children:[n("b",{children:e.files.length})," files"]}),n("span",{children:m})]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-project-head")}};r(Zn,"$ProjectHead");let Bs=Zn;const Yn=class Yn extends g{constructor(){super(...arguments),this.style=O.div`
        .pd-book &.pd-paragraph { display: flex; flex-direction: column; margin: 0; padding: calc(${({theme:e})=>e.space} * 1.0833) ${({theme:e})=>e.space} calc(${({theme:e})=>e.space} * 1.6667) calc(${({theme:e})=>e.space} / 3); }
        .pd-book & .pd-knowledge-row { display: flex; align-items: center; gap: calc(${({theme:e})=>e.space} * 0.4167); padding: calc(${({theme:e})=>e.space} / 2) calc(${({theme:e})=>e.space} * 0.4167); border-block-end: thin solid rgba(11, 11, 11, .08); font-family: ${({theme:e})=>e.font}; font-size: ${({theme:e})=>e.size}; font-weight: 500; line-height: 1.4; color: ${({theme:e})=>e.ink}; }
        .pd-book & .pd-knowledge-row a.pa-reference, .pd-book & .pd-knowledge-file a.pa-reference { min-width: 0; overflow: hidden; color: inherit; text-decoration: none; }
        .pd-book & .pd-knowledge-row .pd-word.pa-reference { color: inherit; text-decoration: none; }
        .pd-book & .pd-knowledge-row small { font-weight: 400; color: ${({theme:e})=>e.faint}; }
        .pd-book & .pd-knowledge-row .pd-at-right { margin-inline-start: auto; font-size: calc(0.8929 * ${({theme:e})=>e.size}); font-weight: 500; color: ${({theme:e})=>e.soft}; }
        .pd-book & .pd-knowledge-files { display: flex; flex-direction: column; padding-block-start: calc(${({theme:e})=>e.space} / 4); }
        .pd-book & .pd-knowledge-file { display: grid; grid-template-columns: calc(1.1429 * ${({theme:e})=>e.size}) minmax(0, 1fr) auto; align-items: center; column-gap: calc(${({theme:e})=>e.space} * 0.4167); padding: calc(${({theme:e})=>e.space} * 0.2917) calc(${({theme:e})=>e.space} * 0.4167); border-radius: ${({theme:e})=>e.radius}; transition: background ${({theme:e})=>e.beat} ease; }
        .pd-book & .pd-knowledge-file:hover { background: rgba(11, 11, 11, .05); }
        .pd-book & .pd-knowledge-file .pd-drawing { width: calc(1.1429 * ${({theme:e})=>e.size}); height: calc(1.1429 * ${({theme:e})=>e.size}); color: ${({theme:e})=>e.soft}; }
        .pd-book & .pd-knowledge-file .pd-drawing svg { display: block; width: 100%; height: 100%; fill: none; stroke: currentColor; stroke-width: 1.25; stroke-linecap: round; stroke-linejoin: round; }
        .pd-book & .pd-knowledge-file .pd-word.pa-reference { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-size: calc(0.9643 * ${({theme:e})=>e.size}); font-weight: 400; color: ${({theme:e})=>e.ink}; text-decoration: none; }
        .pd-book & .pd-file-type { padding: 0 4px; border: thin solid ${({theme:e})=>e.line}; border-radius: 4px; font-size: calc(0.7143 * ${({theme:e})=>e.size}); font-weight: 500; letter-spacing: .06em; line-height: 1.5; text-transform: uppercase; color: ${({theme:e})=>e.faint}; }
    `}get project(){return this.book}$Knowledge(...e){this.$Writing(...e),this.containers.replace(this,"span",this.style)}write(){const e=this.project;if(e===void 0)return;const t=a(j),o=a(z),s=e.project,i='<svg viewBox="0 0 16 16"><path d="M4 1.5h5.5L13 5v9.5H4z"/><path d="M9.5 1.5V5H13M6 8h4M6 10.5h4"/></svg>';return c($,{children:[s?.mention===void 0?void 0:c("span",{className:"pd-knowledge-row",children:[c(t,{children:[n(o,{children:s.mention.identifier}),s.title?.name]}),n("span",{className:"pd-at-right",children:"what it is, its instructions"})]}),c("span",{className:"pd-knowledge-row",children:["Files",n("small",{children:e.files.length}),n("span",{className:"pd-at-right",children:"as uploaded"})]}),n("span",{className:"pd-knowledge-files",children:e.files.map((d,u)=>c("span",{className:"pd-knowledge-file",children:[n("span",{className:"pd-drawing",dangerouslySetInnerHTML:{__html:i}}),c(t,{children:[n(o,{children:d.mention.identifier}),d.title?.name]}),n("span",{className:"pd-file-type",children:(d.annotations.find(J)[0]?.$type??"").replace(/^\./u,"")})]},u))})]})}$Define(){super.$Define(),this.classes.add(this,"pd-knowledge")}};r(Yn,"$Knowledge");let Ls=Yn;const Xn=class Xn extends he{paging(){return b`
            .pd-book.pa-turned .pa-page:not(.pa-open) { display: none; }
            .pd-book:not(.pa-turned) .pa-page.pa-spread { display: none; }
        `}areas(){return b`
            ${super.areas()}
            .pd-book.pa-layout:not(.pa-turned) .pd-head { display: grid; gap: calc(${({theme:e})=>e.space} / 4); align-content: end; padding: calc(${({theme:e})=>e.space} * 0.9167) calc(${({theme:e})=>e.space} * 1.5) calc(${({theme:e})=>e.space} * 0.5833); }
            .pd-book.pa-layout.pa-turned .pd-head { display: none; }
            .pd-book:not(.pa-turned) .pd-holds { padding-block-start: calc(${({theme:e})=>e.space} * 0.4167); }
            ${this.head()}
            ${this.list()}
            ${this.search()}
        `}search(){return b`
            .pd-book .pd-head .pd-paragraph.pd-search { order: 4; grid-column: 1 / -1; display: flex; align-items: center; gap: calc(${({theme:e})=>e.space} / 3); width: min(440px, 100%); margin: calc(${({theme:e})=>e.space} * 0.4167) 0 0; padding: calc(${({theme:e})=>e.space} * 0.2917) calc(${({theme:e})=>e.space} / 2); border: thin solid ${({theme:e})=>e.line}; border-radius: calc(${({theme:e})=>e.space} * 0.4167); background: ${({theme:e})=>e.side}; color: ${({theme:e})=>e.soft}; }
            .pd-book .pd-head .pd-search .pd-search-mark { font-style: normal; font-size: calc(1.1429 * ${({theme:e})=>e.size}); color: ${({theme:e})=>e.faint}; }
            .pd-book .pd-head .pd-search .pd-search-word { flex: 1; min-width: 0; border: 0; background: none; padding: 0; font-family: ${({theme:e})=>e.font}; font-size: ${({theme:e})=>e.size}; line-height: calc(1.4286 * ${({theme:e})=>e.size}); color: ${({theme:e})=>e.ink}; outline: none; }
            .pd-book .pd-head .pd-search .pd-search-word::placeholder { color: ${({theme:e})=>e.soft}; }
            .pd-book .pd-head .pd-search .pd-search-word::-webkit-search-cancel-button { cursor: pointer; }
            .pd-book:not(.pa-turned):has(.pd-chapter.pa-table-of-contents.pa-searching) .pd-pages .pd-chapter.pa-page.pa-volume { display: none; }
            .pd-book .pd-pages .pd-paragraph.pd-results { display: block; width: min(768px, 100%); margin: 0; }
            .pd-book .pd-pages .pd-results .pd-results-count { display: block; margin: calc(${({theme:e})=>e.space} * 0.8333) 0 0; font-family: ${({theme:e})=>e.font}; font-size: calc(0.8571 * ${({theme:e})=>e.size}); font-weight: 500; line-height: 1.5; letter-spacing: 0.02em; color: ${({theme:e})=>e.soft}; }
            .pd-book .pd-pages .pd-results .pd-results-count b { color: ${({theme:e})=>e.ink}; font-weight: 500; }
            .pd-book .pd-pages .pd-paragraph.pd-result { position: relative; display: grid; grid-template-columns: minmax(0, 1fr) auto auto; grid-template-areas: 'title exchanges day' 'synopsis synopsis synopsis'; align-items: baseline; column-gap: calc(${({theme:e})=>e.space} * 0.6667); margin: 0; padding: calc(${({theme:e})=>e.space} * 0.5833) 0 calc(${({theme:e})=>e.space} * 0.5417); border-block-end: thin solid rgba(11, 11, 11, .08); }
            .pd-book .pd-pages .pd-result .pd-result-title { grid-area: title; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-family: ${({theme:e})=>e.font}; font-size: calc(1.0714 * ${({theme:e})=>e.size}); line-height: 20px; color: ${({theme:e})=>e.ink}; }
            .pd-book .pd-pages .pd-result:hover .pd-result-title { color: ${({theme:e})=>e.accent}; }
            .pd-book .pd-pages .pd-result > a:has(> .pd-entry-open) { position: absolute; inset: 0; z-index: 1; }
            .pd-book .pd-pages .pd-result .pd-word.pd-entry-day { grid-area: day; min-width: 52px; text-align: end; font-family: ${({theme:e})=>e.font}; font-size: ${({theme:e})=>e.size}; line-height: 20px; color: ${({theme:e})=>e.soft}; white-space: nowrap; }
            .pd-book .pd-pages .pd-result .pd-result-synopsis { grid-area: synopsis; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; margin-block-start: 4px; font-family: ${({theme:e})=>e.serif}; font-size: ${({theme:e})=>e.size}; line-height: 1.5; color: ${({theme:e})=>e.soft}; }
            .pd-book .pd-pages .pd-result mark { background: #fff2a8; color: inherit; padding: 0 1px; border-radius: 2px; }
            @media (max-width: ${({theme:e})=>e.narrow}) {
                .pd-book .pd-head .pd-paragraph.pd-search { width: 100%; }
            }
        `}head(){return b`
            .pd-book .pd-head header, .pd-book .pd-head header > .pd-scheme, .pd-book .pd-head .pd-switches { display: contents; }
            .pd-book .pd-head .pd-chapter.pa-cover > .pd-scheme, .pd-book .pd-head .pd-chapter.pa-cover > .pa-illustration, .pd-book .pd-head .pd-chapter.pa-cover .pd-byline, .pd-book .pd-head .pd-chapter.pa-cover .pd-subject-line { display: none; }
            .pd-book .pd-head .pd-chapter.pa-cover { display: contents; }
            .pd-book .pd-head .pd-project-head { display: contents; }
            .pd-book .pd-head .pd-crumbs { order: 1; display: flex; gap: calc(${({theme:e})=>e.space} / 3); font-family: ${({theme:e})=>e.font}; font-size: calc(0.8929 * ${({theme:e})=>e.size}); color: ${({theme:e})=>e.soft}; }
            .pd-book .pd-head .pd-crumbs i { font-style: normal; color: ${({theme:e})=>e.faint}; }
            .pd-book .pd-head .pd-crumbs .pd-word.pa-reference { color: inherit; text-decoration: none; }
            .pd-book .pd-head .pd-crumbs .pd-word.pa-reference:hover { color: ${({theme:e})=>e.accent}; }
            .pd-book .pd-head .pd-chapter.pa-cover > a { order: 2; }
            .pd-book .pd-head .pd-chapter.pa-cover .pd-title { margin: 0; font-family: ${({theme:e})=>e.serif}; font-size: calc(2.1429 * ${({theme:e})=>e.size}); font-weight: 600; line-height: 1.1; letter-spacing: -0.01em; color: ${({theme:e})=>e.heading}; }
            .pd-book .pd-head .pd-chapter.pa-cover .pd-title .pa-reference, .pd-book .pd-head .pd-chapter.pa-cover > a { color: inherit; text-decoration: none; }
            .pd-book .pd-head .pd-report { order: 3; display: flex; flex-wrap: wrap; gap: 4px calc(${({theme:e})=>e.space} * 0.6667); font-family: ${({theme:e})=>e.font}; font-size: calc(0.8929 * ${({theme:e})=>e.size}); color: ${({theme:e})=>e.soft}; }
            .pd-book .pd-head .pd-report b { font-weight: 500; color: ${({theme:e})=>e.ink}; }
            .pd-book .pd-head .pd-paragraph.pd-row-form { order: 3; justify-self: end; align-self: end; margin: 0; }
            .pd-book .pd-head .pd-row-form .pd-word.pd-switch { padding: 2px 10px; border: thin solid ${({theme:e})=>e.line}; border-radius: 999px; background: none; font-family: ${({theme:e})=>e.font}; font-size: calc(0.8214 * ${({theme:e})=>e.size}); font-weight: 500; line-height: 1.5; color: ${({theme:e})=>e.soft}; cursor: pointer; transition: color ${({theme:e})=>e.beat} ease, background ${({theme:e})=>e.beat} ease; }
            .pd-book .pd-head .pd-row-form .pd-word.pd-switch:hover { color: ${({theme:e})=>e.ink}; }
            .pd-book .pd-head .pd-row-form .pd-word.pd-switch[aria-pressed='true'] { background: ${({theme:e})=>e.heading}; border-color: ${({theme:e})=>e.heading}; color: ${({theme:e})=>e.paper}; }
            .pd-book.pa-layout:not(.pa-turned) .pd-head { grid-template-columns: minmax(0, 1fr) auto; }
            .pd-book .pd-head .pd-crumbs, .pd-book .pd-head .pd-chapter.pa-cover > a { grid-column: 1 / -1; }
            .pd-book .pd-head .pd-brief { order: 2; grid-column: 1 / -1; max-width: 72ch; font-family: ${({theme:e})=>e.serif}; font-size: calc(1.0714 * ${({theme:e})=>e.size}); line-height: 1.5; color: ${({theme:e})=>e.soft}; }
            .pd-book .pd-head .pd-instructions { order: 2; grid-column: 1 / -1; display: flex; gap: calc(${({theme:e})=>e.space} / 3); align-items: baseline; max-width: 72ch; font-family: ${({theme:e})=>e.font}; font-size: calc(0.9643 * ${({theme:e})=>e.size}); line-height: 1.5; color: ${({theme:e})=>e.ink}; }
            .pd-book .pd-head .pd-instructions b { flex: none; font-size: calc(0.75 * ${({theme:e})=>e.size}); font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; color: ${({theme:e})=>e.faint}; }
            .pd-book .pd-head .pd-instructions.pa-none { color: ${({theme:e})=>e.faint}; font-style: italic; }
            @media (max-width: ${({theme:e})=>e.narrow}) {
            }
        `}list(){return b`
            .pd-book:not(.pa-turned) .pd-pages { padding: 0 calc(${({theme:e})=>e.space} * 1.5) calc(${({theme:e})=>e.space} * 5); }
            .pd-book:not(.pa-turned) .pd-pages .pd-chapter.pa-page.pa-synopsis { max-width: 768px; margin: 0; }
            .pd-book:not(.pa-turned) .pd-pages .pd-chapter.pa-page.pa-synopsis:not(.pa-volume) { padding: calc(${({theme:e})=>e.space} / 4) 0 calc(${({theme:e})=>e.space} / 2); }
            .pd-book:not(.pa-turned) .pd-pages .pd-chapter.pa-page.pa-synopsis:not(.pa-volume) > a, .pd-book:not(.pa-turned) .pd-pages .pd-chapter.pa-page.pa-synopsis:not(.pa-volume) .pd-turn { display: none; }
            .pd-book:not(.pa-turned) .pd-pages .pd-chapter.pa-page.pa-synopsis:not(.pa-volume) .pd-paragraph { max-width: 72ch; margin: 0; font-family: ${({theme:e})=>e.serif}; font-size: calc(1.0714 * ${({theme:e})=>e.size}); line-height: 1.5; color: ${({theme:e})=>e.soft}; }
            .pd-book:not(.pa-turned) .pd-pages .pd-chapter.pa-page.pa-volume { position: relative; display: grid; grid-template-columns: minmax(0, 1fr) auto auto auto; grid-template-areas: 'month month month month' 'title count day open' 'synopsis synopsis synopsis synopsis'; align-items: baseline; column-gap: calc(${({theme:e})=>e.space} * 0.6667); padding: calc(${({theme:e})=>e.space} * 0.625) 0 calc(${({theme:e})=>e.space} * 0.5833); border-block-end: thin solid rgba(11, 11, 11, .08); }
            .pd-book:not(.pa-turned) .pd-pages .pa-volume .pd-word.pd-way-on { grid-area: open; position: relative; z-index: 2; }
            .pd-book:not(.pa-turned) .pd-pages .pa-volume .pd-way-on-link { display: inline-block; padding: 0 6px; font-family: ${({theme:e})=>e.font}; font-size: calc(0.75 * ${({theme:e})=>e.size}); font-weight: 500; line-height: 20px; letter-spacing: 0.04em; text-transform: uppercase; color: ${({theme:e})=>e.faint}; text-decoration: none; white-space: nowrap; }
            .pd-book:not(.pa-turned) .pd-pages .pa-volume .pd-way-on-link:hover { color: ${({theme:e})=>e.accent}; }
            .pd-book:not(.pa-turned) .pd-pages .pa-volume.pa-returned, .pd-book .pd-pages .pd-result.pa-returned { background: linear-gradient(90deg, #eef4fa, transparent 60%); }
            .pd-book:not(.pa-turned) .pd-pages .pa-volume.pa-returned .pd-word.pd-entry-count::before { content: 'you were here'; margin-inline-end: calc(${({theme:e})=>e.space} * 0.4167); padding: 0 7px; border-radius: 999px; background: #eff4fa; font-size: calc(0.75 * ${({theme:e})=>e.size}); font-weight: 500; color: ${({theme:e})=>e.accent}; }
            .pd-book:not(.pa-turned) .pd-pages .pa-volume .pd-word.pd-entry-month { grid-area: month; display: flex; align-items: baseline; gap: 8px; margin: calc(${({theme:e})=>e.space} * 1.0833) 0 calc(${({theme:e})=>e.space} * 0.4167); font-family: ${({theme:e})=>e.font}; font-size: calc(0.8571 * ${({theme:e})=>e.size}); font-weight: 500; letter-spacing: 0.02em; color: ${({theme:e})=>e.soft}; }
            .pd-book:not(.pa-turned) .pd-pages .pa-volume > a.pa-self-reference { grid-area: title; min-width: 0; }
            .pd-book:not(.pa-turned) .pd-pages .pa-volume .pd-title { margin: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-family: ${({theme:e})=>e.font}; font-size: calc(1.0714 * ${({theme:e})=>e.size}); font-weight: 400; line-height: 20px; color: ${({theme:e})=>e.ink}; }
            .pd-book:not(.pa-turned) .pd-pages .pa-volume:hover .pd-title { color: ${({theme:e})=>e.accent}; }
            .pd-book:not(.pa-turned) .pd-pages .pa-volume .pd-word.pd-entry-count { grid-area: count; font-family: ${({theme:e})=>e.font}; font-size: calc(0.8571 * ${({theme:e})=>e.size}); line-height: 20px; color: ${({theme:e})=>e.faint}; white-space: nowrap; font-variant-numeric: tabular-nums; }
            .pd-book:not(.pa-turned) .pd-pages .pa-volume > time.pd-date { grid-area: day; min-width: 52px; text-align: end; font-family: ${({theme:e})=>e.font}; font-size: ${({theme:e})=>e.size}; line-height: 20px; color: ${({theme:e})=>e.soft}; white-space: nowrap; }
            .pd-book:not(.pa-turned) .pd-pages .pa-volume .pd-paragraph.pa-brief, .pd-book:not(.pa-turned) .pd-pages .pa-volume .pd-paragraph:not(.pa-brief), .pd-book:not(.pa-turned) .pd-pages .pa-volume .pd-turn { display: none; }
            .pd-book.pa-synopses:not(.pa-turned) .pd-pages .pa-volume .pd-paragraph:not(.pa-brief) { grid-area: synopsis; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; margin: 4px 0 0; font-family: ${({theme:e})=>e.serif}; font-size: ${({theme:e})=>e.size}; line-height: 1.5; color: ${({theme:e})=>e.soft}; }
            .pd-book.pa-synopses:not(.pa-turned) .pd-pages .pa-volume { align-items: baseline; }
            .pd-book:not(.pa-turned) .pd-pages .pa-volume > a:has(> .pd-entry-open) { position: absolute; inset: 0; z-index: 1; }
            .pd-book .pd-pages .pd-word.pd-entry-open { display: block; position: absolute; inset: 0; }
            @media (max-width: ${({theme:e})=>e.narrow}) {
                .pd-book:not(.pa-turned) .pd-holds { padding: calc(${({theme:e})=>e.space} / 4) calc(${({theme:e})=>e.space} / 3); }
                .pd-book:not(.pa-turned) .pd-pages { padding: 0 calc(${({theme:e})=>e.space} * 0.6667) calc(${({theme:e})=>e.space} * 2.5); }
                .pd-book:not(.pa-turned) .pd-pages .pa-volume .pd-word.pd-entry-count { display: none; }
                .pd-book.pa-layout:not(.pa-turned) .pd-head { padding: calc(${({theme:e})=>e.space} * 0.75) calc(${({theme:e})=>e.space} * 0.6667) calc(${({theme:e})=>e.space} / 3); }
            }
        `}};r(Xn,"$ListLayout");let Ct=Xn;const Jn=class Jn extends Ct{areas(){return b`
            ${super.areas()}
            .pd-book.pa-layout:not(.pa-turned) {
                grid-template-columns: ${({theme:e})=>e.holdsColumn} minmax(0, 1fr) 320px;
                grid-template-areas: 'library library library' 'holds head knowledge' 'holds pages knowledge';
            }
            .pa-layout .pd-knowledge-column { grid-area: knowledge; min-width: 0; overflow-y: auto; }
            .pd-book.pa-turned .pd-knowledge-column { display: none; }
            .pd-book:not(.pa-turned) .pd-pages .pd-chapter.pa-page.pa-synopsis:not(.pa-volume) { display: none; }
            @media (max-width: ${({theme:e})=>e.narrow}) {
                .pd-book.pa-layout:not(.pa-turned) .pd-knowledge-column { order: 4; }
            }
        `}};r(Jn,"$ProjectLayout");let Rs=Jn;const Qr=r((p,e,t=jo,o=!0)=>{const s=a(Cp),i=a(Pp),d=a(t),u=a(z);let m="";for(const l of e){const x=ge(l),C=l.annotations.expressed(T)?.cover?.mention?.identifier;l.text.add(p,...o&&x!==m?[n(i,{},"month")]:[],n(s,{},"count"),...C===void 0?[]:[n(d,{entry:l,children:n(u,{children:C})},"open")]),m=x}},"rows"),Kn=class Kn extends bt{constructor(){super(...arguments),this.specification=new me}$Define(){super.$Define(),this.$is=[ne,ko]}get entries(){return this._entries??(this._entries=this.text.find(w).filter(e=>e.is(Se)&&e!==this.synopsis))}get files(){return this.chapters.filter(e=>e.is(P)&&e.is(J))}get project(){return this.chapters.find(e=>e.is(P)&&!e.is(J))}get brief(){const e=this.project?.text.find(g).find(t=>t.is(we));return e===void 0?"":y.copy(e.text).replace(/\s+/gu," ").trim()}get instructions(){const e=this.project?.text.find(N).find(o=>o.canonical?.name==="Its instructions");if(e===void 0)return;const t=e.text.find(g).map(o=>y.copy(o.text).replace(/\s+/gu," ").trim()).join(" ");return{set:!/^No instructions were set/u.test(t),words:t}}get laidOutChapters(){return[...super.laidOutChapters,...this.entries]}get pages(){const e=[...this.entries].sort((t,o)=>M(o).localeCompare(M(t)));return[...super.pages,...e]}get open(){return this.$bookmark===void 0?void 0:this.chapterAt(this.$bookmark)}get index(){return this.table?.annotations.expressed(B)}get searchHint(){return"a word in this project, its conversations and its files"}found(e){const t=e.trim().toLowerCase();if(t==="")return[];const o=this.pages.filter(i=>this.entries.includes(i)&&this.wordsOf(i).lower.includes(t)),s=this.files.filter(i=>(i.title?.name??"").toLowerCase().includes(t));return[...o,...s]}placeOf(e){return e.annotations.expressed(T)?.cover?.mention?.identifier??super.placeOf(e)}countOfFound(e,t){const o=e.filter(i=>this.files.includes(i)).length,s=e.length-o;return c($,{children:[n("b",{children:s})," of ",this.entries.length," conversations and ",n("b",{children:o})," of ",this.files.length," files say “",t,"”"]})}aboveThePages(){const e=a(Gr);return n(e,{chapter:this.table})}write(){const e=a(Ap);return c($,{children:[super.write(),n("div",{className:"pd-knowledge-column",children:n(e,{chapter:this.cover})})]})}head(){const e=a(this.cover),t=a(Np),o=a(jp),s=a(Er);return c($,{children:[n(e,{}),n(t,{chapter:this.cover}),n(o,{chapter:this.cover}),n(s,{chapter:this.cover})]})}rows(e){Qr(this,e,jo,!1)}$Bound(){this.rows(this.pages.filter(o=>this.entries.includes(o)));const e=this.index;e!==void 0&&(e.$folded=!0,e.$counted=!0,e.$dated=!0,e.$searched=!0),super.$Bound();const t=this.table;if(t!==void 0){const o=t.text.find(N),s=o.filter(l=>!Number.isNaN(Date.parse(l.canonical?.name??""))),i=o.filter(l=>l.text.find(g).some(x=>this.chapterAt(I(x)?.identifier??"")?.is(P))),d=o.filter(l=>!s.includes(l)&&!i.includes(l)),u=r(l=>{const x=this.chapterAt(I(l)?.identifier??"");return x===void 0?0:Date.parse(M(x))},"dayOfRow"),m=s.flatMap(l=>l.text.find(g)).sort((l,x)=>u(x)-u(l));for(const l of s){for(const x of l.text.find(g))l.text.remove(this,x);t.text.remove(this,l)}t.text.append(this,...m);for(const l of[...i,...d])t.text.remove(this,l),t.text.append(this,l)}}};r(Kn,"$ProjectManual");let We=Kn;_t([Ht()],We.prototype,"_entries",2);const Qn=class Qn extends Ne{$everyEntryStandsForAConversation(e){const t=e.entries.find(o=>o.annotations.expressed(Se)?.means===void 0);h(t===void 0,`every entry of a project manual stands for a conversation, holding its synopsis, and "${t?.title?.name}" stands for none`)}$hasOneProjectChapter(e){h(e.chapters.filter(t=>t.is(P)&&!t.is(J)).length===1,"a project manual has one chapter about the project, which appends no file, and this one has none or more than one")}$onlyAChapterAppends(e){const t=[...e.chapters,...e.entries];h(e.text.find(w).every(o=>t.includes(o)||!o.is(J)),"only an ordinary chapter or an entry files a file, and here a cover, a synopsis or a table of contents files one")}};r(Qn,"ProjectManualSpecification");let me=Qn;_t([f("every entry of a project manual stands for a conversation, holding its synopsis")],me.prototype,"$everyEntryStandsForAConversation",1);_t([f("a project manual has one chapter about the project, which appends no file")],me.prototype,"$hasOneProjectChapter",1);_t([f("an entry of a project manual files a file only when a chapter may")],me.prototype,"$onlyAChapterAppends",1);const xp=a(Ts),vp=a(Ws),wp=a(Hs),yp=a(Bs),zp=a(Ls);a(Ct);const Op=a(Rs),Dp=a(We),jp=xp,Cp=vp,Pp=wp,Np=yp,Ap=zp;a(Dp,Po)(Op);var Mp=Object.defineProperty,Ip=Object.getOwnPropertyDescriptor,Tp=r((p,e,t,o)=>{for(var s=Ip(e,t),i=p.length-1,d;i>=0;i--)(d=p[i])&&(s=d(e,t,s)||s);return s&&Mp(e,t,s),s},"__decorateClass$3");const Vn=class Vn extends k{constructor(){super(...arguments),this.specification=new Pt}get uuid(){return y.copy(this.text).trim()}write(){return null}};r(Vn,"$Origin");let He=Vn;const er=class er extends v{$saidOfACoverOrAMessage(e){h(e instanceof w&&e.is(A)||e instanceof W,"an origin is said of a cover or a message, and this is neither")}};r(er,"OriginSpecification");let Pt=er;Tp([f("an origin is said of a cover or a message")],Pt.prototype,"$saidOfACoverOrAMessage");const Pc=a(He),tr=class tr extends mt{constructor(){super(...arguments),this.sans="'Inter', system-ui, sans-serif",this.mono="ui-monospace, 'Cascadia Code', Consolas, monospace",this.keyword="#1f5fbf",this.string="#9a3b1e",this.type="#116b4a",this.comment="#7a8491"}parts(){return[...super.parts(),this.surfaces(),this.top(),this.rows(),this.openDay(),this.exchanges(),this.said(),this.cards(),this.paneColumn(),this.phone()]}surfaces(){return b`
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
        `}};r(tr,"$ApplicationForm");let _s=tr;const Wp=a(_s);var Hp=Object.defineProperty,Bp=Object.getOwnPropertyDescriptor,Lp=r((p,e,t,o)=>{for(var s=Bp(e,t),i=p.length-1,d;i>=0;i--)(d=p[i])&&(s=d(e,t,s)||s);return s&&Hp(e,t,s),s},"__decorateClass$2");const Rp='<svg viewBox="0 0 24 24"><path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4M9 12h6M9 16h6"/></svg>',_p='<svg viewBox="0 0 24 24"><path d="M8 7l-5 5 5 5M16 7l5 5-5 5M13 5l-2 14"/></svg>',X=r(p=>{const e=p.book;return e!==void 0&&"$shown"in e?e:void 0},"showingBook"),sr=class sr extends k{constructor(){super(...arguments),this.specification=new Nt}defines(e){e.classes.add(this,"pa-version")}erase(e){e.classes.revert(this)}};r(sr,"$Version");let Fs=sr;const or=class or extends v{$saidOfAChapter(e){h(e instanceof w,"a version is said of a chapter, and this is not one")}};r(or,"VersionSpecification");let Nt=or;Lp([f("a version is said of a chapter")],Nt.prototype,"$saidOfAChapter");const ar=class ar extends Hr{constructor(){super(...arguments),this.$artifact=void 0,this.$place=void 0}get version(){const e=this.$place;if(e!==void 0)return this.book.chapters.find(t=>Wr.slug(t.title?.name??"")===e)}get versionName(){return this.version?.title?.name??""}get name(){return this.versionName.replace(/ v\d+(?:-\d+)?$/u,"")||this.$identifier}get number(){return/ v(\d+)(?:-\d+)?$/u.exec(this.versionName)?.[1]??"1"}get kind(){const e=this.$type.replace(/^\./u,"");return e==="md"||e==="txt"||e===""?"document":e==="html"?"page":"code"}get shown(){return X(this)?.$shown===this}$Artifact(...e){this.$Code(...e),this.containers.replace(this,"pre","figure")}write(){const e=[...this.text].map((o,s)=>{const i=a(o);return n(i,{},s)}),t={__html:this.kind==="document"?Rp:_p};return c($,{children:[c("button",{type:"button",className:"pd-card","aria-pressed":this.shown,onClick:r(()=>this.press(),"onClick"),children:[n("span",{className:"pd-card-mark",dangerouslySetInnerHTML:t}),c("span",{className:"pd-card-words",children:[n("b",{children:this.name}),n("small",{children:`Click to open ${this.kind} · v${this.number}`})]})]}),n("figcaption",{children:e})]})}press(){const e=X(this);e!==void 0&&(e.$shown=e.$shown===this?void 0:this)}$Define(){super.$Define(),this.classes.add(this,"pd-artifact"),this.shown&&this.classes.add(this,"pa-open")}};r(ar,"$Artifact");let Be=ar;const nr=class nr extends Hr{get sentence(){return y.copy(this.text)}get fileName(){return/“([^”]+)”/u.exec(this.sentence)?.[1]??"a file"}get extension(){return(this.fileName.split(".").pop()??"file").toUpperCase().slice(0,4)}get lineCount(){return this.names?this.contents.split(`
`).length:0}get shown(){return X(this)?.$shown===this}$Attachment(...e){this.$Code(...e),this.containers.replace(this,"pre","figure")}write(){const e=[...this.text].map((t,o)=>{const s=a(t);return n(s,{},o)});return c($,{children:[c("button",{type:"button",className:"pd-chip","aria-pressed":this.shown,onClick:r(()=>this.press(),"onClick"),children:[n("span",{className:"pd-chip-mark",children:this.extension}),c("span",{className:"pd-chip-words",children:[n("b",{children:this.fileName}),n("small",{children:this.names?`${this.lineCount} lines`:"not carried by the export"})]})]}),n("figcaption",{children:e})]})}press(){const e=X(this);e!==void 0&&(e.$shown=e.$shown===this?void 0:this)}$Define(){super.$Define(),this.classes.add(this,"pd-attachment"),this.shown&&this.classes.add(this,"pa-open")}};r(nr,"$Attachment");let Le=nr;a(Fs);a(Be);a(Le);const rr=class rr extends g{constructor(){super(...arguments),this.style=O.div`
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
    `}get shown(){return X(this)?.$shown}get artifacts(){return this.book?.messages.flatMap(e=>e.text.find(Be))??[]}$Pane(...e){this.$Writing(...e),this.containers.replace(this,"span",this.style)}neighbour(e,t){const o=Number(e.number)+t;return this.artifacts.find(s=>s.$artifact===e.$artifact&&Number(s.number)===o)}write(){const e=this.shown;if(e===void 0)return;const t=e instanceof Be?e:void 0,o=e instanceof Le?e:void 0,s=t?.version,i=s===void 0?void 0:a(s),d=t===void 0?void 0:this.neighbour(t,-1),u=t===void 0?void 0:this.neighbour(t,1),m=o===void 0?"":o.names?o.contents:"The export does not carry this upload; the name is all it kept.";return c($,{children:[c("div",{className:"pd-pane-bar",children:[n("span",{className:"pd-pane-title",children:t?.name??o?.fileName}),n("span",{className:"pd-pane-kind",children:t?.kind??o?.extension.toLowerCase()}),n("button",{type:"button",className:"pd-pane-copy",onClick:r(l=>this.copy(l),"onClick"),children:"Copy"}),n("button",{type:"button",className:"pd-pane-close","aria-label":"close",onClick:r(()=>this.close(),"onClick"),children:"×"})]}),n("div",{className:"pd-pane-body",children:i===void 0?n("pre",{children:m}):n(i,{})}),t===void 0?void 0:c("div",{className:"pd-pane-foot",children:[c("span",{className:"pd-pane-version",children:[n("button",{type:"button",disabled:d===void 0,onClick:r(()=>this.show(d),"onClick"),children:"‹"}),n("span",{children:`v${t.number}`}),n("button",{type:"button",disabled:u===void 0,onClick:r(()=>this.show(u),"onClick"),children:"›"})]}),n("button",{type:"button",className:"pd-pane-download",onClick:r(()=>this.download(t),"onClick"),children:"Download"})]})]})}show(e){const t=X(this);t!==void 0&&e!==void 0&&(t.$shown=e)}close(){const e=X(this);e!==void 0&&(e.$shown=void 0)}copy(e){const t=e.currentTarget.closest(".pd-pane")?.querySelector(".pd-pane-body");navigator.clipboard?.writeText(t?.textContent??"")}download(e){const t=e.$type.replace(/^\./u,"")||"md",o=new Blob([e.contents],{type:"text/plain"}),s=document.createElement("a");s.href=URL.createObjectURL(o),s.download=`${e.name} v${e.number}.${t}`,s.click(),URL.revokeObjectURL(s.href)}$Define(){super.$Define(),this.classes.add(this,"pd-pane")}};r(rr,"$Pane");let Ss=rr;const Fp=a(Ss);var Sp=Object.defineProperty,Ep=Object.getOwnPropertyDescriptor,Gp=r((p,e,t,o)=>{for(var s=Ep(e,t),i=p.length-1,d;i>=0;i--)(d=p[i])&&(s=d(e,t,s)||s);return s&&Sp(e,t,s),s},"__decorateClass$1");const ir=class ir extends k{constructor(){super(...arguments),this.specification=new At}get name(){return L.reference(y.copy(this.text))?.name??""}get means(){return this.annotations.expressed(ro)}$Define(){super.$Define();const e=L.reference(y.copy(this.text));if(e===void 0)return;const t=a(z);this.annotations.add(this,n(t,{children:e.identifier}))}write(){return this.name}};r(ir,"$Account");let Re=ir;const dr=class dr extends v{$saidOfACover(e){h(e instanceof w&&e.is(A),"an account is said of a cover, and this is not one")}};r(dr,"AccountSpecification");let At=dr;Gp([f("an account is said of a cover")],At.prototype,"$saidOfACover");const pr=class pr extends g{get cover(){return this.$cover??this.book?.cover}get account(){return this.cover?.annotations.expressed(Re)}write(){const e=this.account,t=a(j),o=a(ke),s=a(z);return c($,{children:[c(t,{children:[n(o,{}),"account"]}),c(t,{children:[n(s,{children:e.means.identifier}),e.name]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-account-line")}};r(pr,"$AccountLine");let Es=pr;const Nc=a(Re),Up=a(Es);var qp=Object.defineProperty,Zp=Object.getOwnPropertyDescriptor,Yp=r((p,e,t,o)=>{for(var s=Zp(e,t),i=p.length-1,d;i>=0;i--)(d=p[i])&&(s=d(e,t,s)||s);return s&&qp(e,t,s),s},"__decorateClass");const cr=class cr extends k{constructor(){super(...arguments),this.specification=new Mt}get name(){return L.reference(y.copy(this.text))?.name??""}get means(){return this.annotations.expressed(ro)}$Define(){super.$Define();const e=L.reference(y.copy(this.text));if(e===void 0)return;const t=a(z);this.annotations.add(this,n(t,{children:e.identifier}))}write(){return this.name}};r(cr,"$Project");let _e=cr;const lr=class lr extends v{$saidOfACover(e){h(e instanceof w&&e.is(A),"a project is said of a cover, and this is not one")}};r(lr,"ProjectSpecification");let Mt=lr;Yp([f("a project is said of a cover")],Mt.prototype,"$saidOfACover");const hr=class hr extends g{get cover(){return this.$cover??this.book?.cover}get project(){return this.cover?.annotations.expressed(_e)}write(){const e=this.project,t=a(j),o=a(ke),s=a(z);return c($,{children:[c(t,{children:[n(o,{}),"project"]}),c(t,{children:[n(s,{children:e.means.identifier}),e.name]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-project-line")}};r(hr,"$ProjectLine");let Gs=hr;const Ac=a(_e),Xp=a(Gs),Jp='<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linejoin="round" stroke-linecap="round"><path d="M4 1.5h5.5L13 5v9.5H4z"/><path d="M9.5 1.5V5H13M6 8h4M6 10.5h4"/></svg>',fr=class fr extends g{$Outline(...e){this.$Writing(...e),this.containers.replace(this,"span","div")}write(){const e=this.book,t=this.$asked;if(e===void 0||t===void 0)return;const o=a(j),s=a(z),i=t.text.find(W).filter(d=>d.is(wt));if(i.length!==0)return n("ol",{className:"pd-asked",children:i.map((d,u)=>{const m=e.placeOf(d),l=e.wordsOf(d).text;return n("li",{children:m===void 0?l:c(o,{children:[n(s,{children:m}),l]})},u)})})}$Define(){super.$Define(),this.classes.add(this,"pd-outline")}};r(fr,"$Outline");let Us=fr;const gr=class gr extends oe{get on(){return this.$attachment?.shown===!0}press(){this.$attachment?.press()}write(){const e=this.$attachment;if(e!==void 0)return c($,{children:[n("span",{className:"pd-drawing",dangerouslySetInnerHTML:{__html:Jp}}),n("span",{className:"pd-tab-name",children:e.fileName}),n("small",{children:e.names?`${e.lineCount} lines`:"not carried"})]})}$Define(){super.$Define(),this.classes.add(this,"pd-file-tab")}};r(gr,"$AttachmentTab");let qs=gr;const Kp=a(Us),Qp=a(qs),Vp=Kp,ec=Qp,Vr="library-trail",ei=r(()=>{try{const p=typeof localStorage>"u"?null:localStorage.getItem(Vr);if(p===null)return;const e=JSON.parse(p);return e.from?.marking===void 0?void 0:e}catch{return}},"keptTrail"),ur=class ur extends et{constructor(){super(...arguments),this.$marking={drawing:"",declarations:""}}get marking(){return this.$marking}};r(ur,"$TrailMark");let Zs=ur;const br=class br extends g{get conversation(){return this.book}$ProjectStrip(...e){this.$Writing(...e),this.containers.replace(this,"span","div")}write(){const e=this.conversation,t=e?.$trail;if(e===void 0||t===void 0)return;const o=a(j),s=a(z),i=a(oc);return c($,{children:[n(i,{marking:t.from.marking,children:n(s,{children:t.from.href})}),c("span",{className:"pd-strip-words",children:[c(o,{children:[n(s,{children:t.from.href}),t.from.title]}),n("span",{className:"pd-strip-place",children:`${t.within.index} of ${t.within.of}`})]}),c("span",{className:"pd-strip-neighbours",children:[t.within.prev===void 0?void 0:c(o,{children:[n(s,{children:t.within.prev.href}),`‹ ${t.within.prev.title}`]}),t.within.next===void 0?void 0:c(o,{children:[n(s,{children:t.within.next.href}),`${t.within.next.title} ›`]})]}),t.word===""?void 0:n("span",{className:"pd-strip-word",children:`you were searching “${t.word}”`}),c(o,{children:[n(s,{children:t.from.href}),"back to where I was"]})]})}$Define(){super.$Define(),this.classes.add(this,"pd-project-strip")}};r(br,"$ProjectStrip");let Ys=br;const tc=a(Zs),sc=a(Ys),oc=tc,ac=sc,mr=class mr extends jt{constructor(){super(...arguments),this.$shown=void 0,this.$trail=void 0}arrive(){const e=ei();e===void 0||e.to!==this.means?.identifier||this.$trail?.at===e.at||(this.$trail=e)}turn(){super.turn(),this.arrive()}get project(){return this.cover?.annotations.expressed(_e)}get account(){return this.cover?.annotations.expressed(Re)}get origin(){return this.cover?.annotations.expressed(He)?.uuid}get subjectCover(){return this.coverOf(this.project?.means?.identifier)??super.subjectCover}get index(){return this.table?.annotations.expressed(B)}get searchHint(){return"a word in this conversation"}wordsOf(e){if(!(e instanceof W))return super.wordsOf(e);const t=this._words?.get(e);if(t!==void 0)return t;const o=e.speaker,s=o===void 0?"":L.reference(y.copy(o.text))?.name??y.copy(o.text),i=[...e.text].filter(u=>u!==o).map(u=>y.copy(u.text).replace(/\s+/gu," ").trim()).filter(u=>u!=="").join(" "),d={title:s,text:i,lower:`${s} ${i}`.toLowerCase()};return(this._words??=new Map).set(e,d),d}found(e){const t=e.trim().toLowerCase();return t===""?[]:this.messages.filter(o=>this.wordsOf(o).lower.includes(t))}countOfFound(e,t){return c($,{children:[n("b",{children:e.length})," ",e.length===1?"message says":"messages say"," “",t,"”"]})}placeOf(e){if(!(e instanceof W))return super.placeOf(e);const t=e.annotations.expressed(Lt)?.identifier;return t===void 0?void 0:this.placeWithin(`#${t}`)}sought(e){if(typeof CSS>"u"||!("highlights"in CSS)||typeof document>"u")return;const t=CSS.highlights;if(e===""){t.delete("pd-found");return}const o=[],s=e.toLowerCase(),i=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,{acceptNode:r(u=>u.parentElement?.closest(".pd-pages .pd-said")?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT,"acceptNode")});for(let u=i.nextNode();u!==null;u=i.nextNode()){const m=u.nodeValue?.toLowerCase()??"";for(let l=m.indexOf(s);l!==-1;l=m.indexOf(s,l+s.length))o.push(new StaticRange({startContainer:u,startOffset:l,endContainer:u,endOffset:l+e.length}))}const d=globalThis.Highlight;t.set("pd-found",new d(...o))}holds(){const e=a(Er),t=a(Gr),o=a(Vp),s=this.open;return c($,{children:[n(e,{chapter:this.table}),n(t,{chapter:this.table}),super.holds(),s===void 0||!this.body.includes(s)?void 0:n(o,{chapter:this.table,asked:s},s.mention?.identifier)]})}write(){const e=a(Fp),t=a(ac);return c($,{children:[super.write(),n(t,{chapter:this.cover}),n(e,{chapter:this.cover})]})}$Bound(){const e=this.index;e!==void 0&&(e.$folded=!0,e.$counted=!0,e.$searched=!0);const t=a(Co);for(const s of this.table?.text.find(N)??[])s.is(le)||s.annotations.add(this,n(t,{}));const o=a(ec);for(const s of e?.entries??[]){const i=I(s)?.identifier,d=i===void 0?void 0:this.chapterAt(i);if(d===void 0||!this.body.includes(d))continue;const u=d.text.find(W).flatMap(m=>m.text.find(Le)).filter(m=>m.names);u.length!==0&&s.text.add(this,...u.map((m,l)=>n(o,{attachment:m},l)))}super.$Bound()}me(){const e=a(Xp),t=a(Up);return c($,{children:[super.me(),this.project===void 0?void 0:n(e,{cover:this.cover}),this.account===void 0?void 0:n(t,{cover:this.cover})]})}};r(mr,"$ClaudeConversation");let Xs=mr;const ti=a(Xs);a(ti,io)(Wp);a(ti,Fe)(Rt);const $r=class $r extends D{write(){if(this.$href!==void 0)return n("a",{className:"pd-way-on-link",href:this.$href,target:"_blank",rel:"noopener",children:"in Claude"})}$Define(){super.$Define(),this.classes.add(this,"pd-way-on")}};r($r,"$WayOn");let Js=$r;const kr=class kr extends nt{container(e){return super.container({...e,onClick:r(()=>this.keep(),"onClick")})}keep(){const e=this.book,t=this.$entry instanceof w?this.$entry:this.chapter;if(e===void 0||t===void 0||typeof localStorage>"u")return;const o=e.pages.filter(m=>e.entries.includes(m)),s=o.indexOf(t),i=r(m=>{const l=m?.annotations.expressed(T)?.cover?.mention?.identifier;return m===void 0||l===void 0?void 0:{title:m.title?.name??"",href:l}},"placeOf"),d=e.means?.identifier??"",u={at:new Date().toISOString(),from:{page:d,title:e.title?.name??"",href:d,marking:Rr(e.cover)},to:i(t)?.href,within:{title:e.title?.name??"",index:s+1,of:o.length,prev:i(o[s-1]),next:i(o[s+1])},word:e.index?.$search??"",row:t.mention?.identifier};try{localStorage.setItem(Vr,JSON.stringify(u))}catch{return}}};r(kr,"$ProjectEntryOpen");let Ks=kr;const xr=class xr extends rt{get project(){return this.book}get returned(){const e=this.project,t=this.$hit;return e!==void 0&&t!==void 0&&e.$trail!==void 0&&e.$trail.to===e.placeOf(t)}$ProjectResult(...e){this.$Result(...e),this[ni]("layout").then(()=>{this.returned&&this.project?.land()})}container(e){return super.container(this.returned?{...e,className:`${e.className??""} pa-returned`}:e)}open(){return si}};r(xr,"$ProjectResult");let Qs=xr;const vr=class vr extends at{result(e,t){const o=a(cc);return n(o,{chapter:this.chapter,hit:e},this.book.placeOf(e)??t)}};r(vr,"$ProjectResults");let Vs=vr;const wr=class wr extends We{constructor(){super(...arguments),this.$trail=void 0}aboveThePages(){const e=a(lc);return n(e,{chapter:this.table})}rows(e){Qr(this,e,si,!1);const t=a(pc);for(const o of e){const s=o.annotations.expressed(T)?.cover?.annotations.expressed(He)?.uuid;s!==void 0&&o.text.add(this,n(t,{href:`https://claude.ai/chat/${s}`}))}}arrive(){const e=ei();if(e===void 0||e.from.page!==this.means?.identifier||this.$trail?.at===e.at)return;this.$trail=e,e.word!==""&&this.index?.search(e.word);const t=e.row===void 0?void 0:this.chapterAt(e.row);t!==void 0&&t.classes.add(this,"pa-returned"),t!==void 0&&e.word===""&&this.land(t)}land(e){const t=e?.title;(e===void 0?document.querySelector(".pd-book .pd-result.pa-returned"):t===void 0?null:document.getElementById(String(t.id))?.closest(".pd-chapter"))?.scrollIntoView({block:"center"})}turn(){super.turn(),this.arrive()}};r(wr,"$ClaudeProjectManual");let eo=wr;const nc=a(Js),rc=a(Ks),ic=a(Qs),dc=a(Vs);a(eo);const pc=nc,si=rc,cc=ic,lc=dc,yr=class yr extends ze{constructor(){super(...arguments),this.style=O.header`
        .pd-chapter.pa-cover { margin-block: 0; }
        .pa-cover .pd-title {
            font-size: calc(1.04 * ${({theme:e})=>e.size});
            font-weight: 600;
        }
    `}};r(yr,"$ManualCover");let to=yr;const zr=class zr extends q{constructor(){super(...arguments),this.style=O.nav`
        .pa-table-of-contents .pa-reference { color: inherit; text-decoration: none; }
    `}};r(zr,"$ManualTableOfContents");let so=zr;const Mc=a(to);a(so);const oi=r(()=>c(po,{children:[n(_r,{}),n(Oo,{ground:"#eef5f6",band:"#c3e3e6",bandInk:"#1c565c",foot:"#8db9bd",footInk:"#153e43",ink:"#1f5a60"}),n(Do,{x:"-46",y:"-13"}),n(co,{children:"[Dougs Library](/dougs-library/)"}),n(lo,{children:"[Doug](/dougs-story/)"}),n(ho,{children:"[Library](/dougs-library/)"}),n(fo,{children:"[The Library](/dougs-library/)"}),c(go,{children:[n(zo,{}),n(uo,{children:`<svg viewBox="0 0 64 64" class="pd-illustration"><path class="light" d="M9 7h46v50H9z"/><path d="M9 7h46v50H9zM9 24h46M9 41h46"/><path class="fill" d="M13 11h5v13h-5zM20 9h4v15h-4zM26 13h6v11h-6zM34 10h4v14h-4zM40 14h6v10h-6z"/><path d="M48 24l4-12 3 1-4 11z"/><path class="fill" d="M13 28h4v13h-4zM19 30h7v11h-7zM28 27h4v14h-4zM34 31h5v10h-5zM41 28h6v13h-6zM49 29h3v12h-3z"/><path class="fill" d="M13 46h6v11h-6zM21 44h4v13h-4zM27 47h8v10h-8zM37 45h4v12h-4zM43 48h6v9h-6z"/><path d="M50 57l3-11 3 1-3 10z"/></svg>
`})]})]}),"SubjectCover$1"),Or=class Or extends ze{};r(Or,"$JournalCover");let oo=Or;const hc=a(oo),fc=r(()=>c(po,{children:[n(hc,{}),n(ki,{}),n(ps,{children:oi()}),n(Oo,{ground:"#f5eedf",band:"#d9c3a3",bandInk:"#4a3626",foot:"#a3b6cc",footInk:"#2a4262",ink:"#2f4a6a"}),n(Do,{x:"-54",y:"-33"}),n(co,{children:"[Dougs Story](/dougs-story/)"}),n(lo,{children:"[Doug](/dougs-story/)"}),n(ho,{children:"[Library](/dougs-library/)"}),n(fo,{children:"[The Librarian](/dougs-story/)"}),c(go,{children:[n(zo,{}),n(uo,{children:`<svg viewBox="0 0 64 64" class="pd-illustration"><path class="light" d="M8 13h23v38H8zM33 13h23v38H33z"/><path d="M8 13h23v38H8zM33 13h23v38H33z"/><path d="M13 21h13M13 27h13M13 33h9M38 21h13M38 27h13M38 33h13M38 39h8"/><path class="fill" d="M15 55 45 25l4 4-30 30-6 2z"/><path d="M15 55 45 25l4 4-30 30-6 2zM43 27l4 4M17 53l2 2"/></svg>
`})]})]}),"StoryCover"),Ic=r(()=>c(po,{children:[n(_r,{}),n(ps,{children:oi()}),n(ps,{children:fc()}),n(Oo,{ground:"#eff1f6",band:"#c0c9df",bandInk:"#2a3a63",foot:"#8e9fc8",footInk:"#1f2d50",ink:"#2a3a63"}),n(Do,{x:"-36",y:"-26"}),n(co,{children:"[Dougs Claude](/dougs-claude/)"}),n(lo,{children:"[Doug](/dougs-story/)"}),n(ho,{children:"[Library](/dougs-library/)"}),n(fo,{children:"[Claude](/dougs-claude/)"}),c(go,{children:[n(zo,{}),n(uo,{children:`<svg viewBox="0 0 64 64" class="pd-illustration"><path class="light" d="M8 30h48v27H8z"/><path d="M8 30h48v27H8zM8 44h48"/><path class="fill" d="M12 33h5v9h-5zM19 31h4v11h-4zM25 34h7v8h-7zM34 32h4v10h-4zM40 35h8v7h-8z"/><path class="fill" d="M12 47h6v8h-6zM20 48h4v7h-4zM26 46h9v9h-9zM37 49h5v6h-5zM44 47h7v8h-7z"/><path class="light" d="M28 6h28v16H40l-6 5v-5h-6z"/><path d="M28 6h28v16H40l-6 5v-5h-6z"/><path d="M33 11h18M33 16h12"/></svg>
`})]})]}),"SubjectCover");export{eo as $,Nc as A,kc as B,Mc as C,vc as D,zo as I,yc as J,Rt as L,Cc as M,Pc as O,Dc as P,Ic as S,Fe as T,ps as V,Do as W,fc as a,Oo as b,zc as c,xc as d,_r as e,Oc as f,jc as g,Ac as h,bt as i,ft as j,G as k,B as l,I as m,od as n,wc as o,T as p,bo as q,R as r,hc as s};
