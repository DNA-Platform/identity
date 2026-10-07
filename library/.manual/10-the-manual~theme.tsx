import { css, RuleSet } from 'styled-components';
import { $ } from '@dna-platform/chemistry';
import { Theme } from '@dna-platform/public';
import { $LibraryBookTheme } from './3-the-theme~code.tsx';
import { Manual } from './10-the-manual~code.tsx';

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
        return [...super.parts(), this.tree(), this.icons(), this.words(), this.rail(), this.grip(), this.files(), this.code(), this.small()];
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
            .pd-book {
                --night: color-mix(in oklch, #0f2a33 55%, #2b363c);
                --dusk: color-mix(in oklch, #17363f 55%, #343f45);
                --dawn: color-mix(in oklch, #17363f 40%, #4a5560);
                --glow: #d6e1e3;
                --dim: color-mix(in oklch, #d8c48e 38%, #17363f);
                --brass: color-mix(in oklch, #d8c48e 72%, white);
                line-height: 1.6;
            }
            .pd-book.pa-light-code {
                --night: #f6f7f4;
                --dusk: #eceee8;
                --dawn: #ffffff;
                --glow: #2b363c;
                --dim: color-mix(in oklch, #5d4a16 45%, white);
                --brass: #5d4a16;
            }
            .pd-book .pd-library {
                background: linear-gradient(180deg, #fbfcfe 0%, #f8fafe 60%, #f1f4fa 100%);
                border-block-end: thin solid #dfe4ed;
                box-shadow: 0 1px 0 rgba(43, 54, 60, 0.05);
            }
            .pd-head { display: none; }
        `;
    }

    protected tree(): RuleSet {
        return css`
            .pd-holds {
                padding: calc(${({ theme }) => theme.space} * 0.5833) 0 calc(${({ theme }) => theme.space} * 0.6667);
                background: linear-gradient(90deg, #f9fafc 0%, #f7f8fb 86%, #f2f4f8 100%);
                border-inline-end: thin solid ${({ theme }) => theme.sideLine};
                font-size: calc(0.8929 * ${({ theme }) => theme.size});
                scrollbar-width: thin;
                scrollbar-color: transparent transparent;
                transition: scrollbar-color ${({ theme }) => theme.beat} ease;
            }
            .pd-holds:hover { scrollbar-color: color-mix(in oklch, var(--band) 62%, white) transparent; }
            .pd-holds .pd-chapter { display: flex; flex-direction: column; min-height: 100%; margin: 0; }
            .pd-holds .pa-parenthetical { display: none; }
            .pd-holds .pd-section { margin: 0 0 calc(${({ theme }) => theme.space} / 3); }
            .pd-holds .pd-folder { position: relative; }
            .pd-holds .pd-heading {
                display: flex;
                align-items: center;
                height: calc(1.9286 * ${({ theme }) => theme.size});
                margin: 0;
                padding: 0 calc(${({ theme }) => theme.space} * 0.5833) 0 calc(${({ theme }) => theme.space} * 2.3333);
                border: 0;
                font-size: calc(0.9286 * ${({ theme }) => theme.size});
                font-weight: 400;
                line-height: 1;
                letter-spacing: 0;
                text-transform: none;
                color: ${({ theme }) => theme.sideInk};
                transition: background ${({ theme }) => theme.beat} ease;
            }
            .pd-holds .pd-heading:hover { background: color-mix(in oklch, var(--band) 22%, white); }
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
            .pd-holds .pa-folded .pd-paragraph.pa-entry { display: none; }
            .pd-holds .pd-paragraph.pa-entry {
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
                box-shadow: inset 3px 0 0 transparent;
                transition: background ${({ theme }) => theme.beat} ease, color ${({ theme }) => theme.beat} ease, box-shadow ${({ theme }) => theme.beat} ease;
            }
            .pd-holds .pa-entry .pd-twist { order: -2; }
            .pd-holds .pa-entry .pd-twist.pd-blank { visibility: hidden; }
            .pd-holds .pa-entry .pd-icon { order: -1; }
            .pd-holds .pa-entry .pa-content { flex: 1; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
            .pd-holds .pa-entry:hover { background: color-mix(in oklch, var(--band) 28%, white); }
            .pd-holds .pd-paragraph.pa-entry.pa-open { background: color-mix(in oklch, var(--band) 42%, white); color: var(--band-ink); box-shadow: inset 3px 0 0 var(--band-ink); }
            .pd-holds .pa-number { order: 1; margin: 0; font-size: calc(0.75 * ${({ theme }) => theme.size}); color: color-mix(in oklch, var(--foot-ink) 48%, white); font-variant-numeric: tabular-nums; }
            .pd-holds .pa-entry .pd-file { order: 2; flex: 0 0 auto; width: calc(100% - ${({ theme }) => theme.space} * 1.7083); margin-inline-start: calc(${({ theme }) => theme.space} * 1.7083); }
            .pd-holds .pa-entry.pa-folded .pd-file { display: none; }
            .pd-holds .pd-file {
                display: flex;
                align-items: center;
                gap: calc(${({ theme }) => theme.space} * 0.2917);
                height: calc(1.9286 * ${({ theme }) => theme.size});
                padding: 0;
                border: 0;
                background: none;
                font: inherit;
                font-size: calc(0.9286 * ${({ theme }) => theme.size});
                color: ${({ theme }) => theme.sideInk};
                text-align: start;
                cursor: pointer;
                transition: color ${({ theme }) => theme.beat} ease;
            }
            .pd-holds .pd-file .pd-drawing { flex: none; width: calc(0.9286 * ${({ theme }) => theme.size}); height: calc(0.9286 * ${({ theme }) => theme.size}); color: #9aa4b3; }
            .pd-holds .pd-file:hover { color: ${({ theme }) => theme.ink}; }
            .pd-holds .pd-file[aria-pressed='true'] { color: var(--band-ink); font-weight: 500; background: none; border-color: transparent; }
            .pd-holds .pd-file[aria-pressed='true'] .pd-drawing { color: var(--colour); }
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
            .pd-holds .pd-word.pd-icon { width: ${({ theme }) => theme.size}; height: ${({ theme }) => theme.size}; }
            .pd-words .pd-icon {
                float: inline-start;
                width: calc(1.571 * ${({ theme }) => theme.size});
                height: calc(1.571 * ${({ theme }) => theme.size});
                margin: calc(${({ theme }) => theme.space} * 0.2083) calc(${({ theme }) => theme.space} * 0.4167) 0 0;
            }
            .pd-words .pd-paragraph .pd-svg { display: block; width: calc(${({ theme }) => theme.space} * 4); height: calc(${({ theme }) => theme.space} * 4); }
        `;
    }

    protected words(): RuleSet {
        return css`
            .pd-words { padding: calc(${({ theme }) => theme.space} * 0.9167) calc(${({ theme }) => theme.space} * 1.5) calc(${({ theme }) => theme.space} * 1.6667); font-size: ${({ theme }) => theme.size}; }
            .pa-split .pd-words { padding: calc(${({ theme }) => theme.space} * 0.9167) calc(${({ theme }) => theme.space} * 1.1667) calc(${({ theme }) => theme.space} * 1.6667) calc(${({ theme }) => theme.space} * 1.3333); }
            .pd-words .pd-chapter { max-width: ${({ theme }) => theme.measure}; margin: 0; }
            .pd-words .pd-title {
                margin: 0 0 calc(${({ theme }) => theme.space} / 4);
                font-family: ${({ theme }) => theme.font};
                font-size: calc(1.7143 * ${({ theme }) => theme.size});
                font-weight: 600;
                line-height: 1.2;
                letter-spacing: -0.02em;
                color: ${({ theme }) => theme.heading};
            }
            .pd-words .pd-paragraph.pa-brief {
                display: block;
                max-width: 72ch;
                margin: 0 0 calc(${({ theme }) => theme.space} * 0.4167);
                font-family: ${({ theme }) => theme.serif};
                font-size: calc(1.1071 * ${({ theme }) => theme.size});
                font-style: italic;
                line-height: 1.5;
                color: ${({ theme }) => theme.soft};
            }
            .pd-words .pd-section { margin: calc(${({ theme }) => theme.space} * 1.0833) 0 0; }
            .pd-words .pd-heading {
                margin: 0 0 calc(${({ theme }) => theme.space} / 3);
                padding: 0 0 calc(${({ theme }) => theme.space} / 4);
                border: 0;
                border-block-end: thin solid ${({ theme }) => theme.line};
                border-image: linear-gradient(90deg, var(--brass) 0 calc(${({ theme }) => theme.space} * 1.6667), ${({ theme }) => theme.line} calc(${({ theme }) => theme.space} * 1.6667)) 1;
                font-family: ${({ theme }) => theme.font};
                font-size: calc(0.7857 * ${({ theme }) => theme.size});
                font-weight: 600;
                line-height: 1.3;
                letter-spacing: 0.08em;
                text-transform: uppercase;
                color: ${({ theme }) => theme.sideDim};
            }
            .pd-words .pd-paragraph { margin: calc(${({ theme }) => theme.space} / 3) 0; }
            .pd-words .pd-paragraph .pa-reference { color: var(--band-ink); text-decoration: underline; text-decoration-color: color-mix(in oklch, var(--band-ink) 35%, white); text-underline-offset: 2px; transition: text-decoration-color ${({ theme }) => theme.beat} ease; }
            .pd-words .pd-paragraph .pa-reference:hover { text-decoration-color: var(--band-ink); }
            .pd-words .pa-self-reference { color: inherit; text-decoration: none; }
            .pd-words .pd-paragraph.pd-turn { display: flex; justify-content: space-between; gap: ${({ theme }) => theme.space}; margin: calc(${({ theme }) => theme.space} * 1.0833) 0 0; font-size: calc(0.7857 * ${({ theme }) => theme.size}); }
            .pd-words .pd-turn .pd-count { color: ${({ theme }) => theme.faint}; }
        `;
    }

    protected rail(): RuleSet {
        return css`
            .pd-rail {
                display: flex;
                flex-direction: column;
                align-items: stretch;
                gap: calc(${({ theme }) => theme.space} / 12);
                padding: calc(${({ theme }) => theme.space} * 0.4167) 0;
                background: linear-gradient(90deg, color-mix(in oklch, var(--night) 82%, white) 0%, var(--night) 22%);
                box-shadow: inset 1px 0 0 rgba(255, 255, 255, 0.08);
                transition: background ${({ theme }) => theme.beat} ease;
            }
            .pd-rail .pd-file {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: calc(${({ theme }) => theme.space} * 0.4167);
                padding: calc(${({ theme }) => theme.space} * 0.4167) 0 calc(${({ theme }) => theme.space} / 3);
                border: 0;
                border-inline-start: 2px solid transparent;
                background: none;
                font-family: ${({ theme }) => theme.mono};
                font-size: calc(0.7857 * ${({ theme }) => theme.size});
                font-weight: 500;
                line-height: 1;
                letter-spacing: 0.04em;
                color: color-mix(in oklch, var(--glow) 66%, var(--night));
                cursor: pointer;
                transition: background ${({ theme }) => theme.beat} ease, color ${({ theme }) => theme.beat} ease, border-color ${({ theme }) => theme.beat} ease;
            }
            .pd-rail .pd-file .pd-file-name { writing-mode: vertical-rl; }
            .pd-rail .pd-file .pd-drawing { width: calc(0.9286 * ${({ theme }) => theme.size}); height: calc(0.9286 * ${({ theme }) => theme.size}); color: #9aa4b3; }
            .pd-rail .pd-file svg { display: block; width: 100%; height: 100%; }
            .pd-rail .pd-skeleton { display: flex; flex-direction: column; align-items: flex-start; gap: 3px; width: calc(${({ theme }) => theme.space} * 1.0833); margin-block-start: 2px; opacity: 0.55; transition: opacity ${({ theme }) => theme.beat} ease; }
            .pd-rail .pd-skeleton i { display: block; height: 2px; border-radius: 1px; background: color-mix(in oklch, var(--brass) 60%, var(--glow)); }
            .pd-rail .pd-file:hover { color: var(--glow); background: var(--dusk); }
            .pd-rail .pd-file[aria-pressed='true'] { color: var(--glow); border-inline-start-color: var(--foot); background: var(--dusk); }
            .pd-rail .pd-file:hover .pd-skeleton, .pd-rail .pd-file[aria-pressed='true'] .pd-skeleton { opacity: 0.9; }
        `;
    }

    protected grip(): RuleSet {
        return css`
            .pd-grip { position: relative; background: linear-gradient(90deg, #f3f1eb 0%, #fbfaf6 10px); border-inline-start: thin solid #e6e2d8; transition: background ${({ theme }) => theme.beat} ease; }
            .pd-grip:hover { background: linear-gradient(90deg, #ece9e1 0%, #ffffff 10px); }
            .pd-grip .pd-word.pd-switch { display: block; width: 100%; height: 100%; padding: 0; border: 0; border-radius: 0; background: none; cursor: pointer; }
            .pd-grip .pd-skeleton { position: absolute; top: calc(${({ theme }) => theme.space} * 0.5833); left: 5px; display: flex; flex-direction: column; gap: 3px; width: 8px; opacity: 0.7; }
            .pd-grip .pd-skeleton i { display: block; height: 2px; border-radius: 1px; background: #cfcbc0; }
        `;
    }

    protected files(): RuleSet {
        return css`
            .pd-files {
                background: linear-gradient(90deg, color-mix(in oklch, var(--night) 90%, white) 0%, var(--night) 36px);
                color: var(--glow);
                box-shadow: -10px 0 18px -16px rgba(43, 54, 60, 0.5);
                transition: background ${({ theme }) => theme.beat} ease, color ${({ theme }) => theme.beat} ease;
            }
            .pa-code-forward .pd-files { box-shadow: none; }
            .pd-tabs {
                display: flex;
                align-items: stretch;
                gap: 1px;
                padding: 0 0 0 2px;
                background: linear-gradient(180deg, color-mix(in oklch, var(--dusk) 88%, white) 0%, var(--dusk) 100%);
                border-block-end: thin solid color-mix(in oklch, var(--foot) 28%, var(--dusk));
            }
            .pd-tabs .pd-file {
                display: flex;
                align-items: center;
                gap: calc(${({ theme }) => theme.space} * 0.2917);
                padding: calc(${({ theme }) => theme.space} * 0.375) calc(${({ theme }) => theme.space} * 0.5833) calc(${({ theme }) => theme.space} / 3) calc(${({ theme }) => theme.space} / 2);
                border: 0;
                border-block-start: 2px solid transparent;
                background: none;
                font-family: ${({ theme }) => theme.mono};
                font-size: calc(0.8571 * ${({ theme }) => theme.size});
                font-weight: 500;
                line-height: 1;
                color: color-mix(in oklch, var(--glow) 62%, var(--night));
                cursor: pointer;
                transition: background ${({ theme }) => theme.beat} ease, color ${({ theme }) => theme.beat} ease, border-color ${({ theme }) => theme.beat} ease;
            }
            .pd-tabs .pd-file .pd-drawing { width: calc(0.9286 * ${({ theme }) => theme.size}); height: calc(0.9286 * ${({ theme }) => theme.size}); color: #9aa4b3; }
            .pd-tabs .pd-file svg { display: block; width: 100%; height: 100%; }
            .pd-tabs .pd-file:hover { color: var(--glow); }
            .pd-tabs .pd-file[aria-pressed='true'] { color: var(--glow); background: var(--night); border-block-start-color: var(--foot); }
            .pd-tabs .pd-file[aria-pressed='true'] .pd-drawing { color: var(--colour); }
            .pd-tabs .pd-words-tab, .pd-tabs .pd-dock { display: flex; align-items: center; }
            .pd-tabs .pd-dock { margin-inline-start: auto; }
            .pd-tabs .pd-words-tab .pd-word.pd-switch, .pd-tabs .pd-dock .pd-word.pd-switch {
                display: flex;
                align-items: center;
                gap: calc(${({ theme }) => theme.space} / 4);
                padding: 0 calc(${({ theme }) => theme.space} / 2);
                border: 0;
                border-radius: 0;
                background: none;
                font-family: ${({ theme }) => theme.font};
                font-size: calc(0.75 * ${({ theme }) => theme.size});
                font-weight: 500;
                line-height: 1;
                letter-spacing: 0.06em;
                text-transform: uppercase;
                color: color-mix(in oklch, var(--glow) 62%, var(--night));
                cursor: pointer;
                transition: color ${({ theme }) => theme.beat} ease;
            }
            .pd-tabs .pd-dock .pd-word.pd-switch { color: var(--brass); }
            .pd-tabs .pd-words-tab .pd-word.pd-switch:hover, .pd-tabs .pd-dock .pd-word.pd-switch:hover { color: var(--glow); }
            .pd-tabs .pd-dock .pd-word.pd-switch::before { content: ''; width: 9px; height: 9px; border: 1.5px solid currentColor; border-radius: 1px; box-shadow: 3px 3px 0 -1.5px currentColor; }
            .pd-tabs .pd-to-split { display: none; }
            .pa-code-forward .pd-tabs .pd-to-full, .pa-code-forward .pd-tabs .pd-words-tab { display: none; }
            .pa-code-forward .pd-tabs .pd-to-split { display: flex; }
            .pa-code-forward .pd-tabs .pd-dock .pd-word.pd-switch::before { box-shadow: -3px 3px 0 -1.5px currentColor; }
            .pd-options { display: flex; align-items: center; gap: 2px; padding: 0 calc(${({ theme }) => theme.space} / 3) 0 calc(${({ theme }) => theme.space} / 6); border-inline-start: thin solid color-mix(in oklch, var(--glow) 12%, transparent); }
            .pd-options .pd-word.pd-switch {
                padding: 5px 7px;
                border: 0;
                border-radius: 4px;
                background: none;
                font-family: ${({ theme }) => theme.font};
                font-size: calc(0.75 * ${({ theme }) => theme.size});
                font-weight: 500;
                line-height: 1;
                letter-spacing: 0.04em;
                color: color-mix(in oklch, var(--glow) 55%, var(--night));
                cursor: pointer;
                transition: color ${({ theme }) => theme.beat} ease, background ${({ theme }) => theme.beat} ease;
            }
            .pd-options .pd-word.pd-switch:hover { color: var(--glow); }
            .pd-options .pd-word.pd-switch[aria-pressed='true'] { color: var(--glow); background: var(--dawn); border-color: transparent; }
            .pd-listings { display: grid; min-height: 0; overflow: hidden; }
        `;
    }

    protected code(): RuleSet {
        return css`
            .pd-paragraph.pd-listing { display: none; margin: 0; padding: 0; min-height: 0; }
            .pd-listing.pa-opened { display: block; overflow: auto; scrollbar-width: thin; scrollbar-color: transparent transparent; transition: scrollbar-color ${({ theme }) => theme.beat} ease; }
            .pd-listing.pa-opened:hover { scrollbar-color: var(--dim) transparent; }
            .pd-listing .pd-word { display: none; }
            .pd-listing .pd-code {
                margin: 0;
                padding: calc(${({ theme }) => theme.space} * 0.5833) 0;
                border-radius: 0;
                background: transparent;
                font-family: ${({ theme }) => theme.mono};
                font-size: calc(0.8571 * ${({ theme }) => theme.size});
                line-height: 1.7;
                white-space: normal;
                color: var(--glow);
                cursor: zoom-in;
            }
            .pa-code-forward .pd-listing .pd-code { cursor: default; }
            .pd-listing .pd-code code { background: transparent; color: inherit; }
            .pd-code-line { display: block; padding-inline-end: calc(${({ theme }) => theme.space} * 0.75); white-space: pre; }
            .pa-wrapped .pd-code-line { white-space: pre-wrap; padding-inline-start: calc(${({ theme }) => theme.space} * 2.4167); text-indent: calc(${({ theme }) => theme.space} * -2.4167); }
            .pd-code-line::before { content: attr(data-line); display: inline-block; width: calc(${({ theme }) => theme.space} * 1.8333); padding-inline-end: calc(${({ theme }) => theme.space} * 0.5833); text-align: end; color: var(--dim); user-select: none; text-indent: 0; }
            .pd-book:not(.pa-numbered) .pd-code-line::before { content: ''; width: calc(${({ theme }) => theme.space} * 0.5833); padding: 0; }
            .pa-light-code .hljs-keyword, .pa-light-code .hljs-built_in, .pa-light-code .hljs-literal { color: #5a4fa8; }
            .pa-light-code .hljs-string, .pa-light-code .hljs-regexp, .pa-light-code .hljs-number { color: #2f7f6e; }
            .pa-light-code .hljs-title, .pa-light-code .hljs-type, .pa-light-code .hljs-tag, .pa-light-code .hljs-name, .pa-light-code .hljs-attr { color: #23407a; }
            .pa-light-code .hljs-comment, .pa-light-code .hljs-meta { color: #8a94a3; }
        `;
    }

    protected small(): RuleSet {
        return css`
            @media (max-width: ${({ theme }) => theme.narrow}) {
                .pd-holds, .pd-library { border-inline-end: none; border-block-end: thin solid ${({ theme }) => theme.line}; }
                .pd-holds .pd-chapter { min-height: 0; }
                .pd-holds .pa-folder .pd-twist, .pd-holds .pd-folder-mark, .pd-holds .pa-entry .pd-twist, .pd-holds .pa-entry .pd-file { display: none; }
                .pd-holds .pd-heading { height: auto; padding: 0 calc(${({ theme }) => theme.space} / 2); }
                .pd-words { padding: calc(${({ theme }) => theme.space} * 0.83) calc(${({ theme }) => theme.space} * 0.67) calc(${({ theme }) => theme.space} / 3); }
                .pd-words .pd-title { font-size: calc(1.5 * ${({ theme }) => theme.size}); }
                .pd-files { box-shadow: none; }
            }
        `;
    }
}

export const ManualTheme = $($ManualTheme);
$(Manual, Theme)(ManualTheme);
