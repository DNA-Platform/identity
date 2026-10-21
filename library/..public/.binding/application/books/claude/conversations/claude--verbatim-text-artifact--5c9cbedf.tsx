import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--verbatim-text-artifact--5c9cbedf/.book';
import Cover from '../../../../../../.claude/.conversations/claude--verbatim-text-artifact--5c9cbedf/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--verbatim-text-artifact--5c9cbedf/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--verbatim-text-artifact--5c9cbedf/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--verbatim-text-artifact--5c9cbedf/1-conversation';

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
