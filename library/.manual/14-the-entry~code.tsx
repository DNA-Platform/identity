import { ElementType, ReactNode } from 'react';
import { $, $check, $Chemical, selection } from '@dna-platform/chemistry';
import { $Annotation, $Chapter, $Content, $Format, $Paragraph, $Parenthetical, $Part, $Section, $TableOfContents, $Word, $Writing, AnnotationSpecification, ContainerProps, Reference as reference, Word as word, specify } from '@dna-platform/public';
import type { $LibraryBook } from './1-the-book~code.tsx';
import { FileTab as fileTab, fileNameOf } from './2-the-listing~code.tsx';
import { $Dated } from './4-the-date~code.tsx';
import { $Switch } from './9-the-switch~code.tsx';
import { $Spread } from './10-the-manual~code.tsx';
import { Split as split } from './10-the-manual~annotations.tsx';
import { $Coloured } from './18-the-colour~code.tsx';
import { $Scheme, $Volume } from './19-the-cover~code.tsx';

const chevronSvg = '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3.5 10.5 8 6 12.5"/></svg>';
const folderSvg = '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linejoin="round" stroke-linecap="round"><rect class="ground" x="0.75" y="0.75" width="14.5" height="14.5"/><path d="M3.5 5.5h3l1.5 1.5h4.5v5h-9z"/></svg>';

export class $Entry extends $Format {
    specification = new EntrySpecification();
    style: ElementType = selection.div<{ $schemeDeclarations?: string }>`
        ${props => props.$schemeDeclarations === undefined ? '' : `.pa-entry { ${props.$schemeDeclarations} }`}
    `;
    protected _painted!: ElementType;
    get place(): string { return contentOf(this.parent as $Writing)!.identifier; }
    get referencedChapter(): $Chapter | undefined { return (this.book as $LibraryBook).chapterAt(this.place); }
    get cover(): $Chapter | undefined {
        return this.referencedChapter?.annotations.expressed($Volume)?.cover ?? (this.book as $LibraryBook).coverOf(this.place);
    }
    get schemeDeclarations(): string | undefined {
        const scheme = this.cover?.annotations.expressed($Scheme);
        if (scheme !== undefined) return scheme.declarations;
        const colour = this.referencedChapter?.annotations.expressed($Coloured)?.colour;
        return colour === undefined ? undefined : `--colour: ${colour};`;
    }

    $Entry(...chemicals: $Chemical[]) {
        this.$Format(...chemicals);
        const Painted = this.style;
        this._painted = (props: { children?: ReactNode }) => (
            <Painted
                $schemeDeclarations={this.schemeDeclarations}
                {...props}
            />
        );
    }

    override defines(writing: $Writing): void {
        writing.classes.add(this, 'pa-entry');
        writing.containers.add(this, this._painted);
        if (this.place === this.book?.$bookmark || this.place === (this.book as $LibraryBook).open?.mention?.identifier) writing.classes.add(this, 'pa-open');
    }

    override erase(writing: $Writing): void {
        writing.classes.revert(this);
        writing.containers.revert(this);
    }
}

export class $Appendix extends $Annotation {
    specification = new AppendixSpecification();

    override defines(writing: $Writing): void {
        writing.classes.add(this, 'pa-appendix');
    }

    override erase(writing: $Writing): void {
        writing.classes.revert(this);
    }
}

export class $Index extends $Annotation {
    specification = new IndexSpecification();
    $folded = false;
    $counted = false;
    $dated = false;
    get sections(): $Section[] {
        return this.chapter!.text.find($Section);
    }
    get entries(): $Paragraph[] {
        return this.sections.flatMap(section => section.text.find($Paragraph)).filter(paragraph => !paragraph.is($Parenthetical) && contentOf(paragraph) !== undefined);
    }

    chapterOf(paragraph: $Paragraph): $Chapter | undefined {
        const place = contentOf(paragraph)?.identifier;
        return place === undefined ? undefined : (this.book as $LibraryBook).chapterAt(place);
    }

