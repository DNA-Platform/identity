import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/using-a-telegram-username-on-a-new-account/.book';
import Cover from '../../../../../../.claude/.conversations/using-a-telegram-username-on-a-new-account/.cover';
import Synopsis from '../../../../../../.claude/.conversations/using-a-telegram-username-on-a-new-account/.synopsis';
import Table from '../../../../../../.claude/.conversations/using-a-telegram-username-on-a-new-account/.table';
import August1020261 from '../../../../../../.claude/.conversations/using-a-telegram-username-on-a-new-account/1-august-10-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {August1020261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
