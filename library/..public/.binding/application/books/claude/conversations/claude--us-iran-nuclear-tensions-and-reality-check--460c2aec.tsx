import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--us-iran-nuclear-tensions-and-reality-check--460c2aec/.book';
import Cover from '../../../../../../.claude/.conversations/claude--us-iran-nuclear-tensions-and-reality-check--460c2aec/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--us-iran-nuclear-tensions-and-reality-check--460c2aec/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--us-iran-nuclear-tensions-and-reality-check--460c2aec/.table';
import February1820261 from '../../../../../../.claude/.conversations/claude--us-iran-nuclear-tensions-and-reality-check--460c2aec/1-february-18-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {February1820261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
