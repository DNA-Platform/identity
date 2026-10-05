import { ReactNode } from 'react';
import { $ } from '@dna-platform/chemistry';
import { $Paragraph, Reference as reference, Word as word } from '@dna-platform/public';

export class $Filed extends $Paragraph {
    override write(): ReactNode {
        const book = this.book;
        const subject = book?.subject;
        if (subject === undefined || subject.means?.identifier === book?.means?.identifier) return null;
        const Word = $(word);
        const Reference = $(reference);
        return (
            <>
                filed under
                {' '}
                <Word>
                    <Reference>{subject.means?.identifier}</Reference>
                    {subject.name}
                </Word>
            </>
        );
    }

    protected override $Define(): void {
        super.$Define();
        this.classes.add(this, 'pd-filed');
    }
}

export class $Byline extends $Paragraph {
    override write(): ReactNode {
        const author = this.book?.author;
        if (author === undefined) return null;
        const Word = $(word);
        const Reference = $(reference);
        return (
            <>
                by
                {' '}
                <Word>
                    <Reference>{author.means?.identifier}</Reference>
                    {author.name}
                </Word>
            </>
        );
    }

    protected override $Define(): void {
        super.$Define();
        this.classes.add(this, 'pd-byline');
    }
}

export const Filed = $($Filed);
export const Byline = $($Byline);
