import { $, $check } from '@dna-platform/chemistry';
import { $Annotation, $Chapter, $Content, $Paragraph, $Section, $TableOfContents, $Writing, AnnotationSpecification, specify } from '@dna-platform/public';
import type { $DougsBook } from './1-the-book~code.tsx';

export class $Entry extends $Annotation {
    specification = new EntrySpecification();
    get place(): string { return (this.parent as $Writing).annotations.expressed($Content)!.identifier; }
    get leads(): $Chapter | undefined { return (this.book as $DougsBook).named(this.place); }

    override defines(writing: $Writing): void {
        writing.classes.add(this, 'pa-entry');
        if (this.place === this.book?.$bookmark || this.place === (this.book as $DougsBook).open?.mention?.identifier) writing.classes.add(this, 'pa-open');
    }

    override erase(writing: $Writing): void {
        writing.classes.revert(this);
    }
}

export class $Index extends $Annotation {
    specification = new IndexSpecification();
    get entries(): $Paragraph[] {
        const sections = this.chapter!.text.find($Section);
        return sections.flatMap(section => section.text.find($Paragraph)).filter(paragraph => paragraph.is($Content));
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

export class EntrySpecification extends AnnotationSpecification {
    @specify('an entry is said of a paragraph that leads somewhere')
    $saidOfAnEntry(writing: $Writing): void {
        $check(writing instanceof $Paragraph && writing.is($Content),
            'an entry is said of a paragraph that leads somewhere, and this is not one');
    }
}

export const Entry = $($Entry);
export const Index = $($Index);
