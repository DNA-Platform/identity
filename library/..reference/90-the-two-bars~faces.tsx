import { $, selection } from '@dna-platform/chemistry';
import { $Cover } from '@dna-platform/public';
import { $Index } from '../.manual/.book';

export class $LibraryCover extends $Cover {
    override style = selection.header`
        .pd-chapter.pa-cover { margin-block: 0; }
        .pa-cover .pd-title {
            font-family: ${({ theme }) => theme.serif};
            font-size: calc(1.8 * ${({ theme }) => theme.size});
            font-weight: 600;
            line-height: 1.04;
        }
    `;
}

export class $LibraryTableOfContents extends $Index {
    override style = selection.nav`
        .pd-chapter.pa-table-of-contents { margin-block: 0; }
        .pa-table-of-contents .pd-section { margin-block: 0 ${({ theme }) => theme.space}; }
        .pa-table-of-contents .pd-heading {
            font-size: calc(0.76 * ${({ theme }) => theme.size});
            font-weight: 600;
            letter-spacing: 0.12em;
            text-transform: uppercase;
            color: ${({ theme }) => theme.soft};
            padding-inline: calc(${({ theme }) => theme.space} * 0.375);
            margin-block-end: calc(${({ theme }) => theme.space} * 0.4);
        }
        .pa-table-of-contents .pd-paragraph:not(.pa-parenthetical) {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: calc(${({ theme }) => theme.space} * 0.375);
            margin-block: 0;
            padding: calc(${({ theme }) => theme.space} / 4) calc(${({ theme }) => theme.space} * 0.375) calc(${({ theme }) => theme.space} / 4) calc(${({ theme }) => theme.space} * 1.1);
            border-radius: calc(${({ theme }) => theme.space} / 3);
            font-weight: 500;
        }
        .pa-table-of-contents .pd-paragraph:not(.pa-parenthetical)::before {
            content: '';
            position: absolute;
            inset-inline-start: calc(${({ theme }) => theme.space} * 0.375);
            width: calc(${({ theme }) => theme.space} * 0.375);
            height: calc(${({ theme }) => theme.space} * 0.375);
            border-radius: 50%;
            background: ${({ theme }) => theme.sea};
        }
        .pa-table-of-contents .pd-paragraph.pa-entry.pa-open { background: ${({ theme }) => theme.tint}; }
        .pa-table-of-contents .pa-reference { color: inherit; text-decoration: none; }
        @media (max-width: ${({ theme }) => theme.narrow}) {
            .pa-table-of-contents .pd-section {
                display: flex;
                align-items: center;
                gap: calc(${({ theme }) => theme.space} / 4);
                margin-block: 0 calc(${({ theme }) => theme.space} / 3);
            }
            .pa-table-of-contents .pd-heading { margin-block-end: 0; }
            .pa-table-of-contents .pd-paragraph:not(.pa-parenthetical) {
                border: thin solid ${({ theme }) => theme.line};
                border-radius: ${({ theme }) => theme.space};
                white-space: nowrap;
            }
        }
    `;
}

export const Cover = $($LibraryCover);
export const TableOfContents = $($LibraryTableOfContents);
