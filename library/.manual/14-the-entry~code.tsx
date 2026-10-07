import { ElementType, ReactNode } from 'react';
import { $, $check, $Chemical, selection } from '@dna-platform/chemistry';
import { $Annotation, $Chapter, $Content, $Format, $Paragraph, $Parenthetical, $Section, $TableOfContents, $Word, $Writing, AnnotationSpecification, specify } from '@dna-platform/public';
import type { $LibraryBook } from './1-the-book~code.tsx';
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
        this._painted = (props: { children?: ReactNode }) => <Painted $vars={this.vars} {...props} />;
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
    override get on(): boolean { return this.$target?.is(this.$of) ?? false; }

    $Twist(...chemicals: $Chemical[]) {
        this.$Switch(...chemicals);
        const button = this._button;
        this._button = (props: { children?: ReactNode }) => (
            <button
                type="button"
                aria-pressed={this.on}
                onClick={event => { event.preventDefault(); this.press(); }}
                {...props}
            />
        );
        this.containers.replace(this, button, this._button);
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
    protected _layer!: ElementType;

    $Folder(...chemicals: $Chemical[]) {
        this.$Format(...chemicals);
        const Twist = $(twist);
        this._layer = ({ className, ...props }: { className?: string; children?: ReactNode }) => (
            <div
                className={`${className ?? ''} pd-folder`.trim()}
                {...props}
            >
                <Twist
                    target={this.parent as $Writing}
                    of={folded}
                />
                <span
                    className="pd-drawing pd-folder-mark"
                    dangerouslySetInnerHTML={{ __html: folder }}
                />
                {props.children}
            </div>
        );
    }

    override defines(writing: $Writing): void {
        writing.classes.add(this, 'pa-folder');
        writing.containers.add(this, this._layer);
    }

    override erase(writing: $Writing): void {
        writing.classes.revert(this);
        writing.containers.revert(this);
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
