import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--leaving-packages-at-apartment-complexes--8cd0717b/.book';
import Cover from '../../../../../../.claude/.conversations/claude--leaving-packages-at-apartment-complexes--8cd0717b/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--leaving-packages-at-apartment-complexes--8cd0717b/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--leaving-packages-at-apartment-complexes--8cd0717b/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--leaving-packages-at-apartment-complexes--8cd0717b/1-conversation';

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
