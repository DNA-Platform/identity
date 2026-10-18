import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--untitled-6-july-2026--b7263390/.book';
import Cover from '../../../../../../.claude/.conversations/claude--untitled-6-july-2026--b7263390/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--untitled-6-july-2026--b7263390/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--untitled-6-july-2026--b7263390/.table';
import July620261 from '../../../../../../.claude/.conversations/claude--untitled-6-july-2026--b7263390/1-july-6-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {July620261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
