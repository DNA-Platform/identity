import { ElementType } from 'react';
import { css, RuleSet } from 'styled-components';
import { $, selection } from '@dna-platform/chemistry';
import { $Theme } from '@dna-platform/public';

declare module 'styled-components' {
    export interface DefaultTheme extends $LibraryBookTheme {}
}

export class $LibraryBookTheme extends $Theme {
    font = "'Inter', system-ui, sans-serif";
    prose = "'Inter', system-ui, sans-serif";
    mono = "'JetBrains Mono', ui-monospace, monospace";
    size = '0.875rem';
    leading = '1.6';
    measure = '44rem';
    spreadColumn = '15.5rem';
    space = '1.5rem';
    holdsColumn = '240px';
    barHeight = '50px';
    beat = '320ms';
    narrow = '48rem';
    colour = '#4e9eb9';
    accent = '#166178';
    bar = '#0c1b1f';
    barInk = '#ffffff';
    barDim = '#a9bcc1';
    barOn = 'rgba(255, 255, 255, 0.11)';
    barLine = '#1d3339';
    mark = '#c8f4fb';
    side = '#e3f5fa';
    sideInk = '#10252c';
    sideDim = '#516770';
    sideOn = '#ffffff';
    sideLine = '#cbe6ee';
    night = '#0c1b1f';
    deep = '#14323c';
    blue = '#166178';
    sea = '#4e9eb9';
    sky = '#8fc8dc';
    opal = '#c8f4fb';
    pale = '#e3f5fa';
    mist = '#f1f7f9';
    white = '#ffffff';
    ink = '#10252c';
    soft = '#516770';
    line = '#dbe7ec';
    me = '#e8590c';
    wash = 'linear-gradient(105deg, #e2f6fb 0%, #ecf0fd 52%, #fae9f4 100%)';
    serif = "'Source Serif 4', Georgia, serif";
    between = "'Source Sans 3', 'Inter', system-ui, sans-serif";
    bookPaper = '#fbf9f3';
    bookInk = '#29251d';
    heading = '#10252c';
    capital = '#166178';
    lit = '#166178';
    faint = '#8792a2';
    paper = '#ffffff';
    panel = '#f1f7f9';
    rule = '#dbe7ec';
    edge = 'transparent';
    tint = '#e3f5fa';
    dusk = '#14323c';
    glow = '#cfe6e3';
    dim = '#4f7672';
    keyword = '#8ad7ff';
    string = '#ffd48a';
    type = '#9be3d6';
    comment = '#5f8a86';
    haze = '#a9bcc1';
    glass = 'rgba(255, 255, 255, 0.62)';
    binding = 'linear-gradient(160deg, #16303a, #0c1b1f)';
    spine = 'inset 5px 0 0 rgba(0, 0, 0, 0.14), inset 6px 0 0 rgba(255, 255, 255, 0.12), 0 10px 20px -10px rgba(0, 0, 0, 0.45)';
    shadow = '0 0.75rem 1.4rem -0.9rem rgba(12, 27, 31, 0.55)';
    volume = '11.5rem';
    cover = '8.25rem';
    card = '18rem';
    photo = '7rem';
    radius = '0.375rem';
    barTint = '#ffffff';
    skyInk = '#166178';
    lift = 'inset 5px 0 0 rgba(0, 0, 0, 0.14), inset 6px 0 0 rgba(255, 255, 255, 0.12), 0 14px 24px -12px rgba(0, 0, 0, 0.5)';
    openSpine = 'inset 7px 0 0 rgba(0, 0, 0, 0.14), inset 8px 0 0 rgba(255, 255, 255, 0.12), 0 12px 22px -14px rgba(0, 0, 0, 0.5)';
    style: ElementType = selection.div`${this.parts()}`;

    protected parts(): RuleSet[] {
        return [this.page(), this.writing(), this.links(), this.figures(), this.listings(), this.switches(), this.turns(), this.illustrations(), this.marks(), this.library(), this.head(), this.holds(), this.built(), this.tones()];
    }

    protected page(): RuleSet {
        return css`
            font-family: ${({ theme }) => theme.font};
            font-size: ${({ theme }) => theme.size};
            line-height: ${({ theme }) => theme.leading};
            color: ${({ theme }) => theme.ink};
            background: ${({ theme }) => theme.paper};
            min-height: 100vh;
        `;
    }

