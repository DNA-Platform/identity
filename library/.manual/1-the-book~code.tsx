import { ReactNode } from 'react';
import { $ } from '@dna-platform/chemistry';
import { $Annotation, $Append, $Book, $Paragraph, Means as means, Theme, reflection } from '@dna-platform/public';
import type { Given } from '@dna-platform/public';
import { DougsTheme } from './2-the-theme~code.tsx';
import { $Paged, Paged as paged } from './7-the-pages~code.tsx';
import { SideBar as sideBar } from './8-the-frames~code.tsx';
import { CodeForward as codeForward, WordsForward as wordsForward } from './11-the-listing~code.tsx';

export class $DougsLibrary extends $Book {
    get views(): Given<$Annotation>[][] {
        const WordsForward = $(wordsForward);
        const CodeForward = $(codeForward);
        return this.annotations.expressed($Paged)?.open?.is($Append) === true ? [[WordsForward, CodeForward]] : [];
    }

    override write(): ReactNode {
        const LibraryTitle = $(libraryTitle);
        const Switch = $(switching);
        return (
            <>
                <LibraryTitle chapter={this.cover} />
                {super.write()}
                <Switch chapter={this.cover} />
            </>
        );
    }

    protected override $Define(): void {
        super.$Define();
        const SideBar = $(sideBar);
        const WordsForward = $(wordsForward);
        const Paged = $(paged);
        this.annotations.add(this,
            <SideBar />,
            <WordsForward />,
            <Paged />
        );
    }
}

export class $LibraryTitle extends $Paragraph {
    override write(): ReactNode {
        const Means = $(means);
        return (
            <Means>$[[ Dougs Library ]]</Means>
        );
    }

    protected override $Define(): void {
        super.$Define();
        this.classes.add(this, 'pd-library-title');
    }
}

export class $Switch extends $Paragraph {
    get library(): $DougsLibrary | undefined {
        const book = this.book;
        return book instanceof $DougsLibrary ? book : undefined;
    }

    override write(): ReactNode {
        const library = this.library;
        if (library === undefined) return null;
        return (
            <>
                {library.views.map((views, index) => (
                    <span
                        key={index}
                        className="pd-views"
                    >
                        {views.map(view => (
                            <button
                                key={this.says(view)}
                                type="button"
                                className={view === this.shown(views) ? 'pd-view pa-shown' : 'pd-view'}
                                onClick={() => this.shows(views, view)}
                            >
                                {this.says(view)}
                            </button>
                        ))}
                    </span>
                ))}
            </>
        );
    }

    shown(views: Given<$Annotation>[]): Given<$Annotation> | undefined {
        const given = [this.library?.$is ?? []].flat();
        return given.find(annotation => views.includes(annotation)) ?? views[0];
    }

    shows(views: Given<$Annotation>[], view: Given<$Annotation>): void {
        const library = this.library;
        if (library === undefined) return;
        library.$is = [...[library.$is].flat().filter(annotation => !views.includes(annotation)), view];
    }

    says(view: Given<$Annotation>): string {
        return reflection.name(view).replace(/([a-z])([A-Z])/gu, '$1 $2').toLowerCase();
    }

    protected override $Define(): void {
        super.$Define();
        this.classes.add(this, 'pd-switch');
    }
}

export const DougsLibrary = $($DougsLibrary);
export const LibraryTitle = $($LibraryTitle);
const libraryTitle = LibraryTitle;
export const Switch = $($Switch);
const switching = Switch;
$(DougsLibrary, Theme)(DougsTheme);
