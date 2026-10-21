import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--georgia-russia-relations-and-2008-war-aftermath--4389cf3b/.book';
import Cover from '../../../../../../.claude/.conversations/claude--georgia-russia-relations-and-2008-war-aftermath--4389cf3b/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--georgia-russia-relations-and-2008-war-aftermath--4389cf3b/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--georgia-russia-relations-and-2008-war-aftermath--4389cf3b/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--georgia-russia-relations-and-2008-war-aftermath--4389cf3b/1-conversation';

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
