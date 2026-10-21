import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--untitled-21-february-2026--de02dabd/.book';
import Cover from '../../../../../../.claude/.conversations/claude--untitled-21-february-2026--de02dabd/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--untitled-21-february-2026--de02dabd/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--untitled-21-february-2026--de02dabd/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--untitled-21-february-2026--de02dabd/1-conversation';

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
