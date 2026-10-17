import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--ton-validator-rewards-and-staking-profitability--0d2e8949/.book';
import Cover from '../../../../../../.claude/.conversations/claude--ton-validator-rewards-and-staking-profitability--0d2e8949/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--ton-validator-rewards-and-staking-profitability--0d2e8949/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--ton-validator-rewards-and-staking-profitability--0d2e8949/.table';
import April620261 from '../../../../../../.claude/.conversations/claude--ton-validator-rewards-and-staking-profitability--0d2e8949/1-april-6-2026';
import April1120262 from '../../../../../../.claude/.conversations/claude--ton-validator-rewards-and-staking-profitability--0d2e8949/2-april-11-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {April620261()}
        {April1120262()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
