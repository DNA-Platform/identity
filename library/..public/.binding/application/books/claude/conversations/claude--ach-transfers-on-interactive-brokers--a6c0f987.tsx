import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--ach-transfers-on-interactive-brokers--a6c0f987/.book';
import Cover from '../../../../../../.claude/.conversations/claude--ach-transfers-on-interactive-brokers--a6c0f987/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--ach-transfers-on-interactive-brokers--a6c0f987/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--ach-transfers-on-interactive-brokers--a6c0f987/.table';
import May420261 from '../../../../../../.claude/.conversations/claude--ach-transfers-on-interactive-brokers--a6c0f987/1-may-4-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {May420261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
