import { ReactNode } from 'react';
import { css, RuleSet } from 'styled-components';
import { $, $check } from '@dna-platform/chemistry';
import { $Chapter, $Writing, specify } from '@dna-platform/public';
import { $DougsBook, $Paged, DougsBookSpecification, Paged } from '../.manual/.book';

export class $DougsStory extends $DougsBook {
    specification = new DougsStorySpecification();

    override write(): ReactNode {
        const Cover = $(this.cover!);
        const Synopsis = $(this.synopsis!);
        const Table = $(this.table!);
        return (
            <>
                <div className="pd-bar">
                    {this.choices()}
                    {this.filed()}
                </div>
                <div className="pd-sheet">
                    <div className="pd-head">
                        <Cover />
                        {this.byline()}
                    </div>
                    <div className={this.open === undefined ? 'pd-page pd-front pd-open' : 'pd-page pd-front'}>
                        <Synopsis />
                        <Table />
                    </div>
                    {this.pages()}
                </div>
            </>
        );
    }
}

export class $Sheet extends $Paged {
    override defines(writing: $Writing): void {
        super.defines(writing);
        writing.classes.add(this, 'pa-sheet');
    }

    protected override parts(): RuleSet[] {
        return [...super.parts(), this.bar(), this.sheet()];
    }

    protected bar(): RuleSet {
        return css`
            .pd-bar, .pd-head {
                display: flex;
                flex-wrap: wrap;
                align-items: baseline;
                column-gap: ${({ theme }) => theme.space};
            }
        `;
    }

    protected sheet(): RuleSet {
        return css`
            .pd-sheet {
                max-width: ${({ theme }) => theme.measure};
                margin-inline: auto;
            }
        `;
    }
}

export class DougsStorySpecification extends DougsBookSpecification {
    @specify('my story has a place for every chapter it holds')
    $placesEveryChapter(book: $DougsStory): void {
        const placed = [book.cover, book.synopsis, book.table, ...book.chapters];
        $check(book.text.find($Chapter).every(chapter => placed.includes(chapter)),
            'my story places its cover, its synopsis, its table of contents and its chapters, and it holds a chapter that is none of them');
    }
}

export const Sheet = $($Sheet);
$($($DougsStory), Paged)(Sheet);
