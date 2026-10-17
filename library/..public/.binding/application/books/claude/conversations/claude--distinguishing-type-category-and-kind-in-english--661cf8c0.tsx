import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--distinguishing-type-category-and-kind-in-english--661cf8c0/.book';
import Cover from '../../../../../../.claude/.conversations/claude--distinguishing-type-category-and-kind-in-english--661cf8c0/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--distinguishing-type-category-and-kind-in-english--661cf8c0/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--distinguishing-type-category-and-kind-in-english--661cf8c0/.table';
import July320261 from '../../../../../../.claude/.conversations/claude--distinguishing-type-category-and-kind-in-english--661cf8c0/1-july-3-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {July320261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
