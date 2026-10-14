import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/srt-as-a-github-project/.book';
import Cover from '../../../../../../.claude/.conversations/srt-as-a-github-project/.cover';
import Synopsis from '../../../../../../.claude/.conversations/srt-as-a-github-project/.synopsis';
import Table from '../../../../../../.claude/.conversations/srt-as-a-github-project/.table';
import June320261 from '../../../../../../.claude/.conversations/srt-as-a-github-project/1-june-3-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {June320261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
