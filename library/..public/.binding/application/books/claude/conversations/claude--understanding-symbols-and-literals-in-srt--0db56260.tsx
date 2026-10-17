import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--understanding-symbols-and-literals-in-srt--0db56260/.book';
import Cover from '../../../../../../.claude/.conversations/claude--understanding-symbols-and-literals-in-srt--0db56260/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--understanding-symbols-and-literals-in-srt--0db56260/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--understanding-symbols-and-literals-in-srt--0db56260/.table';
import November320251 from '../../../../../../.claude/.conversations/claude--understanding-symbols-and-literals-in-srt--0db56260/1-november-3-2025';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {November320251()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
