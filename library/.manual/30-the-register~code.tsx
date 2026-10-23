import { ReactNode } from 'react';
import { css, RuleSet } from 'styled-components';
import { $, $check, $Chemical, inert } from '@dna-platform/chemistry';
import { $Annotation, $Append, $Chapter, $Paragraph, $Section, $Synopsis, $Writing, Reference as reference, Theme, Word as word, specify } from '@dna-platform/public';
import { $LibraryBook, LibraryBookSpecification } from './1-the-book~code.tsx';
import { $Dated } from './4-the-date~code.tsx';
import { ManualTheme } from './10-the-manual~theme.tsx';
import { Layout as layout } from './12-the-layout~code.tsx';
import { $Index, $Result, $Results, EntryDay as entryDay, EntryOpen as entryOpen, Folded as folded, Search as search, TreeFolder as treeFolder, clipped, contentOf, marked } from './14-the-entry~code.tsx';
import { Light as light, Tone as tone } from './16-the-tone~code.tsx';
import { $Volume } from './19-the-cover~code.tsx';
import { dayOf, monthOf } from './28-the-journal~code.tsx';
import { $Messages } from './29-the-conversation~code.tsx';
import { $ListLayout, RowForm as rowForm, rows } from './31-the-project-manual~code.tsx';
import { $Project } from '../.claude/.manual/3-the-project~code.tsx';

// The register lays its entries out by its parts, the sections of its table: the page shows the parts as cards,
// each with its count and its latest, and a part pressed opens on its rows newest first under their months in the
// row form of the project's page, the address carrying the part. Sprint 114, concept 6 of Claudes Design as
// cards and concept 7 with the parts folded, the session's number until Doug's. `PartCard`, `RegisterHead`,
// `groups`, `openGroup` and `pa-part-open` are PROXY names.
// The search is the index's way, Sprint 115: the word typed at the head stands on the index, the book answers what it
// finds among its entries' titles and synopses, narrowed to the open group, and draws the hits under the head in its own
// row, with the exchanges and the part.

// The entries and the groups are decided once, at bind, and kept: every card, the head and the side read what was
// kept, and nothing walks the book's thousand chapters inside a draw. The sketch and the chapter say parts; the code
// says groups, since a composition's parts are the framework's, the writings it holds.
export class $Register extends $LibraryBook {
    override specification = new RegisterSpecification();
    @inert() protected _entries?: $Chapter[];
    @inert() protected _groups?: Map<$Section, $Chapter[]>;
    @inert() protected _pages?: $Chapter[];
    @inert() protected _groupOf?: Map<$Chapter, $Section>;
    override get entries(): $Chapter[] {
        return this._entries ?? (this._entries = this.text.find($Chapter).filter(chapter => chapter.is($Synopsis) && chapter !== this.synopsis));
    }
    get groups(): $Section[] {
        return [...this.groupsKept().keys()];
    }
    get openGroup(): $Section | undefined {
        return this.$bookmark === undefined ? undefined : this.groups.find(part => part.mention !== undefined && this.placeWithin(part.mention.identifier) === this.$bookmark);
    }
    get index(): $Index | undefined {
        return this.table?.annotations.expressed($Index);
    }
    override get open(): $Chapter | undefined {
        return this.$bookmark === undefined ? undefined : this.chapterAt(this.$bookmark);
    }
    override get laidOutChapters(): ($Chapter | undefined)[] {
        return [...super.laidOutChapters, ...this.entries];
    }
    // Every entry is a page, newest first, so that every place a row addresses stands on the page as built; the
    // layout shows the open group's and hides the rest.
    override get pages(): $Chapter[] {
        return this._pages ?? (this._pages = [...this.entries].sort((a, b) => dayOf(b).localeCompare(dayOf(a))));
    }
    override get $bookmark(): string | undefined {
        return super.$bookmark;
    }
    override set $bookmark(value: string | undefined) {
        super.$bookmark = value;
        const open = this.openGroup;
        for (const part of this.groups)
            part.$is = part === open ? [] : [folded];
    }
    override get searchHint(): string {
        return this.openGroup === undefined ? 'a word, over every conversation' : 'a word, within this part';
    }

