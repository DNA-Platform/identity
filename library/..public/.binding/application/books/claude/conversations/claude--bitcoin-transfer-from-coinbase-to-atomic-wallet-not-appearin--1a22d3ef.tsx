import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--bitcoin-transfer-from-coinbase-to-atomic-wallet-not-appearin--1a22d3ef/.book';
import Cover from '../../../../../../.claude/.conversations/claude--bitcoin-transfer-from-coinbase-to-atomic-wallet-not-appearin--1a22d3ef/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--bitcoin-transfer-from-coinbase-to-atomic-wallet-not-appearin--1a22d3ef/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--bitcoin-transfer-from-coinbase-to-atomic-wallet-not-appearin--1a22d3ef/.table';
import April2920261 from '../../../../../../.claude/.conversations/claude--bitcoin-transfer-from-coinbase-to-atomic-wallet-not-appearin--1a22d3ef/1-april-29-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {April2920261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
