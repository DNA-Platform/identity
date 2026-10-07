import { ElementType, ReactNode } from 'react';
import { $, $check, $Chemical, selection } from '@dna-platform/chemistry';
import { $Annotation, $Chapter, $Content, $Format, $Paragraph, $Parenthetical, $Section, $TableOfContents, $Word, $Writing, AnnotationSpecification, specify } from '@dna-platform/public';
import type { $LibraryBook } from './1-the-book~code.tsx';
import { $Coloured } from './18-the-colour~code.tsx';
import { $Scheme, $Volume } from './19-the-cover~code.tsx';

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

export const leads = (paragraph: $Writing): $Content | undefined =>
    paragraph.annotations.expressed($Content) ?? paragraph.text.find($Word).map(word => word.annotations.expressed($Content)).find(content => content !== undefined);

export const Entry = $($Entry);
export const Index = $($Index);
export const Appendix = $($Appendix);
