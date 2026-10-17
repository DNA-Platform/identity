import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--monad-unstaking-failing-in-atomic-wallet/.book';
import Cover from '../../../../../../.claude/.conversations/claude--monad-unstaking-failing-in-atomic-wallet/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--monad-unstaking-failing-in-atomic-wallet/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--monad-unstaking-failing-in-atomic-wallet/.table';
import August820261 from '../../../../../../.claude/.conversations/claude--monad-unstaking-failing-in-atomic-wallet/1-august-8-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {August820261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
