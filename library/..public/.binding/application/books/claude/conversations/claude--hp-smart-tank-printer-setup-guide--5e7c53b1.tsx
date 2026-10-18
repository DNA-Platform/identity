import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--hp-smart-tank-printer-setup-guide--5e7c53b1/.book';
import Cover from '../../../../../../.claude/.conversations/claude--hp-smart-tank-printer-setup-guide--5e7c53b1/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--hp-smart-tank-printer-setup-guide--5e7c53b1/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--hp-smart-tank-printer-setup-guide--5e7c53b1/.table';
import March1820261 from '../../../../../../.claude/.conversations/claude--hp-smart-tank-printer-setup-guide--5e7c53b1/1-march-18-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {March1820261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
