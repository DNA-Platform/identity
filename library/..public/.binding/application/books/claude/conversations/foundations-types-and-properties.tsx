import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/foundations-types-and-properties/.book';
import Cover from '../../../../../../.claude/.conversations/foundations-types-and-properties/.cover';
import Synopsis from '../../../../../../.claude/.conversations/foundations-types-and-properties/.synopsis';
import Table from '../../../../../../.claude/.conversations/foundations-types-and-properties/.table';
import August3120261 from '../../../../../../.claude/.conversations/foundations-types-and-properties/1-august-31-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {August3120261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
