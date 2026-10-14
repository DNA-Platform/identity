var w=Object.defineProperty;var t=(j,x)=>w(j,"name",{value:x,configurable:!0});import{j as e,C as r,b as $,T as i,P as u,c as o,H as c,a as n,d as a,W as d,M as s,A as l,$ as g}from"./index-DQlWYKCo.js";import{f as v,I as b,S as p,B as f}from"./31-the-project-manual~code-DMvwNkGb.js";import"./3-the-project~code-Zo31H2sA.js";import{C,S as A}from"./.synopsis-BP2VNl6V.js";const m=class m extends v{};t(m,"$ClaudesReferenceManual");let h=m;const y=t(()=>e.jsxs(r,{children:[e.jsx($,{}),e.jsx(b,{}),e.jsxs(i,{children:[e.jsx(u,{}),"[Table of Contents](/claudes-reference-manual/#table-of-contents)"]}),e.jsxs(o,{children:[e.jsx(c,{children:"What a message of Claude's holds"}),e.jsx(n,{children:e.jsx(a,{children:"[The Action and the Result](/claudes-reference-manual/#the-action-and-the-result)"})}),e.jsx(n,{children:e.jsx(a,{children:"[The Artifact and the Attachment](/claudes-reference-manual/#the-artifact-and-the-attachment)"})}),e.jsx(n,{children:e.jsx(a,{children:"[The Project](/claudes-reference-manual/#the-project)"})}),e.jsxs(n,{children:[e.jsx(u,{}),e.jsx(d,{children:e.jsx(a,{children:"[Claudes Reference Manual](/claudes-reference-manual/)"})}),e.jsx(d,{children:e.jsx(a,{children:"[Synopsis](/claudes-reference-manual/#synopsis)"})}),e.jsx(d,{children:e.jsx(a,{children:"[Table of Contents](/claudes-reference-manual/#table-of-contents)"})})]})]})]}),"Table"),P=t(()=>e.jsxs(r,{children:[e.jsx(p,{}),e.jsx(i,{children:"[The Action and the Result](/claudes-reference-manual/#the-action-and-the-result)"}),e.jsxs(n,{children:[e.jsx(f,{}),"What Claude does in a message that is not said, a search, a fetch, a run of code, a read of a file, as a writing of its own; and the result, what came back, a writing the import counts and leaves out."]}),e.jsxs(o,{children:[e.jsx(c,{children:"Done, and what came back"}),e.jsxs(n,{children:["A message of Claude's holds more than prose. Where he searched the web, fetched a page, ran code or read a file, the message holds an action, one line saying what was done in plain words. What came back is a result, and the import does not write it: a fetched page or a run's output is the machine's and not the conversation's, it was what filled a page when it was kept, and the export still holds it, so the import counts the results it leaves out and a result that matters is kept by hand. Neither is a paragraph of what was said, so neither is a paragraph wearing a mark: each is a writing of its own, a paragraph in shape and not in meaning, which the page can fold, show as the application does, or count. They are Claude's, so they stand in this manual and not in ",e.jsx(s,{children:"[the library's](/dougs-reference-manual/#the-conversation)"}),", where a message is said to be a speaker, a time and what was said."]})]}),e.jsx(l,{identifier:"code",type:".tsx",children:`import { $ } from '@dna-platform/chemistry';
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
`})]}),"TheActionAndTheResult1"),k=t(()=>e.jsxs(r,{children:[e.jsx(p,{}),e.jsx(i,{children:"[The Artifact and the Attachment](/claudes-reference-manual/#the-artifact-and-the-attachment)"}),e.jsxs(n,{children:[e.jsx(f,{}),"A file Claude made in a message and a file given to him in one, each a figure where it entered the conversation, showing the file that stands beside the chapter."]}),e.jsxs(o,{children:[e.jsx(c,{children:"Made, and given"}),e.jsxs(n,{children:["An artifact is a file Claude made as he answered, a document, a page, a program, and went on changing as the conversation went on. The conversation's chapter holds an artifact where each version was made: a figure, as a code listing is, that names the version's file beside the chapter and shows it under one line saying what was done; every version stands beside the chapter and the last under its own name, each listed at the chapter's foot as ",e.jsx(s,{children:"[the listing](/dougs-reference-manual/#the-listing)"})," shows files. An attachment is a file given to Claude in a message, pasted or uploaded: a figure the same way, naming the file when the export carried its text, which it does for what was pasted and not for what was uploaded, and then the line alone. Both are writings of their own and not paragraphs of what was said, as ",e.jsx(s,{children:"[an action](/claudes-reference-manual/#the-action-and-the-result)"})," is; each is a figure, since what it shows is the file."]})]}),e.jsx(l,{identifier:"code",type:".tsx",children:`import { ReactNode } from 'react';
import { $, $Chemical } from '@dna-platform/chemistry';
import { $Code } from '@dna-platform/public';

export class $Artifact extends $Code {
    $Artifact(...chemicals: $Chemical[]) {
        this.$Code(...chemicals);
        this.containers.replace(this, 'pre', 'figure');
    }

    override write(): ReactNode {
        const words = [...this.text].map((chemical, index) => {
            const Word = $(chemical);
            return (
                <Word key={index} />
            );
        });
        return (
            <>
                <figcaption>
                    {words}
                </figcaption>
                <pre>
                    {super.write()}
                </pre>
            </>
        );
    }

    protected override $Define(): void {
        super.$Define();
        this.classes.add(this, 'pd-artifact');
    }
}

export class $Attachment extends $Code {
    $Attachment(...chemicals: $Chemical[]) {
        this.$Code(...chemicals);
        this.containers.replace(this, 'pre', 'figure');
    }

    override write(): ReactNode {
        const words = [...this.text].map((chemical, index) => {
            const Word = $(chemical);
            return (
                <Word key={index} />
            );
        });
        if (!this.names) {
            return (
                <figcaption>
                    {words}
                </figcaption>
            );
        }
        return (
            <>
                <figcaption>
                    {words}
                </figcaption>
                <pre>
                    {super.write()}
                </pre>
            </>
        );
    }

    protected override $Define(): void {
        super.$Define();
        this.classes.add(this, 'pd-attachment');
    }
}

export const Artifact = $($Artifact);
export const Attachment = $($Attachment);
`})]}),"TheArtifactAndTheAttachment2"),R=t(()=>e.jsxs(r,{children:[e.jsx(p,{}),e.jsx(i,{children:"[The Project](/claudes-reference-manual/#the-project)"}),e.jsxs(n,{children:[e.jsx(f,{}),"The project a conversation with Claude was held in, said on the conversation's cover as a fact of Claude's, and the conversation with Claude that draws it."]}),e.jsxs(o,{children:[e.jsx(c,{children:"Held in a project"}),e.jsx(n,{children:"In the application a conversation is held in a project, or in none, and the project holds the files Claude reads while it goes. That is a fact about Claude's conversations and not about conversations in general, so it is said here and not in the library's manual: a project is an annotation of a conversation's cover, as the author and the subject are, holding the project book's name and standing a reference to it, and the cover writes it with the form that says the project catalogues the conversation besides, so the project book's table answers it. It is not a topic. A topic is what a conversation, or a part of one, is about, and the same conversation may turn to several; the project is where it was held, one at most, whatever it turned to."}),e.jsxs(n,{children:["A conversation with Claude is the library's conversation specialized here: it answers its project, and draws a project line beside its byline, a word said to be a label and the project's name leading to its book, the way back from a conversation to its project. The project book itself is ",e.jsx(s,{children:"[a project manual](/dougs-reference-manual/#the-project-manual)"}),", the files as spreads and the conversations as entries."]})]}),e.jsx(l,{identifier:"code",type:".tsx",children:`import { ReactNode } from 'react';
import { $, $check } from '@dna-platform/chemistry';
import {
    $Annotation, $Chapter, $Cover, $Paragraph, $Reference, $Writing, AnnotationSpecification, Reference as reference,
    Word as word, binder, html, specify,
} from '@dna-platform/public';
import { $Conversation, Label as label } from '../../.manual/.book';

export class $Project extends $Annotation {
    specification = new ProjectSpecification();
    get name(): string { return binder.reference(html.copy(this.text))?.name ?? ''; }
    get means(): $Reference | undefined { return this.annotations.expressed($Reference); }

    protected override $Define(): void {
        super.$Define();
        const link = binder.reference(html.copy(this.text));
        if (link === undefined) return;
        const Reference = $(reference);
        this.annotations.add(this,
            <Reference>{link.identifier}</Reference>
        );
    }

    override write(): ReactNode { return this.name; }
}

export class ProjectSpecification extends AnnotationSpecification {
    @specify('a project is said of a cover')
    $saidOfACover(writing: $Writing): void {
        $check(writing instanceof $Chapter && writing.is($Cover), 'a project is said of a cover, and this is not one');
    }
}

export class $ProjectLine extends $Paragraph {
    $cover?: $Chapter;
    get cover(): $Chapter | undefined { return this.$cover ?? this.book?.cover; }
    get project(): $Project | undefined { return this.cover?.annotations.expressed($Project); }

    override write(): ReactNode {
        const project = this.project!;
        const Word = $(word);
        const Said = $(label);
        const Reference = $(reference);
        return (
            <>
                <Word>
                    <Said />
                    project
                </Word>
                <Word>
                    <Reference>{project.means!.identifier}</Reference>
                    {project.name}
                </Word>
            </>
        );
    }

    protected override $Define(): void {
        super.$Define();
        this.classes.add(this, 'pd-project-line');
    }
}

export const Project = $($Project);
export const ProjectLine = $($ProjectLine);
const projectLine = ProjectLine;

export class $ClaudeConversation extends $Conversation {
    get project(): $Project | undefined { return this.cover?.annotations.expressed($Project); }

    override me(): ReactNode {
        const ProjectLine = $(projectLine);
        return (
            <>
                {super.me()}
                {this.project === undefined ? undefined : (
                    <ProjectLine cover={this.cover} />
                )}
            </>
        );
    }
}

export const ClaudeConversation = $($ClaudeConversation);
`})]}),"TheProject3"),T=g(h),B=t(()=>e.jsxs(T,{children:[C(),A(),y(),P(),k(),R()]}),"book");export{B as book};
