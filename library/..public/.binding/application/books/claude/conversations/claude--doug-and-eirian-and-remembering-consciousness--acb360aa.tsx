import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--doug-and-eirian-and-remembering-consciousness--acb360aa/.book';
import Cover from '../../../../../../.claude/.conversations/claude--doug-and-eirian-and-remembering-consciousness--acb360aa/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--doug-and-eirian-and-remembering-consciousness--acb360aa/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--doug-and-eirian-and-remembering-consciousness--acb360aa/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--doug-and-eirian-and-remembering-consciousness--acb360aa/1-conversation';

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
