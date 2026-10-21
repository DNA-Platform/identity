import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--calculating-ownership-percentage-in-tonx--277e30ae/.book';
import Cover from '../../../../../../.claude/.conversations/claude--calculating-ownership-percentage-in-tonx--277e30ae/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--calculating-ownership-percentage-in-tonx--277e30ae/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--calculating-ownership-percentage-in-tonx--277e30ae/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--calculating-ownership-percentage-in-tonx--277e30ae/1-conversation';

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
