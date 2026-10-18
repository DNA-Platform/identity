import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--russias-economic-tipping-point-and-financial-runway--8cd5f53d/.book';
import Cover from '../../../../../../.claude/.conversations/claude--russias-economic-tipping-point-and-financial-runway--8cd5f53d/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--russias-economic-tipping-point-and-financial-runway--8cd5f53d/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--russias-economic-tipping-point-and-financial-runway--8cd5f53d/.table';
import March1420261 from '../../../../../../.claude/.conversations/claude--russias-economic-tipping-point-and-financial-runway--8cd5f53d/1-march-14-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {March1420261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
