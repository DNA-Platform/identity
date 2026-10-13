import { $ } from '@dna-platform/chemistry';
import { $Paragraph } from '@dna-platform/public';

export class $Action extends $Paragraph {
    protected override $Define(): void {
        super.$Define();
        this.classes.add(this, 'pd-action');
    }
}

export class $Result extends $Paragraph {
    protected override $Define(): void {
        super.$Define();
        this.classes.add(this, 'pd-result');
    }
}

export const Action = $($Action);
export const Result = $($Result);
