import { ReactNode } from 'react';
import { $, $check, inert } from '@dna-platform/chemistry';
import { $Annotation, $Chapter, $Paragraph, $Referent, $SelfReference, $Synopsis, $TableOfContents, $Word, $Writing, AnnotationSpecification, Reference as reference, Self, Theme, Word as word, specify } from '@dna-platform/public';
import { $LibraryBook } from './1-the-book~code.tsx';
import { OfABookSpecification } from './1-the-book~said.tsx';
import { Byline as byline, FiledUnder as filedUnder } from './8-the-author-and-the-subject~code.tsx';
import { Switch as switchOf } from './9-the-switch~code.tsx';
import { $Index, leads } from './14-the-entry~code.tsx';
import { Light as light, Tone as tone } from './16-the-tone~code.tsx';
import { $Volume, Jacket as jacket } from './19-the-cover~code.tsx';
import { Bookshelf } from './20-the-bookshelf~theme.tsx';

export class $Catalogue extends $LibraryBook {
    get books(): $Chapter[] {
        return this.text.find($Chapter).filter(chapter => chapter.is($Synopsis) && chapter !== this.synopsis);
    }
    override get placed(): ($Chapter | undefined)[] {
        return [...super.placed, ...this.books];
    }
    override get pages(): $Chapter[] {
        return [...this.books, ...super.pages];
    }

    override write(): ReactNode {
        return (
            <>
                <div className="pd-library">
                    {this.library()}
                </div>
                <div className="pd-me">
                    {this.me()}
                </div>
                <div className="pd-holds">
                    {this.holds()}
                </div>
                <div className="pd-head">
                    {this.head()}
                </div>
                <div className="pd-leaves">
                    {this.front()}
                    {this.leaves()}
                    <div className="pd-shelf">
                        {this.volumes()}
                    </div>
                </div>
            </>
        );
    }

    override head(): ReactNode {
        return (
            <div className="pd-switches">
                {this.switches()}
            </div>
        );
    }

    override front(): ReactNode {
        const Switch = $(switchOf);
        return this.painted(this.cover, (
            <div className={this.open === undefined ? 'pd-leaf pd-front pd-desk pd-open' : 'pd-leaf pd-front pd-desk'}>
                {this.jacket(this.cover)}
                {this.opening()}
                {this.reading(this.cover)}
                <Switch
                    chapter={this.cover}
                    of={Unfolded}
                >
                    read on
                </Switch>
            </div>
        ));
    }

    override opening(): ReactNode {
        const Title = $(this.title!);
        const Synopsis = $(this.synopsis!);
        return (
            <div className="pd-words">
                {this.shelved(this.cover)}
                <Title />
                {this.line(this.cover)}
                <Synopsis />
            </div>
        );
    }

    override leaves(): ReactNode {
        const books = this.books;
        return [
            ...books.map((chapter, index) => this.desk(chapter, index)),
            ...this.chapters.map((chapter, index) => this.leaf(chapter, books.length + index)),
        ];
    }

    desk(chapter: $Chapter, index: number): ReactNode {
        const Switch = $(switchOf);
        {
            const Chapter = $(chapter);
            const cover = this.jacketOf(chapter);
            return this.painted(cover, (
                <div
                    key={index}
                    className={chapter === this.open ? 'pd-leaf pd-desk pd-open' : 'pd-leaf pd-desk'}
                >
                    {this.jacket(cover)}
                    <div className="pd-words">
                        {this.shelved(cover)}
                        <Chapter />
                    </div>
                    {cover === undefined ? undefined : (
                        <div className="pd-line">
                            {this.line(cover)}
                        </div>
                    )}
                    {this.reading(cover)}
                    {cover === undefined ? undefined : (
                        <Switch
                            chapter={chapter}
                            of={Unfolded}
                        >
                            read on
                        </Switch>
                    )}
                    <div className="pd-files">
                        {this.listings(chapter)}
                    </div>
                </div>
            ), index);
        }
    }

    volumes(): ReactNode {
        const Word = $(word);
        const Reference = $(reference);
        const rows = this.table?.annotations.expressed($Index)?.entries ?? [];
        return rows.map((row, index) => {
            const place = leads(row)!.identifier;
            const chapter = this.named(place);
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

    shelved(cover: $Chapter | undefined): ReactNode {
        if (cover === undefined) return undefined;
        return (
            <div className="pd-paragraph pd-shelved">
                {cover === this.cover ? 'filed under itself' : 'filed here'}
            </div>
        );
    }

    line(cover: $Chapter | undefined): ReactNode {
        if (cover === undefined) return undefined;
        const Byline = $(byline);
        const FiledUnder = $(filedUnder);
        return (
            <>
                <Byline cover={cover} />
                <FiledUnder cover={cover} />
            </>
        );
    }

    reading(cover: $Chapter | undefined): ReactNode {
        if (cover === undefined) return undefined;
        const Word = $(word);
        const Reference = $(reference);
        const address = cover.mention!.identifier;
        return (
            <div className="pd-paragraph pd-read">
                <Word>
                    <Reference>{address}</Reference>
                    {cover === this.cover ? 'This is the catalogue' : `Read ${cover.title!.name}`} →
                </Word>
            </div>
        );
    }

    jacketOf(chapter: $Chapter): $Chapter | undefined {
        return chapter.annotations.expressed($Volume)?.cover ?? (this.appendix.includes(chapter) ? undefined : this.cover);
    }

    override coverOf(identifier: string | undefined): $Chapter | undefined {
        return super.coverOf(identifier) ?? this.books
            .map(book => book.annotations.expressed($Volume)?.cover)
            .find(cover => cover !== undefined && cover.mention?.identifier === identifier);
    }

    override named(place: string): $Chapter | undefined {
        return super.named(place) ?? this.books.find(book => this.placeOf(book) === place);
    }

    placeOf(entry: $Chapter): string | undefined {
        const slug = entry.title?.annotations.expressed($Referent)?.identifier;
        const address = this.means?.identifier;
        if (slug === undefined || address === undefined) return undefined;
        return `${address.replace(/\/+$/u, '')}/#${slug}`;
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

export class $Unfolded extends $Annotation {
    specification = new OfABookSpecification();

    override defines(writing: $Writing): void {
        writing.classes.add(this, 'pa-unfolded');
    }

    override erase(writing: $Writing): void {
        writing.classes.revert(this);
    }
}

export class CaptionSpecification extends AnnotationSpecification {
    @specify('a caption is said of a paragraph')
    $saidOfAParagraph(writing: $Writing): void {
        $check(writing instanceof $Paragraph, 'a caption is said of a paragraph, and this is not one');
    }
}

export class ArrowSpecification extends AnnotationSpecification {
    @specify('an arrow is said of a word of a table of contents')
    $saidOfAWord(writing: $Writing): void {
        $check(writing instanceof $Word && writing.chapter?.is($TableOfContents) === true,
            'an arrow is said of a word of a table of contents, and this is not one');
    }
}

export const Catalogue = $($Catalogue);
export const BookLink = $($BookLink);
export const Caption = $($Caption);
export const Arrow = $($Arrow);
export const Unfolded = $($Unfolded);
$(Catalogue, Self)(BookLink);
$(Catalogue, Theme)(Bookshelf);
$(Catalogue, tone)(light);
