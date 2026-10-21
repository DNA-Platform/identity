import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--tonx-staking-rewards-and-share-price-disconnect--140a3ecf/.book';
import Cover from '../../../../../../.claude/.conversations/claude--tonx-staking-rewards-and-share-price-disconnect--140a3ecf/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--tonx-staking-rewards-and-share-price-disconnect--140a3ecf/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--tonx-staking-rewards-and-share-price-disconnect--140a3ecf/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--tonx-staking-rewards-and-share-price-disconnect--140a3ecf/1-conversation';

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
