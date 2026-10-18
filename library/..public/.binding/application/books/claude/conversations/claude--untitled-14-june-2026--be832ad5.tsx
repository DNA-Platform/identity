import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--untitled-14-june-2026--be832ad5/.book';
import Cover from '../../../../../../.claude/.conversations/claude--untitled-14-june-2026--be832ad5/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--untitled-14-june-2026--be832ad5/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--untitled-14-june-2026--be832ad5/.table';
import June1420261 from '../../../../../../.claude/.conversations/claude--untitled-14-june-2026--be832ad5/1-june-14-2026';
import June1720262 from '../../../../../../.claude/.conversations/claude--untitled-14-june-2026--be832ad5/2-june-17-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {June1420261()}
        {June1720262()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
