import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/russian-internet-censorship-and-telegram-targeting/.book';
import Cover from '../../../../../../.claude/.conversations/russian-internet-censorship-and-telegram-targeting/.cover';
import Synopsis from '../../../../../../.claude/.conversations/russian-internet-censorship-and-telegram-targeting/.synopsis';
import Table from '../../../../../../.claude/.conversations/russian-internet-censorship-and-telegram-targeting/.table';
import February1020261 from '../../../../../../.claude/.conversations/russian-internet-censorship-and-telegram-targeting/1-february-10-2026';
import February1120262 from '../../../../../../.claude/.conversations/russian-internet-censorship-and-telegram-targeting/2-february-11-2026';

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
