import { ElementType, ReactNode } from 'react';
import { $, $check, $Chemical, selection } from '@dna-platform/chemistry';
import { $Annotation, $Append, $Chapter, $Format, $Writing, AnnotationSpecification, Given, specify } from '@dna-platform/public';
import { FilePanelGrip as filePanelGrip, FileRail as fileRail } from './7-the-rail~code.tsx';
import { FilePanel as filePanel } from './11-the-panel~code.tsx';
import { CodeForward as codeForward, Split as split, WordsForward as wordsForward } from './10-the-manual~annotations.tsx';

export class $Manual extends $Format {
    specification = new ManualSpecification();
    $openFile: $Append | undefined = undefined;
    spread: ElementType = selection.div`
        --night: color-mix(in oklch, #0f2a33 55%, #2b363c);
        --dusk: color-mix(in oklch, #17363f 55%, #343f45);
        --dawn: color-mix(in oklch, #17363f 40%, #4a5560);
        --glow: #d6e1e3;
        --dim: color-mix(in oklch, #d8c48e 38%, #17363f);
        --brass: color-mix(in oklch, #d8c48e 72%, white);
        .pd-book.pa-light-code & {
            --night: #f6f7f4;
            --dusk: #eceee8;
            --dawn: #ffffff;
            --glow: #2b363c;
            --dim: color-mix(in oklch, #5d4a16 45%, white);
            --brass: #5d4a16;
        }
        .pd-book &.pd-container:not(.pa-open) { display: none; }
        .pd-book &.pd-container.pa-open {
            display: grid;
            grid-template-columns: minmax(0, 1fr) 0 calc(2 * ${({ theme }) => theme.space});
            grid-template-areas: 'words panel rail';
            min-height: calc(100vh - ${({ theme }) => theme.barHeight});
            transition: grid-template-columns 0.28s ease;
        }
        .pd-book.pa-split &.pd-container.pa-open { grid-template-columns: minmax(380px, 1fr) min(44vw, 720px) calc(2 * ${({ theme }) => theme.space}); }
        .pd-book.pa-code-forward &.pd-container.pa-open {
            grid-template-areas: 'panel panel grip';
            grid-template-columns: minmax(0, 1fr) 0 calc(${({ theme }) => theme.space} * 0.75);
            height: calc(100vh - ${({ theme }) => theme.barHeight});
        }
        .pd-book & .pd-words { grid-area: words; min-width: 0; overflow: hidden; }
        .pd-book.pa-code-forward & .pd-words { display: none; }
        .pd-book & .pd-file-panel { grid-area: panel; }
        .pd-book & .pd-file-rail { grid-area: rail; }
        .pd-book.pa-code-forward & .pd-file-rail { display: none; }
        .pd-book & .pd-file-panel-grip { grid-area: grip; display: none; }
        .pd-book.pa-code-forward & .pd-file-panel-grip { display: block; }
        .pd-book & .pd-words { padding: calc(${({ theme }) => theme.space} * 0.9167) calc(${({ theme }) => theme.space} * 1.5) calc(${({ theme }) => theme.space} * 1.6667); font-size: ${({ theme }) => theme.size}; }
        .pd-book.pa-split & .pd-words { padding: calc(${({ theme }) => theme.space} * 0.9167) calc(${({ theme }) => theme.space} * 1.1667) calc(${({ theme }) => theme.space} * 1.6667) calc(${({ theme }) => theme.space} * 1.3333); }
        .pd-book & .pd-words .pd-chapter { max-width: ${({ theme }) => theme.measure}; margin: 0; }
        .pd-book & .pd-words .pd-title {
            margin: 0 0 calc(${({ theme }) => theme.space} / 4);
            font-family: ${({ theme }) => theme.font};
            font-size: calc(1.7143 * ${({ theme }) => theme.size});
            font-weight: 600;
            line-height: 1.2;
            letter-spacing: -0.02em;
            color: ${({ theme }) => theme.heading};
        }
        .pd-book & .pd-words .pd-paragraph.pa-brief {
            display: block;
            max-width: 72ch;
            margin: 0 0 calc(${({ theme }) => theme.space} * 0.4167);
            font-family: ${({ theme }) => theme.serif};
            font-size: calc(1.1071 * ${({ theme }) => theme.size});
            font-style: italic;
            line-height: 1.5;
            color: ${({ theme }) => theme.soft};
        }
        .pd-book & .pd-words .pd-section { margin: calc(${({ theme }) => theme.space} * 1.0833) 0 0; }
        .pd-book & .pd-words .pd-heading {
            margin: 0 0 calc(${({ theme }) => theme.space} / 3);
            padding: 0 0 calc(${({ theme }) => theme.space} / 4);
            border: 0;
            border-block-end: thin solid ${({ theme }) => theme.line};
            border-image: linear-gradient(90deg, var(--brass) 0 calc(${({ theme }) => theme.space} * 1.6667), ${({ theme }) => theme.line} calc(${({ theme }) => theme.space} * 1.6667)) 1;
            font-family: ${({ theme }) => theme.font};
            font-size: calc(0.7857 * ${({ theme }) => theme.size});
            font-weight: 600;
            line-height: 1.3;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            color: ${({ theme }) => theme.sideDim};
        }
        .pd-book & .pd-words .pd-paragraph { margin: calc(${({ theme }) => theme.space} / 3) 0; }
        .pd-book & .pd-words .pd-paragraph .pa-reference { color: var(--band-ink); text-decoration: underline; text-decoration-color: color-mix(in oklch, var(--band-ink) 35%, white); text-underline-offset: 2px; transition: text-decoration-color ${({ theme }) => theme.beat} ease; }
        .pd-book & .pd-words .pd-paragraph .pa-reference:hover { text-decoration-color: var(--band-ink); }
        .pd-book & .pd-words .pa-self-reference { color: inherit; text-decoration: none; }
        .pd-book & .pd-words .pd-paragraph.pd-turn { display: flex; justify-content: space-between; gap: ${({ theme }) => theme.space}; margin: calc(${({ theme }) => theme.space} * 1.0833) 0 0; font-size: calc(0.7857 * ${({ theme }) => theme.size}); }
        .pd-book & .pd-words .pd-turn .pd-count { color: ${({ theme }) => theme.faint}; }
        .pd-book & .pd-words .pd-icon {
            float: inline-start;
            width: calc(1.571 * ${({ theme }) => theme.size});
            height: calc(1.571 * ${({ theme }) => theme.size});
            margin: calc(${({ theme }) => theme.space} * 0.1417) calc(${({ theme }) => theme.space} * 0.4167) 0 0;
        }
        .pd-book & .pd-words .pd-paragraph .pd-svg { display: block; width: calc(${({ theme }) => theme.space} * 4); height: calc(${({ theme }) => theme.space} * 4); }
        @media (max-width: ${({ theme }) => theme.narrow}) {
            .pd-book &.pd-container.pa-open, .pd-book.pa-split &.pd-container.pa-open, .pd-book.pa-code-forward &.pd-container.pa-open { display: block; height: auto; min-height: 0; }
            .pd-book & .pd-file-rail, .pd-book & .pd-file-panel-grip { display: none; }
            .pd-book.pa-code-forward & .pd-words { display: block; }
            .pd-book & .pd-words { padding: calc(${({ theme }) => theme.space} * 0.83) calc(${({ theme }) => theme.space} * 0.67) calc(${({ theme }) => theme.space} / 3); }
            .pd-book & .pd-words .pd-title { font-size: calc(1.5 * ${({ theme }) => theme.size}); }
        }
    `;
    get files(): $Append[] { return (this.parent as $Chapter).annotations.find($Append).reverse(); }
    get openFile(): $Append | undefined { return this.$openFile ?? this.files[0]; }
    get filePanelStates(): Given<$Annotation>[] {
        return [wordsForward, split, codeForward];
    }

