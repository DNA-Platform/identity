import { ElementType, ReactNode } from 'react';
import { $, $check, $Chemical, selection } from '@dna-platform/chemistry';
import { $Annotation, $Chapter, $Composition, $Format, $Image, $Paragraph, $Reference, $Word, $Writing, AnnotationSpecification, Reference as reference, Word as word, binder, html, specify } from '@dna-platform/public';
import type { Given } from '@dna-platform/public';
import type { $LibraryBook } from './1-the-book~code.tsx';
import { $Entry } from './14-the-entry~code.tsx';
import { $Volume, painted } from './19-the-cover~code.tsx';

export const within = <T extends $Composition>(composition: $Composition, given: Given<T>): T[] => {
    const found = new Set<$Composition>(composition.text.find(given));
    return composition.text.find($Composition).flatMap(inner => [...(found.has(inner) ? [inner as T] : []), ...within(inner, given)]);
};

export class $Design extends $Annotation {
    specification = new DesignSpecification();
    get identifier(): string { return binder.reference(html.copy(this.text))?.identifier ?? ''; }
    get name(): string { return binder.reference(html.copy(this.text))?.name ?? ''; }
    get cover(): $Chapter | undefined {
        const identifier = this.identifier;
        return this.chapter?.annotations.find($Volume).map(volume => volume.cover).find(cover => cover?.mention?.identifier === identifier);
    }

    override defines(writing: $Writing): void {
        writing.classes.add(this, 'pa-design');
    }

    override erase(writing: $Writing): void {
        writing.classes.revert(this);
    }
}

export class $Exhibit extends $Annotation {
    specification = new ExhibitSpecification();

    override defines(writing: $Writing): void {
        writing.classes.add(this, 'pa-exhibit');
    }

    override erase(writing: $Writing): void {
        writing.classes.revert(this);
    }
}

export class $Plate extends $Annotation {
    specification = new PlateSpecification();
    $number = 0;
    span = selection.span.attrs({ className: 'pd-plate' })``;

    override note(): ReactNode {
        const Span = this.span;
        return (
            <>
                <Span>{String(this.$number).padStart(2, '0')}</Span>
                <span className="pd-jacket-mini" />
            </>
        );
    }

    override defines(writing: $Writing): void {
        writing.classes.add(this, 'pa-plate');
    }

    override erase(writing: $Writing): void {
        writing.classes.revert(this);
    }
}

