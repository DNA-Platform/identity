import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--checking-ram-and-memory-on-windows--a8cd216e/.book';
import Cover from '../../../../../../.claude/.conversations/claude--checking-ram-and-memory-on-windows--a8cd216e/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--checking-ram-and-memory-on-windows--a8cd216e/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--checking-ram-and-memory-on-windows--a8cd216e/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--checking-ram-and-memory-on-windows--a8cd216e/1-conversation';

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
