import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--okay-custody-court-is-happenin--88a184db/.book';
import Cover from '../../../../../../.claude/.conversations/claude--okay-custody-court-is-happenin--88a184db/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--okay-custody-court-is-happenin--88a184db/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--okay-custody-court-is-happenin--88a184db/.table';
import January2420261 from '../../../../../../.claude/.conversations/claude--okay-custody-court-is-happenin--88a184db/1-january-24-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {January2420261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
