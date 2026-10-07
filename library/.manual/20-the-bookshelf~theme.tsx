import { css, RuleSet } from 'styled-components';
import { $ } from '@dna-platform/chemistry';
import { $LibraryBookTheme } from './3-the-theme~code.tsx';

export class $Bookshelf extends $LibraryBookTheme {
    serif = "'Source Serif 4', Georgia, serif";
    paper = '#fdfcfa';
    ink = '#343c4a';
    soft = '#727d8c';
    faint = '#9ea8b5';
    line = '#e4e9f2';
    tint = '#f0f4fc';
    barTint = '#f8fafe';
    sky = '#e3edfb';
    skyInk = '#4a6ea0';
    accent = '#4a6ea0';
    wash = 'linear-gradient(135deg, #f2f6fd 0%, #fdfcfa 48%, #fdf6f1 100%)';
    side = '#f7f8fb';
    sideInk = '#3a4452';
    sideDim = '#7f8a9b';
    sideLine = '#e3e7ee';
    barHeight = '52px';
    holdsColumn = '232px';
    space = '24px';
    cover = '132px';
    volume = '184px';
    radius = '6px';
    spine = 'inset 3px 0 0 rgba(0, 0, 0, 0.08), inset 4px 0 0 rgba(255, 255, 255, 0.35), 0 6px 12px -10px rgba(44, 52, 64, 0.3)';
    lift = 'inset 3px 0 0 rgba(0, 0, 0, 0.08), inset 4px 0 0 rgba(255, 255, 255, 0.35), 0 10px 16px -12px rgba(44, 52, 64, 0.35)';
    openSpine = 'inset 7px 0 0 rgba(0, 0, 0, 0.07), inset 9px 0 0 rgba(255, 255, 255, 0.45), 0 12px 22px -16px rgba(44, 52, 64, 0.35)';
    keyword = '#5a4fa8';
    string = '#2f7f6e';
    type = '#23407a';
    comment = '#8a94a3';

    protected override parts(): RuleSet[] {
        return [...super.parts(), this.illustrations(), this.marks(), this.lockups(), this.shelf(), this.jackets(), this.desk(), this.unfolded(), this.built(), this.small()];
    }

    protected override page(): RuleSet {
        return css`
            font-family: ${({ theme }) => theme.font};
            font-size: ${({ theme }) => theme.size};
            line-height: 1.55;
            color: ${({ theme }) => theme.ink};
            background: ${({ theme }) => theme.wash};
            min-height: 100vh;
        `;
    }

    protected override library(): RuleSet {
        return css`
            .pd-library { padding: 0 calc(${({ theme }) => theme.space} * 0.75); gap: calc(${({ theme }) => theme.space} / 6); }
            .pd-library .pd-paragraph, .pd-me .pd-paragraph { margin-block: 0; }
            .pd-library .pa-reference, .pd-me .pa-reference { color: inherit; text-decoration: none; }
            .pd-subjects { display: none; }
            .pd-me { padding: 0 calc(${({ theme }) => theme.space} * 0.75); }
        `;
    }

    protected override head(): RuleSet {
        return css`
            .pd-head { padding: 0; }
            .pd-head .pa-illustration { display: none; }
        `;
    }

