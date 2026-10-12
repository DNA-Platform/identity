import { css, RuleSet } from 'styled-components';
import { $ } from '@dna-platform/chemistry';
import { $LibraryBookTheme } from './3-the-theme~code.tsx';

export class $Typeset extends $LibraryBookTheme {
    prose = "'Source Serif 4', Georgia, serif";
    ink = '#343c4a';
    heading = '#1a1f36';
    soft = '#727d8c';
    faint = '#9ea8b5';
    line = '#e4e9f2';
    paper = '#ffffff';
    side = '#f8f9fb';
    holdsColumn = '240px';
    barHeight = '52px';
    shadow = '0 1px 2px rgba(43, 54, 60, 0.05), 0 6px 18px rgba(43, 54, 60, 0.05)';
    lift = '0 2px 4px rgba(43, 54, 60, 0.06), 0 14px 32px rgba(43, 54, 60, 0.10)';
    barLight = '#fcfcfd';
    barMid = '#f8f9fc';
    barDeep = '#f2f4f9';
    barShadow = '0 1px 0 rgba(43, 54, 60, 0.05)';
    sideLight = '#fafbfc';
    sideDeep = '#f2f4f8';
    hairline = '1px';
    stroke = '2px';

    protected override parts(): RuleSet[] {
        return [...super.parts(), this.bands(), this.guide(), this.order(), this.surface(), this.entries(), this.small()];
    }

    protected bands(): RuleSet {
        return css`
            .pd-book .pd-library { position: relative; background: linear-gradient(180deg, ${({ theme }) => theme.barLight} 0%, ${({ theme }) => theme.barMid} 60%, ${({ theme }) => theme.barDeep} 100%); border-block-end: thin solid ${({ theme }) => theme.line}; box-shadow: ${({ theme }) => theme.barShadow}; }
            .pd-book .pd-library::after { content: ''; position: absolute; left: 0; right: 0; bottom: calc(-1 * ${({ theme }) => theme.hairline}); height: ${({ theme }) => theme.stroke}; background: linear-gradient(90deg, var(--band) 0 40%, var(--ground) 40% 70%, var(--foot) 70%); opacity: 0.75; }
        `;
    }

    protected guide(): RuleSet {
        return css`
            .pd-book .pd-holds { position: relative; padding: calc(${({ theme }) => theme.space} * 0.75) 0 calc(${({ theme }) => theme.space} * 0.8333); background: linear-gradient(90deg, ${({ theme }) => theme.sideLight} 0%, ${({ theme }) => theme.side} 86%, ${({ theme }) => theme.sideDeep} 100%); border-inline-end: thin solid ${({ theme }) => theme.line}; }
            .pd-book .pd-holds .pd-section { margin: 0 0 calc(${({ theme }) => theme.space} * 0.5833); }
            .pd-book .pd-holds .pd-sentence.pd-heading { margin: 0; padding: 0 calc(${({ theme }) => theme.space} * 0.75) calc(${({ theme }) => theme.space} / 4); border: 0; font-family: ${({ theme }) => theme.font}; font-size: calc(0.75 * ${({ theme }) => theme.size}); font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: ${({ theme }) => theme.faint}; }
            .pd-book .pd-holds .pd-paragraph.pa-entry { position: relative; display: flex; align-items: center; justify-content: space-between; gap: calc(${({ theme }) => theme.space} * 0.375); margin: 0; padding: calc(${({ theme }) => theme.space} / 6) calc(${({ theme }) => theme.space} * 0.583) calc(${({ theme }) => theme.space} / 6) calc(${({ theme }) => theme.space} * 1.667); border-radius: 0; font-size: calc(0.93 * ${({ theme }) => theme.size}); font-weight: 500; line-height: 1.35; color: ${({ theme }) => theme.sideInk}; box-shadow: inset calc(${({ theme }) => theme.space} / 8) 0 0 transparent; transition: background ${({ theme }) => theme.beat} ease, color ${({ theme }) => theme.beat} ease, box-shadow ${({ theme }) => theme.beat} ease; }
            .pd-book .pd-holds .pd-paragraph.pa-entry::before { content: ''; position: absolute; inset-inline-start: calc(${({ theme }) => theme.space} * 0.958); width: calc(${({ theme }) => theme.space} / 3); height: calc(${({ theme }) => theme.space} / 3); border-radius: 50%; background: var(--foot-ink); box-shadow: 0 0 0 calc(${({ theme }) => theme.space} / 12) ${({ theme }) => theme.white}; }
            .pd-book .pd-holds .pd-paragraph.pa-entry:hover { background: color-mix(in oklab, color-mix(in oklab, var(--foot) 30%, white) 65%, white); }
            .pd-book .pd-holds .pd-paragraph.pa-entry.pa-open { background: linear-gradient(90deg, color-mix(in oklab, var(--foot) 30%, white), color-mix(in oklab, var(--foot) 16%, white)); color: var(--foot-ink); box-shadow: inset calc(${({ theme }) => theme.space} / 8) 0 0 var(--foot-ink), inset 0 ${({ theme }) => theme.hairline} 0 rgba(255, 255, 255, 0.7); }
            .pd-book .pd-holds .pa-entry .pd-word.pd-entry-day { flex: none; order: 1; margin-inline-start: auto; font-family: ${({ theme }) => theme.font}; font-size: calc(0.7857 * ${({ theme }) => theme.size}); font-weight: 400; letter-spacing: 0; color: ${({ theme }) => theme.faint}; font-variant-numeric: tabular-nums; }
            .pd-book.pa-newest-first .pd-holds .pd-section { display: flex; flex-direction: column-reverse; justify-content: flex-end; }
            .pd-book.pa-newest-first .pd-holds .pd-section > .pa-self-reference { order: 1; }
            .pd-book .pd-holds .pa-entry.pa-open .pd-word.pd-entry-day { color: color-mix(in oklab, var(--foot-ink) 70%, white); }
            .pd-book .pd-holds .pa-parenthetical { display: none; }
        `;
    }

