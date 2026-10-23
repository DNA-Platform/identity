import { ElementType, ReactNode } from 'react';
import { css, RuleSet } from 'styled-components';
import { $, $check, $Chemical, Component, selection } from '@dna-platform/chemistry';
import { $Annotation, $Append, $Chapter, $Paragraph, $Section, $Synopsis, $Word, $Writing, Reference as reference, Word as word, html, specify } from '@dna-platform/public';
import { OfABookSpecification } from './1-the-book~said.tsx';
import { Switch as switchWord } from './9-the-switch~code.tsx';
import { $Manual, ManualSpecification } from './10-the-manual~book.tsx';
import { $Brief } from './10-the-manual~annotations.tsx';
import { $Spread } from './10-the-manual~code.tsx';
import { $Layout, Layout as layout } from './12-the-layout~code.tsx';
import { $EntryOpen, $Index, EntryOpen as entryOpen, Results as results, Search as search, contentOf } from './14-the-entry~code.tsx';
import { $Volume } from './19-the-cover~code.tsx';
import { dayOf, monthOf } from './28-the-journal~code.tsx';
import { $Messages, $Period } from './29-the-conversation~code.tsx';

// The project's page lays its chapters by what they are: the conversations held in the project down the main
// column under their months, as the application lists them; the knowledge of the project, what it is and its
// files, in a column at the right where the application keeps it; the side listing the months, folded. Nothing
// is placed by position: a file is a chapter that appends a file, the project is the one that appends none, an
// entry is a chapter holding a synopsis. Sprint 113, concept 4 of Claudes Design, layout 1, until Doug decides
// by number. `Knowledge`, `EntryCount`, `EntryMonth`, `EntryOpen` and `ProjectHead` are PROXY names.

// The rows carry their synopses when the reader asks, a switch at the head as the journal's order is.
export class $Synopses extends $Annotation {
    specification = new OfABookSpecification();

    override defines(writing: $Writing): void {
        writing.classes.add(this, 'pa-synopses');
    }

    override erase(writing: $Writing): void {
        writing.classes.revert(this);
    }
}

export const Synopses = $($Synopses);
const synopses = Synopses;

export class $RowForm extends $Paragraph {
    override write(): ReactNode {
        const Switch = $(switchWord);
        return (
            <Switch annotation={synopses}>
                with the synopsis
            </Switch>
        );
    }

    protected override $Define(): void {
        super.$Define();
        this.classes.add(this, 'pd-row-form');
    }
}

export class $EntryCount extends $Word {
    override write(): ReactNode {
        const shown = this.chapter?.annotations.expressed($Volume)?.cover?.annotations.expressed($Messages)?.shown ?? 0;
        return `${shown} exchanges`;
    }

    protected override $Define(): void {
        super.$Define();
        this.classes.add(this, 'pd-entry-count');
    }
}

export class $EntryMonth extends $Word {
    override write(): ReactNode {
        return monthOf(this.chapter!);
    }

    protected override $Define(): void {
        super.$Define();
        this.classes.add(this, 'pd-entry-month');
    }
}

export class $ProjectHead extends $Paragraph {
    get project(): $ProjectManual | undefined { return this.book as $ProjectManual | undefined; }

    $ProjectHead(...chemicals: $Chemical[]) {
        this.$Writing(...chemicals);
        this.containers.replace(this, 'span', 'div');
    }

    override write(): ReactNode {
        const book = this.project;
        if (book === undefined) return undefined;
        const Word = $(word);
        const Reference = $(reference);
        const subject = book.coverOf(book.subject?.means?.identifier);
        const entries = book.entries;
        const exchanges = entries.reduce((sum, entry) => sum + (entry.annotations.expressed($Volume)?.cover?.annotations.expressed($Messages)?.shown ?? 0), 0);
        const days = entries.map(dayOf).filter(day => day !== '').sort();
        const span = days.length === 0 ? '' : `${monthOf(entries.find(entry => dayOf(entry) === days[0])!)} to ${monthOf(entries.find(entry => dayOf(entry) === days[days.length - 1])!)}`;
        const brief = book.brief;
        const instructions = book.instructions;
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
                    <Word>
                        {book.title?.name}
                    </Word>
                </span>
                {brief === '' ? undefined : (
                    <span className="pd-brief">
                        {brief}
                    </span>
                )}
                {instructions === undefined ? undefined : (
                    <span className={`pd-instructions${instructions.set ? '' : ' pa-none'}`}>
                        <b>Instructions</b>
                        <span>
                            {instructions.set ? instructions.words : 'none were set on this project'}
                        </span>
                    </span>
                )}
                <span className="pd-report">
                    <span>
                        <b>{entries.length}</b> conversations
                    </span>
                    <span>
                        <b>{exchanges}</b> exchanges
                    </span>
                    <span>
                        <b>{book.files.length}</b> files
                    </span>
                    <span>
                        {span}
                    </span>
                </span>
            </>
        );
    }

    protected override $Define(): void {
        super.$Define();
        this.classes.add(this, 'pd-project-head');
    }
}

