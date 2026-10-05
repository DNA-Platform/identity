import { $ } from '@dna-platform/chemistry';
import { $Annotation, Theme } from '@dna-platform/public';
import type { Given } from '@dna-platform/public';
import { $TopBars } from './90-the-bars~code.tsx';
import { List as list, Shelf as shelf } from './91-the-shelf~code.tsx';
import { BlackAndSky as blackAndSky } from './92-the-black-and-sky~code.tsx';

export default class $TheCatalogue extends $TopBars {
    override get views(): Given<$Annotation>[][] {
        const Shelf = $(shelf);
        const List = $(list);
        return [...super.views, [Shelf, List]];
    }

    protected override $Define(): void {
        super.$Define();
        const Shelf = $(shelf);
        this.annotations.add(this,
            <Shelf />
        );
    }
}

const TheCatalogue = $($TheCatalogue);
$(TheCatalogue, Theme)(blackAndSky);

export * from './90-the-bars~code.tsx';
export * from './91-the-shelf~code.tsx';
export * from './92-the-black-and-sky~code.tsx';
