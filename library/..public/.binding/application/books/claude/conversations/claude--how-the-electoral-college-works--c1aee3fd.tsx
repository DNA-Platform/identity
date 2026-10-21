import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--how-the-electoral-college-works--c1aee3fd/.book';
import Cover from '../../../../../../.claude/.conversations/claude--how-the-electoral-college-works--c1aee3fd/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--how-the-electoral-college-works--c1aee3fd/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--how-the-electoral-college-works--c1aee3fd/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--how-the-electoral-college-works--c1aee3fd/1-conversation';

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
