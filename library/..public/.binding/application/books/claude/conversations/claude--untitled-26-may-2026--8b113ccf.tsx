import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--untitled-26-may-2026--8b113ccf/.book';
import Cover from '../../../../../../.claude/.conversations/claude--untitled-26-may-2026--8b113ccf/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--untitled-26-may-2026--8b113ccf/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--untitled-26-may-2026--8b113ccf/.table';
import May2620261 from '../../../../../../.claude/.conversations/claude--untitled-26-may-2026--8b113ccf/1-may-26-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {May2620261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
