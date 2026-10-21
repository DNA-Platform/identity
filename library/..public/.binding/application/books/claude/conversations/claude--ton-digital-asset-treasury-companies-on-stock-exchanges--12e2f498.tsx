import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--ton-digital-asset-treasury-companies-on-stock-exchanges--12e2f498/.book';
import Cover from '../../../../../../.claude/.conversations/claude--ton-digital-asset-treasury-companies-on-stock-exchanges--12e2f498/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--ton-digital-asset-treasury-companies-on-stock-exchanges--12e2f498/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--ton-digital-asset-treasury-companies-on-stock-exchanges--12e2f498/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--ton-digital-asset-treasury-companies-on-stock-exchanges--12e2f498/1-conversation';

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
