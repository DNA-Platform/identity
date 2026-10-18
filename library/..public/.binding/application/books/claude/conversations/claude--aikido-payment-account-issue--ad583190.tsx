import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--aikido-payment-account-issue--ad583190/.book';
import Cover from '../../../../../../.claude/.conversations/claude--aikido-payment-account-issue--ad583190/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--aikido-payment-account-issue--ad583190/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--aikido-payment-account-issue--ad583190/.table';
import October520261 from '../../../../../../.claude/.conversations/claude--aikido-payment-account-issue--ad583190/1-october-5-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {October520261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
