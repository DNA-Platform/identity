import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--untitled-10-june-2026--9c97f9dd/.book';
import Cover from '../../../../../../.claude/.conversations/claude--untitled-10-june-2026--9c97f9dd/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--untitled-10-june-2026--9c97f9dd/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--untitled-10-june-2026--9c97f9dd/.table';
import June1020261 from '../../../../../../.claude/.conversations/claude--untitled-10-june-2026--9c97f9dd/1-june-10-2026';
import June1420262 from '../../../../../../.claude/.conversations/claude--untitled-10-june-2026--9c97f9dd/2-june-14-2026';
import June2720263 from '../../../../../../.claude/.conversations/claude--untitled-10-june-2026--9c97f9dd/3-june-27-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {June1020261()}
        {June1420262()}
        {June2720263()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