// The months as a shape: a bar for each month the table lists, the oldest at the left, the year named where it begins,
// a bar pressed going to its month in the side. Sprint 115, concept 10 of Claudes Design; `MonthShape` is a PROXY name.
export class $MonthShape extends $Paragraph {
    get project(): $ProjectManual | undefined { return this.book as $ProjectManual | undefined; }

    $MonthShape(...chemicals: $Chemical[]) {
        this.$Writing(...chemicals);
        this.containers.replace(this, 'span', 'div');
    }

    override write(): ReactNode {
        const book = this.project;
        if (book === undefined) return undefined;
        const Word = $(word);
        const Reference = $(reference);
        const months = book.months;
        if (months.length === 0) return undefined;
        const most = Math.max(...months.map(month => month.count));
        let year = '';
        return months.map((month, index) => {
            const own = month.name.split(' ').at(-1) ?? '';
            const first = own !== year;
            year = own;
            return (
                <Word key={index}>
                    {month.place === undefined ? undefined : (
                        <Reference>{month.place}</Reference>
                    )}
                    <span
                        className="pd-month-bar"
                        style={{ height: `${Math.round(6 + (36 * month.count) / most)}px` }}
                        title={`${month.name} · ${month.count}`}
                    />
                    {first ? (
                        <b>
                            {own}
                        </b>
                    ) : undefined}
                </Word>
            );
        });
    }

    protected override $Define(): void {
        super.$Define();
        this.classes.add(this, 'pd-month-shape');
    }
}

export class $Knowledge extends $Paragraph {
    style: ElementType = selection.div`
        .pd-book &.pd-paragraph { display: flex; flex-direction: column; margin: 0; padding: calc(${({ theme }) => theme.space} * 1.0833) ${({ theme }) => theme.space} calc(${({ theme }) => theme.space} * 1.6667) calc(${({ theme }) => theme.space} / 3); }
        .pd-book & .pd-knowledge-row { display: flex; align-items: center; gap: calc(${({ theme }) => theme.space} * 0.4167); padding: calc(${({ theme }) => theme.space} / 2) calc(${({ theme }) => theme.space} * 0.4167); border-block-end: thin solid rgba(11, 11, 11, .08); font-family: ${({ theme }) => theme.font}; font-size: ${({ theme }) => theme.size}; font-weight: 500; line-height: 1.4; color: ${({ theme }) => theme.ink}; }
        .pd-book & .pd-knowledge-row a.pa-reference, .pd-book & .pd-knowledge-file a.pa-reference { min-width: 0; overflow: hidden; color: inherit; text-decoration: none; }
        .pd-book & .pd-knowledge-row .pd-word.pa-reference { color: inherit; text-decoration: none; }
        .pd-book & .pd-knowledge-row small { font-weight: 400; color: ${({ theme }) => theme.faint}; }
        .pd-book & .pd-knowledge-row .pd-at-right { margin-inline-start: auto; font-size: calc(0.8929 * ${({ theme }) => theme.size}); font-weight: 500; color: ${({ theme }) => theme.soft}; }
        .pd-book & .pd-knowledge-files { display: flex; flex-direction: column; padding-block-start: calc(${({ theme }) => theme.space} / 4); }
        .pd-book & .pd-knowledge-file { display: grid; grid-template-columns: calc(1.1429 * ${({ theme }) => theme.size}) minmax(0, 1fr) auto; align-items: center; column-gap: calc(${({ theme }) => theme.space} * 0.4167); padding: calc(${({ theme }) => theme.space} * 0.2917) calc(${({ theme }) => theme.space} * 0.4167); border-radius: ${({ theme }) => theme.radius}; transition: background ${({ theme }) => theme.beat} ease; }
        .pd-book & .pd-knowledge-file:hover { background: rgba(11, 11, 11, .05); }
        .pd-book & .pd-knowledge-file .pd-drawing { width: calc(1.1429 * ${({ theme }) => theme.size}); height: calc(1.1429 * ${({ theme }) => theme.size}); color: ${({ theme }) => theme.soft}; }
        .pd-book & .pd-knowledge-file .pd-drawing svg { display: block; width: 100%; height: 100%; fill: none; stroke: currentColor; stroke-width: 1.25; stroke-linecap: round; stroke-linejoin: round; }
        .pd-book & .pd-knowledge-file .pd-word.pa-reference { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-size: calc(0.9643 * ${({ theme }) => theme.size}); font-weight: 400; color: ${({ theme }) => theme.ink}; text-decoration: none; }
        .pd-book & .pd-file-type { padding: 0 4px; border: thin solid ${({ theme }) => theme.line}; border-radius: 4px; font-size: calc(0.7143 * ${({ theme }) => theme.size}); font-weight: 500; letter-spacing: .06em; line-height: 1.5; text-transform: uppercase; color: ${({ theme }) => theme.faint}; }
    `;
    get project(): $ProjectManual | undefined { return this.book as $ProjectManual | undefined; }

