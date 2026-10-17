import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--original-telegram-open-network-whitepaper--2fe78c27/.book';
import Cover from '../../../../../../.claude/.conversations/claude--original-telegram-open-network-whitepaper--2fe78c27/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--original-telegram-open-network-whitepaper--2fe78c27/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--original-telegram-open-network-whitepaper--2fe78c27/.table';
import May1120261 from '../../../../../../.claude/.conversations/claude--original-telegram-open-network-whitepaper--2fe78c27/1-may-11-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {May1120261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
