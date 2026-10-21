import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--using-a-telegram-username-on-a-new-account--dd7f5daa/.book';
import Cover from '../../../../../../.claude/.conversations/claude--using-a-telegram-username-on-a-new-account--dd7f5daa/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--using-a-telegram-username-on-a-new-account--dd7f5daa/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--using-a-telegram-username-on-a-new-account--dd7f5daa/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--using-a-telegram-username-on-a-new-account--dd7f5daa/1-conversation';

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
