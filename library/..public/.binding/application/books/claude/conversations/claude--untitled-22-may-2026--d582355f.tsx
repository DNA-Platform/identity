import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--untitled-22-may-2026--d582355f/.book';
import Cover from '../../../../../../.claude/.conversations/claude--untitled-22-may-2026--d582355f/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--untitled-22-may-2026--d582355f/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--untitled-22-may-2026--d582355f/.table';
import May2220261 from '../../../../../../.claude/.conversations/claude--untitled-22-may-2026--d582355f/1-may-22-2026';

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
