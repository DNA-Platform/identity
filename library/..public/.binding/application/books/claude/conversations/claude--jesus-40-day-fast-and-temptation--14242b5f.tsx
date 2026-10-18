import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--jesus-40-day-fast-and-temptation--14242b5f/.book';
import Cover from '../../../../../../.claude/.conversations/claude--jesus-40-day-fast-and-temptation--14242b5f/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--jesus-40-day-fast-and-temptation--14242b5f/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--jesus-40-day-fast-and-temptation--14242b5f/.table';
import June420261 from '../../../../../../.claude/.conversations/claude--jesus-40-day-fast-and-temptation--14242b5f/1-june-4-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {June420261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
