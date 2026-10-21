import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--untitled-4-july-2026--1b994e1b/.book';
import Cover from '../../../../../../.claude/.conversations/claude--untitled-4-july-2026--1b994e1b/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--untitled-4-july-2026--1b994e1b/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--untitled-4-july-2026--1b994e1b/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--untitled-4-july-2026--1b994e1b/1-conversation';

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
