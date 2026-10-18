import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--openscholar--7f65b458/.book';
import Cover from '../../../../../../.claude/.conversations/claude--openscholar--7f65b458/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--openscholar--7f65b458/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--openscholar--7f65b458/.table';
import February520261 from '../../../../../../.claude/.conversations/claude--openscholar--7f65b458/1-february-5-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {February520261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
