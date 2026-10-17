import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/ton-blockchain-upgrade-and-fee-implications/.book';
import Cover from '../../../../../../.claude/.conversations/ton-blockchain-upgrade-and-fee-implications/.cover';
import Synopsis from '../../../../../../.claude/.conversations/ton-blockchain-upgrade-and-fee-implications/.synopsis';
import Table from '../../../../../../.claude/.conversations/ton-blockchain-upgrade-and-fee-implications/.table';
import April2320261 from '../../../../../../.claude/.conversations/ton-blockchain-upgrade-and-fee-implications/1-april-23-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {April2320261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
