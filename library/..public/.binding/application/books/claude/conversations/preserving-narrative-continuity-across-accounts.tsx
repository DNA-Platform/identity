import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/preserving-narrative-continuity-across-accounts/.book';
import Cover from '../../../../../../.claude/.conversations/preserving-narrative-continuity-across-accounts/.cover';
import Synopsis from '../../../../../../.claude/.conversations/preserving-narrative-continuity-across-accounts/.synopsis';
import Table from '../../../../../../.claude/.conversations/preserving-narrative-continuity-across-accounts/.table';
import May2420261 from '../../../../../../.claude/.conversations/preserving-narrative-continuity-across-accounts/1-may-24-2026';
import May2520262 from '../../../../../../.claude/.conversations/preserving-narrative-continuity-across-accounts/2-may-25-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {May2420261()}
        {May2520262()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
