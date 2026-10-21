import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--translation-to-english--48dade6c/.book';
import Cover from '../../../../../../.claude/.conversations/claude--translation-to-english--48dade6c/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--translation-to-english--48dade6c/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--translation-to-english--48dade6c/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--translation-to-english--48dade6c/1-conversation';

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
