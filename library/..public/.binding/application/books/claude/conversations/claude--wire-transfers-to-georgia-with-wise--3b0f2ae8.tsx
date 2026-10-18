import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--wire-transfers-to-georgia-with-wise--3b0f2ae8/.book';
import Cover from '../../../../../../.claude/.conversations/claude--wire-transfers-to-georgia-with-wise--3b0f2ae8/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--wire-transfers-to-georgia-with-wise--3b0f2ae8/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--wire-transfers-to-georgia-with-wise--3b0f2ae8/.table';
import February620261 from '../../../../../../.claude/.conversations/claude--wire-transfers-to-georgia-with-wise--3b0f2ae8/1-february-6-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {February620261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
