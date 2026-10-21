import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--the-price-of-gram-is-getting-h--79d439db/.book';
import Cover from '../../../../../../.claude/.conversations/claude--the-price-of-gram-is-getting-h--79d439db/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--the-price-of-gram-is-getting-h--79d439db/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--the-price-of-gram-is-getting-h--79d439db/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--the-price-of-gram-is-getting-h--79d439db/1-conversation';

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
