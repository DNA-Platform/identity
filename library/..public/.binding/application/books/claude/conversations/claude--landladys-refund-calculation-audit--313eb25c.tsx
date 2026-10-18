import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--landladys-refund-calculation-audit--313eb25c/.book';
import Cover from '../../../../../../.claude/.conversations/claude--landladys-refund-calculation-audit--313eb25c/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--landladys-refund-calculation-audit--313eb25c/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--landladys-refund-calculation-audit--313eb25c/.table';
import April2720261 from '../../../../../../.claude/.conversations/claude--landladys-refund-calculation-audit--313eb25c/1-april-27-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {April2720261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
