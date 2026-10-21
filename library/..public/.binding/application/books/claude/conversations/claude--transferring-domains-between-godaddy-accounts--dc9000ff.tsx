import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--transferring-domains-between-godaddy-accounts--dc9000ff/.book';
import Cover from '../../../../../../.claude/.conversations/claude--transferring-domains-between-godaddy-accounts--dc9000ff/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--transferring-domains-between-godaddy-accounts--dc9000ff/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--transferring-domains-between-godaddy-accounts--dc9000ff/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--transferring-domains-between-godaddy-accounts--dc9000ff/1-conversation';

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
