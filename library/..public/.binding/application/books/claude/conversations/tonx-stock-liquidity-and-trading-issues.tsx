import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/tonx-stock-liquidity-and-trading-issues/.book';
import Cover from '../../../../../../.claude/.conversations/tonx-stock-liquidity-and-trading-issues/.cover';
import Synopsis from '../../../../../../.claude/.conversations/tonx-stock-liquidity-and-trading-issues/.synopsis';
import Table from '../../../../../../.claude/.conversations/tonx-stock-liquidity-and-trading-issues/.table';
import February1520261 from '../../../../../../.claude/.conversations/tonx-stock-liquidity-and-trading-issues/1-february-15-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {February1520261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
