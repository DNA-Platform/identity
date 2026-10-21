import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--untitled-25-november-2024--8b5122ff/.book';
import Cover from '../../../../../../.claude/.conversations/claude--untitled-25-november-2024--8b5122ff/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--untitled-25-november-2024--8b5122ff/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--untitled-25-november-2024--8b5122ff/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--untitled-25-november-2024--8b5122ff/1-conversation';

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
