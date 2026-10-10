import { ElementType, ReactNode } from 'react';
import { $, $Chemical, selection } from '@dna-platform/chemistry';
import { $Paragraph } from '@dna-platform/public';
import { FileTab as fileTab, FileListing as fileListing, fileNameOf } from './2-the-listing~code.tsx';
import { Switch as switchOf, Tab as tab } from './9-the-switch~code.tsx';
import { $Manual } from './10-the-manual~code.tsx';
import { CodeForward as codeForward, LightCode as lightCode, NumberedCode as numberedCode, Split as split, WordsForward as wordsForward, WrappedCode as wrappedCode } from './10-the-manual~annotations.tsx';

export class $FilePanel extends $Paragraph {
    style: ElementType = selection.div`
        .pd-book &.pd-paragraph {
            display: grid;
            grid-template-rows: auto minmax(0, 1fr);
            min-width: 0;
            margin: 0;
            overflow: hidden;
            contain: size;
            background: linear-gradient(90deg, color-mix(in oklch, var(--night) 90%, white) 0%, var(--night) 36px);
            color: var(--glow);
            box-shadow: -10px 0 18px -16px rgba(43, 54, 60, 0.5);
            transition: background ${({ theme }) => theme.beat} ease, color ${({ theme }) => theme.beat} ease;
        }
        .pd-book.pa-code-forward & { box-shadow: none; }
        .pd-book & .pd-file-listings { display: grid; grid-template-rows: minmax(0, 1fr); align-content: start; min-height: 0; overflow: hidden; }
        .pd-book & .pd-file-listings .pd-container { display: contents; }
        .pd-book & .pd-paragraph.pd-file-listing { display: none; margin: 0; padding: 0; min-height: 0; }
        .pd-book & .pd-file-listing.pa-open { display: block; overflow: auto; scrollbar-width: thin; scrollbar-color: transparent transparent; transition: scrollbar-color ${({ theme }) => theme.beat} ease; }
        .pd-book & .pd-file-listing.pa-open:hover { scrollbar-color: var(--dim) transparent; }
        .pd-book & .pd-file-listing .pd-word { display: none; }
        .pd-book & .pd-file-listing .pd-code {
            margin: 0;
            padding: calc(${({ theme }) => theme.space} * 0.5833) 0;
            border-radius: 0;
            background: transparent;
            font-family: ${({ theme }) => theme.mono};
            font-size: calc(0.8571 * ${({ theme }) => theme.size});
            line-height: 1.7;
            white-space: normal;
            color: var(--glow);
            cursor: zoom-in;
        }
        .pd-book.pa-code-forward & .pd-file-listing .pd-code { cursor: default; }
        .pd-book & .pd-file-listing .pd-code code { background: transparent; color: inherit; }
        .pd-book & .pd-code-line { display: block; padding-inline-end: calc(${({ theme }) => theme.space} * 0.75); white-space: pre; }
        .pd-book.pa-wrapped-code & .pd-code-line { white-space: pre-wrap; padding-inline-start: calc(${({ theme }) => theme.space} * 2.4167); text-indent: calc(${({ theme }) => theme.space} * -2.4167); }
        .pd-book & .pd-code-line::before { content: attr(data-line); display: inline-block; width: calc(${({ theme }) => theme.space} * 1.8333); padding-inline-end: calc(${({ theme }) => theme.space} * 0.5833); text-align: end; color: var(--dim); user-select: none; text-indent: 0; }
        .pd-book:not(.pa-numbered-code) & .pd-code-line::before { content: ''; width: calc(${({ theme }) => theme.space} * 0.5833); padding: 0; }
        .pd-book.pa-light-code & .hljs-keyword, .pd-book.pa-light-code & .hljs-built_in, .pd-book.pa-light-code & .hljs-literal { color: #5a4fa8; }
        .pd-book.pa-light-code & .hljs-string, .pd-book.pa-light-code & .hljs-regexp, .pd-book.pa-light-code & .hljs-number { color: #2f7f6e; }
        .pd-book.pa-light-code & .hljs-title, .pd-book.pa-light-code & .hljs-type, .pd-book.pa-light-code & .hljs-tag, .pd-book.pa-light-code & .hljs-name, .pd-book.pa-light-code & .hljs-attr { color: #23407a; }
        .pd-book.pa-light-code & .hljs-comment, .pd-book.pa-light-code & .hljs-meta { color: #8a94a3; }
        @media (max-width: ${({ theme }) => theme.narrow}) {
            .pd-book & { box-shadow: none; }
        }
    `;
    get manual(): $Manual | undefined { return this.chapter?.annotations.expressed($Manual); }

