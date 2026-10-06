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
    size = '0.90625rem';
    leading = '1.6';
    measure = '44rem';
    side = '15.5rem';
    space = '1.5rem';
    sideColumn = '256px';
    bothColumn = '240px';
    twoColumn = '236px';
    cardsColumn = '244px';
    railColumn = '68px';
    barHeight = '50px';
    beat = '320ms';
    narrow = '48rem';
    colour = '#0c1b1f';
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
    serif = "'Cormorant Garamond', Georgia, serif";
    darkBar = '#0c1b1f';
    darkBarInk = '#ffffff';
    darkBarDim = '#a9bcc1';
    darkBarOn = 'rgba(255, 255, 255, 0.11)';
    darkBarLine = '#1d3339';
    darkMark = '#c8f4fb';
    darkMarkInk = '#0c1b1f';
    lightBar = '#ffffff';
    lightBarInk = '#10252c';
    lightBarDim = '#516770';
    lightBarOn = '#e3f5fa';
    lightBarLine = '#dbe7ec';
    lightMark = '#0c1b1f';
    lightMarkInk = '#ffffff';
    heading = '#10252c';
    capital = '#166178';
    lit = '#166178';
    faint = '#8792a2';
    paper = '#ffffff';
    panel = '#f1f7f9';
    rule = '#dbe7ec';
    edge = 'transparent';
    barFill = '#f1f7f9';
    barInk = '#10252c';
    barDim = '#516770';
    barOn = '#e3f5fa';
    barLine = '#dbe7ec';
    accent = '#166178';
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
    initial = "'D'";
    volume = '11.5rem';
    card = '18rem';
    photo = '7rem';
    style: ElementType = selection.div`${this.parts()}`;

    protected parts(): RuleSet[] {
        return [this.page(), this.writing(), this.links(), this.figures(), this.listings(), this.switches(), this.turns(), this.library(), this.head(), this.holds(), this.tones()];
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
            .pd-leaves { font-family: ${({ theme }) => theme.prose}; }
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
                background: ${({ theme }) => theme.colour};
                border-color: ${({ theme }) => theme.colour};
            }
        `;
    }

    protected library(): RuleSet {
        return css`
            .pd-library { padding: calc(${({ theme }) => theme.space} * 0.375) calc(${({ theme }) => theme.space} * 0.75); }
            .pd-library .pd-paragraph, .pd-me .pd-paragraph { margin-block: 0; }
            .pd-me { padding: 0 calc(${({ theme }) => theme.space} * 0.75); }
            .pd-library .pd-filed-under, .pd-me .pd-byline {
                display: flex;
                align-items: center;
                gap: calc(${({ theme }) => theme.space} * 0.4);
                font-size: calc(0.83 * ${({ theme }) => theme.size});
            }
            .pd-library .pd-word, .pd-me .pd-word { font-weight: 500; }
            .pd-library .pd-filed-under .pd-word {
                font-family: ${({ theme }) => theme.serif};
                font-size: calc(1.45 * ${({ theme }) => theme.size});
                font-weight: 600;
                line-height: 1;
            }
            .pd-library .pa-reference, .pd-me .pa-reference { color: inherit; text-decoration: none; }
            .pd-library .pd-filed-under::before, .pd-me .pd-byline::before {
                content: ${({ theme }) => theme.initial};
                display: grid;
                place-items: center;
                width: calc(${({ theme }) => theme.space} * 1.3);
                height: calc(${({ theme }) => theme.space} * 1.3);
                font-size: ${({ theme }) => theme.size};
                font-weight: 600;
            }
            .pd-library .pd-filed-under::before { border-radius: calc(${({ theme }) => theme.space} / 3); }
            .pd-me .pd-byline::before {
                border-radius: 50%;
                background: ${({ theme }) => theme.me};
                color: ${({ theme }) => theme.white};
            }
            .pd-subjects { min-width: 0; }
            .pd-subjects .pd-section {
                display: flex;
                gap: calc(${({ theme }) => theme.space} / 12);
                margin-block: 0;
            }
            .pd-subjects .pd-paragraph {
                padding: calc(${({ theme }) => theme.space} * 0.29) calc(${({ theme }) => theme.space} * 0.42);
                border-radius: calc(${({ theme }) => theme.space} / 3);
                font-size: calc(0.93 * ${({ theme }) => theme.size});
                white-space: nowrap;
            }
            .pd-subjects .pa-reference { color: inherit; text-decoration: none; }
        `;
    }

    protected head(): RuleSet {
        return css`
            .pd-head { padding: calc(${({ theme }) => theme.space} * 0.83) calc(${({ theme }) => theme.space} * 1.17) calc(${({ theme }) => theme.space} * 0.58); }
            .pd-head .pd-chapter { margin-block: 0; }
            .pd-head .pd-title {
                font-family: ${({ theme }) => theme.serif};
                font-size: calc(1.8 * ${({ theme }) => theme.size});
                font-weight: 600;
                line-height: 1.04;
                color: ${({ theme }) => theme.heading};
            }
        `;
    }

    protected holds(): RuleSet {
        return css`
            .pd-holds { padding: calc(${({ theme }) => theme.space} * 0.83) calc(${({ theme }) => theme.space} / 2); }
            .pd-holds .pd-chapter { margin-block: 0; color: ${({ theme }) => theme.barDim}; }
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
                color: ${({ theme }) => theme.barDim};
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
                color: ${({ theme }) => theme.barInk};
            }
            .pd-holds .pd-paragraph.pa-entry::before {
                content: '';
                position: absolute;
                inset-inline-start: calc(${({ theme }) => theme.space} * 0.375);
                width: calc(${({ theme }) => theme.space} * 0.375);
                height: calc(${({ theme }) => theme.space} * 0.375);
                border-radius: 50%;
                background: ${({ theme }) => theme.colour};
            }
            .pd-holds .pd-paragraph.pa-entry.pa-open { background: ${({ theme }) => theme.barOn}; }
            .pd-holds .pa-reference.pa-reference { color: inherit; text-decoration: none; }
        `;
    }

    protected tones(): RuleSet {
        return css`
            .pa-dark .pd-library, .pa-dark .pd-me, .pa-dark .pd-holds {
                background: ${({ theme }) => theme.darkBar};
                color: ${({ theme }) => theme.darkBarInk};
            }
            .pa-dark .pd-library .pd-word, .pa-dark .pd-me .pd-word { color: ${({ theme }) => theme.darkBarInk}; }
            .pa-dark .pd-library .pd-label, .pa-dark .pd-me .pd-label, .pa-dark .pd-holds .pd-chapter, .pa-dark .pd-holds .pd-heading { color: ${({ theme }) => theme.darkBarDim}; }
            .pa-dark .pd-holds { border-inline-end: thin solid ${({ theme }) => theme.darkBarLine}; }
            .pa-dark .pd-holds .pd-paragraph.pa-entry { color: ${({ theme }) => theme.darkBarInk}; }
            .pa-dark .pd-holds .pd-paragraph.pa-entry.pa-open { background: ${({ theme }) => theme.darkBarOn}; }
            .pa-dark .pd-library .pd-filed-under::before {
                background: ${({ theme }) => theme.darkMark};
                color: ${({ theme }) => theme.darkMarkInk};
            }
            .pa-light .pd-library, .pa-light .pd-me, .pa-light .pd-holds {
                background: ${({ theme }) => theme.lightBar};
                color: ${({ theme }) => theme.lightBarInk};
            }
            .pa-light .pd-library { border-block-end: thin solid ${({ theme }) => theme.lightBarLine}; }
            .pa-light .pd-library .pd-word, .pa-light .pd-me .pd-word { color: ${({ theme }) => theme.lightBarInk}; }
            .pa-light .pd-library .pd-label, .pa-light .pd-me .pd-label, .pa-light .pd-holds .pd-chapter, .pa-light .pd-holds .pd-heading { color: ${({ theme }) => theme.lightBarDim}; }
            .pa-light .pd-holds { border-inline-end: thin solid ${({ theme }) => theme.lightBarLine}; }
            .pa-light .pd-holds .pd-paragraph.pa-entry { color: ${({ theme }) => theme.lightBarInk}; }
            .pa-light .pd-holds .pd-paragraph.pa-entry.pa-open { background: ${({ theme }) => theme.lightBarOn}; }
            .pa-light .pd-library .pd-filed-under::before {
                background: ${({ theme }) => theme.lightMark};
                color: ${({ theme }) => theme.lightMarkInk};
            }
            .pa-white-over-black .pd-library, .pa-white-over-black .pd-me {
                background: ${({ theme }) => theme.lightBar};
                color: ${({ theme }) => theme.lightBarInk};
            }
            .pa-white-over-black .pd-library { border-block-end: thin solid ${({ theme }) => theme.lightBarLine}; }
            .pa-white-over-black .pd-library .pd-word, .pa-white-over-black .pd-me .pd-word { color: ${({ theme }) => theme.lightBarInk}; }
            .pa-white-over-black .pd-library .pd-label, .pa-white-over-black .pd-me .pd-label { color: ${({ theme }) => theme.lightBarDim}; }
            .pa-white-over-black .pd-library .pd-filed-under::before {
                background: ${({ theme }) => theme.lightMark};
                color: ${({ theme }) => theme.lightMarkInk};
            }
            .pa-white-over-black .pd-holds {
                background: ${({ theme }) => theme.darkBar};
                color: ${({ theme }) => theme.darkBarInk};
                border-inline-end: thin solid ${({ theme }) => theme.darkBarLine};
            }
            .pa-white-over-black .pd-holds .pd-chapter, .pa-white-over-black .pd-holds .pd-heading { color: ${({ theme }) => theme.darkBarDim}; }
            .pa-white-over-black .pd-holds .pd-paragraph.pa-entry { color: ${({ theme }) => theme.darkBarInk}; }
            .pa-white-over-black .pd-holds .pd-paragraph.pa-entry.pa-open { background: ${({ theme }) => theme.darkBarOn}; }
        `;
    }

    protected turns(): RuleSet {
        return css`
            .pd-paragraph.pd-turn {
                display: flex;
                justify-content: space-between;
                gap: ${({ theme }) => theme.space};
                font-size: calc(0.93 * ${({ theme }) => theme.size});
            }
            .pd-turn .pa-reference { font-weight: 500; text-decoration: none; }
            .pd-turn .pd-count { color: ${({ theme }) => theme.faint}; }
        `;
    }
}

export const LibraryBookTheme = $($LibraryBookTheme);
