import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--accessing-cash-through-credit-cards--d2c7cde9/.book';
import Cover from '../../../../../../.claude/.conversations/claude--accessing-cash-through-credit-cards--d2c7cde9/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--accessing-cash-through-credit-cards--d2c7cde9/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--accessing-cash-through-credit-cards--d2c7cde9/.table';
import October2220241 from '../../../../../../.claude/.conversations/claude--accessing-cash-through-credit-cards--d2c7cde9/1-october-22-2024';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {October2220241()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
