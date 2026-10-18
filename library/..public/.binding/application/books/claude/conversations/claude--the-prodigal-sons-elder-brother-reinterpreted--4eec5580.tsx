import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--the-prodigal-sons-elder-brother-reinterpreted--4eec5580/.book';
import Cover from '../../../../../../.claude/.conversations/claude--the-prodigal-sons-elder-brother-reinterpreted--4eec5580/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--the-prodigal-sons-elder-brother-reinterpreted--4eec5580/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--the-prodigal-sons-elder-brother-reinterpreted--4eec5580/.table';
import May1720261 from '../../../../../../.claude/.conversations/claude--the-prodigal-sons-elder-brother-reinterpreted--4eec5580/1-may-17-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {May1720261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
