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
    style: ElementType = selection.div`${this.parts()}`;

    protected parts(): RuleSet[] {
        return [this.page(), this.levels(), this.links(), this.apparatus()];
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
            box-sizing: border-box;
            padding: ${({ theme }) => theme.space};
            .pd-book { max-width: ${({ theme }) => theme.measure}; margin-inline: auto; }
        `;
    }

    protected levels(): RuleSet {
        return css`
            .pd-chapter { margin-block: calc(2 * ${({ theme }) => theme.space}); }
            .pd-section { margin-block: ${({ theme }) => theme.space}; }
            .pd-paragraph { margin-block: ${({ theme }) => theme.space}; }
            .pd-title { font-size: calc(2 * ${({ theme }) => theme.size}); font-weight: 300; letter-spacing: 0.08em; margin-block-end: ${({ theme }) => theme.space}; }
            .pd-heading { font-weight: 600; margin-block: ${({ theme }) => theme.space} 0; }
            .pd-line { white-space: pre-wrap; }
            .pd-word { overflow-wrap: break-word; }
            .pd-image img { display: block; max-width: 100%; height: auto; }
            .pd-code { font-family: ui-monospace, monospace; font-size: calc(0.75 * ${({ theme }) => theme.size}); line-height: 1.5; white-space: pre; overflow-x: auto; padding: ${({ theme }) => theme.space}; background: color-mix(in srgb, ${({ theme }) => theme.ink} 6%, ${({ theme }) => theme.paper}); }
        `;
    }

    protected links(): RuleSet {
        return css`
            .pa-reference { color: ${({ theme }) => theme.link}; text-decoration-color: ${({ theme }) => theme.link}; text-underline-offset: 0.15em; }
            .pa-self-reference { color: inherit; text-decoration: none; }
            .pa-content { color: ${({ theme }) => theme.link}; }
        `;
    }

    protected apparatus(): RuleSet {
        return css`
            .pd-paragraph.pd-byline { margin-block: 0; text-align: end; font-size: calc(0.8 * ${({ theme }) => theme.size}); letter-spacing: 0.08em; }
            .pd-byline .pa-reference { text-decoration: none; }
            .pd-dateline { display: block; margin-block-start: ${({ theme }) => theme.space}; text-align: end; font-size: calc(0.8 * ${({ theme }) => theme.size}); font-style: italic; color: color-mix(in srgb, ${({ theme }) => theme.ink} 64%, ${({ theme }) => theme.paper}); }
        `;
    }
}

export const DougsTheme = $($DougsTheme);
