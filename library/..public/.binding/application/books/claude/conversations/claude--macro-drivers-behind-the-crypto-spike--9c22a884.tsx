import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--macro-drivers-behind-the-crypto-spike--9c22a884/.book';
import Cover from '../../../../../../.claude/.conversations/claude--macro-drivers-behind-the-crypto-spike--9c22a884/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--macro-drivers-behind-the-crypto-spike--9c22a884/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--macro-drivers-behind-the-crypto-spike--9c22a884/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--macro-drivers-behind-the-crypto-spike--9c22a884/1-conversation';

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
