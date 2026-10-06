import { ReactNode } from 'react';
import { $, $check } from '@dna-platform/chemistry';
import { $Annotation, $Paragraph, $Word, $Writing, AnnotationSpecification, Reference as reference, Word as word, specify } from '@dna-platform/public';

export class $Label extends $Annotation {
    specification = new LabelSpecification();

    override defines(writing: $Writing): void {
        writing.classes.add(this, 'pa-label');
    }

    override erase(writing: $Writing): void {
        writing.classes.revert(this);
    }
}

export class LabelSpecification extends AnnotationSpecification {
    @specify('label is said of a word')
    $saidOfAWord(writing: $Writing): void {
        $check(writing instanceof $Word, 'label is said of a word, and this is not one');
    }
}

export const Label = $($Label);

export class $Byline extends $Paragraph {
    override write(): ReactNode {
        const author = this.book!.author!;
        const Word = $(word);
        const Said = $(Label);
        const Reference = $(reference);
        return (
            <>
                <Word>
                    <Said />
                    by
                </Word>
                <Word>
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
        const Said = $(Label);
        const Reference = $(reference);
        return (
            <>
                <Word>
                    <Said />
                    filed under
                </Word>
                <Word>
                    <Reference>{subject.means!.identifier}</Reference>
                    {subject.name}
                </Word>
            </>
        );
    }

    protected override $Define(): void {
        super.$Define();
        this.classes.add(this, 'pd-filed-under');
    }
}

export const Byline = $($Byline);
export const FiledUnder = $($FiledUnder);
