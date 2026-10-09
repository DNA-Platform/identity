import { ReactNode } from 'react';
import { $, $check } from '@dna-platform/chemistry';
import { $Chapter, $Paragraph, $Section, specify } from '@dna-platform/public';
import { $LibraryBook, LibraryBookSpecification } from './1-the-book~code.tsx';
import { $Appendix, Folded as folded, Folder as folder } from './14-the-entry~code.tsx';
import { Light as light, Tone as tone } from './16-the-tone~code.tsx';
import { $Brief, Numbered as numbered, WordsForward as wordsForward } from './10-the-manual~forward.tsx';

export class $ManualBook extends $LibraryBook {
    override specification = new ManualBookSpecification();
    override get open(): $Chapter | undefined {
        return super.open ?? this.pages[0];
    }

    override head(): ReactNode {
        return undefined;
    }

    override front(): ReactNode {
        return undefined;
    }

    override switches(): ReactNode {
        return undefined;
    }

    override root(): undefined {
        return undefined;
    }

    protected override $Define(): void {
        super.$Define();
        this.$is = [wordsForward, numbered];
    }

    protected override $Bound(): void {
        const Folder = $(folder);
        for (const section of this.table?.text.find($Section) ?? []) {
            section.annotations.add(this,
                <Folder />
            );
            if (section.is($Appendix)) section.$is = [folded];
        }
        super.$Bound();
    }
}

export class ManualBookSpecification extends LibraryBookSpecification {
    @specify('every chapter of a manual opens with a brief')
    $everyChapterHasABrief(book: $ManualBook): void {
        $check(book.chapters.every(chapter => chapter.text.find($Paragraph).some(paragraph => paragraph.is($Brief))),
            'every chapter of a manual opens with a brief, and one here has none');
    }
}

export const ManualBook = $($ManualBook);
$(ManualBook, tone)(light);