    $Knowledge(...chemicals: $Chemical[]) {
        this.$Writing(...chemicals);
        this.containers.replace(this, 'span', this.style);
    }

    override write(): ReactNode {
        const book = this.project;
        if (book === undefined) return undefined;
        const Word = $(word);
        const Reference = $(reference);
        const project = book.project;
        const fileIcon = '<svg viewBox="0 0 16 16"><path d="M4 1.5h5.5L13 5v9.5H4z"/><path d="M9.5 1.5V5H13M6 8h4M6 10.5h4"/></svg>';
        return (
            <>
                {project?.mention === undefined ? undefined : (
                    <span className="pd-knowledge-row">
                        <Word>
                            <Reference>{project.mention.identifier}</Reference>
                            {project.title?.name}
                        </Word>
                        <span className="pd-at-right">
                            what it is, its instructions
                        </span>
                    </span>
                )}
                <span className="pd-knowledge-row">
                    Files
                    <small>
                        {book.files.length}
                    </small>
                    <span className="pd-at-right">
                        as uploaded
                    </span>
                </span>
                <span className="pd-knowledge-files">
                    {book.files.map((file, index) => (
                        <span
                            key={index}
                            className="pd-knowledge-file"
                        >
                            <span
                                className="pd-drawing"
                                dangerouslySetInnerHTML={{ __html: fileIcon }}
                            />
                            <Word>
                                <Reference>{file.mention!.identifier}</Reference>
                                {file.title?.name}
                            </Word>
                            <span className="pd-file-type">
                                {(file.annotations.find($Append)[0]?.$type ?? '').replace(/^\./u, '')}
                            </span>
                        </span>
                    ))}
                </span>
            </>
        );
    }

    protected override $Define(): void {
        super.$Define();
        this.classes.add(this, 'pd-knowledge');
    }
}

export class $ListLayout extends $Layout {
    protected override paging(): RuleSet {
        return css`
            .pd-book.pa-turned .pa-page:not(.pa-open) { display: none; }
            .pd-book:not(.pa-turned) .pa-page.pa-spread { display: none; }
        `;
    }

    protected override areas(): RuleSet {
        return css`
            ${super.areas()}
            .pd-book.pa-layout:not(.pa-turned) .pd-head { display: grid; gap: calc(${({ theme }) => theme.space} / 4); align-content: end; padding: calc(${({ theme }) => theme.space} * 0.9167) calc(${({ theme }) => theme.space} * 1.5) calc(${({ theme }) => theme.space} * 0.5833); }
            .pd-book.pa-layout.pa-turned .pd-head { display: none; }
            .pd-book:not(.pa-turned) .pd-holds { padding-block-start: calc(${({ theme }) => theme.space} * 0.4167); }
            ${this.head()}
            ${this.list()}
            ${this.search()}
        `;
    }

