import { css, RuleSet } from 'styled-components';
import { $ } from '@dna-platform/chemistry';
import { $LibraryBookTheme } from '../.manual/.book';

export class $StoryTheme extends $LibraryBookTheme {
    prose = "Georgia, 'Iowan Old Style', 'Times New Roman', serif";
    mono = 'ui-monospace, Menlo, Consolas, monospace';
    measure = '48.75rem';
    narrow = '45rem';
    colour = '#e8590c';
    lit = '#ffd27a';
    panel = 'radial-gradient(1200px 700px at 50% -10%, #232a4d 0%, #171c33 45%, #0f1326 100%)';
    tint = 'rgba(255, 210, 122, 0.12)';
    glow = '#aab4e8';
    dim = 'rgba(124, 138, 200, 0.35)';
    glass = 'rgba(15, 19, 38, 0.72)';

    protected override parts(): RuleSet[] {
        return [...super.parts(), this.papers(), this.sheet(), this.masthead(), this.letterpress(), this.front(), this.foot(), this.phone()];
    }

    protected override page(): RuleSet {
        return css`
            ${super.page()}
            background: ${({ theme }) => theme.panel};
        `;
    }

    protected papers(): RuleSet {
        return css`
            .pa-sheet .pd-head { padding: calc(${({ theme }) => theme.space} * 1.6667) calc(${({ theme }) => theme.space} * 0.8333) calc(${({ theme }) => theme.space} * 1.0833); }
            .pa-sheet .pd-word.pd-switch {
                margin-block: 0;
                padding: calc(${({ theme }) => theme.space} * 0.2917) calc(${({ theme }) => theme.space} * 0.625);
                font-family: ${({ theme }) => theme.mono};
                font-size: calc(0.8276 * ${({ theme }) => theme.size});
                line-height: 1.2;
                letter-spacing: 0.05em;
                color: ${({ theme }) => theme.glow};
                background: ${({ theme }) => theme.glass};
                border: thin solid ${({ theme }) => theme.dim};
                border-radius: calc(${({ theme }) => theme.space} * 41.625);
            }
            .pa-sheet .pd-word.pd-switch[aria-pressed='true'] {
                color: ${({ theme }) => theme.lit};
                background: ${({ theme }) => theme.tint};
                border-color: ${({ theme }) => theme.lit};
            }
        `;
    }

    protected sheet(): RuleSet {
        return css`
            .pa-sheet .pd-leaves { padding: 0 calc(${({ theme }) => theme.space} * 0.8333) calc(${({ theme }) => theme.space} * 4); }
            .pa-sheet .pd-leaves::before {
                background: ${({ theme }) => theme.paper};
                border: thin solid ${({ theme }) => theme.edge};
                border-radius: calc(${({ theme }) => theme.space} * 0.25);
                box-shadow: ${({ theme }) => theme.shadow};
            }
            .pa-sheet .pd-leaf {
                padding: 0 calc(${({ theme }) => theme.space} * 3.1667) calc(${({ theme }) => theme.space} * 2.3333);
                font-size: calc(1.1862 * ${({ theme }) => theme.size});
                line-height: 1.8;
                color: ${({ theme }) => theme.ink};
            }
            .pa-sheet .pd-leaves .pd-chapter, .pa-sheet .pd-leaves .pd-section { margin-block: 0; }
            .pa-sheet .pd-leaves .pd-paragraph { margin-block: 0 calc(${({ theme }) => theme.space} * 0.75); }
        `;
    }

