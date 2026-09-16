import { $ } from '@dna-platform/chemistry';
import $Book from '../../../../my-library-log/.book';
import $Cover from '../../../../my-library-log/.cover';
import $Synopsis from '../../../../my-library-log/.synopsis';
import $Table from '../../../../my-library-log/.table';
import $Lead from '../../../../my-library-log/0-lead';
import $Stardate20260915 from '../../../../my-library-log/1-stardate-2026-09-15';

const Book = $($Book);
const Cover = $($Cover);
const Synopsis = $($Synopsis);
const Table = $($Table);
const Lead = $($Lead);
const Stardate20260915 = $($Stardate20260915);

export const book = $<$Book>(
    <Book>
        <Cover />
        <Synopsis />
        <Table />
        <Lead />
        <Stardate20260915 />
    </Book>
);
