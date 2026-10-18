import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--legal-negotiation-strategy-review--65b2b5a1/.book';
import Cover from '../../../../../../.claude/.conversations/claude--legal-negotiation-strategy-review--65b2b5a1/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--legal-negotiation-strategy-review--65b2b5a1/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--legal-negotiation-strategy-review--65b2b5a1/.table';
import April2620261 from '../../../../../../.claude/.conversations/claude--legal-negotiation-strategy-review--65b2b5a1/1-april-26-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {April2620261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
