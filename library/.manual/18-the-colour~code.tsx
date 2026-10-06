import { ElementType, ReactNode } from 'react';
import { $, $check, $Chemical, selection } from '@dna-platform/chemistry';
import { $Chapter, $Format, $Paragraph, $Writing, AnnotationSpecification, html, specify } from '@dna-platform/public';

export class $Coloured extends $Format {
    specification = new ColouredSpecification();
    style: ElementType = selection.div<{ $colour: string }>`
        .pa-coloured { --colour: ${props => props.$colour}; }
    `;
    protected _painted!: ElementType;
    get colour(): string { return html.copy(this.text).trim(); }

    $Coloured(...chemicals: $Chemical[]) {
        this.$Format(...chemicals);
        const Painted = this.style;
        this._painted = (props: { children?: ReactNode }) => <Painted $colour={this.colour} {...props} />;
    }

    override defines(writing: $Writing): void {
        writing.classes.add(this, 'pa-coloured');
        writing.containers.add(this, this._painted);
    }

    override erase(writing: $Writing): void {
        writing.classes.revert(this);
        writing.containers.revert(this);
    }
}

export class ColouredSpecification extends AnnotationSpecification {
    @specify('coloured is said of a chapter or a paragraph')
    $saidOfAChapterOrAParagraph(writing: $Writing): void {
        $check(writing instanceof $Chapter || writing instanceof $Paragraph, 'coloured is said of a chapter or a paragraph, and this is neither');
    }

    @specify('coloured is given its colour')
    $givenItsColour(writing: $Writing): void {
        $check(/^#[0-9a-f]{6}$/iu.test(writing.annotations.expressed($Coloured)?.colour ?? ''),
            'coloured is given its colour as six hex digits, and this one was given something else');
    }
}

export const Coloured = $($Coloured);
