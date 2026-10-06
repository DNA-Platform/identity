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

    protected override parts(): RuleSet[] {
        return [...super.parts(), this.libraryBar(), this.bookBar(), this.holds(), this.front(), this.covers(), this.words(), this.small()];
    }

    protected libraryBar(): RuleSet {
        return css`
            .pd-library {
                padding: calc(${({ theme }) => theme.space} * 0.375) calc(${({ theme }) => theme.space} * 0.75);
            }
            .pd-library .pd-filed-under, .pd-library .pd-byline {
                display: flex;
                align-items: center;
                gap: calc(${({ theme }) => theme.space} * 0.4);
                margin-block: 0;
                font-size: calc(0.83 * ${({ theme }) => theme.size});
            }
            .pd-library .pd-word {
                font-size: ${({ theme }) => theme.size};
                font-weight: 500;
            }
            .pd-library .pd-filed-under .pd-word {
                font-family: ${({ theme }) => theme.serif};
                font-size: calc(1.45 * ${({ theme }) => theme.size});
                font-weight: 600;
                line-height: 1;
            }
            .pd-library .pa-reference { color: inherit; text-decoration: none; }
            .pd-library .pd-filed-under::before, .pd-library .pd-byline::before {
                content: ${({ theme }) => theme.initial};
                display: grid;
                place-items: center;
                width: calc(${({ theme }) => theme.space} * 1.3);
                height: calc(${({ theme }) => theme.space} * 1.3);
                font-size: ${({ theme }) => theme.size};
                font-weight: 600;
            }
            .pd-library .pd-filed-under::before {
                border-radius: calc(${({ theme }) => theme.space} / 3);
                background: ${({ theme }) => theme.opal};
                color: ${({ theme }) => theme.night};
            }
            .pd-library .pd-byline::before {
                border-radius: 50%;
                background: ${({ theme }) => theme.me};
                color: ${({ theme }) => theme.paper};
            }
        `;
    }

    protected bookBar(): RuleSet {
        return css`
            .pd-head {
                padding: calc(${({ theme }) => theme.space} * 0.375) ${({ theme }) => theme.space};
            }
            .pd-head .pd-switch {
                border: none;
                border-radius: calc(${({ theme }) => theme.space} * 0.375);
                padding: calc(${({ theme }) => theme.space} / 4) calc(${({ theme }) => theme.space} / 2);
                background: ${({ theme }) => theme.glass};
                color: ${({ theme }) => theme.ink};
            }
            .pd-head .pd-switch[aria-pressed='true'] {
                background: ${({ theme }) => theme.night};
                color: ${({ theme }) => theme.paper};
                font-weight: 500;
            }
        `;
    }

    protected holds(): RuleSet {
        return css`
            .pd-holds {
                padding: calc(${({ theme }) => theme.space} * 0.75) calc(${({ theme }) => theme.space} / 2);
                border-inline-end: thin solid ${({ theme }) => theme.line};
            }
        `;
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
                display: flex;
                aspect-ratio: 3 / 4;
                padding: calc(${({ theme }) => theme.space} * 0.6) calc(${({ theme }) => theme.space} / 2) calc(${({ theme }) => theme.space} / 2) calc(${({ theme }) => theme.space} * 0.75);
                border-radius: calc(${({ theme }) => theme.space} / 8) calc(${({ theme }) => theme.space} * 0.3) calc(${({ theme }) => theme.space} * 0.3) calc(${({ theme }) => theme.space} / 8);
                border-inline-start: calc(${({ theme }) => theme.space} * 0.3) solid ${({ theme }) => theme.night};
                background: ${({ theme }) => theme.binding};
                box-shadow: ${({ theme }) => theme.shadow};
                color: ${({ theme }) => theme.opal};
                font-family: ${({ theme }) => theme.serif};
                font-size: calc(1.5 * ${({ theme }) => theme.size});
                font-weight: 600;
                line-height: 1.08;
            }
            .pd-volume .pd-paragraph {
                margin-block: calc(${({ theme }) => theme.space} / 3) 0;
                font-size: calc(0.86 * ${({ theme }) => theme.size});
                color: ${({ theme }) => theme.soft};
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
