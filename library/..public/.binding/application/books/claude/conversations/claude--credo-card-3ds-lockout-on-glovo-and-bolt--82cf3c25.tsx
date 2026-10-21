import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--credo-card-3ds-lockout-on-glovo-and-bolt--82cf3c25/.book';
import Cover from '../../../../../../.claude/.conversations/claude--credo-card-3ds-lockout-on-glovo-and-bolt--82cf3c25/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--credo-card-3ds-lockout-on-glovo-and-bolt--82cf3c25/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--credo-card-3ds-lockout-on-glovo-and-bolt--82cf3c25/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--credo-card-3ds-lockout-on-glovo-and-bolt--82cf3c25/1-conversation';

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
