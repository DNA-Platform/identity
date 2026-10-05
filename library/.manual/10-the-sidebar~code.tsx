import { ReactNode } from 'react';
import { css, RuleSet } from 'styled-components';
import { $, $check } from '@dna-platform/chemistry';
import { $Chapter, $Writing, specify } from '@dna-platform/public';
import { $DougsBook, DougsBookSpecification } from './1-the-book~code.tsx';
import { $Paged, Paged } from './12-the-pages~code.tsx';

export class $SidebarBook extends $DougsBook {
    specification = new SidebarBookSpecification();

    override write(): ReactNode {
        const Cover = $(this.cover!);
        const Synopsis = $(this.synopsis!);
        const Table = $(this.table!);
        return (
            <>
                <div className="pd-side">
                    {this.filed()}
                    <Cover />
                    {this.byline()}
                    {this.choices()}
                    <Table />
                </div>
                <div className="pd-pages">
                    <div className={this.open === undefined ? 'pd-page pd-front pd-open' : 'pd-page pd-front'}>
                        <Synopsis />
                    </div>
                    {this.pages()}
                </div>
            </>
        );
    }
}

export class $Sidebar extends $Paged {
    override defines(writing: $Writing): void {
        super.defines(writing);
        writing.classes.add(this, 'pa-sidebar');
    }

    protected override parts(): RuleSet[] {
        return [...super.parts(), this.columns()];
    }

    protected columns(): RuleSet {
        return css`
            .pd-book.pa-sidebar {
                display: grid;
                grid-template-columns: ${({ theme }) => theme.side} minmax(0, 1fr);
                column-gap: ${({ theme }) => theme.space};
                align-items: start;
            }
            @media (max-width: ${({ theme }) => theme.narrow}) {
                .pd-book.pa-sidebar { display: block; }
            }
        `;
    }
}

export class SidebarBookSpecification extends DougsBookSpecification {
    @specify('a sidebar book has a place for every chapter it holds')
    $placesEveryChapter(book: $SidebarBook): void {
        const placed = [book.cover, book.synopsis, book.table, ...book.chapters];
        $check(book.text.find($Chapter).every(chapter => placed.includes(chapter)),
            'a sidebar book places its cover, its synopsis, its table of contents and its chapters, and this one holds a chapter that is none of them');
    }
}

export const SidebarBook = $($SidebarBook);
export const Sidebar = $($Sidebar);
$(SidebarBook, Paged)(Sidebar);
