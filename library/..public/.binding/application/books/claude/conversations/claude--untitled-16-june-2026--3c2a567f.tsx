import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--untitled-16-june-2026--3c2a567f/.book';
import Cover from '../../../../../../.claude/.conversations/claude--untitled-16-june-2026--3c2a567f/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--untitled-16-june-2026--3c2a567f/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--untitled-16-june-2026--3c2a567f/.table';
import June1620261 from '../../../../../../.claude/.conversations/claude--untitled-16-june-2026--3c2a567f/1-june-16-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {June1620261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
