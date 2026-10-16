import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/the-semantics-of-books/.book';
import Cover from '../../../../../../.claude/.conversations/the-semantics-of-books/.cover';
import Synopsis from '../../../../../../.claude/.conversations/the-semantics-of-books/.synopsis';
import Table from '../../../../../../.claude/.conversations/the-semantics-of-books/.table';
import July1620261 from '../../../../../../.claude/.conversations/the-semantics-of-books/1-july-16-2026';
import July1720262 from '../../../../../../.claude/.conversations/the-semantics-of-books/2-july-17-2026';
import July1820263 from '../../../../../../.claude/.conversations/the-semantics-of-books/3-july-18-2026';
import July1920264 from '../../../../../../.claude/.conversations/the-semantics-of-books/4-july-19-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {July1620261()}
        {July1720262()}
        {July1820263()}
        {July1920264()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
