import { css, RuleSet } from 'styled-components';
import { $ } from '@dna-platform/chemistry';
import { $LibraryBookTheme } from '../.manual/.book';

export class $StoryTheme extends $LibraryBookTheme {
    prose = "Georgia, 'Iowan Old Style', 'Times New Roman', serif";
    mono = 'ui-monospace, Menlo, Consolas, monospace';
    narrow = '45rem';
    colour = '#e8590c';

    protected override parts(): RuleSet[] {
        return [...super.parts(), this.ground(), this.chips(), this.sheet(), this.masthead(), this.letterpress(), this.front(), this.foot(), this.phone()];
    }

    protected ground(): RuleSet {
        return css`
            .pd-book.pa-book-paper { background: ${({ theme }) => theme.bookGround}; }
            .pd-book.pa-night-paper { background: ${({ theme }) => theme.nightGround}; }
            .pd-book.pa-white-paper { background: ${({ theme }) => theme.whiteGround}; }
        `;
    }

    protected chips(): RuleSet {
        return css`
            .pa-sheet .pd-head { padding: calc(${({ theme }) => theme.space} * 1.6667) calc(${({ theme }) => theme.space} * 0.8333) calc(${({ theme }) => theme.space} * 1.0833); }
            .pa-sheet .pd-word.pd-switch {
                margin-block: 0;
                padding: calc(${({ theme }) => theme.space} * 0.2917) calc(${({ theme }) => theme.space} * 0.625);
                font-family: ${({ theme }) => theme.mono};
                font-size: calc(0.8276 * ${({ theme }) => theme.size});
                line-height: 1.2;
                letter-spacing: 0.05em;
                border: thin solid;
                border-radius: calc(${({ theme }) => theme.space} * 41.625);
            }
            .pa-book-paper .pd-word.pd-switch {
                color: ${({ theme }) => theme.bookChipInk};
                background: ${({ theme }) => theme.bookChipFill};
                border-color: ${({ theme }) => theme.bookChipLine};
            }
            .pa-book-paper .pd-word.pd-switch[aria-pressed='true'] {
                color: ${({ theme }) => theme.bookChipOnInk};
                background: ${({ theme }) => theme.bookChipOnFill};
                border-color: ${({ theme }) => theme.bookChipOnLine};
            }
            .pa-night-paper .pd-word.pd-switch {
                color: ${({ theme }) => theme.nightChipInk};
                background: ${({ theme }) => theme.nightChipFill};
                border-color: ${({ theme }) => theme.nightChipLine};
            }
            .pa-night-paper .pd-word.pd-switch[aria-pressed='true'] {
                color: ${({ theme }) => theme.nightChipOnInk};
                background: ${({ theme }) => theme.nightChipOnFill};
                border-color: ${({ theme }) => theme.nightChipOnLine};
            }
            .pa-white-paper .pd-word.pd-switch {
                color: ${({ theme }) => theme.whiteChipInk};
                background: ${({ theme }) => theme.whiteChipFill};
                border-color: ${({ theme }) => theme.whiteChipLine};
            }
            .pa-white-paper .pd-word.pd-switch[aria-pressed='true'] {
                color: ${({ theme }) => theme.whiteChipOnInk};
                background: ${({ theme }) => theme.whiteChipOnFill};
                border-color: ${({ theme }) => theme.whiteChipOnLine};
            }
        `;
    }

