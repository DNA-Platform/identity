import { css, RuleSet } from 'styled-components';
import { $ } from '@dna-platform/chemistry';
import { $LibraryBookTheme } from '../../.manual/.book';

export class $ApplicationForm extends $LibraryBookTheme {
    paper = '#fcfcfb';
    ink = '#0b0b0b';
    prose = "Georgia, 'Times New Roman', serif";
    sans = "system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif";
    mono = "ui-monospace, Menlo, Consolas, 'SF Mono', monospace";
    muted = '#6b6b6b';
    bubble = 'rgba(11, 11, 11, 0.05)';
    shade = 'rgba(11, 11, 11, 0.03)';
    rule = 'rgba(11, 11, 11, 0.1)';
    pill = '#8e2626';
    column = '48rem';

    protected override parts(): RuleSet[] {
        return [...super.parts(), this.transcript(), this.messages(), this.said(), this.done(), this.code()];
    }

    protected transcript(): RuleSet {
        return css`
            .pd-book .pd-pages { background: ${({ theme }) => theme.paper}; }
            .pd-book .pd-chapter.pa-page { max-width: ${({ theme }) => theme.column}; margin-inline: auto; padding: 4px 16px 0; }
            .pd-chapter.pa-page .pd-title { font-family: ${({ theme }) => theme.sans}; font-size: 14px; line-height: 20px; color: ${({ theme }) => theme.muted}; }
        `;
    }

    protected messages(): RuleSet {
        return css`
            .pd-message { position: relative; margin-block-start: 1.5rem; font-family: ${({ theme }) => theme.prose}; font-size: 15px; line-height: 22px; color: ${({ theme }) => theme.ink}; overflow-wrap: anywhere; min-width: 0; }
            .pd-message .pd-paragraph { margin: 0; }
            .pd-message .pd-paragraph + .pd-paragraph { margin-block-start: 11.25px; }
            .pd-message .pd-speaker { position: absolute; width: 1px; height: 1px; margin: -1px; padding: 0; overflow: hidden; clip: rect(0 0 0 0); white-space: nowrap; }
            .pd-message.pa-mine { margin-inline-start: auto; max-width: 85%; padding: 12px 16px; border-radius: 12px; background: ${({ theme }) => theme.bubble}; font-family: ${({ theme }) => theme.sans}; font-size: 15px; line-height: 20px; }
            .pd-message.pa-mine .pd-paragraph + .pd-paragraph { margin-block-start: 8px; }
            .pd-message .pd-time { display: block; margin-block-start: 8px; font-family: ${({ theme }) => theme.sans}; font-size: 12px; line-height: 16px; color: ${({ theme }) => theme.muted}; }
            .pd-message.pa-mine .pd-time { text-align: end; }
            .pd-message .pa-quoted { padding-inline-start: 12px; border-inline-start: 3px solid ${({ theme }) => theme.rule}; color: ${({ theme }) => theme.muted}; }
        `;
    }

    protected said(): RuleSet {
        return css`
            .pd-message .pd-heading { font-family: ${({ theme }) => theme.sans}; font-weight: 600; font-size: 15px; line-height: 22px; margin-block: 16px 4px; }
            .pd-message .pa-verbatim { font-family: ${({ theme }) => theme.mono}; font-size: 13.5px; line-height: 1; color: ${({ theme }) => theme.pill}; background: ${({ theme }) => theme.bubble}; padding: 1px 3.5px; border-radius: 5.4px; }
            .pd-message .pd-word.pa-reference { color: ${({ theme }) => theme.ink}; text-decoration: underline; text-decoration-color: ${({ theme }) => theme.rule}; text-underline-offset: 3px; }
            .pd-message .pa-list { padding-inline-start: 2rem; }
            .pd-message .pa-table .pd-paragraph { font-family: ${({ theme }) => theme.sans}; font-size: 14px; line-height: 20px; }
        `;
    }

    protected done(): RuleSet {
        return css`
            .pd-message .pd-action { margin-block-start: 11.25px; font-family: ${({ theme }) => theme.sans}; font-size: 15px; line-height: 22px; color: ${({ theme }) => theme.muted}; }
            .pd-message .pd-action::after { content: ' ›'; }
            .pd-message .pd-action + .pd-action { margin-block-start: 4px; }
            .pd-message .pd-artifact, .pd-message .pd-attachment { margin-block-start: 11.25px; border: 1px solid ${({ theme }) => theme.rule}; border-radius: 12px; overflow: hidden; background: ${({ theme }) => theme.paper}; }
            .pd-message .pd-artifact figcaption, .pd-message .pd-attachment figcaption { padding: 10px 14px; border-block-end: 1px solid ${({ theme }) => theme.rule}; font-family: ${({ theme }) => theme.sans}; font-size: 14px; font-weight: 600; line-height: 20px; }
            .pd-message .pd-artifact pre, .pd-message .pd-attachment pre { margin: 0; padding: 12px 14px; max-height: 24rem; overflow: auto; font-size: 13px; line-height: 18px; }
        `;
    }

    protected code(): RuleSet {
        return css`
            .pd-message .pd-code { margin-block-start: 11.25px; padding: 12px 14px; border-radius: 8px; background: ${({ theme }) => theme.shade}; font-family: ${({ theme }) => theme.mono}; font-size: 13.5px; line-height: 20px; max-width: 100%; overflow: auto; }
            .pd-message .pd-equation { display: block; max-width: 100%; overflow-x: auto; font-size: 15px; }
        `;
    }
}

export const ApplicationForm = $($ApplicationForm);
