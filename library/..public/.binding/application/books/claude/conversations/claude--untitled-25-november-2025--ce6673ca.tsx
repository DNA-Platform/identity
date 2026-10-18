import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--untitled-25-november-2025--ce6673ca/.book';
import Cover from '../../../../../../.claude/.conversations/claude--untitled-25-november-2025--ce6673ca/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--untitled-25-november-2025--ce6673ca/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--untitled-25-november-2025--ce6673ca/.table';
import November2520251 from '../../../../../../.claude/.conversations/claude--untitled-25-november-2025--ce6673ca/1-november-25-2025';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {November2520251()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
