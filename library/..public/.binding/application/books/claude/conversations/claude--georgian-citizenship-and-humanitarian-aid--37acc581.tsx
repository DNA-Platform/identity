import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--georgian-citizenship-and-humanitarian-aid--37acc581/.book';
import Cover from '../../../../../../.claude/.conversations/claude--georgian-citizenship-and-humanitarian-aid--37acc581/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--georgian-citizenship-and-humanitarian-aid--37acc581/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--georgian-citizenship-and-humanitarian-aid--37acc581/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--georgian-citizenship-and-humanitarian-aid--37acc581/1-conversation';

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
