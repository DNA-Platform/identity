import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--good-morning--3e5346a6/.book';
import Cover from '../../../../../../.claude/.conversations/claude--good-morning--3e5346a6/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--good-morning--3e5346a6/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--good-morning--3e5346a6/.table';
import June420261 from '../../../../../../.claude/.conversations/claude--good-morning--3e5346a6/1-june-4-2026';
import September1820262 from '../../../../../../.claude/.conversations/claude--good-morning--3e5346a6/2-september-18-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {June420261()}
        {September1820262()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
