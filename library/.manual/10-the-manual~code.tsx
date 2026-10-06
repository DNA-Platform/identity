import { ReactNode } from 'react';
import { $, $check, selection } from '@dna-platform/chemistry';
import { $Annotation, $Chapter, $Format, $Paragraph, $Writing, Given, specify } from '@dna-platform/public';
import { $LibraryBook, LibraryBookSpecification } from './1-the-book~code.tsx';
import { OfABookSpecification } from './1-the-book~said.tsx';
import { Tab as tab } from './9-the-switch~code.tsx';
import { Light as light, Tone as tone } from './16-the-tone~code.tsx';
import { $Brief, CodeForward as codeForward, Reading as reading, WordsForward as wordsForward } from './10-the-manual~forward.tsx';

export class $Spread extends $Format {
    specification = new OfABookSpecification();
    themeProvider = true;
    style = selection.div`
        .pa-spread .pd-leaf.pd-open {
            display: grid;
            grid-template-columns: minmax(0, 1fr) calc(2.2 * ${({ theme }) => theme.spreadColumn});
            grid-template-areas: 'words files';
            height: 100%;
            transition: grid-template-columns ${({ theme }) => theme.beat};
        }
        .pa-spread .pd-words { grid-area: words; overflow-y: auto; }
        .pa-spread .pd-files { grid-area: files; overflow-y: auto; min-width: 0; }
        .pa-spread .pd-files:empty { display: none; }
        .pa-spread.pa-words-forward .pd-leaf.pd-open { grid-template-columns: minmax(0, 1fr) calc(2.33 * ${({ theme }) => theme.space}); }
        .pa-spread.pa-words-forward .pd-files { overflow: hidden; }
        .pa-spread.pa-words-forward .pd-paragraph.pd-listing {
            display: flex;
            justify-content: center;
            padding: calc(${({ theme }) => theme.space} * 0.6667) 0 0;
        }
        .pa-spread.pa-words-forward .pd-listing .pd-word {
            writing-mode: vertical-rl;
            padding: 0;
            border-radius: 0;
        }
        .pa-spread.pa-words-forward .pd-listing .pd-code { display: none; }
        .pa-spread.pa-words-forward .pd-words .pd-paragraph.pa-brief { display: none; }
        .pa-spread.pa-code-forward .pd-leaf.pd-open {
            grid-template-columns: minmax(0, 1fr);
            grid-template-areas: 'words' 'files';
            height: auto;
        }
        .pa-spread.pa-code-forward .pd-words, .pa-spread.pa-code-forward .pd-files { overflow: visible; }
        .pa-spread.pa-code-forward .pd-files {
            margin: 0 calc(${({ theme }) => theme.space} * 1.8333) calc(${({ theme }) => theme.space} * 1.6667);
            border-radius: calc(${({ theme }) => theme.space} / 2);
            min-height: calc(${({ theme }) => theme.space} * 17.5);
        }
        .pa-spread.pa-code-forward .pd-words .pd-section { display: none; }
        @media (max-width: ${({ theme }) => theme.narrow}) {
            .pa-spread .pd-leaf.pd-open { display: block; height: auto; }
            .pa-spread.pa-words-forward .pd-listing .pd-word { writing-mode: horizontal-tb; }
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
    get readings(): Given<$Annotation>[] {
        return [codeForward, wordsForward];
    }
    override get open(): $Chapter | undefined {
        return super.open ?? this.pages[0];
    }

    override front(): ReactNode {
        return undefined;
    }

    override switches(): ReactNode {
        const Tab = $(tab);
        return (
            <>
                <Tab
                    chapter={this.cover}
                    of={codeForward}
                    among={this.readings}
                >
                    code
                </Tab>
                <Tab
                    chapter={this.cover}
                    of={wordsForward}
                    among={this.readings}
                >
                    words
                </Tab>
                {super.switches()}
            </>
        );
    }

    protected override $Define(): void {
        super.$Define();
        const Given = $(Spread);
        const Reading = $(reading);
        this.annotations.add(this,
            <Given />,
            <Reading />
        );
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
$(Manual, reading)(wordsForward);
$(Manual, tone)(light);