export class $Room extends $Format {
    specification = new RoomSpecification();
    themeProvider = true;
    room: ElementType = selection.div`
        .pd-book &.pd-container:not(.pa-open) { display: none; }
        .pd-book &.pd-container.pa-open { display: block; position: relative; min-height: 100%; padding: calc(${({ theme }) => theme.space} * 1.5) calc(${({ theme }) => theme.space} * 1.8333) calc(${({ theme }) => theme.space} * 3); background: linear-gradient(160deg, color-mix(in oklab, var(--ground) 55%, white) 0%, color-mix(in oklab, var(--ground) 22%, white) 45%, color-mix(in oklab, var(--foot) 7%, white) 100%); }
        .pd-book & .pd-plate { position: absolute; top: calc(${({ theme }) => theme.space} * 0.9167); left: calc(${({ theme }) => theme.space} * 1.8333); font-family: ${({ theme }) => theme.serif}; font-size: calc(${({ theme }) => theme.size} * 26 / 7); font-weight: 500; line-height: 1; letter-spacing: -0.03em; color: color-mix(in oklab, var(--band) 32%, white); pointer-events: none; }
        .pd-book & .pd-chapter { position: relative; max-width: none; margin: 0; }
        .pd-book &.pd-room .pd-chapter .pd-sentence.pd-title { margin: calc(${({ theme }) => theme.space} * 1.75) 0 calc(${({ theme }) => theme.space} * 0.4167); font-family: ${({ theme }) => theme.serif}; font-size: calc(2.4286 * ${({ theme }) => theme.size}); font-weight: 600; line-height: 1.15; letter-spacing: -0.02em; color: var(--band-ink); }
        .pd-book & .pd-paragraph { max-width: 72ch; }
        .pd-book & .pd-paragraph.pa-exhibit { max-width: calc(${({ theme }) => theme.space} * 43.33); margin: calc(${({ theme }) => theme.space} / 2) 0 calc(${({ theme }) => theme.space} * 1.25); padding: calc(${({ theme }) => theme.space} * 0.75) calc(${({ theme }) => theme.space} * 0.75) calc(${({ theme }) => theme.space} / 2); border-radius: calc(${({ theme }) => theme.radius} * 2); background: linear-gradient(135deg, color-mix(in oklab, var(--ground) 72%, white) 0%, color-mix(in oklab, var(--ground) 40%, white) 100%); box-shadow: ${({ theme }) => theme.gloss}; }
        .pd-book & .pd-paragraph.pa-exhibit img { width: 100%; border: 0; border-radius: ${({ theme }) => theme.radius}; box-shadow: ${({ theme }) => theme.lift}; }
        .pd-book & .pd-paragraph.pa-exhibit::after { content: 'As built'; display: block; margin-block-start: calc(${({ theme }) => theme.space} / 2); font-size: calc(0.75 * ${({ theme }) => theme.size}); font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: var(--band-ink); }
        .pd-book & .pd-section { margin-block-start: calc(${({ theme }) => theme.space} * 1.25); }
        .pd-book &.pd-room .pd-chapter .pd-sentence.pd-heading { color: var(--band-ink); }
        .pd-book & .pd-image img { border: thin solid ${({ theme }) => theme.line}; border-radius: ${({ theme }) => theme.radius}; background: ${({ theme }) => theme.paper}; box-shadow: ${({ theme }) => theme.shadow}; }
        .pd-book & .pd-built-in { display: flex; flex-wrap: wrap; align-items: baseline; gap: calc(${({ theme }) => theme.space} / 3) calc(${({ theme }) => theme.space} * 0.4167); max-width: 72ch; margin: calc(${({ theme }) => theme.space} * 1.75) 0 0; padding-block-start: calc(${({ theme }) => theme.space} * 0.8333); border-block-start: thin solid color-mix(in oklab, var(--band) 70%, white); }
        .pd-book & .pd-built-in:empty { display: none; }
        .pd-book & .pd-built-in::before { content: 'Built in'; flex-basis: 100%; font-size: calc(0.75 * ${({ theme }) => theme.size}); font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: var(--band-ink); }
        .pd-book & .pd-paragraph.pd-built-in .pa-reference.pd-container { text-decoration: none; }
        .pd-book & .pd-paragraph.pd-built-in .pd-word.pa-reference { display: inline-flex; flex-direction: column; padding: calc(${({ theme }) => theme.space} / 4) calc(${({ theme }) => theme.space} * 0.4167); border: thin solid color-mix(in oklab, var(--band) 75%, white); border-radius: ${({ theme }) => theme.radius}; background: ${({ theme }) => theme.paper}; font-size: calc(0.9286 * ${({ theme }) => theme.size}); color: var(--band-ink); text-decoration: none; box-shadow: ${({ theme }) => theme.shadow}; transition: border-color ${({ theme }) => theme.beat} ease, box-shadow ${({ theme }) => theme.beat} ease; }
        .pd-book & .pd-paragraph.pd-built-in .pd-word.pa-reference:hover { border-color: var(--band-ink); box-shadow: ${({ theme }) => theme.lift}; text-decoration: none; }
        .pd-book & .pd-built-in .pd-where { display: block; font-size: calc(0.75 * ${({ theme }) => theme.size}); color: ${({ theme }) => theme.faint}; }
        @media (max-width: ${({ theme }) => theme.narrow}) {
            .pd-book &.pd-container.pa-open { padding: calc(${({ theme }) => theme.space} * 0.8333) calc(${({ theme }) => theme.space} * 0.6667) calc(${({ theme }) => theme.space} * 2); }
            .pd-book & .pd-plate { top: calc(${({ theme }) => theme.space} * 0.75); left: calc(${({ theme }) => theme.space} * 0.6667); font-size: calc(2.857 * ${({ theme }) => theme.size}); }
            .pd-book & .pd-chapter .pd-sentence.pd-title { margin-block-start: calc(${({ theme }) => theme.space} * 1.4167); font-size: calc(2 * ${({ theme }) => theme.size}); }
            .pd-book & .pd-paragraph.pa-exhibit { padding: calc(${({ theme }) => theme.space} * 0.4167); }
        }
    `;
    get chapter(): $Chapter { return this.parent as $Chapter; }
    get design(): $Design | undefined { return this.chapter.annotations.expressed($Design); }
    get plate(): number { return (this.book as $LibraryBook).chapters.filter(chapter => chapter.is($Design)).indexOf(this.chapter) + 1; }

