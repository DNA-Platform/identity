import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--new-resume--714974ab/.book';
import Cover from '../../../../../../.claude/.conversations/claude--new-resume--714974ab/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--new-resume--714974ab/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--new-resume--714974ab/.table';
import May2620261 from '../../../../../../.claude/.conversations/claude--new-resume--714974ab/1-may-26-2026';
import May2820262 from '../../../../../../.claude/.conversations/claude--new-resume--714974ab/2-may-28-2026';
import May2920263 from '../../../../../../.claude/.conversations/claude--new-resume--714974ab/3-may-29-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {May2620261()}
        {May2820262()}
        {May2920263()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
