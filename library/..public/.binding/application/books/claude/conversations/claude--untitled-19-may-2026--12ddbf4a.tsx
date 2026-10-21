import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--untitled-19-may-2026--12ddbf4a/.book';
import Cover from '../../../../../../.claude/.conversations/claude--untitled-19-may-2026--12ddbf4a/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--untitled-19-may-2026--12ddbf4a/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--untitled-19-may-2026--12ddbf4a/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--untitled-19-may-2026--12ddbf4a/1-conversation';

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
