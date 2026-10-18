import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--rust-ownership--6ccb1849/.book';
import Cover from '../../../../../../.claude/.conversations/claude--rust-ownership--6ccb1849/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--rust-ownership--6ccb1849/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--rust-ownership--6ccb1849/.table';
import June2120261 from '../../../../../../.claude/.conversations/claude--rust-ownership--6ccb1849/1-june-21-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {June2120261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
