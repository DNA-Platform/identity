import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--reset-ipad-without-password--f7d91df1/.book';
import Cover from '../../../../../../.claude/.conversations/claude--reset-ipad-without-password--f7d91df1/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--reset-ipad-without-password--f7d91df1/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--reset-ipad-without-password--f7d91df1/.table';
import May2020261 from '../../../../../../.claude/.conversations/claude--reset-ipad-without-password--f7d91df1/1-may-20-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {May2020261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
