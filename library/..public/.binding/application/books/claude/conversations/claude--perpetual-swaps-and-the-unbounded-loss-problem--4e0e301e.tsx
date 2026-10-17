import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--perpetual-swaps-and-the-unbounded-loss-problem--4e0e301e/.book';
import Cover from '../../../../../../.claude/.conversations/claude--perpetual-swaps-and-the-unbounded-loss-problem--4e0e301e/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--perpetual-swaps-and-the-unbounded-loss-problem--4e0e301e/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--perpetual-swaps-and-the-unbounded-loss-problem--4e0e301e/.table';
import April620261 from '../../../../../../.claude/.conversations/claude--perpetual-swaps-and-the-unbounded-loss-problem--4e0e301e/1-april-6-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {April620261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
