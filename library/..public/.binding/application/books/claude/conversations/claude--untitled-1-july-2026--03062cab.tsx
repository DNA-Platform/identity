import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--untitled-1-july-2026--03062cab/.book';
import Cover from '../../../../../../.claude/.conversations/claude--untitled-1-july-2026--03062cab/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--untitled-1-july-2026--03062cab/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--untitled-1-july-2026--03062cab/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--untitled-1-july-2026--03062cab/1-conversation';

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
