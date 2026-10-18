import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--the-meaning-of-semantics--1fc1426b/.book';
import Cover from '../../../../../../.claude/.conversations/claude--the-meaning-of-semantics--1fc1426b/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--the-meaning-of-semantics--1fc1426b/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--the-meaning-of-semantics--1fc1426b/.table';
import November2720241 from '../../../../../../.claude/.conversations/claude--the-meaning-of-semantics--1fc1426b/1-november-27-2024';
import November2820242 from '../../../../../../.claude/.conversations/claude--the-meaning-of-semantics--1fc1426b/2-november-28-2024';
import November3020243 from '../../../../../../.claude/.conversations/claude--the-meaning-of-semantics--1fc1426b/3-november-30-2024';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {November2720241()}
        {November2820242()}
        {November3020243()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
