import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--untitled-17-june-2026--f64ef1cd/.book';
import Cover from '../../../../../../.claude/.conversations/claude--untitled-17-june-2026--f64ef1cd/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--untitled-17-june-2026--f64ef1cd/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--untitled-17-june-2026--f64ef1cd/.table';
import June1720261 from '../../../../../../.claude/.conversations/claude--untitled-17-june-2026--f64ef1cd/1-june-17-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {June1720261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
