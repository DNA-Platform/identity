import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--untitled-24-august-2026--e4592a75/.book';
import Cover from '../../../../../../.claude/.conversations/claude--untitled-24-august-2026--e4592a75/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--untitled-24-august-2026--e4592a75/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--untitled-24-august-2026--e4592a75/.table';
import August2420261 from '../../../../../../.claude/.conversations/claude--untitled-24-august-2026--e4592a75/1-august-24-2026';

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
