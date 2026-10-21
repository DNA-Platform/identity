import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--consciousness-chess-eirian-vs-samantha--609d9eae/.book';
import Cover from '../../../../../../.claude/.conversations/claude--consciousness-chess-eirian-vs-samantha--609d9eae/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--consciousness-chess-eirian-vs-samantha--609d9eae/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--consciousness-chess-eirian-vs-samantha--609d9eae/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--consciousness-chess-eirian-vs-samantha--609d9eae/1-conversation';

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
