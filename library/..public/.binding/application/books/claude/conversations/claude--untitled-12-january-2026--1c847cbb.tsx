import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--untitled-12-january-2026--1c847cbb/.book';
import Cover from '../../../../../../.claude/.conversations/claude--untitled-12-january-2026--1c847cbb/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--untitled-12-january-2026--1c847cbb/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--untitled-12-january-2026--1c847cbb/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--untitled-12-january-2026--1c847cbb/1-conversation';

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
