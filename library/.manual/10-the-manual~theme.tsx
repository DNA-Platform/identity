import { css, RuleSet } from 'styled-components';
import { $ } from '@dna-platform/chemistry';
import { Theme } from '@dna-platform/public';
import { $LibraryBookTheme } from './3-the-theme~code.tsx';
import { Manual } from './10-the-manual~code.tsx';

export class $ManualTheme extends $LibraryBookTheme {
    measure = '58ch';
    spreadColumn = '15.5rem';
    colour = '#4fb3a8';
    side = '#e3f4f1';
    sideLine = '#c6e5df';
    ink = '#1a1f36';
    heading = '#1a1f36';
    soft = '#4f566b';
    faint = '#8792a2';
    line = '#e6e8ee';
    rule = '#e6e8ee';
    panel = '#f7f8fa';
    accent = '#0a7a70';
    capital = '#0a7a70';
    lit = '#0a7a70';
    tint = '#e3f4f1';
    night = '#0f2a33';
    dusk = '#17363f';

    protected override parts(): RuleSet[] {
        return [...super.parts(), this.index(), this.words(), this.small()];
    }

    protected override holds(): RuleSet {
        return css`
            ${super.holds()}
            .pd-holds .pd-paragraph.pa-entry { padding: calc(${({ theme }) => theme.space} / 4) calc(${({ theme }) => theme.space} / 3); }
            .pd-holds .pd-paragraph.pa-entry::before { content: none; }
        `;
    }

    protected index(): RuleSet {
        return css`
            .pd-holds {
                background: ${({ theme }) => theme.panel};
                border-inline-end: thin solid ${({ theme }) => theme.line};
                padding: calc(${({ theme }) => theme.space} * 0.75) calc(${({ theme }) => theme.space} * 0.6);
                scrollbar-width: thin;
                scrollbar-color: ${({ theme }) => theme.line} transparent;
            }
            .pd-library {
                background: ${({ theme }) => theme.panel};
                border-block-end: thin solid ${({ theme }) => theme.line};
            }
            .pd-library .pd-filed-under, .pd-library .pd-byline {
                margin-block: 0;
                font-size: calc(0.83 * ${({ theme }) => theme.size});
                color: ${({ theme }) => theme.faint};
            }
            .pd-library .pd-filed-under .pa-reference, .pd-library .pd-byline .pa-reference {
                color: ${({ theme }) => theme.soft};
                text-decoration: none;
            }
            .pd-head .pd-switches { margin-block-start: calc(${({ theme }) => theme.space} / 2); }
            .pd-head .pd-switch { font-size: calc(0.9 * ${({ theme }) => theme.size}); }
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
            .pd-words .pd-paragraph.pd-turn { margin-block-start: calc(${({ theme }) => theme.space} * 1.1); }
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
                .pd-holds, .pd-library {
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
