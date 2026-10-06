import { css, RuleSet } from 'styled-components';
import { $ } from '@dna-platform/chemistry';
import { $DougsTheme } from '../.manual/.book';

export class $DesignTheme extends $DougsTheme {

    protected override parts(): RuleSet[] {
        return [...super.parts(), this.sidebar(), this.head(), this.words(), this.cards(), this.small()];
    }

    protected sidebar(): RuleSet {
        return css`
            .pd-side {
                background: ${({ theme }) => theme.barFill};
                color: ${({ theme }) => theme.barInk};
                border-inline-end: thin solid ${({ theme }) => theme.barLine};
            }
            .pd-side .pd-classmark, .pd-side .pd-byline {
                display: flex;
                align-items: center;
                gap: calc(${({ theme }) => theme.space} * 0.4);
                margin-block: 0;
                padding: calc(${({ theme }) => theme.space} * 0.6) calc(${({ theme }) => theme.space} * 0.6);
                font-size: calc(0.83 * ${({ theme }) => theme.size});
                color: ${({ theme }) => theme.barDim};
            }
            .pd-side .pd-byline { border-block-start: thin solid ${({ theme }) => theme.barLine}; }
            .pd-side .pd-word {
                color: ${({ theme }) => theme.barInk};
                font-weight: 500;
            }
            .pd-side .pd-classmark .pd-word {
                font-family: ${({ theme }) => theme.serif};
                font-size: calc(1.45 * ${({ theme }) => theme.size});
                font-weight: 600;
                line-height: 1;
            }
            .pd-side .pa-reference { color: inherit; text-decoration: none; }
            .pd-side .pd-classmark::before, .pd-side .pd-byline::before {
                content: ${({ theme }) => theme.initial};
                display: grid;
                place-items: center;
                width: calc(${({ theme }) => theme.space} * 1.3);
                height: calc(${({ theme }) => theme.space} * 1.3);
                font-size: ${({ theme }) => theme.size};
                font-weight: 600;
            }
            .pd-side .pd-classmark::before {
                border-radius: calc(${({ theme }) => theme.space} / 3);
                background: ${({ theme }) => theme.opal};
                color: ${({ theme }) => theme.night};
            }
            .pd-side .pd-byline::before {
                border-radius: 50%;
                background: ${({ theme }) => theme.me};
                color: ${({ theme }) => theme.paper};
            }
            .pd-side .pa-table-of-contents.pd-container { padding: 0 calc(${({ theme }) => theme.space} / 2) ${({ theme }) => theme.space}; }
        `;
    }

    protected head(): RuleSet {
        return css`
            .pd-head {
                padding: calc(${({ theme }) => theme.space} * 0.83) calc(${({ theme }) => theme.space} * 1.17) calc(${({ theme }) => theme.space} * 0.6);
                border-block-end: thin solid ${({ theme }) => theme.line};
            }
            .pd-head .pd-switch {
                border: none;
                border-radius: calc(${({ theme }) => theme.space} * 0.375);
                padding: calc(${({ theme }) => theme.space} / 4) calc(${({ theme }) => theme.space} / 2);
                background: ${({ theme }) => theme.panel};
                color: ${({ theme }) => theme.soft};
            }
            .pd-head .pd-switch[aria-pressed='true'] {
                background: ${({ theme }) => theme.night};
                color: ${({ theme }) => theme.paper};
                font-weight: 500;
            }
        `;
    }

    protected words(): RuleSet {
        return css`
            .pd-leaves { padding: calc(${({ theme }) => theme.space} * 0.83) calc(${({ theme }) => theme.space} * 1.17) calc(${({ theme }) => theme.space} * 1.67); }
            .pd-words .pd-chapter { margin-block: 0; max-width: none; }
            .pd-words .pd-title {
                font-family: ${({ theme }) => theme.serif};
                font-size: calc(2.5 * ${({ theme }) => theme.size});
                font-weight: 600;
                line-height: 1.04;
                color: ${({ theme }) => theme.heading};
            }
            .pd-words .pd-heading {
                font-size: calc(0.76 * ${({ theme }) => theme.size});
                font-weight: 600;
                letter-spacing: 0.12em;
                text-transform: uppercase;
                color: ${({ theme }) => theme.soft};
            }
            .pd-words .pd-paragraph { max-width: ${({ theme }) => theme.measure}; }
            .pd-front .pd-words .pd-paragraph {
                font-family: ${({ theme }) => theme.serif};
                font-size: calc(1.5 * ${({ theme }) => theme.size});
                line-height: 1.25;
            }
        `;
    }

    protected cards(): RuleSet {
        return css`
            .pa-gallery .pd-section.pa-concept {
                padding: calc(${({ theme }) => theme.space} * 0.6);
                border: thin solid ${({ theme }) => theme.line};
                border-radius: calc(${({ theme }) => theme.space} * 0.6);
                background: ${({ theme }) => theme.paper};
                box-shadow: ${({ theme }) => theme.shadow};
            }
            .pa-gallery .pa-concept .pd-heading {
                font-family: ${({ theme }) => theme.serif};
                font-size: calc(1.3 * ${({ theme }) => theme.size});
                font-weight: 600;
                letter-spacing: 0;
                text-transform: none;
                color: ${({ theme }) => theme.heading};
            }
            .pa-gallery .pa-concept .pd-paragraph {
                margin-block: 0;
                font-size: calc(0.86 * ${({ theme }) => theme.size});
                color: ${({ theme }) => theme.soft};
            }
            .pa-gallery .pa-concept .pd-paragraph.pa-answer {
                padding-inline-start: calc(${({ theme }) => theme.space} / 2);
                border-inline-start: calc(${({ theme }) => theme.space} / 8) solid ${({ theme }) => theme.me};
                color: ${({ theme }) => theme.ink};
            }
            .pa-gallery .pa-concept .pa-plates img { border-radius: calc(${({ theme }) => theme.space} / 4); border: thin solid ${({ theme }) => theme.line}; }
            .pa-gallery .pa-concept.pa-open { box-shadow: 0 0 0 calc(${({ theme }) => theme.space} / 8) ${({ theme }) => theme.accent}; }
        `;
    }

    protected small(): RuleSet {
        return css`
            @media (max-width: ${({ theme }) => theme.narrow}) {
                .pd-side { border-inline-end: none; }
                .pd-leaves { padding: calc(${({ theme }) => theme.space} * 0.67); }
            }
        `;
    }
}

export class $GalleryMode extends $DesignTheme {
    barFill = '#f1f7f9';
    barInk = '#10252c';
    barDim = '#516770';
    barOn = '#e3f5fa';
    barLine = '#dbe7ec';
}

export class $LibraryMode extends $DesignTheme {
    barFill = '#0c1b1f';
    barInk = '#ffffff';
    barDim = '#a9bcc1';
    barOn = 'rgba(255, 255, 255, 0.11)';
    barLine = '#1d3339';
}

export const DesignTheme = $($DesignTheme);
export const GalleryMode = $($GalleryMode);
export const LibraryMode = $($LibraryMode);
