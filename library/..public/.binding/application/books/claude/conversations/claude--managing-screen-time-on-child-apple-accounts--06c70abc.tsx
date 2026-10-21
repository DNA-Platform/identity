import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--managing-screen-time-on-child-apple-accounts--06c70abc/.book';
import Cover from '../../../../../../.claude/.conversations/claude--managing-screen-time-on-child-apple-accounts--06c70abc/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--managing-screen-time-on-child-apple-accounts--06c70abc/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--managing-screen-time-on-child-apple-accounts--06c70abc/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--managing-screen-time-on-child-apple-accounts--06c70abc/1-conversation';

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
