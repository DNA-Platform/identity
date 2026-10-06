import { $, $check } from '@dna-platform/chemistry';
import { $Annotation, $Paragraph, $Writing, AnnotationSpecification, specify } from '@dna-platform/public';

export class $First extends $Annotation {
    specification = new FirstSpecification();

    override defines(writing: $Writing): void {
        writing.classes.add(this, 'pa-first');
    }

    override erase(writing: $Writing): void {
        writing.classes.revert(this);
    }
}

export class FirstSpecification extends AnnotationSpecification {
    @specify('first is said of a paragraph')
    $saidOfAParagraph(writing: $Writing): void {
        $check(writing instanceof $Paragraph, 'first is said of a paragraph, and this is not one');
    }
}

export const First = $($First);
