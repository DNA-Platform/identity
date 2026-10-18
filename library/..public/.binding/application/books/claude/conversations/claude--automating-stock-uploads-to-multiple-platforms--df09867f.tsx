import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--automating-stock-uploads-to-multiple-platforms--df09867f/.book';
import Cover from '../../../../../../.claude/.conversations/claude--automating-stock-uploads-to-multiple-platforms--df09867f/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--automating-stock-uploads-to-multiple-platforms--df09867f/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--automating-stock-uploads-to-multiple-platforms--df09867f/.table';
import March3020261 from '../../../../../../.claude/.conversations/claude--automating-stock-uploads-to-multiple-platforms--df09867f/1-march-30-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {March3020261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
