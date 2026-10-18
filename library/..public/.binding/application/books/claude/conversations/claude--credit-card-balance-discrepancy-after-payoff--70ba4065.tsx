import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--credit-card-balance-discrepancy-after-payoff--70ba4065/.book';
import Cover from '../../../../../../.claude/.conversations/claude--credit-card-balance-discrepancy-after-payoff--70ba4065/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--credit-card-balance-discrepancy-after-payoff--70ba4065/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--credit-card-balance-discrepancy-after-payoff--70ba4065/.table';
import August2720261 from '../../../../../../.claude/.conversations/claude--credit-card-balance-discrepancy-after-payoff--70ba4065/1-august-27-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {August2720261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
