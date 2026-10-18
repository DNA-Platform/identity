import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--us-visa-mastercard-with-wildberries-georgia--5ea43231/.book';
import Cover from '../../../../../../.claude/.conversations/claude--us-visa-mastercard-with-wildberries-georgia--5ea43231/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--us-visa-mastercard-with-wildberries-georgia--5ea43231/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--us-visa-mastercard-with-wildberries-georgia--5ea43231/.table';
import February1520261 from '../../../../../../.claude/.conversations/claude--us-visa-mastercard-with-wildberries-georgia--5ea43231/1-february-15-2026';

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
