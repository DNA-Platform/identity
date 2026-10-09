import { ElementType, ReactNode } from 'react';
import { $, $check, $Chemical, selection } from '@dna-platform/chemistry';
import { $Annotation, $Append, $Chapter, $Format, $Paragraph, $Section, $Writing, AnnotationSpecification, Given, html, specify } from '@dna-platform/public';
import type { $LibraryBook } from './1-the-book~code.tsx';
import { File as file, Listing as listing } from './2-the-listing~code.tsx';
import { Switch as switchOf, Tab as tab } from './9-the-switch~code.tsx';
import { $Index, Folded as folded, Twist as twist, leads } from './14-the-entry~code.tsx';
import { CodeForward as codeForward, LightCode as lightCode, Numbered as numbered, Split as split, WordsForward as wordsForward, Wrapped as wrapped } from './10-the-manual~forward.tsx';

export class $Manual extends $Format {
    specification = new ManualSpecification();
    themeProvider = true;
    $file = '';
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
        .pd-book .pd-leaf.pd-open & {
            display: grid;
            grid-template-columns: minmax(0, 1fr) 0 calc(2 * ${({ theme }) => theme.space});
            grid-template-areas: 'words panel rail';
            min-height: calc(100vh - ${({ theme }) => theme.barHeight});
            transition: grid-template-columns 0.28s ease;
        }
        .pd-book.pa-split .pd-leaf.pd-open & { grid-template-columns: minmax(380px, 1fr) min(44vw, 720px) calc(2 * ${({ theme }) => theme.space}); }
        .pd-book.pa-code-forward .pd-leaf.pd-open & {
            grid-template-areas: 'panel panel grip';
            grid-template-columns: minmax(0, 1fr) 0 calc(${({ theme }) => theme.space} * 0.75);
            height: calc(100vh - ${({ theme }) => theme.barHeight});
        }
        .pd-book & .pd-words { grid-area: words; min-width: 0; overflow: hidden; }
        .pd-book.pa-code-forward & .pd-words { display: none; }
        .pd-book & .pd-files { grid-area: panel; display: grid; grid-template-rows: auto minmax(0, 1fr); min-width: 0; overflow: hidden; }
        .pd-book & .pd-rail { grid-area: rail; }
        .pd-book.pa-code-forward & .pd-rail { display: none; }
        .pd-book & .pd-grip { grid-area: grip; display: none; }
        .pd-book.pa-code-forward & .pd-grip { display: block; }
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
        .pd-book & .pd-rail {
            display: flex;
            flex-direction: column;
            align-items: stretch;
            gap: calc(${({ theme }) => theme.space} / 12);
            padding: calc(${({ theme }) => theme.space} * 0.4167) 0;
            background: linear-gradient(90deg, color-mix(in oklch, var(--night) 82%, white) 0%, var(--night) 22%);
            box-shadow: inset 1px 0 0 rgba(255, 255, 255, 0.08);
            transition: background ${({ theme }) => theme.beat} ease;
        }
        .pd-book & .pd-rail .pd-file {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: calc(${({ theme }) => theme.space} * 0.4167);
            padding: calc(${({ theme }) => theme.space} * 0.4167) 0 calc(${({ theme }) => theme.space} / 3);
            border: 0;
            border-inline-start: 2px solid transparent;
            background: none;
            font-family: ${({ theme }) => theme.mono};
            font-size: calc(0.7857 * ${({ theme }) => theme.size});
            font-weight: 500;
            line-height: 1;
            letter-spacing: 0.04em;
            color: color-mix(in oklch, var(--glow) 66%, var(--night));
            cursor: pointer;
            transition: background ${({ theme }) => theme.beat} ease, color ${({ theme }) => theme.beat} ease, border-color ${({ theme }) => theme.beat} ease;
        }
        .pd-book & .pd-rail .pd-file .pd-file-name { writing-mode: vertical-rl; }
        .pd-book & .pd-rail .pd-file .pd-drawing { width: calc(0.9286 * ${({ theme }) => theme.size}); height: calc(0.9286 * ${({ theme }) => theme.size}); color: #9aa4b3; }
        .pd-book & .pd-rail .pd-file svg { display: block; width: 100%; height: 100%; }
        .pd-book & .pd-rail .pd-skeleton { display: flex; flex-direction: column; align-items: flex-start; gap: 3px; width: calc(${({ theme }) => theme.space} * 1.0833); margin-block-start: 2px; opacity: 0.55; transition: opacity ${({ theme }) => theme.beat} ease; }
        .pd-book & .pd-rail .pd-skeleton i { display: block; height: 2px; border-radius: 1px; background: color-mix(in oklch, var(--brass) 60%, var(--glow)); }
        .pd-book & .pd-rail .pd-file:hover { color: var(--glow); background: var(--dusk); }
        .pd-book & .pd-rail .pd-word.pd-switch[aria-pressed='true'] { color: color-mix(in oklch, var(--glow) 66%, var(--night)); border-color: transparent; background: none; }
        .pd-book.pa-split & .pd-rail .pd-file[aria-pressed='true'] { color: var(--glow); border-inline-start-color: var(--foot); background: var(--dusk); }
        .pd-book & .pd-rail .pd-file:hover .pd-skeleton, .pa-split & .pd-rail .pd-file[aria-pressed='true'] .pd-skeleton { opacity: 0.9; }
        .pd-book & .pd-grip { position: relative; background: linear-gradient(90deg, #f3f1eb 0%, #fbfaf6 10px); border-inline-start: thin solid #e6e2d8; transition: background ${({ theme }) => theme.beat} ease; }
        .pd-book & .pd-grip:hover { background: linear-gradient(90deg, #ece9e1 0%, #ffffff 10px); }
        .pd-book & .pd-grip .pd-word.pd-switch { display: block; width: 100%; height: 100%; padding: 0; border: 0; border-radius: 0; background: none; cursor: pointer; }
        .pd-book & .pd-grip .pd-skeleton { position: absolute; top: calc(${({ theme }) => theme.space} * 0.5833); left: 5px; display: flex; flex-direction: column; gap: 3px; width: 8px; opacity: 0.7; }
        .pd-book & .pd-grip .pd-skeleton i { display: block; height: 2px; border-radius: 1px; background: #cfcbc0; }
        .pd-book & .pd-files {
            background: linear-gradient(90deg, color-mix(in oklch, var(--night) 90%, white) 0%, var(--night) 36px);
            color: var(--glow);
            box-shadow: -10px 0 18px -16px rgba(43, 54, 60, 0.5);
            transition: background ${({ theme }) => theme.beat} ease, color ${({ theme }) => theme.beat} ease;
        }
        .pd-book.pa-code-forward & .pd-files { box-shadow: none; }
        .pd-book & .pd-tabs {
            display: flex;
            align-items: stretch;
            gap: 1px;
            padding: 0 0 0 2px;
            background: linear-gradient(180deg, color-mix(in oklch, var(--dusk) 88%, white) 0%, var(--dusk) 100%);
            border-block-end: thin solid color-mix(in oklch, var(--foot) 28%, var(--dusk));
        }
        .pd-book & .pd-tabs .pd-file {
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
        .pd-book & .pd-tabs .pd-file .pd-drawing { width: calc(0.9286 * ${({ theme }) => theme.size}); height: calc(0.9286 * ${({ theme }) => theme.size}); color: #9aa4b3; }
        .pd-book & .pd-tabs .pd-file svg { display: block; width: 100%; height: 100%; }
        .pd-book & .pd-tabs .pd-file:hover { color: var(--glow); }
        .pd-book & .pd-tabs .pd-file[aria-pressed='true'] { color: var(--glow); background: var(--night); border-block-start-color: var(--foot); }
        .pd-book & .pd-tabs .pd-file[aria-pressed='true'] .pd-drawing { color: var(--colour); }
        .pd-book & .pd-tabs .pd-words-tab, .pd-tabs .pd-dock { display: flex; align-items: center; }
        .pd-book & .pd-tabs .pd-dock { margin-inline-start: auto; }
        .pd-book & .pd-tabs .pd-words-tab .pd-word.pd-switch, .pd-tabs .pd-dock .pd-word.pd-switch {
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
        .pd-book & .pd-tabs .pd-dock .pd-word.pd-switch { color: var(--brass); }
        .pd-book & .pd-tabs .pd-words-tab .pd-word.pd-switch:hover, .pd-tabs .pd-dock .pd-word.pd-switch:hover { color: var(--glow); }
        .pd-book & .pd-tabs .pd-dock .pd-word.pd-switch::before { content: ''; width: 9px; height: 9px; border: 1.5px solid currentColor; border-radius: 1px; box-shadow: 3px 3px 0 -1.5px currentColor; }
        .pd-book & .pd-tabs .pd-to-split { display: none; }
        .pd-book.pa-code-forward & .pd-tabs .pd-to-full, .pa-code-forward & .pd-tabs .pd-words-tab { display: none; }
        .pd-book.pa-code-forward & .pd-tabs .pd-to-split { display: flex; }
        .pd-book.pa-code-forward & .pd-tabs .pd-dock .pd-word.pd-switch::before { box-shadow: -3px 3px 0 -1.5px currentColor; }
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
        .pd-book & .pd-listings { display: grid; grid-template-rows: minmax(0, 1fr); align-content: start; min-height: 0; overflow: hidden; }
        .pd-book & .pd-listings .pd-container { display: contents; }
        .pd-book & .pd-paragraph.pd-listing { display: none; margin: 0; padding: 0; min-height: 0; }
        .pd-book & .pd-listing.pa-opened { display: block; overflow: auto; scrollbar-width: thin; scrollbar-color: transparent transparent; transition: scrollbar-color ${({ theme }) => theme.beat} ease; }
        .pd-book & .pd-listing.pa-opened:hover { scrollbar-color: var(--dim) transparent; }
        .pd-book & .pd-listing .pd-word { display: none; }
        .pd-book & .pd-listing .pd-code {
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
        .pd-book.pa-code-forward & .pd-listing .pd-code { cursor: default; }
        .pd-book & .pd-listing .pd-code code { background: transparent; color: inherit; }
        .pd-book & .pd-code-line { display: block; padding-inline-end: calc(${({ theme }) => theme.space} * 0.75); white-space: pre; }
        .pd-book.pa-wrapped & .pd-code-line { white-space: pre-wrap; padding-inline-start: calc(${({ theme }) => theme.space} * 2.4167); text-indent: calc(${({ theme }) => theme.space} * -2.4167); }
        .pd-book & .pd-code-line::before { content: attr(data-line); display: inline-block; width: calc(${({ theme }) => theme.space} * 1.8333); padding-inline-end: calc(${({ theme }) => theme.space} * 0.5833); text-align: end; color: var(--dim); user-select: none; text-indent: 0; }
        .pd-book:not(.pa-numbered) & .pd-code-line::before { content: ''; width: calc(${({ theme }) => theme.space} * 0.5833); padding: 0; }
        .pd-book.pa-light-code & .hljs-keyword, .pa-light-code & .hljs-built_in, .pa-light-code & .hljs-literal { color: #5a4fa8; }
        .pd-book.pa-light-code & .hljs-string, .pa-light-code & .hljs-regexp, .pa-light-code & .hljs-number { color: #2f7f6e; }
        .pd-book.pa-light-code & .hljs-title, .pa-light-code & .hljs-type, .pa-light-code & .hljs-tag, .pa-light-code & .hljs-name, .pa-light-code & .hljs-attr { color: #23407a; }
        .pd-book.pa-light-code & .hljs-comment, .pa-light-code & .hljs-meta { color: #8a94a3; }
        @media (max-width: ${({ theme }) => theme.narrow}) {
            .pd-book .pd-leaf.pd-open &, .pd-book.pa-split .pd-leaf.pd-open &, .pd-book.pa-code-forward .pd-leaf.pd-open & { display: block; height: auto; min-height: 0; }
            .pd-book & .pd-rail, .pd-book & .pd-grip { display: none; }
            .pd-book.pa-code-forward & .pd-words { display: block; }
            .pd-book & .pd-words { padding: calc(${({ theme }) => theme.space} * 0.83) calc(${({ theme }) => theme.space} * 0.67) calc(${({ theme }) => theme.space} / 3); }
            .pd-book & .pd-words .pd-title { font-size: calc(1.5 * ${({ theme }) => theme.size}); }
            .pd-book & .pd-files { box-shadow: none; }
        }
    `;
    get files(): string[] { return (this.book as $LibraryBook).filesOf(this.parent as $Chapter); }
    get file(): string {
        const files = this.files;
        return files.includes(this.$file) ? this.$file : files[0] ?? '';
    }
    get readings(): Given<$Annotation>[] {
        return [wordsForward, split, codeForward];
    }
    get context(): string { return 'pa-built'; }
    get rows(): $Paragraph[] {
        const chapter = this.parent as $Chapter;
        const entries = this.book?.table?.annotations.expressed($Index)?.entries ?? [];
        return entries.filter(paragraph => leads(paragraph)?.identifier === chapter.mention?.identifier);
    }

    $Manual(...chemicals: $Chemical[]) {
        this.$Format(...chemicals);
        const Spread = this.spread;
        const Tab = $(tab);
        const Switch = $(switchOf);
        const File = $(file);
        const Listing = $(listing);
        this.style = ({ className, children }: { className?: string; children?: ReactNode }) => {
            const chapter = this.parent as $Chapter;
            const book = this.book as $LibraryBook;
            const files = this.files;
            const paragraphs = chapter.text.find($Section).flatMap(section => section.text.find($Paragraph)).slice(0, 16);
            return (
                <Spread className={className}>
                    <div className="pd-words">
                        {children}
                    </div>
                    <div className="pd-files">
                        <div className="pd-tabs">
                            {files.map(name => (
                                <File
                                    key={name}
                                    chapter={chapter}
                                    name={name}
                                    manual={this}
                                />
                            ))}
                            <span className="pd-words-tab">
                                <Tab
                                    chapter={book.cover}
                                    of={wordsForward}
                                    among={this.readings}
                                >
                                    words
                                </Tab>
                            </span>
                            <span className="pd-dock pd-to-full">
                                <Tab
                                    chapter={book.cover}
                                    of={codeForward}
                                    among={this.readings}
                                >
                                    full screen
                                </Tab>
                            </span>
                            <span className="pd-dock pd-to-split">
                                <Tab
                                    chapter={book.cover}
                                    of={split}
                                    among={this.readings}
                                >
                                    split
                                </Tab>
                            </span>
                            <span className="pd-options">
                                <Switch
                                    chapter={book.cover}
                                    of={lightCode}
                                >
                                    light
                                </Switch>
                                <Switch
                                    chapter={book.cover}
                                    of={wrapped}
                                >
                                    wrap
                                </Switch>
                                <Switch
                                    chapter={book.cover}
                                    of={numbered}
                                >
                                    lines
                                </Switch>
                            </span>
                        </div>
                        <div className="pd-listings">
                            {chapter.annotations.find($Append).reverse().map((append, index) => (
                                <Listing
                                    key={index}
                                    chapter={chapter}
                                    identifier={append.$identifier}
                                    type={append.$type}
                                    reading={codeForward}
                                    among={this.readings}
                                    manual={this}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="pd-rail">
                        {files.map(name => (
                            <File
                                key={name}
                                chapter={chapter}
                                name={name}
                                of={split}
                                among={this.readings}
                                manual={this}
                                skeleton
                            />
                        ))}
                    </div>
                    <div className="pd-grip">
                        <Tab
                            chapter={book.cover}
                            of={split}
                            among={this.readings}
                        >
                            <span className="pd-skeleton">
                                {paragraphs.map((paragraph, index) => (
                                    <i
                                        key={index}
                                        style={{ width: `${Math.max(25, Math.min(100, html.copy(paragraph.text).length / 4))}%` }}
                                    />
                                ))}
                            </span>
                        </Tab>
                    </div>
                </Spread>
            );
        };
    }

    show(name: string): void {
        this.$file = name;
    }

    override defines(writing: $Writing): void {
        super.defines(writing);
        writing.classes.add(this, 'pa-manual');
    }

    override erase(writing: $Writing): void {
        super.erase(writing);
        writing.classes.revert(this);
    }

    protected override $Bound(): void {
        const Twist = $(twist);
        const File = $(file);
        const chapter = this.parent as $Chapter;
        const files = this.files;
        for (const paragraph of this.rows)
            paragraph.text.add(this,
                <Twist
                    target={files.length === 0 ? undefined : paragraph}
                    of={folded}
                />,
                ...files.map(name => (
                    <File
                        chapter={chapter}
                        name={name}
                        of={split}
                        among={this.readings}
                        manual={this}
                    />
                ))
            );
        super.$Bound();
    }
}

export class ManualSpecification extends AnnotationSpecification {
    @specify('a manual is said of a chapter')
    $saidOfAChapter(writing: $Writing): void {
        $check(writing instanceof $Chapter, 'a manual is said of a chapter, and this is not one');
    }
}

export const Manual = $($Manual);
