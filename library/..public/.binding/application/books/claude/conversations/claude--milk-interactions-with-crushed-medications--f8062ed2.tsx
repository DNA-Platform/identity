import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--milk-interactions-with-crushed-medications--f8062ed2/.book';
import Cover from '../../../../../../.claude/.conversations/claude--milk-interactions-with-crushed-medications--f8062ed2/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--milk-interactions-with-crushed-medications--f8062ed2/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--milk-interactions-with-crushed-medications--f8062ed2/.table';
import July2620261 from '../../../../../../.claude/.conversations/claude--milk-interactions-with-crushed-medications--f8062ed2/1-july-26-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {July2620261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