    protected groupsKept(): Map<$Section, $Chapter[]> {
        if (this._groups !== undefined) return this._groups;
        const entries = new Set(this.entries);
        const kept = new Map<$Section, $Chapter[]>();
        this._groupOf = new Map();
        for (const section of this.table?.text.find($Section) ?? []) {
            const own = section.text.find($Paragraph).map(paragraph => {
                const place = contentOf(paragraph)?.identifier;
                return place === undefined ? undefined : this.chapterAt(place);
            }).filter((entry): entry is $Chapter => entry !== undefined && entries.has(entry)).sort((a, b) => dayOf(b).localeCompare(dayOf(a)));
            if (own.length > 0) kept.set(section, own);
            for (const entry of own) this._groupOf.set(entry, section);
        }
        return this._groups = kept;
    }

    entriesOf(part: $Section): $Chapter[] {
        return this.groupsKept().get(part) ?? [];
    }

    groupOf(entry: $Chapter): $Section | undefined {
        this.groupsKept();
        return this._groupOf?.get(entry);
    }

    // What a word finds here: the entries whose title or synopsis holds it, newest first, within the open group.
    override found(word: string): $Writing[] {
        const lower = word.trim().toLowerCase();
        if (lower === '') return [];
        const group = this.openGroup;
        const within = group === undefined ? this.pages : this.entriesOf(group);
        return within.filter(entry => this.wordsOf(entry).lower.includes(lower));
    }

    override countOfFound(found: $Writing[], word: string): ReactNode {
        const group = this.openGroup;
        const of = group === undefined ? `of ${this.entries.length}` : `of ${this.entriesOf(group).length} in this part`;
        return (
            <>
                <b>{found.length}</b> {found.length === 1 ? 'conversation' : 'conversations'} {of} {found.length === 1 ? 'says' : 'say'} “{word}” in {found.length === 1 ? 'its' : 'their'} title or synopsis
            </>
        );
    }

    sizeOf(entry: $Chapter): number {
        return entry.annotations.expressed($Volume)?.cover?.annotations.expressed($Messages)?.shown ?? 0;
    }

    projectOf(part: $Section): $Project | undefined {
        return this.entriesOf(part)[0]?.annotations.expressed($Volume)?.cover?.annotations.expressed($Project);
    }

    override aboveThePages(): ReactNode {
        if ((this.index?.$search ?? '').trim() !== '') {
            const RegisterResults = $(registerResults);
            return (
                <RegisterResults chapter={this.table} />
            );
        }
        if (this.openGroup !== undefined) return undefined;
        const PartCard = $(partCard);
        return (
            <div className="pd-parts">
                {this.groups.map((part, index) => (
                    <PartCard
                        key={index}
                        chapter={this.table}
                        part={part}
                    />
                ))}
            </div>
        );
    }

    override head(): ReactNode {
        const Cover = $(this.cover!);
        const RegisterHead = $(registerHead);
        const RowForm = $(rowForm);
        const Search = $(search);
        return (
            <>
                <Cover />
                <RegisterHead chapter={this.cover} />
                <RowForm chapter={this.cover} />
                <Search chapter={this.cover} />
            </>
        );
    }

    protected override $Bound(): void {
        this._chapterByPlace = this.chapterByPlace();
        const index = this.index;
        if (index !== undefined) {
            index.$folded = true;
            index.$counted = true;
            index.$dated = true;
            index.$searched = true;
        }
        const TreeFolder = $(treeFolder);
        for (const section of this.table?.text.find($Section) ?? [])
            section.annotations.add(this,
                <TreeFolder />
            );
        for (const part of this.groups) rows(this, this.entriesOf(part));
        super.$Bound();
    }
}

export class $PartCard extends $Paragraph {
    $part?: $Section;
    get register(): $Register | undefined { return this.book as $Register | undefined; }

    $PartCard(...chemicals: $Chemical[]) {
        this.$Writing(...chemicals);
        this.containers.replace(this, 'span', 'div');
    }

    override write(): ReactNode {
        const book = this.register;
        const part = this.$part;
        if (book === undefined || part === undefined) return undefined;
        const Word = $(word);
        const Reference = $(reference);
        const EntryDay = $(entryDay);
        const EntryOpen = $(entryOpen);
        const entries = book.entriesOf(part);
        const latest = entries[0];
        const place = part.mention === undefined ? undefined : book.placeWithin(part.mention.identifier);
        return (
            <>
                <Word>
                    <span className="pd-part-name">
                        {part.canonical?.name}
                    </span>
                </Word>
                <span className="pd-part-count">
                    {entries.length} {entries.length === 1 ? 'conversation' : 'conversations'}
                </span>
                {latest === undefined ? undefined : (
                    <span className="pd-part-latest">
                        <span>
                            {latest.title?.name}
                        </span>
                        <EntryDay entry={latest} />
                    </span>
                )}
                {place === undefined ? undefined : (
                    <EntryOpen>
                        <Reference>{place}</Reference>
                    </EntryOpen>
                )}
            </>
        );
    }

