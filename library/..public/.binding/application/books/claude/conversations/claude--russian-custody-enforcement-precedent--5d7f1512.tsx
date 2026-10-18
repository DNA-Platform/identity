import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--russian-custody-enforcement-precedent--5d7f1512/.book';
import Cover from '../../../../../../.claude/.conversations/claude--russian-custody-enforcement-precedent--5d7f1512/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--russian-custody-enforcement-precedent--5d7f1512/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--russian-custody-enforcement-precedent--5d7f1512/.table';
import October920261 from '../../../../../../.claude/.conversations/claude--russian-custody-enforcement-precedent--5d7f1512/1-october-9-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {October920261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
