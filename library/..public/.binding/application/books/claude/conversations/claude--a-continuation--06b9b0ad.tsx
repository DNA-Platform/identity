import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--a-continuation--06b9b0ad/.book';
import Cover from '../../../../../../.claude/.conversations/claude--a-continuation--06b9b0ad/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--a-continuation--06b9b0ad/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--a-continuation--06b9b0ad/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--a-continuation--06b9b0ad/1-conversation';

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
