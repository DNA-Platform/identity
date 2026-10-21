import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--creating-array-of-objects-with-conditional-properties--fd65b7af/.book';
import Cover from '../../../../../../.claude/.conversations/claude--creating-array-of-objects-with-conditional-properties--fd65b7af/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--creating-array-of-objects-with-conditional-properties--fd65b7af/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--creating-array-of-objects-with-conditional-properties--fd65b7af/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--creating-array-of-objects-with-conditional-properties--fd65b7af/1-conversation';

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
