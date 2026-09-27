import { $ } from '@dna-platform/chemistry';
import { opened } from '../opened';
import $Book from '../../../../..reference/.book';
import $Cover from '../../../../..reference/.cover';
import $Synopsis from '../../../../..reference/.synopsis';
import $Table from '../../../../..reference/.table';
import $Lead0 from '../../../../..reference/0-lead';
import $TheBooks1 from '../../../../..reference/1-the-books';
import $TheSheet2 from '../../../../..reference/2-the-sheet';
import $TheMasthead3 from '../../../../..reference/3-the-masthead';
import $TheChapterMark4 from '../../../../..reference/4-the-chapter-mark';
import $ThePlate5 from '../../../../..reference/5-the-plate';
import $TheLedger6 from '../../../../..reference/6-the-ledger';
import $TheSwitchboard7 from '../../../../..reference/7-the-switchboard';
import $TheDomain8 from '../../../../..reference/8-the-domain';

const Book = $($Book);
const Cover = $($Cover);
const Synopsis = $($Synopsis);
const Table = $($Table);
const Lead0 = $($Lead0);
const TheBooks1 = $($TheBooks1);
const TheSheet2 = $($TheSheet2);
const TheMasthead3 = $($TheMasthead3);
const TheChapterMark4 = $($TheChapterMark4);
const ThePlate5 = $($ThePlate5);
const TheLedger6 = $($TheLedger6);
const TheSwitchboard7 = $($TheSwitchboard7);
const TheDomain8 = $($TheDomain8);

export const book = $<$Book>(
    <Book>
        <Cover />
        <Synopsis />
        <Table />
        <Lead0 />
        <TheBooks1 />
        <TheSheet2 />
        <TheMasthead3 />
        <TheChapterMark4 />
        <ThePlate5 />
        <TheLedger6 />
        <TheSwitchboard7 />
        <TheDomain8 />
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
