import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--preparing-custody-case-communication-for-lawyers--e5737827/.book';
import Cover from '../../../../../../.claude/.conversations/claude--preparing-custody-case-communication-for-lawyers--e5737827/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--preparing-custody-case-communication-for-lawyers--e5737827/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--preparing-custody-case-communication-for-lawyers--e5737827/.table';
import January1820261 from '../../../../../../.claude/.conversations/claude--preparing-custody-case-communication-for-lawyers--e5737827/1-january-18-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {January1820261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
