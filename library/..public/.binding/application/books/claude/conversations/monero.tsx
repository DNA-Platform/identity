import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/monero/.book';
import Cover from '../../../../../../.claude/.conversations/monero/.cover';
import Synopsis from '../../../../../../.claude/.conversations/monero/.synopsis';
import Table from '../../../../../../.claude/.conversations/monero/.table';
import January1120261 from '../../../../../../.claude/.conversations/monero/1-january-11-2026';

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
