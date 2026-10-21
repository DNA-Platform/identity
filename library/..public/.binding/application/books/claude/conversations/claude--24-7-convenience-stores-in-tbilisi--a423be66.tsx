import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--24-7-convenience-stores-in-tbilisi--a423be66/.book';
import Cover from '../../../../../../.claude/.conversations/claude--24-7-convenience-stores-in-tbilisi--a423be66/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--24-7-convenience-stores-in-tbilisi--a423be66/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--24-7-convenience-stores-in-tbilisi--a423be66/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--24-7-convenience-stores-in-tbilisi--a423be66/1-conversation';

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
