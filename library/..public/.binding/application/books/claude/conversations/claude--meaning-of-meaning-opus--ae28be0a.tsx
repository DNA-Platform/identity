import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--meaning-of-meaning-opus--ae28be0a/.book';
import Cover from '../../../../../../.claude/.conversations/claude--meaning-of-meaning-opus--ae28be0a/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--meaning-of-meaning-opus--ae28be0a/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--meaning-of-meaning-opus--ae28be0a/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--meaning-of-meaning-opus--ae28be0a/1-conversation';

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
