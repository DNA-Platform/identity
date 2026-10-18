import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--untitled-23-may-2026--184ec599/.book';
import Cover from '../../../../../../.claude/.conversations/claude--untitled-23-may-2026--184ec599/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--untitled-23-may-2026--184ec599/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--untitled-23-may-2026--184ec599/.table';
import May2320261 from '../../../../../../.claude/.conversations/claude--untitled-23-may-2026--184ec599/1-may-23-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {May2320261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
