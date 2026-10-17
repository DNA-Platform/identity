import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/russias-telegram-throttling-via-tspu-infrastructure/.book';
import Cover from '../../../../../../.claude/.conversations/russias-telegram-throttling-via-tspu-infrastructure/.cover';
import Synopsis from '../../../../../../.claude/.conversations/russias-telegram-throttling-via-tspu-infrastructure/.synopsis';
import Table from '../../../../../../.claude/.conversations/russias-telegram-throttling-via-tspu-infrastructure/.table';
import February1020261 from '../../../../../../.claude/.conversations/russias-telegram-throttling-via-tspu-infrastructure/1-february-10-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {February1020261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
