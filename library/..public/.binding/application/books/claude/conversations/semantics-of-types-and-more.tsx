import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/semantics-of-types-and-more/.book';
import Cover from '../../../../../../.claude/.conversations/semantics-of-types-and-more/.cover';
import Synopsis from '../../../../../../.claude/.conversations/semantics-of-types-and-more/.synopsis';
import Table from '../../../../../../.claude/.conversations/semantics-of-types-and-more/.table';
import September920261 from '../../../../../../.claude/.conversations/semantics-of-types-and-more/1-september-9-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {September920261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
