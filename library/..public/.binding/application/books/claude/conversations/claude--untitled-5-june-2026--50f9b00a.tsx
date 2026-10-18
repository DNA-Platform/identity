import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--untitled-5-june-2026--50f9b00a/.book';
import Cover from '../../../../../../.claude/.conversations/claude--untitled-5-june-2026--50f9b00a/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--untitled-5-june-2026--50f9b00a/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--untitled-5-june-2026--50f9b00a/.table';
import June520261 from '../../../../../../.claude/.conversations/claude--untitled-5-june-2026--50f9b00a/1-june-5-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {June520261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
