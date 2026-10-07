import { $, $check } from '@dna-platform/chemistry';
import { $Annotation, $Paragraph, $TableOfContents, $Word, $Writing, AnnotationSpecification, specify } from '@dna-platform/public';
import { OfABookSpecification } from '../.manual/.book';

export class $Caption extends $Annotation {
    specification = new CaptionSpecification();

    override defines(writing: $Writing): void {
        writing.classes.add(this, 'pa-caption');
    }

    override erase(writing: $Writing): void {
        writing.classes.revert(this);
    }
}

export class $Arrow extends $Annotation {
    specification = new ArrowSpecification();

    override defines(writing: $Writing): void {
        writing.classes.add(this, 'pa-arrow');
    }

    override erase(writing: $Writing): void {
        writing.classes.revert(this);
    }
}

export class $Unfolded extends $Annotation {
    specification = new OfABookSpecification();

    override defines(writing: $Writing): void {
        writing.classes.add(this, 'pa-unfolded');
    }

    override erase(writing: $Writing): void {
        writing.classes.revert(this);
    }
}

export class CaptionSpecification extends AnnotationSpecification {
    @specify('a caption is said of a paragraph')
    $saidOfAParagraph(writing: $Writing): void {
        $check(writing instanceof $Paragraph, 'a caption is said of a paragraph, and this is not one');
    }
}

export class ArrowSpecification extends AnnotationSpecification {
    @specify('an arrow is said of a word of a table of contents')
    $saidOfAWord(writing: $Writing): void {
        $check(writing instanceof $Word && writing.chapter?.is($TableOfContents) === true,
            'an arrow is said of a word of a table of contents, and this is not one');
    }
}

export const Caption = $($Caption);
export const Arrow = $($Arrow);
export const Unfolded = $($Unfolded);
