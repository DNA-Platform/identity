import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--tonx-stock-liquidity-and-trading-issues--40f035ed/.book';
import Cover from '../../../../../../.claude/.conversations/claude--tonx-stock-liquidity-and-trading-issues--40f035ed/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--tonx-stock-liquidity-and-trading-issues--40f035ed/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--tonx-stock-liquidity-and-trading-issues--40f035ed/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--tonx-stock-liquidity-and-trading-issues--40f035ed/1-conversation';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {Conversation1()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
