import { ReactNode } from 'react';
import { $, $check, $Chemical, Component, next } from '@dna-platform/chemistry';
import {
    $Annotation, $Chapter, $Cover, $Paragraph, $Reference, $Referent, $Section, $Word, $Writing, AnnotationSpecification, ContainerProps,
    Reference as reference, Word as word, binder, html, specify,
} from '@dna-platform/public';
import { Theme } from '@dna-platform/public';
import {
    $Appendix, $Conversation, $EntryOpen, $Index, $Mark, $Message, $Mine, $ProjectManual, $Result, $Results, $Switch, $Volume, Label as label,
    Light as light, Marking, Results as results, Search as search, Tone as tone, TreeFolder as treeFolder, Words, contentOf, markingOf, rows,
} from '../../.manual/.book';
import { ApplicationForm } from './4-the-page~theme.tsx';
import { $Artifact, $Attachment } from './2-the-artifact-and-the-attachment~code.tsx';
import { Pane as pane } from './5-the-pane~code.tsx';
import { $Account, AccountLine as accountLine } from './7-the-account~code.tsx';
import { $Origin } from './8-the-origin~code.tsx';

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
// and `WayOn` are PROXY names.
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

// The way on to the application, beside each conversation of a project: a link by the origin its cover carries.
export class $WayOn extends $Word {
    $href?: string;

    override write(): ReactNode {
        if (this.$href === undefined) return undefined;
        return (
            <a
                className="pd-way-on-link"
                href={this.$href}
                target="_blank"
                rel="noopener"
            >
                in Claude
            </a>
        );
    }

    protected override $Define(): void {
        super.$Define();
        this.classes.add(this, 'pd-way-on');
    }
}

// The way into a conversation from its project's row, keeping the trail as it is pressed.
export class $ProjectEntryOpen extends $EntryOpen {
    override container(props: ContainerProps): ReactNode {
        return super.container({ ...props, onClick: () => this.keep() });
    }

    keep(): void {
        const book = this.book as $ClaudeProjectManual | undefined;
        const entry = this.$entry instanceof $Chapter ? this.$entry : this.chapter;
        if (book === undefined || entry === undefined || typeof localStorage === 'undefined') return;
        const entries = book.pages.filter(chapter => book.entries.includes(chapter));
        const index = entries.indexOf(entry);
        const placeOf = (one: $Chapter | undefined): Place | undefined => {
            const href = one?.annotations.expressed($Volume)?.cover?.mention?.identifier;
            return one === undefined || href === undefined ? undefined : { title: one.title?.name ?? '', href };
        };
        const page = book.means?.identifier ?? '';
        const trail: Trail = {
            at: new Date().toISOString(),
            from: { page, title: book.title?.name ?? '', href: page, marking: markingOf(book.cover) },
            to: placeOf(entry)?.href,
            within: { title: book.title?.name ?? '', index: index + 1, of: entries.length, prev: placeOf(entries[index - 1]), next: placeOf(entries[index + 1]) },
            word: book.index?.$search ?? '',
            row: entry.mention?.identifier,
        };
        try {
            localStorage.setItem(trailKey, JSON.stringify(trail));
        } catch {
            return;
        }
    }
}

// The project's hits lay the project's own open over each row, so a hit pressed keeps the trail as a row does.
export class $ProjectResult extends $Result {
    get project(): $ClaudeProjectManual | undefined { return this.book as $ClaudeProjectManual | undefined; }

    // The hit I came back from, when the trail leads back to this page: marked as the row of the list is, since the
    // hits stand in front of the list while a word stands.
    get returned(): boolean {
        const book = this.project;
        const hit = this.$hit;
        return book !== undefined && hit !== undefined && book.$trail !== undefined && book.$trail.to === book.placeOf(hit);
    }

    // A hit is drawn after the page arrives, so the one I came back from lands the page once it is laid out.
    $ProjectResult(...chemicals: $Chemical[]) {
        this.$Result(...chemicals);
        void this[next]('layout').then(() => { if (this.returned) this.project?.land(); });
    }

    override container(props: ContainerProps): ReactNode {
        return super.container(this.returned ? { ...props, className: `${props.className ?? ''} pa-returned` } : props);
    }

    protected override open(): Component<$EntryOpen> {
        return projectEntryOpen as Component<$EntryOpen>;
    }
}

export class $ProjectResults extends $Results {
    protected override result(hit: $Writing, position: number): ReactNode {
        const ProjectResult = $(projectResult);
        return (
            <ProjectResult
                key={(this.book as $ProjectManual).placeOf(hit) ?? position}
                chapter={this.chapter}
                hit={hit}
            />
        );
    }
}

// A project of mine with Claude: the project manual with the way on to the application beside each conversation and
// the trail kept as a row is pressed; when the page arrives from a conversation, it lands where I left it.
export class $ClaudeProjectManual extends $ProjectManual {
    $trail: Trail | undefined = undefined;

    override aboveThePages(): ReactNode {
        const ProjectResults = $(projectResults);
        return (
            <ProjectResults chapter={this.table} />
        );
    }

    protected override rows(entries: $Chapter[]): void {
        rows(this, entries, projectEntryOpen as Component<$EntryOpen>);
        const WayOn = $(wayOn);
        for (const entry of entries) {
            const origin = entry.annotations.expressed($Volume)?.cover?.annotations.expressed($Origin)?.uuid;
            if (origin === undefined) continue;
            entry.text.add(this,
                <WayOn href={`https://claude.ai/chat/${origin}`} />
            );
        }
    }

    // Read once the page has arrived: the trail, if it leads back here, sets the word and marks the row I left from.
    arrive(): void {
        const trail = keptTrail();
        if (trail === undefined || trail.from.page !== this.means?.identifier || this.$trail?.at === trail.at) return;
        this.$trail = trail;
        if (trail.word !== '') this.index?.search(trail.word);
        const row = trail.row === undefined ? undefined : this.chapterAt(trail.row);
        if (row !== undefined) row.classes.add(this, 'pa-returned');
        if (row !== undefined && trail.word === '') this.land(row);
    }

    // Lands on the row I left from: the row of the list, found by its title as the book's turn finds a bookmark's, when
    // no word stands; and the hit I came back from, which calls once it is laid out, since the hits stand above the list
    // while a word stands.
    land(row?: $Chapter): void {
        const title = row?.title;
        const element = row === undefined
            ? document.querySelector('.pd-book .pd-result.pa-returned')
            : title === undefined ? null : document.getElementById(String(title.id))?.closest('.pd-chapter');
        element?.scrollIntoView({ block: 'center' });
    }

    // The turn is the framework's word that the book has drawn and laid out on the client, which is when the browser's
    // storage may be read without the first draw disagreeing with the print.
    protected override turn(): void {
        super.turn();
        this.arrive();
    }
}

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

export const WayOn = $($WayOn);
export const ProjectEntryOpen = $($ProjectEntryOpen);
export const ProjectResult = $($ProjectResult);
export const ProjectResults = $($ProjectResults);
export const ClaudeProjectManual = $($ClaudeProjectManual);
export const ProjectStrip = $($ProjectStrip);
export const TrailMark = $($TrailMark);
const trailMark = TrailMark;
const wayOn = WayOn;
const projectEntryOpen = ProjectEntryOpen;
const projectResult = ProjectResult;
const projectResults = ProjectResults;
const projectStrip = ProjectStrip;

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
