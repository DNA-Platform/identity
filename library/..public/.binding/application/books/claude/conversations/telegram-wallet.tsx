import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/telegram-wallet/.book';
import Cover from '../../../../../../.claude/.conversations/telegram-wallet/.cover';
import Synopsis from '../../../../../../.claude/.conversations/telegram-wallet/.synopsis';
import Table from '../../../../../../.claude/.conversations/telegram-wallet/.table';
import January720261 from '../../../../../../.claude/.conversations/telegram-wallet/1-january-7-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {January720261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
