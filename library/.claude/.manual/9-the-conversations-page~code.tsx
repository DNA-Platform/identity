import { ReactNode } from 'react';
import { $, $Chemical } from '@dna-platform/chemistry';
import { $Chapter, $Paragraph, $Referent, $Section, $Writing, Reference as reference, Word as word, binder, html } from '@dna-platform/public';
import { Theme } from '@dna-platform/public';
import { $Appendix, $Index, Results as results, Search as search, TreeFolder as treeFolder, contentOf } from '../../.manual/14-the-entry~code.tsx';
import { $Conversation, $Message, $Mine } from '../../.manual/29-the-conversation~code.tsx';
import { $Mark, Marking } from '../../.manual/19-the-cover~code.tsx';
import { $Switch } from '../../.manual/9-the-switch~code.tsx';
import { Light as light, Tone as tone } from '../../.manual/16-the-tone~code.tsx';
import { Words } from '../../.manual/1-the-book~code.tsx';
import { ApplicationForm } from './4-the-page~theme.tsx';
import { $Artifact, $Attachment } from './2-the-artifact-and-the-attachment~code.tsx';
import { Pane as pane } from './5-the-pane~code.tsx';
import { $Account, AccountLine as accountLine } from './7-the-account~code.tsx';
import { $Origin } from './8-the-origin~code.tsx';
import { $Project, ProjectLine as projectLine } from './3-the-project~code.tsx';

const fileGlyph = '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linejoin="round" stroke-linecap="round"><path d="M4 1.5h5.5L13 5v9.5H4z"/><path d="M9.5 1.5V5H13M6 8h4M6 10.5h4"/></svg>';

// What I asked in a chapter: each message of mine a row under the chapter's entry in the side, its first words leading
// to the message. Sprint 115, concept 9 of Claudes Design; `Outline` is a PROXY name.
export class $Outline extends $Paragraph {
    $asked?: $Chapter;

    $Outline(...chemicals: $Chemical[]) {
        this.$Writing(...chemicals);
        this.containers.replace(this, 'span', 'div');
    }

    override write(): ReactNode {
        const book = this.book as $ClaudeConversation | undefined;
        const chapter = this.$asked;
        if (book === undefined || chapter === undefined) return undefined;
        const Word = $(word);
        const Reference = $(reference);
        const asked = chapter.text.find($Message).filter(message => message.is($Mine));
        if (asked.length === 0) return undefined;
        return (
            <ol className="pd-asked">
                {asked.map((message, index) => {
                    const place = book.placeOf(message);
                    const opening = book.wordsOf(message).text;
                    return (
                        <li key={index}>
                            {place === undefined ? opening : (
                                <Word>
                                    <Reference>{place}</Reference>
                                    {opening}
                                </Word>
                            )}
                        </li>
                    );
                })}
            </ol>
        );
    }

    protected override $Define(): void {
        super.$Define();
        this.classes.add(this, 'pd-outline');
    }
}

// A file given in a chapter, as a tab under the chapter's entry, opening in the pane as its chip does.
export class $AttachmentTab extends $Switch {
    $attachment?: $Attachment;
    override get on(): boolean { return this.$attachment?.shown === true; }

    override press(): void {
        this.$attachment?.press();
    }

    override write(): ReactNode {
        const attachment = this.$attachment;
        if (attachment === undefined) return undefined;
        return (
            <>
                <span
                    className="pd-drawing"
                    dangerouslySetInnerHTML={{ __html: fileGlyph }}
                />
                <span className="pd-tab-name">
                    {attachment.fileName}
                </span>
                <small>
                    {attachment.names ? `${attachment.lineCount} lines` : 'not carried'}
                </small>
            </>
        );
    }

    protected override $Define(): void {
        super.$Define();
        this.classes.add(this, 'pd-file-tab');
    }
}

export const Outline = $($Outline);
export const AttachmentTab = $($AttachmentTab);
const outline = Outline;
const attachmentTab = AttachmentTab;

// THE TRAIL: where I came from, kept in the browser's storage by a press on a project page's row and read once the page
// has arrived, so a conversation can say the way back and a project page can land where I left it. No cookie and no
// server. Sprint 115, concepts 9 and 10 of Claudes Design, on Doug's "components with cookies"; `Trail`, `ProjectStrip`
// and `TrailMark` are PROXY names. The project's page writes it; this chapter reads it, so the project's page imports
// this one and never the reverse, and a change to the project's page reaches no conversation. Sprint 117, D2.
export type Place = { title: string; href: string };
export type Trail = {
    at: string;
    from: { page: string; title: string; href: string; marking: Marking };
    to: string | undefined;
    within: { title: string; index: number; of: number; prev?: Place; next?: Place };
    word: string;
    row: string | undefined;
};
export const trailKey = 'library-trail';
export const keptTrail = (): Trail | undefined => {
    try {
        const text = typeof localStorage === 'undefined' ? null : localStorage.getItem(trailKey);
        if (text === null) return undefined;
        const trail = JSON.parse(text) as Trail;
        return trail.from?.marking === undefined ? undefined : trail;
    } catch {
        return undefined;
    }
};

