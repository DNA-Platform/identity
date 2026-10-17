import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/bitcoin/.book';
import Cover from '../../../../../../.claude/.conversations/bitcoin/.cover';
import Synopsis from '../../../../../../.claude/.conversations/bitcoin/.synopsis';
import Table from '../../../../../../.claude/.conversations/bitcoin/.table';
import January1120261 from '../../../../../../.claude/.conversations/bitcoin/1-january-11-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {January1120261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
