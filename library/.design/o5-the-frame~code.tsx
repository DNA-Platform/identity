import { ReactNode } from 'react';
import { $ } from '@dna-platform/chemistry';
import { $Annotation, $Chapter, $Writing, Given, Theme } from '@dna-platform/public';
import { $LibraryBook, $Layout, Layout, Tab as tab } from '../.manual/.book';
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
                {super.switches()}
            </>
        );
    }
}

export class $Frame extends $Layout {
    override defines(writing: $Writing): void {
        super.defines(writing);
        writing.classes.add(this, 'pa-frame');
    }
}

export const Design = $($Design);
export const Frame = $($Frame);
$(Design, Layout)(Frame);
$(Design, Theme)(galleryMode);