    protected sheet(): RuleSet {
        return css`
            .pa-sheet .pd-leaves { padding: 0 calc(${({ theme }) => theme.space} * 0.8333) calc(${({ theme }) => theme.space} * 4); }
            .pa-sheet .pd-leaf {
                font-size: calc(1.1862 * ${({ theme }) => theme.size});
                line-height: 1.8;
            }
            .pa-sheet .pd-leaves .pd-chapter, .pa-sheet .pd-leaves .pd-section { margin-block: 0; }
            .pa-sheet .pd-leaves .pd-paragraph { margin-block: 0 calc(${({ theme }) => theme.space} * 0.75); }
            .pa-book-paper .pd-leaves::before {
                background: ${({ theme }) => theme.bookSheet};
                border: ${({ theme }) => theme.bookSheetBorder};
                border-radius: ${({ theme }) => theme.bookSheetRadius};
                box-shadow: ${({ theme }) => theme.bookSheetShadow};
            }
            .pa-book-paper .pd-masthead {
                padding: ${({ theme }) => theme.bookSheetPad};
                padding-block-end: calc(${({ theme }) => theme.space} * 1.8333);
            }
            .pa-book-paper .pd-leaf {
                padding: ${({ theme }) => theme.bookSheetPad};
                padding-block-start: 0;
                color: ${({ theme }) => theme.bookSheetInk};
            }
            .pa-night-paper .pd-leaves::before {
                background: ${({ theme }) => theme.nightSheet};
                border: ${({ theme }) => theme.nightSheetBorder};
                border-radius: ${({ theme }) => theme.nightSheetRadius};
                box-shadow: ${({ theme }) => theme.nightSheetShadow};
            }
            .pa-night-paper .pd-masthead {
                padding: ${({ theme }) => theme.nightSheetPad};
                padding-block-end: calc(${({ theme }) => theme.space} * 1.8333);
            }
            .pa-night-paper .pd-leaf {
                padding: ${({ theme }) => theme.nightSheetPad};
                padding-block-start: 0;
                color: ${({ theme }) => theme.nightSheetInk};
            }
            .pa-white-paper .pd-leaves::before {
                background: ${({ theme }) => theme.whiteSheet};
                border: ${({ theme }) => theme.whiteSheetBorder};
                border-radius: ${({ theme }) => theme.whiteSheetRadius};
                box-shadow: ${({ theme }) => theme.whiteSheetShadow};
            }
            .pa-white-paper .pd-masthead {
                padding: ${({ theme }) => theme.whiteSheetPad};
                padding-block-end: calc(${({ theme }) => theme.space} * 1.8333);
            }
            .pa-white-paper .pd-leaf {
                padding: ${({ theme }) => theme.whiteSheetPad};
                padding-block-start: 0;
                color: ${({ theme }) => theme.whiteSheetInk};
            }
        `;
    }

    protected masthead(): RuleSet {
        return css`
            .pa-sheet .pd-masthead {
                font-family: ${({ theme }) => theme.mono};
                font-size: calc(0.7241 * ${({ theme }) => theme.size});
                line-height: 1.7;
                letter-spacing: 0.32em;
                text-transform: uppercase;
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
            .pa-sheet .pd-masthead::after {
                content: '';
                width: calc(${({ theme }) => theme.space} * 2.3333);
                margin-block-start: calc(${({ theme }) => theme.space} * 0.6667);
                border-block-start: thin solid;
            }
            .pa-book-paper .pd-masthead { color: ${({ theme }) => theme.bookKicker}; }
            .pa-book-paper .pd-masthead::after { border-block-start-color: ${({ theme }) => theme.bookKickerRule}; }
            .pa-night-paper .pd-masthead { color: ${({ theme }) => theme.nightKicker}; }
            .pa-night-paper .pd-masthead::after { border-block-start-color: ${({ theme }) => theme.nightKickerRule}; }
            .pa-white-paper .pd-masthead { color: ${({ theme }) => theme.whiteKicker}; }
            .pa-white-paper .pd-masthead::after { border-block-start-color: ${({ theme }) => theme.whiteKickerRule}; }
        `;
    }

