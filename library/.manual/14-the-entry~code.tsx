import { ElementType, ReactNode } from 'react';
import { $, $check, $Chemical, selection } from '@dna-platform/chemistry';
import { $Annotation, $Chapter, $Content, $Format, $Paragraph, $Parenthetical, $Section, $TableOfContents, $Word, $Writing, AnnotationSpecification, ContainerProps, Reference as reference, Word as word, specify } from '@dna-platform/public';
import type { $LibraryBook } from './1-the-book~code.tsx';
import { $View } from './15-the-part~code.tsx';
import { $Switch } from './9-the-switch~code.tsx';
import { $Coloured } from './18-the-colour~code.tsx';
import { $Scheme, $Volume } from './19-the-cover~code.tsx';

const chevron = '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3.5 10.5 8 6 12.5"/></svg>';
const folder = '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linejoin="round" stroke-linecap="round"><rect class="ground" x="0.75" y="0.75" width="14.5" height="14.5"/><path d="M3.5 5.5h3l1.5 1.5h4.5v5h-9z"/></svg>';

export class $Entry extends $Format {
    specification = new EntrySpecification();
    style: ElementType = selection.div<{ $vars?: string }>`
        ${props => props.$vars === undefined ? '' : `.pa-entry { ${props.$vars} }`}
    `;
    protected _painted!: ElementType;
    get place(): string { return leads(this.parent as $Writing)!.identifier; }
    get leads(): $Chapter | undefined { return (this.book as $LibraryBook).named(this.place); }
    get cover(): $Chapter | undefined {
        return this.leads?.annotations.expressed($Volume)?.cover ?? (this.book as $LibraryBook).coverOf(this.place);
    }
    get vars(): string | undefined {
        const scheme = this.cover?.annotations.expressed($Scheme);
        if (scheme !== undefined) return scheme.declarations;
        const colour = this.leads?.annotations.expressed($Coloured)?.colour;
        return colour === undefined ? undefined : `--colour: ${colour};`;
    }

