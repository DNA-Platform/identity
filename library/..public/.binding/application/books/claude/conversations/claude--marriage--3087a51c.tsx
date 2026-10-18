import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--marriage--3087a51c/.book';
import Cover from '../../../../../../.claude/.conversations/claude--marriage--3087a51c/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--marriage--3087a51c/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--marriage--3087a51c/.table';
import February1520261 from '../../../../../../.claude/.conversations/claude--marriage--3087a51c/1-february-15-2026';
import April2420262 from '../../../../../../.claude/.conversations/claude--marriage--3087a51c/2-april-24-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {February1520261()}
        {April2420262()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
