import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--untitled-17-june-2026--ec39ed14/.book';
import Cover from '../../../../../../.claude/.conversations/claude--untitled-17-june-2026--ec39ed14/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--untitled-17-june-2026--ec39ed14/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--untitled-17-june-2026--ec39ed14/.table';
import June1720261 from '../../../../../../.claude/.conversations/claude--untitled-17-june-2026--ec39ed14/1-june-17-2026';
import June2520262 from '../../../../../../.claude/.conversations/claude--untitled-17-june-2026--ec39ed14/2-june-25-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {June1720261()}
        {June2520262()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
