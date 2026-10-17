import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--atomic-wallet/.book';
import Cover from '../../../../../../.claude/.conversations/claude--atomic-wallet/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--atomic-wallet/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--atomic-wallet/.table';
import January1320261 from '../../../../../../.claude/.conversations/claude--atomic-wallet/1-january-13-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {January1320261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
