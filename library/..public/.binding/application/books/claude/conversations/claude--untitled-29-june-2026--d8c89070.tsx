import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--untitled-29-june-2026--d8c89070/.book';
import Cover from '../../../../../../.claude/.conversations/claude--untitled-29-june-2026--d8c89070/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--untitled-29-june-2026--d8c89070/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--untitled-29-june-2026--d8c89070/.table';
import June2920261 from '../../../../../../.claude/.conversations/claude--untitled-29-june-2026--d8c89070/1-june-29-2026';

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
