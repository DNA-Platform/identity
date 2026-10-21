import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--days-alive-from-march-2017-to-april-2026--f5116889/.book';
import Cover from '../../../../../../.claude/.conversations/claude--days-alive-from-march-2017-to-april-2026--f5116889/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--days-alive-from-march-2017-to-april-2026--f5116889/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--days-alive-from-march-2017-to-april-2026--f5116889/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--days-alive-from-march-2017-to-april-2026--f5116889/1-conversation';

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
