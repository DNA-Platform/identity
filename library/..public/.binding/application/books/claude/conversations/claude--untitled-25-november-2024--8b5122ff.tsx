import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--untitled-25-november-2024--8b5122ff/.book';
import Cover from '../../../../../../.claude/.conversations/claude--untitled-25-november-2024--8b5122ff/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--untitled-25-november-2024--8b5122ff/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--untitled-25-november-2024--8b5122ff/.table';
import November2520241 from '../../../../../../.claude/.conversations/claude--untitled-25-november-2024--8b5122ff/1-november-25-2024';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {November2520241()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
