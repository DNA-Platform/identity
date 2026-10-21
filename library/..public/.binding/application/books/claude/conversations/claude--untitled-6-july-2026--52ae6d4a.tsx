import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--untitled-6-july-2026--52ae6d4a/.book';
import Cover from '../../../../../../.claude/.conversations/claude--untitled-6-july-2026--52ae6d4a/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--untitled-6-july-2026--52ae6d4a/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--untitled-6-july-2026--52ae6d4a/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--untitled-6-july-2026--52ae6d4a/1-conversation';

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
