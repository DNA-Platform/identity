import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--crypto-gainers-amid-q1-market-decline--9a518c42/.book';
import Cover from '../../../../../../.claude/.conversations/claude--crypto-gainers-amid-q1-market-decline--9a518c42/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--crypto-gainers-amid-q1-market-decline--9a518c42/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--crypto-gainers-amid-q1-market-decline--9a518c42/.table';
import April2220261 from '../../../../../../.claude/.conversations/claude--crypto-gainers-amid-q1-market-decline--9a518c42/1-april-22-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {April2220261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
