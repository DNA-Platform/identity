import { $ } from '@dna-platform/chemistry';
import { $Annotation, $Writing } from '@dna-platform/public';

export class $Frame extends $Annotation {
    override defines(writing: $Writing): void {
        for (const annotation of writing.annotations.after(this))
            if (annotation instanceof $Frame)
                writing.annotations.express(annotation, false);
    }

    override erase(writing: $Writing): void {
        writing.classes.revert(this);
    }
}

export class $SideBar extends $Frame {
    override defines(writing: $Writing): void {
        super.defines(writing);
        writing.classes.add(this, 'pa-side-bar');
    }
}

export const Frame = $($Frame);
export const SideBar = $($SideBar);
