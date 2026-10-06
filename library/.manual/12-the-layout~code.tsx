import { ElementType, ReactNode } from 'react';
import { css, RuleSet } from 'styled-components';
import { $, selection } from '@dna-platform/chemistry';
import { $Chapter, $Paginated, $Writing } from '@dna-platform/public';
import type { $LibraryBook } from './1-the-book~code.tsx';
import { OfABookSpecification } from './1-the-book~said.tsx';

export class $Layout extends $Paginated {
    override specification = new OfABookSpecification();
    themeProvider = true;
    style: ElementType = selection.div<{ $at?: string }>`
        ${this.parts()}
        .pa-dark .pd-subjects .pd-paragraph:has(> .pa-reference[href='${props => props.$at}']) {
            background: ${({ theme }) => theme.barOn};
            color: ${({ theme }) => theme.barInk};
            box-shadow: inset 0 -2px 0 var(--colour, ${({ theme }) => theme.barDim});
        }
        .pa-light .pd-subjects .pd-paragraph:has(> .pa-reference[href='${props => props.$at}']), .pa-white-over-black .pd-subjects .pd-paragraph:has(> .pa-reference[href='${props => props.$at}']) {
            background: ${({ theme }) => theme.side};
            color: ${({ theme }) => theme.ink};
            box-shadow: inset 0 -2px 0 var(--colour, ${({ theme }) => theme.soft});
        }
    `;
    override get pages(): $Chapter[] { return (this.book as $LibraryBook).pages; }
    override get open(): $Chapter | undefined { return (this.book as $LibraryBook).open; }

    protected override $Bound(): void {
        const Here = this.style;
        this.style = (props: { children?: ReactNode }) => <Here $at={(this.book as $LibraryBook).means?.identifier} {...props} />;
        super.$Bound();
    }

    override defines(writing: $Writing): void {
        for (const annotation of writing.annotations.after(this))
            if (annotation instanceof $Layout)
                writing.annotations.express(annotation, false);
        super.defines(writing);
        writing.classes.add(this, 'pa-layout');
        if (this.open !== undefined) writing.classes.add(this, 'pa-turned');
    }

    override erase(writing: $Writing): void {
        super.erase(writing);
        writing.classes.revert(this);
    }

    protected parts(): RuleSet[] {
        return [this.paging(), this.regions(), this.areas(), this.phone()];
    }

    protected paging(): RuleSet {
        return css`
            .pd-leaf:not(.pd-open) { display: none; }
        `;
    }

    protected regions(): RuleSet {
        return css`
            .pd-book.pa-layout { display: grid; height: 100vh; }
            .pa-layout .pd-library {
                grid-area: library;
                display: flex;
                align-items: center;
                column-gap: calc(${({ theme }) => theme.space} / 4);
                min-width: 0;
            }
            .pa-layout .pd-me {
                grid-area: me;
                display: flex;
                align-items: center;
                column-gap: calc(${({ theme }) => theme.space} * 0.375);
            }
            .pa-layout .pd-holds { grid-area: holds; min-width: 0; overflow-y: auto; }
            .pa-layout .pd-head {
                grid-area: head;
                display: flex;
                flex-wrap: wrap;
                align-items: flex-end;
                justify-content: space-between;
                gap: calc(${({ theme }) => theme.space} * 0.42) calc(${({ theme }) => theme.space} * 0.83);
                min-width: 0;
            }
            .pa-layout .pd-switches {
                display: flex;
                flex-wrap: wrap;
                justify-content: flex-end;
                align-items: center;
                gap: calc(${({ theme }) => theme.space} / 3);
            }
            .pa-layout .pd-leaves { grid-area: leaves; min-width: 0; overflow-y: auto; }
            .pa-layout .pd-words .pd-chapter { scroll-margin-block-start: ${({ theme }) => theme.space}; }
        `;
    }

    protected areas(): RuleSet {
        return css`
            .pd-book.pa-layout {
                grid-template-columns: ${({ theme }) => theme.holdsColumn} minmax(0, 1fr);
                grid-template-rows: auto auto minmax(0, 1fr);
                grid-template-areas: 'library library' 'holds head' 'holds leaves';
            }
            .pa-layout .pd-me {
                grid-area: library;
                justify-self: end;
                background: none;
            }
        `;
    }

    protected phone(): RuleSet {
        return css`
            @media (max-width: ${({ theme }) => theme.narrow}) {
                .pd-book.pa-layout { display: flex; flex-direction: column; height: auto; }
                .pa-layout .pd-library {
                    position: sticky;
                    top: 0;
                    z-index: 4;
                    box-sizing: border-box;
                    height: ${({ theme }) => theme.barHeight};
                    margin-inline-end: ${({ theme }) => theme.barHeight};
                    overflow: auto hidden;
                    white-space: nowrap;
                    scrollbar-width: none;
                }
                .pa-layout .pd-me {
                    position: fixed;
                    z-index: 5;
                    top: 0;
                    right: 0;
                    justify-content: center;
                    box-sizing: border-box;
                    width: ${({ theme }) => theme.barHeight};
                    height: ${({ theme }) => theme.barHeight};
                    padding: 0;
                }
                .pa-layout .pd-me .pd-word { display: none; }
                .pa-layout .pd-head { order: 1; flex-direction: column; align-items: stretch; }
                .pa-layout .pd-switches { justify-content: flex-start; }
                .pa-layout .pd-holds { order: 2; overflow: auto hidden; white-space: nowrap; scrollbar-width: none; }
                .pa-layout .pd-leaves { order: 3; overflow: visible; }
            }
        `;
    }
}

export const Layout = $($Layout);
