import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--untitled-22-may-2026--6b5c0795/.book';
import Cover from '../../../../../../.claude/.conversations/claude--untitled-22-may-2026--6b5c0795/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--untitled-22-may-2026--6b5c0795/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--untitled-22-may-2026--6b5c0795/.table';
import May2220261 from '../../../../../../.claude/.conversations/claude--untitled-22-may-2026--6b5c0795/1-may-22-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {May2220261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
