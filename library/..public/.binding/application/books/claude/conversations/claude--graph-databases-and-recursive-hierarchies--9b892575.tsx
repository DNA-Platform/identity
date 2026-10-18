import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--graph-databases-and-recursive-hierarchies--9b892575/.book';
import Cover from '../../../../../../.claude/.conversations/claude--graph-databases-and-recursive-hierarchies--9b892575/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--graph-databases-and-recursive-hierarchies--9b892575/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--graph-databases-and-recursive-hierarchies--9b892575/.table';
import June1720261 from '../../../../../../.claude/.conversations/claude--graph-databases-and-recursive-hierarchies--9b892575/1-june-17-2026';

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
