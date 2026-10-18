import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--pointers-in-c-plus-plus-x-vs-x--6129004d/.book';
import Cover from '../../../../../../.claude/.conversations/claude--pointers-in-c-plus-plus-x-vs-x--6129004d/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--pointers-in-c-plus-plus-x-vs-x--6129004d/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--pointers-in-c-plus-plus-x-vs-x--6129004d/.table';
import November2820241 from '../../../../../../.claude/.conversations/claude--pointers-in-c-plus-plus-x-vs-x--6129004d/1-november-28-2024';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {November2820241()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
