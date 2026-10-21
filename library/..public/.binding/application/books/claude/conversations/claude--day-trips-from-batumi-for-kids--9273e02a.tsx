import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--day-trips-from-batumi-for-kids--9273e02a/.book';
import Cover from '../../../../../../.claude/.conversations/claude--day-trips-from-batumi-for-kids--9273e02a/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--day-trips-from-batumi-for-kids--9273e02a/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--day-trips-from-batumi-for-kids--9273e02a/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--day-trips-from-batumi-for-kids--9273e02a/1-conversation';

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
