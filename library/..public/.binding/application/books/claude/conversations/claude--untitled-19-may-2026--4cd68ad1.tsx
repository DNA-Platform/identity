import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--untitled-19-may-2026--4cd68ad1/.book';
import Cover from '../../../../../../.claude/.conversations/claude--untitled-19-may-2026--4cd68ad1/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--untitled-19-may-2026--4cd68ad1/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--untitled-19-may-2026--4cd68ad1/.table';
import May1920261 from '../../../../../../.claude/.conversations/claude--untitled-19-may-2026--4cd68ad1/1-may-19-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {May1920261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
