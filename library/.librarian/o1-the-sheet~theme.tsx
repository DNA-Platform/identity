import { css, RuleSet } from 'styled-components';
import { $ } from '@dna-platform/chemistry';
import { $LibraryBookTheme } from '../.manual/.book';

export class $StoryTheme extends $LibraryBookTheme {
    prose = "Georgia, 'Iowan Old Style', 'Times New Roman', serif";
    mono = 'ui-monospace, Menlo, Consolas, monospace';
    measure = '39.25rem';
    narrow = '45rem';
    colour = '#d9a05b';
    accent = '#8a5a1e';
    side = '#f7ebd9';
    sideLine = '#e9d8bd';

    protected override parts(): RuleSet[] {
        return [...super.parts(), this.papers(), this.ground(), this.chips(), this.sheet(), this.masthead(), this.letterpress(), this.foot(), this.phone()];
    }

    protected papers(): RuleSet {
        return css`
            .pd-book.pa-book-paper {
                --ground: ${({ theme }) => theme.paper};
                --paper: ${({ theme }) => theme.bookPaper};
                --ink: ${({ theme }) => theme.bookInk};
                --accent: ${({ theme }) => theme.accent};
            }
            .pd-book.pa-night-paper {
                --ground: color-mix(in srgb, ${({ theme }) => theme.colour} 12%, black);
                --paper: color-mix(in srgb, ${({ theme }) => theme.colour} 17%, black);
                --ink: color-mix(in srgb, ${({ theme }) => theme.colour} 26%, white);
                --accent: ${({ theme }) => theme.colour};
            }
            .pd-book.pa-white-paper {
                --ground: ${({ theme }) => theme.paper};
                --paper: ${({ theme }) => theme.paper};
                --ink: ${({ theme }) => theme.ink};
                --accent: ${({ theme }) => theme.accent};
            }
            .pd-book.pa-paper {
                --soft: color-mix(in srgb, var(--ink) 60%, transparent);
                --line: color-mix(in srgb, var(--ink) 8%, transparent);
            }
        `;
    }

    protected ground(): RuleSet {
        return css`
            .pd-book.pa-paper { background: var(--ground); }
        `;
    }

    protected chips(): RuleSet {
        return css`
            .pa-sheet .pd-head { padding: calc(${({ theme }) => theme.space} * 1.6667) calc(${({ theme }) => theme.space} * 0.8333) calc(${({ theme }) => theme.space} * 1.0833); }
            .pa-sheet .pd-word.pd-switch {
                margin-block: 0;
                padding: calc(${({ theme }) => theme.space} * 0.2917) calc(${({ theme }) => theme.space} * 0.625);
                font-family: ${({ theme }) => theme.mono};
                font-size: calc(0.8571 *${({ theme }) => theme.size});
                line-height: 1.2;
                letter-spacing: 0.05em;
                color: var(--soft);
                background: none;
                border: thin solid var(--line);
                border-radius: calc(${({ theme }) => theme.space} * 41.625);
            }
            .pa-sheet .pd-word.pd-switch[aria-pressed='true'] {
                color: var(--accent);
                border-color: var(--accent);
            }
        `;
    }

    protected sheet(): RuleSet {
        return css`
            .pa-sheet .pd-leaves { padding: 0 calc(${({ theme }) => theme.space} * 0.8333) calc(${({ theme }) => theme.space} * 4); }
            .pa-sheet .pd-leaves::before {
                background: var(--paper);
                border: thin solid var(--line);
                border-radius: calc(${({ theme }) => theme.space} / 4);
                box-shadow: ${({ theme }) => theme.shadow};
            }
            .pa-sheet .pd-masthead { padding: calc(${({ theme }) => theme.space} * 2.8333) calc(${({ theme }) => theme.space} * 3.1667) calc(${({ theme }) => theme.space} * 1.8333); }
            .pa-sheet .pd-leaf {
                padding: 0 calc(${({ theme }) => theme.space} * 3.1667) calc(${({ theme }) => theme.space} * 2.3333);
                font-size: calc(1.2286 *${({ theme }) => theme.size});
                line-height: 1.8;
                color: var(--ink);
            }
            .pa-sheet .pd-leaves .pd-chapter, .pa-sheet .pd-leaves .pd-section { margin-block: 0; }
            .pa-sheet .pd-leaves .pd-paragraph { margin-block: 0 calc(${({ theme }) => theme.space} * 0.75); }
        `;
    }

    protected masthead(): RuleSet {
        return css`
            .pa-sheet .pd-masthead {
                font-family: ${({ theme }) => theme.mono};
                font-size: calc(0.75 *${({ theme }) => theme.size});
                line-height: 1.7;
                letter-spacing: 0.32em;
                text-transform: uppercase;
                color: var(--soft);
            }
            .pa-sheet .pd-masthead .pd-paragraph.pd-byline {
                display: flex;
                align-items: baseline;
                column-gap: calc(${({ theme }) => theme.space} * 0.4);
                margin-block: 0;
            }
            .pa-sheet .pd-masthead .pd-byline::before {
                content: '·';
                margin-inline: calc(${({ theme }) => theme.space} * 0.5) calc(${({ theme }) => theme.space} * 0.24);
            }
            .pa-sheet .pd-masthead .pd-byline .pa-reference {
                color: inherit;
                text-decoration-color: ${({ theme }) => theme.me};
                text-decoration-thickness: calc(${({ theme }) => theme.space} / 12);
                text-underline-offset: calc(${({ theme }) => theme.space} / 6);
            }
            .pa-sheet .pd-masthead .pd-word.pd-date { margin-block-start: calc(${({ theme }) => theme.space} * 0.25); }
            .pa-sheet .pd-masthead::after {
                content: '';
                width: calc(${({ theme }) => theme.space} * 2.3333);
                margin-block-start: calc(${({ theme }) => theme.space} * 0.6667);
                border-block-start: thin solid var(--line);
            }
        `;
    }

