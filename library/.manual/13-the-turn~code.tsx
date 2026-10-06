import { ReactNode } from 'react';
import { $ } from '@dna-platform/chemistry';
import { $Chapter, $Paragraph, $Word, Reference as reference, Self as self, Word as word } from '@dna-platform/public';
import type { $DougsBook } from './1-the-book~code.tsx';

export class $Count extends $Word {
    override write(): ReactNode {
        const chapters = (this.book as $DougsBook).chapters;
        return `${chapters.indexOf(this.chapter!) + 1} of ${chapters.length}`;
    }

    protected override $Define(): void {
        super.$Define();
        this.classes.add(this, 'pd-count');
    }
}

export class $Turn extends $Paragraph {
    get before(): $Chapter {
        const chapters = (this.book as $DougsBook).chapters;
        return chapters[chapters.indexOf(this.chapter!) - 1] ?? this.chapter!;
    }
    get after(): $Chapter {
        const chapters = (this.book as $DougsBook).chapters;
        return chapters[chapters.indexOf(this.chapter!) + 1] ?? this.chapter!;
    }

    override write(): ReactNode {
        const Word = $(word);
        const Place = $(Count);
        const Before = $(this.before === this.chapter ? self : reference);
        const After = $(this.after === this.chapter ? self : reference);
        return (
            <>
                <Word>
                    <Before>{this.before.mention!.identifier}</Before>
                    ← {this.before.title!.name}
                </Word>
                <Place />
                <Word>
                    <After>{this.after.mention!.identifier}</After>
                    {this.after.title!.name} →
                </Word>
            </>
        );
    }

    protected override $Define(): void {
        super.$Define();
        this.classes.add(this, 'pd-turn');
    }
}

export const Count = $($Count);
export const Turn = $($Turn);
