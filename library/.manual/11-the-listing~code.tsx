import { $, $check } from '@dna-platform/chemistry';
import { $Annotation, $Append, $Section, $Writing, AnnotationSpecification, specify } from '@dna-platform/public';

export class $DougsAppend extends $Append {
    override defines(writing: $Writing): void {
        writing.classes.add(this, 'pa-append');
    }

    override erase(writing: $Writing): void {
        writing.classes.revert(this);
    }
}

export class $Listing extends $Annotation {
    specification = new ListingSpecification();

    override defines(writing: $Writing): void {
        writing.classes.add(this, 'pa-listing');
    }

    override erase(writing: $Writing): void {
        writing.classes.revert(this);
    }
}

export class $Spread extends $Annotation {
    override defines(writing: $Writing): void {
        for (const annotation of writing.annotations.after(this))
            if (annotation instanceof $Spread)
                writing.annotations.express(annotation, false);
    }

    override erase(writing: $Writing): void {
        writing.classes.revert(this);
    }
}

export class $WordsForward extends $Spread {
    override defines(writing: $Writing): void {
        super.defines(writing);
        writing.classes.add(this, 'pa-words-forward');
    }
}

export class $CodeForward extends $Spread {
    override defines(writing: $Writing): void {
        super.defines(writing);
        writing.classes.add(this, 'pa-code-forward');
    }
}

export class ListingSpecification extends AnnotationSpecification {
    @specify('a listing is said of a section')
    $saidOfASection(writing: $Writing): void {
        $check(writing instanceof $Section, 'a listing is said of a section, and this is not one');
    }
}

export const Append = $($DougsAppend);
export const Listing = $($Listing);
export const Spread = $($Spread);
export const WordsForward = $($WordsForward);
export const CodeForward = $($CodeForward);
