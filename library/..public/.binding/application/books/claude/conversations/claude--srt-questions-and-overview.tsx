import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--srt-questions-and-overview/.book';
import Cover from '../../../../../../.claude/.conversations/claude--srt-questions-and-overview/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--srt-questions-and-overview/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--srt-questions-and-overview/.table';
import November420251 from '../../../../../../.claude/.conversations/claude--srt-questions-and-overview/1-november-4-2025';
import November520252 from '../../../../../../.claude/.conversations/claude--srt-questions-and-overview/2-november-5-2025';
import November620253 from '../../../../../../.claude/.conversations/claude--srt-questions-and-overview/3-november-6-2025';
import November2120254 from '../../../../../../.claude/.conversations/claude--srt-questions-and-overview/4-november-21-2025';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {November420251()}
        {November520252()}
        {November620253()}
        {November2120254()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
