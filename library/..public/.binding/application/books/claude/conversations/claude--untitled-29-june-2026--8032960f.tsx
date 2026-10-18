import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--untitled-29-june-2026--8032960f/.book';
import Cover from '../../../../../../.claude/.conversations/claude--untitled-29-june-2026--8032960f/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--untitled-29-june-2026--8032960f/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--untitled-29-june-2026--8032960f/.table';
import June2920261 from '../../../../../../.claude/.conversations/claude--untitled-29-june-2026--8032960f/1-june-29-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {June2920261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
