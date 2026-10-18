import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--ontic-structural-realism--3b54b751/.book';
import Cover from '../../../../../../.claude/.conversations/claude--ontic-structural-realism--3b54b751/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--ontic-structural-realism--3b54b751/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--ontic-structural-realism--3b54b751/.table';
import June1520261 from '../../../../../../.claude/.conversations/claude--ontic-structural-realism--3b54b751/1-june-15-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {June1520261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
