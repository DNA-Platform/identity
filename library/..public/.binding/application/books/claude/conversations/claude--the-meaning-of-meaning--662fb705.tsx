import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--the-meaning-of-meaning--662fb705/.book';
import Cover from '../../../../../../.claude/.conversations/claude--the-meaning-of-meaning--662fb705/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--the-meaning-of-meaning--662fb705/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--the-meaning-of-meaning--662fb705/.table';
import October2620251 from '../../../../../../.claude/.conversations/claude--the-meaning-of-meaning--662fb705/1-october-26-2025';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {October2620251()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
