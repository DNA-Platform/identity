import { $ } from '@dna-platform/chemistry';
import { $Chapter, $Paginated, $Section, $Writing } from '@dna-platform/public';

export class $Paged extends $Paginated {
    override get pages(): $Chapter[] { return super.pages.filter(page => page !== this.book?.cover && page !== this.book?.table); }

    override get open(): $Chapter | undefined {
        const book = this.book;
        if (book === undefined) return undefined;
        const place = book.$bookmark;
        const chapter = book.bookmark ?? (place === undefined ? undefined
            : this.pages.find(page => page.text.find($Section).some(section => section.mention?.identifier === place)));
        return chapter !== undefined && this.pages.includes(chapter) ? chapter : book.synopsis;
    }

    override defines(writing: $Writing): void {
        super.defines(writing);
        if (this.open === this.book?.synopsis)
            writing.classes.add(this, 'pa-front');
    }
}

export const Paged = $($Paged);
