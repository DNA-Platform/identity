import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--work-profile-review-and-conversation-context--e4b90c2c/.book';
import Cover from '../../../../../../.claude/.conversations/claude--work-profile-review-and-conversation-context--e4b90c2c/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--work-profile-review-and-conversation-context--e4b90c2c/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--work-profile-review-and-conversation-context--e4b90c2c/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--work-profile-review-and-conversation-context--e4b90c2c/1-conversation';

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
