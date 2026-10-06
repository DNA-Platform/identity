import { $, selection } from '@dna-platform/chemistry';
import { $Cover, $TableOfContents } from '@dna-platform/public';

export class $StoryCover extends $Cover {
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
