import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--interactive-periodic-table-creation--27056d7c/.book';
import Cover from '../../../../../../.claude/.conversations/claude--interactive-periodic-table-creation--27056d7c/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--interactive-periodic-table-creation--27056d7c/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--interactive-periodic-table-creation--27056d7c/.table';
import May820261 from '../../../../../../.claude/.conversations/claude--interactive-periodic-table-creation--27056d7c/1-may-8-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {May820261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
