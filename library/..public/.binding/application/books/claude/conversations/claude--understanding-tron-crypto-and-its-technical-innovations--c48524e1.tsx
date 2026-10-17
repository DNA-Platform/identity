import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--understanding-tron-crypto-and-its-technical-innovations--c48524e1/.book';
import Cover from '../../../../../../.claude/.conversations/claude--understanding-tron-crypto-and-its-technical-innovations--c48524e1/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--understanding-tron-crypto-and-its-technical-innovations--c48524e1/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--understanding-tron-crypto-and-its-technical-innovations--c48524e1/.table';
import March920261 from '../../../../../../.claude/.conversations/claude--understanding-tron-crypto-and-its-technical-innovations--c48524e1/1-march-9-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {March920261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
