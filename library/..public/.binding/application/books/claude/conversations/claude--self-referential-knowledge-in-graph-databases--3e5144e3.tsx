import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--self-referential-knowledge-in-graph-databases--3e5144e3/.book';
import Cover from '../../../../../../.claude/.conversations/claude--self-referential-knowledge-in-graph-databases--3e5144e3/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--self-referential-knowledge-in-graph-databases--3e5144e3/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--self-referential-knowledge-in-graph-databases--3e5144e3/.table';
import June1720261 from '../../../../../../.claude/.conversations/claude--self-referential-knowledge-in-graph-databases--3e5144e3/1-june-17-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {June1720261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
