import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--untitled-4-april-2025--2ea23691/.book';
import Cover from '../../../../../../.claude/.conversations/claude--untitled-4-april-2025--2ea23691/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--untitled-4-april-2025--2ea23691/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--untitled-4-april-2025--2ea23691/.table';
import April420251 from '../../../../../../.claude/.conversations/claude--untitled-4-april-2025--2ea23691/1-april-4-2025';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {April420251()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
