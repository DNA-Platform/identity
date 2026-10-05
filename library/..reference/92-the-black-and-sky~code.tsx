import { css, RuleSet } from 'styled-components';
import { $ } from '@dna-platform/chemistry';
import { $DougsTheme } from '../.manual/.book';

export class $BlackAndSky extends $DougsTheme {
    paper = '#ffffff';
    tint = '#a9d3e6';

    protected override parts(): RuleSet[] {
        return [...super.parts(), this.topBars(), this.shelf(), this.list()];
    }

    protected topBars(): RuleSet {
        return css`
            .pd-book.pa-top-bars {
                display: grid;
                grid-template-columns: auto minmax(0, 1fr) auto;
                grid-template-areas: 'library . author' 'title filed tools';
                align-content: start;
                align-items: center;
                min-height: 100vh;
                padding: 0;
            }
            .pd-book.pa-top-bars::before { content: ''; grid-row: 1; grid-column: 1 / -1; align-self: stretch; background: ${({ theme }) => theme.bar}; }
            .pd-book.pa-top-bars::after { content: ''; grid-row: 2; grid-column: 1 / -1; align-self: stretch; background: ${({ theme }) => theme.tint}; }
            .pa-top-bars > .pd-container, .pa-top-bars .pd-chapter.pa-cover, .pa-top-bars .pa-cover .pd-container { display: contents; }
            .pa-top-bars .pd-library-title, .pa-top-bars .pd-byline, .pa-top-bars .pa-cover .pd-title, .pa-top-bars .pd-filed, .pa-top-bars .pd-switch { z-index: 1; margin: 0; }
            .pa-top-bars .pd-library-title {
                grid-area: library;
                padding: calc(${({ theme }) => theme.space} / 2) ${({ theme }) => theme.space};
                font-size: calc(0.6 * ${({ theme }) => theme.size});
                letter-spacing: 0.24em;
                text-transform: uppercase;
                color: ${({ theme }) => theme.bright};
            }
            .pa-top-bars .pd-byline { grid-area: author; padding-inline: ${({ theme }) => theme.space}; color: ${({ theme }) => theme.bright}; }
            .pa-top-bars .pd-library-title .pa-reference, .pa-top-bars .pd-byline .pa-reference { color: inherit; }
            .pa-top-bars .pa-cover .pd-title { grid-area: title; padding: calc(${({ theme }) => theme.space} / 2) ${({ theme }) => theme.space}; font-size: calc(1.4 * ${({ theme }) => theme.size}); letter-spacing: 0.04em; }
            .pa-top-bars .pd-filed { grid-area: filed; }
            .pa-top-bars .pd-switch { grid-area: tools; padding-inline: ${({ theme }) => theme.space}; }
            .pa-top-bars .pd-chapter.pa-page, .pa-top-bars .pd-chapter.pa-table-of-contents {
                grid-column: 1 / -1;
                margin: 0;
                padding: ${({ theme }) => theme.space} calc(2 * ${({ theme }) => theme.space}) 0;
            }
        `;
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
