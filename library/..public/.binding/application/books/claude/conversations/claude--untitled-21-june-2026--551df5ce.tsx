import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--untitled-21-june-2026--551df5ce/.book';
import Cover from '../../../../../../.claude/.conversations/claude--untitled-21-june-2026--551df5ce/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--untitled-21-june-2026--551df5ce/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--untitled-21-june-2026--551df5ce/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--untitled-21-june-2026--551df5ce/1-conversation';

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
