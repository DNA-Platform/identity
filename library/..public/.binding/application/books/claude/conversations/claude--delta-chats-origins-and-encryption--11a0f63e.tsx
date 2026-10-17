import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--delta-chats-origins-and-encryption--11a0f63e/.book';
import Cover from '../../../../../../.claude/.conversations/claude--delta-chats-origins-and-encryption--11a0f63e/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--delta-chats-origins-and-encryption--11a0f63e/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--delta-chats-origins-and-encryption--11a0f63e/.table';
import March2320261 from '../../../../../../.claude/.conversations/claude--delta-chats-origins-and-encryption--11a0f63e/1-march-23-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {March2320261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
