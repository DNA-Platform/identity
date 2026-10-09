import { css, RuleSet } from 'styled-components';
import { $ } from '@dna-platform/chemistry';
import { $LibraryBookTheme } from '../.manual/.book';

export class $DesignTheme extends $LibraryBookTheme {
    colour = '#3b6cf0';
    accent = '#1f4fd6';
    bar = '#1f4fd6';
    barInk = '#ffffff';
    barDim = 'rgba(255, 255, 255, 0.74)';
    barOn = 'rgba(255, 255, 255, 0.16)';
    barLine = '#1a44b8';
    mark = '#ffffff';
    side = '#ffffff';
    sideOn = '#e6eeff';
    sideLine = '#e4e8f3';
    ink = '#111318';
    heading = '#111318';
    serif = "'Inter', system-ui, sans-serif";

    protected override parts(): RuleSet[] {
        return [...super.parts(), this.tools(), this.words(), this.cards(), this.small()];
    }

    protected tools(): RuleSet {
        return css`
            .pd-head { border-block-end: thin solid ${({ theme }) => theme.line}; }
            .pd-head .pd-switch {
                border: none;
                border-radius: calc(${({ theme }) => theme.space} * 0.375);
                padding: calc(${({ theme }) => theme.space} / 4) calc(${({ theme }) => theme.space} / 2);
                background: ${({ theme }) => theme.panel};
                color: ${({ theme }) => theme.soft};
            }
        `;
    }

    protected words(): RuleSet {
        return css`
            .pd-pages { padding: calc(${({ theme }) => theme.space} * 0.83) calc(${({ theme }) => theme.space} * 1.17) calc(${({ theme }) => theme.space} * 1.67); }
            .pd-pages .pd-chapter { margin-block: 0; max-width: none; }
            .pd-head .pd-title {
                font-size: calc(2 * ${({ theme }) => theme.size});
                letter-spacing: -0.02em;
            }
            .pd-pages .pd-title {
                font-family: ${({ theme }) => theme.serif};
                font-size: calc(2 * ${({ theme }) => theme.size});
                font-weight: 600;
                letter-spacing: -0.02em;
                line-height: 1.1;
                color: ${({ theme }) => theme.heading};
            }
            .pd-pages .pd-heading {
                font-size: calc(0.76 * ${({ theme }) => theme.size});
                font-weight: 600;
                letter-spacing: 0.12em;
                text-transform: uppercase;
                color: ${({ theme }) => theme.soft};
            }
            .pd-pages .pd-paragraph { max-width: ${({ theme }) => theme.measure}; }
            .pd-pages .pd-chapter.pa-synopsis .pd-paragraph {
                font-size: calc(1.14 * ${({ theme }) => theme.size});
                line-height: 1.6;
                color: ${({ theme }) => theme.soft};
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
            .pa-gallery .pa-concept .pd-heading, .pa-gallery .pa-concept .pa-number {
                font-family: ${({ theme }) => theme.serif};
                font-size: calc(1.07 * ${({ theme }) => theme.size});
                font-weight: 600;
                letter-spacing: -0.01em;
                text-transform: none;
                color: ${({ theme }) => theme.heading};
            }
            .pa-gallery .pa-concept .pa-number {
                font-size: calc(1.07 * ${({ theme }) => theme.size});
                color: ${({ theme }) => theme.soft};
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
            .pa-gallery .pa-concept .pa-photographs img { border-radius: calc(${({ theme }) => theme.space} / 4); border: thin solid ${({ theme }) => theme.line}; }
            .pa-gallery .pa-concept.pa-open { box-shadow: 0 0 0 calc(${({ theme }) => theme.space} / 8) ${({ theme }) => theme.accent}; }
        `;
    }

    protected small(): RuleSet {
        return css`
            @media (max-width: ${({ theme }) => theme.narrow}) {
                .pd-holds, .pd-library { border-inline-end: none; }
                .pd-pages { padding: calc(${({ theme }) => theme.space} * 0.67); }
            }
        `;
    }
}

export const DesignTheme = $($DesignTheme);
