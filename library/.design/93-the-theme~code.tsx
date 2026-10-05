import { css, RuleSet } from 'styled-components';
import { $ } from '@dna-platform/chemistry';
import { $DougsTheme } from '../.manual/.book';

declare module 'styled-components' {
    export interface DefaultTheme extends $DesignTheme {}
}

export class $DesignTheme extends $DougsTheme {
    size = '1.2rem';
    ink = '#10252c';
    paper = '#f6fbfd';
    link = '#166178';
    accent = '#0c1b1f';
    bright = '#e8e4df';
    opal = '#c8f4fb';
    tint = '#c8f4fb';
    mine = '#e8590c';
    quiet = `color-mix(in srgb, ${this.ink} 64%, ${this.paper})`;
    hairline = `color-mix(in srgb, ${this.ink} 14%, ${this.paper})`;

    protected override parts(): RuleSet[] {
        return [...super.parts(), this.concepts()];
    }

    protected concepts(): RuleSet {
        return css`
            .pd-canonical.pd-chapter .pd-section:is(:has(.pa-concepts), :has(.pa-asked), :has(.pa-chosen)) .pd-heading { margin: 2.4rem 0 .4rem; font-size: 1.7rem; font-weight: 600; letter-spacing: 0; text-transform: none; color: ${({ theme }) => theme.ink}; }
            .pd-canonical.pd-chapter .pd-section:is(:has(.pa-concepts), :has(.pa-asked), :has(.pa-chosen)) .pd-heading .pa-reference { color: inherit; text-decoration: none; }
            .pd-canonical.pd-chapter .pd-paragraph:is(.pa-asked, .pa-chosen) { max-width: 46rem; font-size: 1.3rem; line-height: 1.45; }
            .pd-canonical.pd-chapter .pd-paragraph.pa-story { max-width: 46rem; margin-block-start: 2.2rem; padding-inline-start: .9rem; border-inline-start: 3px solid ${({ theme }) => theme.link}; }
            .pd-paragraph.pa-story::before { content: 'how it came to be'; display: block; font: 600 .6rem/1.9 system-ui, sans-serif; letter-spacing: .12em; text-transform: uppercase; color: ${({ theme }) => theme.link}; }
            .pd-canonical.pd-chapter .pd-paragraph.pa-story + .pd-paragraph { max-width: 46rem; padding-inline-start: calc(.9rem + 3px); color: ${({ theme }) => theme.quiet}; }
            .pd-canonical.pd-chapter .pd-paragraph.pa-answered { max-width: 46rem; margin-block-start: 2.2rem; padding-inline-start: .9rem; border-inline-start: 3px solid ${({ theme }) => theme.mine}; }
            .pd-paragraph.pa-answered::before { content: 'what I said'; display: block; font: 600 .6rem/1.9 system-ui, sans-serif; letter-spacing: .12em; text-transform: uppercase; color: ${({ theme }) => theme.mine}; }
            .pd-paragraph.pa-concepts, .pd-paragraph.pa-wide { max-width: none; }
            .pd-paragraph.pa-concepts { display: grid; grid-template-columns: repeat(auto-fill, minmax(15.5rem, 1fr)); gap: 2.8rem 1.6rem; margin-block: 1.6rem 1rem; }
            .pd-concept { display: block; }
            .pd-concept-opens { display: block; position: relative; width: 100%; padding: 0; border: 0; background: none; cursor: zoom-in; }
            .pd-concept-number { position: absolute; left: -.6rem; top: -.6rem; display: grid; place-items: center; min-width: 2.1rem; height: 2.1rem; padding: 0 .45rem; border-radius: 99px; background: ${({ theme }) => theme.accent}; color: #fff; font: 600 .86rem/1 system-ui, sans-serif; box-shadow: 0 0 0 2px ${({ theme }) => theme.paper}; }
            .pd-concept-state { display: inline-block; margin-inline-start: .5rem; padding: 0 .5rem; border-radius: 99px; background: ${({ theme }) => theme.opal}; color: ${({ theme }) => theme.accent}; font: 600 .56rem/1.9 system-ui, sans-serif; letter-spacing: .12em; text-transform: uppercase; vertical-align: .2em; }
            .pd-concept-said { display: block; margin-block-start: .55rem; padding-inline-start: .65rem; border-inline-start: 2px solid ${({ theme }) => theme.mine}; font-size: .98rem; line-height: 1.35; }
            .pd-concept-said::before { content: 'what I said'; display: block; font: 600 .56rem/1.8 system-ui, sans-serif; letter-spacing: .12em; text-transform: uppercase; color: ${({ theme }) => theme.mine}; }
            .pd-concept-desk { display: block; width: 100%; aspect-ratio: 16 / 10; object-fit: cover; object-position: top left; border-radius: 4px; box-shadow: 0 0 0 1px ${({ theme }) => theme.hairline}, 0 18px 40px -26px rgba(12, 27, 31, .55); transition: box-shadow .35s ease, transform .35s ease; }
            .pd-concept-phone { position: absolute; right: 5%; bottom: -9%; width: 19%; aspect-ratio: 390 / 844; object-fit: cover; object-position: top; border-radius: 9px; border: 3px solid ${({ theme }) => theme.accent}; background: ${({ theme }) => theme.accent}; box-shadow: 0 14px 26px -14px rgba(12, 27, 31, .7); transition: transform .35s ease; }
            .pd-concept-opens:hover .pd-concept-desk { box-shadow: 0 0 0 1px ${({ theme }) => theme.link}, 0 22px 44px -24px rgba(12, 27, 31, .6); transform: translateY(-2px); }
            .pd-concept-opens:hover .pd-concept-phone { transform: translateY(-4px); }
            .pd-concept-name { display: inline-block; margin-block-start: 1.5rem; font-size: 1.25rem; font-weight: 600; line-height: 1.2; }
            .pd-concept-says { display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 3; overflow: hidden; margin-block-start: .3rem; font-size: .98rem; line-height: 1.38; font-style: italic; font-weight: 400; color: ${({ theme }) => theme.quiet}; }

            .pd-viewer { display: none; }
            .pd-viewer:fullscreen { --scale: 1; display: grid; grid-template: auto minmax(0, 1fr) / minmax(0, 1fr); width: 100vw; height: 100vh; margin: 0; background: #d5e3e9; color: ${({ theme }) => theme.ink}; }
            .pd-viewer-number { display: grid; place-items: center; flex: none; align-self: center; min-width: 2rem; height: 2rem; padding: 0 .45rem; border-radius: 99px; background: ${({ theme }) => theme.opal}; color: ${({ theme }) => theme.accent}; font: 600 .86rem/1 system-ui, sans-serif; }
            .pd-viewer-bar { display: flex; align-items: center; gap: 2rem; padding: .7rem 1.4rem; background: ${({ theme }) => theme.accent}; color: ${({ theme }) => theme.bright}; }
            .pd-viewer-what { display: flex; align-items: baseline; gap: 1rem; flex: 1 1 0; min-width: 0; overflow: hidden; }
            .pd-viewer-name { font-size: 1.35rem; font-weight: 500; letter-spacing: .04em; white-space: nowrap; }
            .pd-viewer-after { font-size: .68rem; font-weight: 600; letter-spacing: .2em; text-transform: uppercase; color: ${({ theme }) => theme.opal}; white-space: nowrap; }
            .pd-viewer-idea { min-width: 0; font-size: 1rem; font-style: italic; font-weight: 400; opacity: .78; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
            .pd-viewer-devices, .pd-viewer-moves { display: flex; flex: none; align-items: baseline; gap: 1.1rem; white-space: nowrap; }
            .pd-viewer-bar button { font: inherit; font-size: .98rem; color: inherit; background: none; border: 0; border-block-end: 1px solid transparent; padding: 0 0 .1rem; cursor: pointer; opacity: .78; }
            .pd-viewer-bar button:hover { opacity: 1; }
            .pd-viewer[data-device='both'] button[data-shows='both'], .pd-viewer[data-device='desk'] button[data-shows='desk'], .pd-viewer[data-device='phone'] button[data-shows='phone'] { opacity: 1; color: ${({ theme }) => theme.opal}; border-block-end-color: ${({ theme }) => theme.opal}; }
            .pd-viewer-count { font-size: .72rem; letter-spacing: .16em; text-transform: uppercase; opacity: .7; }
            .pd-viewer-stage { display: flex; align-items: center; justify-content: center; gap: 1.6rem; padding: 1.4rem; min-width: 0; min-height: 0; overflow: hidden; }
            .pd-viewer-desk { display: block; flex: none; width: calc(1280px * var(--scale)); height: calc(800px * var(--scale)); overflow: hidden; background: white; box-shadow: 0 0 0 1px rgba(12, 27, 31, .16), 0 30px 60px -36px rgba(12, 27, 31, .6); }
            .pd-viewer-phone { display: block; flex: none; box-sizing: content-box; width: calc(390px * var(--scale)); height: calc(844px * var(--scale)); border: 10px solid ${({ theme }) => theme.accent}; border-radius: calc(40px * var(--scale) + 10px); overflow: hidden; background: white; box-shadow: 0 30px 60px -30px rgba(12, 27, 31, .7); }
            .pd-viewer iframe { display: block; border: 0; transform: scale(var(--scale)); transform-origin: 0 0; }
            .pd-viewer-desk iframe { width: 1280px; height: 800px; }
            .pd-viewer-phone iframe { width: 390px; height: 844px; }
            .pd-viewer[data-device='desk'] .pd-viewer-desk { width: 100%; height: 100%; }
            .pd-viewer[data-device='desk'] .pd-viewer-desk iframe { width: 100%; height: 100%; transform: none; }
            .pd-viewer[data-device='desk'] .pd-viewer-phone, .pd-viewer[data-device='phone'] .pd-viewer-desk { display: none; }

            @media (max-width: 760px) {
                .pd-paragraph.pa-concepts { grid-template-columns: minmax(0, 1fr); }
                .pd-viewer-bar { gap: .9rem; padding: .55rem .9rem; }
                .pd-viewer-after, .pd-viewer-idea, .pd-viewer-devices { display: none; }
                .pd-viewer-name { overflow: hidden; text-overflow: ellipsis; font-size: 1.1rem; }
                .pd-viewer-stage { padding: 0; }
                .pd-viewer[data-device] .pd-viewer-desk { display: none; }
                .pd-viewer[data-device] .pd-viewer-phone { display: block; width: 100%; height: 100%; border: 0; border-radius: 0; }
                .pd-viewer[data-device] .pd-viewer-phone iframe { width: 100%; height: 100%; transform: none; }
            }

            .pd-code { max-height: 26rem; overflow: auto; margin: 0; font-size: .74rem; font-weight: 400; border-inline-start: 2px solid ${({ theme }) => theme.link}; scrollbar-width: thin; }
            .hljs-tag, .hljs-name, .hljs-keyword, .hljs-selector-class, .hljs-selector-id, .hljs-selector-tag, .hljs-title { color: ${({ theme }) => theme.link}; }
            .hljs-attr, .hljs-attribute, .hljs-property { color: #5b4a8c; }
            .hljs-string, .hljs-number { color: #8a4a2b; }
            .hljs-comment { color: ${({ theme }) => theme.quiet}; font-style: italic; }
        `;
    }
}

export class $LibraryMode extends $DesignTheme { }

export class $GalleryMode extends $DesignTheme {
    paper = '#ffffff';
    bar = '#eaf1f5';
    bright = '#10252c';
    tint = '#166178';
}

export const DesignTheme = $($DesignTheme);
export const LibraryMode = $($LibraryMode);
export const GalleryMode = $($GalleryMode);
