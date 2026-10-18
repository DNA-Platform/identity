import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--untitled-2-april-2025--8787d94a/.book';
import Cover from '../../../../../../.claude/.conversations/claude--untitled-2-april-2025--8787d94a/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--untitled-2-april-2025--8787d94a/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--untitled-2-april-2025--8787d94a/.table';
import April220251 from '../../../../../../.claude/.conversations/claude--untitled-2-april-2025--8787d94a/1-april-2-2025';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {April220251()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
