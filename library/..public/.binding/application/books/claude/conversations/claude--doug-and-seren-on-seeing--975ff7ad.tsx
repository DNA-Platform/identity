import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--doug-and-seren-on-seeing--975ff7ad/.book';
import Cover from '../../../../../../.claude/.conversations/claude--doug-and-seren-on-seeing--975ff7ad/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--doug-and-seren-on-seeing--975ff7ad/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--doug-and-seren-on-seeing--975ff7ad/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--doug-and-seren-on-seeing--975ff7ad/1-conversation';

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
