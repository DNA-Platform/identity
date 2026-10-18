import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--interdisciplinary-exploration-of-consciousness--6833ae75/.book';
import Cover from '../../../../../../.claude/.conversations/claude--interdisciplinary-exploration-of-consciousness--6833ae75/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--interdisciplinary-exploration-of-consciousness--6833ae75/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--interdisciplinary-exploration-of-consciousness--6833ae75/.table';
import November1120241 from '../../../../../../.claude/.conversations/claude--interdisciplinary-exploration-of-consciousness--6833ae75/1-november-11-2024';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {November1120241()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
