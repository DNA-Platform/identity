import { ElementType, ReactNode } from 'react';
import { $, $check, $Chemical, selection } from '@dna-platform/chemistry';
import { $Chapter, $Format, $Image, $Paragraph, $Reference, $Section, $Word, $Writing, AnnotationSpecification, Reference as reference, Word as word, html, specify } from '@dna-platform/public';
import type { $LibraryBook } from './1-the-book~code.tsx';
import { $Decision } from './21-the-paragraphs~code.tsx';
import { $Concept, $Thumbnail } from './22-the-concept~code.tsx';

export const conceptAt = (book: $LibraryBook, place: string): $Section | undefined =>
    book.chapters.flatMap(chapter => book.sections(chapter)).find(section => section.is($Concept) && section.mention?.identifier === place);

export const thumbnailOf = (concept: $Section): string => {
    const image = concept.text.find($Paragraph).find(paragraph => paragraph.is($Thumbnail))?.text.find($Image)[0];
    return image === undefined ? '' : image.contents || html.copy(image.text);
};

export class $Gallery extends $Format {
    specification = new GallerySpecification();
    themeProvider = true;
    get chapter(): $Chapter { return this.parent as $Chapter; }
    get concepts(): $Section[] { return (this.book as $LibraryBook).sections(this.chapter).filter(section => section.is($Concept)); }
    get open(): $Section | undefined { return this.concepts.find(concept => concept.mention?.identifier === this.book?.$bookmark); }
    style = selection.div`
        .pd-book & .pd-chapter.pa-gallery .pd-section {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(${({ theme }) => theme.card}, 1fr));
            gap: calc(${({ theme }) => theme.space} * 0.75) calc(${({ theme }) => theme.space} * 0.5833);
            align-items: start;
            margin-block-start: calc(${({ theme }) => theme.space} * 1.4167);
        }
        .pd-book & .pa-gallery .pd-section .pa-self-reference.pd-container, .pd-book & .pa-gallery .pd-section .pd-paragraph { grid-column: 1 / -1; }
        .pd-book & .pa-gallery .pd-section .pd-sentence.pd-heading { padding-block-end: calc(${({ theme }) => theme.space} / 3); border-block-end: thin solid ${({ theme }) => theme.line}; }
        .pd-book & .pa-gallery .pd-section .pd-paragraph { color: ${({ theme }) => theme.soft}; }
        .pd-book & .pd-chapter.pa-gallery .pd-paragraph.pa-brief { max-width: 64ch; margin-block-start: calc(${({ theme }) => theme.space} * 0.4167); font-family: ${({ theme }) => theme.serif}; font-size: calc(1.2143 * ${({ theme }) => theme.size}); line-height: 1.6; color: ${({ theme }) => theme.ink}; }
        .pd-book & .pa-gallery .pd-section.pa-concept {
            display: grid;
            grid-template-columns: auto minmax(0, 1fr);
            grid-template-areas: 'pictures pictures' 'number name' 'caption caption' 'precedent precedent';
            column-gap: calc(${({ theme }) => theme.space} / 3);
            align-items: baseline;
            margin: 0;
            cursor: pointer;
        }
        .pd-book & .pa-gallery .pd-section.pa-concept .pd-paragraph.pa-thumbnail { grid-area: pictures; grid-column: pictures; margin: 0 0 calc(${({ theme }) => theme.space} / 4); max-width: none; }
        .pd-book & .pa-gallery .pd-section.pa-concept .pa-thumbnail img {
            width: 100%;
            aspect-ratio: 16 / 10;
            object-fit: cover;
            object-position: top;
            border: thin solid ${({ theme }) => theme.line};
            border-radius: ${({ theme }) => theme.radius};
            background: ${({ theme }) => theme.paper};
            box-shadow: ${({ theme }) => theme.shadow};
            transition: border-color ${({ theme }) => theme.beat} ease, box-shadow ${({ theme }) => theme.beat} ease, transform ${({ theme }) => theme.beat} ease;
        }
        .pd-book & .pa-gallery .pd-section.pa-concept:hover .pa-thumbnail img { border-color: var(--band); box-shadow: ${({ theme }) => theme.lift}; transform: translateY(${({ theme }) => theme.rise}); }
        .pd-book & .pa-gallery .pd-section.pa-concept .pd-number { grid-area: number; font-size: calc(0.7857 * ${({ theme }) => theme.size}); font-weight: 600; color: var(--foot-ink); font-variant-numeric: tabular-nums; }
        .pd-book & .pa-gallery .pd-section.pa-concept.pa-designed .pd-number::before, .pd-book & .pa-gallery .pd-section.pa-concept.pa-decided .pd-number::before {
            margin-inline-end: calc(${({ theme }) => theme.space} / 4);
            font-size: calc(0.6786 * ${({ theme }) => theme.size});
            font-weight: 500;
            letter-spacing: 0.06em;
            text-transform: uppercase;
        }
        .pd-book & .pa-gallery .pd-section.pa-concept.pa-designed .pd-number::before { content: 'designed'; color: var(--band-ink); }
        .pd-book & .pa-gallery .pd-section.pa-concept.pa-decided .pd-number::before { content: 'decided'; color: var(--foot-ink); }
        .pd-book & .pa-gallery .pd-section.pa-concept .pa-self-reference.pd-container { grid-area: name; grid-column: name; }
        .pd-book & .pa-gallery .pd-section.pa-concept .pd-sentence.pd-heading { margin: 0; padding: 0; border: 0; font-family: ${({ theme }) => theme.serif}; font-size: calc(0.9643 * ${({ theme }) => theme.size}); font-weight: 600; color: ${({ theme }) => theme.heading}; }
        .pd-book & .pa-gallery .pd-section.pa-concept .pd-paragraph.pa-caption { grid-area: caption; margin: calc(${({ theme }) => theme.space} / 8) 0 0; font-size: calc(0.8571 * ${({ theme }) => theme.size}); line-height: 1.5; color: ${({ theme }) => theme.soft}; }
        .pd-book & .pa-gallery .pd-section.pa-concept .pd-paragraph.pa-precedent { grid-area: precedent; margin: calc(${({ theme }) => theme.space} / 8) 0 0; font-size: calc(0.8214 * ${({ theme }) => theme.size}); color: ${({ theme }) => theme.faint}; }
        .pd-book & .pa-gallery .pd-section.pa-concept .pd-paragraph.pa-desk, .pd-book & .pa-gallery .pd-section.pa-concept .pd-paragraph.pa-phone, .pd-book & .pa-gallery .pd-section.pa-concept .pd-paragraph.pa-source, .pd-book & .pa-gallery .pd-section.pa-concept .pd-close, .pd-book & .pa-gallery .pd-section.pa-concept .pd-paragraph.pa-answer, .pd-book & .pa-gallery .pd-section.pa-concept .pd-paragraph.pa-where { display: none; }
        .pd-book & .pa-gallery .pd-section.pa-concept.pa-open {
            position: fixed;
            inset: ${({ theme }) => theme.barHeight} 0 0 ${({ theme }) => theme.holdsColumn};
            z-index: 1;
            display: grid;
            grid-template-columns: auto minmax(0, 1fr) calc(${({ theme }) => theme.space} * 9.1667);
            grid-template-areas: 'number name name' 'precedent precedent precedent' 'caption caption caption' 'desk desk phone' 'answer answer answer' 'where where where' 'source source source';
            grid-auto-rows: max-content;
            align-content: start;
            align-items: start;
            column-gap: calc(${({ theme }) => theme.space} * 0.6667);
            overflow-y: auto;
            padding: calc(${({ theme }) => theme.space} * 1.1667) calc(${({ theme }) => theme.space} * 2) calc(${({ theme }) => theme.space} * 3);
            background: ${({ theme }) => theme.paper};
            cursor: default;
        }
        .pd-book & .pa-gallery .pd-section.pa-concept.pa-open .pd-paragraph, .pd-book & .pa-gallery .pd-section.pa-concept.pa-open .pa-self-reference.pd-container { max-width: calc(${({ theme }) => theme.space} * 46.67); }
        .pd-book & .pa-gallery .pd-section.pa-concept.pa-open .pd-number { display: inline-block; margin-inline-end: calc(${({ theme }) => theme.space} * 0.4167); font-size: calc(0.9286 * ${({ theme }) => theme.size}); }
        .pd-book & .pa-gallery .pd-section.pa-concept.pa-open .pa-self-reference.pd-container { display: inline; }
        .pd-book & .pa-gallery .pd-section.pa-concept.pa-open .pd-sentence.pd-heading { display: inline; font-size: calc(2 * ${({ theme }) => theme.size}); letter-spacing: -0.02em; }
        .pd-book & .pa-gallery .pd-section.pa-concept.pa-open .pd-close { display: block; position: absolute; top: calc(${({ theme }) => theme.space} * 0.9167); right: calc(${({ theme }) => theme.space} * 1.5); margin: 0; font-size: calc(1.857 * ${({ theme }) => theme.size}); line-height: 1; }
        .pd-book & .pa-gallery .pd-section.pa-concept.pa-open .pd-close .pa-reference { color: ${({ theme }) => theme.faint}; text-decoration: none; }
        .pd-book & .pa-gallery .pd-section.pa-concept.pa-open .pd-close .pa-reference:hover { color: ${({ theme }) => theme.ink}; }
        .pd-book & .pa-gallery .pd-section.pa-concept.pa-open .pd-paragraph.pa-thumbnail { display: none; }
        .pd-book & .pa-gallery .pd-section.pa-concept.pa-open .pd-paragraph.pa-precedent { font-size: calc(0.9286 * ${({ theme }) => theme.size}); color: ${({ theme }) => theme.soft}; }
        .pd-book & .pa-gallery .pd-section.pa-concept.pa-open .pd-paragraph.pa-caption { margin: calc(${({ theme }) => theme.space} * 0.4167) 0 calc(${({ theme }) => theme.space} * 0.8333); font-family: ${({ theme }) => theme.serif}; font-size: calc(1.2143 * ${({ theme }) => theme.size}); line-height: 1.55; color: ${({ theme }) => theme.ink}; max-width: 64ch; }
        .pd-book & .pa-gallery .pd-section.pa-concept.pa-open .pd-paragraph.pa-desk, .pd-book & .pa-gallery .pd-section.pa-concept.pa-open .pd-paragraph.pa-phone, .pd-book & .pa-gallery .pd-section.pa-concept.pa-open .pd-paragraph.pa-answer, .pd-book & .pa-gallery .pd-section.pa-concept.pa-open .pd-paragraph.pa-source { display: block; max-width: none; }
        .pd-book & .pa-gallery .pd-section.pa-concept.pa-open .pd-paragraph.pa-desk img, .pd-book & .pa-gallery .pd-section.pa-concept.pa-open .pd-paragraph.pa-phone img { border: thin solid ${({ theme }) => theme.line}; border-radius: ${({ theme }) => theme.radius}; box-shadow: ${({ theme }) => theme.shadow}; }
        .pd-book & .pa-gallery .pd-section.pa-concept.pa-open .pd-paragraph.pa-answer { max-width: 68ch; }
        .pd-book & .pa-gallery .pd-section.pa-concept.pa-open .pd-paragraph.pa-where { display: block; margin-block-start: calc(${({ theme }) => theme.space} / 2); font-size: calc(0.9643 * ${({ theme }) => theme.size}); color: ${({ theme }) => theme.soft}; }
        .pd-book & .pa-gallery .pd-section.pa-concept.pa-open .pd-number { grid-area: number; align-self: baseline; }
        .pd-book & .pa-gallery .pd-section.pa-concept.pa-open .pa-self-reference.pd-container { grid-area: name; grid-column: name; align-self: baseline; }
        .pd-book & .pa-gallery .pd-section.pa-concept.pa-open .pd-paragraph.pa-precedent { grid-area: precedent; }
        .pd-book & .pa-gallery .pd-section.pa-concept.pa-open .pd-paragraph.pa-caption { grid-area: caption; }
        .pd-book & .pa-gallery .pd-section.pa-concept.pa-open .pd-paragraph.pa-desk { grid-area: desk; margin: 0; }
        .pd-book & .pa-gallery .pd-section.pa-concept.pa-open .pd-paragraph.pa-phone { grid-area: phone; margin: 0; }
        .pd-book & .pa-gallery .pd-section.pa-concept.pa-open .pd-paragraph.pa-phone img { max-width: 100%; }
        .pd-book & .pa-gallery .pd-section.pa-concept.pa-open .pd-paragraph.pa-answer { grid-area: answer; }
        .pd-book & .pa-gallery .pd-section.pa-concept.pa-open .pd-paragraph.pa-where { grid-area: where; }
        .pd-book & .pa-gallery .pd-section.pa-concept.pa-open .pd-paragraph.pa-source { grid-area: source; }
        .pd-book & .pa-gallery .pd-section.pa-concept.pa-open .pd-paragraph.pa-thumbnail { grid-area: source; }
        @media (max-width: ${({ theme }) => theme.narrow}) {
            .pd-book & .pd-chapter.pa-gallery .pd-section { grid-template-columns: 1fr; }
            .pd-book & .pd-chapter.pa-gallery .pd-section.pa-concept { grid-template-columns: auto minmax(0, 1fr); }
            .pd-book & .pa-gallery .pd-section.pa-concept.pa-open { inset: ${({ theme }) => theme.barHeight} 0 0 0; grid-template-columns: auto minmax(0, 1fr); grid-template-areas: 'number name' 'precedent precedent' 'caption caption' 'desk desk' 'phone phone' 'answer answer' 'where where' 'source source'; padding: calc(${({ theme }) => theme.space} * 0.8333) calc(${({ theme }) => theme.space} * 0.6667) calc(${({ theme }) => theme.space} * 2); }
            .pd-book & .pa-gallery .pd-section.pa-concept.pa-open .pd-paragraph.pa-phone { margin-block-start: calc(${({ theme }) => theme.space} * 0.6667); }
        }
    `;

