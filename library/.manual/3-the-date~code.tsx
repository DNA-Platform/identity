import { ReactNode } from 'react';
import { $ } from '@dna-platform/chemistry';
import { $Annotation, $Writing, binder, html } from '@dna-platform/public';

export class $Dated extends $Annotation {
    get name(): string { return binder.reference(html.copy(this.text))?.name ?? ''; }
    get date(): string | undefined { return binder.reference(html.copy(this.text))?.identifier; }

    override note(): ReactNode {
        return (
            <time
                className="pd-dateline"
                dateTime={this.date}
            >
                {this.name}
            </time>
        );
    }

    override defines(writing: $Writing): void {
        writing.classes.add(this, 'pa-dated');
    }

    override erase(writing: $Writing): void {
        writing.classes.revert(this);
    }
}

export const Dated = $($Dated);