    protected override $Bound(): void {
        const Entry = $(entry);
        const FoldChevron = $(foldChevron);
        const FileTab = $(fileTab);
        const book = this.book as $LibraryBook;
        for (const paragraph of this.entries) {
            paragraph.annotations.add(this,
                <Entry />
            );
            const spread = book.chapterAt(contentOf(paragraph)!.identifier)?.annotations.expressed($Spread);
            if (spread === undefined) continue;
            const files = spread.files;
            paragraph.text.add(this,
                <FoldChevron
                    foldedWriting={files.length === 0 ? undefined : paragraph}
                    annotation={folded}
                />,
                ...files.map(file => (
                    <FileTab
                        key={fileNameOf(file)}
                        file={file}
                        annotation={split}
                        family={spread.filePanelStates}
                    />
                ))
            );
        }
        const EntryDay = $(entryDay);
        const SectionCount = $(sectionCount);
        const entries = new Set(book.entries);
        const leadsToAnEntry = (paragraph: $Paragraph): boolean => { const chapter = this.chapterOf(paragraph); return chapter !== undefined && entries.has(chapter); };
        if (this.$dated)
            for (const paragraph of this.entries) {
                const entry = this.chapterOf(paragraph);
                if (entry === undefined || !entries.has(entry) || !entry.is($Dated)) continue;
                paragraph.text.add(this,
                    <EntryDay entry={entry} />
                );
            }
        for (const section of this.sections) {
            if (this.$folded) section.$is = [folded];
            const heading = section.canonical;
            if (this.$counted && heading !== undefined && section.text.find($Paragraph).some(leadsToAnEntry))
                heading.text.add(this,
                    <SectionCount section={section} />
                );
        }
        super.$Bound();
    }
}

export class $EntryDay extends $Word {
    $entry?: $Chapter;

    override write(): ReactNode {
        const [year, month, day] = (this.$entry?.annotations.expressed($Dated)?.date?.date ?? '').split('-');
        if (year === undefined || month === undefined || day === undefined) return undefined;
        return new Date(Date.UTC(Number(year), Number(month) - 1, Number(day.slice(0, 2)))).toLocaleString('en-GB', { day: 'numeric', month: 'short', timeZone: 'UTC' });
    }

    protected override $Define(): void {
        super.$Define();
        this.classes.add(this, 'pd-entry-day');
    }
}

export class $SectionCount extends $Word {
    $section?: $Section;

    override write(): ReactNode {
        return String(this.$section?.text.find($Paragraph).filter(paragraph => contentOf(paragraph) !== undefined).length ?? 0);
    }

    protected override $Define(): void {
        super.$Define();
        this.classes.add(this, 'pd-section-count');
    }
}

export class IndexSpecification extends AnnotationSpecification {
    @specify('an index is a table of contents')
    $isATableOfContents(writing: $Writing): void {
        $check(writing.is($TableOfContents), 'an index is a table of contents, and this chapter is not one');
    }
}

export class AppendixSpecification extends AnnotationSpecification {
    @specify('the appendix is a section of the table of contents')
    $isASectionOfTheTable(writing: $Writing): void {
        $check(writing instanceof $Section && writing.chapter?.is($TableOfContents) === true,
            'the appendix is a section of the table of contents, and this is not one');
    }
}

export class EntrySpecification extends AnnotationSpecification {
    @specify('an entry is a row that leads somewhere')
    $isARowThatLeadsSomewhere(writing: $Writing): void {
        $check(writing instanceof $Paragraph && contentOf(writing) !== undefined,
            'an entry is a row that leads somewhere, and this is not one');
    }
}

export class $Folded extends $Annotation {
    specification = new FoldedSpecification();

    override defines(writing: $Writing): void {
        writing.classes.add(this, 'pa-folded');
    }

    override erase(writing: $Writing): void {
        writing.classes.revert(this);
    }
}

export class $FoldChevron extends $Switch {
    $foldedWriting?: $Writing;
    override get on(): boolean { return this.$foldedWriting !== undefined && [this.$foldedWriting.$is].flat().includes(this.$annotation); }

    override container(props: ContainerProps): ReactNode {
        return super.container({ ...props, disabled: this.$foldedWriting === undefined, onClick: event => { event.preventDefault(); this.press(); } });
    }

    override press(): void {
        const foldedWriting = this.$foldedWriting;
        if (foldedWriting === undefined) return;
        const annotations = [foldedWriting.$is].flat();
        foldedWriting.$is = this.on ? annotations.filter(annotation => annotation !== this.$annotation) : [this.$annotation, ...annotations];
    }

    override write(): ReactNode {
        return (
            <span
                className="pd-drawing"
                dangerouslySetInnerHTML={{ __html: chevronSvg }}
            />
        );
    }

    protected override $Define(): void {
        super.$Define();
        this.classes.add(this, 'pd-fold-chevron');
    }
}

