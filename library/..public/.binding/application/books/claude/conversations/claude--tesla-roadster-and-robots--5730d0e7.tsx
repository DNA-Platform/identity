import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--tesla-roadster-and-robots--5730d0e7/.book';
import Cover from '../../../../../../.claude/.conversations/claude--tesla-roadster-and-robots--5730d0e7/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--tesla-roadster-and-robots--5730d0e7/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--tesla-roadster-and-robots--5730d0e7/.table';
import October1620261 from '../../../../../../.claude/.conversations/claude--tesla-roadster-and-robots--5730d0e7/1-october-16-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {October1620261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
