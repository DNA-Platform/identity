import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/relationships-and-inheriance/.book';
import Cover from '../../../../../../.claude/.conversations/relationships-and-inheriance/.cover';
import Synopsis from '../../../../../../.claude/.conversations/relationships-and-inheriance/.synopsis';
import Table from '../../../../../../.claude/.conversations/relationships-and-inheriance/.table';
import July420261 from '../../../../../../.claude/.conversations/relationships-and-inheriance/1-july-4-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {July420261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
