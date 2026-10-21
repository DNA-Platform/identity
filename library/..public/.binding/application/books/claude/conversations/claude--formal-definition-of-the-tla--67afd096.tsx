import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--formal-definition-of-the-tla--67afd096/.book';
import Cover from '../../../../../../.claude/.conversations/claude--formal-definition-of-the-tla--67afd096/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--formal-definition-of-the-tla--67afd096/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--formal-definition-of-the-tla--67afd096/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--formal-definition-of-the-tla--67afd096/1-conversation';

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
