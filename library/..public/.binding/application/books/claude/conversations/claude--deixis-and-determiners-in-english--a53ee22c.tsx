import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--deixis-and-determiners-in-english--a53ee22c/.book';
import Cover from '../../../../../../.claude/.conversations/claude--deixis-and-determiners-in-english--a53ee22c/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--deixis-and-determiners-in-english--a53ee22c/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--deixis-and-determiners-in-english--a53ee22c/.table';
import February920261 from '../../../../../../.claude/.conversations/claude--deixis-and-determiners-in-english--a53ee22c/1-february-9-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {February920261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
