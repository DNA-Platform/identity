import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--tonx-news--fa18c40f/.book';
import Cover from '../../../../../../.claude/.conversations/claude--tonx-news--fa18c40f/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--tonx-news--fa18c40f/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--tonx-news--fa18c40f/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--tonx-news--fa18c40f/1-conversation';

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
