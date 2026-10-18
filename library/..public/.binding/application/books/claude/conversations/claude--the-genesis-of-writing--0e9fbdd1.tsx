import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--the-genesis-of-writing--0e9fbdd1/.book';
import Cover from '../../../../../../.claude/.conversations/claude--the-genesis-of-writing--0e9fbdd1/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--the-genesis-of-writing--0e9fbdd1/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--the-genesis-of-writing--0e9fbdd1/.table';
import September1820261 from '../../../../../../.claude/.conversations/claude--the-genesis-of-writing--0e9fbdd1/1-september-18-2026';
import September1920262 from '../../../../../../.claude/.conversations/claude--the-genesis-of-writing--0e9fbdd1/2-september-19-2026';
import September2020263 from '../../../../../../.claude/.conversations/claude--the-genesis-of-writing--0e9fbdd1/3-september-20-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {September1820261()}
        {September1920262()}
        {September2020263()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
