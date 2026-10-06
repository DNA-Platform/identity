import { ReactNode } from 'react';
import { css, RuleSet } from 'styled-components';
import { $ } from '@dna-platform/chemistry';
import { $Chapter, $Synopsis, $Writing, Self } from '@dna-platform/public';
import { $DougsBook, $Imposition, Imposition } from '../.manual/.book';
import { Shelfmark } from './o1-the-two-bars~shelfmark.tsx';
import { Shelf as shelf } from './o1-the-two-bars~views.tsx';

export class $DougsLibrary extends $DougsBook {
    get books(): $Chapter[] {
        return this.text.find($Chapter).filter(chapter => chapter.is($Synopsis) && chapter !== this.synopsis);
    }
    override get placed(): ($Chapter | undefined)[] {
        return [...super.placed, ...this.books];
    }

    override write(): ReactNode {
        const Cover = $(this.cover!);
        const Synopsis = $(this.synopsis!);
        const Table = $(this.table!);
        return (
            <>
                <div className="pd-library-bar">
                    {this.classmark()}
                    {this.byline()}
                </div>
                <div className="pd-book-bar">
                    <Cover />
                    <div className="pd-switches">
                        {this.switches()}
                    </div>
                </div>
                <div className="pd-holds">
                    <Table />
                </div>
                <div className="pd-leaves">
                    {this.front(
                        <>
                            <div className="pd-words">
                                <Synopsis />
                            </div>
                            <div className="pd-shelf">
                                {this.volumes()}
                            </div>
                        </>
                    )}
                    {this.leaves()}
                </div>
            </>
        );
    }

    volumes(): ReactNode {
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

    protected override $Define(): void {
        super.$Define();
        const Shelf = $(shelf);
        this.annotations.add(this,
            <Shelf />
        );
    }
}

export class $TwoBars extends $Imposition {
    override defines(writing: $Writing): void {
        super.defines(writing);
        writing.classes.add(this, 'pa-two-bars');
    }

    protected override parts(): RuleSet[] {
        return [...super.parts(), this.areas(), this.bars(), this.narrow()];
    }

    protected areas(): RuleSet {
        return css`
            .pd-book.pa-two-bars {
                display: grid;
                grid-template-columns: ${({ theme }) => theme.side} minmax(0, 1fr);
                grid-template-rows: auto auto minmax(0, 1fr);
                grid-template-areas: 'library library' 'book book' 'holds pages';
                height: 100vh;
            }
            .pa-two-bars .pd-library-bar { grid-area: library; }
            .pa-two-bars .pd-book-bar { grid-area: book; }
            .pa-two-bars .pd-holds { grid-area: holds; overflow-y: auto; }
            .pa-two-bars .pd-leaves { grid-area: pages; overflow-y: auto; }
            .pa-two-bars .pd-words .pd-chapter { scroll-margin-block-start: ${({ theme }) => theme.space}; }
        `;
    }

    protected bars(): RuleSet {
        return css`
            .pa-two-bars .pd-library-bar, .pa-two-bars .pd-book-bar {
                display: flex;
                align-items: center;
                justify-content: space-between;
                column-gap: ${({ theme }) => theme.space};
            }
            .pa-two-bars .pd-switches {
                display: flex;
                gap: calc(${({ theme }) => theme.space} / 3);
            }
        `;
    }

    protected narrow(): RuleSet {
        return css`
            @media (max-width: ${({ theme }) => theme.narrow}) {
                .pd-book.pa-two-bars { display: block; height: auto; }
                .pa-two-bars .pd-library-bar, .pa-two-bars .pd-holds {
                    overflow-x: auto;
                    white-space: nowrap;
                    scrollbar-width: none;
                }
            }
        `;
    }
}

export const DougsLibrary = $($DougsLibrary);
export const TwoBars = $($TwoBars);
$(DougsLibrary, Imposition)(TwoBars);
$(DougsLibrary, Self)(Shelfmark);