    protected override holds(): RuleSet {
        return css`
            .pd-holds { display: grid; grid-template-rows: minmax(0, 1fr); padding: calc(${({ theme }) => theme.space} * 0.75) 0; }
            .pd-holds .pd-chapter { display: flex; flex-direction: column; min-height: 100%; margin-block: 0; }
            .pd-holds .pd-section { margin: 0 0 calc(${({ theme }) => theme.space} * 0.667); }
            .pd-holds .pd-heading {
                margin: 0 calc(${({ theme }) => theme.space} * 0.917) calc(${({ theme }) => theme.space} / 4);
                font-size: calc(0.75 * ${({ theme }) => theme.size});
                font-weight: 600;
                line-height: 1;
                letter-spacing: 0.12em;
                text-transform: uppercase;
                color: ${({ theme }) => theme.sideDim};
            }
            .pd-holds .pd-paragraph.pa-entry {
                position: relative;
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: calc(${({ theme }) => theme.space} * 0.375);
                margin: 0;
                padding: calc(${({ theme }) => theme.space} / 6) calc(${({ theme }) => theme.space} * 0.583) calc(${({ theme }) => theme.space} / 6) calc(${({ theme }) => theme.space} * 1.667);
                border-radius: 0;
                font-size: calc(0.93 * ${({ theme }) => theme.size});
                font-weight: 500;
                line-height: 1.35;
                color: ${({ theme }) => theme.sideInk};
                box-shadow: inset calc(${({ theme }) => theme.space} / 8) 0 0 transparent;
            }
            .pd-holds .pd-paragraph.pa-entry::before {
                content: '';
                position: absolute;
                inset-inline-start: calc(${({ theme }) => theme.space} * 0.958);
                width: calc(${({ theme }) => theme.space} / 3);
                height: calc(${({ theme }) => theme.space} / 3);
                border-radius: 50%;
                background: var(--band-ink, ${({ theme }) => theme.skyInk});
                box-shadow: 0 0 0 calc(${({ theme }) => theme.space} / 12) ${({ theme }) => theme.white};
            }
            .pd-holds .pd-paragraph.pa-entry:hover { background: color-mix(in oklch, var(--band, ${({ theme }) => theme.sky}) 30%, white); }
            .pd-holds .pd-paragraph.pa-entry.pa-open {
                background: color-mix(in oklch, var(--band, ${({ theme }) => theme.sky}) 45%, white);
                color: var(--band-ink, ${({ theme }) => theme.skyInk});
                box-shadow: inset calc(${({ theme }) => theme.space} / 8) 0 0 var(--band-ink, ${({ theme }) => theme.skyInk});
            }
            .pd-holds .pa-reference.pa-reference { color: inherit; text-decoration: none; }
            .pd-holds .pd-word.pa-arrow {
                display: grid;
                place-items: center;
                width: calc(${({ theme }) => theme.space} * 0.833);
                height: calc(${({ theme }) => theme.space} * 0.833);
                border: thin solid transparent;
                border-radius: 50%;
                color: ${({ theme }) => theme.faint};
            }
            .pd-holds .pd-word.pa-arrow .pa-content {
                display: block;
                margin-inline-start: calc(${({ theme }) => theme.space} / 24);
                font-size: calc(0.786 * ${({ theme }) => theme.size});
                line-height: 1;
                color: inherit;
            }
            .pd-holds .pa-entry:hover .pd-word.pa-arrow { border-color: ${({ theme }) => theme.line}; background: ${({ theme }) => theme.white}; color: ${({ theme }) => theme.soft}; }
            .pd-holds .pd-word.pa-arrow:hover {
                border-color: var(--band-ink, ${({ theme }) => theme.skyInk});
                background: var(--band, ${({ theme }) => theme.sky});
                color: var(--band-ink, ${({ theme }) => theme.skyInk});
            }
            .pd-holds .pa-parenthetical { display: none; }
            .pd-holds .pd-section.pa-appendix {
                margin: auto 0 0;
                padding-block-start: calc(${({ theme }) => theme.space} * 0.583);
                border-block-start: thin solid ${({ theme }) => theme.sideLine};
                opacity: 0.85;
            }
            .pd-holds .pd-section.pa-appendix .pd-heading { font-size: calc(0.68 * ${({ theme }) => theme.size}); }
            .pd-holds .pd-section.pa-appendix .pa-entry { font-size: calc(0.893 * ${({ theme }) => theme.size}); font-weight: 400; }
            @media (max-width: ${({ theme }) => theme.narrow}) {
                .pd-holds { padding: calc(${({ theme }) => theme.space} * 0.42) calc(${({ theme }) => theme.space} * 0.667) calc(${({ theme }) => theme.space} / 2); }
                .pd-holds .pd-chapter, .pd-holds .pd-section {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    gap: calc(${({ theme }) => theme.space} / 4);
                    margin: 0;
                    min-height: 0;
                }
                .pd-holds .pd-title { display: none; }
                .pd-holds .pd-heading { flex: none; margin: 0 calc(${({ theme }) => theme.space} / 4) 0 calc(${({ theme }) => theme.space} / 2); }
                .pd-holds .pd-paragraph.pa-entry {
                    flex: none;
                    padding: calc(${({ theme }) => theme.space} * 0.21) calc(${({ theme }) => theme.space} * 0.46);
                    border: thin solid currentColor;
                    border-radius: calc(${({ theme }) => theme.space} * 4);
                    white-space: nowrap;
                    box-shadow: none;
                }
                .pd-holds .pd-paragraph.pa-entry::before { display: none; }
                .pd-holds .pd-word.pa-arrow { display: none; }
                .pd-holds .pd-section.pa-appendix { margin: 0; padding: 0; border: 0; }
            }
        `;
    }

