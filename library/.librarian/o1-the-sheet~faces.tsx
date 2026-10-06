import { $, selection } from '@dna-platform/chemistry';
import { $Cover, $TableOfContents } from '@dna-platform/public';

export class $StoryCover extends $Cover {
    override style = selection.header`
        .pd-chapter.pa-cover { margin-block: 0; }
        .pa-cover .pd-title {
            font-family: ${({ theme }) => theme.mono};
            font-size: calc(0.61 * ${({ theme }) => theme.size});
            letter-spacing: 0.32em;
            text-transform: uppercase;
            color: ${({ theme }) => theme.faint};
        }
    `;
}

export class $StoryTableOfContents extends $TableOfContents {
    override style = selection.nav`
        .pd-chapter.pa-table-of-contents { margin-block: calc(${({ theme }) => theme.space} * 2.22) 0; }
        .pa-table-of-contents .pd-section { margin-block: 0 calc(${({ theme }) => theme.space} * 1.33); }
        .pa-table-of-contents .pd-heading {
            margin-block: 0 calc(${({ theme }) => theme.space} * 0.67);
            font-family: ${({ theme }) => theme.mono};
            font-size: calc(0.61 * ${({ theme }) => theme.size});
            letter-spacing: 0.32em;
            text-align: center;
            text-transform: uppercase;
            color: ${({ theme }) => theme.faint};
        }
        .pa-table-of-contents .pd-paragraph.pa-entry {
            margin-block: calc(${({ theme }) => theme.space} / 3);
            text-align: center;
        }
        .pa-table-of-contents .pa-reference { color: inherit; text-decoration: none; }
    `;
}

export const Cover = $($StoryCover);
export const TableOfContents = $($StoryTableOfContents);
