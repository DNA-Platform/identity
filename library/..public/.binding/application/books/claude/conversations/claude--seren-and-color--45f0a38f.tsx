import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--seren-and-color--45f0a38f/.book';
import Cover from '../../../../../../.claude/.conversations/claude--seren-and-color--45f0a38f/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--seren-and-color--45f0a38f/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--seren-and-color--45f0a38f/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--seren-and-color--45f0a38f/1-conversation';
import TransformedGridV1o1 from '../../../../../../.claude/.conversations/claude--seren-and-color--45f0a38f/o1-transformed-grid-v1';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {Conversation1()}
        {TransformedGridV1o1()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
