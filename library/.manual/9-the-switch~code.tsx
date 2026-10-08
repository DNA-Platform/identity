import { ReactNode } from 'react';
import { $, $Chemical } from '@dna-platform/chemistry';
import { $Annotation, $Word, ContainerProps, Given } from '@dna-platform/public';

export class $Switch extends $Word {
    $of!: Given<$Annotation>;
    get on(): boolean { return [this.book!.$is].flat().includes(this.$of); }

    $Switch(...chemicals: $Chemical[]) {
        this.$Writing(...chemicals);
        this.containers.replace(this, 'span', 'button');
    }

    override container(props: ContainerProps): ReactNode {
        return super.container({ type: 'button', 'aria-pressed': this.on, onClick: () => this.press(), ...props });
    }

    press(): void {
        const book = this.book!;
        const annotations = [book.$is].flat();
        book.$is = this.on ? annotations.filter(annotation => annotation !== this.$of) : [this.$of, ...annotations];
    }

    protected override $Define(): void {
        super.$Define();
        this.classes.add(this, 'pd-switch');
    }
}

export class $Tab extends $Switch {
    $among!: Given<$Annotation>[];

    override press(): void {
        const book = this.book!;
        const annotations = [book.$is].flat().filter(annotation => !this.$among.includes(annotation));
        book.$is = [this.$of, ...annotations];
    }
}

export const Switch = $($Switch);
export const Tab = $($Tab);
