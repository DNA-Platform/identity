import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--preserving-narrative-continuity-across-accounts--febe219c/.book';
import Cover from '../../../../../../.claude/.conversations/claude--preserving-narrative-continuity-across-accounts--febe219c/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--preserving-narrative-continuity-across-accounts--febe219c/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--preserving-narrative-continuity-across-accounts--febe219c/.table';
import May2420261 from '../../../../../../.claude/.conversations/claude--preserving-narrative-continuity-across-accounts--febe219c/1-may-24-2026';
import May2520262 from '../../../../../../.claude/.conversations/claude--preserving-narrative-continuity-across-accounts--febe219c/2-may-25-2026';

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
