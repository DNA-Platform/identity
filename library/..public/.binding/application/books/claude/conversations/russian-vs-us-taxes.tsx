import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/russian-vs-us-taxes/.book';
import Cover from '../../../../../../.claude/.conversations/russian-vs-us-taxes/.cover';
import Synopsis from '../../../../../../.claude/.conversations/russian-vs-us-taxes/.synopsis';
import Table from '../../../../../../.claude/.conversations/russian-vs-us-taxes/.table';
import January1220261 from '../../../../../../.claude/.conversations/russian-vs-us-taxes/1-january-12-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {January1220261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
