import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--converting-shared-conversation-to-document--c17d7faa/.book';
import Cover from '../../../../../../.claude/.conversations/claude--converting-shared-conversation-to-document--c17d7faa/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--converting-shared-conversation-to-document--c17d7faa/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--converting-shared-conversation-to-document--c17d7faa/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--converting-shared-conversation-to-document--c17d7faa/1-conversation';

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
