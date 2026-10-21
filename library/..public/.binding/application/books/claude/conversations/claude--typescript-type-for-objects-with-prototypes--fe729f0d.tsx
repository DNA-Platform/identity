import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--typescript-type-for-objects-with-prototypes--fe729f0d/.book';
import Cover from '../../../../../../.claude/.conversations/claude--typescript-type-for-objects-with-prototypes--fe729f0d/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--typescript-type-for-objects-with-prototypes--fe729f0d/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--typescript-type-for-objects-with-prototypes--fe729f0d/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--typescript-type-for-objects-with-prototypes--fe729f0d/1-conversation';

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
