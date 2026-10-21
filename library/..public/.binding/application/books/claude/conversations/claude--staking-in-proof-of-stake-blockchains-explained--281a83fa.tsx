import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--staking-in-proof-of-stake-blockchains-explained--281a83fa/.book';
import Cover from '../../../../../../.claude/.conversations/claude--staking-in-proof-of-stake-blockchains-explained--281a83fa/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--staking-in-proof-of-stake-blockchains-explained--281a83fa/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--staking-in-proof-of-stake-blockchains-explained--281a83fa/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--staking-in-proof-of-stake-blockchains-explained--281a83fa/1-conversation';

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
