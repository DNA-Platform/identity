import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--collection-semantics-and-canonical-representatives--242c2548/.book';
import Cover from '../../../../../../.claude/.conversations/claude--collection-semantics-and-canonical-representatives--242c2548/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--collection-semantics-and-canonical-representatives--242c2548/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--collection-semantics-and-canonical-representatives--242c2548/.table';
import August2420261 from '../../../../../../.claude/.conversations/claude--collection-semantics-and-canonical-representatives--242c2548/1-august-24-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {August2420261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
