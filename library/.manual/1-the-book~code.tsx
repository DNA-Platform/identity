import { Fragment, ReactNode } from 'react';
import { $, $check } from '@dna-platform/chemistry';
import { $Append, $Book, $Chapter, $Composition, $Section, BookSpecification, Theme, specify } from '@dna-platform/public';
import { Listing as listing } from './2-the-listing~code.tsx';
import { DougsTheme } from './3-the-theme~code.tsx';
import { Outlined as outlined } from './7-the-outline~code.tsx';
import { Byline as byline, FiledUnder as filedUnder } from './8-the-author-and-the-subject~code.tsx';
import { Choice as choice } from './9-the-switch~code.tsx';
import { Paged as paged } from './12-the-pages~code.tsx';

export class $DougsBook extends $Book {
    specification = new DougsBookSpecification();
    get chapters(): $Chapter[] {
        return this.text.find($Chapter).filter(chapter => [...chapter.classes].includes('pd-canonical'));
    }
    get open(): $Chapter | undefined {
        const place = this.$bookmark;
        if (place === undefined) return undefined;
        return this.chapters.find(chapter => chapter.mention?.identifier === place
            || this.sections(chapter).some(section => section.mention?.identifier === place));
    }

    override write(): ReactNode {
        return this.text.find($Chapter).map((chapter, index) => {
            const Chapter = $(chapter);
            return (
                <Fragment key={index}>
                    <Chapter />
                    {chapter === this.cover && this.byline()}
                    {chapter === this.cover && this.filed()}
                    {chapter === this.cover && this.choices()}
                    {this.listings(chapter)}
                </Fragment>
            );
        });
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

    choices(): ReactNode {
        const Choice = $(choice);
        return (
            <Choice
                chapter={this.cover}
                of={outlined}
            >
                outline
            </Choice>
        );
    }

    pages(): ReactNode {
        return this.chapters.map((chapter, index) => {
            const Chapter = $(chapter);
            return (
                <div
                    key={index}
                    className={chapter === this.open ? 'pd-page pd-open' : 'pd-page'}
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
        return chapter.annotations.find($Append).map((append, index) => (
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

    protected override $Define(): void {
        super.$Define();
        const Paged = $(paged);
        this.annotations.add(this,
            <Paged />
        );
    }
}

export class DougsBookSpecification extends BookSpecification {
    @specify('a book of this library holds only chapters')
    $holdsOnlyChapters(book: $DougsBook): void {
        $check([...book.text].every(chemical => chemical instanceof $Chapter),
            'a book of this library holds only chapters, and this one holds something else');
    }

    @specify('only an ordinary chapter appends a file')
    $onlyAChapterAppends(book: $DougsBook): void {
        $check(book.text.find($Chapter).every(chapter => book.chapters.includes(chapter) || !chapter.is($Append)),
            'only an ordinary chapter appends a file, and here a cover, a synopsis or a table of contents appends one');
    }
}

export const DougsBook = $($DougsBook);
$(DougsBook, Theme)(DougsTheme);
