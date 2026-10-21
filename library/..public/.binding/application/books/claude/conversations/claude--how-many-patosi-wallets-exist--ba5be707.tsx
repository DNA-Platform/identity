import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--how-many-patosi-wallets-exist--ba5be707/.book';
import Cover from '../../../../../../.claude/.conversations/claude--how-many-patosi-wallets-exist--ba5be707/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--how-many-patosi-wallets-exist--ba5be707/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--how-many-patosi-wallets-exist--ba5be707/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--how-many-patosi-wallets-exist--ba5be707/1-conversation';

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
