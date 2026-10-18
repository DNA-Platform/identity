import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--creating-array-of-objects-with-conditional-properties--fd65b7af/.book';
import Cover from '../../../../../../.claude/.conversations/claude--creating-array-of-objects-with-conditional-properties--fd65b7af/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--creating-array-of-objects-with-conditional-properties--fd65b7af/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--creating-array-of-objects-with-conditional-properties--fd65b7af/.table';
import November520251 from '../../../../../../.claude/.conversations/claude--creating-array-of-objects-with-conditional-properties--fd65b7af/1-november-5-2025';
import November620252 from '../../../../../../.claude/.conversations/claude--creating-array-of-objects-with-conditional-properties--fd65b7af/2-november-6-2025';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {November520251()}
        {November620252()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
