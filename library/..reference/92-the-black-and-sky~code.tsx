import { css, RuleSet } from 'styled-components';
import { $ } from '@dna-platform/chemistry';
import { $DougsTheme } from '../.manual/.book';

export class $BlackAndSky extends $DougsTheme {
    paper = '#ffffff';
    tint = '#a9d3e6';

    protected override parts(): RuleSet[] {
        return [...super.parts(), this.shelf(), this.list()];
    }

    protected shelf(): RuleSet {
        return css`
            .pa-shelf .pd-chapter.pa-table-of-contents .pd-section {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(9.5rem, 11rem));
                gap: ${({ theme }) => theme.space};
                align-items: start;
            }
            .pa-shelf .pa-table-of-contents .pd-section > .pd-container { display: contents; }
            .pa-shelf .pa-table-of-contents .pd-heading, .pa-shelf .pa-table-of-contents .pa-entry { grid-column: 1 / -1; margin: 0; }
            .pa-shelf .pa-table-of-contents .pa-entry.pa-answer {
                grid-column: auto;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                box-sizing: border-box;
                aspect-ratio: 2 / 3;
                padding: calc(${({ theme }) => theme.space} / 1.5);
                font-size: calc(0.95 * ${({ theme }) => theme.size});
                line-height: 1.25;
                color: ${({ theme }) => theme.bright};
                background: ${({ theme }) => theme.bar};
                border-inline-start: 3px solid color-mix(in srgb, ${({ theme }) => theme.bright} 30%, ${({ theme }) => theme.bar});
                border-radius: 3px;
                box-shadow: 0 12px 22px -14px ${({ theme }) => theme.bar};
            }
            .pa-shelf .pa-entry.pa-answer .pa-reference, .pa-shelf .pa-entry.pa-answer .pa-content { color: inherit; text-decoration: none; }
            .pa-shelf .pa-entry.pa-answer .pd-word.pa-shelfmark { align-self: flex-end; }
        `;
    }

    protected list(): RuleSet {
        return css`
            .pa-list .pd-chapter.pa-table-of-contents .pa-entry:not(.pa-parenthetical) {
                display: flex;
                justify-content: space-between;
                align-items: baseline;
                margin: 0;
                padding-block: calc(${({ theme }) => theme.space} / 3);
                border-block-end: 1px solid color-mix(in srgb, ${({ theme }) => theme.ink} 12%, ${({ theme }) => theme.paper});
            }
            .pa-list .pd-chapter.pa-table-of-contents .pa-reference { text-decoration: none; }
        `;
    }
}

export const BlackAndSky = $($BlackAndSky);
