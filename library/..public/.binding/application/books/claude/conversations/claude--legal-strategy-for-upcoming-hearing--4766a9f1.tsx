import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--legal-strategy-for-upcoming-hearing--4766a9f1/.book';
import Cover from '../../../../../../.claude/.conversations/claude--legal-strategy-for-upcoming-hearing--4766a9f1/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--legal-strategy-for-upcoming-hearing--4766a9f1/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--legal-strategy-for-upcoming-hearing--4766a9f1/.table';
import January2320261 from '../../../../../../.claude/.conversations/claude--legal-strategy-for-upcoming-hearing--4766a9f1/1-january-23-2026';
import January2920262 from '../../../../../../.claude/.conversations/claude--legal-strategy-for-upcoming-hearing--4766a9f1/2-january-29-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {January2320261()}
        {January2920262()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
