import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--anonymous-telegram-numbers-with-ton--92b759ad/.book';
import Cover from '../../../../../../.claude/.conversations/claude--anonymous-telegram-numbers-with-ton--92b759ad/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--anonymous-telegram-numbers-with-ton--92b759ad/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--anonymous-telegram-numbers-with-ton--92b759ad/.table';
import May2720261 from '../../../../../../.claude/.conversations/claude--anonymous-telegram-numbers-with-ton--92b759ad/1-may-27-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {May2720261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