    override defines(writing: $Writing): void {
        super.defines(writing);
        writing.classes.add(this, 'pa-gallery');
        const open = this.open;
        const opened = this.concepts.find(concept => [...concept.classes].includes('pa-open'));
        if (opened === open) return;
        opened?.classes.revert(this);
        open?.classes.add(this, 'pa-open');
    }

    override erase(writing: $Writing): void {
        super.erase(writing);
        writing.classes.revert(this);
    }
}

export class $Strip extends $Format {
    specification = new StripSpecification();
    strip: ElementType = selection.div`
        .pd-book & { display: flex; flex-wrap: wrap; gap: calc(${({ theme }) => theme.space} * 0.5833); margin: calc(${({ theme }) => theme.space} / 2) 0 calc(${({ theme }) => theme.space} / 4); max-width: none; }
        .pd-book & .pd-said { display: none; }
        .pd-book & .pd-word { display: block; width: calc(${({ theme }) => theme.space} * 6.8333); }
        .pd-book & .pd-word .pa-reference { color: inherit; text-decoration: none; }
        .pd-book & .pd-thumb { display: block; }
        .pd-book & .pd-thumb img {
            display: block;
            width: 100%;
            aspect-ratio: 16 / 10;
            object-fit: cover;
            object-position: top;
            border: thin solid ${({ theme }) => theme.line};
            border-radius: calc(${({ theme }) => theme.radius} * 0.6667);
            background: ${({ theme }) => theme.paper};
            box-shadow: ${({ theme }) => theme.shadow};
            transition: border-color ${({ theme }) => theme.beat} ease, box-shadow ${({ theme }) => theme.beat} ease;
        }
        .pd-book & .pd-thumb:hover img { border-color: var(--band); box-shadow: ${({ theme }) => theme.lift}; }
        .pd-book & .pd-thumb.pd-chosen img { border-color: var(--band-ink); box-shadow: ${({ theme }) => theme.ring}; }
        .pd-book & .pd-thumb .pd-name { display: block; margin-block-start: calc(${({ theme }) => theme.space} / 5); font-size: calc(0.8571 * ${({ theme }) => theme.size}); color: ${({ theme }) => theme.soft}; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        .pd-book & .pd-thumb.pd-chosen .pd-name { color: var(--band-ink); }
        .pd-book & .pd-thumb .pd-name .pd-number { margin-inline-end: calc(${({ theme }) => theme.space} / 5); font-weight: 600; color: var(--foot-ink); font-variant-numeric: tabular-nums; }
    `;
    get paragraph(): $Paragraph { return this.parent as $Paragraph; }
    get places(): string[] {
        return this.paragraph.text.find($Word).map(w => w.annotations.expressed($Reference)?.identifier).filter((place): place is string => place !== undefined);
    }
    get concepts(): $Section[] {
        const book = this.book as $LibraryBook;
        return [...new Set(this.places.map(place => conceptAt(book, place)).filter((concept): concept is $Section => concept !== undefined))];
    }
    get chosen(): Set<string> {
        const decisions = (this.paragraph.parent as $Writing | undefined)?.text.find($Paragraph).filter(paragraph => paragraph.is($Decision)) ?? [];
        return new Set(decisions.flatMap(decision => decision.text.find($Word).map(w => w.annotations.expressed($Reference)?.identifier)).filter((place): place is string => place !== undefined));
    }

