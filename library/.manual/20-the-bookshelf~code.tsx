import { ElementType, ReactNode } from 'react';
import { $, $check, $Chemical, inert, selection } from '@dna-platform/chemistry';
import { $Annotation, $Chapter, $Format, $Paragraph, $Referent, $SelfReference, $Synopsis, $TableOfContents, $Word, $Writing, AnnotationSpecification, Reference as reference, Self, Theme, Word as word, specify } from '@dna-platform/public';
import { $LibraryBook } from './1-the-book~code.tsx';
import { OfABookSpecification } from './1-the-book~said.tsx';
import { Byline as byline, SubjectLine as subjectLine } from './8-the-author-and-the-subject~code.tsx';
import { Switch as switchOf } from './9-the-switch~code.tsx';
import { $Index, contentOf } from './14-the-entry~code.tsx';
import { Light as light, Tone as tone } from './16-the-tone~code.tsx';
import { $Volume, Jacket as jacket } from './19-the-cover~code.tsx';
import { Bookshelf } from './20-the-bookshelf~theme.tsx';

export class $Catalogue extends $LibraryBook {
    get books(): $Chapter[] {
        return this.text.find($Chapter).filter(chapter => chapter.is($Synopsis) && chapter !== this.synopsis);
    }
    override get laidOutChapters(): ($Chapter | undefined)[] {
        return [...super.laidOutChapters, ...this.books];
    }
    override get pages(): $Chapter[] {
        return [this.synopsis!, ...this.books, ...this.chapters];
    }

    override head(): ReactNode {
        return (
            <div className="pd-switches">
                {this.switches()}
            </div>
        );
    }

    override belowThePages(): ReactNode {
        return (
            <div className="pd-shelf">
                {this.volumes()}
            </div>
        );
    }

    volumes(): ReactNode {
        const Word = $(word);
        const Reference = $(reference);
        const rows = this.table?.annotations.expressed($Index)?.entries ?? [];
        return rows.map((row, index) => {
            const place = contentOf(row)!.identifier;
            const chapter = this.chapterAt(place);
            const cover = chapter === undefined ? this.coverOf(place) : this.jacketOf(chapter);
            if (cover === undefined) return undefined;
            return (
                <div
                    key={index}
                    className="pd-volume"
                >
                    {this.jacket(cover, place)}
                    <div className="pd-paragraph pd-name">
                        <Word>
                            <Reference>{place}</Reference>
                            {cover.title!.name}
                        </Word>
                    </div>
                </div>
            );
        });
    }

    jacket(cover: $Chapter | undefined, place?: string): ReactNode {
        if (cover === undefined) return undefined;
        const Jacket = $(jacket);
        const Reference = $(reference);
        return place === undefined ? (
            <Jacket cover={cover} />
        ) : (
            <Jacket cover={cover}>
                <Reference>{place}</Reference>
            </Jacket>
        );
    }

    line(cover: $Chapter | undefined): ReactNode {
        if (cover === undefined) return undefined;
        const Byline = $(byline);
        const SubjectLine = $(subjectLine);
        return (
            <>
                <Byline cover={cover} />
                <SubjectLine cover={cover} />
            </>
        );
    }

    wayIntoTheBook(cover: $Chapter | undefined): ReactNode {
        if (cover === undefined) return undefined;
        const Word = $(word);
        const Reference = $(reference);
        const address = cover.mention!.identifier;
        return (
            <div className="pd-paragraph pd-read">
                <Word>
                    <Reference>{address}</Reference>
                    {cover === this.cover ? 'This is the catalogue' : `Read ${cover.title!.name}`}
                </Word>
            </div>
        );
    }

    jacketOf(chapter: $Chapter): $Chapter | undefined {
        if (chapter === this.synopsis) return this.cover;
        return chapter.annotations.expressed($Volume)?.cover ?? (this.appendix.includes(chapter) ? undefined : this.cover);
    }

    override coverOf(identifier: string | undefined): $Chapter | undefined {
        return super.coverOf(identifier) ?? this.books
            .map(book => book.annotations.expressed($Volume)?.cover)
            .find(cover => cover !== undefined && cover.mention?.identifier === identifier);
    }

    override chapterAt(place: string): $Chapter | undefined {
        return super.chapterAt(place) ?? this.books.find(book => this.placeOf(book) === place);
    }

    placeOf(entry: $Chapter): string | undefined {
        const slug = entry.title?.annotations.expressed($Referent)?.identifier;
        const address = this.means?.identifier;
        if (slug === undefined || address === undefined) return undefined;
        return `${address.replace(/\/+$/u, '')}/#${slug}`;
    }

