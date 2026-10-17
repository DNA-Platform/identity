import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/dat-premium-to-discount-shift-analysis/.book';
import Cover from '../../../../../../.claude/.conversations/dat-premium-to-discount-shift-analysis/.cover';
import Synopsis from '../../../../../../.claude/.conversations/dat-premium-to-discount-shift-analysis/.synopsis';
import Table from '../../../../../../.claude/.conversations/dat-premium-to-discount-shift-analysis/.table';
import February420261 from '../../../../../../.claude/.conversations/dat-premium-to-discount-shift-analysis/1-february-4-2026';
import February520262 from '../../../../../../.claude/.conversations/dat-premium-to-discount-shift-analysis/2-february-5-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {February420261()}
        {February520262()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
