import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/anonymous-cryptographers/.book';
import Cover from '../../../../../../.claude/.conversations/anonymous-cryptographers/.cover';
import Synopsis from '../../../../../../.claude/.conversations/anonymous-cryptographers/.synopsis';
import Table from '../../../../../../.claude/.conversations/anonymous-cryptographers/.table';
import January1820261 from '../../../../../../.claude/.conversations/anonymous-cryptographers/1-january-18-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {January1820261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
