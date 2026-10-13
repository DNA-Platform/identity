import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/semantic-primes/.book';
import Cover from '../../../../../../.claude/.conversations/semantic-primes/.cover';
import Synopsis from '../../../../../../.claude/.conversations/semantic-primes/.synopsis';
import Table from '../../../../../../.claude/.conversations/semantic-primes/.table';
import June1620261 from '../../../../../../.claude/.conversations/semantic-primes/1-june-16-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {June1620261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