    // The search's field at the head and its hits under it, the index's way worn by every list of conversations.
    protected search(): RuleSet {
        return css`
            .pd-book .pd-head .pd-paragraph.pd-search { order: 4; grid-column: 1 / -1; display: flex; align-items: center; gap: calc(${({ theme }) => theme.space} / 3); width: min(440px, 100%); margin: calc(${({ theme }) => theme.space} * 0.4167) 0 0; padding: calc(${({ theme }) => theme.space} * 0.2917) calc(${({ theme }) => theme.space} / 2); border: thin solid ${({ theme }) => theme.line}; border-radius: calc(${({ theme }) => theme.space} * 0.4167); background: ${({ theme }) => theme.side}; color: ${({ theme }) => theme.soft}; }
            .pd-book .pd-head .pd-search .pd-search-mark { font-style: normal; font-size: calc(1.1429 * ${({ theme }) => theme.size}); color: ${({ theme }) => theme.faint}; }
            .pd-book .pd-head .pd-search .pd-search-word { flex: 1; min-width: 0; border: 0; background: none; padding: 0; font-family: ${({ theme }) => theme.font}; font-size: ${({ theme }) => theme.size}; line-height: calc(1.4286 * ${({ theme }) => theme.size}); color: ${({ theme }) => theme.ink}; outline: none; }
            .pd-book .pd-head .pd-search .pd-search-word::placeholder { color: ${({ theme }) => theme.soft}; }
            .pd-book .pd-head .pd-search .pd-search-word::-webkit-search-cancel-button { cursor: pointer; }
            .pd-book:not(.pa-turned):has(.pd-chapter.pa-table-of-contents.pa-searching) .pd-pages .pd-chapter.pa-page.pa-volume { display: none; }
            .pd-book .pd-pages .pd-paragraph.pd-results { display: block; width: min(768px, 100%); margin: 0; }
            .pd-book .pd-pages .pd-results .pd-results-count { display: block; margin: calc(${({ theme }) => theme.space} * 0.8333) 0 0; font-family: ${({ theme }) => theme.font}; font-size: calc(0.8571 * ${({ theme }) => theme.size}); font-weight: 500; line-height: 1.5; letter-spacing: 0.02em; color: ${({ theme }) => theme.soft}; }
            .pd-book .pd-pages .pd-results .pd-results-count b { color: ${({ theme }) => theme.ink}; font-weight: 500; }
            .pd-book .pd-pages .pd-paragraph.pd-result { position: relative; display: grid; grid-template-columns: minmax(0, 1fr) auto auto; grid-template-areas: 'title exchanges day' 'synopsis synopsis synopsis'; align-items: baseline; column-gap: calc(${({ theme }) => theme.space} * 0.6667); margin: 0; padding: calc(${({ theme }) => theme.space} * 0.5833) 0 calc(${({ theme }) => theme.space} * 0.5417); border-block-end: thin solid rgba(11, 11, 11, .08); }
            .pd-book .pd-pages .pd-result .pd-result-title { grid-area: title; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-family: ${({ theme }) => theme.font}; font-size: calc(1.0714 * ${({ theme }) => theme.size}); line-height: 20px; color: ${({ theme }) => theme.ink}; }
            .pd-book .pd-pages .pd-result:hover .pd-result-title { color: ${({ theme }) => theme.accent}; }
            .pd-book .pd-pages .pd-result > a:has(> .pd-entry-open) { position: absolute; inset: 0; z-index: 1; }
            .pd-book .pd-pages .pd-result .pd-word.pd-entry-day { grid-area: day; min-width: 52px; text-align: end; font-family: ${({ theme }) => theme.font}; font-size: ${({ theme }) => theme.size}; line-height: 20px; color: ${({ theme }) => theme.soft}; white-space: nowrap; }
            .pd-book .pd-pages .pd-result .pd-result-synopsis { grid-area: synopsis; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; margin-block-start: 4px; font-family: ${({ theme }) => theme.serif}; font-size: ${({ theme }) => theme.size}; line-height: 1.5; color: ${({ theme }) => theme.soft}; }
            .pd-book .pd-pages .pd-result mark { background: #fff2a8; color: inherit; padding: 0 1px; border-radius: 2px; }
            @media (max-width: ${({ theme }) => theme.narrow}) {
                .pd-book .pd-head .pd-paragraph.pd-search { width: 100%; }
            }
        `;
    }

