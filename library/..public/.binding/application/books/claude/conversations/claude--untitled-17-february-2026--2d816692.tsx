import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--untitled-17-february-2026--2d816692/.book';
import Cover from '../../../../../../.claude/.conversations/claude--untitled-17-february-2026--2d816692/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--untitled-17-february-2026--2d816692/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--untitled-17-february-2026--2d816692/.table';
import February1720261 from '../../../../../../.claude/.conversations/claude--untitled-17-february-2026--2d816692/1-february-17-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {February1720261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
