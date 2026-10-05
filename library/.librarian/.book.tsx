import { $ } from '@dna-platform/chemistry';
import { $Annotation, Theme } from '@dna-platform/public';
import type { Given } from '@dna-platform/public';
import { $Sheet } from './90-the-sheet~code.tsx';
import { Night as night, Paper as paper, White as white } from './91-the-papers~code.tsx';

export default class $DougsStory extends $Sheet {
    override get views(): Given<$Annotation>[][] {
        const Paper = $(paper);
        const Night = $(night);
        const White = $(white);
        return [...super.views, [Paper, Night, White]];
    }
}

const DougsStory = $($DougsStory);
$(DougsStory, Theme)(paper);

export * from './90-the-sheet~code.tsx';
export * from './91-the-papers~code.tsx';
