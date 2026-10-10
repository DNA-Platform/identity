import { $, $check } from '@dna-platform/chemistry';
import { $Annotation, $Paragraph, $Writing, AnnotationSpecification, specify } from '@dna-platform/public';

export class $Question extends $Annotation {
    specification = new QuestionSpecification();

    override defines(writing: $Writing): void {
        writing.classes.add(this, 'pa-question');
    }

    override erase(writing: $Writing): void {
        writing.classes.revert(this);
    }
}

export class $Answer extends $Annotation {
    specification = new AnswerSpecification();

    override defines(writing: $Writing): void {
        writing.classes.add(this, 'pa-answer');
    }

    override erase(writing: $Writing): void {
        writing.classes.revert(this);
    }
}

export class $Decision extends $Annotation {
    specification = new DecisionSpecification();

    override defines(writing: $Writing): void {
        writing.classes.add(this, 'pa-decision');
    }

    override erase(writing: $Writing): void {
        writing.classes.revert(this);
    }
}

export class $Pain extends $Annotation {
    specification = new PainSpecification();

    override defines(writing: $Writing): void {
        writing.classes.add(this, 'pa-pain');
    }

    override erase(writing: $Writing): void {
        writing.classes.revert(this);
    }
}

export class $Solution extends $Annotation {
    specification = new SolutionSpecification();

    override defines(writing: $Writing): void {
        writing.classes.add(this, 'pa-solution');
    }

    override erase(writing: $Writing): void {
        writing.classes.revert(this);
    }
}

export class QuestionSpecification extends AnnotationSpecification {
    @specify('asked is said of a paragraph')
    $saidOfAParagraph(writing: $Writing): void {
        $check(writing instanceof $Paragraph, 'asked is said of a paragraph, and this is not one');
    }
}

export class AnswerSpecification extends AnnotationSpecification {
    @specify('said is said of a paragraph')
    $saidOfAParagraph(writing: $Writing): void {
        $check(writing instanceof $Paragraph, 'said is said of a paragraph, and this is not one');
    }
}

export class DecisionSpecification extends AnnotationSpecification {
    @specify('chosen is said of a paragraph')
    $saidOfAParagraph(writing: $Writing): void {
        $check(writing instanceof $Paragraph, 'chosen is said of a paragraph, and this is not one');
    }
}

export class PainSpecification extends AnnotationSpecification {
    @specify('a pain is a paragraph')
    $isAParagraph(writing: $Writing): void {
        $check(writing instanceof $Paragraph, 'a pain is a paragraph, and this is not one');
    }
}

export class SolutionSpecification extends AnnotationSpecification {
    @specify('a solution is a paragraph')
    $isAParagraph(writing: $Writing): void {
        $check(writing instanceof $Paragraph, 'a solution is a paragraph, and this is not one');
    }
}

export const Question = $($Question);
export const Answer = $($Answer);
export const Decision = $($Decision);
export const Pain = $($Pain);
export const Solution = $($Solution);
