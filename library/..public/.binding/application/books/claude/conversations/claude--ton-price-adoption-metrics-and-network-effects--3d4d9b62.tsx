import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--ton-price-adoption-metrics-and-network-effects--3d4d9b62/.book';
import Cover from '../../../../../../.claude/.conversations/claude--ton-price-adoption-metrics-and-network-effects--3d4d9b62/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--ton-price-adoption-metrics-and-network-effects--3d4d9b62/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--ton-price-adoption-metrics-and-network-effects--3d4d9b62/.table';
import April2620261 from '../../../../../../.claude/.conversations/claude--ton-price-adoption-metrics-and-network-effects--3d4d9b62/1-april-26-2026';
import April2720262 from '../../../../../../.claude/.conversations/claude--ton-price-adoption-metrics-and-network-effects--3d4d9b62/2-april-27-2026';

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
