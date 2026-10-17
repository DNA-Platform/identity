import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--russias-technical-capabilities-against-telegram-and-mtproto--740d0173/.book';
import Cover from '../../../../../../.claude/.conversations/claude--russias-technical-capabilities-against-telegram-and-mtproto--740d0173/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--russias-technical-capabilities-against-telegram-and-mtproto--740d0173/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--russias-technical-capabilities-against-telegram-and-mtproto--740d0173/.table';
import February2720261 from '../../../../../../.claude/.conversations/claude--russias-technical-capabilities-against-telegram-and-mtproto--740d0173/1-february-27-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {February2720261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
