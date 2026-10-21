import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--category-theory-and-type-theory-foundations--672c6bed/.book';
import Cover from '../../../../../../.claude/.conversations/claude--category-theory-and-type-theory-foundations--672c6bed/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--category-theory-and-type-theory-foundations--672c6bed/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--category-theory-and-type-theory-foundations--672c6bed/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--category-theory-and-type-theory-foundations--672c6bed/1-conversation';

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
