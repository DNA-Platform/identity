import { ReactNode } from 'react';
import { $, $Chemical } from '@dna-platform/chemistry';
import { $Code } from '@dna-platform/public';

export class $Artifact extends $Code {
    $Artifact(...chemicals: $Chemical[]) {
        this.$Code(...chemicals);
        this.containers.replace(this, 'pre', 'figure');
    }

    override write(): ReactNode {
        const words = [...this.text].map((chemical, index) => {
            const Word = $(chemical);
            return (
                <Word key={index} />
            );
        });
        return (
            <>
                <figcaption>
                    {words}
                </figcaption>
                <pre>
                    {super.write()}
                </pre>
            </>
        );
    }

    protected override $Define(): void {
        super.$Define();
        this.classes.add(this, 'pd-artifact');
    }
}

export class $Attachment extends $Code {
    $Attachment(...chemicals: $Chemical[]) {
        this.$Code(...chemicals);
        this.containers.replace(this, 'pre', 'figure');
    }

    override write(): ReactNode {
        const words = [...this.text].map((chemical, index) => {
            const Word = $(chemical);
            return (
                <Word key={index} />
            );
        });
        if (!this.names) {
            return (
                <figcaption>
                    {words}
                </figcaption>
            );
        }
        return (
            <>
                <figcaption>
                    {words}
                </figcaption>
                <pre>
                    {super.write()}
                </pre>
            </>
        );
    }

    protected override $Define(): void {
        super.$Define();
        this.classes.add(this, 'pd-attachment');
    }
}

export const Artifact = $($Artifact);
export const Attachment = $($Attachment);