export class $TreeFolder extends $Format {
    specification = new TreeFolderSpecification();
    tree: ElementType = selection.div`
        .pd-book .pd-holds &.pd-tree-folder .pd-fold-chevron, .pd-book .pd-holds &.pd-tree-folder .pd-tree-folder-mark, .pd-book .pd-holds &.pd-tree-folder .pa-entry .pd-file-tab { display: none; }
        .pd-book.pa-manual .pd-holds &.pd-tree-folder:not(.pa-open) { display: none; }
        .pd-book .pd-holds &.pd-tree-folder.pa-open { position: relative; }
        .pd-book .pd-holds &.pd-tree-folder.pa-open .pd-section { margin: 0 0 calc(${({ theme }) => theme.space} / 3); }
        .pd-book .pd-holds &.pd-tree-folder.pa-open .pd-sentence.pd-heading {
            display: flex;
            align-items: center;
            height: calc(1.9286 * ${({ theme }) => theme.size});
            margin: 0;
            padding: 0 calc(${({ theme }) => theme.space} * 0.5833) 0 calc(${({ theme }) => theme.space} * 2.3333);
            border: 0;
            font-size: calc(0.9286 * ${({ theme }) => theme.size});
            font-weight: 400;
            line-height: calc(1.9286 * ${({ theme }) => theme.size});
            letter-spacing: 0;
            text-transform: none;
            color: ${({ theme }) => theme.sideInk};
            transition: background ${({ theme }) => theme.beat} ease;
        }
        .pd-book .pd-holds &.pd-tree-folder.pa-open .pd-heading:hover { background: color-mix(in oklab, ${({ theme }) => theme.sky} 30%, white); }
        .pd-book .pd-holds &.pd-tree-folder.pa-open .pd-heading .pa-reference { color: inherit; text-decoration: none; }
        .pd-book .pd-holds &.pd-tree-folder.pa-open .pd-fold-chevron {
            display: grid;
            place-items: center;
            width: calc(1.1429 * ${({ theme }) => theme.size});
            height: calc(1.1429 * ${({ theme }) => theme.size});
            padding: 0;
            border: 0;
            border-radius: 0;
            background: none;
            color: #a5aebb;
            cursor: pointer;
            transition: transform 0.18s ease, color ${({ theme }) => theme.beat} ease;
        }
        .pd-book .pd-holds &.pd-tree-folder.pa-open .pd-fold-chevron .pd-drawing { display: block; width: calc(0.7143 * ${({ theme }) => theme.size}); height: calc(0.7143 * ${({ theme }) => theme.size}); }
        .pd-book .pd-holds &.pd-tree-folder.pa-open .pd-fold-chevron svg, .pd-book .pd-holds &.pd-tree-folder.pa-open .pd-tree-folder-mark svg, .pd-book .pd-holds &.pd-tree-folder.pa-open .pd-file-tab svg { display: block; width: 100%; height: 100%; }
        .pd-book .pd-holds &.pd-tree-folder.pa-open .pd-word.pd-fold-chevron[aria-pressed='true'] { color: #a5aebb; background: none; border-color: transparent; }
        .pd-book .pd-holds &.pd-tree-folder.pa-open .pd-fold-chevron[aria-pressed='false'] { transform: rotate(90deg); }
        .pd-book .pd-holds &.pd-tree-folder.pa-open .pd-fold-chevron:hover { color: ${({ theme }) => theme.ink}; }
        .pd-book .pd-holds &.pd-tree-folder.pa-open .pd-fold-chevron { position: absolute; top: calc(${({ theme }) => theme.space} * 0.2292); left: calc(${({ theme }) => theme.space} * 0.4167); }
        .pd-book .pd-holds &.pd-tree-folder.pa-open .pd-tree-folder-mark {
            display: block;
            position: absolute;
            top: calc(${({ theme }) => theme.space} * 0.2292);
            left: calc(${({ theme }) => theme.space} * 1.375);
            width: calc(1.1429 * ${({ theme }) => theme.size});
            height: calc(1.1429 * ${({ theme }) => theme.size});
            color: #8a94a3;
        }
        .pd-book .pd-holds &.pd-tree-folder.pa-open .pd-tree-folder-mark .ground { fill: #f1f3f5; stroke: #8a94a3; stroke-width: 1.5; }
        .pd-book .pd-holds &.pd-tree-folder.pa-open .pa-folded .pd-paragraph.pa-entry { display: none; }
        .pd-book .pd-holds &.pd-tree-folder.pa-open .pd-paragraph.pa-entry {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: flex-start;
            gap: 0 calc(${({ theme }) => theme.space} * 0.2917);
            margin: 0;
            min-height: calc(1.9286 * ${({ theme }) => theme.size});
            padding: 0 calc(${({ theme }) => theme.space} * 0.5833) 0 calc(${({ theme }) => theme.space} * 1.1667);
            border-radius: 0;
            font-size: calc(0.9286 * ${({ theme }) => theme.size});
            font-weight: 400;
            line-height: calc(1.9286 * ${({ theme }) => theme.size});
            color: ${({ theme }) => theme.sideInk};
            cursor: pointer;
            transition: color ${({ theme }) => theme.beat} ease;
        }
        .pd-book .pd-holds &.pd-tree-folder.pa-open .pd-paragraph.pa-entry::before { content: none; }
        .pd-book .pd-holds &.pd-tree-folder.pa-open .pa-entry .pd-fold-chevron { order: -2; position: static; }
        .pd-book .pd-holds &.pd-tree-folder.pa-open .pa-entry .pd-fold-chevron[disabled] { visibility: hidden; }
        .pd-book .pd-holds &.pd-tree-folder.pa-open .pa-entry .pd-icon { order: -1; }
        .pd-book .pd-holds &.pd-tree-folder.pa-open .pa-entry .pa-content { flex: 1; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
        .pd-book .pd-holds &.pd-tree-folder.pa-open .pa-entry:hover { background: linear-gradient(color-mix(in oklab, ${({ theme }) => theme.sky} 40%, white), color-mix(in oklab, ${({ theme }) => theme.sky} 40%, white)) left top / 100% calc(1.9286 * ${({ theme }) => theme.size}) no-repeat; }
        .pd-book .pd-holds &.pd-tree-folder.pa-open .pd-paragraph.pa-entry.pa-open {
            background: linear-gradient(var(--band-ink), var(--band-ink)) left top / 3px calc(1.9286 * ${({ theme }) => theme.size}) no-repeat, linear-gradient(color-mix(in oklab, ${({ theme }) => theme.sky} 72%, white), color-mix(in oklab, ${({ theme }) => theme.sky} 72%, white)) left top / 100% calc(1.9286 * ${({ theme }) => theme.size}) no-repeat;
            color: var(--band-ink);
            font-weight: 400;
            box-shadow: none;
        }
        .pd-book .pd-holds &.pd-tree-folder.pa-open .pa-number { order: 1; margin: 0; font-size: calc(0.75 * ${({ theme }) => theme.size}); color: color-mix(in oklch, var(--foot-ink) 48%, white); font-variant-numeric: tabular-nums; }
        .pd-book .pd-holds &.pd-tree-folder.pa-open .pd-paragraph.pa-entry .pd-file-tab {
            order: 2;
            flex: 0 0 calc(100% + ${({ theme }) => theme.space} * 1.75);
            margin: 0 calc(${({ theme }) => theme.space} * -0.5833) 0 calc(${({ theme }) => theme.space} * -1.1667);
            padding: 0 calc(${({ theme }) => theme.space} * 0.5833) 0 calc(${({ theme }) => theme.space} * 2.875);
        }
        .pd-book .pd-holds &.pd-tree-folder.pa-open .pd-paragraph.pa-entry.pa-folded .pd-file-tab { display: none; }
        .pd-book .pd-holds &.pd-tree-folder.pa-open .pd-paragraph.pa-entry .pd-file-tab {
            display: flex;
            align-items: center;
            gap: calc(${({ theme }) => theme.space} * 0.2917);
            height: calc(1.9286 * ${({ theme }) => theme.size});
            border: 0;
            border-radius: 0;
            background: none;
            font: inherit;
            font-size: calc(0.9286 * ${({ theme }) => theme.size});
            font-weight: 400;
            line-height: calc(1.9286 * ${({ theme }) => theme.size});
            color: ${({ theme }) => theme.sideInk};
            text-align: start;
            cursor: pointer;
            transition: background ${({ theme }) => theme.beat} ease, color ${({ theme }) => theme.beat} ease;
        }
        .pd-book .pd-holds &.pd-tree-folder.pa-open .pd-file-tab .pd-drawing { flex: none; width: ${({ theme }) => theme.size}; height: ${({ theme }) => theme.size}; color: #a5aebb; transition: color ${({ theme }) => theme.beat} ease; }
        .pd-book .pd-holds &.pd-tree-folder.pa-open .pd-file-tab:hover { background: color-mix(in oklab, ${({ theme }) => theme.sky} 40%, white); color: ${({ theme }) => theme.ink}; }
        .pd-book.pa-split .pd-holds &.pd-tree-folder.pa-open .pd-paragraph.pa-entry .pd-file-tab[aria-pressed='true'], .pd-book.pa-code-forward .pd-holds &.pd-tree-folder.pa-open .pd-paragraph.pa-entry .pd-file-tab[aria-pressed='true'] { color: ${({ theme }) => theme.skyInk}; font-weight: 500; background: color-mix(in oklab, ${({ theme }) => theme.sky} 45%, white); }
        .pd-book.pa-split .pd-holds &.pd-tree-folder.pa-open .pd-paragraph.pa-entry .pd-file-tab[aria-pressed='true'] .pd-drawing, .pd-book.pa-code-forward .pd-holds &.pd-tree-folder.pa-open .pd-paragraph.pa-entry .pd-file-tab[aria-pressed='true'] .pd-drawing { color: var(--colour); }
        .pd-book .pd-holds &.pd-tree-folder.pa-foldable { position: relative; }
        .pd-book .pd-holds &.pd-tree-folder.pa-foldable .pd-section { margin: 0 0 calc(${({ theme }) => theme.space} / 6); }
        .pd-book .pd-holds &.pd-tree-folder.pa-foldable .pd-sentence.pd-heading { display: flex; align-items: center; gap: calc(${({ theme }) => theme.space} / 3); height: calc(2.1429 * ${({ theme }) => theme.size}); margin: 0; padding: 0 calc(${({ theme }) => theme.space} * 0.5833) 0 calc(${({ theme }) => theme.space} * 1.5); border: 0; font-size: calc(0.9286 * ${({ theme }) => theme.size}); font-weight: 500; line-height: 1; letter-spacing: 0; text-transform: none; color: ${({ theme }) => theme.sideInk}; cursor: pointer; transition: background ${({ theme }) => theme.beat} ease; }
        .pd-book .pd-holds &.pd-tree-folder.pa-foldable .pd-heading:hover { background: color-mix(in oklab, ${({ theme }) => theme.sky} 30%, white); }
        .pd-book .pd-holds &.pd-tree-folder.pa-foldable .pd-heading .pa-reference { color: inherit; text-decoration: none; }
        .pd-book .pd-holds &.pd-tree-folder.pa-foldable .pd-fold-chevron { display: grid; place-items: center; position: absolute; top: calc(${({ theme }) => theme.space} * 0.3125); left: calc(${({ theme }) => theme.space} * 0.5); width: calc(1.1429 * ${({ theme }) => theme.size}); height: calc(1.1429 * ${({ theme }) => theme.size}); padding: 0; border: 0; border-radius: 0; background: none; color: #a5aebb; cursor: pointer; transition: transform 0.18s ease, color ${({ theme }) => theme.beat} ease; }
        .pd-book .pd-holds &.pd-tree-folder.pa-foldable .pd-fold-chevron .pd-drawing { display: block; width: calc(0.7143 * ${({ theme }) => theme.size}); height: calc(0.7143 * ${({ theme }) => theme.size}); }
        .pd-book .pd-holds &.pd-tree-folder.pa-foldable .pd-fold-chevron svg { display: block; width: 100%; height: 100%; }
        .pd-book .pd-holds &.pd-tree-folder.pa-foldable .pd-fold-chevron[aria-pressed='false'] { transform: rotate(90deg); }
        .pd-book .pd-holds &.pd-tree-folder.pa-foldable .pd-fold-chevron:hover { color: ${({ theme }) => theme.ink}; }
        .pd-book .pd-holds &.pd-tree-folder.pa-foldable .pd-tree-folder-mark, .pd-book .pd-holds &.pd-tree-folder.pa-foldable .pa-entry .pd-file-tab, .pd-book .pd-holds &.pd-tree-folder.pa-foldable .pa-entry .pd-fold-chevron { display: none; }
        .pd-book .pd-holds &.pd-tree-folder.pa-foldable .pa-folded .pd-paragraph.pa-entry { display: none; }
        .pd-book .pd-holds &.pd-tree-folder.pa-foldable .pd-paragraph.pa-entry { display: flex; flex-wrap: nowrap; align-items: center; gap: calc(${({ theme }) => theme.space} / 3); margin: 0; padding: calc(${({ theme }) => theme.space} / 6) calc(${({ theme }) => theme.space} * 0.5833) calc(${({ theme }) => theme.space} / 6) calc(${({ theme }) => theme.space} * 1.5); font-size: calc(0.8929 * ${({ theme }) => theme.size}); line-height: 1.35; color: ${({ theme }) => theme.sideInk}; }
        .pd-book .pd-holds &.pd-tree-folder.pa-foldable .pd-paragraph.pa-entry > a:first-child, .pd-book .pd-holds &.pd-tree-folder.pa-foldable .pd-paragraph.pa-entry > .pd-word.pa-content, .pd-book .pd-holds &.pd-tree-folder.pa-foldable .pd-paragraph.pa-entry .pa-content { flex: 1 1 auto; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
        .pd-book .pd-holds &.pd-tree-folder.pa-foldable .pd-paragraph.pa-entry .pd-word.pa-arrow, .pd-book .pd-holds &.pd-tree-folder.pa-foldable .pd-paragraph.pa-entry > a:has(> .pa-arrow) { display: none; }
        .pd-book .pd-holds &.pd-tree-folder.pa-foldable .pd-paragraph.pa-entry .pa-number { display: none; }
        .pd-book .pd-holds &.pd-tree-folder.pa-foldable .pd-paragraph.pa-entry:hover { background: color-mix(in oklab, ${({ theme }) => theme.sky} 30%, white); }
        .pd-book .pd-holds &.pd-tree-folder.pa-foldable .pd-paragraph.pa-entry.pa-open { background: linear-gradient(90deg, #eff4fa, #f8fafd); color: ${({ theme }) => theme.heading}; font-weight: 500; }
        .pd-book .pd-holds &.pd-tree-folder.pa-foldable.pa-open .pd-sentence.pd-heading { background: linear-gradient(90deg, #eff4fa, #f8fafd); color: ${({ theme }) => theme.heading}; }
        .pd-book .pd-holds &.pd-tree-folder .pd-sentence.pd-heading .pd-word.pd-section-count { margin-inline-start: auto; font-size: calc(0.7857 * ${({ theme }) => theme.size}); font-weight: 400; color: ${({ theme }) => theme.faint}; font-variant-numeric: tabular-nums; }
        .pd-book .pd-holds &.pd-tree-folder .pa-entry .pd-word.pd-entry-day { flex: none; margin-inline-start: auto; font-size: calc(0.7857 * ${({ theme }) => theme.size}); font-weight: 400; color: ${({ theme }) => theme.faint}; font-variant-numeric: tabular-nums; }
        @media (max-width: ${({ theme }) => theme.narrow}) {
            .pd-book .pd-holds &.pd-tree-folder.pa-open .pd-fold-chevron, .pd-book .pd-holds &.pd-tree-folder.pa-open .pd-tree-folder-mark, .pd-book .pd-holds &.pd-tree-folder.pa-open .pa-entry .pd-file-tab { display: none; }
            .pd-book .pd-holds &.pd-tree-folder.pa-open .pd-sentence.pd-heading { height: auto; padding: 0 calc(${({ theme }) => theme.space} / 2); }
            .pd-book:not(.pa-turned) .pd-holds .pd-chapter.pa-table-of-contents:has(> &.pd-tree-folder.pa-foldable) { flex-direction: row; align-items: center; min-height: 0; }
            .pd-book .pd-holds &.pd-tree-folder.pa-foldable { display: inline-block; vertical-align: top; }
            .pd-book .pd-holds &.pd-tree-folder.pa-foldable .pd-fold-chevron { position: static; display: inline-grid; vertical-align: middle; margin-inline-end: 2px; }
            .pd-book .pd-holds &.pd-tree-folder.pa-foldable .pd-sentence.pd-heading { display: inline-flex; height: calc(1.9 * ${({ theme }) => theme.size}); padding: 0 calc(${({ theme }) => theme.space} / 2) 0 calc(${({ theme }) => theme.space} / 6); }
            .pd-book .pd-holds &.pd-tree-folder.pa-foldable .pd-section { display: inline; margin: 0; }
            .pd-book .pd-holds &.pd-tree-folder.pa-foldable .pd-paragraph.pa-entry { display: none; }
        }
    `;
    get section(): $Section { return this.parent as $Section; }
    get firstPlace(): string | undefined {
        return this.section.text.find($Paragraph).map(paragraph => contentOf(paragraph)).find(content => content !== undefined)?.identifier;
    }
    get part(): $Part | undefined {
        const firstPlace = this.firstPlace;
        return firstPlace === undefined ? undefined : (this.book as $LibraryBook).chapterAt(firstPlace)?.part;
    }
    get open(): boolean {
        const book = this.book as $LibraryBook;
        const open = book.open;
        const named = this.section.mention?.identifier;
        return (open !== undefined && open.part?.name === this.part?.name) || (named !== undefined && book.placeWithin(named) === book.$bookmark);
    }

