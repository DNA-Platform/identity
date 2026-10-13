import { $ } from '@dna-platform/chemistry';
import { opened } from '../../opened';
import $Book from '../../../../../.claude/.conversations/.book';
import Cover from '../../../../../.claude/.conversations/.cover';
import Synopsis from '../../../../../.claude/.conversations/.synopsis';
import Table from '../../../../../.claude/.conversations/.table';
import SemanticPrimes1 from '../../../../../.claude/.conversations/1-semantic-primes';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {SemanticPrimes1()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
