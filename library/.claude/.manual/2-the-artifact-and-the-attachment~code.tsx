import { $ } from '@dna-platform/chemistry';
import { $Paragraph } from '@dna-platform/public';

export class $Artifact extends $Paragraph {
    protected override $Define(): void {
        super.$Define();
        this.classes.add(this, 'pd-artifact');
    }
}

export class $Attachment extends $Paragraph {
    protected override $Define(): void {
        super.$Define();
        this.classes.add(this, 'pd-attachment');
    }
}

export const Artifact = $($Artifact);
export const Attachment = $($Attachment);
