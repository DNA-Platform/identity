import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--untitled-16-july-2026--757a0279/.book';
import Cover from '../../../../../../.claude/.conversations/claude--untitled-16-july-2026--757a0279/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--untitled-16-july-2026--757a0279/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--untitled-16-july-2026--757a0279/.table';
import July1620261 from '../../../../../../.claude/.conversations/claude--untitled-16-july-2026--757a0279/1-july-16-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {July1620261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
