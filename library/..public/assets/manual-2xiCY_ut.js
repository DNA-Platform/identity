var w=Object.defineProperty;var n=(u,b)=>w(u,"name",{value:b,configurable:!0});import{j as e,C as d,b as x,T as p,P as g,c as o,H as s,a as t,d as a,W as l,M as i,A as r,$}from"./index-ChXwf2-k.js";import{r as k,I as y,S as c,s as h}from"./.cover-DgR04WBE.js";import"./3-the-project~code-CBlR0R3A.js";import{C as v,S as j}from"./.synopsis-B3Tc0mgV.js";import"./.cover-DDGT_z8r.js";const f=class f extends k{};n(f,"$ClaudesReferenceManual");let m=f;const C=n(()=>e.jsxs(d,{children:[e.jsx(x,{}),e.jsx(y,{}),e.jsxs(p,{children:[e.jsx(g,{}),"[Table of Contents](/claudes-reference-manual/#table-of-contents)"]}),e.jsxs(o,{children:[e.jsx(s,{children:"What a message of Claude's holds"}),e.jsx(t,{children:e.jsx(a,{children:"[The Action and the Result](/claudes-reference-manual/#the-action-and-the-result)"})}),e.jsx(t,{children:e.jsx(a,{children:"[The Artifact and the Attachment](/claudes-reference-manual/#the-artifact-and-the-attachment)"})}),e.jsx(t,{children:e.jsx(a,{children:"[The Project](/claudes-reference-manual/#the-project)"})}),e.jsx(t,{children:e.jsx(a,{children:"[The Page](/claudes-reference-manual/#the-page)"})}),e.jsx(t,{children:e.jsx(a,{children:"[The Pane](/claudes-reference-manual/#the-pane)"})}),e.jsxs(t,{children:[e.jsx(g,{}),e.jsx(l,{children:e.jsx(a,{children:"[Claudes Reference Manual](/claudes-reference-manual/)"})}),e.jsx(l,{children:e.jsx(a,{children:"[Synopsis](/claudes-reference-manual/#synopsis)"})}),e.jsx(l,{children:e.jsx(a,{children:"[Table of Contents](/claudes-reference-manual/#table-of-contents)"})})]})]})]}),"Table"),A=n(()=>e.jsxs(d,{children:[e.jsx(c,{}),e.jsx(p,{children:"[The Action and the Result](/claudes-reference-manual/#the-action-and-the-result)"}),e.jsxs(t,{children:[e.jsx(h,{}),"What Claude does in a message that is not said, a search, a fetch, a run of code, a read of a file, as a writing of its own; and the result, what came back, a writing the import counts and leaves out."]}),e.jsxs(o,{children:[e.jsx(s,{children:"Done, and what came back"}),e.jsxs(t,{children:["A message of Claude's holds more than prose. Where he searched the web, fetched a page, ran code or read a file, the message holds an action, one line saying what was done in plain words. What came back is a result, and the import does not write it: a fetched page or a run's output is the machine's and not the conversation's, it was what filled a page when it was kept, and the export still holds it, so the import counts the results it leaves out and a result that matters is kept by hand. Neither is a paragraph of what was said, so neither is a paragraph wearing a mark: each is a writing of its own, a paragraph in shape and not in meaning, which the page can fold, show as the application does, or count. They are Claude's, so they stand in this manual and not in ",e.jsx(i,{children:"[the library's](/dougs-reference-manual/#the-conversation)"}),", where a message is said to be a speaker, a time and what was said."]})]}),e.jsx(r,{identifier:"code",type:".tsx",children:`import { $ } from '@dna-platform/chemistry';
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
`})]}),"TheActionAndTheResult1"),T=n(()=>e.jsxs(d,{children:[e.jsx(c,{}),e.jsx(p,{children:"[The Artifact and the Attachment](/claudes-reference-manual/#the-artifact-and-the-attachment)"}),e.jsxs(t,{children:[e.jsx(h,{}),"A file Claude made in a message and a file given to him in one, each a figure where it entered the conversation: a card for the artifact and a chip for the file given, each opening in the pane."]}),e.jsxs(o,{children:[e.jsx(s,{children:"Made, and given"}),e.jsxs(t,{children:["An artifact is a file Claude made as he answered, a document, a page, a program, and went on changing as the conversation went on. The day's chapter holds an artifact where each version was made: a figure, as a code listing is, that names the version's file beside the chapter and is drawn as the application draws one, a card with a glyph for a document or for code, the artifact's title and a line to open it; every version's file stands beside the chapter and the last under its own name. Each version is also a chapter of the conversation, said to be a version, its document converted to writing at import under an opaque section and its code set in a code box; the card's caption refers to that chapter, and pressing the card opens it in ",e.jsx(i,{children:"[the pane](/claudes-reference-manual/#the-pane)"}),", where the versions can be walked. An attachment is a file given to Claude in a message, pasted or uploaded: a figure the same way, drawn as a chip at the head of the words it was given with, naming the file when the export carried its text, which it does for what was pasted and not for what was uploaded, and opening in the same pane. Both are writings of their own and not paragraphs of what was said, as ",e.jsx(i,{children:"[an action](/claudes-reference-manual/#the-action-and-the-result)"})," is; each is a figure, since what it shows is the file."]})]}),e.jsx(r,{identifier:"code",type:".tsx",children:`import { ReactNode } from 'react';
import { $, $check, $Chemical } from '@dna-platform/chemistry';
import { $Annotation, $Chapter, $Code, $Writing, AnnotationSpecification, html, specify } from '@dna-platform/public';
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
    $place: string | undefined = undefined;
    get version(): $Chapter | undefined {
        return this.$place === undefined ? undefined : (this.book as $LibraryBook).chapterAt(this.$place);
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
`})]}),"TheArtifactAndTheAttachment2"),P=n(()=>e.jsxs(d,{children:[e.jsx(c,{}),e.jsx(p,{children:"[The Project](/claudes-reference-manual/#the-project)"}),e.jsxs(t,{children:[e.jsx(h,{}),"The project a conversation with Claude was held in, said on the conversation's cover as a fact of Claude's, and the conversation with Claude that draws it."]}),e.jsxs(o,{children:[e.jsx(s,{children:"Held in a project"}),e.jsx(t,{children:"In the application a conversation is held in a project, or in none, and the project holds the files Claude reads while it goes. That is a fact about Claude's conversations and not about conversations in general, so it is said here and not in the library's manual: a project is an annotation of a conversation's cover, as the author and the subject are, holding the project book's name and standing a reference to it, and the cover writes it with the form that says the project catalogues the conversation besides, so the project book's table answers it. It is not a topic. A topic is what a conversation, or a part of one, is about, and the same conversation may turn to several; the project is where it was held, one at most, whatever it turned to."}),e.jsxs(t,{children:["A conversation with Claude is the library's conversation specialized here: it answers its project, and draws a project line beside its byline, a word said to be a label and the project's name leading to its book, the way back from a conversation to its project. The project book itself is ",e.jsx(i,{children:"[a project manual](/dougs-reference-manual/#the-project-manual)"}),", the files as spreads and the conversations as entries."]})]}),e.jsx(r,{identifier:"code",type:".tsx",children:`import { ReactNode } from 'react';
import { $, $check } from '@dna-platform/chemistry';
import {
    $Annotation, $Chapter, $Cover, $Paragraph, $Reference, $Writing, AnnotationSpecification, Reference as reference,
    Word as word, binder, html, specify,
} from '@dna-platform/public';
import { Theme } from '@dna-platform/public';
import { $Conversation, Label as label, Light as light, Tone as tone } from '../../.manual/.book';
import { ApplicationForm } from './4-the-page~theme.tsx';
import { $Artifact, $Attachment, $Version } from './2-the-artifact-and-the-attachment~code.tsx';
import { Pane as pane } from './5-the-pane~code.tsx';

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
    override get pages(): $Chapter[] { return super.pages.filter(chapter => !chapter.is($Version)); }

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
$(ClaudeConversation, Theme)(ApplicationForm);
$(ClaudeConversation, tone)(light);
`})]}),"TheProject3"),R=n(()=>e.jsxs(d,{children:[e.jsx(c,{}),e.jsx(p,{children:"[The Page](/claudes-reference-manual/#the-page)"}),e.jsxs(t,{children:[e.jsx(h,{}),"How a conversation with Claude is shown on its page: the form the application itself gives a conversation, read off the application, and the browser this library keeps open to read it."]}),e.jsxs(o,{children:[e.jsx(s,{children:"The form the application gives"}),e.jsxs(t,{children:["A conversation is shown as the application shows it, since that is the form its reader knows, and annotations and flourishes come on that base. The form is read off the application's own page in a browser, element by element and style by style, and written as the theme of ",e.jsx(i,{children:"[a conversation with Claude](/claudes-reference-manual/#the-project)"}),", so that the message, the speaker, the time, the action, the artifact and the attachment are dressed as the application dresses them."]})]}),e.jsxs(o,{children:[e.jsx(s,{children:"The browser this library keeps open"}),e.jsxs(t,{children:["The application's pages need my sign-in, so the library opens a browser of its own, with a profile that keeps the sign-in once I have logged in there, and leaves it open with a port a later command attaches to: one command opens it on the application and keeps it open, and the others list its tabs, open a page, say what an element says, print its tree or its computed styles, photograph it, scroll to an element, hover or press one and say what changed, or name what runs past the right edge at a width. The file beside this chapter is that tool, run from the repository's root. It is an essential tool of developing this library and is opened at the start of a session, in the background, with ",e.jsx(i,{children:"[the command](/dougs-reference-manual/#developing-a-library)"})," said there: node .me/.claude/.manual/4-the-page~browser.mjs open; it stays open as a resource until I close it, and I log in there once. It is a browser and not an interface for calls: it keeps one tab per place, the application, the workbench, the built site, a file, and goes to an address in the tab it has rather than opening another, and what it leaves open is closed with its close command."]})]}),e.jsx(r,{identifier:"theme",type:".tsx",children:`import { css, RuleSet } from 'styled-components';
import { $ } from '@dna-platform/chemistry';
import { $Typeset } from '../../.manual/.book';

// Concept 2 of Claudes Design, carried in as it was decided: the chat text as the application has it, white across every
// surface with a tint only in the last pixels before an edge, and the pane's column when one is open.
export class $ApplicationForm extends $Typeset {
    sans = "'Inter', system-ui, sans-serif";
    mono = "ui-monospace, 'Cascadia Code', Consolas, monospace";
    keyword = '#1f5fbf';
    string = '#9a3b1e';
    type = '#116b4a';
    comment = '#7a8491';

    protected override parts(): RuleSet[] {
        return [
            ...super.parts(), this.surfaces(), this.top(), this.days(), this.cameTo(), this.exchanges(), this.said(),
            this.cards(), this.paneColumn(), this.phone(),
        ];
    }

    protected surfaces(): RuleSet {
        return css\`
            .pd-book .pd-library { background: linear-gradient(180deg, #ffffff 0%, #ffffff 84%, #fbfcfe 100%); }
            .pd-book .pd-me { background: linear-gradient(180deg, #ffffff 0%, #ffffff 84%, #fbfcfe 100%); }
            .pd-book .pd-holds { background: linear-gradient(90deg, #ffffff 0%, #ffffff 88%, #fbfcfe 100%); }
            .pd-book .pd-head { background: #ffffff; box-shadow: 0 8px 22px rgba(43, 54, 60, .025); }
            .pd-book .pd-pages { background: #ffffff; }
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

    protected days(): RuleSet {
        return css\`
            .pd-book .pd-holds .pd-chapter { display: flex; flex-direction: column; }
            .pd-book .pd-holds .pd-section.pa-appendix { display: none; }
            .pd-book .pd-holds .pd-section > .pd-heading { margin: 0 0 4px 18px; font-family: \${({ theme }) => theme.sans}; font-size: 10.5px; font-weight: 600; line-height: 1.4; letter-spacing: .12em; text-transform: uppercase; color: \${({ theme }) => theme.faint}; }
            .pd-book .pd-holds .pd-paragraph.pa-entry { display: flex; align-items: center; gap: 9px; padding: 6px 18px 6px 16px; font-family: \${({ theme }) => theme.sans}; font-size: 13px; color: \${({ theme }) => theme.ink}; }
            .pd-book .pd-holds .pd-paragraph.pa-entry::before { content: ''; flex: none; width: 7px; height: 7px; border-radius: 50%; background: \${({ theme }) => theme.sea}; }
            .pd-book .pd-holds .pd-paragraph.pa-entry .pd-day-count { margin-inline-start: auto; font-size: 11px; color: \${({ theme }) => theme.faint}; }
            .pd-book .pd-holds .pd-paragraph.pa-entry:hover { background: #f8fafc; }
            .pd-book .pd-holds .pd-paragraph.pa-entry.pa-open { background: linear-gradient(90deg, #eff4fa, #f8fafd); color: \${({ theme }) => theme.heading}; font-weight: 500; }
            .pd-book .pd-holds .pd-came-to-row { order: -1; display: flex; align-items: center; gap: 9px; margin: 0 0 10px; padding: 6px 18px 6px 16px; font-family: \${({ theme }) => theme.sans}; font-size: 13px; font-style: italic; color: \${({ theme }) => theme.soft}; }
            .pd-book .pd-holds .pd-came-to-row::before { content: ''; width: 7px; height: 7px; border-radius: 50%; background: \${({ theme }) => theme.faint}; }
            .pd-book .pd-holds .pd-came-to-row .pa-reference { color: inherit; text-decoration: none; }
        \`;
    }

    protected cameTo(): RuleSet {
        return css\`
            .pd-book .pd-pages .pd-came-to { width: min(760px, 100%); margin: 0 auto 26px; padding: 14px 18px; border-radius: 12px; background: #fbfcfd; }
            .pd-book .pd-pages .pd-came-to::before { content: 'What it came to'; display: block; margin-block-end: 4px; font-family: \${({ theme }) => theme.sans}; font-size: 10.5px; font-weight: 600; line-height: 1.4; letter-spacing: .12em; text-transform: uppercase; color: \${({ theme }) => theme.faint}; }
            .pd-book .pd-pages .pd-came-to .pd-chapter { display: block; }
            .pd-book .pd-pages .pd-came-to .pd-chapter > .pd-title, .pd-book .pd-pages .pd-came-to .pd-chapter > a.pa-self-reference, .pd-book .pd-pages .pd-came-to .pd-turn { display: none; }
            .pd-book .pd-pages .pd-came-to .pd-paragraph { margin: 0; font-family: \${({ theme }) => theme.sans}; font-size: 14px; line-height: 1.6; color: \${({ theme }) => theme.soft}; }
            .pd-book .pd-pages .pa-page { width: min(760px, 100%); margin: 0 auto; }
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
            .pd-book .pd-pages .pd-message.pa-mine > .pd-said { margin-inline-start: auto; width: fit-content; max-width: 78%; padding: 12px 16px; border-radius: 18px; background: rgba(11, 11, 11, .05); gap: 8px; }
        \`;
    }

    protected said(): RuleSet {
        return css\`
            .pd-book .pd-pages .pd-message .pd-said .pd-paragraph { margin: 0; font-family: \${({ theme }) => theme.serif}; font-size: 16.5px; line-height: 1.6; color: \${({ theme }) => theme.ink}; }
            .pd-book .pd-pages .pd-message.pa-mine .pd-said .pd-paragraph { font-family: \${({ theme }) => theme.sans}; font-size: 15px; line-height: 1.5; }
            .pd-book .pd-pages .pd-message .pd-said .pd-heading { margin: 8px 0 0; padding: 0; border: 0; font-family: \${({ theme }) => theme.serif}; font-size: 17px; font-weight: 600; line-height: 1.3; color: \${({ theme }) => theme.heading}; }
            .pd-book .pd-pages .pd-message .pa-emphasis { font-style: italic; }
            .pd-book .pd-pages .pd-message .pa-bold { font-weight: 600; }
            .pd-book .pd-pages .pd-message .pa-list { padding-inline-start: 1.3em; }
            .pd-book .pd-pages .pd-message .pa-list .pa-item { display: list-item; list-style: disc outside; }
            .pd-book .pd-pages .pd-message .pa-list.pa-ordered .pa-item { list-style: decimal outside; }
            .pd-book .pd-pages .pd-message .pa-list .pa-item + .pa-item { margin-block-start: 4px; }
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
            .pd-book.pa-layout:has(> .pd-pane.pa-open) {
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
                .pd-book.pa-layout:has(> .pd-pane.pa-open) { grid-template-columns: minmax(0, 1fr); grid-template-areas: 'library' 'head' 'pages'; }
            }
        \`;
    }
}

export const ApplicationForm = $($ApplicationForm);
`}),e.jsx(r,{identifier:"browser",type:".mjs",children:`import { createRequire } from 'node:module';
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
`})]}),"ThePage4"),N=n(()=>e.jsxs(d,{children:[e.jsx(c,{}),e.jsx(p,{children:"[The Pane](/claudes-reference-manual/#the-pane)"}),e.jsxs(t,{children:[e.jsx(h,{}),"The box beside the words where an artifact or a file given opens, as the application opens one."]}),e.jsxs(o,{children:[e.jsx(s,{children:"What a pane is"}),e.jsxs(t,{children:["When an artifact's card is pressed in a conversation, the artifact opens beside the words in a pane that takes half the window, the words narrowing beside it, as the application the conversations come from opens one. At the pane's head stand the artifact's title and its kind, a copy that puts the whole of it on the clipboard, and a close; in its body the version itself, a document as writing and code in its box; at its foot the version's number with an arrow to the one before and the one after, and a download that saves the version as a file. A file given to Claude opens the same way from its chip at the head of my words, its text in the body and no foot, and an upload the export did not carry says so. The pressed card or chip reads pressed while the pane is open; pressing it again, or the close, shuts the pane. On a phone the pane covers the words. The design is ",e.jsx(i,{children:"[concept 2](/claudes-design/#a-conversation-as-the-application-shows-it)"}),"."]})]}),e.jsxs(o,{children:[e.jsx(s,{children:"How a pane fits the library's patterns"}),e.jsx(t,{children:"A pane is a paragraph with content of its own, drawn as a box, as the reference manual's panel is. What it shows is a field of the conversation it stands in: the card or the chip that was pressed sets it, the pane reads it, and a press is a value set on the book, which draws once. An artifact's version is a chapter of the conversation, written at import as every message is, so the pane draws a chapter and never reads a document from a string; the chapter stands among the book's appendix and never among its pages, which is why the days down the side are only days. Its rules are its own, on its own element, and the conversation's theme only says where in its grid the pane stands."})]}),e.jsx(r,{identifier:"code",type:".tsx",children:`import { ElementType, MouseEvent, ReactNode } from 'react';
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
        .pd-book &.pd-paragraph.pa-open { display: flex; }
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
        .pd-book & .pd-pane-body .pd-chapter .pd-code-box { margin: 0; border: 0; border-radius: 0; background: transparent; }
        .pd-book & .pd-pane-foot { display: flex; align-items: center; gap: 6px; padding: 8px 10px 8px 18px; border-block-start: 1px solid \${({ theme }) => theme.line}; font-family: \${({ theme }) => theme.sans}; font-size: 12px; font-weight: 500; line-height: 1.4; color: \${({ theme }) => theme.soft}; }
        .pd-book & .pd-pane-version { display: flex; align-items: center; gap: 4px; }
        .pd-book & .pd-pane-version button { padding: 0 6px; font-size: 13px; }
        .pd-book & .pd-pane-download { margin-inline-start: auto; }
        @media (max-width: \${({ theme }) => theme.narrow}) {
            .pd-book &.pd-paragraph.pa-open { position: fixed; inset: 52px 0 0 0; margin: 0; border-radius: 0; z-index: 2; }
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
        return this.artifacts.find(other => other.name === artifact.name && Number(other.number) === number);
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
        if (this.shown !== undefined) this.classes.add(this, 'pa-open');
    }
}

export const Pane = $($Pane);
`})]}),"ThePane5"),S=$(m),V=n(()=>e.jsxs(S,{children:[v(),j(),C(),A(),T(),P(),R(),N()]}),"book");export{V as book};
