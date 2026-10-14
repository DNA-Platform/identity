import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/distinguishing-type-category-and-kind-in-english/.book';
import Cover from '../../../../../../.claude/.conversations/distinguishing-type-category-and-kind-in-english/.cover';
import Synopsis from '../../../../../../.claude/.conversations/distinguishing-type-category-and-kind-in-english/.synopsis';
import Table from '../../../../../../.claude/.conversations/distinguishing-type-category-and-kind-in-english/.table';
import July320261 from '../../../../../../.claude/.conversations/distinguishing-type-category-and-kind-in-english/1-july-3-2026';

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
