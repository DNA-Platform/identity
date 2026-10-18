import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--translate-the-content-of-the-p--4141b8d6/.book';
import Cover from '../../../../../../.claude/.conversations/claude--translate-the-content-of-the-p--4141b8d6/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--translate-the-content-of-the-p--4141b8d6/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--translate-the-content-of-the-p--4141b8d6/.table';
import February420261 from '../../../../../../.claude/.conversations/claude--translate-the-content-of-the-p--4141b8d6/1-february-4-2026';
import February520262 from '../../../../../../.claude/.conversations/claude--translate-the-content-of-the-p--4141b8d6/2-february-5-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {February420261()}
        {February520262()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
