import { $ } from '@dna-platform/chemistry';
import { $SidebarBook } from './10-the-sidebar~code.tsx';
import { Spread } from './11-the-spread~code.tsx';
import { Paged } from './12-the-pages~code.tsx';

export default class $DougsReferenceManual extends $SidebarBook { }

$($($DougsReferenceManual), Paged)(Spread);

export * from './1-the-book~code.tsx';
export * from './2-the-listing~code.tsx';
export * from './3-the-theme~code.tsx';
export * from './4-the-date~code.tsx';
export * from './7-the-outline~code.tsx';
export * from './8-the-author-and-the-subject~code.tsx';
export * from './9-the-switch~code.tsx';
export * from './10-the-sidebar~code.tsx';
export * from './11-the-spread~code.tsx';
export * from './12-the-pages~code.tsx';
