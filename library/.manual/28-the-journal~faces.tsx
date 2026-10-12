import { $ } from '@dna-platform/chemistry';
import { $BookshelfCover } from './19-the-cover~code.tsx';

export class $JournalCover extends $BookshelfCover { }

export const JournalCover = $($JournalCover);
