import { css, RuleSet } from 'styled-components';
import { $ } from '@dna-platform/chemistry';
import { $Typeset } from '../../.manual/.book';

export class $ApplicationForm extends $Typeset {
    sans = "'Inter', system-ui, sans-serif";
    mono = "ui-monospace, 'Cascadia Code', Consolas, monospace";
    me = '#e8590c';

    protected override parts(): RuleSet[] {
        return [...super.parts(), this.cameTo(), this.exchanges(), this.said(), this.done(), this.phone()];
    }

    protected cameTo(): RuleSet {
        return css`
            .pd-book .pd-pages .pa-synopsis .pd-paragraph { padding: 14px 18px; border-radius: 12px; background: ${({ theme }) => theme.side}; font-family: ${({ theme }) => theme.sans}; font-size: 14px; line-height: 1.6; color: ${({ theme }) => theme.soft}; }
            .pd-book .pd-pages .pa-synopsis .pd-paragraph::before { content: 'What it came to'; display: block; margin-block-end: 4px; font-size: 10.5px; font-weight: 600; line-height: 1.4; letter-spacing: 0.12em; text-transform: uppercase; color: ${({ theme }) => theme.faint}; }
            .pd-book .pd-pages .pd-turn { display: none; }
            .pd-book .pd-pages .pa-page > .pd-word.pd-date { display: none; }
        `;
    }

    protected exchanges(): RuleSet {
        return css`
            .pd-book .pd-pages .pd-message { position: relative; display: grid; grid-template-columns: auto minmax(0, 1fr); column-gap: 10px; row-gap: 10px; align-items: baseline; margin: 0 0 26px; }
            .pd-book .pd-pages .pd-message > .pa-self-reference { grid-column: 1; text-decoration: none; }
            .pd-book .pd-pages .pd-message .pd-heading.pd-speaker { margin: 0; padding: 0; border: 0; font-family: ${({ theme }) => theme.sans}; font-size: 10.5px; font-weight: 600; line-height: 1.4; letter-spacing: 0.12em; text-transform: uppercase; color: ${({ theme }) => theme.accent}; }
            .pd-book .pd-pages .pd-message > .pd-word.pd-time { grid-column: 2; justify-self: start; position: static; display: block; width: auto; margin: 0; font-family: ${({ theme }) => theme.sans}; font-size: 11.5px; font-weight: 500; line-height: 1; color: ${({ theme }) => theme.faint}; }
            .pd-book .pd-pages .pd-message > .pd-word.pd-time::before { content: none; }
            .pd-book .pd-pages .pd-message > .pd-said { grid-column: 1 / -1; display: flex; flex-direction: column; gap: 10px; min-width: 0; overflow-wrap: anywhere; }
            .pd-book .pd-pages .pd-message.pa-mine { grid-template-columns: minmax(0, 1fr) auto; }
            .pd-book .pd-pages .pd-message.pa-mine > .pa-self-reference { grid-column: 2; }
            .pd-book .pd-pages .pd-message.pa-mine .pd-heading.pd-speaker { color: ${({ theme }) => theme.me}; }
            .pd-book .pd-pages .pd-message.pa-mine > .pd-word.pd-time { grid-column: 1; justify-self: end; }
            .pd-book .pd-pages .pd-message.pa-mine > .pd-said { justify-self: end; max-width: 78%; padding: 12px 16px; border-radius: 18px 18px 4px 18px; background: color-mix(in oklab, ${({ theme }) => theme.me} 12%, white); gap: 8px; }
        `;
    }

