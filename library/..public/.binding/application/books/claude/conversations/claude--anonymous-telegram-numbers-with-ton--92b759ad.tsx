import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--anonymous-telegram-numbers-with-ton--92b759ad/.book';
import Cover from '../../../../../../.claude/.conversations/claude--anonymous-telegram-numbers-with-ton--92b759ad/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--anonymous-telegram-numbers-with-ton--92b759ad/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--anonymous-telegram-numbers-with-ton--92b759ad/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--anonymous-telegram-numbers-with-ton--92b759ad/1-conversation';

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
