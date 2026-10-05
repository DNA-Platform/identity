import { ComponentType, ElementType } from 'react';
import { $, selection } from '@dna-platform/chemistry';
import { $Content, $Writing } from '@dna-platform/public';

export class $Shelfmark extends $Content {
    override anchor: ElementType = selection(this.anchor as ComponentType<{ className?: string }>).attrs({ className: 'pa-shelfmark' })``;

    override defines(writing: $Writing): void {
        super.defines(writing);
        writing.classes.add(this, 'pa-shelfmark');
    }
}

export const Shelfmark = $($Shelfmark);
