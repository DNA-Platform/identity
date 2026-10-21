import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--trumps-impact-on-ton-and-telegrams-resilience--f3e6588f/.book';
import Cover from '../../../../../../.claude/.conversations/claude--trumps-impact-on-ton-and-telegrams-resilience--f3e6588f/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--trumps-impact-on-ton-and-telegrams-resilience--f3e6588f/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--trumps-impact-on-ton-and-telegrams-resilience--f3e6588f/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--trumps-impact-on-ton-and-telegrams-resilience--f3e6588f/1-conversation';

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
