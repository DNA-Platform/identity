import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--srt-as-a-github-project--1c387d40/.book';
import Cover from '../../../../../../.claude/.conversations/claude--srt-as-a-github-project--1c387d40/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--srt-as-a-github-project--1c387d40/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--srt-as-a-github-project--1c387d40/.table';
import June320261 from '../../../../../../.claude/.conversations/claude--srt-as-a-github-project--1c387d40/1-june-3-2026';
import June420262 from '../../../../../../.claude/.conversations/claude--srt-as-a-github-project--1c387d40/2-june-4-2026';
import June520263 from '../../../../../../.claude/.conversations/claude--srt-as-a-github-project--1c387d40/3-june-5-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {June320261()}
        {June420262()}
        {June520263()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
