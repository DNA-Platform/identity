import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--alimony--3700de01/.book';
import Cover from '../../../../../../.claude/.conversations/claude--alimony--3700de01/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--alimony--3700de01/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--alimony--3700de01/.table';
import July620261 from '../../../../../../.claude/.conversations/claude--alimony--3700de01/1-july-6-2026';
import August120262 from '../../../../../../.claude/.conversations/claude--alimony--3700de01/2-august-1-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {July620261()}
        {August120262()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
