import { $check } from '@dna-platform/chemistry';
import { $Writing, AnnotationSpecification, specify } from '@dna-platform/public';
import { $DougsBook } from './1-the-book~code.tsx';

export class OfABookSpecification extends AnnotationSpecification {
    @specify('this is said of a book of this library')
    $saidOfABook(writing: $Writing): void {
        $check(writing instanceof $DougsBook, 'this is said of a book of this library, and here it is said of something else');
    }
}
