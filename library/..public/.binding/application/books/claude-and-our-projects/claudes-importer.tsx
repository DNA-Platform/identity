import { $ } from '@dna-platform/chemistry';
import { opened } from '../../opened';
import $Book from '../../../../../.claude-and-our-projects/.claudes-importer/.book';
import $Cover from '../../../../../.claude-and-our-projects/.claudes-importer/.cover';
import $Synopsis from '../../../../../.claude-and-our-projects/.claudes-importer/.synopsis';
import $Table from '../../../../../.claude-and-our-projects/.claudes-importer/.table';
import $TheImporter1 from '../../../../../.claude-and-our-projects/.claudes-importer/1-the-importer';
import $TheSource2 from '../../../../../.claude-and-our-projects/.claudes-importer/2-the-source';
import $TheThread3 from '../../../../../.claude-and-our-projects/.claudes-importer/3-the-thread';
import $TheMovements4 from '../../../../../.claude-and-our-projects/.claudes-importer/4-the-movements';
import $TheWriting5 from '../../../../../.claude-and-our-projects/.claudes-importer/5-the-writing';
import $TheBook6 from '../../../../../.claude-and-our-projects/.claudes-importer/6-the-book';

const Book = $($Book);
const Cover = $($Cover);
const Synopsis = $($Synopsis);
const Table = $($Table);
const TheImporter1 = $($TheImporter1);
const TheSource2 = $($TheSource2);
const TheThread3 = $($TheThread3);
const TheMovements4 = $($TheMovements4);
const TheWriting5 = $($TheWriting5);
const TheBook6 = $($TheBook6);

export const book = $<$Book>(
    <Book>
        <Cover />
        <Synopsis />
        <Table />
        <TheImporter1 />
        <TheSource2 />
        <TheThread3 />
        <TheMovements4 />
        <TheWriting5 />
        <TheBook6 />
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
