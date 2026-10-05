import { $ } from '@dna-platform/chemistry';
import { opened } from '../opened';
import $Book from '../../../../..reference/.book';
import Cover from '../../../../..reference/.cover';
import Synopsis from '../../../../..reference/.synopsis';
import Table from '../../../../..reference/.table';
import TheShelves1 from '../../../../..reference/1-the-shelves';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {TheShelves1()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
