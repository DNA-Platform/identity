import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--telegram-access-in-russia-amid-roskomnadzor-blocking--e0c39081/.book';
import Cover from '../../../../../../.claude/.conversations/claude--telegram-access-in-russia-amid-roskomnadzor-blocking--e0c39081/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--telegram-access-in-russia-amid-roskomnadzor-blocking--e0c39081/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--telegram-access-in-russia-amid-roskomnadzor-blocking--e0c39081/.table';
import February1220261 from '../../../../../../.claude/.conversations/claude--telegram-access-in-russia-amid-roskomnadzor-blocking--e0c39081/1-february-12-2026';

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
