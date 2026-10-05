import { ReactNode } from 'react';
import { $ } from '@dna-platform/chemistry';
import { Theme } from '@dna-platform/public';
import { $DougsLibrary } from '../.manual/.book';
import { Paged } from './90-the-pages~code.tsx';
import { Gallery, Masthead as masthead } from './91-the-frame~code.tsx';
import { Viewer as viewer } from './92-the-concept~code.tsx';
import { DesignTheme } from './93-the-theme~code.tsx';

export default class $DougsDesign extends $DougsLibrary {
    override write(): ReactNode {
        const Masthead = $(masthead);
        const Viewer = $(viewer);
        return (
            <>
                <Masthead chapter={this.cover} />
                {super.write()}
                <Viewer chapter={this.cover} />
            </>
        );
    }

    protected override turn(): void {
        const place = this.bookmark === undefined ? this.$bookmark : undefined;
        const spot = place === undefined ? null : document.getElementById(place);
        if (spot === null) window.scrollTo(0, 0);
        else spot.scrollIntoView();
    }

    protected override $Define(): void {
        super.$Define();
        this.annotations.add(this,
            <Gallery />,
            <Paged />
        );
    }
}

const DougsDesign = $($DougsDesign);
$(DougsDesign, Theme)(DesignTheme);

export * from './90-the-pages~code.tsx';
export * from './91-the-frame~code.tsx';
export * from './92-the-concept~code.tsx';
export * from './93-the-theme~code.tsx';
