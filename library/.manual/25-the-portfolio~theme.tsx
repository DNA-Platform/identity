import { css, RuleSet } from 'styled-components';
import { $ } from '@dna-platform/chemistry';
import { $LibraryBookTheme } from './3-the-theme~code.tsx';

export class $Exhibition extends $LibraryBookTheme {
    accent = '#23407a';
    ink = '#343c4a';
    heading = '#1a1f36';
    soft = '#727d8c';
    faint = '#9ea8b5';
    line = '#e4e9f2';
    paper = '#fdfcfa';
    side = '#f8f9fb';
    holdsColumn = '256px';
    barHeight = '52px';
    card = '12.5rem';
    shadow = '0 1px 2px rgba(43, 54, 60, 0.05), 0 6px 18px rgba(43, 54, 60, 0.05)';
    lift = '0 2px 4px rgba(43, 54, 60, 0.06), 0 14px 32px rgba(43, 54, 60, 0.10)';
    barLight = '#fcfcfd';
    barMid = '#f8f9fc';
    barDeep = '#f2f4f9';
    barShadow = '0 1px 0 rgba(43, 54, 60, 0.05)';
    sideLight = '#fafbfc';
    sideDeep = '#f2f4f8';
    codeGround = '#f6f7fa';
    hairline = '1px';
    stroke = '2px';
    rise = '-1px';
    gloss = 'inset 0 1px 0 rgba(255, 255, 255, 0.7)';
    ring = '0 0 0 2px color-mix(in oklab, var(--band) 80%, white)';
    decisionShadow = '0 1px 2px rgba(43, 54, 60, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.6)';

    protected override parts(): RuleSet[] {
        return [...super.parts(), this.backdrop(), this.bands(), this.guide(), this.story(), this.said(), this.small()];
    }

    protected backdrop(): RuleSet {
        return css`
            .pd-book .pd-pages { background: linear-gradient(135deg, color-mix(in oklab, var(--band) 10%, white) 0%, ${({ theme }) => theme.paper} 48%, color-mix(in oklab, var(--foot) 8%, white) 100%); }
        `;
    }

    protected bands(): RuleSet {
        return css`
            .pd-book .pd-library { position: relative; background: linear-gradient(180deg, ${({ theme }) => theme.barLight} 0%, ${({ theme }) => theme.barMid} 60%, ${({ theme }) => theme.barDeep} 100%); border-block-end: thin solid ${({ theme }) => theme.line}; box-shadow: ${({ theme }) => theme.barShadow}; }
            .pd-book .pd-library::after { content: ''; position: absolute; left: 0; right: 0; bottom: calc(-1 * ${({ theme }) => theme.hairline}); height: ${({ theme }) => theme.stroke}; background: linear-gradient(90deg, var(--band) 0 40%, var(--ground) 40% 70%, var(--foot) 70%); opacity: 0.75; }
        `;
    }

    protected guide(): RuleSet {
        return css`
            .pd-book .pd-holds { padding: calc(${({ theme }) => theme.space} * 0.75) 0 calc(${({ theme }) => theme.space} * 0.8333); background: linear-gradient(90deg, ${({ theme }) => theme.sideLight} 0%, ${({ theme }) => theme.side} 86%, ${({ theme }) => theme.sideDeep} 100%); border-inline-end: thin solid ${({ theme }) => theme.line}; }
            .pd-book .pd-holds .pd-section { margin: 0 0 calc(${({ theme }) => theme.space} * 0.5833); }
            .pd-book .pd-holds .pd-sentence.pd-heading { margin: 0; padding: 0 calc(${({ theme }) => theme.space} * 0.75) calc(${({ theme }) => theme.space} / 4); border: 0; font-family: ${({ theme }) => theme.font}; font-size: calc(0.75 * ${({ theme }) => theme.size}); font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: ${({ theme }) => theme.faint}; }
            .pd-book .pd-holds .pd-paragraph.pa-entry { display: flex; align-items: center; justify-content: flex-start; gap: calc(${({ theme }) => theme.space} / 3); min-height: calc(2.0714 * ${({ theme }) => theme.size}); margin: 0; padding: 0 calc(${({ theme }) => theme.space} * 0.75); border-radius: 0; font-size: calc(0.9286 * ${({ theme }) => theme.size}); color: ${({ theme }) => theme.ink}; box-shadow: inset ${({ theme }) => theme.stroke} 0 0 transparent; transition: background ${({ theme }) => theme.beat} ease, color ${({ theme }) => theme.beat} ease, box-shadow ${({ theme }) => theme.beat} ease; }
            .pd-book .pd-holds .pd-paragraph.pa-entry::before { content: none; }
            .pd-book .pd-holds .pd-paragraph.pa-entry:hover { background: color-mix(in oklab, var(--ground) 70%, white); }
            .pd-book .pd-holds .pd-paragraph.pa-entry.pa-open { background: var(--ground); color: var(--band-ink); box-shadow: inset ${({ theme }) => theme.stroke} 0 0 var(--band-ink); font-weight: 500; }
            .pd-book .pd-holds .pd-paragraph.pa-entry.pa-plate { min-height: calc(2.5714 * ${({ theme }) => theme.size}); gap: calc(${({ theme }) => theme.space} * 0.4167); font-family: ${({ theme }) => theme.serif}; font-size: calc(0.9643 * ${({ theme }) => theme.size}); font-weight: 500; }
            .pd-book .pd-holds .pa-entry.pa-plate .pd-plate { order: -2; flex: none; width: calc(1.2857 * ${({ theme }) => theme.size}); font-family: ${({ theme }) => theme.font}; font-size: calc(0.75 * ${({ theme }) => theme.size}); font-weight: 500; letter-spacing: 0.04em; color: ${({ theme }) => theme.faint}; font-variant-numeric: tabular-nums; }
            .pd-book .pd-holds .pa-entry.pa-plate .pd-jacket-mini { order: -1; flex: none; width: calc(0.8571 * ${({ theme }) => theme.size}); height: calc(1.2143 * ${({ theme }) => theme.size}); border-radius: calc(${({ theme }) => theme.radius} / 4); background: linear-gradient(180deg, var(--band) 0 30%, var(--ground) 30% 80%, var(--foot) 80%); opacity: 0.9; }
            .pd-book .pd-holds .pa-entry.pa-plate.pa-open .pd-plate { color: var(--band-ink); }
            .pd-book .pd-holds .pa-parenthetical { display: none; }
        `;
    }

