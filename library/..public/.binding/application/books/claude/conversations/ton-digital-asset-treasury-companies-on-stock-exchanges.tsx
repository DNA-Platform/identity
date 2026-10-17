import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/ton-digital-asset-treasury-companies-on-stock-exchanges/.book';
import Cover from '../../../../../../.claude/.conversations/ton-digital-asset-treasury-companies-on-stock-exchanges/.cover';
import Synopsis from '../../../../../../.claude/.conversations/ton-digital-asset-treasury-companies-on-stock-exchanges/.synopsis';
import Table from '../../../../../../.claude/.conversations/ton-digital-asset-treasury-companies-on-stock-exchanges/.table';
import February520261 from '../../../../../../.claude/.conversations/ton-digital-asset-treasury-companies-on-stock-exchanges/1-february-5-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {February520261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
