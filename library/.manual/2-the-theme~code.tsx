import { ElementType } from 'react';
import { css, RuleSet } from 'styled-components';
import { $, selection } from '@dna-platform/chemistry';
import { $Theme } from '@dna-platform/public';

declare module 'styled-components' {
    export interface DefaultTheme extends $DougsTheme {}
}

export class $DougsTheme extends $Theme {
    font = "'Cormorant Garamond', Georgia, serif";
    size = '1.25rem';
    leading = '1.6';
    measure = '40rem';
    space = '1.5rem';
    ink = '#14262b';
    paper = '#f5f1e8';
    link = '#1c6a71';
    bar = '#0c1b1f';
    bright = '#e8e4df';
    tint = '#d4eef8';
    style: ElementType = selection.div`${this.parts()}`;

    protected parts(): RuleSet[] {
        return [this.page(), this.levels(), this.links(), this.figures(), this.apparatus(), this.spread()];
    }

    protected page(): RuleSet {
        return css`
            font-family: ${({ theme }) => theme.font};
            font-size: ${({ theme }) => theme.size};
            font-weight: 500;
            line-height: ${({ theme }) => theme.leading};
            color: ${({ theme }) => theme.ink};
            background: ${({ theme }) => theme.paper};
            min-height: 100vh;
        `;
    }

    protected levels(): RuleSet {
        return css`
            .pd-chapter { margin-block: calc(2 * ${({ theme }) => theme.space}); }
            .pd-section { margin-block: ${({ theme }) => theme.space}; }
            .pd-paragraph { margin-block: ${({ theme }) => theme.space}; max-width: ${({ theme }) => theme.measure}; }
            .pd-title { font-size: calc(2 * ${({ theme }) => theme.size}); font-weight: 300; letter-spacing: 0.08em; margin-block-end: ${({ theme }) => theme.space}; }
            .pd-heading { font-weight: 600; margin-block: ${({ theme }) => theme.space} 0; }
            .pd-line { white-space: pre-wrap; }
            .pd-word { overflow-wrap: break-word; }
        `;
    }

    protected links(): RuleSet {
        return css`
            .pa-reference { color: ${({ theme }) => theme.link}; text-decoration-color: ${({ theme }) => theme.link}; text-underline-offset: 0.15em; }
            .pa-self-reference { color: inherit; text-decoration: none; }
            .pa-content { color: ${({ theme }) => theme.link}; }
        `;
    }

    protected figures(): RuleSet {
        return css`
            .pd-image img { display: block; max-width: 100%; height: auto; }
            .pd-code {
                font-family: ui-monospace, monospace;
                font-size: calc(0.6 * ${({ theme }) => theme.size});
                font-weight: 400;
                line-height: 1.5;
                white-space: pre;
                overflow-x: auto;
                padding: ${({ theme }) => theme.space};
                background: color-mix(in srgb, ${({ theme }) => theme.ink} 6%, ${({ theme }) => theme.paper});
            }
            .hljs-keyword, .hljs-built_in, .hljs-type, .hljs-literal, .hljs-tag, .hljs-name, .hljs-title { color: ${({ theme }) => theme.link}; }
            .hljs-comment, .hljs-meta { color: color-mix(in srgb, ${({ theme }) => theme.ink} 55%, ${({ theme }) => theme.paper}); font-style: italic; }
        `;
    }

    protected apparatus(): RuleSet {
        return css`
            .pd-library-title .pa-reference, .pd-byline .pa-reference, .pd-filed .pa-reference { text-decoration: none; }
            .pd-byline, .pd-filed { font-size: calc(0.8 * ${({ theme }) => theme.size}); letter-spacing: 0.04em; }
            .pd-appended { margin-inline-start: 0.6em; font-family: ui-monospace, monospace; font-size: calc(0.5 * ${({ theme }) => theme.size}); opacity: 0.5; }
            .pd-switch { max-width: none; }
            .pd-views { display: inline-flex; gap: calc(${({ theme }) => theme.space} / 2); margin-inline-start: ${({ theme }) => theme.space}; }
            .pd-view { font: inherit; font-size: calc(0.7 * ${({ theme }) => theme.size}); letter-spacing: 0.04em; color: inherit; background: none; border: 0; border-block-end: 1px solid transparent; padding: 0; cursor: pointer; opacity: 0.6; }
            .pd-view.pa-shown { opacity: 1; border-block-end-color: ${({ theme }) => theme.link}; }
            .pd-word.pa-shelfmark .pa-content { position: absolute; width: 1px; height: 1px; overflow: hidden; clip-path: inset(50%); white-space: nowrap; }
            .pd-word.pa-shelfmark::after {
                content: '';
                display: inline-block;
                width: calc(0.45 * ${({ theme }) => theme.size});
                height: calc(0.45 * ${({ theme }) => theme.size});
                margin-inline-start: calc(0.5 * ${({ theme }) => theme.space});
                border: 1px solid currentColor;
            }
            .pd-dateline {
                display: block;
                margin-block-start: ${({ theme }) => theme.space};
                font-size: calc(0.8 * ${({ theme }) => theme.size});
                font-style: italic;
                color: color-mix(in srgb, ${({ theme }) => theme.ink} 64%, ${({ theme }) => theme.paper});
            }
        `;
    }

    protected spread(): RuleSet {
        return css`
            .pa-listing .pd-paragraph { max-width: none; margin-block: 0; }
            .pa-listing .pd-code { background: ${({ theme }) => theme.bar}; color: ${({ theme }) => theme.bright}; }
            .pa-listing .hljs-keyword, .pa-listing .hljs-built_in, .pa-listing .hljs-type, .pa-listing .hljs-literal,
            .pa-listing .hljs-tag, .pa-listing .hljs-name, .pa-listing .hljs-title { color: ${({ theme }) => theme.tint}; }
            .pa-listing .hljs-comment, .pa-listing .hljs-meta { color: color-mix(in srgb, ${({ theme }) => theme.bright} 55%, ${({ theme }) => theme.bar}); }

            @media (min-width: 64rem) {
                .pd-chapter.pa-append.pa-open { display: grid; column-gap: calc(2 * ${({ theme }) => theme.space}); align-content: start; }
                .pa-append .pd-section.pa-listing { grid-row: 1 / span 99; position: sticky; top: 0; align-self: start; margin-block: 0; }
                .pa-append .pa-listing .pd-code { max-height: calc(100vh - 8 * ${({ theme }) => theme.space}); }
                .pa-words-forward .pd-chapter.pa-append.pa-open { grid-template-columns: minmax(0, 1fr) minmax(0, 14rem); }
                .pa-words-forward .pa-append .pd-section.pa-listing { grid-column: 2; }
                .pa-words-forward .pa-append .pa-listing .pd-code { overflow: hidden; }
                .pa-code-forward .pd-chapter.pa-append.pa-open { grid-template-columns: minmax(0, 1.6fr) minmax(0, 1fr); }
                .pa-code-forward .pa-append .pd-section.pa-listing { grid-column: 1; }
                .pa-code-forward .pa-append .pa-listing .pd-code { overflow: auto; }
            }
        `;
    }
}

export const DougsTheme = $($DougsTheme);
