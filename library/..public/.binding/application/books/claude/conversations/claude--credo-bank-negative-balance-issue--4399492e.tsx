import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--credo-bank-negative-balance-issue--4399492e/.book';
import Cover from '../../../../../../.claude/.conversations/claude--credo-bank-negative-balance-issue--4399492e/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--credo-bank-negative-balance-issue--4399492e/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--credo-bank-negative-balance-issue--4399492e/.table';
import March3020261 from '../../../../../../.claude/.conversations/claude--credo-bank-negative-balance-issue--4399492e/1-march-30-2026';
import March3120262 from '../../../../../../.claude/.conversations/claude--credo-bank-negative-balance-issue--4399492e/2-march-31-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {March3020261()}
        {March3120262()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