    protected head(): RuleSet {
        return css`
            .pd-book .pd-head header, .pd-book .pd-head header > .pd-scheme, .pd-book .pd-head .pd-switches { display: contents; }
            .pd-book .pd-head .pd-chapter.pa-cover > .pd-scheme, .pd-book .pd-head .pd-chapter.pa-cover > .pa-illustration, .pd-book .pd-head .pd-chapter.pa-cover .pd-byline, .pd-book .pd-head .pd-chapter.pa-cover .pd-subject-line { display: none; }
            .pd-book .pd-head .pd-chapter.pa-cover { display: contents; }
            .pd-book .pd-head .pd-project-head { display: contents; }
            .pd-book .pd-head .pd-crumbs { order: 1; display: flex; gap: calc(${({ theme }) => theme.space} / 3); font-family: ${({ theme }) => theme.font}; font-size: calc(0.8929 * ${({ theme }) => theme.size}); color: ${({ theme }) => theme.soft}; }
            .pd-book .pd-head .pd-crumbs i { font-style: normal; color: ${({ theme }) => theme.faint}; }
            .pd-book .pd-head .pd-crumbs .pd-word.pa-reference { color: inherit; text-decoration: none; }
            .pd-book .pd-head .pd-crumbs .pd-word.pa-reference:hover { color: ${({ theme }) => theme.accent}; }
            .pd-book .pd-head .pd-chapter.pa-cover > a { order: 2; }
            .pd-book .pd-head .pd-chapter.pa-cover .pd-title { margin: 0; font-family: ${({ theme }) => theme.serif}; font-size: calc(2.1429 * ${({ theme }) => theme.size}); font-weight: 600; line-height: 1.1; letter-spacing: -0.01em; color: ${({ theme }) => theme.heading}; }
            .pd-book .pd-head .pd-chapter.pa-cover .pd-title .pa-reference, .pd-book .pd-head .pd-chapter.pa-cover > a { color: inherit; text-decoration: none; }
            .pd-book .pd-head .pd-report { order: 3; display: flex; flex-wrap: wrap; gap: 4px calc(${({ theme }) => theme.space} * 0.6667); font-family: ${({ theme }) => theme.font}; font-size: calc(0.8929 * ${({ theme }) => theme.size}); color: ${({ theme }) => theme.soft}; }
            .pd-book .pd-head .pd-report b { font-weight: 500; color: ${({ theme }) => theme.ink}; }
            .pd-book .pd-head .pd-paragraph.pd-row-form { order: 3; justify-self: end; align-self: end; margin: 0; }
            .pd-book .pd-head .pd-row-form .pd-word.pd-switch { padding: 2px 10px; border: thin solid ${({ theme }) => theme.line}; border-radius: 999px; background: none; font-family: ${({ theme }) => theme.font}; font-size: calc(0.8214 * ${({ theme }) => theme.size}); font-weight: 500; line-height: 1.5; color: ${({ theme }) => theme.soft}; cursor: pointer; transition: color ${({ theme }) => theme.beat} ease, background ${({ theme }) => theme.beat} ease; }
            .pd-book .pd-head .pd-row-form .pd-word.pd-switch:hover { color: ${({ theme }) => theme.ink}; }
            .pd-book .pd-head .pd-row-form .pd-word.pd-switch[aria-pressed='true'] { background: ${({ theme }) => theme.heading}; border-color: ${({ theme }) => theme.heading}; color: ${({ theme }) => theme.paper}; }
            .pd-book.pa-layout:not(.pa-turned) .pd-head { grid-template-columns: minmax(0, 1fr) auto; }
            .pd-book .pd-head .pd-crumbs, .pd-book .pd-head .pd-chapter.pa-cover > a { grid-column: 1 / -1; }
            .pd-book .pd-head .pd-brief { order: 2; grid-column: 1 / -1; max-width: 72ch; font-family: ${({ theme }) => theme.serif}; font-size: calc(1.0714 * ${({ theme }) => theme.size}); line-height: 1.5; color: ${({ theme }) => theme.soft}; }
            .pd-book .pd-head .pd-instructions { order: 2; grid-column: 1 / -1; display: flex; gap: calc(${({ theme }) => theme.space} / 3); align-items: baseline; max-width: 72ch; font-family: ${({ theme }) => theme.font}; font-size: calc(0.9643 * ${({ theme }) => theme.size}); line-height: 1.5; color: ${({ theme }) => theme.ink}; }
            .pd-book .pd-head .pd-instructions b { flex: none; font-size: calc(0.75 * ${({ theme }) => theme.size}); font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; color: ${({ theme }) => theme.faint}; }
            .pd-book .pd-head .pd-instructions.pa-none { color: ${({ theme }) => theme.faint}; font-style: italic; }
            .pd-book .pd-head .pd-paragraph.pd-month-shape { order: 3; grid-column: 1 / -1; display: flex; align-items: flex-end; gap: 3px; width: min(440px, 100%); height: 58px; margin: calc(${({ theme }) => theme.space} / 2) 0 0; padding-block-end: 16px; }
            .pd-book .pd-head .pd-month-shape .pd-word { position: relative; flex: 1; display: flex; align-items: flex-end; height: 100%; min-width: 8px; }
            .pd-book .pd-head .pd-month-shape .pd-word > a { display: flex; align-items: flex-end; width: 100%; height: 100%; }
            .pd-book .pd-head .pd-month-shape .pd-month-bar { display: block; width: 100%; border-radius: 3px 3px 1px 1px; background: #c0c9df; transition: background ${({ theme }) => theme.beat}; }
            .pd-book .pd-head .pd-month-shape .pd-word:hover .pd-month-bar { background: ${({ theme }) => theme.accent}; }
            .pd-book .pd-head .pd-month-shape .pd-word b { position: absolute; left: 0; top: 100%; margin-block-start: 3px; font-family: ${({ theme }) => theme.font}; font-size: calc(0.7143 * ${({ theme }) => theme.size}); font-weight: 500; line-height: 1; color: ${({ theme }) => theme.faint}; white-space: nowrap; }
            @media (max-width: ${({ theme }) => theme.narrow}) {
                .pd-book .pd-head .pd-paragraph.pd-month-shape { width: 100%; height: 48px; }
            }
        `;
    }

