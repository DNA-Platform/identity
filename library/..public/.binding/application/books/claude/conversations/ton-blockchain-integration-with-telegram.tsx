import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/ton-blockchain-integration-with-telegram/.book';
import Cover from '../../../../../../.claude/.conversations/ton-blockchain-integration-with-telegram/.cover';
import Synopsis from '../../../../../../.claude/.conversations/ton-blockchain-integration-with-telegram/.synopsis';
import Table from '../../../../../../.claude/.conversations/ton-blockchain-integration-with-telegram/.table';
import January2820261 from '../../../../../../.claude/.conversations/ton-blockchain-integration-with-telegram/1-january-28-2026';
import January2920262 from '../../../../../../.claude/.conversations/ton-blockchain-integration-with-telegram/2-january-29-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {January2820261()}
        {January2920262()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
