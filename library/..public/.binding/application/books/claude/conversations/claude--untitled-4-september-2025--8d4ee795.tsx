import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--untitled-4-september-2025--8d4ee795/.book';
import Cover from '../../../../../../.claude/.conversations/claude--untitled-4-september-2025--8d4ee795/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--untitled-4-september-2025--8d4ee795/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--untitled-4-september-2025--8d4ee795/.table';
import September420251 from '../../../../../../.claude/.conversations/claude--untitled-4-september-2025--8d4ee795/1-september-4-2025';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {September420251()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
