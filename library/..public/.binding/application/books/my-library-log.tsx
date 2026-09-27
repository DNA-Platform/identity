import { $ } from '@dna-platform/chemistry';
import { opened } from '../opened';
import $Book from '../../../../my-library-log/.book';
import $Cover from '../../../../my-library-log/.cover';
import $Synopsis from '../../../../my-library-log/.synopsis';
import $Table from '../../../../my-library-log/.table';
import $Entries0 from '../../../../my-library-log/0-entries';
import $TheSemanticsOfThisLibrary1 from '../../../../my-library-log/1-the-semantics-of-this-library';

const Book = $($Book);
const Cover = $($Cover);
const Synopsis = $($Synopsis);
const Table = $($Table);
const Entries0 = $($Entries0);
const TheSemanticsOfThisLibrary1 = $($TheSemanticsOfThisLibrary1);

export const book = $<$Book>(
    <Book>
        <Cover />
        <Synopsis />
        <Table />
        <Entries0 />
        <TheSemanticsOfThisLibrary1 />
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
