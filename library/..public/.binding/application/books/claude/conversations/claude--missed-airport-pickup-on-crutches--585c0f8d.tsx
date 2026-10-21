import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--missed-airport-pickup-on-crutches--585c0f8d/.book';
import Cover from '../../../../../../.claude/.conversations/claude--missed-airport-pickup-on-crutches--585c0f8d/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--missed-airport-pickup-on-crutches--585c0f8d/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--missed-airport-pickup-on-crutches--585c0f8d/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--missed-airport-pickup-on-crutches--585c0f8d/1-conversation';

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
