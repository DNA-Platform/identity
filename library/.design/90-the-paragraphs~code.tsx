import { $, $check } from '@dna-platform/chemistry';
import { $Annotation, $Paragraph, $Writing, AnnotationSpecification, specify } from '@dna-platform/public';

export class $Asked extends $Annotation {
    specification = new AskedSpecification();

    override defines(writing: $Writing): void {
        writing.classes.add(this, 'pa-asked');
    }

    override erase(writing: $Writing): void {
        writing.classes.revert(this);
    }
}

export class $Said extends $Annotation {
    specification = new SaidSpecification();

    override defines(writing: $Writing): void {
        writing.classes.add(this, 'pa-said');
    }

    override erase(writing: $Writing): void {
        writing.classes.revert(this);
    }
}

export class $Chosen extends $Annotation {
    specification = new ChosenSpecification();

    override defines(writing: $Writing): void {
        writing.classes.add(this, 'pa-chosen');
    }

    override erase(writing: $Writing): void {
        writing.classes.revert(this);
    }
}

export class AskedSpecification extends AnnotationSpecification {
    @specify('asked is said of a paragraph')
    $saidOfAParagraph(writing: $Writing): void {
        $check(writing instanceof $Paragraph, 'asked is said of a paragraph, and this is not one');
    }
}

export class SaidSpecification extends AnnotationSpecification {
    @specify('said is said of a paragraph')
    $saidOfAParagraph(writing: $Writing): void {
        $check(writing instanceof $Paragraph, 'said is said of a paragraph, and this is not one');
    }
}

export class ChosenSpecification extends AnnotationSpecification {
    @specify('chosen is said of a paragraph')
    $saidOfAParagraph(writing: $Writing): void {
        $check(writing instanceof $Paragraph, 'chosen is said of a paragraph, and this is not one');
    }
}

export const Asked = $($Asked);
export const Said = $($Said);
export const Chosen = $($Chosen);
