import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--checking-ram-and-memory-on-windows--a8cd216e/.book';
import Cover from '../../../../../../.claude/.conversations/claude--checking-ram-and-memory-on-windows--a8cd216e/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--checking-ram-and-memory-on-windows--a8cd216e/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--checking-ram-and-memory-on-windows--a8cd216e/.table';
import January2520261 from '../../../../../../.claude/.conversations/claude--checking-ram-and-memory-on-windows--a8cd216e/1-january-25-2026';
import January3120262 from '../../../../../../.claude/.conversations/claude--checking-ram-and-memory-on-windows--a8cd216e/2-january-31-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {January2520261()}
        {January3120262()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
