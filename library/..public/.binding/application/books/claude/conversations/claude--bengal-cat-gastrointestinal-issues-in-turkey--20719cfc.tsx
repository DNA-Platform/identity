import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--bengal-cat-gastrointestinal-issues-in-turkey--20719cfc/.book';
import Cover from '../../../../../../.claude/.conversations/claude--bengal-cat-gastrointestinal-issues-in-turkey--20719cfc/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--bengal-cat-gastrointestinal-issues-in-turkey--20719cfc/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--bengal-cat-gastrointestinal-issues-in-turkey--20719cfc/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--bengal-cat-gastrointestinal-issues-in-turkey--20719cfc/1-conversation';

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
