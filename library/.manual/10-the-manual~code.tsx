import { ReactNode } from 'react';
import { css, RuleSet } from 'styled-components';
import { $ } from '@dna-platform/chemistry';
import { $Writing } from '@dna-platform/public';
import { $DougsBook } from './1-the-book~code.tsx';
import { Switch as switching } from './9-the-switch~code.tsx';
import { CodeForward as codeForward } from './10-the-manual~forward.tsx';
import { $Layout, Layout } from './12-the-layout~code.tsx';

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
                    <div className="pd-switches">
                        {this.switches()}
                    </div>
                    <Table />
                </div>
                <div className="pd-leaves">
                    {this.front(
                        <div className="pd-words">
                            <Synopsis />
                        </div>
                    )}
                    {this.leaves()}
                </div>
            </>
        );
    }

    override switches(): ReactNode {
        const Switch = $(switching);
        return (
            <>
                {super.switches()}
                <Switch
                    chapter={this.cover}
                    of={codeForward}
                >
                    code forward
                </Switch>
            </>
        );
    }
}

export class $Spread extends $Layout {
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
            .pa-spread .pd-leaves { grid-area: pages; min-height: 0; }
            .pa-spread .pd-switches {
                display: flex;
                flex-wrap: wrap;
                gap: calc(${({ theme }) => theme.space} / 4);
            }
        `;
    }

    protected spread(): RuleSet {
        return css`
            .pa-spread .pd-leaf.pd-open {
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
                .pa-spread .pd-leaf.pd-open { display: block; height: auto; }
                .pa-spread .pd-files { width: auto; }
                .pa-spread.pa-turned .pa-table-of-contents { display: none; }
            }
        `;
    }
}

export const Manual = $($Manual);
export const Spread = $($Spread);
$(Manual, Layout)(Spread);
