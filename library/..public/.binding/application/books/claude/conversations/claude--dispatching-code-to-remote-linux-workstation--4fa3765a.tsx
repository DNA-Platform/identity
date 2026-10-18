import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--dispatching-code-to-remote-linux-workstation--4fa3765a/.book';
import Cover from '../../../../../../.claude/.conversations/claude--dispatching-code-to-remote-linux-workstation--4fa3765a/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--dispatching-code-to-remote-linux-workstation--4fa3765a/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--dispatching-code-to-remote-linux-workstation--4fa3765a/.table';
import September2420261 from '../../../../../../.claude/.conversations/claude--dispatching-code-to-remote-linux-workstation--4fa3765a/1-september-24-2026';
import September2620262 from '../../../../../../.claude/.conversations/claude--dispatching-code-to-remote-linux-workstation--4fa3765a/2-september-26-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {September2420261()}
        {September2620262()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
