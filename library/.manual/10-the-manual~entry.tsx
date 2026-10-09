import { ReactNode } from 'react';
import { $, selection } from '@dna-platform/chemistry';
import type { $LibraryBook } from './1-the-book~code.tsx';
import { ManualBook } from './10-the-manual~book.tsx';
import { $Entry, Entry } from './14-the-entry~code.tsx';
import { $Kind, Icon as icon } from './o1-the-key~code.tsx';

export class $NumberedEntry extends $Entry {
    label = selection.span.attrs({ className: 'pa-number' })``;
    get number(): number {
        return (this.book as $LibraryBook).pages.indexOf(this.leads!) + 1;
    }
    get kind(): $Kind | undefined {
        return this.leads?.annotations.expressed($Kind);
    }

    override note(): ReactNode {
        const Label = this.label;
        const Icon = $(icon);
        const kind = this.kind;
        return (
            <>
                {super.note()}
                {kind === undefined ? undefined : <Icon kind={kind} />}
                {this.number === 0 ? undefined : <Label>{String(this.number)}</Label>}
            </>
        );
    }
}

export const NumberedEntry = $($NumberedEntry);
$(ManualBook, Entry)(NumberedEntry);
