import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--stars-to-ton-conversion-restrictions-and-pricing--3950d95e/.book';
import Cover from '../../../../../../.claude/.conversations/claude--stars-to-ton-conversion-restrictions-and-pricing--3950d95e/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--stars-to-ton-conversion-restrictions-and-pricing--3950d95e/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--stars-to-ton-conversion-restrictions-and-pricing--3950d95e/.table';
import May820261 from '../../../../../../.claude/.conversations/claude--stars-to-ton-conversion-restrictions-and-pricing--3950d95e/1-may-8-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {May820261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
