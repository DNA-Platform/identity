import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--neural-encoding-during-hallucinations--1f62d14e/.book';
import Cover from '../../../../../../.claude/.conversations/claude--neural-encoding-during-hallucinations--1f62d14e/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--neural-encoding-during-hallucinations--1f62d14e/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--neural-encoding-during-hallucinations--1f62d14e/.table';
import September1620261 from '../../../../../../.claude/.conversations/claude--neural-encoding-during-hallucinations--1f62d14e/1-september-16-2026';
import September2320262 from '../../../../../../.claude/.conversations/claude--neural-encoding-during-hallucinations--1f62d14e/2-september-23-2026';
import September2420263 from '../../../../../../.claude/.conversations/claude--neural-encoding-during-hallucinations--1f62d14e/3-september-24-2026';
import September2520264 from '../../../../../../.claude/.conversations/claude--neural-encoding-during-hallucinations--1f62d14e/4-september-25-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {September1620261()}
        {September2320262()}
        {September2420263()}
        {September2520264()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