    protected illustrations(): RuleSet {
        return css`
            .pd-illustration { fill: none; stroke: var(--ink); stroke-width: 1.7; stroke-linecap: round; stroke-linejoin: round; }
            .pd-illustration .fill { fill: var(--foot); stroke: var(--ink); }
            .pd-illustration .light { fill: ${({ theme }) => theme.white}; stroke: none; }
            .pd-drawing { display: grid; place-items: center; min-height: 0; }
        `;
    }

    protected marks(): RuleSet {
        return css`
            .pd-word.pd-mark {
                display: block;
                position: relative;
                flex: none;
                box-sizing: border-box;
                width: calc(2 * ${({ theme }) => theme.size});
                height: calc(2 * ${({ theme }) => theme.size});
                border: calc(${({ theme }) => theme.volume} * 0.54 / 64 * 1.7) solid var(--ink);
                background: var(--band);
                overflow: hidden;
            }
            .pd-mark .pd-drawing { display: block; }
            .pd-mark .pd-illustration {
                position: absolute;
                width: calc(${({ theme }) => theme.volume} * 0.54);
                height: calc(${({ theme }) => theme.volume} * 0.54);
                left: var(--window-x);
                top: var(--window-y);
            }
        `;
    }

    protected lockups(): RuleSet {
        return css`
            .pd-library { background: ${({ theme }) => theme.barTint}; }
            .pd-logo { display: flex; align-items: center; gap: calc(${({ theme }) => theme.space} * 0.375); height: ${({ theme }) => theme.barHeight}; margin-inline-end: calc(${({ theme }) => theme.space} * 1.125); }
            .pd-logo .pd-word.pa-reference {
                display: block;
                font-family: ${({ theme }) => theme.serif};
                font-size: calc(1.29 * ${({ theme }) => theme.size});
                font-weight: 700;
                line-height: 1;
                letter-spacing: -0.015em;
                color: var(--band-ink, ${({ theme }) => theme.ink});
                transform: translateY(1px);
            }
            .pd-filed { display: flex; align-items: center; gap: calc(${({ theme }) => theme.space} * 0.375); height: ${({ theme }) => theme.barHeight}; margin-inline-end: calc(${({ theme }) => theme.space} * 0.417); }
            .pd-filed .pd-paragraph { display: flex; align-items: center; }
            .pd-filed .pa-label { display: none; }
            .pd-filed .pd-word.pa-reference {
                display: inline-block;
                max-width: 0;
                overflow: hidden;
                white-space: nowrap;
                font-size: calc(0.93 * ${({ theme }) => theme.size});
                font-weight: 500;
                line-height: 1;
                letter-spacing: 0.06em;
                text-transform: uppercase;
                color: ${({ theme }) => theme.soft};
                transition: max-width 0.22s ease, padding 0.22s ease;
            }
            .pd-filed:hover .pd-word.pa-reference { max-width: calc(${({ theme }) => theme.space} * 8); padding-inline: calc(${({ theme }) => theme.space} * 0.375) calc(${({ theme }) => theme.space} / 4); }
            .pd-filed::after { content: ''; width: thin; border-inline-start: thin solid ${({ theme }) => theme.line}; height: calc(${({ theme }) => theme.space} * 0.75); margin-inline-start: calc(${({ theme }) => theme.space} * 0.417); }
            .pd-me .pd-byline { display: flex; align-items: center; gap: calc(${({ theme }) => theme.space} * 0.375); font-size: calc(0.93 * ${({ theme }) => theme.size}); color: ${({ theme }) => theme.soft}; }
            .pd-me .pd-word.pa-reference { color: ${({ theme }) => theme.ink}; font-weight: 500; }
            .pd-me { gap: calc(${({ theme }) => theme.space} * 0.375); }
        `;
    }

