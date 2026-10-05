import { ReactNode } from 'react';
import { $ } from '@dna-platform/chemistry';
import { $Annotation, Theme } from '@dna-platform/public';
import type { Given } from '@dna-platform/public';
import { $DougsLibrary } from '../.manual/.book';
import { Viewer as viewer } from './92-the-concept~code.tsx';
import { GalleryMode as galleryMode, LibraryMode as libraryMode } from './93-the-theme~code.tsx';

export default class $DougsDesign extends $DougsLibrary {
    override get views(): Given<$Annotation>[][] {
        const LibraryMode = $(libraryMode);
        const GalleryMode = $(galleryMode);
        return [...super.views, [LibraryMode, GalleryMode]];
    }

    override write(): ReactNode {
        const Viewer = $(viewer);
        return (
            <>
                {super.write()}
                <Viewer chapter={this.cover} />
            </>
        );
    }
}

const DougsDesign = $($DougsDesign);
$(DougsDesign, Theme)(libraryMode);

export * from './92-the-concept~code.tsx';
export * from './93-the-theme~code.tsx';
