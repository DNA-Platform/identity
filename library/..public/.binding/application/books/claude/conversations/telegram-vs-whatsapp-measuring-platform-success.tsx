import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/telegram-vs-whatsapp-measuring-platform-success/.book';
import Cover from '../../../../../../.claude/.conversations/telegram-vs-whatsapp-measuring-platform-success/.cover';
import Synopsis from '../../../../../../.claude/.conversations/telegram-vs-whatsapp-measuring-platform-success/.synopsis';
import Table from '../../../../../../.claude/.conversations/telegram-vs-whatsapp-measuring-platform-success/.table';
import January2620261 from '../../../../../../.claude/.conversations/telegram-vs-whatsapp-measuring-platform-success/1-january-26-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {January2620261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