    protected writing(): RuleSet {
        return css`
            .pd-pages { font-family: ${({ theme }) => theme.prose}; }
            .pd-chapter, .pd-section, .pd-paragraph { margin-block: ${({ theme }) => theme.space}; }
            .pd-chapter { max-width: ${({ theme }) => theme.measure}; }
        `;
    }

    protected links(): RuleSet {
        return css`
            .pa-reference { color: ${({ theme }) => theme.accent}; }
            .pa-reference.pa-self-reference { color: inherit; text-decoration: none; }
        `;
    }

    protected figures(): RuleSet {
        return css`
            .pd-image img { display: block; max-width: 100%; height: auto; }
            .pd-code { font-family: ${({ theme }) => theme.mono}; overflow-x: auto; }
        `;
    }

    protected listings(): RuleSet {
        return css`
            .pd-files {
                background: ${({ theme }) => theme.night};
                color: ${({ theme }) => theme.glow};
                scrollbar-width: thin;
                scrollbar-color: ${({ theme }) => theme.dim} transparent;
            }
            .pd-paragraph.pd-listing {
                margin-block: 0;
                padding: calc(${({ theme }) => theme.space} / 2) calc(${({ theme }) => theme.space} * 0.6);
            }
            .pd-listing .pd-word {
                display: inline-block;
                padding: calc(${({ theme }) => theme.space} * 0.3) calc(${({ theme }) => theme.space} / 2);
                border-start-start-radius: calc(${({ theme }) => theme.space} * 0.3);
                border-start-end-radius: calc(${({ theme }) => theme.space} * 0.3);
                background: ${({ theme }) => theme.dusk};
                color: ${({ theme }) => theme.paper};
                font-size: calc(0.86 * ${({ theme }) => theme.size});
            }
            .pd-listing .pd-code {
                margin: 0;
                padding-block: calc(${({ theme }) => theme.space} * 0.66);
                border-radius: calc(${({ theme }) => theme.space} * 0.4);
                border-start-start-radius: 0;
                background: ${({ theme }) => theme.dusk};
                font-size: calc(0.84 * ${({ theme }) => theme.size});
                line-height: 1.75;
                scrollbar-width: thin;
                scrollbar-color: ${({ theme }) => theme.dim} transparent;
            }
            .pd-code-line { padding-inline-end: calc(${({ theme }) => theme.space} * 0.75); }
            .pd-code-line::before {
                content: attr(data-line);
                display: inline-block;
                width: calc(${({ theme }) => theme.space} * 1.17);
                padding-inline-end: calc(${({ theme }) => theme.space} * 0.58);
                text-align: end;
                color: ${({ theme }) => theme.dim};
                user-select: none;
            }
            .hljs-keyword, .hljs-built_in, .hljs-literal { color: ${({ theme }) => theme.keyword}; }
            .hljs-string, .hljs-regexp, .hljs-number { color: ${({ theme }) => theme.string}; }
            .hljs-title, .hljs-type, .hljs-tag, .hljs-name, .hljs-attr { color: ${({ theme }) => theme.type}; }
            .hljs-comment, .hljs-meta { color: ${({ theme }) => theme.comment}; }
        `;
    }

