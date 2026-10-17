import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--a-continuation/.book';
import Cover from '../../../../../../.claude/.conversations/claude--a-continuation/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--a-continuation/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--a-continuation/.table';
import May2520261 from '../../../../../../.claude/.conversations/claude--a-continuation/1-may-25-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {May2520261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
