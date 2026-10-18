import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--untitled-23-june-2026--0d8830ea/.book';
import Cover from '../../../../../../.claude/.conversations/claude--untitled-23-june-2026--0d8830ea/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--untitled-23-june-2026--0d8830ea/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--untitled-23-june-2026--0d8830ea/.table';
import June2320261 from '../../../../../../.claude/.conversations/claude--untitled-23-june-2026--0d8830ea/1-june-23-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {June2320261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
