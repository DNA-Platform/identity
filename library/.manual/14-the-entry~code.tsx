import { $, $check } from '@dna-platform/chemistry';
import { $Annotation, $Chapter, $Content, $Paragraph, $Section, $TableOfContents, $Writing, AnnotationSpecification, specify } from '@dna-platform/public';
import type { $DougsBook } from './1-the-book~code.tsx';

export class $Entry extends $Annotation {
    specification = new EntrySpecification();
    get leads(): $Chapter | undefined {
        const place = (this.parent as $Writing).annotations.expressed($Content)!.identifier;
        return (this.book as $DougsBook).named(place);
    }

    override defines(writing: $Writing): void {
        writing.classes.add(this, 'pa-entry');
        if (this.leads !== undefined && this.leads === (this.book as $DougsBook).open) writing.classes.add(this, 'pa-open');
    }

    override erase(writing: $Writing): void {
        writing.classes.revert(this);
    }
}

export class $Index extends $TableOfContents {
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

export class EntrySpecification extends AnnotationSpecification {
    @specify('an entry is said of a paragraph that leads somewhere')
    $saidOfAnEntry(writing: $Writing): void {
        $check(writing instanceof $Paragraph && writing.is($Content),
            'an entry is said of a paragraph that leads somewhere, and this is not one');
    }
}

export const Entry = $($Entry);
export const Index = $($Index);
