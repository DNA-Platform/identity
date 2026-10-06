import { Fragment, ReactNode } from 'react';
import { $, $check } from '@dna-platform/chemistry';
import { $Append, $Book, $Chapter, $Composition, $Section, BookSpecification, Theme, specify } from '@dna-platform/public';
import { Listing as listing } from './2-the-listing~code.tsx';
import { LibraryBookTheme } from './3-the-theme~code.tsx';
import { Outlined as outlined } from './7-the-outline~code.tsx';
import { Byline as byline, FiledUnder as filedUnder } from './8-the-author-and-the-subject~code.tsx';
import { Switch as switching } from './9-the-switch~code.tsx';
import { Layout as layout } from './12-the-layout~code.tsx';
import { Turn as turn } from './13-the-turn~code.tsx';

export class $LibraryBook extends $Book {
    specification = new LibraryBookSpecification();
    get chapters(): $Chapter[] {
        return this.text.find($Chapter).filter(chapter => [...chapter.classes].includes('pd-canonical'));
    }
    get placed(): ($Chapter | undefined)[] {
        return [this.cover, this.synopsis, this.table, ...this.chapters];
    }
    get open(): $Chapter | undefined {
        return this.$bookmark === undefined ? undefined : this.named(this.$bookmark);
    }

    override write(): ReactNode {
        return this.text.find($Chapter).map((chapter, index) => {
            const Chapter = $(chapter);
            return (
                <Fragment key={index}>
                    <Chapter />
                    {chapter === this.cover && this.byline()}
                    {chapter === this.cover && this.filed()}
                    {chapter === this.cover && this.switches()}
                    {this.listings(chapter)}
                </Fragment>
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
        const Switch = $(switching);
        return (
            <Switch
                chapter={this.cover}
                of={outlined}
            >
                outline
            </Switch>
        );
    }

    front(holds: ReactNode): ReactNode {
        return (
            <div className={this.open === undefined ? 'pd-leaf pd-front pd-open' : 'pd-leaf pd-front'}>
                {holds}
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
        this.annotations.add(this,
            <Layout />
        );
    }

    protected override $Bound(): void {
        const Turn = $(turn);
        for (const chapter of this.chapters)
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
