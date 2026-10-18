import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--untitled-25-june-2026--cba4961f/.book';
import Cover from '../../../../../../.claude/.conversations/claude--untitled-25-june-2026--cba4961f/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--untitled-25-june-2026--cba4961f/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--untitled-25-june-2026--cba4961f/.table';
import June2520261 from '../../../../../../.claude/.conversations/claude--untitled-25-june-2026--cba4961f/1-june-25-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {June2520261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
