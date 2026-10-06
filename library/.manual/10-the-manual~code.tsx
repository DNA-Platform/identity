import { ReactNode } from 'react';
import { $, selection } from '@dna-platform/chemistry';
import { $Format, $Writing } from '@dna-platform/public';
import { $LibraryBook } from './1-the-book~code.tsx';
import { OfABookSpecification } from './1-the-book~said.tsx';
import { Switch as switching } from './9-the-switch~code.tsx';
import { CodeForward as codeForward } from './10-the-manual~forward.tsx';

export class $Spread extends $Format {
    specification = new OfABookSpecification();
    themeProvider = true;
    style = selection.div`
        .pa-spread .pd-leaf.pd-open {
            display: grid;
            grid-template-columns: minmax(0, 1fr) auto;
            grid-template-areas: 'words files';
            height: 100%;
        }
        .pa-spread .pd-words { grid-area: words; overflow-y: auto; }
        .pa-spread .pd-files { grid-area: files; overflow-y: auto; width: calc(2.2 * ${({ theme }) => theme.side}); }
        .pa-spread .pd-files:empty { display: none; }
        @media (max-width: ${({ theme }) => theme.narrow}) {
            .pa-spread .pd-leaf.pd-open { display: block; height: auto; }
            .pa-spread .pd-files { width: auto; }
        }
    `;

    override defines(writing: $Writing): void {
        super.defines(writing);
        writing.classes.add(this, 'pa-spread');
    }

    override erase(writing: $Writing): void {
        super.erase(writing);
        writing.classes.revert(this);
    }
}

export const Spread = $($Spread);

export class $Manual extends $LibraryBook {
    override switches(): ReactNode {
        const Switch = $(switching);
        return (
            <>
                {super.switches()}
                <Switch
                    chapter={this.cover}
                    of={codeForward}
                >
                    code forward
                </Switch>
            </>
        );
    }

    protected override $Define(): void {
        super.$Define();
        const Given = $(Spread);
        this.annotations.add(this,
            <Given />
        );
    }
}

export const Manual = $($Manual);