    protected story(): RuleSet {
        return css`
            .pd-book .pd-pages .pd-chapter { max-width: none; margin: 0; padding: calc(${({ theme }) => theme.space} * 1.25) calc(${({ theme }) => theme.space} * 1.8333) calc(${({ theme }) => theme.space} * 3); }
            .pd-book .pd-pages .pd-sentence.pd-title { margin: 0 0 calc(${({ theme }) => theme.space} / 3); font-family: ${({ theme }) => theme.serif}; font-size: calc(2.1429 * ${({ theme }) => theme.size}); font-weight: 600; line-height: 1.15; letter-spacing: -0.02em; color: ${({ theme }) => theme.heading}; }
            .pd-book .pd-pages .pd-section { margin: calc(${({ theme }) => theme.space} * 1.25) 0 0; }
            .pd-book .pd-pages .pd-sentence.pd-heading { margin: 0 0 calc(${({ theme }) => theme.space} * 0.4167); font-family: ${({ theme }) => theme.serif}; font-size: calc(1.4286 * ${({ theme }) => theme.size}); font-weight: 600; line-height: 1.25; letter-spacing: -0.01em; color: ${({ theme }) => theme.heading}; }
            .pd-book .pd-pages .pd-paragraph { max-width: 72ch; margin: calc(${({ theme }) => theme.space} * 0.4167) 0; font-size: calc(1.0714 * ${({ theme }) => theme.size}); line-height: 1.65; }
            .pd-book .pd-pages .pd-paragraph .pa-reference { color: var(--band-ink); text-decoration: underline; text-decoration-color: color-mix(in oklch, var(--band-ink) 35%, white); text-underline-offset: ${({ theme }) => theme.stroke}; transition: text-decoration-color ${({ theme }) => theme.beat} ease; }
            .pd-book .pd-pages .pd-paragraph .pa-reference:hover { text-decoration-color: var(--band-ink); }
            .pd-book .pd-pages .pa-self-reference { color: inherit; text-decoration: none; }
            .pd-book .pd-pages .pd-chapter.pa-synopsis .pd-paragraph { max-width: 64ch; margin-block-start: calc(${({ theme }) => theme.space} * 1.6667); font-family: ${({ theme }) => theme.serif}; font-size: calc(1.357 * ${({ theme }) => theme.size}); line-height: 1.6; color: ${({ theme }) => theme.soft}; }
            .pd-book .pd-pages .pd-paragraph .pd-image { display: inline-block; vertical-align: top; max-width: 100%; margin: calc(${({ theme }) => theme.space} / 4) calc(${({ theme }) => theme.space} / 2) calc(${({ theme }) => theme.space} / 4) 0; }
            .pd-book .pd-pages .pd-image img { margin: 0; border: thin solid ${({ theme }) => theme.line}; border-radius: ${({ theme }) => theme.radius}; box-shadow: ${({ theme }) => theme.shadow}; }
            .pd-book .pd-pages .pd-paragraph.pa-desk, .pd-book .pd-pages .pd-paragraph.pa-phone, .pd-book .pd-pages .pd-paragraph.pa-thumbnail, .pd-book .pd-pages .pd-paragraph.pa-exhibit { max-width: none; }
            .pd-book .pd-pages .pd-paragraph.pd-turn { display: flex; justify-content: space-between; align-items: center; gap: calc(${({ theme }) => theme.space} * 0.6667); max-width: none; margin: calc(${({ theme }) => theme.space} * 2.6667) 0 0; padding-block-start: calc(${({ theme }) => theme.space} * 0.6667); border-block-start: thin solid ${({ theme }) => theme.line}; font-size: calc(0.9286 * ${({ theme }) => theme.size}); color: ${({ theme }) => theme.soft}; }
            .pd-book .pd-pages .pd-turn .pa-reference { color: var(--band-ink); text-decoration: none; }
            .pd-book .pd-pages .pd-turn .pd-count { color: ${({ theme }) => theme.faint}; font-variant-numeric: tabular-nums; }
            .pd-book .pd-pages pre.pd-code { max-width: none; max-height: 60vh; margin: calc(${({ theme }) => theme.space} / 2) 0; padding: calc(${({ theme }) => theme.space} * 0.5833) calc(${({ theme }) => theme.space} * 0.6667); overflow: auto; font-size: calc(0.8929 * ${({ theme }) => theme.size}); line-height: 1.5; background: ${({ theme }) => theme.codeGround}; border: thin solid ${({ theme }) => theme.line}; border-radius: ${({ theme }) => theme.radius}; }
        `;
    }

