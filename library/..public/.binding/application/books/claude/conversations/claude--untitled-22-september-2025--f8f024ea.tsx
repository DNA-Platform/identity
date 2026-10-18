import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--untitled-22-september-2025--f8f024ea/.book';
import Cover from '../../../../../../.claude/.conversations/claude--untitled-22-september-2025--f8f024ea/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--untitled-22-september-2025--f8f024ea/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--untitled-22-september-2025--f8f024ea/.table';
import September2220251 from '../../../../../../.claude/.conversations/claude--untitled-22-september-2025--f8f024ea/1-september-22-2025';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {September2220251()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
