import { $, $check, selection } from '@dna-platform/chemistry';
import { $Annotation, $Format, $Paragraph, $Writing, AnnotationSpecification, specify } from '@dna-platform/public';
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

export class CaptionSpecification extends AnnotationSpecification {
    @specify('a caption is said of a paragraph')
    $saidOfAParagraph(writing: $Writing): void {
        $check(writing instanceof $Paragraph, 'a caption is said of a paragraph, and this is not one');
    }
}

export class $View extends $Format {
    specification = new OfABookSpecification();
    themeProvider = true;

    override defines(writing: $Writing): void {
        for (const annotation of writing.annotations.after(this))
            if (annotation instanceof $View)
                writing.annotations.express(annotation, false);
        super.defines(writing);
    }

    override erase(writing: $Writing): void {
        super.erase(writing);
        writing.classes.revert(this);
    }
}

export class $Shelf extends $View {
    style = selection.div`
        .pd-book.pa-shelf .pd-shelf {
            display: grid;
            grid-template-columns: repeat(6, minmax(0, 1fr));
            gap: calc(${({ theme }) => theme.space} * 0.83);
            align-items: start;
        }
        @media (max-width: ${({ theme }) => theme.narrow}) {
            .pd-book.pa-shelf .pd-shelf { grid-template-columns: repeat(3, minmax(0, 1fr)); gap: calc(${({ theme }) => theme.space} * 0.58) calc(${({ theme }) => theme.space} / 2); }
        }
    `;

    override defines(writing: $Writing): void {
        super.defines(writing);
        writing.classes.add(this, 'pa-shelf');
    }
}

export const Shelf = $($Shelf);
export const Caption = $($Caption);
