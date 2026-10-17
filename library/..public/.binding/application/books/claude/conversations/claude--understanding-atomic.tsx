import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--understanding-atomic/.book';
import Cover from '../../../../../../.claude/.conversations/claude--understanding-atomic/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--understanding-atomic/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--understanding-atomic/.table';
import January1820261 from '../../../../../../.claude/.conversations/claude--understanding-atomic/1-january-18-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {January1820261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