    protected shelf(): RuleSet {
        return css`
            .pd-leaves { padding: calc(${({ theme }) => theme.space} * 1.167) calc(${({ theme }) => theme.space} * 1.5) calc(${({ theme }) => theme.space} * 2); }
            .pd-shelf {
                display: grid;
                grid-template-columns: repeat(auto-fill, ${({ theme }) => theme.cover});
                gap: calc(${({ theme }) => theme.space} * 1.083);
                align-items: start;
            }
            .pd-volume .pd-paragraph.pd-name {
                margin: calc(${({ theme }) => theme.space} * 0.417) 0 0;
                font-size: calc(0.93 * ${({ theme }) => theme.size});
                font-weight: 500;
                line-height: 1.3;
                text-align: center;
                color: ${({ theme }) => theme.ink};
            }
            .pd-volume .pd-name .pa-reference { color: inherit; text-decoration: none; }
        `;
    }

    protected jackets(): RuleSet {
        return css`
            .pd-paragraph.pd-jacket {
                position: relative;
                display: grid;
                grid-template-rows: 30% 1fr 24%;
                box-sizing: border-box;
                width: ${({ theme }) => theme.cover};
                height: calc(${({ theme }) => theme.cover} * 1.5);
                margin: 0;
                overflow: hidden;
                border-radius: calc(${({ theme }) => theme.space} / 12) calc(${({ theme }) => theme.space} / 6) calc(${({ theme }) => theme.space} / 6) calc(${({ theme }) => theme.space} / 12);
                background: var(--ground);
                color: var(--band-ink);
                font-family: ${({ theme }) => theme.serif};
                font-size: calc(0.964 * ${({ theme }) => theme.size});
                font-weight: 700;
                line-height: 1.18;
                letter-spacing: -0.005em;
                text-align: center;
                box-shadow: ${({ theme }) => theme.spine};
                cursor: pointer;
                transition: transform 0.18s ease, box-shadow 0.18s ease;
            }
            .pd-volume:hover .pd-jacket { transform: translateY(calc(${({ theme }) => theme.space} / -12)); box-shadow: ${({ theme }) => theme.lift}; }
            .pd-jacket .pd-word {
                display: grid;
                place-items: center;
                padding: calc(${({ theme }) => theme.space} / 8) calc(${({ theme }) => theme.space} * 0.417) calc(${({ theme }) => theme.space} / 8) calc(${({ theme }) => theme.space} * 0.542);
                background: var(--band);
                color: var(--band-ink);
                box-shadow: 0 calc(${({ theme }) => theme.space} / 12) 0 ${({ theme }) => theme.white};
            }
            .pd-jacket .pd-word.pa-label {
                padding: 0 calc(${({ theme }) => theme.space} * 0.417) 0 calc(${({ theme }) => theme.space} * 0.542);
                background: var(--foot);
                color: var(--foot-ink);
                font-family: ${({ theme }) => theme.font};
                font-size: calc(0.571 * ${({ theme }) => theme.size});
                font-weight: 500;
                line-height: 1.2;
                letter-spacing: 0.14em;
                text-transform: uppercase;
                box-shadow: 0 calc(${({ theme }) => theme.space} / -12) 0 ${({ theme }) => theme.white};
            }
            .pd-jacket .pd-illustration { width: 54%; height: auto; }
        `;
    }

