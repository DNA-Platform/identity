import { ReactNode } from 'react';
import { $, $check, selection } from '@dna-platform/chemistry';
import { $Annotation, $Image, $Paragraph, $Reference, $Section, $Word, $Writing, AnnotationSpecification, Reference as reference, Word as word, html, specify } from '@dna-platform/public';

export class $Concept extends $Annotation {
    specification = new ConceptSpecification();
    span = selection.span.attrs({ className: 'pd-number' })``;
    close = selection.span.attrs({ className: 'pd-close' })``;
    get number(): number {
        const written = html.copy(this.text).trim();
        return written === '' ? NaN : Number(written);
    }

    override note(): ReactNode {
        const Span = this.span;
        const Close = this.close;
        const Word = $(word);
        const Reference = $(reference);
        const back = this.chapter?.mention?.identifier;
        return (
            <>
                <Span>{this.number}</Span>
                {back === undefined ? undefined : (
                    <Close>
                        <Word>
                            <Reference>{back}</Reference>
                            ×
                        </Word>
                    </Close>
                )}
            </>
        );
    }

    override defines(writing: $Writing): void {
        writing.classes.add(this, 'pa-concept');
    }

    override erase(writing: $Writing): void {
        writing.classes.revert(this);
    }
}

export class $Designed extends $Annotation {
    specification = new OfAConceptSectionSpecification();

    override defines(writing: $Writing): void {
        writing.classes.add(this, 'pa-designed');
    }

    override erase(writing: $Writing): void {
        writing.classes.revert(this);
    }
}

export class $Decided extends $Annotation {
    specification = new OfAConceptSectionSpecification();

    override defines(writing: $Writing): void {
        writing.classes.add(this, 'pa-decided');
    }

    override erase(writing: $Writing): void {
        writing.classes.revert(this);
    }
}

export class $Desk extends $Annotation {
    specification = new PhotographSpecification();

    override defines(writing: $Writing): void {
        writing.classes.add(this, 'pa-desk');
    }

    override erase(writing: $Writing): void {
        writing.classes.revert(this);
    }
}

export class $Phone extends $Annotation {
    specification = new PhotographSpecification();

    override defines(writing: $Writing): void {
        writing.classes.add(this, 'pa-phone');
    }

    override erase(writing: $Writing): void {
        writing.classes.revert(this);
    }
}

export class $Thumbnail extends $Annotation {
    specification = new PhotographSpecification();

    override defines(writing: $Writing): void {
        writing.classes.add(this, 'pa-thumbnail');
    }

    override erase(writing: $Writing): void {
        writing.classes.revert(this);
    }
}

export class $Precedent extends $Annotation {
    specification = new OfAConceptSpecification();

    override defines(writing: $Writing): void {
        writing.classes.add(this, 'pa-precedent');
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

export class $Where extends $Annotation {
    specification = new WhereSpecification();

    override defines(writing: $Writing): void {
        writing.classes.add(this, 'pa-where');
    }

    override erase(writing: $Writing): void {
        writing.classes.revert(this);
    }
}

export class ConceptSpecification extends AnnotationSpecification {
    @specify('a concept is a section')
    $isASection(writing: $Writing): void {
        $check(writing instanceof $Section, 'a concept is a section, and this is not one');
    }

    @specify('a concept is given its number')
    $givenItsNumber(writing: $Writing): void {
        $check(Number.isInteger(writing.annotations.expressed($Concept)?.number),
            'a concept is given its number, and this one was given something else');
    }

    @specify('a concept is photographed at a desk, at a phone, and small')
    $photographedThreeWays(writing: $Writing): void {
        const paragraphs = writing.text.find($Paragraph);
        $check([$Desk, $Phone, $Thumbnail].every(photograph => paragraphs.some(paragraph => paragraph.is(photograph))),
            'a concept is photographed at a desk, at a phone, and small, and this one is missing a photograph');
    }
}

export class PhotographSpecification extends AnnotationSpecification {
    @specify('a photograph is a paragraph that holds one image')
    $isAParagraphHoldingOneImage(writing: $Writing): void {
        $check(writing instanceof $Paragraph && writing.text.find($Image).length === 1,
            'a photograph is a paragraph that holds one image, and this is not one');
    }
}

export class OfAConceptSpecification extends AnnotationSpecification {
    @specify('this is said of a paragraph of a concept')
    $saidOfAParagraphOfAConcept(writing: $Writing): void {
        $check(writing instanceof $Paragraph && writing.parent instanceof $Writing && writing.parent.is($Concept),
            'this is said of a paragraph of a concept, and here it is said of something else');
    }
}

export class WhereSpecification extends OfAConceptSpecification {
    @specify('a where refers to where the concept is built')
    $refersToWhereItIsBuilt(writing: $Writing): void {
        $check(writing.text.find($Word).some(word => word.is($Reference)),
            'a where refers to where the concept is built, and this one refers nowhere');
    }
}

export class OfAConceptSectionSpecification extends AnnotationSpecification {
    @specify('this is said of a concept')
    $saidOfAConcept(writing: $Writing): void {
        $check(writing.is($Concept), 'this is said of a concept, and here it is said of something else');
    }
}

export const Concept = $($Concept);
export const Designed = $($Designed);
export const Decided = $($Decided);
export const Desk = $($Desk);
export const Phone = $($Phone);
export const Thumbnail = $($Thumbnail);
export const Precedent = $($Precedent);
export const Source = $($Source);
export const Where = $($Where);
