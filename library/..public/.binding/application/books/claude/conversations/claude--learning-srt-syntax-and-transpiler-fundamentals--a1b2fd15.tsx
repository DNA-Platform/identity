import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--learning-srt-syntax-and-transpiler-fundamentals--a1b2fd15/.book';
import Cover from '../../../../../../.claude/.conversations/claude--learning-srt-syntax-and-transpiler-fundamentals--a1b2fd15/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--learning-srt-syntax-and-transpiler-fundamentals--a1b2fd15/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--learning-srt-syntax-and-transpiler-fundamentals--a1b2fd15/.table';
import July2220261 from '../../../../../../.claude/.conversations/claude--learning-srt-syntax-and-transpiler-fundamentals--a1b2fd15/1-july-22-2026';
import July2320262 from '../../../../../../.claude/.conversations/claude--learning-srt-syntax-and-transpiler-fundamentals--a1b2fd15/2-july-23-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {July2220261()}
        {July2320262()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
