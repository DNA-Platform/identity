import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--crypto-market-spike-triggers-and-patterns--04fb2d5e/.book';
import Cover from '../../../../../../.claude/.conversations/claude--crypto-market-spike-triggers-and-patterns--04fb2d5e/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--crypto-market-spike-triggers-and-patterns--04fb2d5e/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--crypto-market-spike-triggers-and-patterns--04fb2d5e/.table';
import January2720261 from '../../../../../../.claude/.conversations/claude--crypto-market-spike-triggers-and-patterns--04fb2d5e/1-january-27-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {January2720261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
