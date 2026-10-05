import { ElementType, ReactNode } from 'react';
import { $, selection } from '@dna-platform/chemistry';
import { $DougsLibrary } from '../.manual/.book';

export class $TopBars extends $DougsLibrary {
    layout: ElementType = selection.div`
        min-height: 100vh;

        & > nav { display: flex; justify-content: space-between; align-items: center; padding-inline: ${({ theme }) => theme.space}; color: ${({ theme }) => theme.bright}; background: ${({ theme }) => theme.bar}; }
        & > nav .pd-library-title {
            margin: 0;
            padding-block: calc(${({ theme }) => theme.space} / 2);
            font-size: calc(0.6 * ${({ theme }) => theme.size});
            letter-spacing: 0.24em;
            text-transform: uppercase;
        }
        & > nav .pd-byline { margin: 0; }
        & > nav .pa-reference { color: inherit; }

        & > div { display: flex; flex-wrap: wrap; align-items: center; column-gap: ${({ theme }) => theme.space}; padding-inline: ${({ theme }) => theme.space}; background: ${({ theme }) => theme.tint}; }
        & > div .pd-chapter.pa-cover { margin: 0; }
        & > div .pd-title { margin: 0; padding-block: calc(${({ theme }) => theme.space} / 2); font-size: calc(1.4 * ${({ theme }) => theme.size}); letter-spacing: 0.04em; }
        & > div .pd-filed { margin: 0; }
        & > div .pd-switch { margin: 0 0 0 auto; }

        & > main { padding-inline: calc(2 * ${({ theme }) => theme.space}); }
        & > main .pd-chapter { margin: 0; padding-block-start: ${({ theme }) => theme.space}; }
    `;

    override write(): ReactNode {
        const Layout = this.layout;
        return (
            <Layout>
                <nav>
                    {this.library()}
                    {this.byline()}
                </nav>
                <div>
                    {this.place(this.cover)}
                    {this.filed()}
                    {this.controls()}
                </div>
                <main>
                    {this.place(...this.pages)}
                    {this.place(this.table)}
                </main>
            </Layout>
        );
    }
}

export const TopBars = $($TopBars);
