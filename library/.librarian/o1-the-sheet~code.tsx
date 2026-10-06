import { ElementType, ReactNode } from 'react';
import { css, RuleSet } from 'styled-components';
import { $, selection } from '@dna-platform/chemistry';
import { $Annotation, $Format, $Writing, Given, Theme } from '@dna-platform/public';
import { $LibraryBook, OfABookSpecification, Tab as tab, Tone as tone, WhiteOverBlack as whiteOverBlack } from '../.manual/.book';
import { BookPaper as bookPaper, NightPaper as nightPaper, WhitePaper as whitePaper } from './o1-the-sheet~theme.tsx';

export class $Sheet extends $Format {
    specification = new OfABookSpecification();
    themeProvider = true;
    style: ElementType = selection.div`${this.parts()}`;

    override defines(writing: $Writing): void {
        super.defines(writing);
        writing.classes.add(this, 'pa-sheet');
    }

    override erase(writing: $Writing): void {
        super.erase(writing);
        writing.classes.revert(this);
    }

    protected parts(): RuleSet[] {
        return [this.tools(), this.sheet(), this.masthead(), this.phone()];
    }

    protected tools(): RuleSet {
        return css`
            .pd-book.pa-sheet .pd-head { justify-content: center; }
            .pd-book.pa-sheet .pd-switches { justify-content: center; }
        `;
    }

    protected sheet(): RuleSet {
        return css`
            .pa-sheet .pd-leaves {
                display: grid;
                grid-template-columns: min(${({ theme }) => theme.measure}, 100%);
                grid-template-areas: 'masthead' 'leaf';
                justify-content: center;
                align-content: start;
            }
            .pa-sheet .pd-leaves::before {
                content: '';
                grid-column: 1;
                grid-row: masthead-start / leaf-end;
            }
            .pa-sheet .pd-masthead { grid-area: masthead; }
            .pa-sheet .pd-leaf { grid-area: leaf; }
            .pd-book.pa-sheet .pd-words .pd-chapter { scroll-margin-block-start: calc(${({ theme }) => theme.space} * 10); }
        `;
    }

    protected masthead(): RuleSet {
        return css`
            .pa-sheet .pd-masthead {
                display: grid;
                grid-template-columns: auto auto;
                grid-template-areas: 'cover byline' 'rule rule';
                justify-content: center;
                align-items: baseline;
            }
            .pa-sheet .pd-masthead .pd-paragraph.pd-byline { grid-area: byline; }
            .pa-sheet .pd-masthead::after { grid-area: rule; justify-self: center; }
        `;
    }

    protected phone(): RuleSet {
        return css`
            @media (max-width: ${({ theme }) => theme.narrow}) {
                .pd-book.pa-sheet .pd-holds { order: 1; }
                .pd-book.pa-sheet .pd-head { order: 2; }
                .pd-book.pa-sheet .pd-switches { gap: calc(${({ theme }) => theme.space} / 4); }
                .pa-sheet .pd-leaves { grid-template-columns: minmax(0, 1fr); }
            }
        `;
    }
}

export const Sheet = $($Sheet);

export class $Story extends $LibraryBook {
    get papers(): Given<$Annotation>[] {
        return [bookPaper, nightPaper, whitePaper];
    }

    override head(): ReactNode {
        return (
            <div className="pd-switches">
                {this.switches()}
            </div>
        );
    }

    override front(): ReactNode {
        return (
            <>
                {this.masthead()}
                {super.front()}
            </>
        );
    }

    masthead(): ReactNode {
        const Cover = $(this.cover!);
        return (
            <div className="pd-masthead">
                <Cover />
                {this.byline()}
            </div>
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
$(Story, tone)(whiteOverBlack);
