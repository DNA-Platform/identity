import { ReactNode } from 'react';
import { css, RuleSet } from 'styled-components';
import { $ } from '@dna-platform/chemistry';
import { $Chapter, $Synopsis, $Writing, Self } from '@dna-platform/public';
import { $DougsBook, $Layout, Layout } from '../.manual/.book';
import { BookLink } from './o1-the-bars~booklink.tsx';
import { Shelf as shelf } from './o1-the-bars~views.tsx';

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
                    {this.filed()}
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

export class $Bars extends $Layout {
    override defines(writing: $Writing): void {
        super.defines(writing);
        writing.classes.add(this, 'pa-bars');
    }

    protected override parts(): RuleSet[] {
        return [...super.parts(), this.areas(), this.bars(), this.narrow()];
    }

    protected areas(): RuleSet {
        return css`
            .pd-book.pa-bars {
                display: grid;
                grid-template-columns: ${({ theme }) => theme.side} minmax(0, 1fr);
                grid-template-rows: auto auto minmax(0, 1fr);
                grid-template-areas: 'library library' 'book book' 'holds pages';
                height: 100vh;
            }
            .pa-bars .pd-library-bar { grid-area: library; }
            .pa-bars .pd-book-bar { grid-area: book; }
            .pa-bars .pd-holds { grid-area: holds; overflow-y: auto; }
            .pa-bars .pd-leaves { grid-area: pages; overflow-y: auto; }
            .pa-bars .pd-words .pd-chapter { scroll-margin-block-start: ${({ theme }) => theme.space}; }
        `;
    }

    protected bars(): RuleSet {
        return css`
            .pa-bars .pd-library-bar, .pa-bars .pd-book-bar {
                display: flex;
                align-items: center;
                justify-content: space-between;
                column-gap: ${({ theme }) => theme.space};
            }
            .pa-bars .pd-switches {
                display: flex;
                gap: calc(${({ theme }) => theme.space} / 3);
            }
        `;
    }

    protected narrow(): RuleSet {
        return css`
            @media (max-width: ${({ theme }) => theme.narrow}) {
                .pd-book.pa-bars { display: block; height: auto; }
                .pa-bars .pd-library-bar, .pa-bars .pd-holds {
                    overflow-x: auto;
                    white-space: nowrap;
                    scrollbar-width: none;
                }
            }
        `;
    }
}

export const DougsLibrary = $($DougsLibrary);
export const Bars = $($Bars);
$(DougsLibrary, Layout)(Bars);
$(DougsLibrary, Self)(BookLink);
