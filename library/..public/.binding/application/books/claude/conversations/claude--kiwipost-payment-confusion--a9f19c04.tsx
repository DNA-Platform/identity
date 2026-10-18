import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--kiwipost-payment-confusion--a9f19c04/.book';
import Cover from '../../../../../../.claude/.conversations/claude--kiwipost-payment-confusion--a9f19c04/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--kiwipost-payment-confusion--a9f19c04/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--kiwipost-payment-confusion--a9f19c04/.table';
import October1020261 from '../../../../../../.claude/.conversations/claude--kiwipost-payment-confusion--a9f19c04/1-october-10-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {October1020261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