    protected masthead(): RuleSet {
        return css`
            .pa-sheet .pd-masthead {
                padding: calc(${({ theme }) => theme.space} * 2.8333) calc(${({ theme }) => theme.space} * 3.1667) calc(${({ theme }) => theme.space} * 1.8333);
                font-family: ${({ theme }) => theme.mono};
                font-size: calc(0.7241 * ${({ theme }) => theme.size});
                line-height: 1.7;
                letter-spacing: 0.32em;
                text-transform: uppercase;
                color: ${({ theme }) => theme.faint};
            }
            .pa-sheet .pd-masthead .pd-paragraph.pd-byline { margin-block: 0; }
            .pa-sheet .pd-masthead .pd-byline::before {
                content: '·';
                margin-inline: calc(${({ theme }) => theme.space} * 0.5) calc(${({ theme }) => theme.space} * 0.64);
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
                border-block-start: thin solid ${({ theme }) => theme.rule};
            }
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
                color: ${({ theme }) => theme.heading};
            }
            .pa-sheet .pd-leaf:not(.pd-front) .pd-heading {
                margin-block: calc(${({ theme }) => theme.space} * 1.3333) calc(${({ theme }) => theme.space} * 0.5);
                font-size: calc(1.4483 * ${({ theme }) => theme.size});
                font-weight: 700;
                line-height: 1.15;
                letter-spacing: -0.01em;
                text-align: center;
                color: ${({ theme }) => theme.heading};
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
                color: ${({ theme }) => theme.capital};
            }
            .pa-sheet .pd-leaf:not(.pd-front) .pd-paragraph .pa-reference { text-underline-offset: calc(${({ theme }) => theme.space} / 12); }
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
                border-block-start: thin solid ${({ theme }) => theme.line};
                font-family: ${({ theme }) => theme.mono};
                font-size: calc(0.7586 * ${({ theme }) => theme.size});
                line-height: 1.5;
                letter-spacing: 0.08em;
                text-align: start;
                text-transform: uppercase;
                hyphens: manual;
                color: ${({ theme }) => theme.faint};
            }
            .pa-sheet .pd-turn .pa-reference {
                font-size: calc(0.8621 * ${({ theme }) => theme.size});
                font-weight: 700;
                letter-spacing: 0.02em;
                text-transform: none;
                color: ${({ theme }) => theme.soft};
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
                color: ${({ theme }) => theme.faint};
            }
        `;
    }

    protected phone(): RuleSet {
        return css`
            @media (max-width: ${({ theme }) => theme.narrow}) {
                background: ${({ theme }) => theme.paper};
                .pa-sheet .pd-head {
                    padding: calc(${({ theme }) => theme.space} * 0.5833) calc(${({ theme }) => theme.space} * 0.6667);
                    background: ${({ theme }) => theme.panel};
                }
                .pa-sheet .pd-word.pd-switch { padding: calc(${({ theme }) => theme.space} * 0.25) calc(${({ theme }) => theme.space} * 0.5); }
                .pa-sheet .pd-leaves { padding: 0; }
                .pa-sheet .pd-leaves::before {
                    border-inline: none;
                    border-block-end: none;
                    border-radius: 0;
                    box-shadow: none;
                }
                .pa-sheet .pd-masthead { padding: calc(${({ theme }) => theme.space} * 1.6667) calc(${({ theme }) => theme.space} * 1.0833) calc(${({ theme }) => theme.space} * 1.8333); }
                .pa-sheet .pd-leaf { padding: 0 calc(${({ theme }) => theme.space} * 1.0833) calc(${({ theme }) => theme.space} * 1.5); }
                .pa-sheet .pd-leaf:not(.pd-front) .pd-paragraph.pd-turn { grid-template-columns: 1fr 1fr; }
                .pa-sheet .pd-turn .pd-word.pd-count {
                    grid-column: 1 / -1;
                    grid-row: 1;
                    justify-self: center;
                }
            }
        `;
    }
}

export class $BookPaper extends $StoryTheme {
    ink = '#29251d';
    heading = '#1f1b14';
    capital = '#6d6146';
    soft = '#5e553d';
    faint = '#9a9178';
    paper = '#fbf9f3';
    line = '#e4ddc9';
    rule = '#d6cfb9';
    accent = '#705f38';
    shadow = '0 1px 0 rgba(255, 255, 255, 0.08), 0 34px 90px -24px rgba(0, 0, 0, 0.65)';
}

export class $NightPaper extends $StoryTheme {
    measure = '47.5rem';
    ink = '#c9d0f2';
    heading = '#f2ecd9';
    capital = '#ffd27a';
    soft = '#ffd27a';
    faint = '#9a9178';
    paper = 'linear-gradient(168deg, #191f3a 0%, #12162a 100%)';
    line = '#2a3055';
    rule = '#d6cfb9';
    edge = '#2c3358';
    accent = '#7cf0c8';
    shadow = '0 34px 90px -24px rgba(0, 0, 0, 0.8)';
}

export class $WhitePaper extends $StoryTheme {
    ink = '#10252c';
    heading = '#0c1b1f';
    capital = '#166178';
    lit = '#ffffff';
    soft = '#10252c';
    faint = '#516770';
    paper = '#ffffff';
    panel = 'radial-gradient(1200px 700px at 50% -10%, #ffffff 0%, #f1f7f9 45%, #e3f5fa 100%)';
    line = '#dbe7ec';
    rule = '#8fc8dc';
    edge = '#dbe7ec';
    accent = '#166178';
    tint = '#0c1b1f';
    glow = '#516770';
    dim = '#dbe7ec';
    glass = '#ffffff';
    shadow = '0 34px 90px -40px rgba(12, 27, 31, 0.28)';
}

export const BookPaper = $($BookPaper);
export const NightPaper = $($NightPaper);
export const WhitePaper = $($WhitePaper);
