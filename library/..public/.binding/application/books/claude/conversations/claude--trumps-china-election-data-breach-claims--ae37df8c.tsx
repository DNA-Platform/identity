import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--trumps-china-election-data-breach-claims--ae37df8c/.book';
import Cover from '../../../../../../.claude/.conversations/claude--trumps-china-election-data-breach-claims--ae37df8c/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--trumps-china-election-data-breach-claims--ae37df8c/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--trumps-china-election-data-breach-claims--ae37df8c/.table';
import July1720261 from '../../../../../../.claude/.conversations/claude--trumps-china-election-data-breach-claims--ae37df8c/1-july-17-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {July1720261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
