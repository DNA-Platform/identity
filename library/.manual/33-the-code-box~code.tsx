import { MouseEvent, ReactNode } from 'react';
import { $, $Chemical } from '@dna-platform/chemistry';
import { $Code, Highlighter, highlighting } from '@dna-platform/public';

const notationForm = /(::[^\n]*|<\|=\|>|=\|>|=[A-Za-z0-9'_]*>|-\([^)]*\)>|->|==|!=)/gu;
const escaped = (text: string): string => text.replace(/[&<>]/gu, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' })[character]!);

export const notationHighlighting = (text: string): string => text.split(notationForm).map((piece, index) => {
    if (index % 2 === 0) return escaped(piece);
    return `<span class="${piece.startsWith('::') ? 'hljs-comment' : 'hljs-keyword'}">${escaped(piece)}</span>`;
}).join('');

export const boxHighlighting: Highlighter = (text, language) =>
    language === 'srt' ? notationHighlighting(text) : highlighting(text, language);

export class $CodeBox extends $Code {
    override $highlighter: Highlighter = boxHighlighting;
    get name(): string { return this.language === '' ? 'text' : this.language; }

    $CodeBox(...chemicals: $Chemical[]) {
        this.$Code(...chemicals);
        this.containers.replace(this, 'pre', 'div');
    }

    override write(): ReactNode {
        return (
            <>
                <div className="pd-code-bar">
                    <span className="pd-code-name">
                        {this.name}
                    </span>
                    <button
                        type="button"
                        className="pd-copy"
                        onClick={event => this.copy(event)}
                    >
                        Copy
                    </button>
                </div>
                <pre>
                    {super.write()}
                </pre>
            </>
        );
    }

    copy(event: MouseEvent<HTMLButtonElement>): void {
        const listing = event.currentTarget.closest('.pd-code-box')?.querySelector('pre')?.textContent ?? '';
        void navigator.clipboard?.writeText(listing);
    }

    protected override $Define(): void {
        super.$Define();
        this.classes.add(this, 'pd-code-box');
    }
}

export const CodeBox = $($CodeBox);
