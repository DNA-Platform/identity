import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--untitled-25-may-2026--ac651a50/.book';
import Cover from '../../../../../../.claude/.conversations/claude--untitled-25-may-2026--ac651a50/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--untitled-25-may-2026--ac651a50/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--untitled-25-may-2026--ac651a50/.table';
import May2520261 from '../../../../../../.claude/.conversations/claude--untitled-25-may-2026--ac651a50/1-may-25-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {May2520261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
