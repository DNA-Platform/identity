import { $ } from '@dna-platform/chemistry';
import { $Annotation, $Writing } from '@dna-platform/public';
import { OfABookSpecification } from './1-the-book~said.tsx';

export class $Tone extends $Annotation {
    specification = new OfABookSpecification();

    override defines(writing: $Writing): void {
        for (const annotation of writing.annotations.after(this))
            if (annotation instanceof $Tone)
                writing.annotations.express(annotation, false);
        writing.classes.add(this, 'pa-tone');
    }

    override erase(writing: $Writing): void {
        writing.classes.revert(this);
    }
}

export class $Dark extends $Tone {
    override defines(writing: $Writing): void {
        super.defines(writing);
        writing.classes.add(this, 'pa-dark');
    }
}

export class $Light extends $Tone {
    override defines(writing: $Writing): void {
        super.defines(writing);
        writing.classes.add(this, 'pa-light');
    }
}

export const Tone = $($Tone);
export const Dark = $($Dark);
export const Light = $($Light);
