import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--trumps-china-election-data-breach-claims--ae37df8c/.book';
import Cover from '../../../../../../.claude/.conversations/claude--trumps-china-election-data-breach-claims--ae37df8c/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--trumps-china-election-data-breach-claims--ae37df8c/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--trumps-china-election-data-breach-claims--ae37df8c/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--trumps-china-election-data-breach-claims--ae37df8c/1-conversation';

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
