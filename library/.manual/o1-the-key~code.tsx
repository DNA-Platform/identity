import { ElementType, ReactNode } from 'react';
import { $, $check, $Chemical, selection } from '@dna-platform/chemistry';
import { $Chapter, $Format, $Paragraph, $Svg, $Word, $Writing, AnnotationSpecification, binder, html, specify } from '@dna-platform/public';
import type { $LibraryBook } from './1-the-book~code.tsx';
import { $Coloured } from './18-the-colour~code.tsx';

export class $Keyed extends $Format {
    specification = new KeyedSpecification();
    protected _layer!: ElementType;
    get identifier(): string { return binder.reference(html.copy(this.text))?.identifier ?? ''; }
    get name(): string { return binder.reference(html.copy(this.text))?.name ?? ''; }
    get entry(): $Chapter | undefined { return (this.book as $LibraryBook | undefined)?.chapterAt(this.identifier); }
    get drawing(): string {
        const svg = this.entry?.text.find($Paragraph).flatMap(paragraph => paragraph.text.find($Svg))[0];
        return svg === undefined ? '' : html.copy(svg.text).trim();
    }
    get colour(): string { return this.entry?.annotations.expressed($Coloured)?.colour ?? ''; }

    $Keyed(...chemicals: $Chemical[]) {
        this.$Format(...chemicals);
        const Icon = $(icon);
        this._layer = (props: { children?: ReactNode }) => (
            <div {...props}>
                <Icon keyed={this} />
                {props.children}
            </div>
        );
    }

    override defines(writing: $Writing): void {
        writing.classes.add(this, 'pa-keyed');
        writing.containers.add(this, this._layer);
    }

    override erase(writing: $Writing): void {
        writing.classes.revert(this);
        writing.containers.revert(this);
    }
}

export class $Icon extends $Word {
    $keyed?: $Keyed;
    style: ElementType = selection.span<{ $colour: string }>`
        --colour: ${props => props.$colour};
    `;
    protected _painted!: ElementType;

    $Icon(...chemicals: $Chemical[]) {
        this.$Writing(...chemicals);
        const Painted = this.style;
        this._painted = (props: { children?: ReactNode }) => (
            <Painted
                $colour={this.$keyed?.colour ?? ''}
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
                aria-label={this.$keyed?.name}
                dangerouslySetInnerHTML={{ __html: this.$keyed?.drawing ?? '' }}
            />
        );
    }

    protected override $Define(): void {
        super.$Define();
        this.classes.add(this, 'pd-icon');
    }
}

export class KeyedSpecification extends AnnotationSpecification {
    @specify('keyed is said of a chapter')
    $saidOfAChapter(writing: $Writing): void {
        $check(writing instanceof $Chapter, 'keyed is said of a chapter, and this is not one');
    }

    @specify('keyed names an entry of the key')
    $namesAnEntry(writing: $Writing): void {
        const entry = writing.annotations.expressed($Keyed)?.entry;
        $check(entry !== undefined && entry.annotations.expressed($Keyed)?.entry === entry,
            'keyed names an entry of the key, a chapter of this book keyed as itself, and this one names something else');
    }

    @specify('an entry of the key holds one drawing and its colour')
    $entryHoldsItsDrawingAndColour(writing: $Writing): void {
        const entry = writing.annotations.expressed($Keyed)?.entry;
        if (entry === undefined) return;
        $check(entry.text.find($Paragraph).flatMap(paragraph => paragraph.text.find($Svg)).length === 1 && entry.is($Coloured),
            'an entry of the key holds one drawing and its colour, and this one holds something else');
    }
}

export const Keyed = $($Keyed);
export const Icon = $($Icon);
const icon = Icon;
