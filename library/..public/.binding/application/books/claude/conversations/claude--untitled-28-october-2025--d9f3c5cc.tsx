import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--untitled-28-october-2025--d9f3c5cc/.book';
import Cover from '../../../../../../.claude/.conversations/claude--untitled-28-october-2025--d9f3c5cc/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--untitled-28-october-2025--d9f3c5cc/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--untitled-28-october-2025--d9f3c5cc/.table';
import October2820251 from '../../../../../../.claude/.conversations/claude--untitled-28-october-2025--d9f3c5cc/1-october-28-2025';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {October2820251()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
