import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--structured-english-grammar-learning-curriculum--72ed312f/.book';
import Cover from '../../../../../../.claude/.conversations/claude--structured-english-grammar-learning-curriculum--72ed312f/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--structured-english-grammar-learning-curriculum--72ed312f/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--structured-english-grammar-learning-curriculum--72ed312f/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--structured-english-grammar-learning-curriculum--72ed312f/1-conversation';

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
