import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--a-continuation--61ef76df/.book';
import Cover from '../../../../../../.claude/.conversations/claude--a-continuation--61ef76df/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--a-continuation--61ef76df/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--a-continuation--61ef76df/.table';
import May2520261 from '../../../../../../.claude/.conversations/claude--a-continuation--61ef76df/1-may-25-2026';

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
