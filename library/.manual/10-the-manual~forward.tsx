import { $, selection } from '@dna-platform/chemistry';
import { $Format, $Writing } from '@dna-platform/public';
import { OfABookSpecification } from './1-the-book~said.tsx';

export class $CodeForward extends $Format {
    specification = new OfABookSpecification();
    themeProvider = true;
    style = selection.div`
        .pd-book.pa-code-forward .pd-page.pd-open { grid-template-columns: calc(1.4 * ${({ theme }) => theme.side}) minmax(0, 1fr); }
        .pd-book.pa-code-forward .pd-files { width: auto; }
    `;

    override defines(writing: $Writing): void {
        super.defines(writing);
        writing.classes.add(this, 'pa-code-forward');
    }

    override erase(writing: $Writing): void {
        super.erase(writing);
        writing.classes.revert(this);
    }
}

export const CodeForward = $($CodeForward);
