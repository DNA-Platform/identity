import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--newtons-intuitive-and-formal-laws-of-motion--cd20fa50/.book';
import Cover from '../../../../../../.claude/.conversations/claude--newtons-intuitive-and-formal-laws-of-motion--cd20fa50/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--newtons-intuitive-and-formal-laws-of-motion--cd20fa50/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--newtons-intuitive-and-formal-laws-of-motion--cd20fa50/.table';
import March2320251 from '../../../../../../.claude/.conversations/claude--newtons-intuitive-and-formal-laws-of-motion--cd20fa50/1-march-23-2025';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {March2320251()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
