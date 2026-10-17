import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--telegram-situation-in-russia-unfolding--9d7069cb/.book';
import Cover from '../../../../../../.claude/.conversations/claude--telegram-situation-in-russia-unfolding--9d7069cb/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--telegram-situation-in-russia-unfolding--9d7069cb/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--telegram-situation-in-russia-unfolding--9d7069cb/.table';
import February1020261 from '../../../../../../.claude/.conversations/claude--telegram-situation-in-russia-unfolding--9d7069cb/1-february-10-2026';

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
