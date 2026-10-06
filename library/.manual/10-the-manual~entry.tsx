import { ReactNode } from 'react';
import { $, selection } from '@dna-platform/chemistry';
import type { $LibraryBook } from './1-the-book~code.tsx';
import { Manual } from './10-the-manual~code.tsx';
import { $Entry, Entry } from './14-the-entry~code.tsx';

export class $NumberedEntry extends $Entry {
    label = selection.span.attrs({ className: 'pa-number' })``;
    get number(): number {
        return (this.book as $LibraryBook).pages.indexOf(this.leads!) + 1;
    }

    override note(): ReactNode {
        const Label = this.label;
        return this.number === 0 ? undefined : (
            <Label>{String(this.number)}</Label>
        );
    }
}

export const NumberedEntry = $($NumberedEntry);
$(Manual, Entry)(NumberedEntry);
