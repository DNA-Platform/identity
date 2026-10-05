import { $ } from '@dna-platform/chemistry';
import { opened } from '../opened';
import $Book from '../../../../.librarian/.book';
import Cover from '../../../../.librarian/.cover';
import Synopsis from '../../../../.librarian/.synopsis';
import Table from '../../../../.librarian/.table';
import AFirstChapter1 from '../../../../.librarian/1-a-first-chapter';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {AFirstChapter1()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
