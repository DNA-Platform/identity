import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/semantics-of-representation/.book';
import Cover from '../../../../../../.claude/.conversations/semantics-of-representation/.cover';
import Synopsis from '../../../../../../.claude/.conversations/semantics-of-representation/.synopsis';
import Table from '../../../../../../.claude/.conversations/semantics-of-representation/.table';
import September1020261 from '../../../../../../.claude/.conversations/semantics-of-representation/1-september-10-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {September1020261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
