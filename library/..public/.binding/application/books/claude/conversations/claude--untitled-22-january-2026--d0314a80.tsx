import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--untitled-22-january-2026--d0314a80/.book';
import Cover from '../../../../../../.claude/.conversations/claude--untitled-22-january-2026--d0314a80/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--untitled-22-january-2026--d0314a80/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--untitled-22-january-2026--d0314a80/.table';
import January2220261 from '../../../../../../.claude/.conversations/claude--untitled-22-january-2026--d0314a80/1-january-22-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {January2220261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
