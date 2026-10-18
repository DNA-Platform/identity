import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--javascript-polymorphism-and-reflection-essay--b384fdc2/.book';
import Cover from '../../../../../../.claude/.conversations/claude--javascript-polymorphism-and-reflection-essay--b384fdc2/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--javascript-polymorphism-and-reflection-essay--b384fdc2/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--javascript-polymorphism-and-reflection-essay--b384fdc2/.table';
import November420251 from '../../../../../../.claude/.conversations/claude--javascript-polymorphism-and-reflection-essay--b384fdc2/1-november-4-2025';
import November520252 from '../../../../../../.claude/.conversations/claude--javascript-polymorphism-and-reflection-essay--b384fdc2/2-november-5-2025';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {November420251()}
        {November520252()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
