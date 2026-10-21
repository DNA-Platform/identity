import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--eirian-and-i-again--421d74bc/.book';
import Cover from '../../../../../../.claude/.conversations/claude--eirian-and-i-again--421d74bc/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--eirian-and-i-again--421d74bc/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--eirian-and-i-again--421d74bc/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--eirian-and-i-again--421d74bc/1-conversation';

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
