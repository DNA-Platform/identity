import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--online-identity-compromise-and-data-breach-risks--9f679ede/.book';
import Cover from '../../../../../../.claude/.conversations/claude--online-identity-compromise-and-data-breach-risks--9f679ede/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--online-identity-compromise-and-data-breach-risks--9f679ede/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--online-identity-compromise-and-data-breach-risks--9f679ede/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--online-identity-compromise-and-data-breach-risks--9f679ede/1-conversation';

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
