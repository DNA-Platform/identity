import { ReactNode } from 'react';
import { $, $check } from '@dna-platform/chemistry';
import { $Annotation, $Chapter, $Paragraph, $Word, $Writing, AnnotationSpecification, Reference as reference, Self as self, Word as word, specify } from '@dna-platform/public';
import type { $LibraryBook } from './1-the-book~code.tsx';

export class $Count extends $Word {
    override write(): ReactNode {
        const chapters = (this.book as $LibraryBook).pages;
        return `${chapters.indexOf(this.chapter!) + 1} of ${chapters.length}`;
    }

    protected override $Define(): void {
        super.$Define();
        this.classes.add(this, 'pd-count');
    }
}

export class $Before extends $Annotation {
    specification = new OfATurnSpecification();

    override defines(writing: $Writing): void {
        writing.classes.add(this, 'pa-before');
    }

    override erase(writing: $Writing): void {
        writing.classes.revert(this);
    }
}

export class $After extends $Annotation {
    specification = new OfATurnSpecification();

    override defines(writing: $Writing): void {
        writing.classes.add(this, 'pa-after');
    }

    override erase(writing: $Writing): void {
        writing.classes.revert(this);
    }
}

export class OfATurnSpecification extends AnnotationSpecification {
    @specify('this is said of a word of a turn')
    $saidOfAWordOfATurn(writing: $Writing): void {
        $check(writing instanceof $Word && writing.parent instanceof $Turn,
            'this is said of a word of a turn, and here it is said of something else');
    }
}

export const Count = $($Count);
export const Before = $($Before);
export const After = $($After);

export class $Turn extends $Paragraph {
    get before(): $Chapter {
        const chapters = (this.book as $LibraryBook).pages;
        return chapters[chapters.indexOf(this.chapter!) - 1] ?? this.chapter!;
    }
    get after(): $Chapter {
        const chapters = (this.book as $LibraryBook).pages;
        return chapters[chapters.indexOf(this.chapter!) + 1] ?? this.chapter!;
    }

    override write(): ReactNode {
        const Word = $(word);
        const Place = $(Count);
        const Earlier = $(Before);
        const Later = $(After);
        const Leads = $(this.before === this.chapter ? self : reference);
        const Follows = $(this.after === this.chapter ? self : reference);
        return (
            <>
                <Word>
                    <Earlier />
                    <Leads>{this.before.mention!.identifier}</Leads>
                    ← {this.before.title!.name}
                </Word>
                <Place />
                <Word>
                    <Later />
                    <Follows>{this.after.mention!.identifier}</Follows>
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

export const Turn = $($Turn);
