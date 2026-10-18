import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--untitled-15-december-2024--523e3a6d/.book';
import Cover from '../../../../../../.claude/.conversations/claude--untitled-15-december-2024--523e3a6d/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--untitled-15-december-2024--523e3a6d/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--untitled-15-december-2024--523e3a6d/.table';
import December1520241 from '../../../../../../.claude/.conversations/claude--untitled-15-december-2024--523e3a6d/1-december-15-2024';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {December1520241()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
