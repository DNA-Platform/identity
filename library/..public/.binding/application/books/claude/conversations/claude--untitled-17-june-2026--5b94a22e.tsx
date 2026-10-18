import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--untitled-17-june-2026--5b94a22e/.book';
import Cover from '../../../../../../.claude/.conversations/claude--untitled-17-june-2026--5b94a22e/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--untitled-17-june-2026--5b94a22e/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--untitled-17-june-2026--5b94a22e/.table';
import June1720261 from '../../../../../../.claude/.conversations/claude--untitled-17-june-2026--5b94a22e/1-june-17-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {June1720261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