// The project's mark as the trail carries it: a mark drawn from the marking the project page wrote, since the project's
// cover is not on the conversation's page.
export class $TrailMark extends $Mark {
    $marking: Marking = { drawing: '', declarations: '' };
    override get marking(): Marking { return this.$marking; }
}

// The project's strip, a component of the project page carried into a conversation's page on the trail: the project's
// mark as the bar draws it, its name, my place in it, the conversations either side, the word I had typed, and the way back.
export class $ProjectStrip extends $Paragraph {
    get conversation(): $ClaudeConversation | undefined { return this.book as $ClaudeConversation | undefined; }

    $ProjectStrip(...chemicals: $Chemical[]) {
        this.$Writing(...chemicals);
        this.containers.replace(this, 'span', 'div');
    }

    override write(): ReactNode {
        const book = this.conversation;
        const trail = book?.$trail;
        if (book === undefined || trail === undefined) return undefined;
        const Word = $(word);
        const Reference = $(reference);
        const TrailMark = $(trailMark);
        return (
            <>
                <TrailMark marking={trail.from.marking}>
                    <Reference>{trail.from.href}</Reference>
                </TrailMark>
                <span className="pd-strip-words">
                    <Word>
                        <Reference>{trail.from.href}</Reference>
                        {trail.from.title}
                    </Word>
                    <span className="pd-strip-place">
                        {`${trail.within.index} of ${trail.within.of}`}
                    </span>
                </span>
                <span className="pd-strip-neighbours">
                    {trail.within.prev === undefined ? undefined : (
                        <Word>
                            <Reference>{trail.within.prev.href}</Reference>
                            {`‹ ${trail.within.prev.title}`}
                        </Word>
                    )}
                    {trail.within.next === undefined ? undefined : (
                        <Word>
                            <Reference>{trail.within.next.href}</Reference>
                            {`${trail.within.next.title} ›`}
                        </Word>
                    )}
                </span>
                {trail.word === '' ? undefined : (
                    <span className="pd-strip-word">
                        {`you were searching “${trail.word}”`}
                    </span>
                )}
                <Word>
                    <Reference>{trail.from.href}</Reference>
                    back to where I was
                </Word>
            </>
        );
    }

    protected override $Define(): void {
        super.$Define();
        this.classes.add(this, 'pd-project-strip');
    }
}

export const TrailMark = $($TrailMark);
export const ProjectStrip = $($ProjectStrip);
const trailMark = TrailMark;
const projectStrip = ProjectStrip;

// A conversation with Claude: the library's conversation with Claude's side, the project line and the account line in
// the bar, the pane for an artifact or an attachment, the search over the messages marked by the browser's highlights,
// and the project's strip when the trail leads here.
export class $ClaudeConversation extends $Conversation {
    $shown: $Artifact | $Attachment | undefined = undefined;
    $trail: Trail | undefined = undefined;

    // Read once the page has arrived: the trail, if it led to this conversation, is what the strip under the bar draws.
    arrive(): void {
        const trail = keptTrail();
        if (trail === undefined || trail.to !== this.means?.identifier || this.$trail?.at === trail.at) return;
        this.$trail = trail;
    }

    protected override turn(): void {
        super.turn();
        this.arrive();
    }
    get project(): $Project | undefined { return this.cover?.annotations.expressed($Project); }
    get account(): $Account | undefined { return this.cover?.annotations.expressed($Account); }
    get origin(): string | undefined { return this.cover?.annotations.expressed($Origin)?.uuid; }
    // The logo files the conversation under its project when the cover names one, the project's cover standing as a
    // volume of the conversation's; the name under the conversation's on hover is the project's, and the mark leads
    // to the project's page. Sprint 114, concept 5 of Claudes Design, its first form.
    override get subjectCover(): $Chapter | undefined {
        return this.coverOf(this.project?.means?.identifier) ?? super.subjectCover;
    }
    get index(): $Index | undefined {
        return this.table?.annotations.expressed($Index);
    }
    override get searchHint(): string {
        return 'a word in this conversation';
    }

