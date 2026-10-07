import { $ } from '@dna-platform/chemistry';
import { $BookshelfCover } from '../.manual/.book';

export { TableOfContents } from '@dna-platform/public';

export class $DesignCover extends $BookshelfCover { }

export const Cover = $($DesignCover);
