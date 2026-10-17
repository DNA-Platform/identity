import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--any-news-on-when-we-can-expect--e5150a82/.book';
import Cover from '../../../../../../.claude/.conversations/claude--any-news-on-when-we-can-expect--e5150a82/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--any-news-on-when-we-can-expect--e5150a82/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--any-news-on-when-we-can-expect--e5150a82/.table';
import May1420261 from '../../../../../../.claude/.conversations/claude--any-news-on-when-we-can-expect--e5150a82/1-may-14-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {May1420261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