    protected desk(): RuleSet {
        return css`
            .pd-leaf.pd-open {
                position: relative;
                display: grid;
                grid-template-columns: ${({ theme }) => theme.volume} minmax(0, 1fr);
                gap: calc(${({ theme }) => theme.space} * 1.167);
                align-items: start;
                margin-block-end: calc(${({ theme }) => theme.space} * 1.167);
                padding: calc(${({ theme }) => theme.space} * 0.833) ${({ theme }) => theme.space};
                border: thin solid color-mix(in oklch, var(--band, ${({ theme }) => theme.sky}) 40%, white);
                border-radius: calc(${({ theme }) => theme.space} * 0.417);
                background: linear-gradient(135deg, color-mix(in oklch, var(--band, ${({ theme }) => theme.sky}) 45%, white), color-mix(in oklch, var(--ground, ${({ theme }) => theme.tint}) 60%, white) 55%, ${({ theme }) => theme.white});
                box-shadow: 0 calc(${({ theme }) => theme.space} / 3) calc(${({ theme }) => theme.space} * 0.833) calc(${({ theme }) => theme.space} * -0.75) color-mix(in oklch, var(--band-ink, ${({ theme }) => theme.skyInk}) 45%, transparent);
            }
            .pd-leaf.pd-open .pd-paragraph.pd-jacket {
                width: ${({ theme }) => theme.volume};
                height: calc(${({ theme }) => theme.volume} * 1.5);
                font-size: calc(1.357 * ${({ theme }) => theme.size});
                box-shadow: ${({ theme }) => theme.openSpine};
                cursor: default;
            }
            .pd-leaf.pd-open .pd-jacket .pd-word {
                padding: calc(${({ theme }) => theme.space} / 2) calc(${({ theme }) => theme.space} * 0.833) calc(${({ theme }) => theme.space} / 2) calc(${({ theme }) => theme.space} * 0.958);
                box-shadow: 0 calc(${({ theme }) => theme.space} / 8) 0 ${({ theme }) => theme.white};
            }
            .pd-leaf.pd-open .pd-jacket .pd-word.pa-label {
                padding: 0 calc(${({ theme }) => theme.space} * 0.75) 0 calc(${({ theme }) => theme.space} * 0.875);
                font-size: calc(0.75 * ${({ theme }) => theme.size});
                letter-spacing: 0.18em;
                box-shadow: 0 calc(${({ theme }) => theme.space} / -8) 0 ${({ theme }) => theme.white};
            }
            .pd-leaf.pd-open .pd-words {
                position: relative;
                max-height: calc(${({ theme }) => theme.volume} * 1.5);
                padding-block-start: calc(${({ theme }) => theme.space} / 4);
                overflow: hidden;
            }
            .pd-leaf.pd-open .pd-words::after {
                content: '';
                position: absolute;
                inset-inline: 0;
                bottom: 0;
                height: calc(${({ theme }) => theme.space} * 3);
                background: linear-gradient(to bottom, transparent, color-mix(in oklch, var(--ground, ${({ theme }) => theme.tint}) 60%, white) 70%, color-mix(in oklch, var(--ground, ${({ theme }) => theme.tint}) 60%, white));
                pointer-events: none;
            }
            .pd-leaf.pd-open .pd-words .pd-chapter { margin-block: 0; max-width: none; }
            .pd-leaf.pd-open .pd-words .pd-paragraph.pd-shelved {
                display: flex;
                align-items: center;
                gap: calc(${({ theme }) => theme.space} / 3);
                margin: 0 0 calc(${({ theme }) => theme.space} / 3);
                font-size: calc(0.75 * ${({ theme }) => theme.size});
                font-weight: 600;
                line-height: 1;
                letter-spacing: 0.12em;
                text-transform: uppercase;
                color: var(--foot-ink, ${({ theme }) => theme.soft});
            }
            .pd-leaf.pd-open .pd-paragraph.pd-shelved::before {
                content: '';
                width: calc(${({ theme }) => theme.space} / 3);
                height: calc(${({ theme }) => theme.space} / 3);
                border-radius: 50%;
                background: var(--foot, ${({ theme }) => theme.sky});
            }
            .pd-leaf.pd-open .pd-words .pd-title {
                margin: 0 0 calc(${({ theme }) => theme.space} / 6);
                font-family: ${({ theme }) => theme.serif};
                font-size: calc(1.714 * ${({ theme }) => theme.size});
                font-weight: 700;
                line-height: 1.1;
                letter-spacing: -0.01em;
                color: var(--band-ink, ${({ theme }) => theme.ink});
            }
            .pd-leaf.pd-open .pd-words .pd-paragraph.pd-byline, .pd-leaf.pd-open .pd-words .pd-paragraph.pd-filed-under {
                display: inline-flex;
                gap: calc(${({ theme }) => theme.space} / 6);
                margin: 0 calc(${({ theme }) => theme.space} / 3) calc(${({ theme }) => theme.space} * 0.667) 0;
                font-size: calc(0.93 * ${({ theme }) => theme.size});
                color: ${({ theme }) => theme.soft};
            }
            .pd-leaf.pd-open .pd-byline .pa-reference, .pd-leaf.pd-open .pd-filed-under .pa-reference { color: var(--band-ink, ${({ theme }) => theme.skyInk}); font-weight: 500; text-decoration: none; }
            .pd-leaf.pd-open .pd-words .pd-paragraph {
                display: block;
                max-width: 56ch;
                margin: 0 0 calc(${({ theme }) => theme.space} * 0.417);
                font-family: ${({ theme }) => theme.serif};
                font-size: calc(1.07 * ${({ theme }) => theme.size});
                font-weight: 400;
                line-height: 1.55;
                color: ${({ theme }) => theme.ink};
            }
            .pd-leaf.pd-open .pd-words .pd-paragraph.pd-turn { display: none; }
            .pd-leaf.pd-open .pd-words .pd-paragraph.pa-caption {
                font-family: ${({ theme }) => theme.font};
                font-size: ${({ theme }) => theme.size};
                font-weight: 500;
                line-height: 1.5;
                color: var(--band-ink, ${({ theme }) => theme.ink});
            }
            .pd-leaf.pd-open .pd-words .pd-paragraph .pa-reference { color: var(--band-ink, ${({ theme }) => theme.skyInk}); }
            .pd-leaf.pd-open .pd-paragraph.pd-read { grid-column: 2; margin: 0; }
            .pd-leaf.pd-open .pd-read .pd-word {
                display: inline-flex;
                align-items: center;
                gap: calc(${({ theme }) => theme.space} / 3);
                padding: calc(${({ theme }) => theme.space} / 3) calc(${({ theme }) => theme.space} * 0.583);
                border-radius: ${({ theme }) => theme.radius};
                background: var(--band, ${({ theme }) => theme.sky});
                color: var(--band-ink, ${({ theme }) => theme.skyInk});
                font-family: ${({ theme }) => theme.font};
                font-size: calc(0.964 * ${({ theme }) => theme.size});
                font-weight: 600;
                text-decoration: none;
            }
            .pd-leaf.pd-open .pd-read .pd-word:hover { background: var(--foot, ${({ theme }) => theme.tint}); color: var(--foot-ink, ${({ theme }) => theme.ink}); }
            .pd-leaf.pd-open .pd-word.pd-switch {
                position: absolute;
                right: ${({ theme }) => theme.space};
                bottom: calc(${({ theme }) => theme.space} * 0.917);
                z-index: 1;
                display: inline-flex;
                align-items: center;
                gap: calc(${({ theme }) => theme.space} * 0.292);
                padding: calc(${({ theme }) => theme.space} / 4) calc(${({ theme }) => theme.space} / 2);
                border: thin solid color-mix(in oklch, var(--band, ${({ theme }) => theme.sky}) 60%, white);
                border-radius: ${({ theme }) => theme.radius};
                background: ${({ theme }) => theme.white};
                color: var(--band-ink, ${({ theme }) => theme.skyInk});
                font-size: calc(0.893 * ${({ theme }) => theme.size});
                font-weight: 500;
                line-height: 1;
                cursor: pointer;
            }
            .pd-leaf.pd-open .pd-word.pd-switch::after {
                content: '';
                width: calc(${({ theme }) => theme.space} * 0.375);
                height: calc(${({ theme }) => theme.space} * 0.375);
                border-inline-end: calc(${({ theme }) => theme.space} / 16) solid currentColor;
                border-block-start: calc(${({ theme }) => theme.space} / 16) solid currentColor;
                transform: translateY(1px);
            }
            .pd-leaf.pd-open .pd-word.pd-switch:hover { background: var(--band, ${({ theme }) => theme.sky}); }
            .pd-leaf.pd-open .pd-files { display: none; }
        `;
    }

