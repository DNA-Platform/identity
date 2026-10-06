import { $, selection } from '@dna-platform/chemistry';
import { $Cover, $TableOfContents } from '@dna-platform/public';

export class $ManualCover extends $Cover {
    override style = selection.header`
        .pd-chapter.pa-cover { margin-block: 0; }
        .pa-cover .pd-title {
            font-size: calc(1.04 * ${({ theme }) => theme.size});
            font-weight: 600;
        }
    `;
}

export class $ManualTableOfContents extends $TableOfContents {
    override style = selection.nav`
        .pd-chapter.pa-table-of-contents { margin-block: ${({ theme }) => theme.space}; }
        .pa-table-of-contents .pd-section { margin-block: calc(${({ theme }) => theme.space} * 0.83) 0; }
        .pa-table-of-contents .pd-heading {
            font-size: calc(0.76 * ${({ theme }) => theme.size});
            font-weight: 600;
            line-height: 1;
            letter-spacing: 0.06em;
            text-transform: uppercase;
            color: ${({ theme }) => theme.faint};
            padding-inline: calc(${({ theme }) => theme.space} / 4);
            margin-block-end: calc(${({ theme }) => theme.space} / 3);
        }
        .pa-table-of-contents .pd-paragraph.pa-entry {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-block: 0;
            padding: calc(${({ theme }) => theme.space} / 4) calc(${({ theme }) => theme.space} / 3);
            border-radius: calc(${({ theme }) => theme.space} / 4);
            color: ${({ theme }) => theme.soft};
        }
        .pa-table-of-contents .pd-paragraph.pa-entry.pa-open {
            background: ${({ theme }) => theme.tint};
            color: ${({ theme }) => theme.accent};
            font-weight: 500;
        }
        .pa-table-of-contents .pa-reference { color: inherit; text-decoration: none; }
        .pa-table-of-contents .pa-file-type {
            font-family: ${({ theme }) => theme.mono};
            font-size: calc(0.76 * ${({ theme }) => theme.size});
            color: ${({ theme }) => theme.faint};
        }
    `;
}

export const Cover = $($ManualCover);
export const TableOfContents = $($ManualTableOfContents);
