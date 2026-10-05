import { ReactNode } from 'react';
import { $, selection } from '@dna-platform/chemistry';
import { $Annotation, $Format, $Paragraph, $Writing, Means as means, Reference as reference, Word as word } from '@dna-platform/public';

export class $Masthead extends $Paragraph {
    protected override $Define(): void {
        super.$Define();
        this.classes.add(this, 'pd-masthead');
    }

    override write(): ReactNode {
        const book = this.book;
        if (book === undefined) return null;
        const Means = $(means);
        const Word = $(word);
        const Reference = $(reference);
        return (
            <>
                <span className="pd-shelf">
                    <Means>$[[ Dougs Library ]]</Means>
                </span>
                <span className="pd-here">
                    <Word>
                        <Reference>{book.means?.identifier}</Reference>
                        {book.title?.name}
                    </Word>
                </span>
            </>
        );
    }
}

export class $Wide extends $Annotation {
    override defines(writing: $Writing): void {
        writing.classes.add(this, 'pa-wide');
    }

    override erase(writing: $Writing): void {
        writing.classes.revert(this);
    }
}

export class $Gallery extends $Format {
    style = selection.div`
        --rail: 17.5rem;
        &::before { content: ''; position: fixed; z-index: 2; left: 0; top: 0; bottom: 0; width: var(--rail); background: ${({ theme }) => theme.accent}; }
        .pd-book { box-sizing: border-box; margin: 0 0 0 var(--rail); max-width: none; min-height: 100vh; padding: 0 clamp(1.5rem, 4vw, 4.5rem) 4rem; }
        .pd-masthead { position: fixed; z-index: 3; left: 0; top: 0; width: var(--rail); margin: 0; padding: 1.7rem 1.6rem 0; }
        .pd-byline { box-sizing: border-box; position: fixed; z-index: 3; left: 0; top: 7.1rem; width: var(--rail); padding: 0 1.6rem; }
        .pa-table-of-contents { position: fixed; z-index: 3; left: 0; top: 7.4rem; bottom: 0; width: var(--rail); margin: 0; padding: 0 1.6rem 2rem; overflow: auto; }
        .pa-synopsis:not(.pa-open) { display: none; }
        .pd-paragraph.pa-wide { max-width: none; }

        @media (max-width: 760px) {
            &::before { display: none; }
            .pd-book { display: flex; flex-direction: column; margin: 0; padding: 0 1.25rem 4rem; }
            .pd-book > * { min-width: 0; }
            .pd-book > .pd-masthead { order: -2; position: static; width: auto; margin: 0 -1.25rem; padding: .9rem 1.25rem .3rem; background: ${({ theme }) => theme.accent}; }
            .pd-byline { order: -2; position: static; width: auto; margin: 0 -1.25rem; padding: 0 1.25rem .5rem; background: ${({ theme }) => theme.accent}; }
            .pd-book > nav { order: -1; position: sticky; z-index: 3; top: 0; margin: 0 -1.25rem; background: ${({ theme }) => theme.accent}; }
            .pd-book [id] { scroll-margin-top: 4.5rem; }
            .pd-book > nav .pd-chapter.pa-table-of-contents { position: static; display: flex; gap: 1.5rem; width: auto; margin: 0; padding: .45rem 1.25rem .7rem; overflow: auto hidden; scrollbar-width: none; }
            .pd-book > nav .pa-table-of-contents > .pa-reference { display: none; }
            .pd-book > nav .pa-table-of-contents .pd-section { display: flex; flex: none; gap: 1.5rem; margin: 0; padding: 0; }
            .pd-book > nav .pa-table-of-contents .pd-section > .pa-self-reference { display: none; }
            .pd-book > nav .pa-table-of-contents .pd-section > a { flex: none; }
            .pd-book > nav .pa-table-of-contents .pd-paragraph { flex: none; margin: 0; white-space: nowrap; }
        }
    `;

    override defines(writing: $Writing): void {
        super.defines(writing);
        writing.classes.add(this, 'pa-gallery');
    }

    override erase(writing: $Writing): void {
        super.erase(writing);
        writing.classes.revert(this);
    }
}

export const Masthead = $($Masthead);
export const Wide = $($Wide);
export const Gallery = $($Gallery);