    $FilePanel(...chemicals: $Chemical[]) {
        this.$Writing(...chemicals);
        this.containers.replace(this, 'span', this.style);
    }

    override write(): ReactNode {
        const FilePanelBar = $(filePanelBar);
        const FileListing = $(fileListing);
        const manual = this.manual;
        if (manual === undefined) return undefined;
        return (
            <>
                <FilePanelBar chapter={this.chapter} />
                <div className="pd-file-listings">
                    {manual.files.map(file => (
                        <FileListing
                            key={fileNameOf(file)}
                            file={file}
                            filePanelState={codeForward}
                            family={manual.filePanelStates}
                        />
                    ))}
                </div>
            </>
        );
    }

    protected override $Define(): void {
        super.$Define();
        this.classes.add(this, 'pd-file-panel');
    }
}

export class $FilePanelBar extends $Paragraph {
    style: ElementType = selection.div`
        .pd-book &.pd-paragraph {
            display: flex;
            align-items: stretch;
            gap: 1px;
            margin: 0;
            padding: 0 0 0 2px;
            background: linear-gradient(180deg, color-mix(in oklch, var(--dusk) 88%, white) 0%, var(--dusk) 100%);
            border-block-end: thin solid color-mix(in oklch, var(--foot) 28%, var(--dusk));
        }
        .pd-book & .pd-file-tab {
            display: flex;
            align-items: center;
            gap: calc(${({ theme }) => theme.space} * 0.2917);
            padding: calc(${({ theme }) => theme.space} * 0.375) calc(${({ theme }) => theme.space} * 0.5833) calc(${({ theme }) => theme.space} / 3) calc(${({ theme }) => theme.space} / 2);
            border: 0;
            border-block-start: 2px solid transparent;
            background: none;
            font-family: ${({ theme }) => theme.mono};
            font-size: calc(0.8571 * ${({ theme }) => theme.size});
            font-weight: 500;
            line-height: 1;
            color: color-mix(in oklch, var(--glow) 62%, var(--night));
            cursor: pointer;
            transition: background ${({ theme }) => theme.beat} ease, color ${({ theme }) => theme.beat} ease, border-color ${({ theme }) => theme.beat} ease;
        }
        .pd-book & .pd-file-tab .pd-drawing { width: calc(0.9286 * ${({ theme }) => theme.size}); height: calc(0.9286 * ${({ theme }) => theme.size}); color: #9aa4b3; }
        .pd-book & .pd-file-tab svg { display: block; width: 100%; height: 100%; }
        .pd-book & .pd-file-tab:hover { color: var(--glow); }
        .pd-book & .pd-file-tab[aria-pressed='true'] { color: var(--glow); background: var(--night); border-block-start-color: var(--foot); }
        .pd-book & .pd-file-tab[aria-pressed='true'] .pd-drawing { color: var(--colour); }
        .pd-book & .pd-words-only, .pd-book & .pd-dock { display: flex; align-items: center; }
        .pd-book & .pd-dock { margin-inline-start: auto; }
        .pd-book & .pd-words-only .pd-word.pd-switch, .pd-book & .pd-dock .pd-word.pd-switch {
            display: flex;
            align-items: center;
            gap: calc(${({ theme }) => theme.space} / 4);
            padding: 0 calc(${({ theme }) => theme.space} / 2);
            border: 0;
            border-radius: 0;
            background: none;
            font-family: ${({ theme }) => theme.font};
            font-size: calc(0.75 * ${({ theme }) => theme.size});
            font-weight: 500;
            line-height: 1;
            letter-spacing: 0.06em;
            text-transform: uppercase;
            color: color-mix(in oklch, var(--glow) 62%, var(--night));
            cursor: pointer;
            transition: color ${({ theme }) => theme.beat} ease;
        }
        .pd-book & .pd-dock .pd-word.pd-switch { color: var(--brass); }
        .pd-book & .pd-words-only .pd-word.pd-switch:hover, .pd-book & .pd-dock .pd-word.pd-switch:hover { color: var(--glow); }
        .pd-book & .pd-dock .pd-word.pd-switch::before { content: ''; width: 9px; height: 9px; border: 1.5px solid currentColor; border-radius: 1px; box-shadow: 3px 3px 0 -1.5px currentColor; }
        .pd-book & .pd-to-split { display: none; }
        .pd-book.pa-code-forward & .pd-to-full, .pd-book.pa-code-forward & .pd-words-only { display: none; }
        .pd-book.pa-code-forward & .pd-to-split { display: flex; }
        .pd-book.pa-code-forward & .pd-dock .pd-word.pd-switch::before { box-shadow: -3px 3px 0 -1.5px currentColor; }
        .pd-book & .pd-options { display: flex; align-items: center; gap: 2px; padding: 0 calc(${({ theme }) => theme.space} / 3) 0 calc(${({ theme }) => theme.space} / 6); border-inline-start: thin solid color-mix(in oklch, var(--glow) 12%, transparent); }
        .pd-book & .pd-options .pd-word.pd-switch {
            padding: 5px 7px;
            border: 0;
            border-radius: 4px;
            background: none;
            font-family: ${({ theme }) => theme.font};
            font-size: calc(0.75 * ${({ theme }) => theme.size});
            font-weight: 500;
            line-height: 1;
            letter-spacing: 0.04em;
            color: color-mix(in oklch, var(--glow) 55%, var(--night));
            cursor: pointer;
            transition: color ${({ theme }) => theme.beat} ease, background ${({ theme }) => theme.beat} ease;
        }
        .pd-book & .pd-options .pd-word.pd-switch:hover { color: var(--glow); }
        .pd-book & .pd-options .pd-word.pd-switch[aria-pressed='true'] { color: var(--glow); background: var(--dawn); border-color: transparent; }
    `;
    get manual(): $Manual | undefined { return this.chapter?.annotations.expressed($Manual); }

