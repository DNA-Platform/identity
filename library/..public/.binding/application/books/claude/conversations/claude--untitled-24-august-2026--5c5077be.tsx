import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--untitled-24-august-2026--5c5077be/.book';
import Cover from '../../../../../../.claude/.conversations/claude--untitled-24-august-2026--5c5077be/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--untitled-24-august-2026--5c5077be/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--untitled-24-august-2026--5c5077be/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--untitled-24-august-2026--5c5077be/1-conversation';

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