    protected list(): RuleSet {
        return css`
            .pd-book:not(.pa-turned) .pd-pages { padding: 0 calc(${({ theme }) => theme.space} * 1.5) calc(${({ theme }) => theme.space} * 5); }
            .pd-book:not(.pa-turned) .pd-pages .pd-chapter.pa-page.pa-synopsis { max-width: 768px; margin: 0; }
            .pd-book:not(.pa-turned) .pd-pages .pd-chapter.pa-page.pa-synopsis:not(.pa-volume) { padding: calc(${({ theme }) => theme.space} / 4) 0 calc(${({ theme }) => theme.space} / 2); }
            .pd-book:not(.pa-turned) .pd-pages .pd-chapter.pa-page.pa-synopsis:not(.pa-volume) > a, .pd-book:not(.pa-turned) .pd-pages .pd-chapter.pa-page.pa-synopsis:not(.pa-volume) .pd-turn { display: none; }
            .pd-book:not(.pa-turned) .pd-pages .pd-chapter.pa-page.pa-synopsis:not(.pa-volume) .pd-paragraph { max-width: 72ch; margin: 0; font-family: ${({ theme }) => theme.serif}; font-size: calc(1.0714 * ${({ theme }) => theme.size}); line-height: 1.5; color: ${({ theme }) => theme.soft}; }
            .pd-book:not(.pa-turned) .pd-pages .pd-chapter.pa-page.pa-volume { position: relative; display: grid; grid-template-columns: minmax(0, 1fr) auto auto auto; grid-template-areas: 'month month month month' 'title count day open' 'synopsis synopsis synopsis synopsis'; align-items: baseline; column-gap: calc(${({ theme }) => theme.space} * 0.6667); padding: calc(${({ theme }) => theme.space} * 0.625) 0 calc(${({ theme }) => theme.space} * 0.5833); border-block-end: thin solid rgba(11, 11, 11, .08); }
            .pd-book:not(.pa-turned) .pd-pages .pa-volume .pd-word.pd-way-on { grid-area: open; position: relative; z-index: 2; }
            .pd-book:not(.pa-turned) .pd-pages .pa-volume .pd-way-on-link { display: inline-block; padding: 0 6px; font-family: ${({ theme }) => theme.font}; font-size: calc(0.75 * ${({ theme }) => theme.size}); font-weight: 500; line-height: 20px; letter-spacing: 0.04em; text-transform: uppercase; color: ${({ theme }) => theme.faint}; text-decoration: none; white-space: nowrap; }
            .pd-book:not(.pa-turned) .pd-pages .pa-volume .pd-way-on-link:hover { color: ${({ theme }) => theme.accent}; }
            .pd-book:not(.pa-turned) .pd-pages .pa-volume.pa-returned, .pd-book .pd-pages .pd-result.pa-returned { background: linear-gradient(90deg, #eef4fa, transparent 60%); }
            .pd-book:not(.pa-turned) .pd-pages .pa-volume.pa-returned .pd-word.pd-entry-count::before { content: 'you were here'; margin-inline-end: calc(${({ theme }) => theme.space} * 0.4167); padding: 0 7px; border-radius: 999px; background: #eff4fa; font-size: calc(0.75 * ${({ theme }) => theme.size}); font-weight: 500; color: ${({ theme }) => theme.accent}; }
            .pd-book:not(.pa-turned) .pd-pages .pa-volume .pd-word.pd-entry-month { grid-area: month; display: flex; align-items: baseline; gap: 8px; margin: calc(${({ theme }) => theme.space} * 1.0833) 0 calc(${({ theme }) => theme.space} * 0.4167); font-family: ${({ theme }) => theme.font}; font-size: calc(0.8571 * ${({ theme }) => theme.size}); font-weight: 500; letter-spacing: 0.02em; color: ${({ theme }) => theme.soft}; }
            .pd-book:not(.pa-turned) .pd-pages .pa-volume > a.pa-self-reference { grid-area: title; min-width: 0; }
            .pd-book:not(.pa-turned) .pd-pages .pa-volume .pd-title { margin: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-family: ${({ theme }) => theme.font}; font-size: calc(1.0714 * ${({ theme }) => theme.size}); font-weight: 400; line-height: 20px; color: ${({ theme }) => theme.ink}; }
            .pd-book:not(.pa-turned) .pd-pages .pa-volume:hover .pd-title { color: ${({ theme }) => theme.accent}; }
            .pd-book:not(.pa-turned) .pd-pages .pa-volume .pd-word.pd-entry-count { grid-area: count; font-family: ${({ theme }) => theme.font}; font-size: calc(0.8571 * ${({ theme }) => theme.size}); line-height: 20px; color: ${({ theme }) => theme.faint}; white-space: nowrap; font-variant-numeric: tabular-nums; }
            .pd-book:not(.pa-turned) .pd-pages .pa-volume > time.pd-date { grid-area: day; min-width: 52px; text-align: end; font-family: ${({ theme }) => theme.font}; font-size: ${({ theme }) => theme.size}; line-height: 20px; color: ${({ theme }) => theme.soft}; white-space: nowrap; }
            .pd-book:not(.pa-turned) .pd-pages .pa-volume .pd-paragraph.pa-brief, .pd-book:not(.pa-turned) .pd-pages .pa-volume .pd-paragraph:not(.pa-brief), .pd-book:not(.pa-turned) .pd-pages .pa-volume .pd-turn { display: none; }
            .pd-book.pa-synopses:not(.pa-turned) .pd-pages .pa-volume .pd-paragraph:not(.pa-brief) { grid-area: synopsis; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; margin: 4px 0 0; font-family: ${({ theme }) => theme.serif}; font-size: ${({ theme }) => theme.size}; line-height: 1.5; color: ${({ theme }) => theme.soft}; }
            .pd-book.pa-synopses:not(.pa-turned) .pd-pages .pa-volume { align-items: baseline; }
            .pd-book:not(.pa-turned) .pd-pages .pa-volume > a:has(> .pd-entry-open) { position: absolute; inset: 0; z-index: 1; }
            .pd-book .pd-pages .pd-word.pd-entry-open { display: block; position: absolute; inset: 0; }
            @media (max-width: ${({ theme }) => theme.narrow}) {
                .pd-book:not(.pa-turned) .pd-holds { padding: calc(${({ theme }) => theme.space} / 4) calc(${({ theme }) => theme.space} / 3); }
                .pd-book:not(.pa-turned) .pd-pages { padding: 0 calc(${({ theme }) => theme.space} * 0.6667) calc(${({ theme }) => theme.space} * 2.5); }
                .pd-book:not(.pa-turned) .pd-pages .pa-volume .pd-word.pd-entry-count { display: none; }
                .pd-book.pa-layout:not(.pa-turned) .pd-head { padding: calc(${({ theme }) => theme.space} * 0.75) calc(${({ theme }) => theme.space} * 0.6667) calc(${({ theme }) => theme.space} / 3); }
            }
        `;
    }
}

