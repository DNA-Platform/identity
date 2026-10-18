import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--untitled-24-june-2025--ae55af4b/.book';
import Cover from '../../../../../../.claude/.conversations/claude--untitled-24-june-2025--ae55af4b/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--untitled-24-june-2025--ae55af4b/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--untitled-24-june-2025--ae55af4b/.table';
import June2420251 from '../../../../../../.claude/.conversations/claude--untitled-24-june-2025--ae55af4b/1-june-24-2025';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {June2420251()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
