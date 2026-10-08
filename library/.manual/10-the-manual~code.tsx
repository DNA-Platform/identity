import { ReactNode } from 'react';
import { $, $check, selection } from '@dna-platform/chemistry';
import { $Annotation, $Append, $Chapter, $Format, $Paragraph, $Section, $Writing, Given, html, specify } from '@dna-platform/public';
import { $LibraryBook, LibraryBookSpecification } from './1-the-book~code.tsx';
import { OfABookSpecification } from './1-the-book~said.tsx';
import { File as file, Listing as listing, Opened as opened } from './2-the-listing~code.tsx';
import { Switch as switchOf, Tab as tab } from './9-the-switch~code.tsx';
import { $Appendix, Folded as folded, Folder as folder } from './14-the-entry~code.tsx';
import { Light as light, Tone as tone } from './16-the-tone~code.tsx';
import { $Brief, CodeForward as codeForward, LightCode as lightCode, Numbered as numbered, Split as split, WordsForward as wordsForward, Wrapped as wrapped } from './10-the-manual~forward.tsx';

export class $Spread extends $Format {
    specification = new OfABookSpecification();
    themeProvider = true;
    style = selection.div`
        .pa-spread .pd-leaf.pd-open {
            display: grid;
            grid-template-columns: minmax(0, 1fr) 0 calc(2 * ${({ theme }) => theme.space});
            grid-template-areas: 'words panel rail';
            min-height: calc(100vh - ${({ theme }) => theme.barHeight});
            transition: grid-template-columns 0.28s ease;
        }
        .pa-spread.pa-split .pd-leaf.pd-open { grid-template-columns: minmax(380px, 1fr) min(44vw, 720px) calc(2 * ${({ theme }) => theme.space}); }
        .pa-spread.pa-code-forward .pd-leaf.pd-open {
            grid-template-areas: 'panel panel grip';
            grid-template-columns: minmax(0, 1fr) 0 calc(${({ theme }) => theme.space} * 0.75);
            height: calc(100vh - ${({ theme }) => theme.barHeight});
        }
        .pa-spread .pd-words { grid-area: words; min-width: 0; overflow: hidden; }
        .pa-spread.pa-code-forward .pd-words { display: none; }
        .pa-spread .pd-files { grid-area: panel; display: grid; grid-template-rows: auto minmax(0, 1fr); min-width: 0; overflow: hidden; }
        .pa-spread .pd-rail { grid-area: rail; }
        .pa-spread.pa-code-forward .pd-rail { display: none; }
        .pa-spread .pd-grip { grid-area: grip; display: none; }
        .pa-spread.pa-code-forward .pd-grip { display: block; }
        @media (max-width: ${({ theme }) => theme.narrow}) {
            .pa-spread .pd-leaf.pd-open, .pa-spread.pa-split .pd-leaf.pd-open, .pa-spread.pa-code-forward .pd-leaf.pd-open { display: block; height: auto; min-height: 0; }
            .pa-spread .pd-rail, .pa-spread .pd-grip { display: none; }
            .pa-spread.pa-code-forward .pd-words { display: block; }
        }
    `;

    override defines(writing: $Writing): void {
        super.defines(writing);
        writing.classes.add(this, 'pa-spread');
    }

    override erase(writing: $Writing): void {
        super.erase(writing);
        writing.classes.revert(this);
    }
}

export const Spread = $($Spread);

export class $Manual extends $LibraryBook {
    override specification = new ManualSpecification();
    $file = '';
    get readings(): Given<$Annotation>[] {
        return [wordsForward, split, codeForward];
    }
    override get open(): $Chapter | undefined {
        return super.open ?? this.pages[0];
    }

    fileOf(chapter: $Chapter): string | undefined {
        const files = this.filesOf(chapter);
        return files.includes(this.$file) ? this.$file : files[0];
    }

    show(chapter: $Chapter, name: string): void {
        this.$file = name;
    }

    override head(): ReactNode {
        return undefined;
    }

    override front(): ReactNode {
        return undefined;
    }

    override switches(): ReactNode {
        return undefined;
    }

    override leaves(): ReactNode {
        const Tab = $(tab);
        const Switch = $(switchOf);
        const File = $(file);
        const Listing = $(listing);
        return this.chapters.map((chapter, index) => {
            const Chapter = $(chapter);
            const files = this.filesOf(chapter);
            const file = this.fileOf(chapter);
            const paragraphs = chapter.text.find($Section).flatMap(section => section.text.find($Paragraph)).slice(0, 16);
            return (
                <div
                    key={index}
                    className={chapter === this.open ? 'pd-leaf pd-open' : 'pd-leaf'}
                >
                    <div className="pd-words">
                        <Chapter />
                    </div>
                    <div className="pd-files">
                        <div className="pd-tabs">
                            {files.map(name => (
                                <File
                                    key={name}
                                    chapter={chapter}
                                    name={name}
                                />
                            ))}
                            <span className="pd-words-tab">
                                <Tab
                                    chapter={this.cover}
                                    of={wordsForward}
                                    among={this.readings}
                                >
                                    words
                                </Tab>
                            </span>
                            <span className="pd-dock pd-to-full">
                                <Tab
                                    chapter={this.cover}
                                    of={codeForward}
                                    among={this.readings}
                                >
                                    full screen
                                </Tab>
                            </span>
                            <span className="pd-dock pd-to-split">
                                <Tab
                                    chapter={this.cover}
                                    of={split}
                                    among={this.readings}
                                >
                                    split
                                </Tab>
                            </span>
                            <span className="pd-options">
                                <Switch
                                    chapter={this.cover}
                                    of={lightCode}
                                >
                                    light
                                </Switch>
                                <Switch
                                    chapter={this.cover}
                                    of={wrapped}
                                >
                                    wrap
                                </Switch>
                                <Switch
                                    chapter={this.cover}
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
                                    is={`${append.$identifier}${append.$type}` === file ? opened : []}
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
                                skeleton
                            />
                        ))}
                    </div>
                    <div className="pd-grip">
                        <Tab
                            chapter={this.cover}
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
                </div>
            );
        });
    }

    protected override $Define(): void {
        super.$Define();
        const Given = $(Spread);
        this.annotations.add(this,
            <Given />
        );
        this.$is = [wordsForward, numbered];
    }

    protected override $Bound(): void {
        const Folder = $(folder);
        for (const section of this.table?.text.find($Section) ?? []) {
            section.annotations.add(this,
                <Folder />
            );
            if (section.is($Appendix)) section.$is = [folded];
        }
        super.$Bound();
    }
}

export class ManualSpecification extends LibraryBookSpecification {
    @specify('every chapter of a manual opens with a brief')
    $everyChapterHasABrief(book: $Manual): void {
        $check(book.chapters.every(chapter => chapter.text.find($Paragraph).some(paragraph => paragraph.is($Brief))),
            'every chapter of a manual opens with a brief, and one here has none');
    }
}

export const Manual = $($Manual);
$(Manual, tone)(light);
