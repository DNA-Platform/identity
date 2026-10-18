import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--how-many-patosi-wallets-exist--ba5be707/.book';
import Cover from '../../../../../../.claude/.conversations/claude--how-many-patosi-wallets-exist--ba5be707/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--how-many-patosi-wallets-exist--ba5be707/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--how-many-patosi-wallets-exist--ba5be707/.table';
import January3020261 from '../../../../../../.claude/.conversations/claude--how-many-patosi-wallets-exist--ba5be707/1-january-30-2026';
import January3120262 from '../../../../../../.claude/.conversations/claude--how-many-patosi-wallets-exist--ba5be707/2-january-31-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {January3020261()}
        {January3120262()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
