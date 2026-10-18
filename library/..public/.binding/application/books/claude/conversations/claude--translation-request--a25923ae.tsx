import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--translation-request--a25923ae/.book';
import Cover from '../../../../../../.claude/.conversations/claude--translation-request--a25923ae/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--translation-request--a25923ae/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--translation-request--a25923ae/.table';
import June420261 from '../../../../../../.claude/.conversations/claude--translation-request--a25923ae/1-june-4-2026';
import June520262 from '../../../../../../.claude/.conversations/claude--translation-request--a25923ae/2-june-5-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {June420261()}
        {June520262()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
