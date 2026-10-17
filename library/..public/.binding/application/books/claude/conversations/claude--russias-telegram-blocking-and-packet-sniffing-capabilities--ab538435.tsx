import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--russias-telegram-blocking-and-packet-sniffing-capabilities--ab538435/.book';
import Cover from '../../../../../../.claude/.conversations/claude--russias-telegram-blocking-and-packet-sniffing-capabilities--ab538435/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--russias-telegram-blocking-and-packet-sniffing-capabilities--ab538435/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--russias-telegram-blocking-and-packet-sniffing-capabilities--ab538435/.table';
import March1620261 from '../../../../../../.claude/.conversations/claude--russias-telegram-blocking-and-packet-sniffing-capabilities--ab538435/1-march-16-2026';
import March1820262 from '../../../../../../.claude/.conversations/claude--russias-telegram-blocking-and-packet-sniffing-capabilities--ab538435/2-march-18-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {March1620261()}
        {March1820262()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
