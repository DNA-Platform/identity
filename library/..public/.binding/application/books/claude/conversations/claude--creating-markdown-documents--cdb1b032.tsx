import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--creating-markdown-documents--cdb1b032/.book';
import Cover from '../../../../../../.claude/.conversations/claude--creating-markdown-documents--cdb1b032/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--creating-markdown-documents--cdb1b032/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--creating-markdown-documents--cdb1b032/.table';
import October2720251 from '../../../../../../.claude/.conversations/claude--creating-markdown-documents--cdb1b032/1-october-27-2025';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {October2720251()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
