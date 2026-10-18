import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--untitled-26-june-2026--0103612b/.book';
import Cover from '../../../../../../.claude/.conversations/claude--untitled-26-june-2026--0103612b/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--untitled-26-june-2026--0103612b/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--untitled-26-june-2026--0103612b/.table';
import June2620261 from '../../../../../../.claude/.conversations/claude--untitled-26-june-2026--0103612b/1-june-26-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {June2620261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
