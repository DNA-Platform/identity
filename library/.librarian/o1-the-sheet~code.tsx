import { ElementType, ReactNode } from 'react';
import { css, RuleSet } from 'styled-components';
import { $, selection } from '@dna-platform/chemistry';
import { $Annotation, $Chapter, $Date, $Format, $Writing, Given, Theme, Word as word } from '@dna-platform/public';
import { $Count, $Dated, $LibraryBook, Count as count, OfABookSpecification, Tab as tab } from '../.manual/.book';
import { StoryTheme } from './o1-the-sheet~theme.tsx';

export class $Paper extends $Annotation {
    specification = new OfABookSpecification();

    override defines(writing: $Writing): void {
        for (const annotation of writing.annotations.after(this))
            if (annotation instanceof $Paper)
                writing.annotations.express(annotation, false);
        writing.classes.add(this, 'pa-paper');
    }

    override erase(writing: $Writing): void {
        writing.classes.revert(this);
    }
}

export class $BookPaper extends $Paper {
    override defines(writing: $Writing): void {
        super.defines(writing);
        writing.classes.add(this, 'pa-book-paper');
    }
}

export class $NightPaper extends $Paper {
    override defines(writing: $Writing): void {
        super.defines(writing);
        writing.classes.add(this, 'pa-night-paper');
    }
}

export class $WhitePaper extends $Paper {
    override defines(writing: $Writing): void {
        super.defines(writing);
        writing.classes.add(this, 'pa-white-paper');
    }
}

export const Paper = $($Paper);
export const BookPaper = $($BookPaper);
export const NightPaper = $($NightPaper);
export const WhitePaper = $($WhitePaper);

export class $ChapterDate extends $Date {
    get shown(): $Date | undefined { return (this.book as $Story).open?.annotations.expressed($Dated)?.date; }
    override get name(): string { return this.shown?.name ?? ''; }
    override get date(): string | undefined { return this.shown?.date; }
}

export class $StoryCount extends $Count {
    override write(): ReactNode {
        const chapters = (this.book as $LibraryBook).body;
        const Word = $(word);
        return (
            <>
                {'chapter '}
                <Word>{String(chapters.indexOf(this.chapter!) + 1)}</Word>
                {' of '}
                <Word>{String(chapters.length)}</Word>
            </>
        );
    }
}

export const ChapterDate = $($ChapterDate);
export const StoryCount = $($StoryCount);

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
        return [this.tools(), this.sheet(), this.top(), this.phone()];
    }

    protected tools(): RuleSet {
        return css`
            .pd-book.pa-sheet .pd-head { justify-content: center; }
            .pd-book.pa-sheet .pd-switches { justify-content: center; }
        `;
    }

    protected sheet(): RuleSet {
        return css`
            .pa-sheet .pd-pages {
                display: grid;
                grid-template-columns: min(calc(${({ theme }) => theme.measure} + ${({ theme }) => theme.space} * 6.3333), 100%);
                grid-template-areas: 'top' 'page';
                justify-content: center;
                align-content: start;
            }
            .pa-sheet .pd-pages::before {
                content: '';
                grid-column: 1;
                grid-row: top-start / page-end;
            }
            .pa-sheet .pd-top { grid-area: top; }
            .pa-sheet .pa-page { grid-area: page; }
            .pd-book.pa-sheet .pa-page { scroll-margin-block-start: calc(${({ theme }) => theme.space} * 10); }
        `;
    }

    protected top(): RuleSet {
        return css`
            .pa-sheet .pd-top {
                display: grid;
                grid-template-columns: auto auto;
                grid-template-areas: 'cover byline' 'date date' 'rule rule';
                justify-content: center;
                align-items: baseline;
            }
            .pa-sheet .pd-top .pd-paragraph.pd-byline { grid-area: byline; justify-self: start; }
            .pa-sheet .pd-top .pd-word.pd-date { grid-area: date; justify-self: center; }
            .pa-sheet .pd-top::after { grid-area: rule; justify-self: center; }
            .pa-sheet .pd-chapter.pa-page.pa-dated .pd-word.pd-date { display: none; }
        `;
    }

    protected phone(): RuleSet {
        return css`
            @media (max-width: ${({ theme }) => theme.narrow}) {
                .pd-book.pa-sheet .pd-holds { order: 1; }
                .pd-book.pa-sheet .pd-head { order: 2; }
                .pd-book.pa-sheet .pd-switches { gap: calc(${({ theme }) => theme.space} / 4); }
                .pd-book.pa-sheet { min-height: 100vh; }
                .pd-book.pa-sheet .pd-pages {
                    flex: 1;
                    grid-template-columns: minmax(0, 1fr);
                    grid-template-rows: auto 1fr;
                    align-content: stretch;
                }
            }
        `;
    }
}

export const Sheet = $($Sheet);

export class $Story extends $LibraryBook {
    get papers(): Given<$Annotation>[] {
        return [BookPaper, NightPaper, WhitePaper];
    }
    get latest(): $Chapter | undefined {
        const day = (chapter: $Chapter): string => chapter.annotations.expressed($Dated)?.date?.date ?? '';
        return this.body.reduce<$Chapter | undefined>((latest, chapter) => (latest === undefined || day(chapter) > day(latest) ? chapter : latest), undefined);
    }
    override get open(): $Chapter | undefined {
        return super.open ?? this.latest;
    }

    override head(): ReactNode {
        return (
            <div className="pd-switches">
                {this.switches()}
            </div>
        );
    }

    override top(): ReactNode {
        const Cover = $(this.cover!);
        const Day = $(ChapterDate);
        return (
            <div className="pd-top">
                <Cover />
                {this.byline()}
                <Day chapter={this.cover} />
            </div>
        );
    }

    override switches(): ReactNode {
        const Tab = $(tab);
        return (
            <>
                <Tab
                    chapter={this.cover}
                    of={BookPaper}
                    among={this.papers}
                >
                    book
                </Tab>
                <Tab
                    chapter={this.cover}
                    of={NightPaper}
                    among={this.papers}
                >
                    night
                </Tab>
                <Tab
                    chapter={this.cover}
                    of={WhitePaper}
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
        const Worn = $(Paper);
        this.annotations.add(this,
            <Given />,
            <Worn />
        );
    }
}

export const Story = $($Story);
$(Story, Theme)(StoryTheme);
$(Story, Paper)(BookPaper);
$(Story, count)(StoryCount);
