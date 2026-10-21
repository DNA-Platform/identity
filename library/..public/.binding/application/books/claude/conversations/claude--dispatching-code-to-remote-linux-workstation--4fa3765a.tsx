import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--dispatching-code-to-remote-linux-workstation--4fa3765a/.book';
import Cover from '../../../../../../.claude/.conversations/claude--dispatching-code-to-remote-linux-workstation--4fa3765a/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--dispatching-code-to-remote-linux-workstation--4fa3765a/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--dispatching-code-to-remote-linux-workstation--4fa3765a/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--dispatching-code-to-remote-linux-workstation--4fa3765a/1-conversation';

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
