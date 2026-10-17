import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/delta-chats-origins-and-encryption/.book';
import Cover from '../../../../../../.claude/.conversations/delta-chats-origins-and-encryption/.cover';
import Synopsis from '../../../../../../.claude/.conversations/delta-chats-origins-and-encryption/.synopsis';
import Table from '../../../../../../.claude/.conversations/delta-chats-origins-and-encryption/.table';
import March2320261 from '../../../../../../.claude/.conversations/delta-chats-origins-and-encryption/1-march-23-2026';

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