export class $ProjectLayout extends $ListLayout {
    protected override areas(): RuleSet {
        return css`
            ${super.areas()}
            .pd-book.pa-layout:not(.pa-turned) {
                grid-template-columns: ${({ theme }) => theme.holdsColumn} minmax(0, 1fr) 320px;
                grid-template-areas: 'library library library' 'holds head knowledge' 'holds pages knowledge';
            }
            .pa-layout .pd-knowledge-column { grid-area: knowledge; min-width: 0; overflow-y: auto; }
            .pd-book.pa-turned .pd-knowledge-column { display: none; }
            .pd-book:not(.pa-turned) .pd-pages .pd-chapter.pa-page.pa-synopsis:not(.pa-volume) { display: none; }
            @media (max-width: ${({ theme }) => theme.narrow}) {
                .pd-book.pa-layout:not(.pa-turned) .pd-knowledge-column { order: 4; }
            }
        `;
    }
}

// The rows of a list of conversations: each entry takes the month it opens, its count of exchanges and the way into
// its conversation, laid over the row, in the order given; a type of book may lay its own open over the row.
export const rows = (author: $Chemical, entries: $Chapter[], open: Component<$EntryOpen> = entryOpen): void => {
    const EntryCount = $(entryCount);
    const EntryMonth = $(entryMonth);
    const EntryOpen = $(open);
    const Reference = $(reference);
    let month = '';
    for (const entry of entries) {
        const own = monthOf(entry);
        const conversation = entry.annotations.expressed($Volume)?.cover?.mention?.identifier;
        entry.text.add(author,
            ...(own !== month ? [<EntryMonth key="month" />] : []),
            <EntryCount key="count" />,
            ...(conversation === undefined ? [] : [(
                <EntryOpen
                    key="open"
                    entry={entry}
                >
                    <Reference>{conversation}</Reference>
                </EntryOpen>
            )])
        );
        month = own;
    }
};

export class $ProjectManual extends $Manual {
    override specification = new ProjectManualSpecification();
    get entries(): $Chapter[] {
        return this.text.find($Chapter).filter(chapter => chapter.is($Synopsis) && chapter !== this.synopsis);
    }
    get files(): $Chapter[] {
        return this.chapters.filter(chapter => chapter.is($Spread) && chapter.is($Append));
    }
    get project(): $Chapter | undefined {
        return this.chapters.find(chapter => chapter.is($Spread) && !chapter.is($Append));
    }
    // What the project is for, as its own chapter says it in the brief, and its instructions where the application set any.
    get brief(): string {
        const paragraph = this.project?.text.find($Paragraph).find(one => one.is($Brief));
        return paragraph === undefined ? '' : html.copy(paragraph.text).replace(/\s+/gu, ' ').trim();
    }
    get instructions(): { set: boolean; words: string } | undefined {
        const section = this.project?.text.find($Section).find(one => one.canonical?.name === 'Its instructions');
        if (section === undefined) return undefined;
        const words = section.text.find($Paragraph).map(paragraph => html.copy(paragraph.text).replace(/\s+/gu, ' ').trim()).join(' ');
        return { set: !/^No instructions were set/u.test(words), words };
    }
    // The months the table lists, oldest first, each with its count of conversations and its place in the side.
    get months(): { name: string; count: number; place: string | undefined }[] {
        return (this.table?.text.find($Section) ?? [])
            .map(section => ({ section, name: section.canonical?.name ?? '', count: section.text.find($Paragraph).filter(paragraph => this.entries.includes(this.chapterAt(contentOf(paragraph)?.identifier ?? '') as $Chapter)).length }))
            .filter(month => month.count > 0 && !Number.isNaN(Date.parse(month.name)))
            .sort((a, b) => Date.parse(a.name) - Date.parse(b.name))
            .map(month => ({ name: month.name, count: month.count, place: month.section.mention === undefined ? undefined : this.placeWithin(month.section.mention.identifier) }));
    }
    override get laidOutChapters(): ($Chapter | undefined)[] {
        return [...super.laidOutChapters, ...this.entries];
    }
    override get pages(): $Chapter[] {
        const entries = [...this.entries].sort((a, b) => dayOf(b).localeCompare(dayOf(a)));
        return [...super.pages, ...entries];
    }
    // The page opens on the list of its conversations, and turns to a chapter only when asked for one.
    override get open(): $Chapter | undefined {
        return this.$bookmark === undefined ? undefined : this.chapterAt(this.$bookmark);
    }
    get index(): $Index | undefined {
        return this.table?.annotations.expressed($Index);
    }
    override get searchHint(): string {
        return 'a word in this project, its conversations and its files';
    }

