import { ReactNode } from 'react';
import { $, $check } from '@dna-platform/chemistry';
import {
    $Annotation, $Chapter, $Cover, $Paragraph, $Reference, $Writing, AnnotationSpecification, Reference as reference,
    Word as word, binder, html, specify,
} from '@dna-platform/public';
import { Theme } from '@dna-platform/public';
import { $Conversation, Label as label, Light as light, Tone as tone } from '../../.manual/.book';
import { ApplicationForm } from './4-the-page~theme.tsx';
import { $Artifact, $Attachment } from './2-the-artifact-and-the-attachment~code.tsx';
import { Pane as pane } from './5-the-pane~code.tsx';
import { $Account, AccountLine as accountLine } from './7-the-account~code.tsx';
import { $Origin } from './8-the-origin~code.tsx';

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
const projectLine = ProjectLine;

export class $ClaudeConversation extends $Conversation {
    $shown: $Artifact | $Attachment | undefined = undefined;
    get project(): $Project | undefined { return this.cover?.annotations.expressed($Project); }
    get account(): $Account | undefined { return this.cover?.annotations.expressed($Account); }
    get origin(): string | undefined { return this.cover?.annotations.expressed($Origin)?.uuid; }
    // The logo files the conversation under its project when the cover names one, the project's cover standing as a
    // volume of the conversation's; the name under the conversation's on hover is the project's, and the mark leads
    // to the project's page. Sprint 114, concept 5 of Claudes Design, its first form.
    override get subjectCover(): $Chapter | undefined {
        return this.coverOf(this.project?.means?.identifier) ?? super.subjectCover;
    }

    override write(): ReactNode {
        const Pane = $(pane);
        return (
            <>
                {super.write()}
                <Pane chapter={this.cover} />
            </>
        );
    }

    override me(): ReactNode {
        const ProjectLine = $(projectLine);
        const AccountLine = $(accountLine);
        return (
            <>
                {super.me()}
                {this.project === undefined ? undefined : (
                    <ProjectLine cover={this.cover} />
                )}
                {this.account === undefined ? undefined : (
                    <AccountLine cover={this.cover} />
                )}
            </>
        );
    }
}

export const ClaudeConversation = $($ClaudeConversation);
$(ClaudeConversation, Theme)(ApplicationForm);
$(ClaudeConversation, tone)(light);
