import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/the-semantics-of-books/.book';
import Cover from '../../../../../../.claude/.conversations/the-semantics-of-books/.cover';
import Synopsis from '../../../../../../.claude/.conversations/the-semantics-of-books/.synopsis';
import Table from '../../../../../../.claude/.conversations/the-semantics-of-books/.table';
import July1620261 from '../../../../../../.claude/.conversations/the-semantics-of-books/1-july-16-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {July1620261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
