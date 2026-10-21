import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--camel-crush-cigarette-availability-in-georgia--bca6a3ce/.book';
import Cover from '../../../../../../.claude/.conversations/claude--camel-crush-cigarette-availability-in-georgia--bca6a3ce/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--camel-crush-cigarette-availability-in-georgia--bca6a3ce/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--camel-crush-cigarette-availability-in-georgia--bca6a3ce/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--camel-crush-cigarette-availability-in-georgia--bca6a3ce/1-conversation';

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
