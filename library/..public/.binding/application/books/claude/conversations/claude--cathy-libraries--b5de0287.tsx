import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--cathy-libraries--b5de0287/.book';
import Cover from '../../../../../../.claude/.conversations/claude--cathy-libraries--b5de0287/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--cathy-libraries--b5de0287/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--cathy-libraries--b5de0287/.table';
import June2920261 from '../../../../../../.claude/.conversations/claude--cathy-libraries--b5de0287/1-june-29-2026';
import September1720262 from '../../../../../../.claude/.conversations/claude--cathy-libraries--b5de0287/2-september-17-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {June2920261()}
        {September1720262()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
