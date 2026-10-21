import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--the-bitcoin-whitepaper--7ad0c9ba/.book';
import Cover from '../../../../../../.claude/.conversations/claude--the-bitcoin-whitepaper--7ad0c9ba/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--the-bitcoin-whitepaper--7ad0c9ba/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--the-bitcoin-whitepaper--7ad0c9ba/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--the-bitcoin-whitepaper--7ad0c9ba/1-conversation';

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
