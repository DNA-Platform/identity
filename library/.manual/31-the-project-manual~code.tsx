import { $ } from '@dna-platform/chemistry';
import { $Chapter, $Synopsis } from '@dna-platform/public';
import { $Manual } from './10-the-manual~book.tsx';

export class $ProjectManual extends $Manual {
    get entries(): $Chapter[] {
        return this.text.find($Chapter).filter(chapter => chapter.is($Synopsis) && chapter !== this.synopsis);
    }
    override get laidOutChapters(): ($Chapter | undefined)[] {
        return [...super.laidOutChapters, ...this.entries];
    }
    override get pages(): $Chapter[] {
        return [...super.pages, ...this.entries];
    }
}

export const ProjectManual = $($ProjectManual);
