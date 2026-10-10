import { ReactNode } from 'react';
import { $, $check } from '@dna-platform/chemistry';
import { $Annotation, $Author, $Chapter, $Paragraph, $Subject, $Word, $Writing, AnnotationSpecification, Reference as reference, Word as word, specify } from '@dna-platform/public';
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
    $cover?: $Chapter;
    get cover(): $Chapter | undefined { return this.$cover ?? this.book?.cover; }

    override write(): ReactNode {
        const author = this.cover!.annotations.expressed($Author)!;
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

export class $SubjectLine extends $Paragraph {
    $cover?: $Chapter;
    get cover(): $Chapter | undefined { return this.$cover ?? this.book?.cover; }

    override write(): ReactNode {
        const subject = this.cover!.annotations.expressed($Subject)!;
        const Word = $(word);
        const Said = $(Label);
        const Reference = $(reference);
        return (
            <>
                <Word>
                    <Said />
                    subject
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
        this.classes.add(this, 'pd-subject-line');
    }
}

export const Byline = $($Byline);
export const SubjectLine = $($SubjectLine);
