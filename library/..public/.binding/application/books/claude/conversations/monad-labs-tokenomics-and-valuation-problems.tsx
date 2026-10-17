import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/monad-labs-tokenomics-and-valuation-problems/.book';
import Cover from '../../../../../../.claude/.conversations/monad-labs-tokenomics-and-valuation-problems/.cover';
import Synopsis from '../../../../../../.claude/.conversations/monad-labs-tokenomics-and-valuation-problems/.synopsis';
import Table from '../../../../../../.claude/.conversations/monad-labs-tokenomics-and-valuation-problems/.table';
import June3020261 from '../../../../../../.claude/.conversations/monad-labs-tokenomics-and-valuation-problems/1-june-30-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {June3020261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
