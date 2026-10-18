import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--i-am-in-alanya-turkey-and-i-ne--3eae6c6a/.book';
import Cover from '../../../../../../.claude/.conversations/claude--i-am-in-alanya-turkey-and-i-ne--3eae6c6a/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--i-am-in-alanya-turkey-and-i-ne--3eae6c6a/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--i-am-in-alanya-turkey-and-i-ne--3eae6c6a/.table';
import February1020261 from '../../../../../../.claude/.conversations/claude--i-am-in-alanya-turkey-and-i-ne--3eae6c6a/1-february-10-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {February1020261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