    // The words of a message are everything it said, headed by who said it; a chapter's are the book's own.
    override wordsOf(writing: $Writing): Words {
        if (!(writing instanceof $Message)) return super.wordsOf(writing);
        const kept = this._words?.get(writing);
        if (kept !== undefined) return kept;
        const speaker = writing.speaker;
        const title = speaker === undefined ? '' : binder.reference(html.copy(speaker.text))?.name ?? html.copy(speaker.text);
        const text = [...writing.text].filter(chemical => chemical !== speaker).map(chemical => html.copy((chemical as $Writing).text).replace(/\s+/gu, ' ').trim()).filter(piece => piece !== '').join(' ');
        const words = { title, text, lower: `${title} ${text}`.toLowerCase() };
        (this._words ??= new Map()).set(writing, words);
        return words;
    }

    // What a word finds here: the messages that say it, in the order they were said.
    override found(word: string): $Writing[] {
        const lower = word.trim().toLowerCase();
        if (lower === '') return [];
        return this.messages.filter(message => this.wordsOf(message).lower.includes(lower));
    }

    override countOfFound(found: $Writing[], word: string): ReactNode {
        return (
            <>
                <b>{found.length}</b> {found.length === 1 ? 'message says' : 'messages say'} “{word}”
            </>
        );
    }

    // A message's place is its address by its time, within this book.
    override placeOf(writing: $Writing): string | undefined {
        if (!(writing instanceof $Message)) return super.placeOf(writing);
        const referent = writing.annotations.expressed($Referent)?.identifier;
        return referent === undefined ? undefined : this.placeWithin(`#${referent}`);
    }

    // The word marked wherever it is said on the page, by the browser's own highlights, which paint over the drawn
    // writing and rebuild nothing; a browser without them lists the hits and marks nothing.
    override sought(word: string): void {
        if (typeof CSS === 'undefined' || !('highlights' in CSS) || typeof document === 'undefined') return;
        const highlights = (CSS as unknown as { highlights: Map<string, unknown> }).highlights;
        if (word === '') { highlights.delete('pd-found'); return; }
        // Static ranges, never live ones: a live range is kept current by the browser on every change to the document,
        // so with one for every letter a word falls on, each row the hits drop costs the whole set, and a letter typed
        // cost 160 s on 684 messages. A static range costs the document nothing and the highlight paints it the same.
        const ranges: StaticRange[] = [];
        const lower = word.toLowerCase();
        const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
            acceptNode: node => node.parentElement?.closest('.pd-pages .pd-said') ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT,
        });
        for (let node = walker.nextNode(); node !== null; node = walker.nextNode()) {
            const text = node.nodeValue?.toLowerCase() ?? '';
            for (let at = text.indexOf(lower); at !== -1; at = text.indexOf(lower, at + lower.length))
                ranges.push(new StaticRange({ startContainer: node, startOffset: at, endContainer: node, endOffset: at + word.length }));
        }
        const Highlight = (globalThis as unknown as { Highlight: new (...ranges: AbstractRange[]) => unknown }).Highlight;
        highlights.set('pd-found', new Highlight(...ranges));
    }

    // The side: the search's field, its hits while a word stands, the index, and under it what I asked in the chapter in
    // front, which stands beside the index and not within an entry, since an entry is a link and a link holds no link.
    override holds(): ReactNode {
        const Search = $(search);
        const Results = $(results);
        const Outline = $(outline);
        const open = this.open;
        return (
            <>
                <Search chapter={this.table} />
                <Results chapter={this.table} />
                {super.holds()}
                {open === undefined || !this.body.includes(open) ? undefined : (
                    <Outline
                        key={open.mention?.identifier}
                        chapter={this.table}
                        asked={open}
                    />
                )}
            </>
        );
    }

    override write(): ReactNode {
        const Pane = $(pane);
        const ProjectStrip = $(projectStrip);
        return (
            <>
                {super.write()}
                <ProjectStrip chapter={this.cover} />
                <Pane chapter={this.cover} />
            </>
        );
    }

    protected override $Bound(): void {
        const index = this.index;
        if (index !== undefined) {
            index.$folded = true;
            index.$counted = true;
            index.$searched = true;
        }
        const TreeFolder = $(treeFolder);
        for (const section of this.table?.text.find($Section) ?? [])
            if (!section.is($Appendix))
                section.annotations.add(this,
                    <TreeFolder />
                );
        const AttachmentTab = $(attachmentTab);
        for (const paragraph of index?.entries ?? []) {
            const place = contentOf(paragraph)?.identifier;
            const chapter = place === undefined ? undefined : this.chapterAt(place);
            if (chapter === undefined || !this.body.includes(chapter)) continue;
            // A text's find answers its own writings, so the attachments are asked of each message.
            const given = chapter.text.find($Message).flatMap(message => message.text.find($Attachment)).filter(attachment => attachment.names);
            if (given.length === 0) continue;
            paragraph.text.add(this,
                ...given.map((attachment, index) => (
                    <AttachmentTab
                        key={index}
                        attachment={attachment}
                    />
                ))
            );
        }
        super.$Bound();
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
