import { $ } from '@dna-platform/chemistry';
import $Book from '../../../../..reference/.book';
import $Cover from '../../../../..reference/.cover';
import $Synopsis from '../../../../..reference/.synopsis';
import $Table from '../../../../..reference/.table';
import $Lead from '../../../../..reference/0-lead';
import $TheBooks from '../../../../..reference/1-the-books';

const Book = $($Book);
const Cover = $($Cover);
const Synopsis = $($Synopsis);
const Table = $($Table);
const Lead = $($Lead);
const TheBooks = $($TheBooks);

export const book = $<$Book>(
    <Book>
        <Cover />
        <Synopsis />
        <Table />
        <Lead />
        <TheBooks />
    </Book>
);
