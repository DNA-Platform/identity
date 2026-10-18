import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--agentic-ai-coding-landscape-and-vector-databases--ad424736/.book';
import Cover from '../../../../../../.claude/.conversations/claude--agentic-ai-coding-landscape-and-vector-databases--ad424736/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--agentic-ai-coding-landscape-and-vector-databases--ad424736/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--agentic-ai-coding-landscape-and-vector-databases--ad424736/.table';
import February2020261 from '../../../../../../.claude/.conversations/claude--agentic-ai-coding-landscape-and-vector-databases--ad424736/1-february-20-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {February2020261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
