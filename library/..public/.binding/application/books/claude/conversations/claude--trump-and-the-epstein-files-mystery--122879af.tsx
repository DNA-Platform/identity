import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--trump-and-the-epstein-files-mystery--122879af/.book';
import Cover from '../../../../../../.claude/.conversations/claude--trump-and-the-epstein-files-mystery--122879af/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--trump-and-the-epstein-files-mystery--122879af/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--trump-and-the-epstein-files-mystery--122879af/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--trump-and-the-epstein-files-mystery--122879af/1-conversation';

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