    protected order(): RuleSet {
        return css`
            .pd-book .pd-holds .pd-paragraph.pd-entry-order { position: absolute; top: calc(${({ theme }) => theme.space} * 0.75); right: calc(${({ theme }) => theme.space} * 0.583); z-index: 1; margin: 0; }
            .pd-book .pd-holds .pd-entry-order .pd-word.pd-switch { padding: 0; border: 0; border-radius: 0; background: none; font-family: ${({ theme }) => theme.font}; font-size: calc(0.7143 * ${({ theme }) => theme.size}); font-weight: 500; line-height: 1.4; letter-spacing: 0.02em; color: ${({ theme }) => theme.faint}; cursor: pointer; transition: color ${({ theme }) => theme.beat} ease; }
            .pd-book .pd-holds .pd-entry-order .pd-word.pd-switch::before { content: '↓ '; }
            .pd-book .pd-holds .pd-entry-order .pd-word.pd-switch:hover { color: ${({ theme }) => theme.ink}; }
            .pd-book .pd-holds .pd-entry-order .pd-word.pd-switch[aria-pressed='true'] { background: none; border: 0; color: var(--foot-ink); }
            .pd-book .pd-holds .pd-entry-order .pd-word.pd-switch[aria-pressed='true']::before { content: '↑ '; }
        `;
    }

    protected surface(): RuleSet {
        return css`
            .pd-book .pd-pages { display: flex; flex-direction: column; padding: ${({ theme }) => theme.space} calc(${({ theme }) => theme.space} * 1.6667) calc(${({ theme }) => theme.space} * 5); background: radial-gradient(900px 520px at 18% -10%, color-mix(in oklab, var(--foot) 18%, white) 0%, transparent 62%), linear-gradient(135deg, color-mix(in oklab, var(--foot) 10%, white) 0%, ${({ theme }) => theme.paper} 50%, color-mix(in oklab, var(--foot) 5%, white) 100%); }
        `;
    }

