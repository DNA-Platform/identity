import { $ } from '@dna-platform/chemistry';
import { opened } from '../opened';
import $Book from '../../../../.importer/.book';
import Cover from '../../../../.importer/.cover';
import Synopsis from '../../../../.importer/.synopsis';
import Table from '../../../../.importer/.table';
import TheImporter1 from '../../../../.importer/1-the-importer';
import TheExport2 from '../../../../.importer/2-the-export';
import TheRecord3 from '../../../../.importer/3-the-record';
import ThePairing4 from '../../../../.importer/4-the-pairing';
import TheLedger5 from '../../../../.importer/5-the-ledger';
import TheThread6 from '../../../../.importer/6-the-thread';
import TheWriting7 from '../../../../.importer/7-the-writing';
import TheBooks8 from '../../../../.importer/8-the-books';
import TheCheck9 from '../../../../.importer/9-the-check';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {TheImporter1()}
        {TheExport2()}
        {TheRecord3()}
        {ThePairing4()}
        {TheLedger5()}
        {TheThread6()}
        {TheWriting7()}
        {TheBooks8()}
        {TheCheck9()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
