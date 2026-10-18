import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--russian-enforcement-proceedings-document-translation--efc4cc99/.book';
import Cover from '../../../../../../.claude/.conversations/claude--russian-enforcement-proceedings-document-translation--efc4cc99/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--russian-enforcement-proceedings-document-translation--efc4cc99/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--russian-enforcement-proceedings-document-translation--efc4cc99/.table';
import July620261 from '../../../../../../.claude/.conversations/claude--russian-enforcement-proceedings-document-translation--efc4cc99/1-july-6-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {July620261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