    // What a word finds here: the conversations whose title or synopsis holds it, newest first, and the files whose name does.
    override found(word: string): $Writing[] {
        const lower = word.trim().toLowerCase();
        if (lower === '') return [];
        const entries = this.pages.filter(chapter => this.entries.includes(chapter) && this.wordsOf(chapter).lower.includes(lower));
        const files = this.files.filter(file => (file.title?.name ?? '').toLowerCase().includes(lower));
        return [...entries, ...files];
    }

    // A hit that is an entry leads into the conversation's own page, as the rows do; a file leads to its chapter here.
    override placeOf(writing: $Writing): string | undefined {
        return writing.annotations.expressed($Volume)?.cover?.mention?.identifier ?? super.placeOf(writing);
    }

    override countOfFound(found: $Writing[], word: string): ReactNode {
        const files = found.filter(hit => this.files.includes(hit as $Chapter)).length;
        const conversations = found.length - files;
        return (
            <>
                <b>{conversations}</b> of {this.entries.length} conversations and <b>{files}</b> of {this.files.length} files say “{word}”
            </>
        );
    }

    // The hits draw themselves and nothing when no word stands, so the book reads no word here and a letter typed never
    // redraws the book.
    override aboveThePages(): ReactNode {
        const Results = $(results);
        return (
            <Results chapter={this.table} />
        );
    }

    override write(): ReactNode {
        const Knowledge = $(knowledge);
        return (
            <>
                {super.write()}
                <div className="pd-knowledge-column">
                    <Knowledge chapter={this.cover} />
                </div>
            </>
        );
    }

    override head(): ReactNode {
        const Cover = $(this.cover!);
        const ProjectHead = $(projectHead);
        const MonthShape = $(monthShape);
        const RowForm = $(rowForm);
        const Search = $(search);
        return (
            <>
                <Cover />
                <ProjectHead chapter={this.cover} />
                <MonthShape chapter={this.table} />
                <RowForm chapter={this.cover} />
                <Search chapter={this.cover} />
            </>
        );
    }

    // The rows of the conversations, newest first; a type of book lays its own way into each.
    protected rows(entries: $Chapter[]): void {
        rows(this, entries);
    }

    protected override $Bound(): void {
        this.rows(this.pages.filter(chapter => this.entries.includes(chapter)));
        const index = this.index;
        if (index !== undefined) {
            index.$folded = true;
            index.$counted = true;
            index.$dated = true;
            index.$searched = true;
        }
        super.$Bound();
    }
}

export class ProjectManualSpecification extends ManualSpecification {
    @specify('every entry of a project manual stands for a conversation, holding its synopsis')
    $everyEntryStandsForAConversation(book: $ProjectManual): void {
        const astray = book.entries.find(chapter => chapter.annotations.expressed($Synopsis)?.means === undefined);
        $check(astray === undefined, `every entry of a project manual stands for a conversation, holding its synopsis, and "${astray?.title?.name}" stands for none`);
    }

    @specify('a project manual has one chapter about the project, which appends no file')
    $hasOneProjectChapter(book: $ProjectManual): void {
        $check(book.chapters.filter(chapter => chapter.is($Spread) && !chapter.is($Append)).length === 1,
            'a project manual has one chapter about the project, which appends no file, and this one has none or more than one');
    }

    @specify('an entry of a project manual files a file only when a chapter may')
    override $onlyAChapterAppends(book: $ProjectManual): void {
        const filing = [...book.chapters, ...book.entries];
        $check(book.text.find($Chapter).every(chapter => filing.includes(chapter) || !chapter.is($Append)),
            'only an ordinary chapter or an entry files a file, and here a cover, a synopsis or a table of contents files one');
    }
}

export const RowForm = $($RowForm);
export const EntryCount = $($EntryCount);
export const EntryMonth = $($EntryMonth);
export const ProjectHead = $($ProjectHead);
export const MonthShape = $($MonthShape);
export const Knowledge = $($Knowledge);
export const ListLayout = $($ListLayout);
export const ProjectLayout = $($ProjectLayout);
export const ProjectManual = $($ProjectManual);
const rowForm = RowForm;
const entryCount = EntryCount;
const entryMonth = EntryMonth;
const projectHead = ProjectHead;
const monthShape = MonthShape;
const knowledge = Knowledge;
$(ProjectManual, layout)(ProjectLayout);
