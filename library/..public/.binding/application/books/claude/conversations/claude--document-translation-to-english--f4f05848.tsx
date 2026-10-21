import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--document-translation-to-english--f4f05848/.book';
import Cover from '../../../../../../.claude/.conversations/claude--document-translation-to-english--f4f05848/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--document-translation-to-english--f4f05848/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--document-translation-to-english--f4f05848/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--document-translation-to-english--f4f05848/1-conversation';

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
