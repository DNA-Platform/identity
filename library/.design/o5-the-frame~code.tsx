import { ReactNode } from 'react';
import { $ } from '@dna-platform/chemistry';
import { $Annotation, $Chapter, Given, Theme } from '@dna-platform/public';
import { $LibraryBook, BothBars as bothBars, Cards as cards, Dark as dark, Light as light, Rail as rail, SideBar as sideBar, Tab as tab, TopBar as topBar, TwoBars as twoBars } from '../.manual/.book';
import { Gallery } from './o4-the-gallery~code.tsx';
import { GalleryMode as galleryMode, LibraryMode as libraryMode } from './o5-the-frame~theme.tsx';

export class $Design extends $LibraryBook {
    get modes(): Given<$Annotation>[] {
        return [libraryMode, galleryMode];
    }
    get gallery(): $Chapter | undefined {
        return this.chapters.find(chapter => chapter.is(Gallery));
    }
    override get open(): $Chapter | undefined {
        return super.open ?? this.gallery;
    }

    override switches(): ReactNode {
        const Tab = $(tab);
        return (
            <>
                <Tab
                    chapter={this.cover}
                    of={libraryMode}
                    among={this.modes}
                >
                    library
                </Tab>
                <Tab
                    chapter={this.cover}
                    of={galleryMode}
                    among={this.modes}
                >
                    gallery
                </Tab>
                <Tab
                    chapter={this.cover}
                    of={bothBars}
                    among={this.arrangements}
                >
                    both
                </Tab>
                <Tab
                    chapter={this.cover}
                    of={sideBar}
                    among={this.arrangements}
                >
                    side
                </Tab>
                <Tab
                    chapter={this.cover}
                    of={topBar}
                    among={this.arrangements}
                >
                    top
                </Tab>
                <Tab
                    chapter={this.cover}
                    of={twoBars}
                    among={this.arrangements}
                >
                    two
                </Tab>
                <Tab
                    chapter={this.cover}
                    of={rail}
                    among={this.arrangements}
                >
                    rail
                </Tab>
                <Tab
                    chapter={this.cover}
                    of={cards}
                    among={this.arrangements}
                >
                    cards
                </Tab>
                <Tab
                    chapter={this.cover}
                    of={dark}
                    among={this.tones}
                >
                    dark
                </Tab>
                <Tab
                    chapter={this.cover}
                    of={light}
                    among={this.tones}
                >
                    light
                </Tab>
                {super.switches()}
            </>
        );
    }
}

export const Design = $($Design);
$(Design, Theme)(galleryMode);
