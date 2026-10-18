import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--cathy-programming--b6395c0d/.book';
import Cover from '../../../../../../.claude/.conversations/claude--cathy-programming--b6395c0d/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--cathy-programming--b6395c0d/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--cathy-programming--b6395c0d/.table';
import September2920261 from '../../../../../../.claude/.conversations/claude--cathy-programming--b6395c0d/1-september-29-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {September2920261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