    protected entries(): RuleSet {
        return css`
            .pd-book .pd-pages .pd-chapter.pa-page { box-sizing: border-box; position: relative; width: 100%; max-width: calc(${({ theme }) => theme.space} * 33.75); margin: 0 auto; padding: calc(${({ theme }) => theme.space} * 1.6667) 0 calc(${({ theme }) => theme.space} * 2) calc(${({ theme }) => theme.space} * 7.9167); background: linear-gradient(90deg, transparent, ${({ theme }) => theme.line} 12% 88%, transparent) top / 100% ${({ theme }) => theme.hairline} no-repeat; }
            .pd-book .pd-pages .pa-page .pd-word.pd-entry-number { position: absolute; left: 0; top: calc(${({ theme }) => theme.space} * 1.4167); font-family: ${({ theme }) => theme.serif}; font-size: calc(3.4286 * ${({ theme }) => theme.size}); font-weight: 500; line-height: 1; letter-spacing: -0.03em; color: color-mix(in oklab, var(--foot-ink) 22%, white); pointer-events: none; }
            .pd-book .pd-pages .pa-page .pd-word.pd-date { display: flex; align-items: baseline; gap: calc(${({ theme }) => theme.space} / 3); position: absolute; left: 0; top: calc(${({ theme }) => theme.space} * 4); width: calc(${({ theme }) => theme.space} * 6.6667); font-family: ${({ theme }) => theme.font}; font-size: calc(0.857 * ${({ theme }) => theme.size}); font-weight: 500; line-height: 1.5; letter-spacing: 0.06em; text-transform: uppercase; color: var(--foot-ink); }
            .pd-book .pd-pages .pa-page .pd-word.pd-date::before { content: ''; flex: none; width: calc(${({ theme }) => theme.space} / 3); height: calc(${({ theme }) => theme.space} / 3); border-radius: 50%; background: linear-gradient(135deg, color-mix(in oklab, var(--foot) 30%, white), var(--foot-ink)); box-shadow: 0 0 0 calc(${({ theme }) => theme.space} / 8) ${({ theme }) => theme.paper}, 0 0 0 calc(${({ theme }) => theme.space} * 5 / 24) color-mix(in oklab, var(--foot) 21%, white), ${({ theme }) => theme.shadow}; }
            .pd-book .pd-pages .pd-sentence.pd-title { margin: 0 0 calc(${({ theme }) => theme.space} * 0.75); font-family: ${({ theme }) => theme.serif}; font-size: calc(2 * ${({ theme }) => theme.size}); font-weight: 700; line-height: 1.2; letter-spacing: -0.015em; color: ${({ theme }) => theme.heading}; }
            .pd-book .pd-pages .pd-section { margin: 0; }
            .pd-book .pd-pages .pd-sentence.pd-heading { margin: calc(${({ theme }) => theme.space} * 1.1667) 0 calc(${({ theme }) => theme.space} * 0.4167); font-family: ${({ theme }) => theme.serif}; font-size: calc(1.2857 * ${({ theme }) => theme.size}); font-weight: 600; line-height: 1.3; color: ${({ theme }) => theme.heading}; }
            .pd-book .pd-pages .pd-paragraph { margin: 0 0 calc(${({ theme }) => theme.space} * 0.7083); font-size: calc(1.2143 * ${({ theme }) => theme.size}); line-height: 1.65; color: ${({ theme }) => theme.ink}; }
            .pd-book .pd-pages .pd-paragraph .pa-reference { color: var(--foot-ink); text-decoration: underline; text-decoration-color: color-mix(in srgb, var(--foot-ink) 35%, transparent); text-decoration-thickness: ${({ theme }) => theme.hairline}; text-underline-offset: calc(${({ theme }) => theme.space} / 8); transition: text-decoration-color ${({ theme }) => theme.beat} ease; }
            .pd-book .pd-pages .pd-paragraph .pa-reference:hover { text-decoration-color: var(--foot-ink); }
            .pd-book .pd-pages .pa-self-reference { color: inherit; text-decoration: none; }
            .pd-book .pd-pages .pd-paragraph.pa-list .pd-line.pa-item { position: relative; margin: 0 0 calc(${({ theme }) => theme.space} / 4); padding-inline-start: 1.3em; }
            .pd-book .pd-pages .pd-paragraph.pa-list .pd-line.pa-item::before { content: '–'; position: absolute; left: 0.1em; color: var(--foot-ink); }
        `;
    }

    protected small(): RuleSet {
        return css`
            @media (max-width: ${({ theme }) => theme.narrow}) {
                .pd-book .pd-holds, .pd-book .pd-library { border-inline-end: none; }
                .pd-book .pd-holds .pd-paragraph.pd-entry-order, .pd-book .pd-holds .pa-entry .pd-word.pd-entry-day { display: none; }
                .pd-book .pd-pages { padding: 0 calc(${({ theme }) => theme.space} * 0.8333) calc(${({ theme }) => theme.space} * 2.5); }
                .pd-book .pd-pages .pd-chapter.pa-page { padding: calc(${({ theme }) => theme.space} * 1.1667) 0 calc(${({ theme }) => theme.space} * 1.3333); }
                .pd-book .pd-pages .pa-page .pd-word.pd-entry-number { position: static; display: block; margin-block-end: calc(${({ theme }) => theme.space} / 6); font-size: calc(2 * ${({ theme }) => theme.size}); }
                .pd-book .pd-pages .pa-page .pd-word.pd-date { position: static; width: auto; margin-block-end: calc(${({ theme }) => theme.space} * 0.4167); }
            }
        `;
    }
}

export const Typeset = $($Typeset);
