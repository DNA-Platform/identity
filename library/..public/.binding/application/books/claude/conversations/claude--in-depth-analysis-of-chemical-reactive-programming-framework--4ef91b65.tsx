import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--in-depth-analysis-of-chemical-reactive-programming-framework--4ef91b65/.book';
import Cover from '../../../../../../.claude/.conversations/claude--in-depth-analysis-of-chemical-reactive-programming-framework--4ef91b65/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--in-depth-analysis-of-chemical-reactive-programming-framework--4ef91b65/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--in-depth-analysis-of-chemical-reactive-programming-framework--4ef91b65/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--in-depth-analysis-of-chemical-reactive-programming-framework--4ef91b65/1-conversation';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {Conversation1()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
