import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--converting-xmr-to-mon-exchange-calculation--2d534963/.book';
import Cover from '../../../../../../.claude/.conversations/claude--converting-xmr-to-mon-exchange-calculation--2d534963/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--converting-xmr-to-mon-exchange-calculation--2d534963/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--converting-xmr-to-mon-exchange-calculation--2d534963/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--converting-xmr-to-mon-exchange-calculation--2d534963/1-conversation';

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
