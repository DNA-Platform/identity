import { $ } from '@dna-platform/chemistry';
import { $Book, Theme } from '@dna-platform/public';
import { DougsTheme } from './2-the-theme~code.tsx';

export class $DougsLibrary extends $Book { }

export const DougsLibrary = $($DougsLibrary);
$(DougsLibrary, Theme)(DougsTheme);