    protected said(): RuleSet {
        return css`
            .pd-book .pd-pages .pd-message .pd-said .pd-paragraph { margin: 0; font-family: ${({ theme }) => theme.prose}; font-size: 16.5px; line-height: 1.6; color: ${({ theme }) => theme.ink}; }
            .pd-book .pd-pages .pd-message.pa-mine .pd-said .pd-paragraph { font-family: ${({ theme }) => theme.sans}; font-size: 15px; line-height: 1.5; }
            .pd-book .pd-pages .pd-message .pd-said .pd-heading { margin: 6px 0 0; padding: 0; border: 0; font-family: ${({ theme }) => theme.prose}; font-size: 17px; font-weight: 600; line-height: 1.3; color: ${({ theme }) => theme.heading}; }
            .pd-book .pd-pages .pd-message .pa-emphasis { font-style: italic; }
            .pd-book .pd-pages .pd-message .pa-bold { font-weight: 600; }
            .pd-book .pd-pages .pd-message .pa-list { padding-inline-start: 1.3em; }
            .pd-book .pd-pages .pd-message .pa-list .pa-item { display: list-item; list-style: disc outside; }
            .pd-book .pd-pages .pd-message .pa-list .pa-item + .pa-item { margin-block-start: 4px; }
            .pd-book .pd-pages .pd-message .pa-verbatim { font-family: ${({ theme }) => theme.mono}; font-size: 0.86em; padding: 1px 4px; border-radius: 5px; background: ${({ theme }) => theme.side}; color: ${({ theme }) => theme.heading}; }
            .pd-book .pd-pages .pd-message .pa-quoted { padding-inline-start: 12px; border-inline-start: 3px solid ${({ theme }) => theme.line}; color: ${({ theme }) => theme.soft}; }
            .pd-book .pd-pages .pd-message .pa-table .pd-paragraph { font-family: ${({ theme }) => theme.sans}; font-size: 14px; line-height: 1.5; }
            .pd-book .pd-pages .pd-message .pd-code { margin: 0; padding: 12px 14px; border-radius: 10px; border: 1px solid ${({ theme }) => theme.line}; background: ${({ theme }) => theme.side}; font-family: ${({ theme }) => theme.mono}; font-size: 13px; line-height: 1.55; max-width: 100%; overflow: auto; }
            .pd-book .pd-pages .pd-message .pd-equation { display: block; max-width: 100%; overflow-x: auto; font-size: 16px; }
        `;
    }

    protected done(): RuleSet {
        return css`
            .pd-book .pd-pages .pd-message .pd-action { display: flex; align-items: center; gap: 8px; width: fit-content; max-width: 100%; margin: 0; padding: 7px 12px; border: 1px solid ${({ theme }) => theme.line}; border-radius: 10px; font-family: ${({ theme }) => theme.sans}; font-size: 13px; line-height: 1.4; color: ${({ theme }) => theme.soft}; }
            .pd-book .pd-pages .pd-message .pd-action::before { content: '⌕'; flex: none; font-size: 15px; color: ${({ theme }) => theme.accent}; }
            .pd-book .pd-pages .pd-message .pd-artifact, .pd-book .pd-pages .pd-message .pd-attachment { margin: 0; border: 1px solid ${({ theme }) => theme.line}; border-radius: 12px; overflow: hidden; background: ${({ theme }) => theme.paper}; }
            .pd-book .pd-pages .pd-message .pd-artifact figcaption, .pd-book .pd-pages .pd-message .pd-attachment figcaption { padding: 10px 14px; border-block-end: 1px solid ${({ theme }) => theme.line}; font-family: ${({ theme }) => theme.sans}; font-size: 13px; font-weight: 600; line-height: 1.4; color: ${({ theme }) => theme.ink}; }
            .pd-book .pd-pages .pd-message .pd-artifact pre, .pd-book .pd-pages .pd-message .pd-attachment pre { margin: 0; padding: 12px 14px; max-height: 24rem; overflow: auto; font-family: ${({ theme }) => theme.mono}; font-size: 12.5px; line-height: 1.5; }
        `;
    }

    protected phone(): RuleSet {
        return css`
            @media (max-width: ${({ theme }) => theme.narrow}) {
                .pd-book .pd-pages .pd-message.pa-mine > .pd-said { max-width: 92%; }
            }
        `;
    }
}

export const ApplicationForm = $($ApplicationForm);
