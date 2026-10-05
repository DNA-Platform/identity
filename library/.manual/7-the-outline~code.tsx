import { $, $check, selection } from '@dna-platform/chemistry';
import { $Book, $Format, $Writing, AnnotationSpecification, specify } from '@dna-platform/public';

export class $Outlined extends $Format {
    specification = new OutlinedSpecification();
    themeProvider = true;
    style = selection.div`
        .pd-chapter, .pd-section, .pd-listing, .pd-paragraph[class*='pa-'] {
            outline: thin dashed currentColor;
            outline-offset: calc(${({ theme }) => theme.space} / 4);
        }
        .pd-chapter::before, .pd-section::before, .pd-listing::before, .pd-paragraph[class*='pa-']::before {
            content: attr(class);
            display: block;
            font-family: monospace;
            font-size: smaller;
        }
    `;

    override defines(writing: $Writing): void {
        super.defines(writing);
        writing.classes.add(this, 'pa-outlined');
    }

    override erase(writing: $Writing): void {
        super.erase(writing);
        writing.classes.revert(this);
    }
}

export class OutlinedSpecification extends AnnotationSpecification {
    @specify('outlined is said of a book')
    $saidOfABook(writing: $Writing): void {
        $check(writing instanceof $Book, 'outlined is said of a book, and this is not one');
    }
}

export const Outlined = $($Outlined);
