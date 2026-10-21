import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--building-and-practicing-a-personal-vocabulary--2fb9debb/.book';
import Cover from '../../../../../../.claude/.conversations/claude--building-and-practicing-a-personal-vocabulary--2fb9debb/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--building-and-practicing-a-personal-vocabulary--2fb9debb/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--building-and-practicing-a-personal-vocabulary--2fb9debb/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--building-and-practicing-a-personal-vocabulary--2fb9debb/1-conversation';

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
