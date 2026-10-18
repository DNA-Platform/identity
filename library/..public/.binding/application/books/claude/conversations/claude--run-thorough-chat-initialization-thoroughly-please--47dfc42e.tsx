import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--run-thorough-chat-initialization-thoroughly-please--47dfc42e/.book';
import Cover from '../../../../../../.claude/.conversations/claude--run-thorough-chat-initialization-thoroughly-please--47dfc42e/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--run-thorough-chat-initialization-thoroughly-please--47dfc42e/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--run-thorough-chat-initialization-thoroughly-please--47dfc42e/.table';
import August1320251 from '../../../../../../.claude/.conversations/claude--run-thorough-chat-initialization-thoroughly-please--47dfc42e/1-august-13-2025';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {August1320251()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