    $TreeFolder(...chemicals: $Chemical[]) {
        this.$Format(...chemicals);
        const Tree = this.tree;
        const FoldChevron = $(foldChevron);
        const Word = $(word);
        const Reference = $(reference);
        this.style = ({ className, children }: { className?: string; children?: ReactNode }) => {
            const firstPlace = this.firstPlace;
            const open = [...this.section.classes].includes('pa-open');
            const turned = (this.book as $LibraryBook).open !== undefined;
            const foldable = this.chapter?.annotations.expressed($Index)?.$folded === true && !(open && turned);
            const mark = (
                <span
                    className="pd-drawing pd-tree-folder-mark"
                    dangerouslySetInnerHTML={{ __html: folderSvg }}
                />
            );
            return (
                <Tree className={`${className ?? ''} pd-tree-folder${open ? ' pa-open' : ''}${foldable ? ' pa-foldable' : ''}`.trim()}>
                    <FoldChevron
                        foldedWriting={this.section}
                        annotation={folded}
                    />
                    {firstPlace === undefined ? mark : (
                        <Word>
                            <Reference>{firstPlace}</Reference>
                            {mark}
                        </Word>
                    )}
                    {children}
                </Tree>
            );
        };
    }

    override defines(writing: $Writing): void {
        super.defines(writing);
        writing.classes.add(this, 'pa-tree-folder');
        if (this.open) writing.classes.add(this, 'pa-open');
    }

