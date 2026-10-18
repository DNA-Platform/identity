import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--prime-numbers-greater-than-100--616b1f61/.book';
import Cover from '../../../../../../.claude/.conversations/claude--prime-numbers-greater-than-100--616b1f61/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--prime-numbers-greater-than-100--616b1f61/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--prime-numbers-greater-than-100--616b1f61/.table';
import June1820261 from '../../../../../../.claude/.conversations/claude--prime-numbers-greater-than-100--616b1f61/1-june-18-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {June1820261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