    $FilePanelBar(...chemicals: $Chemical[]) {
        this.$Writing(...chemicals);
        this.containers.replace(this, 'span', this.style);
    }

    override write(): ReactNode {
        const FileTab = $(fileTab);
        const Tab = $(tab);
        const Switch = $(switchOf);
        const manual = this.manual;
        const chapter = this.chapter;
        if (manual === undefined) return undefined;
        return (
            <>
                {manual.files.map(file => (
                    <FileTab
                        key={fileNameOf(file)}
                        file={file}
                    />
                ))}
                <span className="pd-words-only">
                    <Tab
                        chapter={chapter}
                        annotation={wordsForward}
                        family={manual.filePanelStates}
                    >
                        words
                    </Tab>
                </span>
                <span className="pd-dock pd-to-full">
                    <Tab
                        chapter={chapter}
                        annotation={codeForward}
                        family={manual.filePanelStates}
                    >
                        full screen
                    </Tab>
                </span>
                <span className="pd-dock pd-to-split">
                    <Tab
                        chapter={chapter}
                        annotation={split}
                        family={manual.filePanelStates}
                    >
                        split
                    </Tab>
                </span>
                <span className="pd-options">
                    <Switch
                        chapter={chapter}
                        annotation={lightCode}
                    >
                        light
                    </Switch>
                    <Switch
                        chapter={chapter}
                        annotation={wrappedCode}
                    >
                        wrap
                    </Switch>
                    <Switch
                        chapter={chapter}
                        annotation={numberedCode}
                    >
                        lines
                    </Switch>
                </span>
            </>
        );
    }

    protected override $Define(): void {
        super.$Define();
        this.classes.add(this, 'pd-file-panel-bar');
    }
}

export const FilePanel = $($FilePanel);
export const FilePanelBar = $($FilePanelBar);
const filePanelBar = FilePanelBar;
