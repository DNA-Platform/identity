import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--finding-and-understanding-life-coaching--ce68b43c/.book';
import Cover from '../../../../../../.claude/.conversations/claude--finding-and-understanding-life-coaching--ce68b43c/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--finding-and-understanding-life-coaching--ce68b43c/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--finding-and-understanding-life-coaching--ce68b43c/.table';
import February1120261 from '../../../../../../.claude/.conversations/claude--finding-and-understanding-life-coaching--ce68b43c/1-february-11-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {February1120261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
