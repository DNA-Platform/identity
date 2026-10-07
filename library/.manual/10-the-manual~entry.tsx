import { ReactNode } from 'react';
import { $, selection } from '@dna-platform/chemistry';
import { $Writing } from '@dna-platform/public';
import type { $LibraryBook } from './1-the-book~code.tsx';
import { $Manual, Manual } from './10-the-manual~code.tsx';
import { Split as split } from './10-the-manual~forward.tsx';
import { File as file } from './2-the-listing~code.tsx';
import { $Entry, Entry, Folded as folded, Twist as twist } from './14-the-entry~code.tsx';
import { $Kind, Icon as icon } from './o1-the-key~code.tsx';

export class $NumberedEntry extends $Entry {
    label = selection.span.attrs({ className: 'pa-number' })``;
    get number(): number {
        return (this.book as $LibraryBook).pages.indexOf(this.leads!) + 1;
    }
    get kind(): $Kind | undefined {
        return this.leads?.annotations.expressed($Kind);
    }
    get files(): string[] {
        const chapter = this.leads;
        return chapter === undefined ? [] : (this.book as $LibraryBook).filesOf(chapter);
    }

    override note(): ReactNode {
        const Label = this.label;
        const Icon = $(icon);
        const Twist = $(twist);
        const File = $(file);
        const kind = this.kind;
        const chapter = this.leads;
        const files = this.files;
        return (
            <>
                {files.length === 0 ? (
                    <span className="pd-twist pd-blank" />
                ) : (
                    <Twist
                        target={this.parent as $Writing}
                        of={folded}
                    />
                )}
                {kind === undefined ? undefined : <Icon kind={kind} />}
                {this.number === 0 ? undefined : <Label>{String(this.number)}</Label>}
                {files.map(name => (
                    <File
                        key={name}
                        chapter={chapter}
                        name={name}
                        of={split}
                        among={(this.book as $Manual).readings}
                    />
                ))}
            </>
        );
    }
}

export const NumberedEntry = $($NumberedEntry);
$(Manual, Entry)(NumberedEntry);
