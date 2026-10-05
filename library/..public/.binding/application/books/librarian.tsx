import { $ } from '@dna-platform/chemistry';
import { opened } from '../opened';
import $Book from '../../../../.librarian/.book';
import Cover from '../../../../.librarian/.cover';
import Synopsis from '../../../../.librarian/.synopsis';
import Table from '../../../../.librarian/.table';
import StartingOver1 from '../../../../.librarian/1-starting-over';
import ChoosingADesign2 from '../../../../.librarian/2-choosing-a-design';
import Closure3 from '../../../../.librarian/3-closure';
import GhostWriting4 from '../../../../.librarian/4-ghost-writing';
import TheSheet90 from '../../../../.librarian/90-the-sheet';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {StartingOver1()}
        {ChoosingADesign2()}
        {Closure3()}
        {GhostWriting4()}
        {TheSheet90()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
