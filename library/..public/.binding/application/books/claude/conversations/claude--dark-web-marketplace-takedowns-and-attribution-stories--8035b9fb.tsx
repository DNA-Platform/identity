import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--dark-web-marketplace-takedowns-and-attribution-stories--8035b9fb/.book';
import Cover from '../../../../../../.claude/.conversations/claude--dark-web-marketplace-takedowns-and-attribution-stories--8035b9fb/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--dark-web-marketplace-takedowns-and-attribution-stories--8035b9fb/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--dark-web-marketplace-takedowns-and-attribution-stories--8035b9fb/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--dark-web-marketplace-takedowns-and-attribution-stories--8035b9fb/1-conversation';

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
