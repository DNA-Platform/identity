import { $, selection } from '@dna-platform/chemistry';
import { $TableOfContents } from '@dna-platform/public';
import { $BookshelfCover } from './19-the-cover~code.tsx';

export class $ManualCover extends $BookshelfCover {
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
        .pa-table-of-contents .pa-reference { color: inherit; text-decoration: none; }
    `;
}

export const Cover = $($ManualCover);
export const TableOfContents = $($ManualTableOfContents);