    protected override $Define(): void {
        super.$Define();
        this.classes.add(this, 'pd-part-card');
    }
}

// The register's hits in its own row: the title, the exchanges, the day, the synopsis with the part named when no
// part is open, and the whole row leading into the conversation.
export class $RegisterResults extends $Results {
    protected override result(hit: $Writing, position: number): ReactNode {
        const book = this.book as $Register;
        const RegisterResult = $(registerResult);
        return (
            <RegisterResult
                key={(hit as $Chapter).mention?.identifier ?? position}
                chapter={this.chapter}
                entry={hit as $Chapter}
                named={book.openGroup === undefined}
            />
        );
    }
}

export class $RegisterResult extends $Result {
    $entry?: $Chapter;
    $named = false;
    get register(): $Register | undefined { return this.book as $Register | undefined; }

    override write(): ReactNode {
        const book = this.register;
        const entry = this.$entry;
        if (book === undefined || entry === undefined) return undefined;
        const Word = $(word);
        const Reference = $(reference);
        const EntryDay = $(entryDay);
        const EntryOpen = $(entryOpen);
        const read = book.wordsOf(entry);
        const sought = book.index?.$search.trim() ?? '';
        const conversation = entry.annotations.expressed($Volume)?.cover?.mention?.identifier;
        const part = this.$named ? book.groupOf(entry)?.canonical?.name : undefined;
        return (
            <>
                <span className="pd-result-title">
                    {marked(read.title, sought)}
                </span>
                <span className="pd-result-exchanges">
                    {book.sizeOf(entry)} exchanges
                </span>
                <EntryDay entry={entry} />
                <span className="pd-result-synopsis">
                    {part === undefined ? undefined : (
                        <span className="pd-result-part">
                            {part}
                        </span>
                    )}
                    {marked(clipped(read.text, sought), sought)}
                </span>
                {conversation === undefined ? undefined : (
                    <EntryOpen>
                        <Reference>{conversation}</Reference>
                    </EntryOpen>
                )}
            </>
        );
    }
}

export class $RegisterHead extends $Paragraph {
    get register(): $Register | undefined { return this.book as $Register | undefined; }

    $RegisterHead(...chemicals: $Chemical[]) {
        this.$Writing(...chemicals);
        this.containers.replace(this, 'span', 'div');
    }

    override write(): ReactNode {
        const book = this.register;
        if (book === undefined) return undefined;
        const Word = $(word);
        const Reference = $(reference);
        const subject = book.coverOf(book.subject?.means?.identifier);
        const part = book.openGroup;
        const entries = part === undefined ? book.entries : book.entriesOf(part);
        const exchanges = entries.reduce((sum, entry) => sum + book.sizeOf(entry), 0);
        const days = entries.map(dayOf).filter(day => day !== '').sort();
        const span = days.length === 0 ? '' : `${monthOf(entries.find(entry => dayOf(entry) === days[0])!)} to ${monthOf(entries.find(entry => dayOf(entry) === days[days.length - 1])!)}`;
        const project = part === undefined ? undefined : book.projectOf(part);
        return (
            <>
                <span className="pd-crumbs">
                    {subject === undefined ? undefined : (
                        <Word>
                            <Reference>{subject.mention!.identifier}</Reference>
                            {subject.title?.name}
                        </Word>
                    )}
                    <i>/</i>
                    {part === undefined ? (
                        <Word>
                            {book.title?.name}
                        </Word>
                    ) : (
                        <>
                            <Word>
                                <Reference>{book.means!.identifier}</Reference>
                                {book.title?.name}
                            </Word>
                            <i>/</i>
                            <Word>
                                {part.canonical?.name}
                            </Word>
                        </>
                    )}
                </span>
                {part === undefined ? undefined : (
                    <span className="pd-part-title">
                        {part.canonical?.name}
                    </span>
                )}
                <span className="pd-report">
                    <span>
                        <b>{entries.length}</b> conversations
                    </span>
                    {part === undefined ? (
                        <span>
                            <b>{book.groups.length}</b> parts
                        </span>
                    ) : undefined}
                    <span>
                        <b>{exchanges.toLocaleString('en-US')}</b> exchanges
                    </span>
                    <span>
                        {span}
                    </span>
                    {project?.means === undefined ? undefined : (
                        <Word>
                            <Reference>{project.means.identifier}</Reference>
                            the project's page
                        </Word>
                    )}
                </span>
            </>
        );
    }

