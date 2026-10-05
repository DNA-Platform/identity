import { css, RuleSet } from 'styled-components';
import { $ } from '@dna-platform/chemistry';
import { $DougsTheme } from '../.manual/.book';

export class $Paper extends $DougsTheme {
    font = "Georgia, 'Times New Roman', serif";
    size = '1.1rem';
    leading = '1.75';
    ink = '#1d1a16';
    paper = '#fbf9f3';
    link = '#6b5a3a';
    bar = '#191f3a';
    bright = '#c9cfe8';

    protected override parts(): RuleSet[] {
        return [...super.parts(), this.sheet()];
    }

    protected sheet(): RuleSet {
        return css`
            .pd-book.pa-sheet {
                display: flex;
                flex-direction: column;
                align-items: center;
                box-sizing: border-box;
                min-height: 100vh;
                padding: ${({ theme }) => theme.space} ${({ theme }) => theme.space} calc(4 * ${({ theme }) => theme.space});
                background: ${({ theme }) => theme.bar};
            }
            .pa-sheet > .pd-container { display: contents; }
            .pa-sheet .pd-library-title, .pa-sheet .pd-switch { margin: 0; color: ${({ theme }) => theme.bright}; }
            .pa-sheet .pd-library-title { order: -2; font-size: calc(0.6 * ${({ theme }) => theme.size}); letter-spacing: 0.24em; text-transform: uppercase; }
            .pa-sheet .pd-library-title .pa-reference { color: inherit; }
            .pa-sheet .pd-switch { order: -1; margin-block: calc(${({ theme }) => theme.space} / 2) ${({ theme }) => theme.space}; }
            .pa-sheet .pd-view.pa-shown { border-block-end-color: currentColor; }
            .pa-sheet .pd-chapter.pa-cover, .pa-sheet .pd-chapter.pa-page, .pa-sheet .pd-chapter.pa-table-of-contents {
                box-sizing: border-box;
                width: min(100%, 48rem);
                margin: 0;
                padding-inline: clamp(${({ theme }) => theme.space}, 8vw, calc(4 * ${({ theme }) => theme.space}));
                background: ${({ theme }) => theme.paper};
            }
            .pa-sheet .pd-chapter.pa-cover { padding-block: calc(2 * ${({ theme }) => theme.space}) ${({ theme }) => theme.space}; text-align: center; }
            .pa-sheet .pd-chapter.pa-cover .pd-title, .pa-sheet .pd-chapter.pa-cover .pd-paragraph {
                display: inline;
                margin: 0;
                font-size: calc(0.6 * ${({ theme }) => theme.size});
                font-weight: 400;
                letter-spacing: 0.3em;
                text-transform: uppercase;
            }
            .pa-sheet .pd-chapter.pa-cover .pd-filed { display: none; }
            .pa-sheet .pd-chapter.pa-cover .pd-byline::before { content: '·'; margin-inline: 0.8em; }
            .pa-sheet .pd-chapter.pa-page { padding-block: ${({ theme }) => theme.space} calc(3 * ${({ theme }) => theme.space}); }
            .pa-sheet .pd-chapter.pa-table-of-contents { display: none; padding-block-end: calc(3 * ${({ theme }) => theme.space}); text-align: center; }
            .pd-book.pa-sheet.pa-front .pd-chapter.pa-table-of-contents { display: block; }
            .pd-book.pa-sheet.pa-front .pd-chapter.pa-page { padding-block-end: ${({ theme }) => theme.space}; font-style: italic; }
            .pa-sheet .pd-chapter.pa-table-of-contents .pd-section, .pa-sheet .pd-chapter.pa-page .pd-paragraph { margin-inline: auto; }
            .pa-sheet .pd-chapter.pa-table-of-contents .pa-reference { text-decoration: none; }
            .pa-sheet .pd-chapter.pa-page .pd-title { font-size: calc(1.9 * ${({ theme }) => theme.size}); font-weight: 700; letter-spacing: 0; text-align: center; }
            .pa-sheet .pd-chapter.pa-page .pd-heading { font-weight: 700; text-align: center; margin-block-start: calc(2 * ${({ theme }) => theme.space}); }
            .pa-sheet .pd-chapter.pa-page .pd-paragraph { text-align: justify; hyphens: auto; }
            .pd-book.pa-sheet.pa-front .pd-chapter.pa-page .pd-paragraph { text-align: center; }
            .pa-sheet .pd-dateline { text-align: center; }
        `;
    }
}

export class $Night extends $Paper {
    ink = '#d9dcec';
    paper = '#191f3a';
    link = '#c8b98a';
    bar = '#0f1226';
}

export class $White extends $Paper {
    ink = '#111111';
    paper = '#ffffff';
    link = '#1c6a71';
    bar = '#e9eaee';
    bright = '#3a3f55';
}

export const Paper = $($Paper);
export const Night = $($Night);
export const White = $($White);