    protected letterpress(): RuleSet {
        return css`
            .pa-sheet .pd-leaf:not(.pd-front) .pd-title {
                margin-block: 0 calc(${({ theme }) => theme.space} * 1.25);
                font-size: calc(2.6897 * ${({ theme }) => theme.size});
                font-weight: 700;
                line-height: 1.15;
                letter-spacing: -0.01em;
                text-align: center;
            }
            .pa-sheet .pd-leaf:not(.pd-front) .pd-heading {
                margin-block: calc(${({ theme }) => theme.space} * 1.3333) calc(${({ theme }) => theme.space} * 0.5);
                font-size: calc(1.4483 * ${({ theme }) => theme.size});
                font-weight: 700;
                line-height: 1.15;
                letter-spacing: -0.01em;
                text-align: center;
            }
            .pa-sheet .pd-leaf:not(.pd-front) .pd-paragraph {
                text-align: justify;
                hyphens: auto;
            }
            .pa-sheet .pd-leaf:not(.pd-front) .pd-paragraph.pa-first::first-letter {
                float: left;
                padding: calc(${({ theme }) => theme.space} * 0.25) calc(${({ theme }) => theme.space} * 0.4167) 0 0;
                font-size: calc(3.931 * ${({ theme }) => theme.size});
                line-height: 0.85;
            }
            .pa-sheet .pd-leaf:not(.pd-front) .pd-paragraph .pa-reference { text-underline-offset: calc(${({ theme }) => theme.space} / 12); }
            .pa-book-paper .pd-leaf:not(.pd-front) .pd-title, .pa-book-paper .pd-leaf:not(.pd-front) .pd-heading { color: ${({ theme }) => theme.bookHeading}; }
            .pa-book-paper .pd-leaf:not(.pd-front) .pd-paragraph.pa-first::first-letter { color: ${({ theme }) => theme.bookInitial}; }
            .pa-book-paper .pd-leaf:not(.pd-front) .pd-paragraph .pa-reference { color: ${({ theme }) => theme.bookLink}; }
            .pa-night-paper .pd-leaf:not(.pd-front) .pd-title, .pa-night-paper .pd-leaf:not(.pd-front) .pd-heading { color: ${({ theme }) => theme.nightHeading}; }
            .pa-night-paper .pd-leaf:not(.pd-front) .pd-paragraph.pa-first::first-letter { color: ${({ theme }) => theme.nightInitial}; }
            .pa-night-paper .pd-leaf:not(.pd-front) .pd-paragraph .pa-reference { color: ${({ theme }) => theme.nightLink}; }
            .pa-white-paper .pd-leaf:not(.pd-front) .pd-title, .pa-white-paper .pd-leaf:not(.pd-front) .pd-heading { color: ${({ theme }) => theme.whiteHeading}; }
            .pa-white-paper .pd-leaf:not(.pd-front) .pd-paragraph.pa-first::first-letter { color: ${({ theme }) => theme.whiteInitial}; }
            .pa-white-paper .pd-leaf:not(.pd-front) .pd-paragraph .pa-reference { color: ${({ theme }) => theme.whiteLink}; }
        `;
    }

    protected front(): RuleSet {
        return css`
            .pa-sheet .pd-chapter.pa-synopsis .pd-paragraph {
                margin-block: 0;
                font-style: italic;
                text-align: center;
            }
        `;
    }