    protected unfolded(): RuleSet {
        return css`
            .pa-unfolded .pd-shelf { display: none; }
            .pa-unfolded .pd-leaf.pd-open { margin-block-end: 0; }
            .pa-unfolded .pd-leaf.pd-open .pd-paragraph.pd-jacket { position: sticky; top: calc(${({ theme }) => theme.space} * 0.833); }
            .pa-unfolded .pd-leaf.pd-open .pd-words { max-height: none; max-width: 60ch; overflow: visible; }
            .pa-unfolded .pd-leaf.pd-open .pd-words::after { display: none; }
            .pa-unfolded .pd-leaf.pd-open .pd-words .pd-paragraph { font-size: calc(1.143 * ${({ theme }) => theme.size}); line-height: 1.6; }
            .pa-unfolded .pd-leaf.pd-open .pd-word.pd-switch { top: calc(${({ theme }) => theme.space} * 0.667); right: ${({ theme }) => theme.space}; bottom: auto; }
            .pa-unfolded .pd-leaf.pd-open .pd-word.pd-switch::after { transform: translateY(1px) rotate(180deg); }
        `;
    }

    protected built(): RuleSet {
        return css`
            .pa-built .pd-holds .pd-section:not(.pa-appendix) { opacity: 0.55; }
            .pa-built .pd-holds .pd-section:not(.pa-appendix) .pa-entry { display: none; }
            .pa-built .pd-holds .pd-section.pa-appendix { order: -1; margin-block-start: 0; padding-block-start: 0; border-block-start: 0; opacity: 1; }
            .pa-built .pd-holds .pd-section.pa-appendix .pd-heading { font-size: calc(0.75 * ${({ theme }) => theme.size}); }
            .pa-built .pd-holds .pd-section.pa-appendix .pa-entry { font-size: calc(0.964 * ${({ theme }) => theme.size}); font-weight: 500; }
            .pa-built .pd-holds .pd-section.pa-appendix .pa-entry::before { background: ${({ theme }) => theme.skyInk}; }
            .pa-built .pd-front, .pa-built .pd-shelf { display: none; }
            .pa-built .pd-leaf.pd-open {
                grid-template-columns: minmax(0, 1fr);
                padding: 0;
                border: 0;
                border-radius: 0;
                background: none;
                box-shadow: none;
            }
            .pa-built .pd-leaf.pd-open .pd-words { max-height: none; padding: 0; overflow: visible; }
            .pa-built .pd-leaf.pd-open .pd-words::after { display: none; }
            .pa-built .pd-leaf.pd-open .pd-words .pd-chapter { max-width: 64ch; }
            .pa-built .pd-leaf.pd-open .pd-words .pd-title {
                margin: 0 0 calc(${({ theme }) => theme.space} / 4);
                font-size: calc(1.857 * ${({ theme }) => theme.size});
                line-height: 1.15;
                color: ${({ theme }) => theme.ink};
            }
            .pa-built .pd-leaf.pd-open .pd-words .pd-heading {
                margin: calc(${({ theme }) => theme.space} * 1.083) 0 calc(${({ theme }) => theme.space} / 3);
                font-size: calc(0.786 * ${({ theme }) => theme.size});
                font-weight: 600;
                line-height: 1;
                letter-spacing: 0.12em;
                text-transform: uppercase;
                color: ${({ theme }) => theme.soft};
            }
            .pa-built .pd-leaf.pd-open .pd-words .pd-paragraph { margin: 0 0 calc(${({ theme }) => theme.space} * 0.583); font-size: calc(1.107 * ${({ theme }) => theme.size}); line-height: 1.6; }
            .pa-built .pd-leaf.pd-open .pd-words .pd-paragraph .pa-reference { color: ${({ theme }) => theme.skyInk}; }
            .pa-built .pd-leaf.pd-open .pd-word.pd-switch { display: none; }
            .pa-built .pd-leaf.pd-open .pd-files { display: grid; gap: calc(${({ theme }) => theme.space} * 0.75); background: none; color: inherit; }
            .pa-built .pd-paragraph.pd-listing { margin: 0; padding: 0; border: thin solid ${({ theme }) => theme.sideLine}; border-radius: ${({ theme }) => theme.radius}; background: ${({ theme }) => theme.side}; overflow: hidden; }
            .pa-built .pd-listing .pd-word {
                display: flex;
                align-items: center;
                gap: calc(${({ theme }) => theme.space} / 3);
                padding: calc(${({ theme }) => theme.space} * 0.292) calc(${({ theme }) => theme.space} / 2);
                border-block-end: thin solid ${({ theme }) => theme.sideLine};
                border-radius: 0;
                background: ${({ theme }) => theme.white};
                font-size: calc(0.857 * ${({ theme }) => theme.size});
                font-weight: 500;
                line-height: 1;
                color: ${({ theme }) => theme.soft};
            }
            .pa-built .pd-listing .pd-word::before { content: ''; width: calc(${({ theme }) => theme.space} * 0.292); height: calc(${({ theme }) => theme.space} * 0.292); border-radius: 50%; background: ${({ theme }) => theme.skyInk}; opacity: 0.6; }
            .pa-built .pd-listing .pd-code {
                margin: 0;
                padding: calc(${({ theme }) => theme.space} / 2) 0;
                border-radius: 0;
                background: none;
                font-size: calc(0.893 * ${({ theme }) => theme.size});
                line-height: 1.65;
                color: ${({ theme }) => theme.sideInk};
            }
            .pa-built .pd-code-line::before { width: calc(${({ theme }) => theme.space} * 1.833); padding-inline-end: calc(${({ theme }) => theme.space} * 0.583); color: ${({ theme }) => theme.faint}; }
        `;
    }

