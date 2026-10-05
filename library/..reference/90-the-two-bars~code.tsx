import { ReactNode } from 'react';
import { css, RuleSet } from 'styled-components';
import { $, $check } from '@dna-platform/chemistry';
import { $Chapter, $Synopsis, $Writing, specify } from '@dna-platform/public';
import { $DougsBook, $Paged, DougsBookSpecification, Paged } from '../.manual/.book';

export class $DougsLibrary extends $DougsBook {
    specification = new DougsLibrarySpecification();
    get books(): $Chapter[] {
        return this.text.find($Chapter).filter(chapter => chapter.is($Synopsis) && chapter !== this.synopsis);
    }

    override write(): ReactNode {
        const Cover = $(this.cover!);
        const Synopsis = $(this.synopsis!);
        const Table = $(this.table!);
        return (
            <>
                <div className="pd-library-bar">
                    {this.filed()}
                    {this.byline()}
                </div>
                <div className="pd-book-bar">
                    <Cover />
                    {this.choices()}
                </div>
                <div className="pd-holds">
                    <Table />
                </div>
                <div className="pd-main">
                    <div className={this.open === undefined ? 'pd-page pd-front pd-open' : 'pd-page pd-front'}>
                        <Synopsis />
                        <div className="pd-shelf">
                            {this.shelved()}
                        </div>
                    </div>
                    {this.pages()}
                </div>
            </>
        );
    }

    shelved(): ReactNode {
        return this.books.map((book, index) => {
            const Book = $(book);
            return (
                <div
                    key={index}
                    className="pd-volume"
                >
                    <Book />
                </div>
            );
        });
    }
}

export class $TwoBars extends $Paged {
    override defines(writing: $Writing): void {
        super.defines(writing);
        writing.classes.add(this, 'pa-two-bars');
    }

    protected override parts(): RuleSet[] {
        return [...super.parts(), this.columns(), this.bars(), this.shelf()];
    }

    protected columns(): RuleSet {
        return css`
            .pd-book.pa-two-bars {
                display: grid;
                grid-template-columns: ${({ theme }) => theme.side} minmax(0, 1fr);
                column-gap: ${({ theme }) => theme.space};
                align-items: start;
            }
            @media (max-width: ${({ theme }) => theme.narrow}) {
                .pd-book.pa-two-bars { display: block; }
            }
        `;
    }

    protected bars(): RuleSet {
        return css`
            .pd-library-bar, .pd-book-bar {
                grid-column: 1 / -1;
                display: flex;
                flex-wrap: wrap;
                align-items: baseline;
                justify-content: space-between;
                column-gap: ${({ theme }) => theme.space};
            }
        `;
    }

    protected shelf(): RuleSet {
        return css`
            .pd-shelf {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(${({ theme }) => theme.side}, 1fr));
                gap: ${({ theme }) => theme.space};
            }
        `;
    }
}

export class DougsLibrarySpecification extends DougsBookSpecification {
    @specify('my library has a place for every chapter it holds')
    $placesEveryChapter(book: $DougsLibrary): void {
        const placed = [book.cover, book.synopsis, book.table, ...book.chapters, ...book.books];
        $check(book.text.find($Chapter).every(chapter => placed.includes(chapter)),
            'my library places its cover, its synopsis, its table of contents, its chapters and the chapters that represent its books, and it holds a chapter that is none of them');
    }
}

export const TwoBars = $($TwoBars);
$($($DougsLibrary), Paged)(TwoBars);
