import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--executing-a-40k-position-in-tonx-via-interactive-brokers--95cdfad3/.book';
import Cover from '../../../../../../.claude/.conversations/claude--executing-a-40k-position-in-tonx-via-interactive-brokers--95cdfad3/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--executing-a-40k-position-in-tonx-via-interactive-brokers--95cdfad3/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--executing-a-40k-position-in-tonx-via-interactive-brokers--95cdfad3/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--executing-a-40k-position-in-tonx-via-interactive-brokers--95cdfad3/1-conversation';

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
