import { ReactNode } from 'react';
import { $ } from '@dna-platform/chemistry';
import { $Chapter, $Referent, $Synopsis, Self } from '@dna-platform/public';
import { $LibraryBook } from '../.manual/.book';
import { BookLink } from './o1-the-catalogue~booklink.tsx';
import { Shelf as shelf } from './o1-the-catalogue~views.tsx';

export class $Catalogue extends $LibraryBook {
    get books(): $Chapter[] {
        return this.text.find($Chapter).filter(chapter => chapter.is($Synopsis) && chapter !== this.synopsis);
    }
    override get placed(): ($Chapter | undefined)[] {
        return [...super.placed, ...this.books];
    }
    override get pages(): $Chapter[] {
        return [...this.chapters, ...this.books];
    }

    override head(): ReactNode {
        return (
            <div className="pd-switches">
                {this.switches()}
            </div>
        );
    }

    override front(): ReactNode {
        return (
            <div className="pd-leaf pd-front pd-open">
                {this.opening()}
            </div>
        );
    }

    override opening(): ReactNode {
        return (
            <>
                {super.opening()}
                <div className="pd-shelf">
                    {this.volumes()}
                </div>
            </>
        );
    }

    volumes(): ReactNode {
        return [this.cover!, ...this.books].map((volume, index) => {
            const Volume = $(volume);
            return (
                <div
                    key={index}
                    className={volume === this.open ? 'pd-volume pa-open' : 'pd-volume'}
                >
                    <Volume />
                </div>
            );
        });
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

    protected override $Define(): void {
        super.$Define();
        const Shelf = $(shelf);
        this.annotations.add(this,
            <Shelf />
        );
    }
}

export const Catalogue = $($Catalogue);
$(Catalogue, Self)(BookLink);