    protected override $Bound(): void {
        const CatalogueDesk = $(catalogueDesk);
        for (const chapter of [this.synopsis, ...this.books])
            chapter?.annotations.add(this,
                <CatalogueDesk />
            );
        super.$Bound();
    }
}

export class $CatalogueDesk extends $Format {
    specification = new CatalogueDeskSpecification();
    card: ElementType = selection.div`
        &:not(.pa-open) { display: none; }
    `;
    get chapter(): $Chapter { return this.parent as $Chapter; }
    get catalogue(): $Catalogue { return this.book as $Catalogue; }
    get isTheFront(): boolean { return this.chapter === this.catalogue.synopsis; }
    get cover(): $Chapter | undefined { return this.catalogue.jacketOf(this.chapter); }

    $CatalogueDesk(...chemicals: $Chemical[]) {
        this.$Format(...chemicals);
        const Switch = $(switchOf);
        const Card = this.card;
        this.style = ({ className, children }: { className?: string; children?: ReactNode }) => {
            const catalogue = this.catalogue;
            const cover = this.cover;
            const open = [...this.chapter.classes].includes('pa-open');
            const Title = this.isTheFront ? $(catalogue.title!) : undefined;
            return catalogue.painted(cover, (
                <Card className={`${className ?? ''} pd-catalogue-desk${open ? ' pa-open' : ''}`.trim()}>
                    {catalogue.jacket(cover)}
                    <div className="pd-words">
                        {Title === undefined ? undefined : (
                            <Title />
                        )}
                        {children}
                    </div>
                    {cover === undefined ? undefined : (
                        <div className="pd-line">
                            {catalogue.line(cover)}
                        </div>
                    )}
                    {catalogue.wayIntoTheBook(cover)}
                    {cover === undefined ? undefined : (
                        <Switch
                            chapter={this.chapter}
                            annotation={UnfoldedDesk}
                        >
                            read on
                        </Switch>
                    )}
                </Card>
            ));
        };
    }

    override defines(writing: $Writing): void {
        super.defines(writing);
        writing.classes.add(this, 'pa-catalogue-desk');
    }

    override erase(writing: $Writing): void {
        super.erase(writing);
        writing.classes.revert(this);
    }
}

export class CatalogueDeskSpecification extends AnnotationSpecification {
    @specify('a catalogue desk holds a synopsis')
    $holdsASynopsis(writing: $Writing): void {
        $check(writing instanceof $Chapter && writing.is($Synopsis), 'a catalogue desk holds a synopsis, and this is not one');
    }
}

export class $BookLink extends $SelfReference {
    @inert() protected _book?: string;
    override get identifier(): string { return this._book ?? super.identifier; }

    protected override $Bound(): void {
        super.$Bound();
        this._book = this.chapter?.annotations.expressed($Synopsis)?.means?.identifier;
    }
}

export class $Caption extends $Annotation {
    specification = new CaptionSpecification();

    override defines(writing: $Writing): void {
        writing.classes.add(this, 'pa-caption');
    }

    override erase(writing: $Writing): void {
        writing.classes.revert(this);
    }
}

export class $Arrow extends $Annotation {
    specification = new ArrowSpecification();

    override defines(writing: $Writing): void {
        writing.classes.add(this, 'pa-arrow');
    }

    override erase(writing: $Writing): void {
        writing.classes.revert(this);
    }
}

export class $UnfoldedDesk extends $Annotation {
    specification = new OfABookSpecification();

    override defines(writing: $Writing): void {
        writing.classes.add(this, 'pa-unfolded-desk');
    }

    override erase(writing: $Writing): void {
        writing.classes.revert(this);
    }
}

export class CaptionSpecification extends AnnotationSpecification {
    @specify('a caption is a paragraph')
    $isAParagraph(writing: $Writing): void {
        $check(writing instanceof $Paragraph, 'a caption is a paragraph, and this is not one');
    }
}

export class ArrowSpecification extends AnnotationSpecification {
    @specify('an arrow is a word of the table of contents')
    $isAWordOfTheTable(writing: $Writing): void {
        $check(writing instanceof $Word && writing.chapter?.is($TableOfContents) === true,
            'an arrow is a word of the table of contents, and this is not one');
    }
}

export const Catalogue = $($Catalogue);
export const CatalogueDesk = $($CatalogueDesk);
export const BookLink = $($BookLink);
export const Caption = $($Caption);
export const Arrow = $($Arrow);
export const UnfoldedDesk = $($UnfoldedDesk);
const catalogueDesk = CatalogueDesk;
$(Catalogue, Self)(BookLink);
$(Catalogue, Theme)(Bookshelf);
$(Catalogue, tone)(light);
