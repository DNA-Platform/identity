import { css, RuleSet } from 'styled-components';
import { $ } from '@dna-platform/chemistry';
import { $Writing } from '@dna-platform/public';
import { $Sidebar } from './10-the-sidebar~code.tsx';

export class $Spread extends $Sidebar {
    override defines(writing: $Writing): void {
        super.defines(writing);
        writing.classes.add(this, 'pa-spread');
    }

    protected override parts(): RuleSet[] {
        return [...super.parts(), this.spread()];
    }

    protected spread(): RuleSet {
        return css`
            .pd-page.pd-open {
                display: grid;
                grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
                column-gap: ${({ theme }) => theme.space};
                align-items: start;
            }
            @media (max-width: ${({ theme }) => theme.narrow}) {
                .pd-page.pd-open { display: block; }
            }
        `;
    }
}

export const Spread = $($Spread);
