import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--untitled-1-june-2026--b49ade36/.book';
import Cover from '../../../../../../.claude/.conversations/claude--untitled-1-june-2026--b49ade36/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--untitled-1-june-2026--b49ade36/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--untitled-1-june-2026--b49ade36/.table';
import June120261 from '../../../../../../.claude/.conversations/claude--untitled-1-june-2026--b49ade36/1-june-1-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {June120261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
