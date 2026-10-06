import { css, RuleSet } from 'styled-components';
import { $ } from '@dna-platform/chemistry';
import { Theme } from '@dna-platform/public';
import { $LibraryBookTheme } from '../.manual/.book';
import { Catalogue } from './o1-the-catalogue~code.tsx';

export class $CatalogueTheme extends $LibraryBookTheme {
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
            .pd-front .pd-words { margin-block-end: calc(${({ theme }) => theme.space} * 1.17); }
            .pd-front .pd-words .pd-chapter { margin-block: 0; }
            .pd-front .pd-words .pd-paragraph {
                margin-block: 0;
                max-width: 56ch;
                font-family: ${({ theme }) => theme.serif};
                font-size: calc(1.43 * ${({ theme }) => theme.size});
                font-weight: 400;
                line-height: 1.5;
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
                background: linear-gradient(160deg, color-mix(in srgb, var(--colour, ${({ theme }) => theme.colour}) 90%, white), color-mix(in srgb, var(--colour, ${({ theme }) => theme.colour}) 86%, black));
                color: ${({ theme }) => theme.white};
                font-family: ${({ theme }) => theme.serif};
                font-size: calc(1.07 * ${({ theme }) => theme.size});
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
                overflow: hidden;
                font-size: calc(0.93 * ${({ theme }) => theme.size});
                font-weight: 500;
                white-space: nowrap;
                text-overflow: ellipsis;
                color: ${({ theme }) => theme.ink};
            }
            .pd-volume .pd-paragraph:not(.pa-caption) { display: none; }
            .pd-book.pa-shelf .pd-volume.pa-open {
                grid-column: 1 / -1;
                order: 1;
                padding: calc(${({ theme }) => theme.space} * 0.92) ${({ theme }) => theme.space};
                border: thin solid ${({ theme }) => theme.line};
                border-radius: calc(${({ theme }) => theme.space} * 0.67);
            }
            .pd-volume.pa-open .pd-chapter {
                display: grid;
                grid-template-columns: ${({ theme }) => theme.volume} minmax(0, 1fr);
                grid-auto-rows: max-content;
                column-gap: calc(${({ theme }) => theme.space} * 1.08);
            }
            .pd-volume.pa-open .pd-chapter > a { grid-row: 1 / span 3; }
            .pd-book.pa-shelf .pd-volume.pa-open .pd-title {
                padding: calc(${({ theme }) => theme.space} * 0.75) calc(${({ theme }) => theme.space} * 0.58) calc(${({ theme }) => theme.space} / 2) ${({ theme }) => theme.space};
                font-size: calc(1.5 * ${({ theme }) => theme.size});
            }
            .pd-volume.pa-open .pd-paragraph {
                margin-block: 0 calc(${({ theme }) => theme.space} / 3);
                overflow: visible;
                font-size: calc(0.76 * ${({ theme }) => theme.size});
                font-weight: 600;
                letter-spacing: 0.1em;
                text-transform: uppercase;
                white-space: normal;
                color: ${({ theme }) => theme.soft};
            }
            .pd-volume.pa-open .pd-paragraph:not(.pa-caption) {
                display: block;
                margin-block: 0 calc(${({ theme }) => theme.space} / 2);
                max-width: 56ch;
                font-family: ${({ theme }) => theme.serif};
                font-size: calc(1.29 * ${({ theme }) => theme.size});
                font-weight: 400;
                letter-spacing: 0;
                line-height: 1.5;
                text-transform: none;
                color: ${({ theme }) => theme.ink};
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

export const CatalogueTheme = $($CatalogueTheme);
$(Catalogue, Theme)(CatalogueTheme);
