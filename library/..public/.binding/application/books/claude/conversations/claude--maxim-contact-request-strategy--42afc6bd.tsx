import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--maxim-contact-request-strategy--42afc6bd/.book';
import Cover from '../../../../../../.claude/.conversations/claude--maxim-contact-request-strategy--42afc6bd/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--maxim-contact-request-strategy--42afc6bd/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--maxim-contact-request-strategy--42afc6bd/.table';
import October820261 from '../../../../../../.claude/.conversations/claude--maxim-contact-request-strategy--42afc6bd/1-october-8-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {October820261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
