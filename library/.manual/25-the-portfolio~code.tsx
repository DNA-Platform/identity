import { ReactNode } from 'react';
import { $, $check } from '@dna-platform/chemistry';
import { $Chapter, $Paragraph, Theme, specify } from '@dna-platform/public';
import { $LibraryBook, LibraryBookSpecification } from './1-the-book~code.tsx';
import { $Index, contentOf } from './14-the-entry~code.tsx';
import { Light as light, Tone as tone } from './16-the-tone~code.tsx';
import { $Design, $Exhibit, BuiltIn as builtIn, Plate as plate, Room as room, within } from './24-the-room~code.tsx';
import { Exhibition } from './25-the-portfolio~theme.tsx';

export class $Portfolio extends $LibraryBook {
    override specification = new PortfolioSpecification();
    get designs(): $Chapter[] { return this.chapters.filter(chapter => chapter.is($Design)); }
    override get open(): $Chapter | undefined {
        return super.open ?? this.body[0];
    }

    override head(): ReactNode {
        return undefined;
    }

    override switches(): ReactNode {
        return undefined;
    }

    protected override $Bound(): void {
        const Room = $(room);
        const Plate = $(plate);
        const BuiltIn = $(builtIn);
        const designs = this.designs;
        for (const chapter of designs) {
            chapter.annotations.add(this,
                <Room />
            );
            chapter.text.add(this,
                <BuiltIn />
            );
        }
        for (const paragraph of this.table?.annotations.expressed($Index)?.entries ?? []) {
            const place = contentOf(paragraph)?.identifier;
            const chapter = place === undefined ? undefined : this.chapterAt(place);
            if (chapter === undefined || !designs.includes(chapter)) continue;
            paragraph.annotations.add(this,
                <Plate number={designs.indexOf(chapter) + 1} />
            );
        }
        super.$Bound();
    }
}

export class PortfolioSpecification extends LibraryBookSpecification {
    @specify('every chapter of a portfolio is in a part')
    $everyChapterInAPart(book: $Portfolio): void {
        $check(book.chapters.every(chapter => chapter.part !== undefined),
            'every chapter of a portfolio is in a part, and one here is in none');
    }

    @specify('a portfolio shows every design it holds as built')
    $showsEveryDesign(book: $Portfolio): void {
        $check(book.designs.every(chapter => within(chapter, $Paragraph).some(paragraph => paragraph.is($Exhibit))),
            'a portfolio shows every design it holds as built, in a paragraph said to be the exhibit, and one here has none');
    }

}

export const Portfolio = $($Portfolio);
$(Portfolio, Theme)(Exhibition);
$(Portfolio, tone)(light);
