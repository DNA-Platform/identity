import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/ton-price-adoption-metrics-and-network-effects/.book';
import Cover from '../../../../../../.claude/.conversations/ton-price-adoption-metrics-and-network-effects/.cover';
import Synopsis from '../../../../../../.claude/.conversations/ton-price-adoption-metrics-and-network-effects/.synopsis';
import Table from '../../../../../../.claude/.conversations/ton-price-adoption-metrics-and-network-effects/.table';
import April2620261 from '../../../../../../.claude/.conversations/ton-price-adoption-metrics-and-network-effects/1-april-26-2026';
import April2720262 from '../../../../../../.claude/.conversations/ton-price-adoption-metrics-and-network-effects/2-april-27-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {April2620261()}
        {April2720262()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
