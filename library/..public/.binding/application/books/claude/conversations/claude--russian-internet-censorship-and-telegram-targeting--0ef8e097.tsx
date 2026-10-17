import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--russian-internet-censorship-and-telegram-targeting--0ef8e097/.book';
import Cover from '../../../../../../.claude/.conversations/claude--russian-internet-censorship-and-telegram-targeting--0ef8e097/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--russian-internet-censorship-and-telegram-targeting--0ef8e097/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--russian-internet-censorship-and-telegram-targeting--0ef8e097/.table';
import February1020261 from '../../../../../../.claude/.conversations/claude--russian-internet-censorship-and-telegram-targeting--0ef8e097/1-february-10-2026';
import February1120262 from '../../../../../../.claude/.conversations/claude--russian-internet-censorship-and-telegram-targeting--0ef8e097/2-february-11-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {February1020261()}
        {February1120262()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
