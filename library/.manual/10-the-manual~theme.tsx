import { css, RuleSet } from 'styled-components';
import { $ } from '@dna-platform/chemistry';
import { Theme } from '@dna-platform/public';
import { $DougsTheme } from './3-the-theme~code.tsx';
import { Manual } from './10-the-manual~code.tsx';

export class $ManualTheme extends $DougsTheme {
    measure = '58ch';

    protected override parts(): RuleSet[] {
        return [...super.parts(), this.index(), this.words(), this.small()];
    }

    protected index(): RuleSet {
        return css`
            .pd-side {
                background: ${({ theme }) => theme.panel};
                border-inline-end: thin solid ${({ theme }) => theme.line};
                padding: calc(${({ theme }) => theme.space} * 0.75) calc(${({ theme }) => theme.space} * 0.6);
                scrollbar-width: thin;
                scrollbar-color: ${({ theme }) => theme.line} transparent;
            }
            .pd-side .pd-filed-under, .pd-side .pd-byline {
                margin-block: 0;
                font-size: calc(0.83 * ${({ theme }) => theme.size});
                color: ${({ theme }) => theme.faint};
            }
            .pd-side .pd-filed-under .pa-reference, .pd-side .pd-byline .pa-reference {
                color: ${({ theme }) => theme.soft};
                text-decoration: none;
            }
            .pd-side .pd-choices { margin-block-start: calc(${({ theme }) => theme.space} / 2); }
            .pd-side .pd-choice { font-size: calc(0.9 * ${({ theme }) => theme.size}); }
        `;
    }

    protected words(): RuleSet {
        return css`
            .pd-words { padding: calc(${({ theme }) => theme.space} * 1.4) calc(${({ theme }) => theme.space} * 1.8); }
            .pd-words .pd-chapter { margin-block: 0; }
            .pd-words .pd-title {
                font-size: calc(2.07 * ${({ theme }) => theme.size});
                font-weight: 600;
                line-height: 1.15;
                letter-spacing: -0.02em;
                margin-block-end: calc(${({ theme }) => theme.space} * 0.4);
            }
            .pd-words .pd-section { margin-block-start: calc(${({ theme }) => theme.space} * 1.25); }
            .pd-words .pd-heading {
                font-size: calc(0.9 * ${({ theme }) => theme.size});
                font-weight: 600;
                letter-spacing: 0.06em;
                text-transform: uppercase;
                color: ${({ theme }) => theme.faint};
                padding-block-start: calc(${({ theme }) => theme.space} * 0.9);
                margin-block-end: calc(${({ theme }) => theme.space} / 6);
                border-block-start: thin solid ${({ theme }) => theme.line};
            }
            .pd-words .pd-paragraph { margin-block: calc(${({ theme }) => theme.space} * 0.4); }
            .pd-words .pd-paragraph.pd-catchword { margin-block-start: calc(${({ theme }) => theme.space} * 1.1); }
            .pd-words .pa-synopsis .pd-paragraph {
                font-size: calc(1.1 * ${({ theme }) => theme.size});
                color: ${({ theme }) => theme.soft};
            }
            .pd-book.pa-code-forward .pd-words { font-size: calc(0.9 * ${({ theme }) => theme.size}); }
        `;
    }

    protected small(): RuleSet {
        return css`
            @media (max-width: ${({ theme }) => theme.narrow}) {
                .pd-side {
                    border-inline-end: none;
                    border-block-end: thin solid ${({ theme }) => theme.line};
                }
                .pd-words { padding: calc(${({ theme }) => theme.space} * 0.83) calc(${({ theme }) => theme.space} * 0.67) calc(${({ theme }) => theme.space} / 3); }
                .pd-words .pd-title { font-size: calc(1.72 * ${({ theme }) => theme.size}); }
            }
        `;
    }
}

export const ManualTheme = $($ManualTheme);
$(Manual, Theme)(ManualTheme);
