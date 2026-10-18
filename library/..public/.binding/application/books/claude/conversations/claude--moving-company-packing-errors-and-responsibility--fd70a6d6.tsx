import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--moving-company-packing-errors-and-responsibility--fd70a6d6/.book';
import Cover from '../../../../../../.claude/.conversations/claude--moving-company-packing-errors-and-responsibility--fd70a6d6/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--moving-company-packing-errors-and-responsibility--fd70a6d6/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--moving-company-packing-errors-and-responsibility--fd70a6d6/.table';
import February1520261 from '../../../../../../.claude/.conversations/claude--moving-company-packing-errors-and-responsibility--fd70a6d6/1-february-15-2026';

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
