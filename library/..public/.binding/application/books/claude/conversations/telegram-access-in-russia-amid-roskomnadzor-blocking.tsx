import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/telegram-access-in-russia-amid-roskomnadzor-blocking/.book';
import Cover from '../../../../../../.claude/.conversations/telegram-access-in-russia-amid-roskomnadzor-blocking/.cover';
import Synopsis from '../../../../../../.claude/.conversations/telegram-access-in-russia-amid-roskomnadzor-blocking/.synopsis';
import Table from '../../../../../../.claude/.conversations/telegram-access-in-russia-amid-roskomnadzor-blocking/.table';
import February1220261 from '../../../../../../.claude/.conversations/telegram-access-in-russia-amid-roskomnadzor-blocking/1-february-12-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {February1220261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
