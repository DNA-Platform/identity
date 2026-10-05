import { ElementType, ReactNode } from 'react';
import { $, selection } from '@dna-platform/chemistry';
import { $DougsLibrary } from './1-the-book~code.tsx';

export class $SideBar extends $DougsLibrary {
    layout: ElementType = selection.div`
        padding: ${({ theme }) => theme.space};

        & > aside .pd-library-title { font-size: calc(0.55 * ${({ theme }) => theme.size}); font-weight: 500; letter-spacing: 0.24em; text-transform: uppercase; }
        & > aside .pd-chapter.pa-cover { margin-block-end: 0; }
        & > aside .pd-chapter.pa-cover .pd-title { font-size: calc(1.2 * ${({ theme }) => theme.size}); line-height: 1.3; margin-block: 0; }
        & > aside .pd-filed, & > aside .pd-byline { margin-block: calc(${({ theme }) => theme.space} / 4) 0; }
        & > nav .pd-heading {
            font-size: calc(0.55 * ${({ theme }) => theme.size});
            font-weight: 500;
            letter-spacing: 0.24em;
            text-transform: uppercase;
            opacity: 0.6;
        }
        & > nav .pd-paragraph { margin-block: calc(${({ theme }) => theme.space} / 3); font-size: calc(0.85 * ${({ theme }) => theme.size}); line-height: 1.3; }
        & > nav .pa-reference { color: inherit; text-decoration: none; }
        & > nav .pa-content { color: inherit; opacity: 0.76; }
        & > nav .pd-appended { float: inline-end; line-height: 2.2; }
        & > nav .pa-entry.pa-open .pa-content { opacity: 1; font-weight: 700; }

        @media (min-width: 48rem) {
            position: fixed;
            inset: 0;
            padding: 0;
            display: grid;
            grid-template-columns: 17.5rem minmax(0, 1fr);
            grid-template-rows: auto minmax(0, 1fr);

            & > aside { grid-column: 1; grid-row: 1; padding: ${({ theme }) => theme.space} ${({ theme }) => theme.space} 0; color: ${({ theme }) => theme.bright}; background: ${({ theme }) => theme.bar}; }
            & > aside .pd-library-title { margin: 0; }
            & > aside .pd-chapter.pa-cover { margin: calc(${({ theme }) => theme.space} / 4) 0 0; }
            & > aside .pd-library-title .pa-reference, & > aside .pd-filed .pa-reference, & > aside .pd-byline .pa-reference { color: inherit; }

            & > nav { grid-column: 1; grid-row: 2; overflow: auto; padding: 0 ${({ theme }) => theme.space} ${({ theme }) => theme.space}; color: ${({ theme }) => theme.bright}; background: ${({ theme }) => theme.bar}; }
            & > nav .pd-chapter.pa-table-of-contents { margin: calc(2 * ${({ theme }) => theme.space}) 0 0; }
            & > nav .pa-entry.pa-open .pa-content { color: ${({ theme }) => theme.tint}; font-weight: inherit; }

            & > main { grid-column: 2; grid-row: 1 / span 2; display: grid; grid-template-rows: auto minmax(0, 1fr); }
            & > main .pd-switch { justify-self: end; margin: 0; padding: calc(${({ theme }) => theme.space} / 2) calc(3 * ${({ theme }) => theme.space}) 0; }
            & > main > article { overflow: auto; padding: calc(2 * ${({ theme }) => theme.space}) calc(3 * ${({ theme }) => theme.space}); }
            & > main .pd-chapter { margin: 0; }
        }
    `;

    override write(): ReactNode {
        const Layout = this.layout;
        return (
            <Layout>
                <aside>
                    {this.library()}
                    {this.place(this.cover)}
                    {this.filed()}
                    {this.byline()}
                </aside>
                <main>
                    {this.controls()}
                    <article>
                        {this.place(...this.pages)}
                    </article>
                </main>
                <nav>
                    {this.place(this.table)}
                </nav>
            </Layout>
        );
    }
}

export const SideBar = $($SideBar);
