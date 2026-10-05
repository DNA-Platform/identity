import { $ } from '@dna-platform/chemistry';
import { $Annotation, $Chapter, $Content, $Paginated, $Section, $Writing } from '@dna-platform/public';

export class $Appendix extends $Annotation {
    override defines(writing: $Writing): void {
        writing.classes.add(this, 'pa-appendix');
    }

    override erase(writing: $Writing): void {
        writing.classes.revert(this);
    }
}

export class $Paged extends $Paginated {
    override get pages(): $Chapter[] { return super.pages.filter(page => page !== this.book?.table && page !== this.book?.synopsis); }
    get front(): $Chapter | undefined { return this.pages.find(page => page !== this.book?.cover && !page.is($Appendix)); }
    override get open(): $Chapter | undefined {
        const book = this.book;
        if (book === undefined) return super.open;
        if (book.bookmark !== undefined && book.bookmark !== book.cover) return book.bookmark;
        const place = book.bookmark === undefined ? book.$bookmark : undefined;
        const holding = place === undefined ? undefined : this.pages.find(page => page.text.find($Section).some(section => section.mention?.identifier === place));
        return holding ?? this.front ?? super.open;
    }

    override defines(writing: $Writing): void {
        super.defines(writing);
        const synopsis = this.book?.synopsis;
        if (synopsis !== undefined) this.show(synopsis, this.open === this.book?.cover);
    }

    protected show(writing: $Writing, shown: boolean): void {
        const open = [...writing.classes].includes('pa-open');
        if (shown && !open) writing.classes.add(this, 'pa-open');
        if (!shown && open) writing.classes.revert(this);
    }
}

export class $Entry extends $Annotation {
    get identifier(): string | undefined {
        const entry = this.parent;
        return entry instanceof $Writing ? entry.annotations.expressed($Content)?.identifier : undefined;
    }
    get meant(): $Chapter | undefined {
        const identifier = this.identifier;
        if (identifier === undefined || identifier === '') return undefined;
        return this.book?.text.find($Chapter).find(chapter => chapter.mention?.identifier === identifier);
    }

    override defines(writing: $Writing): void {
        const book = this.book;
        if (book === undefined) return;
        const chapter = this.meant;
        const place = chapter === undefined && book.$bookmark !== undefined && book.$bookmark === this.identifier;
        const open = place || (chapter !== undefined && book.annotations.expressed($Paged)?.open === chapter);
        const lit = [...writing.classes].includes('pa-open');
        if (open && !lit) writing.classes.add(this, 'pa-open');
        if (!open && lit) writing.classes.revert(this);
    }

    override erase(writing: $Writing): void {
        writing.classes.revert(this);
    }
}

export const Appendix = $($Appendix);
export const Paged = $($Paged);
export const Entry = $($Entry);
