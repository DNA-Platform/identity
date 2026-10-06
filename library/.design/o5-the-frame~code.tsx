import { ReactNode } from 'react';
import { $ } from '@dna-platform/chemistry';
import { $Chapter, Theme } from '@dna-platform/public';
import { $LibraryBook, BothBars as bothBars, Cards as cards, Dark as dark, Light as light, Rail as rail, SideBar as sideBar, Tab as tab, Tone as tone, TopBar as topBar, TwoBars as twoBars, WhiteOverBlack as whiteOverBlack } from '../.manual/.book';
import { Gallery } from './o4-the-gallery~code.tsx';
import { DesignTheme } from './o5-the-frame~theme.tsx';

export class $Design extends $LibraryBook {
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
                <Tab
                    chapter={this.cover}
                    of={whiteOverBlack}
                    among={this.tones}
                >
                    white over black
                </Tab>
                {super.switches()}
            </>
        );
    }
}

export const Design = $($Design);
$(Design, Theme)(DesignTheme);
$(Design, tone)(light);
