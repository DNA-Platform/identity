import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--penelopes-symptoms-and-treatment--db0b30ef/.book';
import Cover from '../../../../../../.claude/.conversations/claude--penelopes-symptoms-and-treatment--db0b30ef/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--penelopes-symptoms-and-treatment--db0b30ef/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--penelopes-symptoms-and-treatment--db0b30ef/.table';
import October1020261 from '../../../../../../.claude/.conversations/claude--penelopes-symptoms-and-treatment--db0b30ef/1-october-10-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {October1020261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
