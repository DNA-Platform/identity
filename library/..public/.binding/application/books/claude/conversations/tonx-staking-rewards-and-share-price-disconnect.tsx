import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/tonx-staking-rewards-and-share-price-disconnect/.book';
import Cover from '../../../../../../.claude/.conversations/tonx-staking-rewards-and-share-price-disconnect/.cover';
import Synopsis from '../../../../../../.claude/.conversations/tonx-staking-rewards-and-share-price-disconnect/.synopsis';
import Table from '../../../../../../.claude/.conversations/tonx-staking-rewards-and-share-price-disconnect/.table';
import April1420261 from '../../../../../../.claude/.conversations/tonx-staking-rewards-and-share-price-disconnect/1-april-14-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {April1420261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
