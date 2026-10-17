import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--the-bitcoin-whitepaper/.book';
import Cover from '../../../../../../.claude/.conversations/claude--the-bitcoin-whitepaper/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--the-bitcoin-whitepaper/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--the-bitcoin-whitepaper/.table';
import January1720261 from '../../../../../../.claude/.conversations/claude--the-bitcoin-whitepaper/1-january-17-2026';
import January1820262 from '../../../../../../.claude/.conversations/claude--the-bitcoin-whitepaper/2-january-18-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {January1720261()}
        {January1820262()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
