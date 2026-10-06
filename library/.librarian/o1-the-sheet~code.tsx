import { ReactNode } from 'react';
import { css, RuleSet } from 'styled-components';
import { $ } from '@dna-platform/chemistry';
import { $Annotation, $Chapter, $Paragraph, $Section, $Writing, Given, Theme } from '@dna-platform/public';
import { $LibraryBook, $Layout, Layout, Tab as tab } from '../.manual/.book';
import { BookPaper as bookPaper, NightPaper as nightPaper, WhitePaper as whitePaper } from './o1-the-sheet~theme.tsx';

export class $Story extends $LibraryBook {
    get papers(): Given<$Annotation>[] {
        return [bookPaper, nightPaper, whitePaper];
    }

    override write(): ReactNode {
        const Cover = $(this.cover!);
        const Synopsis = $(this.synopsis!);
        const Table = $(this.table!);
        return (
            <>
                <div className="pd-bar">
                    {this.switches()}
                    {this.filed()}
                </div>
                <div className="pd-sheet">
                    <div className="pd-head">
                        <Cover />
                        {this.byline()}
                    </div>
                    {this.front(
                        <div className="pd-words">
                            <Synopsis />
                            <Table />
                        </div>
                    )}
                    {this.leaves()}
                </div>
            </>
        );
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
}

export class $Sheet extends $Layout {
    override defines(writing: $Writing): void {
        super.defines(writing);
        writing.classes.add(this, 'pa-sheet');
    }

    protected override parts(): RuleSet[] {
        return [...super.parts(), this.areas(), this.bar(), this.head(), this.phone()];
    }

    protected areas(): RuleSet {
        return css`
            .pd-book.pa-sheet {
                display: grid;
                grid-template-areas: 'bar' 'sheet';
                justify-items: center;
            }
            .pa-sheet .pd-bar { grid-area: bar; }
            .pa-sheet .pd-sheet {
                grid-area: sheet;
                box-sizing: border-box;
                width: min(${({ theme }) => theme.measure}, 100%);
            }
        `;
    }

    protected bar(): RuleSet {
        return css`
            .pa-sheet .pd-bar {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                align-items: center;
                gap: calc(${({ theme }) => theme.space} * 0.44);
            }
        `;
    }

    protected head(): RuleSet {
        return css`
            .pa-sheet .pd-head {
                display: grid;
                grid-template-columns: auto auto;
                grid-template-areas: 'cover byline' 'rule rule';
                justify-content: center;
                align-items: baseline;
            }
            .pa-sheet .pd-head .pd-paragraph.pd-byline { grid-area: byline; }
            .pa-sheet .pd-head::after { grid-area: rule; justify-self: center; }
        `;
    }

    protected phone(): RuleSet {
        return css`
            @media (max-width: ${({ theme }) => theme.narrow}) {
                .pd-book.pa-sheet { justify-items: stretch; }
            }
        `;
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

export const Story = $($Story);
export const Sheet = $($Sheet);
$(Story, Layout)(Sheet);
$(Story, Theme)(bookPaper);
