import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--catch-up-on-recent-conversatio--44558158/.book';
import Cover from '../../../../../../.claude/.conversations/claude--catch-up-on-recent-conversatio--44558158/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--catch-up-on-recent-conversatio--44558158/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--catch-up-on-recent-conversatio--44558158/.table';
import August1820261 from '../../../../../../.claude/.conversations/claude--catch-up-on-recent-conversatio--44558158/1-august-18-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {August1820261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
