import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/understanding-tron-crypto-and-its-technical-innovations/.book';
import Cover from '../../../../../../.claude/.conversations/understanding-tron-crypto-and-its-technical-innovations/.cover';
import Synopsis from '../../../../../../.claude/.conversations/understanding-tron-crypto-and-its-technical-innovations/.synopsis';
import Table from '../../../../../../.claude/.conversations/understanding-tron-crypto-and-its-technical-innovations/.table';
import March920261 from '../../../../../../.claude/.conversations/understanding-tron-crypto-and-its-technical-innovations/1-march-9-2026';

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
