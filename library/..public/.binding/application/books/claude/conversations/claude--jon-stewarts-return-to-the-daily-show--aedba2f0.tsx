import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--jon-stewarts-return-to-the-daily-show--aedba2f0/.book';
import Cover from '../../../../../../.claude/.conversations/claude--jon-stewarts-return-to-the-daily-show--aedba2f0/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--jon-stewarts-return-to-the-daily-show--aedba2f0/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--jon-stewarts-return-to-the-daily-show--aedba2f0/.table';
import May220261 from '../../../../../../.claude/.conversations/claude--jon-stewarts-return-to-the-daily-show--aedba2f0/1-may-2-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {May220261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
