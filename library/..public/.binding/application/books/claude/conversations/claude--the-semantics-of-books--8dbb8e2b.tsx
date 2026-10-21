import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--the-semantics-of-books--8dbb8e2b/.book';
import Cover from '../../../../../../.claude/.conversations/claude--the-semantics-of-books--8dbb8e2b/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--the-semantics-of-books--8dbb8e2b/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--the-semantics-of-books--8dbb8e2b/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--the-semantics-of-books--8dbb8e2b/1-conversation';

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
