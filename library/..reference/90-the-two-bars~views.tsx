import { $, selection } from '@dna-platform/chemistry';
import { $Format, $Writing } from '@dna-platform/public';
import { OfABookSpecification } from '../.manual/.book';

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

export class $Shelved extends $View {
    style = selection.div`
        .pd-book.pa-shelved .pd-shelf {
            display: grid;
            grid-template-columns: repeat(auto-fill, ${({ theme }) => theme.volume});
            gap: ${({ theme }) => theme.space};
            align-items: start;
        }
        @media (max-width: ${({ theme }) => theme.narrow}) {
            .pd-book.pa-shelved .pd-shelf { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }
    `;

    override defines(writing: $Writing): void {
        super.defines(writing);
        writing.classes.add(this, 'pa-shelved');
    }
}

export class $Listed extends $View {
    style = selection.div`
        .pd-book.pa-listed .pd-volume { max-width: ${({ theme }) => theme.measure}; }
    `;

    override defines(writing: $Writing): void {
        super.defines(writing);
        writing.classes.add(this, 'pa-listed');
    }
}

export const Shelved = $($Shelved);
export const Listed = $($Listed);
