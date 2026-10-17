import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--ton-and-gram-ecosystem-updates--d5d0756e/.book';
import Cover from '../../../../../../.claude/.conversations/claude--ton-and-gram-ecosystem-updates--d5d0756e/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--ton-and-gram-ecosystem-updates--d5d0756e/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--ton-and-gram-ecosystem-updates--d5d0756e/.table';
import July1420261 from '../../../../../../.claude/.conversations/claude--ton-and-gram-ecosystem-updates--d5d0756e/1-july-14-2026';
import July1520262 from '../../../../../../.claude/.conversations/claude--ton-and-gram-ecosystem-updates--d5d0756e/2-july-15-2026';
import July2720263 from '../../../../../../.claude/.conversations/claude--ton-and-gram-ecosystem-updates--d5d0756e/3-july-27-2026';
import July3020264 from '../../../../../../.claude/.conversations/claude--ton-and-gram-ecosystem-updates--d5d0756e/4-july-30-2026';
import July3120265 from '../../../../../../.claude/.conversations/claude--ton-and-gram-ecosystem-updates--d5d0756e/5-july-31-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {July1420261()}
        {July1520262()}
        {July2720263()}
        {July3020264()}
        {July3120265()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
