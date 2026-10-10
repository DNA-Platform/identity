import { $, $check } from '@dna-platform/chemistry';
import { $Annotation, $Paragraph, $Writing, AnnotationSpecification, specify } from '@dna-platform/public';
import { OfABookSpecification } from './1-the-book~said.tsx';

export class $FilePanelState extends $Annotation {
    specification = new OfABookSpecification();

    override defines(writing: $Writing): void {
        for (const annotation of writing.annotations.after(this))
            if (annotation instanceof $FilePanelState)
                writing.annotations.express(annotation, false);
        writing.classes.add(this, 'pa-file-panel-state');
    }

    override erase(writing: $Writing): void {
        writing.classes.revert(this);
    }
}

export class $CodeForward extends $FilePanelState {
    override defines(writing: $Writing): void {
        super.defines(writing);
        writing.classes.add(this, 'pa-code-forward');
    }
}

export class $WordsForward extends $FilePanelState {
    override defines(writing: $Writing): void {
        super.defines(writing);
        writing.classes.add(this, 'pa-words-forward');
    }
}

export class $Split extends $FilePanelState {
    override defines(writing: $Writing): void {
        super.defines(writing);
        writing.classes.add(this, 'pa-split');
    }
}

export class $LightCode extends $Annotation {
    specification = new OfABookSpecification();

    override defines(writing: $Writing): void {
        writing.classes.add(this, 'pa-light-code');
    }

    override erase(writing: $Writing): void {
        writing.classes.revert(this);
    }
}

export class $WrappedCode extends $Annotation {
    specification = new OfABookSpecification();

    override defines(writing: $Writing): void {
        writing.classes.add(this, 'pa-wrapped-code');
    }

    override erase(writing: $Writing): void {
        writing.classes.revert(this);
    }
}

export class $NumberedCode extends $Annotation {
    specification = new OfABookSpecification();

    override defines(writing: $Writing): void {
        writing.classes.add(this, 'pa-numbered-code');
    }

    override erase(writing: $Writing): void {
        writing.classes.revert(this);
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

export const FilePanelState = $($FilePanelState);
export const CodeForward = $($CodeForward);
export const WordsForward = $($WordsForward);
export const Split = $($Split);
export const LightCode = $($LightCode);
export const WrappedCode = $($WrappedCode);
export const NumberedCode = $($NumberedCode);
export const Brief = $($Brief);
