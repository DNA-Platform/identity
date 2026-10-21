import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--untitled-12-june-2026--7bd1f6ee/.book';
import Cover from '../../../../../../.claude/.conversations/claude--untitled-12-june-2026--7bd1f6ee/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--untitled-12-june-2026--7bd1f6ee/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--untitled-12-june-2026--7bd1f6ee/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--untitled-12-june-2026--7bd1f6ee/1-conversation';

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
