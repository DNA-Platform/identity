import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--untitled-16-june-2026--6897a5ae/.book';
import Cover from '../../../../../../.claude/.conversations/claude--untitled-16-june-2026--6897a5ae/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--untitled-16-june-2026--6897a5ae/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--untitled-16-june-2026--6897a5ae/.table';
import June1620261 from '../../../../../../.claude/.conversations/claude--untitled-16-june-2026--6897a5ae/1-june-16-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {June1620261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