    $Room(...chemicals: $Chemical[]) {
        this.$Format(...chemicals);
        const Room = this.room;
        this.style = ({ className, children }: { className?: string; children?: ReactNode }) => {
            const open = [...this.chapter.classes].includes('pa-open');
            return painted(this.design?.cover, (
                <Room className={`${className ?? ''} pd-room${open ? ' pa-open' : ''}`.trim()}>
                    <span className="pd-plate">{String(this.plate).padStart(2, '0')}</span>
                    {children}
                </Room>
            ));
        };
    }

    override defines(writing: $Writing): void {
        super.defines(writing);
        writing.classes.add(this, 'pa-room');
    }

    override erase(writing: $Writing): void {
        super.erase(writing);
        writing.classes.revert(this);
    }
}

export class $BuiltIn extends $Paragraph {
    get references(): [string, string][] {
        const own = this.book?.means?.identifier ?? '';
        const found = new Map<string, string>();
        for (const w of within(this.chapter!, $Word)) {
            if (w.parent === this) continue;
            const place = w.annotations.expressed($Reference)?.identifier;
            if (place === undefined || place.startsWith(own) || found.has(place)) continue;
            const copy = html.copy(w.text);
            found.set(place, binder.reference(copy)?.name ?? copy.trim());
        }
        return [...found];
    }

    override write(): ReactNode {
        const Word = $(word);
        const Reference = $(reference);
        return this.references.map(([place, words], index) => (
            <Word key={index}>
                <Reference>{place}</Reference>
                {words}
                <span className="pd-where">{place.replace(/^\/dougs-/u, '').replace(/\/#?/u, ' · ').replace(/ · $/u, '').replace(/-/gu, ' ')}</span>
            </Word>
        ));
    }

    protected override $Define(): void {
        super.$Define();
        this.classes.add(this, 'pd-built-in');
    }
}

export class DesignSpecification extends AnnotationSpecification {
    @specify('a design is a chapter')
    $isAChapter(writing: $Writing): void {
        $check(writing instanceof $Chapter, 'a design is a chapter, and this is not one');
    }

    @specify('a design names the book it is of')
    $namesABook(writing: $Writing): void {
        $check((writing.annotations.expressed($Design)?.identifier ?? '') !== '', 'a design names the book it is of, and this one names nothing');
    }

    @specify('a design holds the cover of the book it is of')
    $holdsTheCover(writing: $Writing): void {
        $check(writing.annotations.expressed($Design)?.cover !== undefined,
            'a design holds the cover of the book it is of, as a volume, and this one holds none');
    }

    @specify('a design shows itself as built')
    $showsItselfAsBuilt(writing: $Writing): void {
        $check(writing instanceof $Chapter && within(writing, $Paragraph).some(paragraph => paragraph.is($Exhibit)),
            'a design shows itself as built, in a paragraph said to be the exhibit, and this one shows nothing');
    }
}

export class ExhibitSpecification extends AnnotationSpecification {
    @specify('an exhibit is a paragraph of a design that holds one image')
    $isAParagraphOfADesignHoldingOneImage(writing: $Writing): void {
        $check(writing instanceof $Paragraph && writing.chapter?.is($Design) === true && writing.text.find($Image).length === 1,
            'an exhibit is a paragraph of a design that holds one image, and this is not one');
    }
}

export class PlateSpecification extends AnnotationSpecification {
    @specify('a plate is said of an entry that leads to a design')
    $saidOfAnEntryLeadingToADesign(writing: $Writing): void {
        $check(writing.is($Entry) && writing.annotations.expressed($Entry)?.referencedChapter?.is($Design) === true,
            'a plate is said of an entry that leads to a design, and this is not one');
    }
}

export class RoomSpecification extends AnnotationSpecification {
    @specify('a room is a chapter that is a design')
    $isADesign(writing: $Writing): void {
        $check(writing instanceof $Chapter && writing.is($Design), 'a room is a chapter that is a design, and this is not one');
    }
}

export const Design = $($Design);
export const Exhibit = $($Exhibit);
export const Plate = $($Plate);
export const Room = $($Room);
export const BuiltIn = $($BuiltIn);
