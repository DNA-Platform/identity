import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--untitled-15-november-2024--94f401ff/.book';
import Cover from '../../../../../../.claude/.conversations/claude--untitled-15-november-2024--94f401ff/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--untitled-15-november-2024--94f401ff/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--untitled-15-november-2024--94f401ff/.table';
import November1520241 from '../../../../../../.claude/.conversations/claude--untitled-15-november-2024--94f401ff/1-november-15-2024';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {November1520241()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
