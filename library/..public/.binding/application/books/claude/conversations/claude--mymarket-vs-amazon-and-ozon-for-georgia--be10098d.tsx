import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--mymarket-vs-amazon-and-ozon-for-georgia--be10098d/.book';
import Cover from '../../../../../../.claude/.conversations/claude--mymarket-vs-amazon-and-ozon-for-georgia--be10098d/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--mymarket-vs-amazon-and-ozon-for-georgia--be10098d/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--mymarket-vs-amazon-and-ozon-for-georgia--be10098d/.table';
import February120261 from '../../../../../../.claude/.conversations/claude--mymarket-vs-amazon-and-ozon-for-georgia--be10098d/1-february-1-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {February120261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
