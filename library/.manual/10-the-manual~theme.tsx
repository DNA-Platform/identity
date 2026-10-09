import { css, RuleSet } from 'styled-components';
import { $ } from '@dna-platform/chemistry';
import { Theme } from '@dna-platform/public';
import { $LibraryBookTheme } from './3-the-theme~code.tsx';
import { ManualBook } from './10-the-manual~book.tsx';

export class $ManualTheme extends $LibraryBookTheme {
    measure = '104ch';
    holdsColumn = '272px';
    barHeight = '52px';
    space = '24px';
    size = '14px';
    beat = '0.22s';
    serif = "'Source Serif 4', Georgia, serif";
    paper = '#fdfcfa';
    ink = '#343c4a';
    heading = '#1a1f36';
    soft = '#727d8c';
    faint = '#9ea8b5';
    line = '#e4e9f2';
    tint = '#f0f4fc';
    barTint = '#f8fafe';
    side = '#f7f8fb';
    sideInk = '#3a4452';
    sideDim = '#6b7684';
    sideLine = '#e0e4eb';
    sky = '#e3edfb';
    skyInk = '#4a6ea0';
    accent = '#4a6ea0';
    colour = '#4fb3a8';
    radius = '6px';
    wash = 'linear-gradient(135deg, #f1f5fd 0%, #fdfcfa 48%, #fdf5ee 100%)';

    protected override parts(): RuleSet[] {
        return [...super.parts(), this.tree(), this.icons(), this.small()];
    }

    protected override library(): RuleSet {
        return css`
            ${super.library()}
            .pd-book.pa-tone .pd-library {
                background: linear-gradient(180deg, #fbfcfe 0%, #f8fafe 60%, #f1f4fa 100%);
                border-block-end: thin solid #dfe4ed;
                box-shadow: 0 1px 0 rgba(43, 54, 60, 0.05);
            }
        `;
    }

    protected override holds(): RuleSet {
        return css`
            ${super.holds()}
            .pd-holds .pd-paragraph.pa-entry::before { content: none; }
        `;
    }

    protected override page(): RuleSet {
        return css`
            ${super.page()}
            .pd-book { line-height: 1.6; }
            .pd-book.pa-layout { background: ${({ theme }) => theme.wash}; }
            .pd-book .pd-head { display: none; padding: 0; }
        `;
    }

    protected tree(): RuleSet {
        return css`
            .pd-book .pd-holds {
                padding: calc(${({ theme }) => theme.space} * 0.5833) 0 calc(${({ theme }) => theme.space} * 0.6667);
                background: linear-gradient(90deg, #f9fafc 0%, #f7f8fb 86%, #f2f4f8 100%);
                border-inline-end: thin solid ${({ theme }) => theme.sideLine};
                font-size: calc(0.8929 * ${({ theme }) => theme.size});
                scrollbar-width: thin;
                scrollbar-color: transparent transparent;
                transition: scrollbar-color ${({ theme }) => theme.beat} ease;
            }
            .pd-book .pd-holds:hover { scrollbar-color: color-mix(in oklab, var(--band) 62%, white) transparent; }
            .pd-book .pd-holds .pd-chapter { display: flex; flex-direction: column; min-height: 100%; margin: 0; color: ${({ theme }) => theme.sideInk}; }
            .pd-holds .pa-parenthetical { display: none; }
            .pd-holds .pd-section.pa-appendix { margin: auto 0 0; padding-block-start: calc(${({ theme }) => theme.space} / 3); border-block-start: thin solid #e3e7ee; opacity: 1; }
            .pd-holds .pd-section.pa-appendix .pd-heading { font-size: calc(0.9286 * ${({ theme }) => theme.size}); }
            .pd-holds .pd-section.pa-appendix .pa-entry { font-size: calc(0.9286 * ${({ theme }) => theme.size}); font-weight: 400; }
        `;
    }

    protected icons(): RuleSet {
        return css`
            .pd-word.pd-icon {
                display: inline-block;
                flex: none;
                width: calc(1.1429 * ${({ theme }) => theme.size});
                height: calc(1.1429 * ${({ theme }) => theme.size});
                color: var(--colour);
            }
            .pd-icon .pd-drawing, .pd-icon svg, .pd-svg svg { display: block; width: 100%; height: 100%; }
            .pd-icon svg, .pd-svg svg { fill: none; stroke: var(--colour); stroke-width: 1.25; stroke-linecap: round; stroke-linejoin: round; }
            .pd-icon .ground, .pd-svg .ground { fill: color-mix(in oklch, var(--colour) 24%, white); stroke: var(--colour); stroke-width: 1.5; }
            .pd-icon .dot, .pd-svg .dot { fill: var(--colour); stroke: none; }
            .pd-icon .over, .pd-svg .over { fill: color-mix(in oklch, var(--colour) 24%, white); }
            .pd-icon .solid, .pd-svg .solid { fill: var(--colour); }
            .pd-holds .pd-word.pd-icon { width: calc(1.1429 * ${({ theme }) => theme.size}); height: calc(1.1429 * ${({ theme }) => theme.size}); }
        `;
    }

    protected small(): RuleSet {
        return css`
            @media (max-width: ${({ theme }) => theme.narrow}) {
                .pd-holds, .pd-library { border-inline-end: none; border-block-end: thin solid ${({ theme }) => theme.line}; }
                .pd-holds .pd-chapter { min-height: 0; }
            }
        `;
    }
}

export const ManualTheme = $($ManualTheme);
$(ManualBook, Theme)(ManualTheme);
