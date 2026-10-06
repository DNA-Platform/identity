import { ReactNode } from 'react';
import { $, $check } from '@dna-platform/chemistry';
import { $Annotation, $Append, $Book, $Chapter, $Composition, $Reference, $Section, BookSpecification, Given, Theme, specify } from '@dna-platform/public';
import { Listing as listing } from './2-the-listing~code.tsx';
import { LibraryBookTheme } from './3-the-theme~code.tsx';
import { Byline as byline, FiledUnder as filedUnder } from './8-the-author-and-the-subject~code.tsx';
import { Layout as layout } from './12-the-layout~code.tsx';
import { $Appendix } from './14-the-entry~code.tsx';
import { Dark as dark, Light as light, Tone as tone, WhiteOverBlack as whiteOverBlack } from './16-the-tone~code.tsx';
import { Subjects } from '../..reference/o1-the-catalogue~subjects.tsx';
import { Turn as turn } from './13-the-turn~code.tsx';

export class $LibraryBook extends $Book {
    specification = new LibraryBookSpecification();
    get chapters(): $Chapter[] {
        return this.text.find($Chapter).filter(chapter => [...chapter.classes].includes('pd-canonical'));
    }
    get placed(): ($Chapter | undefined)[] {
        return [this.cover, this.synopsis, this.table, ...this.chapters];
    }
    get pages(): $Chapter[] {
        const appendix = this.appendix;
        return this.chapters.filter(chapter => !appendix.includes(chapter));
    }
    get appendix(): $Chapter[] {
        const table = this.table;
        if (table === undefined) return [];
        const places = table.text.find($Section).filter(section => section.is($Appendix))
            .flatMap(section => section.text.find($Reference).map(reference => reference.identifier));
        return this.chapters.filter(chapter => places.includes(chapter.mention?.identifier ?? ''));
    }
    get open(): $Chapter | undefined {
        return this.$bookmark === undefined ? undefined : this.named(this.$bookmark);
    }
    get tones(): Given<$Annotation>[] {
        return [dark, light, whiteOverBlack];
    }

    override write(): ReactNode {
        return (
            <>
                <div className="pd-library">
                    {this.library()}
                </div>
                <div className="pd-me">
                    {this.byline()}
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
                </div>
            </>
        );
    }

    library(): ReactNode {
        return (
            <>
                {this.filed()}
                {this.subjects()}
            </>
        );
    }

    subjects(): ReactNode {
        return (
            <div className="pd-subjects">
                <Subjects />
            </div>
        );
    }

    holds(): ReactNode {
        const Table = $(this.table!);
        return (
            <Table />
        );
    }

    head(): ReactNode {
        const Cover = $(this.cover!);
        return (
            <>
                <Cover />
                <div className="pd-switches">
                    {this.switches()}
                </div>
            </>
        );
    }

    front(): ReactNode {
        return (
            <div className={this.open === undefined ? 'pd-leaf pd-front pd-open' : 'pd-leaf pd-front'}>
                {this.opening()}
            </div>
        );
    }

    opening(): ReactNode {
        const Synopsis = $(this.synopsis!);
        return (
            <div className="pd-words">
                <Synopsis />
            </div>
        );
    }

    leaves(): ReactNode {
        return this.chapters.map((chapter, index) => {
            const Chapter = $(chapter);
            return (
                <div
                    key={index}
                    className={chapter === this.open ? 'pd-leaf pd-open' : 'pd-leaf'}
                >
                    <div className="pd-words">
                        <Chapter />
                    </div>
                    <div className="pd-files">
                        {this.listings(chapter)}
                    </div>
                </div>
            );
        });
    }

    named(place: string): $Chapter | undefined {
        return this.chapters.find(chapter => chapter.mention?.identifier === place
            || this.sections(chapter).some(section => section.mention?.identifier === place));
    }

    byline(): ReactNode {
        const Byline = $(byline);
        return (
            <Byline chapter={this.cover} />
        );
    }

    filed(): ReactNode {
        const FiledUnder = $(filedUnder);
        return (
            <FiledUnder chapter={this.cover} />
        );
    }

    switches(): ReactNode {
        return undefined;
    }

    listings(chapter: $Chapter): ReactNode {
        const Listing = $(listing);
        return chapter.annotations.find($Append).reverse().map((append, index) => (
            <Listing
                key={index}
                chapter={chapter}
                identifier={append.$identifier}
                type={append.$type}
            />
        ));
    }

    sections(composition: $Composition): $Section[] {
        return composition.text.find($Section).flatMap(section => [section, ...this.sections(section)]);
    }

    protected override turn(): void {
        if (this.bookmark === this.cover) return;
        super.turn();
    }

    protected override $Define(): void {
        super.$Define();
        const Layout = $(layout);
        const Tone = $(tone);
        this.annotations.add(this,
            <Layout />,
            <Tone />
        );
    }

    protected override $Bound(): void {
        const Turn = $(turn);
        for (const chapter of this.pages)
            chapter.text.add(this,
                <Turn />
            );
        super.$Bound();
    }
}

export class LibraryBookSpecification extends BookSpecification {
    @specify('a book of this library holds only chapters')
    $holdsOnlyChapters(book: $LibraryBook): void {
        $check([...book.text].every(chemical => chemical instanceof $Chapter),
            'a book of this library holds only chapters, and this one holds something else');
    }

    @specify('a book of this library has a place for every chapter it holds')
    $placesEveryChapter(book: $LibraryBook): void {
        $check(book.text.find($Chapter).every(chapter => book.placed.includes(chapter)),
            'a book of this library has a place for every chapter it holds, and this one holds a chapter it places nowhere');
    }

    @specify('only an ordinary chapter appends a file')
    $onlyAChapterAppends(book: $LibraryBook): void {
        $check(book.text.find($Chapter).every(chapter => book.chapters.includes(chapter) || !chapter.is($Append)),
            'only an ordinary chapter appends a file, and here a cover, a synopsis or a table of contents appends one');
    }
}

export const LibraryBook = $($LibraryBook);
$(LibraryBook, Theme)(LibraryBookTheme);
$(LibraryBook, tone)(dark);
