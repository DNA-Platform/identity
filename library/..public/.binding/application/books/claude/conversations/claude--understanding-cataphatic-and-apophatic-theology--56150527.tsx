import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--understanding-cataphatic-and-apophatic-theology--56150527/.book';
import Cover from '../../../../../../.claude/.conversations/claude--understanding-cataphatic-and-apophatic-theology--56150527/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--understanding-cataphatic-and-apophatic-theology--56150527/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--understanding-cataphatic-and-apophatic-theology--56150527/.table';
import November2420241 from '../../../../../../.claude/.conversations/claude--understanding-cataphatic-and-apophatic-theology--56150527/1-november-24-2024';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {November2420241()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
