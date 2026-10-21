import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--alku-university-campus-locations-in-turkey--4f9b6c7b/.book';
import Cover from '../../../../../../.claude/.conversations/claude--alku-university-campus-locations-in-turkey--4f9b6c7b/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--alku-university-campus-locations-in-turkey--4f9b6c7b/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--alku-university-campus-locations-in-turkey--4f9b6c7b/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--alku-university-campus-locations-in-turkey--4f9b6c7b/1-conversation';

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
