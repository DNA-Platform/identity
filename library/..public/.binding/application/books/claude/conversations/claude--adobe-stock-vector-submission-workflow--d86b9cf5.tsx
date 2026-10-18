import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--adobe-stock-vector-submission-workflow--d86b9cf5/.book';
import Cover from '../../../../../../.claude/.conversations/claude--adobe-stock-vector-submission-workflow--d86b9cf5/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--adobe-stock-vector-submission-workflow--d86b9cf5/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--adobe-stock-vector-submission-workflow--d86b9cf5/.table';
import March820261 from '../../../../../../.claude/.conversations/claude--adobe-stock-vector-submission-workflow--d86b9cf5/1-march-8-2026';
import March2320262 from '../../../../../../.claude/.conversations/claude--adobe-stock-vector-submission-workflow--d86b9cf5/2-march-23-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {March820261()}
        {March2320262()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
