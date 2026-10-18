import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--okay-can-you-catch-up-on-chemi--1d0d61b4/.book';
import Cover from '../../../../../../.claude/.conversations/claude--okay-can-you-catch-up-on-chemi--1d0d61b4/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--okay-can-you-catch-up-on-chemi--1d0d61b4/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--okay-can-you-catch-up-on-chemi--1d0d61b4/.table';
import November720251 from '../../../../../../.claude/.conversations/claude--okay-can-you-catch-up-on-chemi--1d0d61b4/1-november-7-2025';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {November720251()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
