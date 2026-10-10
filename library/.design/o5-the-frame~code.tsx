import { ReactNode } from 'react';
import { $ } from '@dna-platform/chemistry';
import { $Chapter, Theme } from '@dna-platform/public';
import { $LibraryBook, Dark as dark, Light as light, Tab as tab, Tone as tone } from '../.manual/.book';
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
                    annotation={dark}
                    family={this.tones}
                >
                    cobalt
                </Tab>
                <Tab
                    chapter={this.cover}
                    annotation={light}
                    family={this.tones}
                >
                    white
                </Tab>
            </>
        );
    }
}

export const Design = $($Design);
$(Design, Theme)(DesignTheme);
$(Design, tone)(dark);
