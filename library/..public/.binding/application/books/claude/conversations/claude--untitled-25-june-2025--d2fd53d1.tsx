import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--untitled-25-june-2025--d2fd53d1/.book';
import Cover from '../../../../../../.claude/.conversations/claude--untitled-25-june-2025--d2fd53d1/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--untitled-25-june-2025--d2fd53d1/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--untitled-25-june-2025--d2fd53d1/.table';
import June2520251 from '../../../../../../.claude/.conversations/claude--untitled-25-june-2025--d2fd53d1/1-june-25-2025';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {June2520251()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