    protected switches(): RuleSet {
        return css`
            .pd-switch {
                font: inherit;
                color: ${({ theme }) => theme.soft};
                background: ${({ theme }) => theme.paper};
                border: thin solid ${({ theme }) => theme.line};
                border-radius: calc(${({ theme }) => theme.space} / 4);
                padding: calc(${({ theme }) => theme.space} / 8) calc(${({ theme }) => theme.space} / 2);
                cursor: pointer;
            }
            .pd-word.pd-switch[aria-pressed='true'] {
                color: ${({ theme }) => theme.white};
                background: ${({ theme }) => theme.accent};
                border-color: ${({ theme }) => theme.accent};
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

    protected library(): RuleSet {
        return css`
            .pd-book .pd-library { box-sizing: border-box; height: ${({ theme }) => theme.barHeight}; padding: 0 calc(${({ theme }) => theme.space} * 0.75); background: ${({ theme }) => theme.barTint}; border-block-end: thin solid ${({ theme }) => theme.line}; }
            .pd-library .pd-paragraph, .pd-me .pd-paragraph { margin-block: 0; }
            .pd-library .pa-reference, .pd-me .pa-reference { color: inherit; text-decoration: none; }
            .pd-paragraph.pd-logo { display: flex; align-items: center; height: ${({ theme }) => theme.barHeight}; }
            .pd-logo .pa-reference, .pd-me .pd-mark .pa-reference { display: block; }
            .pd-logo .pd-filed, .pd-logo .pd-own { display: block; flex: none; overflow: hidden; transition: width ${({ theme }) => theme.beat} ease, margin ${({ theme }) => theme.beat} ease, opacity ${({ theme }) => theme.beat} ease; }
            .pd-logo .pd-own { width: calc(2 * ${({ theme }) => theme.size}); }
            .pd-logo .pd-scheme + .pd-scheme .pd-own { margin-inline-start: calc(${({ theme }) => theme.space} / 6); }
            .pd-logo.pa-unfolded .pd-own { width: 0; margin-inline-start: 0; opacity: 0; }
            .pd-names { display: grid; margin-inline-start: calc(${({ theme }) => theme.space} * 0.375); }
            .pd-names .pd-scheme { grid-area: 1 / 1; }
            .pd-names .pd-name {
                display: block;
                font-family: ${({ theme }) => theme.between};
                font-size: calc(1.357 * ${({ theme }) => theme.size});
                font-weight: 600;
                line-height: 1;
                letter-spacing: -0.01em;
                white-space: nowrap;
                color: var(--band-ink, ${({ theme }) => theme.ink});
                transform: translateY(1px);
                transition: opacity ${({ theme }) => theme.beat} ease, transform ${({ theme }) => theme.beat} ease;
            }
            .pd-names .pd-name.pd-under { font-family: ${({ theme }) => theme.serif}; font-size: calc(1.286 * ${({ theme }) => theme.size}); font-weight: 700; letter-spacing: -0.015em; opacity: 0; transform: translateY(7px); pointer-events: none; }
            .pd-logo.pa-unfolded .pd-names .pd-name { opacity: 0; transform: translateY(-5px); pointer-events: none; }
            .pd-logo.pa-unfolded .pd-names .pd-name.pd-under { opacity: 1; transform: translateY(1px); pointer-events: auto; }
            .pd-me { gap: calc(${({ theme }) => theme.space} * 0.375); padding: 0 calc(${({ theme }) => theme.space} * 0.75); }
            .pd-me .pd-byline { display: flex; align-items: center; gap: calc(${({ theme }) => theme.space} * 0.375); font-size: calc(0.93 * ${({ theme }) => theme.size}); color: ${({ theme }) => theme.soft}; }
            .pd-me .pd-word.pa-reference { color: ${({ theme }) => theme.ink}; font-weight: 500; }
        `;
    }

    protected head(): RuleSet {
        return css`
            .pd-head { padding: calc(${({ theme }) => theme.space} * 0.83) calc(${({ theme }) => theme.space} * 1.17) calc(${({ theme }) => theme.space} * 0.58); }
            .pd-head .pd-chapter { margin-block: 0; }
            .pd-head .pd-filed-under {
                display: flex;
                align-items: center;
                gap: calc(${({ theme }) => theme.space} * 0.3);
                flex-basis: 100%;
                margin-block: 0;
                font-size: calc(0.9 * ${({ theme }) => theme.size});
                color: ${({ theme }) => theme.soft};
            }
            .pd-head .pd-filed-under .pa-label {
                font-size: calc(0.68 * ${({ theme }) => theme.size});
                font-weight: 600;
                letter-spacing: 0.12em;
                text-transform: uppercase;
            }
            .pd-head .pd-filed-under .pd-word + .pd-word { font-weight: 500; }
            .pd-head .pd-filed-under .pa-reference { color: ${({ theme }) => theme.accent}; text-decoration: none; }
            .pd-head .pd-title {
                font-family: ${({ theme }) => theme.serif};
                font-size: calc(2.57 * ${({ theme }) => theme.size});
                font-weight: 600;
                line-height: 1.04;
                color: ${({ theme }) => theme.heading};
            }
            .pd-head .pa-illustration { display: none; }
        `;
    }

    protected holds(): RuleSet {
        return css`
            .pd-holds { padding: calc(${({ theme }) => theme.space} * 0.83) calc(${({ theme }) => theme.space} / 2); }
            .pd-holds .pd-chapter { margin-block: 0; color: ${({ theme }) => theme.soft}; }
            .pd-holds .pd-section { margin-block: ${({ theme }) => theme.space} 0; }
            .pd-holds .pd-heading {
                display: flex;
                justify-content: space-between;
                margin-block: 0 calc(${({ theme }) => theme.space} / 3);
                padding-inline: calc(${({ theme }) => theme.space} * 0.375);
                font-size: calc(0.76 * ${({ theme }) => theme.size});
                font-weight: 600;
                letter-spacing: 0.12em;
                text-transform: uppercase;
                color: ${({ theme }) => theme.soft};
            }
            .pd-holds .pd-paragraph.pa-entry {
                position: relative;
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: calc(${({ theme }) => theme.space} * 0.375);
                margin-block: 0;
                padding: calc(${({ theme }) => theme.space} / 4) calc(${({ theme }) => theme.space} * 0.375) calc(${({ theme }) => theme.space} / 4) calc(${({ theme }) => theme.space} * 1.1);
                border-radius: calc(${({ theme }) => theme.space} / 3);
                font-weight: 500;
                color: ${({ theme }) => theme.ink};
            }
            .pd-holds .pd-paragraph.pa-entry::before {
                content: '';
                position: absolute;
                inset-inline-start: calc(${({ theme }) => theme.space} * 0.375);
                width: calc(${({ theme }) => theme.space} * 0.375);
                height: calc(${({ theme }) => theme.space} * 0.375);
                border-radius: 50%;
                background: var(--colour, ${({ theme }) => theme.colour});
            }
            .pd-holds .pd-paragraph.pa-entry.pa-open { background: ${({ theme }) => theme.sideOn}; color: ${({ theme }) => theme.accent}; }
            .pd-holds .pa-reference.pa-reference { color: inherit; text-decoration: none; }
            .pd-holds .pd-section.pa-appendix { opacity: 0.72; }
            .pd-holds .pd-section.pa-appendix .pd-heading { font-size: calc(0.66 * ${({ theme }) => theme.size}); }
            .pd-holds .pd-section.pa-appendix .pd-paragraph.pa-entry { font-size: calc(0.86 * ${({ theme }) => theme.size}); }
            @media not all and (max-width: ${({ theme }) => theme.narrow}) {
                .pd-holds > * { display: flex; flex-direction: column; min-height: 100%; }
                .pd-holds .pd-chapter.pa-table-of-contents { flex: 1; display: flex; flex-direction: column; }
                .pd-holds .pd-section.pa-appendix { margin-block-start: auto; }
            }
            @media (max-width: ${({ theme }) => theme.narrow}) {
                .pd-holds { padding: calc(${({ theme }) => theme.space} * 0.42) calc(${({ theme }) => theme.space} * 0.67) calc(${({ theme }) => theme.space} / 2); }
                .pd-holds .pd-chapter, .pd-holds .pd-section {
                    display: flex;
                    align-items: center;
                    gap: calc(${({ theme }) => theme.space} / 4);
                    margin-block: 0;
                }
                .pd-holds .pd-title { display: none; }
                .pd-holds .pd-heading { flex: none; margin: 0 calc(${({ theme }) => theme.space} / 4) 0 calc(${({ theme }) => theme.space} / 2); padding: 0; }
                .pd-holds .pd-paragraph.pa-entry {
                    flex: none;
                    padding: calc(${({ theme }) => theme.space} * 0.21) calc(${({ theme }) => theme.space} * 0.46) calc(${({ theme }) => theme.space} * 0.21) calc(${({ theme }) => theme.space} * 0.375);
                    border: thin solid currentColor;
                    border-radius: calc(${({ theme }) => theme.space} * 4);
                    white-space: nowrap;
                }
                .pd-holds .pd-paragraph.pa-entry::before { display: none; }
            }
        `;
    }

    protected built(): RuleSet {
        return css`
            .pd-holds .pd-paragraph.pd-root { display: none; }
            .pa-built .pd-holds .pd-section:not(.pa-folder) { display: none; }
            .pa-built .pd-holds .pd-folder { order: -1; }
            .pa-built .pd-holds .pd-paragraph.pd-root {
                display: flex;
                order: -2;
                align-items: center;
                margin: 0 0 calc(${({ theme }) => theme.space} / 3);
                padding: 0 calc(${({ theme }) => theme.space} * 0.5833) 0 calc(${({ theme }) => theme.space} * 0.4167);
                font-size: calc(0.9286 * ${({ theme }) => theme.size});
                font-weight: 500;
                line-height: calc(1.9286 * ${({ theme }) => theme.size});
                color: ${({ theme }) => theme.sideInk};
            }
            .pa-built .pd-holds .pd-root .pd-word { display: inline-flex; align-items: center; gap: calc(${({ theme }) => theme.space} * 0.2917); }
            .pa-built .pd-holds .pd-root .pd-drawing { width: calc(0.7143 * ${({ theme }) => theme.size}); height: calc(0.7143 * ${({ theme }) => theme.size}); color: ${({ theme }) => theme.faint}; transform: rotate(180deg); }
            .pa-built .pd-holds .pd-root svg { display: block; width: 100%; height: 100%; }
            .pa-built .pd-holds .pd-root .pa-reference { color: inherit; text-decoration: none; }
            .pa-built .pd-holds .pd-root:hover { color: ${({ theme }) => theme.ink}; }
        `;
    }

    protected tones(): RuleSet {
        return css`
            .pa-dark .pd-library, .pa-dark .pd-me {
                background: ${({ theme }) => theme.bar};
                color: ${({ theme }) => theme.barInk};
            }
            .pa-dark .pd-library .pd-word, .pa-dark .pd-me .pd-word { color: ${({ theme }) => theme.barInk}; }
            .pa-dark .pd-library .pa-label, .pa-dark .pd-me .pa-label { color: ${({ theme }) => theme.barDim}; }
            .pa-dark .pd-holds, .pa-light .pd-holds {
                background: ${({ theme }) => theme.side};
                color: ${({ theme }) => theme.sideInk};
                border-inline-end: thin solid ${({ theme }) => theme.sideLine};
            }
            .pa-dark .pd-holds .pd-chapter, .pa-dark .pd-holds .pd-heading, .pa-light .pd-holds .pd-chapter, .pa-light .pd-holds .pd-heading { color: ${({ theme }) => theme.sideDim}; }
            .pa-light .pd-library, .pa-light .pd-me, .pa-white-over-black .pd-library, .pa-white-over-black .pd-me {
                background: ${({ theme }) => theme.paper};
                color: ${({ theme }) => theme.ink};
            }
            .pa-light .pd-library, .pa-white-over-black .pd-library { border-block-end: thin solid ${({ theme }) => theme.line}; }
            .pa-light .pd-library .pd-word, .pa-light .pd-me .pd-word, .pa-white-over-black .pd-library .pd-word, .pa-white-over-black .pd-me .pd-word { color: ${({ theme }) => theme.ink}; }
            .pa-light .pd-library .pa-label, .pa-light .pd-me .pa-label, .pa-white-over-black .pd-library .pa-label, .pa-white-over-black .pd-me .pa-label { color: ${({ theme }) => theme.soft}; }
            .pa-white-over-black .pd-holds {
                background: ${({ theme }) => theme.bar};
                color: ${({ theme }) => theme.barInk};
                border-inline-end: thin solid ${({ theme }) => theme.barLine};
            }
            .pa-white-over-black .pd-holds .pd-chapter, .pa-white-over-black .pd-holds .pd-heading { color: ${({ theme }) => theme.barDim}; }
            .pa-white-over-black .pd-holds .pd-paragraph.pa-entry { color: ${({ theme }) => theme.barInk}; }
            .pa-white-over-black .pd-holds .pd-paragraph.pa-entry.pa-open { background: ${({ theme }) => theme.barOn}; color: ${({ theme }) => theme.barInk}; }
        `;
    }

    protected turns(): RuleSet {
        return css`
            .pd-paragraph.pd-turn {
                display: flex;
                justify-content: space-between;
                gap: ${({ theme }) => theme.space};
                font-size: calc(0.786 * ${({ theme }) => theme.size});
            }
            .pd-turn .pa-reference { font-weight: 500; text-decoration: none; }
            .pd-turn .pd-count { color: ${({ theme }) => theme.faint}; }
        `;
    }
}

export const LibraryBookTheme = $($LibraryBookTheme);
