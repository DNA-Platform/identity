import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--untitled-5-july-2026--1ddd9f0a/.book';
import Cover from '../../../../../../.claude/.conversations/claude--untitled-5-july-2026--1ddd9f0a/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--untitled-5-july-2026--1ddd9f0a/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--untitled-5-july-2026--1ddd9f0a/.table';
import July520261 from '../../../../../../.claude/.conversations/claude--untitled-5-july-2026--1ddd9f0a/1-july-5-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {July520261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