    protected override $Define(): void {
        super.$Define();
        this.classes.add(this, 'pd-register-head');
    }
}

export class $RegisterLayout extends $ListLayout {
    @inert() protected shown: $Chapter[] = [];

    // The open group's entries are the open pages, marked as the framework marks the one open chapter, and the
    // pages of every other group are hidden by the paging below; a press reverts the last group's marks and sets
    // the next's, and nothing else is written.
    override defines(writing: $Writing): void {
        super.defines(writing);
        const book = this.book as $Register;
        const group = book.openGroup;
        if (group !== undefined) writing.classes.add(this, 'pa-part-open');
        const shown = group === undefined ? [] : book.entriesOf(group);
        for (const entry of this.shown)
            if (!shown.includes(entry)) entry.classes.revert(writing);
        for (const entry of shown)
            if (![...entry.classes].includes('pa-open')) entry.classes.add(writing, 'pa-open');
        this.shown = shown;
    }

    protected override paging(): RuleSet {
        return css`
            .pd-book.pa-turned .pa-page:not(.pa-open) { display: none; }
            .pd-book:not(.pa-turned) .pd-pages .pd-chapter.pa-page.pa-volume:not(.pa-open) { display: none; }
        `;
    }

    protected override areas(): RuleSet {
        return css`
            ${super.areas()}
            .pd-book .pd-head .pd-register-head { display: contents; }
            .pd-book.pa-part-open .pd-head .pd-chapter.pa-cover > a { display: none; }
            .pd-book .pd-head .pd-part-title { order: 2; grid-column: 1 / -1; margin: 0; font-family: ${({ theme }) => theme.serif}; font-size: calc(2.1429 * ${({ theme }) => theme.size}); font-weight: 600; line-height: 1.1; letter-spacing: -0.01em; color: ${({ theme }) => theme.heading}; }
            .pd-book .pd-head .pd-report .pd-word.pa-reference { color: ${({ theme }) => theme.accent}; text-decoration: none; }
            ${this.cards()}
            .pd-book .pd-pages .pd-result .pd-result-exchanges { grid-area: exchanges; font-family: ${({ theme }) => theme.font}; font-size: calc(0.8571 * ${({ theme }) => theme.size}); line-height: 20px; color: ${({ theme }) => theme.faint}; white-space: nowrap; font-variant-numeric: tabular-nums; }
            .pd-book .pd-pages .pd-result .pd-result-part { display: inline-block; margin-inline-end: calc(${({ theme }) => theme.space} / 3); padding: 0 6px; border-radius: 4px; background: ${({ theme }) => theme.tint}; font-family: ${({ theme }) => theme.font}; font-size: calc(0.7857 * ${({ theme }) => theme.size}); font-weight: 500; line-height: 18px; color: ${({ theme }) => theme.soft}; vertical-align: 1px; }
            @media (max-width: ${({ theme }) => theme.narrow}) {
                .pd-book .pd-pages .pd-result .pd-result-exchanges { display: none; }
            }
        `;
    }

