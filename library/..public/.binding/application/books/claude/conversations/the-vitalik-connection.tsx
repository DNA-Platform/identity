import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/the-vitalik-connection/.book';
import Cover from '../../../../../../.claude/.conversations/the-vitalik-connection/.cover';
import Synopsis from '../../../../../../.claude/.conversations/the-vitalik-connection/.synopsis';
import Table from '../../../../../../.claude/.conversations/the-vitalik-connection/.table';
import January1820261 from '../../../../../../.claude/.conversations/the-vitalik-connection/1-january-18-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {January1820261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
