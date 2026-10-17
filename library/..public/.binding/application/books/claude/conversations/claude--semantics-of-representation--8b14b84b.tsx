import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--semantics-of-representation--8b14b84b/.book';
import Cover from '../../../../../../.claude/.conversations/claude--semantics-of-representation--8b14b84b/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--semantics-of-representation--8b14b84b/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--semantics-of-representation--8b14b84b/.table';
import September1020261 from '../../../../../../.claude/.conversations/claude--semantics-of-representation--8b14b84b/1-september-10-2026';
import September1120262 from '../../../../../../.claude/.conversations/claude--semantics-of-representation--8b14b84b/2-september-11-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {September1020261()}
        {September1120262()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
