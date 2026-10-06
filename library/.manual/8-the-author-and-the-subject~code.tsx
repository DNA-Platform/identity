import { ReactNode } from 'react';
import { $ } from '@dna-platform/chemistry';
import { $Paragraph, Reference as reference, Word as word } from '@dna-platform/public';

export class $Byline extends $Paragraph {
    override write(): ReactNode {
        const author = this.book!.author!;
        const Word = $(word);
        const Reference = $(reference);
        return (
            <>
                by <Word>
                    <Reference>{author.means!.identifier}</Reference>
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

export class $FiledUnder extends $Paragraph {
    override write(): ReactNode {
        const subject = this.book!.subject!;
        const Word = $(word);
        const Reference = $(reference);
        return (
            <>
                filed under <Word>
                    <Reference>{subject.means!.identifier}</Reference>
                    {subject.name}
                </Word>
            </>
        );
    }

    protected override $Define(): void {
        super.$Define();
        this.classes.add(this, 'pd-filedUnder');
    }
}

export const Byline = $($Byline);
export const FiledUnder = $($FiledUnder);
