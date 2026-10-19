import { ReactNode } from 'react';
import { css, RuleSet } from 'styled-components';
import { $, $check } from '@dna-platform/chemistry';
import { $Annotation, $Chapter, $Paragraph, $Word, $Writing, Theme, specify } from '@dna-platform/public';
import { $LibraryBook, LibraryBookSpecification } from './1-the-book~code.tsx';
import { OfABookSpecification } from './1-the-book~said.tsx';
import { $Dated } from './4-the-date~code.tsx';
import { Switch as switchWord } from './9-the-switch~code.tsx';
import { $Layout, Layout as layout } from './12-the-layout~code.tsx';
import { $Index } from './14-the-entry~code.tsx';
import { Light as light, Tone as tone } from './16-the-tone~code.tsx';
import { Typeset } from './28-the-journal~theme.tsx';

export const dayOf = (chapter: $Chapter): string => chapter.annotations.expressed($Dated)?.date?.date ?? '';

export const monthOf = (chapter: $Chapter): string => {
    const [year, month] = dayOf(chapter).split('-');
    if (year === undefined || month === undefined) return '';
    return new Date(Date.UTC(Number(year), Number(month) - 1, 1)).toLocaleString('en-GB', { month: 'long', year: 'numeric', timeZone: 'UTC' });
};

export class $NewestFirst extends $Annotation {
    specification = new OfABookSpecification();

    override defines(writing: $Writing): void {
        writing.classes.add(this, 'pa-newest-first');
    }

    override erase(writing: $Writing): void {
        writing.classes.revert(this);
    }
}

export const NewestFirst = $($NewestFirst);
const newestFirst = NewestFirst;

export class $EntryOrder extends $Paragraph {
    override write(): ReactNode {
        const Switch = $(switchWord);
        return (
            <Switch annotation={newestFirst}>
                newest first
            </Switch>
        );
    }

    protected override $Define(): void {
        super.$Define();
        this.classes.add(this, 'pd-entry-order');
    }
}

export class $EntryNumber extends $Word {
    override write(): ReactNode {
        return String((this.book as $Journal).entries.indexOf(this.chapter!) + 1);
    }

    protected override $Define(): void {
        super.$Define();
        this.classes.add(this, 'pd-entry-number');
    }
}

export class $JournalLayout extends $Layout {
    protected override paging(): RuleSet {
        return css``;
    }
}

export const EntryOrder = $($EntryOrder);
export const EntryNumber = $($EntryNumber);
export const JournalLayout = $($JournalLayout);
const entryOrder = EntryOrder;
const entryNumber = EntryNumber;

export class $Journal extends $LibraryBook {
    override specification = new JournalSpecification();
    get latest(): $Chapter | undefined {
        return [...this.entries].sort((a, b) => dayOf(b).localeCompare(dayOf(a)))[0];
    }
    override get pages(): $Chapter[] {
        const entries = [...this.entries].sort((a, b) => dayOf(a).localeCompare(dayOf(b)));
        return this.is($NewestFirst) ? entries.reverse() : entries;
    }
    override get open(): $Chapter | undefined {
        return super.open ?? this.latest;
    }

    override head(): ReactNode {
        return undefined;
    }

    override switches(): ReactNode {
        return undefined;
    }

    protected override turns(): void {
        return undefined;
    }

    protected override $Bound(): void {
        const EntryNumber = $(entryNumber);
        for (const chapter of this.entries)
            chapter.text.add(this,
                <EntryNumber />
            );
        const index = this.table?.annotations.expressed($Index);
        if (index !== undefined) index.$dated = true;
        const EntryOrder = $(entryOrder);
        this.table?.text.add(this,
            <EntryOrder />
        );
        this.$is = [newestFirst];
        super.$Bound();
    }
}

export class JournalSpecification extends LibraryBookSpecification {
    @specify('every entry of a journal is dated')
    $everyEntryIsDated(book: $Journal): void {
        const undated = book.entries.find(chapter => !chapter.is($Dated));
        $check(undated === undefined, `every entry of a journal is dated, and "${undated?.title?.name}" is not`);
    }

    @specify('every entry of a journal says the month of its date as its part')
    $everyEntrySaysItsMonth(book: $Journal): void {
        const astray = book.entries.find(chapter => chapter.part?.name !== monthOf(chapter));
        $check(astray === undefined, astray === undefined ? '' :
            `every entry of a journal says the month of its date as its part, and "${astray.title?.name}" says "${astray.part?.name ?? 'none'}" for ${monthOf(astray)}`);
    }
}

export const Journal = $($Journal);
$(Journal, Theme)(Typeset);
$(Journal, tone)(light);
$(Journal, layout)(JournalLayout);
