import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--ana-grid-i--8906171b/.book';
import Cover from '../../../../../../.claude/.conversations/claude--ana-grid-i--8906171b/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--ana-grid-i--8906171b/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--ana-grid-i--8906171b/.table';
import March1620261 from '../../../../../../.claude/.conversations/claude--ana-grid-i--8906171b/1-march-16-2026';
import March1720262 from '../../../../../../.claude/.conversations/claude--ana-grid-i--8906171b/2-march-17-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {March1620261()}
        {March1720262()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