    $Entry(...chemicals: $Chemical[]) {
        this.$Format(...chemicals);
        const Painted = this.style;
        this._painted = (props: { children?: ReactNode }) => (
            <Painted
                $vars={this.vars}
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

    override note(): ReactNode {
        return this.leads?.annotations.expressed($View)?.row(this);
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
    get entries(): $Paragraph[] {
        const sections = this.chapter!.text.find($Section);
        return sections.flatMap(section => section.text.find($Paragraph)).filter(paragraph => !paragraph.is($Parenthetical) && leads(paragraph) !== undefined);
    }

    protected override $Bound(): void {
        const Kind = $(Entry);
        for (const paragraph of this.entries)
            paragraph.annotations.add(this,
                <Kind />
            );
        super.$Bound();
    }
}

export class IndexSpecification extends AnnotationSpecification {
    @specify('an index is said of a table of contents')
    $saidOfATableOfContents(writing: $Writing): void {
        $check(writing.is($TableOfContents), 'an index is said of a table of contents, and this chapter is not one');
    }
}

export class AppendixSpecification extends AnnotationSpecification {
    @specify('an appendix is said of a section of a table of contents')
    $saidOfASection(writing: $Writing): void {
        $check(writing instanceof $Section && writing.chapter?.is($TableOfContents) === true,
            'an appendix is said of a section of a table of contents, and this is not one');
    }
}

export class EntrySpecification extends AnnotationSpecification {
    @specify('an entry is said of a paragraph that leads somewhere')
    $saidOfAnEntry(writing: $Writing): void {
        $check(writing instanceof $Paragraph && leads(writing) !== undefined,
            'an entry is said of a paragraph that leads somewhere, and this is not one');
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

export class $Twist extends $Switch {
    $target?: $Writing;
    override get on(): boolean { return this.$target !== undefined && [this.$target.$is].flat().includes(this.$of); }

    override container(props: ContainerProps): ReactNode {
        return super.container({ ...props, onClick: event => { event.preventDefault(); this.press(); } });
    }

    override press(): void {
        const target = this.$target!;
        const annotations = [target.$is].flat();
        target.$is = this.on ? annotations.filter(annotation => annotation !== this.$of) : [this.$of, ...annotations];
    }

    override write(): ReactNode {
        return (
            <span
                className="pd-drawing"
                dangerouslySetInnerHTML={{ __html: chevron }}
            />
        );
    }

    protected override $Define(): void {
        super.$Define();
        this.classes.add(this, 'pd-twist');
    }
}

export class $Folder extends $Format {
    specification = new FolderSpecification();
    themeProvider = true;
    tree: ElementType = selection.div`
        .pd-book .pd-holds &.pd-folder { position: relative; }
        .pd-book .pd-holds &.pd-folder .pd-section { margin: 0 0 calc(${({ theme }) => theme.space} / 3); }
        .pd-book .pd-holds &.pd-folder .pd-heading {
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
        .pd-book .pd-holds &.pd-folder .pd-heading:hover { background: color-mix(in oklab, ${({ theme }) => theme.sky} 30%, white); }
        .pd-book .pd-holds &.pd-folder .pd-heading .pa-reference { color: inherit; text-decoration: none; }
        .pd-book .pd-holds &.pd-folder .pd-twist {
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
        .pd-book .pd-holds &.pd-folder .pd-twist .pd-drawing { display: block; width: calc(0.7143 * ${({ theme }) => theme.size}); height: calc(0.7143 * ${({ theme }) => theme.size}); }
        .pd-book .pd-holds &.pd-folder .pd-twist svg, .pd-book .pd-holds &.pd-folder .pd-folder-mark svg, .pd-book .pd-holds &.pd-folder .pd-file svg { display: block; width: 100%; height: 100%; }
        .pd-book .pd-holds &.pd-folder .pd-word.pd-twist[aria-pressed='true'] { color: #a5aebb; background: none; border-color: transparent; }
        .pd-book .pd-holds &.pd-folder .pd-twist[aria-pressed='false'] { transform: rotate(90deg); }
        .pd-book .pd-holds &.pd-folder .pd-twist:hover { color: ${({ theme }) => theme.ink}; }
        .pd-book .pd-holds &.pd-folder .pd-twist { position: absolute; top: calc(${({ theme }) => theme.space} * 0.2292); left: calc(${({ theme }) => theme.space} * 0.4167); }
        .pd-book .pd-holds &.pd-folder .pd-folder-mark {
            position: absolute;
            top: calc(${({ theme }) => theme.space} * 0.2292);
            left: calc(${({ theme }) => theme.space} * 1.375);
            width: calc(1.1429 * ${({ theme }) => theme.size});
            height: calc(1.1429 * ${({ theme }) => theme.size});
            color: #8a94a3;
        }
        .pd-book .pd-holds &.pd-folder .pd-folder-mark .ground { fill: #f1f3f5; stroke: #8a94a3; stroke-width: 1.5; }
        .pd-book .pd-holds &.pd-folder .pa-folded .pd-paragraph.pa-entry { display: none; }
        .pd-book .pd-holds &.pd-folder .pd-paragraph.pa-entry {
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
        .pd-book .pd-holds &.pd-folder .pd-paragraph.pa-entry::before { content: none; }
        .pd-book .pd-holds &.pd-folder .pa-entry .pd-twist { order: -2; position: static; }
        .pd-book .pd-holds &.pd-folder .pa-entry .pd-twist.pd-blank { visibility: hidden; }
        .pd-book .pd-holds &.pd-folder .pa-entry .pd-icon { order: -1; }
        .pd-book .pd-holds &.pd-folder .pa-entry .pa-content { flex: 1; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
        .pd-book .pd-holds &.pd-folder .pa-entry:hover { background: linear-gradient(color-mix(in oklab, ${({ theme }) => theme.sky} 40%, white), color-mix(in oklab, ${({ theme }) => theme.sky} 40%, white)) left top / 100% calc(1.9286 * ${({ theme }) => theme.size}) no-repeat; }
        .pd-book .pd-holds &.pd-folder .pd-paragraph.pa-entry.pa-open {
            background: linear-gradient(var(--band-ink), var(--band-ink)) left top / 3px calc(1.9286 * ${({ theme }) => theme.size}) no-repeat, linear-gradient(color-mix(in oklab, ${({ theme }) => theme.sky} 72%, white), color-mix(in oklab, ${({ theme }) => theme.sky} 72%, white)) left top / 100% calc(1.9286 * ${({ theme }) => theme.size}) no-repeat;
            color: var(--band-ink);
            font-weight: 400;
            box-shadow: none;
        }
        .pd-book .pd-holds &.pd-folder .pa-number { order: 1; margin: 0; font-size: calc(0.75 * ${({ theme }) => theme.size}); color: color-mix(in oklch, var(--foot-ink) 48%, white); font-variant-numeric: tabular-nums; }
        .pd-book .pd-holds &.pd-folder .pa-entry .pd-file {
            order: 2;
            flex: 0 0 calc(100% + ${({ theme }) => theme.space} * 1.75);
            margin: 0 calc(${({ theme }) => theme.space} * -0.5833) 0 calc(${({ theme }) => theme.space} * -1.1667);
            padding: 0 calc(${({ theme }) => theme.space} * 0.5833) 0 calc(${({ theme }) => theme.space} * 2.875);
        }
        .pd-book .pd-holds &.pd-folder .pa-entry.pa-folded .pd-file { display: none; }
        .pd-book .pd-holds &.pd-folder .pd-paragraph.pa-entry .pd-file {
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
        .pd-book .pd-holds &.pd-folder .pd-file .pd-drawing { flex: none; width: ${({ theme }) => theme.size}; height: ${({ theme }) => theme.size}; color: #a5aebb; transition: color ${({ theme }) => theme.beat} ease; }
        .pd-book .pd-holds &.pd-folder .pd-file:hover { background: color-mix(in oklab, ${({ theme }) => theme.sky} 40%, white); color: ${({ theme }) => theme.ink}; }
        .pd-book.pa-split .pd-holds &.pd-folder .pd-paragraph.pa-entry .pd-file[aria-pressed='true'], .pd-book.pa-code-forward .pd-holds &.pd-folder .pd-paragraph.pa-entry .pd-file[aria-pressed='true'] { color: ${({ theme }) => theme.skyInk}; font-weight: 500; background: color-mix(in oklab, ${({ theme }) => theme.sky} 45%, white); }
        .pd-book.pa-split .pd-holds &.pd-folder .pd-paragraph.pa-entry .pd-file[aria-pressed='true'] .pd-drawing, .pd-book.pa-code-forward .pd-holds &.pd-folder .pd-paragraph.pa-entry .pd-file[aria-pressed='true'] .pd-drawing { color: var(--colour); }
        @media (max-width: ${({ theme }) => theme.narrow}) {
            .pd-book .pd-holds &.pd-folder .pd-twist, .pd-book .pd-holds &.pd-folder .pd-folder-mark, .pd-book .pd-holds &.pd-folder .pa-entry .pd-file { display: none; }
            .pd-book .pd-holds &.pd-folder .pd-heading { height: auto; padding: 0 calc(${({ theme }) => theme.space} / 2); }
        }
    `;
    get section(): $Section { return this.parent as $Section; }
    get first(): string | undefined {
        return this.section.text.find($Paragraph).map(paragraph => leads(paragraph)).find(content => content !== undefined)?.identifier;
    }

    $Folder(...chemicals: $Chemical[]) {
        this.$Format(...chemicals);
        const Tree = this.tree;
        const Twist = $(twist);
        const Word = $(word);
        const Reference = $(reference);
        this.style = ({ className, children }: { className?: string; children?: ReactNode }) => {
            const first = this.first;
            const mark = (
                <span
                    className="pd-drawing pd-folder-mark"
                    dangerouslySetInnerHTML={{ __html: folder }}
                />
            );
            return (
                <Tree className={`${className ?? ''} pd-folder`.trim()}>
                    <Twist
                        target={this.section}
                        of={folded}
                    />
                    {first === undefined ? mark : (
                        <Word>
                            <Reference>{first}</Reference>
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
        writing.classes.add(this, 'pa-folder');
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

export class FolderSpecification extends AnnotationSpecification {
    @specify('a folder is said of a section of a table of contents')
    $saidOfASection(writing: $Writing): void {
        $check(writing instanceof $Section && writing.chapter?.is($TableOfContents) === true,
            'a folder is said of a section of a table of contents, and this is not one');
    }
}

export const leads = (paragraph: $Writing): $Content | undefined =>
    paragraph.annotations.expressed($Content) ?? paragraph.text.find($Word).map(word => word.annotations.expressed($Content)).find(content => content !== undefined);

export const Entry = $($Entry);
export const Index = $($Index);
export const Appendix = $($Appendix);
export const Folded = $($Folded);
export const Twist = $($Twist);
export const Folder = $($Folder);
const folded = Folded;
const twist = Twist;
