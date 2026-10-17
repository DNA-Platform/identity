import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--ontic-structural-realism/.book';
import Cover from '../../../../../../.claude/.conversations/claude--ontic-structural-realism/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--ontic-structural-realism/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--ontic-structural-realism/.table';
import June1520261 from '../../../../../../.claude/.conversations/claude--ontic-structural-realism/1-june-15-2026';

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
