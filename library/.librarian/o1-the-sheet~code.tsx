import { ReactNode } from 'react';
import { $, selection } from '@dna-platform/chemistry';
import { $Annotation, $Chapter, $Format, $Paragraph, $Section, $Writing, Given, Theme } from '@dna-platform/public';
import { $LibraryBook, OfABookSpecification, Tab as tab } from '../.manual/.book';
import { BookPaper as bookPaper, NightPaper as nightPaper, WhitePaper as whitePaper } from './o1-the-sheet~theme.tsx';

export class $Sheet extends $Format {
    specification = new OfABookSpecification();
    themeProvider = true;
    style = selection.div`
        .pa-sheet .pd-leaves { display: grid; justify-items: center; align-content: start; }
        .pa-sheet .pd-leaf {
            box-sizing: border-box;
            width: min(${({ theme }) => theme.measure}, 100%);
        }
        @media (max-width: ${({ theme }) => theme.narrow}) {
            .pa-sheet .pd-leaves { justify-items: stretch; }
        }
    `;

    override defines(writing: $Writing): void {
        super.defines(writing);
        writing.classes.add(this, 'pa-sheet');
    }

    override erase(writing: $Writing): void {
        super.erase(writing);
        writing.classes.revert(this);
    }

    protected opening(chapter: $Chapter): $Paragraph | undefined {
        return chapter.parts
            .flatMap(part => part instanceof $Section ? part.parts : [part])
            .find((part): part is $Paragraph => part instanceof $Paragraph);
    }

    protected override $Bound(): void {
        for (const chapter of (this.book as $LibraryBook).chapters)
            this.opening(chapter)?.classes.add(this, 'pa-opening');
        super.$Bound();
    }
}

export const Sheet = $($Sheet);

export class $Story extends $LibraryBook {
    get papers(): Given<$Annotation>[] {
        return [bookPaper, nightPaper, whitePaper];
    }

    override switches(): ReactNode {
        const Tab = $(tab);
        return (
            <>
                <Tab
                    chapter={this.cover}
                    of={bookPaper}
                    among={this.papers}
                >
                    book
                </Tab>
                <Tab
                    chapter={this.cover}
                    of={nightPaper}
                    among={this.papers}
                >
                    night
                </Tab>
                <Tab
                    chapter={this.cover}
                    of={whitePaper}
                    among={this.papers}
                >
                    white
                </Tab>
                {super.switches()}
            </>
        );
    }

    protected override $Define(): void {
        super.$Define();
        const Given = $(Sheet);
        this.annotations.add(this,
            <Given />
        );
    }
}

export const Story = $($Story);
$(Story, Theme)(bookPaper);
