import { $check } from '@dna-platform/chemistry';
import { $Book, $Writing, AnnotationSpecification, specify } from '@dna-platform/public';

// Said of a book, asked of the framework's own book and not of this library's, since this file is imported by the
// layout's code, which the book's code imports: a check of the library's book here closed a cycle, and a chapter
// imported before the book's code met this class before its definition. Every book of this library is a book.
// Sprint 117, U2.
export class OfABookSpecification extends AnnotationSpecification {
    @specify('this is said of a book')
    $saidOfABook(writing: $Writing): void {
        $check(writing instanceof $Book, 'this is said of a book, and here it is said of something else');
    }
}
