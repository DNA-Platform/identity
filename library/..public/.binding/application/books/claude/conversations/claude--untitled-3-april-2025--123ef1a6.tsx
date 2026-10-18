import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--untitled-3-april-2025--123ef1a6/.book';
import Cover from '../../../../../../.claude/.conversations/claude--untitled-3-april-2025--123ef1a6/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--untitled-3-april-2025--123ef1a6/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--untitled-3-april-2025--123ef1a6/.table';
import April320251 from '../../../../../../.claude/.conversations/claude--untitled-3-april-2025--123ef1a6/1-april-3-2025';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {April320251()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
