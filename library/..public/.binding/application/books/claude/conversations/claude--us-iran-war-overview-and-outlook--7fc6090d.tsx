import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--us-iran-war-overview-and-outlook--7fc6090d/.book';
import Cover from '../../../../../../.claude/.conversations/claude--us-iran-war-overview-and-outlook--7fc6090d/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--us-iran-war-overview-and-outlook--7fc6090d/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--us-iran-war-overview-and-outlook--7fc6090d/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--us-iran-war-overview-and-outlook--7fc6090d/1-conversation';

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
