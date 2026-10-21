import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--palatalization-in-russian-phonology--2b257eef/.book';
import Cover from '../../../../../../.claude/.conversations/claude--palatalization-in-russian-phonology--2b257eef/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--palatalization-in-russian-phonology--2b257eef/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--palatalization-in-russian-phonology--2b257eef/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--palatalization-in-russian-phonology--2b257eef/1-conversation';

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
