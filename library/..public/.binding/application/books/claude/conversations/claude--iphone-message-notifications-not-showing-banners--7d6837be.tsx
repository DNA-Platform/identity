import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--iphone-message-notifications-not-showing-banners--7d6837be/.book';
import Cover from '../../../../../../.claude/.conversations/claude--iphone-message-notifications-not-showing-banners--7d6837be/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--iphone-message-notifications-not-showing-banners--7d6837be/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--iphone-message-notifications-not-showing-banners--7d6837be/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--iphone-message-notifications-not-showing-banners--7d6837be/1-conversation';

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
