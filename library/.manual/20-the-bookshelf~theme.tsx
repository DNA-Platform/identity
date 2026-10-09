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

    protected override parts(): RuleSet[] {
        return [...super.parts(), this.shelf(), this.jackets(), this.desk(), this.unfolded(), this.small()];
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
            ${super.library()}
            .pd-names .pd-name { font-family: ${({ theme }) => theme.serif}; font-size: calc(1.286 * ${({ theme }) => theme.size}); font-weight: 700; letter-spacing: -0.015em; }
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
            .pd-holds .pd-folder { margin-block-start: auto; }
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
                .pd-holds .pd-folder { margin: 0; }
            }
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
            .pd-volume .pa-reference { display: block; color: inherit; text-decoration: none; }
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
            .pd-leaf.pd-desk.pd-open {
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
            .pd-leaf.pd-desk.pd-open .pd-paragraph.pd-jacket {
                width: ${({ theme }) => theme.volume};
                height: calc(${({ theme }) => theme.volume} * 1.5);
                font-size: calc(1.357 * ${({ theme }) => theme.size});
                box-shadow: ${({ theme }) => theme.openSpine};
                cursor: default;
            }
            .pd-leaf.pd-desk.pd-open .pd-jacket .pd-word {
                padding: calc(${({ theme }) => theme.space} / 2) calc(${({ theme }) => theme.space} * 0.833) calc(${({ theme }) => theme.space} / 2) calc(${({ theme }) => theme.space} * 0.958);
                box-shadow: 0 calc(${({ theme }) => theme.space} / 8) 0 ${({ theme }) => theme.white};
            }
            .pd-leaf.pd-desk.pd-open .pd-jacket .pd-word.pa-label {
                padding: 0 calc(${({ theme }) => theme.space} * 0.75) 0 calc(${({ theme }) => theme.space} * 0.875);
                font-size: calc(0.75 * ${({ theme }) => theme.size});
                letter-spacing: 0.18em;
                box-shadow: 0 calc(${({ theme }) => theme.space} / -8) 0 ${({ theme }) => theme.white};
            }
            .pd-leaf.pd-desk.pd-open .pd-words {
                position: relative;
                max-height: calc(${({ theme }) => theme.volume} * 1.5);
                padding-block-start: calc(${({ theme }) => theme.space} / 4);
                overflow: clip;
                mask-image: linear-gradient(to bottom, black calc(${({ theme }) => theme.volume} * 1.5 - ${({ theme }) => theme.space} * 3), transparent calc(${({ theme }) => theme.volume} * 1.5));
            }
            .pd-leaf.pd-desk.pd-open .pd-words .pd-chapter { margin-block: 0; max-width: none; scroll-margin-block-start: calc(${({ theme }) => theme.space} * 3.5); }
            .pd-leaf.pd-desk.pd-open .pd-words .pd-paragraph.pd-shelved {
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
            .pd-leaf.pd-desk.pd-open .pd-paragraph.pd-shelved::before {
                content: '';
                width: calc(${({ theme }) => theme.space} / 3);
                height: calc(${({ theme }) => theme.space} / 3);
                border-radius: 50%;
                background: var(--foot, ${({ theme }) => theme.sky});
            }
            .pd-leaf.pd-desk.pd-open .pd-words .pd-title {
                margin: 0 0 calc(${({ theme }) => theme.space} / 6);
                font-family: ${({ theme }) => theme.serif};
                font-size: calc(1.714 * ${({ theme }) => theme.size});
                font-weight: 700;
                line-height: 1.1;
                letter-spacing: -0.01em;
                color: var(--band-ink, ${({ theme }) => theme.ink});
            }
            .pd-leaf.pd-desk.pd-open .pd-words .pd-paragraph {
                display: block;
                max-width: 56ch;
                margin: 0 0 calc(${({ theme }) => theme.space} * 0.417);
                font-family: ${({ theme }) => theme.serif};
                font-size: calc(1.07 * ${({ theme }) => theme.size});
                font-weight: 400;
                line-height: 1.55;
                color: ${({ theme }) => theme.ink};
            }
            .pd-leaf.pd-desk.pd-open .pd-words .pd-paragraph.pd-turn { display: none; }
            .pd-leaf.pd-desk.pd-open .pd-words .pd-paragraph.pa-caption {
                font-family: ${({ theme }) => theme.font};
                font-size: ${({ theme }) => theme.size};
                font-weight: 500;
                line-height: 1.5;
                color: var(--band-ink, ${({ theme }) => theme.ink});
            }
            .pd-leaf.pd-desk.pd-open .pd-words .pd-paragraph .pa-reference { color: var(--band-ink, ${({ theme }) => theme.skyInk}); }
            .pd-leaf.pd-desk.pd-open .pd-line { grid-column: 2; display: flex; flex-wrap: wrap; gap: 0 calc(${({ theme }) => theme.space} / 2); }
            .pd-leaf.pd-desk.pd-open .pd-paragraph.pd-byline, .pd-leaf.pd-desk.pd-open .pd-paragraph.pd-filed-under {
                display: inline-flex;
                gap: calc(${({ theme }) => theme.space} / 6);
                max-width: none;
                margin: 0 calc(${({ theme }) => theme.space} / 3) calc(${({ theme }) => theme.space} * 0.667) 0;
                font-family: ${({ theme }) => theme.serif};
                font-size: calc(0.93 * ${({ theme }) => theme.size});
                line-height: 1.55;
                color: ${({ theme }) => theme.soft};
            }
            .pd-leaf.pd-desk.pd-open .pd-line .pd-paragraph { margin-block-end: 0; }
            .pd-leaf.pd-desk.pd-open .pd-byline .pa-reference, .pd-leaf.pd-desk.pd-open .pd-filed-under .pa-reference { color: var(--band-ink, ${({ theme }) => theme.skyInk}); font-weight: 500; text-decoration: none; }
            .pd-leaf.pd-desk.pd-open .pd-paragraph.pd-read { grid-column: 2; margin: 0; }
            .pd-leaf.pd-desk.pd-open .pd-read .pd-word {
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
            .pd-leaf.pd-desk.pd-open .pd-read .pd-word:hover { background: var(--foot, ${({ theme }) => theme.tint}); color: var(--foot-ink, ${({ theme }) => theme.ink}); }
            .pd-leaf.pd-desk.pd-open .pd-word.pd-switch {
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
            .pd-leaf.pd-desk.pd-open .pd-word.pd-switch::after {
                content: '';
                width: calc(${({ theme }) => theme.space} * 0.375);
                height: calc(${({ theme }) => theme.space} * 0.375);
                border-inline-end: calc(${({ theme }) => theme.space} / 16) solid currentColor;
                border-block-start: calc(${({ theme }) => theme.space} / 16) solid currentColor;
                transform: translateY(calc(${({ theme }) => theme.space} / 24));
            }
            .pd-leaf.pd-desk.pd-open .pd-word.pd-switch:hover { background: var(--band, ${({ theme }) => theme.sky}); }
            .pd-leaf.pd-desk.pd-open .pd-files { display: none; }
        `;
    }

    protected unfolded(): RuleSet {
        return css`
            .pa-unfolded .pd-shelf { display: none; }
            .pa-unfolded .pd-leaf.pd-desk.pd-open { margin-block-end: 0; }
            .pa-unfolded .pd-leaf.pd-desk.pd-open .pd-paragraph.pd-jacket { position: sticky; top: calc(${({ theme }) => theme.space} * 0.833); }
            .pa-unfolded .pd-leaf.pd-desk.pd-open .pd-words { max-height: none; max-width: 60ch; overflow: visible; mask-image: none; }
            .pa-unfolded .pd-leaf.pd-desk.pd-open .pd-words .pd-paragraph { font-size: calc(1.143 * ${({ theme }) => theme.size}); line-height: 1.6; }
            .pa-unfolded .pd-leaf.pd-desk.pd-open .pd-word.pd-switch { top: calc(${({ theme }) => theme.space} * 0.667); right: ${({ theme }) => theme.space}; bottom: auto; }
            .pa-unfolded .pd-leaf.pd-desk.pd-open .pd-word.pd-switch::after { transform: translateY(calc(${({ theme }) => theme.space} / 24)) rotate(180deg); }
        `;
    }

    protected override built(): RuleSet {
        return css`
            ${super.built()}
            .pa-built .pd-holds .pd-folder { margin-block-start: 0; }
            .pa-built .pd-holds .pd-section.pa-appendix { margin-block-start: 0; padding-block-start: 0; border-block-start: 0; opacity: 1; }
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
        `;
    }

    protected small(): RuleSet {
        return css`
            @media (max-width: ${({ theme }) => theme.narrow}) {
                .pd-leaves { padding: calc(${({ theme }) => theme.space} * 0.667); }
                .pd-logo { margin-inline-end: calc(${({ theme }) => theme.space} / 2); }
                .pd-me .pd-word.pd-mark { display: block; }
                .pd-leaf.pd-desk.pd-open { grid-template-columns: ${({ theme }) => theme.cover} minmax(0, 1fr); gap: calc(${({ theme }) => theme.space} * 0.667); padding: calc(${({ theme }) => theme.space} * 0.667); }
                .pd-leaf.pd-desk.pd-open .pd-paragraph.pd-jacket { width: ${({ theme }) => theme.cover}; height: calc(${({ theme }) => theme.cover} * 1.5); font-size: calc(0.964 * ${({ theme }) => theme.size}); }
                .pd-leaf.pd-desk.pd-open .pd-words { max-height: none; mask-image: none; }
                .pd-leaf.pd-desk.pd-open .pd-word.pd-switch { display: none; }
                .pd-shelf { grid-template-columns: repeat(3, minmax(0, 1fr)); gap: calc(${({ theme }) => theme.space} * 0.583) calc(${({ theme }) => theme.space} / 2); }
                .pd-volume .pd-paragraph.pd-jacket { width: auto; height: auto; aspect-ratio: 2 / 3; }
            }
        `;
    }
}

export const Bookshelf = $($Bookshelf);
