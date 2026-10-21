import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--accessing-katyas-whatsapp-account-risks--be6ce4cc/.book';
import Cover from '../../../../../../.claude/.conversations/claude--accessing-katyas-whatsapp-account-risks--be6ce4cc/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--accessing-katyas-whatsapp-account-risks--be6ce4cc/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--accessing-katyas-whatsapp-account-risks--be6ce4cc/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--accessing-katyas-whatsapp-account-risks--be6ce4cc/1-conversation';

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
