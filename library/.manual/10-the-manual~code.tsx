import { ReactNode } from 'react';
import { css, RuleSet } from 'styled-components';
import { $ } from '@dna-platform/chemistry';
import { $Writing } from '@dna-platform/public';
import { $DougsBook } from './1-the-book~code.tsx';
import { Choice as choice } from './9-the-switch~code.tsx';
import { CodeForward as codeForward } from './10-the-manual~forward.tsx';
import { $Paged, Paged } from './12-the-pages~code.tsx';

export class $Manual extends $DougsBook {
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
                    <div className="pd-choices">
                        {this.choices()}
                    </div>
                    <Table />
                </div>
                <div className="pd-pages">
                    {this.front(
                        <div className="pd-words">
                            <Synopsis />
                        </div>
                    )}
                    {this.pages()}
                </div>
            </>
        );
    }

    override choices(): ReactNode {
        const Choice = $(choice);
        return (
            <>
                {super.choices()}
                <Choice
                    chapter={this.cover}
                    of={codeForward}
                >
                    code forward
                </Choice>
            </>
        );
    }
}

export class $Spread extends $Paged {
    override defines(writing: $Writing): void {
        super.defines(writing);
        writing.classes.add(this, 'pa-spread');
    }

    protected override parts(): RuleSet[] {
        return [...super.parts(), this.columns(), this.spread(), this.narrow()];
    }

    protected columns(): RuleSet {
        return css`
            .pd-book.pa-spread {
                display: grid;
                grid-template-columns: ${({ theme }) => theme.side} minmax(0, 1fr);
                grid-template-areas: 'side pages';
                height: 100vh;
            }
            .pa-spread .pd-side { grid-area: side; overflow-y: auto; }
            .pa-spread .pd-pages { grid-area: pages; min-height: 0; }
            .pa-spread .pd-choices {
                display: flex;
                flex-wrap: wrap;
                gap: calc(${({ theme }) => theme.space} / 4);
            }
        `;
    }

    protected spread(): RuleSet {
        return css`
            .pa-spread .pd-page.pd-open {
                display: grid;
                grid-template-columns: minmax(0, 1fr) auto;
                grid-template-areas: 'words files';
                height: 100%;
            }
            .pa-spread .pd-words { grid-area: words; overflow-y: auto; }
            .pa-spread .pd-files { grid-area: files; overflow-y: auto; width: calc(2.2 * ${({ theme }) => theme.side}); }
            .pa-spread .pd-files:empty { display: none; }
        `;
    }

    protected narrow(): RuleSet {
        return css`
            @media (max-width: ${({ theme }) => theme.narrow}) {
                .pd-book.pa-spread { display: block; height: auto; }
                .pa-spread .pd-page.pd-open { display: block; height: auto; }
                .pa-spread .pd-files { width: auto; }
                .pa-spread.pa-turned .pa-table-of-contents { display: none; }
            }
        `;
    }
}

export const Manual = $($Manual);
export const Spread = $($Spread);
$(Manual, Paged)(Spread);
