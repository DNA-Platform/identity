import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--untitled-10-june-2026--9c97f9dd/.book';
import Cover from '../../../../../../.claude/.conversations/claude--untitled-10-june-2026--9c97f9dd/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--untitled-10-june-2026--9c97f9dd/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--untitled-10-june-2026--9c97f9dd/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--untitled-10-june-2026--9c97f9dd/1-conversation';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {Conversation1()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
