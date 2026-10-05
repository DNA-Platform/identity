import { ReactNode } from 'react';
import { $ } from '@dna-platform/chemistry';
import { $Book, $Paragraph, Reference as reference, Theme, Word as word } from '@dna-platform/public';
import { DougsTheme } from './2-the-theme~code.tsx';

export class $Byline extends $Paragraph {
    protected override $Define(): void {
        super.$Define();
        this.classes.add(this, 'pd-byline');
    }

    override write(): ReactNode {
        const book = this.book;
        if (book === undefined) return null;
        const Word = $(word);
        const Reference = $(reference);
        return (
            <>
                by
                {' '}
                <Word>
                    <Reference>{book.author?.means?.identifier}</Reference>
                    {book.author?.name}
                </Word>
            </>
        );
    }
}

export const Byline = $($Byline);
const byline = Byline;

export class $DougsLibrary extends $Book {
    override write(): ReactNode {
        const Byline = $(byline);
        return (
            <>
                <Byline chapter={this.cover} />
                {super.write()}
            </>
        );
    }

    protected override turn(): void {
        if (this.bookmark !== undefined && this.bookmark === this.cover) window.scrollTo(0, 0);
        else super.turn();
    }
}

export const DougsLibrary = $($DougsLibrary);
$(DougsLibrary, Theme)(DougsTheme);