    protected cards(): RuleSet {
        return css`
            .pd-book:not(.pa-turned) .pd-pages .pd-parts { display: grid; grid-template-columns: repeat(auto-fill, minmax(calc(${({ theme }) => theme.space} * 9.8333), 1fr)); gap: calc(${({ theme }) => theme.space} / 2); width: min(768px, 100%); margin-block-start: calc(${({ theme }) => theme.space} * 0.75); }
            .pd-book.pa-turned .pd-pages .pd-parts { display: none; }
            .pd-book .pd-pages .pd-paragraph.pd-part-card { position: relative; display: grid; gap: calc(${({ theme }) => theme.space} / 8); margin: 0; padding: calc(${({ theme }) => theme.space} * 0.5833) calc(${({ theme }) => theme.space} * 0.6667) calc(${({ theme }) => theme.space} / 2); border: thin solid ${({ theme }) => theme.line}; border-radius: calc(${({ theme }) => theme.space} / 2); background: ${({ theme }) => theme.paper}; color: ${({ theme }) => theme.ink}; min-width: 0; transition: border-color ${({ theme }) => theme.beat} ease, box-shadow ${({ theme }) => theme.beat} ease; }
            .pd-book .pd-pages .pd-part-card:hover { border-color: #c0c9df; box-shadow: 0 2px 10px rgba(26, 31, 54, 0.06); }
            .pd-book .pd-pages .pd-part-card .pd-word .pd-part-name { display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-family: ${({ theme }) => theme.font}; font-size: calc(1.0714 * ${({ theme }) => theme.size}); font-weight: 600; line-height: calc(1.4286 * ${({ theme }) => theme.size}); color: ${({ theme }) => theme.heading}; }
            .pd-book .pd-pages .pd-part-card .pd-part-count { font-family: ${({ theme }) => theme.font}; font-size: calc(0.8571 * ${({ theme }) => theme.size}); line-height: calc(1.2857 * ${({ theme }) => theme.size}); color: ${({ theme }) => theme.faint}; font-variant-numeric: tabular-nums; }
            .pd-book .pd-pages .pd-part-card .pd-part-latest { display: flex; gap: calc(${({ theme }) => theme.space} / 3); align-items: baseline; margin-block-start: calc(${({ theme }) => theme.space} / 3); font-family: ${({ theme }) => theme.serif}; font-size: calc(0.9643 * ${({ theme }) => theme.size}); line-height: calc(1.2857 * ${({ theme }) => theme.size}); color: ${({ theme }) => theme.soft}; min-width: 0; }
            .pd-book .pd-pages .pd-part-card .pd-part-latest > span { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
            .pd-book .pd-pages .pd-part-card .pd-part-latest .pd-word.pd-entry-day { flex: none; margin-inline-start: auto; font-family: ${({ theme }) => theme.font}; font-size: calc(0.7857 * ${({ theme }) => theme.size}); color: ${({ theme }) => theme.faint}; font-variant-numeric: tabular-nums; }
            .pd-book .pd-pages .pd-part-card > a:has(> .pd-entry-open) { position: absolute; inset: 0; z-index: 1; }
            @media (max-width: ${({ theme }) => theme.narrow}) {
                .pd-book:not(.pa-turned) .pd-pages .pd-parts { grid-template-columns: 1fr 1fr; gap: calc(${({ theme }) => theme.space} / 3); margin-block-start: calc(${({ theme }) => theme.space} / 2); }
                .pd-book .pd-pages .pd-paragraph.pd-part-card { padding: calc(${({ theme }) => theme.space} * 0.4167) calc(${({ theme }) => theme.space} / 2); }
                .pd-book .pd-pages .pd-part-card .pd-part-latest { display: none; }
            }
        `;
    }
}

export class RegisterSpecification extends LibraryBookSpecification {
    @specify('every entry of a register stands for a book, holding its synopsis')
    $everyEntryStandsForABook(book: $Register): void {
        const astray = book.entries.find(chapter => chapter.annotations.expressed($Synopsis)?.means === undefined);
        $check(astray === undefined, `every entry of a register stands for a book, holding its synopsis, and "${astray?.title?.name}" stands for none`);
    }

    @specify('every entry of a register is dated')
    $everyEntryIsDated(book: $Register): void {
        const undated = book.entries.find(chapter => !chapter.is($Dated));
        $check(undated === undefined, `every entry of a register is dated, and "${undated?.title?.name}" is not`);
    }

    @specify('every entry of a register is listed under a part of its table')
    $everyEntryIsListedUnderAPart(book: $Register): void {
        const listed = new Set(book.groups.flatMap(part => book.entriesOf(part)));
        const unlisted = book.entries.find(entry => !listed.has(entry));
        $check(unlisted === undefined, `every entry of a register is listed under a part of its table, and "${unlisted?.title?.name}" is under none`);
    }

    @specify('only an ordinary chapter or an entry files a file')
    override $onlyAChapterAppends(book: $Register): void {
        const filing = [...book.chapters, ...book.entries];
        $check(book.text.find($Chapter).every(chapter => filing.includes(chapter) || !chapter.is($Append)),
            'only an ordinary chapter or an entry files a file, and here a cover, a synopsis or a table of contents files one');
    }
}

export const Register = $($Register);
export const PartCard = $($PartCard);
export const RegisterResults = $($RegisterResults);
export const RegisterResult = $($RegisterResult);
export const RegisterHead = $($RegisterHead);
export const RegisterLayout = $($RegisterLayout);
const partCard = PartCard;
const registerResults = RegisterResults;
const registerResult = RegisterResult;
const registerHead = RegisterHead;
$(Register, Theme)(ManualTheme);
$(Register, tone)(light);
$(Register, layout)(RegisterLayout);
