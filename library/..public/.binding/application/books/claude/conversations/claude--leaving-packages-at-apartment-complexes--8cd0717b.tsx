import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--leaving-packages-at-apartment-complexes--8cd0717b/.book';
import Cover from '../../../../../../.claude/.conversations/claude--leaving-packages-at-apartment-complexes--8cd0717b/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--leaving-packages-at-apartment-complexes--8cd0717b/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--leaving-packages-at-apartment-complexes--8cd0717b/.table';
import October2520241 from '../../../../../../.claude/.conversations/claude--leaving-packages-at-apartment-complexes--8cd0717b/1-october-25-2024';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {October2520241()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
