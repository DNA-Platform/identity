import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--in-depth-analysis-of-chemical-reactive-programming-framework--4ef91b65/.book';
import Cover from '../../../../../../.claude/.conversations/claude--in-depth-analysis-of-chemical-reactive-programming-framework--4ef91b65/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--in-depth-analysis-of-chemical-reactive-programming-framework--4ef91b65/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--in-depth-analysis-of-chemical-reactive-programming-framework--4ef91b65/.table';
import April720251 from '../../../../../../.claude/.conversations/claude--in-depth-analysis-of-chemical-reactive-programming-framework--4ef91b65/1-april-7-2025';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {April720251()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
