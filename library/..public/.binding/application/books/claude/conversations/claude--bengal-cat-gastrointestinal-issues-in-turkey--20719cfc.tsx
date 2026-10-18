import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--bengal-cat-gastrointestinal-issues-in-turkey--20719cfc/.book';
import Cover from '../../../../../../.claude/.conversations/claude--bengal-cat-gastrointestinal-issues-in-turkey--20719cfc/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--bengal-cat-gastrointestinal-issues-in-turkey--20719cfc/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--bengal-cat-gastrointestinal-issues-in-turkey--20719cfc/.table';
import January1720261 from '../../../../../../.claude/.conversations/claude--bengal-cat-gastrointestinal-issues-in-turkey--20719cfc/1-january-17-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {January1720261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
