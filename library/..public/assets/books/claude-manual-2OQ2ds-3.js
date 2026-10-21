var v=Object.defineProperty;var r=(b,y)=>v(b,"name",{value:y,configurable:!0});import{jsxs as t,jsx as e}from"react/jsx-runtime";import{$ as k}from"@dna-platform/chemistry";import{x,t as $,a as w,b as C,c as T,W as A,h as j,I as P,v as p,w as l}from"./.cover-C7KDejoR.js";import"./1-the-action-and-the-result~code-9d0ewh26.js";import{Chapter as h,Title as c,Author as W,Subject as S,Paragraph as n,Svg as R,Synopsis as L,Parenthetical as f,Means as a,TableOfContents as O,Section as o,Heading as i,Content as s,Word as m,Append as d}from"@dna-platform/public";import{S as D}from"./.cover-CCOSxeYX.js";import"styled-components";const u=class u extends x{};r(u,"$ClaudesReferenceManual");let g=u;const I=r(()=>t(h,{children:[e($,{}),e(w,{children:D()}),e(w,{children:C()}),e(T,{ground:"#eff1f6",band:"#c0c9df",bandInk:"#2a3a63",foot:"#8e9fc8",footInk:"#1f2d50",ink:"#2a3a63"}),e(A,{x:"-22",y:"-50"}),e(c,{children:"[Claudes Reference Manual](/claudes-reference-manual/)"}),e(W,{children:"[Doug](/dougs-story/)"}),e(S,{children:"[Claude](/dougs-claude/)"}),t(n,{children:[e(j,{}),e(R,{children:`<svg viewBox="0 0 64 64" class="pd-illustration"><circle class="fill" cx="22" cy="42" r="10"/><circle class="light" cx="22" cy="42" r="3.5"/><circle cx="22" cy="42" r="3.5"/><path d="M22 29v-4M22 55v4M9 42H5M35 42h4M13 33l-3-3M31 33l3-3M13 51l-3 3M31 51l3 3"/><path class="fill" d="M44 7l3 9 9 3-9 3-3 9-3-9-9-3 9-3z"/><path d="M44 7l3 9 9 3-9 3-3 9-3-9-9-3 9-3z"/></svg>
`})]})]}),"Cover"),M=r(()=>t(h,{children:[e(L,{}),t(c,{children:[e(f,{}),"[Synopsis](/claudes-reference-manual/)"]}),t(n,{children:["What a message of Claude's is made of beyond what was said: an action and its result, an artifact and an attachment, each a writing of its own that the importer writes and the page draws as Claude's application does. They specialize what ",e(a,{children:"[my reference manual](/dougs-reference-manual/#the-conversation)"})," says a conversation is in general, a book of messages, each by a speaker at a time, with its participants on the cover; the conversations themselves are filed under ",e(a,{children:"[Our Conversations](/our-conversations/)"}),"."]})]}),"Synopsis"),N=r(()=>t(h,{children:[e(O,{}),e(P,{}),t(c,{children:[e(f,{}),"[Table of Contents](/claudes-reference-manual/#table-of-contents)"]}),t(o,{children:[e(i,{children:"What a message of Claude's holds"}),e(n,{children:e(s,{children:"[The Action and the Result](/claudes-reference-manual/#the-action-and-the-result)"})}),e(n,{children:e(s,{children:"[The Artifact and the Attachment](/claudes-reference-manual/#the-artifact-and-the-attachment)"})}),e(n,{children:e(s,{children:"[The Project](/claudes-reference-manual/#the-project)"})}),e(n,{children:e(s,{children:"[The Account](/claudes-reference-manual/#the-account)"})}),e(n,{children:e(s,{children:"[The Origin](/claudes-reference-manual/#the-origin)"})}),e(n,{children:e(s,{children:"[The Page](/claudes-reference-manual/#the-page)"})}),e(n,{children:e(s,{children:"[The Pane](/claudes-reference-manual/#the-pane)"})}),t(n,{children:[e(f,{}),e(m,{children:e(s,{children:"[Claudes Reference Manual](/claudes-reference-manual/)"})}),e(m,{children:e(s,{children:"[Synopsis](/claudes-reference-manual/#synopsis)"})}),e(m,{children:e(s,{children:"[Table of Contents](/claudes-reference-manual/#table-of-contents)"})})]})]}),t(o,{children:[e(i,{children:"What an import writes"}),e(n,{children:e(s,{children:"[The Imported Conversation](/claudes-reference-manual/#the-imported-conversation)"})})]})]}),"Table"),B=r(()=>t(h,{children:[e(p,{}),e(c,{children:"[The Action and the Result](/claudes-reference-manual/#the-action-and-the-result)"}),t(n,{children:[e(l,{}),"What Claude does in a message that is not said, a search, a fetch, a run of code, a read of a file, as a writing of its own; and the result, what came back, a writing the import counts and leaves out."]}),t(o,{children:[e(i,{children:"Done, and what came back"}),t(n,{children:["A message of Claude's holds more than prose. Where he searched the web, fetched a page, ran code or read a file, the message holds an action, one line saying what was done in plain words. What came back is a result, and the import does not write it: a fetched page or a run's output is the machine's and not the conversation's, it was what filled a page when it was kept, and the export still holds it, so the import counts the results it leaves out and a result that matters is kept by hand. Neither is a paragraph of what was said, so neither is a paragraph wearing a mark: each is a writing of its own, a paragraph in shape and not in meaning, which the page can fold, show as the application does, or count. They are Claude's, so they stand in this manual and not in ",e(a,{children:"[the library's](/dougs-reference-manual/#the-conversation)"}),", where a message is said to be a speaker, a time and what was said."]})]}),e(d,{identifier:"code",type:".tsx",children:`import { $ } from '@dna-platform/chemistry';
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
`})]}),"TheActionAndTheResult1"),q=r(()=>t(h,{children:[e(p,{}),e(c,{children:"[The Artifact and the Attachment](/claudes-reference-manual/#the-artifact-and-the-attachment)"}),t(n,{children:[e(l,{}),"A file Claude made in a message and a file given to him in one, each a figure where it entered the conversation: a card for the artifact and a chip for the file given, each opening in the pane."]}),t(o,{children:[e(i,{children:"Made, and given"}),t(n,{children:["An artifact is a file Claude made as he answered, a document, a page, a program, and went on changing as the conversation went on. The day's chapter holds an artifact where each version was made: a figure, as a code listing is, that names the version's file beside the chapter and is drawn as the application draws one, a card with a glyph for a document or for code, the artifact's title and a line to open it; every version's file stands beside the chapter and the last under its own name. Each version is also a chapter of the conversation, said to be a version, its document converted to writing at import under an opaque section and its code set in a code box; the card's caption refers to that chapter, and pressing the card opens it in ",e(a,{children:"[the pane](/claudes-reference-manual/#the-pane)"}),", where the versions can be walked. An attachment is a file given to Claude in a message, pasted or uploaded: a figure the same way, drawn as a chip at the head of the words it was given with, naming the file when the export carried its text, which it does for what was pasted and not for what was uploaded, and opening in the same pane. Both are writings of their own and not paragraphs of what was said, as ",e(a,{children:"[an action](/claudes-reference-manual/#the-action-and-the-result)"})," is; each is a figure, since what it shows is the file."]})]}),e(d,{identifier:"code",type:".tsx",children:`import { ReactNode } from 'react';
import { $, $check, $Chemical } from '@dna-platform/chemistry';
import { $Annotation, $Chapter, $Code, $Writing, AnnotationSpecification, html, identifier, specify } from '@dna-platform/public';
import type { $LibraryBook } from '../../.manual/.book';

export type Showing = { $shown: $Artifact | $Attachment | undefined };

const documentGlyph = '<svg viewBox="0 0 24 24"><path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4M9 12h6M9 16h6"/></svg>';
const codeGlyph = '<svg viewBox="0 0 24 24"><path d="M8 7l-5 5 5 5M16 7l5 5-5 5M13 5l-2 14"/></svg>';

export const showingBook = (writing: $Writing): Showing | undefined => {
    const book = writing.book as unknown as Partial<Showing> | undefined;
    return book !== undefined && '$shown' in book ? (book as Showing) : undefined;
};

export class $Version extends $Annotation {
    specification = new VersionSpecification();

    override defines(writing: $Writing): void {
        writing.classes.add(this, 'pa-version');
    }

    override erase(writing: $Writing): void {
        writing.classes.revert(this);
    }
}

export class VersionSpecification extends AnnotationSpecification {
    @specify('a version is said of a chapter')
    $saidOfAChapter(writing: $Writing): void {
        $check(writing instanceof $Chapter, 'a version is said of a chapter, and this is not one');
    }
}

export class $Artifact extends $Code {
    $artifact: string | undefined = undefined;
    $place: string | undefined = undefined;
    get version(): $Chapter | undefined {
        const place = this.$place;
        if (place === undefined) return undefined;
        return (this.book as $LibraryBook).chapters.find(chapter => identifier.slug(chapter.title?.name ?? '') === place);
    }
    get versionName(): string { return this.version?.title?.name ?? ''; }
    get name(): string { return this.versionName.replace(/ v\\d+(?:-\\d+)?$/u, '') || this.$identifier; }
    get number(): string { return / v(\\d+)(?:-\\d+)?$/u.exec(this.versionName)?.[1] ?? '1'; }
    get kind(): string {
        const type = this.$type.replace(/^\\./u, '');
        return type === 'md' || type === 'txt' || type === '' ? 'document' : type === 'html' ? 'page' : 'code';
    }
    get shown(): boolean { return showingBook(this)?.$shown === this; }

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
        const glyph = { __html: this.kind === 'document' ? documentGlyph : codeGlyph };
        return (
            <>
                <button
                    type="button"
                    className="pd-card"
                    aria-pressed={this.shown}
                    onClick={() => this.press()}
                >
                    <span
                        className="pd-card-mark"
                        dangerouslySetInnerHTML={glyph}
                    />
                    <span className="pd-card-words">
                        <b>
                            {this.name}
                        </b>
                        <small>
                            {\`Click to open \${this.kind} · v\${this.number}\`}
                        </small>
                    </span>
                </button>
                <figcaption>
                    {words}
                </figcaption>
            </>
        );
    }

    press(): void {
        const book = showingBook(this);
        if (book === undefined) return;
        book.$shown = book.$shown === this ? undefined : this;
    }

    protected override $Define(): void {
        super.$Define();
        this.classes.add(this, 'pd-artifact');
        if (this.shown) this.classes.add(this, 'pa-open');
    }
}

export class $Attachment extends $Code {
    get sentence(): string { return html.copy(this.text); }
    get fileName(): string { return /“([^”]+)”/u.exec(this.sentence)?.[1] ?? 'a file'; }
    get extension(): string { return (this.fileName.split('.').pop() ?? 'file').toUpperCase().slice(0, 4); }
    get lineCount(): number { return this.names ? this.contents.split('\\n').length : 0; }
    get shown(): boolean { return showingBook(this)?.$shown === this; }

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
        return (
            <>
                <button
                    type="button"
                    className="pd-chip"
                    aria-pressed={this.shown}
                    onClick={() => this.press()}
                >
                    <span className="pd-chip-mark">
                        {this.extension}
                    </span>
                    <span className="pd-chip-words">
                        <b>
                            {this.fileName}
                        </b>
                        <small>
                            {this.names ? \`\${this.lineCount} lines\` : 'not carried by the export'}
                        </small>
                    </span>
                </button>
                <figcaption>
                    {words}
                </figcaption>
            </>
        );
    }

    press(): void {
        const book = showingBook(this);
        if (book === undefined) return;
        book.$shown = book.$shown === this ? undefined : this;
    }

    protected override $Define(): void {
        super.$Define();
        this.classes.add(this, 'pd-attachment');
        if (this.shown) this.classes.add(this, 'pa-open');
    }
}

export const Version = $($Version);
export const Artifact = $($Artifact);
export const Attachment = $($Attachment);
`})]}),"TheArtifactAndTheAttachment2"),z=r(()=>t(h,{children:[e(p,{}),e(c,{children:"[The Project](/claudes-reference-manual/#the-project)"}),t(n,{children:[e(l,{}),"The project a conversation with Claude was held in, said on the conversation's cover as a fact of Claude's, and the conversation with Claude that draws it."]}),t(o,{children:[e(i,{children:"Held in a project"}),e(n,{children:"In the application a conversation is held in a project, or in none, and the project holds the files Claude reads while it goes. That is a fact about Claude's conversations and not about conversations in general, so it is said here and not in the library's manual: a project is an annotation of a conversation's cover, as the author and the subject are, holding the project book's name and standing a reference to it, and the cover writes it with the form that says the project catalogues the conversation besides, so the project book's table answers it. It is not a topic. A topic is what a conversation, or a part of one, is about, and the same conversation may turn to several; the project is where it was held, one at most, whatever it turned to."}),t(n,{children:["A conversation with Claude is the library's conversation specialized here: it answers its project, and draws a project line beside its byline, a word said to be a label and the project's name leading to its book, one way back from a conversation to its project; and the other is the logo's, which files the conversation under its project where it filed it under the conversations book, the project's own mark in the project's own colours leading to its page and its name under the conversation's on hover, read off the project's cover standing as a volume of the conversation's, concept 5 of ",e(a,{children:"[The Project's Page](/claudes-design/#the-projects-page)"})," in its first form. The project book itself is ",e(a,{children:"[a project manual](/dougs-reference-manual/#the-project-manual)"}),", the files as spreads and the conversations as entries. The project has a twin, the account the conversation was held under, ",e(a,{children:"[The Account](/claudes-reference-manual/#the-account)"}),", said after it on the cover and drawn after it on the page."]})]}),e(d,{identifier:"code",type:".tsx",children:`import { ReactNode } from 'react';
import { $, $check } from '@dna-platform/chemistry';
import {
    $Annotation, $Chapter, $Cover, $Paragraph, $Reference, $Writing, AnnotationSpecification, Reference as reference,
    Word as word, binder, html, specify,
} from '@dna-platform/public';
import { Theme } from '@dna-platform/public';
import { $Conversation, Label as label, Light as light, Tone as tone } from '../../.manual/.book';
import { ApplicationForm } from './4-the-page~theme.tsx';
import { $Artifact, $Attachment } from './2-the-artifact-and-the-attachment~code.tsx';
import { Pane as pane } from './5-the-pane~code.tsx';
import { $Account, AccountLine as accountLine } from './7-the-account~code.tsx';
import { $Origin } from './8-the-origin~code.tsx';

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
    $shown: $Artifact | $Attachment | undefined = undefined;
    get project(): $Project | undefined { return this.cover?.annotations.expressed($Project); }
    get account(): $Account | undefined { return this.cover?.annotations.expressed($Account); }
    get origin(): string | undefined { return this.cover?.annotations.expressed($Origin)?.uuid; }
    // The logo files the conversation under its project when the cover names one, the project's cover standing as a
    // volume of the conversation's; the name under the conversation's on hover is the project's, and the mark leads
    // to the project's page. Sprint 114, concept 5 of Claudes Design, its first form.
    override get subjectCover(): $Chapter | undefined {
        return this.coverOf(this.project?.means?.identifier) ?? super.subjectCover;
    }

    override write(): ReactNode {
        const Pane = $(pane);
        return (
            <>
                {super.write()}
                <Pane chapter={this.cover} />
            </>
        );
    }

    override me(): ReactNode {
        const ProjectLine = $(projectLine);
        const AccountLine = $(accountLine);
        return (
            <>
                {super.me()}
                {this.project === undefined ? undefined : (
                    <ProjectLine cover={this.cover} />
                )}
                {this.account === undefined ? undefined : (
                    <AccountLine cover={this.cover} />
                )}
            </>
        );
    }
}

export const ClaudeConversation = $($ClaudeConversation);
$(ClaudeConversation, Theme)(ApplicationForm);
$(ClaudeConversation, tone)(light);
`})]}),"TheProject3"),E=r(()=>t(h,{children:[e(p,{}),e(c,{children:"[The Page](/claudes-reference-manual/#the-page)"}),t(n,{children:[e(l,{}),"How a conversation with Claude is shown on its page: the form the application itself gives a conversation, read off the application, and the browser this library keeps open to read it."]}),t(o,{children:[e(i,{children:"The form the application gives"}),t(n,{children:["A conversation is shown as the application shows it, since that is the form its reader knows, and annotations and flourishes come on that base. The form is read off the application's own page in a browser, element by element and style by style, and written as the theme of ",e(a,{children:"[a conversation with Claude](/claudes-reference-manual/#the-project)"}),", so that the message, the speaker, the time, the action, the artifact and the attachment are dressed as the application dresses them."]})]}),t(o,{children:[e(i,{children:"The browser this library keeps open"}),t(n,{children:["The application's pages need my sign-in, so the library opens a browser of its own, with a profile that keeps the sign-in once I have logged in there, and leaves it open with a port a later command attaches to: one command opens it on the application and keeps it open, and the others list its tabs, open a page, say what an element says, print its tree or its computed styles, photograph it, scroll to an element, hover or press one and say what changed, or name what runs past the right edge at a width. The file beside this chapter is that tool, run from the repository's root. It is an essential tool of developing this library and is opened at the start of a session, in the background, with ",e(a,{children:"[the command](/dougs-reference-manual/#developing-a-library)"})," said there: node .me/.claude/.manual/4-the-page~browser.mjs open; it stays open as a resource until I close it, and I log in there once. It is a browser and not an interface for calls: it keeps one tab per place, the application, the workbench, the built site, a file, and goes to an address in the tab it has rather than opening another, and what it leaves open is closed with its close command."]})]}),e(d,{identifier:"theme",type:".tsx",children:`import { css, RuleSet } from 'styled-components';
import { $ } from '@dna-platform/chemistry';
import { $Typeset } from '../../.manual/.book';

// Concept 3 of Claudes Design, the application measured in its own browser and carried in as decided: the chat text at its
// measures, white across every surface with a tint only in the last pixels before an edge, the head scrolling away with the
// words, and the pane's column when one is open.
export class $ApplicationForm extends $Typeset {
    sans = "'Inter', system-ui, sans-serif";
    mono = "ui-monospace, 'Cascadia Code', Consolas, monospace";
    keyword = '#1f5fbf';
    string = '#9a3b1e';
    type = '#116b4a';
    comment = '#7a8491';

    protected override parts(): RuleSet[] {
        return [
            ...super.parts(), this.surfaces(), this.top(), this.rows(), this.openDay(), this.exchanges(), this.said(),
            this.cards(), this.paneColumn(), this.phone(),
        ];
    }

    protected surfaces(): RuleSet {
        return css\`
            .pd-book .pd-library { background: linear-gradient(180deg, #ffffff 0%, #ffffff 84%, #fbfcfe 100%); }
            .pd-book .pd-me { background: linear-gradient(180deg, #ffffff 0%, #ffffff 84%, #fbfcfe 100%); }
            .pd-book .pd-holds { background: linear-gradient(90deg, #ffffff 0%, #ffffff 88%, #fbfcfe 100%); }
            .pd-book .pd-head { background: #ffffff; box-shadow: none; }
            .pd-book.pa-layout .pd-library::after { content: none; }
            .pd-book .pd-pages { background: #ffffff; }
            @media (min-width: \${({ theme }) => theme.narrow}) {
                .pd-book.pa-layout { height: 100vh; overflow-y: auto; grid-template-rows: auto auto auto; }
                .pd-book.pa-layout .pd-pages { overflow: visible; }
                .pd-book.pa-layout .pd-library, .pd-book.pa-layout .pd-me { position: sticky; top: 0; z-index: 3; }
                .pd-book.pa-layout .pd-holds { position: sticky; top: \${({ theme }) => theme.barHeight}; align-self: start; max-height: calc(100vh - \${({ theme }) => theme.barHeight}); }
            }
        \`;
    }

    protected top(): RuleSet {
        return css\`
            .pd-book .pd-head .pd-switches, .pd-book .pd-head .pa-illustration { display: none; }
            .pd-book .pd-head .pd-title { font-family: \${({ theme }) => theme.serif}; font-size: 30px; font-weight: 600; line-height: 1.1; letter-spacing: -.01em; }
            .pd-book .pd-head .pd-participants { display: flex; gap: 6px; align-items: center; margin: 6px 0 0; font-family: \${({ theme }) => theme.sans}; font-size: 13px; color: \${({ theme }) => theme.soft}; }
            .pd-book .pd-head .pd-participants::before { content: 'between'; }
            .pd-book .pd-head .pd-participants .pa-reference { color: \${({ theme }) => theme.ink}; font-weight: 500; text-decoration: none; }
            .pd-book .pd-head .pd-participants .pa-reference:hover { color: \${({ theme }) => theme.accent}; }
            .pd-book .pd-head .pd-tally { display: flex; flex-wrap: wrap; gap: 4px 16px; margin: 6px 0 0; font-family: \${({ theme }) => theme.sans}; font-size: 12.5px; color: \${({ theme }) => theme.soft}; }
            .pd-book .pd-head .pd-tally b { color: \${({ theme }) => theme.ink}; font-weight: 500; }
        \`;
    }

    protected rows(): RuleSet {
        return css\`
            .pd-book .pd-holds .pd-chapter { display: flex; flex-direction: column; }
            .pd-book .pd-holds .pd-section.pa-appendix { display: none; }
            .pd-book .pd-holds .pd-section > .pd-heading { margin: 0 0 4px 18px; font-family: \${({ theme }) => theme.sans}; font-size: 10.5px; font-weight: 600; line-height: 1.4; letter-spacing: .12em; text-transform: uppercase; color: \${({ theme }) => theme.faint}; }
            .pd-book .pd-holds .pd-paragraph.pa-entry { display: flex; align-items: center; gap: 9px; padding: 6px 18px 6px 16px; font-family: \${({ theme }) => theme.sans}; font-size: 13px; color: \${({ theme }) => theme.ink}; }
            .pd-book .pd-holds .pd-paragraph.pa-entry::before { content: ''; flex: none; width: 7px; height: 7px; border-radius: 50%; background: \${({ theme }) => theme.sea}; }
            .pd-book .pd-holds .pd-paragraph.pa-entry .pd-day-count { margin-inline-start: auto; font-size: 11px; color: \${({ theme }) => theme.faint}; }
            .pd-book .pd-holds .pd-paragraph.pa-entry:hover { background: #f8fafc; }
            .pd-book .pd-holds .pd-paragraph.pa-entry.pa-open { background: linear-gradient(90deg, #eff4fa, #f8fafd); color: \${({ theme }) => theme.heading}; font-weight: 500; }
        \`;
    }

    protected openDay(): RuleSet {
        return css\`
            .pd-book .pd-pages .pd-chapter.pa-page { width: 100%; max-width: 768px; margin: 0 auto; }
            .pd-book .pd-pages .pa-page > .pd-title, .pd-book .pd-pages .pa-page > a.pa-self-reference .pd-title { margin: 0 0 22px; font-family: \${({ theme }) => theme.sans}; font-size: 11.5px; font-weight: 600; line-height: 1.4; letter-spacing: .14em; text-transform: uppercase; color: \${({ theme }) => theme.faint}; }
            .pd-book .pd-pages .pd-turn, .pd-book .pd-pages .pa-page > .pd-word.pd-date { display: none; }
        \`;
    }

    protected exchanges(): RuleSet {
        return css\`
            .pd-book .pd-pages .pd-message { position: relative; display: block; margin: 0 0 28px; }
            .pd-book .pd-pages .pd-message > .pa-self-reference, .pd-book .pd-pages .pd-message .pd-heading.pd-speaker { display: none; }
            .pd-book .pd-pages .pd-message > .pd-word.pd-time { position: absolute; top: -17px; left: 0; display: block; width: auto; margin: 0; font-family: \${({ theme }) => theme.sans}; font-size: 11px; font-weight: 500; line-height: 1; color: \${({ theme }) => theme.faint}; opacity: 0; transition: opacity .15s; }
            .pd-book .pd-pages .pd-message > .pd-word.pd-time::before { content: none; }
            .pd-book .pd-pages .pd-message.pa-mine > .pd-word.pd-time { left: auto; right: 0; }
            .pd-book .pd-pages .pd-message:hover > .pd-word.pd-time { opacity: 1; }
            .pd-book .pd-pages .pd-message > .pd-said { display: flex; flex-direction: column; gap: 10px; min-width: 0; overflow-wrap: anywhere; }
            .pd-book .pd-pages .pd-message.pa-mine > .pd-said { margin-inline-start: auto; width: fit-content; max-width: 78%; padding: 12px 16px; border-radius: 12px; background: rgba(11, 11, 11, .05); gap: 8px; }
        \`;
    }

    protected said(): RuleSet {
        return css\`
            .pd-book .pd-pages .pd-message .pd-said .pd-paragraph { margin: 0; font-family: \${({ theme }) => theme.serif}; font-size: 15px; line-height: 22px; color: #0b0b0b; }
            .pd-book .pd-pages .pd-message.pa-mine .pd-said .pd-paragraph { font-family: \${({ theme }) => theme.sans}; line-height: 20px; }
            .pd-book .pd-pages .pd-message .pd-said .pd-heading { margin: 8px 0 0; padding: 0; border: 0; font-family: \${({ theme }) => theme.serif}; font-size: 16px; font-weight: 600; line-height: 22px; color: #0b0b0b; }
            .pd-book .pd-pages .pd-message .pa-emphasis { font-style: italic; }
            .pd-book .pd-pages .pd-message .pa-bold { font-weight: 600; }
            .pd-book .pd-pages .pd-message .pa-list { padding-inline-start: 30px; }
            .pd-book .pd-pages .pd-message .pd-paragraph.pa-list .pd-line.pa-item { display: list-item; position: static; margin: 0; padding-inline-start: 0; list-style: disc outside; }
            .pd-book .pd-pages .pd-message .pd-paragraph.pa-list .pd-line.pa-item::before { content: none; }
            .pd-book .pd-pages .pd-message .pd-paragraph.pa-list.pa-ordered .pd-line.pa-item { list-style: decimal outside; }
            .pd-book .pd-pages .pd-message .pd-paragraph.pa-list .pd-line.pa-item + .pd-line.pa-item { margin-block-start: 4px; }
            .pd-book .pd-pages .pd-message .pa-list .pa-list { margin: 4px 0 0; }
            .pd-book .pd-pages .pd-message .pa-verbatim { font-family: \${({ theme }) => theme.mono}; font-size: 13.5px; padding: 1px 4px; border-radius: 5px; background: rgba(11, 11, 11, .05); color: #8e2626; }
            .pd-book .pd-pages .pd-message .pd-word.pa-reference { color: \${({ theme }) => theme.accent}; text-decoration: underline; text-decoration-color: color-mix(in srgb, \${({ theme }) => theme.accent} 35%, transparent); text-underline-offset: 3px; }
            .pd-book .pd-pages .pd-message .pa-quoted { padding-inline-start: 12px; border-inline-start: 3px solid \${({ theme }) => theme.line}; color: \${({ theme }) => theme.soft}; }
            .pd-book .pd-pages .pd-message .pd-paragraph.pa-table { display: table; width: 100%; border-collapse: collapse; font-family: \${({ theme }) => theme.sans}; font-size: 14px; line-height: 1.5; }
            .pd-book .pd-pages .pd-message .pa-table .pa-row { display: table-row; }
            .pd-book .pd-pages .pd-message .pa-table .pa-col { display: table-cell; padding: 7px 12px; border-block-end: 1px solid \${({ theme }) => theme.line}; vertical-align: top; }
            .pd-book .pd-pages .pd-message .pa-table .pa-row-start-1 .pa-col { font-weight: 600; color: \${({ theme }) => theme.heading}; border-block-end: 2px solid \${({ theme }) => theme.line}; }
            .pd-book .pd-pages .pd-message .pd-equation { display: block; margin: 4px 0; max-width: 100%; overflow-x: auto; }
            .pd-book .pd-pages .pd-message .katex-display { margin: 0; }
            .pd-book .pd-pages .pd-message .katex { font-size: 1.05em; }
        \`;
    }

    protected cards(): RuleSet {
        return css\`
            .pd-book .pd-pages .pd-message .pd-action { display: flex; align-items: center; gap: 8px; width: fit-content; max-width: 100%; margin: 0; padding: 7px 12px; border: 1px solid \${({ theme }) => theme.line}; border-radius: 10px; font-family: \${({ theme }) => theme.sans}; font-size: 13px; line-height: 1.4; color: \${({ theme }) => theme.soft}; }
            .pd-book .pd-pages .pd-message .pd-action::before { content: '⌕'; flex: none; font-size: 15px; color: \${({ theme }) => theme.accent}; }
            .pd-book .pd-pages .pd-message .pd-artifact, .pd-book .pd-pages .pd-message .pd-attachment { margin: 0; padding: 0; border: 0; background: none; }
            .pd-book .pd-pages .pd-message .pd-artifact > figcaption, .pd-book .pd-pages .pd-message .pd-attachment > figcaption { display: none; }
            .pd-book .pd-pages .pd-message .pd-said > .pd-attachment { order: -1; }
            .pd-book .pd-pages .pd-message .pd-card { display: flex; align-items: center; gap: 12px; width: 100%; max-width: 100%; margin: 0; padding: 12px 14px; border: 1px solid \${({ theme }) => theme.line}; border-radius: 12px; background: #ffffff; text-align: start; font-family: \${({ theme }) => theme.sans}; font-size: 13px; line-height: 1.4; color: \${({ theme }) => theme.ink}; cursor: pointer; transition: border-color .15s, background .15s; }
            .pd-book .pd-pages .pd-message .pd-card:hover { border-color: #c9d1de; background: #fcfcfd; }
            .pd-book .pd-pages .pd-message .pd-card .pd-card-mark { display: grid; place-items: center; flex: none; width: 38px; height: 38px; border: 1px solid \${({ theme }) => theme.line}; border-radius: 9px; background: #fbfcfd; color: \${({ theme }) => theme.soft}; }
            .pd-book .pd-pages .pd-message .pd-card .pd-card-mark svg { width: 18px; height: 18px; stroke: currentColor; fill: none; stroke-width: 1.8; stroke-linecap: round; stroke-linejoin: round; }
            .pd-book .pd-pages .pd-message .pd-card b { display: block; font-size: 14px; font-weight: 500; color: \${({ theme }) => theme.heading}; }
            .pd-book .pd-pages .pd-message .pd-card small { color: \${({ theme }) => theme.soft}; }
            .pd-book .pd-pages .pd-message .pd-card[aria-pressed='true'] { border-color: \${({ theme }) => theme.accent}; background: #f3f8fa; }
            .pd-book .pd-pages .pd-message .pd-card[aria-pressed='true'] .pd-card-mark { color: \${({ theme }) => theme.accent}; }
            .pd-book .pd-pages .pd-message .pd-chip { display: flex; align-items: center; gap: 8px; width: fit-content; margin: 0; padding: 6px 10px 6px 8px; border: 1px solid rgba(11, 11, 11, .1); border-radius: 10px; background: #ffffff; text-align: start; font-family: \${({ theme }) => theme.sans}; font-size: 12px; line-height: 1.3; color: \${({ theme }) => theme.ink}; cursor: pointer; }
            .pd-book .pd-pages .pd-message .pd-chip:hover, .pd-book .pd-pages .pd-message .pd-chip[aria-pressed='true'] { border-color: \${({ theme }) => theme.accent}; }
            .pd-book .pd-pages .pd-message .pd-chip .pd-chip-mark { display: grid; place-items: center; flex: none; width: 26px; height: 26px; border-radius: 6px; background: #fbfcfd; font-size: 8.5px; font-weight: 600; line-height: 1; letter-spacing: .04em; color: \${({ theme }) => theme.soft}; }
            .pd-book .pd-pages .pd-message .pd-chip b { display: block; font-weight: 500; }
            .pd-book .pd-pages .pd-message .pd-chip small { font-size: 11px; color: \${({ theme }) => theme.soft}; }
        \`;
    }

    protected paneColumn(): RuleSet {
        return css\`
            .pd-book.pa-layout:has(> .pd-pane > .pd-pane-bar) {
                grid-template-columns: \${({ theme }) => theme.holdsColumn} minmax(0, 1fr) minmax(0, 1fr);
                grid-template-areas: 'library library library' 'holds head pane' 'holds pages pane';
            }
        \`;
    }

    protected phone(): RuleSet {
        return css\`
            @media (max-width: \${({ theme }) => theme.narrow}) {
                .pd-book .pd-pages .pd-message.pa-mine > .pd-said { max-width: 92%; }
                .pd-book .pd-head .pd-title { font-size: 24px; }
                .pd-book.pa-layout:has(> .pd-pane > .pd-pane-bar) { grid-template-columns: minmax(0, 1fr); grid-template-areas: 'library' 'head' 'pages'; }
            }
        \`;
    }
}

export const ApplicationForm = $($ApplicationForm);
`}),e(d,{identifier:"browser",type:".mjs",children:`import { createRequire } from 'node:module';
import { mkdirSync, writeFileSync } from 'node:fs';
import { homedir } from 'node:os';
import { join } from 'node:path';

const puppeteer = createRequire(join(process.cwd(), 'package.json'))('puppeteer');
const port = 9333;
const profile = join(homedir(), '.cache', 'dna-platform', 'claude-browser');
const browserUrl = \`http://127.0.0.1:\${port}\`;
const [command, ...words] = process.argv.slice(2);

const usage = [
    'node 4-the-page~browser.mjs open                       open the browser on claude.ai and keep it open',
    'node 4-the-page~browser.mjs tabs                       list the open tabs',
    'node 4-the-page~browser.mjs close [place]              close the tabs left open, all but the first, or those at one place',
    'node 4-the-page~browser.mjs go <url>                   open a url in a tab of its own, kept',
    'node 4-the-page~browser.mjs text <url> [selector]      print what the page, or one element, says',
    'node 4-the-page~browser.mjs html <url> <selector>      print an element\\'s outer HTML',
    'node 4-the-page~browser.mjs tree <url> <selector> [n]  print an element\\'s tree, tag and classes, n deep',
    'node 4-the-page~browser.mjs style <url> <selector> <properties,comma,separated>',
    'node 4-the-page~browser.mjs shot <url> <file.png>      photograph the page',
    'node 4-the-page~browser.mjs scroll <url> <selector>    scroll an element into view, at the top',
    'node 4-the-page~browser.mjs hover <url> <selector> [watch]   hover an element; print the watched element\\'s classes before and after',
    'node 4-the-page~browser.mjs press <url> <selector> [watch]   press an element; print the watched element\\'s classes before and after',
    'node 4-the-page~browser.mjs over <url> [width]         name the elements past the right edge at a width',
].join('\\n');

const attached = async () => {
    try {
        return await puppeteer.connect({ browserURL: browserUrl, defaultViewport: null });
    } catch {
        throw new Error(\`no browser answers at \${browserUrl}; open one first with: node 4-the-page~browser.mjs open\`);
    }
};

// ONE TAB PER PLACE: a tab is kept per origin, claude.ai, the workbench, the built site, a file, and navigated to the
// address asked for rather than a new tab opened for every address; a tab already at the address is reused as it is.
const placeOf = (url) => { try { return new URL(url).origin; } catch { return url; } };
const pageAt = async (browser, url) => {
    const pages = await browser.pages();
    const open = pages.find(page => page.url().split('#')[0] === url.split('#')[0]);
    if (open !== undefined) return open;
    const atThePlace = pages.find(page => placeOf(page.url()) === placeOf(url) && !page.url().startsWith('https://claude.ai/chat/'));
    const page = atThePlace ?? await browser.newPage();
    await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });
    return page;
};

const open = async () => {
    mkdirSync(profile, { recursive: true });
    const browser = await puppeteer.launch({
        headless: false,
        userDataDir: profile,
        defaultViewport: null,
        args: [\`--remote-debugging-port=\${port}\`, '--window-size=1400,1000', '--no-first-run', '--no-default-browser-check'],
        ignoreDefaultArgs: ['--enable-automation'],
    });
    const [page] = await browser.pages();
    await page.goto('https://claude.ai/', { waitUntil: 'domcontentloaded', timeout: 60000 });
    console.log(\`the browser is open at \${browserUrl}, on claude.ai, with its own profile under \${profile}\`);
    console.log('log in there once; it stays signed in. The browser stays open until this process ends.');
    browser.on('disconnected', () => process.exit(0));
    await new Promise(() => undefined);
};

const run = async () => {
    if (command === 'open') return open();
    if (command === undefined) { console.log(usage); return; }
    const browser = await attached();
    try {
        if (command === 'tabs') {
            for (const page of await browser.pages()) console.log(\`\${page.url()}  ·  \${await page.title()}\`);
            return;
        }
        if (command === 'close') {
            const pages = await browser.pages();
            const place = words[0];
            let closed = 0;
            for (const page of pages.slice(1)) {
                if (place !== undefined && !page.url().includes(place)) continue;
                await page.close();
                closed += 1;
            }
            console.log(\`closed \${closed} of \${pages.length} tabs; \${pages.length - closed} open\`);
            return;
        }
        const [url, selector, third] = words;
        if (url === undefined) throw new Error(\`\${command} needs a url\\n\${usage}\`);
        const page = await pageAt(browser, url);
        if (command === 'go') { console.log(\`\${page.url()}  ·  \${await page.title()}\`); return; }
        if (command === 'text') {
            const said = selector === undefined
                ? await page.evaluate(() => document.body.innerText)
                : await page.$$eval(selector, nodes => nodes.map(node => node.innerText).join('\\n---\\n'));
            console.log(said);
            return;
        }
        if (command === 'html') {
            console.log(await page.$$eval(selector, nodes => nodes.map(node => node.outerHTML).join('\\n---\\n')));
            return;
        }
        if (command === 'tree') {
            const depth = Number(third ?? 4);
            console.log(await page.$eval(selector, (root, depth) => {
                const lines = [];
                const walk = (node, level) => {
                    if (level > depth || node.nodeType !== 1) return;
                    const classes = [...node.classList].slice(0, 12).join('.');
                    const text = node.children.length === 0 ? \` "\${(node.textContent ?? '').trim().slice(0, 60)}"\` : '';
                    lines.push(\`\${'  '.repeat(level)}\${node.tagName.toLowerCase()}\${classes === '' ? '' : \`.\${classes}\`}\${text}\`);
                    for (const child of node.children) walk(child, level + 1);
                };
                walk(root, 0);
                return lines.join('\\n');
            }, depth));
            return;
        }
        if (command === 'style') {
            const properties = (third ?? 'font-family,font-size,line-height,color,background-color,padding,margin,border-radius,max-width').split(',');
            console.log(await page.$$eval(selector, (nodes, properties) => nodes.slice(0, 4).map(node => {
                const computed = getComputedStyle(node);
                const box = node.getBoundingClientRect();
                const values = properties.map(property => \`\${property}: \${computed.getPropertyValue(property)}\`).join('; ');
                return \`\${node.tagName.toLowerCase()} \${Math.round(box.width)}x\${Math.round(box.height)} at \${Math.round(box.left)},\${Math.round(box.top)} · \${values}\`;
            }).join('\\n'), properties));
            return;
        }
        if (command === 'shot') {
            const file = selector ?? 'page.png';
            await page.screenshot({ path: file, fullPage: third === 'full' });
            console.log(\`photograph: \${file}\`);
            return;
        }
        if (command === 'scroll') {
            await page.$eval(selector, node => node.scrollIntoView({ block: 'start' }));
            await new Promise(resolve => setTimeout(resolve, 800));
            console.log(\`scrolled to \${selector}\`);
            return;
        }
        if (command === 'hover' || command === 'press') {
            const watched = third ?? selector;
            const classesOf = () => page.$eval(watched, node => \`\${node.tagName.toLowerCase()}.\${[...node.classList].join('.')}\`).catch(() => 'nothing matches');
            const before = await classesOf();
            if (command === 'hover') await page.hover(selector);
            else await page.click(selector);
            await new Promise(resolve => setTimeout(resolve, 600));
            console.log(\`before: \${before}\\nafter:  \${await classesOf()}\`);
            return;
        }
        if (command === 'over') {
            const width = Number(selector ?? 390);
            await page.setViewport({ width, height: 844 });
            await new Promise(resolve => setTimeout(resolve, 800));
            console.log(await page.evaluate(() => \`the page is \${document.documentElement.scrollWidth} wide on a screen \${window.innerWidth} wide\`));
            console.log(await page.evaluate(() => [...document.querySelectorAll('body *')]
                .filter(node => node.getBoundingClientRect().right > window.innerWidth + 1)
                .slice(0, 20)
                .map(node => {
                    const box = node.getBoundingClientRect();
                    const classes = [...node.classList].slice(0, 6).join('.');
                    return \`\${node.tagName.toLowerCase()}\${classes === '' ? '' : \`.\${classes}\`} right \${Math.round(box.right)} of \${window.innerWidth} · "\${(node.textContent ?? '').trim().slice(0, 50)}"\`;
                }).join('\\n')));
            await page.setViewport({ width: 1400, height: 1000 });
            return;
        }
        throw new Error(\`no command \${command}\\n\${usage}\`);
    } finally {
        browser.disconnect();
    }
};

run().catch(error => {
    console.error(String(error.message ?? error));
    process.exit(1);
});
`})]}),"ThePage4"),V=r(()=>t(h,{children:[e(p,{}),e(c,{children:"[The Pane](/claudes-reference-manual/#the-pane)"}),t(n,{children:[e(l,{}),"The box beside the words where an artifact or a file given opens, as the application opens one."]}),t(o,{children:[e(i,{children:"What a pane is"}),t(n,{children:["When an artifact's card is pressed in a conversation, the artifact opens beside the words in a pane that takes half the window, the words narrowing beside it, as the application the conversations come from opens one. At the pane's head stand the artifact's title and its kind, a copy that puts the whole of it on the clipboard, and a close; in its body the version itself, a document as writing and code in its box; at its foot the version's number with an arrow to the one before and the one after, and a download that saves the version as a file. A file given to Claude opens the same way, from its chip at the head of my words, its text in the body and no foot, and an upload the export did not carry says so. The pressed card or chip reads pressed while the pane is open; pressing it again, or the close, shuts the pane. On a phone the pane covers the words. The design is ",e(a,{children:"[concept 2](/claudes-design/#a-conversation-as-the-application-shows-it)"}),"."]})]}),t(o,{children:[e(i,{children:"How a pane fits the library's patterns"}),e(n,{children:"A pane is a paragraph with content of its own, drawn as a box, as the reference manual's panel is. What it shows is a field of the conversation it stands in: the card or the chip that was pressed sets it, the pane reads it, and a press is a value set on the book, which draws once. An artifact's version is a chapter of the conversation, written at import as every message is, so the pane draws a chapter and never reads a document from a string. The chapter stands in the book's appendix, listed in a section of the table the side does not show, and is a page of the book like any other, hidden until the pane shows it, since the binder asks that every chapter be listed and the proof that every link on the page land; the days down the side are only days because the index lists no parenthetical entry. Its rules are its own, on its own element, and the conversation's theme only says where in its grid the pane stands."})]}),e(d,{identifier:"code",type:".tsx",children:`import { ElementType, MouseEvent, ReactNode } from 'react';
import { $, $Chemical, selection } from '@dna-platform/chemistry';
import { $Paragraph } from '@dna-platform/public';
import type { $Conversation } from '../../.manual/.book';
import { $Artifact, $Attachment, showingBook } from './2-the-artifact-and-the-attachment~code.tsx';

export class $Pane extends $Paragraph {
    style: ElementType = selection.div\`
        .pd-book &.pd-paragraph {
            grid-area: pane;
            display: none;
            flex-direction: column;
            min-width: 0;
            margin: 12px 12px 12px 0;
            border: 1px solid \${({ theme }) => theme.line};
            border-radius: 14px;
            background: \${({ theme }) => theme.paper};
            box-shadow: 0 1px 2px rgba(43, 54, 60, .04), 0 12px 32px rgba(43, 54, 60, .07);
            overflow: hidden;
        }
        .pd-book &.pd-paragraph:has(> .pd-pane-bar) { display: flex; }
        .pd-book & .pd-pane-bar { display: flex; align-items: center; gap: 10px; padding: 10px 10px 10px 18px; border-block-end: 1px solid \${({ theme }) => theme.line}; }
        .pd-book & .pd-pane-title { flex: 1; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-family: \${({ theme }) => theme.sans}; font-size: 14px; font-weight: 500; line-height: 1.4; color: \${({ theme }) => theme.ink}; }
        .pd-book & .pd-pane-kind { font-family: \${({ theme }) => theme.sans}; font-size: 12px; line-height: 1.4; color: \${({ theme }) => theme.soft}; }
        .pd-book & button { border: 0; background: none; padding: 2px 8px; border-radius: 6px; font-family: \${({ theme }) => theme.sans}; font-size: 11.5px; font-weight: 500; line-height: 1.4; color: \${({ theme }) => theme.soft}; cursor: pointer; }
        .pd-book & button:hover { background: rgba(11, 11, 11, .05); color: \${({ theme }) => theme.ink}; }
        .pd-book & button:disabled { opacity: .35; cursor: default; }
        .pd-book & .pd-pane-close { font-size: 18px; padding: 0 8px; }
        .pd-book & .pd-pane-body { flex: 1; min-height: 0; overflow: auto; }
        .pd-book & .pd-pane-body > pre { margin: 0; padding: 18px 22px; font-family: \${({ theme }) => theme.mono}; font-size: 13.5px; line-height: 1.65; color: #14181f; white-space: pre-wrap; overflow-wrap: anywhere; }
        .pd-book & .pd-pane-body .pd-chapter { display: block; padding: 24px 36px 60px; }
        .pd-book & .pd-pane-body .pd-chapter > .pd-title, .pd-book & .pd-pane-body .pd-chapter > a.pa-self-reference { display: none; }
        .pd-book & .pd-pane-body .pd-section > a.pa-self-reference:first-child { display: none; }
        .pd-book & .pd-pane-body .pd-chapter .pd-code-box { margin: 0; border: 0; border-radius: 0; background: transparent; }
        .pd-book & .pd-pane-foot { display: flex; align-items: center; gap: 6px; padding: 8px 10px 8px 18px; border-block-start: 1px solid \${({ theme }) => theme.line}; font-family: \${({ theme }) => theme.sans}; font-size: 12px; font-weight: 500; line-height: 1.4; color: \${({ theme }) => theme.soft}; }
        .pd-book & .pd-pane-version { display: flex; align-items: center; gap: 4px; }
        .pd-book & .pd-pane-version button { padding: 0 6px; font-size: 13px; }
        .pd-book & .pd-pane-download { margin-inline-start: auto; }
        @media (max-width: \${({ theme }) => theme.narrow}) {
            .pd-book &.pd-paragraph:has(> .pd-pane-bar) { position: fixed; inset: 52px 0 0 0; margin: 0; border-radius: 0; z-index: 2; }
        }
    \`;
    get shown(): $Artifact | $Attachment | undefined { return showingBook(this)?.$shown; }
    get artifacts(): $Artifact[] {
        return (this.book as $Conversation | undefined)?.messages.flatMap(message => message.text.find($Artifact)) ?? [];
    }

    $Pane(...chemicals: $Chemical[]) {
        this.$Writing(...chemicals);
        this.containers.replace(this, 'span', this.style);
    }

    neighbour(artifact: $Artifact, step: number): $Artifact | undefined {
        const number = Number(artifact.number) + step;
        return this.artifacts.find(other => other.$artifact === artifact.$artifact && Number(other.number) === number);
    }

    override write(): ReactNode {
        const shown = this.shown;
        if (shown === undefined) return undefined;
        const artifact = shown instanceof $Artifact ? shown : undefined;
        const attachment = shown instanceof $Attachment ? shown : undefined;
        const version = artifact?.version;
        const Version = version === undefined ? undefined : $(version);
        const earlier = artifact === undefined ? undefined : this.neighbour(artifact, -1);
        const later = artifact === undefined ? undefined : this.neighbour(artifact, 1);
        const text = attachment === undefined ? ''
            : attachment.names ? attachment.contents : 'The export does not carry this upload; the name is all it kept.';
        return (
            <>
                <div className="pd-pane-bar">
                    <span className="pd-pane-title">
                        {artifact?.name ?? attachment?.fileName}
                    </span>
                    <span className="pd-pane-kind">
                        {artifact?.kind ?? attachment?.extension.toLowerCase()}
                    </span>
                    <button
                        type="button"
                        className="pd-pane-copy"
                        onClick={event => this.copy(event)}
                    >
                        Copy
                    </button>
                    <button
                        type="button"
                        className="pd-pane-close"
                        aria-label="close"
                        onClick={() => this.close()}
                    >
                        ×
                    </button>
                </div>
                <div className="pd-pane-body">
                    {Version === undefined ? (
                        <pre>
                            {text}
                        </pre>
                    ) : (
                        <Version />
                    )}
                </div>
                {artifact === undefined ? undefined : (
                    <div className="pd-pane-foot">
                        <span className="pd-pane-version">
                            <button
                                type="button"
                                disabled={earlier === undefined}
                                onClick={() => this.show(earlier)}
                            >
                                ‹
                            </button>
                            <span>
                                {\`v\${artifact.number}\`}
                            </span>
                            <button
                                type="button"
                                disabled={later === undefined}
                                onClick={() => this.show(later)}
                            >
                                ›
                            </button>
                        </span>
                        <button
                            type="button"
                            className="pd-pane-download"
                            onClick={() => this.download(artifact)}
                        >
                            Download
                        </button>
                    </div>
                )}
            </>
        );
    }

    show(artifact: $Artifact | undefined): void {
        const book = showingBook(this);
        if (book !== undefined && artifact !== undefined) book.$shown = artifact;
    }

    close(): void {
        const book = showingBook(this);
        if (book !== undefined) book.$shown = undefined;
    }

    copy(event: MouseEvent<HTMLButtonElement>): void {
        const body = event.currentTarget.closest('.pd-pane')?.querySelector('.pd-pane-body');
        void navigator.clipboard?.writeText(body?.textContent ?? '');
    }

    download(artifact: $Artifact): void {
        const type = artifact.$type.replace(/^\\./u, '') || 'md';
        const file = new Blob([artifact.contents], { type: 'text/plain' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(file);
        link.download = \`\${artifact.name} v\${artifact.number}.\${type}\`;
        link.click();
        URL.revokeObjectURL(link.href);
    }

    protected override $Define(): void {
        super.$Define();
        this.classes.add(this, 'pd-pane');
    }
}

export const Pane = $($Pane);
`})]}),"ThePane5"),F=r(()=>t(h,{children:[e(p,{}),e(c,{children:"[The Imported Conversation](/claudes-reference-manual/#the-imported-conversation)"}),t(n,{children:[e(l,{}),"The form an import writes a conversation in, file by file, which every importer writes and the reference manuals' types read; held stable, so the manuals change how a conversation looks and behaves without a conversation being imported again."]}),t(o,{children:[e(i,{children:"Why the form is written down"}),e(n,{children:"A conversation with Claude is imported from the application's export into my library as a book, and from then on it is a book: I edit it, cut it into chapters by what they are about, annotate it, and bind it with everything else. The importer that writes it and the types that draw it are built by different hands, and the export of my second account, the older one, is read by a different parser again. So the form they meet at is said once, here, and it is the one thing about an imported conversation that does not move: a change to the look or the behaviour of a conversation is a change to the reference manuals and reaches every conversation at the next bind, and a change to this form is a change to the import, made with care and run again. The three figures at the end of this chapter are excerpts of imported chapters as they stand, cut after their first messages, not written for the purpose."})]}),t(o,{children:[e(i,{children:"The book"}),t(n,{children:["A conversation is a book in a folder of its own under the conversations book, named claude, two dashes, the slug of the conversation's title cut at sixty characters, two dashes and the first eight characters of the application's id. Its book file extends the Claude conversation of ",e(a,{children:"[The Project](/claudes-reference-manual/#the-project)"})," and declares nothing else. Its cover is the bookshelf cover of my manual with two volumes, the conversations book's cover and my story's, and a third when the conversation was held in a project, that project's cover, imported from its book's folder as the first two are and written after them, which the logo files the conversation under, a scheme of six colours, a window, the participants, each a reference to a person's book, the period from the first instant to the last, the messages shown and the messages in all, the title in the reference form with its key in the paren, the author as my librarian, the subject as the conversations book, the project as Claude's own annotation, the account right after it as its twin, leading to the account's mention in Dougs Claude, the origin after the account, the application's own id of the conversation, drawn nowhere, and an illustration inserted from the file beside the cover. Its synopsis is the application's own summary as one paragraph, kept for the catalogue and never shown on the page. Its table lists its one chapter, Conversation, under the month the conversation began, then every artifact version in an appendix section headed Artifacts, each entry parenthetical, and last the parenthetical row naming the book, the synopsis and the table."]})]}),t(o,{children:[e(i,{children:"The title"}),e(n,{children:`A book is keyed apart from its title, on my ruling that the library must have no chance collisions with a conversation's name: the key is claude, two dashes, the title, two dashes and the first eight characters of the application's id, and the title is what the page shows, so the cover's title form carries the title as its words and the key in its paren, every reference to the book carries the key in its paren and the title as its words, the entry chapter in the conversations book and in a project book is titled the same way, the book's address is the slug of the key, and the ledger names the book by its key. Two conversations whose ids share those eight characters stop the run, which has not happened, so nothing is numbered, and two books may show one title and differ by key alone. A book's title is the conversation's name made sensible, and a name the application gave can hold anything, so the import writes it to the catalogue's grammar before it writes anything else, through the binder's own sanitizing, one function in its language, promised there and written nowhere twice, on my ruling that text is normalized for ids exactly the same everywhere. The grammar reads a title through the notation, so what holds for the words of a reference holds for a title, and the sanitizing makes a title hold: it is put in its normal form, what cannot be seen is removed, every run of space is one space, and a pictograph the application put first is dropped; a slash is the separator between a book and its chapter, and the grammar's escape for it, a dot before the slash, does not carry through a title today, so a slash becomes the sign that looks like one, the division slash, "TON∕Cocoon", and a backslash its lookalike, on my ruling, since neither reaches a file name, the folder being the slug; a parenthesis closes the name slot a reference may carry and a bracket of either kind opens or ends a form, so a parenthesis becomes ❨ or ❩ and a square bracket ⁅ or ⁆, the lookalikes that read closest in the three faces; a brace stays and is written as its entity, as an ampersand, a less-than and a greater-than are, by the binder's own writer; a newline ends a form and is never written. The words shown before a key's paren are never dot-escaped, since the language reads only the paren as the name; the key is, a dot in it written doubled, and neither begins with a dot and a slash, which means within here. The title's slug is the book's address, and the slug keeps every alphabet, puts the text in its normal form, drops what cannot be seen and keeps a combining mark, reads an ampersand, a plus, an at-sign, a percent sign, an equals and a not-equals as words and a sharp after a letter as the word sharp, treats every apostrophe alike, and makes a dash of any other sign, so a title must slug to something, and two keys that slug alike are one address, which the catalogue refuses. A title, a mention and a heading wear as their id the fragment of their address, which the catalogue makes from the key, so an entry titled with a key wears the key's slug, and a cover's or a synopsis's title wears the slug of its words. The same spelling of the title and the key is written wherever either stands: the cover's title form, the entry's title and its reference, and every table that lists it.`}),e(n,{children:"A conversation the application gave no name takes its title from its first message, the first sentence of it cut to a handful of words and made sensible as any title is, which is how the application names a chat itself; a first message with no words in it, a picture alone, leaves the conversation titled by the day it began, Untitled followed by the date; and the id in the key tells either apart from its like. The ledger keeps the application's own name, empty or not, beside the key the import gave, so a given name and a made one are told apart."})]}),t(o,{children:[e(i,{children:"The notation in the text"}),e(n,{children:"The catalogue reads a chapter's file for the library's notation, and it reads exactly two kinds of run: the text between tags, and a string, which is a quoted literal or a template with nothing substituted; a comment, a tag's name and an import's path are never read. A conversation's words may carry the notation's own brackets, two in a row around a term as a logic does, and read raw they form a title, a mention or a reference, refused when the form is malformed and resolved silently when it is not. So in prose, headings, items, words and captions a bracket of either kind is written as its numeric entity, which the page shows as the bracket and the scanner never matches, since only a matched form is read for entities, and the writing of it is the binder's own, the inverse of its reader, which the reference transform uses to write a form's words back into prose and the importer uses as it is, never an escape of its own; and a listing in a code box, which cannot carry an entity, is written as a template with a substitution in it whenever it holds a bracket, since a template with a substitution is not read, and its text on the page is the listing exactly."})]}),t(o,{children:[e(i,{children:"The conversation chapter"}),t(n,{children:["The whole conversation is one chapter, numbered 1 and titled Conversation, with the day it began said by Dated as a date; the chapters a conversation is cut into come with comprehension, by hand, and the day-based split that stood here until 21 October 2026 is struck on my word. The chapter holds one Message per message, said at its instant, which with its speaker is the message's whole address, since a question and its answer may share an instant to the microsecond in the older account's export, opening with its Origin, the application's own id of the message, drawn nowhere, and then its Speaker as a reference to the person's book, mine or Claude's. What was said is the library's own writing, paragraphs, headings, lists and lines nested as written, tables, bold, emphasis, verbatim and quoted words, inline math and displayed equations, a link as a word carrying a reference; a heading is written without the bold marks the application put around its words, since a heading is set bold already and the library reads a heading apart at its colon, which left a bare colon standing as a heading with no words and no id, while emphasis and code inside a heading are kept. A block of code is ",e(a,{children:"[a code box](/dougs-reference-manual/#the-code-box)"})," with its listing as a template literal of its lines, named for its language, srt where the notation's operators stand and nothing where the application named none. A tool Claude used is ",e(a,{children:"[an action](/claudes-reference-manual/#the-action-and-the-result)"}),", its result left out. A file Claude made is ",e(a,{children:"[an artifact](/claudes-reference-manual/#the-artifact-and-the-attachment)"}),", its sentence as the caption, its file beside the chapter, the export's id of the artifact and the place of the version chapter it opens, the uncut slug of the version's title; a file given to him is an attachment with its file beside the chapter, or the sentence alone when the export carries no content. A file beside a chapter is named for the chapter and the file, chapter, tilde, name and type, the type the application gave the file and never one chosen for it, with one exception: a document the export holds only as the text extracted from it, a pdf or a spreadsheet, is written as a text file, since a document's type on a file of text would misstate it. A file stands beside a chapter only because the chapter inserts it. The message says of itself that its headings are opaque, by ",e(a,{children:"[The Address](/dougs-reference-manual/#the-address)"}),", so a heading inside an answer is not a place."]})]}),t(o,{children:[e(i,{children:"The version"}),t(n,{children:["Every version of every artifact is a chapter of the book's appendix, numbered with the appendix mark and named for the artifact and its version, marked Version and titled with the artifact's name and its version number. A document's version is one section said to be opaque, headed with the name and the number so thirteen versions wear thirteen ids, holding the document as writing; a program's version is a code box. The side hides these chapters and the card opens them in ",e(a,{children:"[the pane](/claudes-reference-manual/#the-pane)"}),"."]})]}),t(o,{children:[e(i,{children:"The entry and the ledger"}),t(n,{children:["Beside the folder, in ",e(a,{children:"[Our Conversations](/our-conversations/)"}),", the import writes one entry chapter per conversation, numbered in the order imported and named by the slug of the key: its part the month, its date the conversation's last day, the conversation's cover as a volume, the title with the key in its paren, a caption counting the exchanges and leading to the book, and the synopsis inserted from the book's own. The conversations book's table lists every entry under the project its cover names, each project a section headed with its name, the sections ordered by their latest conversation and the rows within newest first, the conversations under no project last in a section headed No project, each row with an arrow leading into the book; the heading is the part's place, so an address naming it opens the register on that part. Until 2026-10-19 the table listed the entries under their months; the register's own table was rewritten by hand that day, and the importer writes this form. The import's memory stands nowhere beside the entry: it is the origins on the writing, ",e(a,{children:"[The Origin](/claudes-reference-manual/#the-origin)"}),", the conversation's on its cover and each message's on the message, and one ledger per import configuration, a dataset regardless of the date it was exported, one file for each account beside its chapter of ",e(a,{children:"[Dougs Importer](/dougs-importer/)"}),", updated in place by every run, keyed by the conversation's id and holding neither name nor folder, which is how a later run knows a conversation is already in, has grown, or was edited by hand, and finds a book by the origin on its cover however it was renamed, moved or cut, as ",e(a,{children:"[The Ledger](/dougs-importer/#the-ledger)"})," says."]})]}),t(o,{children:[e(i,{children:"What is held stable, and what may move"}),t(n,{children:["Held stable: the folder and its five files, the file names of the chapter, of versions and of resources, the tags and their attributes as the figures show them, the reference forms for a person, a day and a version, the origins, the entry and the ledger. The binder holds some of it itself and refuses a bind that breaks it: every chapter listed in its table, every link landing, every id worn once, no file beside a chapter that nothing inserts, a title with no parenthesis or bracket in it, a file stem ending in no dash. The rest is the importer's promise, in ",e(a,{children:"[The Writing](/dougs-importer/#the-writing)"}),". Free to move without an import: everything a reader sees, which is the manuals', the message's bubble and its hour, the code box's bar, the card and the chip, the pane and its column, the tally, the day count, the head that scrolls, every colour and every measure."]})]}),t(o,{children:[e(i,{children:"What the export holds that the form does not carry"}),e(n,{children:"The export carries things the form leaves out, each counted by the import and written nowhere: Claude's thinking and a tool's result, left out on my ruling; a prompt the application injected; a memory Claude read or wrote; a place card on a map; the link from a conversation to an artifact published on the web, whose published copy the export keeps in a category of its own; and a conversation captured live from the application, which holds an artifact's content as the export does not, counts its turns in its own way, and is compared with the export by when each last changed and never by count. Each is a form owed if it is ever wanted, said here first and then written, never written around."})]}),t(o,{children:[e(i,{children:"The older account"}),t(n,{children:["My older account's export is in the application's earlier shape, one archive with its own schema, and its import is being generalized by the other team to read it. It writes this same form and nothing else: a conversation from either account is one kind of book, told apart by the account its cover says, ",e(a,{children:"[The Account](/claudes-reference-manual/#the-account)"}),", the line its page draws for it, and its line in the ledger."]})]}),e(d,{identifier:"conversation",type:".tsx",children:`import { Bold, Chapter, Date, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action, Attachment, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[21 March 2025](2025-03-21)</Date>
        </Dated>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2025-03-21T17:51:17.196966Z"
        >
            <Origin>30b7e596-43c1-43ae-95cf-525954992cc2</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                In three sentences, rate this on a scale of accuracy, with a mind for scientific accuracy, published fact,
                and free from fairness bias to multiple inconsistent perspectives:
            </Paragraph>
            <Attachment
                identifier="paste"
                type=".txt"
            >
                Attached “paste.txt”
            </Attachment>
            <Attachment>Uploaded “paste.txt”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2025-03-21T17:51:20.941507Z"
        >
            <Origin>a19143fd-deef-476f-b227-8a68602990d4</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Based on the provided text about quantum computing and Shor's algorithm:</Paragraph>
            <Paragraph>
                The claims about the progress of Shor's algorithm implementation (15 in 2001, 21 in 2012, 35 in 2022) are
                accurate and align with published research. The concerns about noise scaling with qubit count represent a
                legitimate scientific challenge acknowledged by researchers in the field, though they're presented with
                stronger certainty than the scientific consensus warrants. The characterization of quantum computing as
                "vaporware in its purest form" is an opinion that overstates the case against quantum computing's
                feasibility, as significant experimental progress continues despite acknowledged technical hurdles.
            </Paragraph>
        </Message>
        <Message
            at="2025-03-21T17:53:25.714188Z"
        >
            <Origin>5a889ae7-0062-48c4-b23a-2c240c5ff367</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Prove it. What constitutes significant? I recall Google's claims to quantum supremacy were, by scott
                aaronson acknowledged as a very tailored algorithm that skirts the line between usability. Am I right that
                no fault tolerant quit has come to exist? How would you feel about a omputer with 3300 transistors, none of
                which were fault tolerant, and an exponential scaling pronlem. I am 42. What was quantum computing like back
                when I was 5? Plot the rate of progress. Show me I am wrong
            </Paragraph>
        </Message>
        <Message
            at="2025-03-21T17:54:04.112399Z"
        >
            <Origin>545a2ea1-7a09-4a69-8747-bc638cd61a92</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Let me analyze this systematically by using published research to evaluate quantum computing progress.
            </Paragraph>
            <Action>Ran code</Action>
            <Paragraph>Based on the analysis, I'll address your points directly:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Factorization Progress
                    </Word>: You are correct about the numbers factored (15 in 2001, 21 in 2012, 35 in 2022). This shows
                    extremely slow progress in practical implementation of Shor's algorithm, despite theoretical promise.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Fault Tolerance
                    </Word>: You are correct that no fully fault-tolerant logical qubit has been demonstrated. While Google
                    demonstrated error correction that showed logical error rates lower than physical error rates in 2021,
                    we're still far from the robust fault-tolerance needed for practical quantum computing.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Google's Quantum Supremacy
                    </Word>: You're right about Scott Aaronson's assessment. The 2019 claim involved a highly specialized
                    problem designed specifically to showcase quantum advantage. By 2022, researchers showed the calculation
                    could be done on classical computers in days rather than the claimed 10,000 years.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Qubit Growth
                    </Word>: While raw qubit numbers have increased (from 2 in 1998 to 1121 in 2023), these are noisy
                    physical qubits, not error-corrected logical qubits. The negative value in the doubling calculation
                    shows inconsistent growth.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Error Correction Challenge
                    </Word>: You're correct about the scaling problem - current error correction codes require 10-1000
                    physical qubits per logical qubit. This means those 3300 logical qubits needed for RSA would require
                    millions of physical qubits with current techniques.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        When You Were 5 (circa 1988)
                    </Word>: Quantum computing was purely theoretical. The first working 2-qubit system wasn't demonstrated
                    until 1998, and practical implementations have fallen far short of theoretical promises.
                </Line>
            </Paragraph>
            <Paragraph>
                Your skepticism about near-term practical quantum computing that could threaten encryption is well-founded.
                While I wouldn't go as far as calling it "vaporware in its purest form," the gap between theoretical promise
                and practical achievement remains vast, and the challenges of fault tolerance and scalability are
                fundamental.
            </Paragraph>
        </Message>
    </Chapter>
);
`}),e(d,{identifier:"notation",type:".tsx",children:`import { Bold, Chapter, Date, Emphasis, Paragraph, Title, Word } from '@dna-platform/public';
import { CodeBox, Dated, Message, Speaker, Verbatim } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[6 June 2026](2026-06-06)</Date>
        </Dated>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-06-06T12:29:42.862941Z"
        >
            <Origin>019e9ce9-51c1-7c81-894d-4b2602ae167a</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Take a look in the recent project documents. The evolution one. We are doing pretty well. Learn the syntax
                too. You have to understand the definitions in the syntax to lower it to first order logic so you can reason
                formally
            </Paragraph>
            <Paragraph>I want to see if we can divide ip a big insight into axioms with semantic meaning</Paragraph>
        </Message>
        <Message
            at="2026-06-06T12:32:17.481797Z"
        >
            <Origin>019e9ce9-51c6-72b4-aa2b-f15a80612e62</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Read /mnt/project/The_Evolution_of_SRT</Action>
            <Paragraph>Let me read the middle phases I'm missing.</Paragraph>
            <Action>Read /mnt/project/The_Evolution_of_SRT</Action>
            <Paragraph>
                I have the shape of it. Let me read the formal foundation and the FOL spec so I'm reasoning from the actual
                transpilation rules, not from intuition.
            </Paragraph>
            <Action>Read /mnt/project/Doug__Semantic_Reference_Theory__A_Formal_Foundation</Action>
            <Action>Read /mnt/project/Seren__First-Order_Logic__Complete_Formal_Specification</Action>
            <Paragraph>
                Read the Evolution doc end to end, plus the Formal Foundation and the FOL spec for the lowering target. We
                <Word>
                    <Emphasis />
                    are
                </Word> doing well — Phases I–IV are load-bearing and the current-edge section is honest about exactly where
                the soft spots are. Let me lock the syntax→FOL dictionary first, since that's the prerequisite you named,
                then show where lowering actually bites.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The lowering dictionary
                </Word> (everything bottoms out in one ternary <Word>
                    <Verbatim />
                    R
                </Word>):
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {\`\${''}x =t> y        R(x,y,t)              the sole primitive
x !=t> y       ¬R(x,y,t)
x == y         x = y                 (== is FOL-native; see the eq seam below)
x => y         ∃t R(x,y,t)           relatedness; ≡ R(x,y,r) once Universality fixes r
s -> t         ∀u∀v(R(u,v,s) → R(u,v,t))     RELATION reading
x -> t         R(x,x,t)                       SELF-RELATION reading  ← the two collide
s !-> t        ∃u∃v(R(u,v,s) ∧ ¬R(u,v,t))
(x,y)          eliminated by expansion to the Specification witness — never a function symbol
=|> & | || <iff> !   → ∧ XOR ∨ ↔ ¬
E[x]:P  →  ∃x P     E(x:Q):P  →  ∃x(Q ∧ P)     free vars universally closed\`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    One that lowers clean
                </Word> — Specification, using only the relation reading:
            </Paragraph>
            <CodeBox>
                {\`∀x∀y( (∃u R(x,y,u)) →
        ∃s( R(x,y,s) ∧ ∀t( R(x,y,t) → ∀p∀q(R(p,q,s)→R(p,q,t)) ) ) )\`}
            </CodeBox>
            <Paragraph>
                And the antisymmetry theorem lowers to coextension-implies-identity — which is <Word>
                    <Emphasis />
                    not
                </Word> logically valid on its own. You need Directionality to close it. So formally, Directionality <Word>
                    <Bold />
                    is
                </Word> the extensionality axiom for relationships. That's the same fact Phase III recovered by correcting
                the "non-extensional" claim; the lowering makes it forced rather than observed.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    One that resists
                </Word> — Qualification. Watch the failure:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {\`t -> (x,y) =|> ( x' !-> x | y' !-> y ) =|> x' !=t> y'\`}
            </CodeBox>
            <Paragraph>
                If you lower <Word>
                    <Verbatim />
                    t -&gt; (x,y)
                </Word> by the <Word>
                    <Emphasis />
                    relation
                </Word> reading, it says t's extension ⊆ the bottom's — t relates almost nothing. That's clearly not the
                intent ("t has signature (x:X, y:Y)"). So Qualification cannot be lowered at all under either current
                reading of <Word>
                    <Verbatim />
                    -&gt;
                </Word>. The transpilation <Word>
                    <Bold />
                    proves
                </Word> the role-indexed arrow is owed — it's not a stylistic gap, it's a place where the FOL image is
                undefined. Same forcing case the doc names with <Word>
                    <Verbatim />
                    r -&gt; ref
                </Word>.
            </Paragraph>
            <Paragraph>
                So before any "big insight" gets factored: which one do you mean? My read is the most insight-shaped
                factorable block is <Word>
                    <Bold />
                    Phase VI's nine structure-preservation conditions
                </Word> — "faithful specialization = the map <Word>
                    <Verbatim />
                    (x,t,y)↦(x',t',y')
                </Word> preserves the whole inheritance structure." Right now that's one undifferentiated insight; the
                current-edge section already asks whether the nine are independent and whether pairwise preservation is
                complete. That's exactly "divide an insight into axioms each carrying its own semantic meaning," and three
                of the nine are suspect under the orphaned-edge case.
            </Paragraph>
            <Paragraph>Is Phase VI the insight you want to factor — or do you have a different one in hand?</Paragraph>
        </Message>
    </Chapter>
);
`}),e(d,{identifier:"version",type:".tsx",children:`import { Bold, Chapter, Heading, Paragraph, Section, Title, Word } from '@dna-platform/public';
import { Opaque } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Quantum Computing Reality Check v1 ]]</Title>
        <Section>
            <Opaque />
            <Heading>Quantum Computing Reality Check at version 1</Heading>
            <Paragraph>
                📊 <Word>
                    <Bold />
                    QUANTUM COMPUTING REALITY CHECK
                </Word> 📊
            </Paragraph>
            <Paragraph>The truth about quantum computing breaking encryption might surprise you...</Paragraph>
            <Paragraph>
                🧮 Quantum Progress Report: • 2001: Factored 15 • 2012: Factored 21 • 2022: Factored 21 → 35 • Needed to
                break RSA: 3,072+ bits
            </Paragraph>
            <Paragraph>
                📈 The Math Doesn't Lie: At current rates of progress, quantum computers won't break today's encryption
                until approximately THE YEAR 54,080 C.E.
            </Paragraph>
        </Section>
    </Chapter>
);
`})]}),"TheImportedConversation6"),_=r(()=>t(h,{children:[e(p,{}),e(c,{children:"[The Account](/claudes-reference-manual/#the-account)"}),t(n,{children:[e(l,{}),"The account a conversation with Claude was held under, said on the conversation's cover as the project's twin, and the line the conversation draws for it beside the project line."]}),t(o,{children:[e(i,{children:"Two accounts, one kind of book"}),t(n,{children:["I have talked with Claude under two accounts, the one I use now and an older one, and every conversation of either is imported as the same kind of book. Which account held it is a fact of Claude's, as the project is, so it is said here and not in the library's manual: an account is an annotation of a conversation's cover, the twin of ",e(a,{children:"[the project](/claudes-reference-manual/#the-project)"}),", holding the account's name and standing a reference to it, written right after the project line. It leads to a mention and never to a chapter, on my ruling that the accounts must be free to move: the two, ",e(a,{children:"[DNA](/dougs-claude/#dna)"})," and ",e(a,{children:"[DNA Legacy](/dougs-claude/#dna-legacy)"}),", are mentioned in ",e(a,{children:"[The Accounts](/dougs-claude/#the-accounts)"}),", and a mention makes its id wherever it stands, so the cover's reference holds wherever the sections go."]}),e(n,{children:"A conversation with Claude draws an account line after its project line whenever its cover says one, a word said to be a label and the account's name leading to the mention, so a reader of any conversation sees which account it was held under without opening its record. The record says it too, in its own field, which is how the import tells the two apart; a record written before the field existed reads as the account I use now."})]}),e(d,{identifier:"code",type:".tsx",children:`import { ReactNode } from 'react';
import { $, $check } from '@dna-platform/chemistry';
import {
    $Annotation, $Chapter, $Cover, $Paragraph, $Reference, $Writing, AnnotationSpecification, Reference as reference,
    Word as word, binder, html, specify,
} from '@dna-platform/public';
import { Label as label } from '../../.manual/.book';

export class $Account extends $Annotation {
    specification = new AccountSpecification();
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

export class AccountSpecification extends AnnotationSpecification {
    @specify('an account is said of a cover')
    $saidOfACover(writing: $Writing): void {
        $check(writing instanceof $Chapter && writing.is($Cover), 'an account is said of a cover, and this is not one');
    }
}

export class $AccountLine extends $Paragraph {
    $cover?: $Chapter;
    get cover(): $Chapter | undefined { return this.$cover ?? this.book?.cover; }
    get account(): $Account | undefined { return this.cover?.annotations.expressed($Account); }

    override write(): ReactNode {
        const account = this.account!;
        const Word = $(word);
        const Said = $(label);
        const Reference = $(reference);
        return (
            <>
                <Word>
                    <Said />
                    account
                </Word>
                <Word>
                    <Reference>{account.means!.identifier}</Reference>
                    {account.name}
                </Word>
            </>
        );
    }

    protected override $Define(): void {
        super.$Define();
        this.classes.add(this, 'pd-account-line');
    }
}

export const Account = $($Account);
export const AccountLine = $($AccountLine);
`})]}),"TheAccount7"),U=r(()=>t(h,{children:[e(p,{}),e(c,{children:"[The Origin](/claudes-reference-manual/#the-origin)"}),t(n,{children:[e(l,{}),"The application's own id of a conversation and of each of its messages, kept on the writing as an annotation, in the object model and drawn nowhere, so an import finds a book again whatever it has been renamed to."]}),t(o,{children:[e(i,{children:"The id on the writing"}),t(n,{children:["The application gives every conversation and every message an id of its own, and the import used to keep those ids in a record beside each entry, with the book's name beside them. A name is mine to change, and I will rename conversations, move them and cut them into chapters, so a memory keyed by name loses the book it remembers. My ruling: the import's memory belongs on the writing itself, as annotations, in the object model, and it need not be surfaced. So an origin is an annotation holding the id, said of ",e(a,{children:"[the conversation](/dougs-reference-manual/#the-conversation)"}),"'s cover after ",e(a,{children:"[the account](/claudes-reference-manual/#the-account)"}),", and said of every message as its first child before the speaker. It draws nothing on the page and answers its id to code as its uuid: the conversation with Claude answers its origin from its cover, and a message's is read off the message's annotations."]}),t(n,{children:["With the ids on the writing, an import keeps one ledger per import configuration, a dataset regardless of the date it was exported, updated in place by every run, keyed by the conversation's id and holding neither name nor folder, and finds a book by the origin on its cover, so renaming, moving or cutting a book never loses it; the form is in ",e(a,{children:"[The Imported Conversation](/claudes-reference-manual/#the-imported-conversation)"}),"and the ledger in ",e(a,{children:"[The Ledger](/dougs-importer/#the-ledger)"}),"."]})]}),e(d,{identifier:"code",type:".tsx",children:`import { ReactNode } from 'react';
import { $, $check } from '@dna-platform/chemistry';
import { $Annotation, $Chapter, $Cover, $Writing, AnnotationSpecification, html, specify } from '@dna-platform/public';
import { $Message } from '../../.manual/.book';

export class $Origin extends $Annotation {
    specification = new OriginSpecification();
    get uuid(): string { return html.copy(this.text).trim(); }

    override write(): ReactNode { return null; }
}

export class OriginSpecification extends AnnotationSpecification {
    @specify('an origin is said of a cover or a message')
    $saidOfACoverOrAMessage(writing: $Writing): void {
        $check((writing instanceof $Chapter && writing.is($Cover)) || writing instanceof $Message, 'an origin is said of a cover or a message, and this is neither');
    }
}

export const Origin = $($Origin);
`})]}),"TheOrigin8"),H=k(g),te=r(()=>t(H,{children:[I(),M(),N(),B(),q(),z(),E(),V(),F(),_(),U()]}),"book");export{te as book};
