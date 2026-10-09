import { css, RuleSet } from 'styled-components';
import { $ } from '@dna-platform/chemistry';
import { Theme } from '@dna-platform/public';
import { $LibraryBookTheme } from './3-the-theme~code.tsx';
import { ManualBook } from './10-the-manual~code.tsx';

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
            .pd-holds .pd-section { margin: 0 0 calc(${({ theme }) => theme.space} / 3); }
            .pd-holds .pd-folder { position: relative; }
            .pd-book .pd-holds .pd-heading {
                display: flex;
                align-items: center;
                height: calc(1.9286 * ${({ theme }) => theme.size});
                margin: 0;
                padding: 0 calc(${({ theme }) => theme.space} * 0.5833) 0 calc(${({ theme }) => theme.space} * 2.3333);
                border: 0;
                font-size: calc(0.9286 * ${({ theme }) => theme.size});
                font-weight: 400;
                line-height: calc(1.9286 * ${({ theme }) => theme.size});
                letter-spacing: 0;
                text-transform: none;
                color: ${({ theme }) => theme.sideInk};
                transition: background ${({ theme }) => theme.beat} ease;
            }
            .pd-holds .pd-heading:hover { background: color-mix(in oklab, ${({ theme }) => theme.sky} 30%, white); }
            .pd-holds .pd-heading .pa-reference { color: inherit; text-decoration: none; }
            .pd-holds .pd-twist {
                display: grid;
                place-items: center;
                width: calc(1.1429 * ${({ theme }) => theme.size});
                height: calc(1.1429 * ${({ theme }) => theme.size});
                padding: 0;
                border: 0;
                border-radius: 0;
                background: none;
                color: #a5aebb;
                cursor: pointer;
                transition: transform 0.18s ease, color ${({ theme }) => theme.beat} ease;
            }
            .pd-holds .pd-twist .pd-drawing { display: block; width: calc(0.7143 * ${({ theme }) => theme.size}); height: calc(0.7143 * ${({ theme }) => theme.size}); }
            .pd-holds .pd-twist svg, .pd-holds .pd-folder-mark svg, .pd-holds .pd-file svg { display: block; width: 100%; height: 100%; }
            .pd-holds .pd-word.pd-twist[aria-pressed='true'] { color: #a5aebb; background: none; border-color: transparent; }
            .pd-holds .pd-twist[aria-pressed='false'] { transform: rotate(90deg); }
            .pd-holds .pd-twist:hover { color: ${({ theme }) => theme.ink}; }
            .pd-holds .pd-folder .pd-twist { position: absolute; top: calc(${({ theme }) => theme.space} * 0.2292); left: calc(${({ theme }) => theme.space} * 0.4167); }
            .pd-holds .pd-folder-mark {
                position: absolute;
                top: calc(${({ theme }) => theme.space} * 0.2292);
                left: calc(${({ theme }) => theme.space} * 1.375);
                width: calc(1.1429 * ${({ theme }) => theme.size});
                height: calc(1.1429 * ${({ theme }) => theme.size});
                color: #8a94a3;
            }
            .pd-holds .pd-folder-mark .ground { fill: #f1f3f5; stroke: #8a94a3; stroke-width: 1.5; }
            .pd-book .pd-holds .pa-folded .pd-paragraph.pa-entry { display: none; }
            .pd-book .pd-holds .pd-paragraph.pa-entry {
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                justify-content: flex-start;
                gap: 0 calc(${({ theme }) => theme.space} * 0.2917);
                margin: 0;
                min-height: calc(1.9286 * ${({ theme }) => theme.size});
                padding: 0 calc(${({ theme }) => theme.space} * 0.5833) 0 calc(${({ theme }) => theme.space} * 1.1667);
                border-radius: 0;
                font-size: calc(0.9286 * ${({ theme }) => theme.size});
                font-weight: 400;
                line-height: calc(1.9286 * ${({ theme }) => theme.size});
                color: ${({ theme }) => theme.sideInk};
                cursor: pointer;
                transition: color ${({ theme }) => theme.beat} ease;
            }
            .pd-holds .pa-entry .pd-twist { order: -2; position: static; }
            .pd-holds .pa-entry .pd-twist.pd-blank { visibility: hidden; }
            .pd-holds .pa-entry .pd-icon { order: -1; }
            .pd-holds .pa-entry .pa-content { flex: 1; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
            .pd-book .pd-holds .pa-entry:hover { background: linear-gradient(color-mix(in oklab, ${({ theme }) => theme.sky} 40%, white), color-mix(in oklab, ${({ theme }) => theme.sky} 40%, white)) left top / 100% calc(1.9286 * ${({ theme }) => theme.size}) no-repeat; }
            .pd-book .pd-holds .pd-paragraph.pa-entry.pa-open {
                background: linear-gradient(var(--band-ink), var(--band-ink)) left top / 3px calc(1.9286 * ${({ theme }) => theme.size}) no-repeat, linear-gradient(color-mix(in oklab, ${({ theme }) => theme.sky} 72%, white), color-mix(in oklab, ${({ theme }) => theme.sky} 72%, white)) left top / 100% calc(1.9286 * ${({ theme }) => theme.size}) no-repeat;
                color: var(--band-ink);
                font-weight: 400;
                box-shadow: none;
            }
            .pd-holds .pa-number { order: 1; margin: 0; font-size: calc(0.75 * ${({ theme }) => theme.size}); color: color-mix(in oklch, var(--foot-ink) 48%, white); font-variant-numeric: tabular-nums; }
            .pd-holds .pa-entry .pd-file {
                order: 2;
                flex: 0 0 calc(100% + ${({ theme }) => theme.space} * 1.75);
                margin: 0 calc(${({ theme }) => theme.space} * -0.5833) 0 calc(${({ theme }) => theme.space} * -1.1667);
                padding: 0 calc(${({ theme }) => theme.space} * 0.5833) 0 calc(${({ theme }) => theme.space} * 2.875);
            }
            .pd-book .pd-holds .pa-entry.pa-folded .pd-file { display: none; }
            .pd-book .pd-holds .pd-paragraph.pa-entry .pd-file {
                display: flex;
                align-items: center;
                gap: calc(${({ theme }) => theme.space} * 0.2917);
                height: calc(1.9286 * ${({ theme }) => theme.size});
                border: 0;
                border-radius: 0;
                background: none;
                font: inherit;
                font-size: calc(0.9286 * ${({ theme }) => theme.size});
                font-weight: 400;
                line-height: calc(1.9286 * ${({ theme }) => theme.size});
                color: ${({ theme }) => theme.sideInk};
                text-align: start;
                cursor: pointer;
                transition: background ${({ theme }) => theme.beat} ease, color ${({ theme }) => theme.beat} ease;
            }
            .pd-holds .pd-file .pd-drawing { flex: none; width: ${({ theme }) => theme.size}; height: ${({ theme }) => theme.size}; color: #a5aebb; transition: color ${({ theme }) => theme.beat} ease; }
            .pd-book .pd-holds .pd-file:hover { background: color-mix(in oklab, ${({ theme }) => theme.sky} 40%, white); color: ${({ theme }) => theme.ink}; }
            .pd-book.pa-split .pd-holds .pd-paragraph.pa-entry .pd-file[aria-pressed='true'], .pd-book.pa-code-forward .pd-holds .pd-paragraph.pa-entry .pd-file[aria-pressed='true'] { color: ${({ theme }) => theme.skyInk}; font-weight: 500; background: color-mix(in oklab, ${({ theme }) => theme.sky} 45%, white); }
            .pd-book.pa-split .pd-holds .pd-paragraph.pa-entry .pd-file[aria-pressed='true'] .pd-drawing, .pd-book.pa-code-forward .pd-holds .pd-paragraph.pa-entry .pd-file[aria-pressed='true'] .pd-drawing { color: var(--colour); }
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
                .pd-holds .pa-folder .pd-twist, .pd-holds .pd-folder-mark, .pd-holds .pa-entry .pd-twist, .pd-holds .pa-entry .pd-file { display: none; }
                .pd-holds .pd-heading { height: auto; padding: 0 calc(${({ theme }) => theme.space} / 2); }
            }
        `;
    }
}

export const ManualTheme = $($ManualTheme);
$(ManualBook, Theme)(ManualTheme);