    override erase(writing: $Writing): void {
        super.erase(writing);
        writing.classes.revert(this);
    }
}

export class FoldedSpecification extends AnnotationSpecification {
    @specify('folded is said of a section of a table of contents or of an entry')
    $saidOfASectionOrAnEntry(writing: $Writing): void {
        $check((writing instanceof $Section && writing.chapter?.is($TableOfContents) === true) || writing.is($Entry),
            'folded is said of a section of a table of contents or of an entry, and this is neither');
    }
}

export class TreeFolderSpecification extends AnnotationSpecification {
    @specify('a tree folder is a section of the table of contents')
    $isASectionOfTheTable(writing: $Writing): void {
        $check(writing instanceof $Section && writing.chapter?.is($TableOfContents) === true,
            'a tree folder is a section of the table of contents, and this is not one');
    }
}

export class $TreeRoot extends $Paragraph {
    $cover?: $Chapter;
    get cover(): $Chapter | undefined { return this.$cover ?? this.book?.cover; }

    override write(): ReactNode {
        const cover = this.cover!;
        const Word = $(word);
        const Reference = $(reference);
        return (
            <Word>
                <Reference>{cover.mention!.identifier}</Reference>
                <span
                    className="pd-drawing"
                    dangerouslySetInnerHTML={{ __html: chevronSvg }}
                />
                {cover.title!.name}
            </Word>
        );
    }

    protected override $Define(): void {
        super.$Define();
        this.classes.add(this, 'pd-tree-root');
    }
}

export const contentOf = (paragraph: $Writing): $Content | undefined =>
    paragraph.annotations.expressed($Content) ?? paragraph.text.find($Word).map(word => word.annotations.expressed($Content)).find(content => content !== undefined);

export const Entry = $($Entry);
export const Index = $($Index);
export const EntryDay = $($EntryDay);
export const SectionCount = $($SectionCount);
export const Appendix = $($Appendix);
export const Folded = $($Folded);
export const FoldChevron = $($FoldChevron);
export const TreeFolder = $($TreeFolder);
export const TreeRoot = $($TreeRoot);
const entry = Entry;
const entryDay = EntryDay;
const sectionCount = SectionCount;
const folded = Folded;
const foldChevron = FoldChevron;
