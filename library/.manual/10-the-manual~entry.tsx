import { ReactNode } from 'react';
import { $, selection } from '@dna-platform/chemistry';
import { $Append } from '@dna-platform/public';
import { Manual } from './10-the-manual~code.tsx';
import { $Entry, Entry } from './14-the-entry~code.tsx';

export class $FileEntry extends $Entry {
    label = selection.span.attrs({ className: 'pa-file-type' })``;
    get type(): string {
        return this.leads?.annotations.find($Append)[0]?.$type ?? '';
    }

    override note(): ReactNode {
        const Label = this.label;
        return (
            <Label>{this.type}</Label>
        );
    }
}

export const FileEntry = $($FileEntry);
$(Manual, Entry)(FileEntry);
