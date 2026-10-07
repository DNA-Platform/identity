import { $, selection } from '@dna-platform/chemistry';
import { $TableOfContents } from '@dna-platform/public';
import { $BookshelfCover } from '../.manual/.book';

export class $StoryCover extends $BookshelfCover {
    override style = selection.header`
        justify-self: end;
        .pd-chapter.pa-cover { margin-block: 0; }
    `;
}

export class $StoryTableOfContents extends $TableOfContents {
    override style = selection.nav`
        .pd-chapter.pa-table-of-contents { margin-block: 0; }
    `;
}

export const Cover = $($StoryCover);
export const TableOfContents = $($StoryTableOfContents);
