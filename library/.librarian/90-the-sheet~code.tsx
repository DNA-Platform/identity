import { ElementType, ReactNode } from 'react';
import { $, selection } from '@dna-platform/chemistry';
import { $DougsLibrary } from '../.manual/.book';

export class $Sheet extends $DougsLibrary {
    layout: ElementType = selection.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        box-sizing: border-box;
        min-height: 100vh;
        padding: ${({ theme }) => theme.space} ${({ theme }) => theme.space} calc(4 * ${({ theme }) => theme.space});
        background: ${({ theme }) => theme.bar};

        & > nav { display: flex; flex-direction: column; align-items: center; color: ${({ theme }) => theme.bright}; }
        & > nav .pd-library-title { margin: 0; font-size: calc(0.6 * ${({ theme }) => theme.size}); letter-spacing: 0.24em; text-transform: uppercase; }
        & > nav .pd-library-title .pa-reference { color: inherit; }
        & > nav .pd-switch { margin-block: calc(${({ theme }) => theme.space} / 2) ${({ theme }) => theme.space}; }
        & > nav .pd-view.pa-shown { border-block-end-color: currentColor; }

        & > main {
            box-sizing: border-box;
            width: min(100%, 48rem);
            padding-inline: clamp(${({ theme }) => theme.space}, 8vw, calc(4 * ${({ theme }) => theme.space}));
            background: ${({ theme }) => theme.paper};
        }
        & > main > div { display: flex; flex-wrap: wrap; justify-content: center; align-items: baseline; padding-block: calc(2 * ${({ theme }) => theme.space}) ${({ theme }) => theme.space}; }
        & > main > div .pd-chapter.pa-cover { margin: 0; }
        & > main > div .pd-title, & > main > div .pd-byline {
            margin: 0;
            font-size: calc(0.6 * ${({ theme }) => theme.size});
            font-weight: 400;
            letter-spacing: 0.3em;
            text-transform: uppercase;
        }
        & > main > div .pd-byline::before { content: '·'; margin-inline: 0.8em; }

        & > main > article { padding-block: ${({ theme }) => theme.space} calc(3 * ${({ theme }) => theme.space}); }
        & > main > article .pd-chapter { margin: 0; }
        & > main > article .pd-title { font-size: calc(1.9 * ${({ theme }) => theme.size}); font-weight: 700; letter-spacing: 0; text-align: center; }
        & > main > article .pd-heading { font-weight: 700; text-align: center; margin-block-start: calc(2 * ${({ theme }) => theme.space}); }
        & > main > article .pd-paragraph { margin-inline: auto; text-align: justify; hyphens: auto; }
        & > main > article .pd-dateline { text-align: center; }
        & > main > article .pd-chapter.pa-synopsis { font-style: italic; }
        & > main > article .pd-chapter.pa-synopsis .pd-paragraph { text-align: center; }

        & > main > nav { display: none; padding-block-end: calc(3 * ${({ theme }) => theme.space}); text-align: center; }
        & > main > nav .pd-chapter.pa-table-of-contents { margin: 0; }
        & > main > nav .pd-section { margin-inline: auto; }
        & > main > nav .pa-reference { text-decoration: none; }
        .pa-front & > main > article { padding-block-end: ${({ theme }) => theme.space}; }
        .pa-front & > main > nav { display: block; }
    `;

    override write(): ReactNode {
        const Layout = this.layout;
        return (
            <Layout>
                <nav>
                    {this.library()}
                    {this.controls()}
                </nav>
                <main>
                    <div>
                        {this.place(this.cover)}
                        {this.byline()}
                    </div>
                    <article>
                        {this.place(...this.pages)}
                    </article>
                    <nav>
                        {this.place(this.table)}
                    </nav>
                </main>
            </Layout>
        );
    }
}

export const Sheet = $($Sheet);