    protected small(): RuleSet {
        return css`
            @media (max-width: ${({ theme }) => theme.narrow}) {
                .pd-leaves { padding: calc(${({ theme }) => theme.space} * 0.667); }
                .pd-logo { margin-inline-end: calc(${({ theme }) => theme.space} / 2); }
                .pd-me .pd-word.pd-mark { display: block; }
                .pd-leaf.pd-open { grid-template-columns: ${({ theme }) => theme.cover} minmax(0, 1fr); gap: calc(${({ theme }) => theme.space} * 0.667); padding: calc(${({ theme }) => theme.space} * 0.667); }
                .pd-leaf.pd-open .pd-paragraph.pd-jacket { width: ${({ theme }) => theme.cover}; height: calc(${({ theme }) => theme.cover} * 1.5); font-size: calc(0.964 * ${({ theme }) => theme.size}); }
                .pd-leaf.pd-open .pd-words { max-height: none; }
                .pd-leaf.pd-open .pd-words::after { display: none; }
                .pd-leaf.pd-open .pd-word.pd-switch { display: none; }
                .pd-shelf { grid-template-columns: repeat(3, minmax(0, 1fr)); gap: calc(${({ theme }) => theme.space} * 0.583) calc(${({ theme }) => theme.space} / 2); }
                .pd-volume .pd-paragraph.pd-jacket { width: auto; height: auto; aspect-ratio: 2 / 3; }
            }
        `;
    }
}

export const Bookshelf = $($Bookshelf);
