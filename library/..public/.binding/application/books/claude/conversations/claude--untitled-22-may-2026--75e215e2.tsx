import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--untitled-22-may-2026--75e215e2/.book';
import Cover from '../../../../../../.claude/.conversations/claude--untitled-22-may-2026--75e215e2/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--untitled-22-may-2026--75e215e2/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--untitled-22-may-2026--75e215e2/.table';
import May2220261 from '../../../../../../.claude/.conversations/claude--untitled-22-may-2026--75e215e2/1-may-22-2026';

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
