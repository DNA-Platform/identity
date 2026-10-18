import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--untitled-2-june-2026--c091a968/.book';
import Cover from '../../../../../../.claude/.conversations/claude--untitled-2-june-2026--c091a968/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--untitled-2-june-2026--c091a968/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--untitled-2-june-2026--c091a968/.table';
import June220261 from '../../../../../../.claude/.conversations/claude--untitled-2-june-2026--c091a968/1-june-2-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {June220261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
