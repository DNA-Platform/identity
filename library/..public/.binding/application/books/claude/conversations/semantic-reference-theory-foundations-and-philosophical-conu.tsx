import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/semantic-reference-theory-foundations-and-philosophical-conu/.book';
import Cover from '../../../../../../.claude/.conversations/semantic-reference-theory-foundations-and-philosophical-conu/.cover';
import Synopsis from '../../../../../../.claude/.conversations/semantic-reference-theory-foundations-and-philosophical-conu/.synopsis';
import Table from '../../../../../../.claude/.conversations/semantic-reference-theory-foundations-and-philosophical-conu/.table';
import June2620261 from '../../../../../../.claude/.conversations/semantic-reference-theory-foundations-and-philosophical-conu/1-june-26-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {June2620261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
