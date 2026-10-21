import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--formal-foundations-of-type-systems-and-inheritance--705afcd4/.book';
import Cover from '../../../../../../.claude/.conversations/claude--formal-foundations-of-type-systems-and-inheritance--705afcd4/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--formal-foundations-of-type-systems-and-inheritance--705afcd4/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--formal-foundations-of-type-systems-and-inheritance--705afcd4/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--formal-foundations-of-type-systems-and-inheritance--705afcd4/1-conversation';

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
