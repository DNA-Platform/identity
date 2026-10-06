import { ReactNode } from 'react';
import { $, $check, selection } from '@dna-platform/chemistry';
import { $Annotation, $Paragraph, $Section, $Writing, AnnotationSpecification, html, specify } from '@dna-platform/public';

export class $Concept extends $Annotation {
    specification = new ConceptSpecification();
    span = selection.span.attrs({ className: 'pa-number' })``;
    get number(): number {
        const written = html.copy(this.text).trim();
        return written === '' ? NaN : Number(written);
    }

    override note(): ReactNode {
        const Span = this.span;
        return <Span>{this.number}</Span>;
    }

    override defines(writing: $Writing): void {
        writing.classes.add(this, 'pa-concept');
        if ((writing as $Section).mention?.identifier === this.book?.$bookmark) writing.classes.add(this, 'pa-open');
    }

    override erase(writing: $Writing): void {
        writing.classes.revert(this);
    }
}

export class $Photographs extends $Annotation {
    specification = new OfAConceptSpecification();

    override defines(writing: $Writing): void {
        writing.classes.add(this, 'pa-photographs');
    }

    override erase(writing: $Writing): void {
        writing.classes.revert(this);
    }
}

export class $Source extends $Annotation {
    specification = new OfAConceptSpecification();

    override defines(writing: $Writing): void {
        writing.classes.add(this, 'pa-source');
    }

    override erase(writing: $Writing): void {
        writing.classes.revert(this);
    }
}

export class ConceptSpecification extends AnnotationSpecification {
    @specify('a concept is said of a section')
    $saidOfASection(writing: $Writing): void {
        $check(writing instanceof $Section, 'a concept is said of a section, and this is not one');
    }

    @specify('a concept is given its number')
    $givenItsNumber(writing: $Writing): void {
        $check(Number.isInteger(writing.annotations.expressed($Concept)?.number),
            'a concept is given its number, and this one was given something else');
    }
}

export class OfAConceptSpecification extends AnnotationSpecification {
    @specify('this is said of a paragraph of a concept')
    $saidOfAParagraphOfAConcept(writing: $Writing): void {
        $check(writing instanceof $Paragraph && writing.parent instanceof $Writing && writing.parent.is($Concept),
            'this is said of a paragraph of a concept, and here it is said of something else');
    }
}

export const Concept = $($Concept);
export const Photographs = $($Photographs);
export const Source = $($Source);
