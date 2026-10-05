import { $ } from '@dna-platform/chemistry';
import { $Annotation, $Writing } from '@dna-platform/public';

export class $Arrangement extends $Annotation {
    override defines(writing: $Writing): void {
        for (const annotation of writing.annotations.after(this))
            if (annotation instanceof $Arrangement)
                writing.annotations.express(annotation, false);
    }

    override erase(writing: $Writing): void {
        writing.classes.revert(this);
    }
}

export class $Shelf extends $Arrangement {
    override defines(writing: $Writing): void {
        super.defines(writing);
        writing.classes.add(this, 'pa-shelf');
    }
}

export class $List extends $Arrangement {
    override defines(writing: $Writing): void {
        super.defines(writing);
        writing.classes.add(this, 'pa-list');
    }
}

export const Arrangement = $($Arrangement);
export const Shelf = $($Shelf);
export const List = $($List);
