import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--changing-flight-date--475574f6/.book';
import Cover from '../../../../../../.claude/.conversations/claude--changing-flight-date--475574f6/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--changing-flight-date--475574f6/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--changing-flight-date--475574f6/.table';
import October1320261 from '../../../../../../.claude/.conversations/claude--changing-flight-date--475574f6/1-october-13-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {October1320261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
