import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--trumps-impact-on-ton-and-telegrams-resilience/.book';
import Cover from '../../../../../../.claude/.conversations/claude--trumps-impact-on-ton-and-telegrams-resilience/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--trumps-impact-on-ton-and-telegrams-resilience/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--trumps-impact-on-ton-and-telegrams-resilience/.table';
import February120261 from '../../../../../../.claude/.conversations/claude--trumps-impact-on-ton-and-telegrams-resilience/1-february-1-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {February120261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