    protected foot(): RuleSet {
        return css`
            .pa-sheet .pd-leaf:not(.pd-front) .pd-paragraph.pd-turn {
                display: grid;
                grid-template-columns: 1fr auto 1fr;
                align-items: baseline;
                gap: calc(${({ theme }) => theme.space} * 0.4167) calc(${({ theme }) => theme.space} * 1.0833);
                margin-block: calc(${({ theme }) => theme.space} * 1.9167) 0;
                padding-block-start: calc(${({ theme }) => theme.space} * 0.75);
                border-block-start: thin solid;
                font-family: ${({ theme }) => theme.mono};
                font-size: calc(0.7586 * ${({ theme }) => theme.size});
                line-height: 1.5;
                letter-spacing: 0.08em;
                text-align: start;
                text-transform: uppercase;
                hyphens: manual;
            }
            .pa-sheet .pd-leaf:not(.pd-front) .pd-paragraph.pd-turn .pa-reference {
                font-size: calc(0.8621 * ${({ theme }) => theme.size});
                font-weight: 700;
                letter-spacing: 0.02em;
                text-transform: none;
            }
            .pa-sheet .pd-turn .pd-word.pa-after { display: block; text-align: end; }
            .pa-sheet .pd-turn .pa-self-reference { visibility: hidden; }
            .pa-sheet .pd-chapter.pa-dated .pd-word.pd-date {
                display: block;
                margin-block-start: calc(${({ theme }) => theme.space} * 0.75);
                font-family: ${({ theme }) => theme.mono};
                font-size: calc(0.7586 * ${({ theme }) => theme.size});
                letter-spacing: 0.08em;
                text-align: center;
                text-transform: uppercase;
            }
            .pa-book-paper .pd-leaf:not(.pd-front) .pd-paragraph.pd-turn {
                color: ${({ theme }) => theme.bookFoot};
                border-block-start-color: ${({ theme }) => theme.bookFootLine};
            }
            .pa-book-paper .pd-leaf:not(.pd-front) .pd-paragraph.pd-turn .pa-reference { color: ${({ theme }) => theme.bookFootValue}; }
            .pa-book-paper .pd-turn .pd-word.pd-count, .pa-book-paper .pd-chapter.pa-dated .pd-word.pd-date { color: ${({ theme }) => theme.bookFoot}; }
            .pa-night-paper .pd-leaf:not(.pd-front) .pd-paragraph.pd-turn {
                color: ${({ theme }) => theme.nightFoot};
                border-block-start-color: ${({ theme }) => theme.nightFootLine};
            }
            .pa-night-paper .pd-leaf:not(.pd-front) .pd-paragraph.pd-turn .pa-reference { color: ${({ theme }) => theme.nightFootValue}; }
            .pa-night-paper .pd-turn .pd-word.pd-count, .pa-night-paper .pd-chapter.pa-dated .pd-word.pd-date { color: ${({ theme }) => theme.nightFoot}; }
            .pa-white-paper .pd-leaf:not(.pd-front) .pd-paragraph.pd-turn {
                color: ${({ theme }) => theme.whiteFoot};
                border-block-start-color: ${({ theme }) => theme.whiteFootLine};
            }
            .pa-white-paper .pd-leaf:not(.pd-front) .pd-paragraph.pd-turn .pa-reference { color: ${({ theme }) => theme.whiteFootValue}; }
            .pa-white-paper .pd-turn .pd-word.pd-count, .pa-white-paper .pd-chapter.pa-dated .pd-word.pd-date { color: ${({ theme }) => theme.whiteFoot}; }
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
                .pa-sheet .pd-leaf:not(.pd-front) .pd-paragraph.pd-turn { grid-template-columns: 1fr 1fr; }
                .pa-sheet .pd-turn .pd-word.pd-count {
                    grid-column: 1 / -1;
                    grid-row: 1;
                    justify-self: center;
                }
                .pd-book.pa-book-paper { background: ${({ theme }) => theme.bookSheet}; }
                .pa-book-paper .pd-head { background: ${({ theme }) => theme.bookGround}; }
                .pa-book-paper .pd-masthead {
                    padding: ${({ theme }) => theme.bookSheetPadPhone};
                    padding-block-end: calc(${({ theme }) => theme.space} * 1.8333);
                }
                .pa-book-paper .pd-leaf {
                    padding: ${({ theme }) => theme.bookSheetPadPhone};
                    padding-block-start: 0;
                }
                .pd-book.pa-night-paper { background: ${({ theme }) => theme.nightSheet}; }
                .pa-night-paper .pd-head { background: ${({ theme }) => theme.nightGround}; }
                .pa-night-paper .pd-masthead {
                    padding: ${({ theme }) => theme.nightSheetPadPhone};
                    padding-block-end: calc(${({ theme }) => theme.space} * 1.8333);
                }
                .pa-night-paper .pd-leaf {
                    padding: ${({ theme }) => theme.nightSheetPadPhone};
                    padding-block-start: 0;
                }
                .pd-book.pa-white-paper { background: ${({ theme }) => theme.whiteSheet}; }
                .pa-white-paper .pd-head { background: ${({ theme }) => theme.whiteGround}; }
                .pa-white-paper .pd-masthead {
                    padding: ${({ theme }) => theme.whiteSheetPadPhone};
                    padding-block-end: calc(${({ theme }) => theme.space} * 1.8333);
                }
                .pa-white-paper .pd-leaf {
                    padding: ${({ theme }) => theme.whiteSheetPadPhone};
                    padding-block-start: 0;
                }
            }
        `;
    }
}

export const StoryTheme = $($StoryTheme);
