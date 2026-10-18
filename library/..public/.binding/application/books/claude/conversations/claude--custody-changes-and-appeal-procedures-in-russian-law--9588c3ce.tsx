import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--custody-changes-and-appeal-procedures-in-russian-law--9588c3ce/.book';
import Cover from '../../../../../../.claude/.conversations/claude--custody-changes-and-appeal-procedures-in-russian-law--9588c3ce/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--custody-changes-and-appeal-procedures-in-russian-law--9588c3ce/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--custody-changes-and-appeal-procedures-in-russian-law--9588c3ce/.table';
import February1820261 from '../../../../../../.claude/.conversations/claude--custody-changes-and-appeal-procedures-in-russian-law--9588c3ce/1-february-18-2026';

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
