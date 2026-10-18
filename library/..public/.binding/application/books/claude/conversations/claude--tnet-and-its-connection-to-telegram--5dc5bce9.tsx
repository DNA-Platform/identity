import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--tnet-and-its-connection-to-telegram--5dc5bce9/.book';
import Cover from '../../../../../../.claude/.conversations/claude--tnet-and-its-connection-to-telegram--5dc5bce9/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--tnet-and-its-connection-to-telegram--5dc5bce9/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--tnet-and-its-connection-to-telegram--5dc5bce9/.table';
import February120261 from '../../../../../../.claude/.conversations/claude--tnet-and-its-connection-to-telegram--5dc5bce9/1-february-1-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {February120261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
