import { ElementType } from 'react';
import { css, RuleSet } from 'styled-components';
import { $, selection } from '@dna-platform/chemistry';
import { $Theme } from '@dna-platform/public';

declare module 'styled-components' {
    export interface DefaultTheme extends $DougsTheme {}
}

export class $DougsTheme extends $Theme {
    font = "'Inter', system-ui, sans-serif";
    mono = "'JetBrains Mono', ui-monospace, monospace";
    size = '0.90625rem';
    leading = '1.6';
    measure = '44rem';
    space = '1.5rem';
    side = '15.5rem';
    narrow = '48rem';
    ink = '#1a1f36';
    heading = '#1a1f36';
    capital = '#0a7a70';
    lit = '#0a7a70';
    soft = '#4f566b';
    faint = '#8792a2';
    paper = '#ffffff';
    panel = '#f7f8fa';
    line = '#e6e8ee';
    rule = '#e6e8ee';
    edge = 'transparent';
    barFill = '#f7f8fa';
    barInk = '#1a1f36';
    barDim = '#8792a2';
    barOn = '#e3f4f1';
    barLine = '#e6e8ee';
    accent = '#0a7a70';
    tint = '#e3f4f1';
    night = '#0f2a33';
    dusk = '#17363f';
    glow = '#cfe6e3';
    dim = '#4f7672';
    keyword = '#8ad7ff';
    string = '#ffd48a';
    type = '#9be3d6';
    comment = '#5f8a86';
    serif = "'Cormorant Garamond', Georgia, serif";
    haze = '#a9bcc1';
    sky = '#8fc8dc';
    sea = '#4e9eb9';
    opal = '#c8f4fb';
    me = '#e8590c';
    glass = 'rgba(255, 255, 255, 0.62)';
    wash = 'linear-gradient(105deg, #e2f6fb 0%, #ecf0fd 52%, #fae9f4 100%)';
    binding = 'linear-gradient(160deg, #16303a, #0c1b1f)';
    shadow = '0 0.75rem 1.4rem -0.9rem rgba(12, 27, 31, 0.55)';
    initial = "'D'";
    volume = '11.5rem';
    card = '18rem';
    photo = '7rem';
    style: ElementType = selection.div`${this.parts()}`;

    protected parts(): RuleSet[] {
        return [this.page(), this.writing(), this.links(), this.figures(), this.listings(), this.switches(), this.turns()];
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
            .pd-switch[aria-pressed='true'] {
                color: ${({ theme }) => theme.accent};
                background: ${({ theme }) => theme.tint};
                border-color: ${({ theme }) => theme.tint};
            }
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

export const DougsTheme = $($DougsTheme);
