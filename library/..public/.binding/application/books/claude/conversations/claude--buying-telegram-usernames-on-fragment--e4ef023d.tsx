import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--buying-telegram-usernames-on-fragment--e4ef023d/.book';
import Cover from '../../../../../../.claude/.conversations/claude--buying-telegram-usernames-on-fragment--e4ef023d/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--buying-telegram-usernames-on-fragment--e4ef023d/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--buying-telegram-usernames-on-fragment--e4ef023d/.table';
import May3020261 from '../../../../../../.claude/.conversations/claude--buying-telegram-usernames-on-fragment--e4ef023d/1-may-30-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {May3020261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
