import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--switching-from-google-login-to-password--08725aec/.book';
import Cover from '../../../../../../.claude/.conversations/claude--switching-from-google-login-to-password--08725aec/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--switching-from-google-login-to-password--08725aec/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--switching-from-google-login-to-password--08725aec/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--switching-from-google-login-to-password--08725aec/1-conversation';

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
