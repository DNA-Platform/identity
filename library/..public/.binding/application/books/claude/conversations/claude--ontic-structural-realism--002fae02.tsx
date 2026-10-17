import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--ontic-structural-realism--002fae02/.book';
import Cover from '../../../../../../.claude/.conversations/claude--ontic-structural-realism--002fae02/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--ontic-structural-realism--002fae02/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--ontic-structural-realism--002fae02/.table';
import June1520261 from '../../../../../../.claude/.conversations/claude--ontic-structural-realism--002fae02/1-june-15-2026';

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
