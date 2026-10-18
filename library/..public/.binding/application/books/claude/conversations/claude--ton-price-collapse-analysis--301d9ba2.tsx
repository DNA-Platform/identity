import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--ton-price-collapse-analysis--301d9ba2/.book';
import Cover from '../../../../../../.claude/.conversations/claude--ton-price-collapse-analysis--301d9ba2/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--ton-price-collapse-analysis--301d9ba2/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--ton-price-collapse-analysis--301d9ba2/.table';
import May2320261 from '../../../../../../.claude/.conversations/claude--ton-price-collapse-analysis--301d9ba2/1-may-23-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {May2320261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
