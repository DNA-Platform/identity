import { ReactNode } from 'react';
import { $, $check } from '@dna-platform/chemistry';
import { $Annotation, $Chapter, $Cover, $Paragraph, $Reference, $Writing, AnnotationSpecification, Reference as reference, Word as word, binder, html, specify } from '@dna-platform/public';
import { Label as label } from '../../.manual/8-the-author-and-the-subject~code.tsx';

// The project a conversation was held in, said on its cover as a fact of Claude's: the project book's name and a
// reference to it. Every book that reads a conversation's cover reads it through this one class, so it stands here
// alone, apart from the pages that draw it; Sprint 117, D2.
export class $Project extends $Annotation {
    specification = new ProjectSpecification();
    get name(): string { return binder.reference(html.copy(this.text))?.name ?? ''; }
    get means(): $Reference | undefined { return this.annotations.expressed($Reference); }

    protected override $Define(): void {
        super.$Define();
        const link = binder.reference(html.copy(this.text));
        if (link === undefined) return;
        const Reference = $(reference);
        this.annotations.add(this,
            <Reference>{link.identifier}</Reference>
        );
    }

    override write(): ReactNode { return this.name; }
}

export class ProjectSpecification extends AnnotationSpecification {
    @specify('a project is said of a cover')
    $saidOfACover(writing: $Writing): void {
        $check(writing instanceof $Chapter && writing.is($Cover), 'a project is said of a cover, and this is not one');
    }
}

// The project line in a conversation's bar: a word said to be a label and the project's name leading to its book.
export class $ProjectLine extends $Paragraph {
    $cover?: $Chapter;
    get cover(): $Chapter | undefined { return this.$cover ?? this.book?.cover; }
    get project(): $Project | undefined { return this.cover?.annotations.expressed($Project); }

    override write(): ReactNode {
        const project = this.project!;
        const Word = $(word);
        const Said = $(label);
        const Reference = $(reference);
        return (
            <>
                <Word>
                    <Said />
                    project
                </Word>
                <Word>
                    <Reference>{project.means!.identifier}</Reference>
                    {project.name}
                </Word>
            </>
        );
    }

    protected override $Define(): void {
        super.$Define();
        this.classes.add(this, 'pd-project-line');
    }
}

export const Project = $($Project);
export const ProjectLine = $($ProjectLine);
