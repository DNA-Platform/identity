import { ElementType, MouseEvent, ReactNode } from 'react';
import { $, $Chemical, selection } from '@dna-platform/chemistry';
import { $Paragraph } from '@dna-platform/public';
import type { $Conversation } from '../../.manual/.book';
import { $Artifact, $Attachment, showingBook } from './2-the-artifact-and-the-attachment~code.tsx';

export class $Pane extends $Paragraph {
    style: ElementType = selection.div`
        .pd-book &.pd-paragraph {
            grid-area: pane;
            display: none;
            flex-direction: column;
            min-width: 0;
            margin: 12px 12px 12px 0;
            border: 1px solid ${({ theme }) => theme.line};
            border-radius: 14px;
            background: ${({ theme }) => theme.paper};
            box-shadow: 0 1px 2px rgba(43, 54, 60, .04), 0 12px 32px rgba(43, 54, 60, .07);
            overflow: hidden;
        }
        .pd-book &.pd-paragraph:has(> .pd-pane-bar) { display: flex; }
        .pd-book & .pd-pane-bar { display: flex; align-items: center; gap: 10px; padding: 10px 10px 10px 18px; border-block-end: 1px solid ${({ theme }) => theme.line}; }
        .pd-book & .pd-pane-title { flex: 1; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-family: ${({ theme }) => theme.sans}; font-size: 14px; font-weight: 500; line-height: 1.4; color: ${({ theme }) => theme.ink}; }
        .pd-book & .pd-pane-kind { font-family: ${({ theme }) => theme.sans}; font-size: 12px; line-height: 1.4; color: ${({ theme }) => theme.soft}; }
        .pd-book & button { border: 0; background: none; padding: 2px 8px; border-radius: 6px; font-family: ${({ theme }) => theme.sans}; font-size: 11.5px; font-weight: 500; line-height: 1.4; color: ${({ theme }) => theme.soft}; cursor: pointer; }
        .pd-book & button:hover { background: rgba(11, 11, 11, .05); color: ${({ theme }) => theme.ink}; }
        .pd-book & button:disabled { opacity: .35; cursor: default; }
        .pd-book & .pd-pane-close { font-size: 18px; padding: 0 8px; }
        .pd-book & .pd-pane-body { flex: 1; min-height: 0; overflow: auto; }
        .pd-book & .pd-pane-body > pre { margin: 0; padding: 18px 22px; font-family: ${({ theme }) => theme.mono}; font-size: 13.5px; line-height: 1.65; color: #14181f; white-space: pre-wrap; overflow-wrap: anywhere; }
        .pd-book & .pd-pane-body .pd-chapter { display: block; padding: 24px 36px 60px; }
        .pd-book & .pd-pane-body .pd-chapter > .pd-title, .pd-book & .pd-pane-body .pd-chapter > a.pa-self-reference { display: none; }
        .pd-book & .pd-pane-body .pd-section > a.pa-self-reference:first-child { display: none; }
        .pd-book & .pd-pane-body .pd-chapter .pd-code-box { margin: 0; border: 0; border-radius: 0; background: transparent; }
        .pd-book & .pd-pane-foot { display: flex; align-items: center; gap: 6px; padding: 8px 10px 8px 18px; border-block-start: 1px solid ${({ theme }) => theme.line}; font-family: ${({ theme }) => theme.sans}; font-size: 12px; font-weight: 500; line-height: 1.4; color: ${({ theme }) => theme.soft}; }
        .pd-book & .pd-pane-version { display: flex; align-items: center; gap: 4px; }
        .pd-book & .pd-pane-version button { padding: 0 6px; font-size: 13px; }
        .pd-book & .pd-pane-download { margin-inline-start: auto; }
        @media (max-width: ${({ theme }) => theme.narrow}) {
            .pd-book &.pd-paragraph:has(> .pd-pane-bar) { position: fixed; inset: 52px 0 0 0; margin: 0; border-radius: 0; z-index: 2; }
        }
    `;
    get shown(): $Artifact | $Attachment | undefined { return showingBook(this)?.$shown; }
    get artifacts(): $Artifact[] {
        return (this.book as $Conversation | undefined)?.messages.flatMap(message => message.text.find($Artifact)) ?? [];
    }

    $Pane(...chemicals: $Chemical[]) {
        this.$Writing(...chemicals);
        this.containers.replace(this, 'span', this.style);
    }

    neighbour(artifact: $Artifact, step: number): $Artifact | undefined {
        const number = Number(artifact.number) + step;
        return this.artifacts.find(other => other.$artifact === artifact.$artifact && Number(other.number) === number);
    }

    override write(): ReactNode {
        const shown = this.shown;
        if (shown === undefined) return undefined;
        const artifact = shown instanceof $Artifact ? shown : undefined;
        const attachment = shown instanceof $Attachment ? shown : undefined;
        const version = artifact?.version;
        const Version = version === undefined ? undefined : $(version);
        const earlier = artifact === undefined ? undefined : this.neighbour(artifact, -1);
        const later = artifact === undefined ? undefined : this.neighbour(artifact, 1);
        const text = attachment === undefined ? ''
            : attachment.names ? attachment.contents : 'The export does not carry this upload; the name is all it kept.';
        return (
            <>
                <div className="pd-pane-bar">
                    <span className="pd-pane-title">
                        {artifact?.name ?? attachment?.fileName}
                    </span>
                    <span className="pd-pane-kind">
                        {artifact?.kind ?? attachment?.extension.toLowerCase()}
                    </span>
                    <button
                        type="button"
                        className="pd-pane-copy"
                        onClick={event => this.copy(event)}
                    >
                        Copy
                    </button>
                    <button
                        type="button"
                        className="pd-pane-close"
                        aria-label="close"
                        onClick={() => this.close()}
                    >
                        ×
                    </button>
                </div>
                <div className="pd-pane-body">
                    {Version === undefined ? (
                        <pre>
                            {text}
                        </pre>
                    ) : (
                        <Version />
                    )}
                </div>
                {artifact === undefined ? undefined : (
                    <div className="pd-pane-foot">
                        <span className="pd-pane-version">
                            <button
                                type="button"
                                disabled={earlier === undefined}
                                onClick={() => this.show(earlier)}
                            >
                                ‹
                            </button>
                            <span>
                                {`v${artifact.number}`}
                            </span>
                            <button
                                type="button"
                                disabled={later === undefined}
                                onClick={() => this.show(later)}
                            >
                                ›
                            </button>
                        </span>
                        <button
                            type="button"
                            className="pd-pane-download"
                            onClick={() => this.download(artifact)}
                        >
                            Download
                        </button>
                    </div>
                )}
            </>
        );
    }

    show(artifact: $Artifact | undefined): void {
        const book = showingBook(this);
        if (book !== undefined && artifact !== undefined) book.$shown = artifact;
    }

    close(): void {
        const book = showingBook(this);
        if (book !== undefined) book.$shown = undefined;
    }

    copy(event: MouseEvent<HTMLButtonElement>): void {
        const body = event.currentTarget.closest('.pd-pane')?.querySelector('.pd-pane-body');
        void navigator.clipboard?.writeText(body?.textContent ?? '');
    }

    download(artifact: $Artifact): void {
        const type = artifact.$type.replace(/^\./u, '') || 'md';
        const file = new Blob([artifact.contents], { type: 'text/plain' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(file);
        link.download = `${artifact.name} v${artifact.number}.${type}`;
        link.click();
        URL.revokeObjectURL(link.href);
    }

    protected override $Define(): void {
        super.$Define();
        this.classes.add(this, 'pd-pane');
    }
}

export const Pane = $($Pane);
