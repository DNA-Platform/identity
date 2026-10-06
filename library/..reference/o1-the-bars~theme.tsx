import { css, RuleSet } from 'styled-components';
import { $ } from '@dna-platform/chemistry';
import { Theme } from '@dna-platform/public';
import { $LibraryBookTheme } from '../.manual/.book';
import { Library } from './o1-the-bars~code.tsx';

export class $LibraryTheme extends $LibraryBookTheme {
    ink = '#10252c';
    soft = '#516770';
    line = '#dbe7ec';
    accent = '#166178';
    tint = '#e3f5fa';
    night = '#0c1b1f';
    spine = 'inset 5px 0 0 rgba(0, 0, 0, 0.14), inset 6px 0 0 rgba(255, 255, 255, 0.12), 0 10px 20px -10px rgba(0, 0, 0, 0.45)';

    protected override parts(): RuleSet[] {
        return [...super.parts(), this.front(), this.covers(), this.words(), this.small()];
    }

    protected front(): RuleSet {
        return css`
            .pd-leaves { padding: calc(${({ theme }) => theme.space} * 0.83) calc(${({ theme }) => theme.space} * 1.17) calc(${({ theme }) => theme.space} * 1.67); }
            .pd-front .pd-words {
                margin-block-end: ${({ theme }) => theme.space};
                padding: calc(${({ theme }) => theme.space} * 0.67) calc(${({ theme }) => theme.space} * 0.83);
                border-radius: calc(${({ theme }) => theme.space} * 0.67);
                background: ${({ theme }) => theme.wash};
            }
            .pd-front .pd-words .pd-chapter { margin-block: 0; }
            .pd-front .pd-words .pd-paragraph {
                margin-block: 0;
                font-family: ${({ theme }) => theme.serif};
                font-size: calc(1.5 * ${({ theme }) => theme.size});
                font-weight: 500;
                line-height: 1.25;
            }
        `;
    }

    protected covers(): RuleSet {
        return css`
            .pd-volume .pd-chapter { margin-block: 0; }
            .pd-book.pa-shelf .pd-volume .pd-title {
                position: relative;
                display: flex;
                flex-direction: column;
                aspect-ratio: 2 / 3;
                box-sizing: border-box;
                padding: calc(${({ theme }) => theme.space} * 0.54) calc(${({ theme }) => theme.space} / 2) calc(${({ theme }) => theme.space} * 0.46) calc(${({ theme }) => theme.space} * 0.67);
                border-radius: calc(${({ theme }) => theme.space} / 6) calc(${({ theme }) => theme.space} * 0.29) calc(${({ theme }) => theme.space} * 0.29) calc(${({ theme }) => theme.space} / 6);
                box-shadow: ${({ theme }) => theme.spine};
                color: ${({ theme }) => theme.white};
                font-family: ${({ theme }) => theme.serif};
                font-size: calc(1.03 * ${({ theme }) => theme.size});
                font-weight: 600;
                line-height: 1.12;
                letter-spacing: -0.005em;
            }
            .pd-book.pa-shelf .pd-volume .pd-title::after {
                content: '';
                position: absolute;
                inset-inline: calc(${({ theme }) => theme.space} * 0.67) calc(${({ theme }) => theme.space} / 2);
                top: 56%;
                height: 1px;
                background: ${({ theme }) => theme.glass};
            }
            .pd-volume .pd-paragraph {
                margin-block: calc(${({ theme }) => theme.space} / 3) 0;
                font-size: calc(0.9 * ${({ theme }) => theme.size});
                font-weight: 500;
                color: ${({ theme }) => theme.ink};
            }
            .pd-volume .pa-synopsis .pd-paragraph {
                margin-block: calc(${({ theme }) => theme.space} / 8) 0;
                font-size: calc(0.83 * ${({ theme }) => theme.size});
                font-weight: 400;
                color: ${({ theme }) => theme.faint};
            }
        `;
    }

    protected words(): RuleSet {
        return css`
            .pd-leaf .pd-words .pd-title {
                font-family: ${({ theme }) => theme.serif};
                font-size: calc(2.5 * ${({ theme }) => theme.size});
                font-weight: 600;
                line-height: 1.04;
            }
            .pd-leaf .pd-words .pd-heading {
                font-size: calc(0.76 * ${({ theme }) => theme.size});
                font-weight: 600;
                letter-spacing: 0.12em;
                text-transform: uppercase;
                color: ${({ theme }) => theme.soft};
            }
        `;
    }

    protected small(): RuleSet {
        return css`
            @media (max-width: ${({ theme }) => theme.narrow}) {
                .pd-holds {
                    border-inline-end: none;
                    border-block-end: thin solid ${({ theme }) => theme.line};
                }
                .pd-leaves { padding: calc(${({ theme }) => theme.space} * 0.67); }
            }
        `;
    }
}

export const LibraryTheme = $($LibraryTheme);
$(Library, Theme)(LibraryTheme);
