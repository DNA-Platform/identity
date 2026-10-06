import { $, inert } from '@dna-platform/chemistry';
import { $SelfReference, $Synopsis } from '@dna-platform/public';

export class $Shelfmark extends $SelfReference {
    @inert() protected _book?: string;
    override get identifier(): string { return this._book ?? super.identifier; }

    protected override $Bound(): void {
        super.$Bound();
        this._book = this.chapter?.annotations.expressed($Synopsis)?.means?.identifier;
    }
}

export const Shelfmark = $($Shelfmark);
