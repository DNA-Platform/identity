import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--address-change-checklist--b7ecf2f1/.book';
import Cover from '../../../../../../.claude/.conversations/claude--address-change-checklist--b7ecf2f1/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--address-change-checklist--b7ecf2f1/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--address-change-checklist--b7ecf2f1/.table';
import May1020261 from '../../../../../../.claude/.conversations/claude--address-change-checklist--b7ecf2f1/1-may-10-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {May1020261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
