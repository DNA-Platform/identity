var g=Object.defineProperty;var t=(u,j)=>g(u,"name",{value:j,configurable:!0});import{j as e,C as h,b as w,T as d,P as p,c as o,H as c,a,d as n,W as s,M as r,A as f,$}from"./index-ewi0fJr5.js";import{g as A,I as b,S as m,B as x}from"./31-the-project~code-Bejx54r0.js";import"./2-the-artifact-and-the-attachment~code-CVZYInCJ.js";import{C as v,S as T}from"./.synopsis-Cp6IUdov.js";const l=class l extends A{};t(l,"$ClaudesReferenceManual");let i=l;const C=t(()=>e.jsxs(h,{children:[e.jsx(w,{}),e.jsx(b,{}),e.jsxs(d,{children:[e.jsx(p,{}),"[Table of Contents](/claudes-reference-manual/#table-of-contents)"]}),e.jsxs(o,{children:[e.jsx(c,{children:"What a message of Claude's holds"}),e.jsx(a,{children:e.jsx(n,{children:"[The Action and the Result](/claudes-reference-manual/#the-action-and-the-result)"})}),e.jsx(a,{children:e.jsx(n,{children:"[The Artifact and the Attachment](/claudes-reference-manual/#the-artifact-and-the-attachment)"})}),e.jsxs(a,{children:[e.jsx(p,{}),e.jsx(s,{children:e.jsx(n,{children:"[Claudes Reference Manual](/claudes-reference-manual/)"})}),e.jsx(s,{children:e.jsx(n,{children:"[Synopsis](/claudes-reference-manual/#synopsis)"})}),e.jsx(s,{children:e.jsx(n,{children:"[Table of Contents](/claudes-reference-manual/#table-of-contents)"})})]})]})]}),"Table"),y=t(()=>e.jsxs(h,{children:[e.jsx(m,{}),e.jsx(d,{children:"[The Action and the Result](/claudes-reference-manual/#the-action-and-the-result)"}),e.jsxs(a,{children:[e.jsx(x,{}),"What Claude does in a message that is not said, a search, a fetch, a run of code, a read of a file, as a writing of its own, and what came back as another."]}),e.jsxs(o,{children:[e.jsx(c,{children:"Done, and what came back"}),e.jsxs(a,{children:["A message of Claude's holds more than prose. Where he searched the web, fetched a page, ran code or read a file, the message holds an action, one line saying what was done in plain words, and after it a result, what came back, cut to its first four thousand characters. Neither is a paragraph of what was said, so neither is a paragraph wearing a mark: each is a writing of its own, a paragraph in shape and not in meaning, which the page can fold, show as the application does, or count. They are Claude's, so they stand in this manual and not in ",e.jsx(r,{children:"[the library's](/dougs-reference-manual/#the-conversation)"}),", where a message is said to be a speaker, a time and what was said."]})]}),e.jsx(f,{identifier:"code",type:".tsx",children:`import { $ } from '@dna-platform/chemistry';
import { $Paragraph } from '@dna-platform/public';

export class $Action extends $Paragraph {
    protected override $Define(): void {
        super.$Define();
        this.classes.add(this, 'pd-action');
    }
}

export class $Result extends $Paragraph {
    protected override $Define(): void {
        super.$Define();
        this.classes.add(this, 'pd-result');
    }
}

export const Action = $($Action);
export const Result = $($Result);
`})]}),"TheActionAndTheResult1"),D=t(()=>e.jsxs(h,{children:[e.jsx(m,{}),e.jsx(d,{children:"[The Artifact and the Attachment](/claudes-reference-manual/#the-artifact-and-the-attachment)"}),e.jsxs(a,{children:[e.jsx(x,{}),"A file Claude made in a message and a file given to him in one, each named where it entered the conversation, the file itself standing beside the chapter."]}),e.jsxs(o,{children:[e.jsx(c,{children:"Made, and given"}),e.jsxs(a,{children:["An artifact is a file Claude made as he answered, a document, a page, a program, and went on changing as the conversation went on. The conversation's chapter holds an artifact where each version was made, one line naming it, and the file itself stands beside the chapter, every version and the last under its own name, listed at the chapter's foot as ",e.jsx(r,{children:"[the listing](/dougs-reference-manual/#the-listing)"})," shows files. An attachment is a file given to Claude in a message, pasted or uploaded; the chapter holds an attachment naming it, and the file stands beside the chapter when the export carried its text, which it does for what was pasted and not for what was uploaded. Both are writings of their own and not paragraphs of what was said, as ",e.jsx(r,{children:"[an action and its result](/claudes-reference-manual/#the-action-and-the-result)"})," are."]})]}),e.jsx(f,{identifier:"code",type:".tsx",children:`import { $ } from '@dna-platform/chemistry';
import { $Paragraph } from '@dna-platform/public';

export class $Artifact extends $Paragraph {
    protected override $Define(): void {
        super.$Define();
        this.classes.add(this, 'pd-artifact');
    }
}

export class $Attachment extends $Paragraph {
    protected override $Define(): void {
        super.$Define();
        this.classes.add(this, 'pd-attachment');
    }
}

export const Artifact = $($Artifact);
export const Attachment = $($Attachment);
`})]}),"TheArtifactAndTheAttachment2"),P=$(i),M=t(()=>e.jsxs(P,{children:[v(),T(),C(),y(),D()]}),"book");export{M as book};
