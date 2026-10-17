import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--dat-premium-to-discount-shift-analysis--5aa0012e/.book';
import Cover from '../../../../../../.claude/.conversations/claude--dat-premium-to-discount-shift-analysis--5aa0012e/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--dat-premium-to-discount-shift-analysis--5aa0012e/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--dat-premium-to-discount-shift-analysis--5aa0012e/.table';
import February420261 from '../../../../../../.claude/.conversations/claude--dat-premium-to-discount-shift-analysis--5aa0012e/1-february-4-2026';
import February520262 from '../../../../../../.claude/.conversations/claude--dat-premium-to-discount-shift-analysis--5aa0012e/2-february-5-2026';

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
