import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--first-order-logic-semantics-in-srt--c9a8a056/.book';
import Cover from '../../../../../../.claude/.conversations/claude--first-order-logic-semantics-in-srt--c9a8a056/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--first-order-logic-semantics-in-srt--c9a8a056/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--first-order-logic-semantics-in-srt--c9a8a056/.table';
import May1220261 from '../../../../../../.claude/.conversations/claude--first-order-logic-semantics-in-srt--c9a8a056/1-may-12-2026';
import May1320262 from '../../../../../../.claude/.conversations/claude--first-order-logic-semantics-in-srt--c9a8a056/2-may-13-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {May1220261()}
        {May1320262()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
