import { $, $check } from '@dna-platform/chemistry';
import { $Annotation, $Section, $Writing, AnnotationSpecification, html, specify } from '@dna-platform/public';

export class $Concept extends $Annotation {
    specification = new ConceptSpecification();
    get number(): number {
        const written = html.copy(this.text).trim();
        return written === '' ? NaN : Number(written);
    }

    override defines(writing: $Writing): void {
        writing.classes.add(this, 'pa-concept');
    }

    override erase(writing: $Writing): void {
        writing.classes.revert(this);
    }
}

export class $Sketch extends $Annotation {
    specification = new SketchSpecification();
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

export class SketchSpecification extends AnnotationSpecification {
    @specify('a sketch is said of a concept')
    $saidOfAConcept(writing: $Writing): void {
        $check(writing.is($Concept), 'a sketch is said of a concept, and this is not one');
    }
}

export const Concept = $($Concept);
export const Sketch = $($Sketch);
