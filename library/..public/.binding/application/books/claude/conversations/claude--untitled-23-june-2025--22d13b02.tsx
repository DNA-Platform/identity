import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--untitled-23-june-2025--22d13b02/.book';
import Cover from '../../../../../../.claude/.conversations/claude--untitled-23-june-2025--22d13b02/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--untitled-23-june-2025--22d13b02/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--untitled-23-june-2025--22d13b02/.table';
import June2320251 from '../../../../../../.claude/.conversations/claude--untitled-23-june-2025--22d13b02/1-june-23-2025';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {June2320251()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
