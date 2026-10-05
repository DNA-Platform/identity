import { Fragment, ReactNode } from 'react';
import { $, $check } from '@dna-platform/chemistry';
import { $Append, $Book, $Chapter, BookSpecification, Theme, specify } from '@dna-platform/public';
import { Listing as listing } from './2-the-listing~code.tsx';
import { DougsTheme } from './3-the-theme~code.tsx';
import { Outlined as outlined } from './7-the-outline~code.tsx';

export class $DougsBook extends $Book {
    specification = new DougsBookSpecification();

    override write(): ReactNode {
        return this.text.find($Chapter).map((chapter, index) => {
            const Chapter = $(chapter);
            return (
                <Fragment key={index}>
                    <Chapter />
                    {this.listings(chapter)}
                </Fragment>
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

    protected override $Define(): void {
        super.$Define();
        const Outlined = $(outlined);
        this.annotations.add(this,
            <Outlined />
        );
    }
}

export class DougsBookSpecification extends BookSpecification {
    @specify('a book of this library holds only chapters')
    $holdsOnlyChapters(book: $DougsBook): void {
        $check([...book.text].every(chemical => chemical instanceof $Chapter),
            'a book of this library holds only chapters, and this one holds something else');
    }
}

export const DougsBook = $($DougsBook);
$(DougsBook, Theme)(DougsTheme);