    $Strip(...chemicals: $Chemical[]) {
        this.$Format(...chemicals);
        const Strip = this.strip;
        const Word = $(word);
        const Reference = $(reference);
        this.style = ({ className, children }: { className?: string; children?: ReactNode }) => {
            const chosen = this.chosen;
            return (
                <Strip className={`${className ?? ''} pd-strip`.trim()}>
                    {this.concepts.map((concept, index) => {
                        const place = concept.mention!.identifier;
                        return (
                            <Word key={index}>
                                <Reference>{place}</Reference>
                                <span className={`pd-thumb${chosen.has(place) ? ' pd-chosen' : ''}`}>
                                    <img
                                        src={thumbnailOf(concept)}
                                        alt=""
                                    />
                                    <span className="pd-name">
                                        <span className="pd-number">{concept.annotations.expressed($Concept)?.number}</span>
                                        {concept.canonical?.name}
                                    </span>
                                </span>
                            </Word>
                        );
                    })}
                    <span className="pd-said">
                        {children}
                    </span>
                </Strip>
            );
        };
    }

    override defines(writing: $Writing): void {
        super.defines(writing);
        writing.classes.add(this, 'pa-strip');
    }

    override erase(writing: $Writing): void {
        super.erase(writing);
        writing.classes.revert(this);
    }
}

export class GallerySpecification extends AnnotationSpecification {
    @specify('a gallery is a chapter')
    $isAChapter(writing: $Writing): void {
        $check(writing instanceof $Chapter, 'a gallery is a chapter, and this is not one');
    }
}

export class StripSpecification extends AnnotationSpecification {
    @specify('a strip is a paragraph that refers to concepts')
    $isAParagraphReferringToConcepts(writing: $Writing): void {
        $check(writing instanceof $Paragraph && writing.text.find($Word).some(w => w.annotations.expressed($Reference) !== undefined),
            'a strip is a paragraph that refers to concepts, and this one refers to nothing');
    }
}

export const Gallery = $($Gallery);
export const Strip = $($Strip);
