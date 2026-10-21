import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--ton-blockchain-upgrade-and-fee-implications--8eb3976a/.book';
import Cover from '../../../../../../.claude/.conversations/claude--ton-blockchain-upgrade-and-fee-implications--8eb3976a/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--ton-blockchain-upgrade-and-fee-implications--8eb3976a/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--ton-blockchain-upgrade-and-fee-implications--8eb3976a/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--ton-blockchain-upgrade-and-fee-implications--8eb3976a/1-conversation';

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
