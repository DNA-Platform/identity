import { $ } from '@dna-platform/chemistry';
import { $Writing } from '@dna-platform/public';
import { $Frame } from '../.manual/.book';

export class $Sheet extends $Frame {
    override defines(writing: $Writing): void {
        super.defines(writing);
        writing.classes.add(this, 'pa-sheet');
    }
}

export const Sheet = $($Sheet);
