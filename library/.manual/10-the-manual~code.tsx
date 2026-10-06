import { ReactNode } from 'react';
import { css, RuleSet } from 'styled-components';
import { $ } from '@dna-platform/chemistry';
import { $Writing } from '@dna-platform/public';
import { $LibraryBook } from './1-the-book~code.tsx';
import { Switch as switching } from './9-the-switch~code.tsx';
import { CodeForward as codeForward } from './10-the-manual~forward.tsx';
import { $Layout, Layout } from './12-the-layout~code.tsx';

export class $Manual extends $LibraryBook {
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
        return [...super.parts(), this.spread(), this.one()];
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

    protected one(): RuleSet {
        return css`
            @media (max-width: ${({ theme }) => theme.narrow}) {
                .pa-spread .pd-leaf.pd-open { display: block; height: auto; }
                .pa-spread .pd-files { width: auto; }
            }
        `;
    }
}

export const Manual = $($Manual);
export const Spread = $($Spread);
$(Manual, Layout)(Spread);
