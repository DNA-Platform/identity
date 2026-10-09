import { ElementType, ReactNode } from 'react';
import { $, $check, $Chemical, selection } from '@dna-platform/chemistry';
import { $Chapter, $Format, $Paragraph, $Svg, $Word, $Writing, AnnotationSpecification, binder, html, specify } from '@dna-platform/public';
import type { $LibraryBook } from './1-the-book~code.tsx';
import { $Coloured } from './18-the-colour~code.tsx';

export class $Kind extends $Format {
    specification = new KindSpecification();
    protected _layer!: ElementType;
    get identifier(): string { return binder.reference(html.copy(this.text))?.identifier ?? ''; }
    get name(): string { return binder.reference(html.copy(this.text))?.name ?? ''; }
    get entry(): $Chapter | undefined { return (this.book as $LibraryBook | undefined)?.named(this.identifier); }
    get drawing(): string {
        const svg = this.entry?.text.find($Paragraph).flatMap(paragraph => paragraph.text.find($Svg))[0];
        return svg === undefined ? '' : html.copy(svg.text).trim();
    }
    get colour(): string { return this.entry?.annotations.expressed($Coloured)?.colour ?? ''; }

    $Kind(...chemicals: $Chemical[]) {
        this.$Format(...chemicals);
        const Icon = $(icon);
        this._layer = (props: { children?: ReactNode }) => (
            <div {...props}>
                <Icon kind={this} />
                {props.children}
            </div>
        );
    }

    override defines(writing: $Writing): void {
        writing.classes.add(this, 'pa-kind');
        writing.containers.add(this, this._layer);
    }

    override erase(writing: $Writing): void {
        writing.classes.revert(this);
        writing.containers.revert(this);
    }
}

export class $Icon extends $Word {
    $kind?: $Kind;
    style: ElementType = selection.span<{ $colour: string }>`
        --colour: ${props => props.$colour};
    `;
    protected _painted!: ElementType;

    $Icon(...chemicals: $Chemical[]) {
        this.$Writing(...chemicals);
        const Painted = this.style;
        this._painted = (props: { children?: ReactNode }) => (
            <Painted
                $colour={this.$kind?.colour ?? ''}
                {...props}
            />
        );
        this.containers.replace(this, 'span', this._painted);
    }

    override write(): ReactNode {
        return (
            <span
                className="pd-drawing"
                role="img"
                aria-label={this.$kind?.name}
                dangerouslySetInnerHTML={{ __html: this.$kind?.drawing ?? '' }}
            />
        );
    }

    protected override $Define(): void {
        super.$Define();
        this.classes.add(this, 'pd-icon');
    }
}

export class KindSpecification extends AnnotationSpecification {
    @specify('a kind is said of a chapter')
    $saidOfAChapter(writing: $Writing): void {
        $check(writing instanceof $Chapter, 'a kind is said of a chapter, and this is not one');
    }

    @specify('a kind names an entry of the key')
    $namesAnEntry(writing: $Writing): void {
        const entry = writing.annotations.expressed($Kind)?.entry;
        $check(entry !== undefined && entry.annotations.expressed($Kind)?.entry === entry,
            'a kind names an entry of the key, a chapter of this book whose kind is itself, and this one names something else');
    }

    @specify('an entry of the key holds one drawing and its colour')
    $entryHoldsItsDrawingAndColour(writing: $Writing): void {
        const entry = writing.annotations.expressed($Kind)?.entry;
        if (entry === undefined) return;
        $check(entry.text.find($Paragraph).flatMap(paragraph => paragraph.text.find($Svg)).length === 1 && entry.is($Coloured),
            'an entry of the key holds one drawing and its colour, and this one holds something else');
    }
}

export const Kind = $($Kind);
export const Icon = $($Icon);
const icon = Icon;
