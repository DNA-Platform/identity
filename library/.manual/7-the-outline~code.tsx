import { $, $check } from '@dna-platform/chemistry';
import { $Annotation, $Book, $Writing, AnnotationSpecification, specify } from '@dna-platform/public';

export class $Outlined extends $Annotation {
    specification = new OutlineSpecification();

    override defines(writing: $Writing): void {
        writing.classes.add(this, 'pa-outlined');
    }

    override erase(writing: $Writing): void {
        writing.classes.revert(this);
    }
}

export class OutlineSpecification extends AnnotationSpecification {
    @specify('outline is said of a book')
    $saidOfABook(writing: $Writing): void {
        $check(writing instanceof $Book, 'outline is said of a book, and this is not one');
    }
}

export const Outlined = $($Outlined);
