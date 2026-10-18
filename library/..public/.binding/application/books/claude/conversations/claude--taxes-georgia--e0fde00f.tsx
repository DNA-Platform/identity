import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--taxes-georgia--e0fde00f/.book';
import Cover from '../../../../../../.claude/.conversations/claude--taxes-georgia--e0fde00f/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--taxes-georgia--e0fde00f/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--taxes-georgia--e0fde00f/.table';
import July620261 from '../../../../../../.claude/.conversations/claude--taxes-georgia--e0fde00f/1-july-6-2026';
import July720262 from '../../../../../../.claude/.conversations/claude--taxes-georgia--e0fde00f/2-july-7-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {July620261()}
        {July720262()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
