import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--test--9facbd5d/.book';
import Cover from '../../../../../../.claude/.conversations/claude--test--9facbd5d/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--test--9facbd5d/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--test--9facbd5d/.table';
import June1720261 from '../../../../../../.claude/.conversations/claude--test--9facbd5d/1-june-17-2026';
import June1820262 from '../../../../../../.claude/.conversations/claude--test--9facbd5d/2-june-18-2026';
import June2120263 from '../../../../../../.claude/.conversations/claude--test--9facbd5d/3-june-21-2026';
import September1720264 from '../../../../../../.claude/.conversations/claude--test--9facbd5d/4-september-17-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {June1720261()}
        {June1820262()}
        {June2120263()}
        {September1720264()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
