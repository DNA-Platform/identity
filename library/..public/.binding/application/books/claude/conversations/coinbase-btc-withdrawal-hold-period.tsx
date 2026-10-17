import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/coinbase-btc-withdrawal-hold-period/.book';
import Cover from '../../../../../../.claude/.conversations/coinbase-btc-withdrawal-hold-period/.cover';
import Synopsis from '../../../../../../.claude/.conversations/coinbase-btc-withdrawal-hold-period/.synopsis';
import Table from '../../../../../../.claude/.conversations/coinbase-btc-withdrawal-hold-period/.table';
import April1520261 from '../../../../../../.claude/.conversations/coinbase-btc-withdrawal-hold-period/1-april-15-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {April1520261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
