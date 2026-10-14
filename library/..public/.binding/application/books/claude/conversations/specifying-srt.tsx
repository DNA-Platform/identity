import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/specifying-srt/.book';
import Cover from '../../../../../../.claude/.conversations/specifying-srt/.cover';
import Synopsis from '../../../../../../.claude/.conversations/specifying-srt/.synopsis';
import Table from '../../../../../../.claude/.conversations/specifying-srt/.table';
import June1820261 from '../../../../../../.claude/.conversations/specifying-srt/1-june-18-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {June1820261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