    protected said(): RuleSet {
        return css`
            .pd-book .pd-pages .pd-paragraph.pa-question { color: ${({ theme }) => theme.soft}; }
            .pd-book .pd-pages .pd-paragraph.pa-question, .pd-book .pd-pages .pd-paragraph.pa-answer, .pd-book .pd-pages .pd-paragraph.pa-decision, .pd-book .pd-pages .pd-paragraph.pa-pain, .pd-book .pd-pages .pd-paragraph.pa-solution { position: relative; }
            .pd-book .pd-pages .pd-paragraph.pa-question::before, .pd-book .pd-pages .pd-paragraph.pa-answer::before, .pd-book .pd-pages .pd-paragraph.pa-decision::before, .pd-book .pd-pages .pd-paragraph.pa-pain::before, .pd-book .pd-pages .pd-paragraph.pa-solution::before { display: block; margin-block-end: calc(${({ theme }) => theme.space} / 12); font-family: ${({ theme }) => theme.font}; font-size: calc(0.75 * ${({ theme }) => theme.size}); font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: ${({ theme }) => theme.faint}; }
            .pd-book .pd-pages .pd-paragraph.pa-question::before { content: 'Asked'; color: var(--band-ink); }
            .pd-book .pd-pages .pd-paragraph.pa-answer::before { content: 'Answered'; color: var(--foot-ink); }
            .pd-book .pd-pages .pd-paragraph.pa-decision::before { content: 'Decided'; color: var(--band-ink); }
            .pd-book .pd-pages .pd-paragraph.pa-pain::before { content: 'The pain'; color: var(--foot-ink); }
            .pd-book .pd-pages .pd-paragraph.pa-solution::before { content: 'What solves it'; color: var(--band-ink); }
            .pd-book .pd-pages .pd-paragraph.pa-answer, .pd-book .pd-pages .pd-paragraph.pa-pain, .pd-book .pd-pages .pd-paragraph.pa-solution { padding-inline-start: calc(${({ theme }) => theme.space} * 0.75); border-inline-start: ${({ theme }) => theme.stroke} solid var(--foot); }
            .pd-book .pd-pages .pd-paragraph.pa-answer, .pd-book .pd-pages .pd-paragraph.pa-pain { font-family: ${({ theme }) => theme.serif}; font-size: calc(1.1786 * ${({ theme }) => theme.size}); line-height: 1.6; color: ${({ theme }) => theme.ink}; }
            .pd-book .pd-pages .pd-paragraph.pa-pain { font-style: italic; }
            .pd-book .pd-pages .pd-paragraph.pa-solution { border-inline-start-color: var(--band); }
            .pd-book .pd-pages .pd-paragraph.pa-decision { margin-block-start: calc(${({ theme }) => theme.space} * 0.6667); padding: calc(${({ theme }) => theme.space} / 2) calc(${({ theme }) => theme.space} * 0.6667) calc(${({ theme }) => theme.space} / 2) calc(${({ theme }) => theme.space} * 0.75); border-inline-start: ${({ theme }) => theme.stroke} solid var(--band); border-radius: ${({ theme }) => theme.radius}; background: linear-gradient(135deg, color-mix(in oklab, var(--ground) 62%, white), color-mix(in oklab, var(--ground) 40%, white)); box-shadow: ${({ theme }) => theme.decisionShadow}; }
        `;
    }

    protected small(): RuleSet {
        return css`
            @media (max-width: ${({ theme }) => theme.narrow}) {
                .pd-book .pd-holds, .pd-book .pd-library { border-inline-end: none; }
                .pd-book .pd-holds .pd-paragraph.pa-entry.pa-plate { min-height: calc(2 * ${({ theme }) => theme.size}); gap: calc(${({ theme }) => theme.space} / 4); font-size: calc(0.9286 * ${({ theme }) => theme.size}); }
                .pd-book .pd-holds .pa-entry.pa-plate .pd-plate { display: none; }
                .pd-book .pd-pages .pd-chapter { padding: calc(${({ theme }) => theme.space} * 0.8333) calc(${({ theme }) => theme.space} * 0.6667) calc(${({ theme }) => theme.space} * 2); }
                .pd-book .pd-pages .pd-title { font-size: calc(2 * ${({ theme }) => theme.size}); }
            }
        `;
    }
}

export const Exhibition = $($Exhibition);
