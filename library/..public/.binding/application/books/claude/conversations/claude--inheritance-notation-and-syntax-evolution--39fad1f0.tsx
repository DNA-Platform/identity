import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--inheritance-notation-and-syntax-evolution--39fad1f0/.book';
import Cover from '../../../../../../.claude/.conversations/claude--inheritance-notation-and-syntax-evolution--39fad1f0/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--inheritance-notation-and-syntax-evolution--39fad1f0/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--inheritance-notation-and-syntax-evolution--39fad1f0/.table';
import May2920261 from '../../../../../../.claude/.conversations/claude--inheritance-notation-and-syntax-evolution--39fad1f0/1-may-29-2026';
import May3020262 from '../../../../../../.claude/.conversations/claude--inheritance-notation-and-syntax-evolution--39fad1f0/2-may-30-2026';
import May3120263 from '../../../../../../.claude/.conversations/claude--inheritance-notation-and-syntax-evolution--39fad1f0/3-may-31-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {May2920261()}
        {May3020262()}
        {May3120263()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
