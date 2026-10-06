import { ElementType } from 'react';
import { css, RuleSet } from 'styled-components';
import { $, selection } from '@dna-platform/chemistry';
import { $Chapter, $Paginated, $Writing } from '@dna-platform/public';
import type { $LibraryBook } from './1-the-book~code.tsx';
import { OfABookSpecification } from './1-the-book~said.tsx';

export class $Layout extends $Paginated {
    override specification = new OfABookSpecification();
    themeProvider = true;
    style: ElementType = selection.div`${this.parts()}`;
    override get pages(): $Chapter[] { return (this.book as $LibraryBook).chapters; }
    override get open(): $Chapter | undefined { return (this.book as $LibraryBook).open; }

    override defines(writing: $Writing): void {
        super.defines(writing);
        writing.classes.add(this, 'pa-layout');
        if (this.open !== undefined) writing.classes.add(this, 'pa-turned');
    }

    override erase(writing: $Writing): void {
        super.erase(writing);
        writing.classes.revert(this);
    }

    protected parts(): RuleSet[] {
        return [this.paging(), this.areas(), this.narrow()];
    }

    protected paging(): RuleSet {
        return css`
            .pd-leaf:not(.pd-open) { display: none; }
        `;
    }

    protected areas(): RuleSet {
        return css`
            .pd-book.pa-layout {
                display: grid;
                grid-template-columns: ${({ theme }) => theme.side} minmax(0, 1fr);
                grid-template-rows: auto auto minmax(0, 1fr);
                grid-template-areas: 'library library' 'holds head' 'holds leaves';
                height: 100vh;
            }
            .pa-layout .pd-library {
                grid-area: library;
                display: flex;
                align-items: center;
                column-gap: ${({ theme }) => theme.space};
            }
            .pa-layout .pd-holds { grid-area: holds; overflow-y: auto; }
            .pa-layout .pd-head {
                grid-area: head;
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                justify-content: space-between;
                column-gap: ${({ theme }) => theme.space};
            }
            .pa-layout .pd-switches {
                display: flex;
                flex-wrap: wrap;
                gap: calc(${({ theme }) => theme.space} / 3);
            }
            .pa-layout .pd-leaves { grid-area: leaves; overflow-y: auto; }
            .pa-layout .pd-words .pd-chapter { scroll-margin-block-start: ${({ theme }) => theme.space}; }
        `;
    }

    protected narrow(): RuleSet {
        return css`
            @media (max-width: ${({ theme }) => theme.narrow}) {
                .pd-book.pa-layout { display: block; height: auto; }
                .pa-layout .pd-library, .pa-layout .pd-holds {
                    overflow-x: auto;
                    white-space: nowrap;
                    scrollbar-width: none;
                }
                .pa-layout.pa-turned .pa-table-of-contents { display: none; }
            }
        `;
    }
}

export const Layout = $($Layout);
