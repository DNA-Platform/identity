import { ReactNode } from 'react';
import { $ } from '@dna-platform/chemistry';
import { $Paragraph, Code as code, Word as word } from '@dna-platform/public';

export class $Listing extends $Paragraph {
    $identifier = '';
    $type = '';
    get name(): string { return `${this.$identifier}${this.$type}`; }

    override write(): ReactNode {
        const Word = $(word);
        const Code = $(code);
        return (
            <>
                <Word>
                    {this.name}
                </Word>
                <Code
                    identifier={this.$identifier}
                    type={this.$type}
                    numbered
                />
            </>
        );
    }

    protected override $Define(): void {
        super.$Define();
        this.classes.add(this, 'pd-listing');
    }
}

export const Listing = $($Listing);