    protected letterpress(): RuleSet {
        return css`
            .pa-sheet .pd-leaf .pd-title {
                margin-block: 0 calc(${({ theme }) => theme.space} * 1.25);
                font-size: calc(2.7857 *${({ theme }) => theme.size});
                font-weight: 700;
                line-height: 1.15;
                letter-spacing: -0.01em;
                text-align: center;
            }
            .pa-sheet .pd-leaf .pd-heading {
                margin-block: calc(${({ theme }) => theme.space} * 1.3333) calc(${({ theme }) => theme.space} * 0.5);
                font-size: calc(1.5 *${({ theme }) => theme.size});
                font-weight: 700;
                line-height: 1.15;
                letter-spacing: -0.01em;
                text-align: center;
            }
            .pa-sheet .pd-leaf .pd-paragraph {
                text-align: justify;
                hyphens: auto;
            }
            .pa-sheet .pd-leaf .pd-paragraph.pa-first::first-letter {
                float: left;
                padding: calc(${({ theme }) => theme.space} * 0.25) calc(${({ theme }) => theme.space} * 0.4167) 0 0;
                font-size: calc(4.0714 *${({ theme }) => theme.size});
                line-height: 0.85;
                color: var(--accent);
            }
            .pa-sheet .pd-leaf .pd-paragraph .pa-reference {
                text-underline-offset: calc(${({ theme }) => theme.space} / 12);
                color: var(--accent);
            }
        `;
    }

    protected foot(): RuleSet {
        return css`
            .pa-sheet .pd-leaf .pd-paragraph.pd-turn {
                display: grid;
                grid-template-columns: 1fr auto 1fr;
                align-items: baseline;
                gap: calc(${({ theme }) => theme.space} * 0.4167) calc(${({ theme }) => theme.space} * 1.0833);
                margin-block: calc(${({ theme }) => theme.space} * 1.9167) 0;
                padding-block-start: calc(${({ theme }) => theme.space} * 0.75);
                border-block-start: thin solid var(--line);
                font-family: ${({ theme }) => theme.mono};
                font-size: calc(0.7857 *${({ theme }) => theme.size});
                line-height: 1.5;
                letter-spacing: 0.08em;
                text-align: start;
                text-transform: uppercase;
                hyphens: manual;
                color: var(--soft);
            }
            .pa-sheet .pd-leaf .pd-paragraph.pd-turn .pa-reference {
                font-size: calc(0.8929 *${({ theme }) => theme.size});
                font-weight: 700;
                letter-spacing: 0.02em;
                text-transform: none;
                color: var(--ink);
            }
            .pa-sheet .pd-turn .pd-word.pa-after { display: block; text-align: end; }
            .pa-sheet .pd-turn .pa-self-reference { visibility: hidden; }
            .pa-sheet .pd-turn .pd-word.pd-count { color: var(--soft); }
            .pa-sheet .pd-turn .pd-count .pd-word {
                font-size: calc(0.8929 *${({ theme }) => theme.size});
                font-weight: 700;
                letter-spacing: 0.02em;
                text-transform: none;
                color: var(--ink);
            }
        `;
    }

    protected phone(): RuleSet {
        return css`
            @media (max-width: ${({ theme }) => theme.narrow}) {
                .pa-sheet .pd-head { padding: calc(${({ theme }) => theme.space} * 0.5833) calc(${({ theme }) => theme.space} * 0.6667); }
                .pa-sheet .pd-word.pd-switch { padding: calc(${({ theme }) => theme.space} * 0.25) calc(${({ theme }) => theme.space} * 0.5); }
                .pa-sheet .pd-leaves { padding: 0; }
                .pd-book.pa-sheet .pd-leaves::before {
                    border-inline: none;
                    border-block-end: none;
                    border-radius: 0;
                    box-shadow: none;
                }
                .pa-sheet .pd-masthead { padding: calc(${({ theme }) => theme.space} * 1.6667) calc(${({ theme }) => theme.space} * 1.0833) calc(${({ theme }) => theme.space} * 1.8333); }
                .pa-sheet .pd-leaf { padding: 0 calc(${({ theme }) => theme.space} * 1.0833) calc(${({ theme }) => theme.space} * 1.5); }
                .pa-sheet .pd-leaf .pd-paragraph.pd-turn { grid-template-columns: 1fr 1fr; }
                .pa-sheet .pd-turn .pd-word.pd-count {
                    grid-column: 1 / -1;
                    grid-row: 1;
                    justify-self: center;
                }
                .pd-book.pa-paper { background: var(--paper); }
                .pa-paper .pd-head { background: var(--ground); }
            }
        `;
    }
}

export const StoryTheme = $($StoryTheme);