    $Manual(...chemicals: $Chemical[]) {
        this.$Format(...chemicals);
        const Spread = this.spread;
        const FilePanel = $(filePanel);
        const FileRail = $(fileRail);
        const FilePanelGrip = $(filePanelGrip);
        this.style = ({ className, children }: { className?: string; children?: ReactNode }) => {
            const chapter = this.parent as $Chapter;
            const open = [...chapter.classes].includes('pa-open');
            return (
                <Spread className={`${className ?? ''}${open ? ' pa-open' : ''}`.trim()}>
                    <div className="pd-words">
                        {children}
                    </div>
                    {open ? (
                        <>
                            <FilePanel chapter={chapter} />
                            <FileRail chapter={chapter} />
                            <FilePanelGrip
                                chapter={chapter}
                                annotation={split}
                                family={this.filePanelStates}
                            />
                        </>
                    ) : undefined}
                </Spread>
            );
        };
    }

    override defines(writing: $Writing): void {
        super.defines(writing);
        writing.classes.add(this, 'pa-manual');
    }

    override erase(writing: $Writing): void {
        super.erase(writing);
        writing.classes.revert(this);
    }
}

export class ManualSpecification extends AnnotationSpecification {
    @specify('a manual is a chapter read beside its files')
    $isAChapter(writing: $Writing): void {
        $check(writing instanceof $Chapter, 'a manual is a chapter read beside its files, and this is not a chapter');
    }
}

export const Manual = $($Manual);
