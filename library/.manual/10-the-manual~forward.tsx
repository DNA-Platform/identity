import { $, $check } from '@dna-platform/chemistry';
import { $Annotation, $Paragraph, $Writing, AnnotationSpecification, specify } from '@dna-platform/public';
import { OfABookSpecification } from './1-the-book~said.tsx';

export class $Reading extends $Annotation {
    specification = new OfABookSpecification();

    override defines(writing: $Writing): void {
        for (const annotation of writing.annotations.after(this))
            if (annotation instanceof $Reading)
                writing.annotations.express(annotation, false);
        writing.classes.add(this, 'pa-reading');
    }

    override erase(writing: $Writing): void {
        writing.classes.revert(this);
    }
}

export class $CodeForward extends $Reading {
    override defines(writing: $Writing): void {
        super.defines(writing);
        writing.classes.add(this, 'pa-code-forward');
    }
}

export class $WordsForward extends $Reading {
    override defines(writing: $Writing): void {
        super.defines(writing);
        writing.classes.add(this, 'pa-words-forward');
    }
}

export class $Brief extends $Annotation {
    specification = new BriefSpecification();

    override defines(writing: $Writing): void {
        writing.classes.add(this, 'pa-brief');
    }

    override erase(writing: $Writing): void {
        writing.classes.revert(this);
    }
}

export class BriefSpecification extends AnnotationSpecification {
    @specify('brief is said of a paragraph')
    $saidOfAParagraph(writing: $Writing): void {
        $check(writing instanceof $Paragraph, 'brief is said of a paragraph, and this is not one');
    }
}

export const Reading = $($Reading);
export const CodeForward = $($CodeForward);
export const WordsForward = $($WordsForward);
export const Brief = $($Brief);
