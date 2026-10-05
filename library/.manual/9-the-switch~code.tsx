import { ElementType, ReactNode } from 'react';
import { $, $Chemical } from '@dna-platform/chemistry';
import { $Annotation, $Word, Given } from '@dna-platform/public';

export class $Choice extends $Word {
    $of!: Given<$Annotation>;
    protected _button!: ElementType;
    get on(): boolean { return this.book!.is(this.$of); }

    $Choice(...chemicals: $Chemical[]) {
        this.$Writing(...chemicals);
        this._button = (props: { children?: ReactNode }) => (
            <button
                type="button"
                aria-pressed={this.on}
                onClick={() => this.press()}
                {...props}
            />
        );
        this.containers.replace(this, 'span', this._button);
    }

    press(): void {
        const book = this.book!;
        const given = [book.$is].flat();
        book.$is = this.on ? given.filter(each => each !== this.$of) : [this.$of, ...given];
    }

    protected override $Define(): void {
        super.$Define();
        this.classes.add(this, 'pd-choice');
    }
}

export class $Pick extends $Choice {
    $among!: Given<$Annotation>[];

    override press(): void {
        const book = this.book!;
        const kept = [book.$is].flat().filter(each => !this.$among.includes(each));
        book.$is = [this.$of, ...kept];
    }
}

export const Choice = $($Choice);
export const Pick = $($Pick);
