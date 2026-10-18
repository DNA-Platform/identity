import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--untitled-16-april-2026--d8bfb7de/.book';
import Cover from '../../../../../../.claude/.conversations/claude--untitled-16-april-2026--d8bfb7de/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--untitled-16-april-2026--d8bfb7de/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--untitled-16-april-2026--d8bfb7de/.table';
import April1620261 from '../../../../../../.claude/.conversations/claude--untitled-16-april-2026--d8bfb7de/1-april-16-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {April1620261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
